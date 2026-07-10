"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a3d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d7eff]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1828] mb-3 md:mb-4 px-2">
              SEND US A MESSAGE
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-[32px] md:rounded-[40px] p-6 sm:p-8 lg:p-12 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="video-production">Video Production & Editing</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="branding">Branding & Design</option>
                  <option value="advertising">Advertising Campaigns</option>
                  <option value="influencer">Influencer Marketing</option>
                  <option value="strategy">Content Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {isSubmitted && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-2xl animate-fade-in">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-green-700 font-semibold text-sm md:text-base">Thank you! We'll be in touch soon.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#ff7a3d] text-white text-sm md:text-base font-semibold rounded-full hover:bg-[#ff8c42] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,122,61,0.3)]"
              >
                Send Message <Send size={18} className="md:w-5 md:h-5" />
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-8 md:mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-gray-600 mb-4 text-sm md:text-base px-4">Prefer to talk directly?</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-[#0A1828] text-white text-sm md:text-base font-semibold rounded-full hover:bg-[#1a2838] transition-all duration-300 hover:scale-105"
              >
                Book a Free Strategy Call
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-[#25D366] text-white text-sm md:text-base font-semibold rounded-full hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}