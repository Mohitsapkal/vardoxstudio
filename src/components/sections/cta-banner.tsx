"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

const CtaBanner = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0A1F35] rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="hidden lg:block absolute top-[25%] left-[18%] w-[80px] h-[80px] -rotate-15 transform-gpu animate-float">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-[20%] right-[15%] w-[88px] h-[88px] rotate-15 transform-gpu animate-float-delayed">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="hidden lg:block absolute top-[55%] right-[9%] w-[32px] h-[32px] animate-pulse-slow">
            <div className="w-full h-full bg-white rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="hidden md:block absolute bottom-[25%] left-[10%] w-[32px] h-[32px] -rotate-15 transform-gpu animate-wiggle">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div className="hidden md:block absolute bottom-[15%] left-[12%] sm:left-[20%] -rotate-[10deg] transform-gpu animate-bounce-slow">
            <div className="bg-[#FF5757] text-white text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg">
                Video Strategy
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10">
              <div className="relative animate-fade-in-up">
                <h2 className="font-inter font-black text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] leading-tight tracking-[-0.01em] max-w-5xl px-4 sm:px-0">
                    READY TO PARTNER WITH VARDOX STUDIO &amp; CREATE{' '}
                    <span className="relative inline-block whitespace-nowrap">
                        <span className="absolute -inset-x-1 sm:-inset-x-2 lg:-inset-x-2.5 -inset-y-0.5 sm:-inset-y-1 bg-accent-yellow rounded-full z-0 animate-pulse-slow"></span>
                        <span className="relative z-10 text-[#0A1F35]">IMPACTFUL</span>
                    </span>
                    {' '}CONTENT?
                </h2>
                <div className="hidden lg:block absolute -top-3 right-[24%] rotate-[10deg] transform-gpu z-20 animate-float-delayed">
                  <div className="bg-accent-yellow text-[#0A1F35] text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                      Creative Solutions
                  </div>
                </div>
              </div>
              
              <a href="mailto:vardoxstudio@gmail.com" className="inline-flex items-center justify-center gap-2 bg-white text-primary-background font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-2xl hover:scale-105 animate-fade-in-up group text-sm sm:text-base" style={{ animationDelay: "0.2s" }}>
                  <Mail size={18} className="text-primary-background" />
                  Email Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;