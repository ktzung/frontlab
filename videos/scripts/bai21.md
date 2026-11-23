# Bài 21 — Bố cục cổng thông tin 4 vùng với CSS Grid Areas

Dự án: exercise-21-portal-grid-areas · Tệp nộp: bai21.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 21, Bố cục cổng thông tin 4 vùng với CSS Grid Areas. Chúng ta sẽ cùng tạo dự án exercise 21 portal grid areas với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài luyện CSS Grid Areas — cách đặt tên vùng giúp bố cục trang lớn dễ đọc và dễ bảo trì. Cùng bắt đầu.

## 00:32 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Vẽ bản đồ lưới bằng grid-template-areas. Với bố cục 2 hàng × 3 cột, hàng đầu tiên cả 3 ô đều ghi banner banner banner, hàng thứ hai ghi menu main qc. Cách viết này trực quan như vẽ sơ đồ ASCII ngay trong CSS.. Chuyển đổi bản đồ lưới trên màn hình nhỏ (@media). Khi màn hình nhỏ hơn 820 pixel, ta chỉ cần đổi grid-template-columns: 1fr và sửa grid-template-areas thành 4 hàng dọc banner menu main qc mà không phải sửa bất kỳ dòng HTML nào.

## 01:16 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 21 portal grid areas. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai21.html.

## 01:48 — Cấu trúc HTML

Mở tệp index.html. Trang chia bốn vùng rõ ràng: header, nav, main và aside quảng cáo, footer. Mỗi vùng có tên trong grid-template-areas, nội dung bên trong là các tiêu đề và danh sách liên kết. Các thẻ ngữ nghĩa chính gồm header, nav, main, aside.

## 02:09 — Định dạng CSS

Chuyển sang phần CSS. Grid đặt tên vùng bằng grid-template-areas, cột trái 260 pixel, cột phải 220 pixel. Header và footer trải toàn chiều ngang. Bảng màu đỏ đô, trắng, xám. Media query chuyển về một cột và ẩn hoặc đưa aside xuống cuối. Bảng màu chính gồm #eceff1, #ffffff, #C62828, #8E0000, #FFE082.

## 02:43 — Chạy thử

Chạy thử: bốn vùng header, nav, main, aside hiển thị đúng vị trí. Thu nhỏ màn hình, grid chuyển thành một cột và các vùng xếp lần lượt.

## 03:02 — Tổng kết

Tổng kết bài 21. Tạo dự án exercise 21 portal grid areas, tệp chính index.html, khi nộp đổi tên thành bai21.html. Giải thích vì sao frameset bị loại bỏ khỏi HTML5 (gây hại SEO, khó bookmark URL con, không responsive) và cách grid-template-areas giải quyết triệt để bài toán này.. Lỗi thường gặp: Viết sai số lượng cột trong một hàng của grid-template-areas (ví dụ hàng 1 chỉ viết 2 từ banner banner trong khi hàng 2 có 3 từ menu main qc), làm toàn bộ khai báo Grid bị vô hiệu hóa.
