window.BTL_DATA = {
  id: "calculuslab",
  code: "BTL-01",
  name: "CalculusLab",
  monogram: "∫",
  subject: "Toán cao cấp",
  level: "Đại học",
  group: "Toán & Khoa học tự nhiên",
  accent: "#2563eb",
  accent2: "#7c3aed",
  font: "display",
  tagline: "Kéo thanh trượt và thấy đạo hàm, tích phân, giới hạn đang chuyển động.",
  intro: "CalculusLab biến Giải tích 1–2 thành một phòng thí nghiệm trực quan: mỗi định lý có đồ thị để thử, mỗi bài toán có lời giải từng bước, và mỗi chương có thẻ ghi nhớ để ôn nhanh trước kỳ thi.",
  hero: { title: "Giải tích", highlight: "không còn là công thức khô" },
  heroBadge: "Đồ thị sống · Lời giải từng bước",
  labShort: "ĐỒ THỊ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ công thức" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt được thiết kế cho Giải tích: nhìn đồ thị, đi từng bước lập luận và phản xạ công thức.",
  pathLead: "Đi từ trực giác giới hạn, sang đạo hàm, rồi tích phân. Cuối mỗi chương đều có phòng lab để kiểm chứng bằng hình ảnh.",
  features: [
    { badge: "01", title: "Đồ thị tiếp tuyến động", desc: "Kéo x₀ để thấy tiếp tuyến trượt trên parabol, so sánh với cát tuyến khi Δx tiến về 0." },
    { badge: "02", title: "Lời giải từng bước", desc: "Mỗi bài tự luận được tách thành các bước lập luận, có nút tiến lùi và điểm dừng để tự giải trước." },
    { badge: "03", title: "Thẻ công thức & quiz", desc: "Mười hai thẻ công thức cốt lõi kèm trắc nghiệm chấm ngay, giải thích vì sao đúng sai." }
  ],
  modules: [
    {
      title: "Giới hạn & liên tục",
      summary: "Đọc giới hạn bằng đồ thị, hiểu liên tục và chuẩn bị nền cho đạo hàm.",
      lessons: [
        {
          id: "gh1",
          title: "Giới hạn qua đồ thị",
          minutes: 18,
          level: "Cơ bản",
          summary: "Dùng bảng giá trị và đồ thị để hiểu giới hạn tại một điểm, kể cả điểm không xác định.",
          points: ["Giới hạn mô tả xu hướng, không phải giá trị tại điểm.", "Giới hạn trái và phải phải trùng nhau.", "Đồ thị có thể có lỗ hổng mà giới hạn vẫn tồn tại."],
          steps: [
            { title: "Quan sát xu hướng", body: "Cho f(x) = (x² − 1)/(x − 1). Tại x = 1 biểu thức không xác định, nhưng khi x tiến gần 1 từ hai phía, f(x) tiến gần 2. Giới hạn quan tâm đến đích đến, không quan tâm điểm đó có được phép đứng hay không.", tip: "Hãy thử x = 0,9 rồi 0,99 để thấy giá trị tiến dần về 2." },
            { title: "Hai phía phải gặp nhau", body: "Nếu giới hạn trái và giới hạn phải khác nhau, giới hạn hai phía không tồn tại. Ví dụ hàm bậc thang nhảy giá trị tại 0.", tip: "Vẽ nhanh hai mũi tên từ trái và phải vào cùng một điểm." },
            { title: "Rút gọn để nhìn rõ", body: "Với phân thức, phân tích tử thành nhân tử rồi rút gọn giúp khử dạng 0/0. Sau khi rút gọn, thay giá trị vào để nhận giới hạn.", tip: "Chỉ rút gọn khi x khác 1; giới hạn vẫn hợp lệ vì không chạm đúng điểm." }
          ],
          formula: "lim(x→1) (x² − 1)/(x − 1) = lim(x→1) (x + 1) = 2"
        },
        {
          id: "gh2",
          title: "Tính liên tục và ba điều kiện",
          minutes: 16,
          level: "Cơ bản",
          summary: "Kiểm tra một hàm có liên tục tại điểm hay không bằng ba điều kiện ngắn gọn.",
          points: ["Hàm phải xác định tại điểm.", "Giới hạn hai phía phải tồn tại.", "Giá trị hàm phải bằng giới hạn."],
          steps: [
            { title: "Ba câu hỏi kiểm tra", body: "Muốn biết f liên tục tại a, lần lượt hỏi: f(a) có xác định không, giới hạn khi x tiến a có tồn tại không, và hai giá trị đó có bằng nhau không. Chỉ cần một câu trả lời không là đủ kết luận gián đoạn.", tip: "Viết ba dấu kiểm ra giấy trước khi tính." },
            { title: "Phân loại điểm gián đoạn", body: "Gián đoạn loại một khi hai giới hạn một phía hữu hạn nhưng khác nhau. Gián đoạn loại hai khi ít nhất một phía tiến tới vô cực.", tip: "Hàm phân thức thường có tiệm cận đứng tại điểm làm mẫu bằng 0." },
            { title: "Liên tục trên khoảng", body: "Hàm liên tục trên khoảng nếu liên tục tại mọi điểm trong khoảng. Tính chất này bảo đảm định lý giá trị trung gian và nhiều kết quả quan trọng khác.", tip: "Đa thức liên tục trên toàn trục số; phân thức liên tục trên từng khoảng xác định." }
          ],
          formula: "f liên tục tại a ⇔ lim(x→a) f(x) = f(a)"
        },
        {
          id: "gh3",
          title: "Ứng dụng: dạng vô định",
          minutes: 20,
          level: "Trung bình",
          summary: "Xử lý 0/0, ∞/∞ bằng rút gọn, nhân liên hợp và quy tắc L'Hôpital.",
          points: ["Nhận diện dạng vô định trước khi biến đổi.", "Nhân liên hợp hiệu quả với căn thức.", "L'Hôpital chỉ dùng cho 0/0 hoặc ∞/∞."],
          steps: [
            { title: "Nhận diện dạng", body: "Thay giá trị vào trước để biết dạng vô định. Đừng biến đổi mù; chính dạng vô định quyết định công cụ cần dùng.", tip: "Ghi rõ dạng 0/0 hay ∞/∞ ở đầu bài." },
            { title: "Chọn phép biến đổi", body: "Với căn thức, nhân cả tử và mẫu với biểu thức liên hợp. Với đa thức, phân tích nhân tử. Với hàm mũ và logarit, có thể dùng L'Hôpital sau khi kiểm tra điều kiện.", tip: "Ưu tiên biến đổi đại số trước khi đạo hàm." },
            { title: "Kiểm tra lại bằng đồ thị", body: "Sau khi tìm được giới hạn, vẽ nhanh đồ thị hoặc bảng giá trị để xác nhận kết quả không mâu thuẫn.", tip: "Mở phòng lab và quan sát hàm số tiến về giá trị vừa tính." }
          ],
          formula: "lim(x→0) (√(x+1) − 1)/x = 1/2"
        }
      ]
    },
    {
      title: "Đạo hàm & vi phân",
      summary: "Từ hệ số góc tiếp tuyến đến quy tắc tính và bài toán tối ưu.",
      lessons: [
        {
          id: "dh1",
          title: "Đạo hàm là hệ số góc tiếp tuyến",
          minutes: 20,
          level: "Cơ bản",
          summary: "Hiểu đạo hàm qua giới hạn của thương số và hình ảnh tiếp tuyến.",
          points: ["Đạo hàm đo tốc độ thay đổi tức thời.", "Tiếp tuyến là giới hạn của cát tuyến.", "Đạo hàm tại điểm là một con số, không phải hàm."],
          steps: [
            { title: "Từ cát tuyến đến tiếp tuyến", body: "Lấy hai điểm trên đồ thị và tính hệ số góc cát tuyến. Khi điểm thứ hai tiến sát điểm thứ nhất, cát tuyến quay dần thành tiếp tuyến. Giới hạn của hệ số góc chính là đạo hàm.", tip: "Trong phòng lab, kéo Δx nhỏ dần để thấy cát tuyến áp sát tiếp tuyến." },
            { title: "Ý nghĩa hình học", body: "f'(x₀) là độ dốc của tiếp tuyến tại x₀. Độ dốc dương cho biết hàm tăng, âm cho biết hàm giảm, bằng 0 là điểm dừng có thể là cực trị.", tip: "So sánh độ dốc tại hai điểm trên cùng đồ thị." },
            { title: "Ý nghĩa vật lý", body: "Nếu s(t) là quãng đường, đạo hàm là vận tốc tức thời. Đạo hàm của vận tốc là gia tốc. Cùng một công cụ, nhiều cách đọc.", tip: "Đổi đơn vị và kiểm tra thứ nguyên của kết quả." }
          ],
          formula: "f'(x₀) = lim(Δx→0) [f(x₀ + Δx) − f(x₀)] / Δx"
        },
        {
          id: "dh2",
          title: "Bộ quy tắc tính đạo hàm",
          minutes: 22,
          level: "Trung bình",
          summary: "Luyện quy tắc tích, thương, hàm hợp và bảng đạo hàm cơ bản.",
          points: ["Quy tắc tích: (uv)' = u'v + uv'.", "Quy tắc thương cần bình phương mẫu.", "Hàm hợp là nguồn lỗi phổ biến."],
          steps: [
            { title: "Bảng cơ bản", body: "Nắm chắc đạo hàm của lũy thừa, sin, cos, exp và ln. Đây là các viên gạch; mọi bài phức tạp đều quy về chúng.", tip: "Học bảng bằng cách viết lại mỗi ngày 5 phút." },
            { title: "Quy tắc ghép", body: "Tích, thương, hàm hợp là ba cách ghép. Trước khi tính, khoanh vùng cấu trúc ngoài cùng để chọn quy tắc đúng.", tip: "Đọc biểu thức từ ngoài vào trong." },
            { title: "Kiểm tra bằng đạo hàm số", body: "Có thể kiểm tra gần đúng bằng thương số tại một điểm. Nếu sai khác quá lớn, nhiều khả năng bỏ sót đạo hàm hàm hợp.", tip: "Chọn điểm đơn giản như x = 1 để kiểm tra nhanh." }
          ],
          formula: "(u·v)' = u'v + uv' ; (u/v)' = (u'v − uv')/v²"
        },
        {
          id: "dh3",
          title: "Bài toán tối ưu",
          minutes: 24,
          level: "Nâng cao",
          summary: "Dựng hàm mục tiêu, tìm điểm tới hạn và kết luận bằng đạo hàm bậc hai.",
          points: ["Xác định biến và miền ràng buộc.", "Giải f'(x) = 0 để tìm điểm tới hạn.", "So sánh giá trị tại biên và điểm tới hạn."],
          steps: [
            { title: "Mô hình hóa", body: "Đặt biến cho đại lượng cần chọn, viết đại lượng cần tối ưu thành hàm một biến nhờ ràng buộc. Ghi rõ miền xác định vì miền quyết định kết luận.", tip: "Vẽ hình và ghi kích thước bằng chữ trước khi lập công thức." },
            { title: "Tìm điểm tới hạn", body: "Tính đạo hàm, giải phương trình đạo hàm bằng 0 và loại các nghiệm ngoài miền. Điểm tới hạn chỉ là ứng viên, chưa chắc là cực trị toàn cục.", tip: "Lập bảng dấu đạo hàm để thấy chiều biến thiên." },
            { title: "Kết luận có kiểm chứng", body: "So sánh giá trị hàm tại điểm tới hạn với hai biên. Dùng đạo hàm bậc hai hoặc bảng biến thiên để xác nhận cực đại hay cực tiểu.", tip: "Luôn trả lời bằng đơn vị thực tế của bài toán." }
          ],
          formula: "V(r) = πr²(L − 2r), V'(r) = 0 ⇒ r = L/3"
        }
      ]
    },
    {
      title: "Tích phân & chuỗi",
      summary: "Từ tổng Riemann đến tích phân xác định và tiêu chuẩn hội tụ của chuỗi.",
      lessons: [
        {
          id: "tp1",
          title: "Tổng Riemann và diện tích",
          minutes: 20,
          level: "Cơ bản",
          summary: "Chia diện tích thành các hình chữ nhật nhỏ và lấy giới hạn để hiểu tích phân.",
          points: ["Tổng Riemann xấp xỉ diện tích dưới đường cong.", "Số hình chữ nhật càng nhiều, sai số càng nhỏ.", "Tích phân là giới hạn của tổng khi độ rộng tiến về 0."],
          steps: [
            { title: "Chia khoảng", body: "Chia đoạn [a, b] thành n phần bằng nhau. Mỗi phần có chiều rộng Δx = (b − a)/n. Chọn chiều cao bằng giá trị hàm tại một điểm đại diện.", tip: "Bắt đầu với n = 4 để vẽ tay dễ kiểm tra." },
            { title: "Cộng diện tích", body: "Tổng diện tích các hình chữ nhật là xấp xỉ tích phân. Khi hàm dương, tổng này xấp xỉ diện tích dưới đồ thị.", tip: "So sánh xấp xỉ dưới và trên để thấy sai số." },
            { title: "Lấy giới hạn", body: "Cho n tiến tới vô cực, tổng Riemann tiến tới tích phân xác định. Đây là định nghĩa nền tảng, không chỉ là công thức tính.", tip: "Dùng phòng lab để thấy miền tô màu hội tụ khi tăng số hình chữ nhật." }
          ],
          formula: "∫[a→b] f(x) dx = lim(n→∞) Σ f(xᵢ)·Δx"
        },
        {
          id: "tp2",
          title: "Tích phân xác định & Newton–Leibniz",
          minutes: 22,
          level: "Trung bình",
          summary: "Dùng nguyên hàm để tính tích phân và đọc ý nghĩa dấu của kết quả.",
          points: ["Tích phân xác định là một con số.", "Đổi cận khi đổi biến.", "Diện tích hình học dùng trị tuyệt đối."],
          steps: [
            { title: "Nguyên hàm", body: "Tìm một hàm F sao cho F' = f. Nguyên hàm sai khác một hằng số, nhưng tích phân xác định triệt tiêu hằng số đó.", tip: "Kiểm tra lại bằng cách đạo hàm F." },
            { title: "Áp dụng công thức", body: "Tích phân từ a đến b bằng F(b) − F(a). Cần kiểm tra f liên tục trên đoạn lấy tích phân, đặc biệt khi có mẫu thức.", tip: "Viết ngoặc vuông và thay cận cẩn thận để tránh sai dấu." },
            { title: "Đọc kết quả", body: "Kết quả âm cho biết phần lớn đồ thị nằm dưới trục hoành. Diện tích hình học là tích phân của trị tuyệt đối, không phải tích phân có dấu.", tip: "Vẽ đồ thị để kiểm tra dấu trước khi kết luận." }
          ],
          formula: "∫[a→b] f(x) dx = F(b) − F(a), với F' = f"
        },
        {
          id: "tp3",
          title: "Chuỗi số và tiêu chuẩn hội tụ",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt hội tụ và phân kỳ, dùng so sánh và tỉ số để kiểm tra.",
          points: ["Điều kiện cần: số hạng tổng quát tiến về 0.", "Chuỗi hình học hội tụ khi |r| < 1.", "Tiêu chuẩn tỉ số phù hợp với giai thừa và lũy thừa."],
          steps: [
            { title: "Điều kiện cần", body: "Nếu số hạng tổng quát không tiến về 0, chuỗi chắc chắn phân kỳ. Điều kiện này chỉ là cần, không đủ: chuỗi điều hòa có số hạng tiến về 0 nhưng vẫn phân kỳ.", tip: "Kiểm tra điều kiện cần trước để loại nhanh." },
            { title: "So sánh", body: "So sánh với chuỗi đã biết như chuỗi hình học hoặc chuỗi p. Nếu số hạng nhỏ hơn và chuỗi lớn hội tụ thì chuỗi nhỏ hội tụ.", tip: "Ghi rõ bất đẳng thức và chuỗi so sánh." },
            { title: "Tiêu chuẩn tỉ số", body: "Tính giới hạn của tỉ số hai số hạng liên tiếp. Nhỏ hơn 1 thì hội tụ, lớn hơn 1 thì phân kỳ, bằng 1 thì chưa kết luận.", tip: "Cẩn thận với giá trị tuyệt đối khi có dấu âm." }
          ],
          formula: "Σ aₙ hội tụ nếu lim |aₙ₊₁/aₙ| < 1"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Định nghĩa giới hạn", back: "lim(x→a) f(x) = L nếu f(x) tiến gần L khi x tiến gần a từ hai phía.", hint: "Nói về xu hướng, không phải giá trị tại điểm.", example: "lim(x→1) (x²−1)/(x−1) = 2 dù f(1) không xác định." },
    { front: "Đạo hàm tại một điểm", back: "f'(x₀) là giới hạn của thương số biến thiên, bằng hệ số góc tiếp tuyến.", hint: "Hệ số góc tiếp tuyến.", example: "f(x) = x² có f'(2) = 4." },
    { front: "Quy tắc tích", back: "(u·v)' = u'v + uv'.", hint: "Đạo hàm cái này nhân giữ nguyên cái kia.", example: "(x²·sin x)' = 2x·sin x + x²·cos x." },
    { front: "Quy tắc thương", back: "(u/v)' = (u'v − uv')/v².", hint: "Tử có dấu trừ, mẫu bình phương.", example: "(sin x / x)' = (x·cos x − sin x)/x²." },
    { front: "Đạo hàm hàm hợp", back: "[f(g(x))]' = f'(g(x))·g'(x).", hint: "Đạo hàm ngoài nhân đạo hàm trong.", example: "(sin 3x)' = 3·cos 3x." },
    { front: "Điểm tới hạn", back: "Điểm trong miền xác định mà f'(x) = 0 hoặc f'(x) không tồn tại.", hint: "Ứng viên của cực trị.", example: "f(x)=x³ có f'(0)=0 nhưng không đổi dấu." },
    { front: "Quy tắc L'Hôpital", back: "Với dạng 0/0 hoặc ∞/∞, giới hạn của thương bằng giới hạn của thương các đạo hàm.", hint: "Chỉ dùng cho dạng vô định.", example: "lim(x→0) sin x / x = 1." },
    { front: "Tổng Riemann", back: "Xấp xỉ tích phân bằng tổng diện tích các hình chữ nhật trên các khoảng con.", hint: "Chia nhỏ rồi cộng.", example: "n = 100 hình chữ nhật cho xấp xỉ khá sát." },
    { front: "Tích phân xác định", back: "∫[a→b] f(x) dx = F(b) − F(a), với F là một nguyên hàm của f.", hint: "Công thức Newton–Leibniz.", example: "∫[0→1] 2x dx = 1." },
    { front: "Chuỗi hình học", back: "Σ rⁿ hội tụ khi |r| < 1, tổng bằng 1/(1−r) nếu bắt đầu từ n = 0.", hint: "Xét giá trị tuyệt đối của công bội.", example: "1 + 1/2 + 1/4 + … = 2." },
    { front: "Điều kiện cần của chuỗi hội tụ", back: "Nếu Σ aₙ hội tụ thì lim aₙ = 0. Mệnh đề đảo không đúng.", hint: "Chuỗi điều hòa là phản ví dụ.", example: "Σ 1/n có aₙ → 0 nhưng phân kỳ." },
    { front: "Tích phân là gì?", back: "Giới hạn của tổng Riemann khi số khoảng chia tiến tới vô cực, biểu diễn diện tích có dấu.", hint: "Diện tích có dấu dưới đường cong.", example: "Diện tích dưới y = x² từ 0 đến 1 bằng 1/3." }
  ],
  quiz: [
    { q: "Đạo hàm của f(x) = x³ − 3x tại x = 1 bằng bao nhiêu?", options: ["0", "3", "−3", "1"], answer: 0, explain: "f'(x) = 3x² − 3, thay x = 1 được 0." },
    { q: "Giới hạn lim(x→0) sin x / x bằng:", options: ["0", "1", "∞", "Không tồn tại"], answer: 1, explain: "Đây là giới hạn cơ bản, có thể chứng minh bằng hình học hoặc L'Hôpital." },
    { q: "Hàm số liên tục tại a cần điều kiện nào?", options: ["f'(a) tồn tại", "f(a) = lim(x→a) f(x)", "f(a) = 0", "f đồng biến tại a"], answer: 1, explain: "Liên tục cần giá trị hàm bằng giới hạn; khả vi mạnh hơn liên tục." },
    { q: "Quy tắc đạo hàm của sin(3x) là:", options: ["cos(3x)", "3cos(3x)", "−3cos(3x)", "sin(3x)"], answer: 1, explain: "Hàm hợp: đạo hàm ngoài cos nhân đạo hàm trong 3." },
    { q: "Tích phân ∫[0→1] 2x dx bằng:", options: ["0", "1", "2", "1/2"], answer: 1, explain: "Nguyên hàm là x², thay cận được 1 − 0 = 1." },
    { q: "Chuỗi hình học Σ (1/2)ⁿ hội tụ vì:", options: ["Số hạng đầu bằng 1", "|r| < 1", "Các số hạng dương", "Tổng vô hạn"], answer: 1, explain: "Chuỗi hình học hội tụ khi giá trị tuyệt đối của công bội nhỏ hơn 1." },
    { q: "Điểm tới hạn của f(x) = x² − 4x là:", options: ["x = 0", "x = 2", "x = 4", "x = −2"], answer: 1, explain: "f'(x) = 2x − 4 = 0 cho x = 2." },
    { q: "Nếu f'(x) đổi dấu từ dương sang âm tại x₀ thì:", options: ["Cực tiểu tại x₀", "Cực đại tại x₀", "Không có cực trị", "Hàm không liên tục"], answer: 1, explain: "Đạo hàm chuyển từ tăng sang giảm, đồ thị đạt cực đại địa phương." },
    { q: "Tổng Riemann dùng để:", options: ["Tính đạo hàm", "Xấp xỉ tích phân", "Giải phương trình", "Tìm tiệm cận"], answer: 1, explain: "Tổng diện tích hình chữ nhật xấp xỉ tích phân, chính xác hơn khi chia nhiều khoảng." },
    { q: "Trong quy tắc L'Hôpital, điều kiện bắt buộc là:", options: ["Mẫu dương", "Dạng 0/0 hoặc ∞/∞", "Hàm bậc hai", "Tử bằng 0 tại mọi điểm"], answer: 1, explain: "Chỉ áp dụng cho hai dạng vô định này; dùng sai dạng sẽ cho kết quả sai." }
  ],
  lab: {
    kind: "plot",
    title: "Tiếp tuyến trên parabol",
    lead: "Kéo x₀ để di chuyển tiếp tuyến, kéo a và b để đổi dạng parabol. Đường màu vàng là cát tuyến với bước nhảy Δx; khi Δx nhỏ dần, nó áp sát tiếp tuyến.",
    stageLabel: "Đồ thị tương tác",
    xMin: -5, xMax: 5, yMin: -6, yMax: 8,
    readAt: "x0",
    sliders: [
      { key: "a", label: "Hệ số a", min: -1.5, max: 1.5, step: 0.1, value: 1 },
      { key: "b", label: "Hệ số b", min: -3, max: 3, step: 0.1, value: 0 },
      { key: "x0", label: "Điểm x₀", min: -3, max: 3, step: 0.1, value: 1 },
      { key: "dx", label: "Bước Δx", min: 0.2, max: 2.5, step: 0.1, value: 1.6 }
    ],
    curves: [
      { type: "quad", label: "y = ax² + bx", color: "#2563eb", params: { a: "a", b: "b" } },
      { type: "tangent", label: "Tiếp tuyến tại x₀", color: "#7c3aed", params: { a: "a", b: "b", x0: "x0" } },
      { type: "secant", label: "Cát tuyến (x₀, x₀+Δx)", color: "#d97706", params: { a: "a", b: "b", x0: "x0", dx: "dx" } }
    ],
    shade: { from: 0, to: 2, color: "#2563eb" },
    controlNote: "Thu nhỏ Δx để thấy cát tuyến tiến về tiếp tuyến. Vùng tô nhẹ gợi ý diện tích dưới đường cong.",
    note: "Mô hình hoá trực giác đạo hàm bằng giới hạn của hệ số góc cát tuyến."
  },
  teacher: {
    students: [
      { name: "Nguyễn Thu Hà", progress: 78, score: 8.5, status: "Tốt", note: "Nắm chắc đạo hàm, cần luyện chuỗi." },
      { name: "Trần Minh Quân", progress: 52, score: 7.0, status: "Đang học", note: "Hay nhầm dấu khi đổi cận tích phân." },
      { name: "Lê Phương Anh", progress: 91, score: 9.2, status: "Tốt", note: "Có thể làm bài nâng cao về tối ưu." },
      { name: "Phạm Đức Long", progress: 24, score: 5.5, status: "Cần hỗ trợ", note: "Chưa hoàn thành chương giới hạn." },
      { name: "Vũ Khánh Linh", progress: 66, score: 7.8, status: "Đang học", note: "Tiến bộ đều, cần thêm bài tập tích phân." },
      { name: "Đỗ Hoàng Nam", progress: 45, score: 6.4, status: "Đang học", note: "Nên ôn lại quy tắc hàm hợp." }
    ],
    submissions: [
      { student: "Nguyễn Thu Hà", lesson: "Bài tự luận: tối ưu thể tích", time: "Hôm qua 21:10", status: "Chờ chấm" },
      { student: "Phạm Đức Long", lesson: "Phiếu giới hạn qua đồ thị", time: "Hôm qua 19:45", status: "Chờ chấm" },
      { student: "Lê Phương Anh", lesson: "Bài tập chuỗi số", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Sáu học chương tích phân, mang theo máy tính bỏ túi.",
      "Bài kiểm tra giữa kỳ gồm 40% trắc nghiệm và 60% tự luận.",
      "Sinh viên chưa đạt tiến độ 40% liên hệ lớp trưởng để được hỗ trợ."
    ]
  },
  className: "Giải tích 1 – K24",
  brief: "BTL-01_calculuslab-mon-toan-cao-cap.md"
};
