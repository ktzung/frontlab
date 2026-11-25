# BTL-22 – DataLesson – Hệ thống hỗ trợ giảng dạy và học tập môn Cơ sở dữ liệu

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Khoa học Máy tính – Giảng dạy và học tập môn Cơ sở dữ liệu** (mô hình quan hệ, ER diagram, chuẩn hóa, ngôn ngữ SQL).

## 2. Tóm tắt sản phẩm

**DataLesson – Hệ thống hỗ trợ giảng dạy và học tập môn Cơ sở dữ liệu** giúp **giảng viên** xây dựng học liệu trực quan (bài giảng về ER, chuẩn hóa, bộ bài tập SQL) và giúp **sinh viên** thực hành sinh động: **vẽ ER diagram tương tác**, **viết và chạy thử truy vấn SQL trong SQL Playground** trên dữ liệu giả lập, làm bài tập chuẩn hóa các dạng chuẩn. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Cơ sở dữ liệu là môn nền tảng của sinh viên công nghệ thông tin, gồm mô hình ER, phụ thuộc hàm, chuẩn hóa và SQL. Hiện nay giảng viên chủ yếu giảng lý thuyết trên slide, sinh viên khó hình dung cách chuyển một phát biểu nghiệp vụ thành lược đồ quan hệ, dễ nhầm tỉ số bản số, thiếu khóa, chuẩn hóa chưa đúng. Sinh viên cũng không có môi trường an toàn để thử câu truy vấn SQL trên máy. Việc trực quan hóa ER, mô phỏng từng bước chuẩn hóa và một nơi để chạy thử SQL chính là nhu cầu thực tế của người học và người dạy môn này.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó vẽ và kiểm tra tính đúng của **ER diagram** khi chuyển từ một phát biểu nghiệp vụ bằng lời sang mô hình thực thể – quan hệ.
- **P2.** Sinh viên không có **môi trường an toàn** để viết và xem kết quả truy vấn SQL, dễ sai cú pháp mà không biết lỗi nằm ở bước nào.
- **P3.** Giảng viên khó chấm và phản hồi nhất quán các bài tập thiết kế CSDL (vẽ ER, chuẩn hóa về dạng chuẩn) khi sinh viên nộp thủ công.
- **P4.** Thiếu kênh ôn tập có giải thích từng bước cho các khái niệm trừu tượng như khóa, phụ thuộc hàm, các dạng chuẩn 1NF–3NF/BCNF.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Cơ sở dữ liệu thành một sản phẩm Frontend có hành trình người dùng rõ ràng từ khám phá đến thực hành và đánh giá.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách, Sinh viên, Giảng viên, Quản trị viên) với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ phù hợp: chương, bài giảng, bài tập, đề, nộp bài, chấm điểm, tiến độ.
- **O4.** Dùng JavaScript/DOM để xây **ER diagram kéo-thả bằng SVG/Canvas**, **SQL Playground** với dataset giả lập, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (kèm `db.json`).
- **O6.** Thiết kế 3 ý tưởng AI mô phỏng ở Frontend (sinh câu SQL, chuẩn hóa schema, rà soát ER) — **tùy chọn, không bắt buộc**.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa học, xem bài giảng chuẩn hóa mẫu công khai, góp ý chủ đề cần bổ sung |
| Sinh viên | Học bài giảng ER/SQL/chuẩn hóa, vẽ ER, chạy SQL trong Playground, làm bài tập, xem điểm & tiến độ, hỏi AI |
| Giảng viên | Dựng bài giảng và học liệu, xây schema mẫu, tạo bài tập SQL/chuẩn hóa, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chương trình học, dataset mẫu, cấu hình hệ thống, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (vẽ ER, chạy SQL, làm bài, dựng học liệu)
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
| Khách | Giới thiệu & thử học liệu | Xem tổng quan, xem bài giảng mẫu, góp ý | Trang chủ | `index.html` | R | SV1 |
| Sinh viên | Vẽ ER trực quan | Kéo–thả entity, quan hệ, lưu bản vẽ | ER Diagram Editor | `student-er-diagram-editor.html` | C/R/U — Lưu/Lưu nháp | SV1 |
| Sinh viên | Chạy thử SQL an toàn | Viết truy vấn, chạy trên dataset giả lập | SQL Playground | `student-sql-playground.html` | C/R — Lịch sử truy vấn | SV1 |
| Sinh viên | Ôn tập chuẩn hóa | Làm bài chuẩn hóa có đáp án giải thích | Bài tập chuẩn hóa | `student-normalization-exercise.html` | C/R/U — Nộp | SV2 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, mức độ hoàn thành module | Bảng điều khiển SV | `student-dashboard.html` | R | SV2 |
| Giảng viên | Dựng học liệu/đề | Tạo bài giảng, schema mẫu, bài tập | Xây bài tập & schema | `teacher-exercise-build.html` | C/R/U/D — Vô hiệu hóa | SV2 |
| Giảng viên | Chấm & phản hồi | Duyệt bài nộp, chấm điểm, nhận xét | Chấm bài | `teacher-grading.html` | R/U — Đang chờ/Đạt/Chưa đạt | SV2 |
| Giảng viên | Phân tích lớp | Xem báo cáo năng lực ER/SQL | Bảng điều khiển GV | `teacher-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý người dùng & cấu hình | Quản lý tài khoản, dataset, quyền | Quản trị hệ thống | `admin-dashboard.html` | R | SV3 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo dạng chuẩn, đổi table thành card bài tập, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình cơ bản
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang chủ | R | Giới thiệu khóa Cơ sở dữ liệu, các module ER/SQL/chuẩn hóa, CTA đăng ký |
| 2 | `visitor-lesson-preview.html` | Xem thử bài giảng | R | Xem bài giảng chuẩn hóa mẫu kèm ví dụ minh họa |
| 3 | `visitor-topic-feedback.html` | Góp ý chủ đề | C/R | Đề xuất chủ đề SQL/ER cần bổ sung |

### Học sinh / Sinh viên → 5 màn hình, sát môn CSDL
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Tiến độ, điểm các module ER / SQL / chuẩn hóa |
| 5 | `student-er-diagram-editor.html` | ER Diagram Editor | C/R/U | Vẽ ER bằng SVG/Canvas, kéo–thả entity, kẻ quan hệ |
| 6 | `student-sql-playground.html` | SQL Playground | C/R | Viết truy vấn, chạy trên dataset giả lập, xem bảng kết quả |
| 7 | `student-normalization-exercise.html` | Bài tập chuẩn hóa | C/R/U | Giải bài 1NF–3NF/BCNF, xem đáp án giải thích từng bước |
| 8 | `student-lesson-library.html` | Thư viện bài giảng | R | Duyệt và đọc bài giảng ER, phụ thuộc hàm, chuẩn hóa |

### Giáo viên / Giảng viên → 5 màn hình, sát môn CSDL
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển GV | R | Tổng quan lớp, chương, mức độ thực hành ER/SQL |
| 10 | `teacher-schema-builder.html` | Xây schema mẫu | C/R/U | Dựng bảng, khóa, quan hệ cho học liệu/bài tập |
| 11 | `teacher-exercise-build.html` | Xây bài tập | C/R/U/D | Tạo bài tập SQL ngắn/chuẩn hóa dài kèm đáp án |
| 12 | `teacher-grading.html` | Chấm bài | R/U | Xem bài nộp, chấm điểm, nhận xét lỗi thiết kế |
| 13 | `teacher-class-analysis.html` | Phân tích lớp | R | Báo cáo năng lực SQL/ER theo từng chương |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển Admin | R | Quản trị hệ thống DataLesson |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản SV/GV, phân quyền |
| 16 | `admin-course-config.html` | Cấu hình khóa học | C/R/U | Cấu hình chương, dataset mẫu, quyền truy cập |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát. Riêng môn Cơ sở dữ liệu, giao diện điểm nhấn là **ER diagram kéo–thả (SVG/Canvas)** và **SQL Playground** với dataset giả lập trong `db.json`.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản SV/GV/Admin |
| `courses` | ✓ | ✓ | ✓ | ✓/Đóng | Khóa học Cơ sở dữ liệu |
| `chapters` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chương: ER, phụ thuộc hàm, chuẩn hóa, SQL |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng trực quan từng chương |
| `schemaBlueprints` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Lược đồ mẫu: bảng, khóa, quan hệ |
| `sqlQueries` | ✓ | ✓ | — | ✓/Xóa | Lịch sử truy vấn trong SQL Playground |
| `exercises` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Bài tập SQL / chuẩn hóa kèm đáp án |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp ER/bài tập, trạng thái Đang chờ/Đạt/Chưa đạt |
| `aiTutorLogs` | ✓ | ✓ | ✓ | ✓/Xóa | Nhật ký hỏi AI (nếu làm AI) |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Tối thiểu 3 cách truyền đạt gắn với môn Cơ sở dữ liệu:

- **ER diagram tương tác (SVG/Canvas, kéo–thả).** Màn hình `student-er-diagram-editor.html`. Người học kéo từng thực thể lên canvas, kẻ quan hệ, chọn tỉ số bản số 1–n, n–m; giúp hình dung trực quan quá trình chuyển phát biểu nghiệp vụ thành mô hình dữ liệu — khái niệm vốn trừu tượng và dễ sai trên giấy.
- **SQL Playground có dataset thật (bảng giả lập `students`, `courses`, `enrollments`, `grades`).** Màn hình `student-sql-playground.html`. Sinh viên viết `SELECT/JOIN/GROUP BY` và thấy ngay bảng kết quả; nhấn "xem giải thích" để đọc từng mệnh đề, từ đó hiểu ý nghĩa câu lệnh thay vì học vẹt cú pháp.
- **Mô phỏng chuẩn hóa từng bước (step-by-step có tiến/lùi).** Màn hình `student-normalization-exercise.html`. Chương trình tách quan hệ 1NF→2NF→3NF/BCNF từng bước, tô màu thuộc tính phụ thuộc, giải thích tại sao phải tách — giúp nắm logic phụ thuộc hàm và khóa.
- **Thẻ flashcard + đố nhanh khái niệm.** Màn hình `student-lesson-library.html`. Flashcard thuật ngữ (khóa, phụ thuộc hàm, tỉ số bản số...) kết hợp minigame đếm ngược hỗ trợ ôn thi giữa kỳ/cuối kỳ.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI SQL Generator
Nhập yêu cầu bằng tiếng Việt (VD: "lấy tên và điểm sinh viên trên 8 điểm theo môn") → AI sinh câu `SELECT/JOIN/GROUP BY` và chèn thẳng vào Playground để chạy thử. Cách mô phỏng: JSON ánh xạ từ khóa → mẫu câu; JavaScript theo quy tắc; LLM API tùy chọn. Giá trị: giúp sinh viên đối chiếu câu lệnh sinh ra với kết quả thực, học từ phản hồi.

### AI-2 – AI Schema Normalizer
Nhập tập thuộc tính + phụ thuộc hàm → gợi ý khóa chính và phân rã 1NF→3NF/BCNF kèm giải thích từng bước. Cách mô phỏng: JSON giả lập, JS theo quy tắc (tính bao đóng, tách quan hệ). Giá trị: kiểm chứng đáp án bài tập chuẩn hóa.

### AI-3 – AI ER/Schema Review
Nộp ER diagram hoặc lược đồ do sinh viên dựng → chỉ ra lỗi (thiếu khóa, quan hệ thừa, sai tỉ số bản số) và đề xuất sửa. Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: đóng vai "người giảng viên rà soát" để sinh viên tự sửa trước khi nộp.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity tối thiểu cho môn Cơ sở dữ liệu:
`users`, `courses`, `chapters`, `lessons`, `schemaBlueprints`, `sqlQueries`, `exercises`, `submissions`, `aiTutorLogs`.

Gợi ý `db.json` cho SQL Playground chứa các bảng mẫu:

```json
{
  "students": [
    { "id": 1, "name": "Nguyễn Văn A", "class": "CNTT1", "gpa": 3.4 },
    { "id": 2, "name": "Trần Thị B", "class": "CNTT1", "gpa": 3.7 },
    { "id": 3, "name": "Lê Văn C", "class": "CNTT2", "gpa": 2.9 }
  ],
  "courses": [
    { "id": 101, "title": "Cơ sở dữ liệu", "credits": 3 },
    { "id": 102, "title": "Hệ quản trị CSDL", "credits": 3 }
  ],
  "enrollments": [
    { "id": 1, "studentId": 1, "courseId": 101 },
    { "id": 2, "studentId": 2, "courseId": 101 },
    { "id": 3, "studentId": 3, "courseId": 102 }
  ],
  "grades": [
    { "id": 1, "enrollmentId": 1, "score": 8.5 },
    { "id": 2, "enrollmentId": 2, "score": 7.2 },
    { "id": 3, "enrollmentId": 3, "score": 6.8 }
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

### Mẫu prompt 1 – Dựng học liệu/bài giảng sát môn CSDL
```text
Tôi là SV môn CSE122 đang làm BTL về Cơ sở dữ liệu (sản phẩm DataLesson). Hãy giúp tôi soạn một bài giảng về phụ thuộc hàm và chuẩn hóa lên 3NF.
+ Tên giao diện: student-lesson-library.html, người xem là sinh viên năm 2.
+ Yêu cầu trực quan: sơ đồ tách quan hệ từng bước, thẻ flashcard thuật ngữ, bài đố nhanh.
+ Hãy giải thích logic bao đóng và cách xác định khóa sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho SQL Playground
```text
Tạo file db.json (JSON Server) cho hệ thống DataLesson môn Cơ sở dữ liệu, gồm các entity: users, courses, chapters, lessons, schemaBlueprints, sqlQueries, exercises, submissions (aiTutorLogs tùy chọn). Mỗi entity 5–8 bản ghi theo nghiệp vụ CSDL, kèm các bảng mẫu students, courses, enrollments, grades để SQL Playground thực thi. Có id, timestamps, trường phù hợp. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước thiết kế một ER diagram từ đề bài "quản lý mượn trả sách thư viện". Hỏi tôi cần cụ thể gì, sau mỗi đoạn hướng dẫn giải thích vì sao chọn thực thể/khóa đó, rồi ra một bài tập nhỏ để tôi tự vẽ lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên**. Trách nhiệm chéo: ER editor và SQL Playground (JavaScript/DOM), một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giảng viên**. Trách nhiệm chéo: xây schema mẫu, tạo bài tập, chấm điểm, JavaScript/dữ liệu/mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: vẽ ER bằng SVG/Canvas, bao phủ trạng thái, nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-datalesson-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:` (ER editor, SQL playground, schema builder), `fix:` (validate bài nộp), `style:` (responsive editor), `refactor:`, `docs:`. Không dùng `update / done / final`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS vẽ ER + SQL Playground, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI.
5. **Thực hiện một thay đổi nhỏ tại chỗ** (đổi style, thêm filter dạng chuẩn, thêm field) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** (kéo thêm entity vào ER, chạy lại truy vấn) mà giảng viên hoặc nhóm yêu cầu.

Quy tắc đặt tên:
```text
SV1-01-screen-name.mp4
SV2-01-screen-name.mp4
SV3-01-screen-name.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi. Riêng môn CSDL cần mockup **ER canvas editor** và **SQL Playground** trước khi viết mã.

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
├── js/ (main.js, api.js, modules/er-editor.js, modules/sql-playground.js)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng (chạy lại truy vấn trong Playground), điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON (kèm `db.json`);
- **ER diagram kéo–thả (SVG/Canvas)** và **SQL Playground** với dataset giả lập — điểm nhấn riêng của môn Cơ sở dữ liệu.
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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; **sáng tạo cách truyền đạt kiến thức CSDL (ER kéo–thả, SQL Playground, mô phỏng chuẩn hóa)**; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.