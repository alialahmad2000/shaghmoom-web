// Walks every page in the sitemap and checks the brand rule: grounds alternate
// maroon / sand top to bottom (header → sections → footer); two consecutive
// blocks on the same ground is an error. Usage: node scripts/check-grounds.mjs http://localhost:3000
const base = process.argv[2] || "http://localhost:3000";
const xml = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
urls.push("/ar/this-page-does-not-exist");
let bad = 0;
for (const path of urls) {
  const html = await (await fetch(base + path)).text();
  const seq = [...html.matchAll(/<(header|section|footer)[^>]*data-ground="(maroon|sand)"/g)].map((m) => m[2]);
  const errs = seq.flatMap((g, i) => (i && seq[i - 1] === g && i > 1 ? [i] : []));
  // index 0→1 is header→first screen: both maroon by design (one joined block)
  const joinOk = seq[0] === "maroon" && (seq[1] === "maroon" || path.endsWith("/plastering-form"));
  // the global 404 (unknown paths) is a standalone page with no site chrome
  const ok = seq.length === 0 ? /الصفحة غير موجودة/.test(html) : errs.length === 0 && joinOk;
  if (!ok) bad++;
  console.log(ok ? "ok  " : "FAIL", path.padEnd(40), seq.map((g) => (g === "maroon" ? "M" : "S")).join(" "));
}
console.log(bad ? `${bad} page(s) break the alternation` : "all pages alternate");
process.exit(bad ? 1 : 0);
