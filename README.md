# Convivium - Linda Marie Luna

A personal website for artist and musician Linda Marie Luna, featuring music, resources, blog, and mailing list integration.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) with your browser to see the result.

## What's Built (Phase 1 - MVP)

### Homepage Components

1. **Navigation** - Fixed header with links to all future pages (responsive mobile menu)
2. **Hero Section** - Full-screen landing with desert landscape background and Convivium meaning
3. **About Section** - Artist introduction with portrait image (left) and bio text (right)
4. **Music Section** - 3 song link cards with hover effects (ready for SoundCloud/Bandcamp links)
5. **Contact Form** - Mailing list signup (prepared for Mailchimp integration)
6. **Footer** - Simple footer with copyright

## Design System

### Color Palette
Desert-inspired colors from landscape photos:
- **Primary**: Terracotta, Rust, Burnt Orange
- **Secondary**: Sky Blue, Soft Lavender
- **Accent**: Sage Green, Warm Sand
- **Neutral**: Cream, Soft White

All colors defined in `src/app/globals.css`

### Visual Style
- Clean and minimal with generous whitespace
- Organic shapes and soft rounded corners
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)

## Next Steps

### Content Updates Needed
1. Replace hero image with video when available
2. Update About section portrait image
3. Add real song titles, platforms, and links
4. Update bio text
5. Add logo when ready

### Technical Integration
**Mailchimp Setup**:
- Create Mailchimp account/list
- Add API keys to `.env.local`
- Create API route at `src/app/api/subscribe/route.js`
- See TODO comment in `src/components/forms/ContactForm.js`

### Future Pages (Phase 2)
- `/music` - Full music page with players and videos
- `/elements` - Elements page
- `/resources` - External links
- `/blog` - Blog functionality

## Project Structure

```
src/
  app/
    layout.js           # Root layout with Navigation
    page.js             # Homepage
    globals.css         # Global styles + color palette
  components/
    navigation/Navigation.js
    sections/Hero.js, About.js, Music.js
    forms/ContactForm.js
    Footer.js
public/
  images/              # 25 desert landscape photos
```

## Technologies

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Geist Sans & Geist Mono fonts
- Ready for Vercel deployment

## Important Files

- **CLAUDE.md** - Complete project documentation (vision, design decisions, architecture)
- **globals.css** - Color palette and theme configuration

## Deploy on Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
