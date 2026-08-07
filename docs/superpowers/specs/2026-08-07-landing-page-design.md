# 탐구로 랜딩 페이지 (L02) 설계 문서

- 날짜: 2026-08-07
- Figma: https://www.figma.com/design/7f53GVdtUDCmHuJgO8sscT/Untitled?node-id=163-2 (프레임 "L02 New", node id `182:7`)
- 대상 디렉토리: `/Users/vincedev/Desktop/tamguro/tamguro-landing` (신규 프로젝트, 빈 디렉토리에서 시작)

## 배경 및 목적

탐구로(TamGuro)는 학원·학교, 학생·학부모, 검증된 멘토를 연결하는 프라이빗 탐구 교육 플랫폼이다. 이 문서는 Figma의 "L02 New" 프레임에 정의된 단일 페이지 마케팅 랜딩 사이트를 Next.js + Tailwind CSS로 구현하기 위한 설계를 다룬다.

## 기술 스택

- Next.js (App Router), TypeScript
- Tailwind CSS (유틸리티 클래스 기반, CSS Module 미사용)
- 폰트: Pretendard (npm 패키지 또는 `next/font/local`로 로드)
- 정적 페이지 — 백엔드/CMS/데이터 페칭 없음

## 페이지 구조

단일 라우트 `app/page.tsx`가 `components/sections/` 하위의 섹션 컴포넌트들을 순서대로 조합한다. Figma 프레임 순서와 1:1 대응:

1. **Header** (`182:8`) — 스티키 헤더. 브랜드 마크 + 브랜드명, 우측 내비게이션 4개 링크(브랜드 / 차별점 / 앱 화면 / 문의)
2. **Hero** (`182:19`, `01 · Hero`) — 배지("프라이빗 탐구 교육 네트워크"), 헤드라인, 서브텍스트, CTA 버튼 2개(학원·학교 제휴 문의 / 멘토 등록 문의), 안내 문구, 우측에 `PhoneMockup` 2개(학생 홈, 학부모 홈, 서로 다른 높이로 겹쳐 배치)
3. **Principles** (`182:403`, `02 · 원칙`) — 에디토리얼 레이아웃. 좌측 세로 라벨/헤드라인, 우측에 4개 원칙 항목(01~04, 각 제목 + 설명)
4. **AppExperience** (`182:404`, `03 · 앱 경험`) — 3개의 역할 스토리 행(학생 → 학부모 → 멘토), 각 행은 `PhoneMockup` + 번호/역할명/제목/설명으로 구성. 좌우 교차 배치(학생: 폰 우측, 학부모: 폰 좌측, 멘토: 폰 우측)
5. **ForEveryRole** (`182:405`, `04 · 역할`) — 헤드라인 + 3컬럼(학원·학교 / 학생·학부모 / 멘토), 각 컬럼 제목 + 부제 + 설명, 컬럼 사이 세로 구분선
6. **Contact** (`182:406`, `05 · 문의`) — CTA 밴드. 헤드라인 + 2개 문의 블록(학원·학교 파트너 문의 CTA, 멘토 등록 CTA), 중앙 세로 구분선
7. **Footer** (`182:407`) — 브랜드 마크/이름, 태그라인, 우측에 내비게이션 요약 + 안내 문구

## 공통 컴포넌트: PhoneMockup

Figma의 가짜 앱 화면들은 이미지가 아니라 코드로 정밀하게 재현한다. `components/PhoneMockup.tsx`가 `variant` prop을 받아 화면 콘텐츠를 렌더링:

- `variant`: `"student-home"` | `"parent-home"` | `"student-app-experience"` | `"parent-app-experience"` | `"mentor-app-experience"`
- 공통 프레임(상태바, 헤더, 하단 네비게이션)은 내부 하위 컴포넌트로 공유하고, 본문(Body)만 variant별로 분기
- Hero에서는 풀사이즈(270px 폭 기준), AppExperience에서는 축소 사이즈(176px 폭 기준)로 각각 스케일링 — Tailwind 클래스 조합 또는 prop으로 사이즈 제어

## 스타일 & 디자인 토큰

- 구현 시 `get_design_context` / `get_variable_defs`로 Figma의 실제 색상·타이포·간격 값을 확인하여 `tailwind.config`에 반영
- 폰트는 Pretendard, 헤드라인/본문 크기는 Figma 텍스트 노드 값 기준

## 반응형

- 데스크톱 기준(1440px) 레이아웃을 기본으로 하되, Tailwind 브레이크포인트로 모바일까지 자연스럽게 대응
- 모바일에서는 좌우 배치(Hero의 텍스트+폰, AppExperience의 교차 배치, ForEveryRole의 3컬럼)를 세로 스택으로 전환
- PhoneMockup은 모바일에서 비율 유지한 채 축소

## 인터랙션

- 헤더 내비게이션 4개 링크 → 각 섹션 id로 부드러운 스크롤 이동(`scroll-smooth` + anchor `href="#section-id"`)
- CTA 버튼 4개(Hero 2개, Contact 2개) → 현재는 모두 `#contact` 섹션으로 부드러운 스크롤 이동하는 placeholder. 실제 폼 제출/메일 연동은 이번 스코프에 포함하지 않음

## 스코프 제외 사항

- 문의 폼 제출 로직, 이메일 연동, 백엔드 API
- 다국어(i18n) 지원
- 헤더/Hero 외 페이지(예: 소개, 로그인 등 별도 라우트)

## 테스트 방침

- 시각적 확인 위주: `npm run dev`로 로컬 구동 후 브라우저에서 데스크톱/모바일 뷰 확인, Figma 스크린샷과 비교
- 별도의 유닛 테스트는 이 스코프에서 작성하지 않음(정적 마케팅 페이지)
