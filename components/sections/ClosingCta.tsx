import { localePath, type Locale } from "@/lib/i18n";
import { closingCta, ctaLabel, company, contact, telHref } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PinIcon, PhoneIcon } from "@/components/ui/icons";

/** Closing CTA (§7). */
export function ClosingCta({
  locale,
  heading = closingCta.heading,
  body = closingCta.body,
}: {
  locale: Locale;
  heading?: string;
  body?: string;
}) {
  return (
    <Section tone="brand" grid containerSize="narrow">
      <Reveal className="flex flex-col items-center text-center">
        <span className="font-display text-sm tracking-wide text-bg/70">
          {company.brandLine}
        </span>
        <h2 className="mt-4 text-balance text-3xl text-bg sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-bg/80">{body}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            href={localePath(locale, "/contact")}
            size="lg"
            icon={<ArrowEnd />}
            className="bg-bg text-brand hover:bg-surface"
          >
            {ctaLabel}
          </Button>
          <WhatsAppButton
            size="lg"
            variant="secondary"
            className="border-bg/40 text-bg hover:border-bg hover:text-bg"
          />
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-bg/80">
          <span className="inline-flex items-center gap-2">
            <PinIcon className="h-4 w-4" />
            {company.city} — {company.district}
          </span>
          <a
            href={telHref(contact.primaryPhone)}
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="tnum">{contact.primaryPhone}</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
