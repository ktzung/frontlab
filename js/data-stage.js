/* FrontLab — step scripts for the project progress stage */
window.FRONTLAB_STAGE_STEPS = {
  "profile-card": {
    files: ["index.html", "styles.css", "app.js"],
    dataLabel: "1 bản ghi",
    api: { endpoint: "GET /members/1", latency: "120 ms" },
    json: ["name: Trần Thu Hà", "role: Frontend Engineer", "followers: 2400"],
    nodes: [
      { id: "body", tag: "body", note: "Khung ngoài cùng của trang" },
      { id: "main", tag: "main.page", note: "Một cột, canh giữa nội dung" },
      { id: "card", tag: "article.card", note: "Toàn bộ thẻ hồ sơ" },
      { id: "head", tag: "header.card-head", note: "Avatar, tên và trạng thái" },
      { id: "stats", tag: "dl.stats", note: "Ba chỉ số của thành viên" },
      { id: "actions", tag: "footer.actions", note: "Theo dõi và nhắn tin" }
    ],
    steps: [
      {
        stage: "plan",
        title: "Khoanh vùng trang",
        detail: "Bắt đầu ở khung ngoài: body giữ toàn bộ trang, main.page canh nội dung vào giữa. Chưa viết chi tiết nào bên trong.",
        keys: ["body", "main.page", "max-width"],
        effects: ["Một cột duy nhất", "Nội dung không chạm mép màn hình"],
        reveal: ["app", "dom", "node-body", "node-main"],
        focus: ["dom"],
        preview: "live"
      },
      {
        stage: "plan",
        title: "Tách thẻ hồ sơ",
        detail: "article.card là khối cha của mọi thứ còn lại. Tách được khối này là đã chia xong bài toán lớn thành một việc vừa sức.",
        keys: ["article.card", "border-radius"],
        effects: ["Một khối duy nhất để bo góc và đổ bóng"],
        reveal: ["card", "node-card"],
        focus: ["card"],
        preview: "live"
      },
      {
        stage: "html",
        title: "Dựng phần đầu thẻ",
        detail: "header.card-head gom avatar, định danh và trạng thái. Dựng thẻ cha trước, rồi đặt ba khối con theo đúng thứ tự đọc.",
        keys: ["header.card-head", "div.avatar", "h1#memberName", "p.role"],
        effects: ["Ba khối con nằm trong một hàng", "Tên là tiêu đề chính của thẻ"],
        reveal: ["head", "avatar", "identity", "status", "node-head"],
        focus: ["head"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Thêm phần thân",
        detail: "Đoạn giới thiệu và danh sách chỉ số là hai khối anh em. Chúng chưa cần đẹp, chỉ cần đúng cha và đúng thứ tự.",
        keys: ["p.bio", "dl.stats", "div.stat × 3"],
        effects: ["Danh sách chỉ số dùng chung một cấu trúc"],
        reveal: ["bio", "stats", "node-stats"],
        focus: ["bio", "stats"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Chốt hành động",
        detail: "footer.actions chứa hai nút. Đặt nút chính trước nút phụ để mắt đi theo đúng ý đồ thiết kế.",
        keys: ["footer.actions", "button.btn-primary", "a.btn-ghost"],
        effects: ["Một nút chính, một nút phụ", "Mọi phần tử đã có chỗ trong cây"],
        reveal: ["actions", "follow", "message", "node-actions"],
        focus: ["actions"],
        preview: "html"
      },
      {
        stage: "css",
        title: "Đặt khung ngoài",
        detail: "CSS đi từ ngoài vào trong. Trước tiên là khung trang và vị trí của chiếc thẻ, chưa chạm vào chữ hay nút.",
        keys: ["display: grid", "place-items: center", "padding: 48px 20px"],
        effects: ["Thẻ đứng giữa khung", "Có khoảng thở quanh thẻ"],
        focus: ["card"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Chia bố cục trong thẻ",
        detail: "Đến lượt bên trong thẻ. Phần đầu dùng grid ba vùng, hàng chỉ số chia đều ba cột để các con số không nhảy khi đổi dữ liệu.",
        keys: ["grid-template-columns: auto 1fr", "display: flex", "gap: 16px"],
        effects: ["Avatar và tên đứng cạnh nhau", "Ba chỉ số chia đều bề ngang"],
        focus: ["head", "stats"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Tạo nhịp thị giác",
        detail: "Cùng một khối chữ, đổi cỡ và độ đậm là mắt biết đâu là tên, đâu là vai trò. Giãn dòng cho đoạn giới thiệu dễ đọc hơn.",
        keys: ["font-size", "line-height: 1.6", "color"],
        effects: ["Tên nổi hơn vai trò", "Đoạn giới thiệu không bị bí"],
        focus: ["identity", "bio"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Đánh dấu trạng thái",
        detail: "Nút cần phản hồi khi trỏ chuột và khi dùng bàn phím. Chỉ đổi màu nền và viền, không đổi kích thước để bố cục đứng yên.",
        keys: [":hover", ":focus-visible", "transition"],
        effects: ["Nút đổi màu khi trỏ", "Viền rõ khi tab bằng bàn phím"],
        focus: ["actions", "follow"],
        preview: "css"
      },
      {
        stage: "api",
        title: "Khai báo endpoint",
        detail: "Trước khi viết JavaScript, dựng sẵn một bản ghi trên MockAPI. Một bản ghi là đủ để nhìn thấy hình dạng dữ liệu thật.",
        keys: ["GET /members/1", "mock.js"],
        effects: ["Dữ liệu không còn nằm cứng trong HTML"],
        reveal: ["api"],
        focus: ["api"],
        preview: "css"
      },
      {
        stage: "api",
        title: "Gọi GET và nhận bản ghi",
        detail: "fetch đi tới máy chủ giả rồi trả JSON về. Từ đây giao diện có nguồn dữ liệu riêng, tách khỏi phần trình bày.",
        keys: ["fetch(url)", "res.json()", "AbortController"],
        effects: ["JSON về sau khoảng 120 ms", "Lỗi mạng rơi vào catch"],
        reveal: ["data"],
        focus: ["api", "data"],
        flow: { label: "GET /members/1", dir: "in" },
        preview: "live"
      },
      {
        stage: "js",
        title: "Chọn phần tử và khai báo state",
        detail: "Một object state giữ dữ liệu đang hiển thị. Mọi thay đổi đi qua state, không sửa thẳng vào DOM rải rác.",
        keys: ["const state", "querySelector", "render()"],
        effects: ["State là nguồn duy nhất", "render đọc state rồi ghi ra DOM"],
        reveal: ["jsflow"],
        focus: ["jsflow", "data"],
        preview: "live"
      },
      {
        stage: "js",
        title: "Đổ dữ liệu vào giao diện",
        detail: "Hàm tô dữ liệu chỉ làm một việc: đọc state và ghi text vào đúng phần tử. Giao diện đã dựng xong nên bước này rất ngắn.",
        keys: ["textContent", "Intl.NumberFormat"],
        effects: ["Tên, vai trò, chỉ số lấy từ JSON", "Số hiển thị theo định dạng Việt Nam"],
        focus: ["identity", "bio", "stats"],
        preview: "live"
      },
      {
        stage: "js",
        title: "Gắn sự kiện theo dõi",
        detail: "Bấm nút là cập nhật giao diện ngay, sau đó gửi PATCH. Nếu máy chủ lỗi thì trả nhãn về trạng thái cũ.",
        keys: ["addEventListener", "PATCH /members/1", "rollback"],
        effects: ["Nhãn đổi ngay khi bấm", "Lỗi thì hoàn tác và báo lại"],
        reveal: ["feedback"],
        focus: ["follow", "feedback"],
        preview: "live"
      },
      {
        stage: "done",
        title: "Kiểm tra và co giãn",
        detail: "Đi hết một vòng: dữ liệu tải được, nút phản hồi, màn hình hẹp không tràn. Khung chạy thử bên cạnh đang ở bản đầy đủ.",
        keys: ["390px", "mạng chậm", "bàn phím"],
        effects: ["Ba kích thước đều đọc được", "Không có cuộn ngang ngoài ý muốn"],
        focus: ["card", "actions"],
        preview: "live"
      }
    ]
  },

  "task-board": {
    files: ["index.html", "styles.css", "app.js"],
    dataLabel: "4 bản ghi",
    api: { endpoint: "GET /tasks", latency: "90 ms" },
    json: ["id: 1", "title: Soát lưới trang chủ", "done: false"],
    nodes: [
      { id: "body", tag: "body", note: "Khung trang" },
      { id: "app", tag: "section.app", note: "Toàn bộ bảng việc" },
      { id: "head", tag: "header.app-head", note: "Tiêu đề và bộ đếm" },
      { id: "form", tag: "form.task-form", note: "Ô nhập, mức ưu tiên, nút thêm" },
      { id: "list", tag: "ul#taskList", note: "Danh sách việc" },
      { id: "task", tag: "li.task", note: "Một việc gồm ô tick và nội dung" },
      { id: "foot", tag: "footer.app-foot", note: "Dòng tổng kết" }
    ],
    steps: [
      {
        stage: "plan",
        title: "Dựng khung ứng dụng",
        detail: "section.app là khối cha duy nhất. Nó giữ tiêu đề, biểu mẫu, bộ lọc, danh sách và dòng tổng kết theo một cột dọc.",
        keys: ["section.app", "max-width: 760px"],
        effects: ["Một cột, nhịp đọc từ trên xuống"],
        reveal: ["app", "dom", "node-body", "node-app"],
        focus: ["app"],
        preview: "live"
      },
      {
        stage: "plan",
        title: "Tách phần đầu và biểu mẫu",
        detail: "Đầu trang là khối anh em với biểu mẫu và bộ lọc. Chia như vậy để mỗi vùng có thể thay đổi mà không kéo theo vùng khác.",
        keys: ["header.app-head", "form.task-form", "nav.filters"],
        effects: ["Ba khối độc lập trong khung", "Bộ đếm nằm cùng tiêu đề"],
        reveal: ["head", "form", "filters", "counter", "node-head", "node-form"],
        focus: ["head", "form"],
        preview: "live"
      },
      {
        stage: "plan",
        title: "Tách danh sách và chân trang",
        detail: "Danh sách là vùng co giãn theo dữ liệu, chân trang là khối cố định. Tách hai vùng này ngay từ đầu để sau đó chỉ việc render.",
        keys: ["ul#taskList", "li.task", "footer.app-foot"],
        effects: ["Danh sách dài bao nhiêu cũng chứa được", "Chân trang luôn ở cuối khung"],
        reveal: ["list", "app-foot", "empty", "node-list", "node-task", "node-foot"],
        focus: ["list"],
        preview: "live"
      },
      {
        stage: "html",
        title: "Viết phần đầu",
        detail: "Tiêu đề và bộ đếm dùng hai phần tử khác cấp. Bộ đếm có id riêng vì JavaScript sẽ cập nhật nó liên tục.",
        keys: ["h1", "p#counter"],
        effects: ["Bộ đếm tách khỏi tiêu đề để cập nhật riêng"],
        focus: ["head", "counter"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Dựng biểu mẫu nhập việc",
        detail: "Ô nhập, ô chọn và nút thêm nằm trong cùng một form. Dùng form để phím Enter và nút gửi hành xử như nhau.",
        keys: ["input#taskInput", "select#taskPriority", "button.btn-add"],
        effects: ["Enter trong ô nhập cũng thêm việc", "Mức ưu tiên là dữ liệu của việc"],
        focus: ["form"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Dựng một việc mẫu",
        detail: "Mỗi việc gồm ô tick, phần nội dung và nút xoá. Dựng một mẫu thật kỹ rồi nhân bản bằng JavaScript thay vì viết tay bốn lần.",
        keys: ["li.task", "label.check", "button.icon-btn"],
        effects: ["Một mẫu dùng cho mọi việc", "Nút xoá có nhãn cho trình đọc màn hình"],
        focus: ["row-1", "row-2", "row-3", "row-4"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Thêm trạng thái rỗng",
        detail: "Khi bộ lọc không còn việc nào, cần một lời nhắn thay vì khoảng trắng. Phần tử này ẩn sẵn và chỉ hiện khi cần.",
        keys: ["p#emptyState", "hidden"],
        effects: ["Không bao giờ thấy vùng trống khó hiểu"],
        reveal: ["app-foot"],
        focus: ["empty", "app-foot"],
        preview: "html"
      },
      {
        stage: "css",
        title: "Đặt khung và nhịp dọc",
        detail: "Khung ngoài dùng grid một cột với khoảng cách đều. Chưa cần màu, chỉ cần các khối đứng đúng nhịp.",
        keys: ["display: grid", "gap: 18px", "padding: 28px"],
        effects: ["Các vùng cách đều nhau", "Khung không chạm mép trang"],
        focus: ["app"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Phân cấp chữ",
        detail: "Tiêu đề đậm và lớn hơn, bộ đếm dùng chữ số đều cột để không nhảy khi số tăng từ 9 lên 10.",
        keys: ["font-family", "letter-spacing", "font-variant-numeric"],
        effects: ["Mắt thấy ngay điểm bắt đầu", "Bộ đếm không rung khi đổi số"],
        focus: ["head", "counter"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Làm biểu mẫu một hàng",
        detail: "Ô nhập nhận phần lớn bề ngang, ô chọn và nút giữ kích thước vừa đủ. Flex với flex: 1 là đủ cho bố cục này.",
        keys: ["display: flex", "flex: 1", "border-radius: 10px"],
        effects: ["Ô nhập co giãn theo khung", "Ba điều khiển đứng cùng hàng"],
        focus: ["form"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Tạo hàng việc",
        detail: "Mỗi hàng dùng grid ba cột: ô tick, nội dung co giãn, nút xoá. Đường kẻ dưới giúp mắt bám hàng khi danh sách dài.",
        keys: ["grid-template-columns: auto 1fr auto", "border-bottom", "padding: 10px 0"],
        effects: ["Nội dung dài tự xuống dòng", "Các hàng không dính vào nhau"],
        focus: ["list", "row-2"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Trạng thái và ưu tiên",
        detail: "Việc đã xong dùng gạch ngang và màu dịu. Mức ưu tiên là một chấm màu nhỏ, không tranh chỗ với nội dung.",
        keys: [".is-done", "text-decoration", "background"],
        effects: ["Việc xong vẫn đọc được nhưng lùi lại", "Ưu tiên cao thấy ngay bằng màu"],
        focus: ["row-2", "row-3"],
        preview: "css"
      },
      {
        stage: "api",
        title: "Khai báo endpoint danh sách",
        detail: "MockAPI cần một mảng việc có id, title, priority và done. Đúng hình dạng này thì phần render phía sau mới đơn giản.",
        keys: ["GET /tasks", "mảng JSON"],
        effects: ["Dữ liệu có id ổn định để sửa và xoá"],
        reveal: ["api"],
        focus: ["api"],
        preview: "css"
      },
      {
        stage: "api",
        title: "Đủ bốn thao tác ghi",
        detail: "Thêm dùng POST, đổi trạng thái dùng PATCH, xoá dùng DELETE. Mỗi thao tác trả về bản ghi hoặc mã trạng thái để kiểm tra.",
        keys: ["POST /tasks", "PATCH /tasks/:id", "DELETE /tasks/:id"],
        effects: ["Thêm việc trả về id mới", "Đổi trạng thái chỉ gửi trường cần đổi"],
        reveal: ["data"],
        focus: ["api", "data"],
        flow: { label: "PATCH /tasks/:id", dir: "out" },
        preview: "live"
      },
      {
        stage: "js",
        title: "State và lần tải đầu",
        detail: "State giữ mảng việc, bộ lọc đang chọn và từ khoá. Hàm tải dữ liệu chỉ gọi một lần khi trang mở.",
        keys: ["const state", "loadTasks()", "AbortController"],
        effects: ["Một nguồn dữ liệu cho mọi lần render", "Tải lỗi vẫn có thông báo"],
        reveal: ["jsflow"],
        focus: ["jsflow", "data"],
        preview: "live"
      },
      {
        stage: "js",
        title: "Render, lọc và đếm",
        detail: "Một hàm render duy nhất dựng lại danh sách từ state. Bộ lọc và bộ đếm cũng đọc từ đó nên không bao giờ lệch nhau.",
        keys: ["render()", "filter()", "textContent"],
        effects: ["Lọc xong là đếm lại ngay", "Không còn việc thì hiện trạng thái rỗng"],
        focus: ["app-head", "counter", "list"],
        preview: "live"
      },
      {
        stage: "js",
        title: "Thêm, đổi trạng thái, xoá",
        detail: "Mỗi thao tác cập nhật state rồi gọi render. Riêng xoá và đổi trạng thái gửi thêm yêu cầu lên MockAPI.",
        keys: ["submit", "PATCH", "DELETE", "render()"],
        effects: ["Danh sách đổi ngay sau thao tác", "Bộ đếm chạy theo trạng thái mới"],
        focus: ["form", "row-2", "row-3"],
        preview: "live"
      },
      {
        stage: "done",
        title: "Kiểm tra vòng đời một việc",
        detail: "Thử thêm, tick, lọc, xoá và tải lại. Nếu mọi bước đều giữ đúng state thì giao diện và dữ liệu không thể lệch nhau.",
        keys: ["tải lại", "mạng chậm", "bàn phím"],
        effects: ["Thêm rồi tải lại vẫn còn dữ liệu", "Tab được tới mọi nút"],
        focus: ["app", "list"],
        preview: "live"
      }
    ]
  },

  "order-dashboard": {
    files: ["index.html", "styles.css", "app.js"],
    dataLabel: "9 bản ghi",
    api: { endpoint: "GET /orders", latency: "140 ms" },
    json: ["id: OD-1042", "customer: Nguyễn Mai", "total: 2150000"],
    nodes: [
      { id: "body", tag: "body", note: "Khung trang" },
      { id: "shell", tag: "div.shell", note: "Lưới hai cột: sidebar và nội dung" },
      { id: "side", tag: "aside.side", note: "Thương hiệu và điều hướng" },
      { id: "main", tag: "main.main", note: "Toàn bộ vùng làm việc" },
      { id: "top", tag: "header.topbar", note: "Tìm kiếm và tải lại" },
      { id: "kpis", tag: "section.kpis", note: "Ba chỉ số phái sinh" },
      { id: "panel", tag: "section.panel", note: "Bộ lọc, bảng và phân trang" },
      { id: "table", tag: "table", note: "Năm dòng mỗi trang" },
      { id: "pager", tag: "footer.panel-foot", note: "Điều hướng trang" }
    ],
    steps: [
      {
        stage: "plan",
        title: "Chia lưới hai cột",
        detail: "div.shell giữ sidebar cố định bên trái và vùng nội dung co giãn bên phải. Đây là quyết định bố cục lớn nhất của trang.",
        keys: ["div.shell", "grid-template-columns: 232px 1fr", "min-height: 100vh"],
        effects: ["Sidebar không đổi bề ngang", "Nội dung chiếm phần còn lại"],
        reveal: ["app", "dom", "node-body", "node-shell"],
        focus: ["app"],
        preview: "live"
      },
      {
        stage: "plan",
        title: "Tách sidebar và vùng làm việc",
        detail: "Hai cột là hai khối anh em. Sidebar lo điều hướng, main.main lo công việc; không khối nào chứa khối kia.",
        keys: ["aside.side", "main.main"],
        effects: ["Đổi sidebar không ảnh hưởng bảng", "Mỗi vùng có cây riêng"],
        reveal: ["side", "main", "node-side", "node-main"],
        focus: ["side", "main"],
        preview: "live"
      },
      {
        stage: "plan",
        title: "Tách thanh công cụ",
        detail: "header.topbar nằm trong main chứ không nằm trong bảng. Tìm kiếm và tải lại là việc của cả trang, không riêng bảng.",
        keys: ["header.topbar", "form.search"],
        effects: ["Tìm kiếm điều khiển toàn bộ danh sách"],
        reveal: ["topbar", "node-top"],
        focus: ["topbar"],
        preview: "live"
      },
      {
        stage: "plan",
        title: "Tách vùng chỉ số",
        detail: "section.kpis là ba thẻ anh em, mỗi thẻ một con số. Các con số này tính từ mảng đơn chứ không phải dữ liệu viết tay.",
        keys: ["section.kpis", "article.kpi × 3"],
        effects: ["Ba chỉ số cùng một cấu trúc", "Số liệu phái sinh từ dữ liệu"],
        reveal: ["kpis", "node-kpis"],
        focus: ["kpis"],
        preview: "live"
      },
      {
        stage: "plan",
        title: "Tách bảng và phân trang",
        detail: "section.panel gom bộ lọc, bảng và chân trang. Bảng nằm trong vùng cuộn riêng để màn hình hẹp vẫn dùng được.",
        keys: ["section.panel", "div.table-wrap", "footer.panel-foot"],
        effects: ["Bảng cuộn ngang khi thiếu chỗ", "Phân trang tách khỏi dữ liệu"],
        reveal: ["panel", "pager", "node-panel", "node-table", "node-pager"],
        focus: ["panel"],
        preview: "live"
      },
      {
        stage: "html",
        title: "Viết sidebar",
        detail: "Thương hiệu, điều hướng và ghi chú ca trực. Chỉ mục đang chọn có trạng thái rõ ràng, các mục còn lại để dịu.",
        keys: ["a.brand", "nav.side-nav", "p.side-note"],
        effects: ["Mục đang xem nổi bật", "Sidebar đọc được cả khi tối"],
        focus: ["side"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Dựng thanh tìm kiếm",
        detail: "Ô tìm kiếm và nút tải lại nằm trên một hàng. Ô tìm có nhãn ẩn để trình đọc màn hình hiểu nhiệm vụ.",
        keys: ["input#search", "button#refreshBtn"],
        effects: ["Gõ là lọc theo mã hoặc tên khách", "Nút tải lại có nhãn rõ"],
        focus: ["topbar"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Dựng ba thẻ chỉ số",
        detail: "Mỗi thẻ có nhãn, con số và ghi chú nhỏ. Con số để trống lúc đầu vì JavaScript sẽ điền sau khi tải dữ liệu.",
        keys: ["article.kpi", "#kpiTotal", "#kpiRevenue", "#kpiShipping"],
        effects: ["Ba vùng cập nhật độc lập", "Không có số liệu giả trong HTML"],
        focus: ["kpis"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Dựng bảng và hàng mẫu",
        detail: "Bảng có năm cột cố định: mã, khách, ngày, trạng thái, tổng tiền. Dựng một hàng mẫu đủ kỹ để JavaScript nhân bản.",
        keys: ["thead", "tbody#orderBody", "tr × 5"],
        effects: ["Cột thẳng hàng nhờ bảng thật", "Hàng mẫu tái sử dụng cho mọi đơn"],
        focus: ["panel", "row-1", "row-2", "row-3"],
        preview: "html"
      },
      {
        stage: "html",
        title: "Chốt chân bảng",
        detail: "Chân bảng giữ nút lùi, tiến và số trang. Thông báo toast đặt ngoài bảng để không bị cuộn mất.",
        keys: ["footer.panel-foot", "button#prevBtn", "button#nextBtn"],
        effects: ["Phân trang luôn thấy khi bảng dài", "Toast nổi trên mọi nội dung"],
        focus: ["pager"],
        preview: "html"
      },
      {
        stage: "css",
        title: "Đặt lưới và sidebar",
        detail: "Sidebar tối, nội dung sáng. Sticky giữ sidebar đứng yên khi cuộn bảng dài, nhưng tắt ở màn hình hẹp.",
        keys: ["position: sticky", "background: #0c1b2a", "color"],
        effects: ["Sidebar tách khỏi vùng làm việc", "Điều hướng luôn trong tầm mắt"],
        focus: ["side", "app"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Làm thanh công cụ",
        detail: "Topbar dùng flex, ô tìm kiếm co giãn. Ở màn hình hẹp, các phần tử tự xuống hàng thay vì bị ép chữ.",
        keys: ["display: flex", "position: sticky", "gap: 10px"],
        effects: ["Ô tìm kiếm chiếm phần lớn bề ngang", "Thanh công cụ bám khi cuộn"],
        focus: ["topbar"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Tạo thẻ chỉ số",
        detail: "Grid ba cột chia đều, số dùng chữ đều cột để không nhảy khi giá trị đổi từ 9 lên 10 đơn.",
        keys: ["grid-template-columns: repeat(3, 1fr)", "font-variant-numeric", "border-radius"],
        effects: ["Ba thẻ cao bằng nhau", "Số tiền thẳng cột"],
        focus: ["kpis"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Làm bảng đọc được",
        detail: "Bảng giữ bề ngang tối thiểu và cuộn trong khung. Ô trạng thái là select nhỏ, màu theo trạng thái để quét nhanh.",
        keys: ["min-width: 720px", "overflow: auto", "select.status"],
        effects: ["Không bóp chữ trên điện thoại", "Trạng thái thấy bằng màu"],
        focus: ["panel", "row-1"],
        preview: "css"
      },
      {
        stage: "css",
        title: "Co giãn màn hình hẹp",
        detail: "Dưới 960px, lưới hai cột chuyển thành một cột và sidebar nằm trên. Dưới 640px, bảng vẫn cuộn ngang thay vì vỡ cột.",
        keys: ["@media (max-width: 960px)", "grid-template-columns: 1fr"],
        effects: ["Điện thoại vẫn thao tác được", "Không có cuộn ngang toàn trang"],
        focus: ["app", "panel"],
        preview: "css"
      },
      {
        stage: "api",
        title: "Khai báo endpoint đơn hàng",
        detail: "Một mảng chín đơn đủ trạng thái: chờ, đang giao, hoàn tất, huỷ. Dữ liệu nhiều hơn một trang để thử phân trang.",
        keys: ["GET /orders", "9 bản ghi"],
        effects: ["Đủ trạng thái để kiểm tra bộ lọc", "Đủ dài để thử phân trang"],
        reveal: ["api"],
        focus: ["api"],
        preview: "css"
      },
      {
        stage: "api",
        title: "Thêm tham số và PATCH",
        detail: "Lọc theo trạng thái và phân trang là tham số truy vấn. Đổi trạng thái là PATCH một trường, không gửi cả bản ghi.",
        keys: ["?status=shipping", "?page=1&limit=5", "PATCH /orders/:id"],
        effects: ["Máy chủ lọc thay vì tải hết", "PATCH chỉ gửi phần thay đổi"],
        reveal: ["data"],
        focus: ["api", "data"],
        flow: { label: "GET /orders?page=1", dir: "in" },
        preview: "live"
      },
      {
        stage: "js",
        title: "State và hàm định dạng",
        detail: "State giữ mảng đơn, bộ lọc, từ khoá và trang hiện tại. Tiền và ngày được định dạng một lần trong hàm phụ.",
        keys: ["const state", "Intl.NumberFormat", "formatDate"],
        effects: ["Mọi nơi hiển thị cùng một định dạng", "Đổi trang chỉ đổi state"],
        reveal: ["jsflow"],
        focus: ["jsflow", "data"],
        preview: "live"
      },
      {
        stage: "js",
        title: "Tải dữ liệu và khung xương",
        detail: "Trước khi có dữ liệu, bảng hiện khung xương để người dùng biết đang chờ. Lỗi mạng hiện thông báo thay vì bảng trắng.",
        keys: ["loadOrders()", "skeleton", "catch"],
        effects: ["Không có khoảng trắng khó hiểu", "Lỗi mạng được báo rõ"],
        focus: ["panel", "kpis"],
        preview: "live"
      },
      {
        stage: "js",
        title: "Lọc, tìm và chọn trang",
        detail: "Mọi thay đổi ở bộ lọc, ô tìm hay nút trang đều đưa về state rồi render lại. Không đọc dữ liệu từ DOM.",
        keys: ["filter()", "includes()", "page"],
        effects: ["Lọc và tìm kết hợp được", "Đổi bộ lọc tự về trang một"],
        focus: ["topbar", "panel", "pager"],
        preview: "live"
      },
      {
        stage: "js",
        title: "Vẽ bảng và chỉ số",
        detail: "Một vòng lặp dựng các hàng, một lượt reduce tính doanh thu. Chỉ số và bảng luôn khớp vì cùng đọc một mảng.",
        keys: ["map()", "reduce()", "innerHTML"],
        effects: ["Doanh thu tính lại sau mỗi thay đổi", "Năm dòng mỗi trang"],
        focus: ["kpis", "panel"],
        preview: "live"
      },
      {
        stage: "js",
        title: "PATCH lạc quan và thông báo",
        detail: "Đổi trạng thái cập nhật giao diện ngay rồi mới gửi PATCH. Nếu máy chủ lỗi, trả lại trạng thái cũ và báo cho người dùng.",
        keys: ["PATCH", "optimistic", "rollback", "toast"],
        effects: ["Cảm giác phản hồi tức thì", "Sai thì hoàn tác, không nói dối dữ liệu"],
        reveal: ["toast"],
        focus: ["row-1", "toast"],
        flow: { label: "PATCH /orders/OD-1042", dir: "out" },
        preview: "live"
      },
      {
        stage: "done",
        title: "Soát toàn bộ vận hành",
        detail: "Thử lọc, tìm, đổi trang, đổi trạng thái và làm hẹp màn hình. Bảng vận hành đúng khi mọi con số vẫn khớp sau từng thao tác.",
        keys: ["mạng chậm", "390px", "bàn phím"],
        effects: ["Ba chỉ số khớp với bảng", "Toast tự ẩn sau vài giây"],
        focus: ["app", "kpis", "panel"],
        preview: "live"
      }
    ]
  }
};
