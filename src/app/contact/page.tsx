import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ContactHero from "@/components/sections/contact-hero";
import ContactForm from "@/components/sections/contact-form";
import ContactInfo from "@/components/sections/contact-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A1828]">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
