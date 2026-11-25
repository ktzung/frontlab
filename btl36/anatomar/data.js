window.BTL_DATA = {
  id: "anatomar",
  code: "BTL-17",
  name: "AnatomAR",
  monogram: "AR",
  subject: "Giải phẫu",
  level: "Đại học",
  group: "Y & Sức khỏe",
  accent: "#dc2626",
  accent2: "#9f1239",
  font: "serif",
  tagline: "Định vị từng cơ quan trên bản đồ cơ thể rồi mới học tên và chức năng của nó.",
  intro: "AnatomAR biến tranh giải phẫu phẳng thành bản đồ cơ thể có thể bấm, bật tắt từng lớp và đối chiếu vị trí. Mỗi cơ quan đi kèm quan hệ giải phẫu với lân cận, đúng cách sinh viên y khoa cần ghi nhớ.",
  hero: { title: "Giải phẫu", highlight: "định vị trước khi gọi tên" },
  heroBadge: "Bản đồ cơ thể · Lớp hiển thị",
  labShort: "CƠ THỂ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ ghi nhớ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt được chọn cho Giải phẫu: bản đồ cơ thể, mô hình cơ quan có lớp và thẻ ghi nhớ theo hệ.",
  pathLead: "Đi từ hệ xương và cơ, sang tuần hoàn, hô hấp, rồi thần kinh và nội tạng. Mỗi chương đều gắn với một vùng cụ thể trên bản đồ cơ thể.",
  features: [
    { badge: "01", title: "Bản đồ cơ thể theo lớp", desc: "Mười cấu trúc trên một hình người, bật tắt lớp cơ quan nội tạng hoặc khung xương để thấy quan hệ chồng lấp." },
    { badge: "02", title: "Định vị bằng quan hệ", desc: "Mỗi điểm chạm ghi rõ vị trí theo mốc giải phẫu, ví dụ tim nằm sau xương ức lệch trái so với đường giữa." },
    { badge: "03", title: "Thẻ ghi nhớ theo hệ", desc: "Mười hai thẻ chia theo hệ cơ quan, kèm gợi ý và ví dụ lâm sàng để nhớ vị trí thay vì học thuộc tên." }
  ],
  modules: [
    {
      title: "Hệ xương và hệ cơ",
      summary: "Bộ khung nâng đỡ, các loại khớp và nguyên lý đòn bẩy của cơ vân.",
      lessons: [
        {
          id: "xh1",
          title: "Xương trục và chức năng nâng đỡ",
          minutes: 20,
          level: "Cơ bản",
          summary: "Đếm và phân vùng bộ xương người, hiểu cấu trúc xương dài và hai loại mô xương.",
          points: ["Người trưởng thành có 206 xương, trẻ sơ sinh khoảng 270 vì nhiều xương còn dính nhau.", "Cột sống có 7 đốt cổ, 12 đốt ngực, 5 đốt thắt lưng, phần cùng và cụt dính thành khối.", "Xương dài gồm thân xương chứa tủy vàng và đầu xương xốp chứa tủy đỏ."],
          steps: [
            { title: "Chia bộ xương thành hai phần", body: "Bộ xương trục gồm sọ, cột sống, xương sườn và xương ức, làm nhiệm vụ bảo vệ và nâng đỡ. Bộ xương chi gồm xương vai, xương chậu và các xương tay chân, phụ trách vận động. Cách chia này giúp định vị nhanh mọi cấu trúc khi đọc phim.", tip: "Khi mô tả một xương, luôn nói rõ thuộc bộ xương trục hay phần chi." },
            { title: "Đọc cấu trúc xương dài", body: "Thân xương là ống xương đặc có khoang tủy, hai đầu xương xốp phủ sụn khớp. Màng xương bọc ngoài giàu mạch máu và tế bào tạo xương nên trẻ em gãy xương thường liền nhanh và ít lệch. Đĩa sụn tăng trưởng nằm giữa đầu và thân xương, quyết định chiều cao cho đến tuổi dậy thì.", tip: "Gãy ở đĩa sụn tăng trưởng có thể làm chi ngắn lại vĩnh viễn." },
            { title: "Mô xương đặc và xương xốp", body: "Xương đặc cấu tạo từ các đơn vị xương gồm ống Havers chứa mạch máu, bao quanh là các vòng xương đồng tâm. Xương xốp là mạng lưới các bè xương xếp theo đường chịu lực, nhờ đó đầu xương nhẹ mà vẫn vững. Cấu trúc bè xương thay đổi theo lực tác động hằng ngày.", tip: "Loãng xương làm thưa bè xương trước khi mất khối lượng xương đặc, nên dễ gãy cổ xương đùi." }
          ],
          formula: "206 xương ở người trưởng thành; cột sống 7 cổ, 12 ngực, 5 thắt lưng"
        },
        {
          id: "xh2",
          title: "Khớp và nguyên lý đòn bẩy",
          minutes: 22,
          level: "Trung bình",
          summary: "Phân loại khớp theo mức vận động và đọc ba loại đòn bẩy trong cơ thể.",
          points: ["Khớp bất động như khớp sọ, khớp bán động như đốt sống, khớp hoạt dịch như khớp gối.", "Khớp hoạt dịch có sụn, bao khớp và dịch khớp làm giảm ma sát.", "Cơ thể dùng cả ba loại đòn bẩy, phổ biến nhất là đòn bẩy loại ba."],
          steps: [
            { title: "Ba loại khớp", body: "Khớp sợi ở hộp sọ gần như bất động, khớp sụn ở đĩa gian đốt cho phép dịch chuyển nhỏ. Khớp hoạt dịch chiếm phần lớn khớp chi, có bao khớp chứa dịch và dây chằng giữ vững. Khớp gối là khớp bản lề, khớp vai là khớp chỏm cầu cho biên độ lớn nhất nhưng kém vững hơn.", tip: "Khớp nào có biên độ càng lớn thì càng dễ trật, đây là quy luật đánh đổi." },
            { title: "Đòn bẩy trong cơ thể", body: "Đòn bẩy loại một có điểm tựa ở giữa như khớp cổ khi gật đầu. Loại hai có vật cản ở giữa như nhón gót, ít gặp. Loại ba có lực cơ ở giữa, phổ biến nhất, ví dụ cơ nhị đầu gấp khuỷu, đổi lại phải co mạnh hơn nhưng được lợi về tốc độ và biên độ.", tip: "Vẽ ba điểm tựa, lực và vật cản lên hình tay rồi mới phân loại." },
            { title: "Tổn thương khớp thường gặp", body: "Đứt dây chằng chéo trước xảy ra khi xoay người đột ngột, gối sưng nhanh do tràn dịch. Rách sụn chêm gây đau khi duỗi gối và có tiếng lục cục. Thoái hóa khớp làm mòn sụn, hẹp khe khớp và tạo gai xương, thường gặp ở khớp gối và khớp háng.", tip: "Nghiệm pháp Lachman dương tính gợi ý đứt dây chằng chéo trước." }
          ],
          formula: "Khớp hoạt dịch gồm sụn khớp, bao khớp, dịch khớp và dây chằng"
        },
        {
          id: "xh3",
          title: "Cơ vân, cơ trơn và cơ tim",
          minutes: 20,
          level: "Cơ bản",
          summary: "So sánh ba loại mô cơ theo cấu trúc, điều khiển và vị trí phân bố.",
          points: ["Cơ vân có vân ngang, điều khiển theo ý muốn và bám vào xương.", "Cơ trơn không vân, hoạt động tự chủ ở thành mạch và ống tiêu hóa.", "Cơ tim có vân nhưng tự động, các tế bào nối với nhau bằng đĩa liên kết."],
          steps: [
            { title: "Đơn vị vận động", body: "Mỗi sợi cơ vân được điều khiển bởi một nơron vận động, tập hợp thành đơn vị vận động. Đơn vị nhỏ cho chuyển động tinh tế như cơ mắt, đơn vị lớn cho lực mạnh như cơ đùi. Khi cần lực lớn hơn, cơ thể huy động thêm đơn vị vận động chứ không chỉ co mạnh từng sợi.", tip: "Dùng ví dụ cầm bút và nâng tạ để thấy khác biệt về số đơn vị vận động." },
            { title: "Cơ chế trượt sợi", body: "Actin trượt trên myosin nhờ ATP và ion canxi, làm sarcomere ngắn lại và cơ co. Canxi được giải phóng từ lưới nội chất cơ khi xung thần kinh đến, sau đó được bơm trả lại để cơ giãn. Thiếu ATP như trong co cứng sau chết làm cầu nối myosin không tách ra được.", tip: "Nhớ chuỗi ba bước: canxi gắn troponin, cầu nối hình thành, ATP tách cầu nối." },
            { title: "Cơ trơn và cơ tim", body: "Cơ trơn thành mạch co giãn chậm, tiết kiệm năng lượng và do hệ thần kinh tự chủ cùng hormone điều hòa. Cơ tim phân nhánh, có đĩa liên kết cho xung điện lan nhanh, hoạt động theo nhịp do nút xoang nhĩ phát. Vì vậy tim có thể đập ngoài cơ thể một thời gian nếu được cung cấp đủ oxy.", tip: "Cơ tim không mỏi vì có nhiều ty thể và thời gian trơ dài, tránh co cứng." }
          ],
          formula: "Co cơ: canxi gắn troponin, actin trượt trên myosin, ATP cần cho cả co và giãn"
        }
      ]
    },
    {
      title: "Tuần hoàn và hô hấp",
      summary: "Tim, mạch máu, phổi và hai vòng tuần hoàn phối hợp để trao đổi khí.",
      lessons: [
        {
          id: "th1",
          title: "Tim và chu chuyển máu",
          minutes: 24,
          level: "Trung bình",
          summary: "Bốn ngăn tim, hệ van và ba pha của một chu chuyển tim ở nhịp 75 lần mỗi phút.",
          points: ["Tim có bốn ngăn, nửa trái dày hơn vì bơm máu đi toàn cơ thể.", "Van hai lá giữa nhĩ trái và thất trái, van ba lá ở bên phải.", "Một chu chuyển 0,8 giây gồm nhĩ thu 0,1, thất thu 0,3 và giãn chung 0,4."],
          steps: [
            { title: "Đường đi của máu", body: "Máu tĩnh mạch về nhĩ phải, xuống thất phải, lên động mạch phổi tới phổi nhận oxy, quay về nhĩ trái rồi xuống thất trái. Thất trái bơm máu vào động mạch chủ đi nuôi toàn cơ thể. Hai vòng tuần hoàn phổi và tuần hoàn hệ thống nối tiếp nhau qua tim.", tip: "Vẽ mũi tên hình số 8 để nhớ hai vòng tuần hoàn nối qua tim." },
            { title: "Ba pha chu chuyển", body: "Nhĩ thu đẩy nốt máu còn lại xuống thất, van nhĩ thất mở. Thất thu làm van nhĩ thất đóng tạo tiếng tim thứ nhất, sau đó van tổ chim mở bơm máu vào động mạch. Giai đoạn giãn chung chiếm gần một nửa chu chuyển, là lúc mạch vành được tưới máu.", tip: "Tiếng tim thứ hai là lúc van tổ chim đóng, nghe rõ ở liên sườn hai." },
            { title: "Cung lượng tim", body: "Cung lượng tim bằng nhịp tim nhân thể tích nhát bóp, lúc nghỉ khoảng 70 nhân 70 ml, tức gần 5 lít mỗi phút. Khi gắng sức, cả nhịp tim và thể tích nhát bóp đều tăng, cung lượng có thể lên 20 lít mỗi phút. Cơ chế Frank-Starling cho thấy cơ tim giãn nhiều hơn thì co mạnh hơn trong giới hạn sinh lý.", tip: "Nhớ công thức: cung lượng tim bằng tần số tim nhân thể tích nhát bóp." }
          ],
          formula: "Cung lượng tim = nhịp tim x thể tích nhát bóp, khoảng 5 lít mỗi phút khi nghỉ"
        },
        {
          id: "th2",
          title: "Mạch máu và huyết áp",
          minutes: 22,
          level: "Trung bình",
          summary: "Ba loại mạch, cấu trúc thành mạch và cách huyết áp thay đổi dọc hệ tuần hoàn.",
          points: ["Động mạch có thành dày, nhiều sợi đàn hồi; tĩnh mạch có van và lòng rộng.", "Mao mạch chỉ gồm một lớp nội mô để trao đổi chất.", "Huyết áp giảm dần từ động mạch chủ đến tĩnh mạch chủ."],
          steps: [
            { title: "So sánh ba loại mạch", body: "Động mạch chịu áp lực lớn nên có lớp cơ trơn và sợi đàn hồi dày, động mạch nhỏ co giãn điều hòa huyết áp. Tĩnh mạch lòng rộng, thành mỏng hơn và có van một chiều, đặc biệt ở chân, nhờ đó máu về tim nhờ cơ bóp và hô hấp. Mao mạch có đường kính chỉ 5 đến 10 micromet, mỏng đến mức trao đổi khí diễn ra bằng khuếch tán.", tip: "Tĩnh mạch chân bị suy van gây giãn tĩnh mạch và phù chi dưới." },
            { title: "Đo huyết áp đúng cách", body: "Huyết áp tâm thu là áp lực đỉnh khi thất trái co, tâm trương là áp lực đáy khi tim giãn. Băng quấn phải ngang mức tim, bệnh nhân nghỉ 5 phút, đo hai lần cách nhau một phút. Người lớn được xem là tăng huyết áp khi huyết áp từ 140 trên 90 mmHg trở lên ở nhiều lần đo.", tip: "Băng quấn quá nhỏ sẽ làm huyết áp đo được cao giả tạo." },
            { title: "Điều hòa huyết áp", body: "Khi huyết áp giảm, thụ thể áp lực ở xoang động mạch cảnh giảm phát xung, tim tăng nhịp và mạch co lại để giữ áp lực. Hệ renin-angiotensin-aldosteron giữ muối và nước, làm tăng thể tích tuần hoàn. Đây là cơ sở để thuốc ức chế men chuyển được dùng trong tăng huyết áp.", tip: "Nhớ ba tầng điều hòa: thần kinh nhanh, nội tiết chậm, tại chỗ theo nhu cầu mô." }
          ],
          formula: "Huyết áp = cung lượng tim x sức cản ngoại vi"
        },
        {
          id: "th3",
          title: "Phổi và trao đổi khí",
          minutes: 22,
          level: "Cơ bản",
          summary: "Đường dẫn khí, phế nang và cơ chế thông khí theo chênh lệch áp suất.",
          points: ["Phổi phải có ba thùy, phổi trái có hai thùy và có khuyết tim.", "Phế nang có thành mỏng, khoảng 300 triệu đơn vị, tổng diện tích trao đổi khí rất lớn.", "Hít vào là động tác chủ động nhờ cơ hoành và cơ liên sườn ngoài."],
          steps: [
            { title: "Đường dẫn khí", body: "Không khí đi qua mũi, hầu, thanh quản, khí quản rồi chia vào hai phế quản gốc. Phế quản phân nhánh khoảng 23 lần đến tiểu phế quản tận và phế nang, nơi duy nhất diễn ra trao đổi khí. Khí quản được giữ mở bằng các vòng sụn hình chữ C, còn tiểu phế quản không có sụn nên dễ co thắt.", tip: "Hen suyễn co thắt chủ yếu ở tiểu phế quản, nơi không có sụn giữ thành." },
            { title: "Cơ học hô hấp", body: "Cơ hoành co xuống làm khoang ngực tăng thể tích, áp suất trong phổi giảm và không khí tràn vào. Thở ra bình thường là động tác thụ động nhờ đàn hồi của phổi và thành ngực. Thở ra gắng sức cần cơ bụng và cơ liên sườn trong.", tip: "Tràn khí màng phổi làm mất áp suất âm, phổi xẹp lại và khó thở đột ngột." },
            { title: "Trao đổi khí ở phế nang", body: "Oxy khuếch tán từ phế nang vào mao mạch, CO2 đi ngược chiều, chỉ mất khoảng 0,25 giây cho máu đi qua. Khí CO2 khuếch tán tốt hơn oxy khoảng 20 lần, nên rối loạn thông khí thường làm CO2 tăng trước. Bề mặt ẩm và lớp surfactant giúp phế nang không xẹp khi thở ra.", tip: "Trẻ sinh non thiếu surfactant dễ suy hô hấp vì phế nang xẹp." }
          ],
          formula: "Thông khí phế nang = (thể tích khí lưu thông trừ khoảng chết) x nhịp thở"
        }
      ]
    },
    {
      title: "Thần kinh và nội tạng",
      summary: "Não bộ, tủy sống, cung phản xạ và các tạng trong ổ bụng.",
      lessons: [
        {
          id: "tn1",
          title: "Não bộ và chức năng từng thùy",
          minutes: 24,
          level: "Trung bình",
          summary: "Định vị bốn thùy não, tiểu não và thân não cùng chức năng đi kèm.",
          points: ["Thùy trán phụ trách vận động chủ động, lập luận và ngôn ngữ vận động.", "Thùy chẩm xử lý thị giác, thùy thái dương xử lý thính giác và hiểu ngôn ngữ.", "Tiểu não giữ thăng bằng và phối hợp động tác, hành não điều hòa hô hấp và tim mạch."],
          steps: [
            { title: "Bốn thùy của bán cầu đại não", body: "Thùy trán chứa vùng vận động sơ cấp và vùng Broca phụ trách phát ngôn, tổn thương gây nói khó hiểu. Thùy đỉnh chứa vùng cảm giác thân thể, thùy thái dương có vùng Wernicke hiểu ngôn ngữ, thùy chẩm là trung tâm thị giác. Vỏ não vận động và cảm giác sắp xếp ngược với cơ thể, đầu ở dưới và chân ở trên.", tip: "Tổn thương Broca thì hiểu nhưng nói khó, tổn thương Wernicke thì nói nhiều nhưng vô nghĩa." },
            { title: "Tiểu não và thân não", body: "Tiểu não nhận thông tin từ tai trong, cơ và mắt để điều chỉnh tư thế, nhịp động tác và học kỹ năng vận động. Thân não gồm trung não, cầu não và hành não, chứa các trung khu sống còn như hô hấp, tim mạch và phản xạ nôn. Hành não cũng là nơi bắt chéo các bó vận động, giải thích vì sao tổn thương một bên não gây liệt bên đối diện.", tip: "Chấn thương vùng chẩm gây mù vỏ não dù mắt vẫn bình thường." },
            { title: "Màng não và dịch não tủy", body: "Ba lớp màng là màng cứng, màng nhện và màng nuôi bao bọc não và tủy sống. Dịch não tủy lưu thông trong khoang dưới nhện, đệm va chạm và trao đổi chất. Viêm màng não do vi khuẩn thường có sốt, cứng gáy và sợ ánh sáng, cần chọc dò dịch não tủy để xác định tác nhân.", tip: "Cứng gáy là dấu hiệu kích thích màng não, không phải đau cơ cổ thông thường." }
          ],
          formula: "Bốn thùy: trán vận động, đỉnh cảm giác, thái dương thính giác, chẩm thị giác"
        },
        {
          id: "tn2",
          title: "Tủy sống và cung phản xạ",
          minutes: 20,
          level: "Cơ bản",
          summary: "Năm thành phần của một cung phản xạ và cách tủy sống xử lý xung mà không cần não.",
          points: ["Cung phản xạ gồm thụ thể, nơron hướng tâm, trung tâm, nơron ly tâm và cơ quan đáp ứng.", "Chất xám tủy sống hình chữ H, chất trắng bao quanh chứa các bó dẫn truyền.", "Phản xạ tủy diễn ra trước khi não cảm nhận đau."],
          steps: [
            { title: "Năm thành phần của cung phản xạ", body: "Ví dụ phản xạ rụt tay khi chạm vật nóng: thụ thể đau ở da phát xung, nơron hướng tâm vào rễ sau tủy sống, trung tâm ở chất xám tủy, nơron ly tâm ra rễ trước, cơ gấp co lại. Toàn bộ đường đi chỉ mất vài chục mili giây.", tip: "Nhớ thứ tự bằng câu: thụ thể nhận, vào sau, xử lý giữa, ra trước, cơ đáp ứng." },
            { title: "Chất xám và chất trắng", body: "Chất xám tủy sống chứa thân nơron, sừng trước là nơron vận động, sừng sau là nơron cảm giác. Chất trắng gồm các bó sợi dẫn truyền lên não và xuống từ não. Tổn thương sừng trước gây liệt mềm và teo cơ vì mất nơron vận động.", tip: "Chất xám ở tủy nằm trong, còn ở đại não nằm ngoài, đây là điểm dễ nhầm." },
            { title: "Phản xạ có điều kiện", body: "Phản xạ bẩm sinh như rụt tay có cung phản xạ cố định, còn phản xạ có điều kiện như tiết nước bọt khi nghe tiếng chuông được hình thành qua học tập. Vỏ não tạo đường liên hệ tạm thời, và đường này mất dần nếu không được củng cố. Đây là cơ sở sinh lý của thói quen và kỹ năng nghề nghiệp.", tip: "Kỹ năng lâm sàng như đặt đường truyền cũng là phản xạ có điều kiện được luyện lặp lại." }
          ],
          formula: "Cung phản xạ: thụ thể, nơron hướng tâm, trung tâm, nơron ly tâm, cơ quan đáp ứng"
        },
        {
          id: "tn3",
          title: "Hệ tiêu hóa và các tạng ổ bụng",
          minutes: 22,
          level: "Trung bình",
          summary: "Định vị gan, dạ dày, ruột và mối quan hệ với phúc mạc trong ổ bụng.",
          points: ["Gan nằm ở hạ sườn phải, nặng khoảng 1,5 kg ở người trưởng thành.", "Dạ dày nằm ở thượng vị lệch trái, pH dịch vị khoảng 1,5 đến 3,5.", "Ruột non dài 6 đến 7 mét, hấp thu chủ yếu ở tá tràng và hỗng tràng."],
          steps: [
            { title: "Chia ổ bụng thành chín vùng", body: "Hai đường dọc giữa đòn và hai đường ngang tạo chín vùng, giúp mô tả vị trí đau chính xác. Đau thượng vị gợi ý dạ dày hoặc tá tràng, đau hạ sườn phải gợi ý gan hoặc túi mật, đau hố chậu phải gợi ý ruột thừa. Cách chia này là ngôn ngữ chung giữa các khoa lâm sàng.", tip: "Viêm ruột thừa điển hình đau quanh rốn rồi khu trú hố chậu phải." },
            { title: "Gan và đường mật", body: "Gan nhận máu từ động mạch gan và tĩnh mạch cửa, xử lý dưỡng chất hấp thu từ ruột trước khi vào tuần hoàn chung. Gan tiết mật đổ vào tá tràng để nhũ tương hóa lipit, đồng thời chuyển hóa thuốc và amoniac. Xơ gan làm tăng áp lực tĩnh mạch cửa, gây cổ trướng và giãn tĩnh mạch thực quản.", tip: "Mật không chứa enzym tiêu hóa, nó chỉ làm phân tán giọt lipit để lipase hoạt động." },
            { title: "Dạ dày, ruột và phúc mạc", body: "Dạ dày tiết HCl và pepsinogen, nhờ lớp nhầy bảo vệ nên không tự tiêu hóa. Tá tràng nhận dịch tụy và mật, ruột non có nhung mao và vi nhung mao làm diện tích hấp thu tăng hàng trăm lần. Phúc mạc là màng thanh mạc hai lá, ổ phúc mạc bình thường chỉ có một lượng dịch rất ít.", tip: "Dịch tụy chứa protease dạng tiền chất, chỉ hoạt hóa trong lòng ruột để không phá hủy tụy." }
          ],
          formula: "Ổ bụng chín vùng: hai đường giữa đòn và hai đường ngang qua rốn"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Hộp sọ", back: "Khối xương bảo vệ não, gồm phần vòm và phần nền, các xương nối với nhau bằng khớp sợi gần như bất động.", hint: "Khớp sợi là khớp bất động.", example: "Chấn thương vùng thái dương có thể làm rách động mạch màng não giữa." },
    { front: "Cột sống", back: "Trục nâng đỡ cơ thể gồm 7 đốt cổ, 12 đốt ngực, 5 đốt thắt lưng và phần cùng cụt dính liền.", hint: "7, 12, 5 là ba con số cần nhớ.", example: "Đau lưng dưới thường liên quan đốt thắt lưng L4 đến L5." },
    { front: "Xương đùi", back: "Xương dài nhất và chắc nhất cơ thể, khớp với ổ cối tạo khớp háng và với xương chày tạo khớp gối.", hint: "Chịu toàn bộ trọng lượng khi đứng.", example: "Gãy cổ xương đùi ở người lớn tuổi thường cần phẫu thuật thay khớp." },
    { front: "Khớp hoạt dịch", back: "Khớp có sụn khớp, bao khớp chứa dịch và dây chằng, cho phép vận động biên độ lớn.", hint: "Có dịch khớp bôi trơn.", example: "Khớp gối là khớp bản lề, khớp vai là khớp chỏm cầu." },
    { front: "Cơ vân", back: "Mô cơ có vân ngang, bám vào xương, co theo ý muốn nhờ nơron vận động của hệ soma.", hint: "Vân ngang và chủ động.", example: "Cơ nhị đầu cánh tay gấp khuỷu, là ví dụ đòn bẩy loại ba." },
    { front: "Van hai lá", back: "Van giữa nhĩ trái và thất trái, đóng khi thất thu để máu không chảy ngược về nhĩ.", hint: "Bên trái có hai lá, bên phải có ba lá.", example: "Hẹp van hai lá thường do thấp tim để lại di chứng." },
    { front: "Chu chuyển tim", back: "Một chu kỳ tim gồm nhĩ thu 0,1 giây, thất thu 0,3 giây và giãn chung 0,4 giây ở nhịp 75.", hint: "Tổng 0,8 giây, giãn chung chiếm gần một nửa.", example: "Mạch vành được tưới máu chủ yếu trong giai đoạn giãn chung." },
    { front: "Cung lượng tim", back: "Thể tích máu tim bơm ra trong một phút, bằng nhịp tim nhân thể tích nhát bóp.", hint: "Khoảng 5 lít mỗi phút khi nghỉ.", example: "Nhịp 70, mỗi nhát 70 ml cho cung lượng gần 5 lít mỗi phút." },
    { front: "Phế nang", back: "Túi khí thành mỏng ở cuối đường dẫn khí, nơi trao đổi O2 và CO2 với mao mạch phổi.", hint: "Khoảng 300 triệu đơn vị, diện tích rất lớn.", example: "Khí phế thũng phá hủy vách phế nang, làm giảm diện tích trao đổi khí." },
    { front: "Thùy chẩm", back: "Thùy sau của đại não, chứa vùng thị giác sơ cấp nhận tín hiệu từ võng mạc.", hint: "Chẩm là phía sau đầu, liên quan thị giác.", example: "Tổn thương hai thùy chẩm gây mù vỏ não dù mắt vẫn bình thường." },
    { front: "Cung phản xạ", back: "Đường dẫn truyền của một phản xạ gồm thụ thể, nơron hướng tâm, trung tâm, nơron ly tâm và cơ quan đáp ứng.", hint: "Năm thành phần, xử lý có thể chỉ ở tủy sống.", example: "Chạm vật nóng thì rụt tay trước khi cảm thấy đau." },
    { front: "Gan", back: "Tạng lớn nhất trong ổ bụng, nằm hạ sườn phải, chuyển hóa dưỡng chất, khử độc và tiết mật.", hint: "Nhận máu từ tĩnh mạch cửa.", example: "Xơ gan làm tăng áp lực tĩnh mạch cửa và gây cổ trướng." }
  ],
  quiz: [
    { q: "Người trưởng thành có bao nhiêu xương?", options: ["186", "206", "226", "270"], answer: 1, explain: "Người trưởng thành có 206 xương; trẻ sơ sinh khoảng 270 vì nhiều xương còn dính nhau và sẽ hợp nhất." },
    { q: "Khớp nào sau đây là khớp hoạt dịch?", options: ["Khớp sợi ở hộp sọ", "Khớp sụn giữa các đốt sống", "Khớp răng ổ răng", "Khớp gối"], answer: 3, explain: "Khớp gối có sụn khớp, bao khớp và dịch khớp nên thuộc nhóm khớp hoạt dịch, biên độ vận động lớn." },
    { q: "Van nào nằm giữa nhĩ trái và thất trái?", options: ["Van hai lá", "Van ba lá", "Van động mạch chủ", "Van động mạch phổi"], answer: 0, explain: "Bên trái có van hai lá, bên phải có van ba lá; hai van tổ chim nằm ở gốc động mạch chủ và động mạch phổi." },
    { q: "Phổi trái khác phổi phải ở điểm nào?", options: ["Có bốn thùy", "Không có phế nang", "Chỉ có hai thùy và có khuyết tim", "Không nhận phế quản gốc"], answer: 2, explain: "Phổi phải có ba thùy, phổi trái có hai thùy và khuyết tim để tim nằm lệch về bên trái." },
    { q: "Thùy nào của đại não là trung tâm thị giác?", options: ["Thùy trán", "Thùy đỉnh", "Thùy thái dương", "Thùy chẩm"], answer: 3, explain: "Vùng thị giác sơ cấp nằm ở thùy chẩm; thùy thái dương xử lý thính giác, thùy đỉnh xử lý cảm giác thân thể." },
    { q: "Trong một cung phản xạ, nơron ly tâm đi ra khỏi tủy sống qua đâu?", options: ["Rễ trước", "Rễ sau", "Chất trắng", "Màng não"], answer: 0, explain: "Rễ trước chứa sợi vận động đi ra cơ quan đáp ứng, còn rễ sau chứa sợi cảm giác đi vào tủy." },
    { q: "Cơ quan nào nằm chủ yếu ở hạ sườn phải và tiết mật?", options: ["Lách", "Dạ dày", "Gan", "Tụy"], answer: 2, explain: "Gan nằm dưới cơ hoành bên phải, tiết mật đổ vào tá tràng để nhũ tương hóa lipit." },
    { q: "Cung lượng tim được tính bằng công thức nào?", options: ["Nhịp tim chia thể tích nhát bóp", "Nhịp tim nhân thể tích nhát bóp", "Huyết áp nhân nhịp tim", "Thể tích nhát bóp trừ nhịp tim"], answer: 1, explain: "Cung lượng tim bằng tần số tim nhân thể tích nhát bóp, khoảng 5 lít mỗi phút khi nghỉ." },
    { q: "Loại mô cơ nào hoạt động tự chủ và không có vân ngang?", options: ["Cơ trơn", "Cơ vân", "Cơ tim", "Cơ mắt"], answer: 0, explain: "Cơ trơn ở thành mạch và ống tiêu hóa không có vân, hoạt động ngoài ý muốn; cơ tim có vân nhưng cũng tự động." },
    { q: "Đặc điểm nào đúng với khí CO2 khi trao đổi ở phế nang?", options: ["Khuếch tán chậm hơn oxy 20 lần", "Không khuếch tán qua màng phế nang", "Chỉ vận chuyển dạng hòa tan", "Khuếch tán từ mao mạch vào phế nang"], answer: 3, explain: "CO2 đi từ máu mao mạch vào phế nang để thở ra, và khuếch tán tốt hơn oxy khoảng 20 lần." }
  ],
  lab: {
    kind: "diagram",
    title: "Bản đồ cơ thể người theo lớp",
    lead: "Bấm vào từng cơ quan để xem vị trí theo mốc giải phẫu và chức năng chính. Tắt lớp khung xương để thấy rõ các tạng nằm sau lồng ngực.",
    stageLabel: "Bản đồ cơ thể tương tác",
    controlNote: "Chọn một cơ quan, hoặc bật tắt lớp hiển thị để tách khung xương khỏi nội tạng.",
    note: "Sơ đồ là hình chiếu trước của thân người, bên trái hình là bên phải của người bệnh theo quy ước giải phẫu.",
    viewBox: "0 0 600 420",
    pickHint: "Chọn một cơ quan trên bản đồ",
    layers: [
      { id: "organs", label: "Cơ quan nội tạng" },
      { id: "frame", label: "Khung xương" }
    ],
    shapes: [
      { type: "circle", cx: 300, cy: 72, r: 40, label: "Hộp sọ", layer: "frame", fill: "#dc2626", opacity: 0.14, info: { title: "Hộp sọ", desc: "Khối xương gồm vòm và nền sọ, bảo vệ não và các cơ quan cảm giác. Các xương nối bằng khớp sợi nên gần như bất động.", tags: ["Bảo vệ não", "Khớp sợi"] } },
      { type: "polygon", points: "246,112 354,112 398,170 404,250 386,330 350,392 250,392 214,330 196,250 202,170", lx: 300, ly: 376, label: "Thân", fill: "#9f1239", opacity: 0.08, strokeWidth: 2, info: { title: "Khoang ngực và khoang bụng", desc: "Cơ hoành chia thân thành khoang ngực phía trên và khoang bụng phía dưới. Ngực chứa tim, phổi; bụng chứa gan, dạ dày, ruột và hai thận.", tags: ["Cơ hoành", "Khoang ngực", "Khoang bụng"] } },
      { type: "ellipse", cx: 300, cy: 52, rx: 27, ry: 18, label: "Não", layer: "organs", fill: "#be123c", opacity: 0.3, info: { title: "Não bộ", desc: "Trung tâm điều khiển của hệ thần kinh trung ương, gồm đại não, tiểu não và thân não. Vỏ não chia bốn thùy với chức năng vận động, cảm giác, thính giác và thị giác.", tags: ["Bốn thùy", "Vỏ não"] } },
      { type: "ellipse", cx: 252, cy: 188, rx: 30, ry: 46, label: "Phổi P.", layer: "organs", fill: "#e11d48", opacity: 0.18, info: { title: "Phổi phải", desc: "Nằm bên phải lồng ngực, gồm ba thùy và nhỏ hơn phổi trái một chút vì gan đẩy cơ hoành lên cao.", tags: ["Ba thùy", "Trao đổi khí"] } },
      { type: "ellipse", cx: 348, cy: 188, rx: 30, ry: 46, label: "Phổi T.", layer: "organs", fill: "#e11d48", opacity: 0.18, info: { title: "Phổi trái", desc: "Gồm hai thùy và có khuyết tim ở bờ trước, nơi tim áp sát thành ngực. Phế nang trong phổi là nơi trao đổi O2 và CO2.", tags: ["Hai thùy", "Khuyết tim"] } },
      { type: "ellipse", cx: 300, cy: 196, rx: 28, ry: 26, label: "Tim", layer: "organs", fill: "#b91c1c", opacity: 0.36, info: { title: "Tim", desc: "Nằm sau xương ức, lệch trái so với đường giữa, khoảng hai phần ba khối tim ở bên trái. Tim có bốn ngăn, đẩy máu qua vòng tuần hoàn phổi và vòng tuần hoàn hệ thống.", tags: ["Bốn ngăn", "Van tim", "Chu chuyển"] } },
      { type: "ellipse", cx: 250, cy: 262, rx: 48, ry: 24, label: "Gan", layer: "organs", fill: "#7f1d1d", opacity: 0.28, info: { title: "Gan", desc: "Tạng đặc lớn nhất, nằm ở hạ sườn phải dưới cơ hoành. Gan chuyển hóa dưỡng chất, khử độc và tiết mật đổ vào tá tràng.", tags: ["Hạ sườn phải", "Tiết mật", "Khử độc"] } },
      { type: "ellipse", cx: 338, cy: 258, rx: 30, ry: 24, label: "Dạ dày", layer: "organs", fill: "#9f1239", opacity: 0.26, info: { title: "Dạ dày", desc: "Nằm ở thượng vị lệch trái, tiết HCl và pepsinogen để tiêu hóa protein. Lớp nhầy bảo vệ niêm mạc khỏi chính dịch vị có pH 1,5 đến 3,5.", tags: ["Thượng vị", "Dịch vị", "Pepsin"] } },
      { type: "rect", x: 258, y: 300, w: 84, h: 56, rx: 24, label: "Ruột non", layer: "organs", fill: "#be123c", opacity: 0.2, info: { title: "Ruột non", desc: "Dài 6 đến 7 mét, gồm tá tràng, hỗng tràng và hồi tràng. Nhung mao và vi nhung mao làm diện tích hấp thu tăng gấp hàng trăm lần.", tags: ["Hấp thu", "Nhung mao", "Tá tràng"] } },
      { type: "path", d: "M240,140 Q300,126 360,140 M234,162 Q300,148 366,162 M232,184 Q300,170 368,184 M236,206 Q300,192 364,206 M244,226 Q300,214 356,226", lx: 300, ly: 128, label: "Lồng ngực", layer: "frame", stroke: "#dc2626", strokeWidth: 2.2, info: { title: "Lồng ngực", desc: "Do 12 đôi xương sườn, xương ức và 12 đốt ngực tạo thành, vừa bảo vệ tim phổi vừa tham gia động tác thở. Cơ liên sườn ngoài nâng xương sườn khi hít vào.", tags: ["12 đôi sườn", "Hô hấp", "Bảo vệ"] } }
    ],
    links: [
      { x1: 296, y1: 192, x2: 258, y2: 186, dash: true },
      { x1: 300, y1: 214, x2: 254, y2: 254, dash: true },
      { x1: 300, y1: 210, x2: 300, y2: 300, dash: true }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Diệu Linh", progress: 86, score: 8.8, status: "Tốt", note: "Định vị cơ quan rất chắc, cần luyện thêm phần mạch máu." },
      { name: "Trần Đức Anh", progress: 58, score: 7.2, status: "Đang học", note: "Nhầm thùy não với chức năng, nên vẽ lại bốn thùy." },
      { name: "Lê Ngọc Hân", progress: 94, score: 9.4, status: "Tốt", note: "Có thể nhận bài nâng cao về giải phẫu lồng ngực." },
      { name: "Phạm Tuấn Kiệt", progress: 31, score: 5.6, status: "Cần hỗ trợ", note: "Chưa thuộc tên 12 đôi xương sườn, thiếu 3 phiếu thực hành." },
      { name: "Vũ Mai Phương", progress: 72, score: 8.0, status: "Đang học", note: "Tiến bộ đều, phần khớp còn yếu do chưa phân biệt ba loại khớp." },
      { name: "Đỗ Trung Hiếu", progress: 49, score: 6.6, status: "Đang học", note: "Cần ôn lại cung phản xạ và đường dẫn truyền." }
    ],
    submissions: [
      { student: "Nguyễn Diệu Linh", lesson: "Phiếu định vị cơ quan ổ bụng", time: "Hôm qua 22:05", status: "Chờ chấm" },
      { student: "Phạm Tuấn Kiệt", lesson: "Bài tập phân loại khớp", time: "Hôm qua 20:15", status: "Chờ chấm" },
      { student: "Lê Ngọc Hân", lesson: "Sơ đồ bốn thùy não", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thực hành thứ Ba tại phòng giải phẫu, mang găng tay và áo blouse.",
      "Kiểm tra giữa kỳ gồm nhận diện cơ quan trên mô hình và trắc nghiệm vị trí.",
      "Sinh viên chưa đạt 50 phần trăm tiến độ liên hệ giảng viên để được bổ trợ."
    ]
  },
  className: "Giải phẫu cơ thể người – K24",
  brief: "BTL-17_anatomar-mon-giai-phau.md"
};
