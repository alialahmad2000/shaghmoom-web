/**
 * Central site content — Arabic copy in the brand voice (brand §1): an expert
 * contractor speaking politely to an owner; clean modern Arabic; a defect
 * explained by what the owner will feel; no absolute promises, no "we are the
 * best", no clichés, no AI-sounding constructions. Keep copy here, out of
 * components.
 *
 * Approved lines are quoted verbatim from the brand file and must not be
 * reworded. «وطن يُبنى» is internal only — it must never appear on the site.
 */

/**
 * [OPEN] Closing-line spelling — the owner has not chosen yet. One-line change:
 * "وقت" → «شغموم وقت اللزوم يجملك» (most-used, Oct 2026) · "عند" → «شغموم عند اللزوم يجملك».
 * The plastering form keeps «عند» as authored.
 */
export const CLOSING_WORD: "وقت" | "عند" = "وقت";

/** Approved lines (brand §1), verbatim. */
export const lines = {
  /** Defines the name (most-used). */
  meaning: "عين على ما غاب عن الورق",
  /** Tagline, paired with the closing line. */
  tagline: "نبني الثقة قبل الجدران",
  /** Closing line: the subject stays outside the brush, the predicate is swiped. */
  closingSubject: "شغموم",
  closingPredicate: `${CLOSING_WORD} اللزوم يجملك`,
  /** Positioning / bio core. */
  positioning: "يوم التسليم كل التشطيبات متشابهة. بعد سنتين تفترق.",
} as const;

export const company = {
  legalName: "شركة خالد رافد صياف العمري للمقاولات العامة",
  publicName: "شغموم للمقاولات العامة",
  shortName: "شغموم",
  latin: "SHOGHMOUM",
  handle: "@shoghmoum",
  city: "المدينة المنورة",
  district: "حي النعيم",
  region: "منطقة المدينة المنورة",
  country: "المملكة العربية السعودية",
  hours: "٩:٠٠ – ١٨:٠٠",
} as const;

export const contact = {
  primaryPhone: "0553346250",
  /** Kept as on the live site; the new brand file lists only the primary number (flagged in the report). */
  secondaryPhone: "0556332889",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "966553346250",
  whatsappMessage: "السلام عليكم، أرغب في الاستفسار عن خدمات شغموم للمقاولات العامة.",
  email: "",
} as const;

export function whatsappHref(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telHref(phone: string): string {
  // Saudi local 05x → +9665x for tel: links.
  return `tel:${phone.replace(/^0/, "+966")}`;
}

export const social = {
  instagram: "https://www.instagram.com/shoghmoum",
  tiktok: "https://www.tiktok.com/@shoghmoum",
} as const;

/** Header navigation — order matters. The logo links home; CTA is separate. */
export const nav = [
  { label: "من نحن", path: "/about" },
  { label: "خدماتنا", path: "/services" },
  { label: "منهجيتنا", path: "/methodology" },
  { label: "استمارة اللياسة", path: "/plastering-form" },
  { label: "أعمالنا", path: "/projects" },
  { label: "تواصل معنا", path: "/contact" },
] as const;

/** Every page, for the mobile menu and the footer. */
export const siteLinks = [
  { label: "الرئيسية", path: "" },
  { label: "من نحن", path: "/about" },
  { label: "خدماتنا", path: "/services" },
  { label: "منهجيتنا", path: "/methodology" },
  { label: "استمارة اللياسة", path: "/plastering-form" },
  { label: "أعمالنا", path: "/projects" },
  { label: "آراء العملاء", path: "/reviews" },
  { label: "تواصل معنا", path: "/contact" },
] as const;

export const ctaLabel = "اطلب عرض سعر";
export const whatsappLabel = "اسأل شغموم";

/** Home — hero (maroon). Two-line headline from brand sheet p.7. */
export const hero = {
  eyebrow: lines.meaning,
  titleLines: ["نرى العُشر الذي", "لم يُرسم في المخطط"],
  lead: "مقاول عظم وتشطيبات وإشراف في المدينة المنورة. نقرأ المخطط قبل التنفيذ، ونلفت نظرك إلى ما لم يُكتب فيه قبل أن يصير تكلفة عليك.",
} as const;

/** Home — meaning / about (sand). Body from brand sheet p.2. */
export const meaning = {
  eyebrow: "من نحن",
  heading: "عين إضافية للمالك",
  body: "الشغموم هو النبيه الفطن: لا يقف عند تنفيذ المكتوب، بل يرى ما لم يُكتب. أدق المخططات تترك نحو عُشر من واقع الموقع لم يره أحد: مشكلة لم تُحسب، أو فرصة تحسين لم تُلحظ. هناك يظهر الشغموم — عين إضافية للمالك، لا منفّذ فقط.",
  callout: lines.positioning,
  link: "معنى الاسم وقصة شغموم",
  diagram: {
    drawn: "ما في المخطط",
    undrawn: "العُشر الذي لم يُرسم",
  },
} as const;

/** Home — services (maroon): عظم · تشطيبات · إشراف. */
export const servicesTrio = {
  eyebrow: "خدماتنا",
  heading: "عظم · تشطيبات · إشراف",
  intro: "ثلاثة أعمال في المدينة المنورة تحت إدارة واحدة. والتشطيب أكثر ما نعتني به، لأنه ما تعيش معه كل يوم.",
  cards: {
    structure: {
      title: "عظم",
      body: "الهيكل من تمهيد الأرض إلى السقف. نراجع المناسيب والتسليح قبل الصب، لأن ما يُدفن في العظم يصعب إصلاحه بعده.",
    },
    finishes: {
      title: "تشطيبات",
      body: "اللياسة والأرضيات والدهانات والتمديدات وما يكملها، بدرجة تنفيذ نتفق عليها معك كتابةً قبل البدء.",
    },
    supervision: {
      title: "إشراف",
      body: "مراجعة المخططات قبل التنفيذ، وتقارير فحص قبل اللياسة تصنّف كل ملاحظة بحسب أولويتها وخطورتها.",
    },
  },
  more: "كل الخدمات",
} as const;

/** Home — plastering form teaser (copy taken from the form's own hero). */
export const plasteringTeaser = {
  eyebrow: "قبل ما تتفق",
  heading: "استمارة اللياسة",
  body: "ما يتفق عليه المالك والمليّس قبل أن يبدأ العمل: الدرجة، والنطاق، ومن يتحمّل ماذا.",
  button: "افتح استمارة اللياسة",
} as const;

/** The CTA band that ends most pages. */
export const ctaBand = {
  heading: "حدّثنا عن مشروعك",
  body: "أرسل تفاصيل مشروعك في المدينة المنورة ونعود إليك بعرض سعر. وللأسئلة القصيرة، واتساب أسرع.",
} as const;

/*
 * Credibility / accreditation: the live site shows none. The brand file says
 * "Registered member of the Saudi Contractors Authority" and the plastering
 * form's own footer shows the unified number 7052752610 and منصة مقاول
 * membership 1180118003. Not added to the global footer until the owner
 * confirms (open decision in REBRAND-REPORT.md).
 */

/** Project types served. */
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
  title: "الشغموم هو النبيه الفطن",
  intro: "شغموم للمقاولات العامة في المدينة المنورة: عظم وتشطيبات وإشراف، تحت إدارة واحدة.",
  nameStory: {
    heading: "معنى الاسم",
    body: "الشغموم هو النبيه الفطن: لا يكتفي بتنفيذ ما كُتب، بل يرى ما لم يُكتب. يلحظ الفجوات قبل أن تصير مشكلات، ويقترح حلولًا تقلّل التكلفة وتحسّن النتيجة.",
  },
  founding: {
    heading: "قصة شغموم",
    body: "حتى أدق المخططات لا تحتوي واقع الموقع كاملًا. يبقى نحو عُشر لم يره أحد: مشكلات لم تُحسب، أو فرص تحسين لم تُلحظ. هذا العُشر هو الفرق بين مشروع عادي ومشروع متميز، وفيه نعمل. لذلك نقدّم أنفسنا عينًا إضافية للمالك، لا منفّذًا فقط.",
  },
} as const;
