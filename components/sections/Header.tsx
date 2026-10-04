import type { JSX } from "react";
import ReleaseButton from "@/components/ReleaseButton";
import { PILL_SMALL } from "@/lib/ui";

const NAV_ITEMS = [
  { label: "학종 A to Z", href: "#hakjong-a-to-z" },
  { label: "앱 화면", href: "#app-experience" },
  { label: "이용 안내", href: "#how-it-works" },
  { label: "문의", href: "#contact" },
];

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-surface/80 px-[20px] backdrop-blur-xl backdrop-saturate-150 md:px-[40px]">
      <div className="mx-auto flex h-[56px] max-w-[1200px] items-center justify-between gap-[24px]">
        <a
          href="#hero"
          className="flex items-center gap-[8px] rounded-[8px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="flex size-[28px] items-center justify-center rounded-[8px] bg-action-primary text-[11px] leading-none font-[820] text-text-inverse">
            T<span className="text-accent">G</span>
          </span>
          <span className="text-[17px] font-bold whitespace-nowrap text-text-primary">
            탐구로
          </span>
        </a>

        <nav
          aria-label="주요 메뉴"
          className="hidden items-center gap-[32px] text-[13px] text-text-secondary md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-text-primary focus-visible:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ReleaseButton className={PILL_SMALL}>자료 구독하기</ReleaseButton>
      </div>
    </header>
  );
}
