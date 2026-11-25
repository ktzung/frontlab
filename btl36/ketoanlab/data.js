window.BTL_DATA = {
  id: "ketoanlab",
  code: "BTL-12",
  name: "KếToánLab",
  monogram: "Nợ",
  subject: "Nguyên lý kế toán",
  level: "Đại học",
  group: "Kinh tế & Pháp luật",
  accent: "#0f766e",
  accent2: "#0369a1",
  font: "mono",
  tagline: "Ghi từng bút toán Nợ – Có và thấy số dư tài khoản, bảng cân đối cập nhật ngay trước mắt.",
  intro: "KếToánLab biến vòng kế toán thành một sổ nhật ký tương tác: mỗi nghiệp vụ được định khoản, ghi sổ rồi lan sang sổ cái và bảng cân đối. Sinh viên thấy rõ vì sao một tài khoản tăng bên Nợ còn tài khoản khác tăng bên Có, thay vì học thuộc từng bút toán mẫu.",
  hero: { title: "Nợ và Có", highlight: "cân ngay khi ghi sổ" },
  heroBadge: "Sổ nhật ký sống · Cân đối tức thì",
  labShort: "SỔ NHẬT KÝ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ tài khoản" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách luyện Nguyên lý kế toán: định khoản từng bước, nhìn bảng cân đối tự cập nhật và lật sổ cái từng tài khoản.",
  pathLead: "Bắt đầu từ phương trình kế toán và kết cấu tài khoản, đi qua chu trình chứng từ, nhật ký, sổ cái, rồi kết thúc bằng việc đọc báo cáo tài chính và tính chỉ số.",
  features: [
    { badge: "01", title: "Định khoản từng bước", desc: "Hệ thống hỏi lần lượt tài sản nào tăng, nguồn nào tăng, từ đó gợi ý cặp tài khoản Nợ – Có kèm lý do thay vì đưa đáp án sẵn." },
    { badge: "02", title: "Bảng cân đối sống", desc: "Mỗi bút toán vừa ghi làm số dư tài khoản và bảng cân đối cập nhật ngay, kèm cảnh báo khi tổng hai bên lệch." },
    { badge: "03", title: "Sổ cái thẻ lật", desc: "Mỗi tài khoản là một thẻ: mặt trước là số hiệu, tên và tính chất, mặt sau là phát sinh Nợ, Có cùng số dư cuối kỳ." }
  ],
  life: [
    {
      title: "Mua xe máy trả góp",
      scene: "Một sinh viên mua xe máy mười tám triệu, trả trước năm triệu, phần còn lại trả góp. Trong sổ tay, chiếc xe nằm ở cột tài sản, khoản nợ nằm ở cột phải trả, và hai bên vẫn khớp với số tiền đã bỏ ra.",
      connect: "Đó là phương trình cân đối và ghi sổ kép: mỗi nghiệp vụ ghi hai mặt, tài sản tăng thì nguồn vốn cũng tăng một khoản tương ứng, nên tổng hai bên không thể lệch."
    },
    {
      title: "Ghi chép tiền ăn cả tháng",
      scene: "Một người giữ hóa đơn siêu thị và ảnh chụp chuyển khoản trong một phong bì, cuối tuần chép vào sổ theo ngày, cuối tháng cộng lại từng khoản để biết tháng này tiêu bao nhiêu.",
      connect: "Đó là chu trình kế toán thu nhỏ: chứng từ gốc là hóa đơn, sổ nhật ký ghi theo ngày, sổ cái gom theo từng khoản, và bảng cộng cuối tháng phải khớp trước khi chốt."
    },
    {
      title: "Xem sổ của quán cà phê nhỏ",
      scene: "Một quán cà phê nhỏ đưa sổ cho người nhà xem để vay vốn. Sổ ghi doanh thu mỗi ngày, tiền thuê và lương, nhưng không tách khoản đã trả với khoản còn nợ, nên nhìn vào không biết quán thật sự còn bao nhiêu.",
      connect: "Đọc báo cáo tài chính là tách đúng ba lớp: bảng cân đối cho biết đang có gì và nợ ai, kết quả kinh doanh cho biết lãi qua từng tầng, chỉ số thanh toán cho biết có trả nổi nợ ngắn hạn không."
    }
  ],
  modules: [
    {
      title: "Đối tượng, phương trình và tài khoản",
      summary: "Nắm hai mặt của một nguồn lực, kết cấu chữ T và quy tắc ghi sổ kép trước khi chạm vào sổ.",
      lessons: [
        {
          id: "kt1",
          title: "Đối tượng kế toán và phương trình cân đối",
          minutes: 16,
          level: "Cơ bản",
          summary: "Nhận diện tài sản, nợ phải trả, vốn chủ sở hữu và chứng minh phương trình luôn cân sau mỗi nghiệp vụ.",
          points: [
            "Tài sản là nguồn lực doanh nghiệp kiểm soát và dự kiến mang lợi ích kinh tế.",
            "Nguồn vốn hình thành tài sản gồm nợ phải trả và vốn chủ sở hữu.",
            "Mọi nghiệp vụ kinh tế đều giữ nguyên cân đối giữa hai vế."
          ],
          steps: [
            { title: "Hai mặt của một nguồn lực", body: "Một cửa hàng có 500 triệu đồng tiền mặt và 300 triệu đồng hàng hóa: đó là tài sản. Để có chúng, chủ cửa hàng góp 600 triệu vốn và vay ngân hàng 200 triệu: đó là nguồn hình thành. Kế toán ghi nhận cùng một lượng theo hai góc nhìn nên tổng hai vế luôn bằng nhau.", tip: "Luôn hỏi: cái gì đang có, và của ai." },
            { title: "Kiểm tra phương trình sau nghiệp vụ", body: "Mua hàng hóa 50 triệu chưa trả tiền làm hàng tồn kho tăng 50 triệu và nợ phải trả tăng 50 triệu, phương trình 800 = 400 + 400 chuyển thành 850 = 450 + 400. Trả nợ 50 triệu bằng tiền mặt làm tài sản và nợ cùng giảm, vẫn cân. Chỉ cần xét hai vế cùng tăng, cùng giảm hoặc dịch chuyển trong nội bộ một vế.", tip: "Vẽ hai cột tài sản và nguồn vốn rồi ghi thay đổi bằng mũi tên lên xuống." },
            { title: "Phân loại đúng để định khoản đúng", body: "Tiền mặt, phải thu khách hàng, hàng tồn kho, thiết bị là tài sản. Phải trả người bán và vay ngân hàng là nợ phải trả. Vốn góp của chủ sở hữu và lợi nhuận giữ lại là vốn chủ sở hữu. Doanh thu và chi phí là tài khoản tạm thời, cuối kỳ kết chuyển hết vào lợi nhuận.", tip: "Ba câu hỏi: thuộc tài sản, thuộc nợ, hay thuộc vốn chủ." }
          ],
          formula: "Tổng tài sản = Nợ phải trả + Vốn chủ sở hữu"
        },
        {
          id: "kt2",
          title: "Kết cấu tài khoản: bên Nợ, bên Có",
          minutes: 18,
          level: "Cơ bản",
          summary: "Học quy tắc bốn nhóm tài khoản và cách tính số dư cuối kỳ từ số dư đầu kỳ.",
          points: [
            "Tài sản và chi phí tăng ghi bên Nợ, giảm ghi bên Có.",
            "Nguồn vốn và doanh thu tăng ghi bên Có, giảm ghi bên Nợ.",
            "Nợ và Có là tên hai bên tài khoản, không mang nghĩa đi vay."
          ],
          steps: [
            { title: "Bốn nhóm, một quy tắc", body: "Tài khoản 111 Tiền mặt tăng khi thu tiền nên ghi bên Nợ, giảm khi chi tiền nên ghi bên Có, số dư nằm bên Nợ. Tài khoản 331 Phải trả người bán tăng khi mua chịu nên ghi bên Có và số dư nằm bên Có. Nhớ theo cặp: tài sản đi với chi phí, nguồn vốn đi với doanh thu.", tip: "Vẽ chữ T và ghi chữ Tăng ở đúng bên trước khi học số hiệu tài khoản." },
            { title: "Nợ và Có không phải vay nợ", body: "Sinh viên hay dịch Nợ thành đi vay và Có thành có tiền nên định khoản ngược dấu. Thực chất Nợ là bên trái, Có là bên phải của chữ T tài khoản. Tài khoản tiền mặt tăng vẫn ghi Nợ dù doanh nghiệp không vay một đồng nào.", tip: "Đọc Nợ là bên trái, Có là bên phải, đừng dịch nghĩa đời thường." },
            { title: "Số dư và số phát sinh", body: "Số dư cuối kỳ bằng số dư đầu kỳ cộng phát sinh tăng trừ phát sinh giảm. Với TK 111 đầu kỳ 100 triệu, thu 90 triệu, chi 40 triệu thì cuối kỳ còn 150 triệu. Tài khoản lưỡng tính như 131 có thể dư bên Nợ khi khách còn nợ hoặc dư bên Có khi khách trả trước.", tip: "Ghi số dư sau từng dòng để không phải cộng lại cả trang khi kiểm tra." }
          ],
          formula: "Số dư cuối = Số dư đầu + Phát sinh tăng − Phát sinh giảm"
        },
        {
          id: "kt3",
          title: "Ghi sổ kép và định khoản",
          minutes: 22,
          level: "Trung bình",
          summary: "Viết bút toán chuẩn cho nghiệp vụ mua bán và nhận diện ba lỗi định khoản phổ biến.",
          points: [
            "Mỗi nghiệp vụ ghi ít nhất hai tài khoản với tổng Nợ bằng tổng Có.",
            "Định khoản phải đủ tên tài khoản, số hiệu và số tiền.",
            "Định khoản sai bên làm bảng cân đối lệch ngay."
          ],
          steps: [
            { title: "Vì sao phải ghi hai bên", body: "Mua thiết bị 80 triệu trả bằng chuyển khoản làm tài sản thiết bị tăng 80 triệu, đồng thời tiền gửi giảm 80 triệu. Nếu chỉ ghi tăng thiết bị mà bỏ phần giảm tiền, bảng cân đối phồng thêm 80 triệu. Ghi sổ kép chính là cơ chế giữ phương trình kế toán luôn đúng.", tip: "Sau mỗi nghiệp vụ, tự hỏi vế còn lại của câu chuyện nằm ở đâu." },
            { title: "Viết một định khoản chuẩn", body: "Bán hàng thu tiền mặt 90 triệu được viết: Nợ TK 111 là 90.000.000, Có TK 511 là 90.000.000. Dòng Nợ viết trước và sát lề, dòng Có viết sau và thụt vào khoảng 2 ô. Một nghiệp vụ đơn không bao giờ có hai tài khoản cùng nằm bên Nợ.", tip: "Thụt lề dòng Có để người đọc thấy ngay cặp Nợ – Có." },
            { title: "Ba lỗi định khoản thường gặp", body: "Sai bên do nhầm nhóm tài khoản, sai tài khoản do dùng 131 khi đã thu tiền ngay, và sai số tiền do bỏ thuế giá trị gia tăng. Trước khi ghi sổ, đọc lại nghiệp vụ và xác định rõ khoản nào tăng, khoản nào giảm. Trong phòng lab, thử cố tình chọn sai rồi xem số dư lệch ra sao.", tip: "Đọc nghiệp vụ hai lần: một lần theo hướng người mua, một lần theo hướng người bán." }
          ],
          formula: "Tổng phát sinh Nợ = Tổng phát sinh Có"
        }
      ]
    },
    {
      title: "Chu trình kế toán",
      summary: "Đi trọn đường từ chứng từ gốc qua sổ nhật ký, sổ cái đến bảng cân đối và báo cáo tài chính.",
      lessons: [
        {
          id: "kt4",
          title: "Chứng từ gốc và sổ nhật ký chung",
          minutes: 18,
          level: "Trung bình",
          summary: "Xác định chứng từ hợp lệ và ghi nhật ký đúng thứ tự thời gian, đúng cột tài khoản.",
          points: [
            "Mọi bút toán phải có chứng từ gốc hợp lệ kèm theo.",
            "Sổ nhật ký chung ghi theo thứ tự phát sinh, không gom theo tài khoản.",
            "Số hiệu chứng từ giúp tra ngược từ sổ về chứng từ gốc."
          ],
          steps: [
            { title: "Chứng từ là bằng chứng", body: "Hóa đơn giá trị gia tăng, phiếu thu, phiếu chi, giấy báo Nợ của ngân hàng đều là chứng từ gốc. Không có chứng từ thì không có căn cứ ghi sổ dù nghiệp vụ đã xảy ra. Kế toán ghi ngày và số hiệu chứng từ để kiểm tra chéo khi quyết toán.", tip: "Đánh số chứng từ liên tục theo kỳ, không nhảy số." },
            { title: "Ghi nhật ký theo thời gian", body: "Sổ nhật ký chung có các cột ngày, số hiệu chứng từ, diễn giải, tài khoản Nợ, tài khoản Có và số tiền. Nghiệp vụ ngày 5 ghi trước nghiệp vụ ngày 7, không gom nhóm theo tài khoản. Cách ghi này giữ được dòng chảy nghiệp vụ và dựng lại được toàn bộ kỳ kế toán.", tip: "Một dòng nhật ký chỉ ứng với một cặp Nợ – Có để dễ đối chiếu." },
            { title: "Chuyển sang sổ cái", body: "Mỗi dòng nhật ký được chuyển vào tài khoản tương ứng ở sổ cái, một lần bên Nợ và một lần bên Có. Tổng phát sinh trên nhật ký luôn bằng tổng phát sinh trên toàn bộ sổ cái. Khi lệch, hãy tìm dòng ghi thiếu một chân thay vì cộng lại từ đầu.", tip: "Đánh dấu đã chuyển sổ bằng bút chì bên lề nhật ký." }
          ]
        },
        {
          id: "kt5",
          title: "Sổ cái và bảng cân đối số phát sinh",
          minutes: 22,
          level: "Trung bình",
          summary: "Lập sổ cái từng tài khoản và kiểm tra ba cặp cột cân nhau trên bảng cân đối số phát sinh.",
          points: [
            "Sổ cái theo dõi phát sinh và số dư của từng tài khoản riêng biệt.",
            "Bảng cân đối số phát sinh có ba cặp cột Nợ, Có cân nhau.",
            "Bảng cân không chứng minh được là không còn sai sót."
          ],
          steps: [
            { title: "Cấu trúc một trang sổ cái", body: "Mỗi tài khoản một trang: ngày, diễn giải, số tiền bên Nợ, số tiền bên Có và số dư sau từng dòng. Sổ cái trả lời câu hỏi tiền mặt còn bao nhiêu vào cuối kỳ. Sổ cái không thay thế nhật ký vì đã mất trình tự thời gian của toàn doanh nghiệp.", tip: "Ghi số dư ở cột ngoài cùng bên phải và ghi rõ dư Nợ hay dư Có." },
            { title: "Lập bảng cân đối số phát sinh", body: "Bảng gồm số dư đầu kỳ hai bên Nợ và Có, số phát sinh trong kỳ hai bên và số dư cuối kỳ hai bên. Tổng cột Nợ phải bằng tổng cột Có ở cả ba cặp. Với sáu bút toán mẫu trong phòng lab, mỗi bên phát sinh 440 triệu đồng.", tip: "Lập bảng từ số liệu sổ cái, không lấy lại từ nhật ký để tránh lặp cùng một lỗi." },
            { title: "Giới hạn của bảng cân đối", body: "Bảng vẫn cân nếu ghi cùng một số tiền sai vào hai tài khoản, hoặc bỏ sót cả hai chân của một nghiệp vụ. Vì thế phải đối chiếu với chứng từ và kiểm kê quỹ, không chỉ nhìn hai tổng bằng nhau. Kiểm tra cân đối là bước sàng lọc ban đầu, không phải bảo đảm tuyệt đối.", tip: "Đối chiếu thêm sổ quỹ tiền mặt và sao kê ngân hàng mỗi tháng." }
          ]
        },
        {
          id: "kt6",
          title: "Khóa sổ và lập báo cáo tài chính",
          minutes: 24,
          level: "Nâng cao",
          summary: "Kết chuyển doanh thu, chi phí để ra lợi nhuận rồi đóng kỳ và lập bộ báo cáo tài chính.",
          points: [
            "Kết chuyển doanh thu và chi phí để xác định lợi nhuận kỳ.",
            "Khóa sổ chặn ghi thêm bút toán vào kỳ đã chốt.",
            "Bộ báo cáo tài chính gồm bảng cân đối, kết quả kinh doanh và lưu chuyển tiền tệ."
          ],
          steps: [
            { title: "Kết chuyển cuối kỳ", body: "Doanh thu 140 triệu và chi phí quản lý 15 triệu được kết chuyển vào TK 911 Xác định kết quả kinh doanh, cho lợi nhuận trước thuế 125 triệu. Sau kết chuyển, các tài khoản doanh thu và chi phí về số dư 0 để kỳ sau đếm lại từ đầu. Bút toán kết chuyển không làm thay đổi tài sản, chỉ dồn kết quả vào một chỗ.", tip: "Kết chuyển doanh thu ghi Nợ 511 và Có 911, chi phí thì ngược lại." },
            { title: "Khóa sổ và sửa sai", body: "Khóa sổ là đánh dấu kỳ đã chốt, không ghi thêm bút toán vào kỳ đó. Nếu phát hiện sai sót sau khóa sổ, kế toán ghi bút toán điều chỉnh vào kỳ hiện tại thay vì sửa số cũ. Cách làm này giữ nguyên dấu vết để kiểm toán viên lần lại được.", tip: "Không bao giờ xóa dòng đã ghi; hãy ghi bút toán đảo hoặc điều chỉnh." },
            { title: "Bốn phần của bộ báo cáo", body: "Bảng cân đối kế toán cho biết tình hình tại một thời điểm, báo cáo kết quả kinh doanh cho biết hiệu quả cả kỳ, báo cáo lưu chuyển tiền tệ cho biết tiền vào ra. Thuyết minh báo cáo giải thích chính sách kế toán đã áp dụng như khấu hao và ghi nhận doanh thu. Đọc đủ bốn phần mới thấy trọn bức tranh.", tip: "Đối chiếu lợi nhuận trên báo cáo kết quả với thay đổi tiền trên lưu chuyển tiền tệ." }
          ]
        }
      ]
    },
    {
      title: "Đọc báo cáo tài chính",
      summary: "Chuyển từ người ghi sổ sang người đọc số: bảng cân đối, kết quả kinh doanh và các chỉ số.",
      lessons: [
        {
          id: "kt7",
          title: "Bảng cân đối kế toán",
          minutes: 20,
          level: "Trung bình",
          summary: "Đọc cấu trúc tài sản, nguồn vốn và kiểm tra tính cân đối bằng số liệu cụ thể.",
          points: [
            "Bảng phản ánh tài sản và nguồn vốn tại một thời điểm.",
            "Tài sản được xếp theo khả năng chuyển thành tiền giảm dần.",
            "Vốn chủ sở hữu bằng tổng tài sản trừ nợ phải trả."
          ],
          steps: [
            { title: "Đọc phần tài sản", body: "Tài sản ngắn hạn gồm tiền, phải thu và hàng tồn kho; tài sản dài hạn gồm thiết bị và nhà xưởng đã trừ khấu hao. Với số liệu phòng lab, tiền mặt 290 triệu, tiền gửi ngân hàng 10 triệu, phải thu khách hàng 25 triệu và hàng tồn kho 60 triệu, tổng cộng 385 triệu. Thứ tự trình bày theo khả năng chuyển thành tiền nhanh đến chậm.", tip: "Cộng lại phần tài sản trước, vì đó là con số phải khớp với nguồn vốn." },
            { title: "Đọc phần nguồn vốn", body: "Nợ phải trả 60 triệu nằm ở TK 331, vốn góp của chủ sở hữu 200 triệu ở TK 411 và lợi nhuận chưa phân phối 125 triệu. Tổng nguồn vốn cũng đúng 385 triệu, khớp tuyệt đối với tài sản. Nếu lệch, lỗi nằm ở bút toán chứ không nằm ở bảng.", tip: "Lợi nhuận chưa phân phối là phần chênh giữa doanh thu và chi phí lũy kế." },
            { title: "Đọc thông điệp tài chính", body: "Tài sản phần lớn là tiền mặt cho thấy thanh khoản tốt nhưng vốn đang nhàn rỗi. Nợ phải trả chỉ 60 triệu trên 385 triệu tổng nguồn cho thấy đòn bẩy thấp. Doanh nghiệp cùng ngành vay nhiều hơn có thể sinh lời cao hơn nhưng cũng dễ tổn thương khi lãi suất tăng.", tip: "So cơ cấu nguồn vốn với trung bình ngành trước khi kết luận tốt hay xấu." }
          ],
          formula: "Vốn chủ sở hữu = Tổng tài sản − Nợ phải trả"
        },
        {
          id: "kt8",
          title: "Báo cáo kết quả kinh doanh",
          minutes: 22,
          level: "Trung bình",
          summary: "Đi qua ba tầng lợi nhuận và đọc xu hướng biên gộp qua nhiều kỳ.",
          points: [
            "Doanh thu thuần trừ giá vốn cho lợi nhuận gộp.",
            "Chi phí bán hàng và quản lý làm giảm lợi nhuận hoạt động.",
            "Lợi nhuận sau thuế là phần còn lại thuộc về chủ sở hữu."
          ],
          steps: [
            { title: "Ba tầng lợi nhuận", body: "Doanh thu 140 triệu, giá vốn 80 triệu cho lợi nhuận gộp 60 triệu, tức biên gộp khoảng 43 phần trăm. Trừ chi phí quản lý 15 triệu còn lợi nhuận hoạt động 45 triệu. Trừ thuế thu nhập doanh nghiệp 20 phần trăm còn lợi nhuận sau thuế 36 triệu.", tip: "Ghi rõ từng tầng để biết lợi nhuận bị bào mòn ở khâu nào." },
            { title: "Doanh thu thuần và khoản giảm trừ", body: "Doanh thu bán hàng 150 triệu, chiết khấu thương mại 10 triệu cho doanh thu thuần 140 triệu. Chiết khấu, giảm giá và hàng bán bị trả lại đều là khoản giảm trừ doanh thu. Ghi nhận chúng thành chi phí sẽ làm sai cả doanh thu lẫn biên gộp.", tip: "Khoản giảm trừ nằm ngay dưới doanh thu bán hàng, không nằm dưới chi phí." },
            { title: "Đọc xu hướng ba kỳ", body: "Biên gộp ba năm 40, 43 và 41 phần trăm cho thấy năm thứ hai cải thiện nhờ giảm giá vốn. Nếu doanh thu tăng mà biên gộp giảm liên tục, doanh nghiệp có thể đang mua khách hàng bằng giá. Đặt các kỳ cạnh nhau quan trọng hơn đọc một con số tuyệt đối.", tip: "Luôn tính biên gộp và biên ròng theo phần trăm, không chỉ so số tuyệt đối." }
          ],
          formula: "Lợi nhuận sau thuế = Lợi nhuận trước thuế × (1 − thuế suất)"
        },
        {
          id: "kt9",
          title: "Chỉ số thanh toán và sinh lời",
          minutes: 26,
          level: "Nâng cao",
          summary: "Tính hệ số thanh toán ngắn hạn, thanh toán nhanh, ROA và ROE trên chính số liệu đã lập.",
          points: [
            "Hệ số thanh toán ngắn hạn so tài sản ngắn hạn với nợ ngắn hạn.",
            "Hệ số thanh toán nhanh loại hàng tồn kho khỏi tử số.",
            "ROA và ROE đo hiệu quả sử dụng tài sản và vốn chủ sở hữu."
          ],
          steps: [
            { title: "Hệ số thanh toán ngắn hạn", body: "Tài sản ngắn hạn 385 triệu chia nợ ngắn hạn 60 triệu cho hệ số 6,4, cao hơn nhiều mức an toàn thường gặp là 1,5 đến 2. Hệ số quá cao có thể là dấu hiệu giữ tiền nhàn rỗi thay vì đầu tư. Chỉ số này chỉ có nghĩa khi so với chính doanh nghiệp qua các kỳ hoặc so với ngành.", tip: "Đừng kết luận tốt chỉ vì hệ số lớn; hãy xem cơ cấu tài sản ngắn hạn." },
            { title: "Hệ số thanh toán nhanh", body: "Loại hàng tồn kho 60 triệu khỏi tài sản ngắn hạn, còn 325 triệu chia 60 triệu được 5,4. Chỉ số này đặc biệt quan trọng với doanh nghiệp có hàng tồn kho khó bán như máy móc chuyên dụng. Chênh lệch lớn giữa hai hệ số cảnh báo hàng tồn kho đang chiếm tỷ trọng cao.", tip: "Hai hệ số gần nhau nghĩa là tài sản ngắn hạn chủ yếu là tiền và khoản phải thu." },
            { title: "ROA và ROE", body: "Lợi nhuận sau thuế 36 triệu chia tổng tài sản 385 triệu cho ROA khoảng 9,4 phần trăm. Chia cho vốn chủ sở hữu 325 triệu cho ROE khoảng 11,1 phần trăm. ROE cao hơn ROA vì doanh nghiệp có nợ, nhưng vay nhiều cũng làm ROE biến động mạnh hơn khi kinh doanh đi xuống.", tip: "Nhớ quan hệ: ROE bằng ROA nhân hệ số đòn bẩy tài chính." }
          ],
          formula: "ROE = Lợi nhuận sau thuế / Vốn chủ sở hữu bình quân"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Tài khoản kế toán", back: "Công cụ ghi chép thường xuyên từng đối tượng kế toán, có hai bên Nợ và Có cùng số dư.", hint: "Chữ T với hai bên trái phải.", example: "TK 111 Tiền mặt theo dõi mọi khoản thu chi tiền mặt." },
    { front: "Ghi sổ kép", back: "Mỗi nghiệp vụ được ghi vào ít nhất hai tài khoản với tổng phát sinh Nợ bằng tổng phát sinh Có.", hint: "Không có bút toán một chân.", example: "Mua thiết bị 80 triệu: Nợ 211, Có 112." },
    { front: "Định khoản", back: "Việc xác định tên tài khoản, bên Nợ, bên Có và số tiền cho một nghiệp vụ kinh tế phát sinh.", hint: "Viết cặp Nợ – Có trước khi vào sổ.", example: "Nợ TK 111 90.000.000, Có TK 511 90.000.000." },
    { front: "Kết cấu tài khoản tài sản", back: "Phát sinh tăng ghi bên Nợ, phát sinh giảm ghi bên Có, số dư thường nằm bên Nợ.", hint: "Tài sản đi cùng chiều với chi phí.", example: "Thu tiền mặt 90 triệu ghi Nợ TK 111." },
    { front: "Kết cấu tài khoản nguồn vốn", back: "Phát sinh tăng ghi bên Có, phát sinh giảm ghi bên Nợ, số dư thường nằm bên Có.", hint: "Nguồn vốn đi cùng chiều với doanh thu.", example: "Mua chịu 60 triệu ghi Có TK 331." },
    { front: "Chứng từ gốc", back: "Bằng chứng ban đầu của nghiệp vụ như hóa đơn, phiếu thu, phiếu chi, giấy báo Nợ ngân hàng.", hint: "Có chứng từ mới có căn cứ ghi sổ.", example: "Phiếu chi 15 triệu kèm bảng lương tháng 9." },
    { front: "Sổ nhật ký chung", back: "Sổ ghi các nghiệp vụ theo thứ tự thời gian phát sinh, mỗi dòng nêu tài khoản Nợ và tài khoản Có.", hint: "Theo thời gian, không gom theo tài khoản.", example: "Nghiệp vụ ngày 5 ghi trước nghiệp vụ ngày 7." },
    { front: "Sổ cái", back: "Sổ tập hợp phát sinh và số dư của từng tài khoản riêng, được chuyển từ nhật ký chung.", hint: "Một tài khoản một trang.", example: "Sổ cái TK 111 ghi mọi khoản thu chi tiền mặt." },
    { front: "Bảng cân đối số phát sinh", back: "Bảng tổng hợp số dư đầu kỳ, phát sinh trong kỳ và số dư cuối kỳ của mọi tài khoản, với ba cặp cột cân nhau.", hint: "Ba cặp cột Nợ và Có.", example: "Tổng phát sinh mỗi bên 440 triệu đồng." },
    { front: "Cơ sở dồn tích", back: "Doanh thu và chi phí được ghi nhận khi phát sinh nghĩa vụ, không phụ thuộc đã thu hay đã trả tiền.", hint: "Ghi theo nghiệp vụ, không theo dòng tiền.", example: "Bán chịu 50 triệu vẫn ghi doanh thu ngay hôm giao hàng." },
    { front: "Lợi nhuận gộp", back: "Doanh thu thuần trừ giá vốn hàng bán, đo phần còn lại để bù chi phí hoạt động.", hint: "Nằm ngay dưới giá vốn.", example: "Doanh thu 140 triệu, giá vốn 80 triệu, lợi nhuận gộp 60 triệu." },
    { front: "Hệ số thanh toán nhanh", back: "Tài sản ngắn hạn trừ hàng tồn kho, chia cho nợ ngắn hạn.", hint: "Bỏ hàng tồn kho khỏi tử số.", example: "(385 − 60)/60 bằng khoảng 5,4 lần." }
  ],
  quiz: [
    { q: "Nghiệp vụ mua nguyên liệu nhập kho chưa trả tiền được định khoản thế nào?", options: ["Nợ TK 331 / Có TK 152", "Nợ TK 152 / Có TK 111", "Nợ TK 111 / Có TK 331", "Nợ TK 152 / Có TK 331"], answer: 3, explain: "Hàng tồn kho tăng nên ghi Nợ 152, nợ phải trả người bán tăng nên ghi Có 331." },
    { q: "Tài khoản tài sản có số dư thường nằm bên nào?", options: ["Bên Nợ", "Bên Có", "Cả hai bên", "Không có số dư"], answer: 0, explain: "Tài sản tăng ghi Nợ nên số dư dương nằm bên Nợ, trừ vài tài khoản điều chỉnh đặc biệt." },
    { q: "Trong một kỳ kế toán, tổng phát sinh Nợ và tổng phát sinh Có quan hệ thế nào?", options: ["Luôn chênh lệch đúng bằng lợi nhuận", "Chỉ bằng nhau khi có lãi", "Luôn bằng nhau", "Phụ thuộc số lượng tài khoản"], answer: 2, explain: "Ghi sổ kép bảo đảm mỗi nghiệp vụ ghi Nợ và Có cùng số tiền nên hai tổng luôn bằng nhau." },
    { q: "Bán hàng thu tiền mặt 90 triệu đồng, bút toán đúng là:", options: ["Nợ TK 511 / Có TK 111", "Nợ TK 111 / Có TK 511", "Nợ TK 131 / Có TK 511", "Nợ TK 111 / Có TK 131"], answer: 1, explain: "Tiền mặt tăng ghi Nợ 111, doanh thu bán hàng tăng ghi Có 511." },
    { q: "Chi phí quản lý 15 triệu trả bằng chuyển khoản làm:", options: ["tăng tài sản và tăng nguồn vốn", "giảm tài sản và giảm nợ phải trả", "tăng chi phí và tăng vốn chủ sở hữu", "tăng chi phí và giảm tiền gửi ngân hàng"], answer: 3, explain: "Định khoản là Nợ 642 và Có 112: chi phí tăng, tiền gửi giảm." },
    { q: "Bảng cân đối số phát sinh được lập chủ yếu để:", options: ["tính lợi nhuận sau thuế", "kiểm tra tính cân đối trước khi lập báo cáo", "ghi nhận doanh thu chưa thực hiện", "tính khấu hao tài sản cố định"], answer: 1, explain: "Bảng tổng hợp phát sinh và số dư để kiểm tra ba cặp cột cân nhau trước khi lên báo cáo." },
    { q: "Phương trình kế toán cơ bản được viết là:", options: ["Tài sản = Nợ phải trả + Vốn chủ sở hữu", "Tài sản = Doanh thu − Chi phí", "Nợ phải trả = Tài sản + Vốn chủ sở hữu", "Vốn chủ sở hữu = Tài sản + Nợ phải trả"], answer: 0, explain: "Tài sản được hình thành từ hai nguồn là nợ phải trả và vốn chủ sở hữu." },
    { q: "Khách hàng chuyển khoản trả nợ 25 triệu đồng, định khoản đúng là:", options: ["Nợ TK 131 / Có TK 112", "Nợ TK 112 / Có TK 131", "Nợ TK 111 / Có TK 131", "Nợ TK 112 / Có TK 511"], answer: 1, explain: "Tiền gửi tăng ghi Nợ 112, khoản phải thu giảm ghi Có 131." },
    { q: "Hệ số thanh toán ngắn hạn bằng 0,8 cho thấy:", options: ["doanh nghiệp dư nhiều tiền mặt", "khả năng sinh lời rất cao", "hàng tồn kho ở mức thấp", "tài sản ngắn hạn không đủ trang trải nợ ngắn hạn"], answer: 3, explain: "Hệ số nhỏ hơn 1 nghĩa là nợ ngắn hạn vượt tài sản ngắn hạn, tiềm ẩn rủi ro thanh khoản." },
    { q: "Theo cơ sở dồn tích, doanh thu được ghi nhận khi nào?", options: ["Khi thu được tiền về tài khoản", "Khi phát sinh nghĩa vụ cung cấp hàng hóa, dịch vụ", "Khi lập báo cáo tài chính cuối năm", "Khi khách hàng ký hợp đồng khung"], answer: 1, explain: "Dồn tích ghi nhận theo thời điểm chuyển giao nghĩa vụ, không theo thời điểm thu tiền." }
  ],
  lab: {
    kind: "ledger",
    title: "Sổ nhật ký Nợ – Có",
    lead: "Sáu bút toán mẫu của một cửa hàng bán lẻ đã được ghi sẵn. Thêm bút toán của bạn rồi xem số dư từng tài khoản thay đổi thế nào.",
    stageLabel: "Sổ nhật ký",
    controlNote: "Chọn tài khoản Nợ và tài khoản Có khác nhau, nhập số tiền rồi bấm Ghi sổ. Hệ thống từ chối nếu hai bên trùng một tài khoản vì không thể vừa Nợ vừa Có cùng một chỗ.",
    note: "Sáu bút toán mẫu cộng lại 440 triệu đồng mỗi bên. Kết quả: TK 111 còn 290 triệu, TK 411 ghi Có 200 triệu, lợi nhuận tạm tính 125 triệu.",
    accounts: [
      { code: "111", name: "Tiền mặt", type: "asset" },
      { code: "112", name: "Tiền gửi ngân hàng", type: "asset" },
      { code: "131", name: "Phải thu khách hàng", type: "asset" },
      { code: "152", name: "Nguyên liệu, vật liệu", type: "asset" },
      { code: "331", name: "Phải trả người bán", type: "liability" },
      { code: "411", name: "Vốn đầu tư của chủ sở hữu", type: "equity" },
      { code: "511", name: "Doanh thu bán hàng", type: "revenue" },
      { code: "642", name: "Chi phí quản lý kinh doanh", type: "expense" }
    ],
    entries: [
      { desc: "Chủ sở hữu góp vốn bằng tiền mặt", debit: "111", credit: "411", amount: 200000000 },
      { desc: "Mua nguyên liệu nhập kho chưa trả tiền", debit: "152", credit: "331", amount: 60000000 },
      { desc: "Bán hàng thu tiền mặt", debit: "111", credit: "511", amount: 90000000 },
      { desc: "Bán hàng chưa thu tiền, khách nhận nợ", debit: "131", credit: "511", amount: 50000000 },
      { desc: "Khách hàng chuyển khoản trả nợ", debit: "112", credit: "131", amount: 25000000 },
      { desc: "Trả lương quản lý bằng chuyển khoản", debit: "642", credit: "112", amount: 15000000 }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Phương Thảo", progress: 88, score: 8.8, status: "Tốt", note: "Định khoản chắc, đọc bảng cân đối nhanh, cần luyện chỉ số sinh lời." },
      { name: "Trần Đức Huy", progress: 54, score: 6.9, status: "Đang học", note: "Nhầm bên Nợ của tài khoản nguồn vốn khi mua chịu." },
      { name: "Lê Ngọc Hân", progress: 95, score: 9.4, status: "Tốt", note: "Lập bảng cân đối số phát sinh không lệch, có thể làm bài nâng cao." },
      { name: "Phạm Quốc Khánh", progress: 28, score: 5.2, status: "Cần hỗ trợ", note: "Chưa phân biệt được tài sản ngắn hạn và dài hạn." },
      { name: "Vũ Thị Kim Ngân", progress: 71, score: 7.9, status: "Đang học", note: "Tiến bộ ở chương 2, cần ôn lại khoản giảm trừ doanh thu." },
      { name: "Đỗ Minh Trí", progress: 46, score: 6.1, status: "Đang học", note: "Nộp bài muộn, hay quên ghi chân Có của bút toán." }
    ],
    submissions: [
      { student: "Nguyễn Phương Thảo", lesson: "Bài tập định khoản chương 2", time: "Hôm nay 08:40", status: "Chờ chấm" },
      { student: "Đỗ Minh Trí", lesson: "Phiếu lập bảng cân đối số phát sinh", time: "Hôm qua 21:15", status: "Chờ chấm" },
      { student: "Lê Ngọc Hân", lesson: "Bài tập chỉ số thanh toán", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm chữa bài bảng cân đối số phát sinh, sinh viên mang theo bản nháp đã lập.",
      "Bài kiểm tra giữa kỳ gồm 20 câu định khoản và một bài lập báo cáo kết quả kinh doanh.",
      "Nhóm nào chưa nộp bộ chứng từ mẫu cần hoàn tất trước thứ Bảy để kịp duyệt học liệu."
    ]
  },
  className: "Nguyên lý kế toán – K25",
  brief: "BTL-12_ketoanlab-mon-nguyen-ly-ke-toan.md"
};
