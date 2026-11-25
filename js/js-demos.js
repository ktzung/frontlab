/* FrontLab — cấu hình JS Playground: môi trường HTML và dữ liệu giả theo bài */
(function () {
  "use strict";

  const noteDefault = "Kết quả chạy trong iframe sandbox. Console bên dưới nhận log, lỗi và request giả lập.";

  window.JS_PLAYGROUND = {
    "js-intro": {
      title: "Trang đầu tiên có JavaScript",
      lead: "Mã tìm h1 và nút bấm trong khung chạy, đổi chữ và gắn sự kiện click.",
      harness: '<h1>Xin chào HTML</h1><p>Bấm nút bên dưới để xem JavaScript đổi nội dung trang.</p><button type="button">Bấm tôi</button>'
    },
    "js-values": {
      title: "Kiểu dữ liệu",
      lead: "Bài này in kiểu của từng giá trị ra console. Thử đổi giá trị và xem kiểu thay đổi."
    },
    "js-operators": {
      title: "Toán tử và biểu thức",
      lead: "Giá trị total, điều kiện so sánh và toán tử ba ngôi được tính rồi in ra console."
    },
    "js-conditions": {
      title: "Rẽ nhánh theo điểm",
      lead: "Đổi biến score ở đầu mã để đi qua các nhánh if, else if và else khác nhau."
    },
    "js-loops": {
      title: "Vòng lặp tính điểm",
      lead: "Mảng scores được duyệt để tính tổng, trung bình và in từng chỉ số."
    },
    "js-functions": {
      title: "Hàm và tham số",
      lead: "Hàm average nhận một mảng và trả về trung bình. Thử gọi hàm với mảng khác."
    },
    "js-arrays": {
      title: "Thao tác mảng",
      lead: "Push, filter, map, find và spread được in lần lượt ra console."
    },
    "js-objects": {
      title: "Object và destructuring",
      lead: "Object student được cập nhật, tách thuộc tính và tạo bản sao bằng spread."
    },
    "js-dom": {
      title: "Thay đổi DOM",
      lead: "Mã thêm một li vào danh sách, đổi tiêu đề và bật trạng thái active cho hộp.",
      harness: `<h1>Danh sách cũ</h1>
        <ul class="tasks"><li>Việc cũ</li></ul>
        <div class="box">Hộp trạng thái</div>
        <style>
          .box { margin-top: 14px; padding: 12px 14px; border: 1px solid #c9c1b2; border-radius: 10px; background: #f7f3e8; }
          .box.active { background: #0f9f8a; border-color: #0b7f70; color: #fff; }
          .done { color: #0b7f70; font-weight: 600; }
        </style>`
    },
    "js-events": {
      title: "Biểu mẫu và sự kiện",
      lead: "Nhập một việc rồi bấm Thêm. Nút thứ hai chỉ ghi log khi bấm.",
      harness: `<h1>Việc hôm nay</h1>
        <form>
          <label for="task">Việc mới</label>
          <input id="task" name="task" placeholder="Ví dụ: ôn DOM" autocomplete="off">
          <button type="submit">Thêm</button>
        </form>
        <button id="button" type="button">Nút log</button>
        <ul class="tasks"></ul>
        <style>
          form { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px; }
          label { width: 100%; font-weight: 600; }
          .tasks li { margin: 4px 0; }
        </style>`
    },
    "forms-validation": {
      title: "Kiểm tra email",
      lead: "Nhập email thiếu @ để thấy thông báo lỗi. Nhập email hợp lệ để đi tới bước gửi giả lập.",
      harness: `<h1>Đăng ký nhận tin</h1>
        <form id="signup" action="/dang-ky" method="post">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="an@example.com" autocomplete="off">
          <p class="error" role="alert" style="min-height:22px;color:#c0392b;margin:8px 0"></p>
          <button type="submit">Đăng ký</button>
        </form>`
    },
    "storage": {
      title: "Lưu trạng thái",
      lead: "localStorage và sessionStorage được thay bằng bộ nhớ tạm trong playground nên vẫn chạy được mà không đụng dữ liệu thật.",
      harness: '<h1>Bộ nhớ trình duyệt</h1><p>Mã lưu theme và profile dưới dạng chuỗi JSON, sau đó đọc lại.</p>'
    },
    "async-fetch": {
      title: "Tải dữ liệu bất đồng bộ",
      lead: "Fetch /api/users được giả lập trả về ba người dùng. Xem thứ tự log trước và sau khi dữ liệu về.",
      harness: '<h1>Danh sách người dùng</h1><p>Request được giả lập ngay trong playground, không gọi mạng thật.</p>',
      mock: [{ path: "/api/users", status: 200, body: [{ id: 1, name: "An" }, { id: 2, name: "Bình" }, { id: 3, name: "Chi" }] }]
    },
    "promises-async": {
      title: "Promise và thời gian",
      lead: "Các Promise hoàn tất sau 100, 200, 300 và 500ms. Quan sát thứ tự log trong console.",
      harness: '<h1>Hẹn giờ bất đồng bộ</h1><p>Mã không chặn trang; các log xuất hiện dần theo thời gian.</p>'
    },
    "modules": {
      title: "Module và import",
      lead: "Playground thay import bằng Cart và formatPrice tương ứng để mã chạy được trong một khung.",
      harness: '<h1>Giỏ hàng</h1><p>Cart và formatPrice được cung cấp sẵn; phần export được lược bỏ khi chạy.</p>',
      transform: "module",
      prelude: 'class Cart { constructor() { this.total = 0; } add(item) { this.total += item.price; } }'
    },
    "error-handling": {
      title: "Bắt lỗi khi tải dữ liệu",
      lead: "Request /api/users/7 được giả lập trả 404. Khối catch in lỗi, finally vẫn chạy.",
      harness: '<h1>Hồ sơ người dùng</h1><p>Mã thử tải id 7 và xử lý trường hợp không tìm thấy.</p>',
      mock: [{ path: "/api/users/7", status: 404, body: { message: "Not found" } }]
    },
    "default": { note: noteDefault }
  };
})();
