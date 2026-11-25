window.BTL_DATA = {
  id: "codeskill",
  code: "BTL-21",
  name: "CodeSkill",
  monogram: "{ }",
  subject: "Lập trình cơ bản",
  level: "Đại học",
  group: "Công nghệ thông tin",
  accent: "#0f172a",
  accent2: "#16a34a",
  font: "mono",
  tagline: "Chạy từng dòng, soi từng biến và sửa lỗi bằng bằng chứng từ bộ test.",
  intro: "CodeSkill biến việc học lập trình thành một phiên gỡ lỗi có kiểm soát: viết code trong trình soạn thảo tô màu, nộp bài để chạy bộ test và xem biến đổi giá trị của từng biến. Sinh viên thấy chính xác dòng nào sai thay vì đoán mò.",
  hero: { title: "Lập trình cơ bản", highlight: "thấy biến đổi sau mỗi dòng" },
  heroBadge: "Trace từng bước · Bộ test tự động · Gợi ý sửa lỗi",
  labShort: "TRACE",
  labTag: "PHÒNG LAB",
  practiceTag: "BỘ TEST",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài lập trình" },
    { value: "12", label: "Thẻ cú pháp" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho người mới học lập trình: đọc code có màu, chạy test theo từng ca và trace biến bằng tay.",
  pathLead: "Đi từ biến và biểu thức, sang rẽ nhánh, vòng lặp, rồi hàm và mảng. Mỗi chương đều có bài trace để nhìn thấy chương trình chạy thế nào trước khi tự viết.",
  features: [
    { badge: "01", title: "Trình soạn thảo tô màu", desc: "Từ khóa, chuỗi, số và chú thích được tô màu riêng, kèm số dòng để đọc cấu trúc code rõ hơn." },
    { badge: "02", title: "Bộ test đạt và không đạt", desc: "Mỗi ca test hiện đầu vào, kết quả mong đợi và kết quả thực tế, giúp khoanh vùng lỗi thay vì sửa mò." },
    { badge: "03", title: "Trace biến từng bước", desc: "Bấm chạy từng bước để thấy dòng đang thực thi và giá trị biến thay đổi, rèn tư duy gỡ lỗi." }
  ],
  modules: [
    {
      title: "Biến, kiểu dữ liệu và biểu thức",
      summary: "Khai báo biến đúng, hiểu kiểu dữ liệu và viết biểu thức không sai thứ tự.",
      lessons: [
        {
          id: "b1",
          title: "Biến và quy tắc đặt tên",
          minutes: 14,
          level: "Cơ bản",
          summary: "Khai báo, gán lại giá trị và đặt tên biến đọc lên là hiểu ngay.",
          points: [
            "Tên biến bắt đầu bằng chữ cái hoặc gạch dưới, không chứa dấu cách.",
            "Biến nhiều từ nên viết camelCase, ví dụ diemTrungBinh.",
            "let cho phép gán lại, const thì không."
          ],
          steps: [
            { title: "Khai báo và gán", body: "Câu lệnh let diemToan = 8.5 tạo một ô nhớ tên diemToan và cất giá trị 8.5 vào đó. Từ dòng tiếp theo, mọi phép tính dùng diemToan đều lấy giá trị này, không cần gõ lại số.", tip: "Đọc câu lệnh theo mẫu: tạo biến, rồi bỏ giá trị vào biến." },
            { title: "Đặt tên có nghĩa", body: "So sánh hai cách viết: let a = 8.5; let b = 7.0; với let diemToan = 8.5; let diemVan = 7.0. Cách thứ hai tự giải thích nghĩa, còn cách đầu buộc người đọc phải đoán hoặc mở chú thích.", tip: "Nếu phải viết chú thích để giải thích tên biến, hãy đổi tên biến." },
            { title: "Phạm vi khối", body: "Biến khai báo bằng let bên trong cặp ngoặc nhọn chỉ tồn tại trong khối đó. Ra khỏi khối, biến không còn tồn tại và chương trình báo lỗi ReferenceError nếu cố truy cập.", tip: "Khai báo biến ở phạm vi hẹp nhất có thể để tránh ghi đè ngoài ý muốn." }
          ],
          formula: "let diemTrungBinh = (diemToan + diemVan) / 2;"
        },
        {
          id: "b2",
          title: "Kiểu số, chuỗi và luận lý",
          minutes: 16,
          level: "Cơ bản",
          summary: "Phân biệt Number, String, Boolean và cách chúng xuất hiện trong biểu thức.",
          points: [
            "Number gồm số nguyên và số thực, chia cho 0 cho Infinity chứ không báo lỗi.",
            "String nối bằng dấu cộng hoặc nội suy trong template literal.",
            "Boolean chỉ có true và false, thường sinh ra từ phép so sánh."
          ],
          steps: [
            { title: "Ba kiểu dữ liệu gặp đầu tiên", body: "8.5 là Number, \"8.5\" là String, true là Boolean. Hai giá trị đầu trông giống nhau khi in ra nhưng khác kiểu, nên phép cộng 8.5 + 1 cho 9.5 còn \"8.5\" + 1 cho chuỗi \"8.51\".", tip: "Dùng typeof để kiểm tra kiểu khi kết quả trông lạ." },
            { title: "Nối chuỗi", body: "Câu lệnh \"Điểm: \" + diemToan tạo ra chuỗi Điểm: 8.5. Nếu cộng chuỗi với số, JavaScript chuyển số thành chuỗi rồi nối, nên cần đặt phép tính số trong ngoặc trước khi nối.", tip: "Tính toán xong rồi mới nối chuỗi để tránh kết quả kiểu 5 + 3 thành 53." },
            { title: "Giá trị luận lý", body: "Phép so sánh 8.5 >= 5 trả về true, còn 8.5 < 5 trả về false. Giá trị này dùng trực tiếp trong if hoặc lưu vào biến deuDat để quyết định bước tiếp theo của chương trình.", tip: "Đặt tên biến luận lý bắt đầu bằng is, has hoặc deu để dễ đọc." }
          ],
          formula: "\"Tổng: \" + (2 + 3)"
        },
        {
          id: "b3",
          title: "Toán tử và độ ưu tiên",
          minutes: 18,
          level: "Trung bình",
          summary: "Đọc đúng thứ tự thực hiện phép tính và chọn toán tử so sánh an toàn.",
          points: [
            "Nhân chia trước, cộng trừ sau; ngoặc đổi hoàn toàn thứ tự.",
            "Phần dư % dùng để kiểm tra chẵn lẻ hoặc chia hết.",
            "Nên dùng === thay vì == vì === so sánh cả kiểu dữ liệu."
          ],
          steps: [
            { title: "Thứ tự thực hiện", body: "Biểu thức 2 + 3 * 4 cho 14 vì phép nhân chạy trước. Muốn cộng trước thì viết (2 + 3) * 4 và nhận 20; đây là lỗi rất hay gặp khi tính điểm trung bình có trọng số.", tip: "Đặt ngoặc cho mọi nhóm phép tính quan trọng, kể cả khi không bắt buộc." },
            { title: "Phần dư và chia hết", body: "7 % 2 cho 1 nên 7 là số lẻ, còn 8 % 2 cho 0 nên 8 là số chẵn. Trong vòng lặp, biểu thức i % 2 === 0 là cách chuẩn để chỉ xử lý các phần tử ở vị trí chẵn.", tip: "Nhớ rằng % không phải phần trăm, nó là số dư của phép chia." },
            { title: "So sánh lỏng và chặt", body: "\"5\" == 5 trả về true vì JavaScript tự đổi kiểu, còn \"5\" === 5 trả về false vì khác kiểu. Dùng === giúp phát hiện sớm lỗi khi dữ liệu nhập vào từ ô nhập liệu luôn là chuỗi.", tip: "Bật chế độ kiểm tra nghiêm ngặt của trình soạn thảo để cảnh báo khi dùng ==." }
          ],
          formula: "2 + 3 * 4 = 14, còn (2 + 3) * 4 = 20"
        }
      ]
    },
    {
      title: "Điều khiển luồng",
      summary: "Rẽ nhánh theo điều kiện, lặp có kiểm soát và thoát vòng lặp đúng lúc.",
      lessons: [
        {
          id: "c1",
          title: "Rẽ nhánh với if, else if, else",
          minutes: 18,
          level: "Cơ bản",
          summary: "Viết chuỗi điều kiện loại trừ nhau và tránh nhánh không bao giờ chạy.",
          points: [
            "Chỉ nhánh đầu tiên có điều kiện đúng được thực thi.",
            "Thứ tự điều kiện quyết định kết quả khi các miền chồng lấn.",
            "Luôn có nhánh else để xử lý trường hợp còn lại."
          ],
          steps: [
            { title: "Một điều kiện, hai lối đi", body: "if (diem >= 5) { ketQua = \"Đạt\"; } else { ketQua = \"Chưa đạt\"; } chỉ chọn đúng một trong hai nhánh. Điều kiện viết trong ngoặc tròn, thân nhánh viết trong ngoặc nhọn.", tip: "Đọc câu lệnh thành lời trước khi viết để xác định đúng điều kiện." },
            { title: "Nhiều mức xếp loại", body: "Với ba mức Giỏi, Khá, Trung bình, kiểm tra từ cao xuống: if (diem >= 8) rồi else if (diem >= 6.5). Nếu đảo thứ tự, sinh viên 9 điểm sẽ rơi vào nhánh Khá và không bao giờ tới nhánh Giỏi.", tip: "Sắp điều kiện theo thứ tự loại trừ, từ hẹp đến rộng." },
            { title: "Điều kiện phức hợp", body: "Toán tử && yêu cầu cả hai vế đúng, || chỉ cần một vế đúng. Ví dụ diem >= 8 && chuyenCan >= 0.8 chỉ xét Giỏi khi điểm cao và chuyên cần đủ, tránh trường hợp học giỏi nhưng vắng quá nhiều.", tip: "Dùng ngoặc khi trộn && với || để người đọc không phải nhớ độ ưu tiên." }
          ],
          formula: "if (diem >= 8 && chuyenCan >= 0.8) { xepLoai = \"Giỏi\"; }"
        },
        {
          id: "c2",
          title: "Vòng lặp for và while",
          minutes: 20,
          level: "Trung bình",
          summary: "Chọn đúng loại vòng lặp và kiểm soát điều kiện dừng để không lặp vô hạn.",
          points: [
            "for phù hợp khi biết trước số lần lặp.",
            "while phù hợp khi số lần lặp phụ thuộc điều kiện dữ liệu.",
            "Điều kiện dừng phải thay đổi sau mỗi lần lặp."
          ],
          steps: [
            { title: "Ba phần của vòng for", body: "for (let i = 1; i <= 5; i++) gồm khởi tạo i = 1, điều kiện i <= 5 và bước tăng i++. Vòng chạy đúng 5 lần với i nhận các giá trị 1, 2, 3, 4, 5 rồi dừng khi i thành 6.", tip: "Đọc vòng for theo mẫu: bắt đầu từ đâu, còn đúng khi nào, mỗi lần tăng bao nhiêu." },
            { title: "while và điều kiện dừng", body: "let n = 27; while (n !== 1) { n = n % 2 === 0 ? n / 2 : 3 * n + 1; } lặp đến khi n về 1. Nếu quên cập nhật n bên trong vòng, điều kiện mãi đúng và chương trình treo.", tip: "Viết điều kiện dừng trước khi viết thân vòng lặp." },
            { title: "Chọn loại vòng lặp", body: "Duyệt mảng có độ dài biết trước thì dùng for với i từ 0 đến length - 1. Đọc dữ liệu đến khi gặp giá trị kết thúc thì dùng while vì không biết trước số lần đọc.", tip: "Không có loại vòng lặp nào tốt hơn tuyệt đối, chỉ có loại khớp với bài toán." }
          ],
          formula: "for (let i = 0; i < arr.length; i++) { tong += arr[i]; }"
        },
        {
          id: "c3",
          title: "break, continue và vòng lặp lồng",
          minutes: 22,
          level: "Trung bình",
          summary: "Thoát sớm, bỏ qua một lần lặp và đọc đúng phạm vi của vòng lặp lồng.",
          points: [
            "break thoát khỏi vòng lặp gần nhất ngay lập tức.",
            "continue bỏ phần còn lại của lần lặp hiện tại rồi sang lần kế.",
            "Vòng lặp lồng có độ phức tạp nhân lên theo số lần của từng vòng."
          ],
          steps: [
            { title: "Thoát khi đã tìm thấy", body: "Trong vòng tìm sinh viên có mã SV03, khi gặp đúng mã thì gán vị trí và bấm break. Không có break, vòng vẫn chạy tiếp vô ích và có thể ghi đè kết quả bằng lần xuất hiện sau.", tip: "Đặt break ngay sau khi đã có kết quả cần tìm." },
            { title: "Bỏ qua phần tử không hợp lệ", body: "Khi tính điểm trung bình, nếu gặp điểm âm thì continue để bỏ qua dòng đó thay vì cộng vào tổng. Khác với break, continue chỉ bỏ một lần lặp và vòng vẫn chạy tiếp các phần tử sau.", tip: "Dùng continue khi điều kiện loại trừ xuất hiện ngay đầu thân vòng." },
            { title: "Đọc vòng lặp lồng", body: "Hai vòng lồng nhau với i chạy 1 đến 3 và j chạy 1 đến 2 sẽ thực hiện 6 lần thân vòng. Số lần của vòng trong nhân với số lần của vòng ngoài, nên vòng lồng ba cấp rất dễ làm chương trình chậm.", tip: "Vẽ bảng i, j ra giấy cho ba lần đầu để thấy thứ tự chạy." }
          ],
          formula: "for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) dem++;"
        }
      ]
    },
    {
      title: "Hàm, mảng và gỡ lỗi",
      summary: "Đóng gói logic thành hàm, xử lý mảng và đọc lỗi có phương pháp.",
      lessons: [
        {
          id: "f1",
          title: "Hàm, tham số và giá trị trả về",
          minutes: 20,
          level: "Trung bình",
          summary: "Tách logic lặp lại thành hàm và trả kết quả về nơi gọi.",
          points: [
            "Hàm nhận tham số đầu vào và trả về kết quả bằng return.",
            "return kết thúc hàm ngay, các dòng sau không chạy.",
            "Không có return, hàm trả về undefined."
          ],
          steps: [
            { title: "Khai báo hàm", body: "function tinhTrungBinh(diemToan, diemVan) { return (diemToan + diemVan) / 2; } nhận hai tham số và trả về một số. Gọi tinhTrungBinh(8, 6) cho 7, gọi lại với cặp điểm khác mà không phải viết lại công thức.", tip: "Đặt tên hàm bắt đầu bằng động từ để nói rõ việc hàm làm." },
            { title: "Tham số và đối số", body: "diemToan, diemVan trong khai báo là tham số, còn 8 và 6 khi gọi là đối số. Nếu truyền thiếu đối số, tham số còn lại nhận undefined và phép tính cho NaN thay vì báo lỗi rõ ràng.", tip: "Kiểm tra số lượng đối số khi kết quả ra NaN." },
            { title: "Giá trị trả về", body: "Nếu hàm chỉ console.log mà không return, biến nhận kết quả sẽ là undefined. Dòng return vừa trả giá trị vừa kết thúc hàm, nên đặt nó ở cuối nhánh xử lý đã hoàn tất.", tip: "Viết hàm trả về dữ liệu, để nơi gọi tự quyết định in hay lưu." }
          ],
          formula: "function tinhTrungBinh(a, b) { return (a + b) / 2; }"
        },
        {
          id: "f2",
          title: "Mảng và duyệt mảng",
          minutes: 22,
          level: "Trung bình",
          summary: "Truy cập phần tử theo chỉ số, duyệt mảng và tránh lỗi ngoài phạm vi.",
          points: [
            "Chỉ số mảng bắt đầu từ 0 nên phần tử cuối có chỉ số length - 1.",
            "Truy cập ngoài phạm vi trả về undefined chứ không báo lỗi.",
            "Có thể duyệt bằng for cổ điển hoặc forEach, tùy nhu cầu."
          ],
          steps: [
            { title: "Tạo và truy cập", body: "let diem = [8.5, 7.0, 9.1]; thì diem[0] là 8.5 và diem[2] là 9.1. Mảng có length bằng 3, nên chỉ số hợp lệ là 0, 1, 2; truy cập diem[3] cho undefined và dễ gây lỗi khi tính toán.", tip: "Nhớ quy tắc: phần tử thứ n có chỉ số n - 1." },
            { title: "Duyệt và tích lũy", body: "Khởi tạo tong = 0 rồi cộng dồn từng phần tử trong vòng for sẽ cho tổng điểm, chia cho length để được trung bình. Đây là khuôn mẫu tích lũy dùng cho tổng, đếm, tìm giá trị lớn nhất.", tip: "Khởi tạo biến tích lũy trước vòng lặp, không khởi tạo bên trong." },
            { title: "Thêm và xóa phần tử", body: "push thêm vào cuối mảng, pop lấy ra phần tử cuối, splice xóa tại vị trí bất kỳ. Sau mỗi thao tác, length thay đổi nên vòng lặp đang duyệt có thể bỏ sót phần tử nếu vừa duyệt vừa xóa.", tip: "Muốn xóa nhiều phần tử, duyệt từ cuối mảng về đầu để chỉ số không bị lệch." }
          ],
          formula: "let tong = 0; for (let i = 0; i < diem.length; i++) tong += diem[i];"
        },
        {
          id: "f3",
          title: "Đọc thông báo lỗi và trace tay",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt lỗi cú pháp với lỗi logic và tìm lỗi bằng bảng trace.",
          points: [
            "Lỗi cú pháp làm chương trình không chạy được, trình biên dịch chỉ đúng dòng.",
            "Lỗi logic chương trình vẫn chạy nhưng cho kết quả sai.",
            "Bảng trace ghi lại giá trị biến sau mỗi dòng để khoanh vùng lỗi."
          ],
          steps: [
            { title: "Đọc lỗi cú pháp", body: "Thông báo SyntaxError: Unexpected token cho biết có ký tự thừa hoặc thiếu, kèm số dòng và số cột. Đọc từ dòng được báo trước, vì đôi khi lỗi thật nằm ở dòng ngay trước đó do thiếu dấu đóng ngoặc.", tip: "Đếm số ngoặc mở và ngoặc đóng khi thông báo lỗi ở cuối tệp." },
            { title: "Nhận diện lỗi logic", body: "Chương trình chạy trơn nhưng điểm trung bình ra 0 vì chia cho biến đếm chưa tăng. Lỗi logic không có thông báo, chỉ phát hiện khi so kết quả với ví dụ tính tay hoặc với bộ test.", tip: "Chuẩn bị một ví dụ nhỏ tính tay trước khi chạy để có mốc so sánh." },
            { title: "Lập bảng trace", body: "Kẻ bảng gồm cột dòng, biến và kết quả, rồi điền từng bước như máy thực thi. Với vòng lặp ba lần, bảng chỉ có vài dòng nhưng chỉ ra ngay lần lặp nào biến nhận sai giá trị.", tip: "Dừng trace ngay tại dòng đầu tiên có giá trị khác với kỳ vọng." }
          ],
          formula: "Kiểm tra bằng một ví dụ nhỏ tính tay trước khi chạy bộ test"
        }
      ]
    }
  ],
  flashcards: [
    { front: "let và const", back: "let khai báo biến có thể gán lại, const khai báo hằng không gán lại được.", hint: "const là hằng số.", example: "const PI = 3.14; let diem = 8;" },
    { front: "Kiểu Number", back: "Kiểu số của JavaScript, gồm số nguyên và số thực, chia cho 0 cho Infinity.", hint: "Một kiểu chung cho mọi con số.", example: "8.5 + 1 cho 9.5." },
    { front: "Kiểu String", back: "Chuỗi ký tự đặt trong dấu nháy đơn, nháy kép hoặc dấu huyền.", hint: "Dữ liệu văn bản.", example: "\"8.5\" + 1 cho chuỗi \"8.51\"." },
    { front: "Kiểu Boolean", back: "Chỉ nhận true hoặc false, thường sinh ra từ phép so sánh.", hint: "Đúng hoặc sai.", example: "8.5 >= 5 trả về true." },
    { front: "Toán tử === ", back: "So sánh bằng chặt, đúng khi cả giá trị và kiểu dữ liệu giống nhau.", hint: "Ba dấu bằng, không tự đổi kiểu.", example: "\"5\" === 5 trả về false." },
    { front: "Toán tử %", back: "Chia lấy phần dư, dùng để kiểm tra chẵn lẻ hoặc chia hết.", hint: "Không phải phần trăm.", example: "7 % 2 bằng 1 nên 7 là số lẻ." },
    { front: "Vòng lặp for", back: "Lặp với ba phần khởi tạo, điều kiện và bước tăng, phù hợp khi biết số lần lặp.", hint: "Ba phần trong ngoặc tròn.", example: "for (let i = 1; i <= 3; i++) tong += i;" },
    { front: "break", back: "Thoát khỏi vòng lặp gần nhất ngay tại dòng gọi.", hint: "Dừng hẳn vòng lặp.", example: "Tìm thấy mã cần tìm thì break để không duyệt tiếp." },
    { front: "continue", back: "Bỏ qua phần còn lại của lần lặp hiện tại và sang lần lặp kế tiếp.", hint: "Chỉ bỏ một lần, không thoát vòng.", example: "Gặp điểm âm thì continue để không cộng vào tổng." },
    { front: "return trong hàm", back: "Trả giá trị về nơi gọi và kết thúc hàm ngay lập tức.", hint: "Vừa trả kết quả vừa dừng hàm.", example: "Hàm không có return sẽ trả về undefined." },
    { front: "Chỉ số mảng", back: "Mảng đánh chỉ số từ 0, phần tử cuối có chỉ số length - 1.", hint: "Bắt đầu từ số 0.", example: "arr = [5, 7, 9] thì arr[0] là 5." },
    { front: "Lỗi cú pháp và lỗi logic", back: "Lỗi cú pháp làm chương trình không chạy, lỗi logic vẫn chạy nhưng cho kết quả sai.", hint: "Một loại chặn chạy, một loại chạy sai.", example: "Thiếu dấu ngoặc là lỗi cú pháp; chia cho n thay vì n - 1 là lỗi logic." }
  ],
  quiz: [
    { q: "Sau câu lệnh let x = 7 % 2; giá trị của x là bao nhiêu?", options: ["0", "1", "2", "3"], answer: 1, explain: "7 chia 2 được 3 dư 1, toán tử % trả về phần dư nên x bằng 1." },
    { q: "So sánh \"5\" == 5 và \"5\" === 5 cho kết quả thế nào?", options: ["true và true", "false và true", "false và false", "true và false"], answer: 3, explain: "== tự đổi kiểu nên trả true, === so sánh cả kiểu nên chuỗi khác số và trả false." },
    { q: "Đoạn code let s = 0; for (let i = 1; i <= 3; i++) s += i; cho s bằng bao nhiêu?", options: ["3", "5", "6", "10"], answer: 2, explain: "Vòng lặp cộng dồn 1 + 2 + 3 nên s bằng 6." },
    { q: "Cách viết nào lấy đúng phần tử đầu tiên của mảng arr?", options: ["arr[0]", "arr[1]", "arr.first", "arr(0)"], answer: 0, explain: "Mảng đánh chỉ số từ 0 nên phần tử đầu tiên nằm ở arr[0]." },
    { q: "Lệnh break trong vòng lặp có tác dụng gì?", options: ["Bỏ qua lần lặp hiện tại", "Thoát khỏi vòng lặp ngay", "Kết thúc toàn bộ chương trình", "Đặt lại biến đếm về 0"], answer: 1, explain: "break thoát khỏi vòng lặp gần nhất, khác với continue chỉ bỏ một lần lặp." },
    { q: "Lệnh continue trong vòng lặp có tác dụng gì?", options: ["Thoát khỏi vòng lặp", "Kết thúc hàm đang gọi", "Bỏ qua phần còn lại của lần lặp hiện tại", "Tăng biến đếm thêm 2"], answer: 2, explain: "continue nhảy sang lần lặp kế tiếp, bỏ phần thân còn lại của lần hiện tại." },
    { q: "Một hàm không có câu lệnh return sẽ trả về giá trị gì?", options: ["0", "null", "false", "undefined"], answer: 3, explain: "JavaScript mặc định trả về undefined khi hàm không chỉ rõ giá trị trả về." },
    { q: "Trường hợp nào là lỗi logic chứ không phải lỗi cú pháp?", options: ["Tính trung bình chia cho n thay vì n - 1", "Thiếu dấu chấm phẩy", "Sai tên biến chưa khai báo", "Thiếu dấu ngoặc đóng"], answer: 0, explain: "Chương trình vẫn chạy nhưng kết quả sai, đó là lỗi logic; ba trường hợp còn lại chặn chạy." },
    { q: "Vòng lặp đơn chạy n lần có độ phức tạp thời gian là gì?", options: ["O(1)", "O(n²)", "O(log n)", "O(n)"], answer: 3, explain: "Số phép toán tỉ lệ tuyến tính với n nên độ phức tạp là O(n)." },
    { q: "Với a = 3, b = 5 và đoạn code hoán đổi dùng biến tạm, console.log in ra gì?", options: ["3-5", "5-5", "5-3", "3-3"], answer: 2, explain: "Biến tạm giữ 3, a nhận 5, b nhận lại 3 nên kết quả là 5-3; nếu quên biến tạm sẽ ra 5-5." }
  ],
  lab: {
    kind: "code",
    title: "Trace phép hoán đổi hai biến",
    lead: "Sáu dòng code hoán đổi giá trị của a và b bằng biến tạm. Bấm Tiếp để đi qua từng dòng và quan sát biến đổi giá trị của ba biến.",
    stageLabel: "Trace từng dòng",
    controlNote: "Theo dõi dòng đang chạy và bảng biến bên dưới; chú ý thời điểm a bị ghi đè.",
    note: "Bỏ biến tạm đi sẽ thấy lỗi kinh điển: a = b rồi b = a cho kết quả 5-5 vì giá trị 3 đã bị mất.",
    lines: [
      "let a = 3;",
      "let b = 5;",
      "let tam = a;",
      "a = b;",
      "b = tam;",
      "console.log(a + \"-\" + b);"
    ],
    steps: [
      { line: 1, vars: { a: "3" }, output: "" },
      { line: 2, vars: { a: "3", b: "5" }, output: "" },
      { line: 3, vars: { a: "3", b: "5", tam: "3" }, output: "Lưu tạm giá trị của a trước khi ghi đè." },
      { line: 4, vars: { a: "5", b: "5", tam: "3" }, output: "a nhận giá trị của b, giá trị 3 chỉ còn trong tam." },
      { line: 5, vars: { a: "5", b: "3", tam: "3" }, output: "b nhận lại giá trị tạm, hoán đổi hoàn tất." },
      { line: 6, vars: { a: "5", b: "3", tam: "3" }, output: "5-3" }
    ],
    tests: [
      { input: "a = 3, b = 5", pass: true },
      { input: "a = 7, b = 2", pass: true },
      { input: "a = -1, b = 4", pass: true }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Đức Anh", progress: 88, score: 8.8, status: "Tốt", note: "Trace chính xác, cần luyện thêm bài mảng hai chiều." },
      { name: "Trần Thị Ngọc", progress: 61, score: 7.3, status: "Đang học", note: "Hay nhầm continue với break trong vòng lặp." },
      { name: "Lê Minh Tuấn", progress: 94, score: 9.3, status: "Tốt", note: "Có thể làm bài nâng cao về độ phức tạp." },
      { name: "Phạm Gia Hân", progress: 31, score: 5.6, status: "Cần hỗ trợ", note: "Chưa vượt qua bài kiểm tra phạm vi biến." },
      { name: "Vũ Quang Huy", progress: 72, score: 7.9, status: "Đang học", note: "Tiến bộ rõ ở chương vòng lặp." },
      { name: "Đỗ Thanh Vy", progress: 49, score: 6.5, status: "Đang học", note: "Cần ôn lại chỉ số mảng bắt đầu từ 0." }
    ],
    submissions: [
      { student: "Nguyễn Đức Anh", lesson: "Bài tập: tính trung bình mảng điểm", time: "Hôm qua 22:05", status: "Chờ chấm" },
      { student: "Phạm Gia Hân", lesson: "Phiếu trace vòng lặp for", time: "Hôm qua 20:18", status: "Chờ chấm" },
      { student: "Lê Minh Tuấn", lesson: "Bài tập: hoán đổi hai biến", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Ba học chương hàm, mang theo laptop đã cài Node.js để chạy bài tại lớp.",
      "Bài kiểm tra giữa kỳ gồm 60% trắc nghiệm trace code và 40% viết hàm.",
      "Sinh viên có bài nộp bị lỗi cú pháp xem lại mục Đọc thông báo lỗi trước buổi sau."
    ]
  },
  className: "Lập trình cơ bản – K24",
  brief: "BTL-21_codeskill-mon-lap-trinh.md"
};
