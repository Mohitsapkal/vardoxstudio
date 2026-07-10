"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Calendar, ArrowRight, Sparkles, CheckCircle2,
  Phone, Share2, Download, Check
} from "lucide-react";
import { useServicePopup } from "@/context/ServicePopupContext";
import { servicesDetailData } from "@/data/services-detail";

// Lucide icon mapping
import { Video, Megaphone, Palette, TrendingUp, Users, Target } from "lucide-react";

const iconMap = {
  Video,
  Megaphone,
  Palette,
  TrendingUp,
  Users,
  Target
};

export default function ServicePopupModal() {
  const { activeServiceId, closeService } = useServicePopup();
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const data = activeServiceId ? servicesDetailData[activeServiceId] : null;

  // Handle ESC close and focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeService();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex="0"]'
        );
        if (focusableElements.length === 0) return;
        const first = focusableElements[0] as HTMLElement;
        const last = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (activeServiceId) {
      window.addEventListener("keydown", handleKeyDown);
      // Lock background body scroll to prevent double scrollbar issues
      document.body.style.overflow = "hidden";
      // Set focus to the modal title or close button initially
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector('[aria-label="Close modal"]') as HTMLElement;
        closeBtn?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeServiceId, closeService]);

  // Copy shareable service link
  const handleShare = () => {
    if (!data) return;
    const shareUrl = `${window.location.origin}/services#${data.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!data) return null;

  const IconComponent = iconMap[data.iconName] || Video;

  return (
    <AnimatePresence>
      {activeServiceId && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Blur Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeService}
            className="absolute inset-0 bg-[#060D17]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
            aria-describedby="modal-service-desc"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0A1828] text-white max-w-[950px] w-full rounded-[24px] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.7)] border border-white/10 flex flex-col lg:flex-row max-h-[85vh] z-10"
          >
            {/* LEFT SECTION: SCROLLABLE DETAILED CONTENT */}
            <div
              id="modal-service-desc"
              className="flex-1 bg-[#EAEAEA] text-[#0A1828] p-6 sm:p-8 lg:p-10 overflow-y-auto lg:max-h-[85vh] scrollbar-thin select-none order-2 lg:order-none"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(10,24,40,0.2) transparent"
              }}
            >
              {/* Service Header: Icon, Name & Description */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md shrink-0"
                  style={{ backgroundColor: `${data.accentColor}18` }}
                >
                  <IconComponent size={28} style={{ color: data.accentColor }} />
                </div>
                <div>
                  <h2
                    id="modal-service-title"
                    className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight uppercase font-black tracking-wide text-black"
                  >
                    {data.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
                {data.shortDescription}
              </p>

              {/* What We Provide Cards */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A1828] mb-4 flex items-center gap-2">
                  <Sparkles size={16} style={{ color: data.accentColor }} />
                  What We Provide
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.whatWeProvide.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-xs border border-black/5 hover:shadow-sm hover:border-black/10 transition-all duration-300"
                    >
                      <CheckCircle2 size={16} style={{ color: data.accentColor }} className="shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works (YouTube Video) */}
              <div className="mb-8 border-t border-black/10 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A1828] mb-4 flex items-center gap-2">
                  <Calendar size={16} style={{ color: data.accentColor }} />
                  How It Works
                </h3>

                {/* Showcase YouTube Video Frame */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-black/10 bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title={`${data.title} Process Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mb-8 border-t border-black/10 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A1828] mb-4 flex items-center gap-2">
                  <Sparkles size={16} style={{ color: data.accentColor }} />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-black/5 hover:border-black/10 shadow-2xs hover:shadow-xs transition-all duration-300"
                      style={{ borderLeftWidth: "4px", borderLeftColor: data.accentColor }}
                    >
                      <p className="text-xs font-bold text-[#0A1828] leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A1828] mb-3">Best For</h3>
                <div className="flex flex-wrap gap-1.5">
                  {data.bestFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#0A1828] text-white shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            {/* Technologies Used */}
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A1828] mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-1.5">
                {data.technologiesUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-semibold text-gray-700 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
        </div>

      {/* RIGHT SECTION: PREMIUM VISUAL PANEL */}
      <div className="w-full lg:w-[40%] bg-[#0A1828] relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 h-[220px] lg:h-auto lg:min-h-auto overflow-hidden shrink-0 select-none z-10 order-1 lg:order-none">
        {/* Decorative gold background circle glow */}
        <div
          className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none z-0"
          style={{ backgroundColor: data.accentColor }}
        />

        {/* Close Button */}
        <button
          onClick={closeService}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105 outline-hidden focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0A1828]"
        >
          <X size={18} />
        </button>

        {/* Top Meta Details / Quick actions */}
        <div className="relative z-10 flex justify-between items-center mt-2 lg:mt-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B3B3B3]">Premium Service</span>
          <div className="flex gap-2">
            <button
              onClick={handleShare}
              aria-label="Share service"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} />}
            </button>
            <a
              href={`/brochures/${data.id}.pdf`}
              download
              title="Download Brochure"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <Download size={14} />
            </a>
          </div>
        </div>

        {/* Full-bleed background image */}
        <Image
          src={data.image}
          alt={data.title}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover opacity-25 z-0 transition-transform duration-700 hover:scale-105"
          priority
          unoptimized
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0A1828]/70 to-[#0A1828] z-0 pointer-events-none" />

        {/* Timeline Card & Bottom Action Elements */}
        <div className="relative z-10 space-y-4">
          {/* Floating Timeline Card */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${data.accentColor}25` }}
            >
              <Calendar size={18} style={{ color: data.accentColor }} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#B3B3B3] uppercase tracking-wider block">Estimated Timeline</span>
              <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">{data.estimatedTimeline}</span>
            </div>
          </div>

          {/* Primary & Secondary Action CTAs (Desktop Only) */}
          <div className="hidden lg:flex flex-col gap-3">
            <Link
              href={`/services#${data.id}`}
              onClick={closeService}
              className="w-full py-3.5 bg-white text-[#0A1828] font-bold text-xs sm:text-sm rounded-xl text-center flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              View Complete Service
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              onClick={closeService}
              className="w-full py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm rounded-xl text-center flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
            >
              <Phone size={14} />
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* STICKY CTA ACTION BAR FOR MOBILE */}
      <div className="lg:hidden shrink-0 border-t border-black/10 bg-[#EAEAEA] p-4 flex gap-3 z-20 order-3 lg:order-none">
        <Link
          href={`/services#${data.id}`}
          onClick={closeService}
          className="flex-1 py-3 bg-[#0A1828] text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 hover:opacity-95 transition-opacity"
        >
          View Complete
          <ArrowRight size={14} />
        </Link>
        <Link
          href="/contact"
          onClick={closeService}
          className="flex-1 py-3 bg-white text-[#0A1828] font-semibold text-xs rounded-xl text-center border border-black/10 flex items-center justify-center gap-1.5 hover:bg-gray-50 transition-colors"
        >
          <Phone size={12} />
          Get Consultation
        </Link>
      </div>
    </motion.div>
        </div >
      )
}
    </AnimatePresence >
  );
}
