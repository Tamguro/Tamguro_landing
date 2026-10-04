"use client";

import type { JSX, ReactNode } from "react";
import toast from "react-hot-toast";

const RELEASE_MESSAGE = "아직 출시 기간입니다. 조금만 기다려 주세요!";

export default function ReleaseButton({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={() => toast(RELEASE_MESSAGE, { id: "release-notice" })}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
