# Bài 11 — Thư viện ảnh danh thắng Việt Nam

Dự án: exercise-11-vietnam-gallery · Tệp nộp: bai11.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 11, Thư viện ảnh danh thắng Việt Nam. Chúng ta sẽ cùng tạo dự án exercise 11 vietnam gallery với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài luyện grid ảnh responsive và cặp figure figcaption đúng chuẩn HTML5. Cùng bắt đầu.

## 00:29 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Xóa margin mặc định của thẻ figure. Theo User-Agent Stylesheet của trình duyệt, thẻ figure mặc định có margin: 1em 40 pixel. Nếu không đặt figure margin: 0, , các ô trong lưới CSS Grid sẽ bị co nhỏ và lệch lề.. Loại bỏ khe hở 4 pixel dưới đáy thẻ img. Thẻ img mặc định có display: inline nên trình duyệt chừa một khe hở nhỏ dưới chân ảnh (cho chân chữ g, y, p). Đặt display: block trên figure img giúp ảnh khít hoàn toàn với phần figcaption bên dưới.

## 01:13 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 11 vietnam gallery. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai11.html.

## 01:44 — Cấu trúc HTML

Mở tệp index.html. Mỗi ảnh là một figure có img và figcaption. Toàn bộ thư viện nằm trong main, có tiêu đề h1 và mô tả ngắn. Cách dùng figure giúp ảnh và chú thích luôn gắn với nhau về ngữ nghĩa. Các thẻ ngữ nghĩa chính gồm main, figure.

## 02:03 — Định dạng CSS

Chuyển sang phần CSS. Grid tự động với các cột tối thiểu 240 pixel, khoảng cách đều. Ảnh phủ kín ô bằng object-fit cover, chú thích nằm dưới. Nền tối, chữ sáng, media query giảm số cột trên màn hình hẹp. Bảng màu chính gồm #0f172a, #e2e8f0, #94a3b8, #1e293b, #cbd5e1.

## 02:32 — Chạy thử

Chạy thử thư viện: các ảnh xếp thành lưới đều nhau, chú thích dưới mỗi ảnh. Thu nhỏ màn hình, lưới tự giảm từ ba cột xuống hai rồi một cột.

## 02:53 — Tổng kết

Tổng kết bài 11. Tạo dự án exercise 11 vietnam gallery, tệp chính index.html, khi nộp đổi tên thành bai11.html. Giải thích ý nghĩa ngữ nghĩa của cặp thẻ figure / figcaption đối với công cụ tìm kiếm (SEO) và trình đọc màn hình, cùng lý do phải đặt figure margin: 0.. Lỗi thường gặp: Quên overflow: hidden trên thẻ figure khiến 2 góc trên của bức ảnh img vẫn nhọn vuông góc dù figure đã có border-radius: 10 pixel. JavaScript Thông tin ngày học Số lượng bài thực hành: 6 bài (Bài 12 – Bài 17).
