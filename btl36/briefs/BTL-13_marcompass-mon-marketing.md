# BTL-13 – MarCompass – Hệ thống hỗ trợ giảng dạy và học tập môn Marketing

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giảng dạy Marketing** (4P, phân khúc thị trường, customer journey, chiến dịch marketing, thương hiệu).

## 2. Tóm tắt sản phẩm

**MarCompass – Hệ thống hỗ trợ giảng dạy và học tập môn Marketing** giúp **giảng viên** dựng học liệu trực quan (bộ lý thuyết 4P, bộ phân tích chiến dịch, đề kiểm tra, gallery case study) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (mô phỏng chiến dịch 4P, xây customer journey, phân tích phân khúc, làm bài tập). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Marketing là môn cần tư duy chiến lược và thực hành nhiều nhưng các khái niệm như 4P, phân khúc thị trường, customer journey khó hình dung nếu chỉ học lý thuyết. Giảng viên khó minh hoạ cách một chiến dịch được phác thảo từ sản phẩm – giá – phân phối – truyền thông rồi chạy theo hành trình khách hàng. Sinh viên thường thuộc khái niệm một chiều, thiếu công cụ mô phỏng và luyện tập xây dựng chiến dịch, thiếu phản hồi kịp thời về chất lượng phân tích.

## 4. Phát biểu vấn đề

- **P1.** Khái niệm 4P và customer journey trừu tượng, khó gắn với chiến dịch thực tế.
- **P2.** Sinh viên chưa thấy được cách từng quyết định (sản phẩm, giá, phân phối, truyền thông) tác động đến hành trình và hiệu quả chiến dịch.
- **P3.** Học liệu marketing (lý thuyết, case study, đề) nằm rải rác, khó cập nhật và khó theo dõi tiến độ.
- **P4.** Giảng viên tốn thời gian soạn đề, chấm bài phân tích chiến dịch và khó phát hiện sớm sinh viên yếu ở khâu nào trong 4P.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Marketing thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách – Sinh viên – Giảng viên – Quản trị viên) đủ để nghiệp vụ chạy từ đầu đến cuối.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (chiến dịch 4P, customer journey, phân khúc, bài tập, nộp bài, chấm điểm).
- **O4.** Sử dụng JavaScript/DOM để mô phỏng chiến dịch 4P, vẽ customer journey, phân khúc thị trường, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu môn học, case study mẫu và một số mô phỏng công khai |
| Sinh viên | Học lý thuyết, chạy mô phỏng chiến dịch 4P & customer journey, làm bài tập, xem điểm và tiến độ |
| Giảng viên | Dựng học liệu, xây bộ phân tích chiến dịch, giao bài, chấm và phản hồi |
| Quản trị viên | Quản lý tài khoản, kho case study, cấu hình, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (sinh viên xây chiến dịch 4P, vẽ customer journey; giảng viên dựng học liệu, chấm bài)
↓
Xem trạng thái / dữ liệu / phản hồi (hiệu quả chiến dịch, điểm bài tập, tiến độ)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (sinh chiến dịch 4P)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên duyệt bộ phân tích, admin duyệt case study)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã

| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Nắm sơ bộ môn học | Xem giới thiệu, case study mẫu | Trang chủ giới thiệu | `index.html` | R | SV1 |
| Khách | Hiểu chiến dịch mẫu | Xem mô phỏng 4P công khai | Bản xem trước mô phỏng | `visitor-sim-preview.html` | R | SV1 |
| Sinh viên | Xây chiến dịch 4P | Phác thảo chiến dịch theo 4P | Studio chiến dịch 4P | `student-campaign-sim.html` | C/R/U | SV1 |
| Sinh viên | Hiểu hành trình khách hàng | Vẽ customer journey trên mô phỏng | Customer journey tương tác | `student-journey.html` | C/R/U | SV1 |
| Sinh viên | Ôn tập kiến thức | Làm bài tập phân tích, nộp bài | Trang làm bài tập | `student-exercise.html` | C/R/U | SV1 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, mức nắm bài | Dashboard sinh viên | `student-dashboard.html` | R | SV1 |
| Giảng viên | Dựng học liệu | Tạo chiến dịch mẫu, case study, 4P | Quản lý chiến dịch & case study | `teacher-campaign-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Giao bài & chấm | Soạn đề phân tích, chấm & phản hồi | Quản lý bài tập & chấm điểm | `teacher-exercise-build.html` | C/R/U/D | SV2 |
| Giảng viên | Đánh giá lớp | Xem báo cáo mức nắm bài | Phân tích lớp | `teacher-analysis.html` | R | SV2 |
| Giảng viên | Tổng quan | Xem thống kê lớp, học liệu | Dashboard giảng viên | `teacher-dashboard.html` | R | SV2 |
| Quản trị viên | Quản lý tài khoản | Tạo/sửa/vô hiệu hóa tài khoản | Quản lý người dùng | `admin-user.html` | C/R/U/D | SV3 |
| Quản trị viên | Chuẩn hóa dữ liệu | Quản lý kho case study, cấu hình | Cấu hình & kho case study | `admin-config.html` | C/R/U/D | SV3 |
| Quản trị viên | Giám sát hệ thống | Xem thống kê, báo cáo | Dashboard quản trị | `admin-dashboard.html` | R | SV3 |

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

Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo phân khúc, đổi danh sách chiến dịch thành card, thêm field ngân sách + validation, xử lý API rỗng, đổi responsive layout, thêm trạng thái "chiến dịch đang chạy").

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang giới thiệu | R | Giới thiệu môn Marketing, chuẩn đầu ra, case study mẫu. |
| 2 | `visitor-sim-preview.html` | Bản xem trước mô phỏng | R | Xem thử một chiến dịch 4P công khai. |
| 3 | `visitor-campaign-gallery.html` | Gallery case study | R | Bộ sưu tập chiến dịch marketing minh họa dạng thẻ. |

### Sinh viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ chương, điểm, mức nắm 4P. |
| 5 | `student-campaign-sim.html` | Studio chiến dịch 4P | C/R/U | Phác thảo chiến dịch theo Sản phẩm – Giá – Phân phối – Truyền thông. |
| 6 | `student-journey.html` | Customer journey tương tác | C/R/U | Vẽ và đọc hành trình khách hàng qua các giai đoạn. |
| 7 | `student-segment.html` | Phân khúc thị trường | R | Khám phá các phân khúc, chân dung khách hàng. |
| 8 | `student-exercise.html` | Trang làm bài tập | C/R/U | Làm bài phân tích chiến dịch, nộp bài, xem đáp án. |

### Giảng viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bộ chiến dịch, điểm. |
| 10 | `teacher-campaign-manage.html` | Quản lý chiến dịch & case study | C/R/U/D | Dựng chiến dịch mẫu, case study, cấu trúc 4P. |
| 11 | `teacher-topic-manage.html` | Quản lý lý thuyết | C/R/U/D | Soạn bài giảng, chương, ví dụ marketing. |
| 12 | `teacher-exercise-build.html` | Soạn & chấm bài tập | C/R/U/D | Tạo đề phân tích chiến dịch, chấm điểm, phản hồi. |
| 13 | `teacher-analysis.html` | Phân tích lớp | R | Báo cáo mức nắm bài, khâu 4P hay yếu. |

### Quản trị viên → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Thống kê người dùng, hoạt động hệ thống. |
| 15 | `admin-user.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản sinh viên, giảng viên. |
| 16 | `admin-config.html` | Cấu hình & kho case study | C/R/U/D | Quản lý kho case study, phân loại chiến dịch, cấu hình. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (cập nhật 4P, vẽ customer journey, lọc phân khúc); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD

`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý

| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Sinh viên, giảng viên, quản trị viên. |
| `courses` | ✓ | ✓ | ✓ | ✓/Archive | Khoá học/môn Marketing. |
| `topics` | ✓ | ✓ | ✓ | ✓/Archive | Chương, chủ đề lý thuyết. |
| `campaigns` | ✓ | ✓ | ✓ | ✓/Archive | Chiến dịch marketing 4P. |
| `mktMixes` | ✓ | ✓ | ✓ | ✓/Archive | Cấu trúc 4P (Product, Price, Place, Promotion). |
| `journeys` | ✓ | ✓ | ✓ | ✓/Archive | Customer journey qua các giai đoạn. |
| `segments` | ✓ | ✓ | ✓ | ✓/Archive | Phân khúc thị trường, chân dung khách hàng. |
| `exercises` / `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập, bài nộp, điểm & phản hồi. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

### Cách truyền đạt 1 – Mô phỏng chiến dịch 4P từng bước (Student Campaign Sim)

Trên `student-campaign-sim.html`, sinh viên điền từng nhánh của 4P (Sản phẩm, Giá, Phân phối, Truyền thông) theo bước có điều khiển tiến/lùi, kèm gợi ý và giải thích vai trò mỗi nhánh, hệ thống tổng hợp thành bản kế hoạch chiến dịch. **Giúp người học hiểu logic ra quyết định marketing thay vì học thuộc khái niệm.**

### Cách truyền đạt 2 – Customer journey tương tác (Student Journey)

Trên `student-journey.html`, vẽ hành trình khách hàng dạng lưu đồ/trục thời gian tương tác: Nhận biết → Cân nhắc → Mua → Dùng → Trung thành, mỗi giai đoạn hiển thị điểm chạm, cảm xúc, nhiệm vụ marketing. **Giúp người học nhìn thấy chiến dịch chạm khách hàng ở đâu.**

### Cách truyền đạt 3 – Gallery case study dạng thẻ lật (Visitor Campaign Gallery)

Trên `visitor-campaign-gallery.html`, mỗi case study là thẻ lật flashcard: mặt trước tên chiến dịch/thương hiệu, mặt sau phân tích 4P thực tế, giúp ôn và đối chiếu kiến thức với ví dụ. **Giúp người học liên hệ lý thuyết với thực tiễn, tự kiểm tra.**

### Cách truyền đạt 4 – Sơ đồ phân khúc thị trường tương tác (Student Segment)

Trên `student-segment.html`, vẽ sơ đồ/SVG phân khúc thị trường với tooltip chân dung khách hàng, giúp thấy cách chia thị trường và chọn phân khúc mục tiêu. **Giúp người học hình dung việc phân đoạn và định vị.**

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – Trợ lý sinh chiến dịch 4P
Nhập mô tả sản phẩm/phân khúc mục tiêu, AI đề xuất bộ 4P kèm giải thích từng lựa chọn. Dùng JSON giả lập các chiến dịch mẫu / JavaScript theo quy tắc gợi ý, hoặc API LLM tùy chọn. Kết quả phải hiển thị kế hoạch 4P và lý do để sinh viên hiểu và chỉnh sửa.

### AI-2 – Phân tích điểm chạm trong customer journey
Nhập một hành trình mẫu, AI gợi ý các điểm chạm quan trọng và nhiệm vụ marketing cho mỗi giai đoạn. Mô phỏng bằng JavaScript theo quy tắc gắn kịch bản, phản hồi định sẵn hoặc LLM.

### AI-3 – Gợi ý lộ trình ôn tập theo điểm
Nhận diện các chủ đề sinh viên hay sai (4P, journey, phân khúc) để gợi ý lộ trình ôn. Mô phỏng bằng JSON giả lập dựa trên submissions và JavaScript thống kê theo chương.

### Nguyên tắc trải nghiệm AI (nếu có)

```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `courses`, `topics`, `campaigns`, `mktMixes`, `journeys`, `segments`, `exercises`, `submissions`. Triển khai bằng file JSON cục bộ, LocalStorage/SessionStorage, JSON Server, MockAPI hoặc public API; không bắt buộc máy chủ thật.

Dưới đây là gợi ý `db.json` (JSON Server):

```json
{
  "users": [
    { "id": 1, "name": "SV Mẫu", "role": "student", "email": "sv@tlus.edu.vn" },
    { "id": 2, "name": "GV Marketing", "role": "teacher", "email": "gv@tlus.edu.vn" }
  ],
  "campaigns": [
    { "id": 1, "name": "Chiến dịch cà phê sạch", "segment": "Sinh viên", "status": "running" }
  ],
  "mktMixes": [
    { "id": 1, "campaignId": 1, "product": "Cà phê sạch đóng gói", "price": "50.000đ", "place": "Kênh online + cửa hàng", "promotion": "Khuyến mãi sinh viên" }
  ],
  "journeys": [
    { "id": 1, "campaignId": 1, "stage": "Nhận biết", "touchpoint": "Mạng xã hội", "emotion": "Tò mò" }
  ]
}
```

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả

1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng chiến dịch 4P

```text
Tôi là SV môn CSE122 đang làm BTL về môn Marketing (sản phẩm MarCompass). Hãy giúp tôi dựng mô hình mô phỏng chiến dịch 4P:
+ Giao diện: nhập bộ Sản phẩm – Giá – Phân phối – Truyền thông và hiển thị kế hoạch chiến dịch.
+ Vai trò người xem: sinh viên học marketing lần đầu.
+ Yêu cầu trực quan: từng bước, thẻ giải thích vai trò mỗi nhánh 4P.
+ Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json

```text
Tạo file db.json (JSON Server) cho hệ thống MarCompass, gồm các entity users, courses, topics, campaigns, mktMixes, journeys, segments, exercises, submissions, mỗi entity 5–8 bản ghi mẫu theo môn Marketing, có id, timestamps, và trường phù hợp nghiệp vụ (4P, giai đoạn journey). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)

```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước xây dựng một chiến dịch marketing 4P cho một sản phẩm, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI

- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (trang giới thiệu, studio chiến dịch 4P, customer journey, phân khúc, làm bài). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.

### SV2
Phụ trách: **Giảng viên** (quản lý chiến dịch & case study, soạn bài, chấm điểm, phân tích). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.

### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:

- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub

- Repo gợi ý: `cse122-marcompass-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion

Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS mô phỏng chiến dịch 4P, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:

1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI.
5. **Thực hiện một thay đổi nhỏ tại chỗ** (đổi style, thêm filter, thêm field...) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** mà giảng viên hoặc nhóm yêu cầu (minh chứng "hiểu và làm lại được").

Quy tắc đặt tên:

```text
SV1-01-screen-name.mp4
SV2-01-screen-name.mp4
SV3-01-screen-name.mp4
```

## 19. Figma / Canva

Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi.

## 20. Cấu trúc kho mã nguồn gợi ý

```text
project-root/
├── README.md
├── docs/ (project-proposal, screen-list, team-assignment, ai-usage-report)
├── design/ (figma-link.txt, mockups/)
├── pages/
├── assets/ (images, icons, data/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)

Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)

### BẮT BUỘC PHẢI CÓ

- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): mô phỏng chiến dịch 4P, customer journey tương tác, gallery case study / phân khúc.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.

### NÊN CÓ

- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.

### CÓ THÌ TỐT (không bắt buộc)

- Ý tưởng AI nâng cao (mục 12); LLM API thật; hoạt ảnh vi mô; PWA; cá nhân hóa.

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

[Thang điểm có thể điều chỉnh theo từng kỳ]

## 25. Chuẩn đầu ra mong đợi

Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (mô phỏng chiến dịch 4P, customer journey); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.