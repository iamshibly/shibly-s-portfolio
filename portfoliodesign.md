# Portfolio Frontend Design Guidelines

## Design Identity

### Frontend Goal
Design a **premium dark researcher portfolio** for **Md. Zubayer Ahmad Shibly** that feels:
- elegant
- modern
- academic
- technical
- interactive
- memorable

The frontend should communicate:
- serious research capability
- technical sophistication
- polished web design skill
- readiness for PhD / research applications

### Reference Usage
Use the uploaded/reference portfolio structure as inspiration for:
- dark premium shell
- fixed header behavior
- large hero typography
- section rhythm
- stacked content hierarchy
- subtle motion language
- premium cards and tags

But do **not** recreate it 1:1. The final frontend must have its own design identity. fileciteturn16file0

## Global Visual Direction

### Color Mood
The website should use a dark, cool, high-end color system.

#### Base tones
- deep blue-black
- midnight navy
- dark cyan-tinted black
- low-contrast layered backgrounds

#### Accent tones
Use a mix of:
- sky blue
- cyan
- cool white
- soft greenish glow
- limited supporting accent colors

Avoid exact BORNO-style color placement.
Do not overuse pink/gold in the same way as the reference.

### Typography
Use a typography stack with three clear roles:
- **Display font** for hero and major section titles
- **Mono font** for labels, tags, metadata, nav
- **Body font** for paragraphs and readable descriptions

#### Typography behavior
- hero title must feel bold and premium
- section titles must feel distinct
- labels should look technical and intentional
- body copy must remain highly readable
- publication titles must have enough line-height and spacing to never collide

## Background and Atmosphere

### Background Layer
The page background should feel alive and technical.

#### Required background elements
- moving glowing particles
- small geometric connection lines
- tiny star-like elements
- some shapes brighter than others
- a soft animated atmospheric layer

#### Upgrades requested
- increase glow intensity
- increase motion slightly
- make some particles move faster
- add some star-shaped or comet-like elements
- show a subtle falling star / broken-star effect occasionally, for example every 10–20 seconds

### Noise and texture
A very soft texture/noise layer is allowed, but it must never hurt readability.

### Contrast rule
Even with the dynamic background, text and cards must remain readable at all times.

## Header / Navigation Design

### Header States

#### State 1: Initial / top of page
- minimal header
- logo visible
- section names hidden or very subtle
- premium transparent/dark blur

#### State 2: After user scrolls
The header transforms into a more informative navigation state.

### Scrolled header composition
- logo in the center
- left-side links:
  - Home
  - About
  - Education
  - Research
  - Publications
  - Projects
- right-side links:
  - Collaborators
  - Experience
  - Skills
  - Certifications
  - News
  - Contact

### Logo usage
Use:
- `public/portfolio-assets/logo/logo.png`

The logo should be visually clean, centered in the scrolled header, and easy to replace later if needed.

### Header style
- dark blurred background
- subtle bottom border
- mono uppercase or small-cap style links
- refined active-state treatment
- no giant white header
- no bulky nav
- no sidebar design

## Hero Design

### Layout
The hero should be a two-area composition:
- left: main identity and CTA content
- right: video launcher area

### Hero Name Layout
The hero name must appear exactly as:
- **Md. Zubayer Ahmad**
- **Shibly**

#### Hard rule
- first line = Md. Zubayer Ahmad
- second line = Shibly
- not 3 lines
- not 1 line if it breaks balance

### Hero content
Include:
- a compact top tag / identity label
- the 2-line name
- role/subtitle
- CTA buttons
- stat row
- animated scroll hint

### Video launcher
The right side of the hero must include a clean video launcher.

#### Video launcher requirements
- support YouTube or Google Drive link
- open in inline modal/lightbox/embed
- not clunky
- not oversized unless the design supports it
- premium minimal styling
- caption must be:
  - Introduction Video
  - or Introduction About Myself
  - or Introduction About Me

#### Forbidden caption
- Research Presentation

### Hero style notes
- the hero must be strong and memorable
- background motion can remain visible here
- content must always remain readable
- do not let the video panel force the hero name into 3 rows

## Section Design Rules

### About / Who I Am

#### Layout
Two-column design:
- left = text
- right = image panel

#### Left column
- label
- title
- about paragraphs
- optional micro contact items

#### Right column
- framed profile image
- optional small elegant interest groupings below or beside image

#### Important rules
- do not put the video here
- do not use the old broken intro card
- do not clutter with too many mini cards
- keep it elegant and calm

### Education

#### Style
- premium academic cards
- clear date and degree hierarchy
- institution name
- optional GPA or achievement metadata
- consistent spacing
- strong but not flashy design

#### Educational content must feel
- credible
- structured
- easy to scan
- aligned with research identity

### Research

#### Goal
The research section should feel like one of the most important sections on the site.

#### Content style
- research interests
- focus areas
- topic tags
- short supporting descriptions if needed

#### Visual rule
Since animation-video backgrounds are currently ignored, this section should instead feel strong through:
- layout
- typography
- background atmosphere
- card/tag style
- premium section title treatment

### Publications

#### Core rule
Publication content must be extremely stable and readable.

#### Card structure
Each publication card should support:
- serial number
- title
- authors
- venue
- year/status
- badges
- external links

#### Spacing rule
The serial number and title must not feel crammed together.
Increase spacing so they feel separate and intentional.

#### Technical styling rule
- title wraps safely
- authors do not collide with title
- venue sits below metadata cleanly
- links/badges remain below
- card height grows naturally with content
- no unsafe absolute positioning

### Projects

#### Layout
Use polished project cards.

#### Each project card can include
- title
- description
- tech stack tags
- repository/demo buttons
- optional poster or image

#### Style
Projects should feel:
- modern
- organized
- professional
- not overly playful

### Collaborators

#### Placement
After Publications.

#### Design requirement
Use collaborator cards inspired by the hover-gallery screenshot.

#### Card behavior
- image visible by default
- on hover/focus reveal:
  - name
  - role/title
  - institution if desired

#### Visual feel
- strong image-first section
- clear human/research network presentation
- minimal but elegant overlay treatment

### Professional Experience / Industry Experience

#### Required label and title
- label: **// Professional Experience**
- title: **Industry Experience**

#### Visual style
- premium cards
- clear date
- role
- organization
- supporting description
- no crowded blocks

#### Feel
The section should look like real professional work, not just a list of internships.

### Skills

#### Design goal
Show skill depth without clutter.

#### Recommended UI
- grouped skill system
- bars or progress visuals where meaningful
- supporting technology tags
- maybe grouped by:
  - programming
  - ML/AI
  - research
  - tools/platforms

#### Rule
Do not flood the screen with too many random pills.

### Certifications and Awards

#### Section title
Must be:
- **Certifications and Awards**

Not:
- Certs & Awards

#### Layout
The section should clearly separate:
- certifications
- awards / achievements

#### Suggested design
- certification cards
- award cards
- clean grid
- enough spacing between groups

### News & Updates

#### Placement
After Certifications and Awards.

#### Goal
Show recent activity and achievements in a visually accessible way.

#### Card structure
Each news item should support:
- image
- title
- summary
- date
- priority or featured status

#### Carousel behavior
- auto-slide every 15 seconds
- infinite loop
- manual left/right navigation
- drag with mouse
- swipe with touch
- featured item can appear first even if not newest by date

#### Visual rule
Unlike the old white design screenshot, the final News & Updates must match the current dark premium site palette.

#### Example demo content
- completed workshop
- completed course
- completed degree
- conference presentation
- received award
- organized event

### Contact

#### Layout
Use a clean, premium contact layout.

#### It may include
- contact details
- social links
- optional communication form
- maybe reference contacts if appropriate

#### Design rule
Keep it polished, not overloaded.

## Motion Design Rules

### Motion philosophy
Motion should feel refined, not disruptive.

### Do animate
- section labels
- titles
- card entry
- CTA hover
- button hover
- nav highlight
- stat count-up
- background particles
- scroll hint

### Do not animate dangerously
- whole sections with opacity 0 for long periods
- large blur filters on readable text
- full-page pinned sections
- transforms that push content permanently out of view
- motion layers covering active text/buttons

### Reveal strategy
Use safe reveal patterns:
- opacity + slight y movement on children
- staggered entry
- reverse-safe scroll behavior
- no content hidden depending on scroll direction

## Responsive Design Rules

### Desktop
- large premium hero
- balanced section widths
- generous spacing
- clean two-column sections where appropriate

### Tablet
- collapse gracefully
- keep hierarchy intact
- keep cards readable

### Mobile
- no sidebar fallback
- no giant empty areas
- no overlapping publications
- no broken collaborator hover logic
- no unreadable hero layout
- keep name readable
- keep video launcher usable

## Image and Media Rules

### Logo
Use:
- `public/portfolio-assets/logo/logo.png`

### Profile image
Use real image or placeholder in:
- `public/portfolio-assets/images/`

### Collaborators
Use real/demo collaborator images in:
- `public/portfolio-assets/collaborators/`

### News images
Use real/demo news images in:
- `public/portfolio-assets/news/`

### Documents / CV / PDFs
Keep under:
- `public/portfolio-assets/pdf/`

### Video posters or thumbnails
Keep under:
- `public/portfolio-assets/posters/`

## Design Consistency Rules

### Every section should share
- common spacing rhythm
- common card border language
- common accent logic
- common label system
- common dark surface treatment

### Every section should not feel identical
There should still be section-specific identity through:
- title style
- layout structure
- card format
- media usage
- density

## Frontend Acceptance Checklist

### Before the frontend is considered done
- hero name is 2 lines only
- logo.png is active in header
- no BORNO identity remains
- no Naimur Asif Borno remains
- publications spacing is fixed
- title “Industry Experience” is correct
- title “Certifications and Awards” is correct
- News & Updates section exists and works
- Collaborators section exists and works
- background particles glow more and move better
- falling star/comet effect exists
- scroll cue is improved
- no left sidebar
- no light mode
- no disappearing sections
- no blur-hidden content
- design feels original, not like a direct copy

## Final Frontend Principle

### The frontend must do three things at once
1. feel premium and visually memorable
2. stay readable and stable
3. represent **Md. Zubayer Ahmad Shibly**, not BORNO
