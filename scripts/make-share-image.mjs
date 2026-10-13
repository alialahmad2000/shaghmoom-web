// Builds the link-preview image (owner note 9): the slogan, simple, with all
// the important content inside the centre square because WhatsApp sometimes
// crops to a square. Needs playwright-core and a local Chrome (dev tool only):
//   node scripts/make-share-image.mjs public/share-shoghmoum-2026-10.png
// Give the file a NEW name whenever it changes (chat apps cache by URL) and
// update OG_IMAGE in lib/seo.ts.
import { chromium } from "playwright-core";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.env.REPO_ROOT || process.cwd();
const out = resolve(root, process.argv[2] || "public/share-shoghmoum-2026-10.png");
const font = (w) =>
  `data:font/woff2;base64,${readFileSync(resolve(root, `app/fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-${w}.woff2`)).toString("base64")}`;
const lockup = readFileSync(resolve(root, "public/brand/shoghmoum-lockup-sand.svg"), "utf8");
const ICON =
  "M 443.65 857.47 L 402.06 595.48 C 402.06 595.48 590.22 538.4 581.57 475.27 C 576.14 431 443.49 395.73 443.49 395.73 L 443.49 351.02 C 446.84 348.09 448.47 346.66 451.82 343.74 L 896.89 404.23 L 896.89 441.39 C 896.73 441.42 688.3 459.94 596.09 552.16 C 503.88 644.37 480.81 857.47 480.81 857.47 M 453.25 0 L 494.83 261.99 C 494.83 261.99 306.68 319.08 315.32 382.21 C 320.75 426.48 453.41 461.75 453.41 461.75 L 453.41 506.46 C 450.05 509.39 445.08 513.73 445.08 513.73 L 0 453.25 L 0 416.09 C 0.17 416.06 208.59 397.54 300.81 305.32 C 393.02 213.11 416.08 0 416.08 0";

const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>
@font-face{font-family:Plex;font-weight:500;src:url(${font(500)}) format("woff2")}
@font-face{font-family:Plex;font-weight:600;src:url(${font(600)}) format("woff2")}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1200px;height:630px}
body{background:#441420;color:#E9EAD9;font-family:Plex,sans-serif;position:relative;overflow:hidden}
.grid{position:absolute;inset:0;color:#E9EAD9;
 background-image:
  linear-gradient(to right, color-mix(in srgb, currentColor 28%, transparent) 1.5px, transparent 1.5px),
  linear-gradient(to bottom, color-mix(in srgb, currentColor 28%, transparent) 1.5px, transparent 1.5px),
  linear-gradient(to right, color-mix(in srgb, currentColor 13%, transparent) 1px, transparent 1px),
  linear-gradient(to bottom, color-mix(in srgb, currentColor 13%, transparent) 1px, transparent 1px);
 background-size:150px 150px,150px 150px,30px 30px,30px 30px;background-position:center;
 -webkit-mask-image:radial-gradient(ellipse 62% 78% at 50% 50%, #000 0%, rgba(0,0,0,.7) 45%, transparent 100%);
 mask-image:radial-gradient(ellipse 62% 78% at 50% 50%, #000 0%, rgba(0,0,0,.7) 45%, transparent 100%)}
.mark{position:absolute;top:50%;left:50%;width:560px;transform:translate(-50%,-50%);opacity:.07;fill:#E9EAD9}
.c{position:absolute;top:0;left:285px;width:630px;height:630px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.logo{width:210px}.logo svg{width:100%;height:auto;display:block}
h1{margin-top:54px;font-weight:600;font-size:68px;line-height:1.32;letter-spacing:-.01em;white-space:nowrap}
h1 span{display:block}
.bar{margin-top:40px;width:96px;height:6px;background:#AA8302}
p{margin-top:28px;font-weight:500;font-size:25px;opacity:.9;white-space:nowrap}
</style></head><body>
<div class="grid"></div>
<svg class="mark" viewBox="0 0 896.89 857.47"><path d="${ICON}"/></svg>
<div class="c">
  <div class="logo">${lockup.replace(/<\?xml[^>]*>/, "")}</div>
  <h1><span>نرى ما لم يُرسَم..</span><span>ونُتقن ما لا يُرى</span></h1>
  <div class="bar"></div>
  <p>مقاولات عامة · المدينة المنورة</p>
</div>
</body></html>`;

const browser = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({ path: out, type: "png" });
await browser.close();
console.log("written", out);
