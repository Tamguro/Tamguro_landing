import type { JSX } from "react";

const ROLES = [
  {
    label: "학종 A to Z",
    title: "학종 입시 자료 구독",
    description: "학종입시개론·워크북·실무 노하우·학생부 케이스 스터디를 구독하세요.",
  },
  {
    label: "멘토링 중개",
    title: "합격자에게 직접 상담",
    description: "직접 입시를 헤쳐간 멘토에게 합리적인 가격으로 컨설팅과 심층 탐구 도움을 받으세요.",
  },
  {
    label: "탐구로",
    title: "학종의 진짜 가치 실현",
    description: "자료로 이해하고 경험으로 실행하며 학생만의 탐구 역량을 완성합니다.",
  },
];

export default function ForEveryRole(): JSX.Element {
  return (
    <section
      id="mentoring"
      className="bg-surface px-[20px] md:px-[80px]"
    >
      <div className="mx-auto max-w-[1600px] border-t border-border-default" />
      <div id="how-it-works" className="mx-auto max-w-[1600px] scroll-mt-[96px] py-[101px] md:py-[218px]">
        <div className="flex flex-col gap-[16px] pb-[134px]">
          <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-accent">
            HOW IT WORKS
          </p>
          <h2 className="font-['Pretendard'] text-[32px] leading-[42px] font-bold text-text-primary md:text-[42px] md:leading-[56px]">
            자료를 구독하고,
            <br />
            합격자와 연결되다.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[48px] md:grid-cols-3 md:gap-0 md:divide-x md:divide-border-default">
          {ROLES.map((role) => (
            <div key={role.label} className="flex flex-col gap-[12px] md:px-[40px] md:first:pl-0">
              <p className="font-['Pretendard'] text-[14px] font-bold whitespace-nowrap text-accent">
                {role.label}
              </p>
              <h3 className="font-['Pretendard'] text-[22px] leading-[32px] font-bold text-text-primary md:text-[24px] md:leading-[34px]">
                {role.title}
              </h3>
              <p className="font-['Pretendard'] text-[15px] leading-[26px] text-text-secondary">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
