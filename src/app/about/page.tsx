import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import AboutHero from "@/components/sections/about-hero";
import VisionMission from "@/components/sections/vision-mission";
import OurValues from "@/components/sections/our-values";
import OurTeam from "@/components/sections/our-team";
import BehindTheScenes from "@/components/sections/behind-the-scenes";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A1828]">
      <Header />
      <main>
        <AboutHero />
        <VisionMission />
        <OurValues />
        <OurTeam />
        <BehindTheScenes />
      </main>
      <Footer />
    </div>
  );
}
