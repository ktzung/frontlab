window.BTL_DATA = {
  id: "datalesson",
  code: "BTL-22",
  name: "DataLesson",
  monogram: "DB",
  subject: "Cơ sở dữ liệu",
  level: "Đại học",
  group: "Công nghệ thông tin",
  accent: "#1d4ed8",
  accent2: "#0891b2",
  font: "display",
  tagline: "Từ câu SELECT đầu tiên đến lược đồ 3NF, mọi bước đều có dữ liệu để thử.",
  intro: "DataLesson đưa mô hình quan hệ, SQL và chuẩn hóa lên một môi trường có dữ liệu mẫu chạy được ngay trên trình duyệt. Sinh viên viết truy vấn, xem bảng kết quả và đọc giải thích từng mệnh đề thay vì học thuộc cú pháp.",
  hero: { title: "Cơ sở dữ liệu", highlight: "truy vấn chạy trên dữ liệu thật" },
  heroBadge: "SQL playground · ER diagram · Chuẩn hóa",
  labShort: "SQL",
  labTag: "PHÒNG LAB",
  practiceTag: "TRUY VẤN",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho môn CSDL: chạy SQL trên dữ liệu mẫu, kéo thả ER và tách quan hệ từng bước.",
  pathLead: "Đi từ thực thể và khóa, sang SQL, rồi phụ thuộc hàm và chuẩn hóa. Phòng lab dùng bốn bảng sinh viên, môn học, đăng ký và điểm để mọi truy vấn đều có kết quả cụ thể.",
  features: [
    { badge: "01", title: "SQL playground", desc: "Chọn một truy vấn mẫu để chạy trên bộ dữ liệu bốn bảng, xem ngay bảng kết quả và giải thích vì sao dùng mệnh đề đó." },
    { badge: "02", title: "ER diagram kéo thả", desc: "Kéo thực thể lên canvas, nối quan hệ và chọn tỉ số 1-n hay n-m để thấy lược đồ hình thành từ phát biểu nghiệp vụ." },
    { badge: "03", title: "Chuẩn hóa từng bước", desc: "Tách quan hệ từ 1NF lên 3NF và BCNF theo từng bước, tô rõ thuộc tính gây phụ thuộc bộ phận hoặc bắc cầu." }
  ],
  life: [
    {
      title: "Sổ ghi nợ của quán tạp hóa",
      scene: "Quán tạp hóa đầu ngõ giữ một cuốn sổ, mỗi dòng ghi tên người mua, món đã lấy và số tiền còn nợ. Trong xóm có hai người cùng tên Lan, cuối tháng chủ quán không biết dòng nào của ai để đòi.",
      connect: "Tên chưa đủ mạnh để làm khóa, nên mô hình quan hệ tách người mua và hóa đơn thành hai thực thể, nối với nhau bằng khóa ngoại theo quan hệ một nhiều."
    },
    {
      title: "Bảng điểm dán ở hành lang",
      scene: "Bảng điểm học kỳ dán ở hành lang, mỗi sinh viên chỉ tìm dòng có tên mình rồi đọc ba cột điểm. Muốn biết lớp trưởng của lớp đó thì phải chạy sang bảng danh sách lớp đặt ở cuối dãy.",
      connect: "Tìm dòng là mệnh đề WHERE, đọc vài cột là SELECT, còn nối hai bảng rời nhau theo mã lớp chính là JOIN, ở đây là khóa ngoại giữa hai danh sách."
    },
    {
      title: "Danh sách đi chợ ghi lặp địa chỉ",
      scene: "Mẹ ghi danh sách đi chợ lên tờ giấy nháp, dòng nào cũng viết kèm địa chỉ sạp và tên cô bán hàng. Hôm chợ dời sang bên kia đường, mẹ phải sửa từng dòng, sửa sót một dòng là đi nhầm chỗ.",
      connect: "Thông tin lặp ở nhiều dòng gây bất thường khi cập nhật, đúng lý do cần chuẩn hóa: tách địa chỉ sạp thành bảng riêng, mỗi dòng chỉ giữ khóa tham chiếu để lên 3NF."
    }
  ],
  modules: [
    {
      title: "Mô hình dữ liệu quan hệ",
      summary: "Nhận diện thực thể, khóa và tỉ số bản số trước khi viết câu truy vấn đầu tiên.",
      lessons: [
        {
          id: "er1",
          title: "Thực thể, thuộc tính và khóa",
          minutes: 18,
          level: "Cơ bản",
          summary: "Tách thực thể khỏi thuộc tính và chọn khóa đủ mạnh để định danh.",
          points: [
            "Thực thể là đối tượng cần quản lý, thuộc tính là thông tin mô tả nó.",
            "Khóa chính phải duy nhất và không thay đổi theo thời gian.",
            "Mã sinh viên tốt hơn họ tên vì họ tên có thể trùng."
          ],
          steps: [
            { title: "Tìm thực thể", body: "Trong phát biểu quản lý điểm, các danh từ Sinh viên, Môn học, Lớp là thực thể vì mỗi đối tượng có bộ thuộc tính riêng và tồn tại độc lập. Điểm số không phải thực thể mà là thuộc tính của lần đăng ký học.", tip: "Đọc đề bài và gạch chân mọi danh từ, sau đó loại những từ chỉ là thuộc tính." },
            { title: "Chọn khóa", body: "Sinh viên có thể dùng mã SV01, SV02 làm khóa vì mỗi mã gắn với đúng một người. Họ tên không đủ tin cậy vì hai sinh viên có thể trùng tên, còn số điện thoại có thể đổi khi sinh viên thay sim.", tip: "Ưu tiên mã do hệ thống sinh, không dùng thông tin có thể thay đổi." },
            { title: "Thuộc tính đa trị", body: "Nếu một sinh viên có nhiều số điện thoại, không nên nhồi cả ba số vào một ô vì sẽ vi phạm 1NF. Cách đúng là tách thành bảng Số điện thoại với khóa ngoại trỏ về sinh viên.", tip: "Gặp ô chứa dấu phẩy ngăn cách nhiều giá trị là dấu hiệu cần tách bảng." }
          ],
          formula: "SINH_VIEN(ma_sv, ho_ten, lop) với ma_sv là khóa chính"
        },
        {
          id: "er2",
          title: "Quan hệ và tỉ số bản số",
          minutes: 20,
          level: "Cơ bản",
          summary: "Đọc đúng 1-1, 1-n và n-m, biết khi nào cần bảng trung gian.",
          points: [
            "1-n đặt khóa ngoại ở phía nhiều, ví dụ nhiều sinh viên thuộc một lớp.",
            "n-m bắt buộc có bảng trung gian chứa hai khóa ngoại.",
            "Tỉ số bản số sai dẫn tới thiếu bảng hoặc thừa cột."
          ],
          steps: [
            { title: "Đọc câu nghiệp vụ", body: "Câu một lớp có nhiều sinh viên, mỗi sinh viên chỉ thuộc một lớp cho tỉ số 1-n. Khóa ngoại ma_lop đặt trong bảng Sinh viên vì mỗi sinh viên chỉ cần trỏ tới đúng một lớp.", tip: "Hỏi ngược lại: một lớp có nhiều sinh viên không, một sinh viên có nhiều lớp không." },
            { title: "Quan hệ n-m", body: "Một sinh viên đăng ký nhiều môn và một môn có nhiều sinh viên, nên phải tạo bảng DangKy(ma_sv, ma_mh, hoc_ky). Bảng này vừa là trung gian vừa có thể mang thuộc tính riêng như học kỳ hay điểm.", tip: "Nếu quan hệ có thuộc tính riêng thì đó là dấu hiệu chắc chắn phải thành bảng." },
            { title: "Kiểm tra bằng dữ liệu mẫu", body: "Thử điền ba dòng dữ liệu cho lược đồ vừa vẽ. Nếu một ô buộc phải chứa nhiều giá trị hoặc nhiều dòng lặp lại thông tin môn học, lược đồ đang thiếu bảng trung gian.", tip: "Vẽ thử dữ liệu trước khi viết câu lệnh tạo bảng." }
          ],
          formula: "DANG_KY(ma_sv, ma_mh, hoc_ky) với khóa chính ghép (ma_sv, ma_mh, hoc_ky)"
        },
        {
          id: "er3",
          title: "Chuyển ER thành lược đồ quan hệ",
          minutes: 24,
          level: "Trung bình",
          summary: "Áp bốn quy tắc chuyển đổi để có bảng, khóa và khóa ngoại hoàn chỉnh.",
          points: [
            "Mỗi thực thể mạnh thành một bảng, thuộc tính thành cột.",
            "Thực thể yếu nhận khóa của thực thể chủ làm một phần khóa chính.",
            "Quan hệ 1-n chuyển thành khóa ngoại ở bảng phía nhiều."
          ],
          steps: [
            { title: "Chuyển thực thể mạnh", body: "Thực thể Sinh viên với các thuộc tính ma_sv, ho_ten, ngay_sinh thành bảng SINH_VIEN(ma_sv, ho_ten, ngay_sinh). Kiểu dữ liệu chọn theo miền giá trị: mã là CHAR, ngày là DATE, điểm là DECIMAL.", tip: "Đặt tên cột thống nhất, không lúc viết MaSV lúc viết ma_sinh_vien." },
            { title: "Chuyển quan hệ", body: "Quan hệ 1-n Lớp chứa Sinh viên thêm cột ma_lop vào bảng SINH_VIEN và đặt khóa ngoại tham chiếu LOP(ma_lop). Quan hệ n-m thì tạo bảng mới với khóa chính ghép từ hai khóa ngoại.", tip: "Vẽ mũi tên khóa ngoại từ bảng con sang bảng cha để kiểm tra chiều." },
            { title: "Rà lại toàn lược đồ", body: "Sau khi chuyển, kiểm tra ba việc: mọi bảng có khóa chính, mọi khóa ngoại trỏ đúng bảng cha và không còn cột lặp nhóm. Lược đồ đạt các điều kiện này mới đưa sang bước chuẩn hóa.", tip: "Đọc lại từng câu nghiệp vụ và chỉ ra bảng nào lưu nó." }
          ],
          formula: "SINH_VIEN(ma_sv, ho_ten, ma_lop) với ma_lop tham chiếu LOP(ma_lop)"
        }
      ]
    },
    {
      title: "Ngôn ngữ SQL",
      summary: "Viết truy vấn từ SELECT cơ bản đến JOIN và tổng hợp theo nhóm.",
      lessons: [
        {
          id: "sq1",
          title: "SELECT và mệnh đề WHERE",
          minutes: 18,
          level: "Cơ bản",
          summary: "Chọn cột, lọc dòng và sắp xếp kết quả bằng ba mệnh đề đầu tiên.",
          points: [
            "SELECT liệt kê cột, FROM chọn bảng, WHERE lọc dòng.",
            "Chuỗi so sánh đặt trong dấu nháy đơn, số thì không.",
            "ORDER BY sắp xếp tăng dần, thêm DESC để giảm dần."
          ],
          steps: [
            { title: "Chọn cột cần xem", body: "Câu SELECT ma_sv, ho_ten FROM sinh_vien chỉ trả về hai cột thay vì toàn bộ bảng. Viết tên cột rõ ràng giúp kết quả dễ đọc và tránh tải thừa dữ liệu khi bảng có hàng chục cột.", tip: "Trong bài thi, viết đúng danh sách cột thường được điểm trình bày." },
            { title: "Lọc theo điều kiện", body: "WHERE lop = 'CNTT1' chỉ giữ các dòng thuộc lớp CNTT1. Với số thì viết WHERE diem >= 8, với chuỗi phải dùng dấu nháy đơn; dùng dấu nháy kép có thể bị hiểu là tên cột tùy hệ quản trị.", tip: "Kiểm tra số dòng trả về để biết điều kiện có quá rộng hay không." },
            { title: "Sắp xếp kết quả", body: "ORDER BY ho_ten xếp theo bảng chữ cái, ORDER BY diem DESC xếp điểm từ cao xuống. Có thể sắp nhiều cột, ví dụ ORDER BY lop, diem DESC để trong mỗi lớp điểm cao đứng trước.", tip: "Luôn thêm ORDER BY khi kết quả cần trình bày theo thứ tự ổn định." }
          ],
          formula: "SELECT ma_sv, ho_ten FROM sinh_vien WHERE lop = 'CNTT1' ORDER BY ho_ten;"
        },
        {
          id: "sq2",
          title: "Kết bảng bằng JOIN",
          minutes: 24,
          level: "Trung bình",
          summary: "Nối bảng theo khóa ngoại và phân biệt INNER JOIN với LEFT JOIN.",
          points: [
            "JOIN cần điều kiện ON nối khóa chính với khóa ngoại.",
            "INNER JOIN chỉ giữ dòng khớp ở cả hai bảng.",
            "LEFT JOIN giữ toàn bộ bảng trái, dòng không khớp nhận NULL."
          ],
          steps: [
            { title: "Xác định đường nối", body: "Muốn xem tên sinh viên cùng tên môn, phải đi qua bảng DangKy vì bảng này chứa cả ma_sv và ma_mh. Chuỗi nối là sinh_vien - dang_ky - mon_hoc, mỗi chặng dùng một điều kiện ON.", tip: "Vẽ các bảng ra giấy và nối theo khóa ngoại trước khi viết câu lệnh." },
            { title: "INNER JOIN", body: "FROM sinh_vien sv JOIN dang_ky dk ON sv.ma_sv = dk.ma_sv chỉ trả về sinh viên đã có đăng ký. Sinh viên chưa đăng ký môn nào sẽ biến mất khỏi kết quả, đây là điểm khác biệt quan trọng so với LEFT JOIN.", tip: "Đặt bí danh ngắn cho bảng để câu lệnh dễ đọc và tránh trùng tên cột." },
            { title: "LEFT JOIN và NULL", body: "LEFT JOIN giữ mọi sinh viên, ai chưa đăng ký thì cột ma_mh nhận NULL. Thêm WHERE dk.ma_dk IS NULL sẽ tìm đúng nhóm sinh viên chưa đăng ký môn nào, một mẫu truy vấn rất hay dùng.", tip: "Không dùng = NULL, SQL yêu cầu IS NULL để kiểm tra giá trị rỗng." }
          ],
          formula: "FROM sinh_vien sv JOIN dang_ky dk ON sv.ma_sv = dk.ma_sv"
        },
        {
          id: "sq3",
          title: "GROUP BY, HAVING và hàm tổng hợp",
          minutes: 26,
          level: "Nâng cao",
          summary: "Gộp nhóm để tính trung bình, đếm và lọc nhóm bằng HAVING.",
          points: [
            "GROUP BY gộp các dòng có cùng giá trị thành một nhóm.",
            "Mọi cột trong SELECT phải nằm trong GROUP BY hoặc trong hàm tổng hợp.",
            "WHERE lọc dòng trước khi gộp, HAVING lọc nhóm sau khi gộp."
          ],
          steps: [
            { title: "Chọn khóa gộp", body: "Muốn tính điểm trung bình từng môn, gộp theo ma_mh hoặc ten_mh và dùng AVG(diem). Kết quả có đúng một dòng cho mỗi môn thay vì một dòng cho mỗi lần đăng ký.", tip: "Gộp theo cột nào thì cột đó xuất hiện trong SELECT để biết dòng thuộc nhóm nào." },
            { title: "Hàm tổng hợp", body: "COUNT(*) đếm số dòng, SUM cộng, AVG tính trung bình, MIN và MAX tìm giá trị nhỏ nhất và lớn nhất. COUNT(ma_dk) bỏ qua NULL còn COUNT(*) đếm mọi dòng, nên cần phân biệt khi có LEFT JOIN.", tip: "Dùng ROUND(AVG(diem), 2) để kết quả trung bình không quá nhiều chữ số." },
            { title: "Lọc nhóm bằng HAVING", body: "HAVING COUNT(*) >= 2 chỉ giữ các môn có từ hai sinh viên trở lên. Không thể thay bằng WHERE vì WHERE chạy trước khi gộp, lúc đó chưa có giá trị COUNT để so sánh.", tip: "Nhớ thứ tự thực thi: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY." }
          ],
          formula: "SELECT ma_mh, AVG(diem) FROM diem GROUP BY ma_mh HAVING COUNT(*) >= 2;"
        }
      ]
    },
    {
      title: "Phụ thuộc hàm và chuẩn hóa",
      summary: "Tính bao đóng, xác định khóa và tách quan hệ lên 3NF, BCNF.",
      lessons: [
        {
          id: "nf1",
          title: "Phụ thuộc hàm và bao đóng",
          minutes: 22,
          level: "Trung bình",
          summary: "Đọc ký hiệu X xác định Y và tính bao đóng để tìm khóa.",
          points: [
            "X xác định Y nghĩa là hai dòng cùng X thì buộc cùng Y.",
            "Bao đóng của X là tập thuộc tính suy ra được từ X.",
            "Nếu bao đóng của X chứa toàn bộ thuộc tính thì X là siêu khóa."
          ],
          steps: [
            { title: "Đọc phụ thuộc hàm", body: "Với quan hệ DangKy(ma_sv, ma_mh, ten_mh), ta có ma_mh xác định ten_mh vì mỗi mã môn chỉ ứng với một tên môn. Ngược lại ten_mh không xác định ma_mh nếu cho phép hai môn trùng tên ở hai khoa khác nhau.", tip: "Kiểm tra phụ thuộc bằng cách hỏi: biết X rồi có chắc chắn biết Y không." },
            { title: "Tính bao đóng", body: "Bắt đầu với tập X, lần lượt thêm vế phải của mọi phụ thuộc hàm có vế trái đã nằm trong tập, lặp đến khi không thêm được nữa. Ví dụ với ma_sv ta suy ra ho_ten, lop, rồi từ lop suy ra ten_khoa.", tip: "Ghi từng vòng lặp ra giấy, mỗi vòng một dòng để không bỏ sót phụ thuộc." },
            { title: "Xác định khóa", body: "Thuộc tính nào không xuất hiện ở vế phải của bất kỳ phụ thuộc hàm nào thì bắt buộc phải nằm trong khóa. Tính bao đóng của tập đó, nếu phủ hết thuộc tính thì đó là khóa tối thiểu.", tip: "Khóa tối thiểu không chứa thuộc tính dư, nên thử bỏ từng thuộc tính để kiểm tra." }
          ],
          formula: "(ma_sv)+ = {ma_sv, ho_ten, lop, ten_khoa}"
        },
        {
          id: "nf2",
          title: "Ba dạng chuẩn 1NF, 2NF, 3NF",
          minutes: 26,
          level: "Nâng cao",
          summary: "Nhận diện vi phạm và tách quan hệ qua từng dạng chuẩn.",
          points: [
            "1NF yêu cầu mọi ô chứa giá trị nguyên tử.",
            "2NF loại phụ thuộc bộ phận của thuộc tính không khóa vào một phần khóa.",
            "3NF loại phụ thuộc bắc cầu giữa các thuộc tính không khóa."
          ],
          steps: [
            { title: "Đưa về 1NF", body: "Bảng có cột SoDienThoai chứa 0901, 0902 trong cùng một ô vi phạm 1NF. Tách thành bảng riêng hoặc tạo nhiều dòng, mỗi dòng một số điện thoại, để mỗi ô chỉ còn một giá trị.", tip: "Mọi ô phải là giá trị không thể chia nhỏ hơn theo nghiệp vụ." },
            { title: "Đưa về 2NF", body: "Với khóa ghép (ma_sv, ma_mh), thuộc tính ten_mh chỉ phụ thuộc ma_mh nên vi phạm 2NF. Tách MonHoc(ma_mh, ten_mh) ra khỏi DangKy để ten_mh không lặp lại ở mọi lần đăng ký.", tip: "Chỉ xét 2NF khi khóa chính gồm từ hai thuộc tính trở lên." },
            { title: "Đưa về 3NF", body: "Trong SinhVien(ma_sv, ma_lop, ten_khoa), ten_khoa phụ thuộc ma_lop chứ không trực tiếp vào ma_sv, tạo phụ thuộc bắc cầu. Tách Lop(ma_lop, ten_khoa) và giữ ma_lop làm khóa ngoại trong SinhVien.", tip: "Phụ thuộc bắc cầu thường lộ ra khi một cột không khóa xác định một cột không khóa khác." }
          ],
          formula: "SinhVien(ma_sv, ma_lop) và Lop(ma_lop, ten_khoa)"
        },
        {
          id: "nf3",
          title: "BCNF và phân rã không mất mát",
          minutes: 28,
          level: "Nâng cao",
          summary: "Kiểm tra BCNF và chọn phép tách bảo toàn dữ liệu, không sinh dòng giả.",
          points: [
            "BCNF yêu cầu mọi phụ thuộc hàm có vế trái là siêu khóa.",
            "Phân rã không mất mát khi phép nối tự nhiên cho lại quan hệ ban đầu.",
            "Tách phải bảo toàn phụ thuộc nếu muốn kiểm tra ràng buộc chỉ trên một bảng."
          ],
          steps: [
            { title: "Kiểm tra BCNF", body: "Quan hệ DayHoc(sinh_vien, mon_hoc, giao_vien) có phụ thuộc giao_vien xác định mon_hoc, nhưng giao_vien không phải siêu khóa nên vi phạm BCNF. Mỗi giảng viên chỉ dạy một môn nhưng một môn có nhiều giảng viên.", tip: "Với từng phụ thuộc hàm, hỏi vế trái có xác định được toàn bộ thuộc tính không." },
            { title: "Chọn phép tách", body: "Tách thành GiangVien(giao_vien, mon_hoc) và PhanCong(sinh_vien, giao_vien). Hai bảng nối lại qua giao_vien cho đúng dữ liệu ban đầu vì giao_vien là khóa của bảng thứ nhất, thỏa điều kiện phân rã không mất mát.", tip: "Kiểm tra giao của hai bảng có chứa khóa của ít nhất một bảng." },
            { title: "Cân nhắc bảo toàn phụ thuộc", body: "Một phép tách có thể không mất mát nhưng làm mất khả năng kiểm tra một phụ thuộc trên từng bảng riêng. Khi thiết kế thực tế, 3NF thường là mức cân bằng tốt vì luôn phân rã được mà vẫn bảo toàn phụ thuộc.", tip: "Ưu tiên 3NF nếu BCNF buộc phải tách quá nhỏ và làm mất ràng buộc." }
          ],
          formula: "R1 ∩ R2 là siêu khóa của R1 hoặc R2 thì phép tách không mất mát"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Khóa chính", back: "Tập thuộc tính định danh duy nhất mỗi bản ghi và không được NULL.", hint: "Duy nhất và bắt buộc có giá trị.", example: "ma_sv là khóa chính của bảng sinh_vien." },
    { front: "Khóa ngoại", back: "Thuộc tính tham chiếu tới khóa chính của bảng khác để bảo đảm liên kết.", hint: "Cầu nối giữa hai bảng.", example: "ma_lop trong sinh_vien tham chiếu lop(ma_lop)." },
    { front: "Tỉ số 1-n", back: "Một bản ghi ở bảng cha liên kết nhiều bản ghi ở bảng con, khóa ngoại nằm ở bảng con.", hint: "Một lớp có nhiều sinh viên.", example: "lop 1-n sinh_vien qua ma_lop." },
    { front: "Tỉ số n-m", back: "Hai bảng liên kết nhiều-nhiều, cần bảng trung gian chứa hai khóa ngoại.", hint: "Sinh viên và môn học.", example: "dang_ky(ma_sv, ma_mh) là bảng trung gian." },
    { front: "Phụ thuộc hàm", back: "X xác định Y khi hai dòng cùng giá trị X thì buộc cùng giá trị Y.", hint: "Biết X là biết Y.", example: "ma_mh xác định ten_mh." },
    { front: "Bao đóng thuộc tính", back: "Tập mọi thuộc tính suy ra được từ một tập thuộc tính nhờ các phụ thuộc hàm.", hint: "Mở rộng dần từ tập ban đầu.", example: "(ma_sv)+ chứa ho_ten, lop, ten_khoa." },
    { front: "Dạng chuẩn 1NF", back: "Mọi ô trong bảng chứa giá trị nguyên tử, không có nhóm lặp.", hint: "Một ô một giá trị.", example: "Không nhồi ba số điện thoại vào một ô." },
    { front: "Dạng chuẩn 2NF", back: "Đạt 1NF và không có thuộc tính không khóa phụ thuộc bộ phận vào khóa ghép.", hint: "Chỉ xét khi khóa gồm nhiều cột.", example: "Tách ten_mh khỏi bảng dang_ky có khóa (ma_sv, ma_mh)." },
    { front: "Dạng chuẩn 3NF", back: "Đạt 2NF và không có phụ thuộc bắc cầu giữa thuộc tính không khóa.", hint: "Không để cột không khóa xác định cột không khóa khác.", example: "Tách ten_khoa khỏi sinh_vien vì nó phụ thuộc ma_lop." },
    { front: "Dạng chuẩn BCNF", back: "Mọi phụ thuộc hàm đều có vế trái là siêu khóa.", hint: "Mạnh hơn 3NF ở mọi phụ thuộc.", example: "giao_vien xác định mon_hoc vi phạm nếu giao_vien không là siêu khóa." },
    { front: "INNER JOIN và LEFT JOIN", back: "INNER JOIN chỉ giữ dòng khớp ở hai bảng, LEFT JOIN giữ toàn bộ bảng trái và điền NULL khi không khớp.", hint: "Một loại cắt, một loại giữ.", example: "LEFT JOIN rồi WHERE IS NULL để tìm sinh viên chưa đăng ký." },
    { front: "GROUP BY và HAVING", back: "GROUP BY gộp dòng theo giá trị, HAVING lọc nhóm sau khi gộp.", hint: "HAVING dành cho hàm tổng hợp.", example: "GROUP BY ma_mh HAVING COUNT(*) >= 2." }
  ],
  quiz: [
    { q: "Thuộc tính nào dùng để định danh duy nhất mỗi bản ghi trong bảng?", options: ["Khóa ngoại", "Khóa chính", "Chỉ mục", "Thuộc tính đa trị"], answer: 1, explain: "Khóa chính bảo đảm duy nhất và không NULL, còn khóa ngoại chỉ tạo liên kết sang bảng khác." },
    { q: "Quan hệ nhiều-nhiều giữa sinh viên và môn học cần gì?", options: ["Thêm một cột vào bảng sinh viên", "Thêm một cột vào bảng môn học", "Không cần thay đổi gì", "Bảng trung gian chứa hai khóa ngoại"], answer: 3, explain: "Quan hệ n-m phải tách thành bảng trung gian, ví dụ dang_ky(ma_sv, ma_mh)." },
    { q: "Dạng chuẩn 2NF loại bỏ loại phụ thuộc nào?", options: ["Thuộc tính đa trị", "Phụ thuộc hàm bắc cầu", "Phụ thuộc bộ phận vào khóa ghép", "Khóa ngoại giữa hai bảng"], answer: 2, explain: "2NF yêu cầu thuộc tính không khóa phụ thuộc đầy đủ vào toàn bộ khóa, không chỉ một phần." },
    { q: "Dạng chuẩn 3NF loại bỏ loại phụ thuộc nào?", options: ["Phụ thuộc bắc cầu giữa thuộc tính không khóa", "Thuộc tính nguyên tử", "Khóa chính ghép", "Bảng trung gian"], answer: 0, explain: "3NF yêu cầu thuộc tính không khóa chỉ phụ thuộc trực tiếp vào khóa, không qua thuộc tính không khóa khác." },
    { q: "Mệnh đề GROUP BY dùng để làm gì?", options: ["Sắp xếp kết quả", "Lọc nhóm sau khi gộp", "Gộp các dòng cùng giá trị để tính tổng hợp", "Nối hai bảng theo khóa"], answer: 2, explain: "GROUP BY tạo nhóm theo giá trị cột, sau đó hàm tổng hợp tính trên từng nhóm." },
    { q: "Khác biệt giữa WHERE và HAVING là gì?", options: ["WHERE lọc nhóm, HAVING lọc dòng", "WHERE lọc dòng trước khi gộp, HAVING lọc nhóm sau khi gộp", "Hai mệnh đề hoàn toàn giống nhau", "HAVING chỉ dùng được với JOIN"], answer: 1, explain: "WHERE chạy trước GROUP BY nên không dùng được hàm tổng hợp; HAVING chạy sau khi đã gộp." },
    { q: "LEFT JOIN trả về những dòng nào?", options: ["Chỉ dòng khớp ở hai bảng", "Chỉ dòng không khớp", "Tích Descartes của hai bảng", "Toàn bộ bảng trái, dòng không khớp nhận NULL"], answer: 3, explain: "LEFT JOIN giữ mọi dòng bảng trái; cột của bảng phải nhận NULL khi không có dòng khớp." },
    { q: "Tính bao đóng của tập thuộc tính nhằm mục đích gì?", options: ["Xác định khóa và kiểm tra suy diễn", "Tạo chỉ mục cho bảng", "Sắp xếp dữ liệu khi truy vấn", "Tính trung bình theo nhóm"], answer: 0, explain: "Bao đóng cho biết mọi thuộc tính suy ra được, từ đó kiểm tra siêu khóa và khóa tối thiểu." },
    { q: "Điều kiện nào đúng với dạng chuẩn BCNF?", options: ["Mọi bảng đều có khóa chính", "Mọi thuộc tính đều nguyên tử", "Không được dùng bảng trung gian", "Mọi phụ thuộc hàm có vế trái là siêu khóa"], answer: 3, explain: "BCNF mạnh hơn 3NF: mọi phụ thuộc hàm không tầm thường đều phải có vế trái là siêu khóa." },
    { q: "Câu lệnh nào lấy đúng sinh viên thuộc lớp CNTT1?", options: ["SELECT * FROM sinh_vien WHERE lop = 'CNTT1';", "SELECT * FROM sinh_vien HAVING lop = 'CNTT1';", "SELECT lop FROM sinh_vien;", "SELECT * FROM sinh_vien ORDER BY 'CNTT1';"], answer: 0, explain: "WHERE lọc dòng theo điều kiện; HAVING dành cho nhóm, còn ORDER BY chỉ sắp xếp." }
  ],
  lab: {
    kind: "sql",
    title: "Năm truy vấn trên lược đồ quản lý điểm",
    lead: "Bộ dữ liệu gồm bốn bảng sinh_vien, mon_hoc, dang_ky, diem. Chọn từng truy vấn để xem câu lệnh, bảng kết quả và giải thích mệnh đề được dùng.",
    stageLabel: "SQL playground",
    controlNote: "Bấm lần lượt các nút truy vấn để so sánh kết quả của lọc, nối bảng và gộp nhóm.",
    note: "Dữ liệu mẫu có 5 sinh viên, 3 môn học và 6 lần đăng ký, đủ để thấy khác biệt giữa INNER JOIN và LEFT JOIN.",
    queries: [
      {
        label: "Lọc theo lớp",
        sql: "SELECT ma_sv, ho_ten, lop FROM sinh_vien WHERE lop = 'CNTT1' ORDER BY ho_ten;",
        explain: "WHERE lọc dòng trước khi trả kết quả, ORDER BY ho_ten xếp theo bảng chữ cái. Chỉ ba sinh viên thuộc CNTT1 xuất hiện dù bảng có năm dòng.",
        result: {
          cols: ["ma_sv", "ho_ten", "lop"],
          rows: [
            ["SV05", "Hoàng Thu Em", "CNTT1"],
            ["SV01", "Nguyễn Văn An", "CNTT1"],
            ["SV02", "Trần Thị Bình", "CNTT1"]
          ]
        }
      },
      {
        label: "Nối ba bảng, điểm từ 8",
        sql: "SELECT sv.ho_ten, mh.ten_mh, d.diem FROM sinh_vien sv JOIN dang_ky dk ON sv.ma_sv = dk.ma_sv JOIN mon_hoc mh ON mh.ma_mh = dk.ma_mh JOIN diem d ON d.ma_dk = dk.ma_dk WHERE d.diem >= 8 ORDER BY d.diem DESC;",
        explain: "Phải đi qua dang_ky vì đây là bảng giữ cả ma_sv và ma_mh. Điều kiện d.diem >= 8 lọc sau khi nối, còn ORDER BY DESC đưa điểm cao lên trước.",
        result: {
          cols: ["ho_ten", "ten_mh", "diem"],
          rows: [
            ["Lê Hoàng Chi", "Cơ sở dữ liệu", "9.1"],
            ["Nguyễn Văn An", "Cơ sở dữ liệu", "8.5"],
            ["Nguyễn Văn An", "Lập trình web", "8.0"]
          ]
        }
      },
      {
        label: "Điểm trung bình mỗi môn",
        sql: "SELECT mh.ten_mh, COUNT(*) AS so_sv, ROUND(AVG(d.diem), 2) AS diem_tb FROM mon_hoc mh JOIN dang_ky dk ON mh.ma_mh = dk.ma_mh JOIN diem d ON d.ma_dk = dk.ma_dk GROUP BY mh.ten_mh ORDER BY diem_tb DESC;",
        explain: "GROUP BY gộp các lần đăng ký theo tên môn, COUNT đếm số sinh viên và AVG tính trung bình. ROUND giữ hai chữ số thập phân để bảng kết quả gọn hơn.",
        result: {
          cols: ["ten_mh", "so_sv", "diem_tb"],
          rows: [
            ["Cơ sở dữ liệu", "3", "8.20"],
            ["Mạng máy tính", "1", "7.80"],
            ["Lập trình web", "2", "7.25"]
          ]
        }
      },
      {
        label: "Môn có từ 2 sinh viên",
        sql: "SELECT mh.ten_mh, COUNT(*) AS so_sv FROM mon_hoc mh JOIN dang_ky dk ON mh.ma_mh = dk.ma_mh GROUP BY mh.ten_mh HAVING COUNT(*) >= 2 ORDER BY so_sv DESC;",
        explain: "HAVING lọc trên kết quả đã gộp nên dùng được COUNT(*), điều mà WHERE không làm được vì WHERE chạy trước GROUP BY. Môn chỉ có một sinh viên bị loại khỏi kết quả.",
        result: {
          cols: ["ten_mh", "so_sv"],
          rows: [
            ["Cơ sở dữ liệu", "3"],
            ["Lập trình web", "2"]
          ]
        }
      },
      {
        label: "Sinh viên chưa học CS103",
        sql: "SELECT sv.ho_ten FROM sinh_vien sv LEFT JOIN dang_ky dk ON sv.ma_sv = dk.ma_sv AND dk.ma_mh = 'CS103' WHERE dk.ma_dk IS NULL ORDER BY sv.ho_ten;",
        explain: "LEFT JOIN giữ toàn bộ sinh viên, ai không có lần đăng ký CS103 sẽ nhận NULL ở cột ma_dk. Điều kiện IS NULL lọc ra đúng nhóm cần tìm, mẫu truy vấn chống nối thường gặp.",
        result: {
          cols: ["ho_ten"],
          rows: [["Lê Hoàng Chi"], ["Nguyễn Văn An"], ["Phạm Minh Dũng"], ["Trần Thị Bình"]]
        }
      }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Hoàng Long", progress: 86, score: 8.7, status: "Tốt", note: "Viết JOIN thành thạo, cần luyện BCNF." },
      { name: "Trần Mai Phương", progress: 64, score: 7.4, status: "Đang học", note: "Hay quên GROUP BY khi dùng hàm tổng hợp." },
      { name: "Lê Quốc Việt", progress: 95, score: 9.4, status: "Tốt", note: "Chuẩn hóa chính xác, có thể dẫn nhóm thảo luận." },
      { name: "Phạm Thùy Dương", progress: 28, score: 5.3, status: "Cần hỗ trợ", note: "Chưa vẽ được quan hệ n-m trong bài ER." },
      { name: "Vũ Đình Khang", progress: 70, score: 7.8, status: "Đang học", note: "Hiểu LEFT JOIN, cần thêm bài HAVING." },
      { name: "Đỗ Ngọc Hà", progress: 51, score: 6.6, status: "Đang học", note: "Nhầm khóa chính với khóa ngoại khi đọc lược đồ." }
    ],
    submissions: [
      { student: "Nguyễn Hoàng Long", lesson: "Bài SQL: thống kê điểm theo môn", time: "Hôm qua 21:40", status: "Chờ chấm" },
      { student: "Phạm Thùy Dương", lesson: "Bài ER: quản lý mượn trả sách", time: "Hôm qua 18:55", status: "Chờ chấm" },
      { student: "Lê Quốc Việt", lesson: "Bài chuẩn hóa: tách quan hệ lên 3NF", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Tư thực hành SQL trên playground, mang theo laptop để chạy truy vấn của nhóm.",
      "Bài kiểm tra giữa kỳ gồm 50% viết truy vấn và 50% bài tập chuẩn hóa.",
      "Sinh viên nộp bài ER dạng ảnh cần xuất thêm tệp PDF để giảng viên chấm được khóa và quan hệ."
    ]
  },
  className: "Cơ sở dữ liệu – K24",
  brief: "BTL-22_datalesson-mon-co-so-du-lieu.md"
};
