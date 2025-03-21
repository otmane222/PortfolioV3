
'use client';

import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
// import { ApearanceContext } from "@/app/context/Themecontext";




import useWindowSize from "../utils";




const AnimatedBox = ({ children }: { children: React.ReactNode}) => {
    const [hover, setHover] = useState(false);
    const [animate, controls] = useAnimate();
    // const animateRef = useRef(null); // Unique ref for each component
  
    const handleAnimateIn = async () => {
      // await controls(animate.current, {x: 0})
      await controls(animate.current, {
        height: 130,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      });
      await controls(animate.current, {
        width: 250,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      });
      await controls("#hover", { opacity: 1, y: 0});
  
      setHover(true);
    };
  
    const handleAnimateOut = async () => {
      await controls("#hover", { opacity: 0 });
      await controls(animate.current, {
        width: 30,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      });
      await controls(animate.current, {
        height: 30,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      });
      
      await controls("#hover", { y: 20 });
      setHover(false);
    };

    return (
    
      <motion.div
        ref={animate}
        className={`w-[30px] h-[30px] cursor-pointer
          dark:bg-light-bg bg-dark-bg
            rounded-[20px] ml-2 mr-2 flex items-center justify-center overflow-hidden`}
        onClick={hover ? handleAnimateOut : handleAnimateIn}
      >
        <motion.div
          id="hover"
          className={`flex flex-col   dark:text-dark-bg text-light-bg pl-4 pt-3 w-full h-full  text-[#]  opacity-0`}
          initial={{ y: 20, opacity: 0 }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };
  
  
  const Small = () => {

    return (
      <div className="flex justify-center">
        
        <div className={`h-[500px] w-[10px] rounded-[20px] dark:bg-light-bg bg-dark-bg`}>
  
        </div>
        <div className="flex flex-col justify-center items-start b-sky-400 h-[500px] w-full">
  
          <div className="w-[250px] mb-4 flex h-[130px]">  
  
            <AnimatedBox>
                <h1 className="font-[tommy] text-[20px]">High School Diploma</h1>
                <h1>Science Math</h1>
                <p>2006-2019</p>
                <p>Ifrane, Lycée Allal El Fasi</p>
            </AnimatedBox>
          </div>
          
          <div className="w-[250px] mb-4 flex h-[130px]">  
  
            <AnimatedBox>
                <h1 className="font-[tommy] text-[20px]">University</h1>
                <h1>S.M Applique et Informatics</h1>
                <p>2020-2022</p>
                <p>Meknes, Moulay ismail uni</p>
            </AnimatedBox>
          </div>
  
          <div className="w-[255px] flex h-[130px]">  
  
            <AnimatedBox>
                <h1 className="font-[tommy] text-[20px]">1337 (42 Network)</h1>
                <h1>IT Architect</h1>
                <p>2022-2024</p>
                <p>Khouribga, 1337 coding school</p>
            </AnimatedBox>
          </div>
  
        </div>
      </div>
    )
  }
  
  const Large = () => {

    return (
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-end b-sky-400 h-[500px] w-full">
  
          <div className="w-[250px] mb-4 flex h-[130px]">
          </div>
          
          <div className="w- mb-4 flex h-[130px]">  
  
            <AnimatedBox>
                <h1 className="font-[tommy] text-[20px]">University</h1>
                <h1>S.M Applique et Informatics</h1>
                <p>2020-2022</p>
                <p>Meknes, Moulay ismail uni</p>
            </AnimatedBox>
          </div>
  
          <div className="w-[255px] flex h-[130px]">
          </div>
  
        </div>
  
        <div className={`h-[500px] w-[30px] rounded-[20px] dark:bg-light-bg bg-dark-bg`}>
        </div>
        
        <div className="flex flex-col justify-center items-start b-sky-400 h-[500px] w-full">
  
          <div className="w-[250px] mb-4 flex h-[130px]">  
  
            <AnimatedBox>
                <h1 className="font-[tommy] text-[20px]">High School Diploma</h1>
                <h1>Science Math</h1>
                <p>2006-2019</p>
                <p>Ifrane, Lycée Allal El Fasi</p>
            </AnimatedBox>
          </div>
          
          <div className="w-[250px] mb-4 flex h-[130px]">  
          </div>
  
          <div className="w-[255px] flex h-[130px]">  
  
            <AnimatedBox>
                <h1 className="font-[tommy] text-[20px]">1337 (42 Network)</h1>
                <h1>IT Architect</h1>
                <p>2022-2024</p>
                <p>Khouribga,1337 coding school</p>
            </AnimatedBox>
          </div>
        </div>
      </div>
    )
  }

import { LightText } from "../LightText";
export default function Education() {


    const { width } = useWindowSize();

    return (
        <div>
            <h1 className="text-4xl font-bold text-center pb-[30px] pt-[30px]">
              <LightText text="Education" />
            </h1>
            <div className="w-full h-[500px] b-blue-700 flex  justify-center items-center">
            
                {
                  width <= 550 ? <Small /> : <Large />
                }

            
            </div>
        </div>
    );
}