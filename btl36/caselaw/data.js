window.BTL_DATA = {
  id: "caselaw",
  code: "BTL-16",
  name: "CaseLaw",
  monogram: "§",
  subject: "Pháp luật đại cương",
  level: "Đại học",
  group: "Kinh tế & Pháp luật",
  accent: "#92400e",
  accent2: "#1e40af",
  font: "serif",
  tagline: "Trả lời từng câu hỏi pháp lý để đi đến kết luận có căn cứ, thay vì học thuộc điều luật.",
  intro: "CaseLaw biến việc áp dụng pháp luật thành một cây quyết định: mỗi câu hỏi thu hẹp tình huống, mỗi nhánh dẫn tới một kết luận kèm điều luật và lưu ý. Sinh viên còn được phân tích hợp đồng theo từng điều khoản và luyện tình huống có giải thích ngay.",
  hero: { title: "Áp dụng luật", highlight: "theo từng nhánh quyết định" },
  heroBadge: "Cây pháp lý · Kết luận có căn cứ",
  labShort: "CÂY QUYẾT ĐỊNH",
  labTag: "PHÒNG LAB",
  practiceTag: "TÌNH HUỐNG",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ điều luật" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách luyện Pháp luật đại cương: đi cây quyết định, bấm từng điều khoản hợp đồng và xử lý tình huống có giải thích.",
  pathLead: "Đi từ nền tảng nhà nước và pháp luật, sang quan hệ pháp luật cùng hợp đồng, rồi kết thúc ở trách nhiệm pháp lý và các cách giải quyết tranh chấp.",
  features: [
    { badge: "01", title: "Cây quyết định pháp lý", desc: "Mỗi tình huống hiện thành các câu hỏi có điều kiện, bấm Có hoặc Không để đi tới kết luận kèm căn cứ điều luật áp dụng." },
    { badge: "02", title: "Phân tích hợp đồng theo điều khoản", desc: "Hợp đồng mẫu tách thành từng điều khoản bấm được, gắn với tình huống để xác định bên vi phạm và trách nhiệm phát sinh." },
    { badge: "03", title: "Trắc nghiệm tình huống", desc: "Mỗi câu là một tình huống ngắn, chọn xong hiện ngay giải thích vì sao đúng và vì sao các phương án còn lại sai." }
  ],
  life: [
    {
      title: "Nội quy ký túc xá dán ở cửa",
      scene: "Tấm bảng nội quy ký túc xá ghi: sinh viên ở phòng tập thể không được dùng bếp điện trong phòng; ai vi phạm lần đầu bị nhắc nhở, tái phạm thì buộc chuyển ra ngoài. Bạn cùng phòng đọc xong vẫn thắc mắc vì sao tấm bảng đó có hiệu lực.",
      connect: "Câu ghi đó có đủ ba bộ phận của một quy phạm: đối tượng và hoàn cảnh là phần giả định, việc không được nấu là phần quy định, mức xử lý là phần chế tài. Nội quy cũng không được trái quy chế trường và pháp luật."
    },
    {
      title: "Mua xe đạp cũ của anh khóa trên",
      scene: "Một bạn mua lại chiếc xe đạp cũ giá 700 nghìn đồng từ anh khóa trên, hẹn cuối tuần giao xe và trả đủ tiền. Hôm sau có người báo chiếc xe đó là xe bị mất cắp ở khu trọ bên cạnh, và anh bán xe không xuất trình giấy tờ gì.",
      connect: "Người mua và người bán là chủ thể, chiếc xe là khách thể, việc giao xe và trả tiền là nội dung của quan hệ pháp luật. Vì tài sản không có nguồn gốc hợp pháp nên giao dịch vô hiệu, người mua mất xe dù đã trả tiền."
    },
    {
      title: "Va quẹt xe ở ngã tư",
      scene: "Tan học, hai bạn sinh viên va quẹt xe máy ở ngã tư, một người xước tay và đèn xe bị vỡ. Cảnh sát giao thông lập biên bản và phạt một bên vì vượt đèn đỏ, sau đó hai gia đình phải thỏa thuận tiền sửa xe và viện phí.",
      connect: "Vụ nhỏ này đủ ba loại trách nhiệm: phạt hành chính với lỗi vượt đèn đỏ, bồi thường dân sự cho đèn xe và viện phí, nếu thương tích nặng thì chuyển sang hình sự. Trình tự thường là thương lượng trước rồi hòa giải."
    }
  ],
  modules: [
    {
      title: "Nhà nước và pháp luật",
      summary: "Nắm bản chất pháp luật, cấu trúc quy phạm và thứ bậc văn bản trước khi áp dụng vào tình huống.",
      lessons: [
        {
          id: "pl1",
          title: "Bản chất, chức năng và vai trò của pháp luật",
          minutes: 16,
          level: "Cơ bản",
          summary: "Nhận diện ba tính chất của pháp luật và phân biệt pháp luật với các quy tắc xã hội khác.",
          points: [
            "Pháp luật do nhà nước ban hành hoặc thừa nhận.",
            "Pháp luật mang tính quy phạm, quyền lực nhà nước và phổ biến.",
            "Pháp luật điều chỉnh, giáo dục và bảo vệ các quan hệ xã hội."
          ],
          steps: [
            { title: "Phân biệt pháp luật với đạo đức", body: "Chen ngang khi xếp hàng bị xã hội phê phán nhưng không bị xử phạt, còn chạy xe vượt đèn đỏ bị xử phạt hành chính. Pháp luật là quy tắc xử sự chung do nhà nước ban hành và bảo đảm thực hiện bằng quyền lực nhà nước. Đạo đức tác động bằng dư luận, pháp luật tác động bằng chế tài.", tip: "Hỏi: nếu vi phạm thì có chế tài nhà nước hay chỉ bị dư luận phê phán." },
            { title: "Ba tính chất cơ bản", body: "Tính quy phạm thể hiện ở việc đặt ra khuôn mẫu xử sự chung cho nhiều người, nhiều lần. Tính quyền lực nhà nước thể hiện ở chỗ mọi chủ thể phải tuân thủ, không ai đứng ngoài pháp luật. Tính phổ biến thể hiện ở việc áp dụng cho mọi người trong phạm vi điều chỉnh, không phân biệt.", tip: "Ba tính chất này dùng để giải thích vì sao pháp luật khác tập quán." },
            { title: "Chức năng và vai trò", body: "Chức năng điều chỉnh định hướng hành vi, chức năng giáo dục hình thành thói quen tuân thủ, chức năng bảo vệ xử lý hành vi xâm phạm. Vai trò xã hội thể hiện rõ ở việc pháp luật ghi nhận và bảo vệ quyền sở hữu, quyền tự do kinh doanh. Ở Việt Nam, pháp luật còn là công cụ quản lý kinh tế và ổn định xã hội.", tip: "Lấy một luật cụ thể rồi chỉ ra ba chức năng của luật đó." }
          ]
        },
        {
          id: "pl2",
          title: "Cấu trúc quy phạm pháp luật ba bộ phận",
          minutes: 18,
          level: "Cơ bản",
          summary: "Tách một quy phạm thành giả định, quy định, chế tài và nhận diện các kiểu quy phạm thường gặp.",
          points: [
            "Giả định nêu điều kiện và chủ thể áp dụng.",
            "Quy định nêu cách xử sự được phép hoặc bắt buộc.",
            "Chế tài nêu hậu quả khi không thực hiện đúng."
          ],
          steps: [
            { title: "Ba bộ phận trong một câu", body: "Xét quy định về nồng độ cồn khi lái xe: phần giả định là người điều khiển xe mô tô có nồng độ cồn vượt mức cho phép, phần quy định là hành vi bị nghiêm cấm, phần chế tài là mức phạt tiền và tước giấy phép. Ba phần này có thể nằm ở các điều khác nhau trong cùng văn bản. Khi áp dụng phải ghép đủ ba phần mới ra kết luận.", tip: "Gạch chân ba phần bằng ba ký hiệu khác nhau khi đọc điều luật." },
            { title: "Ba kiểu quy phạm", body: "Quy phạm mệnh lệnh buộc phải làm hoặc cấm làm, quy phạm tùy nghi cho phép lựa chọn cách xử sự, quy phạm hướng dẫn giải thích cách hiểu và cách áp dụng. Ví dụ điều luật cho phép các bên tự thỏa thuận giá là quy phạm tùy nghi. Nhận đúng kiểu quy phạm giúp biết chỗ nào được thương lượng.", tip: "Từ ngữ mách bảo: phải, không được là mệnh lệnh; có thể, được là tùy nghi." },
            { title: "Chế tài và mục đích", body: "Chế tài không chỉ để trừng phạt mà còn để phòng ngừa và khôi phục. Chế tài dân sự buộc bồi thường nhằm khôi phục tình trạng tài sản, chế tài hình sự nhằm răn đe và giáo dục. Vì thế cùng một hành vi có thể chịu nhiều loại trách nhiệm nếu xâm phạm nhiều quan hệ khác nhau.", tip: "Với mỗi chế tài, viết mục đích chính là khôi phục hay răn đe." }
          ],
          formula: "Quy phạm = Giả định + Quy định + Chế tài"
        },
        {
          id: "pl3",
          title: "Hệ thống văn bản quy phạm pháp luật",
          minutes: 20,
          level: "Trung bình",
          summary: "Sắp thứ bậc văn bản và xác định hiệu lực theo thời gian, không gian, đối tượng.",
          points: [
            "Hiến pháp có hiệu lực cao nhất, các văn bản khác không được trái.",
            "Văn bản cấp dưới chỉ được quy định trong phạm vi được giao.",
            "Xung đột thì áp dụng văn bản có hiệu lực pháp lý cao hơn."
          ],
          steps: [
            { title: "Thứ bậc văn bản", body: "Thứ bậc đi từ Hiến pháp, luật và bộ luật, nghị quyết của Quốc hội, rồi nghị định của Chính phủ, thông tư của bộ và văn bản của địa phương. Mỗi văn bản chỉ được quy định vấn đề thuộc thẩm quyền của mình. Một thông tư không thể đặt ra mức phạt cao hơn khung hình phạt do luật quy định.", tip: "Vẽ sơ đồ bậc thang và đặt tên văn bản vào từng bậc." },
            { title: "Hiệu lực theo thời gian", body: "Văn bản có hiệu lực từ ngày ghi trong văn bản, nếu không ghi thì sau 45 ngày kể từ ngày ban hành với văn bản của cơ quan trung ương. Nguyên tắc không hồi tố bảo vệ người dân, trừ trường hợp văn bản mới có lợi hơn thì được áp dụng cho hành vi xảy ra trước. Vì thế phải kiểm tra đúng thời điểm phát sinh tình huống.", tip: "Xác định ngày xảy ra hành vi trước, rồi mới tra văn bản đang có hiệu lực." },
            { title: "Hiệu lực theo không gian và đối tượng", body: "Văn bản trung ương áp dụng trên toàn quốc, văn bản địa phương chỉ trong địa bàn và không được trái văn bản cấp trên. Hiệu lực theo đối tượng xác định ai phải tuân thủ: cơ quan nhà nước, doanh nghiệp hay mọi công dân. Khi tình huống có yếu tố nước ngoài, cần xác định luật áp dụng theo quy định về xung đột pháp luật.", tip: "Kiểm tra ba câu hỏi: ở đâu, khi nào, ai." }
          ]
        }
      ]
    },
    {
      title: "Quan hệ pháp luật và hợp đồng",
      summary: "Xác định chủ thể, quyền, nghĩa vụ và điều kiện để một hợp đồng có hiệu lực.",
      lessons: [
        {
          id: "pl4",
          title: "Quan hệ pháp luật: chủ thể, khách thể, nội dung",
          minutes: 20,
          level: "Trung bình",
          summary: "Phân tích một quan hệ pháp luật cụ thể qua ba yếu tố và sự kiện làm nó phát sinh.",
          points: [
            "Chủ thể phải có năng lực pháp luật và năng lực hành vi.",
            "Khách thể là lợi ích mà quan hệ hướng tới.",
            "Sự kiện pháp lý làm phát sinh, thay đổi hoặc chấm dứt quan hệ."
          ],
          steps: [
            { title: "Ba yếu tố của quan hệ", body: "Trong hợp đồng thuê nhà, chủ thể là bên thuê và bên cho thuê, khách thể là quyền sử dụng căn nhà, nội dung là quyền nhận nhà và nghĩa vụ trả tiền. Thiếu một yếu tố thì quan hệ không hình thành đầy đủ. Khi giải bài tập, hãy liệt kê đủ ba yếu tố trước khi kết luận ai vi phạm.", tip: "Kẻ bảng ba cột chủ thể, khách thể, nội dung cho mọi tình huống." },
            { title: "Năng lực pháp luật và năng lực hành vi", body: "Năng lực pháp luật dân sự là khả năng có quyền và nghĩa vụ, ai cũng có từ khi sinh ra. Năng lực hành vi là khả năng tự mình xác lập và thực hiện quyền, nghĩa vụ, phụ thuộc độ tuổi và khả năng nhận thức. Người chưa đủ 6 tuổi không tự giao kết hợp đồng, giao dịch do người đại diện xác lập.", tip: "Nhớ mốc 6 tuổi, 15 tuổi và 18 tuổi khi xét giao dịch của người chưa thành niên." },
            { title: "Sự kiện pháp lý", body: "Sự kiện pháp lý là những việc xảy ra làm phát sinh, thay đổi hoặc chấm dứt quan hệ pháp luật. Ký hợp đồng là sự kiện pháp lý do hành vi con người, còn bão làm sập nhà là sự kiện do tự nhiên. Sự kiện tự nhiên không phải lúc nào cũng miễn trừ trách nhiệm, phải xét có phải bất khả kháng hay không.", tip: "Phân biệt sự kiện do hành vi và sự kiện tự nhiên trước khi xét trách nhiệm." }
          ]
        },
        {
          id: "pl5",
          title: "Giao kết và điều kiện có hiệu lực của hợp đồng",
          minutes: 22,
          level: "Trung bình",
          summary: "Kiểm tra bốn điều kiện có hiệu lực và nhận diện các trường hợp hợp đồng vô hiệu.",
          points: [
            "Chủ thể có năng lực, tham gia hoàn toàn tự nguyện.",
            "Nội dung và mục đích không vi phạm điều cấm của luật.",
            "Hình thức phải đúng quy định khi luật yêu cầu."
          ],
          steps: [
            { title: "Đề nghị và chấp nhận", body: "Giao kết bắt đầu bằng một bên đưa ra đề nghị có nội dung đủ rõ về hàng hóa, giá và thời hạn, bên kia chấp nhận trong thời hạn đó. Im lặng không mặc nhiên là chấp nhận, trừ khi hai bên đã có thỏa thuận hoặc thói quen như vậy. Thời điểm hợp đồng có hiệu lực thường là khi bên đề nghị nhận được chấp nhận.", tip: "Xác định rõ ai đề nghị, ai chấp nhận, chấp nhận lúc nào." },
            { title: "Bốn điều kiện có hiệu lực", body: "Hợp đồng có hiệu lực khi chủ thể có năng lực hành vi, tham gia hoàn toàn tự nguyện, nội dung và mục đích không vi phạm điều cấm, không trái đạo đức xã hội. Điều kiện thứ tư về hình thức chỉ bắt buộc khi luật có quy định như hợp đồng mua bán nhà phải công chứng. Thiếu bất kỳ điều kiện nào thì hợp đồng có thể bị tuyên vô hiệu.", tip: "Kiểm bốn điều kiện theo thứ tự và ghi rõ điều kiện nào có vấn đề." },
            { title: "Các trường hợp vô hiệu", body: "Hợp đồng vô hiệu khi chủ thể không có năng lực, bị lừa dối hoặc đe dọa, khi giả tạo để che giấu giao dịch khác, hoặc khi nội dung vi phạm điều cấm. Ví dụ bán xe nhưng lập hợp đồng tặng cho để trốn thuế là giao dịch giả tạo. Hợp đồng vô hiệu không làm phát sinh quyền, nghĩa vụ và các bên phải hoàn trả cho nhau.", tip: "Giao dịch giả tạo thường lộ ra ở chênh lệch giữa giá ghi và giá thực tế." }
          ],
          formula: "Hiệu lực = Năng lực + Tự nguyện + Nội dung hợp pháp + Hình thức hợp lệ"
        },
        {
          id: "pl6",
          title: "Vi phạm hợp đồng và trách nhiệm dân sự",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân loại hành vi vi phạm và chọn đúng chế tài cùng căn cứ miễn trừ trách nhiệm.",
          points: [
            "Vi phạm gồm không thực hiện, thực hiện không đúng và chậm thực hiện.",
            "Chế tài gồm buộc thực hiện, phạt vi phạm, bồi thường, hủy hợp đồng.",
            "Bất khả kháng và lỗi của bên bị thiệt hại có thể miễn trừ trách nhiệm."
          ],
          steps: [
            { title: "Phân loại hành vi vi phạm", body: "Giao hàng chậm 10 ngày là chậm thực hiện nghĩa vụ, giao sai chủng loại là thực hiện không đúng, không giao hàng là không thực hiện. Mỗi loại dẫn tới chế tài khác nhau và cách tính thiệt hại khác nhau. Trong hợp đồng mua bán, giao đủ số lượng nhưng sai chất lượng vẫn là vi phạm dù số lượng đúng.", tip: "Đọc nghĩa vụ trong hợp đồng rồi đối chiếu từng tiêu chí số lượng, chất lượng, thời hạn." },
            { title: "Bốn chế tài chính", body: "Buộc thực hiện đúng hợp đồng giữ mục đích ban đầu, phạt vi phạm trừng phạt theo thỏa thuận, bồi thường thiệt hại khôi phục tổn thất, hủy hợp đồng chấm dứt quan hệ. Bên bị vi phạm có thể áp dụng đồng thời phạt vi phạm và bồi thường nếu có thỏa thuận. Chọn sai chế tài làm yêu cầu bị bác dù có căn cứ.", tip: "Gắn mỗi chế tài với mục đích: giữ hợp đồng, trừng phạt hay khôi phục." },
            { title: "Căn cứ miễn trừ trách nhiệm", body: "Bất khả kháng là sự kiện khách quan không thể lường trước và không thể khắc phục dù đã áp dụng mọi biện pháp cần thiết, như bão làm sập kho hàng. Bên vi phạm phải chứng minh và thông báo kịp thời về sự kiện đó. Ngoài ra thiệt hại xảy ra một phần do lỗi của bên bị vi phạm thì phần thiệt hại do lỗi đó không được bồi thường.", tip: "Sự kiện khó khăn về tài chính không phải bất khả kháng." }
          ]
        }
      ]
    },
    {
      title: "Trách nhiệm pháp lý và giải quyết tranh chấp",
      summary: "Phân biệt bốn loại trách nhiệm và chọn đúng đường đi khi tranh chấp phát sinh.",
      lessons: [
        {
          id: "pl7",
          title: "Bốn loại trách nhiệm pháp lý",
          minutes: 18,
          level: "Trung bình",
          summary: "Phân biệt trách nhiệm hình sự, dân sự, hành chính và kỷ luật theo chủ thể và biện pháp.",
          points: [
            "Trách nhiệm hình sự do tòa án áp dụng với hành vi phạm tội.",
            "Trách nhiệm hành chính xử lý vi phạm quy định quản lý nhà nước.",
            "Trách nhiệm dân sự và kỷ luật điều chỉnh quan hệ giữa các bên."
          ],
          steps: [
            { title: "Trách nhiệm hình sự", body: "Chỉ áp dụng với hành vi được Bộ luật Hình sự quy định là tội phạm và do tòa án tuyên. Chế tài gồm cảnh cáo, phạt tiền, cải tạo không giam giữ, tù có thời hạn, tù chung thân. Ví dụ trộm cắp tài sản trị giá từ 2 triệu đồng có thể bị truy cứu trách nhiệm hình sự tùy tình tiết.", tip: "Xác định trước hành vi có được quy định trong Bộ luật Hình sự hay không." },
            { title: "Trách nhiệm hành chính", body: "Áp dụng với cá nhân, tổ chức vi phạm quy định về quản lý nhà nước như giao thông, thuế, môi trường. Chế tài gồm cảnh cáo, phạt tiền, tước quyền sử dụng giấy phép, tịch thu tang vật. Cơ quan hành chính ra quyết định xử phạt, người bị phạt có quyền khiếu nại.", tip: "Cùng một hành vi vẫn có thể vừa bị phạt hành chính vừa phải bồi thường dân sự." },
            { title: "Trách nhiệm dân sự và kỷ luật", body: "Trách nhiệm dân sự phát sinh giữa các chủ thể bình đẳng khi vi phạm nghĩa vụ hợp đồng hoặc gây thiệt hại ngoài hợp đồng, chế tài là bồi thường và buộc thực hiện. Trách nhiệm kỷ luật do cơ quan, doanh nghiệp áp dụng với người lao động vi phạm nội quy, chế tài là khiển trách, kéo dài thời hạn nâng lương, cách chức, sa thải. Hai loại này khác nhau ở chủ thể có quyền xử lý.", tip: "Hỏi: ai có quyền ra quyết định, và quan hệ giữa hai bên là bình đẳng hay phụ thuộc." }
          ]
        },
        {
          id: "pl8",
          title: "Phạt vi phạm và bồi thường thiệt hại",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt hai chế tài và áp dụng đúng giới hạn 8 phần trăm cùng nghĩa vụ chứng minh thiệt hại.",
          points: [
            "Phạt vi phạm cần thỏa thuận trước, không cần chứng minh thiệt hại.",
            "Bồi thường cần chứng minh thiệt hại, mức độ và quan hệ nhân quả.",
            "Mức phạt không quá 8 phần trăm giá trị phần nghĩa vụ bị vi phạm."
          ],
          steps: [
            { title: "Hai chế tài khác nhau ở đâu", body: "Phạt vi phạm chỉ áp dụng khi hợp đồng có điều khoản phạt và mức phạt cụ thể, bên bị vi phạm không phải chứng minh thiệt hại. Bồi thường thiệt hại đòi hỏi chứng minh thiệt hại thực tế, mức thiệt hại và quan hệ nhân quả với hành vi vi phạm. Vì thế hợp đồng không có điều khoản phạt thì chỉ còn đường bồi thường.", tip: "Hỏi ngay: hợp đồng có điều khoản phạt không, trước khi bàn tới con số." },
            { title: "Giới hạn 8 phần trăm", body: "Theo Điều 418 Bộ luật Dân sự 2015, mức phạt do các bên thỏa thuận nhưng không quá 8 phần trăm giá trị phần nghĩa vụ bị vi phạm với hợp đồng dân sự thông thường. Hợp đồng thương mại cũng áp dụng mức trần này theo Luật Thương mại 2005. Nếu thỏa thuận 15 phần trăm, phần vượt quá 8 phần trăm không có hiệu lực.", tip: "Tính trên giá trị phần nghĩa vụ bị vi phạm, không phải toàn bộ giá trị hợp đồng." },
            { title: "Áp dụng đồng thời và lưu ý", body: "Bên bị vi phạm được đòi cả phạt vi phạm và bồi thường nếu có thỏa thuận về phạt, nhưng tổng số không được vượt quá thiệt hại thực tế cộng phần phạt hợp lệ. Ngoài ra còn được đòi lãi trên số tiền chậm thanh toán. Khi soạn hợp đồng, nên ghi rõ mức phạt theo phần trăm và cơ chế tính lãi chậm trả để tránh tranh cãi.", tip: "Đặt mức phạt 8 phần trăm và ghi rõ lãi chậm trả ngay trong hợp đồng." }
          ],
          formula: "Mức phạt hợp lệ ≤ 8% × giá trị phần nghĩa vụ bị vi phạm"
        },
        {
          id: "pl9",
          title: "Thương lượng, hòa giải, trọng tài và tòa án",
          minutes: 26,
          level: "Nâng cao",
          summary: "So sánh bốn phương thức giải quyết tranh chấp và xác định thời hiệu khởi kiện.",
          points: [
            "Thương lượng và hòa giải giữ được quan hệ hợp tác.",
            "Trọng tài cần thỏa thuận trước và phán quyết chung thẩm.",
            "Thời hiệu khởi kiện tranh chấp hợp đồng dân sự là 3 năm."
          ],
          steps: [
            { title: "Thương lượng và hòa giải", body: "Thương lượng là hai bên tự bàn, không cần người thứ ba, giữ được quan hệ và tiết kiệm chi phí. Hòa giải có người thứ ba hỗ trợ, kết quả hòa giải thành có thể được tòa án công nhận để bảo đảm thi hành. Với tranh chấp thương mại, hòa giải thường là bước bắt buộc trước khi khởi kiện theo thỏa thuận hợp đồng.", tip: "Lưu lại biên bản thương lượng, hòa giải vì đây là chứng cứ về thiện chí." },
            { title: "Trọng tài thương mại", body: "Trọng tài chỉ có thẩm quyền khi các bên có thỏa thuận trọng tài hợp lệ, bằng văn bản và xác định rõ vấn đề tranh chấp. Phán quyết trọng tài có hiệu lực chung thẩm, không bị kháng cáo theo trình tự tòa án, chỉ có thể yêu cầu hủy trong các trường hợp luật định. Ưu điểm là nhanh và kín, nhược điểm là chi phí cao với tranh chấp nhỏ.", tip: "Kiểm tra điều khoản trọng tài trước khi tranh chấp xảy ra, không phải sau." },
            { title: "Tòa án và thời hiệu", body: "Tòa án giải quyết theo trình tự sơ thẩm và phụ thẩm, bản án có thể bị kháng cáo. Thời hiệu khởi kiện tranh chấp hợp đồng dân sự là 3 năm kể từ ngày người có quyền biết quyền lợi bị xâm phạm. Hết thời hiệu thì quyền khởi kiện vẫn còn nhưng nghĩa vụ chứng minh và khả năng được chấp nhận giảm mạnh.", tip: "Ghi mốc ngày vi phạm vào hồ sơ để không bỏ lỡ thời hiệu 3 năm." }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { front: "Quy phạm pháp luật", back: "Quy tắc xử sự chung do nhà nước ban hành hoặc thừa nhận, có cấu trúc giả định, quy định, chế tài.", hint: "Ba bộ phận hợp thành.", example: "Quy định cấm lái xe khi vượt nồng độ cồn kèm mức phạt." },
    { front: "Chế tài", back: "Bộ phận quy phạm nêu hậu quả bất lợi mà chủ thể phải gánh chịu khi không thực hiện đúng quy định.", hint: "Hậu quả pháp lý.", example: "Phạt tiền và tước giấy phép khi vi phạm nồng độ cồn." },
    { front: "Tính quy phạm phổ biến", back: "Pháp luật đặt ra khuôn mẫu xử sự chung, áp dụng nhiều lần với nhiều chủ thể trong phạm vi điều chỉnh.", hint: "Khuôn mẫu chung, không cá biệt.", example: "Luật Giao thông áp dụng cho mọi người tham gia giao thông." },
    { front: "Hiệu lực của văn bản pháp luật", back: "Giới hạn về thời gian, không gian và đối tượng mà văn bản được áp dụng.", hint: "Khi nào, ở đâu, với ai.", example: "Thông tư của bộ áp dụng toàn quốc từ ngày ghi trong thông tư." },
    { front: "Quan hệ pháp luật", back: "Quan hệ xã hội được pháp luật điều chỉnh, gồm chủ thể, khách thể và nội dung là quyền, nghĩa vụ.", hint: "Ba yếu tố cấu thành.", example: "Quan hệ thuê nhà giữa bên thuê và bên cho thuê." },
    { front: "Năng lực hành vi dân sự", back: "Khả năng tự mình xác lập và thực hiện quyền, nghĩa vụ dân sự, phụ thuộc độ tuổi và khả năng nhận thức.", hint: "Khác với năng lực pháp luật.", example: "Người chưa đủ 6 tuổi không tự giao kết hợp đồng." },
    { front: "Sự kiện pháp lý", back: "Sự việc xảy ra làm phát sinh, thay đổi hoặc chấm dứt quan hệ pháp luật.", hint: "Có thể do hành vi hoặc do tự nhiên.", example: "Ký hợp đồng làm phát sinh nghĩa vụ giao hàng." },
    { front: "Hợp đồng vô hiệu", back: "Hợp đồng không làm phát sinh quyền, nghĩa vụ do thiếu điều kiện có hiệu lực, các bên phải hoàn trả cho nhau.", hint: "Không có giá trị ràng buộc.", example: "Lập hợp đồng tặng cho xe để che giấu việc mua bán trốn thuế." },
    { front: "Trách nhiệm dân sự", back: "Trách nhiệm giữa các chủ thể bình đẳng khi vi phạm nghĩa vụ hợp đồng hoặc gây thiệt hại ngoài hợp đồng.", hint: "Bồi thường và buộc thực hiện.", example: "Giao hàng sai chất lượng phải bồi thường thiệt hại." },
    { front: "Phạt vi phạm hợp đồng", back: "Chế tài do các bên thỏa thuận trước, áp dụng khi có vi phạm mà không cần chứng minh thiệt hại.", hint: "Cần điều khoản phạt trong hợp đồng.", example: "Phạt 8 phần trăm giá trị phần nghĩa vụ bị vi phạm." },
    { front: "Bất khả kháng", back: "Sự kiện khách quan không lường trước và không thể khắc phục dù đã áp dụng mọi biện pháp cần thiết.", hint: "Căn cứ miễn trừ trách nhiệm.", example: "Bão lớn làm sập kho hàng đúng hạn giao." },
    { front: "Thời hiệu khởi kiện hợp đồng dân sự", back: "Thời hạn 3 năm kể từ ngày người có quyền biết quyền lợi bị xâm phạm, hết hạn thì việc khởi kiện gặp bất lợi.", hint: "Ba năm, không phải một năm.", example: "Vi phạm tháng 3 năm 2023 thì mốc cuối là tháng 3 năm 2026." }
  ],
  quiz: [
    { q: "Quy phạm pháp luật gồm ba bộ phận nào?", options: ["Giả định, quy định, chế tài", "Chủ thể, khách thể, nội dung", "Quyền, nghĩa vụ, trách nhiệm", "Điều, khoản, điểm"], answer: 0, explain: "Cấu trúc logic của quy phạm gồm điều kiện áp dụng, cách xử sự và hậu quả khi không tuân thủ." },
    { q: "Hợp đồng bị coi là vô hiệu do giả tạo khi nào?", options: ["Hai bên chỉ thỏa thuận bằng lời nói", "Nội dung hợp đồng do một bên tự soạn", "Các bên xác lập giao dịch nhằm che giấu một giao dịch khác", "Hợp đồng không có người làm chứng"], answer: 2, explain: "Giao dịch giả tạo bị vô hiệu, còn giao dịch bị che giấu vẫn được xem xét theo quy định riêng." },
    { q: "Theo Bộ luật Dân sự 2015, mức phạt vi phạm hợp đồng do các bên thỏa thuận không quá:", options: ["5 phần trăm giá trị phần nghĩa vụ bị vi phạm", "8 phần trăm giá trị phần nghĩa vụ bị vi phạm", "10 phần trăm giá trị hợp đồng", "20 phần trăm giá trị hợp đồng"], answer: 1, explain: "Điều 418 khống chế mức phạt tối đa 8 phần trăm giá trị phần nghĩa vụ bị vi phạm." },
    { q: "Trách nhiệm hành chính được áp dụng với:", options: ["mọi tranh chấp dân sự giữa các cá nhân", "hành vi phạm tội nguy hiểm cho xã hội", "vi phạm nội quy lao động của doanh nghiệp", "cá nhân, tổ chức vi phạm quy định quản lý nhà nước"], answer: 3, explain: "Trách nhiệm hành chính xử lý vi phạm hành chính trong các lĩnh vực quản lý nhà nước." },
    { q: "Thời hiệu khởi kiện tranh chấp hợp đồng dân sự là bao lâu?", options: ["3 năm kể từ ngày biết quyền lợi bị xâm phạm", "1 năm kể từ ngày ký hợp đồng", "5 năm kể từ ngày vi phạm", "Không có thời hiệu"], answer: 0, explain: "Điều 429 Bộ luật Dân sự 2015 quy định thời hiệu 3 năm." },
    { q: "Đặc điểm của chế tài phạt vi phạm hợp đồng là:", options: ["buộc phải chứng minh thiệt hại thực tế", "áp dụng khi có thỏa thuận và không cần chứng minh thiệt hại", "chỉ do tòa án ấn định mức phạt", "không được áp dụng cùng bồi thường thiệt hại"], answer: 1, explain: "Phạt vi phạm dựa trên thỏa thuận trước, khác bồi thường là chế tài cần chứng minh thiệt hại." },
    { q: "Năng lực hành vi dân sự của cá nhân là:", options: ["khả năng có quyền và nghĩa vụ dân sự", "khả năng ký mọi hợp đồng ngay từ khi sinh ra", "khả năng tự mình xác lập và thực hiện quyền, nghĩa vụ dân sự", "tư cách pháp nhân của tổ chức"], answer: 2, explain: "Năng lực hành vi gắn với độ tuổi và khả năng nhận thức, khác năng lực pháp luật có từ khi sinh ra." },
    { q: "Khi các văn bản quy phạm pháp luật quy định khác nhau về cùng một vấn đề thì áp dụng:", options: ["văn bản ban hành sau cùng", "văn bản ban hành trước", "văn bản của địa phương", "văn bản có hiệu lực pháp lý cao hơn"], answer: 3, explain: "Nguyên tắc thứ bậc ưu tiên văn bản có hiệu lực pháp lý cao hơn." },
    { q: "Trọng tài thương mại khác tòa án ở điểm nào?", options: ["phán quyết không có giá trị pháp lý", "phán quyết có hiệu lực chung thẩm, không kháng cáo theo trình tự tòa án", "không cần thỏa thuận trọng tài", "chỉ giải quyết tranh chấp hình sự"], answer: 1, explain: "Trọng tài chỉ xét một lần và cần thỏa thuận trọng tài hợp lệ trước đó." },
    { q: "Sự kiện pháp lý là:", options: ["mọi sự việc xảy ra trong xã hội", "văn bản do cơ quan nhà nước ban hành", "sự việc làm phát sinh, thay đổi hoặc chấm dứt quan hệ pháp luật", "hành vi bị xử phạt hành chính"], answer: 2, explain: "Chỉ những sự việc có tác động làm thay đổi quan hệ pháp luật mới là sự kiện pháp lý." }
  ],
  lab: {
    kind: "tree",
    title: "Cây quyết định: xử lý vi phạm hợp đồng mua bán",
    lead: "Tình huống: bên bán đã giao đủ hàng nhưng bên mua chậm thanh toán. Trả lời ba câu hỏi để đi tới kết luận pháp lý kèm căn cứ áp dụng.",
    stageLabel: "Cây quyết định",
    controlNote: "Mỗi câu hỏi chỉ có hai nhánh. Đọc kỹ phần giải thích dưới câu hỏi trước khi chọn, vì chỉ cần sai một nhánh là kết luận sai theo.",
    note: "Cây này dựa trên Bộ luật Dân sự 2015, đặc biệt Điều 117 về điều kiện có hiệu lực, Điều 418 về phạt vi phạm và Điều 357 về lãi chậm thanh toán.",
    start: "q1",
    nodes: {
      q1: {
        q: "Hợp đồng mua bán đã được giao kết hợp pháp chưa?",
        body: "Kiểm tra ba điều kiện: chủ thể có năng lực hành vi, các bên tham gia hoàn toàn tự nguyện, nội dung và mục đích không vi phạm điều cấm của luật.",
        yes: "q2",
        no: "r1",
        yesLabel: "Đã hợp pháp",
        noLabel: "Không hợp pháp"
      },
      q2: {
        q: "Bên mua đã chậm thanh toán so với hạn ghi trong hợp đồng chưa?",
        body: "Đối chiếu ngày đến hạn với ngày thực tế nhận được tiền, có trừ thời gian gia hạn nếu hai bên đã thỏa thuận bằng văn bản. Cần giữ sao kê và biên bản giao hàng làm chứng cứ.",
        yes: "q3",
        no: "r2",
        yesLabel: "Đã chậm",
        noLabel: "Chưa chậm"
      },
      q3: {
        q: "Hợp đồng có điều khoản phạt vi phạm không?",
        body: "Tìm điều khoản phạt và mức phạt cụ thể. Mức phạt do các bên thỏa thuận nhưng không quá 8 phần trăm giá trị phần nghĩa vụ bị vi phạm.",
        yes: "r3",
        no: "r4",
        yesLabel: "Có điều khoản phạt",
        noLabel: "Không có điều khoản"
      },
      r1: {
        result: true,
        title: "Hợp đồng vô hiệu, không phát sinh nghĩa vụ phạt",
        body: "Hợp đồng không đáp ứng điều kiện có hiệu lực nên không làm phát sinh quyền và nghĩa vụ. Hai bên hoàn trả cho nhau những gì đã nhận, bên có lỗi làm hợp đồng vô hiệu phải bồi thường thiệt hại.",
        explain: "Căn cứ Điều 117 và Điều 131 Bộ luật Dân sự 2015. Nếu chỉ một phần nội dung vi phạm thì có thể chỉ phần đó vô hiệu, phần còn lại vẫn có hiệu lực."
      },
      r2: {
        result: true,
        title: "Chưa phát sinh vi phạm, nên gửi văn bản nhắc nợ trước hạn",
        body: "Bên mua chưa quá hạn nên chưa có căn cứ đòi lãi chậm trả hay phạt vi phạm. Bên bán nên gửi văn bản nhắc nợ ghi rõ số tiền, ngày đến hạn và đề nghị xác nhận, đồng thời lưu chứng từ giao hàng.",
        explain: "Văn bản nhắc nợ vừa giữ quan hệ hợp tác vừa tạo chứng cứ về việc đã thông báo nếu sau này phải khởi kiện."
      },
      r3: {
        result: true,
        title: "Được đòi tiền phạt theo thỏa thuận, tối đa 8 phần trăm giá trị phần nghĩa vụ bị vi phạm",
        body: "Bên bán có quyền yêu cầu tiền phạt theo điều khoản đã thỏa thuận và không phải chứng minh thiệt hại. Nếu mức thỏa thuận vượt 8 phần trăm giá trị phần nghĩa vụ bị vi phạm thì phần vượt không được chấp nhận. Ngoài tiền phạt, bên bán còn được đòi nợ gốc và lãi trên số tiền chậm trả.",
        explain: "Căn cứ Điều 418 và Điều 357 Bộ luật Dân sự 2015; hợp đồng thương mại áp dụng mức trần tương tự theo Luật Thương mại 2005. Muốn đòi thêm bồi thường thì phải chứng minh thiệt hại thực tế."
      },
      r4: {
        result: true,
        title: "Không có căn cứ phạt, chỉ đòi nợ gốc và lãi chậm trả",
        body: "Không có điều khoản phạt nên bên bán không thể tự đặt ra mức phạt. Bên bán vẫn được đòi đủ nợ gốc và lãi trên số tiền chậm trả theo lãi suất hai bên thỏa thuận, nếu không thỏa thuận thì theo lãi suất do Ngân hàng Nhà nước công bố.",
        explain: "Thiệt hại thực tế vẫn có thể yêu cầu bồi thường nhưng phải chứng minh được thiệt hại và mức thiệt hại, đây là điểm yếu so với việc có sẵn điều khoản phạt."
      }
    }
  },
  teacher: {
    students: [
      { name: "Nguyễn Thị Bích Ngọc", progress: 87, score: 8.7, status: "Tốt", note: "Phân tích tình huống chắc, cần luyện phần thời hiệu khởi kiện." },
      { name: "Trần Anh Dũng", progress: 53, score: 6.8, status: "Đang học", note: "Hay nhầm trách nhiệm hành chính với trách nhiệm dân sự." },
      { name: "Lê Hoàng Yến", progress: 93, score: 9.3, status: "Tốt", note: "Đi cây quyết định chính xác, lập luận có căn cứ điều luật." },
      { name: "Phạm Văn Lộc", progress: 27, score: 5.2, status: "Cần hỗ trợ", note: "Chưa nắm cấu trúc ba bộ phận của quy phạm pháp luật." },
      { name: "Vũ Thu Trang", progress: 64, score: 7.5, status: "Đang học", note: "Hiểu hợp đồng, cần ôn kỹ giới hạn 8 phần trăm khi phạt." },
      { name: "Đỗ Minh Quân", progress: 48, score: 6.4, status: "Đang học", note: "Nộp bài muộn, nên làm lại bài về sự kiện pháp lý." }
    ],
    submissions: [
      { student: "Nguyễn Thị Bích Ngọc", lesson: "Bài tập phân tích hợp đồng thuê nhà", time: "Hôm nay 08:55", status: "Chờ chấm" },
      { student: "Đỗ Minh Quân", lesson: "Phiếu trách nhiệm pháp lý", time: "Hôm qua 22:40", status: "Chờ chấm" },
      { student: "Lê Hoàng Yến", lesson: "Bài tập cây quyết định vi phạm hợp đồng", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Năm thảo luận tình huống hợp đồng mua bán, mỗi nhóm chuẩn bị một cây quyết định riêng.",
      "Bài kiểm tra giữa kỳ gồm hai tình huống pháp lý và một câu phân tích điều khoản hợp đồng.",
      "Sinh viên cần đọc trước Điều 117 và Điều 418 Bộ luật Dân sự 2015 cho buổi tới."
    ]
  },
  className: "Pháp luật đại cương – K26",
  brief: "BTL-16_caselaw-mon-luat.md"
};
