import type { JSX } from "react";

export default function Statement(): JSX.Element {
  return (
    <section className="bg-surface px-[20px] py-[140px] md:py-[220px]">
      <p className="ink-fill-on-view mx-auto max-w-[1000px] text-center text-[34px] leading-[1.3] font-bold tracking-[-0.035em] text-text-primary md:text-[56px] lg:text-[64px]">
        세특 한 줄의 차이는
        <br />
        탐구의 과정에서 나옵니다.
        <br />
        탐구로는 그 과정을 함께합니다.
      </p>
    </section>
  );
}
