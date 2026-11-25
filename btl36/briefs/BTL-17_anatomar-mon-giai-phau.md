# BTL-17 – AnatomAR – Hệ thống hỗ trợ giảng dạy và học tập môn Giải phẫu

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Đào tạo Y khoa – Giải phẫu cơ thể người (Y học cơ sở).** Môn nền tảng dạy vị trí, cấu tạo và chức năng của các hệ cơ quan (xương, cơ, thần kinh, tuần hoàn, hô hấp, tiêu hóa…) trong cơ thể người.

## 2. Tóm tắt sản phẩm

**AnatomAR – Hệ thống hỗ trợ giảng dạy và học tập môn Giải phẫu** giúp **giảng viên** dựng học liệu trực quan về cơ thể người (cơ quan, mô hình, sơ đồ, câu hỏi ghi nhớ theo hệ) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động qua **sơ đồ cơ thể người tương tác, mô hình cơ quan, thẻ flashcard ghi nhớ và bài trắc nghiệm**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Giải phẫu là nền tảng của toàn bộ y khoa, đòi hỏi sinh viên nhớ vị trí, cấu trúc và chức năng của hàng trăm cơ quan thuộc nhiều hệ. Học qua tranh tĩnh trong giáo trình khiến sinh viên khó hình dung không gian 3 chiều và quan hệ giữa các cơ quan khi nhìn sơ đồ phẳng. Người học thiếu kênh tự kiểm tra mức ghi nhớ, giảng viên khó theo dõi tiến độ từng cá nhân, còn học liệu phân bố rời rạc qua nhiều nguồn. Vì vậy cần một hệ thống trực quan hóa cơ thể người theo từng hệ, có mô hình tương tác và bài ôn tập để lượng hóa mức hiểu.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung vị trí không gian và cấu tạo của cơ quan trong cơ thể khi chỉ nhìn tranh tĩnh trong giáo trình.
- **P2.** Khối lượng kiến thức giải phẫu rất lớn, thiếu công cụ ghi nhớ và tự kiểm tra theo từng hệ cơ quan.
- **P3.** Giảng viên khó xây dựng sơ đồ/mô hình cơ quan trực quan và khó đánh giá mức ghi nhớ của từng sinh viên.
- **P4.** Sinh viên thiếu kênh hỏi đáp, giải thích chuyên sâu theo từng cấu trúc giải phẫu cụ thể.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Giải phẫu thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò: Khách, Sinh viên, Giảng viên, Quản trị viên.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: hệ cơ quan, cơ quan, mô hình, câu hỏi, kết quả ôn tập.
- **O4.** Dùng JavaScript/DOM cho sơ đồ cơ thể tương tác, chọn vùng, xoay mô hình, tìm kiếm, lọc theo hệ, kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (entity + `db.json`).
- **O6.** Thiết kế ít nhất **3 cách truyền đạt kiến thức trực quan** (sơ đồ SVG, mô hình cơ quan, flashcard/trắc nghiệm).
- **O7.** Tổ chức làm việc nhóm bằng Trello và Git/GitHub theo nhánh + yêu cầu hợp nhất, kèm video OBS.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu khóa, khám phá mô hình cơ quan mẫu, xem đề xuất học liệu |
| Sinh viên | Học theo hệ cơ quan, tương tác mô hình, làm flashcard/trắc nghiệm ghi nhớ, theo dõi tiến độ |
| Giảng viên | Xây dựng cơ quan/mô hình/sơ đồ, soạn câu hỏi, quản lý lớp, theo dõi tiến độ từng sinh viên |
| Quản trị viên | Quản lý tài khoản, hệ cơ quan, thư viện mô hình, cấu hình hệ thống |

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
| Khách | Giới thiệu khóa học giải phẫu | Xem tổng quan các hệ cơ quan | Hệ cơ quan tổng quan | `visitor-systems-overview.html` | R | SV1 |
| Khách | Trải nghiệm học liệu mẫu | Khám phá mô hình cơ quan mẫu (tim, xương) | Mô hình mẫu | `visitor-organ-preview.html` | R | SV1 |
| Khách | Đề xuất học liệu | Gửi đề xuất cơ quan/hệ cần bổ sung | Đề xuất chủ đề | `visitor-topic-suggestion.html` | C/R, Đang chờ | SV1 |
| Sinh viên | Theo dõi tiến độ ghi nhớ | Xem tiến độ học theo hệ | Bảng điều khiển | `student-dashboard.html` | R, Hoàn thành | SV1 |
| Sinh viên | Học một hệ cơ quan | Chọn hệ, bấm vào cơ quan trên sơ đồ | Học theo hệ | `student-system-view.html` | R, Đang tải/Rỗng | SV1 |
| Sinh viên | Ghi nhớ cấu trúc cơ quan | Xoay/phóng to mô hình, đánh dấu đã thuộc | Mô hình cơ quan | `student-organ-model.html` | R/U, Đã thuộc | SV2 |
| Sinh viên | Tự kiểm tra ghi nhớ | Làm bài trắc nghiệm vị trí/chức năng | Trắc nghiệm ghi nhớ | `student-memory-quiz.html` | C/R, Thành công/Lỗi | SV2 |
| Giảng viên | Quản lý nội dung dạy học | Thêm/sửa cơ quan, gán vào hệ trên sơ đồ | Quản lý mô hình | `teacher-anatomy-manage.html` | C/R/U/D(Lưu trữ) | SV3 |
| Giảng viên | Soạn bài ôn tập | Tạo bộ câu hỏi trắc nghiệm theo hệ | Soạn trắc nghiệm | `teacher-quiz-builder.html` | C/R/U, Đang chờ | SV3 |
| Giảng viên | Đánh giá sinh viên | Xem tiến độ ghi nhớ từng sinh viên | Tiến độ sinh viên | `teacher-student-progress.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Thêm/cấm/sửa tài khoản, phân quyền | Quản lý người dùng | `admin-user-management.html` | C/R/U/D(Vô hiệu hóa) | SV2 |
| Quản trị viên | Cấu hình học liệu | Cấu hình hệ cơ quan, thư viện mô hình | Cấu hình hệ cơ quan | `admin-body-system-config.html` | C/R/U, Đã hủy/Lưu trữ | SV2 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter hệ cơ quan, đổi table thành card mô hình, thêm field + validation cho cơ quan, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-systems-overview.html` | Hệ cơ quan tổng quan | R | Xem tổng quan các hệ cơ quan, sơ đồ cơ thể minh họa. |
| 2 | `visitor-organ-preview.html` | Mô hình mẫu | R | Khám phá mô hình cơ quan công khai (tim, xương). |
| 3 | `visitor-topic-suggestion.html` | Đề xuất chủ đề | C/R | Gửi đề xuất cơ quan/hệ cần bổ sung học liệu. |

### Học sinh / Sinh viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Theo dõi tiến độ học và mức ghi nhớ theo từng hệ. |
| 5 | `student-system-view.html` | Học theo hệ | R | Học một hệ cơ quan với sơ đồ cơ thể tương tác (SVG). |
| 6 | `student-organ-model.html` | Mô hình cơ quan | R/U | Xoay/phóng to mô hình, đánh dấu "đã thuộc". |
| 7 | `student-memory-quiz.html` | Trắc nghiệm ghi nhớ | C/R | Làm bài trắc nghiệm vị trí/chức năng cơ quan kèm giải thích. |
| 8 | `student-flashcards.html` | Thẻ ghi nhớ | R | Ôn nhanh tên vị trí cơ quan bằng thẻ lật flashcard. |

### Giáo viên / Giảng viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển | R | Tổng quan lớp, hệ cơ quan, mức ghi nhớ. |
| 10 | `teacher-anatomy-manage.html` | Quản lý mô hình | C/R/U/D | Thêm/sửa cơ quan, gán vào hệ trên sơ đồ SVG. |
| 11 | `teacher-quiz-builder.html` | Soạn trắc nghiệm | C/R/U | Soạn bộ câu hỏi ghi nhớ theo hệ cơ quan. |
| 12 | `teacher-student-progress.html` | Tiến độ sinh viên | R | Xem tiến độ ghi nhớ theo hệ từng sinh viên. |
| 13 | `teacher-visual-builder.html` | Dựng học liệu SVG | C/R/U/D | Ghép sơ đồ/mô hình cơ quan làm nội dung trực quan. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển | R | Quản trị hệ thống AnatomAR. |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản, phân quyền, vô hiệu hóa. |
| 16 | `admin-body-system-config.html` | Cấu hình hệ cơ quan | C/R/U | Cấu hình hệ cơ quan, thư viện mô hình, đề mục. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card cơ quan, list hệ, table so sánh, form soạn câu hỏi, dashboard); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (chọn vùng, xoay mô hình, lật flashcard, tính điểm); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản theo vai trò (mock data). |
| `bodySystems` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Các hệ cơ quan (xương, cơ, tuần hoàn, hô hấp…). |
| `organs` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Cơ quan thuộc hệ, vị trí trên sơ đồ SVG. |
| `organModels` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Mô hình cơ quan (tọa độ, màu, thuộc tính, ảnh). |
| `quizQuestions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Câu hỏi trắc nghiệm ghi nhớ (vị trí/chức năng). |
| `quizAttempts` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Lần làm bài, điểm, mức thuộc từng hệ. |
| `flashcards` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thẻ ghi nhớ mặt trái/phải. |
| `memorizedMarkers` | ✓ | ✓ | ✓ | ✓/Hủy | Dấu "đã thuộc" của từng sinh viên theo cơ quan. |

> Đi kèm `db.json` gợi ý: các entity `users`, `bodySystems`, `organs`, `organModels`, `quizQuestions`, `quizAttempts`, `flashcards`, `memorizedMarkers`, mỗi entity 5–8 bản ghi mẫu theo môn Giải phẫu (có `id`, `createdAt`, `updatedAt`).

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Giải phẫu. Liệt kê tối thiểu **3 cách truyền đạt**, mỗi cách gắn với một màn hình.

- **Cách 1 – Sơ đồ cơ thể người tương tác bằng SVG** (màn hình `student-system-view.html`). Sinh viên chọn hệ cơ quan, các cơ quan sẽ được tô sáng trên bóng cơ thể; bấm vào một cơ quan sẽ hiện tooltip tên, vị trí và chức năng. Vì sao giúp hiểu hơn: biến tranh tĩnh thành bản đồ không thể bấm được, giúp định vị cơ quan trong không gian và quan hệ giữa chúng.

- **Cách 2 – Mô hình cơ quan trực quan & phóng to** (màn hình `student-organ-model.html`). Cơ quan được thể hiện dạng mô hình SVG/Canvas có xoay, phóng to, chỉ rõ các thành phần cấu tạo. Vì sao giúp hiểu hơn: người học nhìn được lớp cấu trúc chi tiết của một cơ quan thay vì chỉ một hình phẳng trong sách.

- **Cách 3 – Thẻ flashcard ghi nhớ** (màn hình `student-flashcards.html`). Thẻ lật mặt trái (tên/ảnh cơ quan) – mặt phải (vị trí/chức năng), kèm nút "đã thuộc / cần ôn lại". Vì sao giúp hiểu hơn: lặp lại có chủ đích theo đúng cơ chế ghi nhớ dài hạn của môn học thuộc lòng như Giải phẫu.

- **Cách 4 – Trắc nghiệm ghi nhớ kèm giải thích** (màn hình `student-memory-quiz.html`). Câu hỏi về vị trí/chức năng, mỗi đáp án sai đều hiện giải thích ngắn. Vì sao giúp hiểu hơn: vừa kiểm tra vừa củng cố kiến thức ngay tại chỗ theo từng hệ.

Với mỗi cách, nhóm ghi rõ **màn hình áp dụng** và **lý do giúp người học hiểu hơn** như trên.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc** và **không chấm điểm chặn đề tài** chỉ vì có/không có AI. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ (Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát).

### AI-1 – AI Organ Recognizer (tùy chọn)
Sinh viên khoanh vùng/đánh dấu một vùng trên sơ đồ hoặc tải ảnh mô hình lên; AI nhận diện và hiển thị mô hình cơ quan tương ứng. Cách mô phỏng: JSON giả lập khớp vùng chọn, JavaScript theo tọa độ, phản hồi định sẵn; API LLM tùy chọn.

### AI-2 – AI Memory Checker (tùy chọn)
Phân tích kết quả trắc nghiệm/flashcard để chỉ ra hệ cơ quan còn yếu và gợi ý ôn lại. Cách mô phỏng: JSON giả lập, JavaScript theo quy tắc phân tích điểm, phản hồi định sẵn; API LLM tùy chọn.

### AI-3 – AI Structural Explainer (tùy chọn)
Khi bấm vào một phần của mô hình, AI giải thích chức năng và mối liên hệ với cơ quan khác bằng lời dễ hiểu. Cách mô phỏng: JSON giả lập, JavaScript theo quy tắc, phản hồi định sẵn; API LLM tùy chọn.

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
bodySystems
organs
organModels
quizQuestions
quizAttempts
flashcards
memorizedMarkers
```

`db.json` gợi ý (đặt tại root) chứa 8 entity trên, mỗi entity 5–8 bản ghi mẫu theo môn Giải phẫu, ví dụ `organs`: `{ id, name: "Tim", system: "tuần hoàn", position {x,y}, function, image, createdAt, updatedAt }`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng (sơ đồ cơ thể)
```text
Tôi là SV môn CSE122 đang làm BTL về Giải phẫu (AnatomAR). Hãy giúp tôi dựng nội dung học liệu cho trang "Học theo hệ cơ quan".
+ Hệ: tuần hoàn, 8 cơ quan chính (tim, động mạch, tĩnh mạch…).
+ Vai trò người xem: sinh viên y khoa mới học.
+ Yêu cầu trực quan: sơ đồ SVG tô sáng theo cơ quan, tooltip mô tả vị trí/chức năng, trắc nghiệm nhanh kèm giải thích.
+ Hãy giải thích logic cấu trúc HTML/SVG sau khi sinh để tôi hiểu và tự làm lại.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống AnatomAR (môn Giải phẫu), gồm các entity: users, bodySystems, organs, organModels, quizQuestions, quizAttempts, flashcards, memorizedMarkers. Mỗi entity 5–8 bản ghi mẫu theo hệ cơ quan (xương, cơ, thần kinh, tuần hoàn, hô hấp), có id, timestamps và trường nghiệp vụ (position x/y cho sơ đồ SVG, function, image). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng "sơ đồ cơ thể người tương tác": hỏi tôi cần gì, sau mỗi đoạn code giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại (ví dụ thêm một cơ quan mới vào SVG).
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (sơ đồ hệ cơ quan, mô hình cơ quan, trắc nghiệm). Trách nhiệm chéo: **một phần giao diện dùng chung, sơ đồ SVG, responsive**.

### SV2
Phụ trách: **Quản trị viên** (tài khoản, cấu hình hệ cơ quan) + một phần màn hình sinh viên (mô hình cơ quan, trắc nghiệm). Trách nhiệm chéo: **JavaScript / dữ liệu / mock API; review PR**.

### SV3
Phụ trách: **Giảng viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: **nhất quán toàn dự án, phát hành**.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-anatomar-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.
- Ví dụ nhánh: `feature/student-system-view`, `feature/teacher-anatomy-manage`, `feature/admin-body-system-config`.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.

Task mẫu: `TASK-01` mockup sơ đồ cơ thể, `TASK-02` HTML vai trò Sinh viên, `TASK-03` responsive CSS, `TASK-04` JS sơ đồ SVG tương tác, `TASK-05` mock API, `TASK-06` (tùy chọn) AI, `TASK-07` kiểm thử đa trình duyệt, `TASK-08` OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI (vùng tô màu, tooltip cơ quan, thẻ flashcard).
5. **Thực hiện một thay đổi nhỏ tại chỗ** (đổi màu hệ cơ quan, thêm một cơ quan vào SVG, đổi layout) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** mà giảng viên hoặc nhóm yêu cầu (minh chứng "hiểu và làm lại được").

Quy tắc đặt tên:
```text
SV1-01-student-system-view.mp4
SV2-01-admin-user-management.mp4
SV3-01-teacher-anatomy-manage.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi, mockup tương tác sơ đồ cơ thể.

## 20. Cấu trúc kho mã nguồn gợi ý
```text
project-root/
├── README.md
├── docs/ (project-proposal, screen-list, team-assignment, ai-usage-report)
├── design/ (figma-link.txt, mockups/)
├── pages/
├── assets/ (images, icons, data, organ-svg/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation (lọc theo hệ cơ quan).
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): sơ đồ SVG tương tác, mô hình cơ quan phóng to, flashcard/trắc nghiệm.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; mô hình 3D sơ bộ; PWA; cá nhân hóa lộ trình ghi nhớ.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (sơ đồ cơ thể SVG, mô hình cơ quan, flashcard, trắc nghiệm); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.