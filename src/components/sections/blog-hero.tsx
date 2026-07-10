"use client";

export default function BlogHero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#0A1828] pt-20 pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#ff7a3d] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#3dd9a8] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#3dd9a8]/10 border border-[#3dd9a8]/30 rounded-full mb-6 animate-fade-in-down">
            <span className="text-[#3dd9a8] text-sm font-bold tracking-wider">BLOG & INSIGHTS</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            INSIGHTS & RESOURCES
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Stay updated with the latest trends in video marketing, social media strategies, and digital growth insights from our team of experts.
          </p>
        </div>
      </div>
    </section>
  );
}
