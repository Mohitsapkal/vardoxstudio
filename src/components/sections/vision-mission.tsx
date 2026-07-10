"use client";

import { Target, Rocket, Lightbulb } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a3d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d7eff]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Vision */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#ff7a3d] rounded-2xl flex items-center justify-center animate-float">
                <Rocket size={32} className="text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A1828]">OUR VISION</h2>
            </div>
            
            <div className="bg-[#0A1828] rounded-[40px] p-8 lg:p-12 relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff7a3d] rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <p className="text-xl lg:text-2xl text-white leading-relaxed relative z-10">
                To become <span className="text-[#ff7a3d] font-bold">India's most trusted creative partner</span> for 
                brands seeking impactful digital storytelling and next-level audience engagement.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#ff7a3d] text-white rounded-full text-sm font-semibold">Innovation</span>
                <span className="px-4 py-2 bg-[#3dd9a8] text-white rounded-full text-sm font-semibold">Growth</span>
                <span className="px-4 py-2 bg-[#9d7eff] text-white rounded-full text-sm font-semibold">Impact</span>
              </div>
            </div>
          </div>
          
          {/* Mission */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#9d7eff] rounded-2xl flex items-center justify-center animate-float-delayed">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A1828]">OUR MISSION</h2>
            </div>
            
            <div className="bg-gradient-to-br from-[#9d7eff] to-[#7b5cff] rounded-[40px] p-8 lg:p-12 relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <p className="text-xl lg:text-2xl text-white leading-relaxed relative z-10">
                To help businesses grow online through strategic <span className="font-bold">video marketing</span>, 
                social media management, and content innovation that truly makes an impact.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">100+</div>
                  <div className="text-sm text-white/80">Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-sm text-white/80">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">10+</div>
                  <div className="text-sm text-white/80">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What We Do Preview */}
        <div className="mt-24 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#3dd9a8]/10 border border-[#3dd9a8]/30 rounded-full mb-4">
              <span className="text-[#3dd9a8] text-sm font-bold tracking-wider">WHAT WE DO</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A1828]">
              ALL-IN-ONE CREATIVE PARTNER
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎬", title: "Video Production", desc: "High-quality videos from concept to final cut" },
              { icon: "📱", title: "Social Media", desc: "Strategic content creation & management" },
              { icon: "🎨", title: "Branding", desc: "Complete visual identity design" },
              { icon: "📊", title: "Advertising", desc: "Data-driven paid campaigns" },
              { icon: "🤝", title: "Influencer Marketing", desc: "Connect with relevant communities" },
              { icon: "💡", title: "Strategy", desc: "Custom marketing roadmaps" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#ff7a3d] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1828] mb-2 group-hover:text-[#ff7a3d] transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
