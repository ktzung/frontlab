# Bài 04 — Trang giới thiệu thành phố Đà Nẵng

Dự án: exercise-04-da-nang-city · Tệp nộp: bai04.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 4, Trang giới thiệu thành phố Đà Nẵng. Chúng ta sẽ cùng tạo dự án exercise 04 da nang city với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Luyện cách đặt ảnh banner, chữ nổi trên ảnh và giữ bố cục đọc tốt ở nhiều kích thước. Cùng bắt đầu.

## 00:27 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Kỹ thuật ngắt dòng trong h1 không dùng br. Bọc dòng phụ Thành phố đáng sống trong thẻ span bên trong h1. Trong CSS, đặt h1 span display: block, font-size: 0.7em, để dòng phụ tự động xuống hàng và có cỡ chữ bằng 70 phần trăm dòng chính.. Cắt khung ảnh ngang bằng object-fit. cover: Ảnh chụp thực tế thường có chiều cao lớn. Khi đặt width: 100 phần trăm, max-height: 280 pixel, object-fit: cover, , trình duyệt giữ nguyên độ nét và tỉ lệ khung hình của ảnh mà không bị bẹp hình.

## 01:11 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 04 da nang city. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai04.html.

## 01:42 — Cấu trúc HTML

Mở tệp index.html. Trang dùng header chứa ảnh banner và tiêu đề thành phố, main chứa các đoạn giới thiệu, figure cho ảnh minh họa và footer thông tin liên hệ. Bố cục một cột tập trung vào nội dung. Các thẻ ngữ nghĩa chính gồm article.

## 02:00 — Định dạng CSS

Chuyển sang phần CSS. Banner dùng object-fit cover, chữ trắng có bóng đổ để nổi trên ảnh. Đoạn mở dùng first-letter làm drop cap. Thanh phụ và liên kết dùng màu xanh và đỏ của thành phố, media query giảm cỡ chữ trên mobile. Bảng màu chính gồm #ffffff, #1565C0, #C62828.

## 02:26 — Chạy thử

Chạy thử: banner Đà Nẵng hiển thị tràn chiều ngang, tiêu đề trắng nổi bật. Cuộn xuống phần giới thiệu, sau đó thu nhỏ cửa sổ để kiểm tra bố cục một cột và cỡ chữ.

## 02:46 — Tổng kết

Tổng kết bài 4. Tạo dự án exercise 04 da nang city, tệp chính index.html, khi nộp đổi tên thành bai04.html. Giải thích sự khác biệt khi có và không có object-fit: cover trên bức ảnh banner, và cách dùng text-transform: uppercase để tự động viết hoa tiêu đề.. Lỗi thường gặp: Quên display: flow-root (hoặc clear: both) khi đoạn văn quá ngắn khiến thanh.thanh-phu bị vướng vào chữ cái first-letter đang float: left.
