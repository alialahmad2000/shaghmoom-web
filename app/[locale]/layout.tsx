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
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

/*
 * IBM Plex Sans Arabic (SIL OFL) — the one typeface, self-hosted from the brand
 * kit (04_typography/fonts). The kit splits each weight into an Arabic and a
 * Latin subset; each subset is its own face with its unicode-range, so the
 * browser fetches the Latin file only when Latin glyphs (digits, spaces) appear.
 * Arabic carries the first screen, so only the Arabic set is preloaded.
 */
const plexArabic = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-arabic-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-arabic-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-arabic-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-ar",
  display: "swap",
  preload: true,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC",
    },
  ],
});

const plexLatin = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-latin",
  display: "swap",
  preload: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
    },
  ],
});

const fontVars = `${plexArabic.variable} ${plexLatin.variable}`;

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Only `ar` is live; other locales 404 until populated (i18n-ready scaffold).
export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME_AR} | مقاول عظم وتشطيب في المدينة المنورة`,
    template: `%s · ${SITE_NAME_AR}`,
  },
  description:
    "شغموم للمقاولات العامة في المدينة المنورة: عظم وتشطيبات وإشراف. عين على ما غاب عن الورق. نبني الثقة قبل الجدران.",
  applicationName: SITE_NAME_AR,
  authors: [{ name: SITE_NAME_AR }],
  creator: SITE_NAME_AR,
  publisher: SITE_NAME_AR,
  formatDetection: { telephone: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
  },
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
      </body>
    </html>
  );
}
