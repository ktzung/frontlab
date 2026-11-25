# BTL-28 – BuildEdu – Hệ thống hỗ trợ giảng dạy và học tập môn Kỹ thuật xây dựng

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

Giáo dục kỹ thuật – đại học / Giảng dạy môn Kỹ thuật xây dựng (kết cấu, tải trọng, vật liệu, bản vẽ kỹ thuật).

## 2. Tóm tắt sản phẩm

**BuildEdu – Hệ thống hỗ trợ giảng dạy và học tập môn Kỹ thuật xây dựng** giúp **giảng viên** dựng học liệu trực quan (bài giảng kết cấu, bản vẽ mẫu, bài tập tính tải trọng) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (vẽ bản vẽ kỹ thuật trên Canvas, máy tính tải trọng, tra thư viện vật liệu, bài tập có lời giải từng bước). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Kỹ thuật xây dựng là môn cốt lõi cho sinh viên ngành xây dựng, kiến trúc công trình và hạ tầng kỹ thuật. Hiện tại giảng dạy chủ yếu bằng giáo trình giấy và bài tập thủ công; sinh viên khó hình dung cách quy tải về dầm/cột/sàn, cộng tổ hợp tải trọng theo quy chuẩn và dựng/đọc bản vẽ kỹ thuật. Thông số vật liệu (bê tông, thép, gạch) và ký hiệu bản vẽ chưa có kênh tra cứu trực quan. Có nhu cầu một cổng vẽ bản vẽ kỹ thuật và máy tính tải trọng để kiểm chứng nhanh đáp số.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung cách quy tải về dầm/cột/sàn và cộng tổ hợp tĩnh tải + hoạt tải theo quy chuẩn.
- **P2.** Tra cứu thông số vật liệu (bê tông, thép, gạch) và ký hiệu bản vẽ kỹ thuật rải rác, thiếu kênh trực quan.
- **P3.** Giảng viên mất công chấm bài tính kết cấu và khó phát hiện sớm lỗi hệ thống (thiếu tải, sai hệ số).
- **P4.** Sinh viên không có công cụ để tự vẽ và kiểm tra nhanh bản vẽ kỹ thuật cùng đáp số tính tải trọng.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy – học Kỹ thuật xây dựng thành một sản phẩm frontend có hành trình người dùng rõ ràng, giao cho nhóm 3 sinh viên.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò, bám sát bảng kiểm kê màn hình.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, bản vẽ mẫu, vật liệu, bài tập, bài nộp, chấm điểm).
- **O4.** Dùng JavaScript/DOM cho vẽ bản vẽ kỹ thuật Canvas, máy tính tải trọng, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ, trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API (JSON Server / LocalStorage / MockAPI) kèm `db.json`.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan cho môn xây dựng.
- **O7.** Tổ chức nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh, có PR, review và video OBS giảng giải.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu môn xây dựng, thư viện bản vẽ mẫu, thư viện vật liệu |
| Sinh viên | Học bài, vẽ bản vẽ, tính tải trọng, làm bài tập, nộp bài, xem tiến độ |
| Giảng viên | Dựng bài giảng, quản lý bản vẽ mẫu/vật liệu/bài tập, chấm và phản hồi |
| Quản trị viên | Quản lý tài khoản, cấu hình, duyệt thư viện vật liệu, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (vẽ bản vẽ, tính tải, dựng học liệu)
↓
Xem trạng thái / dữ liệu / phản hồi (đáp số tải, điểm, phản hồi bài tập)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (ước tính tải, đọc bản vẽ)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên chấm, admin duyệt vật liệu)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã
| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Giới thiệu môn và tra vật liệu công khai | Xem khóa học, xem vật liệu | Trang chủ + thư viện vật liệu | `index.html`, `visitor-material-library.html` | R | SV1 |
| Sinh viên | Vẽ bản vẽ và tính tải trọng | Vẽ bản vẽ, tính tải tĩnh/hoạt | Vẽ bản vẽ + máy tính tải | `student-drafting-canvas.html`, `student-load-calculator.html` | C/R/U | SV1 |
| Sinh viên | Làm bài tập tính tải | Giải bài, nộp bài, xem điểm | Làm bài tập | `student-exercise-do.html` | C/R/U | SV1 |
| Giảng viên | Quản lý bản vẽ mẫu và bài giảng | Tạo/sửa bản vẽ, dựng bài giảng | Quản lý bản vẽ + bài giảng | `teacher-drawing-manage.html`, `teacher-lesson-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Chấm bài, phản hồi | Chấm bài nộp, trả điểm | Chấm – phản hồi | `teacher-grading.html` | C/R/U | SV2 |
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
| 1 | `visitor-course-overview.html` | Course Overview | R | Giới thiệu môn Kỹ thuật xây dựng, lộ trình học. |
| 2 | `visitor-drawing-library.html` | Drawing Library | R | Xem thư viện bản vẽ kỹ thuật mẫu công khai. |
| 3 | `visitor-material-library.html` | Material Library | R | Tra cứu thông số vật liệu xây dựng. |

### Học sinh / Sinh viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ, điểm, lịch học. |
| 5 | `student-lesson-view.html` | Lesson View | R | Học bài giảng về kết cấu, tải trọng, vật liệu. |
| 6 | `student-drafting-canvas.html` | Drafting Canvas | C/R/U | Vẽ bản vẽ kỹ thuật trên Canvas theo lớp (điểm nhấn). |
| 7 | `student-load-calculator.html` | Load Calculator | C/U | Tính tải tĩnh/hoạt + tổ hợp tải trọng. |
| 8 | `student-exercise-do.html` | Exercise Do | C/R/U | Làm bài tập tính tải trọng, nộp bài, xem lời giải từng bước. |

### Giáo viên / Giảng viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bản vẽ mẫu, bài tập, bài nộp. |
| 10 | `teacher-lesson-manage.html` | Lesson Manage | C/R/U/D | Dựng bài giảng về kết cấu, tải trọng, vật liệu. |
| 11 | `teacher-drawing-manage.html` | Drawing Manage | C/R/U/D | Tạo/sửa bản vẽ mẫu, gán bài tính tải. |
| 12 | `teacher-exercise-build.html` | Exercise Build | C/R/U | Tạo bài tập tính tải trọng, đáp số, lời giải từng bước. |
| 13 | `teacher-grading.html` | Grading | C/R/U | Chấm bài, phản hồi và trả điểm sinh viên. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống, thống kê. |
| 15 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản người dùng. |
| 16 | `admin-material-management.html` | Material Management | C/R/U/D | Duyệt và quản lý thư viện vật liệu, tiêu chuẩn. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

Cá thể hóa môn xây dựng: `student-drafting-canvas.html` là Canvas vẽ bản vẽ kỹ thuật theo lớp (tường, dầm, cột, kích thước) dùng chuột kéo – thả hình học; `student-load-calculator.html` nhập diện tích sàn, số tầng, loại mái, chọn loại vật liệu → hệ thống quy tải về dầm/cột, cộng tĩnh tải + hoạt tải và hiển thị tổng hợp tải kèm cảnh báo vượt ngưỡng; `visitor-material-library.html` hiển thị bảng cường độ bê tông (B15, B20...), mác thép (CB300-V, CB400-V), khối lượng riêng vật liệu.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Tài khoản 4 vai trò. |
| `lessons` | ✓ | ✓ | ✓ | ✓/Archive | Bài giảng kết cấu, tải trọng, vật liệu. |
| `drawings` | ✓ | ✓ | ✓ | ✓/Archive | Bản vẽ kỹ thuật mẫu (dữ liệu các lớp Canvas). |
| `materials` | ✓ | ✓ | ✓ | ✓/Archive | Thư viện vật liệu + cường độ + tiêu chuẩn. |
| `exercises` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập tính tải trọng, chọn tiết diện. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, đáp số, điểm, phản hồi. |
| `loadPresets` | ✓ | ✓ | ✓ | ✓/Archive | Bộ quy đổi tải trọng tiêu chuẩn. |

Thực thể kèm theo `db.json` cho biết cấu trúc: `users {id, role, name, email}`, `materials {id, name, grade, density, strengthClass, note}`, `drawings {id, title, layers, coordinates, dimension}`, `exercises {id, type, params, answer, steps}`, `loadPresets {id, name, value, unit}`.

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Danh sách 4 cách truyền đạt (tối thiểu 3):

- **1. Vẽ bản vẽ kỹ thuật trên Canvas theo lớp** (`student-drafting-canvas.html`): sinh viên dựng tường, dầm, cột, ghi kích thước trên lưới tọa độ, bật/tắt từng lớp. Giúp hiểu **cấu tạo và ký hiệu** bản vẽ kỹ thuật một cách trực quan thay vì chỉ đọc tĩnh.
- **2. Máy tính tải trọng từng bước** (`student-load-calculator.html`): nhập thông số công trình, hệ thống hiển thị từng bước quy tải về dầm/cột, cộng tĩnh tải + hoạt tải kèm công thức. Giúp hiểu **chain tính toán và tổ hợp tải**.
- **3. Bảng tra vật liệu tương tác có tooltip** (`visitor-material-library.html`): di chuột vào bê tông B20 hoặc thép CB400-V hiện tooltip về cường độ, công dụng, cách áp dụng. Giúp tra cứu nhanh và nhớ thông số vật liệu.
- **4. Bài tập tính tải có lời giải từng bước** (`student-exercise-do.html`): bài chia thành bước nhập số liệu → áp công thức → đáp số, có nút tiến/lùi. Giúp sinh viên tự kiểm tra đúng sai từng khâu.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Load & Structure Estimator (ước tính tải/kết cấu)
Từ mô tả công trình (diện tích sàn, số tầng, loại mái, vị trí dầm/cột) → ước tính tĩnh tải, hoạt tải, tải gió sơ bộ và gợi ý tiết diện dầm/cột kèm giải thích cách chọn. Mô phỏng bằng JSON giả lập + JS theo quy tắc bảng quy đổi/hệ số an toàn; API LLM tùy chọn.

### AI-2 – AI Drawing Reader (đọc bản vẽ)
Từ mô tả/tải bản vẽ hoặc chọn vùng trên Canvas → nhận diện ký hiệu, liệt kê thông số chính (cao độ, kích thước, cấp bê tông) và phát hiện thiếu sót. Mô phỏng bằng JSON giả lập theo quy tắc gắn cờ vùng Canvas.

### AI-3 – AI Material Advisor (gợi ý vật liệu)
Từ yêu cầu kết cấu (chịu nén, chống thấm, môi trường ẩm) → gợi ý vật liệu phù hợp và cảnh báo khi chọn vượt cường độ/thiếu kinh tế. Mô phỏng bằng JSON giả lập theo bảng vật liệu chuẩn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `lessons`, `drawings`, `materials`, `exercises`, `submissions`, `loadPresets`. Triển khai bằng JSON cục bộ / `db.json` (JSON Server) / LocalStorage / MockAPI / public API tùy chọn. Không bắt buộc backend thật.

`db.json` gợi ý môn xây dựng: mảng `materials` mẫu 6–8 bản ghi như `{id:1, name:"Bê tông B20", grade:"B20", strengthClass:"M250", density:2500, note:"Kết cấu chịu lực thông thường"}`; mảng `loadPresets` mẫu như `{id:1, name:"Hoạt tải sàn văn phòng", value:2, unit:"kN/m²"}`; mảng `exercises` mẫu với `{id:1, type:"load", params:{floorArea:100, floors:3, roof:"BTCT"}, answer:..., steps:[...]}`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Kỹ thuật xây dựng (sản phẩm BuildEdu).
Hãy giúp tôi tạo nội dung bài giảng "Quy tải và tổ hợp tải trọng" cho trang student-lesson-view.html,
dành cho sinh viên. Hãy trình bày dạng sơ đồ quy tải + bảng hệ số, kèm một ví dụ số
tính tĩnh tải và hoạt tải có lời giải từng bước. Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống BuildEdu gồm các entity users, lessons, drawings,
materials, exercises, submissions, loadPresets; mỗi entity 5–8 bản ghi mẫu theo môn Kỹ thuật xây dựng
(vật liệu bê tông/thép có cường độ, bản vẽ có tọa độ các lớp, bài tập tính tải có đáp số và các bước giải),
có id, timestamps và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước: tôi muốn dựng máy tính tải trọng
(tĩnh tải + hoạt tải) bằng JavaScript thuần cho trang student-load-calculator.html. Hỏi tôi cần gì,
sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: [Khách + Sinh viên]. Trách nhiệm chéo: [vẽ bản vẽ Canvas, máy tính tải trọng, responsive].
### SV2
Phụ trách: [Giáo viên/Giảng viên]. Trách nhiệm chéo: [JavaScript / dữ liệu / logic tính tải / mock API; review PR].
### SV3
Phụ trách: [Quản trị viên + tích hợp bố cục, điều hướng, dashboard, thư viện vật liệu]. Trách nhiệm chéo: [nhất quán toàn dự án, bao phủ trạng thái, phát hành].

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-buildeedu-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat: add drafting canvas with layers`, `feat: compute static/active load via js rules`, `fix: validate empty drawing form`, `style: improve mobile canvas controls`, `refactor: split reusable drawing modules`, `docs: update screen list and obs links`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS canvas vẽ bản vẽ + máy tính tải, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-drafting-canvas.mp4
SV2-01-teacher-drawing-manage.mp4
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
├── assets/ (images, icons, data, drawing-symbols)
├── css/ (style.css, responsive.css, drafting.css)
├── js/ (main.js, api.js, load-calc.js, drawing-canvas.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): vẽ bản vẽ Canvas theo lớp, máy tính tải từng bước, bảng tra vật liệu tooltip.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng; thư viện vật liệu tra cứu.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; xuất bản vẽ PNG/PDF; hoạt ảnh vi mô; PWA; cá nhân hóa.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (vẽ bản vẽ kỹ thuật, máy tính tải trọng); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.