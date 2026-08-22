"use client";

import type { JSX } from "react";
import toast from "react-hot-toast";

const RELEASE_MESSAGE = "아직 출시 기간입니다. 조금만 기다려 주세요!";

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="bg-surface px-[20px] md:px-[80px]"
    >
      <div className="mx-auto max-w-[1600px] border-t border-border-default" />
      <div className="mx-auto max-w-[1600px] py-[112px] md:py-[185px]">
        <div className="flex flex-col gap-[40px] rounded-[32px] bg-accent-soft p-[40px] md:p-[72px] lg:flex-row lg:items-stretch lg:gap-0">
          {/* Intro */}
          <div className="flex flex-col justify-center gap-[16px] lg:w-[420px] lg:pr-[40px]">
            <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-accent">
              START WITH TAMGURO
            </p>
            <h2 className="font-['Pretendard'] text-[28px] leading-[38px] font-bold text-text-primary md:text-[38px] md:leading-[52px]">
              학종의 진짜 가치를
              <br />
              탐구로에서 시작하세요.
            </h2>
            <p className="font-['Pretendard'] text-[14px] leading-[23px] text-text-secondary">
              *탐구로는 초중고등교육법을 준수합니다.
              <br />
              ‘학종 A to Z’ 자료는 탐구로 입시 연구팀이 자체 개발한 가상 생기부입니다.
            </p>
          </div>

          {/* CTA columns */}
          <div className="grid grid-cols-1 gap-[32px] border-t border-accent-soft pt-[32px] sm:grid-cols-2 lg:grid-cols-2 lg:flex-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-[40px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-accent">
                  학종 A to Z
                </p>
                <p className="font-['Pretendard'] text-[22px] leading-[32px] font-bold text-text-primary">
                  매월 쌓이는 실전 자료를
                  <br />
                  지금 확인하세요.
                </p>
              </div>
              <button
                type="button"
                onClick={() => toast(RELEASE_MESSAGE, { id: "release-notice" })}
                className="mt-auto flex h-[52px] w-full max-w-[220px] cursor-pointer items-center justify-center rounded-[14px] bg-action-primary px-[24px] font-['Pretendard'] text-[15px] font-bold whitespace-nowrap text-text-inverse transition-opacity hover:opacity-90"
              >
                자료 구독하기
              </button>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Pretendard'] text-[13px] font-bold whitespace-nowrap text-accent">
                  멘토링
                </p>
                <p className="font-['Pretendard'] text-[22px] leading-[32px] font-bold text-text-primary">
                  직접 해본 합격자에게
                  <br />
                  실전 답을 얻으세요.
                </p>
              </div>
              <button
                type="button"
                onClick={() => toast(RELEASE_MESSAGE, { id: "release-notice" })}
                className="mt-auto flex h-[52px] w-full max-w-[220px] cursor-pointer items-center justify-center rounded-[14px] bg-surface px-[24px] font-['Pretendard'] text-[15px] font-bold whitespace-nowrap text-text-primary transition-colors hover:bg-surface-hover"
              >
                멘토 찾아보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
