import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { servicesByCategory } from "@/content/services";
import { servicesTrio } from "@/content/site";
import { Section, type Ground } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { Ring } from "@/components/brand/Ring";

type Item = { label: string; path: string };

/**
 * عظم · تشطيبات · إشراف — three cards on a locked grid (brand §9, §11):
 * headings start at the same height and size; only the end of each body
 * varies. Finishing quality is the marketing focus, so the تشطيبات card
 * carries a heavier rule on its inline start. No gold here: the screens above
 * (the callout) and below (the method path) already carry one.
 * The star texture shows around the opaque cards, never under text.
 */
export function ServicesTrio({
  locale,
  ground = "maroon",
  headingAs = "h2",
}: {
  locale: Locale;
  ground?: Ground;
  headingAs?: "h2" | "h3";
}) {
  const structure: Item[] = servicesByCategory("construction").map((s) => ({
    label: s.title,
    path: `/services/${s.slug}`,
  }));
  const finishes: Item[] = servicesByCategory("finishing").map((s) => ({
    label: s.title,
    path: `/services/${s.slug}`,
  }));
  const supervision: Item[] = [
    { label: "منهجيتنا والتقارير الفنية", path: "/methodology" },
    { label: "استمارة اللياسة", path: "/plastering-form" },
  ];

  const cards = [
    { ...servicesTrio.cards.structure, items: structure, focus: false },
    { ...servicesTrio.cards.finishes, items: finishes, focus: true },
    { ...servicesTrio.cards.supervision, items: supervision, focus: false },
  ];

  return (
    <Section ground={ground} labelledBy="trio-title">
      <SectionHeading
        id="trio-title"
        as={headingAs}
        eyebrow={servicesTrio.eyebrow}
        title={servicesTrio.heading}
        intro={<p>{servicesTrio.intro}</p>}
      />

      <div className="relative mt-16">
        <div aria-hidden="true" className="sh-star-field sh-star-field--fade absolute -inset-y-12 inset-x-[calc(50%-50vw)]" />
        <ol className="relative grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal as="li" key={card.title} index={i} step={0.07} className="flex">
              <article
                className={`flex w-full flex-col border-[1.5px] border-ink/35 bg-ground p-7 sm:p-8 ${
                  card.focus ? "border-s-[6px] border-s-ink" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <Ring n={i + 1} size="sm" />
                  <h3 className="text-h3">{card.title}</h3>
                </div>
                <p className="mt-5 text-body text-ink/80">{card.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={localePath(locale, item.path)}
                        className="inline-block rounded-brand border border-ink/35 px-3 py-1.5 text-sm leading-normal transition-colors hover:border-ink hover:bg-ink hover:text-ground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="mt-12">
        <Button href={localePath(locale, "/services")} variant="ghost" icon={<ArrowEnd />}>
          {servicesTrio.more}
        </Button>
      </Reveal>
    </Section>
  );
}
