# Test report — PR #6 (Publications overhaul, darker bg, View CV tab, project links)

**PR:** https://github.com/iamshibly/shibly-s-portfolio/pull/6
**Session:** https://app.devin.ai/sessions/8971f012f6054948a2572d1e178107d9
**Recording:** https://app.devin.ai/attachments/57aa964d-0acc-4404-910f-5b0926912182/rec-c0085e02-b1bf-4889-bb07-ec15319894a0-subtitled.mp4

## Summary

Single dev-server walkthrough of Publications filters + Hero View CV + Projects links + background feel. **All 6 primary assertions passed.** Found and fixed one stale-data bug in `heroStats` during testing (counts were still 3 Accepted / 7 Under Review from pre-PR-6 state — now 5 / 8 matching the new publication list).

## Results

| # | Test | Result |
| - | --- | --- |
| 1 | Hero stats sync with publications (5 / 8 / 3 / 1) | passed (after fix commit) |
| 2 | Domestic Conference tab populated with 2 ICCIT Bangladesh papers | passed |
| 3 | Under Review tab numbered 01–08 (not 06–13) with single status badge | passed |
| 4 | International Conference sorts Accepted first with CORE badges | passed |
| 5 | View CV opens PDF in new tab (no auto-download) | passed |
| 6 | Project Code/Demo links resolve to correct repos | passed |
| — | Background visibly near-black deep-space | passed (visual) |

## Evidence

### 1. Domestic Conference tab — previously empty, now 2 papers, numbered 01/02

![Domestic Conference populated](https://app.devin.ai/attachments/dc1fbffe-569f-4696-8940-e29b288b1f0f/screenshot_a8d2c01a208846bea7a47d31b85e573f.png)

Both papers: ICCIT 2025, Cox's Bazar, Bangladesh · Accepted · Domestic Conference.

### 2. Under Review tab — numbering restarts 01, with AVSS CORE B

| 01–04 | 05–08 |
| --- | --- |
| ![UR 01-04](https://app.devin.ai/attachments/460bfd55-6611-4b14-911c-fb9a0839b896/screenshot_e5c84e3b54734f75bbdf9243c970e7e8.png) | — |

Every card shows exactly **one** `UNDER REVIEW` badge (not two). `03 — IEEE AVSS 2026` includes a gold `CORE B` badge.

### 3. International Conference — Accepted first with CORE badges

![Intl Conf sort + CORE](https://app.devin.ai/attachments/1108b23b-e105-410f-aaca-a091eb4a6b25/screenshot_92323375520c4899ac9f0f577e063775.png)

`01 FUZZ 2026 — Accepted — CORE B`, `02 SERA 2026 — Accepted — CORE C`, `03 ICCCNT 2025 — Accepted` (no CORE), under-review rows follow.

### 4. View CV opens in a new tab (no download)

![CV inline viewer](https://app.devin.ai/attachments/0ec83087-430e-46c2-910a-dc798e50637f/screenshot_85142341efb0435fae5a90d78342f611.png)

Chrome tab title is `Main_CV.pdf`, the PDF viewer loads inline, and no "Download started" bar appears in the original tab. The built-in PDF viewer still has a download button for users who want it.

### 5. Hero stats synced after hot-fix

![Hero stats 5 / 8 / 3 / 1](https://app.devin.ai/attachments/06d9e56a-4127-403c-8b45-ec991ce84fa0/screenshot_ff7d88bcfaef43e68f5e368f14e32446.png)

`5 Accepted Papers · 8 Under Review · 3 Projects · 1 Rank in CSE`.

### 6. Project links resolve correctly (status bar on hover)

| MultiDx Code | MultiDx Live Demo | Arduino Code |
| --- | --- | --- |
| ![MultiDx Code](https://app.devin.ai/attachments/7d44f790-dd93-4b79-95ee-1c5df4d2d018/screenshot_6a2469e774084173996616b482cdd2a9.png) | ![MultiDx Demo](https://app.devin.ai/attachments/d32bde77-b4d1-44e9-a51d-871214d53eb4/screenshot_59b3693ef26b4ef588b0e32960e61447.png) | ![Arduino Code](https://app.devin.ai/attachments/23812c06-7701-4cf5-9435-716561c6bd91/screenshot_ca00abeb47a149b4a14fd53bafd63eb9.png) |
| `github.com/iamshibly/MultiDx` | `model.sayeedjoy.com` | `github.com/iamshibly/Arduino-Home-Security-…` |

AniMaze resolves to `github.com/iamshibly/AniMaze` (verified from status bar, not pictured).

### 7. Background darker "space-feel"

Hero renders against near-black `#04060d` body background (prior deploy used `#0b1220`). Visible across every screenshot above.

## Out of scope

- **Formspree delivery** — still blocked on the 8-char form ID. Contact form remains on the `mailto:` fallback.
- No functional regression tests on News, Certifications, Contact, Collaborators, Research Collaboration — only surveyed during scroll.
