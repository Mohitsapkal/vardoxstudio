"use client";

import { Video, Megaphone, Palette, TrendingUp, Users, Target, ArrowRight } from "lucide-react";

export default function ServicesList() {
  const services = [
    {
      id: "video-production",
      icon: Video,
      title: "Video Production & Editing",
      description: "High-quality promotional, corporate, and social videos that capture your brand's essence. From concept development to final cut — we handle it all.",
      features: [
        "Corporate Videos",
        "Promotional Content",
        "Social Media Clips",
        "Event Coverage",
        "Product Demos",
        "Testimonial Videos"
      ],
      color: "#ff7a3d",
      bgColor: "bg-[#ff7a3d]",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "social-media",
      icon: Megaphone,
      title: "Social Media Management",
      description: "Strategic planning, content creation, and performance optimization for platforms like Instagram, YouTube, and LinkedIn. We ensure your brand remains active, engaging, and consistent.",
      features: [
        "Content Strategy",
        "Post Scheduling",
        "Community Management",
        "Analytics & Reporting",
        "Platform Optimization",
        "Trend Analysis"
      ],
      color: "#9d7eff",
      bgColor: "bg-[#9d7eff]",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "branding",
      icon: Palette,
      title: "Branding & Design",
      description: "Complete visual identity design — logos, brand colors, and aesthetic assets — to ensure your brand stands out everywhere it appears.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Marketing Collateral",
        "Social Media Templates",
        "Brand Refresh"
      ],
      color: "#3dd9a8",
      bgColor: "bg-[#3dd9a8]",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "advertising",
      icon: TrendingUp,
      title: "Advertising Campaigns",
      description: "Data-driven paid campaigns that help your videos reach the right audience and achieve your marketing goals faster.",
      features: [
        "Facebook Ads",
        "Instagram Ads",
        "YouTube Ads",
        "Google Ads",
        "Campaign Strategy",
        "ROI Optimization"
      ],
      color: "#ff5757",
      bgColor: "bg-[#ff5757]",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "influencer",
      icon: Users,
      title: "Influencer & Community Marketing",
      description: "We connect brands with relevant influencers and communities to maximize reach and authenticity.",
      features: [
        "Influencer Partnerships",
        "Community Building",
        "Campaign Management",
        "Content Collaboration",
        "Performance Tracking",
        "Relationship Management"
      ],
      color: "#f4f157",
      bgColor: "bg-[#f4f157]",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "strategy",
      icon: Target,
      title: "Content Strategy",
      description: "Custom content and marketing roadmaps designed to align with your business goals and drive measurable growth.",
      features: [
        "Market Research",
        "Audience Analysis",
        "Content Planning",
        "Distribution Strategy",
        "Performance Metrics",
        "Growth Planning"
      ],
      color: "#9d7eff",
      bgColor: "bg-[#9d7eff]",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a3d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d7eff]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id}
                id={service.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group w-full">
                    <div className={`relative w-full overflow-hidden rounded-[40px] p-12 lg:p-16 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl flex items-center justify-center min-h-[300px] ${!service.image ? service.bgColor : ''}`}>
                      {/* Background Image */}
                      {service.image && (
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${service.image})` }}
                        ></div>
                      )}
                      
                      {/* Color Overlay */}
                      {service.image && (
                        <>
                          {/* Base dark tint for contrast */}
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-opacity duration-300"></div>
                          {/* Subtle brand color tint */}
                          <div className={`absolute inset-0 ${service.bgColor} opacity-40 mix-blend-color group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </>
                      )}

                      {/* Foreground Icon */}
                      <Icon size={120} className="relative z-10 text-white mx-auto animate-float drop-shadow-2xl" />
                    </div>
                    
                    {/* Decorative corner badge */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce-slow">
                      <div className={`w-8 h-8 ${service.bgColor} rounded-full`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="flex-1">
                  <h2 className="text-4xl lg:text-5xl font-black text-[#0A1828] mb-4 group-hover:text-[#ff7a3d] transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className={`w-2 h-2 ${service.bgColor} rounded-full`}></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href="/contact" 
                    className={`inline-flex items-center gap-2 px-6 py-3 ${service.bgColor} text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    Get Started <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
