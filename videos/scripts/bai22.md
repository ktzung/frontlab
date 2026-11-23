# Bài 22 — Chuyển đổi giao diện Sáng / Tối với CSS Variables

Dự án: exercise-22-light-dark-theme · Tệp nộp: bai22.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 22, Chuyển đổi giao diện Sáng / Tối với CSS Variables. Chúng ta sẽ cùng tạo dự án exercise 22 light dark theme với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện CSS Variables và tư duy design token: đổi theme không cần viết lại giao diện. Cùng bắt đầu.

## 00:34 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Tách biệt định nghĩa màu và nơi sử dụng màu. Tuyệt đối không gán mã màu cứng (như #ffffff hay #0f172a) trực tiếp vào.the hay body. Thay vào đó, tất cả các phần tử đều dùng background: var(nen), color: var(chu). Thiết kế nút gạt Toggle Switch mượt mà. Ở chế độ Sáng (chưa có.toi), chấm tròn after nằm bên trái (left: 4 pixel). Khi body.toi kích hoạt, ta dịch chấm tròn sang phải bằng transform: translateX(32 pixel).

## 01:15 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 22 light dark theme. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai22.html.

## 01:43 — Cấu trúc HTML

Mở tệp index.html. Trang có nút gạt chuyển theme ở góc phải, tiêu đề, đoạn mô tả và một số card nội dung. Nút có aria-label để hỗ trợ trình đọc màn hình. Các thẻ ngữ nghĩa chính gồm main, article.

## 01:59 — Định dạng CSS

Chuyển sang phần CSS. Toàn bộ màu khai báo bằng biến CSS trên :root và bộ biến cho data-theme dark. Chuyển theme chỉ cần đổi thuộc tính data-theme trên body. Các khối có transition màu nền và màu chữ. Media query giữ bố cục một cột trên mobile. Bảng màu chính gồm #ffffff, #0f172a, #f1f5f9, #e2e8f0, #2563eb.

## 02:29 — JavaScript

Phần JavaScript. Sự kiện click trên nút gạt đổi giá trị data-theme giữa light và dark, cập nhật trạng thái nút và dòng mô tả. Cách làm này tách màu khỏi cấu trúc, dễ thêm theme mới. Sự kiện được lắng nghe gồm click.

## 02:45 — Chạy thử

Chạy thử: bấm nút gạt, toàn bộ trang chuyển sang tối với hiệu ứng chuyển màu mượt. Bấm lần nữa để trở về sáng. Thu nhỏ màn hình, nút và nội dung vẫn cân đối.

## 03:04 — Tổng kết

Tổng kết bài 22. Tạo dự án exercise 22 light dark theme, tệp chính index.html, khi nộp đổi tên thành bai22.html. Bấm trực tiếp vào nút gạt để trình diễn hiệu ứng chuyển màu đồng loạt và giải thích vì sao cách dùng var(ten-bien) gọn hơn gấp nhiều lần so với việc viết.toi.the.toi h3.toi p riêng rẽ.. Lỗi thường gặp: Viết sai cú pháp biến CSS (thiếu hai dấu gạch ngang ở đầu tên biến hoặc quên hàm var() khi gọi).
