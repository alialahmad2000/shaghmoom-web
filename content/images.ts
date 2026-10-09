/**
 * Image manifest. Every image slot on the site, with its location,
 * recommended dimensions / aspect ratio, and a note on what photo belongs there.
 *
 * There are no approved project photos or illustrations yet (brand §10). Until
 * a real photo arrives, the UI renders a flat placeholder with a dashed outline
 * and an Arabic caption — never stock, never a broken image.
 */

export type ImageSlot = {
  /** Public path where the real file should be placed. */
  path: string;
  /** Where it appears. */
  location: string;
  /** Recommended pixel size. */
  recommended: string;
  /** Aspect ratio for layout / placeholder. */
  aspect: string;
  /** What photo belongs here. */
  note: string;
};

export const imageManifest: ImageSlot[] = [
  {
    path: "/images/projects/{slug}-1.jpg",
    location: "Project card cover (one per project in content/projects.ts)",
    recommended: "1600×1200",
    aspect: "4 / 3",
    note: "Real Shoghmoum site photo only (brand §10, OPEN): natural light, no colour filters, never under text. Set ready:true in content/projects.ts.",
  },
  {
    path: "/images/projects/{slug}-2.jpg … -N.jpg",
    location: "Project detail gallery",
    recommended: "1600×1200",
    aspect: "4 / 3",
    note: "Gallery images per project. Prefer finished finishing work — finishing quality is the marketing focus.",
  },
  {
    path: "/images/services/{slug}.webp",
    location: "Service page banner (optional `image` field in content/services.ts)",
    recommended: "≥1600px wide, 3:1",
    aspect: "3 / 1",
    note: "Real Shoghmoum work only. The earlier stock craft images (aubergine duotone) and the Haraj ad banners (old maroon vignette, 700px) were removed in the 2026-10 rebrand.",
  },
];
