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

// Body content dimensions, derived from Figma nodes 182:30-182:76 (학생 홈)
// and 182:78-182:120 (학부모 홈). "compact" values are "full" scaled by the
// same 176/270 ratio as the frame chrome above.
const BODY_SIZE = {
  full: {
    title: "text-[17px]",
    avatarBox: "size-[26.7px]",
    avatarText: "text-[9.1px]",
    periodPad: "p-[12.1px]",
    periodGap: "gap-[4.9px]",
    periodRadius: "rounded-[12.1px]",
    periodLabel: "text-[7.9px]",
    periodDate: "text-[14.6px]",
    periodEdit: "text-[7.3px]",
    sectionHeaderH: "h-[17.6px]",
    sectionTitle: "text-[12.1px]",
    sectionMore: "text-[7.3px]",
    gridGap: "gap-[9.7px]",
    cardH: "h-[106.8px]",
    cardW: "w-[102px]",
    cardPad: "p-[9.7px]",
    cardCategory: "text-[6.1px]",
    cardTitle: "text-[10.3px]",
    cardSubtitle: "text-[6.7px]",
    subPad: "p-[10.9px]",
    subGap: "gap-[6.1px]",
    subRadius: "rounded-[12.1px]",
    planTopGap: "gap-[4.9px]",
    planTopH: "h-[17px]",
    planTitle: "text-[10.3px]",
    badgePadX: "px-[6.1px]",
    badgePadY: "py-[3px]",
    badgeRadius: "rounded-[8.5px]",
    badgeText: "text-[7.3px]",
    infoRowH: "h-[14.6px]",
    infoRowGap: "gap-[4.9px]",
    infoText: "text-[7.9px]",
    infoLabelW: "w-[71.6px]",
    infoValueW: "w-[114.1px]",
    famPad: "p-[12.1px]",
    famGap: "gap-[6.1px]",
    famLabel: "text-[7.9px]",
    famTitle: "text-[13.4px]",
    famSub: "text-[7.3px]",
    childSectionH: "h-[17px]",
    childSectionText: "text-[11.5px]",
    childPad: "p-[10.9px]",
    childGap: "gap-[8.5px]",
    childH: "h-[34px]",
    childAvatar: "size-[31.6px]",
    childAvatarText: "text-[10.9px]",
    childInfoGap: "gap-[1.8px]",
    childInfoW: "w-[115.3px]",
    childName: "text-[10.3px]",
    childGrade: "text-[7.3px]",
    summaryPad: "p-[11.7px]",
    summaryGap: "gap-[4.7px]",
    summaryRadius: "rounded-[11.7px]",
    summaryTitle: "text-[12.2px]",
    summarySub: "text-[7.6px]",
    reqH: "h-[30.3px]",
    reqInfoW: "w-[104.9px]",
  },
  compact: {
    title: "text-[11.1px]",
    avatarBox: "size-[17.4px]",
    avatarText: "text-[5.9px]",
    periodPad: "p-[7.9px]",
    periodGap: "gap-[3.2px]",
    periodRadius: "rounded-[7.9px]",
    periodLabel: "text-[5.1px]",
    periodDate: "text-[9.5px]",
    periodEdit: "text-[4.7px]",
    sectionHeaderH: "h-[11.5px]",
    sectionTitle: "text-[7.9px]",
    sectionMore: "text-[4.7px]",
    gridGap: "gap-[6.3px]",
    cardH: "h-[69.6px]",
    cardW: "w-[66.5px]",
    cardPad: "p-[6.3px]",
    cardCategory: "text-[4px]",
    cardTitle: "text-[6.7px]",
    cardSubtitle: "text-[4.4px]",
    subPad: "p-[7.1px]",
    subGap: "gap-[4px]",
    subRadius: "rounded-[7.9px]",
    planTopGap: "gap-[3.2px]",
    planTopH: "h-[11.1px]",
    planTitle: "text-[6.7px]",
    badgePadX: "px-[4px]",
    badgePadY: "py-[2px]",
    badgeRadius: "rounded-[5.5px]",
    badgeText: "text-[4.7px]",
    infoRowH: "h-[9.5px]",
    infoRowGap: "gap-[3.2px]",
    infoText: "text-[5.1px]",
    infoLabelW: "w-[46.7px]",
    infoValueW: "w-[74.4px]",
    famPad: "p-[7.9px]",
    famGap: "gap-[4px]",
    famLabel: "text-[5.1px]",
    famTitle: "text-[8.7px]",
    famSub: "text-[4.7px]",
    childSectionH: "h-[11.1px]",
    childSectionText: "text-[7.5px]",
    childPad: "p-[7.1px]",
    childGap: "gap-[5.5px]",
    childH: "h-[22.2px]",
    childAvatar: "size-[20.6px]",
    childAvatarText: "text-[7.1px]",
    childInfoGap: "gap-[1.2px]",
    childInfoW: "w-[75.2px]",
    childName: "text-[6.7px]",
    childGrade: "text-[4.7px]",
    summaryPad: "p-[7.6px]",
    summaryGap: "gap-[3px]",
    summaryRadius: "rounded-[7.6px]",
    summaryTitle: "text-[8px]",
    summarySub: "text-[4.9px]",
    reqH: "h-[19.8px]",
    reqInfoW: "w-[68.4px]",
  },
} as const;

type BodySize = { [K in keyof (typeof BODY_SIZE)["full"]]: string };

function StudentHomeBody({ b }: { b: BodySize }): JSX.Element {
  return (
    <>
      <div className={`flex items-center justify-between ${b.title}`}>
        <p className="font-bold text-[#1f2430]">홈</p>
        <div
          className={`flex ${b.avatarBox} items-center justify-center rounded-[8.5px] border-[0.6px] border-[#e8e5db] bg-white`}
        >
          <p className={`font-bold text-[#1f2430] ${b.avatarText}`}>김</p>
        </div>
      </div>

      <div
        className={`flex flex-col ${b.periodGap} ${b.periodPad} ${b.periodRadius} bg-[rgba(255,149,0,0.14)]`}
      >
        <p className={`font-bold text-[#1f2430] ${b.periodLabel}`}>
          중간고사 준비 · D-12
        </p>
        <p className={`font-bold text-[#1f2430] ${b.periodDate}`}>
          8월 3일 — 8월 14일
        </p>
        <p className={`font-medium text-[#1f2430] ${b.periodEdit}`}>
          기간 수정
        </p>
      </div>

      <div className="flex flex-col gap-[6.7px]">
        <div className={`flex items-center justify-between ${b.sectionHeaderH}`}>
          <p className={`font-bold text-[#1f2430] ${b.sectionTitle}`}>
            최근 본 탐구 자료
          </p>
          <p className={`font-medium whitespace-nowrap text-[#667085] ${b.sectionMore}`}>
            전체 보기 ›
          </p>
        </div>
        <div className={`flex ${b.gridGap}`}>
          <div className={`flex flex-col ${b.cardH} ${b.cardW} justify-between ${b.cardPad}`}>
            <p className={`font-bold text-[#667085] ${b.cardCategory}`}>
              CHEMISTRY
            </p>
            <p className={`font-bold text-[#1f2430] ${b.cardTitle}`}>
              화학 우수 탐구 사례 20선
            </p>
            <p className={`font-normal text-[#667085] ${b.cardSubtitle}`}>
              3페이지부터 이어보기
            </p>
          </div>
          <div className={`flex flex-col ${b.cardH} ${b.cardW} justify-between ${b.cardPad}`}>
            <p className={`font-bold text-[#667085] ${b.cardCategory}`}>
              QUESTION
            </p>
            <p className={`font-bold text-[#1f2430] ${b.cardTitle}`}>
              좋은 탐구 질문의 4가지 조건
            </p>
            <p className={`font-normal text-[#667085] ${b.cardSubtitle}`}>
              2페이지부터 이어보기
            </p>
          </div>
        </div>
      </div>

      <div className={`flex flex-col ${b.subGap} ${b.subPad} ${b.subRadius} bg-[#faf9f6]`}>
        <div className={`flex items-center justify-between ${b.planTopGap} ${b.planTopH}`}>
          <p className={`font-bold text-[#1f2430] ${b.planTitle}`}>탐구로 자료 구독</p>
          <div className={`flex ${b.badgePadX} ${b.badgePadY} ${b.badgeRadius} bg-[rgba(204,204,204,0.2)]`}>
            <p className={`font-bold whitespace-nowrap text-[#1f2430] ${b.badgeText}`}>
              구독 중
            </p>
          </div>
        </div>
        <div className={`flex items-center ${b.infoRowGap} ${b.infoRowH}`}>
          <p className={`${b.infoLabelW} font-normal text-[#667085] ${b.infoText}`}>
            다음 결제일
          </p>
          <p className={`${b.infoValueW} text-right font-bold text-[#1f2430] ${b.infoText}`}>
            2026. 08. 31
          </p>
        </div>
        <div className={`flex items-center ${b.infoRowGap} ${b.infoRowH}`}>
          <p className={`${b.infoLabelW} font-normal text-[#667085] ${b.infoText}`}>
            결제 금액
          </p>
          <p className={`${b.infoValueW} text-right font-bold text-[#1f2430] ${b.infoText}`}>
            월 49,000원
          </p>
        </div>
      </div>
    </>
  );
}

function ParentHomeBody({ b }: { b: BodySize }): JSX.Element {
  return (
    <>
      <div className={`flex items-center justify-between ${b.title}`}>
        <p className="font-bold text-[#1f2430]">홈</p>
        <div
          className={`flex ${b.avatarBox} items-center justify-center rounded-[8.5px] border-[0.6px] border-[#e8e5db] bg-white`}
        >
          <p className={`font-bold text-[#1f2430] ${b.avatarText}`}>이</p>
        </div>
      </div>

      <div
        className={`flex flex-col ${b.famGap} ${b.famPad} ${b.periodRadius} bg-[rgba(255,149,0,0.14)]`}
      >
        <p className={`font-bold text-[#1f2430] ${b.famLabel}`}>
          이번 달 가족 구독
        </p>
        <p className={`font-bold text-[#1f2430] ${b.famTitle}`}>
          자녀 2명 중 1명 구독 중
        </p>
        <p className={`font-normal text-[#667085] ${b.famSub}`}>
          다음 결제 예정 금액 49,000원
        </p>
      </div>

      <div className={`flex items-center ${b.childSectionH}`}>
        <p className={`font-bold text-[#1f2430] ${b.childSectionText}`}>자녀</p>
      </div>

      <div className={`flex flex-col ${b.childPad} rounded-[12.1px]`}>
        <div className={`flex items-center ${b.childGap} ${b.childH}`}>
          <div className={`flex ${b.childAvatar} items-center justify-center rounded-[8.5px] bg-[rgba(255,149,0,0.14)]`}>
            <p className={`font-bold text-[#1f2430] ${b.childAvatarText}`}>김</p>
          </div>
          <div className={`flex flex-1 flex-col ${b.childInfoGap}`}>
            <p className={`font-bold text-[#1f2430] ${b.childName}`}>김학생</p>
            <p className={`font-normal text-[#667085] ${b.childGrade}`}>고등학교 2학년</p>
          </div>
          <div className={`flex ${b.badgePadX} ${b.badgePadY} ${b.badgeRadius} bg-[rgba(204,204,204,0.2)]`}>
            <p className={`font-bold whitespace-nowrap text-[#1f2430] ${b.badgeText}`}>
              구독 중
            </p>
          </div>
        </div>
      </div>

      <div className={`flex flex-col ${b.childPad} rounded-[12.1px]`}>
        <div className={`flex items-center ${b.childGap} ${b.childH}`}>
          <div className={`flex ${b.childAvatar} items-center justify-center rounded-[8.5px] bg-[rgba(255,149,0,0.14)]`}>
            <p className={`font-bold text-[#1f2430] ${b.childAvatarText}`}>김</p>
          </div>
          <div className={`flex flex-1 flex-col ${b.childInfoGap}`}>
            <p className={`font-bold text-[#1f2430] ${b.childName}`}>김하늘</p>
            <p className={`font-normal text-[#667085] ${b.childGrade}`}>중학교 3학년</p>
          </div>
          <div className={`flex ${b.badgePadX} ${b.badgePadY} ${b.badgeRadius} bg-[rgba(204,204,204,0.2)]`}>
            <p className={`font-bold whitespace-nowrap text-[#667085] ${b.badgeText}`}>
              미구독
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function MentorAppExperienceBody({ b }: { b: BodySize }): JSX.Element {
  return (
    <>
      <div className={`flex items-center justify-between ${b.title}`}>
        <p className="font-bold text-[#1f2430]">홈</p>
        <div
          className={`flex ${b.avatarBox} items-center justify-center rounded-[8.5px] border-[0.6px] border-[#e8e5db] bg-white`}
        >
          <p className={`font-bold text-[#1f2430] ${b.avatarText}`}>서</p>
        </div>
      </div>

      <div
        className={`flex flex-col ${b.summaryGap} ${b.summaryPad} ${b.summaryRadius} whitespace-nowrap bg-[rgba(255,149,0,0.14)]`}
      >
        <p className={`font-bold text-[#1f2430] ${b.summaryTitle}`}>
          서정우 멘토님, 안녕하세요
        </p>
        <p className={`font-normal text-[#667085] ${b.summarySub}`}>
          확인이 필요한 신청 2건이 있어요.
        </p>
      </div>

      <div className={`flex items-center justify-between ${b.sectionHeaderH}`}>
        <p className={`font-bold text-[#1f2430] ${b.sectionTitle}`}>
          새 멘토링 신청
        </p>
        <p className={`font-medium whitespace-nowrap text-[#667085] ${b.sectionMore}`}>
          전체 보기
        </p>
      </div>

      <div className={`flex flex-col ${b.childPad} rounded-[12.1px]`}>
        <div className={`flex items-center ${b.childGap} ${b.reqH}`}>
          <div className={`flex ${b.childAvatar} items-center justify-center rounded-[8.5px] bg-[rgba(255,149,0,0.14)]`}>
            <p className={`font-bold text-[#1f2430] ${b.childAvatarText}`}>김</p>
          </div>
          <div className={`flex flex-1 flex-col ${b.childInfoGap} ${b.reqInfoW}`}>
            <p className={`font-bold text-[#1f2430] ${b.childName}`}>김학생</p>
            <p className={`font-normal text-[#667085] ${b.childGrade}`}>
              화학 탐구 주제 상담
            </p>
          </div>
          <div className={`flex ${b.badgePadX} ${b.badgePadY} ${b.badgeRadius} bg-[rgba(204,204,204,0.2)]`}>
            <p className={`font-bold whitespace-nowrap text-[#1f2430] ${b.badgeText}`}>
              승인 대기
            </p>
          </div>
        </div>
      </div>

      <div className={`flex flex-col ${b.childPad} rounded-[12.1px]`}>
        <div className={`flex items-center ${b.childGap} ${b.reqH}`}>
          <div className={`flex ${b.childAvatar} items-center justify-center rounded-[8.5px] bg-[rgba(255,149,0,0.14)]`}>
            <p className={`font-bold text-[#1f2430] ${b.childAvatarText}`}>이</p>
          </div>
          <div className={`flex flex-1 flex-col ${b.childInfoGap} ${b.reqInfoW}`}>
            <p className={`font-bold text-[#1f2430] ${b.childName}`}>이하늘</p>
            <p className={`font-normal text-[#667085] ${b.childGrade}`}>
              학생부 활동 점검
            </p>
          </div>
          <div className={`flex ${b.badgePadX} ${b.badgePadY} ${b.badgeRadius} bg-[rgba(204,204,204,0.2)]`}>
            <p className={`font-bold whitespace-nowrap text-[#1f2430] ${b.badgeText}`}>
              승인 대기
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function BodyContent({
  variant,
  b,
}: {
  variant: PhoneMockupVariant;
  b: BodySize;
}): JSX.Element {
  switch (variant) {
    case "student-home":
    case "student-app-experience":
      return <StudentHomeBody b={b} />;
    case "parent-home":
    case "parent-app-experience":
      return <ParentHomeBody b={b} />;
    case "mentor-app-experience":
      return <MentorAppExperienceBody b={b} />;
  }
}

export default function PhoneMockup({
  variant,
  size = "full",
  navItems,
}: PhoneMockupProps): JSX.Element {
  const s = SIZE_CLASSES[size];
  const b = BODY_SIZE[size];

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

        {/* Body */}
        <div className={`flex flex-1 flex-col ${s.gapY} overflow-hidden`}>
          <BodyContent variant={variant} b={b} />
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
