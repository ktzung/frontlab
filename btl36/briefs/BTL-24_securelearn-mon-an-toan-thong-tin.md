# BTL-24 – SecureLearn – Hệ thống hỗ trợ giảng dạy và học tập môn An toàn thông tin

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Khoa học Máy tính – Giảng dạy và học tập môn An toàn thông tin** (mã hóa, xác thực, tấn công mạng/phòng thủ, nhận thức bảo mật).

## 2. Tóm tắt sản phẩm

**SecureLearn – Hệ thống hỗ trợ giảng dạy và học tập môn An toàn thông tin** giúp **giảng viên** xây dựng học liệu trực quan (bài giảng bảo mật, bộ bài tập tình huống, mô phỏng tấn công/phòng thủ) và giúp **sinh viên** nâng cao nhận thức qua **mô phỏng các kiểu tấn công mạng** (phishing, brute-force, SQL injection, XSS), **bài tập nhận thức bảo mật**, và **cây mật khẩu/ma trận xác thực**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

An toàn thông tin là môn trang bị cho sinh viên kỹ năng bảo vệ dữ liệu, nhận diện các cuộc tấn công và hiểu mật mã, xác thực. Kiến thức này thiên về tình huống và "ẩn" — sinh viên khó hình dung một cuộc tấn công chiếm quyền hay một cuộc lừa đảo phishing diễn ra ra sao nếu chỉ đọc lý thuyết. Giảng viên cần mô phỏng trực quan tấn công/phòng thủ và các bài nhận thức để sinh viên biết cách ứng phó trong thực tế thay vì chỉ học thuộc khái niệm.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó **hình dung diễn biến một cuộc tấn công** (SQL injection, brute-force, phishing) mà không thấy trực quan được.
- **P2.** Khả năng **nhận thức bảo mật** (email lừa đảo, mật khẩu yếu, link độc) còn hạn chế vì thiếu bài tập tình huống sống động.
- **P3.** Kiến thức **mã hóa và xác thực** trừu tượng, sinh viên dễ nhầm giữa mã hóa đối xứng/bất đối xứng, chữ ký số, vai trò của hash.
- **P4.** Giảng viên khó giao và chấm các bài tập mô tả tấn công/cách phòng thủ một cách nhất quán và hấp dẫn.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học An toàn thông tin thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ phù hợp: chương, bài giảng, bài tập, tình huống, nộp bài, chấm điểm, tiến độ.
- **O4.** Dùng JavaScript/DOM để mô phỏng **tấn công/phòng thủ theo từng bước** và bài tập **nhận thức bảo mật** tương tác.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (kèm `db.json`).
- **O6.** Thiết kế 3 ý tưởng AI mô phỏng ở Frontend (đánh giá độ mạnh mật khẩu, mô tả tấn công, gợi ý biện pháp phòng thủ) — **tùy chọn, không bắt buộc**.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa, xem mô phỏng tấn công mẫu, góp ý chủ đề cần bổ sung |
| Sinh viên | Học bài giảng bảo mật, xem mô phỏng tấn công/phòng thủ, làm bài nhận thức & bài tập, xem điểm & tiến độ, hỏi AI |
| Giảng viên | Dựng bài giảng và học liệu, xây tình huống mô phỏng, tạo bài tập, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chương trình học, bộ tình huống mẫu, cấu hình hệ thống, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (xem mô phỏng tấn công, làm bài nhận thức, dựng học liệu)
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
| Khách | Giới thiệu & xem thử | Xem khóa học, mô phỏng tấn công mẫu, góp ý | Trang chủ | `index.html` | R | SV1 |
| Sinh viên | Hiểu tấn công/phòng thủ | Xem mô phỏng từng bước, chọn dữ liệu đầu vào | Attack Simulation | `student-attack-sim.html` | C/R | SV1 |
| Sinh viên | Tăng nhận thức bảo mật | Nhận diện email/liên kết lừa đảo | Security Awareness | `student-security-awareness.html` | C/R/U — Nộp | SV1 |
| Sinh viên | Hiểu mã hóa/xác thực | Thử mã hóa, xem ma trận xác thực | Crypto & Auth Lab | `student-crypto-auth.html` | C/R/U — Lưu | SV2 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, mức hoàn thành | Bảng điều khiển SV | `student-dashboard.html` | R | SV2 |
| Giảng viên | Dựng học liệu | Tạo bài giảng, tình huống mô phỏng, bài tập | Xây bài tập & tình huống | `teacher-exercise-build.html` | C/R/U/D — Vô hiệu hóa | SV2 |
| Giảng viên | Chấm & phản hồi | Duyệt bài nộp nhận thức, chấm điểm | Chấm bài | `teacher-grading.html` | R/U — Đang chờ/Đạt/Chưa đạt | SV2 |
| Giảng viên | Phân tích lớp | Xem báo cáo năng lực bảo mật | Bảng điều khiển GV | `teacher-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý & cấu hình | Quản lý tài khoản, bộ tình huống, quyền | Quản trị hệ thống | `admin-dashboard.html` | R | SV3 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter loại tấn công, đổi table thành card bài tập, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình cơ bản
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang chủ | R | Giới thiệu khóa An toàn thông tin, các module tấn công/nhận thức/mã hóa |
| 2 | `visitor-attack-preview.html` | Xem mô phỏng mẫu | R | Xem minh họa một cuộc tấn công phishing/brute-force |
| 3 | `visitor-topic-feedback.html` | Góp ý chủ đề | C/R | Đề xuất chủ đề bảo mật cần bổ sung |

### Học sinh / Sinh viên → 5 màn hình, sát môn An toàn thông tin
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Tiến độ, điểm các module tấn công / nhận thức / mã hóa |
| 5 | `student-attack-sim.html` | Attack Simulation | C/R | Mô phỏng tấn công/phòng thủ theo từng bước, điều khiển tiến/lùi |
| 6 | `student-security-awareness.html` | Security Awareness | C/R/U | Bài nhận thức: nhận diện email/liên kết lừa đảo, chọn phương án đúng |
| 7 | `student-crypto-auth.html` | Crypto & Auth Lab | C/R/U | Thử mã hóa đơn giản, xem ma trận xác thực/độ mạnh mật khẩu |
| 8 | `student-defense-guide.html` | Phòng thủ & checklist | R | Bộ checklist phòng thủ, quy trình ứng phó sự cố |

### Giáo viên / Giảng viên → 5 màn hình, sát môn An toàn thông tin
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển GV | R | Tổng quan lớp, chương, mức hoàn thành bài nhận thức |
| 10 | `teacher-attack-scenario-build.html` | Xây tình huống mô phỏng | C/R/U | Dựng kịch bản tấn công/phòng thủ cho học liệu |
| 11 | `teacher-exercise-build.html` | Xây bài tập | C/R/U/D | Tạo bài tập nhận thức bảo mật kèm đáp án giải thích |
| 12 | `teacher-grading.html` | Chấm bài | R/U | Xem bài nộp nhận thức, chấm điểm, nhận xét |
| 13 | `teacher-class-analysis.html` | Phân tích lớp | R | Báo cáo năng lực bảo mật theo chương/tình huống |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển Admin | R | Quản trị hệ thống SecureLearn |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản SV/GV, phân quyền |
| 16 | `admin-scenario-config.html` | Cấu hình tình huống | C/R/U | Cấu hình bộ tình huống mẫu, chương trình học, quyền truy cập |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát. Riêng môn An toàn thông tin, giao diện điểm nhấn là **mô phỏng tấn công/phòng thủ từng bước** và **bài tập nhận thức bảo mật** tương tác.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản SV/GV/Admin |
| `courses` | ✓ | ✓ | ✓ | ✓/Đóng | Khóa học An toàn thông tin |
| `chapters` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chương: mật mã, xác thực, tấn công, nhận thức |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng trực quan từng chương |
| `attackScenarios` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Kịch bản tấn công/phòng thủ từng bước |
| `awarenessQuestions` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Câu hỏi nhận thức bảo mật + đáp án |
| `cryptoLabs` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài thực hành mã hóa/xác thực |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp, trạng thái Đang chờ/Đạt/Chưa đạt |
| `passwordPolicies` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chính sách/độ mạnh mật khẩu mẫu |
| `aiTutorLogs` | ✓ | ✓ | ✓ | ✓/Xóa | Nhật ký hỏi AI (nếu làm AI) |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Tối thiểu 3 cách truyền đạt gắn với môn An toàn thông tin:

- **Mô phỏng tấn công/phòng thủ từng bước.** Màn hình `student-attack-sim.html`. Một cuộc tấn công (SQL injection, brute-force, phishing) được diễn hoạt theo từng bước với mũi tên, điều khiển tiến/lùi, đồng thời hiện bước phòng thủ tương ứng — giúp sinh viên hiểu "kẻ tấn công làm gì, ta phản ứng thế nào".
- **Bài nhận thức bảo mật dạng tình huống (trắc nghiệm + giải thích).** Màn hình `student-security-awareness.html`. Đưa email/liên kết giả lập, sinh viên quyết định "an toàn / nghi ngờ / nguy hiểm", hệ thống giải thích vì sao — hình thành phản xạ nhận diện lừa đảo trong đời thực.
- **Phòng thí nghiệm mã hóa & xác thực tương tác.** Màn hình `student-crypto-auth.html`. Nhập văn bản để xem kết quả mã hóa theo thuật toán giả lập, hoặc đo độ mạnh mật khẩu bằng thanh hiển thị trực quan — hiểu khái niệm mã hóa/hash/xác thực qua thao tác thật.
- **Thẻ flashcard + đố nhanh thuật ngữ bảo mật.** Màn hình `student-defense-guide.html`. Flashcard các khái niệm (CIA, mã hóa đối xứng/bất đối xứng, chữ ký số...) kết hợp minigame giúp ôn thi hiệu quả.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Password Strength & Guidance
Nhập mật khẩu, AI đánh giá độ mạnh theo nhịp điệu và đưa gợi ý cải thiện (độ dài, ký tự đặc biệt, tránh từ phổ biến) kèm giải thích. Cách mô phỏng: JSON giả lập thang điểm, JS theo quy tắc; LLM API tùy chọn. Giá trị: hình thành thói quen mật khẩu an toàn.

### AI-2 – AI Attack Explainer
Mô tả một tình huống (VD: "email nhận việc yêu cầu nhập mật khẩu"), AI phân tích dấu hiệu lừa đảo và nêu cách phòng thủ. Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: hỗ trợ bài nhận thức bảo mật.

### AI-3 – AI Defense Recommender
Khi xem mô phỏng tấn công, AI gợi ý bộ biện pháp phòng thủ phù hợp theo loại tấn công (patch, xác thực 2 lớp, firewall, rate-limit). Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: rèn tư duy phòng thủ toàn diện.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity tối thiểu cho môn An toàn thông tin:
`users`, `courses`, `chapters`, `lessons`, `attackScenarios`, `awarenessQuestions`, `cryptoLabs`, `submissions`, `passwordPolicies`, `aiTutorLogs`.

Gợi ý dữ liệu trong `db.json` (tình huống mẫu):

```json
{
  "attackScenarios": [
    {
      "id": 1,
      "type": "SQL Injection",
      "title": "Chiếm quyền form đăng nhập",
      "steps": [
        "Kẻ tấn công nhập ' OR '1'='1 trong ô username",
        "Truy vấn ghép chuỗi bị sai và trả về đúng tài khoản",
        "Hệ thống cấp phiên đăng nhập cho kẻ tấn công",
        "Phòng thủ: dùng Prepared Statement / tham số hóa"
      ]
    },
    { "id": 2, "type": "Phishing", "title": "Email giả mạo ngân hàng", "steps": [] }
  ],
  "awarenessQuestions": [
    {
      "id": 1,
      "scenario": "Email thông báo 'trúng thưởng' yêu cầu nhập mật khẩu",
      "answer": "Nguy hiểm",
      "explanation": "Đây là dấu hiệu lừa đảo: tổ chức thật không bao giờ xin mật khẩu qua email."
    }
  ],
  "passwordPolicies": [
    { "id": 1, "minLength": 12, "requireSpecial": true }
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

### Mẫu prompt 1 – Dựng học liệu/bài giảng sát môn An toàn thông tin
```text
Tôi là SV môn CSE122 đang làm BTL về An toàn thông tin (sản phẩm SecureLearn). Hãy giúp tôi soạn một bài giảng về mã hóa đối xứng vs bất đối xứng.
+ Tên giao diện: student-crypto-auth.html, người xem là sinh viên năm 2.
+ Yêu cầu trực quan: minh họa mã hóa/giải mã, thẻ flashcard thuật ngữ, bài đố nhanh.
+ Hãy giải thích khác biệt then chốt giữa hai loại sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho hệ thống
```text
Tạo file db.json (JSON Server) cho hệ thống SecureLearn môn An toàn thông tin, gồm entity: users, courses, chapters, lessons, attackScenarios, awarenessQuestions, cryptoLabs, submissions, passwordPolicies (aiTutorLogs tùy chọn). Mỗi entity 5–8 bản ghi theo nghiệp vụ an toàn thông tin (kịch bản tấn công/phòng thủ, câu hỏi nhận thức). Có id, timestamps, trường phù hợp. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng kịch bản mô phỏng một cuộc tấn công brute-force vào form đăng nhập. Hỏi tôi cần cụ thể gì (cơ chế khóa tài khoản, rate-limit), sau mỗi đoạn hướng dẫn giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự dựng lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên**. Trách nhiệm chéo: mô phỏng tấn công/phòng thủ và bài nhận thức (JavaScript/DOM), một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giảng viên**. Trách nhiệm chéo: xây tình huống mô phỏng, tạo bài tập, chấm điểm, JavaScript/dữ liệu/mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: thiết kế bộ nhận thức bảo mật, bao phủ trạng thái, nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-securelearn-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:` (attack simulation, awareness quiz), `fix:` (validate awareness form), `style:` (responsive simulator), `refactor:`, `docs:`. Không dùng `update / done / final`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS mô phỏng tấn công + bài nhận thức, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI.
5. **Thực hiện một thay đổi nhỏ tại chỗ** (đổi style, thêm filter loại tấn công, thêm field) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** (chạy lại mô phỏng, đổi câu hỏi nhận thức) mà giảng viên hoặc nhóm yêu cầu.

Quy tắc đặt tên:
```text
SV1-01-screen-name.mp4
SV2-01-screen-name.mp4
SV3-01-screen-name.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi. Riêng môn An toàn thông tin cần mockup **Attack Simulation canvas** và **Security Awareness quiz** trước khi viết mã.

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
├── js/ (main.js, api.js, modules/attack-sim.js, modules/awareness.js)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON (kèm `db.json`);
- **Mô phỏng tấn công/phòng thủ từng bước** và **bài tập nhận thức bảo mật** — điểm nhấn riêng của môn An toàn thông tin.
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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; **sáng tạo cách truyền đạt kiến thức An toàn thông tin (mô phỏng tấn công/phòng thủ, bài nhận thức bảo mật, lab mã hóa)**; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.