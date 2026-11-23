# Bài 27 — Trang sản phẩm du lịch với Card, Modal & Accordion

Dự án: exercise-27-travel-showcase · Tệp nộp: bai27.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 27, Trang sản phẩm du lịch với Card, Modal & Accordion. Chúng ta sẽ cùng tạo dự án exercise 27 travel showcase với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện component Bootstrap có tương tác: card, modal dùng chung và accordion. Cùng bắt đầu.

## 00:33 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Dựng lưới 3 thẻ.card.h-100. Sử dụng.col-sm-6.col-lg-4 để đạt khả năng đáp ứng 3 cấp độ màn hình. Trên mỗi nút Chi tiết, gắn thêm thuộc tính data-title và data-info để truyền thông tin riêng của từng địa danh vào Modal.. Dựng cấu trúc.accordion#ac. Mỗi.accordion-item gồm h2. accordion-header > button.accordion-button và khối nội dung.accordion-collapse.collapse. Mục đầu tiên có thêm lớp.show ở phần nội dung, còn mục thứ hai có thêm lớp.collapsed ở nút bấm.. Dựng.modal.fade#md và lắng nghe sự kiện show.bs.modal. Sử dụng sự kiện chuẩn show.bs.modal của Bootstrap 5 (event.relatedTarget) để lấy tên địa danh và thông tin từ nút vừa bấm, cập nhật vào.modal-title và. modal-body.

## 01:33 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 27 travel showcase. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai27.html.

## 02:05 — Cấu trúc trang

Mở tệp index.html. Ba card điểm đến có nút Xem chi tiết mở cùng một modal. Modal chứa tiêu đề, thân và nút đóng. Bên dưới là accordion hai mục giới thiệu và lịch trình.

## 02:19 — Tùy biến CSS

Chuyển sang phần CSS. Card dùng h-100 và shadow-sm, ảnh card-img-top cao đồng nhất. Modal và accordion dùng component Bootstrap, chỉ tinh chỉnh bo góc và khoảng cách. Media query do grid đảm nhiệm.

## 02:35 — Bootstrap

Phần Bootstrap. Bootstrap bundle bắt sự kiện show.bs.modal để đọc data-* trên nút được bấm và đổ nội dung tương ứng vào modal. Collapse của accordion tự xử lý đóng mở.

## 02:49 — Chạy thử

Chạy thử: bấm Xem chi tiết ở card đầu, modal mở với đúng thông tin điểm đến. Đóng modal rồi mở mục thứ hai của accordion để xem lịch trình.

## 03:08 — Tổng kết

Tổng kết bài 27. Tạo dự án exercise 27 travel showcase, tệp chính index.html, khi nộp đổi tên thành bai27.html. Bài luyện component Bootstrap có tương tác: card, modal dùng chung và accordion. Lỗi thường gặp: quên kiểm tra lại giao diện trên màn hình nhỏ.
