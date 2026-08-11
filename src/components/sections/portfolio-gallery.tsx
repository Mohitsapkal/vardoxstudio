"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedFolder, { ProjectData, Video } from "@/components/ui/animated-folder";
import { X, Play, Pause, ArrowRight } from "lucide-react";

function getEmbedUrl(url?: string) {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?controls=0&rel=0&modestbranding=1&playsinline=1` : url;
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectData | null>(null);

  const closeModal = () => { setSelectedProjectModal(null); };

  const filters = ["All", "Video Ads", "Social Media", "Branding", "Corporate Films", "Event"];

  const folderColors = [
    { back: "bg-[#4a00e0]", front: "from-[#8e2de2] to-[#4a00e0]", glow: "#8e2de2" },
    { back: "bg-[#0052d4]", front: "from-[#4facfe] to-[#00f2fe]", glow: "#4facfe" },
    { back: "bg-[#ff416c]", front: "from-[#ff4b2b] to-[#ff416c]", glow: "#ff4b2b" },
    { back: "bg-[#11998e]", front: "from-[#38ef7d] to-[#11998e]", glow: "#38ef7d" },
    { back: "bg-[#f12711]", front: "from-[#f5af19] to-[#f12711]", glow: "#f5af19" },
    { back: "bg-[#834d9b]", front: "from-[#d04ed6] to-[#834d9b]", glow: "#d04ed6" },
  ];

  const projects: ProjectData[] = [
    {
      id: "1",
      title: "Premium Residency",
      category: "Video Ads",
      result: "350% more leads",
      description: "A full-funnel video advertising campaign designed to capture attention and convert viewers into loyal customers. We crafted cinematic brand stories that resonated deeply with the target audience.",
      tags: ["Video Production", "Lead Generation"],
      videos: [
        { videoUrl: "https://www.youtube.com/shorts/82pTkaR4ZLc" },
        { videoUrl: "https://www.youtube.com/shorts/IRCmGaWAubA" },
        { videoUrl: "https://youtube.com/shorts/Y_kZNqqjuIA" },
        { videoUrl: "https://youtube.com/shorts/Eu9HCUMzXjE" },
        { videoUrl: "https://youtube.com/shorts/r0QiOznncJE" },
        { videoUrl: "https://youtube.com/shorts/SL4vE4k-28E" },
        { videoUrl: "https://youtube.com/shorts/J_No0k1nK90" },
      ]
    },
    {
      id: "2",
      title: "Travels & Tourism",
      category: "Social Media",
      result: "500K+ reach",
      description: "A viral social media strategy combining short-form reels, trending audio, and precision-targeted paid posts that exploded the brand's online presence across Instagram and YouTube.",
      tags: ["Social Media", "SEO"],
      videos: [
        { videoUrl: "https://youtube.com/shorts/Q6SvezpaYR8" },
        { videoUrl: "https://youtube.com/shorts/L_w98o3f0ts" },
        { videoUrl: "https://youtube.com/shorts/Zwbljr0rucQ" },
        { videoUrl: "https://youtube.com/shorts/EH6ug0PWCKM" },
        { videoUrl: "https://youtube.com/shorts/1hBEZruu1RY" },
      ]
    },
    {
      id: "3",
      title: "Concert & Show",
      category: "Branding",
      result: "20K+ sign-ups",
      description: "A premium brand identity overhaul featuring bespoke logo design, brand guidelines, packaging, and a high-end launch campaign that positioned the client as a market leader.",
      tags: ["Branding", "Launch"],
      videos: [
        { videoUrl: "https://youtube.com/shorts/1YzvYXmVu8k" },
        { videoUrl: "https://youtube.com/shorts/jgeG32pr-3k" },
        { videoUrl: "https://youtube.com/shorts/juuinm7uAy8" },
        { videoUrl: "https://youtube.com/shorts/T3ZcP0_6rKw" },
        { videoUrl: "https://youtube.com/shorts/Hbzp-ZumXF4" }
      ]
    },
    {
      id: "4",
      title: "TechStart Explainer",
      category: "Corporate Films",
      result: "40% conversion boost",
      description: "A crisp, animated explainer film that simplified a complex SaaS product into a compelling narrative. The result: dramatically higher demo bookings and investor interest.",
      tags: ["Animation", "Corporate"],
      videos: [
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" }
      ]
    },
    {
      id: "5",
      title: "FitLife Social Series",
      category: "Social Media",
      result: "2M+ views",
      description: "A 12-part content series built around fitness transformation stories. Each episode was shot, edited, and distributed across platforms — accumulating millions of organic views.",
      tags: ["Content Series", "Fitness"],
      videos: [
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" }
      ]
    },
    {
      id: "6",
      title: "Property Showcase",
      category: "Video Ads",
      result: "85% faster sales",
      description: "Cinematic drone and walkthrough video production for a luxury real estate developer. Properties sold significantly faster after featuring our immersive visual storytelling.",
      tags: ["Real Estate", "Drone"],
      videos: [
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" }
      ]
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="portfolio-grid"
      className="relative pt-10 pb-24 overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(to right, #1a0000 0%, #2d0505 30%, #050a2d 70%, #000d1a 100%)"
      }}
      onClick={() => setOpenFolderId(null)}
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-red-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "linear-gradient(to right, rgba(180,0,0,0.08) 0%, transparent 45%, transparent 55%, rgba(0,60,180,0.08) 100%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-[#ff6b35] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Our Work
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.05] tracking-tight">
            Projects That{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#9d7eff] bg-clip-text text-transparent">
                Delivered
              </span>
              {/* Animated underline */}
              <motion.svg
                viewBox="0 0 300 14"
                className="absolute -bottom-2 left-0 w-full overflow-visible"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 10 C 60 2, 130 14, 200 6 S 270 2, 298 8"
                  fill="none"
                  stroke="url(#uline-grad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="uline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff6b35" />
                    <stop offset="100%" stopColor="#9d7eff" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Every folder holds a story — hover to explore the work that moved the needle.
          </p>
        </motion.div>


        {/* Filter Tabs — horizontally scrollable on mobile */}
        <div className="flex gap-2 sm:gap-3 mb-12 sm:mb-20 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={(e) => { e.stopPropagation(); setActiveFilter(filter); }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 flex-shrink-0 ${
                activeFilter === filter
                  ? "bg-[#ff6b35] text-white shadow-[0_0_15px_rgba(255,107,53,0.4)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Zigzag Layout */}
        <AnimatePresence mode="popLayout">
          <div className="flex flex-col gap-14 sm:gap-20 lg:gap-24">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const color = folderColors[index % folderColors.length];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Folder side */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
                      <AnimatedFolder
                        project={project}
                        color={color}
                        onVideoClick={() => setSelectedProjectModal(project)}
                        isOpen={openFolderId === project.id}
                        onOpen={() => setOpenFolderId(project.id)}
                        onClose={() => setOpenFolderId(null)}
                        onViewAllClick={() => setSelectedProjectModal(project)}
                      />
                    </div>
                  </div>

                  {/* Text side */}
                  <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    {/* Category badge */}
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                      style={{
                        background: "rgba(157,126,255,0.12)",
                        color: "#9d7eff",
                        border: "1px solid rgba(157,126,255,0.25)"
                      }}
                    >
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-3 sm:mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {project.description}
                    </p>

                    {/* Result pill */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-[#ff6b35]/10 border border-[#ff6b35]/25 rounded-full px-4 py-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
                        <span className="text-[#ff6b35] text-sm font-bold">{project.result}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>

      {/* Project Videos Modal */}
      <AnimatePresence>
        {selectedProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-[#060D17]/85"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#0A1828] text-white max-w-[1050px] w-full rounded-[24px] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.7)] border border-white/10 flex flex-col max-h-[85vh] z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105 outline-none focus:ring-2 focus:ring-white/20"
              >
                <X size={20} />
              </button>

              <div 
                className="p-6 sm:p-8 lg:p-10 overflow-y-auto flex-1 scrollbar-thin"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.2) transparent" }}
              >
                <div className="mb-6 sm:mb-8 pr-12">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">{selectedProjectModal.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{selectedProjectModal.category} • {selectedProjectModal.videos.length} Videos</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {selectedProjectModal.videos.map((video, idx) => (
                    <div key={idx} className="group relative aspect-video rounded-xl overflow-hidden bg-black shadow-md border border-white/5 hover:border-white/20 transition-colors">
                      <iframe
                        src={getEmbedUrl(video.videoUrl)}
                        className="w-full h-full object-cover"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>   
  );
}






