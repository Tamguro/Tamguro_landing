import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-[#e8e5db] bg-white px-[20px] py-[48px] md:px-[80px]">
      <div className="flex flex-col gap-[32px] md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[12px]">
            <p className="font-['Pretendard'] text-[28px] font-bold whitespace-nowrap text-[#ff9500]">
              TG
            </p>
            <p className="font-['Pretendard'] text-[19px] font-bold whitespace-nowrap text-[#1f2430]">
              탐구로
            </p>
          </div>
          <p className="font-['Pretendard'] text-[13px] whitespace-nowrap text-[#667085]">
            신뢰할 수 있는 탐구 교육의 연결
          </p>
        </div>

        <div className="flex flex-col gap-[8px] md:items-end">
          <p className="font-['Pretendard'] text-[13px] font-medium whitespace-nowrap text-[#1f2430]">
            브랜드 &nbsp;&nbsp; 차별점 &nbsp;&nbsp; 앱 화면 &nbsp;&nbsp; 문의
          </p>
          <p className="font-['Pretendard'] text-[12px] whitespace-nowrap text-[#667085]">
            학생과 학부모는 소속 교육기관의 안내를 통해 이용합니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
