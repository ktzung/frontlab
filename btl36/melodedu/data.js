window.BTL_DATA = {
  id: "melodedu",
  code: "BTL-33",
  name: "MelodEdu",
  monogram: "Do",
  subject: "Âm nhạc",
  level: "Đại học",
  group: "Nghệ thuật & Thể chất",
  accent: "#7c3aed",
  accent2: "#db2777",
  font: "serif",
  tagline: "Nhấn một phím, nghe một cao độ, và thấy tên nốt hiện ra ngay trên khuông nhạc.",
  intro: "MelodEdu đưa nhạc lý ra khỏi trang giấy bằng bàn phím nốt nhạc phát âm thanh thật và các bài luyện tai nghe có phản hồi tức thì. Mỗi chương gắn với một kỹ năng cụ thể: đọc nốt, giữ nhịp, nhận quãng và nghe được cấu trúc hòa âm của một ca khúc.",
  hero: { title: "Âm nhạc", highlight: "nghe được điều mình đang học" },
  heroBadge: "Phím đàn tương tác · Luyện tai nghe",
  labShort: "PIANO",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Phím đàn mẫu" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho môn Âm nhạc: nghe cao độ, đọc tiết tấu và phân tích hòa âm bằng tai.",
  pathLead: "Bắt đầu từ khuông nhạc và trường độ, sang quãng cùng xướng âm, rồi kết thúc bằng hợp âm và cách nghe cấu trúc ca khúc. Mỗi bước đều có âm thanh để đối chiếu.",
  features: [
    { badge: "01", title: "Phím đàn phát cao độ", desc: "Mười ba phím từ Đô4 đến Đô5 phát âm bằng Web Audio, kèm tên nốt hiện ngay khi bấm để gắn âm thanh với ký hiệu." },
    { badge: "02", title: "Luyện tai nghe có phản hồi", desc: "Nghe một chuỗi nốt rồi chọn quãng hoặc tên nốt; hệ thống chấm ngay và giải thích vì sao đúng hay sai." },
    { badge: "03", title: "Thẻ nhạc lý & nhịp gõ", desc: "Mười hai thẻ ghi nhớ nốt, quãng, dấu hóa, kèm máy gõ nhịp 80 phách mỗi phút để cảm nhận phách đều." }
  ],
  life: [
    {
      title: "Cây đàn organ cũ ở nhà",
      scene: "Trong nhà có cây đàn organ cũ, bấm thử hai phím trắng liền nhau. Có cặp nghe cách nhau rõ như đô với rê, có cặp mi với fa lại nghe sát nhau, gần như cùng một độ cao.",
      connect: "Khoảng cách đó là cung và nửa cung: mi đến fa và si đến đô chỉ nửa cung, nên không có phím đen chen giữa. Chỉ cần dịch nửa cung là giọng hát đã khác màu."
    },
    {
      title: "Hát Quốc ca buổi chào cờ",
      scene: "Sáng thứ hai cả trường hát Quốc ca, có lớp lên giọng quá cao nên tới giữa bài phải hét, cuối bài lạc hẳn so với loa. Hôm sau thầy cho cả lớp nghe một nốt chuẩn rồi mới hát.",
      connect: "Đó là bài xướng âm: lấy cao độ chuẩn trước rồi đi từng bậc đúng quãng. Quãng ba trưởng và quãng năm đúng có số nửa cung cố định, hát sai một bậc là cả bài trôi theo."
    },
    {
      title: "Ba phím đàn và bài hát thiếu nhi",
      scene: "Ngồi nghịch đàn, bấm ba phím đô mi sol cùng lúc nghe vui và chắc; đổi sang la đô mi thì cùng một bài hát bỗng nghe buồn. Đưa bài hát trong sách Âm nhạc cho đứa em hát, thấy cứ quay lại mấy nhóm ba phím đó.",
      connect: "Ba phím bấm cùng lúc là hợp âm ba, còn việc cứ quay lại vài hợp âm là vòng I – IV – V. Đổi nhóm trưởng sang nhóm thứ là đổi từ giọng vui sang giọng buồn."
    }
  ],
  modules: [
    {
      title: "Nhạc lý nền tảng",
      summary: "Đọc khuông nhạc, đếm trường độ và hiểu vì sao chỉ cần nửa cung đã đổi màu sắc âm nhạc.",
      lessons: [
        {
          id: "nl1",
          title: "Khuông nhạc, khóa Sol và tên nốt",
          minutes: 18,
          level: "Cơ bản",
          summary: "Định vị bảy tên nốt trên khuông khóa Sol và nối mỗi vị trí với một tần số cụ thể.",
          points: [
            "Khuông nhạc có năm dòng và bốn khe, đọc từ dưới lên.",
            "Khóa Sol quấn quanh dòng thứ hai, cố định dòng đó là nốt Sol.",
            "Mỗi bước lên một dòng hoặc một khe là một bậc trong thang bảy nốt."
          ],
          steps: [
            {
              title: "Đọc từ dòng thứ hai",
              body: "Khóa Sol có vòng xoắn ôm dòng thứ hai từ dưới lên, nên dòng đó là nốt Sol4. Đi xuống khe dưới được Fa4, xuống dòng dưới được Mi4, và tiếp tục tới Đô4 nằm ở dòng phụ thứ nhất phía dưới khuông. Thứ tự đi lên là Sol, La, Si, Đô5, Rê5, Mi5, Fa5.",
              tip: "Học thuộc dòng thứ hai trước, mọi nốt khác suy ra bằng cách đếm bậc."
            },
            {
              title: "Nối vị trí với tần số",
              body: "Nốt La4 có tần số chuẩn 440 Hz, Đô4 khoảng 261,63 Hz và Đô5 đúng bằng một nửa quãng tám, tức 523,25 Hz. Khi bấm phím C4 trên phòng lab rồi C5, tai nghe thấy cùng một tên nốt nhưng cao gấp đôi. Đây là cách kiểm tra tai nghe mà không cần nhạc cụ thật.",
              tip: "Quãng tám luôn có tỉ lệ tần số 2 : 1, đó là mốc chuẩn để kiểm tra."
            },
            {
              title: "Nhận diện nhanh trên khuông",
              body: "Thay vì đếm từng bậc, học ba mốc: dòng 2 là Sol, khe 4 là Mi, dòng 5 là Fa. Ba mốc này chia khuông thành các vùng nhỏ, đọc nốt nhanh hơn nhiều. Khi gặp nốt ngoài khuông, đếm từ mốc gần nhất và nhớ dòng phụ chỉ dùng cho Đô4 và La5.",
              tip: "Luyện đọc ba mốc trong 2 phút mỗi ngày, sau một tuần sẽ không cần đếm."
            }
          ],
          formula: "f(quãng tám trên) = 2 × f(quãng tám dưới)"
        },
        {
          id: "nl2",
          title: "Trường độ, nhịp và phách",
          minutes: 20,
          level: "Cơ bản",
          summary: "Đếm phách trong nhịp 4/4 và 3/4, quy đổi nốt tròn, trắng, đen, móc đơn theo số phách.",
          points: [
            "Số chỉ nhịp cho biết số phách mỗi ô nhịp và giá trị mỗi phách.",
            "Trong nhịp 4/4, nốt đen bằng một phách, nốt trắng bằng hai phách.",
            "Phách mạnh tạo cảm giác nhịp, phách nhẹ làm nền chuyển động."
          ],
          steps: [
            {
              title: "Đọc số chỉ nhịp",
              body: "Nhịp 4/4 nghĩa là mỗi ô nhịp có bốn phách, mỗi phách tính bằng một nốt đen. Nhịp 3/4 có ba phách, thường dùng cho điệu valse với phách một mạnh rõ. Nhịp 2/4 có hai phách, hay gặp ở bài hát thiếu nhi và hành khúc.",
              tip: "Số trên là số phách, số dưới là giá trị nốt làm một phách."
            },
            {
              title: "Quy đổi trường độ",
              body: "Trong một ô nhịp 4/4 có thể đặt một nốt tròn, hai nốt trắng, bốn nốt đen hoặc tám nốt móc đơn. Một nốt đen bằng hai nốt móc đơn, một nốt trắng bằng hai nốt đen. Khi viết tiết tấu, tổng trường độ trong ô phải đúng bốn phách, thiếu hay thừa đều làm câu nhạc lệch.",
              tip: "Cộng trường độ từng nốt trong ô nhịp trước khi hát để tránh hát thiếu phách."
            },
            {
              title: "Gõ nhịp và cảm nhận phách",
              body: "Ở tốc độ 80 phách mỗi phút, mỗi phách kéo dài 0,75 giây. Gõ chân đều theo máy đếm nhịp rồi mới hát, không hát trước rồi mới gõ. Với nhịp 4/4, đếm 1 và 2 và 3 và 4 và để chia móc đơn, âm và rơi đúng vào nửa phách.",
              tip: "Đếm thành tiếng hai ô nhịp đầu, sau đó đếm thầm để giữ nhịp ổn định."
            }
          ],
          formula: "Thời lượng một phách = 60 / số phách mỗi phút"
        },
        {
          id: "nl3",
          title: "Dấu hóa, cung và nửa cung",
          minutes: 22,
          level: "Trung bình",
          summary: "Dùng dấu thăng, dấu giáng và hai vị trí nửa cung tự nhiên để giải thích màu sắc giọng Đô trưởng.",
          points: [
            "Dấu thăng nâng nốt lên một nửa cung, dấu giáng hạ xuống một nửa cung.",
            "Một cung bằng hai nửa cung.",
            "Trong thang Đô trưởng, nửa cung nằm giữa Mi – Fa và Si – Đô."
          ],
          steps: [
            {
              title: "Đếm nửa cung",
              body: "Từ Đô lên Rê là một cung, tức hai nửa cung, vì có nốt Đô thăng ở giữa. Từ Mi lên Fa chỉ là một nửa cung vì không có nốt chen giữa trên phím đàn. Chính hai vị trí nửa cung tự nhiên này tạo nên âm hưởng quen thuộc của giọng Đô trưởng.",
              tip: "Nhìn bàn phím thấy hai phím trắng sát nhau là một nửa cung."
            },
            {
              title: "Dùng dấu hóa",
              body: "Dấu thăng đặt trước nốt Fa nâng Fa thành Fa thăng, cao hơn nửa cung, ký hiệu F#4 với tần số khoảng 369,99 Hz. Dấu hóa có hiệu lực trong cả ô nhịp, trừ khi bị dấu hoàn đổi lại. Dấu hóa đầu khuông áp dụng cho toàn bài, ví dụ Sol trưởng có Fa thăng ở mọi quãng tám.",
              tip: "Ghi dấu hóa đầu khuông theo đúng thứ tự Fa, Đô, Sol, Rê để không bỏ sót."
            },
            {
              title: "Nghe sự khác biệt",
              body: "Bấm Fa rồi Fa thăng trên phòng lab, sau đó bấm Mi rồi Fa. Hai cặp đều cách nửa cung, nhưng cặp thứ nhất nghe căng hơn vì nó không thuộc thang Đô trưởng. Tai người nhận ra sự lệch này rất nhanh, đó là lý do dấu hóa quan trọng khi hát bè.",
              tip: "Nghe lại ba lần mỗi cặp, ghi cảm nhận bằng một từ trước khi phân tích."
            }
          ],
          formula: "1 cung = 2 nửa cung; thang trưởng: 2–2–1–2–2–2–1"
        }
      ]
    },
    {
      title: "Quãng và xướng âm",
      summary: "Đo quãng bằng số nửa cung, xướng âm đúng bậc và giữ tiết tấu khi đọc một câu nhạc.",
      lessons: [
        {
          id: "qg1",
          title: "Nhận diện quãng",
          minutes: 20,
          level: "Cơ bản",
          summary: "Phân biệt quãng ba trưởng, ba thứ, năm đúng và quãng tám qua số nửa cung và cảm giác nghe.",
          points: [
            "Quãng tính theo số bậc giữa hai nốt, chất lượng quãng tính theo số nửa cung.",
            "Quãng ba trưởng có bốn nửa cung, quãng ba thứ có ba nửa cung.",
            "Quãng năm đúng có bảy nửa cung và nghe rất ổn định."
          ],
          steps: [
            {
              title: "Đếm bậc rồi đếm nửa cung",
              body: "Từ Đô lên Mi là quãng ba vì đếm đủ ba bậc Đô, Rê, Mi. Số nửa cung là bốn nên đây là quãng ba trưởng. Nếu hạ Mi xuống Mi giáng, còn ba nửa cung, thành quãng ba thứ. Tên quãng gồm số bậc và chất lượng, thiếu một phần là mô tả chưa đủ.",
              tip: "Đếm bậc bằng ngón tay trên phím đàn, đừng đếm số phím đen."
            },
            {
              title: "Nghe quãng thuận và nghịch",
              body: "Quãng ba, năm, sáu và tám thường được xem là quãng thuận, nghe êm và dùng nhiều trong hòa âm. Quãng hai và bảy là quãng nghịch, tạo sức căng cần giải quyết. Khi nghe một hợp âm, cảm giác căng thường đến từ quãng bảy hoặc quãng hai ở bè trên.",
              tip: "Ghi nhãn êm hoặc căng cho mỗi quãng nghe được, sau đó mới đối chiếu số nửa cung."
            },
            {
              title: "Tính quãng bằng tần số",
              body: "Quãng tám có tỉ lệ tần số 2 : 1, từ La4 440 Hz lên La5 là 880 Hz. Quãng năm đúng gần tỉ lệ 3 : 2, từ Đô4 261,63 Hz lên Sol4 khoảng 392 Hz. Tỉ lệ này giải thích vì sao quãng năm nghe ổn định và được dùng làm nền cho nhiều nhạc cụ dây.",
              tip: "Dùng 392 chia 261,63 để kiểm tra tỉ lệ gần 1,5."
            }
          ],
          formula: "Quãng 3 trưởng = 4 nửa cung; quãng 5 đúng = 7 nửa cung; quãng 8 = 12"
        },
        {
          id: "qg2",
          title: "Xướng âm theo bậc",
          minutes: 22,
          level: "Trung bình",
          summary: "Lấy cao độ chuẩn từ La4 rồi xướng âm năm bậc đầu của thang Đô trưởng đúng cao độ.",
          points: [
            "Xướng âm là hát tên nốt đúng cao độ và đúng trường độ.",
            "Cần một cao độ chuẩn trước khi hát để không bị trôi giọng.",
            "Hát liền bậc giúp kiểm soát cao độ tốt hơn nhảy quãng xa."
          ],
          steps: [
            {
              title: "Lấy cao độ chuẩn",
              body: "Nghe nốt La4 440 Hz hai lần, sau đó hát lại và so bằng cách bấm phím A4 trên phòng lab. Nếu giọng thấp hơn, hát nhích lên cho tới khi hòa đúng. Mỗi lần luyện nên lấy lại chuẩn, vì giọng dễ trôi nửa cung sau vài phút hát liên tục.",
              tip: "Hát La rồi hát Đô4 phía dưới, kiểm tra bằng hai phím A4 và C4."
            },
            {
              title: "Hát năm bậc liền",
              body: "Xướng âm Đô, Rê, Mi, Fa, Sol rồi quay lại Fa, Mi, Rê, Đô theo nhịp 4/4, mỗi nốt một phách. Chú ý nửa cung giữa Mi và Fa, đây là chỗ dễ hát cao quá. Hát chậm 60 phách mỗi phút trước, khi đã đúng mới tăng lên 80.",
              tip: "Thu âm một lần rồi nghe lại, tai sẽ phát hiện lỗi nhanh hơn khi đang hát."
            },
            {
              title: "Chuyển sang giọng khác",
              body: "Khi đã đúng ở Đô trưởng, dịch cả chuỗi lên Fa trưởng, bắt đầu từ Fa4 và nhớ Fa trưởng có Si giáng. Việc dịch giọng kiểm tra xem người hát đang nhớ vị trí nửa cung hay chỉ nhớ cảm giác. Đây cũng là cách luyện để hát bài hát ở giọng phù hợp với giọng thật.",
              tip: "Dịch lên quãng bốn trước, sau đó mới dịch lên quãng năm."
            }
          ],
          formula: "Thang trưởng: 1 – 1 – ½ – 1 – 1 – 1 – ½ cung"
        },
        {
          id: "qg3",
          title: "Đọc nhạc có tiết tấu",
          minutes: 22,
          level: "Trung bình",
          summary: "Đọc một câu nhạc tám ô nhịp, giữ đều phách và ngắt câu đúng dấu lặng.",
          points: [
            "Đọc tiết tấu riêng trước khi ghép cao độ.",
            "Dấu lặng vẫn chiếm phách, phải đếm đủ chứ không bỏ qua.",
            "Ngắt câu theo dấu lặng giúp câu nhạc có hơi thở."
          ],
          steps: [
            {
              title: "Gõ tiết tấu trước",
              body: "Câu nhạc tám ô nhịp 4/4 có mô hình đen – đen – trắng ở hai ô đầu. Gõ lên mặt bàn theo mô hình này trong khi đếm 1 và 2 và 3 và 4 và. Khi tay đã đều, mới thêm cao độ vào, vì lúc đó não chỉ phải xử lý một việc mới.",
              tip: "Sai tiết tấu thường do bắt đầu hát quá nhanh, hãy giảm tốc độ xuống 60."
            },
            {
              title: "Đếm dấu lặng",
              body: "Ô nhịp thứ tư có dấu lặng đen ở phách ba, nghĩa là vẫn đếm ba nhưng không hát. Nhiều người hát lướt qua dấu lặng làm câu nhạc bị dồn và lệch một phách về cuối. Đếm thành tiếng cả phách lặng trong ba lần đầu là cách sửa nhanh nhất.",
              tip: "Đặt tay lên ngực khi gặp dấu lặng để nhớ vẫn đang giữ nhịp."
            },
            {
              title: "Ghép cao độ và ngắt câu",
              body: "Sau khi tiết tấu ổn, ghép cao độ theo từng ô, dừng ở cuối mỗi hai ô để kiểm tra. Câu nhạc kết ở nốt Đô dài bốn phách, ngân đủ và giảm dần chứ không cắt ngang. Ngắt câu đúng chỗ làm câu nhạc rõ nghĩa, giống dấu phẩy trong câu văn.",
              tip: "Hát cả câu một lần sau khi ghép xong từng ô, không ghép mãi từng nốt."
            }
          ],
          formula: "Tổng trường độ mỗi ô nhịp 4/4 = 4 phách"
        }
      ]
    },
    {
      title: "Hòa âm và cảm thụ",
      summary: "Nghe cấu trúc hợp âm, phân biệt giọng trưởng giọng thứ và phân tích một ca khúc thiếu nhi.",
      lessons: [
        {
          id: "ha1",
          title: "Hợp âm ba và vòng I – IV – V",
          minutes: 22,
          level: "Trung bình",
          summary: "Dựng hợp âm ba trưởng, ba thứ và nghe vòng hòa âm I – IV – V – I trong giọng Đô trưởng.",
          points: [
            "Hợp âm ba gồm ba nốt cách nhau theo quãng ba.",
            "Hợp âm trưởng có quãng ba trưởng ở dưới, hợp âm thứ có quãng ba thứ ở dưới.",
            "Vòng I – IV – V – I là khung hòa âm phổ biến của ca khúc thiếu nhi."
          ],
          steps: [
            {
              title: "Dựng ba hợp âm chính",
              body: "Trong Đô trưởng, hợp âm bậc I là Đô – Mi – Sol, bậc IV là Fa – La – Đô, bậc V là Sol – Si – Rê. Ba hợp âm này chứa đủ bảy nốt của thang nên hát được gần như mọi giai điệu đơn giản. Bấm lần lượt ba nốt của mỗi hợp âm trên phím đàn để nghe màu sắc.",
              tip: "Bấm từ dưới lên, giữ ba phím cùng lúc để nghe được hòa âm."
            },
            {
              title: "Phân biệt trưởng và thứ",
              body: "Đô trưởng gồm Đô – Mi – Sol với quãng ba trưởng bốn nửa cung ở dưới, nghe sáng. La thứ gồm La – Đô – Mi với quãng ba thứ ba nửa cung ở dưới, nghe tối hơn. Chỉ khác một nửa cung ở nốt giữa nhưng cảm xúc đổi rõ, đó là điều đáng nhớ nhất của bài này.",
              tip: "Nghe Đô trưởng rồi La thứ liên tiếp, ghi lại một từ cảm nhận cho mỗi hợp âm."
            },
            {
              title: "Nghe vòng hòa âm",
              body: "Vòng Đô – Fa – Sol – Đô tạo cảm giác mở ra rồi khép lại, hợp âm bậc V tạo sức căng trước khi về bậc I. Trong một ca khúc 32 ô nhịp, vòng này thường lặp bốn lần, mỗi câu tám ô. Nghe được chỗ đổi hợp âm là bước đầu để tự đệm đàn theo bài hát.",
              tip: "Đếm ô nhịp khi nghe để dự đoán chỗ hợp âm đổi, thường rơi vào đầu câu."
            }
          ],
          formula: "I – IV – V – I trong Đô trưởng: C – F – G – C"
        },
        {
          id: "ha2",
          title: "Giọng trưởng và giọng thứ",
          minutes: 24,
          level: "Nâng cao",
          summary: "Đọc dấu hóa đầu khuông để xác định giọng và phân biệt giọng song song cùng dấu hóa.",
          points: [
            "Dấu hóa đầu khuông cho biết bộ nốt của bài, từ đó suy ra giọng.",
            "Giọng song song là cặp trưởng và thứ dùng chung dấu hóa.",
            "Nốt kết và hợp âm kết giúp phân biệt hai giọng cùng dấu hóa."
          ],
          steps: [
            {
              title: "Đọc dấu hóa",
              body: "Bài không có dấu hóa có thể là Đô trưởng hoặc La thứ. Bài có một dấu thăng Fa là Sol trưởng hoặc Mi thứ. Quy tắc nhanh với dấu thăng: giọng trưởng nằm trên dấu thăng cuối nửa cung, với dấu giáng thì giọng trưởng là dấu giáng áp chót.",
              tip: "Học thuộc vòng dấu hóa Fa, Đô, Sol, Rê, La, Mi, Si."
            },
            {
              title: "Tìm giọng song song",
              body: "Đô trưởng và La thứ cùng không dấu hóa, cách nhau quãng ba thứ xuống, tức ba nửa cung. Sol trưởng và Mi thứ cũng là một cặp song song. Hai bài cùng dấu hóa chỉ khác nhau ở nốt kết và hợp âm chủ, nên phải xem ô nhịp cuối mới kết luận.",
              tip: "Từ giọng trưởng hạ xuống ba nửa cung để tìm giọng thứ song song."
            },
            {
              title: "Kiểm tra bằng nốt kết",
              body: "Một bài kết ở nốt La với hợp âm La – Đô – Mi là La thứ, dù không có dấu hóa nào. Nếu cùng bộ nốt đó mà kết ở Đô với hợp âm Đô – Mi – Sol thì là Đô trưởng. Ngoài ra giọng thứ hòa thanh nâng bậc bảy, nên xuất hiện Sol thăng trong bài La thứ, đây là dấu hiệu nhận biết rõ.",
              tip: "Xem hai ô nhịp cuối và nốt cuối cùng, đừng chỉ xem dấu hóa đầu khuông."
            }
          ],
          formula: "Giọng thứ song song = giọng trưởng hạ quãng ba thứ"
        },
        {
          id: "ha3",
          title: "Phân tích một ca khúc thiếu nhi",
          minutes: 24,
          level: "Nâng cao",
          summary: "Bóc một ca khúc 32 ô nhịp thành bốn câu, xác định vòng hòa âm, chỗ cao trào và cách kết.",
          points: [
            "Chia bài theo câu nhạc để thấy cấu trúc, thường bốn câu tám ô nhịp.",
            "Cao trào thường ở câu ba, nơi giai điệu lên cao nhất.",
            "Câu kết quay về bậc I tạo cảm giác trọn vẹn."
          ],
          steps: [
            {
              title: "Chia câu và đếm ô nhịp",
              body: "Một ca khúc thiếu nhi nhịp 4/4 dài 32 ô thường chia thành bốn câu, mỗi câu tám ô, hát hai câu đầu rồi lặp. Đếm ô nhịp theo từng câu giúp phát hiện chỗ nào bài mở rộng thêm bốn ô. Cấu trúc này là nền để so sánh nhiều bài hát khác nhau.",
              tip: "Đánh số ô nhịp 1 đến 32 lên bản nhạc trước khi phân tích."
            },
            {
              title: "Xác định hòa âm và cao trào",
              body: "Câu một và hai thường chỉ dùng hai hợp âm I và V, câu ba thêm IV và đưa giai điệu lên nốt cao nhất, ví dụ lên Mi5 ở ô 25. Chỗ cao nhất này là cao trào, sau đó giai điệu đi xuống dần về nốt Đô ở ô cuối. Nhận ra cao trào giúp hát đúng chỗ nhấn, không hát đều cả bài.",
              tip: "Tìm nốt cao nhất trước, rồi xem hợp âm dưới nốt đó để xác nhận cao trào."
            },
            {
              title: "Viết nhận xét cảm thụ",
              body: "Một nhận xét tốt nêu ba ý: bài ở giọng gì, vòng hòa âm chính là gì và cao trào nằm ở đâu. Ví dụ: bài ở Đô trưởng, dùng vòng C – F – G – C, cao trào ở ô 25 với nốt Mi5. Viết kèm dẫn chứng ô nhịp giúp nhận xét kiểm chứng được thay vì chỉ nói bài hay.",
              tip: "Mỗi nhận xét phải kèm số ô nhịp hoặc tên nốt làm bằng chứng."
            }
          ],
          formula: "Cấu trúc 4 câu × 8 ô nhịp, hòa âm I – IV – V – I"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Khuông nhạc", back: "Năm dòng kẻ song song và bốn khe, dùng để ghi cao độ nốt từ thấp lên cao.", hint: "Năm dòng, bốn khe.", example: "Nốt Đô4 nằm ở dòng phụ thứ nhất dưới khuông." },
    { front: "Khóa Sol", back: "Ký hiệu đặt ở đầu khuông, cố định dòng thứ hai từ dưới lên là nốt Sol4.", hint: "Vòng xoắn ôm dòng hai.", example: "Dòng hai là Sol, khe bốn là Mi, dòng năm là Fa." },
    { front: "Nốt tròn", back: "Nốt có trường độ dài nhất trong ký hiệu cơ bản, bằng bốn phách trong nhịp 4/4.", hint: "Một nốt tròn bằng bốn nốt đen.", example: "Một ô nhịp 4/4 có thể chứa đúng một nốt tròn." },
    { front: "Dấu lặng đen", back: "Ký hiệu im lặng kéo dài một phách, vẫn phải đếm đủ trong ô nhịp.", hint: "Im lặng nhưng vẫn giữ nhịp.", example: "Phách ba có dấu lặng đen thì đếm ba nhưng không hát." },
    { front: "Nhịp 4/4", back: "Mỗi ô nhịp có bốn phách, mỗi phách bằng một nốt đen; phách 1 mạnh, phách 3 mạnh vừa.", hint: "Bốn phách, đen bằng một phách.", example: "Hành khúc và nhiều ca khúc thiếu nhi dùng nhịp 4/4." },
    { front: "Nhịp 3/4", back: "Mỗi ô nhịp có ba phách, phách 1 mạnh, phách 2 và 3 nhẹ.", hint: "Ba phách, hợp với valse.", example: "Điệu valse gõ mạnh ở phách một rồi nhẹ hai phách sau." },
    { front: "Quãng", back: "Khoảng cách giữa hai nốt, gọi tên theo số bậc và chất lượng trưởng, thứ, đúng.", hint: "Số bậc cộng chất lượng.", example: "Đô lên Mi là quãng ba trưởng, bốn nửa cung." },
    { front: "Quãng thuận", back: "Quãng nghe êm, thường là quãng ba, năm, sáu và tám, dùng nhiều trong hòa âm.", hint: "Êm tai, ổn định.", example: "Đô – Sol là quãng năm đúng, bảy nửa cung." },
    { front: "Dấu thăng", back: "Ký hiệu nâng nốt lên một nửa cung, có hiệu lực trong cả ô nhịp.", hint: "Nâng nửa cung.", example: "Fa thăng có tần số khoảng 369,99 Hz, cao hơn Fa nửa cung." },
    { front: "Hợp âm ba", back: "Ba nốt xếp theo quãng ba, ví dụ Đô trưởng gồm Đô – Mi – Sol.", hint: "Ba nốt chồng quãng ba.", example: "La thứ gồm La – Đô – Mi, nghe tối hơn Đô trưởng." },
    { front: "Giọng song song", back: "Cặp giọng trưởng và thứ dùng chung dấu hóa, cách nhau quãng ba thứ.", hint: "Cùng dấu hóa, khác nốt kết.", example: "Đô trưởng và La thứ cùng không có dấu hóa." },
    { front: "Cao độ chuẩn La4", back: "Nốt La4 có tần số 440 Hz, dùng làm mốc lấy giọng khi xướng âm và lên dây.", hint: "440 Hz.", example: "La5 cao gấp đôi, tức 880 Hz." }
  ],
  quiz: [
    { q: "Trong khóa Sol, nốt nằm trên dòng thứ hai từ dưới lên là nốt nào?", options: ["Đô (C4)", "Rê (D4)", "Sol (G4)", "Mi (E4)"], answer: 2, explain: "Khóa Sol quấn quanh dòng thứ hai nên dòng đó được cố định là nốt Sol4." },
    { q: "Trong nhịp 4/4, một nốt trắng kéo dài bao nhiêu phách?", options: ["2 phách", "1 phách", "3 phách", "4 phách"], answer: 0, explain: "Nốt trắng bằng hai nốt đen, mà mỗi nốt đen là một phách trong nhịp 4/4." },
    { q: "Quãng năm đúng Đô – Sol gồm bao nhiêu nửa cung?", options: ["4 nửa cung", "5 nửa cung", "9 nửa cung", "7 nửa cung"], answer: 3, explain: "Quãng năm đúng luôn có bảy nửa cung, nghe ổn định và rất thuận tai." },
    { q: "Dấu thăng đặt trước một nốt có tác dụng:", options: ["Hạ nốt xuống hai nửa cung", "Nâng nốt lên một nửa cung", "Nâng nốt lên một cung", "Kéo dài nốt thêm một phách"], answer: 1, explain: "Dấu thăng nâng cao độ thêm một nửa cung và có hiệu lực trong cả ô nhịp." },
    { q: "Hợp âm ba Đô trưởng gồm những nốt nào?", options: ["Đô – Rê – Mi", "Đô – Mi – La", "Đô – Mi – Sol", "Đô – Fa – La"], answer: 2, explain: "Hợp âm trưởng gồm nốt gốc, quãng ba trưởng và quãng năm đúng: Đô, Mi, Sol." },
    { q: "Vòng hòa âm I – IV – V trong giọng Đô trưởng là:", options: ["Đô – Fa – Sol", "Đô – Sol – Fa", "Đô – Mi – Sol", "La – Rê – Mi"], answer: 0, explain: "Bậc IV của Đô trưởng là Fa, bậc V là Sol, nên vòng là Đô – Fa – Sol." },
    { q: "Nhịp 3/4 thường gắn với điệu nhảy nào?", options: ["Hành khúc", "Valse", "Tango", "Rock"], answer: 1, explain: "Valse có ba phách mỗi ô nhịp với phách một mạnh, hai phách sau nhẹ." },
    { q: "Tần số chuẩn của nốt La4 là:", options: ["261,63 Hz", "329,63 Hz", "392 Hz", "440 Hz"], answer: 3, explain: "La4 được lấy chuẩn 440 Hz, dùng để lên dây và lấy giọng khi xướng âm." },
    { q: "Giọng La thứ có quan hệ thế nào với Đô trưởng?", options: ["Giọng thứ song song, cùng dấu hóa", "Khác hoàn toàn về dấu hóa", "Là giọng cùng tên", "Là giọng thứ hòa thanh của Đô trưởng"], answer: 0, explain: "La thứ cách Đô trưởng quãng ba thứ xuống nên dùng chung bộ nốt, khác nốt kết." },
    { q: "Một câu nhạc kết ở bậc V thường tạo cảm giác:", options: ["Kết thúc trọn vẹn", "Chuyển ngay sang giọng khác", "Bỏ lửng, cần giải quyết về bậc I", "Mất phách mạnh"], answer: 2, explain: "Hợp âm bậc V tạo sức căng nên cần về bậc I để khép lại câu nhạc." }
  ],
  lab: {
    kind: "piano",
    title: "Phím đàn Đô4 đến Đô5",
    lead: "Mười ba phím gồm cả phím đen, đủ để nghe mọi nửa cung trong một quãng tám. Bấm phím để nghe cao độ, hoặc phát âm hình mẫu để theo dõi thứ tự nốt.",
    stageLabel: "Phím đàn",
    controlNote: "Bấm Fa rồi Fa thăng để nghe nửa cung. Bấm lần lượt C4 – E4 – G4 để nghe các thành phần của hợp âm Đô trưởng, rồi A4 – C5 để nghe quãng ba thứ.",
    note: "Âm thanh do trình duyệt tổng hợp bằng Web Audio, cao độ lấy theo La4 bằng 440 Hz.",
    notes: ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5"],
    timbre: "triangle",
    sheetText: "Nhấn phím để nghe cao độ và ghi tên nốt tại đây.",
    melody: [
      { note: "C4", beat: 1 },
      { note: "D4", beat: 1 },
      { note: "E4", beat: 1 },
      { note: "F4", beat: 1 },
      { note: "G4", beat: 2 },
      { note: "F4", beat: 1 },
      { note: "E4", beat: 1 },
      { note: "D4", beat: 1 },
      { note: "C4", beat: 2 }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Mai Anh", progress: 86, score: 8.8, status: "Tốt", note: "Đọc nốt nhanh, cần luyện thêm quãng nghịch." },
      { name: "Trần Quốc Việt", progress: 57, score: 7.0, status: "Đang học", note: "Hay hát cao ở chỗ chuyển Mi sang Fa." },
      { name: "Lê Khánh Vy", progress: 93, score: 9.3, status: "Tốt", note: "Phân tích ca khúc có dẫn chứng số ô nhịp rõ ràng." },
      { name: "Phạm Gia Hân", progress: 30, score: 5.6, status: "Cần hỗ trợ", note: "Chưa hoàn thành bài luyện tai nghe tuần 3." },
      { name: "Vũ Hoàng Sơn", progress: 64, score: 7.5, status: "Đang học", note: "Giữ nhịp tốt, cần ôn lại dấu hóa đầu khuông." },
      { name: "Đỗ Minh Thư", progress: 49, score: 6.6, status: "Đang học", note: "Nên luyện thêm vòng hòa âm I – IV – V trước buổi kiểm tra." }
    ],
    submissions: [
      { student: "Nguyễn Mai Anh", lesson: "Bài đọc nhạc tám ô nhịp ghi âm", time: "Hôm qua 21:05", status: "Chờ chấm" },
      { student: "Phạm Gia Hân", lesson: "Phiếu luyện tai nghe: nhận diện quãng", time: "Hôm qua 19:20", status: "Chờ chấm" },
      { student: "Lê Khánh Vy", lesson: "Phân tích ca khúc 32 ô nhịp", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Ba học hợp âm ba, mang theo tai nghe cá nhân để luyện bài nghe.",
      "Bài kiểm tra giữa kỳ gồm 30% nhạc lý và 70% thực hành xướng âm có ghi âm.",
      "Sinh viên chưa đạt 40% bài luyện tai nghe liên hệ lớp trưởng để được hỗ trợ."
    ]
  },
  className: "Nhạc lý và xướng âm – K26",
  brief: "BTL-33_melodedu-mon-am-nhac.md"
};
