"use client";

import Image from "next/image";
import { Video, ArrowUpRight, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const AnimatedNumber = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string, prefix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => prefix + Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { 
        duration: 5, 
        ease: [0.16, 1, 0.3, 1] 
      });
    }
  }, [count, value, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const decorativeElements = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/AeFvXhaWzVGf2nW55xquWsfteBM-1.svg", alt: "Orange hand gesture icon", className: "top-[12%] left-[16%] w-10 h-auto animate-float", width: 39, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/images/BCq0p16QtiLSy6fx05CaUoQbwfM-2.png", alt: "Yellow lightbulb badge", className: "top-[15%] right-[18%] w-[80px] h-auto animate-pulse-slow", width: 120, height: 120 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/skbUtvcpmTUqWb39ckLj1ra7TE-2.svg", alt: "Purple plus icon", className: "top-[28%] left-[22%] w-8 h-auto animate-spin-slow", width: 39, height: 39 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/3UclJG1nnrRt1fIFjY95idlaaWc-3.svg", alt: "Blue SVG shape", className: "top-[20%] right-[14%] w-11 h-auto animate-bounce-slow", width: 42, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/Mfur6LVh1A1lVv5s9OYSbdNovE-4.svg", alt: "Yellow star icon", className: "top-1/2 left-[18%] w-8 h-auto animate-float-delayed", width: 38, height: 37 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/BGqpp1YM4qKJdHY9REqeaffeszU-5.svg", alt: "Purple SVG shape", className: "top-[55%] right-[18%] w-8 h-auto animate-wiggle", width: 39, height: 38 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/w74BtURgAfP02oAyj5vLEQq1KcY-7.svg", alt: "Squiggle shape", className: "top-[60%] left-1/2 -translate-x-1/2 w-14 h-auto animate-bounce-slow", width: 63, height: 36 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/aqSEgVe0vvPg1pqf7rmn1e3Bqw-8.svg", alt: "Purple star icon", className: "top-[65%] left-[24%] w-8 h-auto animate-pulse-slow", width: 39, height: 39 },
];

const words = [
  "Scroll-Stopping Videos",
  "High-Converting Content",
  "Engaging Brand Stories",
  "Result-Driven Campaigns",
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Birthday theme animation cracker - Localized and Slower
    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true
    });

    let intervalId: NodeJS.Timeout;

    const fireConfetti = () => {
      myConfetti({
        particleCount: 2, // Tiny continuous bursts
        startVelocity: 2,
        angle: 270, // Straight down
        spread: 90,
        origin: { x: Math.random(), y: 0 }, // Start exactly at the top edge
        colors: ['#ff8c42', '#ff4757', '#9b7fff', '#3dd9a8', '#f4f157'],
        gravity: 0.4, // Slower falling speed
        ticks: 400, // Particles last longer on screen
        scalar: 0.8, // Slightly smaller confetti
        drift: (Math.random() - 0.5) * 2 // Gentle sway
      });
    };
    
    // Fire every 150ms instead of every animation frame (makes it look slower/sparser)
    const timer = setTimeout(() => {
      intervalId = setInterval(fireConfetti, 150);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (intervalId) {
        clearInterval(intervalId);
      }
      myConfetti.reset();
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timer = setTimeout(() => {}, 400);
          return;
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section id="hero" className="relative bg-[#0A1F35] text-white pt-32 lg:pt-40 pb-40 lg:pb-60 overflow-hidden font-body">
      {/* Localized Confetti Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[100]" />
      
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-cursor-blink {
          animation: cursor-blink 0.9s infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-move 4s ease infinite;
        }
      `}</style>
      {decorativeElements.map((dec, i) => (
        <Image key={i} src={dec.src} alt={dec.alt} width={dec.width} height={dec.height} className={`absolute ${dec.className} hidden lg:block z-0`} style={{ animationDelay: `${i * 0.2}s` }} />
      ))}

      <div className="container mx-auto px-5 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm p-1.5 pr-4 mb-6 animate-fade-in-down">
              <div className="bg-[#ff5757]/20 rounded-full flex items-center justify-center h-7 w-7 animate-pulse">
                <Video className="text-[#ff5757] h-4 w-4" fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-white">#1 Creative Video Marketing Agency</p>
            </div>

            <h1 className="font-body font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.15] tracking-tight uppercase animate-fade-in-down" style={{ fontFamily: "var(--font-body)" }}>
              We Create <br />
              <span className="inline-block whitespace-nowrap min-h-[1.1em] bg-gradient-to-r from-[#9B7FFF] via-[#FF8C42] to-[#FF5757] text-transparent bg-clip-text animate-gradient-text">
                {currentText || "\u00A0"}
              </span>
              <span className="inline-block w-[5px] sm:w-[8px] md:w-[12px] h-[0.85em] bg-[#FF5757] ml-2.5 animate-cursor-blink align-middle rounded-full"></span>
            </h1>

            <p className="max-w-[600px] text-[#B3B3B3] text-base sm:text-lg mt-6 animate-fade-in-down" style={{ animationDelay: "0.6s" }}>
              We blend creativity, strategy, and storytelling to produce videos, Instagram and social media campaigns that connect with audiences and build lasting brand presence.
            </p>

            <a href="#contact" className="inline-flex items-center justify-center bg-white text-primary-background font-semibold py-3 sm:py-[14px] px-6 sm:px-8 rounded-lg mt-8 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fade-in-down hover:scale-105 text-sm sm:text-base" style={{ animationDelay: "0.7s" }}>
              GET IN TOUCH
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column - Beautiful Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative animate-fade-in-down" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-40 h-52 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-[320px] lg:h-[400px] xl:w-[380px] xl:h-[480px] transform transition-transform duration-500 hover:scale-105 z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"></div>
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/images/YZ4YVYvxYcrDZTkwymDWD8arcwI-3.png" alt="Video Content" width={385} height={482} className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-0.5" />
              <p className="absolute top-2 -left-3 text-black font-display text-xs sm:text-sm tracking-widest px-3 py-1 bg-white rounded-full transform -rotate-[15deg] animate-float">Creative</p>
              <p className="absolute bottom-2 -right-3 text-black font-display text-xs sm:text-sm tracking-widest px-4 py-1.5 bg-white rounded-full transform -rotate-[15deg] animate-float-delayed">Visual</p>
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/zF24pyp35mOT35C0XWrgS7ZIoek-6.svg" alt="Crown Icon" width={41} height={39} className="absolute -bottom-3 -right-4 w-8 sm:w-10 h-auto animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-5 lg:px-20 mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div className="relative h-32 sm:h-40 md:h-48 hidden md:block animate-fade-in-down" style={{ animationDelay: "0.8s" }}>
            <div className="absolute px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md bg-[#ff8c42] rotate-[-10deg] top-[50%] left-[15%] animate-float">Creativity</div>
            <div className="absolute px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md bg-[#9b7fff] rotate-[-10deg] top-[25%] left-[5%] animate-float-delayed">Quality</div>
            <div className="absolute px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md bg-[#f4f157] text-black rotate-[10deg] top-[55%] left-[45%] animate-bounce-slow">Results</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center sm:items-stretch sm:justify-end animate-fade-in-down" style={{ animationDelay: "0.9s" }}>
            <StatCard value={49} suffix="+" description="Happy Clients" bgColor="bg-[#f4f157]" textColor="text-red-600" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 max-w-sm mt-4 sm:mt-6 hidden md:block md:ml-auto md:text-right animate-fade-in-down" style={{ animationDelay: "1s" }}>
          Helping brands thrive with strategic video content, creative storytelling, and results-focused marketing.
        </p>
      </div>

      <div className="absolute bottom-[-1px] left-0 w-full h-[100px] lg:h-[160px]">
        <svg viewBox="0 0 1920 160" width="100%" height="100%" preserveAspectRatio="none" className="absolute bottom-0 left-0">
          <path d="M 0 0 C 480 81.6 1440 81.6 1920 0 L 1920 160 L 0 160 Z" fill="#F8F8F8" />
        </svg>
      </div>
    </section>
  );
};

const StatCard = ({ value, suffix = "", description, bgColor, textColor }: { value: number, suffix?: string, description: string, bgColor: string, textColor: string }) => (
  <a href="/about" className={`relative p-4 sm:p-6 lg:p-8 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full max-w-[280px] block ${bgColor} ${textColor} overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
    <div className="absolute top-3 sm:top-4 lg:top-5 right-3 sm:right-4 lg:right-5 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/50 transition-all duration-300 group-hover:rotate-45">
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-transform duration-300" />
    </div>
    <h4 className={`font-display font-black text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 ${textColor}`}>
      <AnimatedNumber value={value} suffix={suffix} />
    </h4>
    <p className={`text-xs sm:text-sm font-medium pr-6 sm:pr-8 lg:pr-10 leading-tight ${textColor}`}>{description}</p>
    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/LMnSzKwI5us0vw7JhMZzlwhPdo-9.svg" alt="Card Shape" width={40} height={26} className="absolute bottom-0 left-3 sm:left-4 lg:left-5 w-6 sm:w-8 lg:w-10 h-auto opacity-40 transition-opacity duration-300 group-hover:opacity-60"/>
    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/svgs/TnubgyUbK79WUzuRwVKhPKgas-10.svg" alt="Card Shape" width={40} height={27} className="absolute bottom-0 right-3 sm:right-4 lg:right-5 w-6 sm:w-8 lg:w-10 h-auto opacity-40 transition-opacity duration-300 group-hover:opacity-60"/>
  </a>
);

export default Hero;