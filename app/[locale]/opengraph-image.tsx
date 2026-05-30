import { ImageResponse } from "next/og";

/**
 * Default branded Open Graph / Twitter share image for all locale pages.
 * Generated at build time (no external assets), so social cards work at launch.
 * Latin-only text to render with the bundled default font; the client can drop
 * a designed /brand/og-default.png and reference it later if preferred.
 */
export const alt = "Shaghmoom — General Contracting, Al-Madinah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const maroon = "#532b2d";
  const bone = "#f6f2eb";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: maroon,
          color: bone,
          padding: 72,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* faint grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(246,242,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,242,235,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "rgba(246,242,235,0.7)",
            }}
          >
            A Nation Built
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 700, lineHeight: 1 }}>
            Shaghmoom
          </div>
          <div
            style={{
              marginTop: 28,
              width: 120,
              height: 4,
              background: bone,
              opacity: 0.5,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 30,
            color: "rgba(246,242,235,0.85)",
          }}
        >
          <span>General Contracting</span>
          <span>Al-Madinah, KSA</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
