/* FrontLab — HTML Playground: sửa mã, xem trang, đọc cây DOM và giải nghĩa thẻ */
(function () {
  "use strict";

  const BASE_CSS = `
    :root { color-scheme: light; }
    html { -webkit-text-size-adjust: 100%; }
    body {
      margin: 0; padding: 18px;
      font: 15px/1.6 "Be Vietnam Pro", "Segoe UI", system-ui, sans-serif;
      color: #14202d; background: #fffdf8;
    }
    h1, h2, h3, h4, h5, h6 { line-height: 1.25; }
    h1 { font-size: 1.75rem; }
    h2 { font-size: 1.3rem; }
    p { margin: .55em 0; }
    a { color: #0b7f70; }
    img, video, iframe { max-width: 100%; }
    img { height: auto; }
    button, input, select, textarea { font: inherit; }
    button { padding: 7px 12px; border: 1px solid #c9c1b2; border-radius: 8px; background: #fff; cursor: pointer; }
    input, select, textarea { padding: 7px 9px; border: 1px solid #c9c1b2; border-radius: 8px; background: #fff; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #dcd6c9; padding: 7px 9px; text-align: left; vertical-align: top; }
    th { background: #f3efe4; }
    figure { margin: 0; }
    figcaption { margin-top: 6px; color: #5c6b7a; font-size: 13px; }
    .flp-highlight { outline: 3px solid #0f9f8a !important; outline-offset: 3px !important; background-color: rgba(15, 159, 138, .08) !important; }
  `;

  const IMG_PLACEHOLDER = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><rect width="640" height="420" rx="18" fill="#e8e2d5"/><path d="M190 290l85-92 62 64 48-46 65 74" fill="none" stroke="#9aa8b5" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="245" cy="155" r="28" fill="#c9d3dc"/><text x="320" y="350" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#5c6b7a">Ảnh giữ chỗ trong playground</text></svg>'
  );

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

  function fullDocument(code, config, withBridge) {
    const head = `<style data-flp-base>${BASE_CSS}</style>${config && config.head ? config.head : ""}`;
    const bridge = withBridge ? bridgeScript() : "";
    if (/<html[\s>]/i.test(code)) {
      let doc = code;
      doc = doc.replace(/<head([^>]*)>/i, `<head$1><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${head}`);
      doc = doc.replace(/<\/body>/i, `${bridge}</body>`);
      return doc;
    }
    return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${head}</head><body>${code}${bridge}</body></html>`;
  }

  function bridgeScript() {
    return `<script>
(function () {
  var PLACEHOLDER = ${JSON.stringify(IMG_PLACEHOLDER)};
  function send(type, extra) {
    try { parent.postMessage(Object.assign({ flp: "html", type: type }, extra || {}), "*"); } catch (error) {}
  }
  function pathOf(el) {
    var path = [];
    var node = el;
    while (node && node !== document.body) {
      var parent = node.parentElement;
      if (!parent) break;
      path.unshift(Array.prototype.indexOf.call(parent.children, node));
      node = parent;
    }
    return path;
  }
  document.addEventListener("error", function (event) {
    var img = event.target;
    if (img && img.tagName === "IMG" && !img.dataset.flpFallback) {
      img.dataset.flpFallback = "1";
      img.src = PLACEHOLDER;
    }
  }, true);
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    send("event", { text: "Đã chặn gửi biểu mẫu trong khung xem trước." });
  }, true);
  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a") : null;
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return;
    event.preventDefault();
    send("event", { text: "Đã chặn mở liên kết: " + href });
  }, true);
  document.addEventListener("click", function (event) {
    var el = event.target && event.target.closest ? event.target.closest("body *") : null;
    if (!el) return;
    send("select", { path: pathOf(el) });
  }, false);
  window.addEventListener("message", function (event) {
    var data = event.data || {};
    if (data.flp !== "html-parent" || data.type !== "highlight") return;
    document.querySelectorAll(".flp-highlight").forEach(function (node) { node.classList.remove("flp-highlight"); });
    var node = document.body;
    var path = data.path || [];
    for (var i = 0; i < path.length; i += 1) {
      if (!node) break;
      node = node.children[path[i]];
    }
    if (node && node !== document.body) {
      node.classList.add("flp-highlight");
      node.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });
  send("ready", {});
})();
</script>`;
  }

  function collectTerms(code) {
    const tags = [];
    const attrs = [];
    const tagRe = /<\s*([a-zA-Z][\w:-]*)\b([^>]*)>/g;
    let match;
    while ((match = tagRe.exec(code))) {
      const tag = match[1].toLowerCase();
      if (!tags.includes(tag)) tags.push(tag);
      const attrRe = /([a-zA-Z_:][-\w:.]*)\s*=/g;
      let attr;
      while ((attr = attrRe.exec(match[2] || ""))) {
        const name = attr[1].toLowerCase();
        if (!attrs.includes(name)) attrs.push(name);
      }
    }
    return { tags, attrs };
  }

  function glossaryFor(name, type) {
    const G = window.HTML_GLOSSARY || {};
    if (type === "attr" && name.indexOf("data-") === 0) {
      return G["data-*"] || null;
    }
    return G[name] || null;
  }

  function termPanelHTML(term) {
    if (!term) return '<p class="flp-empty">Bấm một thẻ hoặc thuộc tính để đọc giải nghĩa.</p>';
    return `<div class="flp-term-top">
      <div class="flp-term-name">
        <span class="flp-term-kind">${esc(term.kind)}</span>
        <h3>${esc(term.name)}</h3>
        <p>${esc(term.group)}</p>
      </div>
    </div>
    <p class="flp-term-what">${esc(term.what)}</p>
    ${term.example ? `<div class="flp-term-block"><span>VÍ DỤ</span><pre>${esc(term.example)}</pre></div>` : ""}
    ${term.tip ? `<p class="flp-term-tip">${esc(term.tip)}</p>` : ""}`;
  }

  function outlineHTML(doc, query) {
    const body = doc.body;
    if (!body) return '<p class="flp-empty">Không đọc được body của tài liệu.</p>';
    const rows = [];
    let count = 0;
    function walk(node, path, depth) {
      if (count >= 90) return;
      Array.prototype.forEach.call(node.children, (child, index) => {
        if (count >= 90) return;
        const tag = child.tagName.toLowerCase();
        const classes = (child.getAttribute("class") || "").trim();
        const id = child.getAttribute("id") || "";
        const text = (child.textContent || "").replace(/\s+/g, " ").trim();
        const muted = ["script", "style", "link", "meta"].includes(tag);
        const active = query && query.join(",") === path.concat(index).join(",");
        rows.push(`<button class="flp-node${muted ? " is-muted" : ""}${active ? " is-active" : ""}" type="button" data-path="${path.concat(index).join(",")}" style="--flp-depth:${depth}">
          <span class="flp-node-tag">${esc(tag)}</span>
          ${id ? `<span class="flp-node-id">#${esc(id)}</span>` : ""}
          ${classes ? `<span class="flp-node-class">.${esc(classes.split(/\s+/).join("."))}</span>` : ""}
          ${!id && !classes && text ? `<span class="flp-node-text">${esc(text.slice(0, 52))}${text.length > 52 ? "…" : ""}</span>` : ""}
        </button>`);
        count += 1;
        if (child.children.length && depth < 8) walk(child, path.concat(index), depth + 1);
      });
    }
    walk(body, [], 0);
    if (!rows.length) return '<p class="flp-empty">Body chưa có phần tử nào. Thêm một thẻ rồi xem lại.</p>';
    return `<div class="flp-outline-head"><span>CÂY DOM</span><small>${count} phần tử</small></div><div class="flp-outline-list">${rows.join("")}</div>`;
  }

  function mount(host, lesson, config) {
    cleanup();
    if (!host) return;
    const cfg = config || {};
    const original = lesson && lesson.code ? lesson.code : "";
    const shell = document.createElement("div");
    shell.className = "flp flp-html";
    shell.innerHTML = `<div class="flp-head">
      <div class="flp-head-copy">
        <span class="flp-kicker"><span class="flp-dot"></span>HTML PLAYGROUND</span>
        <strong class="flp-title">${esc(lesson ? lesson.title : "HTML")}</strong>
        <span class="flp-meta">Sửa mã bên trái · khung xem cập nhật sau 0,35 giây · bấm một thẻ để đọc giải nghĩa</span>
      </div>
      <div class="flp-tools">
        <div class="flp-views" role="group" aria-label="Kích thước khung xem">
          <button class="flp-view is-on" type="button" data-flp-view="full" aria-pressed="true">Đầy đủ</button>
          <button class="flp-view" type="button" data-flp-view="tablet" aria-pressed="false">768</button>
          <button class="flp-view" type="button" data-flp-view="phone" aria-pressed="false">390</button>
        </div>
        <button class="flp-reset" type="button" data-flp-reset>Khôi phục mã</button>
      </div>
    </div>
    <div class="flp-body">
      <section class="flp-pane flp-editor-pane">
        <div class="flp-pane-head"><span>MÃ HTML</span><span data-flp-count></span></div>
        <textarea class="flp-code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Mã HTML của bài"></textarea>
        <div class="flp-chips" data-flp-chips></div>
        <div class="flp-term" data-flp-term></div>
      </section>
      <section class="flp-pane flp-preview-pane">
        <div class="flp-pane-head"><span>KẾT QUẢ</span><span class="flp-status" data-flp-status>Đang dựng trang</span></div>
        <div class="flp-stage" data-flp-stage>
          <div class="flp-frame-wrap"><iframe class="flp-frame" title="Kết quả HTML" sandbox="allow-scripts allow-forms allow-popups allow-modals" referrerpolicy="no-referrer"></iframe></div>
        </div>
        <div class="flp-event" data-flp-event hidden></div>
        <div class="flp-outline" data-flp-outline></div>
      </section>
    </div>
    <p class="flp-note">${esc(cfg.note || "Trang chạy trong iframe sandbox. Ảnh và tài nguyên ngoài có thể không tải được trong môi trường bài học.")}</p>`;
    host.appendChild(shell);

    const ta = shell.querySelector(".flp-code");
    const frame = shell.querySelector(".flp-frame");
    const stage = shell.querySelector("[data-flp-stage]");
    const countEl = shell.querySelector("[data-flp-count]");
    const statusEl = shell.querySelector("[data-flp-status]");
    const eventEl = shell.querySelector("[data-flp-event]");
    const chipsEl = shell.querySelector("[data-flp-chips]");
    const termEl = shell.querySelector("[data-flp-term]");
    const outlineEl = shell.querySelector("[data-flp-outline]");
    let timer = null;
    let currentTerm = null;
    let selectedPath = null;

    function updateCount() {
      const value = ta.value;
      const lines = value ? value.split("\n").length : 0;
      countEl.textContent = `${lines} dòng · ${value.length} ký tự`;
    }

    function showTerm(term) {
      currentTerm = term;
      termEl.innerHTML = termPanelHTML(term);
      chipsEl.querySelectorAll("[data-flp-term]").forEach((chip) => {
        chip.classList.toggle("is-active", !!term && chip.dataset.flpTerm === term.name && chip.dataset.flpType === term.type);
      });
    }

    function renderChips(code) {
      const found = collectTerms(code);
      const groups = [
        { label: "THẺ", items: found.tags, type: "tag" },
        { label: "THUỘC TÍNH", items: found.attrs, type: "attr" }
      ];
      const previous = currentTerm && currentTerm.name;
      chipsEl.innerHTML = groups.map((group) => {
        if (!group.items.length) return "";
        const chips = group.items.map((name) => {
          const entry = glossaryFor(name, group.type);
          return `<button class="flp-chip${entry ? "" : " is-missing"}" type="button" data-flp-term="${esc(name)}" data-flp-type="${group.type}" title="${entry ? esc(entry.what) : "Chưa có giải nghĩa"}">${esc(name)}</button>`;
        }).join("");
        return `<div class="flp-chipgroup"><span>${group.label}</span><div class="flp-chip-list">${chips}</div></div>`;
      }).join("");
      const keep = previous && chipsEl.querySelector(`[data-flp-term="${cssEscape(previous)}"]`);
      if (keep) {
        const entry = glossaryFor(keep.dataset.flpTerm, keep.dataset.flpType);
        showTerm(entry ? Object.assign({ name: keep.dataset.flpTerm, type: keep.dataset.flpType }, entry) : null);
      } else {
        const first = chipsEl.querySelector(".flp-chip:not(.is-missing)") || chipsEl.querySelector(".flp-chip");
        if (first) {
          const entry = glossaryFor(first.dataset.flpTerm, first.dataset.flpType);
          showTerm(entry ? Object.assign({ name: first.dataset.flpTerm, type: first.dataset.flpType }, entry) : null);
        } else {
          showTerm(null);
        }
      }
    }

    function cssEscape(value) {
      return String(value).replace(/["\\]/g, "\\$&");
    }

    function renderOutline(code) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(fullDocument(code, cfg, false), "text/html");
      outlineEl.innerHTML = outlineHTML(doc, selectedPath);
      const activeNode = outlineEl.querySelector(".flp-node.is-active");
      if (activeNode) activeNode.scrollIntoView({ block: "nearest" });
    }

    function refresh(immediate) {
      window.clearTimeout(timer);
      const run = () => {
        const code = ta.value;
        statusEl.textContent = "Đang dựng trang";
        frame.srcdoc = fullDocument(code, cfg, true);
        renderOutline(code);
        renderChips(code);
        updateCount();
        selectedPath = null;
      };
      if (immediate) run();
      else timer = window.setTimeout(run, 350);
    }

    function setEvent(text) {
      if (!text) {
        eventEl.hidden = true;
        eventEl.textContent = "";
        return;
      }
      eventEl.hidden = false;
      eventEl.textContent = text;
    }

    function onMessage(event) {
      if (event.source !== frame.contentWindow) return;
      const data = event.data || {};
      if (data.flp !== "html") return;
      if (data.type === "ready") {
        statusEl.textContent = "Đã dựng trang";
        return;
      }
      if (data.type === "event") {
        setEvent(data.text || "");
        return;
      }
      if (data.type === "select") {
        selectedPath = Array.isArray(data.path) ? data.path : null;
        outlineEl.querySelectorAll(".flp-node").forEach((node) => {
          node.classList.toggle("is-active", selectedPath && node.dataset.path === selectedPath.join(","));
        });
      }
    }

    const onInput = () => {
      updateCount();
      refresh(false);
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
        refresh(true);
      }
    };
    const onChips = (event) => {
      const chip = event.target.closest("[data-flp-term]");
      if (!chip) return;
      const entry = glossaryFor(chip.dataset.flpTerm, chip.dataset.flpType);
      showTerm(entry ? Object.assign({ name: chip.dataset.flpTerm, type: chip.dataset.flpType }, entry) : {
        name: chip.dataset.flpTerm,
        type: chip.dataset.flpType,
        kind: chip.dataset.flpType === "tag" ? "thẻ HTML" : "thuộc tính",
        group: "Chưa phân nhóm",
        what: "Mục này chưa có giải nghĩa riêng trong playground. Bạn vẫn có thể thử sửa hoặc xóa nó để xem trang thay đổi.",
        example: "",
        tip: "Bấm Khôi phục mã nếu muốn quay lại ví dụ gốc."
      });
    };
    const onOutline = (event) => {
      const node = event.target.closest("[data-path]");
      if (!node) return;
      selectedPath = node.dataset.path ? node.dataset.path.split(",").map(Number) : [];
      outlineEl.querySelectorAll(".flp-node").forEach((row) => row.classList.toggle("is-active", row === node));
      frame.contentWindow.postMessage({ flp: "html-parent", type: "highlight", path: selectedPath }, "*");
    };
    const onReset = () => {
      ta.value = original;
      setEvent("");
      refresh(true);
      ta.focus();
    };
    const onView = (event) => {
      const button = event.target.closest("[data-flp-view]");
      if (!button) return;
      stage.dataset.view = button.dataset.flpView;
      shell.querySelectorAll("[data-flp-view]").forEach((item) => {
        const on = item === button;
        item.classList.toggle("is-on", on);
        item.setAttribute("aria-pressed", String(on));
      });
    };

    ta.value = original;
    updateCount();
    ta.addEventListener("input", onInput);
    ta.addEventListener("keydown", onKey);
    chipsEl.addEventListener("click", onChips);
    outlineEl.addEventListener("click", onOutline);
    shell.querySelector("[data-flp-reset]").addEventListener("click", onReset);
    shell.querySelector(".flp-views").addEventListener("click", onView);
    shell.addEventListener("click", (event) => {
      if (event.target === shell) setEvent("");
    });
    window.addEventListener("message", onMessage);
    active = {
      cleanups: [
        () => window.removeEventListener("message", onMessage),
        () => window.clearTimeout(timer)
      ]
    };
    refresh(true);
  }

  window.HtmlPlay = {
    mount,
    cleanup,
    get active() { return !!active; }
  };
})();
