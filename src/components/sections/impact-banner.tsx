import Image from "next/image";

const Badge = ({
  text,
  colorClass,
  textColorClass,
  positionClass,
  rotationClass,
}: {
  text: string;
  colorClass: string;
  textColorClass: string;
  positionClass: string;
  rotationClass: string;
}) => (
  <div
    className={`absolute ${positionClass} text-xs font-semibold px-3 py-1.5 lg:text-sm lg:px-4 lg:py-2 rounded-full shadow-md ${colorClass} ${textColorClass} ${rotationClass}`}
  >
    {text}
  </div>
);

const ImpactBanner = () => {
  return (
    <section className="container py-20 md:py-24 lg:py-32">
      <div
        className="relative rounded-[48px] bg-gradient-to-br from-[#9B7FFF] to-[#B794FF] text-white p-8 md:p-12 lg:p-16 overflow-hidden"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 53% 100%, 52% calc(100% - 20px), 51% 100%, 49% 100%, 48% calc(100% - 20px), 47% 100%, 0% 100%)",
        }}
      >
        <Badge
          text="Creativity"
          colorClass="bg-[#3DD9A8]"
          textColorClass="text-primary-background"
          positionClass="top-[35%] left-[5%] md:top-[40%] md:left-[10%] lg:top-[25%] lg:left-[15%]"
          rotationClass="transform -rotate-6"
        />
        <Badge
          text="Quality"
          colorClass="bg-[#FF7A3D]"
          textColorClass="text-primary-background"
          positionClass="top-[10%] right-[8%] md:top-[15%] md:right-[20%]"
          rotationClass="transform rotate-3"
        />
        <Badge
          text="Innovation"
          colorClass="bg-[#FF5757]"
          textColorClass="text-white"
          positionClass="top-[50%] right-[5%] md:right-[10%]"
          rotationClass="transform rotate-6"
        />
        <Badge
          text="Results"
          colorClass="bg-[#F4F157]"
          textColorClass="text-primary-background"
          positionClass="bottom-[28%] left-1/2 -translate-x-1/2 lg:bottom-[25%]"
          rotationClass="transform -rotate-2"
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
          <h1 className="font-inter font-black text-[32px] leading-tight md:text-[48px] lg:text-[64px] lg:leading-[1.1] tracking-[-0.01em]">
            TURNING YOUR BRAND INTO A VISUAL STORY PEOPLE REMEMBER!
          </h1>
        </div>

        <p className="hidden md:block absolute bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-20 text-sm text-white/80 max-w-[250px]">
          Scroll-stopping content that drives engagement and visibility
        </p>

        <div className="hidden md:block absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-20">
          <div className="flex items-center gap-3">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/vardox-logo-1761230691901.png?width=80&height=80&resize=contain"
              alt="Vardox Studio Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain bg-white rounded-lg p-1"
            />
            <span className="text-white font-black text-2xl tracking-tight">VARDOX</span>
          </div>
        </div>

        <div className="md:hidden mt-8 flex flex-col items-center text-center gap-6">
          <p className="text-sm text-white/80 max-w-[250px]">
            Scroll-stopping content that drives engagement and visibility
          </p>
          <div className="flex items-center gap-2.5">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/vardox-logo-1761230691901.png?width=64&height=64&resize=contain"
              alt="Vardox Studio Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain bg-white rounded-lg p-1"
            />
            <span className="text-white font-black text-xl tracking-tight">VARDOX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;