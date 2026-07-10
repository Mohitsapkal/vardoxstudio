"use client";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#0A1828] pt-20 pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#ff7a3d] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#9d7eff] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#9d7eff]/10 border border-[#9d7eff]/30 rounded-full mb-6 animate-fade-in-down">
            <span className="text-[#9d7eff] text-sm font-bold tracking-wider">OUR WORK</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            A GLIMPSE INTO OUR CREATIVE WORK
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Explore our portfolio of successful campaigns, compelling videos, and impactful brand stories 
            that have driven real results for businesses across industries.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-black text-[#ff7a3d]">500+</div>
              <div className="text-sm text-gray-300">Videos Created</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-black text-[#3dd9a8]">100+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-black text-[#9d7eff]">10+</div>
              <div className="text-sm text-gray-300">Industries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
