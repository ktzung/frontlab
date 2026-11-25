/* FrontLab — interactive progress stage for project walkthroughs */
(function () {
  "use strict";

  const R = window.FrontRender || {};
  const esc = R.esc || function (value) {
    return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };
  const pad = function (n) { return String(n).padStart(2, "0"); };
  const STAGE_META = {
    plan: { no: "01", label: "Phân rã" },
    html: { no: "02", label: "HTML" },
    css: { no: "03", label: "CSS" },
    api: { no: "04", label: "MockAPI" },
    js: { no: "05", label: "JavaScript" },
    done: { no: "06", label: "Hoàn thiện" }
  };
  const MODE_KEY = "frontlab-pj-mode";
  const CAM_KEY = "frontlab-pj-cam";
  const SPEEDS = [1, 1.5, 2, 0.5];
  const ICON = {
    play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.2 3.1v9.8L13 8z"/></svg>',
    pause: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="3" width="3" height="10" rx="1"/><rect x="9" y="3" width="3" height="10" rx="1"/></svg>',
    replay: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.6 3.2v4h4"/><path d="M4.2 7.2a5 5 0 1 1-.2 3.6"/></svg>',
    prev: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3.5 5 8l5 4.5z"/></svg>',
    next: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3.5 11 8l-5 4.5z"/></svg>'
  };

  let active = null;

  function clamp(value, lo, hi) {
    return Math.min(hi, Math.max(lo, value));
  }

  function loadCam() {
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(CAM_KEY) || "null"); } catch (error) { raw = null; }
    if (!raw || typeof raw !== "object") return { yaw: -12, zoom: 1 };
    return {
      yaw: clamp(Number(raw.yaw) || 0, -28, 28),
      zoom: clamp(Number(raw.zoom) || 1, 0.72, 1.24)
    };
  }

  function saveCam(cam) {
    try { localStorage.setItem(CAM_KEY, JSON.stringify(cam)); } catch (error) { /* ignore */ }
  }

  function loadMode() {
    try {
      const saved = localStorage.getItem(MODE_KEY);
      if (saved === "2d") return "2d";
    } catch (error) { /* ignore */ }
    return "3d";
  }

  function saveMode(mode) {
    try { localStorage.setItem(MODE_KEY, mode); } catch (error) { /* ignore */ }
  }

  function tip(title, lines) {
    return ' data-tip="' + esc(JSON.stringify({ title: title, lines: (lines || []).filter(Boolean) })) + '"';
  }

  /* ---------- scene markup ---------- */

  function profileApp() {
    return '<div class="pjs-app is-profile pjs-el" data-el="app"' + tip("main.page", ["Một cột, canh giữa", "Chứa toàn bộ thẻ hồ sơ"]) + '>' +
      '<article class="pjs-el pjs-card" data-el="card"' + tip("article.card", ["Khối cha của thẻ", "Bo góc, đổ bóng, nền sáng"]) + '>' +
        '<div class="pjs-el pjs-phead" data-el="head"' + tip("header.card-head", ["Grid ba vùng", "Avatar, định danh, trạng thái"]) + '>' +
          '<span class="pjs-el pjs-ava" data-el="avatar">TH</span>' +
          '<div class="pjs-el pjs-ident" data-el="identity"' + tip("h1#memberName", ["Tên lấy từ JSON", "Cỡ chữ lớn nhất trong thẻ"]) + '>' +
            '<span class="pjs-eyebrow">THÀNH VIÊN</span><b>Trần Thu Hà</b><small>Frontend Engineer</small>' +
          '</div>' +
          '<span class="pjs-el pjs-state" data-el="status">Đang làm việc</span>' +
        '</div>' +
        '<p class="pjs-el pjs-bio" data-el="bio"' + tip("p.bio", ["Đoạn giới thiệu", "Giãn dòng 1.6 để dễ đọc"]) + '>Dựng giao diện từ những khối nhỏ, đo rồi mới ghép.</p>' +
        '<div class="pjs-el pjs-stats" data-el="stats"' + tip("dl.stats", ["Ba cột chia đều", "Số liệu đọc từ dữ liệu"]) + '>' +
          '<span><b>128</b><small>Bài viết</small></span>' +
          '<span><b>2.4k</b><small>Theo dõi</small></span>' +
          '<span><b>36</b><small>Dự án</small></span>' +
        '</div>' +
        '<div class="pjs-el pjs-actions" data-el="actions"' + tip("footer.actions", ["Hai nút ngang hàng", "Nút chính đứng trước"]) + '>' +
          '<span class="pjs-el pjs-btn is-primary" data-el="follow">Theo dõi</span>' +
          '<span class="pjs-el pjs-btn" data-el="message">Nhắn tin</span>' +
        '</div>' +
        '<p class="pjs-el pjs-feedback" data-el="feedback">Đã lưu trạng thái theo dõi.</p>' +
      '</article>' +
    '</div>';
  }

  function tasksApp() {
    return '<div class="pjs-app is-tasks pjs-el" data-el="app"' + tip("section.app", ["Khung một cột", "Tiêu đề, form, lọc, danh sách, chân trang"]) + '>' +
      '<header class="pjs-el pjs-thead" data-el="head"' + tip("header.app-head", ["Tiêu đề và bộ đếm", "Bộ đếm có id riêng"]) + '>' +
        '<div><span class="pjs-eyebrow">VIỆC HÔM NAY</span><b>Danh sách công việc</b></div>' +
        '<span class="pjs-el pjs-counter" data-el="counter">1/4 xong</span>' +
      '</header>' +
      '<form class="pjs-el pjs-form" data-el="form"' + tip("form.task-form", ["Enter hoặc nút đều gửi", "Ô nhập co giãn bằng flex: 1"]) + '>' +
        '<span class="pjs-field">Thêm việc mới…</span>' +
        '<span class="pjs-select">Cao</span>' +
        '<span class="pjs-add">Thêm</span>' +
      '</form>' +
      '<nav class="pjs-el pjs-filters" data-el="filters"><i class="is-on">Tất cả</i><i>Đang làm</i><i>Xong</i></nav>' +
      '<ul class="pjs-list">' +
        '<li class="pjs-el pjs-task" data-el="row-1"' + tip("li.task", ["Ô tick, nội dung, nút xoá", "Cùng một mẫu cho mọi việc"]) + '><span class="pjs-check"></span><span>Soát lại lưới trang chủ</span><em class="is-high">Cao</em></li>' +
        '<li class="pjs-el pjs-task is-done" data-el="row-2"><span class="pjs-check is-on"></span><span>Viết ghi chú họp</span><em>Vừa</em></li>' +
        '<li class="pjs-el pjs-task" data-el="row-3"><span class="pjs-check"></span><span>Sửa lỗi tràn bảng trên 390px</span><em class="is-high">Cao</em></li>' +
        '<li class="pjs-el pjs-task" data-el="row-4"><span class="pjs-check"></span><span>Dọn dẹp tệp CSS cũ</span><em class="is-low">Thấp</em></li>' +
      '</ul>' +
      '<p class="pjs-el pjs-empty" data-el="empty">p#emptyState · hiện khi danh sách trống</p>' +
      '<footer class="pjs-el pjs-foot" data-el="app-foot">4 việc · 1 việc ưu tiên cao</footer>' +
    '</div>';
  }

  function dashboardApp() {
    const rows = [
      ["OD-1042", "Nguyễn Mai", "Chờ xử lý", "2.150.000", "is-pending"],
      ["OD-1041", "Trần Bảo", "Đang giao", "890.000", "is-shipping"],
      ["OD-1040", "Lê Chi", "Hoàn tất", "1.420.000", "is-done"],
      ["OD-1039", "Phạm Khoa", "Đang giao", "3.000.000", "is-shipping"],
      ["OD-1038", "Vũ An", "Huỷ", "640.000", "is-cancelled"]
    ];
    return '<div class="pjs-app is-dash pjs-el" data-el="app"' + tip("div.shell", ["Lưới 232px + 1fr", "Sidebar và vùng làm việc"]) + '>' +
      '<aside class="pjs-el pjs-side" data-el="side"' + tip("aside.side", ["Sticky khi cuộn", "Nền tối, chữ sáng"]) + '>' +
        '<span class="pjs-brand">OD</span>' +
        '<nav><i class="is-on">Đơn hàng</i><i>Khách hàng</i><i>Báo cáo</i></nav>' +
        '<small>Ca sáng · 25/11</small>' +
      '</aside>' +
      '<div class="pjs-main">' +
        '<header class="pjs-el pjs-top" data-el="topbar"' + tip("header.topbar", ["Ô tìm kiếm co giãn", "Lọc theo mã hoặc tên khách"]) + '>' +
          '<span class="pjs-search">Tìm khách hàng hoặc mã đơn</span>' +
          '<span class="pjs-refresh">Tải lại</span>' +
        '</header>' +
        '<div class="pjs-el pjs-kpis" data-el="kpis"' + tip("section.kpis", ["Ba chỉ số phái sinh", "Tính từ mảng đơn, không viết tay"]) + '>' +
          '<span><small>TỔNG ĐƠN</small><b>9</b></span>' +
          '<span><small>DOANH THU</small><b>7,84tr</b></span>' +
          '<span><small>ĐANG GIAO</small><b>2</b></span>' +
        '</div>' +
        '<section class="pjs-el pjs-panel" data-el="panel"' + tip("section.panel", ["Bộ lọc, bảng và chân trang", "Bảng cuộn trong khung"]) + '>' +
          '<div class="pjs-panel-head"><b>Đơn hàng</b><span class="pjs-tabs"><i class="is-on">Tất cả</i><i>Chờ</i><i>Giao</i><i>Xong</i></span></div>' +
          '<div class="pjs-table">' +
            '<div class="pjs-tr is-head"><i>Mã</i><i>Khách</i><i>Trạng thái</i><i>Tổng</i></div>' +
            rows.map(function (row, index) {
              return '<div class="pjs-el pjs-tr" data-el="row-' + (index + 1) + '"><i>' + row[0] + '</i><i>' + row[1] + '</i><i class="' + row[4] + '">' + row[2] + '</i><i>' + row[3] + '</i></div>';
            }).join("") +
          '</div>' +
          '<footer class="pjs-el pjs-pager" data-el="pager"' + tip("footer.panel-foot", ["Lùi, số trang, tiến", "Năm dòng mỗi trang"]) + '><span>‹</span><b>1</b><span>/ 2</span><span>›</span></footer>' +
        '</section>' +
      '</div>' +
      '<div class="pjs-el pjs-toast" data-el="toast">Đã chuyển OD-1042 sang Hoàn tất.</div>' +
    '</div>';
  }

  const APP_HTML = {
    "profile-card": profileApp,
    "task-board": tasksApp,
    "order-dashboard": dashboardApp
  };

  function docksHTML(script) {
    const nodes = script.nodes.map(function (node) {
      return '<span class="pjs-node pjs-el" data-el="node-' + node.id + '"' + tip(node.tag, [node.note]) + '><code>' + esc(node.tag) + '</code></span>';
    }).join("");
    const json = script.json.map(function (line) { return '<i>' + esc(line) + '</i>'; }).join("");
    return '<aside class="pjs-dock pjs-dom pjs-el" data-el="dom" aria-label="Cây DOM">' +
        '<span class="pjs-dock-title">CÂY DOM</span>' +
        '<div class="pjs-nodes">' + nodes + '</div>' +
      '</aside>' +
      '<aside class="pjs-dock pjs-api pjs-el" data-el="api" aria-label="Máy chủ giả MockAPI">' +
        '<span class="pjs-dock-title">MÁY CHỦ GIẢ</span>' +
        '<b>MockAPI</b>' +
        '<code>' + esc(script.api.endpoint) + '</code>' +
        '<span class="pjs-ok"><i></i>200 · ' + esc(script.api.latency) + '</span>' +
      '</aside>' +
      '<aside class="pjs-dock pjs-data pjs-el" data-el="data" aria-label="Dữ liệu trả về">' +
        '<span class="pjs-dock-title">DỮ LIỆU TRẢ VỀ</span>' +
        '<b>' + esc(script.dataLabel) + '</b>' +
        '<div class="pjs-json">' + json + '</div>' +
      '</aside>' +
      '<div class="pjs-el pjs-jsflow" data-el="jsflow"><span>state</span><i>→</i><span>render()</span><i>→</i><span>DOM</span></div>';
  }

  function bandsHTML(steps) {
    const groups = [];
    steps.forEach(function (step, index) {
      const stage = step.stage;
      const last = groups[groups.length - 1];
      if (last && last.stage === stage) {
        last.steps.push({ step: step, index: index });
      } else {
        const meta = STAGE_META[stage] || { no: "00", label: stage };
        groups.push({ stage: stage, no: meta.no, label: meta.label, start: index, steps: [{ step: step, index: index }] });
      }
    });
    return groups.map(function (group) {
      const ticks = group.steps.map(function (item) {
        return '<button class="pjs-tick" type="button" data-step="' + item.index + '" aria-label="Bước ' + (item.index + 1) + ': ' + esc(item.step.title) + '" title="' + esc(item.step.title) + '"><span></span></button>';
      }).join("");
      return '<div class="pjs-band" data-band="' + group.stage + '" style="--span:' + group.steps.length + '">' +
        '<button class="pjs-band-label" type="button" data-step="' + group.start + '">' + group.no + ' · ' + esc(group.label) + '</button>' +
        '<div class="pjs-ticks">' + ticks + '</div>' +
      '</div>';
    }).join("");
  }

  function shellHTML(project, script) {
    const steps = script.steps;
    return '<section class="pjs tone-' + esc(project.tone) + '" id="pjStageCard" aria-label="Sân khấu tiến trình">' +
      '<header class="pjs-head">' +
        '<div class="pjs-head-copy">' +
          '<span class="pjs-kicker"><i class="pjs-dot" aria-hidden="true"></i>SÂN KHẤU TIẾN TRÌNH</span>' +
          '<b class="pjs-title">Dựng sản phẩm theo từng bước</b>' +
          '<span class="pjs-files">' + script.files.map(function (file) { return '<code>' + esc(file) + '</code>'; }).join("") + '</span>' +
        '</div>' +
        '<div class="pjs-tools" role="group" aria-label="Điều khiển sân khấu">' +
          '<button type="button" class="pjs-tool is-on" data-pjs="mode" aria-pressed="true" title="Chuyển sân khấu 3D hoặc 2D">3D</button>' +
          '<button type="button" class="pjs-tool" data-pjs="zoom-out" aria-label="Thu nhỏ sân khấu">−</button>' +
          '<button type="button" class="pjs-tool" data-pjs="zoom-in" aria-label="Phóng to sân khấu">+</button>' +
          '<button type="button" class="pjs-tool" data-pjs="fit" title="Đưa camera về mặc định">Vừa</button>' +
          '<button type="button" class="pjs-tool" data-pjs="full" title="Xem sân khấu toàn màn hình">Toàn màn hình</button>' +
        '</div>' +
      '</header>' +
      '<div class="pjs-body">' +
        '<div class="pjs-scene" id="pjsScene">' +
          '<div class="pjs-deck" id="pjsDeck">' +
            APP_HTML[project.id]() +
            docksHTML(script) +
            '<div class="pjs-packet" id="pjsPacket" aria-hidden="true"></div>' +
          '</div>' +
          '<div class="pjs-callout" id="pjsCallout" hidden></div>' +
          '<div class="pjs-scene-tag"><span id="pjsSceneStage">01 · PHÂN RÃ</span><span id="pjsSceneMode">3D · kéo để xoay</span></div>' +
        '</div>' +
        '<aside class="pjs-info" aria-live="polite">' +
          '<div class="pjs-info-top"><span class="pjs-stage-chip" id="pjsChip">01 · PHÂN RÃ</span><span class="pjs-info-no" id="pjsInfoNo">01 / ' + pad(steps.length) + '</span></div>' +
          '<h3 id="pjsTitle"></h3>' +
          '<p id="pjsDetail"></p>' +
          '<div class="pjs-block"><span class="pjs-label">PHẦN TỬ</span><div class="pjs-keys" id="pjsKeys"></div></div>' +
          '<div class="pjs-block"><span class="pjs-label">TÁC ĐỘNG</span><ul class="pjs-effects" id="pjsEffects"></ul></div>' +
        '</aside>' +
      '</div>' +
      '<div class="pjs-player">' +
        '<button class="pjs-play" type="button" data-pjs="play" aria-label="Phát tiến trình">' + ICON.play + '</button>' +
        '<button class="pjs-mini" type="button" data-pjs="replay" title="Về bước đầu">' + ICON.replay + '</button>' +
        '<button class="pjs-mini" type="button" data-pjs="prev" aria-label="Bước trước">' + ICON.prev + '</button>' +
        '<input class="pjs-range" id="pjsRange" type="range" min="0" max="' + (steps.length - 1) + '" step="1" value="0" aria-label="Chọn bước của tiến trình">' +
        '<span class="pjs-stepno" id="pjsStepNo">BƯỚC 01 / ' + pad(steps.length) + '</span>' +
        '<button class="pjs-mini" type="button" data-pjs="next" aria-label="Bước sau">' + ICON.next + '</button>' +
        '<button class="pjs-speed" type="button" data-pjs="speed" title="Tốc độ phát">1×</button>' +
      '</div>' +
      '<div class="pjs-timeline" id="pjsTimeline">' + bandsHTML(steps) + '</div>' +
      '<p class="pjs-hint">← → đổi bước · Space phát hoặc dừng · R về đầu · kéo ngang để xoay 3D · chạm khối để ghim chú thích</p>' +
    '</section>';
  }

  /* ---------- stage behaviour ---------- */

  function mount(project, stageId, host, onStage) {
    cleanup();
    const script = window.FRONTLAB_STAGE_STEPS && window.FRONTLAB_STAGE_STEPS[project.id];
    if (!script || !script.steps || !script.steps.length || !APP_HTML[project.id]) {
      host.innerHTML = "";
      return;
    }
    const steps = script.steps;
    host.innerHTML = shellHTML(project, script);

    const root = host.querySelector(".pjs");
    const scene = host.querySelector("#pjsScene");
    const deck = host.querySelector("#pjsDeck");
    const callout = host.querySelector("#pjsCallout");
    const packet = host.querySelector("#pjsPacket");
    const range = host.querySelector("#pjsRange");
    const stepNo = host.querySelector("#pjsStepNo");
    const playBtn = host.querySelector('[data-pjs="play"]');
    const speedBtn = host.querySelector('[data-pjs="speed"]');
    const fullBtn = host.querySelector('[data-pjs="full"]');
    const modeBtn = host.querySelector('[data-pjs="mode"]');
    const chip = host.querySelector("#pjsChip");
    const infoNo = host.querySelector("#pjsInfoNo");
    const titleEl = host.querySelector("#pjsTitle");
    const detailEl = host.querySelector("#pjsDetail");
    const keysEl = host.querySelector("#pjsKeys");
    const effectsEl = host.querySelector("#pjsEffects");
    const sceneStage = host.querySelector("#pjsSceneStage");
    const sceneMode = host.querySelector("#pjsSceneMode");
    const stageZero = steps.findIndex(function (step) { return step.stage === stageId; });

    const cam = loadCam();
    const state = {
      project: project,
      steps: steps,
      index: 0,
      playing: false,
      speed: 1,
      timer: null,
      onStage: onStage,
      drag: null,
      moved: false,
      pinned: null
    };
    active = state;

    const revealAt = new Map();
    steps.forEach(function (step, index) {
      (step.reveal || []).forEach(function (key) {
        if (!revealAt.has(key)) revealAt.set(key, index);
      });
    });
    const createdEls = Array.from(root.querySelectorAll("[data-el]"));
    const ticks = Array.from(root.querySelectorAll(".pjs-tick"));
    const bands = Array.from(root.querySelectorAll(".pjs-band"));

    function stageText(stage) {
      const meta = STAGE_META[stage] || STAGE_META.plan;
      return meta.no + " · " + meta.label.toUpperCase();
    }

    function applyCam() {
      deck.style.setProperty("--yaw", cam.yaw + "deg");
      deck.style.setProperty("--zoom", cam.zoom);
    }

    function setMode(mode) {
      root.dataset.mode = mode;
      root.classList.toggle("is-3d", mode === "3d");
      modeBtn.textContent = mode === "3d" ? "3D" : "2D";
      modeBtn.setAttribute("aria-pressed", String(mode === "3d"));
      sceneMode.textContent = mode === "3d" ? "3D · kéo để xoay" : "2D · mặt phẳng";
      clearPin();
      saveMode(mode);
    }

    function resetCam() {
      cam.yaw = -12;
      cam.zoom = 1;
      applyCam();
      saveCam(cam);
    }

    function zoomBy(factor) {
      cam.zoom = clamp(Math.round(cam.zoom * factor * 100) / 100, 0.72, 1.24);
      applyCam();
      saveCam(cam);
    }

    function hideCallout() {
      callout.hidden = true;
      callout.textContent = "";
    }

    function clearPin() {
      if (state.pinned) {
        state.pinned.classList.remove("is-pinned");
        state.pinned = null;
      }
      hideCallout();
    }

    function placeCallout(el) {
      let data = null;
      try { data = JSON.parse(el.getAttribute("data-tip") || "null"); } catch (error) { data = null; }
      if (!data) return;
      callout.textContent = "";
      const head = document.createElement("b");
      head.textContent = data.title;
      callout.appendChild(head);
      (data.lines || []).forEach(function (line) {
        const row = document.createElement("span");
        row.textContent = line;
        callout.appendChild(row);
      });
      const foot = document.createElement("i");
      foot.textContent = "Esc để bỏ ghim";
      callout.appendChild(foot);
      callout.hidden = false;
      const sr = scene.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      const cw = callout.offsetWidth;
      const ch = callout.offsetHeight;
      let left = er.left - sr.left + er.width / 2 - cw / 2;
      let top = er.top - sr.top - ch - 10;
      if (top < 8) top = er.bottom - sr.top + 10;
      left = clamp(left, 6, Math.max(6, sr.width - cw - 6));
      top = clamp(top, 6, Math.max(6, sr.height - ch - 6));
      callout.style.left = left + "px";
      callout.style.top = top + "px";
    }

    function pin(el) {
      if (state.pinned === el) {
        clearPin();
        return;
      }
      clearPin();
      state.pinned = el;
      el.classList.add("is-pinned");
      placeCallout(el);
    }

    function applyStep(index, step) {
      const focus = new Set(step.focus || []);
      createdEls.forEach(function (el) {
        const key = el.getAttribute("data-el");
        const from = revealAt.has(key) ? revealAt.get(key) : 0;
        const created = index >= from;
        el.classList.toggle("is-created", created);
        el.classList.toggle("is-focus", created && focus.has(key));
      });
      root.dataset.stage = step.stage;
      root.classList.toggle("is-api", step.stage === "api");
      root.classList.toggle("is-js", step.stage === "js");

      if (step.flow) {
        packet.textContent = step.flow.label;
        packet.dataset.dir = step.flow.dir || "in";
        packet.classList.remove("is-run");
        void packet.offsetWidth;
        packet.classList.add("is-run");
      } else {
        packet.classList.remove("is-run");
        packet.textContent = "";
      }
    }

    function updateInfo(index, step) {
      const meta = STAGE_META[step.stage] || STAGE_META.plan;
      chip.textContent = meta.no + " · " + meta.label;
      sceneStage.textContent = stageText(step.stage);
      infoNo.textContent = pad(index + 1) + " / " + pad(steps.length);
      titleEl.textContent = step.title;
      detailEl.textContent = step.detail;
      keysEl.innerHTML = (step.keys || []).map(function (key) { return "<code>" + esc(key) + "</code>"; }).join("");
      effectsEl.innerHTML = (step.effects || []).map(function (effect) { return "<li>" + esc(effect) + "</li>"; }).join("");
      stepNo.textContent = "BƯỚC " + pad(index + 1) + " / " + pad(steps.length);
      range.setAttribute("aria-valuetext", "Bước " + (index + 1) + " trên " + steps.length + ": " + step.title);
    }

    function updateTimeline(index) {
      ticks.forEach(function (tick) {
        const stepIndex = Number(tick.getAttribute("data-step"));
        tick.classList.toggle("is-active", stepIndex === index);
        tick.classList.toggle("is-done", stepIndex < index);
        if (stepIndex === index) tick.setAttribute("aria-current", "step");
        else tick.removeAttribute("aria-current");
      });
      bands.forEach(function (band) {
        band.classList.toggle("is-active", band.getAttribute("data-band") === steps[index].stage);
      });
      range.value = String(index);
    }

    function go(next) {
      const index = clamp(Math.round(Number(next) || 0), 0, steps.length - 1);
      state.index = index;
      const step = steps[index];
      applyStep(index, step);
      updateInfo(index, step);
      updateTimeline(index);
      if (state.onStage) state.onStage(step.stage, step.preview);
      if (state.playing) schedule();
    }

    state.pause = pause;

    function paintPlay() {
      playBtn.innerHTML = state.playing ? ICON.pause : ICON.play;
      playBtn.setAttribute("aria-label", state.playing ? "Dừng tiến trình" : "Phát tiến trình");
      playBtn.classList.toggle("is-playing", state.playing);
    }

    function schedule() {
      clearTimeout(state.timer);
      state.timer = setTimeout(function () {
        if (!active || active !== state || !state.playing) return;
        if (state.index >= steps.length - 1) {
          pause();
          return;
        }
        go(state.index + 1);
      }, Math.max(900, 3200 / state.speed));
    }

    function pause() {
      state.playing = false;
      clearTimeout(state.timer);
      state.timer = null;
      paintPlay();
    }

    function play() {
      if (state.playing) {
        pause();
        return;
      }
      if (state.index >= steps.length - 1) go(0);
      state.playing = true;
      paintPlay();
      schedule();
    }

    function setSpeed() {
      const at = SPEEDS.indexOf(state.speed);
      state.speed = SPEEDS[(at + 1) % SPEEDS.length];
      speedBtn.textContent = String(state.speed).replace(".", ",") + "×";
      if (state.playing) schedule();
    }

    function toggleFull() {
      const on = root.classList.toggle("is-full");
      fullBtn.textContent = on ? "Đóng" : "Toàn màn hình";
      fullBtn.setAttribute("aria-pressed", String(on));
      document.body.classList.toggle("pj-locked", on);
      if (on) root.scrollIntoView({ block: "nearest" });
    }

    function endDrag() {
      if (!state.drag) return;
      state.drag = null;
      scene.classList.remove("is-dragging");
      saveCam(cam);
    }

    root.addEventListener("click", function (event) {
      const tool = event.target.closest("[data-pjs]");
      if (tool && root.contains(tool)) {
        const action = tool.getAttribute("data-pjs");
        if (action === "mode") setMode(root.dataset.mode === "3d" ? "2d" : "3d");
        else if (action === "zoom-in") zoomBy(1.08);
        else if (action === "zoom-out") zoomBy(1 / 1.08);
        else if (action === "fit") resetCam();
        else if (action === "full") toggleFull();
        else if (action === "play") play();
        else if (action === "replay") { pause(); go(0); }
        else if (action === "prev") { pause(); go(state.index - 1); }
        else if (action === "next") { pause(); go(state.index + 1); }
        else if (action === "speed") setSpeed();
        return;
      }
      const bandLabel = event.target.closest(".pjs-band-label");
      if (bandLabel && root.contains(bandLabel)) {
        pause();
        go(Number(bandLabel.getAttribute("data-step")));
        return;
      }
      const tick = event.target.closest(".pjs-tick");
      if (tick && root.contains(tick)) {
        pause();
        go(Number(tick.getAttribute("data-step")));
        return;
      }
      if (state.moved) {
        state.moved = false;
        return;
      }
      const target = event.target.closest("[data-tip]");
      if (target && scene.contains(target)) {
        pin(target);
        return;
      }
      if (callout.contains(event.target)) return;
      clearPin();
    });

    range.addEventListener("input", function () {
      pause();
      go(Number(range.value));
    });

    scene.addEventListener("pointerdown", function (event) {
      if (event.button !== 0 || root.dataset.mode !== "3d" || event.target.closest("[data-pjs]")) return;
      state.drag = { x: event.clientX, yaw: cam.yaw };
      state.moved = false;
      scene.classList.add("is-dragging");
      try { scene.setPointerCapture(event.pointerId); } catch (error) { /* ignore */ }
    });

    scene.addEventListener("pointermove", function (event) {
      if (!state.drag) return;
      const dx = event.clientX - state.drag.x;
      if (!state.moved && Math.abs(dx) < 4) return;
      state.moved = true;
      cam.yaw = Math.round(clamp(state.drag.yaw + dx * 0.18, -28, 28) * 10) / 10;
      applyCam();
    });

    scene.addEventListener("pointerup", endDrag);
    scene.addEventListener("pointercancel", endDrag);

    scene.addEventListener("dblclick", function (event) {
      if (event.target.closest("[data-pjs]")) return;
      event.preventDefault();
      resetCam();
    });

    scene.addEventListener("wheel", function (event) {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      zoomBy(event.deltaY < 0 ? 1.06 : 1 / 1.06);
    }, { passive: false });

    setMode(loadMode());
    applyCam();
    paintPlay();
    go(stageZero >= 0 ? stageZero : 0);
  }

  function cleanup() {
    if (active) {
      clearTimeout(active.timer);
      active = null;
    }
    document.body.classList.remove("pj-locked");
  }

  document.addEventListener("keydown", function (event) {
    const state = active;
    if (!state || !state.steps) return;
    const root = document.getElementById("pjStageCard");
    if (!root || !document.contains(root)) return;
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target && target.closest && target.closest("input, textarea, select, [contenteditable='true']")) return;

    if (event.key === "Escape") {
      if (root.classList.contains("is-full")) {
        root.classList.remove("is-full");
        document.body.classList.remove("pj-locked");
        const full = root.querySelector('[data-pjs="full"]');
        if (full) {
          full.textContent = "Toàn màn hình";
          full.setAttribute("aria-pressed", "false");
        }
      }
      if (state.pinned) {
        state.pinned.classList.remove("is-pinned");
        state.pinned = null;
      }
      const callout = root.querySelector("#pjsCallout");
      if (callout) callout.hidden = true;
      return;
    }
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      if (state.playing) state.pause();
      const range = root.querySelector("#pjsRange");
      const current = range ? Number(range.value) : 0;
      const next = clamp(current + delta, 0, state.steps.length - 1);
      if (range) {
        range.value = String(next);
        range.dispatchEvent(new Event("input", { bubbles: true }));
      }
      return;
    }
    if (event.code === "Space" && !(target && target.closest && target.closest("button, a"))) {
      event.preventDefault();
      const btn = root.querySelector('[data-pjs="play"]');
      if (btn) btn.click();
      return;
    }
    if (event.key === "r" || event.key === "R") {
      event.preventDefault();
      const replay = root.querySelector('[data-pjs="replay"]');
      if (replay) replay.click();
    }
  });

  window.FrontStage = {
    mount: mount,
    cleanup: cleanup
  };
})();
