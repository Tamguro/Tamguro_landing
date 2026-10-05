import type { JSX } from "react";

const MONTHS = ["8월호", "9월호", "10월호"];
// Skeleton 세특 lines for the case-study tile; the good sample marks a few.
const SHEET_LINES = [92, 100, 76, 88, 100, 64, 96, 82, 58];
const HIGHLIGHTED_LINES = [1, 4, 6];
const KNOWHOW_STEPS = [
  { label: "실험 프로그램 사용법", done: true },
  { label: "실험장비 및 실험실 대여법", done: true },
  { label: "보고서 구조 잡기", done: false },
];

function TileHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  inverse?: boolean;
}): JSX.Element {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-[14px] font-semibold text-accent md:text-[15px]">
        {eyebrow}
      </p>
      <h3
        className={`mt-[10px] text-[30px] leading-[1.2] font-bold tracking-[-0.03em] md:text-[40px] ${
          inverse ? "text-text-inverse" : "text-text-primary"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-[12px] max-w-[360px] text-[17px] leading-[1.5] whitespace-pre-line md:text-[19px] ${
          inverse ? "text-text-inverse-muted" : "text-text-secondary"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

const TILE =
  "reveal flex min-h-[460px] flex-col items-center justify-between gap-[40px] overflow-hidden rounded-[28px] px-[24px] pt-[48px] pb-[40px] md:min-h-[560px] md:px-[40px] md:pt-[64px]";

export default function Principles(): JSX.Element {
  return (
    <section
      id="hakjong-a-to-z"
      className="scroll-mt-[56px] bg-surface px-[12px] pb-[12px]"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-[8px] pb-[56px] text-center md:pb-[80px]">
        <p className="text-[15px] font-semibold text-accent md:text-[17px]">
          학종 A to Z
        </p>
        <h2 className="mt-[12px] text-[36px] leading-[1.2] font-bold tracking-[-0.035em] text-text-primary md:text-[56px]">
          구독으로 열람하는
          <br />
          학종에 대한 모든 것
        </h2>
        <p className="mt-[20px] max-w-[560px] text-[17px] leading-[1.6] text-text-secondary md:text-[19px]">
          입시 구조부터 세특 문장까지, 네 가지 자료가 하나의 구독에 담겨
          있습니다.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1416px] grid-cols-1 gap-[12px] lg:grid-cols-2">
        {/* 개론 — the whole map, A to Z */}
        <article className={`${TILE} bg-surface-inverse`}>
          <TileHeading
            eyebrow="개념"
            title="학종입시개론"
            description="학종의 모든 것, 학종에 대한 차별화된 접근"
            inverse
          />
          <p
            aria-hidden="true"
            className="text-[120px] leading-[0.85] tracking-[-0.06em] text-text-inverse select-none md:text-[176px]"
          >
            <span className="font-[900]">A</span>
            <span className="mx-[0.06em] font-[160] text-accent">to</span>
            <span className="font-[900]">Z</span>
          </p>
        </article>

        {/* 워크북 — a new issue every month */}
        <article className={`${TILE} bg-surface-muted`}>
          <TileHeading
            eyebrow="매월 추가"
            title="교세특 워크북"
            description={"워크북을 따라가면 교세특이 뚝딱,\n매월 추가되는 워크북"}
          />
          <div
            aria-hidden="true"
            className="relative h-[260px] w-[260px] md:h-[280px] md:w-[300px]"
          >
            {MONTHS.map((month, index) => {
              const latest = index === MONTHS.length - 1;
              return (
                <div
                  key={month}
                  className="absolute inset-x-0 bottom-0 flex h-[170px] flex-col justify-between rounded-[18px] border border-border-cool bg-surface p-[20px] shadow-[0_18px_30px_-20px_var(--shadow-phone)] md:h-[190px]"
                  style={{
                    transform: `translateY(${(index - 2) * 46}px) scale(${1 - (2 - index) * 0.05})`,
                    zIndex: index,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-text-primary">
                      {month}
                    </span>
                    {latest && (
                      <span className="rounded-full bg-accent px-[8px] py-[2px] text-[11px] font-bold text-text-inverse">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="text-[24px] leading-[1.2] font-bold tracking-[-0.03em] text-text-primary">
                    교세특 워크북
                    <span className="mt-[6px] block text-[13px] font-medium tracking-normal text-text-secondary">
                      따라가면 완성되는 교세특
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </article>

        {/* 노하우 — how 합격자 actually ran their 탐구 */}
        <article className={`${TILE} bg-surface-muted`}>
          <TileHeading
            eyebrow="실무"
            title="탐구로 노하우"
            description="탐구를 하기 위한 합격자의 실무 노하우"
          />
          <ul
            aria-hidden="true"
            className="flex w-full max-w-[320px] flex-col gap-[10px]"
          >
            {KNOWHOW_STEPS.map((step) => (
              <li
                key={step.label}
                className="flex items-center gap-[12px] rounded-[16px] bg-surface px-[18px] py-[16px] text-[16px] font-semibold text-text-primary shadow-[0_10px_24px_-18px_var(--shadow-phone)]"
              >
                <span
                  className={`flex size-[22px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
                    step.done
                      ? "bg-accent text-text-inverse"
                      : "border border-border-strong text-transparent"
                  }`}
                >
                  ✓
                </span>
                {step.label}
              </li>
            ))}
          </ul>
        </article>

        {/* 케이스 스터디 — good vs bad, side by side */}
        <article className={`${TILE} bg-wash`}>
          <TileHeading
            eyebrow="사례"
            title="학생부 케이스 스터디"
            description="좋은 세특과 나쁜 세특을 보면 정답이 보인다!"
          />
          <div
            aria-hidden="true"
            className="grid w-full max-w-[440px] grid-cols-2 gap-[10px]"
          >
            {[
              { label: "나쁜 세특", good: false },
              { label: "좋은 세특", good: true },
            ].map((sample) => (
              <div
                key={sample.label}
                className="flex flex-col gap-[12px] rounded-[16px] border border-border-cool bg-surface p-[18px]"
              >
                <span
                  className={`text-[12px] font-bold ${
                    sample.good ? "text-accent" : "text-text-secondary"
                  }`}
                >
                  {sample.good ? "✓" : "✕"} {sample.label}
                </span>
                {SHEET_LINES.map((width, line) => (
                  <span
                    key={line}
                    className="relative h-[8px] rounded-full bg-border-cool"
                    style={{ width: `${width}%` }}
                  >
                    {sample.good && HIGHLIGHTED_LINES.includes(line) && (
                      <span className="absolute inset-y-0 left-[10%] w-[60%] rounded-full bg-accent-soft" />
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
