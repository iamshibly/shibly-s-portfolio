# Test Plan — PR #5 (Skills/News/Profile v3)

## Scope
Verify the PR #5 changes render correctly on the live preview. One recorded end-to-end walkthrough covering all user-requested changes.

## Evidence-Based UI Paths
- Hero: `src/sections/HeroSection.tsx:60` renders `statusTag`; L123 renders `description`; L131–142 CTA row (View CV, ORCID, GitHub, LinkedIn).
- About: `src/sections/AboutSection.tsx` renders `aboutBio` + `hobbies`.
- Skills: `src/sections/SkillsSection.tsx:23` maps `skillGroups` in order.
- Certifications: `src/sections/CertificationsSection.tsx` maps `certifications`.
- News: `src/sections/NewsSection.tsx` maps `news`.
- Contact: `src/sections/ContactSection.tsx:89` contact-items include `personalInfo.email`; L104–107 social row with GitHub / LinkedIn / ORCID.

## Assertions

### Hero
- **A1 (statusTag)**: pulse dot text reads exactly `Open for Graduate Research Associate Opportunities — 2026`. A broken implementation would still show `PhD` or `Graduate RA`.
- **A2 (description)**: paragraph under the name contains the word `Federated Learning` and `Deep Learning`, `Transformers`, `Explainable AI`.
- **A3 (CTA row)**: 4 buttons in order — `View CV`, `ORCID`, `GitHub`, `LinkedIn`. No `Scholar` button.
- **A4 (View CV)**: clicking opens `/cv/Main_CV.pdf` in a new browser tab and the tab title matches a PDF; `<a>` element has `target="_blank"` and `download` attributes.

### About / Hobbies
- **A5 (aboutBio FL)**: second paragraph of about section contains `Federated Learning`.
- **A6 (hobbies)**: list shows exactly `Football`, `Traveling`, `Watching Movies`, `Animation`, `Manga`. No `Debating`, `Reading`, `Writing`, `Volunteering`.

### Skills
- **A7 (order)**: second card under "AI / ML Research" group is `Federated & Privacy-Preserving ML`, directly after `Deep Learning & Transformers`.
- **A8 (FL tags)**: Federated card displays all of `FedAvg`, `FedProx`, `Secure Aggregation`, `Differential Privacy`, `Non-IID`, `Self-Supervision`, `Interpretable`.
- **A9 (LLM/Agents group)**: new group titled `LLM / Agents` exists with tags including `LangChain`, `LangGraph`, `RAG`, `Chains`, `Output Parsers`.

### Certifications
- **A10**: page contains 5 certification entries. Neither `Webinar on Programming Contest & Research` nor `LaTeX Unlocked` appears anywhere in this section.

### News
- **A11**: Harvard HSIL Hackathon card is present with text matching `Top 22 of 650` and the group-photo image loads (HTTP 200).
- **A12**: Programming Contest webinar card (26 December 2025) present with Rajon Bardhan credit.
- **A13**: LaTeX Unlocked workshop card (17 November 2025) present with Maksuda Rabeya credit.

### Contact
- **A14 (email)**: Contact card shows `zubayer0ahmad@gmail.com`; mailto link href starts with `mailto:zubayer0ahmad@gmail.com`.
- **A15 (socials)**: 3 social icons — GitHub (`github.com/iamshibly`), LinkedIn (`linkedin.com/in/iamshibly`), ORCID (`orcid.org/0009-0001-0674-0240`). No Scholar.

## Method
Run `npm run dev` on the PR branch, open in Chrome, scroll each section, screenshot, inspect DOM for link attributes. Record one continuous video with annotations per section. Deploy `npm run build` output to devinapps as a public preview.
