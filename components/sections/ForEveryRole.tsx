import type { JSX } from "react";

const ROLES = [
  {
    label: "학원·학교",
    title: "교육 경험을 확장하는 파트너",
    description:
      "학생에게 필요한 탐구 자료와 멘토 연결을 기관의 운영 방향 안에서 제공합니다.",
  },
  {
    label: "학생·학부모",
    title: "신뢰할 수 있는 탐구 환경",
    description: "소속 교육기관의 안내를 통해 시작하고, 필요한 정보와 소통에만 집중합니다.",
  },
  {
    label: "멘토",
    title: "전문성을 성장과 연결",
    description:
      "자신의 경험과 전문성을 학생의 탐구 과정에 연결하고 의미 있는 소통을 만듭니다.",
  },
];

export default function ForEveryRole(): JSX.Element {
  return (
    <section
      id="for-every-role"
      className="bg-white px-[20px] md:px-[80px]"
    >
      <div className="mx-auto max-w-[1600px] border-t border-[#e8e5db]" />
      <div className="mx-auto max-w-[1600px] py-[101px] md:py-[218px]">
        <div className="flex flex-col gap-[16px] pb-[134px]">
          <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-[#ff9500]">
            FOR EVERY ROLE
          </p>
          <h2 className="font-['Pretendard'] text-[32px] leading-[42px] font-bold text-[#1f2430] md:text-[42px] md:leading-[56px]">
            서로 다른 역할을,
            <br />
            하나의 성장 경험으로.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[48px] md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#e8e5db]">
          {ROLES.map((role) => (
            <div key={role.label} className="flex flex-col gap-[12px] md:px-[40px] md:first:pl-0">
              <p className="font-['Pretendard'] text-[14px] font-bold whitespace-nowrap text-[#ff9500]">
                {role.label}
              </p>
              <h3 className="font-['Pretendard'] text-[22px] leading-[32px] font-bold text-[#1f2430] md:text-[24px] md:leading-[34px]">
                {role.title}
              </h3>
              <p className="font-['Pretendard'] text-[15px] leading-[26px] text-[#667085]">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
