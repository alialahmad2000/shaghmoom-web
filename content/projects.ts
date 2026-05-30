/**
 * Projects (§7-Projects). Clean, typed data model so projects are easy to add.
 *
 * NOTE: The entries below are *representative placeholders* describing the
 * kinds of work شغموم delivers and the sort of "ما لا يُرى" detail it catches.
 * They intentionally avoid fabricated client names, dates, and measured stats
 * (§14). Replace each with a real project — add photos to /public/images/projects
 * and update the manifest in content/images.ts. Adding a project = appending one
 * object here.
 */

export type ProjectTag =
  | "فلل"
  | "عمائر"
  | "تجاري"
  | "عظم"
  | "تشطيب";

export type ProjectImage = {
  /** Path under /public/images/projects (placeholder until real photo). */
  src: string;
  alt: string;
  /** When false, the UI renders a refined placeholder block instead. */
  ready: boolean;
};

export type Project = {
  slug: string;
  title: string;
  /** Short category label shown on the card. */
  kind: string;
  /** Filter tags. */
  tags: ProjectTag[];
  location: string;
  /** What the work covered. */
  scope: string[];
  /** Short narrative. */
  narrative: string;
  /** The "ما لا يُرى" angle — a hidden detail caught or solved (illustrative). */
  unseen: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
};

function placeholder(slug: string, n: number, alt: string): ProjectImage {
  return { src: `/images/projects/${slug}-${n}.jpg`, alt, ready: false };
}

export const projectFilters: { value: "all" | ProjectTag; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "فلل", label: "فلل" },
  { value: "عمائر", label: "عمائر" },
  { value: "تجاري", label: "تجاري" },
  { value: "عظم", label: "عظم" },
  { value: "تشطيب", label: "تشطيب" },
];

export const projects: Project[] = [
  {
    slug: "residential-villa",
    title: "فيلا سكنية",
    kind: "بناء وتشطيب — تسليم مفتاح",
    tags: ["فلل", "عظم", "تشطيب"],
    location: "المدينة المنورة",
    scope: [
      "الأعمال الخرسانية الكاملة للهيكل",
      "العزل المائي والحراري",
      "اللياسة والدهانات الداخلية والخارجية",
      "أعمال الكهرباء والسباكة والتكييف",
      "النجارة والأرضيات",
    ],
    narrative:
      "تنفيذ متكامل لفيلا سكنية تحت إدارةٍ واحدة، من العظم حتى التسليم، بجدولٍ منطقي يحترم جودة كل مرحلة.",
    unseen:
      "أثناء مراجعة المخطط رصدنا تقاطعًا بين مسار تصريفٍ ومنسوب أساسٍ كان سيؤدي إلى رطوبةٍ دائمة في الدور الأرضي. عُولج المسار قبل الصبّ، فاختفت مشكلةٌ لم تكن لتظهر إلا بعد سنوات.",
    cover: placeholder("residential-villa", 1, "فيلا سكنية في المدينة المنورة"),
    gallery: [
      placeholder("residential-villa", 2, "واجهة فيلا سكنية بعد التشطيب"),
      placeholder("residential-villa", 3, "تشطيب داخلي لفيلا سكنية"),
      placeholder("residential-villa", 4, "تفاصيل التشطيب الداخلي"),
    ],
  },
  {
    slug: "residential-building",
    title: "عمارة سكنية",
    kind: "عظم وتشطيب",
    tags: ["عمائر", "عظم", "تشطيب"],
    location: "المدينة المنورة",
    scope: [
      "تنفيذ الهيكل الخرساني متعدد الأدوار",
      "العزل وأعمال البناء",
      "تشطيبات الوحدات والمداخل",
      "تشطيبات الموقع الخارجية",
    ],
    narrative:
      "عمارة سكنية متعددة الوحدات نُفّذت بإدارةٍ منظّمة توازن بين سرعة الإنجاز وجودة التفاصيل المتكررة في كل وحدة.",
    unseen:
      "في مرحلة ما قبل اللياسة، صنّف تقريرنا الفني ملاحظةً على توزيع أحمالٍ كهربائية في إحدى اللوحات بدرجة خطورةٍ عالية. عُولجت مبكرًا قبل أن تُغلَق الجدران.",
    cover: placeholder("residential-building", 1, "عمارة سكنية في المدينة المنورة"),
    gallery: [
      placeholder("residential-building", 2, "هيكل خرساني لعمارة سكنية"),
      placeholder("residential-building", 3, "مدخل عمارة سكنية بعد التشطيب"),
    ],
  },
  {
    slug: "restaurant-fitout",
    title: "مطعم",
    kind: "تشطيب وتجهيز داخلي",
    tags: ["تجاري", "تشطيب"],
    location: "المدينة المنورة",
    scope: [
      "تشطيب داخلي كامل",
      "أعمال الكهرباء والإنارة",
      "السباكة وتمديدات المطبخ",
      "التكييف والتهوية ومراوح الشفط",
    ],
    narrative:
      "تجهيز مطعم بمساحةٍ تجارية تتطلب تنسيقًا دقيقًا بين الإنارة والتكييف والتهوية لتحقيق تجربة مريحة للضيوف.",
    unseen:
      "نسّقنا مسارات الدكت والشفط خلف السقف قبل إغلاقه، فتجنّبنا تعارضًا كان سيظهر كضوضاء وروائح في صالة الضيوف.",
    cover: placeholder("restaurant-fitout", 1, "تشطيب مطعم في المدينة المنورة"),
    gallery: [
      placeholder("restaurant-fitout", 2, "صالة مطعم بعد التشطيب"),
      placeholder("restaurant-fitout", 3, "تفاصيل الإنارة المدمجة في مطعم"),
    ],
  },
  {
    slug: "commercial-showroom",
    title: "معرض تجاري",
    kind: "تشطيب — واجهة وداخلي",
    tags: ["تجاري", "تشطيب"],
    location: "المدينة المنورة",
    scope: [
      "واجهة زجاجية وألمنيوم",
      "أرضيات وإضاءة مدمجة",
      "دهانات ديكورية",
      "أنظمة كهرباء وتحكم",
    ],
    narrative:
      "معرض تجاري تتقدّمه واجهةٌ زجاجية، نُفّذ بتركيزٍ على الإطلالة والإحكام معًا.",
    unseen:
      "راجعنا عزل وتثبيت الواجهة الزجاجية وميول تصريف الماء، فأُحكمت نقطةٌ كانت ستسمح بتسرّبٍ مع أول مطر.",
    cover: placeholder("commercial-showroom", 1, "معرض تجاري في المدينة المنورة"),
    gallery: [
      placeholder("commercial-showroom", 2, "واجهة معرض تجاري زجاجية"),
      placeholder("commercial-showroom", 3, "تشطيب داخلي لمعرض تجاري"),
    ],
  },
  {
    slug: "rest-house",
    title: "استراحة",
    kind: "بناء وتشطيب وتنسيق موقع",
    tags: ["فلل", "تشطيب"],
    location: "المدينة المنورة",
    scope: [
      "بناء وتشطيب المباني",
      "تشطيبات الموقع: إنترلوك ومظلات",
      "أسوار وبوابات",
      "عزل وخزانات",
    ],
    narrative:
      "استراحة تجمع بين المباني والمساحات الخارجية، نُفّذت بتنسيقٍ بين التشطيب الداخلي وأعمال الموقع.",
    unseen:
      "ضبطنا ميول تصريف المساحات الخارجية قبل تنفيذ الإنترلوك، فتفادينا تجمّع المياه قرب المداخل.",
    cover: placeholder("rest-house", 1, "استراحة في المدينة المنورة"),
    gallery: [
      placeholder("rest-house", 2, "مظلات وتنسيق موقع استراحة"),
      placeholder("rest-house", 3, "تشطيب داخلي لاستراحة"),
    ],
  },
  {
    slug: "office-space",
    title: "مكتب إداري",
    kind: "تشطيب وتجهيز",
    tags: ["تجاري", "تشطيب"],
    location: "المدينة المنورة",
    scope: [
      "أسقف جبسية وإضاءة مدمجة",
      "أرضيات وفواصل داخلية",
      "كهرباء وأنظمة تحكم ذكية",
      "نجارة وحلول تخزين",
    ],
    narrative:
      "مكتب إداري نُفّذ بتشطيبٍ عصري هادئ يوازن بين الجمال والوظيفة في بيئة عمل يومية.",
    unseen:
      "خططنا توزيع الإنارة ونقاط الكهرباء على المساحة الفعلية بعد الجدران، فجاء التوزيع متّزنًا دون تمديداتٍ ظاهرة لاحقة.",
    cover: placeholder("office-space", 1, "مكتب إداري في المدينة المنورة"),
    gallery: [
      placeholder("office-space", 2, "مساحة عمل مكتبية بعد التشطيب"),
      placeholder("office-space", 3, "تفاصيل الأسقف والإضاءة في مكتب"),
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
