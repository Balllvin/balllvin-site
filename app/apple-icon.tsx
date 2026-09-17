import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d0e",
          borderRadius: 36,
          color: "#7fd1b9",
          fontSize: 118,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.06em",
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
