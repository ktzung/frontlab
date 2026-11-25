# BTL-23 – NetWiz – Hệ thống hỗ trợ giảng dạy và học tập môn Mạng máy tính

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Khoa học Máy tính – Giảng dạy và học tập môn Mạng máy tính** (kiến trúc phân tầng, giao thức TCP/IP, sơ đồ tô pô, định tuyến, luồng gói tin).

## 2. Tóm tắt sản phẩm

**NetWiz – Hệ thống hỗ trợ giảng dạy và học tập môn Mạng máy tính** giúp **giảng viên** dựng học liệu trực quan (bài giảng phân tầng, bộ bài tập cổng/giao thức, sơ đồ tô pô mẫu) và giúp **sinh viên** hiểu sâu qua **vẽ sơ đồ tô pô mạng**, **mô phỏng luồng gói tin** khi truyền dữ liệu qua các lớp, và **bài tập tính toán** (subnet, cổng, địa chỉ IP). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Mạng máy tính là môn nền tảng của sinh viên công nghệ thông tin, dạy về kiến trúc phân tầng OSI/TCP/IP, địa chỉ IP và chia subnet, giao thức định tuyến, tô pô mạng. Đây là kiến thức vốn "ẩn" — người học không nhìn thấy gói tin đi thế nào, khó hình dung mối quan hệ giữa các lớp, dễ nhầm cổng/giao thức. Giảng viên cần trực quan hóa sơ đồ tô pô và diễn hoạt luồng gói tin qua từng lớp để sinh viên hiểu bản chất thay vì chỉ học thuộc.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung **gói tin truyền như thế nào** qua các lớp khi dữ liệu chuyển từ máy này sang máy khác.
- **P2.** Việc **vẽ và đọc sơ đồ tô pô mạng** (hub, switch, router, mạng LAN/WAN) còn khó, thiếu công cụ tương tác để thử sửa lỗi kết nối.
- **P3.** Sinh viên hay nhầm **số cổng, giao thức, dải địa chỉ IP**, không có nơi tự luyện tính subnet và trắc nghiệm nhanh.
- **P4.** Giảng viên khó giao và chấm bài tập mô tả luồng gói tin / thiết kế tô pô một cách nhất quán.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Mạng máy tính thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ phù hợp: chương, bài giảng, bài tập, đề, nộp bài, chấm điểm, tiến độ.
- **O4.** Dùng JavaScript/DOM để vẽ **sơ đồ tô pô mạng (SVG/Canvas)** và mô phỏng **luồng gói tin** với điều khiển tiến/lùi.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (kèm `db.json`).
- **O6.** Thiết kế 3 ý tưởng AI mô phỏng ở Frontend (mô tả luồng gói tin, đề xuất tô pô, giải thích giao thức) — **tùy chọn, không bắt buộc**.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa, xem mô phỏng luồng gói tin mẫu, góp ý chủ đề cần bổ sung |
| Sinh viên | Học bài giảng phân tầng, vẽ tô pô, xem mô phỏng gói tin, làm bài tập tính toán, xem điểm & tiến độ, hỏi AI |
| Giảng viên | Dựng bài giảng và học liệu, xây tô pô mẫu, tạo bài tập subnet/giao thức, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chương trình học, thiết bị mạng mẫu, cấu hình hệ thống, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (vẽ tô pô, mô phỏng gói tin, làm bài)
↓
Xem trạng thái / dữ liệu / phản hồi
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã
| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Giới thiệu & xem thử | Xem khóa học, mô phỏng mẫu, góp ý | Trang chủ | `index.html` | R | SV1 |
| Sinh viên | Vẽ tô pô mạng | Kéo–thả thiết bị, nối dây, kiểm tra kết nối | Topology Editor | `student-topology-editor.html` | C/R/U — Lưu/Lưu nháp | SV1 |
| Sinh viên | Hiểu luồng gói tin | Xem gói tin di chuyển qua các lớp | Packet Flow Simulation | `student-packet-sim.html` | R | SV1 |
| Sinh viên | Luyện tính toán | Làm bài subnet, IP, cổng có đáp án | Network Calculation | `student-network-calculation.html` | C/R/U — Nộp | SV2 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, tiến độ module | Bảng điều khiển SV | `student-dashboard.html` | R | SV2 |
| Giảng viên | Dựng học liệu | Tạo bài giảng, tô pô mẫu, bài tập | Xây bài tập & tô pô | `teacher-exercise-build.html` | C/R/U/D — Vô hiệu hóa | SV2 |
| Giảng viên | Chấm & phản hồi | Duyệt bài nộp, chấm điểm | Chấm bài | `teacher-grading.html` | R/U — Đang chờ/Đạt/Chưa đạt | SV2 |
| Giảng viên | Phân tích lớp | Xem báo cáo năng lực | Bảng điều khiển GV | `teacher-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý & cấu hình | Quản lý tài khoản, thiết bị mẫu, quyền | Quản trị hệ thống | `admin-dashboard.html` | R | SV3 |

### Bao phủ trạng thái bắt buộc
Đang tải; Rỗng; Thành công; Lỗi; Vô hiệu hóa; Đang chờ; Bị từ chối; Hoàn thành; Đã hủy/Lưu trữ khi phù hợp.

### Màn hình dùng chung
`index.html`, `login.html`, `register.html`, `forgot-password.html`, `profile.html`, `settings.html`, `notifications.html`, `403.html`, `404.html` (xem xét trong bảng kiểm kê).

### Định nghĩa hoàn thành mỗi màn hình
- [ ] Bản mô phỏng Figma/Canva
- [ ] HTML ngữ nghĩa
- [ ] CSS hoàn chỉnh + Responsive
- [ ] Tương tác JavaScript
- [ ] Kiểm tra hợp lệ biểu mẫu
- [ ] Dữ liệu mock API / JSON
- [ ] Trạng thái rỗng + tải/lỗi khi hợp lý
- [ ] Khả năng tiếp cận cơ bản
- [ ] PR đã review, merge `dev`
- [ ] Video OBS giảng giải + chứng minh "làm lại được"
- [ ] README / bảng kiểm kê cập nhật

### Lát cắt dọc bắt buộc cho từng sinh viên
```text
Bản mô phỏng → HTML → CSS → JavaScript → Dữ liệu → Responsive → Nhánh Git → Commit → PR → Video OBS giảng giải
```
Mỗi sinh viên phải tự hoàn thành ít nhất một luồng end-to-end và giảng giải được nó.

### (Ùy chọn) Trải nghiệm khi AI thất bại
Nếu nhóm làm AI, mỗi AI feature cần có trạng thái không đủ dữ liệu / không chắc chắn / lỗi, kèm thao tác Chỉnh sửa / Thử lại / Bỏ qua / Báo cáo / Dùng thủ công.

### Bảo vệ / Chỉnh sửa ngẫu nhiên
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo loại thiết bị, đổi table thành card bài tập, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình cơ bản
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang chủ | R | Giới thiệu khóa Mạng máy tính, các module tô pô/gói tin/giao thức |
| 2 | `visitor-packet-preview.html` | Xem mô phỏng mẫu | R | Xem minh họa gói tin qua các lớp TCP/IP |
| 3 | `visitor-topic-feedback.html` | Góp ý chủ đề | C/R | Đề xuất chủ đề giao thức/tô pô cần bổ sung |

### Học sinh / Sinh viên → 5 màn hình, sát môn Mạng máy tính
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Tiến độ, điểm các module tô pô / gói tin / tính toán |
| 5 | `student-topology-editor.html` | Topology Editor | C/R/U | Vẽ sơ đồ tô pô SVG/Canvas, kéo–thả thiết bị, nối dây |
| 6 | `student-packet-sim.html` | Packet Flow Simulation | C/R | Mô phỏng gói tin đi qua lớp, có điều khiển tiến/lùi |
| 7 | `student-network-calculation.html` | Bài tập tính toán | C/R/U | Giải bài subnet, IP, cổng, đáp án giải thích từng bước |
| 8 | `student-protocol-flashcards.html` | Thẻ giao thức | R | Flashcard số cổng/giao thức, trắc nghiệm nhanh |

### Giáo viên / Giảng viên → 5 màn hình, sát môn Mạng máy tính
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển GV | R | Tổng quan lớp, chương, mức thực hành tô pô/giao thức |
| 10 | `teacher-topology-builder.html` | Xây tô pô mẫu | C/R/U | Dựng sơ đồ tô pô với thiết bị chuẩn cho học liệu |
| 11 | `teacher-exercise-build.html` | Xây bài tập | C/R/U/D | Tạo bài tập partition IP, cổng, mô tả luồng gói tin |
| 12 | `teacher-grading.html` | Chấm bài | R/U | Xem bài nộp, chấm điểm, nhận xét luồng gói tin |
| 13 | `teacher-class-analysis.html` | Phân tích lớp | R | Báo cáo năng lực theo chương/tô pô/giao thức |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển Admin | R | Quản trị hệ thống NetWiz |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản SV/GV, phân quyền |
| 16 | `admin-device-config.html` | Cấu hình thiết bị mẫu | C/R/U | Cấu hình thiết bị (switch, router), chương trình học |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát. Riêng môn Mạng máy tính, giao diện điểm nhấn là **sơ đồ tô pô kéo–thả (SVG/Canvas)** và **mô phỏng luồng gói tin** với điều khiển tiến/lùi.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản SV/GV/Admin |
| `courses` | ✓ | ✓ | ✓ | ✓/Đóng | Khóa học Mạng máy tính |
| `chapters` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chương: phân tầng, giao thức, định tuyến, tô pô |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng trực quan từng chương |
| `topologies` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Sơ đồ tô pô: thực thể thiết bị + đường nối |
| `devices` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Bộ thiết bị chuẩn: PC, switch, router, hub |
| `protocols` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Số cổng/giao thức, bảng Flashcard |
| `exercises` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Bài tập subnet/giao thức kèm đáp án |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp, trạng thái Đang chờ/Đạt/Chưa đạt |
| `aiTutorLogs` | ✓ | ✓ | ✓ | ✓/Xóa | Nhật ký hỏi AI (nếu làm AI) |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Tối thiểu 3 cách truyền đạt gắn với môn Mạng máy tính:

- **Mô phỏng luồng gói tin từng bước (step-by-step).** Màn hình `student-packet-sim.html`. Một gói dữ liệu được diễn hoạt chuyển từ ứng dụng → transport → network → data link trên máy gửi, qua router rồi "mở gói" ngược lại ở máy nhận, có điều khiển tiến/lùi — giúp hiểu bản chất phân tầng và đóng/mở header, thay vì học thuộc lý thuyết.
- **Sơ đồ tô pô kéo–thả tương tác (SVG/Canvas).** Màn hình `student-topology-editor.html`. Kéo PC, switch, router lên canvas, nối dây, chọn giao thức truyền; công cụ tự gợi ý lỗi (thiết bị chưa cấu hình IP, mất liên kết) — người học hiểu phạm vi từng lớp thiết bị.
- **Bảng tính subnet tương tác + đáp án giải thích.** Màn hình `student-network-calculation.html`. Nhập địa chỉ/mặt nạ, máy tự tính network, broadcast, số host hợp lệ và minh họa bit — giúp nắm logic nhị phân thay vì đoán.
- **Thẻ flashcard + trắc nghiệm nhanh giao thức/cổng.** Màn hình `student-protocol-flashcards.html`. Flashcard số cổng (HTTP 80, HTTPS 443, FTP 21...) kèm minigame đố nhanh giúp ghi nhớ nhanh trước khi thi.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Packet Flow Narrator
Mô tả một tình huống truyền dữ liệu bằng lời, AI sinh diễn giải luồng gói tin qua từng lớp kèm giải thích giao thức tham gia. Cách mô phỏng: JSON giả lập ánh xạ tình huống → mô tả từng lớp; JS theo quy tắc; LLM API tùy chọn. Giá trị: giúp sinh viên đối chiếu lời giải thích với mô phỏng để nắm logic.

### AI-2 – AI Topology Advisor
Đề xuất sơ đồ tô pô phù hợp cho một nhu cầu (mạng văn phòng nhỏ, mạng trường học) từ số lượng PC/nhu cầu chia mạng. Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: gợi ý ban đầu để sinh viên tự vẽ và cải tiến.

### AI-3 – AI Subnet Solver
Nhập yêu cầu chia mạng, AI gợi ý mặt nạ/phân vùng subnet kèm giải thích từng bước nhị phân. Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: kiểm chứng đáp án bài tập tính toán.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity tối thiểu cho môn Mạng máy tính:
`users`, `courses`, `chapters`, `lessons`, `topologies`, `devices`, `protocols`, `exercises`, `submissions`, `aiTutorLogs`.

Gợi ý dữ liệu trong `db.json` (thiết bị và giao thức mẫu):

```json
{
  "devices": [
    { "id": 1, "type": "PC", "name": "PC-01", "ip": "192.168.1.10" },
    { "id": 2, "type": "Switch", "name": "SW-1", "ip": null },
    { "id": 3, "type": "Router", "name": "R1", "ip": "192.168.1.1" },
    { "id": 4, "type": "Hub", "name": "HUB-1", "ip": null }
  ],
  "protocols": [
    { "id": 1, "name": "HTTP", "port": 80, "protocol": "TCP" },
    { "id": 2, "name": "HTTPS", "port": 443, "protocol": "TCP" },
    { "id": 3, "name": "FTP", "port": 21, "protocol": "TCP" },
    { "id": 4, "name": "DNS", "port": 53, "protocol": "UDP/TCP" }
  ],
  "topologies": [
    { "id": 1, "name": "Mạng văn phòng mẫu", "nodes": [1, 2, 3], "links": [[1, 2], [2, 3]] }
  ]
}
```

Dữ liệu nghiệp vụ (bài giảng, bài tập, bài nộp) dùng qua JSON Server / MockAPI / LocalStorage.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng sát môn Mạng máy tính
```text
Tôi là SV môn CSE122 đang làm BTL về Mạng máy tính (sản phẩm NetWiz). Hãy giúp tôi soạn một bài giảng về quá trình chia subnet.
+ Tên giao diện: student-network-calculation.html, người xem là sinh viên năm 2.
+ Yêu cầu trực quan: bảng tính subnet có minh họa bit, thẻ flashcard giao thức, bài đố nhanh.
+ Hãy giải thích cách xác định network/broadcast và số host sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho hệ thống
```text
Tạo file db.json (JSON Server) cho hệ thống NetWiz môn Mạng máy tính, gồm entity: users, courses, chapters, lessons, topologies, devices, protocols, exercises, submissions (aiTutorLogs tùy chọn). Mỗi entity 5–8 bản ghi theo nghiệp vụ mạng máy tính (thiết bị mẫu, giao thức/cổng, bài tập subnet). Có id, timestamps, trường phù hợp. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước thiết kế một sơ đồ tô pô cho mạng văn phòng 8 máy và 1 server. Hỏi tôi cần cụ thể gì (có cần router, chia nhánh không), sau mỗi đoạn hướng dẫn giải thích vì sao chọn thiết bị/liên kết đó, rồi ra một bài tập nhỏ để tôi tự vẽ lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên**. Trách nhiệm chéo: Topology Editor và mô phỏng luồng gói tin (JavaScript/DOM), một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giảng viên**. Trách nhiệm chéo: xây tô pô mẫu, tạo bài tập, chấm điểm, JavaScript/dữ liệu/mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: vẽ tô pô bằng SVG/Canvas, bao phủ trạng thái, nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-netwiz-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:` (topology editor, packet simulation), `fix:` (validate subnet form), `style:` (responsive editor), `refactor:`, `docs:`. Không dùng `update / done / final`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS vẽ tô pô + mô phỏng gói tin, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI.
5. **Thực hiện một thay đổi nhỏ tại chỗ** (đổi style, thêm filter loại thiết bị, thêm field) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** (kéo thêm thiết bị vào tô pô, chạy lại mô phỏng) mà giảng viên hoặc nhóm yêu cầu.

Quy tắc đặt tên:
```text
SV1-01-screen-name.mp4
SV2-01-screen-name.mp4
SV3-01-screen-name.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi. Riêng môn Mạng máy tính cần mockup **Topology Editor canvas** và **Packet Flow Simulation** trước khi viết mã.

## 20. Cấu trúc kho mã nguồn gợi ý
```text
project-root/
├── README.md
├── docs/ (project-proposal, screen-list, team-assignment, ai-usage-report)
├── design/ (figma-link.txt, mockups/)
├── pages/
│   ├── visitor/  student/  teacher/  admin/
├── assets/ (images, icons, data/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, modules/topology.js, modules/packet-sim.js)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON (kèm `db.json`);
- **Sơ đồ tô pô kéo–thả (SVG/Canvas)** và **mô phỏng luồng gói tin** — điểm nhấn riêng của môn Mạng máy tính.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11).
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; hoạt ảnh vi mô; PWA; cá nhân hóa lộ trình.

## 23. Tiêu chí duyệt đề
Đề tài hoàn thành khi giảng viên kiểm tra được chuỗi:
```text
Ngữ cảnh → Vấn đề → Mục tiêu → Vai trò → Màn hình → Bản mô phỏng → Công việc → Nhánh → Commit → PR → Video OBS giảng giải → Làm lại được → Sản phẩm
```

## 24. Đánh giá – Thang điểm gợi ý
- **Tính đầy đủ nghiệp vụ + chất lượng frontend:** 30%
- **Cách truyền đạt kiến thức trực quan (mục 11):** 25%
- **Video OBS giảng giải + khả năng làm lại khi bảo vệ:** 30%
- **Git/GitHub + Trello + AI usage disclosure:** 15%

## 25. Chuẩn đầu ra mong đợi
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; **sáng tạo cách truyền đạt kiến thức Mạng máy tính (tô pô kéo–thả, mô phỏng luồng gói tin, tính subnet)**; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.