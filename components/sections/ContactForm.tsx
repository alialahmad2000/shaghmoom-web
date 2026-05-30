"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button, ArrowEnd } from "@/components/ui/Button";

const PROJECT_TYPES = ["فيلا", "عمارة", "تجاري", "تشطيب", "أخرى"] as const;

type Errors = Partial<
  Record<"name" | "phone" | "project_type" | "message", string>
>;
type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border bg-bg px-4 py-3 text-ink placeholder:text-faint transition-colors focus:border-brand focus:outline-none focus-visible:outline-2 focus-visible:outline-brand";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");
  const reduce = useReducedMotion();

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {};
    if (!data.name || data.name.trim().length < 2) e.name = "الاسم مطلوب.";
    const phone = (data.phone || "").replace(/[\s-]/g, "");
    if (!/^(?:\+?9665|05)\d{8}$/.test(phone))
      e.phone = "أدخل رقم جوال سعودي صحيح (مثال: 05XXXXXXXX).";
    if (data.message && data.message.length > 4000)
      e.message = "النص طويل جدًا.";
    return e;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      const payload = await res.json().catch(() => ({}));
      if (payload.fields) setErrors(payload.fields);
      setServerError(
        payload.error || "تعذّر إرسال الطلب. حاول مرة أخرى أو تواصل عبر واتساب."
      );
      setStatus("error");
    } catch {
      setServerError("تعذّر الاتصال بالخادم. تحقق من اتصالك وحاول مجددًا.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
        role="status"
        className="rounded-2xl border border-line bg-surface p-10 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-tint">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl text-ink">وصلنا طلبك</h3>
        <p className="mt-3 text-muted">
          شكرًا لتواصلك. سنراجع تفاصيل مشروعك ونعود إليك في أقرب وقت.
        </p>
        <div className="mt-6">
          <Button variant="secondary" onClick={() => setStatus("idle")}>
            إرسال طلبٍ آخر
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot — visually hidden, off the a11y tree. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label>
          لا تملأ هذا الحقل
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="الاسم" required error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${fieldBase} ${errors.name ? "border-brand" : "border-line"}`}
            placeholder="الاسم الكامل"
          />
        </Field>

        <Field label="رقم الجوال" required error={errors.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            autoComplete="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldBase} text-start ${errors.phone ? "border-brand" : "border-line"}`}
            placeholder="05XXXXXXXX"
          />
        </Field>

        <Field label="نوع المشروع" htmlFor="project_type">
          <select
            id="project_type"
            name="project_type"
            defaultValue=""
            className={`${fieldBase} border-line`}
          >
            <option value="" disabled>
              اختر نوع المشروع
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="المدينة" htmlFor="city">
          <input
            id="city"
            name="city"
            type="text"
            defaultValue="المدينة المنورة"
            autoComplete="address-level2"
            className={`${fieldBase} border-line`}
          />
        </Field>
      </div>

      <Field label="تفاصيل المشروع" error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldBase} resize-y ${errors.message ? "border-brand" : "border-line"}`}
          placeholder="صف مشروعك باختصار: الموقع، المساحة التقريبية، ونطاق العمل المطلوب."
        />
      </Field>

      <Field label="الميزانية التقديرية" optional htmlFor="budget">
        <input
          id="budget"
          name="budget"
          type="text"
          className={`${fieldBase} border-line`}
          placeholder="اختياري"
        />
      </Field>

      {status === "error" && serverError && (
        <p role="alert" className="rounded-xl bg-brand-tint px-4 py-3 text-sm text-brand-deep">
          {serverError}
        </p>
      )}

      <div className="mt-2 flex items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "submitting"} icon={<ArrowEnd />}>
          {status === "submitting" ? "جارٍ الإرسال…" : "إرسال الطلب"}
        </Button>
        <p className="text-xs text-faint">لن نشارك بياناتك مع أي طرف ثالث.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
        {optional && <span className="text-faint"> (اختياري)</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm text-brand">
          {error}
        </p>
      )}
    </div>
  );
}
