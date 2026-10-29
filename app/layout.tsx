import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_KR } from "next/font/google";
import ToastProvider from "@/components/ToastProvider";
import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_THEME_COLOR,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

// IBM Plex Sans draws Latin and digits; IBM Plex Sans KR fills in Hangul.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});
const plexSansKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-plex-sans-kr",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "탐구로",
    "학생부종합전형",
    "학종",
    "학종 A to Z",
    "학종 입시",
    "학생부",
    "세특",
    "교세특",
    "입시 멘토링",
    "합격자 멘토링",
    "탐구 활동",
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: SITE_LOCALE,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: SITE_THEME_COLOR,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${plexSans.variable} ${plexSansKr.variable} font-sans antialiased`}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
