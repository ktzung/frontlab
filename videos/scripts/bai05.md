# Bài 05 — Trang giới thiệu Công ty Hoa tươi Nhân Ái

Dự án: exercise-05-nhan-ai-flower-shop · Tệp nộp: bai05.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 5, Trang giới thiệu Công ty Hoa tươi Nhân Ái. Chúng ta sẽ cùng tạo dự án exercise 05 nhan ai flower shop với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài đầu tiên ghép Grid hai cột với bảng dữ liệu và hệ thống nhãn màu, rất gần bố cục trang doanh nghiệp thật. Cùng bắt đầu.

## 00:30 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Thay thế bảng dàn trang cũ bằng CSS Grid. Trong đề bài gốc của thế hệ HTML 4, bố cục ảnh bên trái – chữ bên phải thường bị đặt trong một table 1 hàng 2 ô. Với chuẩn HTML5/CSS3 hiện đại, ta dùng div với display: grid, grid-template-columns: 220 pixel 1fr, gap: 24 pixel.. Tạo nhãn tiêu đề nền hồng vừa khít chữ. Mặc định thẻ h2 là phần tử khối (block) nên màu nền sẽ kéo dài hết 100 phần trăm chiều ngang cột phải. Để nền hồng #FFC0CB chỉ bao vừa khít chữ 1. Giới thiệu và 2.

## 01:18 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 05 nhan ai flower shop. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai05.html.

## 01:49 — Cấu trúc HTML

Mở tệp index.html. Trang có header thương hiệu, nav liên kết, main chia hai cột: bên trái là bài giới thiệu và danh sách dịch vụ, bên phải là ảnh hoa và bảng thông tin liên hệ. Thông tin công ty dùng table dữ liệu. Các thẻ ngữ nghĩa chính gồm article, section.

## 02:09 — Định dạng CSS

Chuyển sang phần CSS. Hai cột dùng CSS Grid với tỉ lệ 2 chia 1. Nhãn mục dùng inline-block, danh sách bỏ bullet mặc định. Bảng màu hồng cánh sen, chữ trắng trên tiêu đề, media query gộp hai cột thành một. Bảng màu chính gồm #ffffff, #C2185B, #FFC0CB, #0000EE.

## 02:34 — Chạy thử

Chạy thử trang hoa tươi: cột nội dung bên trái, ảnh và bảng liên hệ bên phải. Thu nhỏ màn hình, Grid tự gộp thành một cột, bảng thông tin vẫn đọc được.

## 02:54 — Tổng kết

Tổng kết bài 5. Tạo dự án exercise 05 nhan ai flower shop, tệp chính index.html, khi nộp đổi tên thành bai05.html. Giải thích tại sao dùng display: inline-block trên.nhan-muc và cách dùng list-style-type: square / circle thay vì thuộc tính HTML type=square đã lỗi thời.. Lỗi thường gặp: Dùng padding-left: 0 trên thẻ ul làm mất hoàn toàn các ký hiệu đầu dòng (square/circle) vì dấu chấm đầu dòng của ul nằm trong vùng padding-left.
