# BTL-34 – ArtCanvas – Hệ thống hỗ trợ giảng dạy và học tập môn Mỹ thuật

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục đại học / Giáo dục nghệ thuật – Mỹ thuật / Hội họa (bố cục, màu sắc, phối cảnh)**

## 2. Tóm tắt sản phẩm

**ArtCanvas – Hệ thống hỗ trợ giảng dạy và học tập môn Mỹ thuật** giúp **giáo viên mỹ thuật** dựng bài giảng lý thuyết (bố cục, màu sắc, phối cảnh), giao đề vẽ và chấm điểm tác phẩm, đồng thời giúp **học sinh** vẽ trực tuyến trên canvas, lưu tác phẩm vào gallery và nhận phản hồi về bố cục, màu sắc. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Mỹ thuật phát triển tư duy thị giác và thẩm mỹ nhưng khó dạy trong môi trường số. Học sinh ít có công cụ thực hành vẽ giữa các tiết, tác phẩm thường phân tán ở nhiều nơi; giáo viên khó chấm điểm và phản hồi chi tiết về bố cục – màu sắc cho đông tác phẩm, còn người mới học khó tự nhận ra lỗi để sửa.

## 4. Phát biểu vấn đề

- **P1.** Học sinh thiếu kênh thực hành vẽ (bố cục, phối cảnh, tô màu) giữa các buổi học.
- **P2.** Gallery tác phẩm nằm rải rác, khó trưng bày, chia sẻ và so sánh.
- **P3.** Giáo viên khó chấm điểm và phản hồi chi tiết về bố cục – màu sắc cho đông tác phẩm.
- **P4.** Học sinh mới không tự nhận ra lỗi bố cục, phối màu để sửa, thiếu hướng dẫn cải thiện kỹ năng.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Mỹ thuật thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò với ít nhất 3 màn hình/role.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, đề vẽ, tác phẩm, gallery, chấm điểm).
- **O4.** Sử dụng JavaScript/DOM cho canvas vẽ trực tuyến (bút, tẩy, màu, độ dày), lưu ảnh PNG, lọc gallery và kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan (mục 11) và các ý tưởng AI tùy chọn (mục 12).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + yêu cầu hợp nhất.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa mỹ thuật, gallery tác phẩm công khai |
| Học sinh | Vẽ trên canvas, lưu tác phẩm vào gallery, nộp bài, nhận chấm điểm & phản hồi |
| Giáo viên | Xây bài giảng lý thuyết, giao đề vẽ, chấm & nhận xét tác phẩm |
| Quản trị viên | Quản lý tài khoản, thư viện tài liệu, cấu hình khóa học |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (vẽ, lưu gallery, giao đề, chấm điểm)
↓
Xem trạng thái / dữ liệu / phản hồi (gallery, điểm, nhận xét)
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
| Học sinh | Vẽ và lưu tác phẩm | Vẽ trên canvas trực tuyến với bút, tẩy, màu | Màn hình canvas vẽ | `student-canvas.html` | C/R/U (hoàn thành, lỗi) | SV1 |
| Học sinh | Quản lý gallery cá nhân | Trưng bày, chia sẻ, xóa tác phẩm | Màn hình gallery tác phẩm | `student-gallery.html` | C/R/U/D (lưu trữ) | SV1 |
| Học sinh | Nộp bài cho đề vẽ | Nộp tác phẩm theo đề, hạn nộp | Màn hình nộp bài | `student-submission.html` | C/R/U (đang chờ, hoàn thành) | SV1 |
| Giáo viên | Dựng bài giảng lý thuyết | Soạn bài về bố cục, màu sắc, phối cảnh | Màn hình quản lý bài giảng | `teacher-theory-manage.html` | C/R/U/D (lưu trữ) | SV2 |
| Giáo viên | Giao đề vẽ và tiêu chí | Tạo đề vẽ, hạn nộp, tiêu chí chấm | Màn hình giao đề vẽ | `teacher-assignment.html` | C/R/U/D (vô hiệu hóa) | SV2 |
| Giáo viên | Chấm điểm tác phẩm | Chấm điểm, nhận xét chi tiết | Màn hình chấm tác phẩm | `teacher-grading.html` | R/U (đang chờ, hoàn thành) | SV2 |
| Quản trị viên | Quản lý tài khoản, lớp | Tạo/sửa/xóa tài khoản, gán lớp | Màn hình quản lý người dùng | `admin-user-management.html` | C/R/U/D (lưu trữ) | SV3 |
| Quản trị viên | Cấu hình thể loại, nét bút | Cấu hình thể loại, bộ màu, tài liệu | Màn hình cấu hình thư viện | `admin-catalog-config.html` | R/U (vô hiệu hóa) | SV3 |

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
| 1 | `visitor-art-overview.html` | Art Overview | R | Xem giới thiệu khóa học mỹ thuật. |
| 2 | `visitor-gallery-preview.html` | Gallery Preview | R | Xem thử một tác phẩm trưng bày công khai. |
| 3 | `visitor-art-feedback.html` | Art Feedback | C/R | Góp ý chủ đề/chuyên đề cần dạy. |

### Học sinh
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ, điểm tác phẩm, đề vẽ mới. |
| 5 | `student-canvas.html` | Canvas | C/R/U | Vẽ trực tuyến với bút, tẩy, màu, độ dày; xuất PNG. |
| 6 | `student-gallery.html` | Gallery | C/R/U/D | Quản lý tác phẩm cá nhân, trưng bày và chia sẻ. |
| 7 | `student-submission.html` | Submission | C/R/U | Nộp tác phẩm cho đề vẽ của giáo viên. |

### Giáo viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 8 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, đề vẽ, tác phẩm chờ chấm. |
| 9 | `teacher-theory-manage.html` | Theory Manage | C/R/U/D | Xây bài giảng lý thuyết mỹ thuật. |
| 10 | `teacher-assignment.html` | Assignment | C/R/U/D | Giao đề vẽ, hạn nộp, tiêu chí chấm điểm. |
| 11 | `teacher-grading.html` | Grading | R/U | Chấm điểm, nhận xét chi tiết tác phẩm. |
| 12 | `teacher-class-analysis.html` | Class Analysis | R | Xem báo cáo thành tích chung của lớp. |

### Quản trị viên
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 13 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống. |
| 14 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản giáo viên, học sinh, lớp. |
| 15 | `admin-catalog-config.html` | Catalog Config | R/U | Cấu hình thể loại, nét bút, tài liệu thư viện. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa (canvas vẽ, lưu PNG, lọc gallery); kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tài khoản giáo viên, học sinh, quản trị. |
| `genres` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Thể loại (tĩnh vật, phong cảnh, chân dung...). |
| `lessons` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Bài giảng lý thuyết mỹ thuật. |
| `assignments` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Đề vẽ, tiêu chí chấm, hạn nộp. |
| `artworks` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Tác phẩm + dữ liệu canvas PNG. |
| `reviews` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Điểm và nhận xét của giáo viên. |
| `brushPresets` | ✓ | ✓ | ✓ | ✓/Lưu trữ | Cấu hình nét bút/màu trên canvas. |
| `db.json` | — | ✓ | — | — | File mock API chứa các entity trên (JSON Server). |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Mỹ thuật.

Liệt kê tối thiểu **3 cách truyền đạt** mà nhóm sẽ thực hiện, mỗi cách gắn với một màn hình:

### Cách 1 – Canvas vẽ trực tuyến với lớp hướng dẫn bố cục (overlay quy tắc)
- **Màn hình áp dụng:** `student-canvas.html`.
- Vì sao giúp hiểu hơn: học sinh bật lớp lưới quy tắc một phần ba hoặc đường phối cảnh trên canvas để vẽ đúng bố cục, biến lý thuyết bố cục thành thao tác trực tiếp và dễ kiểm chứng.

### Cách 2 – Gallery tác phẩm có phản hồi bố cục/màu sắc (hình ảnh tương tác)
- **Màn hình áp dụng:** `student-gallery.html` và `teacher-grading.html`.
- Vì sao giúp hiểu hơn: mỗi tác phẩm trong gallery đi kèm nhận xét bố cục – màu sắc của giáo viên, cho phép so sánh tác phẩm với nhau, giúp học sinh hiểu tiêu chí đánh giá và tự đối chiếu.

### Cách 3 – Mô phỏng phối cảnh từng bước (hoạt ảnh bố cục)
- **Màn hình áp dụng:** `student-canvas.html` (chế độ bài học mẫu).
- Vì sao giúp hiểu hơn: hệ thống chiếu từng bước dựng khối phối cảnh một điểm tụ, vẽ nét phụ rồi chồng lớp màu, giúp người mới nắm trình tự dựng hình trực quan thay vì học lý thuyết trừu tượng.

### Cách 4 – Thẻ flashcard lý thuyết mỹ thuật (màu, bố cục, thuật ngữ)
- **Màn hình áp dụng:** `student-dashboard.html` (mục ôn nhanh).
- Vì sao giúp hiểu hơn: học sinh lật thẻ nhớ khái niệm (phối màu, điểm nhấn, tỉ lệ vàng...) và tự kiểm tra, củng cố từ vựng và nguyên tắc mỹ thuật.

### Cách 5 – Trắc nghiệm nhanh về màu sắc & bố cục kèm giải thích
- **Màn hình áp dụng:** `student-dashboard.html` (bài đố nhanh).
- Vì sao giúp hiểu hơn: học sinh làm đố nhanh và xem lời giải thích vì sao một bố cục/màu sắc đạt — biến phản hồi thành bài học ngắn, dễ nhớ.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Đánh giá bố cục & màu sắc (Composition Analyzer)
Phân tích tác phẩm đã vẽ về quy tắc một phần ba, điểm nhấn, cân đối, hòa sắc màu. Cách mô phỏng: JSON giả lập + JS đọc pixel canvas / API LLM tùy chọn.

### AI-2 – AI Phản hồi tác phẩm (Art Critique)
Đưa nhận xét theo tiêu chí (bố cục, màu sắc, kỹ thuật, cảm xúc) và gợi ý cải thiện. Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Gợi ý đề tài (Assignment Advisor)
Gợi ý đề tài vẽ phù hợp trình độ và mục tiêu học của học sinh. Cách mô phỏng: JSON giả lập + JS theo quy tắc / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity chính (mock API – JSON Server / MockAPI / LocalStorage): `users`, `genres`, `lessons`, `assignments`, `artworks`, `reviews`, `brushPresets`. File `db.json` gợi ý chứa bản ghi mẫu theo môn: `genres` (Tĩnh vật, Phong cảnh, Chân dung), `lessons` (bài về bố cục – màu sắc – phối cảnh), `assignments` (đề vẽ kèm tiêu chí), `artworks` (tác phẩm PNG mẫu), `brushPresets` (bộ màu, độ dày nét). Không bắt buộc backend thật; trọng tâm là trải nghiệm frontend.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng bài giảng bố cục có canvas hướng dẫn
```text
Tôi là SV môn CSE122 đang làm BTL về "Hệ thống hỗ trợ giảng dạy và học tập môn Mỹ thuật – ArtCanvas". Hãy giúp tôi soạn bài giảng về quy tắc một phần ba và điểm nhấn cho học sinh trung cấp.
+ Giao diện: student-canvas.html, xem của học sinh.
+ Yêu cầu trực quan: vẽ overlay lưới một phần ba, điểm mạnh, đường phối cảnh trên canvas; kèm video/phân tích mẫu.
+ Hãy giải thích logic vẽ overlay và đọc tọa độ sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json cho ArtCanvas
```text
Tạo file db.json (JSON Server) cho hệ thống ArtCanvas, gồm các entity: users, genres, lessons, assignments, artworks, reviews, brushPresets; mỗi entity 5–8 bản ghi mẫu theo môn Mỹ thuật, có id, timestamps, và trường phù hợp nghiệp vụ (thể loại, tiêu chí chấm, đường dẫn PNG, điểm bố cục). Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước dựng canvas vẽ trực tuyến (bút, tẩy, màu, độ dày) trong student-canvas.html và lưu tác phẩm PNG, hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: Khách + Học sinh. Trách nhiệm chéo: phần giao diện dùng chung, responsive.
### SV2
Phụ trách: Giáo viên. Trách nhiệm chéo: JavaScript / dữ liệu / canvas / mock API; review PR.
### SV3
Phụ trách: Quản trị viên + tích hợp bố cục, điều hướng, dashboard. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-artcanvas-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS tương tác (canvas vẽ + lưu PNG), TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
├── js/ (main.js, api.js, canvas.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): canvas vẽ có overlay bố cục, gallery phản hồi bố cục/màu sắc, mô phỏng phối cảnh từng bước.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; hiệu ứng cọ/undo-redo; hoạt ảnh vi mô; PWA.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu; JSON/mock API; sáng tạo cách truyền đạt kiến thức (canvas vẽ, overlay bố cục); Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.