window.BTL_DATA = {
  id: "securelearn",
  code: "BTL-24",
  name: "SecureLearn",
  monogram: "SL",
  subject: "An toàn thông tin",
  level: "Đại học",
  group: "Công nghệ thông tin",
  accent: "#111827",
  accent2: "#ef4444",
  font: "mono",
  tagline: "Thử mã hóa, đo độ mạnh mật khẩu và tập phản xạ trước mỗi cú lừa.",
  intro: "SecureLearn đưa các cuộc tấn công quen thuộc lên màn hình theo từng bước, kèm bước phòng thủ tương ứng. Sinh viên vừa thử mã hóa Caesar, vừa kiểm tra độ mạnh mật khẩu và nhận diện email lừa đảo bằng tình huống cụ thể.",
  hero: { title: "An toàn thông tin", highlight: "phản xạ trước khi bị lừa" },
  heroBadge: "Crypto lab · Nhận thức lừa đảo · Phòng thủ",
  labShort: "CRYPTO",
  labTag: "PHÒNG LAB",
  practiceTag: "TÌNH HUỐNG",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho môn An toàn thông tin: xem tấn công diễn ra, quyết định trong tình huống thật và thử mã hóa ngay trên trình duyệt.",
  pathLead: "Đi từ ba trụ cột CIA, sang mật mã và xác thực, rồi tấn công, phòng thủ và ứng phó sự cố. Mỗi chương đều có tình huống để chọn phương án xử lý.",
  features: [
    { badge: "01", title: "Mô phỏng tấn công từng bước", desc: "Xem kẻ tấn công khai thác SQL injection hoặc brute-force, sau đó so sánh với bước phòng thủ tương ứng ở từng giai đoạn." },
    { badge: "02", title: "Bài nhận thức tình huống", desc: "Đọc email và liên kết giả lập, chọn mức an toàn, nghi ngờ hay nguy hiểm rồi nhận giải thích ngay dấu hiệu đáng ngờ." },
    { badge: "03", title: "Lab mã hóa và mật khẩu", desc: "Nhập câu tiếng Việt để xem mã hóa Caesar, thử mật khẩu khác nhau và đọc thanh độ mạnh cùng gợi ý cải thiện." }
  ],
  life: [
    {
      title: "Chìa khóa dự phòng cho hàng xóm",
      scene: "Về quê ba ngày, nhờ hàng xóm giữ chìa để tưới cây. Đưa cả chùm thì tiện cho họ, nhưng chùm ấy mở được cửa phòng trọ, tủ áo và cả ngăn kéo giấy tờ, nên chỉ nên đưa đúng chiếc chìa cửa chính.",
      connect: "Đó là đặc quyền tối thiểu: cấp đúng quyền cần dùng, không cấp thừa. Nó cũng trả lời câu hỏi của ba trụ cột CIA, vì mất chìa là mất cả bí mật lẫn toàn vẹn giấy tờ."
    },
    {
      title: "Ổ khóa nhà và hòm thư trước cổng",
      scene: "Cửa nhà dùng một chiếc chìa cho cả việc khóa lẫn mở, nên ai có chìa là vào được. Hòm thư trước cổng thì khác: ai đi ngang cũng bỏ thư vào được, nhưng chỉ người có chìa riêng mới mở ra đọc.",
      connect: "Hai hình ảnh đó là mã hóa đối xứng và bất đối xứng: một chìa dùng chung cho hai chiều, so với khóa công khai để gửi và khóa riêng để mở; TLS dùng cả hai cho nhanh và an toàn."
    },
    {
      title: "Tin nhắn đòi tiền điện lúc chập tối",
      scene: "Điện thoại rung lúc bảy giờ tối, tin nhắn tự xưng nhân viên điện lực báo hóa đơn quá hạn, kèm đường dẫn lạ và lời hối thúc đóng trong ba mươi phút. Số gửi không phải tổng đài quen thuộc, tên người nhận còn viết sai.",
      connect: "Ba dấu hiệu đó là cách nhận diện phishing: người gửi lạ, lời hối thúc gấp và đường dẫn không thuộc tên miền chính thức; cách xử lý là không bấm, gọi tổng đài tra cứu."
    }
  ],
  modules: [
    {
      title: "Nền tảng an toàn thông tin",
      summary: "Ba trụ cột CIA, mô hình mối đe dọa và cách cấp quyền tối thiểu.",
      lessons: [
        {
          id: "ci1",
          title: "Ba trụ cột CIA",
          minutes: 16,
          level: "Cơ bản",
          summary: "Đánh giá một sự cố theo ba câu hỏi: lộ dữ liệu, sai dữ liệu hay mất dịch vụ.",
          points: [
            "Confidentiality chỉ người được phép mới đọc được dữ liệu.",
            "Integrity bảo đảm dữ liệu không bị sửa ngoài ý muốn.",
            "Availability bảo đảm hệ thống sẵn sàng đúng lúc cần."
          ],
          steps: [
            { title: "Confidentiality", body: "Một tệp Excel chứa điểm của cả lớp được gửi nhầm vào nhóm chat công khai là vi phạm tính bí mật. Biện pháp gồm phân quyền thư mục, mã hóa tệp và kiểm tra người nhận trước khi gửi.", tip: "Hỏi: ai đang đọc được thứ này, có đúng người không." },
            { title: "Integrity", body: "Nếu sinh viên sửa được điểm trong cơ sở dữ liệu mà không để lại dấu vết, tính toàn vẹn đã mất dù dữ liệu vẫn đọc được. Nhật ký kiểm toán, chữ ký số và phân quyền ghi giúp phát hiện thay đổi trái phép.", tip: "Toàn vẹn không chỉ là không hỏng, mà còn là biết ai đã sửa." },
            { title: "Availability", body: "Một cuộc tấn công từ chối dịch vụ làm cổng tra cứu điểm sập đúng ngày công bố là vi phạm tính sẵn sàng. Dự phòng máy chủ, giới hạn tần suất truy cập và sao lưu giúp hệ thống chịu tải tốt hơn.", tip: "Ba trụ cột thường đánh đổi nhau, cần cân bằng theo nghiệp vụ." }
          ],
          formula: "CIA = Confidentiality + Integrity + Availability"
        },
        {
          id: "ci2",
          title: "Bề mặt tấn công và mô hình mối đe dọa",
          minutes: 22,
          level: "Trung bình",
          summary: "Liệt kê điểm yếu, xác định tác nhân và chọn biện pháp theo mức ưu tiên.",
          points: [
            "Bề mặt tấn công là mọi điểm mà kẻ tấn công có thể tương tác.",
            "Mô hình mối đe dọa trả lời: bảo vệ gì, khỏi ai, bằng cách nào.",
            "Ưu tiên theo khả năng xảy ra nhân với thiệt hại."
          ],
          steps: [
            { title: "Liệt kê tài sản", body: "Với hệ thống quản lý điểm, tài sản gồm cơ sở dữ liệu điểm, tài khoản giảng viên, máy chủ web và bản sao lưu. Mỗi tài sản cần ghi rõ ai được đọc, ai được sửa và mức thiệt hại nếu mất.", tip: "Bắt đầu từ dữ liệu không được phép mất, không bắt đầu từ thiết bị." },
            { title: "Xác định tác nhân", body: "Sinh viên tò mò muốn xem điểm trước khi công bố, kẻ lừa đảo bên ngoài và cả nhân viên sao nhãng đều là tác nhân. Mỗi tác nhân có động cơ và khả năng khác nhau nên biện pháp cũng khác nhau.", tip: "Đừng chỉ nghĩ tới hacker bên ngoài, phần lớn sự cố đến từ bên trong." },
            { title: "Chọn biện pháp", body: "Với rủi ro sinh viên dò mật khẩu, biện pháp là giới hạn số lần đăng nhập và bật xác thực hai lớp. Với rủi ro mất dữ liệu, biện pháp là sao lưu và thử khôi phục định kỳ, không chỉ sao lưu rồi để đó.", tip: "Mỗi biện pháp phải kiểm chứng được, ví dụ thử khôi phục từ bản sao lưu." }
          ],
          formula: "Rủi ro = khả năng xảy ra x thiệt hại"
        },
        {
          id: "ci3",
          title: "Phân quyền và đặc quyền tối thiểu",
          minutes: 20,
          level: "Trung bình",
          summary: "Cấp đúng quyền cần dùng và tách tài khoản quản trị khỏi tài khoản thường.",
          points: [
            "Mỗi tài khoản chỉ nhận quyền cần cho công việc hiện tại.",
            "Tách quyền quản trị khỏi tài khoản dùng hằng ngày.",
            "Rà soát quyền định kỳ và thu hồi khi đổi vai trò."
          ],
          steps: [
            { title: "Cấp quyền theo vai trò", body: "Thực tập sinh chỉ cần quyền đọc báo cáo, không cần quyền xóa dữ liệu. Giảng viên cần quyền nhập điểm cho lớp mình phụ trách, không cần quyền sửa điểm của lớp khác.", tip: "Viết bảng vai trò và quyền ra giấy trước khi cấu hình hệ thống." },
            { title: "Tách tài khoản quản trị", body: "Tài khoản dùng để đọc mail và lướt web không nên có quyền quản trị máy chủ. Khi cần thao tác quản trị, đăng nhập bằng tài khoản riêng có nhật ký, nhờ vậy mọi hành động đều truy vết được.", tip: "Tài khoản quản trị chỉ dùng cho việc quản trị, không dùng để duyệt web." },
            { title: "Rà soát định kỳ", body: "Mỗi học kỳ, xuất danh sách tài khoản kèm quyền và đối chiếu với danh sách nhân sự thực tế. Tài khoản của sinh viên đã tốt nghiệp hoặc giảng viên đã chuyển công tác cần được vô hiệu hóa ngay.", tip: "Đặt lịch rà soát cố định thay vì chờ có sự cố mới kiểm tra." }
          ],
          formula: "Đặc quyền tối thiểu: cấp đủ để làm việc, không hơn"
        }
      ]
    },
    {
      title: "Mật mã và xác thực",
      summary: "Đối xứng, bất đối xứng, hàm băm, chữ ký số và xác thực nhiều lớp.",
      lessons: [
        {
          id: "mc1",
          title: "Mã hóa đối xứng và bất đối xứng",
          minutes: 24,
          level: "Trung bình",
          summary: "Phân biệt hai họ mã hóa và hiểu vì sao TLS dùng cả hai.",
          points: [
            "Đối xứng dùng một khóa cho cả mã hóa và giải mã, tốc độ cao.",
            "Bất đối xứng dùng cặp khóa công khai và khóa riêng tư.",
            "Thực tế kết hợp: bất đối xứng trao đổi khóa, đối xứng mã hóa dữ liệu."
          ],
          steps: [
            { title: "Mã hóa đối xứng", body: "AES với khóa 256 bit mã hóa và giải mã bằng cùng một khóa, rất nhanh nên phù hợp với lượng dữ liệu lớn. Vấn đề là hai bên phải có chung khóa mà không để lộ, nên khóa thường được trao đổi qua kênh khác.", tip: "Đối xứng nhanh nhưng khó chia sẻ khóa an toàn." },
            { title: "Mã hóa bất đối xứng", body: "Mỗi người có khóa công khai ai cũng biết và khóa riêng tư chỉ mình giữ. Gửi dữ liệu bằng khóa công khai của người nhận thì chỉ khóa riêng tư của họ giải được, nên không cần chia sẻ bí mật trước.", tip: "Khóa công khai dùng để mã hóa hoặc kiểm tra chữ ký, không dùng để giải mã." },
            { title: "Kết hợp trong TLS", body: "Khi mở trang HTTPS, trình duyệt và máy chủ dùng thuật toán bất đối xứng để thương lượng một khóa phiên, sau đó chuyển sang AES mã hóa toàn bộ dữ liệu. Cách kết hợp này vừa an toàn khi trao đổi khóa vừa nhanh khi truyền dữ liệu.", tip: "Nhìn ổ khóa trên trình duyệt là thấy kết quả của cả hai họ mã hóa." }
          ],
          formula: "AES đối xứng + trao đổi khóa bất đối xứng = phiên TLS"
        },
        {
          id: "mc2",
          title: "Hàm băm, salt và chữ ký số",
          minutes: 24,
          level: "Nâng cao",
          summary: "Dùng hash để kiểm tra toàn vẹn, salt để chống bảng tra và chữ ký số để xác thực nguồn.",
          points: [
            "Hash một chiều, đổi một bit đầu vào sẽ đổi gần như toàn bộ mã băm.",
            "Salt là chuỗi ngẫu nhiên thêm trước khi băm, chống bảng băm dựng sẵn.",
            "Chữ ký số là hash tài liệu được mã hóa bằng khóa riêng của người ký."
          ],
          steps: [
            { title: "Hàm băm", body: "SHA-256 của chuỗi Hoc an toan cho một mã 64 ký tự hệ mười sáu, và không có cách tính ngược từ mã đó về chuỗi gốc. Hệ thống lưu mã băm của mật khẩu, khi đăng nhập chỉ băm lại và so sánh.", tip: "Hash không phải mã hóa, vì không có khóa để giải ngược." },
            { title: "Salt chống bảng tra", body: "Nếu hai người cùng mật khẩu 123456, mã băm giống nhau và kẻ tấn công tra bảng là ra. Thêm một salt ngẫu nhiên riêng cho từng tài khoản trước khi băm sẽ làm hai mã băm khác nhau dù mật khẩu giống nhau.", tip: "Salt lưu công khai cùng mã băm, điều quan trọng là mỗi tài khoản một salt riêng." },
            { title: "Chữ ký số", body: "Người gửi băm tài liệu rồi mã hóa mã băm bằng khóa riêng tư của mình. Người nhận dùng khóa công khai kiểm tra, nếu khớp thì tài liệu đúng nguồn và chưa bị sửa, đây là nền tảng của chứng chỉ số.", tip: "Chữ ký số bảo đảm nguồn gốc và toàn vẹn, không bảo đảm bí mật nội dung." }
          ],
          formula: "Chữ ký = Encrypt(khóa riêng, Hash(tài liệu))"
        },
        {
          id: "mc3",
          title: "Xác thực đa yếu tố và quản lý mật khẩu",
          minutes: 20,
          level: "Cơ bản",
          summary: "Bật MFA đúng cách và dùng trình quản lý mật khẩu thay cho ghi nhớ thủ công.",
          points: [
            "MFA cần từ hai yếu tố khác loại: biết, có, là.",
            "Mật khẩu dài và duy nhất quan trọng hơn mật khẩu ngắn nhưng phức tạp.",
            "Trình quản lý mật khẩu giúp mỗi dịch vụ một mật khẩu riêng."
          ],
          steps: [
            { title: "Ba loại yếu tố", body: "Yếu tố biết là mật khẩu hoặc mã PIN, yếu tố có là điện thoại hay khóa bảo mật, yếu tố là là vân tay hoặc khuôn mặt. Hai mật khẩu khác nhau vẫn chỉ là một loại yếu tố nên không được tính là MFA.", tip: "MFA thật cần hai loại khác nhau, ví dụ mật khẩu cộng mã OTP." },
            { title: "Chọn mật khẩu dài", body: "Cụm bốn từ ngẫu nhiên như ca-phe-sach-mua dài hơn nhưng dễ nhớ hơn MatKhau123. Độ dài làm tăng số tổ hợp cần thử, trong khi các mẫu thay chữ bằng số như a thành 4 đã nằm sẵn trong từ điển của công cụ bẻ khóa.", tip: "Ưu tiên cụm từ dài, tránh dùng lại mật khẩu ở nhiều dịch vụ." },
            { title: "Quản lý mật khẩu", body: "Trình quản lý mật khẩu sinh và lưu mật khẩu ngẫu nhiên cho từng trang, người dùng chỉ cần nhớ một mật khẩu chính thật mạnh. Bật MFA cho chính tài khoản quản lý mật khẩu vì đây là chìa khóa của mọi tài khoản khác.", tip: "Không gửi mật khẩu qua chat hoặc email, kể cả cho người quen." }
          ],
          formula: "MFA = thứ bạn biết + thứ bạn có + thứ bạn là"
        }
      ]
    },
    {
      title: "Tấn công, phòng thủ và nhận thức",
      summary: "Nhận diện SQL injection, XSS, phishing và ứng phó khi sự cố xảy ra.",
      lessons: [
        {
          id: "at1",
          title: "SQL injection và XSS",
          minutes: 24,
          level: "Trung bình",
          summary: "Hiểu cách dữ liệu nhập biến thành mã và cách chặn ở tầng truy vấn, tầng hiển thị.",
          points: [
            "SQL injection xảy ra khi chuỗi nhập được ghép trực tiếp vào câu truy vấn.",
            "Phòng bằng truy vấn tham số hóa và kiểm tra kiểu dữ liệu.",
            "XSS chèn script vào nội dung rồi hiển thị cho người dùng khác."
          ],
          steps: [
            { title: "Cơ chế SQL injection", body: "Ô đăng nhập nhận chuỗi ' OR '1'='1 rồi ghép thành câu SELECT ... WHERE user = '' OR '1'='1'. Điều kiện luôn đúng nên hệ thống trả về tài khoản đầu tiên và cấp phiên đăng nhập cho kẻ tấn công.", tip: "Bất kỳ ô nhập nào ghép vào câu lệnh đều là ứng viên của lỗi này." },
            { title: "Phòng bằng tham số hóa", body: "Câu lệnh SELECT * FROM users WHERE user = ? AND pass = ? truyền giá trị qua tham số riêng, hệ quản trị coi toàn bộ chuỗi nhập là dữ liệu chứ không phải câu lệnh. Cách này chặn cả biến thể tấn công phức tạp hơn.", tip: "Không nối chuỗi để tạo SQL, kể cả khi đã lọc bớt ký tự." },
            { title: "XSS và thoát ký tự", body: "Nếu bình luận chứa thẻ script và trang hiển thị nguyên văn, trình duyệt của người đọc sẽ chạy đoạn mã đó. Thoát ký tự đặc biệt khi hiển thị và dùng Content-Security-Policy giúp vô hiệu hóa script lạ.", tip: "Kiểm tra ở cả hai đầu: lọc khi nhận và thoát ký tự khi hiển thị." }
          ],
          formula: "SELECT * FROM users WHERE user = ? AND pass = ?"
        },
        {
          id: "at2",
          title: "Phishing và kỹ nghệ xã hội",
          minutes: 20,
          level: "Cơ bản",
          summary: "Nhận diện email và liên kết giả mạo bằng ba dấu hiệu kiểm tra nhanh.",
          points: [
            "Kiểm tra tên miền gửi, không chỉ tin vào tên hiển thị.",
            "Tổ chức thật không bao giờ hỏi mật khẩu qua email.",
            "Không bấm link trong thư lạ, mở trực tiếp trang chính thức."
          ],
          steps: [
            { title: "Dấu hiệu khẩn cấp giả tạo", body: "Email thông báo tài khoản sẽ bị khóa trong 24 giờ và yêu cầu nhập lại mật khẩu là mẫu phishing quen thuộc. Cảm giác khẩn cấp được tạo ra để người nhận bấm link trước khi kịp kiểm tra.", tip: "Càng thúc ép khẩn cấp càng phải dừng lại kiểm tra." },
            { title: "Kiểm tra tên miền", body: "Địa chỉ truong-dai-hoc.edu.vn và truongdaihoc.edu.vn-secure.com trông giống nhau nhưng tên miền thật khác nhau. Di chuột lên link để xem địa chỉ đích, hoặc mở trang chủ chính thức rồi tự tìm mục cần vào.", tip: "Đọc tên miền từ phải sang trái, phần ngay trước dấu gạch chéo đầu tiên mới là nơi đến thật." },
            { title: "Xác minh qua kênh khác", body: "Khi nhận yêu cầu chuyển tiền hoặc cấp quyền từ người quen, gọi điện hoặc gặp trực tiếp để xác nhận thay vì trả lời email. Kẻ tấn công có thể giả mạo cả tài khoản người quen sau khi chiếm được hộp thư.", tip: "Dùng số điện thoại đã biết trước, không dùng số ghi trong thư." }
          ],
          formula: "Dừng lại - Kiểm tra tên miền - Xác minh qua kênh khác"
        },
        {
          id: "at3",
          title: "Quy trình ứng phó sự cố",
          minutes: 26,
          level: "Nâng cao",
          summary: "Đi qua năm bước ứng phó và biết việc gì phải làm trước khi xóa máy nhiễm.",
          points: [
            "Năm bước: phát hiện, khoanh vùng, loại bỏ, khôi phục, rút kinh nghiệm.",
            "Giữ bằng chứng trước khi xóa hoặc cài lại máy.",
            "Báo cáo đúng thời hạn và đúng người phụ trách."
          ],
          steps: [
            { title: "Phát hiện và khoanh vùng", body: "Khi thấy máy tự gửi mail hàng loạt, việc đầu tiên là ngắt kết nối mạng của máy đó để chặn lây lan, không tắt máy vì tắt sẽ mất trạng thái bộ nhớ. Ghi lại thời điểm phát hiện và người phát hiện.", tip: "Ngắt mạng thay vì tắt máy để còn thu thập dấu vết." },
            { title: "Loại bỏ và khôi phục", body: "Thu thập log, ảnh chụp màn hình và tệp đáng ngờ rồi mới cài lại hệ điều hành từ bản sạch. Sau khi khôi phục, đổi toàn bộ mật khẩu liên quan và kiểm tra lại quyền tài khoản trước khi nối lại mạng.", tip: "Khôi phục từ bản sao lưu đã kiểm chứng, không dùng bản sao lưu chưa thử lần nào." },
            { title: "Rút kinh nghiệm", body: "Sau sự cố, ghi rõ nguyên nhân gốc, thời gian phát hiện, thời gian khắc phục và biện pháp đã thêm. Tài liệu này giúp lần sau xử lý nhanh hơn và là bằng chứng khi phải báo cáo cơ quan quản lý.", tip: "Một sự cố không có báo cáo là một sự cố sẽ lặp lại." }
          ],
          formula: "Phát hiện - Khoanh vùng - Loại bỏ - Khôi phục - Bài học"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Ba trụ cột CIA", back: "Confidentiality, Integrity, Availability: bí mật, toàn vẹn và sẵn sàng.", hint: "Ba chữ cái đầu của ba tính chất.", example: "Lộ điểm là mất bí mật, sửa điểm là mất toàn vẹn." },
    { front: "Mã hóa đối xứng", back: "Dùng cùng một khóa để mã hóa và giải mã, tốc độ nhanh.", hint: "Một chìa khóa cho cả hai chiều.", example: "AES-256 mã hóa tệp và giải mã bằng đúng khóa đó." },
    { front: "Mã hóa bất đối xứng", back: "Dùng cặp khóa công khai và khóa riêng tư, không cần chia sẻ bí mật trước.", hint: "Hai khóa, một công khai một riêng tư.", example: "RSA và ECC dùng trong trao đổi khóa TLS." },
    { front: "Hàm băm", back: "Biến dữ liệu thành mã có độ dài cố định theo một chiều, không giải ngược được.", hint: "Một chiều, cùng vào cùng ra.", example: "SHA-256 dùng để lưu mật khẩu và kiểm tra tệp." },
    { front: "Salt", back: "Chuỗi ngẫu nhiên thêm vào trước khi băm, mỗi tài khoản một giá trị riêng.", hint: "Rắc muối để hai mật khẩu giống nhau ra mã khác nhau.", example: "Hai tài khoản cùng mật khẩu vẫn có mã băm khác nhau nhờ salt." },
    { front: "Chữ ký số", back: "Mã băm của tài liệu được mã hóa bằng khóa riêng của người ký để xác thực nguồn và toàn vẹn.", hint: "Ký bằng khóa riêng, kiểm bằng khóa công khai.", example: "Chứng chỉ số của website được ký bởi tổ chức phát hành." },
    { front: "MFA", back: "Xác thực đa yếu tố, cần ít nhất hai yếu tố khác loại như mật khẩu và mã OTP.", hint: "Hai loại khác nhau, không phải hai mật khẩu.", example: "Mật khẩu cộng mã 6 số từ ứng dụng xác thực." },
    { front: "SQL injection", back: "Chèn câu lệnh SQL qua dữ liệu nhập được ghép trực tiếp vào truy vấn.", hint: "Dữ liệu biến thành câu lệnh.", example: "Nhập ' OR '1'='1 để bỏ qua kiểm tra đăng nhập." },
    { front: "XSS", back: "Chèn script vào nội dung mà trang hiển thị cho người dùng khác, khiến trình duyệt chạy mã lạ.", hint: "Script chạy trong trình duyệt nạn nhân.", example: "Bình luận chứa thẻ script không được thoát ký tự." },
    { front: "Phishing", back: "Lừa người dùng tiết lộ thông tin bằng email hoặc trang giả mạo trông giống thật.", hint: "Câu cá bằng thông điệp khẩn cấp.", example: "Email báo tài khoản bị khóa, yêu cầu nhập lại mật khẩu." },
    { front: "Đặc quyền tối thiểu", back: "Chỉ cấp quyền vừa đủ để hoàn thành công việc, thu hồi khi không còn cần.", hint: "Đủ dùng, không dư.", example: "Thực tập sinh chỉ có quyền đọc báo cáo." },
    { front: "Mã hóa Caesar", back: "Dịch mỗi chữ cái đi k vị trí trong bảng chữ cái, giải mã bằng cách dịch ngược.", hint: "Dịch chuyển bảng chữ cái.", example: "Hoc với k = 3 thành Krf." }
  ],
  quiz: [
    { q: "Mã hóa Caesar với độ dịch 3 biến chuỗi Hoc thành gì?", options: ["Ipd", "Gnb", "Krf", "Kre"], answer: 2, explain: "H thành K, o thành r, c thành f khi dịch mỗi chữ đi 3 vị trí." },
    { q: "Mật khẩu nào khó bẻ nhất trong bốn lựa chọn?", options: ["MatKhau@2026", "matkhau123", "12345678", "nguyenvana"], answer: 0, explain: "Có độ dài 12, trộn hoa thường, số và ký tự đặc biệt nên số tổ hợp cần thử lớn hơn nhiều." },
    { q: "Mã hóa bất đối xứng dựa trên điều gì?", options: ["Một khóa chung cho hai bên", "Chỉ dùng hàm băm", "Không cần khóa", "Cặp khóa công khai và khóa riêng tư"], answer: 3, explain: "Người nhận công bố khóa công khai, chỉ khóa riêng tư của họ giải được dữ liệu mã hóa." },
    { q: "Hàm băm khác mã hóa ở điểm nào?", options: ["Hash giải ngược được bằng khóa", "Hash một chiều, không giải ngược", "Hash dùng chung khóa với AES", "Hash luôn dài đúng 128 bit"], answer: 1, explain: "Không có khóa để đảo ngược hash; muốn kiểm tra thì băm lại và so sánh." },
    { q: "Salt trong lưu trữ mật khẩu dùng để làm gì?", options: ["Tăng tốc quá trình băm", "Nén dữ liệu trước khi lưu", "Chống tra bảng băm dựng sẵn", "Thay thế chữ ký số"], answer: 2, explain: "Salt riêng cho từng tài khoản làm mã băm khác nhau dù mật khẩu giống nhau, vô hiệu hóa bảng tra." },
    { q: "Xác thực đa yếu tố MFA cần gì?", options: ["Một mật khẩu thật dài", "Chỉ dùng vân tay", "Chỉ dùng mã OTP", "Kết hợp nhiều yếu tố khác loại"], answer: 3, explain: "Hai yếu tố phải thuộc hai loại khác nhau như biết, có hoặc là; hai mật khẩu vẫn chỉ là một loại." },
    { q: "Cách phòng SQL injection hiệu quả nhất là gì?", options: ["Truy vấn tham số hóa", "Nối chuỗi trực tiếp rồi lọc ký tự", "Ẩn nút đăng nhập trên giao diện", "Đổi tên bảng trong cơ sở dữ liệu"], answer: 0, explain: "Tham số hóa tách dữ liệu khỏi câu lệnh nên chuỗi nhập không bao giờ được thực thi như SQL." },
    { q: "Tấn công XSS diễn ra theo cách nào?", options: ["Tấn công trực tiếp vào cơ sở dữ liệu", "Đánh cắp cáp mạng vật lý", "Chèn script vào trang hiển thị cho người khác", "Dò quét cổng dịch vụ"], answer: 2, explain: "Mã script lọt vào nội dung hiển thị và chạy trong trình duyệt của nạn nhân." },
    { q: "Dấu hiệu nào cho thấy email có khả năng phishing?", options: ["Tên miền chính thức của trường", "Yêu cầu cung cấp mật khẩu qua email", "Có chữ ký số hợp lệ", "Đường link bắt đầu bằng https"], answer: 1, explain: "Tổ chức hợp pháp không bao giờ yêu cầu mật khẩu qua email; đây là dấu hiệu điển hình của lừa đảo." },
    { q: "Khi phát hiện máy nhiễm mã độc, nên làm gì trước?", options: ["Tắt máy và không thông báo", "Xóa toàn bộ log để tránh lộ", "Đăng chi tiết lên mạng xã hội", "Báo ngay cho bộ phận an toàn thông tin và giữ bằng chứng"], answer: 3, explain: "Báo cáo sớm giúp khoanh vùng, còn giữ bằng chứng phục vụ điều tra và khắc phục." }
  ],
  lab: {
    kind: "crypto",
    title: "Mã hóa Caesar và đo độ mạnh mật khẩu",
    lead: "Nhập một câu để xem kết quả mã hóa Caesar theo độ dịch, đồng thời thử các mật khẩu khác nhau và đọc thanh độ mạnh bên cạnh.",
    stageLabel: "Phòng lab mã hóa",
    controlNote: "Đổi độ dịch từ 1 đến 25 để thấy vòng dịch chữ cái, rồi thử mật khẩu ngắn và dài để so sánh độ mạnh.",
    note: "Caesar chỉ dịch chữ Latin không dấu nên câu tiếng Việt có dấu cần bảng mã UTF-8; thuật toán hiện đại như AES xử lý được mọi ký tự Unicode.",
    sample: "Hoc an toan thong tin 2026"
  },
  teacher: {
    students: [
      { name: "Nguyễn Đăng Khoa", progress: 87, score: 8.9, status: "Tốt", note: "Nhận diện phishing tốt, cần luyện thêm chữ ký số." },
      { name: "Trần Thu Huyền", progress: 62, score: 7.2, status: "Đang học", note: "Hiểu CIA nhưng còn nhầm salt với khóa." },
      { name: "Lê Văn Phúc", progress: 93, score: 9.2, status: "Tốt", note: "Phân tích sự cố mạch lạc, có thể dẫn nhóm thảo luận." },
      { name: "Phạm Ngọc Ánh", progress: 29, score: 5.5, status: "Cần hỗ trợ", note: "Chưa hoàn thành bài nhận thức lừa đảo." },
      { name: "Vũ Hải Đăng", progress: 74, score: 7.9, status: "Đang học", note: "Tiến bộ ở chương mật mã, cần thêm bài XSS." },
      { name: "Đỗ Khánh Vy", progress: 48, score: 6.4, status: "Đang học", note: "Nhầm mã hóa đối xứng với bất đối xứng." }
    ],
    submissions: [
      { student: "Nguyễn Đăng Khoa", lesson: "Bài nhận thức: bộ 5 email lừa đảo", time: "Hôm qua 21:15", status: "Chờ chấm" },
      { student: "Phạm Ngọc Ánh", lesson: "Phiếu phân tích độ mạnh mật khẩu", time: "Hôm qua 19:30", status: "Chờ chấm" },
      { student: "Lê Văn Phúc", lesson: "Bài mô tả tấn công SQL injection", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm thực hành lab mã hóa, mang theo laptop để thử Caesar và kiểm tra mật khẩu.",
      "Bài kiểm tra giữa kỳ gồm 40% trắc nghiệm khái niệm và 60% phân tích tình huống.",
      "Sinh viên chưa bật xác thực hai lớp cho tài khoản trường cần hoàn tất trước cuối tuần."
    ]
  },
  className: "An toàn thông tin – K24",
  brief: "BTL-24_securelearn-mon-an-toan-thong-tin.md"
};
