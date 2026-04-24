# Testing the Portfolio

Single-page React + Vite + Tailwind portfolio for Md. Zubayer Ahmad Shibly. All content is driven from `src/data/portfolio.ts`; all accent colors are CSS variables keyed off a `data-theme` attribute on `<html>`.

## Run locally

```bash
npm install     # cached in the Devin env
npm run dev -- --host 127.0.0.1 --port 5173
```

- Vite defaults to port 5173. If it's taken, Vite will pick the next free port and print it — always re-read the log line `➜  Local:   http://127.0.0.1:<port>/` before opening the browser.
- No CI, no test runner, no backend. `npm run lint` and `npm run build` are the only checks; both must pass.
- There are no unit tests; `npm test` exits with "no tests found".

## Theme / palette system

- Palette tokens live in `src/styles/index.css` under `:root[data-theme="<id>"]` blocks. Presets: `academic-navy` (default), `scholar-indigo`, `oxford-maroon`, `bangladesh`, `mono-slate`.
- The switcher component is `src/components/PaletteSwitcher.tsx`. It writes `document.documentElement.setAttribute('data-theme', id)` and `localStorage.setItem('portfolio-theme', id)`.
- To verify a palette swap visually, the fastest signals are: the `Contact` / `About` section labels (text uses `var(--cyan)`) and the stats numbers. The `NeuralCanvas` background animation also recolors via a MutationObserver on `data-theme`.
- To reset a test session's theme without the UI: `localStorage.removeItem('portfolio-theme')` then reload, or click Academic Navy in the switcher.
- Key variables per theme: `--cyan`, `--gold`, `--pink`, plus `--cyan-rgb` / `--gold-rgb` / `--pink-rgb` RGB triples used in inline `rgba(var(--cyan-rgb), ...)`. Expected values for `academic-navy` are `#38bdf8`, `#f59e0b`, `#a78bfa`; for `bangladesh` `#10b981`, `#f59e0b`, `#f43f5e`.

## Contact form

- Lives in `src/sections/ContactSection.tsx`. Reads `VITE_FORMSPREE_ID` at build time.
- **Without** `VITE_FORMSPREE_ID` (default in dev): Send triggers `window.location.href = mailto:<email>?subject=&body=`, then shows a success banner. On a VM without a mail client, Chrome silently drops the mailto — the success banner is still the correct pass signal. Do **not** expect an `alert()` — the old placeholder alert was removed.
- **With** `VITE_FORMSPREE_ID`: same UX, but a real `fetch` to `https://formspree.io/f/<id>` instead of the mailto. Needs a real ID to test end-to-end; there's no way to mock it in the current code.
- To confirm the fallback without leaving the page, inspect `window.location.href` via devtools, or just rely on the on-page success banner as the visible assertion.

## CV-driven content

- Source of truth: `src/data/portfolio.ts`. Never hand-edit a section component to add copy — edit the data file and the section re-renders.
- The CV PDF lives at `/home/ubuntu/attachments/10170cc3-2a2f-4c23-b3af-6a8bd28f6e70/Main_CV.pdf` in active sessions; re-extract with `pdftotext` if you need to diff content.
- Name in the hero comes from `personalInfo.nameFirst` + `personalInfo.nameLast` (split on the space before the surname). The `.glitch` span's `data-text` is the first line — any glitch-effect tests should read that attribute.

## Recording tips

- Maximize Chrome before recording — `wmctrl` isn't installed in every VM, so prefer `xdotool` on the active window:
  ```bash
  WID=$(xdotool search --name "Zubayer" | head -1)
  xdotool windowactivate --sync $WID
  xdotool windowsize $WID 100% 100%
  ```
  F11 for fullscreen is fine too.
- The `computer` tool's `console` action sometimes reports "Chrome is not in the foreground" even when `xdotool getactivewindow` confirms Chrome is active. If that happens, don't fight it — fall back to pure UI interactions + screenshots; the assertions in this repo are almost all visual (color swaps, success banners, rendered text).

## Common pitfalls

- Hard-coded `rgba(0,229,255,...)` or `rgba(77,196,255,...)` — these are the OLD cyan values from before the theme rewrite. If you see any in a new change, they need to become `rgba(var(--cyan-rgb), ...)` so the palette switcher works everywhere.
- If `npm run dev` says `Port 5173 is in use`, a prior session's Vite is still running. `pkill -f vite` before relaunching.
- Do not delete `src/data/portfolio.ts` placeholder sections (like Collaborators) — the user explicitly wants demo placeholders for sections not in their CV.

## Devin secrets needed

- None required for dev / test. To exercise Formspree, the user would set `VITE_FORMSPREE_ID` in their hosting env (Vercel / Netlify / etc.) — this is an env var, not a Devin secret.
