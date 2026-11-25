# BTL-12 – KếToánLab – Hệ thống hỗ trợ giảng dạy và học tập môn Nguyên lý kế toán

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giảng dạy Nguyên lý kế toán** (định khoản Nợ – Có, sổ nhật ký, bảng cân đối, báo cáo tài chính).

## 2. Tóm tắt sản phẩm

**KếToánLab – Hệ thống hỗ trợ giảng dạy và học tập môn Nguyên lý kế toán** giúp **giảng viên** dựng học liệu trực quan (bộ lý thuyết, bộ nghiệp vụ định khoản, đề kiểm tra, gallery minh họa) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (mô phỏng định khoản Nợ – Có, lập bảng cân đối, làm bài tập). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Nguyên lý kế toán là môn nền tảng nhưng chứa nhiều quy tắc ghi nhận, nguyên tắc Nợ – Có và vòng kế toán trừu tượng, dễ nhầm lẫn nếu chỉ học qua lý thuyết. Giảng viên khó minh hoạ trực tiếp việc một nghiệp vụ phát sinh ảnh hưởng đến sổ nhật ký, tài khoản và bảng cân đối như thế nào. Sinh viên thường học thuộc định khoản một chiều, thiếu công cụ mô phỏng từng bước để hiểu vì sao ghi Nợ/Có, và thiếu kênh luyện tập, phản hồi kịp thời.

## 4. Phát biểu vấn đề

- **P1.** Quy tắc và phương pháp Nợ – Có trừu tượng, khó hình dung liên hệ giữa nghiệp vụ, sổ nhật ký và tài khoản.
- **P2.** Sinh viên chưa thấy được ảnh hưởng trực tiếp của từng nghiệp vụ phát sinh lên số dư tài khoản và bảng cân đối.
- **P3.** Học liệu (lý thuyết, định khoản, đề) nằm rải rác, khó cập nhật và khó theo dõi tiến độ của sinh viên.
- **P4.** Giảng viên tốn thời gian soạn đề, chấm bài định khoản và khó phát hiện sớm sinh viên sai phần ghi Nợ/Có, phần bảng cân đối.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Nguyên lý kế toán thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách – Sinh viên – Giảng viên – Quản trị viên) đủ để nghiệp vụ chạy từ đầu đến cuối.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (tài khoản, nghiệp vụ, sổ nhật ký, bài tập, nộp bài, chấm điểm).
- **O4.** Sử dụng JavaScript/DOM để mô phỏng định khoản, lập bảng cân đối, vẽ sơ đồ tài khoản, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu môn học, bài mẫu và một số mô phỏng công khai |
| Sinh viên | Học lý thuyết, chạy mô phỏng định khoản & bảng cân đối, làm bài tập, xem điểm và tiến độ |
| Giảng viên | Dựng học liệu, xây bộ định khoản, giao bài, chấm và phản hồi |
| Quản trị viên | Quản lý tài khoản, hệ thống tài khoản chuẩn, cấu hình, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (sinh viên định khoản, lập sổ nhật ký; giảng viên dựng học liệu, chấm bài)
↓
Xem trạng thái / dữ liệu / phản hồi (số dư tài khoản, điểm bài tập, tiến độ)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (nhận diện định khoản Nợ–Có)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên duyệt bộ định khoản, admin duyệt tài khoản chuẩn)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã

| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Nắm sơ bộ môn học | Xem giới thiệu, bài mẫu | Trang chủ giới thiệu | `index.html` | R | SV1 |
| Khách | Hiểu vòng kế toán | Xem mô phỏng nghiệp vụ mẫu | Bản xem trước mô phỏng | `visitor-sim-preview.html` | R | SV1 |
| Sinh viên | Nắm Nợ–Có, định khoản | Chạy mô phỏng định khoản, lập sổ nhật ký | Studio định khoản | `student-journal-sim.html` | C/R/U | SV1 |
| Sinh viên | Hiểu bảng cân đối | Lập & đọc bảng cân đối trên mô phỏng | Bảng cân đối tương tác | `student-balance-sheet.html` | C/R/U | SV1 |
| Sinh viên | Ôn tập kiến thức | Làm bài tập định khoản, nộp bài | Trang làm bài tập | `student-exercise.html` | C/R/U | SV1 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, mức nắm bài | Dashboard sinh viên | `student-dashboard.html` | R | SV1 |
| Giảng viên | Dựng học liệu | Tạo tài khoản, nghiệp vụ, sổ nhật ký chuẩn | Quản lý tài khoản & nghiệp vụ | `teacher-ledger-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Giao bài & chấm | Soạn đề định khoản, chấm & phản hồi | Quản lý bài tập & chấm điểm | `teacher-exercise-build.html` | C/R/U/D | SV2 |
| Giảng viên | Đánh giá lớp | Xem báo cáo mức nắm bài | Phân tích lớp | `teacher-analysis.html` | R | SV2 |
| Giảng viên | Tổng quan | Xem thống kê lớp, học liệu | Dashboard giảng viên | `teacher-dashboard.html` | R | SV2 |
| Quản trị viên | Quản lý tài khoản | Tạo/sửa/vô hiệu hóa tài khoản | Quản lý người dùng | `admin-user.html` | C/R/U/D | SV3 |
| Quản trị viên | Chuẩn hóa dữ liệu | Quản lý hệ thống tài khoản chuẩn, cấu hình | Cấu hình & dữ liệu chuẩn | `admin-config.html` | C/R/U/D | SV3 |
| Quản trị viên | Giám sát hệ thống | Xem thống kê, báo cáo | Dashboard quản trị | `admin-dashboard.html` | R | SV3 |

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

Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo tài khoản, đổi danh sách nghiệp vụ thành card, thêm field hệ số + validation, xử lý API rỗng, đổi responsive layout, thêm trạng thái "đã cân đối").

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang giới thiệu | R | Giới thiệu môn Nguyên lý kế toán, chuẩn đầu ra, bài mẫu. |
| 2 | `visitor-sim-preview.html` | Bản xem trước mô phỏng | R | Xem thử một nghiệp vụ định khoản công khai. |
| 3 | `visitor-chart-overview.html` | Sơ đồ vòng kế toán | R | Sơ đồ chu trình kế toán (chứng từ → sổ nhật ký → tài khoản → bảng cân đối) dưới dạng tĩnh. |

### Sinh viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ chương, điểm, mức nắm định khoản. |
| 5 | `student-journal-sim.html` | Studio định khoản | C/R/U | Nhập nghiệp vụ phát sinh, định khoản Nợ/Có, ghi vào sổ nhật ký. |
| 6 | `student-balance-sheet.html` | Bảng cân đối tương tác | C/R/U | Tổng hợp số dư tài khoản thành bảng cân đối, tự kiểm tra cân đối. |
| 7 | `student-ledger-view.html` | Sổ cái tài khoản | R | Xem số dư tài khoản dạng sổ cái. |
| 8 | `student-exercise.html` | Trang làm bài tập | C/R/U | Làm bài định khoản, nộp bài, xem đáp án & giải thích. |

### Giảng viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bộ định khoản, điểm. |
| 10 | `teacher-ledger-manage.html` | Quản lý tài khoản & nghiệp vụ | C/R/U/D | Dựng hệ thống tài khoản, bộ nghiệp vụ chuẩn. |
| 11 | `teacher-topic-manage.html` | Quản lý lý thuyết | C/R/U/D | Soạn bài giảng, chương, ví dụ minh họa. |
| 12 | `teacher-exercise-build.html` | Soạn & chấm bài tập | C/R/U/D | Tạo đề định khoản, chấm điểm, phản hồi. |
| 13 | `teacher-analysis.html` | Phân tích lớp | R | Báo cáo mức nắm bài, chỗ hay sai Nợ/Có. |

### Quản trị viên → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Thống kê người dùng, hoạt động hệ thống. |
| 15 | `admin-user.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản sinh viên, giảng viên. |
| 16 | `admin-config.html` | Cấu hình & dữ liệu chuẩn | C/R/U/D | Quản lý hệ thống tài khoản chuẩn, phân loại, cấu hình. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (ghi bút toán, cập nhật số dư, vẽ sơ đồ tài khoản); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD

`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý

| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Sinh viên, giảng viên, quản trị viên. |
| `courses` | ✓ | ✓ | ✓ | ✓/Archive | Khoá học/môn Nguyên lý kế toán. |
| `topics` | ✓ | ✓ | ✓ | ✓/Archive | Chương, chủ đề lý thuyết. |
| `accounts` | ✓ | ✓ | ✓ | ✓/Archive | Hệ thống tài khoản chuẩn (TK 111, 112, 131, 511...). |
| `journalEntries` | ✓ | ✓ | ✓ | ✓/Archive | Bút toán, định khoản Nợ/Có trong sổ nhật ký. |
| `transactions` | ✓ | ✓ | ✓ | ✓/Archive | Nghiệp vụ phát sinh cụ thể của từng kỳ kế toán. |
| `exercises` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập định khoản, đề kiểm tra. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, điểm và phản hồi. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

### Cách truyền đạt 1 – Mô phỏng định khoản Nợ/Có từng bước (Student Journal Sim)

Trên `student-journal-sim.html`, sinh viên nhập một nghiệp vụ phát sinh (ví dụ "mua hàng trả tiền mặt"), hệ thống hướng dẫn điền tài khoản Nợ, tài khoản Có theo từng bước có điều khiển tiến/lùi, kèm giải thích vì sao ghi vào tài khoản đó. **Giúp người học hiểu logic bút toán thay vì học thuộc,** nhìn thấy mỗi bước ảnh hưởng lên tài khoản ra sao.

### Cách truyền đạt 2 – Bảng cân đối phát sinh sống động (Student Balance Sheet)

Trên `student-balance-sheet.html`, mọi bút toán sinh viên ghi ở bước 1 tự động cập nhật số dư tài khoản và tổng hợp vào bảng cân đối kế toán, hiển thị trực quan mối quan hệ Tài sản = Nguồn vốn, tự kiểm tra cân đối và cảnh báo khi lệch. **Giúp người học hình dung dòng tiền và nguồn vốn thay đổi như thế nào.**

### Cách truyền đạt 3 – Sổ cái tài khoản dạng thẻ lật (Student Ledger View)

Trên `student-ledger-view.html`, mỗi tài khoản là một thẻ lật (flashcard) mặt trước ghi số hiệu – tên tài khoản, mặt sau là sổ cái (phát sinh Nợ/Có, số dư), giúp ôn nhanh và kiểm tra ghi nhớ. **Giúp người học ôn từng tài khoản tập trung và tự kiểm tra.**

### Cách truyền đạt 4 – Sơ đồ vòng kế toán tương tác (Visitor Chart Overview)

Trên `visitor-chart-overview.html`, vẽ sơ đồ SVG chu trình kế toán (chứng từ gốc → sổ nhật ký → sổ cái → bảng cân đối thử → báo cáo tài chính) tương tác: bấm vào từng khâu để xem nội dung và liên hệ. **Giúp người học nắm bức tranh tổng thể của vòng kế toán.**

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – Trợ lý nhận diện định khoản Nợ/Có
Nhập mô tả nghiệp vụ bằng tiếng Việt, AI gợi ý bút toán ghi Nợ/Có kèm giải thích nguyên tắc (ví dụ nghiệp vụ làm tăng tài sản ghi Nợ tài khoản tài sản). Dùng JSON giả lập các nghiệp vụ mẫu / JavaScript theo quy tắc phân loại tài khoản, hoặc API LLM tùy chọn. Kết quả phải hiển thị bút toán và lý do để sinh viên hiểu và chỉnh sửa.

### AI-2 – Kiểm tra và gợi ý sửa bút toán
Khi sinh viên tự ghi bút toán, AI so sánh với bút toán chuẩn, chỉ ra lỗi (sai tài khoản, sai bên, sai số) và gợi ý sửa theo từng bước. Mô phỏng bằng JavaScript theo quy tắc đối chiếu, phản hồi định sẵn hoặc LLM.

### AI-3 – Gợi ý lộ trình ôn tập theo điểm
Nhận diện các loại bài/khái niệm sinh viên hay sai (định khoản, bảng cân đối, sổ cái) để gợi ý lộ trình ôn lại. Mô phỏng bằng JSON giả lập dựa trên submissions và JavaScript thống kê theo chương.

### Nguyên tắc trải nghiệm AI (nếu có)

```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `courses`, `topics`, `accounts`, `journalEntries`, `transactions`, `exercises`, `submissions`. Triển khai bằng file JSON cục bộ, LocalStorage/SessionStorage, JSON Server, MockAPI hoặc public API; không bắt buộc máy chủ thật.

Dưới đây là gợi ý `db.json` (JSON Server):

```json
{
  "users": [
    { "id": 1, "name": "SV Mẫu", "role": "student", "email": "sv@tlus.edu.vn" },
    { "id": 2, "name": "GV Kế toán", "role": "teacher", "email": "gv@tlus.edu.vn" }
  ],
  "accounts": [
    { "id": 1, "code": "111", "name": "Tiền mặt", "type": "Tài sản", "balance": 50000000 },
    { "id": 2, "code": "511", "name": "Doanh thu bán hàng", "type": "Doanh thu", "balance": 0 }
  ],
  "journalEntries": [
    { "id": 1, "date": "2025-09-01", "debitAccount": "111", "creditAccount": "511", "amount": 1000000, "note": "Thu tiền bán hàng" }
  ]
}
```

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả

1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng định khoản

```text
Tôi là SV môn CSE122 đang làm BTL về môn Nguyên lý kế toán (sản phẩm KếToánLab). Hãy giúp tôi dựng mô hình mô phỏng định khoản Nợ/Có:
+ Giao diện: nhập nghiệp vụ phát sinh và hiển thị bút toán ghi Nợ/Có vào sổ nhật ký.
+ Vai trò người xem: sinh viên học định khoản lần đầu.
+ Yêu cầu trực quan: từng bước, thẻ giải thích vì sao ghi Nợ/Có, tự cập nhật số dư tài khoản.
+ Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json

```text
Tạo file db.json (JSON Server) cho hệ thống KếToánLab, gồm các entity users, courses, topics, accounts, journalEntries, transactions, exercises, submissions, mỗi entity 5–8 bản ghi mẫu theo môn Nguyên lý kế toán, có id, timestamps, và trường phù hợp nghiệp vụ (số tài khoản, bên Nợ/Có, số dư). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)

```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước về cách định khoản một nghiệp vụ kế toán, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập định khoản nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI

- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (trang giới thiệu, mô phỏng định khoản, bảng cân đối, sổ cái, làm bài). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.

### SV2
Phụ trách: **Giảng viên** (quản lý tài khoản & nghiệp vụ, soạn bài, chấm điểm, phân tích). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.

### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:

- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub

- Repo gợi ý: `cse122-ketoanlab-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion

Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS mô phỏng định khoản, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): mô phỏng định khoản từng bước, bảng cân đối sống động, sổ cái thẻ lật.
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

[Thang điểm có thể điều chỉnh theo từng kỳ]

## 25. Chuẩn đầu ra mong đợi

Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (mô phỏng định khoản, bảng cân đối); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.