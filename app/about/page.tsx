"use client";

import { motion, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext, useState } from "react";
import useWindowSize from "@/components/utils";



export default function About() {
  const { theme } = useContext(ApearanceContext) || {}
  const pathname = usePathname(); // Get current route
  const { width } = useWindowSize();
  
  return (
    <motion.div
      className="mt-[180px] w-full h-auto b-slate-400"
    >
      {/* <div className={`w-full relative font-[tommy2]  z-10 flex ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} justify-center  h-full overflow- `}>
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

        </div>
      </div> */}
    </motion.div>
  );
}
