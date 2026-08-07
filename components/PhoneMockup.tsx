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
  /** "full" = Hero (270px frame), "compact" = App Experience (176px frame) */
  size?: "full" | "compact";
  priority?: boolean;
}

// Exported straight from Figma (get_screenshot) per phone node — see
// docs/superpowers/plans/2026-08-07-landing-page.md for node IDs.
const VARIANT_IMAGE: Record<
  PhoneMockupVariant,
  { src: string; width: number; height: number }
> = {
  "student-home": {
    src: "/images/phones/student-home.png",
    width: 342,
    height: 646,
  },
  "parent-home": {
    src: "/images/phones/parent-home.png",
    width: 342,
    height: 646,
  },
  "student-app-experience": {
    src: "/images/phones/student-app-experience.png",
    width: 232,
    height: 412,
  },
  "parent-app-experience": {
    src: "/images/phones/parent-app-experience.png",
    width: 232,
    height: 412,
  },
  "mentor-app-experience": {
    src: "/images/phones/mentor-app-experience.png",
    width: 232,
    height: 412,
  },
};

const FRAME_WIDTH = {
  full: 270,
  compact: 176,
} as const;

export default function PhoneMockup({
  variant,
  size = "full",
  priority = false,
}: PhoneMockupProps): JSX.Element {
  const image = VARIANT_IMAGE[variant];
  const frameWidth = FRAME_WIDTH[size];
  const frameHeight = Math.round((image.height / image.width) * frameWidth);

  return (
    <Image
      src={image.src}
      alt=""
      width={frameWidth}
      height={frameHeight}
      priority={priority}
      className="h-auto w-full"
      style={{ width: frameWidth, height: frameHeight }}
    />
  );
}
