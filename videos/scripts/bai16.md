# Bài 16 — Ứng dụng Quản lý danh sách việc cần làm (To-do List)

Dự án: exercise-16-todo-list · Tệp nộp: bai16.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 16, Ứng dụng Quản lý danh sách việc cần làm (To-do List). Chúng ta sẽ cùng tạo dự án exercise 16 todo list với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, xử lý JavaScript, rồi chạy thử trên trình duyệt. Bài luyện quản lý trạng thái bằng mảng, render lại danh sách và xử lý nhiều sự kiện trên phần tử động. Cùng bắt đầu.

## 00:32 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 2 phần chính. Thiết kế mô hình dữ liệu (State) và hàm render(). Khởi tạo mảng danhSachViec chứa 3 công việc mẫu, mỗi phần tử là một đối tượng id, ten, xong. Phân biệt sự kiện bấm Đánh dấu và bấm nút Xoá. Khi người dùng bấm vào nút.nut-xoa, ta xóa phần tử khỏi mảng theo id. Khi bấm vào phần còn lại của thẻ li , ta đảo ngược giá trị boolean viec.xong = !viec.xong.

## 01:05 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 16 todo list. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai16.html.

## 01:32 — Cấu trúc HTML

Mở tệp index.html. Trang có form thêm việc với ô nhập và nút, danh sách ul rỗng để JavaScript đổ dữ liệu, và dòng thống kê số việc chưa xong. Mỗi việc được sinh thành li có nút xóa. Các thẻ ngữ nghĩa chính gồm article, header, form.

## 01:52 — Định dạng CSS

Chuyển sang phần CSS. Danh sách dạng card trắng, việc đã xong có màu xám và gạch ngang. Nút xóa chỉ hiện rõ khi rê chuột. Bảng màu tím, nền sáng, media query giảm đệm và cỡ chữ trên mobile. Bảng màu chính gồm #f6f7fb, #ffffff, #6d28d9, #ede9fe, #d8d3e8.

## 02:17 — JavaScript

Phần JavaScript. Mảng danh sách việc là nguồn dữ liệu. Hàm vẽ lại danh sách xóa nội dung cũ rồi tạo từng li, gắn sự kiện click để đổi trạng thái và nút xóa để lọc khỏi mảng. Sau mỗi thay đổi, hàm đếm lại số việc chưa hoàn thành. Các hàm chính là veDanhSach. Sự kiện được lắng nghe gồm click, submit.

## 02:40 — Chạy thử

Chạy thử: nhập việc Ôn tập CSS Grid rồi thêm. Bấm vào việc đầu tiên để đánh dấu xong, số việc chưa hoàn thành giảm. Bấm xóa ở một việc để loại khỏi danh sách.

## 02:59 — Tổng kết

Tổng kết bài 16. Tạo dự án exercise 16 todo list, tệp chính index.html, khi nộp đổi tên thành bai16.html. Giải thích vì sao phải gọi e. stopPropagation() bên trong sự kiện click của nút Xoá (để sự kiện click không nổi bọt lên thẻ li cha) và cách dùng filter() để đếm số việc chưa hoàn thành.. Lỗi thường gặp: Dùng innerHTML += kèm chuỗi nội suy trực tiếp từ dữ liệu người dùng nhập mà không qua textContent, dễ gây lỗi hiển thị nếu tên công việc chứa ký tự < hoặc >.
