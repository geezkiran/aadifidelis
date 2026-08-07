# Design System — AutoBiz Landing

## Rules

- **Font:** Neue Haas Display Roman (`src/font/NeueHaasDisplayRoman.ttf`)
- **Pixels only** for type, spacing, radii, widths
- **Two sizes:** mobile (default) and desktop (`md:` ≥ 768px). No `sm` / `lg` / `xl` scales
- Continuous website scroll — no page indicators

## Color

| Token | Value | Use |
| --- | --- | --- |
| Dark | `#0b0b0b` | Hero top, industries, footer |
| White | `#ffffff` | Page sections, CTAs |
| Muted | `#6b6b6b` | Body copy on light |
| Surface | `#f3f3f3` | Feature cards |
| Glow | `#7ec8ff` / `#b8e0ff` | Hero / footer radial light |

## Layout

| Concern | Mobile | Desktop |
| --- | --- | --- |
| Container max | 1200px | 1200px |
| Container pad | 24px | 40px |
| Hero headline | 40px | 64px |
| Section headline | 32px | 44px |
| Body | 15px | 16px |
| Card radius | 16px | 16px |
| CTA height | 48px | 52px |

## Sections

1. Hero (+ sticky-feel absolute header)
2. How can we help + stats
3. AI-Powered Growth Bots (4 cards)
4. Industries (dark list)
5. FAQ accordion
6. Footer (+ oversized wordmark)
