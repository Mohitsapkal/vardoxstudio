"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{from}</span>;
}

/* ── Floating 3D decorative elements — larger, bouncy, smooth diagonal drift ── */
const floatingElements = [
  {
    el: (
      <svg viewBox="0 0 40 40" width="72" height="72" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 12px rgba(255,107,53,0.75))"}}>
        <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="#ff6b35" />
      </svg>
    ),
    style: "top-[16%] left-[5%]",
    animate: { y: [-20, 20, -20], x: [-10, 12, -10], rotate: [0, 25, 0], scale: [1, 1.1, 1] },
    duration: 5,
  },
  {
    el: (
      <svg viewBox="0 0 40 40" width="64" height="64" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 10px rgba(157,126,255,0.8))"}}>
        <rect x="15" y="2" width="10" height="36" rx="5" fill="#9d7eff" />
        <rect x="2" y="15" width="36" height="10" rx="5" fill="#9d7eff" />
      </svg>
    ),
    style: "top-[32%] left-[11%]",
    animate: { y: [16, -16, 16], x: [8, -10, 8], rotate: [0, 90, 0] },
    duration: 4.2,
  },
  {
    el: (
      <svg viewBox="0 0 40 40" width="70" height="70" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 14px rgba(244,241,87,0.75))"}}>
        <polygon points="20,2 24,14 37,14 27,22 31,35 20,27 9,35 13,22 3,14 16,14" fill="#f4f157" />
      </svg>
    ),
    style: "top-[10%] right-[8%]",
    animate: { y: [-22, 14, -22], x: [10, -8, 10], rotate: [0, -40, 0], scale: [1, 1.12, 1] },
    duration: 6,
  },
  {
    el: (
      <svg viewBox="0 0 40 40" width="62" height="62" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 10px rgba(61,217,168,0.75))"}}>
        <polygon points="20,2 38,20 20,38 2,20" fill="#3dd9a8" />
      </svg>
    ),
    style: "top-[44%] left-[4%]",
    animate: { y: [14, -18, 14], x: [-8, 10, -8], rotate: [0, 45, 0] },
    duration: 7,
  },
  {
    el: (
      <svg viewBox="0 0 40 40" width="68" height="68" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 12px rgba(255,107,53,0.65))"}}>
        <circle cx="20" cy="20" r="15" fill="none" stroke="#ff6b35" strokeWidth="5" />
      </svg>
    ),
    style: "top-[20%] right-[5%]",
    animate: { y: [18, -12, 18], x: [-10, 8, -10], scale: [1, 1.18, 1] },
    duration: 5.5,
  },
  {
    el: (
      <svg viewBox="0 0 40 40" width="58" height="58" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 10px rgba(255,79,163,0.75))"}}>
        <rect x="16" y="3" width="8" height="34" rx="4" fill="#ff4fa3" />
        <rect x="3" y="16" width="34" height="8" rx="4" fill="#ff4fa3" />
      </svg>
    ),
    style: "top-[50%] right-[10%]",
    animate: { y: [-16, 20, -16], x: [10, -12, 10], rotate: [0, -90, 0] },
    duration: 4.5,
  },
  {
    el: (
      <svg viewBox="0 0 40 40" width="56" height="56" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 10px rgba(157,126,255,0.75))"}}>
        <path d="M20 3 L22.5 17 L36 20 L22.5 23 L20 37 L17.5 23 L4 20 L17.5 17 Z" fill="#9d7eff" />
      </svg>
    ),
    style: "top-[62%] left-[8%]",
    animate: { y: [12, -20, 12], x: [-10, 8, -10], rotate: [0, 30, 0], scale: [1, 1.1, 1] },
    duration: 6.5,
  },
  {
    el: (
      <svg viewBox="0 0 28 48" width="46" height="66" xmlns="http://www.w3.org/2000/svg" style={{filter:"drop-shadow(0 0 10px rgba(244,241,87,0.8))"}}>
        <polyline points="22,2 8,22 18,22 6,46" fill="none" stroke="#f4f157" strokeWidth="5"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    style: "top-[36%] right-[14%]",
    animate: { y: [-14, 18, -14], x: [-8, 8, -8], rotate: [0, 15, 0] },
    duration: 3.8,
  },
];

const ROW1 = [
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=280&fit=crop",
];

const ROW2 = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=280&fit=crop",
];

const ROW3 = [
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop",
];

interface TickerColProps {
  images: string[];
  direction?: "up" | "down";
  speed?: number;
}

function TickerCol({ images, direction = "up", speed = 30 }: TickerColProps) {
  const all = [...images, ...images, ...images];
  const animate_y: [string, string] = direction === "up"
    ? ["0%", "-33.33%"]
    : ["-33.33%", "0%"];

  return (
    <div className="overflow-hidden relative flex-1" style={{ height: "420px" }}>
      <motion.div
        className="flex flex-col gap-3 w-full"
        animate={{ y: animate_y }}
        transition={{ duration: speed, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      >
        {all.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full rounded-xl overflow-hidden"
            style={{ height: "160px" }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PortfolioHero() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0e1a]">
      {/* ── Top hero content ── */}
      <div className="relative pt-20 pb-12 sm:pb-16 flex items-center min-h-[55vh]">
        {/* Background Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9d7eff] rounded-full opacity-10 blur-[100px] pointer-events-none"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff6b35] rounded-full opacity-10 blur-[120px] pointer-events-none"
          animate={{ x: [50, -50, 50], y: [50, -50, 50], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Floating 3D decorative elements ── */}
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute hidden lg:block pointer-events-none z-10 ${item.style}`}
            animate={item.animate}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              delay: i * 0.25,
              times: [0, 0.5, 1],
            }}
          >
            {item.el}
          </motion.div>
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="flex justify-center">
            <motion.div
              className="max-w-3xl text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={textVariants}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#9d7eff]/10 border border-[#9d7eff]/30 rounded-full mb-5 sm:mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#9d7eff] animate-pulse" />
                <span className="text-[#9d7eff] text-sm font-bold tracking-wider">OUR WORK</span>
              </motion.div>

              <motion.h1
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight"
              >
                A GLIMPSE INTO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#9d7eff]">
                  OUR CREATIVE WORK
                </span>
              </motion.h1>

              <motion.p
                variants={textVariants}
                className="text-base sm:text-xl text-gray-300 leading-relaxed mb-7 sm:mb-10"
              >
                Explore our portfolio of successful campaigns, compelling videos, and impactful brand
                stories that have driven real results for businesses across industries.
              </motion.p>

              <motion.div
                variants={textVariants}
                className="flex flex-wrap gap-4 items-center justify-center mb-10 sm:mb-14"
              >
                <Link href="#portfolio-grid">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-[#ff6b35] text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all text-sm sm:text-base"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Case Studies <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={textVariants}
                className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8"
              >
                {[
                  { number: 500, label: "Videos Created", suffix: "+", color: "text-[#ff6b35]" },
                  { number: 100, label: "Happy Clients", suffix: "+", color: "text-[#3dd9a8]" },
                  { number: 10, label: "Industries", suffix: "+", color: "text-[#9d7eff]" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-colors hover:bg-white/10"
                  >
                    <div className={`text-2xl sm:text-4xl font-black ${stat.color} mb-1 flex items-center justify-center`}>
                      <Counter to={stat.number} />
                      <span>{stat.suffix}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Ticker Scroll Section ── */}
      <div className="relative pb-12 sm:pb-20">
        {/* Top & bottom fade masks */}
        <div className="absolute left-0 top-0 right-0 h-20 bg-gradient-to-b from-[#0a0e1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute left-0 bottom-0 right-0 h-20 bg-gradient-to-t from-[#0a0e1a] to-transparent z-10 pointer-events-none" />

        {/* Big overlay text */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none select-none">
          <motion.p
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[clamp(2.5rem,9vw,7rem)] font-black text-white/90 tracking-tight leading-none text-center px-4"
            style={{ textShadow: "0 0 60px rgba(0,0,0,0.9)" }}
          >
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#9d7eff]">
              SHOWCASE
            </span>
          </motion.p>
        </div>

        {/* Five vertical scrolling columns */}
        <div className="flex gap-3 px-3">
          <TickerCol images={ROW1.slice(0, 5)} direction="up"   speed={28} />
          <TickerCol images={ROW2.slice(0, 5)} direction="down" speed={22} />
          <TickerCol images={ROW3.slice(0, 5)} direction="up"   speed={32} />
          <TickerCol images={ROW1.slice(3, 8)} direction="down" speed={25} />
          <TickerCol images={ROW2.slice(3, 8)} direction="up"   speed={20} />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 z-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
