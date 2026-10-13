import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { DEFAULT_LOCALE, localePath } from "@/lib/i18n";
import { siteLinks } from "@/content/site";
import { arDigits } from "@/lib/digits";

/** The 404, inside the identity (owner note 21). Header comes from the layout. */
export default function NotFound() {
  const loc = DEFAULT_LOCALE;
  return (
    <>
      <section
        data-ground="maroon"
        aria-labelledby="nf-title"
        className="ground-maroon relative isolate overflow-hidden"
      >
        <div aria-hidden="true" className="sh-hero-grid absolute inset-0 -z-10" />
        <div className="sh-wrap relative pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
          <p className="sh-eyebrow mb-3">
            <span className="tnum">{arDigits(404)}</span> · الصفحة غير موجودة
          </p>
          <h1 id="nf-title" className="sh-measure text-h1">
            حتى هذه الصفحة لم تُرسَم في المخطط
          </h1>
          <span aria-hidden="true" className="sh-rule mt-8" />
          <p className="sh-indent sh-measure mt-7 text-body text-ink/90">
            الرابط الذي فتحته غير موجود، أو نُقل إلى مكان آخر. ابدأ من الرئيسية، أو اسألنا مباشرة.
          </p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={localePath(loc, "")} size="lg" icon={<ArrowEnd />}>
              العودة إلى الرئيسية
            </Button>
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </section>

      <Section ground="sand" labelledBy="nf-links">
        <h2 id="nf-links" className="text-h3">صفحات قد تبحث عنها</h2>
        <ul className="mt-8 grid grid-cols-1 gap-x-10 border-t border-ink/20 sm:grid-cols-2">
          {siteLinks
            .filter((l) => l.path !== "")
            .map((l) => (
              <li key={l.path} className="border-b border-ink/20">
                <Link
                  href={localePath(loc, l.path)}
                  className="flex items-center justify-between gap-4 py-4 text-lg font-semibold hover:underline"
                >
                  {l.label}
                  <ArrowEnd />
                </Link>
              </li>
            ))}
        </ul>
      </Section>
      <SiteFooter locale={loc} ground="maroon" />
    </>
  );
}
