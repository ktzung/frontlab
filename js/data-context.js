/* FrontLab — Ngữ cảnh HTML đi kèm các bài CSS/JS */
(function () {
  "use strict";

  function page(title, body, script) {
    return {
      file: "index.html",
      lang: "html",
      code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
</head>
<body>
${body}
  <script src="${script}" defer></script>
</body>
</html>`
    };
  }

  function consoleLesson(title, script) {
    return {
      blocks: [page(title, `  <h1>${title}</h1>`, script)],
      note: "Trang HTML tối thiểu để chạy script — kết quả in ra Console của DevTools."
    };
  }

  window.FRONTLAB_CONTEXT = {
    /* ---------- CSS ---------- */
    "css-selectors": {
      note: "Bốn selector trong file CSS lần lượt bám vào .card, .card.featured, thẻ h2 con và .card nằm trong [data-state=\"open\"].",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<section data-state="open">
  <article class="card featured">
    <h2>Thẻ nổi bật</h2>
    <p>Card có class featured và ở trong vùng open.</p>
  </article>
  <article class="card">
    <h2>Thẻ thường</h2>
    <p>Chỉ có class card.</p>
  </article>
</section>`
      }]
    },
    "cascade-specificity": {
      note: "Cùng một .card xuất hiện ở ba ngữ cảnh — xem selector nào thắng ở từng thẻ.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<section id="hero">
  <article class="card featured">Card trong #hero</article>
  <article class="card">Card thường trong #hero</article>
</section>
<article class="card">Card nằm ngoài #hero</article>`
      }]
    },
    "box-model": {
      note: "Khoảng cách trong khai báo CSS đo trên chính chiếc thẻ này: content → padding → border → margin.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<div class="wrap">
  <article class="card">
    <h2>Box model</h2>
    <p>Content, padding, border và margin bao quanh.</p>
  </article>
</div>`
      }]
    },
    "colors-typography": {
      note: "body và h1 trong trang là đối tượng của các khai báo màu, font và cỡ chữ.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<body>
  <h1>Học CSS có hệ thống</h1>
  <p class="lead">Màu, font và nhịp dòng lấy từ biến :root.</p>
</body>`
      }]
    },
    "units-sizing": {
      note: "Chiều cao hero đo bằng svh; phần đệm dùng clamp; thẻ bên trong bo góc bằng rem.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<header class="hero">
  <h1>Chiều cao theo màn hình</h1>
  <div class="card">Bo góc bằng rem</div>
</header>`
      }]
    },
    "flexbox": {
      note: "Toolbar là flex container: logo đứng một bên, nhóm .actions là flex item co giãn.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<div class="toolbar">
  <strong>FrontLab</strong>
  <div class="actions">
    <button>Lưu</button>
    <button>Chia sẻ</button>
    <button>Xuất</button>
  </div>
</div>`
      }]
    },
    "grid": {
      note: "Gallery chia cột tự động; .feature đặt ảnh và chữ thành 2 cột, ảnh .visual chiếm cả 2 cột.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<section class="gallery">
  <article class="card">Thẻ 1</article>
  <article class="card">Thẻ 2</article>
  <article class="card">Thẻ 3</article>
</section>
<section class="feature">
  <div class="visual">Ảnh lớn</div>
  <h2>Tiêu đề</h2>
  <p>Mô tả ngắn.</p>
</section>`
      }]
    },
    "responsive-design": {
      note: "Lưới một cột trên điện thoại, thành 3 cột khi màn hình ≥ 48rem; ảnh luôn co theo khung.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<div class="grid">
  <article class="card">Thẻ 1</article>
  <article class="card">Thẻ 2</article>
  <article class="card">Thẻ 3</article>
</div>
<img src="hero.jpg" alt="Ảnh minh hoạ">`
      }]
    },
    "positioning": {
      note: "Badge neo vào góc thẻ nhờ .card làm mốc relative; header dính trên đầu khi cuộn.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<header class="site-header">Menu chính</header>
<article class="card">
  <span class="badge">Mới</span>
  <h2>Tiêu đề thẻ</h2>
  <p>Badge nằm trong thẻ nhưng được đặt ở góc.</p>
</article>`
      }]
    },
    "transitions-animation": {
      note: "Nút .button nhận transform và transition; trạng thái hover kích hoạt chuyển động.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<button class="button" type="button">Hover vào tôi</button>`
      }]
    },
    "design-system": {
      note: "Nút và thẻ cùng lấy khoảng cách, bo góc, màu từ token khai báo trong :root.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<button class="btn btn--primary" type="button">Đăng ký</button>
<article class="card">Nội dung dùng token</article>`
      }]
    },
    "design-project": {
      note: "Landing gồm hero 2 cột và lưới thẻ; dưới 40rem hero xếp thành một cột.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<div class="landing">
  <section class="hero">
    <div>
      <h1>Học web từ nền tảng</h1>
      <p>Lộ trình HTML, CSS, JavaScript.</p>
    </div>
    <img src="hero.jpg" alt="">
  </section>
  <section class="cards">
    <article class="card">HTML</article>
    <article class="card">CSS</article>
    <article class="card">JavaScript</article>
  </section>
</div>`
      }]
    },

    /* ---------- JavaScript ---------- */
    "js-intro": {
      note: "app.js tìm h1 và button có sẵn trong trang này rồi đổi chữ khi bấm.",
      blocks: [page("Bài JS đầu tiên", `  <h1>Trang mẫu</h1>
  <button type="button">Bấm tôi</button>`, "app.js")]
    },
    "js-values": consoleLesson("Giá trị và kiểu dữ liệu", "values.js"),
    "js-operators": consoleLesson("Toán tử và biểu thức", "operators.js"),
    "js-conditions": consoleLesson("Điều kiện if/else", "conditions.js"),
    "js-loops": consoleLesson("Vòng lặp", "loops.js"),
    "js-functions": consoleLesson("Hàm", "functions.js"),
    "js-arrays": consoleLesson("Mảng và xử lý danh sách", "arrays.js"),
    "js-objects": {
      note: "Object chỉ sống trong bộ nhớ của script; trang HTML chỉ để chạy mã và xem Console.",
      blocks: [page("Object", `  <h1>Object</h1>`, "objects.js")]
    },
    "js-dom": {
      note: "JS thêm li vào .tasks, đổi chữ h1 và bật/tắt class .active trên .box; file CSS định nghĩa hai class đó.",
      blocks: [
        page("Thao tác DOM", `  <h1>Danh sách việc</h1>
  <ul class="tasks">
    <li>Học HTML</li>
  </ul>
  <div class="box">Hộp điều khiển</div>`, "dom.js"),
        {
          file: "style.css",
          lang: "css",
          code: `.done {
  color: #0f9f8a;
  text-decoration: line-through;
}
.box.active { background: #0f9f8a; color: #fff; }`
        }
      ]
    },
    "js-events": {
      note: "form và #task được chọn; mỗi lần submit hợp lệ, một li mới được thêm vào ul.tasks.",
      blocks: [
        page("Sự kiện và form", `  <form>
    <label for="task">Việc mới</label>
    <input id="task" type="text" placeholder="Nhập việc…">
    <button type="submit">Thêm</button>
  </form>
  <ul class="tasks"></ul>`, "events.js"),
        {
          file: "style.css",
          lang: "css",
          code: `.tasks li {
  padding: 6px 0;
  border-bottom: 1px solid #dbe4ea;
}`
        }
      ]
    },
    "forms-validation": {
      note: "Thông báo lỗi được ghi vào .error ngay dưới ô email khi thiếu dấu @.",
      blocks: [
        page("Form và validation", `  <form id="signup" novalidate>
    <label for="email">Email</label>
    <input id="email" type="email">
    <p class="error"></p>
    <button type="submit">Đăng ký</button>
  </form>`, "validation.js"),
        {
          file: "style.css",
          lang: "css",
          code: `.error {
  color: #c2413a;
  font-size: .875rem;
  min-height: 1.2em;
}`
        }
      ]
    },
    "storage": {
      note: "Không cần phần tử đặc biệt: lựa chọn giao diện và hồ sơ được lưu trong localStorage của trình duyệt.",
      blocks: [page("Lưu dữ liệu trên trình duyệt", `  <h1>Lưu lựa chọn trên trình duyệt</h1>`, "storage.js")]
    },
    "async-fetch": {
      note: "Dữ liệu lấy từ /api/users; trang HTML chỉ để chạy script và xem Console.",
      blocks: [page("Gọi API với fetch", `  <h1>Gọi API với fetch</h1>`, "api.js")]
    },
    "promises-async": {
      note: "Các mốc thời gian in ra Console theo đúng thứ tự bất đồng bộ.",
      blocks: [page("Promise và async/await", `  <h1>Promise và async/await</h1>`, "promises.js")]
    },
    "modules": {
      note: "type=\"module\" để trình duyệt hiểu import/export giữa app.js, utils.js và cart.js.",
      blocks: [{
        file: "index.html",
        lang: "html",
        code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Module và tổ chức mã</title>
</head>
<body>
  <h1>Module và tổ chức mã</h1>
  <script type="module" src="app.js"></script>
</body>
</html>`
      }]
    },
    "error-handling": {
      note: "Request lỗi bị bắt trong try/catch; thông báo in ra Console.",
      blocks: [page("Xử lý lỗi", `  <h1>Xử lý lỗi</h1>`, "errors.js")]
    }
  };
})();
