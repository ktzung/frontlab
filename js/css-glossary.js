/* FrontLab — từ điển CSS cho playground (mọi selector/thuộc tính dùng trong 12 bài CSS) */
(function () {
  "use strict";

  window.CSS_GLOSSARY = {
    /* ---------- bộ chọn ---------- */
    ".card": {
      kind: "selector", title: "Bộ chọn class",
      what: "Chọn mọi phần tử có class=\"card\", không phụ thuộc thẻ hay vị trí trong cây.",
      values: "Một class có thể dùng cho nhiều phần tử; tên class phân biệt hoa thường.",
      effect: "Mọi card nhận cùng padding; biến thể như .card.featured thêm viền riêng.",
      tip: "Đặt tên theo vai trò (.card, .toolbar) thay vì theo màu (.green-box)."
    },
    ".card.featured": {
      kind: "selector", title: "Bộ chọn ghép (compound)",
      what: "Hai class viết liền, không có dấu cách: cùng một phần tử phải có cả card lẫn featured.",
      values: "Viết .card.featured là đúng; viết .card .featured là chọn phần tử con, nghĩa khác hẳn.",
      effect: "Tạo biến thể nổi bật mà không cần thêm class cha hay selector phức tạp.",
      tip: "Dấu cách đổi nghĩa hoàn toàn — đây là lỗi đọc selector phổ biến nhất."
    },
    ".card--urgent": {
      kind: "selector", title: "Class biến thể BEM",
      what: "Class biến thể (modifier) của card, viết theo BEM: hai gạch nối ngăn khối và trạng thái.",
      values: "Ghép bằng thuộc tính class: class=\"card card--urgent\", không viết liền thành .card--urgent mà bỏ .card.",
      effect: "Card khẩn cấp giữ nền và padding của .card, chỉ ghi đè màu chữ bằng !important.",
      tip: "Modifier không nên tự chứa toàn bộ style; nó chỉ mô tả phần khác biệt."
    },
    ".card > h2": {
      kind: "selector", title: "Con trực tiếp",
      what: "Dấu > chỉ chọn h2 là con trực tiếp của card, không chọn h2 nằm sâu bên trong khối khác.",
      values: "Một cấp duy nhất; muốn mọi cấp dùng dấu cách (.card h2).",
      effect: "Chỉ tiêu đề trực tiếp bỏ margin; tiêu đề trong khối lồng giữ khoảng cách riêng.",
      tip: "Dùng > khi cấu trúc component đã rõ; tránh chuỗi > quá dài."
    },
    "[data-state=\"open\"] .card": {
      kind: "selector", title: "Attribute + con cháu",
      what: "Chọn card nằm bên trong phần tử có thuộc tính data-state đúng bằng open.",
      values: "Có thể dùng ^=, *=, ~= để so khớp một phần; giá trị trong ngoặc kép.",
      effect: "Giao diện đổi theo trạng thái dữ liệu do HTML/JavaScript đặt, không cần class riêng.",
      tip: "Đặt giá trị trạng thái có nghĩa (open, closed) và thống nhất với JavaScript."
    },
    ":root": {
      kind: "selector", title: "Phần tử gốc",
      what: "Pseudo-class chọn phần tử html — gốc của tài liệu.",
      values: "Thường dùng để khai báo custom property toàn cục.",
      effect: "Biến khai báo ở :root thừa kế xuống mọi phần tử, đổi một chỗ là đổi toàn trang.",
      tip: "Đừng đặt style hình thức nặng ở :root; chỉ nên chứa token và biến."
    },
    "#hero .card": {
      kind: "selector", title: "Id + con cháu",
      what: "Chọn card nằm trong phần tử id=\"hero\"; id chỉ nên xuất hiện một lần trong trang.",
      values: "Specificity (1 id, 1 class, 0 thẻ) nên thắng các selector class thông thường.",
      effect: "Card trong hero nhận màu chữ riêng dù rule class đến sau.",
      tip: "Không dùng id chỉ để tăng độ ưu tiên; ưu tiên class và cấu trúc component."
    },
    "body": {
      kind: "selector", title: "Bộ chọn thẻ",
      what: "Chọn phần tử body — vùng chứa toàn bộ nội dung nhìn thấy.",
      values: "Thuộc tính kế thừa như color, font-family, line-height sẽ lan xuống con cháu.",
      effect: "Đặt typography nền một lần cho cả trang thay vì lặp ở từng đoạn.",
      tip: "Tránh đặt width/height cố định cho body; để nội dung tự quyết chiều cao."
    },
    "h1": {
      kind: "selector", title: "Tiêu đề cấp 1",
      what: "Chọn mọi thẻ h1 — tiêu đề chính của trang hoặc khối nội dung.",
      values: "Mỗi trang nên có một h1 mô tả nội dung chính; các mục con dùng h2, h3.",
      effect: "font-size clamp cho chữ co giãn theo bề rộng khung nhìn.",
      tip: "Không bỏ qua cấp tiêu đề chỉ vì muốn chữ nhỏ; dùng CSS để đổi kích thước."
    },
    ".hero": {
      kind: "selector", title: "Khối hero",
      what: "Class cho phần mở đầu trang: tiêu đề lớn, mô tả và lời gọi hành động.",
      values: "Thường là section đầu tiên, có min-height và max-width riêng.",
      effect: "min-height 100svh giúp hero chiếm trọn khung nhìn trên điện thoại.",
      tip: "Đừng ép hero luôn cao bằng màn hình nếu nội dung quan trọng nằm ngay dưới."
    },
    ".toolbar": {
      kind: "selector", title: "Thanh công cụ",
      what: "Class cho hàng chứa tiêu đề và nhóm nút hành động.",
      values: "Thường là flex container với justify-content và flex-wrap.",
      effect: "Tiêu đề và nút nằm hai đầu, tự xuống dòng khi hẹp.",
      tip: "Đặt gap thay vì margin từng nút để khoảng cách đều và dễ đổi."
    },
    ".actions": {
      kind: "selector", title: "Nhóm hành động",
      what: "Class cho cụm nút bên phải toolbar.",
      values: "flex: 1 1 200px cho phép nhóm chiếm chỗ trống và co lại khi thiếu chỗ.",
      effect: "Các nút giữ một hàng, nhóm tự co giãn theo bề rộng còn lại.",
      tip: "Nếu nút quá nhỏ trên mobile, cho phép wrap thay vì ép chữ."
    },
    ".gallery": {
      kind: "selector", title: "Lưới thư viện",
      what: "Class cho vùng chứa nhiều thẻ ảnh cùng kích thước tối thiểu.",
      values: "grid-template-columns repeat(auto-fit, minmax(220px, 1fr)) tự tính số cột.",
      effect: "Càng rộng càng nhiều cột; hẹp thì về một cột mà không cần media query.",
      tip: "auto-fit thu gọn cột trống; auto-fill giữ cột trống — chọn theo ý đồ bố cục."
    },
    ".feature": {
      kind: "selector", title: "Khối nổi bật hai cột",
      what: "Class cho khối giới thiệu có vùng chữ và vùng hình, dùng grid hai cột.",
      values: "grid-template-columns 1fr 2fr tạo cột chữ hẹp và cột hình rộng; .visual còn span 2 nên chiếm cả hàng.",
      effect: "Chữ nằm cột trái, vùng hình trải hết chiều ngang bên dưới; bỏ span 2 để hình nằm cạnh chữ.",
      tip: "Kiểm tra thứ tự phần tử trong HTML khi để grid tự xếp chỗ."
    },
    ".feature .visual": {
      kind: "selector", title: "Con cháu (dấu cách)",
      what: "Dấu cách chọn mọi .visual nằm bên trong .feature ở bất kỳ cấp nào.",
      values: "Khác > ở chỗ không giới hạn một cấp.",
      effect: "grid-column: span 2 đặt vùng hình trải rộng cả hai cột, thường xuống hàng riêng dưới phần chữ.",
      tip: "Dấu cách linh hoạt hơn >; muốn hình chỉ nằm cột phải, dùng grid-column: 2 thay vì span 2."
    },
    ".grid": {
      kind: "selector", title: "Lưới dùng chung",
      what: "Class cho lưới thẻ có số cột thay đổi theo bề rộng.",
      values: "Mặc định một cột; từ 48rem chuyển ba cột.",
      effect: "Điện thoại đọc dọc, máy tính chia ba cột.",
      tip: "Viết base là mobile trước, media min-width mở rộng dần."
    },
    "img": {
      kind: "selector", title: "Ảnh",
      what: "Phần tử thay thế (replaced element) có kích thước nội tại từ file ảnh.",
      values: "max-width: 100% và height: auto là cặp chuẩn để ảnh không tràn.",
      effect: "Ảnh co theo khung chứa và giữ đúng tỉ lệ.",
      tip: "Đặt width/height trong HTML để trình duyệt giữ chỗ, tránh nhảy bố cục."
    },
    ".badge": {
      kind: "selector", title: "Nhãn nổi",
      what: "Class cho nhãn nhỏ đặt ở góc card.",
      values: "Thường dùng position absolute với top/right trong card position relative.",
      effect: "Nhãn nằm đè lên góc mà không đẩy nội dung khác.",
      tip: "Đảm bảo card là phần tử định vị gần nhất, nếu không nhãn sẽ bay theo trang."
    },
    ".site-header": {
      kind: "selector", title: "Thanh đầu trang",
      what: "Class cho header giữ trên cùng khi cuộn nội dung.",
      values: "position sticky kèm top: 0; cần chiều cao nội dung đủ dài để thấy tác dụng.",
      effect: "Header dính ở mép trên cho đến khi hết vùng chứa.",
      tip: "Sticky chỉ hoạt động trong phạm vi phần tử cha; kiểm tra overflow của cha."
    },
    ".button": {
      kind: "selector", title: "Nút cơ bản",
      what: "Class cho nút có nền thương hiệu và chuyển động khi tương tác.",
      values: "Có thể là button hoặc a; cần cả trạng thái hover và focus.",
      effect: "transition làm thay đổi màu và vị trí mượt thay vì nhảy tức thì.",
      tip: "Đừng bỏ focus-visible; người dùng bàn phím cần thấy điểm đang chọn."
    },
    ".button:hover": {
      kind: "selector", title: "Pseudo-class hover",
      what: "Chọn nút khi con trỏ đang ở trên; chỉ áp dụng với thiết bị có chuột.",
      values: "Có thể kết hợp :focus-visible để phủ cả bàn phím.",
      effect: "Nút nhích lên 2px, tạo phản hồi trực quan trước khi bấm.",
      tip: "Không đặt thông tin quan trọng chỉ trong hover; cảm ứng không có hover."
    },
    ".btn": {
      kind: "selector", title: "Nút trong design system",
      what: "Class nền của hệ thống nút, dùng token khoảng cách và bo góc.",
      values: "padding theo --space-2 và --space-4; border-radius theo --radius-md.",
      effect: "Mọi nút đồng bộ nhịp và hình dáng khi token đổi.",
      tip: "Giữ class nền mỏng; biến thể nên là modifier riêng."
    },
    ".btn--primary": {
      kind: "selector", title: "Modifier BEM",
      what: "Class biến thể của .btn, viết theo quy ước block--modifier.",
      values: "Chỉ nên đổi màu/nhấn mạnh, không lặp lại toàn bộ style nền.",
      effect: "Nút chính nổi bật bằng màu thương hiệu lấy từ token.",
      tip: "Modifier phải đi kèm class nền: class=\"btn btn--primary\"."
    },
    ".landing": {
      kind: "selector", title: "Trang đích",
      what: "Class bọc toàn bộ landing page, xếp các khối theo chiều dọc.",
      values: "display grid với gap 32px tạo nhịp giữa các section.",
      effect: "Các khối cách đều nhau, không cần margin riêng từng khối.",
      tip: "Một wrapper grid giúp đổi nhịp toàn trang bằng một giá trị gap."
    },
    ".cards": {
      kind: "selector", title: "Lưới thẻ landing",
      what: "Class cho hàng thẻ dịch vụ trong landing page.",
      values: "repeat(auto-fit, minmax(220px, 1fr)) tự chia cột theo chỗ trống.",
      effect: "Ba thẻ trên desktop, một thẻ trên điện thoại.",
      tip: "Đặt minmax đủ lớn để chữ không bị bóp; kiểm tra ở 320px."
    },

    /* ---------- at-rule & keyframe ---------- */
    "@media (min-width: 720px)": {
      kind: "at-rule", title: "Media query theo pixel",
      what: "Áp dụng khối bên trong khi khung nhìn rộng từ 720px; viết bằng px là mốc tuyệt đối, không phụ thuộc cỡ chữ người dùng.",
      values: "720px cố định; muốn co giãn theo cỡ chữ gốc thì dùng 45rem tương đương.",
      effect: "Card chuyển sang lưới hai cột từ 720px; dưới mốc đó card xếp một cột.",
      tip: "Ưu tiên rem cho accessibility; px chỉ nên dùng khi cần khớp đúng một khung cố định."
    },
    "@media (min-width: 48rem)": {
      kind: "at-rule", title: "Media query mobile-first",
      what: "Chỉ áp dụng khối bên trong khi bề rộng khung nhìn từ 48rem (768px) trở lên.",
      values: "Đơn vị rem trong media query tính theo cỡ chữ gốc của trình duyệt.",
      effect: "Lưới từ một cột chuyển thành ba cột trên màn hình lớn.",
      tip: "Đặt media min-width sau style nền; đừng trộn lẫn max-width cùng hướng."
    },
    "@media (max-width: 40rem)": {
      kind: "at-rule", title: "Media query desktop-first",
      what: "Chỉ áp dụng khi bề rộng khung nhìn tối đa 40rem (640px).",
      values: "Thường dùng để hạ cấp bố cục hai cột xuống một cột.",
      effect: "Hero của landing chuyển từ hai cột sang một cột trên điện thoại.",
      tip: "Nếu dự án đã dùng min-width, hãy thống nhất một hướng để dễ đọc."
    },
    "@media (prefers-reduced-motion: reduce)": {
      kind: "at-rule", title: "Giảm chuyển động",
      what: "Khớp khi người dùng bật tùy chọn giảm chuyển động trong hệ điều hành.",
      values: "Thường đặt transition: none hoặc animation-duration rất ngắn.",
      effect: "Nút không còn hiệu ứng nhích/màu khi người dùng cần giao diện tĩnh.",
      tip: "Đừng xóa phản hồi trạng thái cần thiết; chỉ giảm chuyển động."
    },
    "@keyframes pulse": {
      kind: "at-rule", title: "Định nghĩa keyframes",
      what: "Khai báo bộ khung hình có tên pulse; bản thân nó chưa chạy animation.",
      values: "Chỉ có hiệu lực khi một rule dùng animation hoặc animation-name: pulse.",
      effect: "Có thể tái sử dụng cùng một nhịp cho nhiều phần tử.",
      tip: "Giữ keyframes đơn giản và tránh animate thuộc tính gây layout."
    },
    "@import": {
      kind: "at-rule", title: "Nạp file CSS khác",
      what: "Tải một stylesheet từ file khác ngay trong CSS hiện tại. Phải đặt ở đầu file, trước các rule thường.",
      values: '@import url("tokens.css"); hoặc @import "tokens.css";',
      effect: "Tách token, reset hoặc CSS của thư viện thành file riêng rồi gộp khi tải.",
      tip: "Dùng link trong HTML thường tốt hơn vì tải song song; @import hữu ích khi không sửa được HTML."
    },
    "@supports": {
      kind: "at-rule", title: "Kiểm tra trình duyệt hỗ trợ",
      what: "Chỉ áp dụng khối bên trong khi trình duyệt hiểu một khai báo hoặc tính năng CSS.",
      values: "@supports (display: grid) { ... } hoặc @supports not (gap: 1rem) { ... }",
      effect: "Dùng tính năng mới mà vẫn có phương án dự phòng cho trình duyệt cũ.",
      tip: "Kiểm tra đúng cặp thuộc tính và giá trị; điều kiện sai sẽ âm thầm bỏ cả khối."
    },
    "@font-face": {
      kind: "at-rule", title: "Khai báo font",
      what: "Đăng ký một file font để dùng trong font-family.",
      values: "font-family: \"Be Vietnam Pro\"; src: url(font.woff2) format(\"woff2\");",
      effect: "Trang dùng font riêng, không phụ thuộc font cài sẵn trên máy người dùng.",
      tip: "Chỉ tải định dạng cần thiết và đặt font-display để chữ không bị ẩn quá lâu."
    },
    "50%": {
      kind: "at-rule", title: "Mốc keyframe",
      what: "Trạng thái ở giữa thời lượng animation, tại đây opacity bằng 0.5.",
      values: "Có thể khai báo 0%, 50%, 100%; thiếu 0%/100% trình duyệt lấy từ style hiện tại.",
      effect: "Khi được gắn vào animation dùng keyframes này, phần tử mờ dần rồi trở lại, tạo nhịp thở.",
      tip: "Chỉ animate opacity/transform để giữ hiệu năng tốt."
    },

    /* ---------- thuộc tính ---------- */
    "align-items": {
      kind: "property", title: "Căn theo trục phụ",
      what: "Trong flex, căn con theo trục vuông góc với trục chính; trong grid, căn nội dung mỗi ô theo trục dọc.",
      values: "stretch (mặc định), flex-start, center, flex-end, baseline.",
      effect: "center đưa tiêu đề và nút về cùng đường giữa theo chiều dọc.",
      tip: "Trong flex hàng ngang, align-items là trục dọc; đổi flex-direction là đổi trục."
    },
    "background": {
      kind: "property", title: "Nền",
      what: "Thuộc tính viết tắt cho màu nền, ảnh nền, vị trí, kích thước và cách lặp.",
      values: "Màu, gradient, url(...), hoặc kết hợp; mặc định trong suốt.",
      effect: "Đặt màu thương hiệu cho nút, giúp nút tách khỏi nền trang.",
      tip: "Viết tắt sẽ đặt lại các thuộc tính con không khai báo; dùng background-color nếu chỉ đổi màu."
    },
    "border": {
      kind: "property", title: "Đường viền",
      what: "Viết tắt của border-width, border-style và border-color cho cả bốn cạnh.",
      values: "Ví dụ 4px solid #0f9f8a; border-style phải khác none mới thấy viền.",
      effect: "Viền xanh giúp thấy rõ ranh giới hộp và phần padding bên trong.",
      tip: "Viền làm tăng kích thước hộp trừ khi dùng box-sizing: border-box."
    },
    "border-radius": {
      kind: "property", title: "Bo góc",
      what: "Làm tròn các góc của hộp; có thể khác nhau từng góc hoặc tạo hình elip.",
      values: "Giá trị độ dài hoặc phần trăm; dạng a / b cho bán kính ngang và dọc.",
      effect: "Góc mềm hơn, nền và viền bị cắt theo đường cong.",
      tip: "Bo góc không cắt nội dung tràn ra ngoài; cần overflow kèm theo."
    },
    "box-sizing": {
      kind: "property", title: "Cách tính kích thước hộp",
      what: "Quyết định width/height có bao gồm padding và border hay không.",
      values: "content-box (mặc định) hoặc border-box.",
      effect: "border-box giữ card đúng 320px dù tăng padding hay viền.",
      tip: "Đặt *, *::before, *::after { box-sizing: border-box } để tính toán dễ hơn."
    },
    "color": {
      kind: "property", title: "Màu chữ",
      what: "Đặt màu nội dung văn bản và các phần tử dùng currentColor; có tính kế thừa.",
      values: "Tên màu, mã hex, rgb(), hsl(), currentColor.",
      effect: "Màu chữ tối trên nền sáng giữ tương phản dễ đọc.",
      tip: "color không đổi màu nền; kiểm tra tương phản tối thiểu 4.5:1 cho chữ thường."
    },
    "display": {
      kind: "property", title: "Kiểu hiển thị",
      what: "Chọn cách phần tử tham gia bố cục: block, inline, flex, grid hoặc ẩn.",
      values: "block, inline, inline-block, flex, grid, none.",
      effect: "display: none bỏ phần tử khỏi bố cục và cả cây trợ năng.",
      tip: "Muốn ẩn nhưng vẫn giữ chỗ, dùng visibility: hidden; muốn ẩn hẳn dùng display: none."
    },
    "flex": {
      kind: "property", title: "Co giãn trong flex",
      what: "Viết tắt của flex-grow, flex-shrink và flex-basis.",
      values: "1 1 200px nghĩa là được lớn, được co, nền 200px; 0 0 auto giữ nguyên.",
      effect: "Nhóm actions chiếm chỗ trống nhưng co lại khi toolbar hẹp.",
      tip: "flex: 1 thường đủ cho cột co giãn; tránh đặt width cứng cùng lúc."
    },
    "flex-wrap": {
      kind: "property", title: "Xuống dòng trong flex",
      what: "Cho phép các mục flex chuyển sang hàng mới khi hết chỗ.",
      values: "nowrap (mặc định), wrap, wrap-reverse.",
      effect: "Nút trong toolbar rơi xuống dòng thay vì bị bóp méo.",
      tip: "Khi wrap, gap vẫn áp dụng giữa các hàng; kiểm tra chiều cao toolbar."
    },
    "font-family": {
      kind: "property", title: "Bộ font",
      what: "Danh sách font ưu tiên từ trái sang phải, dừng ở font đầu tiên có sẵn.",
      values: "Tên font có khoảng trắng đặt trong ngoặc kép; kết thúc bằng generic family.",
      effect: "Trang dùng Be Vietnam Pro nếu có, nếu không rơi về sans-serif.",
      tip: "Luôn có fallback generic (sans-serif, serif, monospace) ở cuối danh sách."
    },
    "font-size": {
      kind: "property", title: "Cỡ chữ",
      what: "Kích thước chữ của phần tử; rem tính theo cỡ chữ gốc, em theo phần tử cha.",
      values: "px, rem, em, %, clamp(min, preferred, max).",
      effect: "clamp cho h1 co giãn mượt giữa cỡ nhỏ và cỡ lớn theo bề rộng khung nhìn.",
      tip: "Ưu tiên rem cho cỡ chữ để tôn trọng thiết lập cỡ chữ của người dùng."
    },
    "gap": {
      kind: "property", title: "Khoảng cách giữa mục",
      what: "Khoảng trống giữa các hàng/cột trong flex hoặc grid.",
      values: "Một giá trị cho cả hai chiều, hoặc hai giá trị row-gap và column-gap.",
      effect: "Tăng gap làm các thẻ xa nhau, không cần margin từng thẻ.",
      tip: "gap không tạo khoảng cách ở mép ngoài; đó là việc của padding container."
    },
    "grid-column": {
      kind: "property", title: "Vị trí cột trong grid",
      what: "Đặt phần tử vào cột theo số đường hoặc theo span số cột.",
      values: "span 2 chiếm hai cột; 1 / 3 đặt từ đường 1 đến đường 3.",
      effect: "Vùng hình của feature trải rộng cả hai cột.",
      tip: "Dùng span khi không cần biết chính xác số đường; dùng số đường khi bố cục cố định."
    },
    "grid-template-columns": {
      kind: "property", title: "Khai báo cột",
      what: "Định nghĩa số cột và độ rộng từng cột của grid container.",
      values: "1fr, repeat(3, 1fr), minmax(220px, 1fr), repeat(auto-fit, minmax(220px, 1fr)).",
      effect: "repeat(auto-fit, minmax(220px, 1fr)) tự chọn số cột theo chỗ trống.",
      tip: "auto-fit gộp cột trống; auto-fill giữ lại cột trống — khác nhau ở track rỗng."
    },
    "height": {
      kind: "property", title: "Chiều cao",
      what: "Chiều cao vùng nội dung của phần tử; auto để nội dung quyết định.",
      values: "auto, độ dài, phần trăm (cần cha có chiều cao xác định).",
      effect: "height: auto giữ ảnh đúng tỉ lệ khi chiều rộng co giãn.",
      tip: "Nội dung dài hơn height sẽ tràn; thường nên dùng min-height thay vì height."
    },
    "justify-content": {
      kind: "property", title: "Phân bố trục chính",
      what: "Căn và phân phối các mục theo trục chính của flex/grid.",
      values: "flex-start, center, flex-end, space-between, space-around, space-evenly.",
      effect: "space-between đẩy tiêu đề và nhóm nút về hai đầu toolbar.",
      tip: "Trục chính đổi khi flex-direction đổi; kiểm tra lại khi làm cột dọc."
    },
    "line-height": {
      kind: "property", title: "Chiều cao dòng",
      what: "Chiều cao của mỗi dòng chữ, quyết định khoảng cách dọc giữa các dòng.",
      values: "Số không đơn vị (1.6), độ dài, phần trăm, normal.",
      effect: "1.6 làm đoạn văn thoáng, dễ đọc hơn mặc định.",
      tip: "Dùng số không đơn vị để con cháu tự nhân theo font-size của chúng."
    },
    "margin": {
      kind: "property", title: "Khoảng cách ngoài",
      what: "Khoảng trống bên ngoài đường viền, đẩy các hộp xa nhau.",
      values: "Độ dài (có thể âm), auto; viết tắt 1-4 giá trị theo chiều kim đồng hồ.",
      effect: "Tăng margin tạo khoảng trống quanh card, tách khỏi nền trang.",
      tip: "Margin dọc của phần tử liền kề có thể gộp (margin collapse); padding thì không."
    },
    "max-width": {
      kind: "property", title: "Bề rộng tối đa",
      what: "Chặn trên cho chiều rộng; phần tử không vượt quá giá trị này.",
      values: "Độ dài, phần trăm, none; 100% thường dùng cho ảnh và khối co giãn.",
      effect: "Ảnh không tràn khung; hero không kéo quá 72rem trên màn hình lớn.",
      tip: "max-width không thay width; phần tử vẫn có thể nhỏ hơn nếu nội dung/khung hẹp."
    },
    "min-height": {
      kind: "property", title: "Chiều cao tối thiểu",
      what: "Chặn dưới cho chiều cao; nội dung dài hơn vẫn làm phần tử cao lên.",
      values: "Độ dài, phần trăm, 100svh; svh là chiều cao khung nhìn nhỏ.",
      effect: "100svh giúp hero phủ đầy màn hình điện thoại mà không bị thanh địa chỉ che.",
      tip: "svh ổn định hơn vh trên mobile; dvh thay đổi theo thanh trình duyệt."
    },
    "opacity": {
      kind: "property", title: "Độ trong suốt",
      what: "Đặt độ mờ cho cả phần tử và con cháu, từ 0 (trong suốt) đến 1 (rõ).",
      values: "0 đến 1; có thể animate để tạo hiệu ứng mờ dần.",
      effect: "Keyframe pulse hạ opacity xuống 0.5 rồi trở lại.",
      tip: "opacity 0 vẫn nhận tương tác; muốn ẩn hẳn dùng display: none hoặc visibility."
    },
    "padding": {
      kind: "property", title: "Khoảng đệm trong",
      what: "Khoảng trống giữa nội dung và đường viền, nằm bên trong hộp.",
      values: "Độ dài hoặc phần trăm; phần trăm tính theo chiều rộng của khối chứa.",
      effect: "Padding lớn đẩy nội dung vào sâu và làm hộp cao/rộng thêm nếu content-box.",
      tip: "Với border-box, padding ăn vào width nên hộp không phình ra."
    },
    "position": {
      kind: "property", title: "Cách định vị",
      what: "Chọn cơ chế đặt phần tử: theo luồng, tương đối, tuyệt đối, cố định hay dính.",
      values: "static, relative, absolute, fixed, sticky.",
      effect: "absolute đưa badge ra khỏi luồng và neo vào card relative gần nhất.",
      tip: "fixed neo vào khung nhìn trừ khi tổ tiên có transform; sticky cần top/bottom."
    },
    "right": {
      kind: "property", title: "Khoảng cách từ phải",
      what: "Đặt mép phải của phần tử cách mép phải vùng chứa một khoảng.",
      values: "Độ dài, phần trăm, auto.",
      effect: "right: 12px đưa badge vào góc phải trên của card.",
      tip: "Chỉ có tác dụng với phần tử position khác static (hoặc trong ngữ cảnh inset)."
    },
    "top": {
      kind: "property", title: "Khoảng cách từ trên",
      what: "Đặt mép trên của phần tử cách mép trên vùng chứa; cũng là ngưỡng dính của sticky.",
      values: "Độ dài, phần trăm, auto.",
      effect: "top: 0 giữ header dính sát mép trên khi cuộn.",
      tip: "Với sticky, top là ngưỡng bắt đầu dính chứ không phải vị trí ban đầu."
    },
    "transform": {
      kind: "property", title: "Biến đổi hình học",
      what: "Dịch, xoay, co giãn hoặc nghiêng phần tử mà không đổi bố cục.",
      values: "translate(), translateY(), scale(), rotate(), skew(); kết hợp nhiều hàm.",
      effect: "translateY(-2px) nhấc nút lên khi hover, các phần tử khác không xê dịch.",
      tip: "Transform không ảnh hưởng luồng; phần tử chồng lấn có thể che nội dung khác."
    },
    "transition": {
      kind: "property", title: "Chuyển tiếp",
      what: "Làm mượt sự thay đổi của thuộc tính khi giá trị đổi (ví dụ khi hover).",
      values: "property duration timing-function delay; nhiều bộ cách nhau bằng dấu phẩy.",
      effect: "transform và background đổi trong 180ms thay vì nhảy tức thì.",
      tip: "Tránh transition: all; liệt kê đúng thuộc tính để kiểm soát và đỡ tốn hiệu năng."
    },
    "width": {
      kind: "property", title: "Bề rộng",
      what: "Chiều rộng vùng nội dung; với border-box bao gồm cả padding và border.",
      values: "auto, độ dài, phần trăm; min()/max()/clamp() cho giá trị co giãn.",
      effect: "width: min(100% - 2rem, 72rem) giữ hero vừa khung và có lề hai bên.",
      tip: "width cố định dễ tràn trên mobile; ưu tiên max-width và bề rộng linh hoạt."
    },

    /* ---------- custom property ---------- */
    "--brand": {
      kind: "custom-property", title: "Token màu thương hiệu",
      what: "Custom property chứa màu nhấn, khai báo ở :root để dùng lại qua var(--brand).",
      values: "Bất kỳ giá trị màu hợp lệ; tên custom property phân biệt hoa thường.",
      effect: "Đổi một dòng ở :root là mọi chỗ dùng var(--brand) đổi theo.",
      tip: "Custom property thừa kế; có thể override trong component để đổi cục bộ."
    },
    "--line": {
      kind: "custom-property", title: "Token màu viền",
      what: "Custom property dùng cho viền và đường phân cách, thường là màu trung tính nhạt.",
      values: "Màu bất kỳ; có thể truyền giá trị dự phòng khi dùng var(--line, #dcd6c9).",
      effect: "Viền của card đổi theo token; nếu token chưa khai báo, trình duyệt dùng màu dự phòng.",
      tip: "Đặt token viền ở :root để mọi component dùng cùng một sắc độ."
    },
    "--ink": {
      kind: "custom-property", title: "Token màu chữ chính",
      what: "Custom property cho màu chữ nội dung chính, thường gán cho body.",
      values: "Màu tối đủ tương phản trên nền sáng.",
      effect: "Toàn bộ chữ kế thừa màu này trừ khi có rule cụ thể hơn.",
      tip: "Giữ tên token theo vai trò (ink, muted) thay vì theo mã màu."
    },
    "--muted": {
      kind: "custom-property", title: "Token chữ phụ",
      what: "Custom property cho chữ phụ, chú thích, mô tả nhẹ hơn.",
      values: "Màu trung tính có tương phản thấp hơn --ink nhưng vẫn đọc được.",
      effect: "Phân cấp thị giác giữa tiêu đề và mô tả.",
      tip: "Đừng dùng chữ phụ cho thông tin bắt buộc; kiểm tra tương phản."
    },
    "--space": {
      kind: "custom-property", title: "Token khoảng cách gốc",
      what: "Một đơn vị khoảng cách cơ sở (1rem) để nhân ra các khoảng khác.",
      values: "Độ dài; có thể dùng calc() để tạo bội số.",
      effect: "Là mốc để tính bội số; nếu rule dùng var(--space), đổi một chỗ là đổi cả thang.",
      tip: "Đặt thang khoảng cách nhỏ (4/8/16/24/32) thay vì giá trị tùy hứng."
    },
    "--color-brand": {
      kind: "custom-property", title: "Token màu hệ thống",
      what: "Custom property màu thương hiệu trong design system.",
      values: "Giá trị màu; thường có thêm biến thể đậm/nhạt.",
      effect: "Nút primary và điểm nhấn lấy cùng một nguồn màu.",
      tip: "Một token màu nên có tên vai trò, không nên là --green-1."
    },
    "--space-2": {
      kind: "custom-property", title: "Bước khoảng cách 8px",
      what: "Bậc thứ hai trong thang khoảng cách, dùng cho padding dọc của nút.",
      values: "Độ dài; giữ bội số của 4 hoặc 8.",
      effect: "Nút có padding dọc nhỏ hơn padding ngang, tạo tỉ lệ dễ nhìn.",
      tip: "Đừng đặt tên theo giá trị nếu có thể đổi; --space-2 ổn vì là bậc thang."
    },
    "--space-4": {
      kind: "custom-property", title: "Bước khoảng cách 16px",
      what: "Bậc thứ tư trong thang khoảng cách, dùng cho padding ngang và padding card.",
      values: "Độ dài; thường gấp đôi --space-2.",
      effect: "Card và nút chia sẻ cùng nhịp khoảng cách.",
      tip: "Kiểm tra tổng kích thước nút khi ghép hai bậc khoảng cách."
    },
    "--radius-md": {
      kind: "custom-property", title: "Token bo góc",
      what: "Custom property cho bán kính bo góc mức trung bình của hệ thống.",
      values: "Độ dài; có thể có --radius-sm, --radius-lg.",
      effect: "Nút và card bo góc đồng bộ, đổi token là đổi toàn hệ thống.",
      tip: "Bo góc lớn cần kiểm tra nội dung sát mép để không bị cắt xấu."
    },

    /* ---------- hàm & giá trị đặc biệt ---------- */
    "var()": {
      kind: "value", title: "Hàm tham chiếu biến",
      what: "Lấy giá trị của custom property tại thời điểm tính toán.",
      values: "var(--ten-bien) hoặc var(--ten-bien, giá-trị-dự-phòng).",
      effect: "Đổi --brand ở :root là mọi chỗ var(--brand) cập nhật ngay.",
      tip: "Nếu biến không tồn tại và không có fallback, thuộc tính thành invalid."
    },
    "clamp()": {
      kind: "value", title: "Kẹp giá trị trong khoảng",
      what: "Chọn giá trị ưa thích nhưng không nhỏ hơn min và không lớn hơn max.",
      values: "clamp(min, preferred, max); preferred thường dùng vw để co giãn.",
      effect: "Tiêu đề lớn dần theo màn hình nhưng dừng ở 4rem.",
      tip: "Đảm bảo min <= max; kiểm tra ở 320px và màn hình rất lớn."
    },
    "min()": {
      kind: "value", title: "Chọn giá trị nhỏ nhất",
      what: "Trả về giá trị nhỏ nhất trong danh sách, thường dùng để chặn tràn.",
      values: "min(100% - 2rem, 72rem) chọn bề rộng vừa khung nhưng không quá 72rem.",
      effect: "Hero luôn có lề hai bên và không kéo quá rộng trên desktop.",
      tip: "Khác clamp ở chỗ không có giá trị ưa thích; chỉ là phép chọn nhỏ nhất."
    },
    "repeat()": {
      kind: "value", title: "Lặp track",
      what: "Tạo nhanh nhiều track giống nhau trong grid-template-columns/rows.",
      values: "repeat(3, 1fr), repeat(auto-fit, minmax(220px, 1fr)).",
      effect: "Ba cột đều nhau trên desktop; auto-fit tự tính số cột.",
      tip: "auto-fit/auto-fill cần track có kích thước xác định hoặc minmax()."
    },
    "minmax()": {
      kind: "value", title: "Track co giãn",
      what: "Đặt kích thước track nằm giữa mức tối thiểu và tối đa.",
      values: "minmax(220px, 1fr) — ít nhất 220px, có thể lớn tới phần chia còn lại.",
      effect: "Thẻ không nhỏ hơn 220px nhưng vẫn lấp đầy hàng.",
      tip: "Nếu min quá lớn, grid tràn ngang trên màn hình hẹp."
    },
    "translateY()": {
      kind: "value", title: "Dịch theo trục dọc",
      what: "Hàm transform dịch phần tử lên/xuống; giá trị âm là đi lên.",
      values: "translateY(-2px), translateY(50%), translateY(0).",
      effect: "Nút nhích lên khi hover, tạo cảm giác nổi.",
      tip: "Phần trăm tính theo chiều cao của chính phần tử."
    },
    "!important": {
      kind: "value", title: "Cờ ưu tiên đặc biệt",
      what: "Gắn sau giá trị để khai báo thắng các khai báo thường cùng nguồn.",
      values: "color: #ff0000 !important; chỉ áp dụng cho một khai báo.",
      effect: "Màu đỏ thắng mọi rule class/id thường khác.",
      tip: "Chỉ dùng khi thật cần (override thư viện ngoài) và ghi chú lý do."
    }
  };
})();
