window.BTL_DATA = {
  id: "stemquest",
  code: "BTL-36",
  name: "StemQuest",
  monogram: "\u2605",
  subject: "STEM tích hợp",
  level: "Phổ thông",
  group: "Toán & Khoa học tự nhiên",
  accent: "#2563eb",
  accent2: "#f59e0b",
  font: "rounded",
  tagline: "Một dự án, bốn môn học, một bảng thành tích theo tuần.",
  intro: "StemQuest gom dự án liên môn, sân chơi thử thách và bảng thành tích về cùng một chỗ để học sinh thấy Khoa học, Công nghệ, Kỹ thuật và Toán đang góp phần vào một sản phẩm thật. Mỗi nhiệm vụ đều có tiêu chí đo được, dữ liệu ghi lại và phản hồi để nhóm cải tiến vòng sau.",
  hero: { title: "STEM", highlight: "bốn môn trong một dự án" },
  heroBadge: "Dự án liên môn · Bảng thành tích",
  labShort: "THỬ THÁCH",
  labTag: "SÂN CHƠI",
  practiceTag: "THẺ KHÁI NIỆM",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu thử thách" }
  ],
  featureLead: "Ba cách học đặc thù của STEM tích hợp: nhìn sơ đồ bốn môn trong dự án, giải thử thách từng bước và theo dõi tiến độ bằng số liệu.",
  pathLead: "Bắt đầu từ vòng tuần hoàn thiết kế, đi qua đo lường dữ liệu rồi kết thúc bằng tích hợp và thuyết trình. Mỗi chương đều có một nhiệm vụ nhóm nộp cho lớp thay vì bài kiểm tra viết.",
  features: [
    { badge: "01", title: "Sơ đồ bốn nhánh liên môn", desc: "Mỗi dự án hiển thị bốn nhánh Khoa học, Công nghệ, Kỹ thuật, Toán kèm câu hỏi cụ thể, giúp nhóm thấy ngay nhánh nào còn thiếu kiến thức." },
    { badge: "02", title: "Sân chơi thử thách có bước", desc: "Học sinh đi qua bốn bước quan sát, giả thuyết, thực hiện, kết luận với đồng hồ đếm và phản hồi ngay sau mỗi lựa chọn." },
    { badge: "03", title: "Tiến độ và bảng thành tích", desc: "Biểu đồ tiến độ theo nhiệm vụ và bảng xếp hạng theo điểm giúp học sinh tự định lượng mức đạt, giáo viên theo dõi nhóm thuận tiện." }
  ],
  modules: [
    {
      title: "Vòng tuần hoàn thiết kế kỹ thuật",
      summary: "Từ vấn đề thực tế đến tiêu chí đo được và nguyên mẫu thử nhanh trong thời gian ngắn.",
      lessons: [
        {
          id: "k1",
          title: "Từ vấn đề thực tế đến phát biểu thiết kế",
          minutes: 18,
          level: "Cơ bản",
          summary: "Biến một quan sát cảm tính thành vấn đề có số liệu và viết phát biểu thiết kế rõ người dùng, điều kiện.",
          points: [
            "Vấn đề phải đo được, không chỉ dừng ở cảm giác.",
            "Phát biểu thiết kế nêu người dùng, điều kiện và giới hạn.",
            "Mỗi dự án cần một câu hỏi lớn mở ra nhiều hướng giải."
          ],
          steps: [
            { title: "Quan sát và đo", body: "Nhóm khảo sát sân trường sau mưa, đo vũng nước sâu 4 cm và thời gian rút hết 90 phút. Con số biến cảm giác sân ngập thành vấn đề kỹ thuật có thể xử lý và so sánh sau khi làm.", tip: "Ghi thời điểm, địa điểm và dụng cụ đo ngay cạnh mỗi số liệu." },
            { title: "Viết phát biểu thiết kế", body: "Mẫu: Thiết kế hệ thống thoát nước cho sân 20 x 30 m, giữ được lượng mưa 50 mm/giờ, chi phí dưới 2 triệu đồng. Một câu như vậy gắn người dùng, điều kiện và giới hạn ngay từ đầu dự án.", tip: "Đọc lại phát biểu, nếu có hai chữ và thì tách thành hai dự án nhỏ." },
            { title: "Đặt câu hỏi lớn", body: "Câu hỏi Làm sao giảm ngập mà không đục sân mở ra nhiều hướng: rãnh thấm, vật liệu xốp, thay đổi độ dốc. Câu hỏi mở giữ nhóm không bị đóng khung vào giải pháp đầu tiên nghĩ ra.", tip: "Viết ra ba câu hỏi rồi chọn câu có thể kiểm chứng bằng thí nghiệm." }
          ],
          formula: "Vấn đề đo được + người dùng + giới hạn = phát biểu thiết kế"
        },
        {
          id: "k2",
          title: "Tiêu chí, ràng buộc và thang điểm",
          minutes: 20,
          level: "Trung bình",
          summary: "Phân biệt điều mong muốn với giới hạn bắt buộc, rồi chuyển thành rubric chấm có mức điểm rõ ràng.",
          points: [
            "Tiêu chí là điều mong muốn và đo được.",
            "Ràng buộc là giới hạn không được vượt qua.",
            "Rubric chuyển tiêu chí thành các mức điểm cụ thể."
          ],
          steps: [
            { title: "Phân biệt hai loại yêu cầu", body: "Với cầu giấy dài 60 cm, tiêu chí là chịu tải 2 kg mà độ võng dưới 5 mm; ràng buộc là chỉ dùng 40 ống hút và 3 m keo nóng. Tiêu chí định hướng thiết kế tốt hơn, còn ràng buộc chặn những lối tắt quá dễ.", tip: "Xếp từng yêu cầu vào hai cột trước khi bắt tay thiết kế." },
            { title: "Gán trọng số", body: "Bốn tiêu chí được chấm theo trọng số: chịu lực 40%, nhẹ 20%, hoàn thiện 20%, thuyết trình 20%. Trọng số phải công bố trước khi làm để nhóm không tối ưu lệch về phần dễ ăn điểm.", tip: "Tổng trọng số luôn bằng 100%, kiểm tra lại bằng máy tính." },
            { title: "Viết mức điểm", body: "Mức 4: chịu 2 kg, võng dưới 3 mm; mức 2: chịu 1 kg, võng 8 mm. Mô tả bằng số giúp hai giáo viên chấm ra cùng kết quả và giúp học sinh tự kiểm tra sản phẩm trước khi nộp.", tip: "Thử chấm một sản phẩm mẫu của khóa trước để hiệu chỉnh rubric." }
          ],
          formula: "Điểm = 0,4·chịu lực + 0,2·khối lượng + 0,2·hoàn thiện + 0,2·thuyết trình"
        },
        {
          id: "k3",
          title: "Bản vẽ phác và nguyên mẫu nhanh",
          minutes: 24,
          level: "Trung bình",
          summary: "Phác ba phương án trong mười lăm phút, dựng nguyên mẫu rẻ và mỗi vòng thử trả lời một câu hỏi.",
          points: [
            "Phác ba phương án trước khi chọn một.",
            "Nguyên mẫu nhanh dùng vật liệu rẻ, dễ thay.",
            "Mỗi vòng thử chỉ nên trả lời một câu hỏi."
          ],
          steps: [
            { title: "Ba phương án trong mười lăm phút", body: "Vẽ ba kiểu cầu gồm dàn tam giác, vòm và dầm hộp, mỗi kiểu một tờ A5 trong năm phút. So sánh bằng cùng bộ tiêu chí thay vì chọn theo cảm giác của bạn vẽ đẹp nhất trong nhóm.", tip: "Ghi điểm dự đoán cho từng phương án trước khi thử để so với kết quả." },
            { title: "Dựng nguyên mẫu nhanh", body: "Cầu ống hút dựng trong 40 phút với keo nóng và bìa cứng làm mặt cầu. Nguyên mẫu thô cho biết mối nối nào yếu trước khi nhóm đầu tư vật liệu tốt hơn cho bản cuối.", tip: "Chừa 5 cm ở hai đầu để kẹp vào giá đỡ khi thử tải." },
            { title: "Thử và ghi nhận", body: "Treo lần lượt từng lọ 500 g vào giữa cầu và ghi độ võng sau mỗi lần. Vòng thử thứ hai chỉ thay đổi một chi tiết, nhờ vậy nhóm biết chính xác chi tiết nào tạo ra khác biệt.", tip: "Chụp ảnh trước và sau khi thử để đối chiếu biến dạng của mối nối." }
          ],
          formula: "Nguyên mẫu nhanh: rẻ, nhanh, thay được từng chi tiết"
        }
      ]
    },
    {
      title: "Đo lường và dữ liệu",
      summary: "Thiết kế thí nghiệm một biến, tính trung bình và độ lệch, rồi trình bày bằng biểu đồ có đơn vị.",
      lessons: [
        {
          id: "d1",
          title: "Thiết kế thí nghiệm và ghi dữ liệu",
          minutes: 18,
          level: "Cơ bản",
          summary: "Chọn biến độc lập, biến phụ thuộc và lặp lại phép đo để dữ liệu đủ tin cậy khi kết luận.",
          points: [
            "Mỗi lần thử chỉ đổi một biến.",
            "Lặp lại ít nhất ba lần để thấy độ tản.",
            "Ghi kèm điều kiện môi trường của lần đo."
          ],
          steps: [
            { title: "Chọn biến", body: "Thử bộ lọc nước: biến độc lập là độ dày lớp sỏi 2 cm, 4 cm, 6 cm; biến phụ thuộc là độ đục sau 10 phút; giữ nguyên 1,5 lít nước và cùng loại cát. Đổi hai thứ cùng lúc sẽ không biết nguyên nhân nào tạo kết quả.", tip: "Viết bảng biến ra giấy trước khi bắt đầu thí nghiệm." },
            { title: "Lặp và ghi", body: "Mỗi độ dày đo ba lần, ghi 2,1; 2,4; 2,2 NTU thay vì chỉ giữ một số đẹp. Ba lần đo cho thấy phép đo có ổn định hay không và giúp phát hiện lần đọc sai bất thường.", tip: "Để cùng một người đọc kết quả nhằm giảm sai số chủ quan." },
            { title: "Ghi điều kiện", body: "Nhiệt độ nước 28 độ C, độ đục ban đầu 15 NTU, thời gian lọc 10 phút. Thiếu các điều kiện này, nhóm khác không lặp lại được thí nghiệm và kết quả không so sánh được.", tip: "Chụp ảnh thiết bị có đặt thước đo trong khung hình." }
          ],
          formula: "Biến độc lập → biến phụ thuộc, các biến còn lại giữ nguyên"
        },
        {
          id: "d2",
          title: "Trung bình, độ lệch và biểu đồ",
          minutes: 22,
          level: "Nâng cao",
          summary: "Tóm tắt dữ liệu bằng trung bình, đọc độ tản và chọn dạng biểu đồ phù hợp với câu hỏi.",
          points: [
            "Trung bình cộng tóm tắt xu hướng chung.",
            "Độ lệch cho biết mức ổn định của phép đo.",
            "Biểu đồ phải có đơn vị và nhãn trục."
          ],
          steps: [
            { title: "Tính trung bình", body: "Ba lần đo độ đục 2,1; 2,4; 2,2 có trung bình 2,23 NTU, ghi là 2,2 NTU vì dụng cụ chỉ đọc đến một chữ số thập phân. Giữ quá nhiều chữ số tạo cảm giác chính xác không có thật.", tip: "Làm tròn theo độ chia nhỏ nhất của dụng cụ đo." },
            { title: "Đọc độ lệch", body: "Hai nhóm cùng trung bình 2,2 NTU nhưng nhóm A dao động 0,1 còn nhóm B dao động 0,9. Nhóm B kém ổn định, cần kiểm tra thao tác hoặc dụng cụ trước khi kết luận lớp sỏi dày hơn là tốt hơn.", tip: "Vẽ từng điểm đo lên biểu đồ để thấy độ tản, đừng chỉ nhìn số trung bình." },
            { title: "Chọn dạng biểu đồ", body: "So sánh ba mức độ dày dùng biểu đồ cột; theo dõi độ đục qua 10 phút dùng biểu đồ đường. Trục tung ghi đơn vị NTU, trục hoành ghi mốc đo, thiếu nhãn là lỗi phổ biến khiến người đọc hiểu sai.", tip: "Đặt tiêu đề nói thẳng kết luận, ví dụ Độ đục giảm khi lớp sỏi dày hơn." }
          ],
          formula: "Trung bình = tổng các lần đo chia số lần đo"
        },
        {
          id: "d3",
          title: "Tính toán vật liệu và tỉ lệ bản vẽ",
          minutes: 20,
          level: "Trung bình",
          summary: "Tính thể tích, đọc tỉ lệ bản vẽ và dự trù hao hụt trước khi mua vật liệu cho mô hình.",
          points: [
            "Tính thể tích trước khi chọn bể chứa.",
            "Tỉ lệ bản vẽ đổi số đo trên giấy ra kích thước thật.",
            "Cộng thêm hao hụt khi đặt vật liệu."
          ],
          steps: [
            { title: "Tính thể tích", body: "Bể chứa hình trụ bán kính 12 cm, cao 30 cm có thể tích 3,14 x 12² x 30, xấp xỉ 13.565 cm³, tức khoảng 13,6 lít. Con số này quyết định lượng nước thử và số lần lọc cần chuẩn bị.", tip: "Đổi đơn vị ngay sau khi tính để tránh nhầm cm³ với lít." },
            { title: "Đọc tỉ lệ bản vẽ", body: "Bản vẽ tỉ lệ 1:200, sân dài 15 cm trên giấy tương ứng 15 x 200 = 3.000 cm, tức 30 m ngoài thực tế. Đo lại bằng thước sau khi in vì máy in có thể co giãn 1-2% làm sai lệch kích thước.", tip: "Ghi tỉ lệ ngay dưới khung bản vẽ, không chỉ ghi trong phần ghi chú." },
            { title: "Dự trù hao hụt", body: "Cần 12 m ống nhưng nên mua 13,2 m để bù đường cắt và mối nối hỏng, tức cộng 10%. Với vật liệu dễ vỡ như ống hút giấy, mức hao hụt 15% sát thực tế hơn.", tip: "Lập bảng vật liệu gồm số lượng, đơn giá và thành tiền để không vượt ngân sách." }
          ],
          formula: "V trụ = π·r²·h ; chiều dài thật = chiều dài giấy × mẫu số tỉ lệ"
        }
      ]
    },
    {
      title: "Tích hợp và trình bày",
      summary: "Ghép bốn môn vào một sản phẩm, đặt giải pháp trong bối cảnh địa phương và bảo vệ trước hội đồng.",
      lessons: [
        {
          id: "t1",
          title: "Sơ đồ bốn môn trong một dự án",
          minutes: 20,
          level: "Trung bình",
          summary: "Vẽ sơ đồ đóng góp của Khoa học, Công nghệ, Kỹ thuật, Toán và phát hiện nhánh kiến thức còn thiếu.",
          points: [
            "Mỗi môn đóng góp một loại hiểu biết riêng.",
            "Sơ đồ giúp nhìn ra chỗ thiếu kiến thức.",
            "Không gắn nhãn môn cho mọi hoạt động hình thức."
          ],
          steps: [
            { title: "Vẽ bốn nhánh", body: "Với bộ lọc nước, Khoa học giải thích hấp phụ và vi khuẩn; Công nghệ là cảm biến và trang giám sát; Kỹ thuật là kết cấu, gia công; Toán là lưu lượng và thống kê. Mỗi nhánh ghi kèm một câu hỏi cụ thể mà môn đó phải trả lời.", tip: "Dùng bốn màu cho bốn nhánh và nối mũi tên khi hai môn phụ thuộc nhau." },
            { title: "Tìm chỗ thiếu", body: "Nếu nhánh Toán chỉ có cộng trừ, nhóm chưa dùng được thống kê cho dữ liệu đo độ đục. Nhánh trống ở đâu là chỗ cần mời giáo viên bộ môn hỗ trợ trước khi dự án đi quá xa.", tip: "Đánh dấu nhánh yếu bằng chì đỏ trước buổi báo cáo tiến độ." },
            { title: "Tránh gắn nhãn hình thức", body: "Trang trí bìa không phải là Công nghệ, dùng phần mềm trình chiếu cũng chưa phải tích hợp. Chỉ gắn nhãn khi có kiến thức hoặc kỹ năng cụ thể được vận dụng và nhóm giải thích lại được.", tip: "Với mỗi nhãn, trả lời một câu: kiến thức nào của môn này được dùng?" }
          ],
          formula: "4 nhánh: Khoa học, Công nghệ, Kỹ thuật, Toán"
        },
        {
          id: "t2",
          title: "Bối cảnh và tác động của giải pháp",
          minutes: 18,
          level: "Cơ bản",
          summary: "Đặt sản phẩm vào điều kiện địa phương, tính chi phí và so sánh với cách làm đang có.",
          points: [
            "Giải pháp cần đặt trong bối cảnh địa phương.",
            "Xét cả chi phí lắp đặt và chi phí vận hành.",
            "So sánh với phương án đang được dùng."
          ],
          steps: [
            { title: "Khảo sát bối cảnh", body: "Trường ở ven đô, mùa mưa kéo dài 5 tháng, lượng mưa trung bình 1.800 mm/năm. Cùng một mẫu bộ lọc, nếu đặt ở vùng nước nhiễm phèn thì vật liệu lọc phải khác và thời gian thay cũng ngắn hơn.", tip: "Ghi ba đặc điểm địa phương ảnh hưởng trực tiếp đến thiết kế." },
            { title: "Tính chi phí và tác động", body: "Bộ lọc 1,5 lít dùng 2 kg sỏi, 1 kg cát và 300 g than hoạt tính, tổng khoảng 180.000 đồng. So với 6 tháng mua nước bình 20 lít, con số này cho thấy thời gian hoàn vốn và lượng nhựa giảm được.", tip: "Tính cả chi phí thay vật liệu định kỳ, không chỉ chi phí lắp ban đầu." },
            { title: "So sánh phương án hiện có", body: "Đối chiếu với bình lọc mua sẵn: bản tự làm rẻ hơn nhưng lưu lượng chỉ 0,4 lít/phút, chậm hơn khoảng ba lần. Nêu rõ đánh đổi giúp phần thuyết trình đáng tin hơn những lời khen chung chung.", tip: "Lập bảng so sánh ba tiêu chí: chi phí, lưu lượng và độ bền." }
          ],
          formula: "Chi phí vòng đời = chi phí lắp + chi phí thay vật liệu × số lần thay"
        },
        {
          id: "t3",
          title: "Thuyết trình và phản biện dự án",
          minutes: 22,
          level: "Nâng cao",
          summary: "Trình bày bốn phút có số liệu và trả lời phản biện bằng dữ liệu thử nghiệm của chính nhóm.",
          points: [
            "Mở đầu bằng số liệu, không bằng cảm xúc.",
            "Mỗi kết luận cần dữ liệu chống lưng.",
            "Ghi lại câu hỏi phản biện để cải tiến vòng sau."
          ],
          steps: [
            { title: "Cấu trúc bốn phút", body: "Một phút nêu vấn đề kèm số liệu, một phút trình bày thiết kế, một phút dữ liệu thử nghiệm và một phút hạn chế cùng hướng tiếp theo. Giới hạn bốn phút buộc nhóm chọn ý quan trọng nhất thay vì đọc hết báo cáo.", tip: "Đặt đồng hồ đếm ngược khi tập và cắt phần nào vượt thời gian." },
            { title: "Trả lời bằng dữ liệu", body: "Khi bị hỏi vì sao chọn lớp sỏi 4 cm, trả lời bằng độ đục 2,2 NTU so với 3,6 NTU ở lớp 2 cm, kèm điều kiện đo. Câu trả lời có số và điều kiện luôn thuyết phục hơn lời giải thích chung.", tip: "Chuẩn bị trước ba câu hỏi khó nhất, mỗi câu một dòng trả lời." },
            { title: "Nhận phản biện và ghi lại", body: "Ghi nguyên văn câu hỏi của giám khảo vào phiếu rồi phân loại thành lỗi thiết kế, lỗi dữ liệu và lỗi trình bày. Sau buổi, chọn hai góp ý sửa được ngay để làm vòng cải tiến tiếp theo.", tip: "Cảm ơn và hỏi lại một câu để làm rõ ý trước khi trả lời." }
          ],
          formula: "Vấn đề → thiết kế → dữ liệu → hạn chế, mỗi phần một phút"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Vòng tuần hoàn thiết kế kỹ thuật", back: "Xác định vấn đề, nghiên cứu, ý tưởng, nguyên mẫu, thử nghiệm rồi cải tiến và lặp lại.", hint: "Năm bước, quay vòng.", example: "Cầu ống hút hỏng mối nối được gia cố ở vòng hai." },
    { front: "Tiêu chí và ràng buộc", back: "Tiêu chí là điều mong muốn đo được; ràng buộc là giới hạn bắt buộc không được vượt.", hint: "Mong muốn so với giới hạn.", example: "Chịu 2 kg là tiêu chí, chỉ dùng 40 ống hút là ràng buộc." },
    { front: "Nguyên mẫu nhanh", back: "Bản thử rẻ, dựng nhanh để kiểm tra ý tưởng trước khi làm bản cuối.", hint: "Rẻ, nhanh, thay được.", example: "Cầu giấy bìa dựng trong 40 phút." },
    { front: "Biến độc lập và biến kiểm soát", back: "Biến độc lập là thứ chủ động thay đổi; biến kiểm soát giữ nguyên để so sánh công bằng.", hint: "Một biến đổi, còn lại giữ.", example: "Đổi độ dày sỏi, giữ nguyên 1,5 lít nước." },
    { front: "Nhóm đối chứng", back: "Nhóm không nhận tác động để so sánh với nhóm thực nghiệm.", hint: "Mốc so sánh.", example: "Mẫu nước không lọc dùng làm mốc 15 NTU." },
    { front: "Độ lệch chuẩn", back: "Đại lượng cho biết các lần đo tản quanh giá trị trung bình bao nhiêu.", hint: "Càng lớn càng tản.", example: "Hai nhóm cùng trung bình 2,2 NTU nhưng độ lệch khác nhau." },
    { front: "Tỉ lệ bản vẽ 1:200", back: "Một đơn vị trên giấy ứng với 200 đơn vị ngoài thực tế.", hint: "Nhân với 200.", example: "15 cm trên giấy là 30 m thật." },
    { front: "Đơn vị SI thường dùng", back: "Lực tính bằng newton, áp suất bằng pascal, năng lượng bằng joule.", hint: "N, Pa, J.", example: "Trọng lượng lọ 500 g xấp xỉ 4,9 N." },
    { front: "Mô hình STEM tích hợp", back: "Khoa học giải thích, Công nghệ chế tạo, Kỹ thuật thiết kế, Toán đo và kiểm chứng.", hint: "Bốn vai trò khác nhau.", example: "Bộ lọc nước cần cả hóa học, cảm biến, kết cấu và thống kê." },
    { front: "Rubric đánh giá dự án", back: "Bảng mô tả mức điểm theo từng tiêu chí và trọng số đã công bố.", hint: "Mức điểm phải đo được.", example: "Chịu lực 40%, khối lượng 20%, hoàn thiện 20%, thuyết trình 20%." },
    { front: "Dữ liệu định lượng và định tính", back: "Định lượng là số đo được; định tính là mô tả, quan sát bằng lời.", hint: "Số so với lời.", example: "Độ đục 2,2 NTU và nhận xét nước trong hơn." },
    { front: "Huy hiệu thành tích", back: "Phần thưởng số ghi nhận mốc hoàn thành, hiển thị trên bảng thành tích của lớp.", hint: "Ghi nhận mốc, không thay điểm.", example: "Huy hiệu Hoàn thành ba dự án liên môn." }
  ],
  quiz: [
    { q: "Trong một thí nghiệm đổi độ dày lớp sỏi, đâu là biến độc lập?", options: ["Độ đục của nước sau lọc", "Độ dày lớp sỏi", "Nhiệt độ phòng", "Loại cát"], answer: 1, explain: "Nhóm chủ động thay đổi độ dày lớp sỏi nên đây là biến độc lập; độ đục là biến phụ thuộc." },
    { q: "Bản vẽ tỉ lệ 1:200, đoạn dài 15 cm trên giấy tương ứng bao nhiêu ngoài thực tế?", options: ["30 m", "3 m", "15 m", "300 m"], answer: 0, explain: "15 cm nhân 200 bằng 3.000 cm, tức 30 m." },
    { q: "Tiêu chí nào sau đây là ràng buộc chứ không phải tiêu chí?", options: ["Cầu chịu được 2 kg", "Cầu võng dưới 5 mm", "Chỉ được dùng 40 ống hút", "Cầu hoàn thiện gọn gàng"], answer: 2, explain: "Giới hạn vật liệu là điều bắt buộc không được vượt, nên thuộc nhóm ràng buộc." },
    { q: "Ba lần đo độ đục là 2,1; 2,4 và 2,2 NTU. Trung bình cộng xấp xỉ bao nhiêu?", options: ["2,0 NTU", "2,4 NTU", "6,7 NTU", "2,2 NTU"], answer: 3, explain: "Tổng 6,7 chia 3 được khoảng 2,23, làm tròn theo dụng cụ là 2,2 NTU." },
    { q: "Vì sao mỗi lần thử chỉ nên thay đổi một biến?", options: ["Để thí nghiệm nhanh hơn", "Để biết biến nào gây ra kết quả", "Để dùng ít vật liệu hơn", "Để không cần ghi chép"], answer: 1, explain: "Nếu đổi nhiều biến cùng lúc, nhóm không xác định được nguyên nhân của thay đổi kết quả." },
    { q: "Bể trụ bán kính 12 cm, cao 30 cm chứa được khoảng bao nhiêu lít?", options: ["1,4 lít", "4,5 lít", "13,6 lít", "36 lít"], answer: 2, explain: "Thể tích 3,14 x 144 x 30 xấp xỉ 13.565 cm³, tức khoảng 13,6 lít." },
    { q: "Nhánh nào trong dự án bộ lọc nước phụ trách cảm biến và trang giám sát dữ liệu?", options: ["Công nghệ", "Khoa học", "Kỹ thuật", "Toán"], answer: 0, explain: "Cảm biến, vi điều khiển và trang web giám sát thuộc phần Công nghệ của dự án." },
    { q: "Một nhóm báo cáo trung bình 2,2 NTU nhưng các lần đo dao động 0,9 NTU. Kết luận phù hợp là gì?", options: ["Kết quả rất ổn định", "Không cần lặp lại phép đo", "Độ đục bằng 0", "Cần kiểm tra lại thao tác hoặc dụng cụ"], answer: 3, explain: "Độ tản lớn so với giá trị trung bình cho thấy phép đo chưa ổn định, cần kiểm tra trước khi kết luận." },
    { q: "Trong bốn phút thuyết trình, phần nào nên đứng đầu?", options: ["Lời cảm ơn hội đồng", "Vấn đề thực tế kèm số liệu", "Danh sách thành viên nhóm", "Giới thiệu phần mềm đã dùng"], answer: 1, explain: "Mở bằng vấn đề và số liệu giúp người nghe hiểu vì sao dự án cần thiết trước khi nghe giải pháp." },
    { q: "Cầu giấy chỉ được dùng 40 ống hút và 3 m keo nóng. Đây là ví dụ của:", options: ["Tiêu chí đo hiệu năng", "Biến phụ thuộc", "Ràng buộc thiết kế", "Trọng số rubric"], answer: 2, explain: "Giới hạn về vật liệu là ràng buộc, nhóm phải thiết kế trong khuôn khổ đó thay vì tối ưu tự do." }
  ],
  lab: {
    kind: "match",
    title: "Phân loại nhiệm vụ liên môn",
    lead: "Mỗi thẻ là một việc thật trong dự án tuần này. Chọn thẻ rồi chọn nhóm Khoa học, Công nghệ, Kỹ thuật hoặc Toán để xem lời giải thích vì sao nhiệm vụ thuộc nhóm đó.",
    stageLabel: "Phân loại",
    controlNote: "Chọn một mục bên trái rồi bấm nhóm ở cột điều khiển. Ghép sai sẽ hiện giải thích ngay; làm lại toàn bộ bằng nút Làm lại. Mục tiêu là 10/10 trước khi vào buổi báo cáo tiến độ.",
    note: "Bài tập này luyện phản xạ nhận diện phân môn, vì phần lớn nhóm yếu ở bước gọi tên kiến thức nào đang được dùng.",
    items: [
      { text: "Đo pH nước sau khi lọc qua than hoạt tính", category: "khoa-hoc", why: "Đây là phép đo hóa học để kiểm chứng chất lượng nước, nên thuộc Khoa học." },
      { text: "Lập giả thuyết lớp sỏi dày làm nước chảy chậm hơn", category: "khoa-hoc", why: "Phát biểu giả thuyết và kiểm chứng bằng thực nghiệm là cách làm của Khoa học." },
      { text: "Cân 5 g muối pha với 95 g nước để được dung dịch 5%", category: "khoa-hoc", why: "Pha dung dịch theo nồng độ phần trăm là thao tác hóa học trong phòng thí nghiệm." },
      { text: "Gắn cảm biến độ ẩm đất và gửi dữ liệu về trang web", category: "cong-nghe", why: "Cảm biến, vi điều khiển và truyền dữ liệu là phần Công nghệ của dự án." },
      { text: "Viết đoạn mã bật bơm tưới khi độ ẩm dưới 40%", category: "cong-nghe", why: "Lập trình điều khiển tự động thuộc Công nghệ, không phải Kỹ thuật cơ khí." },
      { text: "Khoan lỗ 3 mm và luồn trục quay cho bản lề mô hình", category: "ky-thuat", why: "Gia công chi tiết và lắp ráp cơ khí là công việc đặc trưng của Kỹ thuật." },
      { text: "Gia cố mối nối dầm cầu bằng keo nóng và ống hút giấy", category: "ky-thuat", why: "Chọn kết cấu và gia cố mối nối để chịu lực thuộc Kỹ thuật." },
      { text: "Tính thể tích bể chứa hình trụ bán kính 12 cm, cao 30 cm", category: "toan", why: "Dùng công thức thể tích hình trụ là bài toán định lượng của môn Toán." },
      { text: "Tính trung bình cộng và độ lệch của 10 lần đo độ đục", category: "toan", why: "Thống kê mô tả dữ liệu đo là phần Toán ứng dụng trong dự án." },
      { text: "Chuyển kích thước sân 20 m x 30 m về bản vẽ tỉ lệ 1:200", category: "toan", why: "Tính tỉ lệ bản vẽ là phép đổi đơn vị và tỉ số, thuộc môn Toán." }
    ],
    categories: [
      { id: "khoa-hoc", label: "Khoa học" },
      { id: "cong-nghe", label: "Công nghệ" },
      { id: "ky-thuat", label: "Kỹ thuật" },
      { id: "toan", label: "Toán" }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Gia Bảo", progress: 88, score: 8.9, status: "Tốt", note: "Nhóm trưởng nhóm cầu giấy, dữ liệu thử tải đầy đủ." },
      { name: "Trần Khánh Vy", progress: 71, score: 7.8, status: "Đang học", note: "Mạnh phần thống kê, cần luyện thuyết trình." },
      { name: "Lê Đức Anh", progress: 43, score: 6.1, status: "Cần hỗ trợ", note: "Chưa nộp nhật ký đo độ đục tuần hai." },
      { name: "Phạm Minh Thư", progress: 95, score: 9.4, status: "Tốt", note: "Sơ đồ bốn nhánh rõ, có thể dẫn nhóm bộ lọc nước." },
      { name: "Vũ Hoàng Phúc", progress: 62, score: 7.3, status: "Đang học", note: "Làm tốt phần cảm biến, cần ghi điều kiện đo." },
      { name: "Đỗ Ngọc Diệp", progress: 35, score: 5.7, status: "Cần hỗ trợ", note: "Thiếu hai nhiệm vụ và chưa tham gia buổi phản biện." }
    ],
    submissions: [
      { student: "Nguyễn Gia Bảo", lesson: "Dự án cầu giấy: báo cáo thử tải", time: "Hôm qua 20:45", status: "Chờ chấm" },
      { student: "Lê Đức Anh", lesson: "Nhật ký đo độ đục bộ lọc nước", time: "Hôm qua 18:20", status: "Chờ chấm" },
      { student: "Phạm Minh Thư", lesson: "Sơ đồ bốn nhánh liên môn", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Thứ Năm tuần này các nhóm báo cáo tiến độ 5 phút, mang theo bảng dữ liệu đã đo.",
      "Thử thách tuần có giới hạn 40 ống hút và 3 m keo, vật liệu phát tại phòng thí nghiệm.",
      "Nhóm chưa đạt 40% nhiệm vụ gặp giáo viên chủ nhiệm vào giờ sinh hoạt lớp."
    ]
  },
  className: "STEM 9 – Lớp 9A2",
  brief: "BTL-36_stemquest-mon-stem-tich-hop.md"
};
