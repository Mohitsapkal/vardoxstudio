"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Video Ads", "Social Media", "Branding", "Corporate Films", "Event"];

  const projects = [
    {
      title: "Brand Boost Initiative",
      category: "Video Ads",
      client: "Sustainability Firm",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
      description: "Drive lead generation through compelling video storytelling",
      results: "350% increase in qualified leads",
      tags: ["Video Production", "Lead Generation"]
    },
    {
      title: "EcomPro SEO Campaign",
      category: "Social Media",
      client: "E-commerce Brand",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Social media optimization and engagement campaign",
      results: "500K+ organic reach in 3 months",
      tags: ["Social Media", "SEO"]
    },
    {
      title: "LuxuryLaunch Campaign",
      category: "Branding",
      client: "Luxury Fashion Brand",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Complete brand identity and launch campaign",
      results: "20K+ pre-launch signups",
      tags: ["Branding", "Launch"]
    },
    {
      title: "TechStart Explainer",
      category: "Corporate Films",
      client: "Tech Startup",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      description: "Animated explainer video for SaaS product",
      results: "40% conversion rate increase",
      tags: ["Animation", "Corporate"]
    },
    {
      title: "FitLife Social Series",
      category: "Social Media",
      client: "Fitness Brand",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      description: "Instagram and YouTube content series",
      results: "2M+ views across platforms",
      tags: ["Social Media", "Content Series"]
    },
    {
      title: "Property Showcase",
      category: "Video Ads",
      client: "Real Estate Developer",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      description: "Premium property video tours and ads",
      results: "85% faster sales cycle",
      tags: ["Real Estate", "Video Ads"]
    },
    {
      title: "Restaurant Rebrand",
      category: "Branding",
      client: "Fine Dining Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Complete visual identity refresh",
      results: "60% increase in reservations",
      tags: ["Branding", "Hospitality"]
    },
    {
      title: "Product Launch Video",
      category: "Corporate Films",
      client: "Consumer Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
      description: "High-impact product reveal video",
      results: "1M+ views in first week",
      tags: ["Product Launch", "Corporate"]
    },
    {
      title: "Fashion Week Coverage",
      category: "Social Media",
      client: "Fashion Magazine",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d23?w=800&h=600&fit=crop",
      description: "Behind-the-scenes social content",
      results: "800K+ engagement rate",
      tags: ["Fashion", "Event Coverage"]
    },
    {
      title: "Annual Tech Summit",
      category: "Event",
      client: "Global Tech Inc",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      description: "Comprehensive event coverage and highlight reel",
      results: "10K+ attendees engaged",
      tags: ["Event Coverage", "Live Production"]
    },
    {
      title: "Music Festival Mainstage",
      category: "Event",
      client: "SoundWave Productions",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
      description: "Multi-camera live concert recording and aftermovie",
      results: "50K+ live stream viewers",
      tags: ["Live Music", "Multi-cam"]
    },
    {
      title: "Corporate Retreat Gala",
      category: "Event",
      client: "Finance Partners LLC",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      description: "Elegant evening gala documentation and interviews",
      results: "Award-winning internal video",
      tags: ["Corporate", "Gala"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a3d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d7eff]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#ff7a3d] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-[32px] bg-[#0A1828] shadow-xl">
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828] via-[#0A1828]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[#ff7a3d] rounded-full flex items-center justify-center animate-pulse-slow">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#ff7a3d] text-white text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* External Link */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ExternalLink size={18} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff7a3d] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#ff7a3d] font-semibold text-sm mb-3">
                    {project.client}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Results</p>
                    <p className="text-sm font-bold text-[#3dd9a8]">{project.results}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-gray-600 mb-6 text-lg">
            Like what you see? Let's create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7a3d] text-white font-semibold rounded-full hover:bg-[#ff8c42] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,122,61,0.3)]"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
