# Bài 17 — Kiểm tra dữ liệu biểu mẫu bằng JavaScript (Form Validation)

Dự án: exercise-17-form-validation · Tệp nộp: bai17.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 17, Kiểm tra dữ liệu biểu mẫu bằng JavaScript (Form Validation). Chúng ta sẽ cùng tạo dự án exercise 17 form validation với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện regex, kiểm tra dữ liệu phía client và phản hồi lỗi ngay tại từng trường. Cùng bắt đầu.

## 00:33 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Viết hàm dùng chung datTrangThai(inputEl, tbEl, hopLe, thong Diep). Thay vì lặp lại mã thêm/xóa class cho từng ô, ta viết một hàm nhận vào phần tử input và phần tử thông báo.tb. Nếu hopLe === true, hàm gắn class ok và in 3 Hợp lệ, ngược lại gắn class loi và in ✗ $ thongDiep.. Kiểm tra từng quy tắc nghiệp vụ. – Họ tên: hoTen.trim().length >= 2. – Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()). – Mật khẩu: matKhau.length >= 6. – Xác nhận mật khẩu: xacNhan.length >= 6 && xacNhan === matKhau.

## 01:25 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 17 form validation. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai17.html.

## 01:53 — Cấu trúc HTML

Mở tệp index.html. Form đăng ký gồm họ tên, email, mật khẩu, xác nhận mật khẩu, mỗi trường có một div thông báo lỗi riêng. Form đặt novalidate để JavaScript tự kiểm tra thay vì trình duyệt. Các thẻ ngữ nghĩa chính gồm form.

## 02:11 — Định dạng CSS

Chuyển sang phần CSS. Trường hợp lệ có viền xanh, không hợp lệ viền đỏ và dòng thông báo đỏ. Nút đăng ký màu cam, card nền trắng. Media query xếp các trường thành một cột. Bảng màu chính gồm #fff7ed, #ffffff, #fed7aa, #c2410c, #6b7280.

## 02:34 — JavaScript

Phần JavaScript. Mỗi trường có hàm kiểm tra riêng: tên không rỗng, email đúng biểu thức chính quy, mật khẩu đủ tám ký tự, xác nhận trùng khớp. Sự kiện input kiểm tra lại ngay khi gõ, sự kiện submit chặn mặc định và chỉ báo thành công khi tất cả hợp lệ. Các hàm chính là datTrangThai, kiemTraTatCa. Sự kiện được lắng nghe gồm submit, input.

## 03:01 — Chạy thử

Chạy thử: bấm đăng ký với dữ liệu sai, các dòng lỗi hiện ra. Sửa email đúng định dạng, nhập mật khẩu và xác nhận khớp, bấm đăng ký, form báo thành công.

## 03:20 — Tổng kết

Tổng kết bài 17. Tạo dự án exercise 17 form validation, tệp chính index.html, khi nộp đổi tên thành bai17.html. Giải thích ý nghĩa thuộc tính novalidate trên thẻ form (tắt bong bóng cảnh báo mặc định của trình duyệt để nhường quyền hiển thị thông báo tùy chỉnh bằng JavaScript) và phân tích biểu thức chính quy /^[^\s@]+@[^\s@]+\.[^\s@]+$/.. Lỗi thường gặp: Dùng toán tử || hoặc dừng hàm ngay ở lỗi đầu tiên (if (!kqTen) return,) khiến các ô bị sai phía dưới không hiện thông báo lỗi đồng thời.
