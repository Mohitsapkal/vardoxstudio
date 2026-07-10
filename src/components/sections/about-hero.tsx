"use client";

import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#0A1828] pt-20 pb-32">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#ff7a3d] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#9d7eff] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-[#ff7a3d]/10 border border-[#ff7a3d]/30 rounded-full mb-6">
              <span className="text-[#ff7a3d] text-sm font-bold tracking-wider">ABOUT US</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              WHO WE ARE
            </h1>
            
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Vardox Studio is a <span className="text-[#ff7a3d] font-semibold">creative video marketing agency</span> dedicated 
                to helping brands create scroll-stopping digital content that drives engagement, visibility, and growth.
              </p>
              
              <p className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                We blend creativity, strategy, and storytelling to produce videos and social media campaigns that 
                connect with audiences and build lasting brand presence.
              </p>
              
              <p className="text-xl font-semibold text-white animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Our mission is simple — to turn your brand into a visual story people remember.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7a3d] text-white font-semibold rounded-full hover:bg-[#ff8c42] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,122,61,0.3)]"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a 
                href="/portfolio" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </a>
            </div>
          </div>
          
          {/* Right Image/Video */}
          <div className="flex-1 relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop" 
                alt="Vardox Studio Team" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/80 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float">
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-sm text-gray-300">Videos Produced</div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float-delayed">
                  <div className="text-3xl font-black text-[#ff7a3d]">200%</div>
                  <div className="text-sm text-gray-300">Avg Growth</div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative badges */}
            <div className="absolute -top-4 -right-4 bg-[#3dd9a8] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-bounce-slow rotate-12">
              Creative Excellence
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#9d7eff] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-bounce-slow -rotate-12">
              Results Driven
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
