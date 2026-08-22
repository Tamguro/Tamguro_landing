import type { JSX } from "react";

const NAV_ITEMS = [
  { label: "학종 A to Z", href: "#hakjong-a-to-z" },
  { label: "멘토링", href: "#mentoring" },
  { label: "이용 안내", href: "#how-it-works" },
  { label: "문의", href: "#contact" },
];

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 bg-surface px-[20px] md:px-[80px]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between py-[25px] md:py-[39px]">
        <div className="flex items-center gap-[10px]">
          <div className="flex size-[40px] items-center justify-center overflow-clip rounded-[14px] bg-accent-soft">
            <p className="font-['Pretendard'] text-[14px] font-bold leading-[21px] whitespace-nowrap text-text-primary">
              TG
            </p>
          </div>
          <p className="font-['Pretendard'] text-[20px] font-bold leading-[30px] whitespace-nowrap text-text-primary">
            탐구로
          </p>
        </div>

        <nav
          aria-label="주요 메뉴"
          className="hidden items-center gap-[16px] font-['Pretendard'] text-[12px] leading-[21px] text-text-secondary sm:flex md:gap-[30px] md:text-[14px]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-[1600px] border-b border-border-default" />
    </header>
  );
}
