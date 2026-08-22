import type { JSX } from "react";

const MATERIALS = [
  {
    title: "학종입시개론",
    description: "학종의 모든 것, 학종에 대한 차별화된 접근",
  },
  {
    title: "교세특 워크북",
    description: "워크북을 따라가면 교세특이 뚝딱, 매월 추가되는 워크북",
  },
  {
    title: "탐구로 노하우",
    description: "탐구를 하기 위한 합격자의 실무 노하우",
  },
  {
    title: "학생부 케이스 스터디",
    description: "좋은 세특과 나쁜 세특을 보면 정답이 보인다!",
  },
];

export default function Principles(): JSX.Element {
  return (
    <section
      id="hakjong-a-to-z"
      className="bg-surface px-[20px] md:px-[80px]"
    >
      <div className="mx-auto max-w-[1600px] border-t border-border-default" />
      <div className="mx-auto max-w-[1600px] py-[80px] md:py-[120px]">
        <div className="mb-[64px] flex flex-col items-start gap-[24px]">
          <div className="flex h-[34px] items-center gap-[7px] rounded-full bg-accent-soft px-[14px]">
            <span className="size-[7px] rounded-full bg-accent" aria-hidden="true" />
            <p className="font-['Pretendard'] text-[13px] font-medium whitespace-nowrap text-text-primary">
              학종 A to Z
            </p>
          </div>
          <h2 className="max-w-[900px] font-['Pretendard'] text-[32px] leading-[42px] font-bold text-text-primary md:text-[38px] md:leading-[52px]">
            구독을 통해 열람하는 학종에 대한 모든 것,
            <br />
            학종 A to Z
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {MATERIALS.map((material, index) => (
              <div
                key={material.title}
                className="flex min-h-[248px] flex-col rounded-[20px] border border-border-default bg-surface px-[26px] py-[28px] md:p-[30px]"
              >
                <span className="mb-[30px] font-['Pretendard'] text-[24px] leading-none font-semibold tracking-[-0.02em] text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-['Pretendard'] text-[21px] leading-[31px] font-bold text-text-primary">
                  {material.title}
                </h3>
                <p className="mt-[12px] font-['Pretendard'] text-[15px] leading-[25px] text-text-secondary">
                  {material.description}
                </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
