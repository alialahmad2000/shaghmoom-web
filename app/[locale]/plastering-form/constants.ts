import { contact } from "@/content/site";

/** «اطلب عرض سعر لأعمال اللياسة» — WhatsApp +966553346250, message names the form. */
export const WHATSAPP_MESSAGE =
  "السلام عليكم، قرأت استمارة اللياسة في موقع شغموم، وأرغب في عرض سعر لأعمال اللياسة في مشروعي.";

export const WHATSAPP_HREF = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
