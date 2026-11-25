window.BTL_DATA = {
  id: "tradelang",
  code: "BTL-15",
  name: "TradeLang",
  monogram: "Tr",
  subject: "Ngoại ngữ thương mại",
  level: "Đại học",
  group: "Ngôn ngữ & Xã hội",
  accent: "#c026d3",
  accent2: "#0891b2",
  font: "display",
  tagline: "Học thuật ngữ thương mại bằng chính tình huống đàm phán và email có thật trên bàn.",
  intro: "TradeLang gắn từ vựng với nghiệp vụ: mỗi thuật ngữ xuất hiện trong một câu chào hàng, một email khiếu nại hoặc một lượt đàm phán giá. Sinh viên luyện phản xạ chọn cách nói đúng ngữ cảnh, kèm giải thích vì sao phương án còn lại làm mất lợi thế hoặc sai chuẩn mực thương mại.",
  hero: { title: "Ngoại ngữ", highlight: "thương mại, nói đúng ý đồ" },
  heroBadge: "Glossary · Đàm phán · Hợp đồng",
  labShort: "ĐÀM PHÁN",
  labTag: "PHÒNG LAB",
  practiceTag: "GLOSSARY",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài nghiệp vụ" },
    { value: "12", label: "Thẻ thuật ngữ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho ngoại ngữ chuyên ngành: nhớ thuật ngữ theo ngữ cảnh, viết đúng giọng điệu và đàm phán có chiến lược.",
  pathLead: "Đi từ glossary cốt lõi, sang thư tín thương mại, rồi bước vào đàm phán giá và chốt điều khoản. Mỗi chương đều có bài luyện gắn với một văn bản thật.",
  features: [
    { badge: "01", title: "Hội thoại đàm phán", desc: "Năm lượt đàm phán giá giữa người mua và nhà cung cấp, mỗi lượt ba phương án; phản hồi chỉ rõ phương án nào làm mất lợi thế đàm phán." },
    { badge: "02", title: "Glossary có ngữ cảnh", desc: "Mỗi thuật ngữ đi kèm phiên âm, nghĩa và một câu trích từ chào hàng hoặc hợp đồng để thấy cách dùng thật." },
    { badge: "03", title: "Email mẫu có chú thích", desc: "Thư chào hàng và thư khiếu nại được tách thành từng phần, mỗi phần ghi rõ chức năng và mức trang trọng phù hợp." }
  ],
  modules: [
    {
      title: "Glossary thương mại cốt lõi",
      summary: "Incoterms, phương thức thanh toán và phân chia rủi ro vận tải.",
      lessons: [
        {
          id: "gl1",
          title: "Báo giá và điều kiện giao hàng",
          minutes: 22,
          level: "Cơ bản",
          summary: "Một báo giá chỉ đầy đủ khi nêu rõ số lượng, đơn giá, điều kiện giao và hiệu lực.",
          points: ["Quotation khác offer ở mức ràng buộc pháp lý.", "Incoterms quy định ai trả cước, ai chịu rủi ro và tại điểm nào.", "Thiếu điều kiện giao hàng là nguyên nhân tranh chấp phổ biến."],
          steps: [
            { title: "Đọc bốn thành phần của báo giá", body: "Một quotation chuẩn gồm số lượng, đơn giá theo đơn vị, điều kiện giao hàng và thời hạn hiệu lực, ví dụ 42 đô la một đơn vị, FOB Hải Phòng, hiệu lực 30 ngày. Thiếu thời hạn hiệu lực thì người mua có thể chốt giá cũ sau khi nguyên liệu đã tăng. Bốn thành phần này là tối thiểu, không phải chi tiết phụ.", tip: "Kiểm tra đủ bốn thành phần trước khi trả lời bất kỳ email báo giá nào." },
            { title: "Phân biệt FOB và CIF", body: "Với FOB, người bán giao hàng lên tàu tại cảng bốc và rủi ro chuyển cho người mua từ lúc hàng lên tàu. Với CIF, người bán trả cước và bảo hiểm đến cảng đích nhưng rủi ro vẫn chuyển khi hàng lên tàu. Đây là điểm rất dễ nhầm: trả tiền cước không đồng nghĩa gánh rủi ro trên biển.", tip: "Nhớ tách hai câu hỏi: ai trả tiền, ai chịu rủi ro." },
            { title: "Chọn điều kiện theo năng lực", body: "Nhà xuất khẩu mới nên dùng FOB vì trách nhiệm dừng ở cảng bốc, còn doanh nghiệp có kinh nghiệm logistics có thể dùng CIF để kiểm soát tuyến vận tải. Chọn sai điều kiện khiến chi phí phát sinh ngoài dự toán. Khi đàm phán, điều kiện giao hàng là biến số có thể trao đổi ngang với giá.", tip: "Ghi rõ cảng và phiên bản Incoterms, ví dụ Incoterms 2020." }
          ],
          formula: "Giá + điều kiện giao + hiệu lực = báo giá đầy đủ"
        },
        {
          id: "gl2",
          title: "Phương thức thanh toán",
          minutes: 24,
          level: "Trung bình",
          summary: "T/T, L/C và D/P khác nhau ở mức bảo đảm cho người bán và chi phí cho người mua.",
          points: ["T/T chuyển tiền trực tiếp, nhanh nhưng phụ thuộc uy tín hai bên.", "L/C bảo đảm thanh toán khi bộ chứng từ hợp lệ.", "D/P trả tiền để nhận chứng từ, rủi ro chuyển về phía người mua."],
          steps: [
            { title: "Xếp theo mức bảo đảm", body: "Với người bán, thứ tự an toàn thường là tiền ứng trước, L/C không hủy ngang, D/P rồi mới đến ghi sổ. Với người mua thì ngược lại vì L/C làm tăng chi phí ngân hàng và phong tỏa vốn. Hiểu hai chiều này giúp bạn chọn phương thức phù hợp với giá trị đơn hàng.", tip: "Vẽ hai trục: mức an toàn cho người bán và chi phí cho người mua." },
            { title: "Đọc điều kiện của L/C", body: "Ngân hàng chỉ trả tiền khi bộ chứng từ khớp tuyệt đối với các điều khoản, gồm vận đơn, hóa đơn, phiếu đóng gói và giấy chứng nhận xuất xứ. Một lỗi nhỏ như sai tên cảng có thể khiến chứng từ bị từ chối. Vì vậy khâu kiểm tra chứng từ quan trọng ngang khâu sản xuất.", tip: "Lập danh sách kiểm chứng từ theo đúng thứ tự điều khoản L/C." },
            { title: "Chọn theo giá trị đơn hàng", body: "Đơn hàng nhỏ, đối tác quen nên dùng T/T để giảm chi phí. Đơn hàng lớn hoặc đối tác mới thì L/C giúp hai bên yên tâm dù tốn phí. D/P phù hợp khi hai bên đã có quan hệ nhưng vẫn cần ràng buộc chứng từ. Mỗi phương thức đều có chỗ dùng, không có lựa chọn tốt nhất tuyệt đối.", tip: "Gắn mỗi phương thức với một mức giá trị đơn hàng cụ thể." }
          ],
          formula: "Giá trị lớn thì bảo đảm cao, chi phí cao"
        },
        {
          id: "gl3",
          title: "Bảo hiểm và phân chia rủi ro",
          minutes: 20,
          level: "Trung bình",
          summary: "Rủi ro trong vận tải quốc tế được chuyển giao tại một điểm xác định, không phải lúc giao đến kho.",
          points: ["Điểm chuyển giao rủi ro do Incoterms quyết định.", "Bảo hiểm tối thiểu theo CIF thường là 110 phần trăm giá trị hóa đơn.", "Hàng dễ vỡ cần điều kiện bảo hiểm rộng hơn mức tối thiểu."],
          steps: [
            { title: "Xác định điểm chuyển rủi ro", body: "Với FOB và CIF, rủi ro chuyển cho người mua khi hàng đã đặt lên tàu tại cảng bốc. Với DAP, rủi ro chuyển khi hàng đến điểm đích nhưng chưa dỡ. Việc xác định sai điểm này dẫn tới tranh chấp ai chịu tổn thất khi hàng hỏng giữa đường. Luôn đọc điều kiện giao trước khi ký.", tip: "Đánh dấu điểm chuyển rủi ro trên sơ đồ tuyến vận tải." },
            { title: "Đọc hợp đồng bảo hiểm", body: "Bảo hiểm theo CIF thường ở mức 110 phần trăm giá trị hóa đơn theo điều kiện tối thiểu. Nếu hàng là thiết bị điện tử, mức tối thiểu có thể không đủ bù tổn thất do ẩm. Khi đó cần thỏa thuận điều kiện mở rộng và ghi rõ trong hợp đồng.", tip: "Kiểm tra cả giá trị bảo hiểm và điều kiện bảo hiểm, không chỉ giá trị." },
            { title: "Ghi rõ trong hợp đồng", body: "Câu quy định nên nêu rõ bên mua bảo hiểm, mức bảo hiểm và điều kiện áp dụng, ví dụ người bán mua bảo hiểm 110 phần trăm giá trị hóa đơn theo điều kiện C. Câu này loại bỏ phần lớn tranh chấp về sau. Đây cũng là chỗ thể hiện năng lực soạn thảo hợp đồng.", tip: "Tránh câu chung chung như bảo hiểm đầy đủ." }
          ],
          formula: "Rủi ro chuyển tại điểm ghi trong Incoterm"
        }
      ]
    },
    {
      title: "Thư tín và email thương mại",
      summary: "Cấu trúc email chào hàng, khiếu nại và cách giữ giọng điệu chuyên nghiệp.",
      lessons: [
        {
          id: "em1",
          title: "Cấu trúc email chào hàng",
          minutes: 20,
          level: "Cơ bản",
          summary: "Email chào hàng hiệu quả nêu lợi ích trước, chi tiết sau và kết bằng một hành động cụ thể.",
          points: ["Tiêu đề nêu rõ sản phẩm và mục đích, không viết chung chung.", "Mở đầu bằng lý do liên hệ gắn với người nhận.", "Kết thúc bằng một đề nghị hành động có thời hạn."],
          steps: [
            { title: "Viết tiêu đề có thông tin", body: "Tiêu đề Quotation for 2,000 units of cotton towels, March shipment cho người nhận biết ngay nội dung, khác hẳn với Hello hay Inquiry. Email công việc thường được đọc trên điện thoại nên tiêu đề quyết định có mở hay không. Đây là phần tốn ít thời gian nhưng ảnh hưởng nhiều nhất.", tip: "Đặt tiêu đề theo mẫu: mục đích + sản phẩm + mốc thời gian." },
            { title: "Sắp xếp phần thân", body: "Câu đầu nêu lý do liên hệ, câu tiếp nêu thông tin cụ thể gồm giá, số lượng, điều kiện giao, rồi mới đến phần giới thiệu năng lực công ty. Đặt lợi ích cho người nhận lên trước giúp email không giống tờ quảng cáo. Mỗi đoạn nên ngắn, tối đa ba câu.", tip: "Giới hạn mỗi đoạn ba câu, mỗi email ba đoạn chính." },
            { title: "Kết bằng hành động cụ thể", body: "Câu kết nên đề nghị một bước tiếp theo rõ ràng, ví dụ Please let us know if you would like a sample before 15 March. Kèm thời hạn giúp người nhận biết khi nào cần phản hồi. Tránh câu Looking forward to hearing from you mà không nêu việc cần làm.", tip: "Mỗi email chỉ nên có một yêu cầu hành động." }
          ],
          formula: "Tiêu đề rõ + lợi ích trước + một hành động"
        },
        {
          id: "em2",
          title: "Email khiếu nại và xin lỗi",
          minutes: 22,
          level: "Trung bình",
          summary: "Khiếu nại cần dữ kiện, không cần cảm xúc; xin lỗi cần hành động khắc phục, không chỉ lời nói.",
          points: ["Nêu sự việc, bằng chứng và yêu cầu cụ thể trong ba câu đầu.", "Tránh từ ngữ quy kết động cơ của đối tác.", "Thư xin lỗi phải có biện pháp khắc phục và mốc thời gian."],
          steps: [
            { title: "Nêu dữ kiện trước cảm xúc", body: "Một khiếu nại tốt ghi rõ số đơn hàng, ngày nhận, số lượng lỗi và ảnh kèm theo. Những dữ kiện này giúp bộ phận xử lý tìm đúng lô hàng ngay từ email đầu. Cảm xúc có thể làm email nặng nề nhưng không giúp giải quyết nhanh hơn.", tip: "Chuẩn bị sẵn bốn dữ kiện trước khi viết câu đầu tiên." },
            { title: "Tránh ngôn ngữ quy kết", body: "Câu You clearly did not check the goods trước khi gửi dễ khiến đối tác phòng thủ, còn We found 40 damaged units in batch B22 mô tả đúng sự việc. Cách nói thứ hai vẫn cứng rắn nhưng để mở đường hợp tác. Trong thương mại, giữ được quan hệ thường quan trọng hơn thắng một câu tranh luận.", tip: "Thay mọi câu quy kết bằng câu mô tả dữ kiện." },
            { title: "Đề xuất cách khắc phục", body: "Yêu cầu nên cụ thể và khả thi, ví dụ đề nghị thay 40 đơn vị trong lô kế tiếp hoặc giảm giá tương ứng. Đưa ra hai lựa chọn giúp đối tác dễ phản hồi hơn là một yêu cầu cứng. Với thư xin lỗi, cần nêu rõ nguyên nhân, biện pháp và mốc thời gian khắc phục.", tip: "Đưa hai phương án khắc phục thay vì một tối hậu thư." }
          ],
          formula: "Dữ kiện – yêu cầu – phương án khắc phục"
        },
        {
          id: "em3",
          title: "Giọng điệu trong công văn",
          minutes: 18,
          level: "Trung bình",
          summary: "Cùng một nội dung, cách chọn động từ và mức trang trọng quyết định ấn tượng để lại.",
          points: ["Động từ khiếm khuyết giúp giảm áp lực cho người nhận.", "Câu bị động phù hợp khi muốn nêu vấn đề mà không quy trách nhiệm.", "Viết hoa toàn bộ hoặc quá nhiều dấu chấm than bị xem là thiếu chuyên nghiệp."],
          steps: [
            { title: "Chọn động từ khiếm khuyết", body: "Could, would và may giúp câu đề nghị mềm hơn mà không mất tính rõ ràng, ví dụ Could you confirm the shipping date. Must và will có thể phù hợp khi bạn là bên có quyền yêu cầu, nhưng dùng sai chỗ sẽ tạo cảm giác ra lệnh. Chọn đúng mức là kỹ năng cần luyện có chủ đích.", tip: "Đọc lại email và thay must bằng could ở những câu không bắt buộc." },
            { title: "Dùng bị động có chủ đích", body: "Câu The documents were not included nêu sự việc mà không nói ai chịu trách nhiệm, phù hợp khi chưa rõ nguyên nhân. Nhưng nếu lạm dụng, email sẽ thiếu người chịu trách nhiệm và khó xử lý. Dùng bị động cho phần mô tả, dùng chủ động cho phần cam kết.", tip: "Mô tả bằng bị động, cam kết bằng chủ động." },
            { title: "Giữ định dạng chuyên nghiệp", body: "Viết hoa toàn bộ tiêu đề hoặc dùng nhiều dấu chấm than bị xem là thiếu kiểm soát cảm xúc trong môi trường công việc. Một email tốt dùng câu ngắn, xuống dòng rõ và chỉ in đậm phần cần nhấn. Định dạng là phần của giọng điệu, không phải trang trí.", tip: "Chỉ in đậm tối đa hai chỗ trong một email." }
          ],
          formula: "Nội dung cứng, giọng điệu mềm"
        }
      ]
    },
    {
      title: "Đàm phán và hợp đồng",
      summary: "Mở đầu, trao đổi nhượng bộ có điều kiện và chốt điều khoản bằng văn bản.",
      lessons: [
        {
          id: "dn1",
          title: "Mở đầu và đặt câu hỏi",
          minutes: 22,
          level: "Trung bình",
          summary: "Người đặt câu hỏi nhiều hơn thường nắm nhiều thông tin hơn trong một cuộc đàm phán.",
          points: ["Chuẩn bị BATNA, tức phương án thay thế tốt nhất nếu không đạt thỏa thuận.", "Câu hỏi mở giúp lấy thông tin về chi phí và ràng buộc của đối phương.", "Không nên đưa ra con số đầu tiên khi chưa biết khung giá."],
          steps: [
            { title: "Chuẩn bị phương án thay thế", body: "Trước khi vào đàm phán, cần biết nếu không đạt thỏa thuận thì mình còn lựa chọn nào, ví dụ nhà cung cấp thứ hai với giá 45 đô la. Phương án này quyết định điểm dừng của bạn và giúp tránh nhượng bộ quá mức. Đây là phần chuẩn bị, không phải phần nói.", tip: "Viết ra con số cao nhất bạn sẵn sàng trả trước khi họp." },
            { title: "Hỏi để lấy khung thông tin", body: "Câu hỏi như Could you walk me through how this price is built up giúp lấy được cơ cấu chi phí, còn What volume would justify a lower price cho biết ngưỡng chiết khấu. Những câu này mở thông tin mà không cam kết gì. Hỏi trước khi đề nghị luôn có lợi hơn.", tip: "Chuẩn bị ba câu hỏi mở cho mỗi cuộc đàm phán." },
            { title: "Kiểm soát bước neo giá", body: "Người đưa ra con số đầu tiên thường đặt khung cho toàn bộ cuộc trao đổi. Nếu chưa biết giá thị trường, hãy để đối phương nêu trước hoặc hỏi khoảng giá. Khi đã nêu, cần kèm lý do để con số không bị xem là tùy tiện.", tip: "Không nêu giá mục tiêu khi chưa có dữ liệu thị trường." }
          ],
          formula: "Biết BATNA trước khi mở lời"
        },
        {
          id: "dn2",
          title: "Nhượng bộ có điều kiện",
          minutes: 24,
          level: "Nâng cao",
          summary: "Mọi nhượng bộ nên đổi lấy một điều kiện, nếu không sẽ thành mất giá trị.",
          points: ["Công thức if then biến nhượng bộ thành trao đổi.", "Nhượng bộ không điều kiện tạo tiền lệ cho lần sau.", "Đưa ra nhiều phương án giúp mở không gian thỏa thuận."],
          steps: [
            { title: "Dùng công thức nếu thì", body: "Câu We could commit to 2,000 units if you hold the price for twelve months vừa đề nghị vừa nêu điều kiện. Cách nói này cho đối tác thấy để có giá tốt họ phải đổi lại điều gì. Nhượng bộ có điều kiện giữ được giá trị của phần mình cho đi.", tip: "Bắt đầu mỗi nhượng bộ bằng If you could, chúng tôi có thể." },
            { title: "Tránh nhượng bộ đơn phương", body: "Nếu bạn giảm giá mà không yêu cầu tăng số lượng hay kéo dài hợp đồng, đối tác sẽ hiểu rằng lần sau chỉ cần gây áp lực là có thêm. Mỗi lần nhượng bộ nên kèm một điều kiện, dù nhỏ. Đây là nguyên tắc giữ vị thế qua nhiều vòng đàm phán.", tip: "Ghi lại từng nhượng bộ đã cho và điều kiện đi kèm." },
            { title: "Mở nhiều phương án", body: "Khi bế tắc về giá, có thể đưa ra gói khác: giữ giá nhưng đổi điều kiện thanh toán, hoặc giảm thời gian bảo hành để giữ đơn giá. Nhiều phương án giúp đối tác chọn thay vì từ chối. Đàm phán tốt là mở rộng bàn, không phải kéo căng một con số.", tip: "Chuẩn bị ba gói: giá, thời hạn và điều kiện thanh toán." }
          ],
          formula: "Nếu bạn cho X, chúng tôi có thể cho Y"
        },
        {
          id: "dn3",
          title: "Chốt điều khoản và xác nhận",
          minutes: 22,
          level: "Nâng cao",
          summary: "Thỏa thuận miệng chỉ có giá trị khi được ghi thành văn bản có mốc thời gian rõ ràng.",
          points: ["Biên bản ghi nhớ cần nêu giá, số lượng, thời hạn và điều kiện giao.", "Điều khoản phạt phải tương xứng với thiệt hại dự kiến.", "Luôn đặt hạn phản hồi cho bản dự thảo hợp đồng."],
          steps: [
            { title: "Tóm tắt thành văn bản ngay", body: "Sau buổi đàm phán, gửi email tóm tắt các điểm đã thống nhất để hai bên cùng xác nhận. Việc này loại bỏ khác biệt về trí nhớ và tạo bằng chứng trung lập nếu có tranh chấp. Nội dung nên gồm giá, số lượng, thời hạn giao và điều kiện thanh toán.", tip: "Gửi email tóm tắt trong vòng 24 giờ sau buổi họp." },
            { title: "Đọc kỹ điều khoản phạt", body: "Điều khoản phạt nên gắn với mức thiệt hại thực tế và có giới hạn, ví dụ 0,5 phần trăm giá trị hợp đồng mỗi tuần chậm, tối đa 5 phần trăm. Mức phạt quá cao có thể không được tòa án công nhận. Đây là chỗ cần đọc chậm thay vì lướt qua.", tip: "Kiểm tra xem có mức trần cho tổng tiền phạt chưa." },
            { title: "Đặt hạn cho bản dự thảo", body: "Câu Please send the draft by Thursday so our legal team can review it before signing vừa đặt hạn vừa nêu lý do. Hạn rõ ràng giúp tránh việc bản dự thảo đến sát ngày ký và bị đọc vội. Đây là bước cuối nhưng thường quyết định chất lượng toàn bộ thỏa thuận.", tip: "Luôn dành ít nhất hai ngày để bộ phận pháp chế đọc bản dự thảo." }
          ],
          formula: "Thỏa thuận miệng chưa tính, văn bản mới tính"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Quotation", back: "Báo giá gửi cho khách, thường chưa ràng buộc pháp lý như một lời chào hàng chính thức.", hint: "Khác offer ở mức ràng buộc.", example: "42 đô la một đơn vị, FOB Hải Phòng, hiệu lực 30 ngày." },
    { front: "Incoterms", back: "Bộ điều kiện thương mại quốc tế quy định ai trả chi phí, ai chịu rủi ro tại điểm nào.", hint: "Không phải hợp đồng, chỉ là điều kiện giao.", example: "FOB, CIF, DAP trong Incoterms 2020." },
    { front: "FOB", back: "Free on board: người bán giao hàng lên tàu tại cảng bốc, rủi ro chuyển từ đó.", hint: "Rủi ro chuyển khi hàng lên tàu.", example: "FOB Hải Phòng, người mua trả cước biển." },
    { front: "CIF", back: "Cost, insurance and freight: người bán trả cước và bảo hiểm đến cảng đích, nhưng rủi ro vẫn chuyển khi lên tàu.", hint: "Trả tiền khác với gánh rủi ro.", example: "Bảo hiểm tối thiểu 110 phần trăm giá trị hóa đơn." },
    { front: "Letter of credit", back: "Thư tín dụng do ngân hàng phát hành, bảo đảm thanh toán khi bộ chứng từ hợp lệ.", hint: "Ngân hàng trả tiền, không phải người mua.", example: "L/C không hủy ngang cho đơn hàng lớn." },
    { front: "Proforma invoice", back: "Hóa đơn tạm dùng để báo giá và làm căn cứ mở thư tín dụng, chưa phải chứng từ đòi tiền.", hint: "Tạm, chưa phải hóa đơn thương mại.", example: "Khách dùng proforma invoice để xin giấy phép nhập khẩu." },
    { front: "MOQ", back: "Số lượng đặt hàng tối thiểu mà nhà cung cấp chấp nhận.", hint: "Minimum order quantity.", example: "MOQ 1.000 đơn vị cho mỗi mã hàng." },
    { front: "Lead time", back: "Khoảng thời gian từ lúc đặt hàng đến lúc giao hàng.", hint: "Thời gian chờ, không phải thời gian vận chuyển.", example: "Lead time 45 ngày kể từ ngày nhận tiền ứng trước." },
    { front: "Force majeure", back: "Điều khoản bất khả kháng, miễn trách khi có sự kiện ngoài kiểm soát như thiên tai, chiến tranh.", hint: "Sự kiện không ai lường trước.", example: "Bão lớn làm cảng đóng cửa suốt hai tuần." },
    { front: "Penalty clause", back: "Điều khoản quy định mức phạt khi một bên vi phạm nghĩa vụ, thường gắn với tiến độ giao hàng.", hint: "Phạt phải tương xứng thiệt hại.", example: "Phạt 0,5 phần trăm mỗi tuần chậm, tối đa 5 phần trăm." },
    { front: "Payment terms", back: "Điều kiện thanh toán gồm phương thức, tỉ lệ ứng trước và thời hạn thanh toán.", hint: "Trả bằng cách nào, trả khi nào.", example: "Ứng 30 phần trăm, phần còn lại theo L/C trả ngay." },
    { front: "Term sheet", back: "Bản tóm tắt các điều khoản chính trước khi soạn hợp đồng đầy đủ.", hint: "Bản phác các điểm chốt.", example: "Ghi giá, khối lượng, thời hạn và điều kiện giao." }
  ],
  quiz: [
    { q: "FOB viết tắt của cụm nào?", options: ["Free on board", "Freight or bunker", "Full order basis", "Fixed offering bid"], answer: 0, explain: "FOB là Free on board, người bán giao hàng lên tàu tại cảng bốc và rủi ro chuyển từ thời điểm đó." },
    { q: "Điều kiện CIF bao gồm những khoản nào do người bán trả?", options: ["Chỉ giá hàng", "Giá hàng và thuế nhập khẩu", "Giá hàng, bảo hiểm và cước vận tải đến cảng đích", "Giá hàng và chi phí dỡ hàng tại kho người mua"], answer: 2, explain: "CIF gồm cost, insurance và freight đến cảng đích, nhưng rủi ro vẫn chuyển khi hàng lên tàu." },
    { q: "L/C trong thanh toán quốc tế là gì?", options: ["Hợp đồng nguyên tắc giữa hai bên", "Thư tín dụng do ngân hàng phát hành, bảo đảm trả tiền khi chứng từ hợp lệ", "Phiếu đóng gói hàng hóa", "Giấy chứng nhận xuất xứ"], answer: 1, explain: "Ngân hàng phát hành L/C cam kết thanh toán cho người bán khi bộ chứng từ khớp với các điều khoản." },
    { q: "MOQ là viết tắt của:", options: ["Thời gian giao hàng", "Mức chiết khấu theo số lượng", "Điều kiện bảo hành", "Số lượng đặt hàng tối thiểu"], answer: 3, explain: "MOQ là minimum order quantity, mức số lượng nhỏ nhất mà nhà cung cấp đồng ý sản xuất hoặc bán." },
    { q: "Lead time trong đơn hàng xuất khẩu nghĩa là:", options: ["Giá trị lô hàng", "Khoảng thời gian từ đặt hàng đến giao hàng", "Thời hạn thanh toán", "Số ngày bảo hành"], answer: 1, explain: "Lead time tính từ lúc xác nhận đơn hàng đến lúc hàng sẵn sàng giao, thường dài hơn thời gian vận chuyển." },
    { q: "Điều khoản bất khả kháng trong hợp đồng tiếng Anh là:", options: ["Penalty clause", "Confidentiality clause", "Force majeure clause", "Arbitration clause"], answer: 2, explain: "Force majeure miễn trách nhiệm khi xảy ra sự kiện ngoài kiểm soát như thiên tai, dịch bệnh, chiến tranh." },
    { q: "Câu nào phù hợp nhất để mở đầu email khiếu nại hàng lỗi?", options: ["You sent the wrong goods. Fix it now.", "This is unacceptable and I demand compensation immediately.", "We have received the wrong items and would like to request a replacement.", "Your company is completely unreliable."], answer: 2, explain: "Câu này nêu sự việc và yêu cầu cụ thể mà không quy kết động cơ, giữ được quan hệ để xử lý tiếp." },
    { q: "Câu We would appreciate it if you could confirm by Friday có chức năng gì?", options: ["Yêu cầu lịch sự kèm hạn phản hồi", "Lời từ chối khéo", "Lời xin lỗi chính thức", "Câu hỏi về giá"], answer: 0, explain: "Cấu trúc would appreciate it if tạo yêu cầu mềm, còn by Friday đặt hạn rõ ràng cho người nhận." },
    { q: "Proforma invoice khác hóa đơn thương mại ở điểm nào?", options: ["Là chứng từ xác nhận đã thanh toán", "Là bản báo giá tạm, dùng làm căn cứ mở L/C hoặc xin giấy phép", "Là biên bản giao nhận hàng", "Là hợp đồng lao động"], answer: 1, explain: "Proforma invoice chưa phải chứng từ đòi tiền; nó thể hiện nội dung giao dịch dự kiến trước khi thực hiện." },
    { q: "Penalty clause thường quy định điều gì?", options: ["Miễn trách khi có thiên tai", "Thời điểm chuyển giao rủi ro", "Nghĩa vụ bảo mật thông tin", "Mức phạt khi một bên vi phạm nghĩa vụ"], answer: 3, explain: "Penalty clause ấn định mức phạt, thường theo tuần chậm giao, và nên có mức trần tương xứng thiệt hại." }
  ],
  lab: {
    kind: "dialogue",
    title: "Đàm phán giá cho lô hàng 2.000 đơn vị",
    lead: "Bạn là người mua của một nhà phân phối, đang đàm phán với nhà cung cấp về giá, khối lượng và điều kiện thanh toán. Mỗi lượt có ba phương án; chọn phương án giữ được lợi thế.",
    stageLabel: "Hội thoại đàm phán",
    controlNote: "Đọc câu của nhà cung cấp rồi chọn cách đáp. Phản hồi giải thích phương án còn lại mất gì về giá trị hoặc vị thế.",
    note: "Kịch bản mô phỏng đàm phán B2B theo nguyên tắc nhượng bộ có điều kiện và dùng tiêu chí khách quan.",
    steps: [
      {
        speaker: "Nhà cung cấp",
        line: "Thank you for your interest. Our quotation is 42 US dollars per unit for 1,000 units, FOB Hai Phong.",
        options: [
          { text: "Thank you. Could you break down the price so we can see the material and labour costs?", correct: true, feedback: "Đúng. Hỏi cơ cấu giá giúp lấy dữ liệu để đàm phán mà vẫn giữ giọng hợp tác, đúng nguyên tắc hỏi trước khi đề nghị." },
          { text: "That is too expensive. Lower it.", correct: false, feedback: "Chưa ổn. Từ chối không kèm dữ liệu khiến cuộc trao đổi thành mặc cả, và bạn không có căn cứ để đề nghị con số mới." },
          { text: "OK, we accept your price.", correct: false, feedback: "Chưa ổn. Chấp nhận ngay báo giá đầu tiên là bỏ qua toàn bộ không gian đàm phán về khối lượng và điều kiện thanh toán." }
        ]
      },
      {
        speaker: "Nhà cung cấp",
        line: "Of course. Materials account for about 60 per cent. If you order 2,000 units, we can offer 39 dollars.",
        options: [
          { text: "We could commit to 2,000 units if you hold that price for twelve months.", correct: true, feedback: "Đúng. Đây là nhượng bộ có điều kiện: đổi khối lượng lấy ổn định giá, đúng công thức nếu thì." },
          { text: "We want 30 dollars per unit.", correct: false, feedback: "Chưa ổn. Con số không có căn cứ nên dễ bị xem là tùy tiện, và làm mất uy tín ở các vòng sau." },
          { text: "Maybe. We will think about it.", correct: false, feedback: "Chưa ổn. Trả lời mơ hồ không mở ra phương án nào, khiến đối tác không biết cần điều chỉnh điều gì." }
        ]
      },
      {
        speaker: "Nhà cung cấp",
        line: "Twelve months is difficult. How about a six-month price lock with a review in December?",
        options: [
          { text: "That works if the review is based on the published steel index.", correct: true, feedback: "Đúng. Gắn lần xem xét với một tiêu chí khách quan giúp tránh tranh cãi cảm tính về giá nguyên liệu." },
          { text: "Twelve months or nothing.", correct: false, feedback: "Chưa ổn. Tối hậu thư đóng lại phương án hai bên cùng có lợi, dễ đẩy cuộc đàm phán vào bế tắc." },
          { text: "Fine, whatever you prefer.", correct: false, feedback: "Chưa ổn. Câu này trao hết quyền quyết định cho đối tác và bỏ mất lợi thế đã có từ khối lượng cam kết." }
        ]
      },
      {
        speaker: "Nhà cung cấp",
        line: "Agreed. We will also need a 30 per cent deposit with the order.",
        options: [
          { text: "A 30 per cent deposit is acceptable provided you issue a performance guarantee.", correct: true, feedback: "Đúng. Chấp nhận kèm điều kiện bảo lãnh thực hiện hợp đồng, cân bằng rủi ro giữa hai bên." },
          { text: "We never pay deposits.", correct: false, feedback: "Chưa ổn. Tuyên bố tuyệt đối thường không đúng thực tế và đóng lại một điều khoản hoàn toàn có thể thương lượng." },
          { text: "Deposit is fine, no need for any paper.", correct: false, feedback: "Chưa ổn. Bỏ qua chứng từ bảo đảm khiến bạn không có căn cứ đòi tiền nếu đối tác không giao hàng." }
        ]
      },
      {
        speaker: "Nhà cung cấp",
        line: "We can arrange that. I will send the draft contract tomorrow.",
        options: [
          { text: "Please send it by Thursday so our legal team can review it before signing.", correct: true, feedback: "Đúng. Đặt hạn kèm lý do cụ thể, bảo đảm bản dự thảo được đọc kỹ thay vì ký vội." },
          { text: "Send it whenever you finish.", correct: false, feedback: "Chưa ổn. Không có hạn thì bản dự thảo dễ đến sát ngày ký, và bạn mất quyền chủ động về tiến độ." },
          { text: "No need for a contract, an email is enough.", correct: false, feedback: "Chưa ổn. Với đơn hàng lớn, thiếu hợp đồng khiến các điều khoản phạt và bất khả kháng không có giá trị ràng buộc." }
        ]
      }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Diệu Linh", progress: 87, score: 8.6, status: "Tốt", note: "Dùng Incoterms chính xác, cần luyện tốc độ phản xạ." },
      { name: "Trần Quốc Hưng", progress: 59, score: 7.2, status: "Đang học", note: "Hay nhầm CIF với việc chuyển rủi ro tại cảng đích." },
      { name: "Lê Thảo Vy", progress: 93, score: 9.1, status: "Tốt", note: "Có thể nhận bài soạn email khiếu nại nâng cao." },
      { name: "Phạm Đức Anh", progress: 27, score: 5.5, status: "Cần hỗ trợ", note: "Chưa nhớ bộ thuật ngữ thanh toán cơ bản." },
      { name: "Vũ Hoàng Yến", progress: 74, score: 7.9, status: "Đang học", note: "Đàm phán khá nhưng còn nhượng bộ đơn phương." },
      { name: "Đỗ Minh Quân", progress: 46, score: 6.4, status: "Đang học", note: "Nên ôn lại cấu trúc email chào hàng." }
    ],
    submissions: [
      { student: "Nguyễn Diệu Linh", lesson: "Biên bản đàm phán giá lô hàng B22", time: "Hôm qua 22:10", status: "Chờ chấm" },
      { student: "Phạm Đức Anh", lesson: "Phiếu glossary thanh toán quốc tế", time: "Hôm qua 19:30", status: "Chờ chấm" },
      { student: "Lê Thảo Vy", lesson: "Email khiếu nại hàng giao chậm", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm đóng vai đàm phán theo cặp, mỗi cặp chuẩn bị một bảng giá tham chiếu.",
      "Bài kiểm tra giữa kỳ gồm 50 phần trăm thuật ngữ và 50 phần trăm tình huống viết.",
      "Sinh viên chưa nộp bài đàm phán cần bổ sung trước 20 giờ Chủ nhật."
    ]
  },
  className: "Ngoại ngữ thương mại – K24",
  brief: "BTL-15_tradelang-mon-ngoai-ngu-chuyen-nganh.md"
};
