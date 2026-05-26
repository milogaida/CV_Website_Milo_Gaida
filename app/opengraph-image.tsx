import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Milo Gaida — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0d12",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            width: "64px",
            height: "1px",
            background: "#b8965a",
            marginBottom: "0",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#b8965a",
              fontFamily: "monospace",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: "72px",
              color: "#ddd8cc",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            Milo Gaida
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#5a6070",
              fontFamily: "monospace",
              maxWidth: "640px",
              lineHeight: 1.5,
            }}
          >
            Business &amp; data analytics. Berlin.
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              color: "#3a4050",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
            }}
          >
            milojgaida@gmail.com
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#3a4050",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
            }}
          >
            github.com/milogaida
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
