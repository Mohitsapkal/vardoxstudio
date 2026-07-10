"use client";

import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="bg-card-background-white py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px]">
          
          <div className="w-full max-w-[450px] lg:flex-shrink-0 lg:w-[450px] animate-slide-in-left">
            <div className="relative aspect-[450/548] overflow-hidden rounded-[32px] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=450&h=548&fit=crop&crop=center"
                alt="Successful business team celebrating growth and achievements"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              {/* Overlay with success metrics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">300% Growth</span>
                </div>
                <p className="text-sm opacity-90">Client Success Story</p>
              </div>
            </div>
          </div>

          <div className="relative w-full flex-grow text-center lg:text-left">
            <div className="relative inline-block lg:block">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5cc4c2ad-6595-4dfe-8861-5d04268ae61b-revento-framer-website/assets/images/VJfhCUd5WwmzhreVEXOcwKQ8Zk8-9.png"
                alt="Quote icon badge"
                width={64}
                height={64}
                className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-0 lg:top-0 lg:-translate-y-1/2 lg:-translate-x-4 animate-pulse-slow"
              />

              <div className="mb-6 animate-fade-in-down">
                <div className="inline-flex items-center justify-center rounded-full bg-accent-red px-4 py-2 relative">
                  <h5 className="font-body text-[14px] font-bold leading-none tracking-wide text-white">
                    CLIENT SUCCESS
                  </h5>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                    alt="Happy client"
                    width={24}
                    height={24}
                    className="ml-2 rounded-full border-2 border-white"
                  />
                </div>
              </div>

              <h3 className="font-display text-[24px] md:text-[32px] lg:text-[42px] font-bold leading-tight text-text-primary mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                VARDOX STUDIO TRANSFORMED OUR BRAND WITH <span className="text-text-secondary">STUNNING VIDEO CONTENT</span> THAT TRIPLED OUR ENGAGEMENT!
              </h3>
              
              <p className="font-body text-base font-normal text-text-secondary animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Priya S., E-commerce Brand Owner
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;