// Builds the browser / home-screen icons from the brand mark (owner note 8).
//   node scripts/make-brand-images.mjs
// Browser icon: the mark alone, no ground, tight crop; a sand twin for dark
// mode. Home-screen icons: maroon ground (iOS fills transparency with black)
// with the mark enlarged. The share image is built by make-share-image.mjs.
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const MAROON = "#441420";
const SAND = "#E9EAD9";
const W = 896.89;
const H = 857.47;
const ICON =
  "M 443.65 857.47 L 402.06 595.48 C 402.06 595.48 590.22 538.4 581.57 475.27 C 576.14 431 443.49 395.73 443.49 395.73 L 443.49 351.02 C 446.84 348.09 448.47 346.66 451.82 343.74 L 896.89 404.23 L 896.89 441.39 C 896.73 441.42 688.3 459.94 596.09 552.16 C 503.88 644.37 480.81 857.47 480.81 857.47 M 453.25 0 L 494.83 261.99 C 494.83 261.99 306.68 319.08 315.32 382.21 C 320.75 426.48 453.41 461.75 453.41 461.75 L 453.41 506.46 C 450.05 509.39 445.08 513.73 445.08 513.73 L 0 453.25 L 0 416.09 C 0.17 416.06 208.59 397.54 300.81 305.32 C 393.02 213.11 416.08 0 416.08 0";

/** The mark centred in a 1000-unit square, filling `fill` of its width. */
function markSvg({ fill, color, ground, style = "" }) {
  const s = (1000 * fill) / W;
  const tx = (1000 - W * s) / 2;
  const ty = (1000 - H * s) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">${style}${
    ground ? `<rect width="1000" height="1000" fill="${ground}"/>` : ""
  }<path transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(5)})" ${
    color ? `fill="${color}" ` : ""
  }d="${ICON}"/></svg>`;
}

const png = (svg, size) => sharp(Buffer.from(svg), { density: 300 }).resize(size, size).png().toBuffer();

// 1 · browser icon (SVG): no ground; switches colour with the colour scheme
writeFileSync(
  "public/icon-mark.svg",
  markSvg({
    fill: 0.96,
    style: `<style>path{fill:${MAROON}}@media (prefers-color-scheme:dark){path{fill:${SAND}}}</style>`,
  })
);

// 2 · PNG twins for browsers that ignore SVG icons
for (const size of [32, 96]) {
  writeFileSync(`public/icon-mark-${size}.png`, await png(markSvg({ fill: 0.96, color: MAROON }), size));
  writeFileSync(`public/icon-mark-dark-${size}.png`, await png(markSvg({ fill: 0.96, color: SAND }), size));
}

// 3 · favicon.ico (16/32/48, PNG-encoded entries, transparent)
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((s) => png(markSvg({ fill: 0.96, color: MAROON }), s)));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(s, e);
  header.writeUInt8(s, e + 1);
  header.writeUInt8(0, e + 2);
  header.writeUInt8(0, e + 3);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(images[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += images[i].length;
});
writeFileSync("public/favicon.ico", Buffer.concat([header, ...images]));

// 4 · home-screen icons: maroon ground, enlarged mark
const home = markSvg({ fill: 0.72, color: SAND, ground: MAROON });
writeFileSync("public/apple-touch-icon-180.png", await png(home, 180));
writeFileSync("public/icon-192.png", await png(home, 192));
writeFileSync("public/icon-512.png", await png(home, 512));
// maskable: Android may crop to a circle of 80% — keep the mark inside it
writeFileSync("public/icon-maskable-512.png", await png(markSvg({ fill: 0.6, color: SAND, ground: MAROON }), 512));

console.log("icons written");
