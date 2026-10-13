import Link from "next/link";

/**
 * Last-resort 404 for a path outside every locale layout (in practice the
 * proxy sends unknown paths to /ar/…, which shows the full branded 404).
 * It renders its own html/body since no parent layout applies here.
 */
export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
          background: "#441420",
          color: "#E9EAD9",
          fontFamily: "'IBM Plex Sans Arabic', system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/shoghmoum-lockup-sand.svg" alt="شغموم" width={176} height={67} />
        <h1 style={{ fontSize: "1.9rem", fontWeight: 600, margin: "1rem 0 0" }}>
          حتى هذه الصفحة لم تُرسَم في المخطط
        </h1>
        <p style={{ margin: 0, opacity: 0.85 }}>الرابط الذي فتحته غير موجود.</p>
        <Link
          href="/ar"
          style={{
            marginTop: "0.5rem",
            background: "#E9EAD9",
            color: "#441420",
            padding: "0.85rem 1.6rem",
            borderRadius: "2px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          العودة إلى الرئيسية
        </Link>
      </body>
    </html>
  );
}
