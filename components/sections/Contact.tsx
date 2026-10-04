import type { JSX } from "react";
import ReleaseButton from "@/components/ReleaseButton";
import { PILL_PRIMARY } from "@/lib/ui";

const OFFERS = [
  {
    eyebrow: "학종 A to Z",
    title: "매월 쌓이는 실전 자료를\n지금 확인하세요.",
    action: "자료 구독하기",
    tone: "bg-wash",
  },
  {
    eyebrow: "멘토링",
    title: "직접 해본 합격자에게\n실전 답을 얻으세요.",
    action: "멘토 찾아보기",
    tone: "bg-surface-muted",
  },
];

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="scroll-mt-[56px] bg-surface px-[12px]">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-[8px] pt-[140px] pb-[56px] text-center md:pt-[200px] md:pb-[80px]">
        <p className="text-[15px] font-semibold text-accent md:text-[17px]">
          시작하기
        </p>
        <h2 className="mt-[12px] text-[36px] leading-[1.2] font-bold tracking-[-0.035em] text-text-primary md:text-[56px]">
          학종의 <span className="highlighter">진짜 가치</span>를
          <br />
          탐구로에서 시작하세요.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1416px] grid-cols-1 gap-[12px] md:grid-cols-2">
        {OFFERS.map((offer) => (
          <article
            key={offer.eyebrow}
            className={`reveal flex min-h-[360px] flex-col items-center justify-center rounded-[28px] px-[24px] py-[64px] text-center md:min-h-[420px] ${offer.tone}`}
          >
            <p className="text-[14px] font-semibold text-accent md:text-[15px]">
              {offer.eyebrow}
            </p>
            <h3 className="mt-[12px] text-[28px] leading-[1.3] font-bold tracking-[-0.03em] whitespace-pre-line text-text-primary md:text-[36px]">
              {offer.title}
            </h3>
            <ReleaseButton className={`${PILL_PRIMARY} mt-[32px]`}>
              {offer.action}
            </ReleaseButton>
          </article>
        ))}
      </div>

      <p className="mx-auto max-w-[980px] px-[8px] pt-[32px] pb-[96px] text-center text-[13px] leading-[1.7] text-text-secondary md:pb-[140px]">
        탐구로는 초중고등교육법을 준수합니다. ‘학종 A to Z’ 자료는 탐구로
        연구팀이 자체 제작한 자료입니다.
      </p>
    </section>
  );
}
