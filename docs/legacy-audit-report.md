# Legacy Codebase Audit Report

## Scanned Files
- `Nishant Mendhe __ Stock Market Training Institute in Nagpur.html` (84KB, 960 lines)
- `Nishant Mendhe __ Stock Market Training Institute in Nagpur_files/` corresponding local directory containing CSS, JS, font assets, and static visuals.

## Removed Elements & Clutter
- Hardcoded inline styles and complex CSS declarations inside the `<head>`.
- Redundant nested divs that were purely used for layout composition (e.g. `feature__item-inner`, `accordion__item`, etc.).
- Excess custom animations via `aos.js` scripts and complex manual CSS `transform` declarations that negatively affect page rendering performance on mobile networks.
- Obsolete vendor script references (e.g. inline FontAwesome SVGs bloat).

## SEO Gaps
- Incomplete OpenGraph and Twitter meta tags. Missing explicit image scaling directives.
- Heavy reliance on inline styles instead of a structured modern utility CSS system.
- Many static images use non-descriptive numeric filenames assets (like `1.png`, `2(1).png`) rather than semantic naming (`stock-market-training.png`), and have generic `alt` tags. This reduces image SEO effectiveness.
- The single monolithic HTML page has bundled content without component separation causing semantic dilution.
- Schema.org data is basic (`Product` type) but could be expanded aggressively to include explicitly typed `Course` schema for the 8-week structured program context.

## Asset Inventory
- Approximately 21 image references, including `logo-white.png`, `nishant.jpg`, and generic number-based legacy file identifiers.
- External tracking links and destination CTAs corresponding to App Store, Play Store, Facebook, LinkedIn, Twitter, and YouTube handles.
- Localized dependencies: `bootstrap.min.css`, `aos.css`, `all.min.css`, `swiper-bundle.min.css`, `style.css`.
- Localized JS dependencies: `fslightbox.js`, `purecounter_vanilla.js`, `bootstrap.bundle.min.js`, `aos.js`.

## Rebuild Recommendations
- **Architecture**: Move away from a flat, monolithic HTML file context. Adopt a component-based structure in Next.js/React focusing on heavy reusability and isolated render trees (e.g., separating Header, Footer, Hero, Accordion, and Course sections into autonomous islands).
- **Styling Paradigm**: Replace the legacy CSS stack and manual nested declarations with a scalable, modern utility-first CSS framework (e.g., Tailwind CSS) coupled with standard global rules to drastically minimize the CSS transfer size footprint.
- **Data Management**: Decouple data from component layout logic strictly. Rely entirely on a centralized source of truth—the `content.json` file—to feed dynamic elements like Courses, Frequently Asked Questions, and core features arrays, to render them mapping efficiently.
- **SEO/Metadata Engine**: Shift to automated generic metadata injections using dynamic `<Head>` tag management targeting each route appropriately. Update Schema implementations toward distinct rich results.
- **Images & Compression**: Repatriate visual assets logically (e.g., to `/public/images/`) and perform rigorous SEO-friendly renaming conventions directly mapping contexts for optimal crawling (`hero-illustration.webp`, `rsi-indicator-concept.webp`). Transition the outputs to modern, heavily-compressed WebP implementations.
