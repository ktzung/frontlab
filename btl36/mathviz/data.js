window.BTL_DATA = {
  id: "mathviz",
  code: "BTL-03",
  name: "MathViz THPT",
  monogram: "π",
  subject: "Toán THPT",
  level: "Phổ thông",
  group: "Toán & Khoa học tự nhiên",
  accent: "#ea580c",
  accent2: "#db2777",
  font: "rounded",
  tagline: "Khảo sát hàm số bằng cách kéo tham số, nhìn parabol, tiếp tuyến và đường phụ đổi hình ngay trước mắt.",
  intro: "MathViz THPT gom ba mảng trọng tâm của chương trình phổ thông là hàm số, lượng giác và hình học không gian vào một giao diện duy nhất. Học sinh kéo hệ số để tự khám phá quy luật, luyện đề có đồng hồ và xem lời giải chi tiết ngay sau mỗi câu.",
  hero: { title: "Toán THPT", highlight: "học bằng cách kéo tham số" },
  heroBadge: "Bảng khảo sát · Luyện đề có lời giải",
  labShort: "ĐỒ THỊ",
  labTag: "PHÒNG LAB",
  practiceTag: "LUYỆN ĐỀ",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ công thức" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách học được chọn cho chương trình phổ thông: nhìn đồ thị để hiểu bản chất, phân loại dạng bài để chọn mẹo giải, và luyện đề có chấm điểm tức thì.",
  pathLead: "Bắt đầu từ parabol và tương giao, chuyển sang vòng tròn lượng giác, rồi kết thúc ở hình học không gian và xác suất. Mỗi chương có phòng lab để kiểm chứng công thức bằng hình ảnh.",
  features: [
    { badge: "01", title: "Bảng khảo sát động", desc: "Kéo hệ số a, b và đường chuẩn c để thấy parabol, tiếp tuyến tại x0 và đường thẳng y = c cắt nhau ở đâu, kèm bảng tung độ và hệ số góc." },
    { badge: "02", title: "Phân loại dạng bài và mẹo giải", desc: "Mỗi câu hỏi được gắn nhãn dạng bài như tìm tiệm cận, xét dấu tam thức, thể tích khối chóp, kèm bẫy thường gặp cần tránh." },
    { badge: "03", title: "Luyện đề như thi thật", desc: "Đồng hồ đếm ngược, chấm điểm ngay, câu sai hiện lại lời giải từng bước để học sinh tự làm lại cho đúng." }
  ],
  life: [
    {
      title: "Quả bóng rổ và điểm cao nhất",
      scene: "Ném quả bóng rổ ở sân trường, bóng vọt lên rồi rơi xuống theo một đường cong. Điểm cao nhất nằm đúng giữa đường bay, hai bên thấp dần đều nhau, và số lần bóng ngang tầm vành rổ quyết định có vào hay không.",
      connect: "Đường bay là parabol: đỉnh cho biết điểm cao nhất, trục đối xứng chia hai bên bằng nhau, còn số giao điểm với đường ngang tầm vành chính là số nghiệm của phương trình."
    },
    {
      title: "Cái thang nhôm dựa tường",
      scene: "Chuyển đồ lên gác xép, lấy thang nhôm dài 2 m dựng vào tường, chân thang đặt cách tường 0,8 m. Muốn biết thang nghiêng bao nhiêu độ và chạm tới độ cao nào thì phải tính qua góc, không đo trực tiếp được.",
      connect: "Cạnh huyền, cạnh kề và góc tạo thành tam giác vuông, nên sin và cos cho ngay chiều cao và độ nghiêng. Đổi góc sang vòng tròn lượng giác thì giá trị sin, cos vẫn đọc như cũ."
    },
    {
      title: "Lon sữa bò và phễu nhựa đong gạo",
      scene: "Đong gạo bằng lon sữa bò đã cắt nắp, đổ đầy vừa một lon. Cùng đường kính miệng và cùng chiều cao, cái phễu nhựa thót xuống đáy chỉ chứa được một phần ba lon ấy.",
      connect: "Lon là khối trụ, phễu là khối nón có cùng đường kính miệng và cùng chiều cao, nên thể tích nón bằng một phần ba thể tích trụ. Đây là chỗ dễ nhớ nhất của công thức thể tích khối nón."
    }
  ],
  modules: [
    {
      title: "Hàm số bậc hai và đồ thị",
      summary: "Đọc đỉnh, trục đối xứng, hệ số góc tiếp tuyến và biện luận số nghiệm bằng tương giao đồ thị.",
      lessons: [
        {
          id: "hs1",
          title: "Đỉnh và trục đối xứng của parabol",
          minutes: 18,
          level: "Cơ bản",
          summary: "Xác định tọa độ đỉnh, trục đối xứng và chiều bề lõm của parabol y = ax² + bx + c.",
          points: ["Hoành độ đỉnh là −b/(2a), tung độ tính bằng cách thay vào hàm số.", "a dương bề lõm hướng lên, a âm bề lõm hướng xuống.", "Trục đối xứng là đường thẳng x = −b/(2a)."],
          steps: [
            { title: "Tính hoành độ đỉnh", body: "Với y = x² − 4x + 3, hoành độ đỉnh là −(−4)/(2·1) = 2. Thay x = 2 vào hàm số được y = 4 − 8 + 3 = −1, vậy đỉnh là (2, −1). Đỉnh là điểm thấp nhất khi a dương và là điểm cao nhất khi a âm.", tip: "Luôn thay lại vào hàm số để kiểm tra tung độ đỉnh." },
            { title: "Đọc trục đối xứng và bảng biến thiên", body: "Parabol nhận x = 2 làm trục đối xứng nên f(1) = f(3) = 0. Hàm giảm trên (−∞, 2) và tăng trên (2, +∞) vì a = 1 dương. Bảng biến thiên chỉ cần ba dòng: x, f(x), chiều mũi tên.", tip: "Chọn hai điểm đối xứng qua trục để vẽ nhanh đồ thị." },
            { title: "Xét dấu tam thức", body: "Tam thức x² − 4x + 3 có hai nghiệm 1 và 3, hệ số a dương nên dương ngoài khoảng nghiệm và âm trong khoảng (1, 3). Quy tắc trong trái dấu, ngoài cùng dấu với a giúp giải bất phương trình nhanh.", tip: "Vẽ trục số và ghi dấu từng khoảng trước khi kết luận tập nghiệm." }
          ],
          formula: "x(đỉnh) = −b/(2a) ; y(đỉnh) = −Δ/(4a) với Δ = b² − 4ac"
        },
        {
          id: "hs2",
          title: "Hệ số góc và tiếp tuyến",
          minutes: 20,
          level: "Trung bình",
          summary: "Hiểu hệ số góc là tốc độ thay đổi và viết được phương trình tiếp tuyến của parabol tại một điểm.",
          points: ["Hệ số góc của đường thẳng y = kx + m chính là k.", "Tiếp tuyến của y = ax² + bx tại x0 có hệ số góc 2a·x0 + b.", "Phương trình tiếp tuyến: y = k(x − x0) + f(x0)."],
          steps: [
            { title: "Hệ số góc nói gì", body: "Đường thẳng y = 2x + 1 đi lên, mỗi bước sang phải 1 đơn vị thì lên 2 đơn vị. Hệ số góc dương cho biết hàm tăng, âm cho biết hàm giảm, bằng 0 là đường nằm ngang. Với parabol, hệ số góc thay đổi liên tục theo x.", tip: "So sánh hai đường thẳng: hệ số góc lớn hơn thì dốc hơn." },
            { title: "Tính hệ số góc tiếp tuyến", body: "Với y = x² − 2x, hệ số góc tại x0 = 3 là 2·3 − 2 = 4. Tung độ tiếp điểm là 9 − 6 = 3. Phương trình tiếp tuyến là y = 4(x − 3) + 3, rút gọn thành y = 4x − 9. Đường này chỉ chạm parabol tại đúng một điểm.", tip: "Kiểm tra bằng cách giải phương trình hoành độ giao điểm, phải có nghiệm kép." },
            { title: "Tiếp tuyến và bài toán cực trị", body: "Tại đỉnh parabol, hệ số góc bằng 0 nên tiếp tuyến nằm ngang. Đây là lý do điều kiện 2a·x0 + b = 0 cho hoành độ đỉnh. Cùng một ý tưởng này sẽ được dùng lại khi học cực trị của hàm số bất kỳ.", tip: "Nếu hệ số góc bằng 0 mà đồ thị vẫn cắt, đó không phải tiếp tuyến." }
          ],
          formula: "k = 2a·x0 + b ; y = k(x − x0) + a·x0² + b·x0"
        },
        {
          id: "hs3",
          title: "Tương giao với đường thẳng y = c",
          minutes: 22,
          level: "Trung bình",
          summary: "Biện luận số nghiệm của phương trình ax² + bx = c bằng cách đếm giao điểm của parabol với đường nằm ngang.",
          points: ["Số nghiệm bằng số giao điểm của hai đồ thị.", "Đường y = c nằm dưới đỉnh thì vô nghiệm khi a dương.", "Đi qua đỉnh cho nghiệm kép."],
          steps: [
            { title: "Chuyển về phương trình", body: "Xét x² − 2x = c. Đưa về x² − 2x − c = 0, biệt thức Δ = 4 + 4c. Nếu c > −1 thì Δ > 0, phương trình có hai nghiệm phân biệt, tương ứng đường thẳng cắt parabol tại hai điểm.", tip: "Ghi rõ điều kiện của Δ theo tham số trước khi kết luận." },
            { title: "Đọc bằng đồ thị", body: "Parabol y = x² − 2x có đỉnh (1, −1). Đường y = 2 nằm trên đỉnh nên cắt đồ thị tại hai điểm. Hạ đường xuống y = −1 thì đường chạm đúng đỉnh, cho nghiệm kép x = 1. Hạ tiếp xuống y = −3 thì không còn giao điểm, phương trình vô nghiệm.", tip: "Trong phòng lab, kéo thanh c để thấy số giao điểm thay đổi từ 0 sang 2." },
            { title: "Ứng dụng biện luận", body: "Bài toán tìm m để phương trình có đúng một nghiệm thường quy về việc đường y = m đi qua đỉnh hoặc tiếp xúc. Cần kiểm tra thêm trường hợp hệ số a bằng 0 vì khi đó đồ thị thoái hóa thành đường thẳng.", tip: "Đừng quên trường hợp đặc biệt làm bậc của phương trình giảm." }
          ],
          formula: "ax² + bx = c ⇔ ax² + bx − c = 0, số nghiệm = số giao điểm"
        }
      ]
    },
    {
      title: "Lượng giác và tam giác",
      summary: "Từ vòng tròn lượng giác đến phương trình cơ bản và các hệ thức lượng dùng trong tam giác.",
      lessons: [
        {
          id: "lg1",
          title: "Vòng tròn lượng giác và giá trị đặc biệt",
          minutes: 18,
          level: "Cơ bản",
          summary: "Định vị góc trên vòng tròn lượng giác và ghi nhớ giá trị sin, cos của các góc thường gặp.",
          points: ["Điểm trên vòng tròn có tọa độ (cos α, sin α).", "Chu kỳ của sin và cos là 360 độ.", "Góc đối nhau có cos bằng nhau, sin trái dấu."],
          steps: [
            { title: "Đọc tọa độ trên vòng tròn", body: "Góc 30 độ ứng với điểm có tọa độ (√3/2, 1/2), nên cos 30 = √3/2 và sin 30 = 1/2. Góc 150 độ có cùng tung độ nhưng hoành độ đối dấu, cho sin 150 = 1/2 và cos 150 = −√3/2.", tip: "Vẽ nhanh bốn góc 0, 90, 180, 270 trước, các góc khác suy ra theo đối xứng." },
            { title: "Công thức cơ bản", body: "Với mọi góc, sin²α + cos²α = 1. Công thức cộng cho sin(α + β) = sinα·cosβ + cosα·sinβ, và cos(α + β) = cosα·cosβ − sinα·sinβ. Hai công thức này sinh ra hầu hết công thức biến đổi khác.", tip: "Kiểm tra công thức bằng góc 0 và 90 độ, nếu sai sẽ lộ ngay." },
            { title: "Trục sin, cos và tan", body: "Trên vòng tròn lượng giác, sin là hình chiếu lên trục tung, cos là hình chiếu lên trục hoành, tan là tỉ số sin/cos. Vì vậy tan không xác định tại 90 độ, nơi cos bằng 0. Hiểu hình chiếu giúp nhớ dấu của từng góc phần tư.", tip: "Ghi nhớ: nhất cả, nhì sin, tam tan, tứ cos theo bốn góc phần tư." }
          ],
          formula: "sin²α + cos²α = 1 ; tanα = sinα/cosα"
        },
        {
          id: "lg2",
          title: "Phương trình lượng giác cơ bản",
          minutes: 22,
          level: "Trung bình",
          summary: "Giải phương trình sin x = m, cos x = m và xử lý điều kiện có nghiệm theo miền giá trị.",
          points: ["Phương trình sin x = m có nghiệm chỉ khi |m| ≤ 1.", "Nghiệm của sin x = m là x = α + k·360 hoặc 180 − α + k·360.", "Nghiệm của cos x = m là x = ±α + k·360."],
          steps: [
            { title: "Kiểm tra điều kiện có nghiệm", body: "Phương trình sin x = 1,5 vô nghiệm vì sin chỉ nhận giá trị trong đoạn [−1, 1]. Bước kiểm tra này loại được rất nhiều đáp án sai trong trắc nghiệm. Với cos x = −0,5, giá trị nằm trong miền hợp lệ nên có nghiệm.", tip: "Ghi miền giá trị của sin và cos ngay đầu bài." },
            { title: "Viết họ nghiệm", body: "sin x = 1/2 có nghiệm x = 30 + k·360 hoặc x = 150 + k·360 với k nguyên. Cần hiểu k·360 là vòng quay đầy đủ, không phải một nghiệm rời rạc. Nếu đề cho khoảng nghiệm, thay các giá trị k để lọc nghiệm thuộc khoảng.", tip: "Luôn ghi rõ đơn vị độ hoặc radian, không trộn hai đơn vị." },
            { title: "Đưa về phương trình cơ bản", body: "Phương trình 2sin x − 1 = 0 đưa về sin x = 1/2 rồi giải như trên. Với phương trình bậc hai theo sin, đặt ẩn phụ t = sin x, nhớ điều kiện |t| ≤ 1 để loại nghiệm không hợp lệ.", tip: "Sau khi giải ẩn phụ, phải kiểm tra lại điều kiện của ẩn phụ." }
          ],
          formula: "sin x = sin α ⇔ x = α + k·360 hoặc x = 180 − α + k·360"
        },
        {
          id: "lg3",
          title: "Hệ thức lượng trong tam giác",
          minutes: 20,
          level: "Trung bình",
          summary: "Áp dụng định lý cosin, định lý sin và công thức diện tích để giải tam giác bất kỳ.",
          points: ["Định lý cosin mở rộng định lý Pythagore cho góc không vuông.", "Định lý sin liên hệ cạnh với sin góc đối diện.", "Diện tích tam giác bằng nửa tích hai cạnh nhân sin góc xen giữa."],
          steps: [
            { title: "Định lý cosin", body: "Tam giác có hai cạnh 5 và 7, góc xen giữa 60 độ. Cạnh còn lại thỏa a² = 25 + 49 − 2·5·7·cos60 = 74 − 35 = 39, nên a = √39, xấp xỉ 6,24. Khi góc bằng 90 độ, số hạng cosin triệt tiêu và ta thu lại định lý Pythagore.", tip: "Góc xen giữa phải là góc giữa đúng hai cạnh đang dùng." },
            { title: "Định lý sin", body: "Trong tam giác, a/sinA = b/sinB = 2R với R là bán kính đường tròn ngoại tiếp. Biết một cạnh và hai góc, ta tính được các cạnh còn lại. Chú ý trường hợp góc tù vì sin của hai góc bù nhau bằng nhau, có thể cho hai nghiệm hình học.", tip: "Khi giải tam giác, kiểm tra xem có phải trường hợp hai nghiệm không." },
            { title: "Công thức diện tích", body: "Diện tích bằng ½·5·7·sin60, xấp xỉ 15,16. Ba công thức thường dùng là nửa tích hai cạnh nhân sin góc xen giữa, nửa chu vi nhân bán kính nội tiếp, và abc chia 4R. Chọn công thức theo dữ kiện đề cho để ít bước nhất.", tip: "Ghi dữ kiện đã biết ra nháp rồi chọn công thức khớp nhất." }
          ],
          formula: "a² = b² + c² − 2bc·cosA ; S = ½·b·c·sinA"
        }
      ]
    },
    {
      title: "Hình học không gian và xác suất",
      summary: "Tính thể tích khối đa diện, khối tròn xoay và làm quen xác suất cổ điển.",
      lessons: [
        {
          id: "kg1",
          title: "Thể tích khối chóp và khối lăng trụ",
          minutes: 20,
          level: "Cơ bản",
          summary: "Nắm công thức thể tích và cách xác định chiều cao đúng trong hình chóp, hình lăng trụ.",
          points: ["Thể tích khối chóp bằng một phần ba diện tích đáy nhân chiều cao.", "Khối lăng trụ bằng diện tích đáy nhân chiều cao.", "Chiều cao là khoảng cách vuông góc từ đỉnh tới mặt phẳng đáy."],
          steps: [
            { title: "Xác định chiều cao", body: "Hình chóp có đáy là hình vuông cạnh 3 và cạnh bên vuông góc với đáy dài 4. Chiều cao chính là cạnh bên đó, bằng 4. Nếu đỉnh nằm trên đường thẳng vuông góc với tâm đáy thì chân đường cao là tâm, cần chứng minh rõ trước khi dùng.", tip: "Vẽ hình phẳng hóa mặt đáy ra giấy riêng để thấy quan hệ vuông góc." },
            { title: "Áp công thức", body: "Diện tích đáy là 9, chiều cao 4, thể tích khối chóp bằng 9·4/3 = 12. Với lăng trụ có cùng đáy và chiều cao, thể tích là 36, gấp ba lần. Đây là lý do công thức chóp có hệ số 1/3.", tip: "Kiểm tra đơn vị: cạnh đo bằng cm thì thể tích ra cm³." },
            { title: "Bài toán tỉ số thể tích", body: "Khi mặt phẳng cắt hình chóp tạo ra hai phần, tỉ số thể tích thường tính qua tỉ số các đoạn thẳng trên cùng một cạnh. Ví dụ cắt tại trung điểm cạnh bên thì phần trên có thể tích bằng một phần tư phần dưới trong một số cấu hình chuẩn.", tip: "Ghi tỉ số cạnh trước, rồi mới lập tỉ số thể tích." }
          ],
          formula: "V(chóp) = ⅓·S(đáy)·h ; V(lăng trụ) = S(đáy)·h"
        },
        {
          id: "kg2",
          title: "Mặt nón, mặt trụ và mặt cầu",
          minutes: 22,
          level: "Trung bình",
          summary: "Tính diện tích xung quanh và thể tích của các khối tròn xoay thường gặp.",
          points: ["Khối trụ có diện tích xung quanh 2πrh và thể tích πr²h.", "Khối nón có thể tích bằng một phần ba khối trụ cùng đáy và chiều cao.", "Khối cầu có thể tích 4/3·πr³."],
          steps: [
            { title: "Khối trụ", body: "Hộp sữa hình trụ bán kính 4 cm, cao 10 cm có thể tích π·16·10 = 160π cm³, xấp xỉ 503 cm³. Diện tích xung quanh là 2π·4·10 = 80π cm². Nếu tính cả hai đáy thì cộng thêm 2πr².", tip: "Đọc kỹ đề hỏi xung quanh hay toàn phần trước khi thay số." },
            { title: "Khối nón", body: "Nón có bán kính đáy 3 và chiều cao 4 thì đường sinh bằng 5 theo Pythagore. Thể tích là π·9·4/3 = 12π. Diện tích xung quanh là π·r·l = 15π. Đường sinh luôn lớn hơn chiều cao, đây là chỗ hay nhầm khi thay số.", tip: "Vẽ tam giác vuông gồm bán kính, chiều cao và đường sinh." },
            { title: "Khối cầu", body: "Quả bóng bán kính 3 có thể tích 4/3·π·27 = 36π, diện tích mặt cầu là 4π·9 = 36π. Mặt cầu nội tiếp hình trụ có quan hệ đặc biệt: thể tích cầu bằng hai phần ba thể tích trụ ngoại tiếp, một kết quả cổ điển của Archimedes.", tip: "Nhớ cặp số 4/3 và 4π để phân biệt thể tích với diện tích." }
          ],
          formula: "V(trụ) = πr²h ; V(nón) = ⅓πr²h ; V(cầu) = 4/3·πr³"
        },
        {
          id: "xs1",
          title: "Xác suất cổ điển",
          minutes: 18,
          level: "Cơ bản",
          summary: "Đếm số kết quả thuận lợi và tổng số kết quả để tính xác suất của biến cố.",
          points: ["Xác suất bằng số kết quả thuận lợi chia tổng số kết quả đồng khả năng.", "Xác suất luôn nằm trong đoạn từ 0 đến 1.", "Biến cố đối có xác suất bằng 1 trừ xác suất biến cố gốc."],
          steps: [
            { title: "Xác định không gian mẫu", body: "Gieo một xúc xắc cân đối có 6 kết quả đồng khả năng. Biến cố được số chẵn gồm 2, 4, 6 nên có 3 kết quả thuận lợi. Xác suất là 3/6 = 1/2. Điều kiện đồng khả năng là bắt buộc, nếu xúc xắc không cân thì không dùng công thức này.", tip: "Liệt kê không gian mẫu ra giấy, đừng đếm trong đầu." },
            { title: "Dùng biến cố đối", body: "Tung ba đồng xu, xác suất có ít nhất một mặt ngửa. Đếm trực tiếp dễ sót, nên dùng biến cố đối là cả ba đều sấp, xác suất 1/8. Vậy xác suất cần tìm là 1 − 1/8 = 7/8. Cách này rất hiệu quả với các cụm từ như ít nhất, không có.", tip: "Thấy chữ ít nhất thì nghĩ ngay đến biến cố đối." },
            { title: "Đếm bằng tổ hợp", body: "Chọn 2 học sinh từ 5 học sinh có 10 cách, vì tổ hợp chập 2 của 5 bằng 10. Chọn 2 bạn trong đó có đúng một bạn nữ khi lớp có 2 nữ và 3 nam: có 2·3 = 6 cách, xác suất 6/10 = 0,6. Phân biệt tổ hợp không quan tâm thứ tự với chỉnh hợp có thứ tự.", tip: "Hỏi bản thân: đổi thứ tự chọn có tạo kết quả mới không." }
          ],
          formula: "P(A) = số kết quả thuận lợi / tổng số kết quả ; P(A) + P(đối A) = 1"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Tọa độ đỉnh parabol", back: "Đỉnh của y = ax² + bx + c có hoành độ −b/(2a) và tung độ −Δ/(4a).", hint: "Trục đối xứng đi qua đỉnh.", example: "y = x² − 4x + 3 có đỉnh (2, −1)." },
    { front: "Chiều bề lõm", back: "a dương thì parabol quay bề lõm lên trên, a âm thì quay xuống dưới.", hint: "Nhìn dấu của hệ số a.", example: "y = −x² + 1 có bề lõm hướng xuống." },
    { front: "Hệ số góc tiếp tuyến parabol", back: "Tại x0, tiếp tuyến của y = ax² + bx có hệ số góc 2a·x0 + b.", hint: "Bằng 0 tại đỉnh.", example: "y = x² có tiếp tuyến tại x = 2 với hệ số góc 4." },
    { front: "Tương giao với y = c", back: "Số nghiệm của ax² + bx = c bằng số giao điểm của parabol với đường nằm ngang y = c.", hint: "Đường ngang cắt, chạm hoặc không cắt.", example: "y = x² và y = 4 cắt nhau tại hai điểm x = ±2." },
    { front: "Đẳng thức lượng giác cơ bản", back: "sin²α + cos²α = 1 với mọi góc α.", hint: "Hệ quả của định lý Pythagore trên vòng tròn đơn vị.", example: "sin30 = 1/2 nên cos30 = √3/2." },
    { front: "Công thức cos gấp đôi", back: "cos2α = 2cos²α − 1 = 1 − 2sin²α.", hint: "Có ba dạng tương đương.", example: "cos60 = 2·cos²30 − 1 = 1/2." },
    { front: "Nghiệm của sin x = m", back: "Có nghiệm khi |m| ≤ 1, nghiệm là x = α + k·360 hoặc 180 − α + k·360.", hint: "Hai họ nghiệm đối xứng qua trục tung.", example: "sin x = 1/2 cho x = 30 + k·360." },
    { front: "Định lý cosin", back: "a² = b² + c² − 2bc·cosA, mở rộng định lý Pythagore cho góc bất kỳ.", hint: "Có số hạng cos của góc xen giữa.", example: "Góc 60 độ, cạnh 5 và 7 cho cạnh thứ ba √39." },
    { front: "Diện tích tam giác theo sin", back: "S = ½·b·c·sinA với A là góc xen giữa hai cạnh b và c.", hint: "Nửa tích hai cạnh nhân sin góc xen giữa.", example: "Cạnh 3 và 4, góc 30 độ cho S = 3." },
    { front: "Thể tích khối chóp", back: "V = ⅓·S(đáy)·h, bằng một phần ba khối lăng trụ cùng đáy và chiều cao.", hint: "Nhớ hệ số 1/3.", example: "Đáy 9, cao 4 cho V = 12." },
    { front: "Thể tích khối cầu", back: "V = 4/3·πr³, diện tích mặt cầu là 4πr².", hint: "4/3 cho thể tích, 4 cho diện tích.", example: "Bán kính 3 cho V = 36π." },
    { front: "Xác suất cổ điển", back: "P(A) bằng số kết quả thuận lợi chia tổng số kết quả đồng khả năng.", hint: "Chỉ dùng khi các kết quả đồng khả năng.", example: "Gieo xúc xắc, xác suất ra số chẵn là 1/2." }
  ],
  quiz: [
    { q: "Parabol y = x² − 4x + 3 có đỉnh là điểm nào?", options: ["(1, −1)", "(2, 1)", "(2, −1)", "(−2, 3)"], answer: 2, explain: "Hoành độ đỉnh −b/(2a) = 2, thay vào được y = −1." },
    { q: "Nghiệm của phương trình x² − 5x + 6 = 0 là:", options: ["x = 2 và x = 3", "x = −2 và x = −3", "x = 1 và x = 6", "x = 0 và x = 5"], answer: 0, explain: "Tổng nghiệm bằng 5, tích bằng 6 nên hai nghiệm là 2 và 3." },
    { q: "Giá trị của sin²x + cos²x bằng:", options: ["0", "2", "1/2", "1"], answer: 3, explain: "Đây là đẳng thức lượng giác cơ bản, đúng với mọi x." },
    { q: "Khối chóp có diện tích đáy 9 và chiều cao 4 thì thể tích bằng:", options: ["6", "12", "18", "36"], answer: 1, explain: "V = ⅓·9·4 = 12." },
    { q: "Khối trụ bán kính đáy 2, chiều cao 5 có thể tích bằng:", options: ["10π", "15π", "20π", "40π"], answer: 2, explain: "V = πr²h = π·4·5 = 20π." },
    { q: "Gieo một xúc xắc cân đối, xác suất được mặt có số chấm chẵn là:", options: ["1/6", "1/3", "2/3", "1/2"], answer: 3, explain: "Có 3 kết quả thuận lợi là 2, 4, 6 trên 6 kết quả, nên xác suất là 1/2." },
    { q: "cos2x bằng biểu thức nào sau đây?", options: ["2sin²x − 1", "2cos²x − 1", "1 + 2cos²x", "cos²x + sin²x"], answer: 1, explain: "Công thức nhân đôi cho cos2x = 2cos²x − 1, còn cos²x + sin²x luôn bằng 1." },
    { q: "Hệ số góc của tiếp tuyến với y = x² tại x = 2 là:", options: ["4", "2", "8", "1"], answer: 0, explain: "Hệ số góc bằng 2x, thay x = 2 được 4." },
    { q: "Tam giác có hai cạnh 3 và 4, góc xen giữa 30 độ, diện tích bằng:", options: ["6", "12", "3√3", "3"], answer: 3, explain: "S = ½·3·4·sin30 = ½·12·0,5 = 3." },
    { q: "Số cách chọn 2 học sinh từ 5 học sinh là:", options: ["5", "10", "20", "25"], answer: 1, explain: "Tổ hợp chập 2 của 5 bằng 5·4/2 = 10, thứ tự chọn không quan trọng." }
  ],
  lab: {
    kind: "plot",
    title: "Bảng khảo sát parabol và tiếp tuyến",
    lead: "Kéo a và b để đổi parabol y = ax² + bx, kéo x0 để trượt tiếp tuyến, kéo c để nâng hạ đường thẳng y = c. Số giao điểm của parabol với đường y = c chính là số nghiệm của phương trình.",
    stageLabel: "Đồ thị tương tác",
    xMin: -4, xMax: 4, yMin: -8, yMax: 10,
    readAt: "x0",
    sliders: [
      { key: "a", label: "Hệ số a", min: -2, max: 2, step: 0.1, value: 1 },
      { key: "b", label: "Hệ số b", min: -4, max: 4, step: 0.1, value: 0 },
      { key: "c", label: "Đường ngang y = c", min: -6, max: 9, step: 0.5, value: 0 },
      { key: "x0", label: "Hoành độ tiếp điểm x0", min: -3, max: 3, step: 0.1, value: 1 }
    ],
    curves: [
      { type: "quad", label: "y = ax² + bx", color: "#ea580c", params: { a: "a", b: "b" } },
      { type: "tangent", label: "Tiếp tuyến tại x0", color: "#db2777", params: { a: "a", b: "b", x0: "x0" } },
      { type: "linear", label: "Đường thẳng y = c", color: "#0891b2", params: { m: 0, b: "c" } }
    ],
    controlNote: "Kéo c xuống dưới đỉnh parabol để thấy phương trình vô nghiệm, kéo đúng ngang đỉnh để thấy nghiệm kép. Ô đọc số bên dưới cho tung độ và hệ số góc tại x0.",
    note: "Mô hình hóa quan hệ giữa đại số và hình học: số nghiệm của phương trình là số giao điểm của hai đồ thị."
  },
  teacher: {
    students: [
      { name: "Nguyễn Hoàng Anh", progress: 80, score: 8.4, status: "Tốt", note: "Vững parabol, cần luyện thêm hệ thức lượng." },
      { name: "Trần Mỹ Duyên", progress: 58, score: 7.2, status: "Đang học", note: "Còn nhầm công thức cosin với Pythagore." },
      { name: "Lê Tuấn Kiệt", progress: 90, score: 9, status: "Tốt", note: "Làm nhanh phần thể tích khối tròn xoay." },
      { name: "Phạm Ngọc Mai", progress: 30, score: 5, status: "Cần hỗ trợ", note: "Chưa nắm phương trình lượng giác cơ bản." },
      { name: "Vũ Đình Phúc", progress: 64, score: 7.5, status: "Đang học", note: "Tiến bộ ở phần xác suất, cần ôn hình học không gian." },
      { name: "Đỗ Thảo Vy", progress: 42, score: 6, status: "Đang học", note: "Hay quên điều kiện có nghiệm của sin x = m." }
    ],
    submissions: [
      { student: "Nguyễn Hoàng Anh", lesson: "Phiếu khảo sát hàm số bậc hai", time: "Hôm qua 21:00", status: "Chờ chấm" },
      { student: "Phạm Ngọc Mai", lesson: "Bài luyện phương trình lượng giác", time: "Hôm qua 17:30", status: "Chờ chấm" },
      { student: "Lê Tuấn Kiệt", lesson: "Đề thử 45 phút chương thể tích", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Thứ Hai tuần sau kiểm tra 45 phút hai chương hàm số và lượng giác.",
      "Lớp trưởng gửi lại danh sách học sinh cần phụ đạo phần hình học không gian.",
      "Buổi chiều thứ Năm có ca luyện đề trên phòng máy, đăng ký trước 12 giờ."
    ]
  },
  className: "Toán 12A1 – THPT Nguyễn Huệ",
  brief: "BTL-03_mathviz-thpt-mon-toan-pho-thong.md"
};
