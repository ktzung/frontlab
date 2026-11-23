# Bài 25 — Trang du lịch với Navbar & Grid (Bootstrap 5)

Dự án: exercise-25-bootstrap-travel · Tệp nộp: bai25.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 25, Trang du lịch với Navbar & Grid (Bootstrap 5). Chúng ta sẽ cùng tạo dự án exercise 25 bootstrap travel với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài đầu của Bootstrap: làm quen navbar, grid 12 cột và utility class thay cho CSS tự viết. Cùng bắt đầu.

## 00:35 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Nhúng Bootstrap 5.3 CSS & JS Bundle. Trong thẻ head , nhúng tệp CSS từ CDN https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/ bootstrap.min.css. Trước thẻ đóng , nhúng bootstrap.bundle.min. Xây dựng Navbar chuẩn Bootstrap 5. Tạo nav. Nút bấm.navbar-toggler cần có hai thuộc tính data-bs-toggle=collapse và data-bs-target=#menu trỏ đúng tới id=menu của khối.collapse.navbar-collapse.. Thiết lập Hero Banner và Lưới 3 cột.col-md-4. Mở div. Đặt khối Hero ở trên, tiếp theo là div chứa 3 khối div..

## 01:39 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 25 bootstrap travel. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai25.html.

## 02:10 — Cấu trúc trang

Mở tệp index.html. Trang dùng navbar expand-lg với brand, nút toggler và menu ba mục. Hero nằm trong container, bên dưới là row g-4 chứa ba card col-md-4 cho ba điểm đến. Footer nền tối. Các thẻ ngữ nghĩa chính gồm nav, footer.

## 02:30 — Tùy biến CSS

Chuyển sang phần CSS. Chỉ cần một quy tắc nhỏ cho card-img-top: cao 180 pixel và object-fit cover. Các thành phần còn lại dùng utility Bootstrap như shadow-sm, rounded-3, text-muted, btn-outline-primary.

## 02:49 — Bootstrap

Phần Bootstrap. Bootstrap bundle xử lý nút thu gọn menu trên mobile mà không cần viết JavaScript riêng. Grid mười hai cột tự chuyển từ ba cột sang một cột khi màn hình nhỏ hơn breakpoint md.

## 03:04 — Chạy thử

Chạy thử: navbar xanh với ba mục, hero và ba card điểm đến. Thu nhỏ màn hình, menu thu gọn thành nút hamburger và ba card xếp dọc.

## 03:23 — Tổng kết

Tổng kết bài 25. Tạo dự án exercise 25 bootstrap travel, tệp chính index.html, khi nộp đổi tên thành bai25.html. Bài đầu của Bootstrap: làm quen navbar, grid 12 cột và utility class thay cho CSS tự viết. Lỗi thường gặp: quên kiểm tra lại giao diện trên màn hình nhỏ.
