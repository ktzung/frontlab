# Bài 01 — Trang thơ “Bốn mùa”

Dự án: exercise-01-four-seasons-poem · Tệp nộp: bai01.html

## 00:00 — Mở đầu

Chào các bạn. Đây là video hướng dẫn bài thực hành số 1, Trang thơ Bốn mùa. Chúng ta sẽ cùng tạo dự án exercise 01 four seasons poem với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS, rồi chạy thử trên trình duyệt. Bài mở đầu rèn tư duy dùng thẻ ngữ nghĩa thay cho font và center, đồng thời làm quen biến CSS và Flexbox. Cùng bắt đầu.

## 00:29 — Yêu cầu

Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm 3 phần chính. Xây dựng cấu trúc HTML5 ngữ nghĩa. Thay vì dùng các thẻ center và font đã bị loại bỏ khỏi chuẩn HTML5, ta bọc toàn bộ bài thơ trong thẻ article. Khai báo biến màu CSS và dàn khung. Khai báo các mã màu chủ đạo trong :root (do: #D40000, xanh: #0033CC, hong: #FFD9E6, vang-nhat: #FFFDE7) để dễ quản lý. Định dạng đường kẻ hr và màu từng khổ. Mặc định thẻ hr của trình duyệt có hiệu ứng viền chìm 3D (inset). Để tạo đường kẻ phẳng sắc nét màu xanh dương, ta viết border: none, border-top: 1 pixel solid var(xanh), width: 55 phần trăm, margin: 16 pixel auto.

## 01:25 — Tạo dự án

Bước một, tạo dự án. Mở terminal và chạy mkdir exercise 01 four seasons poem. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành bai01.html.

## 01:53 — Cấu trúc HTML

Mở tệp index.html. Toàn bộ bài thơ nằm trong thẻ article. Tiêu đề dùng h1, ba khổ thơ là ba đoạn p, mỗi câu ngắt dòng bằng br, giữa các khổ là thẻ hr. Cách này giữ đúng nghĩa của một tác phẩm văn học: article cho cả bài, p cho từng khổ. Các thẻ ngữ nghĩa chính gồm article.

## 02:15 — Định dạng CSS

Chuyển sang phần CSS. Bốn biến màu khai báo trong :root. Body dùng Flexbox với justify-content center để căn giữa khung thơ rộng tối đa 640 pixel. Tiêu đề có dải nền hồng, chữ đỏ, in hoa. Khổ một và khổ ba màu xanh, khổ giữa màu đỏ. Thẻ hr bỏ viền mặc định, thay bằng border-top xanh rộng 55 phần trăm. Bảng màu chính gồm #D40000, #0033CC, #FFD9E6, #FFFDE7, #9E9E9E.

## 02:50 — Chạy thử

Bây giờ chạy thử. Trang thơ hiển thị đúng khung vàng nhạt, tiêu đề hồng đỏ, hai khổ xanh và khổ giữa đỏ. Khi thu nhỏ cửa sổ xuống kích thước điện thoại, khung thơ co lại theo chiều rộng màn hình nhưng vẫn căn giữa nhờ Flexbox.

## 03:10 — Tổng kết

Tổng kết bài 1. Tạo dự án exercise 01 four seasons poem, tệp chính index.html, khi nộp đổi tên thành bai01.html. Giải thích vì sao dùng p kết hợp br cho khổ thơ thay vì tách mỗi dòng thơ thành một thẻ p riêng, và cách dùng border: none, border-top: 1 pixel solid để đổi màu thẻ hr.. Lỗi thường gặp: Sinh viên hay dùng color: #0033CC cho thẻ hr nhưng đường kẻ không đổi màu (vì hr dùng border-top hoặc background-color, không dùng color của văn bản).
