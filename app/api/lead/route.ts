import { NextResponse } from "next/server";
import { getSupabaseAdmin, hasSupabaseConfig } from "@/lib/supabase";
import { contact } from "@/content/site";

/**
 * Quote requests. Validates server-side, then delivers through every channel
 * that is configured:
 *   · e-mail to the owner through Resend (RESEND_API_KEY) — the notification;
 *   · a row in the Supabase `leads` table, when Supabase is configured.
 * The request counts as received only if at least one channel accepted it;
 * otherwise the form hands the visitor to WhatsApp with the details filled in,
 * so a request is never lost silently.
 *
 * Env (server-only): RESEND_API_KEY · LEAD_NOTIFY_TO (default: the public
 * e-mail) · LEAD_FROM (a sender on a domain verified in Resend).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROJECT_TYPES = ["فيلا", "عمارة", "تجاري", "تشطيب", "أخرى"];

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  project_type?: unknown;
  city?: unknown;
  message?: unknown;
  budget?: unknown;
  // Honeypot — bots fill this; humans never see it.
  company?: unknown;
};

type Lead = {
  name: string;
  phone: string;
  projectType: string;
  city: string;
  message: string;
  budget: string;
};

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function hasEmailConfig(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

async function sendEmail(lead: Lead): Promise<boolean> {
  const to = process.env.LEAD_NOTIFY_TO || contact.email;
  const from = process.env.LEAD_FROM || "موقع شغموم <leads@shoghmoum.com>";
  const intl = lead.phone.replace(/^\+/, "").replace(/^0/, "966");
  const rows: [string, string][] = [
    ["الاسم", lead.name],
    ["الجوال", lead.phone],
    ["نوع المشروع", lead.projectType || "—"],
    ["المدينة", lead.city],
    ["تفاصيل المشروع", lead.message || "—"],
    ["الميزانية التقديرية", lead.budget || "—"],
  ];
  const html = `<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;color:#441420;font-size:16px;line-height:1.8">
<h2 style="margin:0 0 12px">طلب عرض سعر جديد من الموقع</h2>
<table style="border-collapse:collapse;width:100%;max-width:560px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #d9d2c4;background:#E9EAD9;white-space:nowrap;vertical-align:top"><b>${k}</b></td><td style="padding:8px 12px;border:1px solid #d9d2c4;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join("")}</table>
<p style="margin:16px 0 0"><a href="https://wa.me/${intl}">افتح محادثة واتساب مع العميل</a> · <a href="tel:+${intl}">اتصال</a></p>
</div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      subject: `طلب عرض سعر جديد — ${lead.name}`,
      html,
      text,
    }),
  });
  if (!res.ok) {
    console.error("[lead] e-mail rejected:", res.status, (await res.text()).slice(0, 300));
    return false;
  }
  return true;
}

async function saveRow(lead: Lead): Promise<boolean> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    phone: lead.phone,
    project_type: lead.projectType || null,
    city: lead.city,
    message: lead.message || null,
    budget: lead.budget || null,
    source: "website",
  });
  if (error) {
    console.error("[lead] insert error:", error.message);
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "صيغة الطلب غير صحيحة." }, { status: 400 });
  }

  // Honeypot: silently accept (so bots think they succeeded) without writing.
  if (asString(body.company)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = asString(body.name);
  const phone = asString(body.phone);
  const projectType = asString(body.project_type);
  const city = asString(body.city) || "المدينة المنورة";
  const message = asString(body.message);
  const budget = asString(body.budget);

  // Server-side validation.
  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 120) errors.name = "الاسم مطلوب.";
  const phoneDigits = phone.replace(/[\s-]/g, "");
  if (!/^(?:\+?9665|05)\d{8}$/.test(phoneDigits)) {
    errors.phone = "رقم جوال سعودي غير صحيح.";
  }
  if (projectType && !PROJECT_TYPES.includes(projectType)) {
    errors.project_type = "نوع المشروع غير صحيح.";
  }
  if (message.length > 4000) errors.message = "النص طويل جدًا.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "تحقق من الحقول.", fields: errors }, { status: 422 });
  }

  const lead: Lead = {
    name,
    phone: phoneDigits,
    projectType,
    city: city.slice(0, 120),
    message,
    budget: budget.slice(0, 200),
  };

  if (!hasEmailConfig() && !hasSupabaseConfig()) {
    // Not connected yet — say so honestly; the form offers WhatsApp instead.
    console.error("[lead] no delivery channel is configured.");
    return NextResponse.json(
      { error: "تعذّر استقبال الطلب عبر الموقع حاليًا.", handoff: "whatsapp" },
      { status: 503 }
    );
  }

  try {
    const results = await Promise.all([
      hasEmailConfig() ? sendEmail(lead).catch(() => false) : false,
      hasSupabaseConfig() ? saveRow(lead).catch(() => false) : false,
    ]);
    if (results.some(Boolean)) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }
    return NextResponse.json(
      { error: "تعذّر استقبال الطلب عبر الموقع حاليًا.", handoff: "whatsapp" },
      { status: 502 }
    );
  } catch (err) {
    console.error("[lead] unexpected error:", err);
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع.", handoff: "whatsapp" },
      { status: 500 }
    );
  }
}
