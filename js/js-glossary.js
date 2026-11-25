/* FrontLab — giải nghĩa từ khóa và API JavaScript xuất hiện trong playground */
(function () {
  "use strict";

  window.JS_GLOSSARY = {
    "const": {
      kind: "khai báo", what: "Khai báo biến không được gán lại. Giá trị object hoặc array vẫn có thể thay đổi bên trong.",
      example: 'const name = "An";', tip: "Mặc định dùng const; chỉ đổi sang let khi thật sự cần gán lại."
    },
    "let": {
      kind: "khai báo", what: "Khai báo biến có thể gán lại trong cùng phạm vi.",
      example: "let total = 0;", tip: "Ưu tiên const để tránh vô tình đổi giá trị."
    },
    "typeof": {
      kind: "toán tử", what: "Trả về tên kiểu dữ liệu dưới dạng chuỗi, ví dụ string, number, boolean, undefined, object.",
      example: 'typeof 20 // "number"', tip: "typeof null trả về object; đây là điểm bất thường đã tồn tại lâu trong JavaScript."
    },
    "console.log": {
      kind: "API", what: "In giá trị ra console để quan sát khi chạy mã.",
      example: 'console.log("Trang đã sẵn sàng");', tip: "Trong playground, mỗi lệnh log hiện ngay ở panel console."
    },
    "console.error": {
      kind: "API", what: "In thông báo lỗi ra console, thường dùng trong catch hoặc khi dữ liệu không hợp lệ.",
      example: 'console.error("Không tải được dữ liệu");', tip: "Đừng nuốt lỗi im lặng; hãy log hoặc xử lý rõ ràng."
    },
    "if": {
      kind: "rẽ nhánh", what: "Chạy một khối mã khi điều kiện đúng; có thể nối else if và else.",
      example: "if (score >= 9) { ... }", tip: "Điều kiện nên đọc được như một câu: score >= 9."
    },
    "else": {
      kind: "rẽ nhánh", what: "Nhánh dự phòng khi điều kiện if hoặc else if trước đó sai.",
      example: "else { console.log(\"Cần cố gắng\"); }", tip: "Giữ thứ tự điều kiện từ cụ thể tới tổng quát."
    },
    "for...of": {
      kind: "vòng lặp", what: "Duyệt lần lượt từng phần tử của array, string hoặc collection.",
      example: "for (const score of scores) { ... }", tip: "Dùng for...of khi chỉ cần giá trị, không cần chỉ số."
    },
    "forEach": {
      kind: "phương thức array", what: "Gọi một hàm cho từng phần tử của array, không trả về array mới.",
      example: "scores.forEach((score) => console.log(score));", tip: "Muốn tạo array mới hãy dùng map; forEach dành cho tác dụng phụ."
    },
    "function": {
      kind: "khai báo", what: "Tạo một hàm có thể gọi lại nhiều lần, nhận tham số và trả về kết quả.",
      example: "function average(items) { return sum / items.length; }",
      tip: "Đặt tên hàm theo việc nó làm, ví dụ average, formatPrice."
    },
    "return": {
      kind: "từ khóa", what: "Kết thúc hàm và trả giá trị về nơi gọi.",
      example: "return sum / items.length;", tip: "Không có return, hàm trả về undefined."
    },
    "=>": {
      kind: "hàm mũi tên", what: "Cú pháp viết hàm ngắn gọn. Hàm mũi tên không có this riêng.",
      example: "const greet = (name) => \"Chào \" + name;", tip: "Một biểu thức sau mũi tên được trả về ngầm, không cần return."
    },
    "push": {
      kind: "phương thức array", what: "Thêm một hoặc nhiều phần tử vào cuối array và trả về độ dài mới.",
      example: 'tasks.push("ôn JavaScript");', tip: "Push làm thay đổi array gốc; nếu cần bản sao, dùng spread trước."
    },
    "length": {
      kind: "thuộc tính", what: "Độ dài của string, array hoặc số phần tử của collection.",
      example: "tasks.length // 3", tip: "Với array, length là số phần tử, không phải chỉ số cuối."
    },
    "filter": {
      kind: "phương thức array", what: "Tạo array mới chỉ gồm các phần tử thỏa điều kiện.",
      example: "tasks.filter((task) => task.length > 8)", tip: "Hàm bên trong filter phải trả về true hoặc false."
    },
    "map": {
      kind: "phương thức array", what: "Tạo array mới bằng cách biến đổi từng phần tử.",
      example: 'tasks.map((task) => "• " + task)', tip: "Map không bỏ phần tử; muốn lọc trước hãy dùng filter."
    },
    "find": {
      kind: "phương thức array", what: "Trả về phần tử đầu tiên thỏa điều kiện, hoặc undefined nếu không có.",
      example: 'tasks.find((task) => task.includes("CSS"))', tip: "Kiểm tra undefined trước khi dùng kết quả find."
    },
    "spread": {
      kind: "cú pháp", what: "Dấu ba chấm sao chép hoặc trải phần tử của array, object vào nơi mới.",
      example: "const copy = [...tasks];", tip: "Spread tạo bản sao nông; object lồng bên trong vẫn dùng chung."
    },
    "document.querySelector": {
      kind: "DOM API", what: "Tìm phần tử đầu tiên khớp selector CSS.",
      example: 'document.querySelector("h1")', tip: "Không tìm thấy sẽ trả về null; kiểm tra trước khi đọc thuộc tính."
    },
    "document.createElement": {
      kind: "DOM API", what: "Tạo một phần tử mới trong bộ nhớ, chưa gắn vào trang.",
      example: 'document.createElement("li")', tip: "Sau khi tạo, cần append hoặc prepend để đưa vào DOM."
    },
    "textContent": {
      kind: "DOM API", what: "Đọc hoặc gán nội dung chữ thuần của phần tử.",
      example: 'title.textContent = "Xin chào";', tip: "An toàn hơn innerHTML vì không chạy mã HTML."
    },
    "classList": {
      kind: "DOM API", what: "Thêm, xóa hoặc bật tắt class của phần tử.",
      example: 'item.classList.add("done");', tip: "Dùng classList thay vì nối chuỗi className để tránh mất class khác."
    },
    "append": {
      kind: "DOM API", what: "Thêm một hoặc nhiều node vào cuối phần tử cha.",
      example: "list.append(item);", tip: "Append nhận cả text và node; appendChild chỉ nhận node."
    },
    "addEventListener": {
      kind: "DOM API", what: "Đăng ký hàm xử lý khi một sự kiện xảy ra trên phần tử.",
      example: 'button.addEventListener("click", handler);', tip: "Không gọi handler() ngay; chỉ truyền tên hàm."
    },
    "preventDefault": {
      kind: "sự kiện", what: "Chặn hành vi mặc định của trình duyệt, ví dụ form tự gửi và tải lại trang.",
      example: "event.preventDefault();", tip: "Gọi trong submit nếu bạn muốn tự xử lý dữ liệu bằng JavaScript."
    },
    "focus": {
      kind: "DOM API", what: "Đưa con trỏ hoặc focus bàn phím vào một phần tử.",
      example: "email.focus();", tip: "Focus giúp người dùng sửa ngay trường bị lỗi."
    },
    "submit": {
      kind: "form API", what: "Gửi biểu mẫu theo action và method.",
      example: "form.submit();", tip: "Trong playground, submit bị thay bằng bản giả để không rời trang."
    },
    "localStorage": {
      kind: "Web Storage", what: "Lưu chuỗi trên trình duyệt, còn lại sau khi đóng tab.",
      example: 'localStorage.setItem("theme", "dark");', tip: "Chỉ lưu chuỗi; object phải qua JSON.stringify."
    },
    "sessionStorage": {
      kind: "Web Storage", what: "Lưu chuỗi trong phạm vi một tab, mất khi đóng tab.",
      example: 'sessionStorage.setItem("tab", "1");', tip: "Phù hợp cho trạng thái tạm trong phiên làm việc."
    },
    "JSON.stringify": {
      kind: "API", what: "Chuyển object hoặc array thành chuỗi JSON để lưu trữ hoặc gửi đi.",
      example: "JSON.stringify(profile)", tip: "Không chuyển được hàm hoặc vòng tham chiếu."
    },
    "JSON.parse": {
      kind: "API", what: "Đọc chuỗi JSON và tạo lại object hoặc array.",
      example: 'JSON.parse(raw)', tip: "Chuỗi hỏng sẽ ném lỗi; cần try/catch khi dữ liệu không tin cậy."
    },
    "fetch": {
      kind: "Web API", what: "Gửi request HTTP và trả về Promise của Response.",
      example: 'fetch("/api/users")', tip: "Fetch không tự ném lỗi khi HTTP 404; phải kiểm tra response.ok."
    },
    "async": {
      kind: "từ khóa", what: "Đánh dấu hàm bất đồng bộ, luôn trả về Promise.",
      example: "async function loadUsers() { ... }", tip: "Trong hàm async có thể dùng await để chờ Promise."
    },
    "await": {
      kind: "từ khóa", what: "Tạm dừng hàm async cho tới khi Promise hoàn tất, rồi lấy giá trị.",
      example: "const response = await fetch(url);", tip: "Chỉ dùng await bên trong hàm async hoặc module."
    },
    "Promise": {
      kind: "đối tượng", what: "Đại diện cho một kết quả sẽ có trong tương lai: đang chờ, thành công hoặc thất bại.",
      example: "new Promise((resolve) => setTimeout(resolve, 300))", tip: "Promise giúp tránh callback lồng quá sâu."
    },
    "Promise.all": {
      kind: "API", what: "Chờ nhiều Promise cùng lúc và trả về mảng kết quả khi tất cả hoàn tất.",
      example: "Promise.all([wait(100), wait(200)])", tip: "Nếu một Promise lỗi, Promise.all sẽ lỗi ngay."
    },
    "setTimeout": {
      kind: "Web API", what: "Hẹn chạy một hàm sau một khoảng mili giây.",
      example: "setTimeout(() => console.log(\"Xong\"), 500);",
      tip: "setTimeout không chặn mã phía sau; đó là lý do log có thể xuất hiện sai thứ tự."
    },
    "then": {
      kind: "Promise", what: "Đăng ký hàm chạy khi Promise thành công.",
      example: "wait(500).then(() => console.log(\"Xong\"));", tip: "Trả giá trị trong then để then tiếp theo nhận được."
    },
    "catch": {
      kind: "Promise", what: "Đăng ký hàm xử lý khi Promise thất bại.",
      example: ".catch((error) => console.error(error.message));", tip: "Luôn xử lý catch cho request mạng."
    },
    "finally": {
      kind: "Promise", what: "Chạy sau khi Promise thành công hoặc thất bại, dùng để dọn dẹp.",
      example: ".finally(() => console.log(\"Đã thử tải\"));", tip: "Finally không nhận kết quả hay lỗi."
    },
    "try": {
      kind: "xử lý lỗi", what: "Bọc đoạn mã có thể ném lỗi để bắt bằng catch.",
      example: "try { ... } catch (error) { ... }", tip: "Chỉ bọc đúng đoạn có rủi ro, đừng bọc cả chương trình."
    },
    "catch (error)": {
      kind: "xử lý lỗi", what: "Nhận lỗi từ try hoặc từ await và xử lý thay vì để chương trình dừng.",
      example: "catch (error) { console.error(error.message); }", tip: "Đọc error.message để biết nguyên nhân, nhưng đừng hiển thị thông tin nội bộ cho người dùng."
    },
    "import": {
      kind: "module", what: "Lấy giá trị hoặc hàm từ module khác.",
      example: 'import { formatPrice } from "./utils.js";', tip: "Đường dẫn module phải chạy trong môi trường hỗ trợ module."
    },
    "export": {
      kind: "module", what: "Công khai một hàm, biến hoặc class để module khác import.",
      example: "export function formatPrice(value) { ... }", tip: "Một module có thể có nhiều export, nhưng chỉ một export default."
    },
    "class": {
      kind: "khai báo", what: "Tạo khuôn mẫu object với thuộc tính và phương thức.",
      example: "class Cart { add(item) { ... } }", tip: "Tên class viết PascalCase, ví dụ Cart, UserCard."
    },
    "response.ok": {
      kind: "Fetch API", what: "Cho biết request thành công với mã HTTP 200–299.",
      example: "if (!response.ok) throw new Error(...);", tip: "Kiểm tra ok trước khi gọi response.json()."
    },
    "response.json": {
      kind: "Fetch API", what: "Đọc phần thân response dưới dạng JSON, trả về Promise.",
      example: "const users = await response.json();", tip: "Chỉ gọi json() một lần trên mỗi response."
    },
    "Error": {
      kind: "đối tượng", what: "Tạo lỗi có message để ném hoặc log.",
      example: 'throw new Error("HTTP " + response.status);', tip: "Message nên nói điều gì sai và ở đâu."
    }
  };
})();
