/**
 * Arabic-Indic numerals (١٢٣) inside Arabic copy — brand §3. Latin digits stay
 * only in codes and in tel: / wa.me links.
 */
const AR = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function arDigits(value: number | string): string {
  return String(value).replace(/[0-9]/g, (d) => AR[Number(d)]);
}
