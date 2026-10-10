import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { aboutContent, lines } from "@/content/site";
import { values } from "@/content/values";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueCard } from "@/components/ui/ValueCard";
import { Reveal } from "@/components/ui/Reveal";
import { TenthDiagram } from "@/components/brand/TenthDiagram";
import { CtaBand } from "@/components/sections/CtaBand";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/about",
    title: "من نحن — شركة مقاولات في المدينة المنورة",
    description:
      "شغموم للمقاولات العامة في المدينة المنورة: معنى الاسم، وقصة العُشر الذي لا يحتويه أي مخطط، وطريقتنا في العمل. عظم وتشطيبات وإشراف تحت إدارة واحدة.",
  });
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "من نحن", url: absUrl(loc, "/about") },
        ])}
      />

      {/* Grounds: header+page header maroon · sand · maroon · sand · footer maroon */}
      <PageHeader
        locale={loc}
        eyebrow="من نحن"
        title={aboutContent.title}
        intro={<p>{aboutContent.intro}</p>}
        crumbs={[{ label: "من نحن" }]}
      />

      <Section ground="sand" labelledBy="name-title">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              id="name-title"
              title={aboutContent.nameStory.heading}
              intro={<p>{aboutContent.nameStory.body}</p>}
            />
            <div className="mt-16">
              <SectionHeading
                title={aboutContent.founding.heading}
                intro={<p>{aboutContent.founding.body}</p>}
                callout={lines.positioning}
              />
            </div>
          </div>
          <Reveal className="self-center lg:col-span-5 lg:col-start-8">
            <TenthDiagram />
          </Reveal>
        </div>
      </Section>

      <Section ground="maroon" labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="قيمنا" title="طريقتنا في كل مشروع" />
        <div className="relative mt-14">
          <div aria-hidden="true" className="sh-star-field sh-star-field--fade absolute -inset-y-12 inset-x-[calc(50%-50vw)]" />
          <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} index={i} step={0.05}>
                <ValueCard value={value} index={i} />
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand locale={loc} ground="sand" />
      <SiteFooter locale={loc} ground="maroon" />
    </>
  );
}
