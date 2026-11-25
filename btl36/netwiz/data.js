window.BTL_DATA = {
  id: "netwiz",
  code: "BTL-23",
  name: "NetWiz",
  monogram: "IP",
  subject: "Mạng máy tính",
  level: "Đại học",
  group: "Công nghệ thông tin",
  accent: "#0284c7",
  accent2: "#4f46e5",
  font: "display",
  tagline: "Nhìn gói tin đi qua từng lớp và tự tay dựng sơ đồ tô pô mạng.",
  intro: "NetWiz biến kiến thức mạng vốn vô hình thành sơ đồ có thể bấm vào và một dải thiết bị có địa chỉ cụ thể. Sinh viên theo dõi gói tin đi từ laptop qua switch, router, firewall đến máy chủ web trong DMZ.",
  hero: { title: "Mạng máy tính", highlight: "gói tin không còn vô hình" },
  heroBadge: "Topology · Packet flow · Subnet",
  labShort: "TÔ PÔ",
  labTag: "PHÒNG LAB",
  practiceTag: "TÍNH SUBNET",
  roleTag: "3 VAI TRÒ",
  stats: [
    { value: "3", label: "Chương học" },
    { value: "9", label: "Bài giảng" },
    { value: "12", label: "Thẻ giao thức" },
    { value: "10", label: "Câu trắc nghiệm" }
  ],
  featureLead: "Ba cách truyền đạt dành cho môn Mạng: sơ đồ tô pô bấm được, mô phỏng đóng gói gói tin và bảng tính subnet có minh họa nhị phân.",
  pathLead: "Đi từ kiến trúc phân tầng, sang địa chỉ IP và chia subnet, rồi thiết bị và vùng bảo mật. Phòng lab dùng một mạng văn phòng nhỏ để mọi khái niệm đều có chỗ đứng.",
  features: [
    { badge: "01", title: "Sơ đồ tô pô tương tác", desc: "Bấm vào từng thiết bị để xem vai trò, địa chỉ IP và VLAN, đồng thời bật tắt lớp thiết bị hoặc lớp kết nối." },
    { badge: "02", title: "Mô phỏng đóng gói", desc: "Theo dõi dữ liệu được thêm header ở từng lớp, đổi tên từ segment sang packet rồi frame trước khi lên dây." },
    { badge: "03", title: "Bảng tính subnet", desc: "Nhập địa chỉ và tiền tố để xem địa chỉ mạng, broadcast, dải host hợp lệ kèm minh họa từng bit." }
  ],
  modules: [
    {
      title: "Kiến trúc phân tầng và TCP/IP",
      summary: "Hiểu vì sao chia lớp, bốn lớp TCP/IP và hành trình đóng gói dữ liệu.",
      lessons: [
        {
          id: "os1",
          title: "Vì sao phải phân tầng",
          minutes: 16,
          level: "Cơ bản",
          summary: "Tách bài toán truyền dữ liệu thành các lớp độc lập để dễ thay thế.",
          points: [
            "Mỗi lớp chỉ giải quyết một nhóm vấn đề và che giấu chi tiết với lớp trên.",
            "Lớp trên dùng dịch vụ của lớp dưới qua giao diện chuẩn.",
            "Chuẩn hóa giúp thiết bị của nhiều hãng hiểu nhau."
          ],
          steps: [
            { title: "Nếu không phân tầng", body: "Một ứng dụng chat sẽ phải tự lo mã hóa, địa chỉ, tìm đường và điều khiển cáp. Khi đổi từ cáp đồng sang cáp quang, lập trình viên phải sửa cả ứng dụng dù nội dung chat không đổi.", tip: "Càng nhiều trách nhiệm trong một khối, càng khó thay một bộ phận." },
            { title: "Tách theo trách nhiệm", body: "Khi gửi một bức thư điện tử, lớp ứng dụng soạn nội dung, lớp giao vận chia thành đoạn và đánh số, lớp mạng chọn đường đi, lớp truy cập mạng đưa các bit lên dây. Mỗi lớp chỉ cần biết lớp kề nó.", tip: "Gán mỗi chức năng cho đúng một lớp để tránh chồng chéo." },
            { title: "Lợi ích khi thay thế", body: "Đổi từ Wi-Fi sang cáp chỉ thay lớp truy cập mạng, trình duyệt và HTTP vẫn giữ nguyên. Đây là lý do cùng một website chạy được trên Wi-Fi, 4G và cáp quang mà không cần phiên bản riêng.", tip: "Khi học một giao thức, xác định nó thuộc lớp nào trước khi nhớ chi tiết." }
          ],
          formula: "Mỗi lớp chỉ nói chuyện với lớp ngay trên và ngay dưới nó"
        },
        {
          id: "os2",
          title: "Bốn lớp TCP/IP và chức năng",
          minutes: 18,
          level: "Cơ bản",
          summary: "Gắn giao thức quen thuộc vào đúng lớp trong mô hình TCP/IP.",
          points: [
            "Application gồm HTTP, DNS, SMTP và giao diện cho người dùng.",
            "Transport dùng TCP hoặc UDP và đánh số cổng.",
            "Internet xử lý địa chỉ IP và định tuyến; Network Access truyền frame."
          ],
          steps: [
            { title: "Lớp ứng dụng", body: "HTTP, DNS, SMTP và FTP đều thuộc lớp Application vì chúng phục vụ trực tiếp nhu cầu của người dùng. Trình duyệt gửi yêu cầu HTTP, hệ điều hành hỏi DNS để đổi tên miền thành địa chỉ IP.", tip: "Nhớ theo mục đích: lớp nào người dùng nhìn thấy thì thuộc Application." },
            { title: "Lớp giao vận", body: "TCP đánh số thứ tự, xác nhận và truyền lại gói mất nên phù hợp với web và tệp. UDP không làm việc đó nên nhanh hơn, thích hợp cho gọi video và DNS khi ưu tiên độ trễ thấp.", tip: "Hỏi hai câu: cần tin cậy không, cần nhanh không." },
            { title: "Lớp mạng và truy cập mạng", body: "Lớp Internet dùng IP để tìm đường giữa các mạng, còn lớp Network Access đóng frame và truyền qua Ethernet hoặc Wi-Fi. Router hoạt động chủ yếu ở lớp Internet, switch hoạt động ở lớp truy cập mạng.", tip: "Gắn thiết bị với lớp hoạt động để nhớ nhanh vai trò." }
          ],
          formula: "Application - Transport - Internet - Network Access"
        },
        {
          id: "os3",
          title: "Đóng gói và mở gói dữ liệu",
          minutes: 22,
          level: "Trung bình",
          summary: "Theo dõi header được thêm và bớt qua từng lớp khi gửi và nhận.",
          points: [
            "Mỗi lớp thêm header riêng khi gửi và gỡ đúng header đó khi nhận.",
            "Tên đơn vị dữ liệu đổi theo lớp: segment, packet, frame.",
            "MTU giới hạn kích thước frame nên dữ liệu lớn phải chia nhỏ."
          ],
          steps: [
            { title: "Thêm header từ trên xuống", body: "Dữ liệu HTTP được lớp giao vận thêm header TCP chứa cổng nguồn và đích, thành segment. Lớp Internet thêm header IP chứa địa chỉ nguồn và đích, thành packet; lớp truy cập mạng thêm header Ethernet chứa MAC, thành frame.", tip: "Hình dung mỗi lớp bọc thêm một lớp giấy ghi địa chỉ trước khi gửi đi." },
            { title: "Mở gói ở máy nhận", body: "Máy nhận đi ngược từ dưới lên: gỡ header Ethernet, kiểm tra MAC, gỡ header IP, rồi gỡ header TCP và chuyển dữ liệu cho đúng cổng ứng dụng. Nếu checksum sai, frame bị bỏ và có thể yêu cầu gửi lại.", tip: "Lỗi ở một lớp thường biểu hiện ở lớp trên, nên đọc log theo thứ tự từ dưới lên." },
            { title: "Giới hạn MTU", body: "Ethernet thường có MTU 1500 byte, nên gói IP lớn hơn sẽ bị phân mảnh hoặc bị chặn. Hiện tượng trang web nhỏ mở được nhưng tải tệp lớn bị treo là dấu hiệu cần kiểm tra MTU và MSS.", tip: "Dùng ping với kích thước gói tăng dần để dò MTU thực tế của đường truyền." }
          ],
          formula: "Dữ liệu -> Segment -> Packet -> Frame -> Bit"
        }
      ]
    },
    {
      title: "Địa chỉ IP và chia mạng",
      summary: "Đọc mặt nạ, chia subnet và cấu hình gateway cho từng máy.",
      lessons: [
        {
          id: "ip1",
          title: "IPv4, mặt nạ và tiền tố",
          minutes: 20,
          level: "Cơ bản",
          summary: "Chuyển đổi giữa mặt nạ và tiền tố, tách phần mạng khỏi phần host.",
          points: [
            "IPv4 dài 32 bit, viết thành bốn số từ 0 đến 255.",
            "Mặt nạ 255.255.255.0 tương đương tiền tố /24.",
            "Phép AND giữa IP và mặt nạ cho ra địa chỉ mạng."
          ],
          steps: [
            { title: "Đọc bốn octet", body: "Địa chỉ 192.168.10.21 gồm bốn octet, mỗi octet là 8 bit nên tổng cộng 32 bit. Octet 192 là 11000000, 168 là 10101000, 10 là 00001010 và 21 là 00010101.", tip: "Học thuộc tám giá trị 128, 64, 32, 16, 8, 4, 2, 1 để đổi nhanh." },
            { title: "Mặt nạ và tiền tố", body: "Mặt nạ 255.255.255.0 có 24 bit 1 liên tiếp nên viết gọn là /24. Số bit 1 xác định phần mạng, số bit 0 còn lại xác định phần host; /24 để lại 8 bit host nên có 256 địa chỉ trong dải.", tip: "Đếm số bit 1 trong mặt nạ để biết ngay tiền tố." },
            { title: "Tìm địa chỉ mạng", body: "Thực hiện AND từng bit giữa 192.168.10.21 và 255.255.255.0, kết quả là 192.168.10.0. Địa chỉ này không gán cho máy vì dùng để định danh cả dải mạng.", tip: "Với /24, địa chỉ mạng chính là ba octet đầu giữ nguyên và octet cuối bằng 0." }
          ],
          formula: "192.168.10.21 AND 255.255.255.0 = 192.168.10.0"
        },
        {
          id: "ip2",
          title: "Chia subnet và đếm host khả dụng",
          minutes: 24,
          level: "Trung bình",
          summary: "Tính số subnet, bước nhảy và số host khả dụng của một tiền tố.",
          points: [
            "Số host khả dụng bằng 2^h - 2 vì trừ địa chỉ mạng và broadcast.",
            "/26 còn 6 bit host nên mỗi subnet có 62 host khả dụng.",
            "Bước nhảy bằng 256 trừ giá trị octet cuối của mặt nạ."
          ],
          steps: [
            { title: "Đếm bit mượn", body: "Chia 192.168.10.0/24 thành các subnet /26 nghĩa là mượn 2 bit từ phần host, tạo ra 4 subnet. Mặt nạ /26 là 255.255.255.192 vì 192 bằng 128 + 64.", tip: "Số subnet bằng 2 mũ số bit mượn." },
            { title: "Tìm bước nhảy", body: "Bước nhảy bằng 256 - 192 = 64, nên bốn subnet bắt đầu tại 192.168.10.0, .64, .128 và .192. Mỗi subnet có 64 địa chỉ, trong đó địa chỉ đầu là mạng và địa chỉ cuối là broadcast.", tip: "Cộng bước nhảy liên tục đến khi vượt 256 để liệt kê đủ subnet." },
            { title: "Liệt kê host hợp lệ", body: "Subnet 192.168.10.64/26 có địa chỉ mạng .64, broadcast .127, host hợp lệ từ .65 đến .126, tổng cộng 62 địa chỉ. Không gán .64 và .127 cho thiết bị vì sẽ gây lỗi khó tìm.", tip: "Kiểm tra nhanh: host đầu tiên bằng địa chỉ mạng cộng 1, host cuối bằng broadcast trừ 1." }
          ],
          formula: "2^6 - 2 = 62 host khả dụng cho mỗi subnet /26"
        },
        {
          id: "ip3",
          title: "Gateway và định tuyến tĩnh",
          minutes: 22,
          level: "Trung bình",
          summary: "Cấu hình cổng mặc định và đọc bảng định tuyến của router.",
          points: [
            "Máy không biết đường tới đích sẽ gửi gói cho gateway mặc định.",
            "Mỗi route tĩnh gồm mạng đích, mặt nạ và next hop.",
            "Tuyến 0.0.0.0/0 là tuyến mặc định ra Internet."
          ],
          steps: [
            { title: "Vai trò của gateway", body: "PC-01 có IP 192.168.10.21/24 và gateway 10.0.0.1. Khi truy cập máy chủ web ở dải khác, máy gửi frame cho gateway thay vì tìm trực tiếp, vì đích nằm ngoài phần mạng của mình.", tip: "Gateway phải cùng subnet với máy, nếu không máy sẽ báo không kết nối được." },
            { title: "Đọc bảng định tuyến", body: "Lệnh route print trên Windows hiển thị các dòng Network Destination, Netmask và Gateway. Router chọn tuyến khớp dài nhất, nên route /24 được ưu tiên hơn route /16 khi cùng đích.", tip: "Đọc từ trên xuống và chú ý cột giao diện mạng đang dùng." },
            { title: "Thêm route tĩnh", body: "Trên router, lệnh ip route 10.20.0.0 255.255.0.0 10.0.0.2 đưa mạng 10.20.0.0 đi qua next hop 10.0.0.2. Route tĩnh phù hợp với mạng nhỏ, còn mạng lớn nên dùng giao thức định tuyến động.", tip: "Sau khi thêm route, dùng ping và traceroute để kiểm chứng đường đi thực tế." }
          ],
          formula: "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
        }
      ]
    },
    {
      title: "Thiết bị, giao thức và an toàn mạng",
      summary: "Phân biệt thiết bị theo lớp, nhớ cổng dịch vụ và thiết kế vùng DMZ.",
      lessons: [
        {
          id: "dv1",
          title: "Hub, switch, router, firewall",
          minutes: 20,
          level: "Cơ bản",
          summary: "Chọn đúng thiết bị cho từng lớp và hiểu hệ quả của việc chọn sai.",
          points: [
            "Hub phát mọi frame ra mọi cổng nên dễ va chạm và nghe lén.",
            "Switch học địa chỉ MAC và chỉ chuyển frame ra cổng cần thiết.",
            "Router nối các mạng khác nhau, firewall lọc gói theo quy tắc."
          ],
          steps: [
            { title: "Hub và miền va chạm", body: "Hub là thiết bị lặp tín hiệu, nhận frame từ một cổng rồi phát ra tất cả cổng còn lại. Mọi máy cùng chia sẻ một miền va chạm nên khi nhiều máy gửi cùng lúc sẽ đụng độ và phải truyền lại.", tip: "Hub gần như không còn dùng trong mạng văn phòng hiện nay." },
            { title: "Switch và bảng MAC", body: "Switch ghi lại địa chỉ MAC nguồn kèm cổng nhận vào bảng MAC. Khi cần chuyển frame, switch tra bảng và chỉ gửi ra đúng cổng của đích, nhờ vậy mỗi cổng là một miền va chạm riêng.", tip: "Bảng MAC đầy là dấu hiệu bị tấn công tràn bảng hoặc mạng quá lớn." },
            { title: "Router và firewall", body: "Router có giao diện ở nhiều mạng, mỗi giao diện một địa chỉ IP, và quyết định gói đi tiếp ở đâu. Firewall đặt ở biên, kiểm tra từng gói theo quy tắc như chỉ cho phép cổng 443 vào máy chủ web.", tip: "Đặt firewall trước router biên để lọc trước khi gói vào mạng nội bộ." }
          ],
          formula: "Hub: một miền va chạm; switch: mỗi cổng một miền va chạm"
        },
        {
          id: "dv2",
          title: "Cổng và giao thức thường gặp",
          minutes: 18,
          level: "Cơ bản",
          summary: "Nhớ bộ cổng dịch vụ cốt lõi và chọn TCP hay UDP theo nhu cầu.",
          points: [
            "HTTP dùng 80, HTTPS dùng 443, DNS dùng 53, SSH dùng 22, FTP dùng 21.",
            "TCP đảm bảo thứ tự và truyền lại, UDP ưu tiên độ trễ thấp.",
            "Cổng từ 1024 trở lên thường là cổng động phía máy khách."
          ],
          steps: [
            { title: "Bộ cổng phải nhớ", body: "Khi mở trình duyệt vào một trang HTTPS, máy khách mở cổng động rồi kết nối tới cổng 443 của máy chủ. DNS hỏi cổng 53 trước để đổi tên miền thành IP, sau đó mới thiết lập kết nối TCP tới web.", tip: "Nhóm cổng theo dịch vụ: web 80 và 443, mail 25 và 110, quản trị 22." },
            { title: "TCP hay UDP", body: "Tải tệp và duyệt web cần đúng từng byte nên dùng TCP. Gọi video, chơi game trực tuyến và phần lớn truy vấn DNS dùng UDP vì mất một gói vẫn chấp nhận được, còn chờ truyền lại thì bị trễ.", tip: "Hỏi lại: mất một gói có làm hỏng trải nghiệm không." },
            { title: "Đọc kết quả netstat", body: "Lệnh netstat -ano liệt kê địa chỉ cục bộ kèm cổng và trạng thái LISTENING hoặc ESTABLISHED. Cổng đang LISTENING là dịch vụ đang mở, cần kiểm tra xem có dịch vụ nào không dùng mà vẫn mở.", tip: "Đối chiếu cột PID với Task Manager để biết tiến trình nào đang giữ cổng." }
          ],
          formula: "HTTPS 443 - DNS 53 - SSH 22 - FTP 21"
        },
        {
          id: "dv3",
          title: "Wi-Fi, VLAN và vùng DMZ",
          minutes: 24,
          level: "Nâng cao",
          summary: "Tách mạng logic bằng VLAN và cô lập dịch vụ công khai trong DMZ.",
          points: [
            "VLAN chia một switch vật lý thành nhiều mạng logic riêng.",
            "Wi-Fi cần SSID và mã hóa WPA2 hoặc WPA3, không dùng WEP.",
            "DMZ đặt dịch vụ công khai tách khỏi mạng nội bộ."
          ],
          steps: [
            { title: "VLAN và trunk", body: "Switch cấu hình VLAN 10 cho phòng máy, VLAN 20 cho Wi-Fi và VLAN 99 cho quản trị. Cổng nối giữa hai switch đặt chế độ trunk để mang frame của nhiều VLAN, mỗi frame được gắn thẻ VLAN ID.", tip: "Không đặt cổng quản trị cùng VLAN với cổng phát Wi-Fi cho sinh viên." },
            { title: "Wi-Fi an toàn", body: "SSID NetWiz-SV dùng WPA2-Enterprise để mỗi sinh viên đăng nhập bằng tài khoản riêng, tránh dùng chung một mật khẩu. Tắt WPS và đổi mật khẩu quản trị router khỏi giá trị mặc định.", tip: "Mạng Wi-Fi cho khách nên tách VLAN và chỉ cho ra Internet." },
            { title: "Thiết kế DMZ", body: "Máy chủ web đặt trong DMZ, chỉ mở cổng 443 từ Internet và một cổng nội bộ tới máy chủ dữ liệu. Nếu máy chủ web bị chiếm quyền, kẻ tấn công vẫn không vào được thẳng mạng LAN.", tip: "Quy tắc DMZ nên là từ chối mặc định, chỉ mở đúng cổng cần thiết." }
          ],
          formula: "VLAN 10 phòng máy - VLAN 20 Wi-Fi - VLAN 99 quản trị"
        }
      ]
    }
  ],
  flashcards: [
    { front: "Mô hình TCP/IP", back: "Bốn lớp: Application, Transport, Internet, Network Access.", hint: "Ứng dụng, giao vận, mạng, truy cập mạng.", example: "HTTP ở Application, TCP ở Transport, IP ở Internet." },
    { front: "Đóng gói dữ liệu", back: "Mỗi lớp thêm header riêng khi gửi, đơn vị đổi tên thành segment, packet rồi frame.", hint: "Bọc thêm một lớp giấy ghi địa chỉ.", example: "HTTP + header TCP = segment; + header IP = packet." },
    { front: "Địa chỉ IP private", back: "Dải dành cho mạng nội bộ: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.", hint: "Không định tuyến trực tiếp trên Internet.", example: "192.168.10.21 là địa chỉ private." },
    { front: "Tiền tố /24", back: "Tương đương mặt nạ 255.255.255.0, để lại 8 bit host.", hint: "24 bit 1 liên tiếp.", example: "192.168.10.0/24 có 254 host khả dụng." },
    { front: "Số host khả dụng", back: "Bằng 2 mũ số bit host trừ 2, vì mất địa chỉ mạng và broadcast.", hint: "Trừ hai địa chỉ đặc biệt.", example: "/26 còn 6 bit host nên có 62 host." },
    { front: "Gateway mặc định", back: "Địa chỉ router mà máy gửi gói tới khi đích nằm ngoài subnet của mình.", hint: "Cửa ra khỏi mạng cục bộ.", example: "PC-01 dùng gateway 10.0.0.1." },
    { front: "DNS", back: "Hệ thống phân giải tên miền thành địa chỉ IP, thường dùng cổng 53.", hint: "Đổi tên thành số.", example: "netwiz.edu.vn thành 203.0.113.10." },
    { front: "HTTPS", back: "Giao thức web mã hóa bằng TLS, mặc định dùng cổng 443.", hint: "HTTP có chữ S là secure.", example: "Trình duyệt kết nối tới máy chủ web ở cổng 443." },
    { front: "TCP và UDP", back: "TCP đảm bảo thứ tự và truyền lại, UDP nhanh nhưng không đảm bảo.", hint: "Tin cậy so với tốc độ.", example: "Tải tệp dùng TCP, gọi video dùng UDP." },
    { front: "Switch và hub", back: "Switch chuyển frame theo bảng MAC, hub phát mọi frame ra mọi cổng.", hint: "Một thiết bị thông minh hơn hẳn.", example: "Switch chỉ gửi frame ra cổng của máy đích." },
    { front: "Router", back: "Thiết bị nối các mạng khác nhau, chọn đường đi dựa trên bảng định tuyến.", hint: "Làm việc ở lớp Internet.", example: "R1 nối LAN, DMZ và Internet." },
    { front: "Vùng DMZ", back: "Phân vùng mạng đặt dịch vụ công khai, tách khỏi LAN để giảm thiệt hại khi bị tấn công.", hint: "Vùng đệm cho máy chủ công khai.", example: "Máy chủ web mở cổng 443 trong DMZ." }
  ],
  quiz: [
    { q: "Thiết bị nào chuyển gói tin giữa hai mạng IP khác nhau?", options: ["Hub", "Router", "Switch", "Access point"], answer: 1, explain: "Router có giao diện ở nhiều mạng và dùng bảng định tuyến để chọn đường đi cho gói IP." },
    { q: "Một subnet /24 có bao nhiêu địa chỉ host khả dụng?", options: ["254", "255", "256", "512"], answer: 0, explain: "Có 256 địa chỉ, trừ địa chỉ mạng và broadcast còn 254 host khả dụng." },
    { q: "HTTPS mặc định dùng cổng nào?", options: ["80", "21", "443", "53"], answer: 2, explain: "HTTPS chạy trên TLS và mặc định dùng cổng 443, còn HTTP dùng cổng 80." },
    { q: "Giao thức nào không đảm bảo thứ tự và không truyền lại gói mất?", options: ["TCP", "HTTP", "FTP", "UDP"], answer: 3, explain: "UDP không có cơ chế xác nhận hay truyền lại nên phù hợp với dữ liệu cần độ trễ thấp." },
    { q: "Địa chỉ IP được xử lý ở lớp nào của mô hình TCP/IP?", options: ["Application", "Transport", "Network Access", "Internet"], answer: 3, explain: "Lớp Internet chịu trách nhiệm địa chỉ IP và định tuyến gói giữa các mạng." },
    { q: "DNS có chức năng chính là gì?", options: ["Mã hóa dữ liệu đường truyền", "Phân giải tên miền thành địa chỉ IP", "Định tuyến gói tin giữa router", "Gán địa chỉ MAC cho card mạng"], answer: 1, explain: "DNS tra bảng tên miền để trả về địa chỉ IP, thường qua cổng 53." },
    { q: "Switch khác hub ở điểm nào?", options: ["Switch phát quảng bá ra mọi cổng", "Hub có bảng địa chỉ MAC", "Switch chuyển frame theo địa chỉ MAC", "Hub chia được VLAN"], answer: 2, explain: "Switch học bảng MAC và chỉ chuyển frame ra cổng cần thiết, còn hub phát ra tất cả cổng." },
    { q: "Địa chỉ 192.168.1.10 thuộc loại nào?", options: ["Dải riêng (private)", "Dải công khai", "Địa chỉ loopback", "Địa chỉ multicast"], answer: 0, explain: "192.168.0.0/16 là dải private dành cho mạng nội bộ, không định tuyến trực tiếp trên Internet." },
    { q: "Vùng DMZ được dùng để làm gì?", options: ["Tăng tốc Wi-Fi cho sinh viên", "Cấp IP động cho máy khách", "Mã hóa ổ đĩa máy chủ", "Đặt máy chủ công khai tách khỏi mạng nội bộ"], answer: 3, explain: "DMZ cô lập dịch vụ công khai để nếu bị chiếm quyền thì mạng LAN vẫn được bảo vệ." },
    { q: "Khi đóng gói, header được thêm vào ở đâu?", options: ["Mỗi lớp thêm header riêng của mình", "Chỉ lớp ứng dụng thêm header", "Chỉ lớp vật lý thêm header", "Không lớp nào thêm header"], answer: 0, explain: "Mỗi lớp bọc dữ liệu bằng header của mình, tạo ra segment, packet rồi frame." }
  ],
  lab: {
    kind: "diagram",
    title: "Tô pô mạng văn phòng có DMZ",
    lead: "Sơ đồ gồm chín nút: Internet, firewall, router, hai switch, máy trạm, access point, laptop và máy chủ web. Bấm vào từng thiết bị để xem vai trò, địa chỉ IP và VLAN.",
    stageLabel: "Sơ đồ tô pô tương tác",
    viewBox: "0 0 640 470",
    pickHint: "Chọn một thiết bị trên sơ đồ",
    layers: [
      { id: "devices", label: "Thiết bị" },
      { id: "links", label: "Đường kết nối" }
    ],
    shapes: [
      { type: "circle", cx: 320, cy: 40, r: 28, label: "Internet", layer: "devices", fill: "#0284c7",
        info: { title: "Internet", desc: "Mạng diện rộng do nhà cung cấp dịch vụ vận hành. Mọi gói tin ra ngoài đều phải qua firewall trước khi vào Internet.", tags: ["WAN", "ISP"] } },
      { type: "rect", x: 250, y: 86, w: 140, h: 44, rx: 10, label: "FW-1", layer: "devices", fill: "#ef4444",
        info: { title: "Firewall FW-1", desc: "Lọc gói theo quy tắc, chỉ mở cổng 443 vào máy chủ web trong DMZ và chặn truy cập trực tiếp từ Internet vào LAN.", tags: ["Lọc gói", "NAT"] } },
      { type: "circle", cx: 320, cy: 180, r: 28, label: "R1", layer: "devices", fill: "#4f46e5",
        info: { title: "Router R1", desc: "Định tuyến giữa LAN, DMZ và Internet, đồng thời là gateway mặc định 10.0.0.1 cho các máy trong LAN.", tags: ["Định tuyến", "Gateway"] } },
      { type: "rect", x: 95, y: 245, w: 150, h: 46, rx: 10, label: "SW-LAN", layer: "devices", fill: "#0284c7",
        info: { title: "Switch SW-LAN", desc: "Switch lớp 2 chuyển frame theo bảng MAC, chia VLAN 10 cho phòng máy và VLAN 20 cho Wi-Fi.", tags: ["VLAN 10", "Lớp 2"] } },
      { type: "rect", x: 400, y: 245, w: 150, h: 46, rx: 10, label: "SW-DMZ", layer: "devices", fill: "#0891b2",
        info: { title: "Switch SW-DMZ", desc: "Switch riêng cho vùng DMZ, cô lập máy chủ công khai khỏi mạng nội bộ nếu máy chủ bị chiếm quyền.", tags: ["DMZ", "Cô lập"] } },
      { type: "rect", x: 40, y: 352, w: 115, h: 42, rx: 10, label: "PC-01", layer: "devices", fill: "#0f766e",
        info: { title: "Máy trạm PC-01", desc: "Máy trong phòng lab nhận IP động 192.168.10.21 từ DHCP và dùng gateway 10.0.0.1.", tags: ["192.168.10.21", "DHCP"] } },
      { type: "rect", x: 185, y: 352, w: 115, h: 42, rx: 10, label: "AP-1", layer: "devices", fill: "#7c3aed",
        info: { title: "Access point AP-1", desc: "Phát Wi-Fi 5 GHz cho VLAN 20 và nhận nguồn PoE từ switch qua cổng Fa0/24.", tags: ["Wi-Fi", "PoE"] } },
      { type: "rect", x: 330, y: 352, w: 115, h: 42, rx: 10, label: "Laptop", layer: "devices", fill: "#64748b",
        info: { title: "Laptop sinh viên", desc: "Thiết bị không dây kết nối SSID NetWiz-SV, nhận IP 192.168.20.35 và chỉ ra được Internet qua router.", tags: ["192.168.20.35", "Wi-Fi"] } },
      { type: "rect", x: 480, y: 352, w: 120, h: 42, rx: 10, label: "SRV-WEB", layer: "devices", fill: "#b45309",
        info: { title: "Máy chủ web SRV-WEB", desc: "Máy chủ công khai trong DMZ, chỉ mở cổng 443 và một cổng nội bộ tới máy chủ dữ liệu.", tags: ["HTTPS 443", "DMZ"] } }
    ],
    links: [
      { x1: 320, y1: 68, x2: 320, y2: 86, label: "WAN", layer: "links" },
      { x1: 320, y1: 130, x2: 320, y2: 152, label: "inside", layer: "links" },
      { x1: 292, y1: 180, x2: 205, y2: 245, label: "G0/1", layer: "links" },
      { x1: 348, y1: 180, x2: 465, y2: 245, label: "G0/2 DMZ", layer: "links" },
      { x1: 140, y1: 291, x2: 100, y2: 352, label: "Fa0/1", layer: "links" },
      { x1: 200, y1: 291, x2: 240, y2: 352, label: "Fa0/24 PoE", layer: "links" },
      { x1: 300, y1: 373, x2: 330, y2: 373, layer: "links", dash: true },
      { x1: 510, y1: 291, x2: 540, y2: 352, label: "Fa0/3 trunk", layer: "links" }
    ],
    controlNote: "Bật tắt lớp Thiết bị và Đường kết nối để tập trung vào từng phần của sơ đồ.",
    note: "Sơ đồ mô phỏng mạng văn phòng nhỏ: firewall ở biên, router định tuyến, hai switch cho LAN và DMZ, máy trạm, access point và máy chủ web."
  },
  teacher: {
    students: [
      { name: "Nguyễn Bảo Nam", progress: 82, score: 8.4, status: "Tốt", note: "Chia subnet nhanh, cần luyện thêm VLAN trunk." },
      { name: "Trần Khánh Linh", progress: 57, score: 7.0, status: "Đang học", note: "Hay nhầm số host khả dụng với tổng số địa chỉ." },
      { name: "Lê Anh Dũng", progress: 90, score: 9.1, status: "Tốt", note: "Đọc bảng định tuyến tốt, có thể hỗ trợ nhóm." },
      { name: "Phạm Thu Hà", progress: 24, score: 5.2, status: "Cần hỗ trợ", note: "Chưa hoàn thành bài đóng gói dữ liệu." },
      { name: "Vũ Minh Trí", progress: 68, score: 7.7, status: "Đang học", note: "Hiểu TCP và UDP, cần ôn cổng dịch vụ." },
      { name: "Đỗ Thanh Tùng", progress: 46, score: 6.3, status: "Đang học", note: "Nhầm vai trò switch và router khi đọc tô pô." }
    ],
    submissions: [
      { student: "Nguyễn Bảo Nam", lesson: "Bài tập: chia 192.168.10.0/24 thành 4 subnet", time: "Hôm qua 22:20", status: "Chờ chấm" },
      { student: "Phạm Thu Hà", lesson: "Phiếu mô tả luồng gói tin HTTP", time: "Hôm qua 19:05", status: "Chờ chấm" },
      { student: "Lê Anh Dũng", lesson: "Bài tô pô mạng văn phòng 8 máy", time: "2 ngày trước", status: "Đã chấm" }
    ],
    notices: [
      "Buổi thứ Sáu thực hành chia subnet, mang theo máy tính có cài ứng dụng Calculator ở chế độ lập trình viên.",
      "Bài kiểm tra giữa kỳ gồm 40% trắc nghiệm cổng giao thức và 60% bài tính subnet.",
      "Nhóm nào chưa nộp sơ đồ tô pô cần bổ sung nhãn cho từng đường kết nối trước hạn."
    ]
  },
  className: "Mạng máy tính – K24",
  brief: "BTL-23_netwiz-mon-mang-may-tinh.md"
};
