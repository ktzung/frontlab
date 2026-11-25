# BTL-29 – ArchStudio – Hệ thống hỗ trợ giảng dạy và học tập môn Kiến trúc

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

Giáo dục nghệ thuật – kỹ thuật, đại học / Giảng dạy môn Kiến trúc (nguyên lý thiết kế, công trình, vật liệu, phối cảnh).

## 2. Tóm tắt sản phẩm

**ArchStudio – Hệ thống hỗ trợ giảng dạy và học tập môn Kiến trúc** giúp **giảng viên** dựng học liệu trực quan (bài giảng nguyên lý thiết kế, hồ sơ công trình tiêu biểu, bài tập thiết kế) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (gallery công trình, xem phối cảnh, phác thảo concept, tra vật liệu, bài tập có phản hồi). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Kiến trúc là môn kết hợp nghệ thuật và kỹ thuật, nền tảng cho sinh viên ngành kiến trúc và xây dựng. Hiện nay việc học dựa nhiều vào sách/tạp chí và tham khảo giảng viên; sinh viên khó tìm nguồn cảm hứng, hình dung tỷ lệ/phối cảnh công trình và lựa chọn vật liệu phù hợp với khí hậu + ngân sách. Thư viện công trình mẫu và vật liệu chưa có kênh tra cứu trực quan; phản hồi ý tưởng thiết kế thường chậm. Có nhu cầu một cổng gallery công trình và studio phác thảo concept phối cảnh.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình thành concept thiết kế và phối cảnh ban đầu cho một đồ án kiến trúc.
- **P2.** Thư viện công trình mẫu và vật liệu nằm rải rác ở sách/tạp chí, thiếu kênh tra cứu trực quan.
- **P3.** Giảng viên mất công đánh giá nhiều bài phác thảo ý tưởng, khó đưa phản hồi sớm.
- **P4.** Sinh viên thiếu công cụ để phác thảo, lưu và giới thiệu ý tưởng thiết kế theo từng bước.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy – học Kiến trúc thành một sản phẩm frontend có hành trình người dùng rõ ràng, giao cho nhóm 3 sinh viên.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò, bám sát bảng kiểm kê màn hình.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, công trình mẫu, vật liệu, bài tập, đồ án, đánh giá).
- **O4.** Dùng JavaScript/DOM cho gallery phối cảnh, concept studio, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ, trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API (JSON Server / LocalStorage / MockAPI) kèm `db.json`.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan cho môn kiến trúc.
- **O7.** Tổ chức nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh, có PR, review và video OBS giảng giải.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu môn Kiến trúc, gallery công trình mẫu, vật liệu |
| Sinh viên | Học bài, xem công trình/phối cảnh, phác thảo concept, nộp đồ án, xem tiến độ |
| Giảng viên | Dựng bài giảng, quản lý công trình mẫu/vật liệu/bài tập, đánh giá và phản hồi |
| Quản trị viên | Quản lý tài khoản, cấu hình, duyệt thư viện công trình/vật liệu, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (xem công trình, phác thảo concept, dựng học liệu)
↓
Xem trạng thái / dữ liệu / phản hồi (phản hồi ý tưởng, điểm, tiến độ đồ án)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (sinh concept, gợi ý vật liệu)
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
| Khách | Giới thiệu môn và xem công trình công khai | Xem khóa học, xem gallery công trình | Trang chủ + gallery công trình | `index.html`, `visitor-project-gallery.html` | R | SV1 |
| Sinh viên | Tham khảo công trình và phác thảo concept | Xem phối cảnh, ghi concept | Gallery công trình + concept studio | `student-project-gallery.html`, `student-concept-studio.html` | C/R/U | SV1 |
| Sinh viên | Làm bài tập thiết kế | Nộp đồ án, xem điểm | Làm đồ án | `student-assignment-do.html` | C/R/U | SV1 |
| Giảng viên | Quản lý công trình mẫu và bài giảng | Tạo/sửa hồ sơ công trình, dựng bài giảng | Quản lý công trình + bài giảng | `teacher-project-manage.html`, `teacher-lesson-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Đánh giá đồ án, phản hồi | Chấm đồ án, trả điểm | Đánh giá – phản hồi | `teacher-review.html` | C/R/U | SV2 |
| Quản trị viên | Quản trị tài khoản, duyệt vật liệu | Quản lý người dùng, duyệt vật liệu | Admin dashboard + người dùng + vật liệu | `admin-dashboard.html`, `admin-user-management.html`, `admin-material-management.html` | C/R/U/D | SV3 |

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
| 1 | `visitor-course-overview.html` | Course Overview | R | Giới thiệu môn Kiến trúc, lộ trình học. |
| 2 | `visitor-project-gallery.html` | Project Gallery | R | Xem gallery công trình mẫu công khai. |
| 3 | `visitor-material-library.html` | Material Library | R | Tra cứu vật liệu kiến trúc công khai. |

### Học sinh / Sinh viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ, điểm, đồ án. |
| 5 | `student-lesson-view.html` | Lesson View | R | Học bài giảng nguyên lý thiết kế + phân tích công trình. |
| 6 | `student-project-gallery.html` | Project Gallery | R | Xem chi tiết công trình, phối cảnh, ghi chú (điểm nhấn). |
| 7 | `student-concept-studio.html` | Concept Studio | C/R/U | Phác thảo concept + phối cảnh theo bước. |
| 8 | `student-assignment-do.html` | Assignment Do | C/R/U | Làm bài tập thiết kế, nộp đồ án, xem điểm/phản hồi. |

### Giáo viên / Giảng viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, đồ án, công trình mẫu. |
| 10 | `teacher-lesson-manage.html` | Lesson Manage | C/R/U/D | Dựng bài giảng nguyên lý, phân tích công trình. |
| 11 | `teacher-project-manage.html` | Project Manage | C/R/U/D | Quản lý hồ sơ công trình mẫu, phối cảnh. |
| 12 | `teacher-assignment-build.html` | Assignment Build | C/R/U | Tạo bài tập thiết kế, tiêu chí đánh giá. |
| 13 | `teacher-review.html` | Review | C/R/U | Chấm đồ án, phản hồi và trả điểm sinh viên. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống, thống kê. |
| 15 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản người dùng. |
| 16 | `admin-material-management.html` | Material Management | C/R/U/D | Duyệt và quản lý thư viện vật liệu. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/gallery); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

Cá thể hóa môn kiến trúc: `student-project-gallery.html` là gallery công trình với lightbox xem ảnh phối cảnh, bộ lọc theo phong cách (hiện đại, tối giản, sinh thái...) và ghi chú; `student-concept-studio.html` cho phép ghi ý tưởng chủ đạo, chọn phong cách, kéo các khối hình để phác thảo bố cục mặt bằng/phối cảnh đơn giản trên Canvas; `visitor-material-library.html` trưng bày vật liệu (gỗ, bê tông, kính, thép) kèm thông số công năng.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Tài khoản 4 vai trò. |
| `lessons` | ✓ | ✓ | ✓ | ✓/Archive | Bài giảng nguyên lý thiết kế. |
| `projects` | ✓ | ✓ | ✓ | ✓/Archive | Hồ sơ công trình mẫu + ảnh phối cảnh. |
| `concepts` | ✓ | ✓ | ✓ | ✓/Archive | Ý tưởng thiết kế sinh viên tạo. |
| `materials` | ✓ | ✓ | ✓ | ✓/Archive | Thư viện vật liệu kiến trúc. |
| `assignments` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập thiết kế và tiêu chí. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Đồ án nộp, điểm, phản hồi. |

Thực thể kèm theo `db.json` cho biết cấu trúc: `users {id, role, name, email}`, `projects {id, name, style, area, location, photos[], note}`, `concepts {id, userId, title, style, idea, blocks[], status}`, `materials {id, name, type, use, price, note}`, `submissions {id, userId, assignmentId, conceptRef, score, feedback}`.

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Danh sách 4 cách truyền đạt (tối thiểu 3):

- **1. Gallery công trình kèm lightbox phối cảnh** (`student-project-gallery.html`): xem ảnh phối cảnh chất lượng cao, phóng to, đọc thông số (diện tích, phong cách, vật liệu) gắn trực tiếp. Giúp hình dung **tỷ lệ và không gian** công trình thay vì chỉ đọc mô tả.
- **2. Concept studio phác thảo theo bước** (`student-concept-studio.html`): sinh viên đi từ ý tưởng → phong cách → bố cục khối hình, từng bước có hướng dẫn; có thể tiến/lùi và lưu lại. Giúp hiểu **quy trình hình thành concept** thiết kế.
- **3. Hình ảnh tương tác có tooltip vật liệu** (`visitor-material-library.html`): di chuột vào vùng vật liệu trên ảnh công trình, tooltip hiện tên, công năng, chi phí. Giúp liên hệ vật liệu với tác động thực tế.
- **4. Bài tập thiết kế có tiêu chí và phản hồi từng tiêu chí** (`student-assignment-do.html`): nộp đồ án được chấm theo bảng tiêu chí (ý tưởng, bố cục, vật liệu), mỗi tiêu chí có nhận xét. Giúp sinh viên biết mình cải thiện ở đâu.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Concept Generator (sinh concept thiết kế)
Từ loại công trình, địa điểm, phong cách, quy mô → sinh concept sơ bộ gồm ý tưởng chủ đạo, bố cục không gian và gợi ý phối cảnh. Mô phỏng bằng JSON giả lập + JS theo quy tắc mẫu concept theo phong cách; API LLM tùy chọn.

### AI-2 – AI Material Advisor (gợi ý vật liệu)
Từ khí hậu, ngân sách, công năng, thẩm mỹ → gợi ý vật liệu sàn/tường/mái/kính kèm giải thích lý do chọn. Mô phỏng bằng JSON giả lập theo bảng vật liệu theo điều kiện.

### AI-3 – AI Perspective Coach (đánh giá phối cảnh)
Từ mô tả/phác thảo bố cục phối cảnh → nhận xét tỷ lệ, điểm nhìn, ánh sáng và gợi ý cải thiện. Mô phỏng bằng JSON giả lập theo quy tắc kiểm tra tỷ lệ/bố cục.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `lessons`, `projects`, `concepts`, `materials`, `assignments`, `submissions`. Triển khai bằng JSON cục bộ / `db.json` (JSON Server) / LocalStorage / MockAPI / public API tùy chọn. Không bắt buộc backend thật.

`db.json` gợi ý môn kiến trúc: mảng `projects` mẫu 6–8 bản ghi như `{id:1, name:"Nhà Mặt Tiền Tối Giản", style:"Tối giản", area:120, location:"Hà Nội", photos:["phoi1.jpg","phoi2.jpg"], materials:["bê tông","kính"]}`; mảng `materials` mẫu như `{id:1, name:"Kính cường lực", type:"kính", use:"mặt dựng, vách", price:"1.2tr/m²", note:"truyền sáng, cách âm"}`; mảng `assignments` mẫu có `{id:1, title:"Thiết kế nhà phố 5 tầng", criteria:[{name:"ý tưởng",weight:40},{name:"bố cục",weight:40},{name:"vật liệu",weight:20}]}`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Kiến trúc (sản phẩm ArchStudio).
Hãy giúp tôi tạo nội dung bài giảng "Nguyên lý phối cảnh một điểm tụ" cho trang student-lesson-view.html,
dành cho sinh viên. Hãy trình bày dạng sơ đồ + các bước vẽ phối cảnh, kèm một ví dụ công trình
phân tích tỷ lệ và điểm nhìn. Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống ArchStudio gồm các entity users, lessons, projects,
concepts, materials, assignments, submissions; mỗi entity 5–8 bản ghi mẫu theo môn Kiến trúc
(công trình có phong cách/diện tích/ảnh phối cảnh, vật liệu có công năng/giá, bài tập có tiêu chí đánh giá),
có id, timestamps và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước: tôi muốn dựng gallery công trình có lightbox
phối cảnh bằng HTML/CSS/JS thuần cho trang student-project-gallery.html. Hỏi tôi cần gì,
sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: [Khách + Sinh viên]. Trách nhiệm chéo: [gallery phối cảnh lightbox, concept studio, responsive].
### SV2
Phụ trách: [Giáo viên/Giảng viên]. Trách nhiệm chéo: [JavaScript / dữ liệu / logic sinh concept / mock API; review PR].
### SV3
Phụ trách: [Quản trị viên + tích hợp bố cục, điều hướng, dashboard, thư viện vật liệu]. Trách nhiệm chéo: [nhất quán toàn dự án, bao phủ trạng thái, phát hành].

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-archstudio-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat: add project gallery with lightbox`, `feat: generate concept from rule templates`, `fix: validate empty assignment form`, `style: improve gallery responsive card`, `refactor: split reusable material modules`, `docs: update screen list and obs links`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS gallery + lightbox phối cảnh + concept studio, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-project-gallery.mp4
SV2-01-teacher-project-manage.mp4
SV3-01-admin-material-management.mp4
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
├── assets/ (images, icons, data, project-photos)
├── css/ (style.css, responsive.css, gallery.css)
├── js/ (main.js, api.js, concept-gen.js, gallery.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): gallery lightbox phối cảnh, concept studio theo bước, tooltip vật liệu.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng; thư viện vật liệu tra cứu.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; flatten concept ra hình sketch; hoạt ảnh vi mô; PWA; cá nhân hóa.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (gallery lightbox, concept studio); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.