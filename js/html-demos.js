/* FrontLab — cấu hình HTML Playground theo từng bài */
(function () {
  "use strict";

  const bootstrapCss = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">';
  const tailwindCdn = '<script src="https://cdn.tailwindcss.com"></script>';

  window.HTML_PLAYGROUND = {
    "web-foundations": {
      note: "Trang chỉ có HTML nên rất đơn giản. Thử đổi chữ trong h1 rồi xem cấu trúc DOM bên phải."
    },
    "html-document": {
      note: "head chứa metadata, body chứa nội dung nhìn thấy. Chọn từng thẻ trong cây DOM để đọc giải nghĩa."
    },
    "semantic-html": {
      note: "Các thẻ article, header, nav, section, footer mô tả vai trò nội dung. Thử thay section bằng div để thấy cấu trúc mất nghĩa."
    },
    "text-links": {
      note: "Liên kết nội bộ dạng #id nhảy tới đúng phần tử trong khung xem trước. Liên kết ngoài được chặn để bạn không rời bài học."
    },
    "images-media": {
      head: "<style>figure{margin:0}img,video{max-width:100%;border-radius:10px;background:#e8e2d5}figcaption{margin-top:8px;color:#5c6b7a;font-size:14px}</style>",
      note: "Ảnh và video minh họa không có trong repo nên khung xem thay bằng ảnh giữ chỗ. Các thuộc tính alt, width, height, controls vẫn giữ nguyên để quan sát."
    },
    "forms-inputs": {
      note: "Gửi form bị chặn trong khung xem trước. Hãy thử bỏ required hoặc đổi type=email thành text để so sánh kiểm tra mặc định."
    },
    "tables-data": {
      note: "Bảng dùng cho dữ liệu thật. Bấm vào các ô trong cây DOM để phân biệt th tiêu đề với td dữ liệu."
    },
    "accessibility": {
      note: "Thử Tab qua các phần tử. Nút có aria-label, label gắn với input và ảnh có alt đều được trình đọc màn hình mô tả."
    },
    "bootstrap-grid": {
      head: bootstrapCss,
      note: "Bootstrap tải từ CDN. Đổi col-md-6 thành col-md-4 hoặc col-lg-3 rồi thu hẹp khung xem để thấy hệ lưới đổi bố cục."
    },
    "bootstrap-components": {
      head: bootstrapCss,
      note: "Đã thêm CSS Bootstrap vì mã bài chỉ có phần JavaScript. Bấm nút menu trên navbar để thử component collapse."
    },
    "tailwind-utilities": {
      note: "Tailwind CDN đọc các class trong mã. Thử đổi bg-teal-600 thành bg-rose-600 hoặc text-3xl thành text-5xl."
    },
    "tailwind-responsive": {
      head: tailwindCdn,
      note: "Đã thêm Tailwind CDN để mã chạy. Đổi md:grid-cols-2 thành md:grid-cols-1 rồi chuyển khung xem 390px để so sánh breakpoint."
    }
  };
})();
