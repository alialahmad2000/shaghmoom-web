#!/usr/bin/env python3
"""
Merge the brand kit's split IBM Plex Sans Arabic files (an Arabic subset and a
Latin subset per weight) into one woff2 per weight, so the site loads a single
face per weight: no second family, no Latin file fetched after the Arabic one
just for spaces, digits and punctuation. Glyphs and features are unchanged —
it is a merge of the two kit files, not a re-subset. Requires fonttools+brotli.

  python3 scripts/merge-plex-subsets.py brand/shoghmoum-brand-kit/04_typography/fonts app/fonts/ibm-plex-sans-arabic 400 500 600
"""
import sys, os, tempfile
from fontTools.ttLib import TTFont
from fontTools.merge import Merger

src, out, *weights = sys.argv[1:]
for w in weights:
    tmp = []
    for part in ("arabic", "latin"):
        f = TTFont(os.path.join(src, f"ibm-plex-sans-arabic-{part}-{w}-normal.woff2"))
        f.flavor = None
        p = tempfile.mktemp(suffix=".ttf"); f.save(p); tmp.append(p)
    merged = Merger().merge(tmp)
    merged.flavor = "woff2"
    dst = os.path.join(out, f"ibm-plex-sans-arabic-{w}.woff2")
    merged.save(dst)
    print(dst, os.path.getsize(dst), len(merged.getBestCmap()), "codepoints")
