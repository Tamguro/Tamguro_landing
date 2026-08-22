import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_COLORS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const alt = "탐구로 — 학종의 진짜 가치를 실현하다";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const pretendard = await readFile(
  join(
    process.cwd(),
    "node_modules/pretendard/dist/public/static/alternative/Pretendard-Bold.ttf",
  ),
);

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: SITE_COLORS.canvas,
          color: SITE_COLORS.ink,
          padding: "72px 82px",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              background: SITE_COLORS.brandSoft,
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            TG
          </div>
          <div style={{ fontSize: "30px", fontWeight: 700 }}>{SITE_NAME}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "68px", lineHeight: 1.22, fontWeight: 800 }}>
            학종의 진짜 가치를 실현하다.
          </div>
          <div style={{ maxWidth: "900px", color: SITE_COLORS.slate, fontSize: "28px", lineHeight: 1.45 }}>
            {SITE_DESCRIPTION}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "12px",
            borderRadius: "999px",
            background: SITE_COLORS.brand,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: pretendard,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
