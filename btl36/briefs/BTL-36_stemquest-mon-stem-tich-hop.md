# BTL-36 – StemQuest – Hệ thống hỗ trợ giảng dạy và học tập môn STEM tích hợp

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục phổ thông / Giảng dạy STEM tích hợp (Khoa học – Công nghệ – Kỹ thuật – Toán, dự án liên môn)**

## 2. Tóm tắt sản phẩm

**StemQuest – Hệ thống hỗ trợ giảng dạy và học tập môn STEM tích hợp** giúp **giáo viên** thiết kế dự án liên môn, quản lý thử thách và chấm điểm, đồng thời giúp **học sinh** tham gia sân chơi thử thách, hoàn thành dự án liên môn theo từng giai đoạn và theo dõi thành tích qua bảng xếp hạng. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

STEM là phương pháp dạy Tích hợp liên môn giúp học sinh phổ thông vận dụng kiến thức giải quyết vấn đề thực tế. Giáo viên khó thiết kế dự án liên môn và đánh giá quá trình, học sinh khó theo dõi tiến độ, thiếu sân chơi thử thách để tạo động lực; các dự án thường rời rạc giữa các môn, thiếu một nơi tập trung để quản lý và trưng bày.

## 4. Phát biểu vấn đề

- **P1.** Học sinh khó thấy được mối liên kết giữa các môn Khoa học, Công nghệ, Kỹ thuật, Toán trong một dự án thực tế.
- **P2.** Giáo viên tốn thời gian thiết kế dự án liên môn, phân bổ nhiệm vụ và theo dõi tiến độ nhóm.
- **P3.** Thiếu sân chơi thử thách / bảng thành tích để tạo động lực học tập ở phổ thông.
- **P4.** Học sinh thiếu kênh nhận hướng dẫn và phản hồi để hoàn thiện dự án.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học STEM thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (dự án, thử thách, nhiệm vụ, nộp bài, chấm điểm, bảng thành tích).
- **O4.** Sử dụng JavaScript/DOM cho bảng thành tích, tiến độ dự án, đồng hồ thử thách, vẽ biểu đồ tiến bộ canvas và kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn (mục 12).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu chương trình STEM, thử thách công khai |
| Học sinh | Tham gia thử thách, làm dự án liên môn, nộp bài, theo dõi thành tích |
| Giáo viên | Thiết kế dự án liên môn, quản lý thử thách, chấm & phản hồi, xếp hạng |
| Quản trị viên | Quản lý tài khoản, lớp/khối, cấu hình hệ thống và sân chơi |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (chọn thử thách, làm dự án, nộp bài, chấm điểm)
↓
Xem trạng thái / dữ liệu / phản hồi (tiến độ, điểm, bảng thành tích)
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
| Học sinh | Tham gia sân chơi thử thách | Chọn thử thách, giải theo bước có đồng hồ | Màn hình sân chơi thử thách | `student-challenge-arena.html` | C/R/U (hoàn thành, hết giờ) | SV1 |
| Học sinh | Hoàn thành dự án liên môn | Làm dự án theo từng giai đoạn, nộp bài | Màn hình dự án liên môn | `student-project.html` | C/R/U (đang chờ, hoàn thành) | SV1 |
| Học sinh | Theo dõi thành tích | Xem bảng thành tích, điểm, xếp hạng | Màn hình bảng thành tích | `student-dashboard.html` | R (rỗng, tải) | SV1 |
| Giáo viên | Thiết kế dự án liên môn | Tạo dự án, phân bổ nhiệm vụ các môn | Màn hình thiết kế dự án | `teacher-project-design.html` | C/R/U/D (lưu trữ) | SV2 |
| Giáo viên | Quản lý thử thách | Tạo thử thách, thang điểm, hạn hoàn thành | Màn hình quản lý thử thách | `teacher-challenge-manage.html` | C/R/U/D (vô hiệu hóa) | SV2 |
| Giáo viên | Chấm điểm và xếp hạng | Chấm dự án/thử thách, nhận xét, xếp hạng | Màn hình chấm điểm | `teacher-grading.html` | R/U (đang chờ, hoàn thành) | SV2 |
| Quản trị viên | Quản lý tài khoản, lớp/khối | Tạo/sửa/xóa tài khoản, gán lớp | Màn hình quản lý người dùng | `admin-user-management.html` | C/R/U/D (lưu trữ) | SV3 |
| Quản trị viên | Cấu hình mô-đun liên môn, huy hiệu | Cấu hình chương trình, huy hiệu, sân chơi | Màn hình cấu hình chương trình | `admin-program-config.html` | R/U (vô hiệu hóa) | SV3 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter, đổi table thành card, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-stem-overview.html` | STEM Overview | R | Xem giới thiệu chương trình STEM liên môn. |
| 2 | `visitor-challenge-preview.html` | Challenge Preview | R | Xem thử một thử thách công khai. |
| 3 | `visitor-topic-feedback.html` | Topic Feedback | C/R | Góp ý chủ đề/dự án cần bổ sung. |

### Học sinh
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ dự án, thử thách, thành tích, bảng xếp hạng. |
| 5 | `student-challenge-arena.html` | Challenge Arena | C/R/U | Tham gia sân chơi thử thách, có đồng hồ và bước giải. |
| 6 | `student-project.html` | Project | C/R/U | Làm dự án liên môn theo từng giai đoạn. |
| 7 | `student-submission.html` | Submission | C/R/U | Nộp bài dự án/thử thách cho giáo viên. |

### Giáo viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 8 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, dự án, thử thách, thành tích. |
| 9 | `teacher-project-design.html` | Project Design | C/R/U/D | Thiết kế dự án liên môn, phân bổ nhiệm vụ. |
| 10 | `teacher-challenge-manage.html` | Challenge Manage | C/R/U/D | Tạo và quản lý thử thách, thang điểm. |
| 11 | `teacher-grading.html` | Grading | R/U | Chấm điểm, nhận xét dự án và thử thách. |
| 12 | `teacher-leaderboard.html` | Leaderboard | R | Xem bảng thành tích/xếp hạng lớp. |

### Quản trị viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 13 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống. |
| 14 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản, lớp/khối. |
| 15 | `admin-program-config.html` | Program Config | R/U | Cấu hình chương trình, mô-đun liên môn, huy hiệu. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (đồng hồ thử thách, tiến độ dự án, bảng thành tích canvas); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tài khoản giáo viên, học sinh, quản trị. |
| `subjects` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Các phân môn STEM (Khoa học, CN, KT, Toán). |
| `projects` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Dự án liên môn. |
| `tasks` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Nhiệm vụ con trong dự án. |
| `challenges` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thử thách sân chơi + thang điểm. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp dự án/thử thách. |
| `scores` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Điểm, thành tích, xếp hạng. |
| `db.json` | — | ✓ | — | — | File mock API chứa các entity trên (JSON Server). |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn STEM tích hợp.

Liệt kê tối thiểu **3 cách truyền đạt** mà nhóm sẽ thực hiện, mỗi cách gắn với một màn hình:

### Cách 1 – Dự án liên môn có sơ đồ kết nối các môn (SVG tương tác)
- **Màn hình áp dụng:** `student-project.html`.
- Vì sao giúp hiểu hơn: mỗi dự án hiển thị sơ đồ giải thích kiến thức của từng môn (Khoa học – Công nghệ – Kỹ thuật – Toán) đóng góp vào giải pháp chung, giúp học sinh nhìn thấy sự liên kết liên môn thay vì học rời rạc.

### Cách 2 – Sân chơi thử thách theo bước có đồng hồ (mô phỏng giải quyết vấn đề)
- **Màn hình áp dụng:** `student-challenge-arena.html`.
- Vì sao giúp hiểu hơn: học sinh giải thử thách qua các bước (quan sát – giả thuyết – thực hiện – kết luận) có đồng hồ đếm và phản hồi tức thời, biến kiến thức liên môn thành trải nghiệm vận dụng thực tế, tạo động lực.

### Cách 3 – Tiến độ dự án + bảng thành tích vẽ bằng canvas
- **Màn hình áp dụng:** `student-dashboard.html` và `teacher-leaderboard.html`.
- Vì sao giúp hiểu hơn: biểu đồ tiến độ hoàn thành nhiệm vụ và bảng xếp hạng theo thành tích giúp học sinh định lượng mức đạt và cạnh tranh lành mạnh, giáo viên theo dõi nhóm dễ dàng.

### Cách 4 – Thẻ flashcard khái niệm liên môn
- **Màn hình áp dụng:** `student-dashboard.html` (mục ôn nhanh).
- Vì sao giúp hiểu hơn: học sinh lật thẻ nhớ khái niệm STEM và thuật ngữ từng môn, củng cố từ vựng và kiến thức nền tảng trước khi vào dự án.

### Cách 5 – Trắc nghiệm nhanh thử thách kèm giải thích
- **Màn hình áp dụng:** `student-challenge-arena.html` (vòng ôn nhanh).
- Vì sao giúp hiểu hơn: câu đố nhanh kèm lời giải thích hướng tiếp cận liên môn giúp học sinh hiểu tại sao một giải pháp đúng, biến phản hồi thành bài học ngắn.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Hướng dẫn thử thách (Challenge Guide)
Phân tích đề thử thách và đưa ra hướng dẫn từng bước, gợi ý tiếp cận liên môn. Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### AI-2 – AI Đánh giá dự án liên môn (Project Evaluator)
Chấm sơ bộ dự án theo tiêu chí (sáng tạo, vận dụng liên môn, trình bày, tính khả thi) và gợi ý cải thiện. Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Đề xuất dự án / lộ trình (Project Advisor)
Đề xuất dự án, thử thách phù hợp trình độ và sở thích của học sinh. Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity chính (mock API – JSON Server / MockAPI / LocalStorage): `users`, `subjects`, `projects`, `tasks`, `challenges`, `submissions`, `scores`. File `db.json` gợi ý chứa bản ghi mẫu theo môn: `subjects` (Khoa học, Công nghệ, Kỹ thuật, Toán), `projects` (dự án liên môn như "Chế tạo cầu chịu lực", "Bộ lọc nước mini"), `tasks` (nhiệm vụ theo giai đoạn), `challenges` (thử thách kèm thang điểm), `scores` (điểm và xếp hạng học sinh). Không bắt buộc backend thật; trọng tâm là trải nghiệm frontend.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Thiết kế dự án liên môn STEM
```text
Tôi là SV môn CSE122 đang làm BTL về "Hệ thống hỗ trợ giảng dạy và học tập môn STEM tích hợp – StemQuest". Hãy giúp tôi thiết kế dự án liên môn "Bộ lọc nước mini" cho học sinh THCS.
+ Giao diện: teacher-project-design.html, xem của giáo viên.
+ Yêu cầu trực quan: chia dự án thành các giai đoạn, gắn kiến thức từng môn (Khoa học, Công nghệ, Kỹ thuật, Toán), phân bổ nhiệm vụ nhóm.
+ Hãy giải thích logic sơ đồ kết nối liên môn sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho StemQuest
```text
Tạo file db.json (JSON Server) cho hệ thống StemQuest, gồm các entity: users, subjects, projects, tasks, challenges, submissions, scores; mỗi entity 5–8 bản ghi mẫu theo môn STEM tích hợp, có id, timestamps, và trường phù hợp nghiệp vụ (phân môn, giai đoạn dự án, thang điểm, xếp hạng). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng sân chơi thử thách có đồng hồ đếm và bước giải trong student-challenge-arena.html, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: Khách + Học sinh. Trách nhiệm chéo: phần giao diện dùng chung, responsive.
### SV2
Phụ trách: Giáo viên. Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.
### SV3
Phụ trách: Quản trị viên + tích hợp bố cục, điều hướng, bảng thành tích. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-stemquest-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS tương tác (sân chơi thử thách + bảng thành tích canvas), TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
├── js/ (main.js, api.js, leaderboard.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): sơ đồ kết nối liên môn, sân chơi thử thách theo bước, tiến độ + bảng thành tích canvas.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; huy hiệu/gamification nâng cao; hoạt ảnh vi mô; PWA.

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
Thang điểm có thể điều chỉnh theo từng kỳ.

## 25. Chuẩn đầu ra mong đợi
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (dự án liên môn, sân chơi thử thách); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.