import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedMenu from "@/components/animated-menu";
import FloatingCTA from "@/components/floating-cta";
import { ServicePopupProvider } from "@/context/ServicePopupContext";
import ServicePopupModal from "@/components/ServicePopupModal";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });


export const metadata: Metadata = {
  title: "Vardox Studio | Creative Video Marketing Agency",
  description: "We blend creativity, strategy, and storytelling to produce videos, Instagram and social media campaigns that connect with audiences and build lasting brand presence.",
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/vardox-logo-1761230691901.png?width=32&height=32&resize=contain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased font-sans">
        <CustomCursor />
        <ServicePopupProvider>
          {children}
          <ServicePopupModal />
        </ServicePopupProvider>
        <AnimatedMenu />
        <FloatingCTA />
      </body>
    </html>
  );
}