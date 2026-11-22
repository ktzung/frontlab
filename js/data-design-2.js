/* FrontLab — Thiết kế giao diện · phần 2 (bài 13–20) */
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

  L["units-sizing"] = {
    id: "units-sizing",
    track: "design",
    module: "design-layout",
    title: "Đơn vị và kích thước",
    shortTitle: "Units",
    subtitle: "px, rem, %, vw, svh và khi nào nên dùng đơn vị nào.",
    blurb: "Chọn đơn vị đúng giúp giao diện co giãn tự nhiên, tôn trọng cỡ chữ người dùng và tránh tràn màn hình.",
    level: "Cơ bản",
    duration: "13 phút",
    lang: "css",
    tags: ["units", "rem", "clamp", "viewport", "min", "max"],
    learn: [
      "Phân biệt px, rem, em và %",
      "Dùng min(), max(), clamp() cho kích thước linh hoạt",
      "Hiểu svh/dvh trên mobile",
      "Chọn đơn vị theo mục đích, không theo thói quen"
    ],
    code: `:root {
  --space: 1rem;
}
.hero {
  min-height: 100svh;
  padding: clamp(1.5rem, 4vw, 4rem);
  max-width: 72rem;
  width: min(100% - 2rem, 72rem);
}
.card {
  border-radius: 0.75rem;
}`,
    file: "units.css",
    life: {
      icon: "bulb",
      title: "Quần áo co giãn",
      text: "px là số đo cố định, rem là đơn vị theo cỡ chữ gốc, % là theo cha, vw/vh là theo màn hình. Chọn sai đơn vị giống mặc áo may sẵn cho mọi vóc người."
    },
    visual: S.vars([{ name: "1rem", type: "length", value: "16px", note: "theo root font-size" }, { name: "1em", type: "length", value: "theo phần tử cha", note: "có thể lồng" }, { name: "1vw", type: "length", value: "1% viewport", note: "co theo màn hình" }]),
    steps: [
      {
        short: "rem",
        type: "ĐƠN VỊ",
        title: "rem tôn trọng cỡ chữ người dùng",
        body: "<code>1rem</code> bằng cỡ chữ của thẻ html, mặc định 16px nhưng người dùng có thể tăng. Dùng rem cho khoảng cách, cỡ chữ và bán kính để giao diện thích nghi.",
        line: 1,
        mark: [1, 2, 3],
        watch: [{ name: "1rem", value: "16px mặc định", type: "root" }],
        output: "",
        visual: S.table(["Đơn vị", "Dựa vào", "Phù hợp"], [["px", "cố định", "viền mảnh"], ["rem", "html font-size", "chữ, spacing"], ["em", "font-size cha", "component lồng"]], 1, "rem là mặc định tốt cho UI"),
        note: "Không nên đặt font-size của html bằng px nếu muốn tôn trọng cài đặt người dùng.",
        changes: ["Khoảng cách cơ bản dùng rem."]
      },
      {
        short: "clamp",
        type: "CO GIÃN",
        title: "clamp giữ giá trị trong khoảng",
        body: "<code>clamp(1.5rem, 4vw, 4rem)</code> chọn giá trị ưa thích 4vw nhưng không nhỏ hơn 1.5rem và không lớn hơn 4rem. Rất hữu ích cho padding và tiêu đề responsive.",
        line: 5,
        mark: [5],
        watch: [{ name: "min", value: "1.5rem", type: "24px" }, { name: "preferred", value: "4vw", type: "fluid" }, { name: "max", value: "4rem", type: "64px" }],
        output: "",
        visual: S.box({ content: "Hero", width: "fluid", padding: "clamp", border: "0", margin: "0", active: "padding", caption: "Padding co theo màn hình nhưng có giới hạn" }),
        note: "clamp cần ba giá trị: min, preferred, max. Đảm bảo min ≤ max.",
        changes: ["Padding hero co giãn an toàn."]
      },
      {
        short: "min & max",
        type: "GIỚI HẠN",
        title: "min() chọn giá trị nhỏ hơn",
        body: "<code>width: min(100% - 2rem, 72rem)</code> lấy giá trị nhỏ hơn giữa bề rộng khả dụng và giới hạn 72rem. Đây là cách viết container không cần media query.",
        line: 7,
        mark: [7, 8],
        watch: [{ name: "width", value: "min(...)", type: "responsive" }, { name: "max-width", value: "72rem", type: "limit" }],
        output: "",
        visual: S.layout({ type: "flex", justify: "center", align: "stretch", gap: 0, items: [{ label: "Nội dung", grow: 2, active: true }], caption: "Container rộng tối đa 72rem, luôn chừa lề 1rem mỗi bên" }),
        note: "Khi dùng calc trong min/max, hãy kiểm tra trên màn hình rất hẹp.",
        changes: ["Nội dung không vượt quá 72rem và không chạm mép."]
      },
      {
        short: "svh",
        type: "VIEWPORT",
        title: "svh tránh giật khi thanh địa chỉ ẩn hiện",
        body: "Trên mobile, <code>100vh</code> có thể cao hơn vùng nhìn thấy khi thanh địa chỉ xuất hiện. <code>100svh</code> là chiều cao nhỏ nhất ổn định, phù hợp cho hero toàn màn hình.",
        line: 4,
        mark: [4],
        watch: [{ name: "100svh", value: "small viewport", type: "stable" }, { name: "100dvh", value: "dynamic", type: "co giãn" }],
        output: "",
        visual: S.flow([{ label: "100vh", sub: "có thể bị che" }, { label: "100svh", sub: "an toàn" }, { label: "100dvh", sub: "đổi theo thanh địa chỉ" }], [1]),
        note: "Không phải trình duyệt cũ nào cũng hỗ trợ svh; nên có fallback vh.",
        changes: ["Hero cao đúng vùng nhìn thấy trên mobile."]
      },
      {
        short: "radius",
        type: "CHI TIẾT",
        title: "Bo góc cũng là một token",
        body: "<code>border-radius: 0.75rem</code> tạo góc mềm. Nếu dùng nhiều cỡ bo góc, hãy đặt token <code>--radius-sm/md/lg</code> để cả sản phẩm có cùng ngôn ngữ hình ảnh.",
        line: 10,
        mark: [10],
        watch: [{ name: "border-radius", value: "0.75rem", type: "12px" }],
        output: "",
        visual: S.box({ content: "Card", width: "240px", padding: "16px", border: "0", margin: "0", active: "content", caption: "Bo góc 12px tạo cảm giác mềm" }),
        note: "Bo góc quá lớn trên vùng nhỏ có thể làm nội dung bị cắt.",
        changes: ["Card có góc bo nhất quán."]
      }
    ]
  };

  L["flexbox"] = {
    id: "flexbox",
    track: "design",
    module: "design-layout",
    title: "Flexbox",
    shortTitle: "Flexbox",
    subtitle: "Xếp các phần tử theo một trục, co giãn và căn chỉnh linh hoạt.",
    blurb: "display:flex, justify-content, align-items, gap, wrap và flex-grow — bộ công cụ cho hàng nút, thanh điều hướng, card.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "css",
    tags: ["flexbox", "justify-content", "align-items", "gap", "wrap"],
    learn: [
      "Phân biệt trục chính và trục phụ",
      "Căn theo trục chính bằng justify-content",
      "Căn theo trục phụ bằng align-items",
      "Dùng gap thay cho margin giữa các item"
    ],
    code: `.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.actions {
  display: flex;
  gap: 8px;
  flex: 1 1 200px;
}`,
    file: "flex.css",
    life: {
      icon: "bulb",
      title: "Hàng ghế trên xe buýt",
      text: "Trục chính là hướng hàng ghế, trục phụ là chiều ngang của ghế. justify-content chia khoảng dọc hàng; align-items căn người ngồi theo chiều còn lại."
    },
    visual: S.layout({ type: "flex", direction: "row", justify: "space-between", align: "center", gap: 12, wrap: true, items: ["Logo", "Menu", "Đăng nhập"], caption: "Toolbar flex: ba nhóm căn đều hai đầu" }),
    steps: [
      {
        short: "display:flex",
        type: "KÍCH HOẠT",
        title: "display:flex biến con thành flex item",
        body: "Khi một phần tử là flex container, các con trực tiếp trở thành flex item và xếp trên một trục. Mặc định trục chính nằm ngang, từ trái sang phải.",
        line: 2,
        mark: [1, 2],
        watch: [{ name: "display", value: "flex", type: "container" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "row", justify: "flex-start", align: "stretch", gap: 12, items: ["Item 1", "Item 2", "Item 3"], caption: "Ba item xếp ngang" }),
        note: "Flex container chỉ ảnh hưởng con trực tiếp, không ảnh hưởng cháu.",
        changes: ["Toolbar trở thành flex container."]
      },
      {
        short: "justify-content",
        type: "TRỤC CHÍNH",
        title: "justify-content chia khoảng theo trục chính",
        body: "<code>space-between</code> đẩy item đầu và cuối ra hai đầu, khoảng giữa chia đều. Các giá trị khác: flex-start, center, flex-end, space-around, space-evenly.",
        line: 3,
        mark: [3],
        watch: [{ name: "justify-content", value: "space-between", type: "main axis" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "row", justify: "space-between", align: "center", gap: 0, items: ["Logo", "Menu", "Đăng nhập"], caption: "space-between: hai đầu, giữa tự chia" }),
        note: "Nếu có gap, space-between vẫn giữ khoảng cách tối thiểu giữa các item.",
        changes: ["Logo và nút đăng nhập ra hai đầu."]
      },
      {
        short: "align-items",
        type: "TRỤC PHỤ",
        title: "align-items căn theo chiều còn lại",
        body: "Với flex-direction row, <code>align-items:center</code> căn giữa theo chiều dọc. Nếu đổi sang column, trục chính và trục phụ hoán đổi vai trò.",
        line: 4,
        mark: [4],
        watch: [{ name: "align-items", value: "center", type: "cross axis" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "row", justify: "flex-start", align: "center", gap: 12, items: [{ label: "Cao", grow: 1 }, { label: "Thấp", grow: 1 }, { label: "Vừa", grow: 1 }], caption: "Các item được căn giữa theo chiều dọc" }),
        note: "align-items: stretch kéo item cao bằng container nếu item không có chiều cao cố định.",
        changes: ["Logo, menu và nút thẳng hàng giữa theo chiều dọc."]
      },
      {
        short: "gap & wrap",
        type: "KHOẢNG CÁCH",
        title: "gap tạo khoảng cách, wrap cho phép xuống dòng",
        body: "<code>gap</code> đặt khoảng cách giữa các item mà không cần margin. <code>flex-wrap:wrap</code> cho phép item xuống dòng khi thiếu chỗ, hữu ích trên mobile.",
        line: 5,
        mark: [5, 6],
        watch: [{ name: "gap", value: "12px", type: "spacing" }, { name: "flex-wrap", value: "wrap", type: "multi-line" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "row", justify: "flex-start", align: "center", gap: 12, wrap: true, items: ["Một", "Hai", "Ba", "Bốn", "Năm"], caption: "Item xuống dòng khi không đủ chỗ" }),
        note: "Không dùng gap để thay margin ngoài container; gap chỉ tác dụng giữa các item.",
        changes: ["Toolbar tự xuống dòng trên màn hình hẹp."]
      },
      {
        short: "flex grow",
        type: "CO GIÃN",
        title: "flex: 1 1 200px cho item linh hoạt",
        body: "<code>flex: grow shrink basis</code>. <code>flex:1 1 200px</code> cho item lớn lên, co lại và bắt đầu từ 200px. Đây là cách chia không gian mà vẫn giữ kích thước tối thiểu hợp lý.",
        line: 11,
        mark: [11],
        watch: [{ name: "grow", value: "1", type: "expand" }, { name: "shrink", value: "1", type: "shrink" }, { name: "basis", value: "200px", type: "start" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "row", justify: "flex-start", align: "stretch", gap: 12, items: [{ label: "Sidebar", grow: 1 }, { label: "Nội dung", grow: 2, active: true }], caption: "Item co giãn theo tỉ lệ grow" }),
        note: "flex:1 là viết tắt của 1 1 0%; khác với 1 1 auto.",
        changes: ["Vùng actions chiếm phần còn lại của toolbar."]
      }
    ]
  };

  L["grid"] = {
    id: "grid",
    track: "design",
    module: "design-layout",
    title: "CSS Grid",
    shortTitle: "Grid",
    subtitle: "Bố cục hai chiều: hàng và cột cùng lúc.",
    blurb: "grid-template-columns, repeat, minmax, gap, span và auto-fit — dựng gallery, dashboard và landing page gọn hơn flex.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "css",
    tags: ["grid", "tracks", "minmax", "auto-fit", "span"],
    learn: [
      "Tạo lưới bằng grid-template-columns",
      "Dùng repeat và minmax để responsive không cần media query",
      "Đặt item vào nhiều cột bằng span",
      "Chọn grid hay flex theo bài toán"
    ],
    code: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.feature {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
}
.feature .visual {
  grid-column: span 2;
}`,
    file: "grid.css",
    life: {
      icon: "bulb",
      title: "Kệ sách có ngăn",
      text: "Flexbox xếp sách thành một hàng; Grid quy định cả số ngăn và chiều rộng từng ngăn. Khi cần kiểm soát cả hàng lẫn cột, Grid là công cụ chính."
    },
    visual: S.layout({ type: "grid", columns: 3, gap: 12, items: ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"], caption: "Lưới 3 cột đều nhau" }),
    steps: [
      {
        short: "Lưới cơ bản",
        type: "GRID",
        title: "Định nghĩa cột bằng grid-template-columns",
        body: "<code>display:grid</code> tạo lưới; <code>grid-template-columns: repeat(auto-fit, minmax(220px,1fr))</code> tạo các cột tối thiểu 220px và chia đều phần còn lại. Màn hình hẹp tự ít cột hơn.",
        line: 3,
        mark: [1, 2, 3],
        watch: [{ name: "min track", value: "220px", type: "minmax" }, { name: "max track", value: "1fr", type: "fraction" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 3, gap: 12, items: ["A", "B", "C", "D", "E", "F"], caption: "auto-fit + minmax: số cột tự thay đổi" }),
        note: "auto-fit gộp track trống; auto-fill giữ track trống — chọn theo ý đồ bố cục.",
        changes: ["Gallery tự chọn số cột theo bề rộng."]
      },
      {
        short: "gap",
        type: "KHOẢNG CÁCH",
        title: "gap tạo rãnh giữa các ô",
        body: "<code>gap: 20px</code> đặt khoảng cách cả hàng và cột. Có thể tách <code>row-gap</code> và <code>column-gap</code> nếu cần nhịp khác nhau.",
        line: 4,
        mark: [4],
        watch: [{ name: "gap", value: "20px", type: "gutter" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 3, gap: 20, items: ["A", "B", "C", "D", "E", "F"], caption: "Rãnh 20px giữa các ô" }),
        note: "Không cần margin cho từng card khi đã dùng gap.",
        changes: ["Các card cách đều 20px."]
      },
      {
        short: "Cột không đều",
        type: "TỈ LỆ",
        title: "fr chia không gian theo tỉ lệ",
        body: "<code>grid-template-columns: 1fr 2fr</code> cho cột thứ hai rộng gấp đôi cột thứ nhất. Đây là cách dựng bố cục nội dung chính + sidebar.",
        line: 8,
        mark: [8],
        watch: [{ name: "columns", value: "1fr 2fr", type: "ratio" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 2, gap: 12, items: [{ label: "1fr", span: 1 }, { label: "2fr", span: 1, grow: 2 }], caption: "Cột phải rộng gấp đôi" }),
        note: "fr chỉ chia phần không gian còn lại sau khi trừ gap và kích thước cố định.",
        changes: ["Feature có hai cột lệch tỉ lệ."]
      },
      {
        short: "Đặt item",
        type: "SPAN",
        title: "span cho item chiếm nhiều cột",
        body: "<code>grid-column: span 2</code> cho phần tử chiếm hai cột. Có thể dùng để làm ảnh lớn, banner hoặc card nổi bật trong gallery.",
        line: 12,
        mark: [12],
        watch: [{ name: "grid-column", value: "span 2", type: "span" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 2, gap: 12, items: [{ label: "Ảnh lớn", span: 2, active: true }, "Ô 1", "Ô 2"], caption: "Item đầu chiếm cả hai cột" }),
        note: "Nếu item không vừa, grid có thể tạo track ẩn; hãy kiểm tra DevTools.",
        changes: ["Ảnh feature chiếm toàn bộ chiều ngang."]
      },
      {
        short: "Grid hay Flex?",
        type: "CHỌN",
        title: "Một chiều dùng flex, hai chiều dùng grid",
        body: "Flex phù hợp hàng nút, toolbar, căn giữa một trục. Grid phù hợp gallery, dashboard, bố cục trang. Có thể kết hợp: grid cho trang, flex cho từng card.",
        line: 7,
        mark: [7],
        watch: [{ name: "layout", value: "grid + flex", type: "hybrid" }],
        output: "",
        visual: S.table(["Bài toán", "Nên dùng"], [["Hàng nút", "flex"], ["Gallery tự co", "grid"], ["Bố cục trang", "grid"], ["Căn giữa 1 trục", "flex"]], 0, "Chọn theo số chiều cần kiểm soát"),
        note: "Không cần chọn phe; hầu hết giao diện thật dùng cả hai.",
        changes: ["Feature dùng grid, card bên trong có thể dùng flex."]
      }
    ]
  };

  L["responsive-design"] = {
    id: "responsive-design",
    track: "design",
    module: "design-layout",
    title: "Thiết kế responsive",
    shortTitle: "Responsive",
    subtitle: "Một giao diện, nhiều kích thước màn hình.",
    blurb: "Mobile-first, media query, breakpoint, ảnh co giãn và container query — để trang không chỉ “không vỡ” mà còn dễ dùng.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "css",
    tags: ["responsive", "media-query", "breakpoint", "mobile-first", "container-query"],
    learn: [
      "Viết CSS mobile-first",
      "Chọn breakpoint theo nội dung",
      "Làm ảnh và bảng co giãn",
      "Nhận biết khi nào cần container query"
    ],
    code: `.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}
@media (min-width: 48rem) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
img {
  max-width: 100%;
  height: auto;
}`,
    file: "responsive.css",
    life: {
      icon: "bulb",
      title: "Nước trong bình",
      text: "Giao diện responsive giống nước: hình dạng thay đổi theo bình chứa nhưng vẫn là nước. Đừng thiết kế ba trang riêng; hãy thiết kế một hệ thống co giãn."
    },
    visual: S.layout({ type: "grid", columns: 1, gap: 12, items: ["Mobile: 1 cột"], caption: "Bắt đầu từ mobile" }),
    steps: [
      {
        short: "Mobile-first",
        type: "CHIẾN LƯỢC",
        title: "Viết CSS cho màn hình nhỏ trước",
        body: "Đặt mặc định một cột, sau đó dùng <code>min-width</code> để thêm cột khi đủ chỗ. Cách này giúp CSS gọn và ưu tiên trải nghiệm mobile.",
        line: 4,
        mark: [1, 2, 3, 4, 5],
        watch: [{ name: "default", value: "1 cột", type: "mobile" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 1, gap: 12, items: ["Card 1", "Card 2"], caption: "Mặc định 1 cột" }),
        note: "Mobile-first không có nghĩa chỉ làm mobile; nó là thứ tự viết CSS.",
        changes: ["Grid mặc định một cột."]
      },
      {
        short: "Media query",
        type: "BREAKPOINT",
        title: "Thêm cột khi màn hình đủ rộng",
        body: "<code>@media (min-width: 48rem)</code> áp dụng khi viewport ít nhất 48rem. Bên trong, grid chuyển thành ba cột. Chọn breakpoint khi nội dung bắt đầu chật, không theo tên thiết bị.",
        line: 6,
        mark: [6, 7, 8, 9, 10],
        watch: [{ name: "breakpoint", value: "48rem", type: "768px" }, { name: "columns", value: "3", type: "desktop" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 3, gap: 12, items: ["Card 1", "Card 2", "Card 3"], caption: "Từ 48rem: ba cột" }),
        note: "Đừng tạo quá nhiều breakpoint; ưu tiên lưới tự co như auto-fit khi có thể.",
        changes: ["Grid chuyển ba cột trên màn hình rộng."]
      },
      {
        short: "Ảnh co giãn",
        type: "MEDIA",
        title: "Ảnh không được tràn khỏi cột",
        body: "<code>max-width:100%; height:auto</code> giúp ảnh co theo container và giữ tỉ lệ. Với ảnh trong grid/flex, có thể cần thêm <code>min-width:0</code> cho item.",
        line: 11,
        mark: [11, 12, 13, 14],
        watch: [{ name: "max-width", value: "100%", type: "fluid" }, { name: "height", value: "auto", type: "ratio" }],
        output: "",
        visual: S.layout({ type: "flex", direction: "column", gap: 8, items: [{ label: "Ảnh co theo cột", grow: 1 }], caption: "Ảnh không vượt quá bề rộng container" }),
        note: "Ảnh có width/height HTML vẫn nên có CSS này để không tràn.",
        changes: ["Ảnh co giãn theo cột."]
      },
      {
        short: "Nội dung dài",
        type: "KIỂM TRA",
        title: "Kiểm tra chữ dài và bảng rộng",
        body: "Tiêu đề dài, URL không có khoảng trắng hoặc bảng nhiều cột thường gây tràn ngang. Dùng <code>overflow-wrap:anywhere</code> cho chữ, cuộn ngang có kiểm soát cho bảng.",
        line: 3,
        mark: [3],
        watch: [{ name: "overflow", value: "kiểm tra", type: "edge case" }],
        output: "",
        visual: S.table(["Tình huống", "Cách xử lý"], [["URL dài", "overflow-wrap"], ["Bảng rộng", "overflow-x auto"], ["Code block", "pre overflow auto"]], 0, "Kiểm tra nội dung cực đoan"),
        note: "Đừng dùng overflow:hidden toàn trang để che lỗi tràn; hãy sửa nguyên nhân.",
        changes: ["Nội dung dài không phá layout."]
      },
      {
        short: "Container query",
        type: "HIỆN ĐẠI",
        title: "Khi component cần tự thích nghi",
        body: "Media query dựa vào viewport; container query dựa vào bề rộng của khối cha. Một card trong sidebar hẹp có thể chuyển layout dù màn hình vẫn rộng.",
        line: 6,
        mark: [6],
        watch: [{ name: "container-type", value: "inline-size", type: "container" }],
        output: "",
        visual: S.flow([{ label: "Viewport", sub: "media query" }, { label: "Container", sub: "container query" }, { label: "Component", sub: "tự thích nghi" }], [1]),
        note: "Container query cần khai báo container-type trên phần tử cha.",
        changes: ["Component có thể phản ứng theo không gian thật của nó."]
      }
    ]
  };

  L["positioning"] = {
    id: "positioning",
    track: "design",
    module: "design-craft",
    title: "Positioning",
    shortTitle: "Positioning",
    subtitle: "Đặt phần tử ra khỏi dòng chảy: badge, tooltip, header dính.",
    blurb: "static, relative, absolute, fixed, sticky và z-index — hiểu containing block để không phải đoán vị trí.",
    level: "Trung cấp",
    duration: "15 phút",
    lang: "css",
    tags: ["position", "absolute", "sticky", "z-index", "containing-block"],
    learn: [
      "Phân biệt các giá trị position",
      "absolute dựa vào containing block nào",
      "sticky hoạt động trong phạm vi cha",
      "z-index chỉ có nghĩa với phần tử đã định vị"
    ],
    code: `.card {
  position: relative;
}
.badge {
  position: absolute;
  top: 12px;
  right: 12px;
}
.site-header {
  position: sticky;
  top: 0;
}`,
    file: "position.css",
    life: {
      icon: "bulb",
      title: "Nhãn dán trên hộp",
      text: "position:relative giữ hộp tại chỗ nhưng làm mốc; absolute dán nhãn lên hộp; sticky giống tờ giấy dán mép bảng, trượt theo nhưng dừng ở mép."
    },
    visual: S.flow([{ label: "static", sub: "theo dòng chảy" }, { label: "relative", sub: "dịch + làm mốc" }, { label: "absolute", sub: "ra khỏi dòng" }, { label: "sticky", sub: "dính khi cuộn" }], [1]),
    steps: [
      {
        short: "relative",
        type: "MỐC",
        title: "relative vừa dịch vừa làm mốc",
        body: "<code>position:relative</code> giữ phần tử trong dòng chảy nhưng có thể dịch bằng top/left. Quan trọng hơn, nó trở thành containing block cho con absolute.",
        line: 2,
        mark: [1, 2, 3],
        watch: [{ name: "position", value: "relative", type: "containing block" }],
        output: "",
        visual: S.box({ content: "Card", width: "260px", padding: "16px", border: "1px", margin: "0", active: "border", caption: "Card là mốc định vị cho badge" }),
        note: "Nếu thiếu relative, absolute sẽ tìm mốc gần nhất phía trên, thường là body.",
        changes: ["Card trở thành mốc định vị."]
      },
      {
        short: "absolute",
        type: "ĐỊNH VỊ",
        title: "absolute ra khỏi dòng chảy",
        body: "<code>position:absolute</code> lấy phần tử ra khỏi dòng chảy, định vị theo containing block gần nhất có position khác static. Badge có thể nằm góc card mà không đẩy nội dung.",
        line: 5,
        mark: [4, 5, 6, 7, 8],
        watch: [{ name: "top", value: "12px", type: "offset" }, { name: "right", value: "12px", type: "offset" }],
        output: "",
        visual: S.layout({ type: "flex", justify: "flex-end", align: "flex-start", gap: 0, items: [{ label: "Badge", grow: 1, active: true }], caption: "Badge ở góc trên phải của card" }),
        note: "absolute không giữ chỗ; nếu nội dung quan trọng, hãy kiểm tra chồng chéo.",
        changes: ["Badge nằm ở góc card, không đẩy chữ."]
      },
      {
        short: "sticky",
        type: "DÍNH",
        title: "sticky dính khi cuộn trong phạm vi cha",
        body: "<code>position:sticky; top:0</code> giữ header ở mép trên khi cuộn, nhưng chỉ trong phạm vi phần tử cha. Nếu cha thấp, header sẽ rời đi khi cha kết thúc.",
        line: 9,
        mark: [9, 10, 11, 12],
        watch: [{ name: "top", value: "0", type: "threshold" }],
        output: "",
        visual: S.flow([{ label: "Đầu trang", sub: "header bình thường" }, { label: "Cuộn", sub: "header dính" }, { label: "Hết cha", sub: "header rời" }], [1]),
        note: "sticky không hoạt động nếu ancestor có overflow:hidden/auto.",
        changes: ["Header dính khi cuộn trong vùng nội dung."]
      },
      {
        short: "fixed",
        type: "CỐ ĐỊNH",
        title: "fixed gắn theo viewport",
        body: "<code>position:fixed</code> định vị theo cửa sổ trình duyệt và không cuộn theo trang. Thường dùng cho nút chat, thanh dưới mobile, nhưng cần chừa khoảng trống để không che nội dung.",
        line: 1,
        mark: [1],
        watch: [{ name: "position", value: "fixed", type: "viewport" }],
        output: "",
        visual: S.layout({ type: "flex", justify: "flex-end", align: "flex-end", gap: 0, items: [{ label: "Nút chat", grow: 1 }], caption: "Nút cố định ở góc màn hình" }),
        note: "Fixed có thể gây khó chịu trên mobile nếu che nút quan trọng.",
        changes: ["Nút luôn nằm ở góc màn hình."]
      },
      {
        short: "z-index",
        type: "LỚP",
        title: "z-index cần position và ngữ cảnh",
        body: "<code>z-index</code> chỉ tác dụng với phần tử đã định vị (hoặc flex/grid item). Nếu cha tạo stacking context, z-index của con chỉ so trong cha đó.",
        line: 5,
        mark: [5],
        watch: [{ name: "z-index", value: "10", type: "layer" }],
        output: "",
        visual: S.table(["Giá trị", "Ý nghĩa"], [["auto", "theo thứ tự DOM"], ["1", "trên layer 0"], ["999", "không phải lúc nào cũng trên"], ["stacking context", "phạm vi so sánh"]], 2, "z-index cao không đảm bảo luôn trên"),
        note: "Đừng dùng z-index:9999; hãy xây thang layer nhỏ và có tên.",
        changes: ["Badge nằm trên nội dung card."]
      }
    ]
  };

  L["transitions-animation"] = {
    id: "transitions-animation",
    track: "design",
    module: "design-craft",
    title: "Transition và animation",
    shortTitle: "Motion",
    subtitle: "Chuyển động có mục đích, không chỉ để cho đẹp.",
    blurb: "transition, transform, hover/focus, keyframes và prefers-reduced-motion — làm giao diện sống động mà vẫn tôn trọng người dùng.",
    level: "Trung cấp",
    duration: "14 phút",
    lang: "css",
    tags: ["transition", "transform", "keyframes", "reduced-motion", "focus"],
    learn: [
      "Transition khác animation ở đâu",
      "Dùng transform thay vì thay layout khi có thể",
      "Không bỏ quên trạng thái focus",
      "Tôn trọng prefers-reduced-motion"
    ],
    code: `.button {
  background: #0f9f8a;
  transition: transform 180ms ease, background 180ms ease;
}
.button:hover {
  transform: translateY(-2px);
}
@media (prefers-reduced-motion: reduce) {
  .button { transition: none; }
}
@keyframes pulse {
  50% { opacity: 0.5; }
}`,
    file: "motion.css",
    life: {
      icon: "bulb",
      title: "Cửa tự động",
      text: "Chuyển động tốt giống cửa tự động mở vừa đủ: báo hiệu và giúp đi qua. Chuyển động quá nhiều giống cửa quay liên tục — gây mệt và mất tập trung."
    },
    visual: S.flow([{ label: "Trạng thái A", sub: "bình thường" }, { label: "Transition", sub: "180ms" }, { label: "Trạng thái B", sub: "hover" }], [1]),
    steps: [
      {
        short: "transition",
        type: "CHUYỂN ĐỔI",
        title: "transition làm mượt thay đổi trạng thái",
        body: "<code>transition: transform 180ms ease</code> nói trình duyệt nội suy giá trị trong 180ms. Chỉ nên transition các thuộc tính rẻ như transform, opacity; tránh width/height nếu có thể.",
        line: 3,
        mark: [3],
        watch: [{ name: "duration", value: "180ms", type: "fast" }, { name: "easing", value: "ease", type: "curve" }],
        output: "",
        visual: S.vars([{ name: "property", type: "string", value: "transform" }, { name: "duration", type: "time", value: "180ms" }, { name: "easing", type: "function", value: "ease" }]),
        note: "Transition cần một trạng thái bắt đầu và kết thúc; nó không tự chạy.",
        changes: ["Nút có chuyển động mượt khi hover."]
      },
      {
        short: "hover & focus",
        type: "TƯƠNG TÁC",
        title: "Đừng chỉ làm hover",
        body: "Người dùng bàn phím không hover. Hãy đặt style cho <code>:focus-visible</code> tương đương hoặc rõ hơn hover, và giữ outline đủ tương phản.",
        line: 5,
        mark: [5, 6, 7],
        watch: [{ name: "hover", value: "translateY(-2px)", type: "pointer" }, { name: "focus-visible", value: "outline", type: "keyboard" }],
        output: "",
        visual: S.table(["Trạng thái", "Phản hồi"], [["hover", "nâng nhẹ"], ["focus-visible", "viền rõ"], ["active", "hạ nhẹ"], ["disabled", "mờ + cursor"]], 1, "Mọi trạng thái cần nhìn thấy được"),
        note: "Không dùng outline:none mà không có thay thế rõ ràng.",
        changes: ["Nút có phản hồi cho cả chuột và bàn phím."]
      },
      {
        short: "reduced motion",
        type: "A11Y",
        title: "Tôn trọng người nhạy cảm chuyển động",
        body: "<code>@media (prefers-reduced-motion: reduce)</code> cho phép giảm hoặc tắt animation. Đây là yêu cầu accessibility, đặc biệt với hiệu ứng parallax hoặc chuyển động lặp.",
        line: 8,
        mark: [8, 9, 10],
        watch: [{ name: "reduced-motion", value: "reduce", type: "preference" }],
        output: "",
        visual: S.flow([{ label: "Hệ điều hành", sub: "giảm chuyển động" }, { label: "Media query", sub: "khớp" }, { label: "Tắt hiệu ứng", sub: "an toàn" }], [1]),
        note: "Không cần tắt mọi thứ; có thể giảm thời lượng và bỏ chuyển động lặp.",
        changes: ["Hiệu ứng được tắt khi người dùng yêu cầu."]
      },
      {
        short: "keyframes",
        type: "ANIMATION",
        title: "keyframes cho chuỗi trạng thái",
        body: "<code>@keyframes</code> định nghĩa các mốc 0%–100%; <code>animation</code> áp dụng tên, thời lượng, lặp. Animation phù hợp cho loading, pulse, nhưng đừng lạm dụng.",
        line: 11,
        mark: [11, 12, 13],
        watch: [{ name: "keyframes", value: "pulse", type: "loop" }, { name: "opacity", value: "0.5 → 1", type: "states" }],
        output: "",
        visual: S.flow([{ label: "0%", sub: "opacity 1" }, { label: "50%", sub: "opacity .5" }, { label: "100%", sub: "opacity 1" }], [1]),
        note: "Animation lặp vô hạn có thể gây mất tập trung; hãy dùng có chừng mực.",
        changes: ["Hiệu ứng pulse lặp theo keyframes."]
      },
      {
        short: "Hiệu năng",
        type: "TỐI ƯU",
        title: "Ưu tiên transform và opacity",
        body: "Thay đổi transform/opacity thường được GPU xử lý, ít gây layout lại. Tránh animate top/left/width/height nếu có thể, vì trình duyệt phải tính lại layout mỗi frame.",
        line: 6,
        mark: [6],
        watch: [{ name: "transform", value: "GPU", type: "composited" }, { name: "width", value: "layout", type: "expensive" }],
        output: "",
        visual: S.table(["Thuộc tính", "Chi phí"], [["transform", "thấp"], ["opacity", "thấp"], ["width/height", "cao"], ["top/left", "cao"]], 0, "Chọn thuộc tính rẻ để animate"),
        note: "Kiểm tra bằng DevTools Performance nếu animation bị giật.",
        changes: ["Chuyển động dùng transform thay vì thay kích thước."]
      }
    ]
  };

  L["design-system"] = {
    id: "design-system",
    track: "design",
    module: "design-craft",
    title: "Design system",
    shortTitle: "Design system",
    subtitle: "Biến giao diện thành bộ quy tắc có thể tái sử dụng.",
    blurb: "Token, component, biến thể, tài liệu và quản trị — cách một nhóm giữ giao diện nhất quán khi dự án lớn dần.",
    level: "Trung cấp",
    duration: "15 phút",
    lang: "css",
    tags: ["design-system", "tokens", "components", "variants", "documentation"],
    learn: [
      "Design token là gì",
      "Tách component và biến thể",
      "Tài liệu hóa trạng thái component",
      "Quản trị thay đổi để không phá giao diện"
    ],
    code: `:root {
  --color-brand: #0f9f8a;
  --space-2: 8px;
  --space-4: 16px;
  --radius-md: 10px;
}
.btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
}
.btn--primary { background: var(--color-brand); }
.card {
  padding: var(--space-4);
}`,
    file: "system.css",
    life: {
      icon: "bulb",
      title: "Bộ LEGO",
      text: "Design system là bộ LEGO có quy chuẩn: cùng kích thước nối, cùng bảng màu, cùng cách lắp. Thiếu quy chuẩn, mỗi người lắp một kiểu và sản phẩm rối."
    },
    visual: S.vars([{ name: "--color-brand", type: "color", value: "#0f9f8a" }, { name: "--space-2", type: "space", value: "8px" }, { name: "--space-4", type: "space", value: "16px" }, { name: "--radius-md", type: "radius", value: "10px" }]),
    steps: [
      {
        short: "Token",
        type: "NỀN TẢNG",
        title: "Token là ngôn ngữ chung",
        body: "Token đặt tên cho quyết định thiết kế: màu thương hiệu, khoảng cách, bo góc, cỡ chữ. Component dùng token thay vì giá trị thô để đổi toàn hệ thống dễ dàng.",
        line: 1,
        mark: [1, 2, 3, 4, 5, 6],
        watch: [{ name: "brand", value: "#0f9f8a", type: "color token" }, { name: "space", value: "8/16px", type: "space scale" }],
        output: "",
        visual: S.vars([{ name: "--color-brand", type: "color", value: "#0f9f8a" }, { name: "--space-2", type: "space", value: "8px" }, { name: "--space-4", type: "space", value: "16px" }, { name: "--radius-md", type: "radius", value: "10px" }]),
        note: "Token nên có thang nhỏ, có quy ước tên và không tạo token tùy tiện.",
        changes: ["Hệ thống có bộ token nền."]
      },
      {
        short: "Component",
        type: "THÀNH PHẦN",
        title: "Component nhận token, không hard-code",
        body: "<code>.btn</code> dùng <code>var(--space-2)</code> và <code>var(--radius-md)</code>. Nhờ đó mọi nút chia sẻ cùng nhịp khoảng cách và bo góc, kể cả khi theme đổi.",
        line: 7,
        mark: [7, 8, 9, 10],
        watch: [{ name: "padding", value: "token", type: "consistent" }],
        output: "",
        visual: S.layout({ type: "flex", justify: "flex-start", align: "center", gap: 8, items: ["Nút chính", "Nút phụ"], caption: "Hai biến thể cùng nền tảng component" }),
        note: "Component không nên biết quá nhiều về ngữ cảnh trang; hãy để props/class điều khiển.",
        changes: ["Nút dùng token thay vì số đo rời."]
      },
      {
        short: "Biến thể",
        type: "VARIANT",
        title: "Biến thể mở rộng, không viết lại",
        body: "<code>.btn--primary</code> chỉ thêm khác biệt về màu. Biến thể nên kế thừa component gốc, tránh copy toàn bộ CSS làm hai bản lệch nhau.",
        line: 11,
        mark: [11],
        watch: [{ name: ".btn--primary", value: "biến thể", type: "variant" }],
        output: "",
        visual: S.table(["Class", "Ý nghĩa"], [[".btn", "nền tảng"], [".btn--primary", "hành động chính"], [".btn--ghost", "hành động phụ"]], 1, "Biến thể là lớp mở rộng"),
        note: "Đặt tên biến thể theo vai trò (primary/ghost) thay vì màu (green).",
        changes: ["Nút chính có màu thương hiệu."]
      },
      {
        short: "Tài liệu",
        type: "TÀI LIỆU",
        title: "Ghi rõ trạng thái và cách dùng",
        body: "Một component cần tài liệu về props, trạng thái hover/focus/disabled, ví dụ đúng/sai và khả năng truy cập. Tài liệu giúp người mới không tạo biến thể trùng.",
        line: 12,
        mark: [12, 13, 14],
        watch: [{ name: "states", value: "default / hover / focus / disabled", type: "docs" }],
        output: "",
        visual: S.table(["Trạng thái", "Mô tả"], [["default", "bình thường"], ["hover", "chuột"], ["focus", "bàn phím"], ["disabled", "không dùng được"]], 0, "Tài liệu phải có trạng thái"),
        note: "Tài liệu không chỉ là ảnh đẹp; cần mã mẫu và quy tắc sử dụng.",
        changes: ["Component có tài liệu trạng thái."]
      },
      {
        short: "Quản trị",
        type: "GOVERNANCE",
        title: "Thay đổi có quy trình",
        body: "Khi sửa token hoặc component, cần xem ảnh hưởng toàn hệ thống, thông báo cho nhóm và có phiên bản. Design system là sản phẩm sống, không phải file tĩnh.",
        line: 1,
        mark: [1],
        watch: [{ name: "version", value: "minor", type: "change" }],
        output: "",
        visual: S.flow([{ label: "Đề xuất", sub: "issue" }, { label: "Xem ảnh hưởng", sub: "audit" }, { label: "Cập nhật", sub: "version" }, { label: "Thông báo", sub: "team" }], [1]),
        note: "Đừng đổi token màu chỉ vì một trang; hãy kiểm tra toàn bộ nơi dùng.",
        changes: ["Thay đổi hệ thống có quy trình rõ ràng."]
      }
    ]
  };

  L["design-project"] = {
    id: "design-project",
    track: "design",
    module: "design-craft",
    title: "Dự án: Landing page",
    shortTitle: "Dự án thiết kế",
    subtitle: "Ghép HTML ngữ nghĩa, token, grid và responsive thành một trang hoàn chỉnh.",
    blurb: "Từ wireframe đến landing page có hero, feature cards, CTA và kiểm tra trên mobile — dự án tổng kết lộ trình thiết kế.",
    level: "Tổng hợp",
    duration: "25 phút",
    lang: "css",
    tags: ["project", "landing-page", "grid", "responsive", "qa"],
    learn: [
      "Chuyển wireframe thành cấu trúc HTML",
      "Dùng grid cho hero và card",
      "Đặt breakpoint hợp lý",
      "Kiểm tra accessibility và responsive trước khi bàn giao"
    ],
    code: `.landing {
  display: grid;
  gap: 32px;
}
.hero {
  display: grid;
  gap: 24px;
  grid-template-columns: 1.2fr 0.8fr;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
@media (max-width: 40rem) {
  .hero { grid-template-columns: 1fr; }
}`,
    file: "landing.css",
    life: {
      icon: "bulb",
      title: "Lắp ráp nội thất",
      text: "Landing page giống lắp một căn phòng mẫu: cần đúng khung, đúng ánh sáng, đúng lối đi. Từng món đẹp nhưng đặt sai chỗ thì tổng thể vẫn rối."
    },
    visual: S.layout({ type: "grid", columns: 2, gap: 16, items: [{ label: "Hero", span: 2, active: true }, "Feature 1", "Feature 2"], caption: "Hero rộng, feature chia cột" }),
    steps: [
      {
        short: "Khung trang",
        type: "BỐ CỤC",
        title: "Bắt đầu bằng các vùng lớn",
        body: "Chia landing thành hero, features, CTA, footer. Dùng grid dọc với gap để tạo nhịp giữa các vùng; chưa cần chi tiết bên trong.",
        line: 1,
        mark: [1, 2, 3, 4],
        watch: [{ name: "sections", value: "hero / cards / CTA", type: "structure" }],
        output: "",
        visual: S.flow([{ label: "Hero", sub: "giới thiệu" }, { label: "Features", sub: "lợi ích" }, { label: "CTA", sub: "hành động" }, { label: "Footer", sub: "thông tin" }], [0]),
        note: "Wireframe phần lớn quyết định thành công; đừng lao vào màu sắc quá sớm.",
        changes: ["Trang có bốn vùng lớn."]
      },
      {
        short: "Hero",
        type: "GRID",
        title: "Hero hai cột: nội dung và hình",
        body: "<code>grid-template-columns: 1.2fr 0.8fr</code> cho phần chữ rộng hơn phần hình. Trên mobile, chuyển về một cột để chữ không bị bóp.",
        line: 5,
        mark: [5, 6, 7, 8, 9],
        watch: [{ name: "columns", value: "1.2fr 0.8fr", type: "hero" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 2, gap: 16, items: [{ label: "Nội dung", grow: 2 }, { label: "Hình", grow: 1 }], caption: "Hero lệch tỉ lệ 1.2 : 0.8" }),
        note: "Đừng đặt hai cột nếu nội dung chính không đủ dài; khoảng trống lớn làm hero yếu.",
        changes: ["Hero có hai cột lệch tỉ lệ."]
      },
      {
        short: "Cards",
        type: "GALLERY",
        title: "Card tự co theo bề rộng",
        body: "<code>repeat(auto-fit,minmax(220px,1fr))</code> tạo số cột linh hoạt. Dùng chung token gap và padding để các card có nhịp nhất quán.",
        line: 10,
        mark: [10, 11, 12, 13, 14],
        watch: [{ name: "minmax", value: "220px → 1fr", type: "auto" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 3, gap: 20, items: ["Tốc độ", "Bảo mật", "Hỗ trợ"], caption: "Card tự xếp theo không gian" }),
        note: "Kiểm tra tiêu đề dài và mô tả 3 dòng để card không lệch chiều cao quá nhiều.",
        changes: ["Feature cards tự co giãn."]
      },
      {
        short: "Breakpoint",
        type: "RESPONSIVE",
        title: "Một breakpoint cho hero là đủ",
        body: "Ở <code>max-width:40rem</code>, hero chuyển một cột. Cards đã tự co nên không cần breakpoint riêng. Ít breakpoint giúp CSS dễ đoán hơn.",
        line: 15,
        mark: [15, 16, 17],
        watch: [{ name: "breakpoint", value: "40rem", type: "640px" }],
        output: "",
        visual: S.layout({ type: "grid", columns: 1, gap: 12, items: ["Chữ", "Hình"], caption: "Mobile: hero xếp dọc" }),
        note: "Breakpoint nên đặt khi nội dung bắt đầu khó đọc, không theo tên thiết bị.",
        changes: ["Hero chuyển một cột trên mobile."]
      },
      {
        short: "QA",
        type: "KIỂM TRA",
        title: "Kiểm tra trước khi bàn giao",
        body: "Kiểm tra 320px, 390px, 768px, 1280px; Tab qua mọi nút; zoom 200%; kiểm tra contrast; chạy Lighthouse. Sửa lỗi cấu trúc trước, trang trí sau.",
        line: 2,
        mark: [2],
        watch: [{ name: "viewports", value: "320 / 390 / 768 / 1280", type: "QA" }, { name: "keyboard", value: "Tab", type: "QA" }],
        output: "",
        visual: S.table(["Hạng mục", "Đạt khi"], [["Responsive", "không tràn ngang"], ["Keyboard", "Tab tới mọi nút"], ["Contrast", "≥ 4.5:1"], ["Ảnh", "có alt + tỉ lệ"]], 0, "Checklist bàn giao"),
        note: "QA trên trình duyệt thật, không chỉ tin vào ảnh thiết kế.",
        changes: ["Landing page vượt checklist cơ bản."]
      }
    ]
  };

})();
