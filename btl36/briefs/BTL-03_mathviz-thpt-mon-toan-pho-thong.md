# BTL-03 – MathViz THPT – Hệ thống hỗ trợ giảng dạy và học tập môn Toán THPT

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

Giáo dục trung học phổ thông (THPT) / Giảng dạy Toán học phổ thông

## 2. Tóm tắt sản phẩm

**MathViz THPT – Hệ thống hỗ trợ giảng dạy và học tập môn Toán THPT** giúp **giáo viên** dựng học liệu trực quan và giúp **học sinh** tiếp thu dễ hiểu, sinh động. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Toán THPT là môn trọng tâm của kỳ thi THPT Quốc gia, gồm đại số, giải tích, hình học và xác suất thống kê. Học sinh thường ôn thi trắc nghiệm với khối lượng câu hỏi lớn, gặp khó khi hình dung đồ thị hàm số, hình không gian và các dạng bài phức tạp. Giáo viên cần công cụ phân loại dạng bài, xây dựng ngân hàng câu hỏi và bám sát lộ trình ôn thi của từng học sinh.

## 4. Phát biểu vấn đề

- **P1.** Học sinh khó hình dung đồ thị hàm số, khảo sát hàm số và hình học không gian trên giấy.
- **P2.** Ngân hàng câu hỏi và đề luyện ôn thi rải rác, chưa được phân loại rõ theo dạng bài và mức độ khó.
- **P3.** Giáo viên tốn thời gian phân loại dạng bài, ra đề và chấm bài luyện thi, khó theo dõi lộ trình từng học sinh.
- **P4.** Học sinh thiếu sân luyện trắc nghiệm tự động có phản hồi, giải thích và đếm thời gian như thi thật.

## 5. Mục tiêu

- **O1.** Biến bài toán ôn luyện Toán THPT thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Cung cấp đầy đủ giao diện cho từng vai trò: Khách, Học sinh, Giáo viên, Quản trị viên.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: chuyên đề, bài giảng, câu hỏi, đề luyện, bài làm, kết quả.
- **O4.** Dùng JavaScript/DOM để vẽ đồ thị, mô phỏng hình không gian, thi trắc nghiệm đúng giờ, tìm kiếm, lọc.
- **O5.** Xây dựng dữ liệu bằng mock API.
- **O6.** Thiết kế ít nhất 3 cách truyền đạt kiến thức trực quan (mục 11) đặc thù Toán THPT.
- **O7.** (Tùy chọn) Bổ sung AI hỗ trợ phân loại dạng bài, gợi ý lộ trình ôn thi cho học sinh.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu khóa luyện thi, bài mẫu, đề minh họa |
| Học sinh | Học bài, ôn tập chuyên đề, làm đề trắc nghiệm như thi thật, xem tiến độ |
| Giáo viên | Dựng học liệu, phân loại dạng bài, ra đề, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chuyên đề, cấu hình và báo cáo |

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
| Khách | Giới thiệu khóa luyện | Xem khóa & bài mẫu công khai | Trang chủ | `index.html` | R | SV1 |
| Khách | Biết thông tin khóa & đăng ký | Xem chuyên đề luyện thi | Trang chuyên đề | `topics.html` | R/C | SV1 |
| Khách | Xem học liệu mẫu | Duyệt đề minh họa & đồ thị | Thư viện đề mẫu | `sample-library.html` | R | SV1 |
| Học sinh | Học chuyên đề trực quan | Xem bài giảng kèm đồ thị | Học bài | `lesson-view.html` | R | SV1 |
| Học sinh | Luyện trắc nghiệm | Làm đề trắc nghiệm đúng giờ | Làm đề luyện | `quiz-taking.html` | R/C | SV1 |
| Học sinh | Kiểm tra năng lực | Làm đề thi thử tính điểm | Thi thử | `mock-exam.html` | R/C | SV1 |
| Học sinh | Theo dõi tiến độ | Xem kết quả, điểm theo dạng bài | Bảng điểm của tôi | `my-progress.html` | R | SV1 |
| Học sinh | Ôn công thức | Xem bảng tổng hợp công thức | Bảng công thức | `formula-sheet.html` | R | SV1 |
| Giáo viên | Dựng học liệu | Soạn bài giảng chuyên đề | Soạn bài giảng | `lesson-editor.html` | C/R/U/D | SV2 |
| Giáo viên | Quản lý ngân hàng câu hỏi | Phân loại dạng bài, độ khó | Ngân hàng câu hỏi | `question-bank.html` | C/R/U/D | SV2 |
| Giáo viên | Ra đề & chấm | Tạo đề, chấm, phản hồi | Quản lý đề & chấm | `exam-manager.html` | C/R/U | SV2 |
| Giáo viên | Xem thống kê lớp | Xem điểm, độ khó, học sinh yếu | Thống kê lớp | `class-stats.html` | R | SV2 |
| Quản trị viên | Quản lý tài khoản | Duyệt/hủy tài khoản | Quản lý tài khoản | `admin-users.html` | C/R/U/D | SV3 |
| Quản trị viên | Quản lý chuyên đề | Tạo chuyên đề, cấu trúc | Quản lý chuyên đề | `admin-topics.html` | C/R/U/D | SV3 |
| Quản trị viên | Cấu hình & báo cáo | Cấu hình, xem báo cáo tổng | Bảng điều khiển admin | `admin-dashboard.html` | R/U | SV3 |

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

### (Tùy chọn) Trải nghiệm khi AI thất bại
Nếu nhóm làm AI, mỗi AI feature cần có trạng thái không đủ dữ liệu / không chắc chắn / lỗi, kèm thao tác Chỉnh sửa / Thử lại / Bỏ qua / Báo cáo / Dùng thủ công.

### Bảo vệ / Chỉnh sửa ngẫu nhiên
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter, đổi table thành card, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách → 3 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `index.html` | Trang chủ giới thiệu | R | Giới thiệu khóa luyện thi, bài mẫu, CTA đăng ký |
| 2 | `topics.html` | Danh sách chuyên đề | R | Xem chuyên đề, lọc theo lớp/khối |
| 3 | `sample-library.html` | Thư viện đề mẫu | R | Xem đề minh họa, đồ thị mẫu, tooltip |

### Học sinh → 5 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `lesson-view.html` | Học bài tương tác | R | Xem bài giảng kèm đồ thị, đánh dấu đã học |
| 2 | `quiz-taking.html` | Làm đề luyện | R/C | Làm trắc nghiệm đúng giờ, xem giải thích |
| 3 | `mock-exam.html` | Thi thử | R/C | Thi thử toàn đề, tính điểm như thi thật |
| 4 | `my-progress.html` | Bảng điểm & tiến độ | R | Xem điểm theo dạng bài, biểu đồ tiến độ |
| 5 | `formula-sheet.html` | Bảng công thức | R | Tổng hợp công thức, lọc theo chuyên đề |

### Giáo viên → 4 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `lesson-editor.html` | Soạn bài giảng | C/R/U/D | Soạn bài giảng chuyên đề, nhúng đồ thị |
| 2 | `question-bank.html` | Ngân hàng câu hỏi | C/R/U/D | Nhập/phân loại câu hỏi theo dạng & độ khó |
| 3 | `exam-manager.html` | Quản lý đề & chấm | C/R/U | Tạo đề, chấm, nhận xét, phản hồi |
| 4 | `class-stats.html` | Thống kê lớp | R | Xem điểm, phân bố độ khó, học sinh yếu |

### Quản trị viên → 3 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `admin-users.html` | Quản lý tài khoản | C/R/U/D | Duyệt/hủy tài khoản, gán vai trò |
| 2 | `admin-topics.html` | Quản lý chuyên đề | C/R/U/D | Tạo chuyên đề, sắp xếp bài, độ khó |
| 3 | `admin-dashboard.html` | Bảng điều khiển | R/U | Báo cáo tổng, số người dùng, tỉ lệ hoàn thành |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---|
| Chuyên đề | C | R | U | Hủy | Đại số, giải tích, hình học, xác suất |
| Bài giảng | C | R | U | Đóng | Có đồ thị nhúng, nháp/xuất bản |
| Câu hỏi | C | R | U | Lưu trữ | Phân loại dạng bài, độ khó |
| Đề luyện | C | R | U | Hủy | Gồm nhiều câu hỏi, thời gian, mức độ |
| Bài làm | C | R | U | Vô hiệu hóa | Kết quả, điểm, số câu đúng theo dạng |
| Công thức | C | R | U | Lưu trữ | Bảng công thức theo chuyên đề |
| Học sinh | C | R | U | Vô hiệu hóa | Hồ sơ, lộ trình ôn thi, tiến độ |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

- **Vẽ đồ thị hàm số và khảo sát hàm số động (Canvas/SVG)** – áp dụng trên `lesson-view.html`. Vẽ đồ thị đa thức, hữu tỉ, lượng giác, mũ/logarit; hiển thị cực trị, tiệm cận, bảng biến thiên tương tác để ôn khảo sát hàm số.
- **Sơ đồ phân loại dạng bài & mẹo giải nhanh** – áp dụng trên `question-bank.html` và `lesson-view.html`. Mỗi câu hỏi được gắn dạng bài (tìm tiệm cận, bất phương trình, thể tích khối...), hệ thống gợi ý phương pháp giải và bẫy thường gặp.
- **Luyện trắc nghiệm như thi thật có giải thích** – áp dụng trên `quiz-taking.html` và `mock-exam.html`. Đồng hồ đếm ngược, chấm điểm tức thì, mỗi câu sai đều hiện lời giải và cách làm lại.
- **Hình học không gian trực quan** – áp dụng trên `lesson-view.html`. Mô phỏng khối đa diện, hình nón/trụ/cầu với công thức thể tích minh họa, giúp học sinh hình dung trực giác.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – Trợ lý giải bài Toán THPT từng bước
Học sinh nhập câu hỏi, hệ thống sinh lời giải từng bước kèm giải thích và chỉ ra dạng bài. Người dùng: học sinh. Cách mô phỏng: JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-2 – Gợi ý lộ trình ôn thi cá nhân
Hệ thống phân tích kết quả theo dạng bài, gợi ý chuyên đề cần ôn tập và bộ câu hỏi phù hợp. Người dùng: học sinh. Cách mô phỏng: JS theo quy tắc từ kết quả làm bài.

### AI-3 – Sinh câu hỏi theo dạng và độ khó
Giáo viên chọn dạng bài và độ khó, hệ thống sinh câu hỏi tương tự vào ngân hàng. Người dùng: giáo viên. Cách mô phỏng: JS theo quy tắc / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Dùng JSON Server / MockAPI / LocalStorage với file `db.json` gồm: chuyên đề, bài giảng, câu hỏi, đề luyện, bài làm, công thức, học sinh. Trích `db.json` gợi ý:

```json
{
  "topics": [
    { "id": 1, "title": "Khảo sát hàm số", "grade": "G12", "status": "active" },
    { "id": 2, "title": "Hình không gian", "grade": "G12", "status": "active" }
  ],
  "lessons": [
    { "id": 1, "topicId": 1, "title": "Đồ thị và cực trị", "status": "published", "hasGraph": true }
  ],
  "questions": [
    { "id": 1, "topicId": 1, "type": "trac_nghiem", "dangBai": "tim_cuc_tri", "difficulty": "de", "content": "Hàm số y = x³ − 3x có bao nhiêu điểm cực trị?", "answer": "2" }
  ],
  "exams": [
    { "id": 1, "title": "Đề luyện chuyên đề 1", "durationMinute": 60, "status": "published" }
  ],
  "attempts": [
    { "id": 1, "studentId": 10, "examId": 1, "score": 8.0, "correctByDang": { "tim_cuc_tri": 4 } }
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

### Mẫu prompt 1 – Dựng học liệu/bài giảng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Toán THPT (MathViz). Hãy giúp tôi...
+ dựng bài giảng khảo sát hàm số có đồ thị động và bảng biến thiên
+ vai trò người xem: học sinh lớp 12 ôn thi
+ yêu cầu trực quan: đồ thị trên Canvas, phân loại dạng bài kèm mẹo giải nhanh
+ Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống MathViz THPT, gồm các entity: topics, lessons, questions, exams, attempts, formulas, students, mỗi entity 5–8 bản ghi mẫu theo nội dung Toán lớp 12, có id, timestamps, và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước xây màn hình thi trắc nghiệm có đồng hồ đếm ngược: hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: Khách + Học sinh. Trách nhiệm chéo: một phần giao diện dùng chung, responsive.

### SV2
Phụ trách: Giáo viên. Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.

### SV3
Phụ trách: Quản trị viên + tích hợp bố cục, điều hướng, dashboard. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub

- Repo gợi ý: `cse122-mathviz-thpt-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion

Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS tương tác, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI (đặc biệt code vẽ đồ thị, đồng hồ thi trắc nghiệm và chấm điểm).
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): vẽ đồ thị khảo sát hàm số, phân loại dạng bài & mẹo giải, luyện trắc nghiệm như thi thật có giải thích.
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

Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (đặc biệt vẽ đồ thị và thi trắc nghiệm); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.