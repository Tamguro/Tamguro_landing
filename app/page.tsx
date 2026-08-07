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
