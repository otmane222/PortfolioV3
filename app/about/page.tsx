"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext } from "react";


export default function About() {
  const { theme } = useContext(ApearanceContext) || {}
  const pathname = usePathname(); // Get current route
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  
  return (
  <motion.div
    // initial="initial"
    // animate="animate"
    // // exit="exit"
    // variants={pageVariants}
    // transition={{ duration: 0.5 }}
    // style={{ willChange: "opacity, transform" }}
    // id="page"
    // onAnimationComplete={() => {
    //   // window.scrollTo(0, 0);
    //   console.log("Page transition complete");
    // }}
    // onAnimationStart={() => {
    //   console.log("Page transition started");
    // }
    // }
      className="mt-[180px] w-full h-auto bg-slate-400"
    >
      <div className={`w-full relative  z-10 flex ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} justify-center  h-full overflow- `}>
        <div className="w-full max-w-[1240px] b-red-800    h-[5000px]">
          
          <div className="w-full h-[400px] b-red-500 flex justify-center items-center">
            <div className="w-[300px] h-[400px] bg-green-600">
              <img src="/images/hero.jpg" alt="hero" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full bg-emerald-500">
              <h1 className="text-4xl font-bold text-center">About</h1>
              <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.</p>
            </div>
          </div>


          <h1 className="text-4xl font-bold text-center">Education</h1>
          
          <div className="w-full h-[600px] bg-blue-700 flex  justify-center items-center">
            
              <div className="flex flex-col h-[500px] w-auto">
                <div className="w-full flex h-[150px] mt-[10px] mb-[10px]  b-emerald-500">
                  
                  
                </div>

                <div className="w-full flex h-[150px] mt-[10px] mb-[10px]  bg-emerald-500">
                  <div className="w-[30px] h-full bg-red-300"></div>
                  <div className="w-auto] h-[30px] bg-purple-500">
                    <h1>Hight Scholl Diplom</h1>
                    <h1>Science Math</h1>
                    <p>2006-2019</p>
                    <p>Ifran, Allal El Fasi</p>
                  </div>
                </div>
              </div>
              <div className="h-full w-[30px] bg-[#d5cd76] "></div>
              
              <div className="flex flex-col h-[500px] w-auto">

                <div className="w-full flex h-[150px] mt-[10px] mb-[10px]  bg-emerald-500">
                  <div className="w-[30px] h-full bg-red-300"></div>
                  <div className="w-auto h-[30px] bg-purple-500">
                    <h1>Hight Scholl Diplom</h1>
                    <h1>Science Math</h1>
                    <p>2006-2019</p>
                    <p>Ifran, Allal El Fasi</p>
                  </div>
                </div>
                
                <div className="w-full flex h-[150px] mt-[10px] mb-[10px]  b-emerald-500">
                  
                </div>

                <div className="w-full flex h-[150px] mt-[10px] mb-[10px]  bg-emerald-500">
                  <div className="w-[30px] h-full bg-red-300"></div>
                  <div className="w-auto h-[30px] bg-purple-500">
                    <h1>Hight Scholl Diplom</h1>
                    <h1>Science Math</h1>
                    <p>2006-2019</p>
                    <p>Ifran, Allal El Fasi</p>
                  </div>
                </div>
              </div>

            
          </div>

        </div>
      </div>
    </motion.div>
  );
}
