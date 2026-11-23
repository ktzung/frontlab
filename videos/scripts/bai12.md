# Bài 12 — Ứng dụng In lịch tờ theo Ngày – Tháng – Năm

Dự án: exercise-12-print-calendar · Tệp nộp: bai12.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 12, Ứng dụng In lịch tờ theo Ngày – Tháng – Năm. Chúng ta sẽ cùng tạo dự án exercise 12 print calendar với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài đầu của chương JavaScript: làm quen Date, xử lý submit và cập nhật DOM mà không tải lại trang. Cùng bắt đầu.

## 00:33 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Lưu ý quan trọng về chỉ số tháng trong new Date(). Trong JavaScript, tham số tháng (monthIndex) của hàm tạo new Date(nam, thang - 1, ngay) được đánh số từ 0 (Tháng 1) đến 11 (Tháng 12). Lấy tên Thứ tiếng Việt bằng Intl.DateTimeFormat (hoặc mảng tên thứ). Ta có thể dùng mảng const TEN_THU = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'] kết hợp ngayDate. getDay(), hoặc dùng chuẩn quốc tế hóa new Intl.DateTimeFormat('vi-VN', weekday: 'long').format(ngayDate).

## 01:19 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 12 print calendar. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai12.html.

## 01:50 — Cấu trúc HTML

Mở tệp index.html. Trang gồm khối tờ lịch với bốn dòng năm, tháng, ngày, thứ, dòng lời chào theo giờ, và form nhập ngày tháng năm. Các vùng có id để JavaScript cập nhật trực tiếp. Các thẻ ngữ nghĩa chính gồm article, form.

## 02:08 — Định dạng CSS

Chuyển sang phần CSS. Tờ lịch nền trắng, số ngày rất lớn màu đỏ, tháng và thứ màu xanh. Form có viền xanh hai pixel, các ô nhập số gọn trong một hàng. Nền giấy lặp từ ảnh, media query xếp các ô nhập dọc trên mobile. Bảng màu chính gồm #C62828, #1565C0, #eceff1, #cccccc, #ffffff.

## 02:37 — JavaScript

Phần JavaScript. Khi submit, sự kiện được chặn mặc định bằng preventDefault. Hàm tạo đối tượng Date với tháng trừ một vì JavaScript đếm tháng từ không. Tên thứ lấy từ mảng hoặc Intl.DateTimeFormat với locale tiếng Việt. Lời chào chia theo giờ: trước mười hai giờ là sáng, trước mười tám giờ là chiều, còn lại là tối. Các hàm chính là layLoiChao, capNhatLich. Sự kiện được lắng nghe gồm submit.

## 03:08 — Chạy thử

Chạy thử: đổi ngày về mùng một tháng một năm hai nghìn không trăm hai mươi sáu, bấm In lịch. Tờ lịch cập nhật ngay thứ trong tuần và lời chào, trang không bị tải lại.

## 03:27 — Tổng kết

Tổng kết bài 12. Tạo dự án exercise 12 print calendar, tệp chính index.html, khi nộp đổi tên thành bai12.html. Giải thích vì sao trong new Date(nam, thang - 1, ngay) phải lấy thang - 1, và vì sao doiTuong Ngay.getDay() trả về 0 cho Chủ nhật chứ không phải Thứ hai.. Lỗi thường gặp: Quên gọi suKien.preventDefault() trong hàm xử lý submit, khiến mỗi lần bấm nút In lịch trang web lại tự tải lại và quay về ngày mặc định.
