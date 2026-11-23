/* FrontLab — course skeleton and shared data */
window.FRONTLAB = {
  version: "20261123",
  tracks: [
    {
      id: "design",
      name: "Thiết kế giao diện",
      short: "UI & CSS",
      kicker: "LỘ TRÌNH 01",
      blurb: "Từ cấu trúc HTML, hệ thống CSS đến flexbox, grid, responsive, design system và framework như Bootstrap, Tailwind — nhìn giao diện thay đổi ngay khi thuộc tính đổi.",
      outcome: "Tự tay dựng giao diện rõ thứ bậc, dễ đọc, truy cập được và chạy tốt trên nhiều kích thước màn hình.",
      tone: "teal",
      modules: ["design-foundation", "design-media", "design-css", "design-layout", "design-craft", "design-frameworks"]
    },
    {
      id: "code",
      name: "Lập trình Frontend",
      short: "JavaScript",
      kicker: "LỘ TRÌNH 02",
      blurb: "Từ biến, hàm, DOM, sự kiện đến fetch API, module, component, hooks và một dự án frontend hoàn chỉnh.",
      outcome: "Biến thiết kế thành sản phẩm có tương tác, quản lý dữ liệu và trạng thái giao diện bằng JavaScript.",
      tone: "amber",
      modules: ["code-foundation", "code-control", "code-dom", "code-async", "code-components"]
    }
  ],
  modules: [
    {
      id: "design-foundation",
      track: "design",
      num: "01",
      title: "Nền tảng web",
      blurb: "Trình duyệt đọc HTML thế nào, cấu trúc trang, thẻ ngữ nghĩa và liên kết.",
      lessons: ["web-foundations", "html-document", "semantic-html", "text-links"]
    },
    {
      id: "design-media",
      track: "design",
      num: "02",
      title: "Nội dung & biểu mẫu",
      blurb: "Hình ảnh, video, form, bảng dữ liệu và accessible content.",
      lessons: ["images-media", "forms-inputs", "tables-data", "accessibility"]
    },
    {
      id: "design-css",
      track: "design",
      num: "03",
      title: "CSS cốt lõi",
      blurb: "Selector, cascade, box model, màu sắc và typography — nền móng của mọi giao diện.",
      lessons: ["css-selectors", "cascade-specificity", "box-model", "colors-typography"]
    },
    {
      id: "design-layout",
      track: "design",
      num: "04",
      title: "Bố cục",
      blurb: "Đơn vị, flexbox, grid và responsive: sắp xếp nội dung theo mọi kích thước.",
      lessons: ["units-sizing", "flexbox", "grid", "responsive-design"]
    },
    {
      id: "design-craft",
      track: "design",
      num: "05",
      title: "Hoàn thiện sản phẩm",
      blurb: "Positioning, chuyển động, design system và dự án giao diện cuối khóa.",
      lessons: ["positioning", "transitions-animation", "design-system", "design-project"]
    },
    {
      id: "design-frameworks",
      track: "design",
      num: "06",
      title: "Framework giao diện",
      blurb: "Bootstrap 5 và TailwindCSS: dùng hệ lưới, utility và component có sẵn để dựng giao diện nhanh, nhất quán.",
      lessons: ["bootstrap-grid", "bootstrap-components", "tailwind-utilities", "tailwind-responsive"]
    },
    {
      id: "code-foundation",
      track: "code",
      num: "01",
      title: "JavaScript nền tảng",
      blurb: "Giá trị, kiểu dữ liệu, toán tử và rẽ nhánh — ngôn ngữ của trình duyệt.",
      lessons: ["js-intro", "js-values", "js-operators", "js-conditions"]
    },
    {
      id: "code-control",
      track: "code",
      num: "02",
      title: "Điều khiển dữ liệu",
      blurb: "Vòng lặp, hàm, mảng và object: xử lý dữ liệu có cấu trúc.",
      lessons: ["js-loops", "js-functions", "js-arrays", "js-objects"]
    },
    {
      id: "code-dom",
      track: "code",
      num: "03",
      title: "DOM & tương tác",
      blurb: "Chọn phần tử, lắng nghe sự kiện, validate form và lưu trạng thái.",
      lessons: ["js-dom", "js-events", "forms-validation", "storage"]
    },
    {
      id: "code-async",
      track: "code",
      num: "04",
      title: "Dữ liệu & module",
      blurb: "Fetch API, promise, async/await, module và xử lý lỗi mạng.",
      lessons: ["async-fetch", "promises-async", "modules", "error-handling"]
    },
    {
      id: "code-components",
      track: "code",
      num: "05",
      title: "Component & ứng dụng",
      blurb: "Component, props, state, hooks, routing và dự án frontend hoàn chỉnh.",
      lessons: ["components", "props-state", "react-hooks", "frontend-project"]
    }
  ],
  lessons: {},
  practice: [],
  cheatsheets: [],
  meta: {
    autoplayMs: 7200,
    totalLessons: 44
  }
};
