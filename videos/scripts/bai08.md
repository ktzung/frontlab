# Bài 08 — Cổng thông tin chuyên mục “Ai? Cái gì? Ở đâu?”

Dự án: exercise-08-what-where-portal · Tệp nộp: bai08.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 8, Cổng thông tin chuyên mục Ai? Cái gì? Ở đâu?. Chúng ta sẽ cùng tạo dự án exercise 08 what where portal với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài tổng hợp bố cục portal nhiều cột, lặp article và xử lý ảnh nổi trong từng bài. Cùng bắt đầu.

## 00:29 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Thiết lập hệ thống liên kết neo (Anchor Links) trong cùng trang. Gắn id=top cho thẻ header đầu trang, và gắn id=tinh-yeu, id=suc-khoe, id=am-thuc, id=am-nhac cho từng thẻ section. Ở menu bên trái, thẻ a Sức khỏe sẽ cuộn thẳng đến chuyên mục tương ứng. Dàn bố cục 2 cấp bằng CSS Grid. Cấp 1 chia trang thành 210 pixel 1fr (Menu trái và Main phải). Cấp 2 bên trong mỗi bài viết.bai-nho chia thành 1fr 140 pixel (Nội dung chữ bên trái và Ảnh minh họa bên phải).

## 01:14 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 08 what where portal. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai08.html.

## 01:45 — Cấu trúc HTML

Mở tệp index.html. Trang mô phỏng cổng thông tin: header lớn, nav chuyên mục bên trái, main chứa nhiều article theo chủ đề, mỗi bài có tiêu đề, mô tả và ảnh minh họa. Cấu trúc lặp lại giúp dễ quét nội dung. Các thẻ ngữ nghĩa chính gồm header, nav, main, section, article.

## 02:08 — Định dạng CSS

Chuyển sang phần CSS. Bố cục Grid ba vùng: sidebar trái, nội dung giữa, quảng cáo phải. Bài viết dùng ảnh float phải, đường kẻ chấm phân tách. Bảng màu xanh công vụ, media query ẩn cột quảng cáo và xếp sidebar lên đầu. Bảng màu chính gồm #eef3f8, #ffffff, #1668C1, #f7fafd, #dce6f2.

## 02:35 — Chạy thử

Chạy thử cổng thông tin: menu chuyên mục bên trái, danh sách bài ở giữa. Cuộn qua các chủ đề. Thu nhỏ màn hình, cột quảng cáo được ẩn và nội dung chuyển thành một cột.

## 02:55 — Tổng kết

Tổng kết bài 8. Tạo dự án exercise 08 what where portal, tệp chính index.html, khi nộp đổi tên thành bai08.html. Bấm trực tiếp vào các mục trên menu trái và nút Về đầu trang để demo liên kết neo #id, đồng thời chỉ ra cấu trúc Grid lồng nhau (Grid khung chính và Grid từng bài viết).. Lỗi thường gặp: Viết href=tinh-yeu thiếu dấu # ở đầu khiến trình duyệt tìm tệp tinh-yeu và báo lỗi 404 File Not Found.
