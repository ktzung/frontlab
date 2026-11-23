# Bộ video YouTube — FrontLab

Mỗi bài có một thư mục `baiNN/` gồm:

| Tệp | Dùng để |
| --- | --- |
| `metadata.json` | Tiêu đề, mô tả, tag, chế độ hiển thị (unlisted) — nguồn cho upload và cho site |
| `description.txt` | Mô tả dán trực tiếp vào YouTube Studio |
| `captions.srt` | Phụ đề tiếng Việt, tải lên trong mục Subtitles |
| `thumbnail.jpg` | Ảnh bìa 1280×720 |

Video gốc nằm ở `videos/media/baiNN.mp4` (1920×1080, 30 fps, H.264/AAC, faststart) — không đưa vào git.

## Quy trình đăng

1. Tạo dự án trên YouTube Studio, chọn video `videos/media/baiNN.mp4`.
2. Dán tiêu đề và mô tả từ `metadata.json` / `description.txt`; thêm tag.
3. Tải `thumbnail.jpg` và `captions.srt`.
4. Đặt chế độ **Unlisted** (hoặc Public nếu muốn) như trong `metadata.json`.
5. Lấy ID video (11 ký tự sau `watch?v=`) và điền vào `youtubeId` trong `metadata.json` của bài đó.
6. Chạy lại `node videos/build/site-data.mjs` rồi commit `js/data-videos.js` — trang `#/videos/baiNN` sẽ tự chuyển từ trạng thái “chờ phát hành” sang trình phát nhúng YouTube.

## Dựng lại video

```bash
node videos/build/generate.mjs     # lời giảng, timeline, phụ đề, metadata
node videos/build/render.mjs 1     # render một bài (cần Chrome CDP :9224 và server :8086)
node videos/build/site-data.mjs    # cập nhật dữ liệu cho site
```

`generate.mjs` dùng giọng Linh của macOS (`say -v Linh`). Audio và cache nằm trong `videos/build/` và bị gitignore.
