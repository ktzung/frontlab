# Bài 26 — Form đăng ký CLB Lập trình Web với Bootstrap

Dự án: exercise-26-club-signup · Tệp nộp: bai26.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 26, Form đăng ký CLB Lập trình Web với Bootstrap. Chúng ta sẽ cùng tạo dự án exercise 26 club signup với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện form Bootstrap kết hợp validation JavaScript và phản hồi trạng thái rõ ràng. Cùng bắt đầu.

## 00:33 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Tạo khung.card căn giữa. Đặt.card.shadow-sm.mx-auto với style=max-width: 720 pixel bên trong.container.py-4 để biểu mẫu có độ rộng vừa mắt trên màn hình lớn.. Chia lưới form.row.g-3. Biến chính thẻ form thành một hàng lưới (row) với khoảng cách 1rem (g-3). Nhờ đó, các thẻ div và div bên trong tự động căn chỉnh thẳng hàng.. Thiết lập Radio & Checkbox với form-check. Mỗi nút radio hoặc checkbox cần bọc trong.form-check, thẻ input đi kèm label có id khớp với for để người dùng bấm vào chữ cũng chọn được nút..

## 01:19 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 26 club signup. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai26.html.

## 01:47 — Cấu trúc trang

Mở tệp index.html. Form dùng row g-3, các cột col-md-6 để hai trường nằm một hàng. Có họ tên, mã sinh viên, email, select lớp, radio kỹ năng, textarea mục tiêu và checkbox cam kết. Thông báo kết quả là alert ẩn sẵn. Các thẻ ngữ nghĩa chính gồm form.

## 02:08 — Tùy biến CSS

Chuyển sang phần CSS. Chỉ cần vài quy tắc tùy biến cho card và khoảng cách. Còn lại dùng form-control, form-select, form-check, btn-success của Bootstrap. Media query do grid đảm nhiệm.

## 02:24 — Bootstrap

Phần Bootstrap. Sự kiện submit chặn mặc định, kiểm tra các trường bắt buộc, hiện alert thành công và vô hiệu hóa nút gửi tạm thời. Sự kiện reset ẩn alert và khôi phục trạng thái ban đầu. Sự kiện được lắng nghe gồm submit, reset.

## 02:41 — Chạy thử

Chạy thử: nhập họ tên, mã sinh viên, email, chọn lớp và kỹ năng, bấm đăng ký. Alert xanh xác nhận thành công. Bấm nhập lại để xóa form và ẩn thông báo.

## 03:00 — Tổng kết

Tổng kết bài 26. Tạo dự án exercise 26 club signup, tệp chính index.html, khi nộp đổi tên thành bai26.html. Bài luyện form Bootstrap kết hợp validation JavaScript và phản hồi trạng thái rõ ràng. Lỗi thường gặp: quên kiểm tra lại giao diện trên màn hình nhỏ.
