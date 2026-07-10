"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ServicePopupContextType {
  activeServiceId: string | null;
  openService: (id: string) => void;
  closeService: () => void;
}

const ServicePopupContext = createContext<ServicePopupContextType | undefined>(undefined);

export function ServicePopupProvider({ children }: { children: React.ReactNode }) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Disable scroll when the modal is open to prevent background scrolling
  useEffect(() => {
    if (activeServiceId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeServiceId]);

  const openService = (id: string) => {
    setActiveServiceId(id);
  };

  const closeService = () => {
    setActiveServiceId(null);
  };

  return (
    <ServicePopupContext.Provider value={{ activeServiceId, openService, closeService }}>
      {children}
    </ServicePopupContext.Provider>
  );
}

export function useServicePopup() {
  const context = useContext(ServicePopupContext);
  if (!context) {
    throw new Error("useServicePopup must be used within a ServicePopupProvider");
  }
  return context;
}
