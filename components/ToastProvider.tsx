"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: "var(--text-primary)",
          color: "var(--text-inverse)",
          borderRadius: "14px",
          padding: "14px 18px",
          fontFamily: "var(--font-pretendard), sans-serif",
          fontSize: "14px",
        },
      }}
    />
  );
}
