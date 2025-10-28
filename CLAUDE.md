# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Convivium, built with the App Router architecture, React 19, and Tailwind CSS v4.

**Practitioner:** Marie (alternative spiritual teacher and practitioner)

**Site Name:** Pachamama Convivium
- **Pachamama:** The space of nurturance of life on planet Earth — the atmospheric and earthen elements that promote vitality
- **Convivium:** A geographically isolated population of a species that shows differentiation from other populations of the same species. In our case, it is our carefully co-created Sangha — a feast, a celebration, a consortium of conviviality and fellowship on Earth
- From Latin "living together" - a communal gathering for fellowship and conversation

**Purpose:** Personal website showcasing music/sound work, spiritual teachings, resources, blog, and collecting mailing list subscribers.

**Deployment:** Vercel

## Product Vision & Roadmap

### Phase 1: MVP (Current Focus)
Build homepage/about page only with:

**Homepage Layout:**
1. **Hero Section**
   - Full-width landscape photo background (IMG_1904.png)
   - Green title "Pachamama Convivium" in Oooh Baby font (#8bc785)
   - Definitions of Pachamama and Convivium prominently displayed
   - Organic curved bottom edge transition with coral stroke

2. **About Section**
   - Circular image left (bordered in gold), text right
   - Bio about Marie
   - Generous spacing, elegant layout

3. **Music Section**
   - 3 song cards with circular thumbnails
   - Hover effects and shadows
   - Links to music platforms (SoundCloud/Bandcamp)

4. **Contact Form**
   - End of page, centered
   - Mailchimp integration for mailing list
   - Fields: Name + Email
   - Clean, simple design

**Navigation:**
- Header with main nav (prepared for future pages: Home, Music, Elements, Resources, Blog)
- Navigation structure built with full site in mind

### Phase 2: Full Site
Planned pages (navigation structure should be built with these in mind):
1. **Home/About** - Landing page (Phase 1)
2. **Music** - SoundCloud/Bandcamp audio links + video thumbnails linking to Vimeo
3. **Elements** - Either dropdown submenu or single page with section navigation
4. **Resources** - Links to external products/websites
5. **Blog** - Blog functionality (future)
6. Additional page TBD (5-6 pages total)

### Design Philosophy
- **Beauty + Function:** Prioritize aesthetic design while maintaining usability
- **Scalability:** Build with full site structure in mind, even though starting with homepage only
- **Navigation Strategy:**
  - Main navigation for page-to-page routing
  - Individual pages can have section navigation (e.g., Elements page)
  - This dual-navigation approach is fully supported

## Design System

### Visual Style
**Aesthetic:** Clean, minimal with organic touches and visual interest
- Generous whitespace
- Soft rounded corners (organic, not sharp geometric)
- Asymmetric layouts for visual interest
- Flowing/curved section transitions
- Large typography as design element
- Photos with soft masks/organic edges

**Inspiration:** Desert landscape photography (see `public/images/`)
- Natural, organic, contemplative vibe
- Warm earth tones with cool sky accents

### Color Palette
Clean, elegant palette (defined in `tailwind.config.js`):
- **Gold:** #d4af37 (primary accent, borders, highlights)
- **Warm Cream:** #faf8f4 (main background)
- **Warm Beige:** #f5f1ea (section backgrounds)
- **Warm Tan:** #e8dfd3 (borders, subtle backgrounds)
- **Charcoal:** #262626 (dark backgrounds, scrolled nav)
- **Charcoal Border:** #333333 (dark mode borders)
- **Sky Blue:** Sky-400 (hover states, accents)
- **Coral/Rose:** #eb757f (SVG accents in hero)
- **Green:** #8bc785 (hero title color)

### Typography
- **Display (Headings):** Playfair Display (elegant serif)
- **Body:** Inter (clean sans-serif)
- **Decorative/Script:** Oooh Baby (hero title), Grey Qo
- Large typography used as design element throughout

### Branding
- Logo: LOGO.png (circular logo with gold border in navigation)
- Practitioner: Marie (alternative spiritual teacher)
- Site name: Pachamama Convivium (meanings prominently displayed in hero)

## Development Commands

**Development Server:**
```bash
npm run dev
```
Runs the development server with Turbopack at http://localhost:3000. Changes auto-reload.

**Build:**
```bash
npm run build
```
Creates production build with Turbopack.

**Production Server:**
```bash
npm start
```
Starts production server (must run build first).

**Linting:**
```bash
npm run lint
```
Runs ESLint with Next.js core-web-vitals config.

## Architecture

**Framework:** Next.js 15 with App Router
- Uses React Server Components by default
- File-based routing in `src/app/`
- Supports streaming and React Suspense

**Styling:** Tailwind CSS v3
- Configuration in `tailwind.config.js` (downgraded from v4 for stability)
- Global styles in `src/app/globals.css`
- Custom color palette defined in config
- Standard Tailwind v3 syntax with `@tailwind` directives

**Fonts:**
- Playfair Display, Inter, Grey Qo, and Oooh Baby loaded via `next/font/google`
- Configured as CSS variables in root layout (--font-display, --font-body, --font-grey-qo, --font-oooh-baby)

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in `jsconfig.json`)

## Project Structure

```
src/
  app/              # App Router pages and layouts
    layout.js       # Root layout with font configuration
    page.js         # Home page (about section)
    globals.css     # Global styles and Tailwind imports
  components/       # Reusable React components
    navigation/     # Main nav and section nav components
    forms/          # Contact form components
public/             # Static assets (images, etc.)
  images/           # Image assets
```

### Future Pages Structure (Phase 2)
```
src/app/
  music/page.js
  elements/page.js
  resources/page.js
  blog/page.js
```

## Technical Implementation Notes

### Navigation Architecture
- **Main Navigation:** Global component in root layout for page routing
- **Section Navigation:** Page-specific components for in-page navigation (anchors)
- Both navigation types can coexist - main nav in header, section nav can be sidebar/inline

### Mailchimp Integration
- Contact form will use Mailchimp API for mailing list signups
- Consider using Mailchimp embedded forms or API endpoint
- Store API keys in environment variables (`.env.local`)

### Media Integration
- **Audio:** Embed SoundCloud/Bandcamp players or direct links
- **Video:** Vimeo embed or thumbnail images linking to Vimeo
- Store placeholder images in `public/images/`

### Component Strategy
Build reusable components from the start:
- `<Navigation />` - Main site navigation
- `<SectionNav />` - In-page section navigation
- `<ContactForm />` - Mailchimp signup form
- `<SongCard />` / `<VideoCard />` - Media display components
- `<Hero />`, `<About />` - Homepage sections

## Key Conventions

- All application code lives in `src/`
- Use `.js` extension for React components (not `.jsx`)
- Metadata is exported from page/layout files for SEO
- ESLint ignores: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`

## Tailwind CSS Version History

**Current:** Tailwind CSS v3
- Project initially started with v4 but was downgraded to v3 for stability
- v4 had compatibility issues with Next.js 15 + Turbopack
- Uses standard `tailwind.config.js` for configuration
- Standard `@tailwind base/components/utilities` directives in globals.css

## Current Components

**Implemented:**
- `<Navigation />` - Fixed header with scroll effects, mobile menu, logo integration (src/components/navigation/Navigation.js)
- `<Logo />` - Circular logo component using LOGO.png image (src/components/Logo.js)
- `<Hero />` - Full-screen hero with background image and Pachamama/Convivium definitions (src/components/sections/Hero.js)
- `<About />` - About section with circular image and bio (src/components/sections/About.js)
- `<Music />` - Music cards with circular thumbnails (src/components/sections/Music.js)
- `<Testimonials />` - Testimonial cards with scroll animations (src/components/sections/Testimonials.js)
- `<ContactForm />` - Mailing list signup form prepared for Mailchimp (src/components/forms/ContactForm.js)
- `<Footer />` - Footer with social media links (Bandcamp, SoundCloud, Instagram) (src/components/Footer.js)
- `<ScrollReveal />` - Intersection Observer-based scroll animation wrapper (src/components/ScrollReveal.js)

## Technical Fixes Applied

1. **Build Errors Fixed:**
   - Unescaped quotes in Testimonials.js replaced with HTML entities (&ldquo;/&rdquo;)
   - React hooks warning in ScrollReveal.js fixed by copying ref.current to variable in useEffect

2. **Tailwind Migration:**
   - Downgraded from v4 to v3 for stability
   - Updated all import syntax and configuration structure

3. **Name Updates:**
   - Replaced all instances of "Linda Marie Luna" with "Marie" throughout codebase
