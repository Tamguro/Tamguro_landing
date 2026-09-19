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
      className="bg-surface px-[20px] md:px-[80px] lg:px-[120px]"
    >
      <div className="mx-auto max-w-[1200px] border-t border-border-default" />
      <div className="mx-auto max-w-[1200px] pt-[120px] lg:pt-0">
        <div className="flex flex-col gap-[16px] pb-[120px] lg:relative lg:h-[360px] lg:gap-0 lg:pb-0">
          <div className="flex flex-col gap-[16px] lg:absolute lg:top-[76px] lg:left-0 lg:gap-[22px]">
            <p className="font-['Pretendard'] text-[13px] leading-[20px] font-bold whitespace-nowrap text-accent">
              APP EXPERIENCE
            </p>
            <h2 className="font-['Pretendard'] max-w-[520px] text-[32px] leading-[42px] font-bold text-text-primary md:text-[42px] md:leading-[56px]">
              각자의 화면에서,
              <br />
              같은 목표를 향해
            </h2>
          </div>
          <p className="font-['Pretendard'] max-w-[450px] text-[16px] leading-[27px] text-text-secondary md:text-[17px] md:leading-[29px] lg:absolute lg:top-[130px] lg:left-[590px] lg:max-w-[600px]">
            학생, 학부모, 멘토는 서로 다른 화면을 사용하지만
            <br className="hidden md:block" />
            하나의 탐구 성장 경험으로 연결됩니다.
          </p>
        </div>

        <div className="flex flex-col lg:gap-[63px] lg:pb-[63px]">
          {ROLE_STORIES.map((story) => (
            <div
              key={story.number}
              className="relative flex flex-col items-center gap-[72px] border-b border-border-default py-[128px] lg:h-[657px] lg:gap-0 lg:py-0"
            >
              <div
                className={`flex max-w-[430px] flex-col items-center text-center lg:absolute lg:top-[170px] lg:flex-row lg:items-start lg:gap-[36px] lg:text-left ${
                  story.reverse ? "lg:left-[500px]" : "lg:left-0"
                }`}
              >
                <p className="font-['Pretendard'] shrink-0 text-[54px] leading-[66px] font-bold text-accent lg:w-[82px]">
                  {story.number}
                </p>
                <div className="flex flex-col items-center text-center lg:items-start lg:pt-[10px] lg:text-left">
                  <p className="font-['Pretendard'] text-[14px] font-bold whitespace-nowrap text-accent">
                    {story.role}
                  </p>
                  <h3 className="font-['Pretendard'] mt-[19px] text-[26px] leading-[38px] font-bold text-text-primary md:text-[30px] md:leading-[42px]">
                    {story.title}
                  </h3>
                  <p className="font-['Pretendard'] mt-[16px] text-[15px] leading-[26px] text-text-secondary md:text-[16px] md:leading-[28px]">
                    {story.description}
                  </p>
                </div>
              </div>

              <div
                className={`relative flex size-[280px] shrink-0 items-center justify-center rounded-full bg-accent-soft lg:absolute lg:top-[137.5px] lg:size-[345px] ${
                  story.reverse ? "lg:left-[17.5px]" : "lg:right-[17.5px]"
                }`}
              >
                <div className="relative w-[280px] max-w-[calc(100vw-40px)] lg:absolute lg:top-[-85.5px] lg:left-[-1.5px] lg:w-[348px] lg:max-w-none">
                  {story.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
