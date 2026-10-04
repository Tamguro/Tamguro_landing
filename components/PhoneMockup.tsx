import type { JSX } from "react";
import Image from "next/image";

export type PhoneMockupVariant =
  | "student-home"
  | "parent-home"
  | "student-app-experience"
  | "parent-app-experience"
  | "mentor-app-experience";

export interface PhoneMockupProps {
  variant: PhoneMockupVariant;
  /** Device width: "large" = 320px (Hero card), "full" = 270px, "compact" = 264px (App Experience) */
  size?: "large" | "full" | "compact";
  priority?: boolean;
}

// 3x PNG exports of the app screens from Figma file 7f53GVdtUDCmHuJgO8sscT,
// page "TG · iOS" (66:143). The device bezel is drawn in CSS so it stays crisp
// at any size; only the screen itself is an image.
const SCREEN_SRC = {
  student: "/images/phones/screen-student-home@3x.png", // 14 학생 홈 (115:60)
  parent: "/images/phones/screen-parent-home@3x.png", // P01 학부모 홈 (115:228)
  mentor: "/images/phones/screen-mentor-home@3x.png", // M01 멘토 홈 (115:405)
} as const;

const VARIANT_SCREEN: Record<PhoneMockupVariant, keyof typeof SCREEN_SRC> = {
  "student-home": "student",
  "parent-home": "parent",
  "student-app-experience": "student",
  "parent-app-experience": "parent",
  "mentor-app-experience": "mentor",
};

const SCREEN_ALT = {
  student: "탐구로 학생 앱 홈 화면",
  parent: "탐구로 학부모 앱 홈 화면",
  mentor: "탐구로 멘토 앱 홈 화면",
} as const;

const SCREEN_WIDTH = 1206;
const SCREEN_HEIGHT = 2622;

const FRAME_WIDTH = {
  large: 320,
  full: 270,
  compact: 264,
} as const;

export default function PhoneMockup({
  variant,
  size = "full",
  priority = false,
}: PhoneMockupProps): JSX.Element {
  const screen = VARIANT_SCREEN[variant];
  const frameWidth = FRAME_WIDTH[size];

  return (
    <div
      className="phone-mockup max-w-full [container-type:inline-size]"
      style={{ width: frameWidth }}
    >
      {/* bezel thickness and radii scale with the device width (cqw) */}
      <div className="rounded-[15cqw] bg-action-primary p-[3.2cqw]">
        <Image
          src={SCREEN_SRC[screen]}
          alt={SCREEN_ALT[screen]}
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          sizes={`${frameWidth}px`}
          quality={90}
          priority={priority}
          className="block h-auto w-full rounded-[12cqw]"
        />
      </div>
    </div>
  );
}
