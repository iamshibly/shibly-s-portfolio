# Md. Zubayer Ahmad Shibly — Academic Portfolio

A single-page academic portfolio built with **Vite + React + TypeScript**, styled with Tailwind and a custom CSS token system.

## Features

- Hero name with themed tri-color glitch effect
- Live color palette switcher (Academic Navy / Scholar Indigo / Oxford Maroon / Bangladesh / Mono Slate)
- Sections: About · Education · Research · Publications · Projects · Collaborators · Experience · Skills · Achievements · News · Contact
- Animated neural-network background canvas (theme-aware)
- Scroll-reveal animations, custom cursor, and subtle parallax
- Contact form with **mailto: fallback** out of the box, auto-upgrades to Formspree when `VITE_FORMSPREE_ID` is set

## Getting Started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build
npm run lint     # eslint
npm run test     # vitest
```

## Content

All site content lives in a single file: `src/data/portfolio.ts`.

## Enabling real email delivery (optional)

The contact form works out of the box via `mailto:`. To send directly through Formspree instead:

1. Create a free form at https://formspree.io and copy the 8-character form ID.
2. Add `VITE_FORMSPREE_ID=<your-id>` to `.env` (or your hosting provider's env vars).
3. Redeploy — no code change required.

## Themes

Set `data-theme` on `<html>` or use the floating palette button (bottom right). The selection is persisted to `localStorage`.

- `academic-navy` *(default)*
- `scholar-indigo`
- `oxford-maroon`
- `bangladesh`
- `mono-slate`
