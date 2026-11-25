window.BTL_DATA = {
  id: "statlens",
  code: "BTL-25",
  name: "StatLens",
  monogram: "σ",
  subject: "Xác suất thống kê",
  level: "Đại học",
  group: "Toán & Khoa học tự nhiên",
  accent: "#7c3aed",
  accent2: "#0891b2",
  font: "display",
  tagline: "Kéo tham số phân phối, nhìn diện tích xác suất và đọc p-value bằng hình ảnh.",
  intro: "StatLens đưa Xác suất thống kê ra khỏi trang công thức: mỗi phân phối có đồ thị để kéo thử, mỗi bài ước lượng có máy tính hiện từng bước, mỗi bài kiểm định có phần giải thích vì sao bác bỏ hay không bác bỏ. Sinh viên kiểm chứng đáp số bằng cả con số và hình dạng đường cong.",
  hero: { title: "Xác suất thống kê", highlight: "nhìn thấy bằng đồ thị" },
  heroBadge: "Phân phối tương tác · Kiểm định từng bước",
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
  featureLead: "Ba cách truyền đạt dành riêng cho Xác suất thống kê: nhìn hình dạng phân phối, theo dõi từng bước tính và phản biện một kết luận kiểm định.",
  pathLead: "Đi từ biến ngẫu nhiên, qua phân phối chuẩn, rồi ước lượng và kiểm định. Chương nào cũng có phòng lab để kiểm chứng bằng đồ thị thay vì tin vào công thức.",
  features: [
    { badge: "01", title: "Đồ thị phân phối tương tác", desc: "Kéo μ và σ để thấy đỉnh chuông dịch chuyển, độ tản rộng ra và vùng xác suất 95% co giãn theo." },
    { badge: "02", title: "Máy tính thống kê từng bước", desc: "Nhập mẫu số liệu, xem trung bình, độ lệch chuẩn, sai số biên và khoảng tin cậy hiện dần kèm công thức đã dùng." },
    { badge: "03", title: "Kiểm định có phản biện", desc: "Mỗi bài kiểm định yêu cầu chọn giả thuyết, tra p-value rồi viết kết luận; hệ thống chỉ ra chỗ suy luận còn thiếu." }
  ],
  life: [
    {
      title: "Sổ ghi bạn đi muộn mỗi sáng",
      scene: "Tổ trưởng ghi lại mỗi buổi sáng có bao nhiêu bạn tới muộn trong lớp bốn mươi người. Sau một tháng, phần lớn buổi chỉ hai hoặc ba bạn, vài buổi không có ai, riêng hôm mưa to thì chín bạn. Đem các con số đó xếp thành cột, cả lớp thấy rõ chuyện gì hay xảy ra và chuyện gì hiếm.",
      connect: "Số bạn muộn mỗi buổi là biến ngẫu nhiên đếm được, tần suất lặp lại cho ta bảng phân phối. Trung bình cả tháng là kỳ vọng, mức dao động quanh nó là phương sai, và mỗi bạn muộn độc lập cùng xác suất thì thành nhị thức."
    },
    {
      title: "Nếm một muỗng canh trước khi nêm",
      scene: "Mẹ nấu nồi canh lớn cho cả nhà, không thể húp hết cả nồi nên múc một muỗng nhỏ để nếm. Muỗng lấy ở giữa nồi khác muỗng lấy sát mép, nên mẹ khuấy đều rồi múc hai ba lần ở các chỗ khác nhau mới quyết định thêm muối.",
      connect: "Một muỗng là mẫu, độ mặn cả nồi là tham số chưa biết; múc nhiều muỗng rồi lấy trung bình thì đoán sát hơn, và số muỗng tăng thì sai số giảm. Đó chính là ước lượng điểm, sai số chuẩn và khoảng tin cậy cho trung bình."
    },
    {
      title: "Cân rau ở chợ và cái cân nhà",
      scene: "Mua một ký rau ở chợ, về cân lại bằng cân nhà chỉ được tám lạng rưỡi. Lần đầu nghĩ do cân nhà lệch, nhưng ba lần sau đều hụt đúng chừng ấy, trong khi gói mì cùng cân lại vẫn đủ. Chênh một hai chục gam thì khó nói, chênh cả lạng thì đáng ngờ.",
      connect: "Đây là kiểm định giả thuyết: giả thuyết H0 là cân ở chợ đúng, số đo chênh lệch là bằng chứng. Nếu chênh lệch lớn tới mức khó xảy ra do may rủi, tức p-value nhỏ, thì bác bỏ H0 và kết luận cân có vấn đề."
    }
  ],
  modules: [
    {
      title: "Biến ngẫu nhiên và phân phối xác suất",
      summary: "Gán số cho kết quả phép thử, đọc bảng phân phối và nhận diện ba họ phân phối quen thuộc.",
      lessons: [
        {
          id: "pp1",
          title: "Biến ngẫu nhiên và bảng phân phối",
          minutes: 16,
          level: "Cơ bản",
          summary: "Chuyển kết quả phép thử thành con số để tính được kỳ vọng và phương sai.",
          points: ["Biến ngẫu nhiên gán một số cho mỗi kết quả sơ cấp.", "Tổng xác suất trong bảng phân phối luôn bằng 1.", "Kỳ vọng là trung bình dài hạn, phương sai đo độ tản."],
          steps: [
            { title: "Gán số cho kết quả", body: "Gieo hai đồng xu cân đối, gọi X là số mặt ngửa. Bốn kết quả sơ cấp được gán thành 0, 1, 1 và 2, nhờ vậy ta cộng và so sánh được thay vì mô tả bằng lời. Bảng phân phối liệt kê từng giá trị của X kèm xác suất tương ứng.", tip: "Cộng toàn bộ xác suất trước, nếu khác 1 thì bảng đã sai." },
            { title: "Kỳ vọng là trung bình dài hạn", body: "Kỳ vọng E(X) bằng tổng của giá trị nhân xác suất. Với ví dụ trên, E(X) = 0·0,25 + 1·0,5 + 2·0,25 = 1. Con số 1 không phải là kết quả của một lần gieo mà là mức trung bình nếu lặp lại hàng nghìn lần.", tip: "Kỳ vọng có thể là số không nguyên, ví dụ 1,5 con ngửa." },
            { title: "Phương sai đo độ tản", body: "Tính E(X²) rồi trừ bình phương kỳ vọng để được Var(X). Hai biến ngẫu nhiên cùng kỳ vọng vẫn có thể rất khác nhau về độ rủi ro, nên luôn đọc kèm độ lệch chuẩn.", tip: "Độ lệch chuẩn cùng đơn vị với X nên dễ diễn giải hơn phương sai." }
          ],
          formula: "E(X) = Σ xᵢ·P(X = xᵢ) ; Var(X) = E(X²) − [E(X)]²"
        },
        {
          id: "pp2",
          title: "Phân phối chuẩn và điểm Z",
          minutes: 20,
          level: "Trung bình",
          summary: "Hiểu vai trò của μ, σ và chuẩn hóa mọi phân phối chuẩn về một bảng tra duy nhất.",
          points: ["Chuông đối xứng quanh μ, độ rộng do σ quyết định.", "Z = (X − μ)/σ đưa dữ liệu về chuẩn tắc N(0,1).", "Xác suất là diện tích dưới đường cong."],
          steps: [
            { title: "Hình chuông do hai tham số quyết định", body: "Phân phối chuẩn N(μ, σ²) có đỉnh tại μ và đối xứng hai bên. Khi σ tăng, chuông bè xuống và hai đuôi dày lên, nghĩa là dữ liệu phân tán hơn. Chiều cao nam sinh viên với μ = 170 cm và σ = 6 cm là ví dụ dễ hình dung.", tip: "Trong phòng lab, kéo σ từ 0,5 lên 2,5 để thấy đỉnh hạ thấp rõ rệt." },
            { title: "Chuẩn hóa về Z", body: "Đặt Z = (X − μ)/σ để đưa phân phối bất kỳ về chuẩn tắc. Một sinh viên cao 182 cm ứng với Z = (182 − 170)/6 = 2, tức cao hơn trung bình hai độ lệch chuẩn. Nhờ phép đổi này chỉ cần một bảng tra duy nhất cho mọi bài toán.", tip: "Z âm nghĩa là giá trị nằm dưới trung bình, đừng bỏ dấu." },
            { title: "Đọc xác suất bằng diện tích", body: "Xác suất để X rơi vào khoảng (a, b) chính là diện tích dưới đường cong giữa hai mốc đó. Vùng tô trong lab ứng với khoảng −1,96 đến 1,96, chiếm khoảng 95% tổng diện tích. Quy tắc 68 – 95 – 99,7 thực chất chỉ là ba con số diện tích quen thuộc.", tip: "Vẽ nhanh đường cong và tô vùng cần tính trước khi tra bảng." }
          ],
          formula: "Z = (X − μ)/σ ; P(−1,96 < Z < 1,96) ≈ 0,95"
        },
        {
          id: "pp3",
          title: "Nhị thức và Poisson",
          minutes: 22,
          level: "Trung bình",
          summary: "Chọn đúng mô hình cho biến đếm và biết khi nào được xấp xỉ bằng phân phối khác.",
          points: ["Nhị thức đếm số lần thành công trong n phép thử độc lập.", "Poisson đếm sự kiện hiếm trong một khoảng thời gian.", "Nhị thức xấp xỉ Poisson khi n lớn và p nhỏ."],
          steps: [
            { title: "Nhị thức đếm số lần thành công", body: "X ~ B(n, p) mô tả số lần thành công trong n phép thử độc lập với cùng xác suất p. Một lớp 30 sinh viên, mỗi bạn trả lời đúng một câu với xác suất 0,7 thì số bạn đúng tuân theo B(30; 0,7), kỳ vọng np = 21 bạn.", tip: "Kiểm tra hai điều kiện: số phép thử cố định và xác suất không đổi." },
            { title: "Poisson đếm sự kiện theo thời gian", body: "Poisson với tham số λ mô tả số sự kiện xảy ra trong một khoảng thời gian cố định khi tỉ lệ xuất hiện nhỏ và ổn định. Số cuộc gọi tới tổng đài mỗi 10 phút với λ = 4 là ví dụ quen thuộc; ở phân phối này kỳ vọng và phương sai đều bằng λ.", tip: "λ là số sự kiện trung bình, không phải xác suất." },
            { title: "Khi nào được xấp xỉ", body: "Khi n lớn và p nhỏ, nhị thức B(n, p) xấp xỉ Poisson với λ = np, giúp tính tay nhanh hơn nhiều. Ngược lại, khi np và n(1 − p) đều lớn hơn 5, nhị thức xấp xỉ chuẩn và có thể dùng kiểm định z.", tip: "Ghi rõ điều kiện xấp xỉ trước khi thay công thức, nếu không bài làm mất điểm." }
          ],
          formula: "B(n, p) ≈ Poisson(λ = np) khi n lớn và p nhỏ"
        }
      ]
    },
    {
      title: "Ước lượng thống kê",
      summary: "Từ một mẫu nhỏ suy ra tham số quần thể, kèm sai số và độ tin cậy.",
      lessons: [
        {
          id: "ue1",
          title: "Trung bình mẫu và luật số lớn",
          minutes: 18,
          level: "Cơ bản",
          summary: "Phân biệt tham số quần thể với thống kê mẫu và hiểu vì sao mẫu lớn lại ổn định hơn.",
          points: ["Tham số là số của quần thể, thống kê là số của mẫu.", "Trung bình mẫu là ước lượng không chệch của μ.", "Sai số chuẩn giảm theo căn bậc hai của cỡ mẫu."],
          steps: [
            { title: "Hai tầng số liệu", body: "Chiều cao trung bình của toàn bộ sinh viên một trường là tham số μ, thường không đo được. Ta lấy mẫu 50 bạn, tính trung bình mẫu x̄ rồi dùng nó để ước lượng μ. Ký hiệu phải tách bạch: μ và σ cho quần thể, x̄ và s cho mẫu.", tip: "Đọc đề và khoanh ngay đại lượng nào là của quần thể." },
            { title: "Phân phối của trung bình mẫu", body: "Nếu lấy nhiều mẫu cùng cỡ, các giá trị x̄ sẽ dao động quanh μ theo một phân phối hẹp hơn nhiều. Định lý giới hạn trung tâm cho biết với n đủ lớn, phân phối này xấp xỉ chuông dù quần thể gốc không chuẩn.", tip: "n từ 30 trở lên thường được xem là đủ lớn trong bài tập." },
            { title: "Sai số chuẩn", body: "Sai số chuẩn của trung bình mẫu bằng σ/√n, nên tăng mẫu lên bốn lần chỉ giảm sai số đi một nửa. Với σ = 6 cm và n = 36, sai số chuẩn là 1 cm, nghĩa là x̄ thường lệch μ khoảng 1 cm.", tip: "Muốn giảm sai số một nửa phải tăng cỡ mẫu gấp bốn, không phải gấp đôi." }
          ],
          formula: "SE(x̄) = σ/√n"
        },
        {
          id: "ue2",
          title: "Khoảng tin cậy cho trung bình",
          minutes: 22,
          level: "Trung bình",
          summary: "Dựng khoảng tin cậy 95% và diễn giải đúng ý nghĩa của mức tin cậy.",
          points: ["Khoảng tin cậy = ước lượng điểm ± sai số biên.", "Mức tin cậy nói về quy trình lặp lại, không nói về một khoảng cụ thể.", "σ chưa biết thì dùng t thay z."],
          steps: [
            { title: "Công thức và các thành phần", body: "Khoảng tin cậy 95% cho μ có dạng x̄ ± 1,96·σ/√n khi biết σ. Với x̄ = 170 cm, σ = 6 cm, n = 36, sai số biên là 1,96 cm nên khoảng là 168,04 đến 171,96 cm. Ba thành phần cần kiểm tra là mức tin cậy, độ tản và cỡ mẫu.", tip: "Viết đơn vị vào hai đầu khoảng, đừng chỉ ghi hai con số trần." },
            { title: "Diễn giải cho đúng", body: "Phát biểu đúng là: nếu lặp lại quy trình lấy mẫu rất nhiều lần thì khoảng 95% các khoảng thu được sẽ chứa μ. Không được nói rằng μ có 95% xác suất nằm trong khoảng vừa tính, vì μ là hằng số chứ không phải biến ngẫu nhiên.", tip: "Câu trả lời chuẩn luôn nhắc tới quy trình lấy mẫu lặp lại." },
            { title: "Khi σ chưa biết", body: "Thực tế thường chỉ có độ lệch chuẩn mẫu s, khi đó dùng phân phối t với n − 1 bậc tự do. Với n = 36, giá trị t gần 2,03 thay vì 1,96, khoảng rộng hơn một chút để bù cho việc ước lượng thêm một tham số.", tip: "Cỡ mẫu càng nhỏ, khoảng t càng rộng so với khoảng z." }
          ],
          formula: "x̄ ± t(0,975; n−1)·s/√n"
        },
        {
          id: "ue3",
          title: "Chọn cỡ mẫu và sai số biên",
          minutes: 24,
          level: "Nâng cao",
          summary: "Từ sai số cho phép suy ngược ra số quan sát cần thu thập.",
          points: ["Sai số biên tỉ lệ nghịch với căn bậc hai của n.", "Cỡ mẫu phải làm tròn lên.", "Tăng mức tin cậy thì cỡ mẫu cũng tăng."],
          steps: [
            { title: "Đặt bài toán ngược", body: "Giảng viên muốn ước lượng điểm trung bình môn với sai số không quá 0,3 điểm ở mức tin cậy 95%. Biết σ = 1,5 điểm, ta giải 1,96·1,5/√n ≤ 0,3 để tìm n. Kết quả n ≥ 96,04 nên cần ít nhất 97 sinh viên.", tip: "Luôn làm tròn lên, làm tròn xuống là vi phạm yêu cầu sai số." },
            { title: "Cân nhắc chi phí", body: "Tăng mức tin cậy lên 99% đổi hệ số 1,96 thành 2,58, khiến cỡ mẫu tăng gần 75%. Trong khảo sát thực tế, nhóm phải cân bằng giữa độ chính xác và thời gian thu thập, đặc biệt khi mỗi phiếu mất 15 phút.", tip: "Trình bày cả chi phí và độ chính xác để bảo vệ lựa chọn của nhóm." },
            { title: "Kiểm tra sau khi thu thập", body: "Nếu chỉ thu được 80 phiếu, sai số biên thực tế là 1,96·1,5/√80 ≈ 0,33 điểm, lớn hơn mục tiêu. Khi đó phải báo cáo trung thực và nới mục tiêu, không được giữ nguyên con số 0,3 trong báo cáo.", tip: "Tính lại sai số từ số liệu thật trước khi viết kết luận." }
          ],
          formula: "n ≥ (z·σ/e)²"
        }
      ]
    },
    {
      title: "Kiểm định giả thuyết",
      summary: "Đặt giả thuyết, tính thống kê kiểm định và ra quyết định có căn cứ.",
      lessons: [
        {
          id: "kd1",
          title: "H0, H1 và p-value",
          minutes: 20,
          level: "Trung bình",
          summary: "Hiểu p-value là xác suất của dữ liệu khi giả thuyết không đúng, không phải xác suất H0 đúng.",
          points: ["H0 là mệnh đề mặc định, H1 là điều cần tìm bằng chứng.", "p-value nhỏ là bằng chứng chống lại H0.", "So p-value với α để kết luận, không so với 0,5."],
          steps: [
            { title: "Phát biểu cặp giả thuyết", body: "Muốn kiểm tra máy rót có đúng 500 ml không, đặt H0: μ = 500 và H1: μ ≠ 500. H0 luôn chứa dấu bằng và là điều bị buộc tội; H1 mới là điều ta cần bằng chứng để ủng hộ. Chọn kiểm định hai phía vì sai lệch cả trên lẫn dưới đều là lỗi.", tip: "Từ khóa khác hay lớn hơn trong đề cho biết kiểm định một phía." },
            { title: "p-value nghĩa là gì", body: "p-value là xác suất quan sát được dữ liệu lệch cực đoan như hiện tại hoặc hơn, giả sử H0 đúng. Với mẫu 40 chai, trung bình 498,2 ml, p-value 0,03 nói rằng dữ liệu như vậy khá hiếm nếu máy thật sự rót đúng 500 ml.", tip: "p-value không phải xác suất H0 đúng, đây là hiểu nhầm phổ biến nhất." },
            { title: "Ra quyết định", body: "So p-value với mức ý nghĩa α, thường 0,05. Nếu p-value nhỏ hơn α thì bác bỏ H0, ngược lại thì chưa đủ bằng chứng bác bỏ. Câu kết luận phải gắn với ngữ cảnh: dây chuyền có dấu hiệu lệch chuẩn rót và cần hiệu chỉnh.", tip: "Không bác bỏ H0 không có nghĩa là H0 đúng, chỉ là chưa đủ bằng chứng." }
          ],
          formula: "Bác bỏ H0 khi p-value < α"
        },
        {
          id: "kd2",
          title: "Kiểm định z và t",
          minutes: 24,
          level: "Nâng cao",
          summary: "Chọn đúng thống kê kiểm định theo việc biết hay chưa biết phương sai quần thể.",
          points: ["Dùng z khi biết σ hoặc mẫu rất lớn.", "Dùng t khi σ chưa biết và mẫu nhỏ.", "Kiểm định hai phía chia đôi α ở hai đuôi."],
          steps: [
            { title: "Chọn thống kê", body: "Với σ đã biết, thống kê z = (x̄ − μ₀)/(σ/√n) tuân theo chuẩn tắc. Với mẫu 36 chai, x̄ = 498,2, σ = 5, μ₀ = 500, ta được z = −2,16. Trị tuyệt đối 2,16 lớn hơn 1,96 nên bác bỏ H0 ở mức 5%.", tip: "Viết công thức trước, thay số sau, tránh nhầm dấu của tử." },
            { title: "Khi phải dùng t", body: "Nếu chỉ có độ lệch chuẩn mẫu s và n nhỏ, thống kê t = (x̄ − μ₀)/(s/√n) với n − 1 bậc tự do. Với n = 12, giá trị tới hạn hai phía ở mức 5% là 2,201, rộng hơn nhiều so với 1,96, nên cùng một chênh lệch có thể không còn ý nghĩa.", tip: "Bậc tự do luôn là n − 1 với bài toán một mẫu." },
            { title: "Đọc kết quả theo ngữ cảnh", body: "Bác bỏ H0 chỉ nói rằng chênh lệch khó xảy ra do ngẫu nhiên, chưa nói mức chênh lệch lớn đến đâu. Chênh 1,8 ml trên chai 500 ml có thể vô hại về thương mại nhưng vẫn có ý nghĩa thống kê khi mẫu đủ lớn. Báo cáo nên kèm khoảng tin cậy để người đọc thấy độ lớn thật.", tip: "Luôn báo cáo cả p-value và khoảng tin cậy, đừng chỉ đưa một con số." }
          ],
          formula: "z = (x̄ − μ₀)/(σ/√n) ; t = (x̄ − μ₀)/(s/√n)"
        },
        {
          id: "kd3",
          title: "Sai lầm loại I, loại II và lực kiểm định",
          minutes: 22,
          level: "Nâng cao",
          summary: "Cân bằng rủi ro kết luận sai và hiểu vì sao cỡ mẫu quyết định sức mạnh của kiểm định.",
          points: ["Loại I là bác bỏ H0 khi H0 đúng, xác suất bằng α.", "Loại II là không bác bỏ khi H1 đúng, xác suất bằng β.", "Lực kiểm định là 1 − β, tăng khi mẫu lớn hơn."],
          steps: [
            { title: "Hai kiểu sai lầm", body: "Trong kiểm định thuốc, sai lầm loại I là kết luận thuốc có hiệu quả khi thực tế không có, rất nguy hiểm cho bệnh nhân. Sai lầm loại II là bỏ sót một thuốc thật sự tốt, làm mất cơ hội điều trị. Giảm α sẽ kéo theo tăng β nếu giữ nguyên cỡ mẫu.", tip: "Gắn mỗi kiểu sai lầm với một hậu quả thực tế để nhớ lâu." },
            { title: "Lực kiểm định", body: "Lực kiểm định 1 − β là xác suất phát hiện đúng khi H1 đúng, thường mong muốn từ 0,8 trở lên. Lực tăng khi chênh lệch thật lớn hơn, độ tản nhỏ hơn hoặc cỡ mẫu lớn hơn. Một nghiên cứu với 12 mẫu thường có lực rất thấp dù hiệu ứng thật tồn tại.", tip: "Trước khi thu thập, hãy tính cỡ mẫu cần cho lực 0,8." },
            { title: "Đạo đức trong báo cáo", body: "Chọn α sau khi đã thấy p-value là hành vi làm đẹp số liệu, khiến tỉ lệ sai lầm loại I thực tế cao hơn công bố. Quy trình đúng là cố định α, cỡ mẫu và cách phân tích trước khi thu thập, rồi báo cáo đủ mọi kết quả kể cả kết quả không mong muốn.", tip: "Ghi rõ α và cỡ mẫu trong phần phương pháp, không chỉ trong phần kết quả." }
          ],
          formula: "P(sai lầm loại I) = α ; P(sai lầm loại II) = β ; lực = 1 − β"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Biến ngẫu nhiên", back: "Hàm gán một giá trị số cho mỗi kết quả của phép thử ngẫu nhiên.", hint: "Biến đổi kết quả thành con số.", example: "Gieo hai đồng xu, X là số mặt ngửa nhận giá trị 0, 1, 2." },
    { front: "Kỳ vọng E(X)", back: "Tổng của giá trị nhân xác suất tương ứng, là trung bình dài hạn của X.", hint: "Trung bình có trọng số theo xác suất.", example: "X nhận 0, 1, 2 với xác suất 0,25; 0,5; 0,25 thì E(X) = 1." },
    { front: "Phương sai Var(X)", back: "E(X²) − [E(X)]², đo mức phân tán của X quanh kỳ vọng.", hint: "Bình phương trung bình trừ bình phương trung bình.", example: "Hai biến cùng kỳ vọng 1 vẫn có thể có phương sai rất khác nhau." },
    { front: "Phân phối chuẩn N(μ, σ²)", back: "Phân phối liên tục đối xứng hình chuông, đỉnh tại μ, độ rộng do σ quyết định.", hint: "Chuông đối xứng, hai tham số.", example: "Chiều cao nam sinh viên với μ = 170 cm và σ = 6 cm." },
    { front: "Điểm chuẩn hóa Z", back: "Z = (X − μ)/σ, đưa mọi phân phối chuẩn về chuẩn tắc N(0,1).", hint: "Đo bằng số độ lệch chuẩn.", example: "X = 182, μ = 170, σ = 6 cho Z = 2." },
    { front: "Quy tắc 68 – 95 – 99,7", back: "Khoảng μ ± 1σ, ± 2σ, ± 3σ chứa tương ứng khoảng 68%, 95%, 99,7% dữ liệu chuẩn.", hint: "Ba mốc độ lệch chuẩn.", example: "Khoảng 170 ± 6 cm chứa khoảng 68% sinh viên." },
    { front: "Phân phối nhị thức B(n, p)", back: "Số lần thành công trong n phép thử độc lập, cùng xác suất p; kỳ vọng np.", hint: "Đếm thành công trong n lần thử.", example: "B(30; 0,7) có kỳ vọng 21 bạn trả lời đúng." },
    { front: "Phân phối Poisson", back: "Số sự kiện hiếm trong khoảng thời gian cố định; kỳ vọng và phương sai đều bằng λ.", hint: "Đếm sự kiện theo thời gian.", example: "Số cuộc gọi mỗi 10 phút với λ = 4." },
    { front: "Sai số chuẩn của trung bình mẫu", back: "SE = σ/√n, cho biết mức dao động của x̄ quanh μ.", hint: "Chia độ lệch chuẩn cho căn cỡ mẫu.", example: "σ = 6 cm, n = 36 cho SE = 1 cm." },
    { front: "Khoảng tin cậy 95%", back: "Khoảng x̄ ± 1,96·σ/√n; nếu lặp lại quy trình, khoảng 95% các khoảng chứa μ.", hint: "Ước lượng điểm cộng trừ sai số biên.", example: "x̄ = 170, SE = 1 cho khoảng 168,04 đến 171,96." },
    { front: "p-value", back: "Xác suất có dữ liệu lệch cực đoan như đã quan sát, giả sử H0 đúng.", hint: "Không phải xác suất H0 đúng.", example: "p-value 0,03 nhỏ hơn α = 0,05 nên bác bỏ H0." },
    { front: "Sai lầm loại I và loại II", back: "Loại I là bác bỏ H0 đúng, xác suất α; loại II là bỏ sót H1 đúng, xác suất β.", hint: "Một cái oan, một cái sót.", example: "α = 0,05 nghĩa là 5% lần bác bỏ sai khi H0 đúng." }
  ],
  quiz: [
    { q: "Phân phối chuẩn N(170, 36) có độ lệch chuẩn bằng bao nhiêu?", options: ["36", "18", "6", "170"], answer: 2, explain: "Ký hiệu N(μ, σ²) nên phương sai là 36, độ lệch chuẩn σ = 6." },
    { q: "Một giá trị có Z = −1,5 nghĩa là:", options: ["Nằm dưới trung bình 1,5 độ lệch chuẩn", "Nằm trên trung bình 1,5 độ lệch chuẩn", "Có xác suất 1,5%", "Là giá trị nhỏ nhất của mẫu"], answer: 0, explain: "Z âm cho biết giá trị nằm dưới μ, độ lớn 1,5 là số độ lệch chuẩn." },
    { q: "Khi nào dùng phân phối t thay cho z?", options: ["Khi mẫu lớn hơn 100", "Khi biết σ của quần thể", "Khi dữ liệu không chuẩn", "Khi chưa biết σ và mẫu nhỏ"], answer: 3, explain: "Phải ước lượng thêm σ bằng s, nên dùng t với n − 1 bậc tự do." },
    { q: "p-value bằng 0,04 và α = 0,05. Kết luận đúng là:", options: ["Chấp nhận H1 là đúng tuyệt đối", "Bác bỏ H0 ở mức ý nghĩa 5%", "Không bác bỏ H0", "Cần tăng α lên 0,01"], answer: 1, explain: "p-value nhỏ hơn α nên bác bỏ H0; đây không phải bằng chứng tuyệt đối." },
    { q: "X ~ B(20; 0,3). Kỳ vọng của X bằng:", options: ["0,3", "20", "6", "14"], answer: 2, explain: "Kỳ vọng của nhị thức là np = 20 · 0,3 = 6." },
    { q: "Sai số chuẩn của trung bình mẫu giảm khi:", options: ["Cỡ mẫu tăng", "Độ lệch chuẩn tăng", "Mức tin cậy tăng", "Số biến tăng"], answer: 0, explain: "SE = σ/√n nên n tăng làm SE giảm, dù tốc độ giảm chậm dần." },
    { q: "Phát biểu nào đúng về khoảng tin cậy 95%?", options: ["Có 95% xác suất μ nằm trong khoảng vừa tính", "95% dữ liệu mẫu nằm trong khoảng", "Nếu lặp lại quy trình, khoảng 95% các khoảng chứa μ", "Khoảng chứa 95% giá trị của quần thể"], answer: 2, explain: "Mức tin cậy nói về tỉ lệ thành công của quy trình lấy mẫu lặp lại, không nói về một khoảng cụ thể." },
    { q: "Sai lầm loại II xảy ra khi:", options: ["Bác bỏ H0 trong khi H0 đúng", "Chọn sai mức ý nghĩa", "Tính sai thống kê kiểm định", "Không bác bỏ H0 trong khi H1 đúng"], answer: 3, explain: "Đó là bỏ sót hiệu ứng thật, xác suất bằng β." },
    { q: "Với cùng dữ liệu, tăng cỡ mẫu lên bốn lần thì sai số chuẩn:", options: ["Giảm còn một phần tư", "Giảm còn một nửa", "Không đổi", "Tăng gấp đôi"], answer: 1, explain: "SE tỉ lệ với 1/√n, nên n gấp bốn chỉ làm SE giảm một nửa." },
    { q: "Poisson với λ = 3 có phương sai bằng:", options: ["3", "9", "1,73", "0,3"], answer: 0, explain: "Với phân phối Poisson, kỳ vọng và phương sai đều bằng λ." }
  ],
  lab: {
    kind: "plot",
    title: "Phân phối chuẩn dưới bàn tay",
    lead: "Kéo μ để dịch đỉnh chuông, kéo σ để thay độ tản và kéo x₀ để đọc mật độ cùng độ dốc tại điểm đó. Vùng tô là xác suất trong khoảng từ −1,96 đến 1,96, đúng bằng 0,95 khi μ = 0 và σ = 1.",
    stageLabel: "Đồ thị tương tác",
    controlNote: "Đường đậm là phân phối đang khảo sát, đường mảnh là chuẩn tắc N(0,1) để so sánh. Đưa σ về 0,5 rồi 2,5 để thấy đỉnh cao thấp khác nhau.",
    note: "Mô hình hóa quan hệ giữa tham số và hình dạng phân phối, đồng thời biến xác suất thành diện tích nhìn thấy được.",
    xMin: -6,
    xMax: 6,
    yMin: 0,
    yMax: 1.25,
    readAt: "x0",
    sliders: [
      { key: "mu", label: "Trung bình μ", min: -3, max: 3, step: 0.1, value: 0 },
      { key: "sigma", label: "Độ lệch chuẩn σ", min: 0.4, max: 2.5, step: 0.05, value: 1 },
      { key: "x0", label: "Điểm đọc x₀", min: -4, max: 4, step: 0.1, value: 1 }
    ],
    curves: [
      { type: "normal", label: "X ~ N(μ, σ²)", color: "#7c3aed", params: { mu: "mu", sigma: "sigma" } },
      { type: "normal", label: "Chuẩn tắc N(0,1)", color: "#0891b2", params: { mu: 0, sigma: 1 } }
    ],
    shade: { from: -1.96, to: 1.96, color: "#7c3aed" }
  },
  teacher: {
    students: [
      { name: "Nguyễn Thu Hà", progress: 82, score: 8.7, status: "Tốt", note: "Đọc p-value chắc, cần luyện khoảng tin cậy với t." },
      { name: "Trần Minh Quân", progress: 55, score: 7.1, status: "Đang học", note: "Hay nhầm phương sai với độ lệch chuẩn." },
      { name: "Lê Phương Anh", progress: 93, score: 9.4, status: "Tốt", note: "Làm tốt bài kiểm định hai phía." },
      { name: "Phạm Đức Long", progress: 28, score: 5.2, status: "Cần hỗ trợ", note: "Chưa nộp bài chương phân phối xác suất." },
      { name: "Vũ Khánh Linh", progress: 68, score: 7.9, status: "Đang học", note: "Tiến bộ ở phần chuẩn hóa Z, cần thêm bài nhị thức." },
      { name: "Đỗ Hoàng Nam", progress: 47, score: 6.5, status: "Đang học", note: "Nên ôn lại điều kiện dùng xấp xỉ Poisson." }
    ],
    submissions: [
      { student: "Nguyễn Thu Hà", lesson: "Bài kiểm định z cho trung bình", time: "Hôm qua 22:05", status: "Chờ chấm" },
      { student: "Phạm Đức Long", lesson: "Phiếu bảng phân phối xác suất", time: "Hôm qua 20:10", status: "Chờ chấm" },
      { student: "Lê Phương Anh", lesson: "Bài khoảng tin cậy 95%", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm tuần này học kiểm định hai phía, mang theo bảng phân phối t.",
      "Bài giữa kỳ gồm 50% trắc nghiệm và 50% bài toán có trình bày các bước.",
      "Sinh viên chưa đạt 40% tiến độ liên hệ lớp trưởng để nhận bộ bài tập bổ trợ."
    ]
  },
  className: "Xác suất thống kê – K26",
  brief: "BTL-25_statlens-mon-xac-suat-thong-ke.md"
};
