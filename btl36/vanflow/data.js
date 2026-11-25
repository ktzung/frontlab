window.BTL_DATA = {
  id: "vanflow",
  code: "BTL-08",
  name: "VănFlow",
  monogram: "Văn",
  subject: "Ngữ văn",
  level: "Phổ thông",
  group: "Ngôn ngữ & Xã hội",
  accent: "#b45309",
  accent2: "#be123c",
  font: "serif",
  tagline: "Từ bản đồ nhân vật đến đoạn văn nghị luận, mỗi bước viết đều có khung để bám vào.",
  intro: "VănFlow đưa việc đọc tác phẩm và viết nghị luận về cùng một chỗ: bản đồ nhân vật cho thấy tuyến truyện, khung dàn ý tách bài viết thành bốn phần rõ ràng, và tiêu chí chấm hiện ngay khi viết. Học sinh không còn phải đoán giáo viên muốn gì ở đoạn thân bài.",
  hero: { title: "Ngữ văn", highlight: "viết có luận điểm, không cảm tính" },
  heroBadge: "Bản đồ tác phẩm · Dàn ý · Chấm theo tiêu chí",
  labShort: "DÀN Ý",
  labTag: "PHÒNG LAB",
  practiceTag: "THẺ GHI NHỚ",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài đọc viết" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành riêng cho Ngữ văn: nhìn thấy cấu trúc tác phẩm, viết theo khung và được chấm theo tiêu chí công khai.",
  pathLead: "Đi từ đọc hiểu truyện, sang cảm nhận thơ, rồi học cách dựng đoạn nghị luận. Cuối chương ba là studio viết với bốn phần mở, giải thích, phân tích và kết.",
  features: [
    { badge: "01", title: "Bản đồ nhân vật", desc: "Sơ đồ tuyến nhân vật và sự kiện của truyện ngắn, bấm vào từng nút để xem chi tiết và mối quan hệ với nhân vật khác." },
    { badge: "02", title: "Studio viết bốn phần", desc: "Khung đoạn văn gồm mở bài, giải thích, phân tích dẫn chứng và kết bài; mỗi ô có gợi ý riêng và bản mẫu để đối chiếu." },
    { badge: "03", title: "Chấm theo tiêu chí", desc: "Năm tiêu chí về câu chủ đề, luận điểm, dẫn chứng và liên kết được đánh dấu trực tiếp khi viết, thay cho nhận xét chung chung." }
  ],
  modules: [
    {
      title: "Đọc hiểu truyện ngắn hiện đại",
      summary: "Dựng tuyến nhân vật, đọc chi tiết nghệ thuật và rút ra chủ đề thay vì kể lại cốt truyện.",
      lessons: [
        {
          id: "vb1",
          title: "Tuyến nhân vật và sự kiện",
          minutes: 22,
          level: "Cơ bản",
          summary: "Vẽ được tuyến nhân vật giúp nhìn ra cấu trúc truyện và vị trí của từng biến cố.",
          points: ["Mỗi nhân vật cần ghi vai trò trong việc đẩy cốt truyện đi tiếp.", "Sự kiện chỉ đáng ghi nếu nó làm thay đổi quan hệ hoặc số phận nhân vật.", "Truyện ngắn thường dồn sức vào một biến cố then chốt."],
          steps: [
            { title: "Liệt kê nhân vật theo vai trò", body: "Trong Vợ chồng A Phủ, Mị và A Phủ là tuyến chính, thống lí Pá Tra và A Sử là tuyến áp bức, còn A Châu và mấy người bạn A Phủ làm rõ bối cảnh. Phân vai trước khi kể giúp bạn không sa vào việc tóm tắt dàn trải. Chỉ ba nhóm: chính, đối lập và phụ trợ.", tip: "Vẽ ba cột chính, đối lập, phụ trợ trước khi đọc lại tác phẩm." },
            { title: "Chọn biến cố làm thay đổi số phận", body: "Với Mị, biến cố quyết định là đêm đông cởi trói cho A Phủ rồi chạy theo anh. Trước đó Mị cam chịu, sau đó Mị giành lại quyền sống, nên đây là bản lề của truyện. Những sự kiện không làm thay đổi nhân vật chỉ nên nhắc một câu.", tip: "Hỏi với mỗi sự kiện: sau đó nhân vật có khác trước không." },
            { title: "Nối quan hệ giữa các nhân vật", body: "Pá Tra nắm quyền lực qua nợ và cưỡng hôn, A Sử là người thi hành, còn Mị bị biến thành công cụ lao động. Vẽ các mũi tên áp bức và mũi tên giải phóng sẽ thấy rõ tư tưởng tác phẩm. Cách này biến việc đọc thành việc phân tích quan hệ.", tip: "Dùng hai màu cho quan hệ áp bức và quan hệ nâng đỡ." }
          ],
          formula: "Nhân vật – sự kiện bản lề – quan hệ"
        },
        {
          id: "vb2",
          title: "Chi tiết nghệ thuật đắt giá",
          minutes: 24,
          level: "Trung bình",
          summary: "Một chi tiết nhỏ có thể chứa cả tư tưởng tác phẩm nếu biết cách khai thác.",
          points: ["Chi tiết đắt là chi tiết vừa tả thực vừa gợi nghĩa.", "Phải chỉ ra chi tiết nằm ở đoạn nào, gắn với nhân vật nào.", "Khai thác theo hai lớp: nghĩa thực và nghĩa biểu tượng."],
          steps: [
            { title: "Chọn chi tiết có thể mở nghĩa", body: "Bát cháo hành Thị Nở mang đến cho Chí Phèo vừa là món ăn giải cảm vừa là lần đầu Chí được chăm sóc như một con người. Một chi tiết như thế làm được hai việc cùng lúc, nên đáng dừng lại phân tích. Chi tiết chỉ để tả cảnh sẽ không nuôi được đoạn văn.", tip: "Ưu tiên chi tiết gắn với hành động chăm sóc, chia sẻ, trao nhận." },
            { title: "Tách hai lớp nghĩa", body: "Lớp thực là bát cháo nóng giữa trưa đông; lớp biểu tượng là tình người đánh thức phần người trong Chí Phèo. Viết lớp thực trước để chứng minh mình không bịa, rồi mới mở sang lớp nghĩa. Thứ tự này giữ cho lập luận có chỗ đứng.", tip: "Mỗi chi tiết viết đúng hai câu: một câu tả, một câu nghĩa." },
            { title: "Nối chi tiết với chủ đề", body: "Sau khi phân tích bát cháo hành, phải quay về ý khái quát: Nam Cao tố cáo xã hội đã tước đi quyền được sống tử tế của người nông dân. Nếu dừng ở chi tiết mà không nối về chủ đề, đoạn văn chỉ còn là bình giảng rời. Câu nối chính là chỗ thể hiện năng lực tổng hợp.", tip: "Kết đoạn bằng một câu khái quát có từ khóa của chủ đề." }
          ],
          formula: "Chi tiết thực → nghĩa biểu tượng → chủ đề"
        },
        {
          id: "vb3",
          title: "Chủ đề và tư tưởng tác phẩm",
          minutes: 20,
          level: "Trung bình",
          summary: "Phân biệt đề tài, chủ đề và tư tưởng để không viết lan man khi mở bài.",
          points: ["Đề tài là vùng hiện thực, chủ đề là vấn đề được đặt ra.", "Tư tưởng là câu trả lời của nhà văn cho vấn đề đó.", "Chủ đề phải phát biểu được bằng một câu, không phải một đoạn."],
          steps: [
            { title: "Phân biệt ba tầng", body: "Với Chí Phèo, đề tài là người nông dân bị bần cùng hóa, chủ đề là bi kịch tha hóa và khát vọng lương thiện, còn tư tưởng là tố cáo xã hội đã tước mất quyền làm người. Ba tầng này khác nhau nhưng liên tục nối tiếp. Nhầm lẫn ba tầng là lỗi phổ biến khiến mở bài chung chung.", tip: "Viết ba dòng riêng cho đề tài, chủ đề, tư tưởng trước khi lập dàn ý." },
            { title: "Kiểm tra chủ đề bằng một câu", body: "Nếu phải dùng đến ba câu mới nói xong chủ đề, nhiều khả năng bạn đang kể nội dung. Một chủ đề tốt thường có dạng một danh từ ghép với một động từ, ví dụ bi kịch tha hóa của người nông dân. Câu ngắn buộc bạn chọn đúng trọng tâm.", tip: "Đặt giới hạn mười lăm từ cho câu chủ đề." },
            { title: "Đối chiếu với chi tiết đã phân tích", body: "Sau khi phát biểu chủ đề, hãy thử xem hai chi tiết mạnh nhất có chống lại câu đó không. Nếu bát cháo hành và tiếng chửi mở đầu đều phục vụ câu chủ đề, lập luận của bạn đứng vững. Nếu không khớp, cần chỉnh lại câu chủ đề chứ không phải bỏ chi tiết.", tip: "Luôn kiểm tra chủ đề bằng hai dẫn chứng mạnh nhất." }
          ],
          formula: "Đề tài – chủ đề – tư tưởng: ba tầng, ba câu"
        }
      ]
    },
    {
      title: "Thơ và biện pháp tu từ",
      summary: "Nghe nhịp, đọc hình ảnh và gọi đúng tên biện pháp tu từ khi phân tích.",
      lessons: [
        {
          id: "th1",
          title: "Nhịp điệu và giọng điệu",
          minutes: 20,
          level: "Cơ bản",
          summary: "Nhịp thơ không phải chi tiết trang trí mà là chỗ cảm xúc lộ ra rõ nhất.",
          points: ["Đọc thành tiếng để nhận ra chỗ ngắt bất thường.", "Nhịp dồn dập thường đi với cảm xúc mạnh hoặc hành trình gấp.", "Giọng điệu có thể chuyển giữa các khổ, cần chỉ ra chỗ chuyển."],
          steps: [
            { title: "Đọc thành tiếng và đánh dấu ngắt", body: "Trong Tây Tiến, câu Tây Tiến đoàn binh không mọc tóc thường được ngắt 2/2/3, tạo âm hưởng vừa hào hùng vừa ngang tàng. Nếu đọc đều theo nhịp 4/3 quen thuộc, sắc thái ấy sẽ mất. Đánh dấu bằng bút chì ngay trên bản in.", tip: "Đọc mỗi khổ hai lần, lần hai cố ý đổi nhịp để so sánh." },
            { title: "Nối nhịp với nội dung", body: "Nhịp ngắn và dồn trong đoạn nói về hành quân gợi sự khắc nghiệt; nhịp chậm và ngân dài ở đoạn về Châu Mộc gợi hoài niệm. Nhịp điệu vì thế là bằng chứng, không phải cảm nhận chủ quan. Khi viết, hãy nêu nhịp rồi mới nêu hiệu quả.", tip: "Mỗi nhận xét về nhịp phải kèm một dẫn chứng nguyên văn ngắn." },
            { title: "Theo dõi chỗ chuyển giọng", body: "Tây Tiến mở đầu bằng tiếng gọi tha thiết, giữa bài chuyển sang giọng bi tráng khi nói về mồ viễn xứ, cuối bài trở lại giọng khẳng định. Chỉ ra ba chặng này giúp bài viết có tiến trình thay vì liệt kê cảm xúc. Đây cũng là cách chứng minh bạn đọc toàn bài, không chỉ học thuộc vài câu.", tip: "Chia bài thơ thành ba chặng và ghi một từ chỉ giọng cho mỗi chặng." }
          ],
          formula: "Nhịp → sắc thái → dẫn chứng nguyên văn"
        },
        {
          id: "th2",
          title: "Ẩn dụ và hoán dụ",
          minutes: 22,
          level: "Trung bình",
          summary: "Gọi đúng tên biện pháp và giải thích cơ chế chuyển nghĩa, tránh nhầm hai phép tu từ.",
          points: ["Ẩn dụ dựa trên nét tương đồng giữa hai sự vật.", "Hoán dụ dựa trên quan hệ gần gũi, thường là bộ phận với toàn thể.", "Gọi tên sai sẽ làm cả đoạn phân tích mất giá trị."],
          steps: [
            { title: "Phân biệt bằng câu hỏi", body: "Nếu hai sự vật giống nhau ở một nét nào đó thì đó là ẩn dụ; nếu chúng chỉ liền kề hoặc có quan hệ chứa đựng thì là hoán dụ. Câu Áo nâu liền với áo xanh dùng trang phục để chỉ người mặc, nên là hoán dụ. Cùng một câu, gọi sai tên là mất điểm dù cảm nhận đúng.", tip: "Hỏi: giống nhau hay chỉ đi liền nhau." },
            { title: "Giải thích cơ chế, không chỉ gọi tên", body: "Nói câu thơ dùng ẩn dụ là chưa đủ; phải nói cái được ẩn là gì và vì sao người đọc hiểu được. Ví dụ trong Vội vàng, tắt nắng là giữ lại thời gian, nên hình ảnh phơi bày khát vọng chiếm lĩnh cái đẹp. Cơ chế ấy chính là phần được điểm.", tip: "Viết theo mẫu: hình ảnh A gợi đến B vì cùng có nét C." },
            { title: "Đánh giá hiệu quả", body: "Sau khi giải mã, cần một câu nói vì sao tác giả chọn cách nói ấy thay vì nói thẳng. Thường câu trả lời nằm ở chỗ hình ảnh tạo được cảm giác cụ thể hoặc nén được nhiều nghĩa. Một câu đánh giá đúng chỗ giúp đoạn văn khép lại gọn.", tip: "Kết mỗi đoạn phân tích tu từ bằng một câu về hiệu quả." }
          ],
          formula: "Ẩn dụ: tương đồng. Hoán dụ: gần gũi"
        },
        {
          id: "th3",
          title: "Hình ảnh thơ và liên tưởng",
          minutes: 18,
          level: "Trung bình",
          summary: "Từ một hình ảnh, mở ra mạng liên tưởng và chọn nhánh phục vụ luận điểm.",
          points: ["Hình ảnh thơ thường có tính hai mặt: tả thực và gợi cảm.", "Liên tưởng phải quay về luận điểm, không lang mang.", "So sánh hình ảnh trong cùng bài giúp thấy sự phát triển cảm xúc."],
          steps: [
            { title: "Ghi ba liên tưởng rồi chọn một", body: "Với hình ảnh sóng trong bài Sóng của Xuân Quỳnh, có thể liên tưởng đến biển, đến nhịp tim, đến hành trình tìm bến. Chỉ nên chọn nhánh phục vụ luận điểm về khát vọng tình yêu bền bỉ. Ghi nhiều rồi chọn giúp tránh cảm giác bí ý, nhưng bài viết chỉ đi một nhánh.", tip: "Luôn ghi ba nhánh, chỉ viết một nhánh." },
            { title: "So sánh trong nội bộ bài thơ", body: "Sóng có lúc dữ dội và dịu êm, có lúc dưới lòng sâu và trên mặt nước; các cặp đối lập cho thấy tình yêu vừa mãnh liệt vừa lặng lẽ. Đặt các hình ảnh cạnh nhau cho thấy sự vận động của cảm xúc. Cách này mạnh hơn việc phân tích từng hình ảnh riêng lẻ.", tip: "Lập bảng hai cột những cặp hình ảnh đối lập trong bài." },
            { title: "Tránh suy diễn quá xa", body: "Mọi liên tưởng phải có điểm tựa trong từ ngữ của bài thơ, nếu không sẽ thành áp đặt. Ví dụ nói sóng là con thuyền thì sai vì bài thơ không gợi quan hệ ấy. Hãy tự hỏi: chi tiết nào trong câu thơ cho phép tôi nghĩ vậy.", tip: "Với mỗi liên tưởng, chỉ ra từ ngữ làm điểm tựa." }
          ],
          formula: "Một hình ảnh, ba liên tưởng, một nhánh viết"
        }
      ]
    },
    {
      title: "Viết đoạn văn nghị luận",
      summary: "Dựng câu chủ đề, chọn dẫn chứng và phân tích, rồi nối các đoạn thành bài mạch lạc.",
      lessons: [
        {
          id: "nl1",
          title: "Câu chủ đề và luận điểm",
          minutes: 20,
          level: "Cơ bản",
          summary: "Một câu chủ đề đúng sẽ quyết định toàn bộ phần còn lại của đoạn văn.",
          points: ["Câu chủ đề nêu ý khái quát, không nêu sự việc.", "Mỗi đoạn chỉ nên có một luận điểm chính.", "Các luận điểm trong bài phải khác nhau và cùng phục vụ chủ đề."],
          steps: [
            { title: "Viết câu chủ đề có hai thành phần", body: "Câu chủ đề tốt thường gồm đối tượng và nhận định về đối tượng, ví dụ Mị là nhân vật cho thấy sức sống tiềm tàng của người phụ nữ miền núi. Nếu chỉ viết Mị là nhân vật chính thì chưa có gì để chứng minh. Nhận định chính là phần bạn phải bảo vệ bằng dẫn chứng.", tip: "Kiểm tra câu chủ đề có động từ hoặc tính từ mang nhận định chưa." },
            { title: "Tách luận điểm, không tách sự việc", body: "Ba luận điểm về Mị có thể là sức sống trước cái chết, sức sống trước tình yêu và sức sống khi hành động cứu người. Ba ý này cùng một hướng nhưng không trùng nhau. Nếu đặt tên luận điểm bằng các sự việc như đêm đông, đêm tình mùa xuân thì dễ lặp.", tip: "Đặt tên luận điểm bằng một cụm danh từ khái quát." },
            { title: "Sắp xếp theo mạch tăng tiến", body: "Luận điểm mạnh nhất nên đặt ở cuối đoạn để tạo đỉnh cảm xúc. Trong ví dụ trên, hành động cứu A Phủ là bước chuyển lớn nhất nên đứng sau cùng. Thứ tự này cũng giúp đoạn văn có hướng thay vì liệt kê.", tip: "Xếp ba luận điểm theo mức độ thay đổi của nhân vật." }
          ],
          formula: "Câu chủ đề = đối tượng + nhận định"
        },
        {
          id: "nl2",
          title: "Dẫn chứng và thao tác phân tích",
          minutes: 24,
          level: "Trung bình",
          summary: "Dẫn chứng phải có địa chỉ, và sau mỗi dẫn chứng bắt buộc có một câu phân tích.",
          points: ["Dẫn chứng cần đủ ngắn để nhớ, đủ cụ thể để kiểm chứng.", "Không dẫn cả đoạn dài rồi để người đọc tự hiểu.", "Mỗi dẫn chứng phải trả lời câu hỏi: chi tiết này chứng minh gì."],
          steps: [
            { title: "Chọn dẫn chứng có địa chỉ", body: "Thay vì nói tác phẩm có nhiều chi tiết hay, hãy nêu chi tiết Mị nghe tiếng sáo gọi bạn và nhớ lại những ngày trẻ. Dẫn chứng có địa chỉ giúp người chấm kiểm chứng và thấy bạn đọc thật. Một bài có ba dẫn chứng chắc chắn tốt hơn mười dẫn chứng mờ.", tip: "Ghi kèm tên nhân vật và hoàn cảnh của từng dẫn chứng." },
            { title: "Phân tích theo ba nhịp", body: "Nhịp một tái hiện chi tiết, nhịp hai cắt nghĩa chi tiết ấy nói gì về nhân vật, nhịp ba nối với luận điểm. Ví dụ: tiếng sáo vang lên, Mị thấy mình còn trẻ, điều đó chứng tỏ sức sống chưa bị giết chết. Ba nhịp này giữ cho đoạn văn không rơi vào kể lể.", tip: "Đọc lại từng cụm dẫn chứng và tự hỏi đã đủ ba nhịp chưa." },
            { title: "Tránh dẫn chứng thay lập luận", body: "Nếu đoạn văn chỉ toàn trích dẫn nối nhau, người đọc không biết bạn nghĩ gì. Tỉ lệ hợp lý là mỗi dẫn chứng đi kèm hai câu do bạn viết. Dẫn chứng là nguyên liệu, lập luận mới là phần được đánh giá.", tip: "Đếm số câu trích và số câu phân tích, tỉ lệ nên là một trên hai." }
          ],
          formula: "Tái hiện – cắt nghĩa – nối luận điểm"
        },
        {
          id: "nl3",
          title: "Liên kết và chuẩn hóa diễn đạt",
          minutes: 22,
          level: "Nâng cao",
          summary: "Dùng phép liên kết có chủ đích và sửa các lỗi diễn đạt khiến bài văn nặng nề.",
          points: ["Liên kết bằng từ nối, bằng lặp từ có kiểm soát và bằng đại từ.", "Câu quá dài là nguyên nhân phổ biến của lỗi diễn đạt.", "Mỗi đoạn nên kết bằng một câu khái quát, không kết bằng dẫn chứng."],
          steps: [
            { title: "Chọn phép liên kết theo chức năng", body: "Từ nối như tuy vậy phù hợp khi chuyển sang ý đối lập, còn hơn nữa dùng khi muốn tăng cấp luận điểm. Lặp từ có kiểm soát giúp người đọc bám chủ đề, nhưng lặp quá nhiều thì thành rườm. Mỗi đoạn chỉ nên dùng hai phép liên kết.", tip: "Đánh dấu từ nối ở đầu mỗi câu để kiểm tra mật độ." },
            { title: "Tách câu quá dài", body: "Câu dài thường chứa hai hoặc ba ý nối bằng dấu phẩy, khi đọc sẽ mất trọng tâm. Hãy tách thành câu ngắn, giữ mỗi câu một ý chính, rồi dùng từ nối để nối lại. Bài văn sẽ rõ hơn dù số câu tăng.", tip: "Nếu một câu có hơn hai dấu phẩy, thử tách thành hai câu." },
            { title: "Chuẩn hóa từ ngữ", body: "Các cụm như vô cùng vô cùng, hết sức là hết sức thường làm câu mất tự nhiên. Thay bằng một tính từ mạnh hoặc một chi tiết cụ thể sẽ thuyết phục hơn lời khen. Tương tự, tránh dùng từ ngữ cảm thán thay cho phân tích.", tip: "Thay mỗi cụm nhấn mạnh sáo rỗng bằng một dẫn chứng cụ thể." }
          ],
          formula: "Hai phép liên kết mỗi đoạn, một ý mỗi câu"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Luận điểm", back: "Ý khái quát nêu quan điểm của người viết về vấn đề, được chứng minh bằng luận cứ.", hint: "Là ý kiến, không phải sự việc.", example: "Mị là nhân vật thể hiện sức sống tiềm tàng." },
    { front: "Luận cứ", back: "Cơ sở để chứng minh luận điểm, gồm lí lẽ và dẫn chứng.", hint: "Cái làm chỗ dựa cho luận điểm.", example: "Chi tiết Mị nghe tiếng sáo là dẫn chứng cho sức sống." },
    { front: "Dẫn chứng", back: "Chi tiết, câu văn hoặc sự việc cụ thể lấy từ tác phẩm để chứng minh.", hint: "Phải có địa chỉ trong tác phẩm.", example: "Bát cháo hành của Thị Nở trong Chí Phèo." },
    { front: "Câu chủ đề", back: "Câu nêu ý khái quát của cả đoạn, thường đứng đầu đoạn.", hint: "Đối tượng cộng nhận định.", example: "Mị là nhân vật cho thấy sức sống tiềm tàng của người phụ nữ miền núi." },
    { front: "Mở bài gián tiếp", back: "Dẫn dắt từ vấn đề rộng hoặc một liên tưởng rồi mới vào đề.", hint: "Đi đường vòng có chủ đích.", example: "Từ hình ảnh người phụ nữ trong văn học, dẫn vào Mị." },
    { front: "Kết bài mở rộng", back: "Khẳng định lại luận điểm và nêu liên hệ, bài học hoặc vấn đề còn bỏ ngỏ.", hint: "Không lặp nguyên văn mở bài.", example: "Liên hệ sức sống của Mị với hình ảnh người phụ nữ hôm nay." },
    { front: "Ẩn dụ", back: "Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng.", hint: "Dựa trên sự giống nhau.", example: "Tắt nắng trong Vội vàng là giữ lại thời gian." },
    { front: "Hoán dụ", back: "Gọi tên sự vật bằng tên sự vật khác có quan hệ gần gũi, ví dụ bộ phận chỉ toàn thể.", hint: "Dựa trên sự liền kề.", example: "Áo nâu liền với áo xanh chỉ nông dân và công nhân." },
    { front: "Giọng điệu", back: "Sắc thái tình cảm của người nói được thể hiện qua nhịp, từ ngữ và cách xưng hô.", hint: "Khác với nội dung ở chỗ nó nằm trong cách nói.", example: "Tây Tiến chuyển từ tha thiết sang bi tráng." },
    { front: "Chi tiết nghệ thuật", back: "Yếu tố nhỏ trong tác phẩm nhưng mang nghĩa tả thực và nghĩa biểu tượng.", hint: "Nhỏ mà mở được nhiều nghĩa.", example: "Cái lò gạch cũ cuối Chí Phèo." },
    { front: "Chủ đề tác phẩm", back: "Vấn đề trung tâm mà tác giả đặt ra trong tác phẩm.", hint: "Phát biểu gọn trong một câu.", example: "Bi kịch tha hóa của người nông dân trong Chí Phèo." },
    { front: "Liên kết đoạn", back: "Các phép nối câu và nối đoạn bằng từ nối, lặp từ hoặc đại từ.", hint: "Không phải cứ thêm từ nối là hay.", example: "Tuy vậy dùng để chuyển sang ý đối lập." }
  ],
  quiz: [
    { q: "Chi tiết bát cháo hành trong Chí Phèo thể hiện điều gì rõ nhất?", options: ["Sự giàu có của Thị Nở", "Tình người đánh thức phần người trong Chí", "Thói tham ăn của Chí Phèo", "Sự lạnh lùng của dân làng Vũ Đại"], answer: 1, explain: "Bát cháo vừa là món ăn giải cảm vừa là lần đầu Chí được chăm sóc như một con người, từ đó phần người trỗi dậy." },
    { q: "Tác giả của bài thơ Tây Tiến là:", options: ["Quang Dũng", "Tố Hữu", "Nguyễn Khoa Điềm", "Xuân Diệu"], answer: 0, explain: "Tây Tiến do Quang Dũng viết năm 1948, gắn với đơn vị Tây Tiến mà ông từng tham gia." },
    { q: "Vợ chồng A Phủ được in trong tập truyện nào?", options: ["Gió lạnh đầu mùa", "Số đỏ", "Nắng trong vườn", "Truyện Tây Bắc"], answer: 3, explain: "Truyện nằm trong tập Truyện Tây Bắc của Tô Hoài, xuất bản năm 1953 sau chuyến đi thực tế vùng Tây Bắc." },
    { q: "Câu chủ đề của một đoạn văn nghị luận thường đứng ở đâu?", options: ["Đầu đoạn", "Cuối đoạn", "Giữa đoạn", "Không cần có"], answer: 0, explain: "Đặt ở đầu đoạn là cách phổ biến giúp người đọc nắm ý khái quát trước khi đi vào dẫn chứng." },
    { q: "Ẩn dụ là biện pháp gọi tên sự vật dựa trên:", options: ["Quan hệ gần gũi", "Quan hệ bộ phận và toàn thể", "Nét tương đồng giữa hai sự vật", "Quan hệ nguyên nhân và kết quả"], answer: 2, explain: "Ẩn dụ dựa trên sự giống nhau về một nét nghĩa; hoán dụ mới dựa trên quan hệ gần gũi." },
    { q: "Câu thơ Sông Mã xa rồi Tây Tiến ơi mở đầu bài thơ bằng:", options: ["Liệt kê", "Điệp ngữ", "Câu hỏi tu từ", "Câu cảm thán gợi nỗi nhớ"], answer: 3, explain: "Tiếng gọi Tây Tiến ơi tạo âm hưởng cảm thán, đặt cả bài thơ vào mạch hoài niệm." },
    { q: "Luận cứ khác luận điểm ở chỗ:", options: ["Luận cứ là ý kiến khái quát", "Luận cứ là lí lẽ và dẫn chứng cụ thể", "Luận cứ là câu kết đoạn", "Luận cứ là cảm xúc người viết"], answer: 1, explain: "Luận điểm là điều cần chứng minh, luận cứ là căn cứ gồm lí lẽ và dẫn chứng dùng để chứng minh." },
    { q: "Trong câu Áo nâu liền với áo xanh, hình ảnh áo nâu và áo xanh dùng để chỉ:", options: ["Màu áo làng quê", "Quân đội và học sinh", "Nông dân và công nhân", "Thanh niên tình nguyện"], answer: 2, explain: "Đây là hoán dụ lấy trang phục đặc trưng để chỉ tầng lớp người mặc, tức nông dân và công nhân." },
    { q: "Mở bài gián tiếp là cách:", options: ["Nêu thẳng vấn đề ngay câu đầu", "Kể lại toàn bộ cốt truyện", "Trích nguyên cả bài thơ", "Dẫn dắt từ vấn đề rộng rồi mới vào đề"], answer: 3, explain: "Mở bài gián tiếp tạo đường dẫn có chủ đích, nhưng vẫn phải nêu được vấn đề nghị luận trước khi hết đoạn." },
    { q: "Sau mỗi dẫn chứng trong đoạn nghị luận cần làm gì?", options: ["Chuyển ngay sang dẫn chứng khác", "Bình luận, cắt nghĩa dẫn chứng", "Kể thêm tình tiết phụ", "Nêu cảm xúc thật dài"], answer: 1, explain: "Phân tích sau dẫn chứng là chỗ thể hiện lập luận; thiếu bước này đoạn văn chỉ còn là trích dẫn nối tiếp." }
  ],
  lab: {
    kind: "builder",
    title: "Studio viết đoạn nghị luận 200 chữ",
    lead: "Đề bài: Phân tích sức sống tiềm tàng của nhân vật Mị trong Vợ chồng A Phủ. Viết theo bốn ô, đối chiếu với bản mẫu và tự đánh dấu năm tiêu chí.",
    stageLabel: "Studio viết",
    controlNote: "Viết vào từng ô rồi bấm Điền bản mẫu để so sánh cấu trúc. Đánh dấu tiêu chí ở cột phải khi bài đã đạt.",
    note: "Bản mẫu chỉ để đối chiếu cách triển khai, không dùng thay bài viết của học sinh.",
    sections: [
      { title: "Mở bài", prompt: "Dẫn dắt từ một chi tiết hoặc bối cảnh rồi nêu vấn đề trong hai câu.", placeholder: "Trong truyện ngắn Vợ chồng A Phủ, Tô Hoài khắc họa Mị..." },
      { title: "Giải thích vấn đề", prompt: "Cắt nghĩa từ khóa sức sống tiềm tàng bằng hai câu, tránh kể lại cốt truyện.", placeholder: "Sức sống tiềm tàng là phần nhân tính bị vùi lấp nhưng chưa bị giết chết..." },
      { title: "Phân tích dẫn chứng", prompt: "Chọn hai dẫn chứng, mỗi dẫn chứng tái hiện rồi cắt nghĩa, sau đó nối về luận điểm.", placeholder: "Trong đêm tình mùa xuân, tiếng sáo gọi bạn khiến Mị nhớ..." },
      { title: "Kết bài", prompt: "Khẳng định lại luận điểm và mở rộng bằng một liên hệ ngắn, không lặp mở bài.", placeholder: "Sức sống của Mị cho thấy ngọn lửa sống trong con người..." }
    ],
    criteria: [
      "Có câu chủ đề nêu rõ đối tượng và nhận định",
      "Ba phần thân bài không trùng ý nhau",
      "Dẫn chứng có địa chỉ cụ thể trong tác phẩm",
      "Sau mỗi dẫn chứng có câu phân tích",
      "Kết bài không lặp nguyên văn mở bài"
    ],
    sample: [
      "Từ cảnh Mị bị trói đứng trong buồng tối đến khoảnh khắc Mị cắt dây trói cứu A Phủ, Tô Hoài đã để nhân vật đi một chặng dài từ cam chịu đến tự giải phóng. Đoạn văn này phân tích sức sống tiềm tàng làm nên vẻ đẹp của Mị trong Vợ chồng A Phủ.",
      "Sức sống tiềm tàng là phần nhân tính bị áp bức vùi lấp nhưng chưa bị giết chết, luôn chờ một tác nhân đánh thức. Ở Mị, phần sống ấy không mất đi mà chỉ ngủ quên dưới lớp tê dại của những năm tháng làm dâu trừ nợ.",
      "Trong đêm tình mùa xuân, tiếng sáo gọi bạn và bát rượu khiến Mị nhớ mình từng có tuổi trẻ, có khát vọng đi chơi. Chi tiết ấy chứng tỏ sức sống chưa chết, chỉ cần một tín hiệu của cuộc sống là trỗi dậy. Mạnh hơn nữa là hành động cởi trói cho A Phủ: lần đầu Mị tự quyết định thay cho số phận mình, và quyết định ấy đưa Mị ra khỏi nhà thống lí.",
      "Sức sống của Mị cho thấy ngọn lửa sống trong con người không thể bị dập tắt bằng roi vọt hay nợ nần. Từ nhân vật này, người đọc hiểu vì sao văn học cách mạng luôn đặt niềm tin vào khả năng tự giải phóng của người lao động."
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Khánh Vy", progress: 88, score: 8.7, status: "Tốt", note: "Lập luận chắc, cần mở rộng phần liên hệ." },
      { name: "Trần Đức Huy", progress: 57, score: 7.1, status: "Đang học", note: "Hay kể lại cốt truyện thay vì phân tích." },
      { name: "Lê Ngọc Mai", progress: 94, score: 9.3, status: "Tốt", note: "Có thể nhận đề nâng cao về so sánh hai tác phẩm." },
      { name: "Phạm Anh Tuấn", progress: 31, score: 5.6, status: "Cần hỗ trợ", note: "Chưa viết được câu chủ đề đúng chuẩn." },
      { name: "Vũ Thu Trang", progress: 69, score: 7.8, status: "Đang học", note: "Dẫn chứng tốt nhưng thiếu câu phân tích." },
      { name: "Đỗ Minh Khoa", progress: 44, score: 6.2, status: "Đang học", note: "Nên ôn lại ẩn dụ và hoán dụ." }
    ],
    submissions: [
      { student: "Nguyễn Khánh Vy", lesson: "Đoạn nghị luận về sức sống của Mị", time: "Hôm qua 22:05", status: "Chờ chấm" },
      { student: "Phạm Anh Tuấn", lesson: "Phiếu đọc hiểu Chí Phèo", time: "Hôm qua 20:10", status: "Chờ chấm" },
      { student: "Lê Ngọc Mai", lesson: "Bài cảm nhận khổ cuối Tây Tiến", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Thứ Ba tuần này kiểm tra 15 phút phần biện pháp tu từ, không dùng tài liệu.",
      "Bài viết số 2 nộp trước 20 giờ Chủ nhật, nộp muộn trừ một điểm.",
      "Học sinh có điểm viết dưới 6 đăng ký buổi phụ đạo thứ Sáu tại phòng 12A3."
    ]
  },
  className: "Ngữ văn 12A3",
  brief: "BTL-08_vanflow-mon-ngu-van.md"
};
