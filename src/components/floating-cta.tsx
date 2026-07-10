"use client";

import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[999] w-16 h-16 bg-gradient-to-br from-[#ff7a3d] to-[#ff5757] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_60px_rgba(255,122,61,0.5)] group ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Let's Talk"
      >
        <MessageCircle size={28} className="animate-bounce-slow" />
        
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#ff7a3d] opacity-75 animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#3dd9a8] rounded-full border-2 border-white animate-pulse"></span>
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[999] w-[380px] max-w-[calc(100vw-2rem)] animate-scale-in shadow-2xl">
          <div className="bg-white rounded-[32px] overflow-hidden border-2 border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#ff7a3d] to-[#ff5757] p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-white font-black text-xl mb-1">Let's Talk! 💬</h3>
                  <p className="text-white/90 text-sm">We'll reply within 24 hours</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="popup-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="popup-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="popup-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="popup-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="popup-message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="popup-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7a3d] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-[#ff7a3d] to-[#ff5757] text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message <Send size={18} />
              </button>

              <div className="text-center">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={16} />
                  Or chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}