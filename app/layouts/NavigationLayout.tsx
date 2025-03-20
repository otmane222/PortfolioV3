
'use client'

import React from 'react';
// import { useContext } from 'react';
// import { ApearanceContext } from '@/app/context/Themecontext';


// import Footer  from '@/components/Footer';

import { ReactNode } from 'react';


import { Navigation } from '@/components/Navigation';
// import Curve from '@/components/Curve';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
// import { motion } from 'framer-motion';
// import {  useState } from 'react';

export default function NavigationLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Detects route changes

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly scroll to top
  }, [pathname]); // Runs effect when pathname changes
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const { theme } = useContext(ApearanceContext) || {}

  // const [isLenisReady, setIsLenisReady] = useState(false);
  
  // const lenis = useLenis(({ scroll }) => {
  //   // Your scroll callback logic here
  // });
  
  // useEffect(() => {
  //   // Delay enabling smooth scrolling
  //   const timer = setTimeout(() => {
  //     setIsLenisReady(true);
  //   }, 400);
    
  //   return () => clearTimeout(timer);
  // }, []);
    
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
        <div className={` flex flex-col items-center bg-[url('/')]  dark:bg-dark-bg bg-light-bg w-full h-auto `}>
          <ReactLenis root 
            options={{
              lerp: 0.1,
              // duration: 0.5,
              
              // Other options you might want
            }}
          >
            <Navigation />
            {children}
          </ReactLenis>
        </div>
    // </Lenis>
  );
}
