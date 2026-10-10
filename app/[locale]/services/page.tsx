import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { localePath, type Locale } from "@/lib/i18n";
import { categories, servicesByCategory, type ServiceCategory } from "@/content/services";
import { projectTypes, servicesTrio } from "@/content/site";
import { inspectionReports } from "@/content/methodology";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section, type Ground } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/services",
    title: "خدماتنا — مقاول عظم وتشطيب في المدينة المنورة",
    description:
      "خدمات شغموم في المدينة المنورة: عظم (الهيكل الخرساني والبناء والعزل)، وتشطيبات كاملة (اللياسة والأرضيات والدهانات والكهرباء والسباكة والتكييف)، وإشراف وتقارير فنية قبل اللياسة.",
  });
}

const groups: { cat: ServiceCategory; id: string; title: string; body: string; ground: Ground }[] = [
  { cat: "construction", id: "structure", title: servicesTrio.cards.structure.title, body: servicesTrio.cards.structure.body, ground: "sand" },
  { cat: "finishing", id: "finishes", title: servicesTrio.cards.finishes.title, body: servicesTrio.cards.finishes.body, ground: "maroon" },
];

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "خدماتنا", url: absUrl(loc, "/services") },
        ])}
      />

      {/* Grounds: maroon header · sand (عظم) · maroon (تشطيبات) · sand (إشراف) · maroon CTA · footer sand */}
      <PageHeader
        locale={loc}
        eyebrow="خدماتنا"
        title={servicesTrio.heading}
        intro={
          <p>
            {servicesTrio.intro} نخدم: {projectTypes.join("، ")}.
          </p>
        }
        crumbs={[{ label: "خدماتنا" }]}
      />

      {groups.map((g) => {
        const list = servicesByCategory(g.cat);
        return (
          <Section key={g.cat} ground={g.ground} id={g.id} labelledBy={`${g.id}-title`}>
            <SectionHeading
              id={`${g.id}-title`}
              eyebrow={categories[g.cat].title}
              title={g.title}
              intro={<p>{g.body}</p>}
            />
            <div className="relative mt-14">
              {g.ground === "maroon" && (
                <div aria-hidden="true" className="sh-star-field sh-star-field--fade absolute -inset-y-12 inset-x-[calc(50%-50vw)]" />
              )}
              <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
                {list.map((service, i) => (
                  <Reveal as="li" key={service.slug} index={i} step={0.05}>
                    <ServiceCard service={service} locale={loc} index={i} />
                  </Reveal>
                ))}
              </ol>
            </div>
          </Section>
        );
      })}

      <Section ground="sand" id="supervision" labelledBy="supervision-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              id="supervision-title"
              eyebrow={inspectionReports.heading}
              title={servicesTrio.cards.supervision.title}
              intro={<p>{inspectionReports.body}</p>}
            />
          </div>
          <Reveal className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9 lg:self-end">
            <Button href={localePath(loc, "/methodology")} variant="ghost" icon={<ArrowEnd />}>
              منهجيتنا والتقارير الفنية
            </Button>
            <Link
              href={localePath(loc, "/plastering-form")}
              className="inline-flex items-center gap-2 py-2 font-semibold underline decoration-ink/30 decoration-2 underline-offset-8 hover:decoration-ink"
            >
              استمارة اللياسة <ArrowEnd />
            </Link>
          </Reveal>
        </div>
      </Section>

      <CtaBand locale={loc} ground="maroon" />
      <SiteFooter locale={loc} ground="sand" />
    </>
  );
}
