# REBRAND AUDIT — old identity → new identity (2026-10-09)

Source of truth: `brand/shoghmoum-brand-kit/SHOGHMOUM_BRAND_FOR_AI.md` (v 2026-10-09).
Baseline: `origin/main` @ `0bebe4c` (= what www.shaghmoom.com serves today).

Every occurrence below was found by grep before any edit. Each row says what it becomes.
"→ gone" means the element is removed with no replacement (listed again in the report).

## 1. Colours

| File:line | Old | Becomes |
|---|---|---|
| `app/globals.css:13` | `--brand: #390027` aubergine | `--color-maroon: #441420` |
| `app/globals.css:14` | `--brand-deep: #2a001c` | → gone (one maroon only; no "deep" shade) |
| `app/globals.css:15` | `--brand-tint: #f6cdd6` | → gone |
| `app/globals.css:18` | `--ink: #390027` | maroon `#441420` (text on sand) |
| `app/globals.css:19` | `--bg: #fddde1` blush | sand `#E9EAD9` |
| `app/globals.css:20` | `--bg-alt: #f4f0e9` cream | → gone (two grounds only: maroon / sand) |
| `app/globals.css:21` | `--surface: #ffffff` | → gone (cards sit on the ground colour, outlined) |
| `app/globals.css:24-27` | `--muted #54595b`, `--faint #858c8c`, `--line*` | → gone (secondary text = ground ink; rules = ink at 85% per brand §9) |
| `app/globals.css:30` | `--accent: #a97b4a` bronze | terracotta `#814B41` (sand grounds only) / gold `#AA8302` (one highlight) |
| `app/[locale]/opengraph-image.tsx:14-15` | `#390027`, `#fddde1`, grid | → replaced by kit `06_web-assets/social/og-image-1200x630.png` |
| `app/not-found.tsx:19-35` | `#f6f2eb`, `#241e1e`, `#6b5f57`, `#6e3b3d` | sand / maroon |
| `components/ui/Button.tsx:22` | WhatsApp green `#1f7a52` / `#196244` | brand buttons (solid in text colour + ghost) |
| `public/brand/symbol.svg` | fill `#390027` | → deleted (old mark) |
| `public/brand/symbol-light.svg` | fill `#FDDDE1` | → deleted (old mark) |
| `app/icon.png`, `app/apple-icon.png` | old symbol on aubergine | kit favicon set |
| `public/images/about-structure.webp` + 8× `services/*-craft.webp` | stock photos **duotoned in old aubergine** | → removed (stock, old colour baked in; see §7) |
| `theme-color` | not set | `#441420` |
| manifest | none | kit `site.webmanifest` |

No `#6E3B3D/#532B2D/#F6F2EB/#EFE9DF/#8A7E76` remain outside `app/not-found.tsx`.

## 2. Fonts

| File:line | Old | Becomes |
|---|---|---|
| `app/[locale]/layout.tsx:3,18-40` | `next/font/google`: Markazi Text (display), Tajawal (body), Hanken Grotesk (Latin) | `next/font/local`: IBM Plex Sans Arabic 400/500/600/700 from `04_typography/fonts/` |
| `app/globals.css:52-53,84` | `--font-display` / Markazi comment, `.font-display` | → gone (one family, no display face) |
| `components/**` | `font-display` class (≈20 uses) | → removed; weight roles per brand §3 |

## 3. Lines

| File:line | Old | Becomes |
|---|---|---|
| `content/site.ts:13` | `brandLine: "وطن يُبنى"` | → **deleted** (internal only — never published) |
| `content/site.ts:14` | `brandLineLatin: "A Nation Built"` | → deleted |
| `lib/seo.ts:14` | `BRAND_LINE = "وطن يُبنى"` | → deleted |
| `lib/schema.ts:29` | JSON-LD `slogan: وطن يُبنى` | `slogan: «نبني الثقة قبل الجدران»` |
| `content/site.ts:64` | hero eyebrow = وطن يُبنى | «عين على ما غاب عن الورق» |
| `components/layout/Footer.tsx:30` | footer line وطن يُبنى | closing block: «نبني الثقة قبل الجدران» + «شغموم وقت اللزوم يجملك» |
| `components/sections/ClosingCta.tsx:26` | eyebrow وطن يُبنى | → removed |
| `app/[locale]/opengraph-image.tsx:54` | "A Nation Built" | → kit OG image |
| `content/images.ts:60` | note mentioning وطن يُبنى | updated note |
| `content/site.ts:72` | «ما لا يُرى... هو ما يصنع الفرق» (philosophy heading) | → replaced by «عين إضافية للمالك» + founding story (the tenth that was never drawn) |
| `content/site.ts:67` | hero subhead "…الانتباه لما لا يُرى" | rewritten to the name's meaning |
| `app/[locale]/page.tsx:25` | meta "نرصد ما لا يُرى…" | rewritten |
| `app/[locale]/methodology/page.tsx:26` | meta "رصد ما لا يُرى" | rewritten |
| `content/methodology.ts:12,22` | "ونرصد ما لا يُرى", stage "رصد ما لا يُرى" | rewritten ("ما غاب عن الورق") |
| `content/services.ts:49,95,142` | "بانتباهٍ لما لا يُرى", "خطأً لا يُرى", "«ما لا يُرى»" | rewritten |
| `content/projects.ts` `unseen` field + `ProjectCard.tsx:39`, `projects/[slug]/page.tsx:104`, `projects/page.tsx:42`, `FeaturedProjects.tsx:18` | label/heading «ما لا يُرى» | «ما غاب عن الورق» |
| `components/sections/Philosophy.tsx:7`, `lib/schema.ts:31` | comments / description | rewritten |
| `content/site.ts:124` | vision "أن نكون الخيار الأول في قطاع المقاولات" ("we are the best") | rewritten |
| `content/values.ts:15`, `content/services.ts:87` | "أعلى المعايير" (inflation) | rewritten |
| `content/methodology.ts`, `reviews/page.tsx` | «نبني الثقة كما نبني المساحات» (unapproved variant) | approved «نبني الثقة قبل الجدران» |

## 4. Naming

| File:line | Old | Becomes |
|---|---|---|
| `content/site.ts:12` | handle `@shoughmoum` | `@shoghmoum` |
| `content/site.ts:45` | `instagram.com/shoughmoum` | `https://www.instagram.com/shoghmoum` (+ `https://www.tiktok.com/@shoghmoum` in `sameAs`) |
| `content/services.ts:32`, `content/images.ts:32,53` | Latin "Shaghmoom" in comments | "Shoghmoum" (code comments only; never visible) |
| visible text / metadata | — | no Latin "Shaghmoom" found in visible text or metadata; «بن شغموم» not present |
| `SITE_URL`, canonicals, sitemap, `NEXT_PUBLIC_SITE_URL` | `shaghmoom.com` | **unchanged** (domain is an owner decision, §7) |
| package name `shaghmoom-web`, repo name | — | unchanged (not visible) |

## 5. Logo & web assets

| File | Old | Becomes |
|---|---|---|
| `components/ui/SymbolMark.tsx` | CSS-mask of the old "window/cube" symbol | → deleted |
| `components/layout/Logo.tsx` | old symbol + Markazi «شغموم» + Hanken SHOGHMOUM (re-typeset — forbidden) | kit SVGs only: Arabic wordmark (mobile), lockup (desktop); sand on maroon / maroon on sand |
| `app/globals.css:162-178` | `logo-anim-*` keyframes (logo "assembles") | → gone (logo is never animated/transformed) |
| `app/icon.png`, `app/apple-icon.png` | old | `public/favicon.ico`, `favicon.svg`, `favicon-16/32/48.png`, `apple-touch-icon-180.png`, `icon-192/512.png`, `icon-maskable-512.png`, `site.webmanifest` |
| `app/[locale]/opengraph-image.tsx` | generated card | `app/[locale]/opengraph-image.png` (kit) |
| `layout.tsx` `icons: { icon: "/favicon.ico" }` (file did not exist) | broken | full icon set + manifest + `themeColor` |

## 6. Graphic devices of the old skin

| File:line | Old | Becomes |
|---|---|---|
| `app/globals.css:134-141` `.blueprint` | uniform blueprint grid used as section texture | → gone. Measuring grid (`.sh-measure-grid`) only behind a drawing/diagram |
| `components/ui/Section.tsx:44`, `Hero.tsx:19,67,71`, `PageHeader.tsx:27`, `MediaFrame.tsx:52`, `contact/page.tsx:133` | `.blueprint` backgrounds | → removed |
| `app/globals.css:150-156` `.dotgrid`, `Philosophy.tsx:58` | dot-grid texture | → gone |
| `Hero.tsx:22` | blurred blush radial wash (`blur-3xl`) | → gone (flat exact-hex grounds) |
| `MediaFrame.tsx:47`, `ProjectCard.tsx:37`, `services/[slug]:105` | gradients over images / placeholders | → gone; nothing placed over imagery |
| `Hero.tsx` CoordinatePlate, `Philosophy.tsx` InspectionPlate | decorative plates (corner brackets, bronze dot) | → gone. Heavy corner brackets are a rejected device; replaced by a measured "tenth" diagram on the measuring grid |
| all components | `rounded-full/2xl/3xl/xl` (≈60 uses), `shadow-*`, `backdrop-blur` | 2px corners (`rounded-brand`), no shadows/blur on brand grounds |
| `Section` tones `bg/alt/deep/brand` | four grounds (blush, cream, deep, aubergine) | two grounds: `maroon` / `sand`, alternating |

## 7. Imagery

| File | Status | Becomes |
|---|---|---|
| `public/images/about-structure.webp` | Unsplash stock, aubergine duotone, About banner | → removed (page not empty without it; old colour baked in) |
| `public/images/services/{concrete-works,masonry,waterproofing,stairs-tanks,plastering,painting,carpentry,site-finishes}-craft.webp` | Unsplash stock, aubergine duotone | → removed (service pages have full text; stock implies false ownership) |
| `public/images/services/{plumbing,hvac,finishing}-clean.webp` | the owner's own work photos (Haraj), natural colour | **kept**; overlay gradient + caption moved off the image |
| `public/images/services/_flagged/`, `originals/` | backups, not referenced | kept in repo, not referenced |
| project covers/galleries | placeholders (`ready:false`) | kept gated; placeholder re-skinned flat |

## 8. Things the brief expected that do not exist in this codebase

- Stats counters, a sticky WhatsApp button and a scroll-to-top button: **none exist** on `main`. Nothing to re-skin; nothing invented.
- The quote form is a single-step form (`ContactForm.tsx`), not multi-step. Re-skinned as is.
- No Supabase schema changes (none needed).

## 9. Section ground walk (before)

Home: hero blush · Philosophy cream · Services blush · Projects cream · Methodology deep aubergine · Reviews blush · Closing aubergine · Footer deep aubergine — **Closing→Footer are two dark blocks in a row**; four different grounds in use.
Inner pages: PageHeader cream → first section blush/cream alternation → ClosingCta aubergine → Footer deep aubergine (same error on every page).
