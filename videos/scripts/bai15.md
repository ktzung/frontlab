# Bài 15 — Ứng dụng Máy tính bỏ túi đơn giản

Dự án: exercise-15-simple-calculator · Tệp nộp: bai15.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 15, Ứng dụng Máy tính bỏ túi đơn giản. Chúng ta sẽ cùng tạo dự án exercise 15 simple calculator với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện event delegation, xử lý chuỗi biểu thức và cập nhật giao diện theo từng phím bấm. Cùng bắt đầu.

## 00:31 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Lưu trữ biểu thức hiển thị và chuyển đổi ký hiệu toán học. Trên giao diện, người dùng nhìn thấy các ký hiệu chuẩn toán học ×, ÷, −. Khi bấm nút =, hàm tính toán chuyển đổi: – ×→* – ÷→/ – −→- – phần trăm → /100. Xử lý nút đóng/mở ngoặc () và kiểm tra biểu thức hợp lệ. Đếm số ngoặc mở (và ngoặc đóng) hiện có trong biểu thức để tự động chèn (hoặc). Kiểm tra chuỗi chỉ chứa các ký tự số và toán tử hợp lệ (/^[0-9+\-*/.() ]+$/) trước khi tính giá trị và bắt lỗi bằng try catch.

## 01:14 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 15 simple calculator. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai15.html.

## 01:43 — Cấu trúc HTML

Mở tệp index.html. Máy tính gồm màn hình hiển thị biểu thức và kết quả, bên dưới là lưới bốn cột các nút số và toán tử. Mỗi nút mang thuộc tính data-key để JavaScript biết phím nào được bấm. Các thẻ ngữ nghĩa chính gồm main.

## 02:00 — Định dạng CSS

Chuyển sang phần CSS. Bàn phím dùng CSS Grid bốn cột, nút số màu xám, toán tử màu xanh, nút bằng màu xanh lá, nút xóa màu đỏ. Nền tối, nút có hiệu ứng nhấn và đổ bóng. Media query thu nhỏ máy tính trên điện thoại. Bảng màu chính gồm #1e293b, #0f172a, #111827, #022c22, #4ade80.

## 02:31 — JavaScript

Phần JavaScript. Chỉ gắn một listener click lên cả bàn phím, dùng event delegation để đọc data-key. Biểu thức hiển thị dùng ký hiệu × ÷ − nhưng trước khi tính phải chuyển về dấu sao, chia, trừ. Hàm kiểm tra chuỗi hợp lệ và cân bằng ngoặc trước khi gọi tính toán. Các hàm chính là tinhGiaTri. Sự kiện được lắng nghe gồm click.

## 02:57 — Chạy thử

Chạy thử: bấm bảy, nhân, tám, bằng, kết quả năm mươi sáu. Bấm xóa rồi tính một cộng hai, kết quả ba. Màn hình hiển thị cả biểu thức và kết quả.

## 03:16 — Tổng kết

Tổng kết bài 15. Tạo dự án exercise 15 simple calculator, tệp chính index.html, khi nộp đổi tên thành bai15.html. Giải thích kỹ thuật Ủy quyền sự kiện (Event Delegation) — chỉ gắn 1 addEventListener(click) duy nhất lên #ban-phim thay vì gắn 19 sự kiện riêng lẻ cho 19 nút bấm, và giải thích class.rong grid-column: span 2.. Lỗi thường gặp: Không chuyển đổi ký tự ×, ÷, − sang *, /, - trước khi tính toán khiến JavaScript báo lỗi SyntaxError.
