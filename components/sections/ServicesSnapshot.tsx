import { localePath, type Locale } from "@/lib/i18n";
import { services, categories } from "@/content/services";
import { projectTypes } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";

/** Services snapshot — a refined grid of the main service domains (§7). */
export function ServicesSnapshot({ locale }: { locale: Locale }) {
  // A curated snapshot: key domains across both categories.
  const featured = [
    "concrete-works",
    "waterproofing",
    "plastering",
    "flooring",
    "electrical",
    "site-finishes",
  ]
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <Section tone="bg">
      <SectionHeading
        eyebrow="خدماتنا"
        title="من العظم إلى التشطيب — تحت إدارةٍ واحدة"
        intro={`${categories.construction.title} و${categories.finishing.title}: نوحّد مراحل المشروع كلّها بدقةٍ وانضباط.`}
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, i) => (
          <Reveal key={service.slug} index={i} step={0.06}>
            <ServiceCard service={service} locale={locale} index={i} />
          </Reveal>
        ))}
      </div>

      {/* Project types served — signals scale */}
      <Reveal>
        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
          <span className="text-faint">نخدم:</span>
          {projectTypes.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" />
              )}
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12">
          <Button
            href={localePath(locale, "/services")}
            variant="secondary"
            icon={<ArrowEnd />}
          >
            عرض جميع الخدمات
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
