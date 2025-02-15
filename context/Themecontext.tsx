'use client';

import { ApearanceContextType } from '../types/indexTypes';
import { createContext, ReactNode, useState, useEffect } from 'react';

// Create the context
export const ApearanceContext = createContext<ApearanceContextType | null>(null);

// ApearanceProvider component
export default function ApearanceProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>('light');

  // Use useEffect to interact with window.localStorage on the client side only
  useEffect(() => {
    let currentTheme = window.localStorage.getItem('theme');

    if (!currentTheme) {
      currentTheme = 'light';
      window.localStorage.setItem('theme', currentTheme);
    }

    setTheme(currentTheme);
  }, []); // Empty dependency array ensures this runs only on the client side (after initial render)

  // Function to handle theme changes
  function themeHandler(theme: string) {
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }

  const value = {
    theme,
    themeHandler,
  };

  return (
    <ApearanceContext.Provider value={value}>
      {children}
    </ApearanceContext.Provider>
  );
}
