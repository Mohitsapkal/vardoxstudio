import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import BlogHero from "@/components/sections/blog-hero";
import BlogGrid from "@/components/sections/blog-grid";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A1828]">
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
