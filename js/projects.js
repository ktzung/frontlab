/* FrontLab — project guides: list, stages and live preview */
(function () {
  "use strict";

  const R = window.FrontRender;
  const esc = R.esc;
  const pad = R.pad;
  const codeHTML = R.codeHTML;
  const PROJECTS = window.FRONTLAB_PROJECTS || [];
  const view = document.getElementById("view");

  const STAGES = [
    { id: "plan", label: "Phân rã", hint: "Chia để trị" },
    { id: "html", label: "HTML", hint: "Ngoài vào trong" },
    { id: "css", label: "CSS", hint: "Từng thành phần" },
    { id: "api", label: "MockAPI", hint: "Dữ liệu mẫu" },
    { id: "js", label: "JavaScript", hint: "Nối dữ liệu" },
    { id: "done", label: "Hoàn thiện", hint: "Kiểm tra" }
  ];

  const byId = {};
  PROJECTS.forEach(function (project) { byId[project.id] = project; });

  function stageOf(id) {
    return STAGES.filter(function (stage) { return stage.id === id; })[0] || STAGES[0];
  }

  function projectPath(project, stage) {
    return "#/projects/" + project.id + "/" + (stage || "plan");
  }

  function list(items) {
    return (items || []).map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
  }

  function codeBlock(code, lang, caption) {
    return '<figure class="pj-code">' +
      '<figcaption><span>' + esc(caption || String(lang || "").toUpperCase()) + '</span>' +
      '<button class="code-copy" type="button">Sao chép</button></figcaption>' +
      '<div class="code-wrap">' + codeHTML(code, 0, [], { lang: lang || "js" }) + "</div>" +
    "</figure>";
  }

  function fileDetails(title, code, lang, open) {
    return '<details class="pj-files"' + (open ? " open" : "") + ">" +
      "<summary>" + esc(title) + "</summary>" +
      codeBlock(code, lang, title) +
    "</details>";
  }

  function thumbHTML(project) {
    if (project.thumb === "profile") {
      return '<div class="pj-art pj-art-profile" aria-hidden="true">' +
        '<span class="pa-avatar">TH</span>' +
        '<span class="pa-line pa-w70"></span>' +
        '<span class="pa-line pa-w40"></span>' +
        '<span class="pa-pill"></span>' +
        '<span class="pa-stats"><i></i><i></i><i></i></span>' +
      "</div>";
    }
    if (project.thumb === "tasks") {
      return '<div class="pj-art pj-art-tasks" aria-hidden="true">' +
        '<span class="pa-input"></span>' +
        '<span class="pa-task"><i class="pa-box"></i><i class="pa-text"></i><i class="pa-dot"></i></span>' +
        '<span class="pa-task"><i class="pa-box is-on"></i><i class="pa-text pa-short"></i><i class="pa-dot is-high"></i></span>' +
        '<span class="pa-task"><i class="pa-box"></i><i class="pa-text"></i><i class="pa-dot is-low"></i></span>' +
      "</div>";
    }
    return '<div class="pj-art pj-art-dash" aria-hidden="true">' +
      '<span class="pa-side"><i></i><i></i><i></i></span>' +
      '<span class="pa-main">' +
        '<i class="pa-bar"></i>' +
        '<i class="pa-kpis"><b></b><b></b><b></b></i>' +
        '<i class="pa-table"><b></b><b></b><b></b><b></b></i>' +
      "</span>" +
    "</div>";
  }

  function cardHTML(project) {
    return '<a class="pj-card tone-' + esc(project.tone) + '" href="' + projectPath(project) + '">' +
      '<div class="pj-thumb">' + thumbHTML(project) + "</div>" +
      '<div class="pj-card-body">' +
        '<div class="pj-card-top"><span class="pj-num">DỰ ÁN ' + pad(project.num) + "</span>" +
        '<span class="pj-level">' + esc(project.level) + " · " + project.minutes + " phút</span></div>" +
        "<h3>" + esc(project.title) + "</h3>" +
        "<p>" + esc(project.blurb) + "</p>" +
        '<div class="pj-tags">' + (project.tags || []).map(function (tag) {
          return "<span>" + esc(tag) + "</span>";
        }).join("") + "</div>" +
        '<span class="pj-card-cta">Xem 6 chặng hướng dẫn <b aria-hidden="true">→</b></span>' +
      "</div>" +
    "</a>";
  }

  function renderList() {
    document.title = "Dự án thực hành — FrontLab";
    document.body.dataset.view = "projects";
    document.body.classList.remove("pj-locked");
    const stageCount = PROJECTS.length * STAGES.length;
    view.innerHTML = '<div class="pj-index">' +
      '<section class="pj-hero">' +
        '<div class="pj-hero-copy">' +
          '<p class="eyebrow">HỌC QUA DỰ ÁN</p>' +
          "<h1>Làm một sản phẩm,<br><span class=\"hl\">hiểu cả quy trình.</span></h1>" +
          "<p class=\"pj-hero-sub\">Ba dự án từ đơn giản đến phức tạp. Mỗi dự án đi đúng thứ tự: phân rã bằng chia để trị, dựng HTML từ thẻ cha đến thẻ con, tô CSS từng thành phần, tạo dữ liệu bằng MockAPI rồi mới viết JavaScript.</p>" +
          '<div class="pj-hero-actions">' +
            '<a class="btn btn-primary" href="' + projectPath(PROJECTS[0]) + '">Bắt đầu dự án 01 <b aria-hidden="true">→</b></a>' +
            '<a class="btn btn-ghost" href="#/learn/web-foundations/1">Ôn lại nền tảng</a>' +
          "</div>" +
          '<div class="pj-hero-stats">' +
            "<span><b>" + PROJECTS.length + "</b> dự án</span>" +
            "<span><b>3</b> cấp độ</span>" +
            "<span><b>" + stageCount + "</b> chặng</span>" +
          "</div>" +
        "</div>" +
        '<div class="pj-hero-visual" aria-hidden="true">' +
          '<div class="pj-browser">' +
            '<div class="pj-browser-bar"><i></i><i></i><i></i><span></span></div>' +
            '<div class="pj-browser-body">' +
              '<div class="pj-mini-side"><i></i><i></i><i></i><i></i></div>' +
              '<div class="pj-mini-main">' +
                '<div class="pj-mini-head"><i></i><i class="is-pill"></i></div>' +
                '<div class="pj-mini-kpis"><b></b><b></b><b></b></div>' +
                '<div class="pj-mini-rows"><i></i><i></i><i></i><i></i><i></i></div>' +
              "</div>" +
            "</div>" +
          "</div>" +
          '<span class="pj-float pj-float-a">HTML</span>' +
          '<span class="pj-float pj-float-b">CSS</span>' +
          '<span class="pj-float pj-float-c">MockAPI</span>' +
          '<span class="pj-float pj-float-d">JavaScript</span>' +
        "</div>" +
      "</section>" +

      '<section class="section pj-list">' +
        '<div class="section-head"><div>' +
          '<p class="eyebrow">BA DỰ ÁN MẪU</p>' +
          "<h2>Từ một chiếc thẻ đến một bảng vận hành</h2>" +
          "<p class=\"pj-section-sub\">Độ phức tạp tăng dần theo số thành phần, số trạng thái và số thao tác ghi lên máy chủ.</p>" +
        "</div></div>" +
        '<div class="pj-grid">' + PROJECTS.map(cardHTML).join("") + "</div>" +
      "</section>" +

      '<section class="pj-method">' +
        '<article><span class="pj-method-no">01</span><h3>HTML từ ngoài vào trong</h3>' +
          "<p>Dựng khung cha trước, đặt con sau. Mỗi bước là một nhánh nhỏ của cây, đúng tinh thần chia để trị: giải một khối vừa đủ nhỏ rồi ghép lại.</p></article>" +
        '<article><span class="pj-method-no">02</span><h3>CSS từng thành phần</h3>' +
          "<p>Đi từ trên xuống dưới, từ khung đến chi tiết. Mỗi bước chỉ đổi một nhóm thuộc tính và nêu rõ thuộc tính đó tác động lên điều gì.</p></article>" +
        '<article><span class="pj-method-no">03</span><h3>MockAPI trước, JavaScript sau</h3>' +
          "<p>Có dữ liệu thật từ sớm để nhìn thấy hình dạng sản phẩm. JavaScript chỉ còn nhiệm vụ nối dữ liệu vào giao diện đã dựng xong.</p></article>" +
      "</section>" +
    "</div>";
  }

  function guidePlan(project) {
    const plan = project.plan;
    return '<section class="pj-block">' +
      "<h2>" + esc(plan.title) + "</h2>" +
      '<p class="pj-lead">' + esc(plan.intro) + "</p>" +
      '<ul class="pj-bullets">' + list(plan.mindset) + "</ul>" +
      "<h3>Cây phân rã</h3>" +
      '<ol class="pj-tree">' + plan.tree.map(function (node) {
        return '<li style="--depth:' + node.depth + '"><code>' + esc(node.tag) + "</code><span>" + esc(node.note) + "</span></li>";
      }).join("") + "</ol>" +
      "<h3>Ba câu hỏi trước khi gõ</h3>" +
      '<div class="pj-qa">' + plan.questions.map(function (item) {
        return "<details><summary>" + esc(item.q) + "</summary><p>" + esc(item.a) + "</p></details>";
      }).join("") + "</div>" +
      "<h3>Thứ tự triển khai</h3>" +
      '<ol class="pj-order">' + list(plan.order) + "</ol>" +
    "</section>";
  }

  function propsHTML(props) {
    if (!props || !props.length) return "";
    return '<div class="pj-props">' +
      '<div class="pj-prop pj-prop-head"><span>Thuộc tính</span><span>Tác động</span></div>' +
      props.map(function (prop) {
        return '<div class="pj-prop"><code>' + esc(prop.name) + "</code><span>" + esc(prop.effect) + "</span></div>";
      }).join("") +
    "</div>";
  }

  function guideSteps(stage) {
    return '<section class="pj-block">' +
      "<h2>" + esc(stage.title) + "</h2>" +
      '<p class="pj-lead">' + esc(stage.intro) + "</p>" +
      (stage.mindset ? '<ul class="pj-bullets">' + list(stage.mindset) + "</ul>" : "") +
      '<div class="pj-steps">' + stage.steps.map(function (step, index) {
        return '<article class="pj-step">' +
          '<div class="pj-step-head"><span class="pj-step-no">' + pad(index + 1) + "</span><h3>" + esc(step.title) + "</h3></div>" +
          '<p class="pj-why">' + esc(step.why) + "</p>" +
          propsHTML(step.props) +
          codeBlock(step.code, step.code.trim().charAt(0) === "<" ? "html" : "css", "Bước " + pad(index + 1)) +
        "</article>";
      }).join("") + "</div>" +
      (stage.check ? '<div class="pj-check"><h3>Tự kiểm tra HTML</h3><ul>' + list(stage.check) + "</ul></div>" : "") +
      (stage.responsive ? '<div class="pj-note-box"><h3>Co giãn</h3><ul>' + list(stage.responsive) + "</ul></div>" : "") +
      (stage.rules ? '<div class="pj-note-box"><h3>Quy tắc cần nhớ</h3><ul>' + list(stage.rules) + "</ul></div>" : "") +
    "</section>";
  }

  function guideJS(stage) {
    return '<section class="pj-block">' +
      "<h2>" + esc(stage.title) + "</h2>" +
      '<p class="pj-lead">' + esc(stage.intro) + "</p>" +
      (stage.mindset ? '<ul class="pj-bullets">' + list(stage.mindset) + "</ul>" : "") +
      '<div class="pj-steps">' + stage.steps.map(function (step, index) {
        return '<article class="pj-step">' +
          '<div class="pj-step-head"><span class="pj-step-no">' + pad(index + 1) + "</span><h3>" + esc(step.title) + "</h3></div>" +
          '<p class="pj-why">' + esc(step.why) + "</p>" +
          codeBlock(step.code, "js", "Bước " + pad(index + 1)) +
        "</article>";
      }).join("") + "</div>" +
      '<div class="pj-check"><h3>Thử nghiệm</h3><ul>' + list(stage.tests) + "</ul></div>" +
      '<div class="pj-note-box"><h3>Quy tắc cần nhớ</h3><ul>' + list(stage.rules) + "</ul></div>" +
    "</section>";
  }

  function guideAPI(project) {
    const api = project.api;
    return '<section class="pj-block">' +
      "<h2>" + esc(api.title) + "</h2>" +
      '<p class="pj-lead">' + esc(api.intro) + "</p>" +
      "<h3>Bốn bước tạo dữ liệu</h3>" +
      '<ol class="pj-order">' + api.setup.map(function (step) {
        return "<li><b>" + esc(step.title) + ".</b> " + esc(step.detail) + "</li>";
      }).join("") + "</ol>" +
      "<h3>Endpoint dùng trong dự án</h3>" +
      '<div class="pj-endpoints">' +
        '<div class="pj-endpoint pj-endpoint-head"><span>Method</span><span>Đường dẫn</span><span>Việc dùng</span><span>Kết quả</span></div>' +
        api.endpoints.map(function (endpoint) {
          return '<div class="pj-endpoint"><span class="pj-http is-' + endpoint.method.toLowerCase() + '">' + endpoint.method + "</span>" +
            "<code>" + esc(endpoint.path) + "</code><span>" + esc(endpoint.desc) + "</span><span>" + esc(endpoint.result) + "</span></div>";
        }).join("") +
      "</div>" +
      "<h3>Một bản ghi mẫu</h3>" +
      codeBlock(JSON.stringify(api.sample, null, 2), "js", "JSON từ MockAPI") +
      '<div class="pj-note-box"><h3>Quy tắc cần nhớ</h3><ul>' + list(api.rules) + "</ul></div>" +
      '<div class="pj-note-box is-mock"><h3>Dữ liệu mẫu trong khung xem trước</h3><p>' + esc(api.mockNote) + "</p>" +
        fileDetails("mock.js — toàn bộ dữ liệu giả", project.files.mock, "js", false) + "</div>" +
    "</section>";
  }

  function guideDone(project) {
    const done = project.done;
    const next = PROJECTS.filter(function (item) { return item.num === project.num + 1; })[0];
    return '<section class="pj-block">' +
      "<h2>" + esc(done.title) + "</h2>" +
      '<p class="pj-lead">' + esc(done.intro) + "</p>" +
      "<h3>Danh sách kiểm tra</h3>" +
      '<ul class="pj-done-list">' + done.checklist.map(function (item) {
        return '<li><span class="pj-tick" aria-hidden="true"></span>' + esc(item) + "</li>";
      }).join("") + "</ul>" +
      "<h3>Hướng mở rộng</h3>" +
      '<ul class="pj-bullets">' + list(done.extend) + "</ul>" +
      "<h3>Ba lỗi thường gặp</h3>" +
      '<div class="pj-mistakes">' + done.mistakes.map(function (item) {
        return '<div><b>' + esc(item.title) + "</b><p>" + esc(item.fix) + "</p></div>";
      }).join("") + "</div>" +
      '<div class="pj-finish">' +
        "<div><h3>Đã đi hết sáu chặng</h3><p>Xem lại mã nguồn đầy đủ, rồi chuyển sang dự án tiếp theo nếu muốn thêm thử thách.</p></div>" +
        '<div class="pj-finish-actions">' +
          '<a class="btn btn-ghost" href="' + projectPath(project, "js") + '">Xem mã JavaScript</a>' +
          (next ? '<a class="btn btn-primary" href="' + projectPath(next) + '">Sang dự án ' + pad(next.num) + ' <b aria-hidden="true">→</b></a>'
                : '<a class="btn btn-primary" href="#/projects">Về danh sách dự án <b aria-hidden="true">→</b></a>') +
        "</div>" +
      "</div>" +
    "</section>";
  }

  function fullFiles(project, stage) {
    if (stage === "html") {
      return '<section class="pj-block pj-block-files"><h2>Toàn bộ tệp</h2>' +
        '<p class="pj-lead">Một tệp HTML độc lập, chưa cần CSS hay JavaScript. Đây là bản đầy đủ để bạn đối chiếu sau khi ghép từng bước.</p>' +
        fileDetails("index.html", project.files.html, "html", true) +
      "</section>";
    }
    if (stage === "css") {
      return '<section class="pj-block pj-block-files"><h2>Toàn bộ tệp</h2>' +
        '<p class="pj-lead">Toàn bộ CSS của dự án, xếp đúng thứ tự đã đi: khung, thành phần, trạng thái, màn hình hẹp.</p>' +
        fileDetails("styles.css", project.files.css, "css", true) +
        fileDetails("index.html", project.files.html, "html", false) +
      "</section>";
    }
    if (stage === "js") {
      return '<section class="pj-block pj-block-files"><h2>Toàn bộ tệp</h2>' +
        '<p class="pj-lead">Ba tệp chạy được cùng nhau. Bản JavaScript đầy đủ là những gì bạn vừa ghép ở trên.</p>' +
        fileDetails("app.js", project.files.js, "js", true) +
        fileDetails("index.html", project.files.html, "html", false) +
        fileDetails("styles.css", project.files.css, "css", false) +
      "</section>";
    }
    if (stage === "api") {
      return '<section class="pj-block pj-block-files"><h2>Toàn bộ tệp</h2>' +
        '<p class="pj-lead">Dữ liệu giả nằm trong mock.js và được nạp trước app.js trong khung xem trước.</p>' +
        fileDetails("mock.js", project.files.mock, "js", true) +
      "</section>";
    }
    return "";
  }

  function badgeFor(stage) {
    if (stage === "plan") return "Kết quả mục tiêu";
    if (stage === "html") return "Chỉ HTML";
    if (stage === "css") return "HTML + CSS";
    if (stage === "api") return "Dữ liệu mẫu";
    if (stage === "js") return "Bản chạy đầy đủ";
    return "Bản hoàn thiện";
  }

  function noteFor(project, stage) {
    if (stage === "plan") return "Khung chạy kèm dữ liệu mẫu để bạn thấy đích đến. Ở các chặng sau, CSS và JavaScript sẽ được bóc dần.";
    if (stage === "html") return "Chỉ có HTML, chưa nạp CSS và JavaScript: đúng trạng thái sau bước dựng khung.";
    if (stage === "css") return "CSS đã áp, JavaScript chưa chạy nên dữ liệu còn ở trạng thái chờ.";
    if (stage === "api") return "fetch trong khung bị chặn và trả dữ liệu giả. Đổi trạng thái có tác dụng thật cho tới khi tải lại.";
    if (stage === "js") return "HTML, CSS, dữ liệu giả và JavaScript chạy cùng nhau trong khung.";
    return "Bản đầy đủ. Thử đổi kích thước khung để kiểm tra lại phần co giãn.";
  }

  function buildDocument(project, stage) {
    let html = project.files.html;
    html = html.replace(/<link[^>]*href="styles\.css"[^>]*>\s*/i, "");
    html = html.replace(/<script[^>]*src="app\.js"[^>]*>\s*<\/script>\s*/i, "");
    if (stage !== "html" && project.files.css) {
      html = html.replace("</head>", "<style>\n" + project.files.css + "\n</style>\n</head>");
    }
    if (stage !== "html" && stage !== "css") {
      html = html.replace("</body>", "<script>\n" + project.files.mock + "\n</script>\n<script>\n" + project.files.js + "\n</script>\n</body>");
    }
    return html;
  }

  function renderDetail(id, stageId) {
    const project = byId[id];
    if (!project) {
      document.title = "Không tìm thấy dự án — FrontLab";
      view.innerHTML = '<div class="home"><div class="missing-box"><div class="eyebrow">KHÔNG TÌM THẤY</div>' +
        "<h1>Dự án này chưa tồn tại</h1><p>Đường dẫn có thể đã cũ. Quay về danh sách dự án để chọn lại.</p>" +
        '<a class="btn btn-primary" href="#/projects">Về danh sách dự án</a></div></div>';
      return;
    }
    const stage = stageOf(stageId);
    document.title = project.title + " · " + stage.label + " — FrontLab";
    document.body.dataset.view = "project-detail";
    document.body.classList.remove("pj-locked");

    let guide = "";
    if (stage.id === "plan") guide = guidePlan(project);
    else if (stage.id === "html") guide = guideHTMLStage(project);
    else if (stage.id === "css") guide = guideCSSStage(project);
    else if (stage.id === "api") guide = guideAPI(project);
    else if (stage.id === "js") guide = guideJS(project.js);
    else guide = guideDone(project);

    const prevIndex = STAGES.findIndex(function (item) { return item.id === stage.id; });
    const prev = prevIndex > 0 ? STAGES[prevIndex - 1] : null;
    const next = prevIndex < STAGES.length - 1 ? STAGES[prevIndex + 1] : null;

    view.innerHTML = '<div class="pj-detail">' +
      '<a class="pj-back" href="#/projects"><b aria-hidden="true">←</b> Tất cả dự án</a>' +
      '<header class="pj-head tone-' + esc(project.tone) + '">' +
        '<div class="pj-head-main">' +
          '<p class="eyebrow">DỰ ÁN ' + pad(project.num) + " · " + esc(project.level).toUpperCase() + "</p>" +
          "<h1>" + esc(project.title) + "</h1>" +
          '<p class="pj-sub">' + esc(project.blurb) + "</p>" +
          '<div class="pj-meta">' +
            "<span><b>" + project.minutes + "</b> phút</span>" +
            "<span><b>" + STAGES.length + "</b> chặng</span>" +
            "<span><b>" + (project.skills || []).length + "</b> kỹ năng</span>" +
          "</div>" +
          '<div class="pj-skills">' + (project.skills || []).map(function (skill) {
            return "<span>" + esc(skill) + "</span>";
          }).join("") + "</div>" +
        "</div>" +
        '<div class="pj-goal"><span class="pj-goal-label">Mục tiêu dự án</span><p>' + esc(project.goal) + "</p>" +
          '<ul>' + list(project.outcomes) + "</ul></div>" +
      "</header>" +

      '<nav class="pj-rail" aria-label="Các chặng của dự án">' + STAGES.map(function (item, index) {
        const active = item.id === stage.id;
        return '<a class="pj-rail-item' + (active ? " is-active" : "") + '" href="' + projectPath(project, item.id) + '"' +
          (active ? ' aria-current="step"' : "") + ">" +
          '<span class="pj-rail-no">' + pad(index + 1) + "</span>" +
          '<span class="pj-rail-text"><b>' + esc(item.label) + "</b><small>" + esc(item.hint) + "</small></span>" +
        "</a>";
      }).join("") + "</nav>" +

      '<div class="pjs-host" id="pjStageHost"></div>' +

      '<div class="pj-workspace">' +
        '<div class="pj-guide">' + guide + fullFiles(project, stage.id) +
          '<nav class="pj-stage-nav">' +
            (prev ? '<a class="pj-stage-prev" href="' + projectPath(project, prev.id) + '"><b aria-hidden="true">←</b> ' + esc(prev.label) + "</a>"
                  : '<a class="pj-stage-prev" href="#/projects"><b aria-hidden="true">←</b> Danh sách dự án</a>') +
            (next ? '<a class="pj-stage-next" href="' + projectPath(project, next.id) + '">' + esc(next.label) + ' <b aria-hidden="true">→</b></a>'
                  : '<a class="pj-stage-next" href="' + projectPath(project, "done") + '">Xem lại tổng kết <b aria-hidden="true">→</b></a>') +
          "</nav>" +
        "</div>" +

        '<aside class="pj-preview" id="pjPreview">' +
          '<header class="pj-preview-bar">' +
            '<div class="pj-preview-title"><span class="pj-live-dot" aria-hidden="true"></span><b>Khung chạy thử</b>' +
              '<span class="pj-badge">' + badgeFor(stage.id) + "</span></div>" +
            '<div class="pj-preview-tools">' +
              '<div class="pj-sizes" role="group" aria-label="Kích thước khung">' +
                '<button type="button" data-pj-size="full" class="is-active" title="Toàn chiều rộng">100%</button>' +
                '<button type="button" data-pj-size="tablet" title="Máy tính bảng 768px">768</button>' +
                '<button type="button" data-pj-size="mobile" title="Điện thoại 390px">390</button>' +
              "</div>" +
              '<button type="button" class="pj-tool" data-pj="reload">Tải lại</button>' +
              '<button type="button" class="pj-tool" data-pj="full">Toàn màn hình</button>' +
            "</div>" +
          "</header>" +
          '<div class="pj-preview-stage" id="pjStage"><iframe id="pjFrame" title="Xem trước ' + esc(project.title) + '" sandbox="allow-scripts"></iframe></div>' +
          '<footer class="pj-preview-note">' + esc(noteFor(project, stage.id)) + "</footer>" +
        "</aside>" +
      "</div>" +
    "</div>";

    const preview = bindPreview(project, stage.id);
    if (window.FrontStage) {
      let firstSync = true;
      window.FrontStage.mount(project, stage.id, document.getElementById("pjStageHost"), function (uiStage, docStage) {
        if (firstSync) { firstSync = false; return; }
        preview.setStage(docStage || uiStage, uiStage);
      });
    }
    bindCopy();
    window.scrollTo(0, 0);
  }

  /* stage helpers use project.html / project.css objects */
  function guideHTMLStage(project) {
    return guideSteps(project.html);
  }

  function guideCSSStage(project) {
    return guideSteps(project.css);
  }

  function bindCopy() {
    view.querySelectorAll(".code-copy").forEach(function (button) {
      button.addEventListener("click", function () {
        const figure = button.closest(".pj-code");
        if (!figure) return;
        const text = Array.from(figure.querySelectorAll(".code-src")).map(function (line) {
          return line.textContent;
        }).join("\n");
        writeClipboard(text).then(function () {
          const label = button.textContent;
          button.textContent = "Đã chép";
          button.classList.add("is-done");
          setTimeout(function () {
            button.textContent = label;
            button.classList.remove("is-done");
          }, 1400);
        });
      });
    });
  }

  function writeClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (error) { /* ignore */ }
    document.body.removeChild(area);
  }

  function docKey(stage) {
    if (stage === "html") return "html";
    if (stage === "css") return "css";
    return "live";
  }

  function bindPreview(project, stage) {
    const card = document.getElementById("pjPreview");
    const frame = document.getElementById("pjFrame");
    const stageBox = document.getElementById("pjStage");
    if (!card || !frame || !stageBox) return { setStage: function () {} };
    const badge = card.querySelector(".pj-badge");
    const note = card.querySelector(".pj-preview-note");
    let key = docKey(stage);

    function load() {
      frame.srcdoc = buildDocument(project, key);
    }
    load();

    function setStage(next, uiStage) {
      const target = docKey(next);
      let ui = uiStage || next;
      if (target === "css" && ui === "api") ui = "css";
      if (target !== key) {
        key = target;
        load();
      }
      if (badge) badge.textContent = badgeFor(ui);
      if (note) note.textContent = noteFor(project, ui);
      card.classList.remove("is-synced");
      void card.offsetWidth;
      card.classList.add("is-synced");
    }

    card.querySelectorAll("[data-pj-size]").forEach(function (button) {
      button.addEventListener("click", function () {
        card.querySelectorAll("[data-pj-size]").forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });
        stageBox.classList.toggle("is-tablet", button.dataset.pjSize === "tablet");
        stageBox.classList.toggle("is-mobile", button.dataset.pjSize === "mobile");
      });
    });

    const reload = card.querySelector('[data-pj="reload"]');
    if (reload) reload.addEventListener("click", load);

    const full = card.querySelector('[data-pj="full"]');
    if (full) {
      full.addEventListener("click", function () {
        const on = card.classList.toggle("is-full");
        full.textContent = on ? "Đóng" : "Toàn màn hình";
        document.body.classList.toggle("pj-locked", on);
      });
    }
    return { setStage: setStage };
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    const card = document.querySelector(".pj-preview.is-full");
    if (!card) return;
    card.classList.remove("is-full");
    document.body.classList.remove("pj-locked");
    const button = card.querySelector('[data-pj="full"]');
    if (button) button.textContent = "Toàn màn hình";
  });

  window.FrontProjects = {
    renderList: renderList,
    renderDetail: renderDetail,
    projects: PROJECTS,
    stages: STAGES
  };
})();
