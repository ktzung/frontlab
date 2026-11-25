window.BTL_DATA = {
  id: "linguaflow",
  code: "BTL-07",
  name: "LinguaFlow",
  monogram: "Aa",
  subject: "Ngoại ngữ",
  level: "Đại học",
  group: "Ngôn ngữ & Xã hội",
  accent: "#e11d48",
  accent2: "#f97316",
  font: "display",
  tagline: "Mỗi ngày một tình huống, một bộ từ và một lượt nghe để tiếng Anh thành phản xạ.",
  intro: "LinguaFlow biến giờ học tiếng Anh thành chuỗi tình huống có thể thao tác: lật thẻ từ vựng có phiên âm, nghe điền từ rồi đối chiếu transcript, và nhập vai trong hội thoại chấm ngay từng lượt. Mọi phản hồi đều giải thích vì sao một cách nói chưa phù hợp, để người học sửa ngay thay vì đoán.",
  hero: { title: "Tiếng Anh", highlight: "phản xạ qua tình huống thật" },
  heroBadge: "Hội thoại · Flashcard · Luyện nghe",
  labShort: "HỘI THOẠI",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài luyện" },
    { value: "12", label: "Thẻ từ vựng" },
    { value: "10", label: "Câu phản xạ" }
  ],
  featureLead: "Ba cách truyền đạt được chọn cho môn Ngoại ngữ: nghe đúng, nhớ từ theo ngữ cảnh và nói đúng tình huống.",
  pathLead: "Đi từ phát âm và cụm từ, sang nghe hiểu chủ động, rồi bước vào hội thoại tình huống. Cuối mỗi chương đều có bài luyện để kiểm tra phản xạ.",
  features: [
    { badge: "01", title: "Hội thoại nhập vai", desc: "Năm lượt tại quầy dịch vụ sinh viên, mỗi lượt ba cách đáp; chọn sai vẫn được giải thích vì sao cách nói đó chưa phù hợp ngữ cảnh." },
    { badge: "02", title: "Flashcard có phiên âm", desc: "Mặt trước là từ hoặc cụm, mặt sau có nghĩa, phiên âm IPA và một câu ví dụ thật, kèm gợi ý để nhớ theo cụm thay vì học chữ." },
    { badge: "03", title: "Quiz chấm ngay", desc: "Mười câu trắc nghiệm về ngữ pháp, trọng âm và cụm cố định, mỗi câu có lời giải thích ngắn nêu rõ lỗi thường gặp." }
  ],
  modules: [
    {
      title: "Phát âm và từ vựng nền tảng",
      summary: "Đặt trọng âm đúng, giữ âm cuối và học từ theo cụm để người nghe hiểu ngay lần đầu.",
      lessons: [
        {
          id: "lf1",
          title: "Trọng âm từ và âm cuối",
          minutes: 18,
          level: "Cơ bản",
          summary: "Hai yếu tố quyết định người nghe có nhận ra từ hay không: âm tiết được nhấn và phụ âm cuối.",
          points: ["Trọng âm quyết định độ rõ hơn cả việc phát âm từng âm riêng lẻ.", "Nuốt âm cuối làm mất thì, số nhiều và ngôi thứ ba.", "Học từ mới phải đánh dấu trọng âm, không chỉ nhớ mặt chữ."],
          steps: [
            { title: "Nghe rồi đánh dấu trọng âm", body: "Từ photograph có trọng âm ở âm tiết đầu, nhưng photography lại dồn trọng âm về âm tiết thứ hai. Trước khi học nghĩa, hãy gạch chân âm tiết mạnh và đọc lại theo đúng vị trí đó. Thói quen này rẻ hơn nhiều so với việc sửa lại sau vài tháng.", tip: "Mở từ điển có phiên âm, bắt chước đúng dấu trọng âm trước khi đọc cả từ." },
            { title: "Giữ phụ âm cuối", body: "He works khác he work ở âm /s/ cuối, và nếu nuốt âm này người nghe không xác định được ngôi thứ ba số ít. Luyện đọc chậm cho rõ rồi tăng tốc dần nhưng vẫn giữ phụ âm cuối. Ghi âm lại là cách nhanh nhất để tự phát hiện.", tip: "Thu âm một câu rồi nghe lại, chỉ chú ý các âm cuối." },
            { title: "Luyện cặp âm tối thiểu", body: "sit và seat khác nhau ở /ɪ/ ngắn và /iː/ dài; ship và sheep cũng vậy. Đặt hai từ cạnh nhau, đọc luân phiên và nhờ người khác xác nhận bạn đang nói từ nào. Tai quen dần nhờ số lần đối chiếu, không nhờ giải thích lý thuyết.", tip: "Mỗi tuần chỉ chọn ba cặp âm, luyện đến khi nghe chắc rồi mới đổi cặp khác." }
          ],
          formula: "Trọng âm đúng + âm cuối rõ = từ dễ nhận diện"
        },
        {
          id: "lf2",
          title: "Học từ theo cụm cố định",
          minutes: 20,
          level: "Cơ bản",
          summary: "Người bản ngữ nhớ cụm chứ không nhớ từ rời, nên học collocation giúp nói tự nhiên và nhanh hơn.",
          points: ["Nhiều lỗi không phải ngữ pháp mà là ghép sai động từ với danh từ.", "Cụm từ theo chủ đề dễ nhớ hơn danh sách từ không liên quan.", "Mỗi cụm mới cần được dùng ngay trong một câu của mình."],
          steps: [
            { title: "Nhận diện cụm thay vì từ", body: "Ta nói make a decision chứ không nói do a decision, và do research chứ không make research. Khi gặp động từ mới, hãy ghi kèm danh từ đi với nó thay vì ghi động từ trần. Đây là cách tránh lỗi mà ngữ pháp không chỉ ra được.", tip: "Ghi vào sổ theo dạng cụm đầy đủ, không ghi từ đơn." },
            { title: "Gom cụm theo một chủ đề", body: "Chủ đề du lịch có book a flight, miss a connection, check in, delay. Học năm cụm cùng chủ đề giúp não tạo mạng liên tưởng, và khi cần nói về chủ đề đó bạn lấy được cả nhóm. Học rời rạc thì mỗi từ phải nhớ riêng.", tip: "Mỗi tuần chọn một chủ đề gần với lịch sinh hoạt của bạn." },
            { title: "Dùng cụm trong câu của mình", body: "Đặt một câu đúng với hoàn cảnh thật, chẳng hạn I missed my connection in Bangkok last summer. Câu do bạn tự viết được nhớ lâu hơn câu mẫu trong giáo trình vì nó gắn với ký ức cá nhân. Đọc to câu đó hai lần để tai và miệng cùng ghi nhớ.", tip: "Mỗi cụm phải có một câu ví dụ do chính bạn viết." }
          ],
          formula: "Học cụm, không học từ rời"
        },
        {
          id: "lf3",
          title: "Lặp lại theo khoảng cách",
          minutes: 16,
          level: "Trung bình",
          summary: "Ôn đúng thời điểm giúp nhớ lâu với ít thời gian hơn, thay vì đọc lại nhiều lần trong một buổi.",
          points: ["Ôn lại sau 1 ngày, 3 ngày và 7 ngày là nhịp khởi đầu hợp lý.", "Tự nhớ lại hiệu quả hơn đọc lại, dù đọc lại thấy dễ chịu hơn.", "Đánh dấu thẻ cần ôn để buổi học sau có trọng tâm."],
          steps: [
            { title: "Chia nhịp ôn", body: "Một bộ mười thẻ nên được ôn lại vào ngày hôm sau, rồi sau ba ngày, rồi sau một tuần. Mỗi lần ôn chỉ mất vài phút nhưng chen đúng lúc trí nhớ bắt đầu phai. Nhồi mười lần trong một tối chỉ tạo cảm giác đã thuộc.", tip: "Đặt nhắc trên điện thoại cho ba mốc 1, 3 và 7 ngày." },
            { title: "Tự nhớ trước khi lật", body: "Nhìn mặt trước của thẻ và tự nói nghĩa thành tiếng trước khi lật mặt sau. Nếu chỉ đọc hai mặt cùng lúc, bạn đang nhận diện chứ chưa gọi lại được từ khi cần dùng. Cảm giác khó chịu khi quên chính là lúc trí nhớ được củng cố.", tip: "Cho mỗi thẻ ba giây suy nghĩ, không lật ngay." },
            { title: "Đánh dấu để chọn lọc", body: "Sau mỗi lượt, đánh dấu thẻ nhớ tốt và thẻ cần ôn. Buổi sau chỉ cần chạy nhóm cần ôn trước, nhóm còn lại giãn ra. Cách này giữ cho thời gian học tập trung vào phần yếu thay vì dàn đều.", tip: "Nhóm cần ôn không nên vượt quá một phần ba tổng số thẻ." }
          ],
          formula: "Ôn 1 ngày – 3 ngày – 7 ngày, mỗi lần thật ngắn"
        }
      ]
    },
    {
      title: "Nghe hiểu chủ động",
      summary: "Nghe lấy ý trước, bắt tín hiệu chuyển ý và điền từ có transcript để tự sửa.",
      lessons: [
        {
          id: "ng1",
          title: "Nghe ý chính trước chi tiết",
          minutes: 20,
          level: "Cơ bản",
          summary: "Xác định người nói đang làm gì trước khi cố bắt từng từ, vì chi tiết chỉ có nghĩa khi biết khung.",
          points: ["Lượt nghe đầu chỉ trả lời: ai nói, về việc gì, thái độ ra sao.", "Không cần hiểu hết từ mới vẫn nắm được ý chính.", "Nghe lại lần hai mới đi vào số liệu và tên riêng."],
          steps: [
            { title: "Nghe một lượt không dừng", body: "Cho đoạn hội thoại chạy hết một lần dù có chỗ không hiểu, và tự hỏi người nói đang xin gì, từ chối gì hoặc đề nghị gì. Bỏ qua từ lạ giúp bạn không bị mắc kẹt ở câu trước. Đây là kỹ năng cần cho các tình huống thật, khi không ai dừng lại cho bạn.", tip: "Đặt tay lên giấy, chỉ ghi ba từ khóa cho cả đoạn." },
            { title: "Đoán từ trong ngữ cảnh", body: "Nếu nghe câu the deposit is refundable within seven days mà chưa biết refundable, hãy dựa vào deposit và seven days để đoán đây là chuyện hoàn tiền. Đoán rồi kiểm tra lại ở lượt sau hiệu quả hơn tra từng từ ngay. Bạn đang luyện phản xạ, không luyện tra từ điển.", tip: "Đánh dấu chỗ đoán để kiểm tra khi xem transcript." },
            { title: "Nghe lần hai có mục tiêu", body: "Lượt hai chỉ tập trung vào một việc cụ thể, ví dụ bắt đúng con số hoặc giới từ chỉ thời gian. Mỗi lượt một mục tiêu giúp tai chọn lọc tốt hơn là nghe tràn lan. Sau ba lượt, bạn sẽ nắm được cả khung lẫn chi tiết.", tip: "Ghi mục tiêu của lượt nghe ra giấy trước khi bấm phát." }
          ],
          formula: "Lượt 1 lấy khung, lượt 2 lấy chi tiết"
        },
        {
          id: "ng2",
          title: "Bắt tín hiệu chuyển ý",
          minutes: 22,
          level: "Trung bình",
          summary: "Các từ nối như however, actually hay in other words báo trước điều quan trọng đang đến.",
          points: ["Tín hiệu chuyển ý cho biết ý sau quan trọng hơn ý trước.", "However và that said báo hiệu tương phản, dễ bị bỏ qua khi nghe nhanh.", "In other words thường là lúc người nói diễn đạt lại cho dễ hiểu."],
          steps: [
            { title: "Nhận diện nhóm tín hiệu", body: "Nhóm tương phản gồm however, that said, on the other hand; nhóm giải thích gồm in other words, I mean; nhóm kết luận gồm so, therefore. Khi nghe được một tín hiệu, hãy dồn chú ý vào câu ngay sau đó. Câu trước thường chỉ là dẫn nhập.", tip: "Học tín hiệu theo nhóm chức năng, đừng học từng từ." },
            { title: "Nghe trọng âm câu", body: "Người nói thường nhấn mạnh từ mang thông tin mới, thường là danh từ và động từ chính, còn giới từ và mạo từ bị đọc nhẹ. Tập trung vào các từ được nhấn giúp bạn dựng lại nghĩa dù bỏ sót phần phụ. Đây là lý do người nghe tốt hiểu nhanh hơn người nghe từng từ.", tip: "Gõ nhịp tay theo các từ được nhấn khi nghe." },
            { title: "Ghi chú theo ký hiệu", body: "Dùng dấu cộng cho ý đồng tình, dấu trừ cho phản đối, mũi tên cho nguyên nhân và kết quả. Ký hiệu giúp ghi nhanh hơn viết chữ và không làm bạn mất nhịp nghe. Khi nghe lại, các ký hiệu này dựng lại mạch lập luận rất nhanh.", tip: "Chỉ dùng năm ký hiệu, đừng tạo hệ thống quá phức tạp." }
          ],
          formula: "Nghe tín hiệu để biết câu nào đáng ghi"
        },
        {
          id: "ng3",
          title: "Nghe điền từ và đối chiếu transcript",
          minutes: 24,
          level: "Trung bình",
          summary: "Điền từ vào chỗ trống rồi mở transcript để tự phát hiện lỗi nghe và lỗi chính tả.",
          points: ["Chỗ trống nên rơi vào từ mang thông tin, không rơi vào từ chức năng.", "Sai chính tả vẫn tính là chưa nghe đúng từ.", "Transcript dùng để đối chiếu, không dùng để đọc trước."],
          steps: [
            { title: "Nghe trước khi nhìn chữ", body: "Cho đoạn audio chạy hai lượt trước khi mở transcript, kể cả khi chỉ điền được một nửa. Nếu đọc transcript trước, bạn sẽ nghe bằng mắt và không luyện được tai. Mục tiêu là để tai làm việc trước, mắt kiểm tra sau.", tip: "Che transcript bằng tay hoặc thu nhỏ cửa sổ khi nghe." },
            { title: "So sánh từng chỗ trống", body: "Sau khi điền, mở transcript và so từng ô: sai vì không nghe ra, vì nhầm âm cuối, hay vì viết sai chính tả. Ba loại lỗi này cần ba cách sửa khác nhau. Ghi lại loại lỗi giúp bạn biết mình yếu ở đâu thay vì chỉ biết mình sai.", tip: "Đánh dấu lỗi bằng ba màu bút khác nhau." },
            { title: "Nghe lại đúng câu sai", body: "Tua lại riêng câu vừa sai và nghe ba lần, chú ý cách nối âm giữa hai từ. Hiện tượng nối âm và nuốt âm là nguyên nhân phổ biến khiến bạn nghe ra một từ khác. Nghe lại đúng chỗ sai hiệu quả hơn nghe lại cả đoạn.", tip: "Nghe chậm 0,75 lần tốc độ để tách rõ các âm nối." }
          ],
          formula: "Nghe – điền – đối chiếu – nghe lại đúng câu sai"
        }
      ]
    },
    {
      title: "Giao tiếp tình huống",
      summary: "Mở đầu tự nhiên, yêu cầu lịch sự và xử lý khi chưa hiểu mà không mất mặt.",
      lessons: [
        {
          id: "gt1",
          title: "Mở đầu và giữ hội thoại",
          minutes: 18,
          level: "Cơ bản",
          summary: "Câu mở đầu ngắn gọn cộng một câu hỏi tiếp nối giúp cuộc nói chuyện không tắt sau hai lượt.",
          points: ["Mở đầu bằng bối cảnh chung thay vì câu hỏi quá riêng tư.", "Luôn trả lời kèm một câu hỏi lại để trao lượt.", "Câu hỏi đuôi giúp giữ giọng thân thiện."],
          steps: [
            { title: "Chọn chủ đề an toàn", body: "Thời tiết, lớp học, hành trình đến trường là những chủ đề ai cũng trả lời được. Tránh hỏi tuổi, thu nhập hay chuyện gia đình với người mới gặp. Ở văn phòng quốc tế, câu how is your semester going được xem là lịch sự và dễ mở.", tip: "Chuẩn bị sẵn ba câu mở đầu cho ba bối cảnh khác nhau." },
            { title: "Trả lời rồi trao lượt", body: "Thay vì chỉ nói I am fine, hãy nói I am fine, a bit busy with deadlines. How about you. Việc thêm một chi tiết và một câu hỏi lại khiến cuộc nói chuyện có qua có lại. Người nghe cũng có chỗ để tiếp tục.", tip: "Kết mỗi câu trả lời bằng một câu hỏi ngắn." },
            { title: "Dùng câu hỏi đuôi", body: "Câu như Nice weather today, isn't it tạo không khí thân mật mà không cần nội dung sâu. Câu hỏi đuôi cũng là cách mời người khác xác nhận thay vì áp đặt. Chỉ cần giữ đúng chiều: khẳng định thì đuôi phủ định và ngược lại.", tip: "Luyện ba câu hỏi đuôi thông dụng đến mức nói không cần nghĩ." }
          ],
          formula: "Trả lời + chi tiết + câu hỏi lại"
        },
        {
          id: "gt2",
          title: "Yêu cầu lịch sự",
          minutes: 20,
          level: "Trung bình",
          summary: "Mức lịch sự trong tiếng Anh nằm ở cấu trúc câu, không nằm ở từ please.",
          points: ["Could you và would you là hai khung yêu cầu trung tính, an toàn.", "I was wondering if giúp giảm áp lực cho người nghe.", "Thêm please không cứu được một câu mệnh lệnh quá thẳng."],
          steps: [
            { title: "Chọn khung theo mức thân thiết", body: "Với người lạ hoặc cấp trên, dùng Could you possibly send it today; với đồng nghiệp thân, Can you send it today là đủ. Mức lịch sự phụ thuộc khoảng cách giữa hai người chứ không phải càng dài càng tốt. Dùng câu quá khách sáo với bạn thân lại tạo khoảng cách.", tip: "Xác định quan hệ trước khi chọn khung câu." },
            { title: "Dùng thì quá khứ để giảm áp lực", body: "I was wondering if you could help me nghe nhẹ hơn I wonder if you can help me. Thì quá khứ ở đây không nói về thời gian mà tạo khoảng lùi cho lời đề nghị. Đây là điểm ngữ pháp hiếm khi được dạy nhưng xuất hiện rất nhiều trong email công việc.", tip: "Học thuộc một câu mẫu và thay phần nội dung phía sau." },
            { title: "Đưa lý do ngắn", body: "Câu yêu cầu kèm lý do dễ được chấp nhận hơn, ví dụ Could you send the file by Thursday so I can print it before the meeting. Lý do cho thấy yêu cầu không tùy tiện. Tuy nhiên chỉ nên thêm một mệnh đề, vì giải thích dài làm câu nặng nề.", tip: "Một yêu cầu, một lý do, không thêm hai." }
          ],
          formula: "Could you + việc cần làm + lý do ngắn"
        },
        {
          id: "gt3",
          title: "Khi không hiểu thì hỏi lại",
          minutes: 16,
          level: "Cơ bản",
          summary: "Hỏi lại đúng cách giữ được cuộc nói chuyện, còn gật đầu cho qua sẽ tạo hiểu lầm về sau.",
          points: ["Nói rõ phần nào chưa nghe được thay vì nói I don't understand.", "Nhắc lại điều mình vừa hiểu để người nói xác nhận.", "Xin người nói nói chậm hơn là cách hoàn toàn bình thường."],
          steps: [
            { title: "Chỉ đúng chỗ chưa rõ", body: "Câu Sorry, did you say fifteen or fifty giúp người nói sửa đúng một chi tiết. Nói chung chung I don't understand khiến họ phải lặp lại toàn bộ và dễ nản. Càng chỉ đúng chỗ, bạn càng nhận được câu trả lời hữu ích.", tip: "Ghi lại từ hoặc con số chưa chắc rồi hỏi đúng từ đó." },
            { title: "Nhắc lại để xác nhận", body: "Câu So the deadline is Friday, not Thursday, right vừa kiểm tra thông tin vừa cho người nói cơ hội sửa. Cách này hiệu quả trong các cuộc trao đổi có số liệu, ngày giờ hoặc điều kiện. Nó cũng tạo cảm giác bạn đang lắng nghe nghiêm túc.", tip: "Dùng cấu trúc So + điều bạn hiểu + right." },
            { title: "Xin điều chỉnh tốc độ", body: "Could you slow down a little, please là câu hoàn toàn bình thường, không phải dấu hiệu kém cỏi. Người bản ngữ cũng nói câu này khi gặp giọng vùng miền lạ. Điều nên tránh là im lặng rồi gật đầu cho xong.", tip: "Chuẩn bị sẵn hai câu xin nói chậm và xin nhắc lại." }
          ],
          formula: "Chỉ đúng chỗ chưa rõ, đừng nói chung chung"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Collocation", back: "Cụm từ mà người bản ngữ dùng cùng nhau theo thói quen, ví dụ make a decision.", hint: "Động từ đi với danh từ nào.", example: "do research nhưng make progress." },
    { front: "Word stress", back: "Âm tiết được nhấn mạnh trong một từ, quyết định độ rõ khi nghe.", hint: "Không phải âm tiết nào cũng đọc ngang nhau.", example: "phoTOgraphy nhấn âm tiết thứ hai." },
    { front: "Minimal pair", back: "Hai từ chỉ khác nhau một âm, dùng để luyện phân biệt khi nghe.", hint: "Cặp từ gần giống nhau.", example: "ship và sheep, sit và seat." },
    { front: "Connected speech", back: "Hiện tượng nối âm, nuốt âm và biến âm khi nói nhanh.", hint: "Vì sao nghe ra một từ khác.", example: "an apple nghe như a napple." },
    { front: "Gist listening", back: "Nghe lấy ý chính trước khi đi vào chi tiết.", hint: "Lượt nghe đầu chỉ cần khung.", example: "Biết người nói đang từ chối trước khi biết lý do." },
    { front: "Discourse marker", back: "Từ nối báo hiệu quan hệ giữa các ý như tương phản, giải thích, kết luận.", hint: "however, so, in other words.", example: "however báo hiệu ý sau ngược với ý trước." },
    { front: "Shadowing", back: "Kỹ thuật nói đuổi theo audio, gần như đồng thời, để luyện ngữ điệu.", hint: "Nói cùng lúc với người mẫu.", example: "Bật audio và nhắc lại chậm hơn nửa nhịp." },
    { front: "Spaced repetition", back: "Ôn lại theo khoảng cách tăng dần để nhớ lâu với ít lần lặp.", hint: "1 ngày, 3 ngày, 7 ngày.", example: "Ôn lại bộ thẻ vào ngày mai thay vì tối nay lần nữa." },
    { front: "Chunking", back: "Chia câu dài thành cụm nghĩa để dễ nghe và dễ nhớ.", hint: "Nhóm từ theo nghĩa.", example: "at the end of the semester là một cụm, không phải bốn từ rời." },
    { front: "Register", back: "Mức trang trọng của ngôn ngữ phù hợp với người nghe và bối cảnh.", hint: "Nói với giáo sư khác nói với bạn cùng phòng.", example: "I would appreciate it thay cho Give me." },
    { front: "Paraphrase", back: "Diễn đạt lại cùng một ý bằng từ khác, kỹ năng cốt lõi khi nghe hiểu.", hint: "Đổi cách nói, giữ nguyên ý.", example: "The deadline is Friday thành It has to be done by Friday." },
    { front: "IPA", back: "Bảng ký hiệu ngữ âm quốc tế, giúp tra cách phát âm chính xác.", hint: "Ký hiệu nằm trong dấu gạch chéo.", example: "/ˈɪnvɔɪs/ là phiên âm của invoice." }
  ],
  quiz: [
    { q: "Câu nào là cách yêu cầu lịch sự nhất khi nói với giảng viên?", options: ["Give me the form.", "I want the form.", "Could you pass me the form, please?", "Form!"], answer: 2, explain: "Could you cộng please tạo khung yêu cầu trung tính, phù hợp với người có vị thế cao hơn." },
    { q: "Động từ nào đi cùng được với cụm a mistake?", options: ["make", "do", "take", "have"], answer: 0, explain: "Ta nói make a mistake; do thường đi với homework và research." },
    { q: "Chọn dạng đúng: She ___ in Hanoi since 2019.", options: ["lives", "is living", "has lived", "lived"], answer: 2, explain: "Since 2019 chỉ mốc bắt đầu, cần hiện tại hoàn thành để nói hành động kéo dài đến hiện tại." },
    { q: "Trọng âm của photography rơi vào âm tiết thứ mấy?", options: ["Thứ nhất", "Thứ hai", "Thứ ba", "Thứ tư"], answer: 1, explain: "Pho-TOG-ra-phy: trọng âm ở âm tiết thứ hai, khác với photograph." },
    { q: "Âm cuối của books được phát âm là:", options: ["/z/", "/ɪz/", "bị nuốt mất", "/s/"], answer: 3, explain: "Sau phụ âm vô thanh /k/, đuôi -s đọc là /s/, không phải /z/." },
    { q: "Câu nào dùng để hỏi lại khi chưa nghe rõ một con số?", options: ["What?", "Sorry, did you say fifteen or fifty?", "Repeat.", "Say again."], answer: 1, explain: "Nêu đúng hai khả năng đang phân vân giúp người nói sửa chính xác, và giữ được giọng lịch sự." },
    { q: "Chọn từ đúng: I was wondering if you ___ help me with the enrolment.", options: ["could", "can", "will", "must"], answer: 0, explain: "Sau I was wondering if, dùng could để tạo khoảng lùi lịch sự cho lời đề nghị." },
    { q: "Tín hiệu however báo hiệu điều gì ở câu sau?", options: ["Một ví dụ", "Một ý bổ sung", "Một kết luận", "Một ý tương phản"], answer: 3, explain: "However đánh dấu sự đối lập, nên câu sau thường chứa thông tin ngược với kỳ vọng." },
    { q: "Cách ôn từ hiệu quả nhất theo nghiên cứu trí nhớ là:", options: ["Đọc lại mười lần trong một buổi", "Chép chính tả toàn bộ danh sách", "Tự kiểm tra theo khoảng cách", "Nghe nhạc khi học"], answer: 2, explain: "Tự gọi lại thông tin ở các mốc cách quãng tạo trí nhớ bền hơn đọc lại nhiều lần liền mạch." },
    { q: "Cụm book a flight có nghĩa là:", options: ["Hủy chuyến bay", "Lỡ chuyến bay", "Lên máy bay", "Đặt vé máy bay"], answer: 3, explain: "Book nghĩa là đặt trước; book a flight là đặt vé, khác với miss a flight là lỡ chuyến." }
  ],
  lab: {
    kind: "dialogue",
    title: "Đăng ký khóa học tại văn phòng trao đổi sinh viên",
    lead: "Bạn đến văn phòng để đăng ký khóa tiếng Anh buổi tối. Mỗi lượt có ba cách đáp; chọn cách phù hợp ngữ cảnh để đi tiếp, chọn sai vẫn đọc được giải thích.",
    stageLabel: "Hội thoại tương tác",
    controlNote: "Đọc câu của nhân viên rồi chọn cách đáp. Phản hồi nêu rõ vì sao cách còn lại chưa ổn về ngữ dụng.",
    note: "Hội thoại mô phỏng bối cảnh hành chính thật, nơi mức lịch sự và độ rõ thông tin quan trọng hơn ngữ pháp phức tạp.",
    steps: [
      {
        speaker: "Nhân viên văn phòng",
        line: "Good morning. How can I help you today?",
        options: [
          { text: "Good morning. I would like to enrol in the B2 evening course, please.", correct: true, feedback: "Đúng. I would like to cộng tên khóa học nêu rõ mục đích ngay lượt đầu, đúng chuẩn giao tiếp tại quầy dịch vụ." },
          { text: "I want to study English here.", correct: false, feedback: "Chưa ổn. Câu đúng ngữ pháp nhưng quá chung, nhân viên vẫn phải hỏi lại bạn muốn khóa nào, ca nào, trình độ nào." },
          { text: "Hello. English course?", correct: false, feedback: "Chưa ổn. Câu rút gọn chỉ còn danh từ khiến người nghe phải đoán ý, dễ bị hiểu là đang hỏi thông tin chứ không phải đăng ký." }
        ]
      },
      {
        speaker: "Nhân viên văn phòng",
        line: "Certainly. Have you taken a placement test before?",
        options: [
          { text: "Yes, I took one last term, but I would rather retake it to be sure.", correct: true, feedback: "Đúng. Trả lời trực tiếp, thêm lý do và dùng would rather để thể hiện mong muốn mà không áp đặt." },
          { text: "No, and I do not need one.", correct: false, feedback: "Chưa ổn. Từ chối thẳng một bước bắt buộc của quy trình, người nghe khó tiếp tục hỗ trợ bạn." },
          { text: "Yes, I did it.", correct: false, feedback: "Chưa ổn. Câu đúng thì nhưng thiếu thông tin thời điểm, nên nhân viên không biết kết quả còn hiệu lực hay không." }
        ]
      },
      {
        speaker: "Nhân viên văn phòng",
        line: "The test takes about forty minutes. Would Thursday at nine suit you?",
        options: [
          { text: "Thursday morning works for me. Thank you.", correct: true, feedback: "Đúng. Works for me là cách xác nhận lịch tự nhiên, kèm lời cảm ơn đúng mực." },
          { text: "I am free.", correct: false, feedback: "Chưa ổn. Bạn chưa xác nhận đúng khung giờ được đề nghị, nên nhân viên vẫn phải hỏi lại." },
          { text: "Any time is fine, whatever.", correct: false, feedback: "Chưa ổn. Whatever nghe thiếu hợp tác, dễ tạo ấn tượng bạn không quan tâm buổi hẹn." }
        ]
      },
      {
        speaker: "Nhân viên văn phòng",
        line: "Great. Please bring your student card and fill in this form.",
        options: [
          { text: "Sure. Should I write my full name in block capitals?", correct: true, feedback: "Đúng. Câu hỏi làm rõ một chi tiết cụ thể của biểu mẫu, đúng cách hỏi khi nhận giấy tờ hành chính." },
          { text: "What form? I do not understand anything.", correct: false, feedback: "Chưa ổn. Phản ứng chung chung khiến người nghe phải giải thích lại từ đầu, dù chỉ một ô gây khó hiểu." },
          { text: "I will bring card.", correct: false, feedback: "Chưa ổn. Thiếu mạo từ trước danh từ đếm được số ít, câu nghe như văn điện tín." }
        ]
      },
      {
        speaker: "Nhân viên văn phòng",
        line: "Yes, please, and sign at the bottom. See you on Thursday.",
        options: [
          { text: "Thank you for your help. See you on Thursday.", correct: true, feedback: "Đúng. Nhắc lại mốc hẹn để xác nhận thông tin và kết thúc bằng lời cảm ơn, đúng nhịp một cuộc giao dịch hành chính." },
          { text: "OK bye.", correct: false, feedback: "Chưa ổn. Quá suồng sã và không xác nhận lại buổi hẹn, dễ khiến hai bên hiểu khác nhau về thời gian." },
          { text: "I hope the test is easy.", correct: false, feedback: "Chưa ổn. Câu này mở một chủ đề mới đúng lúc cuộc trao đổi đã kết thúc, làm loãng mục đích ban đầu." }
        ]
      }
    ]
  },
  teacher: {
    students: [
      { name: "Lê Minh Anh", progress: 84, score: 8.6, status: "Tốt", note: "Phản xạ hội thoại tốt, cần siết âm cuối." },
      { name: "Trần Bảo Châu", progress: 61, score: 7.4, status: "Đang học", note: "Hay nhầm cặp âm /ɪ/ và /iː/ khi nghe." },
      { name: "Phạm Gia Hân", progress: 92, score: 9.1, status: "Tốt", note: "Có thể nhận bài luyện nâng cao về diễn đạt lại." },
      { name: "Đỗ Quốc Trung", progress: 28, score: 5.8, status: "Cần hỗ trợ", note: "Chưa hoàn thành chương từ vựng nền tảng." },
      { name: "Vũ Thanh Tùng", progress: 73, score: 7.9, status: "Đang học", note: "Nghe ý chính tốt, chi tiết số liệu còn sai." },
      { name: "Hoàng Mai Linh", progress: 47, score: 6.5, status: "Đang học", note: "Nên luyện thêm câu yêu cầu lịch sự." }
    ],
    submissions: [
      { student: "Lê Minh Anh", lesson: "Ghi âm hội thoại đăng ký khóa học", time: "Hôm qua 21:20", status: "Chờ chấm" },
      { student: "Đỗ Quốc Trung", lesson: "Phiếu nghe điền từ bài 3", time: "Hôm qua 18:50", status: "Chờ chấm" },
      { student: "Phạm Gia Hân", lesson: "Bài viết 150 từ về thói quen học từ", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm tuần này luyện hội thoại theo cặp, mang tai nghe cá nhân.",
      "Bài kiểm tra giữa kỳ gồm phần nghe 40 phần trăm và trắc nghiệm 60 phần trăm.",
      "Sinh viên có điểm quiz dưới 5 cần đăng ký buổi trợ giảng trước thứ Bảy."
    ]
  },
  className: "Tiếng Anh B2 – K24",
  brief: "BTL-07_linguaflow-mon-ngoai-ngu.md"
};
