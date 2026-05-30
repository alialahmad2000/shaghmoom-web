/** Methodology — the differentiator (§7). A precise, staged process. */

export type Stage = {
  index: string;
  title: string;
  body: string;
};

export const methodologyHeading = "كيف نعمل";

export const methodologyIntro =
  "منهجيتنا ليست خطوات على ورق، بل طريقة نفكّر بها قبل أن نبني. نعيد قراءة المشروع بعمق، ونرصد ما لا يُرى، ثم ننفّذ بانضباطٍ يحترم جودة التفاصيل.";

export const stages: Stage[] = [
  {
    index: "01",
    title: "الدراسة قبل التنفيذ",
    body: "نعيد دراسة المخططات بعمق قبل أن يُوضع أول حجر.",
  },
  {
    index: "02",
    title: "رصد ما لا يُرى",
    body: "نرصد مناطق الخلل وفرص التطوير قبل أن تتحول إلى تكلفة.",
  },
  {
    index: "03",
    title: "التنفيذ المنظّم",
    body: "جميع القطاعات تحت إدارةٍ واحدة وتنفيذٍ منضبط، بجداول منطقية تحترم جودة التفاصيل.",
  },
  {
    index: "04",
    title: "التقارير والمراجعة الفنية",
    body: "نوثّق ونراجع فنيًا، ونصنّف الملاحظات بحسب الأولوية والخطورة.",
  },
  {
    index: "05",
    title: "التسليم بثقة",
    body: "نبني الثقة كما نبني المساحات.",
  },
];

/**
 * Genuine differentiator: detailed technical inspection reports
 * (electrical / plumbing pre-plaster reviews, graded by severity).
 * A dedicated proof piece may be added later — this is the clean slot for it.
 */
export const inspectionReports = {
  heading: "تقارير المراجعة الفنية",
  body: "نُصدر تقارير فحصٍ تفصيلية قبل التشطيب — مراجعة لأعمال الكهرباء والسباكة قبل اللياسة — نصنّف فيها كل ملاحظة بحسب الأولوية والخطورة. هذه القدرة ليست خدمة إضافية، بل جزءٌ من طريقة عملنا: نوثّق ما نراه، لتبقى القرارات مبنية على بيّنة.",
  note: "نموذجٌ مفصّل من تقاريرنا الفنية يُضاف هنا قريبًا.",
} as const;
