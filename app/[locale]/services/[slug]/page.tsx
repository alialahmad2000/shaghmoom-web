import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";
import {
  services,
  getService,
  relatedServices,
  categories,
} from "@/content/services";
import { ctaLabel } from "@/content/site";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

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

      <PageHeader
        locale={loc}
        eyebrow={cat.title}
        title={service.seoTitle}
        intro={service.intro}
        crumbs={[
          { label: "خدماتنا", path: "/services" },
          { label: service.title },
        ]}
      />

      <Section tone="bg">
        {service.image && (
          <Reveal className="mb-12 block">
            <figure className="relative overflow-hidden rounded-2xl ring-1 ring-brand/15">
              <MediaFrame
                src={service.image.src}
                alt={service.image.alt}
                ready
                aspect="4 / 1"
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                rounded="rounded-2xl"
              />
              {/* subtle maroon edge so the real photo reads native, not pasted */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/20 to-transparent"
              />
              <figcaption className="absolute bottom-3 start-4 text-xs text-bg/85">
                من أعمال شغموم
              </figcaption>
            </figure>
          </Reveal>
        )}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-2xl text-ink">ما يشمله</h2>
              <span aria-hidden="true" className="mt-4 block h-px w-12 bg-brand/40" />
            </Reveal>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.included.map((item, i) => (
                <Reveal as="li" key={item} index={i} step={0.05}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-surface p-4">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <span className="text-ink/85">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <div className="mt-12 rounded-2xl bg-brand-tint/60 p-8">
                <h2 className="text-2xl text-brand">لماذا شغموم</h2>
                <p className="mt-4 text-lg leading-loose text-ink/85">
                  {service.why}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Aside: CTA + related */}
          <aside className="lg:col-span-5">
            <Reveal index={1}>
              <div className="rounded-2xl border border-line bg-surface p-7">
                <h2 className="text-xl text-ink">
                  مهتمٌ بـ{service.title} في المدينة المنورة؟
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  أرسل تفاصيل مشروعك واحصل على عرض سعرٍ واضح، أو تواصل معنا مباشرةً
                  عبر واتساب.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    href={localePath(loc, "/contact")}
                    icon={<ArrowEnd />}
                    className="w-full"
                  >
                    {ctaLabel}
                  </Button>
                  <WhatsAppButton
                    className="w-full"
                    message={`السلام عليكم، أرغب في الاستفسار عن خدمة ${service.title} في المدينة المنورة.`}
                  />
                </div>
              </div>
            </Reveal>

            {related.length > 0 && (
              <Reveal index={2}>
                <div className="mt-6 rounded-2xl border border-line bg-bg p-7">
                  <h2 className="text-sm font-medium text-faint">
                    خدمات ذات صلة
                  </h2>
                  <ul className="mt-4 space-y-1">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={localePath(loc, `/services/${r.slug}`)}
                          className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-ink/85 transition-colors hover:bg-bg-alt hover:text-brand"
                        >
                          <span>{r.title}</span>
                          <ArrowEnd className="opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </Section>

      <ClosingCta locale={loc} />
    </>
  );
}
