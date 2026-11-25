window.BTL_DATA = {
  id: "archstudio",
  code: "BTL-29",
  name: "ArchStudio",
  monogram: "Ar",
  subject: "Kiến trúc",
  level: "Đại học",
  group: "Kỹ thuật & Kiến trúc",
  accent: "#78716c",
  accent2: "#0f766e",
  font: "serif",
  tagline: "Từ một nét phác thảo đến phối cảnh có tỷ lệ, mỗi ý tưởng kiến trúc đều có quy trình để lớn lên.",
  intro: "ArchStudio là studio thu nhỏ cho môn Kiến trúc: phác thảo ý tưởng trên lưới hướng dẫn, đọc phối cảnh theo điểm tụ, tra vật liệu theo khí hậu và nhận phản hồi theo từng tiêu chí đồ án. Sinh viên đi từ cảm hứng đến bản vẽ có căn cứ, không dừng ở hình thức đẹp mắt.",
  hero: { title: "Ngôn ngữ kiến trúc", highlight: "bắt đầu từ một nét phác thảo" },
  heroBadge: "Studio phác thảo · Gallery công trình",
  labShort: "PHÁC THẢO",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ khái niệm" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho Kiến trúc: phác thảo có lưới dẫn hướng, đọc công trình qua phối cảnh và chấm đồ án theo tiêu chí.",
  pathLead: "Đi từ nguyên lý tỷ lệ, ánh sáng và dây chuyền, sang đọc công trình qua phối cảnh và truyền thống bản địa, rồi kết thúc ở vật liệu và cách bảo vệ đồ án trước hội đồng.",
  features: [
    { badge: "01", title: "Studio phác thảo có lưới", desc: "Vẽ trực tiếp trên canvas với lưới ô vuông, quy tắc một phần ba hoặc đường chéo để kiểm soát bố cục." },
    { badge: "02", title: "Gallery công trình có thông số", desc: "Xem phối cảnh kèm diện tích, phong cách, vật liệu chủ đạo để so sánh cách xử lý của từng công trình." },
    { badge: "03", title: "Chấm đồ án theo tiêu chí", desc: "Mỗi ý tưởng được đánh giá theo ba tiêu chí ý tưởng, bố cục và vật liệu, kèm nhận xét cho từng mục." }
  ],
  life: [
    {
      title: "Phòng trọ mười lăm mét vuông và cửa sổ",
      scene: "Phòng trọ mười lăm mét vuông chỉ có một cửa sổ rộng một mét vuông, buổi chiều nắng xiên vào tường thì nóng, mà ngồi trong vẫn bí. Dời giường ra khỏi cửa, kê thêm quạt trước cửa sổ mới thấy dễ chịu hơn.",
      connect: "Diện tích cửa lấy sáng nên đạt khoảng một phần năm diện tích sàn, tức phòng này cần chừng ba mét vuông cửa. Muốn thông gió xuyên phòng phải có cửa vào và cửa ra đối diện, một cửa duy nhất thì gió chỉ đảo tại chỗ."
    },
    {
      title: "Chụp mái chùa từ sân và từ xa",
      scene: "Đứng sát sân chụp mái chùa, tấm ảnh cho mái ngắn và bè, trông như cái nón úp. Lùi ra ngoài cổng, hạ máy xuống ngang hông, cùng ngôi chùa ấy lại cao vút, các đường song song của mái hội tụ về một phía.",
      connect: "Đó là cách đọc phối cảnh: vị trí đường chân trời quyết định góc nhìn cao hay thấp, các đường song song trong thực tế hội tụ về điểm tụ. Mặt đứng với nhịp và tỷ lệ lỗ mở vì thế phải đọc kèm điểm nhìn."
    },
    {
      title: "Nhà bà ngoại mát hơn nhà lợp tôn",
      scene: "Trưa nắng về quê, vào nhà bà ngoại tường gạch dày, mái ngói vẫn mát, phải khoác thêm áo. Sang nhà bên cạnh lợp tôn xi măng, vừa bước vào đã thấy hầm hập, quạt chạy hết cỡ vẫn nóng, mãi tới chiều tối mới dịu.",
      connect: "Vật liệu khối lượng lớn như gạch, đất nện giữ nhiệt chậm nên đỉnh nóng lệch về chiều tối, còn tôn mỏng truyền nhiệt gần như tức thì. Chọn vật liệu theo khí hậu địa phương là bước đầu của concept, và đồ án phải dẫn chứng."
    }
  ],
  modules: [
    {
      title: "Nguyên lý thiết kế",
      summary: "Tỷ lệ, ánh sáng và dây chuyền công năng là ba nền tảng của mọi mặt bằng.",
      lessons: [
        {
          id: "nt1",
          title: "Tỷ lệ và hệ mô đun",
          minutes: 18,
          level: "Cơ bản",
          summary: "Dùng tỷ lệ và mô đun để bố cục mặt bằng có nhịp điệu thay vì tuỳ hứng.",
          points: ["Tỷ lệ vàng xấp xỉ 1 : 1,618.", "Mô đun là đơn vị lặp lại tạo nhịp cho công trình.", "Lưới cột phải phù hợp công năng và kích thước vật liệu."],
          steps: [
            { title: "Tỷ lệ tạo cảm giác cân bằng", body: "Một mặt đứng chia theo tỷ lệ vàng 1 : 1,618 thường tạo cảm giác cân bằng mà không cần trang trí thêm. Với chiều cao 6,18 m, phần trên nên chia khoảng 3,82 m và 2,36 m. Tỷ lệ này chỉ là công cụ gợi ý, không phải luật bắt buộc cho mọi công trình.", tip: "Dựng hình chữ nhật vàng bằng compa để kiểm tra nhanh tỷ lệ trên giấy." },
            { title: "Hệ mô đun trong bố cục", body: "Chọn mô đun 3 m cho nhà ở giúp phòng ngủ 3 × 4,2 m và phòng khách 4,2 × 6 m ăn khớp với lưới kết cấu. Khi mọi kích thước là bội số của một mô đun, thi công dễ và mặt bằng có nhịp rõ ràng. Lưới cột 6 × 6 m phù hợp bãi đỗ xe nhưng quá lớn cho nhà phố hẹp.", tip: "Chọn mô đun trước khi vẽ, đổi mô đun giữa chừng sẽ làm lệch toàn bộ bản vẽ." },
            { title: "Kiểm tra bằng người và đồ vật", body: "Tỷ lệ chỉ có ý nghĩa khi gắn với kích thước con người: cửa cao 2,1 m, lan can 1,05 m, bàn ăn cao 0,75 m. Đặt hình người vào phối cảnh giúp phát hiện không gian bị bí hoặc trống trải. Đây là bước kiểm tra nhanh mà nhiều đồ án sinh viên bỏ qua.", tip: "Luôn vẽ một bóng người cao 1,7 m trong mọi phối cảnh." }
          ],
          formula: "Tỷ lệ vàng a : b = b : (a + b) ≈ 1 : 1,618"
        },
        {
          id: "nt2",
          title: "Ánh sáng và thông gió tự nhiên",
          minutes: 22,
          level: "Trung bình",
          summary: "Tính diện tích cửa lấy sáng và bố trí luồng gió mát cho khí hậu nhiệt đới.",
          points: ["Diện tích cửa lấy sáng nên đạt khoảng 1/5 diện tích sàn.", "Thông gió xuyên phòng cần cửa vào và cửa ra đối diện.", "Hiên và mái dốc giảm bức xạ trực tiếp lên tường."],
          steps: [
            { title: "Đủ sáng nhưng không chói", body: "Phòng học 60 m² nên có khoảng 12 m² cửa kính, tương đương 1/5 diện tích sàn, để đạt độ rọi tự nhiên cần thiết. Cửa sổ hướng tây nhận nắng chiều gắt nên cần mái hiên hoặc lam chắn. Ánh sáng gián tiếp từ sân trong thường dịu hơn ánh sáng trực tiếp.", tip: "Dùng thước đo nhanh: chiều rộng cửa ít nhất bằng 1/3 chiều sâu phòng." },
            { title: "Thông gió xuyên phòng", body: "Khí nóng thoát lên cao và gió mát vào ở tầm thấp, nên cửa sổ cao kết hợp cửa dưới tạo đối lưu tự nhiên. Hai cửa đối diện nhau cho luồng gió thẳng, trong khi cửa lệch tạo gió xoáy nhẹ hơn nhưng phủ đều phòng. Với nhà phố sâu, giếng trời là giải pháp bắt buộc để có đối lưu.", tip: "Vẽ mũi tên gió trên mặt bằng để kiểm tra phòng nào bị bí." },
            { title: "Che nắng đúng hướng", body: "Mặt trời Việt Nam đi qua phía đông và tây, nên nắng xiên buổi sáng và chiều là khó chịu nhất. Hiên sâu 1,2 m hoặc lam ngang giúp chắn nắng cao vào mùa hè mà vẫn nhận nắng thấp mùa đông. Cây xanh trước mặt đứng vừa giảm bức xạ vừa tạo bóng đổ sinh động.", tip: "Đông và tây cần che, nam và bắc chỉ cần kiểm soát nhẹ." }
          ],
          formula: "Diện tích cửa lấy sáng ≈ 1/5 diện tích sàn"
        },
        {
          id: "nt3",
          title: "Bố cục mặt bằng và dây chuyền công năng",
          minutes: 24,
          level: "Trung bình",
          summary: "Sắp xếp các không gian theo trình tự sử dụng và tách vùng khô với vùng ướt.",
          points: ["Dây chuyền công năng là trình tự di chuyển hợp lý.", "Khu bếp theo tam giác bếp không quá 6 m tổng ba cạnh.", "Vùng ướt nên tập trung để dễ chống thấm và đi ống."],
          steps: [
            { title: "Vẽ dây chuyền trước khi vẽ tường", body: "Với căn hộ 70 m², dây chuyền vào cửa, gửi đồ, phòng khách, bếp, rồi hành lang đến phòng ngủ giúp khách không đi xuyên qua không gian riêng. Mỗi chặng nên ngắn và không cắt qua phòng khác. Vẽ các mũi tên di chuyển trước khi chia phòng sẽ phát hiện nhiều lỗi sớm.", tip: "Đi thử bằng chân trong mặt bằng 1/50 để cảm nhận khoảng cách." },
            { title: "Tam giác bếp", body: "Ba điểm bồn rửa, bếp nấu và tủ lạnh tạo thành tam giác làm việc, tổng ba cạnh nên dưới 6 m và mỗi cạnh từ 1,2 đến 2,7 m. Tam giác quá dài khiến nấu ăn mệt, quá hẹp thì va chạm. Lối đi trong bếp tối thiểu 1,0 m, tốt nhất 1,2 m cho hai người cùng làm.", tip: "Không đặt tủ lạnh cạnh bếp nấu vì nhiệt làm hỏng thiết bị." },
            { title: "Gom vùng ướt", body: "Đặt hai phòng vệ sinh cạnh nhau và gần khu bếp giúp gom đường ống cấp thoát nước, giảm chi phí và nguy cơ thấm. Trục kỹ thuật nên đi thẳng đứng qua các tầng, dễ bảo trì hơn đường ống chạy ngang. Vùng ướt cần cao hơn mặt sàn 20 mm và có cửa thoát sàn.", tip: "Đánh dấu trục kỹ thuật trên mọi bản vẽ để không đục nhầm khi thi công." }
          ],
          formula: "Tam giác bếp: tổng ba cạnh dưới 6 m"
        }
      ]
    },
    {
      title: "Công trình và phối cảnh",
      summary: "Đọc công trình qua hình khối, mặt đứng và bối cảnh văn hoá.",
      lessons: [
        {
          id: "ct1",
          title: "Đọc phối cảnh và mặt đứng",
          minutes: 20,
          level: "Cơ bản",
          summary: "Dựng phối cảnh đúng điểm tụ và đọc được tỷ lệ công trình trên mặt đứng.",
          points: ["Đường chân trời quyết định góc nhìn cao hay thấp.", "Các đường song song hội tụ về điểm tụ.", "Mặt đứng thể hiện nhịp, vật liệu và tỷ lệ lỗ mở."],
          steps: [
            { title: "Đường chân trời và điểm tụ", body: "Đặt đường chân trời ngang tầm mắt người xem, khoảng 1,6 m, thì phối cảnh có cảm giác đứng tự nhiên. Các đường song song theo chiều sâu hội tụ về một hoặc hai điểm tụ trên đường này. Hạ thấp đường chân trời làm công trình cao lớn hơn, nâng cao thì công trình thấp và rộng ra.", tip: "Chọn điểm tụ ngoài khung giấy để tránh biến dạng méo hình." },
            { title: "Đọc mặt đứng", body: "Mặt đứng cho biết nhịp điệu các ô cửa, vị trí ban công và vật liệu ốp. Một mặt đứng tốt có tỷ lệ lỗ mở rõ và có điểm nhấn, không chia đều vô hồn. Với nhà phố rộng 5 m, dùng hai nhịp cửa 1,8 m và một mảng tường đặc tạo nhịp dễ đọc hơn ba cửa bằng nhau.", tip: "Nheo mắt nhìn mặt đứng để thấy mảng đặc và mảng rỗng." },
            { title: "Tỷ lệ với người và cây", body: "Đặt bóng người ở tiền cảnh giúp người xem ước lượng chiều cao thật của công trình. Cây xanh cao 6 đến 8 m là mốc so sánh tốt cho nhà hai đến ba tầng. Phối cảnh thiếu mốc tham chiếu thường khiến công trình trông to hơn thực tế.", tip: "Ghi chú tỷ lệ người bằng một nét đơn giản, không cần chi tiết." }
          ],
          formula: "Đường chân trời ở khoảng 1,6 m tương ứng tầm mắt người"
        },
        {
          id: "ct2",
          title: "Nhà ở truyền thống Việt Nam",
          minutes: 24,
          level: "Trung bình",
          summary: "Học từ nhà rường, hiên và sân trong cách ứng xử với khí hậu nóng ẩm.",
          points: ["Mái dốc lớn và hiên sâu phù hợp mưa nhiều.", "Sân trong tạo thông gió và ánh sáng cho nhà sâu.", "Vật liệu tre, gỗ, gạch nung phù hợp khí hậu bản địa."],
          steps: [
            { title: "Mái và hiên", body: "Nhà rường miền Trung có mái dốc 25 đến 30 độ để thoát mưa nhanh và hiên sâu tới 1,5 m che nắng xiên. Khoảng không dưới hiên vừa là nơi sinh hoạt vừa là đệm khí hậu trước khi vào nhà. Đây là giải pháp thụ động mà nhiều công trình hiện đại đang học lại.", tip: "Độ dốc mái phải lớn hơn góc tới của nắng hè để hiên che được chân tường." },
            { title: "Sân trong và giếng trời", body: "Nhà ống sâu 20 m thường bí ở giữa, sân trong rộng 2 × 3 m giải quyết cả ánh sáng lẫn đối lưu gió. Không khí nóng thoát lên qua khoảng trống, kéo gió mát từ các phòng vào. Cây và mặt nước nhỏ trong sân còn giúp giảm nhiệt độ cục bộ vài độ.", tip: "Tính tỷ lệ sân trong ít nhất 8% diện tích sàn cho nhà phố sâu." },
            { title: "Vật liệu và kết cấu bản địa", body: "Gạch nung, gỗ lim, tre và đá ong có khối lượng riêng lớn nên hấp thụ nhiệt chậm, giữ nhà mát về đêm. Kết cấu gỗ nhịp nhỏ nhưng linh hoạt, dễ tháo lắp và sửa chữa. Khi dùng lại vật liệu truyền thống trong công trình mới, cần tính lại khả năng chịu lực thay vì sao chép kích thước cũ.", tip: "Đối chiếu mỗi vật liệu truyền thống với tiêu chuẩn hiện hành trước khi dùng." }
          ],
          formula: "Mái dốc 25 đến 30 độ phù hợp lượng mưa lớn ở Việt Nam"
        },
        {
          id: "ct3",
          title: "Công trình công cộng và không gian công cộng",
          minutes: 22,
          level: "Trung bình",
          summary: "Tổ chức luồng người và tạo không gian đệm giữa công trình với đô thị.",
          points: ["Luồng người vào và ra phải tách biệt rõ.", "Không gian đệm giúp công trình hoà vào đô thị.", "Chiếu sáng và điểm nhấn định hướng người đi bộ."],
          steps: [
            { title: "Tách luồng người", body: "Bảo tàng đón 800 khách mỗi ngày cần luồng vào riêng, luồng ra riêng và luồng hàng hoá tách khỏi khách tham quan. Sảnh đón đóng vai trò nút giao, từ đó chia nhánh đến phòng trưng bày và khu dịch vụ. Nếu ba luồng chồng lên nhau, giờ cao điểm sẽ ùn tắc ngay cửa.", tip: "Đếm số người mỗi luồng để chọn chiều rộng cửa, đừng chọn theo cảm tính." },
            { title: "Không gian đệm với đô thị", body: "Bậc thềm rộng, hiên có mái hoặc quảng trường nhỏ trước công trình tạo vùng chuyển tiếp giúp người đi bộ dừng lại. Khoảng đệm này cũng là nơi trú mưa và gặp gỡ, làm công trình thân thiện hơn. Công trình đặt sát vỉa hè không có đệm thường tạo cảm giác xa cách dù hình thức đẹp.", tip: "Dành ít nhất 3 m chiều sâu đệm trước lối vào chính." },
            { title: "Định hướng bằng ánh sáng", body: "Ánh sáng ban đêm có thể dẫn người từ vỉa hè vào sảnh nếu được bố trí thành tuyến liên tục. Đèn hắt tường, đèn lối đi và điểm sáng ở quầy tiếp đón tạo ba lớp chỉ dẫn tự nhiên. Chiếu sáng quá đều sẽ làm mất điểm nhấn và gây chói cho người đi đường.", tip: "Vẽ sơ đồ chiếu sáng cùng mặt bằng, đừng để đến giai đoạn cuối mới thêm." }
          ],
          formula: "Chiều rộng lối thoát tính theo số người và đơn vị thoát nạn"
        }
      ]
    },
    {
      title: "Vật liệu và đồ án",
      summary: "Chọn vật liệu theo khí hậu, phát triển concept và bảo vệ đồ án có căn cứ.",
      lessons: [
        {
          id: "vl1",
          title: "Vật liệu địa phương và khí hậu",
          minutes: 20,
          level: "Cơ bản",
          summary: "Chọn vật liệu theo nhiệt độ, độ ẩm và khả năng cung ứng tại địa phương.",
          points: ["Vật liệu có khối lượng riêng lớn giữ nhiệt chậm.", "Gỗ và tre cần xử lý chống mối, ẩm.", "Vật liệu địa phương giảm chi phí vận chuyển."],
          steps: [
            { title: "Đọc khí hậu trước khi chọn vật liệu", body: "Công trình ven biển chịu gió mặn nên hạn chế thép lộ thiên và cần lớp phủ bảo vệ. Vùng núi phía bắc có mùa đông lạnh nên tường dày và vật liệu cách nhiệt tốt sẽ giữ ấm. Cùng một bản thiết kế đặt ở hai vùng khí hậu khác nhau phải đổi cấu tạo lớp vỏ.", tip: "Ghi nhiệt độ cao nhất, thấp nhất và độ ẩm trung bình vào đầu thuyết minh." },
            { title: "So sánh vật liệu theo mục đích", body: "Gạch nung có quán tính nhiệt cao, phù hợp tường dày giữ mát; tôn nhẹ và rẻ nhưng nóng nhanh, cần lớp cách nhiệt bên dưới. Bê tông trần tạo khối vững chắc nhưng dễ đọng ẩm nếu không xử lý bề mặt. Bảng so sánh theo tiêu chí nhiệt, ẩm, chi phí và độ bền giúp chọn nhanh.", tip: "Lập bảng ba cột: vật liệu, ưu điểm, nhược điểm cho từng phương án." },
            { title: "Chi phí và khả năng cung ứng", body: "Dùng đá ong khai thác tại địa phương có thể giảm chi phí vận chuyển đáng kể so với đá nhập từ xa. Tuy nhiên vật liệu địa phương thường ít mẫu mã và chất lượng không đồng đều, cần chọn lô và kiểm tra mẫu. Bài học là tối ưu tổng chi phí, không chỉ giá vật liệu trên mét vuông.", tip: "Hỏi nhà cung cấp trong bán kính 50 km trước khi chọn vật liệu đặc biệt." }
          ],
          formula: "Hiệu quả = (chi phí vật liệu + vận chuyển + bảo trì) / tuổi thọ"
        },
        {
          id: "vl2",
          title: "Phác thảo concept từ ý tưởng đến khối",
          minutes: 26,
          level: "Nâng cao",
          summary: "Chuyển một ý tưởng bằng lời thành sơ đồ khối, rồi thành phối cảnh có kiểm soát bố cục.",
          points: ["Concept phải trả lời được một vấn đề cụ thể.", "Sơ đồ khối đi trước chi tiết hình thức.", "Luôn phác ba phương án trước khi chọn một."],
          steps: [
            { title: "Đặt vấn đề bằng một câu", body: "Với đề bài nhà ở cho gia đình ba thế hệ trên lô đất 5 × 18 m, concept có thể là hai khối lệch nhau quanh sân trong để mỗi thế hệ có không gian riêng. Câu này phải nêu rõ giải pháp chứ không chỉ là cảm xúc như yên bình hay hiện đại. Một concept tốt có thể vẽ lại bằng ba nét.", tip: "Viết concept thành một câu, nếu cần hai câu thì ý tưởng còn mơ hồ." },
            { title: "Từ ý tưởng đến sơ đồ khối", body: "Vẽ nhanh các khối chữ nhật thể hiện vị trí, chiều cao và quan hệ giữa không gian trước khi bàn đến vật liệu. Với ví dụ trên, khối trước thấp hai tầng cho phòng khách, khối sau cao ba tầng cho phòng ngủ, sân chen giữa. Sơ đồ khối giúp phát hiện lỗi tiếp cận và thông gió từ sớm.", tip: "Dùng ba màu cho ba chức năng, đừng tô chi tiết ở bước này." },
            { title: "Phác thảo và kiểm soát bố cục", body: "Khi đã có khối, phác thảo phối cảnh trên lưới một phần ba để đặt điểm nhấn vào giao điểm mạnh thay vì giữa khung. Vẽ ít nhất ba phương án mặt đứng rồi chọn, vì phương án đầu thường là quán tính. Trong studio, lưu từng bản phác để thấy quá trình tiến hoá của ý tưởng.", tip: "Giữ lại bản phác xấu để thuyết trình quá trình, hội đồng đánh giá cao điều này." }
          ],
          formula: "Concept một câu, sơ đồ khối ba màu, ba phương án mặt đứng"
        },
        {
          id: "vl3",
          title: "Thuyết trình đồ án và bảng tiêu chí",
          minutes: 22,
          level: "Trung bình",
          summary: "Chuẩn bị bảng tiêu chí và bài nói bảy phút để bảo vệ đồ án thuyết phục.",
          points: ["Tiêu chí thường gồm ý tưởng, bố cục và vật liệu.", "Mỗi tiêu chí cần dẫn chứng trên bản vẽ.", "Bài thuyết trình nên đi theo trình tự vấn đề, giải pháp, kiểm chứng."],
          steps: [
            { title: "Đọc bảng tiêu chí trước khi vẽ", body: "Một bảng chấm điển hình chia 40% cho ý tưởng, 35% cho bố cục công năng và 25% cho vật liệu cùng kỹ thuật. Biết trọng số giúp phân bổ thời gian, không dồn hết vào hình thức phối cảnh. Nếu ý tưởng chiếm 40%, phần giải thích concept phải được đầu tư tương xứng.", tip: "Ghi trọng số từng tiêu chí lên góc bảng vẽ để tự nhắc." },
            { title: "Dẫn chứng cho từng tiêu chí", body: "Khi hội đồng hỏi vì sao chọn bố cục này, câu trả lời cần chỉ được vào mặt bằng và nói rõ nó giải quyết vấn đề gì. Với tiêu chí vật liệu, nêu tên vật liệu, lý do chọn theo khí hậu và vị trí sử dụng. Nhận xét chung chung như hài hoà, hiện đại sẽ không được tính điểm.", tip: "Mỗi tiêu chí chuẩn bị sẵn một câu dẫn chứng gắn với bản vẽ cụ thể." },
            { title: "Bài nói bảy phút", body: "Phân bổ khoảng một phút cho vấn đề, ba phút cho giải pháp và hai phút cho kiểm chứng bằng bản vẽ, để lại một phút dự phòng. Mở đầu bằng hình ảnh hiện trạng gây ấn tượng, kết thúc bằng phối cảnh tổng thể. Tập nói trước gương hai lần giúp kiểm soát thời gian tốt hơn đọc giấy.", tip: "Chuẩn bị sẵn ba câu trả lời cho ba câu hỏi khó nhất mà giảng viên hay hỏi." }
          ],
          formula: "Bảng chấm gợi ý: ý tưởng 40%, bố cục 35%, vật liệu và kỹ thuật 25%"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Tỷ lệ vàng", back: "Tỷ lệ xấp xỉ 1 : 1,618, thường dùng để chia mặt đứng và bố cục tạo cảm giác cân bằng.", hint: "Con số 1,618.", example: "Mặt đứng cao 6,18 m chia thành 3,82 m và 2,36 m." },
    { front: "Hệ mô đun", back: "Đơn vị kích thước lặp lại làm cơ sở cho lưới cột và mọi kích thước công trình.", hint: "Đơn vị nhịp điệu.", example: "Mô đun 3 m cho phòng ngủ 3 × 4,2 m." },
    { front: "Quy tắc một phần ba", back: "Chia khung hình thành ba phần bằng nhau, đặt điểm nhấn ở đường hoặc giao điểm mạnh.", hint: "Tránh đặt chủ thể ở giữa.", example: "Đặt khối tháp ở giao điểm một phần ba trong phối cảnh." },
    { front: "Ánh sáng tự nhiên", back: "Ánh sáng mặt trời chiếu vào không gian qua cửa, giếng trời hoặc sân trong.", hint: "Miễn phí nhưng cần kiểm soát.", example: "Cửa kính chiếm 1/5 diện tích sàn phòng học." },
    { front: "Thông gió xuyên phòng", back: "Đối lưu không khí nhờ cửa vào và cửa ra bố trí đối diện hoặc lệch nhau.", hint: "Vào một phía, ra phía kia.", example: "Cửa sổ thấp và cửa gió cao tạo đối lưu tự nhiên." },
    { front: "Dây chuyền công năng", back: "Trình tự di chuyển hợp lý giữa các không gian theo hoạt động sử dụng.", hint: "Đường đi của người dùng.", example: "Vào cửa, gửi đồ, phòng khách, rồi hành lang phòng ngủ." },
    { front: "Mặt đứng", back: "Hình chiếu thẳng đứng của công trình, thể hiện nhịp điệu lỗ mở, vật liệu và tỷ lệ.", hint: "Nhìn từ ngoài vào, không phối cảnh.", example: "Hai nhịp cửa 1,8 m và một mảng tường đặc." },
    { front: "Điểm tụ và đường chân trời", back: "Các đường song song trong phối cảnh hội tụ về điểm tụ nằm trên đường chân trời ở tầm mắt.", hint: "Ngang tầm mắt người xem.", example: "Đường chân trời ở 1,6 m cho góc nhìn đứng tự nhiên." },
    { front: "Vật liệu địa phương", back: "Vật liệu khai thác gần công trình, giảm chi phí vận chuyển và phù hợp khí hậu bản địa.", hint: "Gần thì rẻ và hợp khí hậu.", example: "Đá ong dùng cho nhà vùng trung du." },
    { front: "Nhà rường", back: "Kiểu nhà truyền thống miền Trung với kết cấu gỗ, mái dốc lớn và hiên sâu.", hint: "Gỗ, mái dốc, hiên rộng.", example: "Mái dốc 25 đến 30 độ và hiên sâu 1,5 m." },
    { front: "Concept thiết kế", back: "Ý tưởng chủ đạo trả lời một vấn đề cụ thể của đề bài, được diễn đạt ngắn và có thể vẽ lại.", hint: "Một câu, ba nét vẽ.", example: "Hai khối lệch quanh sân trong cho gia đình ba thế hệ." },
    { front: "Tiêu chí chấm đồ án", back: "Bộ tiêu chí có trọng số, thường gồm ý tưởng, bố cục công năng và vật liệu kỹ thuật.", hint: "Biết trọng số để phân bổ thời gian.", example: "Ý tưởng 40%, bố cục 35%, vật liệu 25%." }
  ],
  quiz: [
    { q: "Tỷ lệ vàng xấp xỉ bằng:", options: ["1 : 1,414", "1 : 2", "1 : 1,618", "1 : 3"], answer: 2, explain: "Tỷ lệ vàng là 1 : 1,618, thường dùng trong bố cục mặt đứng và hình khối." },
    { q: "Diện tích cửa lấy sáng nên đạt khoảng bao nhiêu phần diện tích sàn?", options: ["1/20", "1/10", "1/2", "1/5"], answer: 3, explain: "Khoảng 1/5 diện tích sàn là mức phổ biến để phòng đủ sáng tự nhiên." },
    { q: "Tam giác bếp hợp lý có tổng ba cạnh:", options: ["Dưới 6 m", "Trên 10 m", "Đúng 12 m", "Không cần giới hạn"], answer: 0, explain: "Tổng ba cạnh dưới 6 m giúp thao tác nấu ăn liền mạch, không mệt." },
    { q: "Trong phối cảnh, đường chân trời thường đặt ở độ cao:", options: ["Tầm mắt người xem, khoảng 1,6 m", "Mặt đất", "Đỉnh công trình", "Không quan trọng"], answer: 0, explain: "Đường chân trời tương ứng tầm mắt người xem, quyết định góc nhìn cao hay thấp." },
    { q: "Nhà rường miền Trung thường có mái dốc:", options: ["Dưới 5 độ", "10 đến 15 độ", "25 đến 30 độ", "Trên 60 độ"], answer: 2, explain: "Mái dốc 25 đến 30 độ giúp thoát mưa nhanh trong điều kiện mưa lớn." },
    { q: "Sân trong trong nhà phố sâu chủ yếu giải quyết vấn đề gì?", options: ["Tăng diện tích sử dụng", "Ánh sáng và thông gió cho phần giữa nhà", "Che nắng phía trước", "Tạo chỗ đỗ xe"], answer: 1, explain: "Sân trong đưa ánh sáng và tạo đối lưu cho phần giữa nhà vốn bị bí." },
    { q: "Khi phác thảo concept, nên vẽ bao nhiêu phương án mặt đứng trước khi chọn?", options: ["Một phương án duy nhất", "Hai phương án", "Không cần phác", "Ít nhất ba phương án"], answer: 3, explain: "Phương án đầu thường là quán tính, ba phương án giúp so sánh và chọn có căn cứ." },
    { q: "Vật liệu có khối lượng riêng lớn như gạch nung thường:", options: ["Nóng lên và nguội đi rất nhanh", "Hấp thụ nhiệt chậm, giữ mát về đêm", "Không chịu được ẩm", "Chỉ dùng cho mái"], answer: 1, explain: "Quán tính nhiệt cao giúp vật liệu nặng hấp thụ nhiệt chậm và giữ nhiệt lâu." },
    { q: "Luồng người trong bảo tàng cần được tổ chức thế nào?", options: ["Gộp chung mọi luồng cho gọn", "Chỉ cần một cửa duy nhất", "Tách luồng vào, luồng ra và luồng hàng hoá", "Ưu tiên luồng hàng hoá"], answer: 2, explain: "Tách luồng giúp tránh ùn tắc giờ cao điểm và không ảnh hưởng trải nghiệm tham quan." },
    { q: "Trong bảng chấm đồ án gợi ý, tiêu chí ý tưởng thường chiếm:", options: ["10%", "20%", "25%", "40%"], answer: 3, explain: "Ý tưởng thường có trọng số cao nhất, khoảng 40%, nên phần giải thích concept phải tương xứng." }
  ],
  lab: {
    kind: "paint",
    title: "Studio phác thảo ý tưởng",
    lead: "Vẽ trực tiếp ý tưởng mặt đứng hoặc phối cảnh lên canvas, đổi màu và cỡ cọ, rồi bật lưới hướng dẫn để kiểm soát bố cục. Lưu ảnh để đưa vào bộ sưu tập quá trình phác thảo của đồ án.",
    stageLabel: "Canvas phác thảo",
    controlNote: "Bắt đầu bằng lưới ô vuông để dựng tỷ lệ khối, sau đó chuyển sang quy tắc một phần ba để đặt điểm nhấn. Chọn màu đậm cho nét dựng và màu nhạt cho mảng bóng.",
    note: "Canvas mô phỏng thói quen phác thảo nhanh nhiều phương án trước khi chọn một hướng phát triển cho đồ án."
  },
  teacher: {
    students: [
      { name: "Nguyễn Mai Chi", progress: 86, score: 8.8, status: "Tốt", note: "Concept rõ, phối cảnh có chiều sâu tốt." },
      { name: "Trần Quốc Hưng", progress: 62, score: 7.4, status: "Đang học", note: "Bố cục mặt bằng còn rối ở khu phụ." },
      { name: "Lê Thảo Vy", progress: 91, score: 9.1, status: "Tốt", note: "Chọn vật liệu theo khí hậu rất thuyết phục." },
      { name: "Phạm Anh Tuấn", progress: 35, score: 5.1, status: "Cần hỗ trợ", note: "Chưa nộp phác thảo ba phương án mặt đứng." },
      { name: "Vũ Hải Yến", progress: 70, score: 7.9, status: "Đang học", note: "Tiến bộ về dây chuyền công năng, cần luyện phối cảnh." },
      { name: "Đỗ Minh Trí", progress: 48, score: 6.3, status: "Đang học", note: "Vẽ tay tốt nhưng thiếu dẫn chứng khi thuyết trình." }
    ],
    submissions: [
      { student: "Nguyễn Mai Chi", lesson: "Đồ án nhà phố: ba phương án khối", time: "Hôm qua 22:20", status: "Chờ chấm" },
      { student: "Phạm Anh Tuấn", lesson: "Phác thảo mặt đứng trên lưới", time: "Hôm qua 19:05", status: "Chờ chấm" },
      { student: "Lê Thảo Vy", lesson: "Bảng phân tích vật liệu theo khí hậu", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi chữa đồ án thứ Sáu, mỗi nhóm chuẩn bị bảy phút thuyết trình như buổi bảo vệ.",
      "Lớp tham quan công trình truyền thống vào tuần sau, mang theo sổ phác thảo A4.",
      "Sinh viên nộp bản phác thảo quá trình, không chỉ nộp bài hoàn thiện."
    ]
  },
  className: "Kiến trúc – K24",
  brief: "BTL-29_archstudio-mon-kien-truc.md"
};
