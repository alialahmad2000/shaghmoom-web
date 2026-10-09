import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { meaning } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowEnd } from "@/components/ui/Button";
import { TenthDiagram } from "@/components/brand/TenthDiagram";

/** Home — the name's meaning and the founding story (sand). */
export function Meaning({ locale }: { locale: Locale }) {
  return (
    <Section ground="sand" labelledBy="meaning-title">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading
            id="meaning-title"
            eyebrow={meaning.eyebrow}
            title={meaning.heading}
            intro={<p>{meaning.body}</p>}
            callout={meaning.callout}
          />
          <Reveal>
            <Link
              href={localePath(locale, "/about")}
              className="sh-indent mt-8 inline-flex items-center gap-2 font-semibold underline decoration-ink/30 decoration-2 underline-offset-8 transition-colors hover:decoration-ink"
            >
              {meaning.link}
              <ArrowEnd />
            </Link>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-5 lg:col-start-8">
          <TenthDiagram />
        </Reveal>
      </div>
    </Section>
  );
}
