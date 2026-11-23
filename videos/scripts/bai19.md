# Bài 19 — Trang địa danh “Mũi Né – Huyền bí và quyến rũ”

Dự án: exercise-19-mui-ne-travel · Tệp nộp: bai19.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 19, Trang địa danh Mũi Né – Huyền bí và quyến rũ. Chúng ta sẽ cùng tạo dự án exercise 19 mui ne travel với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài luyện hero ảnh nền, lớp phủ gradient và bố cục nội dung du lịch có aside. Cùng bắt đầu.

## 00:29 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Kỹ thuật tạo bóng đổ chữ 2 lớp (text-shadow). Thuộc tính text-shadow cho phép khai báo nhiều lớp bóng cách nhau bằng dấu phẩy. Căn đỉnh ảnh và tiêu đề bằng align-items. start: Trên.bai-viet, đặt align-items: start để bức ảnh bên trái không bị kéo giãn chiều cao theo cột chữ bên phải.

## 00:56 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 19 mui ne travel. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai19.html.

## 01:27 — Cấu trúc HTML

Mở tệp index.html. Trang có header ảnh nền Mũi Né, tiêu đề lớn, đoạn mở đầu drop cap và các khối giới thiệu điểm đến. Thông tin nhanh đặt trong aside cạnh nội dung. Các thẻ ngữ nghĩa chính gồm article, section.

## 01:44 — Định dạng CSS

Chuyển sang phần CSS. Ảnh nền header phủ tối bằng lớp gradient, chữ trắng. Drop cap bằng first-letter. Bố cục main cộng aside dùng Grid, tông vàng cát và cam. Media query đưa aside xuống dưới và giảm chiều cao hero. Bảng màu chính gồm #ffffff, #C9A227, #E07B00, #C62828.

## 02:11 — Chạy thử

Chạy thử: hero Mũi Né với lớp phủ tối giúp chữ nổi rõ. Cuộn xuống phần nội dung và aside. Thu nhỏ màn hình, aside xuống dưới, hero thấp lại.

## 02:31 — Tổng kết

Tổng kết bài 19. Tạo dự án exercise 19 mui ne travel, tệp chính index.html, khi nộp đổi tên thành bai19.html. Giải thích 4 tham số của text-shadow: offset-x offset-y blur-radius color và phân biệt các kiểu đường viền solid (nét liền), dashed (nét gạch đứt), dotted (nét chấm).. Lỗi thường gặp: Quên xóa margin-bottom ở đoạn p bên trong.noi-dung khiến khoảng đệm dưới đáy khung nét đứt bị dày gấp đôi khoảng đệm trên đỉnh.
