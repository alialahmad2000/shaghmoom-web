import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { Hero } from "@/components/sections/Hero";
import { Meaning } from "@/components/sections/Meaning";
import { ServicesTrio } from "@/components/sections/ServicesTrio";
import { MethodPath } from "@/components/sections/MethodPath";
import { PlasteringTeaser } from "@/components/sections/PlasteringTeaser";
import { CtaBand } from "@/components/sections/CtaBand";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "",
    fullTitle: true,
    title:
      "شركة شغموم للمقاولات العامة | مقاول عظم وتشطيب في المدينة المنورة",
    description:
      "شركة مقاولات عامة في المدينة المنورة — أعمال عظم وتشطيب وتسليم مفتاح بدقة واحترافية. نرصد ما لا يُرى قبل أن يصبح تكلفة. نبني الثقة قبل الجدران.",
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
        ])}
      />
      {/* Grounds: header+hero maroon · sand · maroon · sand · maroon · sand · footer maroon */}
      <Hero locale={loc} />
      <Meaning locale={loc} />
      <ServicesTrio locale={loc} ground="maroon" />
      <MethodPath locale={loc} ground="sand" />
      <PlasteringTeaser locale={loc} ground="maroon" />
      <CtaBand locale={loc} ground="sand" />
      <SiteFooter locale={loc} ground="maroon" />
    </>
  );
}
