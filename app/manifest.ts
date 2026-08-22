import type { MetadataRoute } from "next";
import {
  SITE_COLORS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_THEME_COLOR,
} from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | 학종의 진짜 가치를 실현하다`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    lang: "ko-KR",
    display: "standalone",
    background_color: SITE_COLORS.canvas,
    theme_color: SITE_THEME_COLOR,
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
