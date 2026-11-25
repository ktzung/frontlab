window.BTL_DATA = {
  id: "tinhocportal",
  code: "BTL-20",
  name: "TinHocPortal",
  monogram: "PC",
  subject: "Tin học đại cương",
  level: "Đại học",
  group: "Công nghệ thông tin",
  accent: "#2563eb",
  accent2: "#64748b",
  font: "rounded",
  tagline: "Thao tác văn phòng được mổ xẻ từng bước, từ menu Word đến công thức Excel.",
  intro: "TinHocPortal đưa bài thực hành Word, Excel, PowerPoint lên trình duyệt với mô phỏng menu và phím tắt theo từng bước. Sinh viên tự luyện mọi lúc, còn giảng viên theo dõi được bạn nào còn kẹt ở bước chèn bảng hay trộn thư.",
  hero: { title: "Tin học văn phòng", highlight: "thao tác đúng ngay lần đầu" },
  heroBadge: "Mô phỏng menu · Phím tắt · Trắc nghiệm",
  labShort: "QUY TRÌNH",
  labTag: "PHÒNG LAB",
  practiceTag: "TRẮC NGHIỆM",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài thực hành" },
    { value: "12", label: "Thẻ thao tác" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành riêng cho kỹ năng văn phòng: bấm đúng menu, nhớ đúng phím tắt và tự kiểm tra bằng câu hỏi tình huống.",
  pathLead: "Đi từ quản lý tệp trong hệ điều hành, sang soạn thảo Word, rồi bảng tính và trình chiếu. Mỗi chương kết thúc bằng một quy trình thao tác hoàn chỉnh để tự làm lại.",
  features: [
    { badge: "01", title: "Mô phỏng menu từng bước", desc: "Khung Word và Excel thu nhỏ làm sáng đúng thẻ ribbon cần bấm, kèm mô tả kết quả mong đợi sau mỗi bước." },
    { badge: "02", title: "Hoạt ảnh phím tắt", desc: "Mỗi thao tác quen thuộc đi kèm tổ hợp phím, ví dụ Ctrl + Shift + N để tạo thư mục mới trong File Explorer." },
    { badge: "03", title: "Trắc nghiệm theo chương", desc: "Câu hỏi tình huống về phím tắt, công thức và quy trình, chấm ngay và giải thích lỗi thường gặp của người mới." }
  ],
  life: [
    {
      title: "Cặp sách lộn xộn trước giờ vào lớp",
      scene: "Sáng thứ hai, cả nhóm đứng trước cổng trường lục cặp tìm bài tập nhóm vừa in, giấy tờ nhét lẫn giữa sách và hóa đơn. Có bạn mất mười phút, có bạn mở đúng ngăn ngay vì đã chia túi theo môn và dán nhãn từng ngăn.",
      connect: "Chia ngăn theo môn rồi đặt tên chính là cây thư mục có đường dẫn rõ ràng; chụp lại tờ giấy quan trọng gửi vào điện thoại là bản sao thứ hai, tinh thần của quy tắc sao lưu 3-2-1."
    },
    {
      title: "Bốn mươi thư mời họp phụ huynh",
      scene: "Cô chủ nhiệm in bốn mươi thư mời họp phụ huynh, mỗi thư chỉ khác tên phụ huynh và tên học sinh. In xong mới phát hiện một thư ghi sai tên, cả xấp phải in lại vì sửa tay từng tờ rất dễ sót.",
      connect: "Trộn thư trong Word làm đúng việc đó: một mẫu thư, một bảng dữ liệu có dòng tiêu đề, mỗi dòng sinh ra một bản riêng thay vì sửa và in thủ công."
    },
    {
      title: "Chia tiền ăn trưa của nhóm sáu người",
      scene: "Nhóm sáu người ăn trưa, một bạn ứng tiền, tối về ngồi chia lại. Mỗi người gọi món giá khác nhau, có bạn ăn thêm bát cơm, nên cả nhóm mở bảng tính ghi từng dòng tên và số tiền.",
      connect: "Mỗi dòng là một người, giá bát cơm để ở một ô chung và được khóa bằng địa chỉ tuyệt đối để kéo công thức xuống không lệch; SUMIF cộng nhanh theo nhóm món."
    }
  ],
  modules: [
    {
      title: "Hệ điều hành và quản lý tệp",
      summary: "Làm chủ File Explorer, phím tắt, sao lưu và dọn dẹp dung lượng máy.",
      lessons: [
        {
          id: "hd1",
          title: "Cấu trúc thư mục và đường dẫn",
          minutes: 16,
          level: "Cơ bản",
          summary: "Đọc đúng đường dẫn tuyệt đối, tương đối và tổ chức cây thư mục học tập.",
          points: [
            "Đường dẫn tuyệt đối bắt đầu từ tên ổ đĩa và đi dần vào trong.",
            "Tên tệp không được chứa các ký tự : * ? \" < > |.",
            "Cây thư mục nên chia theo môn học và theo tuần để dễ tìm lại."
          ],
          steps: [
            { title: "Đọc một đường dẫn", body: "Đường dẫn D:\\HocTap\\TinHoc\\Tuan01\\baitap.docx cho biết ổ D, thư mục HocTap, thư mục con TinHoc, thư mục Tuan01 và tệp baitap.docx. Mỗi dấu gạch chéo ngược là một bậc đi xuống trong cây thư mục.", tip: "Đọc từ trái sang phải để biết mình đang đứng ở nhánh nào." },
            { title: "Tuyệt đối và tương đối", body: "Đường dẫn tuyệt đối luôn bắt đầu từ gốc ổ đĩa nên dùng được ở mọi vị trí. Đường dẫn tương đối tính từ thư mục hiện hành, ví dụ ..\\Tuan02\\baitap.docx nghĩa là lùi một cấp rồi vào thư mục Tuan02.", tip: "Dùng hai dấu chấm để lùi một cấp, một dấu chấm để chỉ thư mục hiện hành." },
            { title: "Quy tắc đặt tên", body: "Windows cấm các ký tự : * ? \" < > | trong tên tệp và không phân biệt chữ hoa với chữ thường. Một tên như TinHoc_Tuan01_BaiTap.docx vừa đủ nghĩa vừa xếp đúng thứ tự khi sắp xếp theo tên.", tip: "Đặt tên theo mẫu Mon_Tuan_LoaiBai để không phải mở tệp ra kiểm tra." }
          ],
          formula: "D:\\HocTap\\TinHoc\\Tuan01\\baitap.docx"
        },
        {
          id: "hd2",
          title: "Phím tắt và quản lý cửa sổ",
          minutes: 14,
          level: "Cơ bản",
          summary: "Dùng phím tắt để mở, chuyển, đổi tên và tìm tệp nhanh hơn rê chuột.",
          points: [
            "Win + E mở File Explorer, Alt + Tab chuyển giữa các cửa sổ.",
            "F2 đổi tên, Ctrl + Shift + N tạo thư mục mới.",
            "Win + phím mũi tên ghim cửa sổ sang nửa trái hoặc nửa phải màn hình."
          ],
          steps: [
            { title: "Nhóm phím điều hướng", body: "Win + E mở nhanh File Explorer, Win + D thu nhỏ mọi cửa sổ để về màn hình nền, Alt + Tab chuyển qua lại giữa hai ứng dụng đang mở. Đây là ba tổ hợp dùng nhiều nhất trong một buổi thực hành.", tip: "Giữ Alt rồi bấm Tab nhiều lần để chọn đúng cửa sổ trước khi thả tay." },
            { title: "Nhóm phím thao tác tệp", body: "Ctrl + C, Ctrl + X, Ctrl + V cho sao chép, cắt và dán; Ctrl + Z hoàn tác thao tác vừa rồi. Delete đưa tệp vào Thùng rác còn Shift + Delete xóa vĩnh viễn, nên cân nhắc trước khi dùng.", tip: "Sau khi xóa nhầm, mở Recycle Bin và chọn Restore thay vì làm lại từ đầu." },
            { title: "Tìm kiếm và sắp xếp", body: "Gõ từ khóa vào ô tìm kiếm của File Explorer, có thể lọc theo đuôi tệp bằng *.pdf hoặc *.docx. Sắp xếp theo Ngày sửa đổi giúp tìm lại bài nộp gần nhất trong thư mục có hàng trăm tệp.", tip: "Kết hợp từ khóa và đuôi tệp, ví dụ bao cao *.docx, để thu hẹp kết quả." }
          ],
          formula: "Win + E mở File Explorer; Ctrl + Shift + N tạo thư mục mới"
        },
        {
          id: "hd3",
          title: "Sao lưu và dọn dẹp ổ đĩa",
          minutes: 18,
          level: "Trung bình",
          summary: "Lập thói quen sao lưu hai bản và giải phóng dung lượng mà không xóa nhầm.",
          points: [
            "Quy tắc 3-2-1: ba bản sao, hai loại thiết bị, một bản ngoài máy.",
            "Dùng Disk Cleanup xóa tệp tạm thay vì xóa thư mục hệ thống.",
            "Kiểm tra dung lượng theo từng thư mục trong Storage Settings."
          ],
          steps: [
            { title: "Xác định dữ liệu cần bảo vệ", body: "Bài tập, đồ án và tài liệu học là nhóm cần sao lưu trước, còn tệp cài đặt có thể tải lại. Liệt kê ba thư mục quan trọng nhất và đặt chúng vào một thư mục gốc chung để sao lưu một lần.", tip: "Đặt tất cả tài liệu học trong một thư mục gốc tên HocTap để khỏi bỏ sót." },
            { title: "Tạo bản sao thứ hai và thứ ba", body: "Bản thứ hai có thể là ổ ngoài hoặc ổ đĩa mạng, bản thứ ba là dịch vụ lưu trữ đám mây. Ba bản sao nằm ở hai loại thiết bị khác nhau và một bản ngoài nơi làm việc giúp chống mất do hỏng máy hoặc trộm cắp.", tip: "Đặt lịch nhắc sao lưu mỗi tối thứ Sáu ngay sau buổi thực hành." },
            { title: "Dọn dẹp an toàn", body: "Mở Settings, vào System rồi Storage để xem nhóm nào chiếm nhiều dung lượng nhất. Disk Cleanup xóa tệp tạm, bản cập nhật cũ và Thùng rác; không xóa thư mục Windows hay Program Files vì sẽ làm hỏng hệ thống.", tip: "Dọn Thùng rác sau khi đã kiểm tra lại các tệp vừa xóa." }
          ],
          formula: "3 bản sao - 2 loại thiết bị - 1 bản ngoài nơi làm việc"
        }
      ]
    },
    {
      title: "Soạn thảo văn bản với Word",
      summary: "Định dạng đúng chuẩn, dựng bảng biểu và tự động hóa mục lục, trộn thư.",
      lessons: [
        {
          id: "wd1",
          title: "Định dạng ký tự và đoạn",
          minutes: 18,
          level: "Cơ bản",
          summary: "Phân biệt định dạng ký tự với định dạng đoạn và dùng style thay vì chỉnh tay.",
          points: [
            "Định dạng ký tự gồm font, cỡ chữ, đậm nghiêng; định dạng đoạn gồm căn lề, giãn dòng.",
            "Dùng style Heading thay vì tự tăng cỡ chữ cho tiêu đề.",
            "Ctrl + Shift + C sao chép định dạng, Ctrl + Shift + V dán định dạng."
          ],
          steps: [
            { title: "Chọn đúng phạm vi", body: "Muốn đổi font cho cả đoạn thì bấm ba lần vào đoạn hoặc kéo chọn, không cần chọn từng dòng. Nếu chỉ đặt con trỏ trong đoạn, Word vẫn áp dụng định dạng đoạn cho toàn bộ đoạn đó.", tip: "Bật ký hiệu định dạng bằng Ctrl + Shift + 8 để thấy dấu xuống dòng và dấu cách." },
            { title: "Thiết lập đoạn chuẩn", body: "Với bài tiểu luận, đặt cỡ 13, giãn dòng 1.5, khoảng cách trước đoạn 6pt và lề trái 3cm. Các thông số này nên đặt trong style Normal để mọi đoạn mới tự động đúng chuẩn.", tip: "Sửa style gốc một lần thay vì sửa hàng trăm đoạn bằng tay." },
            { title: "Sao chép định dạng", body: "Chọn đoạn mẫu, bấm Ctrl + Shift + C, chọn đoạn đích rồi bấm Ctrl + Shift + V. Format Painter cho kết quả tương tự nhưng chỉ dùng được một lần, còn tổ hợp phím lặp lại nhanh hơn khi có nhiều đoạn.", tip: "Bấm đúp Format Painter để dán định dạng cho nhiều đoạn liên tiếp." }
          ],
          formula: "Ctrl + Shift + C sao chép định dạng, Ctrl + Shift + V dán định dạng"
        },
        {
          id: "wd2",
          title: "Bảng biểu và tab dừng",
          minutes: 20,
          level: "Trung bình",
          summary: "Dựng bảng đúng số cột, căn số liệu bằng tab và lặp dòng tiêu đề khi in.",
          points: [
            "Tạo bảng bằng Insert > Table với số cột, số dòng xác định trước.",
            "Cột số liệu nên dùng tab dừng căn phải thay vì gõ dấu cách.",
            "Chỉ gộp ô cho dòng tiêu đề, không lạm dụng để tránh bảng méo khi sửa."
          ],
          steps: [
            { title: "Chèn và chia cột", body: "Vào Insert > Table, chọn 4 cột 8 dòng cho bảng điểm gồm STT, Họ tên, Điểm, Xếp loại. Kéo đường viền cột để đặt độ rộng, sau đó chọn Layout > AutoFit để Word tự cân lại nội dung.", tip: "Đặt con trỏ ở dòng cuối và bấm Tab để thêm dòng mới mà vẫn giữ định dạng." },
            { title: "Căn số liệu bằng tab", body: "Trong đoạn văn không dùng bảng, bấm vào thước để đặt tab dừng căn phải tại vị trí 12cm. Khi gõ tên rồi bấm Tab, con số sẽ thẳng cột thay vì lệch do dấu cách có độ rộng khác nhau.", tip: "Bấm đúp vào thước để mở hộp thoại Tabs và thêm tab có dấu chấm dẫn." },
            { title: "Lặp tiêu đề khi in", body: "Chọn dòng tiêu đề của bảng, vào Layout > Repeat Header Rows. Khi bảng sang trang mới, dòng tiêu đề tự lặp lại, giúp người đọc không phải quay lại trang trước để nhớ tên cột.", tip: "Kiểm tra bằng Print Preview trước khi nộp bài để chắc chắn tiêu đề đã lặp." }
          ],
          formula: "Layout > Repeat Header Rows khi bảng sang trang"
        },
        {
          id: "wd3",
          title: "Trộn thư và mục lục tự động",
          minutes: 24,
          level: "Nâng cao",
          summary: "Tạo mục lục từ style Heading và trộn một mẫu thư cho nhiều sinh viên.",
          points: [
            "Mail Merge cần nguồn dữ liệu có dòng tiêu đề ở dòng đầu.",
            "Mục lục tự động chỉ hoạt động khi tiêu đề dùng style Heading.",
            "Cập nhật mục lục bằng F9 sau khi sửa tiêu đề hoặc số trang."
          ],
          steps: [
            { title: "Chuẩn hóa tiêu đề", body: "Đặt tiêu đề chương bằng style Heading 1, mục nhỏ bằng Heading 2. Word ghi nhớ cấp bậc này để dựng mục lục, còn khi tự tăng cỡ chữ thì mục lục sẽ trống hoặc thiếu mục.", tip: "Bật Navigation Pane để thấy cấu trúc tiêu đề và phát hiện mục bị bỏ cấp." },
            { title: "Chèn mục lục", body: "Đặt con trỏ ở trang mục lục, vào References > Table of Contents và chọn mẫu có 3 cấp. Mục lục hiển thị số trang thực tế, có thể bấm giữ Ctrl rồi nhấn vào dòng để nhảy tới đúng mục.", tip: "Trang mục lục nên đặt trong một section riêng để đánh số trang bằng số La Mã." },
            { title: "Trộn thư", body: "Soạn mẫu thư, kết nối tệp Excel có cột HoTen và Lop, chèn trường trộn tại vị trí cần điền. Khi bấm Finish & Merge, Word tạo ra một bản cho mỗi dòng dữ liệu thay vì phải sửa và in thủ công từng bản.", tip: "Luôn xem trước bản ghi đầu, giữa và cuối trước khi xuất tệp." }
          ],
          formula: "References > Table of Contents > Update Table (F9)"
        }
      ]
    },
    {
      title: "Bảng tính và trình chiếu",
      summary: "Công thức Excel, hàm điều kiện, biểu đồ và thiết kế slide nhất quán.",
      lessons: [
        {
          id: "ex1",
          title: "Địa chỉ ô và công thức cơ bản",
          minutes: 18,
          level: "Cơ bản",
          summary: "Viết công thức đầu tiên, phân biệt địa chỉ tương đối và tuyệt đối.",
          points: [
            "Mọi công thức bắt đầu bằng dấu bằng và tham chiếu tới địa chỉ ô.",
            "B2 là địa chỉ tương đối, $B$2 là tuyệt đối và không đổi khi sao chép.",
            "Lỗi #DIV/0! xuất hiện khi chia cho ô trống hoặc bằng 0."
          ],
          steps: [
            { title: "Viết công thức đầu tiên", body: "Gõ =B2*C2 vào ô D2 để tính thành tiền từ số lượng và đơn giá. Bấm Enter, sau đó kéo núm vuông ở góc dưới bên phải ô D2 xuống để sao chép công thức cho các dòng còn lại.", tip: "Bấm F2 để xem công thức ngay trong ô thay vì nhìn thanh công thức." },
            { title: "Khóa ô bằng dấu đô la", body: "Nếu tỉ lệ thuế nằm ở ô C1 và cần dùng cho mọi dòng, viết =B2*$C$1. Khi sao chép xuống dòng 3, công thức thành =B3*$C$1, nhờ vậy vẫn trỏ đúng ô thuế thay vì trượt xuống C2.", tip: "Bấm F4 ngay sau khi chọn ô trong công thức để chuyển nhanh giữa bốn kiểu tham chiếu." },
            { title: "Đọc và sửa lỗi", body: "Ô hiện ### khi cột quá hẹp, chỉ cần kéo rộng cột. Lỗi #DIV/0! là chia cho 0, còn #VALUE! là đang tính toán trên ô chứa chữ; bấm vào ô lỗi để xem gợi ý sửa của Excel.", tip: "Dùng IFERROR để thay thông báo lỗi bằng một giá trị dễ đọc." }
          ],
          formula: "=B2*$C$1"
        },
        {
          id: "ex2",
          title: "Hàm IF, SUMIF và biểu đồ",
          minutes: 22,
          level: "Trung bình",
          summary: "Xếp loại bằng IF, cộng theo điều kiện bằng SUMIF và chọn đúng loại biểu đồ.",
          points: [
            "IF trả về một trong hai giá trị; lồng quá ba cấp nên chuyển sang IFS.",
            "SUMIF cộng theo một điều kiện, SUMIFS xử lý nhiều điều kiện cùng lúc.",
            "Biểu đồ cột dùng để so sánh, biểu đồ đường dùng để xem xu hướng."
          ],
          steps: [
            { title: "Xếp loại bằng IF", body: "Công thức =IF(D2>=8, \"Giỏi\", IF(D2>=6.5, \"Khá\", \"Trung bình\")) kiểm tra từ mức cao xuống. Thứ tự kiểm tra rất quan trọng: nếu xét điều kiện thấp trước, mọi điểm cao sẽ bị xếp nhầm vào nhóm thấp.", tip: "Viết điều kiện từ cao xuống thấp để không phải dùng đến dấu >= hai lần." },
            { title: "Cộng theo điều kiện", body: "=SUMIF($B$2:$B$40, \"CNTT1\", $D$2:$D$40) cộng điểm của sinh viên lớp CNTT1. Ba vùng phải có cùng số dòng; nếu lệch, Excel báo #VALUE! hoặc trả kết quả sai lệch khó phát hiện.", tip: "Đặt tên vùng dữ liệu để công thức đọc thành SUMIF(Lop, \"CNTT1\", Diem)." },
            { title: "Chọn biểu đồ phù hợp", body: "Biểu đồ cột so sánh điểm giữa các lớp, biểu đồ đường thể hiện điểm trung bình qua từng tuần, biểu đồ tròn chỉ nên dùng khi có ít hơn năm nhóm. Chọn vùng dữ liệu kèm dòng tiêu đề trước khi bấm Insert > Chart.", tip: "Xóa đường lưới và chú thích thừa để biểu đồ tập trung vào số liệu chính." }
          ],
          formula: "=SUMIF($B$2:$B$40, \"CNTT1\", $D$2:$D$40)"
        },
        {
          id: "ex3",
          title: "Thiết kế slide và hiệu ứng chuyển",
          minutes: 20,
          level: "Trung bình",
          summary: "Dựng bộ slide nhất quán bằng Slide Master và dùng hiệu ứng có chủ đích.",
          points: [
            "Mỗi slide một ý chính, tối đa sáu dòng chữ và cỡ chữ tối thiểu 20.",
            "Slide Master giữ font, màu và logo đồng bộ trên toàn bộ bài.",
            "Hiệu ứng chuyển nên nhẹ và cùng kiểu, tránh hiệu ứng nhấp nháy."
          ],
          steps: [
            { title: "Lên dàn ý trước khi trang trí", body: "Viết dàn ý gồm mở đầu, ba luận điểm và kết luận, mỗi luận điểm một slide. Dàn ý giúp không nhồi chữ và giữ được mạch trình bày khi thời gian bị rút ngắn.", tip: "Mỗi slide chỉ nên trả lời một câu hỏi của người nghe." },
            { title: "Đồng bộ bằng Slide Master", body: "Vào View > Slide Master, đặt font tiêu đề, font nội dung, màu nhấn và logo ở slide trên cùng. Mọi slide phía dưới kế thừa thiết lập này, nhờ vậy chỉnh một lần là toàn bài thay đổi.", tip: "Đặt số trang và tên bài ở chân slide để người xem dễ theo dõi." },
            { title: "Chuyển động có mục đích", body: "Dùng hiệu ứng Fade cho phần lớn slide và Morph khi cần nhấn vào sự thay đổi của sơ đồ. Tránh mỗi slide một kiểu chuyển vì sẽ làm người xem mất tập trung vào nội dung.", tip: "Chạy thử ở chế độ Slide Show từ đầu đến cuối trước khi thuyết trình." }
          ],
          formula: "View > Slide Master để sửa toàn bộ bố cục"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Ctrl + Z", back: "Hoàn tác thao tác gần nhất trong hầu hết ứng dụng Windows.", hint: "Z tượng trưng cho việc đi ngược lại.", example: "Lỡ xóa một đoạn văn, bấm Ctrl + Z để lấy lại." },
    { front: "F2", back: "Đổi tên tệp hoặc thư mục đang được chọn trong File Explorer.", hint: "Phím chức năng hàng trên, cạnh F1.", example: "Chọn tệp baitap.docx, bấm F2, gõ TinHoc_Tuan01.docx." },
    { front: "Ctrl + Shift + N", back: "Tạo thư mục mới ngay trong thư mục đang mở.", hint: "N là new.", example: "Trong ổ D, bấm Ctrl + Shift + N để tạo thư mục Tuan02." },
    { front: "Địa chỉ tuyệt đối", back: "Địa chỉ có dấu đô la ở cả cột và dòng, ví dụ $B$2, không đổi khi sao chép công thức.", hint: "Dấu đô la khóa cả cột lẫn dòng.", example: "=B2*$C$1 giữ nguyên ô thuế khi kéo công thức xuống." },
    { front: "Hàm SUM", back: "Cộng các giá trị số trong một vùng, viết dạng =SUM(B2:B10).", hint: "Tên hàm đúng nghĩa tổng.", example: "=SUM(D2:D40) tính tổng điểm của cả lớp." },
    { front: "Hàm IF", back: "Trả về một trong hai giá trị tùy điều kiện đúng hay sai.", hint: "Nếu đúng thì một giá trị, nếu sai thì giá trị khác.", example: "=IF(D2>=5, \"Đạt\", \"Chưa đạt\")." },
    { front: "Hàm VLOOKUP", back: "Dò giá trị ở cột đầu tiên của vùng và trả về giá trị ở cột thứ k; tham số cuối nên là FALSE để khớp chính xác.", hint: "Nhìn sang phải theo bảng dò.", example: "=VLOOKUP(A2, $F$2:$G$20, 2, FALSE) lấy tên lớp từ mã lớp." },
    { front: "Mail Merge", back: "Trộn một mẫu văn bản với nguồn dữ liệu để sinh nhiều bản riêng biệt.", hint: "Một mẫu, nhiều người nhận.", example: "Trộn thư mời cho 120 sinh viên từ tệp Excel." },
    { front: "Ngắt phần", back: "Chia văn bản thành các phần độc lập về lề, hướng giấy và cách đánh số trang.", hint: "Section, không phải Page Break.", example: "Đặt mục lục ở section riêng để đánh số La Mã." },
    { front: "Mục lục tự động", back: "Danh mục sinh từ các tiêu đề dùng style Heading, cập nhật bằng F9.", hint: "Phụ thuộc vào style, không phải cỡ chữ.", example: "Sửa tiêu đề chương rồi bấm F9 để mục lục cập nhật số trang." },
    { front: "Slide Master", back: "Khuôn mẫu định nghĩa font, màu, logo và bố cục chung cho toàn bộ slide.", hint: "Sửa một lần, áp dụng mọi slide.", example: "Đổi font tiêu đề trong Slide Master, cả 20 slide đổi theo." },
    { front: "Quy tắc sao lưu 3-2-1", back: "Giữ ba bản sao dữ liệu, trên hai loại thiết bị, với một bản ở ngoài nơi làm việc.", hint: "Ba con số ứng với ba yêu cầu.", example: "Máy cá nhân, ổ ngoài và Google Drive là ba bản của đồ án." }
  ],
  quiz: [
    { q: "Tổ hợp phím nào tạo thư mục mới trong File Explorer?", options: ["Ctrl + N", "Ctrl + Shift + N", "Alt + N", "Win + N"], answer: 1, explain: "Ctrl + Shift + N tạo thư mục mới ngay tại vị trí đang mở; Ctrl + N thường mở cửa sổ mới." },
    { q: "Khi sao chép công thức chứa $B$2 sang ô khác, địa chỉ này thay đổi thế nào?", options: ["Thành B3 theo dòng mới", "Thành C2 theo cột mới", "Giữ nguyên $B$2", "Báo lỗi #REF!"], answer: 2, explain: "Dấu đô la khóa cả cột và dòng nên $B$2 luôn trỏ về đúng ô ban đầu." },
    { q: "Công thức nào tính tổng vùng B2:B10 đúng cú pháp?", options: ["=SUM(B2:B10)", "SUM(B2:B10)", "=TOTAL(B2:B10)", "=ADD(B2:B10)"], answer: 0, explain: "Công thức phải bắt đầu bằng dấu bằng và dùng đúng tên hàm SUM." },
    { q: "Muốn dòng tiêu đề bảng lặp lại ở mỗi trang khi in, chọn lệnh nào?", options: ["Insert > Header", "Design > Borders", "View > Freeze Panes", "Layout > Repeat Header Rows"], answer: 3, explain: "Repeat Header Rows nằm trong thẻ Layout của công cụ Table, chỉ áp dụng cho dòng tiêu đề." },
    { q: "Mục lục tự động không cập nhật đúng thường vì lý do gì?", options: ["Chưa bấm Print", "Tiêu đề không dùng style Heading", "Thiếu ảnh minh họa", "Tệp đang ở chế độ đọc"], answer: 1, explain: "Mục lục lấy nguồn từ style Heading; tiêu đề chỉ được tăng cỡ chữ sẽ không được nhận diện." },
    { q: "Trước khi trộn thư, nguồn dữ liệu cần có gì?", options: ["Dòng tiêu đề ở dòng đầu", "Máy in đã kết nối", "Ảnh nền cho trang", "Bảng nội dung tự động"], answer: 0, explain: "Word dùng dòng tiêu đề để ánh xạ tên trường trộn như HoTen, Lop, Diem." },
    { q: "Ký tự nào Windows không cho phép trong tên tệp?", options: ["Dấu gạch dưới", "Dấu chấm", "Dấu hỏi chấm", "Dấu gạch nối"], answer: 2, explain: "Các ký tự : * ? \" < > | bị cấm vì dùng cho cú pháp đường dẫn và tìm kiếm." },
    { q: "Hàm IF trả về kết quả gì?", options: ["Một con số duy nhất", "Tổng của cả vùng dữ liệu", "Vị trí của ô trong bảng", "Một trong hai giá trị theo điều kiện"], answer: 3, explain: "IF kiểm tra điều kiện rồi chọn giá trị đúng hoặc sai, có thể lồng thêm IF khác." },
    { q: "Biểu đồ nào phù hợp nhất để thể hiện xu hướng điểm theo từng tuần?", options: ["Biểu đồ cột", "Biểu đồ tròn", "Biểu đồ đường", "Biểu đồ vùng"], answer: 2, explain: "Biểu đồ đường thể hiện thay đổi liên tục theo thời gian rõ hơn cột hoặc tròn." },
    { q: "Quy tắc sao lưu 3-2-1 được hiểu là gì?", options: ["3 bản sao, 2 loại thiết bị, 1 bản ngoài máy", "3 thư mục, 2 ổ đĩa, 1 tệp nén", "3 ngày, 2 tuần, 1 tháng", "3 người, 2 máy, 1 mật khẩu"], answer: 0, explain: "Ba bản sao giúp chống mất dữ liệu, hai loại thiết bị và một bản ngoài nơi làm việc phòng hỏng máy hoặc trộm cắp." }
  ],
  lab: {
    kind: "stepper",
    title: "Trộn thư mời sinh viên bằng Mail Merge",
    lead: "Đi qua sáu bước của quy trình trộn thư: chuẩn bị dữ liệu, soạn mẫu, kết nối nguồn, chèn trường, xem trước và xuất tệp. Mỗi bước nêu đúng lệnh cần bấm trong Word.",
    stageLabel: "Quy trình từng bước",
    controlNote: "Bấm Tiếp để đi theo đúng thứ tự thao tác, bấm Trước để xem lại bước vừa làm.",
    note: "Quy trình này dùng lại được cho thư mời, phiếu điểm và giấy chứng nhận nếu nguồn dữ liệu có dòng tiêu đề rõ ràng.",
    steps: [
      { title: "Bước 1: Chuẩn bị nguồn dữ liệu", short: "Nguồn dữ liệu", body: "Tạo bảng Excel gồm các cột HoTen, Lop, Diem, mỗi dòng ứng với một sinh viên. Dòng đầu tiên phải là tiêu đề và vùng dữ liệu không được có ô trống xen giữa.", tip: "Lưu tệp .xlsx cùng thư mục với mẫu thư để lần sau dễ tìm lại." },
      { title: "Bước 2: Soạn mẫu thư trong Word", short: "Mẫu thư", body: "Gõ phần cố định như lời chào, nội dung mời và chữ ký, để trống những chỗ sẽ điền tên, lớp và điểm. Căn lề, chọn font và giãn dòng trước khi trộn để tránh phải sửa lại nhiều bản.", tip: "Đặt mẫu thư trên một trang duy nhất để dễ kiểm tra bố cục." },
      { title: "Bước 3: Kết nối nguồn dữ liệu", short: "Kết nối nguồn", body: "Vào Mailings > Start Mail Merge > Letters, sau đó chọn Select Recipients > Use an Existing List và mở tệp Excel. Nếu hộp thoại hiện nhiều sheet, chọn đúng sheet chứa bảng dữ liệu.", tip: "Đánh dấu ô My table has headers để Word nhận đúng tên trường." },
      { title: "Bước 4: Chèn trường trộn", short: "Chèn trường", body: "Đặt con trỏ tại vị trí cần điền, bấm Insert Merge Field rồi chọn HoTen, Lop, Diem. Word hiển thị trường dưới dạng <<HoTen>> và sẽ thay bằng dữ liệu thật khi trộn.", tip: "Không gõ tay tên trường, luôn chèn từ danh sách để tránh sai chính tả." },
      { title: "Bước 5: Xem trước từng bản", short: "Xem trước", body: "Bấm Preview Results rồi dùng mũi tên chuyển giữa các bản ghi. Kiểm tra dấu cách quanh tên, cách hiển thị điểm 8.5 và việc tên dài có làm tràn dòng hay không.", tip: "Kiểm tra ít nhất bản ghi đầu, giữa và cuối trước khi xuất." },
      { title: "Bước 6: Hoàn tất và xuất tệp", short: "Xuất tệp", body: "Chọn Finish & Merge > Edit Individual Documents để tạo tệp tổng hợp gồm tất cả bản, hoặc Print Documents để in trực tiếp. Lưu bản tổng hợp thành PDF để gửi qua email.", tip: "Giữ lại tệp mẫu và tệp Excel để lần sau chỉ cần cập nhật dữ liệu." }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Thị Mai", progress: 84, score: 8.6, status: "Tốt", note: "Thành thạo Mail Merge, cần luyện thêm hàm mảng." },
      { name: "Trần Văn Hùng", progress: 58, score: 7.1, status: "Đang học", note: "Hay quên khóa ô tuyệt đối khi sao chép công thức." },
      { name: "Lê Thu Trang", progress: 92, score: 9.0, status: "Tốt", note: "Slide trình bày gọn, có thể hỗ trợ nhóm về Slide Master." },
      { name: "Phạm Quốc Bảo", progress: 26, score: 5.4, status: "Cần hỗ trợ", note: "Chưa hoàn thành bài định dạng đoạn văn bản." },
      { name: "Vũ Hoài An", progress: 67, score: 7.6, status: "Đang học", note: "Tiến bộ đều, cần thêm bài tập bảng biểu." },
      { name: "Đỗ Minh Khoa", progress: 44, score: 6.2, status: "Đang học", note: "Nhầm giữa định dạng ký tự và định dạng đoạn." }
    ],
    submissions: [
      { student: "Nguyễn Thị Mai", lesson: "Bài thực hành: trộn thư mời 40 sinh viên", time: "Hôm qua 20:35", status: "Chờ chấm" },
      { student: "Phạm Quốc Bảo", lesson: "Phiếu định dạng văn bản Word", time: "Hôm qua 18:12", status: "Chờ chấm" },
      { student: "Lê Thu Trang", lesson: "Bài Excel: bảng điểm và biểu đồ", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm thực hành trộn thư, mang theo laptop đã cài Microsoft Office.",
      "Bài kiểm tra giữa kỳ gồm 20 câu trắc nghiệm phím tắt và một bài Excel 30 phút.",
      "Sinh viên chưa đạt 40% tiến độ liên hệ lớp trưởng để nhận tài liệu ôn tập."
    ]
  },
  className: "Tin học đại cương – K24",
  brief: "BTL-20_tinhocportal-mon-tin-hoc-dai-cuong.md"
};
