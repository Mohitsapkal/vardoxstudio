"use client";

import Image from "next/image";

interface Element3DProps {
  variant?: "float" | "spin" | "bounce" | "pulse" | "wiggle";
  className?: string;
  children?: React.ReactNode;
}

export function Element3D({ variant = "float", className = "", children }: Element3DProps) {
  const animations = {
    float: "animate-float",
    spin: "animate-spin-slow",
    bounce: "animate-bounce-slow",
    pulse: "animate-pulse-slow",
    wiggle: "animate-wiggle"
  };

  return (
    <div className={`${animations[variant]} ${className}`}>
      {children}
    </div>
  );
}

// Decorative 3D Shapes
export function Shape3D({ type = "circle", color = "#ff7a3d", size = 100, className = "" }: {
  type?: "circle" | "square" | "triangle" | "blob";
  color?: string;
  size?: number;
  className?: string;
}) {
  const shapes = {
    circle: (
      <div 
        className={`rounded-full ${className}`}
        style={{ 
          width: size, 
          height: size, 
          background: `linear-gradient(135deg, ${color}, ${color}dd)`,
          boxShadow: `0 10px 40px ${color}40`
        }}
      />
    ),
    square: (
      <div 
        className={`rounded-2xl ${className}`}
        style={{ 
          width: size, 
          height: size, 
          background: `linear-gradient(135deg, ${color}, ${color}dd)`,
          boxShadow: `0 10px 40px ${color}40`
        }}
      />
    ),
    triangle: (
      <div 
        className={`${className}`}
        style={{ 
          width: 0, 
          height: 0, 
          borderLeft: `${size/2}px solid transparent`,
          borderRight: `${size/2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          filter: `drop-shadow(0 10px 40px ${color}40)`
        }}
      />
    ),
    blob: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: `${color}dd`, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path 
          fill={`url(#gradient-${color})`}
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,86.4C-23,85.2,-37.9,79.8,-51.8,71.8C-65.7,63.8,-78.6,53.2,-85.4,39.2C-92.2,25.2,-92.9,7.8,-89.7,-8.4C-86.5,-24.6,-79.4,-39.6,-69.3,-52.1C-59.2,-64.6,-46.1,-74.6,-31.8,-81.6C-17.5,-88.6,-2,-92.6,11.9,-91.4C25.8,-90.2,30.6,-83.6,44.7,-76.4Z" 
          transform="translate(100 100)"
        />
      </svg>
    )
  };

  return shapes[type];
}

// 3D Icon Badges
export function IconBadge3D({ icon, color = "#ff7a3d", label, className = "" }: {
  icon: React.ReactNode;
  color?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`group ${className}`}>
      <div 
        className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}dd)`,
          boxShadow: `0 8px 32px ${color}50`
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="relative text-white">
          {icon}
        </div>
      </div>
      {label && (
        <p className="mt-2 text-center text-sm font-semibold text-gray-700">{label}</p>
      )}
    </div>
  );
}

// Floating Particles Background
export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            background: ['#ff7a3d', '#9d7eff', '#3dd9a8', '#f4f157'][Math.floor(Math.random() * 4)],
            animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}

// 3D Card with hover effect
export function Card3D({ children, className = "", hoverEffect = true }: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) {
  return (
    <div 
      className={`
        relative bg-white rounded-[32px] border border-gray-100 
        transition-all duration-500
        ${hoverEffect ? 'hover:scale-105 hover:shadow-2xl hover:-translate-y-2' : ''}
        ${className}
      `}
      style={{
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
}

// Glowing orb
export function GlowOrb({ color = "#ff7a3d", size = 200, blur = 100, className = "" }: {
  color?: string;
  size?: number;
  blur?: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0.15,
        filter: `blur(${blur}px)`
      }}
    />
  );
}
