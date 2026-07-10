"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Target, Zap, Clock } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const AnimatedNumber = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string, prefix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => prefix + Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { 
        duration: 5, // Increased duration for smoother, slower motion
        ease: [0.16, 1, 0.3, 1] // Very smooth, slow ease-out
      });
    }
  }, [count, value, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white py-24 lg:py-40 overflow-hidden text-gray-900 z-0">
      {/* Background Ambience for Light Theme */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[-20%] w-[600px] h-[600px] bg-red-50 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
            <motion.div variants={fadeUpVariant}>
              <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 font-bold text-gray-900 bg-gray-100 rounded-full text-xs tracking-[0.2em] uppercase border border-gray-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#ff8c42]" />
                The Vardox Advantage
              </span>
            </motion.div>
            <motion.h2 
              variants={fadeUpVariant}
              className="font-black text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight uppercase text-gray-900"
              style={{ fontFamily: "'Impact', sans-serif" }}
            >
              Why We're Your Next{' '}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] via-[#9b7fff] to-[#3dd9a8]"
                style={{ backgroundSize: "200% auto" }}
              >
                Creative Partner
              </motion.span>
            </motion.h2>
            <motion.p 
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-gray-500 mt-8 max-w-2xl mx-auto font-medium"
            >
              We don't just deliver content. We engineer visual experiences that drive measurable outcomes, engagement, and brand authority.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            
            {/* Stat Box 1 */}
            <motion.div 
              variants={fadeUpVariant}
              className="lg:col-span-1 bg-gradient-to-br from-[#ff8c42] to-[#ff4757] border border-transparent rounded-[32px] p-10 flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#ff8c42]/20 transition-all duration-500 overflow-hidden relative text-white"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                <Target className="w-32 h-32" />
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-white/30">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight text-white">Creative Excellence</h4>
                <p className="text-white/80 leading-relaxed font-medium">
                  Bold ideas and unique visual storytelling designed specifically to capture and retain attention in today's fast-scroll world.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-white/20">
                <h3 className="text-6xl font-black tracking-tighter mb-2 font-display text-white">
                  <AnimatedNumber value={500} suffix="+" />
                </h3>
                <span className="text-sm font-bold tracking-widest text-white/90 uppercase">Videos Produced</span>
              </div>
            </motion.div>

            {/* Center Image Box */}
            <motion.div 
              variants={fadeUpVariant}
              className="lg:col-span-1 rounded-[32px] overflow-hidden relative min-h-[400px] lg:min-h-full group shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Creative Team"
                fill
                className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 right-8">
                <a href="/about" className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl">
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Stat Box 2 & 3 Column */}
            <div className="lg:col-span-1 flex flex-col gap-6 lg:gap-8">
              
              {/* Stat Box 2 */}
              <motion.div 
                variants={fadeUpVariant}
                className="flex-1 bg-gradient-to-br from-[#9b7fff] to-[#3dd9a8] border border-transparent rounded-[32px] p-8 md:p-10 flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#9b7fff]/20 transition-all duration-500 relative overflow-hidden text-white"
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                  <Zap className="w-24 h-24" />
                </div>
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-md">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter font-display text-white">
                      <AnimatedNumber value={200} suffix="%" />
                    </h3>
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-white">Results Focused</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                    We track performance to deliver measurable engagement and conversions.
                  </p>
                </div>
              </motion.div>

              {/* Stat Box 3 (Kept Dark/Colored for contrast) */}
              <motion.div 
                variants={fadeUpVariant}
                className="flex-1 bg-gradient-to-br from-[#ff4757] to-[#c0392b] border border-transparent rounded-[32px] p-8 md:p-10 flex flex-col justify-between group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 relative overflow-hidden text-white"
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                  <Clock className="w-24 h-24 text-white" />
                </div>
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white font-display">
                      24/7
                    </h3>
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-white">Dedicated Support</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                    Rapid turnaround times and constant communication for peace of mind.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}