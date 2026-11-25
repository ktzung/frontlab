window.BTL_DATA = {
  id: "circuitpro",
  code: "BTL-27",
  name: "CircuitPro",
  monogram: "Ω",
  subject: "Kỹ thuật điện – điện tử",
  level: "Đại học",
  group: "Kỹ thuật & Kiến trúc",
  accent: "#d97706",
  accent2: "#dc2626",
  font: "display",
  tagline: "Nhìn dòng điện chạy trong mạch, đọc mã màu điện trở và tính Ohm ngay trên sơ đồ.",
  intro: "CircuitPro biến sơ đồ mạch thành nơi thực hành: chạm vào từng linh kiện để xem vai trò, kéo thông số để thấy dòng và áp thay đổi, và đi qua từng bước của định luật Ohm thay vì học thuộc công thức. Bài tập được chấm theo đúng khâu tính toán, nhờ vậy sinh viên biết mình sai ở đâu.",
  hero: { title: "Điện – điện tử", highlight: "thấy dòng chảy trong mạch" },
  heroBadge: "Mạch tương tác · Máy tính Ohm",
  labShort: "SƠ ĐỒ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ linh kiện" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành riêng cho mạch điện: chạm vào linh kiện để hiểu vai trò, tính từng bước và phản xạ với mã màu.",
  pathLead: "Đi từ định luật Ohm và Kirchhoff, sang linh kiện thụ động, rồi kết thúc ở thiết kế mạch và an toàn điện. Sơ đồ mạch trong phòng lab dùng lại được cho nhiều bài tập khác nhau.",
  features: [
    { badge: "01", title: "Sơ đồ mạch có điểm chạm", desc: "Chạm vào nguồn, cầu chì, công tắc, đèn hay đồng hồ để xem chức năng, giá trị và cách mắc đúng." },
    { badge: "02", title: "Máy tính Ohm từng bước", desc: "Nhập hai đại lượng, xem đại lượng còn lại cùng công thức và phép thay số trung gian." },
    { badge: "03", title: "Kho mã màu điện trở", desc: "Luyện đọc bốn vạch màu, quy đổi giá trị và sai số, có chế độ tự sinh đề để ôn lại." }
  ],
  life: [
    {
      title: "Dây đèn nháy và ổ cắm nhiều đầu",
      scene: "Dây đèn nháy mua ở chợ có mười bóng nối liền, một bóng cháy là cả dây tắt ngóm. Trong khi đó ổ cắm nhiều đầu trong phòng trọ, rút phích quạt ra thì đèn bàn và sạc điện thoại vẫn chạy bình thường.",
      connect: "Dây đèn mắc nối tiếp nên cùng một dòng chạy qua mọi bóng, hở một chỗ là mất cả mạch. Ổ cắm chia các nhánh song song, mỗi nhánh chịu cùng điện áp, dòng tổng bằng tổng dòng nhánh, đúng như Kirchhoff."
    },
    {
      title: "Cục sạc điện thoại ấm sau giờ cắm",
      scene: "Cục sạc điện thoại cắm ở ổ điện suốt buổi tối, sờ vào thấy âm ấm dù máy đã đầy pin. Tháo ra nhìn thì bên trong chỉ có một bo mạch nhỏ, vài linh kiện, không có gì chuyển động mà vẫn nóng.",
      connect: "Ổ điện cho ra điện xoay chiều, cầu điốt chỉ cho dòng đi một chiều còn tụ san phẳng lại. Điốt silic sụt khoảng 0,7 vôn, điện trở hạn dòng cũng toả nhiệt, nên phần năng lượng mất đi biến thành cái ấm đó."
    },
    {
      title: "Điện thoại phát nhạc qua loa bluetooth",
      scene: "Điện thoại phát một bản nhạc, loa trong chỉ đủ nghe khi để sát tai. Cắm sang loa bluetooth nhỏ thì cả phòng nghe rõ, dù loa chỉ chạy bằng viên pin sạc, và tiếng càng mở lớn thì pin càng tụt nhanh.",
      connect: "Tín hiệu nhạc rất yếu đi vào cực gốc, dòng ở cực góp lớn gấp beta lần và lấy năng lượng từ pin, nên tiếng to hơn mà không cần nguồn tín hiệu mạnh. Mạch chia áp bằng hai điện trở đặt điểm làm việc cho transistor."
    }
  ],
  modules: [
    {
      title: "Định luật cơ bản của mạch điện",
      summary: "Quan hệ giữa dòng, áp, trở và hai định luật bảo toàn của mạch.",
      lessons: [
        {
          id: "dl1",
          title: "Định luật Ohm và công suất",
          minutes: 16,
          level: "Cơ bản",
          summary: "Tính dòng, áp, trở và công tiêu tán chỉ với ba công thức gốc.",
          points: ["I = U/R với U tính bằng vôn, R bằng ôm.", "Công suất P = U·I = I²·R.", "Điện trở chuyển điện năng thành nhiệt."],
          steps: [
            { title: "Ba đại lượng, một quan hệ", body: "Một bóng đèn 12 V mắc vào nguồn 12 V có điện trở 4 Ω sẽ nhận dòng I = 12/4 = 3 A. Nếu điện trở tăng lên 6 Ω, dòng giảm còn 2 A trong khi áp nguồn không đổi. Định luật Ohm cho biết dòng tỉ lệ thuận với áp và tỉ lệ nghịch với trở.", tip: "Kiểm tra đơn vị trước khi chia, đừng để mA lẫn với A." },
            { title: "Công suất và nhiệt", body: "Công suất tiêu tán là P = U·I = 12·3 = 36 W, toàn bộ biến thành nhiệt và ánh sáng. Với điện trở, dùng P = I²·R để chọn công suất định mức phù hợp. Một điện trở 1/4 W mà tiêu tán 0,5 W sẽ nóng và cháy.", tip: "Chọn điện trở có công suất định mức ít nhất gấp đôi công suất tính được." },
            { title: "Đo đạc thực tế", body: "Vôn kế mắc song song với linh kiện, ampe kế mắc nối tiếp vào nhánh cần đo. Mắc ampe kế song song với nguồn sẽ gây đoản mạch và có thể làm nổ cầu chì. Trong sơ đồ ở phòng lab, đồng hồ đo được tách thành một lớp riêng để dễ nhận biết cách mắc.", tip: "Nhớ câu: vôn kế song song, ampe kế nối tiếp." }
          ],
          formula: "I = U/R ; P = U·I = I²·R"
        },
        {
          id: "dl2",
          title: "Nối tiếp, song song và hỗn hợp",
          minutes: 20,
          level: "Trung bình",
          summary: "Rút gọn mạch nhiều điện trở về một điện trở tương đương.",
          points: ["Nối tiếp: R tương đương bằng tổng các điện trở.", "Song song: nghịch đảo điện trở tương đương bằng tổng nghịch đảo.", "Mạch hỗn hợp rút gọn từ trong ra ngoài."],
          steps: [
            { title: "Nối tiếp chia áp", body: "Hai điện trở 4 Ω và 6 Ω nối tiếp có tổng 10 Ω; với nguồn 12 V dòng là 1,2 A. Điện áp rơi trên mỗi trở tỉ lệ với giá trị của nó: 4,8 V và 7,2 V. Cùng một dòng đi qua cả hai nên điện trở lớn chịu áp lớn hơn.", tip: "Tổng các điện áp rơi phải bằng điện áp nguồn, dùng để tự kiểm tra." },
            { title: "Song song chia dòng", body: "Hai điện trở 6 Ω và 3 Ω song song cho điện trở tương đương 6·3/(6+3) = 2 Ω. Với nguồn 12 V, dòng tổng là 6 A, trong đó nhánh 3 Ω nhận 4 A và nhánh 6 Ω nhận 2 A. Nhánh có trở nhỏ luôn nhận dòng lớn hơn.", tip: "Chỉ dùng công thức tích chia tổng khi mạch chỉ có đúng hai điện trở song song." },
            { title: "Rút gọn mạch hỗn hợp", body: "Với mạch gồm 4 Ω nối tiếp với cụm 6 Ω song song 3 Ω, rút gọn cụm song song trước được 2 Ω, cộng với 4 Ω thành 6 Ω. Dòng tổng từ nguồn 12 V là 2 A, rồi tách ngược lại để tìm dòng từng nhánh. Thứ tự rút gọn luôn đi từ nhánh trong cùng ra ngoài.", tip: "Vẽ lại mạch sau mỗi bước rút gọn để tránh nhầm nhánh." }
          ],
          formula: "R_nt = R₁ + R₂ ; 1/R_ss = 1/R₁ + 1/R₂"
        },
        {
          id: "dl3",
          title: "Kirchhoff KCL và KVL",
          minutes: 24,
          level: "Nâng cao",
          summary: "Lập hệ phương trình cho mạch nhiều nhánh bằng hai định luật bảo toàn.",
          points: ["KCL: tổng dòng vào một nút bằng tổng dòng ra.", "KVL: tổng điện áp trên một vòng kín bằng 0.", "Cần đủ phương trình độc lập mới giải được mạch."],
          steps: [
            { title: "Định luật dòng tại nút", body: "Tại một nút có hai nhánh vào 3 A và 2 A thì nhánh ra phải là 5 A. KCL chỉ là định luật bảo toàn điện tích, không có gì mới ngoài việc điện tích không tự sinh ra. Với mạch có n nút, chỉ lập được n − 1 phương trình KCL độc lập.", tip: "Chọn chiều dòng giả định trước, kết quả âm chỉ là chiều ngược lại." },
            { title: "Định luật áp trên vòng", body: "Đi một vòng kín, cộng đại số các điện áp rơi và sức điện động phải bằng 0. Với nguồn 12 V và hai điện trở 4 Ω, 2 Ω, ta có 12 = I·4 + I·2 nên I = 2 A. Quy ước dấu phải giữ thống nhất trong suốt bài làm.", tip: "Đánh dấu chiều đi vòng bằng mũi tên cong trên sơ đồ." },
            { title: "Giải hệ phương trình", body: "Mạch hai nguồn cần lập hệ hai ẩn dòng nhánh, giải bằng thế hoặc cộng đại số. Kiểm tra kết quả bằng cách thay lại vào một phương trình chưa dùng khi giải. Nếu số dòng âm, giữ nguyên dấu và giải thích chiều thực tế ngược giả thiết.", tip: "Số phương trình cần lập bằng số ẩn dòng nhánh cần tìm." }
          ],
          formula: "ΣI_vào = ΣI_ra ; ΣU_vòng = 0"
        }
      ]
    },
    {
      title: "Linh kiện và mạch điện tử",
      summary: "Nhận diện linh kiện thụ động, đọc giá trị và hiểu hành vi của chúng trong mạch.",
      lessons: [
        {
          id: "lk1",
          title: "Điện trở và mã vạch màu",
          minutes: 18,
          level: "Cơ bản",
          summary: "Đọc đúng bốn vạch màu và chọn điện trở theo giá trị cùng công suất.",
          points: ["Hai vạch đầu là chữ số, vạch ba là số mũ mười.", "Vạch bốn là sai số, thường vàng kim 5%.", "Giá trị thực nằm trong khoảng sai số cho phép."],
          steps: [
            { title: "Đọc bốn vạch", body: "Điện trở nâu, đen, đỏ, vàng kim có giá trị 1, 0 nhân 10² tức 1000 Ω hay 1 kΩ, sai số 5%. Vạch cuối luôn tách xa hơn ba vạch đầu, đó là cách xác định chiều đọc. Đọc ngược chiều sẽ ra một giá trị hoàn toàn khác.", tip: "Đặt vạch sai số về phía tay phải rồi đọc từ trái sang." },
            { title: "Sai số trong thực tế", body: "Điện trở 1 kΩ sai số 5% có giá trị thực từ 950 Ω đến 1050 Ω. Trong mạch chia áp, sai số này khiến điện áp ra lệch vài phần trăm, có thể chấp nhận với mạch tín hiệu nhưng không với mạch đo. Muốn chính xác hơn phải chọn loại 1% vạch nâu.", tip: "Sai số cộng dồn, nên mạch đo cần linh kiện chính xác ở mọi vị trí." },
            { title: "Chọn công suất định mức", body: "Điện trở 100 Ω mắc vào 12 V tiêu tán 1,44 W, vượt xa loại 1/4 W thường dùng. Phải chọn loại 2 W hoặc mắc nối tiếp nhiều điện trở để chia nhiệt. Nhiệt độ tăng còn làm giá trị điện trở trôi, ảnh hưởng đến kết quả đo.", tip: "Tính P = U²/R trước khi hàn, đừng chỉ nhìn giá trị ôm." }
          ],
          formula: "R = (10·a + b)·10^c ± sai số"
        },
        {
          id: "lk2",
          title: "Tụ điện và cuộn cảm",
          minutes: 22,
          level: "Trung bình",
          summary: "Hiểu hành vi nạp xả của tụ, cảm kháng của cuộn dây và ứng dụng lọc.",
          points: ["Tụ tích điện, đơn vị microfarad, chặn dòng một chiều.", "Cuộn cảm chống thay đổi dòng, đơn vị henry.", "Trở kháng phụ thuộc tần số ở cả hai linh kiện."],
          steps: [
            { title: "Tụ nạp và xả", body: "Tụ 1000 microfarad nạp qua điện trở 1 kΩ có hằng số thời gian 1 giây, sau khoảng 5 giây thì gần như nạp đầy. Khi nạp, dòng lớn lúc đầu rồi giảm dần; khi đầy, tụ không dẫn điện một chiều nữa. Đây là lý do tụ được dùng để lọc nguồn và giữ điện áp ổn định.", tip: "Hằng số thời gian τ = R·C, nhớ đổi microfarad ra farad." },
            { title: "Trở kháng của tụ", body: "Trở kháng của tụ là Zc = 1/(2πfC), nên tần số càng cao thì càng dễ đi qua. Với tụ 1 microfarad ở 50 Hz, trở kháng khoảng 3,2 kΩ; ở 5 kHz chỉ còn 32 Ω. Đặc tính này cho phép tụ tách tín hiệu xoay chiều khỏi thành phần một chiều.", tip: "Tụ cho xoay chiều qua, chặn một chiều, nhớ theo câu này." },
            { title: "Cuộn cảm và lọc", body: "Cuộn cảm có cảm kháng Zl = 2πfL, tăng theo tần số nên chặn tín hiệu cao tần. Kết hợp tụ và cuộn cảm tạo bộ lọc thông thấp hoặc thông cao đơn giản. Trong nguồn xung, cuộn cảm giữ dòng liên tục và giảm gợn áp.", tip: "Cuộn cảm ngược tính chất với tụ: càng cao tần càng cản mạnh." }
          ],
          formula: "Zc = 1/(2πfC) ; Zl = 2πfL ; τ = R·C"
        },
        {
          id: "lk3",
          title: "Điốt và mạch chỉnh lưu",
          minutes: 24,
          level: "Nâng cao",
          summary: "Dùng tính dẫn một chiều của điốt để biến đổi dòng xoay chiều thành một chiều.",
          points: ["Điốt dẫn khi phân cực thuận, chặn khi phân cực ngược.", "Sụt áp thuận khoảng 0,7 V với điốt silic.", "Cầu chỉnh lưu cho dạng sóng đủ hai bán kỳ."],
          steps: [
            { title: "Hai trạng thái của điốt", body: "Khi anốt cao hơn catốt khoảng 0,7 V, điốt silic dẫn và sụt áp gần như cố định. Khi phân cực ngược, điốt chặn dòng cho tới điện áp đánh thủng, thường vài trăm vôn. Vì vậy điốt vừa dùng để chỉnh lưu vừa dùng để bảo vệ cuộn dây khỏi xung ngược.", tip: "Vạch trắng trên thân điốt là phía catốt, chiều dẫn từ không vạch sang có vạch." },
            { title: "Chỉnh lưu nửa chu kỳ", body: "Một điốt nối tiếp tải sẽ chỉ cho bán kỳ dương đi qua, đầu ra là các xung dương cách nhau. Tần số gợn bằng tần số nguồn, với lưới 50 Hz là 50 xung mỗi giây. Dạng sóng này còn nhiều khoảng trống nên cần tụ lọc để làm phẳng.", tip: "Vẽ dạng sóng vào và ra cạnh nhau để thấy rõ phần bị cắt." },
            { title: "Cầu chỉnh lưu và lọc", body: "Bốn điốt mắc cầu cho cả hai bán kỳ đều thành dòng một chiều cùng chiều, tần số gợn tăng gấp đôi lên 100 Hz. Thêm tụ lọc 2200 microfarad giúp điện áp ra phẳng hơn, nhưng tải nặng sẽ làm gợn tăng. Chọn tụ theo dòng tải và độ gợn cho phép.", tip: "Điện áp ra của cầu chỉnh lưu xấp xỉ biên độ trừ hai lần 0,7 V." }
          ],
          formula: "U_ra ≈ U_đỉnh − 1,4 V (cầu chỉnh lưu)"
        }
      ]
    },
    {
      title: "Thiết kế mạch và an toàn điện",
      summary: "Từ mạch chia áp đến transistor và các biện pháp bảo vệ con người, thiết bị.",
      lessons: [
        {
          id: "tk1",
          title: "Chia áp và chia dòng",
          minutes: 20,
          level: "Trung bình",
          summary: "Thiết kế mạch chia áp đúng tải và tránh sai lầm khi cấp nguồn cho cảm biến.",
          points: ["Chia áp: U_ra = U·R₂/(R₁ + R₂).", "Tải mắc vào phải có trở lớn hơn nhiều cầu chia.", "Chia dòng tỉ lệ nghịch với điện trở nhánh."],
          steps: [
            { title: "Công thức chia áp", body: "Hai điện trở 10 kΩ và 4,7 kΩ nối tiếp từ nguồn 5 V cho điện áp ra trên 4,7 kΩ khoảng 1,6 V. Công thức U_ra = U·R₂/(R₁ + R₂) chỉ đúng khi không có tải rút dòng ở điểm giữa. Đây là cách tạo điện áp tham chiếu rẻ tiền trong mạch cảm biến.", tip: "Kiểm tra lại bằng cách tính dòng rồi nhân với R₂." },
            { title: "Ảnh hưởng của tải", body: "Nếu mắc tải 1 kΩ vào điểm giữa, điện trở tương đương giảm mạnh và điện áp ra tụt còn khoảng 0,8 V. Quy tắc thực hành là dòng qua cầu chia phải lớn hơn ít nhất 10 lần dòng tải. Nếu không đạt, phải dùng mạch đệm hoặc giảm giá trị điện trở trong cầu.", tip: "Cầu chia áp không phải nguồn cấp, đừng dùng để nuôi động cơ hay đèn." },
            { title: "Chia dòng trong nhánh song song", body: "Hai nhánh 2 Ω và 6 Ω song song nhận dòng theo tỉ lệ 3 : 1, nhánh 2 Ω nhận 75% dòng tổng. Công thức chia dòng I₁ = I·R₂/(R₁ + R₂) chỉ áp dụng cho hai nhánh. Kiểm tra bằng cách tính điện áp chung rồi chia cho từng điện trở.", tip: "Nhánh trở nhỏ nhận dòng lớn, đây là bản chất của chia dòng." }
          ],
          formula: "U_ra = U·R₂/(R₁ + R₂) ; I₁ = I·R₂/(R₁ + R₂)"
        },
        {
          id: "tk2",
          title: "Transistor khuếch đại",
          minutes: 26,
          level: "Nâng cao",
          summary: "Phân cực transistor lưỡng cực và tính điểm làm việc cho mạch khuếch đại.",
          points: ["Dòng cực góp gấp beta lần dòng cực gốc.", "Transistor cần được phân cực ở vùng tích cực.", "Hệ số khuếch đại phụ thuộc điện trở tải."],
          steps: [
            { title: "Ba chân và hai mối nối", body: "Transistor NPN dẫn khi điện áp cực gốc cao hơn cực phát khoảng 0,7 V. Dòng cực góp Ic xấp xỉ beta lần dòng cực gốc Ib, với beta điển hình 100 đến 300. Chỉ một dòng nhỏ điều khiển được dòng lớn hơn nhiều lần, đó là bản chất của khuếch đại.", tip: "Nhớ chiều mũi tên ở cực phát chỉ chiều dòng ra với NPN." },
            { title: "Tính điểm làm việc", body: "Với nguồn 12 V, điện trở cực góp 1 kΩ và dòng cực gốc 20 microampe, beta 150 cho Ic = 3 mA, nên điện áp cực góp khoảng 9 V. Điểm làm việc phải nằm giữa dải nguồn để tín hiệu có chỗ dao động cả hai chiều. Đặt quá gần nguồn hoặc quá gần mass đều làm méo tín hiệu.", tip: "Mục tiêu là U_CE xấp xỉ nửa nguồn khi tín hiệu vào bằng 0." },
            { title: "Vùng bão hòa và ngắt", body: "Nếu dòng cực gốc tăng mạnh, transistor chuyển sang bão hòa, điện áp cực góp chỉ còn khoảng 0,2 V. Chế độ này hữu ích khi dùng transistor như công tắc điều khiển rơ le hoặc đèn. Ngược lại khi không có dòng gốc, transistor ngắt hoàn toàn và không dẫn.", tip: "Khi làm công tắc, luôn thêm điện trở hạn dòng cho cực gốc." }
          ],
          formula: "Ic = β·Ib ; U_CE = U_CC − Ic·R_C"
        },
        {
          id: "tk3",
          title: "An toàn điện và bảo vệ",
          minutes: 18,
          level: "Cơ bản",
          summary: "Chọn cầu chì, aptomat và biện pháp nối đất để bảo vệ người và thiết bị.",
          points: ["Cầu chì bảo vệ quá tải và ngắn mạch.", "Aptomat có thể đóng lại, cầu chì phải thay.", "Nối đất và chống dòng rò bảo vệ con người."],
          steps: [
            { title: "Chọn thiết bị bảo vệ", body: "Một ổ cắm cấp cho phụ tải 2 kW ở 220 V rút dòng khoảng 9,1 A, nên chọn aptomat 16 A. Dây dẫn phải chịu được dòng này, thường dùng dây 2,5 mm² cho mạch ổ cắm. Chọn thiết bị bảo vệ lớn hơn dây dẫn sẽ khiến dây nóng chảy trước khi aptomat cắt.", tip: "Aptomat bảo vệ dây, không bảo vệ thiết bị, nên chọn theo tiết diện dây." },
            { title: "Chống dòng rò", body: "Thiết bị chống dòng rò so sánh dòng đi và dòng về, nếu lệch quá 30 mA thì cắt trong vài chục mili giây. Đây là mức đủ nhanh để cứu người khỏi điện giật, trong khi aptomat thường không phát hiện dòng rò nhỏ. Cần kiểm tra định kỳ bằng nút test trên thiết bị.", tip: "Dòng 30 mA là ngưỡng bảo vệ người phổ biến trong nhà ở." },
            { title: "Thói quen an toàn", body: "Trước khi sửa mạch, hãy cắt nguồn, khóa tủ điện và đo lại để chắc chắn không còn điện. Tụ trong nguồn xung có thể giữ điện áp nguy hiểm vài phút sau khi rút phích, nên cần xả qua điện trở. Không bao giờ thay cầu chì bằng dây đồng, đó là nguyên nhân cháy nổ phổ biến.", tip: "Quy tắc: cắt, khóa, đo, rồi mới chạm vào mạch." }
          ],
          formula: "I = P/U ; chọn aptomat theo dòng lớn hơn dòng tải và nhỏ hơn dòng chịu của dây"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Định luật Ohm", back: "I = U/R, dòng điện tỉ lệ thuận với điện áp và tỉ lệ nghịch với điện trở.", hint: "Ba đại lượng, một quan hệ.", example: "12 V trên 4 Ω cho dòng 3 A." },
    { front: "Công suất điện", back: "P = U·I = I²·R = U²/R, công suất tiêu tán trên linh kiện.", hint: "Áp nhân dòng.", example: "12 V và 3 A cho công suất 36 W." },
    { front: "Điện trở nối tiếp", back: "R tương đương bằng tổng các điện trở và dòng qua mọi phần tử như nhau.", hint: "Cộng trực tiếp.", example: "4 Ω nối tiếp 6 Ω thành 10 Ω." },
    { front: "Điện trở song song", back: "Nghịch đảo điện trở tương đương bằng tổng nghịch đảo; hai nhánh dùng tích chia tổng.", hint: "Nhỏ hơn điện trở nhỏ nhất.", example: "6 Ω song song 3 Ω cho 2 Ω." },
    { front: "Định luật dòng Kirchhoff", back: "Tổng dòng đi vào một nút bằng tổng dòng đi ra khỏi nút.", hint: "Bảo toàn điện tích tại nút.", example: "3 A và 2 A vào nút thì nhánh ra 5 A." },
    { front: "Định luật áp Kirchhoff", back: "Tổng đại số các điện áp trên một vòng kín bằng 0.", hint: "Đi một vòng khép kín.", example: "12 V = I·4 Ω + I·2 Ω cho I = 2 A." },
    { front: "Mã màu điện trở bốn vạch", back: "Hai vạch chữ số, một vạch số mũ, vạch cuối là sai số.", hint: "Đọc từ phía đối diện vạch sai số.", example: "Nâu đen đỏ kim là 1 kΩ sai số 5%." },
    { front: "Tụ điện", back: "Linh kiện tích điện, chặn dòng một chiều và cho xoay chiều đi qua tùy tần số.", hint: "Trở kháng giảm khi tần số tăng.", example: "Tụ lọc 2200 microfarad làm phẳng điện áp nguồn." },
    { front: "Cuộn cảm", back: "Linh kiện chống thay đổi dòng điện, cảm kháng tăng theo tần số.", hint: "Càng cao tần càng cản.", example: "Zl = 2πfL, dùng trong bộ lọc nguồn xung." },
    { front: "Điốt silic", back: "Dẫn một chiều khi phân cực thuận với sụt áp khoảng 0,7 V, chặn chiều ngược.", hint: "Van một chiều.", example: "Bốn điốt mắc cầu chỉnh lưu dòng xoay chiều." },
    { front: "Mạch chia áp", back: "U_ra = U·R₂/(R₁ + R₂) khi không có tải rút dòng tại điểm giữa.", hint: "Tỉ lệ với điện trở dưới.", example: "5 V qua 10 kΩ và 4,7 kΩ cho khoảng 1,6 V." },
    { front: "Chống dòng rò", back: "Thiết bị so sánh dòng vào và ra, cắt mạch khi lệch khoảng 30 mA.", hint: "Bảo vệ người, không chỉ bảo vệ dây.", example: "RCD trong nhà ở cắt điện khi có rò xuống đất." }
  ],
  quiz: [
    { q: "Một điện trở 8 Ω mắc vào nguồn 24 V. Dòng điện qua nó là:", options: ["0,33 A", "192 A", "16 A", "3 A"], answer: 3, explain: "I = U/R = 24/8 = 3 A." },
    { q: "Hai điện trở 6 Ω và 3 Ω mắc song song có điện trở tương đương:", options: ["9 Ω", "2 Ω", "4,5 Ω", "18 Ω"], answer: 1, explain: "R = (6·3)/(6+3) = 2 Ω, nhỏ hơn cả hai điện trở thành phần." },
    { q: "Công suất tiêu tán của điện trở 4 Ω khi dòng qua là 3 A bằng:", options: ["36 W", "12 W", "7 W", "1,3 W"], answer: 0, explain: "P = I²·R = 9·4 = 36 W." },
    { q: "Ampe kế phải được mắc:", options: ["Song song với linh kiện", "Song song với nguồn", "Nối tiếp trong nhánh cần đo", "Không cần phân biệt"], answer: 2, explain: "Ampe kế đo dòng nên mắc nối tiếp; mắc song song với nguồn gây đoản mạch." },
    { q: "Điện trở có vạch nâu, đen, đỏ, vàng kim có giá trị:", options: ["10 Ω sai số 5%", "100 Ω sai số 5%", "10 kΩ sai số 5%", "1 kΩ sai số 5%"], answer: 3, explain: "1 và 0 nhân 10² cho 1000 Ω, vạch vàng kim là sai số 5%." },
    { q: "Trong mạch chia áp không tải, điện áp ra trên R₂ bằng:", options: ["U·R₂/(R₁ + R₂)", "U·R₁/(R₁ + R₂)", "U·(R₁ + R₂)/R₂", "U/R₂"], answer: 0, explain: "Điện áp rơi tỉ lệ với điện trở của chính nó trên tổng trở." },
    { q: "Điốt silic phân cực thuận có sụt áp khoảng:", options: ["0,2 V", "0,7 V", "5 V", "12 V"], answer: 1, explain: "Với điốt silic, sụt áp thuận điển hình khoảng 0,7 V; điốt germani thấp hơn." },
    { q: "Tăng tần số tín hiệu thì trở kháng của tụ điện:", options: ["Tăng", "Không đổi", "Giảm", "Bằng 0 ở mọi tần số"], answer: 2, explain: "Zc = 1/(2πfC), tần số tăng làm trở kháng giảm." },
    { q: "Thiết bị chống dòng rò trong nhà ở thường cắt ở mức:", options: ["3 A", "30 mA", "300 mA", "30 A"], answer: 1, explain: "Ngưỡng 30 mA đủ nhanh để bảo vệ người khỏi điện giật." },
    { q: "Với transistor NPN đang ở vùng tích cực, dòng cực góp xấp xỉ:", options: ["β lần dòng cực gốc", "Bằng dòng cực gốc", "Bằng 0", "Không phụ thuộc dòng cực gốc"], answer: 0, explain: "Ic = β·Ib, hệ số beta điển hình từ 100 đến 300." }
  ],
  lab: {
    kind: "diagram",
    title: "Mạch một chiều có đèn và hai điện trở",
    lead: "Chạm vào từng linh kiện để xem vai trò trong mạch, rồi bật tắt lớp dụng cụ đo để thấy cách mắc vôn kế và ampe kế đúng chuẩn. Dây dẫn được vẽ thành các đoạn nối giữa linh kiện.",
    stageLabel: "Sơ đồ tương tác",
    controlNote: "Nguồn 12 V cấp cho nhánh gồm cầu chì, công tắc và đèn, song song với nhánh hai điện trở. Vôn kế mắc song song, ampe kế mắc nối tiếp.",
    note: "Sơ đồ dùng lại được cho bài tính dòng tổng, kiểm tra KCL tại nút và giải thích vai trò của cầu chì.",
    viewBox: "0 0 600 380",
    pickHint: "Chọn một linh kiện trên sơ đồ",
    layers: [
      { id: "main", label: "Mạch chính" },
      { id: "meter", label: "Dụng cụ đo" }
    ],
    shapes: [
      { type: "rect", x: 52, y: 128, w: 64, h: 124, rx: 10, label: "Nguồn", layer: "main",
        info: { title: "Nguồn một chiều 12 V", desc: "Cấp điện áp 12 V cho toàn mạch, cực dương nối lên thanh trên và cực âm xuống thanh dưới. Dòng tổng phụ thuộc điện trở tương đương của cả hai nhánh.", tags: ["12 V", "Một chiều", "Cực tính"] } },
      { type: "rect", x: 186, y: 104, w: 76, h: 48, label: "Cầu chì", layer: "main",
        info: { title: "Cầu chì bảo vệ", desc: "Mắc nối tiếp ngay sau nguồn, chảy khi dòng vượt định mức để ngắt mạch trước khi dây dẫn bị hỏng. Với phụ tải nhỏ trong bài này dùng loại 1 A.", tags: ["Bảo vệ", "Nối tiếp", "Định mức dòng"] } },
      { type: "rect", x: 296, y: 104, w: 84, h: 48, label: "Công tắc", layer: "main",
        info: { title: "Công tắc K", desc: "Đóng để nối mạch nhánh đèn, mở để ngắt nhánh này mà nhánh điện trở vẫn hoạt động. Công tắc luôn đặt ở dây pha hoặc cực dương để an toàn khi sửa chữa.", tags: ["Đóng mở", "Cực dương", "An toàn"] } },
      { type: "circle", cx: 498, cy: 190, r: 40, label: "Đèn", layer: "main",
        info: { title: "Bóng đèn 12 V", desc: "Tải của nhánh trên, tiêu thụ công suất theo P = U²/R. Khi công tắc mở, đèn tắt và dòng nhánh này bằng 0 nhưng điện áp nguồn vẫn còn.", tags: ["Tải", "Công suất", "12 V"] } },
      { type: "rect", x: 176, y: 228, w: 88, h: 48, label: "R1", layer: "main",
        info: { title: "Điện trở R1", desc: "Điện trở thứ nhất của nhánh dưới, mắc nối tiếp với R2. Giá trị lớn hơn sẽ nhận điện áp rơi lớn hơn khi cùng dòng đi qua.", tags: ["Nối tiếp", "Chia áp", "Ohm"] } },
      { type: "rect", x: 296, y: 228, w: 88, h: 48, label: "R2", layer: "main",
        info: { title: "Điện trở R2", desc: "Điện trở thứ hai của nhánh dưới, cùng R1 tạo thành mạch chia áp. Tổng hai điện trở quyết định dòng của cả nhánh theo định luật Ohm.", tags: ["Nối tiếp", "Tổng trở", "Chia áp"] } },
      { type: "circle", cx: 430, cy: 252, r: 26, label: "A", layer: "meter",
        info: { title: "Ampe kế", desc: "Mắc nối tiếp vào nhánh cần đo để đọc dòng điện. Điện trở của ampe kế rất nhỏ, nếu mắc song song với nguồn sẽ tạo đoản mạch.", tags: ["Nối tiếp", "Đo dòng", "Trở nhỏ"] } },
      { type: "circle", cx: 146, cy: 190, r: 24, label: "V", layer: "meter",
        info: { title: "Vôn kế", desc: "Mắc song song với đoạn mạch cần đo, điện trở rất lớn để không rút dòng đáng kể. Trong sơ đồ, vôn kế đo điện áp giữa hai thanh dẫn của nguồn.", tags: ["Song song", "Đo áp", "Trở lớn"] } }
    ],
    links: [
      { x1: 84, y1: 128, x2: 186, y2: 128 },
      { x1: 262, y1: 128, x2: 296, y2: 128 },
      { x1: 380, y1: 128, x2: 498, y2: 128, label: "I" },
      { x1: 498, y1: 128, x2: 498, y2: 150 },
      { x1: 498, y1: 230, x2: 498, y2: 252 },
      { x1: 456, y1: 252, x2: 498, y2: 252 },
      { x1: 384, y1: 252, x2: 404, y2: 252 },
      { x1: 264, y1: 252, x2: 296, y2: 252 },
      { x1: 176, y1: 252, x2: 84, y2: 252 },
      { x1: 146, y1: 166, x2: 146, y2: 128, dash: true },
      { x1: 146, y1: 214, x2: 146, y2: 252, dash: true }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Đức Anh", progress: 76, score: 8.3, status: "Tốt", note: "Tính mạch hỗn hợp chắc, cần luyện thêm transistor." },
      { name: "Trần Thu Trang", progress: 60, score: 7.3, status: "Đang học", note: "Hay nhầm cách mắc ampe kế và vôn kế." },
      { name: "Lê Hoàng Phúc", progress: 88, score: 8.9, status: "Tốt", note: "Đọc mã màu nhanh và chính xác." },
      { name: "Phạm Gia Hân", progress: 34, score: 5.4, status: "Cần hỗ trợ", note: "Chưa nộp bài tập Kirchhoff." },
      { name: "Vũ Minh Khoa", progress: 63, score: 7.5, status: "Đang học", note: "Tiến bộ ở phần chỉnh lưu, cần thêm bài tụ lọc." },
      { name: "Đỗ Thanh Vân", progress: 49, score: 6.6, status: "Đang học", note: "Sai đơn vị khi đổi microfarad sang farad." }
    ],
    submissions: [
      { student: "Lê Hoàng Phúc", lesson: "Bài tính dòng trong mạch hỗn hợp", time: "Hôm qua 20:35", status: "Chờ chấm" },
      { student: "Phạm Gia Hân", lesson: "Phiếu đọc mã màu điện trở", time: "Hôm qua 17:50", status: "Chờ chấm" },
      { student: "Nguyễn Đức Anh", lesson: "Bài phân cực transistor", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thực hành tới tại phòng thí nghiệm điện, mặc áo dài tay và mang kính bảo hộ.",
      "Bài kiểm tra giữa kỳ gồm đọc sơ đồ, tính mạch và một câu về an toàn điện.",
      "Sinh viên cần hoàn thành bài an toàn điện trước khi được cấp nguồn thực hành."
    ]
  },
  className: "Kỹ thuật điện – điện tử – K25",
  brief: "BTL-27_circuitpro-mon-ky-thuat-dien-dien-tu.md"
};
