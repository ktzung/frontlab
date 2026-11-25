window.BTL_DATA = {
  id: "physicssim",
  code: "BTL-04",
  name: "PhysicsSim",
  monogram: "F",
  subject: "Vật lý đại cương",
  level: "Đại học",
  group: "Toán & Khoa học tự nhiên",
  accent: "#0284c7",
  accent2: "#6366f1",
  font: "display",
  tagline: "Chạy thí nghiệm ảo ném xiên, sóng và mạch điện với số liệu cập nhật theo từng khung hình.",
  intro: "PhysicsSim đưa phòng thí nghiệm vật lý lên trình duyệt: chọn góc bắn, tốc độ và trọng trường để xem quỹ đạo cùng tầm xa, độ cao cực đại, thời gian bay. Mỗi bài học đều gắn với một phép đo cụ thể để sinh viên đối chiếu lý thuyết với số liệu thực nghiệm.",
  hero: { title: "Vật lý đại cương", highlight: "thí nghiệm chạy bằng thanh trượt" },
  heroBadge: "Ném xiên · Sóng · Mạch điện",
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
  featureLead: "Ba cách học đặc thù cho Vật lý: chạy mô phỏng để lấy số liệu, dựng biểu đồ lực bằng cách kéo thả và luyện công thức bằng thẻ ghi nhớ.",
  pathLead: "Bắt đầu từ động học, sang động lực học và các định luật bảo toàn, rồi kết thúc ở dao động, sóng và mạch điện. Mỗi chương đều có bài đo để so lý thuyết với mô phỏng.",
  features: [
    { badge: "01", title: "Mô phỏng chuyển động", desc: "Đổi góc bắn, tốc độ và trọng trường, quỹ đạo parabol vẽ lại ngay kèm tầm xa, độ cao đỉnh và thời gian bay để so sánh với công thức." },
    { badge: "02", title: "Biểu đồ lực kéo thả", desc: "Kéo các vector trọng lực, phản lực, ma sát và lực kéo lên vật, hệ thống kiểm tra phương chiều rồi cho điểm theo định luật Newton." },
    { badge: "03", title: "Thẻ công thức và quiz", desc: "Mười hai thẻ tóm tắt công thức từ ném xiên tới định luật Ohm, kèm trắc nghiệm tính toán chấm ngay và giải thích từng bước." }
  ],
  life: [
    {
      title: "Đồng hồ công tơ mét trên đường về quê",
      scene: "Chạy xe máy từ phòng trọ về quê, đoạn đầu đường thoáng nên giữ đều tay ga, tới đoạn sửa đường thì chậm lại rồi dừng ăn cơm. Nhìn lại hành trình, chặng nào chạy nhanh thì kim đồng hồ nhích nhiều hơn.",
      connect: "Ghi tốc độ theo từng phút rồi cộng lại chính là diện tích dưới đồ thị vận tốc, cho ra quãng đường; còn độ dốc của đồ thị tọa độ cho biết đang chạy nhanh hay chậm."
    },
    {
      title: "Hai xe đẩy hàng đụng nhau trong siêu thị",
      scene: "Trong siêu thị, một xe đẩy đầy hàng lao vào xe đẩy rỗng đang đứng yên, hai xe dính vào nhau và cùng trôi chậm về phía trước. Xe chở càng nặng thì sau va chạm cả hai càng trôi chậm.",
      connect: "Tổng khối lượng nhân vận tốc trước và sau va chạm bằng nhau, đó là bảo toàn động lượng; dính vào nhau là va chạm mềm, một phần động năng biến thành nhiệt và tiếng động."
    },
    {
      title: "Chiếc võng trước hiên nhà",
      scene: "Sợi dây võng mắc giữa hai cột hiên, ngồi lên đung đưa thì mỗi lần qua lại mất khoảng một giây, đưa mạnh hay nhẹ đều gần như vậy. Chỉ khi đưa quá mạnh mới thấy nhịp lệch đi rõ.",
      connect: "Đung đưa qua lại đều đặn là dao động tuần hoàn; với biên độ nhỏ, chu kỳ gần như không đổi, còn ly độ, vận tốc và gia tốc lệch pha nhau theo từng đoạn của một vòng."
    }
  ],
  modules: [
    {
      title: "Động học chất điểm",
      summary: "Mô tả chuyển động bằng vận tốc, gia tốc, đồ thị và phân tích chuyển động ném xiên theo hai trục.",
      lessons: [
        {
          id: "cd1",
          title: "Vận tốc, gia tốc và đồ thị chuyển động",
          minutes: 18,
          level: "Cơ bản",
          summary: "Đọc vận tốc từ độ dốc đồ thị tọa độ và đọc quãng đường từ diện tích dưới đồ thị vận tốc.",
          points: ["Độ dốc của đồ thị x(t) cho vận tốc tức thời.", "Diện tích dưới đồ thị v(t) cho độ dời.", "Gia tốc không đổi thì v(t) là đường thẳng."],
          steps: [
            { title: "Đọc đồ thị tọa độ", body: "Một xe chuyển động thẳng có x(t) = 2 + 4t − 0,5t². Tại t = 0 vận tốc là 4 m/s, tại t = 2 vận tốc là 4 − 2 = 2 m/s. Độ dốc của tiếp tuyến tại mỗi điểm chính là vận tốc tức thời tại thời điểm đó.", tip: "Chọn hai điểm gần nhau để ước lượng độ dốc bằng thương số Δx/Δt." },
            { title: "Diện tích dưới đồ thị vận tốc", body: "Nếu vận tốc tăng đều từ 0 đến 10 m/s trong 5 giây, đồ thị là tam giác có diện tích ½·5·10 = 25 m. Đây chính là quãng đường đi được. Với đồ thị phức tạp, chia thành các hình thang để tính gần đúng.", tip: "Vẽ trục và chia hình trước khi tính, tránh nhầm đơn vị thời gian." },
            { title: "Chuyển động biến đổi đều", body: "Ba công thức cần nhớ là v = v0 + at, s = v0t + ½at², và v² − v0² = 2as. Công thức thứ ba hữu ích khi đề không cho thời gian, ví dụ xe hãm từ 20 m/s với gia tốc −4 m/s² thì quãng đường hãm là 400/8 = 50 m.", tip: "Ghi rõ chiều dương trước khi gán dấu cho vận tốc và gia tốc." }
          ],
          formula: "v = v0 + a·t ; s = v0·t + ½a·t² ; v² − v0² = 2a·s"
        },
        {
          id: "cd2",
          title: "Ném xiên: tách chuyển động thành hai trục",
          minutes: 24,
          level: "Trung bình",
          summary: "Phân tích chuyển động ném xiên thành chuyển động đều theo phương ngang và rơi tự do theo phương thẳng đứng.",
          points: ["Phương ngang không có gia tốc nên vận tốc không đổi.", "Phương thẳng đứng có gia tốc trọng trường hướng xuống.", "Tầm xa lớn nhất khi góc bắn 45 độ với mặt đất phẳng."],
          steps: [
            { title: "Viết hai phương trình độc lập", body: "Với v0 = 40 m/s, góc 45 độ và g = 9,8 m/s², ta có vx = 28,3 m/s và vy = 28,3 m/s. Phương trình là x = 28,3t và y = 28,3t − 4,9t². Hai phương trình chỉ liên hệ qua biến thời gian t, nhờ vậy bài toán tách thành hai bài một chiều.", tip: "Luôn chiếu vector vận tốc ban đầu ra hai trục trước khi viết phương trình." },
            { title: "Tính thời gian bay và tầm xa", body: "Vật chạm đất khi y = 0, cho t = 2vy/g = 5,77 s. Tầm xa là x = vx·t, xấp xỉ 163 m. Thời gian bay chỉ phụ thuộc thành phần thẳng đứng, còn tầm xa phụ thuộc cả hai thành phần.", tip: "Kiểm tra bằng công thức gộp R = v0²·sin(2α)/g, hai cách phải cho cùng kết quả." },
            { title: "Độ cao cực đại và đối xứng", body: "Độ cao cực đại đạt khi vy = 0, tức t = vy/g, cho h = vy²/(2g) khoảng 41 m. Quỹ đạo là parabol đối xứng qua đỉnh, thời gian lên bằng thời gian xuống khi điểm ném và điểm rơi cùng độ cao. Trong phòng lab, đổi góc bắn để thấy tầm xa đạt cực đại ở 45 độ.", tip: "Với hai góc bù nhau như 30 và 60 độ, tầm xa bằng nhau nhưng độ cao khác nhau." }
          ],
          formula: "R = v0²·sin(2α)/g ; H = v0²·sin²α/(2g) ; t(bay) = 2v0·sinα/g"
        },
        {
          id: "cd3",
          title: "Chuyển động tròn đều",
          minutes: 20,
          level: "Trung bình",
          summary: "Hiểu tốc độ góc, chu kỳ và gia tốc hướng tâm dù độ lớn vận tốc không đổi.",
          points: ["Vận tốc có độ lớn không đổi nhưng luôn đổi hướng.", "Gia tốc hướng tâm có độ lớn v²/r, hướng vào tâm.", "Chu kỳ T = 2πr/v."],
          steps: [
            { title: "Vì sao vẫn có gia tốc", body: "Một điểm trên vành bánh xe bán kính 0,3 m quay 2 vòng mỗi giây có tốc độ v = 2πr/T = 2π·0,3/0,5, xấp xỉ 3,77 m/s. Độ lớn vận tốc không đổi nhưng hướng thay đổi liên tục nên vẫn có gia tốc, gọi là gia tốc hướng tâm.", tip: "Vẽ hai vector vận tốc ở hai thời điểm gần nhau để thấy hiệu của chúng hướng vào tâm." },
            { title: "Tính gia tốc hướng tâm", body: "Với ví dụ trên, a = v²/r = 14,2/0,3, xấp xỉ 47,4 m/s², lớn hơn gia tốc trọng trường gần 5 lần. Gia tốc này do lực căng, lực ma sát hoặc lực hấp dẫn đóng vai trò lực hướng tâm, tùy bài toán cụ thể.", tip: "Xác định lực nào đóng vai trò hướng tâm trước khi viết phương trình Newton." },
            { title: "Liên hệ với chuyển động quay", body: "Tốc độ góc ω = 2π/T, đơn vị radian trên giây. Với T = 0,5 s thì ω xấp xỉ 12,6 rad/s và v = ωr. Các đại lượng này dùng lại khi học dao động điều hòa, nơi tần số góc quyết định chu kỳ con lắc.", tip: "Đổi vòng/phút sang radian/giây bằng cách nhân 2π rồi chia 60." }
          ],
          formula: "v = ω·r ; a(ht) = v²/r = ω²·r ; T = 2π/ω"
        }
      ]
    },
    {
      title: "Động lực học và các định luật bảo toàn",
      summary: "Áp dụng ba định luật Newton, định lý công – năng lượng và bảo toàn động lượng cho bài toán thực tế.",
      lessons: [
        {
          id: "dl1",
          title: "Ba định luật Newton và biểu đồ lực",
          minutes: 22,
          level: "Cơ bản",
          summary: "Dựng biểu đồ lực đầy đủ và viết phương trình chuyển động theo từng trục.",
          points: ["Vật không chịu lực hoặc hợp lực bằng 0 thì giữ nguyên trạng thái chuyển động.", "F = ma xét theo từng trục tọa độ.", "Phản lực và trọng lực là hai lực trực đối nhưng đặt vào hai vật khác nhau."],
          steps: [
            { title: "Liệt kê đủ các lực", body: "Một thùng 20 kg bị kéo trên sàn ngang bằng lực 80 N hợp với phương ngang góc 30 độ. Các lực gồm trọng lực 200 N hướng xuống, phản lực của sàn hướng lên, lực kéo và lực ma sát ngược chiều chuyển động. Thiếu một lực là sai toàn bộ phương trình.", tip: "Vẽ vật tách riêng, khoanh vùng và đánh dấu từng lực trước khi chiếu trục." },
            { title: "Chiếu lên hai trục", body: "Theo phương thẳng đứng, vật không rời sàn nên N + 80·sin30 = 200, suy ra N = 160 N. Theo phương ngang, hợp lực là 80·cos30 − ma sát, xấp xỉ 69,3 − ma sát. Gia tốc tìm được bằng cách chia hợp lực cho khối lượng.", tip: "Chọn chiều dương theo chiều chuyển động để giảm số dấu âm." },
            { title: "Ma sát và điều kiện cân bằng", body: "Lực ma sát trượt bằng μN. Với μ = 0,3 và N = 160 N, ma sát là 48 N, gia tốc xấp xỉ (69,3 − 48)/20 = 1,07 m/s². Nếu lực kéo nhỏ hơn ma sát nghỉ cực đại thì thùng vẫn đứng yên dù có lực tác dụng.", tip: "Phân biệt ma sát nghỉ với ma sát trượt, chỉ ma sát trượt dùng công thức μN." }
          ],
          formula: "ΣF = m·a ; F(ma sát trượt) = μ·N"
        },
        {
          id: "dl2",
          title: "Công, động năng và thế năng",
          minutes: 22,
          level: "Trung bình",
          summary: "Tính công của lực, áp dụng định lý động năng và bảo toàn cơ năng trong trường trọng lực.",
          points: ["Công bằng F·s·cosα, chỉ thành phần cùng phương độ dời mới sinh công.", "Độ biến thiên động năng bằng tổng công của các lực.", "Cơ năng bảo toàn khi chỉ có lực thế tác dụng."],
          steps: [
            { title: "Công có dấu", body: "Kéo một hộp đi 5 m bằng lực 40 N hợp với phương ngang 60 độ thì công là 40·5·cos60 = 100 J. Nếu lực vuông góc với độ dời, ví dụ phản lực khi vật trượt ngang, công bằng 0. Ma sát sinh công âm vì ngược chiều chuyển động.", tip: "Kiểm tra góc α là góc giữa lực và độ dời, không phải góc với mặt phẳng." },
            { title: "Định lý động năng", body: "Xe 1000 kg tăng tốc từ 10 m/s lên 20 m/s cần động năng tăng thêm 150 000 J. Đó cũng là tổng công của động cơ trừ công ma sát. Cách làm này tránh phải tính gia tốc và thời gian, rất hiệu quả với bài có quãng đường.", tip: "Khi đề cho vận tốc ở hai vị trí, nghĩ ngay tới định lý động năng." },
            { title: "Bảo toàn cơ năng", body: "Vật rơi tự do từ độ cao 5 m có vận tốc khi chạm đất là căn của 2·9,8·5, xấp xỉ 9,9 m/s. Cơ năng tại đỉnh là thế năng, tại đáy là động năng, tổng không đổi. Nếu có ma sát, phần cơ năng mất đi đúng bằng công của ma sát.", tip: "Chọn mốc thế năng tại vị trí thấp nhất để giảm số hạng." }
          ],
          formula: "A = F·s·cosα ; ΔW(đ) = ΣA ; W(đ) + W(t) = hằng số"
        },
        {
          id: "dl3",
          title: "Động lượng và bài toán va chạm",
          minutes: 24,
          level: "Nâng cao",
          summary: "Dùng bảo toàn động lượng cho hệ kín và phân biệt va chạm đàn hồi với va chạm mềm.",
          points: ["Động lượng là tích khối lượng và vận tốc, là đại lượng vector.", "Tổng động lượng của hệ kín được bảo toàn.", "Va chạm mềm giữ động lượng nhưng mất động năng."],
          steps: [
            { title: "Viết phương trình bảo toàn", body: "Xe 2 kg chuyển động 3 m/s va vào xe 4 kg đang đứng yên rồi dính vào nhau. Động lượng trước là 6 kg·m/s, sau va chạm hai xe cùng vận tốc nên 6 = 6·v, suy ra v = 1 m/s. Động lượng là vector nên phải xét dấu khi hai vật ngược chiều.", tip: "Chọn chiều dương và ghi vận tốc kèm dấu trước khi cộng." },
            { title: "Kiểm tra động năng", body: "Động năng trước va chạm là 9 J, sau va chạm là ½·6·1 = 3 J. Mất 6 J dưới dạng nhiệt và biến dạng, đúng với va chạm mềm. Trong va chạm đàn hồi lý tưởng, động năng được giữ nguyên và hai vật tách rời nhau.", tip: "Động lượng luôn bảo toàn trong hệ kín, còn động năng chỉ bảo toàn khi va chạm đàn hồi." },
            { title: "Va chạm đàn hồi trực diện", body: "Với hai vật khối lượng bằng nhau, va chạm đàn hồi trực diện sẽ trao đổi vận tốc: vật đang chuyển động dừng lại, vật đứng yên chuyển động với vận tốc cũ. Đây là mô hình của bi da và là cách kiểm tra nhanh kết quả tính toán.", tip: "Dùng hai phương trình bảo toàn động lượng và động năng cho va chạm đàn hồi." }
          ],
          formula: "p = m·v ; m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'"
        }
      ]
    },
    {
      title: "Dao động, sóng và mạch điện",
      summary: "Từ con lắc lò xo đến sóng cơ và định luật Ohm cho đoạn mạch có điện trở.",
      lessons: [
        {
          id: "da1",
          title: "Dao động điều hòa của con lắc lò xo",
          minutes: 22,
          level: "Trung bình",
          summary: "Viết phương trình dao động, tính chu kỳ và hiểu quan hệ giữa ly độ, vận tốc, gia tốc.",
          points: ["Chu kỳ T = 2π√(m/k), không phụ thuộc biên độ.", "Vận tốc sớm pha 90 độ so với ly độ.", "Gia tốc luôn hướng về vị trí cân bằng."],
          steps: [
            { title: "Tính chu kỳ và tần số góc", body: "Con lắc lò xo có m = 0,25 kg và k = 100 N/m có ω = √(k/m) = √400 = 20 rad/s, chu kỳ T = 2π/20 xấp xỉ 0,314 s. Tăng khối lượng lên bốn lần thì chu kỳ tăng gấp đôi, vì T tỉ lệ với căn bậc hai của m.", tip: "Kiểm tra thứ nguyên của k/m: N/m chia kg cho đơn vị 1/s²." },
            { title: "Quan hệ ly độ và vận tốc", body: "Với biên độ 5 cm và ω = 20 rad/s, vận tốc cực đại là 100 cm/s tại vị trí cân bằng, vận tốc bằng 0 tại biên. Hệ thức độc lập là v² = ω²(A² − x²), dùng khi đề không cho thời điểm cụ thể. Năng lượng dao động tỉ lệ với bình phương biên độ.", tip: "Nhớ vận tốc lớn nhất ở giữa và bằng 0 ở hai biên." },
            { title: "Năng lượng và tắt dần", body: "Cơ năng của con lắc là ½kA², với k = 100 N/m và A = 0,05 m cho 0,125 J. Năng lượng chuyển hóa qua lại giữa động năng và thế năng đàn hồi hai lần mỗi chu kỳ. Trong thực tế, ma sát làm biên độ giảm dần, tạo dao động tắt dần.", tip: "Đọc kỹ đề hỏi cơ năng toàn phần hay chỉ một thành phần." }
          ],
          formula: "ω = √(k/m) ; T = 2π√(m/k) ; v² = ω²(A² − x²)"
        },
        {
          id: "da2",
          title: "Sóng cơ, bước sóng và giao thoa",
          minutes: 20,
          level: "Trung bình",
          summary: "Liên hệ bước sóng, tần số và tốc độ truyền sóng, nhận biết điều kiện giao thoa tăng cường.",
          points: ["Bước sóng bằng tốc độ truyền chia tần số.", "Hai nguồn kết hợp cùng pha tạo vân giao thoa ổn định.", "Hiệu đường đi bằng số nguyên lần bước sóng cho cực đại."],
          steps: [
            { title: "Tính bước sóng", body: "Âm có tần số 170 Hz truyền trong không khí với tốc độ 340 m/s thì bước sóng là 2 m. Bước sóng là khoảng cách giữa hai điểm gần nhau nhất dao động cùng pha. Tần số tăng gấp đôi thì bước sóng giảm một nửa khi tốc độ truyền không đổi.", tip: "Kiểm tra đơn vị: m/s chia Hz cho mét." },
            { title: "Điều kiện giao thoa", body: "Hai nguồn cùng pha, điểm có hiệu đường đi bằng k·λ thì dao động cực đại, bằng (k + 0,5)·λ thì cực tiểu. Với λ = 2 cm, điểm cách hai nguồn 12 cm và 8 cm có hiệu 4 cm = 2λ nên là cực đại. Đây là cách giải nhanh bài đếm số vân.", tip: "Xác định hai nguồn cùng pha hay ngược pha trước khi dùng điều kiện." },
            { title: "Sóng dừng", body: "Dây hai đầu cố định có sóng dừng khi chiều dài bằng số nguyên lần nửa bước sóng. Dây dài 1 m, bước sóng 0,5 m cho 4 bụng sóng. Sóng dừng giải thích vì sao đàn guitar phát ra họa âm với tần số gấp bội tần số cơ bản.", tip: "Vẽ hình dây với các nút và bụng để đếm, tránh nhầm số bó sóng." }
          ],
          formula: "λ = v/f ; Δd = k·λ cho cực đại giao thoa"
        },
        {
          id: "da3",
          title: "Định luật Ohm cho đoạn mạch",
          minutes: 18,
          level: "Cơ bản",
          summary: "Tính cường độ dòng điện, hiệu điện thế và công suất trong mạch điện trở nối tiếp, song song.",
          points: ["Cường độ dòng điện bằng hiệu điện thế chia điện trở.", "Mắc nối tiếp thì điện trở tương đương bằng tổng.", "Mắc song song thì nghịch đảo điện trở tương đương bằng tổng nghịch đảo."],
          steps: [
            { title: "Áp dụng định luật Ohm", body: "Đoạn mạch có hiệu điện thế 20 V và điện trở 10 Ω thì cường độ dòng điện là 2 A. Công suất tiêu thụ là U·I = 40 W, cũng bằng I²R. Định luật Ohm chỉ đúng với điện trở thuần, không áp dụng trực tiếp cho diot hay bóng đèn dây tóc ở nhiệt độ thay đổi mạnh.", tip: "Ghi rõ đại lượng nào của toàn mạch, đại lượng nào của từng điện trở." },
            { title: "Mạch nối tiếp và song song", body: "Hai điện trở 4 Ω và 6 Ω mắc nối tiếp cho 10 Ω, mắc song song cho 2,4 Ω. Trong mạch nối tiếp, dòng điện như nhau ở mọi điểm và hiệu điện thế chia theo tỉ lệ điện trở. Trong mạch song song, hiệu điện thế như nhau và dòng điện chia theo tỉ lệ nghịch.", tip: "Điện trở tương đương song song luôn nhỏ hơn điện trở nhỏ nhất." },
            { title: "Đo và kiểm tra", body: "Ampe kế mắc nối tiếp với đoạn mạch cần đo, vôn kế mắc song song. Nếu đọc số liệu không khớp định luật Ohm, kiểm tra thang đo và chiều dòng điện trước khi kết luận mạch hỏng. Sai số thường đến từ việc đọc nhầm đơn vị miliampe.", tip: "Luôn so sánh công suất tính được với công suất định mức của thiết bị." }
          ],
          formula: "I = U/R ; R(nt) = R₁ + R₂ ; 1/R(ss) = 1/R₁ + 1/R₂ ; P = U·I"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Công thức vận tốc biến đổi đều", back: "v = v0 + a·t, với a không đổi trong suốt quá trình.", hint: "Vận tốc là hàm bậc nhất của thời gian.", example: "v0 = 4 m/s, a = 2 m/s², sau 3 s có v = 10 m/s." },
    { front: "Quãng đường biến đổi đều", back: "s = v0·t + ½a·t², tương ứng diện tích dưới đồ thị vận tốc.", hint: "Có hệ số 1/2 trước gia tốc.", example: "Từ trạng thái nghỉ, a = 2 m/s², sau 4 s đi được 16 m." },
    { front: "Tầm xa ném xiên", back: "R = v0²·sin(2α)/g trên mặt đất phẳng, lớn nhất khi α = 45 độ.", hint: "Có sin của góc gấp đôi.", example: "v0 = 40 m/s, góc 45 độ, g = 9,8 cho R khoảng 163 m." },
    { front: "Độ cao cực đại ném xiên", back: "H = v0²·sin²α/(2g), đạt được khi thành phần vận tốc thẳng đứng bằng 0.", hint: "Bình phương sin chia hai g.", example: "v0 = 40 m/s, góc 45 độ cho H khoảng 41 m." },
    { front: "Gia tốc hướng tâm", back: "a = v²/r = ω²r, luôn hướng vào tâm quỹ đạo tròn.", hint: "Bình phương vận tốc chia bán kính.", example: "r = 0,3 m, v = 3,77 m/s cho a khoảng 47 m/s²." },
    { front: "Định luật II Newton", back: "Hợp lực tác dụng lên vật bằng khối lượng nhân gia tốc, xét theo từng trục.", hint: "F = ma là phương trình vector.", example: "F = 10 N, m = 2 kg cho a = 5 m/s²." },
    { front: "Công của lực", back: "A = F·s·cosα, bằng 0 khi lực vuông góc với độ dời.", hint: "Chỉ thành phần cùng phương sinh công.", example: "F = 40 N, s = 5 m, góc 60 độ cho A = 100 J." },
    { front: "Định lý động năng", back: "Độ biến thiên động năng bằng tổng công của các lực tác dụng.", hint: "Công đổi vận tốc.", example: "Xe 1000 kg tăng từ 10 lên 20 m/s cần thêm 150 kJ." },
    { front: "Bảo toàn động lượng", back: "Tổng động lượng của hệ kín không đổi trong mọi tương tác.", hint: "Vector, phải xét dấu.", example: "Xe 2 kg chạy 3 m/s dính vào xe 4 kg đứng yên cho v = 1 m/s." },
    { front: "Chu kỳ con lắc lò xo", back: "T = 2π√(m/k), không phụ thuộc biên độ dao động.", hint: "Tỉ lệ căn bậc hai của khối lượng.", example: "m = 0,25 kg, k = 100 N/m cho T khoảng 0,314 s." },
    { front: "Bước sóng", back: "λ = v/f, là khoảng cách giữa hai điểm gần nhau nhất dao động cùng pha.", hint: "Tốc độ chia tần số.", example: "v = 340 m/s, f = 170 Hz cho λ = 2 m." },
    { front: "Định luật Ohm", back: "I = U/R cho đoạn mạch chỉ có điện trở thuần.", hint: "Dòng điện tỉ lệ thuận hiệu điện thế.", example: "U = 20 V, R = 10 Ω cho I = 2 A." }
  ],
  quiz: [
    { q: "Với cùng tốc độ ban đầu trên mặt đất phẳng, tầm xa ném xiên lớn nhất khi góc bắn bằng:", options: ["30 độ", "45 độ", "60 độ", "90 độ"], answer: 1, explain: "Tầm xa tỉ lệ với sin của góc gấp đôi, đạt cực đại khi 2α = 90 độ." },
    { q: "Ném vật với v0 = 20 m/s, góc 30 độ, lấy g = 10 m/s². Tầm xa xấp xỉ:", options: ["20,0 m", "30,0 m", "34,6 m", "40,0 m"], answer: 2, explain: "R = v0²·sin60/g = 400·0,866/10, xấp xỉ 34,6 m." },
    { q: "Gia tốc hướng tâm của chuyển động tròn đều có độ lớn:", options: ["v·r", "v/r", "v²·r", "v²/r"], answer: 3, explain: "Gia tốc hướng tâm bằng bình phương vận tốc chia bán kính." },
    { q: "Vật 2 kg chịu hợp lực 10 N thì gia tốc bằng:", options: ["5 m/s²", "10 m/s²", "20 m/s²", "0,2 m/s²"], answer: 0, explain: "Theo định luật II Newton, a = F/m = 10/2 = 5 m/s²." },
    { q: "Động năng của vật 2 kg chuyển động với vận tốc 3 m/s là:", options: ["6 J", "9 J", "18 J", "3 J"], answer: 1, explain: "W(đ) = ½mv² = ½·2·9 = 9 J." },
    { q: "Động lượng của vật 2 kg chuyển động 3 m/s là:", options: ["1,5 kg·m/s", "3 kg·m/s", "6 kg·m/s", "12 kg·m/s"], answer: 2, explain: "p = m·v = 2·3 = 6 kg·m/s, là đại lượng vector." },
    { q: "Con lắc lò xo có m = 0,25 kg, k = 100 N/m. Chu kỳ dao động xấp xỉ:", options: ["0,05 s", "0,16 s", "0,63 s", "0,31 s"], answer: 3, explain: "T = 2π√(m/k) = 2π√0,0025 = 2π·0,05, xấp xỉ 0,314 s." },
    { q: "Sóng âm tần số 170 Hz truyền trong không khí với v = 340 m/s có bước sóng:", options: ["2 m", "0,5 m", "170 m", "4 m"], answer: 0, explain: "λ = v/f = 340/170 = 2 m." },
    { q: "Đoạn mạch có U = 20 V và R = 10 Ω thì cường độ dòng điện là:", options: ["0,5 A", "1 A", "2 A", "200 A"], answer: 2, explain: "Theo định luật Ohm, I = U/R = 20/10 = 2 A." },
    { q: "Vật rơi tự do từ độ cao 5 m, lấy g = 10 m/s². Thời gian rơi là:", options: ["0,5 s", "1,0 s", "2,0 s", "5,0 s"], answer: 1, explain: "h = ½gt² nên t = √(2h/g) = √1 = 1 s." }
  ],
  lab: {
    kind: "sim",
    mode: "projectile",
    title: "Bàn thí nghiệm ném xiên",
    lead: "Chọn góc bắn, tốc độ đầu và trọng trường để chạy lại quỹ đạo. Khung đọc số bên phải cập nhật tầm xa, độ cao cực đại và thời gian bay để đối chiếu với công thức.",
    stageLabel: "Mô phỏng chuyển động",
    autoPlay: true,
    sliders: [
      { key: "angle", label: "Góc bắn", min: 15, max: 75, step: 1, value: 45, unit: "°" },
      { key: "speed", label: "Tốc độ ban đầu", min: 10, max: 60, step: 1, value: 40, unit: " m/s" },
      { key: "gravity", label: "Gia tốc trọng trường", min: 1.6, max: 20, step: 0.1, value: 9.8, unit: " m/s²" }
    ],
    controlNote: "Đặt góc 45 độ rồi so tầm xa với góc 30 và 60 độ. Giảm trọng trường xuống 1,6 m/s² để mô phỏng chuyển động trên Mặt Trăng.",
    note: "Tầm xa tỉ lệ nghịch với trọng trường, nên cùng một cú ném trên Mặt Trăng sẽ đi xa hơn khoảng sáu lần so với trên Trái Đất."
  },
  teacher: {
    students: [
      { name: "Nguyễn Đức Anh", progress: 84, score: 8.7, status: "Tốt", note: "Tính tầm xa nhanh, cần chú ý sai số đơn vị." },
      { name: "Trần Bảo Ngọc", progress: 56, score: 7, status: "Đang học", note: "Còn lẫn giữa ma sát nghỉ và ma sát trượt." },
      { name: "Lê Quang Huy", progress: 92, score: 9, status: "Tốt", note: "Làm tốt bài va chạm và bảo toàn động lượng." },
      { name: "Phạm Thu Trang", progress: 33, score: 5, status: "Cần hỗ trợ", note: "Chưa viết đúng phương trình theo hai trục." },
      { name: "Vũ Hoài Nam", progress: 71, score: 7, status: "Đang học", note: "Tiến bộ ở phần sóng, cần ôn mạch điện." },
      { name: "Đỗ Khánh Ly", progress: 48, score: 6, status: "Đang học", note: "Hay quên đổi vòng/phút sang radian/giây." }
    ],
    submissions: [
      { student: "Nguyễn Đức Anh", lesson: "Báo cáo thí nghiệm ném xiên", time: "Hôm qua 22:05", status: "Chờ chấm" },
      { student: "Phạm Thu Trang", lesson: "Phiếu biểu đồ lực", time: "Hôm qua 16:20", status: "Chờ chấm" },
      { student: "Lê Quang Huy", lesson: "Bài tập va chạm đàn hồi", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Bài thực hành tuần này đo tầm xa ném xiên, mang theo thước và máy tính.",
      "Nhóm chưa nộp báo cáo thí nghiệm sóng cần hoàn thành trước thứ Bảy.",
      "Giờ tư vấn phần động lượng chuyển sang phòng 204 từ tuần sau."
    ]
  },
  className: "Vật lý đại cương 1 – K25",
  brief: "BTL-04_physicssim-mon-vat-ly.md"
};
