window.BTL_DATA = {
  id: "geoatlas",
  code: "BTL-10",
  name: "GeoAtlas",
  monogram: "VN",
  subject: "Địa lý",
  level: "Phổ thông",
  group: "Ngôn ngữ & Xã hội",
  accent: "#0891b2",
  accent2: "#16a34a",
  font: "display",
  tagline: "Bật tắt từng lớp bản đồ để thấy địa hình, khí hậu và kinh tế chồng lên nhau ra sao.",
  intro: "GeoAtlas dựng bản đồ Việt Nam thành sơ đồ tương tác: bấm vào một vùng để đọc đặc điểm tự nhiên và kinh tế, bật lớp khí hậu để so sánh hai đới, rồi tự kiểm tra bằng câu hỏi gắn với từng vùng. Thay vì học thuộc số liệu rời, học sinh đọc được quan hệ giữa vị trí, địa hình và sản xuất.",
  hero: { title: "Địa lý", highlight: "đọc bản đồ theo từng lớp" },
  heroBadge: "Bản đồ lớp chồng · Khí hậu · Vùng kinh tế",
  labShort: "BẢN ĐỒ",
  labTag: "PHÒNG LAB",
  practiceTag: "THẺ ĐỊA LÝ",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài địa lý" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho Địa lý: nhìn bản đồ, chồng lớp thông tin và kiểm tra bằng câu hỏi gắn vùng.",
  pathLead: "Đi từ vị trí và phạm vi lãnh thổ, sang địa hình khí hậu, rồi đến bảy vùng kinh tế. Phòng lab cho phép bật tắt lớp để tái hiện đúng thứ tự phân tích.",
  features: [
    { badge: "01", title: "Bản đồ vùng tương tác", desc: "Chín điểm nóng gồm bảy vùng kinh tế và hai quần đảo; bấm vào từng vùng để đọc đặc điểm tự nhiên, dân cư và sản xuất chủ lực." },
    { badge: "02", title: "Lớp chồng thông tin", desc: "Ba lớp vùng kinh tế, đới khí hậu và biển đảo bật tắt độc lập, giúp so sánh ranh giới khí hậu với ranh giới hành chính." },
    { badge: "03", title: "Quiz theo vùng", desc: "Mười câu hỏi về tọa độ, địa hình, khí hậu và sản xuất, mỗi câu có giải thích gắn với một vùng cụ thể để nhớ theo bản đồ." }
  ],
  life: [
    {
      title: "Căn trọ gần ngã tư và giá thuê",
      scene: "Hai phòng trọ cách nhau vài trăm mét, một phòng nằm ngay ngã tư có chợ và bến xe, phòng kia trong hẻm cụt. Giá thuê chênh gần gấp đôi dù diện tích như nhau, chỉ vì chỗ đứng khác nhau.",
      connect: "Vị trí địa lý quyết định giá trị theo cách đó: nằm ở cửa ngõ ra biển và trên trục giao thương khiến cùng một diện tích đất mang ý nghĩa kinh tế rất khác."
    },
    {
      title: "Phơi chăn và cơn mưa chiều",
      scene: "Buổi trưa nắng gắt, đem chăn ra phơi, đến bốn giờ chiều mây kéo về và mưa đổ. Ở miền Nam chuyện này lặp gần như mỗi ngày vào mùa mưa, còn mùa khô thì phơi cả tuần không lo.",
      connect: "Đó là khí hậu nhiệt đới ẩm gió mùa: gió mùa tây nam mang ẩm gây mưa chiều, gió mùa đông bắc mang lạnh và khô, nên hai miền có mùa khác nhau rõ."
    },
    {
      title: "Bản đồ quán ăn đêm",
      scene: "Một nhóm bạn đi ăn đêm trong thành phố lạ, mở bản đồ đánh dấu các quán và thấy quán dày đặc ở vài phường, còn khu ngoại vi thì trống. Hỏi ra thì đó là nơi tập trung dân cư và chợ đầu mối.",
      connect: "Phân bố dân cư tạo ra thị trường, nên đọc Atlat hay biểu đồ cũng theo cách đó: nhìn mật độ và điểm tụ để giải thích vì sao một vùng đông và một vùng thưa."
    }
  ],
  modules: [
    {
      title: "Vị trí và phạm vi lãnh thổ",
      summary: "Tọa độ, đường bờ biển và vùng biển quyết định khí hậu, giao thương và an ninh của đất nước.",
      lessons: [
        {
          id: "vt1",
          title: "Vị trí địa lý và ý nghĩa",
          minutes: 18,
          level: "Cơ bản",
          summary: "Nằm ở rìa phía đông bán đảo Đông Dương, Việt Nam vừa là cầu nối vừa là cửa ngõ ra biển.",
          points: ["Lãnh thổ trải dài trên nhiều vĩ độ nên khí hậu có sự phân hóa rõ.", "Vị trí tiếp giáp Trung Quốc, Lào, Cam-pu-chia tạo thuận lợi giao thương.", "Biển Đông mở ra tuyến hàng hải quốc tế quan trọng."],
          steps: [
            { title: "Xác định giới hạn", body: "Phần đất liền trải từ điểm cực Bắc ở Lũng Cú, Hà Giang đến điểm cực Nam ở mũi Cà Mau, và từ A Pa Chải, Điện Biên sang mũi Đôi, Khánh Hòa. Chiều dài bắc nam khoảng 1.650 ki lô mét tạo nên sự khác biệt khí hậu giữa hai miền. Diện tích đất liền khoảng 331 nghìn ki lô mét vuông.", tip: "Gắn mỗi điểm cực với một tỉnh để nhớ nhanh." },
            { title: "Đọc ý nghĩa tự nhiên", body: "Vị trí nằm trong vùng nội chí tuyến nên nhận lượng bức xạ lớn quanh năm, lại giáp biển nên độ ẩm cao. Hai yếu tố này cộng với gió mùa tạo nên khí hậu nhiệt đới ẩm. Nếu chỉ nhớ vị trí mà không nối với khí hậu, bài phân tích sẽ thiếu căn cứ.", tip: "Luôn nối vị trí với ít nhất một hệ quả tự nhiên." },
            { title: "Đọc ý nghĩa kinh tế và an ninh", body: "Đường bờ biển dài khoảng 3.260 ki lô mét với nhiều vũng vịnh thuận lợi xây cảng nước sâu. Vị trí trên tuyến hàng hải giúp Việt Nam tham gia chuỗi vận tải quốc tế nhưng cũng đặt ra yêu cầu bảo vệ chủ quyền biển đảo. Đây là hai mặt của cùng một lợi thế.", tip: "Trình bày ý nghĩa theo cặp: thuận lợi và thách thức." }
          ],
          formula: "Nội chí tuyến + giáp biển + gió mùa"
        },
        {
          id: "vt2",
          title: "Phạm vi lãnh thổ và vùng biển",
          minutes: 20,
          level: "Trung bình",
          summary: "Lãnh thổ gồm đất liền, vùng biển và vùng trời, trong đó vùng biển chia thành năm bộ phận.",
          points: ["Vùng biển gồm nội thủy, lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế và thềm lục địa.", "Vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở.", "Nước ta có hơn bốn nghìn đảo lớn nhỏ, nhiều đảo có dân sinh sống."],
          steps: [
            { title: "Kể đúng năm bộ phận", body: "Từ đường cơ sở ra ngoài lần lượt là nội thủy, lãnh hải rộng 12 hải lí, tiếp giáp lãnh hải thêm 12 hải lí, đặc quyền kinh tế 200 hải lí và thềm lục địa. Mỗi bộ phận có chế độ pháp lý khác nhau, nên không được gộp chung. Câu hỏi thi hay kiểm tra đúng thứ tự này.", tip: "Vẽ một trục ngang từ bờ ra và ghi năm mốc." },
            { title: "Phân biệt quyền và nghĩa vụ", body: "Trong vùng đặc quyền kinh tế, ta có quyền khai thác tài nguyên nhưng phải tôn trọng quyền tự do hàng hải của quốc gia khác. Đây là điểm dễ nhầm khi trả lời về chủ quyền. Nêu đúng cả hai mặt sẽ thể hiện hiểu bản chất luật biển.", tip: "Ghi rõ: quyền khai thác đi kèm nghĩa vụ bảo đảm tự do hàng hải." },
            { title: "Đọc vai trò của đảo", body: "Các đảo không chỉ là lãnh thổ mà còn là căn cứ để xác định đường cơ sở và vùng biển. Đảo có dân cư còn giúp khẳng định sự hiện diện kinh tế lâu dài. Vì vậy phát triển kinh tế đảo gắn chặt với bảo vệ chủ quyền.", tip: "Nối mỗi ý về đảo với một lợi ích cụ thể." }
          ],
          formula: "12 – 12 – 200 hải lí tính từ đường cơ sở"
        },
        {
          id: "vt3",
          title: "Tọa độ, múi giờ và khoảng cách",
          minutes: 16,
          level: "Cơ bản",
          summary: "Đọc tọa độ và múi giờ là kỹ năng nền để tính khoảng cách và so sánh thời gian.",
          points: ["Việt Nam nằm trong múi giờ GMT cộng 7.", "Kinh độ quyết định giờ, vĩ độ quyết định khí hậu.", "Mỗi độ vĩ khoảng 111 ki lô mét trên mặt đất."],
          steps: [
            { title: "Đọc cặp tọa độ", body: "Một điểm được ghi bằng vĩ độ trước, kinh độ sau, ví dụ Hà Nội khoảng 21 độ vĩ bắc và 105 độ kinh đông. Vĩ độ cho biết vị trí bắc nam nên liên quan trực tiếp đến khí hậu. Kinh độ cho biết vị trí đông tây và dùng để tính giờ.", tip: "Nhớ thứ tự: vĩ trước, kinh sau." },
            { title: "Tính giờ địa phương", body: "Mỗi múi giờ rộng 15 độ kinh tuyến, chênh nhau một giờ. Việt Nam ở GMT cộng 7 nên khi Hà Nội là 9 giờ thì Luân Đôn là 2 giờ cùng ngày. Bài tính giờ chỉ cần xác định chênh lệch múi rồi cộng hoặc trừ.", tip: "Vẽ trục múi giờ từ âm sang dương trước khi tính." },
            { title: "Ước lượng khoảng cách", body: "Chênh lệch vĩ độ nhân với 111 ki lô mét cho khoảng cách theo chiều bắc nam. Với khoảng cách đông tây phải nhân thêm cosin của vĩ độ vì các đường kinh tuyến hội tụ về cực. Đây là lý do hai điểm cùng chênh kinh độ nhưng ở vĩ độ cao lại gần nhau hơn.", tip: "Chỉ cần nhớ 111 ki lô mét cho mỗi độ vĩ." }
          ],
          formula: "1 độ vĩ tương đương khoảng 111 km"
        }
      ]
    },
    {
      title: "Địa hình và khí hậu",
      summary: "Ba dải địa hình, cơ chế gió mùa và những rủi ro thiên tai đang tăng dần.",
      lessons: [
        {
          id: "dh1",
          title: "Ba dải địa hình",
          minutes: 22,
          level: "Cơ bản",
          summary: "Đồi núi chiếm phần lớn diện tích nhưng chủ yếu là núi thấp, xen các đồng bằng châu thổ.",
          points: ["Khoảng ba phần tư diện tích là đồi núi, phần lớn dưới 1.000 mét.", "Hướng địa hình chính là tây bắc đông nam và vòng cung.", "Đồng bằng tập trung ở hai đầu nam bắc và dải ven biển miền Trung."],
          steps: [
            { title: "Đọc tỉ lệ và độ cao", body: "Đồi núi chiếm khoảng ba phần tư diện tích nhưng phần lớn là núi thấp, chỉ một số đỉnh vượt 3.000 mét như Phan Xi Păng. Đặc điểm này giúp giao thông và canh tác vẫn khả thi ở nhiều vùng. Nếu chỉ nhớ con số ba phần tư mà bỏ qua độ cao, bạn sẽ đánh giá sai trở ngại.", tip: "Nhớ cặp số: ba phần tư diện tích, phần lớn dưới 1.000 mét." },
            { title: "Nhận diện hướng địa hình", body: "Hướng tây bắc đông nam thấy rõ ở dãy Hoàng Liên Sơn và Trường Sơn, còn hướng vòng cung thấy ở các dãy phía đông bắc như Ngân Sơn, Bắc Sơn. Hai hướng này quyết định chiều dài các thung lũng và vị trí các con đèo. Chúng cũng ảnh hưởng đến hướng gió mùa thổi vào.", tip: "Chỉ đúng tên một dãy cho mỗi hướng để tránh nhầm." },
            { title: "So sánh hai đồng bằng lớn", body: "Đồng bằng sông Hồng do phù sa sông Hồng bồi đắp, có hệ thống đê lâu đời; đồng bằng sông Cửu Long thấp hơn, không có đê lớn và chịu ảnh hưởng thủy triều. Sự khác nhau này giải thích vì sao một nơi thâm canh lúa ổn định, nơi kia phụ thuộc mùa nước. So sánh là cách học địa hình hiệu quả nhất.", tip: "Lập bảng ba dòng: nguồn phù sa, độ cao, cách trị thủy." }
          ],
          formula: "Ba phần tư đồi núi, phần lớn núi thấp"
        },
        {
          id: "dh2",
          title: "Khí hậu nhiệt đới ẩm gió mùa",
          minutes: 24,
          level: "Trung bình",
          summary: "Gió mùa đông bắc và tây nam tạo hai mùa khác nhau rõ rệt giữa bắc và nam.",
          points: ["Nhiệt độ trung bình năm trên 21 độ C, độ ẩm cao.", "Miền Bắc có mùa đông lạnh, miền Nam nóng quanh năm.", "Mưa tập trung theo mùa, dễ gây lũ và hạn cục bộ."],
          steps: [
            { title: "Đọc hai loại gió mùa", body: "Gió mùa đông bắc thổi từ lục địa châu Á xuống, mang không khí lạnh và khô vào nửa đầu mùa đông, sau đó ẩm dần khi qua biển. Gió mùa tây nam từ vịnh Ben-gan và biển vào gây mưa lớn cho nhiều vùng. Cơ chế này giải thích vì sao mưa không đều theo không gian.", tip: "Ghi hướng gió và nguồn gốc khối khí cho mỗi loại." },
            { title: "Phân biệt hai miền khí hậu", body: "Miền Bắc chịu ảnh hưởng rõ của gió mùa đông bắc nên có mùa đông lạnh, biên độ nhiệt năm lớn. Miền Nam gần xích đạo, nóng quanh năm và chỉ phân hai mùa mưa khô. Ranh giới thường được lấy ở dãy Bạch Mã. Đây là căn cứ để giải thích cơ cấu cây trồng khác nhau.", tip: "Lấy dãy Bạch Mã làm mốc chia hai miền khí hậu." },
            { title: "Giải thích gió phơn", body: "Khi gió tây nam vượt dãy Trường Sơn, hơi ẩm bị giữ lại ở sườn đón gió, sang sườn khuất gió không khí trở nên khô và nóng. Hiện tượng này gọi là gió phơn, thường gặp ở Bắc Trung Bộ vào đầu mùa hạ. Hệ quả là nhiệt độ cao, độ ẩm thấp và nguy cơ cháy rừng.", tip: "Nhớ nguyên nhân: hơi ẩm mất ở sườn đón gió." }
          ],
          formula: "Gió mùa + địa hình = mưa không đều"
        },
        {
          id: "dh3",
          title: "Thiên tai và biến đổi khí hậu",
          minutes: 20,
          level: "Trung bình",
          summary: "Bão, lũ, hạn và xâm nhập mặn là bốn rủi ro chính, mức độ phụ thuộc vị trí và mùa.",
          points: ["Bão tập trung từ tháng 6 đến tháng 11, nhiều nhất ở miền Trung.", "Đồng bằng sông Cửu Long chịu xâm nhập mặn khi mùa khô kéo dài.", "Miền núi phía bắc đối mặt với lũ quét và sạt lở đất."],
          steps: [
            { title: "Đọc mùa và vùng rủi ro", body: "Bão và áp thấp nhiệt đới hình thành trên biển Đông, ảnh hưởng mạnh nhất tới ven biển miền Trung vì địa hình hẹp và dốc. Miền núi phía bắc chịu lũ quét do mưa lớn trên sườn dốc, rừng bị chặt phá. Mỗi vùng cần một biện pháp khác nhau, không thể dùng chung.", tip: "Lập bảng ba cột: vùng, loại thiên tai, mùa cao điểm." },
            { title: "Hiểu xâm nhập mặn", body: "Khi lưu lượng nước sông Cửu Long giảm vào mùa khô, nước biển theo cửa sông lấn sâu vào nội địa. Đất nhiễm mặn làm cây lúa chết và giảm năng suất, buộc nhiều nơi chuyển sang nuôi trồng thủy sản. Đây là ví dụ rõ nhất về tác động của khí hậu lên kinh tế.", tip: "Nối nguyên nhân thiếu nước với hệ quả đất nhiễm mặn." },
            { title: "Đề xuất ứng phó", body: "Giải pháp thường gồm công trình thủy lợi, chuyển đổi cơ cấu cây trồng và quản lý rừng đầu nguồn. Ở cấp hộ gia đình, việc trữ nước ngọt và theo dõi độ mặn đã tạo khác biệt lớn. Khi trả lời, nên gắn mỗi giải pháp với một loại thiên tai cụ thể.", tip: "Không nêu giải pháp chung chung, phải gắn với rủi ro." }
          ],
          formula: "Bão – lũ – hạn – mặn: bốn rủi ro, bốn cách ứng phó"
        }
      ]
    },
    {
      title: "Vùng kinh tế và dân cư",
      summary: "Bảy vùng kinh tế, phân bố dân cư và kỹ năng đọc Atlat, biểu đồ.",
      lessons: [
        {
          id: "vk1",
          title: "Bảy vùng kinh tế xã hội",
          minutes: 24,
          level: "Trung bình",
          summary: "Mỗi vùng có thế mạnh riêng, và thế mạnh đó bắt nguồn từ địa hình cùng vị trí.",
          points: ["Cách chia truyền thống trong sách giáo khoa gồm bảy vùng.", "Đồng bằng sông Hồng và Đông Nam Bộ dẫn đầu về công nghiệp, dịch vụ.", "Tây Nguyên mạnh về cây công nghiệp dài ngày và thủy điện."],
          steps: [
            { title: "Nhóm vùng theo thế mạnh", body: "Trung du và miền núi phía bắc mạnh về khoáng sản, thủy điện; đồng bằng sông Hồng mạnh về lúa và công nghiệp chế biến; Bắc Trung Bộ có cảng và du lịch di sản. Cách nhóm giúp nhớ nhanh thay vì học từng vùng rời. Mỗi vùng chỉ cần hai thế mạnh chủ lực.", tip: "Học mỗi vùng đúng hai từ khóa về thế mạnh." },
            { title: "Đọc sự thay đổi cách phân vùng", body: "Quy hoạch tổng thể giai đoạn 2021 đến 2030 tổ chức lại thành sáu vùng kinh tế xã hội, trong đó Bắc Trung Bộ và duyên hải miền Trung nhập thành một vùng. Sự điều chỉnh này nhằm tăng liên kết và giảm chia cắt không gian phát triển. Khi làm bài, cần ghi rõ đang dùng cách phân chia nào.", tip: "Luôn nêu rõ nguồn phân vùng trước khi so sánh." },
            { title: "Nối vùng với hạ tầng", body: "Đông Nam Bộ hút đầu tư nhờ cảng nước sâu, sân bay và hệ thống đường bộ kết nối; Tây Nguyên phụ thuộc vào tuyến vận tải dọc Trường Sơn và các cảng miền Trung. Hạ tầng quyết định chi phí vận chuyển, nên ảnh hưởng trực tiếp đến lợi thế cạnh tranh. Đây là lý do hai vùng cùng trồng cà phê nhưng hiệu quả khác nhau.", tip: "Mỗi nhận định về lợi thế phải kèm một yếu tố hạ tầng." }
          ],
          formula: "Thế mạnh vùng = tài nguyên + hạ tầng + vị trí"
        },
        {
          id: "vk2",
          title: "Phân bố dân cư và đô thị hóa",
          minutes: 20,
          level: "Trung bình",
          summary: "Dân cư tập trung ở đồng bằng và đô thị lớn, tạo áp lực nhưng cũng tạo thị trường.",
          points: ["Mật độ dân số trung bình khoảng 300 người trên ki lô mét vuông.", "Đồng bằng sông Hồng có mật độ cao nhất, Tây Bắc thấp nhất.", "Đô thị hóa nhanh đi kèm chênh lệch hạ tầng giữa các vùng."],
          steps: [
            { title: "Đọc bản đồ mật độ", body: "Hai vùng đồng bằng lớn tập trung phần lớn dân số vì đất canh tác tốt và lịch sử định cư lâu dài. Vùng núi có mật độ thấp do địa hình chia cắt và điều kiện sản xuất khó khăn. Chênh lệch này là nguyên nhân của dòng di cư nội địa. Khi phân tích, nên nêu cả nguyên nhân tự nhiên và kinh tế.", tip: "So sánh mật độ hai vùng cực trị thay vì học thuộc mọi con số." },
            { title: "Phân biệt đô thị hóa và công nghiệp hóa", body: "Đô thị hóa là tăng tỉ lệ dân sống ở đô thị, còn công nghiệp hóa là chuyển dịch cơ cấu kinh tế sang công nghiệp. Hai quá trình thường đi cùng nhưng không đồng nhất, vì có đô thị phát triển chủ yếu nhờ dịch vụ và du lịch. Phân biệt đúng hai khái niệm giúp tránh lỗi khi so sánh vùng.", tip: "Ghi hai định nghĩa riêng trước khi nêu ví dụ." },
            { title: "Đọc hệ quả hai mặt", body: "Đô thị hóa tạo việc làm, thị trường tiêu thụ và điều kiện giáo dục tốt hơn. Mặt khác, nó gây áp lực lên nhà ở, giao thông, nước sạch và môi trường ở các thành phố lớn. Bài trả lời tốt cần nêu cả hai mặt và một giải pháp cụ thể.", tip: "Mỗi hệ quả tích cực nên đi kèm một hệ quả cần quản lý." }
          ],
          formula: "Dân cư theo đồng bằng, đô thị theo việc làm"
        },
        {
          id: "vk3",
          title: "Đọc Atlat và biểu đồ",
          minutes: 18,
          level: "Nâng cao",
          summary: "Atlat là nguồn dữ liệu chính thức trong phòng thi, dùng đúng sẽ tiết kiệm thời gian.",
          points: ["Đọc tên bản đồ và bảng chú giải trước khi tìm số liệu.", "Biểu đồ cột so sánh giá trị, biểu đồ tròn thể hiện cơ cấu.", "Mỗi nhận xét phải có số liệu kèm đơn vị."],
          steps: [
            { title: "Đọc chú giải trước", body: "Mỗi trang Atlat có bảng ký hiệu riêng về loại đất, mật độ dân số và quy mô đô thị. Đọc chú giải trước giúp bạn tránh nhầm ký hiệu và tìm đúng trang nhanh hơn. Trong phòng thi, tiết kiệm một phút mỗi câu là lợi thế lớn.", tip: "Ghi nhớ vị trí ba trang hay dùng: địa hình, khí hậu, kinh tế chung." },
            { title: "Chọn dạng biểu đồ", body: "So sánh giá trị tuyệt đối giữa các năm hoặc các vùng thì dùng cột; thể hiện tỉ trọng trong tổng số thì dùng tròn hoặc miền. Chọn sai dạng khiến nhận xét mất căn cứ dù số liệu đúng. Câu hỏi về cơ cấu luôn cần biểu đồ thể hiện được phần trăm.", tip: "Từ khóa cơ cấu ứng với biểu đồ tròn hoặc miền." },
            { title: "Viết nhận xét có số liệu", body: "Nhận xét đạt yêu cầu thường gồm xu hướng chung, mức chênh lệch và một so sánh cụ thể, ví dụ vùng A cao gấp 2,3 lần vùng B. Nêu số liệu giúp người chấm thấy bạn đọc bảng thật. Tránh câu chỉ có tính từ như khá cao hoặc tương đối lớn.", tip: "Mỗi câu nhận xét phải có ít nhất một con số." }
          ],
          formula: "Chú giải – dạng biểu đồ – số liệu kèm đơn vị"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Vùng nội thủy", back: "Vùng nước phía trong đường cơ sở, thuộc chủ quyền hoàn toàn của quốc gia ven biển.", hint: "Nằm sát bờ, phía trong đường cơ sở.", example: "Vịnh, cửa sông, vũng nước trong đường cơ sở." },
    { front: "Lãnh hải", back: "Vùng biển rộng 12 hải lí tính từ đường cơ sở, thuộc chủ quyền quốc gia.", hint: "Mốc 12 hải lí đầu tiên.", example: "Tàu nước ngoài được đi qua không gây hại." },
    { front: "Vùng đặc quyền kinh tế", back: "Vùng biển rộng 200 hải lí tính từ đường cơ sở, ta có quyền khai thác tài nguyên.", hint: "Mốc 200 hải lí.", example: "Khai thác hải sản nhưng tôn trọng tự do hàng hải." },
    { front: "Đường cơ sở", back: "Đường nối các điểm chuẩn ven bờ hoặc quanh đảo, dùng để tính chiều rộng vùng biển.", hint: "Mốc gốc để đo mọi vùng biển.", example: "Được xác định bằng các điểm nối với đảo ven bờ." },
    { front: "Gió mùa đông bắc", back: "Khối không khí lạnh từ lục địa châu Á thổi xuống, gây mùa đông lạnh ở miền Bắc.", hint: "Thổi từ lục địa, mang lạnh.", example: "Nửa đầu mùa đông khô, nửa sau ẩm hơn khi qua biển." },
    { front: "Gió phơn", back: "Gió trở nên khô và nóng sau khi vượt qua một dãy núi.", hint: "Hơi ẩm bị giữ lại ở sườn đón gió.", example: "Gió tây nam khô nóng ở Bắc Trung Bộ." },
    { front: "Địa hình các-xtơ", back: "Địa hình núi đá vôi bị hòa tan, tạo hang động và đỉnh đá tai mèo.", hint: "Núi đá vôi bị nước xói mòn.", example: "Vịnh Hạ Long, hang Sơn Đoòng." },
    { front: "Đất badan", back: "Đất đỏ hình thành trên đá bazan, giàu dinh dưỡng, phù hợp cây công nghiệp dài ngày.", hint: "Đất đỏ ở Tây Nguyên.", example: "Đất trồng cà phê ở Đắk Lắk." },
    { front: "Xâm nhập mặn", back: "Nước biển lấn sâu vào cửa sông, nội đồng khi lưu lượng nước ngọt giảm.", hint: "Xảy ra mạnh vào mùa khô.", example: "Đất lúa nhiễm mặn ở Bến Tre." },
    { front: "Mật độ dân số", back: "Số người trên một ki lô mét vuông, phản ánh mức tập trung dân cư.", hint: "Người chia diện tích.", example: "Đồng bằng sông Hồng cao nhất cả nước." },
    { front: "Atlat Địa lý", back: "Tập bản đồ tra cứu được dùng chính thức trong phòng thi tốt nghiệp.", hint: "Đọc chú giải trước khi tra.", example: "Trang địa hình dùng để đọc hướng núi và đèo." },
    { front: "Vùng kinh tế trọng điểm", back: "Vùng được ưu tiên đầu tư để tạo động lực lan tỏa cho các vùng khác.", hint: "Đầu tàu, không phải vùng hành chính.", example: "Vùng trọng điểm phía nam gắn với Đông Nam Bộ." }
  ],
  quiz: [
    { q: "Diện tích phần đất liền của Việt Nam khoảng bao nhiêu?", options: ["331 nghìn ki lô mét vuông", "231 nghìn ki lô mét vuông", "431 nghìn ki lô mét vuông", "531 nghìn ki lô mét vuông"], answer: 0, explain: "Con số thường dùng là khoảng 331 nghìn ki lô mét vuông, chưa tính vùng biển rộng khoảng một triệu ki lô mét vuông." },
    { q: "Điểm cực Bắc của Việt Nam thuộc tỉnh nào?", options: ["Cà Mau", "Điện Biên", "Khánh Hòa", "Hà Giang"], answer: 3, explain: "Điểm cực Bắc nằm ở xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang; cực Nam ở mũi Cà Mau." },
    { q: "Việt Nam nằm trong múi giờ nào?", options: ["GMT cộng 6", "GMT cộng 7", "GMT cộng 8", "GMT cộng 9"], answer: 1, explain: "Việt Nam dùng múi giờ GMT cộng 7, lấy theo kinh tuyến 105 độ đông đi qua lãnh thổ." },
    { q: "Hướng địa hình chính của nước ta là:", options: ["Đông tây", "Bắc nam", "Tây bắc đông nam và vòng cung", "Đông bắc tây nam"], answer: 2, explain: "Hai hướng này thấy rõ ở Hoàng Liên Sơn, Trường Sơn và các dãy vòng cung phía đông bắc." },
    { q: "Gió mùa đông bắc gây ra đặc điểm nào ở miền Bắc?", options: ["Mùa đông lạnh", "Mùa khô sâu sắc", "Mưa phùn quanh năm", "Bão nhiệt đới"], answer: 0, explain: "Khối không khí lạnh từ lục địa châu Á tràn xuống làm miền Bắc có mùa đông lạnh, khác hẳn miền Nam." },
    { q: "Vùng nào có mật độ dân số cao nhất nước ta?", options: ["Tây Nguyên", "Tây Bắc", "Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long"], answer: 2, explain: "Đồng bằng sông Hồng có lịch sử định cư lâu dài, đất canh tác tốt nên mật độ dân số cao nhất." },
    { q: "Khí hậu miền Nam có đặc điểm:", options: ["Có mùa đông lạnh rõ", "Biên độ nhiệt năm lớn", "Nóng quanh năm, hai mùa mưa khô", "Mưa đều cả mười hai tháng"], answer: 2, explain: "Miền Nam gần xích đạo nên nền nhiệt cao quanh năm, chỉ phân hai mùa mưa và khô." },
    { q: "Đồi núi chiếm khoảng bao nhiêu diện tích lãnh thổ?", options: ["Một phần tư", "Một phần ba", "Một phần hai", "Ba phần tư"], answer: 3, explain: "Khoảng ba phần tư diện tích là đồi núi, nhưng chủ yếu là núi thấp dưới 1.000 mét." },
    { q: "Cây công nghiệp dài ngày đặc trưng nhất của Tây Nguyên là:", options: ["Cao su", "Hồ tiêu", "Điều", "Cà phê"], answer: 3, explain: "Đất badan màu mỡ cùng khí hậu cận xích đạo làm Tây Nguyên thành vùng cà phê lớn nhất cả nước." },
    { q: "Đồng bằng sông Cửu Long chịu rủi ro chính nào vào mùa khô?", options: ["Động đất mạnh", "Xâm nhập mặn", "Núi lửa phun", "Sa mạc hóa"], answer: 1, explain: "Khi lưu lượng nước sông giảm, nước biển lấn sâu vào cửa sông làm đất nhiễm mặn và giảm năng suất lúa." }
  ],
  lab: {
    kind: "diagram",
    title: "Bản đồ lớp chồng bảy vùng kinh tế",
    lead: "Bấm vào một vùng, một đới khí hậu hoặc một quần đảo để đọc đặc điểm. Bật tắt ba lớp bên phải để so sánh ranh giới khí hậu với ranh giới vùng kinh tế.",
    stageLabel: "Sơ đồ tương tác",
    controlNote: "Chọn một vùng để xem đặc điểm tự nhiên và sản xuất chủ lực. Tắt lớp khí hậu để nhìn rõ ranh giới vùng.",
    note: "Sơ đồ là hình khái quát theo thứ tự bắc nam, không dùng để đo khoảng cách thực tế.",
    viewBox: "0 0 600 380",
    pickHint: "Chọn một vùng, một đới khí hậu hoặc một quần đảo",
    layers: [
      { id: "vung", label: "Vùng kinh tế" },
      { id: "khi", label: "Đới khí hậu" },
      { id: "bien", label: "Biển và đảo" }
    ],
    shapes: [
      { type: "rect", x: 150, y: 22, w: 330, h: 140, rx: 26, fill: "#38bdf8", opacity: 0.1, layer: "khi",
        info: { title: "Đới khí hậu phía Bắc", desc: "Nhiệt đới ẩm gió mùa, có mùa đông lạnh do gió mùa đông bắc; biên độ nhiệt năm lớn.", tags: ["Mùa đông lạnh", "Biên độ nhiệt lớn"] } },
      { type: "rect", x: 158, y: 246, w: 336, h: 116, rx: 26, fill: "#fb923c", opacity: 0.1, layer: "khi",
        info: { title: "Đới khí hậu phía Nam", desc: "Cận xích đạo, nóng quanh năm, hai mùa mưa khô rõ rệt; biên độ nhiệt năm nhỏ.", tags: ["Cận xích đạo", "Mùa khô sâu"] } },
      { type: "ellipse", cx: 250, cy: 66, rx: 100, ry: 38, label: "Miền Bắc", layer: "vung",
        info: { title: "Trung du và miền núi phía Bắc", desc: "Địa hình núi cao chia cắt mạnh, giàu khoáng sản và tiềm năng thủy điện; khí hậu có mùa đông lạnh.", tags: ["Núi cao", "Khoáng sản", "Thủy điện"] } },
      { type: "rect", x: 334, y: 100, w: 86, h: 42, rx: 10, label: "ĐBSH", layer: "vung",
        info: { title: "Đồng bằng sông Hồng", desc: "Đồng bằng phù sa sông Hồng có hệ thống đê lâu đời, đất tốt và mật độ dân số cao nhất cả nước.", tags: ["Lúa gạo", "Công nghiệp", "Đô thị lớn"] } },
      { type: "ellipse", cx: 344, cy: 154, rx: 52, ry: 28, label: "Bắc TB", layer: "vung",
        info: { title: "Bắc Trung Bộ", desc: "Dải đất hẹp kẹp giữa biển và Trường Sơn, chịu gió phơn khô nóng và bão; phía tây có đất badan.", tags: ["Gió phơn", "Cảng biển", "Di sản"] } },
      { type: "ellipse", cx: 386, cy: 202, rx: 46, ry: 30, label: "Nam TB", layer: "vung",
        info: { title: "Duyên hải Nam Trung Bộ", desc: "Địa hình hẹp, nhiều vũng vịnh nước sâu; mùa khô kéo dài, thuận lợi du lịch biển và nghề cá.", tags: ["Vũng vịnh", "Thủy sản", "Du lịch"] } },
      { type: "ellipse", cx: 310, cy: 234, rx: 56, ry: 28, label: "Tây Nguyên", layer: "vung",
        info: { title: "Tây Nguyên", desc: "Cao nguyên đất badan rộng, khí hậu cận xích đạo với mùa khô rõ; là vùng cà phê lớn nhất nước.", tags: ["Cà phê", "Thủy điện", "Cao nguyên"] } },
      { type: "circle", cx: 292, cy: 280, r: 34, label: "Đông Nam Bộ", layer: "vung",
        info: { title: "Đông Nam Bộ", desc: "Chuyển tiếp từ đồng bằng lên cao nguyên, hạ tầng cảng và sân bay tốt, dẫn đầu về công nghiệp và dịch vụ.", tags: ["Công nghiệp", "Cảng nước sâu", "Đô thị hóa"] } },
      { type: "ellipse", cx: 242, cy: 322, rx: 66, ry: 30, label: "ĐBSCL", layer: "vung",
        info: { title: "Đồng bằng sông Cửu Long", desc: "Đồng bằng phù sa rộng và thấp, không có đê lớn, chịu thủy triều và xâm nhập mặn vào mùa khô.", tags: ["Lúa gạo", "Thủy sản", "Xâm nhập mặn"] } },
      { type: "circle", cx: 434, cy: 168, r: 13, label: "HS", layer: "bien",
        info: { title: "Quần đảo Hoàng Sa", desc: "Nằm ở phía đông bắc Biển Đông, gắn với ngư trường truyền thống và tuyến hàng hải quốc tế.", tags: ["Chủ quyền", "Ngư trường"] } },
      { type: "circle", cx: 462, cy: 250, r: 15, label: "TS", layer: "bien",
        info: { title: "Quần đảo Trường Sa", desc: "Nằm ở phía nam Biển Đông, gồm nhiều đảo san hô nhỏ và bãi ngầm, có vị trí quan trọng về an ninh biển.", tags: ["Chủ quyền", "Đảo san hô"] } }
    ],
    links: [
      { x1: 250, y1: 92, x2: 340, y2: 140, label: "gió đông bắc", dash: true },
      { x1: 310, y1: 234, x2: 292, y2: 280 },
      { x1: 242, y1: 322, x2: 292, y2: 280 },
      { x1: 386, y1: 202, x2: 434, y2: 168, dash: true }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Hải Yến", progress: 86, score: 8.5, status: "Tốt", note: "Đọc Atlat nhanh, cần siết phần tính giờ." },
      { name: "Trần Quốc Bảo", progress: 54, score: 7.0, status: "Đang học", note: "Hay nhầm thứ tự các vùng biển." },
      { name: "Lê Phương Thảo", progress: 92, score: 9.2, status: "Tốt", note: "Có thể nhận đề phân tích vùng kinh tế trọng điểm." },
      { name: "Phạm Văn Kiên", progress: 29, score: 5.7, status: "Cần hỗ trợ", note: "Chưa nắm cơ chế gió mùa đông bắc." },
      { name: "Vũ Ngọc Diệp", progress: 71, score: 7.9, status: "Đang học", note: "Nhận xét biểu đồ còn thiếu số liệu." },
      { name: "Đỗ Tiến Dũng", progress: 43, score: 6.3, status: "Đang học", note: "Nên ôn lại địa hình hai đồng bằng lớn." }
    ],
    submissions: [
      { student: "Nguyễn Hải Yến", lesson: "Bài phân tích vùng Tây Nguyên", time: "Hôm qua 20:40", status: "Chờ chấm" },
      { student: "Phạm Văn Kiên", lesson: "Phiếu lớp chồng khí hậu", time: "Hôm qua 18:15", status: "Chờ chấm" },
      { student: "Lê Phương Thảo", lesson: "Bài tập đọc Atlat trang 14", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Sáu học trên phòng lab, mỗi nhóm chuẩn bị một vùng để thuyết trình.",
      "Bài kiểm tra giữa kỳ có phần thực hành đọc Atlat, được mang Atlat vào phòng thi.",
      "Học sinh chưa đạt 40 phần trăm tiến độ cần gặp giáo viên trong giờ sinh hoạt."
    ]
  },
  className: "Địa lý 12A2",
  brief: "BTL-10_geoatlas-mon-dia-ly.md"
};
