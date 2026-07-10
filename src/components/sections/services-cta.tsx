"use client";

import { CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesCta() {
  const benefits = [
    "All-in-One Creative Partner",
    "Results-Oriented Approach",
    "Modern Aesthetic for Today's Audience",
    "Experienced Team of Creators",
    "Client-Centric Strategy",
    "Proven Track Record"
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9d7eff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff7a3d]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#0A1828] to-[#1a2838] rounded-[48px] p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7a3d] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9d7eff] rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-block px-4 py-2 bg-[#ff7a3d]/10 border border-[#ff7a3d]/30 rounded-full mb-6">
                  <span className="text-[#ff7a3d] text-sm font-bold tracking-wider">WHY CHOOSE VARDOX</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  READY TO TRANSFORM YOUR BRAND?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Partner with Vardox Studio and let's create scroll-stopping content that drives real results.
                </p>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <CheckCircle size={20} className="text-[#3dd9a8] flex-shrink-0" />
                    <span className="text-white font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7a3d] text-white font-semibold rounded-full hover:bg-[#ff8c42] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,122,61,0.3)]"
                >
                  Book a Free Strategy Call <ArrowRight size={20} />
                </a>
                <a 
                  href="/portfolio" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  View Our Portfolio
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-gray-400 mb-2">Have questions? Let's talk!</p>
                <a 
                  href="mailto:vardoxstudio@gmail.com" 
                  className="flex items-center gap-3 text-gray-400 hover:text-[#9d7eff] transition-colors"
                >
                  vardoxstudio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
