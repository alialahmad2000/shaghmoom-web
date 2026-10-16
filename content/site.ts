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
 * Closing-line spelling — decided by the owner on 2026-10-12: «شغموم عند اللزوم يجملك».
 */
export const CLOSING_WORD: "وقت" | "عند" = "عند";

/**
 * Sections the owner has hidden for now (2026-10-12): out of the menu, the
 * footer and the sitemap, and marked noindex, until the portfolio and the
 * reviews are ready. The routes stay; remove a path here to bring it back.
 */
export const HIDDEN_PATHS: readonly string[] = ["/projects", "/reviews"];
export const isHidden = (path: string) =>
  HIDDEN_PATHS.some((h) => path === h || path.startsWith(`${h}/`));

/** Approved lines (brand §1), verbatim. */
export const lines = {
  /** The slogan (owner, 2026-10-12) — replaces the retired «العُشر» idea. */
  slogan: "نرى ما لم يُرسَم.. ونُتقن ما لا يُرى",
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
  district: "حي المبعوث",
  region: "منطقة المدينة المنورة",
  country: "المملكة العربية السعودية",
  hours: "٩:٠٠ – ١٨:٠٠",
  /** Legal identifiers shown under the legal name (owner, 2026-10-12). */
  unifiedNumber: "7052752610",
  contractorMembership: "1180118003",
} as const;

export const contact = {
  primaryPhone: "0553346250",
  /** Kept as on the live site; the new brand file lists only the primary number (flagged in the report). */
  secondaryPhone: "0556332889",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "966553346250",
  whatsappMessage: "السلام عليكم، أرغب في الاستفسار عن خدمات شغموم للمقاولات العامة.",
  email: "admin@shoghmoum.com",
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
].filter((item) => !isHidden(item.path));

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
].filter((item) => !isHidden(item.path));

/**
 * Google Search Console — paste the "HTML tag" verification code here (only
 * the content value) if the property is verified by tag rather than by DNS.
 */
export const GOOGLE_SITE_VERIFICATION = "";

/** Legal links — footer bottom row and under the quote form. */
export const privacyLink = { label: "سياسة الخصوصية", path: "/privacy" } as const;

export const ctaLabel = "اطلب عرض سعر";
export const whatsappLabel = "اسأل شغموم";

/**
 * Hero photograph (owner note 5). On since 2026-10-16 (Ali: publish it and let
 * the owner see it live; switch back to false if he doesn't like it). The
 * images are in public/images/hero/.
 */
export const HERO_PHOTO: boolean = true;

/**
 * Home — hero. The slogan on two lines. No eyebrow: «عين على ما غاب عن الورق»
 * repeated the slogan's meaning (owner, 2026-10-12).
 */
export const hero = {
  titleLines: ["نرى ما لم يُرسَم..", "ونُتقن ما لا يُرى"],
  lead: "مقاول عظم وتشطيبات وإشراف في المدينة المنورة. نقرأ المخطط قبل التنفيذ، ونلفت نظرك إلى ما لم يُكتب فيه قبل أن يصير تكلفة عليك.",
} as const;

/** Home — meaning / about (sand). Body from brand sheet p.2. */
export const meaning = {
  eyebrow: "من نحن",
  heading: "عين إضافية للمالك",
  body: "الشغموم هو النبيه الفطن: لا يقف عند تنفيذ المكتوب، بل يرى ما لم يُكتب. أدق المخططات تترك من واقع الموقع ما لم يره أحد: مشكلة لم تُحسب، أو فرصة تحسين لم تُلحظ. هناك يظهر الشغموم — عين إضافية للمالك، لا منفّذ فقط.",
  callout: lines.positioning,
  link: "معنى الاسم وقصة شغموم",
  diagram: {
    drawn: "ما في المخطط",
    undrawn: "ما لم يُرسَم",
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
 * Credibility / accreditation: the unified number and the منصة مقاول
 * membership are in `company` above and shown in the footer, on the contact
 * page and in the structured data (owner, 2026-10-12).
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
    body: "حتى أدق المخططات لا تحتوي واقع الموقع كاملًا. يبقى منه ما لم يره أحد: مشكلات لم تُحسب، أو فرص تحسين لم تُلحظ. هذا الجزء هو الفرق بين مشروع عادي ومشروع متميز، وفيه نعمل. لذلك نقدّم أنفسنا عينًا إضافية للمالك، لا منفّذًا فقط.",
  },
} as const;
