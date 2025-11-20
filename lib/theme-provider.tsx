"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeConfig, defaultTheme, generateCSSVariables } from "./tokens";

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  applyTheme: (theme: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme);

  const applyTheme = (newTheme: ThemeConfig) => {
    const cssVars = generateCSSVariables(newTheme);
    const root = document.documentElement;

    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    setThemeState(newTheme);
  };

  const setTheme = (newTheme: ThemeConfig) => {
    applyTheme(newTheme);
    localStorage.setItem("cleancn-theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("cleancn-theme");
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme);
        applyTheme(parsed);
      } catch (e) {
        applyTheme(defaultTheme);
      }
    } else {
      applyTheme(defaultTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

