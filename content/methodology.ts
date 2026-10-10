/** Methodology — drawn as a path on the home page and on /methodology. */

export type Stage = {
  title: string;
  body: string;
};

/** Home teaser block. */
export const methodologyTeaser = {
  eyebrow: "كيف نعمل",
  heading: "من المخطط إلى الاستلام",
  intro: "خمس محطات نمرّ بها في كل مشروع. أهمها ما يحدث قبل أن يبدأ العمل.",
  link: "منهجيتنا بالتفصيل",
} as const;

export const methodologyHeading = "من المخطط إلى الاستلام";

export const methodologyIntro =
  "نقرأ المشروع قبل أن نبنيه، ونكتب ما غاب عن الورق، ثم ننفّذ ونستلم معك على مراحل. هكذا يبقى القرار عندك، مبنيًا على ما تراه.";

export const stages: Stage[] = [
  {
    title: "قراءة المخطط",
    body: "نراجع المخططات قبل أن يبدأ العمل، ونكتب لك ما لم يُذكر فيها.",
  },
  {
    title: "ما غاب عن الورق",
    body: "نحدّد مواضع الخلل المحتمل وفرص التحسين، ونعرضها عليك قبل أن تصير تكلفة.",
  },
  {
    title: "اتفاق مكتوب",
    body: "الدرجة والنطاق ومن يتحمّل ماذا، مكتوبة قبل أن يبدأ التنفيذ.",
  },
  {
    title: "تنفيذ تحت إدارة واحدة",
    body: "فرق العمل كلها تحت إدارة واحدة، بجدول يعطي كل مرحلة وقتها.",
  },
  {
    title: "استلام على مراحل",
    body: "نستلم معك عند كل مرحلة تخفي ما قبلها، ونوثّق الملاحظات في تقرير.",
  },
];

/**
 * Detailed technical inspection reports (electrical / plumbing pre-plaster
 * reviews, graded by severity) — part of the إشراف pillar.
 */
export const inspectionReports = {
  eyebrow: "إشراف",
  heading: "تقارير المراجعة الفنية",
  body: "قبل اللياسة نراجع أعمال الكهرباء والسباكة، ونُصدر تقريرًا يصنّف كل ملاحظة بحسب أولويتها وخطورتها. ما يُغلق عليه الجدار اليوم يصعب الوصول إليه بعد ذلك، فنوثّقه وهو مكشوف، لتبني قراراتك على ما رأيته بنفسك.",
} as const;
