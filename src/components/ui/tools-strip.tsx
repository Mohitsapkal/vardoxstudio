"use client";

import { motion } from "framer-motion";

/* ── Real application-style inline SVG icons ── */
const icons = [
  {
    name: "Premiere Pro",
    svg: (
      <svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="240" height="234" rx="26" fill="#2D0A73"/>
        <path d="M55 173V61h42c9.2 0 16.9 1.6 23.1 4.8 6.3 3.1 11 7.6 14.3 13.3 3.3 5.7 4.9 12.3 4.9 19.8 0 7.4-1.7 14-5 19.9-3.4 5.8-8.3 10.4-14.7 13.7-6.4 3.3-14.1 4.9-23.2 4.9H80.5V173H55zm25.5-57.3h14.9c5.5 0 9.7-1.5 12.6-4.5 3-3 4.5-7.1 4.5-12.3 0-5.1-1.5-9.2-4.4-12.1-2.9-3-7.1-4.5-12.7-4.5H80.5v33.4z" fill="#E0AAFF"/>
      </svg>
    ),
  },
  {
    name: "After Effects",
    svg: (
      <svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="240" height="234" rx="26" fill="#0D0033"/>
        <path d="M95.3 143.7H63.4L57 173H32l35.2-112h27.2L129.5 173h-26l-8.2-29.3zm-26.6-20.5h21.2l-10.4-37.3h-.4l-10.4 37.3zM151.3 61h25.5v45.5h.4c2.3-4.6 5.7-8.2 10.1-10.8 4.5-2.6 9.4-3.9 14.9-3.9 5.3 0 9.9 1.1 13.8 3.2 3.9 2.1 6.8 5.3 8.7 9.7 2 4.4 3 9.9 3 16.5V173h-25.5v-46.5c0-4.4-1-7.7-3-9.9-2-2.2-4.8-3.3-8.5-3.3-3.8 0-7 1.3-9.5 4-2.6 2.6-3.9 6.2-3.9 10.6V173h-25.5V61z" fill="#A8A9FF"/>
      </svg>
    ),
  },
  {
    name: "Photoshop",
    svg: (
      <svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="240" height="234" rx="26" fill="#001B36"/>
        <path d="M55 173V61h42c9.2 0 16.9 1.6 23.1 4.8 6.3 3.1 11 7.6 14.3 13.3 3.3 5.7 4.9 12.3 4.9 19.8 0 7.4-1.7 14-5 19.9-3.4 5.8-8.3 10.4-14.7 13.7-6.4 3.3-14.1 4.9-23.2 4.9H80.5V173H55zm25.5-57.3h14.9c5.5 0 9.7-1.5 12.6-4.5 3-3 4.5-7.1 4.5-12.3 0-5.1-1.5-9.2-4.4-12.1-2.9-3-7.1-4.5-12.7-4.5H80.5v33.4zM154.1 131.5c0-3.6.5-7.1 1.6-10.5 1.1-3.4 2.8-6.5 5.1-9.2 2.3-2.7 5.3-4.8 8.9-6.3 3.6-1.5 7.9-2.3 12.8-2.3 3.5 0 6.6.4 9.4 1.3V95.7c-.8-.1-1.7-.1-2.8-.1-4.5 0-8.1 1.1-10.6 3.4-2.6 2.3-4.2 5.3-4.8 9.1h-.4V105h-24.3v68h25.5v-37.8c0-3.7 1-6.5 2.9-8.5 1.9-2 4.7-3 8.4-3 3.2 0 5.8.9 7.6 2.8 1.8 1.9 2.8 4.4 2.8 7.6V173H221v-42.1c0-6.2-1-11.4-3-15.5-2-4.1-4.9-7.2-8.7-9.3-3.8-2.1-8.4-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3-3.9 2-6.9 4.8-9 8.3h-.4v-9.8h-24.3v71.5h25.1v-45.5z" fill="#31A8FF"/>
      </svg>
    ),
  },
  {
    name: "Illustrator",
    svg: (
      <svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="240" height="234" rx="26" fill="#2D1500"/>
        <path d="M116.4 144.8H80.2l-7.6 28.2H47.5L85.8 61h29.3l38.6 112h-26.2l-11.1-28.2zm-30.2-20.5h24.2l-11.8-43.2h-.4l-12 43.2zM177.5 61h25.1v112h-25.1V61z" fill="#FF9A00"/>
      </svg>
    ),
  },
  {
    name: "Audition",
    svg: (
      <svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="240" height="234" rx="26" fill="#00131A"/>
        <path d="M88 173H63V61h25v112zM127.5 61h24v112h-24v-11.8h-.4c-2 4.5-5.1 7.9-9.3 10.3-4.2 2.4-8.8 3.5-13.8 3.5-5.3 0-9.9-1.1-13.8-3.3-3.9-2.2-6.9-5.4-9-9.5-2.1-4.2-3.1-9.1-3.1-14.7V95h25.1v45.1c0 4.3 1 7.6 3 9.9 2 2.2 4.8 3.4 8.4 3.4 3.6 0 6.5-1.2 8.7-3.5 2.2-2.4 3.2-5.6 3.2-9.8V61zM175 173h-25.1V61H175v112z" fill="#00E4BB"/>
      </svg>
    ),
  },
  {
    name: "DaVinci Resolve",
    svg: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="100" height="100" rx="14" fill="#1A1400"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#F5C400" strokeWidth="6"/>
        <circle cx="50" cy="50" r="14" fill="#F5C400"/>
        <circle cx="50" cy="24" r="5" fill="#F5C400"/>
        <circle cx="50" cy="76" r="5" fill="#F5C400"/>
        <circle cx="24" cy="50" r="5" fill="#F5C400"/>
        <circle cx="76" cy="50" r="5" fill="#F5C400"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" width="40" height="52">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: "Blender",
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="24" height="24" rx="4" fill="#1A0A00"/>
        <path d="M12.51 13.214c.046-.8.438-1.538 1.03-2.06a3.45 3.45 0 0 1 2.283-.79c.875 0 1.683.3 2.197.79a3.047 3.047 0 0 1 .902 2.06 2.937 2.937 0 0 1-.902 2.158c-.514.498-1.322.842-2.197.842-.875 0-1.683-.344-2.198-.842a3.013 3.013 0 0 1-.903-2.158zM8.953 7.87H5.985L12.02 2h8.023zm-1.236 1.866H4.59L2 12.025l2.59 2.289H7.72a6.547 6.547 0 0 1-.022-.5 6.305 6.305 0 0 1 .022-.5c.109-1.976.886-3.748 2.034-5.077l-.02.003A6.275 6.275 0 0 0 7.717 9.736zm.036 7.09-3.236 2.85L6.55 22h5.435l-4.232-5.174zm5.318.684c-.544-.39-1.047-.866-1.47-1.375l-4.228 5.175h3.547z" fill="#F5792A"/>
      </svg>
    ),
  },
  {
    name: "Canva",
    svg: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="100" height="100" rx="22" fill="#7D2AE8"/>
        <path d="M50 15c-9.4 0-17.1 6.8-18.5 15.8C23 32.9 16 40.7 16 50c0 9.4 6.8 17.1 15.8 18.5C33 77 40.7 84 50 84c9.4 0 17.1-6.8 18.5-15.8C77 67 84 59.4 84 50c0-9.4-6.8-17.1-15.8-18.5C67 23 59.4 16 50 15zm0 9c11.6 0 21 9.4 21 21s-9.4 21-21 21-21-9.4-21-21 9.4-21 21-21z" fill="white" opacity=".9"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="24" height="24" rx="5" fill="#FF0000"/>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="#FF0000"/>
        <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <defs>
          <radialGradient id="ig" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="20%" stopColor="#fdf497"/>
            <stop offset="35%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig)"/>
        <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="white" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
        <circle cx="17" cy="7" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect width="24" height="24" rx="5" fill="#0082FB"/>
        <path d="M4 15.5c0 1.38.35 2.4.88 3.06.5.63 1.18.94 1.96.94 1.03 0 1.9-.62 2.88-2.34l.88-1.58.98 1.67c.83 1.42 1.66 2.25 2.72 2.25.82 0 1.5-.35 1.97-1.05.5-.74.73-1.85.73-3.16 0-1.26-.27-2.28-.77-3.02-.49-.7-1.14-1.06-1.93-1.06-.87 0-1.67.67-2.57 2.07l-.36.58-.42-.63C10.08 11.6 9.22 11 8.23 11c-.8 0-1.5.38-2.02 1.1-.52.73-.79 1.77-.79 3v.4zm-1.82 0c0-1.58.38-2.97 1.13-3.97.77-1.04 1.84-1.58 3.1-1.58 1.32 0 2.44.73 3.46 2.26.97-1.46 2.1-2.26 3.4-2.26 1.2 0 2.2.56 2.96 1.6.74 1.02 1.1 2.43 1.1 4.04 0 1.63-.35 3-.98 3.97-.66 1.02-1.6 1.57-2.7 1.57-1.35 0-2.44-.95-3.48-2.7l-.3-.52-.34.57C8.5 19.96 7.47 21 6.07 21c-1.04 0-1.96-.46-2.63-1.28C2.79 18.87 2.38 17.56 2.38 15.95l-.2-.45z" fill="white"/>
      </svg>
    ),
  },
];

const allIcons = [...icons, ...icons, ...icons];

export default function ToolsStrip() {
  return (
    <div className="bg-white py-10 sm:py-14 overflow-hidden border-y border-gray-100">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 px-4 sm:px-6"
      >
        <p className="text-gray-400 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold mb-2">
          Powered By
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
          OUR{" "}
          <span className="bg-gradient-to-r from-[#ff6b35] to-[#9d7eff] bg-clip-text text-transparent">
            STACK
          </span>
        </h2>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-6 sm:gap-10 lg:gap-12 w-max px-4 sm:px-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {allIcons.map((tool, i) => (
            <div
              key={i}
              title={tool.name}
              className="group flex-shrink-0 flex flex-col items-center gap-2 cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-md border border-gray-100 bg-white overflow-hidden"
                style={{ width: undefined, height: undefined }}
              >
                <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] lg:w-20 lg:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-md border border-gray-100 bg-white overflow-hidden">
                  {tool.svg}
                </div>
              </motion.div>
              <span className="text-[9px] sm:text-[11px] font-bold text-gray-400 group-hover:text-gray-700 transition-colors text-center leading-tight max-w-[64px] sm:max-w-[80px]">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
