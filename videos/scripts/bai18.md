# Bài 18 — Bài viết “Bông điên điển” & Danh sách ẩm thực 2 cột

Dự án: exercise-18-dien-dien-feature · Tệp nộp: bai18.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 18, Bài viết Bông điên điển & Danh sách ẩm thực 2 cột. Chúng ta sẽ cùng tạo dự án exercise 18 dien dien feature với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài luyện bố cục bài viết biên tập: ảnh lớn, sapo, nội dung nhiều cột và danh sách món ăn. Cùng bắt đầu.

## 00:30 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Dùng. first-of-type first-letter để chỉ phóng to chữ đầu đoạn 1: Khác với Bài 03 và Bài 04 (phóng to chữ đầu mọi đoạn), ở Bài 18 chỉ đoạn mở đầu có chữ M rơi lớn, còn đoạn 2 viết bình thường. Chia danh sách ul thành 2 cột bằng columns. 2: Thay vì tách thủ công thành 2 thẻ ul riêng biệt, ta giữ nguyên 1 thẻ ul duy nhất chứa 7 thẻ li và khai báo columns: 2, column-gap: 32 pixel. Trình duyệt tự động phân bổ 4 dòng đầu sang cột trái và 3 dòng sau sang cột phải.

## 01:13 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 18 dien dien feature. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai18.html.

## 01:45 — Cấu trúc HTML

Mở tệp index.html. Trang gồm article giới thiệu bông điên điển với ảnh lớn, sapo và các đoạn văn, bên dưới là danh sách ẩm thực chia hai cột. Mỗi món là một mục có tiêu đề và mô tả ngắn. Các thẻ ngữ nghĩa chính gồm article, aside.

## 02:03 — Định dạng CSS

Chuyển sang phần CSS. Hai cột dùng Grid với gap đều, tiêu đề mục màu cam, gạch chân vàng. Ảnh bo góc, chú thích in nghiêng. Bảng màu kem, cam, xanh lá, media query gộp danh sách thành một cột. Bảng màu chính gồm #fffdf7, #E65100, #2E7D32, #f4fbf4.

## 02:27 — Chạy thử

Chạy thử: bài viết hiển thị ảnh lớn và sapo, danh sách món ăn chia hai cột. Thu nhỏ màn hình, danh sách gộp thành một cột để dễ đọc.

## 02:47 — Tổng kết

Tổng kết bài 18. Tạo dự án exercise 18 dien dien feature, tệp chính index.html, khi nộp đổi tên thành bai18.html. Giải thích sự khác nhau giữa columns: 2 (tự động chia dòng văn bản/danh sách theo chiều dọc trước rồi sang cột kế) và display: grid (xếp từng phần tử theo hàng ngang).. Lỗi thường gặp: Dùng display: grid, grid-template-columns: 1fr 1fr, cho ul khiến thứ tự đọc các món ăn bị nhảy ngang trái–phải thay vì đọc từ trên xuống ở cột 1 rồi mới sang cột 2.
