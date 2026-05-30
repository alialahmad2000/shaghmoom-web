# شغموم · Shaghmoom — الموقع الرسمي

الموقع الرسمي لـ **شركة شغموم للمقاولات العامة** — مقاول عظم وتشطيب في المدينة المنورة.

> The official website for Shaghmoom General Contracting. Built Arabic-first (RTL),
> engineered for local SEO, quiet and formal in tone. Brand line: **وطن يُبنى**.

---

## Stack

| | |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS `@theme` tokens, logical properties for RTL) |
| Motion | `motion` (Framer Motion) — restrained, reduced-motion aware |
| Data | Supabase (lead form → Postgres) |
| Fonts | self-hosted via `next/font/google` — Reem Kufi (display) + IBM Plex Sans Arabic (body) |
| Deploy | Vercel |
| i18n | locale-segmented (`app/[locale]/…`); **`ar` live**, `en` scaffolded |

---

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000  → redirects to /ar
```

```bash
npm run build   # production build (Turbopack)
npm run start   # serve the production build
npm run lint    # ESLint (flat config)
```

> The dev server redirects `/` → `/ar`. All routes live under `/ar/…`.

---

## Environment variables

Set these in `.env.local` (dev) and in the Vercel project settings (prod). See `.env.example`.

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | public | Canonical origin (e.g. `https://shaghmoom.sa`). Drives canonicals, sitemap, JSON-LD, OG URLs. **Set before launch.** |
| `NEXT_PUBLIC_SUPABASE_URL` | public | Supabase project URL. |
| `SUPABASE_SERVICE_ROLE_KEY` | **server-only** | Supabase service-role key. Used only in `app/api/lead/route.ts`. Never exposed to the client (`lib/supabase.ts` is `server-only`). |
| `NEXT_PUBLIC_WHATSAPP` | public | WhatsApp number, international format, no `+` (e.g. `966553346250`). |

Without the Supabase vars the site still builds and runs; the lead form returns a
clear "تواصل عبر واتساب" fallback (HTTP 503) instead of silently dropping leads.

---

## Supabase — lead form

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor. It creates the `leads` table with
   RLS enabled and **no public policies** — writes happen only via the server-side
   service-role key, so the table is closed to anon clients.
3. Put `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in your env.

`leads` columns: `id, created_at, name, phone, project_type, city, message, budget, source`.

The form (`/ar/contact`) validates client- and server-side, has a honeypot for bots,
and posts to `app/api/lead/route.ts`. No accounts, no payments — lead capture only.

---

## Project structure

```
app/
  [locale]/
    layout.tsx              # html lang/dir, fonts, header/footer, default metadata, org JSON-LD
    page.tsx                # الرئيسية (home)
    about/ methodology/ reviews/ contact/
    services/page.tsx       # خدماتنا overview
    services/[slug]/page.tsx# per-service SEO pages (15)
    projects/page.tsx       # أعمالنا (filterable)
    projects/[slug]/page.tsx# project detail
    opengraph-image.tsx     # generated brand share image
    not-found.tsx
  api/lead/route.ts         # POST → Supabase
  sitemap.ts  robots.ts  not-found.tsx
content/                    # ALL copy as typed data — single source of truth
  site.ts services.ts projects.ts reviews.ts values.ts methodology.ts images.ts
components/
  layout/ (Header, Footer, Logo)
  ui/ (Button, Section, SectionHeading, Reveal, MediaFrame, cards, icons, …)
  sections/ (Hero, Philosophy, ServicesSnapshot, FeaturedProjects, …)
lib/ (i18n.ts, seo.ts, schema.ts, supabase.ts)
proxy.ts                    # locale redirect (Next 16 middleware → proxy)
supabase/schema.sql
public/brand/  public/images/projects/
```

**All copy lives in `content/` — never hard-code text in components.** This keeps the
site easy to edit and ready to translate (the same files gain an `en` layer later).

---

## How to…

### …add a service (a new SEO landing page)
Append one object to `services` in **`content/services.ts`** (`slug`, `category`,
`title`, `seoTitle`, `metaTitle`, `metaDescription`, `intro`, `included[]`, `why`,
`keywords[]`). It is automatically: added to the services overview, statically
generated at `/ar/services/<slug>`, given `Service` + `BreadcrumbList` JSON-LD, and
listed in the sitemap. Keep the voice formal (see "Voice & brand" below).

### …add a project
Append one object to `projects` in **`content/projects.ts`**. Add photos to
`public/images/projects/<slug>-1.jpg`, `<slug>-2.jpg`, … and set each image's
`ready: true`. It appears in the gallery (with filters), gets a detail page, and is
added to the sitemap. The `unseen` field is the "ما لا يُرى" angle shown on the card
and detail page.

### …swap in real photos
Every image slot is documented in **`content/images.ts`** (path, recommended size,
aspect, what belongs there). Until a real photo exists, the UI renders a refined
placeholder (maroon/bone block + architectural grid + Arabic caption) — never a broken
image. Drop the file at the listed path and set `ready: true` in `content/projects.ts`.

### …add the official logo / brand colors
1. Place the logo at `public/brand/logo.svg` and swap the wordmark in
   `components/layout/Logo.tsx` for an `<Image>`.
2. **Sample the exact maroon** (and any other brand hex) from the real logo and update
   the color tokens at the top of **`app/globals.css`** (`--brand`, `--brand-deep`, …).
3. Add the credibility marks (منصة مقاول / SCA / Vision 2030) to `public/brand/`.
4. Optionally add a designed `public/brand/og-default.png` (1200×630).

### …launch English
Add `"en"` to `LOCALES` in `lib/i18n.ts`, add an English layer to the `content/` files,
and translate. Routing, hreflang, sitemap alternates, and metadata already account for it.

---

## Voice & brand (read before editing copy)

Formal Modern Standard Arabic. Confident, precise, calm. Short declarative sentences.
**Never** the loud classified-ad voice: no "٦٠٪ أقل!", no emojis, no exclamation spam,
no discount hype. Sell through evidence and precision, not adjectives. The whole site is
built around one idea: **ما لا يُرى... هو ما يصنع الفرق** — the ~10% of hidden detail that
separates an ordinary project from an exceptional one.

---

## SEO

- Every marketing page is statically generated (SSG) — no client-only primary content.
- Per-page unique Arabic `title`/`description`, canonical, hreflang (`ar` + `x-default`),
  Open Graph + Twitter cards.
- JSON-LD: `GeneralContractor`/`LocalBusiness` (site-wide), `Service` per service page,
  `BreadcrumbList` per page, `WebSite`. Conservative — no `aggregateRating` (no verified
  rating count yet).
- `sitemap.xml` (all pages + 15 services + projects, with locale alternates) and
  `robots.txt` generated.
- Local Arabic keywords woven into headings/copy/metadata, especially per-service pages.

---

## Accessibility & performance

- Semantic landmarks, correct heading hierarchy, skip link, visible focus states.
- Full keyboard navigation; `prefers-reduced-motion` honored (globally + per animation).
- WCAG AA contrast on the brand palette; Arabic `alt` text on imagery.
- `next/image` with explicit sizes, lazy-loading below the fold, `priority` on heroes.
- Self-hosted fonts (`display: swap`), restrained JS, RTL-correct throughout.

---

## Deploy (Vercel)

1. Push to Git and import into Vercel.
2. Add the four env vars (above) for Production (and Preview).
3. Deploy. Build command `next build`, output is the default `.next`.
4. Point the domain and set `NEXT_PUBLIC_SITE_URL` to the live origin.
