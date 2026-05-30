/**
 * i18n configuration.
 *
 * Architecture is bilingual-ready: routes are locale-segmented under
 * `app/[locale]/`. At launch only Arabic (`ar`) is populated and built;
 * `en` is scaffolded in the type union but intentionally not yet active.
 * To launch English: add "en" to `LOCALES`, populate the English copy in
 * `content/`, and the rest of the routing/SEO already accounts for it.
 */

export const LOCALES = ["ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ar";

/** Locales the architecture is designed for (incl. not-yet-launched). */
export const PLANNED_LOCALES = ["ar", "en"] as const;
export type PlannedLocale = (typeof PLANNED_LOCALES)[number];

export const DIR: Record<PlannedLocale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

/** BCP-47 lang attribute per locale. */
export const HTML_LANG: Record<PlannedLocale, string> = {
  ar: "ar-SA",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function dirFor(locale: string): "rtl" | "ltr" {
  return DIR[(locale as PlannedLocale)] ?? "rtl";
}

/** Build a locale-prefixed internal href, e.g. localePath("ar", "/about") → "/ar/about". */
export function localePath(locale: string, path = ""): string {
  const clean = path === "/" ? "" : path.replace(/^\//, "");
  return `/${locale}${clean ? `/${clean}` : ""}`;
}
