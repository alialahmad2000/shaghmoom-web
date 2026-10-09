/**
 * Projects (§7-Projects). Clean, typed data model so projects are easy to add.
 *
 * NOTE: The entries below are *representative placeholders* describing the
 * kinds of work شغموم delivers and the sort of detail it checks («ما غاب عن الورق»),
 * written in the present tense as practice — not as claims about a specific job.
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
  /** «ما غاب عن الورق» — what we check on this kind of project (practice, present tense). */
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
      "بناء فيلا سكنية وتشطيبها تحت إدارة واحدة، من العظم حتى التسليم، بجدول يعطي كل مرحلة وقتها.",
    unseen:
      "نراجع تقاطع مسارات التصريف مع مناسيب الأساسات قبل الصب. تعارض صغير بينهما يعني رطوبة دائمة في الدور الأرضي لا تظهر إلا بعد سنوات.",
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
      "عمارة سكنية متعددة الوحدات، تتكرر فيها التفاصيل نفسها في كل شقة، فيتكرر أي خطأ بعدد الوحدات.",
    unseen:
      "قبل اللياسة نراجع توزيع الأحمال الكهربائية على اللوحات، ونصنّف كل ملاحظة في تقرير بحسب خطورتها، لتُعالج قبل أن تُغلق الجدران.",
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
      "تجهيز مطعم يحتاج تنسيقًا بين الإنارة والتكييف والشفط، لأن الضيف يلاحظ الحرارة والرائحة قبل الديكور.",
    unseen:
      "ننسّق مسارات الدكت والشفط خلف السقف قبل إغلاقه. التعارض بينهما يظهر لاحقًا ضوضاءً وروائح في صالة الضيوف.",
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
      "معرض تجاري تتقدّمه واجهة زجاجية، يحتاج إطلالة واضحة وإحكامًا في الوقت نفسه.",
    unseen:
      "نراجع عزل الواجهة الزجاجية وتثبيتها وميول تصريف الماء، لأن نقطة واحدة غير محكمة تكفي لتسرّب مع أول مطر.",
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
      "استراحة تجمع المباني والمساحات الخارجية، ويلتقي فيها التشطيب الداخلي بأعمال الموقع.",
    unseen:
      "نضبط ميول تصريف المساحات الخارجية قبل تنفيذ الإنترلوك، حتى لا يتجمّع الماء عند المداخل.",
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
      "مكتب إداري بتشطيب هادئ لبيئة عمل يومية، تُحسب فيه الإنارة ونقاط الكهرباء على أماكن الجلوس الفعلية.",
    unseen:
      "نخطط توزيع الإنارة ونقاط الكهرباء على المساحة بعد بناء الجدران، حتى لا تحتاج لاحقًا تمديدات ظاهرة على الجدار.",
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
