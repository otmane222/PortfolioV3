'use client';


import { motion } from "framer-motion";
// import { Navigation } from "@/components/Navigation";
// import { useContext } from "react";
// import { ApearanceContext } from "@/app/context/Themecontext";

// import { useEffect } from "react";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import Magnet from "@/components/Magnet";

import Footer from "@/components/Footer";
import Curve from "@/components/Curve";

const WrappedText = ({ text }: { text: string }) => {
    return (
      <div className="flex flex-nowrap">
        {text.split("").map((char, index) => (
          <Magnet key={index}>
            <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
          </Magnet>
        ))}
      </div>
    );
  };
  
// import useWindowSize from "@/components/utils";

export default function About() {

    // const { theme } = useContext(ApearanceContext) || {}
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // } , [])
    // const { width, height } = useWindowSize();


    // const initialPath = `M0 300  Q${width / 2} 0 ${width} 300 L${width} 300 L0 ${height + 301 }  M${width} ${height + 301} L${width} 300 L0 ${height + 301}  Q${width / 2} ${height + 301 + 200} ${width} ${height + 301} `
  
    // const middlePath = `M0 200  Q${width / 2} 200 ${width} 200 L${width} 200 L0 ${height + 301 }  M${width} ${height + 301} L${width} 200 L0 ${height + 301}  Q${width / 2} ${height + 301} ${width} ${height + 301} `

    // const curve = {
    //     initial: {
    //         d: initialPath
    //     },
    //     enter: {},
    //     exit: {
    //         d: [initialPath, middlePath],
    //         transition: {
    //         duration: 1.4,
    //         ease: [0.16, 1, 0.3, 1],
    //         }
    //     }
    // }
    // console.log('About page');
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // } , [])
    const arr : string[] = ['Web', 'Dev', 'And', 'Software', 'Engineer']
    return (
        <>
            <div className={`w-full relative flex justify-center`} >
                <motion.div
                // exit={{ opacity: 0 }}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 3 }}
                
                    id="page" className="pt-[80px] w-full h-auto flex flex-col items-center relative z-10 b-[#ee7b7b]"
                >
                    <div className="w-[100%] h-[450px] flex  b-slate-300 justify-center items-center">
                        <div className="text-6xl flex flex-wrap gap-3 justify-center font-[tommy] text-center " >
                        {
                            arr.map((item, index) => (
                                <WrappedText key={index} text={item} />
                            ))
                        }
                        </div>
                    </div>
                    <div className=' flex flex-col  items-center w-full font-[tommy2] text-3xl text-center b-emerald-300 '>
                        <div className='flex flex-col items-center'>

                            <h1 className='text-4xl font-[tommy2] text-center pb-[50px]  '>
                                About me
                            </h1>
                            <div
                                className='relative w-[40vw] h-[40vw] max-h-[400px] max-w-[400px] mb-7   aspect-square b-[#956060]'
                                >
                                <Image
                                    src="/me/gtx.jpg"
                                    alt=""
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="filter grayscale  rounded-full hover:grayscale-0 transition-all duration-500"
                                    />
                            </div>
                        </div>
                        <div className={`w-full flex justify-center dark:bg-dark-bg bg-light-bg pb-[50px]`}>
                            <div className='w-auto max-w-[900px] h-auto b-[#956060] mt-0 text-[24px] flex items-center  '>
                                <TextReveal value="Since high school I had a passion for programming,
                                I started with C++ in 2018 and stoped for a while, I went to university and studied computer science
                                but I didn't like the way they teach us, After two years I stopped and went to 1337 school
                                where I had freedom to learn what I want the way I want, I Went dive into low level programming and learned C and C++,
                                seriously thousands of hours of coding and debugging, I learned the most valuable skill in my opinion,
                                which is learning how to learn. Now I am mastering web development, I'm also
                                intested in Cybersecurity which I am learning in parallel with web development.
                                My goal is to build the most secure and scalable web applications."
                                />
                            </div>
                        </div>
                    </div>



                </motion.div>
            </div>
            <Curve />
            <Footer />
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
    )
}