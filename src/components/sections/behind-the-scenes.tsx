"use client";

import { Camera, Film, Palette, Sparkles } from "lucide-react";

export default function BehindTheScenes() {
  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
      title: "Production Day",
      category: "Video Shoot"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      title: "Creative Meeting",
      category: "Strategy Session"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      title: "Team Collaboration",
      category: "Brainstorming"
    },
    {
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
      title: "Editing Suite",
      category: "Post-Production"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      title: "Client Presentation",
      category: "Review Meeting"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      title: "Creative Workshop",
      category: "Team Building"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0A1828] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff7a3d] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#9d7eff] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-[#3dd9a8]/10 border border-[#3dd9a8]/30 rounded-full mb-6">
            <span className="text-[#3dd9a8] text-sm font-bold tracking-wider">BEHIND THE SCENES</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            WHERE THE MAGIC HAPPENS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a glimpse into our creative process, team collaborations, and the energy that drives every project.
          </p>
        </div>
        
        {/* Process Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Camera, label: "Shoot", color: "#ff7a3d" },
            { icon: Film, label: "Edit", color: "#9d7eff" },
            { icon: Palette, label: "Design", color: "#3dd9a8" },
            { icon: Sparkles, label: "Polish", color: "#f4f157" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={36} className="text-white" />
                </div>
                <p className="text-white font-bold text-lg">{item.label}</p>
              </div>
            );
          })}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-[32px] animate-fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-[320px]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828] via-[#0A1828]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[#ff7a3d] text-white text-xs font-bold rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fun Fact Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { number: "5000+", label: "Hours of Content Created", icon: "🎬" },
            { number: "100%", label: "Client Satisfaction Rate", icon: "⭐" },
            { number: "24/7", label: "Creative Ideas Flowing", icon: "💡" }
          ].map((fact, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 animate-bounce-slow">{fact.icon}</div>
              <div className="text-4xl font-black text-white mb-2">{fact.number}</div>
              <div className="text-gray-300">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
