window.BTL_DATA = {
  id: "nursemate",
  code: "BTL-19",
  name: "NurseMate",
  monogram: "NM",
  subject: "Điều dưỡng cơ bản",
  level: "Đại học",
  group: "Y & Sức khỏe",
  accent: "#e11d48",
  accent2: "#0d9488",
  font: "rounded",
  tagline: "Tập nói đúng câu với bệnh nhân trước khi bước vào phòng bệnh thật.",
  intro: "NurseMate đưa các tình huống giao tiếp và quy trình chăm sóc vào một khung hội thoại có phản hồi từng lượt. Sinh viên chọn câu trả lời, đọc ngay lý do đúng sai và rút kinh nghiệm trước khi thực hành lâm sàng.",
  hero: { title: "Điều dưỡng", highlight: "học bằng tình huống thật" },
  heroBadge: "Hội thoại lâm sàng · Sinh hiệu",
  labShort: "TÌNH HUỐNG",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ ghi nhớ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt được chọn cho Điều dưỡng: hội thoại có phản hồi, thẻ quy trình từng bước và bảng sinh hiệu đối chiếu chuẩn.",
  pathLead: "Đi từ quy trình chăm sóc 5 bước, sang dấu hiệu sinh tồn, rồi giao tiếp và an toàn người bệnh. Mỗi chương đều có tình huống để luyện phản xạ.",
  features: [
    { badge: "01", title: "Hội thoại có phản hồi", desc: "Năm lượt trao đổi với bệnh nhân và người nhà, mỗi lượt hai đến ba cách đáp, kèm giải thích vì sao cách đó phù hợp hoặc không." },
    { badge: "02", title: "Quy trình 5 bước", desc: "Phiếu chăm sóc tách đúng năm bước từ nhận định đến đánh giá, có gợi ý cho từng ô để không bỏ sót dữ kiện." },
    { badge: "03", title: "Sinh hiệu so chuẩn", desc: "Nhập mạch, nhiệt, huyết áp, nhịp thở và SpO2 để so với ngưỡng người lớn, nhận cảnh báo khi vượt ngưỡng." }
  ],
  modules: [
    {
      title: "Quy trình chăm sóc 5 bước",
      summary: "Từ nhận định dữ kiện đến chẩn đoán điều dưỡng, kế hoạch, thực hiện và đánh giá.",
      lessons: [
        {
          id: "qt1",
          title: "Nhận định và chẩn đoán điều dưỡng",
          minutes: 22,
          level: "Cơ bản",
          summary: "Thu thập dữ kiện chủ quan, khách quan và viết chẩn đoán điều dưỡng đúng cấu trúc.",
          points: ["Dữ kiện chủ quan là lời kể của bệnh nhân, khách quan là số đo và quan sát.", "Chẩn đoán điều dưỡng mô tả phản ứng của người bệnh, không phải tên bệnh.", "Mỗi chẩn đoán cần có yếu tố liên quan và bằng chứng."],
          steps: [
            { title: "Thu thập dữ kiện", body: "Hỏi bệnh nhân bằng câu mở như hiện giờ ông thấy khó chịu nhất ở đâu, sau đó đo mạch, nhiệt, huyết áp, nhịp thở và SpO2. Ghi lại cả lời kể và số đo vì hai nguồn này bổ sung cho nhau. Với người lớn tuổi, hỏi thêm về thuốc đang dùng và người thân hỗ trợ.", tip: "Dùng câu hỏi mở trước, câu hỏi đóng sau để không dẫn dắt câu trả lời." },
            { title: "Viết chẩn đoán điều dưỡng", body: "Cấu trúc gồm vấn đề, nguyên nhân liên quan và bằng chứng, ví dụ đau cấp tính vùng ngực liên quan đến thiếu máu cơ tim, biểu hiện bằng lời kể đau 7 trên 10 và nhịp tim 102. Không viết thay chẩn đoán y khoa như nhồi máu cơ tim cấp. Cách viết này giúp điều dưỡng chọn can thiệp độc lập phù hợp.", tip: "Nếu chẩn đoán không kèm bằng chứng thì rất khó đánh giá lại sau can thiệp." },
            { title: "Ưu tiên vấn đề", body: "Sau khi liệt kê, sắp xếp theo mức đe dọa tính mạng: đường thở, hô hấp, tuần hoàn, sau đó là đau và lo lắng. Bệnh nhân khó thở luôn được xử lý trước bệnh nhân than phiền mất ngủ. Ghi rõ thứ tự ưu tiên để ca trực sau tiếp nhận đúng trọng tâm.", tip: "Dùng quy tắc ABC: đường thở, hô hấp, tuần hoàn, rồi mới đến các nhu cầu khác." }
          ],
          formula: "Chẩn đoán điều dưỡng = vấn đề + yếu tố liên quan + bằng chứng"
        },
        {
          id: "qt2",
          title: "Lập kế hoạch và thực hiện can thiệp",
          minutes: 22,
          level: "Trung bình",
          summary: "Viết mục tiêu đo lường được và chọn can thiệp theo thứ tự ưu tiên.",
          points: ["Mục tiêu phải cụ thể, đo được và có thời hạn.", "Can thiệp chia thành độc lập, phối hợp và phụ thuộc y lệnh.", "Mỗi can thiệp đều phải dựa trên bằng chứng và an toàn cho người bệnh."],
          steps: [
            { title: "Viết mục tiêu SMART", body: "Mục tiêu tốt là bệnh nhân giảm đau từ 7 xuống dưới 4 trên 10 trong vòng 60 phút sau khi dùng thuốc theo y lệnh. Tránh viết mục tiêu chung chung như bệnh nhân dễ chịu hơn. Mục tiêu đo được giúp đánh giá bước 5 khách quan.", tip: "Nếu không đặt được con số và mốc thời gian, mục tiêu chưa đạt chuẩn." },
            { title: "Phân loại can thiệp", body: "Can thiệp độc lập là việc điều dưỡng tự làm như tư thế Fowler giúp dễ thở, theo dõi sinh hiệu, hướng dẫn thở sâu. Can thiệp phối hợp là trao đổi với đồng nghiệp hoặc dinh dưỡng. Can thiệp phụ thuộc y lệnh là dùng thuốc, cần kiểm tra đúng chỉ định và đúng liều trước khi thực hiện.", tip: "Khi nhận y lệnh miệng khẩn cấp, phải đọc lại nguyên văn và ghi rõ người ra y lệnh." },
            { title: "Thực hiện an toàn", body: "Trước mỗi can thiệp, xác nhận đúng người bệnh bằng hai thông tin định danh, giải thích việc sắp làm và lấy sự đồng ý. Chuẩn bị đủ dụng cụ để không phải rời phòng giữa thủ thuật. Trong khi làm, tiếp tục quan sát sắc mặt, nhịp thở và phản ứng của bệnh nhân.", tip: "Vừa làm vừa giải thích giúp giảm lo lắng và giảm cử động của bệnh nhân." }
          ],
          formula: "Mục tiêu SMART: cụ thể, đo được, khả thi, liên quan, có thời hạn"
        },
        {
          id: "qt3",
          title: "Đánh giá và ghi chép",
          minutes: 20,
          level: "Cơ bản",
          summary: "Đối chiếu kết quả với mục tiêu và ghi chép theo nguyên tắc trung thực, kịp thời.",
          points: ["Đánh giá dựa trên dữ kiện đo lại, không dựa trên cảm nhận.", "Ghi chép phải khách quan, đúng thời điểm và có chữ ký.", "Nếu mục tiêu chưa đạt, phải sửa kế hoạch chứ không sửa số liệu."],
          steps: [
            { title: "Đo lại và so sánh", body: "Sau 60 phút dùng thuốc giảm đau, đo lại mức đau và ghi nhận bệnh nhân báo đau 3 trên 10, mục tiêu đã đạt. Nếu vẫn 7 trên 10, cần báo bác sĩ và xem lại cách dùng thuốc. Đánh giá luôn gắn với mốc thời gian đã cam kết trong kế hoạch.", tip: "Đo lại bằng cùng thang điểm và cùng cách hỏi để kết quả so sánh được." },
            { title: "Nguyên tắc ghi chép", body: "Ghi sự kiện đã xảy ra, không ghi suy đoán như bệnh nhân khó tính. Câu ghi nên là bệnh nhân nói đau 7 trên 10, nhịp tim 102, đã báo bác sĩ lúc 14 giờ 20. Ghi ngay trong ca, không để cuối ca viết lại vì dễ sai sót.", tip: "Hồ sơ bệnh án là tài liệu pháp lý, câu chữ phải chính xác và trung thực." },
            { title: "Sửa kế hoạch", body: "Khi mục tiêu không đạt, họp lại với bệnh nhân và đồng nghiệp để tìm nguyên nhân, ví dụ bệnh nhân chưa hiểu cách gọi trợ giúp. Điều chỉnh có thể là đổi tư thế, chia nhỏ hoạt động hoặc hẹn bác sĩ đánh giá lại. Đây là vòng lặp cải tiến của chính quy trình 5 bước.", tip: "Một kế hoạch không bao giờ sai là dấu hiệu chưa được đánh giá thật." }
          ],
          formula: "Đánh giá: so kết quả đo lại với mục tiêu, rồi quyết định giữ hay sửa kế hoạch"
        }
      ]
    },
    {
      title: "Dấu hiệu sinh tồn",
      summary: "Ngưỡng bình thường, cách đo đúng và cách báo động khi có bất thường.",
      lessons: [
        {
          id: "st1",
          title: "Nhiệt độ và nhịp thở",
          minutes: 20,
          level: "Cơ bản",
          summary: "Đo nhiệt độ đúng vị trí và đếm nhịp thở mà bệnh nhân không biết để tránh thay đổi nhịp.",
          points: ["Nhiệt độ miệng bình thường 36,5 đến 37,5 độ C, sốt khi từ 38 độ C.", "Nhịp thở người lớn 16 đến 20 lần mỗi phút, trẻ sơ sinh 40 đến 60.", "Nhịp thở là dấu hiệu sớm nhất của suy hô hấp hoặc sốc."],
          steps: [
            { title: "Đo nhiệt độ", body: "Nhiệt độ trực tràng sát nhiệt độ trung tâm nhất, nhiệt độ nách thấp hơn khoảng 0,5 độ C. Lau khô nách và kẹp đủ thời gian theo hướng dẫn của nhiệt kế, thường 3 đến 5 phút với nhiệt kế thủy ngân. Ghi rõ vị trí đo vì mỗi vị trí có ngưỡng khác nhau.", tip: "Sau khi bệnh nhân uống nước nóng hoặc hút thuốc, chờ 15 phút mới đo miệng." },
            { title: "Đếm nhịp thở đúng cách", body: "Đặt tay như đang đo mạch để bệnh nhân không để ý, đếm số lần ngực nâng lên trong trọn một phút. Quan sát thêm độ sâu, tính đều đặn và có co kéo cơ liên sườn không. Nhịp thở nhanh trên 24 lần mỗi phút kèm khó nói cả câu là dấu hiệu cần báo ngay.", tip: "Đừng nói đang đếm nhịp thở, bệnh nhân sẽ tự điều chỉnh nhịp thở." },
            { title: "Nhận diện bất thường", body: "Thở nhanh nông, tím môi, SpO2 dưới 94 phần trăm, hoặc nhịp thở chậm dưới 10 lần mỗi phút đều là báo động. Thở Cheyne-Stokes với chu kỳ tăng giảm gợi ý tổn thương thân não hoặc suy tim nặng. Ghi nhận và báo bác sĩ kèm các chỉ số khác để đánh giá toàn cảnh.", tip: "Khi nghi ngờ, hãy đếm lại trong 30 giây rồi nhân đôi để xác nhận." }
          ],
          formula: "Người lớn: nhịp thở 16 đến 20 lần mỗi phút, nhiệt độ 36,5 đến 37,5 độ C"
        },
        {
          id: "st2",
          title: "Mạch và huyết áp",
          minutes: 24,
          level: "Trung bình",
          summary: "Xác định vị trí bắt mạch, kỹ thuật đo huyết áp và ý nghĩa của từng con số.",
          points: ["Mạch người lớn bình thường 60 đến 100 lần mỗi phút và đều.", "Huyết áp bình thường dưới 120 trên 80 mmHg, tăng khi từ 140 trên 90.", "Chênh lệch huyết áp hai tay trên 20 mmHg gợi ý bệnh mạch máu lớn."],
          steps: [
            { title: "Bắt mạch", body: "Mạch quay ở mặt trước cổ tay phía ngón cái là vị trí thường dùng, ấn vừa đủ để cảm nhận chứ không bóp mất mạch. Đếm trong 30 giây rồi nhân đôi nếu mạch đều, đếm đủ 60 giây nếu không đều. Ghi nhận cả tần số và tính chất như mạch yếu, mạch không đều.", tip: "Bệnh nhân rung nhĩ luôn phải đếm mạch đủ một phút và đối chiếu với nhịp tim trên monitor." },
            { title: "Đo huyết áp", body: "Bệnh nhân nghỉ 5 phút, ngồi tựa lưng, tay ngang mức tim, băng quấn phủ hai phần ba cánh tay. Bơm lên khoảng 30 mmHg trên mức mất mạch rồi xả chậm 2 đến 3 mmHg mỗi giây. Đo hai lần cách nhau một phút và lấy trung bình.", tip: "Không đo huyết áp ở tay đang truyền dịch hoặc tay có đường rò chạy thận." },
            { title: "Đọc kết quả", body: "Huyết áp 150 trên 95 mmHg ở người lớn là tăng huyết áp, cần đo lại và báo bác sĩ nếu vẫn cao. Huyết áp tụt kèm mạch nhanh, da lạnh và lơ mơ gợi ý sốc, phải xử trí khẩn. Huyết áp tâm thu bình thường nhưng tâm trương rất thấp có thể gặp ở hở van động mạch chủ.", tip: "Luôn đặt con số trong bối cảnh lâm sàng, một con số riêng lẻ ít ý nghĩa." }
          ],
          formula: "Huyết áp bình thường dưới 120 trên 80; tăng huyết áp từ 140 trên 90 mmHg"
        },
        {
          id: "st3",
          title: "Báo động sớm và bàn giao SBAR",
          minutes: 22,
          level: "Trung bình",
          summary: "Nhận diện dấu hiệu nguy hiểm và bàn giao ca theo bốn phần SBAR.",
          points: ["Thang điểm cảnh báo sớm giúp phát hiện suy giảm trước khi ngừng tim.", "SBAR gồm tình trạng, bối cảnh, đánh giá và đề nghị.", "Báo cáo phải nêu số liệu cụ thể và xu hướng, không chỉ mô tả chung."],
          steps: [
            { title: "Nhận diện dấu hiệu nguy hiểm", body: "Nhịp thở trên 25, SpO2 dưới 92 phần trăm, mạch trên 120 hoặc dưới 50, huyết áp tâm thu dưới 90, thay đổi tri giác là những dấu hiệu cần báo ngay. Xu hướng xấu dần quan trọng hơn một giá trị đơn lẻ còn trong ngưỡng. Ghi lại thời điểm và can thiệp đã làm trước khi báo.", tip: "Nếu bệnh nhân trông không ổn dù chỉ số còn trong ngưỡng, vẫn nên báo và theo dõi sát." },
            { title: "Bàn giao theo SBAR", body: "S là tình trạng hiện tại, ví dụ bệnh nhân phòng 302 khó thở tăng từ 30 phút trước. B là bối cảnh, bệnh nhân 68 tuổi nhập viện vì viêm phổi, đang thở oxy 2 lít. A là đánh giá, nhịp thở 28, SpO2 91 phần trăm, nghe phổi có ran ẩm đáy phải. R là đề nghị, xin bác sĩ đến đánh giá và xem xét tăng oxy.", tip: "Chuẩn bị giấy ghi bốn dòng S, B, A, R trước khi gọi để không bỏ sót." },
            { title: "Bàn giao ca trực", body: "Khi hết ca, bàn giao đủ danh sách bệnh nhân, vấn đề đang theo dõi, việc cần làm trong ca sau và các mốc thời gian quan trọng. Ưu tiên bệnh nhân nặng và bệnh nhân mới nhập viện. Bàn giao tại giường với bệnh nhân tham gia giúp giảm sai sót và tăng niềm tin.", tip: "Không bàn giao miệng qua hành lang, luôn có bản ghi và xác nhận lại." }
          ],
          formula: "SBAR: Situation, Background, Assessment, Recommendation"
        }
      ]
    },
    {
      title: "Giao tiếp và an toàn người bệnh",
      summary: "Kỹ năng nói, xác nhận định danh và kiểm soát nhiễm khuẩn trong ca trực.",
      lessons: [
        {
          id: "gt1",
          title: "Giao tiếp trị liệu",
          minutes: 20,
          level: "Cơ bản",
          summary: "Lắng nghe chủ động, phản hồi cảm xúc và tránh những câu nói làm mất niềm tin.",
          points: ["Lắng nghe chủ động gồm gật đầu, nhắc lại ý chính và hỏi làm rõ.", "Phản hồi cảm xúc trước, giải thích thông tin sau.", "Tránh hứa những điều ngoài thẩm quyền và tránh phủ nhận cảm xúc."],
          steps: [
            { title: "Lắng nghe chủ động", body: "Đặt câu hỏi mở, giữ im lặng đủ để bệnh nhân nói hết, rồi nhắc lại điều vừa nghe để xác nhận. Ví dụ: ông vừa nói lo vì vợ đang nằm viện ở khoa khác, đúng không ạ. Cách này giúp bệnh nhân thấy được tôn trọng và cung cấp thêm thông tin quan trọng.", tip: "Nhắc lại bằng lời của mình, không lặp lại nguyên văn máy móc." },
            { title: "Phản hồi cảm xúc", body: "Khi bệnh nhân nói sợ mổ, câu phù hợp là em hiểu cảm giác lo trước ca mổ, ông muốn kể thêm điều gì lo nhất. Không nên nói đừng lo, ca này đơn giản lắm vì phủ nhận cảm xúc và hứa thay bác sĩ. Sau khi cảm xúc được ghi nhận, mới giải thích quy trình và các bước tiếp theo.", tip: "Công thức ba bước: ghi nhận cảm xúc, tóm tắt điều đã nghe, đề nghị bước tiếp theo." },
            { title: "Giao tiếp với người nhà", body: "Người nhà thường hỏi thay bệnh nhân, cần xác định ai là người được bệnh nhân ủy quyền nhận thông tin. Chỉ chia sẻ thông tin trong phạm vi được phép và theo quy định của khoa. Khi chưa có kết quả, hẹn mốc thời gian cụ thể thay vì trả lời chung chung.", tip: "Bảo mật thông tin là nghĩa vụ nghề nghiệp, kể cả với người thân chưa được ủy quyền." }
          ],
          formula: "Ghi nhận cảm xúc, tóm tắt điều đã nghe, đề nghị bước tiếp theo"
        },
        {
          id: "gt2",
          title: "Năm đúng khi dùng thuốc",
          minutes: 22,
          level: "Trung bình",
          summary: "Áp dụng năm đúng và hai thông tin định danh để loại bỏ nhầm lẫn thuốc.",
          points: ["Đúng người bệnh, đúng thuốc, đúng liều, đúng đường, đúng thời điểm.", "Xác nhận định danh bằng hai thông tin, không dùng số giường.", "Thuốc có cửa sổ điều trị hẹp cần kiểm tra chéo với đồng nghiệp."],
          steps: [
            { title: "Năm đúng", body: "Trước khi cho thuốc, đối chiếu tên bệnh nhân và ngày sinh với y lệnh, kiểm tra tên thuốc và hàm lượng, tính lại liều, xác định đường dùng và giờ dùng. Với insulin, cần kiểm tra cả nồng độ và loại tác dụng nhanh hay chậm. Ghi nhận giờ thực tế đã cho thuốc.", tip: "Đọc nhãn thuốc hai lần, một lần khi lấy và một lần ngay trước khi cho bệnh nhân." },
            { title: "Xác nhận định danh", body: "Hỏi bệnh nhân hoặc người nhà nói rõ họ tên và ngày sinh, sau đó đối chiếu với vòng tay định danh. Không xác nhận bằng số giường hay vẻ ngoài quen mắt vì bệnh nhân có thể đổi phòng. Với bệnh nhân lơ mơ, dùng hai nguồn độc lập như vòng tay và hồ sơ.", tip: "Nếu bệnh nhân không có vòng tay, dừng lại và xin cấp lại trước khi dùng thuốc." },
            { title: "Báo cáo sự cố", body: "Khi phát hiện đã cho sai thuốc, việc đầu tiên là đánh giá tình trạng bệnh nhân và báo bác sĩ, không giấu lỗi. Sau đó ghi nhận sự cố theo quy trình báo cáo để tìm nguyên nhân hệ thống. Văn hóa báo cáo không đổ lỗi giúp giảm sự cố lặp lại.", tip: "Sự cố dùng thuốc thường do hệ thống thiếu kiểm tra chéo, không chỉ do một cá nhân." }
          ],
          formula: "Năm đúng: người bệnh, thuốc, liều, đường dùng, thời điểm"
        },
        {
          id: "gt3",
          title: "Kiểm soát nhiễm khuẩn và vệ sinh tay",
          minutes: 20,
          level: "Cơ bản",
          summary: "Năm thời điểm vệ sinh tay của WHO và thứ tự mặc, tháo phương tiện bảo hộ.",
          points: ["Vệ sinh tay trước và sau khi tiếp xúc bệnh nhân, trước thủ thuật vô khuẩn.", "Rửa tay bằng xà phòng khi tay bẩn, dùng dung dịch cồn khi tay sạch.", "Tháo phương tiện bảo hộ theo thứ tự để không tự làm nhiễm bẩn."],
          steps: [
            { title: "Năm thời điểm vệ sinh tay", body: "Trước khi chạm bệnh nhân, trước thủ thuật vô khuẩn, sau khi tiếp xúc dịch cơ thể, sau khi chạm bệnh nhân và sau khi chạm môi trường quanh bệnh nhân. Đây là năm thời điểm của WHO, áp dụng cho mọi nhân viên y tế. Vệ sinh tay đúng giúp giảm mạnh nhiễm khuẩn bệnh viện.", tip: "Đeo găng không thay thế vệ sinh tay, vẫn phải rửa tay trước và sau khi tháo găng." },
            { title: "Kỹ thuật sáu bước", body: "Làm ướt tay, xoa xà phòng phủ toàn bộ lòng bàn tay, mu bàn tay, kẽ ngón, đầu ngón và ngón cái, mỗi bước ít nhất năm lần chà. Thời gian rửa tay bằng xà phòng tối thiểu 40 đến 60 giây, dung dịch cồn khoảng 20 đến 30 giây. Chú ý đầu ngón tay và dưới móng là nơi hay bị bỏ sót.", tip: "Tháo đồng hồ và nhẫn trước khi vệ sinh tay vì các vật này giữ vi khuẩn." },
            { title: "Mặc và tháo bảo hộ", body: "Mặc theo thứ tự khẩu trang, mũ, áo choàng, găng tay; tháo theo chiều ngược lại, tháo găng trước và vệ sinh tay ngay sau đó. Với bệnh nhân cách ly qua đường hô hấp, cần khẩu trang N95 và kiểm tra độ kín trước khi vào phòng. Phương tiện bảo hộ dùng một lần không tái sử dụng.", tip: "Khi tháo áo choàng, cuộn từ trong ra ngoài để mặt ngoài không chạm vào người." }
          ],
          formula: "Năm thời điểm vệ sinh tay theo WHO, mỗi lần xà phòng tối thiểu 40 giây"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Quy trình chăm sóc 5 bước", back: "Nhận định, chẩn đoán điều dưỡng, lập kế hoạch, thực hiện và đánh giá.", hint: "Năm bước lặp lại thành vòng tròn.", example: "Bệnh nhân khó thở: nhận định SpO2 90, chẩn đoán thiếu oxy, cho nằm đầu cao, đo lại." },
    { front: "Chẩn đoán điều dưỡng", back: "Phát biểu về phản ứng của người bệnh với bệnh tật, gồm vấn đề, yếu tố liên quan và bằng chứng.", hint: "Không phải tên bệnh do bác sĩ chẩn đoán.", example: "Đau cấp vùng ngực do thiếu máu cơ tim, biểu hiện đau 7 trên 10." },
    { front: "Mục tiêu SMART", back: "Mục tiêu cụ thể, đo được, khả thi, liên quan và có thời hạn rõ ràng.", hint: "Có con số và mốc thời gian.", example: "Giảm đau dưới 4 trên 10 trong 60 phút sau khi dùng thuốc." },
    { front: "Nhịp thở bình thường", back: "Người lớn 16 đến 20 lần mỗi phút, đều và không phải gắng sức.", hint: "Trẻ sơ sinh nhanh hơn nhiều, 40 đến 60.", example: "Nhịp thở 28 lần mỗi phút kèm khó nói cả câu là dấu hiệu báo động." },
    { front: "Huyết áp bình thường", back: "Dưới 120 trên 80 mmHg; tăng huyết áp khi từ 140 trên 90 mmHg ở nhiều lần đo.", hint: "Ngưỡng 140 trên 90 là mốc chẩn đoán.", example: "Bệnh nhân 150 trên 95 cần đo lại và báo bác sĩ." },
    { front: "SpO2", back: "Độ bão hòa oxy mao mạch, bình thường từ 95 đến 100 phần trăm ở người khỏe mạnh.", hint: "Đo bằng máy kẹp ngón tay.", example: "SpO2 91 phần trăm ở bệnh nhân viêm phổi cần tăng oxy và báo bác sĩ." },
    { front: "SBAR", back: "Khung bàn giao gồm tình trạng, bối cảnh, đánh giá và đề nghị.", hint: "Bốn phần, nói ngắn và có số liệu.", example: "Bệnh nhân phòng 302 khó thở tăng, nhịp thở 28, xin bác sĩ đánh giá." },
    { front: "Năm đúng khi dùng thuốc", back: "Đúng người bệnh, đúng thuốc, đúng liều, đúng đường dùng và đúng thời điểm.", hint: "Nhiều nơi thêm đúng ghi chép.", example: "Kiểm tra vòng tay và ngày sinh trước khi tiêm kháng sinh." },
    { front: "Xác nhận định danh", back: "Dùng hai thông tin độc lập như họ tên và ngày sinh, đối chiếu với vòng tay.", hint: "Không dùng số giường.", example: "Hỏi bệnh nhân tên và ngày sinh rồi so với vòng tay trước khi cho thuốc." },
    { front: "Năm thời điểm vệ sinh tay", back: "Trước khi chạm bệnh nhân, trước thủ thuật vô khuẩn, sau tiếp xúc dịch cơ thể, sau khi chạm bệnh nhân, sau khi chạm môi trường xung quanh.", hint: "Theo hướng dẫn của WHO.", example: "Vệ sinh tay ngay sau khi tháo găng, trước khi chạm máy tính của khoa." },
    { front: "Tư thế Fowler", back: "Nằm đầu cao 45 đến 60 độ, giúp cơ hoành hạ xuống và tăng thể tích phổi.", hint: "Đầu cao, chân thấp, dùng khi khó thở.", example: "Bệnh nhân suy tim sung huyết dễ thở hơn khi nằm Fowler." },
    { front: "Sốc phản vệ", back: "Phản ứng dị ứng nặng với tụt huyết áp, khó thở, cần adrenaline tiêm bắp ngay.", hint: "Thuốc đầu tay là adrenaline, không phải kháng histamin.", example: "Ngừng ngay dịch truyền nghi ngờ và gọi hỗ trợ khi bệnh nhân nổi mày đay, khó thở." }
  ],
  quiz: [
    { q: "Bước đầu tiên trong quy trình chăm sóc 5 bước là gì?", options: ["Lập kế hoạch", "Nhận định", "Thực hiện", "Đánh giá"], answer: 1, explain: "Nhận định thu thập dữ kiện chủ quan và khách quan, là cơ sở cho chẩn đoán điều dưỡng và mọi bước sau." },
    { q: "Nhịp thở bình thường của người lớn là bao nhiêu?", options: ["8 đến 12 lần mỗi phút", "12 đến 15 lần mỗi phút", "16 đến 20 lần mỗi phút", "24 đến 30 lần mỗi phút"], answer: 2, explain: "Người lớn thở 16 đến 20 lần mỗi phút; trẻ sơ sinh 40 đến 60 lần mỗi phút." },
    { q: "Huyết áp nào được xem là tăng huyết áp ở người lớn?", options: ["Từ 140 trên 90 mmHg", "Từ 120 trên 70 mmHg", "Từ 110 trên 60 mmHg", "Từ 100 trên 60 mmHg"], answer: 0, explain: "Ngưỡng chẩn đoán tăng huyết áp là từ 140 trên 90 mmHg, cần xác nhận bằng nhiều lần đo đúng kỹ thuật." },
    { q: "Khi bàn giao ca theo SBAR, chữ R là gì?", options: ["Kết quả xét nghiệm", "Tiền sử bệnh", "Nhịp tim", "Đề nghị của điều dưỡng"], answer: 3, explain: "R là Recommendation, phần đề nghị cụ thể như xin bác sĩ đến đánh giá hay tăng oxy." },
    { q: "Cách xác nhận đúng người bệnh trước khi cho thuốc là:", options: ["Nhìn vẻ ngoài quen mắt", "Hỏi tên và ngày sinh rồi đối chiếu vòng tay", "Dựa vào số giường", "Hỏi bệnh nhân có phải ông A không"], answer: 1, explain: "Cần hai thông tin định danh độc lập và đối chiếu vòng tay; số giường và vẻ ngoài không đáng tin." },
    { q: "Thời gian rửa tay bằng xà phòng theo khuyến cáo tối thiểu là bao lâu?", options: ["10 giây", "20 giây", "5 giây", "40 đến 60 giây"], answer: 3, explain: "Rửa tay bằng xà phòng cần 40 đến 60 giây; dung dịch cồn khoảng 20 đến 30 giây." },
    { q: "Khi bệnh nhân nói rất sợ trước ca mổ, cách đáp phù hợp nhất là:", options: ["Đừng lo, ca này đơn giản mà", "Ông cứ nằm chờ bác sĩ", "Ghi nhận cảm giác lo và hỏi điều gì khiến ông lo nhất", "Chuyển ngay sang hướng dẫn nhịn ăn"], answer: 2, explain: "Giao tiếp trị liệu ghi nhận cảm xúc trước rồi mới giải thích thông tin, tránh phủ nhận cảm giác của bệnh nhân." },
    { q: "Bệnh nhân từ chối tiêm thuốc theo y lệnh, điều dưỡng nên làm gì?", options: ["Giữ chặt tay và tiêm ngay", "Giải thích lợi ích, tôn trọng lựa chọn và báo bác sĩ", "Bỏ qua và không ghi chép", "Pha thuốc vào nước uống thay thế"], answer: 1, explain: "Cần tôn trọng quyền từ chối, giải thích rõ, ghi chép đầy đủ và báo bác sĩ để điều chỉnh kế hoạch." },
    { q: "Tư thế nào giúp bệnh nhân khó thở dễ chịu hơn?", options: ["Nằm phẳng hoàn toàn", "Nằm sấp", "Đầu thấp chân cao", "Fowler với đầu cao 45 đến 60 độ"], answer: 3, explain: "Tư thế Fowler hạ cơ hoành và tăng thể tích phổi, giúp giảm công thở." },
    { q: "Dấu hiệu nào cần báo bác sĩ ngay?", options: ["Đau 2 trên 10 sau khi uống thuốc", "SpO2 91 phần trăm kèm thở nhanh", "Nhịp tim 78 lần mỗi phút", "Nhiệt độ 37 độ C"], answer: 1, explain: "SpO2 dưới 92 phần trăm kèm thở nhanh gợi ý suy hô hấp, cần can thiệp và báo bác sĩ ngay." }
  ],
  lab: {
    kind: "dialogue",
    title: "Buổi sáng ở phòng bệnh 302",
    lead: "Ông Trần Văn Minh, 68 tuổi, nhập viện vì tăng huyết áp và đang rất lo lắng. Hãy chọn cách đáp phù hợp ở từng lượt, mỗi lựa chọn đều có phản hồi giải thích.",
    stageLabel: "Hội thoại lâm sàng",
    controlNote: "Chọn một câu đáp. Nếu đúng, hội thoại tự chuyển sang lượt tiếp theo; nếu chưa phù hợp, đọc phản hồi rồi chọn lại.",
    note: "Hội thoại mô phỏng kỹ năng giao tiếp trị liệu và bàn giao SBAR, không thay thế thực hành tại giường bệnh.",
    steps: [
      {
        speaker: "Bệnh nhân",
        line: "Tôi nằm từ sáng tới giờ mà chưa ai nói tôi bị làm sao. Cứ chờ mãi thế này tôi sốt ruột lắm.",
        options: [
          { text: "Cháu chào ông, cháu là điều dưỡng phụ trách buổi sáng. Ông cho cháu hỏi ông đang khó chịu nhất ở đâu để cháu ghi lại và báo bác sĩ.", correct: true, feedback: "Đúng. Tự giới thiệu, nói rõ vai trò rồi hỏi bằng câu mở giúp bệnh nhân biết mình đang được chăm sóc và yên tâm hơn." },
          { text: "Ông cứ nằm chờ, bao giờ bác sĩ đi buồng sẽ giải thích.", correct: false, feedback: "Chưa phù hợp. Câu này đẩy trách nhiệm đi và không ghi nhận lo lắng, bệnh nhân sẽ càng sốt ruột." },
          { text: "Kết quả xét nghiệm của ông chưa có gì đáng lo, ông yên tâm.", correct: false, feedback: "Sai nguyên tắc. Không được kết luận thay bác sĩ khi chưa có chỉ định, nói sai sẽ làm mất niềm tin." }
        ]
      },
      {
        speaker: "Bệnh nhân",
        line: "Tôi lo lắm cháu ạ. Bà nhà tôi cũng đang nằm viện, không ai chăm.",
        options: [
          { text: "Cháu hiểu là ông đang lo cho bà. Ông kể cháu nghe bà đang nằm ở khoa nào, để cháu xem có cách nào liên hệ giúp ông không.", correct: true, feedback: "Đúng. Ghi nhận cảm xúc trước rồi mới tìm cách hỗ trợ, giúp bệnh nhân cảm thấy được lắng nghe thật sự." },
          { text: "Ông đừng lo, ở đây bác sĩ giỏi lắm, không sao đâu.", correct: false, feedback: "Chưa phù hợp. Câu trấn an chung chung phủ nhận cảm xúc và hứa thay bác sĩ, không giải quyết nỗi lo thật của ông." },
          { text: "Thôi ông nằm im để cháu đo huyết áp, chuyện nhà tính sau.", correct: false, feedback: "Chưa phù hợp. Cắt ngang cảm xúc làm bệnh nhân thu mình và có thể giấu thông tin quan trọng." }
        ]
      },
      {
        speaker: "Người nhà",
        line: "Chị ơi, sáng nay mẹ em có được ăn gì không? Em vừa mua cháo.",
        options: [
          { text: "Em kiểm tra giúp chị xem hôm nay mẹ có xét nghiệm cần nhịn ăn không, chị sẽ báo lại ngay để mẹ không ăn trước giờ lấy máu.", correct: true, feedback: "Đúng. Xác nhận y lệnh trước khi trả lời, vừa an toàn cho xét nghiệm vừa giữ niềm tin của người nhà." },
          { text: "Cứ cho mẹ ăn thoải mái, cháo thì không ảnh hưởng gì.", correct: false, feedback: "Sai. Ăn trước khi lấy máu có thể làm sai kết quả đường huyết và mỡ máu, phải kiểm tra y lệnh trước." },
          { text: "Chị không biết, em hỏi bác sĩ đi.", correct: false, feedback: "Chưa phù hợp. Điều dưỡng có thể kiểm tra y lệnh và hướng dẫn, trả lời như vậy làm người nhà bị động." }
        ]
      },
      {
        speaker: "Bệnh nhân",
        line: "Cháu ơi, mũi tiêm đau lắm, tôi không tiêm đâu. Để mai rồi tính.",
        options: [
          { text: "Cháu hiểu mũi tiêm làm ông đau. Thuốc này giúp hạ huyết áp và phòng biến chứng, ông cho cháu giải thích cách tiêm ít đau hơn nhé.", correct: true, feedback: "Đúng. Ghi nhận cảm giác đau, giải thích lợi ích và đề xuất cách giảm đau để bệnh nhân chủ động đồng ý." },
          { text: "Ông phải tiêm, không tiêm thì bác sĩ mắng cháu.", correct: false, feedback: "Sai. Gây áp lực và đổ trách nhiệm lên bác sĩ, vi phạm quyền được giải thích và đồng ý của bệnh nhân." },
          { text: "Vâng, thôi để mai cũng được ạ.", correct: false, feedback: "Chưa phù hợp. Bỏ qua y lệnh mà không báo bác sĩ và không ghi chép là thiếu trách nhiệm chuyên môn." }
        ]
      },
      {
        speaker: "Điều dưỡng ca trước",
        line: "Ca tôi sắp hết, em bàn giao nhanh giúp tôi tình hình phòng 302 nhé.",
        options: [
          { text: "Ông Minh 68 tuổi, viêm phổi đang thở oxy 2 lít, từ 14 giờ khó thở tăng, nhịp thở 28, SpO2 91 phần trăm, đã báo bác sĩ và chờ đánh giá lại sau 30 phút.", correct: true, feedback: "Đúng. Bàn giao đủ bốn phần SBAR với số liệu và mốc thời gian, ca sau tiếp nhận được ngay trọng tâm." },
          { text: "Phòng 302 cũng bình thường, ông ấy hơi mệt thôi, không có gì đặc biệt.", correct: false, feedback: "Chưa phù hợp. Thông tin mơ hồ làm ca sau bỏ sót dấu hiệu xấu, đây là nguyên nhân phổ biến của sự cố." },
          { text: "Để em kể từ lúc ông nhập viện hôm qua, chuyện dài lắm.", correct: false, feedback: "Chưa phù hợp. Bàn giao cần ngắn, có cấu trúc và ưu tiên vấn đề đang diễn biến, không kể tuần tự dài dòng." }
        ]
      }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Hải Yến", progress: 84, score: 8.7, status: "Tốt", note: "Giao tiếp tự tin, cần luyện thêm kỹ thuật đo huyết áp." },
      { name: "Trần Thị Mơ", progress: 61, score: 7.3, status: "Đang học", note: "Viết chẩn đoán điều dưỡng còn thiếu bằng chứng." },
      { name: "Lê Quốc Thịnh", progress: 92, score: 9.1, status: "Tốt", note: "Bàn giao SBAR rất rõ, có thể kèm cặp nhóm nhỏ." },
      { name: "Phạm Ngọc Diệp", progress: 29, score: 5.5, status: "Cần hỗ trợ", note: "Chưa hoàn thành phiếu chăm sóc 5 bước, thiếu 2 buổi thực hành." },
      { name: "Vũ Thanh Tâm", progress: 70, score: 7.9, status: "Đang học", note: "Tiến bộ đều, nên ôn lại năm thời điểm vệ sinh tay." },
      { name: "Đỗ Minh Trí", progress: 48, score: 6.4, status: "Đang học", note: "Hay bỏ qua bước xác nhận định danh trước khi cho thuốc." }
    ],
    submissions: [
      { student: "Nguyễn Hải Yến", lesson: "Phiếu chăm sóc 5 bước ca sáng", time: "Hôm qua 21:40", status: "Chờ chấm" },
      { student: "Phạm Ngọc Diệp", lesson: "Bảng ghi dấu hiệu sinh tồn", time: "Hôm qua 18:25", status: "Chờ chấm" },
      { student: "Lê Quốc Thịnh", lesson: "Bài bàn giao SBAR", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thực hành thứ Năm tại phòng tiền lâm sàng, mang đồng hồ có kim giây.",
      "Kiểm tra kỹ năng gồm đo sinh hiệu và xử lý một tình huống giao tiếp.",
      "Sinh viên chưa đạt 50 phần trăm tiến độ cần đăng ký bổ trợ trước thứ Sáu."
    ]
  },
  className: "Điều dưỡng cơ bản – K25",
  brief: "BTL-19_nursemate-mon-dieu-duong.md"
};
