window.BTL_DATA = {
  id: "buildeedu",
  code: "BTL-28",
  name: "BuildEdu",
  monogram: "K",
  subject: "Kỹ thuật xây dựng",
  level: "Đại học",
  group: "Kỹ thuật & Kiến trúc",
  accent: "#a16207",
  accent2: "#475569",
  font: "display",
  tagline: "Từ cấp độ bền bê tông đến tổ hợp tải trọng, mọi bước thi công đều có quy trình để kiểm tra.",
  intro: "BuildEdu tổ chức Kỹ thuật xây dựng theo đúng trình tự công trường: chọn vật liệu, tính tải, rồi thi công và nghiệm thu. Mỗi quy trình được chia thành các bước có điểm dừng kiểm tra, mỗi thông số vật liệu kèm ví dụ áp dụng và mỗi bài tính tải đều hiện công thức trung gian.",
  hero: { title: "Kỹ thuật xây dựng", highlight: "vững từ vật liệu đến nghiệm thu" },
  heroBadge: "Quy trình 6 bước · Bảng tra vật liệu",
  labShort: "QUY TRÌNH",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ vật liệu" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho Kỹ thuật xây dựng: dựng bản vẽ theo lớp, tính tải từng bước và đi qua quy trình thi công có điểm kiểm tra.",
  pathLead: "Bắt đầu từ vật liệu và cấu tạo, chuyển sang tính tải và truyền lực trong kết cấu, rồi kết thúc ở thi công, nghiệm thu và an toàn. Phòng lab dẫn từng bước của một hạng mục bê tông cốt thép.",
  features: [
    { badge: "01", title: "Bản vẽ kỹ thuật theo lớp", desc: "Dựng tường, dầm, cột trên lưới tọa độ, bật tắt từng lớp để đọc đúng ký hiệu và cao độ." },
    { badge: "02", title: "Máy tính tải trọng từng bước", desc: "Nhập kích thước sàn, chiều dày và loại phòng, xem tĩnh tải, hoạt tải và tổng tải hiện dần." },
    { badge: "03", title: "Bảng tra vật liệu có chú thích", desc: "Tra bê tông B20, thép CB400-V hay vữa mác 50 kèm cường độ, công dụng và lưu ý thi công." }
  ],
  modules: [
    {
      title: "Vật liệu và cấu tạo",
      summary: "Hiểu thông số của bê tông, cốt thép và khối xây trước khi đưa vào tính toán.",
      lessons: [
        {
          id: "vl1",
          title: "Bê tông và cấp độ bền",
          minutes: 18,
          level: "Cơ bản",
          summary: "Đọc ký hiệu cấp độ bền và biết cường độ tính toán dùng trong thiết kế.",
          points: ["Cấp độ bền B biểu thị khả năng chịu nén đặc trưng.", "Bê tông B20 có cường độ chịu nén tính toán 11,5 MPa.", "Cấp bền cao hơn cần kiểm soát cấp phối và bảo dưỡng chặt."],
          steps: [
            { title: "Đọc ký hiệu cấp độ bền", body: "Bê tông B20 nghĩa là cường độ chịu nén đặc trưng đạt 20 MPa trên mẫu lập phương 150 mm ở tuổi 28 ngày. Khi thiết kế, ta dùng cường độ tính toán Rb = 11,5 MPa và Rbt = 0,9 MPa, đã kể đến hệ số an toàn vật liệu. B30 dùng cho cột nhà cao tầng, còn B15 thường chỉ cho bê tông lót.", tip: "Đừng nhầm cấp độ bền B với mác M cũ, B20 tương đương khoảng mác 250." },
            { title: "Thành phần cấp phối", body: "Một mét khối bê tông B20 thường gồm khoảng 350 kg xi măng, 0,5 mét khối cát vàng, 0,9 mét khối đá dăm và 185 lít nước. Tỉ lệ nước trên xi măng quyết định cường độ: thêm 10 lít nước có thể làm giảm cường độ vài MPa. Vì vậy công trường không được tự ý pha thêm nước cho dễ đổ.", tip: "Kiểm tra độ sụt tại chỗ thay vì tin vào cảm giác dẻo tay." },
            { title: "Bảo dưỡng quyết định chất lượng", body: "Bê tông cần được giữ ẩm ít nhất 7 ngày với kết cấu thông thường và 14 ngày với kết cấu chịu nước. Thiếu nước, phản ứng thủy hóa dừng lại và lớp mặt bị rỗ, giảm tuổi thọ. Trời nắng gắt cần phủ bao tải ẩm hoặc tưới sương liên tục.", tip: "Bảo dưỡng rẻ hơn nhiều so với sửa chữa kết cấu sau này." }
          ],
          formula: "B20: Rb = 11,5 MPa ; Rbt = 0,9 MPa"
        },
        {
          id: "vl2",
          title: "Thép cốt và bê tông cốt thép",
          minutes: 22,
          level: "Trung bình",
          summary: "Chọn mác thép, bố trí lớp bảo vệ và hiểu sự hợp tác giữa thép với bê tông.",
          points: ["Thép CB400-V có giới hạn chảy 400 MPa.", "Lớp bê tông bảo vệ thường từ 25 đến 30 mm.", "Hàm lượng cốt thép hợp lý khoảng 0,8 đến 1,5%."],
          steps: [
            { title: "Vì sao phải có cốt thép", body: "Bê tông chịu nén tốt nhưng chịu kéo rất kém, chỉ khoảng một phần mười cường độ nén. Thép CB400-V đặt ở vùng kéo sẽ tiếp nhận lực này, nhờ vậy dầm không nứt gãy. Sự hợp tác hiệu quả vì hai vật liệu có biến dạng nhiệt gần nhau và bê tông bám chắc vào gân thép.", tip: "Thép phải có gân để tăng bám dính, thép trơn chỉ dùng cho đai hoặc móc." },
            { title: "Lớp bê tông bảo vệ", body: "Lớp bảo vệ dày 25 mm với dầm trong nhà và 30 mm với kết cấu ngoài trời giúp thép không bị gỉ và chịu lửa. Đặt thép sát ván khuôn sẽ khiến thép gỉ sớm, nở thể tích và làm bong lớp bê tông. Dùng cục kê nhựa đúng chiều dày thay vì kê đá vụn.", tip: "Sai lớp bảo vệ là lỗi nghiệm thu phải sửa trước khi đổ bê tông." },
            { title: "Hàm lượng thép hợp lý", body: "Hàm lượng thép trong tiết diện dầm thường từ 0,8% đến 1,5%; quá thấp thì dầm nứt, quá cao thì khó đổ và không kinh tế. Với dầm 200 × 400 mm, diện tích tiết diện 80000 mm², lượng thép dọc khoảng 640 đến 1200 mm², tương đương ba đến bốn thanh đường kính 18. Luôn kiểm tra lại theo mô men tính toán.", tip: "Khoảng cách thông thủy giữa các thanh phải đủ để đầm và cho bê tông chảy qua." }
          ],
          formula: "As = μ·b·h₀, với μ khoảng 0,8% đến 1,5%"
        },
        {
          id: "vl3",
          title: "Gạch, vữa và khối xây",
          minutes: 20,
          level: "Cơ bản",
          summary: "Chọn gạch, mác vữa và chiều dày tường phù hợp với công năng.",
          points: ["Vữa mác 50 dùng phổ biến cho tường gạch.", "Tường 110 mm chỉ dùng cho vách ngăn.", "Mạch vữa dày 10 mm và phải đầy mạch đứng."],
          steps: [
            { title: "Phân loại gạch và công dụng", body: "Gạch ống 80 × 80 × 180 mm nhẹ và cách nhiệt, dùng cho tường bao. Gạch đặc 200 × 95 × 55 mm chịu lực tốt hơn, dùng cho tường chịu lực hoặc chân tường. Gạch không nung cần ngâm nước đúng cách để vữa bám dính.", tip: "Gõ nhẹ hai viên gạch vào nhau, tiếng thanh là gạch đủ chín." },
            { title: "Mác vữa và mạch xây", body: "Vữa mác 50 tức chịu nén 50 kg/cm², pha theo tỉ lệ một xi măng, ba cát là phổ biến cho xây tường. Mạch vữa ngang và đứng dày khoảng 10 mm, phải no đầy để tránh thấm và tăng cường độ khối xây. Mạch đứng để rỗng là nguyên nhân thấm dột quen thuộc.", tip: "Dùng thước đo mạch, đừng ước lượng bằng mắt vì rất dễ dày quá." },
            { title: "Chọn chiều dày tường", body: "Tường 110 mm tiết kiệm diện tích nhưng chỉ nên làm vách ngăn không chịu lực. Tường 220 mm đủ chịu lực và cách âm tốt hơn cho tường bao nhà ở. Khi treo thiết bị nặng như bình nóng lạnh, phải có vị trí gia cường hoặc bắt vào kết cấu bê tông.", tip: "Vẽ mặt bằng có ghi chiều dày tường trước khi lên dự toán." }
          ],
          formula: "Vữa mác 50: xi măng : cát vàng khoảng 1 : 3 theo thể tích"
        }
      ]
    },
    {
      title: "Tải trọng và kết cấu",
      summary: "Tính tải, truyền tải và tổ hợp theo quy chuẩn để chọn tiết diện hợp lý.",
      lessons: [
        {
          id: "tt1",
          title: "Tĩnh tải và hoạt tải",
          minutes: 20,
          level: "Cơ bản",
          summary: "Phân biệt hai loại tải và tính tải sàn từ chiều dày cùng lớp hoàn thiện.",
          points: ["Tĩnh tải là trọng lượng bản thân và lớp hoàn thiện.", "Hoạt tải là tải sử dụng thay đổi theo công năng.", "Tải sàn tính trên một mét vuông."],
          steps: [
            { title: "Tính tĩnh tải sàn", body: "Sàn bê tông dày 120 mm có trọng lượng riêng 25 kN/m³, tải bản thân là 0,12 × 25 = 3 kN/m². Cộng lớp vữa lót 0,03 m, gạch lát và trần thạch cao khoảng 1,2 kN/m², tổng tĩnh tải gần 4,2 kN/m². Đây là con số dùng để tính dầm và cột bên dưới.", tip: "Đổi chiều dày từ mm sang m trước khi nhân với trọng lượng riêng." },
            { title: "Tra hoạt tải theo công năng", body: "Theo quy chuẩn Việt Nam, nhà ở dùng hoạt tải 1,5 kN/m², văn phòng 2,0 kN/m², hành lang 3,0 kN/m² và phòng học 2,0 kN/m². Cùng một sàn nhưng đổi công năng là đổi hoạt tải, ảnh hưởng trực tiếp đến cốt thép. Không được dùng hoạt tải nhà ở cho khu vực kinh doanh.", tip: "Ghi rõ công năng từng phòng trên bản vẽ để tránh nhầm khi tính." },
            { title: "Tải tập trung và tải phân bố", body: "Tải phân bố đều có đơn vị kN/m² hoặc kN/m, còn tải tập trung có đơn vị kN. Một tủ hồ sơ nặng 600 kg đặt trên diện tích 0,6 m² tạo tải cục bộ 10 kN/m², lớn hơn nhiều so với tải phân bố trung bình. Với trường hợp này cần kiểm tra thêm chọc thủng sàn.", tip: "Thiết bị nặng cần khai báo riêng, đừng gộp vào hoạt tải chung." }
          ],
          formula: "g = γ·t (kN/m²), với γ là trọng lượng riêng, t là chiều dày"
        },
        {
          id: "tt2",
          title: "Truyền tải sàn – dầm – cột",
          minutes: 24,
          level: "Nâng cao",
          summary: "Xác định diện tích truyền tải và quy tải về dầm, cột theo sơ đồ kết cấu.",
          points: ["Diện tích truyền tải xác định tải lên dầm và cột.", "Tải dầm thường lấy theo dải rộng nửa nhịp mỗi bên.", "Tải cột bằng tổng tải các tầng phía trên."],
          steps: [
            { title: "Xác định diện tích truyền tải", body: "Với hệ lưới cột 4 × 5 m, mỗi ô sàn có diện tích 20 m², chia đôi theo đường chéo cho bốn dầm xung quanh. Dầm dọc nhận tải từ dải rộng khoảng 2 m, dầm ngang nhận dải 2,5 m. Cách chia này là quy ước gần đúng được dùng rộng rãi khi tính tay.", tip: "Vẽ đường phân giác các góc ô sàn để thấy rõ vùng tải của từng dầm." },
            { title: "Quy tải về dầm", body: "Với tải sàn 5,7 kN/m² và dải truyền 2 m, dầm nhận tải phân bố 11,4 kN/m, cộng trọng lượng bản thân dầm khoảng 2 kN/m thành 13,4 kN/m. Nhân với nhịp 4 m rồi chia 8 cho mô men lớn nhất khoảng 26,8 kN·m. Đây là số liệu đầu vào để chọn cốt thép dọc.", tip: "Tải dầm có hai phần: từ sàn và từ chính trọng lượng dầm." },
            { title: "Truyền lên cột", body: "Cột giữa nhà bốn tầng nhận tải từ diện tích 20 m² mỗi tầng, tổng 80 m², với tải trung bình 12 kN/m² cho lực nén khoảng 960 kN. Chọn bê tông B20 có Rb = 11,5 MPa, diện tích cột tối thiểu khoảng 83500 mm², tương đương tiết diện 300 × 300 mm. Cột góc nhận ít hơn nhưng còn chịu mô men do gió.", tip: "Cột càng xuống thấp càng phải tăng tiết diện hoặc mác bê tông." }
          ],
          formula: "M = q·L²/8 ; N_cột = n_tầng · A_truyền tải · q"
        },
        {
          id: "tt3",
          title: "Tổ hợp tải trọng theo quy chuẩn",
          minutes: 26,
          level: "Nâng cao",
          summary: "Áp hệ số vượt tải và chọn tổ hợp bất lợi để kiểm tra kết cấu.",
          points: ["Hệ số vượt tải tĩnh tải thường là 1,1.", "Hoạt tải lấy hệ số 1,2 và có hệ số giảm khi diện tích lớn.", "Phải kiểm tra cả tổ hợp có và không có gió."],
          steps: [
            { title: "Áp hệ số vượt tải", body: "Tĩnh tải tính toán bằng tĩnh tải tiêu chuẩn nhân 1,1, còn hoạt tải nhân 1,2. Với sàn có 4,2 kN/m² tĩnh tải và 1,5 kN/m² hoạt tải, tải tính toán là 4,62 + 1,8 = 6,42 kN/m², lớn hơn giá trị tiêu chuẩn 5,7 khoảng 13%. Hệ số này bù cho sai lệch khối lượng và cách sử dụng thực tế.", tip: "Không dùng tải tiêu chuẩn để chọn cốt thép, đó là lỗi nghiêm trọng." },
            { title: "Hệ số giảm hoạt tải", body: "Với sàn có diện tích lớn, quy chuẩn cho phép giảm hoạt tải vì khó xảy ra trường hợp toàn bộ diện tích chịu tải tối đa cùng lúc. Hệ số giảm áp dụng theo diện tích truyền tải và số tầng, nhưng không áp dụng cho hành lang hay cầu thang. Giảm tải giúp tiết kiệm thép nhưng phải trích dẫn đúng điều khoản.", tip: "Ghi rõ điều khoản quy chuẩn đã dùng khi giảm tải để bảo vệ đồ án." },
            { title: "Chọn tổ hợp bất lợi", body: "Tổ hợp cơ bản gồm tĩnh tải, hoạt tải và có thể thêm gió, mỗi trường hợp cho một giá trị nội lực khác nhau. Với cột biên, tổ hợp có gió thường nguy hiểm hơn vì tạo mô men lớn, còn cột giữa thường do lực nén quyết định. Phải kiểm tra đủ các tổ hợp rồi chọn giá trị lớn nhất để thiết kế.", tip: "Lập bảng tổ hợp theo hàng là trường hợp, cột là nội lực, dễ so sánh hơn." }
          ],
          formula: "q_tt = 1,1·g + 1,2·p"
        }
      ]
    },
    {
      title: "Thi công và kiểm tra",
      summary: "Trình tự thi công phần thô, nghiệm thu kết cấu và an toàn trên công trường.",
      lessons: [
        {
          id: "tc1",
          title: "Trình tự thi công phần thô",
          minutes: 18,
          level: "Cơ bản",
          summary: "Đi đúng thứ tự từ định vị tim trục đến tháo ván khuôn để tránh phải làm lại.",
          points: ["Định vị tim trục là bước không được sai.", "Cốt thép và ván khuôn phải nghiệm thu trước khi đổ.", "Bảo dưỡng và tháo ván khuôn theo đúng tuổi bê tông."],
          steps: [
            { title: "Định vị và chuẩn bị", body: "Từ mốc chuẩn, kỹ sư giác móng và đánh dấu tim trục bằng máy kinh vĩ, sai số cho phép chỉ vài milimét. Sau đó gia cố mặt bằng, tập kết vật liệu và dựng hàng rào an toàn. Sai tim trục sẽ kéo theo toàn bộ cột, dầm lệch và rất khó sửa.", tip: "Luôn kiểm tra chéo bằng hai mốc độc lập trước khi đổ bê tông móng." },
            { title: "Cốt thép và ván khuôn", body: "Cốt thép được gia công theo bản vẽ, buộc đúng khoảng cách và kê cục bảo vệ trước khi lắp ván khuôn. Ván khuôn phải kín khít, chống đỡ đủ cứng để không phình khi đổ. Đây là hai hạng mục được nghiệm thu riêng, có biên bản trước khi đổ bê tông.", tip: "Chụp ảnh nghiệm thu cốt thép theo từng cấu kiện để làm hồ sơ." },
            { title: "Đổ bê tông và tháo dỡ", body: "Bê tông được đổ theo từng lớp, đầm kỹ để không rỗ và không phân tầng. Ván khuôn dầm sàn thường tháo sau 7 đến 10 ngày, còn cột có thể tháo sớm hơn nếu bê tông đạt cường độ. Tháo quá sớm khi bê tông chưa đủ tuổi là nguyên nhân sập giàn giáo.", tip: "Ghi ngày đổ lên cấu kiện để tính đúng thời điểm tháo ván khuôn." }
          ],
          formula: "Thứ tự: định vị, cốt thép, ván khuôn, nghiệm thu, đổ bê tông, bảo dưỡng, tháo dỡ"
        },
        {
          id: "tc2",
          title: "Nghiệm thu cốt thép và bê tông",
          minutes: 22,
          level: "Trung bình",
          summary: "Kiểm tra đúng hạng mục, đúng tần suất và đọc kết quả thí nghiệm mẫu.",
          points: ["Độ sụt bê tông thường yêu cầu 12 ± 2 cm khi bơm.", "Mỗi hạng mục lấy tối thiểu một tổ mẫu.", "Cường độ nghiệm thu dựa trên mẫu 28 ngày."],
          steps: [
            { title: "Kiểm tra trước khi đổ", body: "Nghiệm thu cốt thép gồm đường kính, số lượng, khoảng cách, lớp bảo vệ và vị trí neo. Sai một thanh thép chịu lực có thể làm giảm khả năng chịu uốn đáng kể. Với dầm 200 × 400 mm, lớp bảo vệ 25 mm được đo bằng thước tại ít nhất ba vị trí.", tip: "Lập checklist theo bản vẽ, đánh dấu từng thanh đã kiểm tra." },
            { title: "Kiểm tra bê tông tươi", body: "Độ sụt được đo bằng côn hình nón ngay khi xe đến công trường, thường yêu cầu 12 ± 2 cm với bê tông bơm. Lấy mẫu theo tổ ba viên cho mỗi 20 mét khối hoặc mỗi hạng mục, ghi rõ ngày đổ và vị trí. Mẫu được bảo dưỡng chuẩn trong điều kiện phòng thí nghiệm.", tip: "Không lấy mẫu ở đầu xe bơm vì bê tông chưa được trộn đều." },
            { title: "Đọc kết quả sau 28 ngày", body: "Cường độ nghiệm thu là giá trị trung bình các viên mẫu, phải đạt tối thiểu 85% cấp độ bền thiết kế. Với bê tông B20, mẫu cần đạt khoảng 17 MPa mới đủ điều kiện chấp nhận. Nếu thiếu, phải thí nghiệm bê tông trên kết cấu bằng súng bật nẩy hoặc khoan mẫu.", tip: "Kết quả 7 ngày chỉ để tham khảo, không dùng để nghiệm thu." }
          ],
          formula: "R_nghiệm thu ≥ 0,85·B (theo tổ mẫu tiêu chuẩn)"
        },
        {
          id: "tc3",
          title: "An toàn lao động và giàn giáo",
          minutes: 18,
          level: "Cơ bản",
          summary: "Nhận diện rủi ro rơi ngã và kiểm tra giàn giáo trước khi đưa vào sử dụng.",
          points: ["Lan can bảo vệ cao tối thiểu 1,05 m.", "Giàn giáo phải neo vào công trình và có lưới chắn.", "Không chở quá tải hoặc chất vật liệu lên sàn công tác."],
          steps: [
            { title: "Rủi ro rơi ngã", body: "Rơi ngã là tai nạn phổ biến nhất trên công trình, thường xảy ra ở mép sàn, lỗ mở kỹ thuật và khi leo giàn giáo. Mọi mép sàn cao trên 2 m phải có lan can cao 1,05 m kèm thanh chắn giữa và tấm chân. Lỗ mở phải được đậy chắc hoặc rào kín có biển cảnh báo.", tip: "Đi kiểm tra mép sàn mỗi sáng trước khi tổ đội vào làm việc." },
            { title: "Kiểm tra giàn giáo", body: "Giàn giáo ống thép cần đủ chân kê, giằng chéo và neo vào kết cấu ở mỗi hai tầng. Sàn công tác phải lát kín, cố định và chịu được tải thiết kế, thường 200 kg/m². Nghiêng hoặc thiếu neo là dấu hiệu phải dừng sử dụng ngay, không đợi đến khi có sự cố.", tip: "Treo thẻ xanh đã kiểm định ở giàn giáo đạt, thẻ đỏ ở giàn giáo cấm dùng." },
            { title: "Trật tự vật tư trên sàn", body: "Chất gạch hay thép tập trung một chỗ có thể vượt hoạt tải thiết kế của sàn, gây nứt hoặc võng. Vật liệu nên đặt gần gối tựa và rải đều, không dồn giữa nhịp. Bê tông rơi vãi phải dọn ngay vì vừa trơn trượt vừa che khuất lỗ mở.", tip: "Đánh dấu vị trí tập kết vật liệu trên bản vẽ thi công." }
          ],
          formula: "Lan can tối thiểu 1,05 m, sàn công tác chịu 200 kg/m²"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Cấp độ bền bê tông", back: "Ký hiệu B biểu thị cường độ chịu nén đặc trưng tính bằng MPa trên mẫu lập phương 150 mm.", hint: "Số càng lớn càng khỏe.", example: "B20 có Rb = 11,5 MPa, dùng cho dầm sàn nhà ở." },
    { front: "Thép CB400-V", back: "Thép cốt bê tông có giới hạn chảy 400 MPa, bề mặt có gân để bám dính.", hint: "Số 400 là giới hạn chảy.", example: "Dùng làm thép dọc chịu kéo cho dầm." },
    { front: "Lớp bê tông bảo vệ", back: "Khoảng cách từ mặt ngoài bê tông đến mặt ngoài cốt thép, thường 25 đến 30 mm.", hint: "Áo giáp chống gỉ cho thép.", example: "Dầm trong nhà lấy 25 mm, kết cấu ngoài trời 30 mm." },
    { front: "Tĩnh tải", back: "Tải trọng không thay đổi trong quá trình sử dụng, gồm bản thân kết cấu và lớp hoàn thiện.", hint: "Trọng lượng cố định.", example: "Sàn dày 120 mm cho 3 kN/m² tĩnh tải bản thân." },
    { front: "Hoạt tải", back: "Tải trọng do sử dụng gây ra, thay đổi theo công năng và thời điểm.", hint: "Người, đồ đạc, thiết bị.", example: "Nhà ở 1,5 kN/m², hành lang 3,0 kN/m²." },
    { front: "Diện tích truyền tải", back: "Phần diện tích sàn mà tải của nó được truyền vào một dầm hoặc cột.", hint: "Chia ô sàn theo đường phân giác.", example: "Lưới cột 4 × 5 m cho mỗi cột 20 m²." },
    { front: "Hệ số vượt tải", back: "Hệ số nhân vào tải tiêu chuẩn để được tải tính toán, thường 1,1 với tĩnh tải và 1,2 với hoạt tải.", hint: "Hệ số an toàn cho tải.", example: "4,2 kN/m² tĩnh tải thành 4,62 kN/m²." },
    { front: "Tổ hợp tải trọng", back: "Tập hợp các trường hợp tải có thể xảy ra đồng thời để tìm nội lực bất lợi nhất.", hint: "Kiểm tra nhiều kịch bản.", example: "Tĩnh tải cộng hoạt tải, hoặc cộng thêm gió cho cột biên." },
    { front: "Ván khuôn", back: "Kết cấu tạm tạo hình cho bê tông và chịu tải trọng khi bê tông chưa đông cứng.", hint: "Khuôn đúc bê tông.", example: "Ván khuôn dầm sàn tháo sau 7 đến 10 ngày." },
    { front: "Bảo dưỡng bê tông", back: "Giữ ẩm và kiểm soát nhiệt độ để bê tông tiếp tục thủy hóa và đạt cường độ.", hint: "Tưới nước, phủ bao tải ẩm.", example: "Giữ ẩm ít nhất 7 ngày với kết cấu thông thường." },
    { front: "Độ sụt bê tông", back: "Chỉ số đo độ dẻo của hỗn hợp bê tông tươi bằng côn thử, thường 12 ± 2 cm khi bơm.", hint: "Đo độ dẻo tại công trường.", example: "Sụt thấp quá thì khó bơm, cao quá thì giảm cường độ." },
    { front: "An toàn giàn giáo", back: "Giàn giáo phải đủ chân kê, giằng chéo, neo vào công trình và có lan can cùng lưới chắn.", hint: "Neo, giằng, lan can.", example: "Lan can cao tối thiểu 1,05 m ở mọi mép sàn trên 2 m." }
  ],
  quiz: [
    { q: "Bê tông B20 có cường độ chịu nén tính toán Rb bằng:", options: ["11,5 MPa", "20 MPa", "1,15 MPa", "200 MPa"], answer: 0, explain: "B20 là cấp độ bền đặc trưng, còn cường độ tính toán dùng trong thiết kế là 11,5 MPa." },
    { q: "Sàn bê tông dày 120 mm, trọng lượng riêng 25 kN/m³. Tĩnh tải bản thân là:", options: ["1,2 kN/m²", "2,5 kN/m²", "3,0 kN/m²", "30 kN/m²"], answer: 2, explain: "0,12 m × 25 kN/m³ = 3,0 kN/m²." },
    { q: "Lớp bê tông bảo vệ cốt thép trong dầm nhà ở thường lấy:", options: ["5 mm", "10 mm", "15 mm", "25 mm"], answer: 3, explain: "25 mm là giá trị phổ biến cho dầm trong nhà, đủ chống gỉ và chịu lửa." },
    { q: "Hệ số vượt tải dùng cho hoạt tải trong tổ hợp cơ bản thường là:", options: ["0,9", "1,2", "1,5", "2,0"], answer: 1, explain: "Hoạt tải thường lấy 1,2; tĩnh tải lấy 1,1." },
    { q: "Mô men lớn nhất của dầm đơn giản nhịp L chịu tải phân bố đều q là:", options: ["q·L²/8", "q·L/4", "q·L²/2", "q·L²/12"], answer: 0, explain: "Với tải phân bố đều, mô men giữa nhịp là qL²/8; qL/4 dùng cho tải tập trung giữa nhịp." },
    { q: "Công tác nào phải nghiệm thu trước khi đổ bê tông?", options: ["Sơn hoàn thiện", "Cốt thép và ván khuôn", "Lắp đặt thiết bị vệ sinh", "Ốp lát gạch"], answer: 1, explain: "Cốt thép và ván khuôn là hai hạng mục bị che khuất sau khi đổ nên phải nghiệm thu trước." },
    { q: "Độ sụt bê tông khi bơm thường yêu cầu khoảng:", options: ["2 ± 1 cm", "12 ± 2 cm", "25 ± 5 cm", "Không cần kiểm tra"], answer: 1, explain: "12 ± 2 cm đủ dẻo để bơm mà vẫn giữ được cường độ thiết kế." },
    { q: "Kết quả thí nghiệm mẫu bê tông dùng để nghiệm thu là ở tuổi:", options: ["3 ngày", "7 ngày", "28 ngày", "56 ngày"], answer: 2, explain: "Tuổi 28 ngày là mốc tiêu chuẩn để đánh giá cường độ; kết quả 7 ngày chỉ tham khảo." },
    { q: "Lan can bảo vệ ở mép sàn công trình phải cao tối thiểu:", options: ["1,05 m", "0,5 m", "0,8 m", "1,5 m"], answer: 0, explain: "Quy định an toàn yêu cầu lan can cao tối thiểu 1,05 m, kèm thanh chắn giữa." },
    { q: "Cột giữa nhà bốn tầng nhận tải từ 20 m² mỗi tầng. Tổng diện tích truyền tải là:", options: ["20 m²", "40 m²", "100 m²", "80 m²"], answer: 3, explain: "20 m² nhân bốn tầng bằng 80 m², dùng để tính lực nén lên cột." }
  ],
  lab: {
    kind: "stepper",
    title: "Quy trình thi công một hạng mục bê tông cốt thép",
    lead: "Sáu bước từ định vị tim trục đến nghiệm thu kết cấu, mỗi bước có điểm dừng kiểm tra an toàn. Bấm Tiếp để đi đúng trình tự như trên công trường, không bỏ qua bước nghiệm thu.",
    stageLabel: "Quy trình thi công",
    controlNote: "Đi lần lượt từ bước một đến bước sáu; bước nghiệm thu trước khi đổ bê tông là điểm dừng bắt buộc.",
    note: "Quy trình rút từ thực tế hạng mục dầm sàn nhà ở, có thể dùng làm checklist khi đi thực tập công trường.",
    steps: [
      { title: "Bước 1: Chuẩn bị mặt bằng và định vị tim trục", short: "Định vị", body: "Giác móng từ mốc chuẩn, đánh dấu tim trục bằng máy kinh vĩ và kiểm tra chéo bằng thước thép. Dọn mặt bằng, tập kết vật liệu gọn theo sơ đồ và dựng rào chắn quanh khu vực thi công. Sai số tim trục chỉ cho phép vài milimét vì sẽ kéo theo toàn bộ kết cấu phía trên.", tip: "Luôn dùng hai mốc độc lập để kiểm tra chéo trước khi chốt tim trục." },
      { title: "Bước 2: Gia công và lắp dựng cốt thép", short: "Cốt thép", body: "Cắt, uốn và buộc cốt thép theo bản vẽ, chú ý đường kính, khoảng cách và chiều dài neo. Kê cục bảo vệ đúng chiều dày 25 mm để thép không chạm ván khuôn. Kiểm tra vị trí thép chờ của cột trước khi đóng ván khuôn dầm.", tip: "Đánh dấu khoảng cách đai bằng phấn trên thép dọc để buộc đều." },
      { title: "Bước 3: Lắp dựng ván khuôn và cây chống", short: "Ván khuôn", body: "Lắp ván khuôn kín khít, đúng cao độ và vuông góc, chống đỡ bằng cây chống có chân kê vững. Kiểm tra độ phẳng mặt sàn và khe hở giữa các tấm để tránh chảy nước xi măng. Cố định ván khuôn thành dầm bằng thanh giằng ngang.", tip: "Dùng dây căng và nivô kiểm tra cao độ mặt sàn trước khi đổ." },
      { title: "Bước 4: Nghiệm thu trước khi đổ bê tông", short: "Nghiệm thu", body: "Kỹ sư giám sát kiểm tra cốt thép, ván khuôn, lớp bảo vệ, vị trí chờ điện nước và lập biên bản nghiệm thu. Đây là điểm dừng bắt buộc vì sau khi đổ bê tông mọi sai sót đều bị che khuất. Chỉ được đổ khi biên bản đã ký và thời tiết trong giới hạn cho phép.", tip: "Chụp ảnh từng cấu kiện đã nghiệm thu để đưa vào hồ sơ chất lượng." },
      { title: "Bước 5: Đổ và đầm bê tông", short: "Đổ bê tông", body: "Đổ bê tông theo từng lớp, mỗi lớp khoảng 30 đến 40 cm và đầm đều, không đầm quá lâu tại một vị trí gây phân tầng. Kiểm tra độ sụt tại xe bơm và lấy tổ mẫu theo quy định. Trong lúc đổ, theo dõi ván khuôn và cây chống để xử lý ngay nếu thấy biến dạng.", tip: "Đầm đến khi bê tông không còn bọt khí nổi lên, không đầm theo cảm tính." },
      { title: "Bước 6: Bảo dưỡng, tháo ván khuôn và nghiệm thu kết cấu", short: "Bảo dưỡng", body: "Giữ ẩm bê tông ít nhất 7 ngày, che nắng và tưới nước đều hai lần mỗi ngày. Tháo ván khuôn dầm sàn sau 7 đến 10 ngày khi bê tông đã đủ cường độ, tháo theo thứ tự từ giữa nhịp ra gối. Cuối cùng kiểm tra bề mặt, đo lại kích thước và đọc kết quả mẫu 28 ngày để nghiệm thu.", tip: "Ghi ngày đổ bê tông lên cấu kiện để không tháo ván khuôn quá sớm." }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Thành Đạt", progress: 84, score: 8, status: "Tốt", note: "Tính tải sàn chắc, cần thêm bài tổ hợp có gió." },
      { name: "Trần Ngọc Diệp", progress: 57, score: 6, status: "Đang học", note: "Nhầm hoạt tải nhà ở với hành lang." },
      { name: "Lê Văn Hùng", progress: 90, score: 8.4, status: "Tốt", note: "Nắm quy trình thi công, hồ sơ nghiệm thu gọn gàng." },
      { name: "Phạm Thu Hà", progress: 32, score: 4.8, status: "Cần hỗ trợ", note: "Chưa nộp bài tính tĩnh tải sàn." },
      { name: "Vũ Quang Huy", progress: 69, score: 7.7, status: "Đang học", note: "Tiến bộ ở phần truyền tải, cần ôn hệ số vượt tải." },
      { name: "Đỗ Thị Lan", progress: 51, score: 7, status: "Đang học", note: "Tính đúng nhưng quên đổi milimét sang mét." }
    ],
    submissions: [
      { student: "Nguyễn Thành Đạt", lesson: "Bài tính tải trọng sàn tầng 3", time: "Hôm qua 21:15", status: "Chờ chấm" },
      { student: "Phạm Thu Hà", lesson: "Phiếu tra cấp độ bền bê tông", time: "Hôm qua 16:40", status: "Chờ chấm" },
      { student: "Lê Văn Hùng", lesson: "Checklist nghiệm thu cốt thép", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi học tuần này có khách mời là kỹ sư giám sát công trường chia sẻ về nghiệm thu.",
      "Bài kiểm tra giữa kỳ gồm tính tải sàn và đọc bản vẽ kết cấu.",
      "Lớp thực tập tại công trình cần mang giày bảo hộ và mũ cứng theo quy định."
    ]
  },
  className: "Kỹ thuật xây dựng – K25",
  brief: "BTL-28_buildeedu-mon-ky-thuat-xay-dung.md"
};
