# Bài 09 — Trang Hồ sơ cá nhân trực tuyến (CV Online)

Dự án: exercise-09-online-cv · Tệp nộp: bai09.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 9, Trang Hồ sơ cá nhân trực tuyến (CV Online). Chúng ta sẽ cùng tạo dự án exercise 09 online cv với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện bố cục CV chuyên nghiệp: phân cấp thông tin, sidebar màu đậm và thanh kỹ năng trực quan. Cùng bắt đầu.

## 00:31 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Kỹ thuật bo góc khung cha có cột màu sát mép (overflow. hidden): Khi.the-cv có border-radius: 12 pixel nhưng bên trong có.cot-trai tô nền xanh sát mép, nền xanh của.cot-trai sẽ đè vuông góc lên góc trái trên và trái dưới. Dựng Avatar tròn và Chip kỹ năng bằng Flexbox. Với.avatar, kết hợp width: 110 pixel, height: 110 pixel, border-radius: 50 phần trăm, cùng bộ ba căn giữa tâm display: flex, align-items: center, justify-content: center.

## 01:16 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 09 online cv. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai09.html.

## 01:43 — Cấu trúc HTML

Mở tệp index.html. CV gồm header tên và chức danh, cột trái chứa ảnh, thông tin liên hệ và kỹ năng, cột phải chứa học vấn, kinh nghiệm, dự án. Mỗi mục là một section có tiêu đề rõ ràng. Các thẻ ngữ nghĩa chính gồm article, aside, section.

## 02:03 — Định dạng CSS

Chuyển sang phần CSS. Grid hai cột với sidebar xanh đậm và nội dung trắng. Thanh kỹ năng dùng div lồng nhau với chiều rộng phần trăm. Bảng màu xanh navy, media query đưa sidebar lên trên và chuyển thành bố cục một cột. Bảng màu chính gồm #eef2f7, #ffffff, #1565C0, #0d3f7a, #e3ebf5.

## 02:29 — Bootstrap

Phần Bootstrap.

## 02:31 — Chạy thử

Chạy thử CV: sidebar xanh bên trái, nội dung bên phải, thanh kỹ năng hiển thị theo tỉ lệ. Thu nhỏ màn hình, sidebar chuyển lên trên và toàn bộ CV xếp thành một cột.

## 02:52 — Tổng kết

Tổng kết bài 9. Tạo dự án exercise 09 online cv, tệp chính index.html, khi nộp đổi tên thành bai09.html. Giải thích cách căn chữ NA chính giữa tâm hình tròn bằng Flexbox và vai trò của overflow: hidden trên thẻ cha.the-cv.. Lỗi thường gặp: Chỉ đặt width: 110 pixel mà quên height: 110 pixel trên. avatar, khiến vòng tròn bị biến thành hình bầu dục (ellipse).
