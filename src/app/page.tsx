import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Showreel from "@/components/sections/showreel";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";

import ImpactBanner from "@/components/sections/impact-banner";
import FeaturedProjects from "@/components/sections/featured-projects";
import FaqSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Showreel />
        <Services />
        <WhyChooseUs />

        <ImpactBanner />
        <FeaturedProjects />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}