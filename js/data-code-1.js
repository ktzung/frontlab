/* FrontLab — Lập trình Frontend · phần 1 (bài 01–10) */
(function () {
  "use strict";
  const L = window.FRONTLAB.lessons;
  const S = {
    flow(steps, active, done) { return { kind: "flow", steps, active: active || [], done: done || [] }; },
    vars(items) { return { kind: "vars", items }; },
    arr(values, active, extra) { return Object.assign({ kind: "array", values, active: active || [] }, extra || {}); },
    table(headers, rows, activeRow, caption) { return { kind: "table", headers, rows, activeRow, caption }; },
    dom(items, active, caption) { return { kind: "dom", items, active: active || [], caption }; },
    layout(props) { return Object.assign({ kind: "layout" }, props); }
  };

  L["js-intro"] = {
    id: "js-intro",
    track: "code",
    module: "code-foundation",
    title: "JavaScript làm được gì?",
    shortTitle: "JS làm gì",
    subtitle: "Ngôn ngữ biến trang tĩnh thành giao diện có phản hồi.",
    blurb: "Chọn phần tử, đổi nội dung, lắng nghe sự kiện — ba việc đầu tiên của mọi lập trình viên frontend.",
    level: "Nhập môn",
    duration: "12 phút",
    lang: "js",
    tags: ["javascript", "dom", "querySelector", "addEventListener"],
    learn: [
      "JavaScript chạy trong trình duyệt",
      "Chọn phần tử bằng querySelector",
      "Đổi nội dung bằng textContent",
      "Lắng nghe sự kiện click"
    ],
    code: `const title = document.querySelector("h1");

title.textContent = "Xin chào JavaScript";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  title.textContent = "Bạn đã bấm nút!";
});

console.log("Trang đã sẵn sàng");`,
    file: "app.js",
    life: {
      icon: "bulb",
      title: "Công tắc đèn",
      text: "HTML là bóng đèn, CSS là chao đèn, JavaScript là công tắc. Bấm công tắc, trạng thái giao diện thay đổi ngay mà không cần tải lại trang."
    },
    visual: S.flow([{ label: "Chọn", sub: "querySelector" }, { label: "Đổi", sub: "textContent" }, { label: "Nghe", sub: "addEventListener" }], [0]),
    steps: [
      {
        short: "Chọn phần tử",
        type: "DOM",
        title: "querySelector tìm phần tử đầu tiên",
        body: "<code>document.querySelector(\"h1\")</code> trả về phần tử h1 đầu tiên. Nếu không tìm thấy, nó trả về <code>null</code> — hãy kiểm tra trước khi dùng.",
        line: 1,
        mark: [1],
        watch: [{ name: "title", value: "h1", type: "Element" }],
        output: "",
        visual: S.dom([{ tag: "h1", depth: 0, text: "Tiêu đề cũ" }, { tag: "button", depth: 0, text: "Bấm" }], [0], "querySelector chọn h1"),
        note: "Nếu cần chọn nhiều phần tử, dùng querySelectorAll.",
        changes: ["Biến title trỏ tới h1."]
      },
      {
        short: "Đổi nội dung",
        type: "THUỘC TÍNH",
        title: "textContent thay chữ an toàn",
        body: "<code>textContent</code> thay toàn bộ chữ bên trong phần tử và không diễn giải HTML. Với nội dung do người dùng nhập, đây là lựa chọn an toàn hơn innerHTML.",
        line: 3,
        mark: [3],
        watch: [{ name: "textContent", value: "Xin chào JavaScript", type: "string" }],
        output: "",
        visual: S.vars([{ name: "title.textContent", type: "string", value: "Xin chào JavaScript" }]),
        note: "innerHTML có thể tạo lỗ hổng XSS nếu chèn dữ liệu người dùng chưa xử lý.",
        changes: ["Tiêu đề trên trang đổi thành Xin chào JavaScript."]
      },
      {
        short: "Lắng nghe",
        type: "SỰ KIỆN",
        title: "addEventListener gắn hành vi",
        body: "<code>addEventListener(\"click\", handler)</code> đăng ký hàm xử lý. Khi người dùng bấm, trình duyệt gọi hàm và giao diện có thể cập nhật.",
        line: 5,
        mark: [5, 6],
        watch: [{ name: "event", value: "click", type: "Event" }],
        output: "",
        visual: S.flow([{ label: "Người dùng bấm", sub: "click" }, { label: "Handler chạy", sub: "callback" }, { label: "DOM cập nhật", sub: "textContent" }], [1]),
        note: "Không dùng onclick trong HTML nếu có thể; addEventListener tách hành vi khỏi cấu trúc.",
        changes: ["Nút có hàm xử lý click."]
      },
      {
        short: "Callback",
        type: "HÀM",
        title: "Hàm được gọi khi sự kiện xảy ra",
        body: "Phần thân trong <code>() =&gt; { ... }</code> chỉ chạy khi click. Đây là callback: bạn trao hàm cho trình duyệt giữ và gọi sau.",
        line: 7,
        mark: [7, 8],
        watch: [{ name: "handler", value: "arrow function", type: "callback" }],
        output: "Bạn đã bấm nút!",
        visual: S.flow([{ label: "Đăng ký", sub: "lưu callback" }, { label: "Click", sub: "gọi" }, { label: "Chạy", sub: "đổi chữ" }], [2], [0]),
        note: "Callback không chạy ngay tại dòng khai báo; nó chạy khi sự kiện xảy ra.",
        changes: ["Tiêu đề đổi khi nút được bấm."]
      },
      {
        short: "Ghi log",
        type: "DEBUG",
        title: "console.log là người bạn đầu tiên",
        body: "<code>console.log</code> in giá trị ra DevTools Console. Đây là cách nhanh nhất để kiểm tra biến, phần tử và luồng chạy khi mới học.",
        line: 10,
        mark: [10],
        watch: [{ name: "console", value: "Trang đã sẵn sàng", type: "log" }],
        output: "Trang đã sẵn sàng",
        visual: S.table(["Công cụ", "Dùng khi"], [["console.log", "kiểm tra giá trị"], ["debugger", "dừng từng dòng"], ["DevTools", "xem DOM/CSS"]], 0, "Ghi log là bước đầu của debug"),
        note: "Nhớ xóa hoặc giảm log trước khi phát hành sản phẩm.",
        changes: ["Console hiện thông báo trang đã sẵn sàng."]
      }
    ]
  };

  L["js-values"] = {
    id: "js-values",
    track: "code",
    module: "code-foundation",
    title: "Giá trị và kiểu dữ liệu",
    shortTitle: "Values",
    subtitle: "Chuỗi, số, boolean, null, undefined và object.",
    blurb: "JavaScript lưu dữ liệu dưới vài kiểu cơ bản; hiểu kiểu giúp tránh lỗi “undefined” và so sánh sai.",
    level: "Cơ bản",
    duration: "13 phút",
    lang: "js",
    tags: ["types", "string", "number", "boolean", "null", "object"],
    learn: [
      "Phân biệt string, number, boolean",
      "Hiểu null và undefined",
      "Dùng typeof để kiểm tra",
      "Tạo object đơn giản"
    ],
    code: `const name = "An";
const age = 20;
const isStudent = true;
let note;
const empty = null;

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
console.log(note);             // undefined
console.log(empty);            // null
const profile = { name, age };
console.log(profile.name);`,
    file: "values.js",
    life: {
      icon: "bulb",
      title: "Các loại hộp",
      text: "Chuỗi là hộp đựng chữ, số là hộp đựng số, boolean là công tắc bật/tắt. Dùng sai loại hộp giống đổ nước vào hộp giấy."
    },
    visual: S.vars([{ name: "name", type: "string", value: "An" }, { name: "age", type: "number", value: "20" }, { name: "isStudent", type: "boolean", value: "true" }]),
    steps: [
      {
        short: "String",
        type: "CHUỖI",
        title: "String là dãy ký tự trong dấu nháy",
        body: "Chuỗi có thể dùng nháy đơn, nháy kép hoặc backtick. Với chuỗi có nội suy, backtick cho phép chèn biến bằng <code>${...}</code> — nhưng phải cẩn thận khi viết trong mã khác.",
        line: 1,
        mark: [1],
        watch: [{ name: "name", value: "An", type: "string" }],
        output: "",
        visual: S.vars([{ name: "name", type: "string", value: "An", note: "chuỗi" }]),
        note: "Dùng nháy nhất quán trong dự án để tránh lỗi khó nhìn.",
        changes: ["Biến name giữ chuỗi An."]
      },
      {
        short: "Number",
        type: "SỐ",
        title: "JavaScript chỉ có một kiểu số",
        body: "Số nguyên và số thực đều là <code>number</code>. Cẩn thận với phép chia cho 0 (<code>Infinity</code>) và sai số dấu phẩy động khi tính tiền.",
        line: 2,
        mark: [2],
        watch: [{ name: "age", value: "20", type: "number" }],
        output: "",
        visual: S.vars([{ name: "age", type: "number", value: "20", note: "số" }, { name: "0.1 + 0.2", type: "number", value: "0.30000000000000004", note: "sai số" }]),
        note: "Với tiền tệ, cân nhắc lưu theo đơn vị nhỏ nhất (đồng) hoặc dùng thư viện chuyên dụng.",
        changes: ["Biến age giữ số 20."]
      },
      {
        short: "Boolean",
        type: "ĐÚNG/SAI",
        title: "Boolean chỉ có true hoặc false",
        body: "Boolean thường là kết quả so sánh hoặc cờ trạng thái. Đừng dùng chuỗi <code>\"false\"</code> thay cho <code>false</code> — chuỗi khác rỗng luôn là truthy.",
        line: 3,
        mark: [3],
        watch: [{ name: "isStudent", value: "true", type: "boolean" }],
        output: "",
        visual: S.table(["Giá trị", "Truthy?"], [["true", "có"], ["false", "không"], ['"false"', "có"], ["0", "không"]], 2, "Chuỗi false vẫn là truthy"),
        note: "Đây là lỗi rất phổ biến khi đọc dữ liệu từ form hoặc storage.",
        changes: ["isStudent là boolean thật."]
      },
      {
        short: "null & undefined",
        type: "RỖNG",
        title: "undefined là chưa có, null là cố ý trống",
        body: "<code>let note;</code> chưa gán nên là <code>undefined</code>. <code>null</code> thường do lập trình viên gán để biểu thị “không có giá trị”. Cả hai đều falsy.",
        line: 4,
        mark: [4, 5, 10, 11],
        watch: [{ name: "note", value: "undefined", type: "unassigned" }, { name: "empty", value: "null", type: "intentional" }],
        output: "undefined\nnull",
        visual: S.vars([{ name: "note", type: "undefined", value: "chưa gán" }, { name: "empty", type: "null", value: "cố ý trống" }]),
        note: "Không dùng null để che lỗi thiếu dữ liệu; hãy kiểm tra nguồn dữ liệu.",
        changes: ["note là undefined, empty là null."]
      },
      {
        short: "Object",
        type: "ĐỐI TƯỢNG",
        title: "Object gom dữ liệu có tên",
        body: "Object lưu nhiều cặp khóa–giá trị. <code>{ name, age }</code> là cú pháp viết tắt khi biến trùng tên khóa. Truy cập bằng dấu chấm hoặc ngoặc vuông.",
        line: 12,
        mark: [12, 13],
        watch: [{ name: "profile.name", value: "An", type: "string" }, { name: "profile.age", value: "20", type: "number" }],
        output: "An",
        visual: S.table(["Khóa", "Giá trị"], [["name", "An"], ["age", "20"]], 0, "Object profile"),
        note: "Nếu khóa có dấu cách hoặc gạch, dùng profile[\"first-name\"].",
        changes: ["profile gom name và age."]
      }
    ]
  };

  L["js-operators"] = {
    id: "js-operators",
    track: "code",
    module: "code-foundation",
    title: "Toán tử và biểu thức",
    shortTitle: "Operators",
    subtitle: "Tính toán, so sánh và kết hợp điều kiện.",
    blurb: "Cộng trừ nhân chia, so sánh nghiêm ngặt, logic và toán tử ba ngôi — nền tảng của mọi quyết định trong code.",
    level: "Cơ bản",
    duration: "12 phút",
    lang: "js",
    tags: ["operators", "comparison", "logical", "ternary"],
    learn: [
      "Các toán tử số học cơ bản",
      "Luôn ưu tiên === thay vì ==",
      "Kết hợp điều kiện với &&, ||",
      "Dùng ternary cho biểu thức ngắn"
    ],
    code: `const price = 120000;
const qty = 3;
const total = price * qty;
const hasDiscount = total >= 300000;

console.log(total);        // 360000
console.log(hasDiscount);  // true
console.log(price > 0 && qty > 0);
const label = hasDiscount ? "Giảm giá" : "Giá thường";
console.log(label);`,
    file: "operators.js",
    life: {
      icon: "bulb",
      title: "Máy tính bỏ túi",
      text: "Toán tử là các nút trên máy tính: cộng, nhân, so sánh. Biểu thức là cả phép tính; kết quả có thể là số hoặc true/false."
    },
    visual: S.vars([{ name: "price", type: "number", value: "120000" }, { name: "qty", type: "number", value: "3" }, { name: "total", type: "number", value: "360000" }]),
    steps: [
      {
        short: "Số học",
        type: "TOÁN TỬ",
        title: "+ − * / % tính toán",
        body: "<code>price * qty</code> nhân giá với số lượng. <code>%</code> lấy phần dư, hữu ích để kiểm tra chẵn/lẻ hoặc chia nhóm.",
        line: 3,
        mark: [1, 2, 3],
        watch: [{ name: "total", value: "360000", type: "number" }],
        output: "",
        visual: S.vars([{ name: "price", type: "number", value: "120000" }, { name: "qty", type: "number", value: "3" }, { name: "total", type: "number", value: "360000", note: "price * qty" }]),
        note: "Phép cộng với chuỗi sẽ nối chuỗi; hãy đảm bảo kiểu dữ liệu đúng trước khi tính.",
        changes: ["total bằng 360000."]
      },
      {
        short: "So sánh",
        type: "SO SÁNH",
        title: ">= trả về boolean",
        body: "<code>total &gt;= 300000</code> so sánh và trả về <code>true</code> hoặc <code>false</code>. Kết quả này có thể lưu vào biến để dùng cho giao diện.",
        line: 4,
        mark: [4],
        watch: [{ name: "hasDiscount", value: "true", type: "boolean" }],
        output: "",
        visual: S.table(["Biểu thức", "Kết quả"], [["360000 >= 300000", "true"], ["360000 < 300000", "false"]], 0, "So sánh cho boolean"),
        note: "Đừng nhầm = (gán) với === (so sánh).",
        changes: ["hasDiscount là true."]
      },
      {
        short: "=== ",
        type: "NGHIÊM NGẶT",
        title: "Dùng === thay vì ==",
        body: "<code>==</code> tự ép kiểu, nên <code>\"5\" == 5</code> là true. <code>===</code> so sánh cả kiểu, an toàn hơn và ít gây bất ngờ.",
        line: 8,
        mark: [8],
        watch: [{ name: "\"5\" == 5", value: "true", type: "loose" }, { name: "\"5\" === 5", value: "false", type: "strict" }],
        output: "",
        visual: S.table(["So sánh", "Kết quả"], [['"5" == 5', "true"], ['"5" === 5', "false"], ["0 == false", "true"], ["0 === false", "false"]], 1, "=== không ép kiểu"),
        note: "Hầu như luôn dùng === và !== trong code hiện đại.",
        changes: ["Điều kiện dùng so sánh nghiêm ngặt."]
      },
      {
        short: "Logic",
        type: "KẾT HỢP",
        title: "&& cần cả hai đúng",
        body: "<code>price &gt; 0 &amp;&amp; qty &gt; 0</code> chỉ true khi cả hai vế true. <code>||</code> chỉ cần một vế đúng; <code>!</code> đảo boolean.",
        line: 8,
        mark: [8],
        watch: [{ name: "price > 0", value: "true", type: "left" }, { name: "qty > 0", value: "true", type: "right" }, { name: "&&", value: "true", type: "result" }],
        output: "true",
        visual: S.table(["A", "B", "A && B", "A || B"], [["true", "true", "true", "true"], ["true", "false", "false", "true"], ["false", "false", "false", "false"]], 0, "Bảng chân trị cơ bản"),
        note: "&& và || trả về giá trị truthy/falsy, không nhất thiết boolean, khi dùng với giá trị không phải boolean.",
        changes: ["Điều kiện kết hợp trả về true."]
      },
      {
        short: "Ternary",
        type: "RÚT GỌN",
        title: "điều kiện ? A : B",
        body: "Toán tử ba ngôi chọn một trong hai giá trị. Chỉ dùng khi biểu thức ngắn và dễ đọc; điều kiện phức tạp nên dùng if/else.",
        line: 9,
        mark: [9, 10],
        watch: [{ name: "hasDiscount", value: "true", type: "condition" }, { name: "label", value: "Giảm giá", type: "result" }],
        output: "Giảm giá",
        visual: S.flow([{ label: "hasDiscount?", sub: "true" }, { label: "Giảm giá", sub: "nhánh A" }, { label: "Giá thường", sub: "nhánh B" }], [1]),
        note: "Đừng lồng nhiều ternary; hãy tách thành if/else hoặc hàm nhỏ.",
        changes: ["label nhận Giảm giá."]
      }
    ]
  };

  L["js-conditions"] = {
    id: "js-conditions",
    track: "code",
    module: "code-foundation",
    title: "Điều kiện if/else",
    shortTitle: "Conditions",
    subtitle: "Cho chương trình ra quyết định theo dữ liệu.",
    blurb: "if, else if, else, truthy/falsy và guard clause — viết logic dễ đọc, tránh lồng quá sâu.",
    level: "Cơ bản",
    duration: "14 phút",
    lang: "js",
    tags: ["if", "else", "truthy", "falsy", "guard"],
    learn: [
      "Viết if/else if/else",
      "Hiểu truthy và falsy",
      "Dùng guard clause để giảm lồng",
      "Chọn ternary khi phù hợp"
    ],
    code: `const score = 7.5;

if (score >= 9) {
  console.log("Xuất sắc");
} else if (score >= 7) {
  console.log("Tốt");
} else {
  console.log("Cần cố gắng");
}

const passed = score >= 5;
console.log(passed ? "Qua môn" : "Thi lại");`,
    file: "conditions.js",
    life: {
      icon: "bulb",
      title: "Ngã rẽ giao thông",
      text: "Mỗi if là một ngã rẽ. Hãy đặt biển báo rõ và tránh tạo mê cung nhiều tầng; người đọc code cũng cần tìm được đường ra."
    },
    visual: S.flow([{ label: "score >= 9?", sub: "không" }, { label: "score >= 7?", sub: "đúng" }, { label: "Tốt", sub: "kết quả" }], [1]),
    steps: [
      {
        short: "if",
        type: "NHÁNH",
        title: "if chạy khi điều kiện đúng",
        body: "<code>if (score &gt;= 9)</code> kiểm tra điều kiện. Nếu đúng, khối trong ngoặc nhọn chạy; nếu sai, bỏ qua và kiểm tra nhánh tiếp theo.",
        line: 1,
        mark: [1, 3, 4],
        watch: [{ name: "score", value: "7.5", type: "number" }, { name: "score >= 9", value: "false", type: "condition" }],
        output: "",
        visual: S.flow([{ label: "score = 7.5", sub: "bắt đầu" }, { label: ">= 9?", sub: "false" }, { label: "sang else if", sub: "tiếp" }], [1]),
        note: "Điều kiện nên là biểu thức boolean rõ ràng, không phụ thuộc truthy mơ hồ.",
        changes: ["Nhánh Xuất sắc bị bỏ qua."]
      },
      {
        short: "else if",
        type: "NHÁNH",
        title: "else if kiểm tra tiếp",
        body: "Vì 7.5 không đạt 9, chương trình kiểm tra <code>score &gt;= 7</code> và đúng. Chỉ nhánh đầu tiên đúng được chạy.",
        line: 5,
        mark: [5, 6],
        watch: [{ name: "score >= 7", value: "true", type: "condition" }],
        output: "Tốt",
        visual: S.flow([{ label: ">= 9?", sub: "false" }, { label: ">= 7?", sub: "true" }, { label: "in Tốt", sub: "chạy" }], [1, 2], [0]),
        note: "Thứ tự nhánh quan trọng: điều kiện rộng đặt trước có thể che điều kiện hẹp.",
        changes: ["Console in Tốt."]
      },
      {
        short: "else",
        type: "MẶC ĐỊNH",
        title: "else là trường hợp còn lại",
        body: "<code>else</code> chạy khi mọi điều kiện trên đều sai. Không cần điều kiện; nó là nhánh dự phòng, nhưng đừng dùng để che lỗi dữ liệu.",
        line: 7,
        mark: [7, 8, 9],
        watch: [{ name: "else", value: "score < 7", type: "fallback" }],
        output: "",
        visual: S.flow([{ label: ">= 9?", sub: "false" }, { label: ">= 7?", sub: "false" }, { label: "else", sub: "Cần cố gắng" }], [2]),
        note: "Với dữ liệu không hợp lệ (ví dụ score âm), nên kiểm tra riêng thay vì rơi vào else.",
        changes: ["Nhánh dự phòng sẵn sàng."]
      },
      {
        short: "Truthy/falsy",
        type: "ÉP KIỂU",
        title: "Một số giá trị tự động là sai",
        body: "Các giá trị falsy gồm <code>false, 0, \"\", null, undefined, NaN</code>. Mọi object và mảng — kể cả rỗng — đều truthy, nên đừng kiểm tra mảng rỗng bằng if (arr).",
        line: 11,
        mark: [11],
        watch: [{ name: "[]", value: "truthy", type: "array" }, { name: "\"\"", value: "falsy", type: "string" }],
        output: "",
        visual: S.table(["Giá trị", "Truthy?"], [["0", "không"], ["\"\"", "không"], ["[]", "có"], ["{}", "có"]], 2, "Mảng/object rỗng vẫn truthy"),
        note: "Kiểm tra mảng rỗng bằng arr.length === 0.",
        changes: ["Hiểu vì sao if ([]) vẫn chạy."]
      },
      {
        short: "Guard clause",
        type: "THỰC HÀNH",
        title: "Thoát sớm thay vì lồng sâu",
        body: "Nếu dữ liệu thiếu, trả về hoặc throw ngay đầu hàm. Guard clause giảm số tầng if lồng nhau và làm luồng chính dễ đọc.",
        line: 11,
        mark: [11, 12],
        watch: [{ name: "passed", value: "true", type: "boolean" }],
        output: "Qua môn",
        visual: S.flow([{ label: "Kiểm tra đầu vào", sub: "hợp lệ?" }, { label: "Xử lý chính", sub: "thẳng" }, { label: "Kết quả", sub: "trả về" }], [0]),
        note: "Đừng lạm dụng ternary cho logic nhiều nhánh.",
        changes: ["Logic ngắn gọn, ít lồng."]
      }
    ]
  };

  L["js-loops"] = {
    id: "js-loops",
    track: "code",
    module: "code-control",
    title: "Vòng lặp",
    shortTitle: "Loops",
    subtitle: "Lặp qua mảng và tính toán mà không viết lặp code.",
    blurb: "for...of, forEach, tính tổng và trung bình — nền tảng để xử lý danh sách dữ liệu.",
    level: "Cơ bản",
    duration: "14 phút",
    lang: "js",
    tags: ["for", "for-of", "forEach", "loop"],
    learn: [
      "Lặp qua mảng bằng for...of",
      "Tính tổng và trung bình",
      "Dùng forEach khi cần index",
      "Tránh vòng lặp vô hạn"
    ],
    code: `const scores = [9, 7, 8, 10];
let total = 0;

for (const score of scores) {
  total += score;
}

const average = total / scores.length;
console.log(average);

scores.forEach((score, index) => {
  console.log(index, score);
});`,
    file: "loops.js",
    life: {
      icon: "bulb",
      title: "Chấm từng bài",
      text: "Vòng lặp giống đi qua từng tờ bài thi trong chồng: lấy một tờ, cộng điểm, sang tờ tiếp. Không cần viết tay bốn lần nếu có bốn bài."
    },
    visual: S.arr([9, 7, 8, 10], [0], { caption: "Mảng điểm, phần tử đầu đang được xử lý" }),
    steps: [
      {
        short: "Mảng dữ liệu",
        type: "DỮ LIỆU",
        title: "Bắt đầu với mảng",
        body: "Mảng <code>[9,7,8,10]</code> giữ các giá trị theo thứ tự. <code>scores.length</code> cho biết số phần tử; chỉ số bắt đầu từ 0.",
        line: 1,
        mark: [1],
        watch: [{ name: "scores.length", value: "4", type: "number" }],
        output: "",
        visual: S.arr([9, 7, 8, 10], [], { caption: "Bốn điểm, index 0–3" }),
        note: "Phần tử cuối có index length - 1.",
        changes: ["Có mảng bốn điểm."]
      },
      {
        short: "for...of",
        type: "LẶP",
        title: "for...of lấy từng giá trị",
        body: "<code>for (const score of scores)</code> lần lượt gán từng giá trị cho score. Không cần quản lý index nếu chỉ cần giá trị.",
        line: 4,
        mark: [4, 5, 6],
        watch: [{ name: "lần 1", value: "9", type: "score" }, { name: "lần 2", value: "7", type: "score" }],
        output: "",
        visual: S.arr([9, 7, 8, 10], [0, 1], { caption: "for...of đi qua từng phần tử" }),
        note: "Không sửa mảng trong lúc đang lặp nếu không thật cần; dễ gây bỏ sót phần tử.",
        changes: ["Mỗi điểm được cộng vào total."]
      },
      {
        short: "Tính tổng",
        type: "TÍCH LŨY",
        title: "total += score cộng dồn",
        body: "<code>total += score</code> tương đương <code>total = total + score</code>. Sau vòng lặp, total là tổng các điểm. Chia cho length để được trung bình.",
        line: 8,
        mark: [2, 5, 8, 9],
        watch: [{ name: "total", value: "34", type: "number" }, { name: "average", value: "8.5", type: "number" }],
        output: "8.5",
        visual: S.vars([{ name: "total", type: "number", value: "34" }, { name: "length", type: "number", value: "4" }, { name: "average", type: "number", value: "8.5" }]),
        note: "Kiểm tra mảng rỗng trước khi chia để tránh NaN.",
        changes: ["Trung bình là 8.5."]
      },
      {
        short: "forEach",
        type: "DUYỆT",
        title: "forEach có index",
        body: "<code>forEach((value, index) =&gt; ...)</code> gọi hàm cho từng phần tử. Dùng khi cần cả giá trị và vị trí, hoặc muốn viết theo phong cách hàm.",
        line: 11,
        mark: [11, 12, 13],
        watch: [{ name: "index", value: "0,1,2,3", type: "number" }, { name: "score", value: "9,7,8,10", type: "number" }],
        output: "0 9\n1 7\n2 8\n3 10",
        visual: S.arr([9, 7, 8, 10], [0], { caption: "forEach cung cấp index và value" }),
        note: "forEach không dừng giữa chừng bằng break; nếu cần dừng, dùng for...of.",
        changes: ["Mỗi cặp index/score được in."]
      },
      {
        short: "Cẩn thận",
        type: "LỖI THƯỜNG GẶP",
        title: "Đừng tạo vòng lặp vô hạn",
        body: "Với while, phải đảm bảo điều kiện sẽ thành false. Với for, kiểm tra điều kiện dừng và bước nhảy. Vòng lặp vô hạn làm treo tab.",
        line: 2,
        mark: [2],
        watch: [{ name: "điều kiện dừng", value: "bắt buộc", type: "safety" }],
        output: "",
        visual: S.flow([{ label: "Khởi tạo", sub: "i = 0" }, { label: "Kiểm tra", sub: "i < n" }, { label: "Thân", sub: "xử lý" }, { label: "Tăng", sub: "i++" }], [1]),
        note: "Nếu vô tình treo tab, đóng tab và kiểm tra lại điều kiện.",
        changes: ["Biết cách tránh vòng lặp vô hạn."]
      }
    ]
  };

  L["js-functions"] = {
    id: "js-functions",
    track: "code",
    module: "code-control",
    title: "Hàm",
    shortTitle: "Functions",
    subtitle: "Đóng gói logic để dùng lại và đặt tên cho ý định.",
    blurb: "Khai báo hàm, tham số, return, arrow function, default parameter và tư duy hàm thuần.",
    level: "Cơ bản",
    duration: "15 phút",
    lang: "js",
    tags: ["function", "return", "arrow", "default", "pure"],
    learn: [
      "Khai báo và gọi hàm",
      "Dùng tham số và return",
      "Viết arrow function",
      "Hiểu lợi ích của hàm thuần"
    ],
    code: `function average(items) {
  let sum = 0;
  for (const item of items) {
    sum += item;
  }
  return sum / items.length;
}

const scores = [8, 9, 7];
console.log(average(scores));

const greet = (name = "bạn") => "Chào " + name;`,
    file: "functions.js",
    life: {
      icon: "bulb",
      title: "Công thức nấu ăn",
      text: "Hàm là công thức: nhận nguyên liệu (tham số), làm các bước, trả món (return). Đặt tên công thức giúp người khác biết nấu gì mà không đọc từng bước."
    },
    visual: S.flow([{ label: "Đầu vào", sub: "items" }, { label: "Xử lý", sub: "sum" }, { label: "Đầu ra", sub: "return" }], [1]),
    steps: [
      {
        short: "Khai báo",
        type: "HÀM",
        title: "function tạo một khối logic có tên",
        body: "<code>function average(items)</code> khai báo hàm nhận một tham số. Thân hàm chỉ chạy khi được gọi, không chạy ngay khi khai báo.",
        line: 1,
        mark: [1, 2],
        watch: [{ name: "average", value: "function", type: "declaration" }],
        output: "",
        visual: S.vars([{ name: "average", type: "function", value: "(items) => number", note: "chưa chạy" }]),
        note: "Tên hàm nên là động từ hoặc cụm mô tả kết quả: average, formatPrice, validateEmail.",
        changes: ["Hàm average được định nghĩa."]
      },
      {
        short: "return",
        type: "KẾT QUẢ",
        title: "return trả giá trị ra ngoài",
        body: "<code>return sum / items.length</code> dừng hàm và trả kết quả. Nếu không có return, hàm trả về <code>undefined</code>.",
        line: 6,
        mark: [3, 4, 5, 6, 7],
        watch: [{ name: "return", value: "sum / length", type: "number" }],
        output: "",
        visual: S.flow([{ label: "sum = 24", sub: "cộng dồn" }, { label: "length = 3", sub: "số phần tử" }, { label: "return 8", sub: "kết quả" }], [2]),
        note: "return cũng thoát hàm ngay; code sau return không chạy.",
        changes: ["Hàm trả về trung bình."]
      },
      {
        short: "Gọi hàm",
        type: "SỬ DỤNG",
        title: "Gọi hàm với đối số",
        body: "<code>average(scores)</code> truyền mảng vào tham số items và nhận kết quả. Có thể dùng kết quả trực tiếp trong console.log hoặc gán cho biến.",
        line: 10,
        mark: [9, 10],
        watch: [{ name: "scores", value: "[8,9,7]", type: "array" }, { name: "average", value: "8", type: "result" }],
        output: "8",
        visual: S.vars([{ name: "items", type: "array", value: "[8,9,7]" }, { name: "kết quả", type: "number", value: "8" }]),
        note: "Đối số là giá trị truyền vào; tham số là biến nhận trong hàm.",
        changes: ["Console in 8."]
      },
      {
        short: "Arrow function",
        type: "CÚ PHÁP",
        title: "Arrow function viết ngắn hơn",
        body: "<code>const greet = (name = \"bạn\") =&gt; \"Chào \" + name;</code> là hàm mũi tên có tham số mặc định. Nếu thân chỉ là một biểu thức, có thể bỏ ngoặc nhọn và return.",
        line: 12,
        mark: [12],
        watch: [{ name: "greet()", value: "Chào bạn", type: "default" }, { name: "greet(\"An\")", value: "Chào An", type: "argument" }],
        output: "",
        visual: S.table(["Cách viết", "Khi nào"], [["function", "cần tên, dễ đọc"], ["arrow", "callback ngắn"], ["method", "trong object/class"]], 1, "Chọn theo ngữ cảnh"),
        note: "Arrow function không có this riêng; cẩn thận khi dùng làm method của object.",
        changes: ["Có hàm greet với tham số mặc định."]
      },
      {
        short: "Hàm thuần",
        type: "TƯ DUY",
        title: "Cùng đầu vào, cùng đầu ra",
        body: "Hàm thuần không sửa biến bên ngoài và không phụ thuộc trạng thái ẩn. Hàm thuần dễ test, dễ suy luận và ít gây lỗi dây chuyền.",
        line: 1,
        mark: [1],
        watch: [{ name: "pure", value: "true", type: "quality" }],
        output: "",
        visual: S.table(["Đặc điểm", "Hàm thuần"], [["Sửa biến ngoài", "không"], ["Gọi API", "không"], ["Cùng input", "cùng output"]], 2, "Hàm thuần dễ kiểm thử"),
        note: "Không phải mọi hàm đều cần thuần; nhưng logic tính toán nên cố gắng thuần.",
        changes: ["average là hàm thuần."]
      }
    ]
  };

  L["js-arrays"] = {
    id: "js-arrays",
    track: "code",
    module: "code-control",
    title: "Mảng và xử lý danh sách",
    shortTitle: "Arrays",
    subtitle: "Thêm, lọc, biến đổi và sao chép mảng.",
    blurb: "push, filter, map, find và spread — bộ lệnh không thể thiếu khi làm việc với danh sách.",
    level: "Cơ bản",
    duration: "15 phút",
    lang: "js",
    tags: ["array", "filter", "map", "find", "spread"],
    learn: [
      "Thêm/xóa phần tử cơ bản",
      "Lọc và biến đổi mảng",
      "Tìm phần tử theo điều kiện",
      "Sao chép mảng trước khi sửa"
    ],
    code: `const tasks = ["học CSS", "làm bài tập"];
tasks.push("ôn JavaScript");
console.log(tasks.length); // 3

const longTasks = tasks.filter((task) => task.length > 8);
console.log(longTasks);

const labels = tasks.map((task) => "• " + task);
console.log(labels);

const first = tasks.find((task) => task.includes("CSS"));
console.log(first);

const copy = [...tasks];`,
    file: "arrays.js",
    life: {
      icon: "bulb",
      title: "Danh sách việc cần làm",
      text: "Mảng là danh sách có thứ tự. filter chọn việc dài, map dán nhãn từng việc, find tìm việc đầu tiên khớp — mỗi hàm một nhiệm vụ."
    },
    visual: S.arr(["học CSS", "làm bài tập", "ôn JavaScript"], [2], { caption: "Mảng task sau khi push" }),
    steps: [
      {
        short: "push",
        type: "THÊM",
        title: "push thêm vào cuối mảng",
        body: "<code>tasks.push(\"ôn JavaScript\")</code> thêm phần tử mới và trả về độ dài mới. Nếu cần thêm đầu mảng, dùng <code>unshift</code>.",
        line: 2,
        mark: [1, 2, 3],
        watch: [{ name: "length", value: "3", type: "number" }],
        output: "",
        visual: S.arr(["học CSS", "làm bài tập", "ôn JavaScript"], [2], { caption: "Phần tử mới ở cuối" }),
        note: "push sửa mảng gốc; nếu không muốn sửa, hãy tạo mảng mới bằng spread.",
        changes: ["Mảng có thêm ôn JavaScript."]
      },
      {
        short: "filter",
        type: "LỌC",
        title: "filter giữ phần tử thỏa điều kiện",
        body: "<code>filter((task) =&gt; task.length &gt; 8)</code> trả về mảng mới chỉ gồm phần tử có độ dài lớn hơn 8. Mảng gốc không đổi.",
        line: 5,
        mark: [5, 6],
        watch: [{ name: "longTasks", value: "[\"ôn JavaScript\"]", type: "array" }],
        output: '["ôn JavaScript"]',
        visual: S.arr(["học CSS", "làm bài tập", "ôn JavaScript"], [2], { caption: "filter chọn phần tử dài hơn 8 ký tự" }),
        note: "Callback của filter phải trả về boolean.",
        changes: ["longTasks chỉ còn ôn JavaScript."]
      },
      {
        short: "map",
        type: "BIẾN ĐỔI",
        title: "map tạo mảng mới cùng độ dài",
        body: "<code>map</code> biến đổi từng phần tử và trả về mảng mới. Số phần tử không đổi; đừng dùng map nếu chỉ muốn lọc.",
        line: 8,
        mark: [8, 9],
        watch: [{ name: "labels", value: "3 phần tử", type: "array" }],
        output: '["• học CSS", "• làm bài tập", "• ôn JavaScript"]',
        visual: S.arr(["• học CSS", "• làm bài tập", "• ôn JavaScript"], [0], { caption: "Mỗi task được thêm dấu •" }),
        note: "Nếu callback không return gì, mảng kết quả toàn undefined.",
        changes: ["labels có nhãn cho từng task."]
      },
      {
        short: "find",
        type: "TÌM",
        title: "find trả phần tử đầu tiên khớp",
        body: "<code>find</code> trả về phần tử đầu tiên thỏa điều kiện hoặc <code>undefined</code>. Nếu cần tất cả, dùng filter; nếu cần vị trí, dùng findIndex.",
        line: 11,
        mark: [11, 12],
        watch: [{ name: "first", value: "học CSS", type: "string" }],
        output: "học CSS",
        visual: S.arr(["học CSS", "làm bài tập", "ôn JavaScript"], [0], { caption: "find dừng ở phần tử đầu tiên khớp" }),
        note: "Luôn kiểm tra undefined trước khi dùng thuộc tính của kết quả find.",
        changes: ["first là học CSS."]
      },
      {
        short: "Spread",
        type: "SAO CHÉP",
        title: "[...tasks] tạo bản sao nông",
        body: "<code>[...tasks]</code> tạo mảng mới với các phần tử được sao. Sửa mảng copy không ảnh hưởng mảng gốc, nhưng object bên trong vẫn dùng chung tham chiếu.",
        line: 14,
        mark: [14],
        watch: [{ name: "copy", value: "mảng mới", type: "shallow" }],
        output: "",
        visual: S.table(["Cách làm", "Ảnh hưởng"], [["const b = a", "cùng mảng"], ["[...a]", "mảng mới"], ["structuredClone", "sao sâu"]], 1, "Spread sao chép nông"),
        note: "Với mảng object, sao chép sâu cần structuredClone hoặc thư viện phù hợp.",
        changes: ["Có bản sao để sửa an toàn."]
      }
    ]
  };

  L["js-objects"] = {
    id: "js-objects",
    track: "code",
    module: "code-control",
    title: "Object",
    shortTitle: "Objects",
    subtitle: "Gom dữ liệu có tên và cập nhật không phá dữ liệu gốc.",
    blurb: "Thuộc tính, object lồng nhau, destructuring và spread — cách mô hình hóa một người dùng, một sản phẩm, một card.",
    level: "Cơ bản",
    duration: "15 phút",
    lang: "js",
    tags: ["object", "property", "destructuring", "spread", "reference"],
    learn: [
      "Truy cập và cập nhật thuộc tính",
      "Làm việc với object lồng nhau",
      "Destructuring để lấy dữ liệu",
      "Phân biệt tham chiếu và bản sao"
    ],
    code: `const student = {
  name: "An",
  age: 20,
  skills: ["HTML", "CSS"]
};

student.age = 21;
student.skills.push("JavaScript");
console.log(student.skills);

const { name, skills } = student;
console.log(name, skills.length);

const updated = { ...student, age: 22 };`,
    file: "objects.js",
    life: {
      icon: "bulb",
      title: "Thẻ sinh viên",
      text: "Object giống một thẻ có nhiều trường: tên, tuổi, kỹ năng. Cập nhật tuổi không làm mất tên; nhưng nếu hai người cùng giữ một thẻ, sửa một nơi là cả hai thấy đổi."
    },
    visual: S.table(["Khóa", "Giá trị"], [["name", "An"], ["age", "20"], ["skills", "[HTML, CSS]"]], 0, "Object student"),
    steps: [
      {
        short: "Tạo object",
        type: "CẤU TRÚC",
        title: "Object gồm các cặp khóa–giá trị",
        body: "Object literal dùng ngoặc nhọn, mỗi thuộc tính là <code>key: value</code>. Giá trị có thể là chuỗi, số, mảng hoặc object khác.",
        line: 1,
        mark: [1, 2, 3, 4, 5],
        watch: [{ name: "student.name", value: "An", type: "string" }, { name: "student.skills", value: "2", type: "array" }],
        output: "",
        visual: S.table(["Khóa", "Giá trị"], [["name", "An"], ["age", "20"], ["skills", "[HTML, CSS]"]], 0, "Object student"),
        note: "Khóa không cần nháy nếu là định danh hợp lệ; vẫn có thể dùng nháy khi cần.",
        changes: ["student có ba thuộc tính."]
      },
      {
        short: "Cập nhật",
        type: "MUTATION",
        title: "Dấu chấm cập nhật thuộc tính",
        body: "<code>student.age = 21</code> sửa trực tiếp object. Đây là mutation; với state trong React hoặc dữ liệu dùng chung, nên tạo object mới thay vì sửa.",
        line: 7,
        mark: [7, 8, 9],
        watch: [{ name: "student.age", value: "21", type: "number" }, { name: "skills.length", value: "3", type: "number" }],
        output: '["HTML", "CSS", "JavaScript"]',
        visual: S.table(["Khóa", "Trước", "Sau"], [["age", "20", "21"], ["skills", "2 mục", "3 mục"]], 1, "Mutation cập nhật trực tiếp"),
        note: "Không sửa trực tiếp props/state trong framework; hãy tạo bản sao.",
        changes: ["age thành 21, skills có thêm JavaScript."]
      },
      {
        short: "Destructuring",
        type: "LẤY DỮ LIỆU",
        title: "Tách thuộc tính thành biến",
        body: "<code>const { name, skills } = student</code> lấy hai thuộc tính ra biến cùng tên. Cách này giúp code gọn khi dùng nhiều trường.",
        line: 11,
        mark: [11, 12],
        watch: [{ name: "name", value: "An", type: "string" }, { name: "skills.length", value: "3", type: "number" }],
        output: "An 3",
        visual: S.vars([{ name: "name", type: "string", value: "An" }, { name: "skills", type: "array", value: "[HTML, CSS, JS]" }]),
        note: "Có thể đổi tên: const { name: studentName } = student.",
        changes: ["name và skills trở thành biến riêng."]
      },
      {
        short: "Spread",
        type: "BẢN SAO",
        title: "{ ...student, age: 22 } tạo bản mới",
        body: "Spread sao chép các thuộc tính rồi ghi đè age. Object gốc không đổi. Đây là mẫu cập nhật bất biến thường dùng trong React.",
        line: 14,
        mark: [14],
        watch: [{ name: "student.age", value: "21", type: "original" }, { name: "updated.age", value: "22", type: "copy" }],
        output: "",
        visual: S.table(["Object", "age"], [["student", "21"], ["updated", "22"]], 1, "Spread tạo object mới"),
        note: "Spread chỉ sao chép nông; mảng skills vẫn dùng chung giữa hai object.",
        changes: ["updated là object mới với age 22."]
      },
      {
        short: "Tham chiếu",
        type: "CẨN THẬN",
        title: "Object là tham chiếu",
        body: "<code>const b = a</code> không sao chép object; cả hai trỏ cùng một nơi. Sửa b.name cũng đổi a.name. Muốn độc lập, hãy tạo bản sao.",
        line: 3,
        mark: [3],
        watch: [{ name: "a === b", value: "true", type: "reference" }],
        output: "",
        visual: S.flow([{ label: "a", sub: "tham chiếu" }, { label: "object", sub: "một nơi" }, { label: "b", sub: "tham chiếu" }], [1]),
        note: "So sánh object bằng === kiểm tra cùng tham chiếu, không so nội dung.",
        changes: ["Hiểu vì sao sửa b ảnh hưởng a."]
      }
    ]
  };

  L["js-dom"] = {
    id: "js-dom",
    track: "code",
    module: "code-dom",
    title: "Thao tác DOM",
    shortTitle: "DOM",
    subtitle: "Tạo, sửa và thêm phần tử vào trang.",
    blurb: "querySelector, createElement, textContent, classList và append — cách JavaScript thay đổi giao diện thật.",
    level: "Cơ bản",
    duration: "15 phút",
    lang: "js",
    tags: ["dom", "createElement", "classList", "append"],
    learn: [
      "Chọn phần tử cha",
      "Tạo phần tử mới",
      "Thêm class và nội dung",
      "Gắn phần tử vào DOM"
    ],
    code: `const list = document.querySelector(".tasks");
const item = document.createElement("li");
item.textContent = "Học DOM";
item.classList.add("done");
list.append(item);

const title = document.querySelector("h1");
title.textContent = "Danh sách mới";
console.log(list.children.length);

const box = document.querySelector(".box");
box.classList.toggle("active");`,
    file: "dom.js",
    life: {
      icon: "bulb",
      title: "Xếp ghế trong phòng",
      text: "DOM là sơ đồ phòng. createElement làm chiếc ghế mới, textContent viết tên, append đặt ghế vào phòng. Trước khi append, ghế chưa hiện ra."
    },
    visual: S.dom([{ tag: "ul.tasks", depth: 0 }, { tag: "li", depth: 1, text: "Học DOM" }], [0], "Phần tử mới sắp được thêm vào ul"),
    steps: [
      {
        short: "Chọn cha",
        type: "DOM",
        title: "Chọn nơi sẽ gắn phần tử",
        body: "<code>document.querySelector(\".tasks\")</code> tìm phần tử đầu tiên có class tasks. Đây sẽ là cha của item mới.",
        line: 1,
        mark: [1],
        watch: [{ name: "list", value: "ul.tasks", type: "Element" }],
        output: "",
        visual: S.dom([{ tag: "ul.tasks", depth: 0 }, { tag: "li", depth: 1, text: "Việc cũ" }], [0], "ul.tasks là cha"),
        note: "Nếu không tìm thấy, list là null và append sẽ lỗi.",
        changes: ["Biến list trỏ tới ul.tasks."]
      },
      {
        short: "Tạo phần tử",
        type: "TẠO",
        title: "createElement tạo phần tử chưa gắn",
        body: "<code>document.createElement(\"li\")</code> tạo một li trong bộ nhớ nhưng chưa nằm trong trang. Phải append mới hiển thị.",
        line: 2,
        mark: [2, 3, 4],
        watch: [{ name: "item", value: "li", type: "detached" }],
        output: "",
        visual: S.dom([{ tag: "li (ngoài DOM)", depth: 0, text: "Học DOM", note: "chưa hiển thị" }], [0], "Phần tử mới chưa gắn vào cây"),
        note: "Tạo xong nên đặt text/class trước khi append để giảm số lần reflow.",
        changes: ["Có li với text Học DOM và class done."]
      },
      {
        short: "append",
        type: "GẮN",
        title: "append đưa phần tử vào DOM",
        body: "<code>list.append(item)</code> thêm item làm con cuối của list. Lúc này phần tử mới xuất hiện trên trang và có thể nhận sự kiện.",
        line: 5,
        mark: [5],
        watch: [{ name: "list.children.length", value: "2", type: "number" }],
        output: "",
        visual: S.dom([{ tag: "ul.tasks", depth: 0 }, { tag: "li", depth: 1, text: "Việc cũ" }, { tag: "li.done", depth: 1, text: "Học DOM", note: "mới" }], [2], "li mới đã nằm trong ul"),
        note: "append nhận nhiều node hoặc chuỗi; appendChild chỉ nhận node.",
        changes: ["Danh sách có thêm một mục."]
      },
      {
        short: "Đổi chữ",
        type: "NỘI DUNG",
        title: "textContent cập nhật tiêu đề",
        body: "Chọn h1 và gán <code>textContent</code> mới. Thay đổi này diễn ra ngay, không cần tải lại trang. Với nội dung người dùng, tránh innerHTML.",
        line: 8,
        mark: [7, 8],
        watch: [{ name: "title.textContent", value: "Danh sách mới", type: "string" }],
        output: "",
        visual: S.dom([{ tag: "h1", depth: 0, text: "Danh sách mới" }], [0], "Tiêu đề đã đổi"),
        note: "Nếu cần chèn HTML có kiểm soát, hãy sanitize trước.",
        changes: ["Tiêu đề trang thành Danh sách mới."]
      },
      {
        short: "classList",
        type: "TRẠNG THÁI",
        title: "classList toggle bật/tắt class",
        body: "<code>box.classList.toggle(\"active\")</code> thêm class nếu chưa có, xóa nếu đã có. Đây là cách phổ biến để bật trạng thái giao diện bằng CSS.",
        line: 12,
        mark: [11, 12],
        watch: [{ name: "class", value: "active", type: "toggled" }],
        output: "",
        visual: S.flow([{ label: "box", sub: "class=box" }, { label: "toggle", sub: "active" }, { label: "box.active", sub: "CSS áp dụng" }], [1]),
        note: "Đừng sửa className bằng nối chuỗi; classList an toàn và rõ ràng hơn.",
        changes: ["Box bật/tắt class active."]
      }
    ]
  };

  L["js-events"] = {
    id: "js-events",
    track: "code",
    module: "code-dom",
    title: "Sự kiện và form",
    shortTitle: "Events",
    subtitle: "Phản hồi thao tác người dùng một cách có kiểm soát.",
    blurb: "submit, preventDefault, đọc input, cập nhật danh sách và tránh reload trang — vòng lặp tương tác cơ bản.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "js",
    tags: ["event", "submit", "preventDefault", "form", "event-delegation"],
    learn: [
      "Nghe sự kiện submit",
      "Chặn hành vi mặc định",
      "Đọc và xóa giá trị input",
      "Cập nhật danh sách sau khi gửi"
    ],
    code: `const form = document.querySelector("form");
const input = document.querySelector("#task");
const list = document.querySelector(".tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!input.value.trim()) return;
  const item = document.createElement("li");
  item.textContent = input.value;
  list.append(item);
  input.value = "";
});

button.addEventListener("click", () => console.log("Bấm"));`,
    file: "events.js",
    life: {
      icon: "bulb",
      title: "Chuông cửa",
      text: "Sự kiện là chuông cửa: có người bấm, bạn phản ứng. preventDefault là quyết định không chạy hành vi mặc định, để tự xử lý theo cách của mình."
    },
    visual: S.flow([{ label: "Người dùng gửi", sub: "submit" }, { label: "Handler", sub: "preventDefault" }, { label: "Cập nhật DOM", sub: "append" }], [0]),
    steps: [
      {
        short: "Nghe submit",
        type: "SỰ KIỆN",
        title: "Form phát sự kiện submit",
        body: "<code>form.addEventListener(\"submit\", handler)</code> chạy khi người dùng bấm nút submit hoặc nhấn Enter trong ô nhập. Đây là thời điểm hợp lệ để xử lý dữ liệu.",
        line: 5,
        mark: [5],
        watch: [{ name: "event", value: "submit", type: "form" }],
        output: "",
        visual: S.flow([{ label: "Nhập liệu", sub: "input" }, { label: "Submit", sub: "Enter/button" }, { label: "Handler", sub: "chạy" }], [1]),
        note: "Nghe submit trên form tốt hơn nghe click trên nút, vì Enter cũng kích hoạt submit.",
        changes: ["Form có hàm xử lý submit."]
      },
      {
        short: "preventDefault",
        type: "CHẶN",
        title: "Chặn reload trang mặc định",
        body: "Mặc định submit sẽ gửi dữ liệu và tải lại trang. <code>event.preventDefault()</code> chặn hành vi đó để JavaScript tự cập nhật giao diện.",
        line: 6,
        mark: [6],
        watch: [{ name: "default", value: "chặn", type: "prevented" }],
        output: "",
        visual: S.table(["Không chặn", "Có chặn"], [["trang reload", "ở lại trang"], ["mất state", "giữ state"], ["server nhận", "tự xử lý"]], 1, "preventDefault giữ trang không reload"),
        note: "Nếu thật sự muốn gửi lên server, đừng chặn; hãy để form hoạt động bình thường.",
        changes: ["Trang không reload khi submit."]
      },
      {
        short: "Validate",
        type: "KIỂM TRA",
        title: "Chặn dữ liệu rỗng",
        body: "<code>if (!input.value.trim()) return;</code> kiểm tra chuỗi sau khi bỏ khoảng trắng. Nếu rỗng, thoát sớm để không thêm mục vô nghĩa.",
        line: 7,
        mark: [7],
        watch: [{ name: "input.value", value: "\"\"", type: "empty" }, { name: "return", value: "dừng", type: "guard" }],
        output: "",
        visual: S.flow([{ label: "Đọc value", sub: "trim" }, { label: "Rỗng?", sub: "return" }, { label: "Hợp lệ", sub: "tiếp tục" }], [1]),
        note: "Validate phía client không thay thế validate phía server.",
        changes: ["Không thêm mục rỗng."]
      },
      {
        short: "Cập nhật danh sách",
        type: "DOM",
        title: "Tạo li và append",
        body: "Tạo <code>li</code>, gán <code>textContent</code> từ input, rồi <code>append</code> vào danh sách. Cuối cùng xóa input để người dùng nhập tiếp.",
        line: 8,
        mark: [8, 9, 10, 11, 12],
        watch: [{ name: "item", value: "li", type: "new" }, { name: "input.value", value: "\"\"", type: "cleared" }],
        output: "Học sự kiện",
        visual: S.dom([{ tag: "ul.tasks", depth: 0 }, { tag: "li", depth: 1, text: "Việc cũ" }, { tag: "li", depth: 1, text: "Học sự kiện", note: "mới" }], [2], "Danh sách có mục mới"),
        note: "Với dữ liệu người dùng, textContent an toàn hơn innerHTML.",
        changes: ["Mục mới xuất hiện và ô nhập trống."]
      },
      {
        short: "Event delegation",
        type: "MỞ RỘNG",
        title: "Nghe ở cha thay vì từng con",
        body: "Khi danh sách động, thay vì gắn sự kiện cho từng li, gắn một listener ở ul và kiểm tra <code>event.target</code>. Cách này gọi là event delegation.",
        line: 14,
        mark: [14],
        watch: [{ name: "listener", value: "1 ở cha", type: "delegation" }],
        output: "",
        visual: S.flow([{ label: "Click li", sub: "bubble" }, { label: "Listener ul", sub: "nhận" }, { label: "Kiểm tra target", sub: "xử lý" }], [1]),
        note: "Event delegation đặc biệt hữu ích khi các item được thêm/xóa liên tục.",
        changes: ["Hiểu cách nghe sự kiện cho danh sách động."]
      }
    ]
  };

})();
