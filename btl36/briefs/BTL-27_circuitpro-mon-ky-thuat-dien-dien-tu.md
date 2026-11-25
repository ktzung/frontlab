# BTL-27 – CircuitPro – Hệ thống hỗ trợ giảng dạy và học tập môn Kỹ thuật điện – điện tử

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

Giáo dục kỹ thuật – đại học / Giảng dạy môn Kỹ thuật điện – điện tử (mạch điện, linh kiện, định luật Ohm, công suất, KCL/KVL).

## 2. Tóm tắt sản phẩm

**CircuitPro – Hệ thống hỗ trợ giảng dạy và học tập môn Kỹ thuật điện – điện tử** giúp **giảng viên** dựng học liệu trực quan (bài giảng linh kiện, mạch mẫu, bài tập tính toán điện) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (mô phỏng mạch kéo-thả, máy tính Ohm, kho tra vạch màu linh kiện, bài tập có lời giải từng bước). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Kỹ thuật điện – điện tử là môn nền tảng cho sinh viên ngành điện, điện tử, cơ điện tử và tự động hóa. Hiện nay phần lớn giảng dạy dùng giáo trình giấy kèm bài tập tính toán thủ công; sinh viên khó quan sát quan hệ giữa điện trở – dòng – áp và phân biệt mạch nối tiếp/song song/hỗn hợp. Kho linh kiện và cách đọc vạch màu, datasheet cũng chưa có kênh tra cứu trực quan. Có nhu cầu rõ ràng về một cổng mô phỏng mạch và máy tính điện để kiểm chứng nhanh đáp số.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung quan hệ điện trở – dòng – áp và phân biệt mạch nối tiếp/song song/hỗn hợp khi chỉ học trên giấy.
- **P2.** Nhận diện linh kiện (đọc vạch màu điện trở, tra datasheet, ký hiệu sơ đồ) tốn thời gian và thiếu một kênh tra cứu thống nhất.
- **P3.** Giảng viên mất nhiều công chấm bài tính toán điện và khó phát hiện sớm lỗi hệ thống (chia áp sai, nhầm tổng trở).
- **P4.** Sinh viên không có công cụ mô phỏng mạch để tự kiểm chứng đáp số và ôn lại mạch mẫu theo từng bước.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy – học Kỹ thuật điện – điện tử thành một sản phẩm frontend có hành trình người dùng rõ ràng, giao cho nhóm 3 sinh viên.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò, bám sát bảng kiểm kê màn hình.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, mạch mẫu, linh kiện, bài tập, bài nộp, chấm điểm).
- **O4.** Dùng JavaScript/DOM cho mô phỏng mạch kéo-thả trên Canvas, máy tính Ohm, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ, trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API (JSON Server / LocalStorage / MockAPI) kèm `db.json`.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan cho môn điện – điện tử.
- **O7.** Tổ chức nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh, có PR, review và video OBS giảng giải.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu môn điện – điện tử, mạch mẫu demo, thư viện linh kiện |
| Sinh viên | Học bài, mô phỏng mạch, tính toán Ohm, làm bài tập, nộp bài, xem tiến độ |
| Giảng viên | Dựng bài giảng, quản lý mạch mẫu/linh kiện/bài tập, chấm và phản hồi |
| Quản trị viên | Quản lý tài khoản, cấu hình, duyệt kho linh kiện, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (mô phỏng mạch, làm bài, dựng học liệu)
↓
Xem trạng thái / dữ liệu / phản hồi (đáp số mạch, điểm, phản hồi bài tập)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (gợi ý linh kiện, giải thích mạch)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên chấm, admin duyệt kho)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã
| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Giới thiệu môn và thư viện linh kiện | Xem khóa học, xem linh kiện công khai | Trang chủ + thư viện linh kiện | `index.html`, `visitor-component-library.html` | R | SV1 |
| Sinh viên | Học và mô phỏng mạch, tính toán | Ghép mạch kéo-thả, tính Ohm | Mô phỏng mạch + máy tính Ohm | `student-circuit-sim.html` | C/R/U | SV1 |
| Sinh viên | Làm bài tập tính toán điện | Giải bài, nộp bài, xem điểm | Làm bài tập | `student-exercise-do.html` | C/R/U | SV1 |
| Giảng viên | Quản lý mạch mẫu và bài giảng | Tạo/sửa mạch mẫu, dựng bài giảng | Quản lý mạch + bài giảng | `teacher-circuit-manage.html`, `teacher-lesson-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Chấm bài, phản hồi | Chấm bài nộp, trả điểm | Chấm – phản hồi | `teacher-grading.html` | C/R/U | SV2 |
| Quản trị viên | Quản trị tài khoản, duyệt kho | Quản lý người dùng, duyệt linh kiện | Admin dashboard + quản lý người dùng + kho linh kiện | `admin-dashboard.html`, `admin-user-management.html`, `admin-component-management.html` | C/R/U/D | SV3 |

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
| 1 | `visitor-course-overview.html` | Course Overview | R | Giới thiệu môn Kỹ thuật điện – điện tử, lộ trình học. |
| 2 | `visitor-circuit-preview.html` | Circuit Preview | R | Chạy thử một mạch mẫu kéo-thả công khai. |
| 3 | `visitor-component-library.html` | Component Library | R | Tra cứu linh kiện, đọc vạch màu điện trở. |

### Học sinh / Sinh viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ, điểm, lịch học. |
| 5 | `student-lesson-view.html` | Lesson View | R | Học bài giảng linh kiện và sơ đồ mạch. |
| 6 | `student-circuit-sim.html` | Circuit Simulator | C/R/U | Mô phỏng mạch kéo-thả trên Canvas, máy tính Ohm tự động (điểm nhấn). |
| 7 | `student-exercise-do.html` | Exercise Do | C/R/U | Làm bài tập tính toán điện, nộp bài, xem lời giải từng bước. |
| 8 | `student-flashcard.html` | Flashcard Linh kiện | C/R | Ôn tập linh kiện, vạch màu bằng thẻ flashcard có giải thích. |

### Giáo viên / Giảng viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, mạch mẫu, bài tập, bài nộp. |
| 10 | `teacher-lesson-manage.html` | Lesson Manage | C/R/U/D | Dựng bài giảng về linh kiện và mạch điện. |
| 11 | `teacher-circuit-manage.html` | Circuit Manage | C/R/U/D | Tạo/sửa mạch mẫu, gán câu hỏi tính toán. |
| 12 | `teacher-exercise-build.html` | Exercise Build | C/R/U | Tạo bài tập tính toán điện, đáp số, lời giải từng bước. |
| 13 | `teacher-grading.html` | Grading | C/R/U | Chấm bài, phản hồi và trả điểm sinh viên. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống, thống kê. |
| 15 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản người dùng. |
| 16 | `admin-component-management.html` | Component Management | C/R/U/D | Duyệt và quản lý kho linh kiện, datasheet. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

Cá thể hóa môn điện – điện tử: màn hình `student-circuit-sim.html` là Canvas mô phỏng mạch kéo-thả, kéo linh kiện vào sơ đồ, nối dây, hệ thống tự tính dòng – áp – công suất – tổng trở; `visitor-component-library.html` hiển thị vạch màu điện trở (nâu, đen, đỏ...) kèm mã màu – giá trị; máy tính Ohm nhận 2 trong 3 đại lượng (V, I, R) và tính đại lượng còn lại.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Tài khoản 4 vai trò. |
| `lessons` | ✓ | ✓ | ✓ | ✓/Archive | Bài giảng linh kiện, sơ đồ mạch. |
| `circuits` | ✓ | ✓ | ✓ | ✓/Archive | Mạch mẫu: cấu hình linh kiện + giá trị. |
| `components` | ✓ | ✓ | ✓ | ✓/Archive | Kho linh kiện, màu vạch, datasheet. |
| `exercises` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập tính toán điện (Ohm, công suất, KCL/KVL). |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, đáp số, điểm, phản hồi. |
| `flashcards` | ✓ | ✓ | ✓ | ✓/Archive | Bộ thẻ ôn tập linh kiện/vạch màu. |

Thực thể kèm theo `db.json` cho biết cấu trúc: `users {id, role, name, email}`, `components {id, name, code, bands, value, unit, maxPower}`, `circuits {id, title, nodes, links, values}`, `exercises {id, type, params, answer, steps}`, `submissions {id, userId, exerciseId, answerList, score, status}`.

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Danh sách 4 cách truyền đạt (tối thiểu 3):

- **1. Mô phỏng mạch điện kéo-thả trên Canvas** (`student-circuit-sim.html`): sinh viên kéo linh kiện (điện trở, nguồn, tụ) vào sơ đồ, nối dây, hệ thống tô màu dòng điện và tự tính V/I/R. Giúp sinh viên **nhìn thấy** quan hệ định luật Ohm thay vì chỉ đọc công thức.
- **2. Máy tính Ohm từng bước với giải thích công thức** (`student-circuit-sim.html`): người dùng nhập 2 đại lượng, hệ thống tính đại lượng còn lại và hiển thị **các bước trung gian** kèm công thức đã áp dụng. Giúp hiểu **vì sao** có đáp số, dễ làm lại bài tương tự.
- **3. Thẻ flashcard linh kiện và vạch màu có giải thích** (`student-flashcard.html`): lật thẻ xem mã màu – giá trị – công dụng, có nút "tạo lại" để tự ôn. Giúp ghi nhớ cách nhận diện linh kiện và đọc vạch màu một cách chủ động.
- **4. Bài tập tính toán có lời giải từng bước** (`student-exercise-do.html`): bài tập tính dòng/áp/công suất được phân tách thành bước nhập số liệu → áp công thức → đáp số, có nút tiến/lùi. Giúp sinh viên tự kiểm tra đúng sai từng khâu.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Circuit Calculator (tính toán mạch)
Tự động tính dòng – áp – công suất – tổng trở cho mạch nối tiếp/song song/hỗn hợp từ linh kiện đã ghép, kèm giải thích từng bước công thức (Ohm, chia áp, KCL/KVL). Mô phỏng bằng JSON giả lập + JS theo quy tắc định luật; API LLM tùy chọn.

### AI-2 – AI Component Advisor (gợi ý linh kiện)
Từ điện áp nguồn, dòng tiêu thụ, tần số → gợi ý linh kiện phù hợp (điện trở giá trị chuẩn E6/E12 kèm vạch màu, tụ, diode) và cảnh báo vượt định mức công suất. Mô phỏng bằng JSON giả lập theo quy tắc giá trị chuẩn.

### AI-3 – AI Fault Tracer (truy tìm lỗi mạch)
Từ triệu chứng mô tả (mạch không sáng, đèn quá nóng, cầu chì đứt) → gợi ý nguyên nhân có khả năng và bước kiểm tra bằng đồng hồ đo. Mô phỏng bằng JSON giả lập theo chuỗi chẩn đoán.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `lessons`, `circuits`, `components`, `exercises`, `submissions`, `flashcards`. Triển khai bằng JSON cục bộ / `db.json` (JSON Server) / LocalStorage / MockAPI / public API tùy chọn. Không bắt buộc backend thật.

`db.json` gợi ý môn điện – điện tử: mảng `components` mẫu 6–8 bản ghi như `{id:1, name:"Điện trở 1kΩ", bands:["Nâu","Đen","Đỏ","Vàng kim"], code:"104", value:1000, unit:"Ω", maxPower:0.25}`; mảng `circuits` mẫu với `{id:1, title:"Mạch nối tiếp 2 điện trở", nodes:[{id:"R1",type:"resistor",value:100},{id:"R2",type:"resistor",value:200}], source:{v:12}, expected:{i:0.04, vR1:4, vR2:8}}`; mảng `exercises` mẫu có `type:"ohm"|"power"|"kcl"`, `params`, `answer`, `steps`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Kỹ thuật điện – điện tử (sản phẩm CircuitPro).
Hãy giúp tôi tạo nội dung bài giảng "Mạch nối tiếp và song song" cho trang student-lesson-view.html,
dành cho sinh viên. Hãy trình bày dạng sơ đồ + bảng công thức Ohm và chia áp,
kèm một ví dụ số có lời giải từng bước. Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống CircuitPro gồm các entity users, lessons, circuits,
components, exercises, submissions, flashcards; mỗi entity 5–8 bản ghi mẫu theo môn Kỹ thuật điện – điện tử
(linh kiện có mã màu vạch, mạch mẫu có giá trị dòng/áp, bài tập Ohm có đáp số và các bước giải),
có id, timestamps và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước: tôi muốn dựng máy tính Ohm trên
frontend bằng JavaScript thuần (nhập 2 trong 3 đại lượng V, I, R). Hỏi tôi cần gì,
sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: [Khách + Sinh viên]. Trách nhiệm chéo: [mô phỏng mạch kéo-thả Canvas, máy tính Ohm, responsive].
### SV2
Phụ trách: [Giáo viên/Giảng viên]. Trách nhiệm chéo: [JavaScript / dữ liệu / logic tính toán mạch / mock API; review PR].
### SV3
Phụ trách: [Quản trị viên + tích hợp bố cục, điều hướng, dashboard, kho linh kiện]. Trách nhiệm chéo: [nhất quán toàn dự án, bao phủ trạng thái, phát hành].

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-circuitpro-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat: add drag-drop circuit canvas`, `feat: compute ohm via js rules`, `fix: validate empty resistor field`, `style: improve mobile circuit layout`, `refactor: split reusable component modules`, `docs: update screen list and obs links`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS canvas mô phỏng mạch + máy tính Ohm, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-circuit-sim.mp4
SV2-01-teacher-circuit-manage.mp4
SV3-01-admin-component-management.mp4
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
├── assets/ (images, icons, data, component-sprites)
├── css/ (style.css, responsive.css, simulator.css)
├── js/ (main.js, api.js, ohm.js, circuit-simulator.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): mô phỏng mạch Canvas, máy tính Ohm từng bước, flashcard linh kiện.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng; thư viện linh kiện tra vạch màu.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; mô phỏng mạch xoay chiều; hoạt ảnh vi mô; PWA; cá nhân hóa.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (mô phỏng mạch kéo-thả, máy tính Ohm); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.