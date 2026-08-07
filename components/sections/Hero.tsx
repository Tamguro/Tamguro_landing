import type { JSX } from "react";
import PhoneMockup from "@/components/PhoneMockup";

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-white px-[20px] py-[64px] md:px-[80px] md:py-[96px]"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-[56px] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px]">
        {/* Text column */}
        <div className="flex max-w-[650px] flex-col items-start gap-[24px]">
          <div className="flex h-[34px] items-center rounded-[17px] bg-[rgba(255,149,0,0.14)] px-[14px]">
            <p className="font-['Pretendard'] text-[13px] font-medium whitespace-nowrap text-[#1f2430]">
              프라이빗 탐구 교육 네트워크
            </p>
          </div>

          <h1 className="font-['Pretendard'] text-[36px] leading-[46px] font-bold text-[#1f2430] sm:text-[44px] sm:leading-[56px] lg:text-[54px] lg:leading-[72px]">
            탐구의 시작부터 성장까지
            <br />
            신뢰할 수 있는 연결
          </h1>

          <p className="font-['Pretendard'] text-[17px] leading-[28px] text-[#667085] lg:text-[19px] lg:leading-[32px]">
            탐구로는 학원·학교, 학생과 학부모, 검증된 멘토를 연결하는
            <br className="hidden sm:block" />
            프라이빗 탐구 교육 플랫폼입니다.
          </p>

          <div className="flex flex-wrap items-center gap-[14px] pt-[10px]">
            <a
              href="#contact"
              className="flex h-[52px] items-center justify-center rounded-[14px] bg-[#1f2430] px-[28px] font-['Pretendard'] text-[15px] font-medium whitespace-nowrap text-white transition-opacity hover:opacity-90"
            >
              학원·학교 제휴 문의
            </a>
            <a
              href="#contact"
              className="flex h-[52px] items-center justify-center rounded-[14px] border border-[#d9d7cf] bg-white px-[28px] font-['Pretendard'] text-[15px] font-medium whitespace-nowrap text-[#1f2430] transition-colors hover:bg-[#faf9f6]"
            >
              멘토 등록 문의
            </a>
          </div>

          <p className="font-['Pretendard'] text-[14px] leading-[21px] text-[#667085]">
            학생과 학부모는 소속 교육기관의 안내를 통해 이용합니다.
          </p>
        </div>

        {/* Phone column */}
        <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center lg:mx-0 lg:h-[646px] lg:w-[536px] lg:max-w-none lg:items-start lg:justify-start">
          {/* Hero accent blob */}
          <div className="absolute hidden rounded-[40px] bg-[rgba(255,149,0,0.14)] lg:top-[38px] lg:left-0 lg:block lg:h-[490px] lg:w-[480px]" />

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
