/* FrontLab — cấu hình CSS Playground cho 12 bài CSS (HTML minh họa + điều khiển giá trị) */
(function () {
  "use strict";

  window.CSS_PLAYGROUND = {
    "css-selectors": {
      target: ".card.featured",
      extras: [],
      html: `
<section data-state="open" class="demo-block">
  <article class="card" style="background:#fffdf8">
    <h2>Card trong vùng mở</h2>
    <p>Card thường, chỉ có class card.</p>
  </article>
  <article class="card featured" style="background:#fffdf8">
    <h2>Card nổi bật</h2>
    <p>Vừa card vừa featured nên có viền xanh.</p>
  </article>
  <div class="demo-nested">
    <h2>Tiêu đề lồng hai cấp</h2>
    <p>Nằm trong div con nên không khớp .card &gt; h2.</p>
  </div>
</section>
<section data-state="closed" class="demo-block">
  <article class="card" style="background:#fffdf8">
    <h2>Card trong vùng đóng</h2>
    <p>data-state="closed" nên rule trạng thái mở không áp dụng.</p>
  </article>
</section>`,
      controls: [
        { sel: ".card", prop: "padding", type: "range", min: 0, max: 40, step: 4, unit: "px", note: "Padding áp cho mọi card, kể cả card nổi bật và card trong vùng đóng." },
        { sel: ".card.featured", prop: "border", type: "select", options: ["2px solid #0f9f8a", "6px dashed #e05d3d", "0"], note: "Chỉ card có cả hai class mới nhận viền." },
        { sel: ".card > h2", prop: "margin", type: "range", min: 0, max: 24, step: 4, unit: "px", note: "Chỉ h2 con trực tiếp của card bị đổi; h2 lồng trong div vẫn theo margin của khung xem trước." },
        { sel: "[data-state=\"open\"] .card", prop: "display", type: "select", options: ["block", "flex", "none"], note: "none ẩn toàn bộ card trong vùng mở, chứng minh selector đang khớp đúng phạm vi." }
      ]
    },

    "cascade-specificity": {
      target: "#hero .card.featured",
      extras: ["var()", "!important"],
      html: `
<section id="hero" style="background:#14202d;padding:20px;border-radius:14px;margin-bottom:16px">
  <article class="card featured" style="padding:16px;border-radius:10px">
    <h2>Card nổi bật trong hero</h2>
    <p>Chịu tác động của #hero .card và .card.featured.</p>
  </article>
</section>
<article class="card" style="background:#fffdf8;padding:16px;border-radius:10px">
  <h2>Card thường ngoài hero</h2>
  <p>Chỉ có rule .card.</p>
</article>
<article class="card featured" style="background:#fffdf8;padding:16px;border-radius:10px">
  <h2>Card nổi bật ngoài hero</h2>
  <p>Nhận màu brand từ .card.featured.</p>
</article>`,
      controls: [
        { sel: ":root", prop: "--brand", type: "color", note: "Đổi token gốc, card featured đổi màu ngay vì dùng var(--brand)." },
        { sel: "#hero .card", prop: "color", type: "color", note: "Id + class thắng class thường, nên card trong hero đổi màu chữ." },
        { sel: ".card.featured", prop: "color", type: "select", options: ["var(--brand)", "#e8ab2e", "#e05d3d"], note: "Rule này thắng .card nhưng thua #hero .card khi cùng khai báo color." },
        { sel: ".card", prop: "color", type: "select", nth: 1, options: ["#ff0000 !important", "#ff0000", "#14202d"], note: "Khai báo cuối cùng: bỏ !important để thấy cascade thật sự chọn màu theo specificity." }
      ]
    },

    "box-model": {
      target: ".card",
      extras: [],
      html: `
<article class="card" style="background:#fffdf8">
  <h2>Một chiếc hộp đầy đủ</h2>
  <p>Nội dung nằm trong content; padding là lớp đệm; border là viền; margin là khoảng trống bên ngoài.</p>
</article>`,
      controls: [
        { sel: ".card", prop: "width", type: "range", min: 200, max: 380, step: 20, unit: "px", note: "Với border-box, width là kích thước cuối gồm cả padding và viền." },
        { sel: ".card", prop: "padding", type: "range", min: 0, max: 48, step: 4, unit: "px", note: "Padding ăn vào bên trong hộp; đổi sang content-box để thấy hộp phình ra." },
        { sel: ".card", prop: "border", type: "select", options: ["4px solid #0f9f8a", "12px dashed #e05d3d", "0"], note: "Viền dày làm vùng nội dung hẹp lại khi dùng border-box." },
        { sel: ".card", prop: "margin", type: "range", min: 0, max: 48, step: 4, unit: "px", note: "Margin đẩy hộp khỏi các phần tử xung quanh, không nằm trong width." },
        { sel: ".card", prop: "box-sizing", type: "select", options: ["border-box", "content-box"], note: "content-box cộng thêm padding và viền vào width, hộp rộng hơn 320px." }
      ]
    },

    "colors-typography": {
      target: "h1",
      extras: ["var()", "clamp()"],
      html: `
<h1>Giao diện đọc được từng thay đổi</h1>
<p>Màu chữ chính lấy từ token --ink, kế thừa xuống toàn bộ nội dung.</p>
<p style="color:var(--muted)">Dòng phụ dùng --muted để giảm nhấn nhưng vẫn đủ tương phản.</p>
<p><span style="display:inline-block;background:var(--brand);color:#fff;padding:4px 12px;border-radius:999px">Nhãn thương hiệu</span></p>
<p>Đổi font, cỡ chữ và line-height để cảm nhận nhịp đọc khác nhau.</p>`,
      controls: [
        { sel: ":root", prop: "--ink", type: "color", note: "Màu chữ chính; body dùng var(--ink) nên mọi đoạn văn đổi theo." },
        { sel: ":root", prop: "--muted", type: "color", note: "Màu chữ phụ dùng cho dòng mô tả; cần giữ tương phản đủ đọc." },
        { sel: ":root", prop: "--brand", type: "color", note: "Token thương hiệu được nhãn nhỏ tham chiếu." },
        { sel: "body", prop: "font-family", type: "select", options: ["\"Be Vietnam Pro\", sans-serif", "Georgia, serif", "\"IBM Plex Mono\", monospace"], note: "Danh sách font dừng ở font đầu tiên có sẵn trên máy." },
        { sel: "body", prop: "line-height", type: "range", min: 1.2, max: 2, step: 0.1, unit: "", note: "Tăng line-height làm đoạn văn thoáng hơn, dễ đọc hơn." },
        { sel: "h1", prop: "font-size", type: "select", options: ["clamp(2rem, 5vw, 4rem)", "clamp(1.6rem, 3vw, 2.4rem)", "3rem"], note: "clamp co giãn theo bề rộng nhưng không vượt quá mức tối đa." }
      ]
    },

    "units-sizing": {
      target: ".hero",
      extras: ["var()", "clamp()", "min()"],
      html: `
<section class="hero" style="background:#fffdf8;border:1px solid #dcd6c9;border-radius:14px">
  <h2>Chiều cao theo khung nhìn</h2>
  <p>min-height: 100svh dùng đơn vị khung nhìn nhỏ, ổn định trên điện thoại.</p>
  <div class="card" style="background:#e0f7f2;padding:16px">Card bo góc theo rem</div>
</section>`,
      controls: [
        { sel: ".hero", prop: "min-height", type: "select", options: ["100svh", "55svh", "auto"], note: "100svh chiếm trọn khung nhìn; auto chỉ cao bằng nội dung." },
        { sel: ".hero", prop: "padding", type: "select", options: ["clamp(1.5rem, 4vw, 4rem)", "1rem", "4rem"], note: "clamp cho padding co giãn: nhỏ trên mobile, lớn trên desktop nhưng có trần." },
        { sel: ".hero", prop: "max-width", type: "range", min: 24, max: 72, step: 4, unit: "rem", note: "max-width chặn hero quá rộng trên màn hình lớn." },
        { sel: ".hero", prop: "width", type: "select", options: ["min(100% - 2rem, 72rem)", "100%", "80%"], note: "min() giữ lề hai bên; 100% sát khung; 80% thu hẹp để so sánh." },
        { sel: ".card", prop: "border-radius", type: "range", min: 0, max: 24, step: 2, unit: "px", note: "Bo góc tính bằng rem/px; giá trị lớn hơn nửa cạnh ngắn sẽ thành hình bầu." }
      ]
    },

    "flexbox": {
      target: ".toolbar",
      extras: [],
      html: `
<div class="toolbar" style="background:#fffdf8;border:1px solid #dcd6c9;border-radius:12px;padding:14px;min-height:120px">
  <h2>Danh sách công việc</h2>
  <div class="actions">
    <button type="button">Lọc</button>
    <button type="button" style="padding-top:18px;padding-bottom:18px">Lưu thay đổi</button>
    <button type="button">Xuất</button>
  </div>
</div>`,
      controls: [
        { sel: ".toolbar", prop: "justify-content", type: "select", options: ["space-between", "flex-start", "center", "flex-end", "space-around", "space-evenly"], note: "Phân bố theo trục chính; space-between đẩy hai đầu ra xa nhau." },
        { sel: ".toolbar", prop: "align-items", type: "select", options: ["center", "stretch", "flex-start", "flex-end"], note: "Căn theo trục phụ; nút cao thấp khác nhau cho thấy khác biệt rõ." },
        { sel: ".toolbar", prop: "gap", type: "range", min: 0, max: 32, step: 4, unit: "px", note: "Gap tạo khoảng cách đều, không cần margin từng mục." },
        { sel: ".toolbar", prop: "flex-wrap", type: "select", options: ["wrap", "nowrap"], note: "nowrap ép mọi thứ một hàng và có thể bóp nội dung; wrap cho phép xuống dòng." },
        { sel: ".actions", prop: "flex", type: "select", options: ["1 1 200px", "1", "0 0 auto"], note: "1 1 200px cho nhóm nút lớn lên và co lại quanh nền 200px." }
      ]
    },

    "grid": {
      target: ".gallery",
      extras: ["repeat()", "minmax()"],
      html: `
<section class="gallery">
  <div class="tile" style="height:86px">01</div>
  <div class="tile" style="height:86px">02</div>
  <div class="tile" style="height:86px">03</div>
  <div class="tile" style="height:86px">04</div>
  <div class="tile" style="height:86px">05</div>
  <div class="tile" style="height:86px">06</div>
</section>
<section class="feature" style="margin-top:20px">
  <div>
    <h2>Khối nổi bật</h2>
    <p>Chữ ở cột trái; vùng hình span 2 nên trải hết chiều ngang bên dưới.</p>
  </div>
  <div class="visual" style="height:90px;background:#e0f7f2;border-radius:10px"></div>
</section>`,
      controls: [
        { sel: ".gallery", prop: "grid-template-columns", type: "select", options: ["repeat(auto-fit, minmax(220px, 1fr))", "repeat(2, 1fr)", "1fr"], note: "auto-fit tự chọn số cột; repeat(2, 1fr) cố định hai cột; 1fr thành một cột." },
        { sel: ".gallery", prop: "gap", type: "range", min: 0, max: 32, step: 4, unit: "px", note: "Gap tạo cả khoảng ngang lẫn dọc giữa các ô." },
        { sel: ".feature", prop: "grid-template-columns", type: "select", options: ["1fr 2fr", "1fr 1fr", "1fr"], note: "Tỉ lệ cột đổi bố cục giữa chữ và hình." },
        { sel: ".feature .visual", prop: "grid-column", type: "select", options: ["span 2", "auto", "1"], note: "span 2 cho vùng hình chiếm cả hai cột, đẩy nó xuống hàng dưới." }
      ]
    },

    "responsive-design": {
      target: ".grid",
      view: "768",
      extras: ["repeat()"],
      html: `
<section class="grid">
  <div class="tile" style="height:70px">01</div>
  <div class="tile" style="height:70px">02</div>
  <div class="tile" style="height:70px">03</div>
  <div class="tile" style="height:70px">04</div>
  <div class="tile" style="height:70px">05</div>
  <div class="tile" style="height:70px">06</div>
</section>
<div style="margin-top:20px">
  <img alt="Minh họa ảnh rộng" style="border-radius:10px" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='240'%3E%3Crect width='900' height='240' fill='%230f9f8a'/%3E%3Ctext x='450' y='130' font-family='sans-serif' font-size='34' fill='%23fffdf8' text-anchor='middle'%3EẢnh rộng 900px%3C/text%3E%3C/svg%3E">
</div>`,
      controls: [
        { sel: ".grid", prop: "grid-template-columns", nth: 1, label: "grid-template-columns (media)", type: "select", options: ["repeat(3, 1fr)", "repeat(2, 1fr)", "1fr"], note: "Khai báo nằm trong media query: chỉ áp dụng khi khung đạt 48rem (768px). Đổi để thấy số cột thay đổi." },
        { sel: ".grid", prop: "gap", type: "range", min: 0, max: 32, step: 4, unit: "px", note: "Gap giữ đều ở cả bố cục một cột và ba cột." },
        { sel: "img", prop: "max-width", type: "select", options: ["100%", "60%"], note: "max-width 100% giữ ảnh không tràn; giảm xuống 60% để thấy ảnh co theo khung." }
      ],
      hint: "Bài mở sẵn ở 768px để thấy media query. Bấm 390 hoặc 100% phía trên để so sánh bố cục."
    },

    "positioning": {
      target: ".badge",
      extras: [],
      html: `
<header class="site-header" style="background:#14202d;color:#fffdf8;padding:12px 16px;border-radius:10px">
  Thanh đầu trang (sticky)
</header>
<article class="card" style="position:relative;background:#fffdf8;margin-top:16px;padding:20px">
  <span class="badge" style="background:#0f9f8a;color:#fff">Mới</span>
  <h2>Card có nhãn nổi</h2>
  <p>Badge nằm tuyệt đối trong card, không đẩy nội dung.</p>
  <p>Cuộn xuống trong khung xem trước để thấy header dính lại.</p>
  <p>Nội dung dài giúp kiểm tra sticky: dòng 1, dòng 2, dòng 3, dòng 4, dòng 5, dòng 6, dòng 7.</p>
  <p>Thêm vài đoạn nữa để có chỗ cuộn. Đổi position của header sang static sẽ thấy nó trôi đi.</p>
  <p>Hết nội dung minh họa.</p>
</article>`,
      controls: [
        { sel: ".badge", prop: "position", type: "select", options: ["absolute", "fixed", "relative", "static"], note: "absolute neo vào card; fixed neo vào khung nhìn; static quay lại luồng." },
        { sel: ".badge", prop: "top", type: "range", min: 0, max: 48, step: 4, unit: "px", note: "Khoảng cách từ mép trên vùng chứa." },
        { sel: ".badge", prop: "right", type: "range", min: 0, max: 48, step: 4, unit: "px", note: "Khoảng cách từ mép phải vùng chứa." },
        { sel: ".site-header", prop: "position", type: "select", options: ["sticky", "static", "fixed"], note: "sticky dính khi cuộn; static trôi theo nội dung; fixed luôn bám khung nhìn." },
        { sel: ".site-header", prop: "top", type: "range", min: 0, max: 40, step: 4, unit: "px", note: "Với sticky, top là ngưỡng bắt đầu dính." }
      ],
      hint: "Cuộn bên trong khung xem trước để kiểm tra sticky và badge."
    },

    "transitions-animation": {
      target: ".button",
      extras: ["translateY()"],
      html: `
<p style="margin-bottom:12px">Đưa chuột lên nút để xem transition; chấm tròn chạy keyframes pulse.</p>
<button class="button" type="button">Lưu thay đổi</button>
<span style="display:inline-block;width:14px;height:14px;margin-left:12px;border-radius:50%;background:#0f9f8a;animation:pulse 1.6s ease-in-out infinite"></span>
<p style="margin-top:16px;color:#5d6a77">Chấm tròn dùng animation: pulse — keyframes chỉ có tác dụng khi được gọi.</p>`,
      controls: [
        { sel: ".button", prop: "transition", type: "select", options: ["transform 180ms ease, background 180ms ease", "transform 900ms ease", "none"], note: "Liệt kê thuộc tính cụ thể; none tắt chuyển tiếp hoàn toàn." },
        { sel: ".button:hover", prop: "transform", type: "select", options: ["translateY(-2px)", "translateY(-12px)", "scale(1.08)"], note: "Biến đổi chỉ khi hover; transform không làm xê dịch các phần tử khác." },
        { sel: ".button", prop: "background", type: "color", note: "Áp màu nền qua background; background viết tắt có thể đặt lại ảnh nền." }
      ],
      hint: "Hover nút trong khung để thấy transition; bấm Đặt lại nếu đã đổi nhiều giá trị."
    },

    "design-system": {
      target: ".btn--primary",
      extras: ["var()"],
      html: `
<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px">
  <button class="btn btn--primary" type="button">Lưu thay đổi</button>
  <button class="btn" type="button">Hủy</button>
</div>
<article class="card" style="background:#fffdf8;border:1px solid #dcd6c9">
  <h2>Card dùng cùng token</h2>
  <p>Padding của card lấy từ --space-4, nút lấy từ thang --space-2 và --space-4.</p>
</article>`,
      controls: [
        { sel: ":root", prop: "--color-brand", type: "color", note: "Màu thương hiệu của nút primary; đổi token là đổi toàn hệ thống." },
        { sel: ":root", prop: "--space-2", type: "range", min: 2, max: 16, step: 2, unit: "px", note: "Bậc khoảng cách nhỏ, dùng cho padding dọc của nút." },
        { sel: ":root", prop: "--space-4", type: "range", min: 8, max: 32, step: 4, unit: "px", note: "Bậc khoảng cách lớn, dùng cho padding ngang nút và padding card." },
        { sel: ":root", prop: "--radius-md", type: "range", min: 0, max: 24, step: 2, unit: "px", note: "Bo góc của nút; card có thể dùng cùng token." },
        { sel: ".btn", prop: "padding", type: "select", options: ["var(--space-2) var(--space-4)", "8px 16px", "14px 28px"], note: "Viết tắt padding theo hai trục; thay token bằng giá trị cứng để so sánh." }
      ]
    },

    "design-project": {
      target: ".hero",
      view: "768",
      extras: ["repeat()", "minmax()"],
      html: `
<div class="landing">
  <section class="hero">
    <div>
      <h1 style="font-size:2.2rem">Landing page nhìn thấy từng bước</h1>
      <p>Bố cục hai cột trên desktop, một cột trên điện thoại.</p>
      <button type="button" style="background:#0f9f8a;color:#fff;border:0;padding:10px 16px;border-radius:8px">Bắt đầu học</button>
    </div>
    <div style="min-height:150px;background:#e0f7f2;border-radius:14px"></div>
  </section>
  <section class="cards">
    <article style="background:#fffdf8;border:1px solid #dcd6c9;border-radius:12px;padding:14px"><h2>Bố cục</h2><p>Grid và gap giữ nhịp.</p></article>
    <article style="background:#fffdf8;border:1px solid #dcd6c9;border-radius:12px;padding:14px"><h2>Thành phần</h2><p>Card dùng lại token.</p></article>
    <article style="background:#fffdf8;border:1px solid #dcd6c9;border-radius:12px;padding:14px"><h2>Co giãn</h2><p>Media query hạ một cột.</p></article>
  </section>
</div>`,
      controls: [
        { sel: ".landing", prop: "gap", type: "range", min: 8, max: 56, step: 8, unit: "px", note: "Gap dọc giữa hero và hàng thẻ." },
        { sel: ".hero", prop: "grid-template-columns", type: "select", options: ["1.2fr 0.8fr", "1fr 1fr", "1fr"], note: "Tỉ lệ hai cột; chọn 1fr để xem bố cục một cột. Ở 390px media query đã ép một cột." },
        { sel: ".cards", prop: "grid-template-columns", type: "select", options: ["repeat(auto-fit, minmax(220px, 1fr))", "repeat(3, 1fr)", "1fr"], note: "auto-fit tự chia cột; cố định ba cột có thể bóp nội dung trên mobile." }
      ],
      hint: "Bấm 390 phía trên để thấy media query hạ hero về một cột."
    }
  };
})();
