# BTL-20 – TinHocPortal – Hệ thống hỗ trợ giảng dạy và học tập môn Tin học đại cương

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Tin học đại cương (tin văn phòng Word/Excel/PowerPoint, hệ điều hành, mạng, an toàn thông tin, tư duy thuật toán, ứng dụng phổ thông).**

## 2. Tóm tắt sản phẩm

**TinHocPortal – Hệ thống hỗ trợ giảng dạy và học tập môn Tin học đại cương** giúp **giảng viên** dựng bài giảng, bài thực hành phần mềm, đề kiểm tra và hướng dẫn thao tác, đồng thời giúp **sinh viên** tiếp thu dễ hiểu qua **bài thực hành phần mềm mô phỏng thao tác từng bước, hướng dẫn trực quan, trắc nghiệm và bài tập nộp**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Tin học đại cương là môn bổ trợ bắt buộc cho hầu hết sinh viên các ngành, nội dung gồm tin văn phòng, hệ điều hành, mạng, an toàn thông tin và tư duy thuật toán. Sinh viên đến từ nhiều nền tảng khác nhau nên trình độ không đồng đều, khó bám sát một tốc độ chung. Giảng viên khó hỗ trợ từng thao tác phần mềm, còn tài liệu thực hành phân bố rời rạc, không có kênh tự luyện và đánh giá tiến độ. Vì vậy cần một hệ thống mô phỏng thao tác phần mềm theo từng bước để người học tự luyện mọi nơi.

## 4. Phát biểu vấn đề

- **P1.** Trình độ tin học của sinh viên không đồng đều, gây khó khăn khi phải học theo một tốc độ chung.
- **P2.** Sinh viên khó nhớ thứ tự thao tác trong các phần mềm văn phòng nếu chỉ xem slide tĩnh.
- **P3.** Giảng viên khó thiết kế bài thực hành phần mềm và khó đánh giá mức thao tác của từng sinh viên.
- **P4.** Sinh viên thiếu kênh tra cứu thao tác và tự kiểm tra năng lực theo từng chủ đề.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Tin học đại cương thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò: Khách, Sinh viên, Giảng viên, Quản trị viên.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: chương, bài giảng, bài thực hành, đề kiểm tra, nộp bài.
- **O4.** Dùng JavaScript/DOM cho mô phỏng thao tác phần mềm, gợi ý menu, tìm kiếm, lọc, kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (entity + `db.json`).
- **O6.** Thiết kế ít nhất **3 cách truyền đạt kiến thức trực quan** (mô phỏng thao tác từng bước, hoạt ảnh giao diện phần mềm, trắc nghiệm/đố nhanh).
- **O7.** Tổ chức làm việc nhóm bằng Trello và Git/GitHub theo nhánh + yêu cầu hợp nhất, kèm video OBS.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu khóa, bài thực hành phần mềm mẫu, góp ý chủ đề |
| Sinh viên | Học lý thuyết, làm bài thực hành phần mềm mô phỏng, trắc nghiệm, nộp bài, theo dõi tiến độ |
| Giảng viên | Xây dựng bài giảng/bài thực hành, soạn đề, chấm bài, quản lý lớp, theo dõi tiến độ |
| Quản trị viên | Quản lý tài khoản, chương trình học, danh mục phần mềm, cấu hình hệ thống |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò
↓
Xem trạng thái / dữ liệu / phản hồi
↓
(Tùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung
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
| Khách | Giới thiệu chương trình | Xem tổng quan chương trình Tin học đại cương | Tổng quan khóa | `visitor-course-overview.html` | R | SV1 |
| Khách | Trải nghiệm bài thực hành mẫu | Xem một bài thực hành phần mềm mẫu | Bài thực hành mẫu | `visitor-practice-preview.html` | R | SV1 |
| Sinh viên | Học lý thuyết | Học bài giảng theo chương | Xem bài giảng | `student-lesson-view.html` | R, Đang tải/Rỗng | SV1 |
| Sinh viên | Luyện thao tác phần mềm | Làm bài thực hành theo từng bước | Thực hành phần mềm | `student-practice-do.html` | C/R/U, Thành công/Lỗi | SV1 |
| Sinh viên | Tự kiểm tra năng lực | Làm trắc nghiệm theo chủ đề | Trắc nghiệm | `student-quiz.html` | C/R, Hoàn thành | SV2 |
| Sinh viên | Nộp bài và xem kết quả | Nộp bài thực hành, xem nhận xét | Kết quả nộp bài | `student-submission-result.html` | R, Đang chờ/Bị từ chối | SV2 |
| Giảng viên | Quản lý bài thực hành | Thêm/sửa bài thực hành phần mềm | Quản lý thực hành | `teacher-practice-manage.html` | C/R/U/D(Lưu trữ) | SV3 |
| Giảng viên | Soạn bài giảng | Tạo bài giảng, hướng dẫn thao tác | Soạn bài giảng | `teacher-lesson-manage.html` | C/R/U, Đang chờ | SV3 |
| Giảng viên | Chấm bài nộp | Chấm bài thực hành, phản hồi | Chấm bài | `teacher-grading.html` | C/R/U, Bị từ chối | SV3 |
| Giảng viên | Đánh giá lớp | Xem báo cáo năng lực lớp | Phân tích năng lực | `teacher-analysis.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Thêm/cấm/sửa tài khoản, phân quyền | Quản lý người dùng | `admin-user-management.html` | C/R/U/D(Vô hiệu hóa) | SV2 |
| Quản trị viên | Cấu hình chương trình | Cấu hình chương trình, danh mục phần mềm | Cấu hình khóa học | `admin-curriculum-config.html` | C/R/U, Đã hủy/Lưu trữ | SV2 |

### Bao phủ trạng thái bắt buộc
Đang tải; Rỗng; Thành công; Lỗi; Vô hiệu hóa; Đang chờ; Bị từ chối; Hoàn thành; Đã hủy/Lưu trữ khi phù hợp.

### Màn hình dùng chung
`index.html`, `login.html`, `register.html`, `forgot-password.html`, `profile.html`, `settings.html`, `notifications.html`, `403.html`, `404.html` (xét trong bảng kiểm kê).

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

### (Tùy chọn) Trải nghiệm khi AI thất bại
Nếu nhóm làm AI, mỗi AI feature cần có trạng thái không đủ dữ liệu / không chắc chắn / lỗi, kèm thao tác Chỉnh sửa / Thử lại / Bỏ qua / Báo cáo / Dùng thủ công.

### Bảo vệ / Chỉnh sửa ngẫu nhiên
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo phần mềm, đổi table thành card bài thực hành, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-course-overview.html` | Tổng quan khóa | R | Xem tổng quan chương trình Tin học đại cương. |
| 2 | `visitor-practice-preview.html` | Bài thực hành mẫu | R | Xem một bài thực hành phần mềm mẫu. |
| 3 | `visitor-topic-feedback.html` | Góp ý chủ đề | C/R | Góp ý chủ đề cần bổ sung học liệu. |

### Học sinh / Sinh viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Theo dõi tiến độ và điểm theo chương. |
| 5 | `student-lesson-view.html` | Xem bài giảng | R | Học lý thuyết theo chương. |
| 6 | `student-practice-do.html` | Thực hành phần mềm | C/R/U | Làm bài thực hành theo từng bước, mô phỏng menu. |
| 7 | `student-quiz.html` | Trắc nghiệm | C/R | Làm trắc nghiệm theo chủ đề kèm giải thích. |
| 8 | `student-submission-result.html` | Kết quả nộp bài | R | Xem kết quả nộp bài và nhận xét. |

### Giáo viên / Giảng viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển | R | Tổng quan lớp, chương, bài thực hành. |
| 10 | `teacher-practice-manage.html` | Quản lý thực hành | C/R/U/D | Xây dựng bài thực hành phần mềm và bước thao tác. |
| 11 | `teacher-lesson-manage.html` | Soạn bài giảng | C/R/U | Soạn bài giảng, hướng dẫn thao tác. |
| 12 | `teacher-grading.html` | Chấm bài | C/R/U | Chấm bài thực hành, phản hồi. |
| 13 | `teacher-analysis.html` | Phân tích năng lực | R | Xem báo cáo năng lực lớp theo chủ đề. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển | R | Quản trị hệ thống TinHocPortal. |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản, phân quyền, vô hiệu hóa. |
| 16 | `admin-curriculum-config.html` | Cấu hình khóa học | C/R/U | Cấu hình chương trình, danh mục phần mềm. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card bài thực hành, list chương, mock-up giao diện phần mềm, form hướng dẫn thao tác, dashboard); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (tick bước thực hành, mô phỏng menu phần mềm, kiểm tra kết quả); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản theo vai trò (mock data). |
| `chapters` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chương lý thuyết của môn. |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng lý thuyết. |
| `practices` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài thực hành phần mềm + danh sách bước. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Kết quả nộp bài thực hành. |
| `quizzes` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Câu hỏi trắc nghiệm theo chủ đề. |
| `softwareTitles` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Danh mục phần mềm (Word/Excel/PowerPoint…). |
| `quizAttempts` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Lần làm trắc nghiệm và điểm. |

> Đi kèm `db.json` gợi ý: các entity `users`, `chapters`, `lessons`, `practices`, `submissions`, `quizzes`, `softwareTitles`, `quizAttempts`, mỗi entity 5–8 bản ghi mẫu theo môn Tin học đại cương (có `id`, `createdAt`, `updatedAt`).

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Tin học đại cương. Liệt kê tối thiểu **3 cách truyền đạt**, mỗi cách gắn với một màn hình.

- **Cách 1 – Mô phỏng thao tác phần mềm từng bước** (màn hình `student-practice-do.html`). Dựng mock-up giao diện Word/Excel/PowerPoint bằng HTML/CSS, hướng dẫn bấm menu từng bước, tick hoàn thành và kiểm tra kết quả. Vì sao giúp hiểu hơn: sinh viên "tay làm mắt thấy" đúng vị trí nút bấm thay vì nhớ chữ, phù hợp người học đa trình độ.

- **Cách 2 – Hoạt ảnh hướng dẫn menu/tổ hợp phím** (màn hình `student-lesson-view.html`). Mỗi thao tác có hoạt ảnh vòng phóng to vùng menu, hiển thị phím tắt tương ứng. Vì sao giúp hiểu hơn: rút ngắn thời gian tìm nút, tăng tốc độ làm bài thực hành.

- **Cách 3 – Trắc nghiệm nhanh kèm giải thích** (màn hình `student-quiz.html`). Câu hỏi theo chương (thuật ngữ, phím tắt, quy trình), mỗi đáp án sai hiện giải thích. Vì sao giúp hiểu hơn: vừa kiểm tra vừa củng cố ngay những lỗi thường gặp của người mới.

- **Cách 4 – Sơ đồ tư duy chương trình học** (màn hình `student-dashboard.html`). Trực quan hóa cấu trúc chương theo nhánh (tin văn phòng, hệ điều hành, mạng, an toàn, thuật toán). Vì sao giúp hiểu hơn: định vị nhanh chủ đề đã và chưa học, theo dõi tiến độ.

Với mỗi cách, nhóm ghi rõ **màn hình áp dụng** và **lý do giúp người học hiểu hơn** như trên.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc** và **không chấm điểm chặn đề tài** chỉ vì có/không có AI. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ (Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát).

### AI-1 – AI Software Step Advisor (tùy chọn)
Sinh viên bối rối ở bước nào gõ câu hỏi "tôi muốn chèn bảng biểu"; AI gợi ý chuỗi thao tác đúng và giải thích chọn menu nào. Cách mô phỏng: JSON giả lập cây thao tác, JavaScript theo quy tắc, phản hồi định sẵn; API LLM tùy chọn.

### AI-2 – AI Practice Summarizer (tùy chọn)
Tóm tắt nội dung và yêu cầu của bài thực hành thành các nhiệm vụ ngắn dễ làm theo. Cách mô phỏng: JSON giả lập, JavaScript theo quy tắc rút gọn bước, phản hồi định sẵn; API LLM tùy chọn.

### AI-3 – AI Weakness Detector (tùy chọn)
Phân tích kết quả trắc nghiệm/thực hành để nhận diện chủ đề còn yếu (Word/Excel/an toàn/thuật toán) và gợi ý bài luyện tập. Cách mô phỏng: JSON giả lập, JavaScript theo quy tắc phân tích điểm, phản hồi định sẵn; API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity được triển khai qua file JSON cục bộ; LocalStorage/SessionStorage; JSON Server; MockAPI; public API; LLM API tùy chọn. Không bắt buộc backend thật.

Entity tối thiểu:
```text
users
chapters
lessons
practices
submissions
quizzes
softwareTitles
quizAttempts
```

`db.json` gợi ý (đặt tại root) chứa 8 entity trên, mỗi entity 5–8 bản ghi mẫu theo môn Tin học đại cương, ví dụ `practices`: `{ id, chapterId, software: "Excel", title, steps [{text, action}], expectedResult, createdAt, updatedAt }`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng (thực hành phần mềm)
```text
Tôi là SV môn CSE122 đang làm BTL về Tin học đại cương (TinHocPortal). Hãy giúp tôi dựng nội dung cho trang "Thực hành phần mềm".
+ Phần mềm: Microsoft Word, bài "định dạng văn bản cơ bản", 6 bước thao tác.
+ Vai trò người xem: sinh viên các ngành mới học tin học.
+ Yêu cầu trực quan: mock-up giao diện Word bằng HTML/CSS, đánh dấu vị trí menu từng bước, trắc nghiệm nhanh kèm giải thích.
+ Hãy giải thích logic HTML/JS của mock-up và tick bước để tôi hiểu và tự làm lại.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống TinHocPortal (môn Tin học đại cương), gồm các entity: users, chapters, lessons, practices, submissions, quizzes, softwareTitles, quizAttempts. Mỗi entity 5–8 bản ghi mẫu theo chương (tin văn phòng, hệ điều hành, mạng, an toàn, thuật toán), có id, timestamps và trường nghiệp vụ (steps cho thực hành, software). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng "màn hình thực hành Excel mô phỏng menu": hỏi tôi cần gì, sau mỗi đoạn code giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại (ví dụ thêm một bước thao tác "chèn biểu đồ").
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (bài giảng, thực hành phần mềm, trắc nghiệm). Trách nhiệm chéo: **một phần giao diện dùng chung, mô phỏng menu phần mềm, responsive**.

### SV2
Phụ trách: **Quản trị viên** (tài khoản, cấu hình chương trình) + một phần màn hình sinh viên (nộp bài, kết quả). Trách nhiệm chéo: **JavaScript / dữ liệu / mock API; review PR**.

### SV3
Phụ trách: **Giảng viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: **nhất quán toàn dự án, phát hành**.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-tinhocportal-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.
- Ví dụ nhánh: `feature/student-practice-do`, `feature/teacher-practice-manage`, `feature/admin-curriculum-config`.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.

Task mẫu: `TASK-01` mockup màn hình thực hành, `TASK-02` HTML vai trò Sinh viên, `TASK-03` responsive CSS, `TASK-04` JS mô phỏng thao tác phần mềm, `TASK-05` mock API, `TASK-06` (tùy chọn) AI, `TASK-07` kiểm thử đa trình duyệt, `TASK-08` OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI (mock-up giao diện phần mềm, nút tick bước, nút nộp bài).
5. **Thực hiện một thay đổi nhỏ tại chỗ** (thêm bước thao tác, đổi vị trí menu, thêm câu hỏi) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** mà giảng viên hoặc nhóm yêu cầu (minh chứng "hiểu và làm lại được").

Quy tắc đặt tên:
```text
SV1-01-student-practice-do.mp4
SV2-01-admin-user-management.mp4
SV3-01-teacher-practice-manage.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi, mockup tương tác màn hình thực hành.

## 20. Cấu trúc kho mã nguồn gợi ý
```text
project-root/
├── README.md
├── docs/ (project-proposal, screen-list, team-assignment, ai-usage-report)
├── design/ (figma-link.txt, mockups/)
├── pages/
├── assets/ (images, icons, data, software-mockups/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation (lọc theo phần mềm).
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): mô phỏng thao tác phần mềm từng bước, hoạt ảnh hướng dẫn menu, trắc nghiệm/sơ đồ chương trình.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; PWA; cá nhân hóa lộ trình; tải nguồn thực hành mẫu.

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
(Thang điểm có thể điều chỉnh theo từng kỳ.)

## 25. Chuẩn đầu ra mong đợi
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (mô phỏng thao tác phần mềm, hoạt ảnh menu, trắc nghiệm); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.