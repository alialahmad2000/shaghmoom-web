import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { company, contact, whatsappHref } from "@/content/site";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * Privacy policy (owner note 17): the quote form collects a name and a mobile
 * number, so the Saudi Personal Data Protection Law requires telling people
 * what is collected, why, and their rights. Short and plain on purpose.
 * PROPOSED wording — to be confirmed by the owner.
 */
const UPDATED = "١٢ أكتوبر ٢٠٢٦";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/privacy",
    title: "سياسة الخصوصية",
    description:
      "سياسة الخصوصية لموقع شغموم للمقاولات العامة: ما البيانات التي نجمعها عند طلب عرض السعر، ولماذا، وكم نحتفظ بها، وما حقوقك عليها.",
  });
}

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "من نحن",
    body: (
      <p>
        هذا الموقع تديره {company.legalName} («{company.shortName}»)، {company.city}، {company.country}. نحن
        الجهة المسؤولة عن البيانات التي ترسلها إلينا عبره.
      </p>
    ),
  },
  {
    title: "ما الذي نجمعه",
    body: (
      <>
        <p>نجمع فقط ما تكتبه بنفسك في نموذج طلب عرض السعر:</p>
        <ul className="mt-3 list-disc space-y-1.5 ps-6">
          <li>الاسم ورقم الجوال.</li>
          <li>نوع المشروع والمدينة.</li>
          <li>تفاصيل المشروع والميزانية التقديرية، إن كتبتها.</li>
        </ul>
        <p className="mt-3">
          ونقيس زيارات الموقع بأرقام مجمّعة (الصفحات الأكثر زيارة ومن أين جاء الزائر) دون ملفات تعريف
          ارتباط ودون تحديد هوية الزائر.
        </p>
      </>
    ),
  },
  {
    title: "لماذا نجمعه",
    body: (
      <p>
        لنرد على طلبك، ونعدّ لك عرض السعر، ونتواصل معك بخصوص مشروعك. لا نستخدم بياناتك في التسويق، ولا
        نرسل إليك رسائل دعائية.
      </p>
    ),
  },
  {
    title: "مع من نشاركه",
    body: (
      <p>
        لا نبيع بياناتك ولا نعطيها لأي جهة لأغراضها الخاصة. تمر البيانات عبر مزوّدي خدمات تقنية يعملون
        لحسابنا فقط (استضافة الموقع والبريد الإلكتروني)، وقد تكون خوادمهم خارج المملكة. ونفصح عنها إذا
        ألزمنا النظام بذلك.
      </p>
    ),
  },
  {
    title: "كم نحتفظ به",
    body: (
      <p>
        نحتفظ ببيانات الطلب المدة اللازمة لمتابعته وللتعامل الذي قد ينتج عنه، ثم نحذفها. ولك أن تطلب
        حذفها قبل ذلك.
      </p>
    ),
  },
  {
    title: "حقوقك",
    body: (
      <>
        <p>لك في أي وقت أن تطلب:</p>
        <ul className="mt-3 list-disc space-y-1.5 ps-6">
          <li>معرفة ما لدينا من بياناتك والحصول على نسخة منها.</li>
          <li>تصحيحها أو استكمالها.</li>
          <li>حذفها، أو سحب موافقتك على استخدامها.</li>
        </ul>
        <p className="mt-3">
          راسلنا على{" "}
          <a href={`mailto:${contact.email}`} className="ltr font-semibold underline underline-offset-4">
            {contact.email}
          </a>{" "}
          أو عبر{" "}
          <a
            href={whatsappHref("السلام عليكم، لدي طلب بخصوص بياناتي الشخصية.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            واتساب
          </a>
          ، ونرد عليك خلال مدة لا تتجاوز ثلاثين يومًا.
        </p>
      </>
    ),
  },
  {
    title: "واتساب والروابط الخارجية",
    body: (
      <p>
        إذا راسلتنا عبر واتساب أو فتحت حساباتنا في إنستقرام وتيك توك، فاستخدامك لتلك التطبيقات يخضع
        لسياسات أصحابها.
      </p>
    ),
  },
  {
    title: "تحديث هذه السياسة",
    body: <p>قد نحدّث هذه الصفحة عند الحاجة، وننشر تاريخ آخر تحديث في أعلاها.</p>,
  },
];

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "سياسة الخصوصية", url: absUrl(loc, "/privacy") },
        ])}
      />

      {/* Grounds: maroon header · sand · footer maroon */}
      <PageHeader
        locale={loc}
        eyebrow="سياسة الخصوصية"
        title="بياناتك عندنا: ما نجمعه ولماذا"
        intro={<p>آخر تحديث: {UPDATED}.</p>}
        crumbs={[{ label: "سياسة الخصوصية" }]}
      />

      <Section ground="sand" wrap="narrow">
        <div className="flex flex-col gap-12">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-h3">{s.title}</h2>
              <div className="sh-measure mt-4 text-body text-ink/85">{s.body}</div>
            </section>
          ))}
        </div>
      </Section>

      <SiteFooter locale={loc} ground="maroon" />
    </>
  );
}
