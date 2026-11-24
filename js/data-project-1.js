/* FrontLab — dự án 01: thẻ hồ sơ thành viên */
window.FRONTLAB_PROJECTS = window.FRONTLAB_PROJECTS || [];
window.FRONTLAB_PROJECTS.push({
  id: "profile-card",
  num: 1,
  title: "Thẻ hồ sơ thành viên",
  short: "Thẻ hồ sơ",
  level: "Cơ bản",
  tone: "mint",
  minutes: 45,
  thumb: "profile",
  blurb: "Một thẻ giới thiệu thành viên nhóm: bố cục gọn, số liệu rõ, nút theo dõi lưu trạng thái lên MockAPI.",
  tags: ["HTML ngữ nghĩa", "CSS Grid", "fetch", "MockAPI"],
  skills: ["Cây bố cục", "Grid ba cột", "Trạng thái tải", "PUT MockAPI"],
  goal: "Dựng một thẻ hồ sơ hoàn chỉnh bằng HTML thuần, tô CSS theo từng vùng và nối dữ liệu từ MockAPI bằng JavaScript.",
  outcomes: [
    "Viết được HTML từ ngoài vào trong, không phải sửa lại bộ xương khi làm CSS.",
    "Phân tích được tác động của từng thuộc tính CSS trên một thành phần cụ thể.",
    "Biết tạo resource MockAPI và xử lý ba trạng thái: đang tải, có dữ liệu, lỗi."
  ],
  files: {
    html: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thẻ hồ sơ thành viên</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="page">
    <article class="card is-loading" aria-labelledby="memberName">
      <header class="card-head">
        <div class="avatar" id="avatar" aria-hidden="true">NA</div>
        <div class="identity">
          <p class="eyebrow">Thành viên nhóm</p>
          <h1 id="memberName">Đang tải…</h1>
          <p class="role" id="memberRole">—</p>
        </div>
        <span class="status" id="memberStatus">Đang tải</span>
      </header>

      <p class="bio" id="memberBio">Nội dung sẽ được lấy từ MockAPI.</p>

      <dl class="stats">
        <div class="stat">
          <dt>Dự án</dt>
          <dd id="statProjects">—</dd>
        </div>
        <div class="stat">
          <dt>Người theo dõi</dt>
          <dd id="statFollowers">—</dd>
        </div>
        <div class="stat">
          <dt>Sao</dt>
          <dd id="statStars">—</dd>
        </div>
      </dl>

      <footer class="actions">
        <button class="btn btn-primary" id="followBtn" type="button" aria-pressed="false">Theo dõi</button>
        <a class="btn btn-ghost" href="#du-an">Xem dự án</a>
      </footer>
      <p class="feedback" id="feedback" role="status"></p>
    </article>
  </main>
  <script src="app.js" defer></script>
</body>
</html>`,
    css: `:root {
  --bg: #eef2f6;
  --card: #ffffff;
  --ink: #12202c;
  --muted: #5f6f7c;
  --line: #e2e8ee;
  --brand: #0f9f8a;
  --brand-2: #7c5cff;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(1100px 560px at 12% 0%, #dff5ef, transparent 60%),
    radial-gradient(900px 520px at 100% 100%, #e9e3ff, transparent 58%),
    var(--bg);
}

.page {
  width: 100%;
  max-width: 520px;
}

.card {
  position: relative;
  padding: clamp(22px, 4vw, 34px);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 24px 60px rgba(18, 32, 44, 0.12);
}

.card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 6px;
  border-radius: 28px 28px 0 0;
  background: linear-gradient(90deg, var(--brand), var(--brand-2));
}

.card-head {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
}

.avatar {
  width: 76px;
  height: 76px;
  border-radius: 22px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.14);
}

.identity { min-width: 0; }

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}

.identity h1 {
  margin: 0;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.role {
  margin: 3px 0 0;
  font-size: 0.9rem;
  color: var(--muted);
}

.status {
  align-self: start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #eaf8f4;
  color: #0a7d6c;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}

.status::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

.bio {
  margin: 20px 0 0;
  color: #40515f;
  font-size: 0.92rem;
  line-height: 1.65;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 22px 0 0;
  padding: 16px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stat { text-align: center; }
.stat + .stat { border-left: 1px solid var(--line); }

.stat dt {
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.stat dd {
  margin: 6px 0 0;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 22px;
}

.btn {
  flex: 1;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: 12px;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}

.btn:hover { transform: translateY(-1px); }

.btn:focus-visible {
  outline: 3px solid rgba(124, 92, 255, 0.35);
  outline-offset: 2px;
}

.btn-primary {
  background: var(--ink);
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(18, 32, 44, 0.2);
}

.btn-primary:hover { background: #1c3143; }
.btn-primary[aria-pressed="true"] { background: var(--brand); }

.btn-ghost {
  background: #f5f7fa;
  border-color: var(--line);
  color: var(--ink);
}

.btn-ghost:hover { background: #eef2f6; }

.feedback {
  min-height: 18px;
  margin: 10px 2px 0;
  font-size: 0.78rem;
  color: var(--muted);
}

.feedback.is-error { color: #c2383f; }

.card.is-loading .avatar,
.card.is-loading .status { opacity: 0.6; }

.card.is-loading .bio { opacity: 0.55; }

@media (max-width: 480px) {
  .card-head { grid-template-columns: auto minmax(0, 1fr); }
  .status { grid-column: 1 / -1; justify-self: start; }
  .actions { flex-direction: column; }
}`,
    js: `const API_BASE = "https://YOUR_PROJECT.mockapi.io/api/v1";
const MEMBER_URL = API_BASE + "/members/1";

const els = {
  card: document.querySelector(".card"),
  name: document.getElementById("memberName"),
  role: document.getElementById("memberRole"),
  bio: document.getElementById("memberBio"),
  avatar: document.getElementById("avatar"),
  status: document.getElementById("memberStatus"),
  projects: document.getElementById("statProjects"),
  followers: document.getElementById("statFollowers"),
  stars: document.getElementById("statStars"),
  follow: document.getElementById("followBtn"),
  feedback: document.getElementById("feedback")
};

const state = {
  member: null,
  following: false
};

function initials(name) {
  return String(name || "")
    .trim()
    .split(/\\s+/)
    .slice(-2)
    .map(function (word) { return word.charAt(0).toUpperCase(); })
    .join("");
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("vi-VN");
}

function paintStatus(member) {
  const online = Boolean(member.available);
  els.status.textContent = online ? "Sẵn sàng nhận việc" : "Đang bận";
  els.status.style.background = online ? "" : "#fff1e6";
  els.status.style.color = online ? "" : "#b45309";
}

function paint(member) {
  els.name.textContent = member.name || "Chưa có tên";
  els.role.textContent = member.role || "Chưa cập nhật vai trò";
  els.bio.textContent = member.bio || "Chưa có phần giới thiệu.";
  els.avatar.textContent = initials(member.name);
  els.projects.textContent = formatNumber(member.projects);
  els.followers.textContent = formatNumber(member.followers);
  els.stars.textContent = formatNumber(member.stars);
  paintStatus(member);
  els.card.classList.remove("is-loading");
}

async function loadMember() {
  els.feedback.textContent = "Đang tải hồ sơ từ MockAPI…";
  try {
    const response = await fetch(MEMBER_URL);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const member = await response.json();
    state.member = member;
    paint(member);
    els.feedback.textContent = "";
  } catch (error) {
    els.card.classList.remove("is-loading");
    els.name.textContent = "Không tải được hồ sơ";
    els.role.textContent = "Kiểm tra kết nối mạng";
    els.feedback.textContent = "Lỗi: " + error.message + ". Kiểm tra API_BASE trong app.js.";
    els.feedback.classList.add("is-error");
  }
}

function paintFollow(saving) {
  els.follow.textContent = state.following ? "Đang theo dõi" : "Theo dõi";
  els.follow.setAttribute("aria-pressed", String(state.following));
  els.feedback.classList.remove("is-error");
  els.feedback.textContent = saving ? "Đang lưu lên MockAPI…" : "";
}

async function toggleFollow() {
  state.following = !state.following;
  paintFollow(true);
  try {
    const response = await fetch(MEMBER_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ following: state.following })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    els.feedback.textContent = state.following
      ? "Đã lưu trạng thái theo dõi."
      : "Đã bỏ theo dõi.";
  } catch (error) {
    els.feedback.textContent = "Chưa lưu được lên MockAPI: " + error.message;
    els.feedback.classList.add("is-error");
  }
}

els.follow.addEventListener("click", toggleFollow);
loadMember();`,
    mock: `(function () {
  var member = {
    id: "1",
    name: "Nguyễn An Nhiên",
    role: "Frontend Engineer",
    bio: "Mình thích biến bản vẽ thành giao diện chạy được: bắt đầu từ cấu trúc HTML, rồi mới tô CSS và nối dữ liệu.",
    projects: 18,
    followers: 1240,
    stars: 386,
    available: true,
    following: false
  };
  var realFetch = window.fetch;
  window.fetch = function (url, options) {
    var request = String(url);
    var method = (options && options.method) || "GET";
    if (request.indexOf("/members/1") === -1) {
      return realFetch.apply(window, arguments);
    }
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (method !== "GET") {
          try {
            var body = JSON.parse(options.body || "{}");
            Object.keys(body).forEach(function (key) {
              member[key] = body[key];
            });
          } catch (error) {
            /* body lỗi thì giữ nguyên dữ liệu cũ */
          }
        }
        resolve(new Response(JSON.stringify(member), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }));
      }, 500);
    });
  };
})();`
  },
  plan: {
    title: "Phân rã thẻ hồ sơ thành các vùng",
    intro: "Trước khi viết một dòng mã, hãy nhìn sản phẩm đích và chia nó thành các hộp. Mỗi hộp là một vùng có một nhiệm vụ. Cách chia này quyết định toàn bộ HTML phía sau.",
    mindset: [
      "Đi từ ngoài vào trong: trang, vùng giới hạn, thẻ, các vùng con, chi tiết.",
      "Mỗi vùng chỉ nên có một nhiệm vụ; vùng nào lặp lại thì tách thành mẫu chung.",
      "Chốt vùng trước khi đặt tên class; tên class bám theo vai trò, không bám theo màu."
    ],
    tree: [
      { depth: 0, tag: "body", note: "khung trang, nền và căn giữa bằng CSS" },
      { depth: 1, tag: 'main.page', note: "giới hạn bề rộng nội dung" },
      { depth: 2, tag: 'article.card', note: "toàn bộ thẻ, nhận dữ liệu từ MockAPI" },
      { depth: 3, tag: "header.card-head", note: "vùng đầu thẻ" },
      { depth: 4, tag: 'div.avatar', note: "chữ viết tắt, trang trí" },
      { depth: 4, tag: "div.identity", note: "nhãn, tên, vai trò" },
      { depth: 5, tag: "p.eyebrow", note: "nhãn nhỏ phía trên tên" },
      { depth: 5, tag: "h1#memberName", note: "tiêu đề của cả thẻ" },
      { depth: 5, tag: "p.role", note: "vai trò hiện tại" },
      { depth: 4, tag: "span.status", note: "huy hiệu trạng thái nhận việc" },
      { depth: 3, tag: "p.bio", note: "đoạn giới thiệu ngắn" },
      { depth: 3, tag: "dl.stats", note: "ba số liệu, lặp cùng một cấu trúc" },
      { depth: 4, tag: "div.stat × 3", note: "dt là nhãn, dd là giá trị" },
      { depth: 3, tag: "footer.actions", note: "hai hành động cuối thẻ" },
      { depth: 4, tag: "button.btn-primary", note: "theo dõi, ghi lên MockAPI" },
      { depth: 4, tag: "a.btn-ghost", note: "đi tới danh sách dự án" },
      { depth: 3, tag: "p.feedback", note: "vùng thông báo cho trình đọc màn hình" }
    ],
    questions: [
      {
        q: "Thẻ có mấy vùng độc lập?",
        a: "Bốn vùng: đầu thẻ, giới thiệu, số liệu và hành động. Mỗi vùng là con trực tiếp của article nên CSS sau này chỉ cần xếp chúng theo trục dọc."
      },
      {
        q: "Phần nào lặp lại?",
        a: "Ba ô số liệu dùng chung một cấu trúc dt/dd. Tách thành div.stat để chỉ viết CSS một lần và kẻ đường phân cách bằng .stat + .stat."
      },
      {
        q: "Phần nào đến từ MockAPI?",
        a: "Tên, vai trò, giới thiệu, ba số liệu, trạng thái và cờ theo dõi. Nhãn tiếng Việt và bố cục là tĩnh, nằm sẵn trong HTML."
      }
    ],
    order: [
      "Chốt cây bố cục trên giấy, đánh dấu vùng lặp lại.",
      "Viết HTML từ ngoài vào trong, đủ thẻ đóng ở từng cấp.",
      "Kiểm tra bộ xương khi chưa có CSS: các vùng phải xếp đúng thứ tự đọc.",
      "Chỉ khi HTML ổn định mới chuyển sang CSS, lần lượt từ khung ngoài đến từng thành phần.",
      "Tạo resource MockAPI, dán base URL rồi mới viết JavaScript."
    ]
  },
  html: {
    title: "Dựng HTML từ ngoài vào trong",
    intro: "Mỗi bước dưới đây mở một cấp cha rồi mới đặt các cấp con vào. Đừng trang trí bằng CSS ở bước này: mục tiêu là bộ xương đúng ngữ nghĩa và đúng thứ tự đọc.",
    mindset: [
      "Thẻ cha quyết định vùng; thẻ con quyết định nội dung. Không viết con trước cha.",
      "Mỗi lần chỉ thêm một vùng, rồi tự đọc lại từ trên xuống dưới.",
      "Dùng thẻ mang nghĩa sẵn: main, article, header, footer, dl, button, a."
    ],
    steps: [
      {
        title: "Khung tài liệu và thẻ cha",
        why: "Đi từ ngoài vào trong: html, body, main.page rồi article.card. Mỗi cấp chỉ quyết định một việc. aria-labelledby nối tiêu đề với thẻ để trình đọc màn hình đọc đúng tên.",
        code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thẻ hồ sơ thành viên</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="page">
    <article class="card is-loading" aria-labelledby="memberName">
      <!-- các vùng con sẽ được đặt vào đây -->
    </article>
  </main>
  <script src="app.js" defer></script>
</body>
</html>`
      },
      {
        title: "Vùng đầu thẻ",
        why: "header là cha của ba vùng: avatar, chữ định danh và huy hiệu trạng thái. Đặt chúng vào cùng một hàng ngay từ HTML để CSS sau này chỉ việc chia cột, không phải đổi cấu trúc.",
        code: `<header class="card-head">
  <div class="avatar" id="avatar" aria-hidden="true">NA</div>
  <div class="identity">
    <p class="eyebrow">Thành viên nhóm</p>
    <h1 id="memberName">Đang tải…</h1>
    <p class="role" id="memberRole">—</p>
  </div>
  <span class="status" id="memberStatus">Đang tải</span>
</header>`
      },
      {
        title: "Phần giới thiệu và ba số liệu",
        why: "dl là danh sách mô tả: dt là nhãn, dd là giá trị. Mỗi cặp nhãn–giá trị nằm trong một div.stat để sau này kẻ đường phân cách và chia ba cột. Dùng dl thay vì ba div rời giúp ngữ nghĩa rõ hơn.",
        code: `<p class="bio" id="memberBio">Nội dung sẽ được lấy từ MockAPI.</p>

<dl class="stats">
  <div class="stat">
    <dt>Dự án</dt>
    <dd id="statProjects">—</dd>
  </div>
  <div class="stat">
    <dt>Người theo dõi</dt>
    <dd id="statFollowers">—</dd>
  </div>
  <div class="stat">
    <dt>Sao</dt>
    <dd id="statStars">—</dd>
  </div>
</dl>`
      },
      {
        title: "Hành động và vùng thông báo",
        why: "footer nhóm các hành động cuối thẻ. aria-pressed cho nút biết trạng thái bật tắt; role=status để lời thông báo được đọc lên. Chỉ khi bộ xương đã đủ vùng mới nên chuyển sang CSS.",
        code: `<footer class="actions">
  <button class="btn btn-primary" id="followBtn" type="button" aria-pressed="false">Theo dõi</button>
  <a class="btn btn-ghost" href="#du-an">Xem dự án</a>
</footer>
<p class="feedback" id="feedback" role="status"></p>`
      }
    ],
    rules: [
      "Đặt tên khối theo vai trò (card, card-head, stats), không theo màu hay vị trí.",
      "Viết đủ thẻ đóng ngay khi mở cặp để tránh lồng sai.",
      "Dữ liệu động luôn có id ổn định; chữ mẫu chỉ để nhìn thấy khung."
    ],
    check: [
      "Mỗi vùng con là con trực tiếp của article, không lồng thừa lớp bao.",
      "Tiêu đề thẻ có id và được aria-labelledby trỏ tới.",
      "Avatar chỉ để trang trí nên có aria-hidden; nút không submit có type=button."
    ]
  },
  css: {
    title: "Tô CSS từng thành phần, từ ngoài vào trong",
    intro: "Mỗi bước CSS chỉ chạm vào một lớp vừa dựng ở chặng HTML. Trước khi gõ, hãy đọc tác động dự kiến của từng thuộc tính; sau khi gõ, thu hẹp cửa sổ để xem thành phần đó có còn đúng không.",
    mindset: [
      "Thứ tự làm: nền trang, khung thẻ, hàng đầu, chữ, số liệu, nút, màn hình hẹp.",
      "Mỗi bước chỉ thêm CSS cho một thành phần; không sửa HTML nếu cây bố cục đã đúng.",
      "Khi một thuộc tính không tạo ra thay đổi nhìn thấy được, kiểm tra lại hộp cha trước khi thêm thuộc tính mới."
    ],
    steps: [
      {
        title: "Nền trang và khung ngoài",
        why: "Làm từ ngoài vào: ổn định hộp của mọi phần tử, đặt nền và căn giữa cả trang, cuối cùng giới hạn bề rộng thẻ. Chưa chạm vào chi tiết bên trong.",
        props: [
          { name: "box-sizing: border-box", effect: "padding và border nằm trong kích thước khai báo, nên thẻ không bị tràn." },
          { name: "display: grid + place-items: center", effect: "căn giữa thẻ theo cả hai trục mà không cần margin tự động." },
          { name: "min-height: 100vh", effect: "nền phủ hết chiều cao màn hình kể cả khi thẻ ngắn." },
          { name: "radial-gradient", effect: "tạo hai vùng sáng mờ, thêm chiều sâu mà không cần ảnh." },
          { name: "max-width: 520px", effect: "giới hạn độ dài dòng chữ, giữ thẻ dễ đọc trên màn hình lớn." }
        ],
        code: `:root {
  --bg: #eef2f6;
  --card: #ffffff;
  --ink: #12202c;
  --muted: #5f6f7c;
  --line: #e2e8ee;
  --brand: #0f9f8a;
  --brand-2: #7c5cff;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(1100px 560px at 12% 0%, #dff5ef, transparent 60%),
    radial-gradient(900px 520px at 100% 100%, #e9e3ff, transparent 58%),
    var(--bg);
}

.page {
  width: 100%;
  max-width: 520px;
}`
      },
      {
        title: "Khối thẻ và dải màu nhận diện",
        why: "Vẫn từ ngoài vào: tạo hình khối thẻ trước, rồi mới trang trí mép. ::before là lớp giả không cần thêm thẻ HTML, nhờ vậy bộ xương không bị nhiễu.",
        props: [
          { name: "padding: clamp(22px, 4vw, 34px)", effect: "khoảng đệm co giãn: nhỏ trên điện thoại, rộng trên màn hình lớn." },
          { name: "border-radius: 28px", effect: "bo mềm toàn bộ thẻ; dải màu phía trên phải bo cùng bán kính." },
          { name: "box-shadow", effect: "tách thẻ khỏi nền bằng bóng mờ phía dưới." },
          { name: "position: relative", effect: "biến thẻ thành gốc định vị cho lớp ::before." },
          { name: "inset: 0 0 auto", effect: "dải màu dính sát ba mép trên, chiều cao do height quyết định." }
        ],
        code: `.card {
  position: relative;
  padding: clamp(22px, 4vw, 34px);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 24px 60px rgba(18, 32, 44, 0.12);
}

.card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 6px;
  border-radius: 28px 28px 0 0;
  background: linear-gradient(90deg, var(--brand), var(--brand-2));
}`
      },
      {
        title: "Hàng đầu thẻ và avatar",
        why: "Chia hàng đầu thành ba cột: avatar cố định, phần chữ co giãn, huy hiệu cố định. minmax(0, 1fr) cho phép phần chữ co lại thay vì đẩy huy hiệu ra ngoài khi tên dài.",
        props: [
          { name: "grid-template-columns: auto minmax(0, 1fr) auto", effect: "cột trái và phải ôm nội dung, cột giữa chiếm phần còn lại và được phép co." },
          { name: "gap: 16px", effect: "khoảng cách đều giữa avatar, chữ và huy hiệu." },
          { name: "place-items: center trên avatar", effect: "chữ viết tắt nằm chính giữa ô vuông." },
          { name: "linear-gradient 135deg", effect: "avatar có màu chuyển từ xanh sang tím thay vì một màu phẳng." },
          { name: "min-width: 0 trên .identity", effect: "cho phép chữ bên trong xuống dòng thay vì làm tràn cột." }
        ],
        code: `.card-head {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
}

.avatar {
  width: 76px;
  height: 76px;
  border-radius: 22px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.14);
}

.identity { min-width: 0; }`
      },
      {
        title: "Chữ định danh và huy hiệu trạng thái",
        why: "Sau bố cục mới đến kiểu chữ. Nhãn nhỏ dùng chữ in hoa và giãn chữ để tách khỏi tên; huy hiệu dùng chấm tròn vẽ bằng ::before để không phải thêm thẻ trang trí.",
        props: [
          { name: "letter-spacing + text-transform", effect: "nhãn nhỏ trở thành dòng phân loại, không tranh độ nổi với tên." },
          { name: "line-height: 1.2 trên h1", effect: "tên hai dòng vẫn gọn, không tạo khoảng trống lớn." },
          { name: "border-radius: 999px", effect: "biến huy hiệu thành viên thuốc bo tròn hoàn toàn." },
          { name: "align-self: start", effect: "huy hiệu nằm ở mép trên hàng, không bị căn giữa theo avatar." },
          { name: "white-space: nowrap", effect: "huy hiệu không bị bẻ đôi khi bề rộng eo hẹp." }
        ],
        code: `.eyebrow {
  margin: 0 0 4px;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}

.identity h1 {
  margin: 0;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.role {
  margin: 3px 0 0;
  font-size: 0.9rem;
  color: var(--muted);
}

.status {
  align-self: start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #eaf8f4;
  color: #0a7d6c;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}

.status::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}`
      },
      {
        title: "Giới thiệu, số liệu và nút",
        why: "Đi tiếp xuống theo thứ tự đọc: bio, stats, actions. Mỗi vùng dùng một kiểu bố cục phù hợp: đoạn văn chỉ cần line-height, số liệu cần lưới ba cột, nút cần flex để chia đều.",
        props: [
          { name: "line-height: 1.65", effect: "đoạn giới thiệu dễ đọc hơn nhờ khoảng thở giữa các dòng." },
          { name: "grid-template-columns: repeat(3, 1fr)", effect: "ba số liệu chia đều và tự co theo bề rộng thẻ." },
          { name: ".stat + .stat { border-left }", effect: "chỉ kẻ vạch giữa các ô, không kẻ ở mép ngoài." },
          { name: "flex: 1 trên .btn", effect: "hai nút chia đều bề rộng hàng hành động." },
          { name: "aria-pressed chọn màu nền", effect: "trạng thái theo dõi được phản ánh bằng cả chữ và màu, không chỉ màu." }
        ],
        code: `.bio {
  margin: 20px 0 0;
  color: #40515f;
  font-size: 0.92rem;
  line-height: 1.65;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 22px 0 0;
  padding: 16px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stat { text-align: center; }
.stat + .stat { border-left: 1px solid var(--line); }

.stat dt {
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.stat dd {
  margin: 6px 0 0;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 22px;
}

.btn {
  flex: 1;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: 12px;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}

.btn:hover { transform: translateY(-1px); }

.btn:focus-visible {
  outline: 3px solid rgba(124, 92, 255, 0.35);
  outline-offset: 2px;
}

.btn-primary {
  background: var(--ink);
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(18, 32, 44, 0.2);
}

.btn-primary:hover { background: #1c3143; }
.btn-primary[aria-pressed="true"] { background: var(--brand); }

.btn-ghost {
  background: #f5f7fa;
  border-color: var(--line);
  color: var(--ink);
}

.btn-ghost:hover { background: #eef2f6; }

.feedback {
  min-height: 18px;
  margin: 10px 2px 0;
  font-size: 0.78rem;
  color: var(--muted);
}

.feedback.is-error { color: #c2383f; }

.card.is-loading .avatar,
.card.is-loading .status { opacity: 0.6; }

.card.is-loading .bio { opacity: 0.55; }`
      },
      {
        title: "Màn hình hẹp",
        why: "Bước cuối là cho bố cục tự thích nghi. Chỉ đổi lưới và hướng flex, không đổi kích thước chữ để tránh phải chỉnh lại toàn bộ.",
        props: [
          { name: "@media (max-width: 480px)", effect: "chỉ áp dụng khi bề rộng khung nhìn nhỏ hơn 480px." },
          { name: "grid-template-columns: auto 1fr", effect: "hàng đầu còn hai cột; huy hiệu rơi xuống hàng dưới." },
          { name: "grid-column: 1 / -1", effect: "huy hiệu chiếm trọn hàng mới thay vì chen vào cột phải." },
          { name: "flex-direction: column", effect: "hai nút xếp dọc, mỗi nút rộng hết thẻ để dễ chạm." }
        ],
        code: `@media (max-width: 480px) {
  .card-head { grid-template-columns: auto minmax(0, 1fr); }
  .status { grid-column: 1 / -1; justify-self: start; }
  .actions { flex-direction: column; }
}`
      }
    ],
    responsive: [
      "Thu hẹp cửa sổ xuống 390px: huy hiệu phải xuống hàng, hai nút phải xếp dọc.",
      "Tên dài 40 ký tự phải xuống dòng trong cột giữa, không đẩy huy hiệu ra ngoài."
    ],
    rules: [
      "Mỗi bước CSS chỉ nhắm vào lớp của bước đó; không sửa HTML.",
      "Đọc tác động trước khi gõ, kiểm tra bằng mắt sau khi gõ.",
      "Ưu tiên biến CSS cho màu và bán kính để đổi giao diện một chỗ."
    ]
  },
  api: {
    title: "Tạo MockAPI và chốt dữ liệu",
    intro: "MockAPI cho một endpoint REST công khai để luyện tập. Chỉ cần một resource members và một bản ghi id=1 là đủ cho thẻ hồ sơ.",
    setup: [
      { title: "Tạo project", detail: "Đăng nhập mockapi.io, tạo project mới tên frontlab-profile. MockAPI cấp base URL dạng https://<mã>.mockapi.io/api/v1." },
      { title: "Tạo resource members", detail: "Khai báo các trường: name (String), role (String), bio (String), projects (Number), followers (Number), stars (Number), available (Boolean), following (Boolean)." },
      { title: "Sinh và sửa dữ liệu", detail: "Bấm Generate để tạo vài bản ghi, rồi sửa bản ghi id=1 thành hồ sơ bạn muốn hiển thị." },
      { title: "Dán base URL", detail: "Thay YOUR_PROJECT trong API_BASE của app.js bằng mã project. Không dán khóa bí mật vì MockAPI công khai." }
    ],
    endpoints: [
      { method: "GET", path: "/members/1", desc: "Lấy hồ sơ để tô thẻ", result: "200 + object" },
      { method: "PUT", path: "/members/1", desc: "Ghi đè trường following", result: "200 + object" },
      { method: "PATCH", path: "/members/1", desc: "Chỉ cập nhật trường gửi lên", result: "200 + object" }
    ],
    sample: {
      id: "1",
      name: "Nguyễn An Nhiên",
      role: "Frontend Engineer",
      bio: "Mình thích biến bản vẽ thành giao diện chạy được.",
      projects: 18,
      followers: 1240,
      stars: 386,
      available: true,
      following: false
    },
    rules: [
      "MockAPI là công khai: chỉ dùng dữ liệu giả, không đưa email hay số điện thoại thật.",
      "Kiểm tra response.ok trước khi đọc JSON; 404 thường do sai id hoặc sai base URL.",
      "Sau khi PUT/PATCH, mở dashboard MockAPI để xác nhận dữ liệu đã đổi."
    ],
    mockNote: "Khung xem trước không gọi mạng. Một lớp mô phỏng chặn fetch và trả dữ liệu mẫu sau 500ms, nên mã app.js giữ nguyên khi bạn chuyển sang MockAPI thật."
  },
  js: {
    title: "Nối dữ liệu và hành vi bằng JavaScript",
    intro: "JavaScript chỉ làm ba việc: lấy dữ liệu, tô vào chỗ đã có id, và ghi lại khi người dùng bấm. Không tạo HTML mới cho thẻ hồ sơ để giữ bộ xương ổn định.",
    mindset: [
      "Chọn phần tử một lần khi trang tải, lưu vào object els.",
      "Tách hàm paint khỏi hàm fetch: fetch lo mạng, paint lo hiển thị.",
      "Luôn có ba trạng thái: đang tải, có dữ liệu, lỗi."
    ],
    steps: [
      {
        title: "Chọn phần tử và khai báo trạng thái",
        why: "Gom mọi truy vấn DOM vào một chỗ để không phải gọi document.getElementById rải rác. state chỉ giữ dữ liệu cần cho hành vi, không giữ bản sao của DOM.",
        code: `const API_BASE = "https://YOUR_PROJECT.mockapi.io/api/v1";
const MEMBER_URL = API_BASE + "/members/1";

const els = {
  card: document.querySelector(".card"),
  name: document.getElementById("memberName"),
  role: document.getElementById("memberRole"),
  bio: document.getElementById("memberBio"),
  avatar: document.getElementById("avatar"),
  status: document.getElementById("memberStatus"),
  projects: document.getElementById("statProjects"),
  followers: document.getElementById("statFollowers"),
  stars: document.getElementById("statStars"),
  follow: document.getElementById("followBtn"),
  feedback: document.getElementById("feedback")
};

const state = {
  member: null,
  following: false
};`
      },
      {
        title: "Hàm phụ và hàm tô dữ liệu",
        why: "initials và formatNumber là hai hàm thuần, dễ kiểm tra riêng. paint chỉ đọc object member và ghi vào DOM; nhờ vậy cùng một hàm dùng được cho lần tải đầu và lần cập nhật sau.",
        code: `function initials(name) {
  return String(name || "")
    .trim()
    .split(/\\s+/)
    .slice(-2)
    .map(function (word) { return word.charAt(0).toUpperCase(); })
    .join("");
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("vi-VN");
}

function paintStatus(member) {
  const online = Boolean(member.available);
  els.status.textContent = online ? "Sẵn sàng nhận việc" : "Đang bận";
  els.status.style.background = online ? "" : "#fff1e6";
  els.status.style.color = online ? "" : "#b45309";
}

function paint(member) {
  els.name.textContent = member.name || "Chưa có tên";
  els.role.textContent = member.role || "Chưa cập nhật vai trò";
  els.bio.textContent = member.bio || "Chưa có phần giới thiệu.";
  els.avatar.textContent = initials(member.name);
  els.projects.textContent = formatNumber(member.projects);
  els.followers.textContent = formatNumber(member.followers);
  els.stars.textContent = formatNumber(member.stars);
  paintStatus(member);
  els.card.classList.remove("is-loading");
}`
      },
      {
        title: "Gọi MockAPI và xử lý lỗi",
        why: "fetch chỉ ném lỗi khi mất mạng; mã 404 vẫn trả về response bình thường. Vì vậy phải kiểm tra response.ok. Khối catch đưa thẻ về trạng thái đọc được thay vì để trắng.",
        code: `async function loadMember() {
  els.feedback.textContent = "Đang tải hồ sơ từ MockAPI…";
  try {
    const response = await fetch(MEMBER_URL);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const member = await response.json();
    state.member = member;
    paint(member);
    els.feedback.textContent = "";
  } catch (error) {
    els.card.classList.remove("is-loading");
    els.name.textContent = "Không tải được hồ sơ";
    els.role.textContent = "Kiểm tra kết nối mạng";
    els.feedback.textContent = "Lỗi: " + error.message + ". Kiểm tra API_BASE trong app.js.";
    els.feedback.classList.add("is-error");
  }
}`
      },
      {
        title: "Ghi trạng thái theo dõi",
        why: "Đổi giao diện ngay rồi mới gửi PUT để người dùng thấy phản hồi tức thì. Nếu mạng lỗi, thông báo nằm ở feedback và aria-pressed vẫn phản ánh trạng thái đã chọn.",
        code: `function paintFollow(saving) {
  els.follow.textContent = state.following ? "Đang theo dõi" : "Theo dõi";
  els.follow.setAttribute("aria-pressed", String(state.following));
  els.feedback.classList.remove("is-error");
  els.feedback.textContent = saving ? "Đang lưu lên MockAPI…" : "";
}

async function toggleFollow() {
  state.following = !state.following;
  paintFollow(true);
  try {
    const response = await fetch(MEMBER_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ following: state.following })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    els.feedback.textContent = state.following
      ? "Đã lưu trạng thái theo dõi."
      : "Đã bỏ theo dõi.";
  } catch (error) {
    els.feedback.textContent = "Chưa lưu được lên MockAPI: " + error.message;
    els.feedback.classList.add("is-error");
  }
}

els.follow.addEventListener("click", toggleFollow);
loadMember();`
      }
    ],
    tests: [
      "Mở Network trong DevTools: chỉ có một yêu cầu GET /members/1 khi tải trang.",
      "Bấm Theo dõi: nút đổi chữ, aria-pressed đổi true, dashboard MockAPI đổi following.",
      "Đổi API_BASE thành địa chỉ sai: thẻ hiện thông báo lỗi thay vì trắng trang.",
      "Xem trên điện thoại: hai nút xếp dọc và bấm được bằng ngón tay."
    ],
    rules: [
      "Không dùng innerHTML cho dữ liệu từ API; textContent an toàn hơn.",
      "Giữ một hàm paint duy nhất để mọi cập nhật đi qua cùng một đường.",
      "Gắn sự kiện sau khi đã chọn được phần tử, không gắn trong vòng lặp."
    ]
  },
  done: {
    title: "Kiểm tra và mở rộng",
    intro: "Một dự án mẫu chỉ có giá trị khi bạn kiểm tra nó như người dùng thật. Đi hết danh sách dưới đây, rồi chọn một hướng mở rộng để luyện thêm.",
    checklist: [
      "Mở trang khi mất mạng: thẻ hiện thông báo lỗi rõ ràng, không trắng trang.",
      "Tên dài 40 ký tự vẫn xuống dòng trong thẻ, không tràn ra ngoài.",
      "Nút theo dõi đổi chữ và aria-pressed sau mỗi lần bấm.",
      "Ở bề rộng 390px, huy hiệu trạng thái xuống hàng và hai nút xếp dọc.",
      "Dữ liệu trên dashboard MockAPI đổi sau khi bấm theo dõi.",
      "Bàn phím: Tab tới nút, Enter kích hoạt, viền focus nhìn thấy rõ."
    ],
    extend: [
      "Thêm ảnh đại diện thật với trường avatar (URL) và thẻ img có alt.",
      "Thêm nút Chia sẻ dùng navigator.share khi trình duyệt hỗ trợ.",
      "Hiển thị skeleton ba dòng trong lúc chờ fetch thay vì chữ Đang tải.",
      "Đổi PUT thành PATCH để chỉ gửi trường following thay vì toàn bộ bản ghi."
    ],
    mistakes: [
      { title: "Quên response.ok", fix: "fetch không ném lỗi khi 404; phải kiểm tra response.ok rồi mới gọi response.json()." },
      { title: "Gán null vào textContent", fix: "MockAPI có thể trả trường thiếu; dùng giá trị mặc định trước khi hiển thị." },
      { title: "Nút không có type", fix: "Nếu đặt trong form, nút phải có type=button, nếu không trang sẽ tải lại." }
    ]
  }
});
