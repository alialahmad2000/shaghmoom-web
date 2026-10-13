import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import {
  LOCALES,
  HTML_LANG,
  dirFor,
  isLocale,
  type Locale,
} from "@/lib/i18n";
import { SITE_URL, SITE_NAME_AR } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { GOOGLE_SITE_VERIFICATION } from "@/content/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

/*
 * IBM Plex Sans Arabic (SIL OFL) — the one typeface, self-hosted from the brand
 * kit (04_typography/fonts). The kit ships each weight as an Arabic and a Latin
 * subset; scripts/merge-plex-subsets.py merges them into one file per weight so
 * a single face carries Arabic text, digits, punctuation and Latin runs.
 * Weights in use: 400 body · 500 labels · 600 headings & callouts. (700, for
 * big numerals, is in the kit; add it here when an element needs it.)
 */
const plex = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
  preload: true,
});

const fontVars = plex.variable;

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Unknown paths render on demand and raise notFound(), so the visitor gets the
// branded 404 inside the site layout (header, logo, footer).

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME_AR} | مقاول عظم وتشطيب في المدينة المنورة`,
    template: `%s · ${SITE_NAME_AR}`,
  },
  description:
    "شغموم للمقاولات العامة في المدينة المنورة: عظم وتشطيبات وإشراف. نرى ما لم يُرسَم.. ونُتقن ما لا يُرى.",
  applicationName: SITE_NAME_AR,
  authors: [{ name: SITE_NAME_AR }],
  creator: SITE_NAME_AR,
  publisher: SITE_NAME_AR,
  formatDetection: { telephone: true },
  /*
   * Browser icon (owner note 8): the mark alone, no ground, tight crop. The
   * SVG switches to sand in dark mode by itself; the PNGs do it through
   * `media`. Home-screen icons keep the maroon ground (iOS fills transparency
   * with black) with a larger mark. Built by scripts/make-brand-images.mjs.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-mark.svg", type: "image/svg+xml" },
      { url: "/icon-mark-96.png", sizes: "96x96", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-mark-dark-96.png", sizes: "96x96", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-mark-32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-mark-dark-32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
  },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#441420",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const loc = locale as Locale;

  return (
    <html
      lang={HTML_LANG[loc]}
      dir={dirFor(loc)}
      className={`${fontVars} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema(loc)} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-brand focus:bg-sand focus:px-5 focus:py-2 focus:text-maroon"
        >
          تخطَّ إلى المحتوى
        </a>
        <Header locale={loc} />
        {/* Each page renders its own closing + footer (<SiteFooter>) so the footer
            ground can be the opposite of the page's last section, and so the
            plastering form can replace it with its own legal footer. */}
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <WhatsAppFab locale={loc} />
        <Analytics />
      </body>
    </html>
  );
}
