"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#0A1828] pt-24 md:pt-20 pb-20 md:pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#ff7a3d] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#9d7eff] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#ff7a3d]/10 border border-[#ff7a3d]/30 rounded-full mb-4 md:mb-6 animate-fade-in-down">
            <span className="text-[#ff7a3d] text-xs sm:text-sm font-bold tracking-wider">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight animate-fade-in-up px-2">
            LET'S BUILD YOUR BRAND STORY
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12 animate-fade-in-up px-2" style={{ animationDelay: "0.2s" }}>
            Ready to create scroll-stopping content that drives results? Get in touch with our team 
            and let's discuss how we can help transform your brand's digital presence.
          </p>
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="mailto:vardoxstudio@gmail.com" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff7a3d]/20 rounded-xl flex items-center justify-center mb-4 text-[#ff7a3d] group-hover:bg-[#ff7a3d] group-hover:text-white transition-colors mx-auto">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
              <p className="text-gray-400 text-xs md:text-sm break-words">vardoxstudio@gmail.com</p>
            </a>
            
            <a href="tel:+919876543210" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="w-12 h-12 bg-[#3dd9a8] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Call Us</h3>
              <p className="text-gray-400 text-xs md:text-sm">+91 98765 43210</p>
            </a>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="w-12 h-12 bg-[#9d7eff] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Visit Us</h3>
              <p className="text-gray-400 text-xs md:text-sm">Aurangabad, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}