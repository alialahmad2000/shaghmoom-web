/**
 * Image manifest (§12). Every image slot on the site, with its location,
 * recommended dimensions / aspect ratio, and a note on what photo belongs there.
 *
 * Until a real photo arrives, the UI renders a refined placeholder (maroon/bone
 * block with the architectural grid motif + an Arabic caption) — never a broken
 * image or generic stock. To swap in a real photo: drop the file at the listed
 * `path` and the component will use it automatically.
 *
 * Make finished-finishing ("تشطيب") imagery prominent — those photos sell.
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
    path: "/images/services/{slug}-clean.webp",
    location: "Service page banner (real photos: plumbing, hvac, flooring)",
    recommended: "≥1200px wide",
    aspect: "4 / 1 (banner)",
    note: "Shaghmoom's own work photos, watermark/text cropped out. Referenced from the `image` field in content/services.ts. Originals backed up in /public/images/services/originals/. electrical.jpg was FLAGGED (text overlapped the worker — kept as placeholder; best-effort crop in /public/images/services/_flagged/).",
  },
  {
    path: "/images/about-structure.webp",
    location: "About page atmospheric banner",
    recommended: "1600×620",
    aspect: "2.58 / 1",
    note: "SOURCED + maroon-treated. Unsplash License (free, commercial) — photo by Tolu Olubode, https://unsplash.com/photos/PlBsJ5MybGc. Referenced via `aboutImage` in content/site.ts. Swap or remove that one line to change.",
  },
  {
    path: "/brand/logo.svg",
    location: "Header + Footer logo",
    recommended: "SVG (vector)",
    aspect: "auto",
    note: "Official Shaghmoom logo. Sample the exact maroon hex from this file and update the color tokens in app/globals.css.",
  },
  {
    path: "/brand/og-default.png",
    location: "Default Open Graph / social share image",
    recommended: "1200×630",
    aspect: "1.91 / 1",
    note: "Brand share card: maroon, the brand line 'وطن يُبنى', logo. Used when a page has no specific OG image.",
  },
  {
    path: "/images/hero.jpg",
    location: "Home hero background (optional)",
    recommended: "2400×1350",
    aspect: "16 / 9",
    note: "A composed, high-quality project photo (finished villa/interior). Must not look like generic stock. Optional — the hero works without it.",
  },
  {
    path: "/brand/mark-muqawil.svg",
    location: "Credibility bar",
    recommended: "SVG, height ~40px",
    aspect: "auto",
    note: "Official منصة مقاول mark.",
  },
  {
    path: "/brand/mark-sca.svg",
    location: "Credibility bar",
    recommended: "SVG, height ~40px",
    aspect: "auto",
    note: "Saudi Contractors Authority (SCA) mark.",
  },
  {
    path: "/brand/mark-vision2030.svg",
    location: "Credibility bar",
    recommended: "SVG, height ~40px",
    aspect: "auto",
    note: "Vision 2030 mark.",
  },
  {
    path: "/images/projects/{slug}-1.jpg",
    location: "Project card cover (one per project in content/projects.ts)",
    recommended: "1600×1200",
    aspect: "4 / 3",
    note: "Hero/cover shot of the project. Prefer finished finishing for commercial/villa projects; structural shell for عظم projects.",
  },
  {
    path: "/images/projects/{slug}-2.jpg … -N.jpg",
    location: "Project detail gallery",
    recommended: "1600×1200",
    aspect: "4 / 3",
    note: "Gallery images per project. Mix finished interiors and a structural/detail shot that supports the 'ما لا يُرى' story where relevant.",
  },
];
