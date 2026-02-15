# Design Update Instructions - Round 2

## What needs to change
The current site is too plain/boring. We need more visual richness inspired by the Figma "Corevia" template.

## Key Visual Changes Required

### 1. HERO SECTION - Much more visual impact
- Add a **dashboard/laptop mockup image** on the right side of the hero (use Unsplash: developer team working, or a code editor screenshot)
- Use Unsplash images: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800` (team collaboration)
- Add **decorative geometric shapes** floating in the background (circles, dots pattern, subtle gradients)
- Add a subtle **gradient overlay** on the dark hero background (dark teal to slightly lighter)
- Add **glowing dot/blob decorations** (CSS radial gradients) in accent colors behind the hero content
- Make the hero feel more spacious and premium

### 2. BACKGROUNDS - More variety and texture
- Use **warm cream/off-white (#faf9f6)** as the primary background instead of pure white
- Alternate between **cream** and **very light gray (#f5f6f8)** sections
- Add subtle **dot grid patterns** or **noise textures** using CSS
- Some sections should have a very subtle background image (blurred, low opacity)

### 3. PHOTOGRAPHY - Use Unsplash images strategically
Use these Unsplash images (all free to use):

**Hero/About:**
- Team working: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80`
- Developer coding: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80`

**Benefits/Features cards:**
- Video call/meeting: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80`
- Code on screen: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80`

**Process section:**
- Handshake/partnership: `https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80`

**Testimonials:**
- Use avatar placeholder images from `https://randomuser.me/api/portraits/men/32.jpg` etc.

**About section:**
- Office/workspace: `https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80`

### 4. DECORATIVE ELEMENTS (CSS-only)
- **Floating circles**: Large, semi-transparent colored circles (10-20% opacity) positioned behind sections
- **Gradient blobs**: Use CSS radial-gradient for soft colored blobs in background
- **Grid dots pattern**: Subtle dot grid using CSS background-image repeating pattern
- **Accent lines**: Thin colored lines or borders as section dividers
- **Icon backgrounds**: Colored circles behind section icons

Example CSS for decorative blob:
```css
.decoration-blob {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,84,249,0.08) 0%, transparent 70%);
  pointer-events: none;
}
```

Example CSS for dot pattern:
```css
.dot-pattern {
  background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### 5. CARD DESIGNS - More refined
- Cards should have **very subtle borders** (#e5e7eb) instead of heavy shadows
- Add **hover states** that show a colored top-border or left-border
- Some cards should include **small images or icons** with colored backgrounds
- Pricing cards: highlighted card should have the primary dark color as background with white text

### 6. STATS SECTION - More visual
- Add a **gradient background** (dark teal)
- Include **animated counter numbers** that are larger and bolder
- Add subtle **icon graphics** next to each stat
- Use a **full-width dark section** with light text

### 7. TESTIMONIALS - With photos
- Use **real-looking avatar photos** from randomuser.me
- Add **company logos** (use simple text-based logos or SVG placeholders)
- Style as quote cards with photo, name, role, company
- Add **star ratings** (5 stars) above quotes

### 8. CTA SECTION - More dramatic
- Use a **full-bleed image background** with dark overlay
- Or a **gradient background** from primary dark to accent blue
- Add **decorative sparkles or star icons**
- Make it feel like a premium call-to-action

### 9. GENERAL GSAP IMPROVEMENTS
- Keep the scroll-triggered animations but make initial state visible (don't start at opacity 0, start at opacity 0.3 or use clip-path reveals instead)
- Add **parallax** on background images
- Add **smooth number counting** on stats
- Stagger card reveals more dramatically

### 10. TYPOGRAPHY IMPROVEMENTS
- Hero headline should be larger (64-80px on desktop)
- Use **font-weight variations** more (light for subtitles, bold for headings)
- Add **highlighted words** in headings with accent color or underline decoration
