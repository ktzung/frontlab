# BTL-35 – BioChemLab – Hệ thống hỗ trợ giảng dạy và học tập môn Hóa – Sinh y sinh học

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Khoa học y sinh – Giảng dạy Hóa học – Sinh học (cấu trúc phân tử, phản ứng sinh hóa, thí nghiệm an toàn)**

## 2. Tóm tắt sản phẩm

**BioChemLab – Hệ thống hỗ trợ giảng dạy và học tập môn Hóa – Sinh y sinh học** giúp **giảng viên** dựng bài giảng, cấu hình thí nghiệm mô phỏng và bài tập cân bằng phương trình, đồng thời giúp **sinh viên** khám phá mô hình phân tử 2D/3D, mô phỏng phản ứng an toàn và làm bài tập. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Hóa – Sinh y sinh là nền tảng cho ngành Y, Dược, Công nghệ sinh học nhưng sinh viên thường khó hình dung cấu trúc phân tử, hiểu cơ chế phản ứng sinh hóa. Nhiều thí nghiệm nguy hiểm hoặc tốn kém không thể thực hiện trong lớp; giảng viên khó mô phỏng cân bằng phương trình và phản ứng theo từng bước cho nhiều sinh viên, và sinh viên thiếu công cụ tra cứu, tự học có phản hồi.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung cấu trúc 2D/3D của phân tử sinh học (ADN, protein, glucose).
- **P2.** Thí nghiệm Hóa – Sinh thường nguy hiểm hoặc tốn kém, khó thực hiện trong lớp; sinh viên thiếu kênh thực hành an toàn.
- **P3.** Giảng viên khó mô phỏng cân bằng phương trình và cơ chế phản ứng sinh hóa theo từng bước cho nhiều sinh viên.
- **P4.** Sinh viên thiếu công cụ nhận diện, tra cứu phân tử/sinh vật và hướng dẫn tự học có phản hồi.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Hóa – Sinh y sinh thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, thí nghiệm, bài tập cân bằng, nộp bài, chấm điểm).
- **O4.** Sử dụng JavaScript/DOM cho mô hình phân tử canvas/SVG, cân bằng phương trình, điều khiển thí nghiệm mô phỏng và kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn (mục 12).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa học, xem mô hình phân tử công khai |
| Sinh viên | Xem bài giảng, tương tác mô hình phân tử, mô phỏng thí nghiệm, làm bài tập |
| Giảng viên | Xây bài giảng, quản lý thí nghiệm/bài tập cân bằng, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, thư viện cấu trúc, cấu hình khóa học |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (xem bài, thao tác mô hình, mô phỏng thí nghiệm, làm bài tập)
↓
Xem trạng thái / dữ liệu / phản hồi (kết quả cân bằng, điểm, nhận xét)
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
| Sinh viên | Hiểu cấu trúc phân tử | Xoay/phóng to mô hình phân tử 2D/3D | Màn hình mô hình phân tử | `student-molecule-model.html` | C/R/U (tải, lỗi) | SV1 |
| Sinh viên | Mô phỏng thí nghiệm an toàn | Điều khiển tham số phản ứng, xem kết quả | Màn hình mô phỏng thí nghiệm | `student-simulation.html` | C/R/U (hoàn thành, lỗi) | SV1 |
| Sinh viên | Làm bài tập cân bằng | Cân bằng phương trình, nộp bài | Màn hình bài tập cân bằng | `student-lesson-view.html` | C/R/U (đang chờ, hoàn thành) | SV1 |
| Giảng viên | Dựng bài giảng Hóa – Sinh | Soạn bài, gắn mô hình phân tử | Màn hình quản lý bài giảng | `teacher-lesson-manage.html` | C/R/U/D (lưu trữ) | SV2 |
| Giảng viên | Cấu hình thí nghiệm | Đặt tham số phản ứng, mô phỏng | Màn hình quản lý thí nghiệm | `teacher-experiment-manage.html` | C/R/U/D (vô hiệu hóa) | SV2 |
| Giảng viên | Tạo bài tập cân bằng | Tạo bài tập, chấm điểm, phản hồi | Màn hình quản lý bài tập cân bằng | `teacher-equation-balance.html` | C/R/U/D (lưu trữ) | SV2 |
| Quản trị viên | Quản lý tài khoản, lớp | Tạo/sửa/xóa tài khoản, gán lớp | Màn hình quản lý người dùng | `admin-user-management.html` | C/R/U/D (lưu trữ) | SV3 |
| Quản trị viên | Cấu hình thư viện phân tử | Cấu hình nguyên tố, hằng số, cấu trúc | Màn hình cấu hình cấu trúc | `admin-structure-config.html` | R/U (vô hiệu hóa) | SV3 |

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
| 1 | `visitor-lab-overview.html` | Lab Overview | R | Xem giới thiệu khóa học Hóa – Sinh y sinh. |
| 2 | `visitor-model-preview.html` | Model Preview | R | Xem thử mô hình phân tử công khai. |
| 3 | `visitor-topic-feedback.html` | Topic Feedback | C/R | Góp ý chủ đề cần bổ sung. |

### Sinh viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ bài giảng, bài tập, thí nghiệm. |
| 5 | `student-lesson-view.html` | Lesson View | C/R/U | Học bài giảng Hóa – Sinh kèm mô hình tương tác, làm bài cân bằng. |
| 6 | `student-molecule-model.html` | Molecule Model | C/R/U | Xoay/phóng to mô hình phân tử 2D/3D (canvas/SVG). |
| 7 | `student-simulation.html` | Simulation | C/R/U | Mô phỏng thí nghiệm (pha loãng, chỉ thị axit-bazơ) an toàn. |

### Giảng viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 8 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bài giảng, thí nghiệm, bài tập. |
| 9 | `teacher-lesson-manage.html` | Lesson Manage | C/R/U/D | Xây bài giảng, gắn mô hình phân tử. |
| 10 | `teacher-experiment-manage.html` | Experiment Manage | C/R/U/D | Cấu hình thí nghiệm mô phỏng, tham số phản ứng. |
| 11 | `teacher-equation-balance.html` | Equation Balance | C/R/U/D | Tạo bài tập cân bằng phương trình hóa học. |
| 12 | `teacher-grading.html` | Grading | R/U | Chấm bài, phản hồi sinh viên. |

### Quản trị viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 13 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống. |
| 14 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản giáo viên, sinh viên, lớp. |
| 15 | `admin-structure-config.html` | Structure Config | R/U | Cấu hình thư viện phân tử, hằng số, nguyên tố. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (mô hình phân tử, mô phỏng phản ứng, cân bằng phương trình); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tài khoản giảng viên, sinh viên, quản trị. |
| `elements` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Nguyên tố, khối lượng, ký hiệu hóa học. |
| `molecules` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Cấu trúc phân tử 2D/3D (canvas/SVG). |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng Hóa – Sinh y sinh. |
| `experiments` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thí nghiệm mô phỏng và tham số phản ứng. |
| `balanceExercises` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài tập cân bằng phương trình. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp và điểm. |
| `db.json` | — | ✓ | — | — | File mock API chứa các entity trên (JSON Server). |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Hóa – Sinh y sinh học.

Liệt kê tối thiểu **3 cách truyền đạt** mà nhóm sẽ thực hiện, mỗi cách gắn với một màn hình:

### Cách 1 – Mô hình phân tử 2D/3D tương tác (vẽ canvas/SVG)
- **Màn hình áp dụng:** `student-molecule-model.html`.
- Vì sao giúp hiểu hơn: sinh viên xoay, phóng to, phủ màu theo nguyên tố và xem liên kết của phân tử (ADN, glucose, protein), biến cấu trúc trừu tượng thành hình ảnh trực quan, dễ nắm hơn sách giáo khoa tĩnh.

### Cách 2 – Mô phỏng phản ứng từng bước có điều khiển (step-by-step)
- **Màn hình áp dụng:** `student-simulation.html`.
- Vì sao giúp hiểu hơn: sinh viên điều khiển tiến/lùi các bước phản ứng, thay đổi tham số (nồng độ, nhiệt độ) trong môi trường an toàn, hiểu cơ chế phản ứng và mối quan hệ tham số – kết quả.

### Cách 3 – Cân bằng phương trình có kiểm tra từng nguyên tố (tương tác trực quan)
- **Màn hình áp dụng:** `student-lesson-view.html` và `teacher-equation-balance.html`.
- Vì sao giúp hiểu hơn: sinh viên nhập hệ số và hệ thống đếm số nguyên tử mỗi bên, tô màu khớp/không khớp, giúp hiểu quy tắc bảo toàn nguyên tố một cách sinh động thay vì học vẹt.

### Cách 4 – Thẻ flashcard về phân tử & phản ứng
- **Màn hình áp dụng:** `student-dashboard.html` (mục ôn nhanh).
- Vì sao giúp hiểu hơn: sinh viên lật thẻ nhớ công thức, tên gọi, vai trò của phân tử/chất, tự kiểm tra và củng cố kiến thức cơ bản.

### Cách 5 – Hình ảnh tương tác có tooltip trên mô hình
- **Màn hình áp dụng:** `student-molecule-model.html`.
- Vì sao giúp hiểu hơn: khi rê chuột vào nguyên tử sẽ hiện tooltip tên, khối lượng, số liên kết, giúp sinh viên tra cứu thông tin tại chỗ mà không cần rời màn hình.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Cân bằng phương trình & mô phỏng phản ứng (Equation Balancer)
Cân bằng phương trình hóa học, mô tả cơ chế và sản phẩm phản ứng sinh hóa. Cách mô phỏng: JSON giả lập + JS đếm nguyên tử / API LLM tùy chọn.

### AI-2 – AI Nhận diện sinh vật (Organism Identifier)
Nhận diện sinh vật từ mô tả/đặc điểm (tên khoa học, nhóm, vai trò trong y sinh). Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Gợi ý thí nghiệm / lộ trình (Lab Advisor)
Đề xuất thí nghiệm hoặc bài tập phù hợp trình độ và mục tiêu sinh viên. Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity chính (mock API – JSON Server / MockAPI / LocalStorage): `users`, `elements`, `molecules`, `lessons`, `experiments`, `balanceExercises`, `submissions`. File `db.json` gợi ý chứa bản ghi mẫu theo môn: `elements` (bảng nguyên tố, khối lượng), `molecules` (dữ liệu cấu trúc ADN, glucose, nước), `experiments` (thí nghiệm axit-bazơ, pha loãng), `balanceExercises` (chuỗi phương trình hóa học). Không bắt buộc backend thật; trọng tâm là trải nghiệm frontend.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng bài giảng mô hình phân tử
```text
Tôi là SV môn CSE122 đang làm BTL về "Hệ thống hỗ trợ giảng dạy và học tập môn Hóa – Sinh y sinh học – BioChemLab". Hãy giúp tôi soạn bài giảng về cấu trúc phân tử glucose cho sinh viên y khoa năm nhất.
+ Giao diện: student-molecule-model.html, xem của sinh viên.
+ Yêu cầu trực quan: đề xuất cách vẽ phân tử glucose 2D bằng canvas/SVG, phủ màu theo nguyên tố, liên kết, tooltip.
+ Hãy giải thích logic tọa độ nguyên tử và đếm liên kết sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho BioChemLab
```text
Tạo file db.json (JSON Server) cho hệ thống BioChemLab, gồm các entity: users, elements, molecules, lessons, experiments, balanceExercises, submissions; mỗi entity 5–8 bản ghi mẫu theo môn Hóa – Sinh y sinh, có id, timestamps, và trường phù hợp nghiệp vụ (nguyên tố, cấu trúc phân tử, tham số phản ứng, hệ số cân bằng). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng mô hình phân tử 2D bằng canvas trong student-molecule-model.html và thao tác xoay/phóng to, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: Khách + Sinh viên. Trách nhiệm chéo: phần giao diện dùng chung, responsive.
### SV2
Phụ trách: Giảng viên. Trách nhiệm chéo: JavaScript / dữ liệu / canvas-SVG / mock API; review PR.
### SV3
Phụ trách: Quản trị viên + tích hợp bố cục, điều hướng, dashboard. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-biochemlab-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS tương tác (mô hình phân tử + mô phỏng), TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
├── assets/ (images, icons, molecules, data/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, molecule.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): mô hình phân tử 2D/3D, mô phỏng phản ứng từng bước, cân bằng phương trình có kiểm tra nguyên tử.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; mô hình phân tử 3D WebGL; hoạt ảnh phản ứng; PWA.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (mô hình phân tử, mô phỏng phản ứng); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.