window.BTL_DATA = {
  id: "chemstudio",
  code: "BTL-05",
  name: "ChemStudio",
  monogram: "H₂O",
  subject: "Hóa học",
  level: "Đại học",
  group: "Toán & Khoa học tự nhiên",
  accent: "#16a34a",
  accent2: "#0d9488",
  font: "display",
  tagline: "Cân bằng phương trình bằng cách nhập hệ số và xem số nguyên tử từng nguyên tố khớp nhau theo thời gian thực.",
  intro: "ChemStudio đưa bảng tuần hoàn, mô hình phân tử và máy cân bằng phương trình vào cùng một nơi. Mỗi lần nhập hệ số, bảng đối chiếu nguyên tố ở hai vế tô màu xanh khi khớp và vàng khi lệch, giúp hiểu định luật bảo toàn thay vì học thuộc.",
  hero: { title: "Hóa học", highlight: "cân bằng bằng phản ứng thật" },
  heroBadge: "Bảng tuần hoàn · Cân bằng tức thì",
  labShort: "CÂN BẰNG",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ ghi nhớ" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho Hóa học: cân bằng phương trình có kiểm tra từng nguyên tố, mô hình phân tử tương tác và bảng tuần hoàn tra cứu nhanh.",
  pathLead: "Đi từ cấu tạo nguyên tử và liên kết, sang phản ứng oxi hóa – khử và tính toán theo phương trình, rồi kết thúc ở dung dịch, pH và phản ứng trao đổi ion.",
  features: [
    { badge: "01", title: "Máy cân bằng từng nguyên tố", desc: "Nhập hệ số cho từng chất, bảng đối chiếu hiện ngay số nguyên tử hai vế và trạng thái khớp hoặc lệch cho từng nguyên tố." },
    { badge: "02", title: "Mô hình phân tử tương tác", desc: "Xoay và phóng to phân tử nước, CO2, NH3, metan với màu theo nguyên tố và chú thích khối lượng, số liên kết." },
    { badge: "03", title: "Bảng tuần hoàn tra cứu", desc: "Nhấn vào nguyên tố để xem khối lượng nguyên tử, hóa trị, cấu hình electron, từ đó dự đoán kiểu liên kết và tính mol nhanh." }
  ],
  life: [
    {
      title: "Nêm muối vào canh và váng dầu",
      scene: "Nấu nồi canh, nêm một thìa muối thì muối tan gần như ngay, còn váng dầu thả vào thì nổi thành từng giọt tách riêng. Cùng là chất cho vào nước mà cách hòa vào khác hẳn nhau.",
      connect: "Muối ăn là hợp chất ion, gặp nước thì tách thành các hạt mang điện nên tan nhanh; dầu là phân tử cộng hóa trị không phân cực nên không tan, và hiệu độ âm điện giải thích khác biệt đó."
    },
    {
      title: "Cái cổng sắt ngoài ngõ bị gỉ",
      scene: "Cổng sắt ngoài ngõ để lâu ngày mưa nắng, chỗ sơn bong chuyển sang màu nâu đỏ và bở ra khi cạo. Cạo lớp gỉ đi thì thấy sắt bên trong đã mỏng hơn lúc mới làm, chạm vào là rụng thành bụi nâu.",
      connect: "Sắt nhường electron cho oxi trong không khí ẩm: số oxi hóa của sắt tăng từ 0 lên +3, sắt là chất khử còn oxi là chất oxi hóa, và cân bằng electron cho biết tỉ lệ các chất."
    },
    {
      title: "Chén nước mắm pha cho cả nhà",
      scene: "Pha nước mắm chua ngọt, một chén mắm đặc rót thêm hai chén nước lọc và nước cốt chanh. Vị mặn loãng đi rõ rệt dù trong chén vẫn ngần ấy mắm, và vắt thêm chanh thì vị chua gắt hơn.",
      connect: "Thêm nước làm thể tích tăng còn lượng chất tan không đổi, nên nồng độ mol giảm đúng theo tỉ lệ pha loãng; thêm chanh là tăng lượng axit, tức pH giảm xuống."
    }
  ],
  modules: [
    {
      title: "Cấu tạo nguyên tử và liên kết",
      summary: "Cấu hình electron, vị trí trong bảng tuần hoàn, các kiểu liên kết và cách tính mol.",
      lessons: [
        {
          id: "nt1",
          title: "Cấu hình electron và bảng tuần hoàn",
          minutes: 20,
          level: "Cơ bản",
          summary: "Viết cấu hình electron, xác định chu kỳ, nhóm và xu hướng tính chất trong bảng tuần hoàn.",
          points: ["Số electron lớp ngoài quyết định tính chất hóa học.", "Chu kỳ bằng số lớp electron, nhóm A bằng số electron lớp ngoài.", "Trong một chu kỳ, bán kính nguyên tử giảm dần từ trái sang phải."],
          steps: [
            { title: "Viết cấu hình theo mức năng lượng", body: "Nguyên tử clo có 17 electron, cấu hình là 1s2 2s2 2p6 3s2 3p5. Lớp ngoài cùng có 7 electron nên clo thuộc nhóm VIIA, chu kỳ 3. Viết theo thứ tự mức năng lượng tăng dần rồi sắp lại theo lớp khi cần trình bày.", tip: "Đếm tổng số mũ phải bằng số hiệu nguyên tử, đây là phép kiểm tra nhanh." },
            { title: "Đọc vị trí trong bảng", body: "Canxi có cấu hình 1s2 2s2 2p6 3s2 3p6 4s2, lớp ngoài cùng là lớp 4 với 2 electron, nên ở chu kỳ 4 nhóm IIA. Kim loại nhóm IIA có hóa trị 2 và tạo ion Ca2+ khi nhường hai electron lớp ngoài.", tip: "Nhóm A đọc theo số electron lớp ngoài, nhóm B phức tạp hơn nên cần bảng tra." },
            { title: "Xu hướng biến đổi tuần hoàn", body: "Trong chu kỳ 3, bán kính giảm từ natri tới agon vì điện tích hạt nhân tăng trong khi số lớp không đổi. Độ âm điện tăng theo chiều đó, nên clo dễ nhận electron hơn natri. Hiểu xu hướng này giúp dự đoán kiểu liên kết trước khi viết phương trình.", tip: "Nhớ hai chiều: cùng chu kỳ đi ngang, cùng nhóm đi dọc." }
          ],
          formula: "Số electron = số proton = số hiệu nguyên tử Z"
        },
        {
          id: "nt2",
          title: "Liên kết ion và liên kết cộng hóa trị",
          minutes: 22,
          level: "Trung bình",
          summary: "Phân biệt liên kết ion, cộng hóa trị phân cực và không phân cực qua hiệu độ âm điện.",
          points: ["Liên kết ion hình thành khi chuyển hẳn electron giữa kim loại mạnh và phi kim mạnh.", "Liên kết cộng hóa trị dùng chung cặp electron.", "Hiệu độ âm điện lớn hơn 1,7 thường cho liên kết ion."],
          steps: [
            { title: "Xét hiệu độ âm điện", body: "Na có độ âm điện 0,93 và Cl là 3,16, hiệu bằng 2,23 nên liên kết trong NaCl là liên kết ion. Với HCl, hiệu giữa H (2,20) và Cl (3,16) là 0,96, nên liên kết là cộng hóa trị phân cực. Đây là công cụ phân loại nhanh và định lượng.", tip: "Chỉ dùng hiệu độ âm điện như quy tắc gần đúng, không phải chân lý tuyệt đối." },
            { title: "Cấu trúc tinh thể ion", body: "NaCl tồn tại dưới dạng mạng tinh thể lập phương, mỗi ion Na+ được bao quanh bởi sáu ion Cl− và ngược lại. Vì vậy công thức NaCl chỉ là tỉ lệ số ion, không phải một phân tử riêng lẻ. Điều này giải thích nhiệt độ nóng chảy cao và tính dẫn điện khi tan trong nước.", tip: "Phân biệt công thức thực nghiệm với phân tử thật khi nói về hợp chất ion." },
            { title: "Hình dạng phân tử cộng hóa trị", body: "NH3 có ba liên kết cộng hóa trị và một cặp electron tự do trên nitơ, tạo hình chóp tam giác với góc liên kết gần 107 độ. CO2 có hai liên kết đôi, phân tử thẳng hàng nên momen lưỡng cực triệt tiêu, dù từng liên kết đều phân cực.", tip: "Đếm cặp electron tự do để dự đoán góc liên kết, đừng chỉ đếm liên kết." }
          ],
          formula: "Hiệu độ âm điện > 1,7 thường là liên kết ion"
        },
        {
          id: "nt3",
          title: "Mol, khối lượng mol và thành phần phần trăm",
          minutes: 18,
          level: "Cơ bản",
          summary: "Chuyển đổi giữa khối lượng, số mol và số hạt, rồi tính phần trăm khối lượng từng nguyên tố trong hợp chất.",
          points: ["Số mol bằng khối lượng chia khối lượng mol.", "Một mol chứa 6,022 nhân 10 mũ 23 hạt.", "Phần trăm khối lượng bằng khối lượng nguyên tố chia khối lượng phân tử."],
          steps: [
            { title: "Tính số mol", body: "8 gam NaOH có khối lượng mol 40 g/mol nên số mol là 8/40 = 0,2 mol. Từ số mol, nhân với 6,022 nhân 10 mũ 23 để ra số phân tử, hoặc nhân 22,4 để ra thể tích khí ở điều kiện tiêu chuẩn. Ba phép đổi này dùng liên tục trong mọi bài hóa.", tip: "Ghi đơn vị g/mol cạnh khối lượng mol để tránh nhân chia ngược." },
            { title: "Thành phần phần trăm", body: "Trong H2O, khối lượng mol là 18 g/mol, hiđro góp 2 gam và oxi góp 16 gam. Vậy phần trăm khối lượng oxi là 16/18, xấp xỉ 88,9 phần trăm. Cách tính này dùng để kiểm tra công thức thực nghiệm của một hợp chất chưa biết.", tip: "Tổng phần trăm các nguyên tố phải bằng 100 phần trăm." },
            { title: "Từ phần trăm về công thức", body: "Hợp chất chứa 40 phần trăm cacbon, 6,7 phần trăm hiđro và 53,3 phần trăm oxi. Chia mỗi phần trăm cho khối lượng nguyên tử tương ứng được tỉ lệ 3,33 : 6,7 : 3,33, rút về 1 : 2 : 1 nên công thức thực nghiệm là CH2O. Đây là công thức của glucozơ và nhiều loại đường.", tip: "Chia cho số nhỏ nhất trong ba tỉ lệ để được tỉ lệ nguyên tối giản." }
          ],
          formula: "n = m/M ; số hạt = n·6,022·10²³ ; %m(X) = m(X)/M·100"
        }
      ]
    },
    {
      title: "Phản ứng oxi hóa – khử và cân bằng",
      summary: "Xác định số oxi hóa, cân bằng theo phương pháp thăng bằng electron và tính toán định lượng.",
      lessons: [
        {
          id: "ox1",
          title: "Số oxi hóa và nhận diện phản ứng oxi hóa – khử",
          minutes: 20,
          level: "Trung bình",
          summary: "Gán số oxi hóa theo bốn quy tắc và chỉ ra chất oxi hóa, chất khử trong phản ứng.",
          points: ["Đơn chất có số oxi hóa bằng 0.", "Hiđro thường +1, oxi thường −2, tổng trong phân tử trung hòa bằng 0.", "Chất có số oxi hóa tăng là chất khử, chất có số oxi hóa giảm là chất oxi hóa."],
          steps: [
            { title: "Gán số oxi hóa", body: "Trong H2SO4, hiđro là +1 nên hai nguyên tử góp +2, oxi là −2 nên bốn nguyên tử góp −8. Tổng phải bằng 0, vậy lưu huỳnh là +6. Với ion SO4 2−, tổng bằng −2 nên lưu huỳnh vẫn là +6, cách làm không đổi.", tip: "Luôn kiểm tra tổng số oxi hóa bằng điện tích của phân tử hoặc ion." },
            { title: "Tìm chất oxi hóa và chất khử", body: "Trong phản ứng Fe + CuSO4 tạo FeSO4 + Cu, sắt đi từ 0 lên +2 nên là chất khử, đồng đi từ +2 xuống 0 nên là chất oxi hóa. Việc tăng hay giảm số oxi hóa là dấu hiệu duy nhất cần tìm, không phụ thuộc chất nào đứng trước trong phương trình.", tip: "Đánh dấu mũi tên tăng giảm số oxi hóa ngay trên phương trình." },
            { title: "Phản ứng không phải oxi hóa – khử", body: "Phản ứng trung hòa HCl + NaOH tạo NaCl + H2O không làm đổi số oxi hóa của nguyên tố nào, nên không phải phản ứng oxi hóa – khử. Phân biệt đúng loại phản ứng giúp chọn đúng công cụ cân bằng và đúng dạng bài tính toán.", tip: "Nếu mọi số oxi hóa giữ nguyên thì đừng dùng phương pháp thăng bằng electron." }
          ],
          formula: "Tổng số oxi hóa trong phân tử trung hòa bằng 0"
        },
        {
          id: "ox2",
          title: "Cân bằng theo phương pháp thăng bằng electron",
          minutes: 26,
          level: "Nâng cao",
          summary: "Viết hai bán phản ứng, cân bằng electron trao đổi rồi ghép lại thành phương trình đầy đủ.",
          points: ["Tổng electron nhường bằng tổng electron nhận.", "Cân bằng nguyên tố phụ sau khi cân bằng electron.", "Kiểm tra lại số nguyên tử mỗi nguyên tố ở hai vế."],
          steps: [
            { title: "Viết hai quá trình", body: "Với phản ứng Al + O2 tạo Al2O3, nhôm nhường 3 electron thành Al3+, mỗi phân tử O2 nhận 4 electron thành hai O2−. Hai bán phản ứng là Al thành Al3+ cộng 3e và O2 cộng 4e thành 2O2−. Ghi rõ số electron để bước sau nhân bội cho khớp.", tip: "Viết bán phản ứng theo nguyên tử, không theo phân tử, để đếm electron chính xác." },
            { title: "Cân bằng electron", body: "Bội chung nhỏ nhất của 3 và 4 là 12, nên nhân quá trình nhôm với 4 và quá trình oxi với 3. Ta được 4Al nhường 12 electron và 3O2 nhận 12 electron. Hệ số tạm thời là 4 cho Al và 3 cho O2.", tip: "Kiểm tra tổng electron hai bên bằng nhau trước khi chuyển sang bước ghép." },
            { title: "Ghép và kiểm tra", body: "Ghép lại được 4Al + 3O2 tạo 2Al2O3. Đếm lại: nhôm 4 = 4, oxi 6 = 6, phương trình cân bằng. Trong phòng lab, nhập lần lượt 4, 3, 2 và thấy cả hai dòng nguyên tố chuyển sang trạng thái khớp.", tip: "Bước kiểm tra cuối không được bỏ, vì sai hệ số sản phẩm là lỗi phổ biến nhất." }
          ],
          formula: "4Al + 3O2 → 2Al2O3, tổng electron nhường bằng tổng electron nhận"
        },
        {
          id: "ox3",
          title: "Tính toán theo phương trình hóa học",
          minutes: 22,
          level: "Trung bình",
          summary: "Dùng tỉ lệ hệ số để tính khối lượng, thể tích chất tham gia và sản phẩm, kể cả bài có hiệu suất.",
          points: ["Tỉ lệ số mol bằng tỉ lệ hệ số trong phương trình.", "Chất hết trước quyết định lượng sản phẩm.", "Hiệu suất bằng lượng thực tế chia lượng lý thuyết."],
          steps: [
            { title: "Đổi dữ kiện về số mol", body: "Đốt 5,6 lít khí metan ở điều kiện tiêu chuẩn, số mol là 5,6/22,4 = 0,25 mol. Phương trình CH4 + 2O2 tạo CO2 + 2H2O cho thấy cần 0,5 mol O2 và sinh 0,25 mol CO2. Mọi bài tính theo phương trình đều bắt đầu bằng việc đổi về mol.", tip: "Chỉ đổi về mol sau khi đã xác định đúng chất nào là chất giới hạn." },
            { title: "Xác định chất giới hạn", body: "Nếu có 0,25 mol CH4 và 0,3 mol O2, tỉ lệ cần là 1 : 2 nhưng thực tế là 0,25 : 0,3, nên oxi thiếu. Lượng CO2 tính theo oxi: 0,15 mol. Bỏ qua bước này là nguyên nhân hàng đầu khiến kết quả sai dù hệ số đúng.", tip: "Chia số mol cho hệ số tương ứng rồi so sánh, giá trị nhỏ hơn là chất giới hạn." },
            { title: "Tính khối lượng và hiệu suất", body: "0,15 mol CO2 có khối lượng 0,15·44 = 6,6 gam. Nếu thực tế chỉ thu 5,28 gam thì hiệu suất là 5,28/6,6 = 80 phần trăm. Hiệu suất luôn nhỏ hơn hoặc bằng 100 phần trăm, nếu lớn hơn thì đã nhầm chất hoặc nhầm khối lượng mol.", tip: "Đặt hiệu suất vào cuối bài, sau khi đã có lượng lý thuyết." }
          ],
          formula: "n(A)/hệ số A = n(B)/hệ số B ; H = m(thực tế)/m(lý thuyết)·100%"
        }
      ]
    },
    {
      title: "Dung dịch, axit – bazơ và điện li",
      summary: "Nồng độ mol, pha loãng, pH và các phản ứng trao đổi ion trong dung dịch.",
      lessons: [
        {
          id: "dd1",
          title: "Nồng độ mol và bài toán pha loãng",
          minutes: 18,
          level: "Cơ bản",
          summary: "Tính nồng độ mol từ số mol và thể tích, áp dụng công thức pha loãng để pha dung dịch mới.",
          points: ["Nồng độ mol bằng số mol chia thể tích tính bằng lít.", "Pha loãng không làm đổi số mol chất tan.", "C1·V1 = C2·V2 khi chỉ thêm dung môi."],
          steps: [
            { title: "Tính nồng độ", body: "Hòa tan 0,1 mol NaCl vào nước thu được 250 ml dung dịch, nồng độ là 0,1/0,25 = 0,4 M. Cần đổi mililit sang lít trước khi chia, đây là lỗi đơn vị phổ biến nhất trong chương dung dịch.", tip: "Viết thể tích bằng lít ngay từ dòng đầu của bài giải." },
            { title: "Pha loãng dung dịch", body: "Lấy 100 ml dung dịch HCl 1 M pha thành 500 ml. Số mol HCl không đổi là 0,1 mol, nên nồng độ mới là 0,1/0,5 = 0,2 M. Dùng công thức C1·V1 = C2·V2 cho cùng kết quả và nhanh hơn khi chỉ pha loãng.", tip: "Công thức pha loãng chỉ đúng khi thêm dung môi, không thêm chất tan." },
            { title: "Trộn hai dung dịch cùng chất", body: "Trộn 200 ml NaCl 0,5 M với 300 ml NaCl 0,2 M. Tổng số mol là 0,1 + 0,06 = 0,16 mol trong 0,5 lít, nồng độ 0,32 M. Không được lấy trung bình cộng hai nồng độ vì thể tích hai dung dịch khác nhau.", tip: "Luôn cộng số mol và cộng thể tích riêng rồi mới chia." }
          ],
          formula: "C(M) = n/V ; C1·V1 = C2·V2"
        },
        {
          id: "dd2",
          title: "pH và phản ứng trung hòa",
          minutes: 22,
          level: "Trung bình",
          summary: "Tính pH của dung dịch axit, bazơ mạnh và xác định lượng bazơ cần để trung hòa một lượng axit.",
          points: ["pH bằng âm logarit thập phân của nồng độ ion H+.", "Axit mạnh phân li hoàn toàn nên nồng độ H+ bằng nồng độ axit.", "Phản ứng trung hòa có tỉ lệ mol theo phương trình."],
          steps: [
            { title: "Tính pH của axit mạnh", body: "Dung dịch HCl 0,01 M phân li hoàn toàn cho nồng độ H+ bằng 0,01, tức 10 mũ trừ 2. Vậy pH bằng 2. Dung dịch càng loãng thì pH càng gần 7, và ở 25 độ C nước tinh khiết có pH trung tính bằng 7.", tip: "Nhớ pH + pOH = 14 ở 25 độ C cho dung dịch nước." },
            { title: "Tính pH của bazơ mạnh", body: "NaOH 0,001 M cho nồng độ OH− bằng 10 mũ trừ 3, nên pOH bằng 3 và pH bằng 11. Cần phân biệt rõ đại lượng nào đang tính, vì nhầm H+ với OH− sẽ lệch đúng 14 đơn vị pH.", tip: "Viết rõ bước trung gian pOH trước khi suy ra pH." },
            { title: "Bài toán trung hòa", body: "Trung hòa 50 ml HCl 0,2 M cần bao nhiêu ml NaOH 0,1 M. Số mol HCl là 0,01 mol, phương trình cho tỉ lệ 1 : 1 nên cần 0,01 mol NaOH, tương ứng 100 ml. Với axit hai nấc như H2SO4, hệ số tỉ lệ là 1 : 2 và thể tích bazơ tăng gấp đôi.", tip: "Đọc hệ số phương trình trước khi nhân chéo thể tích và nồng độ." }
          ],
          formula: "pH = −log[H+] ; pH + pOH = 14"
        },
        {
          id: "dd3",
          title: "Phản ứng trao đổi ion và kết tủa",
          minutes: 20,
          level: "Trung bình",
          summary: "Viết phương trình ion thu gọn và nhận biết khi nào phản ứng trao đổi thực sự xảy ra.",
          points: ["Phản ứng trao đổi xảy ra khi tạo kết tủa, khí hoặc chất điện li yếu.", "Phương trình ion thu gọn chỉ giữ các ion thực sự phản ứng.", "Ion khán giả không tham gia phản ứng."],
          steps: [
            { title: "Nhận biết dấu hiệu phản ứng", body: "Trộn dung dịch AgNO3 với NaCl thấy xuất hiện kết tủa trắng AgCl. Đó là dấu hiệu phản ứng xảy ra. Nếu trộn hai dung dịch muối không tạo kết tủa, không tạo khí và không tạo chất điện li yếu thì thực chất không có phản ứng.", tip: "Ghi nhớ ba dấu hiệu: kết tủa, khí, nước." },
            { title: "Viết phương trình ion thu gọn", body: "Phương trình phân tử là AgNO3 + NaCl tạo AgCl + NaNO3. Ion Na+ và NO3− có mặt ở cả hai vế nên bị lược bỏ. Phương trình ion thu gọn chỉ còn Ag+ + Cl− tạo AgCl kết tủa, thể hiện đúng bản chất phản ứng.", tip: "Chỉ tách các chất điện li mạnh thành ion, giữ nguyên kết tủa và chất khí." },
            { title: "Bài toán tính khối lượng kết tủa", body: "Trộn 100 ml AgNO3 0,1 M với 100 ml NaCl 0,1 M. Số mol mỗi chất là 0,01 mol, tỉ lệ 1 : 1 nên tạo 0,01 mol AgCl. Khối lượng kết tủa là 0,01·143,5 = 1,435 gam. Thể tích sau khi trộn tăng gấp đôi nhưng không ảnh hưởng tới lượng kết tủa.", tip: "Kiểm tra chất giới hạn trước khi tính khối lượng kết tủa." }
          ],
          formula: "Ag+ + Cl− → AgCl↓, xảy ra khi tích nồng độ vượt tích số tan"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Số mol", back: "n = m/M, với m là khối lượng gam và M là khối lượng mol g/mol.", hint: "Khối lượng chia khối lượng mol.", example: "8 gam NaOH có M = 40 cho n = 0,2 mol." },
    { front: "Số Avogadro", back: "Một mol chất chứa 6,022 nhân 10 mũ 23 hạt vi mô.", hint: "Hằng số dùng để đổi mol sang số hạt.", example: "0,5 mol nước chứa khoảng 3,011 nhân 10 mũ 23 phân tử." },
    { front: "Số oxi hóa của oxi và hiđro", back: "Oxi thường là −2, hiđro thường là +1, trừ hiđrua kim loại và peoxit.", hint: "Có ngoại lệ trong peoxit và hiđrua.", example: "Trong H2O, hai hiđro +2 và oxi −2 cho tổng bằng 0." },
    { front: "Chất oxi hóa", back: "Chất nhận electron, số oxi hóa giảm sau phản ứng.", hint: "Nhận electron thì bị khử.", example: "Cu2+ trong CuSO4 là chất oxi hóa khi tác dụng với Fe." },
    { front: "Thăng bằng electron", back: "Tổng số electron nhường bằng tổng số electron nhận, dùng để tìm hệ số.", hint: "Bội chung nhỏ nhất của số electron.", example: "Al nhường 3e và O2 nhận 4e, nhân 4 và 3." },
    { front: "Nồng độ mol", back: "C(M) = n/V với V tính bằng lít.", hint: "Số mol chia thể tích lít.", example: "0,1 mol trong 250 ml cho C = 0,4 M." },
    { front: "Công thức pha loãng", back: "C1·V1 = C2·V2 khi chỉ thêm dung môi vào dung dịch.", hint: "Số mol chất tan không đổi.", example: "100 ml HCl 1 M pha thành 500 ml cho 0,2 M." },
    { front: "pH", back: "pH = −log[H+], ở 25 độ C thì pH + pOH = 14.", hint: "Âm logarit nồng độ ion hiđro.", example: "HCl 0,01 M có pH = 2." },
    { front: "Liên kết ion", back: "Lực hút tĩnh điện giữa các ion trái dấu, thường gặp giữa kim loại mạnh và phi kim mạnh.", hint: "Có sự chuyển hẳn electron.", example: "NaCl là hợp chất ion, dẫn điện khi tan trong nước." },
    { front: "Liên kết cộng hóa trị", back: "Hai nguyên tử dùng chung một hay nhiều cặp electron.", hint: "Dùng chung electron.", example: "Phân tử H2 có một cặp electron dùng chung." },
    { front: "Định luật bảo toàn khối lượng", back: "Tổng khối lượng chất tham gia bằng tổng khối lượng sản phẩm.", hint: "Số nguyên tử mỗi nguyên tố không đổi.", example: "Đốt 16 gam CH4 cần 64 gam O2, thu 44 gam CO2 và 36 gam H2O." },
    { front: "Hiệu suất phản ứng", back: "H bằng lượng thực tế chia lượng lý thuyết nhân 100 phần trăm.", hint: "Luôn nhỏ hơn hoặc bằng 100 phần trăm.", example: "Lý thuyết 6,6 gam, thực tế 5,28 gam cho H = 80 phần trăm." }
  ],
  quiz: [
    { q: "Số oxi hóa của lưu huỳnh trong H2SO4 là:", options: ["−2", "0", "+4", "+6"], answer: 3, explain: "Hai hiđro là +2, bốn oxi là −8, tổng bằng 0 nên lưu huỳnh là +6." },
    { q: "Hệ số cân bằng của phản ứng Fe + O2 tạo Fe2O3 là:", options: ["2, 1, 1", "4, 3, 2", "3, 2, 1", "4, 2, 2"], answer: 1, explain: "4Fe + 3O2 tạo 2Fe2O3: sắt 4 = 4 và oxi 6 = 6." },
    { q: "Dung dịch HCl 0,01 M có pH bằng:", options: ["2", "1", "12", "0,01"], answer: 0, explain: "Axit mạnh phân li hoàn toàn nên [H+] = 0,01 và pH = 2." },
    { q: "Số mol có trong 8 gam NaOH, biết M = 40 g/mol, là:", options: ["0,1 mol", "0,5 mol", "0,2 mol", "2 mol"], answer: 2, explain: "n = m/M = 8/40 = 0,2 mol." },
    { q: "Nguyên tố ở chu kỳ 3, nhóm VIIA là:", options: ["F", "Cl", "Br", "S"], answer: 1, explain: "Chu kỳ 3 nhóm VIIA là clo, có 7 electron lớp ngoài cùng ở lớp thứ ba." },
    { q: "Chất oxi hóa là chất:", options: ["Nhận electron và có số oxi hóa giảm", "Nhường electron và có số oxi hóa tăng", "Tạo kết tủa trong dung dịch", "Làm quỳ tím chuyển màu"], answer: 0, explain: "Chất oxi hóa nhận electron, số oxi hóa giảm, còn chất khử thì ngược lại." },
    { q: "0,5 mol khí ở điều kiện tiêu chuẩn chiếm thể tích:", options: ["2,24 lít", "22,4 lít", "5,6 lít", "11,2 lít"], answer: 3, explain: "V = n·22,4 = 0,5·22,4 = 11,2 lít." },
    { q: "Dung dịch NaCl dẫn được điện vì:", options: ["Phân tử NaCl phân cực mạnh", "Có electron tự do trong dung dịch", "Có ion Na+ và Cl− chuyển động tự do", "Nước bay hơi tạo dòng"], answer: 2, explain: "Chất điện li phân li thành ion chuyển động tự do, chính các ion này tải điện." },
    { q: "Pha 100 ml dung dịch HCl 1 M thành 500 ml thì nồng độ mới là:", options: ["0,2 M", "0,5 M", "5 M", "0,1 M"], answer: 0, explain: "Số mol giữ nguyên 0,1 mol, thể tích 0,5 lít cho C = 0,2 M." },
    { q: "Liên kết trong phân tử NaCl là liên kết:", options: ["Cộng hóa trị không phân cực", "Cộng hóa trị phân cực", "Kim loại", "Ion"], answer: 3, explain: "Na nhường electron cho Cl tạo hai ion trái dấu hút nhau bằng lực tĩnh điện." }
  ],
  lab: {
    kind: "equation",
    title: "Cân bằng phản ứng đốt cháy propan",
    lead: "Nhập hệ số cho C3H8, O2, CO2 và H2O. Bảng bên dưới đếm số nguyên tử cacbon, hiđro, oxi ở hai vế và báo khớp hoặc lệch ngay khi bạn đổi số.",
    stageLabel: "Cân bằng phương trình",
    species: { left: ["C3H8", "O2"], right: ["CO2", "H2O"] },
    correct: [1, 5, 3, 4],
    controlNote: "Bắt đầu bằng cacbon, sau đó hiđro và cuối cùng là oxi. Bấm nút điền hệ số đúng để đối chiếu với kết quả của bạn.",
    note: "C3H8 + 5O2 tạo 3CO2 + 4H2O: cacbon 3 = 3, hiđro 8 = 8, oxi 10 = 6 + 4, định luật bảo toàn nguyên tố được thỏa mãn."
  },
  teacher: {
    students: [
      { name: "Nguyễn Phương Thảo", progress: 86, score: 8.8, status: "Tốt", note: "Cân bằng nhanh, cần chú ý bài có hiệu suất." },
      { name: "Trần Văn Sơn", progress: 52, score: 6, status: "Đang học", note: "Hay quên đổi mililit sang lít." },
      { name: "Lê Hồng Nhung", progress: 94, score: 9, status: "Tốt", note: "Viết phương trình ion thu gọn rất chuẩn." },
      { name: "Phạm Anh Tuấn", progress: 29, score: 4.5, status: "Cần hỗ trợ", note: "Chưa gán đúng số oxi hóa trong hợp chất có oxi." },
      { name: "Vũ Thị Hạnh", progress: 67, score: 7, status: "Đang học", note: "Tiến bộ ở phần pH, cần ôn lại liên kết." },
      { name: "Đỗ Minh Khang", progress: 44, score: 6, status: "Đang học", note: "Nên luyện thêm bài xác định chất giới hạn." }
    ],
    submissions: [
      { student: "Nguyễn Phương Thảo", lesson: "Phiếu cân bằng 5 phản ứng oxi hóa – khử", time: "Hôm qua 21:30", status: "Chờ chấm" },
      { student: "Phạm Anh Tuấn", lesson: "Bài tập số oxi hóa", time: "Hôm qua 15:50", status: "Chờ chấm" },
      { student: "Lê Hồng Nhung", lesson: "Báo cáo thí nghiệm trung hòa", time: "4 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thực hành thứ Sáu tại phòng thí nghiệm 3, mặc áo blouse và mang kính bảo hộ.",
      "Bài kiểm tra giữa kỳ gồm cân bằng phương trình và bài toán dung dịch.",
      "Sinh viên cần hoàn thành phiếu an toàn phòng thí nghiệm trước khi vào ca thực hành."
    ]
  },
  className: "Hóa học đại cương – K25",
  brief: "BTL-05_chemstudio-mon-hoa-hoc.md"
};
