# Bài 24 — Bảng giá dịch vụ 3 gói chuyên nghiệp (Pricing Table)

Dự án: exercise-24-pricing-table · Tệp nộp: bai24.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 24, Bảng giá dịch vụ 3 gói chuyên nghiệp (Pricing Table). Chúng ta sẽ cùng tạo dự án exercise 24 pricing table với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện bảng giá chuyên nghiệp: phân cấp thị giác, nhấn gói chính và hiệu ứng hover tinh tế. Cùng bắt đầu.

## 00:33 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Tạo điểm nhấn thị giác (Visual Hierarchy) cho gói.hot. Trong thiết kế giao diện thương mại điện tử và SaaS, gói khuyên dùng ở giữa luôn được làm nổi bật bằng 3 yếu tố kết hợp: (1) Viền đậm màu nhấn 2 pixel solid #4f46 e5, (2) Dịch chuyển lên trên 10 pixel bằng transform: translateY(-10 pixel). Đẩy nút bấm xuống đáy thẻ đều nhau bằng Flexbox dọc. Đặt display: flex, flex-direction: column, trên.goi và flex: 1 trên danh sách ul để dù gói Pro có 4 dòng quyền lợi còn hai gói bên cạnh chỉ có 3 dòng, các nút bấm ở đáy cả 3 thẻ vẫn nằm thẳng hàng.

## 01:24 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 24 pricing table. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai24.html.

## 01:52 — Cấu trúc HTML

Mở tệp index.html. Trang có tiêu đề chuyên đề và ba card gói dịch vụ: Basic, Pro, Enterprise. Mỗi card gồm tên gói, giá, danh sách quyền lợi và nút đăng ký. Gói Pro được làm nổi bật. Các thẻ ngữ nghĩa chính gồm main, article.

## 02:11 — Định dạng CSS

Chuyển sang phần CSS. Grid ba cột đều nhau, card trắng bo góc, gói Pro có viền và nhãn phổ biến. Giá lớn, đơn vị nhỏ. Hover card nâng nhẹ và đổ bóng. Media query xếp ba card thành một cột. Bảng màu chính gồm #eef2ff, #f8fafc, #1e293b, #64748b, #ffffff.

## 02:37 — Bootstrap

Phần Bootstrap.

## 02:39 — Chạy thử

Chạy thử: ba gói xếp cạnh nhau, gói Pro nổi bật ở giữa. Rê chuột lên card để thấy hiệu ứng nâng. Thu nhỏ màn hình, các gói xếp dọc.

## 02:58 — Tổng kết

Tổng kết bài 24. Tạo dự án exercise 24 pricing table, tệp chính index.html, khi nộp đổi tên thành bai24.html. Giải thích vì sao dùng transform: translateY(-10 pixel) để nhấc gói.hot lên cao thay vì dùng margin-top: -10 pixel (transform không làm xô lệch dòng lưới của các phần tử lân cận).. Lỗi thường gặp: Trên màn hình điện thoại (1 cột), quên tắt transform: translateY(-10 pixel) khiến thẻ gói Pro ở giữa trồi lên đè sát vào đáy thẻ Starter phía trên.
