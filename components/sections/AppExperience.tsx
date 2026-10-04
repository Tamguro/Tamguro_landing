"use client";

import type { CSSProperties, JSX } from "react";
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

const LAST = ROLE_STORIES.length - 1;
// Share of each step's scroll distance where the panel holds still before
// and after moving, so every role "lands" instead of drifting past.
const HOLD = 0.2;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));
const smoothstep = (t: number) => t * t * (3 - 2 * t);

/** Raw scroll position (0 → LAST) to an eased one that dwells at each step. */
function ease(raw: number): number {
  const step = Math.min(Math.floor(raw), LAST - 1);
  const t = clamp((raw - step - HOLD) / (1 - 2 * HOLD));
  return step + smoothstep(t);
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function AppExperience(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!section || !stage || !track) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const panels = Array.from(track.children) as HTMLElement[];
    let frame = 0;
    let idle = 0;

    const pinnedDistance = () => section.offsetHeight - stage.offsetHeight;

    const render = () => {
      frame = 0;
      if (!desktop.matches) {
        // Small screens: native horizontal swipe; the dots follow the scroll.
        const pitch = panels[1].offsetLeft - panels[0].offsetLeft;
        setActive(clamp(Math.round(track.scrollLeft / pitch), 0, LAST));
        return;
      }
      const raw =
        clamp(-section.getBoundingClientRect().top / pinnedDistance()) * LAST;
      const eased = ease(raw);
      section.style.setProperty("--e", eased.toFixed(4));
      panels.forEach((panel, i) => {
        const d = clamp(eased - i, -1, 1);
        panel.style.setProperty("--d", d.toFixed(4));
        panel.style.setProperty("--ad", Math.abs(d).toFixed(4));
      });
      setActive(Math.round(eased));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    // When scrolling settles between two roles, glide to the nearest one —
    // once. While that glide runs, its own scroll events must not re-snap.
    let snapping = false;
    let snapTarget = 0;
    let snapGuard = 0;

    const releaseSnap = () => {
      snapping = false;
      window.clearTimeout(snapGuard);
    };

    const snap = () => {
      if (!desktop.matches) return;
      const rect = section.getBoundingClientRect();
      const distance = pinnedDistance();
      const progress = -rect.top / distance;
      if (progress <= 0 || progress >= 1) return;
      const raw = progress * LAST;
      const target = Math.round(raw);
      if (Math.abs(raw - target) < 0.02) return;
      snapping = true;
      snapTarget = Math.round(window.scrollY + rect.top + (target / LAST) * distance);
      snapGuard = window.setTimeout(releaseSnap, 1200);
      window.scrollTo({
        top: snapTarget,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    };

    const onScroll = () => {
      schedule();
      if (snapping) {
        if (Math.abs(window.scrollY - snapTarget) < 2) releaseSnap();
        return;
      }
      window.clearTimeout(idle);
      idle = window.setTimeout(snap, 200);
    };

    // The reader takes over: drop any pending or running glide.
    const onUserInput = () => {
      releaseSnap();
      window.clearTimeout(idle);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onUserInput, { passive: true });
    window.addEventListener("touchstart", onUserInput, { passive: true });
    window.addEventListener("keydown", onUserInput);
    window.addEventListener("resize", schedule);
    track.addEventListener("scroll", schedule, { passive: true });
    desktop.addEventListener("change", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idle);
      releaseSnap();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onUserInput);
      window.removeEventListener("touchstart", onUserInput);
      window.removeEventListener("keydown", onUserInput);
      window.removeEventListener("resize", schedule);
      track.removeEventListener("scroll", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, []);

  const goTo = (index: number) => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!section || !stage || !track) return;
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const top = window.scrollY + section.getBoundingClientRect().top;
      const distance = section.offsetHeight - stage.offsetHeight;
      window.scrollTo({ top: top + (index / LAST) * distance, behavior });
    } else {
      const panel = track.children[index] as HTMLElement;
      track.scrollTo({ left: panel.offsetLeft - track.offsetLeft, behavior });
    }
  };

  return (
    <>
      <div
        id="app-experience"
        className="scroll-mt-[56px] bg-surface px-[20px] pt-[140px] md:px-[40px] md:pt-[200px]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
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
      </div>

      {/* Desktop: a tall runway; the stage pins while vertical scroll drives a horizontal track. */}
      <section
        ref={sectionRef}
        aria-label="역할별 앱 화면"
        className="app-rail relative bg-surface pt-[56px] pb-[96px] lg:h-[340vh] lg:pt-0 lg:pb-0"
        style={{ "--e": 0 } as CSSProperties}
      >
        <div
          ref={stageRef}
          className="lg:sticky lg:top-[56px] lg:flex lg:h-[calc(100vh-56px)] lg:flex-col lg:justify-center lg:overflow-hidden"
        >
          <ol
            ref={trackRef}
            className="app-rail-track flex snap-x snap-mandatory scroll-px-[20px] gap-[12px] overflow-x-auto px-[20px] [scrollbar-width:none] lg:w-[300%] lg:snap-none lg:gap-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {ROLE_STORIES.map((story, index) => (
              <li
                key={story.number}
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${ROLE_STORIES.length}: ${story.role}`}
                className="app-rail-panel flex w-[86%] max-w-[420px] shrink-0 snap-center flex-col items-center gap-[40px] overflow-hidden rounded-[28px] bg-surface-muted px-[24px] pt-[48px] pb-[40px] text-center lg:w-1/3 lg:max-w-none lg:flex-row lg:justify-center lg:gap-[96px] lg:overflow-visible lg:rounded-none lg:bg-transparent lg:px-[40px] lg:py-0 lg:text-left"
                style={{ "--d": index, "--ad": index ? 1 : 0 } as CSSProperties}
              >
                <div className="app-rail-copy lg:w-[460px]">
                  <p className="app-rail-number text-[72px] leading-none font-[820] tracking-[-0.04em] text-accent tabular-nums md:text-[88px] lg:text-[120px]">
                    {story.number}
                  </p>
                  <p className="mt-[20px] text-[17px] font-bold text-accent md:text-[18px]">
                    {story.role}
                  </p>
                  <h3 className="mt-[12px] text-[30px] leading-[1.25] font-bold tracking-[-0.03em] text-text-primary md:text-[44px]">
                    {story.title}
                  </h3>
                  <p className="mx-auto mt-[16px] max-w-[440px] text-[16px] leading-[1.65] text-text-secondary md:text-[19px] lg:mx-0">
                    {story.description}
                  </p>
                </div>

                <div className="relative flex shrink-0 items-center justify-center [perspective:1400px]">
                  <div
                    aria-hidden="true"
                    className="app-rail-halo absolute top-1/2 left-1/2 size-[240px] rounded-full bg-accent-soft md:size-[300px] lg:size-[400px]"
                  />
                  <div className="app-rail-phone relative w-[220px] md:w-auto">
                    <PhoneMockup variant={story.variant} size="compact" />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Progress: one segment per role; click to jump. */}
          <div className="mx-auto mt-[28px] flex w-full max-w-[560px] gap-[8px] px-[20px] lg:mt-[40px]">
            {ROLE_STORIES.map((story, index) => (
              <button
                key={story.number}
                type="button"
                onClick={() => goTo(index)}
                aria-current={active === index ? "step" : undefined}
                className="group flex flex-1 cursor-pointer flex-col gap-[10px] rounded-[6px] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span className="relative h-[3px] w-full overflow-hidden rounded-full bg-border-default">
                  <span
                    className="app-rail-fill absolute inset-0 origin-left rounded-full bg-accent"
                    style={{ "--i": index } as CSSProperties}
                    data-active={active >= index}
                  />
                </span>
                <span
                  className={`text-[13px] font-semibold transition-colors ${
                    active === index
                      ? "text-text-primary"
                      : "text-text-secondary group-hover:text-text-primary"
                  }`}
                >
                  <span className="mr-[6px] text-accent tabular-nums">
                    {story.number}
                  </span>
                  {story.role}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
