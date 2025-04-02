"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { DeviceType, EmailBuilderConfig, ThemeMode } from "./types";

interface EmailBuilderContextType {
  config: EmailBuilderConfig;
  setDevice: (device: DeviceType) => void;
  setMode: (mode: ThemeMode) => void;
}

const EmailBuilderContext = createContext<EmailBuilderContextType | undefined>(undefined);

export function EmailBuilderProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<DeviceType>("mobile");
  const [mode, setMode] = useState<ThemeMode>("dark");

  // Combine state into a single config object
  const config: EmailBuilderConfig = {
    device,
    mode,
    // Derive previewId from device type
    previewId: `${device}-preview`
  };

  return (
    <EmailBuilderContext.Provider 
      value={{ 
        config, 
        setDevice,
        setMode
      }}
    >
      {children}
    </EmailBuilderContext.Provider>
  );
}

export function useEmailBuilder() {
  const context = useContext(EmailBuilderContext);
  if (context === undefined) {
    throw new Error("useEmailBuilder must be used within an EmailBuilderProvider");
  }
  return context;
} 