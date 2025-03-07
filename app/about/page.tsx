"use client";

import { motion, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext, useState } from "react";


type AnimatedBoxProps = {
  text: string; // To pass different content if needed
};

const AnimatedBox = ({ children }: { children: React.ReactNode}) => {
  const [hover, setHover] = useState(false);
  const [animate, controls] = useAnimate();
  // const animateRef = useRef(null); // Unique ref for each component

  const handleAnimateIn = async () => {
    await controls(animate.current, {x: 0})
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
    await controls(animate.current, {x: window.innerWidth/10})
    await controls("#hover", { y: 20 });
    setHover(false);
  };

  const { theme } = useContext(ApearanceContext) || {};
  return (
  
    <motion.div
      ref={animate}
      className={`w-[30px] h-[30px] cursor-pointer ${
        theme === "dark" ? "bg-light-bg" : "bg-dark-bg"
      } rounded-[20px] ml-2 mr-2 flex items-center justify-center overflow-hidden`}
      onClick={hover ? handleAnimateOut : handleAnimateIn}
    >
      <motion.div
        id="hover"
        className={`flex flex-col   ${theme == 'dark' ? "text-dark-bg" : "text-light-bg"} pl-4 pt-3 w-full h-full  text-[#]  opacity-0`}
        initial={{ y: 20, opacity: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function About() {
  const { theme } = useContext(ApearanceContext) || {}
  const pathname = usePathname(); // Get current route

  
  return (
  <motion.div

      className="mt-[180px] w-full h-auto bg-slate-400"
    >
      <div className={`w-full relative font-[tommy2]  z-10 flex ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} justify-center  h-full overflow- `}>
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


          <h1 className="text-4xl font-bold text-center pb-[30px] pt-[30px]">Education</h1>
          
          <div className="w-full h-[500px] b-blue-700   justify-center items-center">
            
              
              <div className="flex 800:flex-row flex-col h-[500px] w-auto">

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
                      <h1 className="font-[tommy] text-[20px]">High School Diploma</h1>
                      <h1>Science Math</h1>
                      <p>2006-2019</p>
                      <p>Ifrane, Lycée Allal El Fasi</p>
                  </AnimatedBox>
                </div>

                <div className="w-[255px] flex h-[130px]">  

                  <AnimatedBox>
                      <h1 className="font-[tommy] text-[20px]">High School Diploma</h1>
                      <h1>Science Math</h1>
                      <p>2006-2019</p>
                      <p>Ifrane, Lycée Allal El Fasi</p>
                  </AnimatedBox>
                </div>
              </div>

            
          </div>

        </div>
      </div>
    </motion.div>
  );
}
