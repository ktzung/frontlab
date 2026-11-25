window.BTL_DATA = {
  id: "econplay",
  code: "BTL-11",
  name: "EconPlay",
  monogram: "P*",
  subject: "Kinh tế vi mô",
  level: "Đại học",
  group: "Kinh tế & Pháp luật",
  accent: "#ca8a04",
  accent2: "#16a34a",
  font: "display",
  tagline: "Trượt đường cung, đường cầu và thấy điểm cân bằng tự tìm lại ngay trên đồ thị.",
  intro: "EconPlay dạy Kinh tế vi mô bằng chính các mô hình mà sinh viên phải vẽ tay: cung, cầu, co giãn và can thiệp giá. Mỗi chương có đồ thị tương tác, bài tập tính toán kèm lời giải từng bước và thẻ ghi nhớ để ôn trước giờ kiểm tra.",
  hero: { title: "Thị trường", highlight: "đọc được bằng đồ thị" },
  heroBadge: "Cung cầu sống · Chính sách thử được",
  labShort: "ĐỒ THỊ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ ghi nhớ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách luyện Kinh tế vi mô: nhìn đường dịch chuyển, thử chính sách rồi tự tính lại bằng tay.",
  pathLead: "Đi từ mô hình hai đường cơ bản, sang can thiệp giá và thuế, rồi mổ xẻ quyết định của người mua cùng doanh nghiệp. Cuối mỗi chương đều có đồ thị để kiểm chứng kết luận.",
  features: [
    { badge: "01", title: "Đồ thị cung cầu tương tác", desc: "Kéo hệ số chặn và độ dốc để thấy điểm cân bằng dịch chuyển, kèm vùng thặng dư tiêu dùng tô ngay dưới đường cầu." },
    { badge: "02", title: "Mô phỏng chính sách", desc: "Đặt giá trần, giá sàn hoặc thuế đơn vị rồi so sánh lượng giao dịch, phần thuế mỗi bên chịu và tổn thất vô ích." },
    { badge: "03", title: "Bài tập có lời giải từng bước", desc: "Nhập đáp số, hệ thống chấm ngay và mở lời giải để thấy chỗ sai nằm ở bước lập hàm hay bước thế số." }
  ],
  life: [
    {
      title: "Chả cá và ngày rằm",
      scene: "Sát ngày rằm, quầy chả cá trong chợ tăng giá mỗi ký thêm vài chục nghìn mà vẫn đông người mua. Qua rằm, giá hạ lại, người mua vãn, hàng còn thừa phải bán rẻ hơn hôm trước.",
      connect: "Nhu cầu tăng làm đường cầu dịch sang phải, giá và lượng cùng lên tới điểm cân bằng mới; hết rằm cầu lùi lại, đọc hai trạng thái cạnh nhau chính là so sánh tĩnh."
    },
    {
      title: "Vé xe buýt giữ giá thấp",
      scene: "Vé xe buýt được giữ ở mức thấp để sinh viên đi học, nên giờ cao điểm xe chật kín và có tuyến phải cắt bớt chuyến. Nhà xe kêu lỗ, người đi vẫn phải đứng suốt tuyến.",
      connect: "Giá thấp hơn mức cân bằng tạo ra giá trần: lượng người muốn đi vượt số chuyến có thể chạy nên sinh ra thiếu hụt; vé rẻ mà cầu ít co giãn thì lượng đi giảm rất ít."
    },
    {
      title: "Chọn mì gói trong siêu thị",
      scene: "Đứng trước kệ mì, một sinh viên có bảy mươi nghìn trong ví và ba bữa phải lo. Gói đắt hơn thì ngon hơn nhưng chỉ đủ hai bữa, nên chọn gói vừa để đủ cả ba, thêm trứng và rau.",
      connect: "Đó là bài toán đường ngân sách và lợi ích cận biên: đồng thêm nên dồn vào chỗ mang lại ích lợi thêm lớn nhất, chứ không dồn hết vào món thích nhất."
    }
  ],
  modules: [
    {
      title: "Cung, cầu và cân bằng thị trường",
      summary: "Dựng hai đường từ số liệu bán hàng thật, tìm điểm cân bằng và đọc trạng thái thiếu, thừa.",
      lessons: [
        {
          id: "cd1",
          title: "Hàm cầu và luật cầu",
          minutes: 16,
          level: "Cơ bản",
          summary: "Đọc hàm cầu nghịch biến và phân biệt thay đổi lượng cầu với dịch chuyển cả đường cầu.",
          points: [
            "Lượng cầu giảm khi giá tăng, các yếu tố khác không đổi.",
            "Hàm cầu tuyến tính có dạng Qd = a − bP với b dương.",
            "Dịch chuyển cầu do thu nhập, giá hàng liên quan, thị hiếu và kỳ vọng."
          ],
          steps: [
            { title: "Viết hàm cầu từ số liệu bán hàng", body: "Một quán trà sữa ghi nhận ở giá 30 nghìn đồng bán 120 ly mỗi ngày, ở giá 40 nghìn đồng chỉ còn 80 ly. Độ dốc theo giá bằng (120 − 80)/(30 − 40) = −4, nghĩa là mỗi 1 nghìn đồng tăng thêm làm mất 4 ly. Từ đó viết Qd = 240 − 4P rồi thay P = 30 để chắc hàm khớp số liệu gốc.", tip: "Luôn thế lại một cặp số liệu ban đầu vào hàm vừa viết." },
            { title: "Trượt dọc hay dịch chuyển cả đường", body: "Giá trà sữa của chính quán tăng làm khách mua ít hơn: điểm cầu trượt dọc trên cùng một đường. Trà sữa đối thủ tăng giá lại đẩy khách sang quán mình ở mọi mức giá: cả đường cầu dịch sang phải. Nhầm hai hiện tượng này là lỗi phổ biến nhất khi làm bài thi.", tip: "Hỏi xem nguyên nhân thay đổi có phải giá của chính hàng hóa đó không." },
            { title: "Bốn nhóm yếu tố dịch chuyển cầu", body: "Thu nhập tăng làm cầu hàng thông thường dịch phải nhưng làm cầu hàng cấp thấp dịch trái. Giá hàng thay thế tăng thì cầu tăng, giá hàng bổ sung tăng thì cầu giảm. Thị hiếu, kỳ vọng giá và số người mua là ba nhóm còn lại cần rà trước khi kết luận.", tip: "Rà theo thứ tự: thu nhập, giá hàng liên quan, thị hiếu, kỳ vọng, số người mua." }
          ],
          formula: "Qd = a − bP với b > 0"
        },
        {
          id: "cd2",
          title: "Hàm cung và chi phí cận biên",
          minutes: 18,
          level: "Cơ bản",
          summary: "Hiểu vì sao đường cung dốc lên và cách dựng hàm cung từ hai mức giá quan sát được.",
          points: [
            "Đường cung dốc lên vì chi phí cận biên tăng dần.",
            "Hàm cung tuyến tính có dạng Qs = c + dP với d dương.",
            "Công nghệ, giá đầu vào và thuế làm dịch chuyển đường cung."
          ],
          steps: [
            { title: "Chi phí cận biên là mức giá tối thiểu", body: "Lò bánh mì chỉ làm thêm một ổ nếu giá bán bù được bột, gas và công cho chính ổ đó, khoảng 8 nghìn đồng. Khi phải mở ca đêm, chi phí cận biên lên 11 nghìn đồng nên lò đòi giá cao hơn mới sản xuất thêm. Đường cung vì thế chính là tập hợp các mức chi phí cận biên theo sản lượng.", tip: "Câu hỏi gốc: bán thêm một đơn vị thì tốn thêm bao nhiêu." },
            { title: "Dựng hàm cung từ hai điểm giá", body: "Ở giá 20 nghìn lò giao 100 ổ, ở giá 25 nghìn giao 150 ổ. Độ dốc là (150 − 100)/(25 − 20) = 10 nên Qs = 10P − 100; thay P = 20 cho lại đúng 100 ổ. Hàm cung luôn dốc lên nên độ dốc tính theo giá phải dương.", tip: "Nếu ra độ dốc âm, kiểm tra lại thứ tự hai cặp số liệu." },
            { title: "Cung dịch khi chi phí đầu vào đổi", body: "Giá bột mì tăng 15 phần trăm đẩy chi phí cận biên lên ở mọi mức sản lượng, đường cung dịch lên trên và sang trái. Đầu tư lò nướng tiết kiệm gas làm đường cung dịch xuống dưới, sang phải. Thuế đơn vị đánh vào người bán cũng là một cú dịch cung lên đúng bằng mức thuế.", tip: "Với thuế đơn vị t, đường cung mới viết là P = c + dQ + t." }
          ],
          formula: "Qs = c + dP với d > 0"
        },
        {
          id: "cd3",
          title: "Cân bằng thị trường và so sánh tĩnh",
          minutes: 22,
          level: "Trung bình",
          summary: "Giải phương trình cân bằng, đọc trạng thái lệch cân bằng và so sánh hai trạng thái sau cú sốc.",
          points: [
            "Cân bằng đạt được khi lượng cung bằng lượng cầu.",
            "Giá cân bằng dọn sạch thị trường, không thiếu không thừa.",
            "So sánh tĩnh là đổi một tham số rồi so hai điểm cân bằng."
          ],
          steps: [
            { title: "Giải phương trình cân bằng", body: "Cho Qd = 240 − 4P và Qs = 10P − 100, đặt hai vế bằng nhau được 340 = 14P, suy ra P* khoảng 24,3 nghìn đồng và Q* khoảng 143 ly. Thay P* vào cả hai hàm để chắc chắn ra cùng một lượng. Khi báo cáo, làm tròn theo đơn vị tiền tệ thực tế của thị trường.", tip: "Kiểm tra chéo bằng cách thế P* vào cả hai hàm, không chỉ một hàm." },
            { title: "Đọc trạng thái lệch cân bằng", body: "Nếu quán niêm yết 30 nghìn đồng, lượng cung 200 ly vượt lượng cầu 120 ly, tồn kho 80 ly: thị trường dư thừa. Nếu niêm yết 15 nghìn đồng, lượng cầu 180 ly vượt lượng cung 50 ly, khách phải xếp hàng: thị trường thiếu hụt. Chỉ cần tính hai lượng tại đúng mức giá đang xét là kết luận được.", tip: "Tính lượng cung và lượng cầu riêng rồi mới trừ, tránh nhầm dấu." },
            { title: "So sánh hai trạng thái cân bằng", body: "Khi thu nhập khách tăng, cầu dịch phải thành Qd = 280 − 4P. Cân bằng mới là P* khoảng 27,1 nghìn đồng và Q* khoảng 171 ly, cả giá và lượng đều tăng. Kết quả này khớp quy luật: cầu tăng trên thị trường cạnh tranh đẩy cả giá và lượng lên.", tip: "Trong phòng lab, tăng a rồi quan sát giao điểm chạy lên phía trên bên phải." }
          ],
          formula: "Qd = Qs ⇒ P* = (a − c)/(b + d)"
        }
      ]
    },
    {
      title: "Co giãn và chính sách giá",
      summary: "Đo phản ứng của người mua bằng co giãn, rồi dùng nó để dự đoán hệ quả của giá trần, giá sàn và thuế.",
      lessons: [
        {
          id: "cg1",
          title: "Co giãn của cầu theo giá",
          minutes: 20,
          level: "Trung bình",
          summary: "Tính hệ số co giãn, đọc quan hệ với doanh thu và nhận diện nhóm hàng ít co giãn.",
          points: [
            "Co giãn điểm bằng độ dốc nhân tỷ số giá trên lượng.",
            "Cầu co giãn mạnh thì tăng giá làm doanh thu giảm.",
            "Hàng thiết yếu, ít thay thế, chi tiêu nhỏ thường ít co giãn."
          ],
          steps: [
            { title: "Công thức và cách tính", body: "Với Qd = 240 − 4P, tại P = 30 và Q = 120, hệ số co giãn là −4 nhân (30/120) bằng −1. Nghĩa là giá tăng 1 phần trăm thì lượng cầu giảm khoảng 1 phần trăm. Dấu âm chỉ phản ánh quan hệ nghịch biến, khi so sánh độ mạnh thì lấy trị tuyệt đối.", tip: "Luôn gắn hệ số với đúng cặp giá và lượng đang xét." },
            { title: "Co giãn và doanh thu", body: "Nếu cầu co giãn mạnh, giảm giá 10 phần trăm làm lượng bán tăng hơn 10 phần trăm nên doanh thu tăng. Nếu cầu ít co giãn như xăng, tăng giá vẫn giữ và có thể làm doanh thu tăng. Đây là lý do hãng xe máy hay giảm giá mạnh còn trạm xăng thì gần như không.", tip: "Nhớ quy tắc: co giãn lớn hơn 1 thì giảm giá có lợi cho doanh thu." },
            { title: "Ba yếu tố quyết định độ co giãn", body: "Hàng có nhiều thay thế gần như cà phê quán thì cầu co giãn, còn muối ăn gần như không có thay thế nên ít co giãn. Tỷ trọng chi tiêu càng lớn và thời gian điều chỉnh càng dài thì cầu càng co giãn, vì người mua có thời gian tìm phương án khác. Hàng xa xỉ cũng co giãn hơn hàng thiết yếu.", tip: "Tự hỏi: có thay thế không, chiếm bao nhiêu phần thu nhập, có bao lâu để điều chỉnh." }
          ],
          formula: "Ed = (dQ/dP) × (P/Q)"
        },
        {
          id: "cg2",
          title: "Giá trần, giá sàn và hạn ngạch",
          minutes: 22,
          level: "Trung bình",
          summary: "Dự đoán hệ quả của ba công cụ can thiệp giá và phân biệt ai được lợi, ai chịu thiệt.",
          points: [
            "Giá trần dưới giá cân bằng gây thiếu hụt.",
            "Giá sàn trên giá cân bằng gây dư thừa.",
            "Hạn ngạch nhập khẩu đẩy giá lên và tạo địa tô cho người giữ quota."
          ],
          steps: [
            { title: "Giá trần và hàng đợi", body: "Giá trần thuê nhà 3 triệu đồng mỗi tháng trong khi cân bằng là 5 triệu làm lượng người muốn thuê vượt lượng nhà cho thuê. Kết quả là xếp hàng, lót tay hoặc thị trường ngầm, chứ không phải ai cũng thuê được rẻ hơn. Người may mắn thuê được thì lợi, người bị loại khỏi thị trường thì thiệt.", tip: "Vẽ đường ngang tại mức giá trần rồi so hai lượng tại đó." },
            { title: "Giá sàn và dư cung", body: "Giá sàn lúa 8.000 đồng mỗi kg cao hơn cân bằng khiến nông dân muốn bán nhiều hơn nhưng người mua chỉ mua ít hơn. Phần dư phải có ngân sách mua tạm trữ, nếu không sẽ đổ đống. Tiền lương tối thiểu là ví dụ quen thuộc của giá sàn trên thị trường lao động.", tip: "Hỏi ngay: ai là người mua, ai là người bán, ai trả phần dư." },
            { title: "Hạn ngạch và địa tô", body: "Hạn ngạch nhập khẩu đường giới hạn lượng bán ra, đẩy giá trong nước lên cao hơn giá thế giới. Chênh lệch giá nhân với lượng hạn ngạch tạo địa tô cho người giữ quota. Về tổng thể thặng dư xã hội vẫn giảm, giống trường hợp thuế nhập khẩu.", tip: "So hạn ngạch với thuế nhập khẩu tương đương: khác nhau ở chỗ ai nhận phần địa tô." }
          ],
          formula: "Thiếu hụt = Qd(Pc) − Qs(Pc) khi Pc < P*"
        },
        {
          id: "cg3",
          title: "Thuế, trợ cấp và tổn thất vô ích",
          minutes: 24,
          level: "Nâng cao",
          summary: "Chia gánh nặng thuế theo độ co giãn và đo phần thặng dư bị mất khi can thiệp.",
          points: [
            "Bên nào ít co giãn hơn chịu thuế nhiều hơn.",
            "Thuế làm lượng giao dịch giảm so với mức cân bằng.",
            "Trợ cấp đơn vị tạo sản lượng vượt mức tối ưu nên cũng có tổn thất."
          ],
          steps: [
            { title: "Ai thật sự chịu thuế", body: "Đánh thuế 5 nghìn đồng mỗi ly vào quán trà sữa làm đường cung dịch lên đúng 5 nghìn, giá người mua trả tăng và giá quán thực nhận giảm. Phần tăng giá phụ thuộc độ co giãn: cầu càng ít co giãn thì người mua chịu càng nhiều. Không phải cứ đánh vào người bán là người bán chịu hết.", tip: "Vẽ hai mức giá sau thuế: giá người mua trả và giá người bán nhận." },
            { title: "Tính tổn thất vô ích", body: "Thuế làm lượng giao dịch giảm từ 143 ly xuống còn 120 ly. Diện tích tam giác giữa hai đường, chắn bởi chênh lệch lượng, chính là tổn thất vô ích: phần lợi ích đáng lẽ thuộc về cả hai bên nhưng bị mất. Thuế càng lớn thì tam giác này càng rộng theo cấp số nhân.", tip: "Với đường tuyến tính, tính nhanh DWL = 0,5 × thuế × chênh lệch lượng." },
            { title: "Trợ cấp và mặt trái", body: "Trợ cấp 3 nghìn đồng mỗi kg phân bón hạ chi phí biên, đường cung dịch xuống và giá người mua giảm. Sản lượng tăng vượt mức tối ưu nên phần chi phí sản xuất vượt giá trị người tiêu dùng đánh giá là tổn thất vô ích. Chính sách trợ cấp vì thế không miễn phí dù người mua thấy rẻ hơn.", tip: "Đừng đồng nhất trợ cấp với giảm giá: ngân sách vẫn trả phần chênh." }
          ],
          formula: "DWL = 0,5 × t × (Q* − Qt)"
        }
      ]
    },
    {
      title: "Người tiêu dùng, doanh nghiệp và cấu trúc thị trường",
      summary: "Đi vào quyết định bên trong: đường ngân sách, lợi ích cận biên, chi phí và sức mạnh thị trường.",
      lessons: [
        {
          id: "td1",
          title: "Lợi ích cận biên và đường ngân sách",
          minutes: 22,
          level: "Trung bình",
          summary: "Dựng ràng buộc ngân sách và tìm điểm tiêu dùng tối ưu bằng quy tắc cân bằng cận biên.",
          points: [
            "Đường ngân sách gom mọi kết hợp hàng hóa vừa đủ tiền.",
            "Tối ưu khi lợi ích cận biên trên một đồng của các hàng bằng nhau.",
            "Đường bàng quan dốc xuống và lồi về gốc."
          ],
          steps: [
            { title: "Vẽ đường ngân sách", body: "Với 300 nghìn đồng mỗi tuần, một cốc trà sữa 30 nghìn và một vé xem phim 60 nghìn, đường ngân sách nối hai điểm 10 cốc và 5 vé. Độ dốc bằng trừ tỷ số giá, phản ánh chi phí cơ hội của một vé phim là hai cốc trà sữa. Thu nhập tăng làm đường dịch song song ra ngoài.", tip: "Chi phí cơ hội chính là độ dốc, hãy ghi rõ đơn vị hàng hóa." },
            { title: "Quy tắc cân bằng cận biên", body: "Cốc trà sữa thứ nhất mang lại 30 đơn vị thỏa dụng, cốc thứ tư chỉ còn 9. Người tiêu dùng dừng điều chỉnh khi lợi ích cận biên trên mỗi đồng của hai hàng hóa bằng nhau. Nếu tỷ lệ đó của trà sữa còn cao hơn của vé phim, chuyển một đồng sang trà sữa sẽ làm tổng thỏa dụng tăng.", tip: "Viết tỷ lệ MU trên giá cho từng hàng rồi so, đừng so MU tuyệt đối." },
            { title: "Đọc đường bàng quan", body: "Đường bàng quan gom các kết hợp cho cùng mức thỏa dụng nên dốc xuống: bớt một vé phim phải bù bằng vài cốc trà sữa. Đường càng lồi về gốc vì tỷ lệ thay thế biên giảm dần. Điểm tối ưu là chỗ đường bàng quan tiếp xúc với đường ngân sách.", tip: "Tiếp xúc nghĩa là hai độ dốc bằng nhau, tức MRS bằng tỷ lệ giá." }
          ],
          formula: "MUx/Px = MUy/Py"
        },
        {
          id: "td2",
          title: "Chi phí sản xuất trong ngắn hạn",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt chi phí cố định, biến đổi và đọc quan hệ giữa chi phí cận biên với chi phí trung bình.",
          points: [
            "Chi phí cố định không đổi, chi phí biến đổi tăng theo sản lượng.",
            "Đường MC cắt đường ATC tại điểm ATC nhỏ nhất.",
            "Năng suất cận biên giảm dần làm đường MC dốc lên."
          ],
          steps: [
            { title: "Ba loại chi phí", body: "Xưởng nước mắm trả 20 triệu đồng tiền thuê nhà mỗi tháng dù sản xuất bao nhiêu: đó là chi phí cố định. Chi phí chai, nhãn và công đóng gói tăng theo số thùng là chi phí biến đổi. Tổng chi phí là tổng hai phần, còn chi phí trung bình chia tổng cho sản lượng.", tip: "Chi phí cố định tính trên một đơn vị sẽ giảm dần khi sản lượng tăng." },
            { title: "Quan hệ giữa MC và ATC", body: "Khi chi phí cận biên thấp hơn chi phí trung bình, nó kéo trung bình xuống; khi cao hơn, nó đẩy trung bình lên. Vì thế MC luôn cắt ATC tại điểm ATC nhỏ nhất. Với xưởng nước mắm, sản lượng tại giao điểm đó cho chi phí đơn vị thấp nhất.", tip: "Vẽ MC trước rồi suy hình dạng ATC từ việc bị kéo lên, kéo xuống." },
            { title: "Quy luật năng suất giảm dần", body: "Thuê thêm công nhân thứ năm vào dây chuyền đã chật làm sản lượng tăng ít hơn người thứ tư. Năng suất cận biên giảm khiến chi phí cận biên tăng, tạo đường MC dốc lên. Trong dài hạn doanh nghiệp đổi được quy mô nhà xưởng nên mọi chi phí đều biến đổi.", tip: "Ngắn hạn có yếu tố cố định, dài hạn thì không." }
          ],
          formula: "ATC = (FC + VC)/Q ; MC = ΔTC/ΔQ"
        },
        {
          id: "td3",
          title: "Cạnh tranh hoàn hảo và độc quyền",
          minutes: 26,
          level: "Nâng cao",
          summary: "So sánh cách chọn sản lượng của hãng nhận giá và nhà độc quyền, rồi đo phần phúc lợi bị mất.",
          points: [
            "Hãng cạnh tranh hoàn hảo nhận giá và tối đa lợi nhuận khi P bằng MC.",
            "Độc quyền chọn sản lượng theo MR bằng MC và bán giá cao hơn MC.",
            "Độc quyền làm giảm lượng bán nên gây mất mát phúc lợi."
          ],
          steps: [
            { title: "Hãng nhận giá", body: "Một nông hộ trồng lúa nhỏ không tự đặt giá được vì bán bao nhiêu thị trường cũng hấp thụ ở mức giá chung. Doanh thu cận biên bằng đúng giá thị trường nên điều kiện tối đa lợi nhuận là P bằng MC. Nếu giá xuống dưới chi phí biến đổi trung bình, nông hộ nên tạm ngừng sản xuất trong ngắn hạn.", tip: "Phân biệt điểm hòa vốn P = ATC và điểm đóng cửa P = AVC." },
            { title: "Đường cầu của nhà độc quyền", body: "Nhà độc quyền bán nước sạch trong một khu công nghiệp đối mặt cả đường cầu dốc xuống, muốn bán thêm phải hạ giá cho mọi đơn vị. Vì thế doanh thu cận biên thấp hơn giá bán và dốc gấp đôi đường cầu tuyến tính. Điều kiện tối đa lợi nhuận vẫn là MR bằng MC nhưng giá bán cao hơn MC.", tip: "Với cầu tuyến tính P = a − bQ thì MR = a − 2bQ." },
            { title: "So sánh phúc lợi", body: "Độc quyền bán ít hơn và giá cao hơn cạnh tranh hoàn hảo nên một phần thặng dư chuyển thành lợi nhuận độc quyền, một phần bị mất hẳn. Phần mất hẳn là tam giác giữa đường cầu và MC, tính từ sản lượng độc quyền đến sản lượng cạnh tranh. Đó là lý do nhà nước can thiệp bằng giá trần hoặc luật cạnh tranh.", tip: "Vẽ cầu, MR và MC trên cùng đồ thị rồi đánh dấu hai mức sản lượng." }
          ],
          formula: "MR = MC tại Qm, giá bán Pm = a − b·Qm"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Lượng cầu", back: "Khối lượng hàng hóa người mua sẵn sàng và có khả năng mua ở một mức giá, trong một khoảng thời gian, các yếu tố khác không đổi.", hint: "Sẵn sàng cộng với có khả năng chi trả.", example: "Ở giá 30 nghìn đồng, quán bán 120 ly mỗi ngày." },
    { front: "Luật cầu", back: "Giá tăng thì lượng cầu giảm và ngược lại, khi các yếu tố khác không đổi.", hint: "Quan hệ nghịch biến giữa giá và lượng.", example: "Giá vé tăng từ 60 lên 80 nghìn, lượng vé bán giảm." },
    { front: "Đường cung", back: "Tập hợp các mức giá tối thiểu mà người bán chấp nhận ở từng mức sản lượng, thường dốc lên.", hint: "Chính là chi phí cận biên theo sản lượng.", example: "Lò bánh mì đòi 25 nghìn mới giao 150 ổ thay vì 100 ổ." },
    { front: "Điểm cân bằng thị trường", back: "Cặp giá và lượng tại đó lượng cung bằng lượng cầu nên thị trường không thiếu, không thừa.", hint: "Giao điểm hai đường.", example: "P* khoảng 24,3 nghìn đồng và Q* khoảng 143 ly." },
    { front: "Dư thừa", back: "Tình trạng lượng cung lớn hơn lượng cầu tại mức giá đang áp dụng, hình thành khi giá cao hơn giá cân bằng.", hint: "Hàng tồn kho tăng.", example: "Niêm yết 30 nghìn đồng thì tồn 80 ly." },
    { front: "Thiếu hụt", back: "Tình trạng lượng cầu lớn hơn lượng cung tại mức giá đang áp dụng, hình thành khi giá thấp hơn giá cân bằng.", hint: "Xếp hàng, mua giới hạn.", example: "Giá trần thuê nhà làm nhiều người muốn thuê hơn số nhà có." },
    { front: "Co giãn của cầu theo giá", back: "Phần trăm thay đổi lượng cầu chia cho phần trăm thay đổi giá, tính tại một điểm hoặc trên một đoạn.", hint: "Độ dốc nhân tỷ số giá trên lượng.", example: "Ed bằng −1 tại P = 30, Q = 120 với Qd = 240 − 4P." },
    { front: "Hàng thay thế", back: "Hàng hóa dùng thay cho nhau, giá hàng này tăng làm cầu hàng kia tăng.", hint: "Trà sữa và cà phê sữa.", example: "Cà phê tăng giá, lượng trà sữa bán ra tăng." },
    { front: "Giá trần", back: "Mức giá tối đa mà người bán được phép thu, chỉ ràng buộc khi đặt thấp hơn giá cân bằng.", hint: "Trần là giới hạn trên.", example: "Giá trần thuê nhà 3 triệu đồng mỗi tháng." },
    { front: "Giá sàn", back: "Mức giá tối thiểu mà người mua phải trả, chỉ ràng buộc khi đặt cao hơn giá cân bằng.", hint: "Sàn là giới hạn dưới.", example: "Lương tối thiểu vùng là giá sàn trên thị trường lao động." },
    { front: "Tổn thất vô ích", back: "Phần thặng dư xã hội bị mất do lượng giao dịch giảm so với mức cân bằng, thường gặp khi có thuế.", hint: "Tam giác giữa hai đường cung cầu.", example: "Thuế 5 nghìn đồng mỗi ly làm mất một tam giác phúc lợi." },
    { front: "Độc quyền bán", back: "Thị trường chỉ có một người bán nên hãng đối mặt cả đường cầu dốc xuống và chọn sản lượng theo MR bằng MC.", hint: "Người đặt giá, không phải người nhận giá.", example: "Nhà cung cấp nước sạch duy nhất trong một khu công nghiệp." }
  ],
  quiz: [
    { q: "Với Qd = 240 − 4P và Qs = 10P − 100, giá cân bằng xấp xỉ bằng bao nhiêu nghìn đồng?", options: ["20", "24,3", "26", "30"], answer: 1, explain: "Cho hai vế bằng nhau: 240 − 4P = 10P − 100, suy ra 340 = 14P nên P* khoảng 24,3." },
    { q: "Khi giá của hàng hóa thay thế tăng, đường cầu của hàng đang xét sẽ:", options: ["dịch sang trái", "không thay đổi", "trượt dọc xuống dưới", "dịch sang phải"], answer: 3, explain: "Người mua chuyển sang hàng đang xét ở mọi mức giá, nên cả đường cầu dịch phải chứ không phải trượt dọc." },
    { q: "Hệ số co giãn của cầu theo giá bằng −2 nghĩa là:", options: ["giá tăng 1 phần trăm thì lượng cầu giảm 2 phần trăm", "giá tăng 1 phần trăm thì lượng cầu giảm 0,5 phần trăm", "cầu co giãn đơn vị", "doanh thu luôn tăng khi tăng giá"], answer: 0, explain: "Độ lớn 2 cho biết lượng cầu phản ứng mạnh gấp đôi so với thay đổi giá tính theo phần trăm." },
    { q: "Đặt giá trần thấp hơn giá cân bằng sẽ gây ra:", options: ["dư thừa hàng hóa", "giá tiếp tục tăng", "thiếu hụt và xếp hàng", "không ảnh hưởng gì"], answer: 2, explain: "Ở mức giá bị giới hạn, lượng cầu vượt lượng cung nên hình thành thiếu hụt." },
    { q: "Thuế đơn vị đánh vào người bán làm:", options: ["đường cầu dịch lên trên", "đường cung dịch xuống dưới", "giá cân bằng giảm", "đường cung dịch lên trên đúng bằng mức thuế"], answer: 3, explain: "Mỗi đơn vị bán ra phải nộp thuế nên chi phí cận biên tăng đúng bằng t, đường cung dịch lên." },
    { q: "Tổn thất vô ích của thuế xuất hiện vì:", options: ["chính phủ thu được tiền thuế", "một số giao dịch đáng lẽ có lợi cho cả hai bên bị mất đi", "người mua luôn chịu toàn bộ thuế", "thị trường không bao giờ cân bằng"], answer: 1, explain: "Thuế làm lượng giao dịch giảm, phần thặng dư của các giao dịch bị mất không chuyển cho ai." },
    { q: "Phát biểu nào đúng tại điểm cân bằng thị trường?", options: ["Lượng cung bằng lượng cầu nên không thiếu, không thừa", "Giá thấp hơn giá sẵn lòng trả của mọi người mua", "Thặng dư tiêu dùng bằng 0", "Lợi nhuận doanh nghiệp luôn bằng 0"], answer: 0, explain: "Cân bằng chỉ đòi hỏi hai lượng bằng nhau, không đòi hỏi các điều kiện về thặng dư hay lợi nhuận." },
    { q: "Cầu về muối ăn thường ít co giãn vì:", options: ["muối có giá rất cao", "muối là hàng xa xỉ", "gần như không có hàng thay thế và chi tiêu chiếm tỷ trọng nhỏ", "chỉ có một nhà sản xuất"], answer: 2, explain: "Thiếu hàng thay thế gần và chi tiêu nhỏ khiến người mua khó và ít cần điều chỉnh khi giá đổi." },
    { q: "Trong ngắn hạn, đường chi phí cận biên cắt đường chi phí trung bình tại:", options: ["điểm chi phí trung bình cực đại", "điểm chi phí trung bình cực tiểu", "mức sản lượng bằng 0", "mọi mức sản lượng"], answer: 1, explain: "MC thấp hơn ATC thì kéo ATC xuống, cao hơn thì đẩy lên, nên giao điểm là cực tiểu của ATC." },
    { q: "Hãng độc quyền tối đa hóa lợi nhuận bằng cách chọn sản lượng tại đó:", options: ["giá bằng chi phí cận biên", "doanh thu bằng chi phí", "sản lượng lớn nhất có thể sản xuất", "doanh thu cận biên bằng chi phí cận biên"], answer: 3, explain: "Điều kiện MR bằng MC áp dụng cho mọi cấu trúc thị trường; với độc quyền giá bán khi đó cao hơn MC." }
  ],
  lab: {
    kind: "plot",
    title: "Cân bằng cung – cầu",
    lead: "Kéo a để dịch đường cầu, kéo c để dịch đường cung, kéo b để đổi độ dốc đường cầu. Giao điểm hai đường chính là điểm cân bằng mà thị trường tự tìm về.",
    stageLabel: "Đồ thị tương tác",
    xMin: 0,
    xMax: 10,
    yMin: 0,
    yMax: 12,
    sliders: [
      { key: "a", label: "Giá sẵn lòng trả tối đa a", min: 6, max: 12, step: 0.5, value: 10 },
      { key: "b", label: "Độ dốc đường cầu b (âm)", min: -1.6, max: -0.3, step: 0.1, value: -0.8 },
      { key: "c", label: "Giá sẵn lòng bán tối thiểu c", min: 0, max: 6, step: 0.5, value: 2 }
    ],
    curves: [
      { type: "linear", label: "Cầu: P = a + bQ", color: "#ca8a04", params: { m: "b", b: "a" } },
      { type: "linear", label: "Cung: P = c + 0,8Q", color: "#16a34a", params: { m: 0.8, b: "c" } }
    ],
    shade: { from: 0, to: 5, color: "#ca8a04" },
    controlNote: "Tăng a làm cầu dịch phải, giá và lượng cân bằng cùng tăng. Tăng c làm cung co lại, giá cân bằng tăng và lượng giảm. Đọc số tại Q = 1 ở khung bên phải để so hai mức giá.",
    note: "Vùng tô nhẹ dưới đường cầu từ 0 đến Q* là vùng thặng dư tiêu dùng cộng phần chi tiêu khi giá bằng P*."
  },
  teacher: {
    students: [
      { name: "Nguyễn Thùy Dương", progress: 82, score: 8.6, status: "Tốt", note: "Lập hàm cung cầu nhanh, cần luyện câu hỏi về độc quyền." },
      { name: "Trần Quốc Bảo", progress: 58, score: 7.1, status: "Đang học", note: "Hay nhầm dịch chuyển cầu với trượt dọc đường cầu." },
      { name: "Lê Minh Châu", progress: 93, score: 9.3, status: "Tốt", note: "Tính tổn thất vô ích chính xác, làm thêm bài nâng cao được." },
      { name: "Phạm Anh Tuấn", progress: 31, score: 5.4, status: "Cần hỗ trợ", note: "Chưa giải được phương trình cân bằng, cần ôn lại đại số cơ bản." },
      { name: "Hoàng Thanh Mai", progress: 67, score: 7.7, status: "Đang học", note: "Hiểu co giãn, cần luyện chia gánh nặng thuế." },
      { name: "Đỗ Văn Khiêm", progress: 49, score: 6.3, status: "Đang học", note: "Nộp bài muộn, nên làm lại bài chi phí sản xuất." }
    ],
    submissions: [
      { student: "Nguyễn Thùy Dương", lesson: "Bài tập cân bằng và so sánh tĩnh", time: "Hôm nay 09:20", status: "Chờ chấm" },
      { student: "Đỗ Văn Khiêm", lesson: "Phiếu chi phí sản xuất ngắn hạn", time: "Hôm qua 22:05", status: "Chờ chấm" },
      { student: "Lê Minh Châu", lesson: "Bài tập thuế và tổn thất vô ích", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Tư làm bài tập nhóm về giá trần thị trường thuê nhà, mỗi nhóm chuẩn bị một đồ thị.",
      "Kiểm tra giữa kỳ gồm 30 phần trăm trắc nghiệm, 70 phần trăm bài tính có lời giải.",
      "Sinh viên chưa mở phòng lab chương 2 cần hoàn thành trước thứ Sáu để kịp chấm tiến độ."
    ]
  },
  className: "Kinh tế vi mô – K26",
  brief: "BTL-11_econplay-mon-kinh-te.md"
};
