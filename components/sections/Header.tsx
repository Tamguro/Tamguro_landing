import type { JSX } from "react";

const NAV_ITEMS = [
  { label: "브랜드", href: "#hero" },
  { label: "차별점", href: "#principles" },
  { label: "앱 화면", href: "#app-experience" },
  { label: "문의", href: "#contact" },
];

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e5db] bg-white px-[20px] py-[18px] md:px-[80px] md:py-[22px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="flex size-[40px] items-center justify-center overflow-clip rounded-[14px] bg-[rgba(255,149,0,0.14)]">
            <p className="font-['Pretendard'] text-[14px] font-bold leading-[21px] whitespace-nowrap text-[#1f2430]">
              TG
            </p>
          </div>
          <p className="font-['Pretendard'] text-[20px] font-bold leading-[30px] whitespace-nowrap text-[#1f2430]">
            탐구로
          </p>
        </div>

        <nav className="hidden items-center gap-[30px] font-['Pretendard'] text-[14px] leading-[21px] text-[#667085] md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-[#1f2430]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
