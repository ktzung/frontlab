# Bài 06 — Bảng danh sách “Các món ngon Hà Nội”

Dự án: exercise-06-hanoi-food-table · Tệp nộp: bai06.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 6, Bảng danh sách Các món ngon Hà Nội. Chúng ta sẽ cùng tạo dự án exercise 06 hanoi food table với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Phân biệt table dữ liệu với table dàn trang: bài này dùng table đúng chuẩn và trình bày dữ liệu ẩm thực rõ ràng. Cùng bắt đầu.

## 00:30 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Phân tách thead và tbody trong table. Luôn đặt hàng tiêu đề cột (tr th STT th Tên món ăn) vào trong thead và 8 hàng dữ liệu vào trong tbody. Nhờ vậy, khi viết bộ chọn tbody tr:nth-child(even), việc đếm dòng chẵn/lẻ chỉ tính trên các dòng món ăn mà không tính nhầm dòng tiêu đề.. Gộp viền bảng và căn chỉnh cột. Đặt border-collapse: collapse trên table để loại bỏ khoảng hở giữa các ô. Dùng bộ chọn :first-child cho cả th và td để cố định bề rộng 60 pixel và căn giữa cột số thứ tự.

## 01:13 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 06 hanoi food table. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, tạo thêm thư mục assets để chứa hình ảnh, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai06.html.

## 01:44 — Cấu trúc HTML

Mở tệp index.html. Đây là bài dùng table đúng mục đích dữ liệu: thead chứa tiêu đề cột, tbody chứa từng món, mỗi dòng có số thứ tự, tên món, địa chỉ và ghi chú. Ngoài bảng còn có figure ảnh minh họa và caption. Các thẻ ngữ nghĩa chính gồm article, table.

## 02:05 — Định dạng CSS

Chuyển sang phần CSS. Bảng có viền, header nền cam đậm chữ trắng, hàng chẵn nền kem để dễ đọc. Ảnh dùng figure bo góc. Bảng màu cam, kem, nâu, media query cho phép cuộn ngang bảng trên màn hình nhỏ thay vì bóp chữ. Bảng màu chính gồm #FAF3E0, #E65100, #ffffff, #E0D6C2, #FDF8EF.

## 02:31 — Chạy thử

Chạy thử: bảng món ăn có header cam, các dòng xen kẽ. Thu nhỏ màn hình, bảng được đặt trong vùng cuộn ngang để không vỡ cột, ảnh và chú thích vẫn hiển thị.

## 02:52 — Tổng kết

Tổng kết bài 6. Tạo dự án exercise 06 hanoi food table, tệp chính index.html, khi nộp đổi tên thành bai06.html. Giải thích lợi ích của tbody tr:nth-child(even) (nếu thêm hoặc xóa một món ăn ở giữa danh sách, màu sọc dưa của bảng vẫn tự động cập nhật đúng mà không phải sửa lại class của từng hàng).. Lỗi thường gặp: Quên border-collapse: collapse khiến giữa các ô th trên thanh tiêu đề cam xuất hiện vạch trắng đứt đoạn.
