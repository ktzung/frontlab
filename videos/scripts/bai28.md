# Bài 28 — Trình chiếu ảnh Carousel & Tabs

Dự án: exercise-28-carousel-tabs · Tệp nộp: bai28.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 28, Trình chiếu ảnh Carousel & Tabs. Chúng ta sẽ cùng tạo dự án exercise 28 carousel tabs với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện hai component tương tác phổ biến: carousel ảnh và tab nội dung. Cùng bắt đầu.

## 00:31 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Xây dựng #trinh.carousel.slide. Thêm data-bs-ride= carousel vào #trinh nếu muốn trình chiếu tự động chạy khi mở trang. Đặt 3 nút chỉ mục trong.carousel-indicators và 3 khối.carousel-item trong.carousel-inner.. Thêm nút điều hướng Prev / Next. Đặt 2 nút.carousel-control-prev và.carousel-control-next có data-bs-target=#trinh và data-bs-slide=prev / next.. Xây dựng ul.nav.nav-pills và.tab-content. Tạo 3 nút bấm trong ul.nav.nav-pills trỏ tới #t1, #t2, #t3. Bên dưới tạo div chứa 3.tab-pane.fade (trong đó #t1 có thêm.show.active).

## 01:21 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 28 carousel tabs. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai28.html.

## 01:52 — Cấu trúc trang

Mở tệp index.html. Trang có carousel ba ảnh với nút trước sau và chấm chỉ mục, bên dưới là nav pills ba tab: Giới thiệu, Lịch trình, Chi phí. Mỗi tab là một tab-pane.

## 02:06 — Tùy biến CSS

Chuyển sang phần CSS. Carousel bo góc, ảnh cao đồng nhất, chữ trên ảnh có lớp phủ tối. Tab active dùng màu xanh. Chỉ tinh chỉnh vài chi tiết, còn lại là component Bootstrap.

## 02:21 — Bootstrap

Phần Bootstrap. Bootstrap bundle tự chạy carousel, nút chuyển slide và tab. Không cần viết mã điều khiển thủ công, chỉ cần đúng data-bs-target và data-bs-slide.

## 02:34 — Chạy thử

Chạy thử: bấm nút next để chuyển sang ảnh thứ hai của carousel. Bấm tab Lịch trình để đổi nội dung bên dưới. Thu nhỏ màn hình, carousel và tab vẫn hoạt động.

## 02:53 — Tổng kết

Tổng kết bài 28. Tạo dự án exercise 28 carousel tabs, tệp chính index.html, khi nộp đổi tên thành bai28.html. Bài luyện hai component tương tác phổ biến: carousel ảnh và tab nội dung. Lỗi thường gặp: quên kiểm tra lại giao diện trên màn hình nhỏ.
