# BTL-19 – NurseMate – Hệ thống hỗ trợ giảng dạy và học tập môn Điều dưỡng cơ bản

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Đào tạo Điều dưỡng – Điều dưỡng cơ bản (quy trình chăm sóc 5 bước, dấu hiệu sinh tồn, tình huống lâm sàng).**

## 2. Tóm tắt sản phẩm

**NurseMate – Hệ thống hỗ trợ giảng dạy và học tập môn Điều dưỡng cơ bản** giúp **giảng viên** dựng quy trình chăm sóc mẫu, tình huống lâm sàng và tiêu chí đánh giá, đồng thời giúp **sinh viên** tiếp thu dễ hiểu qua **thẻ quy trình chăm sóc từng bước, phiếu chăm sóc theo quy trình 5 bước, ghi nhận dấu hiệu sinh tồn và giải quyết tình huống**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Điều dưỡng cơ bản yêu cầu sinh viên nắm thao tác chăm sóc chuẩn hóa (vệ sinh, dinh dưỡng, thuốc, dấu hiệu sinh tồn) và quy trình 5 bước (Nhận định – Chẩn đoán điều dưỡng – Lập kế hoạch – Thực hiện – Đánh giá). Sinh viên khó luyện tập nếu thiếu môi trường mô phỏng có cấu trúc; giảng viên khó thiết kế tình huống và theo dõi từng cá nhân; tài liệu quy trình phân bố rời rạc. Vì vậy cần một hệ thống trực quan hóa quy trình, kèm kênh ghi nhận sinh tồn và đánh giá năng lực thực hành.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó ghi nhớ trình tự chính xác của từng quy trình chăm sóc điều dưỡng.
- **P2.** Việc ghi nhận và đánh giá dấu hiệu sinh tồn (mạch, nhiệt độ, huyết áp, nhịp thở) cần thực hành và đối chiếu theo chuẩn.
- **P3.** Giảng viên khó thiết kế tình huống lâm sàng và khó đánh giá năng lực thực hành từng sinh viên.
- **P4.** Sinh viên thiếu kênh hướng dẫn từng bước và phản hồi khi thực hiện quy trình chăm sóc.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Điều dưỡng thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò: Khách, Sinh viên, Giảng viên, Quản trị viên.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: bệnh nhân, quy trình, phiếu chăm sóc, dấu hiệu sinh tồn, tình huống, đánh giá.
- **O4.** Dùng JavaScript/DOM cho thẻ quy trình, form dấu hiệu sinh tồn, chấm điểm phiếu, tìm kiếm, lọc, kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (entity + `db.json`).
- **O6.** Thiết kế ít nhất **3 cách truyền đạt kiến thức trực quan** (thẻ quy trình từng bước, bài đồ dấu hiệu sinh tồn, tình huống lâm sàng tương tác).
- **O7.** Tổ chức làm việc nhóm bằng Trello và Git/GitHub theo nhánh + yêu cầu hợp nhất, kèm video OBS.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu khóa, quy trình chăm sóc mẫu, bản trình diễn dấu hiệu sinh tồn |
| Sinh viên | Học quy trình chăm sóc, lập phiếu chăm sóc 5 bước, ghi nhận sinh tồn, giải tình huống, theo dõi tiến độ |
| Giảng viên | Xây dựng quy trình/tình huống, chấm phiếu chăm sóc, quản lý lớp, theo dõi tiến độ |
| Quản trị viên | Quản lý tài khoản, danh mục bệnh nhân/quy trình, cấu hình chuẩn sinh tồn, duyệt nội dung |

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
| Khách | Giới thiệu khóa điều dưỡng | Xem tổng quan quy trình chăm sóc cơ bản | Tổng quan khóa | `visitor-care-overview.html` | R | SV1 |
| Khách | Trải nghiệm quy trình mẫu | Xem một quy trình chăm sóc công khai | Quy trình mẫu | `visitor-procedure-preview.html` | R | SV1 |
| Sinh viên | Học quy trình chăm sóc | Học theo thẻ từng bước của quy trình | Học quy trình | `student-procedure-learn.html` | R, Đang tải/Rỗng | SV1 |
| Sinh viên | Lập phiếu chăm sóc | Thực hiện phiếu theo quy trình 5 bước | Phiếu chăm sóc | `student-care-plan.html` | C/R/U, Đang chờ | SV1 |
| Sinh viên | Ghi nhận sinh tồn | Nhập mạch, nhiệt, huyết áp, nhịp thở, so chuẩn | Dấu hiệu sinh tồn | `student-vital-signs.html` | C/R, Thành công/Lỗi | SV2 |
| Sinh viên | Giải quyết tình huống | Xử lý tình huống lâm sàng và nhận phản hồi | Tình huống lâm sàng | `student-scenario-solve.html` | C/R, Hoàn thành | SV2 |
| Giảng viên | Xây dựng quy trình | Thêm/sửa quy trình và bước thao tác | Quản lý quy trình | `teacher-procedure-manage.html` | C/R/U/D(Lưu trữ) | SV3 |
| Giảng viên | Soạn tình huống | Tạo tình huống lâm sàng để sinh viên giải | Soạn tình huống | `teacher-scenario-build.html` | C/R/U, Đang chờ | SV3 |
| Giảng viên | Chấm phiếu chăm sóc | Chấm điểm phiếu và phản hồi | Chấm phiếu | `teacher-grading.html` | C/R/U, Bị từ chối | SV3 |
| Giảng viên | Đánh giá tiến độ | Xem tiến độ và kết quả từng sinh viên | Tiến độ sinh viên | `teacher-student-progress.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Thêm/cấm/sửa tài khoản, phân quyền | Quản lý người dùng | `admin-user-management.html` | C/R/U/D(Vô hiệu hóa) | SV2 |
| Quản trị viên | Cấu hình chuẩn sinh tồn | Cấu hình chuẩn dấu hiệu sinh tồn, danh mục | Cấu hình chuẩn | `admin-standard-config.html` | C/R/U, Đã hủy/Lưu trữ | SV2 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter loại quy trình, đổi table thành card bệnh nhân, thêm field + validation cho dấu hiệu sinh tồn, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-care-overview.html` | Tổng quan khóa | R | Xem tổng quan các quy trình chăm sóc cơ bản. |
| 2 | `visitor-procedure-preview.html` | Quy trình mẫu | R | Xem một quy trình chăm sóc công khai. |
| 3 | `visitor-signs-demo.html` | Trình diễn sinh tồn | R | Thử ghi và so chuẩn dấu hiệu sinh tồn mẫu. |

### Học sinh / Sinh viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Theo dõi tiến độ kỹ năng và phiếu chăm sóc. |
| 5 | `student-procedure-learn.html` | Học quy trình | R | Học quy trình chăm sóc theo thẻ từng bước. |
| 6 | `student-care-plan.html` | Phiếu chăm sóc | C/R/U | Lập phiếu chăm sóc theo quy trình 5 bước. |
| 7 | `student-vital-signs.html` | Dấu hiệu sinh tồn | C/R | Ghi nhận mạch, nhiệt, huyết áp, nhịp thở, so chuẩn. |
| 8 | `student-scenario-solve.html` | Tình huống lâm sàng | C/R | Giải quyết tình huống và nhận phản hồi từng bước. |

### Giáo viên / Giảng viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển | R | Tổng quan lớp, quy trình, mức thực hành. |
| 10 | `teacher-procedure-manage.html` | Quản lý quy trình | C/R/U/D | Xây dựng quy trình chăm sóc và các bước thao tác. |
| 11 | `teacher-scenario-build.html` | Soạn tình huống | C/R/U | Soạn tình huống lâm sàng để sinh viên giải. |
| 12 | `teacher-grading.html` | Chấm phiếu | C/R/U | Chấm phiếu chăm sóc và phản hồi. |
| 13 | `teacher-analysis.html` | Phân tích năng lực | R | Xem báo cáo năng lực lớp theo kỹ năng. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển | R | Quản trị hệ thống NurseMate. |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản, phân quyền, vô hiệu hóa. |
| 16 | `admin-standard-config.html` | Cấu hình chuẩn | C/R/U | Cấu hình chuẩn dấu hiệu sinh tồn, danh mục quy trình. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (thẻ quy trình, list bệnh nhân, table dấu hiệu sinh tồn, form phiếu chăm sóc, form tình huống, dashboard); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (tick bước quy trình, nhập chỉ số sinh tồn, chấm điểm phiếu); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản theo vai trò (mock data). |
| `patients` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Hồ sơ bệnh nhân mẫu cho thực hành. |
| `procedures` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Quy trình chăm sóc + danh sách bước. |
| `carePlans` | ✓ | ✓ | ✓ | ✓/Hủy | Phiếu chăm sóc theo quy trình 5 bước. |
| `vitalSigns` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Dấu hiệu sinh tồn theo thời điểm. |
| `scenarios` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tình huống lâm sàng để giải quyết. |
| `assessments` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Kết quả chấm điểm thực hành. |
| `careGuidelines` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chuẩn thao tác/ngưỡng sinh tồn. |

> Đi kèm `db.json` gợi ý: các entity `users`, `patients`, `procedures`, `carePlans`, `vitalSigns`, `scenarios`, `assessments`, `careGuidelines`, mỗi entity 5–8 bản ghi mẫu theo môn Điều dưỡng (có `id`, `createdAt`, `updatedAt`).

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Điều dưỡng cơ bản. Liệt kê tối thiểu **3 cách truyền đạt**, mỗi cách gắn với một màn hình.

- **Cách 1 – Thẻ quy trình chăm sóc từng bước** (màn hình `student-procedure-learn.html`). Mỗi quy trình được tách thành thẻ bước với điều khiển tiến/lùi, tick hoàn thành từng bước, kèm hình minh họa thao tác. Vì sao giúp hiểu hơn: sinh viên ghi nhớ đúng trình tự và thao tác chuẩn thay vì học "mớ" gộp, bám sát thực hành lâm sàng.

- **Cách 2 – Biểu đồ dấu hiệu sinh tồn** (màn hình `student-vital-signs.html`). Nhập chỉ số mạch/nhiệt/huyết áp/nhịp thở, hệ thống vẽ biểu đồ theo thời gian và đối chiếu với ngưỡng chuẩn, tô đỏ khi bất thường. Vì sao giúp hiểu hơn: trực quan hóa diễn biến người bệnh và rèn nhận biết bất thường sinh tồn.

- **Cách 3 – Mô phỏng tình huống lâm sàng** (màn hình `student-scenario-solve.html`). Sinh viên đọc ca bệnh, chọn bước chăm sóc theo trình tự, hệ thống phản hồi đúng/sai từng bước kèm lý do. Vì sao giúp hiểu hơn: biến kiến thức thành quyết định đúng như thực tế điều dưỡng, rèn tư duy quy trình.

- **Cách 4 – Phiếu chăm sóc 5 bước có hướng dẫn** (màn hình `student-care-plan.html`). Form đánh dấu 5 bước (Nhận định – Chẩn đoán – Kế hoạch – Thực hiện – Đánh giá) với goị ý từng ô, lưu trạng thái hoàn thành. Vì sao giúp hiểu hơn: buộc sinh viên luyện đúng cấu trúc tư duy nghề nghiệp chuẩn hóa.

Với mỗi cách, nhóm ghi rõ **màn hình áp dụng** và **lý do giúp người học hiểu hơn** như trên.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc** và **không chấm điểm chặn đề tài** chỉ vì có/không có AI. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ (Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát).

### AI-1 – AI Care Procedure Adviser (tùy chọn)
Sinh viên bị mắc ở bước nào gõ tình huống; AI gợi ý bước tiếp theo của quy trình và giải thích lý do. Cách mô phỏng: JSON giả lập quy trình, JavaScript theo trạng thái bước, phản hồi định sẵn; API LLM tùy chọn.

### AI-2 – AI Vital Signs Reader (tùy chọn)
Nhập dấu hiệu sinh tồn; AI đánh giá so với chuẩn và cảnh báo bất thường kèm giải thích. Cách mô phỏng: JSON giả lập chuẩn chỉ số, JavaScript theo ngưỡng, cảnh báo định sẵn; API LLM tùy chọn.

### AI-3 – AI Care Plan Review (tùy chọn)
AI nhận xét phiếu chăm sóc sinh viên làm, chỉ ra bước thiếu/sai và gợi ý cải thiện. Cách mô phỏng: JSON giả lập, JavaScript theo quy tắc đối chiếu check-list, phản hồi định sẵn; API LLM tùy chọn.

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
patients
procedures
carePlans
vitalSigns
scenarios
assessments
careGuidelines
```

`db.json` gợi ý (đặt tại root) chứa 8 entity trên, mỗi entity 5–8 bản ghi mẫu theo môn Điều dưỡng, ví dụ `vitalSigns`: `{ id, patientId, temperature, pulse, bloodPressure {sys, dia}, respiration, recordedAt, status, createdAt, updatedAt }`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng (quy trình chăm sóc)
```text
Tôi là SV môn CSE122 đang làm BTL về Điều dưỡng cơ bản (NurseMate). Hãy giúp tôi dựng nội dung cho trang "Học quy trình chăm sóc".
+ Quy trình: vệ sinh cá nhân cho người bệnh nằm liệt giường, 8 bước.
+ Vai trò người xem: sinh viên điều dưỡng mới học.
+ Yêu cầu trực quan: thẻ từng bước có điều khiển tiến/lùi, hình minh họa, trắc nghiệm nhanh kèm giải thích, form phiếu chăm sóc 5 bước.
+ Hãy giải thích logic HTML/JS của thẻ bước để tôi hiểu và tự làm lại.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống NurseMate (môn Điều dưỡng cơ bản), gồm các entity: users, patients, procedures, carePlans, vitalSigns, scenarios, assessments, careGuidelines. Mỗi entity 5–8 bản ghi mẫu theo quy trình chăm sóc và dấu hiệu sinh tồn (mạch, nhiệt, huyết áp, nhịp thở), có id, timestamps và trường nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng "form ghi nhận dấu hiệu sinh tồn có so chuẩn": hỏi tôi cần gì, sau mỗi đoạn code giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại (ví dụ thêm ngưỡng bất thường cho một chỉ số).
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (học quy trình, phiếu chăm sóc, dấu hiệu sinh tồn). Trách nhiệm chéo: **một phần giao diện dùng chung, thẻ quy trình, responsive**.

### SV2
Phụ trách: **Quản trị viên** (tài khoản, cấu hình chuẩn sinh tồn) + một phần màn hình sinh viên (tình huống lâm sàng). Trách nhiệm chéo: **JavaScript / dữ liệu / mock API; review PR**.

### SV3
Phụ trách: **Giảng viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: **nhất quán toàn dự án, phát hành**.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-nursemate-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.
- Ví dụ nhánh: `feature/student-care-plan`, `feature/teacher-procedure-manage`, `feature/admin-standard-config`.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.

Task mẫu: `TASK-01` mockup thẻ quy trình, `TASK-02` HTML vai trò Sinh viên, `TASK-03` responsive CSS, `TASK-04` JS phiếu chăm sóc/sinh tồn, `TASK-05` mock API, `TASK-06` (tùy chọn) AI, `TASK-07` kiểm thử đa trình duyệt, `TASK-08` OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI (thẻ bước, ô nhập sinh tồn, cột chấm điểm).
5. **Thực hiện một thay đổi nhỏ tại chỗ** (thêm bước quy trình, thêm ngưỡng sinh tồn, đổi layout) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** mà giảng viên hoặc nhóm yêu cầu (minh chứng "hiểu và làm lại được").

Quy tắc đặt tên:
```text
SV1-01-student-care-plan.mp4
SV2-01-admin-user-management.mp4
SV3-01-teacher-procedure-manage.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi, mockup tương tác thẻ quy trình.

## 20. Cấu trúc kho mã nguồn gợi ý
```text
project-root/
├── README.md
├── docs/ (project-proposal, screen-list, team-assignment, ai-usage-report)
├── design/ (figma-link.txt, mockups/)
├── pages/
├── assets/ (images, icons, data)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation (lọc theo loại quy trình).
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): thẻ quy trình từng bước, biểu đồ dấu hiệu sinh tồn, mô phỏng tình huống/phiếu chăm sóc.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ dấu hiệu sinh tồn; thông báo nổi cảnh báo bất thường; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; PWA; cá nhân hóa lộ trình kỹ năng; tích hợp mô phỏng thao tác.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (thẻ quy trình, biểu đồ sinh tồn, phiếu chăm sóc, tình huống lâm sàng); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.