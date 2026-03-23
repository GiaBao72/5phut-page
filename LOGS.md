# LOGS.md - Nhật ký dự án: Landing Page "5 Phút Tiếng Đức"

## Thông tin dự án

| | |
|---|---|
| **Tên dự án** | 5 Phút Tiếng Đức - Landing Page |
| **Repo GitHub** | https://github.com/GiaBao72/5phut-page |
| **Live URL (custom domain)** | https://5phuttiengduc.giabaobooks.vn |
| **Live URL (GitHub Pages)** | https://giabao72.github.io/5phut-page/ |
| **Thư mục** | `D:\AI\openclaw\.openclaw\workspace\5ptd-project` |
| **Ngày bắt đầu** | 2026-03-23 |
| **Stack** | Vite + React + Tailwind CSS + Framer Motion |
| **Deploy** | GitHub Pages (branch `gh-pages`) via `npm run deploy` |

---

## Thông tin sản phẩm

- **Tên sách:** 5 Phút Tiếng Đức
- **Mô tả:** 200 trang, mỗi trang 1 mẩu chuyện ngắn + 2 từ mới, phương pháp Spaced Repetition
- **Giá:** 200.000đ → **149.000đ** (ưu đãi)
- **Combo gồm:** 1 sách in + 200 audio luyện nghe + 🎁 PDF 500 từ vựng tiếng Đức
- **Freeship:** Toàn quốc
- **Facebook:** https://www.facebook.com/GiaBaoBooks
- **Messenger:** https://m.me/GiaBaoBooks
- **Trang chủ brand:** https://giabaobooks.vn

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

1. **MarqueeBanner** - 3 items xoay vòng chạy từ phải sang trái, vô hạn (duration 45s)
2. **StickyHeader** - Hiện sau scroll 600px, có logo + nút "Mua Ngay", logo link về giabaobooks.vn
3. **Hero** - Headline lớn, subheadline, 2 CTA (vàng + Messenger), ảnh sách floating
4. **Problem** - 3 pain points
5. **Solution** - 2 features card + AnimatedCounter (200/200/500+)
6. **InsideBook** - Trang mẫu Ngày 11 + Audio player thật (25 giây)
7. **Pricing** - Countdown trong ngày (reset mỗi ngày lúc 23:59:59) + Card giá + CTA Messenger
8. **Testimonials** - 3 review dạng mockup tin nhắn Messenger/Zalo
9. **Author** - Câu chuyện GiaBaoBooks + link Facebook/Messenger
10. **FAQ** - 3 câu hỏi accordion
11. **Footer** - Dark footer, logo link về giabaobooks.vn, "← Về trang chủ GiaBaoBooks", nút Mua Ngay, copyright
12. **MessengerFAB** - Nút cố định góc dưới phải, hiệu ứng ping
13. **SalesPopup** - FOMO popup góc dưới trái (desktop) / trên (mobile)

---

## Components

| File | Mô tả |
|---|---|
| `Hero.jsx` | MarqueeBanner (3 items, duration 45s) + Hero section |
| `Problem.jsx` | 3 pain point cards |
| `Solution.jsx` | Features + AnimatedCounter |
| `InsideBook.jsx` | Trang mẫu sách + Audio player thật |
| `Pricing.jsx` | CountdownTimer + Pricing card |
| `CountdownTimer.jsx` | Đếm ngược đến cuối ngày hôm nay (23:59:59), reset mỗi ngày |
| `AnimatedCounter.jsx` | Số đếm animated khi scroll đến |
| `Testimonials.jsx` | 3 review mockup chat |
| `SalesPopup.jsx` | FOMO popup tự hiện/tắt |
| `Author.jsx` | Giới thiệu GiaBaoBooks |
| `FAQ.jsx` | Accordion FAQ |
| `Footer.jsx` | Dark footer + logo + link giabaobooks.vn |
| `StickyHeader.jsx` | Header cố định sau scroll, có logo PNG |

---

## Assets

| File | Mô tả |
|---|---|
| `public/bia-sach.jpg` | Ảnh bìa sách |
| `public/demo-audio.mp3` | Audio demo 25 giây (extract từ 11-20.mp4, đoạn 1s-26s) |
| `public/Logo.png` | Logo GiaBaoBooks (hiển thị trong StickyHeader và Footer) |
| `public/CNAME` | Custom domain: 5phuttiengduc.giabaobooks.vn |
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
npm run dev

# Build + Deploy lên GitHub Pages
npm run deploy
```

**Lưu ý:** `base: '/'` trong `vite.config.js` (custom domain, không dùng `/5phut-page/`)

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
| 2026-03-23 | Gắn custom domain 5phuttiengduc.giabaobooks.vn (CNAME DNS + public/CNAME) |
| 2026-03-23 | Fix trang trắng: đổi `base: '/5phut-page/'` → `base: '/'` trong vite.config.js |
| 2026-03-23 | Fix ảnh + audio: hardcode path `/5phut-page/` → `/` trong Hero.jsx và InsideBook.jsx |
| 2026-03-23 | Marquee banner: thêm 2 điểm nổi bật (200 audio + sổ tay từ vựng), tốc độ 45s |
| 2026-03-23 | Countdown đổi từ deadline cố định → đếm ngược trong ngày (reset 23:59:59 mỗi ngày) |
| 2026-03-23 | StickyHeader: thêm Logo.png, link về giabaobooks.vn |
| 2026-03-23 | Footer: thêm Logo.png, link "← Về trang chủ GiaBaoBooks" → giabaobooks.vn |

---

## Notes quan trọng

- `vite.config.js` dùng `base: '/'` khi deploy với custom domain (KHÔNG phải `/5phut-page/`)
- File tiếng Việt: LUÔN dùng `write` tool hoặc Python, KHÔNG dùng `edit` tool
- File `11-20.mp4` (132MB) đã gitignore, chỉ push `demo-audio.mp3`
- `public/CNAME` phải có để GitHub Pages nhận custom domain
- DNS: CNAME record `5phuttiengduc` → `giabao72.github.io` tại nhà cung cấp domain
