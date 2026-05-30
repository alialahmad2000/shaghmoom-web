import { NextResponse } from "next/server";
import { getSupabaseAdmin, hasSupabaseConfig } from "@/lib/supabase";

/**
 * Lead capture (§9). Validates server-side and inserts into the Supabase
 * `leads` table using the service-role key (server-only). No accounts, no
 * payments — lead capture only.
 *
 * Table `leads` (see README for SQL):
 *   id, created_at, name, phone, project_type, city, message, budget, source
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

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
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
  if (name.length < 2) errors.name = "الاسم مطلوب.";
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

  if (!hasSupabaseConfig()) {
    // Misconfiguration — fail loud rather than silently dropping a lead.
    console.error("[lead] Supabase env vars are not configured.");
    return NextResponse.json(
      { error: "تعذّر استقبال الطلب حاليًا. يرجى التواصل عبر واتساب." },
      { status: 503 }
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert({
      name,
      phone: phoneDigits,
      project_type: projectType || null,
      city,
      message: message || null,
      budget: budget || null,
      source: "website",
    });

    if (error) {
      console.error("[lead] insert error:", error.message);
      return NextResponse.json(
        { error: "تعذّر حفظ الطلب. حاول مجددًا أو تواصل عبر واتساب." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[lead] unexpected error:", err);
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع. يرجى المحاولة لاحقًا." },
      { status: 500 }
    );
  }
}
