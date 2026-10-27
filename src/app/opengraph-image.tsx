import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0d0d0d",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D4B876",
            marginBottom: 24,
          }}
        >
          TOLEMA nieruchomości
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 300, lineHeight: 1.15 }}>
          Rzeczoznawca majątkowy
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600, lineHeight: 1.15 }}>
          w Grójcu
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 300, marginTop: 32, color: "rgba(255,255,255,0.65)" }}>
          Wyceny nieruchomości, maszyn i przedsiębiorstw
        </div>
      </div>
    ),
    { ...size }
  );
}
