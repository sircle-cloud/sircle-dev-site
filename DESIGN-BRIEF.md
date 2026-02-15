# Sircle.dev Website Design Brief

## Brand: Sircle.dev
**Tagline:** "Expand your dev team in weeks, not months"
**Business:** Developer outsourcing agency — dedicated developers for Dutch companies

## Design Direction (from Figma template "Corevia")

### Color Palette
- **Primary Dark:** #142828 (deep dark teal/green - for hero sections, dark cards, navbar)
- **Primary Accent:** #0054f9 (vibrant blue - for CTAs, links, highlights) 
- **Secondary Accent:** #eb5729 (orange-red - for secondary highlights, urgency)
- **Warm Accent:** #ffa710 (amber/gold - for decorative highlights, badges)
- **Light Backgrounds:** #f3f4f7, #eeefef, #f3f3f3 (light gray sections)
- **White:** #ffffff (main background)
- **Dark Text:** #131313, #23262f (headings)
- **Gray Text:** #565656, #575757 (body copy)
- **Light border/divider:** #e6e6e6, #d9d9d9
- **Soft green accent:** #cdeed3 (tags, badges)

### Typography
- **Headings:** Bricolage Grotesque (sizes 36-72px, weight 400)
- **Body/Navigation:** Nacelle or Inter (sizes 14-20px, weights 400-500)
- **Small text:** Plus Jakarta Sans (12-16px)
- Import from Google Fonts

### Visual Style
- Clean, modern, professional SaaS aesthetic
- Soft rounded corners (8-16px border-radius)
- Subtle shadows and depth
- Cards with white/cream backgrounds on light gray sections
- Dark hero section with gradient overlay
- Ample whitespace and breathing room
- Section padding: 80-120px vertical
- Max container width: 1200px

### UI Patterns from Figma
- **Navbar:** Dark background, logo left, nav links center, CTA button right
- **Hero:** Large headline with highlighted word (underline/color accent), subtitle, CTA button, hero image/illustration
- **About/Benefits:** Two-column layout, text left + visual right (or vice versa)
- **Features:** Icon + title + description cards in grid (3 columns)
- **Core Features:** Numbered features (01, 02, 03...) with descriptions
- **Pricing:** 3 pricing cards side by side, middle one highlighted
- **Testimonials:** Quote cards with avatar, name, company
- **CTA Section:** Full-width dark background with centered text + button
- **Footer:** Multi-column with links, logo, social icons

### GSAP Animations (Webflow-feel)
- **Scroll-triggered fade-in-up** for sections (staggered)
- **Counter animations** for numbers/stats
- **Parallax** on hero background
- **Smooth reveal** on cards (stagger effect)
- **Navbar background** changes on scroll (transparent → solid)
- **Hover effects** on buttons and cards (scale, shadow)
- **Text reveal** animation on headlines
- **Smooth scrolling** between sections

## Content (from Business Plan)

### Hero Section
- Headline: "Expand your dev team in weeks, not months"
- Subheadline: "Dedicated developers voor Nederlandse bedrijven. Geïntegreerd in jouw team, onder Nederlands management. Vanaf €5.500/maand."
- CTA: "Plan een gesprek" / "Bekijk developers"

### About Section
- How Sircle.dev works: matching in 2 weeks
- Dutch management, international efficiency  
- Partnership with 100+ developers
- Integration in client's workflow (Slack, Git, standups)

### Benefits/Why Section
- 40-60% goedkoper dan lokale hires
- Developer start binnen 2 weken
- Maandelijks opzegbaar
- Nederlands projectmanagement
- Vetted & pre-screened developers
- AI-augmented development (2-3x productivity)

### Process Section (numbered steps)
1. Tell us what you need — Book a call, discuss requirements
2. Meet your developers (within 2 weeks) — Video calls, technical assessment
3. Start building — Onboarding, setup, daily standups

### Core Features / Services
- Full-stack development (React, Node.js, Python)
- Mobile development (Flutter, React Native)
- DevOps & Cloud (AWS, GCP, Docker, K8s)
- UI/UX Design & Frontend
- API Development & Integrations
- AI & Machine Learning

### Pricing Section
**STARTER — €5.500/maand**
- 1 dedicated developer
- Full-time (40h/week)
- Daily standups
- Weekly progress updates

**GROWTH — €9.500/maand**
- 2 dedicated developers
- Team collaboration
- Sprint planning & retrospectives
- Bi-weekly demos

**ENTERPRISE — vanaf €13.500/maand**
- Custom team (3-5+ developers)
- Includes tech lead
- Architecture support
- Priority support

### Stats Section
- 100+ Developers beschikbaar
- < 2 weken opstarttijd
- 60-85% kostenvoordeel
- 90%+ klant retentie

### Testimonials
(Use placeholder testimonials for now — will be replaced)

### Technologies Section
React, Python, Node.js, AWS, Google Cloud, Django, Vue, PostgreSQL, Flutter, TypeScript, Docker, Kubernetes, MongoDB, Redis

### CTA Section
- "Klaar om je team uit te breiden?"
- "Plan een gratis kennismakingsgesprek"
- Button: "Neem contact op"

### Footer
- Sircle.dev logo
- Links: Home, Services, Pricing, Over ons, Contact
- Contact: hello@sircle.dev, +31 85 212 91 45
- Address: Zwaardstraat 16, 2584 TX Den Haag
- Part of SIRCLE holding (sircle.agency)

## Tech Stack
- Next.js 15 (React)
- Tailwind CSS 
- GSAP (ScrollTrigger)
- TypeScript
- Deploy ready for Vercel/GitHub Pages
