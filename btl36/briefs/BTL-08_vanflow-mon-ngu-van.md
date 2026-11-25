# BTL-08 – VănFlow – Hệ thống hỗ trợ giảng dạy và học tập môn Ngữ văn

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục trung học phổ thông / Giảng dạy Ngữ văn**

## 2. Tóm tắt sản phẩm

**VănFlow – Hệ thống hỗ trợ giảng dạy và học tập môn Ngữ văn** giúp **giáo viên** dựng học liệu trực quan (bản đồ tác phẩm, gợi ý dàn ý, phân tích nhân vật, gallery minh họa) và giúp **học sinh** tiếp thu tác phẩm dễ hiểu, sinh động qua bản đồ tư duy, dàn ý tương tác và quiz ôn tập. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Ngữ văn THPT yêu cầu đọc hiểu tác phẩm văn học và viết văn nghị luận. Học sinh thường gặp khó khi nắm cấu trúc tác phẩm, mối quan hệ nhân vật và triển khai dàn ý. Giáo viên cần kênh trực quan để dạy phân tích tác phẩm và chấm bài viết hiệu quả. Đây là nhu cầu rõ về bản đồ tác phẩm, dàn ý trực quan và phản hồi viết.

## 4. Phát biểu vấn đề

- **P1.** Học sinh khó hình dung tuyến nhân vật, sự kiện và chủ đề của tác phẩm dài, dẫn đến học thuộc lòng.
- **P2.** Việc lập dàn ý văn nghị luận phức tạp, học sinh thiếu khung gợi ý trực quan để triển khai.
- **P3.** Giáo viên chấm bài viết thủ công, phản hồi chậm, khó theo dõi sự tiến bộ viết của từng học sinh.
- **P4.** Học sinh thiếu kênh ôn tập tác phẩm có gợi ý phân tích và câu hỏi đố nhanh để tự đánh giá.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Ngữ văn thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách 3, Học sinh 5, Giáo viên 5, Admin 3).
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: tác phẩm, bản đồ nhân vật, dàn ý, bài tập viết, nộp bài, chấm phản hồi.
- **O4.** Dùng JavaScript/DOM cho vẽ sơ đồ/cây tương tác, gợi ý dàn ý từng bước, tìm kiếm, lọc, validation.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Đề xuất tối thiểu 3 ý tưởng AI mô phỏng ở Frontend (tùy chọn nâng cao, không bắt buộc).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + PR.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa học, xem bản đồ tác phẩm mẫu công khai |
| Học sinh | Đọc tác phẩm, xem bản đồ nhân vật, lập dàn ý, làm bài viết, xem phản hồi |
| Giáo viên | Dựng tác phẩm, bản đồ nhân vật, gợi ý dàn ý, bài tập viết; chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chủ đề/tác phẩm, cấu hình, báo cáo |

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
| Khách | Giới thiệu khóa Ngữ văn | Xem tổng quan chương trình, tác phẩm nổi bật | Trang chủ Khách | `index.html` | R | SV1 |
| Khách | Xem thử nội dung học liệu | Đọc thử một tác phẩm mẫu + bản đồ nhân vật | Preview tác phẩm mẫu | `visitor-preview.html` | R | SV1 |
| Khách | Đăng ký tài khoản | Tạo tài khoản học sinh/giáo viên | Đăng ký | `register.html` | C | SV1 |
| Học sinh | Nắm tiến độ học tập | Xem tác phẩm đã đọc, bài viết, điểm | Dashboard | `student-dashboard.html` | R | SV1 |
| Học sinh | Đọc & phân tích tác phẩm | Đọc văn bản, xem bản đồ nhân vật/sự kiện | Khám phá tác phẩm | `student-work-view.html` | R | SV1 |
| Học sinh | Lập dàn ý bài văn | Xây dàn ý trực quan, sắp xếp luận điểm/luận cứ | Lập dàn ý | `student-outline.html` | C/R/U | SV1 |
| Học sinh | Làm bài viết & nộp | Viết bài theo đề, nộp, xem điểm/phản hồi | Làm bài viết | `student-writing.html` | C/R | SV1 |
| Học sinh | Ôn tập tác phẩm | Trả lời câu hỏi đố nhanh & xem gợi ý | Quiz ôn tập | `student-quiz.html` | C/R | SV1 |
| Giáo viên | Tổng quan lớp học | Xem danh sách HS, điểm viết, hoạt động | Dashboard GV | `teacher-dashboard.html` | R | SV2 |
| Giáo viên | Dựng tác phẩm & bản đồ | Nhập văn bản, xây bản đồ nhân vật/sự kiện | Quản lý tác phẩm | `teacher-work-manage.html` | C/R/U/D | SV2 |
| Giáo viên | Dựng gợi ý dàn ý | Tạo đề + khung dàn ý gợi ý cho bài văn | Quản lý dàn ý | `teacher-outline-build.html` | C/R/U/D | SV2 |
| Giáo viên | Giao & theo dõi bài viết | Giao đề, hạn nộp, xem trạng thái nộp | Giao bài viết | `teacher-assignment.html` | C/R/U | SV2 |
| Giáo viên | Chấm & phản hồi | Chấm bài viết, để nhận xét, ghi điểm | Chấm bài viết | `teacher-grading.html` | R/U | SV2 |
| Quản trị viên | Quản trị hệ thống | Xem người dùng, tác phẩm, hoạt động | Dashboard Admin | `admin-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Tạo/vô hiệu hóa tài khoản, gán vai trò, lớp | Quản lý tài khoản | `admin-user-management.html` | C/R/U/D | SV3 |
| Quản trị viên | Cấu hình & chủ đề | Quản lý thể loại, chủ đề chương trình | Cấu hình | `admin-config.html` | C/R/U | SV3 |

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
| 1 | `index.html` | Trang chủ Khách | R | Giới thiệu khóa Ngữ văn, thể loại, tác phẩm nổi bật. |
| 2 | `visitor-preview.html` | Preview tác phẩm mẫu | R | Đọc thử một tác phẩm + bản đồ nhân vật mẫu. |
| 3 | `register.html` | Đăng ký | C | Tạo tài khoản học sinh/giáo viên. |

### Học sinh → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tác phẩm đã đọc, bài viết, điểm. |
| 5 | `student-work-view.html` | Khám phá tác phẩm | R | Đọc văn bản, xem bản đồ nhân vật/sự kiện tương tác. |
| 6 | `student-outline.html` | Lập dàn ý | C/R/U | Xây dàn ý các luận điểm/luận cứ theo bước. |
| 7 | `student-writing.html` | Làm bài viết | C/R | Viết theo đề, nộp bài, xem điểm/phản hồi. |
| 8 | `student-quiz.html` | Quiz ôn tập | C/R | Trả lời câu hỏi đố nhanh về tác phẩm. |

### Giáo viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard GV | R | Tổng quan lớp, điểm viết, hoạt động. |
| 10 | `teacher-work-manage.html` | Quản lý tác phẩm | C/R/U/D | Nhập văn bản, xây bản đồ nhân vật/sự kiện. |
| 11 | `teacher-outline-build.html` | Quản lý dàn ý | C/R/U/D | Tạo đề + khung dàn ý gợi ý. |
| 12 | `teacher-assignment.html` | Giao bài viết | C/R/U | Giao đề, hạn nộp, theo dõi trạng thái nộp. |
| 13 | `teacher-grading.html` | Chấm bài viết | R/U | Chấm bài, để nhận xét, ghi điểm. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard Admin | R | Người dùng, tác phẩm, hoạt động hệ thống. |
| 15 | `admin-user-management.html` | Quản lý tài khoản | C/R/U/D | Quản lý tài khoản, vai trò, lớp. |
| 16 | `admin-config.html` | Cấu hình | C/R/U | Quản lý thể loại, chủ đề chương trình. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Thêm lớp, vai trò, tổng điểm viết. |
| `genres` | ✓ | ✓ | ✓ | ✓/Archive | Thể loại: thơ, truyện, kịch... |
| `works` | ✓ | ✓ | ✓ | ✓/Archive | Tác phẩm: tên, tác giả, nội dung, chủ đề. |
| `characters` | ✓ | ✓ | ✓ | ✓/Archive | Nhân vật, vai trò, quan hệ, đặc điểm. |
| `workNodes` | ✓ | ✓ | ✓ | ✓/Archive | Mắt xích bản đồ (sự kiện, quan hệ nhân vật). |
| `outlines` | ✓ | ✓ | ✓ | ✓/Archive | Khung dàn ý gợi ý mẫu của giáo viên. |
| `writingTasks` | ✓ | ✓ | ✓ | ✓/Archive | Đề văn + hạn nộp, tiêu chí chấm. |
| `essaySubmissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài viết của HS, điểm, nhận xét GV. |
| `quizResults` | ✓ | ✓ | — | ✓/Archive | Kết quả quiz ôn tập. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng nhất** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Ngữ văn.

### Cách truyền đạt 1 – Bản đồ tác phẩm & nhân vật tương tác
- **Màn hình áp dụng:** `student-work-view.html`.
- **Mô tả:** Sơ đồ SVG/Canvas hiển thị các sự kiện chính và quan hệ nhân vật; click để mở chi tiết, tooltip khi di chuột.
- **Vì sao giúp người học hiểu hơn:** Trực quan hóa tuyến nhân vật và cấu trúc tác phẩm, thay vì đọc tuyến tính khó nắm mối liên hệ.

### Cách truyền đạt 2 – Lập dàn ý từng bước trực quan
- **Màn hình áp dụng:** `student-outline.html`.
- **Mô tả:** Học sinh thêm luận điểm/luận cứ theo cây phân cấp, kéo thả sắp xếp, có gợi ý khung dàn ý.
- **Vì sao giúp người học hiểu hơn:** Tách quá trình viết thành bước nhỏ, rèn tư duy mạch lạc và dễ nhìn thấy cấu trúc bài.

### Cách truyền đạt 3 – Quiz ôn tập kèm gợi ý phân tích
- **Màn hình áp dụng:** `student-quiz.html`.
- **Mô tả:** Câu hỏi đố nhanh về nội dung, nhân vật, biện pháp nghệ thuật; mỗi đáp án có gợi ý liên hệ tác phẩm.
- **Vì sao giúp người học hiểu hơn:** Tự kiểm tra và ôn lại kiến thức đã đọc một cách chủ động, gắn câu hỏi với phân tích cụ thể.

### Cách truyền đạt 4 – Phản hồi viết chi tiết theo tiêu chí
- **Màn hình áp dụng:** `teacher-grading.html`.
- **Mô tả:** Chấm bài theo các nhóm tiêu chí (nội dung, kết cấu, diễn đạt) với nhận xét và dải điểm.
- **Vì sao giúp người học hiểu hơn:** Nhìn rõ điểm mạnh/yếu theo từng kỹ năng viết, dễ cải thiện ở bài sau.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Gợi ý dàn ý
Từ đề văn, gợi ý khung dàn ý luận điểm/luận cứ để học sinh tham khảo rồi tự chỉnh sửa.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-2 – AI Chấm sơ bộ bài viết
Gợi ý điểm tham khảo theo tiêu chí và cảnh báo lỗi diễn đạt phổ biến, giáo viên xác nhận/sửa trước khi công bố.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Tóm tắt chủ đề/nhân vật
Tóm tắt ngắn chủ đề và nét chính nhân vật khi học sinh mở tác phẩm, giúp nắm nhanh trước khi phân tích.
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
    { "id": 1, "name": "Nguyen Van A", "role": "student", "class": "12A1", "essayAvg": 7.5 },
    { "id": 2, "name": "Tran Thi B", "role": "teacher", "class": "12A1", "essayAvg": 0 }
  ],
  "genres": [
    { "id": 1, "name": "Truyện ngắn" },
    { "id": 2, "name": "Thơ trữ tình" }
  ],
  "works": [
    { "id": 1, "genreId": 1, "title": "Vợ chồng A Phủ", "author": "Tô Hoài", "content": "...", "theme": "Số phận và khát vọng sống" }
  ],
  "workNodes": [
    { "id": 1, "workId": 1, "type": "character", "label": "Mị", "detail": "Nhân vật chính..." },
    { "id": 2, "workId": 1, "type": "event", "label": "Đêm tình mùa xuân", "detail": "..." }
  ],
  "outlines": [
    { "id": 1, "workId": 1, "title": "Dàn ý: Vẻ đẹp của Mị", "sections": [ { "id": 1, "point": "Gian truân", "evidence": "..." } ] }
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

### Mẫu prompt 1 – Dựng bản đồ tác phẩm/nhân vật
```text
Tôi là SV môn CSE122 đang làm BTL về môn Ngữ văn. Hãy giúp tôi tạo bản đồ nhân vật cho tác phẩm "Vợ chồng A Phủ".
+ Giao diện: sơ đồ SVG tương tác trong trang khám phá tác phẩm
+ Đối tượng: [học sinh THPT xem]
+ Yêu cầu trực quan: nút nhân vật/sự kiện, tooltip chi tiết, đường quan hệ
+ Hãy giải thích logic sau khi sinh để tôi hiểu cách dữ liệu được render.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống VănFlow, gồm các entity users, genres, works, workNodes, outlines, writingTasks, essaySubmissions, quizResults, mỗi entity 5–8 bản ghi mẫu theo môn Ngữ văn THPT, có id, timestamps, và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước làm tính năng lập dàn ý: hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Học sinh** (đọc tác phẩm, lập dàn ý, viết bài, quiz). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giáo viên** (dựng tác phẩm/bản đồ, dàn ý, giao & chấm bài). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-vanflow-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS bản đồ SVG, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-work-view.mp4
SV2-01-teacher-work-manage.mp4
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): bản đồ tác phẩm/nhân vật, lập dàn ý từng bước, quiz ôn tập.
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