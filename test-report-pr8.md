# Test report — PR #8 (News rewrite + README + cleanup)

**Preview tested:** https://dist-gnixuqhq.devinapps.com
**PR:** https://github.com/iamshibly/shibly-s-portfolio/pull/8
**Session:** https://app.devin.ai/sessions/8971f012f6054948a2572d1e178107d9

## One-line summary
Cycled the News carousel through all 14 cards on the live preview and cross-checked the Research section — every assertion in the test plan passed, no placeholders, chronological order correct, date range parser works, Augusta date fix applied.

## Results

| # | Assertion | Result |
|---|---|---|
| A1 | Aspire card reads `August 2025` (not June 2025) | passed |
| A2 | Aspire card image is the red **Aspire Institute** wordmark (not hay-field placeholder) | passed |
| A3 | SEU / B.Sc. in CSE card shows the yellow SEU crest, dated `August 2022` | passed |
| A4 | FUZZ (Mar 2026, CORE B) and SERA (Apr 2026, CORE C) are two separate cards with different logos | passed |
| A5 | No "Three Papers Submitted to A* Venues" card — instead ICDM + NeurIPS as two May-2026 cards | passed |
| A6 | Neurocrack card uses the real Neurocrack banner (not picsum) | passed |
| A7 | Card summaries are multi-line with real context (Paper IDs, collaborators, venues) | passed |
| A8 | Augusta research card reads `2025 – April 2026 · Completed` | passed |
| A9 | No console errors loading News or Contact sections | passed |
| — | Date range parser correctly sorts "5 – 6 April 2025" and "6 – 11 July 2025" | passed |

## Evidence

### Augusta research fix (A8)

![Augusta card](https://app.devin.ai/attachments/f8549033-c075-4e0c-a269-95987adf2b54/screenshot_6be216f5fcbf477eb742fa768ce93b9e.png)

### SEU (Aug 2022) → USIP (Feb 2024) chronological order

![SEU → USIP](https://app.devin.ai/attachments/8a09063e-0299-452c-9618-bac95ac134b7/screenshot_b3c96c21d2ab4c649985db956bcb572d.png)

### Aspire (August 2025) with real red wordmark — + ICCCNT (6 – 11 July 2025) + Roots of Rise

![Aspire + ICCCNT](https://app.devin.ai/attachments/9edbcb7c-c99d-45b6-bed4-e926cd5024bc/screenshot_05763350558944aeb5d699753b2f3f4c.png)

### Harvard Hackathon (FEATURED, Jan 2026) + Neurocrack (FEATURED, Mar 2026) + FUZZ (Mar 2026)

![Featured cards](https://app.devin.ai/attachments/8f1c20f8-9b51-4e82-b46c-961907d210a8/screenshot_3c3afd182fca4f43a7afbafb36b87f25.png)

### FUZZ (Mar 2026, CORE B) ↔ SERA (Apr 2026, CORE C) split (A4) — two separate cards

![FUZZ + SERA](https://app.devin.ai/attachments/159744f6-2a38-4a62-9c0a-a63b4f84796a/screenshot_6b07b54a4b5049ebadadd511a9677fd0.png)

### ICDM + NeurIPS as two distinct May-2026 A\* cards (A5) — "two papers, not three"

![ICDM + NeurIPS](https://app.devin.ai/attachments/3b233071-01dc-481c-9767-e6117390e2b7/screenshot_6a5b84531eb5404da9dbd50fe83c0154.png)

### Focused FUZZ card copy

![FUZZ detail](https://app.devin.ai/attachments/9f6c2934-1b10-4851-9689-6d0368ba258c/screenshot_f591b90e83704dc0ba042756ad89784b.png)

## Full carousel order observed (oldest → newest)

| # | Date | Title | Image verified |
|---|---|---|---|
| 1 | August 2022 | Enrolled in B.Sc. in CSE at Southeast University | SEU crest |
| 2 | 8 February 2024 | Completed USIP "Peace Mediation Micro" | USIP cert |
| 3 | 5 – 6 April 2025 | Delegate at IMUN Online Conference 260.0 | IMUN cert |
| 4 | 6 – 11 July 2025 | Virtual Paper Presentation — IEEE ICCCNT 2025, IIT Indore | ICCCNT cert |
| 5 | August 2025 | Aspire Institute — Aspire Leaders Program 2025 | Aspire wordmark |
| 6 | September 2025 | Appointed Director of Project Management — Roots of Rise | RoR logo |
| 7 | 17 November 2025 | IEEE CS SEU SBC Workshop — LaTeX Unlocked | Workshop flyer |
| 8 | 26 December 2025 | IEEE CS SEU SBC Webinar — Programming Contest & Research | Webinar flyer |
| 9 | January 2026 | Top 22 of 650 — Harvard HSIL Hackathon 2026 **(FEATURED)** | Team group photo |
| 10 | March 2026 | Joined Neurocrack Technologies as AI Agent Developer Intern **(FEATURED)** | Neurocrack banner |
| 11 | March 2026 | Paper Accepted at IEEE FUZZ 2026 (Reims) — CORE B | FUZZ-IEEE logo |
| 12 | April 2026 | Paper Accepted at IEEE/ACIS SERA 2026 — CORE C | ACIS logo |
| 13 | May 2026 | UADGE-FS Submitted to IEEE ICDM 2026 (A*) | Neural Research logo |
| 14 | May 2026 | TRUST-GFS Submitted to NeurIPS 2026 (A*) | NeurIPS logo |

## Not tested
- Formspree email delivery (already proven end-to-end in PR #7).
- Stale remote branch deletion (happens after merge; doesn't affect runtime).
- GitHub README render on the repo landing page (visible on the PR page itself).
