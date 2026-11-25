# BTL-25 – StatLens – Hệ thống hỗ trợ giảng dạy và học tập môn Xác suất thống kê

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Toán học ứng dụng – Giảng dạy và học tập môn Xác suất thống kê** (biến ngẫu nhiên, phân phối xác suất, ước lượng, kiểm định giả thuyết, hồi quy).

## 2. Tóm tắt sản phẩm

**StatLens – Hệ thống hỗ trợ giảng dạy và học tập môn Xác suất thống kê** giúp **giảng viên** xây dựng học liệu trực quan (bài giảng phân phối, bộ bài tập ước lượng/kiểm định, bộ dữ liệu mẫu) và giúp **sinh viên** hiểu sâu qua **máy tính thống kê**, **biểu đồ phân phối xác suất tương tác**, và **bài tập kiểm định giả thuyết có giải thích từng bước**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Xác suất thống kê là môn toán ứng dụng phổ biến cho sinh viên các ngành công nghệ, kinh tế. Đây là môn nhiều công thức và khái niệm "ẩn" — sinh viên khó hình dung hình dạng phân phối chuẩn, phân phối nhị thức thay đổi thế nào khi tham số đổi, khó hiểu ý nghĩa khoảng tin cậy hay p-value khi kiểm định. Giảng viên cần trực quan hóa biểu đồ phân phối và cung cấp máy tính thống kê để sinh viên thấy kết quả số và đồ thị cùng lúc.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó **hình dung hình dạng các phân phối xác suất** (chuẩn, nhị thức, Poisson, Student) và cách chúng đổi khi tham số thay đổi.
- **P2.** Việc **tính toán thủ công** các đại lượng thống kê (trung bình, phương sai, khoảng tin cậy, p-value) dễ sai và khó kiểm chứng.
- **P3.** Giảng viên khó giao và chấm các bài tập ước lượng/kiểm định một cách nhất quán, sinh viên khó theo dõi từng bước suy luận.
- **P4.** Thiếu kênh luyện tập trực quan với **biểu đồ + máy tính thống kê** để sinh viên kiểm chứng đáp án và hiểu bản chất.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Xác suất thống kê thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ phù hợp: chương, bài giảng, bộ dữ liệu, bài tập, nộp bài, chấm điểm, tiến độ.
- **O4.** Dùng JavaScript/DOM để vẽ **biểu đồ phân phối (SVG/Canvas)** và xây **máy tính thống kê** (ước lượng, kiểm định).
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (kèm `db.json`).
- **O6.** Thiết kế 3 ý tưởng AI mô phỏng ở Frontend (giải thích p-value, gợi ý phân phối phù hợp, phân tích bộ dữ liệu) — **tùy chọn, không bắt buộc**.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa, xem biểu đồ phân phối mẫu, góp ý chủ đề cần bổ sung |
| Sinh viên | Học bài giảng phân phối, dùng máy tính thống kê, xem biểu đồ tương tác, làm bài tập, xem điểm & tiến độ, hỏi AI |
| Giảng viên | Dựng bài giảng và học liệu, tạo bộ dữ liệu mẫu, tạo bài tập ước lượng/kiểm định, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chương trình học, bộ dữ liệu mẫu, cấu hình hệ thống, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (xem biểu đồ, dùng máy tính thống kê, làm bài)
↓
Xem trạng thái / dữ liệu / phản hồi
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
| Khách | Giới thiệu & xem thử | Xem khóa học, biểu đồ mẫu, góp ý | Trang chủ | `index.html` | R | SV1 |
| Sinh viên | Hiểu phân phối | Điều chỉnh tham số, xem biểu đồ đổi theo | Distribution Explorer | `student-distribution-explorer.html` | C/R/U | SV1 |
| Sinh viên | Tính toán nhanh | Nhập số liệu, tính đại lượng thống kê | Stats Calculator | `student-stats-calculator.html` | C/R/U — Lưu | SV1 |
| Sinh viên | Học kiểm định | Làm bài kiểm định giả thuyết có đáp án bước | Hypothesis Testing | `student-hypothesis-test.html` | C/R/U — Nộp | SV2 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, tiến độ module | Bảng điều khiển SV | `student-dashboard.html` | R | SV2 |
| Giảng viên | Dựng học liệu | Tạo bài giảng, bộ dữ liệu, bài tập | Xây bài tập & dữ liệu | `teacher-exercise-build.html` | C/R/U/D — Vô hiệu hóa | SV2 |
| Giảng viên | Chấm & phản hồi | Duyệt bài nộp, chấm điểm | Chấm bài | `teacher-grading.html` | R/U — Đang chờ/Đạt/Chưa đạt | SV2 |
| Giảng viên | Phân tích lớp | Xem báo cáo năng lực | Bảng điều khiển GV | `teacher-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý & cấu hình | Quản lý tài khoản, bộ dữ liệu, quyền | Quản trị hệ thống | `admin-dashboard.html` | R | SV3 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo phân phối, đổi table thành card bài tập, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình cơ bản
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang chủ | R | Giới thiệu khóa Xác suất thống kê, các module phân phối/máy tính/kiểm định |
| 2 | `visitor-distribution-preview.html` | Xem biểu đồ mẫu | R | Xem minh họa phân phối chuẩn/nhị thức khi đổi tham số |
| 3 | `visitor-topic-feedback.html` | Góp ý chủ đề | C/R | Đề xuất chủ đề thống kê cần bổ sung |

### Học sinh / Sinh viên → 5 màn hình, sát môn Xác suất thống kê
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Tiến độ, điểm các module phân phối / máy tính / kiểm định |
| 5 | `student-distribution-explorer.html` | Distribution Explorer | C/R/U | Vẽ biểu đồ phân phối SVG/Canvas, kéo tham số để xem đồ thị đổi |
| 6 | `student-stats-calculator.html` | Stats Calculator | C/R/U | Nhập số liệu, tính trung bình, phương sai, khoảng tin cậy, t/z-score |
| 7 | `student-hypothesis-test.html` | Hypothesis Testing | C/R/U | Giải bài kiểm định giả thuyết, đáp án giải thích từng bước |
| 8 | `student-formula-reference.html` | Công thức tham khảo | R | Tra bảng công thức và bảng phân phối (z, t, χ²) |

### Giáo viên / Giảng viên → 5 màn hình, sát môn Xác suất thống kê
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển GV | R | Tổng quan lớp, chương, mức hoàn thành bài tập |
| 10 | `teacher-dataset-builder.html` | Xây bộ dữ liệu mẫu | C/R/U | Tạo/nhập bộ số liệu mẫu cho bài tập |
| 11 | `teacher-exercise-build.html` | Xây bài tập | C/R/U/D | Tạo bài tập ước lượng/kiểm định kèm đáp án và biểu đồ mẫu |
| 12 | `teacher-grading.html` | Chấm bài | R/U | Xem bài nộp, chấm điểm, nhận xét cách suy luận |
| 13 | `teacher-class-analysis.html` | Phân tích lớp | R | Báo cáo năng lực theo chương/loại bài |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển Admin | R | Quản trị hệ thống StatLens |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản SV/GV, phân quyền |
| 16 | `admin-distribution-config.html` | Cấu hình phân phối | C/R/U | Cấu hình danh mục phân phối, bảng số, chương trình học |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát. Riêng môn Xác suất thống kê, giao diện điểm nhấn là **biểu đồ phân phối tương tác (SVG/Canvas)** và **máy tính thống kê** với kết quả số + đồ thị cùng lúc.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản SV/GV/Admin |
| `courses` | ✓ | ✓ | ✓ | ✓/Đóng | Khóa học Xác suất thống kê |
| `chapters` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chương: biến ngẫu nhiên, phân phối, ước lượng, kiểm định |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng trực quan từng chương |
| `distributions` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Danh mục phân phối (chuẩn, nhị thức, Poisson, Student) |
| `datasets` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bộ dữ liệu mẫu cho máy tính/bài tập |
| `calculations` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Lịch sử tính toán của sinh viên |
| `exercises` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Bài tập ước lượng/kiểm định kèm đáp án bước |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp, trạng thái Đang chờ/Đạt/Chưa đạt |
| `aiTutorLogs` | ✓ | ✓ | ✓ | ✓/Xóa | Nhật ký hỏi AI (nếu làm AI) |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Tối thiểu 3 cách truyền đạt gắn với môn Xác suất thống kê:

- **Biểu đồ phân phối tương tác (SVG/Canvas + thanh trượt tham số).** Màn hình `student-distribution-explorer.html`. Kéo thanh trượt để đổi µ, σ (chuẩn) hoặc n, p (nhị thức), đồ thị vẽ lại ngay, diện tích dưới đường cong tô màu khi chọn khoảng — giúp hiểu bản chất xác suất qua hình dạng chứ không phải chỉ công thức.
- **Máy tính thống kê có giải thích từng bước.** Màn hình `student-stats-calculator.html`. Nhập bộ số liệu, máy tính trung bình, phương sai, khoảng tin cậy, t/z-score và hiện từng bước tính bên cạnh — sinh viên kiểm chứng và theo dõi cách suy luận.
- **Bài tập kiểm định giả thuyết mô phỏng suy luận.** Màn hình `student-hypothesis-test.html`. Từ giả thuyết H0/H1, sinh viên chọn thống kê kiểm định, máy tính p-value và nhận xét bác bỏ/không bác bỏ kèm giải thích — rèn tư duy quyết định dựa trên số liệu.
- **Thẻ flashcard + trắc nghiệm nhanh công thức.** Màn hình `student-formula-reference.html`. Flashcard công thức và bảng phân phối (z, t, χ²) kèm minigame giúp ôn thi trước kỳ.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI p-value & Interpretation Guide
Nhập số liệu kiểm định, AI diễn giải ý nghĩa p-value bằng lời đơn giản và nhận xét có bác bỏ H0 không. Cách mô phỏng: JSON giả lập, JS theo quy tắc; LLM API tùy chọn. Giá trị: giúp sinh viên hiểu khái niệm p-value trừu tượng.

### AI-2 – AI Distribution Suggestion
Mô tả loại dữ liệu/biến (đếm số lần, đo lường liên tục, biến nhị phân), AI gợi ý phân phối phù hợp và lý do. Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: giúp sinh viên chọn đúng mô hình trong bài tập.

### AI-3 – AI Dataset Explorer
Nộp một bộ số liệu, AI tóm tắt nhanh (trung bình, phân tán, histogram, nhận xét phân phối). Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: giúp sinh viên khám phá dữ liệu trước khi chọn kiểm định.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity tối thiểu cho môn Xác suất thống kê:
`users`, `courses`, `chapters`, `lessons`, `distributions`, `datasets`, `calculations`, `exercises`, `submissions`, `aiTutorLogs`.

Gợi ý dữ liệu trong `db.json` (phân phối và bộ dữ liệu mẫu):

```json
{
  "distributions": [
    { "id": 1, "name": "Chuẩn", "params": ["mu", "sigma"], "default": { "mu": 0, "sigma": 1 } },
    { "id": 2, "name": "Nhị thức", "params": ["n", "p"], "default": { "n": 10, "p": 0.5 } },
    { "id": 3, "name": "Poisson", "params": ["lambda"], "default": { "lambda": 3 } }
  ],
  "datasets": [
    { "id": 1, "name": "Chiều cao SV (cm)", "values": [160, 165, 170, 168, 172, 175, 158, 180] },
    { "id": 2, "name": "Điểm thi lớp CNTT", "values": [6.5, 7.0, 8.0, 5.5, 9.0, 7.5] }
  ],
  "exercises": [
    {
      "id": 1,
      "title": "Kiểm định trung bình",
      "hypothesis": "H0: mu = 170, H1: mu != 170",
      "sigmaKnown": true,
      "answerSteps": ["Tính z-score", "Tra bảng z", "So sánh p-value với alpha = 0.05"]
    }
  ]
}
```

Dữ liệu nghiệp vụ (bài giảng, bài tập, bài nộp) dùng qua JSON Server / MockAPI / LocalStorage.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng sát môn Xác suất thống kê
```text
Tôi là SV môn CSE122 đang làm BTL về Xác suất thống kê (sản phẩm StatLens). Hãy giúp tôi soạn một bài giảng về khoảng tin cậy cho trung bình.
+ Tên giao diện: student-stats-calculator.html, người xem là sinh viên năm 2.
+ Yêu cầu trực quan: máy tính khoảng tin cậy có bước tính, biểu đồ biên sai số, thẻ flashcard công thức.
+ Hãy giải thích ý nghĩa mức tin cậy 95% sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho hệ thống
```text
Tạo file db.json (JSON Server) cho hệ thống StatLens môn Xác suất thống kê, gồm entity: users, courses, chapters, lessons, distributions, datasets, calculations, exercises, submissions (aiTutorLogs tùy chọn). Mỗi entity 5–8 bản ghi theo nghiệp vụ thống kê (phân phối mẫu, bộ số liệu, bài kiểm định). Có id, timestamps, trường phù hợp. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng một bài kiểm định mức ý nghĩa cho trung bình chiều cao lớp. Hỏi tôi cần kết quả gì (khoảng tin cậy, p-value), sau mỗi đoạn hướng dẫn giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên**. Trách nhiệm chéo: Distribution Explorer và máy tính thống kê (JavaScript/DOM, vẽ SVG/Canvas), một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giảng viên**. Trách nhiệm chéo: xây bộ dữ liệu mẫu, tạo bài tập, chấm điểm, JavaScript/dữ liệu/mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: vẽ biểu đồ phân phối bằng SVG/Canvas, bao phủ trạng thái, nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-statlens-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:` (distribution explorer, stats calculator), `fix:` (validate dataset input), `style:` (responsive chart), `refactor:`, `docs:`. Không dùng `update / done / final`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS biểu đồ phân phối + máy tính thống kê, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI.
5. **Thực hiện một thay đổi nhỏ tại chỗ** (đổi style, thêm filter theo phân phối, thêm field) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** (kéo tham số trên biểu đồ, chạy lại máy tính thống kê) mà giảng viên hoặc nhóm yêu cầu.

Quy tắc đặt tên:
```text
SV1-01-screen-name.mp4
SV2-01-screen-name.mp4
SV3-01-screen-name.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi. Riêng môn Xác suất thống kê cần mockup **Distribution Explorer canvas** và **Stats Calculator** trước khi viết mã.

## 20. Cấu trúc kho mã nguồn gợi ý
```text
project-root/
├── README.md
├── docs/ (project-proposal, screen-list, team-assignment, ai-usage-report)
├── design/ (figma-link.txt, mockups/)
├── pages/
│   ├── visitor/  student/  teacher/  admin/
├── assets/ (images, icons, data/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, modules/distribution.js, modules/calculator.js)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng (chạy lại trong máy tính thống kê), điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON (kèm `db.json`);
- **Biểu đồ phân phối tương tác (SVG/Canvas)** và **máy tính thống kê** — điểm nhấn riêng của môn Xác suất thống kê.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11).
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; hoạt ảnh vi mô; PWA; cá nhân hóa lộ trình.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; **sáng tạo cách truyền đạt kiến thức Xác suất thống kê (biểu đồ phân phối tương tác, máy tính thống kê, bài kiểm định có giải thích)**; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.