window.BTL_DATA = {
  id: "financeflow",
  code: "BTL-14",
  name: "FinanceFlow",
  monogram: "₫",
  subject: "Tài chính – Ngân hàng",
  level: "Đại học",
  group: "Kinh tế & Pháp luật",
  accent: "#0369a1",
  accent2: "#0f766e",
  font: "display",
  tagline: "Kéo lãi suất và kỳ hạn để thấy lãi kép bỏ xa lãi đơn ngay trên biểu đồ.",
  intro: "FinanceFlow biến những công thức tài chính khô khan thành biểu đồ và bảng tính có thể thao tác. Sinh viên so sánh lãi đơn với lãi kép, lập lịch trả nợ từng kỳ và chấm điểm rủi ro tín dụng theo bộ tiêu chí rõ ràng.",
  hero: { title: "Tiền hôm nay", highlight: "đáng hơn tiền ngày mai" },
  heroBadge: "Lãi kép trực quan · Lịch trả nợ sống",
  labShort: "BIỂU ĐỒ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ công thức" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách học Tài chính – Ngân hàng: nhìn đường lãi kép, bấm từng kỳ trả nợ và chấm điểm rủi ro theo tiêu chí.",
  pathLead: "Đi từ giá trị thời gian của tiền, sang tín dụng và lịch trả nợ, rồi kết thúc ở vai trò trung gian và rủi ro của ngân hàng. Mọi công thức đều có ví dụ bằng đồng Việt Nam.",
  features: [
    { badge: "01", title: "Mô phỏng lãi kép có biểu đồ", desc: "Kéo lãi suất và số năm để so hai đường lãi đơn, lãi kép, kèm phần chênh lệch tích lũy theo từng năm." },
    { badge: "02", title: "Lịch trả nợ tương tác", desc: "Mỗi kỳ hiển thị dư nợ đầu kỳ, lãi, gốc và dư nợ cuối kỳ, bấm vào kỳ bất kỳ để xem chi tiết và so với cách trả gốc đều." },
    { badge: "03", title: "Thẻ điểm rủi ro tín dụng", desc: "Chấm điểm theo lịch sử thanh toán, dư nợ, thời gian tín dụng và số lần hỏi vay, hiển thị mức rủi ro thấp, vừa hoặc cao." }
  ],
  life: [
    {
      title: "Sổ tiết kiệm năm triệu tiền mừng tuổi",
      scene: "Mùng ba Tết, một sinh viên gom được 5 triệu đồng tiền mừng tuổi và phân vân giữa ống heo và quầy giao dịch. Nhân viên ngân hàng đề nghị gửi kỳ hạn 12 tháng, lãi 6 phần trăm một năm, đáo hạn thì nhập lãi vào gốc và quay vòng tiếp.",
      connect: "Tiền trong ống heo đứng yên, còn gửi ngân hàng là ứng dụng giá trị thời gian của tiền: lãi kép cộng dồn vào gốc nên số tiền tăng dần, và càng để lâu phần tăng thêm mỗi năm càng lớn."
    },
    {
      title: "Điện thoại trả góp không lãi suất",
      scene: "Một bạn mua điện thoại 6 triệu đồng theo hình thức trả góp không lãi suất: trả trước 1 triệu, sáu tháng sau mỗi tháng 900 nghìn, kèm phí chuyển đổi 120 nghìn đồng. Cộng nhẩm lại thì tổng tiền phải trả cao hơn giá niêm yết.",
      connect: "Khoản phí và cách chia nhỏ kỳ trả đẩy chi phí vay thực tế lên trên mức 0 phần trăm được quảng cáo, đúng bài học về lãi suất thực và lịch trả nợ. Trước khi ký nên cộng đủ các kỳ trả."
    },
    {
      title: "Quỹ lớp cho lớp bên cạnh vay",
      scene: "Lớp thu mỗi bạn 200 nghìn đồng làm quỹ, tổng cộng 8 triệu, và giữ 2 triệu trong két để chi đột xuất. Số còn lại cho lớp bên cạnh vay 6 triệu, lãi 1 phần trăm một tháng; giữa học kỳ ba bạn cùng xin rút quỹ đi du lịch thì két không đủ tiền.",
      connect: "Quỹ lớp làm việc của một ngân hàng: gom tiền nhỏ của nhiều người rồi cho vay khoản lớn hơn và ăn chênh lệch lãi. Thiếu tiền khi nhiều người rút là rủi ro thanh khoản, cho vay dài hơn kỳ hạn huy động là khe hở kỳ hạn."
    }
  ],
  modules: [
    {
      title: "Giá trị thời gian của tiền",
      summary: "Hiểu vì sao một đồng hôm nay khác một đồng ngày mai và dùng được ba công thức gốc.",
      lessons: [
        {
          id: "tc1",
          title: "Lãi đơn, lãi kép và sức mạnh thời gian",
          minutes: 18,
          level: "Cơ bản",
          summary: "So sánh hai cách tính lãi trên cùng một số vốn và ước lượng thời gian gấp đôi tiền.",
          points: [
            "Lãi đơn chỉ tính trên vốn gốc ban đầu.",
            "Lãi kép tính trên cả vốn lẫn lãi đã sinh ra.",
            "Thời gian đầu tư ảnh hưởng mạnh hơn chênh lệch lãi suất nhỏ."
          ],
          steps: [
            { title: "Lãi đơn chỉ tính trên gốc", body: "Gửi 100 triệu đồng với lãi đơn 8 phần trăm một năm, mỗi năm nhận đúng 8 triệu đồng nên sau 8 năm có 164 triệu. Lãi không bao giờ sinh lãi vì kỳ nào cũng tính trên 100 triệu ban đầu. Công thức là FV bằng PV nhân (1 cộng r nhân n).", tip: "Kiểm tra nhanh: lãi đơn 8 năm phải bằng đúng 8 lần lãi một năm." },
            { title: "Lãi kép tính trên cả phần lãi", body: "Cùng 100 triệu với lãi kép 8 phần trăm, năm đầu vẫn được 8 triệu, nhưng năm hai tính trên 108 triệu nên được 8,64 triệu. Sau 8 năm số dư là 185,1 triệu, nhiều hơn lãi đơn 21,1 triệu đồng. Chênh lệch này tăng theo cấp số nhân chứ không tuyến tính.", tip: "Mở phòng lab và so hai đường ở năm thứ 8 để thấy khoảng cách." },
            { title: "Quy tắc 72 và ý nghĩa thời gian", body: "Chia 72 cho lãi suất tính theo phần trăm để ước số năm gấp đôi tiền: với 8 phần trăm là khoảng 9 năm, với 12 phần trăm chỉ còn 6 năm. Nhưng gửi sớm 5 năm thường có lợi hơn săn thêm 1 phần trăm lãi suất. Thời gian là biến mạnh nhất trong công thức lãi kép.", tip: "Dùng quy tắc 72 để kiểm tra nhanh trước khi bấm máy tính." }
          ],
          formula: "FV = PV × (1 + r)^n"
        },
        {
          id: "tc2",
          title: "Giá trị tương lai và hiện giá",
          minutes: 22,
          level: "Trung bình",
          summary: "Chiết khấu dòng tiền về hôm nay và dùng NPV để quyết định có nên đầu tư.",
          points: [
            "Hiện giá là phép tính ngược của ghép lãi.",
            "Suất chiết khấu phải phản ánh chi phí vốn và rủi ro.",
            "NPV dương nghĩa là dự án tạo giá trị vượt chi phí vốn."
          ],
          steps: [
            { title: "Chiết khấu về hiện tại", body: "Để có 500 triệu sau 5 năm với lãi suất 7 phần trăm một năm, hôm nay chỉ cần gửi khoảng 356,5 triệu đồng. Mỗi đồng hôm nay đáng giá hơn một đồng ngày mai vì còn có thể sinh lãi. Chiết khấu chính là phép chia cho (1 cộng r) mũ n.", tip: "Hiện giá luôn nhỏ hơn giá trị tương lai khi lãi suất dương." },
            { title: "Chọn suất chiết khấu", body: "Suất chiết khấu phải phản ánh chi phí vốn và rủi ro của chính dòng tiền đó. Dòng tiền chắc chắn như trái phiếu chính phủ dùng lãi suất thấp, dòng tiền từ dự án mới phải cộng thêm phần bù rủi ro. Chọn sai suất sẽ đảo ngược kết luận đầu tư.", tip: "Viết rõ suất chiết khấu lấy từ đâu trước khi tính." },
            { title: "NPV và quyết định đầu tư", body: "Dự án cần 300 triệu hôm nay và trả 500 triệu sau 5 năm, với suất chiết khấu 7 phần trăm, hiện giá dòng tiền vào là 356,5 triệu nên NPV dương 56,5 triệu. NPV dương nghĩa là dự án trả lại nhiều hơn chi phí vốn. Khi hai dự án loại trừ nhau, chọn dự án có NPV lớn hơn chứ không chọn IRR cao hơn.", tip: "NPV cộng được giữa các dự án, IRR thì không, nên NPV đáng tin hơn." }
          ],
          formula: "PV = FV / (1 + r)^n ; NPV = PV(dòng vào) − PV(dòng ra)"
        },
        {
          id: "tc3",
          title: "Dòng tiền đều và niên kim",
          minutes: 24,
          level: "Trung bình",
          summary: "Tính khoản trả cố định của khoản vay và giá trị tương lai của chuỗi gửi tiết kiệm đều.",
          points: [
            "Niên kim là chuỗi khoản tiền bằng nhau trong nhiều kỳ.",
            "Khoản trả cố định tính từ vốn vay, lãi suất kỳ và số kỳ.",
            "Niên kim đầu kỳ có giá trị cao hơn cuối kỳ đúng một kỳ lãi."
          ],
          steps: [
            { title: "Công thức khoản trả cố định", body: "Khoản vay 500 triệu, lãi 1 phần trăm mỗi tháng trong 24 tháng có khoản trả cố định khoảng 23,54 triệu đồng. Công thức lấy vốn vay nhân lãi suất kỳ rồi chia cho (1 trừ (1 cộng r) mũ trừ n). Không dùng công thức thì phải lập bảng 24 dòng và rất dễ sai ở dòng cuối.", tip: "Nhớ đổi lãi suất năm sang lãi suất kỳ trước khi thay số." },
            { title: "Giá trị tương lai của chuỗi gửi đều", body: "Gửi 5 triệu đồng mỗi tháng trong 24 tháng với lãi 1 phần trăm một tháng cho số dư cuối kỳ khoảng 134,9 triệu đồng. Trong đó 120 triệu là tiền gốc, phần còn lại là lãi. Gửi đều giúp giảm rủi ro chọn sai thời điểm so với gửi một lần.", tip: "So sánh tổng tiền gốc với số dư cuối kỳ để thấy phần lãi thật sự." },
            { title: "Đầu kỳ và cuối kỳ", body: "Niên kim cuối kỳ trả vào cuối mỗi kỳ, niên kim đầu kỳ trả ngay khi kỳ bắt đầu nên giá trị cao hơn đúng một kỳ lãi. Tiền thuê nhà trả trước là niên kim đầu kỳ, còn trả góp ngân hàng thường là cuối kỳ. Nhầm loại làm kết quả lệch khoảng 1 phần trăm mỗi kỳ, đủ để sai cả bài.", tip: "Đọc hợp đồng xem khoản trả rơi vào đầu hay cuối kỳ." }
          ],
          formula: "PMT = PV × r / [1 − (1 + r)^(−n)]"
        }
      ]
    },
    {
      title: "Tín dụng và lịch trả nợ",
      summary: "Từ lãi suất danh nghĩa đến bảng trả nợ từng kỳ và bộ tiêu chí xếp hạng khách vay.",
      lessons: [
        {
          id: "td1",
          title: "Lãi suất danh nghĩa, lãi suất thực và EAR",
          minutes: 22,
          level: "Trung bình",
          summary: "Quy đổi lãi suất về cùng một thước đo để so sánh đúng chi phí vay và lợi suất gửi.",
          points: [
            "Lãi suất hiệu dụng EAR tính cả tác động ghép lãi trong năm.",
            "Lãi suất thực loại bỏ ảnh hưởng của lạm phát.",
            "Số kỳ ghép lãi càng nhiều thì EAR càng cao."
          ],
          steps: [
            { title: "Danh nghĩa và hiệu dụng", body: "Lãi suất danh nghĩa 12 phần trăm một năm ghép lãi hàng tháng cho EAR bằng (1 cộng 0,01) mũ 12 trừ 1, khoảng 12,68 phần trăm. Cùng con số 12 nhưng số kỳ ghép càng nhiều thì chi phí thật càng cao. So vay tiêu dùng phải so EAR chứ không so lãi suất danh nghĩa.", tip: "EAR luôn lớn hơn hoặc bằng lãi suất danh nghĩa khi có ghép lãi." },
            { title: "Lãi suất thực và lạm phát", body: "Lãi suất thực xấp xỉ lãi suất danh nghĩa trừ lạm phát, chính xác hơn là (1 cộng i) chia (1 cộng lạm phát) trừ 1. Danh nghĩa 12 phần trăm với lạm phát 4 phần trăm cho lãi thực khoảng 7,7 phần trăm. Gửi tiết kiệm 6 phần trăm khi lạm phát 7 phần trăm là đang mất sức mua dù thấy tiền tăng.", tip: "Luôn hỏi lạm phát cùng kỳ trước khi kết luận lãi hay lỗ." },
            { title: "Các mức lãi suất trên thị trường", body: "Lãi suất huy động, lãi suất cho vay, lãi suất liên ngân hàng và lãi suất điều hành không bằng nhau. Chênh lệch huy động và cho vay tạo thu nhập lãi thuần cho ngân hàng. Khi lãi suất liên ngân hàng tăng đột biến, chi phí vốn của ngân hàng cũng tăng theo dù lãi suất cho vay chưa đổi.", tip: "Vẽ ba đường lãi suất theo thời gian để thấy độ trễ truyền dẫn." }
          ],
          formula: "EAR = (1 + r/k)^k − 1"
        },
        {
          id: "td2",
          title: "Lịch trả nợ: gốc đều và niên kim cố định",
          minutes: 26,
          level: "Nâng cao",
          summary: "Lập bảng trả nợ bốn cột và so hai cách trả để thấy khác biệt về tổng lãi.",
          points: [
            "Mỗi kỳ gồm dư nợ đầu kỳ, lãi, gốc và dư nợ cuối kỳ.",
            "Niên kim cố định làm lãi giảm dần, gốc tăng dần.",
            "Trả gốc đều có tổng lãi thấp hơn nhưng áp lực kỳ đầu cao hơn."
          ],
          steps: [
            { title: "Bốn cột của một kỳ trả nợ", body: "Mỗi kỳ gồm dư nợ đầu kỳ, lãi bằng dư nợ nhân lãi suất kỳ, gốc trả bằng khoản trả cố định trừ lãi và dư nợ cuối kỳ bằng đầu kỳ trừ gốc. Tháng đầu của khoản vay 500 triệu: lãi 5 triệu, trả 23,54 triệu nên gốc 18,54 triệu, dư nợ còn 481,46 triệu. Lập đúng bốn cột thì kỳ cuối tự về 0.", tip: "Kiểm tra dư nợ cuối kỳ cuối cùng phải đúng bằng 0." },
            { title: "Niên kim cố định và gốc đều", body: "Niên kim cố định giữ tổng khoản trả không đổi nên phần lãi giảm dần và phần gốc tăng dần. Trả gốc đều giữ gốc 20,83 triệu mỗi tháng nên tổng tiền trả giảm dần và tổng lãi thấp hơn. Ngân hàng thường mặc định niên kim vì khách dễ lập kế hoạch dòng tiền.", tip: "Vẽ hai cột lãi và gốc cạnh nhau để thấy hình dạng đổi vai." },
            { title: "Trả trước hạn và phí phạt", body: "Trả trước hạn làm giảm dư nợ nên giảm lãi phải trả, nhưng nhiều hợp đồng thu phí phạt 1 đến 3 phần trăm trên dư nợ trả trước. Phải so tổng lãi tiết kiệm với phí phạt rồi mới quyết định. Cũng cần kiểm tra lãi được tính trên dư nợ thực tế hay dư nợ ban đầu.", tip: "Đọc kỹ điều khoản phạt trả trước, đây là khoản hay bị bỏ qua." }
          ],
          formula: "Lãi kỳ t = Dư nợ đầu kỳ × lãi suất kỳ"
        },
        {
          id: "td3",
          title: "Thẩm định và xếp hạng tín dụng",
          minutes: 24,
          level: "Nâng cao",
          summary: "Chấm điểm khách vay theo bốn nhóm yếu tố và kiểm tra ngưỡng tỷ lệ nợ trên thu nhập.",
          points: [
            "Lịch sử thanh toán là yếu tố có trọng số lớn nhất.",
            "DTI trên 40 phần trăm khiến nhiều ngân hàng thận trọng.",
            "Thẩm định gồm cả yếu tố định tính như mục đích và nguồn trả nợ."
          ],
          steps: [
            { title: "Bốn nhóm yếu tố chấm điểm", body: "Điểm tín dụng thường dựa trên lịch sử thanh toán, tỷ lệ dư nợ trên hạn mức, thời gian sử dụng tín dụng và số lần hỏi vay mới. Lịch sử thanh toán có trọng số lớn nhất vì dự báo tốt nhất hành vi trả nợ. Một lần trễ 30 ngày có thể kéo điểm xuống hàng chục điểm.", tip: "Đặt lịch nhắc thanh toán tự động, đây là cách rẻ nhất để giữ điểm." },
            { title: "Tỷ lệ nợ trên thu nhập", body: "DTI bằng tổng khoản trả nợ hàng tháng chia thu nhập hàng tháng. Khách trả 12 triệu trên thu nhập 30 triệu có DTI 40 phần trăm, chạm ngưỡng nhiều ngân hàng bắt đầu thận trọng. DTI trên 50 phần trăm thường bị từ chối hoặc phải giảm hạn mức vay.", tip: "Tính DTI trên thu nhập ổn định, không tính thưởng không đều." },
            { title: "Phần định tính của hồ sơ", body: "Ngoài điểm số, cán bộ tín dụng xem mục đích vay, nguồn trả nợ và lịch sử quan hệ với ngân hàng. Hộ kinh doanh có doanh thu tốt nhưng thu nhập không chứng minh được vẫn bị xếp hạng thấp. Vì thế hồ sơ giấy tờ rõ ràng quan trọng không kém điểm tín dụng.", tip: "Chuẩn bị sao kê 6 tháng và giấy tờ chứng minh thu nhập trước khi nộp." }
          ],
          formula: "DTI = Tổng khoản trả nợ hàng tháng / Thu nhập hàng tháng"
        }
      ]
    },
    {
      title: "Ngân hàng và thị trường tài chính",
      summary: "Đi vào bên trong bảng cân đối ngân hàng và cách định giá một trái phiếu đơn giản.",
      lessons: [
        {
          id: "tt1",
          title: "Chức năng trung gian của ngân hàng",
          minutes: 20,
          level: "Trung bình",
          summary: "Giải thích cách ngân hàng biến khoản tiền gửi nhỏ thành khoản vay lớn và kiếm chênh lệch lãi.",
          points: [
            "Ngân hàng huy động vốn nhàn rỗi và cho vay lại.",
            "Chuyển hóa kỳ hạn là nguồn gốc của cả lợi nhuận lẫn rủi ro.",
            "Hoạt động cho vay tạo thêm tiền gửi trong hệ thống."
          ],
          steps: [
            { title: "Huy động và cho vay", body: "Ngân hàng nhận tiền gửi ngắn hạn của hàng nghìn khách rồi cho doanh nghiệp vay dài hạn. Nhờ quy mô lớn, ngân hàng dự đoán được dòng tiền rút ra hàng ngày nên chỉ cần giữ một phần dự trữ. Chức năng này gọi là trung gian tín dụng, biến nhiều khoản tiền nhỏ thành khoản vay lớn.", tip: "Hình dung 10.000 khoản gửi 10 triệu thành một khoản vay 100 tỷ." },
            { title: "Chuyển hóa kỳ hạn", body: "Người gửi muốn rút bất cứ lúc nào, người vay cần tiền 5 năm, ngân hàng đứng giữa để chuyển hóa kỳ hạn. Đổi lại ngân hàng thu chênh lệch lãi suất, gọi là thu nhập lãi thuần. Chính việc chuyển hóa này tạo ra rủi ro thanh khoản khi nhiều người rút cùng lúc.", tip: "Ghi rõ kỳ hạn hai bên của bảng cân đối trước khi nói đến rủi ro." },
            { title: "Thanh toán và tạo tiền", body: "Ngân hàng cung cấp dịch vụ thanh toán, phát hành thẻ và bảo lãnh, giúp nền kinh tế giảm nhu cầu giữ tiền mặt. Khi cho vay, ngân hàng tạo thêm tiền gửi trong hệ thống nên cung tiền phụ thuộc hoạt động tín dụng. Đây là lý do ngân hàng trung ương quản lý chặt tỷ lệ dự trữ bắt buộc.", tip: "Phân biệt tiền do ngân hàng trung ương phát hành và tiền gửi do tín dụng tạo ra." }
          ]
        },
        {
          id: "tt2",
          title: "Rủi ro lãi suất và thanh khoản",
          minutes: 24,
          level: "Nâng cao",
          summary: "Nhận diện hai rủi ro cốt lõi của ngân hàng qua khe hở kỳ hạn và tỷ lệ cho vay trên huy động.",
          points: [
            "Khe hở kỳ hạn lớn làm biên lãi co lại khi lãi suất tăng.",
            "Tỷ lệ cho vay trên huy động cao là dấu hiệu đệm thanh khoản mỏng.",
            "Stress test đo khả năng chịu đựng khi tiền gửi bị rút nhanh."
          ],
          steps: [
            { title: "Rủi ro lãi suất", body: "Ngân hàng huy động 12 tháng với lãi 6 phần trăm nhưng cho vay 5 năm với lãi 9 phần trăm. Nếu lãi suất huy động tăng lên 9 phần trăm, chi phí vốn vượt thu nhập lãi và biên lãi thu hẹp. Khe hở kỳ hạn giữa tài sản và nợ càng lớn thì rủi ro lãi suất càng cao.", tip: "Vẽ hai cột kỳ hạn tài sản và nợ, phần lệch chính là khe hở." },
            { title: "Rủi ro thanh khoản", body: "Tỷ lệ cho vay trên huy động 105 phần trăm nghĩa là ngân hàng đã dùng cả vốn ngắn hạn cho vay dài hạn và phải vay thêm trên thị trường liên ngân hàng. Khi thị trường đóng băng, ngân hàng buộc phải bán tài sản gấp hoặc vay với lãi cao. Đệm thanh khoản mỏng là điểm yếu chết người khi xuất hiện tin đồn.", tip: "Theo dõi tỷ lệ cho vay trên huy động cùng tỷ lệ dự trữ thanh khoản." },
            { title: "Quản trị bằng hạn mức", body: "Ngân hàng đặt hạn mức khe hở kỳ hạn theo từng khung thời gian, duy trì dự trữ và đa dạng hóa nguồn vốn. Stress test giả định 20 phần trăm tiền gửi bị rút trong 5 ngày để đo sức chịu đựng. Quản trị tốt không loại bỏ rủi ro mà giữ nó trong mức chấp nhận được.", tip: "Đọc phần thuyết minh rủi ro trong báo cáo thường niên của ngân hàng." }
          ]
        },
        {
          id: "tt3",
          title: "Định giá trái phiếu và lợi suất",
          minutes: 26,
          level: "Nâng cao",
          summary: "Chiết khấu dòng tiền coupon để định giá trái phiếu và giải thích quan hệ nghịch với lợi suất.",
          points: [
            "Giá trái phiếu là hiện giá của coupon và mệnh giá.",
            "Coupon thấp hơn lợi suất thị trường thì giá dưới mệnh giá.",
            "Kỳ hạn càng dài thì giá càng nhạy với lợi suất."
          ],
          steps: [
            { title: "Dòng tiền của một trái phiếu", body: "Trái phiếu mệnh giá 100.000 đồng, coupon 8 phần trăm, kỳ hạn 3 năm trả mỗi năm 8.000 đồng và hoàn 100.000 đồng ở năm cuối. Giá trái phiếu là hiện giá của bốn dòng tiền này. Không có dòng tiền nào khác nên định giá trái phiếu là bài chiết khấu thuần túy.", tip: "Liệt kê dòng tiền theo từng năm trước khi bấm máy." },
            { title: "Định giá với lợi suất 10 phần trăm", body: "Chiết khấu ba dòng 8.000 đồng và dòng 108.000 đồng ở năm ba với lợi suất 10 phần trăm cho giá khoảng 95.026 đồng. Trái phiếu bán dưới mệnh giá vì coupon 8 phần trăm thấp hơn lợi suất thị trường 10 phần trăm. Nếu lợi suất giảm còn 6 phần trăm, giá sẽ vượt mệnh giá.", tip: "Nhớ cộng mệnh giá vào dòng tiền của kỳ cuối." },
            { title: "Quan hệ nghịch và duration", body: "Giá trái phiếu luôn biến động ngược chiều lợi suất. Kỳ hạn càng dài thì giá càng nhạy với thay đổi lợi suất, được đo bằng duration. Nhà đầu tư dự báo lãi suất tăng sẽ chọn kỳ hạn ngắn để giảm thiệt hại. Đây là lý do quỹ trái phiếu dài hạn lỗ mạnh khi lãi suất tăng nhanh.", tip: "Duration xấp xỉ phần trăm thay đổi giá khi lợi suất đổi 1 phần trăm." }
          ],
          formula: "P = Σ C/(1+y)^t + F/(1+y)^n"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Lãi đơn", back: "Lãi chỉ tính trên vốn gốc ban đầu trong suốt kỳ hạn.", hint: "Không sinh lãi trên lãi.", example: "100 triệu, 8 phần trăm một năm, sau 8 năm thành 164 triệu." },
    { front: "Lãi kép", back: "Lãi được tính trên cả vốn gốc và phần lãi đã sinh ra ở các kỳ trước.", hint: "Lãi sinh lãi.", example: "Cùng 100 triệu và 8 phần trăm, sau 8 năm thành 185,1 triệu." },
    { front: "Giá trị tương lai", back: "Giá trị một khoản tiền hôm nay được đưa về một thời điểm trong tương lai theo lãi suất.", hint: "Nhân với (1 + r) mũ n.", example: "100 triệu sau 3 năm với 8 phần trăm là 125,97 triệu." },
    { front: "Hiện giá", back: "Giá trị hôm nay của một khoản tiền sẽ nhận trong tương lai, sau khi chiết khấu.", hint: "Chia cho (1 + r) mũ n.", example: "500 triệu sau 5 năm với 7 phần trăm có hiện giá 356,5 triệu." },
    { front: "Niên kim", back: "Chuỗi khoản tiền bằng nhau phát sinh đều đặn trong nhiều kỳ.", hint: "Dòng tiền đều.", example: "Trả góp 23,54 triệu đồng mỗi tháng trong 24 tháng." },
    { front: "Lãi suất hiệu dụng EAR", back: "Lãi suất quy về một năm sau khi tính tác động ghép lãi của các kỳ trong năm.", hint: "Danh nghĩa 12 phần trăm ghép tháng cho EAR 12,68 phần trăm.", example: "Vay ghi 12 phần trăm một năm nhưng chi phí thật là 12,68 phần trăm." },
    { front: "Lãi suất thực", back: "Lãi suất đã loại bỏ lạm phát, phản ánh sức mua tăng thêm thật sự.", hint: "Danh nghĩa trừ lạm phát.", example: "Danh nghĩa 12 phần trăm, lạm phát 4 phần trăm, lãi thực khoảng 7,7 phần trăm." },
    { front: "Dư nợ giảm dần", back: "Cách tính lãi trên số dư nợ còn lại sau mỗi kỳ thay vì trên số vay ban đầu.", hint: "Lãi giảm dần theo dư nợ.", example: "Tháng đầu lãi 5 triệu, tháng sau chỉ còn 4,81 triệu." },
    { front: "DTI", back: "Tỷ lệ tổng khoản trả nợ hàng tháng trên thu nhập hàng tháng của người vay.", hint: "Nợ trên thu nhập.", example: "Trả 12 triệu trên thu nhập 30 triệu là DTI 40 phần trăm." },
    { front: "Thu nhập lãi thuần", back: "Chênh lệch giữa lãi thu từ cho vay và lãi trả cho tiền gửi, nguồn thu chính của ngân hàng.", hint: "Chênh lệch lãi cho vay và huy động.", example: "Cho vay 9 phần trăm, huy động 6 phần trăm, chênh 3 phần trăm." },
    { front: "Khe hở kỳ hạn", back: "Chênh lệch giữa kỳ hạn của tài sản có và tài sản nợ, tạo ra rủi ro lãi suất cho ngân hàng.", hint: "Vay ngắn cho vay dài.", example: "Huy động 12 tháng nhưng cho vay 5 năm." },
    { front: "Quan hệ giá trái phiếu và lợi suất", back: "Giá trái phiếu biến động ngược chiều với lợi suất thị trường.", hint: "Lợi suất tăng thì giá giảm.", example: "Lợi suất từ 8 lên 10 phần trăm làm giá trái phiếu coupon 8 phần trăm xuống dưới mệnh giá." }
  ],
  quiz: [
    { q: "Gửi 100 triệu đồng với lãi kép 8 phần trăm một năm, sau 2 năm số dư khoảng bao nhiêu triệu đồng?", options: ["116", "116,64", "124", "108"], answer: 1, explain: "100 nhân 1,08 mũ 2 bằng 116,64 triệu đồng, cao hơn lãi đơn 0,64 triệu." },
    { q: "Lãi kép khác lãi đơn ở điểm nào?", options: ["Lãi kép tính trên dư nợ giảm dần", "Lãi kép luôn thấp hơn lãi đơn", "Lãi đơn chỉ dùng cho vay tiêu dùng", "Lãi kép tính lãi trên cả phần lãi đã sinh ra"], answer: 3, explain: "Lãi kép tái đầu tư phần lãi nên kỳ sau tính lãi trên số lớn hơn." },
    { q: "Cần 500 triệu đồng sau 5 năm với lãi suất 7 phần trăm một năm, số tiền gửi hôm nay xấp xỉ:", options: ["356,5 triệu", "375 triệu", "400 triệu", "428 triệu"], answer: 0, explain: "500 chia 1,07 mũ 5 bằng khoảng 356,5 triệu đồng." },
    { q: "Lãi suất danh nghĩa 12 phần trăm một năm ghép lãi hàng tháng có EAR xấp xỉ:", options: ["12,00 phần trăm", "12,36 phần trăm", "12,68 phần trăm", "13,20 phần trăm"], answer: 2, explain: "(1 + 0,01) mũ 12 trừ 1 bằng khoảng 12,68 phần trăm." },
    { q: "Trong lịch trả nợ theo niên kim cố định, theo thời gian thì:", options: ["phần lãi tăng dần, phần gốc giảm dần", "phần lãi giảm dần, phần gốc tăng dần", "cả hai phần không đổi", "phần gốc bằng 0 ở kỳ đầu"], answer: 1, explain: "Dư nợ giảm nên lãi giảm, khoản trả không đổi nên phần gốc tăng dần." },
    { q: "Khách trả nợ 12 triệu đồng mỗi tháng trên thu nhập 30 triệu đồng có DTI bằng:", options: ["25 phần trăm", "30 phần trăm", "36 phần trăm", "40 phần trăm"], answer: 3, explain: "12 chia 30 bằng 0,4, tức 40 phần trăm." },
    { q: "Giá trái phiếu và lợi suất thị trường có quan hệ:", options: ["cùng chiều", "không liên quan", "nghịch chiều", "chỉ phụ thuộc kỳ hạn"], answer: 2, explain: "Lợi suất tăng làm suất chiết khấu tăng nên hiện giá các dòng tiền giảm." },
    { q: "Chức năng trung gian tín dụng của ngân hàng thể hiện ở việc:", options: ["huy động vốn nhàn rỗi và cho vay lại", "in tiền theo kế hoạch", "thu thuế cho ngân sách", "bảo hiểm tiền gửi cho khách"], answer: 0, explain: "Ngân hàng tập hợp vốn nhỏ, ngắn hạn để cho vay lớn, dài hạn." },
    { q: "Khi lãi suất huy động tăng nhanh trong khi cho vay dài hạn lãi cố định, ngân hàng chịu:", options: ["lợi nhuận tăng chắc chắn", "không ảnh hưởng gì", "rủi ro tỷ giá", "chi phí vốn tăng nhanh hơn thu nhập lãi"], answer: 3, explain: "Đó là rủi ro lãi suất do khe hở kỳ hạn, làm biên lãi thu hẹp." },
    { q: "Ngân hàng có tỷ lệ cho vay trên huy động 105 phần trăm cho thấy:", options: ["thanh khoản rất dồi dào", "đang dùng vốn ngắn hạn cho vay dài hạn và đệm thanh khoản mỏng", "đã huy động thừa vốn", "không có rủi ro nào"], answer: 1, explain: "Tỷ lệ trên 100 phần trăm nghĩa là cho vay vượt vốn huy động, phải dựa vào vay liên ngân hàng." }
  ],
  lab: {
    kind: "chart",
    mode: "line",
    title: "Lãi đơn và lãi kép",
    lead: "Hai series cùng xuất phát từ 100 triệu đồng với lãi suất 8 phần trăm một năm. Đường lãi đơn đi thẳng, đường lãi kép cong lên và bỏ xa sau vài năm.",
    stageLabel: "Biểu đồ",
    controlNote: "Đọc từng mốc để thấy năm đầu hai cách gần như trùng nhau, từ năm thứ tư khoảng cách mở rộng rõ rệt. Đơn vị trên biểu đồ là triệu đồng.",
    note: "Sau 8 năm, lãi đơn cho 164 triệu đồng còn lãi kép cho 185,1 triệu đồng, chênh lệch 21,1 triệu đồng chỉ nhờ phần lãi sinh ra từ lãi.",
    labels: ["N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8"],
    series: [
      { label: "Lãi đơn 8%/năm", color: "#0369a1", data: [108, 116, 124, 132, 140, 148, 156, 164] },
      { label: "Lãi kép 8%/năm", color: "#0f766e", data: [108, 116.6, 126, 136, 146.9, 158.7, 171.4, 185.1] }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Hải Yến", progress: 84, score: 8.5, status: "Tốt", note: "Tính lãi kép và hiện giá chắc, cần luyện định giá trái phiếu." },
      { name: "Trần Bảo Khang", progress: 56, score: 7.0, status: "Đang học", note: "Hay quên đổi lãi suất năm sang lãi suất tháng." },
      { name: "Lê Diệu Linh", progress: 92, score: 9.2, status: "Tốt", note: "Lập lịch trả nợ không lệch kỳ cuối, làm được bài nâng cao." },
      { name: "Phạm Tuấn Kiệt", progress: 29, score: 5.4, status: "Cần hỗ trợ", note: "Chưa phân biệt được lãi đơn và lãi kép trong bài tính." },
      { name: "Vũ Minh Anh", progress: 68, score: 7.6, status: "Đang học", note: "Hiểu DTI, cần luyện phần rủi ro thanh khoản." },
      { name: "Đỗ Thanh Tùng", progress: 47, score: 6.3, status: "Đang học", note: "Nộp bài muộn, nên làm lại bài niên kim." }
    ],
    submissions: [
      { student: "Nguyễn Hải Yến", lesson: "Bài tập định giá trái phiếu", time: "Hôm nay 09:10", status: "Chờ chấm" },
      { student: "Phạm Tuấn Kiệt", lesson: "Phiếu lãi đơn và lãi kép", time: "Hôm qua 23:20", status: "Chờ chấm" },
      { student: "Lê Diệu Linh", lesson: "Bài tập lịch trả nợ 24 kỳ", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Sáu chữa bài lịch trả nợ, sinh viên mang theo bảng tính 24 kỳ đã lập.",
      "Bài kiểm tra giữa kỳ gồm hai bài tính lãi và một câu phân tích rủi ro ngân hàng.",
      "Lớp được cấp bộ số liệu lãi suất ba năm để làm bài so sánh EAR trước buổi sau."
    ]
  },
  className: "Tài chính – Ngân hàng – K26",
  brief: "BTL-14_financeflow-mon-tai-chinh-ngan-hang.md"
};
