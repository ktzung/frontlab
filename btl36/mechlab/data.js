window.BTL_DATA = {
  id: "mechlab",
  code: "BTL-26",
  name: "MechLab",
  monogram: "N",
  subject: "Kỹ thuật cơ khí",
  level: "Đại học",
  group: "Kỹ thuật & Kiến trúc",
  accent: "#b45309",
  accent2: "#334155",
  font: "display",
  tagline: "Từ hình chiếu trên bản vẽ đến ứng suất trong dầm, tất cả đều kiểm chứng được trên một màn hình.",
  intro: "MechLab dạy đọc bản vẽ kỹ thuật, tính lực và kiểm tra sức bền bằng công cụ trực quan: mỗi hình chiếu có lưới để dựng lại, mỗi công thức có máy tính hiện từng bước và mỗi dầm có mô phỏng độ võng theo tải trọng. Sinh viên thấy con số và hình dạng biến dạng đi cùng nhau.",
  hero: { title: "Kỹ thuật cơ khí", highlight: "nhìn thấy lực và biến dạng" },
  heroBadge: "Bản vẽ 2D · Máy tính sức bền",
  labShort: "MÔ PHỎNG",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ công thức" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho Kỹ thuật cơ khí: dựng lại bản vẽ, theo dõi phép tính ứng suất và quyết định an toàn dựa trên số liệu.",
  pathLead: "Bắt đầu từ đọc bản vẽ và dung sai, chuyển sang sức bền vật liệu với kéo, uốn, xoắn, rồi kết thúc ở chi tiết máy và hệ số an toàn. Phòng lab mô phỏng dầm chịu tải xuất hiện xuyên suốt.",
  features: [
    { badge: "01", title: "Bản vẽ CAD 2D tương tác", desc: "Dựng hình chiếu trên lưới, thêm đường kích thước và bật tắt lớp nét khuất để hiểu quy ước bản vẽ." },
    { badge: "02", title: "Máy tính ứng suất từng bước", desc: "Nhập lực, tiết diện và loại ứng suất, xem công thức, đơn vị và kết quả trung gian trước khi ra đáp số." },
    { badge: "03", title: "Bài tập đạt hay nguy hiểm", desc: "So sánh ứng suất tính được với ứng suất cho phép, kết luận kèm lý do và đề xuất tăng tiết diện khi cần." }
  ],
  modules: [
    {
      title: "Bản vẽ kỹ thuật và dung sai",
      summary: "Đọc hình chiếu, ghi kích thước đúng chuẩn và hiểu ý nghĩa của các ký hiệu lắp ghép.",
      lessons: [
        {
          id: "bv1",
          title: "Hình chiếu vuông góc",
          minutes: 18,
          level: "Cơ bản",
          summary: "Dựng ba hình chiếu của một chi tiết và phân biệt nét thấy với nét khuất.",
          points: ["Mỗi hướng nhìn cho một hình chiếu vuông góc.", "Ba hình chiếu đứng, bằng, cạnh đặt theo đúng vị trí quy ước.", "Cạnh khuất vẽ bằng nét đứt mảnh."],
          steps: [
            { title: "Chọn hướng nhìn chính", body: "Với chi tiết dạng chữ L, hướng nhìn chính là hướng thể hiện nhiều đặc điểm nhất, thường là mặt trước có bậc. Từ hướng đó ta có hình chiếu đứng, chiếu sang trái được hình chiếu cạnh, chiếu từ trên xuống được hình chiếu bằng.", tip: "Chọn hướng chính sao cho số nét khuất ít nhất." },
            { title: "Đặt ba hình chiếu", body: "Hình chiếu bằng nằm dưới hình chiếu đứng, hình chiếu cạnh nằm bên phải hình chiếu đứng. Các cạnh phải gióng thẳng hàng: chiều dài gióng dọc, chiều cao gióng ngang. Đặt sai vị trí là lỗi trình bày bị trừ điểm ngay.", tip: "Kẻ mờ các đường gióng trước khi vẽ hình, giống cách dựng trên giấy A3." },
            { title: "Xử lý cạnh khuất", body: "Rãnh bên trong chi tiết nếu bị mặt trước che sẽ hiện thành nét đứt. Khi rãnh trùng với trục đối xứng, có thể dùng nét tâm thay vì vẽ đủ hai nét đứt. Trong phòng lab, bật lớp nét khuất để thấy rãnh xuất hiện đúng vị trí.", tip: "Nét đứt mảnh hơn nét thấy, đừng vẽ cùng độ đậm." }
          ],
          formula: "Hình chiếu bằng dưới hình chiếu đứng, hình chiếu cạnh bên phải hình chiếu đứng"
        },
        {
          id: "bv2",
          title: "Ghi kích thước và dung sai",
          minutes: 22,
          level: "Trung bình",
          summary: "Ghi đủ kích thước cần chế tạo và đọc được ký hiệu dung sai trên bản vẽ.",
          points: ["Kích thước phải đủ để chế tạo, không thừa, không trùng.", "Dung sai là khoảng cho phép của kích thước thực.", "Ký hiệu như Ø40 h7 gồm đường kính và miền dung sai."],
          steps: [
            { title: "Nguyên tắc ghi kích thước", body: "Mỗi kích thước chỉ ghi một lần và đặt ở hình thể hiện rõ nhất. Chuỗi kích thước phải khép kín theo một hướng, không tạo vòng kín gây mâu thuẫn. Với tấm đế 120 × 80 mm có bốn lỗ, chỉ cần khoảng cách lỗ và kích thước bao, không ghi lại từng đoạn.", tip: "Đếm số kích thước cần thiết trước khi đặt bút, tránh ghi bù." },
            { title: "Đọc một ký hiệu dung sai", body: "Ký hiệu Ø40 h7 cho biết đường kính danh nghĩa 40 mm, chữ h là miền dung sai trục, số 7 là cấp chính xác. Tra bảng được sai lệch trên 0 và dưới −25 micromet, nên kích thước thực phải nằm trong 39,975 đến 40,000 mm. Miền H viết hoa dành cho lỗ.", tip: "Chữ thường là trục, chữ in hoa là lỗ, đây là quy ước dễ nhớ." },
            { title: "Dung sai hình học", body: "Ngoài kích thước, bản vẽ còn ghi dung sai hình dạng và vị trí như độ song song 0,05 mm hay độ đồng tâm 0,02 mm trong khung chữ nhật. Những sai lệch này ảnh hưởng trực tiếp đến khả năng lắp và tuổi thọ ổ, nên không được bỏ qua khi chế tạo.", tip: "Khung dung sai luôn có ký hiệu, trị số và ô chuẩn tham chiếu." }
          ],
          formula: "Kích thước thực nằm trong [giới hạn dưới, giới hạn trên]"
        },
        {
          id: "bv3",
          title: "Lắp ghép và chuỗi kích thước",
          minutes: 24,
          level: "Nâng cao",
          summary: "Tính khe hở lắp ghép và giải chuỗi kích thước để phân bổ dung sai hợp lý.",
          points: ["Lắp ghép có khe hở, có độ dôi hoặc trung gian.", "Khe hở bằng hiệu kích thước lỗ và trục.", "Chuỗi kích thước có một khâu khép kín."],
          steps: [
            { title: "Ba loại lắp ghép", body: "Lỗ Ø40H7 ghép với trục Ø40h6 cho khe hở nhỏ, lắp trượt nhẹ và tháo được bằng tay. Ghép với trục Ø40s6 lại tạo độ dôi, phải ép hoặc nung nóng mới lắp, phù hợp mối ghép không tháo. Loại trung gian có thể có khe hở hoặc độ dôi tùy chi tiết thực tế.", tip: "Ghi rõ loại lắp ghép trong ghi chú kỹ thuật, đừng chỉ ghi ký hiệu." },
            { title: "Tính khe hở", body: "Khe hở lớn nhất bằng lỗ lớn nhất trừ trục nhỏ nhất, khe hở nhỏ nhất bằng lỗ nhỏ nhất trừ trục lớn nhất. Với H7 và h6, khe hở nhỏ nhất bằng 0, nghĩa là có thể lắp sít nhưng không kẹt. Sai một bảng tra là hỏng cả mối ghép khi gia công hàng loạt.", tip: "Luôn tính cả hai cực trị, đừng chỉ tính khe hở danh nghĩa." },
            { title: "Giải chuỗi kích thước", body: "Khi một chi tiết có nhiều kích thước nối tiếp, khâu khép kín là kích thước còn lại sau khi gia công các khâu thành phần. Muốn khâu khép kín đạt yêu cầu, phải chọn khâu bù và phân bổ dung sai theo mức độ khó gia công. Khâu khó gia công nhất nên được nới rộng dung sai.", tip: "Vẽ sơ đồ chuỗi bằng mũi tên trước khi tính, tránh nhầm dấu." }
          ],
          formula: "Khe hở = D_lỗ − d_trục"
        }
      ]
    },
    {
      title: "Sức bền vật liệu",
      summary: "Ba trạng thái chịu lực cơ bản của thanh: kéo nén, uốn và xoắn.",
      lessons: [
        {
          id: "sb1",
          title: "Kéo – nén và ứng suất pháp",
          minutes: 20,
          level: "Cơ bản",
          summary: "Tính ứng suất pháp trên thanh chịu lực dọc và kiểm tra biến dạng đàn hồi.",
          points: ["Ứng suất pháp σ = F/A, đơn vị MPa.", "Biến dạng tỉ đối ε = ΔL/L.", "Định luật Hooke σ = E·ε trong miền đàn hồi."],
          steps: [
            { title: "Xác định lực và tiết diện", body: "Một thanh thép tròn đường kính 20 mm chịu kéo 50 kN có diện tích A = πd²/4 = 314 mm². Ứng suất pháp là σ = 50000/314 ≈ 159 MPa. Đổi kN sang N trước khi chia, đây là lỗi đơn vị hay gặp nhất.", tip: "1 MPa = 1 N/mm², ghi nhớ để khỏi đổi đơn vị rườm rà." },
            { title: "Kiểm tra biến dạng", body: "Với thép có E = 200000 MPa và chiều dài 2 m, biến dạng tỉ đối là ε = 159/200000 ≈ 0,0008, nên thanh dài thêm khoảng 1,6 mm. Con số nhỏ này giải thích vì sao kết cấu thép vẫn biến dạng dù mắt thường khó thấy.", tip: "Biến dạng dài ΔL = ε·L, nhớ đổi L về cùng đơn vị với mm." },
            { title: "Nén khác kéo ở đâu", body: "Thanh chịu nén có cùng công thức ứng suất nhưng dấu ngược lại và xuất hiện nguy cơ mất ổn định. Một thanh thép ống mảnh chịu nén 100 kN có thể không hỏng vì ứng suất mà vì cong vênh. Vì vậy thanh nén dài cần kiểm tra thêm điều kiện ổn định.", tip: "Thanh càng mảnh và càng dài, nguy cơ mất ổn định càng cao." }
          ],
          formula: "σ = F/A ; ΔL = F·L/(E·A)"
        },
        {
          id: "sb2",
          title: "Uốn dầm và mô men quán tính",
          minutes: 24,
          level: "Nâng cao",
          summary: "Tính ứng suất uốn lớn nhất và hiểu vì sao tiết diện cao lại chịu uốn tốt.",
          points: ["Ứng suất uốn σ = M/W, với W là mô men chống uốn.", "W của hình chữ nhật là b·h²/6.", "Ứng suất lớn nhất ở thớ xa trục trung hòa."],
          steps: [
            { title: "Mô men uốn lớn nhất", body: "Dầm đơn giản dài 6 m chịu tải tập trung 30 kN tại giữa có mô men lớn nhất M = PL/4 = 45 kN·m. Mô men lớn nhất luôn tại giữa nhịp với tải tập trung, còn với tải phân bố đều là qL²/8. Xác định đúng vị trí này trước khi chọn tiết diện.", tip: "Vẽ biểu đồ mô men, đừng đoán vị trí nguy hiểm." },
            { title: "Mô men chống uốn", body: "Tiết diện chữ nhật 200 × 400 mm có W = b·h²/6 = 200·400²/6 ≈ 5,33 triệu mm³. Ứng suất uốn là 45·10⁶/5,33·10⁶ ≈ 8,4 MPa. Nếu xoay tiết diện nằm ngang, W giảm còn một nửa vì h giảm, ứng suất tăng gấp đôi.", tip: "Với uốn, chiều cao quan trọng hơn chiều rộng vì có bình phương." },
            { title: "Độ võng và giới hạn", body: "Độ võng giữa nhịp của dầm đơn giản chịu tải giữa là δ = PL³/(48EI). Với EI = 1000 kN·m², δ ≈ 135 mm, vượt xa giới hạn thường dùng L/250 = 24 mm. Kết luận là tiết diện đủ bền nhưng không đủ cứng, phải tăng chiều cao dầm hoặc mô men quán tính.", tip: "Bền và cứng là hai tiêu chí khác nhau, phải kiểm tra cả hai." }
          ],
          formula: "σ = M/W ; W = b·h²/6 ; δ = P·L³/(48·E·I)"
        },
        {
          id: "sb3",
          title: "Xoắn trục tròn",
          minutes: 22,
          level: "Nâng cao",
          summary: "Tính ứng suất tiếp do xoắn và chọn đường kính trục theo mô men xoắn.",
          points: ["Ứng suất tiếp τ = T·r/Jp.", "Mô men quán tính độc cực Jp = πd⁴/32.", "Ứng suất xoắn lớn nhất ở mặt ngoài trục."],
          steps: [
            { title: "Mô men xoắn truyền qua trục", body: "Trục nối động cơ 7,5 kW quay 1450 vòng/phút truyền mô men T = 9550·P/n ≈ 49,4 N·m. Công thức 9550 là hệ số quy đổi khi P tính bằng kW và n tính bằng vòng/phút. Đây là bước đầu tiên của mọi bài thiết kế trục.", tip: "Kiểm tra thứ nguyên: kW chia vòng/phút nhân 9550 cho N·m." },
            { title: "Ứng suất tiếp trên mặt cắt", body: "Với trục đặc đường kính 30 mm, Jp = π·30⁴/32 ≈ 79500 mm⁴ và bán kính 15 mm. Ứng suất tiếp lớn nhất là τ = 49400·15/79500 ≈ 9,3 MPa, xuất hiện tại mặt ngoài và bằng 0 ở tâm. Vì vậy vật liệu ở lõi trục gần như không tham gia chịu xoắn.", tip: "Trục rỗng cùng đường kính ngoài chịu xoắn kém hơn nhưng nhẹ hơn nhiều." },
            { title: "Chọn đường kính theo điều kiện bền", body: "Đặt τ lớn nhất bằng ứng suất tiếp cho phép rồi giải ngược ra d. Với thép có ứng suất cho phép 25 MPa và T = 49,4 N·m, đường kính tối thiểu khoảng 21,6 mm, nên chọn trục tiêu chuẩn 25 mm. Luôn làm tròn lên theo dãy kích thước tiêu chuẩn.", tip: "Sau khi chọn, kiểm tra thêm độ võng và dao động khi trục dài." }
          ],
          formula: "τ = T·r/Jp ; Jp = π·d⁴/32 ; T = 9550·P/n"
        }
      ]
    },
    {
      title: "Chi tiết máy và an toàn thiết kế",
      summary: "Từ ứng suất tính được đến quyết định chọn vật liệu, kích thước và tuổi thọ.",
      lessons: [
        {
          id: "ct1",
          title: "Hệ số an toàn và ứng suất cho phép",
          minutes: 18,
          level: "Trung bình",
          summary: "Chọn hệ số an toàn có căn cứ và so sánh ứng suất làm việc với giới hạn cho phép.",
          points: ["Hệ số an toàn bằng giới hạn bền chia ứng suất làm việc.", "Ứng suất cho phép bằng giới hạn bền chia hệ số an toàn.", "Tải động, va đập cần hệ số an toàn lớn hơn."],
          steps: [
            { title: "Ý nghĩa của hệ số an toàn", body: "Thép CT3 có giới hạn chảy 240 MPa; nếu chọn hệ số an toàn 2 thì ứng suất cho phép là 120 MPa. Hệ số này bù cho sai lệch vật liệu, sai số tính toán và điều kiện làm việc thực tế. Chọn quá nhỏ thì nguy hiểm, quá lớn thì lãng phí vật liệu.", tip: "Hệ số an toàn không phải hằng số, nó phụ thuộc loại tải và mức hậu quả." },
            { title: "So sánh và kết luận", body: "Nếu ứng suất làm việc 159 MPa lớn hơn ứng suất cho phép 120 MPa thì chi tiết không đạt, dù vẫn dưới giới hạn chảy. Kết luận phải nêu rõ đạt hay không đạt kèm tỉ số σ/σ_cho phép. Trong ví dụ này tỉ số 1,33 nghĩa là cần tăng tiết diện khoảng 33%.", tip: "Kết luận đạt hay nguy hiểm luôn kèm con số so sánh, không nói chung chung." },
            { title: "Điều chỉnh thiết kế", body: "Cách rẻ nhất thường là tăng đường kính hoặc chiều cao tiết diện thay vì đổi vật liệu đắt tiền. Với thanh tròn chịu kéo, tăng đường kính từ 20 lên 24 mm giảm ứng suất xuống còn khoảng 110 MPa, đạt yêu cầu. Sau khi sửa phải tính lại toàn bộ, không chỉ vá một chỗ.", tip: "Ghi lại phương án đã sửa để bảo vệ trước hội đồng chấm." }
          ],
          formula: "σ_cho phép = σ_chảy / n ; điều kiện bền σ ≤ σ_cho phép"
        },
        {
          id: "ct2",
          title: "Mỏi vật liệu và tuổi thọ",
          minutes: 24,
          level: "Nâng cao",
          summary: "Hiểu vì sao trục gãy sau nhiều chu kỳ dù tải nhỏ hơn giới hạn bền.",
          points: ["Mỏi là hư hỏng do tải lặp, không phải do quá tải một lần.", "Vết nứt khởi phát ở tập trung ứng suất.", "Đường cong S–N cho biết tuổi thọ theo biên độ ứng suất."],
          steps: [
            { title: "Cơ chế phá hủy mỏi", body: "Một trục quay chịu uốn có ứng suất thay đổi tuần hoàn giữa kéo và nén ở cùng một điểm. Sau hàng triệu chu kỳ, vết nứt nhỏ ở bán kính góc lượn phát triển rồi gãy đột ngột. Mặt gãy điển hình có hai vùng: vùng nhẵn do nứt từ từ và vùng nhám do gãy tức thời.", tip: "Quan sát mặt gãy để phân biệt mỏi với quá tải một lần." },
            { title: "Tập trung ứng suất", body: "Rãnh then, lỗ khoan ngang và bậc trục đều làm ứng suất cục bộ tăng lên vài lần. Hệ số tập trung ứng suất Kt có thể lấy 1,5 đến 2,5 tùy hình dạng. Vì vậy thiết kế cần góc lượn êm và tránh thay đổi tiết diện đột ngột.", tip: "Một góc lượn bán kính 2 mm có thể tăng tuổi thọ trục rõ rệt." },
            { title: "Đọc đường cong S–N", body: "Đường cong S–N vẽ biên độ ứng suất theo logarit số chu kỳ đến khi hỏng. Với thép kết cấu, dưới một mức ứng suất gọi là giới hạn mỏi, trục có thể chịu vô hạn chu kỳ. Với nhôm không có giới hạn này, nên mọi thiết kế nhôm đều phải tính tuổi thọ hữu hạn.", tip: "Hỏi ngay vật liệu là thép hay nhôm, vì cách tính tuổi thọ khác nhau." }
          ],
          formula: "σ_a = (σ_max − σ_min)/2"
        },
        {
          id: "ct3",
          title: "Bánh răng, ổ lăn và truyền động",
          minutes: 22,
          level: "Trung bình",
          summary: "Tính tỉ số truyền của bộ bánh răng và chọn ổ theo tải trọng thực tế.",
          points: ["Tỉ số truyền bằng số răng bánh bị dẫn chia bánh dẫn.", "Bánh nhỏ quay nhanh hơn, mô men nhỏ hơn.", "Ổ lăn chọn theo tải động C và tuổi thọ L10."],
          steps: [
            { title: "Tỉ số truyền", body: "Bộ truyền có bánh dẫn 20 răng và bánh bị dẫn 60 răng cho tỉ số truyền u = 60/20 = 3. Nếu động cơ quay 1450 vòng/phút thì trục ra quay khoảng 483 vòng/phút, còn mô men tăng gấp ba nếu bỏ qua tổn thất. Đây là lý do hộp giảm tốc dùng để đổi tốc độ lấy mô men.", tip: "Kiểm tra: bánh nhỏ luôn quay nhanh hơn và chịu mô men nhỏ hơn." },
            { title: "Chọn ổ lăn", body: "Ổ bi đỡ một dãy 6205 có khả năng tải động C = 14 kN; tải thực tế tại gối là 1,2 kN. Tuổi thọ danh nghĩa tính theo L10 = (C/P)³ triệu vòng, cho kết quả khoảng 1580 triệu vòng. Quy đổi theo tốc độ làm việc để biết số giờ chạy trước khi thay ổ.", tip: "Luôn so tải thực với C, không so với khả năng tải tĩnh C0." },
            { title: "Bôi trơn và lắp đặt", body: "Ổ chạy nhanh cần dầu, ổ chạy chậm có thể dùng mỡ và phải chừa khoảng trống trong khoang mỡ. Lắp sai chiều hoặc siết quá chặt sẽ làm ổ nóng và giảm tuổi thọ dù tải nhỏ. Trong mô phỏng, tăng độ cứng trục giúp giảm rung và kéo dài tuổi thọ ổ.", tip: "Nhiệt độ ổ tăng bất thường là dấu hiệu lắp hoặc bôi trơn sai." }
          ],
          formula: "u = n₁/n₂ = z₂/z₁ ; L10 = (C/P)³ (triệu vòng)"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Hình chiếu vuông góc", back: "Hình chiếu của vật thể lên các mặt phẳng song song với hướng nhìn chính.", hint: "Chiếu vuông góc, không phối cảnh.", example: "Ba hình chiếu đứng, bằng, cạnh của chi tiết chữ L." },
    { front: "Dung sai kích thước", back: "Khoảng chênh lệch cho phép giữa kích thước giới hạn lớn nhất và nhỏ nhất.", hint: "Khoảng cho phép của kích thước thực.", example: "Ø40 h7 có kích thước thực từ 39,975 đến 40,000 mm." },
    { front: "Ký hiệu lắp ghép H7/h6", back: "Lỗ miền H cấp 7 ghép trục miền h cấp 6, cho lắp ghép có khe hở nhỏ.", hint: "Chữ hoa là lỗ, chữ thường là trục.", example: "Khe hở nhỏ nhất bằng 0, lắp trượt nhẹ." },
    { front: "Ứng suất pháp", back: "σ = F/A, lực dọc chia diện tích mặt cắt ngang, đơn vị MPa.", hint: "Lực trên diện tích.", example: "50 kN trên 314 mm² cho khoảng 159 MPa." },
    { front: "Định luật Hooke", back: "Trong miền đàn hồi, ứng suất tỉ lệ với biến dạng tỉ đối: σ = E·ε.", hint: "Đường thẳng trên biểu đồ kéo.", example: "Thép E = 200000 MPa, σ = 159 MPa cho ε ≈ 0,0008." },
    { front: "Mô men quán tính I", back: "Đại lượng đặc trưng cho khả năng chống uốn của tiết diện; hình chữ nhật I = b·h³/12.", hint: "Chiều cao có lũy thừa ba.", example: "Tiết diện 200 × 400 mm có I ≈ 1,07·10⁹ mm⁴." },
    { front: "Mô men chống uốn W", back: "W = I/ymax, với chữ nhật W = b·h²/6; dùng để tính σ = M/W.", hint: "I chia khoảng cách tới thớ xa nhất.", example: "200 × 400 mm cho W ≈ 5,33·10⁶ mm³." },
    { front: "Ứng suất tiếp do xoắn", back: "τ = T·r/Jp, lớn nhất tại mặt ngoài trục và bằng 0 ở tâm.", hint: "Xoắn gây trượt giữa các lớp.", example: "Trục Ø30, T = 49,4 N·m cho τ ≈ 9,3 MPa." },
    { front: "Hệ số an toàn", back: "Tỉ số giữa giới hạn bền hoặc giới hạn chảy và ứng suất làm việc.", hint: "Bao nhiêu lần dự trữ.", example: "Thép chảy 240 MPa, làm việc 120 MPa cho n = 2." },
    { front: "Hỏng do mỏi", back: "Phá hủy sau nhiều chu kỳ tải lặp với ứng suất dưới giới hạn bền.", hint: "Tải nhỏ nhưng lặp mãi.", example: "Trục quay chịu uốn gãy sau hàng triệu vòng." },
    { front: "Tỉ số truyền bánh răng", back: "u = z₂/z₁ = n₁/n₂, bánh nhỏ quay nhanh hơn và chịu mô men nhỏ hơn.", hint: "Số răng bị dẫn chia số răng dẫn.", example: "20 và 60 răng cho u = 3." },
    { front: "Tuổi thọ ổ lăn L10", back: "Số triệu vòng quay mà 90% ổ cùng loại đạt được trước khi hỏng, L10 = (C/P)³.", hint: "Công thức lũy thừa ba với ổ bi.", example: "C = 14 kN, P = 1,2 kN cho khoảng 1580 triệu vòng." }
  ],
  quiz: [
    { q: "Thanh thép tròn đường kính 20 mm chịu kéo 50 kN. Ứng suất pháp gần nhất là:", options: ["25 MPa", "159 MPa", "250 MPa", "1590 MPa"], answer: 1, explain: "A = π·20²/4 ≈ 314 mm², σ = 50000/314 ≈ 159 MPa." },
    { q: "Với tiết diện chữ nhật, tăng chiều cao h lên hai lần thì mô men chống uốn W:", options: ["Tăng 2 lần", "Không đổi", "Tăng 8 lần", "Tăng 4 lần"], answer: 3, explain: "W = b·h²/6 nên h gấp đôi làm W gấp bốn." },
    { q: "Ký hiệu Ø40 h7 trên bản vẽ cho biết:", options: ["Lỗ đường kính 40, cấp chính xác 7", "Chiều dài 40 mm", "Trục đường kính 40, miền dung sai h cấp 7", "Mối hàn 40 mm"], answer: 2, explain: "Chữ thường h là miền dung sai trục; chữ in hoa mới dành cho lỗ." },
    { q: "Độ võng giữa nhịp của dầm đơn giản chịu tải tập trung P tại giữa là:", options: ["P·L³/(48·E·I)", "P·L/(E·A)", "P·L²/(8·E·I)", "5·P·L⁴/(384·E·I)"], answer: 0, explain: "Đây là công thức chuẩn cho dầm đơn giản, tải tập trung giữa nhịp; hệ số 5/384 dùng cho tải phân bố đều." },
    { q: "Ứng suất tiếp do xoắn trên trục tròn đặc lớn nhất tại:", options: ["Tâm tiết diện", "Một phần ba bán kính", "Mọi điểm bằng nhau", "Mặt ngoài của trục"], answer: 3, explain: "τ tỉ lệ với bán kính nên lớn nhất ở mặt ngoài và bằng 0 ở tâm." },
    { q: "Chi tiết làm việc ở 159 MPa, ứng suất cho phép 120 MPa. Kết luận đúng là:", options: ["Không đạt vì vượt ứng suất cho phép", "Đạt vì dưới giới hạn chảy", "Đạt nếu tăng hệ số an toàn", "Không kết luận được"], answer: 0, explain: "Điều kiện bền là σ ≤ σ_cho phép, ở đây 159 lớn hơn 120 nên không đạt." },
    { q: "Bộ bánh răng có 20 răng dẫn và 60 răng bị dẫn. Tỉ số truyền bằng:", options: ["1/3", "3", "40", "1200"], answer: 1, explain: "u = z₂/z₁ = 60/20 = 3, trục ra chậm hơn ba lần và mô men lớn hơn." },
    { q: "Hỏng do mỏi thường khởi phát tại:", options: ["Giữa tiết diện", "Bề mặt nhẵn nhất", "Nơi có tập trung ứng suất", "Mối hàn giáp mí"], answer: 2, explain: "Rãnh then, lỗ khoan, bậc trục làm ứng suất cục bộ tăng, vết nứt bắt đầu từ đó." },
    { q: "Hình chiếu bằng trên bản vẽ được đặt:", options: ["Dưới hình chiếu đứng", "Bên phải hình chiếu đứng", "Bên trái hình chiếu cạnh", "Phía trên hình chiếu cạnh"], answer: 0, explain: "Quy ước góc thứ nhất: hình chiếu bằng nằm dưới, hình chiếu cạnh nằm bên phải hình chiếu đứng." },
    { q: "Công thức tính mô men xoắn từ công suất và tốc độ quay là:", options: ["T = 9,81·P·n", "T = 9550·P/n", "T = P/n²", "T = 60·P·n"], answer: 1, explain: "Với P tính bằng kW và n tính bằng vòng/phút, hệ số quy đổi là 9550 để ra N·m." }
  ],
  lab: {
    kind: "sim",
    mode: "beam",
    title: "Dầm đơn giản chịu tải giữa nhịp",
    lead: "Tăng tải trọng để thấy dầm võng sâu hơn, kéo dài nhịp để thấy độ võng tăng theo lũy thừa ba, và tăng độ cứng uốn EI để hạn chế biến dạng. Số đọc bên cạnh cập nhật theo từng thao tác.",
    stageLabel: "Mô phỏng dầm",
    controlNote: "Độ võng tính theo δ = P·L³/(48·E·I). So sánh kết quả với giới hạn L/250 để biết dầm có đủ cứng hay không.",
    note: "Mô hình hóa quan hệ giữa tải trọng, nhịp và độ cứng, giúp sinh viên thấy vì sao tăng chiều dài nhịp lại nguy hiểm hơn tăng tải.",
    autoPlay: false,
    sliders: [
      { key: "load", label: "Tải trọng P", min: 5, max: 80, step: 1, value: 30, unit: " kN" },
      { key: "length", label: "Chiều dài nhịp L", min: 2, max: 10, step: 0.5, value: 6, unit: " m" },
      { key: "stiffness", label: "Độ cứng uốn EI", min: 0.3, max: 3, step: 0.1, value: 1, unit: " ×10³ kN·m²" }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Văn Kiên", progress: 80, score: 8.4, status: "Tốt", note: "Đọc bản vẽ tốt, cần luyện thêm bài xoắn trục." },
      { name: "Trần Thị Mai", progress: 58, score: 7.2, status: "Đang học", note: "Nhầm đơn vị kN và N khi tính ứng suất." },
      { name: "Lê Quốc Bảo", progress: 92, score: 9, status: "Tốt", note: "Làm tốt bài kiểm tra độ võng dầm." },
      { name: "Phạm Hồng Sơn", progress: 30, score: 5, status: "Cần hỗ trợ", note: "Chưa hoàn thành bản vẽ hình chiếu thứ ba." },
      { name: "Vũ Thanh Tùng", progress: 65, score: 7.6, status: "Đang học", note: "Tiến bộ ở phần dung sai lắp ghép." },
      { name: "Đỗ Minh Châu", progress: 44, score: 6.3, status: "Đang học", note: "Cần ôn lại mô men quán tính của tiết diện." }
    ],
    submissions: [
      { student: "Lê Quốc Bảo", lesson: "Bài tính độ võng dầm thép", time: "Hôm qua 21:40", status: "Chờ chấm" },
      { student: "Phạm Hồng Sơn", lesson: "Bản vẽ hình chiếu chi tiết chữ L", time: "Hôm qua 18:20", status: "Chờ chấm" },
      { student: "Nguyễn Văn Kiên", lesson: "Bài chọn đường kính trục theo xoắn", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thực hành tuần này tại xưởng cơ khí, mang theo thước cặp và găng tay.",
      "Bài kiểm tra giữa kỳ gồm phần đọc bản vẽ và hai bài tính sức bền.",
      "Nhóm nào chưa nộp bản vẽ CAD cần gửi trước thứ Sáu để kịp chấm."
    ]
  },
  className: "Kỹ thuật cơ khí – K25",
  brief: "BTL-26_mechlab-mon-ky-thuat-co-khi.md"
};
