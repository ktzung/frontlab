# Bài 29 — Bảng dữ liệu sinh viên & Phân trang

Dự án: exercise-29-student-pagination · Tệp nộp: bai29.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 29, Bảng dữ liệu sinh viên & Phân trang. Chúng ta sẽ cùng tạo dự án exercise 29 student pagination với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện bảng dữ liệu lớn, badge trạng thái và cấu trúc phân trang chuẩn Bootstrap. Cùng bắt đầu.

## 00:31 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Tạo khung.card và thanh tiêu đề Flexbox. Đặt.d-flex.justify-content-between.align-items-center.mb-3 để đẩy tiêu đề sang trái và huy hiệu.badge.bg-primary sang phải.. Xây dựng bảng.table-striped.table-hover. Bọc table trong div. Dùng thead để tạo hàng tiêu đề nền đen chữ trắng nổi bật.. Thêm thanh.pagination và tương tác chọn trang. Đặt ul ở cuối thẻ.card-body. Có thể bổ sung vài dòng JavaScript nhỏ để khi bấm vào số trang 1, 2, 3 thì lớp.active chuyển sang trang tương ứng.

## 01:14 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 29 student pagination. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai29.html.

## 01:43 — Cấu trúc trang

Mở tệp index.html. Trang có bảng table-hover striped với các cột số thứ tự, mã sinh viên, họ tên, lớp, điểm và trạng thái. Trạng thái dùng badge xanh hoặc vàng. Dưới bảng là thanh pagination. Các thẻ ngữ nghĩa chính gồm table, nav.

## 02:02 — Tùy biến CSS

Chuyển sang phần CSS. Card bọc bảng có shadow, header bảng nền xanh nhạt. Badge Đạt màu xanh, Thi lại màu vàng. Pagination dùng component Bootstrap. Media query cho phép cuộn ngang bảng.

## 02:18 — Bootstrap

Phần Bootstrap. Bài này tập trung vào trình bày dữ liệu và component tĩnh của Bootstrap, thanh phân trang minh họa cấu trúc page-item, page-link và trạng thái active, disabled.

## 02:32 — Chạy thử

Chạy thử: bảng sinh viên có header xanh, badge trạng thái rõ ràng. Cuộn xuống xem thanh phân trang với trang một đang active. Thu nhỏ màn hình, bảng cuộn ngang thay vì vỡ cột.

## 02:51 — Tổng kết

Tổng kết bài 29. Tạo dự án exercise 29 student pagination, tệp chính index.html, khi nộp đổi tên thành bai29.html. Bài luyện bảng dữ liệu lớn, badge trạng thái và cấu trúc phân trang chuẩn Bootstrap. Lỗi thường gặp: quên kiểm tra lại giao diện trên màn hình nhỏ.
