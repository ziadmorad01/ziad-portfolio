import { ImageResponse } from "next/og";

export const alt =
  "Ziad Morad — Software Engineering student and aspiring .NET backend developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 15% 10%, #3b2a8f 0%, #0b0b10 55%)",
          color: "#ececf3",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#a78bfa",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#6a47e8",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              letterSpacing: 0,
            }}
          >
            ZM
          </div>
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1 }}>
            Ziad Morad
          </div>
          <div style={{ fontSize: 40, color: "#a1a1b5" }}>
            Software Engineering student · Aspiring .NET backend developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 26,
            color: "#ececf3",
          }}
        >
          {["C#", "ASP.NET Core", "SQL Server", "REST APIs"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid rgba(255,255,255,0.18)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
