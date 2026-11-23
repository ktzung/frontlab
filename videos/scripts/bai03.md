# Bài 03 — Trang giới thiệu Di sản Vịnh Hạ Long

Dự án: exercise-03-ha-long-heritage · Tệp nộp: bai03.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 3, Trang giới thiệu Di sản Vịnh Hạ Long. Chúng ta sẽ cùng tạo dự án exercise 03 ha long heritage với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài tập về hero image, drop cap bằng CSS và cách tổ chức thông tin di sản theo cấu trúc ngữ nghĩa. Cùng bắt đầu.

## 00:30 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Phân biệt đoạn Sapo và đoạn thân bài. Đoạn mở đầu có class. sapo không áp dụng hiệu ứng chữ cái đầu rơi, trong khi hai đoạn sau dùng class.than-bai. Nhờ phân tách class rõ ràng, bộ chọn p.than-bai first-letter chỉ tác động lên chữ V và chữ H của hai đoạn nội dung chính.. Kỹ thuật tạo Drop Cap chuẩn bằng. :first-letter: Khi gán float: left và font-size: 3rem cho first-letter, chữ cái đầu sẽ tự động chiếm chiều cao tương đương 2 dòng văn bản bên cạnh. Đặt line-height: 0.85 giúp đỉnh chữ cái lớn ngang bằng với mép trên của dòng đầu tiên.

## 01:16 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 03 ha long heritage. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai03.html.

## 01:47 — Cấu trúc HTML

Mở tệp index.html. Trang gồm header với ảnh hero, article nội dung, figure chú thích ảnh và aside thông tin nhanh. Tiêu đề chính dùng h1, các mục con h2, thông tin di sản đặt trong danh sách mô tả. Các thẻ ngữ nghĩa chính gồm article.

## 02:07 — Định dạng CSS

Chuyển sang phần CSS. Ảnh hero dùng object-fit cover để phủ kín khung. Chữ cái đầu của đoạn mở dùng pseudo-element first-letter tạo drop cap. Bảng màu xanh biển, chữ trắng trên hero, media query đổi bố cục aside xuống dưới. Bảng màu chính gồm #7ec8e3, #0a5c8a, #0b3d5c, #ffffff, #1b1b1b.

## 02:35 — Chạy thử

Chạy thử: ảnh hero phủ kín chiều ngang, chữ cái đầu được phóng to. Cuộn xuống xem phần nội dung và hộp thông tin. Thu nhỏ màn hình, hero giữ tỉ lệ và nội dung chuyển thành một cột.

## 02:55 — Tổng kết

Tổng kết bài 3. Tạo dự án exercise 03 ha long heritage, tệp chính index.html, khi nộp đổi tên thành bai03.html. Giải thích cơ chế của pseudo-element first-letter (tự động chọn chữ cái đầu mà không cần bọc thẻ span thủ công trong HTML).. Lỗi thường gặp: Viết p first-letter chung cho mọi thẻ p khiến cả đoạn.sapo cũng bị phóng to chữ cái đầu sai thiết kế.
