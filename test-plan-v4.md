# Test plan — PR #6 (Publications overhaul, darker bg, View CV tab, project links)

**PR:** https://github.com/iamshibly/shibly-s-portfolio/pull/6
**Local dev:** `http://localhost:8080/`

Single continuous recording. Primary focus = Publications section; secondary = View CV, background feel, project links.

---

## Flow 1 (primary) — Publications filter sanity

**UI path:** Top nav → click "Publications".

Adversarial because a broken implementation would produce visibly different values on each sub-test:

### 1.1 All tab
- Filter reads `All (13)`.
- **Pass criteria:** numeric count = 13; 5 Accepted cards visible above any Under-Review card (scroll to verify section boundary); no card shows two identical status badges.
- **Broken signature:** count ≠ 13, Accepted/Under-Review interleaved, or duplicated "UNDER REVIEW" badges.

### 1.2 Domestic Conference tab (was empty before)
- Click `Domestic Conference`.
- **Pass criteria:** filter count = `Domestic Conference (2)`. Two cards render:
  - `01` — "A Novel Hybrid Feature Selection … Hepatitis B …" · ICCIT 2025, Cox's Bazar, Bangladesh · status=Accepted · type=Domestic Conference.
  - `02` — "Explainable AI-Driven Ensemble Learning Framework for PCOS Diagnosis …" · ICCIT 2025, Cox's Bazar, Bangladesh · status=Accepted · type=Domestic Conference.
- **Broken signature:** count = 0 (pre-fix state), or cards still marked "International Conference".

### 1.3 Under Review tab (numbering + status split)
- Click `Under Review`.
- **Pass criteria:** 8 cards, numbered `01`–`08` (NOT 06, 07, 08…). Each card shows exactly ONE "UNDER REVIEW" badge + a TYPE badge ("Journal" or "International Conference"), never two identical badges. AVSS 2026 card shows additional gold `CORE B` badge with a star icon.
- **Broken signature:** numbering starts at 06; duplicate UNDER REVIEW badges; AVSS missing CORE B.

### 1.4 International Conference tab (sort + flagship highlight)
- Click `International Conference`.
- **Pass criteria:** count = `International Conference (6)`. First two cards in order are Accepted with CORE badges:
  - `01` — FUZZ 2026 Netherlands · Accepted · `CORE B` gold badge.
  - `02` — SERA 2026 USA · Accepted · `CORE C` cyan badge.
  - Then `03` ICCCNT 2025 (Accepted, no CORE).
  - Then under-review cards `04`–`06` (IRAI, TENSYMP, AVSS with `CORE B`).
- **Broken signature:** FUZZ/SERA appear after under-review cards; CORE badges missing on FUZZ/SERA/AVSS; ICCCNT still tagged International despite Bangladesh domestic swap not applying.

---

## Flow 2 (secondary) — View CV opens in tab (no auto-download)

**UI path:** Scroll to Hero → click "View CV".

- **Pass criteria:** A new Chrome tab opens and renders the PDF (page 1 of `Main_CV.pdf` visible). The browser does NOT show the "Download started" banner in the current tab. URL of the new tab is `…/cv/Main_CV.pdf`.
- **Broken signature:** Clicking triggers a download banner in the same tab (old behaviour, confirmed in prior screenshot `screenshot_4574e6d44575447a8a1266597d269eb5.png`).

---

## Flow 3 (secondary) — Darker background

**Comparison:** visually compare Hero screenshot from the previous deploy (`screenshot_30ab45e0402d4ff68fae2ae61e360c4d.png`, `--bg: #0b1220`) with the current Hero.

- **Pass criteria:** current Hero background is perceptibly darker; computed background-color in DevTools reads `rgb(4, 6, 13)` on `<body>` (i.e. `#04060d`).
- **Broken signature:** body background still `rgb(11, 18, 32)`.

---

## Flow 4 (secondary) — Project links

**UI path:** Top nav → "Projects".

- **Pass criteria:** hovering/inspecting each card's "Code" link shows the correct `href`:
  - MultiDx → `https://github.com/iamshibly/MultiDx` AND a "Live Demo" link → `https://model.sayeedjoy.com/`.
  - AniMaze → `https://github.com/iamshibly/AniMaze`.
  - Arduino Home Security → `https://github.com/iamshibly/Arduino-Home-Security-and-Fire-Smoke-Detection-System-with-Automatic-Water-Pump-Activation`.
- **Broken signature:** any link still resolves to the bare `https://github.com/iamshibly` profile (old placeholder).

---

## Evidence to collect

1. Recording of Flow 1 sub-tests (All → Domestic → Under Review → International) + Flow 2 (View CV click → new tab) + Flow 4 (hover each project link).
2. Screenshot of Under Review tab showing `01–08` numbering clearly.
3. Screenshot of International Conference tab showing FUZZ/SERA CORE badges and sort order.
4. Side-by-side hero screenshot before/after for bg darkness.
5. Link hrefs captured via browser status bar on hover (no devtools needed).

## Out of scope

- Formspree delivery (blocked on user's form ID — still mailto fallback).
- Regression on unrelated sections (News, Certifications, Contact) — only spot-check during scroll.

Code references that informed the plan:
- `src/sections/PublicationsSection.tsx:86-94` (sort + numbering)
- `src/data/portfolio.ts:153-284` (new publication list with type/status/coreRank)
- `src/sections/HeroSection.tsx:131-137` (View CV anchor without `download`)
- `src/styles/index.css:17-20` (new `--bg` values)
- `src/data/portfolio.ts:279-299` (project link/demo wiring)
