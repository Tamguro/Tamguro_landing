import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-surface-muted px-[20px] md:px-[40px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[20px] py-[40px] text-[12px] leading-[1.7] text-text-secondary">
        <div className="flex items-center gap-[8px] border-b border-border-strong pb-[20px]">
          <span className="flex size-[24px] items-center justify-center rounded-[7px] bg-action-primary text-[10px] leading-none font-[820] text-text-inverse">
            T<span className="text-accent">G</span>
          </span>
          <span className="text-[15px] font-bold text-text-primary">탐구로</span>
        </div>

        <div className="flex flex-col gap-[2px]">
          <p>주식회사 탐구로 · 대표 서정우 · 사업자등록번호 248-87-04012</p>
          <p>사업장 주소: 서울특별시 성동구 행당로17길 1-57</p>
          <p>
            Contact:{" "}
            <a
              href="mailto:tamguro.inc@gmail.com"
              className="underline-offset-2 hover:text-text-primary hover:underline"
            >
              tamguro.inc@gmail.com
            </a>
          </p>
        </div>
        <p>© 2026 탐구로. All rights reserved.</p>
      </div>
    </footer>
  );
}
