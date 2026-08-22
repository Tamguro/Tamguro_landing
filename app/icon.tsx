import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_COLORS } from "@/lib/site";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

const pretendard = await readFile(
  join(
    process.cwd(),
    "node_modules/pretendard/dist/public/static/alternative/Pretendard-Bold.ttf",
  ),
);

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "22px",
          background: SITE_COLORS.brandSoftSolid,
          color: SITE_COLORS.ink,
          fontFamily: "Pretendard",
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        TG
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
