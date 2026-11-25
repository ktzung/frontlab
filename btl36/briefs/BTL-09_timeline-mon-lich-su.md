# BTL-09 – TimeLine – Hệ thống hỗ trợ giảng dạy và học tập môn Lịch sử

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục trung học phổ thông / Giảng dạy Lịch sử**

## 2. Tóm tắt sản phẩm

**TimeLine – Hệ thống hỗ trợ giảng dạy và học tập môn Lịch sử** giúp **giáo viên** dựng học liệu trực quan (trục thời gian tương tác, sơ đồ nhân quả, gallery sự kiện) và giúp **học sinh** ghi nhớ sự kiện, nắm quan hệ nhân - quả và chuỗi diễn biến một cách trực quan, sinh động. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Lịch sử THPT có nhiều mốc thời gian, tên sự kiện, nhân vật, dễ gây quá tải ghi nhớ. Học sinh thường học thuộc mốc mà không hiểu mối liên hệ nhân - quả giữa các sự kiện. Giáo viên cần công cụ trình bày chuỗi thời gian và mối quan hệ sinh động, kèm gallery minh họa, để giúp học sinh hình dung bối cảnh lịch sử.

## 4. Phát biểu vấn đề

- **P1.** Nhiều mốc thời gian rời rạc khiến học sinh khó nhớ và dễ nhầm sự kiện.
- **P2.** Học sinh học thuộc lòng mốc mà không nắm được quan hệ nhân - quả giữa các sự kiện.
- **P3.** Giáo viên tốn thời gian dựng slide và chấm câu hỏi, thiếu kênh tương tác để học sinh tự ôn.
- **P4.** Học sinh thiếu nguồn minh họa (hình ảnh, bối cảnh) gắn liền sự kiện để hiểu sâu bối cảnh.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Lịch sử thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách 3, Học sinh 5, Giáo viên 5, Admin 3).
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: thời kỳ, sự kiện, trục thời gian, sơ đồ nhân quả, bài tập, nộp bài.
- **O4.** Dùng JavaScript/DOM cho vẽ trục thời gian và sơ đồ tương tác, tìm kiếm, lọc, validation.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Đề xuất tối thiểu 3 ý tưởng AI mô phỏng ở Frontend (tùy chọn nâng cao, không bắt buộc).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + PR.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa học, xem trục thời gian mẫu công khai |
| Học sinh | Khám phá sự kiện theo trục thời gian, học sơ đồ nhân quả, làm quiz, xem tiến độ |
| Giáo viên | Dựng thời kỳ, sự kiện, trục thời gian, sơ đồ nhân quả; giao bài; chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chủ đề/giai đoạn, cấu hình, báo cáo |

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
| Khách | Giới thiệu khóa Lịch sử | Xem tổng quan chương trình, giai đoạn nổi bật | Trang chủ Khách | `index.html` | R | SV1 |
| Khách | Xem thử nội dung học liệu | Xem thử một trục thời gian mẫu công khai | Preview trục thời gian | `visitor-preview.html` | R | SV1 |
| Khách | Đăng ký tài khoản | Tạo tài khoản học sinh/giáo viên | Đăng ký | `register.html` | C | SV1 |
| Học sinh | Nắm tiến độ học tập | Xem sự kiện đã học, điểm quiz | Dashboard | `student-dashboard.html` | R | SV1 |
| Học sinh | Khám phá sự kiện theo thời gian | Duyệt trục thời gian tương tác, xem chi tiết sự kiện | Trục thời gian | `student-timeline.html` | R | SV1 |
| Học sinh | Hiểu quan hệ nhân quả | Xem sơ đồ nhân - quả, phóng to chi tiết | Sơ đồ nhân quả | `student-causality.html` | R | SV1 |
| Học sinh | Ôn tập sự kiện | Làm quiz trắc nghiệm sự kiện, xem giải thích | Quiz ôn tập | `student-quiz.html` | C/R | SV1 |
| Học sinh | Nộp bài & xem phản hồi | Làm bài tập tự luận, nộp, xem điểm | Nộp bài | `student-submission.html` | C/R | SV1 |
| Giáo viên | Tổng quan lớp | Xem danh sách HS, điểm, hoạt động | Dashboard GV | `teacher-dashboard.html` | R | SV2 |
| Giáo viên | Dựng sự kiện & thời kỳ | Nhập thời kỳ, sự kiện, mốc thời gian | Quản lý sự kiện | `teacher-event-manage.html` | C/R/U/D | SV2 |
| Giáo viên | Dựng trục thời gian | Xây dựng trục thời gian gắn các sự kiện | Dựng trục thời gian | `teacher-timeline-build.html` | C/R/U/D | SV2 |
| Giáo viên | Dựng sơ đồ nhân quả | Nối các sự kiện theo quan hệ nhân - quả | Dựng sơ đồ nhân quả | `teacher-causality-build.html` | C/R/U/D | SV2 |
| Giáo viên | Giao & chấm bài | Giao bài, hạn nộp, chấm, phản hồi | Giao & chấm bài | `teacher-assignment.html` | C/R/U | SV2 |
| Quản trị viên | Quản trị hệ thống | Xem người dùng, nội dung, hoạt động | Dashboard Admin | `admin-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Tạo/vô hiệu hóa tài khoản, gán vai trò, lớp | Quản lý tài khoản | `admin-user-management.html` | C/R/U/D | SV3 |
| Quản trị viên | Cấu hình & giai đoạn | Quản lý giai đoạn lịch sử, chủ đề | Cấu hình | `admin-config.html` | C/R/U | SV3 |

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
| 1 | `index.html` | Trang chủ Khách | R | Giới thiệu khóa Lịch sử, giai đoạn nổi bật. |
| 2 | `visitor-preview.html` | Preview trục thời gian | R | Xem thử trục thời gian mẫu công khai. |
| 3 | `register.html` | Đăng ký | C | Tạo tài khoản học sinh/giáo viên. |

### Học sinh → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi sự kiện đã học, điểm quiz. |
| 5 | `student-timeline.html` | Trục thời gian | R | Duyệt trục thời gian tương tác, xem chi tiết sự kiện. |
| 6 | `student-causality.html` | Sơ đồ nhân quả | R | Xem sơ đồ nhân - quả, phóng to, truy vết chuỗi. |
| 7 | `student-quiz.html` | Quiz ôn tập | C/R | Trả lời trắc nghiệm sự kiện, xem giải thích. |
| 8 | `student-submission.html` | Nộp bài | C/R | Làm bài tự luận, nộp, xem điểm/phản hồi. |

### Giáo viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard GV | R | Tổng quan lớp, điểm, hoạt động. |
| 10 | `teacher-event-manage.html` | Quản lý sự kiện | C/R/U/D | Nhập thời kỳ, sự kiện, mốc thời gian. |
| 11 | `teacher-timeline-build.html` | Dựng trục thời gian | C/R/U/D | Xây trục thời gian gắn các sự kiện. |
| 12 | `teacher-causality-build.html` | Dựng sơ đồ nhân quả | C/R/U/D | Nối sự kiện theo quan hệ nhân - quả. |
| 13 | `teacher-assignment.html` | Giao & chấm bài | C/R/U | Giao bài, hạn nộp, chấm, phản hồi. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard Admin | R | Người dùng, nội dung, hoạt động hệ thống. |
| 15 | `admin-user-management.html` | Quản lý tài khoản | C/R/U/D | Quản lý tài khoản, vai trò, lớp. |
| 16 | `admin-config.html` | Cấu hình | C/R/U | Quản lý giai đoạn lịch sử, chủ đề. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Thêm lớp, vai trò, điểm trung bình. |
| `periods` | ✓ | ✓ | ✓ | ✓/Archive | Thời kỳ/giai đoạn lịch sử. |
| `events` | ✓ | ✓ | ✓ | ✓/Archive | Sự kiện: tên, mốc thời gian, mô tả, hình minh họa. |
| `timelines` | ✓ | ✓ | ✓ | ✓/Archive | Trục thời gian gắn nhiều sự kiện. |
| `causalityLinks` | ✓ | ✓ | ✓ | ✓/Archive | Quan hệ nhân - quả giữa 2 sự kiện. |
| `quizQuestions` | ✓ | ✓ | ✓ | ✓/Archive | Câu hỏi trắc nghiệm sự kiện. |
| `quizResults` | ✓ | ✓ | — | ✓/Archive | Kết quả làm bài ôn tập. |
| `assignments` | ✓ | ✓ | ✓ | ✓/Archive | Bài giao: câu hỏi tự luận, hạn nộp. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, điểm, phản hồi GV. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng nhất** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Lịch sử.

### Cách truyền đạt 1 – Trục thời gian tương tác
- **Màn hình áp dụng:** `student-timeline.html`.
- **Mô tả:** Dải thời gian theo chiều ngang có các mốc sự kiện, kéo/phóng to, click xem chi tiết và hình minh họa.
- **Vì sao giúp người học hiểu hơn:** Sắp xếp sự kiện theo trình tự thời gian trực quan, thấy tính tuần tự và bước nhảy giữa các thời kỳ.

### Cách truyền đạt 2 – Sơ đồ nhân - quả
- **Màn hình áp dụng:** `student-causality.html`.
- **Mô tả:** Sơ đồ nút - mũi tên thể hiện sự kiện A dẫn đến sự kiện B; truy vết chuỗi và phóng to nhánh.
- **Vì sao giúp người học hiểu hơn:** Làm rõ mối liên hệ logic thay vì học thuộc mốc rời rạc, giúp hiểu "vì sao" diễn biến xảy ra.

### Cách truyền đạt 3 – Quiz ôn tập kèm giải thích
- **Màn hình áp dụng:** `student-quiz.html`.
- **Mô tả:** Trắc nghiệm về mốc/nhân vật/điển tích; mỗi câu có giải thích bối cảnh và liên hệ trục thời gian.
- **Vì sao giúp người học hiểu hơn:** Tự kiểm tra chủ động, kết hợp sửa sai ngay với bối cảnh thực để nhớ lâu.

### Cách truyền đạt 4 – Gallery minh họa sự kiện
- **Màn hình áp dụng:** `student-timeline.html` (phần gallery).
- **Mô tả:** Bộ ảnh/tư liệu minh họa sự kiện, có chú thích và lọc theo giai đoạn.
- **Vì sao giúp người học hiểu hơn:** Hình ảnh gắn bối cảnh giúp hình dung sự kiện sống động, tăng trí nhớ so với chỉ đọc chữ.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Sắp xếp & tóm tắt sự kiện
Gợi ý gắn sự kiện mới vào trục thời gian đúng giai đoạn và tóm tắt ngắn ý nghĩa sự kiện.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-2 – AI Truy vết chuỗi nhân quả
Khi chọn một sự kiện, gợi ý các sự kiện khả dĩ dẫn đến hoặc hệ quả từ đó để học sinh khám phá.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Tạo câu hỏi ôn tập
Từ một sự kiện/giai đoạn, sinh câu hỏi trắc nghiệm gợi ý để giáo viên duyệt trước khi đưa vào quiz.
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
    { "id": 1, "name": "Nguyen Van A", "role": "student", "class": "11B2", "avgScore": 8.0 },
    { "id": 2, "name": "Tran Thi B", "role": "teacher", "class": "11B2", "avgScore": 0 }
  ],
  "periods": [
    { "id": 1, "name": "Lịch sử Việt Nam 1858–1945", "startYear": 1858, "endYear": 1945 }
  ],
  "events": [
    { "id": 1, "periodId": 1, "name": "Pháp nổ súng xâm lược Đà Nẵng", "year": 1858, "desc": "...", "image": "danang1858.jpg" },
    { "id": 2, "periodId": 1, "name": "Cách mạng tháng Tám", "year": 1945, "desc": "...", "image": "august1945.jpg" }
  ],
  "timelines": [
    { "id": 1, "periodId": 1, "title": "Tiến trình chống Pháp", "eventIds": [1,2] }
  ],
  "causalityLinks": [
    { "id": 1, "fromEventId": 1, "toEventId": 2, "label": "tạo điều kiện cho" }
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

### Mẫu prompt 1 – Dựng trục thời gian tương tác
```text
Tôi là SV môn CSE122 đang làm BTL về môn Lịch sử. Hãy giúp tôi thiết kế trục thời gian tương tác cho giai đoạn 1858–1945.
+ Giao diện: trang khám phá trục thời gian của học sinh
+ Đối tượng: [học sinh THPT xem]
+ Yêu cầu trực quan: dải thời gian ngang, mốc sự kiện click mở chi tiết, phóng to
+ Hãy giải thích logic sau khi sinh để tôi hiểu cách dữ liệu được render.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống TimeLine, gồm các entity users, periods, events, timelines, causalityLinks, quizQuestions, quizResults, assignments, submissions, mỗi entity 5–8 bản ghi mẫu theo môn Lịch sử THPT, có id, timestamps, và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước làm tính năng sơ đồ nhân quả: hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Học sinh** (trục thời gian, sơ đồ nhân quả, quiz, nộp bài). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giáo viên** (dựng sự kiện, trục thời gian, sơ đồ nhân quả, giao - chấm bài). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-timeline-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS trục thời gian, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-timeline.mp4
SV2-01-teacher-causality-build.mp4
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): trục thời gian tương tác, sơ đồ nhân quả, quiz ôn tập.
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