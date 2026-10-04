"use client";

import type { JSX } from "react";
import { useEffect, useRef, useState } from "react";
import PhoneMockup, { type PhoneMockupVariant } from "@/components/PhoneMockup";

const ROLE_STORIES: {
  number: string;
  role: string;
  title: string;
  description: string;
  variant: PhoneMockupVariant;
}[] = [
  {
    number: "01",
    role: "학생",
    title: "탐구 경험에 집중",
    description: "자료와 멘토를 탐색하고 자신의 학습 흐름을 한눈에 확인합니다.",
    variant: "student-app-experience",
  },
  {
    number: "02",
    role: "학부모",
    title: "자녀의 여정을 함께",
    description:
      "연결된 자녀를 기준으로 필요한 소통과 결제 과정을 간결하게 관리합니다.",
    variant: "parent-app-experience",
  },
  {
    number: "03",
    role: "멘토",
    title: "소통에 집중",
    description: "멘티와 학부모의 채팅, 멘티 확인, 프로필 관리에 집중합니다.",
    variant: "mentor-app-experience",
  },
];

function PhoneStage({
  variant,
  className = "",
}: {
  variant: PhoneMockupVariant;
  className?: string;
}): JSX.Element {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* crisp halo behind the phone */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft lg:size-[345px]"
      />
      <div className="relative">
        <PhoneMockup variant={variant} size="compact" />
      </div>
    </div>
  );
}

export default function AppExperience(): JSX.Element {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Toss-style: the phone stays pinned while the story on the left scrolls;
  // whichever step crosses the middle of the viewport drives the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const step of stepRefs.current) {
      if (step) observer.observe(step);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="app-experience"
      className="scroll-mt-[56px] bg-surface px-[20px] pt-[140px] pb-[80px] md:px-[40px] md:pt-[200px] md:pb-[120px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <p className="text-[15px] font-semibold text-accent md:text-[17px]">
            앱 화면
          </p>
          <h2 className="mt-[12px] text-[36px] leading-[1.2] font-bold tracking-[-0.035em] text-text-primary md:text-[56px]">
            각자의 화면에서,
            <br />
            같은 목표를 향해
          </h2>
          <p className="mt-[20px] max-w-[520px] text-[17px] leading-[1.6] text-text-secondary md:text-[19px]">
            학생, 학부모, 멘토는 서로 다른 화면을 사용하지만 하나의 탐구 성장
            경험으로 연결됩니다.
          </p>
        </div>

        <div className="mt-[96px] lg:mt-[40px] lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-[64px]">
          <ol className="flex flex-col gap-[120px] lg:gap-0">
            {ROLE_STORIES.map((story, index) => (
              <li
                key={story.number}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                data-index={index}
                className="flex flex-col items-center gap-[56px] text-center lg:min-h-[86vh] lg:flex-row lg:items-center lg:text-left"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    active === index ? "lg:opacity-100" : "lg:opacity-25"
                  }`}
                >
                  <p className="text-[72px] leading-none font-[820] tracking-[-0.04em] text-accent tabular-nums md:text-[88px]">
                    {story.number}
                  </p>
                  <p className="mt-[20px] text-[17px] font-bold text-accent md:text-[18px]">
                    {story.role}
                  </p>
                  <h3 className="mt-[12px] text-[32px] leading-[1.25] font-bold tracking-[-0.03em] text-text-primary md:text-[44px]">
                    {story.title}
                  </h3>
                  <p className="mx-auto mt-[16px] max-w-[440px] text-[17px] leading-[1.65] text-text-secondary md:text-[19px] lg:mx-0">
                    {story.description}
                  </p>
                </div>
                {/* inline phone on small screens */}
                <PhoneStage variant={story.variant} className="relative lg:hidden" />
              </li>
            ))}
          </ol>

          {/* pinned phone on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-300px)] h-[640px]">
              {ROLE_STORIES.map((story, index) => (
                <PhoneStage
                  key={story.variant}
                  variant={story.variant}
                  className={`absolute inset-0 transition-[opacity,transform] duration-500 ${
                    active === index
                      ? "opacity-100"
                      : "pointer-events-none translate-y-[16px] opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
