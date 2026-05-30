import Link from "next/link";

/**
 * Global fallback 404 for paths outside any locale layout.
 * Renders its own html/body since no parent layout applies here.
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
          gap: "1rem",
          background: "#f6f2eb",
          color: "#241e1e",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: 0 }}>الصفحة غير موجودة</h1>
        <p style={{ color: "#6b5f57", margin: 0 }}>
          الرابط الذي تبحث عنه غير متاح.
        </p>
        <Link
          href="/ar"
          style={{
            marginTop: "0.5rem",
            background: "#6e3b3d",
            color: "#f6f2eb",
            padding: "0.75rem 1.5rem",
            borderRadius: "9999px",
            textDecoration: "none",
          }}
        >
          العودة للرئيسية
        </Link>
      </body>
    </html>
  );
}
