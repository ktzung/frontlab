# BTL-16 – CaseLaw – Hệ thống hỗ trợ giảng dạy và học tập môn Luật (Pháp luật đại cương)

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giảng dạy Luật (Pháp luật đại cương)** (ngành luật, nguồn luật, quy phạm pháp luật, quan hệ pháp luật, tình huống hợp đồng, trách nhiệm pháp lý).

## 2. Tóm tắt sản phẩm

**CaseLaw – Hệ thống hỗ trợ giảng dạy và học tập môn Luật (Pháp luật đại cương)** giúp **giảng viên** dựng học liệu trực quan (bộ lý thuyết, bộ tình huống hợp đồng, đề kiểm tra, gallery án lệ/vụ án) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (cây quyết định pháp lý, phân tích tình huống hợp đồng, làm bài tập). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Pháp luật đại cương là môn khó vì nhiều khái niệm, quy phạm và văn bản pháp luật trừu tượng, và việc áp dụng luật vào tình huống thực tế đòi hỏi tư duy phân tích. Giảng viên khó minh hoạ cách một tình huống hợp đồng được phân tích theo điều khoản, xác định trách nhiệm pháp lý. Sinh viên thường học thuộc điều luật một chiều, thiếu công cụ mô phỏng cây quyết định và luyện tập phân tích tình huống, thiếu phản hồi kịp thời về mức nắm bài.

## 4. Phát biểu vấn đề

- **P1.** Khái niệm, quy phạm và văn bản pháp luật trừu tượng, khó gắn với tình huống thực tế.
- **P2.** Sinh viên chưa thấy được cách một tình huống hợp đồng được phân tích, xác định vi phạm và trách nhiệm pháp lý.
- **P3.** Học liệu luật (lý thuyết, tình huống, đề) nằm rải rác, khó cập nhật và khó theo dõi tiến độ.
- **P4.** Giảng viên tốn thời gian soạn đề, chấm bài phân tích tình huống và khó phát hiện sớm sinh viên yếu phần nào.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Luật (Pháp luật đại cương) thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách – Sinh viên – Giảng viên – Quản trị viên) đủ để nghiệp vụ chạy từ đầu đến cuối.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (ngành luật, quy phạm, tình huống hợp đồng, bài tập, nộp bài, chấm điểm).
- **O4.** Sử dụng JavaScript/DOM để vẽ cây quyết định pháp lý, phân tích tình huống hợp đồng, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu môn học, tình huống mẫu và một số cây quyết định công khai |
| Sinh viên | Học lý thuyết, chạy cây quyết định pháp lý, phân tích tình huống hợp đồng, làm bài tập, xem điểm và tiến độ |
| Giảng viên | Dựng học liệu, xây bộ tình huống, giao bài, chấm và phản hồi |
| Quản trị viên | Quản lý tài khoản, kho văn bản pháp luật, cấu hình, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (sinh viên phân tích tình huống, chạy cây quyết định; giảng viên dựng học liệu, chấm bài)
↓
Xem trạng thái / dữ liệu / phản hồi (kết luận pháp lý, điểm bài tập, tiến độ)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (phân tích tình huống pháp lý)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên duyệt bộ tình huống, admin duyệt văn bản)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã

| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Nắm sơ bộ môn học | Xem giới thiệu, tình huống mẫu | Trang chủ giới thiệu | `index.html` | R | SV1 |
| Khách | Hiểu tình huống mẫu | Xem cây quyết định công khai | Bản xem trước cây quyết định | `visitor-tree-preview.html` | R | SV1 |
| Sinh viên | Phân tích tình huống | Chạy cây quyết định pháp lý | Cây quyết định pháp lý | `student-decision-tree.html` | C/R/U | SV1 |
| Sinh viên | Áp luật vào hợp đồng | Phân tích tình huống hợp đồng theo điều khoản | Phân tích hợp đồng | `student-contract-case.html` | C/R/U | SV1 |
| Sinh viên | Ôn tập kiến thức | Làm bài tập trắc nghiệm tình huống, nộp bài | Trang làm bài tập | `student-exercise.html` | C/R/U | SV1 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, mức nắm bài | Dashboard sinh viên | `student-dashboard.html` | R | SV1 |
| Giảng viên | Dựng học liệu | Tạo tình huống, cây quyết định, bài học | Quản lý tình huống & quy phạm | `teacher-case-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Giao bài & chấm | Soạn đề phân tích, chấm & phản hồi | Quản lý bài tập & chấm điểm | `teacher-exercise-build.html` | C/R/U/D | SV2 |
| Giảng viên | Đánh giá lớp | Xem báo cáo mức nắm bài | Phân tích lớp | `teacher-analysis.html` | R | SV2 |
| Giảng viên | Tổng quan | Xem thống kê lớp, học liệu | Dashboard giảng viên | `teacher-dashboard.html` | R | SV2 |
| Quản trị viên | Quản lý tài khoản | Tạo/sửa/vô hiệu hóa tài khoản | Quản lý người dùng | `admin-user.html` | C/R/U/D | SV3 |
| Quản trị viên | Chuẩn hóa dữ liệu | Quản lý văn bản pháp luật, cấu hình | Cấu hình & kho văn bản | `admin-config.html` | C/R/U/D | SV3 |
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

Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo ngành luật, đổi danh sách tình huống thành card, thêm field điều khoản + validation, xử lý API rỗng, đổi responsive layout, thêm trạng thái "tình huống đang phân tích").

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang giới thiệu | R | Giới thiệu môn Pháp luật đại cương, chuẩn đầu ra. |
| 2 | `visitor-tree-preview.html` | Bản xem trước cây quyết định | R | Xem thử một cây quyết định pháp lý công khai. |
| 3 | `visitor-law-overview.html` | Sơ đồ hệ thống ngành luật | R | Sơ đồ phân loại ngành luật dạng tĩnh. |

### Sinh viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ chương, điểm, mức nắm bài. |
| 5 | `student-decision-tree.html` | Cây quyết định pháp lý | C/R/U | Đi theo từng nhánh câu hỏi để ra kết luận pháp lý. |
| 6 | `student-contract-case.html` | Phân tích tình huống hợp đồng | C/R/U | Phân tích hợp đồng theo điều khoản, xác định vi phạm/trách nhiệm. |
| 7 | `student-quiz.html` | Trắc nghiệm tình huống | C/R/U | Trắc nghiệm nhanh kèm giải thích điều luật. |
| 8 | `student-exercise.html` | Trang làm bài tập | C/R/U | Làm bài tập phân tích tình huống, nộp bài, xem đáp án. |

### Giảng viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bộ tình huống, điểm. |
| 10 | `teacher-case-manage.html` | Quản lý tình huống & quy phạm | C/R/U/D | Dựng tình huống, cây quyết định, bài học. |
| 11 | `teacher-topic-manage.html` | Quản lý lý thuyết | C/R/U/D | Soạn bài giảng, chương, điều luật. |
| 12 | `teacher-exercise-build.html` | Soạn & chấm bài tập | C/R/U/D | Tạo đề phân tích tình huống, chấm điểm, phản hồi. |
| 13 | `teacher-analysis.html` | Phân tích lớp | R | Báo cáo mức nắm bài, phần hay sai. |

### Quản trị viên → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Thống kê người dùng, hoạt động hệ thống. |
| 15 | `admin-user.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản sinh viên, giảng viên. |
| 16 | `admin-config.html` | Cấu hình & kho văn bản | C/R/U/D | Quản lý văn bản pháp luật, phân loại ngành luật, cấu hình. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (đi nhánh cây quyết định, đánh dấu điều khoản, kiểm tra tình huống); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD

`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý

| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Sinh viên, giảng viên, quản trị viên. |
| `courses` | ✓ | ✓ | ✓ | ✓/Archive | Khoá học/môn Pháp luật đại cương. |
| `topics` | ✓ | ✓ | ✓ | ✓/Archive | Chương, chủ đề lý thuyết. |
| `lawBranches` | ✓ | ✓ | ✓ | ✓/Archive | Nguồn luật, ngành luật, văn bản pháp luật. |
| `rules` | ✓ | ✓ | ✓ | ✓/Archive | Quy phạm pháp luật, điều khoản. |
| `cases` | ✓ | ✓ | ✓ | ✓/Archive | Tình huống hợp đồng / vụ án. |
| `decisionTrees` | ✓ | ✓ | ✓ | ✓/Archive | Cây quyết định pháp lý theo từng tình huống. |
| `exercises` / `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập, bài nộp, điểm & phản hồi. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

### Cách truyền đạt 1 – Cây quyết định pháp lý tương tác (Student Decision Tree)

Trên `student-decision-tree.html`, mỗi tình huống được biểu diễn thành cây quyết định SVG/Canvas: sinh viên trả lời từng câu hỏi (có đủ điều kiện?, có vi phạm?) để đi đến kết luận pháp lý, với giải thích điều luật áp dụng tại mỗi nhánh. **Giúp người học hiểu logic áp dụng luật thay vì học thuộc điều luật.**

### Cách truyền đạt 2 – Phân tích tình huống hợp đồng theo điều khoản (Student Contract Case)

Trên `student-contract-case.html`, hợp đồng được hiển thị với từng điều khoản có thể bấm để gắn tình huống, xác định bên vi phạm điều nào, trách nhiệm pháp lý ra sao, và hiển thị kết luận dạng sơ đồ nhân quả. **Giúp người học nhìn thấy cách quy phạm được áp dụng vào tình huống cụ thể.**

### Cách truyền đạt 3 – Trắc nghiệm tình huống kèm giải thích (Student Quiz)

Trên `student-quiz.html`, mỗi câu hỏi trắc nghiệm chọn đáp án đúng cho một tình huống đều kèm giải thích điều luật/nguyên tắc, tạo vòng lặp ôn nhanh. **Giúp người học kiểm tra và hiểu lý do đúng/sai ngay lập tức.**

### Cách truyền đạt 4 – Sơ đồ hệ thống ngành luật tương tác (Visitor Law Overview)

Trên `visitor-law-overview.html`, vẽ sơ đồ SVG phân loại ngành luật (luật công – luật tư, các ngành luật cụ thể) tương tác, bấm vào từng nhánh để xem mô tả. **Giúp người học nắm bức tranh tổng thể hệ thống pháp luật.**

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – Trợ lý phân tích tình huống pháp lý
Nhập mô tả một tình huống hợp đồng, AI gợi ý các điều khoản liên quan, xác định bên vi phạm và trách nhiệm pháp lý kèm giải thích. Dùng JSON giả lập các tình huống mẫu / JavaScript theo quy tắc khớp điều khoản, hoặc API LLM tùy chọn. Kết quả phải hiển thị phân tích và điều luật để sinh viên hiểu và chỉnh sửa.

### AI-2 – Gợi ý bước đi trong cây quyết định
Nhập câu trả lời của sinh viên ở một nhánh, AI gợi ý câu hỏi tiếp theo và điều luật áp dụng. Mô phỏng bằng JavaScript theo quy tắc duyệt cây, phản hồi định sẵn hoặc LLM.

### AI-3 – Gợi ý lộ trình ôn tập theo điểm
Nhận diện các chủ đề sinh viên hay sai (ngành luật, hợp đồng, trách nhiệm pháp lý) để gợi ý lộ trình ôn. Mô phỏng bằng JSON giả lập dựa trên submissions và JavaScript thống kê theo chương.

### Nguyên tắc trải nghiệm AI (nếu có)

```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `courses`, `topics`, `lawBranches`, `rules`, `cases`, `decisionTrees`, `exercises`, `submissions`. Triển khai bằng file JSON cục bộ, LocalStorage/SessionStorage, JSON Server, MockAPI hoặc public API; không bắt buộc máy chủ thật.

Dưới đây là gợi ý `db.json` (JSON Server):

```json
{
  "users": [
    { "id": 1, "name": "SV Mẫu", "role": "student", "email": "sv@tlus.edu.vn" },
    { "id": 2, "name": "GV Luật", "role": "teacher", "email": "gv@tlus.edu.vn" }
  ],
  "rules": [
    { "id": 1, "branch": "Luật Dân sự", "article": "Điều 117", "content": "Điều kiện có hiệu lực của giao dịch dân sự" }
  ],
  "cases": [
    { "id": 1, "title": "Tranh chấp hợp đồng mua bán", "type": "Contract", "status": "analyzing" }
  ],
  "decisionTrees": [
    { "id": 1, "caseId": 1, "question": "Hợp đồng có đủ điều kiện hiệu lực?", "branches": ["Có", "Không"] }
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

### Mẫu prompt 1 – Dựng học liệu/bài giảng tình huống pháp lý

```text
Tôi là SV môn CSE122 đang làm BTL về môn Luật (Pháp luật đại cương, sản phẩm CaseLaw). Hãy giúp tôi dựng mô hình cây quyết định pháp lý:
+ Giao diện: tình huống hợp đồng dẫn theo từng câu hỏi để ra kết luận pháp lý.
+ Vai trò người xem: sinh viên học luật lần đầu.
+ Yêu cầu trực quan: cây quyết định SVG/Canvas, giải thích điều luật mỗi nhánh.
+ Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json

```text
Tạo file db.json (JSON Server) cho hệ thống CaseLaw, gồm các entity users, courses, topics, lawBranches, rules, cases, decisionTrees, exercises, submissions, mỗi entity 5–8 bản ghi mẫu theo môn Pháp luật đại cương, có id, timestamps, và trường phù hợp nghiệp vụ (điều khoản, ngành luật, trạng thái tình huống). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)

```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước về cách phân tích một tình huống hợp đồng theo điều luật, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI

- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (trang giới thiệu, cây quyết định pháp lý, phân tích tình huống hợp đồng, trắc nghiệm, làm bài). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.

### SV2
Phụ trách: **Giảng viên** (quản lý tình huống & quy phạm, soạn bài, chấm điểm, phân tích). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.

### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:

- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub

- Repo gợi ý: `cse122-caselaw-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion

Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS cây quyết định & phân tích hợp đồng, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): cây quyết định pháp lý, phân tích tình huống hợp đồng, trắc nghiệm tình huống kèm giải thích.
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

Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (cây quyết định, phân tích tình huống hợp đồng); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.