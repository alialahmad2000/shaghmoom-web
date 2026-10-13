import type { Metadata } from "next";
import { DEFAULT_LOCALE, type Locale } from "./i18n";
import { isHidden } from "@/content/site";

/**
 * Canonical site origin. NEXT_PUBLIC_SITE_URL is set in production; local and
 * preview builds fall back to the primary domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://shoghmoum.com"
).replace(/\/$/, "");

export const SITE_NAME_AR = "شغموم للمقاولات العامة";
export const SITE_NAME_LATIN = "SHOGHMOUM";

/**
 * Share image: the slogan, with everything important inside the centre square
 * (WhatsApp sometimes crops to a square). Built by scripts/make-brand-images.mjs.
 * A new file name each time it changes, so chat apps drop their cached preview.
 */
export const OG_IMAGE = {
  url: "/share-shoghmoum-2026-10.png",
  width: 1200,
  height: 630,
  alt: "شغموم — نرى ما لم يُرسَم.. ونُتقن ما لا يُرى",
} as const;

/** Build an absolute URL from a locale-relative path (e.g. "/about"). */
export function absUrl(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path.replace(/^\//, "");
  return `${SITE_URL}/${locale}${clean ? `/${clean}` : ""}`;
}

type PageMetaInput = {
  locale: Locale;
  /** Locale-relative path, e.g. "/services/finishing". "" = home. */
  path?: string;
  title: string;
  description: string;
  /**
   * When true, `title` is used verbatim (bypasses the layout's brand template).
   * Use for titles that already carry the brand / are fully keyword-tuned.
   */
  fullTitle?: boolean;
};

/**
 * Per-page metadata helper: unique Arabic title/description, canonical,
 * hreflang alternates, Open Graph + Twitter cards. SEO is the spine (§10).
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  fullTitle = false,
}: PageMetaInput): Metadata {
  const canonical = absUrl(locale, path);

  return {
    title: fullTitle ? { absolute: title } : title,
    description,
    ...(isHidden(path) ? { robots: { index: false, follow: true } } : {}),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        ar: absUrl("ar", path),
        // English is scaffolded; the alternate is published once en launches.
        "x-default": absUrl(DEFAULT_LOCALE, path),
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME_AR,
      locale: "ar_SA",
      url: canonical,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
