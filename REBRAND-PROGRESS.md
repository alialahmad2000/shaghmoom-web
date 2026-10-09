# REBRAND PROGRESS — branch `rebrand-2026-10`

Worktree: `~/projects/shaghmoom-web-rebrand` (isolated; `~/projects/shaghmoom-web` stays on `main`).
Brief: `~/Downloads/shoghmoum-rebrand-and-plastering-form.md`. Finish line = pushed branch + Vercel **preview** + `REBRAND-REPORT.md`. No merge, no production deploy.

If the session restarts: read this file + `git log --oneline origin/main..HEAD`, continue from "In progress".

| # | Phase | Status |
|---|---|---|
| 1 | Kit unzipped to `brand/shoghmoum-brand-kit/` + `REBRAND-AUDIT.md` | done |
| 2 | Tokens, fonts, logo, web assets | pending |
| 3 | Layout, sections, graphics per page | pending |
| 4 | Copy + metadata | pending |
| 5 | «استمارة اللياسة» page + links | pending |
| 6 | Verification fixes (build, lint, 375/768/1440, contrast, Lighthouse, print) | pending |
| 7 | `REBRAND-REPORT.md`, push, preview URL | pending |

## Decisions taken (carry into the report)
- Footer is rendered per page (not in the layout) so its ground can be the opposite of the page's last section, and so the form page can omit it.
- Header is maroon everywhere; it joins the maroon hero / page header as one block.
- Measuring grid used only behind the "tenth" diagram on About/home (a drawn diagram, not texture).
- Hero gold element = the eyebrow «عين على ما غاب عن الورق» set at 24px (gold on maroon passes only ≥24px).
- Stock photos removed (old aubergine duotone baked in); owner's three real service photos kept.
- Projects (placeholders) removed from the home page per brand §11 ("when photos exist"); routes kept.

## Baseline Lighthouse (live www.shaghmoom.com/ar, mobile)
(filled in phase 6)
