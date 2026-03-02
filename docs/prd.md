# Premium Portfolio Website Requirements Document

## Application Overview

**Application Name:** Premium Portfolio

**Application Description:** A single-page personal portfolio website for a funded startup founder, featuring a premium, restrained, high-contrast design with lime accents and intentional minimalism, with a floating black pill-shaped navigation bar and subtle 3D animated background element.

## Design System Specifications

### Color Palette
- Base background: #F8F9F6
- Dark section background: #0E0E12
- Primary accent (lime): #B6FF00
- Secondary accent glow: #8BFFB0
- Primary text: #111111
- Secondary text: #4A4A4A
- Divider/subtle line: #EAEAEA
- Card glass overlay: rgba(255,255,255,0.7)
- Card dark overlay: rgba(255,255,255,0.04)

### Grid System
- 12-column grid layout
- Desktop gutter: 24px
- Tablet gutter: 16px
- Mobile gutter: 8px
- All content must align to grid
- Use defined spacing scale only
- Text blocks must snap to grid boundaries

### Spacing System
- Section vertical padding: 120px desktop / 80px mobile
- Container max-width: 1200px
- Side padding: 80px desktop / 24px mobile
- Border radius (cards): 20px
- Button radius: 10px
- Base spacing scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 120px

### Typography
- Heading font: Clash Display or Satoshi
- Body font: Inter
- Hero heading: 72px desktop / 40px mobile; line-height: 1.1; max-width: 900px
- Section heading: 44px desktop / 28px mobile
- Body: 18px desktop / 15px mobile; line-height: 1.7
- Highlight pill: background #111111, text #B6FF00, padding 6px 14px, radius 8px
- Name label: 14px uppercase, letter-spacing: 2px, secondary text color

### Elevation System (Shadow Tokens)
- Elevation 1: 0 10px 30px rgba(0,0,0,0.05)
- Elevation 2: 0 15px 40px rgba(0,0,0,0.06)
- Hover Elevation: 0 20px 60px rgba(182,255,0,0.15)

### Z-Index Layering System
- 3D background canvas: z-index -1
- Hero background glows: z-index 0
- Decorative blob: z-index 1
- Main content: z-index 2
- Sticky navbar: z-index 1000
- Modal overlays: z-index 2000

### Animation System
- Default transition: 0.3s ease
- Max duration: 0.6s
- Intersection fade-up: transform translateY(40px → 0), opacity 0 → 1, duration 0.6s, ease-out, stagger 0.1s for grids
- Hover effects: cards translateY(-8px), buttons scale(1.05)
- Glow shadow: 0 0 25px rgba(182,255,0,0.4)
- Floating shape: 8s loop with subtle translate/rotate
- Respect prefers-reduced-motion for accessibility
- No bounce effects or elastic easing
- Transform + shadow animate together

## 3D Background Animation System

### Implementation Approach
- Use Three.js for 3D rendering
- Full-screen canvas element positioned behind hero section
- Fixed positioning with z-index -1
- Canvas must not interfere with content interaction

### 3D Object Specifications
- Geometry: Low-poly icosahedron or sphere
- Surface material: Matte dark (#0E0E12 or very dark grey)
- Edge glow: Subtle lime (#B6FF00) at low opacity (0.15–0.25)
- No bright gradients
- No neon effects
- No reflections

### Lighting Setup
- Ambient light: Very subtle, low intensity (0.2–0.3)
- Directional light: Soft, positioned to create subtle depth
- Rim light: Lime accent (#B6FF00) at very low intensity for edge definition
- No sharp highlights
- No color-changing lights

### Animation Parameters
- Rotation speed: Very slow (0.001–0.003 radians per frame)
- Rotation axis: Y-axis primary
- Vertical float: translateY range ±15px
- Float duration: 8–12 seconds
- Easing: ease-in-out
- Loop: Infinite

### Parallax Effect
- Mouse move parallax: Maximum 5px shift
- Smooth interpolation
- Subtle depth perception
- No exaggerated perspective changes

### Performance Requirements
- Use requestAnimationFrame for smooth rendering
- Limit geometry complexity (low polygon count)
- Maintain 60 FPS target
- Optimize for mobile devices
- Implement proper cleanup on unmount

### Accessibility Compliance
- Detect prefers-reduced-motion media query
- When enabled: Stop or significantly reduce animation
- Fallback: Static or minimal movement state

### Visual Constraints
- Lime glow coverage: Maximum 10–15% of viewport
- No full bright backgrounds
- No background color changes
- No flashing or flickering
- No fast motion
- Animation must feel calm and premium

### Aesthetic Guidelines
- Apple-style subtle motion
- Founder-level personal brand aesthetic
- Intelligent engineering feel
- NOT gaming/crypto/startup template style
- NOT animation showcase
- Must not distract from content

## Navigation System

### Floating Pill Navigation Bar

**Container Specifications:**
- Background: #0E0E12
- Height: 64px
- Border-radius: 999px (pill shape)
- Width: 92% of viewport
- Center aligned horizontally
- Margin-top: 24px
- Padding: 0 32px
- Position: sticky, top: 24px
- Z-index: 1000
- Box shadow (layered):
  - 0 4px 10px rgba(0,0,0,0.08)
  - 0 15px 40px rgba(0,0,0,0.18)

**Layout Structure:**
- Display: flex
- Justify-content: space-between
- Align-items: center

**Left Section:**
- Logo text (bold)
- Small lime dot accent (#B6FF00) positioned after logo
- Spacing: 8px between logo and dot

**Center Section:**
- Nav links: Home, About, Skills, Projects, Education, Contact
- Font size: 15px
- Letter spacing: 0.5px
- Font weight: medium
- Color: white
- Gap between links: 32px
- Display: flex with even spacing

**Right Section:**
- Work with me button
- Background: #B6FF00
- Text color: #111111
- Border-radius: 999px
- Padding: 10px 20px
- Font size: 15px
- Font weight: medium
- Action: Navigate to /work-with-me.html in same tab

**Interaction States:**

*Nav Links:*
- Default: white color
- Hover: lime underline animation (slide from left), 0.3s ease
- Active link: persistent lime underline

*Work with me Button:*
- Hover: Background becomes #111111, Text becomes #B6FF00
- Transition: 0.3s ease

**Scroll Behavior:**
- When scrolling:
  - Add backdrop-filter: blur(10px)
  - Add bottom border: 1px solid rgba(255,255,255,0.06)
  - Maintain sticky position

**Mobile Navigation:**
- Slide-out menu from right
- Background overlay: rgba(0,0,0,0.4)
- Fade-in: 0.3s ease
- Scroll locking enabled

### Navigation for Work With Me Page
- Navbar must remain consistent with homepage
- Work With Me should show active lime underline on /work-with-me.html page

## Section Requirements

### Section Rhythm Rules
- Alternate light/dark sections consistently
- Minimum 120px vertical spacing (desktop)
- Subtle divider: 1px solid #EAEAEA when needed
- Maintain consistent internal padding hierarchy

### Hero Section (100vh)
- Background: #F8F9F6 with two asymmetric radial lime glows
  - radial-gradient(circle at 30% 40%, rgba(182,255,0,0.35), transparent 45%)
  - radial-gradient(circle at 80% 70%, rgba(139,255,176,0.25), transparent 50%)
- 3D animated background canvas positioned behind all content (z-index -1)
- Two-column grid layout
- Left column:
  - Name label: 14px uppercase, letter-spacing 2px, secondary text color
  - Large headline (e.g., Engineering with Structure and Intent), max-width 900px
  - Highlight word Structure with lime pill style
  - **Hero Identity Block (positioned below main heading):**
    - Line 1: Small uppercase label FOUNDER & ENGINEER
      - Font size: 14px
      - Letter spacing: 2px
      - Color: #4A4A4A
    - Line 2: I am a
      - Font size: 28px desktop / 20px mobile
      - Color: #111111
    - Line 3: Dynamic role pill
      - Background: #111111
      - Text color: #B6FF00
      - Padding: 8px 22px
      - Border radius: 10px
      - Display: inline-block
      - Box shadow: 0 0 25px rgba(182,255,0,0.35)
      - Min width: 260px desktop / 200px mobile
      - Text aligned center
      - Roles array: Python Developer, Frontend Developer, Software Development Engineer, Problem Solver
      - Switch every 2.5 seconds
      - Animation: Fade out (opacity 1 → 0, translateY 8px, 0.4s ease), then fade in (opacity 0 → 1, translateY 0, 0.4s ease)
      - Loop infinitely
      - No typing cursor, no typewriter effect, no bounce, no excessive glow, no color change during switch
  - Short subtext paragraph, max-width 560px, margin-top 24px
  - **CTA buttons: gap 16px, margin-top 32px**
    - **Primary Button: Work With Me**
      - Background: #111111
      - Text color: #B6FF00
      - Border radius: 10px
      - Padding: 12px 28px
      - Hover: Background becomes #B6FF00, Text becomes #111111, Subtle glow: 0 0 20px rgba(182,255,0,0.3)
      - Transition: 0.3s ease
      - **Action: Navigate to /work-with-me.html in same tab**
    - **Secondary Button: View Resume**
      - Transparent background
      - Border: 1px solid #111111
      - Text color: #111111
      - Border radius: 10px
      - Padding: 12px 28px
      - Hover: Border color changes to #B6FF00, Subtle lime glow
      - Transition: 0.3s ease
      - **Action: Open Bharath_Chandra_Tadi_Resume.pdf in new tab**
- Right column: abstract soft black blob with lime glow outline, subtle floating animation (8s)

### About Section
- Light background (#F8F9F6)
- Centered glass card: rgba(255,255,255,0.7), blur 12px, radius 24px, shadow 0 20px 50px rgba(0,0,0,0.05)
- Two columns: left photo placeholder (rounded rectangle) with soft lime shadow; right: heading, structured paragraph, bullet strengths, subtle divider #EAEAEA

### Skills Section
- Dark background: #0E0E12
- Heading: white text with one lime-highlighted word
- Grid: 4 columns desktop / 2 columns tablet / 1 column mobile
- Skill card: background rgba(255,255,255,0.04), radius 20px, padding 30px, border 1px solid rgba(182,255,0,0.15)
- Include icon, skill name, optional short description
- Hover: glow border + stronger lime shadow + translateY(-6px)
- Optional animated skill bars on reveal

### Projects Section
- Light background (#F8F9F6)
- **Header: left title, right View GitHub link**
  - **GitHub link style:**
    - Text color: #111111
    - Hover: underline + lime accent
- Grid: 3 columns desktop / 2 columns tablet / 1 column mobile
- Card: white glass, radius 24px, padding 28px, shadow 0 15px 40px rgba(0,0,0,0.05)
- Content: project title, 2-line description, lime tech tag pills, GitHub + Live links
- Hover: translateY(-10px) + soft lime glow shadow
- Project image: aspect ratio 16:10, border radius 16px, subtle inner shadow, WebP/AVIF format
- Image hover: scale(1.02) + soft lime glow shadow

### Certifications Section
- Background: #F8F9F6
- Horizontal scroll or 3-column grid
- Badge: rounded, thin lime border, minimal text (certification name, issuer, year)
- Hover: slight lift + border glow

### Education Section
- Light background (#F8F9F6)
- Stacked cards (rounded 20px white background)
- Consistent spacing between entries
- Text styles for degree, college, CGPA, year

### Achievements Section
- Dark strip section (#0E0E12)
- Centered card
- Title + small subtitle + lime accent line below title

### Contact Section
- Light background (#F8F9F6)
- Large centered heading: Let's build something meaningful
- Rounded inputs with 1px #DDD border
- Focus state: lime outline (#B6FF00)
- Submit button: black base + lime border, hover → lime fill
- **Social row: Email | GitHub | LinkedIn**
  - **GitHub link style:**
    - Text color: #111111
    - Hover: underline + lime accent

### Footer
- Background: #0E0E12
- Top divider: 1px solid rgba(255,255,255,0.08)
- Padding: 80px vertical
- 3-column layout: Brand, Navigation, Social
- Minimal links
- Muted copyright text

## Work With Me Page (/work-with-me.html)

### Page Structure

**1) Hero Block (60vh)**

- Background: #F8F9F6 with same asymmetric radial lime glows as homepage
- Heading: Let's Build Structured, Scalable Systems.
  - Font size: 56px desktop / 36px mobile
  - Line height: 1.1
  - Max-width: 800px
  - Color: #111111
- Subtext: I focus on building performance-driven applications with clean architecture and scalable logic.
  - Font size: 18px desktop / 15px mobile
  - Line height: 1.7
  - Max-width: 560px
  - Color: #4A4A4A
  - Margin-top: 24px
- CTA buttons: gap 16px, margin-top 32px
  - **Primary Button: View Resume**
    - Background: #111111
    - Text color: #B6FF00
    - Border radius: 10px
    - Padding: 12px 28px
    - Hover: Background becomes #B6FF00, Text becomes #111111, Subtle glow: 0 0 20px rgba(182,255,0,0.3)
    - Transition: 0.3s ease
    - Action: Open Bharath_Chandra_Tadi_Resume.pdf in new tab
  - **Secondary Button: Email Me**
    - Transparent background
    - Border: 1px solid #111111
    - Text color: #111111
    - Border radius: 10px
    - Padding: 12px 28px
    - Hover: Border color changes to #B6FF00, Subtle lime glow
    - Transition: 0.3s ease
    - Action: Open email client

**2) What I Bring Section**

- Light background: #F8F9F6
- Section padding: 120px vertical desktop / 80px mobile
- Grid: 3 columns desktop / 1 column mobile
- Three value cards:
  - Card style: white glass, radius 24px, padding 32px, shadow 0 15px 40px rgba(0,0,0,0.05)
  - Hover: translateY(-8px) + soft lime glow shadow
  
  **Card 1: Structured Engineering**
  - Title: Structured Engineering (font size 24px, color #111111)
  - Bullet points:
    - Clean architecture
    - Maintainable code
    - Scalable systems
  
  **Card 2: Performance Focus**
  - Title: Performance Focus (font size 24px, color #111111)
  - Bullet points:
    - Optimized UI
    - Efficient logic
    - Reduced complexity
  
  **Card 3: Problem-Solving Mindset**
  - Title: Problem-Solving Mindset (font size 24px, color #111111)
  - Bullet points:
    - DSA-driven thinking
    - Logical debugging
    - Edge-case awareness

**3) Opportunities Section**

- Dark background: #0E0E12
- Section padding: 120px vertical desktop / 80px mobile
- Centered layout
- Title: Currently Open To
  - Font size: 44px desktop / 28px mobile
  - Color: #FFFFFF
  - Margin-bottom: 48px
- List items (centered, minimal):
  - SDE Internships
  - Frontend Developer Roles
  - Collaborative Tech Projects
  - Font size: 20px desktop / 16px mobile
  - Color: rgba(255,255,255,0.8)
  - Line height: 2

**4) Contact Block**

- Light background: #F8F9F6
- Section padding: 120px vertical desktop / 80px mobile
- Centered layout
- Social links: Email | GitHub | LinkedIn
  - Text color: #111111
  - Hover: underline + lime accent
  - Spacing between links: 32px

### Design Constraints for Work With Me Page

- Follow same color system as homepage
- Use same typography scale
- Maintain same spacing system
- Apply same button styles
- Use same card system
- Keep lime accent usage within 10–15%
- Maintain premium, restrained aesthetic
- Use same floating pill navigation bar
- No redesign
- No new color scheme
- No heavy animations

## Component Specifications

### Buttons
- Primary: black background (#111111), lime text (#B6FF00), radius 10px, hover flips colors with subtle glow
- Secondary: transparent background, 1px #111 border, radius 10px, hover changes border to lime
- Hover effect: scale(1.05)

### Cards
- Glass card: rgba(255,255,255,0.7), blur 12px, radius 24px
- Project card: white glass, radius 24px, padding 28px
- Skill card: rgba(255,255,255,0.04), radius 20px, padding 30px, lime border

### Form Inputs
- Rounded corners, 1px #DDD border
- Focus state: lime outline (#B6FF00)

### Badges/Pills
- Background #111111, text #B6FF00, padding 6px 14px, radius 8px

## Responsive Breakpoints
- Desktop: 1440px
- Tablet: 768px
- Mobile: 375px

## Accessibility Requirements
- Ensure WCAG AA color contrast compliance
- Visible keyboard focus states with lime glow
- Support prefers-reduced-motion preference
- Semantic HTML structure
- Meaningful alt text for images
- 3D animation must respect prefers-reduced-motion

## Performance Requirements
- Use next-gen image formats (WebP/AVIF)
- Implement lazy loading for offscreen images
- Minimize JavaScript bundle size
- Defer nonessential scripts
- Optimize Three.js rendering performance
- Maintain 60 FPS for 3D animation

## Design Constraints
- No pure white (#FFFFFF) or pure black (#000000)
- Lime accent limited to 10-15% of visible screen area
- No rainbow gradients or excessive color variety
- No student template visuals, gaming/crypto aesthetics, or flame/particles
- Premium, restrained, and intentionally minimal aesthetic
- No custom cursor
- No exaggerated motion
- No macOS traffic light dots
- No fake browser frame
- No glassmorphism on navigation
- No gradients on navigation
- No particles
- 3D background must be subtle and non-distracting

## Interaction Tone Rules
- Maintain premium, restrained aesthetic
- Lime accent limited to 10–15% of viewport
- No cluttered screenshots
- No heavy graphics
- 3D animation must feel calm and premium

## Optional Premium Enhancements
- Thin 3px lime scroll progress bar
- Modal project case study view with blur
- Dark mode toggle
- Smooth anchor scrolling

## Content Placeholders

### Hero Headlines (Examples)
- Engineering with Structure and Intent
- Building Products That Matter
- Founder. Engineer. Problem Solver.

### Subtext (Examples)
- Transforming complex challenges into elegant solutions through thoughtful design and precise execution
- Creating meaningful digital experiences that drive real business outcomes

### CTA Labels
- Primary: Work with me, View Resume
- Secondary: Email Me

### Tech Tags (Examples)
- React, TypeScript, Node.js, Python, AWS, Docker, GraphQL, PostgreSQL