# Bài 07 — Trang chương trình khuyến mãi dầu gội Double Rich

Dự án: exercise-07-double-rich-promotion · Tệp nộp: bai07.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 7, Trang chương trình khuyến mãi dầu gội Double Rich. Chúng ta sẽ cùng tạo dự án exercise 07 double rich promotion với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài luyện bố cục khuyến mãi nổi bật, phân cấp thị giác bằng màu đỏ và vàng, và giữ thông tin điều kiện dễ đọc. Cùng bắt đầu.

## 00:30 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Tổ chức phần đầu gồm 2 dải màu tương phản. Đặt header nền đỏ thẫm (#C8102E) chứa h1 , ngay bên dưới là div nền hồng phấn (#FBE3E8) chứa khẩu hiệu chương trình.. Tạo vạch ngăn cách dọc bằng CSS Grid hoặc border-right. Cách thanh lịch nhất là khai báo.than-bai có 3 cột grid-template-columns: 1fr 1 pixel 1fr, gap: 22 pixel, và dùng phần tử giả.than-bai before content: , background: #e0e0e0, grid-column: 2, (hoặc đặt border-right: 1 pixel solid #e0e0e0.

## 01:18 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 07 double rich promotion. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai07.html.

## 01:49 — Cấu trúc HTML

Mở tệp index.html. Trang khuyến mãi gồm header đỏ, khối hero giới thiệu chương trình, ảnh sản phẩm, danh sách quà tặng và điều kiện tham gia. Thông tin nổi bật dùng các khối section riêng. Các thẻ ngữ nghĩa chính gồm article, header, section.

## 02:08 — Định dạng CSS

Chuyển sang phần CSS. Bố cục Grid hai cột cho ảnh và nội dung, nền đỏ trắng theo thương hiệu. Giá và nhãn khuyến mãi dùng chữ đậm, nền vàng. Media query đưa ảnh lên trước và giảm khoảng đệm trên mobile. Bảng màu chính gồm #eceff1, #ffffff, #C8102E, #FBE3E8, #e0e0e0.

## 02:34 — Chạy thử

Chạy thử: khối khuyến mãi đỏ nổi bật, ảnh sản phẩm bên cạnh nội dung. Cuộn xuống xem quà tặng và điều kiện. Thu nhỏ màn hình, ảnh chuyển lên trên, chữ vẫn rõ.

## 02:55 — Tổng kết

Tổng kết bài 7. Tạo dự án exercise 07 double rich promotion, tệp chính index.html, khi nộp đổi tên thành bai07.html. Giải thích cách kết hợp grid-template-columns: 1fr 1 pixel 1fr ở cấp cha và float: right cho ảnh sản phẩm bên trong cột 1.. Lỗi thường gặp: Đặt ảnh float: right ở ngoài thẻ section cột 1 khiến bức ảnh bị coi là một ô thứ 3 trong CSS Grid và làm vỡ bố cục 2 cột.
