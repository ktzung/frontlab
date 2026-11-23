// Video production plan: one entry per lab exercise.
// Narration is Vietnamese; project names and files follow English kebab-case.

export const chapters = {
  1: "HTML5 cơ bản & thẻ ngữ nghĩa",
  2: "Lập trình tương tác với JavaScript",
  3: "CSS3 hiện đại — bố cục & hiệu ứng",
  4: "Thiết kế responsive với Bootstrap 5"
};

const resizeBack = { t: 12.5, type: "resize", width: 1280, height: 800 };
const mobile = { t: 8.0, type: "resize", width: 390, height: 844 };

export const plan = [
  {
    num: 1, slug: "four-seasons-poem", chapter: 1,
    vi: "Trang thơ “Bốn mùa”", en: "Four Seasons Poem Page",
    html: "Toàn bộ bài thơ nằm trong thẻ article. Tiêu đề dùng h1, ba khổ thơ là ba đoạn p, mỗi câu ngắt dòng bằng br, giữa các khổ là thẻ hr. Cách này giữ đúng nghĩa của một tác phẩm văn học: article cho cả bài, p cho từng khổ.",
    css: "Bốn biến màu khai báo trong :root. Body dùng Flexbox với justify-content center để căn giữa khung thơ rộng tối đa 640 pixel. Tiêu đề có dải nền hồng, chữ đỏ, in hoa. Khổ một và khổ ba màu xanh, khổ giữa màu đỏ. Thẻ hr bỏ viền mặc định, thay bằng border-top xanh rộng 55 phần trăm.",
    js: "",
    insight: "Bài mở đầu rèn tư duy dùng thẻ ngữ nghĩa thay cho font và center, đồng thời làm quen biến CSS và Flexbox.",
    demo: {
      narration: "Bây giờ chạy thử. Trang thơ hiển thị đúng khung vàng nhạt, tiêu đề hồng đỏ, hai khổ xanh và khổ giữa đỏ. Khi thu nhỏ cửa sổ xuống kích thước điện thoại, khung thơ co lại theo chiều rộng màn hình nhưng vẫn căn giữa nhờ Flexbox.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 2, slug: "china-tour-ad", chapter: 1,
    vi: "Quảng cáo tour du lịch “Hành trình Trung Hoa”", en: "China Tour Advertisement",
    html: "Bài dùng article bọc toàn bộ nội dung, ảnh Vạn Lý Trường Thành đặt trước đoạn văn đầu, tiêu đề h1, đoạn sao p và các đoạn mô tả hành trình. Ảnh phải nằm trước nội dung thì float mới chảy đúng.",
    css: "Ảnh float sang phải với margin tạo khoảng thở. Article dùng display flow-root để chứa ảnh nổi, tránh tràn khung. Nền vàng gold, chữ nâu đậm, tiêu đề in hoa; media query xếp ảnh lên trên khi màn hình hẹp.",
    js: "",
    insight: "Bài học về float, dọn float bằng flow-root và cách kể câu chuyện tour du lịch bằng bố cục báo chí.",
    demo: {
      narration: "Chạy thử trang quảng cáo: ảnh nằm bên phải, dòng chữ chảy vòng sang trái. Thu nhỏ màn hình, ảnh chuyển lên trên và nội dung xếp thành một cột để dễ đọc trên điện thoại.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.4 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 3, slug: "ha-long-heritage", chapter: 1,
    vi: "Trang giới thiệu Di sản Vịnh Hạ Long", en: "Ha Long Bay Heritage Page",
    html: "Trang gồm header với ảnh hero, article nội dung, figure chú thích ảnh và aside thông tin nhanh. Tiêu đề chính dùng h1, các mục con h2; thông tin di sản đặt trong danh sách mô tả.",
    css: "Ảnh hero dùng object-fit cover để phủ kín khung. Chữ cái đầu của đoạn mở dùng pseudo-element first-letter tạo drop cap. Bảng màu xanh biển, chữ trắng trên hero; media query đổi bố cục aside xuống dưới.",
    js: "",
    insight: "Bài tập về hero image, drop cap bằng CSS và cách tổ chức thông tin di sản theo cấu trúc ngữ nghĩa.",
    demo: {
      narration: "Chạy thử: ảnh hero phủ kín chiều ngang, chữ cái đầu được phóng to. Cuộn xuống xem phần nội dung và hộp thông tin. Thu nhỏ màn hình, hero giữ tỉ lệ và nội dung chuyển thành một cột.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 4, slug: "da-nang-city", chapter: 1,
    vi: "Trang giới thiệu thành phố Đà Nẵng", en: "Da Nang City Page",
    html: "Trang dùng header chứa ảnh banner và tiêu đề thành phố, main chứa các đoạn giới thiệu, figure cho ảnh minh họa và footer thông tin liên hệ. Bố cục một cột tập trung vào nội dung.",
    css: "Banner dùng object-fit cover, chữ trắng có bóng đổ để nổi trên ảnh. Đoạn mở dùng first-letter làm drop cap. Thanh phụ và liên kết dùng màu xanh và đỏ của thành phố; media query giảm cỡ chữ trên mobile.",
    js: "",
    insight: "Luyện cách đặt ảnh banner, chữ nổi trên ảnh và giữ bố cục đọc tốt ở nhiều kích thước.",
    demo: {
      narration: "Chạy thử: banner Đà Nẵng hiển thị tràn chiều ngang, tiêu đề trắng nổi bật. Cuộn xuống phần giới thiệu, sau đó thu nhỏ cửa sổ để kiểm tra bố cục một cột và cỡ chữ.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.45 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 5, slug: "nhan-ai-flower-shop", chapter: 1,
    vi: "Trang giới thiệu Công ty Hoa tươi Nhân Ái", en: "Nhan Ai Flower Shop Page",
    html: "Trang có header thương hiệu, nav liên kết, main chia hai cột: bên trái là bài giới thiệu và danh sách dịch vụ, bên phải là ảnh hoa và bảng thông tin liên hệ. Thông tin công ty dùng table dữ liệu.",
    css: "Hai cột dùng CSS Grid với tỉ lệ 2 chia 1. Nhãn mục dùng inline-block, danh sách bỏ bullet mặc định. Bảng màu hồng cánh sen, chữ trắng trên tiêu đề; media query gộp hai cột thành một.",
    js: "",
    insight: "Bài đầu tiên ghép Grid hai cột với bảng dữ liệu và hệ thống nhãn màu, rất gần bố cục trang doanh nghiệp thật.",
    demo: {
      narration: "Chạy thử trang hoa tươi: cột nội dung bên trái, ảnh và bảng liên hệ bên phải. Thu nhỏ màn hình, Grid tự gộp thành một cột, bảng thông tin vẫn đọc được.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 6, slug: "hanoi-food-table", chapter: 1,
    vi: "Bảng danh sách “Các món ngon Hà Nội”", en: "Hanoi Food Table",
    html: "Đây là bài dùng table đúng mục đích dữ liệu: thead chứa tiêu đề cột, tbody chứa từng món, mỗi dòng có số thứ tự, tên món, địa chỉ và ghi chú. Ngoài bảng còn có figure ảnh minh họa và caption.",
    css: "Bảng có viền, header nền cam đậm chữ trắng, hàng chẵn nền kem để dễ đọc. Ảnh dùng figure bo góc. Bảng màu cam, kem, nâu; media query cho phép cuộn ngang bảng trên màn hình nhỏ thay vì bóp chữ.",
    js: "",
    insight: "Phân biệt table dữ liệu với table dàn trang: bài này dùng table đúng chuẩn và trình bày dữ liệu ẩm thực rõ ràng.",
    demo: {
      narration: "Chạy thử: bảng món ăn có header cam, các dòng xen kẽ. Thu nhỏ màn hình, bảng được đặt trong vùng cuộn ngang để không vỡ cột; ảnh và chú thích vẫn hiển thị.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 7, slug: "double-rich-promotion", chapter: 1,
    vi: "Trang chương trình khuyến mãi dầu gội Double Rich", en: "Double Rich Promotion Page",
    html: "Trang khuyến mãi gồm header đỏ, khối hero giới thiệu chương trình, ảnh sản phẩm, danh sách quà tặng và điều kiện tham gia. Thông tin nổi bật dùng các khối section riêng.",
    css: "Bố cục Grid hai cột cho ảnh và nội dung, nền đỏ trắng theo thương hiệu. Giá và nhãn khuyến mãi dùng chữ đậm, nền vàng. Media query đưa ảnh lên trước và giảm khoảng đệm trên mobile.",
    js: "",
    insight: "Bài luyện bố cục khuyến mãi nổi bật, phân cấp thị giác bằng màu đỏ và vàng, và giữ thông tin điều kiện dễ đọc.",
    demo: {
      narration: "Chạy thử: khối khuyến mãi đỏ nổi bật, ảnh sản phẩm bên cạnh nội dung. Cuộn xuống xem quà tặng và điều kiện. Thu nhỏ màn hình, ảnh chuyển lên trên, chữ vẫn rõ.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 8, slug: "what-where-portal", chapter: 1,
    vi: "Cổng thông tin chuyên mục “Ai? Cái gì? Ở đâu?”", en: "What Where Portal",
    html: "Trang mô phỏng cổng thông tin: header lớn, nav chuyên mục bên trái, main chứa nhiều article theo chủ đề, mỗi bài có tiêu đề, mô tả và ảnh minh họa. Cấu trúc lặp lại giúp dễ quét nội dung.",
    css: "Bố cục Grid ba vùng: sidebar trái, nội dung giữa, quảng cáo phải. Bài viết dùng ảnh float phải, đường kẻ chấm phân tách. Bảng màu xanh công vụ; media query ẩn cột quảng cáo và xếp sidebar lên đầu.",
    js: "",
    insight: "Bài tổng hợp bố cục portal nhiều cột, lặp article và xử lý ảnh nổi trong từng bài.",
    demo: {
      narration: "Chạy thử cổng thông tin: menu chuyên mục bên trái, danh sách bài ở giữa. Cuộn qua các chủ đề. Thu nhỏ màn hình, cột quảng cáo được ẩn và nội dung chuyển thành một cột.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.45 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 9, slug: "online-cv", chapter: 1,
    vi: "Trang Hồ sơ cá nhân trực tuyến (CV Online)", en: "Online CV Page",
    html: "CV gồm header tên và chức danh, cột trái chứa ảnh, thông tin liên hệ và kỹ năng, cột phải chứa học vấn, kinh nghiệm, dự án. Mỗi mục là một section có tiêu đề rõ ràng.",
    css: "Grid hai cột với sidebar xanh đậm và nội dung trắng. Thanh kỹ năng dùng div lồng nhau với chiều rộng phần trăm. Bảng màu xanh navy; media query đưa sidebar lên trên và chuyển thành bố cục một cột.",
    js: "",
    insight: "Bài luyện bố cục CV chuyên nghiệp: phân cấp thông tin, sidebar màu đậm và thanh kỹ năng trực quan.",
    demo: {
      narration: "Chạy thử CV: sidebar xanh bên trái, nội dung bên phải, thanh kỹ năng hiển thị theo tỉ lệ. Thu nhỏ màn hình, sidebar chuyển lên trên và toàn bộ CV xếp thành một cột.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.4 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 10, slug: "contact-form", chapter: 1,
    vi: "Trang Biểu mẫu liên hệ khách hàng (HTML5 Form)", en: "Customer Contact Form",
    html: "Trang dùng form với fieldset và legend, các cặp label gắn với input qua thuộc tính for và id. Có ô họ tên, email, số điện thoại, chủ đề select, nội dung textarea và nút gửi. Các trường bắt buộc dùng required.",
    css: "Form đặt trong card trắng, lưới hai cột cho các trường ngắn, textarea chiếm toàn bộ chiều ngang. Nhãn đậm, viền xanh teal khi focus. Media query chuyển lưới hai cột thành một cột trên mobile.",
    js: "",
    insight: "Bài chuẩn về form HTML5: label đúng cách, các kiểu input, thuộc tính bắt buộc và bố cục form responsive.",
    demo: {
      narration: "Chạy thử biểu mẫu: nhấp vào từng ô để thấy viền focus, nhập thử họ tên và email. Nhấn gửi khi còn trống để trình duyệt nhắc trường bắt buộc. Thu nhỏ màn hình, các ô xếp thành một cột.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.4 },
        { t: 2.5, type: "fill", selector: "#ho-ten", value: "Nguyễn Văn An" },
        { t: 4.0, type: "fill", selector: "#email", value: "an.nv@tlu.edu.vn" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 11, slug: "vietnam-gallery", chapter: 1,
    vi: "Thư viện ảnh danh thắng Việt Nam", en: "Vietnam Gallery",
    html: "Mỗi ảnh là một figure có img và figcaption. Toàn bộ thư viện nằm trong main, có tiêu đề h1 và mô tả ngắn. Cách dùng figure giúp ảnh và chú thích luôn gắn với nhau về ngữ nghĩa.",
    css: "Grid tự động với các cột tối thiểu 240 pixel, khoảng cách đều. Ảnh phủ kín ô bằng object-fit cover, chú thích nằm dưới. Nền tối, chữ sáng; media query giảm số cột trên màn hình hẹp.",
    js: "",
    insight: "Bài luyện grid ảnh responsive và cặp figure figcaption đúng chuẩn HTML5.",
    demo: {
      narration: "Chạy thử thư viện: các ảnh xếp thành lưới đều nhau, chú thích dưới mỗi ảnh. Thu nhỏ màn hình, lưới tự giảm từ ba cột xuống hai rồi một cột.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 12, slug: "print-calendar", chapter: 2,
    vi: "Ứng dụng In lịch tờ theo Ngày – Tháng – Năm", en: "Print Calendar App",
    html: "Trang gồm khối tờ lịch với bốn dòng năm, tháng, ngày, thứ; dòng lời chào theo giờ; và form nhập ngày tháng năm. Các vùng có id để JavaScript cập nhật trực tiếp.",
    css: "Tờ lịch nền trắng, số ngày rất lớn màu đỏ, tháng và thứ màu xanh. Form có viền xanh hai pixel, các ô nhập số gọn trong một hàng. Nền giấy lặp từ ảnh, media query xếp các ô nhập dọc trên mobile.",
    js: "Khi submit, sự kiện được chặn mặc định bằng preventDefault. Hàm tạo đối tượng Date với tháng trừ một vì JavaScript đếm tháng từ không. Tên thứ lấy từ mảng hoặc Intl.DateTimeFormat với locale tiếng Việt. Lời chào chia theo giờ: trước mười hai giờ là sáng, trước mười tám giờ là chiều, còn lại là tối.",
    insight: "Bài đầu của chương JavaScript: làm quen Date, xử lý submit và cập nhật DOM mà không tải lại trang.",
    demo: {
      narration: "Chạy thử: đổi ngày về mùng một tháng một năm hai nghìn không trăm hai mươi sáu, bấm In lịch. Tờ lịch cập nhật ngay thứ trong tuần và lời chào, trang không bị tải lại.",
      actions: [
        { t: 1.0, type: "fill", selector: "#o-ngay", value: "1" },
        { t: 2.2, type: "fill", selector: "#o-thang", value: "1" },
        { t: 3.4, type: "fill", selector: "#o-nam", value: "2026" },
        { t: 4.6, type: "click", selector: "#form-lich button[type=submit]" },
        { t: 7.0, type: "scroll", value: 0.2 },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 13, slug: "digital-clock", chapter: 2,
    vi: "Đồng hồ số điện tử thời gian thực", en: "Real-time Digital Clock",
    html: "Trang chỉ có hai khối: một khung đồng hồ rỗng có id và một khung lời chào. JavaScript sinh các thẻ img cho từng chữ số và dấu hai chấm, nên HTML giữ rất gọn.",
    css: "Khung đồng hồ nền đen, các ảnh số cao 52 pixel. Khung lời chào nền trắng, chữ đỏ in nghiêng, bo góc và đổ bóng. Body dùng Flexbox căn giữa cả hai khối; media query cho phép xuống dòng trên màn hình hẹp.",
    js: "Hàm cập nhật lấy giờ, phút, giây từ new Date. Mỗi số được tách hàng chục và hàng đơn vị rồi sinh ảnh tương ứng; dấu hai chấm là ảnh riêng. setInterval gọi lại mỗi giây. Lời chào thay đổi theo giờ trong ngày.",
    insight: "Bài luyện timer, Date và kỹ thuật sinh DOM động từ dữ liệu thời gian.",
    demo: {
      narration: "Chạy thử: đồng hồ chạy từng giây, ảnh số thay đổi theo thời gian thực và lời chào buổi sáng hiển thị bên cạnh. Thu nhỏ màn hình, hai khối tự xuống dòng và vẫn căn giữa.",
      actions: [
        { t: 1.0, type: "wait", value: 3000 },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 14, slug: "vietnam-wonders", chapter: 2,
    vi: "Trang chuyên đề “6 Kỳ quan thiên nhiên Việt Nam”", en: "Vietnam Wonders Feature",
    html: "Trang chuyên đề có header xanh, lưới sáu figure cho sáu kỳ quan, mỗi figure gồm ảnh và figcaption tên địa danh. Phần mở đầu dùng đoạn sapo mô tả chủ đề.",
    css: "Grid ba cột, ảnh cao đồng nhất nhờ object-fit cover, chú thích nền vàng nhạt. Bảng màu xanh lá và vàng. Media query giảm còn hai cột rồi một cột, khoảng cách ảnh thu nhỏ theo.",
    js: "",
    insight: "Bài luyện lưới ảnh chuyên đề, giữ tỉ lệ ảnh đồng đều và chú thích rõ ràng.",
    demo: {
      narration: "Chạy thử: sáu kỳ quan xếp thành lưới ba nhân hai. Thu nhỏ màn hình, lưới chuyển về hai cột rồi một cột, ảnh vẫn giữ khung đều.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 15, slug: "simple-calculator", chapter: 2,
    vi: "Ứng dụng Máy tính bỏ túi đơn giản", en: "Simple Calculator",
    html: "Máy tính gồm màn hình hiển thị biểu thức và kết quả, bên dưới là lưới bốn cột các nút số và toán tử. Mỗi nút mang thuộc tính data-key để JavaScript biết phím nào được bấm.",
    css: "Bàn phím dùng CSS Grid bốn cột, nút số màu xám, toán tử màu xanh, nút bằng màu xanh lá, nút xóa màu đỏ. Nền tối, nút có hiệu ứng nhấn và đổ bóng. Media query thu nhỏ máy tính trên điện thoại.",
    js: "Chỉ gắn một listener click lên cả bàn phím, dùng event delegation để đọc data-key. Biểu thức hiển thị dùng ký hiệu × ÷ − nhưng trước khi tính phải chuyển về dấu sao, chia, trừ. Hàm kiểm tra chuỗi hợp lệ và cân bằng ngoặc trước khi gọi tính toán.",
    insight: "Bài luyện event delegation, xử lý chuỗi biểu thức và cập nhật giao diện theo từng phím bấm.",
    demo: {
      narration: "Chạy thử: bấm bảy, nhân, tám, bằng, kết quả năm mươi sáu. Bấm xóa rồi tính một cộng hai, kết quả ba. Màn hình hiển thị cả biểu thức và kết quả.",
      actions: [
        { t: 1.0, type: "click", selector: '[data-key="7"]' },
        { t: 1.7, type: "click", selector: '[data-key="×"]' },
        { t: 2.4, type: "click", selector: '[data-key="8"]' },
        { t: 3.1, type: "click", selector: '[data-key="="]' },
        { t: 4.6, type: "click", selector: '[data-key="C"]' },
        { t: 5.6, type: "click", selector: '[data-key="1"]' },
        { t: 6.2, type: "click", selector: '[data-key="+"]' },
        { t: 6.8, type: "click", selector: '[data-key="2"]' },
        { t: 7.4, type: "click", selector: '[data-key="="]' },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 16, slug: "todo-list", chapter: 2,
    vi: "Ứng dụng Quản lý danh sách việc cần làm (To-do List)", en: "To-do List App",
    html: "Trang có form thêm việc với ô nhập và nút, danh sách ul rỗng để JavaScript đổ dữ liệu, và dòng thống kê số việc chưa xong. Mỗi việc được sinh thành li có nút xóa.",
    css: "Danh sách dạng card trắng, việc đã xong có màu xám và gạch ngang. Nút xóa chỉ hiện rõ khi rê chuột. Bảng màu tím, nền sáng; media query giảm đệm và cỡ chữ trên mobile.",
    js: "Mảng danh sách việc là nguồn dữ liệu. Hàm vẽ lại danh sách xóa nội dung cũ rồi tạo từng li, gắn sự kiện click để đổi trạng thái và nút xóa để lọc khỏi mảng. Sau mỗi thay đổi, hàm đếm lại số việc chưa hoàn thành.",
    insight: "Bài luyện quản lý trạng thái bằng mảng, render lại danh sách và xử lý nhiều sự kiện trên phần tử động.",
    demo: {
      narration: "Chạy thử: nhập việc Ôn tập CSS Grid rồi thêm. Bấm vào việc đầu tiên để đánh dấu xong, số việc chưa hoàn thành giảm. Bấm xóa ở một việc để loại khỏi danh sách.",
      actions: [
        { t: 1.0, type: "fill", selector: "#o-nhap", value: "Ôn tập CSS Grid" },
        { t: 2.4, type: "click", selector: "#form-them button[type=submit]" },
        { t: 4.2, type: "click", selector: "#danh-sach li:first-child" },
        { t: 6.4, type: "click", selector: "#danh-sach li:last-child .nut-xoa" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 17, slug: "form-validation", chapter: 2,
    vi: "Kiểm tra dữ liệu biểu mẫu bằng JavaScript (Form Validation)", en: "Form Validation App",
    html: "Form đăng ký gồm họ tên, email, mật khẩu, xác nhận mật khẩu; mỗi trường có một div thông báo lỗi riêng. Form đặt novalidate để JavaScript tự kiểm tra thay vì trình duyệt.",
    css: "Trường hợp lệ có viền xanh, không hợp lệ viền đỏ và dòng thông báo đỏ. Nút đăng ký màu cam, card nền trắng. Media query xếp các trường thành một cột.",
    js: "Mỗi trường có hàm kiểm tra riêng: tên không rỗng, email đúng biểu thức chính quy, mật khẩu đủ tám ký tự, xác nhận trùng khớp. Sự kiện input kiểm tra lại ngay khi gõ; sự kiện submit chặn mặc định và chỉ báo thành công khi tất cả hợp lệ.",
    insight: "Bài luyện regex, kiểm tra dữ liệu phía client và phản hồi lỗi ngay tại từng trường.",
    demo: {
      narration: "Chạy thử: bấm đăng ký với dữ liệu sai, các dòng lỗi hiện ra. Sửa email đúng định dạng, nhập mật khẩu và xác nhận khớp, bấm đăng ký, form báo thành công.",
      actions: [
        { t: 1.0, type: "click", selector: "#form-dk button[type=submit]" },
        { t: 3.4, type: "fill", selector: "#email", value: "an.nv@tlu.edu.vn" },
        { t: 5.0, type: "fill", selector: "#mat-khau", value: "12345678" },
        { t: 6.6, type: "fill", selector: "#xac-nhan", value: "12345678" },
        { t: 8.2, type: "click", selector: "#form-dk button[type=submit]" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 18, slug: "dien-dien-feature", chapter: 3,
    vi: "Bài viết “Bông điên điển” & Danh sách ẩm thực 2 cột", en: "Dien Dien Feature & Food List",
    html: "Trang gồm article giới thiệu bông điên điển với ảnh lớn, sapo và các đoạn văn; bên dưới là danh sách ẩm thực chia hai cột. Mỗi món là một mục có tiêu đề và mô tả ngắn.",
    css: "Hai cột dùng Grid với gap đều, tiêu đề mục màu cam, gạch chân vàng. Ảnh bo góc, chú thích in nghiêng. Bảng màu kem, cam, xanh lá; media query gộp danh sách thành một cột.",
    js: "",
    insight: "Bài luyện bố cục bài viết biên tập: ảnh lớn, sapo, nội dung nhiều cột và danh sách món ăn.",
    demo: {
      narration: "Chạy thử: bài viết hiển thị ảnh lớn và sapo, danh sách món ăn chia hai cột. Thu nhỏ màn hình, danh sách gộp thành một cột để dễ đọc.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.5 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 19, slug: "mui-ne-travel", chapter: 3,
    vi: "Trang địa danh “Mũi Né – Huyền bí và quyến rũ”", en: "Mui Ne Travel Page",
    html: "Trang có header ảnh nền Mũi Né, tiêu đề lớn, đoạn mở đầu drop cap và các khối giới thiệu điểm đến. Thông tin nhanh đặt trong aside cạnh nội dung.",
    css: "Ảnh nền header phủ tối bằng lớp gradient, chữ trắng. Drop cap bằng first-letter. Bố cục main cộng aside dùng Grid, tông vàng cát và cam. Media query đưa aside xuống dưới và giảm chiều cao hero.",
    js: "",
    insight: "Bài luyện hero ảnh nền, lớp phủ gradient và bố cục nội dung du lịch có aside.",
    demo: {
      narration: "Chạy thử: hero Mũi Né với lớp phủ tối giúp chữ nổi rõ. Cuộn xuống phần nội dung và aside. Thu nhỏ màn hình, aside xuống dưới, hero thấp lại.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.45 },
        mobile,
        resizeBack,
        { t: 14.0, type: "scroll", value: 0 }
      ]
    }
  },
  {
    num: 20, slug: "css-image-lab", chapter: 3,
    vi: "Phòng thí nghiệm hiệu ứng ảnh với CSS3 & SVG Filter", en: "CSS Image Effects Lab",
    html: "Trang trưng bày một ảnh hoa hồng và một thanh nút được JavaScript sinh từ mảng hiệu ứng. Ảnh có id để áp dụng filter và transform. Có thêm bộ lọc SVG định nghĩa hiệu ứng sóng.",
    css: "Khung ảnh nền tối, ảnh giữ nguyên kích thước. Thanh nút nằm dưới, nút đang chọn có màu vàng. Hiệu ứng dùng filter như grayscale, sepia, blur, drop-shadow và transform lật ảnh. Media query cho thanh nút xuống dòng.",
    js: "Mảng hiệu ứng chứa tên, filter và transform. Vòng lặp tạo từng nút, gắn sự kiện click: bỏ trạng thái chọn ở các nút cũ, thêm cho nút mới, rồi gán filter và transform cho ảnh. Kỹ thuật này tách dữ liệu hiệu ứng khỏi mã giao diện.",
    insight: "Bài luyện filter CSS, SVG filter và kỹ thuật sinh nút điều khiển từ dữ liệu.",
    demo: {
      narration: "Chạy thử: bấm nút Glow, ảnh phát sáng vàng; bấm Wave, ảnh nghiêng nhẹ; bấm FlipH, ảnh lật ngang. Mỗi lần chỉ một nút được chọn.",
      actions: [
        { t: 1.0, type: "click", selector: "#thanh-nut button:nth-child(10)" },
        { t: 3.0, type: "click", selector: "#thanh-nut button:nth-child(13)" },
        { t: 5.0, type: "click", selector: "#thanh-nut button:nth-child(3)" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 21, slug: "portal-grid-areas", chapter: 3,
    vi: "Bố cục cổng thông tin 4 vùng với CSS Grid Areas", en: "Portal Grid Areas Layout",
    html: "Trang chia bốn vùng rõ ràng: header, nav, main và aside quảng cáo, footer. Mỗi vùng có tên trong grid-template-areas, nội dung bên trong là các tiêu đề và danh sách liên kết.",
    css: "Grid đặt tên vùng bằng grid-template-areas, cột trái 260 pixel, cột phải 220 pixel. Header và footer trải toàn chiều ngang. Bảng màu đỏ đô, trắng, xám. Media query chuyển về một cột và ẩn hoặc đưa aside xuống cuối.",
    js: "",
    insight: "Bài luyện CSS Grid Areas — cách đặt tên vùng giúp bố cục trang lớn dễ đọc và dễ bảo trì.",
    demo: {
      narration: "Chạy thử: bốn vùng header, nav, main, aside hiển thị đúng vị trí. Thu nhỏ màn hình, grid chuyển thành một cột và các vùng xếp lần lượt.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.3 },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 22, slug: "light-dark-theme", chapter: 3,
    vi: "Chuyển đổi giao diện Sáng / Tối với CSS Variables", en: "Light / Dark Theme Toggle",
    html: "Trang có nút gạt chuyển theme ở góc phải, tiêu đề, đoạn mô tả và một số card nội dung. Nút có aria-label để hỗ trợ trình đọc màn hình.",
    css: "Toàn bộ màu khai báo bằng biến CSS trên :root và bộ biến cho data-theme dark. Chuyển theme chỉ cần đổi thuộc tính data-theme trên body. Các khối có transition màu nền và màu chữ. Media query giữ bố cục một cột trên mobile.",
    js: "Sự kiện click trên nút gạt đổi giá trị data-theme giữa light và dark, cập nhật trạng thái nút và dòng mô tả. Cách làm này tách màu khỏi cấu trúc, dễ thêm theme mới.",
    insight: "Bài luyện CSS Variables và tư duy design token: đổi theme không cần viết lại giao diện.",
    demo: {
      narration: "Chạy thử: bấm nút gạt, toàn bộ trang chuyển sang tối với hiệu ứng chuyển màu mượt. Bấm lần nữa để trở về sáng. Thu nhỏ màn hình, nút và nội dung vẫn cân đối.",
      actions: [
        { t: 1.0, type: "click", selector: "#nut-gat" },
        { t: 4.0, type: "click", selector: "#nut-gat" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 23, slug: "hover-zoom-gallery", chapter: 3,
    vi: "Thư viện ảnh nghệ thuật với hiệu ứng Hover Zoom", en: "Hover Zoom Gallery",
    html: "Thư viện gồm các figure, mỗi figure có ảnh và lớp chú thích. Ảnh nằm trong khung overflow hidden để hiệu ứng phóng không tràn ra ngoài.",
    css: "Grid ba cột, ảnh phủ kín ô. Khi hover, ảnh phóng nhẹ bằng transform scale và lớp phủ tối hiện lên cùng chú thích. Transition mượt. Bảng màu tối giản trắng đen. Media query giảm số cột.",
    js: "",
    insight: "Bài luyện hiệu ứng hover bằng transform, overflow hidden và transition — không cần JavaScript.",
    demo: {
      narration: "Chạy thử: rê chuột qua từng ảnh, ảnh phóng nhẹ và chú thích hiện lên. Thu nhỏ màn hình, lưới giảm cột nhưng hiệu ứng vẫn hoạt động.",
      actions: [
        { t: 1.0, type: "hover", selector: "figure:nth-child(2)" },
        { t: 3.5, type: "hover", selector: "figure:nth-child(4)" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 24, slug: "pricing-table", chapter: 3,
    vi: "Bảng giá dịch vụ 3 gói chuyên nghiệp (Pricing Table)", en: "Pricing Table",
    html: "Trang có tiêu đề chuyên đề và ba card gói dịch vụ: Basic, Pro, Enterprise. Mỗi card gồm tên gói, giá, danh sách quyền lợi và nút đăng ký. Gói Pro được làm nổi bật.",
    css: "Grid ba cột đều nhau, card trắng bo góc, gói Pro có viền và nhãn phổ biến. Giá lớn, đơn vị nhỏ. Hover card nâng nhẹ và đổ bóng. Media query xếp ba card thành một cột.",
    js: "",
    insight: "Bài luyện bảng giá chuyên nghiệp: phân cấp thị giác, nhấn gói chính và hiệu ứng hover tinh tế.",
    demo: {
      narration: "Chạy thử: ba gói xếp cạnh nhau, gói Pro nổi bật ở giữa. Rê chuột lên card để thấy hiệu ứng nâng. Thu nhỏ màn hình, các gói xếp dọc.",
      actions: [
        { t: 1.0, type: "hover", selector: ".goi:nth-child(2)" },
        { t: 3.5, type: "scroll", value: 0.3 },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 25, slug: "bootstrap-travel", chapter: 4,
    vi: "Trang du lịch với Navbar & Grid (Bootstrap 5)", en: "Bootstrap Travel Landing",
    html: "Trang dùng navbar expand-lg với brand, nút toggler và menu ba mục. Hero nằm trong container, bên dưới là row g-4 chứa ba card col-md-4 cho ba điểm đến. Footer nền tối.",
    css: "Chỉ cần một quy tắc nhỏ cho card-img-top: cao 180 pixel và object-fit cover. Các thành phần còn lại dùng utility Bootstrap như shadow-sm, rounded-3, text-muted, btn-outline-primary.",
    js: "Bootstrap bundle xử lý nút thu gọn menu trên mobile mà không cần viết JavaScript riêng. Grid mười hai cột tự chuyển từ ba cột sang một cột khi màn hình nhỏ hơn breakpoint md.",
    insight: "Bài đầu của Bootstrap: làm quen navbar, grid 12 cột và utility class thay cho CSS tự viết.",
    demo: {
      narration: "Chạy thử: navbar xanh với ba mục, hero và ba card điểm đến. Thu nhỏ màn hình, menu thu gọn thành nút hamburger và ba card xếp dọc.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.4 },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 26, slug: "club-signup", chapter: 4,
    vi: "Form đăng ký CLB Lập trình Web với Bootstrap", en: "Web Club Sign-up Form",
    html: "Form dùng row g-3, các cột col-md-6 để hai trường nằm một hàng. Có họ tên, mã sinh viên, email, select lớp, radio kỹ năng, textarea mục tiêu và checkbox cam kết. Thông báo kết quả là alert ẩn sẵn.",
    css: "Chỉ cần vài quy tắc tùy biến cho card và khoảng cách. Còn lại dùng form-control, form-select, form-check, btn-success của Bootstrap. Media query do grid đảm nhiệm.",
    js: "Sự kiện submit chặn mặc định, kiểm tra các trường bắt buộc, hiện alert thành công và vô hiệu hóa nút gửi tạm thời. Sự kiện reset ẩn alert và khôi phục trạng thái ban đầu.",
    insight: "Bài luyện form Bootstrap kết hợp validation JavaScript và phản hồi trạng thái rõ ràng.",
    demo: {
      narration: "Chạy thử: nhập họ tên, mã sinh viên, email, chọn lớp và kỹ năng, bấm đăng ký. Alert xanh xác nhận thành công. Bấm nhập lại để xóa form và ẩn thông báo.",
      actions: [
        { t: 1.0, type: "fill", selector: "#hoTen", value: "Nguyễn Văn An" },
        { t: 2.2, type: "fill", selector: "#maSv", value: "2251172001" },
        { t: 3.4, type: "fill", selector: "#email", value: "an.nv@tlu.edu.vn" },
        { t: 4.6, type: "select", selector: "#lop", value: "64KTPM1" },
        { t: 5.8, type: "fill", selector: "#mucTieu", value: "Xây dựng giao diện responsive" },
        { t: 7.2, type: "click", selector: "#frmClb button[type=submit]" },
        { t: 9.4, type: "click", selector: "#frmClb button[type=reset]" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 27, slug: "travel-showcase", chapter: 4,
    vi: "Trang sản phẩm du lịch với Card, Modal & Accordion", en: "Travel Cards with Modal & Accordion",
    html: "Ba card điểm đến có nút Xem chi tiết mở cùng một modal. Modal chứa tiêu đề, thân và nút đóng. Bên dưới là accordion hai mục giới thiệu và lịch trình.",
    css: "Card dùng h-100 và shadow-sm, ảnh card-img-top cao đồng nhất. Modal và accordion dùng component Bootstrap, chỉ tinh chỉnh bo góc và khoảng cách. Media query do grid đảm nhiệm.",
    js: "Bootstrap bundle bắt sự kiện show.bs.modal để đọc data-* trên nút được bấm và đổ nội dung tương ứng vào modal. Collapse của accordion tự xử lý đóng mở.",
    insight: "Bài luyện component Bootstrap có tương tác: card, modal dùng chung và accordion.",
    demo: {
      narration: "Chạy thử: bấm Xem chi tiết ở card đầu, modal mở với đúng thông tin điểm đến. Đóng modal rồi mở mục thứ hai của accordion để xem lịch trình.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.25 },
        { t: 2.2, type: "click", selector: '[data-bs-target="#md"]' },
        { t: 5.0, type: "click", selector: "#md .btn-close" },
        { t: 6.6, type: "click", selector: "#ac .accordion-button:nth-child(1)" },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 28, slug: "carousel-tabs", chapter: 4,
    vi: "Trình chiếu ảnh Carousel & Tabs", en: "Carousel and Tabs",
    html: "Trang có carousel ba ảnh với nút trước sau và chấm chỉ mục, bên dưới là nav pills ba tab: Giới thiệu, Lịch trình, Chi phí. Mỗi tab là một tab-pane.",
    css: "Carousel bo góc, ảnh cao đồng nhất, chữ trên ảnh có lớp phủ tối. Tab active dùng màu xanh. Chỉ tinh chỉnh vài chi tiết, còn lại là component Bootstrap.",
    js: "Bootstrap bundle tự chạy carousel, nút chuyển slide và tab. Không cần viết mã điều khiển thủ công; chỉ cần đúng data-bs-target và data-bs-slide.",
    insight: "Bài luyện hai component tương tác phổ biến: carousel ảnh và tab nội dung.",
    demo: {
      narration: "Chạy thử: bấm nút next để chuyển sang ảnh thứ hai của carousel. Bấm tab Lịch trình để đổi nội dung bên dưới. Thu nhỏ màn hình, carousel và tab vẫn hoạt động.",
      actions: [
        { t: 1.0, type: "click", selector: ".carousel-control-next" },
        { t: 4.2, type: "click", selector: '[data-bs-target="#t2"]' },
        { t: 6.4, type: "click", selector: '[data-bs-target="#t3"]' },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 29, slug: "student-pagination", chapter: 4,
    vi: "Bảng dữ liệu sinh viên & Phân trang", en: "Student Table with Pagination",
    html: "Trang có bảng table-hover striped với các cột số thứ tự, mã sinh viên, họ tên, lớp, điểm và trạng thái. Trạng thái dùng badge xanh hoặc vàng. Dưới bảng là thanh pagination.",
    css: "Card bọc bảng có shadow, header bảng nền xanh nhạt. Badge Đạt màu xanh, Thi lại màu vàng. Pagination dùng component Bootstrap. Media query cho phép cuộn ngang bảng.",
    js: "Bài này tập trung vào trình bày dữ liệu và component tĩnh của Bootstrap; thanh phân trang minh họa cấu trúc page-item, page-link và trạng thái active, disabled.",
    insight: "Bài luyện bảng dữ liệu lớn, badge trạng thái và cấu trúc phân trang chuẩn Bootstrap.",
    demo: {
      narration: "Chạy thử: bảng sinh viên có header xanh, badge trạng thái rõ ràng. Cuộn xuống xem thanh phân trang với trang một đang active. Thu nhỏ màn hình, bảng cuộn ngang thay vì vỡ cột.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.4 },
        mobile,
        resizeBack
      ]
    }
  },
  {
    num: 30, slug: "admin-dashboard", chapter: 4,
    vi: "Bảng điều khiển quản trị Admin Dashboard", en: "Admin Dashboard",
    html: "Dashboard có sidebar dọc với logo và menu, vùng main chứa header, bốn thẻ KPI, bảng bài tập gần đây và tiến độ. Bố cục dùng flex và grid của Bootstrap.",
    css: "Sidebar nền tối cố định chiều rộng, main nền xám nhạt. Bốn thẻ KPI dùng col-md-3, mỗi thẻ có số lớn và thanh tiến độ. Bảng gọn, badge trạng thái màu. Media query ẩn hoặc thu gọn sidebar trên mobile.",
    js: "Các thành phần chủ yếu là HTML và class Bootstrap; thanh tiến độ dùng progress với width phần trăm. Bài tập trung vào bố cục dashboard và phân cấp thông tin.",
    insight: "Bài tổng kết chương Bootstrap: dashboard nhiều vùng, KPI, bảng và thanh tiến độ.",
    demo: {
      narration: "Chạy thử dashboard: sidebar tối bên trái, bốn thẻ KPI phía trên, bảng bài tập và thanh tiến độ bên dưới. Thu nhỏ màn hình, sidebar thu gọn và các thẻ KPI xếp dọc.",
      actions: [
        { t: 1.0, type: "scroll", value: 0.35 },
        mobile,
        resizeBack
      ]
    }
  }
];

export const slugByNum = Object.fromEntries(plan.map(p => [p.num, p.slug]));
