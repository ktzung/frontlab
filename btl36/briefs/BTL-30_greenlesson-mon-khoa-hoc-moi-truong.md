# BTL-30 – GreenLesson – Hệ thống hỗ trợ giảng dạy và học tập môn Khoa học môi trường

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

Giáo dục khoa học – ứng dụng, đại học / Giảng dạy môn Khoa học môi trường (ô nhiễm, sinh thái, tái chế, biến đổi khí hậu).

## 2. Tóm tắt sản phẩm

**GreenLesson – Hệ thống hỗ trợ giảng dạy và học tập môn Khoa học môi trường** giúp **giảng viên** dựng học liệu trực quan (bài giảng ô nhiễm, trạm cảm biến, bài tập nghiên cứu tình huống, hướng dẫn tái chế) và giúp **sinh viên** tiếp thu dễ hiểu, sinh động (dashboard ô nhiễm, biểu đồ xu hướng, cẩm nang tái chế, bài tập có lời giải từng bước). Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Khoa học môi trường là môn nền tảng cho sinh viên ngành môi trường, tài nguyên, nông nghiệp và quản lý. Hiện nay giảng dạy chủ yếu qua giáo trình và số liệu in trên giấy; sinh viên khó phân tích chuỗi số liệu chỉ số ô nhiễm (AQI, PM2.5, COD, BOD), hiểu tác động sinh thái và đề xuất giải pháp giảm thiểu/tái chế. Dữ liệu cảm biến môi trường rời rạc, chưa có kênh trực quan để theo dõi và phân tích nhằm hỗ trợ học tập và ra quyết định. Có nhu cầu một dashboard ô nhiễm và biểu đồ xu hướng.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung và phân tích chuỗi số liệu chỉ số ô nhiễm theo thời gian.
- **P2.** Tra cứu ngưỡng an toàn, quy chuẩn môi trường và giải pháp tái chế rải rác, thiếu kênh học trực quan.
- **P3.** Giảng viên mất công chấm bài nghiên cứu tình huống ô nhiễm, khó phản hồi sớm.
- **P4.** Sinh viên không có công cụ theo dõi dashboard cảm biến và kiểm chứng giải pháp giảm ô nhiễm/tái chế.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy – học Khoa học môi trường thành một sản phẩm frontend có hành trình người dùng rõ ràng, giao cho nhóm 3 sinh viên.
- **O2.** Thiết kế đầy đủ giao diện cho từng vai trò, bám sát bảng kiểm kê màn hình.
- **O3.** Thể hiện CRUD hoặc trạng thái nghiệp vụ phù hợp (bài giảng, trạm cảm biến, số liệu, bài tập, bài nộp, đánh giá).
- **O4.** Dùng JavaScript/DOM cho dashboard cảm biến, biểu đồ ô nhiễm, tìm kiếm, lọc, kiểm tra hợp lệ, thẻ, trạng thái.
- **O5.** Xây dựng dữ liệu qua mock API (JSON Server / LocalStorage / MockAPI) kèm `db.json`.
- **O6.** Thiết kế tối thiểu 3 cách truyền đạt kiến thức trực quan cho môn khoa học môi trường.
- **O7.** Tổ chức nhóm bằng Trello/Jira/Notion và Git/GitHub theo nhánh, có PR, review và video OBS giảng giải.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu môn, bản tin chỉ số ô nhiễm, cẩm nang tái chế |
| Sinh viên | Học bài, xem dashboard cảm biến, làm bài tập, đề xuất giải pháp, xem tiến độ |
| Giảng viên | Dựng bài giảng, quản lý trạm cảm biến/bài tập/giải pháp, đánh giá và phản hồi |
| Quản trị viên | Quản lý tài khoản, cấu hình, duyệt trạm/hướng dẫn tái chế, báo cáo |

## 7. Hành trình người dùng tổng quát

```text
Khám phá / đăng nhập
↓
Thực hiện nghiệp vụ chính theo vai trò (theo dõi dashboard, làm bài, dựng học liệu)
↓
Xem trạng thái / dữ liệu / phản hồi (chỉ số ô nhiễm, điểm, phản hồi bài tập)
↓
(Ùy chọn) AI hỗ trợ phân tích, gợi ý hoặc tạo nội dung (phân tích chỉ số, gợi ý tái chế)
↓
Người dùng Chấp nhận / Sửa / Từ chối / Lưu
↓
Vai trò vận hành duyệt / xử lý (giảng viên đánh giá, admin duyệt trạm)
↓
Bảng điều khiển / báo cáo / hoàn tất
```

## NGUYÊN TẮC PHẠM VI – BẮT BUỘC ÁP DỤNG

> **"3 giao diện/vai trò" là ngưỡng tối thiểu chống làm ít, KHÔNG phải mục tiêu.** Phải xây dựng **toàn bộ màn hình cần thiết** để nghiệp vụ chạy từ đầu đến cuối. Tiêu chí: **ĐỘ ĐẦY ĐỦ CỦA NGHIỆP VỤ > SỐ LƯỢNG GIAO DIỆN.**

### Bảng kiểm kê màn hình bắt buộc trước khi viết mã
| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD/Trạng thái | Người phụ trách |
|---|---|---|---|---|---|---|
| Khách | Giới thiệu môn và bản tin ô nhiễm | Xem khóa học, xem chỉ số công khai | Trang chủ + bản tin ô nhiễm | `index.html`, `visitor-air-quality-news.html` | R | SV1 |
| Sinh viên | Theo dõi và phân tích chỉ số ô nhiễm | Xem dashboard, biểu đồ xu hướng | Dashboard cảm biến | `student-sensor-dashboard.html` | C/R/U | SV1 |
| Sinh viên | Làm bài tập nghiên cứu | Giải bài, nộp bài, xem điểm | Làm bài tập | `student-exercise-do.html` | C/R/U | SV1 |
| Giảng viên | Quản lý trạm cảm biến và bài giảng | Cấu hình trạm, dựng bài giảng | Quản lý trạm + bài giảng | `teacher-station-manage.html`, `teacher-lesson-manage.html` | C/R/U/D | SV2 |
| Giảng viên | Đánh giá bài, phản hồi | Chấm bài nộp, trả điểm | Chấm – phản hồi | `teacher-grading.html` | C/R/U | SV2 |
| Quản trị viên | Quản trị tài khoản, duyệt tái chế | Quản lý người dùng, duyệt hướng dẫn | Admin dashboard + người dùng + tái chế | `admin-dashboard.html`, `admin-user-management.html`, `admin-recycle-management.html` | C/R/U/D | SV3 |

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

### Khách  → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 1 | `visitor-course-overview.html` | Course Overview | R | Giới thiệu môn Khoa học môi trường, lộ trình học. |
| 2 | `visitor-air-quality-news.html` | Air Quality News | R | Bản tin và chỉ số ô nhiễm công khai. |
| 3 | `visitor-recycle-guide.html` | Recycle Guide | R | Cẩm nang tái chế công khai. |

### Học sinh / Sinh viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 4 | `student-dashboard.html` | Dashboard | R | Theo dõi tiến độ, điểm, cảnh báo ô nhiễm. |
| 5 | `student-lesson-view.html` | Lesson View | R | Học bài giảng ô nhiễm, sinh thái, biến đổi khí hậu. |
| 6 | `student-sensor-dashboard.html` | Sensor Dashboard | C/R/U | Dashboard cảm biến ô nhiễm + biểu đồ xu hướng (điểm nhấn). |
| 7 | `student-exercise-do.html` | Exercise Do | C/R/U | Làm bài tập nghiên cứu tình huống, nộp bài, xem lời giải. |
| 8 | `student-recycle-sim.html` | Recycle Sim | C/R/U | Mô phỏng sắp xếp/ái chế chất thải theo từng bước. |

### Giáo viên / Giảng viên → 5 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 9 | `teacher-dashboard.html` | Dashboard | R | Tổng quan lớp, bài tập, trạm cảm biến. |
| 10 | `teacher-lesson-manage.html` | Lesson Manage | C/R/U/D | Dựng bài giảng quy chuẩn và ô nhiễm. |
| 11 | `teacher-station-manage.html` | Station Manage | C/R/U/D | Cấu hình trạm cảm biến, số liệu giả lập. |
| 12 | `teacher-exercise-build.html` | Exercise Build | C/R/U | Tạo bài tập nghiên cứu, đáp án, lời giải từng bước. |
| 13 | `teacher-grading.html` | Grading | C/R/U | Đánh giá bài nộp, phản hồi và trả điểm sinh viên. |

### Quản trị viên → 3 màn hình
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---:|---|---|---|---|
| 14 | `admin-dashboard.html` | Dashboard | R | Quản trị hệ thống, thống kê. |
| 15 | `admin-user-management.html` | User Management | C/R/U/D | Quản lý tài khoản người dùng. |
| 16 | `admin-recycle-management.html` | Recycle Management | C/R/U/D | Duyệt và quản lý hướng dẫn tái chế. |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

Cá thể hóa môn môi trường: `student-sensor-dashboard.html` hiển thị thẻ chỉ số AQI/PM2.5/COD của các trạm, biểu đồ xu hướng theo thời gian vẽ bằng Canvas, dải màu phân hạng (tốt/kém/nguy hiểm) kèm cờ cảnh báo ngưỡng; `student-recycle-sim.html` mô phỏng sắp xếp chất thải vào thùng phân loại theo từng bước; `visitor-air-quality-news.html` hiển thị bản tin và bảng ngưỡng an toàn theo quy chuẩn.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---|---:|---:|---:|---|
| `users` | ✓ | ✓ | ✓ | ✓/Archive | Tài khoản 4 vai trò. |
| `lessons` | ✓ | ✓ | ✓ | ✓/Archive | Bài giảng ô nhiễm, sinh thái, biến đổi khí hậu. |
| `sensors` | ✓ | ✓ | ✓ | ✓/Archive | Trạm cảm biến và thông số kỹ thuật. |
| `readings` | ✓ | ✓ | ✓ | ✓/Archive | Số liệu đo theo thời gian (AQI, PM2.5, COD). |
| `recycleTips` | ✓ | ✓ | ✓ | ✓/Archive | Hướng dẫn giải pháp tái chế. |
| `exercises` | ✓ | ✓ | ✓ | ✓/Archive | Bài tập nghiên cứu tình huống ô nhiễm. |
| `submissions` | ✓ | ✓ | ✓ | ✓/Archive | Bài nộp, điểm, phản hồi. |

Thực thể kèm theo `db.json` cho biết cấu trúc: `users {id, role, name, email}`, `sensors {id, name, location, params}`, `readings {id, sensorId, time, aqi, pm25, cod}`, `recycleTips {id, wasteType, process, feasibility}`, `submissions {id, userId, exerciseId, solution, score, status}`.

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

Danh sách 4 cách truyền đạt (tối thiểu 3):

- **1. Dashboard ô nhiễm với biểu đồ xu hướng Canvas** (`student-sensor-dashboard.html`): thẻ chỉ số AQI/PM2.5/COD theo trạm, biểu đồ diễn biến theo giờ/ngày, dải màu phân hạng nguy hiểm. Giúp sinh viên **đọc và so sánh** chuỗi số liệu ô nhiễm trực quan.
- **2. Mô phỏng phân loại tái chế theo từng bước** (`student-recycle-sim.html`): kéo từng loại chất thải vào thùng đúng (hữu cơ, tái chế, nguy hại), sai sẽ có phản hồi giải thích. Giúp ghi nhớ **quy tắc phân loại** một cách chủ động.
- **3. Bản tin ô nhiễm tương tác có tooltip ngưỡng** (`visitor-air-quality-news.html`): di chuột vào chỉ số để xem ngưỡng an toàn, đơn vị, ý nghĩa. Giúp nắm **quy chuẩn/ngưỡng** nhanh chóng.
- **4. Bài tập nghiên cứu tình huống có lời giải từng bước** (`student-exercise-do.html`): bài phân tích tác động được chia bước nhận số liệu → đánh giá → đề xuất giải pháp, có tiến/lùi. Giúp sinh viên rèn **tư duy phân tích** đầy đủ.

---

## 12. (ÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – AI Pollution Analyzer (phân tích chỉ số ô nhiễm)
Từ chuỗi số liệu cảm biến (mô phỏng/chọn trong dashboard) → nhận diện xu hướng, so mức với ngưỡng an toàn và giải thích nguyên nhân có khả năng. Mô phỏng bằng JSON giả lập + JS theo quy tắc ngưỡng (AQI, PM2.5, COD) và thống kê xu hướng; API LLM tùy chọn.

### AI-2 – AI Recycle Solver (gợi ý giải pháp tái chế)
Từ loại rác/chất thải và quy mô → gợi ý cách phân loại, quy trình tái chế và giải pháp giảm thiểu kèm tính khả thi. Mô phỏng bằng JSON giả lập theo bảng quy trình theo loại chất thải.

### AI-3 – AI Impact Assessor (đánh giá tác động)
Từ mô tả hoạt động (nhà máy, đô thị) và các yếu tố môi trường → tổng hợp đánh giá tác động sơ bộ và đề xuất biện pháp giảm thiểu. Mô phỏng bằng JSON giả lập theo ma trận tác động.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Các entity: `users`, `lessons`, `sensors`, `readings`, `recycleTips`, `exercises`, `submissions`. Triển khai bằng JSON cục bộ / `db.json` (JSON Server) / LocalStorage / MockAPI / public API (ví dụ dữ liệu chất lượng không khí) tùy chọn. Không bắt buộc backend thật.

`db.json` gợi ý môn môi trường: mảng `readings` mẫu 6–8 bản ghi như `{id:1, sensorId:1, time:"2025-03-01T08:00", aqi:85, pm25:35, cod:28}`; mảng `sensors` mẫu như `{id:1, name:"Trạm Cầu Giấy", location:"Hà Nội", params:["AQI","PM2.5","COD"]}`; mảng `recycleTips` mẫu như `{id:1, wasteType:"Nhựa", process:"Làm sạch → phân loại → tái chế hạt", feasibility:"cao"}`.

---

## 14. GỢI Ý PROMPT CHO SINH VIÊN (dùng AI hiệu quả)

> Mục này khuyến khích sinh viên dùng AI có trách nhiệm như một **công cụ học**, không phải để làm hộ. Trước khi dùng tiếng Việt hãy **nắm logic**; mọi kết quả AI phải kiểm chứng, sửa và giải thích lại được.

### Cách dùng AI hiệu quả
1. Viết prompt rõ ngữ cảnh, vai trò, yêu cầu cụ thể, giới hạn phạm vi.
2. Hai vòng lặp: (a) tạo bản nháp → (b) yêu cầu AI giải thích / gợi ý cải thiện.
3. Luôn kiểm chứng bằng cách chạy thử và giảng giải lại bằng lời của mình.

### Mẫu prompt 1 – Dựng học liệu/bài giảng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Khoa học môi trường (sản phẩm GreenLesson).
Hãy giúp tôi tạo nội dung bài giảng "Chỉ số AQI và cách phân hạng" cho trang student-lesson-view.html,
dành cho sinh viên. Hãy trình bày dạng bảng ngưỡng + dải màu + một ví dụ chuỗi số liệu,
kèm câu hỏi đố nhanh. Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống GreenLesson gồm các entity users, lessons, sensors,
readings, recycleTips, exercises, submissions; mỗi entity 5–8 bản ghi mẫu theo môn Khoa học môi trường
(trạm cảm biến có vị trí, số liệu đo AQI/PM2.5/COD theo giờ, hướng dẫn tái chế theo loại chất thải),
có id, timestamps và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước: tôi muốn dựng biểu đồ xu hướng ô nhiễm
(size có thể là đường/area) bằng JavaScript thuần Canvas cho trang student-sensor-dashboard.html.
Hỏi tôi cần gì, sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: [Khách + Sinh viên]. Trách nhiệm chéo: [dashboard cảm biến, biểu đồ ô nhiễm Canvas, responsive].
### SV2
Phụ trách: [Giáo viên/Giảng viên]. Trách nhiệm chéo: [JavaScript / dữ liệu / logic phân tích chỉ số / mock API; review PR].
### SV3
Phụ trách: [Quản trị viên + tích hợp bố cục, điều hướng, dashboard, quản lý tái chế]. Trách nhiệm chéo: [nhất quán toàn dự án, bao phủ trạng thái, phát hành].

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub
- Repo gợi ý: `cse122-greenlesson-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat: add sensor dashboard with aqi chart`, `feat: compute aqi threshold flags via js`, `fix: validate empty reading form`, `style: improve mobile dashboard grid`, `refactor: split reusable sensor modules`, `docs: update screen list and obs links`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion
Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS biểu đồ ô nhiễm Canvas + dashboard, TASK-05 mock API, TASK-06 (ùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

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
SV1-01-student-sensor-dashboard.mp4
SV2-01-teacher-station-manage.mp4
SV3-01-admin-recycle-management.mp4
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
├── assets/ (images, icons, data, icon-trees)
├── css/ (style.css, responsive.css, dashboard.css)
├── js/ (main.js, api.js, chart.js, sensor-dashboard.js, modules/)
└── db.json  (mock API – JSON Server / MockAPI)
```

## 21. Khai báo công cụ hỗ trợ (AI Usage Disclosure)
Trong `docs/ai-usage-report.md`: công cụ (ChatGPT/Claude/Gemini/Copilot...), prompt chính, phần AI sinh, phần tự chỉnh sửa, lỗi gặp phải, cách kiểm chứng, điều học được, tính năng mock vs thật.

## 22. Phạm vi sản phẩm tối thiểu (MVP)
### BẮT BUỘC PHẢI CÓ
- Đủ vai trò và toàn bộ màn hình theo bảng kiểm kê.
- Navigation xuyên suốt; Responsive; CRUD mô phỏng ý nghĩa; Search/filter/form validation.
- Dữ liệu mock API / JSON.
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): dashboard ô nhiễm biểu đồ Canvas, mô phỏng tái chế từng bước, bản tin tooltip ngưỡng.
- Minh chứng Trello + Git (nhánh/PR) + **video OBS giảng giải cho từng màn hình**.
- Khả năng "làm lại được" khi bị hỏi.
### NÊN CÓ
- Biểu đồ/bảng điều khiển; thông báo nổi cảnh báo ngưỡng; trạng thái rỗng/tải/lỗi; component & token dùng lại; chế độ tối/sáng; cẩm nang tái chế.
### CÓ THÌ TỐT (không bắt buộc)
- Ý tưởng AI nâng cao (mục 12); LLM API thật; kết nối public API chất lượng không khí; hoạt ảnh vi mô; PWA; cá nhân hóa.

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
Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (dashboard, biểu đồ ô nhiễm Canvas); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.