"use client";

import Image from 'next/image';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useServicePopup } from "@/context/ServicePopupContext";

const services = [
  {
    id: "video-production",
    number: "01",
    title: 'Video Production',
    description: 'Cinematic, high-impact video content from ideation to final cut. We capture your brand\'s essence with stunning visuals that convert viewers into loyal customers.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    color: '#ff8c42',
  },
  {
    id: "branding",
    number: "02",
    title: 'Branding & Design',
    description: 'Establish a memorable, luxury visual identity. We craft bespoke logos and cohesive brand systems that build instant trust with your premium audience.',
    image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=800&auto=format&fit=crop',
    color: '#ff4757',
  },
  {
    id: "social-media",
    number: "03",
    title: 'Social Media',
    description: 'Scale your digital footprint with trend-focused community management. We help brands build active, loyal, and highly-engaged online audiences.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    color: '#9b7fff',
  },
  {
    id: "advertising",
    number: "04",
    title: 'Advertising',
    description: 'Drive immediate sales and high-quality leads with data-driven paid campaigns engineered to maximize your return on ad spend.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    color: '#3dd9a8',
  },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any } },
};

const textRevealVariant = {
  hidden: { opacity: 0, y: 40, rotateX: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
  },
};

const imageRevealVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 60 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } as any },
};

// ─── Individual Service Block Component ────────────────────────────────────────

const ServiceBlock = ({ item, index }: { item: typeof services[0], index: number }) => {
  const isEven = index % 2 === 0;
  const blockRef = useRef(null);
  const { openService } = useServicePopup();

  // Advanced scroll parallax effect for each block
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div
      ref={blockRef}
      className={`flex flex-col gap-12 md:gap-20 items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image/Video Frame Side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={imageRevealVariant}
        className="w-full md:w-1/2 relative group cursor-pointer"
        onClick={() => openService(item.id)}
      >
        <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-black border border-white/10 p-2 md:p-3 shadow-2xl z-10">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden">
            <motion.div 
              style={{ y: imageY, scale: 1.15 }} 
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/90 via-[#060D17]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:scale-110 transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-black ml-1 transition-colors duration-300" />
              </div>
            </div>

            {/* Filmstrip decor */}
            <div className="absolute top-5 left-5 flex gap-2 opacity-60 z-20">
              {[1, 2, 3].map((_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="w-2.5 h-2.5 rounded-full bg-white/50" 
                />
              ))}
            </div>
            
            {/* Recording indicator */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-5 right-5 flex items-center gap-2.5 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-[pulse_1.5s_ease-in-out_infinite]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/90 drop-shadow-md">REC</span>
            </motion.div>
          </div>
        </div>

        {/* Decorative background block */}
        <div
          className="absolute inset-0 -z-0 rounded-[32px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-[40px] md:blur-[60px]"
          style={{ backgroundColor: item.color, transform: 'scale(0.9) translateY(20px)' }}
        />
      </motion.div>

      {/* Text Side */}
      <motion.div
        style={{ y: textY }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="w-full md:w-1/2 flex flex-col justify-center perspective-[1000px]"
      >
        <motion.div variants={textRevealVariant} className="flex items-center gap-5 mb-6">
          <span className="text-5xl md:text-7xl font-black text-white/5 font-display select-none">
            {item.number}
          </span>
          <div className="h-[2px] w-16" style={{ backgroundColor: item.color }} />
        </motion.div>
        
        <motion.h3 
          variants={textRevealVariant}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1] uppercase"
          style={{ fontFamily: "'Impact', sans-serif" }}
        >
          {item.title}
        </motion.h3>
        
        <motion.p 
          variants={textRevealVariant}
          className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg font-medium"
        >
          {item.description}
        </motion.p>
        
        <motion.button
          variants={textRevealVariant}
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openService(item.id)}
          className="group flex items-center gap-4 w-fit overflow-hidden"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-500 relative z-10"
            style={{ backgroundColor: `${item.color}20` }}
          >
            <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" style={{ color: item.color }} />
          </div>
          <span className="font-bold text-sm tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-white" style={{ color: item.color }}>
            Explore Service
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative bg-[#060D17] py-32 lg:py-48 overflow-hidden text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#FF4757]/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-[#9b7fff]/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 relative z-10" ref={ref}>
        {/* ── Header ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center mb-24 md:mb-40"
        >
          <motion.div variants={fadeUpVariant}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 font-bold text-white bg-white/5 rounded-full text-[13px] tracking-widest uppercase border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
              <Sparkles className="w-4 h-4 text-[#FF4757]" />
              Our Capabilities
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-black text-[42px] sm:text-[56px] md:text-[80px] leading-[1.05] tracking-tight uppercase max-w-4xl"
            style={{ fontFamily: "'Impact', sans-serif" }}
          >
            Our Creative{' '}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4757] via-[#9b7fff] to-[#3dd9a8]"
              style={{ backgroundSize: "200% auto" }}
            >
              Services
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl font-medium leading-relaxed"
          >
            We blend strategy with stunning visual storytelling. Explore our core services below.
          </motion.p>
        </motion.div>

        {/* ── Zig Zag Layout ── */}
        <div className="flex flex-col gap-32 md:gap-48">
          {services.map((item, index) => (
            <ServiceBlock key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}