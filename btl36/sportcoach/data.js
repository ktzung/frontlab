window.BTL_DATA = {
  id: "sportcoach",
  code: "BTL-32",
  name: "SportCoach",
  monogram: "HR",
  subject: "Giáo dục thể chất",
  level: "Phổ thông",
  group: "Nghệ thuật & Thể chất",
  accent: "#ea580c",
  accent2: "#0284c7",
  font: "rounded",
  tagline: "Bóc một động tác thành sáu bước để sửa đúng chỗ sai, không tập lại từ đầu.",
  intro: "SportCoach dạy kỹ thuật thể thao bằng trình tự từng bước có điểm dừng, kèm lỗi thường gặp ở mỗi giai đoạn. Học sinh xem trước, tập theo, rồi tự chấm bằng danh sách kiểm tra ngắn.",
  hero: { title: "Kỹ thuật", highlight: "tách ra từng bước để sửa" },
  heroBadge: "Động tác từng bước · Tiến độ thể lực",
  labShort: "ĐỘNG TÁC",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ ghi nhớ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách học được chọn cho Giáo dục thể chất: xem động tác theo bước, ghi nhật ký luyện tập và đọc đồ thị tiến bộ.",
  pathLead: "Bắt đầu từ nền tảng thể lực, sang kỹ thuật điền kinh, rồi an toàn và hồi phục. Mỗi chương đều có bài tập đo được bằng số.",
  features: [
    { badge: "01", title: "Động tác từng bước", desc: "Kỹ thuật chạy 100 m tách thành sáu giai đoạn, mỗi giai đoạn có điểm cần kiểm tra và lỗi hay gặp." },
    { badge: "02", title: "Nhật ký luyện tập", desc: "Ghi quãng chạy, số vòng và thời gian mỗi buổi, hệ thống tính tốc độ trung bình để so sánh giữa các tuần." },
    { badge: "03", title: "Đồ thị tiến bộ", desc: "Biểu đồ theo tuần cho thấy thành tích đang tăng hay chững, giúp điều chỉnh cường độ thay vì tập theo cảm tính." }
  ],
  modules: [
    {
      title: "Nền tảng thể lực",
      summary: "Khởi động đúng, phân biệt các vùng cường độ và áp dụng nguyên tắc FITT.",
      lessons: [
        {
          id: "nl1",
          title: "Khởi động và làm nóng",
          minutes: 18,
          level: "Cơ bản",
          summary: "Trình tự khởi động chung và khởi động chuyên môn trước khi vào bài tập chính.",
          points: ["Khởi động làm tăng nhiệt độ cơ, tăng độ đàn hồi và giảm nguy cơ căng cơ.", "Khởi động động học hiệu quả hơn giãn tĩnh kéo dài trước khi thi đấu.", "Khởi động chuyên môn phải giống động tác chính nhưng nhẹ hơn."],
          steps: [
            { title: "Khởi động chung 8 đến 10 phút", body: "Bắt đầu bằng chạy nhẹ tại chỗ hoặc chạy vòng 3 đến 5 phút để tăng nhịp tim và nhiệt độ cơ. Sau đó thực hiện các động tác xoay khớp từ cổ, vai, hông đến cổ chân theo biên độ tăng dần. Mục tiêu là làm ấm chứ không phải làm mệt.", tip: "Nếu vừa khởi động đã thở dốc, cường độ đã quá cao so với mục đích làm nóng." },
            { title: "Khởi động động học", body: "Dùng các động tác như nâng cao đùi, gót chạm mông, chạy bước nhỏ, chạy đạp sau trong 10 đến 15 mét mỗi bài. Động tác động học kích hoạt đúng cơ sẽ dùng và giữ được sức mạnh, khác với giãn tĩnh giữ 30 giây làm giảm lực tạm thời. Với chạy 100 m, cần thêm 2 đến 3 lần xuất phát thấp nhẹ.", tip: "Giãn tĩnh phù hợp sau buổi tập, không phù hợp ngay trước khi chạy nước rút." },
            { title: "Khởi động chuyên môn", body: "Bài khởi động phải mô phỏng chuyển động thi đấu với cường độ 60 đến 80 phần trăm, ví dụ chạy 2 lần 30 mét tăng tốc dần. Nghỉ đủ giữa các lần để không tích lũy mệt mỏi trước khi vào bài chính. Kết thúc bằng 1 đến 2 lần xuất phát thật để cơ thể làm quen tín hiệu lệnh.", tip: "Ghi lại thời gian khởi động vào nhật ký để tái lập đúng quy trình mỗi buổi." }
          ],
          formula: "Khởi động: 8 đến 10 phút chung, 5 phút động học, 3 đến 5 phút chuyên môn"
        },
        {
          id: "nl2",
          title: "Sức bền ưa khí và kỵ khí",
          minutes: 20,
          level: "Trung bình",
          summary: "Phân biệt hai hệ năng lượng và cách xác định vùng nhịp tim khi luyện tập.",
          points: ["Hệ ưa khí dùng oxy, phù hợp chạy bền và duy trì lâu.", "Hệ kỵ khí cho nỗ lực ngắn, mạnh như chạy 100 m hoặc nâng tạ.", "Nhịp tim mục tiêu tính bằng (220 trừ tuổi) nhân 60 đến 80 phần trăm."],
          steps: [
            { title: "Hai hệ năng lượng", body: "Hệ ưa khí phân giải đường và mỡ có oxy, cung cấp năng lượng chậm nhưng bền, phù hợp chạy 3 đến 5 km. Hệ kỵ khí dùng ATP dự trữ và đường phân, chỉ đủ cho khoảng 10 đến 60 giây nỗ lực tối đa nên sinh axit lactic gây mỏi. Chạy 100 m gần như hoàn toàn dựa vào hệ kỵ khí.", tip: "Nếu phải dừng vì thở dốc trong 30 giây đầu, bài tập đó thuộc vùng kỵ khí." },
            { title: "Tính nhịp tim mục tiêu", body: "Học sinh 16 tuổi có nhịp tim tối đa ước lượng 220 trừ 16 bằng 204 lần mỗi phút. Vùng tập trung bình là 122 đến 143, vùng mạnh là 143 đến 163 lần mỗi phút. Đo mạch 15 giây rồi nhân bốn ngay sau khi dừng bài để so với vùng mục tiêu.", tip: "Công thức 220 trừ tuổi chỉ là ước lượng, sai số có thể đến 10 đến 12 nhịp." },
            { title: "Phân bổ bài tập trong tuần", body: "Người từ 12 đến 17 tuổi nên vận động ít nhất 60 phút mỗi ngày ở cường độ trung bình đến mạnh, trong đó 3 ngày có hoạt động tăng cường cơ và xương. Xen kẽ ngày nặng và ngày nhẹ để cơ thể thích nghi, tránh dồn toàn bộ vào cuối tuần. Một tuần mẫu có thể là 3 buổi chạy, 2 buổi sức mạnh và 1 buổi linh hoạt.", tip: "Tăng khối lượng không quá 10 phần trăm mỗi tuần để giảm nguy cơ quá tải." }
          ],
          formula: "Nhịp tim mục tiêu = (220 − tuổi) x 60 đến 80 phần trăm"
        },
        {
          id: "nl3",
          title: "Nguyên tắc FITT và lượng vận động",
          minutes: 20,
          level: "Trung bình",
          summary: "Dùng bốn biến số FITT để thiết kế một buổi tập phù hợp năng lực học sinh.",
          points: ["F là tần suất, I là cường độ, T thứ nhất là thời gian, T thứ hai là loại hình.", "Cường độ có thể đo bằng nhịp tim, tốc độ hoặc cảm nhận gắng sức.", "Nguyên tắc tăng dần giúp cơ thể thích nghi mà không chấn thương."],
          steps: [
            { title: "Xác định bốn biến số", body: "Ví dụ một học sinh lớp 10 tập chạy: tần suất 3 buổi mỗi tuần, cường độ 70 phần trăm nhịp tim tối đa, thời gian 30 phút mỗi buổi, loại hình chạy bền. Bốn biến số này đủ để mô tả và điều chỉnh bài tập mà không cần giáo án phức tạp.", tip: "Chỉ nên tăng một biến số mỗi tuần để biết thay đổi nào mang lại kết quả." },
            { title: "Đo cường độ", body: "Thang cảm nhận gắng sức 10 mức giúp học sinh tự đánh giá: mức 3 đến 4 còn nói chuyện được, mức 7 đến 8 chỉ nói được câu ngắn. Với chạy 100 m, cường độ tính bằng phần trăm tốc độ tối đa, ví dụ chạy 3 lần 60 m ở 90 phần trăm. Kết hợp cảm nhận và số đo giúp tránh tập quá hoặc quá nhẹ.", tip: "Ghi cảm nhận và nhịp tim vào nhật ký để so sánh giữa các buổi cùng bài." },
            { title: "Tăng dần và giảm tải", body: "Tuần 1 chạy 3 lần 20 phút, tuần 2 tăng lên 25 phút, tuần 3 giữ nguyên và tăng tốc, tuần 4 giảm tải để cơ thể hồi phục. Cơ thể thích nghi trong lúc nghỉ, không phải trong lúc tập. Bỏ qua tuần giảm tải thường dẫn đến đau xương chày hoặc viêm gân.", tip: "Cứ 3 đến 4 tuần nên có một tuần giảm 30 đến 40 phần trăm khối lượng." }
          ],
          formula: "FITT: tần suất, cường độ, thời gian, loại hình"
        }
      ]
    },
    {
      title: "Kỹ thuật điền kinh",
      summary: "Chạy cự ly ngắn, chạy bền và nhảy xa với các mốc kỹ thuật rõ ràng.",
      lessons: [
        {
          id: "kt1",
          title: "Chạy cự ly ngắn: xuất phát thấp",
          minutes: 24,
          level: "Trung bình",
          summary: "Bố trí bàn đạp, tư thế sẵn sàng và hai mươi mét chạy lao đầu tiên.",
          points: ["Bàn đạp trước cách vạch xuất phát khoảng 1,5 đến 2 bàn chân.", "Tư thế sẵn sàng có hông cao hơn vai, vai hơi vượt trước đường tay chống.", "Chạy lao cần đạp mạnh chân sau, thân trên ngả trước khoảng 45 độ."],
          steps: [
            { title: "Bố trí bàn đạp", body: "Bàn đạp trước đặt cách vạch xuất phát khoảng 1,5 đến 2 bàn chân, bàn sau cách bàn trước khoảng 1,5 bàn chân, tùy chiều dài chân. Góc bàn trước khoảng 45 độ, bàn sau khoảng 60 đến 70 độ. Đặt chân thuận vào bàn trước để tận dụng chân mạnh khi đạp đầu tiên.", tip: "Nếu chân sau thấy gò bó, dịch bàn sau ra xa thêm nửa bàn chân và thử lại." },
            { title: "Hai tư thế lệnh", body: "Khi có lệnh vào chỗ, đặt hai tay sau vạch, ngón cái và ngón trỏ tạo vòm, đầu gối chân sau chạm nhẹ đất. Khi có lệnh sẵn sàng, nâng hông cao hơn vai 5 đến 10 cm, vai hơi vượt trước tay chống, mắt nhìn xuống vạch cách 40 đến 50 cm. Giữ yên tuyệt đối để không bị phạm quy.", tip: "Đừng dồn quá nhiều trọng lượng lên tay, nếu không sẽ không đạp được ngay khi có lệnh." },
            { title: "Chạy lao 20 mét đầu", body: "Khi có lệnh chạy, đạp mạnh chân trước rồi chân sau, đưa thân trên ngả trước khoảng 45 độ và tăng dần độ thẳng. Bước đầu tiên ngắn, sau đó dài dần theo đà, tay đánh mạnh và thẳng góc với hướng chạy. Sau khoảng 15 đến 20 mét, thân trên gần thẳng đứng và chuyển sang chạy giữa quãng.", tip: "Lỗi hay gặp là đứng thẳng người quá sớm, làm mất đà và giảm tốc độ tối đa." }
          ],
          formula: "Bàn đạp trước 1,5 đến 2 bàn chân; bàn sau cách bàn trước 1,5 bàn chân"
        },
        {
          id: "kt2",
          title: "Chạy giữa quãng và về đích",
          minutes: 22,
          level: "Trung bình",
          summary: "Duy trì tần số bước cao, thả lỏng vai và chạm đích đúng luật.",
          points: ["Tần số bước cao quan trọng hơn sải chân quá dài trong chạy ngắn.", "Tay đánh góc khoảng 90 độ, biên độ từ hông đến cằm.", "Về đích bằng cách chạm ngực vào dây, không nhảy lao về trước."],
          steps: [
            { title: "Tư thế thân trên", body: "Thân trên gần thẳng, hơi ngả trước 5 đến 10 độ, mắt nhìn về đích thay vì nhìn xuống chân. Vai và cổ thả lỏng, không so vai vì gồng sẽ làm giảm biên độ đánh tay. Hông cao, chân đạp thẳng phía sau để tận dụng toàn bộ lực.", tip: "Nếu nghe thấy tiếng bàn chân đập mạnh, có thể đang sải chân quá dài và giảm tốc." },
            { title: "Đánh tay và tần số bước", body: "Hai tay đánh theo trục trước sau, góc khuỷu khoảng 90 độ, bàn tay để hờ không nắm chặt. Biên độ tay quyết định biên độ chân, tay đánh nhanh thì chân cũng nhanh. Vận động viên 100 m đạt tần số khoảng 4 đến 5 bước mỗi giây trong đoạn tốc độ tối đa.", tip: "Đếm số bước trong 10 giây để ước lượng tần số bước của mình." },
            { title: "Về đích và qua đích", body: "Ở 10 đến 15 mét cuối, giữ nguyên kỹ thuật, không giảm tốc trước dây đích. Chạm đích bằng cách ưỡn ngực hoặc nghiêng vai, không nhảy lao vì dễ ngã và không nhanh hơn. Sau khi qua dây, tiếp tục chạy giảm tốc thêm 10 đến 15 mét để tránh dừng đột ngột.", tip: "Dừng đột ngột sau đích dễ gây chóng mặt và căng cơ đùi sau." }
          ],
          formula: "Tay đánh 90 độ, biên độ từ hông đến cằm, tần số 4 đến 5 bước mỗi giây"
        },
        {
          id: "kt3",
          title: "Nhảy xa kiểu ngồi",
          minutes: 22,
          level: "Trung bình",
          summary: "Bốn giai đoạn chạy đà, giậm nhảy, bay trên không và tiếp đất.",
          points: ["Chạy đà 15 đến 20 bước, tăng tốc dần và giữ nhịp ổn định ở cuối đà.", "Giậm nhảy bằng một chân, đặt chân gần ván và đạp thẳng hết chân.", "Tiếp đất bằng hai chân, gập gối và đưa hông về trước để không ngồi lại."],
          steps: [
            { title: "Chạy đà", body: "Chạy đà 15 đến 20 bước với tốc độ tăng dần, hai bước cuối có nhịp nhanh hơn để chuẩn bị giậm. Đặt mốc kiểm tra ở khoảng 6 bước cuối để biết đã vào đúng nhịp chưa. Không cố tăng tốc đột ngột ngay trước ván vì sẽ làm rối nhịp chân.", tip: "Đo chiều dài chạy đà và đánh dấu bằng dây, mỗi buổi giữ nguyên mốc." },
            { title: "Giậm nhảy và bay", body: "Giậm bằng chân mạnh, đặt cả bàn chân lên ván và đạp duỗi hết khớp cổ chân, đầu gối, hông. Trên không thực hiện động tác ngồi: hai chân duỗi trước, thân gập nhẹ rồi đưa hai chân về trước khi hạ xuống. Tay đánh từ sau ra trước để giữ thăng bằng.", tip: "Giậm nhảy xa ván sẽ mất lực, giậm sát ván quá dễ phạm quy." },
            { title: "Tiếp đất an toàn", body: "Tiếp đất bằng hai chân, gối gập để hấp thụ lực, hông đưa về trước thay vì ngồi ra sau. Điểm chạm gần nhất của cơ thể tính thành tích, nên ngồi lại sẽ làm mất thành tích dù đã bay xa. Sau khi tiếp đất, đứng dậy đi ra phía trước khỏi hố cát.", tip: "Tập tiếp đất từ bục thấp trước khi nhảy đà đầy đủ để quen cảm giác." }
          ],
          formula: "Thành tích tính từ ván giậm đến điểm chạm gần nhất của cơ thể"
        }
      ]
    },
    {
      title: "An toàn và hồi phục",
      summary: "Xử lý chấn thương nhẹ, giãn cơ sau tập và bù nước đúng cách.",
      lessons: [
        {
          id: "at1",
          title: "Chấn thương thường gặp khi tập",
          minutes: 20,
          level: "Cơ bản",
          summary: "Nhận diện bong gân, căng cơ và xử lý ban đầu theo nguyên tắc RICE.",
          points: ["Bong gân cổ chân thường do lật bàn chân vào trong khi tiếp đất.", "Căng cơ đùi sau hay gặp khi chạy nước rút mà chưa khởi động đủ.", "Xử lý ban đầu: nghỉ, chườm lạnh, băng ép, nâng cao chi."],
          steps: [
            { title: "Nhận diện chấn thương", body: "Bong gân cổ chân gây đau, sưng nhanh ở mặt ngoài cổ chân và hạn chế vận động. Căng cơ đùi sau gây đau nhói mặt sau đùi, đôi khi thấy co thắt cơ khi đang chạy. Đau xương khu trú một điểm và tăng khi ấn mạnh cần loại trừ gãy xương.", tip: "Nếu không chịu được trọng lượng sau 24 giờ, cần chụp hình ảnh để loại trừ gãy." },
            { title: "Nguyên tắc RICE", body: "Rest là ngừng vận động ngay, Ice chườm lạnh 15 đến 20 phút mỗi 2 đến 3 giờ trong 48 giờ đầu, Compression băng ép vừa phải, Elevation nâng chi cao hơn tim. Chườm lạnh giúp giảm đau và giảm sưng, không chườm trực tiếp đá lên da. Trong 48 giờ đầu không xoa dầu nóng hay massage mạnh vùng sưng.", tip: "Chườm nóng quá sớm sẽ làm sưng nhiều hơn, chỉ dùng sau 48 giờ." },
            { title: "Quay lại tập an toàn", body: "Chỉ quay lại khi hết sưng, đi lại không đau và biên độ khớp gần bằng bên lành. Tăng dần từ đi bộ, chạy nhẹ đến chạy nước rút, mỗi giai đoạn 2 đến 3 buổi. Nếu đau tái phát khi tăng tốc, lùi lại một giai đoạn thay vì cố gắng.", tip: "Tập thăng bằng một chân giúp giảm nguy cơ bong gân tái phát." }
          ],
          formula: "RICE: nghỉ, chườm lạnh, băng ép, nâng cao chi trong 48 giờ đầu"
        },
        {
          id: "at2",
          title: "Giãn cơ và hồi phục",
          minutes: 18,
          level: "Cơ bản",
          summary: "Trình tự giãn cơ sau tập, giấc ngủ và dấu hiệu cần nghỉ thêm.",
          points: ["Giãn tĩnh sau tập 10 đến 15 phút, mỗi động tác giữ 20 đến 30 giây.", "Ngủ đủ 8 đến 10 giờ giúp học sinh phổ thông hồi phục tốt nhất.", "Đau cơ kéo dài quá 72 giờ là dấu hiệu tập quá tải."],
          steps: [
            { title: "Giãn cơ sau tập", body: "Giãn đùi sau, đùi trước, bắp chân và cơ mông, mỗi động tác giữ 20 đến 30 giây, lặp 2 lần mỗi bên. Giãn đến mức căng nhẹ, không đau, và thở đều trong suốt thời gian giữ. Thực hiện khi cơ còn ấm ngay sau buổi tập để hiệu quả nhất.", tip: "Nín thở khi giãn làm tăng trương lực cơ, hãy đếm thở chậm từ 4 đến 6." },
            { title: "Giấc ngủ và ngày nghỉ", body: "Học sinh phổ thông cần 8 đến 10 giờ ngủ mỗi đêm, thiếu ngủ làm giảm sức mạnh và tăng nguy cơ chấn thương. Sắp xếp ít nhất một ngày nghỉ hoàn toàn mỗi tuần, có thể là ngày vận động nhẹ như đi bộ. Giấc ngủ là công cụ hồi phục mạnh nhất và miễn phí.", tip: "Ngủ đủ giúp phản xạ nhanh hơn, ảnh hưởng trực tiếp đến thành tích chạy ngắn." },
            { title: "Theo dõi dấu hiệu quá tải", body: "Đau cơ xuất hiện sau 24 đến 48 giờ là bình thường, nhưng đau kéo dài quá 72 giờ hoặc kèm nước tiểu sẫm màu cần đi khám. Nhịp tim nghỉ buổi sáng tăng 5 đến 10 nhịp so với bình thường là dấu hiệu cơ thể chưa hồi phục. Ghi lại các dấu hiệu này trong nhật ký luyện tập.", tip: "Đo mạch buổi sáng trước khi ra khỏi giường để có số liệu ổn định." }
          ],
          formula: "Giãn tĩnh 20 đến 30 giây mỗi động tác, ngủ 8 đến 10 giờ mỗi đêm"
        },
        {
          id: "at3",
          title: "Dinh dưỡng và bù nước",
          minutes: 20,
          level: "Trung bình",
          summary: "Chọn bữa ăn trước và sau tập, tính lượng nước cần bù khi ra mồ hôi nhiều.",
          points: ["Ăn bữa giàu tinh bột 2 đến 3 giờ trước khi tập để đủ glycogen.", "Sau tập cần tinh bột và protein trong vòng 1 đến 2 giờ.", "Cân nặng giảm 1 kg sau tập tương đương mất khoảng 1 lít nước."],
          steps: [
            { title: "Trước khi tập", body: "Bữa ăn cách 2 đến 3 giờ nên có cơm, bánh mì hoặc khoai cùng một phần protein nạc và ít chất béo để tiêu hóa nhanh. Trước tập 30 đến 60 phút có thể ăn nhẹ một quả chuối nếu đói. Tránh ăn nhiều chất béo ngay trước khi chạy vì gây nặng bụng.", tip: "Thử thực đơn trong buổi tập nhẹ trước, không thử lần đầu trong ngày thi đấu." },
            { title: "Sau khi tập", body: "Trong vòng 1 đến 2 giờ sau tập, ăn kết hợp tinh bột và protein, ví dụ cơm với cá hoặc sữa chua với chuối, giúp bổ sung glycogen và sửa chữa cơ. Học sinh tập luyện thường xuyên cần khoảng 1,2 đến 1,6 gam protein mỗi kg cân nặng mỗi ngày. Nước uống đủ giúp thận thải sản phẩm chuyển hóa.", tip: "Sữa và trứng là nguồn protein rẻ, dễ dùng sau buổi tập ở trường." },
            { title: "Bù nước đúng cách", body: "Uống 400 đến 600 ml nước trong 2 giờ trước khi tập, rồi 150 đến 250 ml mỗi 15 đến 20 phút khi tập. Cân trước và sau buổi tập để biết lượng mất, mỗi kg giảm cần bù khoảng 1 đến 1,5 lít. Nước tiểu vàng nhạt là dấu hiệu đủ nước.", tip: "Khi tập trên 60 phút ra nhiều mồ hôi, có thể dùng dung dịch có điện giải thay vì nước lọc." }
          ],
          formula: "Mỗi 1 kg cân nặng giảm sau tập cần bù khoảng 1 đến 1,5 lít nước"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Nguyên tắc FITT", back: "Bốn biến số của một bài tập: tần suất, cường độ, thời gian và loại hình vận động.", hint: "Bốn chữ cái đầu của bốn từ tiếng Anh.", example: "Chạy 3 buổi mỗi tuần, 70 phần trăm nhịp tim tối đa, 30 phút mỗi buổi." },
    { front: "Nhịp tim tối đa ước lượng", back: "Lấy 220 trừ tuổi, dùng để tính vùng nhịp tim luyện tập.", hint: "Công thức đơn giản, có sai số 10 đến 12 nhịp.", example: "Học sinh 16 tuổi có nhịp tối đa ước lượng 204 lần mỗi phút." },
    { front: "Khởi động động học", back: "Chuỗi động tác chuyển động có kiểm soát nhằm làm nóng và kích hoạt cơ trước khi tập.", hint: "Khác với giãn tĩnh giữ yên một chỗ.", example: "Chạy nâng cao đùi 15 mét, chạy gót chạm mông 15 mét." },
    { front: "Chạy lao", back: "Đoạn 15 đến 20 mét đầu sau xuất phát, thân trên ngả trước và tăng dần độ dài bước.", hint: "Giai đoạn chuyển từ tư thế xuất phát sang chạy.", example: "Sau lệnh chạy, thân ngả khoảng 45 độ rồi thẳng dần." },
    { front: "Tần số bước", back: "Số bước trong một giây, yếu tố quyết định tốc độ trong chạy cự ly ngắn.", hint: "Đếm bước trong 10 giây rồi chia cho 10.", example: "Vận động viên 100 m đạt 4 đến 5 bước mỗi giây." },
    { front: "Bàn đạp xuất phát", back: "Bàn trước cách vạch 1,5 đến 2 bàn chân, bàn sau cách bàn trước khoảng 1,5 bàn chân.", hint: "Chân thuận đặt bàn trước.", example: "Học sinh chân phải thuận đặt chân phải ở bàn đạp trước." },
    { front: "Về đích đúng luật", back: "Chạm dây đích bằng ngực hoặc vai, giữ tốc độ đến khi qua dây rồi chạy giảm tốc.", hint: "Không nhảy lao về trước.", example: "Chạy qua đích thêm 10 đến 15 mét rồi mới dừng." },
    { front: "Giậm nhảy", back: "Động tác đạp một chân thật mạnh lên ván, duỗi hết cổ chân, gối và hông.", hint: "Chân giậm quyết định độ cao và độ xa.", example: "Nhảy xa kiểu ngồi giậm bằng chân mạnh, đặt cả bàn chân lên ván." },
    { front: "RICE", back: "Bốn bước xử lý chấn thương nhẹ: nghỉ, chườm lạnh, băng ép, nâng cao chi.", hint: "Bốn chữ cái đầu tiếng Anh.", example: "Bong gân cổ chân: ngừng chạy, chườm lạnh 20 phút, băng ép và kê cao chân." },
    { front: "Đau cơ muộn", back: "Đau cơ xuất hiện sau 24 đến 48 giờ do tổn thương vi mô khi tập nặng hơn bình thường.", hint: "Không phải chấn thương, thường tự hết sau 72 giờ.", example: "Đau đùi sau hai ngày sau buổi tập chạy nước rút đầu tiên." },
    { front: "Bù nước sau tập", back: "Mỗi 1 kg cân nặng giảm cần bù khoảng 1 đến 1,5 lít nước.", hint: "Cân trước và sau buổi tập.", example: "Giảm 0,8 kg sau buổi tập cần uống khoảng 0,8 đến 1,2 lít." },
    { front: "Tuần giảm tải", back: "Tuần giảm 30 đến 40 phần trăm khối lượng tập để cơ thể hồi phục và thích nghi.", hint: "Thường sau 3 đến 4 tuần tăng dần.", example: "Ba tuần chạy 25 phút, tuần thứ tư giảm còn 15 phút." }
  ],
  quiz: [
    { q: "Bàn đạp trước trong xuất phát thấp thường cách vạch xuất phát bao xa?", options: ["Nửa bàn chân", "Ba bàn chân", "1,5 đến 2 bàn chân", "Năm bàn chân"], answer: 2, explain: "Bàn trước cách vạch khoảng 1,5 đến 2 bàn chân, bàn sau cách bàn trước khoảng 1,5 bàn chân tùy chiều dài chân." },
    { q: "Trong chạy 100 m, giai đoạn chạy lao kéo dài khoảng bao nhiêu mét đầu?", options: ["15 đến 20 mét", "40 đến 50 mét", "60 đến 70 mét", "5 mét"], answer: 0, explain: "Chạy lao khoảng 15 đến 20 mét đầu, thân trên ngả trước rồi thẳng dần trước khi chuyển sang chạy giữa quãng." },
    { q: "Nhịp tim tối đa ước lượng của học sinh 16 tuổi là bao nhiêu?", options: ["180 lần mỗi phút", "196 lần mỗi phút", "200 lần mỗi phút", "204 lần mỗi phút"], answer: 3, explain: "Lấy 220 trừ 16 bằng 204 lần mỗi phút, đây chỉ là giá trị ước lượng có sai số." },
    { q: "Khi bong gân cổ chân trong 48 giờ đầu, nên làm gì?", options: ["Xoa dầu nóng và massage mạnh", "Chườm lạnh, băng ép và nâng cao chân", "Chạy nhẹ để máu lưu thông", "Bó chặt và tiếp tục tập"], answer: 1, explain: "Nguyên tắc RICE trong 48 giờ đầu giúp giảm sưng và đau; chườm nóng sớm sẽ làm sưng nặng hơn." },
    { q: "Cách về đích đúng luật trong chạy ngắn là:", options: ["Nhảy lao về trước", "Giảm tốc trước dây đích", "Chạm dây bằng ngực hoặc vai", "Dừng lại ngay tại dây"], answer: 2, explain: "Chạm đích bằng ngực hoặc vai và tiếp tục chạy qua dây thêm 10 đến 15 mét để tránh dừng đột ngột." },
    { q: "Trong nhảy xa kiểu ngồi, tiếp đất đúng kỹ thuật là:", options: ["Tiếp đất bằng một chân", "Ngồi ra sau để giảm đau", "Tiếp đất bằng hai tay", "Tiếp đất bằng hai chân, gập gối, đưa hông về trước"], answer: 3, explain: "Tiếp đất hai chân, gập gối hấp thụ lực và đưa hông về trước để không làm mất thành tích." },
    { q: "Vì sao không nên giãn tĩnh kéo dài ngay trước khi chạy nước rút?", options: ["Làm giảm lực tạm thời của cơ", "Làm tăng nhịp tim quá mức", "Gây mất nước", "Không ảnh hưởng gì"], answer: 0, explain: "Giãn tĩnh kéo dài ngay trước nỗ lực mạnh có thể làm giảm sức mạnh tạm thời; nên dùng khởi động động học." },
    { q: "Một học sinh giảm 0,8 kg sau buổi tập, cần bù khoảng bao nhiêu nước?", options: ["0,2 lít", "0,8 đến 1,2 lít", "3 lít", "5 lít"], answer: 1, explain: "Mỗi 1 kg giảm cần bù khoảng 1 đến 1,5 lít, nên 0,8 kg cần khoảng 0,8 đến 1,2 lít." },
    { q: "Nguyên tắc tăng khối lượng tập an toàn là tăng không quá bao nhiêu mỗi tuần?", options: ["50 phần trăm", "30 phần trăm", "10 phần trăm", "5 phần trăm"], answer: 2, explain: "Tăng khoảng 10 phần trăm mỗi tuần giúp cơ thể thích nghi và giảm nguy cơ chấn thương quá tải." },
    { q: "Hệ năng lượng nào chi phối chủ yếu khi chạy 100 m?", options: ["Hệ kỵ khí", "Hệ ưa khí", "Hệ tiêu hóa mỡ", "Hệ hô hấp chậm"], answer: 0, explain: "Chạy 100 m là nỗ lực tối đa ngắn, chủ yếu dùng ATP dự trữ và đường phân kỵ khí." }
  ],
  lab: {
    kind: "stepper",
    title: "Sáu giai đoạn của chạy 100 m",
    lead: "Đi từng bước từ lúc vào bàn đạp đến khi hồi phục sau đích. Mỗi bước nêu điểm cần kiểm tra và lỗi thường gặp để học sinh tự sửa.",
    stageLabel: "Quy trình động tác",
    controlNote: "Bấm Tiếp để đi theo đúng trình tự thi đấu. Dừng lại ở mỗi bước để đối chiếu tư thế của mình trước khi sang bước sau.",
    note: "Trình tự dựa trên kỹ thuật chạy cự ly ngắn cơ bản, có thể điều chỉnh theo chiều dài chân và trình độ học sinh.",
    steps: [
      { title: "Bước 1: Vào chỗ", short: "Vào chỗ", body: "Đặt bàn đạp trước cách vạch 1,5 đến 2 bàn chân, bàn sau cách bàn trước khoảng 1,5 bàn chân. Hai tay đặt sau vạch, ngón cái và ngón trỏ tạo vòm, đầu gối chân sau chạm nhẹ mặt đường. Vai thả lỏng, mắt nhìn xuống vạch khoảng 40 cm phía trước.", tip: "Thử đặt chân thuận ở bàn trước, nếu thấy gò bó thì dịch bàn sau ra xa thêm nửa bàn chân." },
      { title: "Bước 2: Sẵn sàng", short: "Sẵn sàng", body: "Nâng hông cao hơn vai 5 đến 10 cm, dồn trọng lượng về phía tay chống, vai hơi vượt trước đường tay. Giữ thân hoàn toàn yên, chỉ chờ tín hiệu lệnh. Đây là tư thế dễ phạm quy nhất nếu nhấp nhổm hoặc nhấc tay.", tip: "Tập tư thế này 5 lần mỗi buổi, mỗi lần giữ 3 giây để làm quen cảm giác." },
      { title: "Bước 3: Chạy lao 20 mét", short: "Chạy lao", body: "Đạp mạnh chân trước rồi chân sau, thân trên ngả trước khoảng 45 độ và thẳng dần theo đà. Bước đầu ngắn, sau đó dài dần, tay đánh mạnh theo trục trước sau. Kết thúc khoảng mét thứ 20 với thân gần thẳng.", tip: "Lỗi hay gặp là đứng thẳng người ngay sau hai bước, làm mất đà và giảm tốc độ tối đa." },
      { title: "Bước 4: Chạy giữa quãng", short: "Giữa quãng", body: "Giữ thân gần thẳng, hơi ngả trước 5 đến 10 độ, mắt nhìn về đích. Khuỷu tay khoảng 90 độ, biên độ tay từ hông đến cằm, vai và cổ thả lỏng. Duy trì tần số 4 đến 5 bước mỗi giây thay vì cố sải chân dài.", tip: "Đếm số bước trong 10 giây để biết tần số hiện tại, từ đó điều chỉnh đánh tay nhanh hơn." },
      { title: "Bước 5: Về đích", short: "Về đích", body: "Mười đến mười lăm mét cuối giữ nguyên kỹ thuật, không giảm tốc trước dây. Chạm đích bằng ngực hoặc vai, không nhảy lao về trước. Tiếp tục chạy giảm tốc thêm 10 đến 15 mét để cơ thể hạ nhịp từ từ.", tip: "Dừng đột ngột sau đích dễ gây chóng mặt và căng cơ đùi sau." },
      { title: "Bước 6: Hồi phục", short: "Hồi phục", body: "Đi bộ chậm 2 đến 3 phút, thở sâu bằng mũi và thở ra bằng miệng để hạ nhịp tim dần. Sau đó giãn đùi sau, đùi trước, bắp chân và cơ mông, mỗi động tác 20 đến 30 giây. Ghi thời gian chạy và cảm nhận gắng sức vào nhật ký luyện tập.", tip: "Uống nước theo lượng cân hụt và ghi lại để so sánh mức ra mồ hôi giữa các buổi." }
    ]
  },
  teacher: {
    students: [
      { name: "Nguyễn Đức Thịnh", progress: 81, score: 8.5, status: "Tốt", note: "Kỹ thuật xuất phát thấp chuẩn, cần tăng sức bền." },
      { name: "Trần Gia Linh", progress: 64, score: 7.4, status: "Đang học", note: "Đánh tay còn chéo người, cần luyện thêm bài tại chỗ." },
      { name: "Lê Hoàng Phúc", progress: 90, score: 9.0, status: "Tốt", note: "Thành tích 100 m tốt nhất lớp, có thể dẫn nhóm khởi động." },
      { name: "Phạm Thu Hà", progress: 36, score: 5.8, status: "Cần hỗ trợ", note: "Bỏ 2 buổi tập, chưa nộp nhật ký luyện tập tuần này." },
      { name: "Vũ Minh Khang", progress: 71, score: 7.8, status: "Đang học", note: "Tiếp đất nhảy xa còn ngồi ra sau, cần tập từ bục thấp." },
      { name: "Đỗ Thùy Dương", progress: 55, score: 6.9, status: "Đang học", note: "Chưa quen đo mạch, nên hướng dẫn cách đếm 15 giây." }
    ],
    submissions: [
      { student: "Nguyễn Đức Thịnh", lesson: "Nhật ký luyện tập tuần 6", time: "Hôm qua 20:40", status: "Chờ chấm" },
      { student: "Phạm Thu Hà", lesson: "Phiếu tự đánh giá kỹ thuật chạy", time: "Hôm qua 17:55", status: "Chờ chấm" },
      { student: "Lê Hoàng Phúc", lesson: "Video phân tích động tác nhảy xa", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Sáu kiểm tra kỹ thuật xuất phát thấp, học sinh mang giày đinh.",
      "Nhật ký luyện tập nộp trước 20 giờ Chủ nhật hằng tuần.",
      "Học sinh bị đau cơ kéo dài trên 3 ngày cần báo giáo viên trước buổi tập sau."
    ]
  },
  className: "Giáo dục thể chất 10 – Lớp 10A3",
  brief: "BTL-32_sportcoach-mon-the-duc.md"
};
