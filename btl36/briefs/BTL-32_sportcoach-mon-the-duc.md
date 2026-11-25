# BTL-32 – SportCoach – Hệ thống hỗ trợ giảng dạy và học tập môn Giáo dục thể chất

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục phổ thông / Giảng dạy Giáo dục thể chất (thể dục thể thao, rèn luyện thể lực)**

## 2. Tóm tắt sản phẩm

**SportCoach – Hệ thống hỗ trợ giảng dạy và học tập môn Giáo dục thể chất** giúp **giáo viên thể dục** dựng giáo án theo tuần, quản lý thư viện video động tác và chấm điểm kỹ thuật, đồng thời giúp **học sinh** ôn tập động tác qua giáo án trực quan, ghi nhật ký luyện tập và theo dõi tiến độ thể lực bằng biểu đồ. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Giáo dục thể chất là môn bắt buộc ở phổ thông nhưng thời gian thực hành trên lớp hạn chế. Giáo án thường được soạn trên giấy, video và sơ đồ động tác nằm rải rác; học sinh ít có kênh ôn lại kỹ thuật động tác giữa các buổi và khó thấy được sự tiến bộ của bản thân. Giáo viên dựa vào quan sát kinh nghiệm để chấm điểm, khó theo dõi khách quan diễn tiến thể lực của từng em.

## 4. Phát biểu vấn đề

- **P1.** Học sinh không có kênh ôn lại động tác (chạy, bơi, bóng đá, thể dục nhịp điệu) giữa các buổi lên lớp.
- **P2.** Giáo án, video động tác và sơ đồ sân tập nằm rải rác ở nhiều file, khó quản lý và cập nhật theo từng lớp, từng tuần.
- **P3.** Giáo viên chấm điểm kỹ thuật dựa trên quan sát kinh nghiệm, thiếu khách quan và khó theo dõi diễn tiến của học sinh.
- **P4.** Học sinh không có nhật ký luyện tập để tự theo dõi thể lực (quãng chạy, số vòng, thời gian) và chưa được gợi ý bài tập phù hợp năng lực.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Giáo dục thể chất thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (giáo án, video động tác, nhật ký luyện tập, chấm điểm kỹ thuật, giải thi đấu).
- **O4.** Sử dụng JavaScript/DOM cho video động tác, đồ thị tiến độ thể lực vẽ bằng canvas, đồng hồ/hẹn giờ tập, bộ đếm và kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn (mục 12).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa thể chất, thư viện video động tác công khai |
| Học sinh | Học giáo án, ôn video động tác, ghi nhật ký luyện tập, theo dõi tiến độ thể lực |
| Giáo viên | Xây giáo án, quản lý video động tác, chấm & phản hồi kỹ thuật, tổ chức thi đấu |
| Quản trị viên | Quản lý tài khoản, đội/khối lớp, môn thể thao, cấu hình tiết học |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (học giáo án, ôn video, ghi nhật ký, chấm điểm)
↓
Xem trạng thái / dữ liệu / phản hồi (tiến độ thể lực, điểm kỹ thuật)
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
| Học sinh | Ôn đúng động tác | Xem giáo án + video động tác có dừng/điều chỉnh tốc độ | Màn hình học giáo án & video động tác | `student-lesson-view.html` | R (tải/rỗng/lỗi) | SV1 |
| Học sinh | Ghi nhật ký luyện tập | Nhập quãng chạy, số vòng, thời gian theo buổi | Màn hình nhật ký luyện tập | `student-training-log.html` | C/R/U (hoàn thành, lỗi) | SV1 |
| Học sinh | Theo dõi tiến độ thể lực | Xem biểu đồ canvas tiến bộ theo tuần | Màn hình tiến độ thể lực | `student-progress.html` | R (rỗng, tải) | SV1 |
| Giáo viên | Soạn giáo án theo tuần | Tạo giáo án, gắn video + sơ đồ sân tập | Màn hình soạn giáo án | `teacher-lesson-plan.html` | C/R/U/D (lưu trữ, đã hủy) | SV2 |
| Giáo viên | Quản lý video động tác | Thêm/sửa/xóa video, phân loại theo môn | Màn hình quản lý video động tác | `teacher-move-video.html` | C/R/U/D (vô hiệu hóa) | SV2 |
| Giáo viên | Chấm điểm kỹ thuật | Chấm điểm, ghi nhận xét cho từng học sinh | Màn hình chấm điểm kỹ thuật | `teacher-skill-grading.html` | R/U (đang chờ, hoàn thành) | SV2 |
| Quản trị viên | Quản lý tài khoản, khối lớp | Tạo/sửa/xóa tài khoản, gán khối lớp | Màn hình quản lý người dùng | `admin-user-management.html` | C/R/U/D (lưu trữ) | SV3 |
| Quản trị viên | Cấu hình môn thể thao | Cấu hình môn, tiết học, thiết bị sân bãi | Màn hình cấu hình môn thể thao | `admin-sport-config.html` | R/U (vô hiệu hóa) | SV3 |

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
| 1 | `visitor-sport-overview.html` | Sport Overview | R | Xem giới thiệu bộ môn thể chất, các môn thể thao trong hệ thống. |
| 2 | `visitor-clip-preview.html` | Clip Preview | R | Xem thử một video động tác công khai. |
| 3 | `visitor-sport-feedback.html` | Sport Feedback | C/R | Góp ý môn thể thao cần bổ sung bài tập. |

### Học sinh
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ thể lực, lịch tập, thông báo. |
| 5 | `student-lesson-view.html` | Lesson View | R | Xem giáo án + video động tác, sơ đồ sân tập. |
| 6 | `student-training-log.html` | Training Log | C/R/U | Ghi nhật ký luyện tập (quãng chạy, số vòng, thời gian). |
| 7 | `student-progress.html` | Progress | R | Xem biểu đồ tiến bộ thể lực vẽ bằng canvas. |

### Giáo viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 8 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, giáo án, độ tập luyện của lớp. |
| 9 | `teacher-lesson-plan.html` | Lesson Plan | C/R/U/D | Soạn giáo án theo tuần, gắn video và sơ đồ sân tập. |
| 10 | `teacher-move-video.html` | Move Video | C/R/U/D | Quản lý video động tác, phân loại theo môn thể thao. |
| 11 | `teacher-skill-grading.html` | Skill Grading | R/U | Chấm điểm kỹ thuật, ghi nhận xét từng học sinh. |
| 12 | `teacher-tournament.html` | Tournament | C/R/U | Tổ chức thi đấu/bảng thành tích lớp, xếp hạng. |

### Quản trị viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 13 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống. |
| 14 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản giáo viên, học sinh, khối lớp. |
| 15 | `admin-sport-config.html` | Sport Config | R/U | Cấu hình môn thể thao, tiết học, thiết bị sân bãi. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (video, đồng hồ tập, đồ thị canvas); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tài khoản giáo viên, học sinh, quản trị. |
| `sports` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Môn thể thao (điền kinh, bóng đá, bơi...). |
| `lessonPlans` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Giáo án theo tuần/lớp, gắn video và sơ đồ sân. |
| `moves` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Video + mô tả kỹ thuật động tác. |
| `trainingLogs` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Nhật ký luyện tập (quãng chạy, số vòng, thời gian). |
| `skillScores` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Điểm kỹ thuật và nhận xét của giáo viên. |
| `tournaments` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thi đấu và bảng xếp hạng lớp. |
| `db.json` | — | ✓ | — | — | File mock API chứa toàn bộ các entity trên (JSON Server). |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Giáo dục thể chất.

Liệt kê tối thiểu **3 cách truyền đạt** mà nhóm sẽ thực hiện, mỗi cách gắn với một màn hình:

### Cách 1 – Video động tác có điều khiển từng bước (step-by-step)
- **Màn hình áp dụng:** `student-lesson-view.html`.
- Vì sao giúp hiểu hơn: học sinh xem được video động tác, dừng/điều chỉnh tốc độ và xem lại từng cử động kỹ thuật (nhịp chạy, tư thế đá bóng, động tác thể dục nhịp điệu), giúp nắm đúng biên độ và nhịp điệu thay vì chỉ xem một lần trên lớp.

### Cách 2 – Sơ đồ sân tập / hình động tác tương tác (hình ảnh có tooltip)
- **Màn hình áp dụng:** `student-lesson-view.html` và `teacher-lesson-plan.html`.
- Vì sao giúp hiểu hơn: sơ đồ sân tập SVG có chú thích vị trí đứng, đường chạy, khu vực kỹ thuật và tooltip động tác giúp học sinh định vị luồng vận động, giáo viên soạn bài trực quan hơn.

### Cách 3 – Đồ thị tiến độ thể lực vẽ bằng canvas (trực quan hóa dữ liệu)
- **Màn hình áp dụng:** `student-progress.html`.
- Vì sao giúp hiểu hơn: biều đồ đường/cột canvas minh họa diễn biến quãng chạy, số vòng, thời gian theo tuần; học sinh thấy rõ sự tiến bộ, tạo động lực và hiểu mối quan hệ giữa rèn luyện và thể lực.

### Cách 4 – Đồng hồ tập + nhật ký luyện tập có phản hồi nhanh
- **Màn hình áp dụng:** `student-training-log.html`.
- Vì sao giúp hiểu hơn: học sinh ghi số liệu buổi tập theo form có kiểm tra hợp lệ và xem lời khuyên nhanh, hình thành thói quen theo dõi thể lực, gắn lý thuyết (cường độ, quãng nghỉ) với thực hành.

### Cách 5 – Thẻ flashcard kỹ thuật & trắc nghiệm nhanh động tác
- **Màn hình áp dụng:** `student-lesson-view.html` (mục luyện tập nhanh).
- Vì sao giúp hiểu hơn: học sinh tự kiểm tra lại kiến thức về thứ tự động tác, biên độ, lỗi thường gặp qua thẻ lật và câu đố nhanh, củng cố nhớ lâu.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Đánh giá kỹ thuật động tác (Move Analyzer)
Phân tích nhật ký luyện tập (quãng chạy, số vòng, thời gian, tốc độ) so với chuẩn theo khối lớp để gợi ý điểm mạnh-yếu và điều chỉnh. Cách mô phỏng: JSON giả lập + JS theo quy tắc so chỉ số / API LLM tùy chọn.

### AI-2 – AI Gợi ý giáo án (Lesson Planner)
Từ khối lớp, tuần, môn thể thao và năng lực lớp, AI gợi ý giáo án, cường độ và phân bố thời gian. Cách mô phỏng: JSON giả lập + JS theo quy tắc mẫu giáo án / API LLM tùy chọn.

### AI-3 – AI Điều chỉnh bài tập (Adaptive Training)
Dựa vào nhật ký luyện tập, AI gợi ý tăng/giảm cường độ và bài tập bổ trợ. Cách mô phỏng: JSON giả lập + JS theo quy tắc ngưỡng thể lực / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity chính (mock API – JSON Server / MockAPI / LocalStorage): `users`, `sports`, `lessonPlans`, `moves`, `trainingLogs`, `skillScores`, `tournaments`. File `db.json` gợi ý chứa bản ghi mẫu theo môn: `sports` (Điền kinh, Bóng đá, Bơi lội, Thể dục nhịp điệu), `moves` (kỹ thuật chạy, kỹ thuật đá bóng, động tác khởi động), `lessonPlans` (giáo án tuần cho lớp 10, 11, 12), `trainingLogs` (quãng chạy, số vòng, thời gian theo buổi). Không bắt buộc backend thật; trọng tâm là trải nghiệm frontend.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng giáo án thể chất có gắn video động tác
```text
Tôi là SV môn CSE122 đang làm BTL về "Hệ thống hỗ trợ giảng dạy và học tập môn Giáo dục thể chất – SportCoach". Hãy giúp tôi soạn một giáo án tuần cho học sinh lớp 10 môn Điền kinh (kỹ thuật chạy cự ly ngắn).
+ Giao diện: teacher-lesson-plan.html, xem của giáo viên.
+ Yêu cầu trực quan: chia giai đoạn động tác, gắn video kỹ thuật và sơ đồ sân tập SVG, liệt kê lỗi thường gặp.
+ Hãy giải thích logic phân bổ thời gian (khởi động - luyện tập - thả lỏng) sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho SportCoach
```text
Tạo file db.json (JSON Server) cho hệ thống SportCoach, gồm các entity: users, sports, lessonPlans, moves, trainingLogs, skillScores, tournaments; mỗi entity 5–8 bản ghi mẫu theo môn Giáo dục thể chất, có id, timestamps, và trường phù hợp nghiệp vụ (quãng chạy, số vòng, thời gian, điểm kỹ thuật). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng đồ thị tiến độ thể lực bằng canvas trong student-progress.html, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
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
Phụ trách: Quản trị viên + tích hợp bố cục, điều hướng, dashboard. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-sportcoach-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS tương tác (video + đồ thị canvas), TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
├── assets/ (images, icons, videos, data/)
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): video động tác, sơ đồ sân tập tương tác, đồ thị tiến độ thể lực canvas.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; hoạt ảnh vi mô; PWA; GPS/GPX đo quãng chạy.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (video động tác, đồ thị canvas); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.