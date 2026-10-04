import type { JSX } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import { PILL_PRIMARY, PILL_SECONDARY } from "@/lib/ui";

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-surface px-[12px] pt-[72px] pb-[12px] md:pt-[112px]"
    >
      {/* Apple-style centered statement: one message, two actions */}
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-[8px] text-center">
        <p
          className="rise text-[15px] font-semibold text-accent md:text-[17px]"
          style={{ animationDelay: "0ms" }}
        >
          학생부종합전형의 새로운 기준
        </p>

        <h1 className="mt-[16px] text-[44px] leading-[1.12] font-bold tracking-[-0.04em] text-text-primary sm:text-[64px] lg:text-[84px]">
          <span className="rise block" style={{ animationDelay: "80ms" }}>
            학종의 <span className="highlighter highlighter-sweep">진짜</span>{" "}
            가치를
          </span>
          <span className="rise block" style={{ animationDelay: "160ms" }}>
            실현하다<span className="text-accent">.</span>
          </span>
        </h1>

        <p
          className="rise mt-[24px] max-w-[640px] text-[19px] leading-[1.5] tracking-[-0.01em] text-text-secondary md:text-[24px]"
          style={{ animationDelay: "260ms" }}
        >
          자료로 이해하고, 합격자의 경험으로 완성하는
          <br className="hidden sm:block" /> 학생부종합전형 실전 플랫폼.
        </p>

        <div
          className="rise mt-[36px] flex flex-wrap items-center justify-center gap-[12px]"
          style={{ animationDelay: "340ms" }}
        >
          <a href="#hakjong-a-to-z" className={PILL_PRIMARY}>
            학종 A to Z 둘러보기
          </a>
          <a href="#mentoring" className={PILL_SECONDARY}>
            멘토링 알아보기
          </a>
        </div>
      </div>

      {/* Toss/Apple-style product card: both phones shown whole, sized by content */}
      <div className="expand-on-view relative mx-auto mt-[64px] flex max-w-[1416px] justify-center overflow-hidden rounded-[28px] bg-wash px-[20px] pt-[56px] pb-[64px] md:mt-[88px] md:rounded-[40px] md:pt-[80px] md:pb-[96px]">
        {/* crisp halo behind the phones */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft md:size-[520px]"
        />

        <div className="relative flex items-start">
          {/* 학생 홈 — front */}
          <div className="relative z-10 w-[260px] md:w-auto">
            <PhoneMockup variant="student-home" size="large" priority />
          </div>
          {/* 학부모 홈 — behind, offset right and down (hidden on small screens) */}
          <div className="relative mt-[96px] -ml-[72px] hidden md:block">
            <PhoneMockup variant="parent-home" size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
