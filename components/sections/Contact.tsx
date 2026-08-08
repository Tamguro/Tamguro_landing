import type { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="bg-white px-[20px] md:px-[80px]"
    >
      <div className="mx-auto max-w-[1600px] border-t border-[#e8e5db]" />
      <div className="mx-auto max-w-[1600px] py-[80px] md:py-[132px]">
        <div className="flex flex-col gap-[40px] rounded-[32px] bg-[rgba(255,149,0,0.14)] p-[40px] md:p-[72px] lg:flex-row lg:items-stretch lg:gap-0">
          {/* Intro */}
          <div className="flex flex-col justify-center gap-[16px] lg:w-[420px] lg:pr-[40px]">
            <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-[#ff9500]">
              05 / CONTACT
            </p>
            <h2 className="font-['Pretendard'] text-[28px] leading-[38px] font-bold text-[#1f2430] md:text-[38px] md:leading-[52px]">
              함께 만들 다음
              <br />
              탐구 경험을 기다립니다.
            </h2>
            <p className="font-['Pretendard'] text-[14px] leading-[23px] text-[#667085]">
              서비스 세부 내용은 제휴 및 등록 상담 과정에서 안내합니다.
            </p>
          </div>

          {/* CTA columns */}
          <div className="grid grid-cols-1 gap-[32px] border-t border-[rgba(255,149,0,0.28)] pt-[32px] sm:grid-cols-2 lg:grid-cols-2 lg:flex-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-[40px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-[#ff9500]">
                  학원·학교
                </p>
                <p className="font-['Pretendard'] text-[22px] leading-[32px] font-bold text-[#1f2430]">
                  교육 경험을 확장할
                  <br />
                  파트너를 찾습니다.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-auto flex h-[52px] w-full max-w-[220px] items-center justify-center rounded-[14px] bg-[#1f2430] px-[24px] font-['Pretendard'] text-[15px] font-bold whitespace-nowrap text-white transition-opacity hover:opacity-90"
              >
                학원·학교 제휴 문의
              </a>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-[#ff9500]">
                  멘토
                </p>
                <p className="font-['Pretendard'] text-[22px] leading-[32px] font-bold text-[#1f2430]">
                  전문성을 성장과
                  <br />
                  연결해 주세요.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-auto flex h-[52px] w-full max-w-[220px] items-center justify-center rounded-[14px] bg-white px-[24px] font-['Pretendard'] text-[15px] font-bold whitespace-nowrap text-[#1f2430] transition-colors hover:bg-[#faf9f6]"
              >
                멘토 등록 문의
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
