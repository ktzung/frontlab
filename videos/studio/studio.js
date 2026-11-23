/* FrontLab Studio — deterministic 1920x1080 lecture renderer */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const params = new URLSearchParams(location.search);
  const timelineId = params.get("id") || "bai01";
  const R = window.FrontRender;

  const stage = $("#stage");
  const cover = $("#cover");
  const recap = $("#recap");
  const main = $("#main");
  const codePanel = $("#codePanel");
  const previewPanel = $("#previewPanel");
  const iframe = $("#preview");
  const wrap = $("#previewWrap");
  const cursor = $("#cursor");
  const codeScroll = $("#codeScroll");
  const codeBody = $("#codeBody");
  const terminal = $("#terminal");
  const termBody = $("#termBody");
  const annotation = $("#annotation");

  const state = {
    timeline: null,
    index: -1,
    timers: [],
    t0: 0,
    playing: false,
    finished: false,
    iframeReady: false,
    startWall: 0
  };

  function fitStage() {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = `scale(${Math.min(1, scale)})`;
    stage.style.marginLeft = `${Math.max(0, (window.innerWidth - 1920 * Math.min(1, scale)) / 2)}px`;
  }
  window.addEventListener("resize", () => {
    fitStage();
    if (state.timeline) fitPreview();
  });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function pad2(n) { return String(n).padStart(2, "0"); }

  function setCaption(scene) {
    $("#capScene").textContent = scene.label || "";
    $("#capText").textContent = scene.caption || scene.narration || "";
  }

  function setTime(t) {
    const sec = Math.max(0, Math.floor(t));
    $("#time-code").textContent = `${pad2(Math.floor(sec / 60))}:${pad2(sec % 60)}`;
    const total = state.timeline ? state.timeline.total : 1;
    $("#progressFill").style.width = `${Math.min(100, (t / total) * 100)}%`;
  }

  function renderSteps() {
    const ol = $("#steps");
    ol.innerHTML = state.timeline.scenes.map((s, i) =>
      `<li data-step="${i}"><span class="n">${pad2(i + 1)}</span><span>${esc(s.label)}</span></li>`
    ).join("");
  }

  function setStep(i) {
    document.querySelectorAll("#steps li").forEach((li, idx) => {
      li.classList.toggle("on", idx === i);
      li.classList.toggle("done", idx < i);
    });
    $("#step-count").textContent = `${pad2(i + 1)} / ${pad2(state.timeline.scenes.length)}`;
  }

  function renderTree() {
    const files = state.timeline.files || [];
    $("#tree").innerHTML = `<div class="row folder">▸ ${esc(state.timeline.project)}</div>` +
      files.map((f) => {
        const sub = f.includes("/");
        return `<div class="row ${sub ? "sub" : ""} ${f === "index.html" ? "on" : ""}">
          <span class="${f.endsWith("/") ? "folder" : "file"}">${f.endsWith("/") ? "▸" : "·"} ${esc(f)}</span>
        </div>`;
      }).join("");
  }

  function applyHeader() {
    const t = state.timeline;
    $("#ep-num").textContent = `BÀI ${pad2(t.num)}`;
    $("#ep-chapter").textContent = `CHƯƠNG ${t.chapter} · ${t.chapterName.toUpperCase()}`;
    $("#ep-title").textContent = t.title;
    $("#ep-tech").innerHTML = (t.tech || []).slice(0, 4).map((x) => `<span>${esc(x)}</span>`).join("");
    $("#coverKicker").textContent = `BÀI THỰC HÀNH ${pad2(t.num)} · CHƯƠNG ${t.chapter}`;
    $("#coverNum").textContent = pad2(t.num);
    $("#coverTitle").textContent = t.title;
    $("#coverSub").textContent = `Hướng dẫn từng bước: tạo dự án tên tiếng Anh, phân tích HTML, CSS${t.hasJs ? ", JavaScript" : ""} và chạy thử.`;
    $("#coverTags").innerHTML = (t.tech || []).map((x) => `<span>${esc(x)}</span>`).join("");
    $("#coverProject").textContent = t.project;
    $("#recapNum").textContent = pad2(t.num);
    $("#recapProject").textContent = t.project;
    $("#submit-file").textContent = t.submitFile;
    $("#previewUrl").textContent = `127.0.0.1:8086/exercises/${t.project}/`;
    document.title = `FrontLab Studio — Bài ${pad2(t.num)}`;
  }

  function fitPreview() {
    if (!state.timeline) return;
    const wr = wrap.getBoundingClientRect();
    const ir = iframe.getBoundingClientRect();
    if (!ir.width || !wr.width) return;
    const iw = parseFloat(iframe.style.width) || 1280;
    const ih = parseFloat(iframe.style.height) || 800;
    const scale = Math.min((wr.width - 18) / iw, (wr.height - 18) / ih);
    iframe.style.setProperty("--pv-scale", scale.toFixed(4));
    iframe.style.transform = `scale(${scale.toFixed(4)})`;
    $("#viewportLabel").textContent = `${Math.round(iw)} × ${Math.round(ih)}`;
  }

  function setViewport(w, h) {
    iframe.style.width = `${w}px`;
    iframe.style.height = `${h}px`;
    fitPreview();
  }

  function show(el, on) { el.classList.toggle("hidden", !on); }

  function clearTimers() {
    state.timers.forEach((id) => clearTimeout(id));
    state.timers = [];
  }

  function schedule(fn, ms) {
    state.timers.push(setTimeout(fn, Math.max(0, ms)));
  }

  function renderCodeScene(scene) {
    terminal.classList.add("hidden");
    codeScroll.style.display = "";
    const lang = scene.lang || "html";
    $("#codeChip").textContent = lang === "js" ? "JS" : lang.toUpperCase();
    $("#codeChip").dataset.lang = lang;
    $("#fileName").textContent = "index.html";
    codeBody.innerHTML = R.codeHTML(scene.code || "", 0, [], { lang });
    const lines = [...codeBody.querySelectorAll(".code-line")];
    lines.forEach((line, i) => {
      line.style.animationDelay = `${Math.min(i * 9, 720)}ms`;
      line.classList.add("reveal");
    });
    codeScroll.scrollTop = 0;
    const marks = (scene.marks || []).filter((n) => n >= 1 && n <= lines.length);
    marks.forEach((n, i) => {
      schedule(() => {
        lines.forEach((l) => l.classList.remove("is-active"));
        const line = lines[n - 1];
        if (!line) return;
        line.classList.add("is-active");
        const top = line.offsetTop - codeScroll.clientHeight * 0.42;
        codeScroll.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }, 1500 + i * Math.max(1800, ((scene.dur - 4) * 1000) / Math.max(1, marks.length) * 0.72));
    });
    if (scene.annotation) {
      annotation.innerHTML = `<b>ĐIỂM NHẤN</b>${esc(scene.annotation)}`;
      annotation.classList.remove("show");
      schedule(() => annotation.classList.add("show"), 1200);
    } else {
      annotation.classList.remove("show");
    }
  }

  function typeTerminal(scene) {
    codeScroll.style.display = "none";
    terminal.classList.remove("hidden");
    termBody.innerHTML = "";
    const lines = scene.commands || [];
    let delay = 250;
    lines.forEach((item) => {
      const cmd = typeof item === "string" ? item : item.cmd;
      const out = typeof item === "string" ? "" : item.out;
      const row = document.createElement("div");
      row.className = "term-line";
      row.innerHTML = `<span class="prompt">➜</span> <span class="path">~/frontlab</span> $ <span class="typed"></span><span class="caret"></span>`;
      termBody.appendChild(row);
      const typed = row.querySelector(".typed");
      const caret = row.querySelector(".caret");
      for (let i = 0; i < cmd.length; i++) {
        schedule(() => { typed.textContent = cmd.slice(0, i + 1); }, delay + i * 24);
      }
      delay += cmd.length * 24 + 260;
      if (out) {
        schedule(() => {
          caret.remove();
          const o = document.createElement("div");
          o.className = "term-line";
          o.innerHTML = `<span class="ok">${esc(out)}</span>`;
          termBody.appendChild(o);
        }, delay);
        delay += 420;
      } else {
        schedule(() => caret.remove(), delay);
      }
    });
    schedule(() => {
      const plus = document.createElement("div");
      plus.className = "term-line";
      plus.innerHTML = `<span class="prompt">➜</span> <span class="path">~/frontlab</span> $ <span class="caret"></span>`;
      termBody.appendChild(plus);
    }, delay + 300);
  }

  function elementPoint(el) {
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const ir = iframe.getBoundingClientRect();
    const wr = wrap.getBoundingClientRect();
    const scale = ir.width / (parseFloat(iframe.style.width) || 1280);
    return {
      x: ir.left - wr.left + (rect.left + rect.width / 2) * scale,
      y: ir.top - wr.top + (rect.top + rect.height / 2) * scale
    };
  }

  function ripple(x, y) {
    const r = document.createElement("span");
    r.className = "ripple";
    r.style.left = `${x}px`;
    r.style.top = `${y}px`;
    wrap.appendChild(r);
    setTimeout(() => r.remove(), 800);
  }

  function moveCursor(pt) {
    if (!pt) return;
    cursor.classList.remove("hidden");
    cursor.style.left = `${pt.x}px`;
    cursor.style.top = `${pt.y}px`;
  }

  function runAction(a) {
    const doc = iframe.contentDocument;
    if (!doc) return;
    const win = iframe.contentWindow;
    let el = null;
    try { el = a.selector ? doc.querySelector(a.selector) : null; } catch (e) { el = null; }
    if (el) moveCursor(elementPoint(el));
    if (a.type === "scroll") {
      const max = Math.max(0, doc.documentElement.scrollHeight - win.innerHeight);
      win.scrollTo({ top: max * (a.value == null ? 1 : a.value), behavior: "smooth" });
      return;
    }
    if (a.type === "resize") {
      setViewport(a.width, a.height);
      return;
    }
    if (a.type === "wait") return;
    if (!el) return;
    if (a.type === "click") {
      const pt = elementPoint(el);
      if (pt) ripple(pt.x, pt.y);
      el.click();
      return;
    }
    if (a.type === "fill") {
      el.focus();
      el.value = a.value;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }
    if (a.type === "select") {
      el.value = a.value;
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }
    if (a.type === "hover") {
      if (a.css) Object.assign(el.style, a.css);
      el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    }
  }

  function enterScene(i) {
    clearTimers();
    annotation.classList.remove("show");
    cursor.classList.add("hidden");
    const scene = state.timeline.scenes[i];
    state.index = i;
    setStep(i);
    setCaption(scene);
    stage.classList.toggle("mode-demo", scene.type === "demo");

    if (scene.type === "intro") {
      cover.classList.remove("hidden");
      recap.classList.add("hidden");
      return;
    }
    cover.classList.add("hidden");

    if (scene.type === "recap" || scene.type === "brief") {
      recap.classList.remove("hidden");
      $("#recapKicker").innerHTML = scene.type === "brief"
        ? `YÊU CẦU BÀI TẬP <span>${pad2(state.timeline.num)}</span>`
        : `TỔNG KẾT BÀI <span>${pad2(state.timeline.num)}</span>`;
      $("#recapTitle").textContent = scene.heading || "Điều cần nhớ";
      $("#recapPoints").innerHTML = (scene.points || []).map((p, k) =>
        `<li><span class="mark">${pad2(k + 1)}</span><span>${esc(p)}</span></li>`).join("");
      return;
    }
    recap.classList.add("hidden");

    if (scene.type === "setup") {
      typeTerminal(scene);
      return;
    }
    if (scene.type === "demo") {
      setViewport(1280, 800);
      (scene.actions || []).forEach((a) => schedule(() => runAction(a), 300 + (a.t || 0) * 1000));
      return;
    }
    renderCodeScene(scene);
    if (scene.actionEvery) { /* reserved */ }
  }

  function tick() {
    if (!state.playing) return;
    const t = (performance.now() - state.t0) / 1000;
    setTime(t);
    const scenes = state.timeline.scenes;
    let idx = scenes.findIndex((s) => t >= s.start && t < s.start + s.dur);
    if (idx === -1) idx = t < scenes[0].start ? 0 : scenes.length - 1;
    if (idx !== state.index && !(state.index === scenes.length - 1 && t >= scenes[scenes.length - 1].start)) {
      enterScene(idx);
    }
    if (t >= state.timeline.total) {
      state.playing = false;
      state.finished = true;
      setTime(state.timeline.total);
      const last = scenes[scenes.length - 1];
      if (state.index !== scenes.length - 1) enterScene(scenes.length - 1);
      return;
    }
    requestAnimationFrame(tick);
  }

  async function init() {
    fitStage();
    const res = await fetch(`timelines/${timelineId}.json`, { cache: "no-store" });
    state.timeline = await res.json();
    applyHeader();
    renderSteps();
    renderTree();
    setTime(0);
    enterScene(0);
    iframe.addEventListener("load", () => { state.iframeReady = true; });
    iframe.src = `../../exercises/${state.timeline.project}/`;
    await new Promise((r) => setTimeout(r, 900));
    fitPreview();
    window.__studio = {
      id: timelineId,
      total: state.timeline.total,
      ready: true,
      finished: false,
      play() {
        state.playing = true;
        state.finished = false;
        state.t0 = performance.now();
        state.index = -1;
        enterScene(0);
        requestAnimationFrame(tick);
      },
      seek(t, pause) {
        clearTimers();
        state.index = -1;
        state.t0 = performance.now() - t * 1000;
        const scenes = state.timeline.scenes;
        let idx = scenes.findIndex((s) => t >= s.start && t < s.start + s.dur);
        if (idx === -1) idx = t < scenes[0].start ? 0 : scenes.length - 1;
        enterScene(idx);
        setTime(t);
        state.playing = !pause;
        if (!pause) requestAnimationFrame(tick);
      },
      stop() { state.playing = false; },
      get finishedNow() { return state.finished; }
    };
    window.__studio.finished = false;
    setInterval(() => { window.__studio.finished = state.finished; }, 120);
    if (params.get("play") === "1") window.__studio.play();
  }

  init().catch((err) => {
    document.body.innerHTML = `<pre style="color:#fff;padding:40px;font:16px monospace">Studio error: ${esc(err.message)}</pre>`;
  });
})();
