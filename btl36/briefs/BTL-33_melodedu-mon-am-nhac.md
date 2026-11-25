# BTL-33 – MelodEdu – Hệ thống hỗ trợ giảng dạy và học tập môn Âm nhạc

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giáo dục phổ thông – Giảng dạy Âm nhạc (nhạc lý, xướng âm, cảm thụ âm nhạc)**

## 2. Tóm tắt sản phẩm

**MelodEdu – Hệ thống hỗ trợ giảng dạy và học tập môn Âm nhạc** giúp **giáo viên âm nhạc** dựng bài giảng nhạc lý, quản lý thư viện bài hát và bài tập nghe, đồng thời giúp **học sinh** luyện đọc nốt, gõ nhịp, xướng âm qua bàn phím nốt nhạc và làm bài tập nghe. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Môn Âm nhạc ở bậc phổ thông và đại học hướng tới phát triển thẩm mỹ nhưng thường gặp khó khi học nhạc lý (nốt, nhịp, cao độ, quãng) khô khan trên giấy. Học sinh ít có kênh luyện nghe – đọc nốt giữa các tiết, thư viện bài hát và bản nhạc rời rạc, giáo viên khó kiểm tra và phản hồi chính xác cao độ cho cả lớp đông.

## 4. Phát biểu vấn đề

- **P1.** Học sinh khó luyện tập đọc nốt, gõ nhịp và xướng âm khi không có công cụ trực quan giữa các buổi học.
- **P2.** Thư viện bài hát, bản nhạc và bài tập nghe nằm rải rác, khó tìm và khó quản lý.
- **P3.** Giáo viên khó kiểm tra, chấm và phản hồi chính xác cao độ, nhịp điệu của từng học sinh với cả lớp đông.
- **P4.** Học sinh không có kênh tự ôn nhạc lý và kiểm tra kiến thức (nốt, quãng, ký hiệu) một cách sinh động.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Âm nhạc thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, thư viện bài hát, bài tập nghe, nộp bài, chấm điểm).
- **O4.** Sử dụng JavaScript/DOM cho bàn phím nốt nhạc canvas, phát âm bằng Web Audio API, kiểm tra cao độ, timer gõ nhịp và kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn (mục 12).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa âm nhạc, thư viện bài hát công khai |
| Học sinh | Luyện đọc nốt, gõ nhịp, xướng âm, làm bài tập nghe, nộp bài hát |
| Giáo viên | Xây bài giảng nhạc lý, quản lý thư viện bài hát, kiểm tra & chấm điểm nghe |
| Quản trị viên | Quản lý tài khoản, thư viện tài liệu, cấu hình khóa học |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (đọc nốt, gõ nhịp, xướng âm, làm bài nghe, chấm điểm)
↓
Xem trạng thái / dữ liệu / phản hồi (điểm nghe, độ chính xác cao độ)
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
| Học sinh | Luyện đọc nốt/gõ nhịp | Chơi trên bàn phím nốt nhạc canvas, nghe nốt, đọc ký hiệu | Màn hình bàn phím nốt nhạc | `student-note-piano.html` | C/R (tải, lỗi) | SV1 |
| Học sinh | Luyện nghe/xác định cao độ | Làm bài tập nghe, ghi cao độ/nhịp, nộp bài | Màn hình luyện nghe | `student-listening-test.html` | C/R/U (hoàn thành, đang chờ) | SV1 |
| Học sinh | Tra cứu bài hát | Tìm bài hát theo thể loại, độ khó | Màn hình thư viện bài hát | `student-song-library.html` | R (rỗng) | SV1 |
| Giáo viên | Dựng bài giảng nhạc lý | Soạn bài giảng nốt, quãng, nhịp | Màn hình quản lý bài giảng | `teacher-theory-manage.html` | C/R/U/D (lưu trữ) | SV2 |
| Giáo viên | Quản lý thư viện bài hát | Thêm/sửa/xóa bài hát, bản nhạc | Màn hình quản lý bài hát | `teacher-song-manage.html` | C/R/U/D (vô hiệu hóa) | SV2 |
| Giáo viên | Chấm bài nghe/hát của học sinh | Chấm điểm, phản hồi cao độ/nhịp | Màn hình chấm điểm nghe | `teacher-listening-grading.html` | R/U (đang chờ, hoàn thành) | SV2 |
| Quản trị viên | Quản lý tài khoản, lớp | Tạo/sửa/xóa tài khoản, gán lớp | Màn hình quản lý người dùng | `admin-user-management.html` | C/R/U/D (lưu trữ) | SV3 |
| Quản trị viên | Cấu hình thể loại, cấp độ | Cấu hình thể loại nhạc, cấp độ, tài liệu | Màn hình cấu hình thư viện | `admin-catalog-config.html` | R/U (vô hiệu hóa) | SV3 |

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
Giảng viên có thể yêu cầu thay đổi nhỏ 5–10 phút (thêm filter, đổi table thành card, thêm field + validation, xử lý API rỗng, đổi responsive, thêm trạng thái). Mục tiêu: kiểm tra khả năng **làm lại** và hiểu sản phẩm.

---

## 8. Danh sách giao diện nền tảng bắt buộc (khởi tạo bảng kiểm kê)

### Khách
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-music-overview.html` | Music Overview | R | Xem giới thiệu khóa học âm nhạc và các cấp độ. |
| 2 | `visitor-song-preview.html` | Song Preview | R | Nghe thử một bài hát trong thư viện. |
| 3 | `visitor-music-feedback.html` | Music Feedback | C/R | Góp ý bài hát/bản nhạc cần bổ sung. |

### Học sinh
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ học nhạc, điểm luyện tập, bài mới. |
| 5 | `student-note-piano.html` | Note Piano | C/R | Bàn phím nốt nhạc canvas, nhấn phím nghe nốt và hiện ký hiệu. |
| 6 | `student-song-library.html` | Song Library | R | Tra cứu thư viện bài hát theo thể loại, độ khó. |
| 7 | `student-listening-test.html` | Listening Test | C/R/U | Làm bài tập nghe, ghi cao độ/nhịp, nộp bài. |

### Giáo viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 8 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bài giảng, bài tập nghe. |
| 9 | `teacher-theory-manage.html` | Theory Manage | C/R/U/D | Xây bài giảng nhạc lý (nốt, quãng, nhịp). |
| 10 | `teacher-song-manage.html` | Song Manage | C/R/U/D | Quản lý thư viện, bản nhạc, bài hát. |
| 11 | `teacher-listening-grading.html` | Listening Grading | R/U | Chấm và phản hồi bài tập nghe / bản hát học sinh. |
| 12 | `teacher-class-analysis.html` | Class Analysis | R | Xem báo cáo mức đạt chuẩn cao độ/nhịp của lớp. |

### Quản trị viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 13 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống. |
| 14 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản giáo viên, học sinh, lớp. |
| 15 | `admin-catalog-config.html` | Catalog Config | R/U | Cấu hình thể loại nhạc, cấp độ, tài liệu thư viện. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (bàn phím nốt nhạc, phát âm, timer gõ nhịp); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tài khoản giáo viên, học sinh, quản trị. |
| `genres` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thể loại nhạc (pop, dân ca, nhạc thiếu nhi...). |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng nhạc lý. |
| `songs` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thư viện bài hát + bản nhạc. |
| `listeningExams` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài tập nghe, ghi cao độ/nhịp. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài nghe/bản hát học sinh nộp. |
| `sheetNotes` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Dữ liệu nốt hiển thị trên canvas. |
| `db.json` | — | ✓ | — | — | File mock API chứa các entity trên (JSON Server). |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Âm nhạc.

Liệt kê tối thiểu **3 cách truyền đạt** mà nhóm sẽ thực hiện, mỗi cách gắn với một màn hình:

### Cách 1 – Bàn phím nốt nhạc canvas có hiển thị ký hiệu (tương tác trực quan)
- **Màn hình áp dụng:** `student-note-piano.html`.
- Vì sao giúp hiểu hơn: học sinh nhấn phím nghe nốt thật (Web Audio API) và thấy tên nốt, ký hiệu trên khuông nhạc hiện ra, giúp gắn âm thanh với hình ảnh nốt – nền tảng của đọc nhạc và xướng âm.

### Cách 2 – Bài tập luyện nghe / xác định cao độ (trắc nghiệm nhanh có phản hồi)
- **Màn hình áp dụng:** `student-listening-test.html`.
- Vì sao giúp hiểu hơn: học sinh nghe đoạn nhạc/chuỗi nốt rồi chọn đáp án; hệ thống phản hồi đúng-sai và giải thích quãng, giúp rèn tai nghe và tự kiểm tra nhạc lý một cách sinh động.

### Cách 3 – Khuông nhạc hiện nốt theo từng bước (mô phỏng giai điệu)
- **Màn hình áp dụng:** `student-note-piano.html` (chế độ bài nhạc mẫu).
- Vì sao giúp hiểu hơn: giai điệu được chiếu từng nốt trên khuông kết hợp phát âm và tô sáng nốt đang chơi, giúp học sinh theo dõi thứ tự, cao độ, trường độ — trực quan hơn đọc bản nhạc tĩnh.

### Cách 4 – Thẻ flashcard nhạc lý (nốt, quãng, ký hiệu)
- **Màn hình áp dụng:** `student-note-piano.html` (mục ôn tập nhanh).
- Vì sao giúp hiểu hơn: học sinh lật thẻ nhớ tên nốt, quãng, dấu hóa; đảo mặt sau để tự kiểm tra, củng cố nhớ lâu các ký hiệu nhạc lý.

### Cách 5 – Timer gõ nhịp trực quan
- **Màn hình áp dụng:** `student-listening-test.html` (chế độ luyện nhịp).
- Vì sao giúp hiểu hơn: đồng hồ/tia nhấp nháy theo nhịp kèm âm thanh giúp học sinh cảm nhận phách, nhịp — yếu tố khó nắm nhất của nhạc lý.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Nhận diện cao độ (Pitch Detection)
Phân tích cao độ học sinh hát/chọn và đối chiếu với nốt chuẩn trên khuông nhạc, gợi ý độ lệch. Cách mô phỏng: Web Audio API + JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### AI-2 – AI Sinh bài tập nhịp / xướng âm (Rhythm & Solfège Generator)
Tự động sinh chuỗi nốt và bài thực hành nhịp theo cấp độ. Cách mô phỏng: JSON giả lập + JS theo quy tắc mẫu / API LLM tùy chọn.

### AI-3 – AI Đánh giá bản hát/đọc nốt (Vocal Feedback)
Nhận xét bản hát hay bài đọc nốt nộp, gợi ý chỗ cần luyện thêm. Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity chính (mock API – JSON Server / MockAPI / LocalStorage): `users`, `genres`, `lessons`, `songs`, `listeningExams`, `submissions`, `sheetNotes`. File `db.json` gợi ý chứa bản ghi mẫu theo môn: `genres` (Nhạc thiếu nhi, Dân ca, Pop), `lessons` (các bài nhạc lý: nốt – quãng – nhịp), `songs` (bài hát cùng bản nhạc số), `listeningExams` (bài nghe xác định cao độ), `sheetNotes` (dữ liệu nốt cho canvas). Không bắt buộc backend thật; trọng tâm là trải nghiệm frontend.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng bài giảng nhạc lý có bàn phím nốt nhạc
```text
Tôi là SV môn CSE122 đang làm BTL về "Hệ thống hỗ trợ giảng dạy và học tập môn Âm nhạc – MelodEdu". Hãy giúp tôi soạn bài giảng nhạc lý về quãng âm cho học sinh trung cấp.
+ Giao diện: teacher-theory-manage.html, xem của giáo viên.
+ Vai trò người xem: học sinh.
+ Yêu cầu trực quan: mô tả cách dựng bàn phím nốt nhạc canvas, hiển thị quãng trên khuông, tạo bài luyện nghe đơn giản.
+ Hãy giải thích cách Web Audio phát nốt và logic so cao độ sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho MelodEdu
```text
Tạo file db.json (JSON Server) cho hệ thống MelodEdu, gồm các entity: users, genres, lessons, songs, listeningExams, submissions, sheetNotes; mỗi entity 5–8 bản ghi mẫu theo môn Âm nhạc, có id, timestamps, và trường phù hợp nghiệp vụ (cao độ, nhịp, thể loại, độ khó). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng bàn phím nốt nhạc canvas trong student-note-piano.html bằng Web Audio, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: Khách + Học sinh. Trách nhiệm chéo: phần giao diện dùng chung, responsive.
### SV2
Phụ trách: Giáo viên. Trách nhiệm chéo: JavaScript / dữ liệu / Web Audio / mock API; review PR.
### SV3
Phụ trách: Quản trị viên + tích hợp bố cục, điều hướng, dashboard. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-melodedu-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS tương tác (bàn phím nốt nhạc + Web Audio), TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
├── assets/ (images, icons, audio, data/)
├── css/ (style.css, responsive.css)
├── js/ (main.js, api.js, audio.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): bàn phím nốt nhạc canvas, bài luyện nghe cao độ, khuông nhạc hiện nốt theo bước.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; kết nối MIDI/bàn phím nhạc vật lý; hoạt ảnh vi mô; PWA.

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
Thang điểm có thể điều chỉnh theo từng kỳ.

## 25. Chuẩn đầu ra mong đợi
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (bàn phím nốt nhạc, Web Audio); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.