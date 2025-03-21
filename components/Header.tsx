'use client';
import { Typewriter } from 'react-simple-typewriter'

// import {  useContext } from 'react';
// import { ApearanceContext } from '@/app/context/Themecontext';
import { MdArrowOutward } from "react-icons/md";

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import Magnet from './Magnet';
import Link from 'next/link';

import { ShinyButton } from './ShinnyButton';


function Header() {


  
  return (
    <motion.div
      // initial={{ opacity: 0, y: 200 }}
      // animate={{ opacity: [0 , 0 , 0.5 ,1], y: 0 }}
      // transition={{ duration: 3, ease: [0, 0.35, 0.7, 1] }}
    className={`flex flex-col items-center justify-center w-full h-full `}>

      <div className={` h-auto w-full b-slate-500 bg-[#] flex items-center justify-`}>
        
        <div className="z-10 m-5 1300:m-0 flex flex-col justify-center w-full b-[#ee9494] h-auto">
          
          <div className="flex flex-col justify-center w-full b-[#995b5b] h-full">
            
            <div className='flex flex-col  justify-center h-full b-[#44cf83] '>
              
              <div >
              <motion.div 
                // initial={{ opacity: 0, x: -50 }}
                // animate={{ opacity: 1, x: 0.2 }}
                // exit={{ opacity: 0, x: -50 }} // Exit animation
                // transition={{ duration: 1 }}
                className=''
              >
                <h1 className='md:whitespace-nowrap text-center md:text-left'>
                  <span className="md:text-6xl 425:text-4xl text-2xl whitespace-nowrap">Hello,</span>
                  <br />
                  <span className="md:text-7xl 425:text-4xl text-2xl whitespace-nowrap">I&apos;m </span>
                  <span className="md:text-7xl text-6xl font-bold ">Otmane Aboulghit</span>
                  <br />
                </h1>
              </motion.div>
              </div>
              <motion.div
                // initial={{ opacity: 0, x: -50 }}
                // animate={{ opacity: 1, x: 0.2 }}
                // exit={{ opacity: 0, x: -50 }} // Exit animation
                // transition={{ duration: 1 }}
                className='mt-5 b-slate-400 text-center md:text-left '>
                <span className="text-[30px] md:inline-flex md:mr-2 block">Full-stack Developer </span>
                {/* <br /> */}
                <span className='text-[30px] text-[#76a3f5] font-bold ' >
                {/* Django Rest Framework */}
                <Typewriter
                  
                  words={[ 'Curiosity', 'Motivation to Learn', 'Fast Learner ⚡', 'Adaptability', 'Problem-Solving', 'Teamwork']}//'Next js', 'TAILWINDCSS',, 'PostgresSql', 'Docker']}
                  loop={0} cursor={true} cursorStyle='|'
                  typeSpeed={100} deleteSpeed={100} delaySpeed={1000}
                  />
                  </span>
              </motion.div>
            <motion.div
              // initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, x: 0.2 }}
              // exit={{ opacity: 0, x: -50 }} // Exit animation
              // transition={{ duration: 1 }}
              className='flex  items-start justify-center md:justify-start b-slate-200 pt-[10px] '>
              {/* <button className='bg-[#0d3b91] hover:bg-[#1e2124] text-white transition-all duration-500 ease-in-out  p-[12px] rounded-md'>
              
                Contact Me
              </button> */}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: document.body.scrollHeight - 750});
                }}
              >
                <ShinyButton text={"Contact Me"} />
              </div>
  
              {/* <button className='hover:bg-[#1363a5] hover:text-white  transition-all duration-500 ease-in-out  p-[12px] rounded-md ml-5'>
                Resume
              </button> */}
            </motion.div>
            </div>
            
          </div>
        </div>
        {/* <div className="absolute w-[300px] z-0 h-[1000px]  md:flex hidden ">
        <img src="/bg.svg" alt="otmane" className=" rounded-full w-full h-full " />
        <img src="/bg.svg" alt="otmane" className=" rounded-full w-full h-full " />
        </div> */}
      </div>
        <div className=" flex items-center w-[100%] z-10 h-auto mt-4 md:mt-8  b-slate-700 b-slate-500    ">
          
          <div className='flex md:flex-row flex-col  justify-around items-center b-[#b9da85] h-auto w-full '>
            <div className={`flex justify-center items-center dark:bg-slate-300 bg-slate-800 h-[1px] w-[95%] md:w-[47%]`}>
            </div>
            <motion.div
              // initial={{ opacity: 0, x: 50 }}
              // animate={{ opacity: 1, x: 0.2 }}
              // exit={{ opacity: 0, x: 50 }} // Exit animation
              // transition={{ duration: 1 }}
              className='flex md:justify-end justify-start items-center md:p-[0px] p-[10px] b-slate-300 h-[90%] w-[95%] md:w-[50%]'>
              <h4 className='text-[15px] text-center md:text-left '>Web dev with background in low level programing c/c++ and system design. DRY, Don&apos;t Repeat Yourself</h4>
            </motion.div>
          </div>

        </div>

        <div className='flex  items-center justify-between w-[95%] md:w-[95%] h-auto b-[#150b6d] '>
          <motion.div
            // initial={{ opacity: 0, x: -50 }}
            // animate={{ opacity: 1, x: 0.2 }}
            // exit={{ opacity: 0, x: -50 }} // Exit animation
            // transition={{ duration: 1 }}
            className='hidden md:flex justify-around items-center b-[#d83f3f] h-[50px] w-[50%]'>

            <Magnet>
              <a href='https://www.linkedin.com/in/otmane-aboulghit-46493a1b4/' target="_blank" rel="noreferrer"  className='flex cursor-pointer b-emerald-200 p-5 '>
                <h4 className='text-[13px]'>LINKDEN</h4>
                <MdArrowOutward size={15}/>
              </a>
            </Magnet>
            <Magnet>
              <a href='https://github.com/otmane222' target="_blank" rel="noreferrer" className='flex cursor-pointer p-5'>
                <h4 className='text-[13px]'>GITHUB</h4>
                <MdArrowOutward size={15}/>
              </a>
            </Magnet>

            <Magnet>
              <a href='https://x.com/take_it__easy_' target="_blank" rel="noreferrer" className='flex cursor-pointer p-5'>
                <h4 className='text-[13px]'>TWITTER</h4>
                <MdArrowOutward size={15}/>
              </a>
            </Magnet>

            <Magnet>
              <a href='https://mail.google.com/mail/?view=cm&fs=1&to=otmaneaboulghit@gmail.com&su=Subject&body=Hello' target="_blank" rel="noreferrer" className='flex cursor-pointer p-5'>
                <h4 className='text-[13px]'>GMAIL</h4>
                <MdArrowOutward size={15}/>
              </a>
            </Magnet>
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: 1, x: 0.2 }}
            // exit={{ opacity: 0, x: 50 }} // Exit animation
            // transition={{ duration: 1 }}
            className='flex md:justify-end justify-center items-center b-[#3fd8be] h-[50px] w-full md:w-[50%]'>
            {/* <button className='bg-[#fff] hover:bg-[#e2e1e1] text-black text-[14px] transition-all duration-500 ease-in-out pr-[23px] pl-[23px]  p-[12px] rounded-full'>
              Know me better
            </button> */}
            <div className=" hover:text-white cursor-pointer h-12  rounded-full  px-6">
              <Link href={"/about"} className='w-full h-full  b-black flex items-center justify-center' >
                <ShinyButton text={"Know Me Better"} />
              </Link>
            </div>
          </motion.div>
        </div>
    </motion.div>
  );
}

export { Header };