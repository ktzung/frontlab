# Bài 14 — Trang chuyên đề “6 Kỳ quan thiên nhiên Việt Nam”

Dự án: exercise-14-vietnam-wonders · Tệp nộp: bai14.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 14, Trang chuyên đề 6 Kỳ quan thiên nhiên Việt Nam. Chúng ta sẽ cùng tạo dự án exercise 14 vietnam wonders với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài luyện lưới ảnh chuyên đề, giữ tỉ lệ ảnh đồng đều và chú thích rõ ràng. Cùng bắt đầu.

## 00:28 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Thiết kế cấu trúc thẻ.the chuẩn mực. Mỗi thẻ article chứa img ở trên cùng, tiếp theo là h2 màu #1b5e20 và p mô tả. Đặt overflow: hidden trên.the để 2 góc trên của ảnh tự bo tròn theo khung thẻ.. Ứng dụng mảng dữ liệu kết hợp map() (tùy chọn nâng cao trong Chương 2). Ngoài việc viết tĩnh 6 thẻ HTML, ta có thể lưu danh sách 6 kỳ quan trong mảng đối tượng DANH_SACH_KY_QUAN để dễ dàng lọc hoặc tìm kiếm khi mở rộng. Trong mã mẫu dưới đây, cả cấu trúc HTML tường minh đều được giữ sẵn để hiển thị tức thì.

## 01:13 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 14 vietnam wonders. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai14.html.

## 01:44 — Cấu trúc HTML

Mở tệp index.html. Trang chuyên đề có header xanh, lưới sáu figure cho sáu kỳ quan, mỗi figure gồm ảnh và figcaption tên địa danh. Phần mở đầu dùng đoạn sapo mô tả chủ đề. Các thẻ ngữ nghĩa chính gồm main, header, article.

## 02:03 — Định dạng CSS

Chuyển sang phần CSS. Grid ba cột, ảnh cao đồng nhất nhờ object-fit cover, chú thích nền vàng nhạt. Bảng màu xanh lá và vàng. Media query giảm còn hai cột rồi một cột, khoảng cách ảnh thu nhỏ theo. Bảng màu chính gồm #f5f7f4, #ffffff, #2E7D32, #FFEB3B, #1b5e20.

## 02:28 — Chạy thử

Chạy thử: sáu kỳ quan xếp thành lưới ba nhân hai. Thu nhỏ màn hình, lưới chuyển về hai cột rồi một cột, ảnh vẫn giữ khung đều.

## 02:48 — Tổng kết

Tổng kết bài 14. Tạo dự án exercise 14 vietnam wonders, tệp chính index.html, khi nộp đổi tên thành bai14.html. Chỉ rõ cách dùng border-bottom: 3 pixel solid #2E7D32 ngay trên thẻ img để tạo dải màu nhấn tách biệt phần ảnh và phần chữ trong thẻ.. Lỗi thường gặp: Quên margin: 0 trên đoạn.dan-nhap, khiến khoảng trắng trên/dưới đoạn dẫn nhập bị rộng bất thường.
