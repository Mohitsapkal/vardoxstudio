"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Pill = {
  text: string;
  bgColor: string;
  textColor: string;
};

type TimelineItem = {
  title: string;
  duration: string;
  pills: Pill[];
};

type Step = {
  id: number;
  title: string;
  description: string;
  timeline?: TimelineItem[];
};

const stepsData: Step[] = [
  {
    id: 1,
    title: "UNDERSTANDING YOUR BUSINESS",
    description:
      "We begin by getting to know your brand, industry, and audience. By understanding your challenges, goals, and unique value, we lay the foundation.",
    timeline: [
      {
        title: "Strategy",
        duration: "Duration: 3 Weeks",
        pills: [
          { text: "Funtionality", bgColor: "bg-[#F4F157]", textColor: "text-[#0A1F35]" },
          { text: "Goals", bgColor: "bg-[#FF7A3D]", textColor: "text-white" },
          { text: "Ideation", bgColor: "bg-[#FF5757]", textColor: "text-white" },
          { text: "Research", bgColor: "bg-[#3DD9A8]", textColor: "text-[#0A1F35]" },
        ],
      },
      {
        title: "Discovery",
        duration: "Duration: 2 Weeks",
        pills: [
          { text: "User Interviews", bgColor: "bg-[#FF5757]", textColor: "text-white" },
          { text: "Target", bgColor: "bg-[#9D7EFF]", textColor: "text-white" },
          { text: "Flow Chart", bgColor: "bg-[#F4F157]", textColor: "text-[#0A1F35]" },
          { text: "Preliminary", bgColor: "bg-[#FF7A3D]", textColor: "text-white" },
        ],
      },
      {
        title: "Solution",
        duration: "Duration: 4 Weeks",
        pills: [
          { text: "Design Materials", bgColor: "bg-[#3DD9A8]", textColor: "text-[#0A1F35]" },
          { text: "Copywriting", bgColor: "bg-[#F4F157]", textColor: "text-[#0A1F35]" },
          { text: "Target", bgColor: "bg-[#FF7A3D]", textColor: "text-white" },
          { text: "Contents", bgColor: "bg-[#9D7EFF]", textColor: "text-white" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "STRATEGIC PLANNING AND CREATIVE EXECUTION",
    description:
      "We develop comprehensive strategies and execute creative concepts that align with your brand goals. Our team crafts compelling narratives and visual content that resonates with your target audience.",
  },
  {
    id: 3,
    title: "COLLABORATION AND OPTIMIZATION",
    description:
      "We work closely with your team throughout the process, gathering feedback and optimizing our approach. This collaborative method ensures the final deliverables exceed your expectations.",
  },
  {
    id: 4,
    title: "DELIVERING AND REPORTING RESULTS",
    description:
      "We deliver high-quality content and provide detailed analytics on performance. Our comprehensive reporting helps you understand the impact and ROI of your video marketing investment.",
  },
];

const WorkingMethod = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="bg-[#F8F8F8] py-[120px]">
      <div className="container mx-auto max-w-[1280px] px-5 lg:px-20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-[#FF5757] px-4 py-1">
            <h5 className="font-body text-sm font-bold text-white tracking-[0.05em]">HOW WE WORK</h5>
          </div>
          <h2
            className="font-display max-w-2xl font-black text-[48px] leading-[1.2] tracking-[-0.01em] text-[#0A1F35]"
          >
            OUR WORKING METHOD
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {stepsData.map((step) => {
            const isActive = activeItem === step.id;
            return (
              <div key={step.id}>
                {isActive ? (
                  <div className="rounded-[48px] bg-[#FF7A3D] p-8 md:p-12">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex flex-1 items-start gap-4 md:gap-6">
                        <p className="font-display text-[96px] leading-none text-white font-black md:text-[120px]">
                          {step.id}.
                        </p>
                        <div className="pt-2 md:pt-4">
                          <h4 className="font-body text-2xl font-bold text-white md:text-[32px] md:leading-[1.2]">
                            {step.title}
                          </h4>
                          <p className="mt-2 text-base text-white/90">{step.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleItem(step.id)}
                        className="flex-shrink-0"
                        aria-label="Collapse section"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                          <ChevronUp className="h-6 w-6 text-[#FF7A3D]" />
                        </div>
                      </button>
                    </div>

                    {step.timeline && (
                      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {step.timeline.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col rounded-3xl bg-white p-6"
                          >
                            <h5 className="font-body text-xl font-bold text-[#0A1F35]">
                              {item.title}
                            </h5>
                            <p className="text-sm text-[#0A1F35]/70">{item.duration}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.pills.map((pill, pillIndex) => (
                                <div
                                  key={pillIndex}
                                  className={cn(
                                    "rounded-full px-3 py-1 font-semibold text-sm",
                                    pill.bgColor,
                                    pill.textColor
                                  )}
                                >
                                  {pill.text}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-6 rounded-[48px] bg-white p-8 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    <div className="flex flex-1 items-center gap-4 md:gap-6">
                      <p className="font-display text-[72px] leading-none font-black text-[#0A1F35] md:text-[96px]">
                        {step.id}.
                      </p>
                      <div className="flex-1">
                        <h4 className="font-body text-xl font-bold text-[#0A1F35] md:text-[28px] md:leading-[1.3]">
                          {step.title}
                        </h4>
                        <p className="mt-1 hidden text-base text-[#0A1F35]/70 md:block">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleItem(step.id)}
                      className="flex-shrink-0"
                      aria-label="Expand section"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A1F35]">
                        <ChevronDown className="h-6 w-6 text-white" />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingMethod;