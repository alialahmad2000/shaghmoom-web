import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Markazi_Text, Tajawal, Hanken_Grotesk } from "next/font/google";
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
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

// Display headings — Markazi Text: modern elegant Naskh, closest free (OFL)
// match to the brand wordmark's HT Moshreq Pro feel.
const display = Markazi_Text({
  subsets: ["arabic", "latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

// Body / UI — Tajawal: clean modern Gulf sans, highly readable Arabic.
const body = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

// Latin runs (phone numbers, SHOGHMOUM wordmark, English) — Hanken Grotesk:
// clean neutral grotesque, closest free match to the brand's Systemia.
const latin = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fontVars = `${display.variable} ${body.variable} ${latin.variable}`;

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
    "شركة شغموم للمقاولات العامة في المدينة المنورة — أعمال عظم وتشطيب وتسليم مفتاح بدقة واحترافية. نبني الثقة قبل الجدران.",
  applicationName: SITE_NAME_AR,
  authors: [{ name: SITE_NAME_AR }],
  creator: SITE_NAME_AR,
  publisher: SITE_NAME_AR,
  formatDetection: { telephone: true },
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
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
      <body className="flex min-h-full flex-col bg-bg text-ink antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema(loc)} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2 focus:text-bg"
        >
          تخطَّ إلى المحتوى
        </a>
        <Header locale={loc} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={loc} />
      </body>
    </html>
  );
}
