// 'use client'
'use client';
import Image from "next/image";
import { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";

import Footer from "@/components/Footer";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import  { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Certificates } from "@/components/Certificates";
import Curve from "@/components/Curve";
import Education from "@/components/Education";


import Link from "next/link";


import { SmoothScrollHero } from "@/components/SmoothScroll";

import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext } from "react";

export default function Home() {
  
  const { theme } = useContext(ApearanceContext) || {}

  return (
    // <div className={`w-full bg-[url('/st.png')]   flex flex-col items-center justify-center font-[tommy]  bg-white  `}>
    
      // min-h-[567px] max-h-[700px]
    <>
        <div id="page" className={`min-h-auto w-full b-blue-500 font-[tommy2] `}>

          <div className="pt-[180px] pb-[100px] b-teal-300  w-full text-white flex justify-center min-h-[587px] max-h-[700px]" >
            <div className="w-full max-w-[1240px] b-slate-400">
              <Header />
            </div>
          </div>

          <div className="w-full flex justify-center itme min:h-[460px]   ">
            <div className="w-full max-w-[1240px] b-slate-500 pb-[130px] h-auto">
              <About />
            </div>
          </div>

          <div className="w-full flex bg-[#] justify-center -950 h-auto overflow-clip pb-[60px] ">
            <div className="w-full max-w-[1240px] b-slate-500 h-[600px] relative ">
              <Education />
            </div>
          </div>
          
          <div className="w-full flex bg-[#] justify-center -950 h-auto overflow-clip pb-[60px] ">
            <div className="w-full max-w-[1240px] b-slate-500 h-[200px] relative ">
              <Skills />
            </div>
          </div>

          <div className={`w-full  ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} z-40 flex justify-center -950 h-auto overflow-clip `}>
            <div className="w-full max-w-[1240px]  b-slate-500 h-auto">
              <Projects />
            </div>
          </div>

          <div className={`w-full  ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} relative z-40 flex justify-center -950 h-auto overflow-clip `}>
            <div className="w-full max-w-[1240px]  b-slate-500 h-auto">
              <Certificates />
            </div>
          </div>

          <Curve />
          <Footer />
            
        </div>
        </>
    // </Lenis>
  );
}


// {/* <div className="w-full flex b-[#000] justify-center -950 h-auto overflow-clip ">
//   <div className="w-full max-w-[1240px] b-slate-500 h-auto">
//     <RevealBento />
//   </div>
// </div> */}

// {/* <div className="w-full flex bg-[#] justify-center -950 h-auto overflow-clip ">
//   <div className="w-full max-w-[1240px] b-slate-500 h-auto">
//     <Projects />
//     </div>
//     </div> */}

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;

{/* <div class="px-10 py-0">
      <div class="container mx-auto max-w-7xl mt-2">
        <div class="py-[4.375rem]">
          <div class="flex flex-col gap-y-[13.75rem] relative">
            <div
              class="grid grid-cols-2 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-[3.75rem] overflow-hidden"
            >
              <div id="div1" class="max-w-[30rem]">
                <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  One
                </div>
              </div>
              <div id="div2">
                <div class="w-full h-[500px]"></div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-auto overflow-hidden z-20"
            >
                <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  Two
                </div>
            </div>
            <div
              class="grid grid-cols-2 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-[6.25rem] overflow-hidden z-30"
            >
               <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  Three
                </div>
            </div>
            <div
              class="grid grid-cols-2 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-[7.5rem] overflow-hidden z-40"
            >
              <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  Four
                </div>
            </div>
            <div class="min-h-[300px]"></div>
          </div>
        </div>
      </div>
    </div> */}

