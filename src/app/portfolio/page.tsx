import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PortfolioHero from "@/components/sections/portfolio-hero";
import PortfolioGallery from "@/components/sections/portfolio-gallery";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0A1828]">
      <Header />
      <main>
        <PortfolioHero />
        <PortfolioGallery />
      </main>
      <Footer />
    </div>
  );
}
