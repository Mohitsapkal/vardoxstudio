"use client";

import { Lightbulb, Target, Film, Rocket, TrendingUp } from "lucide-react";

export default function ProcessOverview() {
  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Discovery",
      description: "Understanding your brand, goals, and audience.",
      details: "We dive deep into your business objectives, target market, and competitive landscape to create a solid foundation.",
      color: "#ff7a3d"
    },
    {
      number: "02",
      icon: Target,
      title: "Strategy",
      description: "Creating a custom content and marketing roadmap.",
      details: "We develop a comprehensive strategy tailored to your brand, including content themes, distribution channels, and KPIs.",
      color: "#9d7eff"
    },
    {
      number: "03",
      icon: Film,
      title: "Production",
      description: "Filming, editing, and crafting standout visuals.",
      details: "Our creative team brings your vision to life through high-quality video production, editing, and post-production magic.",
      color: "#3dd9a8"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      description: "Publishing, promoting, and optimizing content.",
      details: "We strategically launch your content across all relevant channels with optimized timing and targeting.",
      color: "#f4f157"
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Growth",
      description: "Measuring results and scaling what works.",
      details: "Continuous monitoring, analysis, and optimization to maximize your ROI and drive sustained growth.",
      color: "#ff5757"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0A1828] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#ff7a3d] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9d7eff] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-[#ff7a3d]/10 border border-[#ff7a3d]/30 rounded-full mb-6">
            <span className="text-[#ff7a3d] text-sm font-bold tracking-wider">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            FROM IDEA TO IMPACT
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 5-step process ensures your project runs smoothly from start to finish with exceptional results.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff7a3d] via-[#9d7eff] to-[#ff5757] opacity-20 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-[32px] p-6 lg:p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                    {/* Background decoration */}
                    <div 
                      className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 blur-2xl group-hover:opacity-10 transition-opacity"
                      style={{ backgroundColor: step.color }}
                    ></div>
                    
                    {/* Step Number */}
                    <div className="text-6xl font-black opacity-10 mb-2">{step.number}</div>
                    
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-black text-[#0A1828] mb-2 group-hover:text-[#ff7a3d] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-xl text-gray-300 mb-6">
            Ready to see our process in action?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7a3d] text-white font-semibold rounded-full hover:bg-[#ff8c42] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,122,61,0.3)]"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
