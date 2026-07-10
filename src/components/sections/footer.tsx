"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Linkedin, ChevronRight } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-4 w-4 text-text-secondary group-hover:text-white transition-colors duration-300" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="h-4 w-4 text-text-secondary group-hover:text-white transition-colors duration-300" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="h-4 w-4 text-text-secondary group-hover:text-white transition-colors duration-300" />,
  },
];

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "CONTACT US", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-primary-background pt-20 pb-[50px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-12 lg:gap-8">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            <Link href="/" className="mb-[30px] transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/vardox-logo-1761230691901.png?width=96&height=96&resize=contain"
                  alt="Vardox Studio Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-primary-background font-black text-3xl tracking-tight">VARDOX STUDIO</span>
              </div>
            </Link>
            <p className="max-w-[400px] text-sm text-text-secondary mb-[30px]">
              We blend creativity, strategy, and storytelling to produce videos, Instagram and social media campaigns that connect with audiences and build lasting brand presence.
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary-background transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            {navLinks.map((link, index) => (
              <Link key={link.name} href={link.href} className="group flex items-center gap-[15px] animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-accent-purple/10 transition-all duration-300 group-hover:bg-accent-purple group-hover:rotate-90">
                  <ChevronRight className="h-4 w-4 text-primary-background transition-colors duration-300 group-hover:text-white" />
                </div>
                <span className="text-sm font-semibold text-primary-background transition-colors duration-300 group-hover:text-accent-purple uppercase">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[60px] border-t border-border pt-10 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs text-text-secondary uppercase">
            COPYRIGHT © 2024 VARDOX STUDIO. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-text-secondary mt-2">
            Based in Aurangabad, Maharashtra, India — Serving Clients Globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;