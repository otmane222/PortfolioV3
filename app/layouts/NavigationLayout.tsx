
'use client'

import React from 'react';
import { useState, useContext } from 'react';
import { ApearanceContext } from '@/app/context/Themecontext';


import Footer  from '@/components/Footer';

import { ReactNode } from 'react';


import { Navigation } from '@/components/Navigation';
// import Curve from '@/components/Curve';

// import { usePathname } from 'next/navigation';

export default function NavigationLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, themeHandler } = useContext(ApearanceContext) || {}

  function ThemeHandler() {
      themeHandler!(theme == 'light' ? 'dark' : 'light')
  }

  const onToggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
    
  return (
    
    // <Lenis
    //     root
    //     options={{
    //       // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
    //       lerp: 0.1,
    //       //   infinite: true,
    //       //   syncTouch: true,
    //     }}
    //     >
        <div className={` flex flex-col items-center bg-[url('/')]  ${theme == 'dark' ? "bg-dark-bg text-[#fff4f4]" : "bg-light-bg text-[#000000] "} w-full h-auto `}>
          <Navigation />
          {children}
        </div>
    // </Lenis>
  );
}
