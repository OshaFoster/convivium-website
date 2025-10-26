# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains App Router entries: `layout.js` wires fonts and navigation, `page.js` delivers the homepage, and future routes (e.g. `/music`, `/resources`) belong alongside them.
- Reusable UI lives in `src/components/` (`navigation/`, `sections/`, `forms/`); mirror that grouping when adding new pieces to keep imports predictable.
- Shared styling sits in `src/styles/colors.js` and `src/app/globals.css`; tweak palette tokens there instead of dropping raw hex values in components.
- Static media belongs in `public/`—hero assets already live in `public/images/`; use descriptive filenames because they surface as public URLs.

## Build, Test, and Development Commands
- `npm run dev` spins up the Turbopack dev server at `http://localhost:3000` with fast refresh.
- `npm run build` generates an optimized production bundle; run it before deploying to Vercel.
- `npm start` serves the production bundle locally for smoke-testing.
- `npm run lint` executes ESLint with the Next.js `core-web-vitals` config; treat warnings as blockers.

## Coding Style & Naming Conventions
- Stick with modern React function components; name components and files in `PascalCase` (`Hero.js`, `ContactForm.js`).
- Tailwind is the default styling surface—compose utilities inline, centralize any custom CSS in `globals.css`, and pull palette values from `colors`.
- Follow the two-space indentation and single-quote imports already in the codebase; ESLint will flag drift, so run `npm run lint` before you push.

## Testing Guidelines
- There is no automated suite yet; lean on `npm run lint` and manual walkthroughs on mobile and desktop breakpoints.
- New functionality (Mailchimp API route, blog tooling, etc.) should arrive with unit or integration tests and README notes explaining how to execute them.
- Pre-merge, verify form submissions, navigation links, and external embeds still work in a production run via `npm run build && npm start`.

## Commit & Pull Request Guidelines
- Write commit subjects in present tense under 72 characters (e.g., `Add elements section nav scaffold`) and keep the scope focused.
- Pull requests must include a plain-language summary, test notes, and screenshots or screen recordings for visual updates.
- Link to planning issues when available and call out environment variable changes (Mailchimp keys, etc.) in the description.

## Design & Navigation Notes
- Maintain the dual-navigation strategy: a fixed global menu for page routing plus optional on-page anchors for long-form sections (e.g., Elements subsections).
- Preserve the desert-inspired aesthetic by reusing homepage spacing, radii, and color tokens so future pages feel cohesive.
