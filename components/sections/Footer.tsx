import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-surface px-[20px] md:px-[80px]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-[32px] py-[48px]">
        <div className="h-px w-full bg-border-default" />

        <div className="flex items-start">
          <div className="flex items-center gap-[8px] font-['Pretendard'] font-bold whitespace-nowrap">
            <span className="text-[32px] leading-[38px] tracking-[-0.015em] text-accent">
              TG
            </span>
            <span className="text-[18px] leading-[24px] text-text-primary">
              탐구로
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] font-['Pretendard'] text-[13px] leading-[20px] text-text-secondary">
          <p>주식회사 탐구로 · 대표 서정우 · 사업자등록번호 248-87-04012</p>
          <p>사업장 주소: 서울특별시 성동구 행당로17길 1-57</p>
          <p>Contact: tamguro.inc@gmail.com</p>
          <p>© 2026 탐구로. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
