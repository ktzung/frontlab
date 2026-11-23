# Bài 10 — Trang Biểu mẫu liên hệ khách hàng (HTML5 Form)

Dự án: exercise-10-contact-form · Tệp nộp: bai10.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 10, Trang Biểu mẫu liên hệ khách hàng (HTML5 Form). Chúng ta sẽ cùng tạo dự án exercise 10 contact form với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài chuẩn về form HTML5: label đúng cách, các kiểu input, thuộc tính bắt buộc và bố cục form responsive. Cùng bắt đầu.

## 00:32 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Gắn kết label với input qua thuộc tính for và id. Mỗi trường nhập liệu đều có label đi kèm input. Đặc biệt với input , việc gắn label giúp người dùng bấm trực tiếp vào dòng chữ Tôi đồng ý nhận email phản hồi cũng tích chọn được ô vuông.. Lưu ý thuộc tính font. inherit cho các phần tử Form: Mặc định trình duyệt áp phông chữ riêng (thường là monospace trên textarea) và cỡ chữ nhỏ hơn cho input , select , textarea , button. Khai báo font: inherit, giúp tất cả ô nhập đồng bộ phông chữ với body.

## 01:16 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 10 contact form. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai10.html.

## 01:43 — Cấu trúc HTML

Mở tệp index.html. Trang dùng form với fieldset và legend, các cặp label gắn với input qua thuộc tính for và id. Có ô họ tên, email, số điện thoại, chủ đề select, nội dung textarea và nút gửi. Các trường bắt buộc dùng required. Các thẻ ngữ nghĩa chính gồm article, header, form.

## 02:07 — Định dạng CSS

Chuyển sang phần CSS. Form đặt trong card trắng, lưới hai cột cho các trường ngắn, textarea chiếm toàn bộ chiều ngang. Nhãn đậm, viền xanh teal khi focus. Media query chuyển lưới hai cột thành một cột trên mobile. Bảng màu chính gồm #f1f5f9, #ffffff, #0f766e, #334155, #cbd5e1.

## 02:34 — Chạy thử

Chạy thử biểu mẫu: nhấp vào từng ô để thấy viền focus, nhập thử họ tên và email. Nhấn gửi khi còn trống để trình duyệt nhắc trường bắt buộc. Thu nhỏ màn hình, các ô xếp thành một cột.

## 02:53 — Tổng kết

Tổng kết bài 10. Tạo dự án exercise 10 contact form, tệp chính index.html, khi nộp đổi tên thành bai10.html. Giải thích sự khác biệt giữa input , input , select và textarea , đồng thời bấm thử nút Nhập lại (type=reset) để chứng minh trình duyệt tự khôi phục trạng thái ban đầu của form.. Lỗi thường gặp: Dùng rule CSS input width: 100 phần trăm, chung cho mọi input , khiến cả input cũng bị kéo giãn rộng 100 phần trăm và đẩy dòng chữ nhãn lệch khỏi hàng.
