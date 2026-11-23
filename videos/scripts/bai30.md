# Bài 30 — Bảng điều khiển quản trị Admin Dashboard

Dự án: exercise-30-admin-dashboard · Tệp nộp: bai30.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 30, Bảng điều khiển quản trị Admin Dashboard. Chúng ta sẽ cùng tạo dự án exercise 30 admin dashboard với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài tổng kết chương Bootstrap: dashboard nhiều vùng, KPI, bảng và thanh tiến độ. Cùng bắt đầu.

## 00:30 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Thiết lập bố cục 2 cột aside + main. Tạo div div. Cột bên trái là aside , cột bên phải là main.. Xây dựng 4 thẻ KPI với.progress. Tạo div chứa 4 khối div. Trong mỗi.card-body, hiển thị nhãn.text-muted.small, con số lớn h3.fw-bold, và thanh div.. Xây dựng danh sách.list-group-flush. Tạo.card.shadow-sm chứa.card-header.bg-white.fw-bold và ul.list-group.list-group-flush. Mỗi thẻ li.list-group-item dùng.d-flex.justify-content-between. align-items-center để căn tên chương sang trái và.badge sang phải.

## 01:16 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 30 admin dashboard. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai30.html.

## 01:44 — Cấu trúc trang

Mở tệp index.html. Dashboard có sidebar dọc với logo và menu, vùng main chứa header, bốn thẻ KPI, bảng bài tập gần đây và tiến độ. Bố cục dùng flex và grid của Bootstrap. Các thẻ ngữ nghĩa chính gồm aside, main.

## 02:02 — Tùy biến CSS

Chuyển sang phần CSS. Sidebar nền tối cố định chiều rộng, main nền xám nhạt. Bốn thẻ KPI dùng col-md-3, mỗi thẻ có số lớn và thanh tiến độ. Bảng gọn, badge trạng thái màu. Media query ẩn hoặc thu gọn sidebar trên mobile.

## 02:20 — Bootstrap

Phần Bootstrap. Các thành phần chủ yếu là HTML và class Bootstrap, thanh tiến độ dùng progress với width phần trăm. Bài tập trung vào bố cục dashboard và phân cấp thông tin.

## 02:34 — Chạy thử

Chạy thử dashboard: sidebar tối bên trái, bốn thẻ KPI phía trên, bảng bài tập và thanh tiến độ bên dưới. Thu nhỏ màn hình, sidebar thu gọn và các thẻ KPI xếp dọc.

## 02:53 — Tổng kết

Tổng kết bài 30. Tạo dự án exercise 30 admin dashboard, tệp chính index.html, khi nộp đổi tên thành bai30.html. Bài tổng kết chương Bootstrap: dashboard nhiều vùng, KPI, bảng và thanh tiến độ. Lỗi thường gặp: quên kiểm tra lại giao diện trên màn hình nhỏ.
