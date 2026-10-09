import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { DEFAULT_LOCALE, localePath } from "@/lib/i18n";
import { arDigits } from "@/lib/digits";

export default function NotFound() {
  return (
    <>
      <Section ground="sand" wrap="narrow" className="min-h-[60vh]">
        <div className="flex flex-col items-start">
          <p className="text-[64px] font-bold leading-none text-accent">{arDigits(404)}</p>
          <h1 className="mt-6 text-h2">الصفحة غير موجودة</h1>
          <span aria-hidden="true" className="sh-rule mt-6" />
          <p className="sh-indent mt-6 text-body text-ink/80">
            الرابط الذي تبحث عنه غير متاح. يمكنك العودة إلى الصفحة الرئيسية.
          </p>
          <div className="mt-10">
            <Button href={localePath(DEFAULT_LOCALE, "")}>العودة إلى الرئيسية</Button>
          </div>
        </div>
      </Section>
      <SiteFooter locale={DEFAULT_LOCALE} ground="maroon" />
    </>
  );
}
