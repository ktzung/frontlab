# BTL-10 – GeoAtlas – Hệ thống hỗ trợ giảng dạy và học tập môn Địa lý

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

**Giáo dục trung học phổ thông / Giảng dạy Địa lý**

## 2. Tóm tắt sản phẩm

**GeoAtlas – Hệ thống hỗ trợ giảng dạy và học tập môn Địa lý** giúp **giáo viên** dựng học liệu trực quan (bản đồ tương tác, lớp chồng khí hậu/địa hình, gallery tư liệu) và giúp **học sinh** tiếp thu về địa hình, khí hậu, kinh tế - xã hội một cách trực quan, sinh động qua bản đồ tương tác và quiz ôn tập. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Địa lý THPT yêu cầu đọc hiểu bản đồ, nắm đặc điểm địa hình, khí hậu, các vùng kinh tế. Bản đồ giấy/slide tĩnh khó chuyển tải sự phân bố và chồng ghép nhiều lớp thông tin. Học sinh khó hình dung quan hệ giữa địa hình - khí hậu - kinh tế. Giáo viên cần bản đồ tương tác và lớp chồng thông tin để dạy trực quan và kiểm tra nhanh.

## 4. Phát biểu vấn đề

- **P1.** Bản đồ tĩnh khó thể hiện sự phân bố và quan hệ giữa các lớp thông tin (địa hình, khí hậu, dân cư).
- **P2.** Học sinh khó nắm đặc điểm từng vùng và ý nghĩa của vị trí địa lý khi chỉ đọc slide.
- **P3.** Giáo viên tốn công dựng bản đồ minh họa, khó đồng bộ học liệu giữa các lớp.
- **P4.** Học sinh thiếu kênh tự ôn về bản đồ/vùng bằng câu hỏi trắc nghiệm có hình ảnh.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy-học Địa lý thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò (Khách 3, Học sinh 5, Giáo viên 5, Admin 3).
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: vùng, địa danh, lớp bản đồ, bài học, quiz, nộp bài.
- **O4.** Dùng JavaScript/DOM cho bản đồ tương tác, bật/tắt lớp chồng, tooltip, tìm kiếm, lọc, validation.
- **O5.** Xây dựng dữ liệu qua mock API / LocalStorage / MockAPI.
- **O6.** Đề xuất tối thiểu 3 ý tưởng AI mô phỏng ở Frontend (tùy chọn nâng cao, không bắt buộc).
- **O7.** Tổ chức làm việc nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh + PR.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem giới thiệu khóa học, xem bản đồ mẫu công khai |
| Học sinh | Khám phá bản đồ tương tác, xem lớp chồng, làm quiz, xem tiến độ |
| Giáo viên | Dựng vùng, địa danh, lớp bản đồ, bài học; giao bài; chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, vùng/lớp bản đồ, cấu hình, báo cáo |

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
| Khách | Giới thiệu khóa Địa lý | Xem tổng quan chương trình, vùng nổi bật | Trang chủ Khách | `index.html` | R | SV1 |
| Khách | Xem thử nội dung học liệu | Xem thử một bản đồ mẫu công khai | Preview bản đồ mẫu | `visitor-preview.html` | R | SV1 |
| Khách | Đăng ký tài khoản | Tạo tài khoản học sinh/giáo viên | Đăng ký | `register.html` | C | SV1 |
| Học sinh | Nắm tiến độ học tập | Xem vùng đã học, điểm quiz | Dashboard | `student-dashboard.html` | R | SV1 |
| Học sinh | Khám phá bản đồ tương tác | Duyệt bản đồ, click địa danh xem chi tiết | Bản đồ tương tác | `student-map.html` | R | SV1 |
| Học sinh | Xem lớp chồng thông tin | Bật/tắt lớp khí hậu/địa hình/dân cư | Lớp chồng | `student-layers.html` | R | SV1 |
| Học sinh | Ôn tập địa lý | Làm quiz trắc nghiệm có hình, xem giải thích | Quiz ôn tập | `student-quiz.html` | C/R | SV1 |
| Học sinh | Nộp bài & xem phản hồi | Làm bài tập, nộp, xem điểm | Nộp bài | `student-submission.html` | C/R | SV1 |
| Giáo viên | Tổng quan lớp | Xem danh sách HS, điểm, hoạt động | Dashboard GV | `teacher-dashboard.html` | R | SV2 |
| Giáo viên | Dựng vùng & địa danh | Nhập vùng, địa danh, đặc điểm | Quản lý vùng/địa danh | `teacher-region-manage.html` | C/R/U/D | SV2 |
| Giáo viên | Dựng bản đồ & lớp chồng | Xây bản đồ, định nghĩa lớp khí hậu/địa hình | Dựng bản đồ/lớp | `teacher-map-build.html` | C/R/U/D | SV2 |
| Giáo viên | Dựng bài học | Soạn bài học gắn bản đồ, địa danh | Soạn bài học | `teacher-lesson-build.html` | C/R/U/D | SV2 |
| Giáo viên | Giao & chấm bài | Giao bài, hạn nộp, chấm, phản hồi | Giao & chấm bài | `teacher-assignment.html` | C/R/U | SV2 |
| Quản trị viên | Quản trị hệ thống | Xem người dùng, nội dung, hoạt động | Dashboard Admin | `admin-dashboard.html` | R | SV3 |
| Quản trị viên | Quản lý tài khoản | Tạo/vô hiệu hóa tài khoản, gán vai trò, lớp | Quản lý tài khoản | `admin-user-management.html` | C/R/U/D | SV3 |
| Quản trị viên | Cấu hình & vùng | Quản lý vùng, loại lớp bản đồ | Cấu hình | `admin-config.html` | C/R/U | SV3 |

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
| 1 | `index.html` | Trang chủ Khách | R | Giới thiệu khóa Địa lý, vùng nổi bật. |
| 2 | `visitor-preview.html` | Preview bản đồ mẫu | R | Xem thử bản đồ mẫu công khai. |
| 3 | `register.html` | Đăng ký | C | Tạo tài khoản học sinh/giáo viên. |

### Học sinh → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi vùng đã học, điểm quiz. |
| 5 | `student-map.html` | Bản đồ tương tác | R | Duyệt bản đồ, click địa danh xem chi tiết. |
| 6 | `student-layers.html` | Lớp chồng | R | Bật/tắt lớp khí hậu/địa hình/dân cư. |
| 7 | `student-quiz.html` | Quiz ôn tập | C/R | Trắc nghiệm có hình, xem giải thích. |
| 8 | `student-submission.html` | Nộp bài | C/R | Làm bài tập, nộp, xem điểm/phản hồi. |

### Giáo viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard GV | R | Tổng quan lớp, điểm, hoạt động. |
| 10 | `teacher-region-manage.html` | Quản lý vùng/địa danh | C/R/U/D | Nhập vùng, địa danh, đặc điểm. |
| 11 | `teacher-map-build.html` | Dựng bản đồ/lớp | C/R/U/D | Xây bản đồ, định nghĩa lớp chồng. |
| 12 | `teacher-lesson-build.html` | Soạn bài học | C/R/U/D | Soạn bài gắn bản đồ, địa danh. |
| 13 | `teacher-assignment.html` | Giao & chấm bài | C/R/U | Giao bài, hạn nộp, chấm, phản hồi. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard Admin | R | Người dùng, nội dung, hoạt động hệ thống. |
| 15 | `admin-user-management.html` | Quản lý tài khoản | C/R/U/D | Quản lý tài khoản, vai trò, lớp. |
| 16 | `admin-config.html` | Cấu hình | C/R/U | Quản lý vùng, loại lớp bản đồ. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Thêm lớp, vai trò, điểm trung bình. |
| `regions` | ✓ | ✓ | ✓ | ✓/Archive | Vùng: Đồng bằng sông Hồng, Tây Nguyên... |
| `places` | ✓ | ✓ | ✓ | ✓/Archive | Địa danh: tên, tọa độ, đặc điểm, ảnh. |
| `mapLayers` | ✓ | ✓ | ✓ | ✓/Archive | Lớp: khí hậu, địa hình, dân cư, kinh tế. |
| `layerData` | ✓ | ✓ | ✓ | ✓/Archive | Dữ liệu điểm/vùng thuộc lớp chồng. |
| `lessons` | ✓ | ✓ | ✓ | ✓/Archive | Bài học gắn bản đồ, địa danh, lớp chồng. |
| `quizQuestions` | ✓ | ✓ | ✓ | ✓/Archive | Câu hỏi trắc nghiệm địa lý kèm ảnh. |
| `quizResults` | ✓ | ✓ | — | ✓/Archive | Kết quả làm quiz. |
| `assignments` | ✓ | ✓ | ✓ | ✓/Archive | Bài giao + hạn nộp. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, điểm, phản hồi GV. |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng nhất** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn Địa lý.

### Cách truyền đạt 1 – Bản đồ tương tác
- **Màn hình áp dụng:** `student-map.html`.
- **Mô tả:** Bản đồ (SVG/Canvas giả lập) với các địa danh có thể click/phóng to, hiện tooltip đặc điểm, lọc theo vùng.
- **Vì sao giúp người học hiểu hơn:** Thấy vị trí và sự phân bố thực tế thay vì đọc số liệu rời, dễ ghi nhớ lãnh thổ và vùng.

### Cách truyền đạt 2 – Lớp chồng khí hậu/địa hình
- **Màn hình áp dụng:** `student-layers.html`.
- **Mô tả:** Bật/tắt các lớp chồng (khí hậu, địa hình, dân cư, kinh tế) lên cùng một bản đồ để so sánh.
- **Vì sao giúp người học hiểu hơn:** Chồng ghép trực quan cho thấy quan hệ giữa địa hình - khí hậu - kinh tế, giúp phân tích tổng hợp.

### Cách truyền đạt 3 – Quiz ôn tập có hình ảnh
- **Màn hình áp dụng:** `student-quiz.html`.
- **Mô tả:** Trắc nghiệm địa lý kèm ảnh bản đồ/địa hình, mỗi câu có giải thích và liên hệ vùng.
- **Vì sao giúp người học hiểu hơn:** Nhận diện bằng hình ảnh + sửa sai ngay giúp củng cố đặc điểm từng vùng, tự đánh giá tiến bộ.

### Cách truyền đạt 4 – Bài học gắn bản đồ trực quan
- **Màn hình áp dụng:** `student-map.html` (phần bài học liên kết).
- **Mô tả:** Mỗi bài học chèn sẵn bản đồ và lớp chồng liên quan, văn bản đặt cạnh hình tương tác.
- **Vì sao giúp người học hiểu hơn:** Kiến thức gắn với hình trực quan ngay trong lúc đọc, giảm tụt hứng và tăng tiếp thu.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Gợi ý lớp bản đồ liên quan
Khi đang xem một vùng/địa danh, gợi ý các lớp chồng (khí hậu, dân cư) nên bật để phân tích.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-2 – AI Tóm tắt đặc điểm vùng
Tóm tắt ngắn đặc điểm tự nhiên - kinh tế - xã hội của một vùng khi học sinh mở chi tiết.
- **Cách mô phỏng:** JSON giả lập / JS theo quy tắc / API LLM tùy chọn.

### AI-3 – AI Sinh câu hỏi ôn tập
Từ một vùng/lớp, sinh câu hỏi trắc nghiệm gợi ý để giáo viên duyệt trước khi thêm vào quiz.
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
    { "id": 1, "name": "Nguyen Van A", "role": "student", "class": "12A3", "avgScore": 7.8 },
    { "id": 2, "name": "Tran Thi B", "role": "teacher", "class": "12A3", "avgScore": 0 }
  ],
  "regions": [
    { "id": 1, "name": "Tây Nguyên", "desc": "Cao nguyên, khí hậu mát, cà phê..." },
    { "id": 2, "name": "ĐBSH", "desc": "Đồng bằng màu mỡ, thâm canh lúa..." }
  ],
  "places": [
    { "id": 1, "regionId": 1, "name": "Đà Lạt", "lat": 11.94, "lng": 108.44, "desc": "Khí hậu ôn hòa...", "image": "dalat.jpg" }
  ],
  "mapLayers": [
    { "id": 1, "code": "climate", "name": "Khí hậu", "color": "#ff9800" },
    { "id": 2, "code": "terrain", "name": "Địa hình", "color": "#8bc34a" }
  ],
  "layerData": [
    { "id": 1, "layerId": 1, "placeId": 1, "value": "ôn đới - cận nhiệt" }
  ],
  "lessons": [
    { "id": 1, "title": "Vùng Tây Nguyên", "regionId": 1, "content": "...", "layerIds": [1,2] }
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

### Mẫu prompt 1 – Dựng bản đồ tương tác & lớp chồng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Địa lý. Hãy giúp tôi thiết kế bản đồ tương tác với lớp chồng khí hậu/địa hình cho vùng Tây Nguyên.
+ Giao diện: trang bản đồ tương tác của học sinh
+ Đối tượng: [học sinh THPT xem]
+ Yêu cầu trực quan: bản đồ SVG, click địa danh mở chi tiết, nút bật/tắt lớp chồng
+ Hãy giải thích logic sau khi sinh để tôi hiểu cách dữ liệu được render.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống GeoAtlas, gồm các entity users, regions, places, mapLayers, layerData, lessons, quizQuestions, quizResults, assignments, submissions, mỗi entity 5–8 bản ghi mẫu theo môn Địa lý THPT, có id, timestamps, và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước làm tính năng lớp chồng thông tin: hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: **Khách + Học sinh** (bản đồ tương tác, lớp chồng, quiz, nộp bài). Trách nhiệm chéo: một phần giao diện dùng chung, responsive.
### SV2
Phụ trách: **Giáo viên** (dựng vùng/địa danh, bản đồ/lớp, bài học, giao - chấm bài). Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.
### SV3
Phụ trách: **Quản trị viên + tích hợp bố cục, điều hướng, dashboard**. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-geoatlas-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS bản đồ & lớp chồng, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-map.mp4
SV2-01-teacher-map-build.mp4
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): bản đồ tương tác, lớp chồng thông tin, quiz ôn tập.
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