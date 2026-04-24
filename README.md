# Md. Zubayer Ahmad Shibly — Academic Portfolio

A single-page academic portfolio built from scratch — no templates, no off-the-shelf portfolio kits. Every section, animation, and data model was designed for showcasing applied-AI research: publications with flagship-conference highlighting, real collaborators, a dark "deep-space" visual language, and a live contact channel.

**Live site:** https://dist-gnixuqhq.devinapps.com

---

## What makes this site different

- **Publications with CORE-aware filtering.** Papers are split into `type` (Journal / International Conference / Domestic Conference) and `status` (Accepted / Under Review), with optional `coreRank` (A\* / A / B / C). CORE A\* and B flagship venues get a gradient + star badge treatment so they stand out visually. Numbering restarts per filter tab so the selected slice always reads `01 … N`.
- **CV-driven content.** All research projects, publications, awards, news, and collaborators live in a single `src/data/portfolio.ts` file sourced directly from the CV — updating the site is a one-file edit, not a dozen prop drills.
- **Real contact delivery.** The contact form posts to [Formspree](https://formspree.io) when `VITE_FORMSPREE_ID` is configured (with `_replyto` + custom `_subject`), and falls back to `mailto:` otherwise. No dead buttons.
- **Animated neural-network canvas background.** A custom WebGL-style particle + edge canvas re-tints itself every time the palette changes — not an embedded GIF.
- **Palette switcher with persisted choice.** Five academic palettes (Academic Navy, Scholar Indigo, Oxford Maroon, Bangladesh, Mono Slate) swap instantly via CSS custom properties; the neural canvas, publication badges, and hero glitch effect all retheme in sync. Selection is saved in `localStorage`.
- **Per-section data models.** `Publication`, `ResearchProject`, `Collaborator`, `NewsItem`, etc. are all strongly typed in TypeScript — adding a new paper with a CORE rank, venue country, and status is a 5-line object literal.
- **View CV opens inline.** The View CV button in the hero opens `/cv/Main_CV.pdf` in a new tab (browser-rendered) rather than forcing a download.
- **Chronological News carousel.** News items are sorted by date (newest → oldest) with a featured-item highlight and auto-play Embla carousel — cards include logos/certificates for each event.

---

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Build | **Vite 5** | Fast HMR, first-class TS support. |
| UI framework | **React 18** + **TypeScript (strict)** | Type-safety across the CV-shaped content models. |
| Styling | **Tailwind CSS 3** + **custom CSS variables** | Utility classes for layout, CSS vars for palette theming. |
| Animation | **Framer Motion** + custom scroll-reveal hook (`useScrollReveal`) + Embla Carousel | Section reveals on scroll, smooth card transitions, News auto-scroll. |
| Background canvas | **HTML Canvas 2D** (`NeuralCanvas.tsx`) | Theme-aware particle/edge network; no external lib. |
| Icons | **lucide-react** | Clean stroke icons consistent with the academic feel. |
| Routing | **Single-page, section anchors** | Hash-based nav (`#about`, `#publications`, `#contact` …). |
| Email backend | **Formspree** (optional) | `VITE_FORMSPREE_ID` env var toggles POST vs mailto fallback. |
| Lint / test | ESLint (flat config) + Vitest + Playwright | Unit + end-to-end coverage. |

Full dependency list: see `package.json`.

---

## Local development

Requirements: **Node ≥ 18**, **npm ≥ 9**.

```bash
git clone https://github.com/iamshibly/shibly-s-portfolio.git
cd shibly-s-portfolio
npm install
npm run dev       # local dev server → http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
npm run lint      # eslint
npm run test      # vitest
```

The site has zero runtime server-side code — a plain `npm run build` produces a static `dist/` folder you can drop onto any static host (Netlify, Vercel, S3, GitHub Pages, Cloudflare Pages, `serve`).

---

## Customising the content

All content lives in a single file:

```
src/data/portfolio.ts
```

Main exports:

- `profile` — name, headline, contact links.
- `education` — degrees, dates, coursework.
- `researchProjects` — collaborator-grouped research activity + status + variant colour.
- `publications` — papers with `type`, `status`, `coreRank`, `venue`, `country`, `authors`.
- `projects` — engineering projects (GitHub + live-demo links).
- `collaborators` — with headshots in `public/collaborators/`.
- `experience` — roles with dates + bullets.
- `skills` — grouped skill tags (Federated Learning is positioned intentionally after Deep Learning & Transformers).
- `awards` — certifications, awards, recognitions.
- `news` — chronological news items (see `public/news/` for images).
- `references` — contact references with `note` for badge support.

Swap your CV: drop the new PDF at `public/cv/Main_CV.pdf`. The hero View CV button is already wired to that path.

---

## Enabling real email delivery (Formspree)

The contact form works out of the box with `mailto:`. To upgrade to direct email:

1. Create a free form at https://formspree.io and copy its 8-character form ID.
2. Add a `.env.production` (or your hosting env) with:
   ```
   VITE_FORMSPREE_ID=xxxxxxxx
   ```
3. Rebuild and redeploy. The form now posts JSON to `https://formspree.io/f/<id>` with `name`, `email`, `message`, `_replyto`, `_subject` — visitors see a "Message sent! I'll reply within 24 hours." banner and the form auto-clears.

The form ID itself is **not** a secret — it's embedded in the built JS bundle. Abuse protection is handled server-side by Formspree (CAPTCHA, domain allowlist, etc.).

---

## Themes

Set `data-theme` on `<html>` or use the floating palette button (bottom right). Selection is persisted to `localStorage`.

- `academic-navy` *(default — deep-space dark blue)*
- `scholar-indigo`
- `oxford-maroon`
- `bangladesh`
- `mono-slate`

---

## Deploy

```bash
npm run build
# upload dist/ to any static host
```

Preview URL currently live at https://dist-gnixuqhq.devinapps.com (Devin Apps static hosting).
