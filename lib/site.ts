const LOCAL_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL as string;

function resolveSiteUrl(value: string | undefined): URL {
  if (!value) {
    return new URL(LOCAL_SITE_URL);
  }

  try {
    return new URL(value);
  } catch {
    try {
      return new URL(`https://${value}`);
    } catch {
      return new URL(LOCAL_SITE_URL);
    }
  }
}

export const SITE_NAME = "탐구로";
export const SITE_TITLE = "탐구로 | 학종의 진짜 가치를 실현하다";
export const SITE_DESCRIPTION =
  "학종 A to Z 자료 구독과 합격자 멘토링을 연결하는 학생부종합전형 실전 플랫폼입니다.";
export const SITE_URL = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_LOCALE = "ko_KR";
export const SITE_COLORS = {
  canvas: "#ffffff",
  ink: "#1f2430",
  slate: "#667085",
  brand: "#319bff",
  brandSoft: "rgba(49, 155, 255, 0.22)",
  brandSoftSolid: "#d2e9ff",
} as const;
export const SITE_THEME_COLOR = SITE_COLORS.brand;
