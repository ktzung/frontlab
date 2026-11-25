window.BTL_DATA = {
  id: "timeline",
  code: "BTL-09",
  name: "TimeLine",
  monogram: "TK",
  subject: "Lịch sử",
  level: "Phổ thông",
  group: "Ngôn ngữ & Xã hội",
  accent: "#a16207",
  accent2: "#78350f",
  font: "display",
  tagline: "Mỗi mốc lịch sử được nối với nguyên nhân và kết quả, không còn là con số phải học thuộc.",
  intro: "TimeLine đặt các sự kiện lên một trục thời gian có thể bấm mở chi tiết, rồi nối chúng bằng sơ đồ nhân quả để thấy vì sao sự kiện này dẫn tới sự kiện kia. Học sinh ôn bằng câu hỏi gắn bối cảnh, giáo viên dựng trục và giao bài ngay trên cùng dữ liệu.",
  hero: { title: "Lịch sử", highlight: "đọc theo chuỗi nhân quả" },
  heroBadge: "Trục thời gian · Sơ đồ nhân quả · Tư liệu",
  labShort: "TRỤC THỜI GIAN",
  labTag: "PHÒNG LAB",
  practiceTag: "THẺ MỐC",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài chuyên đề" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho Lịch sử: nhìn dòng thời gian, truy nguyên nhân và ôn bằng câu hỏi có bối cảnh.",
  pathLead: "Đi từ giai đoạn Pháp xâm lược, qua cách mạng và kháng chiến, đến thống nhất đất nước. Mỗi chương kết thúc bằng một bài tập nối chuỗi nhân quả.",
  features: [
    { badge: "01", title: "Trục thời gian tương tác", desc: "Chín mốc từ 1858 đến 1975 xếp theo trục ngang, bấm vào mốc để đọc diễn giải hai câu và các thẻ nguyên nhân, kết quả." },
    { badge: "02", title: "Sơ đồ nhân quả", desc: "Mỗi sự kiện được nối với sự kiện dẫn đến nó và sự kiện nó tạo ra, giúp truy vết một chuỗi thay vì học rời từng mốc." },
    { badge: "03", title: "Quiz có bối cảnh", desc: "Mười câu hỏi về mốc, nhân vật và văn bản, mỗi câu có giải thích gắn với tình hình lịch sử cụ thể." }
  ],
  life: [
    {
      title: "Mở quán ở ngã tư đông khách",
      scene: "Một người mở quán cà phê và chọn ngã tư có nhiều trường học, dù phải đi xa hơn chỗ gần nhà. Quán đông vì chỗ đó sẵn khách qua lại, chứ không hẳn vì quán ngon hơn.",
      connect: "Việc Pháp chọn Đà Nẵng đọc theo hai lớp như vậy: nguyên nhân sâu xa là nhu cầu thị trường và nguyên liệu, còn lý do trực tiếp là cửa ngõ vào kinh đô, đường biển lại ngắn."
    },
    {
      title: "Ba nhóm cùng làm một dự án",
      scene: "Ba nhóm sinh viên cùng làm một dự án nhưng mỗi nhóm tự họp, tự đặt tiến độ, nên ghép lại thì lệch hướng. Khi gộp thành một nhóm với một kế hoạch chung, việc mới chạy được.",
      connect: "Hội nghị hợp nhất đầu năm 1930 làm đúng việc đó: gộp ba tổ chức cộng sản thành một, chấm dứt chia rẽ về đường lối để lực lượng không tự triệt tiêu nhau."
    },
    {
      title: "Bếp nhà và người đi thi",
      scene: "Trong một nhà có người chuẩn bị thi đại học, cả nhà chia việc: người nấu cơm, người giữ yên lặng, người chở đi thi. Người đi thi học tốt một phần vì phía sau không phải lo gì.",
      connect: "Hậu phương miền Bắc đóng vai trò đó với tiền tuyến: hậu phương vững mới nuôi được tuyến Trường Sơn trước một đối thủ có ưu thế vũ khí."
    }
  ],
  modules: [
    {
      title: "Việt Nam từ 1858 đến 1918",
      summary: "Nguyên nhân Pháp xâm lược, phong trào Cần Vương và những biến đổi xã hội dưới khai thác thuộc địa.",
      lessons: [
        {
          id: "ls1",
          title: "Vì sao Pháp chọn Đà Nẵng",
          minutes: 20,
          level: "Cơ bản",
          summary: "Phân tích nguyên nhân sâu xa, nguyên nhân trực tiếp và lý do chọn điểm tấn công đầu tiên.",
          points: ["Chủ nghĩa tư bản cần thị trường và nguyên liệu nên đẩy mạnh xâm lược thuộc địa.", "Đà Nẵng gần Huế, có cảng nước sâu và là cửa ngõ vào kinh đô.", "Triều Nguyễn kháng cự nhưng thiếu phối hợp giữa các địa phương."],
          steps: [
            { title: "Tách ba loại nguyên nhân", body: "Nguyên nhân sâu xa là nhu cầu thị trường của chủ nghĩa tư bản Pháp; nguyên nhân trực tiếp là việc triều Nguyễn tiếp tục cấm đạo và hạn chế thương mại; duyên cớ là vụ các giáo sĩ bị xử. Ba lớp này thường bị gộp làm một, khiến bài trả lời thiếu chiều sâu. Trả lời đúng loại nguyên nhân cũng là điều kiện để phân tích sự kiện về sau.", tip: "Ghi ba dòng riêng: sâu xa, trực tiếp, duyên cớ." },
            { title: "Đọc lý do chọn Đà Nẵng", body: "Đà Nẵng cách Huế khoảng một trăm ki lô mét, cảng kín gió, lại nằm trên đường vào kinh đô. Pháp tính đánh nhanh để buộc triều đình đầu hàng, nhưng gặp sức kháng cự của Nguyễn Tri Phương nên phải chuyển hướng vào Gia Định. Thất bại này cho thấy kế hoạch đánh nhanh thắng nhanh đã bị phá vỡ ngay từ đầu.", tip: "Dùng bản đồ để thấy khoảng cách Đà Nẵng và Huế." },
            { title: "Nối sang hệ quả pháp lý", body: "Sau khi chiếm ba tỉnh miền Đông, triều Nguyễn ký Hiệp ước Nhâm Tuất năm 1862, nhượng đất và mở cửa thương mại. Đây là mốc chuyển từ kháng cự sang nhượng bộ từng phần. Hiểu bước ngoặt này giúp giải thích vì sao phong trào Cần Vương bùng lên sau đó.", tip: "Nhớ mốc 1862 gắn với tên Hiệp ước Nhâm Tuất, không nhầm với 1884." }
          ],
          formula: "Nguyên nhân sâu xa + trực tiếp + duyên cớ"
        },
        {
          id: "ls2",
          title: "Phong trào Cần Vương",
          minutes: 22,
          level: "Trung bình",
          summary: "Từ chiếu Cần Vương đến các cuộc khởi nghĩa tiêu biểu và lý do phong trào thất bại.",
          points: ["Chiếu Cần Vương biến kháng chiến triều đình thành kháng chiến toàn dân.", "Các cuộc khởi nghĩa mạnh nhưng thiếu chỉ huy thống nhất.", "Thiếu vũ khí và bị cô lập là hai nguyên nhân thất bại chính."],
          steps: [
            { title: "Bối cảnh ra đời chiếu", body: "Năm 1885, kinh thành Huế thất thủ, Tôn Thất Thuyết đưa vua Hàm Nghi ra Tân Sở và hạ chiếu Cần Vương kêu gọi sĩ phu, nhân dân giúp vua cứu nước. Chiếu này chuyển mục tiêu từ bảo vệ triều đình sang giành lại độc lập. Đây là lý do phong trào lan rộng ra cả nước thay vì chỉ quanh kinh đô.", tip: "Nhớ năm 1885 đi với hai sự kiện: thất thủ kinh đô và chiếu Cần Vương." },
            { title: "So sánh các khởi nghĩa", body: "Ba Đình đánh theo thế phòng ngự cứng, Bãi Sậy dùng du kích và địa hình đồng chiêm, Hương Khê tổ chức thành đội ngũ và kéo dài đến 1896. Mỗi cuộc chọn cách đánh phù hợp địa bàn nhưng đều không vượt được giới hạn địa phương. So sánh cách đánh giúp thấy sự sáng tạo của nghĩa quân.", tip: "Lập bảng ba cột: địa bàn, cách đánh, thời gian tồn tại." },
            { title: "Giải thích thất bại", body: "Phong trào thiếu một bộ chỉ huy thống nhất nên không gây được đòn phối hợp lớn. Vũ khí thô sơ, bị phong tỏa và không nhận được hỗ trợ từ bên ngoài cũng là trở ngại quyết định. Kết luận quan trọng là thiếu đường lối mới, chứ không phải thiếu tinh thần chiến đấu.", tip: "Tách nguyên nhân khách quan và chủ quan khi kết luận." }
          ],
          formula: "1885: kinh đô thất thủ, chiếu Cần Vương"
        },
        {
          id: "ls3",
          title: "Khai thác thuộc địa và phân hóa xã hội",
          minutes: 24,
          level: "Trung bình",
          summary: "Chính sách khai thác lần thứ nhất đã làm thay đổi cơ cấu kinh tế và tạo ra các tầng lớp mới.",
          points: ["Pháp đầu tư vào khai mỏ, đồn điền và đường sắt để lấy nguyên liệu.", "Nông dân bị bần cùng hóa, công nhân và tư sản dân tộc xuất hiện.", "Mâu thuẫn dân tộc và mâu thuẫn giai cấp cùng tồn tại."],
          steps: [
            { title: "Đọc mục tiêu của chính sách", body: "Pháp biến Việt Nam thành nơi cung cấp nguyên liệu và tiêu thụ hàng hóa, nên tập trung vào khai mỏ, cao su, gạo và đường sắt. Cơ cấu kinh tế vì thế bị lệch, phụ thuộc vào xuất khẩu thô. Đây là nguyên nhân dài hạn của tình trạng nghèo và thiếu công nghiệp nặng.", tip: "Gắn mỗi chính sách với mục tiêu kinh tế của Pháp." },
            { title: "Theo dõi phân hóa xã hội", body: "Nông dân mất đất trở thành tá điền hoặc phu đồn điền; công nhân hình thành gắn với mỏ, đồn điền, nhà máy; tầng lớp tư sản dân tộc và tiểu tư sản xuất hiện ở đô thị. Mỗi tầng lớp mới có lợi ích riêng, tạo cơ sở cho các khuynh hướng cứu nước khác nhau. Không có sự phân hóa này thì không giải thích được phong trào đầu thế kỷ 20.", tip: "Vẽ sơ đồ ba tầng lớp mới kèm lợi ích đặc trưng." },
            { title: "Xác định mâu thuẫn chính", body: "Mâu thuẫn giữa toàn thể dân tộc với thực dân là mâu thuẫn bao trùm, còn mâu thuẫn giữa nông dân và địa chủ là mâu thuẫn bên trong. Các phong trào thất bại thường do chỉ giải quyết một trong hai. Đây là cơ sở để lý giải vì sao con đường cứu nước sau 1930 phải kết hợp cả hai nhiệm vụ.", tip: "Phân biệt mâu thuẫn bao trùm và mâu thuẫn bộ phận." }
          ],
          formula: "Kinh tế lệch + xã hội phân hóa = tiền đề cách mạng"
        }
      ]
    },
    {
      title: "Cách mạng và kháng chiến 1930 đến 1954",
      summary: "Từ hợp nhất các tổ chức cộng sản đến Cách mạng tháng Tám và chiến thắng Điện Biên Phủ.",
      lessons: [
        {
          id: "cm1",
          title: "Hội nghị hợp nhất năm 1930",
          minutes: 20,
          level: "Cơ bản",
          summary: "Ba tổ chức cộng sản ra đời năm 1929 rồi hợp nhất đầu năm 1930, chấm dứt chia rẽ về đường lối.",
          points: ["Ba tổ chức cùng ra đời năm 1929 nhưng hoạt động riêng lẻ.", "Hội nghị Cửu Long thống nhất thành một đảng duy nhất.", "Cương lĩnh đầu tiên xác định hai nhiệm vụ phản đế và phản phong."],
          steps: [
            { title: "Vì sao phải hợp nhất", body: "Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn cùng tuyên truyền cách mạng nhưng hay phê phán lẫn nhau. Sự chia rẽ làm phân tán lực lượng ngay khi phong trào công nhân đang lên. Hợp nhất là yêu cầu thực tế của phong trào, không chỉ là ý muốn cá nhân.", tip: "Nhớ ba tên tổ chức và năm 1929 trước khi nhớ mốc 1930." },
            { title: "Nội dung hội nghị", body: "Đầu năm 1930, hội nghị hợp nhất họp ở Cửu Long (Hương Cảng) dưới sự chủ trì của Nguyễn Ái Quốc, thống nhất lấy tên Đảng Cộng sản Việt Nam. Hội nghị thông qua Chính cương vắn tắt, Sách lược vắn tắt do Người soạn. Văn kiện xác định cách mạng Việt Nam phải trải qua hai giai đoạn.", tip: "Gắn tên văn kiện với nội dung hai giai đoạn cách mạng." },
            { title: "Ý nghĩa với phong trào", body: "Từ đây phong trào có đường lối thống nhất và tổ chức tập trung, tạo điều kiện cho cao trào 1930 đến 1931. Đảng ra đời cũng đánh dấu bước chuyển từ đấu tranh tự phát sang tự giác. Đây là kết quả tất yếu của quá trình truyền bá lí luận cách mạng trước đó.", tip: "Dùng từ khóa chuyển từ tự phát sang tự giác khi kết luận." }
          ],
          formula: "1929 ba tổ chức, 1930 một Đảng"
        },
        {
          id: "cm2",
          title: "Cao trào 1930 đến 1931 và Xô viết Nghệ Tĩnh",
          minutes: 22,
          level: "Trung bình",
          summary: "Đỉnh cao của phong trào công nông với hình thức chính quyền mới ra đời ở hai tỉnh Nghệ An và Hà Tĩnh.",
          points: ["Phong trào nổ ra nhân ngày Quốc tế Lao động 1 tháng 5 năm 1930.", "Chính quyền Xô viết thực hiện các quyền lợi thiết thực cho nông dân.", "Thực dân Pháp khủng bố dữ dội sau cao trào."],
          steps: [
            { title: "Nhận diện nguyên nhân bùng nổ", body: "Ảnh hưởng của cuộc khủng hoảng kinh tế thế giới làm đời sống công nhân, nông dân sa sút, cộng với đường lối mới của Đảng. Phong trào bắt đầu từ các cuộc bãi công rồi lan sang nông thôn. Đỉnh điểm là các cuộc biểu tình ngày 1 tháng 5 năm 1930.", tip: "Nối khủng hoảng kinh tế thế giới với đời sống trong nước." },
            { title: "Hiểu chính quyền Xô viết", body: "Ở những nơi chính quyền địch tan rã, ban chấp hành nông hội đứng ra quản lý, chia ruộng công, xóa nợ, mở lớp học chữ quốc ngữ. Đây là hình thức chính quyền sơ khai của nhân dân lao động, dù chỉ tồn tại vài tháng. Tên gọi Xô viết lấy từ hình thức chính quyền công nông ở nước Nga.", tip: "Ghi ba việc làm cụ thể của chính quyền Xô viết." },
            { title: "Đánh giá kết quả và hạn chế", body: "Cao trào chứng minh khả năng lãnh đạo của Đảng và tinh thần đấu tranh của công nông, đồng thời để lại nhiều bài học về tổ chức. Hạn chế là lực lượng địch còn mạnh, phong trào bị đàn áp và tổn thất nặng. Từ đây Đảng rút ra yêu cầu xây dựng lực lượng và chuyển hướng đấu tranh linh hoạt.", tip: "Mỗi nhận định kết quả nên đi kèm một hạn chế tương ứng." }
          ],
          formula: "1 tháng 5 năm 1930: đỉnh cao phong trào công nông"
        },
        {
          id: "cm3",
          title: "Cách mạng tháng Tám và thời cơ",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt thời cơ khách quan với sự chuẩn bị chủ quan trong thắng lợi tháng Tám năm 1945.",
          points: ["Nhật đầu hàng Đồng minh tạo khoảng trống quyền lực.", "Thắng lợi đến từ mười lăm năm chuẩn bị lực lượng.", "Khởi nghĩa giành chính quyền diễn ra nhanh, ít đổ máu."],
          steps: [
            { title: "Đọc thời cơ", body: "Khi Nhật tuyên bố đầu hàng ngày 15 tháng 8 năm 1945, bộ máy thống trị của Nhật ở Đông Dương tê liệt, còn quân Đồng minh chưa vào. Khoảng trống quyền lực ấy chỉ tồn tại trong thời gian ngắn. Đây là điều kiện khách quan, không phải nguyên nhân duy nhất của thắng lợi.", tip: "Nhớ mốc 15 tháng 8 năm 1945 gắn với việc Nhật đầu hàng." },
            { title: "Đọc sự chuẩn bị", body: "Từ các phong trào 1930 đến 1931, 1936 đến 1939 và Việt Minh, lực lượng chính trị và căn cứ địa đã được xây dựng ở nhiều địa phương. Hội nghị toàn quốc tháng 8 năm 1945 quyết định tổng khởi nghĩa và chọn Hà Nội mở đầu. Không có chuẩn bị ấy, thời cơ sẽ trôi qua mà không dùng được.", tip: "Liệt kê ba mốc chuẩn bị chính trước khi vào phần thắng lợi." },
            { title: "Đánh giá quy mô và ý nghĩa", body: "Khởi nghĩa lan từ Hà Nội, Huế, Sài Gòn ra các tỉnh trong khoảng hai tuần, chính quyền về tay nhân dân. Ngày 2 tháng 9 năm 1945, Tuyên ngôn Độc lập được đọc tại Quảng trường Ba Đình. Thắng lợi mở ra kỷ nguyên độc lập nhưng cũng đặt đất nước vào tình thế ngàn cân treo sợi tóc.", tip: "Kết bài nên nêu cả thuận lợi lẫn thách thức sau thắng lợi." }
          ],
          formula: "Thời cơ khách quan + chuẩn bị chủ quan = thắng lợi"
        }
      ]
    },
    {
      title: "Kháng chiến chống Mỹ 1954 đến 1975",
      summary: "Cục diện hai miền, hậu phương lớn và các bước ngoặt dẫn tới thống nhất đất nước.",
      lessons: [
        {
          id: "kc1",
          title: "Hiệp định Genève và cục diện hai miền",
          minutes: 20,
          level: "Cơ bản",
          summary: "Hiệp định năm 1954 chia cắt tạm thời và mở ra hai chiến lược khác nhau ở hai miền.",
          points: ["Hiệp định công nhận độc lập, chủ quyền và toàn vẹn lãnh thổ.", "Vĩ tuyến 17 chỉ là giới tuyến tạm thời, không phải biên giới.", "Mỹ nhanh chóng thay chân Pháp ở miền Nam."],
          steps: [
            { title: "Nội dung cốt lõi", body: "Hiệp định Genève ngày 21 tháng 7 năm 1954 quy định ngừng bắn, tập kết quân hai bên, và dự kiến tổng tuyển cử thống nhất vào tháng 7 năm 1956. Các bên cam kết tôn trọng độc lập và toàn vẹn lãnh thổ Việt Nam. Điều quan trọng là giới tuyến chỉ có tính tạm thời.", tip: "Nhớ điều kiện tổng tuyển cử dự kiến năm 1956." },
            { title: "Vì sao không có tổng tuyển cử", body: "Chính quyền miền Nam do Mỹ hậu thuẫn từ chối hiệp thương, nên cuộc tổng tuyển cử không diễn ra. Đất nước bị chia cắt lâu hơn dự kiến, kéo theo hai nhiệm vụ chiến lược song song. Đây là nguyên nhân trực tiếp của giai đoạn kháng chiến tiếp theo.", tip: "Gắn việc từ chối hiệp thương với âm mưu chia cắt lâu dài." },
            { title: "Hai nhiệm vụ chiến lược", body: "Miền Bắc tiến hành cách mạng xã hội chủ nghĩa và trở thành hậu phương lớn; miền Nam tiếp tục cách mạng dân tộc dân chủ nhân dân. Hai nhiệm vụ khác nhau nhưng gắn bó, cùng hướng tới thống nhất. Hiểu quan hệ này là chìa khóa để giải thích mọi thắng lợi sau đó.", tip: "Vẽ sơ đồ quan hệ giữa hậu phương và tiền tuyến." }
          ],
          formula: "Vĩ tuyến 17: giới tuyến tạm thời"
        },
        {
          id: "kc2",
          title: "Hậu phương miền Bắc và đường Trường Sơn",
          minutes: 22,
          level: "Trung bình",
          summary: "Hậu phương vững là điều kiện để tiền tuyến đứng vững trước một đối thủ có ưu thế vũ khí.",
          points: ["Miền Bắc vừa sản xuất vừa chiến đấu, chịu ném bom nhưng vẫn giữ nhịp.", "Đường Trường Sơn là tuyến vận tải chiến lược xuyên dãy.", "Chi viện sức người, sức của từ Bắc vào Nam tăng dần theo năm."],
          steps: [
            { title: "Đọc nhiệm vụ hậu phương", body: "Miền Bắc phải vừa khôi phục kinh tế sau chiến tranh, vừa chi viện cho miền Nam với khối lượng ngày càng lớn. Các phong trào thi đua và hợp tác xã nông nghiệp giúp giữ ổn định lương thực. Hậu phương ổn định là điều kiện để tiền tuyến chiến đấu lâu dài.", tip: "Ghi rõ hai chữ vừa: vừa sản xuất, vừa chiến đấu." },
            { title: "Vai trò đường Trường Sơn", body: "Tuyến đường được mở từ 1959, nối miền Bắc với Tây Nguyên và Đông Nam Bộ qua dãy Trường Sơn cùng tuyến đường biển. Đây là tuyến huyết mạch đưa vũ khí, hàng hóa và bộ đội vào chiến trường. Mọi kế hoạch tác chiến lớn đều dựa vào khả năng thông tuyến của con đường này.", tip: "Nhớ năm 1959 gắn với việc mở tuyến chi viện chiến lược." },
            { title: "Đánh giá ý nghĩa tổng hợp", body: "Sức mạnh hậu phương không chỉ là số lượng hàng hóa mà còn là khả năng tổ chức và chịu đựng. Việc miền Bắc tiếp tục sản xuất dưới bom đạn cho thấy năng lực điều hành nền kinh tế thời chiến. Đây là yếu tố khiến so sánh tương quan không chỉ dựa vào vũ khí.", tip: "Khi so sánh lực lượng, phải tính cả hậu phương." }
          ],
          formula: "Hậu phương vững thì tiền tuyến mới trụ"
        },
        {
          id: "kc3",
          title: "Từ Mậu Thân 1968 đến Đại thắng 1975",
          minutes: 24,
          level: "Nâng cao",
          summary: "Ba bước ngoặt lớn: tiến công 1968, Hiệp định Paris 1973 và chiến dịch Hồ Chí Minh 1975.",
          points: ["1968 làm lung lay ý chí chiến tranh của Mỹ và mở đường đàm phán.", "1973 buộc Mỹ rút quân, tạo tương quan có lợi.", "1975 là kết quả của việc chọn đúng thời cơ chiến lược."],
          steps: [
            { title: "Bước ngoặt 1968", body: "Đêm 30 rạng 31 tháng 1 năm 1968, quân và dân miền Nam đồng loạt tiến công vào các đô thị, trong đó có Sài Gòn. Về mục tiêu quân sự, cuộc tiến công gây tổn thất và không giữ được đô thị lâu, nhưng về chính trị đã làm rõ giới hạn của chiến tranh cục bộ. Mỹ buộc phải xuống thang và ngồi vào bàn đàm phán.", tip: "Tách kết quả quân sự và kết quả chính trị khi đánh giá 1968." },
            { title: "Ý nghĩa Hiệp định Paris", body: "Hiệp định ký ngày 27 tháng 1 năm 1973 buộc Mỹ cam kết tôn trọng độc lập, chủ quyền và rút hết quân. So sánh tương quan trên chiến trường sau đó thay đổi rõ rệt vì mất đi lực lượng chiến đấu trực tiếp của Mỹ. Đây là điều kiện để miền Nam mở các chiến dịch lớn.", tip: "Nhớ ngày 27 tháng 1 năm 1973, phân biệt với tháng 3 cùng năm khi quân Mỹ rút hết." },
            { title: "Chọn thời cơ 1975", body: "Sau thắng lợi Phước Long đầu năm 1975, Bộ Chính trị nhận định thời cơ chiến lược đã đến và quyết định giải phóng miền Nam trong năm 1975. Chiến dịch Tây Nguyên mở màn, rồi chiến dịch Hồ Chí Minh kết thúc ngày 30 tháng 4. Việc chọn đúng thời điểm giúp rút ngắn chiến tranh và hạn chế tổn thất.", tip: "Nêu rõ hai mốc: mở màn Tây Nguyên và kết thúc 30 tháng 4 năm 1975." }
          ],
          formula: "1968 mở đường, 1973 đổi tương quan, 1975 kết thúc"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Nguyên nhân sâu xa", back: "Điều kiện nền tảng, tích tụ lâu dài, làm sự kiện tất yếu xảy ra.", hint: "Không phải cái xảy ra ngay trước sự kiện.", example: "Nhu cầu thị trường của chủ nghĩa tư bản Pháp." },
    { front: "Nguyên nhân trực tiếp", back: "Yếu tố xuất hiện ngay trước sự kiện và châm ngòi cho nó.", hint: "Cái bấm cò.", example: "Việc triều Nguyễn tiếp tục cấm đạo." },
    { front: "Duyên cớ", back: "Cái cớ được bên gây chiến nêu ra để biện minh, thường không phải nguyên nhân thật.", hint: "Cớ, không phải nguyên nhân.", example: "Vụ giáo sĩ bị xử được Pháp viện dẫn." },
    { front: "Thời cơ", back: "Khoảng thời gian có điều kiện thuận lợi để hành động và thường ngắn.", hint: "Đến rồi đi rất nhanh.", example: "Khoảng trống quyền lực sau khi Nhật đầu hàng năm 1945." },
    { front: "Tương quan lực lượng", back: "So sánh giữa các bên về quân số, vũ khí, hậu phương và chính trị.", hint: "Không chỉ đếm vũ khí.", example: "Sau 1973, Mỹ rút quân nên tương quan thay đổi." },
    { front: "Hậu phương", back: "Vùng căn cứ cung cấp người, của cải và chỗ dựa chính trị cho tiền tuyến.", hint: "Phía sau chiến tuyến.", example: "Miền Bắc xây dựng chủ nghĩa xã hội và chi viện miền Nam." },
    { front: "Chiến tranh nhân dân", back: "Cách tiến hành chiến tranh dựa vào toàn dân, kết hợp lực lượng vũ trang ba thứ quân.", hint: "Toàn dân tham gia.", example: "Du kích, bộ đội địa phương và bộ đội chủ lực phối hợp." },
    { front: "Hiệp ước Nhâm Tuất", back: "Hiệp ước năm 1862, triều Nguyễn nhượng ba tỉnh miền Đông Nam Kỳ cho Pháp.", hint: "Mốc đầu tiên của nhượng bộ.", example: "Nhượng Gia Định, Định Tường, Biên Hòa." },
    { front: "Xô viết Nghệ Tĩnh", back: "Chính quyền cách mạng sơ khai của nông dân ở Nghệ An và Hà Tĩnh giai đoạn 1930 đến 1931.", hint: "Tên lấy từ chính quyền công nông nước Nga.", example: "Chia ruộng công, xóa nợ, mở lớp học chữ quốc ngữ." },
    { front: "Điện Biên Phủ", back: "Chiến dịch kết thúc ngày 7 tháng 5 năm 1954, buộc Pháp ký Hiệp định Genève.", hint: "Mốc nối chiến thắng quân sự với thắng lợi ngoại giao.", example: "Tập đoàn cứ điểm bị tiêu diệt sau 56 ngày đêm." },
    { front: "Hiệp định Paris", back: "Hiệp định ký ngày 27 tháng 1 năm 1973, buộc Mỹ rút quân và tôn trọng quyền tự quyết.", hint: "Điều kiện để mở các chiến dịch lớn năm 1975.", example: "Mỹ cam kết rút hết quân trong 60 ngày." },
    { front: "Chiến dịch Hồ Chí Minh", back: "Chiến dịch cuối cùng, kết thúc ngày 30 tháng 4 năm 1975, giải phóng miền Nam.", hint: "Đặt theo tên vị lãnh tụ, mở màn từ Tây Nguyên.", example: "Năm cánh quân tiến vào Sài Gòn." }
  ],
  quiz: [
    { q: "Pháp nổ súng tấn công Đà Nẵng mở đầu xâm lược vào năm nào?", options: ["1858", "1859", "1862", "1884"], answer: 0, explain: "Ngày 1 tháng 9 năm 1858, liên quân Pháp và Tây Ban Nha tấn công Đà Nẵng, mở đầu quá trình xâm lược Việt Nam." },
    { q: "Chiếu Cần Vương được ban hành trong bối cảnh nào?", options: ["Sau Hiệp ước Nhâm Tuất", "Sau khi Pháp chiếm Gia Định", "Sau phong trào Duy Tân", "Sau khi kinh thành Huế thất thủ năm 1885"], answer: 3, explain: "Năm 1885 kinh thành Huế thất thủ, vua Hàm Nghi ra Tân Sở và hạ chiếu Cần Vương kêu gọi toàn dân cứu nước." },
    { q: "Đảng Cộng sản Việt Nam được thành lập tại đâu?", options: ["Hà Nội", "Quảng Châu", "Cửu Long, Hương Cảng", "Sài Gòn"], answer: 2, explain: "Hội nghị hợp nhất đầu năm 1930 họp ở Cửu Long (Hương Cảng), dưới sự chủ trì của Nguyễn Ái Quốc." },
    { q: "Cao trào cách mạng 1930 đến 1931 đạt đỉnh cao vào ngày nào?", options: ["Ngày 3 tháng 2 năm 1930", "Ngày 1 tháng 5 năm 1930", "Ngày 12 tháng 9 năm 1930", "Ngày 19 tháng 5 năm 1931"], answer: 1, explain: "Các cuộc biểu tình lớn trong ngày Quốc tế Lao động 1 tháng 5 năm 1930 đánh dấu đỉnh cao của cao trào." },
    { q: "Hiệp định Genève về Việt Nam được ký năm nào?", options: ["1951", "1953", "1954", "1956"], answer: 2, explain: "Hiệp định được ký ngày 21 tháng 7 năm 1954, sau chiến thắng Điện Biên Phủ, với giới tuyến tạm thời ở vĩ tuyến 17." },
    { q: "Yếu tố nào tạo thời cơ khách quan cho Cách mạng tháng Tám năm 1945?", options: ["Pháp đầu hàng Đức", "Mỹ ném bom Hà Nội", "Liên Xô tuyên chiến với Nhật", "Nhật tuyên bố đầu hàng Đồng minh"], answer: 3, explain: "Khi Nhật đầu hàng ngày 15 tháng 8 năm 1945, bộ máy thống trị của Nhật tê liệt, tạo khoảng trống quyền lực ngắn." },
    { q: "Chiến dịch Điện Biên Phủ kết thúc thắng lợi vào ngày nào?", options: ["Ngày 13 tháng 3 năm 1954", "Ngày 7 tháng 5 năm 1954", "Ngày 21 tháng 7 năm 1954", "Ngày 10 tháng 10 năm 1954"], answer: 1, explain: "Chiến dịch mở màn ngày 13 tháng 3 và kết thúc ngày 7 tháng 5 năm 1954 sau 56 ngày đêm chiến đấu." },
    { q: "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra vào năm nào?", options: ["1965", "1972", "1968", "1975"], answer: 2, explain: "Đêm 30 rạng 31 tháng 1 năm 1968, quân và dân miền Nam đồng loạt tiến công vào các đô thị lớn." },
    { q: "Hiệp định Paris buộc Mỹ cam kết điều gì?", options: ["Tăng viện trợ cho miền Nam", "Công nhận vĩ tuyến 17 là biên giới", "Chuyển giao chính quyền cho Liên hợp quốc", "Rút hết quân và tôn trọng quyền tự quyết của nhân dân Việt Nam"], answer: 3, explain: "Hiệp định ký ngày 27 tháng 1 năm 1973 buộc Mỹ rút quân, tôn trọng độc lập, chủ quyền và quyền tự quyết." },
    { q: "Chiến dịch Hồ Chí Minh kết thúc vào ngày nào?", options: ["Ngày 30 tháng 4 năm 1975", "Ngày 27 tháng 1 năm 1975", "Ngày 10 tháng 3 năm 1975", "Ngày 2 tháng 9 năm 1975"], answer: 0, explain: "Chiến dịch mở màn từ Tây Nguyên và kết thúc trưa ngày 30 tháng 4 năm 1975, miền Nam hoàn toàn giải phóng." }
  ],
  lab: {
    kind: "timeline",
    title: "Chín mốc từ xâm lược đến thống nhất",
    lead: "Bấm vào từng mốc để đọc diễn giải và các thẻ nguyên nhân, kết quả. Dùng cột phải để truy vết chuỗi: mốc trước tạo điều kiện gì cho mốc sau.",
    stageLabel: "Dòng thời gian 1858 đến 1975",
    controlNote: "Chọn mốc trên trục, sau đó đọc phần chi tiết và nhãn để nối thành một chuỗi nhân quả liền mạch.",
    note: "Chín mốc được chọn vì mỗi mốc đều mở ra một điều kiện mới cho mốc kế tiếp, không chỉ là mốc ghi nhớ rời.",
    events: [
      { year: "1858", title: "Pháp tấn công Đà Nẵng", desc: "Liên quân Pháp và Tây Ban Nha nổ súng ngày 1 tháng 9, mở đầu xâm lược.", detail: "Kế hoạch đánh nhanh vào kinh đô bị chặn tại Đà Nẵng, buộc Pháp chuyển hướng vào Gia Định. Đến năm 1862, triều Nguyễn ký Hiệp ước Nhâm Tuất nhượng ba tỉnh miền Đông.", tags: ["Nguyên nhân sâu xa", "Mở đầu"] },
      { year: "1885", title: "Kinh đô thất thủ, chiếu Cần Vương", desc: "Huế thất thủ, vua Hàm Nghi ra Tân Sở và kêu gọi toàn dân cứu nước.", detail: "Chiếu Cần Vương chuyển kháng chiến từ việc bảo vệ triều đình thành phong trào toàn dân. Các khởi nghĩa Ba Đình, Bãi Sậy, Hương Khê nối tiếp đến năm 1896.", tags: ["Nguyên nhân", "Toàn dân"] },
      { year: "1911", title: "Nguyễn Tất Thành ra đi tìm đường cứu nước", desc: "Ngày 5 tháng 6, Nguyễn Tất Thành rời bến Nhà Rồng trên con tàu sang Pháp.", detail: "Hành trình qua nhiều châu lục giúp Người nhận ra con đường cứu nước phải gắn với cách mạng vô sản. Đây là tiền đề tư tưởng cho bước chuyển sau năm 1920.", tags: ["Bước ngoặt", "Tư tưởng"] },
      { year: "1930", title: "Thành lập Đảng Cộng sản Việt Nam", desc: "Hội nghị hợp nhất tại Cửu Long thống nhất các tổ chức cộng sản thành một đảng.", detail: "Hội nghị thông qua Chính cương vắn tắt và Sách lược vắn tắt, xác định hai nhiệm vụ phản đế và phản phong. Phong trào từ đây chuyển từ tự phát sang tự giác.", tags: ["Kết quả", "Đường lối"] },
      { year: "1945", title: "Cách mạng tháng Tám thành công", desc: "Tổng khởi nghĩa thắng lợi, ngày 2 tháng 9 đọc Tuyên ngôn Độc lập tại Ba Đình.", detail: "Nhật đầu hàng Đồng minh tạo khoảng trống quyền lực, còn thắng lợi quyết định đến từ mười lăm năm chuẩn bị lực lượng. Nước Việt Nam Dân chủ Cộng hòa ra đời.", tags: ["Thời cơ", "Kết quả"] },
      { year: "1954", title: "Chiến thắng Điện Biên Phủ", desc: "Ngày 7 tháng 5, tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt hoàn toàn.", detail: "Thắng lợi quân sự buộc Pháp ký Hiệp định Genève ngày 21 tháng 7, công nhận độc lập và toàn vẹn lãnh thổ. Giới tuyến 17 chỉ là tạm thời.", tags: ["Kết quả", "Ngoại giao"] },
      { year: "1968", title: "Tổng tiến công Tết Mậu Thân", desc: "Đêm 30 rạng 31 tháng 1, quân và dân miền Nam đồng loạt tiến công các đô thị.", detail: "Cuộc tiến công không giữ được đô thị lâu nhưng làm lung lay ý chí chiến tranh của Mỹ. Mỹ buộc xuống thang và mở đàm phán tại Paris.", tags: ["Bước ngoặt", "Chính trị"] },
      { year: "1973", title: "Hiệp định Paris được ký kết", desc: "Ngày 27 tháng 1, Hiệp định về chấm dứt chiến tranh và lập lại hòa bình được ký.", detail: "Mỹ cam kết rút hết quân và tôn trọng quyền tự quyết của nhân dân miền Nam. Tương quan trên chiến trường thay đổi có lợi cho cách mạng.", tags: ["Kết quả", "Ngoại giao"] },
      { year: "1975", title: "Chiến dịch Hồ Chí Minh toàn thắng", desc: "Ngày 30 tháng 4, chiến dịch kết thúc, miền Nam hoàn toàn giải phóng.", detail: "Thắng lợi kết thúc 21 năm kháng chiến chống Mỹ và mở ra thời kỳ đất nước thống nhất. Bài học lớn là chọn đúng thời cơ chiến lược.", tags: ["Kết quả", "Thống nhất"] }
    ]
  },
  teacher: {
    students: [
      { name: "Trần Minh Khang", progress: 82, score: 8.4, status: "Tốt", note: "Nối chuỗi nhân quả tốt, cần nhớ chính xác ngày tháng." },
      { name: "Nguyễn Thảo Nhi", progress: 58, score: 7.2, status: "Đang học", note: "Hay nhầm Hiệp ước Nhâm Tuất với Hiệp ước Patenôtre." },
      { name: "Lê Quang Dũng", progress: 90, score: 9.0, status: "Tốt", note: "Có thể nhận đề phân tích nguyên nhân thắng lợi." },
      { name: "Phạm Thu Hà", progress: 26, score: 5.4, status: "Cần hỗ trợ", note: "Chưa hoàn thành bài giai đoạn 1858 đến 1918." },
      { name: "Vũ Hoài Nam", progress: 65, score: 7.6, status: "Đang học", note: "Trả lời đúng mốc nhưng thiếu phần ý nghĩa." },
      { name: "Đỗ Thanh Tâm", progress: 49, score: 6.6, status: "Đang học", note: "Nên ôn lại bối cảnh Hiệp định Genève." }
    ],
    submissions: [
      { student: "Trần Minh Khang", lesson: "Bài tự luận: nguyên nhân thắng lợi 1975", time: "Hôm qua 21:35", status: "Chờ chấm" },
      { student: "Phạm Thu Hà", lesson: "Phiếu trục thời gian 1858 đến 1945", time: "Hôm qua 19:20", status: "Chờ chấm" },
      { student: "Lê Quang Dũng", lesson: "Sơ đồ nhân quả giai đoạn 1954 đến 1975", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Thứ Tư tuần này học chuyên đề Điện Biên Phủ, mang theo vở ghi chép trục thời gian.",
      "Bài kiểm tra một tiết gồm 30 phần trăm trắc nghiệm và 70 phần trăm tự luận.",
      "Học sinh chưa nộp sơ đồ nhân quả cần hoàn thành trước thứ Bảy."
    ]
  },
  className: "Lịch sử 12B1",
  brief: "BTL-09_timeline-mon-lich-su.md"
};
