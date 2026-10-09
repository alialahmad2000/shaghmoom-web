# حقيبة هوية شغموم — ابدأ من هنا

شغموم للمقاولات العامة · المدينة المنورة · الإصدار ٩ أكتوبر ٢٠٢٦

## للمصمم

١. افتح الدليل المرئي أولاً للصورة العامة:

```
Shoghmoum-Brand-Sheet.pdf
```

٢. ثم الدليل الكامل بالعربي، وفيه كل قاعدة مع حالتها (معتمد أو مقترح للموقع):

```
BRAND_GUIDE_AR.md
```

٣. الشعارات المتجهة في مجلد الشعار، والألوان والخط في متغيرات جاهزة للمبرمج.

## للذكاء الاصطناعي

ارفع هذا الملف وحده في أي محادثة، وفيه الهوية كاملة مع مسارات الشعار الدقيقة:

```
SHOGHMOUM_BRAND_FOR_AI.md
```

والقيم الآلية كلها في:

```
01_tokens/brand-tokens.json
```

## خريطة الحزمة

| المجلد | المحتوى |
|---|---|
| `01_tokens/` | متغيرات الألوان والخطوط والمسافات: ملف بيانات، وملف أنماط، ومقتطف إعدادات |
| `02_logo/svg/` | الشعار المركّب، والعربي، واللاتيني، والأيقونة — بخمسة ألوان لكل شكل |
| `02_logo/on-background/` | الشعار على خلفيته المعتمدة |
| `02_logo/png/` | صور جاهزة بدقتين |
| `03_pattern/` | النجمة والشرطة والنقطة: وحدات مفردة وعينات بقوة ٧٪ |
| `04_typography/fonts/` | الخط المعتمد للاستضافة الذاتية مع ترخيصه المفتوح |
| `05_graphics/` | شبكة القياس وضربة الفرشاة الذهبية |
| `06_web-assets/` | أيقونات المتصفح وملف التطبيق وصورة المشاركة وصور الحسابات |
| `07_previews/` | صفحات الدليل المرئي كصور |

---

## English quick start

- Visual overview → `Shoghmoum-Brand-Sheet.pdf` (also `.html`).
- Full rules (Arabic) → `BRAND_GUIDE_AR.md`. Full rules for AI tools / English readers → `SHOGHMOUM_BRAND_FOR_AI.md` (self-contained, includes exact SVG paths).
- Tokens → `01_tokens/brand-tokens.json`, `01_tokens/shoghmoum-tokens.css`, `01_tokens/tailwind.config.snippet.js`.
- Every rule is tagged **APPROVED** (owner decision / identity file) or **PROPOSED** (web adaptation — confirm with the owner before launch).
- Site is Arabic-first: `dir="rtl" lang="ar"`. Font: IBM Plex Sans Arabic. Core colours: maroon `#441420`, sand `#E9EAD9`; accents terracotta `#814B41` (light grounds only) and gold `#AA8302` (one highlight per view).
