"use client";

import { motion } from "framer-motion";
import React from "react";

/* ── Inline SVGs for icons whose CDN images don't render well ── */
const FilmoraSVG = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
    <rect width="80" height="80" rx="18" fill="#00C4B3" />
    {/* Filmora stylised "F" with film-strip notches */}
    <rect x="18" y="16" width="8" height="48" rx="3" fill="white" />
    <rect x="18" y="16" width="36" height="8" rx="3" fill="white" />
    <rect x="18" y="36" width="28" height="8" rx="3" fill="white" />
    {/* film notches */}
    <rect x="54" y="20" width="6" height="10" rx="2" fill="white" opacity="0.7" />
    <rect x="54" y="36" width="6" height="10" rx="2" fill="white" opacity="0.7" />
    <rect x="54" y="52" width="6" height="10" rx="2" fill="white" opacity="0.7" />
  </svg>
);

const CapCutSVG = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
    <rect width="80" height="80" rx="18" fill="#0D0D0D" />
    {/* CapCut scissors / C shape */}
    {/* Left arc – C */}
    <path
      d="M46 22 A20 20 0 1 0 46 58"
      fill="none"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
    />
    {/* Right blade */}
    <line x1="46" y1="22" x2="62" y2="14" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <line x1="46" y1="58" x2="62" y2="66" stroke="white" strokeWidth="6" strokeLinecap="round" />
    {/* Pivot dot */}
    <circle cx="40" cy="40" r="4" fill="#0D0D0D" />
  </svg>
);

interface IconEntry {
  name: string;
  bg: string;
  img?: string;
  svg?: React.ReactNode;
  invert?: boolean;
}

/* ── Icon list ── */
const icons: IconEntry[] = [
  {
    name: "Premiere Pro",
    bg: "#2D0A73",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/adobepremierepro.svg",
    invert: true,
  },
  {
    name: "Filmora",
    bg: "#00C4B3",
    svg: <FilmoraSVG />,
  },
  {
    name: "CapCut",
    bg: "#0D0D0D",
    svg: <CapCutSVG />,
  },
  {
    name: "Photoshop",
    bg: "#001E36",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/adobephotoshop.svg",
    invert: true,
  },
  {
    name: "Figma",
    bg: "#1E1E1E",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/figma.svg",
    invert: true,
  },
  {
    name: "Blender",
    bg: "#1A0A00",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/blender.svg",
    invert: true,
  },
  {
    name: "Canva",
    bg: "#7D2AE8",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/canva.svg",
    invert: true,
  },
  {
    name: "YouTube",
    bg: "#FF0000",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/youtube.svg",
    invert: true,
  },
  {
    name: "Instagram",
    bg: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg",
    invert: true,
  },
  {
    name: "Facebook",
    bg: "#1877F2",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/facebook.svg",
    invert: true,
  },
  {
    name: "LinkedIn",
    bg: "#0A66C2",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg",
    invert: true,
  },
  {
    name: "X (Twitter)",
    bg: "#000000",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg",
    invert: true,
  },
];

const allIcons = [...icons, ...icons, ...icons];

export default function ToolsStrip() {
  return (
    <div className="bg-white py-10 sm:py-14 overflow-hidden border-y border-gray-100">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 px-4 sm:px-6"
      >
        <p className="text-gray-400 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold mb-2">
          Powered By
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
          OUR{" "}
          <span className="bg-gradient-to-r from-[#ff6b35] to-[#9d7eff] bg-clip-text text-transparent">
            STACK
          </span>
        </h2>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-6 sm:gap-10 lg:gap-12 w-max px-4 sm:px-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {allIcons.map((tool, i) => (
            <div
              key={i}
              title={tool.name}
              className="group flex-shrink-0 flex flex-col items-center gap-2 cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-14 h-14 sm:w-[72px] sm:h-[72px] lg:w-20 lg:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
                style={{ background: tool.bg }}
              >
                {tool.svg ? (
                  /* Inline SVG path */
                  <div className="flex items-center justify-center">
                    {tool.svg}
                  </div>
                ) : (
                  /* CDN image path */
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain"
                    style={{ filter: tool.invert ? "invert(1)" : "none" }}
                    loading="lazy"
                  />
                )}
              </motion.div>
              <span className="text-[9px] sm:text-[11px] font-bold text-gray-400 group-hover:text-gray-700 transition-colors text-center leading-tight max-w-[64px] sm:max-w-[80px]">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
