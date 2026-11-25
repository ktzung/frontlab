# BTL-21 – CodeSkill – Hệ thống hỗ trợ giảng dạy và học tập môn Lập trình cơ bản

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Lập trình cơ bản (ngôn ngữ lập trình, cấu trúc dữ liệu cơ bản, thuật toán, giải bài tập lập trình, gỡ lỗi).**

## 2. Tóm tắt sản phẩm

**CodeSkill – Hệ thống hỗ trợ giảng dạy và học tập môn Lập trình cơ bản** giúp **giảng viên** dựng bài giảng, bộ bài tập lập trình, bộ test và đáp án mẫu, đồng thời giúp **sinh viên** tiếp thu dễ hiểu qua **trình soạn thảo code có tô màu cú pháp, nộp bài chạy test tự động, giải thích từng dòng code và trắc nghiệm thuật toán**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Lập trình là môn nền tảng của nhiều ngành, đòi hỏi sinh viên thực hành viết code thường xuyên. Người mới thường gặp lỗi cú pháp và lỗi logic, khó tự gỡ lỗi và khó hình dung luồng chạy của chương trình. Giảng viên khó thu và chấm nhiều bài nộp kịp thời; sinh viên thiếu môi trường luyện tập có cấu trúc (editor, test, phản hồi) ngay trên trình duyệt. Vì vậy cần một hệ thống có trình soạn thảo code, nộp bài chạy test và hướng dẫn giải thích từng dòng để rèn tư duy lập trình.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên mới viết code gặp nhiều lỗi cú pháp/logic mà không biết tìm ở đâu.
- **P2.** Việc thu và chấm bài tập code thủ công tốn thời gian, khó phản hồi từng người.
- **P3.** Sinh viên thiếu môi trường luyện tập có cấu trúc (editor, test, phản hồi) ngay trên trình duyệt.
- **P4.** Sinh viên chưa có kênh gợi ý thuật toán và nhận giải thích cách cải thiện code.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Lập trình thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò: Khách, Sinh viên, Giảng viên, Quản trị viên.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: bài tập, bộ test, bài nộp, kết quả chấm, chủ đề, ngôn ngữ.
- **O4.** Dùng JavaScript/DOM cho tô màu cú pháp, chạy test, đếm dòng, tìm kiếm, lọc độ khó, kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (entity + `db.json`).
- **O6.** Thiết kế ít nhất **3 cách truyền đạt kiến thức trực quan** (trình soạn thảo tô màu cú pháp, chạy test ca đạt/không đạt, giải thích từng dòng).
- **O7.** Tổ chức làm việc nhóm bằng Trello và Git/GitHub theo nhánh + yêu cầu hợp nhất, kèm video OBS.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu khóa, thư viện bài tập mẫu, đề xuất chủ đề |
| Sinh viên | Viết/nộp code, chạy test, xem kết quả, học giải thích từng dòng, theo dõi tiến độ |
| Giảng viên | Xây dựng bài tập/bộ test, chấm bài, quản lý lớp, theo dõi tiến độ |
| Quản trị viên | Quản lý tài khoản, ngôn ngữ/chủ đề, cấu hình hệ thống, duyệt nội dung |

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
| Khách | Giới thiệu khóa lập trình | Xem tổng quan thư viện bài tập | Tổng quan khóa | `visitor-problem-overview.html` | R | SV1 |
| Sinh viên | Luyện viết code | Viết code, tô màu cú pháp, nộp bài | Trình soạn thảo & nộp bài | `student-code-editor.html` | C/R/U, Đang chờ | SV1 |
| Sinh viên | Xem kết quả chạy test | Xem ca đạt/không đạt của bài nộp | Kết quả test | `student-test-result.html` | R, Thành công/Lỗi | SV1 |
| Sinh viên | Học giải thích từng dòng | Xem giải thích thuật toán/độ phức tạp | Học giải thích code | `student-code-explain.html` | R, Đang tải/Rỗng | SV2 |
| Sinh viên | Ôn lý thuyết thuật toán | Làm trắc nghiệm theo chủ đề | Trắc nghiệm lập trình | `student-program-quiz.html` | C/R, Hoàn thành | SV2 |
| Sinh viên | Xem tiến độ | Theo dõi điểm và bài đã làm | Bảng điều khiển | `student-dashboard.html` | R | SV2 |
| Giảng viên | Xây dựng bài tập | Thêm/sửa bài tập, đáp án, độ khó | Quản lý bài tập | `teacher-problem-manage.html` | C/R/U/D(Lưu trữ) | SV3 |
| Giảng viên | Cấu hình bộ test | So khớp đầu vào/đầu ra test | Cấu hình bộ test | `teacher-test-case-build.html` | C/R/U, Đang chờ | SV3 |
| Giảng viên | Chấm bài nộp | Xem bài nộp, chấm/điều chỉnh điểm | Chấm bài | `teacher-grading.html` | C/R/U, Bị từ chối | SV3 |
| Giảng viên | Đánh giá lớp | Xem báo cáo năng lực theo chủ đề | Phân tích năng lực | `teacher-analysis.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Thêm/cấm/sửa tài khoản, phân quyền | Quản lý người dùng | `admin-user-management.html` | C/R/U/D(Vô hiệu hóa) | SV2 |
| Quản trị viên | Cấu hình hệ thống | Cấu hình ngôn ngữ, chủ đề, độ khó | Cấu hình bài tập | `admin-problem-config.html` | C/R/U, Đã hủy/Lưu trữ | SV2 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter độ khó, đổi table thành card bài tập, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-problem-overview.html` | Tổng quan bài tập | R | Xem tổng quan thư viện bài tập lập trình. |
| 2 | `visitor-problem-statements.html` | Đề bài mẫu | R | Xem thử đề bài mẫu và yêu cầu. |
| 3 | `visitor-topic-feedback.html` | Góp ý chủ đề | C/R | Đề xuất chủ đề lập trình cần bổ sung. |

### Học sinh / Sinh viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Theo dõi tiến độ và kết quả nộp bài. |
| 5 | `student-problem-list.html` | Danh sách bài tập | R | Duyệt/chọn bài theo độ khó, chủ đề. |
| 6 | `student-code-editor.html` | Trình soạn thảo & nộp bài | C/R/U | Viết code với tô màu cú pháp, nộp bài. |
| 7 | `student-test-result.html` | Kết quả test | R | Xem kết quả test, ca đạt/không đạt. |
| 8 | `student-code-explain.html` | Học giải thích code | R | Xem giải thích từng dòng, độ phức tạp, mẹo cải thiện. |

### Giáo viên / Giảng viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển | R | Tổng quan lớp, bài tập, mức đạt. |
| 10 | `teacher-problem-manage.html` | Quản lý bài tập | C/R/U/D | Tạo/sửa bài tập, đáp án, độ khó. |
| 11 | `teacher-test-case-build.html` | Cấu hình bộ test | C/R/U | Cấu hình test so khớp đầu vào/đầu ra. |
| 12 | `teacher-grading.html` | Chấm bài | C/R/U | Xem bài nộp, chấm/điều chỉnh điểm. |
| 13 | `teacher-analysis.html` | Phân tích năng lực | R | Xem báo cáo năng lực lớp theo chủ đề. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển | R | Quản trị hệ thống CodeSkill. |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản, phân quyền, vô hiệu hóa. |
| 16 | `admin-problem-config.html` | Cấu hình hệ thống | C/R/U | Cấu hình ngôn ngữ, chủ đề, độ khó. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card bài tập, list chủ đề, editor code, bảng test-case, dashboard); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (tô màu cú pháp, chạy test, đếm ký tự/nộp bài); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản theo vai trò (mock data). |
| `problems` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài tập lập trình + đề bài. |
| `testCases` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bộ đầu vào/đầu ra để so khớp. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp code + kết quả. |
| `languages` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Ngôn ngữ lập trình (C, Python, Java…). |
| `topics` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chủ đề (biến, vòng lặp, hàm, mảng…). |
| `submissionResults` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chi tiết từng ca test đạt/không đạt. |
| `quizQuestions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Trắc nghiệm lý thuyết thuật toán. |

> Đi kèm `db.json` gợi ý: các entity `users`, `problems`, `testCases`, `submissions`, `languages`, `topics`, `submissionResults`, `quizQuestions`, mỗi entity 5–8 bản ghi mẫu theo môn Lập trình (có `id`, `createdAt`, `updatedAt`).

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Lập trình cơ bản. Liệt kê tối thiểu **3 cách truyền đạt**, mỗi cách gắn với một màn hình.

- **Cách 1 – Trình soạn thảo code với tô màu cú pháp** (màn hình `student-code-editor.html`). Editor gọn nhẹ tô màu từ khóa, chuỗi, số, chú thích; tự chèn dấu ngoặc, đếm số dòng. Vì sao giúp hiểu hơn: tách bạch cấu trúc ngôn ngữ, giúp người mới đọc và kiểm tra code dễ hơn.

- **Cách 2 – Chạy test từng ca đạt/không đạt** (màn hình `student-test-result.html`). Sau khi nộp, hiển thị từng test-case: đầu vào, đầu ra mong đợi, đầu ra thực tế, màu xanh/đỏ, kèm thông báo lỗi. Vì sao giúp hiểu hơn: sinh viên thấy chính xác ca nào sai và vì sao sai, học cách sửa theo hướng có mục tiêu.

- **Cách 3 – Giải thích từng dòng code** (màn hình `student-code-explain.html`). Mỗi dòng đáp án mẫu có chú thích bằng tiếng Việt, kèm độ phức tạp thuật toán và mẹo cải thiện. Vì sao giúp hiểu hơn: biến code thành lời giải thích tuần tự, phù hợp người mới tiếp cận tư duy thuật toán.

- **Cách 4 – Mô phỏng luồng chạy (tracing)** (màn hình `student-code-explain.html`). Bấm "chạy từng bước" để thấy biến đổi giá trị của biến, điều kiện rẽ nhánh, vòng lặp. Vì sao giúp hiểu hơn: trực quan hóa luồng thực thi, rèn tư duy gỡ lỗi và logic điều khiển.

Với mỗi cách, nhóm ghi rõ **màn hình áp dụng** và **lý do giúp người học hiểu hơn** như trên.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc** và **không chấm điểm chặn đề tài** chỉ vì có/không có AI. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ (Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát).

### AI-1 – AI Error Explainer (tùy chọn)
Sinh viên dán code bị lỗi; AI chỉ ra lỗi cú pháp/logic, vị trí phát sinh và cách sửa. Cách mô phỏng: JSON giả lập chuỗi lỗi mẫu, JavaScript theo regex/so khớp, phản hồi định sẵn; API LLM tùy chọn.

### AI-2 – AI Algorithm Advisor (tùy chọn)
Sinh viên bí ý tưởng bài tập; AI gợi ý cách tiếp cận thuật toán theo từng mức gợi ý. Cách mô phỏng: JSON giả lập gợi ý theo độ khó, JavaScript theo quy tắc, phản hồi định sẵn; API LLM tùy chọn.

### AI-3 – AI Auto Grader (tùy chọn)
Chấm điểm code tự động dựa trên bộ test và nhận xét sơ bộ chất lượng. Cách mô phỏng: JSON giả lập bộ test so khớp, JavaScript theo quy tắc, phản hồi định sẵn; API LLM tùy chọn.

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
problems
testCases
submissions
languages
topics
submissionResults
quizQuestions
```

`db.json` gợi ý (đặt tại root) chứa 8 entity trên, mỗi entity 5–8 bản ghi mẫu theo môn Lập trình, ví dụ `testCases`: `{ id, problemId, input, expectedOutput, match, createdAt, updatedAt }`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng (bài tập lập trình)
```text
Tôi là SV môn CSE122 đang làm BTL về Lập trình cơ bản (CodeSkill). Hãy giúp tôi dựng nội dung cho trang "Học giải thích code".
+ Ngôn ngữ: Python, bài "tính tổng dãy số", 12 dòng code đáp án mẫu.
+ Vai trò người xem: sinh viên mới học lập trình.
+ Yêu cầu trực quan: editor tô màu cú pháp, chạy test từng ca đạt/không đạt, giải thích từng dòng bằng tiếng Việt, chạy từng bước (tracing biến).
+ Hãy giải thích logic HTML/JS của editor và chạy test để tôi hiểu và tự làm lại.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống CodeSkill (môn Lập trình cơ bản), gồm các entity: users, problems, testCases, submissions, languages, topics, submissionResults, quizQuestions. Mỗi entity 5–8 bản ghi mẫu theo chủ đề (biến, vòng lặp, hàm, mảng, thuật toán), có id, timestamps và trường nghiệp vụ (input/expectedOutput cho test, difficulty). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng "trình soạn thảo code có tô màu cú pháp và nộp bài chạy test": hỏi tôi cần gì, sau mỗi đoạn code giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại (ví dụ thêm một test-case mới cho bài tập).
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (danh sách bài tập, editor code, nộp bài, xem kết quả). Trách nhiệm chéo: **một phần giao diện dùng chung, tô màu cú pháp, responsive**.

### SV2
Phụ trách: **Quản trị viên** (tài khoản, cấu hình ngôn ngữ/chủ đề) + một phần màn hình sinh viên (giải thích code, tiến độ). Trách nhiệm chéo: **JavaScript / dữ liệu / mock API; review PR**.

### SV3
Phụ trách: **Giảng viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: **nhất quán toàn dự án, phát hành**.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-codeskill-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.
- Ví dụ nhánh: `feature/student-code-editor`, `feature/teacher-problem-manage`, `feature/admin-problem-config`.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.

Task mẫu: `TASK-01` mockup editor code, `TASK-02` HTML vai trò Sinh viên, `TASK-03` responsive CSS, `TASK-04` JS tô màu cú pháp/chạy test, `TASK-05` mock API, `TASK-06` (tùy chọn) AI, `TASK-07` kiểm thử đa trình duyệt, `TASK-08` OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI (vùng editor, nút nộp, bảng kết quả test).
5. **Thực hiện một thay đổi nhỏ tại chỗ** (thêm màu cú pháp mới, đổi bài tập, thêm test-case) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** mà giảng viên hoặc nhóm yêu cầu (minh chứng "hiểu và làm lại được").

Quy tắc đặt tên:
```text
SV1-01-student-code-editor.mp4
SV2-01-admin-user-management.mp4
SV3-01-teacher-problem-manage.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi, mockup tương tác editor code.

## 20. Cấu trúc kho mã nguồn gợi ý
```text
project-root/
├── README.md
├── docs/ (project-proposal, screen-list, team-assignment, ai-usage-report)
├── design/ (figma-link.txt, mockups/)
├── pages/
├── assets/ (images, icons, data, code-snippets/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation (lọc theo độ khó/chủ đề).
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): editor tô màu cú pháp, chạy test từng ca, giải thích từng dòng/tracing.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng; hiển thị số dòng code.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; autocomplete code; PWA; cá nhân hóa lộ trình; biểu đồ năng lực nâng cao.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (editor tô màu cú pháp, chạy test, giải thích từng dòng, tracing); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.