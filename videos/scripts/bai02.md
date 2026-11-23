# Bài 02 — Quảng cáo tour du lịch “Hành trình Trung Hoa”

Dự án: exercise-02-china-tour-ad · Tệp nộp: bai02.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 2, Quảng cáo tour du lịch Hành trình Trung Hoa. Chúng ta sẽ cùng tạo dự án exercise 02 china tour ad với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài học về float, dọn float bằng flow-root và cách kể câu chuyện tour du lịch bằng bố cục báo chí. Cùng bắt đầu.

## 00:29 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Đặt vị trí thẻ img khi dùng float. right: Để các đoạn văn bản tự động chảy bao quanh phía bên trái và phía dưới bức ảnh, thẻ img phải được đặt ngay sau thẻ h1 và phía trước đoạn p đầu tiên trong mã HTML.. Tạo nền vàng mù tạt và xử lý tràn chiều cao (clearfix). Sử dụng background: linear-gradient(160deg, #C9A227, #A8861B) trên.banner. Để đề phòng trường hợp ảnh cao hơn phần chữ làm ảnh tràn ra ngoài đáy khung.banner, ta thêm overflow: hidden (hoặc display: flow-root) cho.banner.. Xử lý Responsive trên màn hình hẹp. Khi màn hình nhỏ hơn 600 px, ảnh float: right rộng 260 pixel sẽ bóp nghẹt phần chữ bên trái. Ta bổ sung @media (max-width: 600 pixel) để hủy float: none, cho ảnh rộng 100 phần trăm nằm thành một khối riêng.

## 01:38 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 02 china tour ad. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai02.html.

## 02:09 — Cấu trúc HTML

Mở tệp index.html. Bài dùng article bọc toàn bộ nội dung, ảnh Vạn Lý Trường Thành đặt trước đoạn văn đầu, tiêu đề h1, đoạn sao p và các đoạn mô tả hành trình. Ảnh phải nằm trước nội dung thì float mới chảy đúng. Các thẻ ngữ nghĩa chính gồm article.

## 02:28 — Định dạng CSS

Chuyển sang phần CSS. Ảnh float sang phải với margin tạo khoảng thở. Article dùng display flow-root để chứa ảnh nổi, tránh tràn khung. Nền vàng gold, chữ nâu đậm, tiêu đề in hoa, media query xếp ảnh lên trên khi màn hình hẹp. Bảng màu chính gồm #f4f4f4, #C9A227, #A8861B, #ffffff.

## 02:55 — Chạy thử

Chạy thử trang quảng cáo: ảnh nằm bên phải, dòng chữ chảy vòng sang trái. Thu nhỏ màn hình, ảnh chuyển lên trên và nội dung xếp thành một cột để dễ đọc trên điện thoại.

## 03:15 — Tổng kết

Tổng kết bài 2. Tạo dự án exercise 02 china tour ad, tệp chính index.html, khi nộp đổi tên thành bai02.html. Chỉ rõ vị trí đặt thẻ img trước thẻ p đầu tiên để float: right hoạt động đúng, tác dụng của margin: 0 0 14 pixel 18 pixel để tạo khoảng thở bên trái ảnh, và vai trò của display: flow-root.. Lỗi thường gặp: Đặt thẻ img ở cuối thẻ article khiến ảnh bị tụt xuống dưới cùng thay vì nằm ngang hàng với đoạn văn đầu tiên.
