import { localePath, type Locale } from "@/lib/i18n";
import { ctaBand, ctaLabel } from "@/content/site";
import { Section, type Ground } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * The request-a-quote band that precedes the closing on most pages. Its ground
 * is the opposite of the section before it. No gold: the closing below
 * carries the brush.
 */
export function CtaBand({
  locale,
  ground,
  heading = ctaBand.heading,
  body = ctaBand.body,
  whatsappMessage,
}: {
  locale: Locale;
  ground: Ground;
  heading?: string;
  body?: string;
  whatsappMessage?: string;
}) {
  return (
    <Section ground={ground} labelledBy="cta-title">
      <div className="flex flex-col items-start gap-10">
        <SectionHeading id="cta-title" title={heading} intro={<p>{body}</p>} />
        <Reveal className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href={localePath(locale, "/contact")} size="lg" icon={<ArrowEnd />}>
            {ctaLabel}
          </Button>
          <WhatsAppButton size="lg" message={whatsappMessage} />
        </Reveal>
      </div>
    </Section>
  );
}
