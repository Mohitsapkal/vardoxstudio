"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    id: "item-1",
    question: "Why do I need a video marketing agency for my business?",
    answer:
      "Video content drives higher engagement, boosts conversion rates, and significantly improves SEO rankings. A professional video marketing agency like Vardox Studio ensures your content is high-quality, targeted to your ideal audience, and strategically aligned with your business goals for maximum impact.",
  },
  {
    id: "item-2",
    question: "How much does professional video production and marketing cost?",
    answer:
      "The cost of video production varies depending on the scope, style, and complexity of the project. We offer scalable, custom packages tailored to different budgets, ensuring maximum ROI whether you need a quick series of social media ads or a full cinematic brand documentary.",
  },
  {
    id: "item-3",
    question: "What types of video content generate the highest ROI?",
    answer:
      "Short-form vertical videos (TikTok, Instagram Reels, YouTube Shorts), product explainer videos, authentic customer testimonials, and high-quality brand commercials typically generate the highest Return on Investment. We analyze your target market to recommend the exact formats that will drive conversions.",
  },
  {
    id: "item-4",
    question: "How long does it take to produce a promotional video?",
    answer:
      "Most professional promotional videos take between 2 to 4 weeks from initial concept to final delivery. This includes pre-production planning, filming, and post-production editing. We always provide a clear timeline upfront and work efficiently to meet your launch deadlines.",
  },
  {
    id: "item-5",
    question: "Do you handle both video production and social media marketing?",
    answer:
      "Yes! Vardox Studio is a full-service creative agency. We not only script, shoot, and edit stunning video content, but we also handle distribution, social media management, and paid ad campaign strategy to ensure your videos actually reach and convert your target audience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
  },
};

const FaqSection = () => {
  return (
    <section className="relative bg-[#0A1F35] py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="relative">
          
          {/* CTA Banner Decorative Elements */}
          <div className="hidden lg:block absolute top-[15%] left-[8%] w-[80px] h-[80px] -rotate-15 transform-gpu animate-float z-0">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-[15%] right-[6%] w-[88px] h-[88px] rotate-15 transform-gpu animate-float-delayed z-0">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="hidden lg:block absolute top-[45%] right-[2%] w-[32px] h-[32px] animate-pulse-slow z-0">
            <div className="w-full h-full bg-white rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="hidden md:block absolute bottom-[25%] left-[4%] w-[32px] h-[32px] -rotate-15 transform-gpu animate-wiggle z-0">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-[900px]">
            <div className="text-center mb-16 lg:mb-20">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="font-body text-sm font-bold text-[#ff8c42] tracking-widest uppercase mb-4"
              >
                Faq
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight uppercase"
              >
                Your Questions Answered
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 font-body text-lg text-gray-300 max-w-[700px] mx-auto font-medium"
              >
                Everything You Need to Know About Vardox Studio. We have Answers to Your Questions About Our Services and Approach.
              </motion.p>
            </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="w-full flex flex-col gap-10">
            {faqData.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
              >
                <AccordionItem
                  value={item.id}
                  className="bg-white border border-transparent rounded-[24px] px-6 md:px-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-b-0"
                >
                  <AccordionTrigger className="group py-6 text-left hover:no-underline transition-all duration-300 [&>svg]:hidden">
                    <span className="font-body text-lg md:text-xl font-bold flex-1 pr-4 text-gray-900 group-hover:text-[#ff8c42] transition-colors">
                      {item.question}
                    </span>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-[#ff8c42] group-hover:text-white group-hover:border-transparent group-data-[state=open]:rotate-180 group-data-[state=open]:bg-[#ff8c42] group-data-[state=open]:text-white group-data-[state=open]:border-transparent">
                      <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
                      <Plus className="h-5 w-5 block group-data-[state=open]:hidden" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-8 pr-12">
                    <p className="font-body text-base md:text-lg leading-relaxed text-gray-500 font-medium">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;