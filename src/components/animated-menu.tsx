"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Users, BookOpen, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Services", href: "/services" },
  { icon: Users, label: "About", href: "/about" },
  { icon: BookOpen, label: "Portfolio", href: "/portfolio" },
  { icon: Phone, label: "Contact", href: "/contact" },
];

export default function AnimatedMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const activeIndex = menuItems.findIndex(item => item.href === pathname) !== -1 
    ? menuItems.findIndex(item => item.href === pathname)
    : 0;
  
  const ActiveIcon = menuItems[activeIndex].icon;

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[998] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="relative">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-[-1]"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a3d] via-[#9d7eff] to-[#3dd9a8] rounded-full blur-xl opacity-40 animate-pulse-slow"></div>
              
              {/* Side decorative elements */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#ff7a3d] rounded-full opacity-20 blur-lg animate-pulse-slow"></div>
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#9d7eff] rounded-full opacity-20 blur-lg animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="relative flex items-center justify-center h-[64px] min-w-[64px] rounded-full shadow-2xl overflow-visible cursor-pointer z-10"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.95)" : "#ff7a3d",
            padding: isHovered ? "8px" : "0px",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{
            backdropFilter: isHovered ? "blur(16px)" : "none",
            border: isHovered ? "1px solid rgba(229, 231, 235, 0.5)" : "none",
          }}
        >
          {/* Compressed State Icon */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none text-white"
          >
            <ActiveIcon size={24} />
          </motion.div>

          {/* Expanded State Items */}
          <div className="flex items-center gap-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group flex items-center justify-center"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      width: isHovered ? 60 : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="flex items-center justify-center h-[48px] overflow-hidden"
                  >
                    <motion.div 
                      className={`relative z-10 flex items-center justify-center w-[48px] h-[48px] rounded-full transition-all duration-300 flex-shrink-0 ${
                        isActive 
                          ? 'bg-gradient-to-br from-[#ff7a3d] to-[#ff5757] text-white shadow-md' 
                          : 'text-gray-600 hover:text-[#ff7a3d] hover:bg-orange-50'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                  </motion.div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-3 px-3 py-1.5 bg-[#0A1828] text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {item.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] border-4 border-transparent border-t-[#0A1828]"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
