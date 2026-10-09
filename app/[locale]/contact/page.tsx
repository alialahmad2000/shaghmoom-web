import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { company, contact, social, telHref } from "@/content/site";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneIcon, PinIcon, ClockIcon } from "@/components/ui/icons";
import { SiteFooter } from "@/components/layout/SiteFooter";
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
      "تواصل مع شغموم للمقاولات العامة في المدينة المنورة، حي النعيم. اطلب عرض سعر لأعمال العظم والتشطيب، أو اسألنا عبر واتساب. أوقات العمل من ٩ صباحًا إلى ٦ مساءً.",
  });
}

const mapsQuery = encodeURIComponent(
  `شغموم للمقاولات العامة ${company.city} ${company.district}`
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

      {/* Grounds: maroon header · sand (form) · footer maroon */}
      <PageHeader
        locale={loc}
        eyebrow="تواصل معنا"
        title="حدّثنا عن مشروعك"
        intro={<p>أرسل تفاصيل مشروعك ونعود إليك بعرض سعر. وإن كان سؤالك قصيرًا، فواتساب أسرع.</p>}
        crumbs={[{ label: "تواصل معنا" }]}
      />

      <Section ground="sand" labelledBy="form-title">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 id="form-title" className="text-h3">اطلب عرض سعر</h2>
              <p className="mt-2 text-ink/80">
                الحقول المعلّمة بـ <span className="text-accent">*</span> مطلوبة.
              </p>
            </Reveal>
            <Reveal index={1} className="mt-8 block">
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal index={1}>
              <div className="border-[1.5px] border-ink p-7">
                <h2 className="text-[21px] font-semibold leading-snug">تواصل مباشر</h2>
                <p className="mt-2 text-[15px] text-ink/80">للأسئلة السريعة، واتساب هو الأسرع.</p>
                <div className="mt-5">
                  <WhatsAppButton size="lg" variant="solid" className="w-full" />
                </div>

                <ul className="mt-7 divide-y divide-ink/20 border-t border-ink/20 text-[15px]">
                  <li>
                    <a href={telHref(contact.primaryPhone)} className="flex items-center gap-3 py-4 hover:underline">
                      <PhoneIcon className="h-5 w-5 shrink-0" />
                      <span className="flex flex-col">
                        <span className="text-sm text-ink/75">جوال وواتساب</span>
                        <span className="tnum text-base font-semibold">{contact.primaryPhone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={telHref(contact.secondaryPhone)} className="flex items-center gap-3 py-4 hover:underline">
                      <PhoneIcon className="h-5 w-5 shrink-0" />
                      <span className="flex flex-col">
                        <span className="text-sm text-ink/75">جوال إضافي</span>
                        <span className="tnum text-base font-semibold">{contact.secondaryPhone}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 py-4">
                    <ClockIcon className="h-5 w-5 shrink-0" />
                    <span className="flex flex-col">
                      <span className="text-sm text-ink/75">أوقات العمل</span>
                      <span className="text-base font-semibold">{company.hours}</span>
                    </span>
                  </li>
                  <li>
                    <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-4 hover:underline">
                      <PinIcon className="h-5 w-5 shrink-0" />
                      <span className="flex flex-col">
                        <span className="text-sm text-ink/75">الموقع — افتح في الخرائط</span>
                        <span className="text-base font-semibold">
                          {company.city} — {company.district}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="py-4">
                    <span className="text-sm text-ink/75">إنستقرام وتيك توك</span>
                    <span className="mt-1 flex gap-4">
                      <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="ltr font-semibold hover:underline">
                        instagram.com/shoghmoum
                      </a>
                    </span>
                    <span className="mt-1 flex gap-4">
                      <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="ltr font-semibold hover:underline">
                        tiktok.com/@shoghmoum
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <SiteFooter locale={loc} ground="maroon" />
    </>
  );
}
