'use client'

import React, { useContext } from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaSquareTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { ApearanceContext } from "@/app/context/Themecontext";

import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useRef } from "react";


export default function Footer() {
  

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
  
  const initialPath = `M0 0 L${window.innerWidth} 0 L0 100 M${window.innerWidth} 100 L${window.innerWidth} 0 L0 100 Q${window.innerWidth / 2} 400 ${window.innerWidth} 100`
  const endPath = `M0 0 L${window.innerWidth} 0 L0 100 M${window.innerWidth} 100 L${window.innerWidth} 0 L0 100 Q${window.innerWidth / 2} 0 ${window.innerWidth} 100`

  const curvo = useTransform(scrollYProgress, [0, 1], [initialPath, endPath]);


  return (
    <motion.div
      ref={container}
      style={{y}}
      className=' h-screen z-0 relative text-white b-black '
    >
      
      {/* <svg className=' absolute top-[0] w-full z-[100]  h-[400px]  ' xmlns="http://www.w3.org/2000/svg">
          <motion.path
          d={curvo}
          
          />
      </svg> */}


      <div className='  bg-[#1d1d1d] h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center b-[#454444] w-full max-w-[1240px]  h-full'>
          <div className="flex justify- items- flex-col gap-4 h-full w-[50%] b-sky-700">
              <div className="flex flex-col b-lime-700 p-10 rounded-xl  max-w-md mx-auto">
                <h1 className="text-4xl font-bold pb-6 pt-[40px] text-white text-">
                  Send me a message
                </h1>
                <form action="">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-white text-sm font-semibold">
                        Your Name*
                      </label>
                      <input 
                        className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-none transition" 
                        type="text" 
                        id="name" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-white text-sm font-semibold">
                        Your Email*
                      </label>
                      <input 
                        className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-lime-500 transition" 
                        type="email" 
                        id="email" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-white text-sm font-semibold">
                        Your Message*
                      </label>
                      <textarea 
                        className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-lime-500 transition" 
                        name="message" 
                        id="message" 
                        cols={10} 
                        rows={6}
                      ></textarea>
                    </div>
                    <button 
                      className="bg-slate-800 text-white p-3 rounded-md hover:bg-slate-600 transition w-full font-semibold shadow-md">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>


            </div>
            <div className="flex justify-  flex-col gap-4  h-full w-[50%] b-teal-500">
              
              <div className="flex flex-col b-slate-700 h-full w-[90%] pl-[50px] pt-[100px]">
                <div className="w-[100px] h-[100px] rounded-full bg-slate-500" >
                </div>

                <div  className="flex gap-2 h-[90px] items-center b-black">
                  <motion.div style={{rotate, scale: 1.5, x}} className="flex items-center justify-center b-slate-500 w-[40px] h-[40px] rounded-full">

                    <FaArrowTrendDown className="text-3xl text-white" />
                  </motion.div>
                </div>

                <motion.h1 style={{}} className='text-[12px] opacity-70 font-bold pb-[10px]  '>
                  Contact Details
                </motion.h1>
                <div className="flex flex-col gap-1">
  

                  <span className="flex flex-col gap-2">
                    <h1>
                      +212 6 55 12 11 49
                    </h1>
                  </span>

                  <span className="flex flex-col gap-2">
                    <h1>
                      otmaneaboulghit@gmail.com
                    </h1>
                  </span>
                </div>
                <h1 className='text-[12px] opacity-70 font-bold pt-[30px] pb-[10px]  '>Social</h1>
                <div className="flex flex-col gap-2">
                  <a href="https://twitter.com/otmane_aboulghit" target="_blank" rel="noreferrer">
                    Linkden
                  </a>
                  <a href="
                    https://www.linkedin.com/in/otmane-aboulghit-9b4a8b1b7/" target="_blank" rel="noreferrer">
                    Twitter
                  </a>
                  <a href="
                    https://www.linkedin.com/in/otmane-aboulghit-9b4a8b1b7/" target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href="
                    https://www.linkedin.com/in/otmane-aboulghit-9b4a8b1b7/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  
                </div>
                <div className="h-[1px] w-[90%] bg-[#fff] mt-[30px] "></div>
                <h1 className="text-[14px] pt-2 font-[tommy2]" >Happiness is only real when you share it.</h1>
              </div>

              <div>

              </div>
              
            </div>
            
        </div>
      </div>
    </motion.div>
  )
}

//  format the code its messy 









