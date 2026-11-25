window.BTL_DATA = {
  id: "vectorspace",
  code: "BTL-02",
  name: "VectorSpace",
  monogram: "Ax",
  subject: "Đại số tuyến tính",
  level: "Đại học",
  group: "Toán & Khoa học tự nhiên",
  accent: "#4f46e5",
  accent2: "#0891b2",
  font: "mono",
  tagline: "Kéo vector, bóp méo lưới tọa độ và thấy chính xác ma trận đang làm gì với không gian.",
  intro: "VectorSpace biến các khái niệm trừu tượng của Đại số tuyến tính thành hình ảnh có thể thao tác: lưới tọa độ biến dạng theo ma trận, vector ảnh hiện ngay cạnh vector gốc. Mỗi bài học đi kèm phép toán mẫu, lời giải từng bước và thẻ khái niệm để ôn trước khi kiểm tra.",
  hero: { title: "Đại số tuyến tính", highlight: "nhìn thấy bằng lưới biến đổi" },
  heroBadge: "Lưới biến đổi · Khử Gauss từng bước",
  labShort: "MA TRẬN",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành riêng cho Đại số tuyến tính: kéo ma trận để thấy không gian đổi dạng, xem thuật toán chạy từng bước và tự kiểm tra bằng thẻ khái niệm.",
  pathLead: "Đi từ vector và tổ hợp tuyến tính, sang ma trận và hệ phương trình, rồi kết thúc ở ánh xạ tuyến tính cùng trị riêng. Cuối mỗi chương đều có phòng lab để kiểm chứng bằng hình ảnh.",
  features: [
    { badge: "01", title: "Lưới biến đổi trực quan", desc: "Kéo bốn hệ số a, b, c, d của ma trận 2x2 và thấy lưới tọa độ cùng vector ảnh Av thay đổi tức thì, kèm định thức và diện tích hình bình hành." },
    { badge: "02", title: "Khử Gauss từng bước", desc: "Mỗi phép biến đổi sơ cấp được tô sáng theo hàng, có nút tiến lùi để người học tự đoán bước tiếp theo trước khi xem lời giải." },
    { badge: "03", title: "Thẻ khái niệm và quiz", desc: "Mười hai thẻ ghi nhớ về hạng, định thức, cơ sở, trị riêng kèm trắc nghiệm chấm ngay và giải thích vì sao đúng sai." }
  ],
  modules: [
    {
      title: "Vector và không gian vector",
      summary: "Làm quen với vector, phép cộng, nhân vô hướng, tích vô hướng và tiêu chuẩn độc lập tuyến tính.",
      lessons: [
        {
          id: "ve1",
          title: "Vector, phép cộng và nhân vô hướng",
          minutes: 16,
          level: "Cơ bản",
          summary: "Đọc vector như một mũi tên có tọa độ và thực hiện phép cộng, trừ, nhân vô hướng bằng cả hình học lẫn đại số.",
          points: ["Vector được xác định bởi độ dài và hướng, không bởi điểm đặt.", "Cộng vector theo quy tắc hình bình hành hoặc cộng từng tọa độ.", "Nhân vô hướng làm dài hoặc đảo chiều vector, không đổi phương."],
          steps: [
            { title: "Đọc tọa độ của vector", body: "Vector u = (3, 2) nghĩa là đi 3 đơn vị theo trục hoành và 2 đơn vị theo trục tung. Độ dài được tính bằng căn bậc hai của 3² + 2², xấp xỉ 3,61. Hai vector bằng nhau khi và chỉ khi cùng tọa độ, dù mũi tên được vẽ ở đâu.", tip: "Hãy vẽ vector từ gốc tọa độ để tránh nhầm điểm đặt với tọa độ." },
            { title: "Cộng và trừ theo tọa độ", body: "Với u = (3, 2) và v = (1, 4), ta có u + v = (4, 6) và u − v = (2, −2). Trên hình, u + v là đường chéo hình bình hành dựng từ hai vector, còn u − v là vector nối đầu mút của v tới đầu mút của u.", tip: "Kiểm tra lại bằng hình vẽ: đường chéo phải đi từ gốc tới đỉnh đối diện." },
            { title: "Nhân vô hướng", body: "Nhân u với 2 được (6, 4), cùng hướng nhưng dài gấp đôi. Nhân với −0,5 được (−1,5, −1), ngược hướng và ngắn hơn. Mọi bội vô hướng của u đều nằm trên cùng một đường thẳng qua gốc, gọi là đường sinh bởi u.", tip: "Hệ số âm đảo chiều vector, đây là nguồn lỗi phổ biến khi vẽ tay." }
          ],
          formula: "u + v = (u₁ + v₁, u₂ + v₂) ; k·u = (k·u₁, k·u₂)"
        },
        {
          id: "ve2",
          title: "Tích vô hướng và hình chiếu",
          minutes: 20,
          level: "Trung bình",
          summary: "Dùng tích vô hướng để tính góc, kiểm tra vuông góc và tìm hình chiếu của vector này lên vector khác.",
          points: ["Tích vô hướng là một số thực, không phải vector.", "Hai vector vuông góc khi tích vô hướng bằng 0.", "Hình chiếu có độ dài |u|·cosθ theo hướng của v."],
          steps: [
            { title: "Hai cách tính", body: "Với u = (1, 2) và v = (3, −1), tích vô hướng theo tọa độ là 1·3 + 2·(−1) = 1. Theo hình học, u·v = |u||v|cosθ. Cho hai kết quả bằng nhau ta suy ra cosθ = 1/(√5·√10), tức góc khoảng 81,9 độ.", tip: "Chọn cách tính nào ít bước hơn: có tọa độ thì cộng tích từng thành phần." },
            { title: "Kiểm tra vuông góc", body: "Nếu u·v = 0 thì hai vector vuông góc. Ví dụ (2, 3) và (3, −2) có tích 6 − 6 = 0, nên chúng tạo thành một cặp trục vuông góc tuỳ ý trong mặt phẳng. Đây là công cụ kiểm tra nhanh trong hình học giải tích.", tip: "Đừng nhầm tích vô hướng bằng 0 với một trong hai vector bằng 0." },
            { title: "Tìm hình chiếu", body: "Hình chiếu của u lên v là (u·v / v·v)·v. Với u = (4, 3) và v = (1, 0), hình chiếu là (4, 0), chính là thành phần nằm ngang của u. Công thức này dùng lại trong bình phương tối thiểu và phân tích thành phần lực.", tip: "Hình chiếu luôn nằm trên đường thẳng sinh bởi v, hãy kiểm tra bằng mắt." }
          ],
          formula: "u·v = u₁v₁ + u₂v₂ = |u||v|cosθ ; proj_v(u) = (u·v / v·v)·v"
        },
        {
          id: "ve3",
          title: "Độc lập tuyến tính, cơ sở và số chiều",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt bộ vector độc lập với bộ phụ thuộc, nhận diện cơ sở và đếm số chiều của không gian con.",
          points: ["Bộ vector phụ thuộc khi có một vector là tổ hợp của các vector còn lại.", "Trong mặt phẳng, hai vector lập thành cơ sở khi định thức khác 0.", "Số chiều bằng số vector trong một cơ sở bất kỳ."],
          steps: [
            { title: "Thử bằng tổ hợp tuyến tính", body: "Bộ {(1, 2), (2, 4)} phụ thuộc vì vector thứ hai bằng 2 lần vector thứ nhất. Muốn kiểm tra tổng quát, giải phương trình αu + βv = 0; nếu chỉ có nghiệm α = β = 0 thì bộ độc lập tuyến tính.", tip: "Nhìn nhanh: hai vector cùng phương là dấu hiệu phụ thuộc." },
            { title: "Kiểm tra bằng định thức", body: "Với hai vector trong mặt phẳng, lập ma trận có hai vector làm cột. Định thức của ma trận [[1, 2], [3, 4]] bằng −2, khác 0, nên bộ vector độc lập và sinh ra toàn bộ mặt phẳng.", tip: "Định thức khác 0 tương đương với việc hệ chỉ có nghiệm tầm thường." },
            { title: "Cơ sở và số chiều", body: "Một cơ sở là bộ vector vừa độc lập tuyến tính vừa sinh ra không gian. Trong không gian R³, bộ ba vector (1,0,0), (0,1,0), (0,0,1) là cơ sở chính tắc và số chiều bằng 3. Mọi cơ sở của cùng một không gian đều có cùng số vector.", tip: "Nếu bộ vector sinh đúng không gian nhưng còn dư vector thì chưa phải cơ sở." }
          ],
          formula: "det[u v] ≠ 0 ⇔ {u, v} độc lập tuyến tính và là cơ sở của R²"
        }
      ]
    },
    {
      title: "Ma trận và hệ phương trình tuyến tính",
      summary: "Nhân ma trận, khử Gauss để tìm hạng và biện luận nghiệm, rồi tính định thức và nghịch đảo.",
      lessons: [
        {
          id: "ma1",
          title: "Phép nhân ma trận và ý nghĩa",
          minutes: 20,
          level: "Trung bình",
          summary: "Nhân ma trận theo quy tắc hàng nhân cột, hiểu vì sao thứ tự nhân quan trọng và cách đọc ma trận như một phép biến đổi.",
          points: ["A·B chỉ xác định khi số cột của A bằng số hàng của B.", "Phần tử ở hàng i cột j là tích vô hướng của hàng i và cột j.", "A·B khác B·A nói chung, phép nhân ma trận không giao hoán."],
          steps: [
            { title: "Kiểm tra kích thước trước", body: "Ma trận 2x3 nhân với ma trận 3x2 cho kết quả 2x2. Nếu viết A(2x3)·B(3x4) thì kết quả là 2x4. Chỉ cần ghi kích thước ra nháp, ta loại được phần lớn lỗi trước khi tính.", tip: "Viết kích thước hai bên dấu nhân, hai số giữa phải trùng nhau." },
            { title: "Hàng nhân cột", body: "Với A = [[1, 2], [3, 4]] và B = [[0, 1], [1, 0]], phần tử (1,1) là 1·0 + 2·1 = 2. Làm tương tự cho bốn vị trí ta được A·B = [[2, 1], [4, 3]], tức ma trận đã đổi chỗ hai cột của A. Ma trận B chính là phép hoán vị cột.", tip: "Đặt ngón tay lên hàng và cột đang tính để không lệch chỉ số." },
            { title: "Đọc ma trận như phép biến đổi", body: "Nhân A với vector v là biến v thành ảnh Av. Cùng một ma trận, nhân bên trái hay bên phải cho hai nghĩa khác nhau: biến đổi vector hay đổi cơ sở. Hiểu điều này giúp đọc công thức ở chương ánh xạ tuyến tính.", tip: "Trong phòng lab, xem cột của ma trận chính là ảnh của các vector đơn vị." }
          ],
          formula: "(A·B)ᵢⱼ = Σₖ aᵢₖ·bₖⱼ"
        },
        {
          id: "ma2",
          title: "Khử Gauss, hạng và biện luận nghiệm",
          minutes: 26,
          level: "Nâng cao",
          summary: "Dùng phép biến đổi sơ cấp đưa ma trận về dạng bậc thang, từ đó đọc hạng và số nghiệm của hệ.",
          points: ["Ba phép biến đổi sơ cấp không làm đổi tập nghiệm.", "Hạng là số hàng khác 0 trong dạng bậc thang.", "Hệ có nghiệm duy nhất khi hạng bằng số ẩn."],
          steps: [
            { title: "Chọn phần tử trụ", body: "Với hệ x + 2y = 5 và 3x + 4y = 11, trừ 3 lần hàng đầu khỏi hàng hai ta được 0x − 2y = −4, suy ra y = 2 và x = 1. Phần tử trụ nên khác 0 và càng đơn giản càng tốt để giảm sai số.", tip: "Nếu phần tử trụ bằng 0, đổi hàng trước khi chia." },
            { title: "Đọc hạng từ dạng bậc thang", body: "Ma trận [[1, 2, 3], [2, 4, 6]] có hàng hai gấp đôi hàng một, khử xong còn một hàng khác 0 nên hạng bằng 1. Hạng chính là số phương trình độc lập thực sự, không phải số phương trình viết ra.", tip: "Hàng toàn số 0 không đóng góp gì vào hạng." },
            { title: "Biện luận số nghiệm", body: "Với hệ n ẩn, hạng r: nếu r < n thì có vô số nghiệm với n − r tham số tự do; nếu r = n thì nghiệm duy nhất. Nếu xuất hiện hàng dạng 0 = c với c khác 0 thì hệ vô nghiệm. Đây là cách đọc nhanh kết quả khử Gauss.", tip: "Luôn so sánh hạng của ma trận hệ số và ma trận bổ sung trước khi kết luận." }
          ],
          formula: "số ẩn = hạng(A) + số chiều không gian nghiệm"
        },
        {
          id: "ma3",
          title: "Định thức và ma trận nghịch đảo",
          minutes: 22,
          level: "Trung bình",
          summary: "Hiểu định thức qua diện tích, tính định thức cấp 2 và 3, rồi dùng nó để tìm ma trận nghịch đảo.",
          points: ["Định thức đo hệ số phóng đại diện tích của phép biến đổi.", "Định thức bằng 0 khi các cột phụ thuộc tuyến tính.", "Ma trận 2x2 khả nghịch khi và chỉ khi định thức khác 0."],
          steps: [
            { title: "Nghĩa hình học của định thức", body: "Ma trận [[2, 1], [0, 1]] biến hình vuông đơn vị thành hình bình hành có diện tích bằng 2, đúng bằng định thức 2·1 − 1·0 = 2. Định thức âm cho biết phép biến đổi lật hướng mặt phẳng, ví dụ phản xạ qua trục hoành có định thức −1.", tip: "Kéo hệ số trong phòng lab tới khi định thức về 0 để thấy lưới bị ép dẹt." },
            { title: "Tính định thức cấp 3", body: "Khai triển theo hàng đầu: det của [[1, 2, 3], [0, 4, 5], [1, 0, 6]] bằng 1·(24 − 0) − 2·(0 − 5) + 3·(0 − 4) = 24 + 10 − 12 = 22. Cẩn thận dấu xen kẽ cộng trừ theo vị trí, đây là chỗ sai nhiều nhất.", tip: "Viết dấu + − + lên đầu mỗi cột trước khi khai triển." },
            { title: "Nghịch đảo ma trận 2x2", body: "Với A = [[a, b], [c, d]] và det A khác 0, nghịch đảo là (1/det A) nhân [[d, −b], [−c, a]]. Kiểm tra bằng A·A⁻¹ = I. Nếu det A = 0 thì không tồn tại nghịch đảo vì phép biến đổi đã làm mất thông tin theo một hướng.", tip: "Luôn nhân thử lại để kiểm tra, chỉ mất vài giây." }
          ],
          formula: "det(A) = ad − bc ; A⁻¹ = (1/det A)·[[d, −b], [−c, a]]"
        }
      ]
    },
    {
      title: "Ánh xạ tuyến tính và trị riêng",
      summary: "Xem ánh xạ tuyến tính qua ma trận, đọc hạt nhân và ảnh, rồi tìm hướng bất biến của phép biến đổi.",
      lessons: [
        {
          id: "an1",
          title: "Ánh xạ tuyến tính và ma trận biểu diễn",
          minutes: 20,
          level: "Cơ bản",
          summary: "Kiểm tra một ánh xạ có tuyến tính không và dựng ma trận biểu diễn từ ảnh của các vector cơ sở.",
          points: ["Ánh xạ tuyến tính giữ phép cộng và phép nhân vô hướng.", "Ma trận biểu diễn được xác định bởi ảnh của các vector cơ sở.", "Phép quay, phản xạ, co giãn đều là ánh xạ tuyến tính."],
          steps: [
            { title: "Hai điều kiện cần kiểm tra", body: "Ánh xạ T tuyến tính khi T(u + v) = T(u) + T(v) và T(k·u) = k·T(u). Ánh xạ T(x, y) = (x + 1, y) không tuyến tính vì dịch chuyển gốc tọa độ. Chỉ cần một điều kiện bị vi phạm là đủ kết luận.", tip: "Thử ngay với vector 0: ánh xạ tuyến tính luôn gửi 0 thành 0." },
            { title: "Dựng ma trận từ ảnh cơ sở", body: "Nếu T(1, 0) = (0, 1) và T(0, 1) = (−1, 0) thì ma trận biểu diễn có hai cột là hai ảnh đó: [[0, −1], [1, 0]]. Đây chính là phép quay 90 độ ngược chiều kim đồng hồ. Cách làm này áp dụng cho mọi ánh xạ tuyến tính từ R² vào R².", tip: "Cột thứ nhất là ảnh của e₁, cột thứ hai là ảnh của e₂." },
            { title: "Ghép các phép biến đổi", body: "Quay 90 độ rồi co giãn 2 lần theo trục hoành tương ứng với tích ma trận [[2, 0], [0, 1]]·[[0, −1], [1, 0]] = [[0, −2], [1, 0]]. Thứ tự nhân phản ánh thứ tự thực hiện, đổi thứ tự thường cho kết quả khác.", tip: "Đọc tích ma trận từ phải sang trái theo thứ tự thao tác." }
          ],
          formula: "T(x) = A·x, với các cột của A là ảnh của các vector cơ sở"
        },
        {
          id: "an2",
          title: "Hạt nhân, ảnh và định lý số chiều",
          minutes: 22,
          level: "Trung bình",
          summary: "Tìm không gian nghiệm và không gian cột của ma trận, rồi áp dụng định lý số chiều để kiểm tra kết quả.",
          points: ["Hạt nhân gồm các vector bị ánh xạ về 0.", "Ảnh là không gian sinh bởi các cột của ma trận.", "Số chiều hạt nhân cộng số chiều ảnh bằng số chiều nguồn."],
          steps: [
            { title: "Giải để tìm hạt nhân", body: "Với A = [[1, 2], [2, 4]], giải Ax = 0 cho x₁ + 2x₂ = 0. Nghiệm có dạng t·(−2, 1), nên hạt nhân là một đường thẳng qua gốc và có số chiều 1. Ánh xạ này không đơn ánh vì nhiều vector khác nhau cho cùng một ảnh.", tip: "Hạt nhân chỉ chứa vector 0 khi và chỉ khi các cột độc lập tuyến tính." },
            { title: "Ảnh là không gian cột", body: "Ảnh của A gồm mọi tổ hợp tuyến tính của các cột. Với ma trận trên, hai cột (1, 2) và (2, 4) cùng phương nên ảnh chỉ là một đường thẳng, số chiều 1. Hạng của ma trận chính là số chiều của ảnh.", tip: "Số chiều ảnh bằng hạng, không bằng số cột." },
            { title: "Định lý số chiều", body: "Với ánh xạ từ R² vào R² ở trên: số chiều hạt nhân 1 cộng số chiều ảnh 1 bằng 2, đúng bằng số chiều nguồn. Định lý này là công cụ kiểm tra chéo: nếu tính ra hạt nhân hai chiều thì ảnh chỉ còn 0 chiều, tức ánh xạ đồng nhất bằng 0.", tip: "Dùng định lý để phát hiện lỗi số học khi giải hệ thuần nhất." }
          ],
          formula: "dim(ker T) + dim(im T) = dim(nguồn)"
        },
        {
          id: "an3",
          title: "Trị riêng, vector riêng và chéo hóa",
          minutes: 26,
          level: "Nâng cao",
          summary: "Giải phương trình đặc trưng để tìm trị riêng, tìm vector riêng tương ứng và nhận biết khi nào ma trận chéo hóa được.",
          points: ["Vector riêng là vector không đổi hướng dưới phép biến đổi.", "Trị riêng là nghiệm của det(A − λI) = 0.", "Ma trận chéo hóa được khi có đủ vector riêng độc lập tuyến tính."],
          steps: [
            { title: "Lập phương trình đặc trưng", body: "Với A = [[2, 1], [0, 3]], det(A − λI) = (2 − λ)(3 − λ) = 0 cho hai trị riêng λ = 2 và λ = 3. Ma trận tam giác có trị riêng nằm ngay trên đường chéo, nên có thể đọc nhanh trước khi tính.", tip: "Kiểm tra chéo: tổng trị riêng phải bằng vết của ma trận, ở đây 2 + 3 = 5." },
            { title: "Tìm vector riêng", body: "Với λ = 2, giải (A − 2I)x = 0 được 0·x₁ + x₂ = 0 và x₂ = 0, nên vector riêng là (1, 0). Với λ = 3, hệ cho −x₁ + x₂ = 0, chọn vector riêng (1, 1). Hai vector này độc lập tuyến tính vì không cùng phương.", tip: "Chọn giá trị đơn giản cho một ẩn tự do để có vector riêng gọn." },
            { title: "Chéo hóa và ứng dụng", body: "Đặt P gồm hai vector riêng làm cột, ta có P⁻¹AP là ma trận chéo chứa 2 và 3. Nhờ đó A mũ n được tính nhanh bằng cách lũy thừa các trị riêng, ứng dụng trong mô hình tăng trưởng và chuỗi Markov. Nếu thiếu vector riêng, ma trận không chéo hóa được trên số thực.", tip: "Ma trận đối xứng thực luôn chéo hóa được bằng ma trận trực giao." }
          ],
          formula: "det(A − λI) = 0 ; A = P·D·P⁻¹ với D là ma trận chéo"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Vector trong R²", back: "Một cặp số (x, y) biểu diễn độ dời theo hai trục, có độ dài và hướng.", hint: "Cặp tọa độ gắn với một mũi tên.", example: "u = (3, 4) có độ dài 5." },
    { front: "Tổ hợp tuyến tính", back: "Biểu thức dạng c₁u + c₂v với các hệ số thực c₁, c₂.", hint: "Cộng các bội của vector.", example: "2·(1, 0) + 3·(0, 1) = (2, 3)." },
    { front: "Độc lập tuyến tính", back: "Bộ vector chỉ có nghiệm tầm thường cho phương trình tổ hợp bằng 0.", hint: "Không vector nào là tổ hợp của các vector còn lại.", example: "(1, 0) và (0, 1) độc lập tuyến tính." },
    { front: "Cơ sở của không gian", back: "Bộ vector vừa độc lập tuyến tính vừa sinh ra toàn bộ không gian.", hint: "Đủ để dựng mọi vector, không dư.", example: "(1, 1) và (1, −1) là một cơ sở của R²." },
    { front: "Hạng của ma trận", back: "Số hàng khác 0 trong dạng bậc thang, bằng số chiều của không gian cột.", hint: "Số phương trình độc lập thực sự.", example: "[[1, 2], [2, 4]] có hạng 1." },
    { front: "Định thức ma trận 2x2", back: "det[[a, b], [c, d]] = ad − bc, đo hệ số phóng đại diện tích.", hint: "Tích chéo trừ tích chéo kia.", example: "det[[1, 2], [3, 4]] = −2." },
    { front: "Ma trận khả nghịch", back: "Ma trận vuông có det khác 0, tồn tại A⁻¹ sao cho A·A⁻¹ = I.", hint: "Định thức khác 0 là điều kiện tương đương.", example: "[[2, 0], [0, 3]] có nghịch đảo [[1/2, 0], [0, 1/3]]." },
    { front: "Hạt nhân của ánh xạ", back: "Tập các vector x sao cho T(x) = 0, luôn là một không gian con.", hint: "Nghiệm của hệ thuần nhất.", example: "Phép chiếu lên trục hoành có hạt nhân là trục tung." },
    { front: "Ảnh của ánh xạ", back: "Tập các giá trị T(x), bằng không gian sinh bởi các cột của ma trận biểu diễn.", hint: "Không gian cột.", example: "Ảnh của [[1, 0], [0, 0]] là trục hoành." },
    { front: "Trị riêng", back: "Số λ sao cho tồn tại vector khác 0 thỏa A·x = λ·x, nghiệm của det(A − λI) = 0.", hint: "Hướng không đổi dưới phép biến đổi.", example: "[[2, 1], [0, 3]] có trị riêng 2 và 3." },
    { front: "Vector riêng", back: "Vector khác 0 chỉ bị co giãn bởi phép biến đổi, không đổi hướng.", hint: "Ảnh của nó nằm trên chính nó.", example: "Với λ = 3, vector riêng của [[2, 1], [0, 3]] là (1, 1)." },
    { front: "Định lý số chiều", back: "Với ánh xạ tuyến tính từ không gian n chiều, số chiều hạt nhân cộng số chiều ảnh bằng n.", hint: "Phần bị mất cộng phần còn lại bằng tổng.", example: "Hạt nhân 1 chiều thì ảnh 1 chiều trong R²." }
  ],
  quiz: [
    { q: "Định thức của ma trận [[1, 2], [3, 4]] bằng bao nhiêu?", options: ["−2", "2", "4", "10"], answer: 0, explain: "det = 1·4 − 2·3 = 4 − 6 = −2." },
    { q: "Ma trận [[2, 0], [0, 3]] tác động lên vector (1, 1) cho kết quả nào?", options: ["(3, 2)", "(2, 3)", "(5, 5)", "(0, 0)"], answer: 1, explain: "Nhân hàng với cột: (2·1 + 0·1, 0·1 + 3·1) = (2, 3)." },
    { q: "Hai vector (1, 2) và (2, 4) có quan hệ gì?", options: ["Độc lập tuyến tính", "Trực giao với nhau", "Phụ thuộc tuyến tính", "Lập thành cơ sở của R²"], answer: 2, explain: "Vector thứ hai gấp đôi vector thứ nhất nên bộ phụ thuộc tuyến tính." },
    { q: "Hạng của ma trận [[1, 2, 3], [2, 4, 6]] bằng bao nhiêu?", options: ["3", "0", "6", "1"], answer: 3, explain: "Hàng thứ hai gấp đôi hàng đầu, khử xong chỉ còn một hàng khác 0 nên hạng bằng 1." },
    { q: "Ảnh của ánh xạ x ↦ A·x là không gian nào?", options: ["Không gian sinh bởi các hàng của A", "Không gian sinh bởi các cột của A", "Không gian nghiệm của A·x = 0", "Toàn bộ không gian nguồn"], answer: 1, explain: "Ảnh gồm mọi tổ hợp tuyến tính của các cột, còn không gian nghiệm là hạt nhân." },
    { q: "Các trị riêng của ma trận [[2, 1], [0, 3]] là:", options: ["1 và 2", "0 và 5", "2 và 3", "−2 và −3"], answer: 2, explain: "Ma trận tam giác nên trị riêng nằm trên đường chéo: 2 và 3." },
    { q: "Ma trận biểu diễn phép quay 90 độ ngược chiều kim đồng hồ là:", options: ["[[0, −1], [1, 0]]", "[[1, 0], [0, −1]]", "[[0, 1], [1, 0]]", "[[−1, 0], [0, −1]]"], answer: 0, explain: "e₁ = (1, 0) biến thành (0, 1), e₂ = (0, 1) biến thành (−1, 0), nên hai cột là (0, 1) và (−1, 0)." },
    { q: "Ma trận vuông A khả nghịch khi và chỉ khi:", options: ["A có ít nhất một phần tử khác 0", "Các hàng của A giống nhau", "A là ma trận đối xứng", "det(A) khác 0"], answer: 3, explain: "Định thức khác 0 tương đương với các cột độc lập tuyến tính, tức A khả nghịch." },
    { q: "Hệ n ẩn có hạng r < n thì số nghiệm là:", options: ["Vô nghiệm", "Nghiệm duy nhất", "Vô số nghiệm với n − r tham số tự do", "Đúng r nghiệm"], answer: 2, explain: "Số ẩn bằng hạng cộng số chiều không gian nghiệm, nên còn n − r ẩn tự do." },
    { q: "Tích vô hướng của (1, 2) và (3, −1) bằng:", options: ["5", "1", "−1", "0"], answer: 1, explain: "1·3 + 2·(−1) = 3 − 2 = 1, khác 0 nên hai vector không vuông góc." }
  ],
  lab: {
    kind: "transform",
    title: "Máy biến đổi tuyến tính 2D",
    lead: "Kéo bốn hệ số a, b, c, d để dựng ma trận 2x2, rồi kéo vector v để chọn điểm cần xem. Lưới tọa độ biến dạng theo ma trận, vector màu đậm là ảnh Av của vector gốc.",
    stageLabel: "Lưới biến đổi",
    sliders: [
      { key: "a", label: "a (hàng 1, cột 1)", min: -2, max: 2, step: 0.1, value: 1 },
      { key: "b", label: "b (hàng 1, cột 2)", min: -2, max: 2, step: 0.1, value: 0 },
      { key: "c", label: "c (hàng 2, cột 1)", min: -2, max: 2, step: 0.1, value: 0 },
      { key: "d", label: "d (hàng 2, cột 2)", min: -2, max: 2, step: 0.1, value: 1 },
      { key: "x", label: "Hoành độ vector x", min: -4, max: 4, step: 0.1, value: 2 },
      { key: "y", label: "Tung độ vector y", min: -4, max: 4, step: 0.1, value: 1 }
    ],
    presets: [
      { name: "Đơn vị", values: { a: 1, b: 0, c: 0, d: 1 } },
      { name: "Quay 90 độ", values: { a: 0, b: -1, c: 1, d: 0 } },
      { name: "Phản xạ qua Ox", values: { a: 1, b: 0, c: 0, d: -1 } },
      { name: "Co giãn 2 lần", values: { a: 2, b: 0, c: 0, d: 2 } },
      { name: "Chiếu lên Ox", values: { a: 1, b: 0, c: 0, d: 0 } },
      { name: "Trượt ngang", values: { a: 1, b: 1, c: 0, d: 1 } }
    ],
    controlNote: "Chọn một preset rồi tự chỉnh từng hệ số. Khi định thức về 0, lưới bị ép dẹt thành một đường và ma trận không còn khả nghịch.",
    note: "Diện tích hình bình hành dựng bởi hai vector ảnh bằng trị tuyệt đối của định thức, đây là cách đọc hình học của det(A)."
  },
  teacher: {
    students: [
      { name: "Nguyễn Thùy Dương", progress: 82, score: 8.6, status: "Tốt", note: "Nắm chắc khử Gauss, cần luyện thêm phần chéo hóa." },
      { name: "Trần Anh Khoa", progress: 54, score: 7.1, status: "Đang học", note: "Hay nhầm thứ tự nhân ma trận." },
      { name: "Lê Minh Châu", progress: 93, score: 9.4, status: "Tốt", note: "Làm tốt bài chứng minh cơ sở và số chiều." },
      { name: "Phạm Quốc Huy", progress: 27, score: 5.2, status: "Cần hỗ trợ", note: "Chưa hoàn thành bài độc lập tuyến tính." },
      { name: "Vũ Thanh Trúc", progress: 68, score: 7.9, status: "Đang học", note: "Tiến bộ đều, cần thêm bài định thức cấp 3." },
      { name: "Đỗ Gia Bảo", progress: 46, score: 6.3, status: "Đang học", note: "Nên ôn lại tích vô hướng và hình chiếu." }
    ],
    submissions: [
      { student: "Nguyễn Thùy Dương", lesson: "Bài tập: tìm cơ sở của không gian nghiệm", time: "Hôm qua 20:40", status: "Chờ chấm" },
      { student: "Phạm Quốc Huy", lesson: "Phiếu kiểm tra độc lập tuyến tính", time: "Hôm qua 18:15", status: "Chờ chấm" },
      { student: "Lê Minh Châu", lesson: "Bài tập trị riêng và chéo hóa", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Tư làm bài kiểm tra 20 phút phần khử Gauss, không dùng tài liệu.",
      "Nhóm nào chưa nộp báo cáo bài tập lớn nhắc lại trên nhóm lớp trước thứ Sáu.",
      "Phòng lab mở thêm ca tối thứ Năm để luyện ma trận trên bảng tương tác."
    ]
  },
  className: "Đại số tuyến tính – K26",
  brief: "BTL-02_vectorspace-mon-dai-so-tuyen-tinh.md"
};
