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

## ◻︎ Intentionally left as designed placeholders (flagged — reasoning)

| Slot | Why not sourced |
|---|---|
| **Hero** (home) — the "١٠٪" coordinate plate | This is a **deliberate design element**, not an empty slot. The original brief explicitly warned against a "generic stock hero." Recommend keeping it (or replacing only with a real Shaghmoom project photo later). |
| **Project covers + galleries** (`/ar/projects/*`) | Sourcing stock here would visually **imply the stock photos are Shaghmoom's own completed projects** — a misrepresentation on a live commercial site. These wait for Khaled's **real project photos** (the build was designed for this; drop files + flip `ready:true`). |
| **The other 11 services** without a photo | Generic per-trade stock risks the exact "cheesy stock" the brand forbids; the designed service pages read well without a photo. |

> I sourced **conservatively on purpose** (per the brief's "if unsure, don't ship — leave the placeholder and flag"). Only one stock image went in, on the safest atmospheric slot. Say the word and I can source more for specific slots you choose.

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
