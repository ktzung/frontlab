/* FrontLab — cheatsheets: 12 thẻ HTML, CSS, JavaScript và JSX */
(function () {
  "use strict";

  window.FRONTLAB.cheatsheets = [
    {
      id: "html-semantic",
      track: "design",
      title: "HTML ngữ nghĩa",
      subtitle: "Khung trang và các thẻ mô tả vai trò nội dung",
      icon: "code",
      tone: "blue",
      lang: "html",
      items: [
        { label: "Khung tài liệu", code: `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FrontLab</title>
</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
</html>`, note: "charset và viewport nên có ở mọi trang; chỉ một main trong tài liệu." },
        { label: "Bố cục ngữ nghĩa", code: `<header>
  <nav aria-label="Chính">
    <a href="#/">Trang chủ</a>
    <a href="#/learn/">Khóa học</a>
  </nav>
</header>
<main>
  <h1>Thiết kế giao diện</h1>
  <article>
    <h2>Bài viết</h2>
    <p>Nội dung chính.</p>
  </article>
  <aside>Ghi chú bên cạnh</aside>
</main>`, note: "header, nav, main, article, aside, footer nói rõ vai trò tốt hơn div." },
        { label: "Ảnh có nội dung", code: `<img
  src="chart.png"
  alt="Biểu đồ doanh thu tăng 20% trong quý 4"
  width="640"
  height="360"
  loading="lazy">`, note: "alt mô tả thông tin, không lặp lại tên tệp. width/height giúp giữ chỗ, tránh layout shift." }
      ]
    },
    {
      id: "html-forms-a11y",
      track: "design",
      title: "Form & accessibility",
      subtitle: "Nhãn, kiểm tra dữ liệu và thao tác bàn phím",
      icon: "practice",
      tone: "coral",
      lang: "html",
      items: [
        { label: "Label gắn input", code: `<label for="email">Email</label>
<input
  id="email"
  name="email"
  type="email"
  autocomplete="email"
  required>`, note: "for của label trùng id của input; name dùng khi gửi form lên máy chủ." },
        { label: "Nhóm lựa chọn", code: `<fieldset>
  <legend>Bạn học buổi nào?</legend>
  <label>
    <input type="radio" name="slot" value="sang" checked>
    Buổi sáng
  </label>
  <label>
    <input type="radio" name="slot" value="chieu">
    Buổi chiều
  </label>
</fieldset>`, note: "Cùng name để radio cùng nhóm; fieldset/legend gom nhóm có nhãn." },
        { label: "Nút và trạng thái", code: `<button type="button" aria-expanded="false">
  Mở menu
</button>
<button type="submit">Gửi</button>
<p role="status">Đã lưu thay đổi</p>`, note: "type=\"button\" tránh submit ngoài ý muốn; role=\"status\" báo thay đổi cho trình đọc màn hình." }
      ]
    },
    {
      id: "css-selectors",
      track: "design",
      title: "Selector & cascade",
      subtitle: "Chọn đúng phần tử và hiểu ai thắng",
      icon: "code",
      tone: "violet",
      lang: "css",
      items: [
        { label: "Selector cơ bản", code: `.card { }
.card .title { }
.card > p { }
#hero { }
a:hover { }
input:focus-visible { }`, note: "Khoảng trắng là hậu duệ, > là con trực tiếp. Ưu tiên class thay vì id khi cần tái sử dụng." },
        { label: "Độ ưu tiên", code: `/* thấp → cao */
p { }
.card { }
#hero { }
<p style="color:red">inline</p>
/* !important đảo ngược mọi thứ */`, note: "Thẻ < class < id < inline. Hạn chế !important vì khó gỡ về sau." },
        { label: "Kế thừa và biến", code: `:root {
  --color-brand: #0f9f8a;
}
body {
  color: #1c2b35;
  font-family: system-ui, sans-serif;
}
.btn {
  color: var(--color-brand);
}`, note: "color và font-family kế thừa; biến ở :root dùng lại toàn trang." }
      ]
    },
    {
      id: "css-box",
      track: "design",
      title: "Box model",
      subtitle: "Width, padding, border, margin và box-sizing",
      icon: "book",
      tone: "coral",
      lang: "css",
      items: [
        { label: "Hộp đầy đủ", code: `.card {
  width: 320px;
  padding: 24px;
  border: 1px solid #d8e1e8;
  margin: 0 auto;
  box-sizing: border-box;
}`, note: "border-box giữ width cố định; padding và border ăn vào bên trong." },
        { label: "Reset dễ đoán", code: `*,
*::before,
*::after {
  box-sizing: border-box;
}`, note: "Đặt box-sizing toàn cục giúp kích thước các hộp dễ tính hơn." },
        { label: "Khoảng cách giữa các phần tử", code: `.stack > * + * {
  margin-top: 1rem;
}
.card {
  padding: 1.5rem;
  border-radius: 16px;
}`, note: "Dùng margin cho khoảng cách giữa khối, padding cho khoảng đệm bên trong." }
      ]
    },
    {
      id: "css-flex-grid",
      track: "design",
      title: "Flexbox & Grid",
      subtitle: "Hai công cụ xếp phần tử theo một chiều và hai chiều",
      icon: "code",
      tone: "blue",
      lang: "css",
      items: [
        { label: "Flexbox hàng ngang", code: `.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.toolbar .spacer {
  flex: 1;
}`, note: "justify-content căn trục chính, align-items căn trục phụ, gap tạo khoảng đều." },
        { label: "Grid tự co", code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.featured {
  grid-column: span 2;
}`, note: "auto-fit + minmax tạo lưới tự chia cột; span 2 cho thẻ nổi bật." },
        { label: "Căn giữa một khối", code: `.center {
  display: grid;
  place-items: center;
  min-height: 60vh;
}`, note: "place-items: center căn cả hai trục cho phần tử bên trong." }
      ]
    },
    {
      id: "css-responsive",
      track: "design",
      title: "Responsive & chuyển động",
      subtitle: "Breakpoint, ảnh co giãn và motion có kiểm soát",
      icon: "book",
      tone: "green",
      lang: "css",
      items: [
        { label: "Mobile-first", code: `.grid {
  display: grid;
  gap: 16px;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`, note: "Viết kiểu cơ bản cho màn hình nhỏ rồi mở rộng bằng min-width." },
        { label: "Ảnh và chữ co giãn", code: `img {
  max-width: 100%;
  height: auto;
}
h1 {
  font-size: clamp(1.75rem, 4vw, 3rem);
}`, note: "max-width 100% tránh ảnh tràn; clamp giới hạn cỡ chữ trong khoảng." },
        { label: "Transition và reduced motion", code: `.btn {
  transition: background-color 200ms ease;
}
.btn:hover {
  background: #0b7f6f;
}
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`, note: "Chỉ chuyển thuộc tính cần thiết; tôn trọng lựa chọn giảm chuyển động của người dùng." }
      ]
    },
    {
      id: "js-basics",
      track: "code",
      title: "JavaScript nền tảng",
      subtitle: "Biến, kiểu, điều kiện và vòng lặp",
      icon: "code",
      tone: "blue",
      lang: "js",
      items: [
        { label: "Biến và kiểu", code: `const name = "An";
let count = 0;
const isReady = true;
const items = [];
const user = { id: 1, name: "An" };
console.log(typeof name); // "string"`, note: "const cho ràng buộc không đổi; let khi cần gán lại. Ưu tiên const." },
        { label: "So sánh và điều kiện", code: `const value = Number(input.value);
if (!Number.isNaN(value) && value >= 5) {
  console.log("Hợp lệ");
} else {
  console.log("Chưa hợp lệ");
}`, note: "Dùng === và ép kiểu rõ ràng. Number.isNaN kiểm tra đúng giá trị NaN." },
        { label: "Vòng lặp", code: `const prices = [120, 80, 200];
for (const price of prices) {
  console.log(price);
}
prices.forEach((price, index) => {
  console.log(index, price);
});`, note: "for...of duyệt giá trị; forEach có index. Dùng filter/map khi cần tạo mảng mới." }
      ]
    },
    {
      id: "js-arrays-objects",
      track: "code",
      title: "Mảng & object",
      subtitle: "Lọc, biến đổi và cập nhật không phá dữ liệu cũ",
      icon: "book",
      tone: "coral",
      lang: "js",
      items: [
        { label: "filter, map, find", code: `const courses = [
  { id: 1, title: "HTML", free: true },
  { id: 2, title: "React", free: false }
];
const free = courses.filter(c => c.free);
const titles = courses.map(c => c.title);
const react = courses.find(c => c.id === 2);`, note: "filter giữ phần tử, map đổi hình dạng, find lấy phần tử đầu tiên khớp." },
        { label: "Spread và destructuring", code: `const user = { name: "An", age: 20 };
const next = { ...user, age: 21 };
const { name, age } = next;

const first = [1, 2];
const all = [...first, 3];`, note: "Spread tạo bản sao nông; thuộc tính viết sau ghi đè thuộc tính trước." },
        { label: "Tổng và sắp xếp", code: `const total = courses.reduce((sum, c) => sum + c.price, 0);
const sorted = [...courses].sort((a, b) => a.price - b.price);`, note: "reduce gom về một giá trị; sort sắp tại chỗ nên copy trước nếu cần giữ mảng gốc." }
      ]
    },
    {
      id: "js-dom-events",
      track: "code",
      title: "DOM & sự kiện",
      subtitle: "Chọn phần tử, cập nhật giao diện và lắng nghe hành vi",
      icon: "code",
      tone: "violet",
      lang: "js",
      items: [
        { label: "Chọn và cập nhật", code: `const title = document.querySelector(".hero h1");
title.textContent = "Chào buổi sáng";
title.classList.add("is-visible");

const list = document.querySelector("#list");
const item = document.createElement("li");
item.textContent = "Bài mới";
list.append(item);`, note: "textContent an toàn với dữ liệu người dùng; createElement + append tránh nối chuỗi HTML." },
        { label: "Lắng nghe sự kiện", code: `const form = document.querySelector("#signup");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  console.log(Object.fromEntries(data));
});`, note: "preventDefault chặn tải lại trang; FormData gom các trường theo name." },
        { label: "Ủy quyền sự kiện", code: `document.querySelector("#list").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (!button) return;
  console.log(button.dataset.id);
});`, note: "Gắn một listener ở cha thay vì từng con; closest xác định phần tử được bấm." }
      ]
    },
    {
      id: "js-async",
      track: "code",
      title: "Fetch & async",
      subtitle: "Gọi API, chờ dữ liệu và xử lý lỗi",
      icon: "code",
      tone: "blue",
      lang: "js",
      items: [
        { label: "async/await", code: `async function loadCourses() {
  const response = await fetch("/api/courses");
  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }
  return response.json();
}`, note: "fetch chỉ reject khi lỗi mạng; kiểm tra response.ok trước khi đọc JSON." },
        { label: "try/catch/finally", code: `try {
  const data = await loadCourses();
  render(data);
} catch (error) {
  console.error(error);
  showMessage("Không tải được dữ liệu");
} finally {
  setLoading(false);
}`, note: "finally luôn chạy; phù hợp để tắt trạng thái loading." },
        { label: "Chạy song song", code: `const [courses, teachers] = await Promise.all([
  fetch("/api/courses").then(r => r.json()),
  fetch("/api/teachers").then(r => r.json())
]);`, note: "Promise.all chờ tất cả; thời gian gần bằng yêu cầu chậm nhất." }
      ]
    },
    {
      id: "js-storage-modules",
      track: "code",
      title: "Storage & module",
      subtitle: "Giữ trạng thái trên trình duyệt và chia nhỏ mã",
      icon: "book",
      tone: "coral",
      lang: "js",
      items: [
        { label: "localStorage", code: `const key = "frontlab-user";
const saved = localStorage.getItem(key);
const user = saved ? JSON.parse(saved) : null;

localStorage.setItem(key, JSON.stringify({ name: "An" }));
localStorage.removeItem(key);`, note: "Chỉ lưu chuỗi; JSON.stringify khi ghi và JSON.parse khi đọc." },
        { label: "Export", code: `// utils.js
export function formatPrice(value) {
  return value.toLocaleString("vi-VN") + " đ";
}
export const TAX = 0.1;

// main.js
import { formatPrice, TAX } from "./utils.js";`, note: "Named export/import phải khớp tên; đường dẫn tương đối cần phần mở rộng trong trình duyệt." },
        { label: "Module mặc định", code: `// api.js
export default async function getCourses() {
  const response = await fetch("/api/courses");
  return response.json();
}

// main.js
import getCourses from "./api.js";`, note: "Mỗi module có tối đa một default export; tên khi import do bạn chọn." }
      ]
    },
    {
      id: "jsx-components",
      track: "code",
      title: "React component",
      subtitle: "Props, state, hook và danh sách",
      icon: "practice",
      tone: "green",
      lang: "jsx",
      items: [
        { label: "Component và props", code: `function Card({ title, children }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

<Card title="HTML">Nội dung</Card>`, note: "Props chỉ đọc; children là nội dung nằm giữa thẻ mở và đóng." },
        { label: "State và sự kiện", code: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Đã bấm {count} lần
    </button>
  );
}`, note: "Luôn cập nhật state qua setter; dùng hàm prev khi giá trị mới phụ thuộc giá trị cũ." },
        { label: "Danh sách và useEffect", code: `function CourseList({ courses }) {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
}

useEffect(() => {
  const onResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);`, note: "key phải ổn định theo dữ liệu; effect trả cleanup để gỡ listener." }
      ]
    }
  ];
})();
