window.BTL_DATA = {
  id: "agriacademy",
  code: "BTL-31",
  name: "AgriAcademy",
  monogram: "Lá",
  subject: "Nông nghiệp",
  level: "Đại học",
  group: "Môi trường & Nông nghiệp",
  accent: "#65a30d",
  accent2: "#ca8a04",
  font: "rounded",
  tagline: "Lịch mùa vụ, nhật ký canh tác và chẩn đoán sâu bệnh trên cùng một màn hình nông trại số.",
  intro: "AgriAcademy biến kiến thức trồng trọt thành lịch mùa vụ bốn màu để sinh viên thấy vụ đông xuân, vụ mùa và vụ đông chồng lên nhau thế nào. Mỗi bài học đi kèm một tình huống đồng ruộng có số liệu cụ thể, từ pH đất đến mật độ cấy, để sinh viên tập ra quyết định kỹ thuật.",
  hero: { title: "Nông nghiệp", highlight: "lập lịch vụ và chẩn đoán sâu bệnh" },
  heroBadge: "Lịch mùa vụ · Nhật ký canh tác",
  labShort: "LỊCH VỤ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "4", label: "Cây trồng mẫu" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho môn Nông nghiệp: xem lịch vụ, ghi nhật ký theo ngày và chẩn đoán sâu bệnh từ triệu chứng.",
  pathLead: "Bắt đầu từ đất và dinh dưỡng, chuyển sang lịch thời vụ cùng kỹ thuật canh tác, rồi kết thúc bằng chẩn đoán và phòng trừ sâu bệnh. Mỗi chương đều có một mùa vụ để tính lại.",
  features: [
    { badge: "01", title: "Lịch mùa vụ bốn màu", desc: "Bốn cây trồng xếp thành bốn dải tháng, nhấn vào từng ô để xem hoạt động: gieo mạ, cấy, bón đón đòng hay thu hoạch." },
    { badge: "02", title: "Nhật ký canh tác theo ngày", desc: "Ghi hoạt động, lượng phân, thuốc và ghi chú thời tiết theo từng vụ, đối chiếu với lịch chuẩn để phát hiện chậm lịch." },
    { badge: "03", title: "Chẩn đoán từ triệu chứng", desc: "Chọn cây, chọn triệu chứng trên lá hoặc thân, hệ thống khớp hồ sơ sâu bệnh và hiện mức thiệt hại cùng biện pháp." }
  ],
  life: [
    {
      title: "Chậu cây trên ban công phòng trọ",
      scene: "Mua bao đất thịt về trồng cây cảnh trong chậu, tưới đều mỗi sáng mà lá vẫn vàng và mặt đất lúc nào cũng sũng nước. Xới lớp trên thấy rễ nằm sát đáy chậu, nước không thoát ra được.",
      connect: "Đất thịt pha sét giữ nước và giữ phân tốt nhưng thoát nước chậm, đúng như bài sa cấu và kết cấu đất: cùng một lượng nước tưới, chậu thoát kém sẽ úng rễ trước."
    },
    {
      title: "Khay rau cải gieo quá dày",
      scene: "Gieo cả gói hạt cải vào khay xốp cho nhanh, ba hôm sau cây mọc chi chít, lá nhỏ và vươn dài. Nhổ bớt một nửa thì số cây còn lại to gấp đôi sau hai tuần, dù không bón thêm gì.",
      connect: "Bài mật độ và khoảng cách giải thích chuyện này: năng suất tính trên mét vuông chứ không phải số cây, gieo dày thì cây tranh ánh sáng và dinh dưỡng nên cây nào cũng còi."
    },
    {
      title: "Vườn rau bị rệp và con kiến",
      scene: "Sáng ra vườn thấy mấy lá cải xoăn lại, lật mặt dưới có đàn rệp nhỏ li ti và mấy con kiến bò theo. Cả luống chỉ mới vài cây bị, nhưng định ra tiệm mua thuốc phun kín cả luống cho chắc.",
      connect: "Bài đọc triệu chứng dạy xem vị trí và cách lan trước khi kết luận, rồi so với ngưỡng kinh tế: rệp mới vài lá thì ngắt lá bệnh rẻ hơn phun tràn cả luống."
    }
  ],
  modules: [
    {
      title: "Đất và dinh dưỡng cây trồng",
      summary: "Đọc sa cấu, pH và nhu cầu đạm lân kali để quyết định bón gì, bón bao nhiêu cho một hecta.",
      lessons: [
        {
          id: "dt1",
          title: "Sa cấu, kết cấu và độ phì",
          minutes: 18,
          level: "Cơ bản",
          summary: "Phân biệt đất thịt, đất sét, đất cát qua thành phần cơ giới và hiểu độ phì không chỉ là lượng phân.",
          points: [
            "Sa cấu là tỉ lệ cát, thịt và sét quyết định khả năng giữ nước, giữ phân.",
            "Đất thịt pha sét thường thuận lợi nhất cho lúa và rau màu.",
            "Độ phì gồm dinh dưỡng, kết cấu, độ ẩm và đời sống sinh vật đất."
          ],
          steps: [
            {
              title: "Đọc thành phần cơ giới",
              body: "Một mẫu đất phù sa sông Hồng có 35% sét, 45% thịt và 20% cát, xếp vào nhóm thịt pha sét. Nhóm này giữ nước tốt nhưng thoát nước chậm, nên ruộng dễ úng sau mưa lớn. Ngược lại, đất có 70% cát thoát nước nhanh và rửa trôi đạm mạnh.",
              tip: "Nắm một nắm đất ẩm rồi buông: đất thịt giữ vệt, đất cát rã ngay."
            },
            {
              title: "Kết cấu quyết định thoáng khí",
              body: "Đất bị dí chặt sau nhiều vụ cày ngập nước có dung trọng tăng lên 1,3 g/cm³, rễ lúa khó ăn sâu. Bón phân hữu cơ hoặc trả rơm rạ sau thu hoạch giúp tạo hạt kết, hạ dung trọng và tăng độ thoáng. Đây là lý do khuyến cáo không đốt rơm.",
              tip: "Ấn một que thẳng vào đất ẩm: nếu khó xuyên quá 10 cm thì đất đang bị dí."
            },
            {
              title: "Đo độ phì bằng nhiều chỉ tiêu",
              body: "Hai thửa ruộng cùng bón 100 kg đạm mỗi hecta nhưng năng suất chênh 1,2 tấn. Nguyên nhân có thể do một thửa thiếu kali trao đổi, pH thấp hoặc mất đạm do bay hơi. Đánh giá độ phì phải gồm pH, chất hữu cơ, đạm dễ tiêu, lân và kali trao đổi.",
              tip: "Lấy mẫu đất theo đường chéo ruộng, trộn năm điểm rồi mới gửi phân tích."
            }
          ],
          formula: "Dung trọng = khối lượng đất khô / thể tích tự nhiên"
        },
        {
          id: "dt2",
          title: "Đạm, lân, kali và nguyên tắc bón",
          minutes: 22,
          level: "Trung bình",
          summary: "Đọc công thức bón 120 – 60 – 60 cho lúa và chia đúng thời điểm để cây hấp thu hiệu quả.",
          points: [
            "Đạm thúc lá và số chồi, bón tập trung ở giai đoạn đẻ nhánh.",
            "Lân cần sớm cho bộ rễ, thường bón lót toàn bộ.",
            "Kali tăng độ cứng cây và năng suất hạt, chia hai lần bón."
          ],
          steps: [
            {
              title: "Đọc công thức phân",
              body: "Công thức 120 – 60 – 60 nghĩa là mỗi hecta cần 120 kg N, 60 kg P2O5 và 60 kg K2O nguyên chất. Quy đổi sang phân thương phẩm: urê 46% N cần khoảng 261 kg, lân đơn hoặc lân supe 16% P2O5 cần khoảng 375 kg, kali clorua 60% K2O cần khoảng 100 kg.",
              tip: "Luôn quy về dinh dưỡng nguyên chất trước khi tính giá thành."
            },
            {
              title: "Chia lần bón",
              body: "Lúa đông xuân bón lót 100% lân cùng 20% đạm, bón thúc đẻ nhánh 50% đạm và 30% kali, bón đón đòng 30% đạm còn lại cùng 70% kali. Bón dồn đạm vào một lần dễ làm lúa lốp, đổ ngã khi gặp mưa lớn cuối vụ.",
              tip: "Ghi ngày bón vào nhật ký để tính lại khoảng cách giữa hai lần bón."
            },
            {
              title: "Kiểm tra hiệu quả",
              body: "Nếu sau bón thúc 7 ngày lá vẫn vàng và chồi không tăng, có thể đạm đã bị rửa trôi do mưa hoặc đất bị phèn. Không nên tăng liều ngay mà cần kiểm tra pH và mực nước ruộng. Bón bổ sung khi đất còn ẩm nhưng không ngập sâu quá 3 cm.",
              tip: "Theo dõi màu lá bằng bảng so màu, tránh bón theo cảm giác."
            }
          ],
          formula: "Lượng phân thương phẩm = lượng dinh dưỡng nguyên chất / hàm lượng phân"
        },
        {
          id: "dt3",
          title: "pH đất và cải tạo đất chua",
          minutes: 20,
          level: "Trung bình",
          summary: "Xử lý ruộng có pH 4,2 bằng vôi, nước phèn và lịch rửa để đưa pH về khoảng thuận lợi 5,5 đến 6,5.",
          points: [
            "pH đất quyết định độ hòa tan của lân và nhiều vi lượng.",
            "Đất chua thường đi kèm độc nhôm và sắt cho rễ lúa.",
            "Bón vôi phải tính theo độ chua trao đổi, không theo cảm giác."
          ],
          steps: [
            {
              title: "Đo và phân loại chua",
              body: "Mẫu đất ruộng sau hai vụ lúa liên tục cho pH nước 4,2, thuộc nhóm chua nhiều. Ở pH này lân bị cố định bởi sắt và nhôm, rễ lúa ngắn lại, cây đẻ nhánh kém dù đã bón đủ phân. Đo pH phải dùng cùng tỉ lệ đất và nước để so sánh giữa các lần.",
              tip: "Ghi kèm tỉ lệ pha mẫu, ví dụ 1 phần đất với 2,5 phần nước."
            },
            {
              title: "Tính lượng vôi",
              body: "Đất phèn chua nhiều ở đồng bằng sông Cửu Long có thể cần 1 đến 2 tấn vôi bột mỗi hecta, chia hai lần cách nhau một vụ. Bón vôi khi đất đủ ẩm và cày vùi giúp trung hòa nhanh hơn rải trên mặt. Bón cùng lúc với phân lân sẽ làm giảm hiệu quả của cả hai.",
              tip: "Bón vôi trước, cách lần bón phân ít nhất 7 đến 10 ngày."
            },
            {
              title: "Rửa phèn và giữ ẩm",
              body: "Ruộng phèn cần lên luống, tháo nước chua rồi rửa bằng nước ngọt nhiều lần, kết hợp bón vôi và phân hữu cơ. Không để ruộng khô hoàn toàn vì sunfat sắt sẽ oxy hóa tạo axit mạnh hơn. Sau hai vụ cải tạo, pH có thể tăng từ 4,2 lên 5,4.",
              tip: "Theo dõi pH sau mỗi lần rửa, mỗi lần chỉ nên tăng khoảng 0,3 đến 0,5 đơn vị."
            }
          ],
          formula: "pH = −log[H+] trong dung dịch đất"
        }
      ]
    },
    {
      title: "Mùa vụ và kỹ thuật canh tác",
      summary: "Xếp lịch thời vụ theo tích ôn, chọn mật độ hợp lý và điều tiết nước theo từng giai đoạn sinh trưởng.",
      lessons: [
        {
          id: "mv1",
          title: "Lịch thời vụ và tích ôn",
          minutes: 20,
          level: "Cơ bản",
          summary: "Dùng tổng tích ôn để chọn ngày gieo và né đợt rét hoặc mưa lớn cuối vụ.",
          points: [
            "Mỗi cây cần một tổng nhiệt độ hữu hiệu nhất định để hoàn thành vòng đời.",
            "Tích ôn bằng tổng chênh lệch nhiệt độ ngày so với ngưỡng cơ sở.",
            "Dịch ngày gieo phải tính cả rủi ro thời tiết, không chỉ tính nhiệt độ."
          ],
          steps: [
            {
              title: "Tính tích ôn",
              body: "Lúa có ngưỡng nhiệt độ cơ sở khoảng 10 độ C. Nếu nhiệt độ trung bình ngày là 22 độ C thì mỗi ngày tích lũy 12 độ ngày. Với giống lúa cần khoảng 2.200 độ ngày, vụ lúa kéo dài xấp xỉ 183 ngày. Con số này giải thích vì sao vụ đông xuân dài hơn vụ mùa.",
              tip: "Cộng dồn theo tuần sẽ dễ phát hiện tuần rét làm chậm tích ôn."
            },
            {
              title: "Chọn ngày gieo",
              body: "Ở đồng bằng sông Hồng, gieo mạ đông xuân từ giữa tháng 11 đến đầu tháng 12 để lúa trổ vào tháng 3, tránh đợt rét đậm cuối tháng 1. Nếu gieo muộn sang tháng 1, cây con gặp rét, mạ chết hoặc chậm 10 đến 15 ngày so với lịch.",
              tip: "Đối chiếu lịch với dự báo rét đậm rét hại trước khi chốt ngày gieo."
            },
            {
              title: "Xếp lịch cho nhiều cây",
              body: "Một hecta có thể luân canh hai vụ lúa và một vụ ngô đông: lúa mùa thu hoạch tháng 10, ngô gieo tháng 9 để thu tháng 12, sau đó đông xuân gieo tháng 11. Lịch chồng lấn buộc phải tính nhân công và nước tưới, không chỉ tính ngày sinh học.",
              tip: "Vẽ lịch theo từng tuần, tô màu hoạt động trùng nhau để thấy điểm nghẽn."
            }
          ],
          formula: "Tích ôn ngày = nhiệt độ trung bình ngày − nhiệt độ cơ sở"
        },
        {
          id: "mv2",
          title: "Mật độ, khoảng cách và năng suất",
          minutes: 22,
          level: "Trung bình",
          summary: "Tính số khóm trên mét vuông và số cây trên hecta để giải thích vì sao cấy dày chưa chắc đã năng suất cao.",
          points: [
            "Mật độ hợp lý cân bằng giữa số bông và tỉ lệ hạt chắc.",
            "Cấy quá dày làm giảm ánh sáng tầng dưới và tăng sâu bệnh.",
            "Năng suất là tích của số bông, số hạt mỗi bông và khối lượng hạt."
          ],
          steps: [
            {
              title: "Đếm mật độ ruộng lúa",
              body: "Cấy với khoảng cách 20 × 15 cm cho khoảng 33 khóm mỗi mét vuông. Với 5 dảnh mỗi khóm, ruộng có khoảng 165 dảnh trên mét vuông. Khuyến cáo phổ biến cho lúa lai là 30 đến 40 khóm mỗi mét vuông, tùy giống đẻ nhánh khỏe hay yếu.",
              tip: "Đếm khóm trong khung 1 mét vuông ở ba điểm ruộng rồi lấy trung bình."
            },
            {
              title: "Tính năng suất theo thành phần",
              body: "Ruộng có 250 bông mỗi mét vuông, mỗi bông 120 hạt chắc và khối lượng 1.000 hạt là 25 g. Năng suất lý thuyết bằng 250 × 120 × 25 chia 1.000, tức 750 g mỗi mét vuông, tương đương 7,5 tấn mỗi hecta. Năng suất thực tế thường thấp hơn do hao hụt thu hoạch.",
              tip: "Quy đổi cẩn thận giữa gam trên mét vuông và tấn trên hecta, sai một bậc là sai mười lần."
            },
            {
              title: "Chọn mật độ ngô",
              body: "Ngô đông trồng khoảng cách 70 × 25 cm cho 5,7 vạn cây mỗi hecta, phù hợp giống ngô lai thân thấp. Nếu trồng dày 70 × 20 cm, số cây tăng nhưng bắp nhỏ và tỉ lệ đổ gốc cao khi gặp gió. Mật độ đúng là mật độ cho năng suất thực thu cao nhất, không phải số cây nhiều nhất.",
              tip: "Thử hai mật độ trên hai thửa nhỏ trước khi áp dụng cả cánh đồng."
            }
          ],
          formula: "Năng suất = số bông/m² × số hạt chắc/bông × khối lượng 1.000 hạt / 1.000"
        },
        {
          id: "mv3",
          title: "Tưới nước và quản lý độ ẩm",
          minutes: 20,
          level: "Trung bình",
          summary: "Điều tiết mực nước theo giai đoạn lúa và tính lượng nước tưới cho một hecta rau.",
          points: [
            "Lúa cần ngập nông ở giai đoạn đẻ nhánh và rút nước trước thu hoạch.",
            "Tưới nhỏ giọt tiết kiệm nước nhưng cần kiểm tra độ ẩm vùng rễ.",
            "Tưới sai thời điểm làm tăng rửa trôi đạm và phát thải khí mê-tan."
          ],
          steps: [
            {
              title: "Mực nước theo giai đoạn",
              body: "Sau cấy giữ mực nước 3 đến 5 cm để mạ bén rễ, giai đoạn đẻ nhánh giữ ngập nông 2 đến 3 cm. Trước thu hoạch 10 đến 15 ngày rút cạn để ruộng khô, giúp lúa chín đều và máy gặt làm việc thuận lợi. Để ngập sâu liên tục làm rễ yếu và tăng đổ ngã.",
              tip: "Đánh dấu mức nước trên cọc gỗ để cả nhóm đọc cùng một chuẩn."
            },
            {
              title: "Tính lượng nước cho rau",
              body: "Một hecta rau cải cần khoảng 250 đến 300 m³ nước mỗi vụ ngắn ngày, tương đương 25 đến 30 mm nước tưới. Nếu tưới phun mưa mỗi lần 8 mm, cần khoảng ba đến bốn lần trong vụ tùy mưa. Tưới quá nhiều làm đất nhão, rễ nghẹt và tăng bệnh thối gốc.",
              tip: "Đặt một hộp nhỏ trong luống để đo lượng nước phun thực tế mỗi lần."
            },
            {
              title: "Tưới xen khô ướt",
              body: "Kỹ thuật tưới ngập khô xen kẽ cho lúa giảm khoảng 20 đến 30% lượng nước và giảm phát thải mê-tan so với ngập liên tục. Chu kỳ gồm ngập nông rồi để ruộng khô đến khi đất còn ẩm mềm thì tưới lại. Cần theo dõi cỏ dại vì ruộng khô tạo điều kiện cho cỏ mọc.",
              tip: "Bắt đầu xen khô ướt sau khi lúa đã bén rễ và đẻ nhánh ổn định."
            }
          ],
          formula: "Lượng nước tưới = chiều sâu lớp nước × diện tích"
        }
      ]
    },
    {
      title: "Sâu bệnh và chẩn đoán",
      summary: "Nhận diện triệu chứng, xác định ngưỡng phòng trừ và dùng thuốc đúng nguyên tắc an toàn.",
      lessons: [
        {
          id: "sb1",
          title: "Đọc triệu chứng để chẩn đoán",
          minutes: 22,
          level: "Cơ bản",
          summary: "Phân biệt thiếu dinh dưỡng với sâu bệnh qua hình dạng, vị trí và cách lan của vết bệnh.",
          points: [
            "Triệu chứng thiếu dinh dưỡng thường đều trên cả ruộng và theo tuổi lá.",
            "Vết bệnh do nấm thường có hình dạng đặc trưng và lan theo ổ.",
            "Cần ghi vị trí vết bệnh trên lá, thân hay bông trước khi kết luận."
          ],
          steps: [
            {
              title: "Quan sát vị trí và hình dạng",
              body: "Bệnh đạo ôn trên lúa tạo vết hình thoi, tâm xám tro, viền nâu, thường ở lá trên. Thiếu kali lại làm mép lá vàng từ chóp vào, xuất hiện trước ở lá già. Hai hiện tượng cùng gây vàng lá nhưng khác hình dạng và vị trí, nên chỉ cần nhìn kỹ đã loại được một hướng.",
              tip: "Chụp ảnh cận cảnh và ảnh toàn ruộng, vì hai loại thông tin trả lời hai câu hỏi khác nhau."
            },
            {
              title: "Kiểm tra mật độ sâu",
              body: "Nghi ngờ rầy nâu, đếm số con trên mỗi dảnh tại năm điểm, mỗi điểm 10 dảnh. Ruộng đếm được trung bình 6 con mỗi dảnh ở giai đoạn lúa dưới 40 ngày là vượt ngưỡng cần xử lý. Đếm đúng cách quan trọng hơn phun sớm theo cảm giác.",
              tip: "Đếm vào sáng sớm khi rầy tập trung ở gốc lúa, dễ nhìn hơn giữa trưa."
            },
            {
              title: "Loại trừ nguyên nhân phi sinh vật",
              body: "Một ruộng vàng cả loạt sau khi phun thuốc trừ cỏ có thể do ngộ độc thuốc, không phải bệnh. Kiểm tra lịch phun, hướng gió và vết cháy trên lá lúa bên cạnh. Kết luận sâu bệnh khi chưa loại trừ nguyên nhân hóa chất dễ dẫn tới phun thêm và làm cây yếu hơn.",
              tip: "Hỏi chủ ruộng lịch phun ba ngày gần nhất trước khi chẩn đoán."
            }
          ],
          formula: "Mật độ sâu = tổng số con đếm được / tổng số dảnh kiểm tra"
        },
        {
          id: "sb2",
          title: "Ngưỡng kinh tế và IPM",
          minutes: 24,
          level: "Trung bình",
          summary: "Tính ngưỡng phòng trừ và áp dụng bốn nguyên tắc quản lý dịch hại tổng hợp trên ruộng lúa.",
          points: [
            "Ngưỡng kinh tế là mật độ sâu mà chi phí phòng trừ bằng giá trị năng suất bị mất.",
            "IPM ưu tiên biện pháp canh tác, sinh học trước biện pháp hóa học.",
            "Phun khi chưa tới ngưỡng làm tăng chi phí và tiêu diệt thiên địch."
          ],
          steps: [
            {
              title: "Tính ngưỡng kinh tế",
              body: "Giả sử mỗi con rầy trên dảnh làm mất 5 kg thóc mỗi hecta khi mật độ tăng thêm, giá thóc 7.000 đồng mỗi kilogam và chi phí một lần phun là 700.000 đồng. Ngưỡng kinh tế tương ứng khoảng 20 kg thóc, tức mức thiệt hại mà chi phí phun bắt đầu có lợi. Con số này thay đổi theo giá thóc và giá thuốc.",
              tip: "Tính lại ngưỡng mỗi vụ vì giá thóc và giá thuốc luôn thay đổi."
            },
            {
              title: "Áp dụng bốn nguyên tắc IPM",
              body: "Trồng cây khỏe bằng giống kháng và bón cân đối, bảo vệ thiên địch như nhện lùn và ong ký sinh, thăm đồng hai lần mỗi tuần, và để nông dân tự quyết định dựa trên quan sát. Bốn nguyên tắc này giảm số lần phun trung bình từ 5 xuống 2 lần mỗi vụ ở nhiều mô hình.",
              tip: "Ghi số lần phun mỗi vụ vào nhật ký để so sánh giữa các thửa."
            },
            {
              title: "Chọn biện pháp theo thứ tự",
              body: "Với bệnh đạo ôn, biện pháp đầu là dùng giống kháng, gieo đúng mật độ, bón đạm vừa phải và giữ ruộng thoáng. Chỉ khi vết bệnh xuất hiện thành ổ và điều kiện ẩm kéo dài mới dùng thuốc đặc trị. Phun phòng tràn lan làm tăng nguy cơ kháng thuốc của nấm.",
              tip: "Ghi rõ lý do phun trong nhật ký, nếu không giải thích được thì chưa nên phun."
            }
          ],
          formula: "Ngưỡng kinh tế: mật độ sâu × thiệt hại = chi phí phòng trừ"
        },
        {
          id: "sb3",
          title: "Dùng thuốc bảo vệ thực vật an toàn",
          minutes: 22,
          level: "Nâng cao",
          summary: "Áp dụng bốn đúng, tuân thủ thời gian cách ly và xử lý bao bì để giảm rủi ro cho người và môi trường.",
          points: [
            "Bốn đúng gồm đúng thuốc, đúng liều, đúng lúc và đúng cách.",
            "Thời gian cách ly là số ngày từ lần phun cuối đến khi thu hoạch.",
            "Bao bì thuốc phải thu gom riêng, không đốt hoặc vứt xuống kênh."
          ],
          steps: [
            {
              title: "Chọn đúng thuốc và liều",
              body: "Một ruộng bị rầy nâu không nên phun thuốc trừ bệnh, dù cùng bán ở cửa hàng. Đọc nhãn để biết hoạt chất, đối tượng phòng trừ và liều khuyến cáo, ví dụ 15 g mỗi bình 16 lít. Tăng liều gấp đôi không diệt nhanh hơn mà làm tăng dư lượng và nguy cơ kháng thuốc.",
              tip: "Ghi lại tên hoạt chất, không chỉ ghi tên thương mại, vì nhiều tên cùng một hoạt chất."
            },
            {
              title: "Tính thời gian cách ly",
              body: "Thuốc có thời gian cách ly 7 ngày, phun ngày 10 thì chỉ thu hoạch từ ngày 17 trở đi. Với rau ăn lá, nhiều loại yêu cầu 7 đến 10 ngày, trong khi rau thu liên tục như rau muống cần chọn hoạt chất có thời gian cách ly ngắn. Bán rau trước thời hạn là rủi ro trực tiếp cho người ăn.",
              tip: "Ghi ngày phun lên bảng đầu ruộng để người thu hoạch đối chiếu."
            },
            {
              title: "Bảo hộ và xử lý bao bì",
              body: "Khi phun cần khẩu trang, găng tay, kính và quần áo dài, phun theo hướng gió và không phun khi sắp mưa. Bao bì sau dùng phải xúc rửa ba lần, đục thủng và gom vào điểm thu gom chất thải nguy hại. Vứt vỏ thuốc xuống kênh đưa hoạt chất vào nước tưới và ao nuôi.",
              tip: "Chuẩn bị một túi rác riêng đựng vỏ thuốc ngay trên bờ ruộng."
            }
          ],
          formula: "Ngày thu hoạch an toàn = ngày phun cuối + thời gian cách ly"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Sa cấu đất", back: "Tỉ lệ phần trăm cát, thịt và sét trong đất, quyết định giữ nước và giữ dinh dưỡng.", hint: "Ba thành phần cơ giới.", example: "35% sét, 45% thịt, 20% cát là đất thịt pha sét." },
    { front: "Độ phì nhiêu", back: "Khả năng đất cung cấp dinh dưỡng, nước, không khí và môi trường rễ thuận lợi cho cây.", hint: "Không chỉ là lượng phân bón.", example: "Đất giàu đạm nhưng dí chặt vẫn cho năng suất thấp." },
    { front: "pH đất", back: "Độ chua hoặc kiềm của dung dịch đất, ảnh hưởng trực tiếp đến độ hòa tan lân và vi lượng.", hint: "Thang 0 đến 14, lúa thích 5,5 đến 6,5.", example: "pH 4,2 làm lân bị cố định, rễ lúa kém phát triển." },
    { front: "Đạm (N)", back: "Dinh dưỡng thúc đẩy sinh trưởng thân lá, quyết định số chồi và số bông.", hint: "Thiếu thì lá già vàng từ chóp.", example: "Bón 120 kg N mỗi hecta lúa đông xuân, chia ba lần." },
    { front: "Lân (P2O5)", back: "Dinh dưỡng cần cho bộ rễ và phân hóa mầm hoa, thường bón lót toàn bộ.", hint: "Bón sớm, bón lót.", example: "60 kg P2O5 mỗi hecta tương đương khoảng 375 kg lân supe 16%." },
    { front: "Kali (K2O)", back: "Dinh dưỡng tăng độ cứng cây, chống đổ ngã và tăng tỉ lệ hạt chắc.", hint: "Giúp cây cứng cáp.", example: "Chia 70% kali vào lần bón đón đòng." },
    { front: "Thời vụ", back: "Khoảng thời gian gieo trồng phù hợp để cây tránh rét, mưa lớn và sâu bệnh theo mùa.", hint: "Gắn với khí hậu từng vùng.", example: "Đông xuân gieo mạ tháng 11 đến 12, thu tháng 4 đến 5." },
    { front: "Tích ôn", back: "Tổng nhiệt độ hữu hiệu tích lũy trong ngày, dùng để dự báo thời gian sinh trưởng.", hint: "Cộng dồn nhiệt độ trên ngưỡng cơ sở.", example: "22 độ C với ngưỡng 10 độ C cho 12 độ ngày mỗi ngày." },
    { front: "Mật độ gieo cấy", back: "Số khóm hoặc số cây trên một đơn vị diện tích, quyết định số bông và mức cạnh tranh.", hint: "Nhiều cây chưa chắc năng suất cao.", example: "Cấy 20 × 15 cm cho khoảng 33 khóm mỗi mét vuông." },
    { front: "IPM", back: "Quản lý dịch hại tổng hợp: trồng cây khỏe, bảo vệ thiên địch, thăm đồng và quyết định theo quan sát.", hint: "Bốn nguyên tắc, ưu tiên phi hóa học.", example: "Giảm từ 5 xuống 2 lần phun mỗi vụ ở ruộng áp dụng IPM." },
    { front: "Ngưỡng kinh tế", back: "Mật độ sâu mà tại đó chi phí phòng trừ bằng giá trị năng suất bị mất.", hint: "Điểm hòa vốn của việc phun.", example: "Vượt ngưỡng mới phun, dưới ngưỡng thì theo dõi tiếp." },
    { front: "Thời gian cách ly", back: "Số ngày tối thiểu từ lần phun thuốc cuối đến khi thu hoạch để bảo đảm dư lượng an toàn.", hint: "Tính từ lần phun cuối.", example: "Thuốc cách ly 7 ngày, phun ngày 10 thì thu từ ngày 17." }
  ],
  quiz: [
    { q: "pH đất phù hợp nhất cho lúa trên đất phù sa là khoảng:", options: ["3,5 – 4,5", "5,5 – 6,5", "7,0 – 7,5", "8,5 – 9,0"], answer: 1, explain: "Trong khoảng 5,5 đến 6,5, lân và đa số vi lượng dễ hòa tan, rễ lúa hấp thu tốt." },
    { q: "Triệu chứng thiếu đạm ở lúa thường là:", options: ["Lá non chuyển tím", "Đốm hình thoi trên lá", "Lá già vàng dần từ chóp, cây còi", "Thân mọng nước, dễ đổ"], answer: 2, explain: "Đạm di động trong cây nên cây lấy đạm từ lá già, khiến lá già vàng trước." },
    { q: "Ngưỡng kinh tế trong phòng trừ sâu bệnh là:", options: ["Mật độ sâu cao nhất từng ghi nhận", "Liều thuốc tối đa mỗi lần phun", "Số lần phun tối thiểu trong vụ", "Mật độ sâu mà chi phí phòng trừ bằng giá trị năng suất bị mất"], answer: 3, explain: "Đây là điểm hòa vốn: dưới ngưỡng thì phun không mang lại lợi ích kinh tế." },
    { q: "Vụ lúa đông xuân ở đồng bằng sông Hồng thường:", options: ["Gieo mạ tháng 11 – 12, thu hoạch tháng 4 – 5", "Gieo tháng 2, thu tháng 6", "Gieo tháng 6, thu tháng 9", "Gieo tháng 8, thu tháng 12"], answer: 0, explain: "Gieo sớm để lúa trổ trước mưa lớn và tránh rét đậm cuối tháng 1." },
    { q: "Công thức bón 120 kg N, 60 kg P2O5, 60 kg K2O mỗi hecta tương ứng tỉ lệ:", options: ["1 : 1 : 1", "2 : 1 : 1", "1 : 2 : 3", "3 : 2 : 1"], answer: 1, explain: "Chia cả ba cho 60 được tỉ lệ 2 : 1 : 1, phù hợp với lúa thâm canh." },
    { q: "Luân canh lúa với ngô chủ yếu nhằm:", options: ["Tăng lượng thuốc phải phun", "Giảm giá phân bón", "Cắt vòng đời sâu bệnh và cải tạo đất", "Tăng độ mặn của đất"], answer: 2, explain: "Đổi cây trồng khác họ giúp cắt nguồn thức ăn của sâu bệnh chuyên tính và cải thiện lý tính đất." },
    { q: "Vết bệnh đạo ôn trên lá lúa có dạng:", options: ["Đốm tròn đỏ ở gốc thân", "Mốc trắng ở cổ lá", "Sọc vàng chạy dọc gân lá", "Hình thoi, tâm xám tro, viền nâu"], answer: 3, explain: "Hình thoi có tâm xám và viền nâu là đặc trưng của đạo ôn, do nấm gây ra." },
    { q: "Thời gian cách ly của thuốc bảo vệ thực vật là:", options: ["Thời hạn bảo quản của chai thuốc", "Số ngày từ lần phun cuối đến khi thu hoạch", "Thời gian thuốc tan trong nước", "Khoảng cách giữa hai lần phun"], answer: 1, explain: "Đây là khoảng thời gian để dư lượng thuốc giảm xuống dưới mức cho phép trước khi thu sản phẩm." },
    { q: "Trồng ngô với khoảng cách 70 × 25 cm cho mật độ khoảng:", options: ["5,7 vạn cây mỗi hecta", "2 vạn cây mỗi hecta", "10 vạn cây mỗi hecta", "0,6 vạn cây mỗi hecta"], answer: 0, explain: "Mỗi cây chiếm 0,175 mét vuông, một hecta 10.000 mét vuông cho khoảng 57.000 cây." },
    { q: "Biện pháp cải tạo đất phèn hiệu quả là:", options: ["Bón thêm phân chua sinh lý", "Phơi khô đất nhiều tháng", "Tháo nước phèn, rửa ngọt, bón vôi và lên luống", "Tăng mật độ cấy"], answer: 2, explain: "Rửa phèn loại bỏ axit và muối sắt, vôi trung hòa độ chua, lên luống giúp thoát nước." }
  ],
  lab: {
    kind: "calendar",
    title: "Lịch mùa vụ bốn cây trồng đồng bằng sông Hồng",
    lead: "Bốn dải tháng xếp chồng cho thấy vụ đông xuân, vụ mùa, ngô đông và rau cải đông chồng lấn ra sao. Nhấn vào một ô tháng để đọc hoạt động kỹ thuật của cây trồng đó.",
    stageLabel: "Lịch năm",
    controlNote: "Chọn từng dòng cây để xem giai đoạn và thời vụ ở cột phải. Lưu ý tháng 9 và tháng 11 có ba hoạt động trùng nhau nên cần tính nhân công.",
    note: "Lịch mô phỏng theo điều kiện đồng bằng sông Hồng, có thể lệch 7 đến 10 ngày tùy thời tiết từng năm.",
    crops: [
      {
        name: "Lúa đông xuân",
        color: "#16a34a",
        stage: "Sinh trưởng đến trổ bông",
        season: "Đông Xuân",
        note: "Gieo mạ tháng 11, cấy tháng 1, thu hoạch tháng 4; cần giữ nước nông khi đẻ nhánh.",
        months: { 11: "Làm đất", 12: "Gieo mạ", 1: "Cấy", 2: "Bón đón đòng", 3: "Trổ bông", 4: "Thu hoạch" }
      },
      {
        name: "Lúa mùa",
        color: "#65a30d",
        stage: "Làm đòng đến chín",
        season: "Mùa",
        note: "Vụ mưa chính trong năm, cần chủ động tiêu úng khi có mưa lớn kéo dài.",
        months: { 5: "Gieo mạ", 6: "Cấy", 7: "Bón thúc", 8: "Làm đòng", 9: "Trổ bông", 10: "Thu hoạch" }
      },
      {
        name: "Ngô đông",
        color: "#ca8a04",
        stage: "Trổ cờ đến chín",
        season: "Đông",
        note: "Trồng trên đất hai vụ lúa, mật độ 5,7 vạn cây mỗi hecta, chú ý thoát nước luống.",
        months: { 9: "Gieo hạt", 10: "Bón thúc", 11: "Trổ cờ phun râu", 12: "Thu bắp" }
      },
      {
        name: "Rau cải đông",
        color: "#0d9488",
        stage: "Sinh trưởng thân lá",
        season: "Đông",
        note: "Vụ ngắn 25 đến 30 ngày, cần tưới phun 8 mm mỗi lần và tuân thủ thời gian cách ly.",
        months: { 9: "Gieo hạt", 10: "Trồng ra luống", 11: "Bón đạm", 12: "Thu hoạch" }
      }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Văn Thịnh", progress: 81, score: 8.4, status: "Tốt", note: "Lập lịch vụ chính xác, cần luyện thêm phần tính ngưỡng kinh tế." },
      { name: "Trần Thị Hòa", progress: 58, score: 7.1, status: "Đang học", note: "Hay nhầm thời gian cách ly với khoảng cách giữa hai lần phun." },
      { name: "Lê Quang Dũng", progress: 90, score: 9.0, status: "Tốt", note: "Bài chẩn đoán đạo ôn có mô tả triệu chứng rất rõ." },
      { name: "Phạm Thị Yến", progress: 36, score: 5.9, status: "Cần hỗ trợ", note: "Chưa hoàn thành nhật ký canh tác vụ đông." },
      { name: "Vũ Đình Khôi", progress: 67, score: 7.7, status: "Đang học", note: "Tính mật độ ngô tốt, cần ôn lại quy đổi P2O5 sang phân thương phẩm." },
      { name: "Đỗ Thị Lan", progress: 52, score: 6.8, status: "Đang học", note: "Nên luyện thêm bài tính tích ôn trước buổi kiểm tra." }
    ],
    submissions: [
      { student: "Nguyễn Văn Thịnh", lesson: "Bài tập: lập lịch vụ cho 1 ha ba vụ", time: "Hôm qua 20:40", status: "Chờ chấm" },
      { student: "Phạm Thị Yến", lesson: "Nhật ký canh tác rau cải đông", time: "Hôm qua 17:30", status: "Chờ chấm" },
      { student: "Lê Quang Dũng", lesson: "Phiếu chẩn đoán sâu bệnh trên lúa", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm thực hành đo pH đất, mỗi nhóm mang theo 200 g mẫu đất khô.",
      "Bài kiểm tra giữa kỳ gồm 40% trắc nghiệm kỹ thuật và 60% bài tính toán trên số liệu ruộng.",
      "Nhóm chưa nộp nhật ký canh tác cần hoàn tất trước thứ Bảy để kịp tổng hợp báo cáo."
    ]
  },
  className: "Nông nghiệp đại cương – K26",
  brief: "BTL-31_agriacademy-mon-nong-nghiep.md"
};
