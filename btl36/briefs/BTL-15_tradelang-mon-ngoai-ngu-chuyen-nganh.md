# BTL-15 – TradeLang – Hệ thống hỗ trợ giảng dạy và học tập môn Ngoại ngữ chuyên ngành kinh tế/thương mại

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giảng dạy Ngoại ngữ chuyên ngành kinh tế/thương mại** (từ vựng thương mại, glossary, hội thoại giao dịch, văn bản hợp đồng/thư tín thương mại).

## 2. Tóm tắt sản phẩm

**TradeLang – Hệ thống hỗ trợ giảng dạy và học tập môn Ngoại ngữ chuyên ngành kinh tế/thương mại** giúp **giảng viên** dựng học liệu trực quan (bộ từ vựng glossary, bộ hội thoại mẫu, đề kiểm tra, gallery văn bản) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (thẻ flashcard từ vựng, luyện hội thoại thương mại, làm bài tập, luyện phát âm). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Ngoại ngữ chuyên ngành kinh tế/thương mại là môn đòi hỏi vốn từ vựng chuyên môn và kỹ năng giao tiếp trong tình huống thương mại (đàm phán, đặt hàng, khiếu nại) nhưng sinh viên thường học từ vựng rời rạc, khó ghi nhớ và ít cơ hội thực hành hội thoại. Giảng viên khó tạo kênh ôn tập sinh động hằng ngày và khó đánh giá mức nắm từ vựng cũng như khả năng sử dụng đúng ngữ cảnh. Sinh viên thiếu công cụ mô phỏng hội thoại và phản hồi kịp thời về cách dùng từ.

## 4. Phát biểu vấn đề

- **P1.** Từ vựng chuyên ngành thương mại nhiều và gần gũi nghĩa, khó ghi nhớ nếu học rời rạc.
- **P2.** Sinh viên chưa thấy được cách dùng từ/cụm từ trong hội thoại và văn bản thương mại thực tế.
- **P3.** Học liệu (glossary, hội thoại, đề) nằm rải rác, khó cập nhật và khó theo dõi tiến độ.
- **P4.** Giảng viên tốn thời gian soạn đề, chấm bài và khó phát hiện sớm sinh viên yếu phần từ vựng/hội thoại.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Ngoại ngữ chuyên ngành thành một sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách – Sinh viên – Giảng viên – Quản trị viên) đủ để nghiệp vụ chạy từ đầu đến cuối.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (glossary, bài học, hội thoại, bài tập, nộp bài, chấm điểm).
- **O4.** Sử dụng JavaScript/DOM để thẻ flashcard từ vựng, mô phỏng hội thoại, kiểm tra chính tả, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn.
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu môn học, glossary công khai, bài mẫu |
| Sinh viên | Học từ vựng, luyện hội thoại thương mại, làm bài tập, xem tiến độ |
| Giảng viên | Dựng glossary, bài học, hội thoại mẫu, giao bài, chấm và phản hồi |
| Quản trị viên | Quản lý tài khoản, kho từ vựng, cấu hình, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (sinh viên học glossary, luyện hội thoại, làm bài; giảng viên dựng học liệu, chấm bài)
↓
Xem trạng thái / dữ liệu / phản hồi (mức nắm từ vựng, điểm bài tập, tiến độ)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (dịch thuật ngữ)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên duyệt bộ từ vựng, admin duyệt kho từ)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã

| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Nắm sơ bộ môn học | Xem giới thiệu, glossary mẫu | Trang chủ giới thiệu | `index.html` | R | SV1 |
| Khách | Hiểu kho từ vựng | Xem thuật ngữ công khai | Bản xem trước glossary | `visitor-glossary-preview.html` | R | SV1 |
| Sinh viên | Ghi nhớ từ vựng | Học glossary dạng flashcard | Studio glossary | `student-glossary.html` | C/R/U | SV1 |
| Sinh viên | Rèn hội thoại | Luyện hội thoại thương mại mô phỏng | Hội thoại thương mại | `student-dialogue-sim.html` | C/R/U | SV1 |
| Sinh viên | Ôn tập kiến thức | Làm bài tập từ vựng/điền từ, nộp bài | Trang làm bài tập | `student-exercise.html` | C/R/U | SV1 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, mức nắm từ | Dashboard sinh viên | `student-dashboard.html` | R | SV1 |
| Giảng viên | Dựng học liệu | Tạo glossary, bài học, hội thoại mẫu | Quản lý glossary & hội thoại | `teacher-glossary-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Giao bài & chấm | Soạn đề, chấm & phản hồi | Quản lý bài tập & chấm điểm | `teacher-exercise-build.html` | C/R/U/D | SV2 |
| Giảng viên | Đánh giá lớp | Xem báo cáo mức nắm từ | Phân tích lớp | `teacher-analysis.html` | R | SV2 |
| Giảng viên | Tổng quan | Xem thống kê lớp, học liệu | Dashboard giảng viên | `teacher-dashboard.html` | R | SV2 |
| Quản trị viên | Quản lý tài khoản | Tạo/sửa/vô hiệu hóa tài khoản | Quản lý người dùng | `admin-user.html` | C/R/U/D | SV3 |
| Quản trị viên | Chuẩn hóa dữ liệu | Quản lý kho từ vựng, cấu hình | Cấu hình & kho từ vựng | `admin-config.html` | C/R/U/D | SV3 |
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

Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter theo chủ đề, đổi danh sách từ vựng thành card, thêm field phiên âm + validation, xử lý API rỗng, đổi responsive layout, thêm trạng thái "hội thoại đang luyện").

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách  → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `index.html` | Trang giới thiệu | R | Giới thiệu môn Ngoại ngữ chuyên ngành thương mại, chuẩn đầu ra. |
| 2 | `visitor-glossary-preview.html` | Bản xem trước glossary | R | Xem thử một bộ thuật ngữ thương mại công khai. |
| 3 | `visitor-dialogue-preview.html` | Hội thoại mẫu | R | Xem một hội thoại đàm phán mẫu dạng tĩnh. |

### Sinh viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ chương, điểm, mức nắm từ. |
| 5 | `student-glossary.html` | Studio glossary | C/R/U | Học từ vựng dạng flashcard, tự tạo thẻ. |
| 6 | `student-dialogue-sim.html` | Hội thoại thương mại | C/R/U | Luyện hội thoại theo tình huống, nhập vai. |
| 7 | `student-vocab-quiz.html` | Trắc nghiệm từ vựng | C/R/U | Trắc nghiệm nhanh kèm giải thích. |
| 8 | `student-exercise.html` | Trang làm bài tập | C/R/U | Làm bài tập điền từ/dịch thuật, nộp bài, xem đáp án. |

### Giảng viên → 5 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bộ glossary, điểm. |
| 10 | `teacher-glossary-manage.html` | Quản lý glossary & hội thoại | C/R/U/D | Dựng bộ từ vựng, bài học, hội thoại mẫu. |
| 11 | `teacher-topic-manage.html` | Quản lý lý thuyết | C/R/U/D | Soạn bài học, chủ đề, văn bản mẫu. |
| 12 | `teacher-exercise-build.html` | Soạn & chấm bài tập | C/R/U/D | Tạo đề từ vựng/hội thoại, chấm điểm, phản hồi. |
| 13 | `teacher-analysis.html` | Phân tích lớp | R | Báo cáo mức nắm từ, chỗ hay sai. |

### Quản trị viên → 3 màn hình

| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Thống kê người dùng, hoạt động hệ thống. |
| 15 | `admin-user.html` | Quản lý người dùng | C/R/U/D | Quản lý tài khoản sinh viên, giảng viên. |
| 16 | `admin-config.html` | Cấu hình & kho từ vựng | C/R/U/D | Quản lý kho từ vựng, phân loại, cấu hình. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (lật thẻ flashcard, nhập vai hội thoại, tự kiểm tra từ); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD

`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý

| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Sinh viên, giảng viên, quản trị viên. |
| `courses` | ✓ | ✓ | ✓ | ✓/Archive | Khoá học/môn Ngoại ngữ chuyên ngành. |
| `topics` | ✓ | ✓ | ✓ | ✓/Archive | Chương, chủ đề bài học. |
| `glossary` | ✓ | ✓ | ✓ | ✓/Archive | Bộ thuật ngữ thương mại (từ – nghĩa – phiên âm). |
| `dialogues` | ✓ | ✓ | ✓ | ✓/Archive | Hội thoại thương mại theo tình huống. |
| `vocabCards` | ✓ | ✓ | ✓ | ✓/Archive | Thẻ flashcard từ vựng của sinh viên. |
| `exercises` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập từ vựng/điền từ/dịch. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, điểm & phản hồi. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

### Cách truyền đạt 1 – Flashcard glossary tương tác (Student Glossary)

Trên `student-glossary.html`, mỗi thuật ngữ là một thẻ lật flashcard: mặt trước từ tiếng Anh, mặt sau nghĩa tiếng Việt + phiên âm + ví dụ ngữ cảnh, tự tạo và trộn bộ thẻ để ghi nhớ. **Giúp người học ghi nhớ từ vựng chuyên ngành tập trung và tự kiểm tra.**

### Cách truyền đạt 2 – Mô phỏng hội thoại thương mại nhập vai (Student Dialogue Sim)

Trên `student-dialogue-sim.html`, sinh viên luyện hội thoại theo tình huống thương mại (chào hàng, đặt hàng, đàm phán giá, khiếu nại) qua các bước nhập vai với lời thoại dẫn sẵn và gợi ý từ vựng. **Giúp người học thấy cách dùng từ/cụm từ trong giao tiếp thực tế thay vì học rời rạc.**

### Cách truyền đạt 3 – Trắc nghiệm nhanh kèm giải thích (Student Vocab Quiz)

Trên `student-vocab-quiz.html`, mỗi câu hỏi chọn đáp án đúng cho thuật ngữ đều kèm giải thích ngắn về ngữ cảnh sử dụng, tạo vòng lặp ôn nhanh. **Giúp người học kiểm tra và hiểu cách dùng từ ngay lập tức.**

### Cách truyền đạt 4 – Văn bản thương mại tương tác (Teacher Topic Manage)

Trên `teacher-topic-manage.html`, văn bản/hợp đồng mẫu được đánh dấu lớp chú thích (tooltip) các thuật ngữ quan trọng, giúp đọc hiểu tài liệu chuyên ngành. **Giúp người học nắm cấu trúc văn bản và từ vựng trong ngữ cảnh.**

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – Trợ lý dịch thuật ngữ thương mại
Nhập một thuật ngữ hoặc câu tiếng Anh thương mại, AI gợi ý bản dịch tiếng Việt theo ngữ cảnh thương mại kèm giải thích cách dùng. Dùng JSON giả lập các thuật ngữ mẫu / JavaScript theo quy tắc, hoặc API LLM tùy chọn. Kết quả phải hiển thị bản dịch và ví dụ để sinh viên hiểu và chỉnh sửa.

### AI-2 – Gợi ý câu thoại trong hội thoại mẫu
Nhập tình huống thương mại, AI gợi ý câu thoại phù hợp theo vai. Mô phỏng bằng JavaScript theo quy tắc gắn kịch bản, phản hồi định sẵn hoặc LLM.

### AI-3 – Gợi ý lộ trình ôn từ vựng theo điểm
Nhận diện các chủ đề từ vựng sinh viên hay sai để gợi ý lộ trình ôn. Mô phỏng bằng JSON giả lập dựa trên submissions và JavaScript thống kê theo chương.

### Nguyên tắc trải nghiệm AI (nếu có)

```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `courses`, `topics`, `glossary`, `dialogues`, `vocabCards`, `exercises`, `submissions`. Triển khai bằng file JSON cục bộ, LocalStorage/SessionStorage, JSON Server, MockAPI hoặc public API; không bắt buộc máy chủ thật.

Dưới đây là gợi ý `db.json` (JSON Server):

```json
{
  "users": [
    { "id": 1, "name": "SV Mẫu", "role": "student", "email": "sv@tlus.edu.vn" },
    { "id": 2, "name": "GV Ngoại ngữ", "role": "teacher", "email": "gv@tlus.edu.vn" }
  ],
  "glossary": [
    { "id": 1, "term": "invoice", "meaning": "hóa đơn", "phonetic": "/ˈɪnvɔɪs/", "topic": "Thanh toán" }
  ],
  "dialogues": [
    { "id": 1, "title": "Đàm phán giá", "scenario": "Negotiation", "lines": ["Hello, we are interested in your product.", "What is your best price?"] }
  ],
  "vocabCards": [
    { "id": 1, "studentId": 1, "glossaryId": 1, "mastered": false }
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

### Mẫu prompt 1 – Dựng học liệu/bài giảng glossary

```text
Tôi là SV môn CSE122 đang làm BTL về môn Ngoại ngữ chuyên ngành kinh tế/thương mại (sản phẩm TradeLang). Hãy giúp tôi dựng bộ glossary trực quan:
+ Giao diện: thẻ flashcard từ vựng – nghĩa – phiên âm – ví dụ ngữ cảnh.
+ Vai trò người xem: sinh viên học từ vựng thương mại lần đầu.
+ Yêu cầu trực quan: thẻ lật, trộn bộ, tự tạo thẻ, trắc nghiệm nhanh.
+ Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json

```text
Tạo file db.json (JSON Server) cho hệ thống TradeLang, gồm các entity users, courses, topics, glossary, dialogues, vocabCards, exercises, submissions, mỗi entity 5–8 bản ghi mẫu theo môn Ngoại ngữ chuyên ngành thương mại, có id, timestamps, và trường phù hợp nghiệp vụ (từ – nghĩa – phiên âm). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)

```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước về cách học và ghi nhớ từ vựng thương mại, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI

- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (trang giới thiệu, studio glossary, hội thoại thương mại, trắc nghiệm từ vựng, làm bài). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.

### SV2
Phụ trách: **Giảng viên** (quản lý glossary & hội thoại, soạn bài, chấm điểm, phân tích). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.

### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:

- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub

- Repo gợi ý: `cse122-tradelang-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion

Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS flashcard & hội thoại, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): flashcard glossary, mô phỏng hội thoại nhập vai, trắc nghiệm nhanh kèm giải thích.
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

Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (flashcard, hội thoại, kiểm tra chính tả); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.