import type { JSX } from "react";

const PRINCIPLES = [
  {
    number: "01",
    title: "초대 기반의 신뢰",
    description:
      "교육기관이 안내한 사용자와 검증된 멘토가 안전한 환경에서 연결됩니다.",
  },
  {
    number: "02",
    title: "교육기관과 함께 운영",
    description:
      "학원·학교의 교육 경험을 해치지 않고 학생의 탐구 여정을 확장합니다.",
  },
  {
    number: "03",
    title: "역할에 맞는 경험",
    description: "학생, 학부모, 멘토가 각자 필요한 정보와 소통에 집중합니다.",
  },
  {
    number: "04",
    title: "탐구와 멘토링의 연결",
    description:
      "자료 탐색과 멘토 소통이 하나의 성장 경험으로 이어집니다.",
  },
];

export default function Principles(): JSX.Element {
  return (
    <section
      id="principles"
      className="border-t border-[#e8e5db] bg-white px-[20px] py-[72px] md:px-[80px] md:py-[104px]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-[110px] gap-y-[56px] lg:grid-cols-2">
        {/* Left column */}
        <div className="relative flex flex-col gap-[24px] border-l-[10px] border-[rgba(255,149,0,0.14)] pl-[30px]">
          <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-[#ff9500]">
            PRINCIPLES
          </p>
          <h2 className="font-['Pretendard'] text-[32px] leading-[42px] font-bold text-[#1f2430] md:text-[44px] md:leading-[60px]">
            신뢰를 설계하는
            <br />
            네 가지 원칙
          </h2>
          <p className="font-['Pretendard'] text-[16px] leading-[27px] text-[#667085] md:text-[17px] md:leading-[29px]">
            프라이빗 서비스에 필요한 것은
            <br />
            더 많은 기능보다 더 높은 신뢰입니다.
          </p>
          <p className="font-['Pretendard'] pt-[24px] text-[72px] leading-none font-bold whitespace-nowrap text-[rgba(255,149,0,0.14)] md:text-[112px]">
            TRUST
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="flex flex-col gap-[10px] border-t border-[#e8e5db] py-[46px] sm:flex-row sm:items-start sm:gap-[40px]"
            >
              <p className="font-['Pretendard'] w-[52px] shrink-0 text-[18px] font-bold text-[#ff9500]">
                {principle.number}
              </p>
              <h3 className="font-['Pretendard'] w-full shrink-0 text-[22px] leading-[31px] font-bold text-[#1f2430] sm:w-[250px]">
                {principle.title}
              </h3>
              <p className="font-['Pretendard'] text-[15px] leading-[25px] text-[#667085]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
