#!/usr/bin/env python3
"""
One-off port of ~/Downloads/shoghmoum-plastering-form-source.html into the site.

- CSS  → app/[locale]/plastering-form/plastering-form.css
         every class prefixed `plf-`, keyframes prefixed, :root/body/html/bare
         element rules scoped under .plf-page, embedded fonts dropped (the
         site's self-hosted IBM Plex Sans Arabic is used instead).
- HTML → app/[locale]/plastering-form/FormBody.tsx (JSX, content verbatim)
         the handshake <img> becomes <Image> (extracted to /public), the inline
         script becomes <FormBehaviour/>.

Kept in the repo so the port is reproducible and diffable against the source.
Usage: python3 scripts/port-plastering-form.py <source.html>
"""
import re, sys, html
from html.parser import HTMLParser

src = open(sys.argv[1], encoding="utf-8").read()
OUT = "app/[locale]/plastering-form/"

# ───────────────────────── CSS ─────────────────────────
styles = re.findall(r"<style>(.*?)</style>", src, re.S)
css = styles[1]  # [0] is the host frame's reset; [1] is the page's own sheet
KEYFRAMES = set(re.findall(r"@keyframes\s+([\w-]+)", css))

def pref_classes(sel):
    return re.sub(r"\.(-?[_a-zA-Z][\w-]*)", lambda m: ".plf-" + m.group(1), sel)

def scope_selector(sel):
    sel = sel.strip()
    if sel.startswith(":where("):
        # keep zero specificity: the source relies on it (e.g. .note's margin wins)
        return ":where(" + pref_classes(sel[len(":where("):-1]) + ")"
    out = []
    for part in [p.strip() for p in sel.split(",")]:
        if part == ":root":
            out.append(".plf-page"); continue
        if part in ("body", "html"):
            out.append(".plf-page"); continue
        p = pref_classes(part)
        if not p.startswith(".") and not p.startswith("@") and not re.match(r"^\d", p):
            p = ".plf-page " + p  # bare element selector (a, svg) → scoped
        out.append(p)
    return ",".join(out)

def fix_decls(body):
    for k in KEYFRAMES:
        body = re.sub(r"(animation(?:-name)?\s*:[^;}]*?)\b%s\b" % re.escape(k), r"\1plf-%s" % k, body)
    body = body.replace(
        "--font:'IBM Plex Sans Arabic','Noto Sans Arabic','Segoe UI',Tahoma,Arial,sans-serif",
        "--font:var(--font-plex),'IBM Plex Sans Arabic','Noto Sans Arabic','Segoe UI',Tahoma,Arial,sans-serif",
    )
    return body

def transform(block):
    out, i, n = [], 0, len(block)
    while i < n:
        j = block.find("{", i)
        if j == -1:
            out.append(block[i:]); break
        prelude = block[i:j]
        # find matching brace
        depth, k = 1, j + 1
        while depth:
            if block[k] == "{": depth += 1
            elif block[k] == "}": depth -= 1
            k += 1
        body = block[j + 1:k - 1]
        # comments before a rule are kept in front of it
        comments = "".join(re.findall(r"/\*.*?\*/", prelude, re.S))
        pre = re.sub(r"/\*.*?\*/", "", prelude, flags=re.S).strip()
        lead = prelude[: len(prelude) - len(prelude.lstrip())] + comments + ("\n" if comments else "")
        if pre.startswith("@font-face"):
            pass  # dropped: fonts come from the site's next/font set
        elif pre.startswith("@keyframes"):
            name = pre.split()[1]
            out.append(f"{lead}@keyframes plf-{name}{{{body}}}")
        elif pre.startswith("@media") or pre.startswith("@supports"):
            # @supports conditions mention properties, not classes — keep text
            out.append(f"{lead}{pre}{{{transform(body)}}}")
        else:
            out.append(f"{lead}{scope_selector(pre)}{{{fix_decls(body)}}}")
        i = k
    return "".join(out)

css_out = transform(css)
css_out = re.sub(r"\n{3,}", "\n\n", css_out)
header = """/*
  «استمارة اللياسة» — route-scoped stylesheet, ported from the owner-authored
  shoghmoum-plastering-form-source.html by scripts/port-plastering-form.py.
  Every class is prefixed `plf-` and global rules are scoped under .plf-page,
  so nothing here can touch the rest of the site (and vice versa). The design
  is kept exactly as authored; only the embedded base64 fonts were dropped in
  favour of the site's self-hosted IBM Plex Sans Arabic.
*/
"""
open(OUT + "plastering-form.css", "w").write(header + css_out.strip() + "\n")

# ───────────────────────── HTML → JSX ─────────────────────────
body = src[src.index('<div class="page"'): src.index("<script>")]
body = body.rstrip()
VOID = {"img", "br", "hr", "input", "meta", "link"}
ATTR_MAP = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex",
            "stroke-width": "strokeWidth", "fill-rule": "fillRule",
            "viewbox": "viewBox", "preserveaspectratio": "preserveAspectRatio"}

def style_obj(st):
    items = []
    for decl in [d.strip() for d in st.split(";") if d.strip()]:
        k, v = decl.split(":", 1)
        k, v = k.strip(), v.strip()
        if not k.startswith("--"):
            k = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)
        items.append(f'"{k}": "{v}"')
    return "{{ " + ", ".join(items) + " } as CSSProperties}"

def jsx_text(t):
    return t.replace("{", "{'{'}").replace("}", "{'}'}")

class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.out = []
    def attrs_to_jsx(self, tag, attrs):
        parts = []
        for k, v in attrs:
            kk = ATTR_MAP.get(k, k)
            if kk == "className":
                v = " ".join("plf-" + c for c in v.split())
            if kk == "style":
                parts.append(f"style={style_obj(v)}"); continue
            if kk == "href" and v.startswith("https://wa.me/"):
                parts.append("href={WHATSAPP_HREF}"); continue
            if kk == "data-copy" and v == "__PAGE_URL__":
                parts.append('data-copy="__PAGE_URL__"'); continue
            if v is None:
                parts.append(kk)
            else:
                parts.append(f'{kk}="{html.unescape(v)}"' if '"' not in v else f"{kk}={{{v!r}}}")
        return (" " + " ".join(parts)) if parts else ""
    def handle_starttag(self, tag, attrs):
        if tag == "img":
            a = dict(attrs)
            self.out.append(
                '<Image src={handshake} alt="%s" sizes="(min-width: 700px) 100vw, 120vw" preload />'
                % a["alt"])
            return
        a = self.attrs_to_jsx(tag, attrs)
        self.out.append(f"<{tag}{a}{' /' if tag in VOID else ''}>")
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID and tag != "img":
            self.out[-1] = self.out[-1][:-1] + " />"
    def handle_endtag(self, tag):
        if tag in VOID: return
        self.out.append(f"</{tag}>")
    def handle_data(self, d):
        self.out.append(jsx_text(d))
    def handle_comment(self, c):
        self.out.append("{/*" + c.replace("*/", "* /") + "*/}")
    def handle_entityref(self, name):
        self.out.append(html.unescape(f"&{name};"))
    def handle_charref(self, name):
        self.out.append(html.unescape(f"&#{name};"))

p = P(); p.feed(body)
jsx = "".join(p.out)
# Motion classes are server-rendered so the cover's entrance plays from the
# first paint; FormBehaviour removes `plf-js` when motion is reduced.
jsx = jsx.replace('<div className="plf-page" lang="ar" dir="rtl">', '<div className="plf-page plf-js" lang="ar" dir="rtl">', 1)
# the page root: lang/dir kept, plus the class the behaviour component toggles
tsx = '''/*
 * «استمارة اللياسة» — body markup generated from the owner-authored source by
 * scripts/port-plastering-form.py. Content is verbatim; edit the source and
 * re-run the script rather than hand-editing wording here.
 */
import type { CSSProperties } from "react";
import Image from "next/image";
import handshake from "@/public/images/plastering-form/handshake-engraving.webp";
import { FormBehaviour } from "./FormBehaviour";
import { WHATSAPP_HREF } from "./constants";

export function FormBody() {
  return (
    <>
''' + jsx + '''
      <FormBehaviour />
    </>
  );
}
'''
open(OUT + "FormBody.tsx", "w").write(tsx)
print("css", len(css_out), "jsx", len(jsx))
