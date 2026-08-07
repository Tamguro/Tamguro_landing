# 탐구로 랜딩 페이지 (L02) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the "탐구로" one-page marketing landing site (Figma frame "L02 New", node `182:7`, file key `7f53GVdtUDCmHuJgO8sscT`) as a Next.js App Router + Tailwind CSS site.

**Architecture:** A single route (`app/page.tsx`) composes seven section components (`components/sections/*.tsx`) in Figma order. A shared `components/PhoneMockup.tsx` renders the fake in-app screens used by the Hero and App Experience sections via a `variant` prop. All Figma pixel values (colors, spacing, type scale, exact copy) are pulled live per-section using the Figma MCP `get_design_context` tool against the node IDs listed below — do not guess values.

**Tech Stack:** Next.js (App Router, TypeScript), Tailwind CSS, Pretendard font (npm package), no test framework (static marketing page — verification is `npm run build` + visual check against Figma).

## Global Constraints

- Figma file key: `7f53GVdtUDCmHuJgO8sscT`. All node IDs below belong to this file.
- Font: Pretendard, loaded via the `pretendard` npm package + `next/font/local` (per spec).
- Fully static — no backend, no form submission, no i18n, no routes beyond `/`.
- All 4 CTA buttons (Hero ×2, Contact ×2) are placeholders: `<a href="#contact">` smooth-scrolling to the Contact section. No mailto, no modal.
- Header nav (브랜드 / 차별점 / 앱 화면 / 문의) are anchor links to section `id`s, smooth scroll via `scroll-smooth` on `<html>`.
- Responsive: desktop layout matches the 1440px Figma grid; Tailwind breakpoints collapse side-by-side layouts to stacked layouts on mobile (`sm`/`md`).
- `PhoneMockup` is the single component for all fake app screens — do not duplicate phone-frame markup per section.
- Before implementing any section, call `mcp__claude_ai_Figma__get_design_context` with the section's `nodeId` and `fileKey: "7f53GVdtUDCmHuJgO8sscT"` to get exact colors/spacing/type — adapt the returned reference code to this project's conventions (Tailwind utility classes, existing components), don't paste it verbatim.

---

### Task 1: Project scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `.gitignore`
- Modify: none

**Interfaces:**
- Consumes: nothing (first task)
- Produces: a runnable Next.js dev server (`npm run dev`) serving an empty `app/page.tsx` at `/`; Tailwind classes available project-wide via `app/globals.css`'s `@tailwind` directives; `pretendard` font available as a CSS variable `--font-pretendard` for later tasks to reference in `tailwind.config.ts` under `fontFamily.sans`.

- [ ] **Step 1: Scaffold with create-next-app**

Run from the project root (already git-initialized, currently only contains `docs/`):

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --eslint --use-npm
```

When prompted about the non-empty directory, confirm yes (only `docs/` and `.git/` exist).

- [ ] **Step 2: Install Pretendard**

```bash
npm install pretendard
```

- [ ] **Step 3: Wire Pretendard into the root layout**

Replace the contents of `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/public/variable/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "탐구로 | 프라이빗 탐구 교육 네트워크",
  description:
    "탐구로는 학원·학교, 학생과 학부모, 검증된 멘토를 연결하는 프라이빗 탐구 교육 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${pretendard.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Register the font family in Tailwind config**

Edit `tailwind.config.ts` so `theme.extend.fontFamily` includes:

```ts
fontFamily: {
  sans: ["var(--font-pretendard)", "sans-serif"],
},
```

- [ ] **Step 5: Clear the default page scaffold**

Replace `app/page.tsx` with:

```tsx
export default function Home() {
  return <main></main>;
}
```

- [ ] **Step 6: Verify the dev server boots and builds cleanly**

```bash
npm run build
```

Expected: build succeeds with no type or lint errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js + Tailwind project with Pretendard font"
```

---

### Task 2: PhoneMockup shared component (frame chrome only)

**Files:**
- Create: `components/PhoneMockup.tsx`

**Interfaces:**
- Consumes: Tailwind classes from Task 1's config; no other project code.
- Produces: `PhoneMockup` React component with this signature, used by Task 3 (Hero) and Task 5 (App Experience):

```ts
type PhoneMockupVariant =
  | "student-home"
  | "parent-home"
  | "student-app-experience"
  | "parent-app-experience"
  | "mentor-app-experience";

interface PhoneMockupProps {
  variant: PhoneMockupVariant;
  size?: "full" | "compact"; // "full" = Hero (270px frame width), "compact" = App Experience (176px frame width)
  navItems: string[]; // bottom nav labels, e.g. ["자료", "홈", "멘토"] — always 3 items
}

export default function PhoneMockup(props: PhoneMockupProps): JSX.Element;
```

Body content per variant is added in Task 3 and Task 5 — this task only builds the reusable frame (rounded phone bezel, status bar, bottom nav) and a `variant`-driven placeholder body so the component compiles and renders standalone.

- [ ] **Step 1: Fetch exact frame chrome from Figma**

Call `mcp__claude_ai_Figma__get_design_context` with `nodeId: "182:29"` (Phone · 학생 홈, inside Hero) and `fileKey: "7f53GVdtUDCmHuJgO8sscT"` to get the exact bezel radius, status bar layout (`9:41` + signal icons), and bottom nav styling.

- [ ] **Step 2: Implement the frame component**

Create `components/PhoneMockup.tsx` with the phone bezel (rounded-[2.5rem] border frame + home-indicator bar), a status bar row (`9:41` left, signal/battery glyphs right), a slot for section-specific body content (render `null` for now — filled in by Task 3/5), and a bottom nav row whose 3 labels are passed in via a `navItems: string[]` prop. Use the exact spacing/colors returned by Step 1, converted to Tailwind arbitrary values where no exact utility exists (e.g. `w-[270px]`).

Size handling: `size === "full"` → outer frame `w-[270px]`; `size === "compact"` → outer frame `w-[176px]` with all inner spacing scaled by the same ratio Figma uses (compact frames are literally the full frames scaled ~0.65× per the metadata dimensions — reuse one JSX tree with a Tailwind class map keyed by `size`, not two separate trees).

- [ ] **Step 3: Render it from a scratch page to check compilation**

Temporarily add to `app/page.tsx`:

```tsx
import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
  return (
    <main className="p-10">
      <PhoneMockup variant="student-home" navItems={["자료", "홈", "멘토"]} />
    </main>
  );
}
```

- [ ] **Step 4: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000` and confirm a phone bezel with status bar and bottom nav renders without console errors. Stop the dev server after checking.

- [ ] **Step 5: Revert the temporary page.tsx change**

Restore `app/page.tsx` to the empty `<main></main>` from Task 1 Step 5 (the real Hero section replaces this in Task 3).

- [ ] **Step 6: Commit**

```bash
git add components/PhoneMockup.tsx
git commit -m "feat: add PhoneMockup shared frame component"
```

---

### Task 3: Header + Hero sections

**Files:**
- Create: `components/sections/Header.tsx`, `components/sections/Hero.tsx`
- Modify: `app/page.tsx`, `components/PhoneMockup.tsx` (add `student-home` / `parent-home` body content)

**Interfaces:**
- Consumes: `PhoneMockup` from Task 2.
- Produces: `Header` (no props) and `Hero` (no props) default-export components, imported by `app/page.tsx` in Task 8. `Header` renders nav links with `href="#principles"`, `href="#app-experience"`, `href="#contact"` and a brand link `href="#"` — these anchor IDs must match the `id` attributes set on the corresponding sections in Tasks 4/5/7.

- [ ] **Step 1: Fetch Header design context**

Call `get_design_context` with `nodeId: "182:8"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`.

- [ ] **Step 2: Implement Header**

Create `components/sections/Header.tsx`: sticky top bar (`sticky top-0 z-50`), brand mark + "탐구로" wordmark on the left, nav on the right with 4 links using the exact copy from the Figma metadata: "브랜드" (`href="#hero"`), "차별점" (`href="#principles"`), "앱 화면" (`href="#app-experience"`), "문의" (`href="#contact"`). Match colors/spacing from Step 1's response. Collapse the nav to just the brand mark on mobile (`hidden md:flex` on the nav list) since no mobile menu was scoped.

- [ ] **Step 3: Fetch Hero design context**

Call `get_design_context` with `nodeId: "182:19"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`.

- [ ] **Step 4: Implement Hero**

Create `components/sections/Hero.tsx` with `id="hero"`:
- Badge: "프라이빗 탐구 교육 네트워크"
- Headline: "탐구의 시작부터 성장까지 신뢰할 수 있는 연결"
- Subtext: "탐구로는 학원·학교, 학생과 학부모, 검증된 멘토를 연결하는 프라이빗 탐구 교육 플랫폼입니다."
- Two CTAs, both `<a href="#contact">`: "학원·학교 제휴 문의" (primary style) and "멘토 등록 문의" (secondary style)
- Note text: "학생과 학부모는 소속 교육기관의 안내를 통해 이용합니다."
- Two `<PhoneMockup variant="student-home" size="full" navItems={["자료", "홈", "멘토"]} />` and `<PhoneMockup variant="parent-home" size="full" navItems={["자녀", "홈", "멘토"]} />`, absolutely positioned/offset to match the overlapping layout in the Figma screenshot (학생 홈 lower-left, 학부모 홈 upper-right, per node `182:29` at `x:865,y:58` and node `182:77` at `x:1104,y:130` relative to the Hero frame). On mobile, stack them or hide the second phone (`hidden lg:block` on the 학부모 phone) since the spec only requires the layout to "look natural," not pixel-match on small screens.
- Two-column layout: text column left, phone column right, `flex-col lg:flex-row` for mobile stacking.

- [ ] **Step 5: Add student-home and parent-home bodies to PhoneMockup**

Edit `components/PhoneMockup.tsx`: implement the `"student-home"` variant body (Current Period card "중간고사 준비 · D-12" / "8월 3일 — 8월 14일", Recent Materials grid with two cards "화학 우수 탐구 사례 20선" / "좋은 탐구 질문의 4가지 조건", Subscription card "탐구로 자료 구독" with "구독 중" badge) and `"parent-home"` variant body (Family Summary "자녀 2명 중 1명 구독 중", two Child rows "김학생 · 고등학교 2학년 · 구독 중" and "김하늘 · 중학교 3학년 · 미구독") — copy exactly as captured in the Figma metadata for nodes `182:30`–`182:76` (학생 홈) and `182:78`–`182:120` (학부모 홈).

- [ ] **Step 6: Wire into page.tsx**

```tsx
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 7: Verify**

```bash
npm run build
```

Expected: succeeds with no errors. Then `npm run dev`, open `http://localhost:3000`, confirm Header + Hero render, nav links scroll (will 404-scroll to nothing until later sections exist — acceptable at this stage), phones show real content. Stop the dev server.

- [ ] **Step 8: Commit**

```bash
git add app/page.tsx components/sections/Header.tsx components/sections/Hero.tsx components/PhoneMockup.tsx
git commit -m "feat: implement Header and Hero sections"
```

---

### Task 4: Principles section

**Files:**
- Create: `components/sections/Principles.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: nothing beyond Tailwind config.
- Produces: `Principles` default-export component (no props), `id="principles"`, imported by `app/page.tsx`.

- [ ] **Step 1: Fetch design context**

Call `get_design_context` with `nodeId: "182:403"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`.

- [ ] **Step 2: Implement Principles**

Create `components/sections/Principles.tsx` with `id="principles"`. Left column: eyebrow "PRINCIPLES", headline "신뢰를 설계하는 네 가지 원칙", subtext "프라이빗 서비스에 필요한 것은 더 많은 기능보다 더 높은 신뢰입니다.", and a large vertical watermark word "TRUST". Right column: 4 stacked rows, each with a top divider line, a two-digit number (`01`–`04`), a title, and a description:

1. `01` / "초대 기반의 신뢰" / "교육기관이 안내한 사용자와 검증된 멘토가 안전한 환경에서 연결됩니다."
2. `02` / "교육기관과 함께 운영" / "학원·학교의 교육 경험을 해치지 않고 학생의 탐구 여정을 확장합니다."
3. `03` / "역할에 맞는 경험" / "학생, 학부모, 멘토가 각자 필요한 정보와 소통에 집중합니다."
4. `04` / "탐구와 멘토링의 연결" / "자료 탐색과 멘토 소통이 하나의 성장 경험으로 이어집니다."

Layout: `grid grid-cols-1 lg:grid-cols-2` (stacks on mobile, side-by-side on desktop), matching colors/spacing from Step 1.

- [ ] **Step 3: Wire into page.tsx**

Add `import Principles from "@/components/sections/Principles";` and `<Principles />` after `<Hero />`.

- [ ] **Step 4: Verify**

```bash
npm run build
```

Expected: succeeds. Then visually check in the browser that the Header's "차별점" link now scrolls to this section.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx components/sections/Principles.tsx
git commit -m "feat: implement Principles section"
```

---

### Task 5: App Experience section

**Files:**
- Create: `components/sections/AppExperience.tsx`
- Modify: `components/PhoneMockup.tsx` (add the 3 `-app-experience` variant bodies), `app/page.tsx`

**Interfaces:**
- Consumes: `PhoneMockup` from Task 2 (with `size="compact"`).
- Produces: `AppExperience` default-export component (no props), `id="app-experience"`, imported by `app/page.tsx`.

- [ ] **Step 1: Fetch design context**

Call `get_design_context` with `nodeId: "182:404"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`.

- [ ] **Step 2: Implement AppExperience shell**

Create `components/sections/AppExperience.tsx` with `id="app-experience"`. Header row: eyebrow "APP EXPERIENCE", headline "각자의 화면에서, 같은 목표를 향해", subtext "학생, 학부모, 멘토는 서로 다른 화면을 사용하지만 하나의 탐구 성장 경험으로 연결됩니다." Below it, 3 role-story rows, each separated by a divider line:

1. 학생 row — phone on the right (desktop), text on the left: `01` / "학생" / "탐구 경험에 집중" / "자료와 멘토를 탐색하고 자신의 학습 흐름을 한눈에 확인합니다." Phone: `<PhoneMockup variant="student-app-experience" size="compact" navItems={["자료", "홈", "멘토"]} />`
2. 학부모 row — phone on the left, text on the right: `02` / "학부모" / "자녀의 여정을 함께" / "연결된 자녀를 기준으로 필요한 소통과 결제 과정을 간결하게 관리합니다." Phone: `<PhoneMockup variant="parent-app-experience" size="compact" navItems={["자녀", "홈", "멘토"]} />`
3. 멘토 row — phone on the right, text on the left: `03` / "멘토" / "소통에 집중" / "멘티와 학부모의 채팅, 멘티 확인, 프로필 관리에 집중합니다." Phone: `<PhoneMockup variant="mentor-app-experience" size="compact" navItems={["채팅", "홈", "멘티"]} />`

Use `flex-col lg:flex-row` per row (text above phone on mobile, side-by-side on desktop), with `lg:flex-row-reverse` on the 학부모 row to put its phone on the left per Figma. Add a soft radial "Accent Halo" behind each phone (`rounded-full blur-3xl` div) matching Step 1's colors.

- [ ] **Step 3: Add the 3 app-experience bodies to PhoneMockup**

Edit `components/PhoneMockup.tsx`:
- `"student-app-experience"`: same content as `"student-home"` (Current Period + Recent Materials + Subscription) — reuse the same body-rendering sub-component from Task 3 Step 5 rather than duplicating markup, just at `size="compact"` scale.
- `"parent-app-experience"`: same content as `"parent-home"` — same reuse approach.
- `"mentor-app-experience"`: new body — Mentor Summary ("서정우 멘토님, 안녕하세요" / "확인이 필요한 신청 2건이 있어요."), Section Header "새 멘토링 신청" / "전체 보기", two Request rows: "김학생 · 화학 탐구 주제 상담 · 승인 대기" and "이하늘 · 학생부 활동 점검 · 승인 대기".

- [ ] **Step 4: Wire into page.tsx**

Add `import AppExperience from "@/components/sections/AppExperience";` and `<AppExperience />` after `<Principles />`.

- [ ] **Step 5: Verify**

```bash
npm run build
```

Expected: succeeds. Visually confirm the "앱 화면" header link scrolls here and all 3 phone variants render distinct content.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx components/sections/AppExperience.tsx components/PhoneMockup.tsx
git commit -m "feat: implement App Experience section"
```

---

### Task 6: For Every Role section

**Files:**
- Create: `components/sections/ForEveryRole.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: nothing beyond Tailwind config.
- Produces: `ForEveryRole` default-export component (no props), `id="for-every-role"`, imported by `app/page.tsx`.

- [ ] **Step 1: Fetch design context**

Call `get_design_context` with `nodeId: "182:405"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`.

- [ ] **Step 2: Implement ForEveryRole**

Create `components/sections/ForEveryRole.tsx` with `id="for-every-role"`. Eyebrow "FOR EVERY ROLE", headline "서로 다른 역할을, 하나의 성장 경험으로." Below, 3 columns separated by vertical divider lines (`grid grid-cols-1 md:grid-cols-3` with `divide-x` on `md`):

1. "학원·학교" / "교육 경험을 확장하는 파트너" / "학생에게 필요한 탐구 자료와 멘토 연결을 기관의 운영 방향 안에서 제공합니다."
2. "학생·학부모" / "신뢰할 수 있는 탐구 환경" / "소속 교육기관의 안내를 통해 시작하고, 필요한 정보와 소통에만 집중합니다."
3. "멘토" / "전문성을 성장과 연결" / "자신의 경험과 전문성을 학생의 탐구 과정에 연결하고 의미 있는 소통을 만듭니다."

- [ ] **Step 3: Wire into page.tsx**

Add `import ForEveryRole from "@/components/sections/ForEveryRole";` and `<ForEveryRole />` after `<AppExperience />`.

- [ ] **Step 4: Verify**

```bash
npm run build
```

Expected: succeeds. Visually confirm the 3-column layout stacks on a narrow viewport (resize browser or use dev tools device toolbar).

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx components/sections/ForEveryRole.tsx
git commit -m "feat: implement For Every Role section"
```

---

### Task 7: Contact section + Footer

**Files:**
- Create: `components/sections/Contact.tsx`, `components/sections/Footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: nothing beyond Tailwind config.
- Produces: `Contact` default-export component (no props, `id="contact"`) and `Footer` default-export component (no props), both imported by `app/page.tsx`.

- [ ] **Step 1: Fetch design context for Contact**

Call `get_design_context` with `nodeId: "182:406"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`.

- [ ] **Step 2: Implement Contact**

Create `components/sections/Contact.tsx` with `id="contact"`. Eyebrow "05 / CONTACT", headline "함께 만들 다음 탐구 경험을 기다립니다.", subtext "서비스 세부 내용은 제휴 및 등록 상담 과정에서 안내합니다." Two columns separated by a vertical divider:

1. "학원·학교" / "교육 경험을 확장할 파트너를 찾습니다." / CTA `<a href="#contact">학원·학교 제휴 문의</a>`
2. "멘토" / "전문성을 성장과 연결해 주세요." / CTA `<a href="#contact">멘토 등록 문의</a>`

(Both CTAs point to `#contact`, i.e. the section they're already in — this is the documented placeholder behavior per the spec; clicking just keeps focus on this section.)

- [ ] **Step 3: Fetch design context for Footer**

Call `get_design_context` with `nodeId: "182:407"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`.

- [ ] **Step 4: Implement Footer**

Create `components/sections/Footer.tsx`: left side brand mark "TG" + "탐구로" + tagline "신뢰할 수 있는 탐구 교육의 연결"; right side nav summary text "브랜드 차별점 앱 화면 문의" + note "학생과 학부모는 소속 교육기관의 안내를 통해 이용합니다."

- [ ] **Step 5: Wire into page.tsx**

Add imports and render `<Contact />` then `<Footer />` after `<ForEveryRole />`, completing `app/page.tsx`:

```tsx
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import AppExperience from "@/components/sections/AppExperience";
import ForEveryRole from "@/components/sections/ForEveryRole";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Principles />
      <AppExperience />
      <ForEveryRole />
      <Contact />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 6: Verify**

```bash
npm run build
```

Expected: succeeds. Visually confirm the "문의" header link scrolls to Contact, and the Hero/Contact CTA buttons scroll to `#contact`.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx components/sections/Contact.tsx components/sections/Footer.tsx
git commit -m "feat: implement Contact and Footer sections, complete page assembly"
```

---

### Task 8: Full-page visual QA and responsive pass

**Files:**
- Modify: any of `components/sections/*.tsx`, `components/PhoneMockup.tsx`, `tailwind.config.ts` as needed to fix issues found below

**Interfaces:**
- Consumes: the fully assembled page from Task 7.
- Produces: no new interfaces — this task is a fix-up pass.

- [ ] **Step 1: Fetch the full-frame screenshot for comparison**

Call `mcp__claude_ai_Figma__get_screenshot` with `nodeId: "182:7"`, `fileKey: "7f53GVdtUDCmHuJgO8sscT"`, `maxDimension: 2000`.

- [ ] **Step 2: Desktop visual comparison**

```bash
npm run dev
```

Open `http://localhost:3000` at a ~1440px-wide browser window. Compare section-by-section against the Step 1 screenshot: spacing, colors, copy, phone mockup content. Note any mismatches.

- [ ] **Step 3: Fix any desktop mismatches found in Step 2**

Edit the relevant section component(s) directly — adjust Tailwind classes for spacing/color/typography to match. No code sample here since fixes are specific to whatever Step 2 finds; do not leave any TODO comments — fix immediately.

- [ ] **Step 4: Mobile responsive check**

With the dev server still running, use the browser's device toolbar (e.g. 390px width) to check each section: Header collapses sensibly, Hero stacks phones under the text, Principles/AppExperience/ForEveryRole/Contact all stack to single-column, no horizontal overflow/scrollbar appears anywhere on the page.

- [ ] **Step 5: Fix any mobile issues found in Step 4**

Add/adjust responsive Tailwind breakpoint classes (`sm:`, `md:`, `lg:`) in the affected components until Step 4 passes cleanly. Stop the dev server when done.

- [ ] **Step 6: Final build check**

```bash
npm run build
```

Expected: succeeds with no errors or warnings.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "fix: visual QA pass — desktop/mobile alignment with Figma"
```
