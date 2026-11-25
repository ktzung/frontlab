# BTL-31 – AgriAcademy – Hệ thống hỗ trợ giảng dạy và học tập môn Nông nghiệp

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

Giáo dục nông nghiệp – ứng dụng, đại học / Giảng dạy môn Nông nghiệp (mùa vụ, trồng trọt, chăn nuôi, sâu bệnh, kỹ thuật canh tác).

## 2. Tóm tắt sản phẩm

**AgriAcademy – Hệ thống hỗ trợ giảng dạy và học tập môn Nông nghiệp** giúp **giảng viên** dựng học liệu trực quan (bài giảng kỹ thuật trồng trọt/chăn nuôi, hồ sơ cây trồng, bài tập chẩn đoán) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (lịch mùa vụ cá nhân hóa, nhật ký canh tác, thư viện cây trồng/sâu bệnh, bài tập có lời giải từng bước). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Nông nghiệp là môn ứng dụng cho sinh viên ngành nông nghiệp, trồng trọt, chăn nuôi và phát triển nông thôn. Hiện nay kiến thức, lịch thời vụ và quy trình kỹ thuật nằm rải rác ở tài liệu; sinh viên gặp khó khi lập lịch mùa vụ phù hợp vùng/cây, nhận biết và phòng trị sâu bệnh, quản lý nhật ký canh tác và tổ chức chăm sóc cây trồng/vật nuôi. Chưa có kênh trực quan để theo dõi mùa vụ và chẩn đoán sâu bệnh nhanh. Có nhu cầu một cổng lịch mùa vụ + nhật ký + chuẩn đoán sâu bệnh.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó lập và theo dõi lịch mùa vụ theo vùng/loại cây trồng.
- **P2.** Tra cứu kỹ thuật canh tác, nhận biết sâu bệnh và quy trình phòng trừ rải rác, thiếu kênh học trực quan.
- **P3.** Giảng viên mất công chấm bài và phản hồi về quy trình kỹ thuật, khó phát hiện sớm sai sót.
- **P4.** Sinh viên không có công cụ ghi nhật ký mùa vụ và chẩn đoán sâu bệnh từ mô tả nhanh chóng.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy – học Nông nghiệp thành một sản phẩm frontend có hành trình người dùng rõ ràng, giao cho nhóm 3 sinh viên.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò, bám sát bảng kiểm kê màn hình.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, cây trồng, lịch vụ, nhật ký, sâu bệnh, bài tập, đánh giá).
- **O4.** Dùng JavaScript/DOM cho lịch mùa vụ, nhật ký canh tác, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ, trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API (JSON Server / LocalStorage / MockAPI) kèm `db.json`.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan cho môn nông nghiệp.
- **O7.** Tổ chức nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh, có PR, review và video OBS giảng giải.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu môn, thư viện cây trồng, hướng dẫn lịch mùa vụ |
| Sinh viên | Học bài, lập lịch mùa vụ, ghi nhật ký canh tác, chẩn đoán sâu bệnh, xem tiến độ |
| Giảng viên | Dựng bài giảng, quản lý cây trồng/lịch vụ/bài tập, đánh giá và phản hồi |
| Quản trị viên | Quản lý tài khoản, cấu hình, duyệt thư viện cây trồng/sâu bệnh, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (lập lịch vụ, ghi nhật ký, dựng học liệu)
↓
Xem trạng thái / dữ liệu / phản hồi (lịch mùa vụ, điểm, nhật ký canh tác)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (chẩn đoán sâu bệnh, lập lịch vụ)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên đánh giá, admin duyệt thư viện)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã
| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Giới thiệu môn và xem cây trồng | Xem khóa học, xem thư viện cây công khai | Trang chủ + thư viện cây trồng | `index.html`, `visitor-crop-library.html` | R | SV1 |
| Sinh viên | Lập lịch mùa vụ và ghi nhật ký | Tạo lịch vụ, ghi hoạt động theo ngày | Lịch mùa vụ + nhật ký | `student-season-calendar.html`, `student-crop-journal.html` | C/R/U/D | SV1 |
| Sinh viên | Chẩn đoán sâu bệnh và làm bài | Mô tả triệu chứng, làm bài tập | Chẩn đoán + làm bài tập | `student-pest-diagnose.html`, `student-exercise-do.html` | C/R/U | SV1 |
| Giảng viên | Quản lý cây trồng và bài giảng | Tạo/sửa hồ sơ cây, dựng bài giảng | Quản lý cây trồng + bài giảng | `teacher-crop-manage.html`, `teacher-lesson-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Đánh giá bài, phản hồi | Chấm bài nộp, trả điểm | Chấm – phản hồi | `teacher-grading.html` | C/R/U | SV2 |
| Quản trị viên | Quản trị tài khoản, duyệt sâu bệnh | Quản lý người dùng, duyệt hồ sơ sâu bệnh | Admin dashboard + người dùng + sâu bệnh | `admin-dashboard.html`, `admin-user-management.html`, `admin-pest-management.html` | C/R/U/D | SV3 |

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

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-course-overview.html` | Course Overview | R | Giới thiệu môn Nông nghiệp, lộ trình học. |
| 2 | `visitor-crop-library.html` | Crop Library | R | Thư viện cây trồng + kỹ thuật canh tác công khai. |
| 3 | `visitor-season-guide.html` | Season Guide | R | Hướng dẫn lịch mùa vụ công khai. |

### Học sinh / Sinh viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ, điểm, lịch vụ sắp tới. |
| 5 | `student-lesson-view.html` | Lesson View | R | Học bài giảng kỹ thuật trồng trọt, chăn nuôi, sâu bệnh. |
| 6 | `student-season-calendar.html` | Season Calendar | C/R/U | Lập lịch mùa vụ cá nhân hóa theo giai đoạn (điểm nhấn). |
| 7 | `student-crop-journal.html` | Crop Journal | C/R/U/D | Ghi nhật ký canh tác theo ngày/vụ. |
| 8 | `student-pest-diagnose.html` | Pest Diagnose | C/R/U | Mô tả triệu chứng, tra mức thiệt hại và biện pháp phòng trị. |

### Giáo viên / Giảng viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bài tập, cây trồng. |
| 10 | `teacher-lesson-manage.html` | Lesson Manage | C/R/U/D | Dựng bài giảng kỹ thuật canh tác. |
| 11 | `teacher-crop-manage.html` | Crop Manage | C/R/U/D | Quản lý hồ sơ cây trồng, quy trình chăm sóc. |
| 12 | `teacher-exercise-build.html` | Exercise Build | C/R/U | Tạo bài tập kỹ thuật, bài tập chẩn đoán, lời giải. |
| 13 | `teacher-grading.html` | Grading | C/R/U | Đánh giá bài nộp, phản hồi và trả điểm sinh viên. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống, thống kê. |
| 15 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản người dùng. |
| 16 | `admin-pest-management.html` | Pest Management | C/R/U/D | Duyệt và quản lý thư viện sâu bệnh. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

Cá thể hóa môn nông nghiệp: `student-season-calendar.html` là lịch mùa vụ dạng lưới tháng với các giai đoạn (gieo, chăm sóc, bón phân, thu hoạch) được tô màu, nhóm có thể kéo dời giai đoạn theo vùng/cây; `student-crop-journal.html` ghi nhật ký hoạt động hằng ngày kèm ảnh/ghi chú; `student-pest-diagnose.html` cho người dùng chọn cây + gõ triệu chứng (lá vàng, đục thân, đốm lá) và hệ thống khớp với hồ sơ sâu bệnh trong thư viện để đưa kết luận sơ bộ.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Tài khoản 4 vai trò. |
| `lessons` | ✓ | ✓ | ✓ | ✓/Archive | Bài giảng trồng trọt, chăn nuôi, phòng trừ sâu bệnh. |
| `crops` | ✓ | ✓ | ✓ | ✓/Archive | Hồ sơ cây trồng + quy trình chăm sóc. |
| `seasons` | ✓ | ✓ | ✓ | ✓/Archive | Lịch thời vụ theo vùng/cây, các giai đoạn. |
| `cropJournals` | ✓ | ✓ | ✓ | ✓/Archive | Nhật ký canh tác theo ngày/vụ. |
| `pests` | ✓ | ✓ | ✓ | ✓/Archive | Thư viện sâu bệnh + cách phòng trị. |
| `exercises` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập kỹ thuật, bài tập chẩn đoán. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, điểm, phản hồi. |

Thực thể kèm theo `db.json` cho biết cấu trúc: `users {id, role, name, email}`, `crops {id, name, region, season, careStep[], note}`, `seasons {id, cropId, region, start, phases:[{phase,from,to}]}`, `pests {id, name, cropId, symptoms[], harmLevel, remedy}`, `submissions {id, userId, exerciseId, answer, score, status}`.

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Danh sách 4 cách truyền đạt (tối thiểu 3):

- **1. Lịch mùa vụ tương tác theo giai đoạn** (`student-season-calendar.html`): lịch lưới tháng với giai đoạn gieo – chăm sóc – bón phân – thu hoạch được tô màu, kéo dời được. Giúp sinh viên **hình dung chuỗi thời vụ** và lập kế hoạch cho từng cây/vùng.
- **2. Nhật ký canh tác theo ngày** (`student-crop-journal.html`): ghi lại hoạt động, ảnh, ghi chú theo ngày; xem lịch sử theo vụ. Giúp sinh viên **theo dõi và đối chiếu** tiến trình chăm sóc với tiêu chuẩn kỹ thuật.
- **3. Chuẩn đoán sâu bệnh từ mô tả** (`student-pest-diagnose.html`): chọn cây + triệu chứng → hệ thống khớp với hồ sơ sâu bệnh, hiện mức thiệt hại và biện pháp phòng trị. Giúp sinh viên **thực hành chẩn đoán** và ghi nhớ cách xử lý.
- **4. Bài tập chẩn đoán có lời giải từng bước** (`student-exercise-do.html`): bài đưa tình huống triệu chứng, sinh viên chọn kết luận, từng bước có giải thích đúng/sai. Giúp củng cố tư duy chuẩn đoán một cách lặp lại an toàn.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Pest Diagnostician (chẩn đoán sâu bệnh từ mô tả)
Từ mô tả triệu chứng (lá vàng, sâu đục thân, đốm lá) và loại cây → gợi ý sâu bệnh có khả năng, mức độ thiệt hại và biện pháp phòng trị. Mô phỏng bằng JSON giả lập + JS theo quy tắc khớp triệu chứng (keyword/ma trận); API LLM tùy chọn.

### AI-2 – AI Season Planner (lập lịch mùa vụ)
Từ loại cây, vùng canh tác, thời điểm bắt đầu → gợi ý lịch các giai đoạn (gieo, chăm sóc, bón phân, thu hoạch) kèm chú ý thời tiết. Mô phỏng bằng JSON giả lập theo bảng thời vụ theo vùng.

### AI-3 – AI Crop Care Advisor (gợi ý chăm sóc/đầu tư)
Từ giai đoạn sinh trưởng và tình hình nhật ký → gợi ý kế hoạch chăm sóc, bón phân, phòng trừ sâu bệnh và ước tính vật tư. Mô phỏng bằng JSON giả lập theo quy tắc giai đoạn sinh trưởng.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `lessons`, `crops`, `seasons`, `cropJournals`, `pests`, `exercises`, `submissions`. Triển khai bằng JSON cục bộ / `db.json` (JSON Server) / LocalStorage / MockAPI / public API tùy chọn. Không bắt buộc backend thật.

`db.json` gợi ý môn nông nghiệp: mảng `crops` mẫu 6–8 bản ghi như `{id:1, name:"Lúa", region:"Đồng bằng sông Hồng", season:"Xuân-Hè", careStep:[{step:1,title:"gieo"},{step:2,title:"cấy"}]}`; mảng `pests` mẫu như `{id:1, name:"Sâu cuốn lá", cropId:1, symptoms:["lá quăn","đục thân"], harmLevel:"cao", remedy:"phun thuốc sinh học + dẫn dụ"}`; mảng `seasons` mẫu dạng `{id:1, cropId:1, region:"Bắc Bộ", phases:[{phase:"gieo",from:"2025-02-10",to:"2025-02-20"}]}`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Nông nghiệp (sản phẩm AgriAcademy).
Hãy giúp tôi tạo nội dung bài giảng "Quy trình trồng và chăm sóc cây lúa" cho trang student-lesson-view.html,
dành cho sinh viên. Hãy trình bày dạng sơ đồ giai đoạn + bảng kỹ thuật, kèm một ví dụ
lập lịch mùa vụ có giai đoạn cụ thể. Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống AgriAcademy gồm các entity users, lessons, crops,
seasons, cropJournals, pests, exercises, submissions; mỗi entity 5–8 bản ghi mẫu theo môn Nông nghiệp
(cây trồng có vùng/season/quy trình chăm sóc, lịch thời vụ có các giai đoạn, sâu bệnh có triệu chứng và
cách phòng trị), có id, timestamps và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước: tôi muốn dựng lịch mùa vụ dạng lưới tháng
bằng JavaScript thuần cho trang student-season-calendar.html (tô màu giai đoạn, kéo dời). Hỏi tôi cần gì,
sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: [Khách + Sinh viên]. Trách nhiệm chéo: [lịch mùa vụ, nhật ký canh tác, chuẩn đoán sâu bệnh, responsive].
### SV2
Phụ trách: [Giáo viên/Giảng viên]. Trách nhiệm chéo: [JavaScript / dữ liệu / logic chuẩn đoán sâu bệnh / mock API; review PR].
### SV3
Phụ trách: [Quản trị viên + tích hợp bố cục, điều hướng, dashboard, thư viện sâu bệnh]. Trách nhiệm chéo: [nhất quán toàn dự án, bao phủ trạng thái, phát hành].

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-agriacademy-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat: add season calendar with crop phases`, `feat: compute pest matches via symptom rules`, `fix: validate empty crop journal form`, `style: improve mobile calendar layout`, `refactor: split reusable crop modules`, `docs: update screen list and obs links`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS lịch mùa vụ + nhật ký + chuẩn đoán sâu bệnh, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-season-calendar.mp4
SV2-01-teacher-crop-manage.mp4
SV3-01-admin-pest-management.mp4
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
├── assets/ (images, icons, data, crop-icons)
├── css/ (style.css, responsive.css, calendar.css)
├── js/ (main.js, api.js, season-calendar.js, crop-journal.js, pest-diagnose.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): lịch mùa vụ tương tác, nhật ký canh tác, chuẩn đoán sâu bệnh từ mô tả.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi cảnh báo sâu bệnh; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng; thư viện cây trồng tra cứu.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; hoạt ảnh vi mô; PWA; cá nhân hóa; khuyến nghị thời tiết.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (lịch mùa vụ, nhật ký canh tác, chuẩn đoán sâu bệnh); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.