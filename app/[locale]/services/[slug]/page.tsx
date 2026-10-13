import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";
import { arDigits } from "@/lib/digits";
import {
  services,
  getService,
  relatedServices,
  categories,
} from "@/content/services";
import { ctaLabel } from "@/content/site";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CtaBand } from "@/components/sections/CtaBand";
import { PlasteringTeaser } from "@/components/sections/PlasteringTeaser";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

// Unknown paths render on demand and raise notFound(), so the visitor gets the
// branded 404 inside the site layout (header, logo, footer).

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    locale: locale as Locale,
    path: `/services/${slug}`,
    fullTitle: true,
    title: service.metaTitle,
    description: service.metaDescription,
  });
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const service = getService(slug);
  if (!service) notFound();

  const related = relatedServices(slug);
  const cat = categories[service.category];
  const url = absUrl(loc, `/services/${slug}`);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.seoTitle,
          description: service.metaDescription,
          url,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "خدماتنا", url: absUrl(loc, "/services") },
          { name: service.title, url },
        ])}
      />

      {/* Grounds: maroon header · sand (what it covers) · maroon (why) · [sand form] · CTA · footer */}
      <PageHeader
        locale={loc}
        eyebrow={cat.title}
        title={service.seoTitle}
        intro={<p>{service.intro}</p>}
        crumbs={[
          { label: "خدماتنا", path: "/services" },
          { label: service.title },
        ]}
      />

      <Section ground="sand" labelledBy="included-title">
        {service.image && (
          <Reveal className="mb-16 block">
            <figure>
              <MediaFrame
                src={service.image.src}
                alt={service.image.alt}
                ready
                aspect="3 / 1"
                preload
                sizes="(min-width: 1280px) 1088px, 100vw"
              />
              <figcaption className="mt-3 text-sm text-ink/75">من أعمال شغموم</figcaption>
            </figure>
          </Reveal>
        )}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading id="included-title" title="ما يشمله" />
            <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.included.map((item, i) => (
                <Reveal as="li" key={item} index={i} step={0.05} className="flex">
                  <div className="flex w-full items-start gap-4 border-[1.5px] border-ink/30 p-5">
                    <span aria-hidden="true" className="mt-0.5 font-semibold text-accent">
                      {arDigits(i + 1)}
                    </span>
                    <span>{item}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal index={1}>
              <div className="border-[1.5px] border-ink p-7">
                <h2 className="text-[21px] font-semibold leading-snug">
                  {service.title} في المدينة المنورة
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/80">
                  أرسل تفاصيل مشروعك ونعود إليك بعرض سعر، أو اسألنا مباشرةً عبر واتساب.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href={localePath(loc, "/contact")} icon={<ArrowEnd />} className="w-full">
                    {ctaLabel}
                  </Button>
                  <WhatsAppButton
                    className="w-full"
                    message={`السلام عليكم، أرغب في الاستفسار عن خدمة ${service.title} في المدينة المنورة.`}
                  />
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section ground="maroon" labelledBy="why-title">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading id="why-title" eyebrow="عين على ما غاب عن الورق" title="ما ننتبه له" intro={<p>{service.why}</p>} />
          </div>
          {related.length > 0 && (
            <Reveal index={1} className="lg:col-span-4 lg:col-start-9">
              <nav aria-labelledby="related-title">
                <h2 id="related-title" className="sh-eyebrow">خدمات ذات صلة</h2>
                <ul className="mt-4 border-t border-ink/20">
                  {related.map((r) => (
                    <li key={r.slug} className="border-b border-ink/20">
                      <Link
                        href={localePath(loc, `/services/${r.slug}`)}
                        className="group flex items-center justify-between gap-3 py-3.5 text-ink/85 transition-colors hover:text-ink"
                      >
                        <span>{r.title}</span>
                        <ArrowEnd className="opacity-60 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          )}
        </div>
      </Section>

      {service.slug === "plastering" ? (
        <>
          <PlasteringTeaser locale={loc} ground="sand" />
          <CtaBand locale={loc} ground="maroon" />
          <SiteFooter locale={loc} ground="sand" />
        </>
      ) : (
        <>
          <CtaBand locale={loc} ground="sand" />
          <SiteFooter locale={loc} ground="maroon" />
        </>
      )}
    </>
  );
}
