"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Video as VideoIcon, Smartphone, PenTool, Film, CalendarDays, Folder } from "lucide-react";

export interface Video {
  thumbnail: string;
  videoUrl?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  result: string;
  description?: string;
  tags: string[];
  videos: Video[];
}

interface AnimatedFolderProps {
  project: ProjectData;
  onVideoClick: (video: Video) => void;
  color?: { back: string; front: string; glow?: string };
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// 3D thumbnail spread configs when folder is open
const SPREAD = [
  { x: -110, y: -90,  z: 20,  rotateZ: -18, rotateY: 15 },
  { x: 0,    y: -130, z: 60,  rotateZ: 0,   rotateY: 0  },
  { x: 110,  y: -90,  z: 20,  rotateZ: 18,  rotateY: -15},
];

export default function AnimatedFolder({
  project,
  onVideoClick,
  color = { back: "bg-[#1a233a]", front: "from-[#2a3655] to-[#1a233a]", glow: "#4a00e0" },
  isOpen,
  onOpen,
  onClose,
}: AnimatedFolderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const displayVideos = project.videos.slice(0, 3);

  const CategoryIcon = () => {
    const cls = "text-white";
    const size = 52;
    switch (project.category) {
      case "Video Ads":      return <VideoIcon size={size} className={cls} />;
      case "Social Media":   return <Smartphone size={size} className={cls} />;
      case "Branding":       return <PenTool size={size} className={cls} />;
      case "Corporate Films":return <Film size={size} className={cls} />;
      case "Event":          return <CalendarDays size={size} className={cls} />;
      default:               return <Folder size={size} className={cls} />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[320px] mx-auto flex flex-col items-center"
      onMouseEnter={() => { setIsHovered(true); onOpen(); }}
      onMouseLeave={() => { setIsHovered(false); onClose(); }}
    >
      {/* ── Glow halo when open ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="glow"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-2xl pointer-events-none z-0"
            style={{
              background: `radial-gradient(ellipse at 50% 60%, ${color.glow ?? "#4a00e0"}55 0%, transparent 70%)`,
              filter: "blur(24px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Idle bounce wrapper ── */}
      <motion.div
        className="w-full relative z-10"
        animate={isOpen ? { y: 0 } : { y: [0, -14, 0] }}
        transition={
          isOpen
            ? { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
            : { duration: 2.8, repeat: Infinity, repeatType: "loop", ease: [0.45, 0, 0.55, 1] }
        }
      >
        {/* ── 3D scene root ── */}
        <motion.div
          className="relative w-full"
          style={{ perspective: "900px" }}
          animate={
            isOpen
              ? { rotateX: 8, rotateY: -14, scale: 1.06 }
              : isHovered
              ? { rotateX: 4, rotateY: -7, scale: 1.02 }
              : { rotateX: 0, rotateY: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 65, damping: 16, mass: 1.2 }}
        >
          {/* preserve-3d inner */}
          <div
            className="relative w-full aspect-[4/3] cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >

            {/* ── Folder Back body ── */}
            <div
              className={`absolute inset-0 ${color.back} rounded-xl rounded-tr-3xl border border-white/10 shadow-2xl`}
              style={{ transform: "translateZ(0px)" }}
            >
              {/* Tab */}
              <div
                className={`absolute top-0 right-0 w-1/3 h-6 ${color.back} rounded-t-xl -translate-y-[98%] border-t border-r border-l border-white/10`}
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
              />
              {/* Inner shadow to sell depth */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* ── 3D Video Thumbnails ── */}
            {displayVideos.map((video, idx) => {
              const s = SPREAD[idx];
              return (
                <motion.div
                  key={idx}
                  className={`absolute left-1/2 bottom-6 w-[68%] aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/15 ${
                    isOpen ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
                  }`}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  initial={false}
                  animate={
                    isOpen
                      ? {
                          x: `calc(-50% + ${s.x}px)`,
                          y: s.y,
                          z: s.z,
                          rotateZ: s.rotateZ,
                          rotateY: s.rotateY,
                          scale: 1.35,
                          opacity: 1,
                          zIndex: idx === 1 ? 30 : 20,
                        }
                      : {
                          x: "-50%",
                          y: 30,
                          z: -20 * idx,
                          rotateZ: 0,
                          rotateY: 0,
                          scale: 0.78,
                          opacity: 0,
                          zIndex: 5 + idx,
                        }
                  }
                  transition={{ type: "spring", stiffness: 70, damping: 16, mass: 1.1, delay: idx * 0.1 }}
                  onClick={(e) => {
                    if (isOpen) { e.stopPropagation(); onVideoClick(video); }
                  }}
                  whileHover={isOpen ? { scale: 1.52, zIndex: 40, rotateY: 0, rotateZ: 0 } : {}}
                >
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <div className="w-11 h-11 bg-[#ff6b35] rounded-full flex items-center justify-center shadow-lg">
                      <Play size={18} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  {/* Edge shine */}
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 pointer-events-none" />
                </motion.div>
              );
            })}

            {/* ── Folder Front Flap (hinge at bottom) ── */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${color.front} rounded-xl border border-white/15 flex items-center justify-center overflow-hidden`}
              style={{
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                zIndex: 15,
              }}
              animate={{
                rotateX: isOpen ? -112 : isHovered ? -16 : 0,
                boxShadow: isOpen
                  ? "0 40px 80px rgba(0,0,0,0.6)"
                  : "0 -10px 20px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 70, damping: 16, mass: 1.2 }}
            >
              {/* Subtle highlight on flap */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/10 rounded-t-xl" />
              {/* Category icon */}
              <div className="relative opacity-25 z-10">
                <CategoryIcon />
              </div>
              {/* Fold crease at bottom of flap */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/20 rounded-b-xl" />
            </motion.div>

            {/* ── Inside of flap (back face) ── */}
            <motion.div
              className="absolute inset-0 rounded-xl flex items-center justify-center"
              style={{
                transformOrigin: "bottom center",
                transform: "rotateX(180deg)",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                zIndex: 14,
              }}
            >
              <div className="text-white/10 text-xs tracking-widest uppercase">Open</div>
            </motion.div>

          </div>{/* end preserve-3d inner */}
        </motion.div>{/* end 3D scene */}

        {/* ── Close X button ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.button
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -top-11 -right-3 w-9 h-9 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white z-50 shadow-lg border border-white/10"
              onClick={(e) => { e.stopPropagation(); onClose(); }}
            >
              <X size={16} />
            </motion.button>
          )}
        </AnimatePresence>

      </motion.div>{/* end bounce wrapper */}

      {/* ── Label ── */}
      <motion.div
        className="mt-6 text-center w-full"
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 8 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#9d7eff] text-sm font-semibold">{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span className="text-gray-400 text-sm">{project.result}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
