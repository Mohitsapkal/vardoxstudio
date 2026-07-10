"use client";

import { Sparkles, Award, Shield, Zap, TrendingUp } from "lucide-react";

export default function OurValues() {
  const values = [
    {
      icon: Sparkles,
      title: "Creativity",
      description: "We believe in bold ideas and unique visual storytelling that captures attention and drives engagement.",
      color: "#ff7a3d",
      bgColor: "bg-[#ff7a3d]"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Every frame, every edit, every post reflects our commitment to excellence and attention to detail.",
      color: "#9d7eff",
      bgColor: "bg-[#9d7eff]"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent communication and reliable delivery are the foundations of our client relationships.",
      color: "#3dd9a8",
      bgColor: "bg-[#3dd9a8]"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends to keep your brand relevant in a fast-changing digital world.",
      color: "#f4f157",
      bgColor: "bg-[#f4f157]"
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Our focus is on measurable impact — engagement, reach, conversions, and business growth.",
      color: "#ff5757",
      bgColor: "bg-[#ff5757]"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0A1828] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff7a3d] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#9d7eff] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-[#ff7a3d]/10 border border-[#ff7a3d]/30 rounded-full mb-6">
            <span className="text-[#ff7a3d] text-sm font-bold tracking-wider">OUR CORE VALUES</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            WHAT DRIVES US
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our values guide every project, every creative decision, and every client interaction.
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-[40px] p-8 lg:p-10 h-full hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${value.bgColor} opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-black text-[#0A1828] mb-4 group-hover:text-[#ff7a3d] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Decorative number */}
                  <div className="absolute bottom-4 right-6 text-8xl font-black opacity-5 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* CTA Card */}
          <div className="group animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative bg-gradient-to-br from-[#ff7a3d] to-[#ff8c42] rounded-[40px] p-8 lg:p-10 h-full flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-white/90 mb-6">
                  Let's create something amazing that reflects these values.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#ff7a3d] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
