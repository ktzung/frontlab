window.BTL_DATA = {
  id: "biochemlab",
  code: "BTL-35",
  name: "BioChemLab",
  monogram: "ADN",
  subject: "Hóa – Sinh y sinh",
  level: "Đại học",
  group: "Y & Sức khỏe",
  accent: "#0d9488",
  accent2: "#7c3aed",
  font: "serif",
  tagline: "Bấm vào từng mắt xích trên con đường chuyển hóa để thấy phân tử, enzym và năng lượng liên quan.",
  intro: "BioChemLab nối hóa học phân tử với sinh học tế bào: mỗi sơ đồ chuyển hóa là một bản đồ có điểm chạm, mỗi phân tử có mô tả cấu trúc và vai trò bệnh học. Sinh viên y sinh ôn được cả cơ chế phân tử lẫn ý nghĩa lâm sàng trên cùng một màn hình.",
  hero: { title: "Hóa – Sinh y sinh", highlight: "đọc bệnh từ phân tử" },
  heroBadge: "Sơ đồ chuyển hóa · Ca bệnh phân tử",
  labShort: "PHÂN TỬ",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ phân tử" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách học đặc thù cho Hóa – Sinh y sinh: bản đồ chuyển hóa có điểm chạm, mô hình phân tử tương tác và thẻ nhớ cấu trúc gắn với bệnh lý.",
  pathLead: "Đi từ phân tử sinh học cơ bản, sang enzym và các con đường chuyển hóa năng lượng, rồi kết thúc ở ADN, biểu hiện gen và bệnh chuyển hóa bẩm sinh.",
  features: [
    { badge: "01", title: "Bản đồ chuyển hóa tương tác", desc: "Sơ đồ đường phân có điểm chạm cho từng chất trung gian, hiện cấu trúc, enzym xúc tác và số ATP hoặc NADH tạo ra ở mỗi bước." },
    { badge: "02", title: "Mô hình phân tử 2D tương tác", desc: "Xoay, phủ màu theo nguyên tố và xem liên kết của nước, glucozơ, chuỗi peptit ngắn, biến cấu trúc trừu tượng thành hình ảnh dễ nhớ." },
    { badge: "03", title: "Ca bệnh gắn với enzym", desc: "Mỗi thẻ nhớ nối một enzym với hệ quả khi thiếu hụt, ví dụ thiếu phenylalanin hydroxylase gây phenylketonuria, giúp nhớ lâu hơn." }
  ],
  modules: [
    {
      title: "Phân tử sinh học",
      summary: "Cấu trúc và chức năng của protein, cacbohiđrat và lipit trong tế bào.",
      lessons: [
        {
          id: "ps1",
          title: "Axit amin và các bậc cấu trúc protein",
          minutes: 22,
          level: "Cơ bản",
          summary: "Phân loại axit amin, viết liên kết peptit và phân biệt bốn bậc cấu trúc của protein.",
          points: ["Axit amin gồm nhóm amin, nhóm cacboxyl và chuỗi bên R.", "Liên kết peptit hình thành giữa nhóm cacboxyl và nhóm amin, giải phóng nước.", "Cấu trúc bậc hai nhờ liên kết hiđro tạo xoắn alpha và phiến beta."],
          steps: [
            { title: "Cấu tạo axit amin", body: "Glyxin có chuỗi bên chỉ là nguyên tử hiđro, còn xistein có chuỗi bên chứa nhóm thiol nên tạo được cầu đisunfua. Chính chuỗi bên R quyết định tính chất ưa nước hay kị nước, từ đó quyết định cách protein gấp lại trong môi trường nước.", tip: "Nhóm ba axit amin cần nhớ ngay là glyxin, xistein và axit glutamic." },
            { title: "Liên kết peptit", body: "Hai axit amin nối với nhau bằng liên kết peptit, giải phóng một phân tử nước. Tripeptit có ba gốc axit amin nhưng chỉ có hai liên kết peptit, vì số liên kết bằng số gốc trừ một. Đây là câu hỏi kinh điển trong đề kiểm tra.", tip: "Đếm số liên kết bằng số axit amin trừ 1, đừng đếm số nguyên tử." },
            { title: "Bốn bậc cấu trúc", body: "Bậc một là trình tự axit amin, bậc hai là xoắn alpha hoặc phiến beta, bậc ba là hình dạng không gian của cả chuỗi, bậc bốn là sự ghép nhiều chuỗi như hemoglobin gồm bốn tiểu đơn vị. Một đột biến thay axit amin ở bậc một có thể làm hỏng toàn bộ hình dạng bậc ba, như trong bệnh hồng cầu hình liềm.", tip: "Nhớ theo thứ tự: trình tự, mạch cục bộ, hình dạng tổng thể, ghép chuỗi." }
          ],
          formula: "Số liên kết peptit = số gốc axit amin − 1"
        },
        {
          id: "ps2",
          title: "Glucozơ, tinh bột và glycogen",
          minutes: 20,
          level: "Cơ bản",
          summary: "So sánh các dạng cacbohiđrat và vai trò dự trữ năng lượng trong cơ thể.",
          points: ["Glucozơ là đường sáu cacbon, dạng năng lượng tuần hoàn chính.", "Tinh bột ở thực vật và glycogen ở động vật đều là polyme của glucozơ.", "Liên kết alpha và beta quyết định cấu trúc phân nhánh hay thẳng."],
          steps: [
            { title: "Glucozơ và con số cần nhớ", body: "Glucozơ có công thức C6H12O6 và khối lượng mol 180 g/mol. Một phân tử glucozơ khi oxi hóa hoàn toàn giải phóng khoảng 2 870 kJ năng lượng. Nồng độ glucozơ máu đói bình thường khoảng 3,9 đến 5,6 mmol/L, con số dùng hằng ngày trong lâm sàng.", tip: "Gắn con số với đơn vị mmol/L để không nhầm với mg/dL." },
            { title: "Tinh bột và glycogen", body: "Tinh bột gồm amylozơ mạch thẳng và amylopectin phân nhánh, còn glycogen phân nhánh dày hơn nên huy động nhanh hơn. Gan dự trữ glycogen để giữ đường huyết, cơ dự trữ để dùng tại chỗ khi vận động mạnh. Cùng một monome nhưng cách nối khác nhau cho chức năng khác nhau.", tip: "Phân nhánh nhiều thì càng nhiều đầu không khử, giải phóng glucozơ càng nhanh." },
            { title: "Xenlulozơ và bài học về liên kết", body: "Xenlulozơ cũng là polyme glucozơ nhưng nối bằng liên kết beta, con người không có enzym phân cắt nên không tiêu hóa được, dù vẫn cần chất xơ cho nhu động ruột. Đây là ví dụ rõ nhất cho việc cấu trúc quyết định chức năng trong hóa sinh.", tip: "Ghi nhớ cặp đối lập: alpha thì tiêu hóa được, beta thì không." }
          ],
          formula: "C6H12O6 + 6O2 → 6CO2 + 6H2O + năng lượng"
        },
        {
          id: "ps3",
          title: "Lipit và tổ chức màng sinh học",
          minutes: 20,
          level: "Trung bình",
          summary: "Hiểu cấu trúc photpholipit lưỡng cực và cách màng tế bào kiểm soát vận chuyển.",
          points: ["Photpholipit có đầu ưa nước và đuôi kị nước.", "Màng sinh học là lớp kép photpholipit kèm protein.", "Tính lỏng của màng phụ thuộc độ bão hòa của axit béo và cholesterol."],
          steps: [
            { title: "Vì sao màng tự hình thành", body: "Trong môi trường nước, các đuôi kị nước quay vào trong và đầu ưa nước quay ra ngoài, tạo lớp kép tự phát. Không cần năng lượng vì đây là quá trình do tương tác kị nước chi phối. Cấu trúc này cho phép màng tự vá khi bị chọc thủng nhỏ.", tip: "Vẽ một phân tử photpholipit với ký hiệu đầu tròn và hai đuôi thẳng." },
            { title: "Vận chuyển qua màng", body: "Phân tử nhỏ không phân cực như O2 và CO2 khuếch tán trực tiếp. Glucozơ và ion cần protein vận chuyển, có thể theo gradient hoặc tiêu ATP. Natri và kali được bơm ngược gradient nhờ bơm Na+/K+ ATPase, tiêu một phần ba năng lượng nghỉ của tế bào.", tip: "Phân biệt khuếch tán đơn giản, khuếch tán tăng cường và vận chuyển tích cực theo nhu cầu ATP." },
            { title: "Cholesterol điều hòa độ lỏng", body: "Cholesterol chen giữa các đuôi axit béo, làm màng bớt lỏng ở nhiệt độ cao và bớt cứng ở nhiệt độ thấp, giữ tính ổn định. Axit béo no làm màng cứng hơn, không no tạo nếp gấp nên màng lỏng hơn. Đây là lý do chế độ ăn nhiều chất béo bão hòa ảnh hưởng đến tính linh động của màng.", tip: "Liên hệ ngay với bệnh xơ vữa: cholesterol cao làm thay đổi tính chất màng và thành mạch." }
          ],
          formula: "Khuếch tán đơn giản: theo gradient, không tiêu ATP"
        }
      ]
    },
    {
      title: "Enzym và chuyển hóa năng lượng",
      summary: "Động học enzym, đường phân, chu trình Krebs và chuỗi truyền electron.",
      lessons: [
        {
          id: "ez1",
          title: "Enzym và động học Michaelis–Menten",
          minutes: 24,
          level: "Trung bình",
          summary: "Đọc đồ thị vận tốc theo nồng độ cơ chất và hiểu ý nghĩa của Km, Vmax.",
          points: ["Enzym giảm năng lượng hoạt hóa, không đổi hằng số cân bằng.", "Vận tốc tăng theo nồng độ cơ chất và bão hòa ở Vmax.", "Km là nồng độ cơ chất khi vận tốc bằng nửa Vmax, đặc trưng cho ái lực."],
          steps: [
            { title: "Cơ chế tạo phức enzym – cơ chất", body: "Enzym có trung tâm hoạt động khớp với cơ chất như chìa với ổ. Phức enzym – cơ chất hình thành, phản ứng xảy ra nhanh hơn nhờ hạ thấp năng lượng hoạt hóa, rồi sản phẩm tách ra và enzym trở lại trạng thái ban đầu. Enzym không bị tiêu hao trong phản ứng.", tip: "Enzym không làm phản ứng chạy ngược chiều, chỉ làm cả hai chiều nhanh hơn." },
            { title: "Đọc Km và Vmax", body: "Km nhỏ nghĩa là enzym đạt nửa vận tốc cực đại ở nồng độ cơ chất thấp, tức ái lực cao. Km của hexokinase với glucozơ khoảng 0,1 mmol/L, còn glucokinase ở gan khoảng 10 mmol/L, nên glucokinase chỉ hoạt động mạnh khi đường huyết cao sau bữa ăn. So sánh Km giúp hiểu vai trò từng enzym trong cùng một phản ứng.", tip: "Km là đại lượng nồng độ, đừng nhầm với vận tốc." },
            { title: "Ức chế enzym và ứng dụng thuốc", body: "Chất ức chế cạnh tranh làm tăng Km biểu kiến nhưng giữ Vmax, còn ức chế không cạnh tranh làm giảm Vmax. Methotrexat ức chế dihydrofolat reductase nên được dùng trong điều trị ung thư và bệnh tự miễn. Hiểu kiểu ức chế giúp dự đoán cách tăng liều thuốc có hiệu quả hay không.", tip: "Vẽ hai đường cong có và không có chất ức chế để phân biệt kiểu." }
          ],
          formula: "v = Vmax·[S]/(Km + [S])"
        },
        {
          id: "ez2",
          title: "Đường phân và cân bằng ATP",
          minutes: 26,
          level: "Nâng cao",
          summary: "Đi qua mười bước của đường phân, đếm ATP và NADH, và phân biệt hô hấp hiếu khí với lên men.",
          points: ["Đường phân diễn ra ở bào tương, không cần oxi.", "Một glucozơ cho 2 pyruvat, 2 ATP thuần và 2 NADH.", "Khi thiếu oxi, pyruvat chuyển thành lactat để tái tạo NAD+."],
          steps: [
            { title: "Hai giai đoạn của đường phân", body: "Giai đoạn đầu tiêu 2 ATP để hoạt hóa glucozơ, giai đoạn sau thu 4 ATP và 2 NADH. Đường phân tạo ra 4 ATP nhưng thuần chỉ 2 ATP. Với 10 phản ứng, ba enzym điều hòa chính là hexokinase, phosphofructokinase-1 và pyruvat kinase.", tip: "Ghi rõ thu với chi để không nhầm con số 4 và 2." },
            { title: "Số phận của pyruvat", body: "Khi có oxi, pyruvat vào ti thể, chuyển thành axetyl-CoA và đi vào chu trình Krebs. Khi thiếu oxi, pyruvat nhận electron từ NADH để thành lactat, nhờ đó NAD+ được tái tạo cho đường phân tiếp tục. Cơ đang co mạnh dùng con đường này và lactat tích tụ gây mỏi cơ.", tip: "Lên men không tạo thêm ATP, chỉ tái tạo NAD+ để đường phân chạy tiếp." },
            { title: "Hiệu suất năng lượng", body: "Đường phân chỉ thu khoảng 2 ATP, trong khi oxi hóa hoàn toàn một glucozơ cho khoảng 30 đến 32 ATP khi tính cả chuỗi truyền electron. Sự khác biệt này giải thích vì sao tế bào cần oxi để duy trì hoạt động lâu dài. Tế bào ung thư lại ưa đường phân kể cả khi có oxi, hiện tượng Warburg đang được khai thác trong chẩn đoán hình ảnh.", tip: "So sánh 2 ATP với 30 ATP để thấy vai trò của ti thể." }
          ],
          formula: "Glucozơ + 2NAD+ + 2ADP → 2 pyruvat + 2NADH + 2ATP"
        },
        {
          id: "ez3",
          title: "Chu trình Krebs và chuỗi truyền electron",
          minutes: 26,
          level: "Nâng cao",
          summary: "Theo dõi axetyl-CoA đi vào chu trình Krebs và dòng electron tạo ATP ở màng trong ti thể.",
          points: ["Chu trình Krebs diễn ra ở chất nền ti thể.", "Mỗi axetyl-CoA cho 3 NADH, 1 FADH2 và 1 GTP.", "Chuỗi truyền electron dùng gradient proton để tổng hợp ATP."],
          steps: [
            { title: "Cửa vào của chu trình", body: "Pyruvat được decarboxylat hóa thành axetyl-CoA nhờ phức hợp pyruvat dehydrogenase, giải phóng CO2 và tạo NADH. Axetyl-CoA kết hợp với oxaloaxetat tạo xitrat, mở đầu chu trình tám bước. Enzym này cần các vitamin nhóm B làm coenzym, nên thiếu vitamin B1 gây bệnh beri-beri.", tip: "Nhớ axetyl-CoA là điểm hội tụ của glucozơ, axit béo và axit amin." },
            { title: "Sản phẩm của một vòng", body: "Mỗi vòng oxi hóa axetyl-CoA tạo 3 NADH, 1 FADH2, 1 GTP và giải phóng 2 CO2. Vì một glucozơ cho hai axetyl-CoA nên cả chu trình tạo 6 NADH, 2 FADH2 và 2 GTP. Các phân tử NADH mang electron đến chuỗi truyền electron ở màng trong ti thể.", tip: "Đếm theo một glucozơ phải nhân đôi sản phẩm của một vòng." },
            { title: "Hóa thẩm thấu", body: "Chuỗi truyền electron bơm proton từ chất nền ra khoảng gian màng, tạo gradient. Proton quay lại qua ATP synthase làm quay tua bin phân tử và gắn photphat vào ADP. Đây là cơ chế hóa thẩm thấu của Peter Mitchell, nối hô hấp với tổng hợp ATP.", tip: "Chất ức chế như xianua chặn chuỗi truyền electron nên ATP ngừng được tạo dù còn oxi." }
          ],
          formula: "Axetyl-CoA + 3NAD+ + FAD + GDP → 2CO2 + 3NADH + FADH2 + GTP"
        }
      ]
    },
    {
      title: "ADN, biểu hiện gen và bệnh phân tử",
      summary: "Cấu trúc ADN, nhân đôi, phiên mã, dịch mã và hệ quả bệnh học của đột biến.",
      lessons: [
        {
          id: "ad1",
          title: "Cấu trúc ADN và cơ chế nhân đôi",
          minutes: 22,
          level: "Cơ bản",
          summary: "Mô tả chuỗi xoắn kép, nguyên tắc bắt cặp bazơ và quá trình nhân đôi theo nguyên tắc bán bảo toàn.",
          points: ["A bắt cặp với T bằng hai liên kết hiđro, G với X bằng ba.", "Hai mạch đối song song và xoắn theo chiều phải.", "Nhân đôi theo nguyên tắc bán bảo toàn và bổ sung."],
          steps: [
            { title: "Đọc chuỗi xoắn kép", body: "Một đoạn mạch có trình tự 5 phút ATGCC 3 phút sẽ bắt cặp với mạch bổ sung 3 phút TACGG 5 phút. Số liên kết hiđro nhiều hơn ở đoạn giàu G và X, nên vùng giàu GX bền nhiệt hơn. Đây là cơ sở thiết kế mồi trong phản ứng PCR.", tip: "Luôn ghi chiều 5 phút và 3 phút khi viết trình tự, đừng đảo chiều tùy ý." },
            { title: "Nhân đôi ADN", body: "Helicase tách hai mạch, primase đặt mồi ARN, ADN polymerase kéo dài theo chiều 5 phút đến 3 phút. Mạch dẫn tổng hợp liên tục, mạch chậm tổng hợp thành từng đoạn Okazaki. Kết quả là hai phân tử ADN, mỗi phân tử gồm một mạch cũ và một mạch mới.", tip: "Nhớ chiều tổng hợp 5 phút đến 3 phút là chìa khóa giải thích mạch chậm." },
            { title: "Kiểm soát lỗi", body: "ADN polymerase có hoạt tính đọc sửa, cắt bỏ nuclêôtit sai ngay sau khi gắn. Hệ sửa sai sau nhân đôi tiếp tục rà soát, giúp tỉ lệ đột biến giảm xuống khoảng một trên một tỉ bazơ mỗi thế hệ. Khi hệ thống này hỏng, nguy cơ ung thư tăng rõ rệt, ví dụ hội chứng Lynch.", tip: "Phân biệt đột biến phát sinh trong nhân đôi với tổn thương do tác nhân ngoài." }
          ],
          formula: "A – T (2 liên kết hiđro) ; G – X (3 liên kết hiđro)"
        },
        {
          id: "ad2",
          title: "Phiên mã và dịch mã",
          minutes: 24,
          level: "Trung bình",
          summary: "Từ gen đến protein: tổng hợp mARN, cắt intron, đọc codon và lắp ghép axit amin.",
          points: ["Phiên mã dùng mạch khuôn và tạo mARN theo nguyên tắc bổ sung.", "Ở sinh vật nhân thực, intron được cắt bỏ trước khi dịch mã.", "Mỗi codon gồm ba nuclêôtit, mã mở đầu là AUG."],
          steps: [
            { title: "Phiên mã", body: "ARN polymerase bám vào vùng khởi động, tổng hợp mARN theo chiều 5 phút đến 3 phút, dùng uraxin thay cho timin. Với mạch khuôn 3 phút TACGG 5 phút, mARN tương ứng là 5 phút AUGCC 3 phút. Ở sinh vật nhân thực, mARN được gắn mũ và đuôi polyA để ổn định.", tip: "Nhớ U thay T khi chuyển từ ADN sang ARN." },
            { title: "Cắt intron và nối exon", body: "Gen nhân thực có xen kẽ exon và intron, spliceosome cắt intron và nối exon lại. Cắt nối thay đổi (alternative splicing) cho phép một gen tạo nhiều protein khác nhau, giải thích vì sao khoảng 20 000 gen người lại tạo ra hơn 100 000 loại protein.", tip: "Đột biến ở vị trí cắt nối có thể gây bệnh nặng dù không đổi axit amin nào." },
            { title: "Dịch mã ở ribôxôm", body: "tARN mang axit amin có bộ ba đối mã khớp codon trên mARN. Ribôxôm đọc từ codon AUG mở đầu, mỗi bước dịch một codon và gắn axit amin vào chuỗi. Codon kết thúc UAA, UAG, UGA không mã hóa axit amin nào và giải phóng chuỗi polypeptit.", tip: "Ba codon kết thúc dễ nhớ qua câu U Are Away, U Are Gone, U Go Away." }
          ],
          formula: "ADN → mARN → protein, mỗi codon ứng với một axit amin"
        },
        {
          id: "ad3",
          title: "Đột biến và bệnh chuyển hóa bẩm sinh",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân loại đột biến gen và liên hệ với các bệnh chuyển hóa sàng lọc ở trẻ sơ sinh.",
          points: ["Đột biến thay thế có thể gây sai nghĩa, vô nghĩa hoặc im lặng.", "Mất hoặc thêm một nuclêôtit gây lệch khung đọc.", "Nhiều bệnh chuyển hóa bẩm sinh do thiếu một enzym trong con đường chuyển hóa."],
          steps: [
            { title: "Ba kiểu thay thế", body: "Thay G thành A trong codon GAG có thể cho AAG, đổi axit glutamic thành lysin, gây bệnh hồng cầu hình liềm. Nếu thay tạo codon kết thúc sớm thì protein bị cắt ngắn, gọi là đột biến vô nghĩa. Nếu codon mới vẫn mã hóa cùng axit amin thì gọi là im lặng.", tip: "Dùng bảng mã di truyền để kiểm tra từng codon, đừng suy đoán theo cảm giác." },
            { title: "Lệch khung đọc", body: "Mất một nuclêôtit làm toàn bộ các codon phía sau bị đọc lệch, protein gần như mất chức năng. Vì vậy đột biến mất hoặc thêm một bazơ thường nguy hiểm hơn thay thế một bazơ. Đây là lý do các bệnh như xơ nang thường do mất ba bazơ hoặc lệch khung.", tip: "Nhân đôi ba bazơ liền nhau đôi khi vẫn giữ khung, chỉ thêm một axit amin." },
            { title: "Sàng lọc sơ sinh", body: "Bệnh phenylketonuria do thiếu phenylalanin hydroxylase khiến phenylalanin tích tụ gây tổn thương não. Nếu phát hiện sớm và ăn kiêng phenylalanin, trẻ phát triển bình thường. Tương tự, thiếu hụt men G6PD gây tan máu khi dùng một số thuốc, nên sàng lọc giúp tránh thuốc nguy hiểm suốt đời.", tip: "Gắn mỗi bệnh với một enzym và một biện pháp can thiệp cụ thể để nhớ lâu." }
          ],
          formula: "Thiếu enzym → cơ chất tích tụ, sản phẩm thiếu hụt"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Liên kết peptit", back: "Liên kết giữa nhóm cacboxyl của axit amin này và nhóm amin của axit amin kế tiếp, giải phóng nước.", hint: "Hình thành kèm một phân tử nước.", example: "Tripeptit có 3 gốc axit amin và 2 liên kết peptit." },
    { front: "Cấu trúc bậc hai của protein", back: "Dạng xoắn alpha và phiến beta được giữ bởi liên kết hiđro giữa các nhóm trong khung polypeptit.", hint: "Liên kết hiđro tạo mạch cục bộ.", example: "Keratin tóc có nhiều xoắn alpha." },
    { front: "Enzym", back: "Protein xúc tác sinh học làm giảm năng lượng hoạt hóa mà không bị tiêu hao.", hint: "Chất xúc tác không bị mất đi.", example: "Amylase trong nước bọt cắt tinh bột thành đường." },
    { front: "Hằng số Km", back: "Nồng độ cơ chất tại đó vận tốc phản ứng bằng một nửa Vmax, Km nhỏ ứng với ái lực cao.", hint: "Nửa vận tốc cực đại.", example: "Hexokinase có Km khoảng 0,1 mmol/L với glucozơ." },
    { front: "Sản phẩm thuần của đường phân", back: "Một glucozơ cho 2 pyruvat, 2 ATP thuần và 2 NADH.", hint: "Tạo 4 ATP nhưng đã tiêu 2 ATP.", example: "Tế bào hồng cầu chỉ dựa vào đường phân để có ATP." },
    { front: "Lên men lactat", back: "Pyruvat nhận electron từ NADH thành lactat, tái tạo NAD+ cho đường phân tiếp tục.", hint: "Không tạo thêm ATP.", example: "Cơ co mạnh khi thiếu oxi tích tụ lactat." },
    { front: "Axetyl-CoA", back: "Sản phẩm khử cacboxyl của pyruvat, là cửa vào chu trình Krebs.", hint: "Điểm hội tụ của ba con đường chuyển hóa.", example: "Một glucozơ tạo 2 axetyl-CoA." },
    { front: "Vị trí chu trình Krebs", back: "Diễn ra ở chất nền ti thể, còn chuỗi truyền electron nằm ở màng trong ti thể.", hint: "Chất nền khác với màng trong.", example: "Tế bào không có ti thể phải lên men để có ATP." },
    { front: "Nguyên tắc bắt cặp bazơ", back: "A bắt cặp với T bằng hai liên kết hiđro, G bắt cặp với X bằng ba liên kết hiđro.", hint: "G và X bền hơn.", example: "Mạch ATGCC bổ sung với TACGG." },
    { front: "tARN", back: "ARN vận chuyển, mang axit amin tương ứng và có bộ ba đối mã khớp codon trên mARN.", hint: "Chữ t là vận chuyển.", example: "tARN mang metionin khớp codon AUG." },
    { front: "HbA1c", back: "Hemoglobin bị glycosyl hóa, phản ánh mức glucozơ máu trung bình khoảng 2 đến 3 tháng.", hint: "Trung bình dài hạn, không phải đường huyết lúc đo.", example: "HbA1c 7 phần trăm gợi ý kiểm soát đường huyết chưa tốt." },
    { front: "Phenylketonuria", back: "Bệnh do thiếu phenylalanin hydroxylase, gây tích tụ phenylalanin và tổn thương não nếu không ăn kiêng sớm.", hint: "Thiếu một enzym ở gan.", example: "Sàng lọc sơ sinh giúp phát hiện trước khi có triệu chứng." }
  ],
  quiz: [
    { q: "Một tripeptit có bao nhiêu liên kết peptit?", options: ["1", "2", "3", "4"], answer: 1, explain: "Số liên kết peptit bằng số gốc axit amin trừ một, nên 3 − 1 = 2." },
    { q: "Sản phẩm cuối của đường phân trong điều kiện hiếu khí là:", options: ["Axetyl-CoA", "Lactat", "Pyruvat", "Etanol"], answer: 2, explain: "Đường phân dừng ở pyruvat, sau đó pyruvat mới vào ti thể thành axetyl-CoA." },
    { q: "Enzym tác động lên phản ứng bằng cách:", options: ["Giảm năng lượng hoạt hóa", "Tăng năng lượng của sản phẩm", "Thay đổi hằng số cân bằng", "Tiêu thụ ATP cho mọi phản ứng"], answer: 0, explain: "Enzym hạ thấp rào cản năng lượng, không làm đổi hằng số cân bằng của phản ứng." },
    { q: "Km của một enzym được định nghĩa là:", options: ["Vận tốc tối đa của phản ứng", "Nồng độ enzym khi bão hòa cơ chất", "Hằng số cân bằng của phản ứng", "Nồng độ cơ chất khi vận tốc bằng nửa Vmax"], answer: 3, explain: "Km là đại lượng nồng độ, đặc trưng cho ái lực enzym với cơ chất." },
    { q: "Một phân tử glucozơ qua đường phân tạo ra bao nhiêu ATP thuần?", options: ["0", "1", "2", "4"], answer: 2, explain: "Tạo 4 ATP nhưng đã tiêu 2 ATP ở giai đoạn hoạt hóa, nên thuần là 2." },
    { q: "Trong phân tử ADN, ađênin bắt cặp với bazơ nào?", options: ["Guanin", "Timin", "Uraxin", "Xitozin"], answer: 1, explain: "A bắt cặp với T bằng hai liên kết hiđro, còn G bắt cặp với X." },
    { q: "Chu trình Krebs diễn ra ở đâu trong tế bào nhân thực?", options: ["Chất nền ti thể", "Màng sinh chất", "Bào tương", "Nhân tế bào"], answer: 0, explain: "Chu trình Krebs ở chất nền ti thể, chuỗi truyền electron ở màng trong ti thể." },
    { q: "Chỉ số HbA1c phản ánh điều gì?", options: ["Đường huyết ngay tại thời điểm lấy máu", "Chức năng lọc của thận", "Mức glucozơ máu trung bình 2 đến 3 tháng", "Lượng insulin tiết ra trong 24 giờ"], answer: 2, explain: "HbA1c hình thành dần theo đời sống hồng cầu nên phản ánh mức đường huyết dài hạn." },
    { q: "Loại ARN mang axit amin đến ribôxôm là:", options: ["mARN", "rARN", "ARN can thiệp", "tARN"], answer: 3, explain: "tARN mang axit amin và có bộ ba đối mã khớp với codon trên mARN." },
    { q: "Bệnh phenylketonuria do thiếu hụt enzym nào?", options: ["Hexokinase", "Phenylalanin hydroxylase", "Lactase", "Amylase"], answer: 1, explain: "Thiếu phenylalanin hydroxylase làm phenylalanin tích tụ, gây tổn thương não." }
  ],
  lab: {
    kind: "diagram",
    title: "Bản đồ đường phân có điểm chạm",
    lead: "Sơ đồ đi từ glucozơ đến pyruvat trong bào tương. Bấm vào từng chất trung gian, vào ATP hoặc NADH để xem cấu trúc, enzym xúc tác và năng lượng của bước đó.",
    stageLabel: "Sơ đồ tương tác",
    viewBox: "0 0 700 400",
    pickHint: "Chọn một mắt xích trên sơ đồ",
    layers: [
      { id: "carbon", label: "Khung cacbon" },
      { id: "coen", label: "ATP và NADH" }
    ],
    shapes: [
      { type: "ellipse", cx: 350, cy: 205, rx: 336, ry: 182, label: "", layer: "carbon", opacity: 0.05, strokeWidth: 1, info: { title: "Bào tương", desc: "Toàn bộ mười phản ứng của đường phân diễn ra trong bào tương, không cần ti thể và không cần oxi.", tags: ["Bào tương", "Không cần O2"] } },
      { type: "rect", x: 10, y: 170, w: 96, h: 56, rx: 12, label: "Glucozơ", layer: "carbon", info: { title: "Glucozơ (C6H12O6)", desc: "Đường sáu cacbon, nguyên liệu mở đầu. Bước đầu tiên gắn photphat nhờ hexokinase và tiêu một ATP.", tags: ["6C", "180 g/mol", "Hexokinase"] } },
      { type: "rect", x: 158, y: 170, w: 96, h: 56, rx: 12, label: "G6P", layer: "carbon", info: { title: "Glucozơ-6-photphat", desc: "Sản phẩm của hexokinase. Gắn photphat giữ glucozơ trong tế bào vì phân tử tích điện không qua màng dễ dàng.", tags: ["Tiêu 1 ATP", "Không qua màng"] } },
      { type: "rect", x: 306, y: 170, w: 96, h: 56, rx: 12, label: "F-1,6-BP", layer: "carbon", info: { title: "Fructozơ-1,6-bisphotphat", desc: "Tạo bởi phosphofructokinase-1, enzym điều hòa chính của đường phân, tiêu thêm một ATP và bị ức chế khi ATP cao.", tags: ["PFK-1", "Điểm điều hòa", "Tiêu 1 ATP"] } },
      { type: "rect", x: 454, y: 170, w: 96, h: 56, rx: 12, label: "2 G3P", layer: "carbon", info: { title: "Hai phân tử glyceraldehit-3-photphat", desc: "Aldolase cắt F-1,6-BP thành hai ba cacbon. Từ đây mỗi phản ứng tính theo cặp, nên sản phẩm phía sau đều nhân đôi.", tags: ["3C", "Aldolase", "Nhân đôi"] } },
      { type: "rect", x: 602, y: 170, w: 88, h: 56, rx: 12, label: "Pyruvat", layer: "carbon", info: { title: "Pyruvat (axit pyruvic)", desc: "Sản phẩm cuối của đường phân. Có oxi thì vào ti thể thành axetyl-CoA, thiếu oxi thì chuyển thành lactat.", tags: ["3C", "Pyruvat kinase", "Rẽ nhánh"] } },
      { type: "circle", cx: 132, cy: 88, r: 30, label: "ATP", layer: "coen", fill: "#7c3aed", stroke: "#7c3aed", info: { title: "ATP tiêu thụ", desc: "Hai ATP được dùng ở giai đoạn hoạt hóa, một cho hexokinase và một cho phosphofructokinase-1.", tags: ["Tiêu thụ", "Giai đoạn đầu"] } },
      { type: "circle", cx: 576, cy: 318, r: 34, label: "NADH", layer: "coen", fill: "#7c3aed", stroke: "#7c3aed", info: { title: "NADH tạo ra", desc: "Hai NADH được tạo ở bước glyceraldehit-3-photphat dehydrogenase, mang electron tới chuỗi truyền electron khi có oxi.", tags: ["2 NADH", "GAPDH"] } },
      { type: "circle", cx: 648, cy: 88, r: 30, label: "ATP", layer: "coen", fill: "#7c3aed", stroke: "#7c3aed", info: { title: "ATP sinh ra", desc: "Bốn ATP được tạo ở giai đoạn sau, trừ hai ATP đã tiêu thì thuần còn hai ATP cho mỗi glucozơ.", tags: ["Sinh ra", "4 ATP"] } }
    ],
    links: [
      { x1: 106, y1: 198, x2: 158, y2: 198, label: "HK", dash: false },
      { x1: 254, y1: 198, x2: 306, y2: 198, label: "PFK-1", dash: false },
      { x1: 402, y1: 198, x2: 454, y2: 198, label: "aldolase", dash: false },
      { x1: 550, y1: 198, x2: 602, y2: 198, label: "GAPDH", dash: false },
      { x1: 132, y1: 118, x2: 132, y2: 192, label: "", dash: true },
      { x1: 552, y1: 292, x2: 500, y2: 226, label: "", dash: true },
      { x1: 648, y1: 118, x2: 648, y2: 170, label: "", dash: true }
    ],
    controlNote: "Bật tắt lớp ATP và NADH để tập trung vào khung cacbon. Nhấn vào từng chất để đọc enzym xúc tác và sản phẩm năng lượng của bước đó.",
    note: "Toàn bộ đường phân cho 2 pyruvat, 2 ATP thuần và 2 NADH; ba enzym điều hòa là hexokinase, PFK-1 và pyruvat kinase."
  },
  teacher: {
    students: [
      { name: "Nguyễn Hải Yến", progress: 88, score: 8.9, status: "Tốt", note: "Đọc sơ đồ chuyển hóa nhanh, cần luyện câu hỏi lâm sàng." },
      { name: "Trần Đức Thịnh", progress: 57, score: 7, status: "Đang học", note: "Còn nhầm Km với Vmax khi đọc đồ thị." },
      { name: "Lê Thanh Hà", progress: 95, score: 9, status: "Tốt", note: "Giải thích tốt cơ chế hóa thẩm thấu." },
      { name: "Phạm Tuấn Vũ", progress: 31, score: 5, status: "Cần hỗ trợ", note: "Chưa phân biệt được các bậc cấu trúc protein." },
      { name: "Vũ Minh Thư", progress: 70, score: 8, status: "Đang học", note: "Nắm chắc phần ADN, cần ôn chuyển hóa lipit." },
      { name: "Đỗ Quốc Trung", progress: 49, score: 6, status: "Đang học", note: "Nên luyện lại bài tính ATP của đường phân." }
    ],
    submissions: [
      { student: "Nguyễn Hải Yến", lesson: "Phiếu ca bệnh thiếu hụt G6PD", time: "Hôm qua 20:15", status: "Chờ chấm" },
      { student: "Phạm Tuấn Vũ", lesson: "Bài tập cấu trúc protein", time: "Hôm qua 14:40", status: "Chờ chấm" },
      { student: "Lê Thanh Hà", lesson: "Sơ đồ chu trình Krebs có chú thích", time: "3 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thực hành tuần này định lượng glucozơ máu, mang áo blouse và găng tay.",
      "Sinh viên đọc trước chương bệnh chuyển hóa bẩm sinh để thảo luận ca lâm sàng.",
      "Bài kiểm tra giữa kỳ gồm sơ đồ chuyển hóa và câu hỏi enzym, thời gian 60 phút."
    ]
  },
  className: "Hóa sinh y học – Y K23",
  brief: "BTL-35_biochemlab-mon-y-sinh-hoc.md"
};
