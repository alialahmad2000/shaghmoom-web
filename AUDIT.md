# Shaghmoom — Senior Design + Front-End Audit

**Reviewed:** live site `https://shaghmoom-web.vercel.app` + repo source.
**Method:** Lighthouse (mobile), headless-Chrome screenshots (390px + 1440px),
DOM/computed-style measurement via Playwright, rendered-HTML inspection, and reading
the component source. Findings are grounded in evidence, not vibes.

**Verdict (honest):** This is **well above a generic template** and reads as *quietly
premium* — the architectural/blueprint motif, the restraint, the disciplined SEO, and
the "ما لا يُرى" idea are real differentiators. But before this pass it had a handful of
**objective defects that undercut the premium impression** — most visibly a broken,
near-invisible primary CTA on the maroon bands. Those are now fixed. What remains to
clear the "sits beside a SAR 25k identity" bar is **content/photography and one
copy/hero decision** — flagged below for the client, not auto-changed.

---

## Lighthouse (mobile, live)

| Category | Before | After | Target | Note |
|---|---|---|---|---|
| Performance | 88 | **~91** (median) | ≥95 | LCP-bound on throttled 4G; see P1-1 / P2-2 |
| Accessibility | 96 | **100** | ≥95 | both issues fixed (P1-2, P1-3) |
| Best Practices | 100 | **100** | ≥95 | — |
| SEO | 100 | **100** | ≥95 | — |

Web Vitals: CLS **0** throughout; FCP improved **1.7s → ~1.1s**; LCP **~3.1–3.6s**
(text/font-bound on simulated slow-4G + 4× CPU).

> **On the performance number:** mobile Lighthouse against a live CDN is noisy —
> post-fix Performance runs were **85 / 91 / 92** (the 85 was a slow outlier with
> TBT spiking to 180ms). Reported as **~91 median**. Accessibility/BP/SEO are
> deterministic at **100/100/100**. Reaching the ≥95 stretch on Performance needs
> trimming the motion JS and/or a tighter font strategy (P2-2) — beyond a
> design-safe "quick win," so proposed rather than forced.

---

## P0 — Blocking (premium-killers)

### P0-1 · Primary CTA on the maroon bands renders broken — `[FIXED]`
- **Where:** the closing CTA band (`جاهزون لمشروعك القادم.`) on every page, e.g. `/ar/reviews` bottom; same pattern in the home `MethodologyTeaser`.
- **What's wrong:** the primary `اطلب عرض سعر` button was styled by stacking `className` overrides (`bg-bg text-brand`) on top of the `primary` variant (`bg-brand text-bg`). Because both are equal-specificity Tailwind utilities, the winner is decided by **CSS source order, not class-list order** — so the result was inconsistent: the fill resolved to cream but the button rendered **cramped, with the trailing arrow wrapping onto a second line** ("stray arrow"), reading as a small, near-invisible outlined box that was *less* prominent than the secondary WhatsApp button. Inverted hierarchy on the single most important conversion element.
- **Why it matters:** the lead CTA is the business goal. A primary action that looks broken/secondary on the brand's signature color is the most damaging possible flaw on an otherwise premium page.
- **Fix:** added deterministic Button variants — `inverse` (solid cream fill + maroon text) and `outlineInverse` (bone text + bone border) — plus `whitespace-nowrap` so labels/arrows never wrap. `ClosingCta` now uses `inverse` (primary) + `outlineInverse` (WhatsApp); `MethodologyTeaser` uses `outlineInverse`. No more className/variant conflicts.

---

## P1 — Important

### P1-1 · LCP 3.6s — hero paint gated behind a scroll-reveal — `[FIXED]`
- **Evidence:** Lighthouse Perf 88; LCP 3.6s with **0ms** resource-savings attributed → it's a *render-timing* problem, not a download problem. FCP was 1.7s.
- **What's wrong:** the hero (incl. the H1, the LCP element) was wrapped in `<Reveal>`, which server-renders `opacity:0` and only fades in after hydration + the client animation. The largest contentful paint can't count an `opacity:0` element, so LCP slipped to ~3.6s even though the text was "ready" at FCP (1.7s).
- **Why it matters:** LCP is the dominant Core Web Vital; this single issue kept Performance below the ≥95 target.
- **Fix:** added an `immediate` prop to `Reveal` that renders the element visible with no `opacity:0` entrance, and applied it to the hero. The H1 now paints at FCP. (Scroll-reveals are retained for below-the-fold sections, where they belong.) Trade-off: the hero no longer fades in on load — a deliberate choice favoring LCP; if the entrance is wanted back it should animate `transform` only (opacity starting at 1) so it doesn't gate LCP.

### P1-2 · Color contrast fails AA on dark sections — `[FIXED]`
- **Evidence:** Lighthouse `color-contrast` audit flagged `text-bg/50` footer headings, `text-bg/55` copyright; measured the closing-CTA WhatsApp button computing to **ink (#241e1e) text + ink/22% border on maroon** ≈ dark-on-dark.
- **What's wrong:** low-opacity bone text on the dark-maroon footer (`text-bg/50`, `/55`) fell under 4.5:1; the WhatsApp secondary on maroon inherited dark `text-ink`/`border-line-strong` from the base variant (the override lost the cascade race).
- **Why it matters:** WCAG AA is an explicit DoD item and matters for credibility with serious/government clients.
- **Fix:** footer text bumped to `text-bg/70` (≈6.4:1 on `--brand-deep`, passes AA); the WhatsApp-on-dark button now uses the `outlineInverse` variant (bone text + bone border). _Brand color tokens were NOT changed (placeholder maroon left intact per instructions); fixes were at the component level only._

### P1-3 · WCAG 2.5.3 "Label in Name" on the logo link — `[FIXED]`
- **Evidence:** Lighthouse `label-content-name-mismatch` on `<a aria-label="شركة شغموم… — الصفحة الرئيسية">`.
- **What's wrong:** the link's visible label includes the Latin "Shaghmoom", but the Arabic `aria-label` didn't contain it → mismatch (hurts voice-control users who say what they see).
- **Fix:** the decorative Latin romanization is now `aria-hidden` (the brand reads aloud in Arabic), and the `aria-label` is `شغموم — الصفحة الرئيسية`, which contains the visible label.

---

## P2 — Polish / propose (not auto-changed)

### P2-1 · Hero headline could be more brand-led — `[PROPOSED]`
- **What:** `نبني الثقة قبل الجدران` is strong and on-brand — but it's also the most "expected" line. The site's actual soul is **ما لا يُرى... هو ما يصنع الفرق**, which is more distinctive and ownable. Consider leading the hero with the perception idea and keeping "نبني الثقة قبل الجدران" as the supporting line — or A/B them. **Recommendation only; not applied** (copy/hero direction is the client's call).

### P2-2 · `unused-javascript` ≈ 53 KiB (~300ms) — `[PROPOSED]`
- Mostly the motion library + framework runtime. TBT is already excellent (20ms) so impact is small. If chasing the last points: limit `motion` to where it earns its weight, or lazy-load below-the-fold reveal logic. Not done now (risk vs. reward low).

### P2-3 · Footer column labels use `<h2>` — `[PROPOSED]`
- "الموقع / خدماتنا / تواصل" are `<h2>` at the same level as main content headings. Valid HTML and not a violation, but semantically loose. Could drop to a styled non-heading or `<h2>` inside an `aria-labelledby` nav. Low priority.

### P2-4 · RTL arrow — verified correct, **no change** — `[VERIFIED]`
- The brief flagged a "stray/mis-directed arrow." Verified: the arrow direction is **correct** (points left = "forward" in RTL, `rtl:-scale-x-100` applies). The "stray" appearance was the arrow **wrapping** to a second line in the cramped CTA — resolved by `whitespace-nowrap` (P0-1). Direction left intact.

---

## What's genuinely good (don't lose these)

1. **SEO is a real moat.** Unique Arabic title/description per page, valid `GeneralContractor` / `Service` / `BreadcrumbList` / `WebSite` JSON-LD, canonical + `hreflang` (ar + x-default), generated sitemap/robots, clean heading hierarchy, zero console errors. Lighthouse SEO + Best-Practices 100. This is exactly the "be found on Google" spine the brief demanded.
2. **Restraint reads as premium.** Generous negative space, the architectural blueprint/grid motif, hairline rules, the maroon used with discipline, CLS 0. It composes rather than crams — past "clean," approaching distinctive.
3. **The concept is felt, not just stated.** The hero `١٠٪` coordinate plate, the philosophy "inspection plate" where a flaw surfaces on close look, and project cards exposing the caught detail — the "ما لا يُرى" idea is encoded in the experience.

## Left for you to decide (not auto-changed)
- **Brand maroon** — untouched (placeholder pending the real logo). Sample the exact hex from the logo into `app/globals.css` when it arrives.
- **Hero headline** (P2-1) — recommendation only.
- **Real photography** — the refined placeholders are intact; finished تشطيب photos are the single biggest remaining lever for "premium." No stock added.
