window.BTL_DATA = {
  id: "pharmalearn",
  code: "BTL-18",
  name: "PharmaLearn",
  monogram: "Rx",
  subject: "Dược lý",
  level: "Đại học",
  group: "Y & Sức khỏe",
  accent: "#7c3aed",
  accent2: "#0891b2",
  font: "display",
  tagline: "Nhìn đường cong nồng độ để hiểu vì sao cùng một liều lại cho hai thời gian tác dụng khác nhau.",
  intro: "PharmaLearn gắn mỗi quy tắc dược lý với một con số: nồng độ đỉnh, thời gian bán thải, khoảng cách liều và ngưỡng độc. Sinh viên đọc biểu đồ trước, rồi mới đi vào cơ chế và cách tính liều.",
  hero: { title: "Dược lý", highlight: "đọc được đường cong nồng độ" },
  heroBadge: "Dược động học · Tính liều an toàn",
  labShort: "NỒNG ĐỘ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ ghi nhớ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách học được chọn cho Dược lý: nhìn đường cong, tính liều theo bước và ghi nhớ cặp tương tác nguy hiểm.",
  pathLead: "Từ hấp thu và thải trừ, sang cơ chế tác dụng ở thụ thể, rồi đến an toàn dùng thuốc. Cuối mỗi chương đều có bài tính toán để kiểm chứng bằng số.",
  features: [
    { badge: "01", title: "Đường cong nồng độ theo giờ", desc: "So sánh hai thuốc cùng liều nhưng khác thời gian bán thải, thấy rõ khoảng cách liều cần thiết để giữ nồng độ trong cửa sổ điều trị." },
    { badge: "02", title: "Bài tính liều từng bước", desc: "Mỗi bài tách thành bước xác định cân nặng, liều trên kg, giới hạn tối đa và hiệu chỉnh theo chức năng thận." },
    { badge: "03", title: "Thẻ cặp tương tác", desc: "Mười hai thẻ ghi nhớ ưu tiên các cặp tương tác nghiêm trọng kèm cơ chế, ví dụ simvastatin với clarithromycin." }
  ],
  modules: [
    {
      title: "Dược động học",
      summary: "Hấp thu, phân bố, chuyển hóa, thải trừ và các tham số quyết định khoảng cách liều.",
      lessons: [
        {
          id: "dk1",
          title: "Bốn giai đoạn ADME",
          minutes: 22,
          level: "Cơ bản",
          summary: "Đi theo một viên thuốc từ lúc uống đến lúc ra khỏi cơ thể qua bốn giai đoạn.",
          points: ["Hấp thu phụ thuộc đường dùng, độ tan và diện tích niêm mạc.", "Phân bố phụ thuộc tuần hoàn và mức gắn protein huyết tương.", "Chuyển hóa chủ yếu ở gan qua hệ enzym cytochrome P450."],
          steps: [
            { title: "Hấp thu", body: "Thuốc uống được hấp thu chủ yếu ở ruột non vì diện tích nhung mao rất lớn, sau đó qua gan trước khi vào tuần hoàn chung. Hiện tượng này gọi là chuyển hóa qua gan lần đầu, làm giảm lượng thuốc thực sự đến mô đích. Tiêm tĩnh mạch bỏ qua bước hấp thu nên sinh khả dụng đạt 100 phần trăm.", tip: "Thuốc bị chuyển hóa mạnh qua gan thường phải dùng đường tiêm hoặc tăng liều uống." },
            { title: "Phân bố", body: "Thuốc gắn albumin thì phần gắn không có tác dụng, chỉ phần tự do đi vào mô. Thể tích phân bố lớn cho thấy thuốc phân tán nhiều vào mô, ví dụ digoxin có thể tích phân bố rất lớn. Hàng rào máu não và nhau thai là hai màng chắn cần lưu ý khi kê đơn.", tip: "Giảm albumin máu làm tăng phần thuốc tự do và tăng nguy cơ độc dù tổng liều không đổi." },
            { title: "Chuyển hóa và thải trừ", body: "Pha I dùng CYP450 để oxy hóa, khử hoặc thủy phân, pha II gắn glucuronid hoặc sulfat để dễ tan trong nước. Thận thải thuốc qua lọc cầu thận, tiết ống thận và tái hấp thu. Các thuốc như paracetamol phụ thuộc pha II, nên khi quá liều sẽ cạn glutathione và sinh chất độc.", tip: "Suy thận làm tăng nồng độ thuốc thải qua thận, phải giảm liều theo độ lọc cầu thận." }
          ],
          formula: "ADME: hấp thu, phân bố, chuyển hóa, thải trừ"
        },
        {
          id: "dk2",
          title: "Thời gian bán thải và trạng thái ổn định",
          minutes: 24,
          level: "Trung bình",
          summary: "Tính số lần thải trừ sau mỗi chu kỳ bán thải và xác định thời điểm đạt nồng độ ổn định.",
          points: ["Sau một thời gian bán thải, nồng độ còn lại 50 phần trăm.", "Sau khoảng 4 đến 5 lần thời gian bán thải, thuốc đạt trạng thái ổn định.", "Thuốc có thời gian bán thải ngắn cần dùng nhiều lần trong ngày hoặc dạng phóng thích chậm."],
          steps: [
            { title: "Đường cong thải trừ bậc một", body: "Phần lớn thuốc thải trừ theo bậc một nên mỗi khoảng thời gian bán thải nồng độ giảm còn một nửa, không phải giảm đều tuyến tính. Với thuốc có t½ là 2 giờ, nồng độ giảm từ 16 xuống 8 sau 2 giờ, xuống 4 sau 4 giờ, xuống 1 sau 8 giờ. Vì vậy vẽ đồ thị theo thang log sẽ cho đường thẳng.", tip: "Với bậc một, không bao giờ nồng độ về đúng 0, chỉ tiến dần tới 0." },
            { title: "Đạt trạng thái ổn định", body: "Khi uống lặp lại, lượng thuốc vào bằng lượng thuốc thải sau khoảng 4 đến 5 lần thời gian bán thải. Digoxin có t½ khoảng 36 đến 48 giờ nên cần gần một tuần mới ổn định, và thường dùng liều nạp để rút ngắn thời gian này. Ngược lại amoxicillin có t½ khoảng 1 giờ nên đạt ổn định trong vài giờ.", tip: "Nếu cần tác dụng nhanh với thuốc có t½ dài, hãy tính liều nạp rồi mới chuyển liều duy trì." },
            { title: "Chọn khoảng cách liều", body: "Khoảng cách liều phải giữ nồng độ đỉnh dưới ngưỡng độc và nồng độ đáy trên ngưỡng tác dụng. Với thuốc có cửa sổ điều trị hẹp như digoxin, warfarin hay vancomycin, cần theo dõi nồng độ trong máu. Công thức ước lượng nồng độ trung bình dùng liều mỗi lần chia cho khoảng cách liều nhân sinh khả dụng.", tip: "Cửa sổ điều trị hẹp nghĩa là khoảng cách giữa liều có tác dụng và liều gây độc rất nhỏ." }
          ],
          formula: "t ổn định khoảng 4 đến 5 lần t½; nồng độ còn 50 phần trăm sau mỗi t½"
        },
        {
          id: "dk3",
          title: "Sinh khả dụng và các đường dùng",
          minutes: 20,
          level: "Trung bình",
          summary: "So sánh sinh khả dụng của đường uống, tiêm bắp, tiêm tĩnh mạch và đường hấp thu qua da.",
          points: ["Sinh khả dụng tĩnh mạch được quy ước là 100 phần trăm.", "Thuốc uống chịu chuyển hóa qua gan lần đầu nên sinh khả dụng thấp hơn.", "Đường dùng quyết định tốc độ khởi phát tác dụng."],
          steps: [
            { title: "Định nghĩa sinh khả dụng", body: "Sinh khả dụng F là tỉ lệ thuốc vào tuần hoàn chung ở dạng còn hoạt tính so với liều đã dùng. Đường tĩnh mạch có F bằng 100 phần trăm theo quy ước, đường uống thường 20 đến 80 phần trăm tùy thuốc. Morphin uống có sinh khả dụng thấp vì gan chuyển hóa mạnh lần đầu.", tip: "F thấp không có nghĩa thuốc kém hiệu quả, chỉ cần hiệu chỉnh liều đường uống." },
            { title: "Chọn đường dùng theo tình huống", body: "Cấp cứu cần tác dụng tức thì thì dùng đường tĩnh mạch, ví dụ adrenaline trong sốc phản vệ. Bệnh nhân nôn nhiều hoặc không nuốt được thì chuyển sang tiêm hoặc đặt ống. Thuốc dùng qua da như nitroglycerin phù hợp khi cần tác dụng kéo dài và tránh chuyển hóa gan.", tip: "Khi bệnh nhân nôn, đừng cố cho uống thuốc hạ sốt mà cân nhắc đặt thuốc trực tràng." },
            { title: "Yếu tố làm thay đổi hấp thu", body: "Thức ăn làm chậm rỗng dạ dày, có thể giảm hoặc tăng hấp thu tùy thuốc, ví dụ itraconazol cần môi trường axit nên uống cùng bữa ăn. Thuốc kháng axit làm tăng pH dạ dày và giảm hấp thu các thuốc cần axit. Tương tác ở mức hấp thu thường bị bỏ sót khi chỉ nhìn vào cơ chế tác dụng.", tip: "Khi kết quả điều trị không như mong đợi, hãy hỏi bệnh nhân uống thuốc lúc nào và cùng với gì." }
          ],
          formula: "F tĩnh mạch = 100 phần trăm; F uống = lượng vào tuần hoàn chia liều đã dùng"
        }
      ]
    },
    {
      title: "Cơ chế tác dụng và nhóm thuốc",
      summary: "Thụ thể, kháng sinh, kháng thuốc và các nhóm thuốc tim mạch thường gặp.",
      lessons: [
        {
          id: "cc1",
          title: "Thụ thể, đồng vận và đối kháng",
          minutes: 22,
          level: "Cơ bản",
          summary: "Phân biệt agonist, antagonist cạnh tranh và antagonist không cạnh tranh qua đường cong liều đáp ứng.",
          points: ["Agonist gắn thụ thể và tạo đáp ứng, antagonist gắn mà không tạo đáp ứng.", "Antagonist cạnh tranh làm đường cong dịch phải, có thể vượt qua bằng tăng liều.", "Antagonist không cạnh tranh làm giảm đáp ứng tối đa."],
          steps: [
            { title: "Đọc đường cong liều đáp ứng", body: "Trục hoành là log nồng độ, trục tung là phần trăm đáp ứng tối đa. EC50 là nồng độ tạo 50 phần trăm đáp ứng, càng nhỏ thì thuốc càng mạnh. Hiệu lực tối đa phụ thuộc vào khả năng hoạt hóa thụ thể, không chỉ ái lực gắn.", tip: "Ái lực quyết định EC50, hiệu lực nội tại quyết định đỉnh của đường cong." },
            { title: "Cạnh tranh và không cạnh tranh", body: "Atropin là antagonist cạnh tranh của thụ thể muscarinic, có thể vượt qua bằng cách tăng liều acetylcholine. Phenoxybenzamin gắn không hồi phục thụ thể alpha nên giảm cả đáp ứng tối đa. Phân biệt hai kiểu này giúp dự đoán tác dụng khi ngộ độc.", tip: "Nếu tăng liều agonist mà vẫn không đạt đáp ứng tối đa cũ, đó là đối kháng không cạnh tranh." },
            { title: "Chọn lọc và tác dụng phụ", body: "Không thuốc nào chọn lọc tuyệt đối, salbutamol ưu tiên thụ thể beta-2 ở phế quản nhưng liều cao vẫn kích thích beta-1 gây tim đập nhanh. Thuốc chẹn beta chọn lọc như bisoprolol ít gây co thắt phế quản hơn propranolol. Vì vậy tác dụng phụ thường là phần mở rộng của chính cơ chế tác dụng.", tip: "Khi gặp tác dụng phụ lạ, hãy kiểm tra lại tính chọn lọc của thuốc trên các thụ thể khác." }
          ],
          formula: "EC50 càng nhỏ thì ái lực càng cao; antagonist cạnh tranh làm EC50 tăng"
        },
        {
          id: "cc2",
          title: "Kháng sinh và kháng thuốc",
          minutes: 24,
          level: "Trung bình",
          summary: "Bốn cơ chế tác dụng của kháng sinh và ba cách vi khuẩn kháng lại.",
          points: ["Kháng sinh ức chế thành tế bào như beta-lactam chỉ hiệu quả với vi khuẩn đang phân chia.", "Vi khuẩn kháng thuốc bằng enzym phân hủy, bơm thải hoặc đột biến đích.", "Dùng đủ liều và đủ thời gian giúp giảm chọn lọc chủng kháng."],
          steps: [
            { title: "Bốn đích tác dụng", body: "Beta-lactam và vancomycin ức chế tổng hợp thành tế bào, aminoglycosid gắn ribosome 30S, macrolid gắn 50S, fluoroquinolon ức chế DNA gyrase. Nhóm sulfonamid chặn con đường tổng hợp folate của vi khuẩn. Mỗi đích khác nhau giải thích vì sao phổ kháng khuẩn và tác dụng phụ khác nhau.", tip: "Vancomycin chỉ hiệu quả với vi khuẩn gram dương vì phân tử quá lớn để qua màng ngoài." },
            { title: "Ba cơ chế kháng thuốc", body: "Vi khuẩn tiết beta-lactamase phá vòng beta-lactam, ví dụ tụ cầu vàng kháng penicillin. Chúng cũng có thể bơm thuốc ra ngoài qua bơm efflux hoặc đột biến protein đích làm thuốc không gắn được. Chuyển gen kháng qua plasmid khiến kháng thuốc lan nhanh trong bệnh viện.", tip: "Phối hợp amoxicillin với acid clavulanic để ức chế beta-lactamase là ví dụ kinh điển." },
            { title: "Nguyên tắc dùng kháng sinh", body: "Chỉ dùng khi có bằng chứng nhiễm khuẩn, lấy bệnh phẩm cấy trước khi dùng nếu có thể, và chọn kháng sinh theo kháng sinh đồ. Dùng liều thấp hoặc ngắt quãng sớm tạo điều kiện cho chủng kháng phát triển. Với nhiễm trùng nặng, khởi đầu theo kinh nghiệm rồi điều chỉnh khi có kết quả.", tip: "Cảm lạnh do virus thì kháng sinh không có tác dụng, chỉ thêm tác dụng phụ và nguy cơ kháng thuốc." }
          ],
          formula: "Beta-lactam ức chế transpeptidase; aminoglycosid gắn ribosome 30S"
        },
        {
          id: "cc3",
          title: "Thuốc tim mạch thường gặp",
          minutes: 22,
          level: "Trung bình",
          summary: "Cơ chế và điểm cần theo dõi của ba nhóm thuốc: ức chế men chuyển, chẹn beta và lợi tiểu.",
          points: ["Ức chế men chuyển giảm angiotensin II và giữ kali, gây ho khan.", "Chẹn beta làm giảm nhịp tim và lực co, không ngừng đột ngột.", "Lợi tiểu quai như furosemid gây hạ kali và mất nước."],
          steps: [
            { title: "Nhóm ức chế men chuyển", body: "Enalapril và lisinopril chặn chuyển angiotensin I thành angiotensin II, làm giãn mạch và giảm aldosteron. Hệ quả là giảm huyết áp nhưng tăng kali máu và có thể gây ho khan do tích tụ bradykinin. Thuốc bảo vệ thận ở bệnh nhân đái tháo đường có protein niệu.", tip: "Theo dõi kali và creatinin sau 1 đến 2 tuần khởi trị, đặc biệt ở người suy thận." },
            { title: "Nhóm chẹn beta", body: "Bisoprolol và metoprolol giảm nhịp tim, giảm nhu cầu oxy của cơ tim nên được dùng sau nhồi máu cơ tim. Không ngừng thuốc đột ngột vì có thể gây phản ứng dội với nhịp tim và huyết áp tăng mạnh. Ở bệnh nhân hen, cần chọn thuốc chọn lọc beta-1 hoặc tránh hoàn toàn.", tip: "Khi bệnh nhân chuẩn bị phẫu thuật, hỏi rõ thuốc chẹn beta và không tự bỏ liều." },
            { title: "Nhóm lợi tiểu", body: "Furosemid ức chế đồng vận chuyển Na-K-2Cl ở nhánh lên quai Henle, gây mất nước và điện giải mạnh, thường dùng trong phù phổi cấp. Spironolacton đối kháng aldosteron nên giữ kali, hay phối hợp với lợi tiểu quai để cân bằng. Cần cân nặng hằng ngày và xét nghiệm điện giải khi dùng kéo dài.", tip: "Cân nặng tăng nhanh 1 kg mỗi ngày là dấu hiệu giữ nước cần báo bác sĩ." }
          ],
          formula: "Ức chế men chuyển: giảm angiotensin II, tăng kali, có thể gây ho khan"
        }
      ]
    },
    {
      title: "An toàn dùng thuốc",
      summary: "Tương tác, tính liều theo cân nặng và chức năng thận, nhận diện phản ứng có hại.",
      lessons: [
        {
          id: "at1",
          title: "Tương tác thuốc và mức độ cảnh báo",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt tương tác dược động học và dược lực học, nhận diện cặp nguy hiểm thường gặp.",
          points: ["Tương tác dược động học thay đổi nồng độ thuốc trong máu.", "Tương tác dược lực học cộng hưởng hoặc đối kháng tác dụng tại đích.", "Simvastatin với clarithromycin có thể gây tiêu cơ do ức chế CYP3A4."],
          steps: [
            { title: "Dược động học", body: "Clarithromycin ức chế CYP3A4 làm nồng độ simvastatin tăng mạnh, dẫn tới đau cơ và tiêu cơ vân. Rifampicin cảm ứng enzym theo chiều ngược lại, làm giảm nồng độ thuốc tránh thai uống và có thể gây có thai ngoài ý muốn. Tương tác ở mức hấp thu cũng quan trọng, ví dụ tetracyclin bị canxi trong sữa chelat hóa.", tip: "Trước khi kê đơn, hỏi cả thuốc kê đơn, thuốc không kê đơn và thực phẩm chức năng đang dùng." },
            { title: "Dược lực học", body: "Warfarin phối hợp aspirin làm tăng nguy cơ chảy máu dù nồng độ warfarin không đổi, vì hai thuốc cùng tác động lên đông máu theo hai con đường. Thuốc an thần nhóm benzodiazepin cộng rượu gây ức chế thần kinh trung ương mạnh hơn nhiều. Cần phân biệt để chọn cách xử lý: giảm liều hay đổi thuốc.", tip: "Tương tác dược lực học không thể phát hiện bằng xét nghiệm nồng độ thuốc." },
            { title: "Cặp tương tác phải nhớ", body: "Ức chế men chuyển phối hợp spironolacton dễ gây tăng kali máu nặng, đặc biệt ở người suy thận. MAOI với thức ăn giàu tyramin như phô mai lâu năm gây cơn tăng huyết áp. Digoxin với amiodaron làm tăng nồng độ digoxin, cần giảm một nửa liều digoxin khi phối hợp.", tip: "Ghi nhớ theo cặp thuốc và hậu quả, đừng chỉ nhớ tên cơ chế enzym." }
          ],
          formula: "CYP3A4 bị ức chế thì nồng độ cơ chất tăng; bị cảm ứng thì nồng độ giảm"
        },
        {
          id: "at2",
          title: "Tính liều theo cân nặng và chức năng thận",
          minutes: 26,
          level: "Nâng cao",
          summary: "Áp dụng công thức Cockcroft-Gault và quy tắc tính liều trẻ em theo mg trên kg.",
          points: ["Liều trẻ em thường tính theo mg trên kg, không suy ra từ liều người lớn bằng cách chia đôi.", "Độ thanh thải creatinin tính theo tuổi, cân nặng, giới và creatinin huyết thanh.", "Vancomycin và aminoglycosid cần hiệu chỉnh liều theo chức năng thận."],
          steps: [
            { title: "Liều theo cân nặng", body: "Ví dụ trẻ 15 kg cần paracetamol 15 mg mỗi kg mỗi lần, tức 225 mg mỗi lần, cách nhau 4 đến 6 giờ và không quá 60 mg mỗi kg mỗi ngày. Với người lớn, liều tối đa thường là 3 đến 4 g mỗi ngày để tránh tổn thương gan. Cần kiểm tra nồng độ dung dịch thực tế vì trẻ em thường dùng dạng sirô khác nồng độ.", tip: "Luôn đổi về cùng đơn vị trước khi nhân, sai đơn vị là lỗi hay gặp nhất khi tính liều." },
            { title: "Công thức Cockcroft-Gault", body: "Độ thanh thải creatinin bằng (140 trừ tuổi) nhân cân nặng chia cho (72 nhân creatinin huyết thanh), nhân thêm 0,85 nếu là nữ. Ví dụ nam 70 tuổi, 60 kg, creatinin 1,2 mg mỗi dl cho kết quả khoảng 48 ml mỗi phút. Kết quả này dùng để hiệu chỉnh liều thuốc thải qua thận.", tip: "Công thức dùng creatinin tính bằng mg trên dl, không dùng micromol trên lít nếu chưa đổi." },
            { title: "Hiệu chỉnh và theo dõi", body: "Metformin phải ngừng khi độ lọc cầu thận dưới 30 ml mỗi phút vì nguy cơ nhiễm toan lactic. Vancomycin cần theo dõi nồng độ đáy hoặc diện tích dưới đường cong để giữ hiệu quả mà không tăng độc thận. Aminoglycosid dùng một lần mỗi ngày giúp đỉnh cao hơn và đáy thấp hơn, giảm độc tai.", tip: "Khi độ lọc cầu thận thay đổi nhanh, phải tính lại liều thay vì giữ đơn cũ." }
          ],
          formula: "CrCl = [(140 − tuổi) x cân nặng] / (72 x creatinin huyết thanh), nhân 0,85 nếu nữ"
        },
        {
          id: "at3",
          title: "Phản ứng có hại và báo cáo ADR",
          minutes: 20,
          level: "Trung bình",
          summary: "Phân loại phản ứng có hại theo nhóm A và B, nhận diện dấu hiệu nguy hiểm cần xử trí ngay.",
          points: ["Phản ứng nhóm A phụ thuộc liều và dự đoán được, ví dụ hạ huyết áp do thuốc hạ áp.", "Phản ứng nhóm B không phụ thuộc liều, thường là dị ứng hoặc phản ứng đặc ứng.", "Mọi phản ứng nghiêm trọng cần báo cáo theo mẫu ADR của đơn vị."],
          steps: [
            { title: "Nhóm A và nhóm B", body: "Nhóm A chiếm phần lớn phản ứng có hại, liên quan đến cơ chế tác dụng và tăng lên khi tăng liều, như chảy máu do warfarin quá liều. Nhóm B hiếm nhưng nặng, không liên quan liều, như sốc phản vệ với penicillin. Phân loại giúp quyết định giảm liều hay ngừng hẳn thuốc.", tip: "Phản ứng nhóm A thường xử lý bằng giảm liều, nhóm B thường phải ngừng thuốc." },
            { title: "Dấu hiệu cần xử trí ngay", body: "Sốc phản vệ có mày đay, khó thở, tụt huyết áp, xử trí bằng adrenaline tiêm bắp mặt trước đùi ngoài, không chờ kháng histamin. Hội chứng Stevens-Johnson khởi đầu bằng sốt và loét niêm mạc, cần ngừng ngay thuốc nghi ngờ. Tiêu cơ vân do statin biểu hiện đau cơ lan rộng và nước tiểu sẫm màu.", tip: "Adrenaline tiêm bắp là thuốc đầu tay trong sốc phản vệ, không phải corticoid." },
            { title: "Quy trình báo cáo", body: "Ghi rõ thuốc nghi ngờ, liều, thời điểm khởi phát, biểu hiện, xử trí và kết quả, sau đó gửi về trung tâm cảnh giác dược. Báo cáo giúp phát hiện tín hiệu an toàn mới mà thử nghiệm lâm sàng trước khi lưu hành chưa thấy. Đây là trách nhiệm chuyên môn của cả bác sĩ, dược sĩ và điều dưỡng.", tip: "Không cần chắc chắn thuốc là nguyên nhân mới báo cáo, chỉ cần nghi ngờ hợp lý." }
          ],
          formula: "Nhóm A phụ thuộc liều, nhóm B không phụ thuộc liều và thường nặng hơn"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Sinh khả dụng", back: "Tỉ lệ và tốc độ thuốc vào tuần hoàn chung ở dạng còn hoạt tính so với liều đã dùng.", hint: "Tĩnh mạch được quy ước 100 phần trăm.", example: "Morphin uống có sinh khả dụng thấp do chuyển hóa qua gan lần đầu." },
    { front: "Thời gian bán thải", back: "Thời gian để nồng độ thuốc trong huyết tương giảm còn một nửa.", hint: "Ký hiệu t½.", example: "Paracetamol có t½ khoảng 2 đến 3 giờ, digoxin khoảng 36 đến 48 giờ." },
    { front: "Trạng thái ổn định", back: "Trạng thái lượng thuốc vào bằng lượng thuốc thải, đạt sau khoảng 4 đến 5 lần thời gian bán thải.", hint: "Cần 4 đến 5 lần t½.", example: "Digoxin cần gần một tuần để đạt nồng độ ổn định." },
    { front: "Thể tích phân bố", back: "Thể tích biểu kiến cần để chứa toàn bộ lượng thuốc trong cơ thể ở cùng nồng độ huyết tương.", hint: "Phản ánh mức phân tán vào mô.", example: "Digoxin có thể tích phân bố rất lớn vì gắn mạnh vào mô tim và cơ." },
    { front: "Chuyển hóa qua gan lần đầu", back: "Phần thuốc bị gan chuyển hóa trước khi vào tuần hoàn chung sau khi uống.", hint: "Xảy ra trước khi thuốc tới mô đích.", example: "Nitroglycerin uống bị chuyển hóa gần hết nên phải dùng dưới lưỡi." },
    { front: "EC50", back: "Nồng độ thuốc tạo ra 50 phần trăm đáp ứng tối đa, phản ánh ái lực và độ mạnh.", hint: "Càng nhỏ thì thuốc càng mạnh.", example: "So sánh hai thuốc cùng đáp ứng tối đa, thuốc có EC50 nhỏ hơn dùng liều thấp hơn." },
    { front: "Antagonist cạnh tranh", back: "Chất gắn thụ thể mà không tạo đáp ứng và có thể bị vượt qua bằng cách tăng liều agonist.", hint: "Đường cong dịch phải nhưng đỉnh không đổi.", example: "Atropin đối kháng cạnh tranh thụ thể muscarinic." },
    { front: "Cửa sổ điều trị", back: "Khoảng nồng độ giữa ngưỡng tác dụng và ngưỡng độc; hẹp thì dễ ngộ độc.", hint: "Digoxin, warfarin, vancomycin có cửa sổ hẹp.", example: "Digoxin hiệu quả quanh 0,5 đến 2 microgam trên lít, cao hơn dễ gây loạn nhịp." },
    { front: "Cockcroft-Gault", back: "Công thức ước lượng độ thanh thải creatinin từ tuổi, cân nặng, giới và creatinin huyết thanh.", hint: "Có hệ số 0,85 cho nữ.", example: "Nam 70 tuổi, 60 kg, creatinin 1,2 cho CrCl khoảng 48 ml mỗi phút." },
    { front: "CYP3A4", back: "Enzym chuyển hóa thuốc phổ biến ở gan và ruột, bị ức chế bởi clarithromycin và cảm ứng bởi rifampicin.", hint: "Ức chế thì nồng độ cơ chất tăng.", example: "Simvastatin phối hợp clarithromycin làm tăng nguy cơ tiêu cơ." },
    { front: "Phản ứng có hại nhóm A", back: "Phản ứng phụ thuộc liều, dự đoán được, liên quan đến chính cơ chế tác dụng của thuốc.", hint: "A là augmented, tăng theo liều.", example: "Hạ huyết áp quá mức khi dùng liều cao ức chế men chuyển." },
    { front: "Sốc phản vệ", back: "Phản ứng dị ứng nặng với tụt huyết áp và khó thở, xử trí bằng adrenaline tiêm bắp.", hint: "Thuốc đầu tay không phải kháng histamin.", example: "Tiêm adrenaline mặt trước đùi ngoài ngay khi nghi sốc phản vệ do penicillin." }
  ],
  quiz: [
    { q: "Đường dùng nào có sinh khả dụng được quy ước là 100 phần trăm?", options: ["Tiêm tĩnh mạch", "Uống", "Tiêm bắp", "Qua da"], answer: 0, explain: "Tiêm tĩnh mạch đưa thuốc thẳng vào tuần hoàn nên không mất qua hấp thu và chuyển hóa gan lần đầu." },
    { q: "Thuốc có thời gian bán thải 6 giờ, sau 24 giờ nồng độ còn lại bao nhiêu phần trăm?", options: ["50 phần trăm", "25 phần trăm", "6,25 phần trăm", "12,5 phần trăm"], answer: 2, explain: "24 giờ tương ứng 4 lần thời gian bán thải, mỗi lần còn một nửa: 50, 25, 12,5 rồi 6,25 phần trăm." },
    { q: "Trạng thái ổn định của nồng độ thuốc thường đạt được sau khoảng bao lâu?", options: ["1 lần thời gian bán thải", "4 đến 5 lần thời gian bán thải", "10 lần thời gian bán thải", "24 giờ bất kể thuốc"], answer: 1, explain: "Sau khoảng 4 đến 5 lần thời gian bán thải, lượng thuốc vào xấp xỉ lượng thuốc thải ra." },
    { q: "Atropin đối kháng tác dụng của acetylcholine theo kiểu nào?", options: ["Ức chế enzym phân hủy", "Đối kháng không cạnh tranh", "Giảm hấp thu", "Đối kháng cạnh tranh tại thụ thể"], answer: 3, explain: "Atropin gắn cạnh tranh thụ thể muscarinic, có thể vượt qua bằng cách tăng nồng độ acetylcholine." },
    { q: "Cặp thuốc nào làm tăng nguy cơ tiêu cơ do ức chế CYP3A4?", options: ["Simvastatin và clarithromycin", "Paracetamol và amoxicillin", "Metformin và insulin", "Furosemid và kali"], answer: 0, explain: "Clarithromycin ức chế CYP3A4 làm nồng độ simvastatin tăng mạnh, dẫn tới đau cơ và tiêu cơ vân." },
    { q: "Trẻ nặng 15 kg dùng paracetamol 15 mg mỗi kg mỗi lần, mỗi lần uống bao nhiêu mg?", options: ["150 mg", "300 mg", "225 mg", "250 mg"], answer: 2, explain: "15 kg nhân 15 mg mỗi kg cho 225 mg mỗi lần, cách nhau 4 đến 6 giờ." },
    { q: "Thuốc nào cần ngừng khi độ lọc cầu thận dưới 30 ml mỗi phút vì nguy cơ nhiễm toan lactic?", options: ["Amlodipin", "Paracetamol", "Atorvastatin", "Metformin"], answer: 3, explain: "Metformin tích tụ khi suy thận và có thể gây nhiễm toan lactic, nên ngừng khi eGFR dưới 30." },
    { q: "Adrenaline trong sốc phản vệ được dùng theo đường nào là đầu tay?", options: ["Uống", "Tiêm bắp mặt trước đùi ngoài", "Truyền tĩnh mạch chậm", "Khí dung"], answer: 1, explain: "Tiêm bắp mặt trước đùi ngoài cho hấp thu nhanh và an toàn, không chờ đặt đường truyền." },
    { q: "Tương tác giữa warfarin và aspirin chủ yếu thuộc loại nào?", options: ["Tương tác ở mức hấp thu", "Tương tác dược lực học", "Cảm ứng enzym", "Thay đổi pH nước tiểu"], answer: 1, explain: "Hai thuốc cùng tác động lên quá trình đông máu theo hai đường khác nhau, cộng hưởng nguy cơ chảy máu." },
    { q: "Phản ứng có hại nhóm B có đặc điểm nào?", options: ["Không phụ thuộc liều và thường nặng", "Luôn giảm khi giảm liều", "Chỉ gặp với thuốc tiêm", "Dự đoán được từ cơ chế tác dụng"], answer: 0, explain: "Nhóm B hiếm, không phụ thuộc liều, thường là dị ứng hoặc phản ứng đặc ứng như sốc phản vệ." }
  ],
  lab: {
    kind: "chart",
    mode: "line",
    title: "Nồng độ huyết tương theo thời gian",
    lead: "Hai thuốc cùng liều tiêm tĩnh mạch nhưng khác thời gian bán thải. Đường cong của thuốc A rơi nhanh nên cần dùng nhiều lần hơn để giữ nồng độ trong cửa sổ điều trị.",
    stageLabel: "Biểu đồ nồng độ",
    controlNote: "Đọc giá trị đỉnh ở mốc 0 giờ và so sánh tốc độ giảm của hai đường cong. Thêm một mốc đo để thấy điểm dữ liệu mới được nối vào biểu đồ.",
    note: "Mô hình thải trừ bậc một: nồng độ giảm còn một nửa sau mỗi khoảng thời gian bán thải, tính bằng mg trên lít.",
    labels: ["0h", "1h", "2h", "4h", "8h", "12h", "18h", "24h"],
    series: [
      { label: "Thuốc A, t½ = 2 giờ", color: "#7c3aed", data: [16, 11.3, 8, 4, 1, 0.3, 0.05, 0] },
      { label: "Thuốc B, t½ = 8 giờ", color: "#0891b2", data: [16, 15, 14.1, 12.6, 8, 5.7, 3.4, 2] }
    ],
    add: { label: "Thêm nồng độ đo được (mg/L)", min: 0, max: 40 }
  },
  teacher: {
    students: [
      { name: "Nguyễn Khánh Chi", progress: 88, score: 8.9, status: "Tốt", note: "Tính liều rất chắc, cần luyện thêm phần tương tác thuốc." },
      { name: "Trần Minh Khoa", progress: 57, score: 7.1, status: "Đang học", note: "Nhầm tương tác dược động học với dược lực học." },
      { name: "Lê Thanh Trúc", progress: 95, score: 9.5, status: "Tốt", note: "Có thể nhận bài nâng cao về hiệu chỉnh liều ở suy thận." },
      { name: "Phạm Anh Dũng", progress: 34, score: 5.7, status: "Cần hỗ trợ", note: "Chưa nắm công thức Cockcroft-Gault, thiếu 3 bài tính liều." },
      { name: "Vũ Hồng Nhung", progress: 74, score: 8.1, status: "Đang học", note: "Tiến bộ đều, nên ôn lại khái niệm thể tích phân bố." },
      { name: "Đỗ Quang Huy", progress: 51, score: 6.7, status: "Đang học", note: "Cần luyện thêm cách đọc đường cong liều đáp ứng." }
    ],
    submissions: [
      { student: "Nguyễn Khánh Chi", lesson: "Bài tính liều vancomycin", time: "Hôm qua 22:30", status: "Chờ chấm" },
      { student: "Phạm Anh Dũng", lesson: "Phiếu bài tập Cockcroft-Gault", time: "Hôm qua 19:10", status: "Chờ chấm" },
      { student: "Lê Thanh Trúc", lesson: "Bảng tương tác thuốc nhóm 2", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Tư học về tương tác thuốc, đọc trước chương 8 giáo trình.",
      "Bài kiểm tra giữa kỳ có một bài tính liều theo cân nặng và chức năng thận.",
      "Sinh viên chưa nộp bài tính liều liên hệ lớp trưởng trước thứ Sáu."
    ]
  },
  className: "Dược lý học – K24",
  brief: "BTL-18_pharmalearn-mon-duoc-ly.md"
};
