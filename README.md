# PeerUp landing page (concept redesign)

Next.js 16 + Tailwind v4 + GSAP (ScrollTrigger) + Lenis smooth scroll. Type: Funnel Display (headings) + Inter (body), styled after imperialmilestone.com.

```bash
npm install
npm run dev   # http://localhost:3000
```

- `app/page.tsx` – all sections
- `components/Motion.tsx` – preloader, split-text reveals, parallax, counters, magnetic buttons, custom cursor
- `components/Modes.tsx` – pinned "four ways to practice" scroll story
- `components/Words.tsx` – pinned word sequence
- `components/CourseDemo.tsx` – typing course-builder demo
- `public/screens/` – cropped app screenshots
- Brand colours live in `app/globals.css` (`@theme`)

Respects `prefers-reduced-motion`; zoom is not disabled.
