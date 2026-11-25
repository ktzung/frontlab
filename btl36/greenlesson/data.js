window.BTL_DATA = {
  id: "greenlesson",
  code: "BTL-30",
  name: "GreenLesson",
  monogram: "CO₂",
  subject: "Khoa học môi trường",
  level: "Đại học",
  group: "Môi trường & Nông nghiệp",
  accent: "#15803d",
  accent2: "#65a30d",
  font: "display",
  tagline: "Đọc một chuỗi số liệu ô nhiễm như đọc bản tin thời tiết, rồi biến nó thành quyết định giảm thiểu.",
  intro: "GreenLesson đưa các chỉ số AQI, PM2.5, COD, BOD5 lên dashboard có biểu đồ xu hướng, để sinh viên nhìn thấy mức ô nhiễm thay đổi theo giờ thay vì học thuộc bảng ngưỡng. Mỗi chương gắn với một tình huống quan trắc thật, một bài tập tình huống và một phòng lab để kiểm chứng cách đọc số.",
  hero: { title: "Khoa học môi trường", highlight: "nhìn bằng số liệu và biểu đồ" },
  heroBadge: "Dashboard ô nhiễm · Cẩm nang tái chế",
  labShort: "AQI",
  labTag: "PHÒNG LAB",
  practiceTag: "FLASHCARD",
  roleTag: "4 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "7", label: "Chỉ số quan trắc" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt được chọn cho môn Khoa học môi trường: nhìn chuỗi số liệu, phân loại chất thải bằng tay và tra ngưỡng ngay trên bản tin.",
  pathLead: "Đi từ cách quy đổi và đọc chỉ số ô nhiễm, sang tác động lên hệ sinh thái, rồi kết thúc bằng giải pháp giảm thiểu và kiểm kê phát thải. Chương nào cũng có số liệu để tính lại.",
  features: [
    { badge: "01", title: "Biểu đồ AQI theo giờ", desc: "Chuỗi số liệu bảy ngày của trạm Cầu Giấy được vẽ thành đường, kèm đường ngưỡng để thấy ngày nào vượt mức kém." },
    { badge: "02", title: "Phân loại rác từng bước", desc: "Kéo từng món chất thải vào thùng hữu cơ, tái chế hoặc nguy hại; chọn sai sẽ hiện giải thích theo quy định phân loại tại nguồn." },
    { badge: "03", title: "Bản tin ngưỡng có tooltip", desc: "Rê chuột vào một ô chỉ số để xem đơn vị, ngưỡng quy chuẩn và nhóm người cần cảnh báo, không phải mở lại giáo trình." }
  ],
  modules: [
    {
      title: "Chỉ số ô nhiễm & quan trắc",
      summary: "Quy đổi nồng độ thành chỉ số, đọc chuỗi số liệu theo giờ và phân biệt ô nhiễm không khí với ô nhiễm nước.",
      lessons: [
        {
          id: "aq1",
          title: "AQI và sáu khoảng phân hạng",
          minutes: 18,
          level: "Cơ bản",
          summary: "Đọc chỉ số AQI theo sáu khoảng màu và hiểu vì sao một con số 152 đã là cảnh báo sức khỏe.",
          points: [
            "AQI gộp nhiều chất ô nhiễm vào một thang điểm từ 0 đến 500.",
            "Sáu khoảng hạng tương ứng mức ảnh hưởng tăng dần tới nhóm nhạy cảm.",
            "AQI của một giờ lấy chỉ số phụ cao nhất, không lấy trung bình."
          ],
          steps: [
            {
              title: "Đọc một con số cụ thể",
              body: "Trạm quan trắc ở Cầu Giấy ghi AQI 152 lúc 8 giờ sáng. Đây không phải nồng độ mà là điểm quy đổi: 0–50 tốt, 51–100 trung bình, 101–150 kém, 151–200 xấu, 201–300 rất xấu, trên 300 nguy hại. Với AQI 152, người già, trẻ nhỏ và người có bệnh hô hấp nên giảm vận động mạnh ngoài trời.",
              tip: "Nhớ năm mốc 50 – 100 – 150 – 200 – 300, mỗi mốc là một lần đổi màu cảnh báo."
            },
            {
              title: "Chất nào đang quyết định",
              body: "AQI của một giờ bằng giá trị lớn nhất trong các chỉ số phụ của PM2.5, PM10, O3, NO2, SO2 và CO. Trạm báo 152 có thể vì PM2.5 đạt 65 µg/m³ trong khi O3 chỉ ở mức trung bình. Vì vậy khi phân tích, luôn mở kèm bảng chỉ số phụ để biết nên khuyến nghị gì.",
              tip: "Đừng cộng hay lấy trung bình các chỉ số phụ; chúng khác đơn vị và khác ngưỡng."
            },
            {
              title: "Nội suy giữa hai mốc bảng",
              body: "Mỗi chất có bảng nồng độ riêng. Chỉ số phụ nội suy tuyến tính giữa hai mốc: PM2.5 65 µg/m³ nằm giữa mốc 55 µg/m³ ứng với AQI 150 và mốc 150 µg/m³ ứng với AQI 200, cho kết quả khoảng 156. Công thức này giải thích vì sao cùng một nồng độ có thể ra điểm khác nhau ở hai bảng quy đổi.",
              tip: "Thử thay nồng độ đúng bằng một mốc bảng, kết quả phải trùng đúng chỉ số của mốc đó."
            }
          ],
          formula: "Ip = (I_high − I_low)/(C_high − C_low) × (C − C_low) + I_low"
        },
        {
          id: "aq2",
          title: "PM2.5 và chuỗi số liệu theo giờ",
          minutes: 20,
          level: "Cơ bản",
          summary: "Dựng chuỗi nồng độ bụi mịn trong ngày, nhận ra hai đỉnh giao thông và tính trung bình 24 giờ đúng cách.",
          points: [
            "PM2.5 là hạt có đường kính dưới 2,5 micromet, vào tới phế nang.",
            "Ngưỡng so sánh là trung bình 24 giờ, không phải giá trị cao nhất trong ngày.",
            "Chuỗi theo giờ cho thấy đỉnh sáng và đỉnh chiều tối rất rõ."
          ],
          steps: [
            {
              title: "Ghi chuỗi theo giờ",
              body: "Một ngày đo tại trạm ven đường cho các giá trị PM2.5: 6 giờ là 42, 8 giờ là 78, 12 giờ là 35, 18 giờ là 82 µg/m³. Hai đỉnh trùng giờ cao điểm giao thông, còn buổi trưa thấp vì biên độ xáo trộn khí quyển tăng và lượng xe giảm.",
              tip: "Vẽ trục giờ trước, đánh dấu hai đỉnh, rồi mới ghi giá trị để không rối."
            },
            {
              title: "Tính trung bình 24 giờ",
              body: "Cộng đủ 24 giá trị giờ rồi chia 24, không được lấy trung bình của vài giờ đẹp. Nếu chuỗi chỉ có 18 giờ đo, phải ghi rõ là dữ liệu thiếu, không suy ra ngưỡng ngày. Ngưỡng trung bình 24 giờ của bụi mịn trong quy chuẩn không khí xung quanh là 50 µg/m³.",
              tip: "Trước khi kết luận vượt ngưỡng, đếm xem đã đủ 24 giá trị chưa."
            },
            {
              title: "Đọc xu hướng chứ không chỉ đọc đỉnh",
              body: "Ba ngày liên tiếp có trung bình 24 giờ là 48, 52 và 55 µg/m³ cho thấy xu hướng tăng nhẹ dù chưa ngày nào vượt xa ngưỡng. Xu hướng tăng ba ngày là tín hiệu để kiểm tra nguồn phát thải, ví dụ một công trường mới hoạt động gần trạm.",
              tip: "So sánh trung bình trượt ba ngày sẽ ổn định hơn so sánh từng giờ."
            }
          ],
          formula: "PM2.5 trung bình 24h = (Σ giá trị 24 giờ) / 24"
        },
        {
          id: "aq3",
          title: "COD, BOD5 và ô nhiễm nguồn nước",
          minutes: 22,
          level: "Trung bình",
          summary: "Phân biệt hai chỉ số oxy hóa và dùng tỉ số BOD5/COD để đoán khả năng phân hủy sinh học của nước thải.",
          points: [
            "COD đo lượng oxy cần để oxy hóa học toàn bộ chất hữu cơ.",
            "BOD5 đo lượng oxy vi sinh tiêu thụ trong năm ngày ở 20 độ C.",
            "Tỉ số BOD5/COD cao cho thấy nước thải dễ xử lý bằng vi sinh."
          ],
          steps: [
            {
              title: "Hai phép đo, hai câu hỏi",
              body: "Mẫu nước thải lấy sau cổng nhà máy có COD 180 mg/L và BOD5 95 mg/L. COD trả lời câu hỏi tổng chất hữu cơ là bao nhiêu, còn BOD5 trả lời phần nào vi sinh có thể ăn được trong điều kiện hiếu khí. Chênh lệch giữa hai chỉ số là phần chất hữu cơ khó phân hủy.",
              tip: "COD luôn lớn hơn hoặc bằng BOD5; nếu ngược lại thì mẫu hoặc phép đo có vấn đề."
            },
            {
              title: "Đọc tỉ số",
              body: "Tỉ số BOD5/COD bằng 95/180, khoảng 0,53, nghĩa là hơn một nửa chất hữu cơ phân hủy sinh học được, phù hợp với bể bùn hoạt tính. Nếu tỉ số dưới 0,3 như mẫu nước sông Cầu có COD 68 và BOD5 18 mg/L, cần thêm bước xử lý hóa lý trước khi thả ra nguồn.",
              tip: "Ghi tỉ số kèm hai giá trị gốc, đừng chỉ ghi một con số đã chia."
            },
            {
              title: "So với quy chuẩn xả thải",
              body: "Nước thải công nghiệp xả vào nguồn không dùng cho cấp nước sinh hoạt thường so với cột B của quy chuẩn nước thải, với COD 150 mg/L và BOD5 50 mg/L. Mẫu có COD 180 và BOD5 95 vượt cả hai ngưỡng, nên kết luận là chưa đạt và phải nêu rõ mức vượt bao nhiêu lần.",
              tip: "Nêu cả giá trị đo, ngưỡng và tỉ lệ vượt; thiếu một trong ba là kết luận chưa đủ."
            }
          ],
          formula: "Tỉ số phân hủy sinh học = BOD5 / COD"
        }
      ]
    },
    {
      title: "Sinh thái & tác động môi trường",
      summary: "Theo dõi dòng năng lượng, đọc sinh vật chỉ thị và lập ma trận tác động cho một dự án cụ thể.",
      lessons: [
        {
          id: "st1",
          title: "Dòng năng lượng và chuỗi thức ăn",
          minutes: 20,
          level: "Cơ bản",
          summary: "Tính năng lượng truyền qua bốn bậc dinh dưỡng và giải thích vì sao chuỗi thức ăn thường ngắn.",
          points: [
            "Năng lượng đi từ sinh vật sản xuất lên các bậc tiêu thụ theo một chiều.",
            "Mỗi bậc chỉ giữ lại khoảng 10% năng lượng nhận được.",
            "Chuỗi càng dài thì năng lượng tới bậc cuối càng nhỏ."
          ],
          steps: [
            {
              title: "Bắt đầu từ sinh vật sản xuất",
              body: "Một hecta lúa đồng bằng sông Hồng tích lũy khoảng 10.000 kcal năng lượng hóa học trong sinh khối mỗi vụ. Con số này là điểm xuất phát của mọi chuỗi thức ăn trong hệ sinh thái nông nghiệp, từ châu chấu ăn lá đến chim sâu ăn sâu.",
              tip: "Luôn quy về cùng một đơn vị năng lượng trước khi so sánh các bậc."
            },
            {
              title: "Nhân với hiệu suất sinh thái",
              body: "Với hiệu suất 10%, châu chấu chỉ nhận 1.000 kcal, ếch nhận 100 kcal và rắn nhận 10 kcal. Vì vậy hệ sinh thái chỉ nuôi được rất ít sinh vật bậc cao. Đây cũng là lý do khuyến nghị ăn thực vật bậc thấp giúp giảm áp lực lên đất và nước.",
              tip: "Dùng bảng ba cột bậc dinh dưỡng, năng lượng nhận, năng lượng mất để tránh nhầm."
            },
            {
              title: "Ảnh hưởng khi mất một mắt xích",
              body: "Nếu dùng thuốc trừ sâu diệt sạch châu chấu, ếch mất nguồn thức ăn và giảm số lượng, sau đó rắn cũng giảm theo. Hiện tượng lan truyền này giải thích vì sao biện pháp hóa học tràn lan thường làm hệ sinh thái đồng ruộng mất cân bằng nhanh hơn dự đoán.",
              tip: "Vẽ lại chuỗi khi bỏ một mắt xích để thấy bậc nào bị ảnh hưởng trước."
            }
          ],
          formula: "Năng lượng bậc n+1 ≈ 10% × năng lượng bậc n"
        },
        {
          id: "st2",
          title: "Đa dạng sinh học và sinh vật chỉ thị",
          minutes: 22,
          level: "Trung bình",
          summary: "Dùng nhóm sinh vật chỉ thị để đánh giá nhanh chất lượng nước và sức khỏe của một đoạn sông.",
          points: [
            "Sinh vật chỉ thị phản ánh điều kiện môi trường qua sự có mặt hay vắng mặt.",
            "Ấu trùng phù du, cánh úp và cánh cứng ưa nước sạch, nhóm ưa ô nhiễm thì ngược lại.",
            "Chỉ số đa dạng cần đọc cùng mức độ ưu thế của loài chiếm đông."
          ],
          steps: [
            {
              title: "Chọn nhóm chỉ thị",
              body: "Khảo sát đoạn sông sau khu công nghiệp, nhóm ấu trùng phù du gần như vắng mặt trong khi giun ít tơ và ốc bươu vàng xuất hiện dày. Sự đảo chiều này là dấu hiệu hữu cơ hóa, vì nhóm sau chịu được nồng độ oxy hòa tan thấp.",
              tip: "Lấy mẫu ở cả thượng lưu và hạ lưu để có mốc so sánh."
            },
            {
              title: "Tính điểm chỉ thị",
              body: "Mỗi họ sinh vật được gán điểm từ 1 đến 10 theo mức chịu ô nhiễm, cộng điểm các họ thu được để ra điểm tổng. Đoạn sông đạt 24 điểm thuộc mức ô nhiễm trung bình, trong khi đoạn thượng lưu đạt 68 điểm cho thấy nước còn tốt. Cách cho điểm giúp so sánh nhiều đoạn mà không cần phòng thí nghiệm.",
              tip: "Ghi rõ bảng điểm tham chiếu, nếu không con số tổng sẽ vô nghĩa với người đọc."
            },
            {
              title: "Đọc cả mức ưu thế",
              body: "Hai đoạn sông có thể cùng 12 loài nhưng một đoạn do một loài chiếm 80% cá thể. Khi đó chỉ số đa dạng giảm mạnh dù số loài bằng nhau. Vì vậy báo cáo cần nêu cả số loài và tỉ lệ cá thể của loài ưu thế.",
              tip: "Nếu một loài chiếm quá nửa số cá thể, hãy kiểm tra lại khả năng nhiễm bẩn hữu cơ."
            }
          ],
          formula: "Chỉ số đa dạng phụ thuộc số loài và độ đồng đều cá thể"
        },
        {
          id: "st3",
          title: "Đánh giá tác động môi trường",
          minutes: 24,
          level: "Nâng cao",
          summary: "Lập ma trận tác động cho một dự án cụ thể, từ xác định phạm vi đến đề xuất biện pháp giảm thiểu.",
          points: [
            "ĐTM phải xác định phạm vi không gian, thời gian và đối tượng chịu tác động.",
            "Ma trận tác động chấm điểm theo quy mô và tầm quan trọng.",
            "Biện pháp giảm thiểu phải gắn với từng tác động đã nhận diện."
          ],
          steps: [
            {
              title: "Khoanh vùng tác động",
              body: "Một nhà máy xi măng công suất 1,2 triệu tấn mỗi năm có vùng ảnh hưởng bụi trong bán kính vài kilomet, ảnh hưởng tiếng ồn hẹp hơn nhưng tập trung gần cổng. Bước đầu tiên là liệt kê hoạt động theo ba giai đoạn: xây dựng, vận hành và đóng bãi.",
              tip: "Đừng bỏ giai đoạn xây dựng, đây là lúc bụi và tiếng ồn cao nhất."
            },
            {
              title: "Chấm ma trận",
              body: "Lập bảng hoạt động theo hàng, thành phần môi trường theo cột, mỗi ô chấm từ 1 đến 5 cho quy mô và từ 1 đến 5 cho tầm quan trọng. Ô nghiền clinker có bụi quy mô 4 và tầm quan trọng 5, cho điểm 20, cao hơn hẳn ô vận chuyển nội bộ. Điểm cao là nơi ưu tiên biện pháp.",
              tip: "Chấm điểm theo cùng một thang cho mọi ô, tránh mỗi người một cách hiểu."
            },
            {
              title: "Đề xuất và giám sát",
              body: "Với ô điểm 20, biện pháp phù hợp là che kín băng tải, lắp lọc bụi túi và quan trắc bụi tổng tại bốn hướng gió. Mỗi biện pháp cần gắn chỉ số giám sát và tần suất đo, ví dụ đo bụi mỗi tháng và tiếng ồn mỗi quý. Thiếu phần giám sát thì báo cáo chỉ là danh sách nguyện vọng.",
              tip: "Mỗi biện pháp nên có một chỉ số đo được, một tần suất và một người chịu trách nhiệm."
            }
          ],
          formula: "Điểm tác động = Quy mô × Tầm quan trọng"
        }
      ]
    },
    {
      title: "Giảm thiểu, tái chế & khí hậu",
      summary: "Từ phân loại rác tại nguồn đến vòng đời sản phẩm và kiểm kê phát thải theo ba phạm vi.",
      lessons: [
        {
          id: "rc1",
          title: "Phân loại chất thải tại nguồn",
          minutes: 18,
          level: "Cơ bản",
          summary: "Chia rác sinh hoạt thành ba nhóm đúng quy định và xử lý riêng nhóm nguy hại trong hộ gia đình.",
          points: [
            "Chất thải rắn sinh hoạt được phân thành nhóm tái sử dụng tái chế, nhóm thực phẩm và nhóm khác.",
            "Pin, bóng đèn huỳnh quang, thuốc hết hạn phải tách riêng vì chứa thành phần nguy hại.",
            "Phân loại tại nguồn quyết định chi phí và hiệu quả của cả chuỗi xử lý phía sau."
          ],
          steps: [
            {
              title: "Ba thùng, ba câu hỏi",
              body: "Mỗi hộ ở Hà Nội thải trung bình khoảng 1 kg rác mỗi ngày, trong đó hơn một nửa là chất thải thực phẩm. Trước khi bỏ, hỏi ba câu: món này còn dùng lại hoặc bán phế liệu được không, món này phân hủy sinh học được không, và món này có thành phần nguy hại không. Ba câu trả lời dẫn tới ba thùng khác nhau.",
              tip: "Đặt thùng hữu cơ gần bếp, thùng tái chế ở lối ra vào để thao tác thuận tay."
            },
            {
              title: "Tách nhóm nguy hại",
              body: "Một viên pin tiểu trong rác sinh hoạt có thể lẫn kim loại nặng vào nước rỉ rác. Bóng đèn huỳnh quang chứa thủy ngân, thuốc hết hạn chứa hoạt chất khó phân hủy. Ba loại này cần điểm thu gom riêng, không để chung với rác thực phẩm dù khối lượng rất nhỏ.",
              tip: "Giữ một hộp nhỏ có nắp trong ngăn kéo để tích pin và bóng đèn, vài tháng mang đi một lần."
            },
            {
              title: "Kiểm tra kết quả phân loại",
              body: "Một túi rác hữu cơ đạt yêu cầu khi không còn màng nhựa, hộp xốp hay nhãn dán. Nếu tỉ lệ tạp chất dưới 5% khối lượng, túi đủ điều kiện ủ compost tập trung. Con số này là thước đo thực tế thay cho cảm giác đã phân loại sạch.",
              tip: "Cân thử một túi trước và sau khi bỏ tạp chất để biết mình đang ở đâu."
            }
          ],
          formula: "Tỉ lệ tạp chất = khối lượng tạp chất / tổng khối lượng túi"
        },
        {
          id: "rc2",
          title: "3R và vòng đời sản phẩm",
          minutes: 20,
          level: "Trung bình",
          summary: "Áp dụng Giảm thiểu, Tái sử dụng, Tái chế theo đúng thứ tự ưu tiên và tính lợi ích theo vòng đời.",
          points: [
            "Thứ tự ưu tiên là giảm thiểu, rồi tái sử dụng, cuối cùng mới tái chế.",
            "Đánh giá vòng đời tính từ khai thác nguyên liệu đến xử lý cuối vòng.",
            "Tái chế vẫn tiêu tốn năng lượng nên không thay thế được giảm thiểu."
          ],
          steps: [
            {
              title: "Ưu tiên đúng thứ tự",
              body: "Một văn phòng dùng 200 chai nước nhựa mỗi tuần. Cách giảm thiểu là lắp bình nước lớn và dùng cốc cá nhân, tái sử dụng là mang bình đi làm, tái chế là gom chai vào điểm thu gom. Ba cách đều tốt nhưng chỉ cách đầu tiên làm giảm số chai được sản xuất.",
              tip: "Hỏi trước: có cách nào để không phải sinh ra món này ngay từ đầu không."
            },
            {
              title: "Tính theo vòng đời",
              body: "Một chai PET 500 ml nặng khoảng 10 g, tái chế 1 kg nhựa PET giúp tránh phát thải khoảng 1,5 kg CO2 tương đương so với làm nhựa mới. Muốn con số này có nghĩa, phải tính cả công đoạn thu gom, làm sạch và ép hạt chứ không chỉ phần tái chế cuối.",
              tip: "Ghi rõ phạm vi tính, nếu không hai báo cáo sẽ ra hai con số khác nhau."
            },
            {
              title: "Chọn can thiệp hiệu quả nhất",
              body: "Với một trường học, thay toàn bộ chai nhựa bằng bình nước cá nhân giảm khoảng 30.000 chai mỗi năm, tương đương 300 kg nhựa, cao hơn nhiều so với việc chỉ đặt thêm thùng thu gom. So sánh theo cùng đơn vị khối lượng giúp chọn được can thiệp đáng làm trước.",
              tip: "Quy mọi phương án về cùng một đơn vị, ví dụ kg nhựa tránh được mỗi năm."
            }
          ],
          formula: "Lợi ích = khối lượng tránh phát thải × hệ số phát thải"
        },
        {
          id: "rc3",
          title: "Kiểm kê khí nhà kính và Net Zero",
          minutes: 24,
          level: "Nâng cao",
          summary: "Phân biệt ba phạm vi phát thải và tính dấu chân carbon cho một hoạt động cụ thể.",
          points: [
            "Phạm vi 1 là phát thải trực tiếp từ nguồn thuộc sở hữu.",
            "Phạm vi 2 là phát thải từ điện và nhiệt mua vào.",
            "Phạm vi 3 gồm chuỗi cung ứng, đi lại, vận chuyển và chất thải."
          ],
          steps: [
            {
              title: "Phân loại theo phạm vi",
              body: "Một xưởng may đốt lò hơi phát thải trực tiếp, xếp vào phạm vi 1. Điện mua từ lưới quốc gia khoảng 0,7 kg CO2 tương đương mỗi kWh, xếp vào phạm vi 2. Vải mua từ nhà cung cấp và chuyến xe đưa công nhân đi làm thuộc phạm vi 3, thường chiếm phần lớn nhưng lại khó thu thập nhất.",
              tip: "Đừng gộp điện mua vào phạm vi 1, đây là lỗi thường gặp khi lập báo cáo."
            },
            {
              title: "Tính một con số mẫu",
              body: "Xưởng dùng 50.000 kWh mỗi tháng, phát thải phạm vi 2 khoảng 35 tấn CO2 tương đương. Lò hơi đốt 8 tấn dầu DO, hệ số khoảng 2,7 tấn CO2 mỗi tấn dầu, cho thêm khoảng 21,6 tấn phạm vi 1. Tổng hai phạm vi đã khoảng 56,6 tấn, trước khi tính phạm vi 3.",
              tip: "Ghi hệ số phát thải và nguồn tra cứu ngay cạnh phép tính."
            },
            {
              title: "Đặt lộ trình giảm",
              body: "Mục tiêu Net Zero vào năm 2050 nghĩa là phần phát thải còn lại phải được hấp thụ hoặc bù trừ. Lộ trình hợp lý là giảm 30% phạm vi 1 và 2 trước năm 2030 bằng tiết kiệm điện và thay nhiên liệu, rồi xử lý phạm vi 3 bằng tiêu chuẩn nhà cung cấp. Cam kết không kèm mốc thời gian chỉ là khẩu hiệu.",
              tip: "Mỗi mốc cam kết cần một con số nền và một năm kiểm tra."
            }
          ],
          formula: "Phát thải = khối lượng hoạt động × hệ số phát thải"
        }
      ]
    }
  ],
  flashcards: [
    { front: "AQI", back: "Chỉ số chất lượng không khí quy đổi nhiều chất ô nhiễm về thang 0–500, chia sáu khoảng hạng.", hint: "Một con số gộp, không phải nồng độ.", example: "AQI 152 xếp mức xấu, nhóm nhạy cảm nên giảm hoạt động ngoài trời." },
    { front: "PM2.5", back: "Bụi mịn có đường kính khí động học dưới 2,5 micromet, đi sâu vào phế nang.", hint: "Nhỏ hơn sợi tóc khoảng 30 lần.", example: "Nồng độ 78 µg/m³ lúc 8 giờ sáng tại trạm ven đường." },
    { front: "PM10", back: "Bụi có đường kính dưới 10 micromet, gồm cả bụi đường và phấn hoa.", hint: "To hơn PM2.5, dừng ở mũi và khí quản.", example: "Công trường thường làm PM10 tăng mạnh buổi trưa." },
    { front: "COD", back: "Lượng oxy cần để oxy hóa học toàn bộ chất hữu cơ trong mẫu nước, đơn vị mg/L.", hint: "Hóa học, không cần vi sinh.", example: "Nước thải có COD 180 mg/L vượt ngưỡng cột B 150 mg/L." },
    { front: "BOD5", back: "Lượng oxy vi sinh tiêu thụ khi phân hủy chất hữu cơ trong 5 ngày ở 20 độ C.", hint: "Năm ngày, có vi sinh tham gia.", example: "BOD5 95 mg/L nghĩa là vi sinh cần nhiều oxy để phân hủy." },
    { front: "Tỉ số BOD5/COD", back: "Chỉ báo khả năng phân hủy sinh học; trên 0,5 là dễ xử lý bằng vi sinh.", hint: "Càng cao càng dễ xử lý sinh học.", example: "95/180 bằng 0,53 nên chọn bể bùn hoạt tính." },
    { front: "Hiệu ứng nhà kính", back: "Khí như CO2, CH4, N2O giữ lại bức xạ hồng ngoại, làm tăng nhiệt độ khí quyển.", hint: "Giữ nhiệt, không phải thủng tầng ozon.", example: "Mỗi kWh điện lưới phát thải khoảng 0,7 kg CO2 tương đương." },
    { front: "Phú dưỡng", back: "Nguồn nước giàu nitơ và photpho gây bùng nổ tảo, sau đó thiếu oxy cục bộ.", hint: "Tảo nở rồi nước thiếu oxy.", example: "Nước thải chưa xử lý chứa nhiều photphat gây phú dưỡng hồ." },
    { front: "Ba nhóm chất thải sinh hoạt", back: "Nhóm tái sử dụng tái chế, nhóm chất thải thực phẩm và nhóm chất thải rắn khác.", hint: "Ba thùng đặt ở ba vị trí khác nhau.", example: "Vỏ chai nhựa vào nhóm tái chế, rau thừa vào nhóm thực phẩm." },
    { front: "Chất thải nguy hại hộ gia đình", back: "Pin, bóng đèn huỳnh quang, thuốc hết hạn, hóa chất tẩy rửa mạnh cần điểm thu gom riêng.", hint: "Khối lượng nhỏ nhưng độc.", example: "Một viên pin lẫn vào rác có thể đưa kim loại nặng vào nước rỉ rác." },
    { front: "Sinh vật chỉ thị", back: "Loài hoặc nhóm loài có yêu cầu sinh thái hẹp, dùng để suy ra chất lượng môi trường.", hint: "Có mặt hay vắng mặt đều là thông tin.", example: "Ấu trùng phù du xuất hiện nhiều cho thấy nước giàu oxy." },
    { front: "Ba phạm vi phát thải", back: "Phạm vi 1 là phát thải trực tiếp, phạm vi 2 là điện nhiệt mua vào, phạm vi 3 là chuỗi giá trị.", hint: "Trực tiếp, mua vào, gián tiếp.", example: "Điện mua từ lưới thuộc phạm vi 2, không phải phạm vi 1." }
  ],
  quiz: [
    { q: "Chỉ số AQI 152 thuộc khoảng phân hạng nào?", options: ["Tốt", "Trung bình", "Kém", "Xấu"], answer: 3, explain: "Khoảng 151–200 là mức xấu, nhóm nhạy cảm cần giảm hoạt động ngoài trời." },
    { q: "Chất ô nhiễm nào thường quyết định AQI vào giờ cao điểm sáng ở đô thị lớn?", options: ["CO", "PM2.5", "SO2", "O3"], answer: 1, explain: "Bụi mịn từ giao thông tăng mạnh giờ cao điểm nên chỉ số phụ PM2.5 thường cao nhất." },
    { q: "PM2.5 là hạt bụi có đường kính khí động học:", options: ["Dưới 2,5 micromet", "Dưới 10 micromet", "Từ 2,5 đến 10 milimet", "Trên 100 micromet"], answer: 0, explain: "Tiền tố 2.5 chỉ đường kính dưới 2,5 micromet, đủ nhỏ để vào phế nang." },
    { q: "COD của mẫu nước phản ánh điều gì?", options: ["Lượng oxy vi sinh tiêu thụ trong 5 ngày", "Độ dẫn điện của nước", "Lượng oxy cần để oxy hóa học chất hữu cơ", "Hàm lượng muối hòa tan"], answer: 2, explain: "COD dùng tác nhân oxy hóa mạnh để oxy hóa toàn bộ chất hữu cơ, không phụ thuộc vi sinh." },
    { q: "Khi chuyển lên một bậc dinh dưỡng, năng lượng được truyền đi khoảng bao nhiêu?", options: ["1%", "50%", "90%", "10%"], answer: 3, explain: "Hiệu suất sinh thái điển hình khoảng 10%, phần lớn năng lượng mất qua hô hấp và tỏa nhiệt." },
    { q: "Vật dụng nào phải tách riêng khỏi rác sinh hoạt thông thường?", options: ["Pin và bóng đèn huỳnh quang", "Vỏ chuối", "Chai nhựa PET", "Giấy báo cũ"], answer: 0, explain: "Pin chứa kim loại nặng, bóng đèn huỳnh quang chứa thủy ngân nên cần điểm thu gom riêng." },
    { q: "Bước đầu tiên của đánh giá tác động môi trường là:", options: ["Lập báo cáo giám sát sau vận hành", "Xác định phạm vi và đối tượng chịu tác động", "Xây dựng nhà máy", "Chạy thử dây chuyền"], answer: 1, explain: "Phải khoanh vùng không gian, thời gian và đối tượng trước khi nhận diện và chấm điểm tác động." },
    { q: "Nước thải có tỉ số BOD5/COD bằng 0,2 thường:", options: ["Rất sạch, không cần xử lý", "Rất dễ xử lý bằng vi sinh", "Khó phân hủy sinh học, cần thêm xử lý hóa lý", "Không chứa chất hữu cơ"], answer: 2, explain: "Tỉ số thấp cho thấy phần lớn chất hữu cơ khó phân hủy sinh học, cần biện pháp bổ sung." },
    { q: "Phát thải từ nhà cung cấp nguyên liệu và đi lại của nhân viên thuộc phạm vi nào?", options: ["Phạm vi 1", "Phạm vi 2", "Phạm vi 3", "Không cần kiểm kê"], answer: 2, explain: "Đây là phát thải gián tiếp trong chuỗi giá trị nên thuộc phạm vi 3." },
    { q: "Vì sao không lấy trung bình các chỉ số phụ để ra AQI?", options: ["Vì AQI luôn nhỏ hơn 100", "Vì các chất có đơn vị và ngưỡng khác nhau", "Vì AQI lấy giá trị cao nhất đại diện rủi ro lớn nhất", "Vì quy chuẩn yêu cầu làm tròn"], answer: 2, explain: "AQI lấy chỉ số phụ lớn nhất; cộng hay chia trung bình sẽ làm mất thông tin về chất gây rủi ro chính." }
  ],
  lab: {
    kind: "chart",
    mode: "line",
    title: "Xu hướng AQI bảy ngày tại trạm Cầu Giấy",
    lead: "Biểu đồ ghép AQI trung bình ngày với nồng độ PM2.5 của cùng trạm. Hai đường thường tăng giảm cùng nhịp vì bụi mịn là chất quyết định chỉ số AQI ở khu vực này.",
    stageLabel: "Biểu đồ AQI",
    controlNote: "Đọc đỉnh thứ tư: AQI 156 đi kèm PM2.5 67 µg/m³, đúng ngày có gió lặng. Thêm một điểm để xem trục tung tự co giãn.",
    note: "Biểu đồ dùng chuỗi số liệu mô phỏng của trạm quan trắc, ngưỡng tham chiếu PM2.5 trung bình 24 giờ là 50 µg/m³.",
    labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    series: [
      { label: "AQI trung bình ngày", color: "#15803d", data: [118, 96, 142, 156, 132, 88, 76] },
      { label: "PM2.5 (µg/m³)", color: "#ca8a04", data: [48, 39, 61, 67, 55, 33, 28] }
    ],
    add: { label: "Thêm AQI ngày mới", min: 0, max: 300 }
  },
  teacher: {
    students: [
      { name: "Nguyễn Thùy Dương", progress: 84, score: 8.6, status: "Tốt", note: "Đọc chuỗi AQI tốt, cần luyện thêm phần kiểm kê phát thải." },
      { name: "Trần Đức Huy", progress: 61, score: 7.2, status: "Đang học", note: "Hay nhầm COD với BOD5 khi tính tỉ số phân hủy." },
      { name: "Lê Thanh Mai", progress: 92, score: 9.1, status: "Tốt", note: "Bài ĐTM của nhà máy xi măng có ma trận chấm điểm rõ ràng." },
      { name: "Phạm Quốc Bảo", progress: 33, score: 5.8, status: "Cần hỗ trợ", note: "Chưa nộp bài phân loại chất thải tại nguồn." },
      { name: "Vũ Hồng Nhung", progress: 70, score: 7.9, status: "Đang học", note: "Tiến bộ nhanh ở chương sinh thái, cần thêm bài tập biểu đồ." },
      { name: "Đỗ Minh Trí", progress: 48, score: 6.5, status: "Đang học", note: "Nên ôn lại sáu khoảng phân hạng AQI trước buổi kiểm tra." }
    ],
    submissions: [
      { student: "Nguyễn Thùy Dương", lesson: "Bài tập tình huống: chuỗi PM2.5 trạm Cầu Giấy", time: "Hôm qua 21:20", status: "Chờ chấm" },
      { student: "Phạm Quốc Bảo", lesson: "Phiếu phân loại chất thải tại nguồn", time: "Hôm qua 18:50", status: "Chờ chấm" },
      { student: "Lê Thanh Mai", lesson: "Ma trận tác động nhà máy xi măng", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Sáu học chương giảm thiểu, mang theo máy tính để tính dấu chân carbon.",
      "Bài kiểm tra giữa kỳ gồm 30% trắc nghiệm chỉ số và 70% bài phân tích số liệu.",
      "Nhóm chưa hoàn thành dashboard cảm biến liên hệ lớp trưởng để được ghép nhóm hỗ trợ."
    ]
  },
  className: "Khoa học môi trường – K26",
  brief: "BTL-30_greenlesson-mon-khoa-hoc-moi-truong.md"
};
