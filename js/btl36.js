/* FrontLab — thư viện 36 website môn học BTL36 */
(function () {
  "use strict";

  const CATALOG = window.BTL36_CATALOG || [];
  const view = document.getElementById("view");
  const esc = (v) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  const state = { q: "", group: "all", level: "all" };

  function groups() {
    const map = new Map();
    CATALOG.forEach((x) => map.set(x.group, (map.get(x.group) || 0) + 1));
    return Array.from(map, ([name, count]) => ({ name, count }));
  }

  function filtered() {
    const q = norm(state.q).trim();
    return CATALOG.filter((x) => {
      if (state.group !== "all" && x.group !== state.group) return false;
      if (state.level !== "all" && x.level !== state.level) return false;
      if (!q) return true;
      return norm([x.code, x.name, x.subject, x.tagline, x.group, x.lab].join(" ")).includes(q);
    });
  }

  function card(x, i) {
    return '<article class="b36-card" style="--c:' + esc(x.accent) + ';--c2:' + esc(x.accent2) + ';--d:' + (i % 12) * 22 + 'ms">' +
      '<div class="b36-card-top"><span class="b36-mono">' + esc(x.monogram) + '</span><span class="b36-code">' + esc(x.code) + '</span></div>' +
      '<div class="b36-card-sub">' + esc(x.subject) + ' · ' + esc(x.level) + '</div>' +
      '<h3><a class="b36-hit" href="btl36/' + esc(x.slug) + '/index.html">' + esc(x.name) + '</a></h3>' +
      '<p>' + esc(x.tagline) + '</p>' +
      '<div class="b36-lab"><span>LAB</span>' + esc(x.lab) + '</div>' +
      '<div class="b36-card-foot"><span class="b36-open">Mở website <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5"/></svg></span>' +
      '<a class="b36-brief" href="btl36/briefs/' + esc(x.brief) + '" target="_blank" rel="noopener">Brief</a></div>' +
    '</article>';
  }

  function paint() {
    const items = filtered();
    const grid = document.getElementById("b36Grid");
    const count = document.getElementById("b36Count");
    if (!grid) return;
    grid.innerHTML = items.map(card).join("");
    if (count) count.textContent = items.length + "/" + CATALOG.length + " website";
    const empty = document.getElementById("b36Empty");
    if (empty) empty.hidden = items.length > 0;
  }

  function chips() {
    const all = '<button class="b36-chip' + (state.group === "all" ? " is-on" : "") + '" type="button" data-group="all">Tất cả <span>' + CATALOG.length + '</span></button>';
    return all + groups().map((g) => '<button class="b36-chip' + (state.group === g.name ? " is-on" : "") + '" type="button" data-group="' + esc(g.name) + '">' + esc(g.name) + ' <span>' + g.count + '</span></button>').join("");
  }

  function renderList() {
    document.title = "BTL36 — 36 website môn học | FrontLab";
    const levels = Array.from(new Set(CATALOG.map((x) => x.level)));
    const mosaic = CATALOG.slice(0, 12).map((x) => '<span style="--c:' + esc(x.accent) + ';--c2:' + esc(x.accent2) + '">' + esc(x.monogram) + '</span>').join("");
    view.innerHTML = '<div class="b36-index">' +
      '<section class="b36-hero">' +
        '<div class="b36-hero-copy">' +
          '<div class="eyebrow">THƯ VIỆN ĐỒ ÁN · CSE122</div>' +
          '<h1>36 website môn học <span class="hl">chạy được ngay</span></h1>' +
          '<p>Mỗi đồ án là một website hoàn chỉnh cho một môn học: bài giảng từng bước, phòng lab tương tác theo đặc thù môn, ba liên tưởng đời sống cho từng chương, không gian 2D/3D xoay ngắm bản đồ môn học, thẻ ghi nhớ, trắc nghiệm và không gian giảng viên. Mở là dùng, không cần cài đặt.</p>' +
          '<div class="b36-hero-actions"><a class="b36-btn primary" href="#/btl36" data-b36-scroll>Khám phá thư viện</a><a class="b36-btn" href="btl36/calculuslab/index.html#/space">Xem không gian 3D mẫu</a></div>' +
          '<div class="b36-hero-stats"><span><b>36</b> môn học</span><span><b>9</b> bài mỗi site</span><span><b>3</b> liên tưởng đời sống</span><span><b>19</b> kiểu lab</span></div>' +
        '</div>' +
        '<div class="b36-hero-art" aria-hidden="true"><div class="b36-mosaic">' + mosaic + '</div><div class="b36-art-note"><b>BTL36</b><span>Mỗi môn một nhận diện, một phòng lab, một lộ trình.</span></div></div>' +
      '</section>' +
      '<section class="b36-toolbar" aria-label="Bộ lọc website">' +
        '<label class="b36-search"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg><input id="b36Search" type="search" placeholder="Tìm theo môn, tên site, chủ đề..." autocomplete="off"></label>' +
        '<label class="b36-select">Trình độ<select id="b36Level"><option value="all">Tất cả</option>' + levels.map((l) => '<option value="' + esc(l) + '">' + esc(l) + '</option>').join("") + '</select></label>' +
        '<span class="b36-count" id="b36Count">' + CATALOG.length + "/" + CATALOG.length + ' website</span>' +
      '</section>' +
      '<div class="b36-chips" id="b36Chips" role="group" aria-label="Lọc theo nhóm môn">' + chips() + '</div>' +
      '<section class="b36-grid" id="b36Grid">' + filtered().map(card).join("") + '</section>' +
      '<div class="b36-empty" id="b36Empty" hidden><b>Không tìm thấy website phù hợp</b><span>Thử từ khóa khác hoặc bỏ bộ lọc nhóm môn.</span></div>' +
      '<section class="b36-note"><div><div class="eyebrow">CÁCH KHAI THÁC</div><h2>Dùng trong lớp, dùng để học, dùng làm mẫu</h2></div>' +
        '<div class="b36-note-grid"><div><b>Giảng viên</b><p>Chiếu phòng lab và bài giảng từng bước khi lên lớp; dùng tab giảng dạy để điểm danh tiến độ và giao bài.</p></div>' +
        '<div><b>Sinh viên</b><p>Học theo chương, đọc liên tưởng đời sống, xoay bản đồ 2D/3D, lật thẻ công thức, làm trắc nghiệm có giải thích và xem tiến độ lưu trên máy.</p></div>' +
        '<div><b>Người làm đồ án</b><p>Đọc brief gốc cạnh từng website để đối chiếu yêu cầu, rồi tái sử dụng cấu trúc cho sản phẩm của mình.</p></div></div>' +
      '</section>' +
      '<footer class="b36-foot">BTL36 · 36 website môn học cho đồ án CSE122 · Dữ liệu và tiến độ lưu cục bộ trên trình duyệt.</footer>' +
    '</div>';

    const search = document.getElementById("b36Search");
    search.addEventListener("input", (e) => { state.q = e.target.value; paint(); });
    document.getElementById("b36Level").addEventListener("change", (e) => { state.level = e.target.value; paint(); });
    document.getElementById("b36Chips").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-group]");
      if (!btn) return;
      state.group = btn.dataset.group;
      document.querySelectorAll("#b36Chips .b36-chip").forEach((c) => c.classList.toggle("is-on", c === btn));
      paint();
    });
    const scroll = view.querySelector("[data-b36-scroll]");
    if (scroll) scroll.addEventListener("click", (e) => { e.preventDefault(); const t = document.querySelector(".b36-toolbar"); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
  }

  window.BTL36 = { renderList: renderList };
})();
