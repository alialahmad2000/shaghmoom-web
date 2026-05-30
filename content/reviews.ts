/**
 * Client reviews (§7-Reviews). Real, anonymized lines presented as elegant
 * pull-quotes. Do NOT invent names, ratings, or testimonials. Attribute
 * generically. These short du'a-style lines are genuine and on-brand.
 */

export type Review = {
  quote: string;
  attribution: string;
};

export const reviews: Review[] = [
  {
    quote: "إن شاء الله وأكثر مما أتوقع.. وفّقك الله.",
    attribution: "عميل، المدينة المنورة",
  },
  {
    quote: "الله يجعلنا عند حسن ظنك.",
    attribution: "عميل، المدينة المنورة",
  },
];
