/* FrontLab — Framework giao diện · Bootstrap 5 & TailwindCSS */
(function () {
  "use strict";
  const L = window.FRONTLAB.lessons;
  const S = {
    flow(steps, active, done) { return { kind: "flow", steps, active: active || [], done: done || [] }; },
    vars(items) { return { kind: "vars", items }; },
    table(headers, rows, activeRow, caption) { return { kind: "table", headers, rows, activeRow, caption }; },
    dom(items, active, caption) { return { kind: "dom", items, active: active || [], caption }; },
    box(props) { return Object.assign({ kind: "box" }, props); },
    layout(props) { return Object.assign({ kind: "layout" }, props); }
  };

  L["bootstrap-grid"] = {
    id: "bootstrap-grid",
    track: "design",
    module: "design-frameworks",
    title: "Bootstrap 5: hệ lưới 12 cột",
    shortTitle: "Bootstrap grid",
    subtitle: "Dùng container, row, col và utility class thay cho CSS tự viết.",
    blurb: "Nhúng Bootstrap từ CDN, chia lưới 12 cột theo breakpoint md/lg và tận dụng spacing, shadow, h-100 để dựng danh sách thẻ.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "html",
    tags: ["bootstrap", "grid", "container", "breakpoint", "utility"],
    learn: [
      "Nhúng Bootstrap CSS và JS bundle đúng thứ tự",
      "Chia hàng bằng row và col trong hệ 12 cột",
      "Chọn breakpoint md, lg cho từng kích thước",
      "Dùng utility spacing, shadow thay CSS riêng"
    ],
    code: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container py-4">
  <div class="row g-3">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">Thẻ 1</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">Thẻ 2</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">Thẻ 3</div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
    file: "index.html",
    life: {
      icon: "bulb",
      title: "Kệ chia ngăn đóng sẵn",
      text: "Bootstrap giống bộ kệ chia ngăn đóng sẵn: bạn chọn số hàng, số ngăn và khoảng cách, không phải tự cắt gỗ cho từng ngăn."
    },
    visual: S.layout({ type: "grid", columns: 3, gap: 12, items: ["Thẻ 1", "Thẻ 2", "Thẻ 3"], caption: "Lưới ba cột từ class col-lg-4" }),
    steps: [
      {
        short: "Nhúng CDN",
        type: "CÀI ĐẶT",
        title: "Nạp Bootstrap trước khi dùng class",
        body: "Dán thẻ <code>link</code> tới <code>bootstrap.min.css</code> trong <code>head</code>, và bundle JS trước thẻ đóng <code>body</code>. Thiếu hai tệp này, các class như <code>row</code> hay <code>card</code> không có tác dụng.",
        line: 1,
        mark: [1, 17],
        watch: [{ name: "CDN", value: "jsDelivr", type: "css + js" }, { name: "phiên bản", value: "5.3.3", type: "ghim" }],
        output: "",
        visual: S.flow([{ label: "CDN CSS", sub: "trong head" }, { label: "HTML + class", sub: "nội dung" }, { label: "Bundle JS", sub: "cuối body" }], [0]),
        note: "Ghim phiên bản cụ thể để giao diện không đổi ngoài ý muốn khi CDN cập nhật.",
        changes: ["Trang có Bootstrap 5.3.3."]
      },
      {
        short: "container & row",
        type: "KHUNG LƯỚI",
        title: "container bọc nội dung, row tạo hàng 12 cột",
        body: "<code>.container</code> giới hạn bề rộng và canh giữa theo breakpoint. <code>.row</code> biến các phần tử con thành cột trong hệ 12 cột, kèm gutter để tạo khoảng cách giữa cột.",
        line: 3,
        mark: [3, 4],
        watch: [{ name: "container", value: "max-width theo breakpoint", type: "wrapper" }, { name: "row", value: "12 cột", type: "grid" }],
        output: "",
        visual: S.dom([
          { tag: "div.container", depth: 0, note: "canh giữa" },
          { tag: "div.row", depth: 1, note: "hàng 12 cột" },
          { tag: "div.col", depth: 2, note: "mỗi thẻ là một cột" }
        ], [1, 2], "Cấu trúc lưới Bootstrap"),
        note: "Không đặt cột trực tiếp ngoài row; container giúp nội dung không chạm mép màn hình.",
        changes: ["Nội dung nằm trong khung container và một hàng."]
      },
      {
        short: "col-12",
        type: "MOBILE FIRST",
        title: "col-12 cho mobile: mỗi thẻ chiếm cả hàng",
        body: "Bootstrap xây theo mobile-first: class không có tiền tố áp dụng từ 0px. <code>col-12</code> cho mỗi thẻ rộng 12/12 cột, tức một thẻ một hàng trên điện thoại.",
        line: 5,
        mark: [5],
        watch: [{ name: "col-12", value: "100%", type: "mobile" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 1, gap: 12, items: ["Thẻ 1", "Thẻ 2", "Thẻ 3"], caption: "Mobile: một cột" }),
        note: "Đặt class nền trước rồi mới thêm breakpoint; đừng bắt đầu bằng col-lg.",
        changes: ["Mỗi thẻ chiếm trọn một hàng trên mobile."]
      },
      {
        short: "md & lg",
        type: "BREAKPOINT",
        title: "col-md-6 và col-lg-4 chia 2 rồi 3 cột",
        body: "<code>col-md-6</code> áp dụng từ 768px: mỗi thẻ 6/12 cột, hai thẻ một hàng. <code>col-lg-4</code> áp dụng từ 992px: ba thẻ một hàng. Class nhỏ hơn vẫn là nền khi màn hình chưa đạt ngưỡng.",
        line: 5,
        mark: [5],
        watch: [{ name: "md", value: "≥768px · 6/12", type: "2 cột" }, { name: "lg", value: "≥992px · 4/12", type: "3 cột" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 3, gap: 12, items: ["Thẻ 1", "Thẻ 2", "Thẻ 3"], caption: "Desktop: ba thẻ trên một hàng" }),
        note: "Chỉ ghi breakpoint khi bố cục thực sự đổi; quá nhiều class col làm khó đọc.",
        changes: ["Tablet hai cột, desktop ba cột."]
      },
      {
        short: "utility",
        type: "TIỆN ÍCH",
        title: "g-3, py-4, h-100 và shadow-sm thay CSS riêng",
        body: "<code>g-3</code> đặt gutter giữa các cột, <code>py-4</code> thêm padding dọc cho container. <code>h-100</code> kéo card cao bằng cột, <code>shadow-sm</code> tạo bóng nhẹ — không cần viết dòng CSS nào.",
        line: 4,
        mark: [4, 6],
        watch: [{ name: "g-3", value: "1rem", type: "gutter" }, { name: "py-4", value: "1.5rem", type: "spacing" }, { name: "h-100", value: "100%", type: "card" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 3, gap: 16, items: [{ label: "Thẻ 1", active: true }, "Thẻ 2", "Thẻ 3"], caption: "Card cao bằng nhau nhờ h-100" }),
        note: "Utility là class nhỏ, một nhiệm vụ; ghép nhiều class thay vì viết CSS mới cho từng chi tiết.",
        changes: ["Ba thẻ có khoảng cách và chiều cao đồng nhất."]
      }
    ]
  };

  L["bootstrap-components"] = {
    id: "bootstrap-components",
    track: "design",
    module: "design-frameworks",
    title: "Bootstrap 5: navbar & component",
    shortTitle: "Bootstrap component",
    subtitle: "Ghép navbar, collapse và modal từ component có sẵn của Bootstrap.",
    blurb: "Navbar responsive, nút toggler, khối collapse và modal đặt tour — chỉ cần đúng class và data-bs-* để bundle lo phần tương tác.",
    level: "Trung cấp",
    duration: "17 phút",
    lang: "html",
    tags: ["bootstrap", "navbar", "collapse", "modal", "data-bs"],
    learn: [
      "Dựng navbar responsive bằng navbar-expand-md",
      "Nối nút toggler với khối menu qua data-bs-target",
      "Đặt menu đúng cấu trúc collapse > navbar-nav",
      "Dựng modal và để bundle xử lý đóng mở"
    ],
    code: `<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Travel</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Tour</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="modal fade" id="booking" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content p-4">Đặt tour</div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
    file: "index.html",
    life: {
      icon: "bulb",
      title: "Bộ đồ chơi lắp ghép",
      text: "Component Bootstrap như các khối đồ chơi đã đóng gói: navbar, menu thu gọn và hộp thoại chỉ cần lắp đúng khớp nối data-bs-* là chạy."
    },
    visual: S.dom([
      { tag: "nav.navbar", depth: 0, note: "thanh điều hướng" },
      { tag: "button.navbar-toggler", depth: 1, note: "hiện trên mobile" },
      { tag: "div.collapse#menu", depth: 1, note: "menu thu gọn" }
    ], [0, 1, 2], "Navbar và khối menu thu gọn"),
    steps: [
      {
        short: "Navbar khung",
        type: "COMPONENT",
        title: "navbar-expand-md quyết định mốc thu gọn",
        body: "Ba class <code>navbar</code>, <code>navbar-expand-md</code> và <code>bg-dark</code> tạo thanh điều hướng tối màu. Dưới 768px menu thu gọn; từ md trở lên menu hiện ngang.",
        line: 1,
        mark: [1, 3],
        watch: [{ name: "navbar", value: "khung điều hướng", type: "component" }, { name: "expand-md", value: "≥768px", type: "breakpoint" }],
        output: "",
        visual: S.dom([
          { tag: "nav.navbar", depth: 0, note: "bg-dark" },
          { tag: "div.container", depth: 1 },
          { tag: "a.navbar-brand", depth: 2, note: "Travel" }
        ], [0, 2], "Khung navbar"),
        note: "Đổi expand-md thành expand-lg nếu muốn menu chỉ hiện ngang từ màn hình lớn.",
        changes: ["Có thanh navbar tối màu, thương hiệu bên trái."]
      },
      {
        short: "Toggler",
        type: "TƯƠNG TÁC",
        title: "Nút toggler phải trỏ đúng id của menu",
        body: "<code>data-bs-toggle=\"collapse\"</code> báo đây là nút thu gọn; <code>data-bs-target=\"#menu\"</code> chỉ tới khối có <code>id=\"menu\"</code>. Sai một trong hai, nút bấm không làm gì.",
        line: 4,
        mark: [4, 5],
        watch: [{ name: "data-bs-toggle", value: "collapse", type: "hành vi" }, { name: "data-bs-target", value: "#menu", type: "đích" }],
        output: "",
        visual: S.flow([{ label: "Bấm toggler", sub: "mobile" }, { label: "Đọc data-bs-target" }, { label: "Mở #menu", sub: "collapse" }], [0, 1]),
        note: "id phải duy nhất trong trang; nhiều navbar dùng chung id sẽ mở nhầm khối.",
        changes: ["Nút toggler điều khiển được menu."]
      },
      {
        short: "Collapse menu",
        type: "CẤU TRÚC",
        title: "collapse > navbar-collapse > navbar-nav",
        body: "Khối menu cần đủ ba lớp: <code>collapse</code> để ẩn/hiện, <code>navbar-collapse</code> cho bố cục navbar, và <code>navbar-nav</code> bọc danh sách liên kết. <code>ms-auto</code> đẩy menu sang phải.",
        line: 8,
        mark: [8, 9],
        watch: [{ name: "collapse", value: "ẩn/hiện", type: "state" }, { name: "ms-auto", value: "margin-start: auto", type: "utility" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "row", justify: "space-between", align: "center", gap: 12, items: ["Travel", "Tour · Liên hệ"], caption: "Menu đẩy sang phải nhờ ms-auto" }),
        note: "Không tự đặt display cho .collapse; class này do Bootstrap quản lý trạng thái.",
        changes: ["Menu nằm bên phải navbar khi mở rộng."]
      },
      {
        short: "Modal",
        type: "DIALOG",
        title: "modal fade và modal-dialog-centered",
        body: "Khối <code>.modal</code> mặc định ẩn. <code>fade</code> thêm hiệu ứng mờ, <code>modal-dialog-centered</code> căn hộp thoại giữa màn hình. Nút mở modal dùng <code>data-bs-toggle=\"modal\"</code> và <code>data-bs-target=\"#booking\"</code>.",
        line: 16,
        mark: [16, 17],
        watch: [{ name: "modal", value: "ẩn mặc định", type: "overlay" }, { name: "centered", value: "giữa màn hình", type: "dialog" }],
        output: "",
        visual: S.dom([
          { tag: "div.modal.fade#booking", depth: 0, note: "lớp phủ" },
          { tag: "div.modal-dialog", depth: 1, note: "centered" },
          { tag: "div.modal-content", depth: 2, note: "nội dung" }
        ], [0, 1, 2], "Cấu trúc modal"),
        note: "Modal cần bundle JS để mở, khóa cuộn nền và đóng bằng phím Esc.",
        changes: ["Có hộp thoại đặt tour căn giữa."]
      },
      {
        short: "Bundle JS",
        type: "KHÔNG TỰ VIẾT JS",
        title: "Bundle đọc data-bs-* để chạy component",
        body: "Không cần <code>addEventListener</code> cho navbar hay modal. Bundle Bootstrap quét các thuộc tính <code>data-bs-toggle</code>, <code>data-bs-target</code> và tự gắn hành vi. Chỉ viết JS khi cần đồng bộ dữ liệu riêng.",
        line: 22,
        mark: [22],
        watch: [{ name: "bundle", value: "Popper + component", type: "script" }, { name: "addEventListener", value: "không cần", type: "tự viết" }],
        output: "",
        visual: S.table(["Thuộc tính", "Hành vi"], [["data-bs-toggle=collapse", "thu gọn menu"], ["data-bs-toggle=modal", "mở hộp thoại"], ["data-bs-dismiss=modal", "đóng hộp thoại"]], 0, "Bundle lo phần tương tác"),
        note: "Tự viết JS mở modal bằng cách thêm class show dễ bỏ sót backdrop và trạng thái focus.",
        changes: ["Navbar và modal hoạt động không cần mã điều khiển."]
      }
    ]
  };

  L["tailwind-utilities"] = {
    id: "tailwind-utilities",
    track: "design",
    module: "design-frameworks",
    title: "TailwindCSS: utility-first",
    shortTitle: "Tailwind utility",
    subtitle: "Ghép các class tiện ích ngay trong HTML thay vì viết file CSS riêng.",
    blurb: "Nạp Tailwind Play CDN, dùng thang spacing, màu, typography và flex utility để dựng một khối nội dung có nút hành động.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "html",
    tags: ["tailwind", "utility", "spacing", "flex", "hover"],
    learn: [
      "Phân biệt utility-first với CSS component truyền thống",
      "Đọc thang spacing, màu và typography của Tailwind",
      "Ghép utility để dựng bố cục và nút",
      "Dùng biến thể hover cho trạng thái tương tác"
    ],
    code: `<script src="https://cdn.tailwindcss.com"></script>

<section class="mx-auto max-w-3xl px-4 py-10">
  <h1 class="text-3xl font-bold text-slate-900">FrontLab</h1>
  <p class="mt-3 text-slate-600">
    Học giao diện bằng cách thay đổi từng class.
  </p>
  <div class="mt-6 flex flex-wrap gap-3">
    <button class="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">
      Bắt đầu
    </button>
    <button class="rounded-lg border border-slate-300 px-4 py-2">
      Xem lộ trình
    </button>
  </div>
</section>`,
    file: "index.html",
    life: {
      icon: "bulb",
      title: "Gia vị đong sẵn từng gói",
      text: "Tailwind như các gói gia vị đong sẵn: mỗi class một vị, bạn phối ngay trong HTML. Nhanh và nhất quán, nhưng cần biết mình đang nêm gì."
    },
    visual: S.vars([
      { name: "px-4", type: "spacing", value: "padding-inline: 1rem" },
      { name: "bg-teal-600", type: "color", value: "background: #0d9488" },
      { name: "text-3xl", type: "type", value: "font-size: 1.875rem" }
    ]),
    steps: [
      {
        short: "Play CDN",
        type: "CÀI ĐẶT",
        title: "Nạp Play CDN để Tailwind sinh CSS tại trình duyệt",
        body: "Thẻ <code>script</code> Play CDN quét class trong trang và sinh CSS tương ứng ngay khi tải. Cách này tiện để học và thử nghiệm; dự án thật nên build Tailwind để giảm kích thước và tránh nhấp nháy giao diện.",
        line: 1,
        mark: [1],
        watch: [{ name: "Play CDN", value: "sinh CSS tại browser", type: "học thử" }, { name: "production", value: "build trước", type: "khuyến nghị" }],
        output: "",
        visual: S.flow([{ label: "HTML + class" }, { label: "Play CDN quét" }, { label: "Sinh CSS" }, { label: "Trang hiển thị" }], [1, 2]),
        note: "Play CDN không phù hợp cho production vì trình duyệt phải biên dịch class mỗi lần tải.",
        changes: ["Trang hiểu được các class Tailwind."]
      },
      {
        short: "spacing",
        type: "KHOẢNG CÁCH",
        title: "mx-auto, max-w-3xl, px-4, py-10",
        body: "Tailwind dùng thang spacing cố định: <code>4</code> là 1rem, <code>10</code> là 2.5rem. <code>mx-auto</code> canh giữa khối, <code>max-w-3xl</code> giới hạn bề rộng, còn <code>px-4</code> và <code>py-10</code> tạo đệm ngang dọc.",
        line: 3,
        mark: [3],
        watch: [{ name: "max-w-3xl", value: "48rem", type: "width" }, { name: "px-4", value: "1rem", type: "x-axis" }, { name: "py-10", value: "2.5rem", type: "y-axis" }],
        output: "",
        visual: S.box({ padding: "1rem · 2.5rem", content: "section", width: "max-w-3xl", caption: "Khối nội dung canh giữa với đệm ngang dọc" }),
        note: "Thang spacing chạy theo bước 0.25rem; class càng lớn càng ít dùng trong một khối.",
        changes: ["Khối nội dung có bề rộng và đệm hợp lý."]
      },
      {
        short: "typography",
        type: "CHỮ & MÀU",
        title: "text-3xl, font-bold và text-slate-900",
        body: "<code>text-3xl</code> đặt cỡ chữ 1.875rem, <code>font-bold</code> độ đậm 700, <code>text-slate-900</code> màu chữ rất tối. Phần mô tả dùng <code>mt-3</code> để tách nhịp và <code>text-slate-600</code> cho độ tương phản thấp hơn.",
        line: 4,
        mark: [4, 5],
        watch: [{ name: "text-3xl", value: "1.875rem", type: "size" }, { name: "font-bold", value: "700", type: "weight" }, { name: "slate-900", value: "#0f172a", type: "color" }],
        output: "",
        visual: S.vars([
          { name: "font-size", type: "text-3xl", value: "1.875rem" },
          { name: "font-weight", type: "font-bold", value: "700" },
          { name: "color", type: "text-slate-900", value: "#0f172a" }
        ]),
        note: "Màu slate có nhiều bước 50–950; chọn cặp màu đủ tương phản cho nội dung chính.",
        changes: ["Tiêu đề nổi bật, mô tả nhẹ hơn."]
      },
      {
        short: "flex & gap",
        type: "BỐ CỤC",
        title: "flex, flex-wrap và gap-3 cho hàng nút",
        body: "<code>flex</code> biến khối thành flex container, <code>flex-wrap</code> cho nút xuống dòng khi thiếu chỗ, <code>gap-3</code> đặt khoảng cách 0.75rem giữa các nút. <code>mt-6</code> tách hàng nút khỏi phần chữ.",
        line: 8,
        mark: [8],
        watch: [{ name: "flex", value: "row", type: "container" }, { name: "gap-3", value: "0.75rem", type: "spacing" }, { name: "wrap", value: "on", type: "mobile" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "row", justify: "flex-start", align: "center", gap: 12, wrap: true, items: ["Bắt đầu", "Xem lộ trình"], caption: "Hàng nút co giãn và xuống dòng" }),
        note: "gap thay cho margin giữa các nút, tránh phải xử lý nút cuối cùng trong hàng.",
        changes: ["Hai nút nằm cùng hàng, có khoảng cách đều."]
      },
      {
        short: "hover",
        type: "TRẠNG THÁI",
        title: "Biến thể hover chỉ đổi khi trỏ chuột",
        body: "Class <code>hover:bg-teal-700</code> chỉ áp dụng khi rê chuột lên nút. Các biến thể khác như <code>focus:</code>, <code>active:</code>, <code>md:</code> hoạt động cùng cơ chế: tiền tố mô tả điều kiện, phần sau mô tả utility.",
        line: 9,
        mark: [9],
        watch: [{ name: "hover:", value: "khi rê chuột", type: "variant" }, { name: "bg-teal-700", value: "#0f766e", type: "color" }],
        output: "",
        visual: S.table(["Trạng thái", "Class"], [["Bình thường", "bg-teal-600"], ["Hover", "hover:bg-teal-700"], ["Nhấn", "active:bg-teal-800"]], 1, "Biến thể thay đổi theo trạng thái"),
        note: "Đừng quên focus-visible cho người dùng bàn phím; hover một mình không đủ.",
        changes: ["Nút tối hơn khi rê chuột."]
      }
    ]
  };

  L["tailwind-responsive"] = {
    id: "tailwind-responsive",
    track: "design",
    module: "design-frameworks",
    title: "TailwindCSS: responsive & component",
    shortTitle: "Tailwind responsive",
    subtitle: "Breakpoint mobile-first, trạng thái tương tác và tách component bằng @apply.",
    blurb: "Lưới một cột trên mobile, hai cột từ md, ba cột từ lg; thêm hover cho card và gom utility lặp lại thành class component bằng @apply.",
    level: "Tổng hợp",
    duration: "17 phút",
    lang: "html",
    tags: ["tailwind", "responsive", "breakpoint", "apply", "hover"],
    learn: [
      "Đọc breakpoint mobile-first của Tailwind",
      "Viết md:, lg: cho lưới card",
      "Dùng biến thể hover cho phản hồi rõ ràng",
      "Gom utility lặp lại bằng @apply"
    ],
    code: `<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <article class="rounded-xl border border-slate-200 p-5 hover:shadow-lg">
    <h2 class="text-lg font-semibold">Thẻ 1</h2>
    <a class="mt-4 inline-block text-teal-700 hover:underline" href="#">Xem</a>
  </article>
  <!-- thêm hai thẻ tương tự -->
</div>

<style type="text/tailwindcss">
  .btn-brand {
    @apply rounded-lg bg-teal-600 px-4 py-2 text-white;
  }
</style>`,
    file: "index.html",
    life: {
      icon: "bulb",
      title: "Đèn cảm biến theo ánh sáng",
      text: "Breakpoint giống cảm biến: dưới ngưỡng dùng một chế độ, vượt ngưỡng tự đổi chế độ khác. Mobile-first nghĩa là chế độ nền luôn có trước."
    },
    visual: S.layout({ type: "grid", columns: 3, gap: 12, items: ["Thẻ 1", "Thẻ 2", "Thẻ 3"], caption: "lg: ba cột; md: hai cột; mobile: một cột" }),
    steps: [
      {
        short: "grid-cols-1",
        type: "MOBILE FIRST",
        title: "grid-cols-1 là nền cho mọi màn hình",
        body: "<code>grid</code> bật CSS Grid, <code>grid-cols-1</code> chia một cột. Vì không có tiền tố, class này áp dụng ở mọi bề rộng — đây là nền trước khi thêm breakpoint.",
        line: 1,
        mark: [1],
        watch: [{ name: "grid", value: "display: grid", type: "container" }, { name: "grid-cols-1", value: "1 cột", type: "base" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 1, gap: 16, items: ["Thẻ 1", "Thẻ 2", "Thẻ 3"], caption: "Mobile: một cột" }),
        note: "Tailwind không có prefix cho mobile; class không prefix chính là mobile.",
        changes: ["Card xếp dọc trên điện thoại."]
      },
      {
        short: "md & lg",
        type: "BREAKPOINT",
        title: "md:grid-cols-2 và lg:grid-cols-3",
        body: "<code>md:</code> áp dụng từ 768px, <code>lg:</code> từ 1024px. Ở 800px, lưới hai cột; từ 1024px, lưới ba cột. Các class có prefix không thay thế class nền mà cộng thêm khi đủ điều kiện.",
        line: 1,
        mark: [1],
        watch: [{ name: "md", value: "≥768px · 2 cột", type: "tablet" }, { name: "lg", value: "≥1024px · 3 cột", type: "desktop" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 3, gap: 16, items: ["Thẻ 1", "Thẻ 2", "Thẻ 3"], caption: "Desktop: ba cột" }),
        note: "Breakpoint của Tailwind tính theo min-width; đặt từ nhỏ đến lớn để dễ đọc.",
        changes: ["Tablet hai cột, desktop ba cột."]
      },
      {
        short: "hover",
        type: "TƯƠNG TÁC",
        title: "hover:shadow-lg và hover:underline",
        body: "Card đổi bóng khi rê chuột nhờ <code>hover:shadow-lg</code>; liên kết hiện gạch chân nhờ <code>hover:underline</code>. Phản hồi nhỏ nhưng giúp người dùng biết phần tử nào bấm được.",
        line: 2,
        mark: [2, 4],
        watch: [{ name: "hover:shadow-lg", value: "bóng lớn", type: "card" }, { name: "hover:underline", value: "gạch chân", type: "link" }],
        output: "",
        visual: S.table(["Phần tử", "Mặc định", "Hover"], [["Card", "viền nhạt", "bóng lớn"], ["Liên kết", "màu teal", "gạch chân"]], 1, "Hai phản hồi khi rê chuột"),
        note: "Chỉ dùng hiệu ứng hover cho trang trí; thông tin quan trọng không được ẩn sau hover.",
        changes: ["Card và liên kết có phản hồi khi rê chuột."]
      },
      {
        short: "@apply",
        type: "TÁI SỬ DỤNG",
        title: "Gom utility lặp lại thành class component",
        body: "Khi một chuỗi utility lặp nhiều lần, khai báo class riêng trong <code>&lt;style type=\"text/tailwindcss\"&gt;</code> và dùng <code>@apply</code>. HTML gọn hơn, nhưng đừng lạm dụng: component nên gom theo nghĩa, không theo vài class lẻ.",
        line: 9,
        mark: [9, 10, 11],
        watch: [{ name: "@apply", value: "utility → class", type: "reuse" }, { name: ".btn-brand", value: "một tên gọi", type: "component" }],
        output: "",
        visual: S.table(["Cách viết", "Khi nào dùng"], [["Utility trong HTML", "khối nhỏ, một lần"], ["@apply", "chuỗi lặp nhiều lần"], ["Plugin / component", "hệ thống lớn"]], 1, "Chọn mức trừu tượng phù hợp"),
        note: "Play CDN hỗ trợ @apply trong thẻ style đặc biệt; dự án build dùng file CSS đầu vào.",
        changes: ["Nút dùng chung class .btn-brand."]
      },
      {
        short: "QA",
        type: "KIỂM TRA",
        title: "Kiểm tra breakpoint và trạng thái trước khi bàn giao",
        body: "Kéo cửa sổ qua 767px, 768px, 1023px, 1024px để thấy lưới đổi đúng. Tab qua liên kết để kiểm tra focus, thử zoom 200% và kiểm tra độ tương phản của chữ trên nền.",
        line: 2,
        mark: [2],
        watch: [{ name: "viewports", value: "390 / 768 / 1024 / 1440", type: "QA" }, { name: "keyboard", value: "Tab + Enter", type: "QA" }],
        output: "",
        visual: S.table(["Hạng mục", "Đạt khi"], [["Breakpoint", "đổi đúng 768 / 1024"], ["Focus", "thấy rõ khi Tab"], ["Contrast", "≥ 4.5:1"], ["Overflow", "không tràn ngang"]], 0, "Checklist responsive"),
        note: "Kiểm tra trên trình duyệt thật; công cụ responsive chỉ mô phỏng bề rộng.",
        changes: ["Lưới và trạng thái vượt checklist cơ bản."]
      }
    ]
  };
})();
