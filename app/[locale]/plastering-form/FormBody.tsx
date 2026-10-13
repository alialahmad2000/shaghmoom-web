/*
 * «استمارة اللياسة» — body markup generated from the owner-authored source by
 * scripts/port-plastering-form.py. Content is verbatim; edit the source and
 * re-run the script rather than hand-editing wording here.
 */
import type { CSSProperties } from "react";
import Image from "next/image";
import handshake from "@/public/images/plastering-form/handshake-engraving.webp";
import { FormBehaviour } from "./FormBehaviour";
import { WHATSAPP_HREF } from "./constants";

export function FormBody() {
  return (
    <>
<div className="plf-page plf-js" lang="ar" dir="rtl">
<div className="plf-grain" aria-hidden="true"></div>

<div className="plf-bar-top" id="bartop">
  <div className="plf-in"><div className="plf-st"><span className="plf-n"><span id="bt-n">١</span></span><span className="plf-t" id="bt-t">بيانات المشروع</span></div><a className="plf-mp" href="#map">الخريطة</a></div>
  <div className="plf-prog" id="prog"></div>
</div>

{/* ========== HERO ========== */}
<header className="plf-hero">
  <div className="plf-hero__grid" aria-hidden="true"></div>
  <div className="plf-wrap">
    <div className="plf-hero__top">
      <svg className="plf-wordmark" viewBox="0 0 2951.27 774.1" role="img" aria-label="شغموم"><path d="M1267.24 0L1330.04 62.8L1267.24 124.48L1205.56 62.8L1267.24 0M2717.62 46.5L2780.42 109.3L2717.62 170.99L2655.94 109.3L2717.62 46.5M2652.22 152.81L2715.02 215.61L2652.22 277.29L2590.55 215.61L2652.22 152.81M2783.01 152.81L2845.81 215.61L2783.01 277.29L2721.33 215.61L2783.01 152.81M693.15 442.92C702.77 419.16 725.21 386.67 751.4 381.67C798.92 381.34 827.98 452.24 838.1 491.07C787.3 491.53 704.72 487.76 693.15 442.92M2904.56 306.48L2887.77 307.73L2876.75 370.12L2878.64 377.53C2892.51 401.51 2903.83 425.78 2904.41 454.11C2855.31 447.78 2806.67 438.06 2761.3 417.89C2768.21 392.58 2774.39 367.72 2779.92 342.32L2763.09 337.56C2753.19 365.58 2743.53 394.04 2727.88 419.46C2711.87 432.88 2672.33 458.34 2540.7 440.06C2554.5 419.28 2587.45 369.64 2587.45 369.64L2573.82 357.93C2566.05 367.93 2558.97 378.12 2536.24 391.89C2351.96 503.55 1534.43 536.22 1310.18 373.7C1372.81 347.34 1382.1 327.87 1384.6 323.17C1384.6 323.17 1408.13 278.97 1420.98 254.84C1459.45 182.59 1171.53 127.44 1126.45 227.52C1126.45 227.52 1097.19 296.04 1095.06 301.02L1106.86 312.7C1114.73 309.08 1164.79 275.28 1215.62 339.23C1215.62 339.23 1119.23 372.83 1101.38 437.22C1098.83 446.44 1091.17 474.08 1091.17 474.08L864.52 490.66C869.88 442.62 847.13 282.12 765.66 282.12C702.17 282.12 625.46 469.7 697.7 545.17C734.17 583.25 814.48 579.71 814.8 579.71C813.97 580.34 681.79 730.38 430.65 724C421.88 723.78 395.63 722.17 395.63 722.17L392.5 739.53C503.29 767.2 644.7 774.1 644.7 774.1C672.4 774.1 794.85 697.37 847.87 579.75C847.88 579.75 1048.1 560.28 1070.25 563.89C1154.36 577.62 1194.9 648.39 1203.85 667.57L1218.72 668.53L1260.24 596.69L1261.54 587.8C1242.44 536.92 1172.16 490.38 1125.62 464.55C1158.53 429.34 1238.31 402.1 1258.43 394.14C1288.91 442.57 1334.82 486.41 1398.45 511.78C1697.28 630.94 2295.37 572.45 2427 514.7C2511.63 531.84 2656.89 561.85 2722.84 492.93C2797.26 524.29 2889.64 531.82 2894.22 532.17L2903.01 526.24L2929.04 462.98C2951.27 408.59 2933.65 357.36 2904.56 306.48M330.27 385.81C377.6 321.85 416.34 345.51 448.32 405.88C454.15 417.54 459.52 429.1 464.05 442.6C418.7 424.45 375.07 405.47 330.27 385.81M504.56 555.25L534.09 474.25C522.25 326.24 453.7 267.5 453.7 267.5C411.81 229.48 357 265.16 337.64 307.61C320.27 345.71 280.35 465.03 280.35 465.03C278.76 470 281.04 474.65 285.78 476.46L326.54 494.45L0 717.1L7.16 733.22C58.02 711.57 195.47 649.86 210.56 642.01C229.75 632.02 294.19 601.66 346.88 503.17C346.88 503.17 456.02 548.15 490.92 559.14L504.56 555.25" /></svg>
      <svg className="plf-hero__icon" viewBox="0 0 896.9 857.48" aria-hidden="true"><path d="M443.65 857.48L402.07 595.49C402.07 595.49 590.22 538.4 581.57 475.27C576.14 431 443.49 395.73 443.49 395.73L443.49 351.01C446.84 348.09 448.47 346.66 451.82 343.74L896.9 404.23L896.9 441.39C896.73 441.42 688.3 459.94 596.09 552.16C503.88 644.37 480.81 857.48 480.81 857.48M453.25 0L494.83 261.99C494.83 261.99 306.68 319.08 315.33 382.21C320.76 426.48 453.41 461.75 453.41 461.75L453.41 506.46C450.06 509.39 445.08 513.74 445.08 513.74L0 453.25L0 416.09C0.17 416.06 208.59 397.53 300.81 305.32C393.02 213.1 416.08 0 416.08 0" /></svg>
    </div>
    <p className="plf-kicker">قبل ما تتفق</p>
    <h1>استمارة اللياسة</h1>
    <span className="plf-rule" aria-hidden="true"></span>
    <p className="plf-hero__lead">ما يتفق عليه المالك والمليّس قبل أن يبدأ العمل: الدرجة، والنطاق، ومن يتحمّل ماذا.</p>
    <div className="plf-hero__tapes"><span className="plf-tape">للاطلاع والطباعة</span><span className="plf-tape">تصلح مع أي مليّس</span></div>
    <div className="plf-hands">
      <Image src={handshake} alt="مصافحة بين مالك ومليّس، رسم حفر، ومنها يتدلّى شريط الاتفاق" sizes="(min-width: 700px) 100vw, 120vw" preload />
    </div>
  </div>
</header>

{/* ========== INTRO ========== */}
<section className="plf-band plf-intro">
  <div className="plf-tear plf-tear--sand" aria-hidden="true"><svg viewBox="0 0 1000 24" preserveAspectRatio="none"><path d="M0 24 L0 10.7 L0.0 10.7 L14.7 10.5 L26.5 8.5 L38.6 10.3 L47.9 7.7 L60.6 4.8 L75.7 5.8 L83.7 2.7 L90.8 2.5 L97.7 2.5 L111.7 2.6 L122.7 3.7 L131.7 6.8 L145.7 8.2 L154.4 6.8 L167.7 6.2 L177.7 9.1 L184.3 7.3 L195.0 10.3 L202.3 11.2 L211.3 8.5 L226.3 10.2 L235.1 12.6 L243.3 13.0 L251.6 14.5 L263.8 12.0 L272.3 10.6 L286.0 9.3 L294.4 8.6 L306.7 6.1 L315.1 4.5 L324.6 3.2 L332.0 3.7 L343.9 2.9 L359.0 2.8 L373.2 2.5 L387.8 4.5 L396.0 6.1 L404.4 8.9 L416.3 8.4 L423.2 11.4 L436.0 9.9 L447.9 8.5 L460.8 5.8 L472.3 8.0 L481.4 10.7 L488.2 9.2 L495.3 7.1 L506.9 4.8 L521.4 7.9 L534.0 8.4 L541.0 5.3 L553.7 3.3 L564.6 4.8 L580.0 2.5 L593.0 5.1 L605.8 6.9 L615.5 8.1 L629.8 7.6 L644.0 8.1 L654.0 8.6 L661.3 9.5 L675.6 10.9 L688.7 11.5 L702.7 8.8 L709.5 9.4 L718.1 10.7 L730.2 13.4 L736.8 12.1 L745.2 10.0 L757.6 9.6 L767.1 10.7 L777.5 12.7 L791.9 11.9 L801.2 9.6 L815.2 11.8 L830.2 10.4 L840.7 9.0 L851.0 9.8 L860.4 11.9 L870.9 4.2 L883.5 2.8 L895.8 3.2 L906.0 2.5 L914.9 4.3 L930.2 2.5 L941.5 3.4 L948.8 2.5 L957.6 3.9 L968.9 2.5 L982.4 2.8 L993.4 5.9 L1000.0 5.9 L1000 24 Z" /></svg></div>
  <div className="plf-wrap">
    <div className="plf-index plf-card">
      <span className="plf-tape">بطاقة الملف</span>
      <dl>
        <dt>الملف</dt><dd>أعمال اللياسة الداخلية والخارجية</dd>
        <dt>النوع</dt><dd>إطار اتفاق بين المالك والمليّس، قبل أول خلطة</dd>
        <dt>الإصدار</dt><dd className="plf-num">٢ · أكتوبر ٢٠٢٦</dd>
        <dt>الحالة</dt><dd>للاطلاع والطباعة، وليست للتعبئة على الشاشة</dd>
        <dt>المصدر</dt><dd>شغموم للمقاولات العامة، المدينة المنورة</dd>
      </dl>
    </div>
    <p className="plf-eyebrow" style={{ "marginTop": "40px" } as CSSProperties}>لماذا هذه الاستمارة</p>
    <h2 className="plf-t">أغلب خلافات اللياسة لا تبدأ يوم الاستلام، بل يوم الاتفاق</h2>
    <div className="plf-stack" style={{ "marginTop": "18px" } as CSSProperties}>
      <p className="plf-lead">المالك لا يعرف ماذا يطلب، والمليّس لا يذكر ما لم يُسأل عنه. ثم يتعلّم المالك أثناء العمل أن هناك شبكاً يُركَّب، وماءً يُرَشّ، وجداراً أعوج يحتاج تلبيشاً. ومن هنا يبدأ الخلاف.</p>
      <p className="plf-lead">هذه الاستمارة تضع الطرفين على صفحة واحدة قبل أول خلطة. ما لم يُكتب فيها سيُترك للعرف، ولا تترك شيئاً للعرف.</p>
    </div>

    <div className="plf-steps" aria-label="طريقة الاستخدام">
      <div className="plf-step"><div className="plf-step__n"><span>١</span></div><div><div className="plf-step__t">اطبعها</div><div className="plf-step__d">أو أرسلها للمليّس قبل أن تجلسا.</div></div></div>
      <div className="plf-step"><div className="plf-step__n"><span>٢</span></div><div><div className="plf-step__t">املآها معاً، بنداً بنداً</div><div className="plf-step__d">كل خانة إمّا تُختار أو تُشطب. البند المتروك هو البند الذي ستختلفان عليه.</div></div></div>
      <div className="plf-step"><div className="plf-step__n"><span>٣</span></div><div><div className="plf-step__t">وقّعاها وأرفقاها بالاتفاق</div><div className="plf-step__d">نسخة لكل طرف. وعند أي سؤال أثناء العمل، الورقة تجيب قبل الذاكرة.</div></div></div>
    </div>

    <div className="plf-frame plf-card"><span className="plf-tape">تنبيه</span><b>إطار لا دليل.</b> الاستمارة تحدّد ماذا يُنفَّذ، وبأي درجة، ومن يتحمّله. أما كيف يُنفَّذ كل بند، وما معايير قبوله، فمكانها المواصفات الفنية التي يرفقها المقاول بعرضه.</div>
  </div>
</section>

{/* ========== MAP ========== */}
<section className="plf-band plf-band--m plf-tex-dot plf-toc" id="map">
  <div className="plf-tear plf-tear--m" aria-hidden="true"><svg viewBox="0 0 1000 24" preserveAspectRatio="none"><path d="M0 24 L0 13.7 L0.0 13.7 L14.5 11.1 L24.8 11.2 L33.1 10.9 L43.7 7.9 L56.5 7.3 L69.6 2.5 L81.4 3.5 L96.5 2.6 L106.4 3.1 L115.7 2.5 L128.6 3.1 L140.9 2.5 L150.3 4.5 L157.9 7.0 L172.8 5.5 L180.4 8.1 L194.9 7.8 L202.8 8.6 L216.4 8.5 L224.2 10.1 L234.2 14.8 L244.2 12.6 L251.0 10.8 L258.1 13.7 L265.5 10.6 L276.4 7.6 L287.8 9.3 L297.0 6.7 L309.3 7.9 L318.0 5.3 L324.7 7.0 L335.0 4.8 L348.7 2.5 L363.2 4.1 L373.6 2.8 L385.5 2.5 L392.3 2.5 L405.4 2.5 L417.8 2.5 L425.4 5.0 L439.0 8.1 L448.6 5.1 L461.8 4.4 L468.6 5.4 L483.6 4.9 L495.5 8.1 L503.7 8.3 L519.0 6.5 L533.4 10.7 L545.4 9.4 L555.0 8.1 L564.6 7.4 L578.4 7.3 L587.3 5.8 L595.8 4.3 L606.8 2.5 L614.5 2.9 L628.6 2.5 L637.4 5.6 L644.4 7.6 L654.2 5.3 L661.6 6.8 L674.1 5.5 L688.8 6.5 L704.0 9.1 L710.8 9.8 L723.8 9.6 L735.4 11.4 L747.3 11.9 L755.1 9.3 L763.5 8.9 L775.6 9.1 L786.0 8.2 L799.2 10.9 L813.6 14.0 L821.3 13.2 L835.2 10.3 L848.2 11.9 L856.6 16.3 L869.7 16.2 L884.5 15.3 L891.4 14.0 L901.5 13.2 L908.3 15.7 L922.0 13.7 L930.3 15.4 L940.9 12.2 L949.8 13.8 L959.4 16.6 L974.7 17.5 L982.5 17.5 L996.3 17.3 L1000.0 17.3 L1000 24 Z" /></svg></div>
  <div className="plf-wrap">
    <p className="plf-eyebrow">خريطة الاستمارة</p>
    <h2 className="plf-t">عشر محطات، من بيانات المشروع إلى التوقيع</h2>
    <ol className="plf-map">
      <li><a href="#s1"><span className="plf-r"><span>١</span></span><span><span className="plf-mt">بيانات المشروع</span><span className="plf-mq">من، وأين، وكم متراً</span></span></a></li>
      <li><a href="#s2"><span className="plf-r"><span>٢</span></span><span><span className="plf-mt">نوع الاتفاق وطريقة الحساب</span><span className="plf-mq">مصنعية أم بالمواد، وكيف يُحسب المتر والفتحات</span></span></a></li>
      <li><a href="#s3"><span className="plf-r"><span>٣</span></span><span><span className="plf-mt">اللياسة الداخلية: الدرجة والملمس</span><span className="plf-mq">على أي درجة؟ وأي سطح؟</span></span></a></li>
      <li><a href="#s4"><span className="plf-r"><span>٤</span></span><span><span className="plf-mt">اللياسة الداخلية: الفتحات والمعالجة والإكسسوارات</span><span className="plf-mq">ما حول اللياسة وما تحتها</span></span></a></li>
      <li><a href="#s5"><span className="plf-r"><span>٥</span></span><span><span className="plf-mt">اللياسة الخارجية</span><span className="plf-mq">الواجهات وبئر المصعد</span></span></a></li>
      <li><a href="#s6"><span className="plf-r"><span>٦</span></span><span><span className="plf-mt">السماكة والتلبيش</span><span className="plf-mq">إذا كان الجدار أعوج</span></span></a></li>
      <li><a href="#s7"><span className="plf-r"><span>٧</span></span><span><span className="plf-mt">من يتحمّل ماذا</span><span className="plf-mq">عليه · بزيادة · عليك</span></span></a></li>
      <li><a href="#s8"><span className="plf-r"><span>٨</span></span><span><span className="plf-mt">المدة والدفعات</span><span className="plf-mq">متى يبدأ، ومتى ينتهي، وكيف تُدفع</span></span></a></li>
      <li><a href="#s9"><span className="plf-r"><span>٩</span></span><span><span className="plf-mt">الاستلام والضمان</span><span className="plf-mq">متى تستلم، وماذا يُضمن</span></span></a></li>
      <li><a href="#s10"><span className="plf-r"><span>١٠</span></span><span><span className="plf-mt">ملاحظات وتوقيع</span><span className="plf-mq">ما لم تحتوِه البنود</span></span></a></li>
    </ol>
  </div>
</section>

<div className="plf-sections plf-board">
<div className="plf-tear plf-tear--board" aria-hidden="true"><svg viewBox="0 0 1000 24" preserveAspectRatio="none"><path d="M0 24 L0 12.2 L0.0 12.2 L12.0 14.4 L23.2 15.2 L34.4 12.7 L46.3 11.3 L59.4 10.9 L74.5 13.1 L81.8 11.7 L94.6 13.8 L106.8 9.3 L117.9 11.5 L125.1 17.0 L136.3 14.1 L150.8 12.3 L163.6 12.3 L175.7 10.9 L186.5 9.1 L193.5 8.8 L200.1 9.7 L212.5 3.7 L219.6 2.5 L228.4 2.7 L240.0 3.0 L248.5 4.2 L259.7 11.9 L266.9 14.0 L275.0 13.7 L282.4 12.5 L291.1 12.1 L302.0 13.7 L313.9 15.9 L327.6 17.3 L339.8 17.5 L354.1 16.0 L362.7 17.5 L372.4 15.6 L382.2 13.1 L397.3 15.8 L408.8 13.7 L421.7 12.3 L432.7 14.7 L442.0 14.4 L452.9 17.2 L462.8 17.5 L470.8 17.5 L478.9 17.5 L487.9 10.7 L497.6 7.5 L507.2 8.5 L514.4 8.8 L523.0 7.2 L530.1 9.2 L545.1 11.3 L555.7 11.6 L570.9 9.4 L581.5 7.7 L594.9 8.3 L603.8 8.1 L611.7 5.8 L625.8 6.3 L633.1 6.4 L644.3 4.8 L659.0 5.1 L669.9 3.7 L680.0 5.9 L692.3 6.6 L699.5 8.4 L708.1 8.4 L720.4 8.8 L727.6 8.7 L739.9 7.9 L754.0 6.2 L764.4 9.1 L772.2 6.5 L779.4 4.7 L793.6 7.2 L805.9 4.3 L819.8 2.5 L833.4 2.5 L845.6 3.5 L859.2 2.5 L868.6 2.5 L878.2 3.9 L891.6 6.2 L904.0 8.1 L914.3 10.6 L928.8 11.7 L943.4 13.5 L958.5 15.9 L971.8 17.3 L983.5 14.2 L991.7 15.5 L1000.0 15.5 L1000 24 Z" /></svg></div>
<div className="plf-road" aria-hidden="true"></div>

{/* ========== 1 ========== */}
<section className="plf-sec" id="s1">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>١</span></div>
      <div><span className="plf-tape plf-eyebrow">من، وأين، وكم متراً</span><h2 className="plf-t">بيانات المشروع</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <div className="plf-fields" style={{ "marginTop": "0" } as CSSProperties}>
        <div className="plf-f"><span className="plf-l">المالك أو الجهة</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">موقع المشروع</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">اسم المشروع أو وصفه</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">بيانات التواصل</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">المهندس المشرف (إن وجد)</span><span className="plf-bl"></span></div>
      </div>
    </div>
    <div className="plf-sub plf-card">
      <h3>نوع المشروع</h3>
      <div className="plf-inl"><div className="plf-opt"><span className="plf-box"></span><span>سكني</span></div><div className="plf-opt"><span className="plf-box"></span><span>تجاري</span></div><div className="plf-opt"><span className="plf-box"></span><span>آخر</span></div></div>
    </div>
    <div className="plf-sub plf-card">
      <h3>نطاق العمل</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span>كامل المشروع</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">أدوار محددة</span><span className="plf-bl"></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">فراغات محددة</span><span className="plf-bl"></span></span></div>
      </div>
      <div className="plf-inl" style={{ "marginTop": "14px" } as CSSProperties}><div className="plf-opt"><span className="plf-box"></span><span>الجدران</span></div><div className="plf-opt"><span className="plf-box"></span><span>الأسقف</span></div></div>
    </div>
    <div className="plf-sub plf-card">
      <h3>حجم المشروع التقريبي</h3>
      <div className="plf-row2" style={{ "marginTop": "12px" } as CSSProperties}>
        <div className="plf-f"><span className="plf-l">الأمتار الداخلية</span><span className="plf-bl"></span><span className="plf-u">م²</span></div>
        <div className="plf-f"><span className="plf-l">الأمتار الخارجية</span><span className="plf-bl"></span><span className="plf-u">م²</span></div>
      </div>
      <p className="plf-note">هذه أرقام تقريبية للتسعير. الكميات النهائية تُثبَّت بالرفع المساحي المتفق عليه في المحطة الثانية.</p>
    </div>
  </div>
</section>

{/* ========== 2 ========== */}
<section className="plf-sec" id="s2">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>٢</span></div>
      <div><span className="plf-tape plf-eyebrow">مصنعية أم بالمواد، وكيف يُحسب المتر</span><h2 className="plf-t">نوع الاتفاق وطريقة الحساب</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <h3>نوع الاتفاق</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>مصنعية</b><span className="plf-d">العمالة والتنفيذ على المليّس، والمواد يوفّرها المالك.</span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>مصنعية ومواد</b><span className="plf-d">المليّس يورّد المواد وينفّذ. وهنا تُسمّى المواد ومصادرها بالاسم:</span></span></div>
      </div>
      <div className="plf-fields" style={{ "paddingInlineStart": "34px" } as CSSProperties}>
        <div className="plf-f"><span className="plf-l">الأسمنت</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">الرمل</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">الشبك (فايبر أو حديد مجلفن)</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">الزوايا والإكسسوارات</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">الإضافات والمواد الرابطة</span><span className="plf-bl"></span></div>
      </div>
    </div>
    <div className="plf-sub plf-card">
      <h3>طريقة الحساب</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>بالمتر المسطّح</b> بعد رفع مساحي يوقّعه الطرفان</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>مقطوعية</b> لكامل البند</span></div>
      </div>
      <div className="plf-row2" style={{ "marginTop": "16px" } as CSSProperties}>
        <div className="plf-f"><span className="plf-l">سعر المتر الداخلي</span><span className="plf-bl"></span><span className="plf-u">ريال / م²</span></div>
        <div className="plf-f"><span className="plf-l">سعر المتر الخارجي</span><span className="plf-bl"></span><span className="plf-u">ريال / م²</span></div>
      </div>
      <p className="plf-note"><b>الرفع المساحي المبكر رخيص:</b> تعرف إجمالي البند من البداية، فترتّب السيولة والدفعات ولا يتوقف العمل في منتصفه. والسعر يتبع الدرجة (المحطتان ٣ و٥).</p>
    </div>
    <div className="plf-sub plf-card">
      <h3>النوافذ والأبواب: كيف تُحسب من الأمتار؟</h3>
      <p className="plf-lead">أكثر نقطة يختلف عليها الناس، وأسهلها حسماً إن كُتبت:</p>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span>تُحسب كاملة كأنها جدار <small style={{ "color": "var(--terra)", "fontWeight": "600" } as CSSProperties}>(الفاضي مليان)</small></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>يُحسب نصفها <small style={{ "color": "var(--terra)", "fontWeight": "600" } as CSSProperties}>(الفاضي نص)</small></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>تُخصم من الأمتار <small style={{ "color": "var(--terra)", "fontWeight": "600" } as CSSProperties}>(الفاضي فاضي)</small></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>حسب حجم الفتحة: الصغيرة كاملة، والمتوسطة نصفها، والكبيرة تُخصم. ويُكتب حدّ كل حجم: <span className="plf-bl" style={{ "display": "inline-block", "width": "8ch" } as CSSProperties}></span></span></div>
      </div>
      <p className="plf-note">تُقاس الفتحة من جهة واحدة فقط، من الداخل أو من الخارج، لا من الجهتين. والفتحة التي تُركَّب على حوافها زوايا أو إكسسوارات تأخذ جهداً أكبر، فهي أقرب إلى الحساب الكامل.</p>
    </div>
  </div>
</section>

{/* ========== 3 ========== */}
<section className="plf-sec" id="s3">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>٣</span></div>
      <div><span className="plf-tape plf-eyebrow">اللياسة الداخلية</span><h2 className="plf-t">الدرجة والملمس</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <h3>درجة التنفيذ</h3>
      <p className="plf-lead">لكل درجة سعرها، ويمكن أن تختلف من فراغ لآخر. وإن لم تُكتب، فكلٌّ في باله درجة.</p>
      <div className="plf-grades">
        <div className="plf-grade" style={{ "--w": "46%" } as CSSProperties}><span className="plf-box"></span><div className="plf-gb"><div className="plf-gbar"><span className="plf-gn">لياسة عادية</span><span className="plf-gl">الدرجة ١</span></div><div className="plf-g-w">تغطي البلك كما هو وتتبع تعرّجاته، ولا تُضبط بالقدّة ولا بالميزان.</div><div className="plf-g-r">جدار مغطّى لا مستوٍ؛ تظهر مطبّاته مع الإضاءة الجانبية.</div></div></div>
        <div className="plf-grade" style={{ "--w": "59%" } as CSSProperties}><span className="plf-box"></span><div className="plf-gb"><div className="plf-gbar"><span className="plf-gn">لياسة قدّة</span><span className="plf-gl">الدرجة ٢</span></div><div className="plf-g-w">مستوية تحت القدّة بلا مطبّات، وميلها الرأسي يُضبط بالعين لا بالميزان.</div><div className="plf-g-r">سطح مستوٍ، لكنه قد يكون مائلاً قليلاً.</div></div></div>
        <div className="plf-grade" style={{ "--w": "72%" } as CSSProperties}><span className="plf-box"></span><div className="plf-gb"><div className="plf-gbar"><span className="plf-gn">لياسة قدّة وميزان</span><span className="plf-gl">الدرجة ٣</span></div><div className="plf-g-w">مستوية بالقدّة وقائمة بالميزان، وزوايا الغرفة تُضبط بالعين لا على ٩٠ تماماً.</div><div className="plf-g-r">لا فراغ بين الجدار والأثاث.</div></div></div>
        <div className="plf-grade" style={{ "--w": "86%" } as CSSProperties}><span className="plf-box"></span><div className="plf-gb"><div className="plf-gbar"><span className="plf-gn">لياسة تربيع</span><span className="plf-gl">الدرجة ٤</span></div><div className="plf-g-w">قدّة وميزان، وزوايا الغرفة قائمة على ٩٠.</div><div className="plf-g-r">الدولاب يستقرّ في الركن بلا فراغ.</div></div></div>
        <div className="plf-grade" style={{ "--w": "100%" } as CSSProperties}><span className="plf-box"></span><div className="plf-gb"><div className="plf-gbar"><span className="plf-gn">لياسة فاخرة: تربيع وتأكيس</span><span className="plf-gl">الدرجة ٥</span></div><div className="plf-g-w">أعلى درجة: الغرف مربّعة، والزوايا قائمة، وجدران الدور متعامدة ومضبوطة على محاورها.</div><div className="plf-g-r">للدهان الفاخر والتشطيب الدقيق.</div></div></div>
      </div>
      <div className="plf-opts" style={{ "marginTop": "20px" } as CSSProperties}>
        <div className="plf-opt"><span className="plf-box"></span><span>الدرجة المختارة تُطبَّق على <b>جميع</b> الجدران والفراغات الداخلية</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>درجة أساسية، مع <b>استثناءات</b> لفراغات محددة:</span></div>
      </div>
      <div className="plf-tbl">
        <div className="plf-tr"><div className="plf-td">الفراغ</div><div className="plf-td">درجته</div></div>
        <div className="plf-tr"><div className="plf-td"></div><div className="plf-td"></div></div>
        <div className="plf-tr"><div className="plf-td"></div><div className="plf-td"></div></div>
        <div className="plf-tr"><div className="plf-td"></div><div className="plf-td"></div></div>
      </div>
    </div>
    <div className="plf-sub plf-card">
      <h3>ملمس السطح النهائي</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>خشن</b>، مسحوب بحديدة مسنّنة<span className="plf-d">لما سيُكسى بالبلاط أو الحجر.</span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>متوسط النعومة</b></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>ناعم</b></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>ناعم جداً</b><span className="plf-d">للدهان الفاخر.</span></span></div>
      </div>
      <p className="plf-note">جدران الحمامات والمطابخ التي ستُبلَّط تُسعَّر وتُنفَّذ كأي جدار، لكنها تُترك خشنة بلا تنعيم ليتماسك عليها لاصق البلاط.</p>
    </div>
  </div>
</section>

{/* ========== 4 ========== */}
<section className="plf-sec" id="s4">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>٤</span></div>
      <div><span className="plf-tape plf-eyebrow">اللياسة الداخلية</span><h2 className="plf-t">الفتحات والمعالجة والإكسسوارات</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <h3>ضبط فتحات النوافذ (التأميم)</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span>ضبط بالقدّة بلا تربيع</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>ضبط بالقدّة مع تربيع الزوايا وتوحيد العمق <small style={{ "color": "var(--ink-3)" } as CSSProperties}>(تزوية وشرب موحّد)</small></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>زوايا حديد على الحواف الداخلية والخارجية</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>زوايا فايبر على الحواف الداخلية والخارجية</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>طرطشة فقط<span className="plf-d">عند تركيب حجر على الفتحات.</span></span></div>
      </div>
    </div>
    <div className="plf-sub plf-card">
      <h3>ضبط فتحات الأبواب</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span>ضبط بالقدّة بلا تربيع</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>ضبط بالقدّة مع تربيع الزوايا وتوحيد العمق</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>حلوق خشب تُركَّب بعد الطرطشة</span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>حلوق زفر يركّبها النجار بعد البؤج <small style={{ "color": "var(--ink-3)" } as CSSProperties}>(نقاط الاستواء)</small></span></div>
      </div>
    </div>
    <div className="plf-sub plf-card">
      <h3>المعالجة قبل اللياسة</h3>
      <p className="plf-lead">اللياسة تخفي كل شيء تحتها، وما لا يُعالَج قبلها يظهر بعدها شقوقاً.</p>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>التقاء البلك بالأعمدة والجسور</b><span className="plf-d">مادتان تتحرّكان بشكل مختلف، فيُغطّى خط التقائهما بشبك:</span>
          <span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>شبك فايبر</span></span><span className="plf-opt"><span className="plf-box"></span><span>شبك حديد</span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>خطوط تكسير الكهربائي والسبّاك</b> بعد تقفيلها<span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>شبك فايبر</span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>الأسطح الخرسانية الملساء</b><span className="plf-d">لا تتماسك عليها اللياسة من دون معالجة:</span>
          <span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>كيميائية: مادة رابطة</span></span><span className="plf-opt"><span className="plf-box"></span><span>ميكانيكية: تخشين السطح</span></span></span></span></div>
      </div>
      <p className="plf-note">الشبك يوزّع الإجهاد ولا يمنع الحركة. شبك ناقص يعني احتمال تشققات أعلى، لا شقاً مؤكداً.</p>
    </div>
    <div className="plf-sub plf-card">
      <h3>الإكسسوارات الداخلية</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>زوايا حماية</b> للأركان والأعمدة البارزة والنواصي
          <span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>استيل</span></span><span className="plf-opt"><span className="plf-box"></span><span>فايبر</span></span></span>
          <span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>جميع الأركان</span></span><span className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">أركان محددة</span><span className="plf-bl plf-bl--s"></span></span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>النعلة</b> <small style={{ "color": "var(--ink-3)" } as CSSProperties}>(الوزرة المخفية عند التقاء الجدار بالأرض)</small>
          <span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>مخفية، قصّ ليزر</span></span><span className="plf-opt"><span className="plf-box"></span><span>مخفية، زاوية استيل</span></span></span>
          <span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>جميع الفراغات</span></span><span className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">مع استثناءات</span><span className="plf-bl plf-bl--s"></span></span></span></span></span></div>
      </div>
      <div className="plf-fields" style={{ "paddingInlineStart": "34px" } as CSSProperties}>
        <div className="plf-f"><span className="plf-l">ارتفاع النعلة</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">سم</span><span className="plf-l" style={{ "marginInlineStart": "14px" } as CSSProperties}>سماكتها</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">سم</span></div>
        <div className="plf-f"><span className="plf-l">منسوب البلاط (شرب البلاط)</span><span className="plf-bl"></span></div>
      </div>
    </div>
  </div>
</section>

{/* ========== 5 ========== */}
<section className="plf-sec" id="s5">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>٥</span></div>
      <div><span className="plf-tape plf-eyebrow">الواجهات وبئر المصعد</span><h2 className="plf-t">اللياسة الخارجية</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <h3>نوع اللياسة</h3>
      <div className="plf-inl"><div className="plf-opt"><span className="plf-box"></span><span>أسمنتية</span></div><div className="plf-opt"><span className="plf-box"></span><span>بروفايل</span></div><div className="plf-opt"><span className="plf-box"></span><span>تراثية</span></div><div className="plf-opt"><span className="plf-box"></span><span>حجر</span></div><div className="plf-opt"><span className="plf-box"></span><span>ملوّنة</span></div></div>
    </div>
    <div className="plf-sub plf-card">
      <h3>درجة التنفيذ</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>عادية</b><span className="plf-d">تتبع البلك.</span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>قدّة ٣ أمتار</b><span className="plf-d">مستوية تحت قدّة بطول ثلاثة أمتار.</span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>قدّة وخيط</b><span className="plf-d">مستوية ومضبوطة على خيط ممدود بطول الواجهة، فتخرج الواجهة على استقامة واحدة.</span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>قدّة وميزان</b><span className="plf-d">مستوية وقائمة.</span></span></div>
      </div>
      <div className="plf-inl" style={{ "marginTop": "16px" } as CSSProperties}><div className="plf-opt"><span className="plf-box"></span><span>على جميع الواجهات</span></div><div className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">مع استثناءات</span><span className="plf-bl plf-bl--s"></span></span></div></div>
    </div>
    <div className="plf-sub plf-card">
      <h3>ملمس السطح النهائي</h3>
      <div className="plf-inl"><div className="plf-opt"><span className="plf-box"></span><span>خشن، مسحوب بحديدة مسنّنة</span></div><div className="plf-opt"><span className="plf-box"></span><span>متوسط النعومة</span></div><div className="plf-opt"><span className="plf-box"></span><span>ناعم</span></div><div className="plf-opt"><span className="plf-box"></span><span>ناعم جداً</span></div></div>
    </div>
    <div className="plf-sub plf-card">
      <h3>بئر المصعد</h3>
      <div className="plf-inl"><div className="plf-opt"><span className="plf-box"></span><span>بلا لياسة</span></div><div className="plf-opt"><span className="plf-box"></span><span>عادية</span></div><div className="plf-opt"><span className="plf-box"></span><span>قدّة وخيط</span></div><div className="plf-opt"><span className="plf-box"></span><span>قدّة وميزان</span></div></div>
      <div className="plf-opts" style={{ "marginTop": "12px" } as CSSProperties}><div className="plf-opt"><span className="plf-box"></span><span>قروف نحت حول حدود الخرسانات</span></div></div>
    </div>
    <div className="plf-sub plf-card">
      <h3>إكسسوارات الواجهات</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>قروف إنارة</b><span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>استيل</span></span><span className="plf-opt"><span className="plf-box"></span><span>نحت</span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>قروف ديكورية</b><span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>استيل</span></span><span className="plf-opt"><span className="plf-box"></span><span>نحت</span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>مجرى يقطع المطر عن الواجهة</b> <small style={{ "color": "var(--ink-3)" } as CSSProperties}>(الدمعة)</small><span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>استيل</span></span><span className="plf-opt"><span className="plf-box"></span><span>نحت</span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>زوايا</b> لتقوية الأركان واستقامتها<span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>استيل</span></span><span className="plf-opt"><span className="plf-box"></span><span>فايبر</span></span></span></span></div>
      </div>
      <p className="plf-note">تُرفق مخططات الواجهات موضَّحاً عليها مواقع الإكسسوارات، فلا يُترك موضع قروف أو دمعة للتقدير في الموقع.</p>
    </div>
    <div className="plf-sub plf-card">
      <h3>المعالجة الخارجية</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span><b>التقاء البلك بالأعمدة والجسور</b><span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>شبك فايبر</span></span><span className="plf-opt"><span className="plf-box"></span><span>شبك حديد</span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>خطوط التكسير</b> بعد تقفيلها<span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>شبك فايبر</span></span></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span><b>الأسطح الخرسانية الملساء</b><span className="plf-inl"><span className="plf-opt"><span className="plf-box"></span><span>كيميائية: مادة رابطة</span></span><span className="plf-opt"><span className="plf-box"></span><span>ميكانيكية: تخشين السطح</span></span></span></span></div>
      </div>
    </div>
  </div>
</section>

{/* ========== 6 ========== */}
<section className="plf-sec" id="s6">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>٦</span></div>
      <div><span className="plf-tape plf-eyebrow">إذا كان الجدار أعوج</span><h2 className="plf-t">السماكة والتلبيش</h2></div>
    </header>
    <p className="plf-lead">إذا كان البلك مائلاً أو متعرّجاً، تزيد سماكة اللياسة لتعديله، وهذا هو التلبيش. لا يظهر في العرض ويظهر في الفاتورة، فيُحسم هنا قبل أن تُدفن السماكة.</p>
    <div className="plf-sub plf-card">
      <div className="plf-opts" style={{ "marginTop": "0" } as CSSProperties}>
        <div className="plf-opt"><span className="plf-box"></span><span>استُلم البلك بالميزان قبل اللياسة<span className="plf-d">استلام العظم بالميزان يقلّل التلبيش قبل أن يبدأ.</span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>لم يُستلم، والتلبيش يُحصر بعد البؤج</span></div>
      </div>
      <div className="plf-fields" style={{ "marginTop": "20px" } as CSSProperties}>
        <div className="plf-f"><span className="plf-l">السماكة المشمولة في سعر المتر: حتى</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">سم</span></div>
        <div className="plf-f"><span className="plf-l">يبدأ التلبيش من سماكة</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">سم</span></div>
        <div className="plf-f"><span className="plf-l">الزيادة على سعر المتر</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">ريال / م²</span></div>
      </div>
    </div>
    <div className="plf-sub plf-card">
      <h3>طريقة تنفيذه</h3>
      <div className="plf-inl"><div className="plf-opt"><span className="plf-box"></span><span>على طبقتين</span></div><div className="plf-opt"><span className="plf-box"></span><span>بتسليح (شبك) للسماكات الكبيرة</span></div></div>
      <p className="plf-note"><b>متى يُقاس؟</b> بعد البؤج (نقاط الاستواء) وقبل الطرطشة، بمحضر يوقّعه الطرفان يحدّد الجدران وسماكاتها. بعد ذلك لا أحد يستطيع إثبات شيء.</p>
    </div>
  </div>
</section>

{/* ========== 7 ========== */}
<section className="plf-sec" id="s7">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring plf-ring--focus"><span>٧</span></div>
      <div><span className="plf-tape plf-eyebrow">عليه · بزيادة · عليك</span><h2 className="plf-t">من يتحمّل ماذا</h2></div>
    </header>
    <p className="plf-lead">سعر المتر رقم واحد، ومعناه يختلف من مليّس لآخر: بند داخل في السعر عند أحدهم، وبزيادة عند الآخر. ضعوا كل بند في خانته.</p>
    <div className="plf-folder">
      <div className="plf-sheet">
        <i className="plf-pc plf-pc-tl"></i><i className="plf-pc plf-pc-tr"></i><i className="plf-pc plf-pc-bl"></i><i className="plf-pc plf-pc-br"></i>
        <div className="plf-legend">
          <span className="plf-tape plf-tape--ink">عليه</span><span className="plf-lg">شامل سعر المتر</span>
          <span className="plf-tape plf-tape--terra">بزيادة</span><span className="plf-lg">فوق سعر المتر، ويُكتب سعره</span>
          <span className="plf-tape plf-tape--out">عليك</span><span className="plf-lg">توفّره أنت</span>
        </div>
        <p className="plf-lg" style={{ "marginTop": "14px", "display": "flex", "alignItems": "flex-start", "gap": "8px", "fontSize": "13.5px", "color": "var(--ink-2)" } as CSSProperties}><span className="plf-star" style={{ "marginTop": "7px", "flex": "none" } as CSSProperties}></span><span>تقسيم شغموم المعتاد. يختلف من مليّس لآخر، فاكتبوا تقسيمكم.</span></p>
        <div className="plf-rt">
          <div className="plf-rh"><span>البند</span><span className="plf-tape plf-tape--ink">عليه</span><span className="plf-tape plf-tape--terra">بزيادة</span><span className="plf-tape plf-tape--out">عليك</span><span>سعر الزيادة</span></div>

          <div className="plf-rr"><div className="plf-it">اللياسة بمراحلها الست، حتى الطرطشة والملو<small>التحضير، البؤج، المعالجة، الطرطشة، الإكسسوارات، الملو</small></div><div className="plf-cells"><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">تقفيل تكسيرات الكهربائي والسبّاك قبل اللياسة</div><div className="plf-cells"><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">إصلاح عيوب تنفيذه<small>التطبيل، وفتح الزوايا، والاستواء</small></div><div className="plf-cells"><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">الأدوات والمعدات</div><div className="plf-cells"><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">التنظيف أول بأول، وجمع المخلفات في مكان يحدّده المالك</div><div className="plf-cells"><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">ترحيل المخلفات إلى خارج الموقع</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">الماء والكهرباء</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">المواد في اتفاق المصنعية، حتى الشبك</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">تنظيف العظم قبل البدء<small>الأخشاب العالقة في الجدران، وقصّ الأشاير الزائدة</small></div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>سعره</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">أعمال البناء والترميم اللازمة قبل اللياسة</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>مقطوعية</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">طلوع المواد إلى الأدوار (التشوين)</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>سعره</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">تركيب الشبك</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>سعره</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">الزوايا والإكسسوارات</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>سعره</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">التلبيش<small>بالحدود والسعر المكتوبة في المحطة السادسة</small></div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>سعره</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">ترقيع أي تكسير بعد اللياسة</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>مقطوعية</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">حماية التمديدات المكشوفة من الخلطة</div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price"><span>سعره</span><span className="plf-bl"></span></span></div></div>
          <div className="plf-rr"><div className="plf-it">السقالة للجدران العالية والواجهات<small>تخدم بعد اللياسة الدهّان ومركّب الحجر والنوافذ</small></div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
          <div className="plf-rr"><div className="plf-it">رشّ الماء صباحاً ومساءً طوال فترة التنفيذ<small>يحتاج شخصاً ساعةً في الصباح وساعةً في المساء: أنت أو الحارس</small></div><div className="plf-cells"><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">عليه</span></span><span className="plf-cell"><span className="plf-box"></span><span className="plf-lab">بزيادة</span></span><span className="plf-cell plf-def"><span className="plf-box"></span><span className="plf-lab">عليك</span></span><span className="plf-price plf-empty"></span></div></div>
        </div>
        <p className="plf-foot"><b>البند الذي لا يُكتب سعره هنا سيُطلب أثناء العمل.</b> ومن حق المليّس أن يطلبه.</p>
      </div>
    </div>
  </div>
</section>

{/* ========== 8 ========== */}
<section className="plf-sec" id="s8">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>٨</span></div>
      <div><span className="plf-tape plf-eyebrow">متى يبدأ، ومتى ينتهي، وكيف تُدفع</span><h2 className="plf-t">المدة والدفعات</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <h3>مدة التنفيذ الكاملة للبند</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">يحدّدها المقاول بعد زيارة الموقع</span><span className="plf-bl"></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">يحدّدها المالك</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">يوم / أسبوع / شهر</span></span></div>
      </div>
      <div className="plf-fields"><div className="plf-f"><span className="plf-l">تاريخ البدء</span><span className="plf-bl"></span></div></div>
      <div className="plf-opts" style={{ "marginTop": "16px" } as CSSProperties}>
        <div className="plf-opt"><span className="plf-box"></span><span>لا ينتقل الطاقم إلى مشروع آخر قبل إنهاء هذا البند</span></div>
      </div>
      <p className="plf-note">ما يتأخّر توفيره من جهة المالك (الماء، الكهرباء، المواد، السقالة، الرشّ) يمدّ المدة بالقدر نفسه.</p>
    </div>
    <div className="plf-sub plf-card">
      <h3>الدفعات</h3>
      <div className="plf-opts">
        <div className="plf-opt"><span className="plf-box"></span><span>على الكميات المنفَّذة، بالمتر، كل <span className="plf-bl" style={{ "display": "inline-block", "width": "6ch" } as CSSProperties}></span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span>على المراحل:
          <span className="plf-fields" style={{ "marginTop": "6px", "gap": "8px" } as CSSProperties}>
            <span className="plf-f"><span className="plf-l">بعد البؤج والطرطشة</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">٪</span></span>
            <span className="plf-f"><span className="plf-l">بعد الملو</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">٪</span></span>
            <span className="plf-f"><span className="plf-l">بعد الاستلام النهائي</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">٪</span></span>
          </span></span></div>
        <div className="plf-opt"><span className="plf-box"></span><span className="plf-f" style={{ "display": "flex" } as CSSProperties}><span className="plf-l">أخرى</span><span className="plf-bl"></span></span></div>
      </div>
    </div>
  </div>
</section>

{/* ========== 9 ========== */}
<section className="plf-sec" id="s9">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>٩</span></div>
      <div><span className="plf-tape plf-eyebrow">متى تستلم، وماذا يُضمن</span><h2 className="plf-t">الاستلام والضمان</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <h3>محطات الاستلام</h3>
      <p className="plf-lead">ست مراحل يمرّ بها جدارك، وثلاث محطات تستلم عندها، لأن كل مرحلة تخفي ما قبلها:</p>
      <div className="plf-stages" aria-label="مراحل اللياسة ومحطات الاستلام">
        <div className="plf-line" aria-hidden="true"></div>
        <div className="plf-stg"><div className="plf-r"><span>١</span></div><div className="plf-sb"><div className="plf-n">التحضير</div></div></div>
        <div className="plf-stg plf-chk"><div className="plf-r"><span>٢</span></div><div className="plf-sb"><div className="plf-n">البؤج <small>(نقاط الاستواء)</small></div><div className="plf-opt"><span className="plf-box"></span><span><b>محطة استلام:</b> تُفحص الاستقامة والميزان، ويُحصر التلبيش.</span></div></div></div>
        <div className="plf-stg"><div className="plf-r"><span>٣</span></div><div className="plf-sb"><div className="plf-n">المعالجة</div></div></div>
        <div className="plf-stg plf-chk"><div className="plf-r"><span>٤</span></div><div className="plf-sb"><div className="plf-n">الطرطشة</div><div className="plf-opt"><span className="plf-box"></span><span><b>محطة استلام:</b> الطرطشة والشبك، قبل أن يغطّيهما الملو.</span></div></div></div>
        <div className="plf-stg"><div className="plf-r"><span>٥</span></div><div className="plf-sb"><div className="plf-n">الإكسسوارات</div></div></div>
        <div className="plf-stg plf-chk"><div className="plf-r"><span>٦</span></div><div className="plf-sb"><div className="plf-n">الملو</div><div className="plf-opt"><span className="plf-box"></span><span><b>الاستلام النهائي:</b> الاستواء، والميزان، والزوايا، والتطبيل، والفتحات.</span></div></div></div>
      </div>
      <p className="plf-note"><b>أقوى ضمان لعمل المليّس أن تستلمه جيداً.</b> طريقة الاستلام خطوةً خطوة في منشور شغموم عن الاستلام.</p>
    </div>
    <div className="plf-sub plf-card">
      <h3>ضمان عيوب التنفيذ</h3>
      <div className="plf-fields">
        <div className="plf-f"><span className="plf-l">مدته</span><span className="plf-bl plf-bl--s"></span><span className="plf-u">سنة</span></div>
        <div className="plf-f"><span className="plf-l">يشمل</span><span className="plf-bl"></span></div>
        <div className="plf-f"><span className="plf-l">لا يشمل</span><span className="plf-bl"></span></div>
      </div>
      <p className="plf-note">من عيوب التنفيذ المعتادة: التطبيل، وتشقق خطوط التكسير، وفتح الزوايا. ما يأتي من حركة المبنى أو من تسريب لاحق ليس منها.</p>
    </div>
  </div>
</section>

{/* ========== 10 ========== */}
<section className="plf-sec" id="s10">
  <div className="plf-wrap">
    <header className="plf-sh">
      <div className="plf-ring"><span>١٠</span></div>
      <div><span className="plf-tape plf-eyebrow">ما لم تحتوِه البنود</span><h2 className="plf-t">ملاحظات وتوقيع</h2></div>
    </header>
    <div className="plf-sub plf-card" style={{ "marginTop": "0" } as CSSProperties}>
      <h3>ملاحظات</h3>
      <div className="plf-lines"><span className="plf-bl"></span><span className="plf-bl"></span><span className="plf-bl"></span><span className="plf-bl"></span></div>
    </div>
    <div className="plf-sig">
      <div className="plf-card"><i className="plf-pc plf-pc-tl"></i><i className="plf-pc plf-pc-tr"></i><i className="plf-pc plf-pc-bl"></i><i className="plf-pc plf-pc-br"></i><div className="plf-seal">الختم</div><div className="plf-who">المالك</div>
        <div className="plf-fields"><div className="plf-f"><span className="plf-l">الاسم</span><span className="plf-bl"></span></div><div className="plf-f"><span className="plf-l">التوقيع</span><span className="plf-bl"></span></div><div className="plf-f"><span className="plf-l">التاريخ</span><span className="plf-bl"></span></div></div></div>
      <div className="plf-card"><i className="plf-pc plf-pc-tl"></i><i className="plf-pc plf-pc-tr"></i><i className="plf-pc plf-pc-bl"></i><i className="plf-pc plf-pc-br"></i><div className="plf-seal">الختم</div><div className="plf-who">المليّس (المقاول)</div>
        <div className="plf-fields"><div className="plf-f"><span className="plf-l">الاسم</span><span className="plf-bl"></span></div><div className="plf-f"><span className="plf-l">التوقيع</span><span className="plf-bl"></span></div><div className="plf-f"><span className="plf-l">التاريخ</span><span className="plf-bl"></span></div></div></div>
    </div>
    <p className="plf-note">نسخة لكل طرف، وتُرفق بالاتفاق. ما يُعدَّل بعد التوقيع يُكتب ويُوقَّع من الطرفين كذلك.</p>
  </div>
</section>
</div>{/* /sections */}

{/* ========== CLOSING ========== */}
<section className="plf-band plf-close">
  <div className="plf-tear plf-tear--sand" aria-hidden="true"><svg viewBox="0 0 1000 24" preserveAspectRatio="none"><path d="M0 24 L0 9.4 L0.0 9.4 L8.0 11.4 L19.5 14.1 L34.6 15.6 L46.7 16.2 L62.1 15.6 L76.2 12.5 L87.0 14.6 L99.0 13.7 L113.8 15.4 L127.1 15.0 L137.8 17.5 L151.7 17.5 L163.5 15.4 L174.2 12.3 L184.4 10.4 L192.0 13.0 L200.2 12.1 L207.8 13.8 L223.1 15.9 L238.4 17.5 L249.8 17.5 L264.5 17.5 L271.4 17.0 L283.1 17.5 L297.3 15.7 L309.0 13.9 L316.1 13.7 L327.9 16.8 L342.3 15.4 L350.2 16.3 L363.7 13.9 L378.8 10.7 L391.3 12.2 L402.3 15.1 L415.1 16.2 L425.9 13.1 L435.0 14.9 L448.4 14.3 L458.4 13.1 L470.8 14.3 L481.0 15.9 L492.9 12.7 L507.1 10.9 L514.2 12.6 L521.2 11.1 L534.5 8.0 L541.7 7.9 L555.2 5.6 L564.2 7.1 L576.0 3.9 L586.4 5.4 L594.0 5.8 L608.7 6.5 L622.1 4.4 L633.8 5.2 L645.0 4.7 L659.9 6.9 L667.2 10.0 L678.2 10.4 L690.6 11.0 L705.8 13.1 L719.4 16.0 L726.8 13.2 L735.2 15.1 L743.8 13.0 L751.2 12.8 L762.4 14.6 L771.6 12.5 L784.6 4.9 L795.4 6.7 L808.7 7.8 L818.7 4.8 L828.9 6.0 L837.0 2.9 L844.1 3.1 L853.6 2.5 L864.4 2.5 L877.7 2.5 L891.7 8.7 L903.9 11.5 L914.8 13.5 L927.0 13.0 L941.4 15.5 L948.3 14.9 L958.8 13.8 L971.1 14.3 L978.2 11.7 L988.5 14.0 L1000.0 14.0 L1000 24 Z" /></svg></div>
  <div className="plf-wrap">
    <svg className="plf-lockup" viewBox="0 0 2951.27 1129.61" role="img" aria-label="شغموم SHOGHMOUM"><path d="M1267.24 0L1330.04 62.8L1267.24 124.48L1205.56 62.8L1267.24 0M2717.62 46.5L2780.42 109.3L2717.62 170.99L2655.94 109.3L2717.62 46.5M2652.22 152.81L2715.02 215.61L2652.22 277.29L2590.55 215.61L2652.22 152.81M2783.01 152.81L2845.81 215.61L2783.01 277.29L2721.33 215.61L2783.01 152.81M693.15 442.92C702.77 419.16 725.21 386.67 751.4 381.67C798.92 381.34 827.98 452.24 838.1 491.07C787.3 491.53 704.72 487.76 693.15 442.92M2904.56 306.48L2887.77 307.73L2876.75 370.12L2878.64 377.53C2892.51 401.51 2903.83 425.78 2904.41 454.11C2855.31 447.78 2806.67 438.06 2761.3 417.89C2768.21 392.58 2774.39 367.72 2779.92 342.32L2763.09 337.56C2753.19 365.58 2743.53 394.04 2727.88 419.46C2711.87 432.88 2672.33 458.34 2540.7 440.06C2554.5 419.28 2587.45 369.64 2587.45 369.64L2573.82 357.93C2566.05 367.93 2558.97 378.12 2536.24 391.89C2351.96 503.55 1534.43 536.22 1310.18 373.7C1372.81 347.34 1382.1 327.87 1384.6 323.17C1384.6 323.17 1408.13 278.97 1420.98 254.84C1459.45 182.59 1171.53 127.44 1126.45 227.52C1126.45 227.52 1097.19 296.04 1095.06 301.02L1106.86 312.7C1114.73 309.08 1164.79 275.28 1215.62 339.23C1215.62 339.23 1119.23 372.83 1101.38 437.22C1098.83 446.44 1091.17 474.08 1091.17 474.08L864.52 490.66C869.88 442.62 847.13 282.12 765.66 282.12C702.17 282.12 625.46 469.7 697.7 545.17C734.17 583.25 814.48 579.71 814.8 579.71C813.97 580.34 681.79 730.38 430.65 724C421.88 723.78 395.63 722.17 395.63 722.17L392.5 739.53C503.29 767.2 644.7 774.1 644.7 774.1C672.4 774.1 794.85 697.37 847.87 579.75C847.88 579.75 1048.1 560.28 1070.25 563.89C1154.36 577.62 1194.9 648.39 1203.85 667.57L1218.72 668.53L1260.24 596.69L1261.54 587.8C1242.44 536.92 1172.16 490.38 1125.62 464.55C1158.53 429.34 1238.31 402.1 1258.43 394.14C1288.91 442.57 1334.82 486.41 1398.45 511.78C1697.28 630.94 2295.37 572.45 2427 514.7C2511.63 531.84 2656.89 561.85 2722.84 492.93C2797.26 524.29 2889.64 531.82 2894.22 532.17L2903.01 526.24L2929.04 462.98C2951.27 408.59 2933.65 357.36 2904.56 306.48M330.27 385.81C377.6 321.85 416.34 345.51 448.32 405.88C454.15 417.54 459.52 429.1 464.05 442.6C418.7 424.45 375.07 405.47 330.27 385.81M504.56 555.25L534.09 474.25C522.25 326.24 453.7 267.5 453.7 267.5C411.81 229.48 357 265.16 337.64 307.61C320.27 345.71 280.35 465.03 280.35 465.03C278.76 470 281.04 474.65 285.78 476.46L326.54 494.45L0 717.1L7.16 733.22C58.02 711.57 195.47 649.86 210.56 642.01C229.75 632.02 294.19 601.66 346.88 503.17C346.88 503.17 456.02 548.15 490.92 559.14L504.56 555.25M74.95 1129.61C61.94 1129.61 49.17 1127.64 36.61 1123.68C24.06 1119.74 13.13 1113.93 3.85 1106.26L3.85 1070.71L5.25 1070.71C15.93 1081.64 26.91 1089.71 38.19 1094.94C49.45 1100.16 61 1102.78 72.85 1102.78C82.16 1102.78 90.63 1101.21 98.3 1098.07C105.97 1094.94 112.13 1090.4 116.77 1084.47C121.41 1078.56 123.74 1071.53 123.74 1063.4C123.74 1055.03 121.18 1048.18 116.08 1042.83C110.96 1037.49 102.95 1032.26 92.03 1027.15L59.27 1012.51C42.99 1004.85 30.75 995.67 22.5 984.98C14.25 974.29 10.12 962.1 10.12 948.38C10.12 936.07 13.55 924.57 20.41 913.87C27.26 903.19 36.97 894.71 49.51 888.43C62.06 882.16 76.11 879.03 91.69 879.03C102.83 879.03 113.63 880.54 124.1 883.55C134.55 886.58 143.26 890.52 150.24 895.41L150.24 929.91L149.18 929.91C141.05 922.01 132.23 916.03 122.7 911.96C113.17 907.9 103.29 905.87 93.07 905.87C83.08 905.87 74.44 907.43 67.11 910.57C59.78 913.7 53.92 918.18 49.51 923.98C45.09 929.79 42.88 936.65 42.88 944.55C42.88 952.68 45.33 959.65 50.2 965.46C55.08 971.27 62.86 976.85 73.56 982.19L105.97 996.83C123.16 1004.26 136 1012.86 144.48 1022.61C152.95 1032.38 157.2 1044.69 157.2 1059.56C157.2 1072.8 153.48 1084.83 146.06 1095.63C138.62 1106.43 128.67 1114.8 116.25 1120.72C103.82 1126.65 90.06 1129.61 74.95 1129.61M443.69 948.03C443.69 939.21 443.44 931.02 442.98 923.46C442.52 915.92 441.87 908.89 441.07 902.38C440.25 895.88 439.37 889.72 438.45 883.91L438.45 883.21L481.32 883.21L481.32 883.91C480.15 889.72 479.22 895.88 478.53 902.38C477.84 908.89 477.32 915.86 476.97 923.29C476.61 930.73 476.44 938.97 476.44 948.03L476.44 1060.61C476.44 1069.44 476.61 1077.63 476.97 1085.18C477.32 1092.73 477.84 1099.76 478.53 1106.26C479.22 1112.77 480.15 1118.93 481.32 1124.73L481.32 1125.43L438.45 1125.43L438.45 1124.73C439.37 1118.93 440.25 1112.77 441.07 1106.26C441.87 1099.76 442.52 1092.73 442.98 1085.18C443.44 1077.63 443.69 1069.44 443.69 1060.61L443.69 948.03M295.55 989.86L448.21 989.86L448.21 1016.34L295.55 1016.34ZM276.74 948.03C276.74 938.97 276.62 930.73 276.39 923.29C276.16 915.86 275.64 908.89 274.81 902.38C274.01 895.88 273.02 889.72 271.85 883.91L271.85 883.21L315.08 883.21L315.08 883.91C313.68 889.72 312.64 895.88 311.93 902.38C311.24 908.89 310.71 915.92 310.37 923.46C310.02 931.02 309.84 939.21 309.84 948.03L309.84 1060.61C309.84 1069.44 310.02 1077.63 310.37 1085.18C310.71 1092.73 311.24 1099.76 311.93 1106.26C312.64 1112.77 313.68 1118.93 315.08 1124.73L315.08 1125.43L271.85 1125.43L271.85 1124.73C273.02 1118.93 274.01 1112.77 274.81 1106.26C275.64 1099.76 276.16 1092.73 276.39 1085.18C276.62 1077.63 276.74 1069.44 276.74 1060.61L276.74 948.03M715.52 1102.43C732.01 1102.43 746.71 1098.3 759.62 1090.06C772.51 1081.81 782.43 1070.36 789.41 1055.73C796.38 1041.08 799.87 1024.13 799.87 1004.85C799.87 985.32 796.38 968.13 789.41 953.26C782.43 938.39 772.51 926.77 759.62 918.41C746.71 910.05 732.01 905.87 715.52 905.87C699.26 905.87 684.69 910.05 671.78 918.41C658.9 926.77 648.84 938.39 641.64 953.26C634.43 968.13 630.83 985.32 630.83 1004.85C630.83 1023.9 634.43 1040.8 641.64 1055.55C648.84 1070.31 658.83 1081.81 671.62 1090.06C684.39 1098.3 699.03 1102.43 715.52 1102.43M715.52 1129.61C692.76 1129.61 672.2 1124.21 653.84 1113.4C635.49 1102.6 621.18 1087.68 610.98 1068.62C600.74 1049.57 595.64 1028.31 595.64 1004.85C595.64 980.91 600.74 959.42 610.98 940.37C621.18 921.31 635.49 906.33 653.84 895.41C672.2 884.49 692.76 879.03 715.52 879.03C738.76 879.03 759.55 884.49 777.91 895.41C796.26 906.33 810.5 921.31 820.61 940.37C830.71 959.42 835.77 980.91 835.77 1004.85C835.77 1028.54 830.71 1049.86 820.61 1068.8C810.5 1087.73 796.26 1102.6 777.91 1113.4C759.55 1124.21 738.76 1129.61 715.52 1129.61M1063.7 1129.61C1039.08 1129.61 1017.18 1124.51 998.01 1114.28C978.85 1104.06 963.97 1089.53 953.4 1070.71C942.83 1051.89 937.55 1030.52 937.55 1006.58C937.55 982.43 943.24 960.64 954.62 941.24C966.01 921.84 981.81 906.62 1002.02 895.58C1022.24 884.55 1045.23 879.03 1071.03 879.03C1086.6 879.03 1100.66 880.66 1113.2 883.91C1125.74 887.16 1137.13 891.69 1147.36 897.5L1147.36 932.35L1146.3 932.35C1137.02 923.76 1126.32 917.19 1114.24 912.66C1102.15 908.13 1089.03 905.87 1074.86 905.87C1054.17 905.87 1036.23 910.1 1021.02 918.58C1005.79 927.07 993.94 938.97 985.46 954.31C976.99 969.64 972.74 986.84 972.74 1005.89C972.74 1025.4 976.76 1042.54 984.77 1057.3C992.79 1072.06 1004.05 1083.5 1018.58 1091.63C1033.1 1099.76 1049.99 1103.82 1069.28 1103.82C1078.58 1103.82 1087.52 1102.84 1096.11 1100.86C1104.72 1098.89 1113.66 1095.69 1122.96 1091.27L1110.06 1112.53L1110.06 1060.61C1110.06 1052.01 1109.83 1044.17 1109.36 1037.08C1108.9 1030 1108.15 1023.26 1107.09 1016.86C1106.06 1010.47 1104.84 1004.15 1103.44 997.87L1103.44 997.52L1148.05 997.52L1148.05 997.87C1146.65 1004.15 1145.61 1010.47 1144.92 1016.86C1144.21 1023.26 1143.75 1029.93 1143.52 1036.9C1143.29 1043.87 1143.17 1051.66 1143.17 1060.25L1143.17 1106.96C1132.01 1113.93 1119.77 1119.45 1106.4 1123.51C1093.03 1127.58 1078.81 1129.61 1063.7 1129.61M1439.06 948.03C1439.06 939.21 1438.81 931.02 1438.35 923.46C1437.89 915.92 1437.25 908.89 1436.44 902.38C1435.62 895.88 1434.75 889.72 1433.82 883.91L1433.82 883.21L1476.69 883.21L1476.69 883.91C1475.52 889.72 1474.6 895.88 1473.91 902.38C1473.21 908.89 1472.69 915.86 1472.34 923.29C1471.98 930.73 1471.82 938.97 1471.82 948.03L1471.82 1060.61C1471.82 1069.44 1471.98 1077.63 1472.34 1085.18C1472.69 1092.73 1473.21 1099.76 1473.91 1106.26C1474.6 1112.77 1475.52 1118.93 1476.69 1124.73L1476.69 1125.43L1433.82 1125.43L1433.82 1124.73C1434.75 1118.93 1435.62 1112.77 1436.44 1106.26C1437.25 1099.76 1437.89 1092.73 1438.35 1085.18C1438.81 1077.63 1439.06 1069.44 1439.06 1060.61L1439.06 948.03M1290.93 989.86L1443.59 989.86L1443.59 1016.34L1290.93 1016.34ZM1272.11 948.03C1272.11 938.97 1272 930.73 1271.77 923.29C1271.54 915.86 1271.01 908.89 1270.19 902.38C1269.38 895.88 1268.39 889.72 1267.22 883.91L1267.22 883.21L1310.45 883.21L1310.45 883.91C1309.05 889.72 1308.01 895.88 1307.31 902.38C1306.61 908.89 1306.09 915.92 1305.74 923.46C1305.4 931.02 1305.22 939.21 1305.22 948.03L1305.22 1060.61C1305.22 1069.44 1305.4 1077.63 1305.74 1085.18C1306.09 1092.73 1306.61 1099.76 1307.31 1106.26C1308.01 1112.77 1309.05 1118.93 1310.45 1124.73L1310.45 1125.43L1267.22 1125.43L1267.22 1124.73C1268.39 1118.93 1269.38 1112.77 1270.19 1106.26C1271.01 1099.76 1271.54 1092.73 1271.77 1085.18C1272 1077.63 1272.11 1069.44 1272.11 1060.61L1272.11 948.03M1723.11 1125.43L1640.85 919.11L1639.47 919.11L1639.47 1060.61C1639.47 1069.21 1639.63 1077.28 1639.98 1084.83C1640.34 1092.38 1640.8 1099.46 1641.38 1106.09C1641.96 1112.71 1643.06 1118.93 1644.69 1124.73L1644.69 1125.43L1604.95 1125.43L1604.95 1124.73C1606.12 1118.93 1607.06 1112.71 1607.75 1106.09C1608.44 1099.46 1608.97 1092.44 1609.31 1085C1609.66 1077.57 1609.84 1069.44 1609.84 1060.61L1609.84 947.68C1609.84 939.09 1609.66 931.02 1609.31 923.46C1608.97 915.92 1608.44 908.89 1607.75 902.38C1607.06 895.88 1606.12 889.72 1604.95 883.91L1604.95 883.21L1659.68 883.21L1740.54 1086.75L1741.92 1086.75L1822.09 883.21L1875.06 883.21L1875.06 883.91C1873.89 889.72 1872.85 895.88 1871.93 902.38C1870.99 908.89 1870.42 915.92 1870.19 923.46C1869.95 931.02 1869.84 939.09 1869.84 947.68L1869.84 1060.61C1869.84 1069.21 1869.95 1077.28 1870.19 1084.83C1870.42 1092.38 1870.93 1099.46 1871.75 1106.09C1872.56 1112.71 1873.68 1118.93 1875.06 1124.73L1875.06 1125.43L1831.5 1125.43L1831.5 1124.73C1833.12 1118.93 1834.28 1112.71 1834.98 1106.09C1835.68 1099.46 1836.21 1092.38 1836.56 1084.83C1836.9 1077.28 1837.07 1069.21 1837.07 1060.61L1837.07 919.8L1836.03 919.8L1754.83 1125.43L1723.11 1125.43M2108.9 1102.43C2125.4 1102.43 2140.09 1098.3 2153 1090.06C2165.89 1081.81 2175.81 1070.36 2182.79 1055.73C2189.76 1041.08 2193.25 1024.13 2193.25 1004.85C2193.25 985.32 2189.76 968.13 2182.79 953.26C2175.81 938.39 2165.89 926.77 2153 918.41C2140.09 910.05 2125.4 905.87 2108.9 905.87C2092.64 905.87 2078.07 910.05 2065.16 918.41C2052.28 926.77 2042.22 938.39 2035.03 953.26C2027.82 968.13 2024.21 985.32 2024.21 1004.85C2024.21 1023.9 2027.82 1040.8 2035.03 1055.55C2042.22 1070.31 2052.21 1081.81 2065 1090.06C2077.77 1098.3 2092.41 1102.43 2108.9 1102.43M2108.9 1129.61C2086.14 1129.61 2065.58 1124.21 2047.22 1113.4C2028.87 1102.6 2014.56 1087.68 2004.36 1068.62C1994.12 1049.57 1989.02 1028.31 1989.02 1004.85C1989.02 980.91 1994.12 959.42 2004.36 940.37C2014.56 921.31 2028.87 906.33 2047.22 895.41C2065.58 884.49 2086.14 879.03 2108.9 879.03C2132.14 879.03 2152.93 884.49 2171.29 895.41C2189.64 906.33 2203.88 921.31 2213.99 940.37C2224.09 959.42 2229.15 980.91 2229.15 1004.85C2229.15 1028.54 2224.09 1049.86 2213.99 1068.8C2203.88 1087.73 2189.64 1102.6 2171.29 1113.4C2152.93 1124.21 2132.14 1129.61 2108.9 1129.61M2442.45 1129.61C2421.99 1129.61 2404.51 1125.49 2389.99 1117.24C2375.47 1108.99 2364.37 1097.2 2356.7 1081.87C2349.03 1066.53 2345.2 1048.29 2345.2 1027.15L2345.2 947.68C2345.2 939.32 2345.03 931.31 2344.69 923.64C2344.33 915.97 2343.75 908.89 2342.94 902.38C2342.12 895.87 2341.25 889.72 2340.33 883.91L2340.33 883.21L2383.19 883.21L2383.19 883.91C2382.02 889.72 2381.03 895.87 2380.23 902.38C2379.42 908.89 2378.78 915.97 2378.32 923.64C2377.84 931.31 2377.61 939.32 2377.61 947.68L2377.61 1028.2C2377.61 1043.3 2380.23 1056.31 2385.46 1067.22C2390.68 1078.15 2398.3 1086.46 2408.29 1092.15C2418.27 1097.84 2430.23 1100.68 2444.18 1100.68C2457.66 1100.68 2469.33 1097.84 2479.21 1092.15C2489.08 1086.46 2496.75 1078.27 2502.22 1067.58C2507.67 1056.89 2510.4 1043.76 2510.4 1028.2L2510.4 947.68C2510.4 939.09 2510.23 931.02 2509.87 923.46C2509.53 915.92 2508.88 908.89 2507.96 902.38C2507.02 895.87 2505.99 889.72 2504.82 883.91L2504.82 883.21L2544.9 883.21L2544.9 883.91C2543.52 889.72 2542.35 895.87 2541.43 902.38C2540.49 908.89 2539.91 915.86 2539.68 923.29C2539.44 930.73 2539.32 938.97 2539.32 948.03L2539.32 1027.5C2539.32 1048.18 2535.5 1066.24 2527.83 1081.69C2520.16 1097.14 2509.07 1108.99 2494.55 1117.24C2480.03 1125.49 2462.66 1129.61 2442.45 1129.61M2787.12 1125.43L2704.87 919.11L2703.48 919.11L2703.48 1060.61C2703.48 1069.21 2703.65 1077.28 2704 1084.83C2704.36 1092.38 2704.82 1099.46 2705.39 1106.09C2705.97 1112.71 2707.07 1118.93 2708.7 1124.73L2708.7 1125.43L2668.97 1125.43L2668.97 1124.73C2670.14 1118.93 2671.07 1112.71 2671.76 1106.09C2672.46 1099.46 2672.98 1092.44 2673.33 1085C2673.67 1077.57 2673.86 1069.44 2673.86 1060.61L2673.86 947.68C2673.86 939.09 2673.67 931.02 2673.33 923.46C2672.98 915.92 2672.46 908.89 2671.76 902.38C2671.07 895.88 2670.14 889.72 2668.97 883.91L2668.97 883.21L2723.7 883.21L2804.55 1086.75L2805.94 1086.75L2886.1 883.21L2939.07 883.21L2939.07 883.91C2937.9 889.72 2936.87 895.88 2935.95 902.38C2935.01 908.89 2934.43 915.92 2934.2 923.46C2933.97 931.02 2933.85 939.09 2933.85 947.68L2933.85 1060.61C2933.85 1069.21 2933.97 1077.28 2934.2 1084.83C2934.43 1092.38 2934.94 1099.46 2935.76 1106.09C2936.57 1112.71 2937.69 1118.93 2939.07 1124.73L2939.07 1125.43L2895.52 1125.43L2895.52 1124.73C2897.13 1118.93 2898.3 1112.71 2898.99 1106.09C2899.7 1099.46 2900.23 1092.38 2900.57 1084.83C2900.92 1077.28 2901.08 1069.21 2901.08 1060.61L2901.08 919.8L2900.04 919.8L2818.84 1125.43L2787.12 1125.43" /></svg>
    <p className="plf-eyebrow">هكذا نعمل في شغموم</p>
    <h2 className="plf-t">نكتب كل تفصيلة قبل أن نبدأ</h2>
    <p className="plf-lead">هذه الاستمارة هي الورقة التي نرسلها لكل مالك قبل التسعير، لتكون عينَه الإضافية على الاتفاق. وبعد استلام نهائي مطابق للمواصفات المتفق عليها، تضمن شغموم عيوب التنفيذ في أعمال اللياسة عشر سنوات.</p>
    <p className="plf-lead">السعر الذي تعطيك إياه شغموم ليس الأرخص ولا الأغلى؛ هو السعر العادل لكل ما تقدّمه لك.</p>
    <div className="plf-cta">
      <a className="plf-ticket plf-primary" href={WHATSAPP_HREF} target="_blank" rel="noopener"><span className="plf-big">اطلب عرض سعر لأعمال اللياسة في مشروعك</span><span className="plf-sm">عبر واتساب. نزور الموقع، ونرفع المساحة، ونرسل العرض مع المواصفات الفنية.</span></a>
      <a className="plf-ticket" href="https://www.instagram.com/shoghmoum" target="_blank" rel="noopener"><span className="plf-big">أشكل عليك بند في اللياسة؟ اسأل شغموم</span><span className="plf-sm">وابشر بالإجابة. على إنستقرام وتيك توك: shoghmoum@</span></a>
    </div>
    <div className="plf-contacts">
      <div className="plf-ct"><span className="plf-k">واتساب واتصال</span><span className="plf-v">0553346250</span><button className="plf-copy" type="button" data-copy="0553346250">نسخ</button></div>
      <div className="plf-ct"><span className="plf-k">تيك توك</span><a className="plf-v" href="https://www.tiktok.com/@shoghmoum" target="_blank" rel="noopener" style={{ "textDecoration": "none" } as CSSProperties}>tiktok.com/@shoghmoum</a></div>
      <div className="plf-ct"><span className="plf-k">إنستقرام</span><a className="plf-v" href="https://www.instagram.com/shoghmoum" target="_blank" rel="noopener" style={{ "textDecoration": "none" } as CSSProperties}>instagram.com/shoghmoum</a></div>
      <div className="plf-ct"><span className="plf-k">هذه الصفحة</span><button className="plf-copy" type="button" data-copy="__PAGE_URL__">نسخ الرابط</button></div>
    </div>
    <p className="plf-signoff">شغموم <span className="plf-hl"><svg viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true"><path d="M6.0 52.2 L10.3 46.9 L14.6 44.6 L18.9 42.8 L23.2 41.3 L27.6 39.7 L31.9 38.3 L36.2 36.8 L40.5 35.2 L44.8 33.6 L49.1 32.0 L53.4 30.3 L57.7 28.7 L62.0 27.0 L66.4 25.4 L70.7 23.9 L75.0 22.4 L79.3 21.0 L83.6 19.8 L87.9 18.6 L92.2 17.6 L96.5 16.7 L100.8 16.0 L105.2 15.3 L109.5 14.7 L113.8 14.2 L118.1 13.7 L122.4 13.2 L126.7 12.8 L131.0 12.4 L135.3 11.9 L139.6 11.4 L144.0 10.9 L148.3 10.4 L152.6 9.9 L156.9 9.4 L161.2 9.0 L165.5 8.5 L169.8 8.2 L174.1 7.9 L178.4 7.8 L182.8 7.8 L187.1 7.9 L191.4 8.1 L195.7 8.5 L200.0 9.0 L204.3 9.6 L208.6 10.3 L212.9 11.0 L217.2 11.8 L221.6 12.6 L225.9 13.4 L230.2 14.1 L234.5 14.8 L238.8 15.3 L243.1 15.8 L247.4 16.2 L251.7 16.5 L256.0 16.7 L260.4 16.8 L264.7 16.9 L269.0 16.9 L273.3 16.9 L277.6 17.0 L281.9 17.1 L286.2 17.2 L290.5 17.4 L294.8 17.8 L299.2 18.2 L303.5 18.8 L307.8 19.5 L312.1 20.3 L316.4 21.2 L320.7 22.2 L325.0 23.2 L329.3 24.3 L333.6 25.4 L338.0 26.6 L342.3 27.7 L346.6 28.9 L350.9 30.0 L355.2 31.2 L359.5 32.4 L363.8 33.6 L368.1 34.9 L372.4 36.4 L376.8 38.0 L381.1 39.8 L385.4 42.0 L389.7 44.9 L394.0 50.9 L394.0 52.9 L389.7 58.1 L385.4 60.3 L381.1 61.9 L376.8 63.1 L372.4 64.2 L368.1 65.1 L363.8 65.9 L359.5 66.7 L355.2 67.5 L350.9 68.3 L346.6 69.0 L342.3 69.9 L338.0 70.7 L333.6 71.6 L329.3 72.6 L325.0 73.6 L320.7 74.6 L316.4 75.6 L312.1 76.7 L307.8 77.7 L303.5 78.7 L299.2 79.7 L294.8 80.6 L290.5 81.4 L286.2 82.1 L281.9 82.7 L277.6 83.2 L273.3 83.6 L269.0 83.8 L264.7 84.0 L260.4 84.0 L256.0 84.0 L251.7 83.9 L247.4 83.7 L243.1 83.4 L238.8 83.2 L234.5 82.9 L230.2 82.6 L225.9 82.4 L221.6 82.1 L217.2 81.9 L212.9 81.8 L208.6 81.7 L204.3 81.6 L200.0 81.6 L195.7 81.6 L191.4 81.7 L187.1 81.7 L182.8 81.7 L178.4 81.7 L174.1 81.7 L169.8 81.7 L165.5 81.5 L161.2 81.3 L156.9 81.1 L152.6 80.7 L148.3 80.3 L144.0 79.8 L139.6 79.2 L135.3 78.6 L131.0 77.9 L126.7 77.2 L122.4 76.4 L118.1 75.7 L113.8 75.0 L109.5 74.3 L105.2 73.7 L100.8 73.1 L96.5 72.6 L92.2 72.1 L87.9 71.7 L83.6 71.4 L79.3 71.2 L75.0 70.9 L70.7 70.8 L66.4 70.6 L62.0 70.4 L57.7 70.2 L53.4 70.0 L49.1 69.6 L44.8 69.2 L40.5 68.7 L36.2 68.0 L31.9 67.1 L27.6 66.1 L23.2 64.8 L18.9 63.2 L14.6 61.3 L10.3 58.7 L6.0 53.0Z" /></svg>عند اللزوم يجملك</span></p>
  </div>
</section>

<footer className="plf-foot">
  <div className="plf-wrap">
    <div className="plf-legal">
      <b>شركة خالد رافد صياف العمري للمقاولات العامة</b>
      <span>حي المبعوث، المدينة المنورة</span>
    </div>
    <div className="plf-meta plf-num">
      <span>الرقم الوطني الموحد للمنشأة <b dir="ltr">7052752610</b></span>
      <span>معتمد منصة مقاول، رقم العضوية <b dir="ltr">1180118003</b></span>
      <span>هاتف وواتساب <b dir="ltr">0553346250</b></span>
    </div>
    <div className="plf-meta">
      <span>استمارة اللياسة، الإصدار ٢ · أكتوبر ٢٠٢٦</span>
      <span>محتوى هذه الاستمارة من إعداد شغموم. يجوز طباعتها واستخدامها لتنظيم الاتفاق بين المالك والمقاول.</span>
    </div>
  </div>
</footer>

</div>
      <FormBehaviour />
    </>
  );
}
