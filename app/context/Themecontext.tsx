'use client';

import { ApearanceContextType } from '../../types/indexTypes';
import { createContext, ReactNode, useState, useEffect } from 'react';

export const ApearanceContext = createContext<ApearanceContextType | null>(null);


export default function ApearanceProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>('light');
  const [mounted, setMounted] = useState<boolean>(false);


  useEffect(() => {
    let currentTheme = window.localStorage.getItem('theme');

    if (!currentTheme) {
      currentTheme = 'light';
    }
    window.localStorage.setItem('theme', currentTheme);
    
    setTheme(currentTheme);
    setMounted(true);
  }, []);
  
  function themeHandler(theme: string) {
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }

  const value = {
    theme,
    themeHandler,
  };

  if (!mounted) return null;
  return (
    <ApearanceContext.Provider value={value}>
      {children}
    </ApearanceContext.Provider>
  );
}
