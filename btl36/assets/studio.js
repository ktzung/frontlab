/* ============================================================
   BTL36 Studio — engine website môn học
   Dùng: <script src="../assets/studio.js"></script>
         <script src="data.js"></script>
         <script>BTL36Studio.mount(window.BTL_DATA)</script>
   ============================================================ */
(function () {
  "use strict";

  let D = null;
  let KEY = "";
  let store = null;
  let route = { name: "home", id: null, tab: null };
  let ui = { card: 0, flip: false, quiz: {}, practiceTab: "cards", labStep: 0, labValue: {}, detail: null, matchPick: null, codeStep: 0, tree: "start", dialogueStep: 0, treePath: [] };

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (v) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const pad = (n) => String(n).padStart(2, "0");
  const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
  const fmt = (n, d) => Number(n).toLocaleString("vi-VN", { maximumFractionDigits: d == null ? 1 : d });
  const para = (v) => esc(v).replace(/\n/g, "<br>");
  const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");

  const ICONS = {
    home: '<path d="M3 10.5 10 4l7 6.5V17a1 1 0 0 1-1 1h-4v-5H8v5H4a1 1 0 0 1-1-1z"/>',
    book: '<path d="M3 4.5h5.5A2.5 2.5 0 0 1 11 7v9a2.5 2.5 0 0 0-2.5-2H3zM17 4.5h-3.5A2.5 2.5 0 0 0 11 7v9a2.5 2.5 0 0 1 2.5-2H17z"/>',
    lab: '<path d="M8 2v5.2L3.4 15a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3L12 7.2V2M6 2h8M6.5 11h7"/>',
    spark: '<path d="m10 2 2.2 4.6 5 .7-3.6 3.5.9 5L10 13.4 5.5 15.8l.9-5L2.8 7.3l5-.7z"/>',
    chart: '<path d="M3 17V3M3 17h14M6 14l3.2-4.2 3 2.5L16 6"/>',
    close: '<path d="m4 4 12 12M16 4 4 16"/>',
    menu: '<path d="M3 5h14M3 10h14M3 15h14"/>',
    sun: '<circle cx="10" cy="10" r="3.6"/><path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6 16 16M16 4l-1.4 1.4M5.4 14.6 4 16"/>',
    moon: '<path d="M16.5 12.7A7 7 0 0 1 7.3 3.5 7 7 0 1 0 16.5 12.7Z"/>',
    arrow: '<path d="M4 10h12M11 5l5 5-5 5"/>',
    back: '<path d="M16 10H4M9 5l-5 5 5 5"/>',
    check: '<path d="m4 10.5 4 4 8-9"/>',
    reset: '<path d="M4 10a6 6 0 1 0 1.8-4.3M4 3.5V7h3.5"/>',
    play: '<path d="M7 4.5 15 10l-8 5.5z" fill="currentColor" stroke="none"/>',
    pause: '<path d="M7 4.5v11M13 4.5v11"/>',
    lock: '<rect x="4" y="9" width="12" height="8" rx="2"/><path d="M7 9V6.5a3 3 0 0 1 6 0V9"/>',
    download: '<path d="M10 3v10M6 9l4 4 4-4M4 16.5h12"/>'
  };
  const icon = (name, cls) => `<svg class="btl-icon${cls ? " " + cls : ""}" viewBox="0 0 20 20" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  function initStore() {
    const base = { done: {}, cards: {}, quiz: { best: 0, attempts: 0 }, teachExtra: [], grades: {}, active: {}, theme: "", tab: "" };
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "null");
      store = raw && typeof raw === "object" ? Object.assign(base, raw) : base;
    } catch (err) { store = base; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (err) { /* private mode */ }
  }
  function toast(msg) {
    const node = $("#btlToast");
    if (!node) return;
    node.textContent = msg;
    node.classList.add("on");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => node.classList.remove("on"), 2200);
  }

  function lessonList() {
    const out = [];
    (D.modules || []).forEach((m, mi) => {
      (m.lessons || []).forEach((l, li) => {
        out.push(Object.assign({}, l, { id: l.id || `m${mi + 1}l${li + 1}`, module: m, moduleIndex: mi, index: out.length }));
      });
    });
    store.teachExtra.forEach((l, i) => {
      const mi = clamp(Number(l.module) || 0, 0, Math.max(0, (D.modules || []).length - 1));
      const mod = D.modules[mi] || { title: "Học liệu bổ sung" };
      out.push({ id: "extra-" + i, title: l.title, summary: l.summary, minutes: 15, level: "Bổ sung", steps: [{ title: "Ghi chú của giảng viên", body: l.summary }], points: [], extra: true, module: mod, moduleIndex: mi, index: out.length });
    });
    return out;
  }
  function moduleLessons(mi) {
    return lessonList().filter((l) => l.moduleIndex === mi);
  }
  function doneCount() {
    return lessonList().filter((l) => store.done[l.id]).length;
  }
  function progressPct() {
    const total = lessonList().length || 1;
    return Math.round(doneCount() / total * 100);
  }

  /* ---------------- shell ---------------- */
  function applyTheme() {
    const saved = store.theme || "";
    document.body.dataset.theme = saved || "light";
    const btn = $("#btlThemeBtn");
    if (btn) btn.innerHTML = saved === "dark" ? icon("sun") : icon("moon");
  }
  function applyIdentity() {
    const root = document.documentElement.style;
    root.setProperty("--a", D.accent || "#2563eb");
    root.setProperty("--a2", D.accent2 || "#7c3aed");
    document.body.dataset.font = D.font || "display";
    applyTheme();
  }
  function topNav() {
    const items = [
      ["home", "#/", "Tổng quan", "home"],
      ["learn", "#/learn", "Bài học", "book"],
      ["lab", "#/lab", "Phòng lab", "lab"],
      ["practice", "#/practice", "Luyện tập", "spark"],
      ["progress", "#/progress", "Tiến độ", "chart"]
    ];
    return items.map(([name, href, label, ic]) => `<a href="${href}" data-nav="${name}">${icon(ic)} ${label}</a>`).join("");
  }
  function shell() {
    const pct = progressPct();
    const C = 2 * Math.PI * 11;
    document.body.innerHTML = `
      <a class="btl-skip" href="#btlMain">Bỏ qua điều hướng</a>
      <header class="btl-top">
        <div class="btl-wrap btl-top-inner">
          <a class="btl-brand" href="#/" aria-label="${esc(D.name)} — trang chủ">
            <span class="btl-mark">${esc(D.monogram || D.name.slice(0, 2))}</span>
            <span>
              <span class="btl-brand-name">${esc(D.name)}</span>
              <span class="btl-brand-sub">${esc(D.code)} · ${esc(D.subject)}</span>
            </span>
          </a>
          <nav class="btl-nav" id="btlNav" aria-label="Điều hướng chính">${topNav()}</nav>
          <div class="btl-top-actions">
            <span class="btl-progress-chip" title="Tiến độ học tập">
              <svg viewBox="0 0 26 26"><circle class="bg" cx="13" cy="13" r="11"/><circle class="fg" cx="13" cy="13" r="11" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - pct / 100)).toFixed(1)}"/></svg>
              <span>${pct}%</span>
            </span>
            <select class="btl-role" id="btlRole" aria-label="Chọn vai trò">
              <option value="student">Học viên</option>
              <option value="teacher">Giảng viên</option>
              <option value="admin">Quản trị</option>
            </select>
            <button class="btl-icon-btn" id="btlThemeBtn" type="button" aria-label="Đổi giao diện sáng tối"></button>
            <button class="btl-icon-btn btl-menu-btn" id="btlMenuBtn" type="button" aria-label="Mở menu" aria-expanded="false">${icon("menu")}</button>
          </div>
        </div>
      </header>
      <main class="btl-view" id="btlMain" tabindex="-1"></main>
      <footer class="btl-foot">
        <div class="btl-wrap btl-foot-inner">
          <span>${esc(D.code)} · ${esc(D.name)} — sản phẩm mẫu cho đồ án CSE122. Dữ liệu lưu trên trình duyệt.</span>
          <span><a href="../${D.brief ? "briefs/" + D.brief : ""}" target="_blank" rel="noopener">Đọc brief gốc</a> · <a href="../../#/btl36">Về thư viện BTL36</a></span>
        </div>
      </footer>
      <div class="btl-toast" id="btlToast" role="status" aria-live="polite"></div>`;
    applyTheme();
  }
  function mountThemeEvents() {
    $("#btlThemeBtn").addEventListener("click", () => {
      store.theme = (store.theme === "dark" ? "" : "dark");
      save(); applyTheme(); toast(store.theme === "dark" ? "Đã bật giao diện tối" : "Đã trở về giao diện sáng");
    });
    $("#btlMenuBtn").addEventListener("click", () => {
      const nav = $("#btlNav");
      const open = nav.classList.toggle("open");
      $("#btlMenuBtn").setAttribute("aria-expanded", open ? "true" : "false");
    });
    $("#btlRole").addEventListener("change", (e) => {
      const role = e.target.value;
      if (role === "teacher") go("#/teach");
      else if (role === "admin") go("#/admin");
      else go("#/");
    });
    document.addEventListener("click", (e) => {
      const nav = e.target.closest && e.target.closest("a[href^='#/']");
      if (nav && !nav.closest(".btl-nav")) return;
      if (nav) {
        const link = nav.getAttribute("href");
        if (link === location.hash) return;
      }
    });
  }

  /* ---------------- routing ---------------- */
  function parse() {
    const raw = location.hash.replace(/^#\/?/, "");
    const parts = raw.split("/").filter(Boolean);
    if (!parts.length) return { name: "home" };
    if (parts[0] === "learn" && parts[1]) return { name: "lesson", id: parts[1] };
    if (parts[0] === "learn") return { name: "learn" };
    if (parts[0] === "lab") return { name: "lab" };
    if (parts[0] === "practice") return { name: "practice" };
    if (parts[0] === "progress") return { name: "progress" };
    if (parts[0] === "teach") return { name: "teach" };
    if (parts[0] === "admin") return { name: "admin" };
    return { name: "home" };
  }
  function go(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }
  function setActiveNav(name) {
    const map = { lesson: "learn", teach: "", admin: "" };
    const active = map[name] != null ? map[name] : name;
    $$("[data-nav]").forEach((a) => a.classList.toggle("is-on", a.dataset.nav === active));
  }
  function render() {
    if (ui.metro) { clearInterval(ui.metro); ui.metro = null; }
    route = parse();
    const role = $("#btlRole");
    if (role) role.value = route.name === "teach" ? "teacher" : route.name === "admin" ? "admin" : "student";
    ui.detail = null;
    if (ui.lastRoute !== location.hash) { ui.labStep = 0; ui.quiz = {}; ui.card = 0; ui.flip = false; ui.codeStep = 0; ui.tree = "start"; ui.treePath = []; ui.dialogueStep = 0; ui.matchPick = null; }
    ui.lastRoute = location.hash;
    setActiveNav(route.name);
    $("#btlNav").classList.remove("open");
    $("#btlMenuBtn").setAttribute("aria-expanded", "false");
    const main = $("#btlMain");
    if (route.name === "lesson") renderLesson(main, route.id);
    else if (route.name === "learn") renderLearn(main);
    else if (route.name === "lab") renderLab(main);
    else if (route.name === "practice") renderPractice(main);
    else if (route.name === "progress") renderProgress(main);
    else if (route.name === "teach") renderTeach(main);
    else if (route.name === "admin") renderAdmin(main);
    else renderHome(main);
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "auto" });
    mountTopProgress();
  }
  function mountTopProgress() {
    const pct = progressPct();
    const C = 2 * Math.PI * 11;
    const chip = $(".btl-progress-chip");
    if (!chip) return;
    const fg = chip.querySelector(".fg");
    if (fg) fg.setAttribute("stroke-dashoffset", (C * (1 - pct / 100)).toFixed(1));
    const txt = chip.querySelector("span");
    if (txt) txt.textContent = pct + "%";
  }

  /* ---------------- home ---------------- */
  function renderHome(main) {
    document.title = `${D.name} — ${D.subject}`;
    const mods = D.modules || [];
    const pct = progressPct();
    const hero = D.hero || {};
    const heroTitle = hero.title || `Học ${D.subject}`;
    const heroHi = hero.highlight || "bằng cách nhìn thấy";
    const feat = (D.features || []).map((f, i) => `
      <article class="btl-feat">
        <div class="btl-feat-ico">${esc(f.badge || pad(i + 1))}</div>
        <h3>${esc(f.title)}</h3>
        <p>${esc(f.desc)}</p>
      </article>`).join("");
    const stats = (D.stats || []).map((s) => `<div class="btl-stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
    const path = mods.map((m, i) => {
      const lessons = moduleLessons(i);
      const done = lessons.filter((l) => store.done[l.id]).length;
      const p = lessons.length ? Math.round(done / lessons.length * 100) : 0;
      return `<a class="btl-mod" href="#/learn">
        <span class="btl-mod-num">${pad(i + 1)}</span>
        <span><h3>${esc(m.title)}</h3><p>${esc(m.summary || "")}</p></span>
        <span class="btl-mod-meta"><span>${done}/${lessons.length} bài</span><span class="btl-bar"><span style="width:${p}%"></span></span><span>${p}%</span></span>
      </a>`;
    }).join("");
    const first = lessonList().find((l) => !store.done[l.id]) || lessonList()[0];
    main.innerHTML = `
      <section class="btl-hero">
        <div class="btl-wrap">
          <div class="btl-hero-inner">
            <div>
              <div class="btl-kicker">${esc(D.code)} · ${esc(D.level)} · ${esc(D.group || D.field || "")}</div>
              <h1>${esc(heroTitle)}<br><em>${esc(heroHi)}</em></h1>
              <p class="btl-lead">${esc(D.intro || D.tagline)}</p>
              <div class="btl-row btl-hero-actions">
                <a class="btl-btn primary" href="${first ? "#/learn/" + first.id : "#/learn"}">${pct ? "Tiếp tục học" : "Bắt đầu học"} ${icon("arrow")}</a>
                <a class="btl-btn" href="#/lab">Mở phòng lab</a>
              </div>
              <p class="btl-hero-note">${esc(D.tagline)}</p>
            </div>
            <div class="btl-hero-visual" aria-hidden="true">
              <div class="btl-orbit">
                <span class="ring"></span><span class="ring r2"></span>
                <span class="core">${esc(D.monogram || D.name.slice(0, 2))}</span>
                <span class="sat s1">${esc(D.labShort || "LÝ THUYẾT")}</span>
                <span class="sat s2">${esc(D.labTag || "PHÒNG LAB")}</span>
                <span class="sat s3">${esc(D.practiceTag || "LUYỆN TẬP")}</span>
                <span class="sat s4">${esc(D.roleTag || "3 VAI TRÒ")}</span>
                <span class="badge">${esc(D.heroBadge || "Học – Thực hành – Phản hồi")}</span>
              </div>
            </div>
          </div>
          <div class="btl-stats">${stats}</div>
        </div>
      </section>
      <section class="btl-section">
        <div class="btl-wrap">
          <div class="btl-section-head"><div><div class="btl-kicker">CÁCH HỌC</div><h2 class="btl-h2">Không chỉ đọc, mà được thao tác</h2><p>${esc(D.featureLead || "Ba cách truyền đạt kiến thức được chọn riêng cho môn học, mỗi cách gắn với một màn hình thực hành.")}</p></div></div>
          <div class="btl-grid cols-3">${feat}</div>
        </div>
      </section>
      <section class="btl-section">
        <div class="btl-wrap">
          <div class="btl-section-head">
            <div><div class="btl-kicker">LỘ TRÌNH</div><h2 class="btl-h2">${mods.length} chương · ${lessonList().length} bài học</h2><p>${esc(D.pathLead || "Mỗi chương đi từ trực giác đến luyện tập, cuối chương có phòng lab riêng để kiểm chứng kiến thức.")}</p></div>
            <a class="btl-btn" href="#/learn">Xem toàn bộ bài học ${icon("arrow")}</a>
          </div>
          <div class="btl-path">${path}</div>
        </div>
      </section>
      <section class="btl-section">
        <div class="btl-wrap">
          <div class="btl-grid cols-2">
            <article class="btl-card btl-card-tint">
              <div class="btl-kicker">PHÒNG LAB</div>
              <h2 class="btl-h2" style="font-size:26px;margin:8px 0 10px">${esc(D.lab.title)}</h2>
              <p class="btl-muted">${esc(D.lab.lead || "")}</p>
              <div class="btl-row" style="margin-top:18px"><a class="btl-btn primary" href="#/lab">Thử ngay ${icon("arrow")}</a><span class="btl-chip">${esc(D.lab.kind.toUpperCase())}</span></div>
            </article>
            <article class="btl-card">
              <div class="btl-kicker">DÀNH CHO GIẢNG VIÊN</div>
              <h2 class="btl-h2" style="font-size:26px;margin:8px 0 10px">Lớp học và học liệu trong một nơi</h2>
              <p class="btl-muted">Theo dõi tiến độ, chấm bài nộp và bổ sung bài giảng cho lớp. Chuyển vai trò ở góc trên bên phải để trải nghiệm.</p>
              <div class="btl-row" style="margin-top:18px"><a class="btl-btn" href="#/teach">Mở bảng giảng dạy</a><a class="btl-btn ghost" href="#/admin">Quản trị</a></div>
            </article>
          </div>
        </div>
      </section>`;
  }

  /* ---------------- learn ---------------- */
  function renderLearn(main) {
    document.title = `Bài học — ${D.name}`;
    const pct = progressPct();
    const filter = ui.search || "";
    const mods = D.modules || [];
    const cards = mods.map((m, mi) => {
      const ls = moduleLessons(mi).filter((l) => !filter || norm(l.title + " " + (l.summary || "")).includes(norm(filter)));
      if (!ls.length) return "";
      return `<section class="btl-card flat" style="padding:20px">
        <div class="btl-between"><div><span class="btl-chip">Chương ${pad(mi + 1)}</span><h3 class="btl-h3" style="margin-top:10px">${esc(m.title)}</h3><p class="btl-small btl-muted">${esc(m.summary || "")}</p></div><span class="btl-small">${ls.filter((l) => store.done[l.id]).length}/${ls.length} bài</span></div>
        <div class="btl-lesson-list" style="margin-top:16px">${ls.map((l) => lessonRow(l)).join("")}</div>
      </section>`;
    }).join("");
    main.innerHTML = `<div class="btl-page"><div class="btl-wrap">
      <div class="btl-section-head">
        <div><div class="btl-kicker">LỘ TRÌNH HỌC</div><h1 class="btl-h2">Học theo chương</h1><p>${lessonList().length} bài · đã hoàn thành ${doneCount()} bài · ${pct}%</p></div>
        <label class="btl-input" style="max-width:280px;display:flex;align-items:center;gap:8px">${icon("book")}<input id="btlSearch" type="search" placeholder="Tìm bài học…" value="${esc(filter)}" style="border:0;background:transparent;outline:none;width:100%"></label>
      </div>
      <div class="btl-stack">${cards || '<div class="btl-empty">Không có bài học khớp từ khóa.</div>'}</div>
    </div></div>`;
    const input = $("#btlSearch");
    if (input) input.addEventListener("input", (e) => { ui.search = e.target.value; const pos = e.target.selectionStart; renderLearn(main); const n = $("#btlSearch"); if (n) { n.focus(); n.setSelectionRange(pos, pos); } });
  }
  function lessonRow(l) {
    const done = store.done[l.id];
    return `<a class="btl-lesson" href="#/learn/${esc(l.id)}">
      <span><h4>${esc(l.title)}</h4><p>${esc(l.summary || "")}</p><span class="btl-lesson-meta"><span class="btl-tag">${l.minutes || 15} phút</span><span class="btl-tag">${esc(l.level || "Cơ bản")}</span>${l.extra ? '<span class="btl-chip warn">Bổ sung</span>' : ""}</span></span>
      <span class="btl-lesson-side"><span class="btl-chip ${done ? "ok" : "neutral"}">${done ? "Đã học" : "Chưa học"}</span><span class="btl-small btl-muted">${(l.steps || []).length} bước</span></span>
    </a>`;
  }

  function renderLesson(main, id) {
    const l = lessonList().find((x) => x.id === id);
    if (!l) { main.innerHTML = `<div class="btl-page"><div class="btl-wrap"><div class="btl-empty">Bài học không tồn tại. <a href="#/learn">Quay lại danh sách</a>.</div></div></div>`; return; }
    document.title = `${l.title} — ${D.name}`;
    const steps = l.steps && l.steps.length ? l.steps : [{ title: "Tóm tắt", body: l.summary || "" }];
    if (ui.lessonId !== l.id) { ui.lessonId = l.id; ui.lessonStep = 0; }
    const s = clamp(ui.lessonStep, 0, steps.length - 1);
    const step = steps[s];
    const mi = l.moduleIndex;
    const lessonsOfMod = moduleLessons(mi);
    const pos = lessonsOfMod.findIndex((x) => x.id === l.id);
    const prev = lessonsOfMod[pos - 1];
    const next = lessonsOfMod[pos + 1] || lessonList().find((x) => x.index === l.index + 1);
    const done = Boolean(store.done[l.id]);
    const points = (l.points || []).map((p) => `<li>${esc(p)}</li>`).join("");
    main.innerHTML = `<div class="btl-page"><div class="btl-wrap btl-lesson-body">
      <div>
        <div class="btl-crumb"><a href="#/learn">Bài học</a><span>/</span><span>${esc(l.module.title)}</span><span>/</span><span>${esc(l.title)}</span></div>
        <div class="btl-lesson-head">
          <div class="btl-kicker">CHƯƠNG ${pad(mi + 1)} · BÀI ${pad(pos + 1)}</div>
          <h1>${esc(l.title)}</h1>
          <p class="btl-lead">${esc(l.summary || "")}</p>
          <div class="btl-row" style="margin-top:14px"><span class="btl-tag">${l.minutes || 15} phút</span><span class="btl-tag">${esc(l.level || "Cơ bản")}</span>${done ? '<span class="btl-chip ok">Đã hoàn thành</span>' : ""}</div>
        </div>
        <div class="btl-steps">${steps.map((st, i) => `<button class="btl-step-btn ${i === s ? "is-on" : ""}" data-step="${i}" type="button">Bước ${i + 1}: ${esc(st.title)}</button>`).join("")}</div>
        <article class="btl-step-panel">
          <div class="btl-kicker">BƯỚC ${s + 1}/${steps.length}</div>
          <h2>${esc(step.title)}</h2>
          <p>${para(step.body)}</p>
          ${step.tip ? `<div class="btl-note" style="margin-top:16px"><b>Mẹo học:</b> ${esc(step.tip)}</div>` : ""}
          ${points && s === 0 ? `<ul class="btl-keypoints">${points}</ul>` : ""}
          ${l.formula && s === steps.length - 1 ? `<div class="btl-formula">${esc(l.formula)}</div>` : ""}
          <div class="btl-step-nav">
            <button class="btl-btn small" type="button" data-step="${s - 1}" ${s === 0 ? "disabled" : ""}>${icon("back")} Bước trước</button>
            <button class="btl-btn small primary" type="button" data-step="${s + 1}" ${s === steps.length - 1 ? "disabled" : ""}>Bước tiếp ${icon("arrow")}</button>
          </div>
        </article>
        <div class="btl-row" style="margin-top:22px">
          ${prev ? `<a class="btl-btn" href="#/learn/${esc(prev.id)}">${icon("back")} ${esc(prev.title)}</a>` : ""}
          <span style="flex:1"></span>
          ${next ? `<a class="btl-btn" href="#/learn/${esc(next.id)}">${esc(next.title)} ${icon("arrow")}</a>` : ""}
        </div>
      </div>
      <aside class="btl-aside">
        <div class="btl-card">
          <h3 class="btl-h3" style="font-size:15px">Tiến độ bài học</h3>
          <div class="btl-bar" style="margin:12px 0 8px"><span style="width:${Math.round((s + 1) / steps.length * 100)}%"></span></div>
          <p class="btl-small btl-muted">Đang ở bước ${s + 1}/${steps.length}</p>
          <button class="btl-btn ${done ? "" : "primary"}" id="btlFinish" type="button" style="width:100%;margin-top:14px">${done ? "Bỏ đánh dấu hoàn thành" : "Đánh dấu đã học"} ${done ? "" : icon("check")}</button>
        </div>
        <div class="btl-card">
          <h3 class="btl-h3" style="font-size:15px">Trong chương này</h3>
          <div class="btl-side-list">${lessonsOfMod.map((x) => `<a href="#/learn/${esc(x.id)}" class="${x.id === l.id ? "is-on" : ""} ${store.done[x.id] ? "done" : ""}"><span class="dot"></span>${esc(x.title)}</a>`).join("")}</div>
          <div class="btl-side-foot">${esc(l.module.summary || "")}</div>
        </div>
        <div class="btl-card btl-card-tint">
          <h3 class="btl-h3" style="font-size:15px">Thực hành ngay</h3>
          <p class="btl-small btl-muted" style="margin:6px 0 12px">${esc(D.lab.title)} giúp kiểm chứng kiến thức vừa học.</p>
          <a class="btl-btn small primary" href="#/lab">Mở phòng lab ${icon("arrow")}</a>
        </div>
      </aside>
    </div></div>`;
    $$("[data-step]", main).forEach((b) => b.addEventListener("click", () => {
      const n = Number(b.dataset.step);
      if (n < 0 || n >= steps.length) return;
      ui.lessonStep = n;
      renderLesson(main, id);
    }));
    $("#btlFinish").addEventListener("click", () => {
      if (store.done[l.id]) delete store.done[l.id];
      else { store.done[l.id] = true; ui.lessonStep = steps.length - 1; }
      save(); renderLesson(main, id); mountTopProgress(); toast(store.done[l.id] ? "Đã ghi nhận hoàn thành bài học" : "Đã bỏ đánh dấu");
    });
  }

  /* ---------------- progress ---------------- */
  function renderProgress(main) {
    document.title = `Tiến độ — ${D.name}`;
    const total = lessonList().length || 1;
    const done = doneCount();
    const pct = progressPct();
    const C = 2 * Math.PI * 78;
    const cards = Object.keys(store.cards).length;
    const best = store.quiz.best || 0;
    const mods = (D.modules || []).map((m, i) => {
      const ls = moduleLessons(i);
      const d = ls.filter((l) => store.done[l.id]).length;
      const p = ls.length ? Math.round(d / ls.length * 100) : 0;
      return `<div class="btl-bar-row"><span>${esc(m.title)}</span><span class="btl-bar"><span style="width:${p}%"></span></span><span>${p}%</span></div>`;
    }).join("");
    const ach = [
      { t: "Khởi động", d: "Hoàn thành bài đầu tiên", on: done > 0, ic: "01" },
      { t: "Nhà thực nghiệm", d: "Mở phòng lab", on: ui.labVisited, ic: "02" },
      { t: "Bộ thẻ ghi nhớ", d: "Thuộc 6 thẻ trở lên", on: cards >= 6, ic: "03" },
      { t: "Bứt phá", d: "Đạt 70% bài kiểm tra", on: best >= 70, ic: "04" },
      { t: "Nửa chặng đường", d: "Hoàn thành 50% bài học", on: pct >= 50, ic: "05" },
      { t: "Chinh phục", d: "Hoàn thành toàn bộ bài học", on: done >= total, ic: "06" }
    ].map((a) => `<div class="btl-ach-item ${a.on ? "on" : ""}"><div class="btl-ach-ico">${a.ic}</div><b>${a.t}</b><span>${a.d}</span></div>`).join("");
    const week = (D.weekly || [3, 5, 2, 6, 4, 7, 5]).map((v, i) => `<div><i style="height:${v * 12 + 12}px"></i><span>T${i + 2}</span></div>`).join("");
    main.innerHTML = `<div class="btl-page"><div class="btl-wrap">
      <div class="btl-kicker">BẢNG TIẾN ĐỘ</div>
      <h1 class="btl-h2" style="margin:6px 0 22px">Bạn đang đi đến đâu?</h1>
      <div class="btl-card btl-progress-hero">
        <div class="btl-ring"><svg viewBox="0 0 190 190"><circle class="bg" cx="95" cy="95" r="78"/><circle class="fg" cx="95" cy="95" r="78" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - pct / 100)).toFixed(1)}"/></svg><div class="btl-ring-label"><b>${pct}%</b><span>HOÀN THÀNH</span></div></div>
        <div class="btl-stack">
          <div class="btl-grid cols-3">
            <div class="btl-stat"><b>${done}/${total}</b><span>Bài đã học</span></div>
            <div class="btl-stat"><b>${cards}</b><span>Thẻ đã thuộc</span></div>
            <div class="btl-stat"><b>${best}</b><span>Điểm quiz cao nhất</span></div>
          </div>
          ${mods}
        </div>
      </div>
      <div class="btl-grid cols-2" style="margin-top:20px">
        <section class="btl-card"><h2 class="btl-h3">Thành tích</h2><div class="btl-ach" style="margin-top:14px">${ach}</div></section>
        <section class="btl-card"><h2 class="btl-h3">Nhịp học 7 ngày</h2><p class="btl-small btl-muted" style="margin-top:4px">Số hoạt động ghi nhận mỗi ngày (dữ liệu mô phỏng).</p><div class="btl-week">${week}</div></section>
      </div>
      <div class="btl-row" style="margin-top:20px"><a class="btl-btn primary" href="#/learn">Học tiếp ${icon("arrow")}</a><button class="btl-btn" id="btlExport" type="button">${icon("download")} Xuất dữ liệu học tập</button></div>
    </div></div>`;
    $("#btlExport").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify({ site: D.id, progress: store }, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = D.id + "-progress.json"; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      toast("Đã xuất dữ liệu học tập");
    });
  }

  /* ---------------- practice ---------------- */
  function renderPractice(main) {
    document.title = `Luyện tập — ${D.name}`;
    main.innerHTML = `<div class="btl-page"><div class="btl-wrap">
      <div class="btl-section-head"><div><div class="btl-kicker">LUYỆN TẬP</div><h1 class="btl-h2">Ghi nhớ bằng phản xạ</h1><p>Thẻ ghi nhớ hai mặt và trắc nghiệm có giải thích ngay. Tiến độ được lưu trên máy bạn.</p></div><span class="btl-chip" id="btlCardCount">${Object.keys(store.cards).length}/${(D.flashcards || []).length} thẻ</span></div>
      <div class="btl-tabs" role="tablist"><button type="button" data-tab="cards" class="${ui.practiceTab === "cards" ? "is-on" : ""}">Thẻ ghi nhớ</button><button type="button" data-tab="quiz" class="${ui.practiceTab === "quiz" ? "is-on" : ""}">Trắc nghiệm</button></div>
      <div id="btlPracticeBody" style="margin-top:20px"></div>
    </div></div>`;
    $$("[data-tab]", main).forEach((b) => b.addEventListener("click", () => { ui.practiceTab = b.dataset.tab; renderPractice(main); }));
    if (ui.practiceTab === "cards") renderCards(); else renderQuiz();
  }
  function renderCards() {
    const cards = D.flashcards || [];
    const box = $("#btlPracticeBody");
    if (!cards.length) { box.innerHTML = '<div class="btl-empty">Chưa có thẻ ghi nhớ.</div>'; return; }
    ui.card = clamp(ui.card, 0, cards.length - 1);
    const c = cards[ui.card];
    const known = Boolean(store.cards[ui.card]);
    box.innerHTML = `<div class="btl-grid cols-2">
      <div>
        <div class="btl-flash ${ui.flip ? "is-flip" : ""}" id="btlFlash" role="button" tabindex="0" aria-label="Lật thẻ">
          <div class="btl-flash-inner">
            <div class="btl-face"><div class="btl-kicker">MẶT TRƯỚC</div><h3>${esc(c.front)}</h3><p>${esc(c.hint || "Nhấn để xem đáp án")}</p><span class="btl-flash-count">${ui.card + 1} / ${cards.length}</span></div>
            <div class="btl-face back"><div class="btl-kicker">MẶT SAU</div><h3 style="font-size:20px">${esc(c.back)}</h3><p>${esc(c.example || "")}</p><span class="btl-flash-count">${known ? "Đã thuộc" : "Chưa đánh dấu"}</span></div>
          </div>
        </div>
        <div class="btl-row" style="margin-top:14px">
          <button class="btl-btn small" id="btlPrevCard" type="button">${icon("back")} Trước</button>
          <button class="btl-btn small primary" id="btlNextCard" type="button">Sau ${icon("arrow")}</button>
          <span style="flex:1"></span>
          <button class="btl-btn small ${known ? "" : "primary"}" id="btlKnow" type="button">${known ? "Bỏ thuộc" : "Đã thuộc"} ${icon("check")}</button>
        </div>
      </div>
      <div class="btl-card"><h3 class="btl-h3">Bộ thẻ của bạn</h3><p class="btl-small btl-muted" style="margin:6px 0 14px">Nhấn thẻ để lật, đánh dấu khi đã nhớ. Bộ thẻ lấy từ đúng nội dung môn ${esc(D.subject)}.</p>
        <div class="btl-bar" style="margin-bottom:10px"><span style="width:${cards.length ? Object.keys(store.cards).length / cards.length * 100 : 0}%"></span></div>
        <div class="btl-side-list">${cards.map((x, i) => `<a href="#" data-card="${i}" class="${i === ui.card ? "is-on" : ""} ${store.cards[i] ? "done" : ""}"><span class="dot"></span>${esc(x.front)}</a>`).join("")}</div>
      </div>
    </div>`;
    $("#btlFlash").addEventListener("click", () => { ui.flip = !ui.flip; $("#btlFlash").classList.toggle("is-flip", ui.flip); });
    $("#btlFlash").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ui.flip = !ui.flip; $("#btlFlash").classList.toggle("is-flip", ui.flip); } });
    $("#btlPrevCard").addEventListener("click", () => { ui.card = (ui.card - 1 + cards.length) % cards.length; ui.flip = false; renderCards(); });
    $("#btlNextCard").addEventListener("click", () => { ui.card = (ui.card + 1) % cards.length; ui.flip = false; renderCards(); });
    $("#btlKnow").addEventListener("click", () => { if (store.cards[ui.card]) delete store.cards[ui.card]; else store.cards[ui.card] = true; save(); renderCards(); mountTopProgress(); const chip = $("#btlCardCount"); if (chip) chip.textContent = Object.keys(store.cards).length + "/" + cards.length + " thẻ"; });
    $$("[data-card]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); ui.card = Number(a.dataset.card); ui.flip = false; renderCards(); }));
  }
  function renderQuiz() {
    const qs = D.quiz || [];
    const box = $("#btlPracticeBody");
    const answered = Object.keys(ui.quiz).length;
    if (answered === qs.length && qs.length) {
      const right = qs.filter((q, i) => ui.quiz[i] === q.answer).length;
      const score = Math.round(right / qs.length * 100);
      if (score > (store.quiz.best || 0)) { store.quiz.best = score; save(); }
      store.quiz.attempts = (store.quiz.attempts || 0) + 1; save();
      box.innerHTML = `<div class="btl-card btl-quiz-result"><div class="btl-kicker">KẾT QUẢ</div><b>${score}%</b><h3 class="btl-h3">${right}/${qs.length} câu đúng</h3><p class="btl-muted">${score >= 70 ? "Bạn đã nắm khá tốt. Ôn lại các câu sai để chắc hơn." : "Đừng lo, xem giải thích từng câu rồi thử lại ngay."}</p><div class="btl-row"><button class="btl-btn primary" id="btlQuizAgain" type="button">Làm lại</button><a class="btl-btn" href="#/learn">Ôn bài</a></div><p class="btl-small btl-muted">Điểm cao nhất: ${store.quiz.best || 0}%</p></div>`;
      $("#btlQuizAgain").addEventListener("click", () => { ui.quiz = {}; renderQuiz(); });
      return;
    }
    box.innerHTML = `<div class="btl-quiz">${qs.map((q, qi) => `<div class="btl-q" data-q="${qi}"><h4>Câu ${qi + 1}. ${esc(q.q)}</h4><div class="btl-opts">${q.options.map((o, oi) => `<button class="btl-opt" type="button" data-q="${qi}" data-o="${oi}">${esc(o)}</button>`).join("")}</div><div class="btl-explain" hidden></div></div>`).join("")}</div><div class="btl-row" style="margin-top:16px"><span class="btl-small btl-muted">Đã trả lời ${answered}/${qs.length} câu · điểm cao nhất ${store.quiz.best || 0}%</span></div>`;
    $$(".btl-opt", box).forEach((b) => b.addEventListener("click", () => {
      const qi = Number(b.dataset.q);
      if (ui.quiz[qi] != null) return;
      const oi = Number(b.dataset.o);
      const q = qs[qi];
      ui.quiz[qi] = oi;
      const qbox = b.closest(".btl-q");
      $$(".btl-opt", qbox).forEach((x, xi) => { if (xi === q.answer) x.classList.add("is-right"); else if (xi === oi) x.classList.add("is-wrong"); });
      const ex = $(".btl-explain", qbox);
      ex.hidden = false;
      ex.textContent = (oi === q.answer ? "Chính xác. " : "Chưa đúng. ") + (q.explain || "");
      if (Object.keys(ui.quiz).length === qs.length) setTimeout(() => { if (route.name === "practice" && $("#btlPracticeBody")) renderQuiz(); }, 900);
    }));
  }

  /* ---------------- teacher ---------------- */
  function renderTeach(main) {
    document.title = `Giảng dạy — ${D.name}`;
    const tab = store.tab || "class";
    const tabs = [["class", "Lớp học"], ["grading", "Chấm bài"], ["content", "Học liệu"], ["notice", "Thông báo"]];
    main.innerHTML = `<div class="btl-page"><div class="btl-wrap">
      <div class="btl-between" style="margin-bottom:18px"><div><div class="btl-kicker">KHÔNG GIAN GIẢNG VIÊN</div><h1 class="btl-h2" style="margin-top:6px">Lớp ${esc(D.className || "demo")} · ${esc(D.subject)}</h1><p class="btl-muted">Theo dõi tiến độ, chấm bài và bổ sung học liệu. Dữ liệu thao tác lưu trên trình duyệt.</p></div><span class="btl-chip">${(D.teacher.students || []).length} học viên</span></div>
      <div class="btl-tabs" role="tablist">${tabs.map(([id, label]) => `<button type="button" data-ttab="${id}" class="${tab === id ? "is-on" : ""}">${label}</button>`).join("")}</div>
      <div id="btlTeachBody" style="margin-top:20px"></div>
    </div></div>`;
    $$("[data-ttab]", main).forEach((b) => b.addEventListener("click", () => { store.tab = b.dataset.ttab; save(); renderTeach(main); }));
    if (tab === "class") teachClass($("#btlTeachBody"));
    else if (tab === "grading") teachGrading($("#btlTeachBody"));
    else if (tab === "content") teachContent($("#btlTeachBody"));
    else teachNotice($("#btlTeachBody"));
  }
  function teachClass(box) {
    const students = D.teacher.students || [];
    const avg = students.length ? Math.round(students.reduce((s, x) => s + Number(x.progress || 0), 0) / students.length) : 0;
    box.innerHTML = `<div class="btl-grid cols-3" style="margin-bottom:18px">
      <div class="btl-stat"><b>${students.length}</b><span>Học viên</span></div>
      <div class="btl-stat"><b>${avg}%</b><span>Tiến độ trung bình</span></div>
      <div class="btl-stat"><b>${(D.teacher.submissions || []).filter((x) => x.status === "Chờ chấm").length}</b><span>Bài chờ chấm</span></div>
    </div>
    <div class="btl-table-wrap"><table class="btl-table"><thead><tr><th>Học viên</th><th>Tiến độ</th><th>Điểm TB</th><th>Trạng thái</th><th>Ghi chú</th></tr></thead><tbody>
      ${students.map((s, i) => `<tr><td><span class="btl-avatar">${esc(String(s.name).split(" ").map((w) => w[0]).slice(-2).join(""))}</span>${esc(s.name)}</td><td style="min-width:160px"><div class="btl-bar"><span style="width:${clamp(Number(s.progress) || 0, 0, 100)}%"></span></div><span class="num">${Number(s.progress) || 0}%</span></td><td class="num">${esc(s.score || "—")}</td><td><span class="btl-chip ${s.status === "Tốt" ? "ok" : s.status === "Cần hỗ trợ" ? "warn" : "neutral"}">${esc(s.status || "Đang học")}</span></td><td class="btl-small btl-muted">${esc(s.note || "")}</td></tr>`).join("")}
    </tbody></table></div>
    <p class="btl-lab-note">Bảng mô phỏng dữ liệu lớp ${esc(D.className || "demo")}.</p>`;
  }
  function teachGrading(box) {
    const subs = D.teacher.submissions || [];
    box.innerHTML = `<div class="btl-table-wrap"><table class="btl-table"><thead><tr><th>Học viên</th><th>Bài nộp</th><th>Thời gian</th><th>Trạng thái</th><th>Điểm</th><th></th></tr></thead><tbody>
      ${subs.map((s, i) => { const g = store.grades[i]; const status = g != null ? "Đã chấm" : (s.status || "Chờ chấm"); return `<tr><td>${esc(s.student)}</td><td>${esc(s.lesson)}</td><td class="num">${esc(s.time || "Hôm nay")}</td><td><span class="btl-chip ${status === "Đã chấm" ? "ok" : "warn"}">${status}</span></td><td><div class="btl-grade"><input type="number" min="0" max="10" step="0.5" value="${g == null ? "" : g}" data-grade="${i}" aria-label="Điểm bài ${i + 1}">/10</div></td><td><button class="btl-btn small" type="button" data-save-grade="${i}">Lưu</button></td></tr>`; }).join("")}
    </tbody></table></div>`;
    $$("[data-save-grade]", box).forEach((b) => b.addEventListener("click", () => {
      const i = b.dataset.saveGrade;
      const v = $('[data-grade="' + i + '"]', box).value;
      if (v === "" || Number(v) < 0 || Number(v) > 10) { toast("Điểm phải trong khoảng 0 đến 10"); return; }
      store.grades[i] = Number(v); save(); teachGrading(box); toast("Đã lưu điểm và phản hồi");
    }));
  }
  function teachContent(box) {
    const mods = D.modules || [];
    const extras = store.teachExtra || [];
    box.innerHTML = `<div class="btl-grid cols-2">
      <section class="btl-card"><h3 class="btl-h3">Học liệu hiện có</h3><div class="btl-side-list" style="margin-top:12px">${lessonList().filter((l) => !l.extra).map((l) => `<a href="#/learn/${esc(l.id)}"><span class="dot"></span>${esc(l.title)}</a>`).join("")}</div><p class="btl-lab-note">Giảng viên có thể thêm bài bổ sung; bài sẽ xuất hiện ngay trong lộ trình học.</p></section>
      <section class="btl-card"><h3 class="btl-h3">Thêm bài bổ sung</h3>
        <form class="btl-form" id="btlAddLesson" style="margin-top:12px">
          <label>Chương<select class="btl-select" name="module">${mods.map((m, i) => `<option value="${i}">${esc(m.title)}</option>`).join("")}</select></label>
          <label>Tiêu đề bài<input class="btl-input" name="title" required maxlength="90" placeholder="Ví dụ: Ôn tập cuối chương"></label>
          <label>Tóm tắt<textarea class="btl-textarea" name="summary" required maxlength="220" placeholder="Mục tiêu và nội dung chính của bài bổ sung"></textarea></label>
          <button class="btl-btn primary" type="submit">Thêm vào lộ trình</button>
        </form>
        <div style="margin-top:18px">${extras.length ? `<h4 class="btl-h3" style="font-size:14px">Bài đã thêm</h4><div class="btl-stack" style="margin-top:8px">${extras.map((e, i) => `<div class="btl-between" style="border:1px solid var(--line);border-radius:9px;padding:9px 12px"><span><b>${esc(e.title)}</b><br><span class="btl-small btl-muted">${esc(e.summary)}</span></span><button class="btl-btn small danger" data-del-extra="${i}" type="button">Xóa</button></div>`).join("")}</div>` : '<p class="btl-small btl-muted">Chưa có bài bổ sung.</p>'}</div>
      </section>
    </div>`;
    $("#btlAddLesson").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      const title = String(f.get("title") || "").trim();
      const summary = String(f.get("summary") || "").trim();
      if (title.length < 4 || summary.length < 8) { toast("Cần tiêu đề và tóm tắt rõ hơn"); return; }
      store.teachExtra.push({ title, summary, module: Number(f.get("module")) || 0 }); save(); toast("Đã thêm bài bổ sung"); teachContent(box);
    });
    $$("[data-del-extra]", box).forEach((b) => b.addEventListener("click", () => { store.teachExtra.splice(Number(b.dataset.delExtra), 1); save(); toast("Đã xóa bài bổ sung"); teachContent(box); }));
  }
  function teachNotice(box) {
    const notes = store.notices || (store.notices = (D.teacher.notices || []).map((n) => ({ text: n })));
    box.innerHTML = `<div class="btl-card"><h3 class="btl-h3">Thông báo lớp</h3><p class="btl-small btl-muted" style="margin:4px 0 14px">Thông báo mẫu kèm thông báo do bạn tạo. Dữ liệu chỉ lưu trên máy.</p>
      <form class="btl-inline-form" id="btlNoticeForm"><label style="flex:1">Nội dung thông báo<input class="btl-input" name="text" required maxlength="160" placeholder="Nhắc sinh viên nộp bài trước 20h thứ Sáu"></label><button class="btl-btn primary" type="submit">Đăng</button></form>
      <div class="btl-stack" style="margin-top:16px">${notes.map((n, i) => `<div class="btl-between" style="border:1px solid var(--line);border-radius:10px;padding:11px 14px"><span>${esc(n.text)}</span><button class="btl-btn small danger" data-del-note="${i}" type="button">Xóa</button></div>`).join("") || '<div class="btl-empty">Chưa có thông báo.</div>'}</div>
    </div>`;
    $("#btlNoticeForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const val = String(new FormData(e.target).get("text") || "").trim();
      if (val.length < 5) { toast("Nội dung quá ngắn"); return; }
      notes.unshift({ text: val }); save(); teachNotice(box); toast("Đã đăng thông báo");
    });
    $$("[data-del-note]", box).forEach((b) => b.addEventListener("click", () => { notes.splice(Number(b.dataset.delNote), 1); save(); teachNotice(box); }));
  }

  /* ---------------- admin ---------------- */
  function renderAdmin(main) {
    document.title = `Quản trị — ${D.name}`;
    const students = D.teacher.students || [];
    const pct = progressPct();
    main.innerHTML = `<div class="btl-page"><div class="btl-wrap">
      <div class="btl-between" style="margin-bottom:18px"><div><div class="btl-kicker">QUẢN TRỊ HỆ THỐNG</div><h1 class="btl-h2" style="margin-top:6px">Bảng điều khiển ${esc(D.name)}</h1><p class="btl-muted">Quản lý người dùng, nội dung và cấu hình trải nghiệm của website.</p></div><span class="btl-chip">${esc(D.code)}</span></div>
      <div class="btl-grid cols-4" style="margin-bottom:18px">
        <div class="btl-stat"><b>${lessonList().length}</b><span>Bài học</span></div>
        <div class="btl-stat"><b>${(D.flashcards || []).length}</b><span>Thẻ ghi nhớ</span></div>
        <div class="btl-stat"><b>${(D.quiz || []).length}</b><span>Câu hỏi</span></div>
        <div class="btl-stat"><b>${pct}%</b><span>Tiến độ của bạn</span></div>
      </div>
      <div class="btl-grid cols-2">
        <section class="btl-card"><div class="btl-between"><h3 class="btl-h3">Người dùng</h3><input class="btl-input" id="btlUserFilter" placeholder="Lọc theo tên…" style="max-width:190px"></div>
          <div id="btlUserTable" style="margin-top:12px"></div>
        </section>
        <section class="btl-card"><h3 class="btl-h3">Cấu hình &amp; dữ liệu</h3>
          <div class="btl-stack" style="margin-top:12px">
            <div class="btl-between"><span><b>Giao diện tối</b><br><span class="btl-small btl-muted">Áp dụng cho website này</span></span><button class="btl-btn small" id="btlAdminTheme" type="button">${document.body.dataset.theme === "dark" ? "Tắt" : "Bật"}</button></div>
            <div class="btl-between"><span><b>Xuất dữ liệu</b><br><span class="btl-small btl-muted">Tải tiến độ dưới dạng JSON</span></span><button class="btl-btn small" id="btlAdminExport" type="button">Xuất</button></div>
            <div class="btl-between"><span><b>Đặt lại tiến độ</b><br><span class="btl-small btl-muted">Xóa toàn bộ dữ liệu học trên máy</span></span><button class="btl-btn small danger" id="btlAdminReset" type="button">Đặt lại</button></div>
          </div>
          <h4 class="btl-h3" style="font-size:14px;margin-top:20px">Báo cáo nội dung</h4>
          <div class="btl-stack" style="margin-top:10px">${(D.modules || []).map((m, i) => { const ls = moduleLessons(i); const d = ls.filter((l) => store.done[l.id]).length; return `<div class="btl-bar-row"><span>${esc(m.title)}</span><span class="btl-bar"><span style="width:${ls.length ? d / ls.length * 100 : 0}%"></span></span><span>${d}/${ls.length}</span></div>`; }).join("")}</div>
        </section>
      </div>
    </div></div>`;
    function paintUsers(q) {
      const rows = students.filter((s) => !q || norm(s.name).includes(norm(q)));
      $("#btlUserTable").innerHTML = `<div class="btl-table-wrap"><table class="btl-table" style="min-width:0"><thead><tr><th>Tên</th><th>Vai trò</th><th>Trạng thái</th><th></th></tr></thead><tbody>${rows.map((s, i) => { const key = "u" + students.indexOf(s); const active = store.active[key] !== false; return `<tr><td>${esc(s.name)}</td><td class="btl-small">${esc(s.role || "Học viên")}</td><td><span class="btl-chip ${active ? "ok" : "neutral"}">${active ? "Hoạt động" : "Tạm khóa"}</span></td><td><button class="btl-btn small" type="button" data-user="${key}">${active ? "Khóa" : "Mở"}</button></td></tr>`; }).join("") || '<tr><td colspan="4" class="btl-empty">Không tìm thấy.</td></tr>'}</tbody></table></div>`;
      $$("[data-user]", $("#btlUserTable")).forEach((b) => b.addEventListener("click", () => { store.active[b.dataset.user] = store.active[b.dataset.user] === false; save(); paintUsers($("#btlUserFilter").value); toast("Đã cập nhật trạng thái tài khoản"); }));
    }
    paintUsers("");
    $("#btlUserFilter").addEventListener("input", (e) => paintUsers(e.target.value));
    $("#btlAdminTheme").addEventListener("click", () => { store.theme = store.theme === "dark" ? "" : "dark"; save(); applyTheme(); $("#btlThemeBtn").innerHTML = store.theme === "dark" ? icon("sun") : icon("moon"); renderAdmin(main); });
    $("#btlAdminExport").addEventListener("click", () => { $("#btlExport") ? $("#btlExport").click() : (() => { const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = D.id + "-data.json"; a.click(); })(); toast("Đã xuất dữ liệu"); });
    $("#btlAdminReset").addEventListener("click", () => {
      if (!window.confirm("Đặt lại toàn bộ tiến độ học trên máy này?")) return;
      store = { done: {}, cards: {}, quiz: { best: 0, attempts: 0 }, teachExtra: [], grades: {}, active: {}, theme: "", tab: "" };
      save(); toast("Đã đặt lại dữ liệu"); renderAdmin(main); mountTopProgress();
    });
  }

  /* ---------------- lab router ---------------- */
  function renderLab(main) {
    ui.labVisited = true;
    document.title = `Phòng lab — ${D.name}`;
    const lab = D.lab || { kind: "diagram", title: "Phòng lab", lead: "", viewBox: "0 0 600 360", shapes: [] };
    main.innerHTML = `<div class="btl-page"><div class="btl-wrap">
      <div class="btl-lab-head"><div><div class="btl-kicker">PHÒNG LAB TƯƠNG TÁC</div><h1 class="btl-h2" style="margin:6px 0 8px">${esc(lab.title)}</h1><p class="btl-lead">${esc(lab.lead || "")}</p></div><span class="btl-chip">${esc(lab.kind.toUpperCase())}</span></div>
      <div class="btl-lab-grid">
        <section class="btl-lab-stage">
          <div class="btl-lab-toolbar"><strong>${esc(lab.stageLabel || "Bảng điều khiển")}</strong><span style="flex:1"></span><span id="btlLabStatus" class="btl-small btl-muted"></span></div>
          <div class="btl-lab-canvas" id="btlLabCanvas"></div>
        </section>
        <aside class="btl-card btl-lab-controls" id="btlLabControls"></aside>
      </div>
      <p class="btl-lab-note">${esc(lab.note || "")}</p>
    </div></div>`;
    const kinds = { plot: labPlot, transform: labTransform, sim: labSim, diagram: labDiagram, timeline: labTimeline, stepper: labStepper, match: labMatch, equation: labEquation, ledger: labLedger, code: labCode, sql: labSql, crypto: labCrypto, chart: labChart, piano: labPiano, paint: labPaint, calendar: labCalendar, tree: labTree, dialogue: labDialogue, builder: labBuilder };
    (kinds[lab.kind] || labDiagram)(lab);
  }
  function labStatus(text) { const n = $("#btlLabStatus"); if (n) n.textContent = text; }

  /* ---------------- widgets ---------------- */
  function sliderHTML(sliders) {
    return (sliders || []).map((s) => {
      const v = ui.labValue[s.key] != null ? ui.labValue[s.key] : s.value;
      return `<div class="btl-control"><label for="btl-s-${esc(s.key)}"><span>${esc(s.label)}</span><output id="btl-o-${esc(s.key)}" data-unit="${esc(s.unit || "")}">${fmt(v, s.step < 1 ? 2 : 0)}${esc(s.unit || "")}</output></label><input id="btl-s-${esc(s.key)}" type="range" min="${s.min}" max="${s.max}" step="${s.step || 1}" value="${v}" data-slider="${esc(s.key)}"><div class="btl-small btl-muted" style="display:flex;justify-content:space-between"><span>${s.min}</span><span>${s.max}</span></div></div>`;
    }).join("");
  }
  function bindSliders(cb) {
    $$("[data-slider]").forEach((el) => el.addEventListener("input", () => {
      ui.labValue[el.dataset.slider] = Number(el.value);
      const out = $("#btl-o-" + el.dataset.slider);
      const step = Number(el.step) || 1;
      if (out) out.textContent = fmt(el.value, step < 1 ? 2 : 0) + (out.dataset.unit || "");
      cb();
    }));
  }
  function val(key, def) { return ui.labValue[key] != null ? Number(ui.labValue[key]) : Number(def || 0); }

  function svgAxes(x0, x1, y0, y1, w, h, mapX, mapY, ticks) {
    let g = "";
    for (let i = 0; i <= ticks; i++) {
      const x = x0 + (x1 - x0) * i / ticks;
      const y = y0 + (y1 - y0) * i / ticks;
      g += `<line x1="${mapX(x)}" y1="${mapY(y0)}" x2="${mapX(x)}" y2="${mapY(y1)}" stroke="currentColor" stroke-opacity=".12"/><line x1="${mapX(x0)}" y1="${mapY(y)}" x2="${mapX(x1)}" y2="${mapY(y)}" stroke="currentColor" stroke-opacity=".12"/>`;
    }
    g += `<line x1="${mapX(x0)}" y1="${mapY(0)}" x2="${mapX(x1)}" y2="${mapY(0)}" stroke="currentColor" stroke-opacity=".5"/><line x1="${mapX(0)}" y1="${mapY(y0)}" x2="${mapX(0)}" y2="${mapY(y1)}" stroke="currentColor" stroke-opacity=".5"/>`;
    return g;
  }
  function curveY(type, p, x) {
    const P = (k, d) => (typeof p[k] === "string" ? val(p[k], d) : (p[k] != null ? Number(p[k]) : d));
    if (type === "linear") return P("m", 1) * x + P("b", 0);
    if (type === "quad") return P("a", 1) * x * x + P("b", 0) * x + P("c", 0);
    if (type === "sine") return P("amp", 1) * Math.sin(P("freq", 1) * x + P("phase", 0));
    if (type === "exp") return P("a", 1) * Math.exp(P("k", .4) * x);
    if (type === "log") return P("a", 1) * Math.log(Math.max(1e-4, x)) + P("b", 0);
    if (type === "normal") { const mu = P("mu", 0), sg = Math.max(.12, P("sigma", 1)); return Math.exp(-Math.pow(x - mu, 2) / (2 * sg * sg)); }
    if (type === "sqrt") return Math.sign(x) * Math.sqrt(Math.abs(x));
    if (type === "rational") return P("a", 1) / (x - P("b", 0));
    if (type === "tangent") { const a = P("a", 1), b = P("b", 0), x0 = P("x0", 1); const m = 2 * a * x0 + b; return m * (x - x0) + (a * x0 * x0 + b * x0); }
    if (type === "secant") { const a = P("a", 1), b = P("b", 0), x0 = P("x0", 1), dx = Math.max(.2, P("dx", 1)); const y = (x) => a * x * x + b * x; return y(x0) + (y(x0 + dx) - y(x0)) / dx * (x - x0); }
    return x;
  }
  function labPlot(lab) {
    const W = 640, H = 400, padL = 42, padB = 30;
    const x0 = lab.xMin != null ? lab.xMin : -6, x1 = lab.xMax != null ? lab.xMax : 6;
    const y0 = lab.yMin != null ? lab.yMin : -6, y1 = lab.yMax != null ? lab.yMax : 6;
    const mapX = (x) => padL + (x - x0) / (x1 - x0) * (W - padL - 14);
    const mapY = (y) => H - padB - (y - y0) / (y1 - y0) * (H - padB - 14);
    function draw() {
      let curves = "";
      (lab.curves || []).forEach((c) => {
        let d = "", pen = false;
        for (let i = 0; i <= 260; i++) {
          const x = x0 + (x1 - x0) * i / 260;
          const y = curveY(c.type, c.params || {}, x);
          if (!isFinite(y) || Math.abs(y) > 1e6) { pen = false; continue; }
          const px = mapX(x), py = mapY(y);
          d += (pen ? "L" : "M") + px.toFixed(1) + " " + py.toFixed(1); pen = true;
        }
        curves += `<path d="${d}" fill="none" stroke="${esc(c.color || "var(--a)")}" stroke-width="2.6" stroke-linecap="round"/>`;
      });
      let shade = "";
      if (lab.shade) {
        const a = lab.shade.from != null ? lab.shade.from : 0, b = lab.shade.to != null ? lab.shade.to : 2;
        const cur = (lab.curves || [])[0] || { type: "linear", params: {} };
        let d = `M ${mapX(a)} ${mapY(0)}`;
        for (let i = 0; i <= 60; i++) { const x = a + (b - a) * i / 60; d += ` L ${mapX(x).toFixed(1)} ${mapY(curveY(cur.type, cur.params || {}, x)).toFixed(1)}`; }
        d += ` L ${mapX(b)} ${mapY(0)} Z`;
        shade = `<path d="${d}" fill="${esc(lab.shade.color || "var(--a)")}" opacity=".16"/>`;
      }
      $("#btlLabCanvas").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Đồ thị tương tác">${svgAxes(x0, x1, y0, y1, W, H, mapX, mapY, 6)}${shade}${curves}${(lab.curves || []).map((c, i) => `<g><rect x="${padL + 10 + i * 150}" y="12" width="10" height="4" fill="${esc(c.color || "var(--a)")}" rx="2"/><text x="${padL + 26 + i * 150}" y="19" font-size="9" fill="currentColor" font-family="var(--font-body)">${esc(c.label || "")}</text></g>`).join("")}</svg>`;
      const box = $("#btlReadoutBox");
      const rx = lab.readAt ? val(lab.readAt, 1) : 1;
      if (box) box.innerHTML = (lab.curves || []).map((c) => {
        const y = curveY(c.type, c.params || {}, rx);
        const slope = (curveY(c.type, c.params || {}, rx + .001) - curveY(c.type, c.params || {}, rx - .001)) / .002;
        return `<div class="btl-readout"><span>${esc(c.label || c.type)} · x = ${fmt(rx, 2)}</span><b>y=${fmt(y, 2)} · k=${fmt(slope, 2)}</b></div>`;
      }).join("");
    }
    $("#btlLabControls").innerHTML = `<h3 class="btl-h3" style="font-size:15px">Tham số</h3>${sliderHTML(lab.sliders)}<div id="btlReadoutBox"></div><p class="btl-lab-note">${esc(lab.controlNote || "Kéo tham số để thấy đồ thị thay đổi ngay.")}</p>`;
    bindSliders(draw);
    draw();
  }

  function labTransform(lab) {
    const base = { a: 1, b: 0, c: 0, d: 1, x: 2, y: 1 };
    (lab.sliders || []).forEach((s) => { base[s.key] = s.value; });
    Object.keys(base).forEach((k) => { if (ui.labValue[k] == null) ui.labValue[k] = base[k]; });
    const W = 520, H = 420, cx = W / 2, cy = H / 2, scale = 48;
    function draw() {
      const a = val("a", 1), b = val("b", 0), c = val("c", 0), d = val("d", 1), vx = val("x", 2), vy = val("y", 1);
      const det = a * d - b * c;
      const tx = a * vx + b * vy, ty = c * vx + d * vy;
      let grid = "";
      for (let i = -5; i <= 5; i++) {
        const p1 = [cx + (a * i + b * -5) * scale, cy - (c * i + d * -5) * scale];
        const p2 = [cx + (a * i + b * 5) * scale, cy - (c * i + d * 5) * scale];
        grid += `<line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="${i === 0 ? "var(--a)" : "currentColor"}" stroke-opacity="${i === 0 ? ".4" : ".12"}"/>`;
        const q1 = [cx + (a * -5 + b * i) * scale, cy - (c * -5 + d * i) * scale];
        const q2 = [cx + (a * 5 + b * i) * scale, cy - (c * 5 + d * i) * scale];
        grid += `<line x1="${q1[0]}" y1="${q1[1]}" x2="${q2[0]}" y2="${q2[1]}" stroke="${i === 0 ? "var(--a)" : "currentColor"}" stroke-opacity="${i === 0 ? ".4" : ".12"}"/>`;
      }
      const unit = `<polygon points="${cx},${cy} ${cx + a * scale},${cy - c * scale} ${cx + (a + b) * scale},${cy - (c + d) * scale} ${cx + b * scale},${cy - d * scale}" fill="var(--a)" opacity=".16" stroke="var(--a)" stroke-width="1.4"/>`;
      $("#btlLabCanvas").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Biến đổi tuyến tính">${grid}<line x1="20" y1="${cy}" x2="${W - 20}" y2="${cy}" stroke="currentColor" stroke-opacity=".45"/><line x1="${cx}" y1="16" x2="${cx}" y2="${H - 16}" stroke="currentColor" stroke-opacity=".45"/>${unit}
        <line x1="${cx}" y1="${cy}" x2="${cx + vx * scale}" y2="${cy - vy * scale}" stroke="var(--a2)" stroke-width="3"/><circle cx="${cx + vx * scale}" cy="${cy - vy * scale}" r="5" fill="var(--a2)"/>
        <line x1="${cx}" y1="${cy}" x2="${cx + tx * scale}" y2="${cy - ty * scale}" stroke="var(--a)" stroke-width="4"/><circle cx="${cx + tx * scale}" cy="${cy - ty * scale}" r="6" fill="var(--a)"/>
        <text x="24" y="30" font-size="11" fill="currentColor" opacity=".6">v = (${fmt(vx, 1)}, ${fmt(vy, 1)})</text><text x="24" y="48" font-size="11" fill="currentColor" opacity=".6">Av = (${fmt(tx, 2)}, ${fmt(ty, 2)})</text></svg>`;
      const box = $("#btlReadoutBox");
      if (box) box.innerHTML = `<div class="btl-readout"><span>Định thức det(A)</span><b>${fmt(det, 2)}</b></div><div class="btl-readout"><span>Ảnh của vector v</span><b>(${fmt(tx, 2)}, ${fmt(ty, 2)})</b></div><div class="btl-readout"><span>Diện tích hình bình hành</span><b>${fmt(Math.abs(det), 2)}</b></div>`;
    }
    $("#btlLabControls").innerHTML = `<h3 class="btl-h3" style="font-size:15px">Ma trận A và vector v</h3><div class="btl-grid cols-2" style="gap:8px">${sliderHTML(lab.sliders)}</div><div id="btlReadoutBox"></div><div class="btl-row" style="margin-top:10px">${(lab.presets || []).map((p) => `<button class="btl-preset" type="button" data-preset='${esc(JSON.stringify(p.values))}'>${esc(p.name)}</button>`).join("")}</div><p class="btl-lab-note">${esc(lab.controlNote || "Kéo các hệ số để thấy lưới không gian biến dạng.")}</p>`;
    bindSliders(draw);
    $$("[data-preset]").forEach((btn) => btn.addEventListener("click", () => { Object.assign(ui.labValue, JSON.parse(btn.dataset.preset)); renderTransformSliders(); draw(); }));
    function renderTransformSliders() {
      (lab.sliders || []).forEach((sl) => {
        const el = $('[data-slider="' + sl.key + '"]');
        if (el) { el.value = ui.labValue[sl.key]; const out = $("#btl-o-" + sl.key); if (out) out.textContent = fmt(el.value, Number(el.step) < 1 ? 2 : 0) + (out.dataset.unit || ""); }
      });
    }
    draw();
  }

  function labSim(lab) {
    const W = 640, H = 400;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H; canvas.style.width = "100%";
    $("#btlLabCanvas").appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const color = getComputedStyle(document.documentElement).getPropertyValue("--a").trim() || "#2563eb";
    const color2 = getComputedStyle(document.documentElement).getPropertyValue("--a2").trim() || "#7c3aed";
    let t = 0, playing = !(lab.autoPlay === false);
    const sliderDefs = lab.sliders || [];
    const slider = (k, d) => { const s = sliderDefs.find((x) => x.key === k); return val(k, s ? s.value : d); };
    function frame() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(127,127,127,.05)"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(127,127,127,.18)"; ctx.lineWidth = 1;
      for (let x = 40; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 40; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      let read = [];
      if (lab.mode === "projectile") {
        const ang = slider("angle", 45) * Math.PI / 180, sp = slider("speed", 40), g = slider("gravity", 9.8);
        const vx = sp * Math.cos(ang), vy = sp * Math.sin(ang), tf = Math.max(.1, 2 * vy / g), range = vx * tf, apex = vy * vy / (2 * g);
        const sx = 60, sy = H - 50, sc = Math.min(11, 520 / Math.max(range, 1));
        ctx.strokeStyle = color2; ctx.lineWidth = 1.6; ctx.beginPath();
        for (let i = 0; i <= 100; i++) { const tt = tf * i / 100; const px = sx + vx * tt * sc, py = sy - (vy * tt - .5 * g * tt * tt) * sc; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
        ctx.stroke();
        const tt = (t % tf); const px = sx + vx * tt * sc, py = sy - (vy * tt - .5 * g * tt * tt) * sc;
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(127,127,127,.25)"; ctx.fillRect(0, sy, W, 2);
        read = [["Tầm xa", fmt(range, 1) + " m"], ["Độ cao cực đại", fmt(apex, 1) + " m"], ["Thời gian bay", fmt(tf, 2) + " s"]];
      } else if (lab.mode === "wave") {
        const amp = slider("amplitude", 40), fr = slider("frequency", 1.2), wl = slider("wavelength", 90);
        ctx.strokeStyle = color; ctx.lineWidth = 2.4; ctx.beginPath();
        for (let x = 0; x < W; x++) { const y = H / 2 + amp * Math.sin((x / wl) * Math.PI * 2 - t * fr * 2); if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
        ctx.stroke();
        ctx.strokeStyle = color2; ctx.globalAlpha = .45; ctx.beginPath();
        for (let x = 0; x < W; x++) { const y = H / 2 + amp * Math.sin((x / wl) * Math.PI * 2 - t * fr * 2); if (x) ctx.lineTo(x, H - y + 30); else ctx.moveTo(x, H - y + 30); }
        ctx.stroke(); ctx.globalAlpha = 1;
        read = [["Biên độ", fmt(amp) + " cm"], ["Bước sóng", fmt(wl) + " cm"], ["Chu kỳ", fmt(1 / Math.max(fr, .1), 2) + " s"]];
      } else if (lab.mode === "orbit") {
        const sp = slider("speed", 1), ecc = slider("eccentricity", .45), r = 150 - slider("gravity", 40);
        ctx.strokeStyle = color2; ctx.beginPath(); ctx.ellipse(W / 2, H / 2, Math.max(70, r), Math.max(50, r * (1 - ecc * .5)), 0, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(W / 2, H / 2, 22, 0, Math.PI * 2); ctx.fill();
        const ang = t * sp; const px = W / 2 + Math.max(70, r) * Math.cos(ang), py = H / 2 + Math.max(50, r * (1 - ecc * .5)) * Math.sin(ang);
        ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.fillStyle = "#22b573"; ctx.fill();
        read = [["Bán kính lớn", fmt(Math.max(70, r)) + " px"], ["Độ lệch tâm", fmt(ecc, 2)], ["Chu kỳ quỹ đạo", fmt(2 * Math.PI / Math.max(sp, .1), 1) + " s"]];
      } else if (lab.mode === "gears") {
        const r1 = slider("teeth1", 18), r2 = slider("teeth2", 30), rpm = slider("rpm", 20);
        function gear(cx, cy, r, teeth, ang, col) {
          ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang); ctx.strokeStyle = col; ctx.lineWidth = 8;
          ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
          for (let i = 0; i < teeth; i++) { const a = i / teeth * Math.PI * 2; ctx.beginPath(); ctx.moveTo(Math.cos(a) * (r - 8), Math.sin(a) * (r - 8)); ctx.lineTo(Math.cos(a) * (r + 8), Math.sin(a) * (r + 8)); ctx.stroke(); }
          ctx.restore();
        }
        gear(W / 2 - 90, H / 2, 62, r1, t * rpm / 20, color); gear(W / 2 + 90, H / 2, 82, r2, -t * rpm / 20 * r1 / r2, color2);
        read = [["Tỉ số truyền", fmt(r2 / r1, 2)], ["Tốc độ bánh 2", fmt(rpm * r1 / r2, 1) + " vòng/phút"], ["Số răng", r1 + " : " + r2]];
      } else if (lab.mode === "rocket") {
        const thrust = slider("thrust", 1.2), mass = slider("mass", 1), fuel = slider("fuel", 6);
        const acc = thrust * 20 / Math.max(mass, .1) - 9.8, alt = Math.max(0, .5 * acc * t * t), vel = Math.max(0, acc * t);
        ctx.fillStyle = "rgba(127,127,127,.22)"; ctx.fillRect(0, H - 36, W, 3);
        const y = H - 50 - Math.min(alt * 2.2, H - 100);
        ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(W / 2, y - 26); ctx.lineTo(W / 2 - 10, y + 12); ctx.lineTo(W / 2 + 10, y + 12); ctx.closePath(); ctx.fill();
        ctx.fillStyle = color2; ctx.beginPath(); ctx.moveTo(W / 2 - 5, y + 12); ctx.lineTo(W / 2, y + 26 + Math.random() * 10); ctx.lineTo(W / 2 + 5, y + 12); ctx.fill();
        read = [["Gia tốc", fmt(acc, 1) + " m/s²"], ["Độ cao", fmt(alt, 1) + " m"], ["Vận tốc", fmt(vel, 1) + " m/s"], ["Nhiên liệu", fmt(Math.max(0, fuel - t * .4), 1) + " kg"]];
      } else if (lab.mode === "beam") {
        const load = slider("load", 30), len = slider("length", 6), ei = slider("stiffness", 1);
        const maxDef = load * Math.pow(len, 3) / (48 * ei * 1000);
        ctx.strokeStyle = "rgba(127,127,127,.4)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(80, 120); ctx.lineTo(W - 80, 120); ctx.stroke();
        ctx.strokeStyle = color; ctx.lineWidth = 7; ctx.beginPath();
        for (let i = 0; i <= 80; i++) { const x = 80 + (W - 160) * i / 80; const y = 120 + Math.sin(Math.PI * i / 80) * Math.min(120, maxDef * 40); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
        ctx.stroke(); ctx.lineWidth = 1;
        ctx.fillStyle = color2; ctx.beginPath(); ctx.arc(W / 2, 120 + Math.min(120, maxDef * 40), 6, 0, Math.PI * 2); ctx.fill();
        read = [["Độ võng lớn nhất", fmt(maxDef, 3) + " m"], ["Tải trọng", fmt(load) + " kN"], ["Chiều dài nhịp", fmt(len) + " m"]];
      } else {
        read = [["Chế độ", lab.mode || "mô phỏng"]];
      }
      const box = $("#btlSimReadouts");
      if (box) box.innerHTML = read.map(([k, v]) => `<div class="btl-readout"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join("");
    }
    $("#btlLabControls").innerHTML = `<h3 class="btl-h3" style="font-size:15px">Tham số thí nghiệm</h3>${sliderHTML(lab.sliders)}<div id="btlSimReadouts"></div><div class="btl-row" style="margin-top:12px"><button class="btl-btn small" id="btlSimToggle" type="button">${playing ? icon("pause") + " Tạm dừng" : icon("play") + " Chạy"}</button><button class="btl-btn small" id="btlSimReset" type="button">${icon("reset")} Đặt lại</button></div><p class="btl-lab-note">${esc(lab.controlNote || "")}</p>`;
    bindSliders(frame);
    $("#btlSimToggle").addEventListener("click", () => { playing = !playing; $("#btlSimToggle").innerHTML = playing ? icon("pause") + " Tạm dừng" : icon("play") + " Chạy"; });
    $("#btlSimReset").addEventListener("click", () => { t = 0; playing = true; $("#btlSimToggle").innerHTML = icon("pause") + " Tạm dừng"; frame(); });
    function loop() {
      if (!document.body.contains(canvas)) return;
      if (playing) t += .016;
      frame();
      requestAnimationFrame(loop);
    }
    frame();
    requestAnimationFrame(loop);
  }

  function labDiagram(lab) {
    const layers = lab.layers || [];
    const state = {};
    layers.forEach((l) => { state[l.id] = ui.labValue["layer-" + l.id] !== false; });
    function draw() {
      const shapes = (lab.shapes || []).filter((s) => !s.layer || state[s.layer] !== false);
      const links = (lab.links || []).filter((l) => !l.layer || state[l.layer] !== false);
      const renderShape = (s, i) => {
        const on = ui.detail === i ? "is-on" : "";
        const common = `class="btl-diagram-shape ${on}" data-shape="${i}" tabindex="0" role="button" aria-label="${esc(s.label || s.info && s.info.title || "Chi tiết")}"`;
        if (s.type === "circle") return `<circle ${common} cx="${s.cx}" cy="${s.cy}" r="${s.r}" fill="${esc(s.fill || "var(--a)")}" fill-opacity="${s.opacity == null ? ".22" : s.opacity}" stroke="${esc(s.stroke || "var(--a)")}" stroke-width="${s.strokeWidth || 1.6}"/>${s.label ? `<text class="btl-diagram-label" x="${s.cx}" y="${s.cy + 3}" text-anchor="middle">${esc(s.label)}</text>` : ""}`;
        if (s.type === "ellipse") return `<ellipse ${common} cx="${s.cx}" cy="${s.cy}" rx="${s.rx}" ry="${s.ry}" fill="${esc(s.fill || "var(--a)")}" fill-opacity="${s.opacity == null ? ".22" : s.opacity}" stroke="${esc(s.stroke || "var(--a)")}" stroke-width="${s.strokeWidth || 1.6}"/>${s.label ? `<text class="btl-diagram-label" x="${s.cx}" y="${s.cy + 3}" text-anchor="middle">${esc(s.label)}</text>` : ""}`;
        if (s.type === "rect") return `<rect ${common} x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.rx || 8}" fill="${esc(s.fill || "var(--a)")}" fill-opacity="${s.opacity == null ? ".18" : s.opacity}" stroke="${esc(s.stroke || "var(--a)")}" stroke-width="${s.strokeWidth || 1.6}"/>${s.label ? `<text class="btl-diagram-label" x="${s.x + s.w / 2}" y="${s.y + s.h / 2 + 3}" text-anchor="middle">${esc(s.label)}</text>` : ""}`;
        if (s.type === "polygon") return `<polygon ${common} points="${esc(s.points)}" fill="${esc(s.fill || "var(--a)")}" fill-opacity="${s.opacity == null ? ".2" : s.opacity}" stroke="${esc(s.stroke || "var(--a)")}" stroke-width="${s.strokeWidth || 1.6}"/>${s.label ? `<text class="btl-diagram-label" x="${s.lx || 0}" y="${s.ly || 0}" text-anchor="middle">${esc(s.label)}</text>` : ""}`;
        return `<path ${common} d="${esc(s.d)}" fill="${esc(s.fill || "none")}" fill-opacity="${s.opacity == null ? ".2" : s.opacity}" stroke="${esc(s.stroke || "var(--a)")}" stroke-width="${s.strokeWidth || 1.6}" stroke-linecap="round" stroke-linejoin="round"/>${s.label ? `<text class="btl-diagram-label" x="${s.lx || 0}" y="${s.ly || 0}" text-anchor="middle">${esc(s.label)}</text>` : ""}`;
      };
      const detail = ui.detail != null && lab.shapes[ui.detail] ? lab.shapes[ui.detail].info : null;
      $("#btlLabCanvas").innerHTML = `<div class="btl-diagram-wrap"><svg viewBox="${esc(lab.viewBox || "0 0 600 380")}" role="img" aria-label="${esc(lab.title)}">${links.map((l) => `<line x1="${l.x1}" y1="${l.y1}" x2="${l.x2}" y2="${l.y2}" stroke="currentColor" stroke-opacity=".35" stroke-width="${l.width || 1.4}" ${l.dash ? 'stroke-dasharray="5 5"' : ""}/>${l.label ? `<text class="btl-diagram-label" x="${(l.x1 + l.x2) / 2}" y="${(l.y1 + l.y2) / 2 - 4}" text-anchor="middle">${esc(l.label)}</text>` : ""}`).join("")}${(lab.shapes || []).map((s, i) => (!s.layer || state[s.layer] !== false) ? renderShape(s, i) : "").join("")}</svg></div>`;
      $("#btlLabControls").innerHTML = `<div class="btl-detail" id="btlDetail">${detail ? `<div class="btl-kicker">CHI TIẾT</div><h4>${esc(detail.title)}</h4><p>${esc(detail.desc)}</p><div class="btl-detail-tags">${(detail.tags || []).map((t) => `<span class="btl-tag">${esc(t)}</span>`).join("")}</div>` : `<div class="btl-kicker">HƯỚNG DẪN</div><h4>${esc(lab.pickHint || "Chọn một vùng trên hình")}</h4><p>${esc(lab.controlNote || "Nhấn vào từng bộ phận để xem tên, vị trí và chức năng.")}</p>`}</div>
        ${layers.length ? `<div class="btl-stack" style="margin-top:12px"><div class="btl-kicker">LỚP HIỂN THỊ</div>${layers.map((l) => `<label class="btl-layer"><input type="checkbox" data-layer="${esc(l.id)}" ${state[l.id] ? "checked" : ""}>${esc(l.label)}</label>`).join("")}</div>` : ""}
        <p class="btl-lab-note">${esc(lab.note || "")}</p>`;
      $$("[data-layer]").forEach((c) => c.addEventListener("change", () => { state[c.dataset.layer] = c.checked; ui.labValue["layer-" + c.dataset.layer] = c.checked; draw(); }));
      $$("[data-shape]").forEach((s) => s.addEventListener("click", () => { ui.detail = Number(s.dataset.shape); draw(); }));
      $$("[data-shape]").forEach((s) => s.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ui.detail = Number(s.dataset.shape); draw(); } }));
    }
    draw();
  }

  function labTimeline(lab) {
    const ev = lab.events || [];
    if (ui.detail == null && ev.length) ui.detail = 0;
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:8px 6px"><div class="btl-timeline" id="btlTL">${ev.map((e, i) => `<div class="btl-tl-item ${ui.detail === i ? "is-on" : ""}" data-tl="${i}" role="button" tabindex="0"><div class="btl-tl-year">${esc(e.year)}</div><h4>${esc(e.title)}</h4><p>${esc(e.desc)}</p></div>`).join("")}</div></div>`;
    const detail = ev[ui.detail] || {};
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">MỐC ĐANG CHỌN</div><h4 class="btl-h3">${esc(detail.title || "Chọn một mốc")}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(detail.detail || detail.desc || "")}</p><div class="btl-detail-tags">${(detail.tags || []).map((t) => `<span class="btl-tag">${esc(t)}</span>`).join("")}</div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-tl]").forEach((n) => { const pick = () => { ui.detail = Number(n.dataset.tl); labTimeline(lab); }; n.addEventListener("click", pick); n.addEventListener("keydown", (e) => { if (e.key === "Enter") pick(); }); });
  }

  function labStepper(lab) {
    const steps = lab.steps || [];
    ui.labStep = clamp(ui.labStep, 0, Math.max(steps.length - 1, 0));
    const i = ui.labStep, s = steps[i] || {};
    const pct = steps.length ? Math.round((i + 1) / steps.length * 100) : 0;
    const nodes = steps.map((st, k) => `<span class="btl-chip ${k === i ? "" : "neutral"}">${pad(k + 1)} · ${esc(st.short || st.title)}</span>`).join("");
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:10px"><div class="btl-row" style="justify-content:space-between"><strong style="font-family:var(--font-display)">${esc(s.title || "")}</strong><span class="btl-small btl-muted">${i + 1}/${steps.length}</span></div><div class="btl-bar" style="margin:12px 0 18px"><span style="width:${pct}%"></span></div><div class="btl-row" style="gap:6px;margin-bottom:18px">${nodes}</div><div class="btl-step-panel" style="min-height:140px;box-shadow:none"><p>${para(s.body || "")}</p>${s.tip ? `<div class="btl-note" style="margin-top:12px">${esc(s.tip)}</div>` : ""}</div><div class="btl-row" style="margin-top:14px"><button class="btl-btn small" id="btlStepPrev" ${i === 0 ? "disabled" : ""}>${icon("back")} Trước</button><button class="btl-btn small primary" id="btlStepNext" ${i === steps.length - 1 ? "disabled" : ""}>Tiếp ${icon("arrow")}</button></div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">MÔ PHỎNG TỪNG BƯỚC</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Bấm Tiếp để đi theo đúng trình tự.")}</p><div class="btl-readout" style="margin-top:12px"><span>Bước hiện tại</span><b>${i + 1}/${steps.length}</b></div><div class="btl-readout"><span>Trạng thái</span><b>${i === steps.length - 1 ? "Hoàn tất" : "Đang thực hiện"}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $("#btlStepPrev").addEventListener("click", () => { ui.labStep = Math.max(0, i - 1); labStepper(lab); });
    $("#btlStepNext").addEventListener("click", () => { ui.labStep = Math.min(steps.length - 1, i + 1); labStepper(lab); });
  }

  function labMatch(lab) {
    const items = lab.items || [];
    const cats = lab.categories || [];
    const result = ui.matchResult || (ui.matchResult = {});
    const picked = ui.matchPick;
    const score = Object.keys(result).filter((k) => result[k]).length;
    const catBoxes = cats.map((c) => `<div class="btl-bucket"><h5>${esc(c.label)}</h5><div class="drop">${Object.keys(result).filter((k) => result[k] === c.id).map((k) => `<span>${esc(items[k].text)}</span>`).join("") || '<span style="background:transparent;color:var(--faint)">thả vào đây</span>'}</div></div>`).join("");
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:6px"><div class="btl-match-items">${items.map((it, i) => { const done = result[i] != null; return `<button class="btl-match-item ${picked === i ? "is-picked" : ""} ${done ? "ok" : ""}" data-mi="${i}" type="button" ${done ? "disabled" : ""}><span>${esc(it.text)}</span><span>${done ? icon("check") : ""}</span></button>`; }).join("")}</div><div class="btl-buckets">${catBoxes}</div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">PHÂN LOẠI</div><h4 class="btl-h3">${picked == null ? "Chọn một mục bên trái" : "Chọn nhóm phù hợp"}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Chọn mục rồi chọn nhóm để phân loại.")}</p><div class="btl-readout" style="margin-top:12px"><span>Đúng</span><b>${score}/${items.length}</b></div>${picked != null ? `<div class="btl-row" style="margin-top:10px;flex-wrap:wrap">${cats.map((c) => `<button class="btl-preset" data-cat="${esc(c.id)}" type="button">${esc(c.label)}</button>`).join("")}</div>` : ""}<button class="btl-btn small" id="btlMatchReset" type="button" style="margin-top:12px">${icon("reset")} Làm lại</button><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-mi]").forEach((b) => b.addEventListener("click", () => { ui.matchPick = Number(b.dataset.mi); labMatch(lab); }));
    $$("[data-cat]").forEach((b) => b.addEventListener("click", () => {
      const i = picked; const it = items[i]; const ok = it.category === b.dataset.cat;
      ui.matchFeedback = { ok, text: ok ? (it.why || "Chính xác.") : (it.why || "Chưa đúng, thử lại.") };
      if (ok) { result[i] = b.dataset.cat; ui.matchPick = null; } else { delete result[i]; }
      labMatch(lab);
      if (ui.matchFeedback) { const n = $("#btlLabControls"); if (n) { const d = document.createElement("div"); d.className = "btl-note"; d.style.marginTop = "10px"; d.textContent = ui.matchFeedback.text; n.appendChild(d); } }
      if (Object.keys(result).filter((k) => result[k]).length === items.length) toast("Đã phân loại đúng toàn bộ");
    }));
    $("#btlMatchReset").addEventListener("click", () => { ui.matchResult = {}; ui.matchPick = null; ui.matchFeedback = null; labMatch(lab); });
  }

  function parseFormula(f) {
    const out = {};
    let i = 0;
    const stack = [out];
    while (i < f.length) {
      const ch = f[i];
      if (ch === "(") { stack.push({}); i++; }
      else if (ch === ")") { const g = stack.pop(); i++; let n = ""; while (/[0-9]/.test(f[i] || "")) n += f[i++]; const mult = Number(n || 1); const top = stack[stack.length - 1]; Object.keys(g).forEach((k) => { top[k] = (top[k] || 0) + g[k] * mult; }); }
      else if (/[A-Z]/.test(ch)) { let el = ch; i++; while (/[a-z]/.test(f[i] || "")) el += f[i++]; let n = ""; while (/[0-9]/.test(f[i] || "")) n += f[i++]; const top = stack[stack.length - 1]; top[el] = (top[el] || 0) + Number(n || 1); }
      else i++;
    }
    return out;
  }
  function labEquation(lab) {
    const sp = lab.species || { left: [], right: [] };
    const coef = ui.eqCoef || (ui.eqCoef = {});
    sp.left.forEach((_, i) => { if (coef["l" + i] == null) coef["l" + i] = 1; });
    sp.right.forEach((_, i) => { if (coef["r" + i] == null) coef["r" + i] = 1; });
    function count() {
      const total = {};
      sp.left.forEach((f, i) => { const c = Number(coef["l" + i] || 0); const p = parseFormula(f); Object.keys(p).forEach((k) => total[k] = (total[k] || 0) + p[k] * c); });
      const right = {};
      sp.right.forEach((f, i) => { const c = Number(coef["r" + i] || 0); const p = parseFormula(f); Object.keys(p).forEach((k) => right[k] = (right[k] || 0) + p[k] * c); });
      return { total, right };
    }
    function draw() {
      const { total, right } = count();
      const els = Array.from(new Set([...Object.keys(total), ...Object.keys(right)])).sort();
      const balanced = els.length && els.every((k) => (total[k] || 0) === (right[k] || 0));
      const leftHTML = sp.left.map((f, i) => `<span class="btl-row" style="gap:4px;display:inline-flex"><input class="btl-input" style="width:52px;text-align:center;padding:4px" type="number" min="1" max="9" value="${coef["l" + i]}" data-eq="l${i}">${esc(f)}</span>`).join(' <span style="opacity:.4">+</span> ');
      const rightHTML = sp.right.map((f, i) => `<span class="btl-row" style="gap:4px;display:inline-flex"><input class="btl-input" style="width:52px;text-align:center;padding:4px" type="number" min="1" max="9" value="${coef["r" + i]}" data-eq="r${i}">${esc(f)}</span>`).join(' <span style="opacity:.4">+</span> ');
      $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:10px"><div style="font-size:15px;line-height:2.4;display:flex;flex-wrap:wrap;align-items:center;gap:4px">${leftHTML} <span style="color:var(--a);font-weight:700">→</span> ${rightHTML}</div><div class="btl-table-wrap" style="margin-top:18px"><table class="btl-table" style="min-width:0"><thead><tr><th>Nguyên tố</th><th>Vế trái</th><th>Vế phải</th><th></th></tr></thead><tbody>${els.map((k) => `<tr><td>${esc(k)}</td><td class="num">${total[k] || 0}</td><td class="num">${right[k] || 0}</td><td>${(total[k] || 0) === (right[k] || 0) ? '<span class="btl-chip ok">Khớp</span>' : '<span class="btl-chip warn">Lệch</span>'}</td></tr>`).join("")}</tbody></table></div><div class="btl-note" style="margin-top:14px">${balanced ? "Phương trình đã cân bằng: số nguyên tử mỗi nguyên tố ở hai vế bằng nhau." : "Chưa cân bằng. Điều chỉnh hệ số để bảo toàn nguyên tố."}</div></div>`;
      $("#btlLabControls").innerHTML = `<div class="btl-kicker">CÂN BẰNG PHƯƠNG TRÌNH</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Nhập hệ số vào ô trước mỗi chất.")}</p><div class="btl-readout" style="margin-top:12px"><span>Trạng thái</span><b>${balanced ? "Cân bằng" : "Chưa cân bằng"}</b></div><button class="btl-btn small primary" id="btlEqHint" type="button" style="margin-top:12px">Điền hệ số đúng</button><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
      $$("[data-eq]").forEach((inp) => inp.addEventListener("change", () => { coef[inp.dataset.eq] = clamp(Number(inp.value) || 1, 1, 9); draw(); }));
      $("#btlEqHint").addEventListener("click", () => { (lab.correct || []).forEach((v, i) => { const key = i < sp.left.length ? "l" + i : "r" + (i - sp.left.length); coef[key] = v; }); draw(); toast("Đã điền bộ hệ số mẫu"); });
    }
    draw();
  }

  function labLedger(lab) {
    const accounts = lab.accounts || [];
    const entries = ui.ledgerEntries || (ui.ledgerEntries = (lab.entries || []).map((e) => Object.assign({}, e)));
    function draw() {
      const bal = {};
      accounts.forEach((a) => { bal[a.code] = 0; });
      const sign = (a) => (a && (a.type === "asset" || a.type === "expense") ? 1 : -1);
      entries.forEach((e) => {
        const d = accounts.find((a) => a.code === e.debit), c = accounts.find((a) => a.code === e.credit);
        if (d) bal[d.code] += Number(e.amount) * sign(d);
        if (c) bal[c.code] -= Number(e.amount) * sign(c);
      });
      const debitTotal = entries.reduce((s, e) => s + Number(e.amount), 0), creditTotal = debitTotal;
      $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:6px"><div class="btl-ledger-grid"><div class="btl-ledger"><h5>Nhật ký phát sinh</h5><div class="btl-table-wrap" style="border:0"><table class="btl-table" style="min-width:0"><thead><tr><th>Diễn giải</th><th>Nợ</th><th>Có</th><th class="num">Số tiền</th></tr></thead><tbody>${entries.map((e) => `<tr><td>${esc(e.desc)}</td><td class="num">${esc(e.debit)}</td><td class="num">${esc(e.credit)}</td><td class="num">${fmt(e.amount, 0)}</td></tr>`).join("") || '<tr><td colspan="4" class="btl-empty">Chưa có bút toán</td></tr>'}</tbody></table></div></div><div class="btl-ledger"><h5>Số dư tài khoản</h5><div class="btl-table-wrap" style="border:0"><table class="btl-table" style="min-width:0"><thead><tr><th>Tài khoản</th><th>Loại</th><th class="num">Số dư</th></tr></thead><tbody>${accounts.map((a) => `<tr><td>${esc(a.code)} · ${esc(a.name)}</td><td class="btl-small">${esc(a.type)}</td><td class="num">${fmt(Math.abs(bal[a.code] || 0), 0)}</td></tr>`).join("")}</tbody></table></div></div></div><div class="btl-note" style="margin-top:14px">Tổng Nợ = Tổng Có = ${fmt(debitTotal, 0)} · Bảng cân đối tạm thời ${debitTotal === creditTotal ? "cân đối" : "đang lệch"}.</div></div>`;
      $("#btlLabControls").innerHTML = `<div class="btl-kicker">SỔ NHẬT KÝ</div><h4 class="btl-h3">Ghi bút toán mới</h4><form class="btl-form" id="btlLedgerForm" style="margin-top:10px"><label>Diễn giải<input class="btl-input" name="desc" required maxlength="70" placeholder="Mua vật liệu trả tiền mặt"></label><label>Tài khoản Nợ<select class="btl-select" name="debit">${accounts.map((a) => `<option value="${esc(a.code)}">${esc(a.code)} · ${esc(a.name)}</option>`).join("")}</select></label><label>Tài khoản Có<select class="btl-select" name="credit">${accounts.map((a) => `<option value="${esc(a.code)}">${esc(a.code)} · ${esc(a.name)}</option>`).join("")}</select></label><label>Số tiền<input class="btl-input" name="amount" type="number" min="1" required value="1000000"></label><button class="btl-btn small primary" type="submit">Ghi sổ</button></form><button class="btl-btn small" id="btlLedgerReset" type="button" style="margin-top:10px">${icon("reset")} Xóa bút toán tự thêm</button><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
      $("#btlLedgerForm").addEventListener("submit", (e) => {
        e.preventDefault(); const f = new FormData(e.target);
        if (f.get("debit") === f.get("credit")) { toast("Tài khoản Nợ và Có phải khác nhau"); return; }
        entries.push({ desc: String(f.get("desc")), debit: f.get("debit"), credit: f.get("credit"), amount: Number(f.get("amount")) }); draw(); toast("Đã ghi bút toán");
      });
      $("#btlLedgerReset").addEventListener("click", () => { ui.ledgerEntries = (lab.entries || []).map((e) => Object.assign({}, e)); draw(); });
    }
    draw();
  }

  function labCode(lab) {
    const steps = lab.steps || [];
    ui.codeStep = clamp(ui.codeStep, 0, Math.max(0, steps.length - 1));
    const st = steps[ui.codeStep] || {};
    const lines = lab.lines || [];
    const code = lines.map((l, i) => `<div class="ln ${st.line === i + 1 ? "hot" : ""}"><em>${i + 1}</em><span>${esc(l)}</span></div>`).join("");
    const vars = Object.entries(st.vars || {}).map(([k, v]) => `<div class="btl-var"><b>${esc(k)}</b> = ${esc(v)}</div>`).join("");
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:4px"><div class="btl-code">${code}</div><div style="margin-top:14px"><div class="btl-kicker">BIẾN &amp; KẾT QUẢ</div><div class="btl-vars" style="margin-top:8px">${vars || '<span class="btl-small btl-muted">Chưa có biến</span>'}</div>${st.output ? `<div class="btl-note" style="margin-top:10px"><b>Xuất:</b> ${esc(st.output)}</div>` : ""}</div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">CHẠY TỪNG BƯỚC</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Bấm Tiếp để trace luồng thực thi.")}</p><div class="btl-readout" style="margin-top:10px"><span>Dòng đang chạy</span><b>${st.line || "—"}</b></div><div class="btl-readout"><span>Bước</span><b>${ui.codeStep + 1}/${steps.length}</b></div><div class="btl-row" style="margin-top:10px"><button class="btl-btn small" id="btlCodePrev" ${ui.codeStep === 0 ? "disabled" : ""}>${icon("back")}</button><button class="btl-btn small primary" id="btlCodeNext" ${ui.codeStep === steps.length - 1 ? "disabled" : ""}>Tiếp ${icon("arrow")}</button></div>${lab.tests ? `<h4 class="btl-h3" style="font-size:13px;margin-top:16px">Ca kiểm thử</h4><div class="btl-stack" style="margin-top:8px">${lab.tests.map((t) => `<div class="btl-readout"><span>${esc(t.input)}</span><b style="color:${t.pass ? "var(--ok)" : "var(--bad)"}">${t.pass ? "Đạt" : "Lỗi"}</b></div>`).join("")}</div>` : ""}<p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $("#btlCodePrev").addEventListener("click", () => { ui.codeStep--; labCode(lab); });
    $("#btlCodeNext").addEventListener("click", () => { ui.codeStep++; labCode(lab); });
  }

  function labSql(lab) {
    const queries = lab.queries || [];
    ui.sqlIndex = ui.sqlIndex || 0;
    const q = queries[ui.sqlIndex] || {};
    const rows = (q.result && q.result.rows) || [];
    const cols = (q.result && q.result.cols) || [];
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:4px"><div class="btl-row" style="margin-bottom:10px">${queries.map((x, i) => `<button class="btl-preset ${i === ui.sqlIndex ? "is-on" : ""}" data-sql="${i}" type="button">${esc(x.label || "Truy vấn " + (i + 1))}</button>`).join("")}</div><div class="btl-code"><div class="ln"><em>SQL</em><span>${esc(q.sql || "")}</span></div></div><div class="btl-note" style="margin-top:12px">${esc(q.explain || "")}</div><div class="btl-table-wrap" style="margin-top:14px"><table class="btl-table"><thead><tr>${cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((v) => `<td>${esc(v)}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${cols.length || 1}" class="btl-empty">Không có dòng dữ liệu</td></tr>`}</tbody></table></div><p class="btl-small btl-muted" style="margin-top:8px">${rows.length} dòng trả về.</p></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">SQL PLAYGROUND</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Chọn một truy vấn mẫu để xem kết quả và giải thích.")}</p><div class="btl-readout" style="margin-top:12px"><span>Truy vấn</span><b>${ui.sqlIndex + 1}/${queries.length}</b></div><div class="btl-readout"><span>Số dòng</span><b>${rows.length}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-sql]").forEach((b) => b.addEventListener("click", () => { ui.sqlIndex = Number(b.dataset.sql); labSql(lab); }));
  }

  function labCrypto(lab) {
    const txt = ui.cryptoText != null ? ui.cryptoText : (lab.sample || "Học an toàn thông tin");
    const shift = ui.cryptoShift != null ? ui.cryptoShift : 3;
    const caesar = (s, k) => s.replace(/[a-zA-Z]/g, (ch) => { const base = ch <= "Z" ? 65 : 97; return String.fromCharCode((ch.charCodeAt(0) - base + k + 26) % 26 + base); });
    const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(16).padStart(8, "0"); };
    const strength = (s) => { let sc = 0; if (s.length >= 8) sc += 1; if (s.length >= 12) sc += 1; if (/[A-Z]/.test(s) && /[a-z]/.test(s)) sc += 1; if (/[0-9]/.test(s)) sc += 1; if (/[^A-Za-z0-9]/.test(s)) sc += 1; return Math.min(4, sc); };
    const pw = ui.password || "MatKhau@2026";
    const score = strength(pw);
    const labels = ["Rất yếu", "Yếu", "Trung bình", "Mạnh", "Rất mạnh"];
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:4px" class="btl-stack"><div><div class="btl-kicker">MÃ HÓA CAESAR</div><div class="btl-row" style="margin-top:8px"><input class="btl-input" id="btlCryptoInput" value="${esc(txt)}" style="flex:1" maxlength="80"><input class="btl-input" id="btlCryptoShift" type="number" min="1" max="25" value="${shift}" style="width:70px"></div><div class="btl-note" style="margin-top:10px;font-family:var(--font-mono)">${esc(caesar(txt, shift))}</div><div class="btl-small btl-muted" style="margin-top:6px">Băm mô phỏng: <b style="font-family:var(--font-mono)">${hash(txt)}</b></div></div><div><div class="btl-kicker">ĐỘ MẠNH MẬT KHẨU</div><div class="btl-row" style="margin-top:8px"><input class="btl-input" id="btlPwInput" value="${esc(pw)}" style="flex:1" maxlength="60"><span class="btl-chip ${score >= 3 ? "ok" : "warn"}">${labels[score]}</span></div><div class="btl-bar" style="margin-top:10px"><span style="width:${score / 4 * 100}%"></span></div></div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">PHÒNG LAB MÃ HÓA</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Thử mã hóa một câu và kiểm tra độ mạnh mật khẩu.")}</p><div class="btl-readout" style="margin-top:12px"><span>Ký tự đầu vào</span><b>${txt.length}</b></div><div class="btl-readout"><span>Độ mạnh</span><b>${labels[score]}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $("#btlCryptoInput").addEventListener("change", (e) => { ui.cryptoText = e.target.value; labCrypto(lab); });
    $("#btlCryptoShift").addEventListener("change", (e) => { ui.cryptoShift = clamp(Number(e.target.value) || 1, 1, 25); labCrypto(lab); });
    $("#btlPwInput").addEventListener("change", (e) => { ui.password = e.target.value; labCrypto(lab); });
  }

  function labChart(lab) {
    const labels = lab.labels || [];
    const series = lab.series || [];
    const points = ui.chartPoints || (ui.chartPoints = series.map((s) => s.data.slice()));
    const W = 600, H = 300, padL = 42, padB = 28;
    const all = points.flat();
    const max = Math.max.apply(null, all.concat([1])) * 1.15;
    const min = Math.min.apply(null, all.concat([0]));
    const mapX = (i) => padL + i / Math.max(labels.length - 1, 1) * (W - padL - 16);
    const mapY = (v) => H - padB - (v - min) / (max - min || 1) * (H - padB - 18);
    let grid = "";
    for (let i = 0; i <= 4; i++) { const y = min + (max - min) * i / 4; grid += `<line x1="${padL}" y1="${mapY(y)}" x2="${W - 16}" y2="${mapY(y)}" stroke="currentColor" stroke-opacity=".1"/><text x="8" y="${mapY(y) + 3}" font-size="9" fill="currentColor" opacity=".5">${fmt(y, 0)}</text>`; }
    const paths = points.map((data, si) => {
      if (lab.mode === "bar") return data.map((v, i) => `<rect x="${mapX(i) - 9}" y="${mapY(v)}" width="18" height="${Math.max(1, mapY(0) - mapY(v))}" rx="4" fill="${esc(series[si].color || "var(--a)")}" opacity=".78"/>`).join("");
      return `<path d="${data.map((v, i) => (i ? "L" : "M") + mapX(i).toFixed(1) + " " + mapY(v).toFixed(1)).join(" ")}" fill="none" stroke="${esc(series[si].color || "var(--a)")}" stroke-width="2.6" stroke-linecap="round"/>` + data.map((v, i) => `<circle cx="${mapX(i)}" cy="${mapY(v)}" r="3" fill="${esc(series[si].color || "var(--a)")}"/>`).join("");
    }).join("");
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:4px"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Biểu đồ dữ liệu">${grid}${paths}${labels.map((l, i) => `<text x="${mapX(i)}" y="${H - 8}" text-anchor="middle" font-size="9" fill="currentColor" opacity=".55">${esc(l)}</text>`).join("")}</svg><div class="btl-row" style="margin-top:6px">${series.map((s) => `<span class="btl-tag" style="border-left:3px solid ${esc(s.color || "var(--a)")}">${esc(s.label)}</span>`).join("")}</div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">DỮ LIỆU</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "")}</p>${lab.add ? `<form class="btl-form" id="btlChartForm" style="margin-top:12px"><label>${esc(lab.add.label || "Thêm số liệu")}<input class="btl-input" name="value" type="number" min="${lab.add.min || 0}" max="${lab.add.max || 200}" required></label><button class="btl-btn small primary" type="submit">Thêm điểm</button></form>` : ""}<div class="btl-readout" style="margin-top:12px"><span>Điểm dữ liệu</span><b>${labels.length}</b></div><div class="btl-readout"><span>Cao nhất</span><b>${fmt(Math.max.apply(null, all), 1)}</b></div><div class="btl-readout"><span>Thấp nhất</span><b>${fmt(Math.min.apply(null, all), 1)}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    if (lab.add) $("#btlChartForm").addEventListener("submit", (e) => {
      e.preventDefault(); const v = Number(new FormData(e.target).get("value"));
      series.forEach((s, i) => { points[i].push(v); }); labels.push("M" + labels.length); labChart(lab); toast("Đã thêm điểm dữ liệu");
    });
  }

  function labPiano(lab) {
    if (!ui.audio) { try { ui.audio = new (window.AudioContext || window.webkitAudioContext)(); } catch (err) { ui.audio = null; } }
    const notes = lab.notes || ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
    const freq = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, B4: 493.88, C5: 523.25, "C#4": 277.18, "D#4": 311.13, "F#4": 369.99, "G#4": 415.3, "A#4": 466.16 };
    function play(n) {
      if (!ui.audio) return;
      const o = ui.audio.createOscillator(), g = ui.audio.createGain();
      o.type = lab.timbre || "sine"; o.frequency.value = freq[n] || 440;
      g.gain.setValueAtTime(.0001, ui.audio.currentTime); g.gain.exponentialRampToValueAtTime(.24, ui.audio.currentTime + .02); g.gain.exponentialRampToValueAtTime(.0001, ui.audio.currentTime + .55);
      o.connect(g).connect(ui.audio.destination); o.start(); o.stop(ui.audio.currentTime + .6);
      const el = $('[data-note="' + n + '"]'); if (el) { el.classList.add("is-play"); setTimeout(() => el.classList.remove("is-play"), 180); }
    }
    const melody = lab.melody || [];
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:8px"><div class="btl-piano"><div class="btl-keys">${notes.map((n) => `<button class="btl-key ${n.includes("#") ? "black" : ""}" data-note="${esc(n)}" type="button">${esc(n)}</button>`).join("")}</div><div class="btl-sheet" id="btlSheet">${esc(lab.sheetText || "Nhấn phím để nghe và ghi tên nốt.")}</div></div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">PIANO TƯƠNG TÁC</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Nhấn phím để nghe cao độ. Âm thanh do trình duyệt tổng hợp.")}</p><button class="btl-btn small primary" id="btlPlayMelody" type="button" style="margin-top:12px">${icon("play")} Phát giai điệu mẫu</button><button class="btl-btn small" id="btlMetronome" type="button" style="margin-top:6px">Bật nhịp 80 BPM</button><div class="btl-readout" style="margin-top:12px"><span>Số phím</span><b>${notes.length}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-note]").forEach((b) => b.addEventListener("click", () => { play(b.dataset.note); ui.lastNote = b.dataset.note; const sh = $("#btlSheet"); if (sh) sh.innerHTML = "Nốt vừa chơi: <b>" + esc(b.dataset.note) + "</b>"; }));
    $("#btlPlayMelody").addEventListener("click", () => { let t = 0; melody.forEach((n) => { setTimeout(() => { play(typeof n === "string" ? n : n.note); const sh = $("#btlSheet"); if (sh) sh.innerHTML = "Đang phát: <b>" + esc(typeof n === "string" ? n : n.note) + "</b>"; }, t); t += (typeof n === "string" ? 450 : (n.beat || 1) * 420); }); });
    let metro = null;
    $("#btlMetronome").addEventListener("click", (e) => {
      if (metro) { clearInterval(metro); metro = null; e.target.textContent = "Bật nhịp 80 BPM"; return; }
      e.target.textContent = "Tắt nhịp"; let beat = 0;
      metro = setInterval(() => { play(beat % 4 === 0 ? "C5" : "G4"); beat++; }, 750);
    });
  }

  function labPaint(lab) {
    const W = 660, H = 400;
    const wrap = document.createElement("div");
    wrap.style.cssText = "position:relative;width:100%;max-width:660px;aspect-ratio:660/400;border-radius:12px;overflow:hidden;background:#fffdf8";
    const c = document.createElement("canvas"); c.width = W; c.height = H; c.style.cssText = "position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:crosshair";
    const over = document.createElement("canvas"); over.width = W; over.height = H; over.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none";
    wrap.appendChild(c); wrap.appendChild(over);
    $("#btlLabCanvas").appendChild(wrap);
    const ctx = c.getContext("2d"), octx = over.getContext("2d");
    ctx.fillStyle = "#fffdf8"; ctx.fillRect(0, 0, W, H);
    let drawing = false, color = ui.paintColor || "#1f2937", size = ui.paintSize || 4;
    let guide = ui.paintGuide || "thirds";
    function guides() {
      octx.clearRect(0, 0, W, H);
      octx.save(); octx.strokeStyle = "rgba(239,68,68,.42)"; octx.lineWidth = 1; octx.setLineDash([5, 5]);
      if (guide === "thirds") {
        [W / 3, W * 2 / 3].forEach((x) => { octx.beginPath(); octx.moveTo(x, 0); octx.lineTo(x, H); octx.stroke(); });
        [H / 3, H * 2 / 3].forEach((y) => { octx.beginPath(); octx.moveTo(0, y); octx.lineTo(W, y); octx.stroke(); });
      }
      if (guide === "grid") { for (let x = 0; x < W; x += 33) { octx.beginPath(); octx.moveTo(x, 0); octx.lineTo(x, H); octx.stroke(); } for (let y = 0; y < H; y += 33) { octx.beginPath(); octx.moveTo(0, y); octx.lineTo(W, y); octx.stroke(); } }
      if (guide === "diagonal") { octx.beginPath(); octx.moveTo(0, 0); octx.lineTo(W, H); octx.moveTo(W, 0); octx.lineTo(0, H); octx.stroke(); }
      octx.restore();
    }
    function pos(e) { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * W / r.width, (e.clientY - r.top) * H / r.height]; }
    c.addEventListener("pointerdown", (e) => { drawing = true; c.setPointerCapture(e.pointerId); const [x, y] = pos(e); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + .01, y); ctx.strokeStyle = color; ctx.lineWidth = size; ctx.lineCap = "round"; ctx.stroke(); });
    c.addEventListener("pointermove", (e) => { if (!drawing) return; const [x, y] = pos(e); ctx.strokeStyle = color; ctx.lineWidth = size; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.lineTo(x, y); ctx.stroke(); });
    c.addEventListener("pointerup", () => { drawing = false; });
    guides();
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">CANVAS VẼ</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Chọn màu, cỡ cọ và lớp hướng dẫn bố cục.")}</p><div class="btl-form" style="margin-top:12px"><label>Màu<select class="btl-select" id="btlPaintColor">${["#1f2937", "#dc2626", "#ea580c", "#ca8a04", "#16a34a", "#0891b2", "#2563eb", "#7c3aed", "#db2777", "#f8fafc"].map((x) => `<option value="${x}" ${x === color ? "selected" : ""}>${x}</option>`).join("")}</select></label><label>Cỡ cọ<input class="btl-input" id="btlPaintSize" type="range" min="1" max="30" value="${size}"></label><label>Lớp hướng dẫn<select class="btl-select" id="btlPaintGuide"><option value="thirds" ${guide === "thirds" ? "selected" : ""}>Quy tắc một phần ba</option><option value="grid" ${guide === "grid" ? "selected" : ""}>Lưới ô vuông</option><option value="diagonal" ${guide === "diagonal" ? "selected" : ""}>Đường chéo</option><option value="none" ${guide === "none" ? "selected" : ""}>Không hiện</option></select></label></div><div class="btl-row" style="margin-top:10px"><button class="btl-btn small" id="btlPaintClear" type="button">Xóa tranh</button><button class="btl-btn small" id="btlPaintSave" type="button">Lưu ảnh</button></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $("#btlPaintColor").addEventListener("change", (e) => { color = e.target.value; });
    $("#btlPaintSize").addEventListener("input", (e) => { size = Number(e.target.value); });
    $("#btlPaintGuide").addEventListener("change", (e) => { guide = e.target.value; guides(); });
    $("#btlPaintClear").addEventListener("click", () => { ctx.fillStyle = "#fffdf8"; ctx.fillRect(0, 0, W, H); guides(); });
    $("#btlPaintSave").addEventListener("click", () => {
      const out = document.createElement("canvas"); out.width = W; out.height = H;
      const octx2 = out.getContext("2d"); octx2.drawImage(c, 0, 0); octx2.drawImage(over, 0, 0);
      const a = document.createElement("a"); a.href = out.toDataURL("image/png"); a.download = D.id + "-tranh.png"; a.click(); toast("Đã lưu ảnh");
    });
    labStatus("Vẽ bằng chuột hoặc cảm ứng");
  }

  function labCalendar(lab) {
    const crops = lab.crops || [];
    const months = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"];
    const pick = ui.calPick || 0;
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;overflow-x:auto"><div style="min-width:640px"><div class="btl-calendar" style="margin-bottom:4px">${months.map((m) => `<div class="btl-cal-cell" style="min-height:20px;border:0;background:transparent;text-align:center"><b>${m}</b></div>`).join("")}</div>${crops.map((c, ci) => `<div class="btl-calendar" style="margin-bottom:4px">${months.map((m, mi) => { const act = (c.months || {})[mi + 1]; return `<div class="btl-cal-cell" data-cal="${ci}:${mi + 1}" title="${esc(act || "")}"><span style="background:${esc(c.color || "var(--a)")};opacity:${act ? 1 : 0}">${esc(act || "")}</span></div>`; }).join("")}</div>`).join("")}</div></div>`;
    const c = crops[pick] || {};
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">LỊCH MÙA VỤ</div><h4 class="btl-h3">${esc(c.name || "Chọn một cây trồng")}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(c.note || lab.controlNote || "Nhấn vào ô tháng để xem hoạt động.")}</p><div class="btl-readout" style="margin-top:12px"><span>Giai đoạn</span><b>${esc(c.stage || "—")}</b></div><div class="btl-readout"><span>Thời vụ</span><b>${esc(c.season || "—")}</b></div><div class="btl-stack" style="margin-top:12px">${crops.map((x, i) => `<button class="btl-preset" type="button" data-crop="${i}" style="text-align:left">${esc(x.name)}</button>`).join("")}</div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-crop]").forEach((b) => b.addEventListener("click", () => { ui.calPick = Number(b.dataset.crop); labCalendar(lab); }));
    $$("[data-cal]").forEach((cell) => cell.addEventListener("click", () => { const [ci, m] = cell.dataset.cal.split(":"); const crop = crops[ci]; const act = (crop.months || {})[m]; toast(act ? `${crop.name} · tháng ${m}: ${act}` : `${crop.name} · tháng ${m}: không có hoạt động`); }));
  }

  function labTree(lab) {
    const nodes = lab.nodes || {};
    const cur = nodes[ui.tree] || nodes[lab.start] || {};
    const isResult = cur.result;
    const path = ui.treePath || [];
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:6px"><div class="btl-tree"><div class="btl-kicker">${isResult ? "KẾT LUẬN" : "CÂU HỎI " + (path.length + 1)}</div><div class="btl-step-panel" style="min-height:170px"><div class="btl-tree-q">${esc(cur.q || cur.title || "")}</div>${cur.body ? `<p style="margin-top:10px">${esc(cur.body)}</p>` : ""}${cur.explain ? `<div class="btl-note" style="margin-top:12px">${esc(cur.explain)}</div>` : ""}${isResult ? "" : `<div class="btl-tree-opts" style="margin-top:16px"><button class="btl-btn small primary" data-tree="${esc(cur.yes)}" type="button">${esc(cur.yesLabel || "Có")}</button><button class="btl-btn small" data-tree="${esc(cur.no)}" type="button">${esc(cur.noLabel || "Không")}</button></div>`}</div><div class="btl-row" style="margin-top:10px"><button class="btl-btn small" id="btlTreeReset" type="button">${icon("reset")} Làm lại từ đầu</button><span class="btl-small btl-muted">Đã đi ${path.length} nhánh</span></div></div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">CÂY QUYẾT ĐỊNH</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "Trả lời từng câu để đi đến kết luận.")}</p><div class="btl-readout" style="margin-top:12px"><span>Nhánh đã chọn</span><b>${path.length}</b></div><div class="btl-readout"><span>Trạng thái</span><b>${isResult ? "Có kết luận" : "Đang hỏi"}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-tree]").forEach((b) => b.addEventListener("click", () => { ui.tree = b.dataset.tree; path.push(b.dataset.tree); labTree(lab); }));
    $("#btlTreeReset").addEventListener("click", () => { ui.tree = lab.start || Object.keys(nodes)[0]; ui.treePath = []; labTree(lab); });
  }

  function labDialogue(lab) {
    const steps = lab.steps || [];
    ui.dialogueStep = clamp(ui.dialogueStep, 0, Math.max(steps.length - 1, 0));
    const s = steps[ui.dialogueStep] || {};
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:8px"><div class="btl-stack"><div class="btl-note" style="background:var(--panel-2)"><b>${esc(s.speaker || "Đối tác")}:</b> ${esc(s.line || "")}</div><div class="btl-small btl-muted">Chọn câu trả lời phù hợp:</div><div class="btl-stack">${(s.options || []).map((o, i) => `<button class="btl-opt" data-dlg="${i}" type="button">${esc(o.text)}</button>`).join("")}</div><div id="btlDlgFeedback"></div></div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">HỘI THOẠI</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "")}</p><div class="btl-readout" style="margin-top:12px"><span>Lượt</span><b>${ui.dialogueStep + 1}/${steps.length}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-dlg]").forEach((b) => b.addEventListener("click", () => {
      const o = s.options[Number(b.dataset.dlg)];
      const fb = $("#btlDlgFeedback");
      fb.innerHTML = `<div class="btl-note" style="margin-top:10px">${esc(o.feedback || (o.correct ? "Chính xác." : "Thử lại."))}</div>`;
      if (o.correct) setTimeout(() => {
        if (route.name !== "lab" || !$("#btlLabCanvas")) return;
        if (ui.dialogueStep < steps.length - 1) { ui.dialogueStep++; labDialogue(lab); } else toast("Hoàn thành hội thoại mẫu");
      }, 900);
    }));
  }

  function labBuilder(lab) {
    const sections = lab.sections || [];
    const draft = ui.builderDraft || (ui.builderDraft = {});
    const checked = ui.builderChecks || (ui.builderChecks = {});
    $("#btlLabCanvas").innerHTML = `<div style="width:100%;padding:4px" class="btl-stack">${sections.map((s, i) => `<label class="btl-form"><span style="font-size:12.5px;font-weight:600">${esc(s.title)}</span><span class="btl-small btl-muted">${esc(s.prompt || "")}</span><textarea class="btl-textarea" data-builder="${i}" placeholder="${esc(s.placeholder || "")}">${esc(draft[i] || "")}</textarea></label>`).join("")}<div class="btl-row"><button class="btl-btn small primary" id="btlBuilderSave" type="button">Lưu bản nháp</button><button class="btl-btn small" id="btlBuilderSample" type="button">Điền bản mẫu</button></div></div>`;
    $("#btlLabControls").innerHTML = `<div class="btl-kicker">STUDIO</div><h4 class="btl-h3">${esc(lab.title)}</h4><p class="btl-small btl-muted" style="margin-top:6px">${esc(lab.controlNote || "")}</p><div class="btl-stack" style="margin-top:12px">${(lab.criteria || []).map((c, i) => `<label class="btl-check"><input type="checkbox" data-crit="${i}" ${checked[i] ? "checked" : ""}>${esc(c)}</label>`).join("")}</div><div class="btl-readout" style="margin-top:12px"><span>Tiêu chí đạt</span><b>${Object.keys(checked).filter((k) => checked[k]).length}/${(lab.criteria || []).length}</b></div><p class="btl-lab-note">${esc(lab.note || "")}</p>`;
    $$("[data-builder]").forEach((t) => t.addEventListener("input", () => { draft[t.dataset.builder] = t.value; }));
    $$("[data-crit]").forEach((c) => c.addEventListener("change", () => { checked[c.dataset.crit] = c.checked; labBuilder(lab); }));
    $("#btlBuilderSave").addEventListener("click", () => { ui.savedBuilder = Object.assign({}, draft); toast("Đã lưu bản nháp trên phiên này"); });
    $("#btlBuilderSample").addEventListener("click", () => { (lab.sample || []).forEach((v, i) => { draft[i] = v; }); labBuilder(lab); toast("Đã điền bản mẫu"); });
  }

  /* ---------------- mount ---------------- */
  function mountPage() {
    applyIdentity();
    shell();
    mountThemeEvents();
    window.addEventListener("hashchange", render);
    render();
  }
  window.BTL36Studio = {
    mount(data) {
      if (!data) { console.error("BTL36Studio: thiếu BTL_DATA"); return; }
      D = data;
      D.teacher = D.teacher || { students: [], submissions: [] };
      KEY = "btl36." + D.id + ".v1";
      const q = new URLSearchParams(location.search);
      if (q.get("reset") === "1") { try { localStorage.removeItem(KEY); } catch (err) { } }
      initStore();
      if (store.theme == null) store.theme = "";
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountPage);
      else mountPage();
    },
    go
  };
})();
