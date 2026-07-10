"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Video, Share2, PenTool, Megaphone, Users, Lightbulb } from "lucide-react";
import { useServicePopup } from "@/context/ServicePopupContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openService } = useServicePopup();

  const navLinks = [
    {
      href: "/",
      label: "Home",
      hasDropdown: false,
    },
    {
      href: "/services",
      label: "Services",
      hasDropdown: true,
      dropdownItems: [
        { href: "/services#video-production", label: "Video Production & Editing", icon: Video },
        { href: "/services#social-media", label: "Social Media Management", icon: Share2 },
        { href: "/services#branding", label: "Branding & Design", icon: PenTool },
        { href: "/services#advertising", label: "Advertising Campaigns", icon: Megaphone },
        { href: "/services#influencer", label: "Influencer Marketing", icon: Users },
        { href: "/services#strategy", label: "Content Strategy", icon: Lightbulb },
      ],
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      hasDropdown: false,
    },
    {
      href: "/about",
      label: "About",
      hasDropdown: false,
    },
    {
      href: "/blog",
      label: "Blogs",
      hasDropdown: false,
    },
  ];

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-80 duration-300">
          <div className="flex items-center gap-3">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/vardox-logo-1761230691901.png?width=80&height=80&resize=contain"
              alt="Vardox Studio Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-[#0A1828] font-bold text-xl tracking-tight">Vardox Studio</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-[15px] font-medium text-[#0A1828] transition-all duration-300 hover:text-[#ff7a3d] py-2"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute left-0 top-full mt-2 w-[280px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-2 animate-fade-in-down">
                  {link.dropdownItems?.map((item) => {
                    const isService = link.label === "Services";
                    const serviceId = item.href.split("#")[1];

                    if (isService && serviceId) {
                      return (
                        <button
                          key={item.label}
                          onClick={() => {
                            openService(serviceId);
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left flex items-center gap-3 px-4 py-3 text-[15px] font-medium text-[#0A1828] hover:bg-gray-50 hover:text-[#ff7a3d] transition-all duration-200 cursor-pointer"
                        >
                          {item.icon && <item.icon size={16} className="text-[#ff7a3d]" />}
                          {item.label}
                        </button>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-[15px] font-medium text-[#0A1828] hover:bg-gray-50 hover:text-[#ff7a3d] transition-all duration-200"
                      >
                        {item.icon && <item.icon size={16} className="text-[#ff7a3d]" />}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-[15px] font-semibold text-[#0A1828] hover:text-[#ff7a3d] transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 text-[15px] font-semibold text-white bg-[#0A1828] rounded-lg hover:bg-[#ff7a3d] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#0A1828] transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white py-5 lg:hidden animate-fade-in-down shadow-lg">
          <div className="mx-auto max-w-[1440px] px-6">
            <nav className="flex flex-col items-start gap-y-4">
              {navLinks.map((link) => (
                <div key={link.label} className="w-full">
                  <Link
                    href={link.href}
                    className="flex items-center justify-between w-full text-base font-medium text-[#0A1828] hover:text-[#ff7a3d] transition-all duration-300 py-2"
                    onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {link.dropdownItems?.map((item) => {
                        const isService = link.label === "Services";
                        const serviceId = item.href.split("#")[1];

                        if (isService && serviceId) {
                          return (
                            <button
                              key={item.label}
                              onClick={() => {
                                openService(serviceId);
                                setIsMenuOpen(false);
                              }}
                              className="w-full flex items-center gap-3 text-left text-sm font-medium text-gray-600 hover:text-[#ff7a3d] transition-all duration-300 py-1.5 cursor-pointer"
                            >
                              {item.icon && <item.icon size={14} className="text-[#ff7a3d]" />}
                              {item.label}
                            </button>
                          );
                        }

                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#ff7a3d] transition-all duration-300 py-1.5"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.icon && <item.icon size={14} className="text-[#ff7a3d]" />}
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 w-full pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="text-center px-5 py-2.5 text-[15px] font-semibold text-[#0A1828] border border-[#0A1828] rounded-lg hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="text-center px-6 py-2.5 text-[15px] font-semibold text-white bg-[#0A1828] rounded-lg hover:bg-[#ff7a3d] transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Build your Premium Content
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}