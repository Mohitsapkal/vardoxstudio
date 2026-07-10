"use client";

import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export default function BlogGrid() {
  const articles = [
    {
      title: "5 Video Trends That Drive Engagement in 2025",
      excerpt: "Discover the latest video marketing trends that are transforming how brands connect with audiences and drive measurable engagement.",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=500&fit=crop",
      category: "Video Marketing",
      date: "January 15, 2025",
      readTime: "5 min read",
      author: "Rajesh Kumar"
    },
    {
      title: "How to Build a Social Media Strategy That Converts",
      excerpt: "A comprehensive guide to creating social media strategies that not only build awareness but also drive real business conversions.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      category: "Social Media",
      date: "January 12, 2025",
      readTime: "8 min read",
      author: "Priya Sharma"
    },
    {
      title: "Behind the Scenes: How We Plan a Brand Shoot",
      excerpt: "Take a peek into our creative process and learn how we plan, execute, and deliver stunning brand video shoots from concept to completion.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop",
      category: "Production",
      date: "January 10, 2025",
      readTime: "6 min read",
      author: "Arjun Patel"
    },
    {
      title: "The Psychology of Color in Video Marketing",
      excerpt: "Understanding how color choices impact viewer emotions and drive action in your video marketing campaigns.",
      image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=500&fit=crop",
      category: "Branding",
      date: "January 8, 2025",
      readTime: "7 min read",
      author: "Sneha Reddy"
    },
    {
      title: "Instagram Reels vs TikTok: Which Platform is Right for Your Brand?",
      excerpt: "A detailed comparison of the two leading short-form video platforms and how to choose the right one for your marketing goals.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop",
      category: "Social Media",
      date: "January 5, 2025",
      readTime: "6 min read",
      author: "Priya Sharma"
    },
    {
      title: "Maximizing ROI: How to Measure Video Marketing Success",
      excerpt: "Learn the key metrics and analytics tools you need to track to measure the true impact of your video marketing campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      category: "Analytics",
      date: "January 3, 2025",
      readTime: "9 min read",
      author: "Rajesh Kumar"
    }
  ];

  const featuredPost = articles[0];
  const regularPosts = articles.slice(1);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a3d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3dd9a8]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Featured Article */}
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={24} className="text-[#ff7a3d]" />
            <h2 className="text-2xl font-black text-[#0A1828]">FEATURED ARTICLE</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 bg-[#0A1828] rounded-[40px] overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl">
            <div className="relative h-[400px] lg:h-full overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-[#ff7a3d] text-white text-sm font-bold rounded-full">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 hover:text-[#ff7a3d] transition-colors duration-300">
                {featuredPost.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff7a3d] text-white font-semibold rounded-full hover:bg-[#ff8c42] transition-all duration-300 hover:scale-105 w-fit">
                Read Article <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((article, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden hover:shadow-2xl hover:border-[#ff7a3d] transition-all duration-300">
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#ff7a3d] text-white text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1828] mb-3 group-hover:text-[#ff7a3d] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">{article.author}</span>
                    <button className="text-[#ff7a3d] hover:text-[#ff8c42] transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-to-r from-[#ff7a3d] to-[#ff8c42] rounded-[40px] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss an article on video marketing, social media trends, and growth strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-[#0A1828] text-white font-semibold rounded-full hover:bg-[#1a2838] transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
