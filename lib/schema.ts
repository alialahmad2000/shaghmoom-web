/**
 * JSON-LD structured data (§10). Conservative and accurate — no aggregateRating
 * (we have no verified rating count). Rendered via a <script type="application/ld+json">.
 */
import { SITE_URL, SITE_NAME_AR } from "./seo";
import { company, contact, social } from "@/content/site";
import { services } from "@/content/services";
import type { Locale } from "./i18n";

/** Scrub `<` to its unicode escape to prevent XSS via JSON-LD injection. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const PHONE_INTL = "+966553346250";

/** GeneralContractor / LocalBusiness for the organization. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME_AR,
    alternateName: company.latin,
    legalName: company.legalName,
    url: SITE_URL,
    image: `${SITE_URL}/brand/og-default.png`,
    logo: `${SITE_URL}/brand/logo.svg`,
    slogan: company.brandLine,
    description:
      "شركة شغموم للمقاولات العامة — مقاول عظم وتشطيب في المدينة المنورة، يقوم تنفيذه على الدقة والانتباه لما لا يُرى.",
    telephone: PHONE_INTL,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.district,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "SA",
    },
    areaServed: [
      { "@type": "City", name: "المدينة المنورة" },
      { "@type": "AdministrativeArea", name: "منطقة المدينة المنورة" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [social.instagram].filter(Boolean),
    knowsAbout: ["مقاولات عامة", "أعمال عظم", "تشطيبات", "تسليم مفتاح"],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        areaServed: company.city,
      },
    })),
  };
}

/** Service schema for a single service page. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    url: opts.url,
    areaServed: { "@type": "City", name: company.city },
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

/** BreadcrumbList for a page. items: [{name, url}] in order (root first). */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** WebSite schema (home). */
export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME_AR,
    url: `${SITE_URL}/${locale}`,
    inLanguage: "ar-SA",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Helper to inline contact for schema consumers. */
export const orgContact = { phone: PHONE_INTL, whatsapp: contact.whatsapp };
