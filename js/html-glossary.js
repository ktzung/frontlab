/* FrontLab — giải nghĩa thẻ và thuộc tính HTML dùng trong playground */
(function () {
  "use strict";

  window.HTML_GLOSSARY = {
    html: {
      kind: "thẻ gốc", group: "Cấu trúc",
      what: "Bọc toàn bộ tài liệu. Thuộc tính lang cho trình đọc màn hình và công cụ dịch biết ngôn ngữ chính.",
      example: '<html lang="vi">', tip: "Chỉ có một thẻ html trong một tài liệu."
    },
    head: {
      kind: "vùng metadata", group: "Cấu trúc",
      what: "Chứa thông tin về trang: tiêu đề, charset, viewport, liên kết CSS. Nội dung trong head không hiện trực tiếp trên trang.",
      example: "<head><title>Hồ sơ</title></head>", tip: "Đừng đặt nội dung nhìn thấy trong head."
    },
    body: {
      kind: "vùng nội dung", group: "Cấu trúc",
      what: "Chứa mọi thứ người dùng nhìn thấy và tương tác: tiêu đề, đoạn văn, ảnh, form.",
      example: "<body><h1>Xin chào</h1></body>", tip: "Mỗi tài liệu chỉ có một body."
    },
    title: {
      kind: "metadata", group: "Cấu trúc",
      what: "Tiêu đề hiện trên tab trình duyệt và trong kết quả tìm kiếm.",
      example: "<title>Hồ sơ sinh viên</title>", tip: "Viết tiêu đề mô tả đúng nội dung trang, không chỉ ghi “Trang chủ”."
    },
    meta: {
      kind: "metadata", group: "Cấu trúc",
      what: "Khai báo thông tin phụ như charset hoặc viewport. Thẻ meta không có nội dung đóng.",
      example: '<meta name="viewport" content="width=device-width, initial-scale=1">',
      tip: "Thiếu viewport, trang sẽ bị thu nhỏ trên điện thoại."
    },
    link: {
      kind: "liên kết tài nguyên", group: "Cấu trúc",
      what: "Nối trang với tài nguyên bên ngoài, thường là file CSS hoặc icon. Với CSS, đặt trong head.",
      example: '<link rel="stylesheet" href="style.css">',
      tip: "link không phải thẻ mở liên kết; liên kết bấm được là thẻ a."
    },
    script: {
      kind: "mã thực thi", group: "Cấu trúc",
      what: "Nhúng hoặc tải JavaScript. Đặt cuối body để HTML hiện trước, hoặc dùng defer/type=module.",
      example: '<script src="app.js" defer></script>',
      tip: "Không chèn script lạ; mã trong script chạy với quyền của trang."
    },
    style: {
      kind: "CSS nội bộ", group: "Cấu trúc",
      what: "Khai báo CSS ngay trong tài liệu. Phù hợp cho đoạn CSS nhỏ hoặc bản thử nghiệm.",
      example: "<style>h1 { color: teal; }</style>",
      tip: "Dự án lớn nên tách CSS ra file riêng để dễ bảo trì."
    },
    header: {
      kind: "thẻ ngữ nghĩa", group: "Ngữ nghĩa",
      what: "Phần mở đầu của trang hoặc của một khối nội dung: logo, tiêu đề, mô tả ngắn.",
      example: "<header><h1>Nguyễn An</h1></header>", tip: "header không bắt buộc là đầu trang; có thể nằm trong article."
    },
    nav: {
      kind: "thẻ ngữ nghĩa", group: "Ngữ nghĩa",
      what: "Khu vực điều hướng chính, chứa các liên kết tới phần khác của trang hoặc site.",
      example: '<nav aria-label="Mục lục"><a href="#co-ban">Cơ bản</a></nav>',
      tip: "Đặt aria-label khi trang có nhiều vùng nav để phân biệt."
    },
    main: {
      kind: "thẻ ngữ nghĩa", group: "Ngữ nghĩa",
      what: "Nội dung chính, duy nhất của trang. Trình đọc màn hình có thể nhảy thẳng tới đây.",
      example: "<main><h1>Khóa học</h1></main>", tip: "Chỉ dùng một main cho mỗi trang."
    },
    section: {
      kind: "thẻ ngữ nghĩa", group: "Ngữ nghĩa",
      what: "Một nhóm nội dung cùng chủ đề, thường có tiêu đề riêng.",
      example: "<section><h2>Grid là gì?</h2></section>", tip: "Nếu chỉ cần hộp để tô màu, div hợp lý hơn."
    },
    article: {
      kind: "thẻ ngữ nghĩa", group: "Ngữ nghĩa",
      what: "Một đơn vị nội dung độc lập: bài viết, card sản phẩm, bình luận.",
      example: "<article><h2>Học CSS Grid</h2></article>", tip: "Article nên vẫn hiểu được khi tách khỏi trang."
    },
    aside: {
      kind: "thẻ ngữ nghĩa", group: "Ngữ nghĩa",
      what: "Nội dung phụ bên cạnh nội dung chính: ghi chú, quảng cáo, liên kết liên quan.",
      example: "<aside><p>Gợi ý đọc thêm</p></aside>", tip: "Đừng dùng aside cho nội dung bắt buộc phải đọc."
    },
    footer: {
      kind: "thẻ ngữ nghĩa", group: "Ngữ nghĩa",
      what: "Phần kết thúc của trang hoặc khối nội dung: bản quyền, liên hệ, liên kết phụ.",
      example: "<footer>© 2026 FrontLab</footer>", tip: "Footer có thể nằm trong article, không chỉ cuối trang."
    },
    h1: {
      kind: "tiêu đề", group: "Nội dung",
      what: "Tiêu đề cấp cao nhất, mô tả chủ đề chính của trang. Mỗi trang nên có một h1.",
      example: "<h1>Xin chào Frontend</h1>", tip: "Không chọn h1 chỉ vì muốn chữ to; dùng CSS cho kích thước."
    },
    h2: {
      kind: "tiêu đề", group: "Nội dung",
      what: "Tiêu đề cấp hai, chia nội dung dưới h1 thành các mục cùng cấp.",
      example: "<h2>Grid là gì?</h2>", tip: "Giữ thứ tự h1 → h2 → h3, không nhảy cấp vì lý do thẩm mỹ."
    },
    h3: {
      kind: "tiêu đề", group: "Nội dung",
      what: "Tiêu đề cấp ba, dùng cho mục con của một h2.",
      example: "<h3>Ví dụ</h3>", tip: "Cấu trúc tiêu đề là bản đồ điều hướng cho trình đọc màn hình."
    },
    p: {
      kind: "đoạn văn", group: "Nội dung",
      what: "Một đoạn văn bản. Trình duyệt tự tạo khoảng cách giữa các đoạn.",
      example: "<p>Trình duyệt đọc HTML từ trên xuống.</p>", tip: "Không dùng br liên tiếp để tạo khoảng cách; dùng margin."
    },
    a: {
      kind: "liên kết", group: "Nội dung",
      what: "Tạo liên kết tới URL, tới vị trí trong trang hoặc tới email/điện thoại.",
      example: '<a href="/blog">Đọc blog</a>', tip: "Nội dung chữ của a phải nói rõ đích đến, tránh “bấm vào đây”."
    },
    ul: {
      kind: "danh sách", group: "Nội dung",
      what: "Danh sách không thứ tự, mỗi mục là một li.",
      example: "<ul><li>HTML</li><li>CSS</li></ul>", tip: "Dùng ul khi thứ tự các mục không quan trọng."
    },
    ol: {
      kind: "danh sách", group: "Nội dung",
      what: "Danh sách có thứ tự, phù hợp với các bước hoặc xếp hạng.",
      example: "<ol><li>Mở file</li><li>Chạy lệnh</li></ol>", tip: "Dùng ol khi đổi thứ tự sẽ đổi nghĩa."
    },
    li: {
      kind: "mục danh sách", group: "Nội dung",
      what: "Một mục trong ul hoặc ol.",
      example: "<li>Học DOM</li>", tip: "li phải nằm trực tiếp trong ul, ol hoặc menu."
    },
    div: {
      kind: "hộp trung tính", group: "Bố cục",
      what: "Hộp không mang ngữ nghĩa, dùng để nhóm phần tử cho CSS hoặc JavaScript.",
      example: '<div class="toolbar">...</div>', tip: "Nếu có thẻ ngữ nghĩa phù hợp hơn, ưu tiên thẻ đó."
    },
    span: {
      kind: "hộp nội tuyến", group: "Bố cục",
      what: "Hộp trung tính nằm trong dòng chữ, dùng để tô màu hoặc đánh dấu một cụm từ.",
      example: '<span class="badge">Mới</span>', tip: "Span không tạo xuống dòng; muốn khối riêng dùng div."
    },
    figure: {
      kind: "khối minh họa", group: "Đa phương tiện",
      what: "Bọc ảnh, video, biểu đồ cùng chú thích figcaption.",
      example: "<figure><img src=\"a.jpg\" alt=\"...\"><figcaption>Mô tả</figcaption></figure>",
      tip: "Figure giúp chú thích gắn chặt với nội dung minh họa."
    },
    figcaption: {
      kind: "chú thích", group: "Đa phương tiện",
      what: "Chú thích cho nội dung trong figure.",
      example: "<figcaption>Không gian làm việc của nhóm.</figcaption>",
      tip: "Chú thích không thay thế alt của ảnh."
    },
    img: {
      kind: "ảnh", group: "Đa phương tiện",
      what: "Nhúng ảnh. Thuộc tính src là đường dẫn, alt mô tả nội dung ảnh.",
      example: '<img src="studio.jpg" alt="Bàn làm việc" width="640" height="420">',
      tip: "Luôn có alt; ảnh trang trí dùng alt rỗng."
    },
    video: {
      kind: "video", group: "Đa phương tiện",
      what: "Nhúng video. Thêm controls để người dùng phát, dừng và chỉnh âm lượng.",
      example: '<video controls poster="cover.jpg"><source src="demo.mp4" type="video/mp4"></video>',
      tip: "Cung cấp poster và phụ đề khi video có lời nói."
    },
    source: {
      kind: "nguồn media", group: "Đa phương tiện",
      what: "Khai báo một định dạng file cho video hoặc audio. Trình duyệt chọn nguồn đầu tiên hỗ trợ.",
      example: '<source src="demo.mp4" type="video/mp4">', tip: "Có thể đặt nhiều source với định dạng khác nhau."
    },
    form: {
      kind: "biểu mẫu", group: "Biểu mẫu",
      what: "Nhóm các trường nhập và nút gửi. action là nơi gửi dữ liệu, method là cách gửi.",
      example: '<form action="/dang-ky" method="post">...</form>',
      tip: "Trong playground, việc gửi form được chặn để trang không bị tải lại."
    },
    label: {
      kind: "nhãn trường", group: "Biểu mẫu",
      what: "Đặt tên cho ô nhập. Thuộc tính for phải trùng id của ô nhập để bấm nhãn là focus được.",
      example: '<label for="email">Email</label>', tip: "Không thay label bằng placeholder; placeholder biến mất khi gõ."
    },
    input: {
      kind: "ô nhập", group: "Biểu mẫu",
      what: "Ô nhập một dòng. type quyết định hành vi: text, email, search, checkbox, radio…",
      example: '<input id="email" name="email" type="email" required>',
      tip: "Dùng đúng type để điện thoại hiện bàn phím phù hợp và trình duyệt kiểm tra dữ liệu."
    },
    select: {
      kind: "hộp chọn", group: "Biểu mẫu",
      what: "Danh sách lựa chọn một hoặc nhiều mục, mỗi mục là option.",
      example: '<select id="role" name="role"><option>Student</option></select>',
      tip: "Với danh sách dài, select gọn hơn nhiều nút radio."
    },
    option: {
      kind: "lựa chọn", group: "Biểu mẫu",
      what: "Một mục trong select. value là dữ liệu gửi đi, phần chữ là nhãn người dùng thấy.",
      example: '<option value="student">Sinh viên</option>', tip: "Đặt value ổn định, đừng đổi theo nhãn hiển thị."
    },
    textarea: {
      kind: "ô nhập nhiều dòng", group: "Biểu mẫu",
      what: "Vùng nhập văn bản dài như ghi chú, mô tả, bình luận.",
      example: '<textarea id="note" rows="4"></textarea>', tip: "Nội dung ban đầu nằm giữa thẻ mở và thẻ đóng."
    },
    button: {
      kind: "nút", group: "Biểu mẫu",
      what: "Nút bấm. Trong form, type=submit gửi form; type=button chỉ chạy JavaScript.",
      example: '<button type="submit">Gửi</button>', tip: "Dùng button thay div để có focus và phím Enter/Space miễn phí."
    },
    table: {
      kind: "bảng", group: "Dữ liệu",
      what: "Dữ liệu dạng hàng và cột. Chỉ dùng cho dữ liệu thật, không dùng để dàn trang.",
      example: "<table><tr><th>Môn</th><th>Điểm</th></tr></table>",
      tip: "Thêm caption để bảng có tên rõ ràng."
    },
    caption: {
      kind: "tên bảng", group: "Dữ liệu",
      what: "Tiêu đề của bảng, đặt ngay sau thẻ table.",
      example: "<caption>Điểm môn học</caption>", tip: "Caption giúp người dùng biết bảng chứa gì trước khi đọc."
    },
    thead: {
      kind: "phần đầu bảng", group: "Dữ liệu",
      what: "Nhóm các hàng tiêu đề của bảng.",
      example: "<thead><tr><th>Môn</th></tr></thead>", tip: "Tách thead giúp trình đọc màn hình đọc lại tiêu đề khi cuộn."
    },
    tbody: {
      kind: "phần thân bảng", group: "Dữ liệu",
      what: "Nhóm các hàng dữ liệu chính của bảng.",
      example: "<tbody><tr><td>HTML</td></tr></tbody>", tip: "tbody là nơi đặt dữ liệu, không đặt tiêu đề cột."
    },
    tr: {
      kind: "hàng bảng", group: "Dữ liệu",
      what: "Một hàng trong bảng, chứa các ô th hoặc td.",
      example: "<tr><th>HTML</th><td>9.0</td></tr>", tip: "Mỗi hàng nên có cùng số cột."
    },
    th: {
      kind: "ô tiêu đề", group: "Dữ liệu",
      what: "Ô tiêu đề của hàng hoặc cột. scope nói rõ ô tiêu đề cho hàng hay cột.",
      example: '<th scope="col">Điểm</th>', tip: "Không dùng td in đậm thay cho th."
    },
    td: {
      kind: "ô dữ liệu", group: "Dữ liệu",
      what: "Một ô dữ liệu trong bảng.",
      example: "<td>9.0</td>", tip: "Giữ dữ liệu ngắn; nếu cần giải thích dài, dùng ghi chú ngoài bảng."
    },
    code: {
      kind: "mã", group: "Nội dung",
      what: "Đánh dấu một đoạn mã ngắn trong câu.",
      example: "<code>document.querySelector()</code>", tip: "Đoạn mã nhiều dòng nên đặt trong pre kèm code."
    },
    strong: {
      kind: "nhấn mạnh", group: "Nội dung",
      what: "Nhấn mạnh tầm quan trọng về ngữ nghĩa, trình duyệt thường in đậm.",
      example: "<strong>Bắt buộc</strong>", tip: "Không dùng strong chỉ để in đậm; CSS làm việc đó."
    },
    em: {
      kind: "nhấn giọng", group: "Nội dung",
      what: "Nhấn giọng một từ hoặc cụm từ, trình duyệt thường in nghiêng.",
      example: "<em>không</em> phải bấm", tip: "Em khác strong ở sắc thái, không chỉ ở kiểu chữ."
    },
    br: {
      kind: "ngắt dòng", group: "Nội dung",
      what: "Ngắt dòng trong cùng một đoạn, ví dụ địa chỉ hoặc bài thơ.",
      example: "Dòng một<br>Dòng hai", tip: "Không dùng br để tạo khoảng cách giữa các khối."
    },
    hr: {
      kind: "phân cách", group: "Nội dung",
      what: "Đường phân cách giữa các nhóm nội dung.",
      example: "<hr>", tip: "Nếu cần khoảng trống, dùng margin; hr mang nghĩa chuyển mục."
    },
    lang: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Khai báo ngôn ngữ của phần tử, ví dụ vi cho tiếng Việt.",
      example: '<html lang="vi">', tip: "Giúp trình đọc màn hình phát âm đúng và trình duyệt dịch đúng."
    },
    charset: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Khai báo bảng mã ký tự của tài liệu, thường là UTF-8.",
      example: '<meta charset="UTF-8">', tip: "Đặt ngay đầu head để tiếng Việt không bị lỗi dấu."
    },
    viewport: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Giá trị của meta name=viewport, điều khiển cách trang co giãn trên thiết bị di động.",
      example: 'content="width=device-width, initial-scale=1"', tip: "Thiếu viewport là nguyên nhân phổ biến khiến trang mobile bị thu nhỏ."
    },
    content: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Giá trị đi kèm của thẻ meta, ví dụ nội dung viewport hoặc mô tả trang.",
      example: '<meta name="description" content="Học frontend">', tip: "Content của description nên ngắn và mô tả đúng trang."
    },
    class: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Gắn một hoặc nhiều tên class để CSS và JavaScript chọn phần tử. Một phần tử có thể có nhiều class.",
      example: '<div class="card featured">', tip: "Tên class nên mô tả vai trò, không mô tả màu hiện tại."
    },
    id: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Định danh duy nhất trong trang. Dùng cho liên kết neo, label for và JavaScript.",
      example: '<h2 id="ket-luan">Kết luận</h2>', tip: "Không đặt trùng id; CSS nên ưu tiên class thay vì id."
    },
    href: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Địa chỉ đích của liên kết hoặc tài nguyên.",
      example: '<a href="#ket-luan">Kết luận</a>', tip: "Href bắt đầu bằng # là nhảy tới id trong cùng trang."
    },
    target: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Nơi mở liên kết. _blank mở tab mới; nên đi kèm rel=noopener.",
      example: '<a href="https://example.com" target="_blank" rel="noopener">',
      tip: "Mở tab mới chỉ khi thật cần; người dùng có thể tự chọn."
    },
    rel: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Mô tả quan hệ giữa trang hiện tại và tài nguyên đích, ví dụ stylesheet hoặc noopener.",
      example: 'rel="noopener"', tip: "Với target=_blank, noopener ngăn trang mới can thiệp tab cũ."
    },
    src: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Đường dẫn tới file nguồn của ảnh, video, script hoặc iframe.",
      example: '<img src="studio.jpg" alt="...">', tip: "Đường dẫn sai làm ảnh hoặc script không tải được."
    },
    alt: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Mô tả văn bản thay thế cho ảnh khi ảnh lỗi hoặc khi dùng trình đọc màn hình.",
      example: 'alt="Biểu đồ doanh thu tăng 20% trong quý 4"',
      tip: "Mô tả nội dung, không mô tả tên file hay kiểu ảnh."
    },
    width: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Chiều rộng ban đầu của ảnh hoặc vùng media, tính bằng pixel.",
      example: '<img width="640" height="420" ...>', tip: "Đặt width và height giúp trang giữ chỗ, giảm nhảy layout."
    },
    height: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Chiều cao ban đầu của ảnh hoặc vùng media.",
      example: 'height="420"', tip: "Giữ đúng tỉ lệ với width để ảnh không bị méo."
    },
    loading: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Điều khiển cách tải ảnh hoặc iframe. lazy trì hoãn tải cho tới khi gần vùng nhìn.",
      example: '<img loading="lazy" ...>', tip: "Không dùng lazy cho ảnh đầu trang vì có thể làm chậm cảm nhận."
    },
    controls: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Hiện thanh điều khiển phát, dừng, âm lượng cho video hoặc audio.",
      example: "<video controls>...</video>", tip: "Thiếu controls, người dùng khó phát media."
    },
    poster: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Ảnh đại diện hiện trước khi video được phát.",
      example: '<video poster="cover.jpg">', tip: "Poster nên cùng tỉ lệ với video để không bị méo."
    },
    type: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Khai báo loại của input, button, script hoặc nguồn media tùy theo thẻ.",
      example: '<input type="email">', tip: "Với button trong form, luôn ghi rõ type để tránh gửi form ngoài ý muốn."
    },
    for: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Nối label với id của ô nhập tương ứng.",
      example: '<label for="email">Email</label>', tip: "for và id phải khớp chính xác, kể cả dấu gạch."
    },
    value: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Giá trị ban đầu hoặc giá trị gửi đi của ô nhập, option hoặc button.",
      example: '<option value="student">Sinh viên</option>', tip: "Value là dữ liệu cho máy xử lý; phần chữ là cho người đọc."
    },
    required: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Bắt buộc nhập trước khi gửi form. Trình duyệt tự chặn và báo lỗi.",
      example: '<input type="email" required>', tip: "Required chỉ là kiểm tra phía trình duyệt; máy chủ vẫn phải kiểm tra lại."
    },
    action: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Địa chỉ nhận dữ liệu khi form được gửi.",
      example: '<form action="/dang-ky" method="post">', tip: "Trong playground, gửi form bị chặn để không rời trang."
    },
    method: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Cách gửi dữ liệu form: get đưa dữ liệu lên URL, post đưa vào thân request.",
      example: '<form method="post">', tip: "Dữ liệu nhạy cảm không dùng get vì lộ trên URL và lịch sử."
    },
    scope: {
      kind: "thuộc tính", group: "Thuộc tính",
      what: "Cho biết ô th là tiêu đề cho cột hay hàng.",
      example: '<th scope="col">Điểm</th>', tip: "Scope giúp trình đọc màn hình ghép đúng tiêu đề với ô dữ liệu."
    },
    "aria-label": {
      kind: "thuộc tính", group: "Trợ năng",
      what: "Đặt tên cho phần tử khi không có chữ hiển thị phù hợp, ví dụ nút chỉ có biểu tượng.",
      example: '<button aria-label="Đóng hộp thoại">×</button>',
      tip: "Chỉ dùng khi không có nhãn nhìn thấy; đừng lặp lại chữ đã hiện."
    },
    role: {
      kind: "thuộc tính", group: "Trợ năng",
      what: "Khai báo vai trò của phần tử cho công nghệ hỗ trợ khi thẻ HTML không diễn đạt đủ.",
      example: '<div role="status">Đã lưu</div>', tip: "Ưu tiên thẻ HTML đúng nghĩa trước khi thêm role."
    },
    tabindex: {
      kind: "thuộc tính", group: "Trợ năng",
      what: "Điều chỉnh khả năng nhận focus bằng Tab. Giá trị 0 đưa vào thứ tự tự nhiên, -1 chỉ focus bằng script.",
      example: '<div tabindex="0">...</div>', tip: "Tránh tabindex dương vì làm rối thứ tự Tab."
    },
    "data-*": {
      kind: "thuộc tính dữ liệu", group: "Thuộc tính",
      what: "Thuộc tính tùy biến để lưu trạng thái hoặc dữ liệu cho CSS và JavaScript, ví dụ data-state.",
      example: '<section data-state="open">', tip: "Tên sau data- viết thường, dùng gạch nối."
    },
    "aria-hidden": {
      kind: "thuộc tính", group: "Trợ năng",
      what: "Ẩn phần tử khỏi công nghệ hỗ trợ khi nội dung chỉ để trang trí.",
      example: '<svg aria-hidden="true">...</svg>', tip: "Không ẩn nội dung mà người dùng vẫn cần nghe."
    }
  };

  ["h4", "h5", "h6"].forEach((tag) => {
    window.HTML_GLOSSARY[tag] = {
      kind: "tiêu đề", group: "Nội dung",
      what: `Tiêu đề cấp ${tag.slice(1)}, dùng cho các mục con sâu hơn trong cấu trúc nội dung.`,
      example: `<${tag}>Mục con</${tag}>`,
      tip: "Giữ thứ tự cấp tiêu đề; đừng chọn cấp chỉ vì kích thước chữ."
    };
  });
})();
