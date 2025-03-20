// 'use client'
'use client';



// import { useEffect } from 'react';

import { Header } from "../components/Header";


import { About } from "../components/About";

import  { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Certificates } from "@/components/Certificates";
import Education from "@/components/Education";



// import { motion } from "framer-motion";

// import { ApearanceContext } from "@/app/context/Themecontext";
// import { useContext } from "react";


// import { usePathname } from "next/navigation";

// import useWindowSize from "@/components/utils";
import Footer from "@/components/Footer";
import Curve from "@/components/Curve";

import { useEffect } from "react";
// import Lenis from "lenis";

export default function Home() {

  // useEffect(() => {
  //     window.scrollTo(0, 0)
  // } , [])
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   const raf = (time: number) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   // Handle page refresh issue by waiting for DOM to be fully loaded
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 100);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  // window.scrollTo(0, 0)
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // } , [])
  // const path = usePathname()
  // let split = path.split('/')
  // let pathName = split[split.length - 1]
  // const { theme } = useContext(ApearanceContext) || {}
  // const { width , height} = useWindowSize();

    
  // const initialPath = `M0 300  Q${width / 2} 0 ${width} 300 L${width} 300 L0 ${height + 301 }  M${width} ${height + 301} L${width} 300 L0 ${height + 301}  Q${width / 2} ${height + 301 + 200} ${width} ${height + 301} `
  
  // const middlePath = `M0 200  Q${width / 2} 200 ${width} 200 L${width} 200 L0 ${height + 301 }  M${width} ${height + 301} L${width} 200 L0 ${height + 301}  Q${width / 2} ${height + 301} ${width} ${height + 301} `
    
  // const curve = {
  //   initial: {
  //       d: initialPath
  //   },
  //   enter: {},
  //   exit: {
  //       d: [initialPath, middlePath],
  //       transition: {
  //         duration: 1.4,
  //         ease: [0.16, 1, 0.3, 1],
  //       }
  //   }
  // }

  return (
    // <div className={`w-full bg-[url('/st.png')]   flex flex-col items-center justify-center font-[tommy]  bg-white  `}>
    
      // min-h-[567px] max-h-[700px]
    <>

        <div
          // exit
        
          id="page" className={`min-h-auto dark:text-[#fff] text-[#000]  w-full b-blue-500 font-[tommy2] `}
        >
          <div className="pt-[180px] pb-[100px] b-teal-300  w-full  flex justify-center min-h-[587px] max-h-[700px]" >
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
          
          <div className="w-full flex b-emerald-300 pb-[100px] justify-center -950 h-auto overflow-clip ">
            <div className="w-full max-w-[1240px] b-slate-500 h-[200px] relative ">
              <Skills />
            </div>
          </div>

          <div className={`w-full flex justify-center -950 h-auto overflow-clip `}>
            <div className="w-full max-w-[1240px] z-40  b-slate-500 h-auto">
              <Projects />
            </div>
          </div>

          <div className={`w-full  dark:bg-dark-bg bg-light-bg relative z-40 flex justify-center -950 h-auto overflow-clip `}>
            <div className="w-full max-w-[1240px]  b-slate-500 h-auto">
              <Certificates />
            </div>
          </div>
        </div>
          {/* <Curve /> */}
          {/* <Footer /> */}
          <Curve />
          <Footer />
            {/* <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: [0 , 1 , 1, 0] }}
            transition={{ duration: 3, times: [0.1, 0.35, 0.65, 0.85] }}
            
            z={100}
            x="50%"
            y="35%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="48"
            fontWeight="bold"
            >
            {pathName}
            </motion.text> */}
        {/* </div> */}
        {/* <motion.svg
          initial={{ y: "200vh" }}
          exit={{ y: ["100vh", "0vh"]  }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-[-300px] z-50   w-full flex justify-center items-center text-white h-[1800px] fill-[#393939] stroke-0`} >
          <motion.path
            variants={curve}
            initial="initial"
            exit="exit"
          />
        </motion.svg> */}
        
        </>
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

