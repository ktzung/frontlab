/* FrontLab — Lập trình Frontend · phần 2 (bài 11–20) */
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

  L["forms-validation"] = {
    id: "forms-validation",
    track: "code",
    module: "code-dom",
    title: "Form và validation",
    shortTitle: "Validation",
    subtitle: "Kiểm tra dữ liệu trước khi gửi và phản hồi lỗi rõ ràng.",
    blurb: "submit, preventDefault, kiểm tra email, focus vào lỗi và thông báo trạng thái — luồng form cơ bản nhưng đầy đủ.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "js",
    tags: ["form", "validation", "submit", "error", "focus"],
    learn: [
      "Chặn submit mặc định",
      "Kiểm tra dữ liệu trước khi gửi",
      "Hiển thị lỗi gần trường nhập",
      "Focus vào trường lỗi đầu tiên"
    ],
    code: `const form = document.querySelector("#signup");
const email = document.querySelector("#email");
const error = document.querySelector(".error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.value.includes("@")) {
    error.textContent = "Email chưa hợp lệ";
    email.focus();
    return;
  }
  error.textContent = "";
  form.submit();
});`,
    file: "validation.js",
    life: {
      icon: "bulb",
      title: "Nhân viên soát vé",
      text: "Validation là người soát vé: kiểm tra trước khi cho qua, chỉ ra vé sai ở đâu. Thông báo chung chung “có lỗi” không giúp người dùng sửa."
    },
    visual: S.flow([{ label: "Người dùng gửi", sub: "submit" }, { label: "Kiểm tra", sub: "email" }, { label: "Lỗi?", sub: "thông báo" }, { label: "Hợp lệ", sub: "gửi" }], [1]),
    steps: [
      {
        short: "Chặn submit",
        type: "SỰ KIỆN",
        title: "Nghe submit trên form",
        body: "Gắn listener cho <code>submit</code> thay vì click, để xử lý cả khi người dùng nhấn Enter. Gọi <code>preventDefault</code> để tự kiểm soát luồng gửi.",
        line: 5,
        mark: [5, 6],
        watch: [{ name: "default", value: "chặn", type: "prevented" }],
        output: "",
        visual: S.flow([{ label: "Form", sub: "submit" }, { label: "preventDefault", sub: "dừng reload" }, { label: "Kiểm tra", sub: "JS" }], [1]),
        note: "Nếu không chặn, trang sẽ tải lại và mất thông báo lỗi vừa hiện.",
        changes: ["Form chờ JavaScript kiểm tra."]
      },
      {
        short: "Kiểm tra",
        type: "LOGIC",
        title: "Kiểm tra điều kiện tối thiểu",
        body: "<code>email.value.includes(\"@\")</code> là kiểm tra đơn giản. Trình duyệt có <code>type=\"email\"</code> và <code>required</code>, nhưng vẫn nên có phản hồi rõ trong JS.",
        line: 7,
        mark: [7],
        watch: [{ name: "email.value", value: "an@example.com", type: "string" }, { name: "includes(@)", value: "true", type: "boolean" }],
        output: "",
        visual: S.table(["Giá trị", "Hợp lệ?"], [["an@example.com", "có"], ["an.example.com", "không"], ["", "không"]], 0, "Kiểm tra tối thiểu trước khi gửi"),
        note: "Kiểm tra định dạng email đầy đủ rất phức tạp; server vẫn là nơi xác thực cuối cùng.",
        changes: ["Email được kiểm tra."]
      },
      {
        short: "Báo lỗi",
        type: "PHẢN HỒI",
        title: "Hiện lỗi và focus đúng chỗ",
        body: "Gán <code>error.textContent</code> để hiện thông báo, rồi <code>email.focus()</code> đưa con trỏ về trường sai. Người dùng không phải tự tìm lỗi ở đâu.",
        line: 8,
        mark: [8, 9, 10],
        watch: [{ name: "error", value: "Email chưa hợp lệ", type: "message" }, { name: "focus", value: "email", type: "element" }],
        output: "Email chưa hợp lệ",
        visual: S.dom([{ tag: "label", depth: 0, text: "Email" }, { tag: "input", depth: 0, note: "focus" }, { tag: "p.error", depth: 0, text: "Email chưa hợp lệ" }], [1, 2], "Lỗi nằm gần trường nhập"),
        note: "Không chỉ đổi viền đỏ; cần thông báo chữ để người dùng công nghệ hỗ trợ biết lỗi.",
        changes: ["Thông báo lỗi hiện và focus vào email."]
      },
      {
        short: "Gửi hợp lệ",
        type: "THÀNH CÔNG",
        title: "Xóa lỗi khi dữ liệu đúng",
        body: "Khi hợp lệ, xóa thông báo cũ và gửi dữ liệu. Trong ứng dụng thật, đây là lúc gọi API và hiện trạng thái loading; không nên để người dùng bấm nhiều lần.",
        line: 12,
        mark: [12, 13],
        watch: [{ name: "error", value: "\"\"", type: "cleared" }, { name: "submit", value: "gửi", type: "valid" }],
        output: "Đang gửi…",
        visual: S.flow([{ label: "Dữ liệu hợp lệ", sub: "ok" }, { label: "Xóa lỗi", sub: "clear" }, { label: "Gửi", sub: "loading" }], [2]),
        note: "Sau khi gửi, cần xử lý phản hồi thành công hoặc lỗi từ server.",
        changes: ["Form gửi khi dữ liệu hợp lệ."]
      },
      {
        short: "Accessibility",
        type: "A11Y",
        title: "Liên kết lỗi với trường nhập",
        body: "Đặt <code>aria-describedby</code> trỏ tới id của thông báo lỗi, và dùng <code>aria-live</code> cho vùng thông báo để trình đọc màn hình đọc khi lỗi xuất hiện.",
        line: 1,
        mark: [1],
        watch: [{ name: "aria-live", value: "polite", type: "announcement" }],
        output: "",
        visual: S.table(["Thuộc tính", "Mục đích"], [["aria-describedby", "gắn lỗi với input"], ["aria-live", "thông báo thay đổi"], ["aria-invalid", "đánh dấu sai"]], 0, "Lỗi cần được máy đọc"),
        note: "Không dùng màu đỏ làm tín hiệu duy nhất; cần cả chữ và icon.",
        changes: ["Lỗi có thể được trình đọc màn hình đọc."]
      }
    ]
  };

  L["storage"] = {
    id: "storage",
    track: "code",
    module: "code-dom",
    title: "Lưu dữ liệu trên trình duyệt",
    shortTitle: "Storage",
    subtitle: "localStorage, sessionStorage và JSON.",
    blurb: "Lưu tùy chọn giao diện và dữ liệu nhỏ giữa các lần mở trang, kèm những giới hạn cần biết về bảo mật.",
    level: "Trung cấp",
    duration: "14 phút",
    lang: "js",
    tags: ["localStorage", "sessionStorage", "JSON", "storage"],
    learn: [
      "setItem/getItem lưu chuỗi",
      "Chuyển object qua JSON",
      "Phân biệt localStorage và sessionStorage",
      "Không lưu dữ liệu nhạy cảm"
    ],
    code: `const key = "frontlab-theme";
localStorage.setItem(key, "dark");
const theme = localStorage.getItem(key);
console.log(theme);

const profile = { name: "An", level: 2 };
localStorage.setItem("profile", JSON.stringify(profile));
const raw = localStorage.getItem("profile");
const saved = raw ? JSON.parse(raw) : null;
console.log(saved.name);

sessionStorage.setItem("tab", "1");`,
    file: "storage.js",
    life: {
      icon: "bulb",
      title: "Tủ đồ cá nhân",
      text: "localStorage giống tủ đồ ở nhà: còn nguyên khi quay lại. sessionStorage giống tủ gửi tạm: mất khi đóng tab. Đừng để giấy tờ quan trọng trong tủ công khai."
    },
    visual: S.vars([{ name: "key", type: "string", value: "frontlab-theme" }, { name: "value", type: "string", value: "dark" }]),
    steps: [
      {
        short: "setItem",
        type: "GHI",
        title: "localStorage chỉ lưu chuỗi",
        body: "<code>localStorage.setItem(key, value)</code> lưu một cặp chuỗi. Nếu lưu số hay boolean, chúng bị chuyển thành chuỗi; khi đọc sẽ nhận chuỗi.",
        line: 2,
        mark: [1, 2],
        watch: [{ name: "key", value: "frontlab-theme", type: "string" }, { name: "value", value: "dark", type: "string" }],
        output: "",
        visual: S.table(["Key", "Value"], [["frontlab-theme", "dark"]], 0, "localStorage lưu cặp chuỗi"),
        note: "Dữ liệu tồn tại theo origin; các trang cùng tên miền có thể đọc chung.",
        changes: ["Theme dark được lưu."]
      },
      {
        short: "getItem",
        type: "ĐỌC",
        title: "getItem trả chuỗi hoặc null",
        body: "<code>getItem</code> trả giá trị đã lưu hoặc <code>null</code> nếu chưa có. Luôn xử lý trường hợp null trước khi dùng giá trị.",
        line: 3,
        mark: [3, 4],
        watch: [{ name: "theme", value: "dark", type: "string" }],
        output: "dark",
        visual: S.vars([{ name: "theme", type: "string", value: "dark", note: "đọc từ storage" }]),
        note: "Không dùng localStorage.getItem để lưu trạng thái tạm trong cùng một render; hãy dùng biến.",
        changes: ["Đọc được giá trị dark."]
      },
      {
        short: "JSON",
        type: "OBJECT",
        title: "JSON.stringify để lưu object",
        body: "localStorage không lưu object trực tiếp. Dùng <code>JSON.stringify(profile)</code> để chuyển thành chuỗi JSON trước khi lưu.",
        line: 7,
        mark: [6, 7],
        watch: [{ name: "encoded", value: "{\"name\":\"An\",\"level\":2}", type: "JSON" }],
        output: "",
        visual: S.vars([{ name: "profile", type: "object", value: "{ name: An, level: 2 }" }, { name: "JSON", type: "string", value: "{\"name\":\"An\"…}" }]),
        note: "JSON không biểu diễn được function, undefined hay Date theo cách bạn mong đợi.",
        changes: ["Object profile được mã hóa JSON."]
      },
      {
        short: "JSON.parse",
        type: "GIẢI MÃ",
        title: "Đọc và parse cẩn thận",
        body: "Đọc chuỗi rồi <code>JSON.parse</code>. Nếu dữ liệu hỏng, parse sẽ throw; hãy bọc try/catch khi dữ liệu có thể bị sửa từ bên ngoài.",
        line: 9,
        mark: [8, 9, 10],
        watch: [{ name: "saved.name", value: "An", type: "string" }],
        output: "An",
        visual: S.flow([{ label: "Chuỗi JSON", sub: "getItem" }, { label: "JSON.parse", sub: "object" }, { label: "Dùng", sub: "saved.name" }], [1]),
        note: "Dữ liệu localStorage do người dùng kiểm soát; không tin tuyệt đối.",
        changes: ["Object được khôi phục và đọc name."]
      },
      {
        short: "Session",
        type: "PHẠM VI",
        title: "sessionStorage sống theo tab",
        body: "<code>sessionStorage</code> giữ dữ liệu trong phiên tab hiện tại. Đóng tab là mất; mở tab mới không thấy dữ liệu cũ. Phù hợp cho bước tạm trong luồng nhiều trang.",
        line: 12,
        mark: [12],
        watch: [{ name: "sessionStorage", value: "tab hiện tại", type: "scope" }],
        output: "",
        visual: S.table(["Loại", "Tồn tại"], [["localStorage", "qua lần mở sau"], ["sessionStorage", "trong tab"], ["cookie", "có thể gửi server"]], 1, "Chọn theo vòng đời dữ liệu"),
        note: "Cả hai đều không mã hóa; không lưu token nhạy cảm hoặc mật khẩu.",
        changes: ["Hiểu phạm vi sessionStorage."]
      }
    ]
  };

  L["async-fetch"] = {
    id: "async-fetch",
    track: "code",
    module: "code-async",
    title: "Gọi API với fetch",
    shortTitle: "fetch API",
    subtitle: "Tải dữ liệu từ server và xử lý trạng thái tải/lỗi.",
    blurb: "fetch, response.ok, response.json, async/await và hiển thị loading — kỹ năng bắt buộc của frontend hiện đại.",
    level: "Trung cấp",
    duration: "17 phút",
    lang: "js",
    tags: ["fetch", "async", "await", "json", "api"],
    learn: [
      "Gọi fetch và chờ phản hồi",
      "Kiểm tra response.ok",
      "Chuyển JSON thành object",
      "Xử lý loading và lỗi"
    ],
    code: `async function loadUsers() {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }
  const users = await response.json();
  return users;
}

loadUsers()
  .then((users) => console.log(users.length))
  .catch((error) => console.error(error.message));

console.log("Đang tải...");`,
    file: "api.js",
    life: {
      icon: "bulb",
      title: "Đặt món qua ứng dụng",
      text: "fetch giống gửi đơn đặt món: bạn không có kết quả ngay, phải chờ. response.ok cho biết nhà hàng nhận đơn, json() là mở hộp đồ ăn."
    },
    visual: S.flow([{ label: "Gọi fetch", sub: "request" }, { label: "Chờ", sub: "promise" }, { label: "Phản hồi", sub: "response" }, { label: "JSON", sub: "dữ liệu" }], [0]),
    steps: [
      {
        short: "async/await",
        type: "BẤT ĐỒNG BỘ",
        title: "await chờ mà không chặn giao diện",
        body: "<code>async function</code> cho phép dùng <code>await</code>. Dòng <code>await fetch(...)</code> tạm dừng hàm này, nhưng trình duyệt vẫn vẽ và phản hồi người dùng.",
        line: 2,
        mark: [1, 2],
        watch: [{ name: "fetch", value: "Promise", type: "async" }],
        output: "",
        visual: S.flow([{ label: "Gọi API", sub: "fetch" }, { label: "Trình duyệt rảnh", sub: "vẫn tương tác" }, { label: "Phản hồi", sub: "tiếp tục hàm" }], [1]),
        note: "Không cần async nếu chỉ dùng .then, nhưng async/await thường dễ đọc hơn.",
        changes: ["Hàm loadUsers bắt đầu gọi API."]
      },
      {
        short: "response.ok",
        type: "KIỂM TRA",
        title: "fetch không throw khi HTTP lỗi",
        body: "fetch chỉ reject khi lỗi mạng. Với HTTP 404/500, promise vẫn resolve; phải kiểm tra <code>response.ok</code> (status 200–299) và tự throw nếu cần.",
        line: 3,
        mark: [3, 4, 5],
        watch: [{ name: "status", value: "404", type: "HTTP" }, { name: "ok", value: "false", type: "boolean" }],
        output: "",
        visual: S.table(["Status", "response.ok"], [["200", "true"], ["204", "true"], ["404", "false"], ["500", "false"]], 2, "Luôn kiểm tra ok trước khi đọc dữ liệu"),
        note: "Đọc response.json() trên trang lỗi có thể làm lỗi khó hiểu hơn.",
        changes: ["Phản hồi lỗi được phát hiện."]
      },
      {
        short: "response.json",
        type: "JSON",
        title: "json() cũng là bất đồng bộ",
        body: "<code>response.json()</code> trả promise vì cần đọc body. Phải <code>await</code> lần nữa mới có object. Nếu body không phải JSON hợp lệ, bước này sẽ throw.",
        line: 6,
        mark: [6, 7, 8],
        watch: [{ name: "users", value: "Array", type: "parsed" }],
        output: "",
        visual: S.flow([{ label: "Response", sub: "body stream" }, { label: "json()", sub: "parse" }, { label: "Object", sub: "users" }], [1]),
        note: "Nếu API trả text, dùng response.text(); nếu trả nhị phân, dùng blob/arrayBuffer.",
        changes: ["Dữ liệu JSON được chuyển thành mảng."]
      },
      {
        short: "then/catch",
        type: "XỬ LÝ",
        title: "then nhận kết quả, catch nhận lỗi",
        body: "Vì loadUsers trả promise, ta dùng <code>.then</code> để dùng kết quả và <code>.catch</code> để bắt lỗi. Trong component, đây là nơi cập nhật loading/error state.",
        line: 10,
        mark: [10, 11, 12],
        watch: [{ name: "then", value: "users", type: "success" }, { name: "catch", value: "Error", type: "failure" }],
        output: "3",
        visual: S.flow([{ label: "Promise", sub: "pending" }, { label: "Fulfilled", sub: "then" }, { label: "Rejected", sub: "catch" }], [1]),
        note: "Đừng quên catch; lỗi không xử lý sẽ hiện unhandled rejection trong console.",
        changes: ["Kết quả hoặc lỗi được xử lý."]
      },
      {
        short: "Loading",
        type: "TRẢI NGHIỆM",
        title: "Cho người dùng biết đang tải",
        body: "<code>console.log(\"Đang tải...\")</code> chạy trước khi API trả về, vì fetch là bất đồng bộ. Trong giao diện, hiện skeleton hoặc spinner thay vì màn hình trống.",
        line: 14,
        mark: [14],
        watch: [{ name: "loading", value: "true", type: "state" }],
        output: "Đang tải...",
        visual: S.flow([{ label: "Bắt đầu", sub: "loading" }, { label: "API trả", sub: "dữ liệu" }, { label: "Hiển thị", sub: "nội dung" }], [0]),
        note: "Luôn có trạng thái lỗi và trạng thái rỗng, không chỉ trạng thái thành công.",
        changes: ["Người dùng thấy trạng thái đang tải."]
      }
    ]
  };

  L["promises-async"] = {
    id: "promises-async",
    track: "code",
    module: "code-async",
    title: "Promise và async/await",
    shortTitle: "Promises",
    subtitle: "Mô hình hóa việc sẽ xong trong tương lai.",
    blurb: "pending, fulfilled, rejected; then/catch; await và Promise.all — nền tảng để làm việc với mọi API hiện đại.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "js",
    tags: ["promise", "async", "await", "Promise.all"],
    learn: [
      "Ba trạng thái của promise",
      "Dùng then/catch",
      "Viết async/await",
      "Chạy song song với Promise.all"
    ],
    code: `const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(500).then(() => console.log("Xong"));

async function run() {
  console.log("Bắt đầu");
  await wait(300);
  console.log("Sau 300ms");
}

Promise.all([wait(100), wait(200)])
  .then(() => console.log("Cả hai xong"));`,
    file: "promises.js",
    life: {
      icon: "bulb",
      title: "Phiếu hẹn lấy đồ",
      text: "Promise là phiếu hẹn: lúc đầu chưa có đồ, sau đó có thể nhận hoặc báo lỗi. then là quầy nhận đồ, catch là quầy xử lý sự cố."
    },
    visual: S.flow([{ label: "pending", sub: "đang chờ" }, { label: "fulfilled", sub: "thành công" }, { label: "rejected", sub: "lỗi" }], [0]),
    steps: [
      {
        short: "Tạo Promise",
        type: "PROMISE",
        title: "new Promise nhận resolve/reject",
        body: "Hàm thực thi nhận hai callback. Gọi <code>resolve(value)</code> khi xong, <code>reject(error)</code> khi lỗi. Promise chỉ chuyển trạng thái một lần.",
        line: 1,
        mark: [1],
        watch: [{ name: "state", value: "pending", type: "initial" }],
        output: "",
        visual: S.vars([{ name: "wait(500)", type: "Promise", value: "pending", note: "hẹn 500ms" }]),
        note: "Không cần tự tạo Promise cho mọi thứ; fetch đã trả Promise.",
        changes: ["Có promise hẹn 500ms."]
      },
      {
        short: "then",
        type: "THÀNH CÔNG",
        title: "then chạy khi promise fulfilled",
        body: "<code>wait(500).then(...)</code> đăng ký hàm chạy sau khi hẹn xong. Giá trị resolve được truyền vào callback.",
        line: 3,
        mark: [3],
        watch: [{ name: "after", value: "500ms", type: "timer" }],
        output: "Xong",
        visual: S.flow([{ label: "wait(500)", sub: "pending" }, { label: "resolve", sub: "sau 500ms" }, { label: "then", sub: "Xong" }], [2]),
        note: "then trả về promise mới, cho phép chuỗi then.",
        changes: ["Sau 500ms in Xong."]
      },
      {
        short: "async/await",
        type: "CÚ PHÁP",
        title: "await đợi kết quả trong async function",
        body: "Trong hàm async, <code>await wait(300)</code> tạm dừng hàm cho tới khi promise xong, rồi tiếp tục. Code trông tuần tự nhưng không chặn trình duyệt.",
        line: 5,
        mark: [5, 6, 7, 8, 9],
        watch: [{ name: "run", value: "async", type: "function" }],
        output: "Bắt đầu\nSau 300ms",
        visual: S.flow([{ label: "Bắt đầu", sub: "log" }, { label: "await 300ms", sub: "tạm dừng hàm" }, { label: "Tiếp tục", sub: "Sau 300ms" }], [1]),
        note: "await chỉ dùng được trong async function (hoặc top-level module).",
        changes: ["Hàm run in hai dòng cách nhau 300ms."]
      },
      {
        short: "Promise.all",
        type: "SONG SONG",
        title: "Chạy nhiều việc cùng lúc",
        body: "<code>Promise.all([...])</code> chờ tất cả promise xong và trả mảng kết quả. Nếu một promise reject, cả Promise.all reject — trừ khi bạn xử lý riêng.",
        line: 11,
        mark: [11, 12],
        watch: [{ name: "tasks", value: "2", type: "parallel" }, { name: "total time", value: "~200ms", type: "not 300" }],
        output: "Cả hai xong",
        visual: S.flow([{ label: "wait(100)", sub: "song song" }, { label: "wait(200)", sub: "song song" }, { label: "all", sub: "~200ms" }], [2]),
        note: "Promise.all phù hợp khi các việc độc lập; nếu cần tất cả kể cả lỗi, dùng Promise.allSettled.",
        changes: ["Hai tác vụ chạy song song và cùng xong."]
      },
      {
        short: "finally",
        type: "DỌN DẸP",
        title: "finally chạy dù thành công hay lỗi",
        body: "<code>finally</code> dùng để tắt loading, đóng kết nối hoặc ghi log. Nó không nhận kết quả/lỗi và không thay đổi kết quả promise.",
        line: 9,
        mark: [9],
        watch: [{ name: "finally", value: "luôn chạy", type: "cleanup" }],
        output: "",
        visual: S.table(["Trạng thái", "then", "catch", "finally"], [["fulfilled", "chạy", "—", "chạy"], ["rejected", "—", "chạy", "chạy"]], 0, "finally luôn chạy"),
        note: "Đừng đặt logic trả kết quả trong finally; hãy dùng then/return.",
        changes: ["Hiểu nơi dọn dẹp trạng thái tải."]
      }
    ]
  };

  L["modules"] = {
    id: "modules",
    track: "code",
    module: "code-async",
    title: "Module và tổ chức mã",
    shortTitle: "Modules",
    subtitle: "Chia code thành file nhỏ, xuất và nhập rõ ràng.",
    blurb: "export/import, named và default export, phạm vi module và vai trò của bundler trong dự án frontend.",
    level: "Trung cấp",
    duration: "14 phút",
    lang: "js",
    tags: ["module", "import", "export", "bundler"],
    learn: [
      "Tách code theo trách nhiệm",
      "Dùng named export và default export",
      "Hiểu phạm vi module",
      "Biết khi nào cần bundler"
    ],
    code: `import { formatPrice } from "./utils.js";
import Cart from "./cart.js";

const cart = new Cart();
cart.add({ name: "CSS Book", price: 120000 });

console.log(formatPrice(cart.total));

// utils.js
export function formatPrice(value) {
  return value.toLocaleString("vi-VN") + "đ";
}`,
    file: "app.js",
    life: {
      icon: "bulb",
      title: "Hộp dụng cụ có ngăn",
      text: "Module là từng ngăn dụng cụ: ngăn tiền, ngăn định dạng, ngăn giỏ hàng. Lấy đúng ngăn giúp không phải bới cả hộp mỗi lần sửa."
    },
    visual: S.table(["File", "Trách nhiệm"], [["utils.js", "định dạng"], ["cart.js", "giỏ hàng"], ["app.js", "kết nối"]], 0, "Chia module theo trách nhiệm"),
    steps: [
      {
        short: "import",
        type: "NHẬP",
        title: "import lấy phần cần dùng",
        body: "<code>import { formatPrice } from \"./utils.js\"</code> lấy named export. Đường dẫn tương đối bắt đầu bằng ./; phần mở rộng .js thường cần trong trình duyệt thuần.",
        line: 1,
        mark: [1],
        watch: [{ name: "formatPrice", value: "function", type: "named" }],
        output: "",
        visual: S.flow([{ label: "utils.js", sub: "export" }, { label: "import", sub: "app.js" }, { label: "dùng", sub: "formatPrice" }], [1]),
        note: "Không import thứ không dùng; nó làm rối và có thể ảnh hưởng bundle.",
        changes: ["app.js có hàm formatPrice."]
      },
      {
        short: "default",
        type: "XUẤT",
        title: "default export cho một giá trị chính",
        body: "<code>import Cart from \"./cart.js\"</code> lấy default export. Mỗi module chỉ có một default; tên khi import do bạn đặt, nên dễ gây lệch quy ước.",
        line: 2,
        mark: [2],
        watch: [{ name: "Cart", value: "class", type: "default" }],
        output: "",
        visual: S.table(["Loại", "Cú pháp"], [["named", "import { x }"], ["default", "import x"], ["all", "import * as ns"]], 1, "Named export dễ tìm hơn khi dự án lớn"),
        note: "Nhiều nhóm ưu tiên named export để tên nhất quán và dễ refactor.",
        changes: ["app.js có class Cart."]
      },
      {
        short: "Dùng module",
        type: "SỬ DỤNG",
        title: "Module giữ phạm vi riêng",
        body: "Biến khai báo trong một module không tự thành biến toàn cục. Muốn chia sẻ, phải export/import. Điều này giảm xung đột tên.",
        line: 4,
        mark: [4, 5, 7],
        watch: [{ name: "cart.total", value: "120000", type: "number" }],
        output: "120.000đ",
        visual: S.vars([{ name: "cart", type: "Cart", value: "1 item" }, { name: "formatPrice", type: "function", value: "120.000đ" }]),
        note: "Không dùng biến toàn cục để chia sẻ state giữa module; hãy dùng API rõ ràng.",
        changes: ["Giỏ hàng được tạo và tổng tiền được định dạng."]
      },
      {
        short: "export",
        type: "XUẤT",
        title: "export đặt tên cho API của module",
        body: "<code>export function formatPrice</code> công khai hàm. Có thể export nhiều named export từ một file. Chỉ export những gì thật sự cần.",
        line: 10,
        mark: [9, 10, 11, 12],
        watch: [{ name: "export", value: "formatPrice", type: "named" }],
        output: "",
        visual: S.dom([{ tag: "module utils.js", depth: 0 }, { tag: "export function", depth: 1, text: "formatPrice" }], [1], "API công khai của module"),
        note: "Đặt tên export rõ nghĩa; tránh export mọi thứ làm module khó hiểu.",
        changes: ["utils.js công khai formatPrice."]
      },
      {
        short: "Bundler",
        type: "CÔNG CỤ",
        title: "Trình duyệt thuần cần type=module",
        body: "Thẻ script cần <code>type=\"module\"</code> để dùng import. Trong dự án lớn, Vite/Webpack gộp module, xử lý đường dẫn và tối ưu tải.",
        line: 1,
        mark: [1],
        watch: [{ name: "script", value: "type=module", type: "browser" }],
        output: "",
        visual: S.flow([{ label: "Nhiều module", sub: "src" }, { label: "Bundler", sub: "Vite" }, { label: "Bundle", sub: "tải nhanh" }], [1]),
        note: "Với dự án nhỏ, ES module thuần có thể đủ; không cần bundler ngay.",
        changes: ["Hiểu vai trò bundler trong dự án."]
      }
    ]
  };

  L["error-handling"] = {
    id: "error-handling",
    track: "code",
    module: "code-async",
    title: "Xử lý lỗi",
    shortTitle: "Errors",
    subtitle: "Khi mọi thứ không đi theo kế hoạch.",
    blurb: "try/catch/finally, throw, lỗi mạng và trạng thái lỗi trong giao diện — để người dùng không gặp màn hình trắng.",
    level: "Trung cấp",
    duration: "15 phút",
    lang: "js",
    tags: ["try-catch", "throw", "finally", "error-ui"],
    learn: [
      "Bắt lỗi bằng try/catch",
      "Tự throw lỗi có thông điệp",
      "Dùng finally dọn dẹp",
      "Hiển thị lỗi thân thiện cho người dùng"
    ],
    code: `async function loadProfile(id) {
  try {
    const response = await fetch("/api/users/" + id);
    if (!response.ok) throw new Error("Không tìm thấy");
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  } finally {
    console.log("Đã thử tải");
  }
}

loadProfile(7).then((data) => console.log(data));`,
    file: "errors.js",
    life: {
      icon: "bulb",
      title: "Lưới an toàn",
      text: "try/catch giống lưới an toàn dưới dây đi bộ: bạn vẫn cố đi đúng, nhưng nếu ngã sẽ được đỡ. finally là việc luôn làm dù thành công hay thất bại."
    },
    visual: S.flow([{ label: "try", sub: "thử" }, { label: "thành công", sub: "return" }, { label: "lỗi", sub: "catch" }, { label: "finally", sub: "luôn chạy" }], [0]),
    steps: [
      {
        short: "try",
        type: "BẢO VỆ",
        title: "Đặt code có thể lỗi trong try",
        body: "Những dòng có thể throw — fetch, JSON.parse, truy cập dữ liệu không chắc — nên nằm trong <code>try</code>. Lỗi sẽ nhảy tới catch gần nhất.",
        line: 2,
        mark: [1, 2, 3],
        watch: [{ name: "try", value: "active", type: "scope" }],
        output: "",
        visual: S.table(["Thao tác", "Có thể lỗi?"], [["fetch", "mạng"], ["json()", "định dạng"], ["localStorage", "bị chặn"]], 0, "Các điểm dễ lỗi"),
        note: "Không bọc cả ứng dụng trong một try khổng lồ; hãy bắt lỗi ở nơi xử lý được.",
        changes: ["Đoạn gọi API nằm trong try."]
      },
      {
        short: "throw",
        type: "TỰ BÁO",
        title: "throw tạo lỗi có chủ đích",
        body: "<code>throw new Error(\"Không tìm thấy\")</code> dừng luồng bình thường và chuyển sang catch. Thông điệp nên mô tả điều gì sai để debug.",
        line: 4,
        mark: [4],
        watch: [{ name: "error", value: "Không tìm thấy", type: "Error" }],
        output: "",
        visual: S.vars([{ name: "error", type: "Error", value: "Không tìm thấy", note: "thrown" }]),
        note: "Không throw chuỗi thô; dùng Error để có stack trace.",
        changes: ["Phản hồi lỗi được chuyển thành Error."]
      },
      {
        short: "catch",
        type: "BẮT",
        title: "catch nhận lỗi và quyết định",
        body: "Trong catch, ghi log cho dev và trả giá trị an toàn cho UI. Không nuốt lỗi im lặng — người dùng cần biết chuyện gì xảy ra.",
        line: 6,
        mark: [6, 7, 8],
        watch: [{ name: "error.message", value: "Không tìm thấy", type: "string" }, { name: "return", value: "null", type: "fallback" }],
        output: "Không tìm thấy",
        visual: S.flow([{ label: "Lỗi xảy ra", sub: "throw" }, { label: "catch", sub: "log" }, { label: "fallback", sub: "null" }], [1]),
        note: "Trong giao diện, hiện thông báo thân thiện thay vì message kỹ thuật.",
        changes: ["Lỗi được ghi log và trả null."]
      },
      {
        short: "finally",
        type: "DỌN DẸP",
        title: "finally luôn chạy",
        body: "Dù return trong try hay throw, khối <code>finally</code> vẫn chạy. Đây là nơi tắt loading, đóng tài nguyên hoặc ghi nhận đã thử.",
        line: 9,
        mark: [9, 10, 11],
        watch: [{ name: "finally", value: "Đã thử tải", type: "always" }],
        output: "Đã thử tải",
        visual: S.flow([{ label: "try", sub: "thành công/lỗi" }, { label: "catch?", sub: "nếu lỗi" }, { label: "finally", sub: "luôn" }], [2]),
        note: "return trong finally có thể ghi đè kết quả; tránh đặt return ở đây.",
        changes: ["Log finally luôn xuất hiện."]
      },
      {
        short: "Lỗi giao diện",
        type: "UX",
        title: "Thiết kế trạng thái lỗi",
        body: "Một lỗi tốt cho người dùng biết: chuyện gì xảy ra, dữ liệu có mất không, và họ có thể làm gì tiếp. Có nút thử lại và không làm mất dữ liệu đã nhập.",
        line: 14,
        mark: [14],
        watch: [{ name: "ui", value: "message + retry", type: "state" }],
        output: "",
        visual: S.table(["Trạng thái", "Giao diện"], [["loading", "skeleton"], ["error", "thông báo + thử lại"], ["empty", "hướng dẫn"], ["success", "nội dung"]], 1, "Bốn trạng thái cần thiết kế"),
        note: "Đừng hiển thị stack trace hoặc thông tin nội bộ cho người dùng cuối.",
        changes: ["Có kế hoạch cho trạng thái lỗi."]
      }
    ]
  };

  L["components"] = {
    id: "components",
    track: "code",
    module: "code-components",
    title: "Component và props",
    shortTitle: "Components",
    subtitle: "Chia giao diện thành khối tái sử dụng.",
    blurb: "Component nhận props, render UI và có thể lồng children — tư duy nền tảng trước khi dùng React thật.",
    level: "Trung cấp",
    duration: "15 phút",
    lang: "jsx",
    tags: ["component", "props", "children", "composition"],
    learn: [
      "Component là hàm trả về UI",
      "Props truyền dữ liệu vào",
      "children cho phép lồng nội dung",
      "Tách component theo trách nhiệm"
    ],
    code: `function Card({ title, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div className="card-body">{children}</div>
    </article>
  );
}

function App() {
  return (
    <Card title="CSS Grid"><p>Bố cục hai chiều.</p></Card>
  );
}`,
    file: "Card.jsx",
    life: {
      icon: "bulb",
      title: "Khuôn bánh",
      text: "Component là khuôn: cùng hình dạng, nhưng nhân bánh (props) có thể khác. Một khuôn tốt dùng lại được nhiều lần mà không phải nặn lại."
    },
    visual: S.dom([{ tag: "App", depth: 0 }, { tag: "Card", depth: 1, note: "title=CSS Grid" }, { tag: "article.card", depth: 2 }, { tag: "h2", depth: 3, text: "CSS Grid" }, { tag: "p", depth: 3, text: "Bố cục hai chiều." }], [1], "Cây component"),
    steps: [
      {
        short: "Component",
        type: "KHÁI NIỆM",
        title: "Component là hàm trả về UI",
        body: "<code>function Card({ title, children })</code> nhận props và trả về mô tả giao diện. Tên component viết hoa để phân biệt với thẻ HTML.",
        line: 1,
        mark: [1],
        watch: [{ name: "Card", value: "function", type: "component" }],
        output: "",
        visual: S.vars([{ name: "Card", type: "function", value: "({title, children}) => UI", note: "component" }]),
        note: "Component nên có một trách nhiệm rõ; đừng nhồi cả trang vào một component.",
        changes: ["Card được định nghĩa."]
      },
      {
        short: "Props",
        type: "DỮ LIỆU",
        title: "Props đi vào từ bên ngoài",
        body: "<code>title=\"CSS Grid\"</code> truyền dữ liệu vào Card. Props là chỉ đọc trong component con; muốn thay đổi, component cha phải đổi dữ liệu.",
        line: 4,
        mark: [4],
        watch: [{ name: "title", value: "CSS Grid", type: "prop" }],
        output: "",
        visual: S.vars([{ name: "props.title", type: "string", value: "CSS Grid" }, { name: "props.children", type: "element", value: "<p>…</p>" }]),
        note: "Không sửa props trực tiếp; đó là nguồn lỗi phổ biến khi mới học React.",
        changes: ["Card nhận title CSS Grid."]
      },
      {
        short: "children",
        type: "LỒNG",
        title: "children là nội dung được bọc",
        body: "Mọi thứ nằm giữa thẻ mở và đóng trở thành <code>children</code>. Nhờ đó Card có thể bọc bất kỳ nội dung nào mà không cần biết trước.",
        line: 5,
        mark: [5],
        watch: [{ name: "children", value: "<p>…</p>", type: "ReactNode" }],
        output: "",
        visual: S.dom([{ tag: "Card", depth: 0 }, { tag: "children", depth: 1, text: "<p>Bố cục hai chiều.</p>" }], [1], "children là nội dung được truyền vào"),
        note: "children giúp component linh hoạt, nhưng đừng lạm dụng để che giấu cấu trúc phức tạp.",
        changes: ["Card nhận đoạn văn làm children."]
      },
      {
        short: "Composition",
        type: "TÁI SỬ DỤNG",
        title: "Ghép component nhỏ thành trang",
        body: "App ghép Card với nội dung. Có thể tạo nhiều Card khác nhau mà không sửa Card. Đây là composition — cách xây UI từ khối nhỏ.",
        line: 10,
        mark: [10, 11, 12, 13, 14],
        watch: [{ name: "App", value: "Card + content", type: "composition" }],
        output: "",
        visual: S.dom([{ tag: "App", depth: 0 }, { tag: "Card", depth: 1 }, { tag: "Card", depth: 1 }, { tag: "Card", depth: 1 }], [0], "Nhiều Card trong App"),
        note: "Nếu component cần quá nhiều prop để làm mọi thứ, hãy tách nhỏ.",
        changes: ["App ghép Card với nội dung."]
      },
      {
        short: "Đặt tên",
        type: "THỰC HÀNH",
        title: "Đặt tên theo vai trò",
        body: "Tên như <code>Card</code>, <code>PriceTag</code>, <code>SearchBar</code> mô tả vai trò. Tránh tên mơ hồ như Box2 hay ComponentA; chúng không giúp người đọc.",
        line: 1,
        mark: [1],
        watch: [{ name: "name", value: "Card", type: "role" }],
        output: "",
        visual: S.table(["Tên tốt", "Tên kém"], [["SearchBar", "Input2"], ["PriceTag", "TextSmall"], ["EmptyState", "Box"]], 0, "Tên component nên nói vai trò"),
        note: "Một component có thể đổi giao diện, nhưng tên vai trò thường bền hơn tên hình dáng.",
        changes: ["Component có tên rõ nghĩa."]
      }
    ]
  };

  L["props-state"] = {
    id: "props-state",
    track: "code",
    module: "code-components",
    title: "Props và state",
    shortTitle: "Props & state",
    subtitle: "Dữ liệu từ cha và trạng thái bên trong component.",
    blurb: "useState, setState và re-render — cách React biết khi nào cần vẽ lại giao diện.",
    level: "Trung cấp",
    duration: "16 phút",
    lang: "jsx",
    tags: ["react", "state", "useState", "rerender", "props"],
    learn: [
      "Props là dữ liệu cha truyền xuống",
      "State là dữ liệu component tự quản",
      "setState kích hoạt re-render",
      "Không sửa state trực tiếp"
    ],
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Tăng
      </button>
    </div>
  );
}`,
    file: "Counter.jsx",
    life: {
      icon: "bulb",
      title: "Bảng điểm trên sân",
      text: "State giống bảng điểm: khi điểm đổi, bảng phải được cập nhật. Props giống luật trận đấu do ban tổ chức đưa xuống — đội không tự sửa luật."
    },
    visual: S.flow([{ label: "State đổi", sub: "setCount" }, { label: "Re-render", sub: "tính lại UI" }, { label: "DOM cập nhật", sub: "số mới" }], [0]),
    steps: [
      {
        short: "useState",
        type: "STATE",
        title: "useState tạo state ban đầu",
        body: "<code>const [count, setCount] = useState(0)</code> tạo cặp giá trị và hàm cập nhật. 0 là giá trị ban đầu; React giữ state giữa các lần render.",
        line: 4,
        mark: [1, 4],
        watch: [{ name: "count", value: "0", type: "number" }, { name: "setCount", value: "function", type: "setter" }],
        output: "",
        visual: S.vars([{ name: "count", type: "number", value: "0" }, { name: "setCount", type: "function", value: "cập nhật count" }]),
        note: "Không gọi useState trong điều kiện hoặc vòng lặp; hook phải chạy cùng thứ tự mỗi render.",
        changes: ["Counter có state count = 0."]
      },
      {
        short: "Hiển thị",
        type: "RENDER",
        title: "Dùng state trong JSX",
        body: "<code>{count}</code> chèn giá trị vào giao diện. Khi count đổi, component render lại và số trên màn hình cập nhật.",
        line: 8,
        mark: [8],
        watch: [{ name: "UI", value: "Bạn đã bấm 0 lần", type: "text" }],
        output: "",
        visual: S.dom([{ tag: "div", depth: 0 }, { tag: "p", depth: 1, text: "Bạn đã bấm 0 lần" }, { tag: "button", depth: 1, text: "Tăng" }], [1], "State được render vào p"),
        note: "Đừng giữ dữ liệu có thể tính từ state khác trong state riêng; dễ lệch.",
        changes: ["Giao diện hiện count hiện tại."]
      },
      {
        short: "setState",
        type: "CẬP NHẬT",
        title: "setCount yêu cầu React render lại",
        body: "<code>setCount(count + 1)</code> cập nhật state và đánh dấu component cần render lại. Không gán <code>count = count + 1</code>; React sẽ không biết.",
        line: 9,
        mark: [9],
        watch: [{ name: "count", value: "0 → 1", type: "update" }],
        output: "",
        visual: S.flow([{ label: "Click", sub: "handler" }, { label: "setCount", sub: "1" }, { label: "Re-render", sub: "UI" }], [1]),
        note: "Nếu state mới phụ thuộc state cũ, dùng dạng hàm: setCount(c => c + 1).",
        changes: ["count tăng lên 1."]
      },
      {
        short: "Props",
        type: "CHA → CON",
        title: "Props chỉ đọc",
        body: "Nếu Counter nhận <code>step</code> từ cha, nó dùng step để tăng nhưng không tự sửa step. Muốn đổi, phải gọi callback do cha truyền xuống.",
        line: 3,
        mark: [3],
        watch: [{ name: "step", value: "1", type: "prop" }],
        output: "",
        visual: S.flow([{ label: "Cha", sub: "giữ state" }, { label: "props", sub: "truyền xuống" }, { label: "Con", sub: "render" }], [1]),
        note: "Dữ liệu chung nên được nâng lên component cha gần nhất.",
        changes: ["Hiểu luồng dữ liệu một chiều."]
      },
      {
        short: "Lifting state",
        type: "KIẾN TRÚC",
        title: "Nâng state khi cần chia sẻ",
        body: "Nếu hai component cần cùng dữ liệu, đặt state ở cha chung và truyền xuống bằng props. Tránh tạo hai bản state không đồng bộ.",
        line: 3,
        mark: [3],
        watch: [{ name: "location", value: "component cha", type: "shared" }],
        output: "",
        visual: S.dom([{ tag: "Parent (state)", depth: 0 }, { tag: "Child A", depth: 1 }, { tag: "Child B", depth: 1 }], [0], "State đặt ở cha chung"),
        note: "Không phải mọi state đều cần nâng; chỉ khi có nhu cầu chia sẻ thật.",
        changes: ["Dữ liệu chung có một nguồn."]
      }
    ]
  };

  L["react-hooks"] = {
    id: "react-hooks",
    track: "code",
    module: "code-components",
    title: "useEffect và hooks",
    shortTitle: "useEffect",
    subtitle: "Đồng bộ component với thế giới bên ngoài.",
    blurb: "useEffect, dependency array, cleanup và custom hook — tải dữ liệu, đăng ký sự kiện và dọn dẹp đúng cách.",
    level: "Trung cấp",
    duration: "17 phút",
    lang: "jsx",
    tags: ["react", "useEffect", "hooks", "cleanup", "deps"],
    learn: [
      "useEffect chạy sau render",
      "Dependency array điều khiển khi nào chạy",
      "Cleanup tránh rò rỉ",
      "Tách logic thành custom hook"
    ],
    code: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (alive) setUsers(data);
      })
      .finally(() => setLoading(false));
    return () => { alive = false; };
  }, []);

  if (loading) return <p>Đang tải...</p>;
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
    file: "Users.jsx",
    life: {
      icon: "bulb",
      title: "Hẹn giờ tưới cây",
      text: "useEffect là hẹn giờ: đặt khi component xuất hiện, dọn khi biến mất. Cleanup giống tắt vòi nước trước khi rời đi, tránh lãng phí và rò rỉ."
    },
    visual: S.flow([{ label: "Render", sub: "UI" }, { label: "Effect", sub: "fetch" }, { label: "Cleanup", sub: "rời" }], [1]),
    steps: [
      {
        short: "useEffect",
        type: "HOOK",
        title: "Effect chạy sau khi render",
        body: "useEffect dùng cho việc đồng bộ với bên ngoài: fetch, subscription, DOM API. Nó chạy sau khi giao diện đã render, không chặn paint.",
        line: 7,
        mark: [7],
        watch: [{ name: "effect", value: "sau render", type: "timing" }],
        output: "",
        visual: S.flow([{ label: "Render", sub: "tạo UI" }, { label: "Paint", sub: "vẽ" }, { label: "Effect", sub: "chạy" }], [2]),
        note: "Không dùng useEffect để tính dữ liệu có thể tính ngay khi render; hãy tính trực tiếp.",
        changes: ["Users có effect tải dữ liệu."]
      },
      {
        short: "Tải dữ liệu",
        type: "SIDE EFFECT",
        title: "fetch trong effect, cập nhật state",
        body: "Effect gọi fetch rồi setUsers khi có dữ liệu. Không đặt fetch trực tiếp trong thân component vì sẽ chạy mỗi lần render, gây vòng lặp.",
        line: 9,
        mark: [8, 9, 10, 11, 12, 13, 14],
        watch: [{ name: "users", value: "[] → data", type: "state" }, { name: "loading", value: "true → false", type: "state" }],
        output: "",
        visual: S.vars([{ name: "users", type: "array", value: "[]" }, { name: "loading", type: "boolean", value: "true" }]),
        note: "Luôn xử lý lỗi và trạng thái rỗng, không chỉ thành công.",
        changes: ["Dữ liệu được tải và đưa vào state."]
      },
      {
        short: "Cleanup",
        type: "DỌN DẸP",
        title: "Return hàm cleanup",
        body: "Effect trả về hàm để dọn dẹp khi component unmount hoặc deps đổi. Ở đây <code>alive = false</code> ngăn setState sau khi rời trang.",
        line: 15,
        mark: [15],
        watch: [{ name: "cleanup", value: "alive = false", type: "unmount" }],
        output: "",
        visual: S.flow([{ label: "Mount", sub: "effect" }, { label: "Update", sub: "cleanup cũ" }, { label: "Unmount", sub: "cleanup" }], [2]),
        note: "Với fetch, có thể dùng AbortController để hủy request thật sự.",
        changes: ["Tránh cập nhật state sau khi unmount."]
      },
      {
        short: "Deps",
        type: "MẢNG PHỤ THUỘC",
        title: "[] nghĩa là chỉ chạy khi mount",
        body: "Dependency array quyết định effect chạy lại khi nào. <code>[]</code> là một lần sau mount; <code>[query]</code> là mỗi khi query đổi. Thiếu deps gây stale value.",
        line: 16,
        mark: [16],
        watch: [{ name: "deps", value: "[]", type: "mount only" }],
        output: "",
        visual: S.table(["Deps", "Khi chạy"], [["không có", "mỗi render"], ["[]", "một lần"], ["[query]", "khi query đổi"]], 1, "Chọn deps theo dữ liệu effect dùng"),
        note: "Đừng nói dối deps để tránh chạy lại; hãy sửa logic hoặc tách effect.",
        changes: ["Effect chỉ chạy một lần sau mount."]
      },
      {
        short: "Custom hook",
        type: "TÁI SỬ DỤNG",
        title: "Tách logic thành useUsers",
        body: "Nếu nhiều component cần tải users, tách thành custom hook <code>useUsers()</code> trả về users và loading. Hook là cách chia sẻ logic, không phải chia sẻ UI.",
        line: 3,
        mark: [3],
        watch: [{ name: "useUsers", value: "custom hook", type: "reuse" }],
        output: "",
        visual: S.flow([{ label: "Component", sub: "gọi hook" }, { label: "Logic", sub: "fetch/state" }, { label: "Kết quả", sub: "users, loading" }], [1]),
        note: "Custom hook phải bắt đầu bằng use và chỉ gọi hook khác ở top level.",
        changes: ["Logic tải dữ liệu có thể tái sử dụng."]
      }
    ]
  };

  L["frontend-project"] = {
    id: "frontend-project",
    track: "code",
    module: "code-components",
    title: "Dự án: Tìm kiếm khóa học",
    shortTitle: "Dự án frontend",
    subtitle: "Ghép state, effect, debounce và accessibility thành tính năng thật.",
    blurb: "Xây ô tìm kiếm có debounce, lọc dữ liệu, xử lý trạng thái rỗng và kiểm tra bàn phím — dự án tổng kết lộ trình lập trình.",
    level: "Tổng hợp",
    duration: "25 phút",
    lang: "jsx",
    tags: ["project", "search", "debounce", "accessibility", "state"],
    learn: [
      "Quản lý query và kết quả bằng state",
      "Debounce để giảm xử lý",
      "Dọn timer trong cleanup",
      "Đảm bảo ô tìm kiếm có nhãn"
    ],
    code: `import { useEffect, useState } from "react";

export default function Search({ items }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(items);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults(items.filter((item) => item.name.includes(query)));
    }, 300);
    return () => clearTimeout(timer);
  }, [query, items]);

  return (
    <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Tìm khóa học">
  );
}`,
    file: "Search.jsx",
    life: {
      icon: "bulb",
      title: "Bộ lọc cà phê",
      text: "Search giống bộ lọc: đổ dữ liệu vào, giữ lại hạt phù hợp. Debounce là chờ một nhịp trước khi lọc, để không rung lắc liên tục khi đang rót."
    },
    visual: S.layout({ type: "flex", direction: "column", gap: 10, items: [{ label: "Ô tìm kiếm", grow: 1, active: true }, { label: "Kết quả đã lọc", grow: 2 }], caption: "Query → lọc → kết quả" }),
    steps: [
      {
        short: "State",
        type: "DỮ LIỆU",
        title: "Query và results là hai state",
        body: "<code>query</code> giữ chữ người dùng nhập; <code>results</code> giữ danh sách sau lọc. Khi một trong hai thay đổi, component render lại với dữ liệu mới.",
        line: 4,
        mark: [4, 5],
        watch: [{ name: "query", value: "\"\"", type: "string" }, { name: "results", value: "items", type: "array" }],
        output: "",
        visual: S.vars([{ name: "query", type: "string", value: "\"\"" }, { name: "results", type: "array", value: "items" }]),
        note: "Không cần state cho dữ liệu suy ra được ngay; nhưng ở đây results được debounce.",
        changes: ["Search có query và results."]
      },
      {
        short: "Debounce",
        type: "TỐI ƯU",
        title: "Chờ 300ms trước khi lọc",
        body: "<code>setTimeout</code> hoãn lọc 300ms sau lần gõ cuối. Nếu gõ tiếp, effect chạy lại và cleanup hủy timer cũ. Nhờ đó không lọc mỗi phím.",
        line: 7,
        mark: [7, 8, 9, 10],
        watch: [{ name: "delay", value: "300ms", type: "debounce" }],
        output: "",
        visual: S.flow([{ label: "Gõ", sub: "query đổi" }, { label: "Chờ 300ms", sub: "timer" }, { label: "Lọc", sub: "setResults" }], [1]),
        note: "Debounce phù hợp với tìm kiếm; throttle phù hợp với scroll/resize.",
        changes: ["Việc lọc được hoãn 300ms."]
      },
      {
        short: "Cleanup",
        type: "DỌN",
        title: "Hủy timer cũ",
        body: "<code>return () =&gt; clearTimeout(timer)</code> chạy trước effect tiếp theo hoặc khi unmount. Nếu thiếu, các timer cũ vẫn chạy và có thể set state sai thời điểm.",
        line: 11,
        mark: [11, 12],
        watch: [{ name: "cleanup", value: "clearTimeout", type: "timer" }],
        output: "",
        visual: S.flow([{ label: "Effect cũ", sub: "timer A" }, { label: "Cleanup", sub: "hủy A" }, { label: "Effect mới", sub: "timer B" }], [1]),
        note: "Cleanup cũng cần khi effect đăng ký event listener hoặc interval.",
        changes: ["Chỉ timer mới nhất còn sống."]
      },
      {
        short: "Ô nhập",
        type: "CONTROL",
        title: "Controlled input",
        body: "<code>value={query}</code> và <code>onChange</code> biến input thành controlled component: state là nguồn dữ liệu duy nhất. Đừng quên cập nhật state trong onChange.",
        line: 15,
        mark: [15],
        watch: [{ name: "value", value: "query", type: "bound" }],
        output: "",
        visual: S.dom([{ tag: "input", depth: 0, note: "value=query" }], [0], "Input phản chiếu state"),
        note: "Với ô tìm kiếm, dùng type=search để có nút xóa trên một số trình duyệt.",
        changes: ["Input hiển thị đúng query."]
      },
      {
        short: "QA",
        type: "KIỂM TRA",
        title: "Kiểm tra trạng thái rỗng và bàn phím",
        body: "Khi không có kết quả, hiện thông báo rõ. Ô tìm kiếm cần nhãn (aria-label hoặc label), focus nhìn thấy, và kết quả cập nhật được đọc bởi trình đọc màn hình nếu cần.",
        line: 3,
        mark: [3],
        watch: [{ name: "empty", value: "Không tìm thấy", type: "state" }, { name: "label", value: "Tìm khóa học", type: "a11y" }],
        output: "",
        visual: S.table(["Trạng thái", "Giao diện"], [["đang gõ", "kết quả cũ"], ["có kết quả", "danh sách"], ["rỗng", "thông báo"], ["lỗi", "thử lại"]], 2, "Không bỏ quên trạng thái rỗng"),
        note: "Không dùng placeholder thay cho nhãn; người dùng vẫn cần biết ô làm gì khi đã gõ.",
        changes: ["Tính năng có đủ trạng thái và nhãn."]
      }
    ]
  };

})();
