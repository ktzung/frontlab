/* FrontLab — Thiết kế giao diện · phần 1 (bài 01–10) */
(function () {
  "use strict";
  const L = window.FRONTLAB.lessons;
  const S = {
    flow(steps, active, done) { return { kind: "flow", steps, active: active || [], done: done || [] }; },
    vars(items) { return { kind: "vars", items }; },
    arr(values, active, extra) { return Object.assign({ kind: "array", values, active: active || [] }, extra || {}); },
    table(headers, rows, activeRow, caption) { return { kind: "table", headers, rows, activeRow, caption }; },
    dom(items, active, caption) { return { kind: "dom", items, active: active || [], caption }; },
    box(props) { return Object.assign({ kind: "box" }, props); },
    layout(props) { return Object.assign({ kind: "layout" }, props); },
    tree(nodes, edges, caption) { return { kind: "tree", nodes, edges, caption }; }
  };

  L["web-foundations"] = {
    id: "web-foundations",
    track: "design",
    module: "design-foundation",
    title: "Trình duyệt dựng trang web như thế nào?",
    shortTitle: "Web hoạt động",
    subtitle: "Một file HTML đi từ máy chủ đến màn hình qua những bước nào?",
    blurb: "Nhìn toàn bộ hành trình request → HTML → DOM → render để hiểu vì sao cấu trúc đúng quan trọng hơn trang trí.",
    level: "Nhập môn",
    duration: "12 phút",
    lang: "html",
    tags: ["browser", "html", "dom", "render"],
    learn: [
      "Vai trò của HTML, CSS và JavaScript trong một trang",
      "Cách trình duyệt nhận file và dựng cây DOM",
      "Vì sao nội dung phải có trước, trang trí sau",
      "Mối liên hệ giữa DOM, CSSOM và pixel trên màn hình"
    ],
    code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Trang đầu tiên</title>
</head>
<body>
  <h1>Xin chào Frontend</h1>
  <p>Trình duyệt đọc HTML từ trên xuống.</p>
</body>
</html>`,
    file: "index.html",
    life: {
      icon: "bulb",
      title: "Một ngôi nhà",
      text: "HTML là khung nhà, CSS là sơn và nội thất, JavaScript là hệ thống điện điều khiển. Khung yếu thì trang trí đẹp cũng không cứu được."
    },
    visual: S.flow([{ label: "Request", sub: "gửi yêu cầu" }, { label: "HTML", sub: "nhận file" }, { label: "DOM", sub: "dựng cây" }, { label: "Pixels", sub: "vẽ màn hình" }], [0]),
    steps: [
      {
        short: "Trình duyệt nhận file",
        type: "TỔNG QUAN",
        title: "Một trang bắt đầu bằng request",
        body: "Khi bạn mở địa chỉ, trình duyệt gửi request tới máy chủ. Máy chủ trả về HTML; trình duyệt đọc từ trên xuống và biến các thẻ thành cây DOM.",
        line: 1,
        mark: [1],
        watch: [{ name: "response", value: "200 OK", type: "HTTP" }],
        output: "HTML đã nhận",
        visual: S.flow([{ label: "Gửi request", sub: "GET /" }, { label: "Nhận HTML", sub: "200 OK" }, { label: "Parse DOM", sub: "đọc thẻ" }, { label: "Render", sub: "vẽ pixel" }], [1]),
        note: "HTML là văn bản có cấu trúc, không phải ảnh. Trình duyệt phải đọc và dựng cây trước khi hiển thị.",
        changes: ["Request hoàn tất.", "Trình duyệt bắt đầu phân tích HTML."]
      },
      {
        short: "html là gốc",
        type: "CẤU TRÚC",
        title: "Mọi thứ nằm trong html",
        body: "Thẻ <code>&lt;html&gt;</code> là phần tử gốc. Bên trong có <code>&lt;head&gt;</code> chứa thông tin cho trình duyệt và <code>&lt;body&gt;</code> chứa nội dung người dùng nhìn thấy.",
        line: 2,
        mark: [2],
        watch: [{ name: "documentElement", value: "html", type: "Element" }],
        output: "",
        visual: S.dom([
          { tag: "html", depth: 0, note: "gốc" },
          { tag: "head", depth: 1, note: "metadata" },
          { tag: "body", depth: 1, note: "nội dung" }
        ], [0], "Cây DOM bắt đầu từ html"),
        note: "Chỉ có một thẻ html bao ngoài toàn bộ tài liệu.",
        changes: ["DOM có phần tử gốc html.", "head và body trở thành hai nhánh chính."]
      },
      {
        short: "head chứa metadata",
        type: "HEAD",
        title: "head nói cho trình duyệt biết cách đọc trang",
        body: "<code>&lt;meta charset&gt;</code> khai báo bảng mã để tiếng Việt không bị lỗi. <code>&lt;title&gt;</code> là tiêu đề trên tab; cả hai không xuất hiện trong nội dung trang.",
        line: 4,
        mark: [4, 5, 6],
        watch: [
          { name: "charset", value: "UTF-8", type: "meta" },
          { name: "title", value: "Trang đầu tiên", type: "tab" }
        ],
        output: "",
        visual: S.table(["Phần", "Người thấy", "Vai trò"], [["charset", "trình duyệt", "giải mã ký tự"], ["title", "tab / kết quả tìm kiếm", "tên trang"], ["body", "người dùng", "nội dung"]], 0, "head phục vụ trình duyệt, body phục vụ người đọc"),
        note: "Luôn đặt meta charset ở đầu head để trình duyệt giải mã đúng ngay từ đầu.",
        changes: ["Trình duyệt biết dùng UTF-8.", "Tab có tiêu đề Trang đầu tiên."]
      },
      {
        short: "body chứa nội dung",
        type: "BODY",
        title: "Nội dung nhìn thấy nằm trong body",
        body: "<code>&lt;h1&gt;</code> tạo tiêu đề chính, <code>&lt;p&gt;</code> tạo đoạn văn. Mỗi thẻ là một phần tử DOM có ý nghĩa, không chỉ là chữ được in đậm.",
        line: 8,
        mark: [8, 9, 10],
        watch: [{ name: "h1", value: "Xin chào Frontend", type: "heading" }, { name: "p", value: "1 đoạn", type: "text" }],
        output: "Xin chào Frontend\nTrình duyệt đọc HTML từ trên xuống.",
        visual: S.dom([
          { tag: "body", depth: 0 },
          { tag: "h1", depth: 1, text: "Xin chào Frontend" },
          { tag: "p", depth: 1, text: "Trình duyệt đọc HTML…" }
        ], [1, 2], "Nội dung nằm trong body"),
        note: "Mỗi trang nên có đúng một h1 mô tả nội dung chính.",
        changes: ["body có hai phần tử con.", "Trình duyệt chuẩn bị vẽ tiêu đề và đoạn văn."]
      },
      {
        short: "Từ DOM đến pixel",
        type: "RENDER",
        title: "DOM + CSS mới thành giao diện",
        body: "Trình duyệt đọc CSS thành CSSOM, kết hợp với DOM để tạo render tree, tính vị trí rồi vẽ pixel. JavaScript có thể sửa DOM sau khi trang đã tải.",
        line: 9,
        mark: [9],
        watch: [{ name: "DOM", value: "đã dựng", type: "structure" }, { name: "CSSOM", value: "đang đọc", type: "style" }],
        output: "",
        visual: S.flow([{ label: "HTML", sub: "cấu trúc" }, { label: "DOM", sub: "cây phần tử" }, { label: "CSSOM", sub: "quy tắc style" }, { label: "Render tree", sub: "tính layout" }, { label: "Pixels", sub: "vẽ" }], [3], [0, 1, 2]),
        note: "Sửa DOM hoặc CSS sau khi tải sẽ khiến trình duyệt tính lại layout — đây là lý do cần tối ưu cập nhật giao diện.",
        changes: ["DOM và CSSOM được kết hợp.", "Trình duyệt bắt đầu tính layout và vẽ."]
      }
    ]
  };

  L["html-document"] = {
    id: "html-document",
    track: "design",
    module: "design-foundation",
    title: "Khung tài liệu HTML chuẩn",
    shortTitle: "Khung HTML",
    subtitle: "Những dòng bắt buộc để trang hiển thị đúng trên mọi thiết bị.",
    blurb: "Dựng một trang hồ sơ hoàn chỉnh với doctype, lang, charset, viewport và các vùng header/main.",
    level: "Cơ bản",
    duration: "12 phút",
    lang: "html",
    tags: ["doctype", "viewport", "meta", "document"],
    learn: [
      "Vai trò của DOCTYPE và thuộc tính lang",
      "Meta charset và viewport cho mobile",
      "Cách chia trang thành header, main, footer",
      "Thứ tự tải tài nguyên trong head"
    ],
    code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hồ sơ sinh viên</title>
</head>
<body>
  <header>
    <h1>Nguyễn An</h1>
    <p>Sinh viên CNTT</p>
  </header>
  <main>
    <p>Đam mê thiết kế giao diện.</p>
  </main>
</body>
</html>`,
    file: "profile.html",
    life: {
      icon: "bulb",
      title: "Trang bìa một cuốn sổ",
      text: "DOCTYPE là quy định loại sổ, lang là ngôn ngữ viết, charset là bảng chữ, viewport là cách mở sổ trên trang nhỏ."
    },
    visual: S.dom([{ tag: "html", depth: 0 }, { tag: "head", depth: 1 }, { tag: "body", depth: 1 }, { tag: "header", depth: 2 }, { tag: "main", depth: 2 }], [0], "Khung tài liệu chuẩn"),
    steps: [
      {
        short: "DOCTYPE",
        type: "KHAI BÁO",
        title: "DOCTYPE chọn chế độ hiển thị chuẩn",
        body: "<code>&lt;!DOCTYPE html&gt;</code> phải là dòng đầu tiên. Thiếu nó, trình duyệt có thể rơi vào quirks mode và tính kích thước, layout khác đi.",
        line: 1,
        mark: [1],
        watch: [{ name: "mode", value: "standards", type: "document" }],
        output: "",
        visual: S.table(["Có DOCTYPE", "Chế độ", "Hệ quả"], [["Có", "standards", "layout theo chuẩn"], ["Không", "quirks", "box model dễ lệch"]], 0, "DOCTYPE quyết định cách trình duyệt diễn giải CSS"),
        note: "Đây là khai báo duy nhất không phải thẻ HTML thông thường.",
        changes: ["Trình duyệt chọn standards mode."]
      },
      {
        short: "lang",
        type: "NGÔN NGỮ",
        title: "lang giúp máy đọc đúng tiếng Việt",
        body: "<code>lang=\"vi\"</code> cho trình duyệt và trình đọc màn hình biết ngôn ngữ của trang. Điều này ảnh hưởng cách phát âm, kiểm tra chính tả và dịch tự động.",
        line: 2,
        mark: [2],
        watch: [{ name: "lang", value: "vi", type: "attribute" }],
        output: "",
        visual: S.vars([{ name: "document.lang", type: "string", value: "vi", note: "ngôn ngữ chính" }]),
        note: "Nếu một đoạn dùng ngôn ngữ khác, đặt lang riêng cho đoạn đó.",
        changes: ["Trang được đánh dấu là tiếng Việt."]
      },
      {
        short: "charset",
        type: "META",
        title: "Khai báo bảng mã trước khi đọc nội dung",
        body: "<code>&lt;meta charset=\"UTF-8\"&gt;</code> nên nằm trong 1024 byte đầu của tài liệu. Nếu thiếu, chữ có dấu như “ế”, “ộ” có thể biến thành ký tự lạ.",
        line: 4,
        mark: [4],
        watch: [{ name: "charset", value: "UTF-8", type: "encoding" }],
        output: "Hồ sơ sinh viên",
        visual: S.table(["Ký tự", "UTF-8", "Sai bảng mã"], [["ế", "ế", "áº¿"], ["ộ", "ộ", "á»™"]], 0, "Charset sai làm hỏng tiếng Việt"),
        note: "UTF-8 là lựa chọn mặc định cho web hiện đại.",
        changes: ["Trình duyệt giải mã đúng các ký tự Unicode."]
      },
      {
        short: "viewport",
        type: "META",
        title: "viewport ra lệnh cho mobile",
        body: "Thẻ <code>viewport</code> báo cho trình duyệt mobile dùng đúng chiều rộng thiết bị thay vì thu nhỏ một trang desktop. Đây là điều kiện tiên quyết của responsive.",
        line: 5,
        mark: [5],
        watch: [{ name: "width", value: "device-width", type: "viewport" }, { name: "scale", value: "1.0", type: "viewport" }],
        output: "",
        visual: S.dom([{ tag: "meta", depth: 0, note: "charset" }, { tag: "meta", depth: 0, note: "viewport" }, { tag: "title", depth: 0, note: "tab" }], [1], "Ba thẻ quan trọng trong head"),
        note: "Không có viewport, media query trên điện thoại sẽ không hoạt động như mong đợi.",
        changes: ["Trang dùng chiều rộng thật của thiết bị."]
      },
      {
        short: "header và main",
        type: "BỐ CỤC",
        title: "Chia trang thành những vùng có tên",
        body: "<code>&lt;header&gt;</code> chứa phần giới thiệu, <code>&lt;main&gt;</code> chứa nội dung chính. Các vùng này giúp người dùng công nghệ hỗ trợ nhảy nhanh và giúp mã dễ đọc.",
        line: 8,
        mark: [8, 9, 10, 11, 12, 13, 14],
        watch: [{ name: "header", value: "giới thiệu", type: "landmark" }, { name: "main", value: "nội dung", type: "landmark" }],
        output: "",
        visual: S.dom([
          { tag: "body", depth: 0 },
          { tag: "header", depth: 1, note: "h1 + mô tả" },
          { tag: "main", depth: 1, note: "nội dung chính" }
        ], [1, 2], "Mỗi vùng có một vai trò rõ ràng"),
        note: "Mỗi trang chỉ nên có một main.",
        changes: ["Trang có cấu trúc vùng rõ ràng.", "Trình đọc màn hình có thể nhảy tới main."]
      }
    ]
  };

  L["semantic-html"] = {
    id: "semantic-html",
    track: "design",
    module: "design-foundation",
    title: "HTML ngữ nghĩa",
    shortTitle: "HTML ngữ nghĩa",
    subtitle: "Chọn thẻ theo ý nghĩa thay vì chỉ theo hình dáng.",
    blurb: "article, section, nav, header, footer giúp cấu trúc trang có nghĩa với trình duyệt, SEO và người dùng công nghệ hỗ trợ.",
    level: "Cơ bản",
    duration: "14 phút",
    lang: "html",
    tags: ["semantic", "landmark", "html5", "seo"],
    learn: [
      "Phân biệt div và các thẻ ngữ nghĩa",
      "Dùng article, section, nav đúng vai trò",
      "Tạo landmark cho điều hướng bằng bàn phím",
      "Không lạm dụng thẻ chỉ để tạo kiểu"
    ],
    code: `<article>
  <header>
    <h1>Học CSS Grid</h1>
    <p>12 phút đọc</p>
  </header>
  <nav aria-label="Mục lục">
    <a href="#co-ban">Cơ bản</a>
  </nav>
  <section id="co-ban">
    <h2>Grid là gì?</h2>
    <p>Một hệ thống lưới hai chiều.</p>
  </section>
  <footer>© 2026 FrontLab</footer>
</article>`,
    file: "article.html",
    life: {
      icon: "bulb",
      title: "Một quyển tạp chí",
      text: "article là bài viết, section là mục nhỏ, nav là mục lục, footer là dòng bản quyền. Mỗi phần có tên gọi đúng vai trò thay vì tất cả đều là “hộp”."
    },
    visual: S.dom([{ tag: "article", depth: 0 }, { tag: "header", depth: 1 }, { tag: "nav", depth: 1 }, { tag: "section", depth: 1 }, { tag: "footer", depth: 1 }], [0], "Các vùng ngữ nghĩa trong một bài viết"),
    steps: [
      {
        short: "article",
        type: "NGỮ NGHĨA",
        title: "article là một nội dung độc lập",
        body: "<code>&lt;article&gt;</code> dùng cho một bài viết, sản phẩm hoặc mục có thể đứng riêng. Nếu đem nội dung này sang nơi khác mà vẫn hiểu được, article là lựa chọn phù hợp.",
        line: 1,
        mark: [1],
        watch: [{ name: "article", value: "Học CSS Grid", type: "self-contained" }],
        output: "",
        visual: S.dom([{ tag: "article", depth: 0, note: "nội dung độc lập" }, { tag: "header", depth: 1 }, { tag: "section", depth: 1 }, { tag: "footer", depth: 1 }], [0], "article bao trọn một bài"),
        note: "Không phải mọi khối nội dung đều là article; một đoạn giới thiệu ngắn có thể chỉ là section.",
        changes: ["Trình duyệt hiểu đây là một bài độc lập."]
      },
      {
        short: "header",
        type: "HEADER",
        title: "header mở đầu cho một vùng",
        body: "<code>&lt;header&gt;</code> có thể là đầu trang hoặc đầu một article. Trong article, header thường chứa h1 và thông tin phụ như thời gian đọc.",
        line: 2,
        mark: [2, 3, 4, 5],
        watch: [{ name: "h1", value: "Học CSS Grid", type: "heading" }, { name: "meta", value: "12 phút đọc", type: "text" }],
        output: "",
        visual: S.dom([{ tag: "article", depth: 0 }, { tag: "header", depth: 1, note: "h1 + mô tả" }, { tag: "nav", depth: 1 }], [1], "header đặt ngay đầu article"),
        note: "header không đồng nghĩa với đầu trang; nó mở đầu cho phần tử cha gần nhất.",
        changes: ["Bài viết có phần mở đầu rõ ràng."]
      },
      {
        short: "nav",
        type: "ĐIỀU HƯỚNG",
        title: "nav dành cho các liên kết điều hướng",
        body: "<code>&lt;nav&gt;</code> đánh dấu một nhóm liên kết giúp di chuyển trong trang hoặc sang trang khác. Thêm <code>aria-label</code> để phân biệt nhiều vùng nav.",
        line: 6,
        mark: [6, 7, 8],
        watch: [{ name: "aria-label", value: "Mục lục", type: "a11y" }],
        output: "",
        visual: S.table(["Thẻ", "Dùng khi", "Tránh khi"], [["nav", "menu, mục lục", "mọi nhóm link"], ["div", "trang trí", "điều hướng chính"]], 0, "nav cần có mục đích điều hướng"),
        note: "Không cần bọc mọi liên kết trong nav; chỉ nhóm điều hướng chính mới cần.",
        changes: ["Trình đọc màn hình nhận ra vùng điều hướng."]
      },
      {
        short: "section",
        type: "SECTION",
        title: "section là một chương có tiêu đề",
        body: "<code>&lt;section&gt;</code> nhóm nội dung theo chủ đề và thường có heading riêng. Nếu không tìm được tiêu đề phù hợp, có lẽ bạn chỉ cần một div.",
        line: 9,
        mark: [9, 10, 11, 12],
        watch: [{ name: "section", value: "Grid là gì?", type: "section" }],
        output: "",
        visual: S.dom([{ tag: "article", depth: 0 }, { tag: "section", depth: 1, note: "chương 1" }, { tag: "h2", depth: 2, text: "Grid là gì?" }, { tag: "p", depth: 2 }], [1], "section thường có heading bên trong"),
        note: "Heading giúp tạo mục lục tự động và cấu trúc cho trình đọc màn hình.",
        changes: ["Nội dung được chia thành chương."]
      },
      {
        short: "footer",
        type: "FOOTER",
        title: "footer kết thúc một vùng",
        body: "<code>&lt;footer&gt;</code> chứa thông tin kết thúc như bản quyền, tác giả hoặc liên kết phụ. Nó có thể nằm trong article hoặc ở cuối toàn trang.",
        line: 13,
        mark: [13],
        watch: [{ name: "footer", value: "© 2026 FrontLab", type: "footer" }],
        output: "",
        visual: S.flow([{ label: "article", sub: "nội dung" }, { label: "header", sub: "mở bài" }, { label: "section", sub: "thân bài" }, { label: "footer", sub: "kết bài" }], [3], [0, 1, 2]),
        note: "Đừng dùng footer chỉ để tạo đường kẻ; hãy dùng nó khi nội dung thật sự là phần kết.",
        changes: ["Bài viết có phần kết rõ ràng."]
      }
    ]
  };

  L["text-links"] = {
    id: "text-links",
    track: "design",
    module: "design-foundation",
    title: "Chữ, tiêu đề và liên kết",
    shortTitle: "Text & links",
    subtitle: "Viết nội dung dễ quét mắt và tạo liên kết không gây nhầm lẫn.",
    blurb: "Heading đúng cấp, đoạn văn dễ đọc, link mô tả đích đến và các thuộc tính an toàn khi mở tab mới.",
    level: "Cơ bản",
    duration: "12 phút",
    lang: "html",
    tags: ["heading", "anchor", "link", "content"],
    learn: [
      "Dùng h1–h6 theo thứ bậc",
      "Viết link mô tả đích đến thay vì “bấm vào đây”",
      "Phân biệt link nội bộ, link ngoài và anchor",
      "Dùng target và rel an toàn"
    ],
    code: `<h1>Ba loại liên kết</h1>
<p>
  Đọc <a href="/blog">blog</a>,
  mở <a href="https://example.com" target="_blank" rel="noopener">trang ngoài</a>,
  hoặc nhảy tới <a href="#ket-luan">kết luận</a>.
</p>
<h2 id="ket-luan">Kết luận</h2>
<p>Liên kết phải mô tả đích đến.</p>`,
    file: "post.html",
    life: {
      icon: "bulb",
      title: "Biển chỉ đường",
      text: "Một liên kết tốt giống biển ghi “Bãi đỗ xe 200m”, không phải tấm biển trống ghi “Đi đi”. Người đọc cần biết mình sẽ đi đâu trước khi bấm."
    },
    visual: S.dom([{ tag: "h1", depth: 0, text: "Ba loại liên kết" }, { tag: "p", depth: 0 }, { tag: "a", depth: 1, text: "blog" }, { tag: "h2", depth: 0, text: "Kết luận" }], [2], "Liên kết nằm trong nội dung"),
    steps: [
      {
        short: "Link nội bộ",
        type: "LIÊN KẾT",
        title: "href quyết định đích đến",
        body: "<code>href=\"/blog\"</code> trỏ tới một đường dẫn trong cùng website. Đường dẫn tương đối giúp chuyển môi trường từ local sang production dễ hơn.",
        line: 3,
        mark: [3],
        watch: [{ name: "href", value: "/blog", type: "path" }],
        output: "",
        visual: S.flow([{ label: "Trang hiện tại", sub: "/post" }, { label: "Link", sub: "href=/blog" }, { label: "Trang blog", sub: "cùng site" }], [1]),
        note: "Dùng đường dẫn tương đối khi có thể để tránh hard-code tên miền.",
        changes: ["Liên kết trỏ tới /blog."]
      },
      {
        short: "Anchor trong trang",
        type: "ANCHOR",
        title: "Dấu # nhảy tới một id",
        body: "<code>href=\"#ket-luan\"</code> cuộn tới phần tử có <code>id=\"ket-luan\"</code>. Đây là cách làm mục lục trong một bài dài mà không cần JavaScript.",
        line: 5,
        mark: [5, 7],
        watch: [{ name: "href", value: "#ket-luan", type: "fragment" }, { name: "target", value: "h2#ket-luan", type: "element" }],
        output: "",
        visual: S.flow([{ label: "Bấm link", sub: "#ket-luan" }, { label: "Tìm id", sub: "h2" }, { label: "Cuộn tới", sub: "smooth?" }], [1]),
        note: "id phải duy nhất trong trang và không nên bắt đầu bằng số.",
        changes: ["Trình duyệt tìm phần tử đích và cuộn tới."]
      },
      {
        short: "Tab mới",
        type: "AN TOÀN",
        title: "target=\"_blank\" cần rel=\"noopener\"",
        body: "Mở tab mới bằng <code>target=\"_blank\"</code> có thể tạo lỗ hổng nếu thiếu <code>rel=\"noopener\"</code>. Thuộc tính này chặn trang mới truy cập <code>window.opener</code>.",
        line: 4,
        mark: [4],
        watch: [{ name: "target", value: "_blank", type: "window" }, { name: "rel", value: "noopener", type: "security" }],
        output: "",
        visual: S.table(["Thuộc tính", "Tác dụng"], [["target=_blank", "mở tab mới"], ["rel=noopener", "chặn opener"], ["rel=noreferrer", "ẩn referrer"]], 1, "Mở tab mới phải đi kèm bảo vệ"),
        note: "Nếu không cần tab mới, hãy để người dùng tự quyết định — đó là thói quen tốt.",
        changes: ["Tab mới không thể điều khiển tab gốc."]
      },
      {
        short: "Link có nghĩa",
        type: "A11Y",
        title: "Nội dung link phải tự giải thích",
        body: "Trình đọc màn hình có thể liệt kê riêng các link. “Đọc thêm” hoặc “bấm vào đây” không cho biết đích đến; hãy viết “Đọc hướng dẫn CSS Grid”.",
        line: 8,
        mark: [8],
        watch: [{ name: "link text", value: "Đọc hướng dẫn CSS Grid", type: "accessible" }],
        output: "",
        visual: S.table(["Kém", "Tốt"], [["Bấm vào đây", "Xem bảng giá"], ["Đọc thêm", "Đọc hướng dẫn CSS Grid"], ["Link", "Tải mẫu CV PDF"]], 0, "Link đứng một mình vẫn phải hiểu được"),
        note: "Đừng đặt toàn bộ đoạn văn trong link; chỉ đặt cụm từ mô tả đích đến.",
        changes: ["Người dùng công nghệ hỗ trợ hiểu link dẫn đi đâu."]
      },
      {
        short: "Heading theo cấp",
        type: "CẤU TRÚC",
        title: "Heading tạo mục lục cho mắt và máy",
        body: "Trang nên có một <code>h1</code>, sau đó dùng <code>h2</code>, <code>h3</code> theo thứ bậc. Không nhảy từ h1 xuống h4 chỉ vì muốn chữ nhỏ hơn.",
        line: 7,
        mark: [1, 7],
        watch: [{ name: "h1", value: "Ba loại liên kết", type: "heading" }, { name: "h2", value: "Kết luận", type: "heading" }],
        output: "",
        visual: S.dom([{ tag: "h1", depth: 0, text: "Ba loại liên kết" }, { tag: "h2", depth: 1, text: "Kết luận" }], [1], "Heading lồng theo thứ bậc"),
        note: "Muốn chữ nhỏ hơn, hãy đổi CSS thay vì nhảy cấp heading.",
        changes: ["Cấu trúc heading rõ ràng cho SEO và điều hướng."]
      }
    ]
  };

  L["images-media"] = {
    id: "images-media",
    track: "design",
    module: "design-media",
    title: "Hình ảnh và media",
    shortTitle: "Images & media",
    subtitle: "Hiển thị ảnh nét, đúng tỉ lệ và không làm trang nhảy.",
    blurb: "alt, width/height, loading, figure và video: những thuộc tính nhỏ quyết định trải nghiệm tải trang.",
    level: "Cơ bản",
    duration: "13 phút",
    lang: "html",
    tags: ["img", "alt", "lazy", "figure", "video"],
    learn: [
      "Viết alt có nghĩa cho ảnh nội dung",
      "Đặt width/height để tránh layout shift",
      "Dùng loading=lazy đúng chỗ",
      "Bọc ảnh và chú thích bằng figure"
    ],
    code: `<figure>
  <img
    src="studio.jpg"
    alt="Bàn làm việc có laptop và bản phác thảo giao diện"
    width="640"
    height="420"
    loading="lazy">
  <figcaption>Không gian làm việc của nhóm thiết kế.</figcaption>
</figure>
<video controls poster="cover.jpg">
  <source src="demo.mp4" type="video/mp4">
</video>`,
    file: "media.html",
    life: {
      icon: "bulb",
      title: "Khung ảnh có chú thích",
      text: "alt giống lời mô tả cho người không nhìn thấy ảnh; width/height là kích thước khung trước khi ảnh tới; loading=lazy là chỉ lấy ảnh khi sắp nhìn tới."
    },
    visual: S.table(["Thuộc tính", "Giải quyết"], [["alt", "nội dung thay thế"], ["width/height", "giữ chỗ"], ["loading=lazy", "tải sau"]], 0, "Ba thuộc tính quan trọng của img"),
    steps: [
      {
        short: "src và alt",
        type: "ẢNH",
        title: "Ảnh cần nguồn và mô tả",
        body: "<code>src</code> là đường dẫn tới file ảnh. <code>alt</code> mô tả nội dung hoặc chức năng của ảnh; ảnh trang trí thuần túy nên dùng <code>alt=\"\"</code>.",
        line: 3,
        mark: [3, 4],
        watch: [{ name: "src", value: "studio.jpg", type: "image" }, { name: "alt", value: "Bàn làm việc…", type: "text" }],
        output: "",
        visual: S.vars([{ name: "src", type: "URL", value: "studio.jpg", note: "file ảnh" }, { name: "alt", type: "string", value: "Bàn làm việc…", note: "mô tả" }]),
        note: "Alt không phải nơi nhồi từ khóa SEO; hãy viết như đang mô tả ảnh cho một người bạn.",
        changes: ["Trình duyệt biết tải ảnh nào.", "Trình đọc màn hình có mô tả thay thế."]
      },
      {
        short: "Giữ chỗ",
        type: "LAYOUT",
        title: "width/height chống nhảy trang",
        body: "Khi biết trước tỉ lệ ảnh, đặt <code>width</code> và <code>height</code> để trình duyệt giữ chỗ. Ảnh tải xong sẽ không đẩy nội dung bên dưới xuống.",
        line: 5,
        mark: [5, 6],
        watch: [{ name: "width", value: "640", type: "px" }, { name: "height", value: "420", type: "px" }],
        output: "",
        visual: S.flow([{ label: "Khung trống", sub: "640×420" }, { label: "Ảnh tới", sub: "điền vào" }, { label: "Layout", sub: "không nhảy" }], [1]),
        note: "CSS có thể đặt width:100% nhưng vẫn nên giữ thuộc tính width/height gốc để có tỉ lệ.",
        changes: ["Trình duyệt giữ đúng tỉ lệ trước khi ảnh tải xong."]
      },
      {
        short: "Lazy load",
        type: "HIỆU NĂNG",
        title: "Chỉ tải ảnh khi sắp cần",
        body: "<code>loading=\"lazy\"</code> hoãn tải ảnh ngoài màn hình đầu. Không nên dùng cho ảnh hero hoặc ảnh above-the-fold vì có thể làm ảnh chính xuất hiện chậm.",
        line: 7,
        mark: [7],
        watch: [{ name: "loading", value: "lazy", type: "performance" }],
        output: "",
        visual: S.table(["Vị trí ảnh", "Nên dùng lazy?"], [["Ảnh hero", "Không"], ["Ảnh cuối trang", "Có"], ["Gallery dài", "Có"]], 0, "Lazy load có ngữ cảnh"),
        note: "Lazy load là tối ưu, nhưng đừng làm chậm nội dung quan trọng nhất.",
        changes: ["Ảnh dưới màn hình đầu sẽ tải sau."]
      },
      {
        short: "figure",
        type: "NGỮ NGHĨA",
        title: "figure gắn ảnh với chú thích",
        body: "<code>&lt;figure&gt;</code> nhóm ảnh và <code>&lt;figcaption&gt;</code> thành một đơn vị nội dung. Trình đọc màn hình hiểu chú thích thuộc về ảnh nào.",
        line: 1,
        mark: [1, 8, 9],
        watch: [{ name: "figure", value: "ảnh + caption", type: "group" }],
        output: "",
        visual: S.dom([{ tag: "figure", depth: 0 }, { tag: "img", depth: 1, note: "ảnh chính" }, { tag: "figcaption", depth: 1, text: "chú thích" }], [1, 2], "figure gắn ảnh với chú thích"),
        note: "Không cần figure cho mọi ảnh; chỉ dùng khi ảnh có chú thích hoặc là một đơn vị nội dung.",
        changes: ["Ảnh và chú thích được nhóm đúng nghĩa."]
      },
      {
        short: "video",
        type: "MEDIA",
        title: "Video cần controls và poster",
        body: "<code>controls</code> hiện nút phát; <code>poster</code> là ảnh xem trước. Thẻ <code>&lt;source&gt;</code> cho phép cung cấp nhiều định dạng để trình duyệt chọn.",
        line: 10,
        mark: [10, 11, 12],
        watch: [{ name: "controls", value: "bật", type: "player" }, { name: "poster", value: "cover.jpg", type: "image" }],
        output: "",
        visual: S.flow([{ label: "Poster", sub: "ảnh bìa" }, { label: "Controls", sub: "người dùng phát" }, { label: "Source", sub: "chọn định dạng" }], [1]),
        note: "Video tự phát thường gây khó chịu; hãy để người dùng chủ động phát.",
        changes: ["Video có điều khiển và ảnh xem trước."]
      }
    ]
  };

  L["forms-inputs"] = {
    id: "forms-inputs",
    track: "design",
    module: "design-media",
    title: "Form và input",
    shortTitle: "Forms",
    subtitle: "Thu dữ liệu đúng cách, có nhãn và phản hồi rõ ràng.",
    blurb: "label, input type, select, button và cách form gửi dữ liệu — nền tảng của mọi luồng đăng ký, tìm kiếm, thanh toán.",
    level: "Cơ bản",
    duration: "15 phút",
    lang: "html",
    tags: ["form", "input", "label", "select", "validation"],
    learn: [
      "Liên kết label với input bằng for/id",
      "Chọn type đúng để có bàn phím phù hợp",
      "Dùng required và các thuộc tính validate sẵn",
      "Phân biệt GET và POST"
    ],
    code: `<form action="/dang-ky" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>
  <label for="role">Vai trò</label>
  <select id="role" name="role">
    <option value="student">Sinh viên</option>
    <option value="teacher">Giảng viên</option>
  </select>
  <button type="submit">Gửi</button>
</form>`,
    file: "signup.html",
    life: {
      icon: "bulb",
      title: "Phiếu đăng ký",
      text: "Form giống phiếu giấy: mỗi ô có nhãn, có loại dữ liệu, có nút gửi. Nhãn rõ ràng giúp người điền không đoán mò."
    },
    visual: S.dom([{ tag: "form", depth: 0 }, { tag: "label", depth: 1, text: "Email" }, { tag: "input", depth: 1, note: "type=email" }, { tag: "select", depth: 1 }, { tag: "button", depth: 1, text: "Gửi" }], [2], "Cấu trúc form"),
    steps: [
      {
        short: "form",
        type: "BIỂU MẪU",
        title: "action và method quyết định dữ liệu đi đâu",
        body: "<code>action</code> là địa chỉ nhận dữ liệu; <code>method=\"post\"</code> gửi trong body request. Với form đăng ký hoặc dữ liệu nhạy cảm, không dùng GET.",
        line: 1,
        mark: [1],
        watch: [{ name: "action", value: "/dang-ky", type: "URL" }, { name: "method", value: "POST", type: "HTTP" }],
        output: "",
        visual: S.flow([{ label: "Người dùng", sub: "điền" }, { label: "Form", sub: "POST /dang-ky" }, { label: "Server", sub: "xử lý" }], [1]),
        note: "GET đưa dữ liệu lên URL, nên tránh dùng cho mật khẩu hay thông tin cá nhân.",
        changes: ["Form sẽ gửi dữ liệu bằng POST tới /dang-ky."]
      },
      {
        short: "label",
        type: "NHÃN",
        title: "label phải gắn với đúng input",
        body: "<code>for=\"email\"</code> khớp với <code>id=\"email\"</code> của input. Nhờ đó bấm vào chữ Email cũng focus được ô nhập và trình đọc màn hình đọc đúng nhãn.",
        line: 2,
        mark: [2, 3],
        watch: [{ name: "for", value: "email", type: "label" }, { name: "id", value: "email", type: "input" }],
        output: "",
        visual: S.vars([{ name: "label.for", type: "string", value: "email" }, { name: "input.id", type: "string", value: "email" }, { name: "khớp", type: "boolean", value: "true" }]),
        note: "Không dùng placeholder thay cho label; placeholder biến mất khi người dùng gõ.",
        changes: ["Nhãn và ô nhập được liên kết."]
      },
      {
        short: "type",
        type: "INPUT",
        title: "Chọn type đúng để giảm lỗi",
        body: "<code>type=\"email\"</code> giúp mobile hiện bàn phím có @ và trình duyệt kiểm tra định dạng cơ bản. <code>required</code> chặn gửi form khi còn trống.",
        line: 3,
        mark: [3],
        watch: [{ name: "type", value: "email", type: "input" }, { name: "required", value: "true", type: "constraint" }],
        output: "",
        visual: S.table(["type", "Bàn phím / hành vi"], [["text", "bàn phím thường"], ["email", "có @"], ["number", "bàn phím số"], ["date", "chọn ngày"]], 1, "Type đúng cải thiện trải nghiệm nhập liệu"),
        note: "Validate phía client chỉ hỗ trợ người dùng; server vẫn phải kiểm tra lại.",
        changes: ["Ô email có kiểm tra định dạng sơ bộ."]
      },
      {
        short: "select",
        type: "LỰA CHỌN",
        title: "select dùng khi danh sách cố định",
        body: "Mỗi <code>&lt;option&gt;</code> có <code>value</code> là dữ liệu gửi đi, còn phần chữ là nhãn người dùng thấy. Nếu ít lựa chọn, radio button có thể dễ dùng hơn.",
        line: 5,
        mark: [5, 6, 7, 8],
        watch: [{ name: "role", value: "student", type: "value" }, { name: "options", value: "2", type: "count" }],
        output: "",
        visual: S.dom([{ tag: "select", depth: 0 }, { tag: "option", depth: 1, text: "Sinh viên" }, { tag: "option", depth: 1, text: "Giảng viên" }], [1], "Select chứa các option"),
        note: "Đừng đặt value trùng nhau; server sẽ không phân biệt được lựa chọn.",
        changes: ["Danh sách vai trò có hai lựa chọn."]
      },
      {
        short: "button",
        type: "GỬI",
        title: "Button cần type rõ ràng",
        body: "Trong form, <code>&lt;button&gt;</code> mặc định là submit. Nếu cần nút phụ, đặt <code>type=\"button\"</code> để tránh gửi form ngoài ý muốn.",
        line: 9,
        mark: [9],
        watch: [{ name: "type", value: "submit", type: "button" }],
        output: "Form hợp lệ → gửi /dang-ky",
        visual: S.flow([{ label: "Kiểm tra required", sub: "hợp lệ?" }, { label: "Gửi form", sub: "POST" }, { label: "Phản hồi", sub: "server" }], [1], [0]),
        note: "Luôn nghĩ tới trạng thái loading và lỗi sau khi bấm gửi.",
        changes: ["Nút Gửi kích hoạt submit form."]
      }
    ]
  };

  L["tables-data"] = {
    id: "tables-data",
    track: "design",
    module: "design-media",
    title: "Bảng dữ liệu",
    shortTitle: "Tables",
    subtitle: "Trình bày dữ liệu nhiều cột mà vẫn đọc được trên mobile.",
    blurb: "caption, thead, tbody, scope và chiến lược cuộn ngang cho bảng — những chi tiết giúp bảng không trở thành cơn ác mộng.",
    level: "Cơ bản",
    duration: "12 phút",
    lang: "html",
    tags: ["table", "caption", "thead", "scope", "responsive"],
    learn: [
      "Cấu trúc table, thead, tbody",
      "Dùng th và scope đúng",
      "caption mô tả bảng",
      "Chiến lược hiển thị bảng trên mobile"
    ],
    code: `<table>
  <caption>Điểm môn học</caption>
  <thead>
    <tr><th scope="col">Môn</th><th scope="col">Điểm</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">HTML</th><td>9.0</td></tr>
    <tr><th scope="row">CSS</th><td>8.5</td></tr>
  </tbody>
</table>`,
    file: "grades.html",
    life: {
      icon: "bulb",
      title: "Bảng điểm trên giấy",
      text: "Không có tiêu đề cột thì không ai biết 9.0 là điểm môn nào. caption là tên bảng, th là tiêu đề hàng/cột, scope nói rõ hướng đọc."
    },
    visual: S.table(["Môn", "Điểm"], [["HTML", "9.0"], ["CSS", "8.5"]], 1, "Bảng điểm có tiêu đề rõ ràng"),
    steps: [
      {
        short: "table & caption",
        type: "BẢNG",
        title: "caption đặt tên cho bảng",
        body: "<code>&lt;caption&gt;</code> mô tả bảng là gì và nên nằm ngay sau thẻ mở table. Người dùng công nghệ hỗ trợ nghe được caption trước khi đọc dữ liệu.",
        line: 1,
        mark: [1, 2],
        watch: [{ name: "caption", value: "Điểm môn học", type: "title" }],
        output: "",
        visual: S.table(["Môn", "Điểm"], [["HTML", "9.0"], ["CSS", "8.5"]], 0, "Caption: Điểm môn học"),
        note: "Chỉ dùng table cho dữ liệu dạng bảng, không dùng để dựng layout.",
        changes: ["Bảng có tên rõ ràng."]
      },
      {
        short: "thead/tbody",
        type: "CẤU TRÚC",
        title: "Tách phần đầu và phần thân",
        body: "<code>thead</code> chứa hàng tiêu đề, <code>tbody</code> chứa dữ liệu. Cách tách này giúp CSS làm header dính khi cuộn và giúp trình đọc màn hình hiểu cấu trúc.",
        line: 3,
        mark: [3, 4, 5, 6],
        watch: [{ name: "thead", value: "1 hàng", type: "header" }, { name: "tbody", value: "2 hàng", type: "body" }],
        output: "",
        visual: S.dom([{ tag: "table", depth: 0 }, { tag: "thead", depth: 1 }, { tag: "tr", depth: 2 }, { tag: "tbody", depth: 1 }, { tag: "tr", depth: 2 }], [1, 3], "thead và tbody tách vai trò"),
        note: "tbody là mặc định của trình duyệt, nhưng viết rõ giúp mã dễ đọc hơn.",
        changes: ["Phần đầu và dữ liệu được tách rõ."]
      },
      {
        short: "th & scope",
        type: "A11Y",
        title: "scope nói ô này là tiêu đề gì",
        body: "<code>th scope=\"col\"</code> là tiêu đề cột; <code>scope=\"row\"</code> là tiêu đề hàng. Nhờ đó khi đọc ô 9.0, trình đọc màn hình biết đó là điểm của HTML.",
        line: 4,
        mark: [4, 7, 8],
        watch: [{ name: "scope", value: "col / row", type: "relation" }],
        output: "",
        visual: S.table(["", "Điểm"], [["HTML", "9.0"], ["CSS", "8.5"]], 0, "Hàng và cột đều có tiêu đề"),
        note: "Không dùng td cho ô tiêu đề; hãy dùng th.",
        changes: ["Mỗi ô dữ liệu có tiêu đề hàng và cột."]
      },
      {
        short: "Dữ liệu",
        type: "NỘI DUNG",
        title: "Mỗi hàng là một bản ghi",
        body: "Trong <code>tbody</code>, mỗi <code>tr</code> là một bản ghi, mỗi <code>td</code> là một trường. Giữ số ô mỗi hàng bằng số cột tiêu đề để bảng không lệch.",
        line: 7,
        mark: [7, 8],
        watch: [{ name: "rows", value: "2", type: "count" }, { name: "cols", value: "2", type: "count" }],
        output: "",
        visual: S.table(["Môn", "Điểm"], [["HTML", "9.0"], ["CSS", "8.5"]], 1, "Hai bản ghi, hai cột"),
        note: "Nếu một hàng thiếu ô, hãy dùng ô trống có chủ đích thay vì bỏ td.",
        changes: ["Dữ liệu được tổ chức đều hàng và cột."]
      },
      {
        short: "Bảng trên mobile",
        type: "RESPONSIVE",
        title: "Đừng ép bảng 8 cột vào màn hình 390px",
        body: "Với bảng rộng, bọc trong vùng cuộn ngang có <code>overflow-x:auto</code> hoặc chuyển thành card trên mobile. Không làm chữ nhỏ đến mức không đọc được.",
        line: 10,
        mark: [10],
        watch: [{ name: "overflow-x", value: "auto", type: "CSS" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "column", gap: 8, items: [{ label: "Cột 1", grow: 1 }, { label: "Cột 2", grow: 1 }, { label: "Cột 3", grow: 1 }], caption: "Mobile: chuyển hàng thành các khối xếp dọc" }),
        note: "Cuộn ngang chấp nhận được nếu có chỉ dẫn; thu nhỏ chữ thì không.",
        changes: ["Bảng giữ được khả năng đọc trên màn hình hẹp."]
      }
    ]
  };

  L["accessibility"] = {
    id: "accessibility",
    track: "design",
    module: "design-media",
    title: "Accessibility nền tảng",
    shortTitle: "Accessibility",
    subtitle: "Thiết kế để nhiều người dùng được hơn, không chỉ người dùng chuột.",
    blurb: "Alt, label, aria, focus, bàn phím và độ tương phản — những việc nhỏ tạo khác biệt lớn.",
    level: "Cơ bản",
    duration: "15 phút",
    lang: "html",
    tags: ["a11y", "aria", "keyboard", "contrast", "semantics"],
    learn: [
      "Bắt đầu bằng HTML ngữ nghĩa trước khi dùng ARIA",
      "Viết alt và label có nghĩa",
      "Đảm bảo mọi thứ dùng được bằng bàn phím",
      "Kiểm tra độ tương phản màu chữ"
    ],
    code: `<button aria-label="Đóng hộp thoại">×</button>
<label for="search">Tìm khóa học</label>
<input id="search" type="search">
<img src="chart.png" alt="Doanh thu tăng 20% trong quý 4">
<a href="#main" class="skip-link">Bỏ qua điều hướng</a>
<main id="main">
  <h1>Khóa học Frontend</h1>
</main>`,
    file: "a11y.html",
    life: {
      icon: "bulb",
      title: "Lối đi có ram dốc",
      text: "Ram dốc giúp người đi xe lăn, nhưng cũng giúp người đẩy xe hàng. Accessibility không phải tính năng phụ; nó làm sản phẩm tốt hơn cho mọi người."
    },
    visual: S.table(["Công cụ", "Vai trò"], [["HTML ngữ nghĩa", "nền tảng"], ["Bàn phím", "điều hướng"], ["Màu tương phản", "đọc được"], ["ARIA", "bổ sung khi thiếu"]], 0, "Bốn lớp của accessibility"),
    steps: [
      {
        short: "Semantics trước",
        type: "A11Y",
        title: "Thẻ đúng làm rất nhiều việc miễn phí",
        body: "Nút thật là <code>&lt;button&gt;</code>, liên kết thật là <code>&lt;a href&gt;</code>. Chúng tự có focus, bàn phím và vai trò cho trình đọc màn hình; div giả button thì không.",
        line: 1,
        mark: [1],
        watch: [{ name: "role", value: "button", type: "native" }],
        output: "",
        visual: S.table(["Tình huống", "Dùng"], [["Bấm hành động", "button"], ["Chuyển trang", "a href"], ["Tiêu đề", "h1–h6"], ["Vùng chính", "main"]], 0, "Ưu tiên phần tử HTML gốc"),
        note: "Quy tắc đầu tiên của ARIA: đừng dùng ARIA nếu HTML gốc đã làm được.",
        changes: ["Nút có vai trò và hành vi bàn phím chuẩn."]
      },
      {
        short: "Label",
        type: "FORM",
        title: "Mỗi ô nhập cần một nhãn",
        body: "<code>&lt;label for=\"search\"&gt;</code> gắn với <code>id=\"search\"</code>. Nếu nhãn chỉ là icon, dùng <code>aria-label</code> hoặc text ẩn để vẫn có tên cho ô nhập.",
        line: 2,
        mark: [2, 3],
        watch: [{ name: "label", value: "Tìm khóa học", type: "accessible name" }],
        output: "",
        visual: S.vars([{ name: "input#search", type: "element", value: "có label", note: "đọc được" }]),
        note: "Placeholder không thay thế label; nó biến mất khi gõ và độ tương phản thường thấp.",
        changes: ["Ô tìm kiếm có tên rõ ràng."]
      },
      {
        short: "Alt",
        type: "ẢNH",
        title: "Mô tả ảnh theo mục đích",
        body: "Nếu ảnh truyền đạt thông tin, alt phải nói được thông tin đó. Ảnh chỉ trang trí nên có <code>alt=\"\"</code> để trình đọc màn hình bỏ qua.",
        line: 4,
        mark: [4],
        watch: [{ name: "alt", value: "Doanh thu tăng 20%…", type: "description" }],
        output: "",
        visual: S.table(["Loại ảnh", "Alt"], [["Biểu đồ", "mô tả xu hướng"], ["Logo có link", "tên thương hiệu"], ["Trang trí", "alt rỗng"]], 0, "Alt phụ thuộc ngữ cảnh"),
        note: "Đừng bắt đầu alt bằng “hình ảnh của”; trình đọc màn hình đã nói đó là ảnh.",
        changes: ["Biểu đồ có mô tả thay thế."]
      },
      {
        short: "Aria-label",
        type: "ARIA",
        title: "Đặt tên cho nút chỉ có icon",
        body: "Nút đóng với ký tự × không tự nói lên chức năng. <code>aria-label=\"Đóng hộp thoại\"</code> cung cấp tên cho trình đọc màn hình mà không thêm chữ nhìn thấy.",
        line: 1,
        mark: [1],
        watch: [{ name: "aria-label", value: "Đóng hộp thoại", type: "accessible name" }],
        output: "",
        visual: S.flow([{ label: "Nút ×", sub: "chỉ có icon" }, { label: "aria-label", sub: "tên ẩn" }, { label: "Screen reader", sub: "Đóng hộp thoại" }], [1]),
        note: "ARIA chỉ đổi cách máy hiểu; nó không thêm hành vi. Vẫn phải xử lý click và bàn phím.",
        changes: ["Nút icon có tên dễ hiểu."]
      },
      {
        short: "Bàn phím & focus",
        type: "KEYBOARD",
        title: "Mọi thứ quan trọng phải tới được bằng Tab",
        body: "Kiểm tra trang chỉ bằng Tab, Shift+Tab, Enter và Space. Không được xóa outline focus nếu chưa có thay thế rõ ràng. Skip link giúp bỏ qua menu dài.",
        line: 5,
        mark: [5, 6, 7, 8],
        watch: [{ name: "focus", value: "skip-link", type: "keyboard" }],
        output: "",
        visual: S.flow([{ label: "Tab", sub: "skip link" }, { label: "Tab", sub: "nav" }, { label: "Tab", sub: "main" }, { label: "Enter", sub: "kích hoạt" }], [0]),
        note: "Đừng dùng tabindex dương; thứ tự Tab nên theo thứ tự DOM tự nhiên.",
        changes: ["Người dùng bàn phím có thể bỏ qua điều hướng."]
      }
    ]
  };

  L["css-selectors"] = {
    id: "css-selectors",
    track: "design",
    module: "design-css",
    title: "CSS selector",
    shortTitle: "Selectors",
    subtitle: "Chọn đúng phần tử trước khi nghĩ tới trang trí.",
    blurb: "Class, tổ hợp, con trực tiếp và attribute selector — cách CSS tìm đúng phần tử để áp dụng style.",
    level: "Cơ bản",
    duration: "13 phút",
    lang: "css",
    tags: ["selector", "class", "combinator", "attribute"],
    learn: [
      "Phân biệt selector thẻ, class và id",
      "Đọc tổ hợp .card.featured",
      "Dùng child combinator >",
      "Chọn theo attribute data-*"
    ],
    code: `.card {
  padding: 16px;
}
.card.featured {
  border: 2px solid #0f9f8a;
}
.card > h2 {
  margin: 0;
}
[data-state="open"] .card {
  display: block;
}`,
    file: "selectors.css",
    life: {
      icon: "bulb",
      title: "Địa chỉ nhận thư",
      text: "Selector giống địa chỉ: “mọi ngôi nhà trên phố” là selector thẻ, “nhà số 12” là id, “nhà có biển xanh” là class. Càng cụ thể càng dễ trúng nhưng cũng dễ vỡ."
    },
    visual: S.dom([{ tag: "div", depth: 0, note: "class=card featured" }, { tag: "h2", depth: 1, text: "Tiêu đề" }, { tag: "p", depth: 1, text: "Mô tả" }], [0], "Selector .card chọn div này"),
    steps: [
      {
        short: "Class selector",
        type: "CHỌN",
        title: "Dấu chấm chọn theo class",
        body: "<code>.card</code> chọn mọi phần tử có <code>class=\"card\"</code>. Class có thể dùng lại nhiều lần và là cách chính để xây component.",
        line: 1,
        mark: [1, 2, 3],
        watch: [{ name: ".card", value: "3 phần tử", type: "class" }],
        output: "",
        visual: S.dom([{ tag: "article", depth: 0, note: "class=card" }, { tag: "article", depth: 0, note: "class=card" }, { tag: "article", depth: 0, note: "class=card featured" }], [0, 1, 2], "Class chọn nhiều phần tử"),
        note: "Tên class nên mô tả vai trò, ví dụ .card, .toolbar, .badge — không mô tả màu.",
        changes: ["Cả ba card nhận padding."]
      },
      {
        short: "Ghép class",
        type: "TỔ HỢP",
        title: ".card.featured là “vừa card vừa featured”",
        body: "Hai class viết liền không có khoảng trắng nghĩa là cùng một phần tử phải có cả hai. Đây là cách tạo biến thể mà không cần selector phức tạp.",
        line: 4,
        mark: [4, 5, 6],
        watch: [{ name: ".card.featured", value: "1 phần tử", type: "compound" }],
        output: "",
        visual: S.table(["Phần tử", ".card", ".card.featured"], [["card", "✓", "—"], ["card featured", "✓", "✓"], ["featured", "—", "—"]], 1, "Chỉ phần tử có cả hai class mới khớp"),
        note: "Không viết .card .featured nếu ý bạn là cùng một phần tử; dấu cách đổi nghĩa hoàn toàn.",
        changes: ["Chỉ card nổi bật nhận viền xanh."]
      },
      {
        short: "Con trực tiếp",
        type: "COMBINATOR",
        title: "> chỉ chọn con trực tiếp",
        body: "<code>.card &gt; h2</code> chọn h2 là con trực tiếp của card, không chọn h2 nằm sâu trong một khối khác. Điều này giúp tránh style lan quá rộng.",
        line: 7,
        mark: [7, 8, 9],
        watch: [{ name: ">", value: "child", type: "combinator" }],
        output: "",
        visual: S.dom([{ tag: "div.card", depth: 0 }, { tag: "h2", depth: 1, note: "con trực tiếp ✓" }, { tag: "div", depth: 1 }, { tag: "h2", depth: 2, note: "cháu — không khớp" }], [1], "> chỉ đi một cấp"),
        note: "Dấu cách chọn con cháu nhiều cấp; > chọn đúng một cấp.",
        changes: ["Chỉ tiêu đề trực tiếp của card bỏ margin."]
      },
      {
        short: "Attribute",
        type: "ATTRIBUTE",
        title: "Chọn theo trạng thái dữ liệu",
        body: "<code>[data-state=\"open\"] .card</code> chọn card nằm trong vùng có data-state open. Đây là cách nối CSS với trạng thái do JavaScript điều khiển.",
        line: 10,
        mark: [10, 11, 12],
        watch: [{ name: "data-state", value: "open", type: "attribute" }],
        output: "",
        visual: S.table(["data-state", ".card hiển thị?"], [["open", "có"], ["closed", "không"], ["(không có)", "không"]], 0, "Attribute selector đọc trạng thái"),
        note: "Attribute selector hữu ích cho trạng thái, nhưng đừng lạm dụng để thay toàn bộ class.",
        changes: ["Card trong vùng open được hiển thị."]
      },
      {
        short: "Đừng quá cụ thể",
        type: "THỰC HÀNH",
        title: "Selector ngắn, dễ bảo trì",
        body: "Tránh chuỗi dài như <code>div#app .content ul li a</code>. Ưu tiên class rõ nghĩa và cấu trúc component; selector ngắn giúp đổi HTML mà ít phá CSS.",
        line: 1,
        mark: [1],
        watch: [{ name: "selector", value: ".card", type: "short" }],
        output: "",
        visual: S.table(["Selector", "Độ bền"], [[".card", "tốt"], [".card > h2", "khá"], ["#app div ul li a", "dễ vỡ"]], 0, "Càng phụ thuộc cấu trúc càng dễ vỡ"),
        note: "Nếu selector quá dài, có thể HTML đang thiếu class ngữ nghĩa.",
        changes: ["CSS tập trung vào class thay vì cấu trúc sâu."]
      }
    ]
  };

  L["cascade-specificity"] = {
    id: "cascade-specificity",
    track: "design",
    module: "design-css",
    title: "Cascade và specificity",
    shortTitle: "Cascade",
    subtitle: "Vì sao một style không được áp dụng dù bạn đã viết đúng?",
    blurb: "Thứ tự khai báo, độ ưu tiên selector, custom property và !important — đọc được “cuộc chiến” giữa các rule CSS.",
    level: "Trung cấp",
    duration: "15 phút",
    lang: "css",
    tags: ["cascade", "specificity", "custom-properties", "important"],
    learn: [
      "Cascade xét nguồn, specificity và thứ tự",
      "Tính điểm selector cơ bản",
      "Dùng custom property để tránh lặp",
      "Khi nào !important là dấu hiệu xấu"
    ],
    code: `:root {
  --brand: #0f9f8a;
}
.card {
  color: #14202d;
}
.card.featured {
  color: var(--brand);
}
#hero .card {
  color: #ffffff;
}
.card { color: #ff0000 !important; }`,
    file: "cascade.css",
    life: {
      icon: "bulb",
      title: "Luật ưu tiên giao thông",
      text: "Khi nhiều người cùng ra lệnh, cần thứ tự ưu tiên. Cascade là luật giao thông của CSS: ai cụ thể hơn, ai đến sau, ai được đánh dấu đặc biệt."
    },
    visual: S.table(["Selector", "Điểm", "Thắng?"], [["#hero .card", "1-1-0", "cao"], [".card.featured", "0-2-0", "thấp hơn"], [".card", "0-1-0", "thấp"], ["!important", "đặc biệt", "thắng thường"]], 0, "Specificity quyết định khi cùng nguồn"),
    steps: [
      {
        short: "Custom property",
        type: "BIẾN CSS",
        title: "Một biến, nhiều nơi dùng",
        body: "<code>--brand</code> khai báo trong <code>:root</code> là biến toàn cục. Dùng <code>var(--brand)</code> giúp đổi màu thương hiệu một chỗ mà không săn từng rule.",
        line: 1,
        mark: [1, 2, 3],
        watch: [{ name: "--brand", value: "#0f9f8a", type: "custom property" }],
        output: "",
        visual: S.vars([{ name: "--brand", type: "color", value: "#0f9f8a", note: "toàn cục" }, { name: "var(--brand)", type: "color", value: "#0f9f8a", note: "được tham chiếu" }]),
        note: "Custom property thừa kế xuống phần tử con, nên có thể override theo component.",
        changes: ["Màu thương hiệu có một nguồn duy nhất."]
      },
      {
        short: "Specificity",
        type: "ĐỘ ƯU TIÊN",
        title: "Class thắng thẻ, id thắng class",
        body: "Specificity thường được viết (id, class, thẻ). <code>#hero .card</code> có 1 id + 1 class; <code>.card.featured</code> có 2 class nên thua id. Nhưng đừng lạm dụng id chỉ để thắng CSS.",
        line: 10,
        mark: [10, 11, 12],
        watch: [{ name: "#hero .card", value: "1-1-0", type: "specificity" }, { name: ".card.featured", value: "0-2-0", type: "specificity" }],
        output: "",
        visual: S.table(["Selector", "id", "class", "thẻ"], [["#hero .card", "1", "1", "0"], [".card.featured", "0", "2", "0"], [".card", "0", "1", "0"]], 0, "Điểm specificity (id, class, element)"),
        note: "Specificity cao không nhất thiết tốt; nó làm CSS khó override về sau.",
        changes: ["Card trong #hero nhận màu trắng."]
      },
      {
        short: "Thứ tự",
        type: "CASCADE",
        title: "Cùng độ ưu tiên, rule sau thắng",
        body: "Nếu hai rule có specificity bằng nhau, rule xuất hiện sau trong nguồn CSS sẽ thắng. Thứ tự file và thứ tự khai báo đều quan trọng.",
        line: 4,
        mark: [4, 5, 6, 7, 8, 9],
        watch: [{ name: ".card", value: "màu tối", type: "first" }, { name: ".card.featured", value: "màu brand", type: "later + higher" }],
        output: "",
        visual: S.flow([{ label: "Nguồn", sub: "browser / user / author" }, { label: "Specificity", sub: "ai cụ thể hơn" }, { label: "Thứ tự", sub: "sau thắng" }], [2]),
        note: "Khi debug, hãy xem DevTools đang gạch bỏ rule nào và rule nào thắng.",
        changes: ["Rule .card.featured áp dụng cho card nổi bật."]
      },
      {
        short: "!important",
        type: "CẢNH BÁO",
        title: "!important là con dao hai lưỡi",
        body: "<code>!important</code> ép một khai báo thắng gần như mọi thứ. Dùng khi thật cần (ví dụ override từ thư viện ngoài), nhưng lạm dụng sẽ tạo chuỗi !important chồng chất.",
        line: 13,
        mark: [13],
        watch: [{ name: "!important", value: "thắng thường", type: "exception" }],
        output: "",
        visual: S.table(["Cách xử lý", "Kết quả"], [["Sửa specificity", "bền"], ["Đổi thứ tự import", "bền"], ["!important", "nhanh nhưng dễ nợ"]], 0, "Ưu tiên cách bền vững"),
        note: "Nếu phải dùng !important, hãy ghi chú lý do và giới hạn phạm vi.",
        changes: ["Màu đỏ được ép áp dụng cho mọi .card."]
      },
      {
        short: "Debug cascade",
        type: "DEVTOOLS",
        title: "DevTools là bản đồ cascade",
        body: "Chọn phần tử trong DevTools, xem panel Styles: rule bị gạch là bị override. Tab Computed cho biết giá trị cuối cùng và rule nào thắng.",
        line: 10,
        mark: [10],
        watch: [{ name: "computed color", value: "rgb(255,255,255)", type: "result" }],
        output: "",
        visual: S.flow([{ label: "Chọn element", sub: "inspect" }, { label: "Xem Styles", sub: "rule bị gạch" }, { label: "Computed", sub: "giá trị cuối" }], [1]),
        note: "Đừng đoán màu bằng mắt; hãy xem computed style khi cần chính xác.",
        changes: ["Biết được rule nào đang thắng."]
      }
    ]
  };

  L["css-declarations"] = {
    id: "css-declarations",
    track: "design",
    module: "design-css",
    title: "Các kiểu khai báo CSS",
    shortTitle: "Khai báo CSS",
    subtitle: "External, internal, inline, at-rule và những cách viết CSS bạn sẽ gặp mỗi ngày.",
    blurb: "Đặt CSS đúng chỗ, đọc được cú pháp rule, at-rule, shorthand, custom property, giá trị dự phòng và !important.",
    level: "Cơ bản",
    duration: "14 phút",
    lang: "css",
    tags: ["external-css", "internal-css", "inline-css", "at-rules", "shorthand", "important"],
    learn: [
      "Phân biệt CSS ngoài, CSS nội bộ và style inline",
      "Đọc cú pháp selector + declaration block",
      "Nhận biết at-rule như @media, @supports, @import",
      "Dùng shorthand đúng thứ tự và tránh ghi đè ngoài ý muốn",
      "Đặt giá trị dự phòng cho custom property"
    ],
    code: `:root {
  --brand: #0f9f8a;
  --line: #dcd6c9;
}

.card {
  margin: 0 0 16px;
  padding: 16px;
  border: 1px solid var(--line, #dcd6c9);
  color: var(--brand);
}

@media (min-width: 720px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}

.card--urgent {
  color: #c0392b !important;
}`,
    file: "declarations.css",
    life: {
      icon: "bulb",
      title: "Ba cách dán nhãn",
      text: "Cùng một nội dung có thể dán nhãn lên cả quyển sổ, lên một trang hoặc lên đúng một dòng. CSS cũng vậy: file ngoài, khối style trong trang hoặc thuộc tính style trên một phần tử."
    },
    visual: S.table(
      ["Cách đặt CSS", "Phạm vi", "Khi nào dùng"],
      [["File .css + link", "Toàn site", "Dự án thật"], ["Thẻ style", "Một trang", "Bản thử, CSS nhỏ"], ["style=\"...\"", "Một phần tử", "Trạng thái động rất nhỏ"]],
      0,
      "Càng gần phần tử càng khó tái sử dụng"
    ),
    steps: [
      {
        short: "Nơi đặt CSS",
        type: "TỔ CHỨC",
        title: "External, internal và inline",
        body: "CSS ngoài nằm trong file .css và được nối bằng <code>&lt;link rel=\"stylesheet\"&gt;</code>. CSS nội bộ nằm trong <code>&lt;style&gt;</code> của trang. Inline nằm ngay trong thuộc tính <code>style</code> của một phần tử. Dự án thật nên ưu tiên file ngoài để tái sử dụng và cache.",
        line: 1,
        mark: [1, 2, 3, 4, 5, 6, 7],
        watch: [{ name: "file .css", value: "toàn site", type: "external" }, { name: "<style>", value: "một trang", type: "internal" }, { name: "style=\"...\"", value: "một phần tử", type: "inline" }],
        output: "",
        visual: S.flow([{ label: "File .css", sub: "link trong head" }, { label: "<style>", sub: "trong trang" }, { label: "style", sub: "trên phần tử" }], [0]),
        note: "Inline có specificity cao nhất trong ba cách thông thường, nên rất dễ ghi đè CSS khác ngoài ý muốn.",
        changes: ["Biết nên đặt CSS ở đâu cho từng phạm vi."]
      },
      {
        short: "Cú pháp rule",
        type: "CÚ PHÁP",
        title: "Selector và khối khai báo",
        body: "Một rule gồm selector, cặp ngoặc nhọn và các khai báo dạng <code>property: value;</code>. Dấu chấm phẩy ngăn các khai báo; dấu hai chấm ngăn thuộc tính với giá trị. Thiếu dấu chấm phẩy ở khai báo trước có thể làm hỏng khai báo sau.",
        line: 6,
        mark: [6, 7, 8, 9, 10, 11],
        watch: [{ name: ".card", value: "selector", type: "selector" }, { name: "padding", value: "16px", type: "declaration" }],
        output: "",
        visual: S.table(
          ["Thành phần", "Ví dụ", "Vai trò"],
          [["Selector", ".card", "chọn phần tử"], ["Property", "padding", "thuộc tính"], ["Value", "16px", "giá trị"], ["Dấu ;", "cuối khai báo", "ngăn cách"]],
          1,
          "Cú pháp declaration block"
        ),
        note: "Trong DevTools, khai báo bị gạch là bị rule khác ghi đè; khai báo sai cú pháp thường bị bỏ qua im lặng.",
        changes: ["Đọc được một rule CSS theo từng thành phần."]
      },
      {
        short: "At-rule",
        type: "@RULE",
        title: "@media, @supports, @import",
        body: "At-rule bắt đầu bằng <code>@</code> và điều khiển cách CSS được áp dụng. <code>@media</code> đổi style theo kích thước hoặc thiết bị; <code>@supports</code> kiểm tra trình duyệt có hiểu tính năng không; <code>@import</code> nạp file CSS khác; <code>@font-face</code> khai báo font.",
        line: 13,
        mark: [13, 14, 15, 16, 17, 18, 19],
        watch: [{ name: "@media", value: "min-width: 720px", type: "at-rule" }, { name: "display", value: "grid khi đủ rộng", type: "result" }],
        output: "",
        visual: S.table(
          ["At-rule", "Dùng để"],
          [["@media", "theo kích thước hoặc thiết bị"], ["@supports", "khi trình duyệt hỗ trợ tính năng"], ["@import", "nạp stylesheet khác"], ["@font-face", "đăng ký file font"]],
          0,
          "At-rule điều khiển phạm vi áp dụng"
        ),
        note: "@import phải nằm ở đầu file, trước các rule thường; đặt sai vị trí sẽ bị bỏ qua.",
        changes: ["Card chuyển sang lưới hai cột khi màn hình đủ rộng."]
      },
      {
        short: "Shorthand",
        type: "VIẾT TẮT",
        title: "Shorthand và longhand",
        body: "<code>margin: 0 0 16px</code> là shorthand: ba giá trị lần lượt là top, hai bên và bottom. Viết đủ bốn giá trị theo thứ tự top, right, bottom, left. Longhand như <code>margin-top</code>, <code>padding-left</code> chỉ đổi một phía. Shorthand đặt sau longhand sẽ ghi đè các phía còn lại về mặc định.",
        line: 7,
        mark: [7, 8, 9, 10],
        watch: [{ name: "margin", value: "0 0 16px", type: "shorthand" }, { name: "padding", value: "16px", type: "all sides" }],
        output: "",
        visual: S.table(
          ["Cách viết", "Tác động"],
          [["margin: 0 0 16px", "top 0, ngang 0, bottom 16px"], ["margin-bottom: 16px", "chỉ đáy"], ["padding: 16px", "cả bốn phía"]],
          0,
          "Shorthand ngắn nhưng dễ ghi đè ngoài ý muốn"
        ),
        note: "Khi debug khoảng cách, đọc thứ tự bốn giá trị trước khi thêm margin mới.",
        changes: ["Card có khoảng cách đáy 16px và padding đều."]
      },
      {
        short: "Dự phòng",
        type: "AN TOÀN",
        title: "Fallback và !important",
        body: "<code>var(--line, #dcd6c9)</code> dùng giá trị sau dấu phẩy khi biến chưa được khai báo. <code>!important</code> ép một khai báo thắng các khai báo thường, nhưng chỉ nên dùng khi override thư viện ngoài hoặc trong phạm vi rất hẹp. Với tính năng mới, dùng <code>@supports</code> thay vì cố ép.",
        line: 9,
        mark: [9, 21, 22, 23],
        watch: [{ name: "var(--line, ...)", value: "fallback", type: "safe" }, { name: "!important", value: "ưu tiên đặc biệt", type: "exception" }],
        output: "",
        visual: S.table(
          ["Cách xử lý", "Nên dùng khi"],
          [["var(--x, fallback)", "biến có thể thiếu"], ["@supports", "tính năng mới"], ["!important", "override thư viện, phạm vi hẹp"]],
          0,
          "Ưu tiên cách bền vững trước"
        ),
        note: "Nếu phải dùng !important, hãy ghi chú lý do và giới hạn selector để tránh chuỗi !important chồng chất.",
        changes: ["Card vẫn có viền khi thiếu biến --line."]
      }
    ]
  };

  L["box-model"] = {
    id: "box-model",
    track: "design",
    module: "design-css",
    title: "Box model",
    shortTitle: "Box model",
    subtitle: "Mọi phần tử là một chiếc hộp: content, padding, border, margin.",
    blurb: "Hiểu box-sizing và cách tính kích thước để giao diện không còn lệch vài pixel khó hiểu.",
    level: "Cơ bản",
    duration: "14 phút",
    lang: "css",
    tags: ["box-model", "padding", "border", "margin", "box-sizing"],
    learn: [
      "Bốn lớp của box model",
      "Phân biệt padding và margin",
      "box-sizing: border-box thay đổi gì",
      "Tránh margin collapse ngoài ý muốn"
    ],
    code: `.card {
  width: 320px;
  padding: 24px;
  border: 4px solid #0f9f8a;
  margin: 32px;
  box-sizing: border-box;
}`,
    file: "box.css",
    life: {
      icon: "bulb",
      title: "Một chiếc hộp quà",
      text: "Content là món quà, padding là lớp giấy bọc, border là hộp carton, margin là khoảng trống quanh hộp. Muốn hộp vừa kệ, phải tính cả giấy và carton."
    },
    visual: S.box({ content: "Nội dung", width: "320px", padding: "24px", border: "4px", margin: "32px", boxSizing: "border-box", active: "padding", caption: "Padding nằm giữa nội dung và viền" }),
    steps: [
      {
        short: "Content",
        type: "BOX MODEL",
        title: "Content là vùng chứa nội dung thật",
        body: "Với <code>box-sizing: content-box</code>, <code>width</code> chỉ tính phần content. Padding và border cộng thêm vào kích thước hiển thị, nên hộp có thể rộng hơn bạn nghĩ.",
        line: 2,
        mark: [2],
        watch: [{ name: "width", value: "320px", type: "content" }],
        output: "",
        visual: S.box({ content: "Nội dung", width: "320px", padding: "0", border: "0", margin: "0", active: "content", caption: "Chỉ content" }),
        note: "Chiều rộng hiển thị = content + padding trái/phải + border trái/phải (khi content-box).",
        changes: ["Vùng content rộng 320px."]
      },
      {
        short: "Padding",
        type: "KHOẢNG ĐỆM",
        title: "Padding đẩy nội dung vào trong",
        body: "Padding là khoảng trống bên trong hộp, giữa content và border. Padding có màu nền của phần tử (nếu có), nên nó giúp nút và card dễ đọc hơn.",
        line: 3,
        mark: [3],
        watch: [{ name: "padding", value: "24px", type: "inner space" }],
        output: "",
        visual: S.box({ content: "Nội dung", width: "320px", padding: "24px", border: "0", margin: "0", active: "padding", caption: "Padding nằm trong viền" }),
        note: "Padding không nhận giá trị âm.",
        changes: ["Nội dung cách viền 24px."]
      },
      {
        short: "Border",
        type: "VIỀN",
        title: "Border là đường bao quanh padding",
        body: "Border có độ dày, kiểu và màu, ví dụ <code>4px solid #0f9f8a</code>. Border nằm giữa padding và margin, và cũng chiếm chỗ trong layout.",
        line: 4,
        mark: [4],
        watch: [{ name: "border", value: "4px solid", type: "stroke" }],
        output: "",
        visual: S.box({ content: "Nội dung", width: "320px", padding: "24px", border: "4px", margin: "0", active: "border", caption: "Border bao quanh padding" }),
        note: "Border dày làm hộp to hơn nếu box-sizing là content-box.",
        changes: ["Hộp có viền xanh 4px."]
      },
      {
        short: "Margin",
        type: "KHOẢNG NGOÀI",
        title: "Margin đẩy các hộp ra xa nhau",
        body: "Margin là khoảng trống bên ngoài border, dùng để tạo khoảng cách giữa các phần tử. Margin dọc của hai block liền nhau có thể gộp lại thành margin lớn hơn.",
        line: 5,
        mark: [5],
        watch: [{ name: "margin", value: "32px", type: "outer space" }],
        output: "",
        visual: S.box({ content: "Nội dung", width: "320px", padding: "24px", border: "4px", margin: "32px", active: "margin", caption: "Margin nằm ngoài viền" }),
        note: "Margin có thể âm, nhưng hãy dùng cẩn thận vì dễ gây chồng chéo.",
        changes: ["Card cách các phần tử xung quanh 32px."]
      },
      {
        short: "border-box",
        type: "BEST PRACTICE",
        title: "border-box giữ kích thước đúng như bạn đặt",
        body: "Với <code>box-sizing: border-box</code>, width bao gồm cả padding và border. Đặt <code>* { box-sizing: border-box; }</code> giúp layout dễ đoán hơn trên toàn dự án.",
        line: 6,
        mark: [6],
        watch: [{ name: "box-sizing", value: "border-box", type: "mode" }, { name: "width", value: "320px", type: "total" }],
        output: "",
        visual: S.table(["box-sizing", "width 320 + padding 24"], [["content-box", "368px"], ["border-box", "320px"]], 1, "border-box gộp padding và border vào width"),
        note: "Rất nhiều CSS reset hiện đại đặt border-box cho mọi phần tử.",
        changes: ["Card giữ đúng 320px dù có padding và border."]
      }
    ]
  };

  L["colors-typography"] = {
    id: "colors-typography",
    track: "design",
    module: "design-css",
    title: "Màu sắc và typography",
    shortTitle: "Color & type",
    subtitle: "Tạo thứ bậc bằng màu, cỡ chữ, độ đậm và khoảng dòng.",
    blurb: "Color token, contrast, font stack, line-height và clamp — bộ công cụ để giao diện vừa đẹp vừa đọc được.",
    level: "Cơ bản",
    duration: "14 phút",
    lang: "css",
    tags: ["color", "contrast", "font", "line-height", "clamp"],
    learn: [
      "Dùng color token thay vì mã màu rải rác",
      "Kiểm tra độ tương phản chữ",
      "Xây font stack dự phòng",
      "Điều chỉnh line-height và cỡ chữ linh hoạt"
    ],
    code: `:root {
  --ink: #14202d;
  --muted: #5d6a77;
  --brand: #0f9f8a;
}
body {
  color: var(--ink);
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 1.6;
}
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}`,
    file: "type.css",
    life: {
      icon: "bulb",
      title: "Biển hiệu và ánh sáng",
      text: "Chữ xám nhạt trên nền trắng giống biển hiệu thiếu đèn: đẹp trong bản thiết kế nhưng không đọc được ngoài đời. Tương phản là điều kiện sống còn."
    },
    visual: S.vars([{ name: "--ink", type: "color", value: "#14202d", note: "chữ chính" }, { name: "--muted", type: "color", value: "#5d6a77", note: "chữ phụ" }, { name: "--brand", type: "color", value: "#0f9f8a", note: "nhấn" }]),
    steps: [
      {
        short: "Color token",
        type: "MÀU",
        title: "Đặt tên màu theo vai trò",
        body: "Thay vì rải <code>#5d6a77</code> khắp nơi, đặt biến <code>--muted</code>. Khi đổi palette, bạn chỉ sửa một chỗ và các thành phần tự cập nhật.",
        line: 1,
        mark: [1, 2, 3, 4, 5],
        watch: [{ name: "--ink", value: "#14202d", type: "text" }, { name: "--brand", value: "#0f9f8a", type: "accent" }],
        output: "",
        visual: S.vars([{ name: "--ink", type: "color", value: "#14202d", note: "chữ chính" }, { name: "--muted", type: "color", value: "#5d6a77", note: "chữ phụ" }, { name: "--brand", type: "color", value: "#0f9f8a", note: "nhấn" }]),
        note: "Tên token nên nói vai trò (ink, muted, brand), không nói màu (gray500) nếu có thể.",
        changes: ["Palette có ba token chính."]
      },
      {
        short: "Contrast",
        type: "TƯƠNG PHẢN",
        title: "Chữ phải đọc được trên nền",
        body: "WCAG khuyến nghị tương phản tối thiểu 4.5:1 cho chữ thường và 3:1 cho chữ lớn. Đừng dùng xám quá nhạt cho nội dung quan trọng.",
        line: 7,
        mark: [7],
        watch: [{ name: "contrast", value: "7.2:1", type: "AA" }],
        output: "",
        visual: S.table(["Cặp màu", "Tỉ lệ", "Kết luận"], [["#14202d / trắng", "14.8:1", "tốt"], ["#5d6a77 / trắng", "5.9:1", "đạt"], ["#aaaaaa / trắng", "2.3:1", "không đạt"]], 1, "Kiểm tra bằng công cụ contrast checker"),
        note: "Màu nhấn chỉ nên dùng cho điểm nhấn, không dùng cho đoạn văn dài.",
        changes: ["Màu chữ chính có tương phản tốt."]
      },
      {
        short: "Font stack",
        type: "FONT",
        title: "Luôn có font dự phòng",
        body: "<code>font-family</code> nên có font chính và họ dự phòng, kết thúc bằng <code>sans-serif</code>. Nếu font tải chậm hoặc lỗi, trang vẫn đọc được.",
        line: 8,
        mark: [8],
        watch: [{ name: "font-family", value: "Be Vietnam Pro, sans-serif", type: "stack" }],
        output: "",
        visual: S.flow([{ label: "Be Vietnam Pro", sub: "font chính" }, { label: "sans-serif", sub: "dự phòng" }, { label: "Hệ điều hành", sub: "font mặc định" }], [0]),
        note: "Nếu dùng Google Fonts, chỉ tải các weight thật sự dùng để giảm dung lượng.",
        changes: ["Trang có font dự phòng khi font chính lỗi."]
      },
      {
        short: "Line-height",
        type: "NHỊP ĐỌC",
        title: "Khoảng dòng tạo nhịp thở",
        body: "<code>line-height: 1.6</code> thường phù hợp cho đoạn văn. Tiêu đề lớn có thể dùng line-height thấp hơn, khoảng 1.1–1.2, để các dòng gắn kết.",
        line: 9,
        mark: [9],
        watch: [{ name: "line-height", value: "1.6", type: "body" }, { name: "line-height h1", value: "1.15", type: "heading" }],
        output: "",
        visual: S.table(["Thành phần", "line-height gợi ý"], [["Đoạn văn", "1.5–1.7"], ["Tiêu đề lớn", "1.1–1.2"], ["Nhãn nhỏ", "1.3–1.4"]], 0, "Nhịp dòng phụ thuộc cỡ chữ"),
        note: "Line-height không đơn vị (1.6) nhân với cỡ chữ hiện tại, linh hoạt hơn px.",
        changes: ["Đoạn văn có khoảng dòng thoáng hơn."]
      },
      {
        short: "Clamp",
        type: "RESPONSIVE",
        title: "Cỡ chữ co giãn có giới hạn",
        body: "<code>clamp(2rem, 5vw, 4rem)</code> đặt cỡ tối thiểu, tỉ lệ theo viewport và cỡ tối đa. Đây là cách làm typography responsive mà không cần nhiều media query.",
        line: 12,
        mark: [12],
        watch: [{ name: "min", value: "2rem", type: "32px" }, { name: "preferred", value: "5vw", type: "fluid" }, { name: "max", value: "4rem", type: "64px" }],
        output: "",
        visual: S.layout({ type: "flex", justify: "space-between", align: "center", gap: 10, items: [{ label: "2rem", grow: 1 }, { label: "5vw", grow: 2, active: true }, { label: "4rem", grow: 1 }], caption: "clamp giữ cỡ chữ trong khoảng an toàn" }),
        note: "Đừng để tiêu đề quá lớn trên mobile; luôn kiểm tra ở 320–390px.",
        changes: ["Tiêu đề co giãn theo màn hình nhưng không quá nhỏ/lớn."]
      }
    ]
  };

})();
