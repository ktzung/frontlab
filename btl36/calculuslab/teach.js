/* CalculusLab — nội dung bài học sâu, gắn vào window.BTL_DATA theo id bài */
(function () {
  "use strict";
  const T = {};

  T.gh1 = {
    goals: [
      "Đọc được giới hạn của hàm số từ bảng giá trị và từ đồ thị.",
      "Phân biệt giá trị của hàm tại một điểm với giới hạn khi tiến sát điểm đó.",
      "Nhận ra khi nào giới hạn hai phía không tồn tại vì hai bên đi về hai đích khác nhau."
    ],
    hook: "Một xe máy chạy 60 km trong 1,5 giờ. Vận tốc trung bình là 40 km/h, nhưng đồng hồ tốc độ tại đúng phút thứ 30 lại chỉ một con số khác. Muốn biết tốc độ tức thời, ta phải hỏi: khi thời gian tiến sát mốc 30 phút, quãng đường thay đổi nhanh đến mức nào? Câu hỏi đó chính là bài toán giới hạn.",
    sections: [
      {
        kicker: "TRỰC GIÁC",
        title: "Tiến gần, không chạm",
        paragraphs: [
          "Xét hàm f(x) = (x² − 1)/(x − 1). Tại x = 1, mẫu bằng 0 nên biểu thức không xác định. Nhưng câu hỏi của giới hạn không phải “f(1) bằng bao nhiêu”, mà là “khi x tiến sát 1, f(x) tiến về đâu”.",
          "Tính vài giá trị: x = 0,9 cho 1,9; x = 0,99 cho 1,99; x = 1,01 cho 2,01; x = 1,001 cho 2,001. Càng gần 1, kết quả càng sát 2. Ta viết lim(x→1) f(x) = 2, đọc là “giới hạn của f khi x tiến tới 1 bằng 2”. Điểm x = 1 không được chạm tới, nhưng hướng đi thì rõ."
        ],
        figure: {
          type: "plot",
          xMin: 0, xMax: 3, yMin: 0, yMax: 4,
          curves: [{ type: "linear", params: { m: 1, b: 1 }, label: "y = x + 1" }],
          points: [{ x: 1, y: 2, hollow: true, label: "lỗ hổng (1; 2)", labelDx: -12, labelDy: -12, labelAnchor: "end" }],
          vlines: [{ x: 1, label: "x = 1" }],
          caption: "Đồ thị của f trùng đường y = x + 1, chỉ khuyết đúng điểm x = 1. Hai phía đều tiến về 2 nên giới hạn vẫn bằng 2.",
          alt: "Đường thẳng y bằng x cộng 1 với một lỗ hổng tại điểm (1; 2)"
        },
        formula: "lim(x→1) (x² − 1)/(x − 1) = 2"
      },
      {
        kicker: "ĐỊNH NGHĨA",
        title: "Hai phía phải gặp nhau",
        paragraphs: [
          "Giới hạn hai phía chỉ tồn tại khi cả phía trái và phía phải cùng tiến về một giá trị L. Nếu hai phía cho hai đích khác nhau, giới hạn hai phía không tồn tại — dù hàm vẫn có giá trị tại điểm đó.",
          "Ký hiệu lim(x→a⁻) là tiến từ bên trái (x < a), lim(x→a⁺) là tiến từ bên phải (x > a). Giới hạn hai phía bằng L khi và chỉ khi cả hai giới hạn một phía đều bằng L."
        ],
        table: {
          head: ["x từ trái", "f(x)", "x từ phải", "f(x)"],
          rows: [
            ["0,9", "1,9", "1,1", "2,1"],
            ["0,99", "1,99", "1,01", "2,01"],
            ["0,999", "1,999", "1,001", "2,001"]
          ],
          caption: "Hai cặp cột cùng hội tụ về 2, nên giới hạn hai phía bằng 2."
        }
      },
      {
        kicker: "VÍ DỤ",
        title: "Khử dạng 0/0 bằng phân tích",
        paragraphs: [
          "Bài toán quen thuộc nhất của giới hạn là thay trực tiếp ra 0/0. Cách xử lý không phải đoán kết quả, mà là biến đổi biểu thức để rút ra nhân tử chung gây ra số 0."
        ],
        example: {
          title: "Tính lim(x→2) (x² − 4)/(x − 2)",
          steps: [
            { label: "1", text: "Thay trực tiếp: tử 2² − 4 = 0, mẫu 2 − 2 = 0. Ta gặp dạng 0/0. Đây là tín hiệu phải biến đổi, không phải kết luận." },
            { label: "2", text: "Phân tích tử: x² − 4 = (x − 2)(x + 2)." },
            { label: "3", text: "Rút gọn: với x ≠ 2, (x − 2)(x + 2)/(x − 2) = x + 2. Phép rút gọn hợp lệ vì giới hạn không chạm đúng x = 2." },
            { label: "4", text: "Thay lại: 2 + 2 = 4." }
          ],
          result: "lim(x→2) (x² − 4)/(x − 2) = 4."
        },
        pitfall: {
          title: "0/0 không có nghĩa là không tồn tại",
          text: "Dạng 0/0 chỉ cho biết tử và mẫu cùng về 0; kết quả còn phụ thuộc tốc độ của hai bên. Phải phân tích, nhân liên hợp hoặc quy đồng rồi mới kết luận. Ngược lại, nếu thay vào được một số cụ thể như 3/2 thì giới hạn bằng đúng số đó."
        },
        checks: [
          {
            q: "Với f(x) = (x² − 1)/(x − 1), giá trị f(1) và giới hạn khi x→1 khác nhau thế nào?",
            options: ["f(1) = 2 và giới hạn cũng bằng 2", "f(1) không xác định, giới hạn bằng 2", "f(1) = 0, giới hạn bằng 1", "Cả hai đều không tồn tại"],
            answer: 1,
            explain: "Tại x = 1 mẫu bằng 0 nên f(1) không xác định; hai phía vẫn tiến về 2 nên giới hạn bằng 2."
          },
          {
            q: "Đồ thị có bước nhảy: bên trái tiến về 1, bên phải tiến về 3 tại x = 0. Kết luận nào đúng?",
            options: ["Giới hạn bằng 2 vì lấy trung bình cộng", "Giới hạn bằng 1 vì lấy bên trái", "Giới hạn hai phía không tồn tại", "Giới hạn bằng 3 vì lấy bên phải"],
            answer: 2,
            explain: "Hai giới hạn một phía khác nhau (1 và 3) nên giới hạn hai phía không tồn tại."
          }
        ]
      }
    ],
    wrap: [
      "Giới hạn mô tả đích đến của hàm khi tiến sát một điểm, không phải giá trị tại điểm đó.",
      "Muốn kết luận, hãy so hai phía. Gặp 0/0 thì biến đổi biểu thức trước khi thay số."
    ],
    bridge: "Bài sau: hàm liên tục là trường hợp đặc biệt — giới hạn và giá trị tại điểm trùng nhau, nên đồ thị không bị nhấc bút."
  };

  T.gh2 = {
    goals: [
      "Hiểu liên tục qua hình ảnh đồ thị không bị đứt.",
      "Kiểm tra được ba điều kiện liên tục tại một điểm.",
      "Phân biệt ba kiểu gián đoạn: lỗ hổng, bước nhảy và đường tiệm cận."
    ],
    hook: "Nhiệt độ trong phòng thay đổi mượt: muốn từ 20°C lên 30°C phải đi qua mọi giá trị ở giữa. Nhưng giá điện bậc thang thì nhảy: dùng 50 số một giá, sang số 51 giá khác hẳn. Hai kiểu thay đổi này chính là liên tục và gián đoạn.",
    sections: [
      {
        kicker: "TRỰC GIÁC",
        title: "Vẽ mà không nhấc bút",
        paragraphs: [
          "Hàm liên tục tại a nếu đồ thị đi qua điểm a mà không bị đứt. Nói cách khác: muốn vẽ đoạn quanh a, không cần nhấc bút. Một lỗ hổng nhỏ, một bước nhảy, hay một đường tiệm cận đều làm đồ thị đứt.",
          "Parabol y = x² dưới đây liền mạch tại x = 1: giá trị f(1) = 1, hai phía đều tiến về 1, ba điều kiện đều đạt."
        ],
        figure: {
          type: "plot",
          xMin: -2, xMax: 2, yMin: 0, yMax: 4,
          curves: [{ type: "quad", params: { a: 1 }, label: "y = x²" }],
          points: [{ x: 1, y: 1, label: "f(1) = 1" }],
          vlines: [{ x: 1, label: "x = 1" }],
          caption: "Tại x = 1, đồ thị không có lỗ hổng hay bước nhảy: hàm liên tục.",
          alt: "Parabol y bằng x bình phương đi qua điểm (1; 1) liền mạch"
        }
      },
      {
        kicker: "BA ĐIỀU KIỆN",
        title: "Kiểm tra theo đúng thứ tự",
        paragraphs: [
          "Để kiểm tra liên tục tại a, lần lượt trả lời ba câu. Thiếu một câu là gián đoạn.",
          "Ba điều kiện có thứ tự: phải xác định trước, rồi mới nói đến giới hạn, cuối cùng so sánh hai giá trị."
        ],
        table: {
          head: ["Điều kiện", "Câu hỏi kiểm tra", "Nếu sai"],
          rows: [
            ["1. Xác định tại a", "f(a) có tính được không?", "Lỗ hổng hoặc không xác định"],
            ["2. Giới hạn tồn tại", "Hai phía có cùng tiến về một số?", "Bước nhảy"],
            ["3. Hai giá trị bằng nhau", "Giới hạn có bằng f(a)?", "Lỗ hổng bị lấp lệch"]
          ],
          caption: "Đủ cả ba điều kiện thì hàm liên tục tại a."
        },
        formula: "f liên tục tại a ⇔ lim(x→a) f(x) = f(a)"
      },
      {
        kicker: "VÍ DỤ",
        title: "Lấp lỗ hổng đúng cách",
        paragraphs: [
          "Một hàm có thể gián đoạn chỉ vì thiếu đúng một giá trị. Bài toán thường gặp là gán thêm giá trị tại điểm khuyết để hàm trở nên liên tục."
        ],
        example: {
          title: "Cho f(x) = (x² − 1)/(x − 1) với x ≠ 1. Gán f(1) = 2 thì hàm có liên tục tại 1?",
          steps: [
            { label: "1", text: "Kiểm tra xác định: theo cách gán, f(1) = 2 nên điều kiện 1 đạt." },
            { label: "2", text: "Tính giới hạn: lim(x→1) f(x) = 2 (bài trước), nên điều kiện 2 đạt." },
            { label: "3", text: "So sánh: giới hạn bằng 2 và f(1) = 2, điều kiện 3 đạt." }
          ],
          result: "Hàm liên tục tại x = 1 sau khi gán. Nếu gán f(1) = 5, giới hạn vẫn là 2 nhưng giá trị là 5: vi phạm điều kiện 3."
        },
        pitfall: {
          title: "Chỉ cần f(a) tồn tại là chưa đủ",
          text: "Hàm có thể xác định tại a nhưng giới hạn không tồn tại (bước nhảy), hoặc giới hạn tồn tại nhưng khác f(a) (lỗ hổng lấp lệch). Phải kiểm đủ ba điều kiện."
        },
        checks: [
          {
            q: "Hàm có f(2) = 5 và lim(x→2) f(x) = 5. Kết luận nào đúng?",
            options: ["Liên tục tại 2", "Gián đoạn vì thiếu điều kiện", "Không kết luận được vì thiếu đồ thị", "Gián đoạn vì f(2) quá lớn"],
            answer: 0,
            explain: "Đủ ba điều kiện: xác định, giới hạn tồn tại, hai giá trị bằng nhau."
          },
          {
            q: "f(x) = 1/x tại x = 0 gián đoạn vì sao?",
            options: ["Vì giới hạn bằng 0", "Vì f(0) không xác định", "Vì đồ thị đi xuống", "Vì hàm là hàm lẻ"],
            answer: 1,
            explain: "Mẫu bằng 0 tại x = 0 nên f(0) không xác định; điều kiện đầu tiên đã sai."
          }
        ]
      }
    ],
    wrap: [
      "Liên tục = xác định + có giới hạn + hai giá trị trùng nhau.",
      "Kiểm tra theo đúng thứ tự ba câu để không bỏ sót điều kiện nào."
    ],
    bridge: "Bài sau dùng giới hạn để xử lý các dạng vô định thường gặp: 0/0, căn thức và phân số lồng nhau."
  };

  T.gh3 = {
    goals: [
      "Nhận diện dạng vô định 0/0 khi thay trực tiếp.",
      "Dùng được ba kỹ thuật: phân tích nhân tử, nhân liên hợp, quy đồng mẫu.",
      "Tránh kết luận sai chỉ vì phép thay trực tiếp cho 0/0."
    ],
    hook: "Một xưởng tính chi phí trung bình mỗi sản phẩm bằng C(x)/x. Khi số lượng rất nhỏ, cả chi phí lẫn số lượng đều về 0, phép chia thành 0/0. Muốn biết chi phí trung bình tiến về đâu, ta phải khử dạng vô định chứ không thể bấm máy tính.",
    sections: [
      {
        kicker: "BA KỸ THUẬT",
        title: "Mỗi dạng một cách gỡ",
        paragraphs: [
          "Dạng 0/0 xuất hiện khi thay trực tiếp cho 0 ở cả tử và mẫu. Có ba cách khử thường dùng: phân tích thành nhân tử, nhân với biểu thức liên hợp khi có căn, và quy đồng mẫu khi có phân số lồng nhau.",
          "Mục tiêu của cả ba cách là rút ra nhân tử chung gây ra số 0, rồi mới thay giá trị."
        ],
        table: {
          head: ["Dạng gặp", "Cách xử lý", "Ví dụ"],
          rows: [
            ["Đa thức chia đa thức", "Phân tích thành nhân tử", "(x² − 4)/(x − 2) = x + 2 khi x ≠ 2"],
            ["Có căn bậc hai", "Nhân liên hợp", "(√(x + 1) − 1)/x"],
            ["Phân số lồng nhau", "Quy đồng mẫu", "1/x − 1/2 chia cho x − 2"]
          ],
          caption: "Chọn kỹ thuật theo hình dạng biểu thức, không theo thói quen."
        }
      },
      {
        kicker: "VÍ DỤ",
        title: "Nhân liên hợp để khử căn",
        paragraphs: [
          "Khi tử hoặc mẫu có căn, nhân cả tử và mẫu với biểu thức liên hợp sẽ biến hiệu hai căn thành hiệu hai bình phương, làm mất căn gây ra số 0."
        ],
        example: {
          title: "Tính lim(x→0) (√(x + 1) − 1)/x",
          steps: [
            { label: "1", text: "Thay trực tiếp: x = 0 cho (1 − 1)/0 = 0/0, cần biến đổi." },
            { label: "2", text: "Nhân liên hợp: nhân tử và mẫu với √(x + 1) + 1, tử thành (x + 1) − 1 = x, mẫu thành x(√(x + 1) + 1)." },
            { label: "3", text: "Rút gọn: chia x cho x (với x ≠ 0) được 1/(√(x + 1) + 1)." },
            { label: "4", text: "Thay lại: x = 0 cho 1/(1 + 1) = 1/2." }
          ],
          result: "lim(x→0) (√(x + 1) − 1)/x = 1/2."
        },
        figure: {
          type: "plot",
          xMin: -0.5, xMax: 2.2, yMin: 0, yMax: 2.2,
          curves: [
            { type: "sqrt", params: { a: 1, b: -1 } },
            { type: "linear", params: { m: 0.5, b: 1 }, color: "var(--warn)", dash: true }
          ],
          legend: [{ color: "var(--a)", label: "y = √(x + 1)" }, { color: "var(--warn)", label: "tiếp tuyến tại x = 0, hệ số góc 1/2" }],
          points: [{ x: 0, y: 1, label: "(0; 1)", labelDx: -10, labelDy: -10, labelAnchor: "end" }],
          vlines: [{ x: 0, label: false }],
          caption: "Thương số (√(x + 1) − 1)/x chính là hệ số góc cát tuyến từ (0; 1) tới (x; √(x + 1)). Khi x → 0, cát tuyến tiến về tiếp tuyến có hệ số góc 1/2.",
          alt: "Đường cong căn bậc hai và tiếp tuyến tại điểm (0; 1) với hệ số góc một phần hai"
        },
        pitfall: {
          title: "Rút gọn mà quên điều kiện",
          text: "Khi chia cho x, ta ngầm dùng x ≠ 0. Điều này hợp lệ trong giới hạn vì x chỉ tiến sát 0, không bằng 0. Nhưng nếu bài hỏi giá trị tại x = 0 thì không được thay."
        },
        checks: [
          {
            q: "Biểu thức (x² − 9)/(x − 3) tại x = 3 thuộc dạng nào?",
            options: ["3/0", "0/0", "0/3", "9/0"],
            answer: 1,
            explain: "Tử 9 − 9 = 0 và mẫu 3 − 3 = 0, nên là 0/0."
          },
          {
            q: "Sau khi nhân liên hợp cho (√(x + 4) − 2)/x, tử rút gọn thành gì?",
            options: ["x", "x + 4", "4", "1"],
            answer: 0,
            explain: "(√(x + 4) − 2)(√(x + 4) + 2) = (x + 4) − 4 = x."
          }
        ]
      }
    ],
    wrap: [
      "Gặp 0/0, đừng kết luận; hãy tìm nhân tử chung hoặc nhân liên hợp để rút gọn rồi thay lại.",
      "Ba kỹ thuật — phân tích, liên hợp, quy đồng — xử lý gần hết các bài giới hạn ở mức nhập môn."
    ],
    bridge: "Chương sau chuyển từ câu hỏi “tiến tới đâu” sang “thay đổi nhanh đến đâu”: đạo hàm."
  };

  T.dh1 = {
    goals: [
      "Hiểu đạo hàm là hệ số góc của tiếp tuyến tại một điểm.",
      "Tính đạo hàm bằng định nghĩa với thương số gia.",
      "Phân biệt đạo hàm tại một điểm với hàm đạo hàm trên cả miền."
    ],
    hook: "Đồng hồ tốc độ trên xe không đo quãng đường; nó đo tốc độ tức thời. Nếu quãng đường là s(t) = 5t² (mét), muốn biết tốc độ đúng lúc t = 2 giây, ta phải tính giới hạn của quãng đường chia thời gian khi khoảng thời gian co về 0.",
    sections: [
      {
        kicker: "TRỰC GIÁC",
        title: "Từ cát tuyến đến tiếp tuyến",
        paragraphs: [
          "Lấy hai điểm trên đồ thị: tại t = 2 và t = 2 + h. Độ dốc đoạn nối hai điểm là [s(2 + h) − s(2)]/h, gọi là hệ số góc cát tuyến. Khi h nhỏ dần, cát tuyến xoay quanh điểm và tiến tới tiếp tuyến.",
          "Với s(t) = 5t² tại t = 2, thương số bằng 20 + 5h. Cho h → 0, ta được 20 m/s — đúng tốc độ tức thời tại giây thứ 2."
        ],
        figure: {
          type: "plot",
          xMin: 0, xMax: 3, yMin: 0, yMax: 60,
          curves: [
            { type: "quad", params: { a: 5 } },
            { type: "secant", params: { a: 5, x0: 2, dx: 1 }, color: "var(--a2)", dash: true },
            { type: "tangent", params: { a: 5, x0: 2 }, color: "var(--warn)" }
          ],
          legend: [{ color: "var(--a)", label: "s = 5t²" }, { color: "var(--a2)", label: "cát tuyến, hệ số góc 25" }, { color: "var(--warn)", label: "tiếp tuyến, hệ số góc 20" }],
          points: [{ x: 2, y: 20, label: "t = 2", labelDx: -10, labelDy: -12, labelAnchor: "end" }],
          vlines: [{ x: 2, label: false }],
          caption: "Cát tuyến (nét đứt) có độ dốc 25; khi khoảng h co lại, nó tiến về tiếp tuyến có độ dốc 20.",
          alt: "Parabol quãng đường, cát tuyến và tiếp tuyến tại thời điểm 2 giây"
        }
      },
      {
        kicker: "ĐỊNH NGHĨA",
        title: "Thương số gia và giới hạn",
        paragraphs: [
          "Đạo hàm của f tại a là giới hạn của thương số gia khi h → 0. Nếu giới hạn tồn tại, hàm có đạo hàm tại a và đồ thị có tiếp tuyến không thẳng đứng.",
          "Bảng bên phải cho thấy thương số của s(t) = 5t² tại t = 2 tiến về 20 khi h nhỏ dần."
        ],
        formula: "f'(a) = lim(h→0) [f(a + h) − f(a)] / h",
        table: {
          head: ["h", "[s(2 + h) − s(2)] / h"],
          rows: [["1", "25"], ["0,5", "22,5"], ["0,1", "20,5"], ["0,01", "20,05"]],
          caption: "h càng nhỏ, thương số càng sát 20. Giới hạn chính là 20."
        }
      },
      {
        kicker: "VÍ DỤ",
        title: "Tính đạo hàm bằng định nghĩa",
        paragraphs: [
          "Quy trình bốn bước: lập thương số, khai triển, rút gọn, lấy giới hạn. Làm đúng thứ tự sẽ tránh được phần lớn lỗi đại số."
        ],
        example: {
          title: "Tính f'(3) với f(x) = x²",
          steps: [
            { label: "1", text: "Lập thương số: [f(3 + h) − f(3)]/h = [(3 + h)² − 9]/h." },
            { label: "2", text: "Khai triển: (9 + 6h + h² − 9)/h = (6h + h²)/h." },
            { label: "3", text: "Rút gọn: chia h (với h ≠ 0) được 6 + h." },
            { label: "4", text: "Cho h → 0: 6 + h tiến về 6." }
          ],
          result: "f'(3) = 6, nghĩa là tại x = 3, mỗi đơn vị tăng của x làm f tăng khoảng 6 đơn vị."
        },
        pitfall: {
          title: "Đạo hàm là một hàm, không phải một con số",
          text: "f'(3) = 6 chỉ là giá trị tại một điểm. Công thức tổng quát f'(x) = 2x cho biết đạo hàm tại mọi x. Đừng lẫn “đạo hàm tại 3” với “hàm đạo hàm”."
        },
        checks: [
          {
            q: "Đạo hàm f'(a) đo điều gì?",
            options: ["Giá trị lớn nhất của f", "Độ dốc tiếp tuyến tại a", "Diện tích dưới đồ thị", "Giá trị f(a)"],
            answer: 1,
            explain: "Đạo hàm tại a là hệ số góc tiếp tuyến, cũng là tốc độ thay đổi tức thời tại a."
          },
          {
            q: "Với f(x) = x², hàm đạo hàm f'(x) bằng",
            options: ["x", "2x", "x²/2", "2"],
            answer: 1,
            explain: "Từ định nghĩa: [(x + h)² − x²]/h = 2x + h, cho h → 0 được 2x."
          }
        ]
      }
    ],
    wrap: [
      "Đạo hàm = giới hạn của thương số gia = độ dốc tiếp tuyến = tốc độ thay đổi tức thời. Ba cách nói của cùng một ý.",
      "Tính bằng định nghĩa gồm bốn bước cố định; quen tay sẽ thấy nó luôn đưa về cùng một dạng."
    ],
    bridge: "Bài sau: thay vì lần nào cũng dùng giới hạn, ta dùng bộ quy tắc để tính đạo hàm nhanh và ít sai."
  };

  T.dh2 = {
    goals: [
      "Nhớ và áp dụng được bảy quy tắc đạo hàm cơ bản.",
      "Nhận dạng cấu trúc hàm để chọn đúng quy tắc, đặc biệt là hàm hợp.",
      "Tránh lỗi phổ biến: đạo hàm của tích khác tích các đạo hàm."
    ],
    hook: "Tính đạo hàm của f(x) = 3x⁵ − 2x³ + 7x − 4 bằng định nghĩa sẽ rất dài. Bộ quy tắc cho phép làm trong một dòng: f'(x) = 15x⁴ − 6x² + 7.",
    sections: [
      {
        kicker: "BẢNG QUY TẮC",
        title: "Bảy quy tắc đủ dùng",
        paragraphs: [
          "Bốn quy tắc đầu đủ cho đa thức. Quy tắc tích, thương và hàm hợp mở rộng cho biểu thức phức tạp.",
          "Cách học hiệu quả: nhận dạng cấu trúc trước (tổng, tích, thương, hàm hợp), chọn quy tắc, rồi mới tính từng phần."
        ],
        table: {
          head: ["Quy tắc", "Công thức", "Ví dụ"],
          rows: [
            ["Hằng số", "(c)' = 0", "(7)' = 0"],
            ["Lũy thừa", "(xⁿ)' = n·xⁿ⁻¹", "(x⁵)' = 5x⁴"],
            ["Nhân hằng số", "(c·f)' = c·f'", "(3x²)' = 6x"],
            ["Tổng, hiệu", "(f ± g)' = f' ± g'", "(x³ − x)' = 3x² − 1"],
            ["Tích", "(f·g)' = f'g + fg'", "(x²·x³)' = 5x⁴"],
            ["Thương", "(f/g)' = (f'g − fg')/g²", "(1/x)' = −1/x²"],
            ["Hàm hợp", "(f(u))' = f'(u)·u'", "((2x + 1)⁵)' = 10(2x + 1)⁴"]
          ],
          caption: "Với đa thức, chỉ cần ba quy tắc đầu là đủ."
        },
        figure: {
          type: "plot",
          xMin: 0, xMax: 3, yMin: 0, yMax: 9,
          curves: [
            { type: "quad", params: { a: 1 } },
            { type: "linear", params: { m: 2 }, color: "var(--a2)" }
          ],
          legend: [{ color: "var(--a)", label: "f(x) = x²" }, { color: "var(--a2)", label: "f'(x) = 2x" }],
          caption: "Đồ thị hàm và đồ thị đạo hàm của nó. Tại x = 2, f'(2) = 4, đúng bằng độ dốc tiếp tuyến của f tại điểm đó.",
          alt: "Parabol y bằng x bình phương và đường thẳng y bằng 2x"
        }
      },
      {
        kicker: "VÍ DỤ",
        title: "Hàm hợp: đạo hàm ngoài nhân đạo hàm trong",
        paragraphs: [
          "Hàm hợp là chỗ dễ sai nhất. Nguyên tắc: đạo hàm lớp ngoài, giữ nguyên lớp trong, rồi nhân với đạo hàm lớp trong."
        ],
        example: {
          title: "Tính đạo hàm của f(x) = (2x + 1)⁵",
          steps: [
            { label: "1", text: "Nhận dạng: ngoài là lũy thừa bậc 5, trong là u = 2x + 1." },
            { label: "2", text: "Đạo hàm lớp ngoài: 5u⁴, với u = 2x + 1." },
            { label: "3", text: "Đạo hàm lớp trong: u' = 2." },
            { label: "4", text: "Nhân lại: f'(x) = 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴." }
          ],
          result: "f'(x) = 10(2x + 1)⁴."
        },
        pitfall: {
          title: "Đạo hàm của tích không phải tích các đạo hàm",
          text: "(x²·x³)' = (x⁵)' = 5x⁴, trong khi (x²)'(x³)' = 2x·3x² = 6x³. Hai kết quả khác nhau. Hãy dùng quy tắc tích, hoặc thu gọn biểu thức trước khi lấy đạo hàm."
        },
        checks: [
          {
            q: "(x⁴)' bằng",
            options: ["4x³", "x³", "4x⁵", "x⁴/4"],
            answer: 0,
            explain: "Lũy thừa: hạ số mũ xuống làm hệ số và giảm số mũ một đơn vị."
          },
          {
            q: "Đạo hàm của (3x + 2)² là",
            options: ["2(3x + 2)", "6(3x + 2)", "3(3x + 2)²", "6x"],
            answer: 1,
            explain: "Hàm hợp: 2(3x + 2) · 3 = 6(3x + 2)."
          }
        ]
      }
    ],
    wrap: [
      "Bảy quy tắc, nhưng chỉ cần nhận đúng cấu trúc là chọn được quy tắc.",
      "Hàm hợp luôn nhớ nhân thêm đạo hàm của lớp trong."
    ],
    bridge: "Bài sau dùng đạo hàm để tìm giá trị lớn nhất, nhỏ nhất — bài toán tối ưu."
  };

  T.dh3 = {
    goals: [
      "Chuyển một bài toán lời thành hàm một biến nhờ ràng buộc.",
      "Tìm cực trị bằng đạo hàm và kiểm tra bằng đạo hàm bậc hai.",
      "Nhớ kiểm tra miền xác định trước khi kết luận."
    ],
    hook: "Có 40 m lưới, muốn quây một vườn hình chữ nhật sát bờ tường nên chỉ cần ba cạnh. Chọn chiều rộng bao nhiêu để diện tích lớn nhất? Đây là bài toán tối ưu: tìm cực trị của một hàm dựng từ ràng buộc.",
    sections: [
      {
        kicker: "QUY TRÌNH",
        title: "Năm bước không đổi",
        paragraphs: [
          "Bài tối ưu luôn đi theo năm bước. Làm thiếu bước nào cũng dễ dẫn đến kết luận sai hoặc bỏ mất nghiệm.",
          "Điểm mấu chốt là bước 3: phải đưa bài toán về hàm của đúng một biến nhờ ràng buộc."
        ],
        table: {
          head: ["Bước", "Việc cần làm"],
          rows: [
            ["1. Đặt biến", "Gọi tên đại lượng cần chọn và đại lượng cần tối ưu."],
            ["2. Viết ràng buộc", "Liên hệ các đại lượng bằng dữ kiện đề cho."],
            ["3. Lập hàm một biến", "Thay ràng buộc vào hàm mục tiêu."],
            ["4. Tìm điểm tới hạn", "Giải f'(x) = 0 và các điểm f' không xác định."],
            ["5. Kiểm tra và kết luận", "So miền xác định, dùng f'' hoặc bảng dấu."]
          ],
          caption: "Năm bước áp dụng cho mọi bài tối ưu ở mức nhập môn."
        }
      },
      {
        kicker: "VÍ DỤ",
        title: "Quây vườn bằng 40 m lưới",
        paragraphs: [
          "Bài toán có một ràng buộc độ dài và một mục tiêu diện tích. Chọn biến đúng sẽ làm phần đại số gọn hơn nhiều."
        ],
        example: {
          title: "Một cạnh dựa tường, ba cạnh còn lại dài tổng 40 m",
          steps: [
            { label: "1", text: "Đặt biến: gọi x (m) là chiều rộng vuông góc với tường. Hai cạnh rộng hết 2x, cạnh còn lại là 40 − 2x." },
            { label: "2", text: "Ràng buộc: chiều dài phải dương, tức 40 − 2x > 0, nên 0 < x < 20." },
            { label: "3", text: "Hàm mục tiêu: A(x) = x(40 − 2x) = 40x − 2x²." },
            { label: "4", text: "Đạo hàm: A'(x) = 40 − 4x. Cho A' = 0 được x = 10." },
            { label: "5", text: "Kiểm tra: A''(x) = −4 < 0 nên x = 10 là cực đại. A(10) = 10 · 20 = 200 m²." }
          ],
          result: "Chiều rộng 10 m, chiều dài 20 m, diện tích lớn nhất 200 m²."
        },
        figure: {
          type: "plot",
          xMin: 0, xMax: 20, yMin: 0, yMax: 220,
          curves: [{ type: "quad", params: { a: -2, b: 40 }, label: "A(x)" }],
          points: [{ x: 10, y: 200, label: "đỉnh (10; 200)" }],
          vlines: [{ x: 10, label: "x = 10" }],
          caption: "A(x) là parabol mở xuống trên miền (0; 20); đỉnh cho diện tích lớn nhất.",
          alt: "Parabol diện tích theo chiều rộng, đỉnh tại 10 mét với diện tích 200"
        },
        pitfall: {
          title: "Quên miền xác định",
          text: "Nghiệm x = 10 hợp lệ vì nằm trong (0; 20). Nếu giải ra x = 25, phải loại vì chiều dài âm. Cực trị chỉ có nghĩa khi thuộc miền mà bài toán cho phép."
        },
        checks: [
          {
            q: "A'(x) = 0 cho x = 10 và A''(10) < 0. Điểm đó là",
            options: ["cực tiểu", "cực đại", "điểm uốn", "không xác định"],
            answer: 1,
            explain: "Đạo hàm bậc hai âm cho biết đồ thị lõm xuống, nên điểm tới hạn là cực đại."
          },
          {
            q: "Vì sao phải ghi miền 0 < x < 20?",
            options: ["Để đạo hàm tồn tại", "Vì chiều dài 40 − 2x phải dương", "Vì diện tích phải là số chẵn", "Không cần, bỏ qua được"],
            answer: 1,
            explain: "Chiều dài là đại lượng hình học nên phải dương; miền này cũng giới hạn nghiệm hợp lệ."
          }
        ]
      }
    ],
    wrap: [
      "Tối ưu = ràng buộc + hàm một biến + đạo hàm + kiểm tra miền.",
      "Đạo hàm bậc hai hoặc bảng dấu cho biết điểm tới hạn là cực đại hay cực tiểu."
    ],
    bridge: "Chương sau: đạo hàm đo thay đổi; tích phân cộng dồn thay đổi để tính tổng."
  };

  T.tp1 = {
    goals: [
      "Hiểu tích phân xác định là giới hạn của tổng diện tích hình chữ nhật.",
      "Đọc được ký hiệu tổng Riemann và ý nghĩa của n → vô cùng.",
      "Phân biệt diện tích hình học với tích phân có dấu."
    ],
    hook: "Muốn tính diện tích một cái ao cong, ta không có công thức sẵn. Nhưng nếu phủ lên ao những dải chữ nhật mảnh thì cộng diện tích lại là ra gần đúng. Chia càng mảnh, sai số càng nhỏ. Đó chính là ý tưởng của tích phân.",
    sections: [
      {
        kicker: "TRỰC GIÁC",
        title: "Phủ hình chữ nhật lên miền cong",
        paragraphs: [
          "Chia đoạn [0; 2] thành n phần bằng nhau, mỗi phần rộng Δx = 2/n. Dựng hình chữ nhật cao bằng f tại mép trái của mỗi phần, rồi cộng diện tích. Tổng này gọi là tổng Riemann trái.",
          "Với f(x) = x², tổng trái luôn nhỏ hơn diện tích thật vì mỗi hình chữ nhật nằm dưới đồ thị. Tăng n thì tổng tiến sát diện tích."
        ],
        figure: {
          type: "plot",
          xMin: -0.2, xMax: 2.4, yMin: 0, yMax: 4.4,
          curves: [{ type: "quad", params: { a: 1 }, label: "y = x²" }],
          shade: { curve: 0, from: 0, to: 2 },
          vlines: [{ x: 0.5, label: false }, { x: 1, label: false }, { x: 1.5, label: false }, { x: 2, label: false }],
          caption: "Miền dưới y = x² trên [0; 2]. Các vạch chia gợi ý cách phủ bằng hình chữ nhật mảnh.",
          alt: "Miền tô dưới parabol y bằng x bình phương từ 0 đến 2, có các vạch chia"
        },
        table: {
          head: ["n", "Tổng trái Sₙ"],
          rows: [["4", "2,625"], ["8", "2,4375"], ["16", "2,34375"], ["32", "2,296875"]],
          caption: "n tăng gấp đôi thì sai số giảm khoảng một nửa; dãy tiến về 8/3 ≈ 2,6667."
        }
      },
      {
        kicker: "ĐỊNH NGHĨA",
        title: "Giới hạn của tổng khi n → vô cùng",
        paragraphs: [
          "Tích phân xác định là giới hạn của tổng Riemann khi số mảnh tiến ra vô cùng và độ rộng mỗi mảnh tiến về 0. Nếu giới hạn tồn tại hữu hạn, hàm khả tích trên đoạn đó.",
          "Ký hiệu ∫ là chữ S kéo dài, nhắc rằng tích phân bắt nguồn từ tổng (sum)."
        ],
        formula: "∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ)Δx",
        example: {
          title: "Tính ∫₀² x² dx",
          steps: [
            { label: "1", text: "Chia [0; 2] thành n phần, Δx = 2/n, điểm trái xᵢ = 2(i − 1)/n." },
            { label: "2", text: "Tổng trái: Sₙ = Σ (2(i − 1)/n)² · (2/n)." },
            { label: "3", text: "Rút gọn và dùng công thức tổng bình phương, Sₙ = (8/3)(1 − 1/n)(1 − 1/(2n))." },
            { label: "4", text: "Cho n → ∞, hai thừa số sau tiến về 1, còn lại 8/3." }
          ],
          result: "∫₀² x² dx = 8/3, khớp với dãy số trong bảng."
        },
        pitfall: {
          title: "Tích phân có dấu, diện tích thì không",
          text: "Nếu f âm trên một đoạn, tổng Riemann cộng cả phần âm. Khi đó ∫ₐᵇ f dx nhỏ hơn diện tích hình học thật. Muốn tính diện tích, phải lấy tích phân của |f| hoặc tách đoạn theo dấu."
        },
        checks: [
          {
            q: "Khi n tăng, tổng Riemann trái của y = x² trên [0; 2]",
            options: ["tăng dần", "giảm dần về 8/3", "không đổi", "dao động ngẫu nhiên"],
            answer: 1,
            explain: "Bảng cho thấy dãy giảm: 2,625 → 2,4375 → … → 8/3. Đó là cận dưới của diện tích."
          },
          {
            q: "Ký hiệu dx trong ∫ f(x) dx nhắc đến",
            options: ["độ dốc tiếp tuyến", "độ rộng mảnh Δx tiến về 0", "giá trị lớn nhất của f", "số mảnh n"],
            answer: 1,
            explain: "dx là Δx trong giới hạn, đại diện cho độ rộng vô cùng nhỏ của mỗi mảnh."
          }
        ]
      }
    ],
    wrap: [
      "Tích phân = giới hạn của tổng diện tích hình chữ nhật mảnh.",
      "n càng lớn, tổng Riemann càng sát giá trị thật; giới hạn chính là tích phân."
    ],
    bridge: "Bài sau: định lý Newton–Leibniz cho cách tính tích phân nhanh nhờ nguyên hàm, không cần cộng vô số hình chữ nhật."
  };

  T.tp2 = {
    goals: [
      "Phát biểu và dùng được định lý Newton–Leibniz.",
      "Tìm nguyên hàm của đa thức và hàm lượng giác cơ bản.",
      "Tránh lỗi bỏ qua giá trị tại cận dưới."
    ],
    hook: "Cộng hàng nghìn hình chữ nhật là cách hiểu, nhưng không phải cách tính. Định lý Newton–Leibniz biến bài toán cộng dồn thành một phép trừ hai giá trị nguyên hàm — nhanh và chính xác tuyệt đối.",
    sections: [
      {
        kicker: "ĐỊNH LÝ",
        title: "Tích phân bằng hiệu nguyên hàm",
        paragraphs: [
          "Nếu F là một nguyên hàm của f, nghĩa là F' = f, thì tích phân xác định của f trên [a; b] bằng F(b) − F(a).",
          "Định lý nối hai ý tưởng tưởng như xa nhau: diện tích (cộng dồn) và độ dốc (đạo hàm). Chúng là hai chiều của cùng một câu chuyện."
        ],
        formula: "∫ₐᵇ f(x) dx = F(b) − F(a) với F' = f",
        table: {
          head: ["Hàm f(x)", "Nguyên hàm F(x)"],
          rows: [
            ["xⁿ (n ≠ −1)", "xⁿ⁺¹/(n + 1)"],
            ["1", "x"],
            ["cos x", "sin x"],
            ["sin x", "−cos x"],
            ["eˣ", "eˣ"]
          ],
          caption: "Mọi nguyên hàm sai khác một hằng số C; khi tính tích phân xác định, C triệt tiêu."
        }
      },
      {
        kicker: "VÍ DỤ",
        title: "Áp dụng vào một bài cụ thể",
        paragraphs: [
          "Trình tự luôn giống nhau: tìm nguyên hàm, thay cận trên, thay cận dưới, trừ. Sai sót thường nằm ở bước thứ ba bị bỏ qua."
        ],
        example: {
          title: "Tính ∫₁³ (2x + 1) dx",
          steps: [
            { label: "1", text: "Nguyên hàm: F(x) = x² + x." },
            { label: "2", text: "Thay cận trên: F(3) = 9 + 3 = 12." },
            { label: "3", text: "Thay cận dưới: F(1) = 1 + 1 = 2." },
            { label: "4", text: "Trừ: 12 − 2 = 10." }
          ],
          result: "∫₁³ (2x + 1) dx = 10. Kiểm tra hình học: miền là hình thang cao 2, hai đáy 3 và 7, diện tích (3 + 7)·2/2 = 10."
        },
        figure: {
          type: "plot",
          xMin: 0, xMax: 4, yMin: 0, yMax: 8,
          curves: [{ type: "linear", params: { m: 2, b: 1 }, label: "y = 2x + 1" }],
          shade: { curve: 0, from: 1, to: 3 },
          vlines: [{ x: 1, label: "x = 1" }, { x: 3, label: "x = 3" }],
          caption: "Miền tô là hình thang; tích phân bằng diện tích hình thang = 10.",
          alt: "Đường thẳng y bằng 2x cộng 1, miền tô từ x bằng 1 đến x bằng 3"
        },
        pitfall: {
          title: "Chỉ thay cận trên là thiếu một nửa",
          text: "F(3) = 12 chưa phải đáp án. Bắt buộc trừ F(1). Lỗi này xuất hiện nhiều vì bước trừ dễ bị bỏ qua khi làm nhanh."
        },
        checks: [
          {
            q: "∫₀¹ 2x dx bằng",
            options: ["2", "1", "0", "1/2"],
            answer: 1,
            explain: "F(x) = x², nên F(1) − F(0) = 1 − 0 = 1."
          },
          {
            q: "Một nguyên hàm của cos x là",
            options: ["−sin x", "sin x", "cos x", "−cos x"],
            answer: 1,
            explain: "Đạo hàm của sin x là cos x, nên sin x là nguyên hàm của cos x."
          }
        ]
      }
    ],
    wrap: [
      "∫ₐᵇ f = F(b) − F(a): tìm nguyên hàm rồi trừ hai đầu.",
      "Nguyên hàm và đạo hàm là hai phép ngược nhau."
    ],
    bridge: "Bài sau mở rộng từ tổng hữu hạn sang chuỗi vô hạn — khi nào cộng mãi vẫn ra một số hữu hạn."
  };

  T.tp3 = {
    goals: [
      "Hiểu chuỗi là tổng vô hạn và tổng riêng là công cụ xét hội tụ.",
      "Dùng được công thức chuỗi hình học.",
      "Phân biệt chuỗi hội tụ với chuỗi phân kỳ, kể cả khi số hạng tiến về 0."
    ],
    hook: "0,999… có bằng 1 không? Viết 0,999… = 9/10 + 9/100 + 9/1000 + … Ta đang cộng vô hạn số hạng. Câu trả lời phụ thuộc vào việc tổng riêng có tiến tới một giới hạn hay không — đó là bài toán hội tụ của chuỗi.",
    sections: [
      {
        kicker: "TRỰC GIÁC",
        title: "Tổng riêng và giới hạn",
        paragraphs: [
          "Tổng riêng Sₙ là tổng n số hạng đầu. Chuỗi hội tụ nếu dãy Sₙ có giới hạn hữu hạn; giới hạn đó là tổng của chuỗi. Nếu Sₙ không tiến tới đâu, chuỗi phân kỳ.",
          "Bảng bên phải cho 0,999…: các tổng riêng tiến sát 1 nhưng không vượt 1. Giới hạn đúng bằng 1, nên 0,999… = 1, không phải “gần bằng”."
        ],
        table: {
          head: ["n", "Sₙ = 0,9 + 0,09 + … (n số 9)"],
          rows: [["1", "0,9"], ["2", "0,99"], ["3", "0,999"], ["5", "0,99999"]],
          caption: "Sₙ = 1 − 10⁻ⁿ, rõ ràng tiến về 1 khi n tăng."
        },
        formula: "S = lim(n→∞) Sₙ, với Sₙ = a₁ + a₂ + … + aₙ"
      },
      {
        kicker: "CÔNG THỨC",
        title: "Chuỗi hình học",
        paragraphs: [
          "Chuỗi hình học có mỗi số hạng bằng số hạng trước nhân công bội r. Nếu |r| < 1 thì hội tụ và tổng bằng số hạng đầu chia (1 − r). Nếu |r| ≥ 1 thì phân kỳ.",
          "Đây là công thức dùng nhiều nhất trong bài tập nhập môn, cũng là mô hình của lãi kép, suy giảm phóng xạ và 0,999…"
        ],
        formula: "a + ar + ar² + … = a / (1 − r), với |r| < 1",
        example: {
          title: "Tính 1/2 + 1/4 + 1/8 + …",
          steps: [
            { label: "1", text: "Nhận dạng: số hạng đầu a = 1/2, công bội r = 1/2." },
            { label: "2", text: "Kiểm tra |r| = 1/2 < 1, nên chuỗi hội tụ." },
            { label: "3", text: "Áp công thức: S = a/(1 − r) = (1/2)/(1/2) = 1." },
            { label: "4", text: "Kiểm tra trực giác: mỗi lần cắt đôi phần còn lại, tổng cuối cùng lấp đầy đúng 1." }
          ],
          result: "Tổng bằng 1. Tương tự, 0,999… có a = 0,9 và r = 0,1, nên S = 0,9/0,9 = 1."
        },
        figure: {
          type: "plot",
          xMin: 0, xMax: 8.5, yMin: 0, yMax: 2.1,
          curves: [
            { type: "exp", params: { a: 1, k: -0.693 }, from: 0, to: 8 },
            { type: "rational", params: { a: 1, b: 0 }, color: "var(--warn)", from: 1, to: 8 }
          ],
          legend: [{ color: "var(--a)", label: "(1/2)^n" }, { color: "var(--warn)", label: "1/n" }],
          caption: "Cả hai dãy số hạng đều tiến về 0. Nhưng tổng của (1/2)^n hữu hạn, còn tổng 1/n vẫn phân kỳ: số hạng nhỏ chưa đủ để kết luận.",
          alt: "Hai đường giảm: một phần hai mũ n giảm nhanh, một trên n giảm chậm"
        },
        pitfall: {
          title: "Số hạng tiến về 0 chưa đủ để hội tụ",
          text: "Chuỗi điều hòa 1 + 1/2 + 1/3 + 1/4 + … có số hạng tiến về 0 nhưng tổng vẫn phân kỳ, vượt mọi ngưỡng. Điều kiện cần là số hạng → 0; điều kiện đủ phải xét thêm (so sánh, tích phân, tỉ số)."
        },
        checks: [
          {
            q: "Tổng 1 + 1/2 + 1/4 + 1/8 + … bằng",
            options: ["1", "2", "3/2", "phân kỳ"],
            answer: 1,
            explain: "a = 1, r = 1/2, nên S = 1/(1 − 1/2) = 2."
          },
          {
            q: "Chuỗi Σ 1/n² (từ n = 1)",
            options: ["phân kỳ vì số hạng dương", "hội tụ vì bậc mũ 2 > 1", "không xác định", "bằng 1"],
            answer: 1,
            explain: "Chuỗi p với p = 2 > 1 hội tụ (tổng bằng π²/6). Chỉ chuỗi p ≤ 1 mới phân kỳ."
          }
        ]
      }
    ],
    wrap: [
      "Chuỗi hội tụ khi dãy tổng riêng có giới hạn hữu hạn.",
      "Chuỗi hình học |r| < 1 có tổng a/(1 − r); số hạng → 0 là điều kiện cần, chưa đủ."
    ],
    bridge: "Ba chương khép lại một mạch: đạo hàm đo thay đổi, tích phân cộng dồn thay đổi, chuỗi cộng vô hạn những thay đổi ấy."
  };

  const D = window.BTL_DATA;
  if (!D) return;
  (D.modules || []).forEach((m) => (m.lessons || []).forEach((l) => {
    if (T[l.id]) l.teach = T[l.id];
  }));
})();
