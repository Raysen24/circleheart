# Circle Heart Salad — Website

Interactive, 3D-animated single-page website for Circle Heart Salad (Makassar).
All menu content, prices, photos and the vector logo come from `MenuBook_CH_rev 4.pdf`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Live site

https://circleheart.id — deployed automatically by GitHub Actions from the `main` branch of github.com/Raysen24/circleheart (GitHub Pages, custom domain via `public/CNAME`). Every push to `main` redeploys in about two minutes.

## Build for production

```bash
npm run build
```

The static site is output to `dist/`. Upload that folder to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel, etc.).

## Project layout

| Path | What it is |
| --- | --- |
| `index.html` | Page structure: hero, story, menu, dressings, bowl builder, catering, visit, footer, dish modal |
| `src/style.css` | Brand styling (lime green / brick red / orange / yellow on off-white with the doodle pattern) |
| `src/data.js` | **All menu content.** Edit prices, ingredients, dressings, catering plans, phone number and addresses here |
| `src/scene.js` | Three.js photo-layer engine: the real bowl photo plus real ingredient cutouts placed in 3D space, exploded view with labels, builder stacking, dressing pour, floating ingredients, per-section poses |
| `src/ui.js` | Menu tabs and cards, modal, dressings strip, bowl builder, catering toggle, tilt cards, cursor |
| `src/main.js` | Boot sequence, smooth scroll (Lenis), GSAP ScrollTrigger animations, section to 3D pose mapping |
| `public/images/` | Food photos (WebP) extracted from the menu book, the vector `logo.svg`, doodle icons and `pattern.svg` |
| `public/images/cut/` | Transparent ingredient cutouts (corn, egg, salmon, shrimp, avocado, dressing cups…) cut from the menu photos. Drop in better studio cutouts with the same file names to upgrade the 3D look further |

## Editing content

* **Prices / ingredients / new dishes:** `src/data.js` → `SALADS`, `MEDIUM`, `SNACKS`, `EXTRAS`.
* **WhatsApp number:** `WHATSAPP` in `src/data.js` (international format, no `+`).
* **Instagram handle:** `INSTAGRAM` in `src/data.js`.
* **Outlet addresses / map links:** `LOCATIONS` in `src/data.js`.
* **Catering prices and notes:** `CATERING` in `src/data.js`.
* **Photos:** drop a new `.webp` into `public/images/` and reference its file name (without extension) in the `img` / `wrap` fields.

## Look & motion (inspired by the reference reels)

* Cinematic dark-green hero with a spotlight, drifting particles and giant type behind the product; the real bowl bursts its ingredients outward on load and on click.
* Hero dish switcher: tap All In, Supreme, Big Omega or Sawadee to swap the real bowl photo (and the order pill).
* Story: scroll-scrubbed or click-to-toggle exploded view with callout labels.
* Dressings and Build Your Bowl are dark glass-card sections; Catering is a bold yellow block; everything else stays on the light menu-book paper.
* Word-by-word heading reveals, Anton display headings, themed background crossfades per section.

## Interactions built in

* Persistent WebGL scene built from real photography: the actual Circle Heart bowl and real ingredient cutouts float in 3D space with soft shadows and parallax, re-posing as you scroll through every section and ending in a heart formation.
* Story section: the bowl explodes into its real layers (greens, carrot, corn, edamame, cabbage, cucumber, beef, egg, dressing) with callout labels, scrubbed by scroll.
* Drag the bowl to spin it, click it to toss the ingredients (hero and builder sections).
* Menu tabs with 3D-tilting cards; tap a card for the full ingredient list and a one-tap WhatsApp order.
* Pinned horizontal dressing strip; hovering a cup pours that dressing into the 3D bowl.
* "Build Your Bowl" configurator: bowl/wrap, meat, dressing and extra toppings stack real photos onto the bowl, pour the dressing, update the live price, then generate a WhatsApp order message.
* Catering plan toggle (Lunch & Dinner / Lunch or Dinner) and family package.
* Reduced-motion friendly, keyboard-closable modal, responsive down to phones.

## Photo sources

All bowls, ingredient layers and section photos now come from the client's studio shoots (Google Drive folders "New menu footage", "CIRCLE HEART 26 APRIL", "6 mei circle", "PHOTO PROMO CH", "no crop"), cut out with GrabCut, defringed, colour-graded (+warmth, +contrast, +saturation) and exported as WebP. Dressing cups still come from the menu book.

## Upgrading the ingredient photos

The cutouts in `public/images/cut/` were extracted automatically from the menu-book photos, so a few have soft edges.
For a flawless result, shoot each ingredient on a white background (top-down, soft light), remove the background,
and save over the same file names (`corn.webp`, `egg.webp`, `salmon.webp`, …). No code changes needed.
