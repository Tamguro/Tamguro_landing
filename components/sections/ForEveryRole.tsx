import type { JSX } from "react";

// 자료로 이해 → 멘토와 실행 → 역량 완성: the order is the service flow.
const STEPS = [
  {
    verb: "이해",
    label: "학종 A to Z",
    title: "학종 입시 자료 구독",
    description: "학종입시개론·워크북·실무 노하우·학생부 케이스 스터디를 구독하세요.",
  },
  {
    verb: "실행",
    label: "멘토링 중개",
    title: "합격자에게 직접 상담",
    description: "직접 입시를 헤쳐간 멘토에게 합리적인 가격으로 컨설팅과 심층 탐구 도움을 받으세요.",
  },
  {
    verb: "완성",
    label: "탐구로",
    title: "학종의 진짜 가치 실현",
    description: "자료로 이해하고 경험으로 실행하며 학생만의 탐구 역량을 완성합니다.",
  },
];

export default function ForEveryRole(): JSX.Element {
  return (
    <section
      id="mentoring"
      className="scroll-mt-[56px] bg-surface px-[12px] pb-[12px]"
    >
      <div
        id="how-it-works"
        className="mx-auto max-w-[1416px] scroll-mt-[56px] rounded-[28px] bg-surface-inverse px-[24px] py-[96px] md:rounded-[40px] md:px-[64px] md:py-[140px]"
      >
        <div className="reveal mx-auto flex max-w-[980px] flex-col items-center gap-[20px] text-center">
          <div className="flex flex-col items-center gap-[12px]">
            <p className="text-[15px] font-semibold text-accent md:text-[17px]">
              이용 안내
            </p>
            <h2 className="text-[36px] leading-[1.2] font-bold tracking-[-0.035em] text-text-inverse md:text-[56px]">
              자료를 구독하고,
              <br />
              합격자와 연결되다.
            </h2>
          </div>
          <p className="max-w-[520px] text-[17px] leading-[1.6] text-text-inverse-muted md:text-[19px]">
            혼자 읽고 끝나는 자료가 아니라, 직접 해본 사람과 함께
            실행까지 이어지는 흐름입니다.
          </p>
        </div>

        <ol className="relative mt-[80px] grid grid-cols-1 gap-[56px] md:mt-[112px] md:grid-cols-3 md:gap-[40px]">
          {/* track connecting the three steps */}
          <div
            aria-hidden="true"
            className="absolute top-[27px] right-0 left-0 hidden h-px bg-border-inverse md:block"
          >
            <div className="draw-on-view h-full w-full bg-accent" />
          </div>

          {STEPS.map((step, index) => (
            <li key={step.label} className="reveal relative flex flex-col">
              <div className="flex items-center gap-[14px]">
                <span className="relative flex size-[56px] items-center justify-center rounded-full border border-accent bg-surface-inverse text-[18px] font-[820] text-text-inverse tabular-nums">
                  {index + 1}
                </span>
                <span className="text-[13px] font-bold text-text-inverse-muted md:hidden">
                  {step.verb}
                </span>
              </div>
              <p className="mt-[36px] hidden text-[64px] leading-none font-[160] tracking-[-0.04em] text-accent md:block lg:text-[84px]">
                {step.verb}
              </p>
              <p className="mt-[28px] text-[13px] font-bold text-accent md:mt-[32px]">
                {step.label}
              </p>
              <h3 className="mt-[10px] text-[22px] leading-[32px] font-bold tracking-[-0.02em] text-text-inverse md:text-[24px] md:leading-[34px]">
                {step.title}
              </h3>
              <p className="mt-[12px] max-w-[380px] text-[15px] leading-[26px] text-text-inverse-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
