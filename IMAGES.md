# Shaghmoom — Images review sheet

Review gate: **approve each image before it's final.** Every image is trivially
replaceable (one line / one file — see "How to swap" at the bottom). Where an
image was risky or off-brand, the slot keeps its **designed placeholder** and is
flagged for you to decide.

Summary: **3 real photos** placed (cropped from the client's Haraj banners) ·
**1 sourced image** (licensed, maroon-treated) · **1 real photo flagged** (kept as
placeholder) · hero + project covers **intentionally left as designed placeholders**
(reasoning below).

---

## ✅ Real photos (client's own work — watermark + burned-in text cropped out)

Originals are backed up untouched in `public/images/services/originals/`.

| # | Page / section | Image | Local path | Notes |
|---|---|---|---|---|
| 1 | السباكة — `/ar/services/plumbing` | plumbing (action: grinder + sparks + pipes) | `/public/images/services/plumbing-clean.webp` | **Cleanest result.** Cropped lower band; text + حراج watermark removed. |
| 2 | التكييف — `/ar/services/hvac` | hvac (ceiling ductwork) | `/public/images/services/hvac-clean.webp` | Atmospheric duct/lights band; text removed. Original already had a maroon wash → reads native. |
| 3 | الأرضيات — `/ar/services/flooring` | finishing (floor tiling) | `/public/images/services/finishing-clean.webp` | The client's `finishing.jpg` (التشطيبات banner) is a **tiling** shot → placed on **flooring** (الأرضيات), the exact subject within التشطيبات. Text removed. |

Referenced from the `image` field on each service in **`content/services.ts`**.
Each banner gets a subtle maroon gradient + ring + a "من أعمال شغموم" caption so it reads native, not like a pasted ad.

## ⚑ Flagged real photo (kept as placeholder — your call)

| Page / section | Image | Status |
|---|---|---|
| الكهرباء — `/ar/services/electrical` | electrical (worker on block wall) | **FLAGGED, not shipped.** The burned-in text "أعمال الكهرباء" sat directly over the worker; the only fully text-free crop loses his face and is mostly wall — weaker than the designed placeholder. Kept the placeholder. Best-effort crop saved for your review at `public/images/services/_flagged/electrical-bestcrop.webp`. If you approve it, see "How to swap." |

## ✅ Sourced image (licensed, maroon-treated)

| Page / section | Image | Local path | Source + license |
|---|---|---|---|
| من نحن — `/ar/about` (atmospheric banner) | concrete structural shell (عظم), maroon duotone | `/public/images/about-structure.webp` | **Unsplash License — free for commercial use, no permission/attribution required.** Photo by **Tolu Olubode** (@toluobde) — https://unsplash.com/photos/PlBsJ5MybGc. Treated to a maroon duotone so it reads as brand texture, not stock. |

Referenced via `aboutImage` in **`content/site.ts`** (with source + license in a comment there too).

## ✅ Service-type craft imagery (sourced + maroon-duotone treated)

Each illustrates the **craft/material** (not an identifiable building or a "completed
project"), maroon-duotone treated to match `about-structure.webp` so it reads as brand
texture. **All Unsplash License — free for commercial use, no permission/attribution
required.** Referenced from the `image` field on each service in `content/services.ts`.

| Service (slug) | Subject | Local path | Source (Unsplash) — author |
|---|---|---|---|
| الأعمال الخرسانية (`concrete-works`) | steel rebar / reinforcement cage | `/public/images/services/concrete-works-craft.webp` | https://unsplash.com/photos/eyq7H7gO0EY — Michael Bader (@badermich1) |
| أعمال البناء (`masonry`) | trowel + mortar on blockwork | `/public/images/services/masonry-craft.webp` | https://unsplash.com/photos/MXPWld5uysw — Gowtham AGM (@gowthamagm) |
| أعمال العزل (`waterproofing`) | spray-applied waterproofing membrane on a roof | `/public/images/services/waterproofing-craft.webp` | https://unsplash.com/photos/ce2r9sPR_9E — Ömer Haktan Bulut (@omerhaktan) |
| السلالم والخزانات (`stairs-tanks`) | bare concrete steps | `/public/images/services/stairs-tanks-craft.webp` | https://unsplash.com/photos/HU9CjnRWEMM — Bogdan Karlenko |
| اللياسة (`plastering`) | hand applying plaster with a trowel | `/public/images/services/plastering-craft.webp` | https://unsplash.com/photos/Re1O5byZ8bY — Sasun Bughdaryan (@sasun1990) |
| الدهانات (`painting`) | paint roller on a wall | `/public/images/services/painting-craft.webp` | https://unsplash.com/photos/rMVjOX8nm2U — Andrew Itaga (@and73w) |
| النجارة (`carpentry`) | woodworking with a saw | `/public/images/services/carpentry-craft.webp` | https://unsplash.com/photos/dhFpe7CTI5Y — Ryno Marais (@ryno_marais) |
| تشطيبات الموقع (`site-finishes`) | interlock paving pattern | `/public/images/services/site-finishes-craft.webp` | https://unsplash.com/photos/lh22dQWlQBA — rayne madison (@raynemadison) |

## ◻︎ Intentionally left as designed placeholders (flagged — reasoning)

| Slot | Why not filled |
|---|---|
| **Hero** (home) — the "١٠٪" coordinate plate | Deliberate design element, not an empty slot. The brief warned against a "generic stock hero." Keep it (or a real Shaghmoom project photo later). |
| **Project covers + galleries** (`/ar/projects/*`) | Stock here would **imply the photos are Shaghmoom's own completed projects** — a misrepresentation. Wait for Khaled's real project photos (drop files + flip `ready:true`). |
| **الكهرباء** (`electrical`) | Prior decision — the client's real banner couldn't be cleanly cropped; placeholder kept. |
| **الأسقف** (`ceilings`) | The only candidates were messy exposed framing/wiring (reads as MEP, not gypsum-ceiling finishing) — didn't beat the placeholder. |
| **الألمنيوم والزجاج** (`aluminum-glass`) | No clean craft/material close-up available — only finished façades/windows, which read as "completed buildings" (forbidden). |
| **الأعمال التمهيدية** (`site-preparation`) | Best excavator shot had a visible third-party equipment brand ("LIUGONG") + sparse composition — the elegant placeholder wins. |

> Filled **8** service slots with treated, licensed craft imagery; left **6** on their
> designed placeholders (with reasons above) per the brief's "a premium empty panel beats
> mediocre stock." Plus the 3 real client photos (plumbing/hvac/flooring). Say the word and
> I can source specific flagged slots if you want them filled.

---

## How to swap / revert any image (all trivial)

- **A service photo** → edit the `image` field for that service in `content/services.ts`
  (change the `src`, or delete the field to fall back to no-photo). Or just drop a new
  file at the same path.
- **The About banner** → change or remove `aboutImage` in `content/site.ts`, or drop a
  new file at `/public/images/about-structure.webp`. Remove the banner block in
  `app/[locale]/about/page.tsx` to drop it entirely.
- **Approve the flagged electrical crop** → move `_flagged/electrical-bestcrop.webp` to
  `public/images/services/electrical-clean.webp` and add an `image` field to the
  `electrical` service in `content/services.ts`.
- **Project photos** → add files to `public/images/projects/<slug>-N.jpg` and set
  `ready: true` in `content/projects.ts` (already documented in `content/images.ts`).
- **Revert any photo to the designed placeholder** → remove the reference / set
  `ready:false`; the `MediaFrame` component renders the maroon architectural-grid
  placeholder automatically. Nothing is hard-baked.

Full slot inventory lives in `content/images.ts`.
