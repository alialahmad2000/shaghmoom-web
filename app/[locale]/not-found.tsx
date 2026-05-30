import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { DEFAULT_LOCALE, localePath } from "@/lib/i18n";

export default function NotFound() {
  return (
    <Section grid containerSize="narrow" className="min-h-[60vh]">
      <div className="flex flex-col items-center text-center">
        <span className="font-display text-6xl text-brand/30 tabular-nums">
          404
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl">الصفحة غير موجودة</h1>
        <p className="mt-4 max-w-md text-muted">
          يبدو أن الرابط الذي تبحث عنه غير متاح. لنُعِدك إلى الصفحة الرئيسية.
        </p>
        <div className="mt-8">
          <Button href={localePath(DEFAULT_LOCALE, "")}>العودة للرئيسية</Button>
        </div>
      </div>
    </Section>
  );
}
