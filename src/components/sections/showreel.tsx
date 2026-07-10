"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Showreel() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-32 lg:pb-48 bg-[#0A1828] overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#ff7a3d] rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#9d7eff] rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-[#ff7a3d]/10 border border-[#ff7a3d]/30 rounded-full mb-4">
            <span className="text-[#ff7a3d] text-sm font-bold tracking-wider">OUR SHOWREEL</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight">
            SEE OUR WORK IN ACTION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A glimpse into our creative process and the impactful content we create for brands across industries
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer hover:scale-[1.02] transition-transform duration-500">
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-[#0A1828] to-[#1a2838]">
              <Image
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=2000"
                alt="Showreel Thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              />
              
              {/* Play button overlay */}
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300"
              >
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 w-24 h-24 bg-[#ff7a3d] rounded-full opacity-20 animate-ping"></div>
                  <div className="absolute inset-0 w-24 h-24 bg-[#ff7a3d] rounded-full opacity-30 animate-pulse"></div>
                  
                  {/* Play button */}
                  <button className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play size={32} className="text-[#ff7a3d] ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-white font-semibold text-sm">2:30</span>
              </div>
            </div>
          </div>

          {/* Stats below showreel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Videos Created" },
              { value: "50M+", label: "Views Generated" },
              { value: "200%", label: "Avg. Engagement" },
              { value: "100+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 animate-fade-in">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <X size={24} className="text-white" />
          </button>
          
          <div className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Vardox Studio Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
