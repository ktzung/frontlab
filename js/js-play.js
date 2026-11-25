/* FrontLab — JS Playground: chạy mã, bắt console/lỗi, môi trường DOM và dữ liệu giả */
(function () {
  "use strict";

  const RUNTIME_CSS = `
    :root { color-scheme: light; }
    body {
      margin: 0; padding: 18px;
      font: 15px/1.6 "Be Vietnam Pro", "Segoe UI", system-ui, sans-serif;
      color: #14202d; background: #fffdf8;
    }
    h1 { margin: 0 0 6px; font-size: 1.55rem; line-height: 1.3; }
    h2 { font-size: 1.2rem; line-height: 1.3; }
    p { margin: .45em 0; }
    button, input, select, textarea { font: inherit; }
    button { padding: 7px 12px; border: 1px solid #c9c1b2; border-radius: 8px; background: #fff; cursor: pointer; }
    input { padding: 7px 9px; border: 1px solid #c9c1b2; border-radius: 8px; background: #fff; }
    ul { padding-left: 22px; }
    .js-default { padding: 14px 16px; border: 1px dashed #c9c1b2; border-radius: 12px; background: #f8f5ec; }
    .js-default > span { font: 600 10px/1.4 ui-monospace, monospace; letter-spacing: .12em; color: #5c6b7a; }
    .js-hint { color: #5c6b7a; font-size: 13px; }
  `;

  let active = null;

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function cleanup() {
    if (!active) return;
    active.cleanups.forEach((fn) => {
      try { fn(); } catch (error) { /* ignore */ }
    });
    active = null;
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function foundTerms(code) {
    const G = window.JS_GLOSSARY || {};
    const keys = Object.keys(G);
    return keys.map((key) => {
      const text = key === "=>" ? "=>" : key;
      let at = -1;
      if (key === "=>" || /[^\w$]/.test(key) || key === "catch (error)") {
        at = code.indexOf(text);
      } else {
        const re = new RegExp("(^|[^\\w$])" + escapeRegExp(text) + "([^\\w$]|$)");
        const match = re.exec(code);
        at = match ? match.index + match[1].length : -1;
      }
      return { key, at };
    }).filter((item) => item.at >= 0).sort((a, b) => a.at - b.at).map((item) => item.key);
  }

  function termHTML(term) {
    if (!term) return '<p class="flp-empty">Bấm một từ khóa để đọc giải nghĩa.</p>';
    return `<div class="flp-term-top">
      <div class="flp-term-name">
        <span class="flp-term-kind">${esc(term.kind)}</span>
        <h3>${esc(term.name)}</h3>
      </div>
    </div>
    <p class="flp-term-what">${esc(term.what)}</p>
    ${term.example ? `<div class="flp-term-block"><span>VÍ DỤ</span><pre>${esc(term.example)}</pre></div>` : ""}
    ${term.tip ? `<p class="flp-term-tip">${esc(term.tip)}</p>` : ""}`;
  }

  function transformCode(code, config) {
    if (config && config.transform === "module") {
      return code
        .replace(/^\s*import[^;]*;\s*$/gm, "")
        .replace(/^\s*export\s+default\s+/gm, "")
        .replace(/^\s*export\s+/gm, "");
    }
    return code;
  }

  function bridge(config) {
    const mock = JSON.stringify((config && config.mock) || []);
    return `<script>
(function () {
  var MOCK = ${mock};
  function send(type, data) {
    try { parent.postMessage(Object.assign({ flp: "js", type: type }, data || {}), "*"); } catch (error) {}
  }
  function format(value) {
    if (typeof value === "string") return value;
    if (typeof value === "undefined") return "undefined";
    if (value instanceof Error) return value.name + ": " + value.message;
    try {
      var json = JSON.stringify(value);
      return typeof json === "undefined" ? String(value) : json;
    } catch (error) {
      return String(value);
    }
  }
  ["log", "info", "warn", "error"].forEach(function (level) {
    console[level] = function () {
      var parts = [];
      for (var i = 0; i < arguments.length; i += 1) parts.push(format(arguments[i]));
      send("log", { level: level, text: parts.join(" ") });
    };
  });
  window.addEventListener("error", function (event) {
    send("log", { level: "error", text: "Lỗi: " + (event.message || "không xác định") });
  });
  window.addEventListener("unhandledrejection", function (event) {
    var reason = event.reason;
    send("log", { level: "error", text: "Promise bị từ chối: " + format(reason) });
  });
  function memoryStore() {
    var data = {};
    return {
      getItem: function (key) { return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null; },
      setItem: function (key, value) { data[String(key)] = String(value); },
      removeItem: function (key) { delete data[String(key)]; },
      clear: function () { data = {}; },
      key: function (index) { return Object.keys(data)[index] || null; },
      get length() { return Object.keys(data).length; }
    };
  }
  try {
    Object.defineProperty(window, "localStorage", { value: memoryStore(), configurable: true });
    Object.defineProperty(window, "sessionStorage", { value: memoryStore(), configurable: true });
  } catch (error) {
    send("log", { level: "warn", text: "Không thay được localStorage; bài storage có thể báo lỗi bảo mật." });
  }
  HTMLFormElement.prototype.submit = function () {
    send("log", { level: "info", text: "[mock] form.submit() — không gửi dữ liệu thật" });
  };
  if (MOCK.length) {
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : (input && input.url) || "";
      var method = ((init && init.method) || "GET").toUpperCase();
      var hit = null;
      MOCK.forEach(function (item) {
        var itemMethod = (item.method || "GET").toUpperCase();
        if (itemMethod !== method) return;
        if (url === item.path || url.indexOf(item.path) === 0) {
          if (!hit || item.path.length > hit.path.length) hit = item;
        }
      });
      var status = hit ? hit.status : 404;
      var body = hit ? hit.body : { message: "Không có dữ liệu giả cho " + url };
      send("log", { level: status >= 400 ? "warn" : "info", text: "[mock] " + method + " " + url + " → " + status });
      return Promise.resolve({
        ok: status >= 200 && status < 300,
        status: status,
        json: function () { return Promise.resolve(body); },
        text: function () { return Promise.resolve(JSON.stringify(body)); }
      });
    };
  }
  send("ready", {});
})();
</script>`;
  }

  function runtimeDocument(harness, code, config) {
    const bridgeCode = bridge(config);
    const prelude = config && config.prelude ? config.prelude + "\n" : "";
    const userCode = transformCode(code, config);
    return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${RUNTIME_CSS}</style></head><body>
${harness}
${bridgeCode}
<script>${prelude}\n${userCode}</script>
<script>try { parent.postMessage({ flp: "js", type: "done" }, "*"); } catch (error) {}</script>
</body></html>`;
  }

  function mount(host, lesson, config) {
    cleanup();
    if (!host) return;
    const cfg = config || {};
    const original = lesson && lesson.code ? lesson.code : "";
    const title = cfg.title || (lesson && lesson.title) || "JavaScript";
    const lead = cfg.lead || "Chạy mã và xem kết quả trong console.";
    const harness = cfg.harness || `<section class="js-default">
      <span>MÔI TRƯỜNG CHẠY</span>
      <h1>${esc(title)}</h1>
      <p>${esc(lead)}</p>
      <p class="js-hint">Bài này không thao tác DOM; kết quả nằm trong console bên dưới.</p>
    </section>`;
    const shell = document.createElement("div");
    shell.className = "flp flp-js";
    shell.innerHTML = `<div class="flp-head">
      <div class="flp-head-copy">
        <span class="flp-kicker"><span class="flp-dot"></span>JS PLAYGROUND</span>
        <strong class="flp-title">${esc(title)}</strong>
        <span class="flp-meta">Sửa mã · Ctrl/Cmd + Enter để chạy · console nhận log, lỗi và request giả lập</span>
      </div>
      <div class="flp-tools">
        <button class="flp-run" type="button" data-flp-run>Chạy mã</button>
        <button class="flp-reset" type="button" data-flp-reset>Khôi phục mã</button>
      </div>
    </div>
    <div class="flp-body">
      <section class="flp-pane flp-editor-pane">
        <div class="flp-pane-head"><span>MÃ JAVASCRIPT</span><span data-flp-count></span></div>
        <textarea class="flp-code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Mã JavaScript của bài"></textarea>
        <div class="flp-chips" data-flp-chips></div>
        <div class="flp-term" data-flp-term></div>
      </section>
      <section class="flp-pane flp-preview-pane">
        <div class="flp-pane-head"><span>TRANG CHẠY</span><span class="flp-status" data-flp-status>Chưa chạy</span></div>
        <div class="flp-stage flp-js-stage"><div class="flp-frame-wrap"><iframe class="flp-frame" title="Môi trường chạy JavaScript" sandbox="allow-scripts allow-forms" referrerpolicy="no-referrer"></iframe></div></div>
        <div class="flp-console-wrap">
          <div class="flp-console-head"><span>CONSOLE</span><button class="flp-console-clear" type="button" data-flp-clear>Xóa</button></div>
          <div class="flp-console" data-flp-console><p class="flp-empty">Chưa có log. Bấm Chạy mã hoặc thêm console.log.</p></div>
        </div>
      </section>
    </div>
    <p class="flp-note">${esc(cfg.note || "Mã chạy trong iframe sandbox. localStorage là bộ nhớ tạm; fetch được thay bằng dữ liệu giả khi bài cần.")}</p>`;
    host.appendChild(shell);

    const ta = shell.querySelector(".flp-code");
    const frame = shell.querySelector(".flp-frame");
    const countEl = shell.querySelector("[data-flp-count]");
    const statusEl = shell.querySelector("[data-flp-status]");
    const consoleEl = shell.querySelector("[data-flp-console]");
    const chipsEl = shell.querySelector("[data-flp-chips]");
    const termEl = shell.querySelector("[data-flp-term]");
    let currentTerm = null;
    let empty = true;

    function updateCount() {
      const value = ta.value;
      countEl.textContent = `${value ? value.split("\n").length : 0} dòng · ${value.length} ký tự`;
    }

    function showTerm(term) {
      currentTerm = term;
      termEl.innerHTML = termHTML(term);
      chipsEl.querySelectorAll("[data-flp-term]").forEach((chip) => {
        chip.classList.toggle("is-active", !!term && chip.dataset.flpTerm === term.name);
      });
    }

    function renderChips(code) {
      const G = window.JS_GLOSSARY || {};
      const terms = foundTerms(code);
      if (!terms.length) {
        chipsEl.innerHTML = "";
        showTerm(null);
        return;
      }
      chipsEl.innerHTML = `<div class="flp-chipgroup"><span>TỪ KHÓA</span><div class="flp-chip-list">${terms.map((name) => `<button class="flp-chip" type="button" data-flp-term="${esc(name)}">${esc(name)}</button>`).join("")}</div></div>`;
      const previous = currentTerm && currentTerm.name;
      const keep = previous && terms.includes(previous) ? previous : terms[0];
      const entry = G[keep];
      showTerm(entry ? Object.assign({ name: keep }, entry) : null);
    }

    function clearConsole() {
      consoleEl.innerHTML = '<p class="flp-empty">Chưa có log. Bấm Chạy mã hoặc thêm console.log.</p>';
      empty = true;
    }

    function appendLog(level, text) {
      if (empty) {
        consoleEl.innerHTML = "";
        empty = false;
      }
      const row = document.createElement("div");
      row.className = "flp-log is-" + (level || "log");
      const mark = document.createElement("span");
      mark.className = "flp-log-mark";
      const body = document.createElement("span");
      body.className = "flp-log-text";
      body.textContent = text;
      row.appendChild(mark);
      row.appendChild(body);
      consoleEl.appendChild(row);
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    function run() {
      clearConsole();
      statusEl.textContent = "Đang chạy";
      renderChips(ta.value);
      updateCount();
      frame.srcdoc = runtimeDocument(harness, ta.value, cfg);
    }

    function onMessage(event) {
      if (event.source !== frame.contentWindow) return;
      const data = event.data || {};
      if (data.flp !== "js") return;
      if (data.type === "log") {
        appendLog(data.level, data.text);
        return;
      }
      if (data.type === "done") {
        statusEl.textContent = "Đã chạy xong";
      }
    }

    const onInput = () => {
      updateCount();
      renderChips(ta.value);
    };
    const onKey = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        ta.value = ta.value.slice(0, start) + "  " + ta.value.slice(end);
        ta.selectionStart = ta.selectionEnd = start + 2;
        onInput();
      }
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        run();
      }
    };
    const onChips = (event) => {
      const chip = event.target.closest("[data-flp-term]");
      if (!chip) return;
      const entry = (window.JS_GLOSSARY || {})[chip.dataset.flpTerm];
      showTerm(entry ? Object.assign({ name: chip.dataset.flpTerm }, entry) : null);
    };
    const onReset = () => {
      ta.value = original;
      updateCount();
      renderChips(ta.value);
      run();
      ta.focus();
    };

    ta.value = original;
    updateCount();
    ta.addEventListener("input", onInput);
    ta.addEventListener("keydown", onKey);
    chipsEl.addEventListener("click", onChips);
    shell.querySelector("[data-flp-run]").addEventListener("click", run);
    shell.querySelector("[data-flp-reset]").addEventListener("click", onReset);
    shell.querySelector("[data-flp-clear]").addEventListener("click", clearConsole);
    window.addEventListener("message", onMessage);
    active = {
      cleanups: [() => window.removeEventListener("message", onMessage)]
    };
    run();
  }

  window.JsPlay = {
    mount,
    cleanup,
    get active() { return !!active; }
  };
})();
