# LOGS.md - Nhật ký dự án: Landing Page "5 Phút Tiếng Đức"

## Thông tin dự án

| | |
|---|---|
| **Tên dự án** | 5 Phút Tiếng Đức - Landing Page |
| **Repo GitHub** | https://github.com/GiaBao72/5phut-page |
| **Live URL** | https://giabao72.github.io/5phut-page/ |
| **Thư mục** | `D:\AI\openclaw\.openclaw\workspace\5ptd-project` |
| **Ngày bắt đầu** | 2026-03-23 |
| **Stack** | Vite + React + Tailwind CSS + Framer Motion |
| **Deploy** | GitHub Pages (branch `gh-pages`) |

---

## Thông tin sản phẩm

- **Tên sách:** 5 Phút Tiếng Đức
- **Mô tả:** 200 trang, mỗi trang 1 mẩu chuyện ngắn + 2 từ mới, phương pháp Spaced Repetition
- **Giá:** 200.000đ → **149.000đ** (ưu đãi tháng 3)
- **Combo gồm:** 1 sách in + 200 audio luyện nghe + 🎁 PDF 500 từ vựng tiếng Đức
- **Freeship:** Toàn quốc
- **Facebook:** https://www.facebook.com/GiaBaoBooks
- **Messenger:** https://m.me/GiaBaoBooks

---

## Design System

| Token | Giá trị |
|---|---|
| Background | `#F6FAF7` (mint sáng) |
| Surface (card) | `#FFFFFF` |
| Accent CTA | `#F59E0B` (vàng amber) |
| Accent Green | `#2D6A4F` (forest green) |
| Accent Green Dark | `#1B4D37` |
| Text Primary | `#1E293B` |
| Text Secondary | `#475569` |
| Footer BG | `#1E293B` |
| Font Heading | Montserrat (Bold, ExtraBold) |
| Font Body | Inter (Regular) |

---

## Cấu trúc trang (thứ tự hiển thị)

1. **MarqueeBanner** - "🚚 Miễn phí giao hàng toàn quốc" chạy từ phải sang trái, vô hạn
2. **StickyHeader** - Hiện sau scroll 600px, backdrop blur, có nút "Mua Ngay"
3. **Hero** - Headline lớn, subheadline, 2 CTA (vàng + Messenger), ảnh sách floating
4. **Problem** - 3 pain points (Học trước quên sau / Ám ảnh ngữ pháp / Thiếu thời gian)
5. **Solution** - 2 features card + AnimatedCounter (200/200/500+)
6. **InsideBook** - Trang mẫu Ngày 11 + Audio player thật (25 giây)
7. **Pricing** - Countdown đến 31/3/2026 + Card giá + CTA Messenger
8. **Testimonials** - 3 review dạng mockup tin nhắn Messenger/Zalo
9. **Author** - Câu chuyện GiaBaoBooks + link Facebook/Messenger
10. **FAQ** - 3 câu hỏi accordion
11. **Footer** - Dark footer + nút Mua Ngay + copyright
12. **MessengerFAB** - Nút cố định góc dưới phải, hiệu ứng ping
13. **SalesPopup** - FOMO popup góc dưới trái (desktop) / trên (mobile)

---

## Components

| File | Mô tả |
|---|---|
| `Hero.jsx` | MarqueeBanner + Hero section |
| `Problem.jsx` | 3 pain point cards |
| `Solution.jsx` | Features + AnimatedCounter |
| `InsideBook.jsx` | Trang mẫu sách + Audio player thật |
| `Pricing.jsx` | CountdownTimer + Pricing card |
| `CountdownTimer.jsx` | Đếm ngược đến 31/3/2026 |
| `AnimatedCounter.jsx` | Số đếm animated khi scroll đến |
| `Testimonials.jsx` | 3 review mockup chat |
| `SalesPopup.jsx` | FOMO popup tự hiện/tắt |
| `Author.jsx` | Giới thiệu GiaBaoBooks |
| `FAQ.jsx` | Accordion FAQ |
| `Footer.jsx` | Dark footer |
| `StickyHeader.jsx` | Header cố định sau scroll |

---

## Assets

| File | Mô tả |
|---|---|
| `public/bia-sach.jpg` | Ảnh bìa sách |
| `public/demo-audio.mp3` | Audio demo 25 giây (extract từ 11-20.mp4, đoạn 1s-26s) |
| `public/.nojekyll` | Bypass GitHub Pages Jekyll |

---

## Audio Demo - Bài Ngày 11

```json
{
  "tag": "Ngày 11",
  "doan_van_tieng_duc": "Am Morgen hilft Clara ihrem Vater im Garten...",
  "dich_tieng_viet": "Vào buổi sáng, Clara giúp bố trong vườn...",
  "tu_noi_bat_1": "Garten", "phien_am_1": "ga-ten", "nghia_1": "khu vườn",
  "tu_noi_bat_2": "Äste", "phien_am_2": "é-stơ", "nghia_2": "cành cây",
  "cau_ket": "Gemeinsames Helfen verbindet.",
  "nghia_cau_ket": "Cùng nhau giúp đỡ tạo sự gắn kết."
}
```

---

## SalesPopup Timing

- Hiện lần đầu: **15 giây** sau khi vào trang
- Tồn tại: **4 giây** rồi tự tắt
- Lặp lại: mỗi **30 giây**
- Mobile: dời lên `bottom-24` để không đè FAB

---

## Deploy

```bash
# Cài dependencies
npm install

# Dev server local
npm run dev -- --port 3456 --host

# Build + Deploy lên GitHub Pages
npm run deploy
```

**Token GitHub:** `[xem trong memory/pancake-token.txt hoặc TOOLS.md]`

```bash
git remote set-url origin https://<GITHUB_TOKEN>@github.com/GiaBao72/5phut-page.git
```

---

## Lịch sử thay đổi

| Ngày | Thay đổi |
|---|---|
| 2026-03-23 | Khởi tạo dự án, bàn luận với Gemini, tạo XML spec |
| 2026-03-23 | Build xong toàn bộ 11 components |
| 2026-03-23 | Đổi dark theme → light theme theo palette Gemini |
| 2026-03-23 | Thêm Marquee banner freeship |
| 2026-03-23 | Extract audio demo từ 11-20.mp4, thêm audio player thật |
| 2026-03-23 | Cập nhật nội dung Ngày 11 (Clara giúp bố làm vườn) |
| 2026-03-23 | Đổi tên Gia Bảo Books → GiaBaoBooks toàn bộ |
| 2026-03-23 | Cập nhật giá 179k → 149k (gốc 200k) |
| 2026-03-23 | Thêm Testimonials (mockup chat) + SalesPopup FOMO |
| 2026-03-23 | Fix pricing mobile tràn ô |
| 2026-03-23 | Move project vào workspace |

---

## Notes quan trọng

- `vite.config.js` cần `base: '/5phut-page/'` cho GitHub Pages
- File tiếng Việt: LUÔN dùng `write` tool hoặc Python, KHÔNG dùng `edit` tool
- File `11-20.mp4` (132MB) đã bị gitignore, chỉ push `demo-audio.mp3`
- **Gemini đánh giá:** Trang đạt 90%, đủ để đi live và chạy Ads
