# Bài 20 — Phòng thí nghiệm hiệu ứng ảnh với CSS3 & SVG Filter

Dự án: exercise-20-css-image-lab · Tệp nộp: bai20.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 20, Phòng thí nghiệm hiệu ứng ảnh với CSS3 & SVG Filter. Chúng ta sẽ cùng tạo dự án exercise 20 css image lab với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện filter CSS, SVG filter và kỹ thuật sinh nút điều khiển từ dữ liệu. Cùng bắt đầu.

## 00:34 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Tạo chữ vàng ánh kim bằng -webkit-background-clip. text: Trên.chu-nghe-thuat, khai báo background: linear-gradient(90deg, #d4af37, #f5e6a3, #b8860b), -webkit-background-clip: text, background-clip: text, color: transparent. Kết hợp mảng cấu hình hiệu ứng trong JavaScript. Định nghĩa danh sách 13 hiệu ứng gồm ten, filter, transform. Khi bấm nút, gỡ class.on khỏi nút cũ, thêm.on vào nút vừa bấm, và gán anh.style.filter cùng anh.style.transform.

## 01:20 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 20 css image lab. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai20.html.

## 01:51 — Cấu trúc HTML

Mở tệp index.html. Trang trưng bày một ảnh hoa hồng và một thanh nút được JavaScript sinh từ mảng hiệu ứng. Ảnh có id để áp dụng filter và transform. Có thêm bộ lọc SVG định nghĩa hiệu ứng sóng.

## 02:06 — Định dạng CSS

Chuyển sang phần CSS. Khung ảnh nền tối, ảnh giữ nguyên kích thước. Thanh nút nằm dưới, nút đang chọn có màu vàng. Hiệu ứng dùng filter như grayscale, sepia, blur, drop-shadow và transform lật ảnh. Media query cho thanh nút xuống dòng. Bảng màu chính gồm #101418, #eeeeee, #1c2226, #d4af37, #f5e6a3.

## 02:38 — JavaScript

Phần JavaScript. Mảng hiệu ứng chứa tên, filter và transform. Vòng lặp tạo từng nút, gắn sự kiện click: bỏ trạng thái chọn ở các nút cũ, thêm cho nút mới, rồi gán filter và transform cho ảnh. Kỹ thuật này tách dữ liệu hiệu ứng khỏi mã giao diện. Sự kiện được lắng nghe gồm click.

## 02:59 — Chạy thử

Chạy thử: bấm nút Glow, ảnh phát sáng vàng, bấm Wave, ảnh nghiêng nhẹ, bấm FlipH, ảnh lật ngang. Mỗi lần chỉ một nút được chọn.

## 03:18 — Tổng kết

Tổng kết bài 20. Tạo dự án exercise 20 css image lab, tệp chính index.html, khi nộp đổi tên thành bai20.html. Giải thích lý do phải thay thế style=filter: progid:DXImageTransform.Microsoft của Internet Explorer cũ bằng CSS3 filter và transform chuẩn W3C.. Lỗi thường gặp: Khi chuyển từ nút FlipH (transform: scaleX(-1)) sang nút Gray (filter: grayscale(1)), nếu quên đặt lại anhHoa.style. transform = none thì bức ảnh vẫn bị lộn ngược.
