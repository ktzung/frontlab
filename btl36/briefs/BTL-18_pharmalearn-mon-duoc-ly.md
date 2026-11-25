# BTL-18 – PharmaLearn – Hệ thống hỗ trợ giảng dạy và học tập môn Dược lý

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Đào tạo Dược và Y – Dược lý học (tương tác thuốc, dược động học, cơ chế tác dụng, liều dùng, tác dụng phụ).**

## 2. Tóm tắt sản phẩm

**PharmaLearn – Hệ thống hỗ trợ giảng dạy và học tập môn Dược lý** giúp **giảng viên** dựng học liệu về thuốc, nhóm thuốc, cơ chế tác dụng, dược động học và quy tắc liều, đồng thời giúp **sinh viên** tiếp thu dễ hiểu qua **bảng dược động học trực quan, bộ tra cứu tương tác thuốc, bài tập tính liều/kê đơn và trắc nghiệm**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Dược lý là môn cốt lõi của ngành Dược và Y, yêu cầu sinh viên nắm cơ chế tác dụng, cách dùng, liều, tác dụng phụ và tương tác giữa các thuốc. Kiến thức rất rộng và chi tiết, dễ nhầm liều và dễ bỏ sót tương tác khi thực hành. Sinh viên thiếu công cụ tra cứu nhanh và tự kiểm tra; giảng viên khó thiết kế bài tập về dược động học/tương tác và khó theo dõi từng cá nhân, còn tài liệu phân bố rời rạc. Vì vậy cần một hệ thống trực quan hóa thông tin thuốc có cấu trúc, kèm cảnh báo tương tác và liều.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó nhớ cơ chế, liều, tác dụng phụ và tương tác của hàng trăm loại thuốc.
- **P2.** Nguy cơ nhầm liều và bỏ sót tương tác thuốc khi thực hành do thiếu công cụ tra cứu và cảnh báo.
- **P3.** Giảng viên khó xây dựng bài tập về dược động học/tương tác và khó đánh giá năng lực từng sinh viên.
- **P4.** Sinh viên thiếu kênh tra cứu, hỏi đáp chuyên sâu theo từng loại thuốc cụ thể.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Dược lý thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò: Khách, Sinh viên, Giảng viên, Quản trị viên.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: thuốc, nhóm thuốc, tương tác, liều, đơn/thẻ kê, kết quả kiểm tra.
- **O4.** Dùng JavaScript/DOM cho bảng dược động học, máy tính liều, tra cứu tương tác, tìm kiếm, lọc theo nhóm, kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (entity + `db.json`).
- **O6.** Thiết kế ít nhất **3 cách truyền đạt kiến thức trực quan** (bảng dược động học, bản đồ tương tác thuốc, trắc nghiệm/đố nhanh).
- **O7.** Tổ chức làm việc nhóm bằng Trello và Git/GitHub theo nhánh + yêu cầu hợp nhất, kèm video OBS.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu khóa, tra cứu thuốc mẫu, thử bản trình diễn tương tác |
| Sinh viên | Tra cứu thuốc, học dược động học, làm bài tập tính liều/kê đơn, trắc nghiệm, theo dõi tiến độ |
| Giảng viên | Khai báo thuốc/nhóm thuốc, cấu hình tương tác, soạn bài tập, quản lý lớp, theo dõi tiến độ |
| Quản trị viên | Quản lý tài khoản, danh mục thuốc, cấu hình hệ thống, duyệt nội dung |

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
| Khách | Giới thiệu nội dung môn Dược lý | Xem tổng quan các nhóm thuốc | Tổng quan khóa | `visitor-library-overview.html` | R | SV1 |
| Khách | Trải nghiệm tra cứu thuốc | Xem thông tin mẫu một thuốc phổ biến | Chi tiết thuốc mẫu | `visitor-drug-preview.html` | R | SV1 |
| Sinh viên | Tra cứu thông tin thuốc | Xem cơ chế, liều, dược động học, tác dụng phụ | Chi tiết thuốc | `student-drug-detail.html` | R, Đang tải/Rỗng | SV1 |
| Sinh viên | Cảnh báo tương tác thuốc | Chọn danh sách thuốc, kiểm tra tương tác | Tra cứu tương tác | `student-interaction-check.html` | C/R, Thành công/Lỗi | SV1 |
| Sinh viên | Luyện tính liều/kê đơn | Làm bài tập tính liều theo tuổi/cân nặng | Bài tập tính liều | `student-dose-exercise.html` | C/R, Hoàn thành | SV2 |
| Sinh viên | Tự kiểm tra kiến thức | Làm trắc nghiệm nhóm thuốc/tương tác | Trắc nghiệm dược lý | `student-pharma-quiz.html` | C/R, Thành công/Lỗi | SV2 |
| Giảng viên | Khai báo học liệu thuốc | Thêm/sửa thuốc, nhóm, cơ chế, liều | Quản lý thuốc | `teacher-drug-manage.html` | C/R/U/D(Lưu trữ) | SV3 |
| Giảng viên | Cấu hình cảnh báo tương tác | Lập bảng tương tác giữa các thuốc | Cấu hình tương tác | `teacher-interaction-build.html` | C/R/U, Đang chờ | SV3 |
| Giảng viên | Soạn bài tập kiểm tra | Tạo bài tập tính liều và trắc nghiệm | Soạn bài tập | `teacher-exercise-build.html` | C/R/U, Đang chờ | SV3 |
| Giảng viên | Đánh giá sinh viên | Xem tiến độ và kết quả từng sinh viên | Tiến độ sinh viên | `teacher-student-progress.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Thêm/cấm/sửa tài khoản, phân quyền | Quản lý người dùng | `admin-user-management.html` | C/R/U/D(Vô hiệu hóa) | SV2 |
| Quản trị viên | Cấu hình danh mục thuốc | Cấu hình nhóm thuốc, quy định liều | Cấu hình CSDL | `admin-database-config.html` | C/R/U, Đã hủy/Lưu trữ | SV2 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter nhóm thuốc, đổi table thành card thuốc, thêm field + validation cho liều, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-library-overview.html` | Tổng quan khóa | R | Xem tổng quan các nhóm thuốc và danh mục. |
| 2 | `visitor-drug-preview.html` | Chi tiết thuốc mẫu | R | Xem thông tin và dược động học của một thuốc phổ biến. |
| 3 | `visitor-interaction-demo.html` | Trình diễn tương tác | R | Thử tra cứu tương tác giữa 2 thuốc mẫu. |

### Học sinh / Sinh viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Theo dõi tiến độ học và nhóm thuốc đã thuộc. |
| 5 | `student-drug-detail.html` | Chi tiết thuốc | R | Xem cơ chế, liều, dược động học, tác dụng phụ. |
| 6 | `student-interaction-check.html` | Tra cứu tương tác | C/R | Chọn danh sách thuốc, nhận cảnh báo tương tác kèm mức độ. |
| 7 | `student-dose-exercise.html` | Bài tập tính liều/kê đơn | C/R | Làm bài tập tính liều theo tuổi/cân nặng/chỉ định. |
| 8 | `student-pharma-quiz.html` | Trắc nghiệm dược lý | C/R | Trắc nghiệm nhanh nhóm thuốc, tương tác, liều kèm giải thích. |

### Giáo viên / Giảng viên → 5 màn hình, sát môn học
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển | R | Tổng quan lớp, thuốc, mức nắm bắt. |
| 10 | `teacher-drug-manage.html` | Quản lý thuốc | C/R/U/D | Khai báo thuốc, nhóm, cơ chế, liều, tác dụng phụ. |
| 11 | `teacher-interaction-build.html` | Cấu hình tương tác | C/R/U | Lập bảng tương tác giữa các thuốc và mức độ. |
| 12 | `teacher-exercise-build.html` | Soạn bài tập | C/R/U | Soạn bài tập tính liều và trắc nghiệm. |
| 13 | `teacher-analysis.html` | Phân tích năng lực | R | Xem báo cáo năng lực lớp theo nhóm thuốc. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển | R | Quản trị hệ thống PharmaLearn. |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản, phân quyền, vô hiệu hóa. |
| 16 | `admin-database-config.html` | Cấu hình danh mục | C/R/U | Cấu hình nhóm thuốc, quy định liều, danh mục. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card thuốc, list nhóm, table dược động học, form khai báo tương tác, form tính liều, dashboard); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (chọn thuốc, tính liều, đánh dấu tương tác, chấm trắc nghiệm); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản theo vai trò (mock data). |
| `drugGroups` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Nhóm thuốc theo phân loại dược lý. |
| `drugs` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thuốc: cơ chế, liều, tác dụng phụ. |
| `drugInteractions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Cặp tương tác + mức độ cảnh báo. |
| `dosingRules` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Quy tắc liều theo tuổi/cân nặng/chỉ định. |
| `prescriptions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thẻ kê đơn/thuốc trong bài tập. |
| `interactionChecks` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Kết quả tra cứu tương tác của sinh viên. |
| `quizAttempts` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Lần làm trắc nghiệm và điểm. |

> Đi kèm `db.json` gợi ý: các entity `users`, `drugGroups`, `drugs`, `drugInteractions`, `dosingRules`, `prescriptions`, `interactionChecks`, `quizAttempts`, mỗi entity 5–8 bản ghi mẫu theo môn Dược lý (có `id`, `createdAt`, `updatedAt`).

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Dược lý. Liệt kê tối thiểu **3 cách truyền đạt**, mỗi cách gắn với một màn hình.

- **Cách 1 – Bảng dược động học trực quan** (màn hình `student-drug-detail.html`). Tóm tắt 4 giai đoạn hấp thu – phân bố – chuyển hóa – thải trừ bằng bảng/biểu đồ theo thời gian, kèm nồng độ và thời gian bán thải. Vì sao giúp hiểu hơn: người học nắm được "thuốc đi trong cơ thể như thế nào" một cách trực quan thay vì học thuộc chữ.

- **Cách 2 – Bản đồ tương tác thuốc** (màn hình `student-interaction-check.html`). Chọn nhiều thuốc sẽ vẽ lưới tương tác với màu phân loại mức độ (nhẹ/trung bình/nghiêm trọng) và giải thích cơ chế. Vì sao giúp hiểu hơn: trực quan hóa rủi ro an toàn dùng thuốc, giúp nhớ cặp tương tác nguy hiểm.

- **Cách 3 – Trắc nghiệm nhanh kèm giải thích** (màn hình `student-pharma-quiz.html`). Câu hỏi về nhóm thuốc/liều/tương tác, mỗi đáp án sai đều hiện lý do. Vì sao giúp hiểu hơn: vừa kiểm tra vừa củng cố kiến thức đúng ngay tại thời điểm sai.

- **Cách 4 – Bài tập tính liều có phản hồi từng bước** (màn hình `student-dose-exercise.html`). Sinh viên nhập liều, hệ thống hướng dẫn từng bước tính và so sánh với liều khuyến cáo, cảnh báo vượt/thấp. Vì sao giúp hiểu hơn: biến quy tắc cứng thành thao tác tính toán có kiểm chứng sát thực hành kê đơn.

Với mỗi cách, nhóm ghi rõ **màn hình áp dụng** và **lý do giúp người học hiểu hơn** như trên.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc** và **không chấm điểm chặn đề tài** chỉ vì có/không có AI. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ (Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát).

### AI-1 – AI Interaction Checker (tùy chọn)
Sinh viên nhập danh sách thuốc; AI rà soát tương tác giữa chúng, phân loại mức độ và giải thích cơ chế. Cách mô phỏng: JSON giả lập bảng tương tác, JavaScript theo quy tắc so khớp, phản hồi định sẵn; API LLM tùy chọn.

### AI-2 – AI Dosage Alert (tùy chọn)
Cảnh báo khi liều nhập vào vượt/thấp hơn phạm vi khuyến cáo, gợi ý liều an toàn theo đối tượng. Cách mô phỏng: JSON giả lập quy tắc liều, JavaScript kiểm tra theo ngưỡng, cảnh báo định sẵn; API LLM tùy chọn.

### AI-3 – AI Pharmacokinetic Explainer (tùy chọn)
Giải thích đường biểu diễn dược động học của một thuốc theo 4 giai đoạn bằng lời dễ hiểu. Cách mô phỏng: JSON giả lập, JavaScript theo quy tắc, phản hồi định sẵn; API LLM tùy chọn.

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
drugGroups
drugs
drugInteractions
dosingRules
prescriptions
interactionChecks
quizAttempts
```

`db.json` gợi ý (đặt tại root) chứa 8 entity trên, mỗi entity 5–8 bản ghi mẫu theo môn Dược lý, ví dụ `drugs`: `{ id, name: "Paracetamol", group: "giảm đau hạ sốt", mechanism, dose, sideEffects, pharmacokinetics {absorption, distribution, metabolism, excretion}, createdAt, updatedAt }`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng (dược động học)
```text
Tôi là SV môn CSE122 đang làm BTL về Dược lý (PharmaLearn). Hãy giúp tôi dựng nội dung cho trang "Chi tiết thuốc".
+ Thuốc: Paracetamol, nhóm giảm đau hạ sốt.
+ Vai trò người xem: sinh viên dược mới học.
+ Yêu cầu trực quan: bảng dược động học 4 giai đoạn (hấp thu–phân bố–chuyển hóa–thải trừ), thời gian bán thải, liều, tác dụng phụ, bài trắc nghiệm nhanh kèm giải thích.
+ Hãy giải thích logic HTML/JS của bảng và máy tính liều để tôi hiểu và tự làm lại.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống PharmaLearn (môn Dược lý), gồm các entity: users, drugGroups, drugs, drugInteractions, dosingRules, prescriptions, interactionChecks, quizAttempts. Mỗi entity 5–8 bản ghi mẫu theo nhóm thuốc (giảm đau, kháng sinh, tim mạch, tiêu hóa), có id, timestamps và trường nghiệp vụ (mechanism, dose, interaction level). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng "máy tra cứu tương tác thuốc": hỏi tôi cần gì, sau mỗi đoạn code giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại (ví dụ thêm một cặp tương tác mới vào bảng).
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (chi tiết thuốc, dược động học, bài tập tính liều, trắc nghiệm). Trách nhiệm chéo: **một phần giao diện dùng chung, bảng dược động học, responsive**.

### SV2
Phụ trách: **Quản trị viên** (tài khoản, cấu hình danh mục thuốc) + một phần màn hình sinh viên (tra cứu tương tác). Trách nhiệm chéo: **JavaScript / dữ liệu / mock API; review PR**.

### SV3
Phụ trách: **Giảng viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: **nhất quán toàn dự án, phát hành**.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-pharmalearn-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.
- Ví dụ nhánh: `feature/student-interaction-check`, `feature/teacher-drug-manage`, `feature/admin-database-config`.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.

Task mẫu: `TASK-01` mockup bảng dược động học, `TASK-02` HTML vai trò Sinh viên, `TASK-03` responsive CSS, `TASK-04` JS máy tính liều/tương tác, `TASK-05` mock API, `TASK-06` (tùy chọn) AI, `TASK-07` kiểm thử đa trình duyệt, `TASK-08` OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI (bảng dược động học, nút tính liều, cột cảnh báo).
5. **Thực hiện một thay đổi nhỏ tại chỗ** (thêm một thuốc, thêm một cặp tương tác, đổi layout) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** mà giảng viên hoặc nhóm yêu cầu (minh chứng "hiểu và làm lại được").

Quy tắc đặt tên:
```text
SV1-01-student-drug-detail.mp4
SV2-01-admin-user-management.mp4
SV3-01-teacher-drug-manage.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi, mockup tương tác bảng dược động học.

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
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation (lọc theo nhóm thuốc).
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): bảng dược động học, bản đồ tương tác thuốc, trắc nghiệm/bài tập tính liều.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ nồng độ theo thời gian; thông báo nổi cảnh báo tương tác; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; cập nhật nguồn thuốc công khai; PWA; cá nhân hóa lộ trình học.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (bảng dược động học, bản đồ tương tác thuốc, trắc nghiệm, bài tập tính liều); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.