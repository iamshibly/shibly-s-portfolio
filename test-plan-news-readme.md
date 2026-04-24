# Test plan — PR #8 (News rewrite + README + cleanup)

**Live preview:** https://dist-gnixuqhq.devinapps.com

## What a broken build would look like
- Old `picsum.photos` placeholder images (hay field on Aspire, random stock on SEU / Neurocrack / ICCCNT / etc.) still showing → means the new `/news/*.jpg` assets are missing or the deploy is stale.
- Aspire card date shows `June 2025` → means the commit `568b639` didn't ship.
- "Three Papers Submitted to A* Venues" title still present → means old data not replaced.
- FUZZ and SERA bundled in one card → means the split didn't land.
- Augusta card says `2025 – Early 2026` → means the research fix didn't land.
- News cards in wrong order or with broken image tags → means the updated date-range parser failed.

## Primary flow
1. Open https://dist-gnixuqhq.devinapps.com
2. Click **NEWS** in the top nav (scrolls to `#news`).
3. Scroll through the Embla carousel using the right-arrow button and observe every card.
4. Click **RESEARCH** in the top nav, scroll to the Augusta University card.

## Assertions (adversarial — each must fail if the change didn't ship)

### News section
- **A1.** The **Aspire Institute** card date reads exactly `August 2025` (not `June 2025`).
- **A2.** The **Aspire Institute** card image is the red "Aspire Institute" wordmark on a cream background (NOT a monochrome hay-field / bales-of-hay stock photo). This catches both the image swap *and* the deploy freshness.
- **A3.** The **SEU / B.Sc. in CSE** card shows the yellow Southeast University crest (candle + book emblem), dated `August 2022`. A broken state would show either the old `picsum.photos` placeholder or a 404/gray tile.
- **A4.** Two distinct, separate cards exist for conference acceptances:
  - one titled *"Paper Accepted at IEEE FUZZ 2026 (Reims, France) — CORE B"* dated `March 2026` with the FUZZ-IEEE champagne-glass logo
  - one titled *"Paper Accepted at IEEE/ACIS SERA 2026 — CORE C"* dated `April 2026` with the ACIS blue logo
  - There should be **no** single card titled "Two Papers Accepted at IEEE FUZZ 2026 and SERA 2026".
- **A5.** There is **no** card titled "Three Papers Submitted to A* Venues". Instead, there are two May-2026 cards:
  - *"UADGE-FS Submitted to IEEE ICDM 2026 (A*)"*
  - *"TRUST-GFS Submitted to NeurIPS 2026 (A*)"*
- **A6.** The **Neurocrack** card uses the Neurocrack banner image (orange background with three students holding phones) — not a `picsum.photos` placeholder.
- **A7.** Card summaries are multi-line (2–4 lines of real copy), not the old 1-liner template.

### Research section
- **A8.** The Augusta University collaborative-research card reads exactly **`2025 – April 2026`** with status **`Completed`** (NOT `2025 – Early 2026`).

### Regression — Contact form (quick sanity check)
- **A9.** Loading the `#contact` section doesn't produce any console errors. Hero CV button still opens `/cv/Main_CV.pdf` in a new tab.
  *(Full Formspree wiring was already proven end-to-end in PR #7 — not re-verifying delivery.)*

## Out of scope
- Deleting stale remote branches — done after merge, does not affect runtime behavior.
- README rendering — GitHub's readme view; verified by opening the PR page in browser separately if needed.
- Formspree email delivery (user-only verification, already shipped + tested in PR #7).

## Evidence to collect
- One screenshot per major News card that changed (Aspire, SEU, FUZZ, SERA, ICDM, NeurIPS, Neurocrack) OR a continuous recording scrolling through the section.
- One screenshot of Research section with Augusta card.
- Continuous screen recording with annotations around A1–A8.
