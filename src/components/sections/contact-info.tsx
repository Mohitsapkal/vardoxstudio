"use client";

import { MapPin, Clock, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0A1828] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#ff7a3d] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3dd9a8] rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Map Section */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 px-2">
              VISIT OUR STUDIO
            </h2>
            <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base px-2">
              Based in Aurangabad, Maharashtra, India — Serving Clients Globally
            </p>
            
            {/* Map Embed */}
            <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl h-[300px] md:h-[400px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60583.36793730836!2d75.28454!3d19.87757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2eb29e1c0e7%3A0x2d1c1a2b2e2c1b2c!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vardox Studio Location"
              ></iframe>
            </div>
            
            {/* Office Hours */}
            <div className="mt-6 md:mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff7a3d] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-sm md:text-base">Office Hours</h3>
                  <p className="text-gray-300 text-xs md:text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-xs md:text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-300 text-xs md:text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 px-2">
              CONNECT WITH US
            </h2>
            
            {/* Address */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-5 md:mb-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9d7eff] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-sm md:text-base">Our Location</h3>
                  <p className="text-gray-300 text-sm md:text-base">Aurangabad, Maharashtra, India</p>
                  <p className="text-gray-400 text-xs md:text-sm mt-2">
                    Working remotely with clients across Mumbai, Pune, Delhi, Bengaluru, and globally.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-[#ff7a3d] to-[#ff8c42] rounded-[24px] md:rounded-[32px] p-6 md:p-8">
              <h3 className="text-white font-black text-xl md:text-2xl mb-3 md:mb-4">Follow Our Journey</h3>
              <p className="text-white/90 mb-5 md:mb-6 text-sm md:text-base">
                Stay updated with our latest projects, behind-the-scenes content, and industry insights.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <a 
                  href="https://instagram.com/vardoxstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram size={20} className="text-[#ff7a3d]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-sm">Instagram</div>
                    <div className="text-white/70 text-xs truncate">@vardoxstudio</div>
                  </div>
                </a>

                <a 
                  href="https://youtube.com/@vardoxstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Youtube size={20} className="text-[#ff7a3d]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-sm">YouTube</div>
                    <div className="text-white/70 text-xs truncate">Vardox Studio</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/company/vardoxstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin size={20} className="text-[#ff7a3d]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-sm">LinkedIn</div>
                    <div className="text-white/70 text-xs truncate">Vardox Studio</div>
                  </div>
                </a>

                <a 
                  href="https://facebook.com/vardoxstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Facebook size={20} className="text-[#ff7a3d]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-sm">Facebook</div>
                    <div className="text-white/70 text-xs truncate">Vardox Studio</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="mt-5 md:mt-6 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="w-3 h-3 bg-[#3dd9a8] rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-white font-semibold text-xs md:text-sm">Usually responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}