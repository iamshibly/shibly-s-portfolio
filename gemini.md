# Gemini Project Guidelines

## Project Identity

### Core Goal
Build a **premium researcher portfolio website** for **Md. Zubayer Ahmad Shibly** that feels modern, dynamic, and high-end, while remaining stable, readable, and easy to maintain.

### Primary Reference
Use the uploaded/reference portfolio HTML as the **structural inspiration**, not as a 100% copy. The final portfolio must feel inspired by that reference, but must have its **own identity, typography, color placement, spacing, and interaction behavior**. fileciteturn16file0

### Owner Identity Rules
- Replace every occurrence of **Naimur Asif Borno** with **Md. Zubayer Ahmad Shibly**
- In the hero/title area, the name must render as:
  - **Md. Zubayer Ahmad**
  - **Shibly**
- Do **not** split the name into 3 or more rows
- Do **not** use BORNO branding anywhere in the final portfolio
- Use the uploaded site logo from:
  - **public/portfolio-assets/logo/logo.png**

## Project Philosophy

### Main Product Direction
This is a **full frontend rebuild**, not a patchwork continuation of older broken implementations.

### What the portfolio should feel like
- **Dark, premium, AI/research aesthetic**
- **Readable and stable first**
- **Visually polished and interactive**
- **Distinct from the BORNO reference**
- **Professional enough for PhD/research applications**
- **Showcase both research identity and frontend capability**

### What must never happen again
- **No disappearing sections**
- **No unreadable blur-hidden content**
- **No broken scroll logic**
- **No overlapping publication titles**
- **No sidebar-based shell**
- **No light mode**
- **No clunky or badly placed media panels**
- **No exact copycat of BORNO text colors and font usage**

## Architecture Rules

### Full Rebuild Rule
If the current implementation is unstable or difficult to rescue, the agent is allowed to **rebuild from zero**.

### Layout Rule
The site must use:
- **fixed top navigation**
- **full-width page shell**
- **vertically stacked sections**
- **dark background**
- **no left sidebar**

### Theme Rule
- **Dark mode only**
- Remove all light mode toggle logic
- Remove all theme-switching code if not needed

### Component Structure
Keep the project clean and easy to understand.

#### Preferred folder structure
- `src/layout/`
- `src/sections/`
- `src/components/`
- `src/data/`
- `src/styles/`
- `src/hooks/`
- `src/lib/`
- `public/portfolio-assets/`

#### Cleanup permission
The agent has permission to:
- delete dead components
- delete obsolete sidebar/mobile nav code
- delete broken motion code
- delete stale experiments
- delete duplicate assets
- delete unused hooks
- delete unused styles
- delete unused folders

Do **not** preserve broken architecture just because it already exists.

## Asset Management Rules

### Single Root Asset Folder
All visual/media/demo assets must live under:

- **public/portfolio-assets/**

### Allowed subfolders
- `public/portfolio-assets/logo/`
- `public/portfolio-assets/images/`
- `public/portfolio-assets/collaborators/`
- `public/portfolio-assets/news/`
- `public/portfolio-assets/pdf/`
- `public/portfolio-assets/posters/`
- `public/portfolio-assets/video/`

### Asset rules
- No scattered assets across random folders
- Demo placeholders must also live inside this root
- Missing CV/PDF/image/video poster assets should use clean placeholders
- All placeholders should be easy to replace later

## Header and Navigation Rules

### Header behavior
The header has **two states**:

#### State 1: top of page
- minimal header
- logo visible
- section links hidden or reduced

#### State 2: after scrolling
- split navigation appears
- logo appears in the center
- left-side nav items:
  - Home
  - About
  - Education
  - Research
  - Publications
  - Projects
- right-side nav items:
  - Collaborators
  - Experience
  - Skills
  - Certifications
  - News
  - Contact

### Logo rule
Use the real uploaded logo file:
- `public/portfolio-assets/logo/logo.png`

### Nav style rule
- compact
- premium
- blurred dark background
- mono uppercase labels
- subtle underline/active indication
- no oversized bulky white navbar
- no sidebar remnants

## Required Section Order

The portfolio section order must be:

1. Home / Hero
2. About / Who I Am
3. Education
4. Research
5. Publications
6. Projects
7. Collaborators
8. Experience
9. Skills
10. Certifications and Awards
11. News & Updates
12. Contact

## Content Rules

### Hero / Home
- Name must be exactly:
  - **Md. Zubayer Ahmad**
  - **Shibly**
- Include short professional subtitle
- Include CTA row
- Include stats row
- Include scroll cue
- Include video launcher on the right side
- Video caption should be:
  - **Introduction Video**
  - or **Introduction About Myself**
  - or **Introduction About Me**
- Do **not** use “Research Presentation”

### About / Who I Am
- Two-column layout
- Left: text content
- Right: image panel
- No video in this section
- Support research tags and beyond-research tags if elegant
- Keep it clean and balanced

### Education
- Premium academic card layout
- Degree, institution, dates, GPA/meta badges
- No blank section zones
- No unreadable motion overlays

### Research
- Important visual section
- Use premium cards/tags/interest blocks
- Do **not** use the ignored animation-video backgrounds for now
- Let the research section feel strong using layout, typography, and background atmosphere

### Publications
- Must be robust and readable
- Serial numbers should not visually collide with titles
- Titles must wrap cleanly
- Authors / venue / badges / links must sit in separate safe rows
- No absolute-positioned text that risks overlap

### Projects
- Use clean project cards
- Show title, short description, stack tags, optional links

### Collaborators
- Add this section after Projects
- Use collaborator image cards
- On hover/focus, show:
  - collaborator name
  - collaborator title
  - optional institution
- Use demo images if real ones are missing

### Experience
- Section label:
  - **// Professional Experience**
- Section title:
  - **Industry Experience**
- Use polished cards
- Role, organization, dates, and description clearly separated

### Skills
- Strong but clean grouped skill system
- Bars and/or grouped tags
- Avoid clutter

### Certifications and Awards
- Full title must be:
  - **Certifications and Awards**
- Do **not** shorten it to “Certs & Awards”
- Include certifications and awards in a clean structured way

### News & Updates
- Add after Certifications and Awards
- Use demo data for now
- Demo examples can include:
  - degree completion
  - workshop completion
  - course completion
  - conference presentation
  - award received
- Must support:
  - image
  - title
  - short summary
  - date
  - priority/featured flag

### News behavior
- Auto-slide every **15 seconds**
- Loop infinitely
- User can move manually using:
  - arrows
  - drag with mouse
  - touch swipe
- A priority item may be shown first even if it is not the newest by date

### Contact
- Professional and clean
- Support:
  - contact links
  - social links
  - optional communication form
- No clutter

## Design Differentiation Rules

### Do not copy BORNO 100%
The reference can guide:
- structure
- rhythm
- motion tone
- layout discipline
- overall premium dark feel

But the final design must differ in:
- font choices
- color placement
- some title treatments
- card emphasis
- section styling
- personality

### Color strategy
Keep the current portfolio’s dark, bluish, greenish atmosphere, but improve it.

Use a refined palette such as:
- dark blue-black base
- cyan / sky-blue accents
- cool white
- soft greenish glow
- limited secondary accent colors

Avoid direct one-to-one duplication of BORNO’s exact pink/gold placement.

### Typography strategy
Use fonts that feel premium and modern, but not the exact same visual identity as BORNO if avoidable.

Typography must support:
- big hero heading
- strong section headings
- clean mono labels
- readable body text
- publication titles without collision

## Motion and Interaction Rules

### Global motion philosophy
Motion must enhance the site, not break it.

### Hard bans
- **No pin:true on whole sections**
- **No section-wide opacity: 0**
- **No permanent blur on readable content**
- **No large transforms that make sections vanish**
- **No iframe or motion inside navigation/sidebar areas**
- **No gimmick motion that hurts layout stability**

### Safe motion approach
Animate:
- children
- labels
- section titles
- cards
- paragraphs
- dividers
- stat counters
- hover states

Do not animate the entire section container in dangerous ways.

### Scroll behavior
The page must remain readable in both directions:
- scrolling down
- scrolling up

No content should only appear from one direction.

### Background motion
The background particles/geometric shapes should be improved:
- more glow
- more movement
- slightly faster motion
- mixed tiny stars and geometric points
- occasional comet / falling-star effect
- a falling-star effect can happen every 10–20 seconds

### Scroll cue
The scroll hint must feel alive:
- animated line
- flowing cue
- not just static “SCROLL”

## Data and Configuration Rules

### Use clean data files
Store real/demo content in `src/data/` instead of messy hardcoded JSX where possible.

### Suggested data files
- `profile.ts` or `profile.js`
- `hero.ts`
- `about.ts`
- `education.ts`
- `research.ts`
- `publications.ts`
- `projects.ts`
- `collaborators.ts`
- `experience.ts`
- `skills.ts`
- `certifications.ts`
- `news.ts`
- `contact.ts`

### Config-driven media
Keep these configurable:
- hero video URL
- about image path
- resume/CV path
- collaborator image paths
- news images
- logo path

## Responsive Rules

### Desktop
- premium spacious layout
- no awkward empty voids
- strong visual rhythm

### Tablet
- preserve hierarchy
- collapse grids cleanly
- keep header functional

### Mobile
- no sidebar fallback
- no broken header
- no overlapping text
- no cropped unreadable publication cards
- maintain readability above aesthetics

## Quality Standards

### Stability checklist
Before considering any implementation complete:
- all sections render
- no disappearing content
- no blurry hidden sections
- no overlapping titles
- nav links work
- header behaves correctly at top and after scroll
- logo renders correctly
- hero name renders in 2 lines only
- video launcher caption is correct
- collaborators section works
- news carousel loops and can be controlled manually
- build passes

### Visual quality checklist
- strong hierarchy
- balanced spacing
- no copycat feel
- polished background motion
- section titles feel intentional
- cards feel consistent
- dark premium atmosphere is preserved

## Agent Workflow Rules

### Working order
Agents should work in this order:
1. audit current code
2. clean broken architecture
3. fix structure and assets
4. rebuild shell/header
5. rebuild global theme
6. rebuild hero
7. rebuild about
8. rebuild education/research
9. rebuild publications/projects
10. add collaborators
11. rebuild experience/skills/certifications/news/contact
12. finish motion polish
13. final QA

### Reporting rule
After each major phase, report:
- files changed
- files deleted
- files created
- build status
- visible UI changes
- remaining issues

## Final Principle

### The most important rule
**Stability, readability, and professional polish are more important than flashy motion.**

### The second most important rule
**The portfolio should feel inspired by the reference, but clearly belong to Md. Zubayer Ahmad Shibly.**
