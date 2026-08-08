import type { JSX } from "react";
import PhoneMockup from "@/components/PhoneMockup";

const ROLE_STORIES = [
  {
    number: "01",
    role: "학생",
    title: "탐구 경험에 집중",
    description: "자료와 멘토를 탐색하고 자신의 학습 흐름을 한눈에 확인합니다.",
    phone: <PhoneMockup variant="student-app-experience" size="compact" />,
    reverse: false,
  },
  {
    number: "02",
    role: "학부모",
    title: "자녀의 여정을 함께",
    description:
      "연결된 자녀를 기준으로 필요한 소통과 결제 과정을 간결하게 관리합니다.",
    phone: <PhoneMockup variant="parent-app-experience" size="compact" />,
    reverse: true,
  },
  {
    number: "03",
    role: "멘토",
    title: "소통에 집중",
    description: "멘티와 학부모의 채팅, 멘티 확인, 프로필 관리에 집중합니다.",
    phone: <PhoneMockup variant="mentor-app-experience" size="compact" />,
    reverse: false,
  },
];

export default function AppExperience(): JSX.Element {
  return (
    <section
      id="app-experience"
      className="bg-white px-[20px] md:px-[80px]"
    >
      <div className="mx-auto max-w-[1600px] border-t border-[#e8e5db]" />
      <div className="mx-auto max-w-[1600px] py-[120px] md:py-[192px]">
        <div className="flex flex-col gap-[16px] pb-[120px] lg:flex-row lg:items-start lg:justify-between lg:gap-[80px]">
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-[#ff9500]">
              APP EXPERIENCE
            </p>
            <h2 className="font-['Pretendard'] max-w-[520px] text-[32px] leading-[42px] font-bold text-[#1f2430] md:text-[42px] md:leading-[56px]">
              각자의 화면에서,
              <br />
              같은 목표를 향해
            </h2>
          </div>
          <p className="font-['Pretendard'] max-w-[450px] text-[16px] leading-[27px] text-[#667085] md:text-[17px] md:leading-[29px] lg:pt-[44px]">
            학생, 학부모, 멘토는 서로 다른 화면을 사용하지만
            <br className="hidden md:block" />
            하나의 탐구 성장 경험으로 연결됩니다.
          </p>
        </div>

        <div className="flex flex-col">
          {ROLE_STORIES.map((story) => (
            <div
              key={story.number}
              className={`flex flex-col items-center gap-[40px] border-t border-[#e8e5db] py-[108px] lg:flex-row lg:items-start lg:justify-between lg:gap-[80px] ${
                story.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex max-w-[430px] flex-col items-center gap-[12px] text-center lg:flex-row lg:items-start lg:gap-[36px] lg:text-left">
                <p className="font-['Pretendard'] shrink-0 text-[54px] leading-[66px] font-bold text-[#ff9500]">
                  {story.number}
                </p>
                <div className="flex flex-col items-center gap-[12px] text-center lg:items-start lg:pt-[4px] lg:text-left">
                  <p className="font-['Pretendard'] text-[14px] font-bold whitespace-nowrap text-[#ff9500]">
                    {story.role}
                  </p>
                  <h3 className="font-['Pretendard'] text-[26px] leading-[38px] font-bold text-[#1f2430] md:text-[30px] md:leading-[42px]">
                    {story.title}
                  </h3>
                  <p className="font-['Pretendard'] text-[15px] leading-[26px] text-[#667085] md:text-[16px] md:leading-[28px]">
                    {story.description}
                  </p>
                </div>
              </div>

              <div className="relative flex shrink-0 items-center justify-center">
                <div className="absolute size-[230px] rounded-full bg-[rgba(255,149,0,0.14)] blur-3xl" />
                <div className="relative">{story.phone}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
