import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { company, contact, telHref } from "@/content/site";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneIcon, PinIcon, ClockIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/contact",
    title: "تواصل معنا — شغموم للمقاولات في المدينة المنورة",
    description:
      "تواصل مع شركة شغموم للمقاولات العامة في المدينة المنورة — حي النعيم. اطلب عرض سعر، أو راسلنا عبر واتساب. أوقات العمل 09:00 – 18:00.",
  });
}

const mapsQuery = encodeURIComponent(
  `${company.publicName} ${company.city} ${company.district}`
);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "تواصل معنا", url: absUrl(loc, "/contact") },
        ])}
      />

      <PageHeader
        locale={loc}
        eyebrow="تواصل معنا"
        title="لنبدأ مشروعك"
        intro="أرسل تفاصيل مشروعك وسنعود إليك بعرضٍ واضح. أو تواصل معنا مباشرةً عبر واتساب — أيًّا كان الأسرع لك."
        crumbs={[{ label: "تواصل معنا" }]}
      />

      <Section tone="bg">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-2xl text-ink">اطلب عرض سعر</h2>
              <p className="mt-2 text-muted">
                الحقول المعلّمة بـ <span className="text-brand">*</span> مطلوبة.
              </p>
            </Reveal>
            <Reveal index={1} className="mt-8 block">
              <ContactForm />
            </Reveal>
          </div>

          {/* Contact details */}
          <aside className="lg:col-span-5">
            <Reveal index={1}>
              <div className="rounded-2xl border border-line bg-surface p-7">
                <h2 className="text-xl text-ink">تواصل مباشر</h2>
                <p className="mt-2 text-sm text-muted">
                  للأسئلة السريعة، واتساب هو الأسرع.
                </p>
                <div className="mt-5">
                  <WhatsAppButton size="lg" className="w-full" />
                </div>

                <ul className="mt-7 space-y-5 text-sm">
                  <li>
                    <a
                      href={telHref(contact.primaryPhone)}
                      className="group flex items-center gap-3 text-ink/85 transition-colors hover:text-brand"
                    >
                      <Icon>
                        <PhoneIcon className="h-5 w-5" />
                      </Icon>
                      <span className="flex flex-col">
                        <span className="text-xs text-faint">جوال</span>
                        <span className="tnum text-base">{contact.primaryPhone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={telHref(contact.secondaryPhone)}
                      className="group flex items-center gap-3 text-ink/85 transition-colors hover:text-brand"
                    >
                      <Icon>
                        <PhoneIcon className="h-5 w-5" />
                      </Icon>
                      <span className="flex flex-col">
                        <span className="text-xs text-faint">جوال إضافي</span>
                        <span className="tnum text-base">{contact.secondaryPhone}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-ink/85">
                    <Icon>
                      <ClockIcon className="h-5 w-5" />
                    </Icon>
                    <span className="flex flex-col">
                      <span className="text-xs text-faint">أوقات العمل</span>
                      <span className="tnum text-base">{company.hours}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Location / map */}
            <Reveal index={2}>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 block overflow-hidden rounded-2xl border border-line"
              >
                <div className="relative aspect-[16/10] bg-bg-alt">
                  <div aria-hidden="true" className="blueprint absolute inset-0 opacity-70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-bg shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <PinIcon className="h-6 w-6" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 bg-surface px-5 py-4">
                  <span className="flex flex-col">
                    <span className="text-xs text-faint">الموقع</span>
                    <span className="text-ink">
                      {company.city} — {company.district}
                    </span>
                  </span>
                  <span className="text-sm font-medium text-brand">
                    افتح في الخرائط
                  </span>
                </div>
              </a>
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
      {children}
    </span>
  );
}
