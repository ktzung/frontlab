# BTL-07 – LinguaFlow – Hệ thống hỗ trợ giảng dạy và học tập môn Ngoại ngữ (Tiếng Anh)

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giảng dạy Ngoại ngữ (Tiếng Anh)**

## 2. Tóm tắt sản phẩm

**LinguaFlow – Hệ thống hỗ trợ giảng dạy và học tập môn Ngoại ngữ (Tiếng Anh)** giúp **giảng viên** dựng học liệu trực quan (bài nghe, flashcard từ vựng, bộ quiz, bài luyện nói) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động qua luyện từ vựng, luyện nghe và trắc nghiệm phản hồi ngay. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Tiếng Anh là môn nền tảng mọi sinh viên đều học, nhưng lớp đông, trình độ chênh lệch, giờ luyện nói/nghe trên lớp hạn chế. Người dạy khó cá nhân hóa và theo dõi tiến độ từng sinh viên; người học thiếu kênh trau dồi từ vựng lặp lại theo khoảng cách (spaced repetition) và luyện nghe chủ động ngoài giờ. Vì vậy nhu cầu một nền tảng trực quan, tự luyện và phản hồi tức thì là rất lớn.

## 4. Phát biểu vấn đề

- **P1.** Từ vựng khó nhớ vì học rời rạc, không được ôn lặp lại đúng thời điểm và thiếu gắn ngữ cảnh/âm thanh.
- **P2.** Kỹ năng nghe khó rèn ngoài giờ vì thiếu bài nghe phân theo trình độ kèm transcript và phản hồi.
- **P3.** Giảng viên tốn thời gian chấm bài viết/nói thủ công, khó phát hiện sớm sinh viên phát âm/ngữ pháp yếu.
- **P4.** Sinh viên không có bức tranh tổng thể về tiến độ từ vựng, kỹ năng và điểm yếu cần cải thiện.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Tiếng Anh thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách 3, Sinh viên 5, Giảng viên 5, Admin 3).
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: chủ đề, bộ từ vựng, flashcard, bài nghe, bộ quiz, nộp bài, chấm phản hồi.
- **O4.** Dùng JavaScript/DOM cho thẻ flashcard lật, phát audio giả lập, đếm giờ luyện, tìm kiếm, lọc, validation.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Đề xuất tối thiểu 3 ý tưởng AI mô phỏng ở Frontend (tùy chọn nâng cao, không bắt buộc).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + PR.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa học, xem thử bài luyện mẫu, đăng ký |
| Sinh viên | Học từ vựng bằng flashcard, luyện nghe, làm quiz, xem tiến độ cá nhân |
| Giảng viên | Dựng bộ từ vựng, bài nghe, quiz; giao bài; chấm & phản hồi bài nói/viết |
| Quản trị viên | Quản lý tài khoản, chủ đề/trình độ, cấu hình, báo cáo hoạt động |

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
| Khách | Giới thiệu khóa học tiếng Anh | Xem tổng quan chương trình, cấp độ | Trang chủ Khách | `index.html` | R | SV1 |
| Khách | Xem thử nội dung học liệu | Luyện thử 1 bộ flashcard/quizz mẫu | Preview bài luyện mẫu | `visitor-preview.html` | R | SV1 |
| Khách | Đăng ký tài khoản | Tạo tài khoản sinh viên/giảng viên | Đăng ký | `register.html` | C | SV1 |
| Sinh viên | Nắm tiến độ học tập | Xem từ vựng đã học, điểm quiz, giờ luyện | Dashboard | `student-dashboard.html` | R | SV1 |
| Sinh viên | Học từ vựng chủ động | Lật thẻ, nghe phát âm, đánh dấu ghi nhớ | Luyện flashcard | `student-flashcard.html` | R/U | SV1 |
| Sinh viên | Rèn kỹ năng nghe | Nghe audio, điền từ, xem transcript | Luyện nghe | `student-listening.html` | C/R | SV1 |
| Sinh viên | Kiểm tra kiến thức | Làm quiz trắc nghiệm, xem giải thích ngay | Làm bài quiz | `student-quiz.html` | C/R | SV1 |
| Sinh viên | Nộp bài nói/viết | Tải/ghi audio mô phỏng, gửi bài | Nộp bài nói/viết | `student-submission.html` | C | SV1 |
| Giảng viên | Tổng quan lớp học | Xem danh sách SV, điểm trung bình, hoạt động | Dashboard GV | `teacher-dashboard.html` | R | SV2 |
| Giảng viên | Dựng bộ từ vựng | Tạo/chủ đề, bộ từ, flashcard kèm nghĩa/phát âm | Quản lý từ vựng | `teacher-vocab-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Dựng bài nghe & quiz | Tạo bài nghe, đoạn audio mô phỏng, bộ câu hỏi | Quản lý bài nghe/quiz | `teacher-content-build.html` | C/R/U/D | SV2 |
| Giảng viên | Giao bài & theo dõi | Giao bài , hạn nộp, xem trạng thái nộp | Giao & theo dõi bài | `teacher-assignment.html` | C/R/U | SV2 |
| Giảng viên | Chấm & phản hồi | Chấm bài nói/viết, để phản hồi, cập nhật điểm | Chấm bài & phản hồi | `teacher-grading.html` | R/U | SV2 |
| Quản trị viên | Quản trị hệ thống | Xem số người dùng, nội dung, hoạt động | Dashboard Admin | `admin-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Tạo/vô hiệu hóa tài khoản, gán vai trò, cấp độ | Quản lý tài khoản | `admin-user-management.html` | C/R/U/D | SV3 |
| Quản trị viên | Cấu hình chương trình | Quản lý chủ đề, cấp độ khóa, loại bài luyện | Cấu hình | `admin-config.html` | C/R/U | SV3 |

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
| 1 | `index.html` | Trang chủ Khách | R | Giới thiệu khóa, cấp độ, nổi bật bài luyện mẫu. |
| 2 | `visitor-preview.html` | Preview bài luyện mẫu | R | Xem thử flashcard/quiz mẫu không cần đăng nhập. |
| 3 | `register.html` | Đăng ký | C | Tạo tài khoản sinh viên/giảng viên, gán cấp độ đầu vào. |

### Sinh viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi từ vựng, điểm quiz, biểu đồ tiến độ. |
| 5 | `student-flashcard.html` | Luyện flashcard | R/U | Lật thẻ, nghe phát âm, đánh dấu Ghi nhớ/Cần ôn. |
| 6 | `student-listening.html` | Luyện nghe | C/R | Nghe audio giả lập, điền từ, xem transcript. |
| 7 | `student-quiz.html` | Làm quiz | C/R | Trả lời trắc nghiệm, chấm ngay, xem giải thích. |
| 8 | `student-submission.html` | Nộp bài nói/viết | C | Gửi bài theo bài giao của giảng viên, xem điểm/phản hồi. |

### Giảng viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard GV | R | Tổng quan lớp, điểm trung bình, hoạt động. |
| 10 | `teacher-vocab-manage.html` | Quản lý từ vựng | C/R/U/D | Tạo chủ đề, bộ từ, flashcard kèm nghĩa/phát âm. |
| 11 | `teacher-content-build.html` | Dựng bài nghe & quiz | C/R/U/D | Tạo bài nghe, bộ câu hỏi quiz, gắn cấp độ. |
| 12 | `teacher-assignment.html` | Giao và theo dõi bài | C/R/U | Giao bài, hạn nộp, xem trạng thái nộp của từng SV. |
| 13 | `teacher-grading.html` | Chấm & phản hồi | R/U | Chấm bài nói/viết, để feedback, ghi điểm. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard Admin | R | Số người dùng, nội dung, hoạt động hệ thống. |
| 15 | `admin-user-management.html` | Quản lý tài khoản | C/R/U/D | Quản lý tài khoản, vai trò, cấp độ. |
| 16 | `admin-config.html` | Cấu hình | C/R/U | Quản lý chủ đề, cấp độ, loại bài luyện. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Thêm `level`, `learnedCount`, `streak`. |
| `topics` | ✓ | ✓ | ✓ | ✓/Archive | Chủ đề: Gia đình, Công việc, Du lịch... |
| `vocabSets` | ✓ | ✓ | ✓ | ✓/Archive | Bộ từ vựng thuộc chủ đề, cấp độ. |
| `flashcards` | ✓ | ✓ | ✓ | ✓/Archive | Từ, nghĩa, phiên âm, loại từ, câu ví dụ. |
| `listeningLessons` | ✓ | ✓ | ✓ | ✓/Archive | Bài nghe: audio mô phỏng, transcript, câu hỏi. |
| `quizzes` | ✓ | ✓ | ✓ | ✓/Archive | Bộ câu hỏi trắc nghiệm + đáp án, giải thích. |
| `quizResults` | ✓ | ✓ | — | ✓/Archive | Kết quả làm quiz, điểm, thời gian. |
| `assignments` | ✓ | ✓ | ✓ | ✓/Archive | Bài giao: kiểu (nói/viết/từ vựng), hạn nộp. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp của SV, điểm, feedback của GV. |
| `progressLogs` | — | ✓ | ✓ | — | Nhật ký luyện từ/nghe/quiz, không cho tạo tay. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng nhất** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn ngoại ngữ.

### Cách truyền đạt 1 – Flashcard từ vựng lật + đánh dấu ghi nhớ
- **Màn hình áp dụng:** `student-flashcard.html`.
- **Mô tả:** Thẻ từ vựng hai mặt, lật qua lại, có phiên âm IPA, nút nghe phát âm, câu ví dụ theo ngữ cảnh thực.
- **Vì sao giúp người học hiểu hơn:** Lặp lại đúng thời điểm và gắn từ với âm + ngữ cảnh giúp nhớ dài hạn, không học vẹt mặt chữ.

### Cách truyền đạt 2 – Luyện nghe chủ động có transcript đối chiếu
- **Màn hình áp dụng:** `student-listening.html`.
- **Mô tả:** Audio giả lập theo cấp độ, người học nghe và điền từ còn thiếu; bật transcript để đối chiếu và nghe lại từng câu.
- **Vì sao giúp người học hiểu hơn:** Rèn nghe theo từng bước có hỗ trợ, chủ động nhận lỗi, tạo thói quen nghe tích cực thay vì bị động.

### Cách truyền đạt 3 – Trắc nghiệm quiz kèm giải thích ngay
- **Màn hình áp dụng:** `student-quiz.html`.
- **Mô tả:** Câu hỏi trắc nghiệm ngữ pháp/từ vựng chấm ngay, mỗi đáp án sai có giải thích lý do chọn sai.
- **Vì sao giúp người học hiểu hơn:** Phản hồi tức thì + giải thích gốc giúp sửa hiểu lầm ngay, củng cố kiến thức đã học.

### Cách truyền đạt 4 – Bức tranh tiến độ trực quan (biểu đồ)
- **Màn hình áp dụng:** `student-dashboard.html`.
- **Mô tả:** Biểu đồ tiến độ từ vựng, điểm quiz theo tuần, "chuỗi ngày luyện" (streak).
- **Vì sao giúp người học hiểu hơn:** Nhìn thấy sự tiến bộ và điểm yếu cụ thể để tự điều chỉnh lộ trình, tăng động lực.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Từ vựng theo ngữ cảnh
Gợi ý câu ví dụ, cách dùng và từ đồng nghĩa cho một từ khi được chọn trên flashcard.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-2 – AI Chấm điểm sơ bộ bài nói/viết
Nhận diện gợi ý chấm điểm tham khảo (độ dài, từ khóa, sửa lỗi phổ biến) cho bài nộp, giảng viên xác nhận/sửa lại trước khi công bố.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Lộ trình ôn tập cá nhân
Dựa vào các từ đánh dấu "Cần ôn" và điểm quiz, gợi ý bộ flashcard cần luyện lại hôm nay.
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
    { "id": 1, "name": "Nguyen Van A", "role": "student", "email": "a@sv.edu.vn", "level": "B1", "streak": 7, "learnedCount": 320 },
    { "id": 2, "name": "Tran Thi B", "role": "teacher", "email": "b@gv.edu.vn", "level": "C1", "streak": 0, "learnedCount": 0 }
  ],
  "topics": [
    { "id": 1, "name": "Gia đình", "level": "A2" },
    { "id": 2, "name": "Công việc", "level": "B1" }
  ],
  "vocabSets": [
    { "id": 1, "topicId": 1, "title": "Từ vựng về gia đình", "cardCount": 12 }
  ],
  "flashcards": [
    { "id": 1, "setId": 1, "word": "sibling", "meaning": "anh chị em ruột", "phonetic": "/ˈsɪblɪŋ/", "type": "noun", "example": "My sibling lives abroad." }
  ],
  "listeningLessons": [
    { "id": 1, "title": "Đoạn hội thoại ở sân bay", "level": "B1", "audioUrl": "audio/lesson1.mp3", "transcript": "...", "questions": [1,2,3] }
  ],
  "quizzes": [
    { "id": 1, "title": "Ôn thì hiện tại hoàn thành", "level": "B1", "questions": [ { "id": 1, "question": "She ___ to London twice.", "options": ["has been","have been","is"], "answer": 0, "explain": "Chủ ngữ số ít dùng has been." } ] }
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

### Mẫu prompt 1 – Dựng học liệu/bài giảng tiếng Anh
```text
Tôi là SV môn CSE122 đang làm BTL về môn Ngoại ngữ (Tiếng Anh). Hãy giúp tôi tạo bộ flashcard từ vựng cho giao diện luyện từ.
+ Chủ đề: [ví dụ: Công việc, cấp độ B1]
+ Đối tượng: [sinh viên xem thẻ]
+ Yêu cầu trực quan: thẻ 2 mặt, phiên âm IPA, câu ví dụ theo ngữ cảnh, nút nghe phát âm
+ Hãy giải thích logic sau khi sinh để tôi hiểu cách dữ liệu được render.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống LinguaFlow, gồm các entity users, topics, vocabSets, flashcards, listeningLessons, quizzes, quizResults, assignments, submissions, progressLogs, mỗi entity 5–8 bản ghi mẫu theo môn Ngoại ngữ, có id, timestamps, và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước làm tính năng luyện nghe: hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Sinh viên** (flashcard, luyện nghe, quiz, nộp bài). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giảng viên** (dựng từ vựng, bài nghe, quiz, chấm phản hồi). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-linguaflow-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS flashcard lật, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-flashcard.mp4
SV2-01-teacher-vocab-manage.mp4
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): flashcard, luyện nghe, quiz.
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