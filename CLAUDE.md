# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Convivium, built with the App Router architecture, React 19, and Tailwind CSS v4.

**Artist:** Linda Marie Luna

**Site Name:** Convivium
- **Meaning:** A banquet, feast, or gathering that stems from the Latin for "living together"
- In modern usage: A communal meal or friendly gathering for fellowship and conversation, often with a focus on shared interests like faith, food, or study
- This meaning should be incorporated into the website

**Purpose:** Personal website for artist/musician showcasing music, resources, blog, and collecting mailing list subscribers.

**Deployment:** Vercel

## Product Vision & Roadmap

### Phase 1: MVP (Current Focus)
Build homepage/about page only with:

**Homepage Layout:**
1. **Hero Section**
   - Full-width landscape photo background (placeholder - will eventually be video)
   - Centered text overlay with site name and meaning
   - Organic curved bottom edge transition

2. **About Section**
   - Image left, text right
   - Medium text length bio
   - Generous spacing, soft rounded image
   - Placeholder image (Linda will provide final later)

3. **Music Section**
   - 3 song link cards (row on desktop, stacked on mobile)
   - Card design: placeholder image, song title, link to SoundCloud/Bandcamp
   - No thumbnails yet (placeholders)

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
Derived from desert landscape photos (defined in `src/app/globals.css`):
- **Primary:** Warm terracottas, burnt oranges, rust reds (desert rocks)
- **Secondary:** Sky blues, soft lavenders
- **Accent:** Sage greens, natural earth tones
- **Neutral:** Clean whites/creams for backgrounds and contrast
- Dark mode support via `prefers-color-scheme`
- CSS variables pattern: `--color-*` for Tailwind v4 compatibility

### Typography
- Primary: Geist Sans
- Monospace: Geist Mono (for code/technical content if needed)
- Large typography used as design element

### Branding
- Logo: Forthcoming (design with space/flexibility for future logo)
- Artist name: Linda Marie Luna
- Site name meaning should be incorporated into design

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

**Styling:** Tailwind CSS v4
- Configuration in `postcss.config.mjs` using `@tailwindcss/postcss` plugin
- Global styles and theme configuration in `src/app/globals.css`
- Uses CSS variables for theming with light/dark mode support
- Custom theme tokens defined with `@theme inline` directive

**Fonts:**
- Geist Sans and Geist Mono loaded via `next/font/google`
- Configured as CSS variables in root layout

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

## Tailwind CSS v4 Notes

This project uses Tailwind CSS v4, which has significant differences from v3:
- Import with `@import "tailwindcss"` in CSS (not v3's `@tailwind` directives)
- Theme customization uses `@theme` directive instead of `tailwind.config.js`
- PostCSS plugin is `@tailwindcss/postcss` (not `tailwindcss`)
- CSS variables should be defined in theme with `--color-*`, `--font-*` patterns
