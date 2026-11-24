/* FrontLab — dự án 03: bảng đơn hàng */
window.FRONTLAB_PROJECTS = window.FRONTLAB_PROJECTS || [];
window.FRONTLAB_PROJECTS.push({
  id: "order-dashboard",
  num: 3,
  title: "Bảng đơn hàng vận hành",
  short: "Bảng đơn hàng",
  level: "Nâng cao",
  tone: "violet",
  minutes: 120,
  thumb: "dashboard",
  blurb: "Bảng điều khiển thu nhỏ: chỉ số nhanh, tìm kiếm, lọc trạng thái, phân trang và đổi trạng thái đơn ngay trên bảng.",
  tags: ["Grid hai cột", "Bảng dữ liệu", "Tìm kiếm", "PATCH"],
  skills: ["Layout ứng dụng", "Trạng thái phái sinh", "Phân trang", "Cập nhật lạc quan"],
  goal: "Dựng một bảng vận hành có sidebar, chỉ số, bảng đơn và bộ lọc; dữ liệu tải một lần từ MockAPI, các thao tác lọc và phân trang chạy cục bộ, đổi trạng thái ghi ngược lên máy chủ.",
  outcomes: [
    "Tổ chức được layout ứng dụng hai cột co giãn về một cột trên màn hình hẹp.",
    "Tách chỉ số phái sinh (doanh thu, đang giao) khỏi dữ liệu gốc.",
    "Kết hợp tìm kiếm, lọc và phân trang mà không làm mất trạng thái."
  ],
  files: {
    html: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bảng đơn hàng</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="shell">
    <aside class="side">
      <a class="brand" href="#don-hang">
        <span class="brand-mark">OD</span>
        <span class="brand-name">Order Desk</span>
      </a>
      <nav class="side-nav" aria-label="Khu vực làm việc">
        <a class="nav-item is-active" href="#don-hang" aria-current="page">Đơn hàng</a>
        <a class="nav-item" href="#khach-hang">Khách hàng</a>
        <a class="nav-item" href="#bao-cao">Báo cáo</a>
      </nav>
      <p class="side-note">Dự án mẫu FrontLab<br>Dữ liệu: MockAPI</p>
    </aside>

    <main class="main">
      <header class="topbar">
        <div>
          <p class="eyebrow">Vận hành</p>
          <h1>Đơn hàng hôm nay</h1>
        </div>
        <div class="top-actions">
          <label class="search">
            <span class="sr-only">Tìm đơn hàng</span>
            <input id="searchInput" type="search" placeholder="Tìm khách hàng hoặc mã đơn" autocomplete="off">
          </label>
          <button class="btn-refresh" id="refreshBtn" type="button">Tải lại</button>
        </div>
      </header>

      <section class="kpis" aria-label="Chỉ số nhanh">
        <article class="kpi">
          <p class="kpi-label">Tổng đơn</p>
          <p class="kpi-value" id="kpiTotal">—</p>
          <p class="kpi-note">trong 30 ngày</p>
        </article>
        <article class="kpi">
          <p class="kpi-label">Doanh thu</p>
          <p class="kpi-value" id="kpiRevenue">—</p>
          <p class="kpi-note">chỉ tính đơn hoàn tất</p>
        </article>
        <article class="kpi">
          <p class="kpi-label">Đang giao</p>
          <p class="kpi-value" id="kpiShipping">—</p>
          <p class="kpi-note">cần theo dõi</p>
        </article>
      </section>

      <section class="panel" aria-labelledby="tableTitle">
        <header class="panel-head">
          <div>
            <h2 id="tableTitle">Danh sách đơn</h2>
            <p class="panel-sub" id="resultCount">Đang tải dữ liệu…</p>
          </div>
          <label class="filter">
            <span class="sr-only">Lọc trạng thái</span>
            <select id="statusFilter">
              <option value="all">Mọi trạng thái</option>
              <option value="pending">Chờ xử lý</option>
              <option value="shipping">Đang giao</option>
              <option value="done">Hoàn tất</option>
              <option value="cancelled">Đã huỷ</option>
            </select>
          </label>
        </header>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Ngày</th>
                <th scope="col">Trạng thái</th>
                <th scope="col" class="num">Giá trị</th>
              </tr>
            </thead>
            <tbody id="orderBody">
              <tr><td colspan="5" class="table-empty">Đang tải đơn hàng…</td></tr>
            </tbody>
          </table>
        </div>

        <footer class="panel-foot">
          <p id="pageInfo">Trang 1 / 1</p>
          <div class="pager">
            <button id="prevBtn" type="button" disabled>Trước</button>
            <button id="nextBtn" type="button" disabled>Sau</button>
          </div>
        </footer>
      </section>

      <p class="toast" id="toast" role="status" aria-live="polite"></p>
    </main>
  </div>
  <script src="app.js" defer></script>
</body>
</html>`,
    css: `:root {
  --bg: #eef1f5;
  --panel: #ffffff;
  --ink: #0f1d2a;
  --muted: #647280;
  --line: #e3e8ee;
  --brand: #0f9f8a;
  --brand-soft: #e0f6f1;
  --nav: #0c1a27;
  --nav-muted: #93a6b8;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background: var(--bg);
}

.shell {
  display: grid;
  grid-template-columns: 232px minmax(0, 1fr);
  min-height: 100vh;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 26px 20px;
  background: linear-gradient(180deg, #0d1c2a, #0a1621);
  color: #eaf2f8;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
  font-weight: 800;
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: var(--brand);
  color: #06251f;
  font-size: 0.76rem;
  letter-spacing: 0.02em;
}

.brand-name { font-size: 1rem; letter-spacing: -0.02em; }

.side-nav { display: grid; gap: 4px; }

.nav-item {
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--nav-muted);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-item:hover { background: rgba(255, 255, 255, 0.06); color: #ffffff; }

.nav-item.is-active {
  background: rgba(15, 159, 138, 0.18);
  color: #8ff0dd;
}

.side-note {
  margin-top: auto;
  font-size: 0.68rem;
  line-height: 1.6;
  color: #6f8598;
}

.main {
  min-width: 0;
  padding: 26px 30px 44px;
}

.topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
}

.eyebrow {
  margin: 0 0 5px;
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search { display: block; }

.search input {
  width: min(320px, 32vw);
  height: 42px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: var(--panel);
  color: var(--ink);
  font: inherit;
  font-size: 0.82rem;
}

.search input:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-soft);
}

.btn-refresh {
  height: 42px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: var(--panel);
  color: var(--ink);
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-refresh:hover { border-color: #c9d2dd; background: #f8fafb; }

.kpis {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 22px;
}

.kpi {
  padding: 16px 18px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(15, 29, 42, 0.04);
}

.kpi-label {
  margin: 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--muted);
  font-weight: 700;
}

.kpi-value {
  margin: 8px 0 0;
  font-size: clamp(1.3rem, 2.6vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.kpi-note {
  margin: 4px 0 0;
  font-size: 0.7rem;
  color: var(--muted);
}

.panel {
  margin-top: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
}

.panel-head h2 {
  margin: 0;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.panel-sub {
  margin: 3px 0 0;
  font-size: 0.72rem;
  color: var(--muted);
}

.filter select {
  height: 36px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #ffffff;
  color: var(--ink);
  font: inherit;
  font-size: 0.76rem;
}

.filter select:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-soft);
}

.table-wrap { overflow-x: auto; }

table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
}

thead th {
  padding: 10px 16px;
  background: #f7f9fb;
  border-bottom: 1px solid var(--line);
  text-align: left;
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

tbody td {
  padding: 12px 16px;
  border-bottom: 1px solid #eef2f6;
  font-size: 0.82rem;
  vertical-align: middle;
}

tbody tr:last-child td { border-bottom: 0; }
tbody tr:hover { background: #f9fbfc; }

.num { text-align: right; }

.order-code {
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 0.75rem;
  color: var(--muted);
}

.customer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cust-avatar {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--brand-soft);
  color: #0a7d6c;
  font-size: 0.68rem;
  font-weight: 800;
  flex: none;
}

.customer b { display: block; font-size: 0.82rem; font-weight: 700; }

.customer small {
  display: block;
  margin-top: 2px;
  font-size: 0.68rem;
  color: var(--muted);
}

.status-select {
  border: 0;
  border-radius: 999px;
  padding: 6px 10px;
  font: inherit;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
}

.is-pending { background: #fff4d6; color: #8a5b00; }
.is-shipping { background: #e2efff; color: #1a5fae; }
.is-done { background: #e1f7ec; color: #0a7d50; }
.is-cancelled { background: #ffe7e8; color: #a72b31; }

.table-empty {
  padding: 30px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 0.82rem;
}

.panel-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px;
  border-top: 1px solid var(--line);
  font-size: 0.74rem;
  color: var(--muted);
}

.pager { display: flex; gap: 8px; }

.pager button {
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #ffffff;
  color: var(--ink);
  font: inherit;
  font-size: 0.74rem;
  font-weight: 600;
  cursor: pointer;
}

.pager button:hover { border-color: #c9d2dd; }
.pager button:disabled { opacity: 0.4; pointer-events: none; }

.toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  margin: 0;
  padding: 10px 14px;
  border-radius: 10px;
  background: #0f1d2a;
  color: #ffffff;
  font-size: 0.78rem;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}

.toast.is-show { opacity: 1; transform: none; }
.toast.is-error { background: #a72b31; }

.skeleton-row td { padding: 12px 16px; }

.sk-line {
  display: block;
  height: 14px;
  border-radius: 6px;
  background: linear-gradient(90deg, #f0f4f7 25%, #e5ecf2 37%, #f0f4f7 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  to { background-position: -135% 0; }
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

@media (max-width: 960px) {
  .shell { grid-template-columns: 1fr; }
  .side {
    flex-direction: row;
    align-items: center;
    gap: 18px;
    padding: 12px 18px;
    overflow-x: auto;
  }
  .side-nav { display: flex; gap: 2px; }
  .nav-item { white-space: nowrap; }
  .side-note { display: none; }
  .main { padding: 20px 18px 36px; }
}

@media (max-width: 640px) {
  .topbar { flex-direction: column; align-items: stretch; }
  .top-actions { width: 100%; }
  .search { flex: 1; }
  .search input { width: 100%; }
  .kpis { grid-template-columns: 1fr; }
  .panel-head { flex-direction: column; align-items: flex-start; }
  .filter, .filter select { width: 100%; }
}`,
    js: `const API_BASE = "https://YOUR_PROJECT.mockapi.io/api/v1";
const ORDERS_URL = API_BASE + "/orders";
const PAGE_SIZE = 5;

const STATUS_LABEL = {
  pending: "Chờ xử lý",
  shipping: "Đang giao",
  done: "Hoàn tất",
  cancelled: "Đã huỷ"
};

const els = {
  search: document.getElementById("searchInput"),
  filter: document.getElementById("statusFilter"),
  body: document.getElementById("orderBody"),
  resultCount: document.getElementById("resultCount"),
  pageInfo: document.getElementById("pageInfo"),
  prev: document.getElementById("prevBtn"),
  next: document.getElementById("nextBtn"),
  refresh: document.getElementById("refreshBtn"),
  toast: document.getElementById("toast"),
  kpiTotal: document.getElementById("kpiTotal"),
  kpiRevenue: document.getElementById("kpiRevenue"),
  kpiShipping: document.getElementById("kpiShipping")
};

const state = {
  orders: [],
  filter: "all",
  query: "",
  page: 1
};

const money = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0
});

function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function initials(name) {
  return String(name || "")
    .trim()
    .split(/\\s+/)
    .slice(-2)
    .map(function (word) { return word.charAt(0); })
    .join("")
    .toUpperCase();
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function formatMoney(value) {
  return money.format(Number(value || 0));
}

function statusOptions(current) {
  return Object.keys(STATUS_LABEL).map(function (key) {
    return '<option value="' + key + '"' + (key === current ? " selected" : "") + ">" +
      STATUS_LABEL[key] + "</option>";
  }).join("");
}

function filteredOrders() {
  const query = state.query.trim().toLowerCase();
  return state.orders.filter(function (order) {
    const matchStatus = state.filter === "all" || order.status === state.filter;
    const haystack = (order.code + " " + order.customer + " " + order.email).toLowerCase();
    const matchQuery = !query || haystack.indexOf(query) !== -1;
    return matchStatus && matchQuery;
  });
}

function rowHTML(order) {
  return '<tr data-id="' + escapeHTML(order.id) + '">' +
    '<td><code class="order-code">' + escapeHTML(order.code) + '</code></td>' +
    '<td><div class="customer">' +
      '<span class="cust-avatar" aria-hidden="true">' + initials(order.customer) + '</span>' +
      '<div><b>' + escapeHTML(order.customer) + '</b>' +
      '<small>' + escapeHTML(order.email) + '</small></div>' +
    '</div></td>' +
    '<td>' + formatDate(order.createdAt) + '</td>' +
    '<td><select class="status-select is-' + escapeHTML(order.status) + '" data-action="status" ' +
      'data-id="' + escapeHTML(order.id) + '" aria-label="Đổi trạng thái đơn ' + escapeHTML(order.code) + '">' +
      statusOptions(order.status) +
    '</select></td>' +
    '<td class="num">' + formatMoney(order.amount) + '</td>' +
  '</tr>';
}

function renderKpis() {
  const total = state.orders.length;
  const revenue = state.orders
    .filter(function (order) { return order.status === "done"; })
    .reduce(function (sum, order) { return sum + Number(order.amount || 0); }, 0);
  const shipping = state.orders.filter(function (order) { return order.status === "shipping"; }).length;
  els.kpiTotal.textContent = total.toLocaleString("vi-VN");
  els.kpiRevenue.textContent = formatMoney(revenue);
  els.kpiShipping.textContent = shipping.toLocaleString("vi-VN");
}

function render() {
  const list = filteredOrders();
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  state.page = Math.min(state.page, pages);
  const start = (state.page - 1) * PAGE_SIZE;
  const rows = list.slice(start, start + PAGE_SIZE);

  els.body.innerHTML = rows.length
    ? rows.map(rowHTML).join("")
    : '<tr><td colspan="5" class="table-empty">Không có đơn phù hợp với bộ lọc.</td></tr>';
  els.resultCount.textContent = list.length + " / " + state.orders.length + " đơn";
  els.pageInfo.textContent = "Trang " + state.page + " / " + pages;
  els.prev.disabled = state.page <= 1;
  els.next.disabled = state.page >= pages;
  renderKpis();
}

function renderSkeleton() {
  let rows = "";
  for (let i = 0; i < 5; i += 1) {
    rows += '<tr class="skeleton-row" aria-hidden="true"><td colspan="5"><span class="sk-line"></span></td></tr>';
  }
  els.body.innerHTML = rows;
  els.resultCount.textContent = "Đang tải dữ liệu…";
  els.pageInfo.textContent = "Trang 1 / 1";
  els.prev.disabled = true;
  els.next.disabled = true;
  els.kpiTotal.textContent = "—";
  els.kpiRevenue.textContent = "—";
  els.kpiShipping.textContent = "—";
}

async function loadOrders() {
  renderSkeleton();
  try {
    const response = await fetch(ORDERS_URL);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const orders = await response.json();
    state.orders = orders.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    state.page = 1;
    render();
  } catch (error) {
    state.orders = [];
    els.body.innerHTML = '<tr><td colspan="5" class="table-empty">Không tải được đơn: ' +
      escapeHTML(error.message) + "</td></tr>";
    els.resultCount.textContent = "Lỗi tải dữ liệu";
    els.pageInfo.textContent = "Trang 1 / 1";
    els.kpiTotal.textContent = "—";
    els.kpiRevenue.textContent = "—";
    els.kpiShipping.textContent = "—";
  }
}

let toastTimer = null;

function showToast(message, isError) {
  els.toast.textContent = message;
  els.toast.classList.toggle("is-error", Boolean(isError));
  els.toast.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    els.toast.classList.remove("is-show");
  }, 2600);
}

async function updateStatus(id, status) {
  const order = state.orders.filter(function (item) {
    return String(item.id) === String(id);
  })[0];
  if (!order) return;
  const previous = order.status;
  order.status = status;
  render();
  try {
    const response = await fetch(ORDERS_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: status })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    showToast("Đã chuyển " + order.code + " sang " + STATUS_LABEL[status] + ".", false);
  } catch (error) {
    order.status = previous;
    render();
    showToast("Chưa cập nhật được: " + error.message, true);
  }
}

let searchTimer = null;

els.search.addEventListener("input", function () {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function () {
    state.query = els.search.value;
    state.page = 1;
    render();
  }, 150);
});

els.filter.addEventListener("change", function () {
  state.filter = els.filter.value;
  state.page = 1;
  render();
});

els.prev.addEventListener("click", function () {
  if (state.page > 1) {
    state.page -= 1;
    render();
  }
});

els.next.addEventListener("click", function () {
  state.page += 1;
  render();
});

els.refresh.addEventListener("click", loadOrders);

els.body.addEventListener("change", function (event) {
  const select = event.target.closest('[data-action="status"]');
  if (!select) return;
  updateStatus(select.dataset.id, select.value);
});

loadOrders();`,
    mock: `(function () {
  var orders = [
    { id: "1", code: "OD-1042", customer: "Trần Thu Hà", email: "ha.tran@example.com", amount: 1850000, status: "shipping", createdAt: "2026-11-24T08:15:00.000Z" },
    { id: "2", code: "OD-1041", customer: "Lê Minh Quân", email: "quan.le@example.com", amount: 3200000, status: "pending", createdAt: "2026-11-24T07:40:00.000Z" },
    { id: "3", code: "OD-1040", customer: "Phạm Gia Hân", email: "han.pham@example.com", amount: 780000, status: "done", createdAt: "2026-11-23T16:20:00.000Z" },
    { id: "4", code: "OD-1039", customer: "Vũ Đức Anh", email: "anh.vu@example.com", amount: 2450000, status: "cancelled", createdAt: "2026-11-23T11:05:00.000Z" },
    { id: "5", code: "OD-1038", customer: "Nguyễn Khánh Linh", email: "linh.nguyen@example.com", amount: 1290000, status: "done", createdAt: "2026-11-22T15:45:00.000Z" },
    { id: "6", code: "OD-1037", customer: "Đỗ Hoàng Nam", email: "nam.do@example.com", amount: 5600000, status: "shipping", createdAt: "2026-11-22T09:10:00.000Z" },
    { id: "7", code: "OD-1036", customer: "Bùi Thanh Mai", email: "mai.bui@example.com", amount: 940000, status: "pending", createdAt: "2026-11-21T14:30:00.000Z" },
    { id: "8", code: "OD-1035", customer: "Hoàng Nhật Minh", email: "minh.hoang@example.com", amount: 4100000, status: "done", createdAt: "2026-11-21T08:00:00.000Z" },
    { id: "9", code: "OD-1034", customer: "Ngô Bảo Châu", email: "chau.ngo@example.com", amount: 1670000, status: "done", createdAt: "2026-11-20T17:25:00.000Z" }
  ];
  var realFetch = window.fetch;

  function parseBody(options) {
    try { return JSON.parse(options.body || "{}"); }
    catch (error) { return {}; }
  }

  function json(data) {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  window.fetch = function (url, options) {
    var request = String(url);
    var method = (options && options.method) || "GET";
    if (request.indexOf("/orders") === -1) {
      return realFetch.apply(window, arguments);
    }
    var match = request.match(/\\/orders\\/([^/?]+)/);
    var id = match ? match[1] : null;
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (method === "GET") { resolve(json(orders)); return; }
        var found = orders.filter(function (order) { return String(order.id) === id; })[0];
        if (!found) { resolve(new Response("Not found", { status: 404 })); return; }
        if (method === "PATCH" || method === "PUT") {
          Object.assign(found, parseBody(options));
          resolve(json(found));
          return;
        }
        resolve(new Response("Method not allowed", { status: 405 }));
      }, 450);
    });
  };
})();`
  },
  plan: {
    title: "Phân rã bảng vận hành thành lớp vỏ và lớp dữ liệu",
    intro: "Bảng đơn hàng có hai lớp: lớp vỏ ứng dụng (sidebar, thanh trên, chỉ số) và lớp dữ liệu (bảng, bộ lọc, phân trang). Tách hai lớp này trước sẽ giúp mỗi phần CSS và JavaScript chỉ còn một nhiệm vụ.",
    mindset: [
      "Lớp vỏ dựng một lần; lớp dữ liệu thay đổi theo mảng orders.",
      "Chỉ số nhanh là dữ liệu phái sinh: tính từ orders, không lưu riêng.",
      "Tìm kiếm, lọc và phân trang đều là phép biến đổi trên cùng một mảng."
    ],
    tree: [
      { depth: 0, tag: "body", note: "nền xám, chữ mặc định" },
      { depth: 1, tag: "div.shell", note: "lưới hai cột: sidebar và nội dung" },
      { depth: 2, tag: "aside.side", note: "cột trái cố định 232px" },
      { depth: 3, tag: "a.brand", note: "logo chữ và tên ứng dụng" },
      { depth: 3, tag: "nav.side-nav", note: "ba mục, một mục đang chọn" },
      { depth: 3, tag: "p.side-note", note: "ghi chú dự án, đẩy xuống đáy" },
      { depth: 2, tag: "main.main", note: "cột phải co giãn" },
      { depth: 3, tag: "header.topbar", note: "tiêu đề, ô tìm, nút tải lại" },
      { depth: 3, tag: "section.kpis", note: "ba thẻ chỉ số phái sinh" },
      { depth: 3, tag: "section.panel", note: "khung bảng đơn" },
      { depth: 4, tag: "header.panel-head", note: "tiêu đề bảng và bộ lọc" },
      { depth: 4, tag: "div.table-wrap", note: "cuộn ngang khi hẹp" },
      { depth: 5, tag: "table", note: "năm cột, phần thân do JS sinh" },
      { depth: 4, tag: "footer.panel-foot", note: "thông tin trang và hai nút" },
      { depth: 3, tag: "p.toast", note: "thông báo nổi sau khi PATCH" }
    ],
    questions: [
      {
        q: "Vì sao sidebar và main nằm trong cùng một lưới?",
        a: "Lưới hai cột giữ sidebar cố định và cho main co giãn. Trên màn hình hẹp chỉ cần đổi lưới thành một cột là sidebar tự chuyển lên trên, không phải viết lại HTML."
      },
      {
        q: "Chỉ số nhanh lấy từ đâu?",
        a: "Tính từ mảng orders: tổng số bản ghi, tổng tiền của đơn hoàn tất, số đơn đang giao. Không cần thêm endpoint riêng hay lưu ba con số này."
      },
      {
        q: "Tìm kiếm, lọc và phân trang có gọi lại MockAPI không?",
        a: "Không. Cả ba chạy trên mảng đã tải để thao tác tức thì. Khi dữ liệu lên hàng nghìn đơn, chuyển bộ lọc thành tham số truy vấn và phân trang phía máy chủ."
      }
    ],
    order: [
      "Dựng vỏ ứng dụng: shell, sidebar, main.",
      "Đặt thanh trên với tiêu đề, ô tìm và nút tải lại.",
      "Thêm ba thẻ chỉ số trước khi làm bảng.",
      "Dựng khung bảng, phần đầu và dòng trạng thái tải trong thân bảng.",
      "Đặt chân bảng với thông tin trang và hai nút phân trang.",
      "Chuyển sang CSS theo lớp: vỏ, thanh trên, chỉ số, bảng, trạng thái, màn hình hẹp.",
      "Tạo resource orders rồi mới viết JavaScript tải, lọc, phân trang, PATCH."
    ]
  },
  html: {
    title: "Dựng HTML: vỏ ứng dụng trước, bảng sau",
    intro: "Vỏ ứng dụng là phần không đổi; bảng là phần thay đổi. Viết vỏ trước để định hình không gian, rồi mới đặt bảng và các trạng thái của nó.",
    mindset: [
      "aside và main là hai con trực tiếp của shell, đúng với lưới CSS sau này.",
      "Bảng dùng thead và th có scope để trình đọc màn hình ghép cột với dữ liệu.",
      "Mọi vùng có trạng thái tải đều có chỗ hiển thị ngay trong HTML."
    ],
    steps: [
      {
        title: "Vỏ ứng dụng và sidebar",
        why: "div.shell là cha của hai cột. Sidebar gồm ba khối theo trục dọc: thương hiệu, điều hướng, ghi chú. Ghi chú được đẩy xuống đáy bằng margin-top auto ở CSS, không cần thêm phần tử đệm.",
        code: `<div class="shell">
  <aside class="side">
    <a class="brand" href="#don-hang">
      <span class="brand-mark">OD</span>
      <span class="brand-name">Order Desk</span>
    </a>
    <nav class="side-nav" aria-label="Khu vực làm việc">
      <a class="nav-item is-active" href="#don-hang" aria-current="page">Đơn hàng</a>
      <a class="nav-item" href="#khach-hang">Khách hàng</a>
      <a class="nav-item" href="#bao-cao">Báo cáo</a>
    </nav>
    <p class="side-note">Dự án mẫu FrontLab<br>Dữ liệu: MockAPI</p>
  </aside>

  <main class="main">
    <!-- thanh trên, chỉ số, bảng đơn -->
  </main>
</div>`
      },
      {
        title: "Thanh trên: tiêu đề, tìm kiếm, tải lại",
        why: "Thanh trên chia hai khối: tiêu đề bên trái, nhóm điều khiển bên phải. Ô tìm có nhãn ẩn để không phá bố cục nhưng vẫn đọc được. Nút tải lại tách khỏi form nên không gửi dữ liệu.",
        code: `<header class="topbar">
  <div>
    <p class="eyebrow">Vận hành</p>
    <h1>Đơn hàng hôm nay</h1>
  </div>
  <div class="top-actions">
    <label class="search">
      <span class="sr-only">Tìm đơn hàng</span>
      <input id="searchInput" type="search" placeholder="Tìm khách hàng hoặc mã đơn" autocomplete="off">
    </label>
    <button class="btn-refresh" id="refreshBtn" type="button">Tải lại</button>
  </div>
</header>`
      },
      {
        title: "Ba thẻ chỉ số",
        why: "Mỗi chỉ số là một article độc lập với nhãn, giá trị và ghi chú. Dùng article thay vì div vì mỗi thẻ là một đơn vị thông tin trọn vẹn. Giá trị ban đầu là dấu gạch để người dùng biết đang chờ dữ liệu.",
        code: `<section class="kpis" aria-label="Chỉ số nhanh">
  <article class="kpi">
    <p class="kpi-label">Tổng đơn</p>
    <p class="kpi-value" id="kpiTotal">—</p>
    <p class="kpi-note">trong 30 ngày</p>
  </article>
  <article class="kpi">
    <p class="kpi-label">Doanh thu</p>
    <p class="kpi-value" id="kpiRevenue">—</p>
    <p class="kpi-note">chỉ tính đơn hoàn tất</p>
  </article>
  <article class="kpi">
    <p class="kpi-label">Đang giao</p>
    <p class="kpi-value" id="kpiShipping">—</p>
    <p class="kpi-note">cần theo dõi</p>
  </article>
</section>`
      },
      {
        title: "Khung bảng, trạng thái tải và chân trang",
        why: "Bảng nằm trong div.table-wrap để cuộn ngang khi hẹp thay vì ép cột. Thân bảng có sẵn một dòng báo đang tải để khung không bị trống. Chân bảng giữ thông tin trang và hai nút điều hướng.",
        code: `<section class="panel" aria-labelledby="tableTitle">
  <header class="panel-head">
    <div>
      <h2 id="tableTitle">Danh sách đơn</h2>
      <p class="panel-sub" id="resultCount">Đang tải dữ liệu…</p>
    </div>
    <label class="filter">
      <span class="sr-only">Lọc trạng thái</span>
      <select id="statusFilter">
        <option value="all">Mọi trạng thái</option>
        <option value="pending">Chờ xử lý</option>
        <option value="shipping">Đang giao</option>
        <option value="done">Hoàn tất</option>
        <option value="cancelled">Đã huỷ</option>
      </select>
    </label>
  </header>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th scope="col">Mã</th>
          <th scope="col">Khách hàng</th>
          <th scope="col">Ngày</th>
          <th scope="col">Trạng thái</th>
          <th scope="col" class="num">Giá trị</th>
        </tr>
      </thead>
      <tbody id="orderBody">
        <tr><td colspan="5" class="table-empty">Đang tải đơn hàng…</td></tr>
      </tbody>
    </table>
  </div>

  <footer class="panel-foot">
    <p id="pageInfo">Trang 1 / 1</p>
    <div class="pager">
      <button id="prevBtn" type="button" disabled>Trước</button>
      <button id="nextBtn" type="button" disabled>Sau</button>
    </div>
  </footer>
</section>

<p class="toast" id="toast" role="status" aria-live="polite"></p>`
      }
    ],
    rules: [
      "Thứ tự trong bảng phải khớp với thứ tự ô JavaScript sinh ra.",
      "Cột số dùng class num để căn phải; không căn phải bằng khoảng trắng.",
      "Nút phân trang bắt đầu ở trạng thái disabled cho tới khi có dữ liệu."
    ],
    check: [
      "aside và main là hai con trực tiếp của shell.",
      "Mỗi th trong thead có scope=col.",
      "Thân bảng có dòng thông báo cho cả trạng thái tải và trạng thái trống."
    ]
  },
  css: {
    title: "Tô CSS theo lớp: vỏ, thanh trên, chỉ số, bảng",
    intro: "Bài này nhiều thành phần hơn hai dự án trước, nên càng phải giữ thứ tự: ngoài vào trong, trên xuống dưới. Mỗi bước chỉ chạm vào một lớp và đọc tác động trước khi gõ.",
    mindset: [
      "Vỏ trước, nội dung sau; bố cục trước, màu sắc sau.",
      "Bảng luôn có bề rộng tối thiểu và vùng cuộn riêng.",
      "Trạng thái (tải, rỗng, lỗi, đang đổi) đều có kiểu nhìn thấy được."
    ],
    steps: [
      {
        title: "Vỏ hai cột và sidebar",
        why: "Lưới hai cột chia không gian một lần cho toàn ứng dụng. Sidebar dùng flex dọc để ba khối xếp tự nhiên và ghi chú tự xuống đáy bằng margin-top auto.",
        props: [
          { name: "grid-template-columns: 232px 1fr", effect: "sidebar cố định, phần nội dung nhận toàn bộ chỗ còn lại." },
          { name: "min-height: 100vh trên shell", effect: "sidebar phủ hết chiều cao màn hình kể cả khi bảng ngắn." },
          { name: "flex-direction: column trên .side", effect: "thương hiệu, điều hướng, ghi chú xếp dọc." },
          { name: "margin-top: auto", effect: "đẩy ghi chú xuống đáy sidebar." },
          { name: "background gradient tối", effect: "tách khu vực điều hướng khỏi vùng dữ liệu sáng." }
        ],
        code: `:root {
  --bg: #eef1f5;
  --panel: #ffffff;
  --ink: #0f1d2a;
  --muted: #647280;
  --line: #e3e8ee;
  --brand: #0f9f8a;
  --brand-soft: #e0f6f1;
  --nav: #0c1a27;
  --nav-muted: #93a6b8;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background: var(--bg);
}

.shell {
  display: grid;
  grid-template-columns: 232px minmax(0, 1fr);
  min-height: 100vh;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 26px 20px;
  background: linear-gradient(180deg, #0d1c2a, #0a1621);
  color: #eaf2f8;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
  font-weight: 800;
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: var(--brand);
  color: #06251f;
  font-size: 0.76rem;
  letter-spacing: 0.02em;
}

.brand-name { font-size: 1rem; letter-spacing: -0.02em; }

.side-nav { display: grid; gap: 4px; }

.nav-item {
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--nav-muted);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-item:hover { background: rgba(255, 255, 255, 0.06); color: #ffffff; }

.nav-item.is-active {
  background: rgba(15, 159, 138, 0.18);
  color: #8ff0dd;
}

.side-note {
  margin-top: auto;
  font-size: 0.68rem;
  line-height: 1.6;
  color: #6f8598;
}`
      },
      {
        title: "Vùng nội dung và thanh trên",
        why: "min-width 0 trên main là chi tiết quan trọng: nếu thiếu, bảng rộng sẽ đẩy cả lưới tràn ngang. Ô tìm kiếm dùng bề rộng giới hạn để không chiếm hết thanh.",
        props: [
          { name: "min-width: 0 trên .main", effect: "cho phép cột phải co lại, tránh tràn lưới khi bảng rộng." },
          { name: "justify-content: space-between", effect: "tiêu đề và nhóm điều khiển về hai đầu." },
          { name: "width: min(320px, 32vw)", effect: "ô tìm rộng tối đa 320px và không quá 32% khung nhìn." },
          { name: "box-shadow focus", effect: "viền sáng báo focus mà không đổi kích thước hộp." },
          { name: "clamp() cho h1", effect: "tiêu đề co theo màn hình nhưng có giới hạn hai đầu." }
        ],
        code: `.main {
  min-width: 0;
  padding: 26px 30px 44px;
}

.topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
}

.eyebrow {
  margin: 0 0 5px;
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search { display: block; }

.search input {
  width: min(320px, 32vw);
  height: 42px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: var(--panel);
  color: var(--ink);
  font: inherit;
  font-size: 0.82rem;
}

.search input:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-soft);
}

.btn-refresh {
  height: 42px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: var(--panel);
  color: var(--ink);
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-refresh:hover { border-color: #c9d2dd; background: #f8fafb; }`
      },
      {
        title: "Ba thẻ chỉ số",
        why: "Lưới ba cột chia đều. Mỗi thẻ có cùng cấu trúc ba dòng nên không cần đặt chiều cao; lưới tự cân bằng. Giá trị dùng clamp để không quá lớn trên màn hình rộng.",
        props: [
          { name: "repeat(3, 1fr)", effect: "ba thẻ rộng bằng nhau." },
          { name: "padding 16px 18px", effect: "khoảng đệm đủ thoáng cho ba dòng chữ." },
          { name: "border + shadow nhẹ", effect: "tách thẻ khỏi nền nhưng không nặng như bảng chính." },
          { name: "letter-spacing trên nhãn", effect: "nhãn nhỏ dễ đọc hơn khi in hoa." },
          { name: "clamp() cho giá trị", effect: "số tiền dài vẫn vừa thẻ." }
        ],
        code: `.kpis {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 22px;
}

.kpi {
  padding: 16px 18px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(15, 29, 42, 0.04);
}

.kpi-label {
  margin: 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--muted);
  font-weight: 700;
}

.kpi-value {
  margin: 8px 0 0;
  font-size: clamp(1.3rem, 2.6vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.kpi-note {
  margin: 4px 0 0;
  font-size: 0.7rem;
  color: var(--muted);
}`
      },
      {
        title: "Khung bảng, đầu bảng và vùng cuộn",
        why: "Panel dùng overflow hidden để bo góc cắt luôn phần bảng bên trong. Bảng có min-width để các cột không bị ép; table-wrap nhận overflow-x để cuộn riêng thay vì làm tràn trang.",
        props: [
          { name: "overflow: hidden trên .panel", effect: "bo góc panel cắt gọn cả phần đầu bảng." },
          { name: "overflow-x: auto trên .table-wrap", effect: "bảng rộng cuộn trong khung, không đẩy trang ngang." },
          { name: "min-width: 680px", effect: "giữ đủ chỗ cho năm cột trước khi cho phép cuộn." },
          { name: "border-collapse: collapse", effect: "đường kẻ giữa các ô không bị nhân đôi." },
          { name: "thead dính màu nền", effect: "tách phần tiêu đề cột khỏi dữ liệu." }
        ],
        code: `.panel {
  margin-top: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
}

.panel-head h2 {
  margin: 0;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.panel-sub {
  margin: 3px 0 0;
  font-size: 0.72rem;
  color: var(--muted);
}

.filter select {
  height: 36px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #ffffff;
  color: var(--ink);
  font: inherit;
  font-size: 0.76rem;
}

.filter select:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-soft);
}

.table-wrap { overflow-x: auto; }

table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
}

thead th {
  padding: 10px 16px;
  background: #f7f9fb;
  border-bottom: 1px solid var(--line);
  text-align: left;
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

tbody td {
  padding: 12px 16px;
  border-bottom: 1px solid #eef2f6;
  font-size: 0.82rem;
  vertical-align: middle;
}

tbody tr:last-child td { border-bottom: 0; }
tbody tr:hover { background: #f9fbfc; }

.num { text-align: right; }`
      },
      {
        title: "Ô khách hàng và huy hiệu trạng thái",
        why: "Ô khách hàng là flex nhỏ: avatar cố định, phần chữ co giãn. Trạng thái dùng select nhưng được tô như huy hiệu; mỗi trạng thái một lớp màu, JavaScript chỉ đổi lớp khi dữ liệu đổi.",
        props: [
          { name: "flex + gap cho .customer", effect: "avatar và hai dòng chữ thẳng hàng." },
          { name: "flex: none trên avatar", effect: "avatar không bị bóp khi tên dài." },
          { name: "border-radius: 999px trên select", effect: "select trông như huy hiệu nhưng vẫn mở được danh sách." },
          { name: "bốn lớp is-pending/is-shipping/is-done/is-cancelled", effect: "mỗi trạng thái một cặp màu nền và màu chữ." },
          { name: "cỡ chữ 0.7rem", effect: "nhãn trạng thái không lấn át tên khách hàng." }
        ],
        code: `.order-code {
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 0.75rem;
  color: var(--muted);
}

.customer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cust-avatar {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--brand-soft);
  color: #0a7d6c;
  font-size: 0.68rem;
  font-weight: 800;
  flex: none;
}

.customer b { display: block; font-size: 0.82rem; font-weight: 700; }

.customer small {
  display: block;
  margin-top: 2px;
  font-size: 0.68rem;
  color: var(--muted);
}

.status-select {
  border: 0;
  border-radius: 999px;
  padding: 6px 10px;
  font: inherit;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
}

.is-pending { background: #fff4d6; color: #8a5b00; }
.is-shipping { background: #e2efff; color: #1a5fae; }
.is-done { background: #e1f7ec; color: #0a7d50; }
.is-cancelled { background: #ffe7e8; color: #a72b31; }

.table-empty {
  padding: 30px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 0.82rem;
}`
      },
      {
        title: "Chân bảng, thông báo, khung xương và màn hình hẹp",
        why: "Bước cuối hoàn thiện các trạng thái và cho vỏ tự xếp lại. Toast cố định ở góc phải dưới để không đẩy bố cục. Khung xương dùng animation nền chạy để báo đang tải.",
        props: [
          { name: "position: fixed cho toast", effect: "thông báo nổi trên mọi nội dung, không làm nhảy bảng." },
          { name: "opacity + transform cho toast", effect: "hiện và ẩn mượt bằng class is-show." },
          { name: "animation shimmer", effect: "dải sáng chạy ngang báo hiệu dữ liệu đang về." },
          { name: "@media 960px: shell 1 cột", effect: "sidebar thành thanh ngang phía trên." },
          { name: "overflow-x: auto trên .side", effect: "thanh điều hướng ngang không làm tràn trang." },
          { name: "@media 640px: KPI 1 cột", effect: "ba thẻ xếp dọc, dễ đọc trên điện thoại." }
        ],
        code: `.panel-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px;
  border-top: 1px solid var(--line);
  font-size: 0.74rem;
  color: var(--muted);
}

.pager { display: flex; gap: 8px; }

.pager button {
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #ffffff;
  color: var(--ink);
  font: inherit;
  font-size: 0.74rem;
  font-weight: 600;
  cursor: pointer;
}

.pager button:hover { border-color: #c9d2dd; }
.pager button:disabled { opacity: 0.4; pointer-events: none; }

.toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  margin: 0;
  padding: 10px 14px;
  border-radius: 10px;
  background: #0f1d2a;
  color: #ffffff;
  font-size: 0.78rem;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}

.toast.is-show { opacity: 1; transform: none; }
.toast.is-error { background: #a72b31; }

.skeleton-row td { padding: 12px 16px; }

.sk-line {
  display: block;
  height: 14px;
  border-radius: 6px;
  background: linear-gradient(90deg, #f0f4f7 25%, #e5ecf2 37%, #f0f4f7 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  to { background-position: -135% 0; }
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

@media (max-width: 960px) {
  .shell { grid-template-columns: 1fr; }
  .side {
    flex-direction: row;
    align-items: center;
    gap: 18px;
    padding: 12px 18px;
    overflow-x: auto;
  }
  .side-nav { display: flex; gap: 2px; }
  .nav-item { white-space: nowrap; }
  .side-note { display: none; }
  .main { padding: 20px 18px 36px; }
}

@media (max-width: 640px) {
  .topbar { flex-direction: column; align-items: stretch; }
  .top-actions { width: 100%; }
  .search { flex: 1; }
  .search input { width: 100%; }
  .kpis { grid-template-columns: 1fr; }
  .panel-head { flex-direction: column; align-items: flex-start; }
  .filter, .filter select { width: 100%; }
}`
      }
    ],
    responsive: [
      "Ở 960px, sidebar chuyển thành thanh ngang; ba mục vẫn bấm được.",
      "Ở 640px, KPI xếp dọc; bảng cuộn ngang trong khung thay vì tràn trang.",
      "Ô tìm kiếm chiếm hết hàng điều khiển trên điện thoại."
    ],
    rules: [
      "Luôn đặt min-width cho bảng và overflow-x cho khung bọc.",
      "Không dùng màu trạng thái làm tín hiệu duy nhất; select luôn hiện tên trạng thái.",
      "Mỗi lớp trạng thái chỉ đổi nền và màu chữ, không đổi kích thước."
    ]
  },
  api: {
    title: "Tạo resource orders và chốt chiến lược tải dữ liệu",
    intro: "Bảng vận hành cần một danh sách đơn và một thao tác cập nhật. Với dữ liệu mẫu vài chục đơn, tải một lần rồi lọc cục bộ là lựa chọn đơn giản và nhanh nhất.",
    setup: [
      { title: "Tạo project", detail: "Tạo project frontlab-orders trên mockapi.io, lấy base URL dạng https://<mã>.mockapi.io/api/v1." },
      { title: "Tạo resource orders", detail: "Khai báo: code (String), customer (String), email (String), amount (Number), status (String), createdAt (String)." },
      { title: "Sinh dữ liệu", detail: "Tạo 9 đến 12 đơn, trộn đủ bốn trạng thái pending, shipping, done, cancelled để thử bộ lọc và chỉ số." },
      { title: "Dán base URL", detail: "Thay YOUR_PROJECT trong API_BASE. Không dùng thông tin khách hàng thật vì resource công khai." }
    ],
    endpoints: [
      { method: "GET", path: "/orders", desc: "Tải toàn bộ đơn cho bảng", result: "200 + array" },
      { method: "PATCH", path: "/orders/:id", desc: "Đổi trạng thái một đơn", result: "200 + object" },
      { method: "GET", path: "/orders?status=shipping", desc: "Lọc phía máy chủ khi dữ liệu lớn", result: "200 + array" },
      { method: "GET", path: "/orders?page=1&limit=5", desc: "Phân trang phía máy chủ", result: "200 + array" }
    ],
    sample: {
      id: "1",
      code: "OD-1042",
      customer: "Trần Thu Hà",
      email: "ha.tran@example.com",
      amount: 1850000,
      status: "shipping",
      createdAt: "2026-11-24T08:15:00.000Z"
    },
    rules: [
      "MockAPI không trả tổng số bản ghi khi phân trang; nếu chuyển sang phân trang máy chủ, phải tính tổng bằng một yêu cầu riêng.",
      "amount phải là Number để cộng doanh thu; đừng lưu chuỗi có dấu chấm.",
      "status chỉ nhận bốn giá trị đã định; kiểm tra lại ở cả giao diện và dữ liệu mẫu."
    ],
    mockNote: "Khung xem trước chặn fetch và giữ mảng orders trong bộ nhớ. Đổi trạng thái có tác dụng thật trong khung; tải lại trang là dữ liệu trở về mặc định."
  },
  js: {
    title: "Một mảng đơn, ba phép biến đổi, một lần ghi",
    intro: "JavaScript của bảng vận hành gọn nếu giữ đúng thứ tự: tải dữ liệu, biến đổi để hiển thị, vẽ bảng và chỉ số, chỉ ghi lên máy chủ khi đổi trạng thái.",
    mindset: [
      "Lọc, tìm kiếm, phân trang là ba phép biến đổi thuần trên mảng orders.",
      "Chỉ số là hàm của dữ liệu, tính lại sau mỗi thay đổi thay vì lưu riêng.",
      "Đổi trạng thái thì cập nhật giao diện trước, gọi PATCH sau; lỗi thì hoàn nguyên."
    ],
    steps: [
      {
        title: "Hằng số, phần tử và hàm định dạng",
        why: "STATUS_LABEL là nguồn duy nhất cho cả option và thông báo. Intl.NumberFormat lo tiền Việt, không tự ghép chuỗi. escapeHTML bảo vệ mọi trường do người dùng nhập.",
        code: `const API_BASE = "https://YOUR_PROJECT.mockapi.io/api/v1";
const ORDERS_URL = API_BASE + "/orders";
const PAGE_SIZE = 5;

const STATUS_LABEL = {
  pending: "Chờ xử lý",
  shipping: "Đang giao",
  done: "Hoàn tất",
  cancelled: "Đã huỷ"
};

const els = {
  search: document.getElementById("searchInput"),
  filter: document.getElementById("statusFilter"),
  body: document.getElementById("orderBody"),
  resultCount: document.getElementById("resultCount"),
  pageInfo: document.getElementById("pageInfo"),
  prev: document.getElementById("prevBtn"),
  next: document.getElementById("nextBtn"),
  refresh: document.getElementById("refreshBtn"),
  toast: document.getElementById("toast"),
  kpiTotal: document.getElementById("kpiTotal"),
  kpiRevenue: document.getElementById("kpiRevenue"),
  kpiShipping: document.getElementById("kpiShipping")
};

const state = {
  orders: [],
  filter: "all",
  query: "",
  page: 1
};

const money = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0
});

function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function initials(name) {
  return String(name || "")
    .trim()
    .split(/\\s+/)
    .slice(-2)
    .map(function (word) { return word.charAt(0); })
    .join("")
    .toUpperCase();
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function formatMoney(value) {
  return money.format(Number(value || 0));
}`
      },
      {
        title: "Tải dữ liệu với khung xương",
        why: "Khung xương giữ chiều cao bảng ổn định trong lúc chờ. Sắp xếp theo ngày tạo giảm dần để đơn mới lên đầu. Khối catch đưa bảng về trạng thái đọc được thay vì để khung xương chạy mãi.",
        code: `function renderSkeleton() {
  let rows = "";
  for (let i = 0; i < 5; i += 1) {
    rows += '<tr class="skeleton-row" aria-hidden="true"><td colspan="5"><span class="sk-line"></span></td></tr>';
  }
  els.body.innerHTML = rows;
  els.resultCount.textContent = "Đang tải dữ liệu…";
  els.pageInfo.textContent = "Trang 1 / 1";
  els.prev.disabled = true;
  els.next.disabled = true;
  els.kpiTotal.textContent = "—";
  els.kpiRevenue.textContent = "—";
  els.kpiShipping.textContent = "—";
}

async function loadOrders() {
  renderSkeleton();
  try {
    const response = await fetch(ORDERS_URL);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const orders = await response.json();
    state.orders = orders.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    state.page = 1;
    render();
  } catch (error) {
    state.orders = [];
    els.body.innerHTML = '<tr><td colspan="5" class="table-empty">Không tải được đơn: ' +
      escapeHTML(error.message) + "</td></tr>";
    els.resultCount.textContent = "Lỗi tải dữ liệu";
    els.pageInfo.textContent = "Trang 1 / 1";
    els.kpiTotal.textContent = "—";
    els.kpiRevenue.textContent = "—";
    els.kpiShipping.textContent = "—";
  }
}`
      },
      {
        title: "Lọc, tìm kiếm và dựng từng hàng",
        why: "filteredOrders trả về mảng mới, không sửa mảng gốc. Mỗi hàng là một chuỗi ghép có escape; select trạng thái mang data-id để một listener chung xử lý mọi hàng.",
        code: `function statusOptions(current) {
  return Object.keys(STATUS_LABEL).map(function (key) {
    return '<option value="' + key + '"' + (key === current ? " selected" : "") + ">" +
      STATUS_LABEL[key] + "</option>";
  }).join("");
}

function filteredOrders() {
  const query = state.query.trim().toLowerCase();
  return state.orders.filter(function (order) {
    const matchStatus = state.filter === "all" || order.status === state.filter;
    const haystack = (order.code + " " + order.customer + " " + order.email).toLowerCase();
    const matchQuery = !query || haystack.indexOf(query) !== -1;
    return matchStatus && matchQuery;
  });
}

function rowHTML(order) {
  return '<tr data-id="' + escapeHTML(order.id) + '">' +
    '<td><code class="order-code">' + escapeHTML(order.code) + '</code></td>' +
    '<td><div class="customer">' +
      '<span class="cust-avatar" aria-hidden="true">' + initials(order.customer) + '</span>' +
      '<div><b>' + escapeHTML(order.customer) + '</b>' +
      '<small>' + escapeHTML(order.email) + '</small></div>' +
    '</div></td>' +
    '<td>' + formatDate(order.createdAt) + '</td>' +
    '<td><select class="status-select is-' + escapeHTML(order.status) + '" data-action="status" ' +
      'data-id="' + escapeHTML(order.id) + '" aria-label="Đổi trạng thái đơn ' + escapeHTML(order.code) + '">' +
      statusOptions(order.status) +
    '</select></td>' +
    '<td class="num">' + formatMoney(order.amount) + '</td>' +
  '</tr>';
}`
      },
      {
        title: "Vẽ bảng và chỉ số phái sinh",
        why: "render là nơi duy nhất ghi vào DOM của bảng. Nó tự kẹp số trang, cắt đúng năm hàng và tính lại ba chỉ số từ mảng orders, nên không có con số nào bị lệch.",
        code: `function renderKpis() {
  const total = state.orders.length;
  const revenue = state.orders
    .filter(function (order) { return order.status === "done"; })
    .reduce(function (sum, order) { return sum + Number(order.amount || 0); }, 0);
  const shipping = state.orders.filter(function (order) { return order.status === "shipping"; }).length;
  els.kpiTotal.textContent = total.toLocaleString("vi-VN");
  els.kpiRevenue.textContent = formatMoney(revenue);
  els.kpiShipping.textContent = shipping.toLocaleString("vi-VN");
}

function render() {
  const list = filteredOrders();
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  state.page = Math.min(state.page, pages);
  const start = (state.page - 1) * PAGE_SIZE;
  const rows = list.slice(start, start + PAGE_SIZE);

  els.body.innerHTML = rows.length
    ? rows.map(rowHTML).join("")
    : '<tr><td colspan="5" class="table-empty">Không có đơn phù hợp với bộ lọc.</td></tr>';
  els.resultCount.textContent = list.length + " / " + state.orders.length + " đơn";
  els.pageInfo.textContent = "Trang " + state.page + " / " + pages;
  els.prev.disabled = state.page <= 1;
  els.next.disabled = state.page >= pages;
  renderKpis();
}`
      },
      {
        title: "Đổi trạng thái, thông báo và gắn sự kiện",
        why: "Đổi trạng thái là thao tác duy nhất ghi lên máy chủ. Cập nhật mảng rồi render ngay để bảng và chỉ số đổi tức thì; nếu PATCH lỗi thì trả lại trạng thái cũ. Ô tìm kiếm chờ 150ms để không render mỗi phím bấm.",
        code: `let toastTimer = null;

function showToast(message, isError) {
  els.toast.textContent = message;
  els.toast.classList.toggle("is-error", Boolean(isError));
  els.toast.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    els.toast.classList.remove("is-show");
  }, 2600);
}

async function updateStatus(id, status) {
  const order = state.orders.filter(function (item) {
    return String(item.id) === String(id);
  })[0];
  if (!order) return;
  const previous = order.status;
  order.status = status;
  render();
  try {
    const response = await fetch(ORDERS_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: status })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    showToast("Đã chuyển " + order.code + " sang " + STATUS_LABEL[status] + ".", false);
  } catch (error) {
    order.status = previous;
    render();
    showToast("Chưa cập nhật được: " + error.message, true);
  }
}

let searchTimer = null;

els.search.addEventListener("input", function () {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function () {
    state.query = els.search.value;
    state.page = 1;
    render();
  }, 150);
});

els.filter.addEventListener("change", function () {
  state.filter = els.filter.value;
  state.page = 1;
  render();
});

els.prev.addEventListener("click", function () {
  if (state.page > 1) {
    state.page -= 1;
    render();
  }
});

els.next.addEventListener("click", function () {
  state.page += 1;
  render();
});

els.refresh.addEventListener("click", loadOrders);

els.body.addEventListener("change", function (event) {
  const select = event.target.closest('[data-action="status"]');
  if (!select) return;
  updateStatus(select.dataset.id, select.value);
});

loadOrders();`
      }
    ],
    tests: [
      "Tìm theo mã OD-1041: bảng còn đúng một đơn, phân trang về trang 1.",
      "Lọc Đang giao: KPI Đang giao vẫn là tổng toàn bộ, không đổi theo bộ lọc.",
      "Đổi trạng thái một đơn sang Hoàn tất: doanh thu tăng ngay, toast hiện mã đơn.",
      "Xoá toàn bộ đơn trên dashboard MockAPI rồi tải lại: hiện trạng thái trống, không lỗi.",
      "Ở 390px, bảng cuộn ngang trong khung, không đẩy trang."
    ],
    rules: [
      "Chỉ số luôn tính từ toàn bộ orders, không từ danh sách đã lọc.",
      "Khi đổi trạng thái, nhớ mã đơn trước khi render lại để thông báo chính xác.",
      "Không gọi fetch trong render; render chỉ đọc state."
    ]
  },
  done: {
    title: "Kiểm tra và mở rộng",
    intro: "Bảng vận hành là bài tổng hợp: nhiều thành phần, nhiều trạng thái nhưng vẫn một nguồn dữ liệu. Hãy kiểm tra như người vận hành thật, rồi chọn một hướng mở rộng.",
    checklist: [
      "Tìm kiếm không phân biệt hoa thường, tìm được cả mã đơn và email.",
      "Lọc trạng thái và phân trang phối hợp đúng: đổi bộ lọc luôn về trang 1.",
      "Chỉ số doanh thu chỉ tính đơn hoàn tất và cập nhật ngay sau khi đổi trạng thái.",
      "PATCH thất bại thì trạng thái quay lại và toast báo lỗi màu đỏ.",
      "Bảng rộng cuộn trong khung ở màn hình hẹp, không làm tràn cả trang.",
      "Sidebar chuyển thành thanh ngang ở 960px, các mục vẫn bấm được."
    ],
    extend: [
      "Thêm sắp xếp theo cột Giá trị hoặc Ngày bằng cách đổi hàm sắp xếp trong render.",
      "Xuất CSV từ mảng orders đã lọc bằng Blob và URL.createObjectURL.",
      "Thêm bộ lọc khoảng ngày và tổng doanh thu theo khoảng đó.",
      "Chuyển sang phân trang phía máy chủ với page và limit khi dữ liệu lớn.",
      "Thêm trạng thái đang tải riêng cho từng select khi PATCH chậm."
    ],
    mistakes: [
      { title: "Đếm KPI trên danh sách đã lọc", fix: "Chỉ số phải phản ánh toàn bộ đơn; chỉ bảng mới dùng danh sách đã lọc." },
      { title: "Quên kẹp số trang", fix: "Sau khi lọc, số trang có thể giảm; luôn Math.min(state.page, pages) trước khi cắt mảng." },
      { title: "Dùng innerHTML cho email", fix: "Mọi trường từ API đều phải escape trước khi ghép vào chuỗi HTML." }
    ]
  }
});
