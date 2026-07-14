"use client";

import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue, useInView, animate, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
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

export default function PortfolioHero() {
  // Parallax / Tilt logic for right side cards
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0a0e1a] pt-20 pb-8 flex items-center">
      {/* Background Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9d7eff] rounded-full opacity-10 blur-[100px]"
        animate={{ 
          x: [-50, 50, -50], 
          y: [-50, 50, -50], 
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff6b35] rounded-full opacity-10 blur-[120px]"
        animate={{ 
          x: [50, -50, 50], 
          y: [50, -50, 50], 
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#9d7eff]/10 border border-[#9d7eff]/30 rounded-full mb-5 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#9d7eff] animate-pulse"></span>
              <span className="text-[#9d7eff] text-sm font-bold tracking-wider">OUR WORK</span>
            </motion.div>
            
            <motion.h1 variants={textVariants} className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              A GLIMPSE INTO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#9d7eff]">
                OUR CREATIVE WORK
              </span>
            </motion.h1>
            
            <motion.p variants={textVariants} className="text-base sm:text-xl text-gray-300 leading-relaxed mb-7 sm:mb-10">
              Explore our portfolio of successful campaigns, compelling videos, and impactful brand stories 
              that have driven real results for businesses across industries.
            </motion.p>
            
            <motion.div variants={textVariants} className="flex flex-wrap gap-4 items-center mb-10 sm:mb-16">
              <Link href="#portfolio-grid">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-[#ff6b35] text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Case Studies <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={textVariants} className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8">
              {[
                { number: 500, label: "Videos Created", suffix: "+", color: "text-[#ff6b35]" },
                { number: 100, label: "Happy Clients", suffix: "+", color: "text-[#3dd9a8]" },
                { number: 10, label: "Industries", suffix: "+", color: "text-[#9d7eff]" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-colors hover:bg-white/10"
                >
                  <div className={`text-2xl sm:text-4xl font-black ${stat.color} mb-1 flex items-center`}>
                    <Counter to={stat.number} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative h-[600px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              {/* Stacked Cards */}
              <div className="relative w-[340px] h-[480px]">
                {/* Back card */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-[#9d7eff] shadow-2xl overflow-hidden"
                  style={{ transform: "translateZ(-50px) rotate(-8deg) translateX(-30px)" }}
                >
                  <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop" alt="Work 1" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                </motion.div>
                
                {/* Middle card */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-[#0a0e1a] border border-[#ff6b35]/30 shadow-2xl overflow-hidden"
                  style={{ transform: "translateZ(0px) rotate(4deg) translateX(30px)" }}
                >
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="Work 2" className="w-full h-full object-cover opacity-80" />
                </motion.div>
                
                {/* Front card */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-[#0a0e1a] border border-white/20 shadow-2xl overflow-hidden group"
                  style={{ transform: "translateZ(50px) rotate(-2deg)" }}
                >
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" alt="Work 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-[#ff6b35] text-white text-xs font-bold rounded-full mb-3">Featured</div>
                    <h3 className="text-2xl font-bold text-white">LuxuryLaunch Campaign</h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
