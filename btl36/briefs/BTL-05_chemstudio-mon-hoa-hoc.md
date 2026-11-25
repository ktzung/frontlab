# BTL-05 – ChemStudio – Hệ thống hỗ trợ giảng dạy và học tập môn Hóa học

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Nhóm thực hiện:** 3 sinh viên  
> **Loại sản phẩm:** Sản phẩm Web Frontend (nguyên mẫu) có nhiều vai trò, CRUD, responsive, tương tác JavaScript; AI là tùy chọn nâng cao  
> **CSDL:** Xây dựng qua **mock API** (JSON Server / MockAPI / LocalStorage)  
> **Nguyên tắc minh chứng:** Mỗi giao diện thực tế đã được duyệt trong bảng kiểm kê màn hình = 1 video OBS giảng giải, trong đó sinh viên phải **giải mã và làm lại được** những gì đã dựng.

---

## 1. Lĩnh vực

Giáo dục đại học / Giảng dạy Hóa học đại cương

## 2. Tóm tắt sản phẩm

**ChemStudio – Hệ thống hỗ trợ giảng dạy và học tập môn Hóa học** giúp **giảng viên** dựng học liệu trực quan và giúp **sinh viên** tiếp thu dễ hiểu, sinh động. Sản phẩm tập trung phát triển **frontend nhiều trang, nhiều vai trò**, dữ liệu qua mock API.

## 3. Ngữ cảnh

Hóa học đại cương là môn nền tảng cho sinh viên khối kỹ thuật, công nghệ, y dược và khoa học. Các khái niệm như cấu tạo nguyên tử, liên kết hóa học, cân bằng phương trình, tốc độ phản ứng và bảng tuần hoàn rất trừu tượng với sinh viên. Phòng thí nghiệm hóa chất hạn chế an toàn và chi phí, nên cần mô hình phân tử, minh họa phản ứng và bài tập cân bằng một cách trực quan, an toàn.

## 4. Phát biểu vấn đề

- **P1.** Sinh viên khó hình dung cấu tạo nguyên tử, liên kết hóa học và hình dạng phân tử khi chỉ học trên mô hình tĩnh hoặc bảng.
- **P2.** Việc cân bằng phương trình hóa học và tính toán mol, nồng độ thủ công dễ sai, thiếu công cụ kiểm tra nhanh.
- **P3.** Thí nghiệm hóa chất thực tế hạn chế về an toàn, chi phí và thời gian, sinh viên thiếu cơ hội quan sát phản ứng ảo.
- **P4.** Bài tập và đề thi rải rác, giảng viên khó giao, chấm và theo dõi mức độ hiểu từng chương của sinh viên.

## 5. Mục tiêu

- **O1.** Biến bài toán dạy–học Hóa học thành sản phẩm Frontend có hành trình người dùng rõ ràng.
- **O2.** Cung cấp đầy đủ giao diện cho từng vai trò: Khách, Sinh viên, Giảng viên, Quản trị viên.
- **O3.** Thể hiện CRUD/trạng thái nghiệp vụ: chương, bài giảng, mô hình phân tử, bài tập, đề, nộp bài, chấm điểm.
- **O4.** Dùng JavaScript/DOM để vẽ mô hình phân tử, mô phỏng phản ứng, cân bằng phương trình, tìm kiếm, lọc, kiểm tra hợp lệ.
- **O5.** Xây dựng dữ liệu bằng mock API.
- **O6.** Thiết kế ít nhất 3 cách truyền đạt kiến thức trực quan (mục 11) đặc thù môn Hóa học.
- **O7.** (Tùy chọn) Bổ sung AI hỗ trợ cân bằng phương trình, sinh đề và giải thích phản ứng khi nhóm có hứng thú.

## 6. Các vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Khách | Xem công khai: giới thiệu khóa, bài mẫu, thư viện mô hình phân tử |
| Sinh viên | Học bài, xem mô hình phân tử, cân bằng phương trình, làm bài tập/đề, xem tiến độ |
| Giảng viên | Dựng học liệu, tạo mô hình/mô phỏng, giao bài/đề, chấm & phản hồi |
| Quản trị viên | Quản lý tài khoản, chương, cấu hình và báo cáo |

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
| Khách | Giới thiệu khóa | Xem bài & mẫu phân tử công khai | Trang chủ | `index.html` | R | SV1 |
| Khách | Biết thông tin khóa & đăng ký | Xem danh sách khóa | Trang khóa học | `courses.html` | R/C | SV1 |
| Khách | Xem học liệu mẫu | Duyệt thư viện mô hình phân tử | Thư viện phân tử | `molecule-library.html` | R | SV1 |
| Sinh viên | Học bài trực quan | Xem bài giảng kèm mô hình phân tử | Học bài | `lesson-view.html` | R | SV1 |
| Sinh viên | Cân bằng phương trình | Cân bằng phương trình, kiểm tra hệ số | Cân bằng phương trình | `equation-balancer.html` | R/C/U | SV1 |
| Sinh viên | Luyện tập | Làm bài tập có lời giải | Làm bài tập | `practice.html` | R/C | SV1 |
| Sinh viên | Kiểm tra kiến thức | Làm đề kiểm tra | Làm đề kiểm tra | `exam-taking.html` | R/C | SV1 |
| Sinh viên | Theo dõi tiến độ | Xem điểm, lịch sử, tiến độ | Bảng điểm của tôi | `my-progress.html` | R | SV1 |
| Giảng viên | Dựng học liệu | Soạn bài giảng, nhúng mô hình | Soạn bài giảng | `lesson-editor.html` | C/R/U/D | SV2 |
| Giảng viên | Tạo mô hình phân tử | Dựng mô hình, mô tả liên kết | Thiết kế phân tử | `molecule-editor.html` | C/R/U/D | SV2 |
| Giảng viên | Giao bài/đề & chấm | Quản lý bài tập, đề, chấm | Quản lý bài & chấm | `assignment-manager.html` | C/R/U | SV2 |
| Giảng viên | Xem thống kê lớp | Xem điểm, độ khó, sinh viên yếu | Thống kê lớp học | `class-stats.html` | R | SV2 |
| Quản trị viên | Quản lý tài khoản | Duyệt/hủy tài khoản | Quản lý tài khoản | `admin-users.html` | C/R/U/D | SV3 |
| Quản trị viên | Quản lý chương | Tạo chương, sắp xếp chương trình | Quản lý chương | `admin-topics.html` | C/R/U/D | SV3 |
| Quản trị viên | Cấu hình & báo cáo | Cấu hình, xem báo cáo tổng | Bảng điều khiển admin | `admin-dashboard.html` | R/U | SV3 |

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

### Khách → 3 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `index.html` | Trang chủ giới thiệu | R | Giới thiệu khóa, bài mẫu, CTA đăng ký |
| 2 | `courses.html` | Danh sách khóa học | R | Xem khóa, lọc theo học kỳ, syllabus |
| 3 | `molecule-library.html` | Thư viện phân tử | R | Xem mô hình phân tử 2D/3D, tooltip nguyên tử |

### Sinh viên → 5 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `lesson-view.html` | Học bài tương tác | R | Xem bài giảng kèm mô hình phân tử, đánh dấu đã học |
| 2 | `equation-balancer.html` | Cân bằng phương trình | R/C/U | Nhập phản ứng, cân bằng hệ số, kiểm tra kết quả |
| 3 | `practice.html` | Làm bài tập | R/C | Làm bài tập có lời giải, tính mol/nồng độ |
| 4 | `exam-taking.html` | Làm đề kiểm tra | R/C | Làm đề đúng giờ, nộp, xem kết quả |
| 5 | `my-progress.html` | Bảng điểm & tiến độ | R | Xem điểm, lịch sử, tiến độ theo chương |

### Giảng viên → 4 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `lesson-editor.html` | Soạn bài giảng | C/R/U/D | Soạn bài giảng, nhúng mô hình phân tử |
| 2 | `molecule-editor.html` | Thiết kế phân tử | C/R/U/D | Dựng mô hình, đặt nguyên tử, mô tả liên kết |
| 3 | `assignment-manager.html` | Quản lý bài & chấm | C/R/U | Giao bài, đề, chấm, nhận xét, phản hồi |
| 4 | `class-stats.html` | Thống kê lớp | R | Xem điểm, độ khó câu hỏi, sinh viên yếu |

### Quản trị viên → 3 màn hình:
| # | Tệp | Giao diện | CRUD | Chức năng chính |
|---|---|---|---|---|
| 1 | `admin-users.html` | Quản lý tài khoản | C/R/U/D | Duyệt/hủy tài khoản, gán vai trò |
| 2 | `admin-topics.html` | Quản lý chương | C/R/U/D | Tạo chương, sắp xếp bài giảng |
| 3 | `admin-dashboard.html` | Bảng điều khiển | R/U | Báo cáo tổng, số người dùng, mô hình hoạt động |

## 9. Chuẩn chi tiết cho TỪNG giao diện đã duyệt

Mỗi màn hình phải có: tệp HTML đúng tên; điều hướng nhất quán; nội dung chính (card/list/table/form/dashboard/mô phỏng học liệu); trạng thái tải/rỗng/lỗi; responsive; tương tác JS có ý nghĩa; kiểm tra hợp lệ; dữ liệu mock API; (nếu có) giao diện AI Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát.

### Quy tắc CRUD
`C`=Tạo, `R`=Đọc, `U`=Sửa, `D`=Xóa; với dữ liệu nghiệp vụ thay Xóa bằng **Hủy / Lưu trữ / Vô hiệu hóa / Đóng** khi hợp lý.

---

## 10. Ma trận thực thể & CRUD gợi ý
| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Ghi chú |
|---|---:|---:|---:|---|
| Khóa học | C | R | U | Lưu trữ | Hóa học đại cương, học kỳ |
| Chương | C | R | U | Hủy | Cấu tạo nguyên tử, liên kết, phản ứng |
| Bài giảng | C | R | U | Đóng | Có mô hình phân tử, nháp/xuất bản |
| Nguyên tố | C | R | U | Lưu trữ | Bảng tuần hoàn, khối lượng nguyên tử |
| Mô hình phân tử | C | R | U | Đóng | Nguyên tử, liên kết, hình dạng |
| Bài tập | C | R | U | Đóng | Cân bằng phương trình, tính mol/nồng độ |
| Đề kiểm tra | C | R | U | Hủy | Nhiều câu hỏi, thời gian |
| Câu hỏi | C | R | U | Lưu trữ | Ngân hàng câu hỏi |

---

## 11. KĨ NĂNG TRUYỀN ĐẠT KIẾN THỨC (ĐIỂM NHẤN SÁNG TẠO)

> Đây là mục **quan trọng mới** của bộ đề tài: bên cạnh CRUD thông thường, sản phẩm phải thể hiện **cách truyền đạt kiến thức trực quan, sinh động, dễ hiểu** cho môn học đó.

- **Mô hình phân tử tương tác 2D/3D (SVG/Canvas)** – áp dụng trên `molecule-library.html` và `lesson-view.html`. Hiển thị cấu trúc phân tử (nước, CO2, NH3, metan) với màu theo nguyên tố, tooltip hiện thông tin, cho thấy liên kết và hình dạng phân tử.
- **Máy cân bằng phương trình hóa học từng bước** – áp dụng trên `equation-balancer.html`. Sinh viên đưa các chất tham gia và sản phẩm, hệ thống cân bằng hệ số và hiển thị số nguyên tử mỗi nguyên tố ở hai vế để kiểm tra định luật bảo toàn.
- **Bảng tuần hoàn tương tác** – áp dụng trên `lesson-view.html` và `practice.html`. Click vào nguyên tố để xem khối lượng nguyên tử, hóa trị, cấu hình electron, hỗ trợ tính toán mol và dự đoán liên kết.
- **Mô phỏng phản ứng & thí nghiệm an toàn từng bước** – áp dụng trên `lesson-view.html`. Minh họa phản ứng (trung hòa, điều chế khí) với phương trình và hiện tượng từng bước, giúp quan sát phản ứng ảo không cần hóa chất thật.

---

## 12. (TÙY CHỌN NÂNG CAO) Ý TƯỞNG AI – Không bắt buộc

> AI **không bắt buộc**. Đây là các ý tưởng để nhóm có hứng thú mở rộng sau khi làm xong phần cốt lõi. Nếu làm, vẫn cần trải nghiệm AI đầy đủ.

### AI-1 – Trợ lý cân bằng & giải thích phương trình
Sinh viên nhập phương trình, hệ thống cân bằng và giải thích định luật bảo toàn khối lượng, xác định chất oxi hóa–khử. Người dùng: sinh viên. Cách mô phỏng: JS theo quy tắc / API LLM tùy chọn.

### AI-2 – Gợi ý lộ trình ôn tập theo chương
Hệ thống phân tích kết quả thi theo chương, gợi ý chủ đề yếu cần ôn và bài tập phù hợp. Người dùng: sinh viên. Cách mô phỏng: JS theo quy tắc.

### AI-3 – Sinh câu hỏi hóa học theo chủ đề
Giảng viên chọn chương và độ khó, hệ thống sinh câu hỏi cân bằng phương trình/tính toán. Người dùng: giảng viên. Cách mô phỏng: JS theo quy tắc / API LLM tùy chọn.

### Nguyên tắc trải nghiệm AI (nếu có)
```text
Input → Validation → Processing → Result → Explanation → Accept/Edit/Reject → Save
```

---

## 13. Dữ liệu giả lập / API

Dùng JSON Server / MockAPI / LocalStorage với file `db.json` gồm: khóa học, chương, bài giảng, nguyên tố, mô hình phân tử, bài tập, đề kiểm tra, câu hỏi. Trích `db.json` gợi ý:

```json
{
  "elements": [
    { "id": 1, "symbol": "H", "name": "Hydro-ga", "atomicMass": 1.0, "valency": 1 },
    { "id": 2, "symbol": "O", "name": "Oxi", "atomicMass": 16.0, "valency": 2 }
  ],
  "chapters": [
    { "id": 1, "courseId": 1, "title": "Liên kết hóa học", "status": "active" }
  ],
  "lessons": [
    { "id": 1, "chapterId": 1, "title": "Cấu tạo phân tử", "status": "published", "hasMolecule": true }
  ],
  "molecules": [
    { "id": 1, "formula": "H2O", "name": "Nước", "atoms": ["H", "H", "O"], "shape": "bent", "status": "active" }
  ],
  "questions": [
    { "id": 1, "type": "trac_nghiem", "content": "Cân bằng: H₂ + O₂ → H₂O. Chọn hệ số của O₂?", "answer": "1", "difficulty": "de" }
  ],
  "attempts": [
    { "id": 1, "studentId": 10, "examId": 1, "score": 8.5, "status": "graded" }
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

### Mẫu prompt 1 – Dựng học liệu/bài giảng
```text
Tôi là SV môn CSE122 đang làm BTL về môn Hóa học (ChemStudio). Hãy giúp tôi...
+ dựng bài giảng về cấu tạo phân tử nước có mô hình SVG và tooltip nguyên tử
+ vai trò người xem: sinh viên đại học
+ yêu cầu trực quan: hình dạng phân tử, màu theo nguyên tố, giải thích liên kết
+ Hãy giải thích logic sau khi sinh để tôi hiểu.
```

### Mẫu prompt 2 – Tạo mock data / db.json
```text
Tạo file db.json (JSON Server) cho hệ thống ChemStudio, gồm các entity: courses, chapters, lessons, elements, molecules, assignments, exams, questions, attempts, mỗi entity 5–8 bản ghi mẫu theo nội dung Hóa học đại cương, có id, timestamps, và trường phù hợp nghiệp vụ. Xuất dạng JSON hợp lệ.
```

### Mẫu prompt 3 – Học và kiểm chứng (tránh làm hộ)
```text
Đừng viết toàn bộ. Hãy là mentor hướng dẫn tôi từng bước xây màn hình cân bằng phương trình hóa học: hỏi tôi cần gì, và sau mỗi đoạn code hãy giải thích vì sao làm vậy, rồi ra một bài tập nhỏ để tôi tự làm lại.
```

### Tránh lạm dụng AI
- Không nộp kết quả AI chưa hiểu.
- Phải khai báo trong `docs/ai-usage-report.md`: công cụ, prompt chính, phần AI sinh, phần tự sửa, cách kiểm chứng, điều học được.

---

## 15. Phân công nhóm 3 sinh viên

### SV1
Phụ trách: Khách + Sinh viên. Trách nhiệm chéo: một phần giao diện dùng chung, responsive.

### SV2
Phụ trách: Giảng viên. Trách nhiệm chéo: JavaScript / dữ liệu / mock API; review PR.

### SV3
Phụ trách: Quản trị viên + tích hợp bố cục, điều hướng, dashboard. Trách nhiệm chéo: nhất quán toàn dự án, phát hành.

Trách nhiệm chéo bắt buộc:
- Hệ thống thiết kế / Điều hướng / Khả năng tiếp cận;
- JavaScript / Dữ liệu / Tương tác;
- Responsive / Tích hợp / Phát hành / Đảm bảo chất lượng.

Mỗi sinh viên đều phải có HTML + CSS + JavaScript + Git + **video OBS giảng giải** + có phần "làm lại được".

---

## 16. Kho mã nguồn GitHub

- Repo gợi ý: `cse122-chemstudio-teamXX`.
- Nhánh: `main` / `dev` / `feature/...`.
- Quy trình: task → branch → code → commit → push → PR → review → merge dev → test → merge main.
- Mẫu commit (Conventional Commit): `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- Không chấp nhận commit `update / done / final / fix code`; không spam commit.

## 17. Bảng công việc Trello / Jira / Notion

Board: TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT → HOÀN THÀNH.
Mỗi task có mã, tệp/giao diện, người phụ trách, deadline, nhánh, link PR/commit, link video OBS.
Task mẫu: TASK-01 mockup, TASK-02 HTML role 1, TASK-03 responsive CSS, TASK-04 JS tương tác, TASK-05 mock API, TASK-06 (tùy chọn) AI, TASK-07 kiểm thử đa trình duyệt, TASK-08 OBS + README.

## 18. Video OBS giảng giải – Minh chứng chính

> **Mỗi trang giao diện thực tế đã duyệt = 1 video OBS giảng giải.**

Video bắt buộc có:
1. Khuôn mặt + giọng sinh viên giải thích.
2. Mở mockup Figma/Canva và nói vì sao thiết kế như vậy.
3. Mở đúng tệp HTML/CSS/JS.
4. Giải thích layout + logic nghiệp vụ + ý nghĩa từng phần UI (đặc biệt code vẽ mô hình phân tử và máy cân bằng phương trình).
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
- Tối thiểu **3 cách truyền đạt kiến thức trực quan** (mục 11): mô hình phân tử tương tác, máy cân bằng phương trình từng bước, bảng tuần hoàn tương tác.
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

Sau BTL, sinh viên chứng minh: phân tích vấn đề; chia hệ thống thành vai trò/màn hình; thiết kế UI/UX bằng Figma/Canva; hiện thực HTML semantic; CSS/Bootstrap + responsive; JavaScript DOM/sự kiện/biểu mẫu (đặc biệt vẽ mô hình phân tử và cân bằng phương trình); JSON/mock API; sáng tạo cách truyền đạt kiến thức; Git/GitHub; teamwork; và **giảng giải, làm lại được sản phẩm**.