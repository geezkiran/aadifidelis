# AutoBiz.ai Landing Page

A high-conversion marketing landing page built with Next.js, matching a fixed desktop / mobile layout system.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/                 # Next.js app router
├── components/landing/  # Page sections (Hero, FAQ, Footer, …)
├── font/                # Neue Haas Display Roman
└── lib/                 # Utilities
```

## Conventions

- **Font:** Neue Haas Display Roman
- **Sizing:** explicit `px` values only
- **Breakpoints:** mobile (default) and desktop (`md:` ≥ 768px)
- Full-viewport snap slides (pitch-deck feel) — no bottom page indicator
- Keyboard: ↑ ↓ / arrows / space
