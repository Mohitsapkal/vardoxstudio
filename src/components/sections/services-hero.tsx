"use client";

import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#0A1828] pt-20 pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#ff7a3d] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#9d7eff] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#ff7a3d]/10 border border-[#ff7a3d]/30 rounded-full mb-6 animate-fade-in-down">
            <span className="text-[#ff7a3d] text-sm font-bold tracking-wider">OUR SERVICES</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            EVERYTHING YOU NEED TO GROW YOUR BRAND
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            From concept to execution, we provide comprehensive video marketing and digital solutions 
            that help your brand stand out and achieve measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}
