# BTL-26 – MechLab – Hệ thống hỗ trợ giảng dạy và học tập môn Kỹ thuật cơ khí

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Kỹ thuật Cơ khí – Giảng dạy và học tập môn Kỹ thuật cơ khí** (bản vẽ kỹ thuật 2D, sức bền vật liệu, tính lực và ứng suất, thiết kế chi tiết máy).

## 2. Tóm tắt sản phẩm

**MechLab – Hệ thống hỗ trợ giảng dạy và học tập môn Kỹ thuật cơ khí** giúp **giảng viên** xây dựng học liệu trực quan (bài giảng vẽ kỹ thuật, bộ bài tập tính lực/sức bền, khoa chi tiết chuẩn) và giúp **sinh viên** thực hành qua **bản vẽ CAD 2D tương tác**, **máy tính lực/ứng suất/sức bền** và **phân tích vật liệu mẫu**. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Kỹ thuật cơ khí là môn nền tảng cho sinh viên ngành cơ khí, dạy về đọc và vẽ bản vẽ kỹ thuật, tính toán lực, ứng suất, sức bền vật liệu. Đây là môn thiên về hình học và tính toán "ẩn" — sinh viên khó hình dung chi tiết cơ khí trong không gian từ bản vẽ 2D, dễ nhầm giữa ứng suất kéo–nén–uốn, khó kiểm chứng kết quả tính sức bền khi thiết kế. Giảng viên cần trực quan hóa bản vẽ kỹ thuật và cung cấp công cụ tính lực/sức bền để sinh viên thấy số và hình cùng lúc.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó **đọc và diễn họa bản vẽ kỹ thuật 2D** (hình chiếu, kích thước, dung sai) khi chưa có công cụ vẽ tương tác.
- **P2.** Việc **tính lực, ứng suất, sức bền** thủ công dễ sai, sinh viên không có nơi kiểm chứng kết quả và xem công thức.
- **P3.** Sinh viên dễ nhầm giữa các **loại ứng suất (kéo/nén/uốn/xoắn)** và trạng thái vật liệu, thiếu ví dụ trực quan.
- **P4.** Giảng viên khó giao và chấm các bài tập thiết kế/tính toán chi tiết một cách nhất quán, sinh viên khó theo dõi từng bước.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Kỹ thuật cơ khí thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ phù hợp: chương, bài giảng, bản vẽ, bài tập, nộp bài, chấm điểm, tiến độ.
- **O4.** Dùng JavaScript/DOM để xây **bản vẽ CAD 2D (SVG/Canvas)** và **máy tính lực/ứng suất/sức bền** có minh họa.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI (kèm `db.json`).
- **O6.** Thiết kế 3 ý tưởng AI mô phỏng ở Frontend (gợi ý vật liệu, phân tích ứng suất, đọc bản vẽ) — **tùy chọn, không bắt buộc**.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa, xem bản vẽ mẫu, góp ý chủ đề cần bổ sung |
| Sinh viên | Học bài giảng vẽ kỹ thuật, vẽ CAD 2D, dùng máy tính lực/sức bền, làm bài tập, xem điểm & tiến độ, hỏi AI |
| Giảng viên | Dựng bài giảng và học liệu, tạo bản vẽ/chỉ tiêu mẫu, tạo bài tập, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chương trình học, thư viện chi tiết chuẩn, cấu hình hệ thống, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (vẽ CAD, tính lực, làm bài)
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
| Khách | Giới thiệu & xem thử | Xem khóa học, bản vẽ mẫu, góp ý | Trang chủ | `index.html` | R | SV1 |
| Sinh viên | Vẽ & đọc bản vẽ 2D | Vẽ hình dạng, kích thước, export/save bản vẽ | CAD 2D Editor | `student-cad-editor.html` | C/R/U — Lưu/Lưu nháp | SV1 |
| Sinh viên | Tính lực/sức bền | Nhập tải trọng, tiết diện, tính ứng suất | Stress Calculator | `student-stress-calculator.html` | C/R/U — Lưu | SV1 |
| Sinh viên | Học sức bền vật liệu | Làm bài tập kéo/nén/uốn có đáp án bước | Strength Exercise | `student-strength-exercise.html` | C/R/U — Nộp | SV2 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, tiến độ module | Bảng điều khiển SV | `student-dashboard.html` | R | SV2 |
| Giảng viên | Dựng học liệu | Tạo bài giảng, chỉ tiêu mẫu, bài tập | Xây bài tập & chỉ tiêu | `teacher-exercise-build.html` | C/R/U/D — Vô hiệu hóa | SV2 |
| Giảng viên | Chấm & phản hồi | Duyệt bài nộp, chấm điểm | Chấm bài | `teacher-grading.html` | R/U — Đang chờ/Đạt/Chưa đạt | SV2 |
| Giảng viên | Phân tích lớp | Xem báo cáo năng lực | Bảng điều khiển GV | `teacher-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý & cấu hình | Quản lý tài khoản, thư viện chi tiết, quyền | Quản trị hệ thống | `admin-dashboard.html` | R | SV3 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter loại ứng suất, đổi table thành card bài tập, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình cơ bản
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang chủ | R | Giới thiệu khóa Kỹ thuật cơ khí, các module CAD/tính toán/sức bền |
| 2 | `visitor-cad-preview.html` | Xem bản vẽ mẫu | R | Xem minh họa bản vẽ kỹ thuật 2D với hình chiếu |
| 3 | `visitor-topic-feedback.html` | Góp ý chủ đề | C/R | Đề xuất chủ đề cơ khí cần bổ sung |

### Học sinh / Sinh viên → 5 màn hình, sát môn Kỹ thuật cơ khí
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Bảng điều khiển | R | Tiến độ, điểm các module CAD / lực-sức bền / vật liệu |
| 5 | `student-cad-editor.html` | CAD 2D Editor | C/R/U | Vẽ hình dạng 2D bằng SVG/Canvas, thêm kích thước, ghi chú |
| 6 | `student-stress-calculator.html` | Stress Calculator | C/R/U | Nhập lực, tiết diện; tính ứng suất kéo/nén/uốn, hiện công thức |
| 7 | `student-strength-exercise.html` | Strength Exercise | C/R/U | Giải bài tập sức bền vật liệu, đáp án giải thích từng bước |
| 8 | `student-material-reference.html` | Tra cứu vật liệu | R | Bảng tính cơ học vật liệu chuẩn (thép, nhôm, gang) |

### Giáo viên / Giảng viên → 5 màn hình, sát môn Kỹ thuật cơ khí
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Bảng điều khiển GV | R | Tổng quan lớp, chương, mức hoàn thành bài tính toán |
| 10 | `teacher-part-library.html` | Thư viện chi tiết | C/R/U | Quản lý chi tiết chuẩn + chỉ tiêu kỹ thuật cho học liệu |
| 11 | `teacher-exercise-build.html` | Xây bài tập | C/R/U/D | Tạo bài tập tính lực/sức bền kèm đáp án từng bước |
| 12 | `teacher-grading.html` | Chấm bài | R/U | Xem bài nộp, chấm điểm, nhận xét bản vẽ/kết quả tính |
| 13 | `teacher-class-analysis.html` | Phân tích lớp | R | Báo cáo năng lực theo chương/loại bài |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Bảng điều khiển Admin | R | Quản trị hệ thống MechLab |
| 15 | `admin-user-management.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản SV/GV, phân quyền |
| 16 | `admin-material-config.html` | Cấu hình vật liệu | C/R/U | Cấu hình đơn vị, tính cơ vật liệu, chương trình học |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát. Riêng môn Kỹ thuật cơ khí, giao diện điểm nhấn là **bản vẽ CAD 2D (SVG/Canvas)** và **máy tính lực/ứng suất/sức bền** với kết quả số + hình minh họa.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Tài khoản SV/GV/Admin |
| `courses` | ✓ | ✓ | ✓ | ✓/Đóng | Khóa học Kỹ thuật cơ khí |
| `chapters` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Chương: bản vẽ kỹ thuật, sức bền, chi tiết máy |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng trực quan từng chương |
| `drawings` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bản vẽ CAD 2D: hình dạng + kích thước |
| `parts` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Thư viện chi tiết chuẩn + chỉ tiêu kỹ thuật |
| `materials` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tính cơ vật liệu (suất Young, ứng suất cho phép) |
| `calculations` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Lịch sử tính lực/ứng suất của sinh viên |
| `exercises` | ✓ | ✓ | ✓ | ✓/Vô hiệu hóa | Bài tập sức bền kèm đáp án từng bước |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nộp, trạng thái Đang chờ/Đạt/Chưa đạt |
| `aiTutorLogs` | ✓ | ✓ | ✓ | ✓/Xóa | Nhật ký hỏi AI (nếu làm AI) |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Tối thiểu 3 cách truyền đạt gắn với môn Kỹ thuật cơ khí:

- **Bản vẽ CAD 2D tương tác (SVG/Canvas).** Màn hình `student-cad-editor.html`. Sinh viên vẽ hình dạng, thêm đường kích thước, ghi chú bằng công cụ kéo–thả; hệ thống tự cập nhật chú giải và vùng tô màu hình chiếu — giúp đọc bản vẽ kỹ thuật và figma chi tiết dễ hiểu hơn trên giấy.
- **Máy tính lực/ứng suất/sức bền có minh họa từng bước.** Màn hình `student-stress-calculator.html`. Nhập lực, tiết diện, loại ứng suất; máy tính σ = F/A (kéo/nén) hay uốn, hiện công thức, đơn vị và hình thanh chịu tải cập nhật — sinh viên kiểm chứng và nắm logic tính.
- **Bài tập sức bền mô phỏng suy luận.** Màn hình `student-strength-exercise.html`. Từ tải trọng và vật liệu, sinh viên chọn công thức, so sánh ứng suất tính được với ứng suất cho phép rồi kết luận "đạt/nguy hiểm" kèm giải thích — rèn tư duy an toàn thiết kế.
- **Thẻ flashcard + trắc nghiệm nhanh công thức/ký hiệu.** Màn hình `student-material-reference.html`. Flashcard hệ số an toàn, đơn vị, ứng suất cho phép kèm minigame giúp ôn thi.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Material Advisor
Mô tả điều kiện làm việc (tải, môi trường, chi phí), AI gợi ý vật liệu phù hợp kèm lý do và tính cơ cơ bản. Cách mô phỏng: JSON giả lập, JS theo quy tắc; LLM API tùy chọn. Giá trị: hỗ trợ chọn vật liệu trong bài thiết kế.

### AI-2 – AI Stress Explainer
Nhập kết quả tính ứng suất, AI diễn giải mức an toàn, giải thích công thức và các yếu tố ảnh hưởng. Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: giúp sinh viên hiểu ứng suất kéo/nén/uốn.

### AI-3 – AI Drawing Helper
Mô tả một chi tiết bằng lời, AI gợi ý các bước dựng bản vẽ 2D (hình chiếu chính, hình chiếu cạnh, kích thước). Cách mô phỏng: JSON giả lập, JS theo quy tắc. Giá trị: hướng dẫn ban đầu để sinh viên tự vẽ và sửa.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity tối thiểu cho môn Kỹ thuật cơ khí:
`users`, `courses`, `chapters`, `lessons`, `drawings`, `parts`, `materials`, `calculations`, `exercises`, `submissions`, `aiTutorLogs`.

Gợi ý dữ liệu trong `db.json` (vật liệu và bài tập mẫu):

```json
{
  "materials": [
    { "id": 1, "name": "Thép CT38", "young": 210000, "allowable": 160 },
    { "id": 2, "name": "Nhôm 6061", "young": 69000, "allowable": 95 },
    { "id": 3, "name": "Gang xám", "young": 100000, "allowable": 120 }
  ],
  "parts": [
    { "id": 1, "name": "Trục đỡ", "shape": "round", "diameter": 30, "length": 200 },
    { "id": 2, "name": "Tấm nối", "shape": "rect", "width": 40, "thickness": 5 }
  ],
  "exercises": [
    {
      "id": 1,
      "title": "Tính ứng suất thanh kéo",
      "given": { "force": 50, "area": 0.5, "materialId": 1 },
      "steps": ["Áp dụng sigma = F/A", "Tính dA = 0.5 m²", "So sánh với ứng suất cho phép"]
    }
  ]
}
```

Lưu ý: mọi giá trị lực/ứng suất minh họa dùng đơn vị nhất quán (kN, MPa, mm²) do nhóm quy ước rõ trong README. Dữ liệu nghiệp vụ (bài giảng, bài tập, bài nộp) dùng qua JSON Server / MockAPI / LocalStorage.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng sát môn Kỹ thuật cơ khí
```text
Tôi là SV môn CSE122 đang làm BTL về Kỹ thuật cơ khí (sản phẩm MechLab). Hãy giúp tôi soạn một bài giảng về ứng suất kéo và nén.
+ Tên giao diện: student-stress-calculator.html, người xem là sinh viên năm 2.
+ Yêu cầu trực quan: máy tính ứng suất có công thức, minh họa thanh chịu lực, thẻ flashcard ký hiệu.
+ Hãy giải thích ý nghĩa ứng suất cho phép và hệ số an toàn sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho hệ thống
```text
Tạo file db.json (JSON Server) cho hệ thống MechLab môn Kỹ thuật cơ khí, gồm entity: users, courses, chapters, lessons, drawings, parts, materials, calculations, exercises, submissions (aiTutorLogs tùy chọn). Mỗi entity 5–8 bản ghi theo nghiệp vụ cơ khí (vật liệu, chi tiết chuẩn, bài tập sức bền). Có id, timestamps, trường phù hợp. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng một bài tính ứng suất cho một trục chịu lực kéo. Hỏi tôi cần kết quả gì (ứng suất, hệ số an toàn), sau mỗi đoạn hướng dẫn giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên**. Trách nhiệm chéo: CAD 2D editor và máy tính lực/ứng suất (JavaScript/DOM, vẽ SVG/Canvas), một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giảng viên**. Trách nhiệm chéo: thư viện chi tiết, tạo bài tập, chấm điểm, JavaScript/dữ liệu/mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: vẽ bản vẽ CAD bằng SVG/Canvas, bao phủ trạng thái, nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-mechlab-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:` (cad 2d editor, stress calculator), `fix:` (validate stress form), `style:` (responsive canvas), `refactor:`, `docs:`. Không dùng `update / done / final`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS bản vẽ CAD + máy tính lực/ứng suất, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI.
5. **Thực hiện một thay đổi nhỏ tại chỗ** (đổi style, thêm filter loại ứng suất, thêm field) rồi chạy lại chứng minh.
6. Commit thay đổi lên GitHub nói rõ task/nhánh/commit.
7. **Làm lại một thao tác** (vẽ thêm hình chiếu, chạy lại máy tính lực) mà giảng viên hoặc nhóm yêu cầu.

Quy tắc đặt tên:
```text
SV1-01-screen-name.mp4
SV2-01-screen-name.mp4
SV3-01-screen-name.mp4
```

## 19. Figma / Canva
Trước khi code: sơ đồ trang, luồng người dùng, bảng kiểm kê màn hình, wireframe, mockup desktop, bản responsive, hướng dẫn thành phần tối thiểu, trạng thái tải/rỗng/lỗi. Riêng môn Kỹ thuật cơ khí cần mockup **CAD 2D Editor canvas** và **Stress Calculator** trước khi viết mã.

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
├── js/ (main.js, api.js, modules/cad-editor.js, modules/stress-calc.js)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng (chạy lại trong máy tính ứng suất), điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON (kèm `db.json`);
- **Bản vẽ CAD 2D tương tác (SVG/Canvas)** và **máy tính lực/ứng suất/sức bền** — điểm nhấn riêng của môn Kỹ thuật cơ khí.
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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; **sáng tạo cách truyền đạt kiến thức Kỹ thuật cơ khí (bản vẽ CAD 2D tương tác, máy tính lực/ứng suất/sức bền, bài tập sức bền có giải thích)**; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.