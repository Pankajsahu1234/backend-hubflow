frontened- 
# Hubflow — Automation Landing Page

A production-quality marketing landing page for Hubflow, an AI-powered business automation platform (CRM, WhatsApp marketing, AI chatbots, workflow automation, HRMS, reporting).

Built with React + Vite + Tailwind CSS, styled to a premium SaaS standard (Stripe/Linear/Notion-tier), fully responsive, with dark/light mode and scroll-based animation.

## Tech Stack

- React 18 — UI library
- Vite — build tool / dev server
- React Router — routing (landing page + catch-all today; ready to grow)
- Tailwind CSS — utility-first styling, custom design tokens
- Framer Motion — scroll-triggered and micro-interaction animation
- Axios — HTTP client for the contact form
- Lucide React — icon set

## Getting Started

npm install
npm run dev


Visit `http://localhost:5173`





src/
 ── components/
    ── layout/       # Navbar, Footer, ThemeToggle — app shell
    ── ui/            # Button, Card, Badge, SectionHeading — shared primitives
    ── context/            # ThemeContext (dark/light mode)
    ── features/            # One folder per landing page section, each owning
                        its own component(s) + local logic
     ── hero/
     ── trusted-companies/
     ── features-grid/
     ── automation-workflow/
     ── dashboard-preview/
     ── pricing/
     ── testimonials/
     ── faq/
     ── contact/
 ── hooks/               
 ── lib/                 
 ── pages/                
 ── App.jsx               
 ── main.jsx               


### Why feature-based structure?

Each section of the page (Hero, Pricing, FAQ, etc.) is self-contained — its component(s) and any section-specific sub-components live together. This keeps the codebase scalable: adding a new section means adding a new folder, not hunting through a single massive `components/` directory. Shared, truly reusable pieces (Button, Card, Navbar) live separately in `components/`.

## Key Design Decisions

- Dark/light mode — implemented via React Context (`ThemeContext`) toggling a `dark` class on `<html>`, with the preference persisted to `localStorage` and defaulting to the OS `prefers-color-scheme`. Tailwind's `dark:` variant handles the rest — no per-component theme logic needed.

- Lazy loading — everything below the hero/trusted-companies fold is loaded via `React.lazy` + `Suspense`, keeping the initial JS bundle (and first paint) small, which matters for SEO and Core Web Vitals on a marketing page.

- Design tokens over hardcoded values — brand colors, spacing, and animation keyframes are all defined once in `tailwind.config.js` rather than scattered across components.

- Accessible by default — visible focus rings, `aria-label`/`aria-expanded` on interactive elements, semantic headings, and form fields with associated `<label>`s and error messaging.

- Content/logic separation — all copy (nav links, feature descriptions, pricing, FAQ, testimonials) lives in `lib/constants.js`, so updating content never requires touching component code.
