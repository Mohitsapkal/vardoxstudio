"use client";

import { Linkedin, Mail } from "lucide-react";

export default function OurTeam() {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "Leading creative vision with 10+ years in video production and brand storytelling.",
      linkedin: "#",
      email: "rajesh@vardoxstudio.com"
    },
    {
      name: "Priya Sharma",
      role: "Head of Social Media",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Expert in social strategy and community building across all major platforms.",
      linkedin: "#",
      email: "priya@vardoxstudio.com"
    },
    {
      name: "Arjun Patel",
      role: "Lead Video Editor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Master storyteller bringing brands to life through cutting-edge video editing.",
      linkedin: "#",
      email: "arjun@vardoxstudio.com"
    },
    {
      name: "Sneha Reddy",
      role: "Brand Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Creating data-driven strategies that transform brands and drive measurable growth.",
      linkedin: "#",
      email: "sneha@vardoxstudio.com"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9d7eff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3dd9a8]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-[#9d7eff]/10 border border-[#9d7eff]/30 rounded-full mb-6">
            <span className="text-[#9d7eff] text-sm font-bold tracking-wider">MEET THE TEAM</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#0A1828] mb-6">
            THE CREATIVE MINDS BEHIND VARDOX
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of creators, strategists, and storytellers are passionate about bringing your brand vision to life.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-[32px] bg-[#0A1828] hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828] via-[#0A1828]/50 to-transparent opacity-60"></div>
                  
                  {/* Social Links - Show on hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.linkedin} 
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#ff7a3d] transition-colors duration-300"
                    >
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ff7a3d] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#ff7a3d] font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Join Team CTA */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-to-r from-[#ff7a3d] to-[#ff8c42] rounded-[40px] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                We're always looking for talented creators, editors, and strategists who share our passion for storytelling.
              </p>
              <a 
                href="mailto:careers@vardoxstudio.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#ff7a3d] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
