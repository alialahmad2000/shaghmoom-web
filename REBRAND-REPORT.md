# REBRAND REPORT — Shoghmoum new identity + «استمارة اللياسة»

**LIVE since 2026-10-11** on https://www.shaghmoom.com (branch `rebrand-2026-10` fast-forwarded into `main` on Ali's instruction; the old site is tagged `pre-rebrand-2026-10`). Brief: `shoghmoum-rebrand-and-plastering-form.md`. Brand source of truth: `brand/shoghmoum-brand-kit/` (v 2026-10-09).

## 0. Live status (2026-10-11)

- Published: `main` = the rebrand. Old site kept as git tag `pre-rebrand-2026-10` (`0bebe4c`) and as Vercel deployment `shaghmoom-ql8w8h028` (Instant Rollback target).
- Checked on production: all 29 sitemap pages return 200 and render with no console or network errors; no horizontal overflow at 375 / 768 / 1440; canonical `https://www.shaghmoom.com/ar`; `index, follow`; robots.txt and sitemap (29 URLs, form included) correct; OG image served.
- **Lighthouse on production, mobile:**

| Page | Performance (runs) | A11y | Best Pr. | SEO |
|---|---|---|---|---|
| Home `/ar` | 93 · 93 · 94 (old site: 95–99) | **100** (was 96) | **100** (was 96) | **100** |
| Plastering service | 100 · 94 · 94 | **100** | **100** | **100** |
| Form `/ar/plastering-form` | 98 · 86 · 86 · 88 · 88 (median **88**) | **100** | **100** | **100** |

- The form page misses the Performance ≥ 90 target (median 88). The earlier "~95 expected" was wrong. Cause is unchanged: the authored cover entrance fades the first screen in, which Lighthouse counts as late paint. Fixing it means dropping that entrance, which is the owner's call.
- Still open for Khaled (defaults are live): grid extent (accent as now, or whole-background), «وقت» / «عند», district, legal numbers in the footer, the ten-year warranty line, second phone, domain.

## 0b. Owner notes of 2026-10-12 (23 items) — status

Live on production since 2026-10-13 (commit `79bc69e`), checked in a real browser on all 22 sitemap pages (no errors, no overflow) and with Lighthouse (home 89–93 across runs, contact 93–94; accessibility, best practices and SEO 100).

| # | Note | Status |
|---|---|---|
| 1 | Primary domain shoghmoum.com, old domain redirected | **Waiting on DNS.** Both hostnames are added to the Vercel project. GoDaddy blocks automated sign-in, so the A record (`@` → `76.76.21.21`) has to be set by hand. Then: set `NEXT_PUBLIC_SITE_URL=https://shoghmoum.com` (Production), redeploy, and set 308 redirects from www.shoghmoum.com, shaghmoom.com and www.shaghmoom.com. Canonicals, sitemap, share image and structured data all follow that one variable. |
| 2–4 | New slogan; «العُشر» removed everywhere; hero eyebrow removed | Done. The diagram is redrawn: about a third undrawn, no number or fraction. |
| 5 | Hero photograph | **Concept, not live.** An original generated image (no logo, no text), art-directed for wide and tall screens, behind `HERO_PHOTO` in `content/site.ts`. Preview branch `hero-photo-concept`. To publish: set the flag to `true`. |
| 6–7 | Grid across the full width, strongest under the slogan; large icon reconsidered | Done. The icon is gone from the home hero and from inner pages on phones (kept beside the heading on wide screens). |
| 8 | Browser icon | Done: mark only, no ground, dark-mode twin; home-screen icons with a larger mark (`scripts/make-brand-images.mjs`). |
| 9 | Share image | Done: slogan, centre-safe, new file name `share-shoghmoum-2026-10.png` (`scripts/make-share-image.mjs`). |
| 10–14 | حي المبعوث, social icons, «عند اللزوم», legal numbers, e-mail | Done (footer, contact page, maps link, structured data). The form's own footer said «حي البعوث»; corrected to «حي المبعوث» as well. |
| 15 | Floating WhatsApp button on phones | Done (brand colours; not on the plastering form). |
| 16 | Hide «أعمالنا» and «آراء العملاء» | Done: menu, footer, sitemap, plus `noindex`. One list: `HIDDEN_PATHS` in `content/site.ts`. |
| 17 | Privacy policy | Done at `/ar/privacy`, linked under the form and in the footer. **PROPOSED wording**, to be confirmed by the owner. |
| 18 | Header logo loads at once | Done. |
| 19 | Scroll animation | Rewritten: 0.28s, 8px, and content is never hidden before the script runs. None on the form. |
| 20 | Requests arrive, owner notified, visitor sees a confirmation | **Partly.** Finding: the form had never delivered a request (no database was ever connected; it answered 503). Now: a request is confirmed only when delivered; otherwise the visitor is handed to WhatsApp with everything typed already in the message. E-mail notification is built and needs one key: `RESEND_API_KEY` (+ the sending domain verified in Resend). |
| 21 | Branded 404 | Done, inside the site layout, with «حتى هذه الصفحة لم تُرسَم في المخطط». |
| 22 | Search Console + visitor statistics | Vercel Web Analytics is on (cookie-less). Search Console needs the owner's Google account; a verification slot exists (`GOOGLE_SITE_VERIFICATION`), or verify by DNS after the domain switch. |
| 23 | «تشطيبات» card | Done: full-strength outline and a bar across the top instead of a side bar. |

## 1. Preview URL

- **Stable branch preview:** https://shaghmoom-web-git-rebrand-2026-10-alialahmad2000s-projects.vercel.app/ar
- Form page: https://shaghmoom-web-git-rebrand-2026-10-alialahmad2000s-projects.vercel.app/ar/plastering-form
- **Access:** the project has Vercel Deployment Protection on previews, so the link asks for a Vercel login. To show it to Khaled without changing project settings, use **Share** on the deployment in the Vercel dashboard. That creates a shareable link to this one deployment.
- On the preview, canonicals and the sitemap show `https://shaghmoom.sa` (the code's fallback), because `NEXT_PUBLIC_SITE_URL` is set for Production only. Production keeps `https://www.shaghmoom.com`. Nothing about the domain was changed.

## 2. What changed, page by page

**Everywhere**
- Palette: maroon `#441420`, sand `#E9EAD9`, terracotta `#814B41` (sand only), gold `#AA8302` (one highlight per screen, always pure). Tailwind's default palette is switched off, so these are the only colours in the code. Old aubergine, blush, cream and bronze tokens are deleted, not aliased.
- Type: IBM Plex Sans Arabic 400/500/600, self-hosted from the kit through `next/font/local`, using the proposed web scale. Markazi Text, Tajawal and Hanken Grotesk are gone.
- Logo: kit SVGs only. The header shows the Arabic wordmark on mobile and the lockup on desktop, sand on maroon. The kit's favicon set, webmanifest, OG image and `theme-color #441420` are in place.
- Grounds alternate maroon/sand down every page, checked by `scripts/check-grounds.mjs` on all 30 pages. The header joins the maroon first screen as one block. The closing+footer always takes the ground opposite the page's last section.
- Edge · indent · edge heading rhythm, 2px corners, solid and ghost buttons, counted items drawn as cards or diagrams, logical properties throughout.
- Arabic-Indic numerals in Arabic copy (hours, counters, ©). Latin digits only in phone numbers and links.
- Closing (every page except the form): «نبني الثقة قبل الجدران» · «شغموم **وقت اللزوم يجملك**» with the gold brush on the predicate · the lockup. No pattern.

**Home** (maroon → sand → maroon → sand → maroon → sand → maroon)
- **Owner feedback 2026-10-10 — «الشبكة»:** the measuring grid («شبكة القياس») is back as a visible element: the icon stands on it on the first screen of every page (as on brand sheet p.6), and it sits under the method path and the "tenth" diagram. Brand strengths (11/24% on maroon, 7.5/17% on sand), radial fade, never under text.
- Hero: the icon at 9% standing on the measuring grid; «عين على ما غاب عن الورق» (the one gold element, set at 24px so it passes contrast); two-line headline «نرى العُشر الذي / لم يُرسم في المخطط».
- Meaning on sand: the founding story (brand-sheet wording), the positioning line as a callout, and a measured "tenth" diagram (nine hatched strips plus the undrawn tenth) on the measuring grid.
- عظم · تشطيبات · إشراف as three cards on a locked grid, with the star texture around the cards and never under text. The 15 service pages sit under them.
- Method as a drawn dashed path with five stations.
- «استمارة اللياسة» section (eyebrow, title, the form's own sentence, one button), then a quote band.
- Removed from home: the projects strip (placeholders only, so it waits for photos, per brand §11) and the reviews strip (still on `/reviews`).

**About:** «الشغموم هو النبيه الفطن», the meaning and founding story with the diagram, and four value cards.

**Services:** عظم (5 cards) / تشطيبات (10 cards) / إشراف (inspection reports and the plastering form), on a 5-column locked grid.

**Service pages (15):** what's included as numbered cards, a quote box, «ما ننتبه له» on maroon, related services. The plastering page also links to the form.

**Methodology:** the drawn path, plus inspection reports on maroon.

**Projects + project pages:** placeholders re-skinned flat. The copy is rewritten as practice ("what we check on this kind of project"), not as past jobs.

**Contact:** same quote form, re-skinned. Direct contacts include Instagram/TikTok `@shoghmoum`.

**«استمارة اللياسة»** (`/ar/plastering-form`, new): ported from the owner's file.
- Content is byte-identical to the source, verified by script with whitespace ignored. Layout matches the source to the pixel at 375 and 1440 (±1px at 768).
- Sticky station bar, progress bar, anchors, both copy buttons and A4 print were all checked. «اطلب عرض سعر» opens WhatsApp +966553346250 with: «السلام عليكم، قرأت استمارة اللياسة في موقع شغموم، وأرغب في عرض سعر لأعمال اللياسة في مشروعي.»
- The site header is shown and scrolls away on this page. The global footer is not rendered, and the header never prints.
- Own title and description (using only wording from the form), canonical, OG tags, breadcrumb JSON-LD and a sitemap entry.
- Linked from the main nav, the footer, the home page, the plastering service page, services and methodology.

**Copy and metadata:** approved lines only, verbatim. «وطن يُبنى» and «ما لا يُرى… هو ما يصنع الفرق» are removed everywhere, including metadata, JSON-LD and the OG image. The 15 service intros, "why" lines and meta descriptions are rewritten to the voice rules; titles, H1s and keywords are kept. Handle is now `@shoghmoum`, and JSON-LD `sameAs` has Instagram and TikTok, with the slogan set to the tagline.

## 3. [PROPOSED] items implemented — for the owner to approve

- [ ] Web type scale: eyebrow 13–16 / h1 38–76 / h2 28–48 / h3 20–26 / body 16–19 (lh 1.8) / callout 18–22
- [ ] Colour ratios: maroon + sand carry ~85–90% of each screen, terracotta ≤5%, gold one highlight per screen
- [ ] Clear space around the logo (height of the SHOGHMOUM line) and minimum widths (lockup 140px → used at 148/176px; wordmark 96px → used at 112px)
- [ ] 2px corner radius
- [ ] Buttons: solid in the text colour, plus a ghost variant
- [ ] Section map per brand §11 (header/hero maroon, about sand, services maroon, method sand, closing opposite of the previous section)
- [ ] Measuring-grid web step: 24px on mobile / 30px from 1024px
- [ ] Eyebrows on maroon are **sand, not gold**. The kit's token file sets gold labels on maroon, but the contrast table allows gold on maroon only at ≥24px, so small eyebrows stay sand.
- [ ] The "tenth" diagram (nine hatched strips plus a dashed tenth) as the drawing that stands on the measuring grid, until real engravings exist

## 4. Open decisions — what I defaulted to

| Decision | Default in this build | Where to change |
|---|---|---|
| «وقت» vs «عند» in the closing line | «شغموم **وقت** اللزوم يجملك» site-wide. The form keeps «عند» as authored, so the two now differ. | `content/site.ts` → `CLOSING_WORD` |
| Domain `shoghmoum.com` vs live `shaghmoom.com` | Unchanged (canonicals, sitemap and env stay on shaghmoom.com) | owner |
| Legal line in the global footer (الرقم الوطني الموحد `7052752610`, منصة مقاول `1180118003`) | Shown on the form page only, as authored. Not added to the global footer. | `content/site.ts` (comment marks the slot) |
| Photography / illustrations | None added. See §7. | `content/images.ts` |
| Horizontal logo lockup | Not available. The Arabic wordmark is used where the stacked lockup doesn't fit (mobile header). | — |
| Secondary phone `0556332889` | Kept in the footer and on contact. The brand file lists only `0553346250`. | `content/site.ts` → `contact.secondaryPhone` |
| Periwinkle / aqua | 0% | — |

**New flags found during the port:**
- The form footer says **حي البعوث**, but the site says **حي النعيم**. Both are kept as they are. Which one is correct?
- The form promises a ten-year warranty on plastering workmanship («تضمن شغموم عيوب التنفيذ في أعمال اللياسة عشر سنوات»). It's kept verbatim, but the brand voice says to mention warranty only as «ضد سوء التنفيذ». Please confirm.
- The form's cover repeats the wordmark directly under the site header. It's kept as authored. Removing the cover's top row would avoid two logos stacked on that page.
- The form keeps its own film grain, many gold details and gold at 20% opacity. That's its authored vocabulary, as the brief asked, though it differs from the site rules (gold always pure, no grain).

## 5. Removed with no replacement in the new identity

- The old window/cube symbol, the logo build animation, and the re-typeset Markazi wordmark.
- Blueprint grid texture, dot grid, blush radial wash, gradients over images, corner-bracket plates, rounded pills, and the WhatsApp-green button.
- **All photos:** 8 Unsplash stock craft images and the About banner (old aubergine duotone baked in), plus the three Haraj banners used on plumbing, HVAC and flooring (700px wide, old maroon edge vignette baked in, not approved photos). The files stay in git history.
- About: vision/mission blocks («أن نكون الخيار الأول…» breaks the "never we are the best" rule) and the value «التشغيلية الذكية» (corporate phrasing). Four values remain.
- Home: projects strip (no photos) and reviews strip (moved to `/reviews` only).
- The site never had stats counters, a sticky WhatsApp button or a scroll-to-top button, so there was nothing to re-skin and nothing was invented. The quote form is single-step, not multi-step.
- Font weight 700 isn't loaded, because nothing on the site uses it. Add it to `app/[locale]/layout.tsx` when big numerals appear.

## 6. Lighthouse (mobile)

**Before:** live www.shaghmoom.com/ar, 7 runs: Performance median **99** (95–100) · Accessibility **96** · Best Practices **96** · SEO **100**.

**After, apples-to-apples:** the same machine and `next start` build, 5 interleaved runs each. This setup reads about 9 points under Vercel, since `main` scores 90 here and 99 live.

| Page | Perf before → after | A11y | Best Pr. | SEO |
|---|---|---|---|---|
| Home `/ar` | 90 → **90** | 96 → **100** | 96 → **100** | 100 → 100 |
| Plastering service | 88 → **91** | 96 → **100** | 96 → **100** | 100 → 100 |
| Form `/ar/plastering-form` | new → **88** | **100** | **100** | **100** |

**On the protected Vercel preview** (7 runs, through the Vercel OIDC header):
- Home Performance median 90, form median 83–84, Accessibility 100, Best Practices 100.
- SEO shows **61**, which is a preview artefact: Vercel adds `x-robots-tag: noindex` to previews, and `robots.txt` sits behind the login wall.
- Performance is also depressed on the preview. The response arrives 200–400ms later than production (protection check, cold preview edge) and the Vercel toolbar is injected. A clean production number exists only after merge.
- **Honest status:** the brief's targets (Perf ≥ 90, others ≥ 95) are met on every measurement except Performance on the form page. It scores 88 locally and 83 on the preview. Its LCP is held by the authored cover entrance (the headline and engraving fade in from transparent), which I kept as authored. Expected production score, from the local→live offset: ~95. To be confirmed after merge.

Performance work done during verification:
- Merged the kit's split Arabic/Latin font files into one face per weight. It was a 236KB waterfall and is now 174KB, preloaded.
- Removed next/font's generated fallback face, which was catching spaces and digits.

## 7. Still needed from the owner

1. Choose «وقت» or «عند».
2. Domain decision (shoghmoum.com vs shaghmoom.com).
3. Confirm the legal numbers (7052752610 / 1180118003) for the global footer, and which district is correct (النعيم or البعوث).
4. Confirm the ten-year plastering warranty line on the form.
5. Real site photos (natural light, no filters), first for finishing work. Projects and service banners are gated until then (`content/projects.ts` `ready: true`).
6. Engravings (the vintage woodcut style) for About and the services, to stand on the measuring grid in place of the diagram.
7. Approve the [PROPOSED] list in §3.
8. Confirm the secondary phone number stays.
9. A sample inspection report, for the methodology page.

## Verification log

- `npm run build` and `npm run lint`: pass, 0 warnings.
- No horizontal overflow on any of the 29 sitemap pages at 375, 768 or 1440.
- Ground alternation: every page passes.
- Old identity sweep of the build output: no old hex values, old fonts, «وطن يُبنى», «ما لا يُرى» or `@shoughmoum`.
- Contrast: every text/ground pair is one the brand table allows (Lighthouse colour-contrast passes on all pages tested).
- At delivery (2026-10-10) production was untouched. Published on 2026-10-11, see section 0.
