/* FrontLab — application shell, routing, lesson engine and labs */
(function () {
  "use strict";

  const R = window.FrontRender;
  const DATA = window.FRONTLAB;
  const TRACKS = DATA.tracks;
  const MODULES = DATA.modules;
  const LESSONS = DATA.lessons;
  const PRACTICE = DATA.practice;
  const CHEATS = DATA.cheatsheets;
  const PROJECTS = window.FRONTLAB_PROJECTS || [];

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
  const esc = R.esc;
  const pad = R.pad;
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const normalize = (text) => String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");

  const ICON = {
    play: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4.5 15 10l-8 5.5z" fill="currentColor" stroke="none"/></svg>`,
    pause: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4.5v11M13 4.5v11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,
    replay: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 10a5.5 5.5 0 1 0 1.7-4M4.5 3.7V7H8"/></svg>`,
    prev: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12.5 4-6 6 6 6"/></svg>`,
    next: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4 6 6-6 6"/></svg>`,
    arrow: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5"/></svg>`,
    full: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 3H3v4M13 3h4v4M7 17H3v-4M13 17h4v-4"/></svg>`,
    check: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10.5 4 4 8-9"/></svg>`,
    bulb: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9ZM8 16.5h4"/></svg>`,
    copy: `<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="7" width="9" height="10" rx="2"/><path d="M13 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1"/></svg>`,
    code: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 6-4 4 4 4M13 6l4 4-4 4M11.5 3.5l-3 13"/></svg>`,
    memory: `<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="4" y="4" width="12" height="12" rx="3"/><path d="M7 2.5v3M11 2.5v3M14.5 7h3M14.5 11h3M7 17.5v-3M11 17.5v-3M2.5 7h3M2.5 11h3"/></svg>`,
    practice: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L2.2 7.7l5.4-.8z"/></svg>`,
    book: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 4.5h5.5A2.5 2.5 0 0 1 11 7v9a2.5 2.5 0 0 0-2.5-2H3zM17 4.5h-3.5A2.5 2.5 0 0 0 11 7v9a2.5 2.5 0 0 1 2.5-2H17z"/></svg>`,
    lab: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M8 2v5.2L3.4 15a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3L12 7.2V2M6 2h8M6.5 11h7"/></svg>`,
    tree: `<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="4" r="2"/><circle cx="5" cy="15" r="2"/><circle cx="15" cy="15" r="2"/><path d="M9 5.7 6 13M11 5.7l3 7.3"/></svg>`,
    close: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 4 12 12M16 4 4 16"/></svg>`
  };
  const icon = (name, cls) => `<span class="ui-icon${cls ? " " + cls : ""}">${ICON[name] || ""}</span>`;

  const trackById = {};
  TRACKS.forEach((t) => { trackById[t.id] = t; });
  const moduleById = {};
  MODULES.forEach((m) => { moduleById[m.id] = m; });

  const lessonOrder = [];
  TRACKS.forEach((track) => {
    track.modules.forEach((moduleId) => {
      const mod = moduleById[moduleId];
      if (!mod) return;
      mod.lessons.forEach((id) => {
        if (LESSONS[id]) lessonOrder.push(id);
      });
    });
  });
  const lessonPos = {};
  lessonOrder.forEach((id, index) => { lessonPos[id] = index; });

  const state = {
    track: "design",
    route: { name: "home" },
    lesson: { id: null, step: 1, mode: "stage", playing: false, speed: 1, timer: null },
    practice: { id: null, answered: null },
    lab: {
      mode: "box",
      box: { width: 320, padding: 24, border: 4, margin: 24, boxSizing: "border-box" },
      flex: { direction: "row", justify: "flex-start", align: "stretch", gap: 16, wrap: false, grow: false }
    },
    search: { open: false, selected: 0, results: [] }
  };

  const PROGRESS_KEY = "frontlab-progress-v1";
  const THEME_KEY = "frontlab-theme";
  const SPEED_KEY = "frontlab-speed";
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  let progress = loadProgress();

  function loadProgress() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
      return {
        visited: raw.visited && typeof raw.visited === "object" ? raw.visited : {},
        completed: raw.completed && typeof raw.completed === "object" ? raw.completed : {},
        practice: raw.practice && typeof raw.practice === "object" ? raw.practice : {},
        track: raw.track === "code" ? "code" : "design"
      };
    } catch (err) {
      return { visited: {}, completed: {}, practice: {}, track: "design" };
    }
  }
  function saveProgress() {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (err) { /* storage may be unavailable */ }
  }
  function isDone(id) {
    const lesson = LESSONS[id];
    if (!lesson) return false;
    return Boolean(progress.completed[id]) || Number(progress.visited[id] || 0) >= lesson.steps.length;
  }
  function trackLessons(trackId) {
    const track = trackById[trackId];
    if (!track) return [];
    return track.modules.flatMap((moduleId) => {
      const mod = moduleById[moduleId];
      return mod ? mod.lessons.map((id) => LESSONS[id]).filter(Boolean) : [];
    });
  }
  function trackDone(trackId) {
    return trackLessons(trackId).filter((lesson) => isDone(lesson.id)).length;
  }
  function totalDone() {
    return Object.keys(LESSONS).filter(isDone).length;
  }
  function totalSteps() {
    return Object.values(LESSONS).reduce((sum, lesson) => sum + (lesson.steps ? lesson.steps.length : 0), 0);
  }
  function lessonNumber(id) {
    const lesson = LESSONS[id];
    if (!lesson) return 0;
    return trackLessons(lesson.track).findIndex((item) => item.id === id) + 1;
  }
  function nextLessonOf(id) {
    const lesson = LESSONS[id];
    if (!lesson) return null;
    const list = trackLessons(lesson.track);
    return list[list.findIndex((item) => item.id === id) + 1] || null;
  }
  function firstLessonOf(trackId) {
    return trackLessons(trackId)[0] || null;
  }
  function practiceForLesson(lesson) {
    if (!lesson) return null;
    if (lesson.practiceId) return PRACTICE.find((item) => item.id === lesson.practiceId) || null;
    return PRACTICE.find((item) => item.lesson === lesson.id) || null;
  }

  function markVisited(id, step) {
    const lesson = LESSONS[id];
    if (!lesson) return;
    const current = Number(progress.visited[id] || 0);
    if (step > current) progress.visited[id] = step;
    if (step >= lesson.steps.length) progress.completed[id] = true;
    saveProgress();
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (err) { /* ignore */ }
    document.body.dataset.theme = saved === "dark" ? "dark" : "light";
  }
  function toggleTheme() {
    const next = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch (err) { /* ignore */ }
  }
  function initSpeed() {
    try {
      const saved = Number(localStorage.getItem(SPEED_KEY));
      if ([1, 1.5, 2].includes(saved)) state.lesson.speed = saved;
    } catch (err) { /* ignore */ }
  }
  function saveSpeed() {
    try { localStorage.setItem(SPEED_KEY, String(state.lesson.speed)); } catch (err) { /* ignore */ }
  }

  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("is-on");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("is-on"), 1800);
  }

  function updateChrome() {
    const done = totalDone();
    const total = Object.keys(LESSONS).length || DATA.meta.totalLessons;
    const p = total ? done / total : 0;
    const ring = $("#ringFill");
    if (ring) ring.style.strokeDashoffset = String(91.1 * (1 - p));
    const text = $("#globalProgressText");
    if (text) text.textContent = `${done}/${total}`;
    const track = trackById[state.track];
    if (track) {
      const trackList = trackLessons(track.id);
      const trackCount = trackDone(track.id);
      const fill = $("#sidebarProgressFill");
      if (fill) fill.style.width = `${trackList.length ? trackCount / trackList.length * 100 : 0}%`;
      const st = $("#sidebarProgressText");
      if (st) st.textContent = `${trackCount}/${trackList.length} bài`;
      const title = $("#sidebarTitle");
      if (title) title.textContent = track.short;
    }
    $$(".track-switch [data-track]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.track === state.track);
      button.setAttribute("aria-pressed", button.dataset.track === state.track ? "true" : "false");
    });
    const learnLink = $('.mode-link[data-mode="learn"]');
    const firstLesson = firstLessonOf(state.track);
    if (learnLink && firstLesson) learnLink.setAttribute("href", `#/learn/${firstLesson.id}/1`);
  }

  function renderSidebar() {
    const track = trackById[state.track];
    if (!track) return;
    const nav = $("#sidebarNav");
    if (!nav) return;
    nav.innerHTML = track.modules.map((moduleId) => {
      const mod = moduleById[moduleId];
      if (!mod) return "";
      const lessons = mod.lessons.map((id) => LESSONS[id]).filter(Boolean);
      return `<div class="side-module">
        <div class="side-module-head">
          <span class="side-module-num">${esc(mod.num)}</span>
          <span>${esc(mod.title)}</span>
        </div>
        ${lessons.map((lesson) => {
          const active = state.lesson.id === lesson.id;
          const done = isDone(lesson.id);
          return `<a class="side-lesson${active ? " is-active" : ""}${done ? " is-done" : ""}" href="#/learn/${lesson.id}/1">
            <span class="side-lesson-num">${done ? "✓" : pad(lessonNumber(lesson.id))}</span>
            <span class="side-lesson-body">
              <span class="side-lesson-title">${esc(lesson.shortTitle || lesson.title)}</span>
              <span class="side-lesson-meta">${lesson.steps.length} bước · ${esc(lesson.duration || "10 phút")}</span>
            </span>
          </a>`;
        }).join("")}
      </div>`;
    }).join("");
    updateChrome();
  }

  function syncSidebarActive() {
    $$("#sidebarNav .side-lesson").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const id = href.split("/")[2];
      a.classList.toggle("is-active", id === state.lesson.id);
      a.classList.toggle("is-done", isDone(id));
      const num = $(".side-lesson-num", a);
      if (num) num.textContent = isDone(id) ? "✓" : pad(lessonNumber(id));
    });
    updateChrome();
  }

  function openSidebar() {
    const sidebar = $("#sidebar");
    const scrim = $("#sidebarScrim");
    if (sidebar) sidebar.classList.add("is-open");
    if (scrim) scrim.hidden = false;
    document.body.classList.add("has-sidebar");
  }
  function closeSidebar() {
    const sidebar = $("#sidebar");
    const scrim = $("#sidebarScrim");
    if (sidebar) sidebar.classList.remove("is-open");
    if (scrim) scrim.hidden = true;
    document.body.classList.remove("has-sidebar");
  }

  function selectTrack(id, opts) {
    if (!trackById[id]) return;
    state.track = id;
    progress.track = id;
    saveProgress();
    renderSidebar();
    updateChrome();
    if (opts && opts.goHome) {
      if (location.hash !== "#/") {
        location.hash = "#/";
      } else {
        renderHome();
        requestAnimationFrame(() => {
          const target = $("#trackPath");
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }

  function parseRoute() {
    const raw = location.hash.replace(/^#\/?/, "");
    const parts = raw.split("/").filter(Boolean);
    if (!parts.length) return { name: "home" };
    if (parts[0] === "learn" && parts[1]) return { name: "lesson", id: parts[1], step: Number(parts[2]) || 1 };
    if (parts[0] === "practice" && parts[1]) return { name: "practice-detail", id: parts[1] };
    if (parts[0] === "practice") return { name: "practice" };
    if (parts[0] === "cheatsheets") return { name: "cheatsheets" };
    if (parts[0] === "videos" && parts[1]) return { name: "videos", id: parts[1] };
    if (parts[0] === "videos") return { name: "videos" };
    if (parts[0] === "projects" && parts[1]) return { name: "project-detail", id: parts[1], stage: parts[2] || "plan" };
    if (parts[0] === "projects") return { name: "projects" };
    if (parts[0] === "lab") return { name: "lab" };
    return { name: "home" };
  }

  function navigate(hash) {
    if (location.hash === hash) {
      onRoute();
      return;
    }
    location.hash = hash;
  }

  function onRoute() {
    const route = parseRoute();
    state.route = route;
    closeSidebar();
    setModeNav(route.name);
    if (route.name === "lesson") {
      const lesson = LESSONS[route.id];
      if (!lesson) {
        renderMissing();
        return;
      }
      if (state.track !== lesson.track) {
        state.track = lesson.track;
        progress.track = lesson.track;
        saveProgress();
        renderSidebar();
      }
      document.body.dataset.view = "lesson";
      if (state.lesson.id === lesson.id && $("#stageCard")) {
        applyStep(lesson, route.step, { updateHash: false, initial: false });
      } else {
        renderLesson(lesson, route.step);
      }
      updateChrome();
      return;
    }
    stopPlayer();
    document.body.dataset.view = route.name;
    if (route.name === "practice") renderPracticeList();
    else if (route.name === "practice-detail") renderPracticeDetail(route.id);
    else if (route.name === "cheatsheets") renderCheatsheets();
    else if (route.name === "videos") renderVideos(route.id);
    else if (route.name === "projects" && window.FrontProjects) window.FrontProjects.renderList();
    else if (route.name === "project-detail" && window.FrontProjects) window.FrontProjects.renderDetail(route.id, route.stage);
    else if (route.name === "lab") renderLab();
    else renderHome();
    updateChrome();
  }

  function setModeNav(name) {
    const mode = name === "lesson" ? "learn"
      : name === "practice-detail" ? "practice"
      : name === "project-detail" ? "projects"
      : name;
    $$(".mode-link").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.mode === mode);
    });
  }

  function renderMissing() {
    view.innerHTML = `<div class="home"><div class="missing-box">
      <div class="eyebrow">KHÔNG TÌM THẤY</div>
      <h1>Bài học này chưa tồn tại</h1>
      <p>Đường dẫn có thể đã cũ. Quay về lộ trình để chọn bài khác.</p>
      <a class="btn btn-primary" href="#/">Về lộ trình</a>
    </div></div>`;
  }

  const view = $("#view");

  /* ----------------------------------------------------------
     Home
     ---------------------------------------------------------- */
  function renderHome() {
    document.title = "FrontLab — Thiết kế & lập trình Frontend trực quan";
    document.body.dataset.view = "home";
    const track = trackById[state.track] || TRACKS[0];
    const first = firstLessonOf(track.id);
    const totalPractice = PRACTICE.length || 40;
    const steps = totalSteps();
    view.innerHTML = `<div class="home">
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow">PHÒNG LAB FRONTEND TRỰC QUAN</div>
          <h1>Giao diện<br><span class="hl">nhìn thấy</span><br>từng thay đổi.</h1>
          <p class="hero-sub">Không chỉ đọc CSS hay JavaScript. Mỗi bài là một giao diện được <strong>thay đổi từng bước</strong>: hộp đang giãn, lưới đang xếp, DOM đang cập nhật ngay trước mắt.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" type="button" data-action="start-track" data-track="${track.id}">${first ? `Bắt đầu ${esc(track.short)}` : "Xem lộ trình"} ${icon("arrow")}</button>
            <a class="btn btn-ghost" href="#/lab">${icon("lab")} Mở Frontend Lab</a>
          </div>
          <div class="hero-note">${icon("check")} Mô phỏng chạy trong trình duyệt. Tiến độ lưu trên máy bạn.</div>
          <div class="hero-stats">
            <div class="hero-stat"><b>${Object.keys(LESSONS).length}</b><span>bài học</span></div>
            <div class="hero-stat"><b>${steps}+</b><span>bước mô phỏng</span></div>
            <div class="hero-stat"><b>${totalPractice}</b><span>tình huống</span></div>
            <div class="hero-stat"><b>${VIDEOS.length}</b><span>video bài giải</span></div>
          </div>
        </div>
        <div class="hero-visual fe-hero">
          <div class="hv-bar">
            <span class="hv-dot"></span><span class="hv-dot"></span><span class="hv-dot"></span>
            <span class="hv-url">index.html</span>
            <span class="hv-live"><span class="dot"></span> LIVE PREVIEW</span>
          </div>
          <div class="fe-hero-body">
            <div class="fe-hero-code">${R.codeHTML(`<section class="hero">
  <h1>Frontend</h1>
  <p>Thiết kế nhìn thấy được.</p>
  <a class="btn" href="#start">Bắt đầu</a>
</section>`, 3, [3], { compact: true, lang: "html" })}</div>
            <div class="fe-hero-preview">
              <div class="fe-preview-card">
                <span class="fe-preview-eyebrow">FRONTEND LAB</span>
                <div class="fe-preview-title">Giao diện<br><em>nhìn thấy</em><br>từng thay đổi.</div>
                <div class="fe-preview-row"><span class="fe-chip">HTML</span><span class="fe-chip">CSS</span><span class="fe-chip">JS</span></div>
                <div class="fe-preview-bar"><span></span></div>
              </div>
            </div>
          </div>
          <div class="hv-chip hv-chip-a"><b>display: grid</b><span>bố cục hai chiều</span></div>
          <div class="hv-chip hv-chip-b"><b>clamp()</b><span>co giãn có giới hạn</span></div>
          <div class="hv-chip hv-chip-c"><b>DOM</b><span>cập nhật từng bước</span></div>
        </div>
      </section>

      <section class="section track-section">
        <div class="section-head">
          <div>
            <div class="eyebrow">HAI LỘ TRÌNH, MỘT GIAO DIỆN</div>
            <h2>Từ bố cục vững chắc đến tương tác thật</h2>
            <p>Chọn lộ trình để mở danh sách bài. Cả hai dùng chung Code Stage, Frontend Lab và tình huống luyện tập.</p>
          </div>
        </div>
        <div class="track-cards">
          ${TRACKS.map((t) => {
            const list = trackLessons(t.id);
            const done = trackDone(t.id);
            return `<button class="track-card tone-${t.tone}${t.id === state.track ? " is-active" : ""}" type="button" data-action="select-track" data-track="${t.id}">
              <span class="track-card-kicker">${esc(t.kicker)}</span>
              <strong>${esc(t.name)}</strong>
              <span class="track-card-blurb">${esc(t.blurb)}</span>
              <span class="track-card-foot"><span>${list.length} bài · ${done} đã học</span><span class="track-card-cta">Mở lộ trình ${icon("arrow")}</span></span>
            </button>`;
          }).join("")}
        </div>
      </section>

      <section class="section" id="trackPath">
        <div class="section-head">
          <div>
            <div class="eyebrow">${esc(track.kicker)} · ${esc(track.short)}</div>
            <h2>${esc(track.name)}</h2>
            <p>${esc(track.outcome)}</p>
          </div>
          <a class="section-link" href="#/practice">Luyện tập ${icon("arrow")}</a>
        </div>
        <div class="outline-grid">
          ${track.modules.map((moduleId) => outlineModuleHTML(moduleById[moduleId])).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <div class="eyebrow">BỐN CÁCH HỌC</div>
            <h2>Đọc ít hơn, nhìn nhiều hơn</h2>
          </div>
        </div>
        <div class="mode-grid">
          <a class="mode-card" href="${first ? `#/learn/${first.id}/1` : "#/"}" style="--mc:var(--blue);--mc-soft:var(--blue-soft)"><span class="mode-icon">${icon("code")}</span><h3>Code Stage</h3><p>Từng dòng HTML, CSS, JS sáng lên cùng giao diện thay đổi theo nhịp.</p><span class="mode-arrow">Vào bài học ${icon("arrow")}</span></a>
          <a class="mode-card" href="#/lab" style="--mc:var(--violet);--mc-soft:var(--violet-soft)"><span class="mode-icon">${icon("lab")}</span><h3>Frontend Lab</h3><p>Kéo padding, đổi flex-direction, xem hộp và lưới thay đổi tức thì.</p><span class="mode-arrow">Mở phòng lab ${icon("arrow")}</span></a>
          <a class="mode-card" href="#/practice" style="--mc:var(--coral);--mc-soft:var(--coral-soft)"><span class="mode-icon">${icon("practice")}</span><h3>Luyện tập</h3><p>Tình huống thực tế: chọn selector, sửa layout, đọc lỗi JavaScript.</p><span class="mode-arrow">Bắt đầu luyện ${icon("arrow")}</span></a>
          <a class="mode-card" href="#/cheatsheets" style="--mc:var(--green);--mc-soft:var(--green-soft)"><span class="mode-icon">${icon("book")}</span><h3>Cheatsheets</h3><p>Mẫu HTML, CSS, JavaScript, Flexbox, Grid và DOM hay dùng.</p><span class="mode-arrow">Tra nhanh ${icon("arrow")}</span></a>
        </div>
      </section>

      <section class="projects-promo">
        <div>
          <div class="eyebrow">DỰ ÁN THỰC HÀNH</div>
          <h2>Tự dựng một sản phẩm,<br>từ HTML đến MockAPI.</h2>
          <p>Ba dự án mẫu từ đơn giản đến phức tạp. Mỗi dự án có sáu chặng: phân rã bằng chia để trị, dựng HTML từ ngoài vào trong, tô CSS từng thành phần, tạo dữ liệu bằng MockAPI rồi mới viết JavaScript.</p>
          <a class="btn btn-lime" href="#/projects">Vào ba dự án ${icon("arrow")}</a>
        </div>
        <div class="pj-promo-strip">
          ${PROJECTS.map((project) => `<a class="pj-promo-item" href="#/projects/${project.id}/plan">
            <span class="pj-promo-no">${pad(project.num)}</span>
            <span><b>${esc(project.title)}</b><small>${esc(project.level)} · ${project.minutes} phút</small></span>
            <i aria-hidden="true">→</i>
          </a>`).join("")}
        </div>
      </section>

      <section class="video-promo">
        <div>
          <div class="eyebrow">THƯ VIỆN VIDEO</div>
          <h2>30 bài thực hành,<br>giải từng bước.</h2>
          <p>Tạo dự án, đặt tên chuẩn tiếng Anh, viết HTML/CSS/JavaScript rồi chạy thử — mỗi video có phân tích yêu cầu, lời giảng và mốc nội dung để tua nhanh.</p>
          <a class="btn btn-lime" href="#/videos">Xem thư viện video ${icon("arrow")}</a>
        </div>
        <div class="video-promo-strip" aria-hidden="true">
          ${["bai01", "bai02", "bai03"].map((id) => {
            const v = videoById[id];
            return v ? `<a class="video-promo-shot" href="#/videos/${v.id}"><img src="${esc(v.poster)}" alt="" loading="lazy"><span>BÀI ${pad(v.num)}</span></a>` : "";
          }).join("")}
        </div>
      </section>

      <section class="lab-promo">
        <div>
          <div class="eyebrow">PHÒNG LAB</div>
          <h2>Thấy hộp giãn ra,<br>thấy hàng đổi hướng.</h2>
          <p>Chỉnh width, padding, border và box-sizing để hiểu box model; chuyển flex-direction, justify-content và gap để thấy bố cục thay đổi ngay.</p>
          <a class="btn btn-lime" href="#/lab">Mở lab ${icon("arrow")}</a>
        </div>
        <div class="lab-promo-visual fe-promo">
          <div class="mini-box"><span class="mini-box-margin"><span class="mini-box-border"><span class="mini-box-padding"><span class="mini-box-content">content</span></span></span></span></div>
          <div class="mini-code">.card {<br>&nbsp;&nbsp;padding: 24px;<br>&nbsp;&nbsp;border: 4px solid;<br>&nbsp;&nbsp;box-sizing: border-box;<br>}</div>
        </div>
      </section>
    </div>`;
  }

  function outlineModuleHTML(mod) {
    if (!mod) return "";
    const lessons = mod.lessons.map((id) => LESSONS[id]).filter(Boolean);
    if (!lessons.length) return "";
    return `<div class="outline-module" style="--mc:var(--blue);--mc-soft:var(--blue-soft)">
      <div class="outline-module-head">
        <span class="outline-module-num">${esc(mod.num)}</span>
        <h3>${esc(mod.title)}</h3>
        <span>${lessons.length} bài</span>
      </div>
      ${lessons.map((lesson) => `<a class="outline-lesson${isDone(lesson.id) ? " is-done" : ""}" href="#/learn/${lesson.id}/1">
        <span class="outline-lesson-num">${isDone(lesson.id) ? "✓" : pad(lessonNumber(lesson.id))}</span>
        <span class="outline-lesson-title">${esc(lesson.shortTitle || lesson.title)}</span>
        <span class="outline-lesson-meta">${lesson.steps.length} bước</span>
      </a>`).join("")}
    </div>`;
  }

  /* ----------------------------------------------------------
     Lesson engine
     ---------------------------------------------------------- */
  function stepCode(lesson, step) {
    return (step && step.code) || lesson.code || "";
  }
  function stepScene(lesson, step) {
    if (step && step.visual) return step.visual;
    return lesson.visual || { kind: "vars", items: [] };
  }
  function codeLineCount(code) {
    return String(code || "").split("\n").length;
  }
  function langLabel(lang) {
    if (lang === "html") return "HTML5";
    if (lang === "css") return "CSS3";
    if (lang === "jsx") return "JSX · React";
    return "JavaScript";
  }
  function fileFor(lesson) {
    if (lesson.file) return lesson.file;
    const ext = lesson.lang === "css" ? "css" : lesson.lang === "html" ? "html" : lesson.lang === "jsx" ? "jsx" : "js";
    return `${lesson.id}.${ext}`;
  }
  const CONTEXTS = window.FRONTLAB_CONTEXT || {};
  function contextHTML(lesson) {
    const entry = CONTEXTS[lesson.id];
    if (!entry || !entry.blocks || !entry.blocks.length) return "";
    const files = entry.blocks.map((b) => b.file).join(" + ");
    const label = entry.blocks.some((b) => b.lang === "css") ? "MÃ ĐI KÈM" : "HTML ĐI KÈM";
    return `<details class="code-context" open>
      <summary class="code-context-head">
        <span class="code-context-kicker">${icon("code")} ${label}</span>
        <span class="code-context-files">${esc(files)}</span>
        <span class="code-context-caret">${icon("next")}</span>
      </summary>
      <div class="code-context-body">
        ${entry.note ? `<p class="code-context-note">${esc(entry.note)}</p>` : ""}
        ${entry.blocks.map((block) => `<div class="code-context-block">
          <div class="code-context-file"><span>${esc(block.file)}</span><span>${esc(langLabel(block.lang))}</span></div>
          <div class="code-context-scroll">${R.codeHTML(block.code, 0, [], { lang: block.lang, compact: true })}</div>
        </div>`).join("")}
      </div>
    </details>`;
  }
  function sceneMetric(scene) {
    if (!scene) return "—";
    const kind = scene.kind;
    if (kind === "array") return `${(scene.values || []).length} ô`;
    if (kind === "list") return `${(scene.nodes || []).length} node`;
    if (kind === "tree") return `${(scene.nodes || []).length} node`;
    if (kind === "graph") return `${(scene.nodes || []).length} đỉnh`;
    if (kind === "recursion") return `${(scene.frames || []).length} frame`;
    if (kind === "stack") return `${(scene.items || []).length} phần tử`;
    if (kind === "queue") return `${(scene.items || []).length} phần tử`;
    if (kind === "memory") return `${(scene.stack || []).length + (scene.heap || []).length} ô`;
    if (kind === "vars") return `${(scene.items || []).length} biến`;
    if (kind === "table") return `${(scene.rows || []).length} dòng`;
    if (kind === "flow") return `${(scene.steps || []).length} bước`;
    if (kind === "box") return "box model";
    if (kind === "layout") return scene.type === "grid" ? "grid" : "flex";
    if (kind === "dom") return `${(scene.items || []).length} node`;
    if (kind === "complexity") return "tăng trưởng";
    return "—";
  }
  function outputMetric(step) {
    const lines = String((step && step.output) || "").trim().split("\n").filter(Boolean);
    if (!lines.length) return "—";
    const last = lines[lines.length - 1];
    return last.length > 22 ? `${last.slice(0, 21)}…` : last;
  }
  function metricsHTML(lesson, step, scene) {
    const line = step.line || 1;
    const code = stepCode(lesson, step);
    const watch = step.watch || [];
    return `<div class="stage-metrics">
      <div class="metric" style="--metric-color:var(--blue)"><div class="metric-label">Dòng đang chạy</div><div class="metric-value">${pad(line)} <small>/ ${pad(codeLineCount(code))}</small></div></div>
      <div class="metric" style="--metric-color:var(--violet)"><div class="metric-label">Thông số đang xem</div><div class="metric-value">${watch.length || 0}</div></div>
      <div class="metric" style="--metric-color:var(--coral)"><div class="metric-label">Giao diện</div><div class="metric-value">${esc(sceneMetric(scene))}</div></div>
      <div class="metric" style="--metric-color:var(--green)"><div class="metric-label">Output</div><div class="metric-value is-text">${esc(outputMetric(step))}</div></div>
    </div>`;
  }
  function traceHTML(step) {
    const watch = step.watch || [];
    return `<div class="trace-strip" id="traceStrip">
      <span class="trace-line">DÒNG ${pad(step.line || 1)}</span>
      <div class="watch-list">
        ${watch.length ? watch.map((v) => `<span class="watch-chip${v.changed ? " is-changed" : ""}"><b>${esc(v.name)}</b><span>${esc(v.value)}</span>${v.type ? `<small>${esc(v.type)}</small>` : ""}</span>`).join("") : `<span class="watch-empty">Chưa có biến trong phạm vi này</span>`}
      </div>
    </div>`;
  }
  function consoleHTML(step) {
    return `<div class="console-wrap" id="consoleWrap">
      <div class="console-head"><span>console / output</span><span>MÔ PHỎNG · không chạy mã thật</span></div>
      <pre class="console">${step.output ? esc(step.output) : "<span class=\"console-empty\">chưa có output</span>"}</pre>
    </div>`;
  }
  function stageHTML(lesson, step) {
    const code = stepCode(lesson, step);
    const scene = stepScene(lesson, step);
    const file = fileFor(lesson);
    const life = lesson.life || { title: "Một tình huống đời thường", text: "Mỗi khái niệm đều có một phiên bản quen thuộc ngoài đời." };
    return `<div class="stage-card" id="stageCard">
      <div class="stage-top">
        <div class="stage-title"><span class="live-dot"></span><span>CODE STAGE</span><span>${esc(file)} · ${codeLineCount(code)} dòng</span></div>
        <div class="stage-actions">
          <button class="stage-icon-btn" type="button" data-action="copy-code" title="Copy code">${icon("copy")}<span>Copy</span></button>
          <button class="stage-icon-btn" type="button" data-action="fullscreen" title="Xem toàn màn hình">${icon("full")}<span>Toàn màn hình</span></button>
        </div>
      </div>
      <div class="stage-life">
        <span class="stage-life-icon">${ICON[life.icon] ? icon(life.icon) : icon("bulb")}</span>
        <div class="stage-life-copy"><b>GÓC ĐỜI THƯỜNG · ${esc(life.title)}</b><p>${esc(life.text)}</p></div>
      </div>
      ${metricsHTML(lesson, step, scene)}
      <div class="stage-workbench">
        <div class="code-panel">
          ${contextHTML(lesson)}
          <div class="code-panel-head"><span class="code-file">${esc(file)}</span><span class="code-lang">${esc(langLabel(lesson.lang))}</span></div>
          <div class="code-scroll" id="codeScroll">${R.codeHTML(code, step.line || 1, step.mark || [], { lang: lesson.lang })}</div>
        </div>
        <div class="scene-panel">
          <div class="scene-panel-head"><span>GIAO DIỆN &amp; DỮ LIỆU</span><span id="sceneKind">${esc(scene.kind || "vars").toUpperCase()}</span></div>
          <div class="scene-wrap" id="sceneWrap">${R.renderScene(scene)}</div>
        </div>
      </div>
      ${traceHTML(step)}
      ${consoleHTML(step)}
      <div class="stage-legend">
        <div class="legend">
          <span class="legend-item"><i class="legend-swatch" style="--sw:var(--blue)"></i>Dòng đang chạy</span>
          <span class="legend-item"><i class="legend-swatch" style="--sw:var(--coral)"></i>Giá trị vừa đổi</span>
          <span class="legend-item"><i class="legend-swatch" style="--sw:var(--green)"></i>Đã xử lý</span>
        </div>
        <span class="stage-hint">← → chuyển bước · Space phát · R phát lại</span>
      </div>
      <div class="stage-player">
        <div class="player-bar">
          <button class="play-btn" id="playBtn" type="button" data-action="toggle-play" aria-label="Phát tự động các bước">${icon("play")}</button>
          <button class="player-mini" type="button" data-action="replay" title="Phát lại">${icon("replay")}</button>
          <button class="player-mini" type="button" data-action="prev-step" aria-label="Bước trước">${icon("prev")}</button>
          <div class="player-progress"><div class="player-fill" id="playerFill"></div></div>
          <span class="player-step-text" id="playerStepText">BƯỚC 01 / ${pad(lesson.steps.length)}</span>
          <span class="player-pct" id="playerPct">0%</span>
          <button class="player-mini" type="button" data-action="next-step" aria-label="Bước sau">${icon("next")}</button>
          <button class="speed-btn" type="button" data-action="cycle-speed" title="Tốc độ phát">${state.lesson.speed}×</button>
        </div>
        <div class="timeline" id="timeline">
          ${lesson.steps.map((s, i) => `<button class="tl-step${i === 0 ? " is-active" : ""}" type="button" data-step="${i + 1}" title="Bước ${i + 1}: ${esc(s.title)}">
            <span class="tl-step-bar"><span></span></span>
            <span class="tl-step-label">${pad(i + 1)} · ${esc(s.short || s.title)}</span>
          </button>`).join("")}
        </div>
      </div>
    </div>`;
  }

  function stepPanelHTML(lesson, index) {
    const step = lesson.steps[index - 1];
    const isFirst = index === 1;
    const isLast = index === lesson.steps.length;
    const toneClass = step.tone === "warn" ? " type-warn" : step.tone === "final" ? " type-final" : "";
    const practice = practiceForLesson(lesson);
    const next = nextLessonOf(lesson.id);
    const nextHref = practice ? `#/practice/${practice.id}` : next ? `#/learn/${next.id}/1` : "#/practice";
    const nextLabel = practice ? "Luyện tình huống" : next ? `Sang bài: ${next.shortTitle || next.title}` : "Luyện tập";
    const note = step.note ? `<div class="callout"><div class="callout-head">${icon("bulb")} Điểm cần nhớ</div><p>${step.note}</p></div>` : "";
    const changes = step.changes && step.changes.length ? `<div class="step-section">
      <div class="step-section-title">Điều gì thay đổi</div>
      <div class="change-list">${step.changes.map((c) => `<div class="change-item">${icon("check")}<span>${esc(c)}</span></div>`).join("")}</div>
    </div>` : "";
    const complete = isLast ? `<div class="complete-banner">
      <h4>Bạn đã đi hết bài</h4>
      <p>Tiến độ đã được lưu. Làm một tình huống luyện tập để kiểm tra lại.</p>
      <a class="btn btn-sm btn-lime" href="${nextHref}">${nextLabel} ${icon("arrow")}</a>
    </div>` : "";
    return `<div class="step-panel-scroll">
      <div class="step-meta"><span class="step-counter">BƯỚC ${pad(index)} / ${pad(lesson.steps.length)}</span><span class="step-type${toneClass}">${esc(step.type || "BÀI HỌC")}</span></div>
      <h2 class="step-title">${esc(step.title)}</h2>
      <div class="step-body">${step.body}</div>
      ${note}
      ${changes}
      <div class="learn-box">
        <div class="step-section-title">Sau bài này, bạn nắm được</div>
        <div class="learn-list">${(lesson.learn || []).map((item) => `<div class="learn-item">${esc(item)}</div>`).join("")}</div>
      </div>
      ${complete}
    </div>
    <div class="step-nav">
      <button class="btn btn-ghost" type="button" data-action="prev-step" ${isFirst ? "disabled" : ""}>${icon("prev")} Trước</button>
      <button class="btn btn-primary" type="button" data-action="next-step" ${isLast ? "disabled" : ""}>Tiếp ${icon("next")}</button>
    </div>
    <div class="kbd-hints"><span><kbd>←</kbd><kbd>→</kbd> chuyển bước</span><span><kbd>Space</kbd> phát</span><span><kbd>R</kbd> lại</span></div>`;
  }

  function renderLesson(lesson, requestedStep) {
    stopPlayer();
    if (window.CssPlay) window.CssPlay.cleanup();
    state.lesson.id = lesson.id;
    state.lesson.step = clamp(Number(requestedStep) || 1, 1, lesson.steps.length);
    state.lesson.playing = false;
    document.title = `${lesson.title} — FrontLab`;
    document.body.dataset.view = "lesson";
    const track = trackById[lesson.track];
    const mod = moduleById[lesson.module];
    const index = state.lesson.step;
    const step = lesson.steps[index - 1];
    const next = nextLessonOf(lesson.id);
    const practice = practiceForLesson(lesson);
    const nextHref = practice ? `#/practice/${practice.id}` : next ? `#/learn/${next.id}/1` : "#/practice";
    const nextLabel = practice ? "Luyện tập" : next ? "Bài tiếp" : "Luyện tập";
    const hasPlay = hasPlayground(lesson);
    state.lesson.mode = "stage";
    view.innerHTML = `<div class="lesson-page">
      <div class="lesson-head">
        <div>
          <div class="lesson-breadcrumb"><a href="#/">FrontLab</a><span class="sep">/</span><span>${esc(track.short)}</span><span class="sep">/</span><span>${esc(mod.title)}</span><span class="sep">/</span><span>${esc(lesson.shortTitle || lesson.title)}</span></div>
          <h1 class="lesson-title">${esc(lesson.title)}</h1>
          <p class="lesson-sub">${esc(lesson.subtitle || lesson.blurb)}</p>
          <div class="lesson-badges">
            <span class="pill pill-blue">${esc(mod.num)} · ${esc(mod.title)}</span>
            <span class="pill">${esc(lesson.level || "Cơ bản")}</span>
            <span class="pill">${esc(lesson.duration || "10 phút")}</span>
            <span class="pill">${lesson.steps.length} bước</span>
            <span class="pill">${esc(lesson.track === "design" ? "UI & CSS" : "JavaScript")}</span>
          </div>
        </div>
        <div class="lesson-head-right">
          <a class="btn btn-ghost btn-sm" href="#/">Về lộ trình</a>
          <a class="btn btn-primary btn-sm" href="${nextHref}">${nextLabel} ${icon("arrow")}</a>
        </div>
      </div>
      ${hasPlay ? `<div class="lesson-modes" role="group" aria-label="Cách xem bài học">
        <button class="lesson-mode is-on" type="button" data-action="set-lesson-mode" data-mode="stage" aria-pressed="true"><b>Mô phỏng từng bước</b><small>Theo dõi code và giao diện đổi theo từng bước</small></button>
        <button class="lesson-mode" type="button" data-action="set-lesson-mode" data-mode="play" aria-pressed="false"><b>CSS Playground</b><small>Tự do đổi giá trị trên toàn bộ mã của bài</small></button>
      </div>` : ""}
      <div class="lesson-layout" id="lessonStageView">
        <div class="lesson-main">
          ${stageHTML(lesson, step)}
        </div>
        <aside class="step-panel" id="stepPanel">${stepPanelHTML(lesson, index)}</aside>
      </div>
      ${hasPlay ? '<div class="lesson-playview" id="lessonPlayView" hidden><div id="cssPlayHost" class="csp-host"></div></div>' : ""}
    </div>`;
    renderSidebar();
    applyStep(lesson, index, { initial: true });
  }

  function hasPlayground(lesson) {
    return !!(lesson && lesson.lang === "css" && window.CssPlay && window.CSS_PLAYGROUND && window.CSS_PLAYGROUND[lesson.id]);
  }

  function ensurePlayground() {
    const host = $("#cssPlayHost");
    const lesson = LESSONS[state.lesson.id];
    if (!host || !lesson || host.dataset.mounted === "1" || !hasPlayground(lesson)) return;
    window.CssPlay.mount(host, lesson, window.CSS_PLAYGROUND[lesson.id]);
    host.dataset.mounted = "1";
  }

  function setLessonMode(mode) {
    if (state.route.name !== "lesson") return;
    const lesson = LESSONS[state.lesson.id];
    const play = mode === "play" && hasPlayground(lesson);
    state.lesson.mode = play ? "play" : "stage";
    const stageView = $("#lessonStageView");
    const playView = $("#lessonPlayView");
    if (!stageView || !playView) return;
    stageView.hidden = play;
    playView.hidden = !play;
    $$("[data-action=\"set-lesson-mode\"]").forEach((button) => {
      const on = button.dataset.mode === state.lesson.mode;
      button.classList.toggle("is-on", on);
      button.setAttribute("aria-pressed", String(on));
    });
    if (play) {
      stopPlayer();
      ensurePlayground();
    }
  }

  function applyStep(lesson, requested, opts) {
    const index = clamp(Number(requested) || 1, 1, lesson.steps.length);
    state.lesson.id = lesson.id;
    state.lesson.step = index;
    const step = lesson.steps[index - 1];
    const code = stepCode(lesson, step);
    const scene = stepScene(lesson, step);
    const codeScroll = $("#codeScroll");
    if (codeScroll) {
      const top = codeScroll.scrollTop;
      codeScroll.innerHTML = R.codeHTML(code, step.line || 1, step.mark || [], { lang: lesson.lang });
      codeScroll.scrollTop = top;
    }
    const sceneWrap = $("#sceneWrap");
    if (sceneWrap) {
      sceneWrap.innerHTML = R.renderScene(scene);
      const kind = $("#sceneKind");
      if (kind) kind.textContent = String(scene.kind || "vars").toUpperCase();
    }
    const metrics = $(".stage-metrics");
    if (metrics) metrics.outerHTML = metricsHTML(lesson, step, scene);
    const trace = $("#traceStrip");
    if (trace) trace.outerHTML = traceHTML(step);
    const consoleEl = $("#consoleWrap");
    if (consoleEl) consoleEl.outerHTML = consoleHTML(step);
    const panel = $("#stepPanel");
    if (panel) panel.innerHTML = stepPanelHTML(lesson, index);
    $$(".tl-step").forEach((el, i) => {
      el.classList.toggle("is-active", i === index - 1);
      el.classList.toggle("is-done", i < index - 1);
    });
    const fill = $("#playerFill");
    if (fill) fill.style.width = `${(index / lesson.steps.length) * 100}%`;
    const stepText = $("#playerStepText");
    if (stepText) stepText.textContent = `BƯỚC ${pad(index)} / ${pad(lesson.steps.length)}`;
    const pct = $("#playerPct");
    if (pct) pct.textContent = `${Math.round(index / lesson.steps.length * 100)}%`;
    const speedBtn = $(".speed-btn");
    if (speedBtn) speedBtn.textContent = `${state.lesson.speed}×`;
    markVisited(lesson.id, index);
    syncSidebarActive();
    if (!opts || opts.initial !== true) {
      const line = $(".code-line.is-active");
      if (line && codeScroll) {
        const top = line.offsetTop - codeScroll.clientHeight / 2 + line.offsetHeight / 2;
        codeScroll.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }
    if (state.lesson.playing) restartAutoTimer();
  }

  function goToStep(index) {
    const lesson = LESSONS[state.lesson.id];
    if (!lesson) return;
    const target = clamp(index, 1, lesson.steps.length);
    const hash = `#/learn/${lesson.id}/${target}`;
    if (location.hash === hash) {
      applyStep(lesson, target);
    } else {
      location.hash = hash;
    }
  }

  function setPausedUI() {
    const btn = $("#playBtn");
    if (!btn) return;
    btn.innerHTML = icon(state.lesson.playing ? "pause" : "play");
    btn.setAttribute("aria-label", state.lesson.playing ? "Tạm dừng" : "Phát tự động các bước");
  }
  function stopPlayer() {
    if (state.lesson.timer) clearTimeout(state.lesson.timer);
    state.lesson.timer = null;
    state.lesson.playing = false;
    setPausedUI();
  }
  function restartAutoTimer() {
    if (state.lesson.timer) clearTimeout(state.lesson.timer);
    state.lesson.timer = null;
    if (!state.lesson.playing) return;
    const lesson = LESSONS[state.lesson.id];
    if (!lesson) return;
    state.lesson.timer = setTimeout(() => {
      if (state.lesson.step >= lesson.steps.length) {
        stopPlayer();
        return;
      }
      goToStep(state.lesson.step + 1);
    }, (DATA.meta.autoplayMs || 7200) / state.lesson.speed);
  }
  function togglePlayer() {
    const lesson = LESSONS[state.lesson.id];
    if (!lesson) return;
    if (state.lesson.playing) {
      stopPlayer();
      return;
    }
    if (state.lesson.step >= lesson.steps.length) goToStep(1);
    state.lesson.playing = true;
    setPausedUI();
    restartAutoTimer();
  }
  function replayLesson() {
    stopPlayer();
    goToStep(1);
  }
  function cycleSpeed() {
    const options = [1, 1.5, 2];
    const at = options.indexOf(state.lesson.speed);
    state.lesson.speed = options[(at + 1) % options.length];
    saveSpeed();
    const btn = $(".speed-btn");
    if (btn) btn.textContent = `${state.lesson.speed}×`;
    if (state.lesson.playing) restartAutoTimer();
  }
  function toggleFullscreen() {
    const card = $("#stageCard");
    if (!card) return;
    if (!document.fullscreenElement) {
      if (card.requestFullscreen) card.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
  function copyCode() {
    const lesson = LESSONS[state.lesson.id];
    if (!lesson) return;
    const step = lesson.steps[state.lesson.step - 1];
    const code = stepCode(lesson, step);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => toast("Đã copy code")).catch(() => toast("Không copy được"));
    } else {
      toast("Trình duyệt không hỗ trợ copy");
    }
  }

  /* ----------------------------------------------------------
     Practice
     ---------------------------------------------------------- */
  function renderPracticeList() {
    document.title = "Luyện tập — FrontLab";
    document.body.dataset.view = "practice";
    const answered = Object.keys(progress.practice || {}).length;
    view.innerHTML = `<div class="mode-page">
      <div class="mode-head">
        <div>
          <div class="eyebrow">TÌNH HUỐNG THỰC TẾ</div>
          <h1>Chọn selector, sửa layout, đọc lỗi</h1>
          <p>Mỗi tình huống có một sơ đồ nhỏ để bạn nhìn thấy giao diện hoặc dữ liệu trước khi trả lời. Đúng sai đều có lời giải thích ngay.</p>
        </div>
        <div class="mode-head-right"><span class="pill pill-green">${answered}/${PRACTICE.length} đã làm</span></div>
      </div>
      ${TRACKS.map((track) => {
        const list = PRACTICE.filter((p) => p.track === track.id);
        if (!list.length) return "";
        return `<section class="practice-track">
          <div class="section-head compact">
            <div><div class="eyebrow">${esc(track.kicker)}</div><h2>${esc(track.short)}</h2></div>
            <span class="pill">${list.length} tình huống</span>
          </div>
          <div class="practice-grid">${list.map(practiceCardHTML).join("")}</div>
        </section>`;
      }).join("")}
    </div>`;
  }

  function practiceCardHTML(p) {
    const saved = progress.practice[p.id];
    const stateLabel = saved ? (saved.correct ? `<span class="pill pill-green">Đã đúng</span>` : `<span class="pill pill-yellow">Đã thử</span>`) : "";
    return `<a class="practice-card" href="#/practice/${p.id}">
      <div class="pc-top"><span class="pc-kicker">${esc(p.track === "design" ? "UI & CSS" : "JAVASCRIPT")}</span>${stateLabel}</div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.context)}</p>
      <div class="pc-scene">${R.renderScene(p.visual, { compact: true })}</div>
      <div class="pc-foot"><span>${esc(p.skill || "Đọc hiểu")}</span><span>Làm bài ${icon("arrow")}</span></div>
    </a>`;
  }

  function renderPracticeDetail(id) {
    const p = PRACTICE.find((item) => item.id === id);
    if (!p) {
      renderMissing();
      return;
    }
    state.practice.id = id;
    const saved = progress.practice[id];
    state.practice.answered = saved ? saved.selected : null;
    document.title = `${p.title} — Luyện tập FrontLab`;
    document.body.dataset.view = "practice-detail";
    const track = trackById[p.track];
    const list = PRACTICE.filter((item) => item.track === p.track);
    const at = list.findIndex((item) => item.id === id);
    const next = list[at + 1] || list[0];
    const lesson = p.lesson ? LESSONS[p.lesson] : null;
    const correct = saved ? saved.correct : null;
    view.innerHTML = `<div class="mode-page">
      <div class="practice-layout">
        <div class="practice-main">
          <div class="practice-card is-detail">
            <div class="pc-top"><span class="pc-kicker">${esc(track.short)} · TÌNH HUỐNG ${pad(at + 1)}</span><span class="pill">${esc(p.skill || "Đọc hiểu")}</span></div>
            <h1>${esc(p.title)}</h1>
            <p class="practice-context">${esc(p.context)}</p>
            <div class="practice-scene">${R.renderScene(p.visual)}</div>
            <div class="practice-question"><span>CHỌN ĐÁP ÁN</span><h2>${esc(p.question)}</h2></div>
            <div class="option-list" id="optionList">
              ${p.options.map((option, i) => {
                const isAnswer = i === p.answer;
                const picked = saved && saved.selected === i;
                const cls = saved ? (isAnswer ? " is-correct" : picked ? " is-wrong" : " is-muted") : "";
                return `<button class="option-btn${cls}" type="button" data-action="answer-practice" data-option="${i}" ${saved ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${esc(option)}</span></button>`;
              }).join("")}
            </div>
            <div class="practice-result${saved ? " is-visible" : ""}" id="practiceResult">
              <div class="result-mark ${correct ? "is-ok" : "is-bad"}">${correct ? icon("check") : "!"}</div>
              <div><b>${correct ? "Chính xác" : "Chưa đúng"}</b><p>${esc(p.explain)}</p></div>
            </div>
            <div class="practice-actions">
              ${lesson ? `<a class="btn btn-ghost" href="#/learn/${lesson.id}/1">${icon("code")} Ôn lại bài</a>` : ""}
              <a class="btn btn-primary" href="#/practice/${next.id}">Tình huống tiếp ${icon("arrow")}</a>
            </div>
          </div>
        </div>
        <aside class="practice-side">
          <div class="side-card">
            <h3>TIẾN ĐỘ LUYỆN TẬP</h3>
            <div class="practice-progress">${list.map((item) => `<span class="${progress.practice[item.id] ? (progress.practice[item.id].correct ? "is-ok" : "is-try") : ""}${item.id === id ? " is-current" : ""}"></span>`).join("")}</div>
            <p style="margin-top:10px">${Object.keys(progress.practice).length}/${PRACTICE.length} tình huống đã trả lời.</p>
          </div>
          <div class="side-card">
            <h3>TRONG LỘ TRÌNH NÀY</h3>
            <div class="side-practice-list">${list.map((item) => `<a class="${item.id === id ? "is-active" : ""}" href="#/practice/${item.id}"><span>${pad(list.indexOf(item) + 1)}</span>${esc(item.title)}</a>`).join("")}</div>
          </div>
        </aside>
      </div>
    </div>`;
  }

  function answerPractice(optionIndex) {
    const p = PRACTICE.find((item) => item.id === state.practice.id);
    if (!p || progress.practice[p.id]) return;
    const correct = Number(optionIndex) === Number(p.answer);
    progress.practice[p.id] = { selected: Number(optionIndex), correct };
    saveProgress();
    renderPracticeDetail(p.id);
    toast(correct ? "Chính xác" : "Đã ghi nhận, xem lời giải nhé");
  }

  /* ----------------------------------------------------------
     Cheatsheets
     ---------------------------------------------------------- */
  function cheatCodeHTML(code, lang) {
    return String(code || "").split("\n").map((line) => R.highlightLine(line, lang)).join("\n");
  }
  function renderCheatsheets() {
    document.title = "Cheatsheets — FrontLab";
    document.body.dataset.view = "cheatsheets";
    view.innerHTML = `<div class="mode-page">
      <div class="mode-head">
        <div>
          <div class="eyebrow">TRA NHANH</div>
          <h1>Cú pháp và mẫu code</h1>
          <p>Những mảnh code nhỏ, đúng ngay khi cần: HTML ngữ nghĩa, CSS layout, JavaScript, DOM và component.</p>
        </div>
        <div class="mode-head-right"><span class="pill">${CHEATS.length} thẻ</span></div>
      </div>
      ${TRACKS.map((track) => {
        const cards = CHEATS.filter((card) => card.track === track.id);
        if (!cards.length) return "";
        return `<section class="cheat-track">
          <div class="section-head compact"><div><div class="eyebrow">${esc(track.kicker)}</div><h2>${esc(track.short)}</h2></div><span class="pill">${cards.length} thẻ</span></div>
          <div class="cheat-grid">${cards.map(cheatCardHTML).join("")}</div>
        </section>`;
      }).join("")}
    </div>`;
  }
  function cheatCardHTML(card) {
    return `<article class="cheat-card">
      <div class="cheat-card-head"><span class="cheat-icon" style="--cc:var(--${card.tone || "blue"});--cc-soft:var(--${card.tone || "blue"}-soft)">${icon(card.icon || "book")}</span><div><h3>${esc(card.title)}</h3><p>${esc(card.subtitle || "")}</p></div></div>
      ${(card.items || []).map((item) => `<div class="cheat-item">
        <div class="cheat-label">${esc(item.label)}</div>
        ${item.code ? `<pre class="cheat-code"><code>${cheatCodeHTML(item.code, card.lang)}</code></pre>` : ""}
        ${item.note ? `<p>${esc(item.note)}</p>` : ""}
      </div>`).join("")}
    </article>`;
  }

  /* ----------------------------------------------------------
     Lab
     ---------------------------------------------------------- */
  function boxMetrics() {
    const b = state.lab.box;
    const content = b.boxSizing === "border-box"
      ? Math.max(0, b.width - b.padding * 2 - b.border * 2)
      : b.width;
    return { content, total: content + b.padding * 2 + b.border * 2, outer: content + b.padding * 2 + b.border * 2 + b.margin * 2 };
  }
  function boxCSS() {
    const b = state.lab.box;
    return `.card {
  width: ${b.width}px;
  padding: ${b.padding}px;
  border: ${b.border}px solid #0f9f8a;
  margin: ${b.margin}px;
  box-sizing: ${b.boxSizing};
}`;
  }
  function boxPreview() {
    const b = state.lab.box;
    const m = boxMetrics();
    return `<div class="bm-stage">
      <div class="bm-margin" style="padding:${b.margin}px">
        <div class="bm-border" style="padding:${b.border}px">
          <div class="bm-padding" style="padding:${b.padding}px">
            <div class="bm-content" style="width:${m.content}px">content<small>${m.content}px</small></div>
          </div>
        </div>
      </div>
      <div class="bm-total">Chiều rộng hiển thị: <b>${m.total}px</b>${b.margin ? ` · cả margin: <b>${m.outer}px</b>` : ""}</div>
    </div>`;
  }
  function flexCSS() {
    const f = state.lab.flex;
    return `.toolbar {
  display: flex;
  flex-direction: ${f.direction};
  justify-content: ${f.justify};
  align-items: ${f.align};
  gap: ${f.gap}px;${f.wrap ? "\n  flex-wrap: wrap;" : ""}
}
.toolbar > * {${f.grow ? "\n  flex: 1;" : ""}
}`;
  }
  function flexPreview() {
    const f = state.lab.flex;
    const items = ["Logo", "Khóa học", "Blog", "Menu"];
    return `<div class="flex-stage"><div class="flex-preview" style="display:flex;flex-direction:${f.direction};justify-content:${f.justify};align-items:${f.align};gap:${f.gap}px;${f.wrap ? "flex-wrap:wrap;" : ""}">
      ${items.map((label, i) => `<span class="flex-preview-item" style="${f.grow ? "flex:1;" : ""}">${esc(label)}${i === 2 ? "<small>giữa</small>" : ""}</span>`).join("")}
    </div></div>`;
  }
  function renderLab() {
    document.title = "Frontend Lab — FrontLab";
    document.body.dataset.view = "lab";
    const mode = state.lab.mode;
    view.innerHTML = `<div class="mode-page">
      <div class="mode-head">
        <div>
          <div class="eyebrow">PHÒNG LAB TƯƠNG TÁC</div>
          <h1>Chạm vào CSS, thấy giao diện đổi</h1>
          <p>Kéo các thông số để xem hộp và hàng phần tử thay đổi ngay. CSS sinh ra ở dưới có thể copy vào dự án.</p>
        </div>
        <div class="mode-head-right"><span class="pill pill-green">${mode === "box" ? "BOX MODEL" : "FLEXBOX"}</span></div>
      </div>
      <div class="lab-tabs"><button class="${mode === "box" ? "is-active" : ""}" type="button" data-action="lab-mode" data-mode="box">Box model</button><button class="${mode === "flex" ? "is-active" : ""}" type="button" data-action="lab-mode" data-mode="flex">Flexbox</button></div>
      ${mode === "box" ? boxLabHTML() : flexLabHTML()}
    </div>`;
  }
  function boxLabHTML() {
    const b = state.lab.box;
    const m = boxMetrics();
    return `<div class="lab-layout">
      <div class="lab-main">
        <div class="lab-stage">
          <div class="lab-stage-head"><div><h2>Box model</h2><p>Padding, border, margin và box-sizing</p></div><span class="lab-live is-on"><span class="dot"></span>TRỰC TIẾP</span></div>
          <div id="labPreview">${boxPreview()}</div>
          <div class="lab-controls-grid">
            <label class="lab-control"><span>width <b>${b.width}px</b></span><input type="range" min="160" max="480" step="8" value="${b.width}" data-lab-range="width"></label>
            <label class="lab-control"><span>padding <b>${b.padding}px</b></span><input type="range" min="0" max="48" step="4" value="${b.padding}" data-lab-range="padding"></label>
            <label class="lab-control"><span>border <b>${b.border}px</b></span><input type="range" min="0" max="12" step="1" value="${b.border}" data-lab-range="border"></label>
            <label class="lab-control"><span>margin <b>${b.margin}px</b></span><input type="range" min="0" max="48" step="4" value="${b.margin}" data-lab-range="margin"></label>
            <label class="lab-control lab-control-select"><span>box-sizing</span><select data-lab-select="boxSizing"><option value="border-box"${b.boxSizing === "border-box" ? " selected" : ""}>border-box</option><option value="content-box"${b.boxSizing === "content-box" ? " selected" : ""}>content-box</option></select></label>
          </div>
        </div>
        <div class="lab-code"><div class="lab-code-head">CSS đang tạo</div><pre id="labCodeBody">${cheatCodeHTML(boxCSS(), "css")}</pre></div>
      </div>
      <aside class="lab-side">
        <div class="side-card" id="labMetrics"><h3>ĐO LƯỜNG</h3><div class="lab-metrics"><div><b>${m.content}</b><span>content</span></div><div><b>${m.total}</b><span>hiển thị</span></div></div><p style="margin-top:10px">Với <code>content-box</code>, width chỉ là content. Với <code>border-box</code>, width đã gồm padding và border.</p></div>
        <div class="side-card"><h3>THỬ THÁCH</h3><p>Đặt width 320px, padding 24px, border 4px. Chuyển box-sizing và so sánh chiều rộng hiển thị. Con số nào thay đổi?</p></div>
      </aside>
    </div>`;
  }
  function flexLabHTML() {
    const f = state.lab.flex;
    return `<div class="lab-layout">
      <div class="lab-main">
        <div class="lab-stage">
          <div class="lab-stage-head"><div><h2>Flexbox</h2><p>Trục chính, trục phụ, gap và wrap</p></div><span class="lab-live is-on"><span class="dot"></span>TRỰC TIẾP</span></div>
          <div id="labPreview">${flexPreview()}</div>
          <div class="lab-controls-grid">
            <label class="lab-control lab-control-select"><span>flex-direction</span><select data-lab-select="direction"><option value="row"${f.direction === "row" ? " selected" : ""}>row</option><option value="column"${f.direction === "column" ? " selected" : ""}>column</option></select></label>
            <label class="lab-control lab-control-select"><span>justify-content</span><select data-lab-select="justify">${["flex-start", "center", "space-between", "space-around", "space-evenly", "flex-end"].map((v) => `<option value="${v}"${f.justify === v ? " selected" : ""}>${v}</option>`).join("")}</select></label>
            <label class="lab-control lab-control-select"><span>align-items</span><select data-lab-select="align">${["stretch", "flex-start", "center", "flex-end"].map((v) => `<option value="${v}"${f.align === v ? " selected" : ""}>${v}</option>`).join("")}</select></label>
            <label class="lab-control"><span>gap <b>${f.gap}px</b></span><input type="range" min="0" max="40" step="4" value="${f.gap}" data-lab-range="gap"></label>
            <label class="lab-control lab-control-check"><span><input type="checkbox" data-lab-check="wrap"${f.wrap ? " checked" : ""}> flex-wrap: wrap</span></label>
            <label class="lab-control lab-control-check"><span><input type="checkbox" data-lab-check="grow"${f.grow ? " checked" : ""}> cho item flex: 1</span></label>
          </div>
        </div>
        <div class="lab-code"><div class="lab-code-head">CSS đang tạo</div><pre id="labCodeBody">${cheatCodeHTML(flexCSS(), "css")}</pre></div>
      </div>
      <aside class="lab-side">
        <div class="side-card" id="labMetrics"><h3>ĐANG XEM</h3><div class="lab-metrics"><div><b>${f.direction}</b><span>trục chính</span></div><div><b>${f.gap}px</b><span>gap</span></div></div><p style="margin-top:10px">justify-content căn theo trục chính. align-items căn theo trục phụ. Đổi direction để thấy hai trục hoán đổi.</p></div>
        <div class="side-card"><h3>THỬ THÁCH</h3><p>Đặt <code>space-between</code> rồi bật <code>flex:1</code>. Quan sát các item chia đều không gian thay vì co lại theo nội dung.</p></div>
      </aside>
    </div>`;
  }
  function refreshLabPreview() {
    const host = $("#labPreview");
    if (!host) return;
    const isBox = state.lab.mode === "box";
    host.innerHTML = isBox ? boxPreview() : flexPreview();
    const code = $("#labCodeBody");
    if (code) code.innerHTML = cheatCodeHTML(isBox ? boxCSS() : flexCSS(), "css");
    const metrics = $("#labMetrics");
    if (!metrics) return;
    if (isBox) {
      const m = boxMetrics();
      metrics.innerHTML = `<h3>ĐO LƯỜNG</h3><div class="lab-metrics"><div><b>${m.content}</b><span>content</span></div><div><b>${m.total}</b><span>hiển thị</span></div></div><p style="margin-top:10px">Với <code>content-box</code>, width chỉ là content. Với <code>border-box</code>, width đã gồm padding và border.</p>`;
    } else {
      const f = state.lab.flex;
      metrics.innerHTML = `<h3>ĐANG XEM</h3><div class="lab-metrics"><div><b>${f.direction}</b><span>trục chính</span></div><div><b>${f.gap}px</b><span>gap</span></div></div><p style="margin-top:10px">justify-content căn theo trục chính. align-items căn theo trục phụ. Đổi direction để thấy hai trục hoán đổi.</p>`;
    }
  }

  /* ----------------------------------------------------------
     Video library
     ---------------------------------------------------------- */
  const VDATA = window.FRONTLAB_VIDEOS || { chapters: [], videos: [] };
  const VIDEOS = VDATA.videos || [];
  const videoById = {};
  VIDEOS.forEach((v) => { videoById[v.id] = v; });

  function fmtClock(seconds) {
    const s = Math.max(0, Math.round(Number(seconds) || 0));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }
  function fmtLong(seconds) {
    const mins = Math.round((Number(seconds) || 0) / 60);
    const h = Math.floor(mins / 60);
    return h ? `${h} giờ ${String(mins % 60).padStart(2, "0")} phút` : `${mins} phút`;
  }
  function videoTotalDuration() {
    return VIDEOS.reduce((sum, v) => sum + (v.duration || 0), 0);
  }

  function videoCardHTML(v) {
    return `<a class="video-card" href="#/videos/${v.id}">
      <div class="video-thumb">
        <img src="${esc(v.poster)}" alt="Ảnh bìa video bài ${v.num}: ${esc(v.title)}" loading="lazy" decoding="async" onerror="this.classList.add('is-missing')">
        <span class="video-thumb-play" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M7 4.5 15 10l-8 5.5z" fill="currentColor"/></svg></span>
        <span class="video-dur">${fmtClock(v.duration)}</span>
      </div>
      <div class="video-card-body">
        <div class="video-ep">BÀI ${pad(v.num)}</div>
        <h3>${esc(v.title)}</h3>
        <div class="video-card-tech">${(v.tech || []).slice(0, 3).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
    </a>`;
  }

  function jumpToTop() {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    root.style.scrollBehavior = previous;
  }

  function renderVideos(id) {
    document.body.dataset.view = "videos";
    const video = id ? videoById[id] : null;
    if (id && !video) {
      document.title = "Không tìm thấy video — FrontLab";
      view.innerHTML = `<div class="home"><div class="missing-box">
        <div class="eyebrow">KHÔNG TÌM THẤY</div>
        <h1>Video này chưa tồn tại</h1>
        <p>Đường dẫn có thể đã cũ. Quay về thư viện video để chọn bài khác.</p>
        <a class="btn btn-primary" href="#/videos">Về thư viện video</a>
      </div></div>`;
      jumpToTop();
      return;
    }
    if (video) {
      document.title = `Video bài ${pad(video.num)} — FrontLab`;
      renderVideoDetail(video);
      jumpToTop();
      return;
    }
    document.title = "Thư viện video — FrontLab";
    view.innerHTML = `<div class="mode-page">
      <div class="mode-head">
        <div>
          <div class="eyebrow">THƯ VIỆN VIDEO</div>
          <h1>Giải từng bước 30 bài thực hành</h1>
          <p>Mỗi video đi trọn một bài: đọc yêu cầu, tạo dự án với tên chuẩn tiếng Anh, viết mã theo từng tệp và chạy thử kết quả. Video có lời giảng tiếng Việt và mốc nội dung để tua nhanh.</p>
        </div>
        <div class="mode-head-right"><span class="pill pill-blue">${VIDEOS.length} video</span><span class="pill">${fmtLong(videoTotalDuration())}</span></div>
      </div>
      <div class="video-standard">
        <div class="video-standard-item"><span class="video-standard-num">01</span><div><b>Thư mục dự án</b><code>exercise-NN-slug</code></div></div>
        <div class="video-standard-item"><span class="video-standard-num">02</span><div><b>Tệp mã nguồn</b><code>index.html</code></div></div>
        <div class="video-standard-item"><span class="video-standard-num">03</span><div><b>Tệp nộp bài</b><code>baiNN.html</code></div></div>
      </div>
      ${(VDATA.chapters || []).map((chapter, ci) => {
        const items = chapter.ids.map((vid) => videoById[vid]).filter(Boolean);
        if (!items.length) return "";
        return `<section class="video-chapter-section">
          <div class="section-head compact">
            <div><div class="eyebrow">CHƯƠNG ${String(ci + 1).padStart(2, "0")}</div><h2>${esc(chapter.name)}</h2></div>
            <span class="pill">${items.length} video</span>
          </div>
          <div class="video-grid">${items.map(videoCardHTML).join("")}</div>
        </section>`;
      }).join("")}
    </div>`;
    jumpToTop();
  }

  function videoPlayerHTML(v) {
    if (v.youtubeId) {
      return `<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtubeId)}?rel=0" title="Bài ${pad(v.num)} — ${esc(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    }
    return `<div class="video-pending" id="videoPending">
      <img src="${esc(v.poster)}" alt="Ảnh bìa video bài ${pad(v.num)}" onerror="this.classList.add('is-missing')">
      <div class="video-pending-body">
        <span class="video-pending-badge">CHỜ PHÁT HÀNH</span>
        <h2>Video sẽ phát tại đây khi lên YouTube</h2>
        <p>Bản dựng dài ${fmtClock(v.duration)} đã hoàn tất cùng phụ đề, mô tả và ảnh bìa. Mở bằng máy chủ nội bộ để xem ngay tệp trong <code>videos/media/</code>.</p>
      </div>
    </div>`;
  }

  function mountLocalVideo(v) {
    if (!window.fetch || location.protocol === "file:") return;
    fetch(v.media, { method: "HEAD", cache: "no-store" })
      .then((res) => {
        if (!res.ok) return;
        const type = res.headers.get("content-type") || "";
        if (type && !/video|octet-stream/.test(type)) return;
        if (state.route.name !== "videos" || state.route.id !== v.id) return;
        const stage = $("#videoStage");
        if (!stage || !$("#videoPending")) return;
        stage.innerHTML = `<video id="videoPlayer" controls playsinline preload="metadata" poster="${esc(v.poster)}"><source src="${esc(v.media)}" type="video/mp4">Trình duyệt không hỗ trợ video.</video>`;
      })
      .catch(() => {});
  }

  function seekVideo(t) {
    const video = $("#videoPlayer");
    if (video) {
      const range = video.seekable;
      const canSeek = range && range.length && range.end(range.length - 1) >= t - 1;
      if (!canSeek) {
        toast("Máy chủ tĩnh này không hỗ trợ tua video — phát trên YouTube để dùng mốc nội dung");
        return;
      }
      video.currentTime = Math.max(0, t);
      const played = video.play();
      if (played && played.catch) played.catch(() => {});
      return;
    }
    const v = state.route.name === "videos" ? videoById[state.route.id] : null;
    const iframe = $("#videoStage iframe");
    if (iframe && v && v.youtubeId) {
      iframe.src = `https://www.youtube-nocookie.com/embed/${esc(v.youtubeId)}?rel=0&start=${Math.floor(t)}&autoplay=1`;
      return;
    }
    toast("Video chưa phát hành — mốc nội dung sẽ có trên YouTube");
  }

  function copyText(text, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => toast(message || "Đã copy")).catch(() => toast("Không copy được"));
    } else {
      toast("Trình duyệt không hỗ trợ copy");
    }
  }

  function renderVideoDetail(v) {
    const index = VIDEOS.indexOf(v);
    const prev = index > 0 ? VIDEOS[index - 1] : null;
    const next = index < VIDEOS.length - 1 ? VIDEOS[index + 1] : null;
    const chapter = VDATA.chapters.find((c) => c.ids.includes(v.id));
    const projectCmd = `mkdir ${v.project} && cd ${v.project}`;
    const submitCmd = `cp index.html ${v.submitFile}`;
    view.innerHTML = `<div class="mode-page video-detail">
      <a class="video-back" href="#/videos">${icon("prev")} Thư viện video</a>
      <div class="video-head">
        <div>
          <div class="eyebrow">BÀI ${pad(v.num)}${chapter ? " · " + esc(chapter.name.toUpperCase()) : ""}</div>
          <h1>${esc(v.title)}</h1>
          <div class="video-meta">
            <span class="pill">${icon("play")} ${fmtClock(v.duration)}</span>
            <span class="pill">Nộp: ${esc(v.submitFile)}</span>
            ${(v.tech || []).map((t) => `<span class="pill">${esc(t)}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="video-layout">
        <div class="video-main">
          <div class="video-stage" id="videoStage">${videoPlayerHTML(v)}</div>
          <div class="video-note">
            <b>Phân tích và giảng giải:</b> video đọc yêu cầu, giải thích tiêu chí, rồi dựng dự án từ đầu — không chỉ dán code. Dùng các mốc bên dưới để xem lại đúng đoạn.
          </div>
          <div class="video-chapter-card">
            <div class="video-chapter-head"><h2>Mốc nội dung</h2><span class="pill">${v.scenes.length} mốc</span></div>
            <ol class="video-chapters">
              ${v.scenes.map((s, i) => `<li><button type="button" data-action="video-chapter" data-t="${s.t}"><span class="vc-time">${fmtClock(s.t)}</span><span class="vc-label">${esc(s.label)}</span><span class="vc-index">${String(i + 1).padStart(2, "0")}</span></button></li>`).join("")}
            </ol>
          </div>
        </div>
        <aside class="video-side">
          <div class="side-card">
            <h3>DỰ ÁN &amp; NỘP BÀI</h3>
            <div class="video-cmd"><span>1 · Tạo dự án</span><code>${esc(projectCmd)}</code><button type="button" data-action="copy-video-cmd" data-copy="${esc(projectCmd)}">Copy</button></div>
            <div class="video-cmd"><span>2 · Tệp chuẩn</span><code>index.html</code></div>
            <div class="video-cmd"><span>3 · Nộp bài</span><code>${esc(submitCmd)}</code><button type="button" data-action="copy-video-cmd" data-copy="${esc(submitCmd)}">Copy</button></div>
            <a class="btn btn-ghost video-sample-link" href="exercises/${esc(v.project)}/index.html" target="_blank" rel="noopener">Mở dự án mẫu ${icon("arrow")}</a>
          </div>
          <div class="side-card">
            <h3>BỘ KỸ THUẬT</h3>
            <div class="video-tech">${(v.tech || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
            <p class="video-side-note">Thư mục <code>${esc(v.project)}</code> nằm trong <code>exercises/</code> của FrontLab.</p>
          </div>
          <nav class="video-pager" aria-label="Video trước và sau">
            ${prev ? `<a href="#/videos/${prev.id}"><span>${icon("prev")} Video trước</span><b>Bài ${pad(prev.num)} · ${esc(prev.title)}</b></a>` : "<span></span>"}
            ${next ? `<a class="is-next" href="#/videos/${next.id}"><span>Video sau ${icon("next")}</span><b>Bài ${pad(next.num)} · ${esc(next.title)}</b></a>` : ""}
          </nav>
        </aside>
      </div>
    </div>`;
    mountLocalVideo(v);
  }

  /* ----------------------------------------------------------
     Search
     ---------------------------------------------------------- */
  let searchIndex = null;
  function buildSearchIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];
    lessonOrder.forEach((id) => {
      const lesson = LESSONS[id];
      if (!lesson) return;
      const track = trackById[lesson.track];
      searchIndex.push({
        type: "Bài học",
        title: lesson.title,
        sub: `${track.short} · ${lesson.shortTitle || ""}`,
        href: `#/learn/${id}/1`,
        text: normalize([lesson.title, lesson.shortTitle, lesson.subtitle, lesson.blurb, (lesson.tags || []).join(" "), (lesson.learn || []).join(" ")].join(" "))
      });
    });
    PRACTICE.forEach((p) => {
      searchIndex.push({
        type: "Luyện tập",
        title: p.title,
        sub: trackById[p.track] ? trackById[p.track].short : "",
        href: `#/practice/${p.id}`,
        text: normalize([p.title, p.context, p.question, (p.options || []).join(" ")].join(" "))
      });
    });
    CHEATS.forEach((card) => {
      searchIndex.push({
        type: "Cheatsheet",
        title: card.title,
        sub: trackById[card.track] ? trackById[card.track].short : "",
        href: "#/cheatsheets",
        text: normalize([card.title, card.subtitle, (card.items || []).map((item) => `${item.label} ${item.code} ${item.note || ""}`).join(" ")].join(" "))
      });
    });
    PROJECTS.forEach((project) => {
      searchIndex.push({
        type: "Dự án",
        title: project.title,
        sub: `${project.level} · ${project.minutes} phút · 6 chặng`,
        href: `#/projects/${project.id}/plan`,
        text: normalize([project.title, project.short, project.blurb, (project.tags || []).join(" "), (project.skills || []).join(" "), project.goal].join(" "))
      });
    });
    VIDEOS.forEach((v) => {
      searchIndex.push({
        type: "Video",
        title: `Bài ${pad(v.num)} — ${v.title}`,
        sub: `${v.chapterName} · ${fmtClock(v.duration)} · ${v.project}`,
        href: `#/videos/${v.id}`,
        text: normalize([v.title, v.chapterName, v.project, v.submitFile, (v.tech || []).join(" "), "video hướng dẫn"].join(" "))
      });
    });
    return searchIndex;
  }
  function searchResultsFor(query) {
    const q = normalize(query).trim();
    const index = buildSearchIndex();
    if (!q) return index.slice(0, 7);
    return index
      .map((item) => {
        const title = normalize(item.title);
        const text = item.text;
        let score = 0;
        if (title === q) score += 100;
        else if (title.startsWith(q)) score += 60;
        else if (title.includes(q)) score += 40;
        if (text.includes(q)) score += 15;
        const words = q.split(/\s+/).filter(Boolean);
        score += words.reduce((sum, word) => sum + (text.includes(word) ? 4 : 0), 0);
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }
  function openSearch() {
    const modal = $("#searchModal");
    if (!modal) return;
    modal.hidden = false;
    modal.classList.add("is-open");
    document.body.classList.add("has-modal");
    state.search.open = true;
    state.search.selected = 0;
    const input = $("#searchInput");
    if (input) {
      input.value = "";
      input.focus();
    }
    renderSearchResults("");
  }
  function closeSearch() {
    const modal = $("#searchModal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.hidden = true;
    document.body.classList.remove("has-modal");
    state.search.open = false;
  }
  function renderSearchResults(query) {
    const results = searchResultsFor(query);
    state.search.results = results;
    state.search.selected = clamp(state.search.selected, 0, Math.max(0, results.length - 1));
    const box = $("#searchResults");
    if (!box) return;
    if (!results.length) {
      box.innerHTML = `<div class="search-empty">Không tìm thấy kết quả cho “${esc(query)}”.</div>`;
      return;
    }
    box.innerHTML = `<div class="search-group-label">${query ? "KẾT QUẢ" : "GỢI Ý"}</div>
      ${results.map((item, i) => `<a class="search-result${i === state.search.selected ? " is-selected" : ""}" href="${item.href}" data-index="${i}">
        <span class="search-result-type">${esc(item.type)}</span>
        <span class="search-result-body"><b>${esc(item.title)}</b><small>${esc(item.sub || "")}</small></span>
        <span class="search-result-arrow">${icon("arrow")}</span>
      </a>`).join("")}`;
  }
  function moveSearch(delta) {
    const results = state.search.results;
    if (!results.length) return;
    state.search.selected = (state.search.selected + delta + results.length) % results.length;
    renderSearchResults($("#searchInput") ? $("#searchInput").value : "");
  }
  function activateSearch() {
    const item = state.search.results[state.search.selected];
    if (!item) return;
    closeSearch();
    navigate(item.href);
  }

  /* ----------------------------------------------------------
     Events
     ---------------------------------------------------------- */
  function handleAction(action, el) {
    if (action === "start-track") {
      const id = el.dataset.track;
      selectTrack(id, { goHome: false });
      const first = firstLessonOf(id);
      navigate(first ? `#/learn/${first.id}/1` : "#/");
      return;
    }
    if (action === "select-track") {
      selectTrack(el.dataset.track, { goHome: true });
      return;
    }
    if (action === "toggle-play") { togglePlayer(); return; }
    if (action === "set-lesson-mode") { setLessonMode(el.dataset.mode); return; }
    if (action === "replay") { replayLesson(); return; }
    if (action === "prev-step") { goToStep(state.lesson.step - 1); return; }
    if (action === "next-step") { goToStep(state.lesson.step + 1); return; }
    if (action === "cycle-speed") { cycleSpeed(); return; }
    if (action === "copy-code") { copyCode(); return; }
    if (action === "fullscreen") { toggleFullscreen(); return; }
    if (action === "answer-practice") { answerPractice(el.dataset.option); return; }
    if (action === "video-chapter") { seekVideo(Number(el.dataset.t)); return; }
    if (action === "copy-video-cmd") { copyText(el.dataset.copy, "Đã copy lệnh"); return; }
    if (action === "lab-mode") {
      state.lab.mode = el.dataset.mode;
      renderLab();
    }
  }

  function bindEvents() {
    view.addEventListener("click", (event) => {
      const actionEl = event.target.closest("[data-action]");
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      if (action && ["start-track", "select-track", "toggle-play", "set-lesson-mode", "replay", "prev-step", "next-step", "cycle-speed", "copy-code", "fullscreen", "answer-practice", "lab-mode", "video-chapter", "copy-video-cmd"].includes(action)) {
        event.preventDefault();
        handleAction(action, actionEl);
      }
    });

    view.addEventListener("input", (event) => {
      const range = event.target.closest("[data-lab-range]");
      if (!range) return;
      const key = range.dataset.labRange;
      const value = Number(range.value);
      if (state.lab.mode === "box") state.lab.box[key] = value;
      else state.lab.flex[key] = value;
      const label = range.closest(".lab-control") && range.closest(".lab-control").querySelector("b");
      if (label) label.textContent = `${value}px`;
      refreshLabPreview();
    });

    view.addEventListener("change", (event) => {
      const select = event.target.closest("[data-lab-select]");
      if (select) {
        const key = select.dataset.labSelect;
        if (state.lab.mode === "box") state.lab.box[key] = select.value;
        else state.lab.flex[key] = select.value;
        refreshLabPreview();
        return;
      }
      const check = event.target.closest("[data-lab-check]");
      if (check) {
        state.lab.flex[check.dataset.labCheck] = check.checked;
        refreshLabPreview();
      }
    });

    const searchBtn = $("#searchBtn");
    if (searchBtn) searchBtn.addEventListener("click", openSearch);
    const themeBtn = $("#themeBtn");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
    const menuBtn = $("#menuBtn");
    if (menuBtn) menuBtn.addEventListener("click", () => {
      if ($("#sidebar") && $("#sidebar").classList.contains("is-open")) closeSidebar();
      else openSidebar();
    });
    const scrim = $("#sidebarScrim");
    if (scrim) scrim.addEventListener("click", closeSidebar);
    const resetBtn = $("#resetProgressBtn");
    if (resetBtn) resetBtn.addEventListener("click", () => {
      if (!window.confirm("Xoá toàn bộ tiến độ học và luyện tập trên trình duyệt này?")) return;
      progress = { visited: {}, completed: {}, practice: {}, track: state.track };
      saveProgress();
      renderSidebar();
      updateChrome();
      onRoute();
      toast("Đã đặt lại tiến độ");
    });
    $$("#trackSwitch [data-track]").forEach((button) => {
      button.addEventListener("click", () => selectTrack(button.dataset.track, { goHome: true }));
    });

    const modal = $("#searchModal");
    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-close-search]")) closeSearch();
        const result = event.target.closest(".search-result");
        if (result) {
          event.preventDefault();
          closeSearch();
          navigate(result.getAttribute("href"));
        }
      });
    }
    const input = $("#searchInput");
    if (input) {
      input.addEventListener("input", () => {
        state.search.selected = 0;
        renderSearchResults(input.value);
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") { event.preventDefault(); moveSearch(1); }
        else if (event.key === "ArrowUp") { event.preventDefault(); moveSearch(-1); }
        else if (event.key === "Enter") { event.preventDefault(); activateSearch(); }
        else if (event.key === "Escape") { event.preventDefault(); closeSearch(); }
      });
    }

    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        state.search.open ? closeSearch() : openSearch();
        return;
      }
      if (event.key === "Escape") {
        if (state.search.open) closeSearch();
        else if ($("#sidebar") && $("#sidebar").classList.contains("is-open")) closeSidebar();
        return;
      }
      if (state.search.open) return;
      const tag = (event.target && event.target.tagName || "").toLowerCase();
      if (["input", "textarea", "select", "button", "a"].includes(tag) || event.target.isContentEditable) return;
      if (state.route.name !== "lesson" || state.lesson.mode !== "stage") return;
      if (event.key === "ArrowLeft") { event.preventDefault(); goToStep(state.lesson.step - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); goToStep(state.lesson.step + 1); }
      if (event.code === "Space") { event.preventDefault(); togglePlayer(); }
      if (event.key.toLowerCase() === "r") { event.preventDefault(); replayLesson(); }
    });

    window.addEventListener("hashchange", onRoute);
  }

  function init() {
    initTheme();
    initSpeed();
    state.track = trackById[progress.track] ? progress.track : "design";
    renderSidebar();
    bindEvents();
    onRoute();
    updateChrome();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { /* fonts loaded */ });
    }
  }

  init();
})();
