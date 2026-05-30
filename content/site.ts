/**
 * Central site content — real, on-brand Arabic copy (§7).
 * Keep copy here, out of components, so it is easy to edit and to translate.
 * Voice: formal MSA, calm, precise. Never the loud classified-ad voice.
 */

export const company = {
  legalName: "شركة خالد رافد صياف العمري للمقاولات العامة",
  publicName: "شركة شغموم للمقاولات العامة",
  shortName: "شغموم",
  latin: "Shaghmoom",
  handle: "@shoughmoum",
  brandLine: "وطن يُبنى",
  brandLineLatin: "A Nation Built",
  essence: "المقاول الذي يلحظ ما يغيب عن غيره",
  city: "المدينة المنورة",
  district: "حي النعيم",
  region: "منطقة المدينة المنورة",
  country: "المملكة العربية السعودية",
  hours: "09:00 – 18:00",
} as const;

export const contact = {
  primaryPhone: "0553346250",
  secondaryPhone: "0556332889",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "966553346250",
  // Pre-filled, on-brand WhatsApp opener.
  whatsappMessage:
    "السلام عليكم، أرغب في الاستفسار عن خدمات شركة شغموم للمقاولات العامة.",
  email: "",
} as const;

export function whatsappHref(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telHref(phone: string): string {
  // Saudi local 05x → +9665x for tel: links.
  const intl = phone.replace(/^0/, "+966");
  return `tel:${intl}`;
}

export const social = {
  // Replace with live profile URLs as they go online (used in JSON-LD sameAs).
  instagram: "https://instagram.com/shoughmoum",
} as const;

/** Primary navigation — order matters. CTA handled separately. */
export const nav = [
  { label: "الرئيسية", path: "" },
  { label: "من نحن", path: "/about" },
  { label: "خدماتنا", path: "/services" },
  { label: "أعمالنا", path: "/projects" },
  { label: "منهجيتنا", path: "/methodology" },
  { label: "آراء العملاء", path: "/reviews" },
  { label: "تواصل معنا", path: "/contact" },
] as const;

export const ctaLabel = "اطلب عرض سعر";
export const whatsappLabel = "تواصل عبر واتساب";

/** Hero (home). */
export const hero = {
  eyebrow: company.brandLine,
  title: "نبني الثقة قبل الجدران",
  subhead:
    "شركة شغموم للمقاولات العامة — عظمٌ، وتشطيبٌ، وتنفيذٌ يقوم على الدقة والانتباه لما لا يُرى. في المدينة المنورة وما حولها.",
} as const;

/** "ما لا يُرى" — the philosophy; the soul of the page (§5). */
export const philosophy = {
  heading: "ما لا يُرى... هو ما يصنع الفرق",
  body: "في كل مشروع تتقاطع آلاف التفاصيل، وأدقُّ المخططات — مهما أشرف عليها من مهندسين — تظل عاجزةً عن احتواء كل تعقيدات الواقع. تبقى دائمًا نسبةٌ صغيرة، قد لا تتجاوز 10٪، لكنها هي الفرق بين مشروعٍ عادي وآخر استثنائي. شغموم هو المقاول الذي يلحظ تلك النسبة: يدرس المخطط قبل أن يُوضع أول حجر، ويرصد الخلل قبل أن يتحوّل إلى تكلفة.",
} as const;

export const methodologyTeaser =
  "لا نكتفي بالمخططات. نرصد مناطق الخلل قبل أن تصبح تكلفة، ونبحث عن فرص التطوير في كل مشروع.";

export const closingCta = {
  heading: "جاهزون لمشروعك القادم.",
  body: "تواصل معنا اليوم لمناقشة مشروعك في المدينة المنورة — بناءً كان أو تشطيبًا.",
} as const;

/** Credibility signals — trust band (§7-Credibility). Logos in /public/brand. */
export const credibility = [
  {
    label: "معتمد لدى منصة مقاول",
    detail: "رقم العضوية 1180118003",
    mark: "/brand/mark-muqawil.svg",
  },
  {
    label: "عضو الهيئة السعودية للمقاولين",
    detail: "SCA",
    mark: "/brand/mark-sca.svg",
  },
  {
    label: "متوافق مع رؤية السعودية 2030",
    detail: "Vision 2030",
    mark: "/brand/mark-vision2030.svg",
  },
] as const;

/** Project types served — signals scale (§7-Services). */
export const projectTypes = [
  "فلل",
  "عمائر",
  "محلات تجارية",
  "مطاعم",
  "مكاتب",
  "مولات",
  "شقق فندقية",
  "أبراج",
] as const;

export const aboutContent = {
  intro:
    "شغموم للمقاولات العامة تقدّم حلول بناءٍ وتشطيبٍ باحترافيةٍ عالية واهتمامٍ دقيق بالتفاصيل وجودة التنفيذ. نوحّد جميع مراحل المشروع تحت إدارةٍ واحدة وتنفيذٍ منظم.",
  nameStory: {
    heading: "معنى الاسم",
    body: "الشغموم هو الشخص النبيه الفطن، الذي لا يكتفي بتنفيذ ما كُتب، بل يرى ما لم يُكتب؛ يرصد الفجوات، ويكتشف مبكرًا ما قد يتحوّل لاحقًا إلى مشكلة، ويقترح حلولًا تقلّل التكاليف وتحسّن النتيجة. اخترنا هذا الاسم لأننا نؤمن أن كل مشروع يستحق هذا القدر من الوعي والدقة والانتباه.",
  },
  vision: {
    heading: "رؤيتنا",
    body: "أن نكون الخيار الأول في قطاع المقاولات للمشاريع التي تبحث عن الابتكار والجودة والموثوقية — نبني الثقة قبل الجدران.",
  },
  mission: {
    heading: "رسالتنا",
    body: "تقديم حلول بناء وتشطيب تستند إلى أفضل التقنيات العالمية ونعيد توظيفها بما يتوافق مع بيئتنا المحلية، بدقةٍ واحترافية، ومن خلال فريق يدرس المخططات قبل التنفيذ. لا نسابق الزمن، بل نلتزم بجداول منطقية تحترم جودة التفاصيل.",
  },
} as const;
