# 🛒 Bazar Dor — Bangladeshi Daily Market Price Tracker

BazarDor shows today's prices of everyday essentials in Bangladesh — rice, lentils, oil, vegetables, fish, meat, eggs and spices. You can see the current price, how much it changed since yesterday, and compare prices across 12 city markets.

**Live:** 
**Repo:** https://github.com/fozayelibnayaz/Bazar-Dor

## Features

1. **Today's prices at a glance** — 33 products in 8 categories with prices in Bengali numerals, per-unit labels and ▲/▼ change badges.
2. **Top gainers & losers** — separate sections for the 6 products whose prices rose the most and the 6 that dropped the most.
3. **Category pages with sorting** — each category has its own page with "price: low to high / high to low" sorting (sorts by real numbers, not text).
4. **Protected product details page** — requires login. Shows min, max and average price plus a market-by-market price table for 12 bazaars.
5. **Authentication with BetterAuth** — email/password, Google and GitHub sign-in, toast notifications, profile page and name update.
6. **Responsive UI with Bengali typography** — works on mobile, tablet and desktop; skeleton loaders, a Bengali 404 page and an infinite price ticker.

## Technologies

- **Next.js 16** (App Router, Server Components) — routing and rendering
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling and responsiveness
- **BetterAuth** — authentication (email/password, Google, GitHub)
- **MongoDB Atlas** — user and session storage
- **react-hot-toast** — notifications
- **next/font (Noto Sans Bengali)** — Bengali typography

## Getting Started

```bash
git clone https://github.com/fozayelibnayaz/Bazar-Dor.git
cd Bazar-Dor
npm install