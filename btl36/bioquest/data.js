window.BTL_DATA = {
  id: "bioquest",
  code: "BTL-06",
  name: "BioQuest",
  monogram: "DNA",
  subject: "Sinh học",
  level: "Đại học",
  group: "Toán & Khoa học tự nhiên",
  accent: "#16a34a",
  accent2: "#84cc16",
  font: "display",
  tagline: "Bấm vào từng bào quan để hiểu cấu trúc, rồi xem nguyên phân chạy từng kỳ.",
  intro: "BioQuest đưa Sinh học tế bào và di truyền lên một sơ đồ sống: mỗi bào quan là một điểm chạm có chức năng rõ ràng, mỗi quá trình phân bào được tách thành từng bước có chú thích. Sinh viên học bằng thao tác, không học bằng cách thuộc lòng danh sách tên.",
  hero: { title: "Tế bào", highlight: "nhìn được từng bào quan" },
  heroBadge: "Sơ đồ tế bào · Phân bào từng bước",
  labShort: "BÀO QUAN",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ ghi nhớ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách học được chọn cho Sinh học: nhìn cấu trúc, đi theo trình tự quá trình và tự kiểm tra bằng thuật ngữ.",
  pathLead: "Bắt đầu từ màng và bào quan, sang phân bào và di truyền, kết thúc ở trao đổi chất. Mỗi chương đều có sơ đồ hoặc bảng số liệu để đối chiếu.",
  features: [
    { badge: "01", title: "Sơ đồ bào quan chạm được", desc: "Chín bào quan trên một tế bào nhân thực, mỗi điểm chạm mở ra chức năng, cấu trúc và dấu hiệu nhận biết riêng." },
    { badge: "02", title: "Quá trình tách từng kỳ", desc: "Nguyên phân và giảm phân được chia thành các kỳ có thanh tiến độ, kèm số lượng nhiễm sắc thể ở mỗi mốc." },
    { badge: "03", title: "Thẻ thuật ngữ và quiz", desc: "Mười hai thẻ ghi nhớ kèm ví dụ cụ thể, mười câu trắc nghiệm chấm ngay và giải thích vì sao sai." }
  ],
  modules: [
    {
      title: "Tế bào - đơn vị cấu trúc và chức năng",
      summary: "Đọc màng sinh chất, hệ thống nội màng và hai bào quan chuyển hóa năng lượng.",
      lessons: [
        {
          id: "te1",
          title: "Màng sinh chất và các kiểu vận chuyển",
          minutes: 20,
          level: "Cơ bản",
          summary: "Mô hình khảm lỏng giải thích vì sao màng vừa chắn vừa chọn lọc, và bốn kiểu vận chuyển qua màng.",
          points: ["Màng là lớp photpholipit kép có protein xen kẽ, không phải hàng rào đặc.", "Khuếch tán đơn và thẩm thấu không cần ATP, vận chuyển tích cực thì cần.", "Bơm Na+/K+ đưa 3 Na+ ra và 2 K+ vào, tiêu tốn một ATP."],
          steps: [
            { title: "Đọc mô hình khảm lỏng", body: "Đầu photphat ưa nước quay ra ngoài, đuôi axit béo kỵ nước quay vào trong, tạo lớp kép dày khoảng 7 đến 8 nm. Protein xuyên màng, cholesterol và glycoprotein nằm rải rác như những viên gạch khảm, nên màng luôn linh động chứ không cố định.", tip: "Phân biệt đầu ưa nước và đuôi kỵ nước trước khi học các kiểu vận chuyển." },
            { title: "Bốn kiểu đi qua màng", body: "Khuếch tán đơn cho O2, CO2 đi thẳng qua lớp kép. Khuếch tán tăng cường dùng kênh protein cho glucose. Thẩm thấu là nước đi qua aquaporin theo chênh lệch thế nước. Vận chuyển tích cực dùng bơm và ATP để đẩy chất ngược gradient, ví dụ bơm proton ở lysosome.", tip: "Hỏi ngay: chất này đi theo chiều gradient hay ngược chiều, và có tốn ATP không." },
            { title: "Tính áp suất thẩm thấu", body: "Tế bào hồng cầu trong dung dịch ưu trương mất nước và teo lại, trong nhược trương thì căng và có thể vỡ, trong đẳng trương giữ nguyên hình dạng. Đây là lý do dịch truyền tĩnh mạch phải có nồng độ NaCl 0,9 phần trăm.", tip: "Nhớ ba từ khóa: ưu trương mất nước, nhược trương căng nước, đẳng trương cân bằng." }
          ],
          formula: "Bơm Na+/K+: 3 Na+ ra ngoài, 2 K+ vào trong, tiêu thụ 1 ATP"
        },
        {
          id: "te2",
          title: "Hệ thống nội màng và phân công lao động",
          minutes: 22,
          level: "Trung bình",
          summary: "Theo dấu một protein từ ribosome đến màng sinh chất để thấy vai trò từng bào quan.",
          points: ["Lưới nội chất hạt tổng hợp protein tiết, lưới trơn tổng hợp lipit và khử độc.", "Bộ máy Golgi sửa đổi, đóng gói và dán nhãn địa chỉ cho protein.", "Lysosome chứa enzym thủy phân hoạt động ở pH khoảng 5."],
          steps: [
            { title: "Khởi đầu ở ribosome", body: "Ribosome gắn trên lưới nội chất hạt dịch mã mRNA thành chuỗi polypeptide, chuỗi này được đưa vào lòng lưới để gấp cuộn. Protein dành cho tế bào chất thì do ribosome tự do làm, còn protein để tiết ra ngoài thì đi vào con đường nội màng.", tip: "Một chuỗi polypeptide chưa gấp cuộn chưa phải là protein hoạt động." },
            { title: "Đi qua Golgi", body: "Túi vận chuyển từ lưới nội chất đi đến mặt cis của Golgi, được sửa đổi bằng glycosyl hóa rồi đóng gói ở mặt trans. Mỗi túi mang một nhãn phân tử, nhờ đó túi chỉ dung hợp với đúng màng đích như màng sinh chất hay màng lysosome.", tip: "Ví dụ thực tế: insulin được cắt từ proinsulin ngay trong túi tiết của tế bào beta tuyến tụy." },
            { title: "Đường đến lysosome", body: "Lysosome nhận enzym thủy phân vừa được Golgi dán nhãn mannose-6-phosphat. Khi tế bào già hoặc bào quan hỏng, lysosome dung hợp và phân giải, còn ở tế bào miễn dịch chúng tiêu hóa vi khuẩn bị thực bào.", tip: "Nếu enzym không tới được lysosome, chất thải tích tụ gây bệnh dự trữ lysosome." }
          ],
          formula: "Lưới nội chất hạt, Golgi, túi tiết, màng sinh chất: một chiều đi của protein tiết"
        },
        {
          id: "te3",
          title: "Ty thể và lục lạp: hai nhà máy năng lượng",
          minutes: 24,
          level: "Trung bình",
          summary: "So sánh cấu trúc và chức năng của ty thể với lục lạp qua màng kép và hệ thống màng trong.",
          points: ["Ty thể có màng kép, màng trong gấp nếp thành mào chứa chuỗi truyền electron.", "Lục lạp có màng kép, hệ thống túi thylakoid và chất nền stroma.", "Cả hai đều có DNA vòng riêng và ribosome riêng kiểu vi khuẩn."],
          steps: [
            { title: "Ty thể: nơi ATP được lắp ráp", body: "Màng trong ty thể gấp thành mào để tăng diện tích, trên đó có bốn phức hợp của chuỗi truyền electron và ATP synthase. Cơ tim chứa khoảng một phần ba thể tích là ty thể vì nhu cầu ATP rất lớn và liên tục.", tip: "Mào càng nhiều thì diện tích màng trong càng lớn, năng lực tạo ATP càng cao." },
            { title: "Lục lạp: bắt ánh sáng", body: "Màng thylakoid xếp thành các grana, chứa diệp lục a, diệp lục b và carotenoid. Phản ứng sáng diễn ra trên màng thylakoid, chu trình Calvin diễn ra trong chất nền stroma. Tế bào mô giậu lá có thể chứa vài chục lục lạp.", tip: "Ghi nhớ cặp vị trí: pha sáng ở màng thylakoid, pha tối ở stroma." },
            { title: "Nguồn gốc nội cộng sinh", body: "Ty thể và lục lạp đều có DNA vòng, ribosome 70S và màng kép, dấu vết của vi khuẩn bị tế bào nhân thực nuốt vào từ rất lâu. Vì vậy chúng tự nhân đôi tương đối độc lập với chu kỳ tế bào và di truyền theo dòng mẹ ở người.", tip: "Bệnh do đột biến DNA ty thể chỉ truyền từ mẹ sang con." }
          ],
          formula: "Ty thể: màng kép và mào; lục lạp: màng kép, thylakoid, stroma"
        }
      ]
    },
    {
      title: "Phân bào và di truyền",
      summary: "Từ chu kỳ tế bào, nguyên phân, giảm phân đến quy luật Mendel và đọc phả hệ.",
      lessons: [
        {
          id: "pb1",
          title: "Nguyên phân và chu kỳ tế bào",
          minutes: 22,
          level: "Cơ bản",
          summary: "Bốn kỳ của nguyên phân và các điểm kiểm soát quyết định tế bào có phân chia hay không.",
          points: ["Pha S nhân đôi DNA, mỗi nhiễm sắc thể thành hai crômatit dính ở tâm động.", "Kỳ giữa là mốc dễ đếm nhiễm sắc thể nhất vì chúng xếp thành một hàng.", "Nguyên phân giữ nguyên bộ nhiễm sắc thể 2n ở hai tế bào con."],
          steps: [
            { title: "Chu kỳ và điểm kiểm soát", body: "Một chu kỳ gồm gian kỳ G1, S, G2 rồi pha M. Điểm kiểm soát G1 quyết định tế bào có vào S hay không, điểm G2 kiểm tra DNA đã sửa xong chưa, điểm thoi kiểm tra mọi nhiễm sắc thể đã gắn thoi hay chưa. Tế bào thần kinh trưởng thành nằm ở G0 và gần như không phân chia.", tip: "Tế bào ung thư thường mất kiểm soát ở điểm G1 do đột biến gen p53 hoặc Rb." },
            { title: "Bốn kỳ của pha M", body: "Kỳ trước nhiễm sắc thể co xoắn, màng nhân dần tan. Kỳ giữa nhiễm sắc thể xếp hàng trên mặt phẳng xích đạo. Kỳ sau crômatit tách nhau và bị kéo về hai cực. Kỳ cuối màng nhân tái tạo và tế bào chất phân chia.", tip: "Từ khóa dễ nhớ: trước thì co, giữa thì xếp hàng, sau thì tách, cuối thì chia." },
            { title: "Đếm nhiễm sắc thể đúng cách", body: "Ở người 2n = 46, sau pha S vẫn là 46 nhiễm sắc thể nhưng có 92 crômatit. Sang kỳ sau, khi crômatit tách ra thì tạm thời đếm được 92 nhiễm sắc thể, mỗi cực nhận 46. Đếm theo tâm động, không đếm theo số crômatit.", tip: "Câu hỏi kinh điển: kỳ sau nguyên phân ở người có bao nhiêu nhiễm sắc thể, đáp án là 92." }
          ],
          formula: "2n = 46: kỳ giữa có 46 nhiễm sắc thể và 92 crômatit"
        },
        {
          id: "pb2",
          title: "Giảm phân và biến dị tổ hợp",
          minutes: 24,
          level: "Nâng cao",
          summary: "Hai lần phân chia, trao đổi chéo và cách tạo ra 2^n loại giao tử khác nhau.",
          points: ["Giảm phân I phân ly nhiễm sắc thể tương đồng, giảm phân II phân ly crômatit.", "Trao đổi chéo ở kỳ trước I tạo hoán vị gen.", "Ở người, 23 cặp nhiễm sắc thể cho 2^23 tổ hợp độc lập, hơn 8 triệu loại giao tử."],
          steps: [
            { title: "Giảm phân I: giảm một nửa bộ nhiễm sắc thể", body: "Kỳ trước I các cặp tương đồng bắt cặp thành thể lưỡng trị, trao đổi chéo giữa các crômatit khác nguồn. Kỳ giữa I các cặp xếp thành hai hàng, kỳ sau I phân ly cả nhiễm sắc thể kép về hai cực. Kết thúc giảm phân I có hai tế bào n = 23 nhưng nhiễm sắc thể vẫn ở dạng kép.", tip: "Điểm khác biệt cốt lõi với nguyên phân nằm ở kỳ trước I và kỳ sau I." },
            { title: "Giảm phân II: tách crômatit", body: "Giảm phân II giống nguyên phân nhưng không nhân đôi DNA trước đó. Kỳ giữa II nhiễm sắc thể kép xếp một hàng, kỳ sau II crômatit tách nhau. Bốn tế bào con đều đơn bội n = 23 và không còn cặp tương đồng.", tip: "Nếu không có giảm phân II, giao tử vẫn mang nhiễm sắc thể kép và thụ tinh sẽ sai số lượng." },
            { title: "Tính số loại giao tử", body: "Số loại giao tử do phân ly độc lập là 2^n với n là số cặp nhiễm sắc thể. Ở người là 2^23, khoảng 8,4 triệu. Trao đổi chéo còn làm con số thực tế lớn hơn nhiều, giải thích vì sao anh chị em ruột vẫn khác nhau rõ rệt.", tip: "Công thức chỉ tính phân ly độc lập, chưa tính hoán vị gen." }
          ],
          formula: "Số loại giao tử = 2^n; ở người 2^23 = 8 388 608"
        },
        {
          id: "pb3",
          title: "Quy luật Mendel và đọc phả hệ",
          minutes: 24,
          level: "Trung bình",
          summary: "Lập bảng Punnett, xác định kiểu gen bố mẹ và suy luận kiểu di truyền từ phả hệ.",
          points: ["Lai một cặp gen dị hợp cho tỉ lệ kiểu hình 3 trội : 1 lặn.", "Lai phân tích dùng cá thể lặn để xác định kiểu gen cá thể trội.", "Phả hệ gen lặn trên nhiễm sắc thể thường thường bỏ qua thế hệ."],
          steps: [
            { title: "Bảng Punnett", body: "Bố mẹ Aa x Aa cho bốn ô: AA, Aa, Aa, aa, tức tỉ lệ kiểu gen 1 : 2 : 1 và kiểu hình 3 trội : 1 lặn. Với bệnh bạch tạng do gen lặn a, hai bố mẹ da bình thường Aa vẫn có 25 phần trăm khả năng sinh con bị bệnh.", tip: "Viết giao tử của từng bố mẹ ra hai cạnh bảng trước khi điền ô." },
            { title: "Lai phân tích và xác suất", body: "Lai cá thể mang kiểu hình trội với cá thể lặn aa: nếu đời con đồng tính thì cá thể trội là AA, nếu phân ly 1 : 1 thì là Aa. Muốn tính xác suất hai con liên tiếp, nhân xác suất từng lần sinh vì mỗi lần là sự kiện độc lập.", tip: "Xác suất sinh hai con bạch tạng từ bố mẹ Aa là 1/4 nhân 1/4 bằng 1/16." },
            { title: "Đọc phả hệ", body: "Trước hết tìm bố mẹ bình thường sinh con bị bệnh, dấu hiệu của gen lặn. Sau đó kiểm tra giới tính: nếu bệnh lặn liên kết X, con trai bị bệnh nhiều hơn hẳn và mẹ mang gen vẫn bình thường. Di truyền trội sẽ xuất hiện ở mọi thế hệ và không bỏ qua thế hệ.", tip: "Luôn thử hai giả thuyết thường gặp: lặn trên nhiễm sắc thể thường và lặn liên kết X." }
          ],
          formula: "Aa x Aa cho 1 AA : 2 Aa : 1 aa, kiểu hình 3 : 1"
        }
      ]
    },
    {
      title: "Trao đổi chất và dòng năng lượng",
      summary: "Quang hợp, hô hấp tế bào và cách năng lượng đi qua hệ sinh thái.",
      lessons: [
        {
          id: "td1",
          title: "Quang hợp: pha sáng và chu trình Calvin",
          minutes: 24,
          level: "Trung bình",
          summary: "Tách quang hợp thành hai pha với nguyên liệu, sản phẩm và vị trí xảy ra rõ ràng.",
          points: ["Pha sáng tạo ATP và NADPH, giải phóng O2 từ nước.", "Chu trình Calvin cố định CO2 nhờ enzym RuBisCO.", "Mỗi phân tử glucose cần 6 CO2 và 18 ATP, 12 NADPH."],
          steps: [
            { title: "Pha sáng trên màng thylakoid", body: "Diệp lục hấp thụ ánh sáng đỏ và xanh tím, đẩy electron qua chuỗi truyền electron, bơm proton vào lòng thylakoid. Dòng proton quay lại qua ATP synthase tạo ATP theo hóa thẩm, còn NADP+ nhận electron thành NADPH. Nước bị quang phân để bù electron và thải O2.", tip: "O2 thoát ra có nguồn gốc từ nước, không phải từ CO2, đây là kết quả của thí nghiệm đánh dấu đồng vị." },
            { title: "Chu trình Calvin trong stroma", body: "RuBisCO gắn CO2 vào ribulose-1,5-bisphosphat tạo 3-phosphoglycerat, sau đó khử bằng ATP và NADPH thành glyceraldehyde-3-phosphat. Phần lớn sản phẩm được tái tạo để tiếp tục chu trình, phần còn lại đi tổng hợp glucose và tinh bột.", tip: "RuBisCO là enzym phổ biến nhất trên Trái Đất nhưng tốc độ làm việc khá chậm." },
            { title: "Quang hô hấp và thực vật C4", body: "Khi trời nóng và khô, khí khổng đóng làm CO2 giảm, O2 tăng khiến RuBisCO gắn O2 thay vì CO2, gây quang hô hấp và mất năng lượng. Thực vật C4 như ngô, mía tách cố định CO2 ban đầu ở tế bào mô giậu và trung mô bó mạch, nhờ đó giữ năng suất cao trong điều kiện nắng mạnh.", tip: "So sánh ngô C4 với lúa C3 trong cùng một ngày nắng gắt để thấy khác biệt." }
          ],
          formula: "6 CO2 + 6 H2O + ánh sáng cho C6H12O6 + 6 O2"
        },
        {
          id: "td2",
          title: "Hô hấp tế bào: ba chặng",
          minutes: 24,
          level: "Nâng cao",
          summary: "Đi theo một phân tử glucose qua đường phân, chu trình Krebs và chuỗi truyền electron.",
          points: ["Đường phân ở tế bào chất cho 2 ATP và 2 NADH, không cần O2.", "Chu trình Krebs ở chất nền ty thể tạo NADH, FADH2 và CO2.", "Chuỗi truyền electron tạo khoảng 26 đến 28 ATP nhờ hóa thẩm."],
          steps: [
            { title: "Đường phân", body: "Glucose được phosphoryl hóa hai lần rồi cắt thành hai phân tử pyruvat, mỗi phân tử 3 carbon. Giai đoạn này tiêu 2 ATP nhưng thu 4 ATP, lãi ròng 2 ATP và 2 NADH. Đây là lý do cơ thể vẫn có năng lượng khi thiếu oxy.", tip: "Tổng năng lượng thu được từ một glucose khi có oxy là khoảng 30 đến 32 ATP." },
            { title: "Chu trình Krebs", body: "Pyruvat vào ty thể, bị decarboxyl hóa thành acetyl-CoA và thải CO2. Acetyl-CoA kết hợp với oxaloacetat, chu trình quay một vòng cho mỗi acetyl-CoA, thu 3 NADH, 1 FADH2, 1 ATP và 2 CO2. Vì mỗi glucose cho hai acetyl-CoA nên chu trình quay hai vòng.", tip: "CO2 thở ra chủ yếu sinh từ bước decarboxyl hóa và chu trình Krebs, không phải từ đường phân." },
            { title: "Chuỗi truyền electron và hóa thẩm", body: "NADH và FADH2 nhường electron cho bốn phức hợp trên màng trong ty thể, năng lượng được dùng bơm proton ra khoang giữa màng. Proton quay vào qua ATP synthase làm enzym quay và phosphoryl hóa ADP. Oxy là chất nhận electron cuối cùng, vì thế thiếu oxy thì chuỗi dừng và tế bào chuyển sang lên men.", tip: "Chất độc như cyanid chặn phức hợp IV, chuỗi dừng dù vẫn đủ oxy." }
          ],
          formula: "C6H12O6 + 6 O2 cho 6 CO2 + 6 H2O + khoảng 30 ATP"
        },
        {
          id: "td3",
          title: "Dòng năng lượng và chu trình vật chất",
          minutes: 20,
          level: "Cơ bản",
          summary: "Phân biệt dòng năng lượng một chiều với chu trình vật chất quay vòng trong hệ sinh thái.",
          points: ["Năng lượng đi một chiều từ Mặt Trời và thất thoát dần dưới dạng nhiệt.", "Vật chất như carbon, nitơ được luân chuyển qua sinh vật và môi trường.", "Mỗi bậc dinh dưỡng chỉ truyền khoảng 10 phần trăm năng lượng lên bậc trên."],
          steps: [
            { title: "Tháp năng lượng", body: "Sinh vật sản xuất nhận khoảng 1 phần trăm năng lượng ánh sáng để tổng hợp chất hữu cơ. Hiệu suất sinh thái khoảng 10 phần trăm khiến chuỗi thức ăn hiếm khi dài quá bốn đến năm bậc. Một đồng cỏ nuôi được nhiều bò hơn số hổ nuôi được trên cùng diện tích.", tip: "Muốn tính năng lượng bậc trên, nhân năng lượng bậc dưới với 0,1." },
            { title: "Chu trình carbon", body: "Quang hợp lấy CO2, hô hấp và phân giải trả CO2 về khí quyển, đốt nhiên liệu hóa thạch bổ sung thêm một lượng lớn. Đại dương và rừng đóng vai trò bể chứa carbon quan trọng. Cân bằng này quyết định nồng độ CO2 và khí hậu.", tip: "Vẽ mũi tên hai chiều giữa khí quyển, sinh vật và đại dương thay vì một đường thẳng." },
            { title: "Vật chất tuần hoàn, năng lượng không", body: "Nguyên tử carbon trong cơ thể em từng nằm trong khí quyển hoặc trong một con khủng long, vì vật chất quay vòng. Ngược lại, nhiệt sinh ra từ hô hấp không thể dùng lại để quang hợp, nên hệ sinh thái luôn cần nguồn năng lượng mới từ Mặt Trời.", tip: "Đây là câu hỏi phân biệt rất hay gặp trong đề thi: vật chất tuần hoàn, năng lượng một chiều." }
          ],
          formula: "Hiệu suất sinh thái khoảng 10 phần trăm giữa hai bậc dinh dưỡng"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Mô hình khảm lỏng", back: "Màng sinh chất là lớp photpholipit kép linh động có protein, cholesterol và glycoprotein phân bố không đều.", hint: "Khảm là các protein nằm rải rác, lỏng là các phân tử di chuyển được.", example: "Hồng cầu đổi hình dạng khi đi qua mao mạch hẹp nhờ màng linh động." },
    { front: "Thẩm thấu", back: "Sự khuếch tán của nước qua màng bán thấm theo chiều từ nơi có thế nước cao sang nơi có thế nước thấp.", hint: "Nước đi về phía có nhiều chất tan hơn.", example: "Rễ cây hút nước khi dịch đất loãng hơn dịch trong tế bào lông hút." },
    { front: "Ty thể", back: "Bào quan màng kép, màng trong gấp thành mào, nơi diễn ra chuỗi truyền electron và tổng hợp phần lớn ATP.", hint: "Mào gấp càng nhiều thì tạo ATP càng nhiều.", example: "Tế bào cơ tim chứa rất nhiều ty thể vì nhu cầu năng lượng cao." },
    { front: "Lục lạp", back: "Bào quan màng kép chứa thylakoid và stroma, thực hiện quang hợp ở tế bào thực vật.", hint: "Pha sáng trên màng thylakoid, pha tối trong stroma.", example: "Tế bào mô giậu của lá chứa hàng chục lục lạp." },
    { front: "Ribosome", back: "Phức hợp rRNA và protein, nơi dịch mã mRNA thành chuỗi polypeptide.", hint: "Nhà máy lắp ghép axit amin.", example: "Kháng sinh streptomycin bám ribosome 70S của vi khuẩn để chặn dịch mã." },
    { front: "Bộ máy Golgi", back: "Chồng túi dẹt sửa đổi, phân loại và đóng gói protein cùng lipit trước khi gửi đến đích.", hint: "Bưu điện của tế bào, dán nhãn trước khi gửi.", example: "Insulin được đóng gói trong túi tiết tại Golgi của tế bào beta tụy." },
    { front: "Lysosome", back: "Túi chứa enzym thủy phân, hoạt động mạnh ở pH khoảng 5, phân giải chất lạ và bào quan hỏng.", hint: "Dạ dày nhỏ có màng bọc của tế bào.", example: "Đại thực bào tiêu hóa vi khuẩn sau khi thực bào." },
    { front: "Nguyên phân", back: "Một lần phân chia tạo hai tế bào con có bộ nhiễm sắc thể giống hệt tế bào mẹ 2n.", hint: "Giữ nguyên số lượng, phục vụ sinh trưởng và sửa chữa.", example: "Tế bào biểu bì da liên tục thay mới bằng nguyên phân." },
    { front: "Giảm phân", back: "Hai lần phân chia liên tiếp tạo bốn tế bào đơn bội, có trao đổi chéo và phân ly độc lập.", hint: "Giảm một nửa bộ nhiễm sắc thể để tạo giao tử.", example: "Một tinh bào bậc một ở người cho bốn tinh trùng n = 23." },
    { front: "Trao đổi chéo", back: "Sự trao đổi đoạn giữa các crômatit khác nguồn trong cặp tương đồng ở kỳ trước I, tạo hoán vị gen.", hint: "Xảy ra khi nhiễm sắc thể bắt cặp thành thể lưỡng trị.", example: "Hoán vị gen giữa hai locut trên cùng nhiễm sắc thể làm tăng biến dị." },
    { front: "Chu trình Calvin", back: "Chuỗi phản ứng trong stroma cố định CO2 nhờ RuBisCO để tạo đường, dùng ATP và NADPH của pha sáng.", hint: "Pha không cần ánh sáng trực tiếp nhưng vẫn cần sản phẩm của pha sáng.", example: "Ba vòng chu trình tạo một phân tử glyceraldehyde-3-phosphat." },
    { front: "Hóa thẩm", back: "Tổng hợp ATP nhờ dòng proton đi qua ATP synthase từ khoang có nồng độ cao sang khoang thấp.", hint: "Proton chảy qua tuabin ATP synthase.", example: "Ty thể và lục lạp đều dùng cơ chế này để tạo ATP." }
  ],
  quiz: [
    { q: "Bào quan nào tổng hợp phần lớn ATP trong tế bào nhân thực?", options: ["Ribosome", "Lysosome", "Ty thể", "Bộ máy Golgi"], answer: 2, explain: "Chuỗi truyền electron và ATP synthase nằm trên màng trong ty thể, nơi tạo khoảng 26 đến 28 ATP cho mỗi glucose." },
    { q: "Trong nguyên phân, nhiễm sắc thể xếp thành một hàng trên mặt phẳng xích đạo ở kỳ nào?", options: ["Kỳ giữa", "Kỳ trước", "Kỳ sau", "Kỳ cuối"], answer: 0, explain: "Kỳ giữa là lúc các nhiễm sắc thể kép co xoắn cực đại và xếp hàng, thuận lợi để quan sát và đếm số lượng." },
    { q: "Ở người, một tế bào sinh tinh giảm phân bình thường tạo ra bao nhiêu tinh trùng?", options: ["1", "2", "8", "4"], answer: 3, explain: "Giảm phân gồm hai lần phân chia liên tiếp: một tinh bào bậc một cho hai tinh bào bậc hai, rồi bốn tinh trùng đơn bội." },
    { q: "Sản phẩm nào của pha sáng được dùng trực tiếp trong chu trình Calvin?", options: ["O2 và glucose", "ATP và NADPH", "CO2 và H2O", "ADP và NADP+"], answer: 1, explain: "Pha sáng tạo ATP và NADPH; chu trình Calvin dùng hai chất này để khử 3-phosphoglycerat thành đường." },
    { q: "Bố mẹ đều có kiểu gen Aa, xác suất sinh con có kiểu hình lặn là bao nhiêu?", options: ["0", "1/2", "1/4", "3/4"], answer: 2, explain: "Bảng Punnett cho 1 AA : 2 Aa : 1 aa, nên kiểu hình lặn chỉ chiếm 1/4." },
    { q: "Enzym RuBisCO tham gia vào giai đoạn nào của quang hợp?", options: ["Quang phân nước", "Chuỗi truyền electron", "Tổng hợp diệp lục", "Cố định CO2"], answer: 3, explain: "RuBisCO gắn CO2 vào ribulose-1,5-bisphosphat, bước mở đầu chu trình Calvin trong stroma." },
    { q: "Bào quan nào nhận protein từ lưới nội chất hạt để sửa đổi và đóng gói?", options: ["Bộ máy Golgi", "Ty thể", "Lysosome", "Nhân"], answer: 0, explain: "Golgi nhận túi từ lưới nội chất ở mặt cis, sửa đổi rồi đóng gói ở mặt trans để gửi đến màng hoặc lysosome." },
    { q: "Đặc điểm nào chỉ có ở giảm phân mà không có ở nguyên phân?", options: ["Nhân đôi DNA", "Bắt cặp tương đồng và trao đổi chéo", "Co xoắn nhiễm sắc thể", "Hình thành thoi phân bào"], answer: 1, explain: "Tiếp hợp và trao đổi chéo ở kỳ trước I chỉ xảy ra trong giảm phân, tạo nguồn biến dị tổ hợp." },
    { q: "Oxy giải phóng trong quang hợp có nguồn gốc từ phân tử nào?", options: ["CO2", "Glucose", "Nước", "NADPH"], answer: 2, explain: "Quang phân nước ở pha sáng cung cấp electron thay thế cho diệp lục và thải ra O2." },
    { q: "Hiệu suất sinh thái giữa hai bậc dinh dưỡng liên tiếp thường khoảng bao nhiêu?", options: ["1 phần trăm", "10 phần trăm", "50 phần trăm", "90 phần trăm"], answer: 1, explain: "Khoảng 90 phần trăm năng lượng mất đi chủ yếu dưới dạng nhiệt, chỉ khoảng 10 phần trăm truyền lên bậc trên." }
  ],
  lab: {
    kind: "diagram",
    title: "Bản đồ bào quan tế bào nhân thực",
    lead: "Nhấn vào từng bào quan để xem cấu trúc, chức năng và dấu hiệu nhận biết. Có thể tắt lớp màng sinh chất để nhìn rõ các bào quan bên trong.",
    stageLabel: "Sơ đồ tế bào tương tác",
    controlNote: "Chọn một bào quan trên sơ đồ, hoặc tắt lớp màng để quan sát phần bên trong.",
    note: "Một tế bào động vật điển hình có hàng nghìn bào quan; sơ đồ chỉ giữ lại các cấu trúc có vai trò chức năng rõ ràng nhất.",
    viewBox: "0 0 600 380",
    pickHint: "Chọn một bào quan",
    layers: [ { id: "membrane", label: "Hiện màng sinh chất" } ],
    shapes: [
      { type: "polygon", points: "70,190 78,128 112,78 168,48 240,34 320,34 390,50 452,80 505,124 542,180 545,232 518,286 468,326 400,350 320,358 240,352 172,334 112,300 78,252", lx: 300, ly: 52, label: "Màng sinh chất", layer: "membrane", fill: "#16a34a", opacity: 0.1, strokeWidth: 2.4, info: { title: "Màng sinh chất", desc: "Lớp photpholipit kép dày 7 đến 8 nm có protein xuyên màng và glycoprotein. Màng kiểm soát chất ra vào theo cả khuếch tán và vận chuyển tích cực tốn ATP.", tags: ["Thấm chọn lọc", "Khảm lỏng", "Glycoprotein"] } },
      { type: "circle", cx: 300, cy: 196, r: 70, label: "Nhân", fill: "#15803d", opacity: 0.16, info: { title: "Nhân tế bào", desc: "Chứa DNA dạng chất nhiễm sắc và là trung tâm điều khiển phiên mã. Lỗ nhân cho mRNA và protein đi qua theo tín hiệu riêng.", tags: ["DNA", "Phiên mã", "Lỗ nhân"] } },
      { type: "circle", cx: 270, cy: 170, r: 22, label: "Hạch nhân", fill: "#22c55e", opacity: 0.34, info: { title: "Hạch nhân", desc: "Vùng đặc trong nhân nơi rRNA được tổng hợp và các tiểu đơn vị ribosome được lắp ráp sơ bộ.", tags: ["rRNA", "Ribosome"] } },
      { type: "ellipse", cx: 470, cy: 150, rx: 55, ry: 28, label: "Ty thể", fill: "#0f766e", opacity: 0.26, info: { title: "Ty thể", desc: "Bào quan màng kép, màng trong gấp thành mào chứa chuỗi truyền electron. Đây là nơi tổng hợp phần lớn ATP của tế bào.", tags: ["ATP", "Mào", "DNA vòng"] } },
      { type: "ellipse", cx: 190, cy: 120, rx: 50, ry: 26, label: "Lưới nội chất", fill: "#4d7c0f", opacity: 0.24, info: { title: "Lưới nội chất hạt", desc: "Hệ màng gấp nếp có ribosome bám trên bề mặt, tổng hợp protein tiết và protein màng rồi chuyển sang Golgi.", tags: ["Tổng hợp protein", "Ribosome"] } },
      { type: "rect", x: 430, y: 250, w: 96, h: 44, rx: 18, label: "Golgi", fill: "#65a30d", opacity: 0.3, info: { title: "Bộ máy Golgi", desc: "Chồng túi dẹt sửa đổi protein bằng glycosyl hóa, đóng gói và dán nhãn địa chỉ trước khi gửi túi tiết.", tags: ["Đóng gói", "Glycosyl hóa", "Túi tiết"] } },
      { type: "circle", cx: 180, cy: 280, r: 26, label: "Lysosome", fill: "#166534", opacity: 0.26, info: { title: "Lysosome", desc: "Túi chứa enzym thủy phân hoạt động ở pH khoảng 5, phân giải chất lạ, vi khuẩn bị thực bào và bào quan hỏng.", tags: ["Thủy phân", "pH axit", "Tái chế"] } },
      { type: "ellipse", cx: 118, cy: 196, rx: 26, ry: 15, label: "Ribosome", fill: "#3f6212", opacity: 0.4, info: { title: "Ribosome", desc: "Phức hợp rRNA và protein gồm hai tiểu đơn vị, nơi dịch mã mRNA thành chuỗi polypeptide.", tags: ["Dịch mã", "rRNA"] } },
      { type: "rect", x: 352, y: 292, w: 56, h: 30, rx: 10, label: "Trung thể", fill: "#0284c7", opacity: 0.26, info: { title: "Trung thể", desc: "Gồm hai trung tử xếp vuông góc, là trung tâm tổ chức vi ống và tạo thoi phân bào ở tế bào động vật.", tags: ["Vi ống", "Thoi phân bào"] } }
    ],
    links: [
      { x1: 300, y1: 196, x2: 190, y2: 120, label: "chuyển protein", dash: true },
      { x1: 300, y1: 196, x2: 470, y2: 150, label: "cung cấp ATP", dash: true },
      { x1: 478, y1: 272, x2: 205, y2: 280, label: "gửi enzym", dash: true }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Thảo Vy", progress: 82, score: 8.6, status: "Tốt", note: "Đọc sơ đồ bào quan rất nhanh, cần luyện thêm bài tập giảm phân." },
      { name: "Trần Quốc Bảo", progress: 54, score: 7.1, status: "Đang học", note: "Hay nhầm số nhiễm sắc thể ở kỳ sau nguyên phân." },
      { name: "Lê Minh Châu", progress: 93, score: 9.3, status: "Tốt", note: "Làm tốt phần phả hệ, có thể nhận bài nâng cao về hoán vị gen." },
      { name: "Phạm Gia Huy", progress: 27, score: 5.4, status: "Cần hỗ trợ", note: "Chưa hoàn thành chương trao đổi chất, thiếu 4 phiếu bài tập." },
      { name: "Vũ Hoàng Yến", progress: 68, score: 7.9, status: "Đang học", note: "Tiến bộ đều, nên ôn lại chuỗi truyền electron." },
      { name: "Đỗ Nhật Nam", progress: 46, score: 6.5, status: "Đang học", note: "Nhầm pha sáng với chu trình Calvin, cần vẽ lại sơ đồ." }
    ],
    submissions: [
      { student: "Nguyễn Thảo Vy", lesson: "Phiếu bài tập giảm phân và biến dị", time: "Hôm qua 21:20", status: "Chờ chấm" },
      { student: "Phạm Gia Huy", lesson: "Sơ đồ bào quan tự vẽ", time: "Hôm qua 18:50", status: "Chờ chấm" },
      { student: "Lê Minh Châu", lesson: "Bài tập phả hệ số 3", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm làm tiêu bản rễ hành, mỗi nhóm mang theo kim mũi mác.",
      "Bài kiểm tra giữa kỳ gồm 30 phần trăm trắc nghiệm và 70 phần trăm tự luận.",
      "Sinh viên chưa đạt tiến độ 40 phần trăm gặp trợ giảng vào chiều thứ Sáu."
    ]
  },
  className: "Sinh học tế bào – K25",
  brief: "BTL-06_bioquest-mon-sinh-hoc.md"
};
