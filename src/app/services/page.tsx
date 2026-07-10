import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ServicesHero from "@/components/sections/services-hero";
import ServicesList from "@/components/sections/services-list";
import ProcessOverview from "@/components/sections/process-overview";
import ServicesCta from "@/components/sections/services-cta";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A1828]">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessOverview />
        <ServicesCta />
      </main>
      <Footer />
    </div>
  );
}
