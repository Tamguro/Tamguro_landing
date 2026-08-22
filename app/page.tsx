import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import AppExperience from "@/components/sections/AppExperience";
import ForEveryRole from "@/components/sections/ForEveryRole";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": new URL("/#organization", SITE_URL).toString(),
        name: SITE_NAME,
        url: SITE_URL.toString(),
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "WebSite",
        "@id": new URL("/#website", SITE_URL).toString(),
        name: SITE_NAME,
        url: SITE_URL.toString(),
        description: SITE_DESCRIPTION,
        inLanguage: "ko-KR",
        publisher: {
          "@id": new URL("/#organization", SITE_URL).toString(),
        },
      },
      {
        "@type": "Service",
        "@id": new URL("/#service", SITE_URL).toString(),
        name: "탐구로 학생부종합전형 실전 플랫폼",
        serviceType: "학종 입시 자료 구독 및 합격자 멘토링 중개",
        description: SITE_DESCRIPTION,
        provider: {
          "@id": new URL("/#organization", SITE_URL).toString(),
        },
        areaServed: {
          "@type": "Country",
          name: "대한민국",
        },
        availableLanguage: "ko-KR",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Header />
        <Hero />
        <Principles />
        <AppExperience />
        <ForEveryRole />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
