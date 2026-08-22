import type { JSX } from "react";
import PhoneMockup from "@/components/PhoneMockup";

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-surface px-[20px] py-[90px] md:px-[80px] md:py-[134px]"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-[56px] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px]">
        {/* Text column */}
        <div className="flex max-w-[650px] flex-col items-start gap-[24px]">
          <div className="flex h-[34px] items-center rounded-[17px] bg-accent-soft px-[14px]">
            <p className="font-['Pretendard'] text-[13px] font-medium whitespace-nowrap text-text-primary">
              학생부종합전형의 새로운 기준
            </p>
          </div>

          <h1 className="font-['Pretendard'] text-[36px] leading-[46px] font-bold text-text-primary sm:text-[44px] sm:leading-[56px] lg:text-[54px] lg:leading-[72px]">
            학종의 진짜 가치를
            <br />
            실현하다.
          </h1>

          <p className="font-['Pretendard'] text-[17px] leading-[28px] text-text-secondary lg:text-[19px] lg:leading-[32px]">
            자료로 이해하고, 합격자 멘토의 경험으로 완성하는
            <br className="hidden sm:block" />
            학생부종합전형 실전 플랫폼 탐구로입니다.
          </p>

          <div className="flex flex-wrap items-center gap-[14px] pt-[10px]">
            <a
              href="#hakjong-a-to-z"
              className="flex h-[52px] items-center justify-center rounded-[14px] bg-action-primary px-[28px] font-['Pretendard'] text-[15px] font-medium whitespace-nowrap text-text-inverse transition-opacity hover:opacity-90"
            >
              학종 A to Z 둘러보기
            </a>
            <a
              href="#mentoring"
              className="flex h-[52px] items-center justify-center rounded-[14px] border border-border-strong bg-surface px-[28px] font-['Pretendard'] text-[15px] font-medium whitespace-nowrap text-text-primary transition-colors hover:bg-surface-hover"
            >
              멘토링 알아보기
            </a>
          </div>

          <p className="font-['Pretendard'] text-[14px] leading-[21px] text-text-secondary">
            학종의 모든 것부터 심층 탐구 활동까지, 한 곳에서.
          </p>
        </div>

        {/* Phone column */}
        <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center lg:mx-0 lg:h-[646px] lg:w-[536px] lg:max-w-none lg:items-start lg:justify-start">
          {/* Soft brand halo behind the phones */}
          <div className="hero-phone-glow pointer-events-none absolute hidden lg:top-[16px] lg:left-[-34px] lg:block lg:h-[570px] lg:w-[590px]" />

          {/* Phone · 학생 홈 */}
          <div className="relative z-10 lg:absolute lg:top-0 lg:left-[27px]">
            <PhoneMockup variant="student-home" size="full" priority />
          </div>

          {/* Phone · 학부모 홈 */}
          <div className="absolute z-20 hidden lg:top-[72px] lg:left-[266px] lg:block">
            <PhoneMockup variant="parent-home" size="full" />
          </div>
        </div>
      </div>
    </section>
  );
}
