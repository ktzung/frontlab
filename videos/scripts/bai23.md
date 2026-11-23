# Bài 23 — Thư viện ảnh nghệ thuật với hiệu ứng Hover Zoom

Dự án: exercise-23-hover-zoom-gallery · Tệp nộp: bai23.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 23, Thư viện ảnh nghệ thuật với hiệu ứng Hover Zoom. Chúng ta sẽ cùng tạo dự án exercise 23 hover zoom gallery với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài luyện hiệu ứng hover bằng transform, overflow hidden và transition — không cần JavaScript. Cùng bắt đầu.

## 00:32 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Nguyên tắc Cha relative + overflow. hidden, Con absolute: Đặt position: relative, overflow: hidden, trên.o-anh. Nhờ đó.lop-phu với position: absolute, inset: auto 0 0 0, (tương đương left: 0, right: 0, bottom: 0,) sẽ bám chặt vào đáy bức ảnh, và khi img phóng to scale(1. Đặt transition trên trạng thái gốc của.o-anh img. Đặt transition: transform 0.4s ease ngay trong rule.o-anh img (thay vì chỉ đặt trong :hover) để cả lúc đưa chuột vào lẫn lúc rút chuột ra ảnh đều co giãn mượt mà.

## 01:21 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 23 hover zoom gallery. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai23.html.

## 01:53 — Cấu trúc HTML

Mở tệp index.html. Thư viện gồm các figure, mỗi figure có ảnh và lớp chú thích. Ảnh nằm trong khung overflow hidden để hiệu ứng phóng không tràn ra ngoài. Các thẻ ngữ nghĩa chính gồm main, figure.

## 02:08 — Định dạng CSS

Chuyển sang phần CSS. Grid ba cột, ảnh phủ kín ô. Khi hover, ảnh phóng nhẹ bằng transform scale và lớp phủ tối hiện lên cùng chú thích. Transition mượt. Bảng màu tối giản trắng đen. Media query giảm số cột. Bảng màu chính gồm #f8fafc, #0f172a, #64748b, #ffffff.

## 02:34 — Chạy thử

Chạy thử: rê chuột qua từng ảnh, ảnh phóng nhẹ và chú thích hiện lên. Thu nhỏ màn hình, lưới giảm cột nhưng hiệu ứng vẫn hoạt động.

## 02:53 — Tổng kết

Tổng kết bài 23. Tạo dự án exercise 23 hover zoom gallery, tệp chính index.html, khi nộp đổi tên thành bai23.html. Rê chuột qua từng ảnh trên trình duyệt để demo hiệu ứng scale(1.12) và giải thích nếu bỏ overflow: hidden trên.o-anh thì ảnh sẽ tràn đè lên các ô bên cạnh như thế nào.. Lỗi thường gặp: Đặt :hover lên thẻ img thay vì.o-anh:hover img, khiến khi chuột di chuyển vào vùng chữ.lop-phu ở đáy ảnh thì hiệu ứng zoom bị mất đột ngột.
