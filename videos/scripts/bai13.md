# Bài 13 — Đồng hồ số điện tử thời gian thực

Dự án: exercise-13-digital-clock · Tệp nộp: bai13.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 13, Đồng hồ số điện tử thời gian thực. Chúng ta sẽ cùng tạo dự án exercise 13 digital clock với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện timer, Date và kỹ thuật sinh DOM động từ dữ liệu thời gian. Cùng bắt đầu.

## 00:29 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Thuật toán tách một số 0..59 thành 2 ảnh chữ số. Với một số nguyên n (ví dụ n = 8 hoặc n = 45): – Chữ số hàng chục là Math.floor(n / 10) (với 8 cho 0, với 45 cho 4). – Chữ số hàng đơn vị là n phần trăm 10 (với 8 cho 8, với 45 cho 5). Viết hàm haiChuSo Anh(n) trả về 2 thẻ img img.. Gọi capNhat() ngay lần đầu trước khi setInterval. Nếu chỉ gọi set Interval(capNhat, 1000), trang web sẽ bị trống trắng trong 1 giây đầu tiên. Do đó ta gọi capNhat() ngay lập tức một lần rồi mới đăng ký setInterval(cap Nhat, 1000).

## 01:21 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 13 digital clock. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai13.html.

## 01:52 — Cấu trúc HTML

Mở tệp index.html. Trang chỉ có hai khối: một khung đồng hồ rỗng có id và một khung lời chào. JavaScript sinh các thẻ img cho từng chữ số và dấu hai chấm, nên HTML giữ rất gọn.

## 02:07 — Định dạng CSS

Chuyển sang phần CSS. Khung đồng hồ nền đen, các ảnh số cao 52 pixel. Khung lời chào nền trắng, chữ đỏ in nghiêng, bo góc và đổ bóng. Body dùng Flexbox căn giữa cả hai khối, media query cho phép xuống dòng trên màn hình hẹp. Bảng màu chính gồm #f2f2f2, #000000, #ffffff, #c62828.

## 02:35 — JavaScript

Phần JavaScript. Hàm cập nhật lấy giờ, phút, giây từ new Date. Mỗi số được tách hàng chục và hàng đơn vị rồi sinh ảnh tương ứng, dấu hai chấm là ảnh riêng. setInterval gọi lại mỗi giây. Lời chào thay đổi theo giờ trong ngày. Các hàm chính là capAnhHaiChuSo, layLoiChao, capNhatDongHo.

## 02:59 — Chạy thử

Chạy thử: đồng hồ chạy từng giây, ảnh số thay đổi theo thời gian thực và lời chào buổi sáng hiển thị bên cạnh. Thu nhỏ màn hình, hai khối tự xuống dòng và vẫn căn giữa.

## 03:18 — Tổng kết

Tổng kết bài 13. Tạo dự án exercise 13 digital clock, tệp chính index.html, khi nộp đổi tên thành bai13.html. Giải thích công thức Math. floor(n / 10) và n phần trăm 10 để biến một số nguyên bất kỳ thành 2 chữ số (kể cả khi số nhỏ hơn 10 như 05 giây).. Lỗi thường gặp: Dùng phép chia thường n / 10 mà quên Math.floor(), dẫn đến đường dẫn ảnh bị lẻ thập phân như 04.5.gif và ảnh bị lỗi không hiển thị.
