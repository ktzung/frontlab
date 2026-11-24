/* FrontLab — dự án 02: danh sách công việc */
window.FRONTLAB_PROJECTS = window.FRONTLAB_PROJECTS || [];
window.FRONTLAB_PROJECTS.push({
  id: "task-board",
  num: 2,
  title: "Danh sách công việc",
  short: "Việc hôm nay",
  level: "Trung cấp",
  tone: "gold",
  minutes: 75,
  thumb: "tasks",
  blurb: "Ứng dụng thêm, lọc, đánh dấu xong và xoá công việc. Mỗi thao tác đi thẳng tới MockAPI, giao diện cập nhật ngay.",
  tags: ["Biểu mẫu", "Event delegation", "CRUD", "Trạng thái giao diện"],
  skills: ["Một nguồn dữ liệu", "Render từ mảng", "POST và PATCH", "Xử lý lỗi"],
  goal: "Xây một danh sách công việc có thêm, lọc, đánh dấu xong và xoá; dữ liệu lưu trên MockAPI, giao diện luôn vẽ lại từ một mảng trạng thái duy nhất.",
  outcomes: [
    "Tách được dữ liệu gốc khỏi bộ lọc hiển thị.",
    "Viết một hàm render duy nhất và mọi thao tác đều đi qua nó.",
    "Thực hiện đủ bốn phương thức GET, POST, PATCH, DELETE với MockAPI."
  ],
  files: {
    html: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Việc hôm nay</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="page">
    <section class="app" aria-labelledby="appTitle">
      <header class="app-head">
        <div>
          <p class="eyebrow">Danh sách công việc</p>
          <h1 id="appTitle">Việc hôm nay</h1>
          <p class="sub">Thêm việc, lọc theo trạng thái, đánh dấu xong và xoá.</p>
        </div>
        <p class="counter" id="counter">0 việc chưa xong</p>
      </header>

      <form class="task-form" id="taskForm">
        <label class="sr-only" for="taskInput">Tên công việc</label>
        <input id="taskInput" name="title" type="text" placeholder="Ví dụ: Hoàn thiện phần hero" autocomplete="off" maxlength="80" required>

        <label class="sr-only" for="taskPriority">Mức ưu tiên</label>
        <select id="taskPriority" name="priority">
          <option value="normal">Bình thường</option>
          <option value="high">Ưu tiên cao</option>
          <option value="low">Ưu tiên thấp</option>
        </select>

        <button class="btn-add" type="submit">Thêm việc</button>
      </form>

      <nav class="filters" aria-label="Lọc công việc">
        <button type="button" class="is-active" data-filter="all" aria-pressed="true">Tất cả</button>
        <button type="button" data-filter="active" aria-pressed="false">Chưa xong</button>
        <button type="button" data-filter="done" aria-pressed="false">Đã xong</button>
      </nav>

      <ul class="task-list" id="taskList" aria-live="polite">
        <li class="task" data-id="demo">
          <label class="check">
            <input type="checkbox" aria-label="Đánh dấu xong">
            <span class="box" aria-hidden="true"></span>
          </label>
          <div class="task-body">
            <p class="task-title">Ví dụ: đọc yêu cầu dự án trước khi code</p>
            <p class="task-meta"><span class="dot high"></span> Ưu tiên cao · 24/11/2026</p>
          </div>
          <button class="icon-btn" type="button" aria-label="Xoá việc">
            <span aria-hidden="true">×</span>
          </button>
        </li>
      </ul>

      <p class="empty" id="emptyState" hidden>Chưa có việc nào ở mục này.</p>

      <footer class="app-foot">
        <span id="loadState">Đang tải dữ liệu…</span>
        <button class="link-btn" id="reloadBtn" type="button">Tải lại</button>
      </footer>
    </section>
  </main>
  <script src="app.js" defer></script>
</body>
</html>`,
    css: `:root {
  --bg: #eef1f5;
  --panel: #ffffff;
  --ink: #101d29;
  --muted: #61707e;
  --line: #e1e7ee;
  --brand: #0f9f8a;
  --brand-soft: #def6f0;
  --warn: #e4572e;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  padding: 28px 20px;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(900px 500px at 0% 0%, #e2f7f1, transparent 62%),
    radial-gradient(800px 460px at 100% 10%, #fdf0d8, transparent 58%),
    var(--bg);
}

.page {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.app {
  padding: clamp(20px, 4vw, 34px);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 26px 64px rgba(16, 29, 41, 0.12);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

.app-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.eyebrow {
  margin: 0 0 5px;
  font-size: 0.67rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}

.app-head h1 {
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.sub {
  margin: 6px 0 0;
  font-size: 0.83rem;
  color: var(--muted);
}

.counter {
  margin: 0;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--brand-soft);
  color: #0a7d6c;
  font-size: 0.76rem;
  font-weight: 700;
  white-space: nowrap;
}

.task-form {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px auto;
  gap: 10px;
  margin-top: 24px;
}

.task-form input,
.task-form select {
  height: 46px;
  min-width: 0;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #ffffff;
  color: var(--ink);
  font: inherit;
  font-size: 0.86rem;
}

.task-form input::placeholder { color: #96a2ae; }

.task-form input:focus,
.task-form select:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-soft);
}

.btn-add {
  height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: 12px;
  background: var(--ink);
  color: #ffffff;
  font: inherit;
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}

.btn-add:hover { background: var(--brand); transform: translateY(-1px); }
.btn-add:focus-visible { outline: 3px solid rgba(15, 159, 138, 0.35); outline-offset: 2px; }

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 4px;
}

.filters button {
  height: 34px;
  padding: 0 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font: inherit;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.filters button:hover { border-color: #c9d2dd; }

.filters button.is-active {
  background: var(--ink);
  border-color: var(--ink);
  color: #ffffff;
}

.task-list {
  display: grid;
  gap: 10px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.task {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 16px;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.task:hover { border-color: #cfd8e2; transform: translateY(-1px); }

.check {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.check input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.check .box {
  position: absolute;
  inset: 0;
  border: 2px solid #ccd5df;
  border-radius: 8px;
  background: #ffffff;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.check input:checked + .box {
  background: var(--brand);
  border-color: var(--brand);
}

.check input:checked + .box::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: 2px solid #ffffff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg);
}

.check input:focus-visible + .box {
  box-shadow: 0 0 0 3px var(--brand-soft);
}

.task-body { min-width: 0; }

.task-title {
  margin: 0;
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 4px 0 0;
  font-size: 0.72rem;
  color: var(--muted);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9aa6b2;
}

.dot.high { background: var(--warn); }
.dot.normal { background: #3b82f6; }
.dot.low { background: #2f9e73; }

.task.is-done { background: #f8fafc; }
.task.is-done .task-title { color: var(--muted); text-decoration: line-through; }

.icon-btn {
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: #8d99a6;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.icon-btn:hover { background: #ffebeb; color: #c2383f; }

.empty {
  margin: 18px 0 0;
  text-align: center;
  font-size: 0.84rem;
  color: var(--muted);
}

.app-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 0.74rem;
  color: var(--muted);
}

.link-btn {
  border: 0;
  background: none;
  color: var(--brand);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.link-btn:hover { text-decoration: underline; }

.task.is-skeleton {
  height: 66px;
  border-color: transparent;
  background: linear-gradient(90deg, #f2f5f8 25%, #e8eef4 37%, #f2f5f8 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  to { background-position: -135% 0; }
}

@media (max-width: 560px) {
  .app-head { flex-direction: column; align-items: flex-start; }
  .task-form { grid-template-columns: 1fr; }
  .btn-add { width: 100%; }
}`,
    js: `const API_BASE = "https://YOUR_PROJECT.mockapi.io/api/v1";
const TASKS_URL = API_BASE + "/tasks";

const els = {
  form: document.getElementById("taskForm"),
  input: document.getElementById("taskInput"),
  priority: document.getElementById("taskPriority"),
  list: document.getElementById("taskList"),
  filters: document.querySelector(".filters"),
  counter: document.getElementById("counter"),
  empty: document.getElementById("emptyState"),
  loadState: document.getElementById("loadState"),
  reload: document.getElementById("reloadBtn")
};

const state = {
  tasks: [],
  filter: "all",
  loading: false
};

const PRIORITY_LABEL = {
  low: "Ưu tiên thấp",
  normal: "Bình thường",
  high: "Ưu tiên cao"
};

function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Chưa rõ ngày";
  return date.toLocaleDateString("vi-VN");
}

function taskHTML(task) {
  const done = Boolean(task.done);
  const priority = PRIORITY_LABEL[task.priority] || PRIORITY_LABEL.normal;
  return '<li class="task' + (done ? " is-done" : "") + '" data-id="' + escapeHTML(task.id) + '">' +
    '<label class="check">' +
      '<input type="checkbox" data-action="toggle"' + (done ? " checked" : "") + ' aria-label="Đánh dấu xong">' +
      '<span class="box" aria-hidden="true"></span>' +
    '</label>' +
    '<div class="task-body">' +
      '<p class="task-title">' + escapeHTML(task.title) + '</p>' +
      '<p class="task-meta"><span class="dot ' + escapeHTML(task.priority) + '"></span> ' +
        priority + ' · ' + formatDate(task.createdAt) +
      '</p>' +
    '</div>' +
    '<button class="icon-btn" type="button" data-action="delete" aria-label="Xoá việc">' +
      '<span aria-hidden="true">×</span>' +
    '</button>' +
  '</li>';
}

function visibleTasks() {
  if (state.filter === "active") return state.tasks.filter(function (task) { return !task.done; });
  if (state.filter === "done") return state.tasks.filter(function (task) { return task.done; });
  return state.tasks;
}

function updateSummary() {
  const active = state.tasks.filter(function (task) { return !task.done; }).length;
  els.counter.textContent = active + " việc chưa xong";
}

function render() {
  const tasks = visibleTasks();
  els.list.innerHTML = tasks.map(taskHTML).join("");
  els.empty.hidden = tasks.length > 0;
  updateSummary();
}

function showSkeleton() {
  let rows = "";
  for (let i = 0; i < 3; i += 1) {
    rows += '<li class="task is-skeleton" aria-hidden="true"></li>';
  }
  els.list.innerHTML = rows;
  els.empty.hidden = true;
  els.loadState.textContent = "Đang tải dữ liệu từ MockAPI…";
}

async function loadTasks() {
  state.loading = true;
  showSkeleton();
  try {
    const response = await fetch(TASKS_URL);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const tasks = await response.json();
    state.tasks = tasks.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    els.loadState.textContent = "Đã tải " + tasks.length + " việc từ MockAPI.";
  } catch (error) {
    state.tasks = [];
    els.loadState.textContent = "Lỗi tải dữ liệu: " + error.message;
  } finally {
    state.loading = false;
    render();
  }
}

async function addTask(title, priority) {
  const task = {
    title: title,
    priority: priority,
    done: false,
    createdAt: new Date().toISOString()
  };
  els.loadState.textContent = "Đang thêm việc…";
  try {
    const response = await fetch(TASKS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const created = await response.json();
    state.tasks.unshift(created);
    render();
    els.loadState.textContent = "Đã thêm việc mới.";
  } catch (error) {
    els.loadState.textContent = "Chưa thêm được việc: " + error.message;
  }
}

async function toggleTask(id, done) {
  const task = state.tasks.filter(function (item) { return String(item.id) === String(id); })[0];
  if (!task) return;
  const previous = task.done;
  task.done = done;
  render();
  try {
    const response = await fetch(TASKS_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: done })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    els.loadState.textContent = done ? "Đã đánh dấu xong." : "Đã mở lại việc.";
  } catch (error) {
    task.done = previous;
    render();
    els.loadState.textContent = "Chưa cập nhật được: " + error.message;
  }
}

async function removeTask(id) {
  const before = state.tasks.slice();
  state.tasks = state.tasks.filter(function (task) { return String(task.id) !== String(id); });
  render();
  try {
    const response = await fetch(TASKS_URL + "/" + id, { method: "DELETE" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    els.loadState.textContent = "Đã xoá việc.";
  } catch (error) {
    state.tasks = before;
    render();
    els.loadState.textContent = "Chưa xoá được: " + error.message;
  }
}

els.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = els.input.value.trim();
  if (!title) return;
  addTask(title, els.priority.value);
  els.form.reset();
  els.input.focus();
});

els.filters.addEventListener("click", function (event) {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  Array.from(els.filters.querySelectorAll("button")).forEach(function (item) {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  render();
});

els.list.addEventListener("change", function (event) {
  const checkbox = event.target.closest('[data-action="toggle"]');
  if (!checkbox) return;
  const item = checkbox.closest(".task");
  toggleTask(item.dataset.id, checkbox.checked);
});

els.list.addEventListener("click", function (event) {
  const button = event.target.closest('[data-action="delete"]');
  if (!button) return;
  const item = button.closest(".task");
  removeTask(item.dataset.id);
});

els.reload.addEventListener("click", loadTasks);
loadTasks();`,
    mock: `(function () {
  var tasks = [
    { id: "1", title: "Chốt cây bố cục với nhóm", priority: "high", done: false, createdAt: "2026-11-24T08:00:00.000Z" },
    { id: "2", title: "Viết HTML khung thẻ hồ sơ", priority: "normal", done: true, createdAt: "2026-11-23T09:30:00.000Z" },
    { id: "3", title: "Tạo resource trên MockAPI", priority: "normal", done: false, createdAt: "2026-11-23T02:10:00.000Z" },
    { id: "4", title: "Kiểm tra bàn phím và màn hình hẹp", priority: "low", done: false, createdAt: "2026-11-22T14:20:00.000Z" }
  ];
  var nextId = 5;
  var realFetch = window.fetch;

  function parseBody(options) {
    try { return JSON.parse(options.body || "{}"); }
    catch (error) { return {}; }
  }

  function json(data, status) {
    return new Response(JSON.stringify(data), {
      status: status || 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  window.fetch = function (url, options) {
    var request = String(url);
    var method = (options && options.method) || "GET";
    if (request.indexOf("/tasks") === -1) {
      return realFetch.apply(window, arguments);
    }
    var match = request.match(/\\/tasks\\/([^/?]+)/);
    var id = match ? match[1] : null;
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (method === "GET") { resolve(json(tasks)); return; }
        if (method === "POST") {
          var created = Object.assign({ id: String(nextId) }, parseBody(options));
          nextId += 1;
          tasks.unshift(created);
          resolve(json(created, 201));
          return;
        }
        var found = tasks.filter(function (task) { return String(task.id) === id; })[0];
        if (!found) { resolve(new Response("Not found", { status: 404 })); return; }
        if (method === "PATCH" || method === "PUT") {
          Object.assign(found, parseBody(options));
          resolve(json(found));
          return;
        }
        if (method === "DELETE") {
          tasks = tasks.filter(function (task) { return String(task.id) !== id; });
          resolve(json({ id: id }));
          return;
        }
        resolve(new Response("Method not allowed", { status: 405 }));
      }, 350);
    });
  };
})();`
  },
  plan: {
    title: "Phân rã ứng dụng thành vùng cố định và vùng lặp",
    intro: "Ứng dụng này có hai loại vùng: khung cố định (đầu trang, form, bộ lọc, chân trang) và vùng lặp (mỗi công việc). Nhận diện đúng hai loại này thì HTML và JavaScript đều gọn.",
    mindset: [
      "Vùng cố định viết một lần trong HTML; vùng lặp do JavaScript sinh từ mảng.",
      "Bộ lọc là trạng thái giao diện, không phải dữ liệu gửi lên máy chủ.",
      "Mỗi công việc cần đủ bốn thông tin: tiêu đề, ưu tiên, trạng thái, ngày tạo."
    ],
    tree: [
      { depth: 0, tag: "body", note: "nền và khoảng đệm toàn trang" },
      { depth: 1, tag: "main.page", note: "giới hạn bề rộng ứng dụng" },
      { depth: 2, tag: "section.app", note: "khung ứng dụng" },
      { depth: 3, tag: "header.app-head", note: "tiêu đề và bộ đếm" },
      { depth: 4, tag: "div", note: "nhãn, h1, mô tả" },
      { depth: 4, tag: "p.counter", note: "số việc chưa xong" },
      { depth: 3, tag: "form.task-form", note: "vùng nhập liệu cố định" },
      { depth: 4, tag: "input#taskInput", note: "tiêu đề việc" },
      { depth: 4, tag: "select#taskPriority", note: "mức ưu tiên" },
      { depth: 4, tag: "button.btn-add", note: "gửi form, gọi POST" },
      { depth: 3, tag: "nav.filters", note: "ba nút lọc cục bộ" },
      { depth: 3, tag: "ul#taskList", note: "vùng lặp, mỗi việc một li.task" },
      { depth: 4, tag: "li.task", note: "checkbox, nội dung, nút xoá" },
      { depth: 5, tag: "label.check", note: "input ẩn và hộp vẽ bằng span" },
      { depth: 5, tag: "div.task-body", note: "tiêu đề và dòng phụ" },
      { depth: 5, tag: "button.icon-btn", note: "xoá việc, gọi DELETE" },
      { depth: 3, tag: "p#emptyState", note: "hiện khi danh sách trống" },
      { depth: 3, tag: "footer.app-foot", note: "trạng thái tải và nút tải lại" }
    ],
    questions: [
      {
        q: "Vùng nào lặp lại?",
        a: "Mỗi công việc là một li.task. HTML chỉ cần một mẫu tĩnh để nhìn thấy cấu trúc; JavaScript thay toàn bộ danh sách bằng dữ liệu thật."
      },
      {
        q: "Dữ liệu nào thuộc về MockAPI?",
        a: "title, priority, done và createdAt. Bộ lọc all/active/done chỉ nằm trong state của giao diện, không gửi lên server."
      },
      {
        q: "Thao tác nào ghi lên máy chủ?",
        a: "Thêm việc là POST, đổi trạng thái là PATCH, xoá là DELETE. Lọc và đếm chỉ đọc từ mảng đã tải."
      }
    ],
    order: [
      "Dựng khung ứng dụng và đầu trang trước.",
      "Đặt form nhập liệu với nhãn ẩn cho trình đọc màn hình.",
      "Thêm bộ lọc và một mẫu công việc tĩnh.",
      "Đặt chân trang với trạng thái tải và nút tải lại.",
      "Chuyển sang CSS theo thứ tự: nền, đầu trang, form, bộ lọc, hàng công việc, trạng thái.",
      "Tạo resource tasks rồi mới viết JavaScript CRUD."
    ]
  },
  html: {
    title: "Dựng HTML: khung trước, mẫu lặp sau",
    intro: "Viết khung ứng dụng trước, rồi mới đặt form, bộ lọc và mẫu công việc. Mẫu tĩnh này rất quan trọng: nó là bản vẽ để JavaScript sinh ra hàng loạt.",
    mindset: [
      "Đi từ ngoài vào: section.app, header, form, nav, danh sách, footer.",
      "Mỗi vùng cố định chỉ viết một lần; vùng lặp viết một mẫu.",
      "Nhãn của form phải tồn tại, kể cả khi bị ẩn bằng sr-only."
    ],
    steps: [
      {
        title: "Khung ứng dụng và đầu trang",
        why: "section.app là cha của mọi vùng. Header dùng flex sẵn hai khối: phần chữ và bộ đếm. Đặt bộ đếm ra ngoài div chữ để sau này đẩy sang phải bằng một thuộc tính.",
        code: `<main class="page">
  <section class="app" aria-labelledby="appTitle">
    <header class="app-head">
      <div>
        <p class="eyebrow">Danh sách công việc</p>
        <h1 id="appTitle">Việc hôm nay</h1>
        <p class="sub">Thêm việc, lọc theo trạng thái, đánh dấu xong và xoá.</p>
      </div>
      <p class="counter" id="counter">0 việc chưa xong</p>
    </header>
  </section>
</main>`
      },
      {
        title: "Form nhập việc",
        why: "Form là cha của ba phần tử điều khiển. Nhãn bị ẩn bằng sr-only nhưng vẫn liên kết với input qua thuộc tính for, nên trình đọc màn hình vẫn đọc đúng. Nút gửi có type=submit.",
        code: `<form class="task-form" id="taskForm">
  <label class="sr-only" for="taskInput">Tên công việc</label>
  <input id="taskInput" name="title" type="text" placeholder="Ví dụ: Hoàn thiện phần hero" autocomplete="off" maxlength="80" required>

  <label class="sr-only" for="taskPriority">Mức ưu tiên</label>
  <select id="taskPriority" name="priority">
    <option value="normal">Bình thường</option>
    <option value="high">Ưu tiên cao</option>
    <option value="low">Ưu tiên thấp</option>
  </select>

  <button class="btn-add" type="submit">Thêm việc</button>
</form>`
      },
      {
        title: "Bộ lọc và mẫu công việc",
        why: "Bộ lọc là nav với ba nút độc lập; trạng thái chọn nằm ở is-active và aria-pressed. Mỗi li.task chứa ba cột: checkbox, nội dung, nút xoá. Checkbox thật bị ẩn nhưng vẫn nhận bàn phím; hộp vuông chỉ là lớp vẽ.",
        code: `<nav class="filters" aria-label="Lọc công việc">
  <button type="button" class="is-active" data-filter="all" aria-pressed="true">Tất cả</button>
  <button type="button" data-filter="active" aria-pressed="false">Chưa xong</button>
  <button type="button" data-filter="done" aria-pressed="false">Đã xong</button>
</nav>

<ul class="task-list" id="taskList" aria-live="polite">
  <li class="task" data-id="demo">
    <label class="check">
      <input type="checkbox" aria-label="Đánh dấu xong">
      <span class="box" aria-hidden="true"></span>
    </label>
    <div class="task-body">
      <p class="task-title">Ví dụ: đọc yêu cầu dự án trước khi code</p>
      <p class="task-meta"><span class="dot high"></span> Ưu tiên cao · 24/11/2026</p>
    </div>
    <button class="icon-btn" type="button" aria-label="Xoá việc">
      <span aria-hidden="true">×</span>
    </button>
  </li>
</ul>`
      },
      {
        title: "Trạng thái trống và chân trang",
        why: "Vùng thông báo trống của danh sách và chân trang đặt sau danh sách để thứ tự đọc tự nhiên. Nút tải lại tách khỏi form nên không vô tình submit khi bấm.",
        code: `<p class="empty" id="emptyState" hidden>Chưa có việc nào ở mục này.</p>

<footer class="app-foot">
  <span id="loadState">Đang tải dữ liệu…</span>
  <button class="link-btn" id="reloadBtn" type="button">Tải lại</button>
</footer>`
      }
    ],
    rules: [
      "Dùng form thật thay vì div, để Enter trong input tự gửi.",
      "Mỗi nút chỉ làm một việc; nút phụ luôn có type=button.",
      "Thuộc tính aria-pressed phản ánh trạng thái lọc, không phải màu nền."
    ],
    check: [
      "Mỗi li.task có đúng ba cột con trực tiếp: label, div, button.",
      "Checkbox có nhãn đọc được; hộp vẽ có aria-hidden.",
      "Không có nút nào thiếu type trong form."
    ]
  },
  css: {
    title: "Tô CSS theo từng vùng, từ khung đến trạng thái",
    intro: "Làm theo đúng thứ tự đọc: nền, khung, đầu trang, form, bộ lọc, hàng công việc, trạng thái, màn hình hẹp. Mỗi bước chỉ chạm vào một nhóm lớp.",
    mindset: [
      "Khung và khoảng cách trước, màu sắc và hiệu ứng sau.",
      "Checkbox dùng input thật ẩn và span vẽ hộp; không bỏ input để giữ bàn phím.",
      "Trạng thái xong và trạng thái lọc đều phải nhìn thấy được, không chỉ bằng màu."
    ],
    steps: [
      {
        title: "Nền trang và khung ứng dụng",
        why: "Bắt đầu từ ngoài: nền, giới hạn bề rộng, khung trắng. Chưa đụng vào bên trong nên có thể kiểm tra khung đứng đúng vị trí.",
        props: [
          { name: "max-width: 720px + margin auto", effect: "ứng dụng rộng vừa đọc, tự căn giữa trên màn hình lớn." },
          { name: "border-radius: 28px", effect: "bo mềm khung, tách khỏi nền." },
          { name: "box-shadow", effect: "tạo khoảng nổi, giúp khung không dính vào nền." },
          { name: "padding: clamp(20px, 4vw, 34px)", effect: "khoảng đệm trong co giãn theo bề rộng." },
          { name: "radial-gradient hai lớp", effect: "nền có hai vùng sáng, tạo không gian thay vì một màu phẳng." }
        ],
        code: `:root {
  --bg: #eef1f5;
  --panel: #ffffff;
  --ink: #101d29;
  --muted: #61707e;
  --line: #e1e7ee;
  --brand: #0f9f8a;
  --brand-soft: #def6f0;
  --warn: #e4572e;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  padding: 28px 20px;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(900px 500px at 0% 0%, #e2f7f1, transparent 62%),
    radial-gradient(800px 460px at 100% 10%, #fdf0d8, transparent 58%),
    var(--bg);
}

.page {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.app {
  padding: clamp(20px, 4vw, 34px);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 26px 64px rgba(16, 29, 41, 0.12);
}`
      },
      {
        title: "Đầu trang và bộ đếm",
        why: "Dùng flex để đẩy bộ đếm sang phải. Bộ đếm là viên thuốc nhỏ, chữ đậm, không co lại khi tiêu đề dài.",
        props: [
          { name: "justify-content: space-between", effect: "đẩy hai khối về hai đầu hàng." },
          { name: "align-items: flex-end", effect: "đáy của bộ đếm thẳng với đáy khối chữ." },
          { name: "letter-spacing + text-transform", effect: "nhãn nhỏ tách khỏi tiêu đề." },
          { name: "white-space: nowrap trên .counter", effect: "bộ đếm không bị bẻ dòng." }
        ],
        code: `.app-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.eyebrow {
  margin: 0 0 5px;
  font-size: 0.67rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}

.app-head h1 {
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.sub {
  margin: 6px 0 0;
  font-size: 0.83rem;
  color: var(--muted);
}

.counter {
  margin: 0;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--brand-soft);
  color: #0a7d6c;
  font-size: 0.76rem;
  font-weight: 700;
  white-space: nowrap;
}`
      },
      {
        title: "Form nhập việc",
        why: "Lưới ba cột cho input co giãn, select cố định và nút ôm nội dung. Viền focus dùng box-shadow để không làm nhảy bố cục như border dày.",
        props: [
          { name: "grid-template-columns: 1fr 150px auto", effect: "ô nhập chiếm phần lớn, select đủ rộng, nút vừa chữ." },
          { name: "height: 46px chung", effect: "ba điều khiển cao bằng nhau, hàng thẳng." },
          { name: "box-shadow focus", effect: "viền sáng lan ra ngoài, không đẩy các phần tử bên cạnh." },
          { name: "min-width: 0 trên input", effect: "input được co lại trong lưới thay vì tràn." }
        ],
        code: `.task-form {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px auto;
  gap: 10px;
  margin-top: 24px;
}

.task-form input,
.task-form select {
  height: 46px;
  min-width: 0;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #ffffff;
  color: var(--ink);
  font: inherit;
  font-size: 0.86rem;
}

.task-form input::placeholder { color: #96a2ae; }

.task-form input:focus,
.task-form select:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-soft);
}

.btn-add {
  height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: 12px;
  background: var(--ink);
  color: #ffffff;
  font: inherit;
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}

.btn-add:hover { background: var(--brand); transform: translateY(-1px); }
.btn-add:focus-visible { outline: 3px solid rgba(15, 159, 138, 0.35); outline-offset: 2px; }`
      },
      {
        title: "Bộ lọc và hàng công việc",
        why: "Hàng công việc là lưới ba cột auto, 1fr, auto. Checkbox thật phủ kín label nhưng trong suốt; span.box vẽ hình. Mọi trạng thái chọn dùng chung is-active để JavaScript chỉ đổi một class.",
        props: [
          { name: "flex-wrap trên .filters", effect: "các nút tự xuống hàng khi hẹp." },
          { name: "grid-template-columns: auto 1fr auto", effect: "checkbox và nút xoá ôm nội dung, phần chữ co giãn." },
          { name: "position: absolute cho input", effect: "checkbox thật phủ lên hộp vẽ để bấm đâu cũng ăn." },
          { name: "opacity: 0 nhưng giữ kích thước", effect: "vẫn nhận bàn phím và trình đọc màn hình." },
          { name: "input:checked + .box", effect: "đổi màu hộp ngay sau khi chọn." },
          { name: "::after tạo dấu kiểm", effect: "vẽ dấu kiểm bằng hai cạnh border xoay 45 độ." }
        ],
        code: `.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 4px;
}

.filters button {
  height: 34px;
  padding: 0 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font: inherit;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.filters button:hover { border-color: #c9d2dd; }

.filters button.is-active {
  background: var(--ink);
  border-color: var(--ink);
  color: #ffffff;
}

.task-list {
  display: grid;
  gap: 10px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.task {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 16px;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.task:hover { border-color: #cfd8e2; transform: translateY(-1px); }

.check {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.check input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.check .box {
  position: absolute;
  inset: 0;
  border: 2px solid #ccd5df;
  border-radius: 8px;
  background: #ffffff;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.check input:checked + .box {
  background: var(--brand);
  border-color: var(--brand);
}

.check input:checked + .box::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: 2px solid #ffffff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg);
}

.check input:focus-visible + .box {
  box-shadow: 0 0 0 3px var(--brand-soft);
}`
      },
      {
        title: "Chữ, trạng thái và màn hình hẹp",
        why: "Phần chữ cần co giãn và ngắt từ dài. Trạng thái xong giảm tương phản và gạch ngang để không chỉ dựa vào dấu kiểm. Bước cuối gom mọi thứ về một cột trên điện thoại.",
        props: [
          { name: "overflow-wrap: anywhere", effect: "tiêu đề dài không đẩy nút xoá ra ngoài." },
          { name: "text-decoration: line-through", effect: "trạng thái xong nhìn thấy ngay cả khi không nhìn màu." },
          { name: "flex chân trang", effect: "trạng thái tải bên trái, nút tải lại bên phải." },
          { name: "@media 560px: lưới form 1 cột", effect: "điện thoại có ba hàng điều khiển rộng rãi." },
          { name: "animation shimmer", effect: "khung xương chuyển sáng, báo hiệu đang tải." }
        ],
        code: `.task-body { min-width: 0; }

.task-title {
  margin: 0;
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 4px 0 0;
  font-size: 0.72rem;
  color: var(--muted);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9aa6b2;
}

.dot.high { background: var(--warn); }
.dot.normal { background: #3b82f6; }
.dot.low { background: #2f9e73; }

.task.is-done { background: #f8fafc; }
.task.is-done .task-title { color: var(--muted); text-decoration: line-through; }

.icon-btn {
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: #8d99a6;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.icon-btn:hover { background: #ffebeb; color: #c2383f; }

.empty {
  margin: 18px 0 0;
  text-align: center;
  font-size: 0.84rem;
  color: var(--muted);
}

.app-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 0.74rem;
  color: var(--muted);
}

.link-btn {
  border: 0;
  background: none;
  color: var(--brand);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.link-btn:hover { text-decoration: underline; }

.task.is-skeleton {
  height: 66px;
  border-color: transparent;
  background: linear-gradient(90deg, #f2f5f8 25%, #e8eef4 37%, #f2f5f8 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  to { background-position: -135% 0; }
}

@media (max-width: 560px) {
  .app-head { flex-direction: column; align-items: flex-start; }
  .task-form { grid-template-columns: 1fr; }
  .btn-add { width: 100%; }
}`
      }
    ],
    responsive: [
      "Ở 560px, form chuyển thành ba hàng và nút rộng hết khung.",
      "Tiêu đề 80 ký tự vẫn xuống dòng, nút xoá giữ nguyên vị trí."
    ],
    rules: [
      "Một class trạng thái cho mỗi ý nghĩa: is-active, is-done, is-skeleton.",
      "Không dùng màu làm tín hiệu duy nhất; luôn kèm chữ hoặc gạch ngang.",
      "Giữ kích thước vùng chạm tối thiểu 34px cho nút phụ."
    ]
  },
  api: {
    title: "Tạo resource tasks và bốn thao tác CRUD",
    intro: "Dự án này dùng đủ bốn phương thức HTTP. MockAPI trả về mảng cho GET và object cho POST, PATCH, DELETE, nên JavaScript phải xử lý đúng từng hình dạng.",
    setup: [
      { title: "Tạo project", detail: "Tạo project frontlab-tasks trên mockapi.io. Base URL có dạng https://<mã>.mockapi.io/api/v1." },
      { title: "Tạo resource tasks", detail: "Khai báo bốn trường: title (String), priority (String), done (Boolean), createdAt (String). Bật tuỳ chọn sinh id tự động." },
      { title: "Sinh dữ liệu", detail: "Bấm Generate vài lần để có 5 đến 8 công việc, sửa vài bản ghi thành trạng thái done khác nhau để thử bộ lọc." },
      { title: "Dán base URL", detail: "Thay YOUR_PROJECT trong API_BASE. Chỉ dùng dữ liệu giả vì resource công khai." }
    ],
    endpoints: [
      { method: "GET", path: "/tasks", desc: "Tải toàn bộ danh sách", result: "200 + array" },
      { method: "POST", path: "/tasks", desc: "Thêm một công việc mới", result: "201 + object" },
      { method: "PATCH", path: "/tasks/:id", desc: "Chỉ đổi trường done", result: "200 + object" },
      { method: "DELETE", path: "/tasks/:id", desc: "Xoá một công việc", result: "200 + object" }
    ],
    sample: {
      id: "1",
      title: "Chốt cây bố cục với nhóm",
      priority: "high",
      done: false,
      createdAt: "2026-11-24T08:00:00.000Z"
    },
    rules: [
      "POST phải gửi header Content-Type: application/json và body JSON.stringify.",
      "Sau DELETE, mảng trên máy chủ đã đổi; nếu không tải lại, giao diện và máy chủ có thể lệch.",
      "createdAt nên là chuỗi ISO để new Date đọc được trên mọi trình duyệt."
    ],
    mockNote: "Khung xem trước chặn fetch và giữ một mảng tasks trong bộ nhớ. Thêm, sửa, xoá đều có tác dụng thật trong khung; tải lại trang là dữ liệu trở về mặc định."
  },
  js: {
    title: "Một mảng trạng thái, một hàm render",
    intro: "Mọi thay đổi đi qua ba bước: cập nhật state.tasks, gọi render, rồi ghi lên MockAPI. Nhờ vậy giao diện không bao giờ tự sửa DOM rải rác.",
    mindset: [
      "state.tasks là nguồn sự thật duy nhất; bộ lọc chỉ quyết định nhìn thấy phần nào.",
      "Render sinh toàn bộ danh sách từ mảng, không sửa từng li.",
      "Mọi chuỗi do người dùng nhập phải escape trước khi đưa vào innerHTML."
    ],
    steps: [
      {
        title: "Chọn phần tử, khai báo trạng thái và hàm phụ",
        why: "els gom mọi truy vấn DOM. PRIORITY_LABEL tách nhãn tiếng Việt khỏi mã dữ liệu. escapeHTML là hàng rào chống chèn thẻ khi người dùng nhập ký tự đặc biệt.",
        code: `const API_BASE = "https://YOUR_PROJECT.mockapi.io/api/v1";
const TASKS_URL = API_BASE + "/tasks";

const els = {
  form: document.getElementById("taskForm"),
  input: document.getElementById("taskInput"),
  priority: document.getElementById("taskPriority"),
  list: document.getElementById("taskList"),
  filters: document.querySelector(".filters"),
  counter: document.getElementById("counter"),
  empty: document.getElementById("emptyState"),
  loadState: document.getElementById("loadState"),
  reload: document.getElementById("reloadBtn")
};

const state = {
  tasks: [],
  filter: "all",
  loading: false
};

const PRIORITY_LABEL = {
  low: "Ưu tiên thấp",
  normal: "Bình thường",
  high: "Ưu tiên cao"
};

function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Chưa rõ ngày";
  return date.toLocaleDateString("vi-VN");
}`
      },
      {
        title: "Tải danh sách và trạng thái khung xương",
        why: "Hiện ba hàng xương khi chờ mạng để bố cục không nhảy. Sắp xếp theo ngày tạo giảm dần để việc mới nằm trên. finally bảo đảm render luôn chạy dù thành công hay lỗi.",
        code: `function showSkeleton() {
  let rows = "";
  for (let i = 0; i < 3; i += 1) {
    rows += '<li class="task is-skeleton" aria-hidden="true"></li>';
  }
  els.list.innerHTML = rows;
  els.empty.hidden = true;
  els.loadState.textContent = "Đang tải dữ liệu từ MockAPI…";
}

async function loadTasks() {
  state.loading = true;
  showSkeleton();
  try {
    const response = await fetch(TASKS_URL);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const tasks = await response.json();
    state.tasks = tasks.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    els.loadState.textContent = "Đã tải " + tasks.length + " việc từ MockAPI.";
  } catch (error) {
    state.tasks = [];
    els.loadState.textContent = "Lỗi tải dữ liệu: " + error.message;
  } finally {
    state.loading = false;
    render();
  }
}`
      },
      {
        title: "Render, lọc và đếm",
        why: "visibleTasks chỉ đọc, không sửa mảng gốc. taskHTML ghép chuỗi có escape. Render thay toàn bộ innerHTML một lần, đơn giản và đủ nhanh với danh sách nhỏ.",
        code: `function taskHTML(task) {
  const done = Boolean(task.done);
  const priority = PRIORITY_LABEL[task.priority] || PRIORITY_LABEL.normal;
  return '<li class="task' + (done ? " is-done" : "") + '" data-id="' + escapeHTML(task.id) + '">' +
    '<label class="check">' +
      '<input type="checkbox" data-action="toggle"' + (done ? " checked" : "") + ' aria-label="Đánh dấu xong">' +
      '<span class="box" aria-hidden="true"></span>' +
    '</label>' +
    '<div class="task-body">' +
      '<p class="task-title">' + escapeHTML(task.title) + '</p>' +
      '<p class="task-meta"><span class="dot ' + escapeHTML(task.priority) + '"></span> ' +
        priority + ' · ' + formatDate(task.createdAt) +
      '</p>' +
    '</div>' +
    '<button class="icon-btn" type="button" data-action="delete" aria-label="Xoá việc">' +
      '<span aria-hidden="true">×</span>' +
    '</button>' +
  '</li>';
}

function visibleTasks() {
  if (state.filter === "active") return state.tasks.filter(function (task) { return !task.done; });
  if (state.filter === "done") return state.tasks.filter(function (task) { return task.done; });
  return state.tasks;
}

function updateSummary() {
  const active = state.tasks.filter(function (task) { return !task.done; }).length;
  els.counter.textContent = active + " việc chưa xong";
}

function render() {
  const tasks = visibleTasks();
  els.list.innerHTML = tasks.map(taskHTML).join("");
  els.empty.hidden = tasks.length > 0;
  updateSummary();
}`
      },
      {
        title: "Thêm việc bằng POST",
        why: "Tạo object đủ trường trước khi gửi. Server trả về bản ghi có id; unshift vào đầu mảng để thấy ngay. Chỉ xoá form sau khi chuẩn bị xong dữ liệu.",
        code: `async function addTask(title, priority) {
  const task = {
    title: title,
    priority: priority,
    done: false,
    createdAt: new Date().toISOString()
  };
  els.loadState.textContent = "Đang thêm việc…";
  try {
    const response = await fetch(TASKS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const created = await response.json();
    state.tasks.unshift(created);
    render();
    els.loadState.textContent = "Đã thêm việc mới.";
  } catch (error) {
    els.loadState.textContent = "Chưa thêm được việc: " + error.message;
  }
}

els.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = els.input.value.trim();
  if (!title) return;
  addTask(title, els.priority.value);
  els.form.reset();
  els.input.focus();
});`
      },
      {
        title: "Đổi trạng thái, xoá và gắn sự kiện",
        why: "Cập nhật giao diện trước rồi mới gọi máy chủ để cảm giác tức thì; nếu lỗi thì hoàn nguyên. Event delegation trên ul chỉ cần hai listener cho mọi hàng hiện tại và tương lai.",
        code: `async function toggleTask(id, done) {
  const task = state.tasks.filter(function (item) { return String(item.id) === String(id); })[0];
  if (!task) return;
  const previous = task.done;
  task.done = done;
  render();
  try {
    const response = await fetch(TASKS_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: done })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    els.loadState.textContent = done ? "Đã đánh dấu xong." : "Đã mở lại việc.";
  } catch (error) {
    task.done = previous;
    render();
    els.loadState.textContent = "Chưa cập nhật được: " + error.message;
  }
}

async function removeTask(id) {
  const before = state.tasks.slice();
  state.tasks = state.tasks.filter(function (task) { return String(task.id) !== String(id); });
  render();
  try {
    const response = await fetch(TASKS_URL + "/" + id, { method: "DELETE" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    els.loadState.textContent = "Đã xoá việc.";
  } catch (error) {
    state.tasks = before;
    render();
    els.loadState.textContent = "Chưa xoá được: " + error.message;
  }
}

els.filters.addEventListener("click", function (event) {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  Array.from(els.filters.querySelectorAll("button")).forEach(function (item) {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  render();
});

els.list.addEventListener("change", function (event) {
  const checkbox = event.target.closest('[data-action="toggle"]');
  if (!checkbox) return;
  const item = checkbox.closest(".task");
  toggleTask(item.dataset.id, checkbox.checked);
});

els.list.addEventListener("click", function (event) {
  const button = event.target.closest('[data-action="delete"]');
  if (!button) return;
  const item = button.closest(".task");
  removeTask(item.dataset.id);
});

els.reload.addEventListener("click", loadTasks);
loadTasks();`
      }
    ],
    tests: [
      "Thêm việc có ký tự <b> và dấu nháy: phải hiện nguyên văn, không tạo thẻ.",
      "Lọc Chưa xong: bộ đếm giữ nguyên, danh sách chỉ còn việc chưa xong.",
      "Đánh dấu xong rồi tải lại trang: trạng thái vẫn đúng nếu đang dùng MockAPI thật.",
      "Xoá việc cuối cùng: hiện thông báo trống thay vì khung rỗng."
    ],
    rules: [
      "Không sửa DOM trực tiếp ngoài hàm render.",
      "Mọi id từ dữ liệu phải so sánh dạng chuỗi.",
      "Đặt trạng thái lỗi ở chân trang để người dùng biết thao tác có lưu được hay không."
    ]
  },
  done: {
    title: "Kiểm tra và mở rộng",
    intro: "Danh sách công việc là bài luyện CRUD gọn nhất. Hãy kiểm tra cả bốn thao tác, rồi chọn một hướng mở rộng để làm quen với dữ liệu lớn hơn.",
    checklist: [
      "Thêm, sửa trạng thái, xoá đều phản ánh lên dashboard MockAPI.",
      "Lọc ba trạng thái không làm mất dữ liệu gốc; bộ đếm vẫn chính xác.",
      "Nhập <script> vào tiêu đề không tạo thẻ mới và không làm hỏng giao diện.",
      "Mất mạng khi tải: chân trang báo lỗi, không để khung xương chạy mãi.",
      "Bàn phím: Tab qua checkbox và nút xoá, Space đổi trạng thái.",
      "Ở 390px, form, bộ lọc và từng hàng việc không tràn ngang."
    ],
    extend: [
      "Thêm ô tìm kiếm theo tiêu đề, vẫn lọc trên mảng đã tải.",
      "Thêm nút Xoá tất cả việc đã xong bằng nhiều lời gọi DELETE.",
      "Lưu bộ lọc đang chọn vào localStorage để mở lại vẫn đúng.",
      "Thêm hạn chót (dueDate) và tô đỏ việc quá hạn."
    ],
    mistakes: [
      { title: "Quên escape tiêu đề", fix: "Người dùng có thể nhập thẻ HTML; luôn escape trước khi ghép vào innerHTML." },
      { title: "So sánh id bằng ===", fix: "MockAPI có thể trả id dạng số hoặc chuỗi; đổi cả hai về String trước khi so sánh." },
      { title: "Render rồi mới lưu state", fix: "Cập nhật state trước, gọi render sau; nếu lỗi thì hoàn nguyên state rồi render lại." }
    ]
  }
});
