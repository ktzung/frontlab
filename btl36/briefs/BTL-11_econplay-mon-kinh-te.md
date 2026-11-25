# BTL-11 – EconPlay – Hệ thống hỗ trợ giảng dạy và học tập môn Kinh tế vi mô/vĩ mô

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giảng dạy Kinh tế (vi mô/vĩ mô)**

## 2. Tóm tắt sản phẩm

**EconPlay – Hệ thống hỗ trợ giảng dạy và học tập môn Kinh tế (vi mô/vĩ mô)** giúp **giảng viên** dựng học liệu trực quan (đồ thị cung - cầu, mô phỏng thị trường, bài tập tính toán, đề kiểm tra) và giúp **sinh viên** tiếp thu khái niệm kinh tế dễ hiểu, sinh động qua đồ thị tương tác và mô phỏng thị trường. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Kinh tế vi mô/vĩ mô là môn nền tảng của khối ngành kinh tế. Sinh viên thường khó hình dung quan hệ cung - cầu, điểm cân bằng, ảnh hưởng của chính sách. Giảng viên giảng bằng bảng và slide tĩnh khó minh họa sự dịch chuyển đồ thị và mô phỏng tác động. Bài tập tính toán rải rác, thiếu kênh luyện trực quan và phản hồi.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung đồ thị cung - cầu, điểm cân bằng và sự dịch chuyển khi chỉ đọc lý thuyết.
- **P2.** Khó mô phỏng tác động của chính sách (thuế, trợ cấp, giá trần) lên thị trường.
- **P3.** Giảng viên tốn công ra/chấm bài tập tính toán, khó phát hiện sớm sinh viên hiểu sai khái niệm.
- **P4.** Sinh viên thiếu kênh luyện tập và tự kiểm tra với phản hồi tức thì trước kỳ thi.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Kinh tế thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách 3, Sinh viên 5, Giảng viên 5, Admin 3).
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: chủ đề, khái niệm, đồ thị, mô phỏng thị trường, bài tập, nộp bài, chấm.
- **O4.** Dùng JavaScript/DOM cho vẽ đồ thị canvas, mô phỏng tương tác, tìm kiếm, lọc, validation.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Đề xuất tối thiểu 3 ý tưởng AI mô phỏng ở Frontend (tùy chọn nâng cao, không bắt buộc).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + PR.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa học, xem bài mẫu công khai |
| Sinh viên | Xem đồ thị tương tác, chạy mô phỏng thị trường, làm bài tập, xem điểm |
| Giảng viên | Dựng chủ đề, khái niệm, đồ thị, mô phỏng thị trường, bài tập; chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chủ đề, cấu hình, báo cáo |

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
| Khách | Giới thiệu khóa Kinh tế | Xem tổng quan chương trình, chủ đề nổi bật | Trang chủ Khách | `index.html` | R | SV1 |
| Khách | Xem thử nội dung học liệu | Xem thử một đồ thị mô phỏng mẫu | Preview bài học mẫu | `visitor-preview.html` | R | SV1 |
| Khách | Đăng ký tài khoản | Tạo tài khoản sinh viên/giảng viên | Đăng ký | `register.html` | C | SV1 |
| Sinh viên | Nắm tiến độ học tập | Xem chủ đề đã học, điểm bài tập | Dashboard | `student-dashboard.html` | R | SV1 |
| Sinh viên | Xem đồ thị tương tác | Dịch chuyển cung/cầu slide, xem điểm cân bằng | Đồ thị cung - cầu | `student-graph.html` | R | SV1 |
| Sinh viên | Chạy mô phỏng thị trường | Thiết lập thuế/trợ cấp, xem thị trường thay đổi | Mô phỏng thị trường | `student-market-sim.html` | C/R | SV1 |
| Sinh viên | Luyện bài tập tính toán | Giải bài, nộp đáp số, xem lời giải | Làm bài tập | `student-exercise.html` | C/R | SV1 |
| Sinh viên | Xem kết quả & phản hồi | Xem điểm, lời giải, nhận xét của GV | Kết quả & phản hồi | `student-submission.html` | R | SV1 |
| Giảng viên | Tổng quan lớp | Xem sinh viên, điểm trung bình, hoạt động | Dashboard GV | `teacher-dashboard.html` | R | SV2 |
| Giảng viên | Dựng khái niệm & chủ đề | Nhập chủ đề, khái niệm, công thức | Quản lý khái niệm | `teacher-concept-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Dựng đồ thị & mô phỏng | Cấu hình đồ thị cung/cầu, tham số mô phỏng | Dựng đồ thị/mô phỏng | `teacher-sim-build.html` | C/R/U/D | SV2 |
| Giảng viên | Dựng bài tập & đề | Tạo bài tập tính toán, đề kiểm tra | Tạo bài tập/đề | `teacher-exercise-build.html` | C/R/U/D | SV2 |
| Giảng viên | Chấm & phản hồi | Chấm bài tập, để nhận xét, ghi điểm | Chấm bài | `teacher-grading.html` | R/U | SV2 |
| Quản trị viên | Quản trị hệ thống | Xem người dùng, nội dung, hoạt động | Dashboard Admin | `admin-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Tạo/vô hiệu hóa tài khoản, gán vai trò, lớp | Quản lý tài khoản | `admin-user-management.html` | C/R/U/D | SV3 |
| Quản trị viên | Cấu hình & chủ đề | Quản lý chủ đề, tham số hệ thống | Cấu hình | `admin-config.html` | C/R/U | SV3 |

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

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang chủ Khách | R | Giới thiệu khóa Kinh tế, chủ đề nổi bật. |
| 2 | `visitor-preview.html` | Preview bài học mẫu | R | Xem thử đồ thị mô phỏng mẫu công khai. |
| 3 | `register.html` | Đăng ký | C | Tạo tài khoản sinh viên/giảng viên. |

### Sinh viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi chủ đề đã học, điểm bài tập. |
| 5 | `student-graph.html` | Đồ thị cung - cầu | R | Trượt cung/cầu, xem điểm cân bằng động. |
| 6 | `student-market-sim.html` | Mô phỏng thị trường | C/R | Thiết lập thuế/trợ cấp, xem thị trường thay đổi. |
| 7 | `student-exercise.html` | Làm bài tập | C/R | Giải bài tính toán, nộp đáp số, xem lời giải. |
| 8 | `student-submission.html` | Kết quả & phản hồi | R | Xem điểm, lời giải, nhận xét GV. |

### Giảng viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard GV | R | Tổng quan lớp, điểm trung bình, hoạt động. |
| 10 | `teacher-concept-manage.html` | Quản lý khái niệm | C/R/U/D | Nhập chủ đề, khái niệm, công thức. |
| 11 | `teacher-sim-build.html` | Dựng đồ thị/mô phỏng | C/R/U/D | Cấu hình đồ thị cung/cầu, tham số mô phỏng. |
| 12 | `teacher-exercise-build.html` | Tạo bài tập/đề | C/R/U/D | Tạo bài tập tính toán, đề kiểm tra. |
| 13 | `teacher-grading.html` | Chấm bài | R/U | Chấm bài, để nhận xét, ghi điểm. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard Admin | R | Người dùng, nội dung, hoạt động hệ thống. |
| 15 | `admin-user-management.html` | Quản lý tài khoản | C/R/U/D | Quản lý tài khoản, vai trò, lớp. |
| 16 | `admin-config.html` | Cấu hình | C/R/U | Quản lý chủ đề, tham số hệ thống. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Thêm lớp, vai trò, điểm trung bình. |
| `topics` | ✓ | ✓ | ✓ | ✓/Archive | Chủ đề: Cung - cầu, chi phí, GDP... |
| `concepts` | ✓ | ✓ | ✓ | ✓/Archive | Khái niệm + công thức, ví dụ. |
| `graphs` | ✓ | ✓ | ✓ | ✓/Archive | Đồ thị: loại (cung/cầu), tham số đường. |
| `simulations` | ✓ | ✓ | ✓ | ✓/Archive | Mô phỏng thị trường: thuế, trợ cấp, giá trần. |
| `exercises` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập tính toán + đáp án, lời giải. |
| `examSets` | ✓ | ✓ | ✓ | ✓/Archive | Đề kiểm tra gộp nhiều bài. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp + đáp số, điểm, nhận xét GV. |
| `progressLogs` | — | ✓ | ✓ | — | Nhật ký học/xem đồ thị/mô phỏng. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng nhất** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Kinh tế.

### Cách truyền đạt 1 – Đồ thị cung - cầu tương tác
- **Màn hình áp dụng:** `student-graph.html`.
- **Mô tả:** Vẽ đồ thị cung/cầu bằng Canvas; trượt tham số để dịch chuyển đường, điểm cân bằng (P*, Q*) cập nhật động.
- **Vì sao giúp người học hiểu hơn:** Thấy trực quan sự dịch chuyển và thay đổi điểm cân bằng, thay vì tưởng tượng từ công thức.

### Cách truyền đạt 2 – Mô phỏng thị trường
- **Màn hình áp dụng:** `student-market-sim.html`.
- **Mô tả:** Thiết lập thuế, trợ cấp, giá trần/giá sàn rồi xem thị trường mới (thặng dư, mất không).
- **Vì sao giúp người học hiểu hơn:** Mô phỏng gắn lý thuyết với chính sách, giúp sinh viên "thử nghiệm" và nhớ lâu tác động của chính sách.

### Cách truyền đạt 3 – Bài tập tính toán có lời giải từng bước
- **Màn hình áp dụng:** `student-exercise.html`.
- **Mô tả:** Bài tập tính toán (hàm cung/cầu, chi phí) với ô nhập đáp số, chấm ngay và hiện lời giải từng bước khi sai.
- **Vì sao giúp người học hiểu hơn:** Vừa luyện vừa sửa lỗi ngay, xem quy trình giải giúp hiểu bản chất công thức thay vì học thuộc kết quả.

### Cách truyền đạt 4 – Chấm điểm theo tiêu chí phân tích
- **Màn hình áp dụng:** `teacher-grading.html`.
- **Mô tả:** Chấm bài theo nhóm tiêu chí (nhận diện đồ thị, tính toán, lập luận) với nhận xét.
- **Vì sao giúp người học hiểu hơn:** Nhìn rõ mạnh/yếu theo từng kỹ năng kinh tế để cải thiện có chủ đích.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Giải thích đồ thị
Khi dịch chuyển cung/cầu, AI giải thích bằng lời vì sao điểm cân bằng thay đổi và ý nghĩa kinh tế.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-2 – AI Gợi ý tham số mô phỏng
Gợi ý mức thuế/trợ cấp điển hình và dự đoán ảnh hưởng trước khi sinh viên chạy mô phỏng.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Sinh bài tập tính toán
Từ một khái niệm/công thức, sinh bài tập gợi ý kèm đáp án để giảng viên duyệt trước khi đưa vào đề.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Thực thể + JSON / LocalStorage / JSON Server / MockAPI / public API; kèm `db.json` gợi ý theo môn:

```json
{
  "users": [
    { "id": 1, "name": "Nguyen Van A", "role": "student", "class": "KT01", "avgScore": 7.4 },
    { "id": 2, "name": "Tran Thi B", "role": "teacher", "class": "KT01", "avgScore": 0 }
  ],
  "topics": [
    { "id": 1, "name": "Cung - cầu", "type": "micro" },
    { "id": 2, "name": "Tổng cầu GDP", "type": "macro" }
  ],
  "concepts": [
    { "id": 1, "topicId": 1, "name": "Điểm cân bằng", "formula": "Qd = Qs", "example": "..." }
  ],
  "graphs": [
    { "id": 1, "conceptId": 1, "type": "supply-demand", "params": { "a": 100, "b": -2, "c": 20, "d": 3 } }
  ],
  "simulations": [
    { "id": 1, "graphId": 1, "name": "Tác động thuế", "policy": "tax", "value": 5 }
  ],
  "exercises": [
    { "id": 1, "topicId": 1, "question": "Cho Qd = 100 - 2P, Qs = -20 + 3P. Tìm P*, Q*.", "answer": "P*=24, Q*=52", "explain": "..." }
  ]
}
```

Mỗi entity 5–8 bản ghi mẫu, có `id`, `timestamps` và trường phù hợp nghiệp vụ.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng đồ thị cung - cầu & mô phỏng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Kinh tế vi mô/vĩ mô. Hãy giúp tôi thiết kế đồ thị cung - cầu tương tác kèm mô phỏng thuế.
+ Giao diện: trang đồ thị và mô phỏng thị trường của sinh viên
+ Đối tượng: [sinh viên đại học xem]
+ Yêu cầu trực quan: vẽ Canvas, trượt tham số dịch chuyển đường, hiện điểm cân bằng, cập nhật mô phỏng
+ Hãy giải thích logic sau khi sinh để tôi hiểu cách dữ liệu được render.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống EconPlay, gồm các entity users, topics, concepts, graphs, simulations, exercises, examSets, submissions, progressLogs, mỗi entity 5–8 bản ghi mẫu theo môn Kinh tế vi mô/vĩ mô, có id, timestamps, và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước làm tính năng đồ thị cung - cầu: hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (đồ thị, mô phỏng thị trường, bài tập, kết quả). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giảng viên** (dựng khái niệm, đồ thị/mô phỏng, bài tập/đề, chấm bài). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-econplay-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS đồ thị & mô phỏng, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-graph.mp4
SV2-01-teacher-sim-build.mp4
SV3-01-admin-user-management.mp4
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): đồ thị cung - cầu, mô phỏng thị trường, bài tập có lời giải từng bước.
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

## 25. Chuẩn đầu ra mong đợi
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.