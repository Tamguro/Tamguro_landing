import type { JSX } from "react";

export type PhoneMockupVariant =
  | "student-home"
  | "parent-home"
  | "student-app-experience"
  | "parent-app-experience"
  | "mentor-app-experience";

export interface PhoneMockupProps {
  variant: PhoneMockupVariant;
  /** "full" = Hero (270px frame width), "compact" = App Experience (176px frame width) */
  size?: "full" | "compact";
  /** Bottom nav labels, e.g. ["자료", "홈", "멘토"] — always 3 items */
  navItems: string[];
}

const VARIANT_PLACEHOLDER_LABEL: Record<PhoneMockupVariant, string> = {
  "student-home": "학생 홈",
  "parent-home": "학부모 홈",
  "student-app-experience": "학생 앱 경험",
  "parent-app-experience": "학부모 앱 경험",
  "mentor-app-experience": "멘토 앱 경험",
};

// Frame chrome dimensions, derived from Figma node 182:29 (Phone · 학생 홈).
// "compact" values are the "full" values scaled by 176/270 (~0.6519×), the
// same ratio Figma uses between the Hero and App Experience phone frames.
const SIZE_CLASSES = {
  full: {
    frame: "w-[270px]",
    bezelPad: "p-[10px]",
    bezelRadius: "rounded-[38px]",
    screenRadius: "rounded-[30px]",
    contentPad: "px-[17px] pt-[15px] pb-[14px]",
    statusText: "text-[7.3px]",
    signalText: "text-[6.1px]",
    gapY: "gap-[9.7px]",
    navRadius: "rounded-[12px]",
    navPad: "p-[6px]",
    navGap: "gap-[4.9px]",
    navItemHeight: "h-[26.7px]",
    navItemRadius: "rounded-[8.5px]",
    navText: "text-[7.3px]",
    homeIndicator: "w-[42px] h-[4px] rounded-[2px]",
    homeIndicatorBottom: "bottom-[4px]",
  },
  compact: {
    frame: "w-[176px]",
    bezelPad: "p-[6.5px]",
    bezelRadius: "rounded-[25px]",
    screenRadius: "rounded-[19.5px]",
    contentPad: "px-[11px] pt-[9.75px] pb-[9px]",
    statusText: "text-[4.75px]",
    signalText: "text-[4px]",
    gapY: "gap-[6.3px]",
    navRadius: "rounded-[7.8px]",
    navPad: "p-[4px]",
    navGap: "gap-[3.2px]",
    navItemHeight: "h-[17.4px]",
    navItemRadius: "rounded-[5.5px]",
    navText: "text-[4.75px]",
    homeIndicator: "w-[27px] h-[2.6px] rounded-[1.3px]",
    homeIndicatorBottom: "bottom-[3px]",
  },
} as const;

export default function PhoneMockup({
  variant,
  size = "full",
  navItems,
}: PhoneMockupProps): JSX.Element {
  const s = SIZE_CLASSES[size];

  return (
    <div
      className={`relative ${s.frame} ${s.bezelPad} ${s.bezelRadius} bg-[#1f2430] drop-shadow-[0px_18px_18px_rgba(31,36,48,0.14)]`}
    >
      <div
        className={`flex flex-col ${s.screenRadius} ${s.contentPad} ${s.gapY} overflow-hidden bg-white`}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between text-[#1f2430]">
          <p className={`font-bold ${s.statusText}`}>9:41</p>
          <p className={`font-medium ${s.signalText}`}>{"●  ◒  ▰"}</p>
        </div>

        {/* Body slot — filled in per-variant by Task 3 (Hero) and Task 5 (App Experience) */}
        <div
          className={`flex flex-1 items-center justify-center text-[#667085] ${s.statusText}`}
        >
          {VARIANT_PLACEHOLDER_LABEL[variant]}
        </div>

        {/* Bottom navigation */}
        <div
          className={`flex ${s.navGap} ${s.navPad} ${s.navRadius} border-[0.6px] border-[#e8e5db] bg-white`}
        >
          {navItems.map((label, index) => (
            <div
              key={`${label}-${index}`}
              className={`flex flex-1 ${s.navItemHeight} ${s.navItemRadius} items-center justify-center ${
                index === 1 ? "bg-[rgba(255,149,0,0.14)]" : ""
              }`}
            >
              <p
                className={`${s.navText} whitespace-nowrap ${
                  index === 1
                    ? "font-bold text-[#1f2430]"
                    : "font-medium text-[#667085]"
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Home indicator */}
      <div
        className={`absolute left-1/2 ${s.homeIndicatorBottom} ${s.homeIndicator} -translate-x-1/2 bg-[#383c45]`}
      />
    </div>
  );
}
