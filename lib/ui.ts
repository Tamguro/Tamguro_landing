// Pill buttons, after Apple's paired CTAs: one filled action, one quiet one.
const PILL_BASE =
  "inline-flex items-center justify-center gap-[6px] rounded-full font-semibold whitespace-nowrap transition-[transform,background-color] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

export const PILL_PRIMARY = `${PILL_BASE} h-[52px] px-[26px] text-[17px] bg-action-primary text-text-inverse hover:-translate-y-[1px]`;

export const PILL_SECONDARY = `${PILL_BASE} h-[52px] px-[26px] text-[17px] border border-border-strong bg-surface text-text-primary hover:bg-surface-muted`;

export const PILL_SMALL = `${PILL_BASE} h-[34px] px-[16px] text-[13px] bg-action-primary text-text-inverse hover:-translate-y-[1px]`;
