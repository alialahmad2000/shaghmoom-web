import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { FormBody } from "./FormBody";
import "./plastering-form.css";

/*
 * «استمارة اللياسة» — the owner-authored, view-only agreement framework between
 * an owner and a plasterer (read and print; nothing to fill in on screen,
 * nothing stored). It keeps its own visual vocabulary on purpose. The site
 * header stays (and scrolls away here); the global closing/footer and any
 * floating buttons are not rendered, because the form has its own closing,
 * contacts and legal footer.
 *
 * SEO wording is taken only from the form itself.
 */
export async function generateMetadata({
  params,
}: PageProps<"/[locale]/plastering-form">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/plastering-form",
    fullTitle: true,
    title: "استمارة اللياسة: اتفاق المالك والمليّس على الدرجة وسعر المتر | شغموم",
    description:
      "إطار اتفاق بين المالك والمليّس، قبل أول خلطة: درجة التنفيذ من لياسة عادية إلى تربيع وتأكيس، وكيف تُحسب الأمتار والنوافذ والأبواب، والتلبيش، ومن يتحمّل ماذا، والاستلام والضمان. للاطلاع والطباعة، وتصلح مع أي مليّس.",
  });
}

export default async function PlasteringFormPage({
  params,
}: PageProps<"/[locale]/plastering-form">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "استمارة اللياسة", url: absUrl(loc, "/plastering-form") },
        ])}
      />
      <FormBody />
    </>
  );
}
