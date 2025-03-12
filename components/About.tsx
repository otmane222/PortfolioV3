
// 'use client'

import React from 'react';  
import Lottie  from 'lottie-web';
import TextReveal from './TextReveal';

import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

function About () {
    return (
        <motion.div
        initial={{ opacity: 0 , scale: 0.5}}
        animate={{ opacity: 1 , scale: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 , ease: 'easeInOut'}}

        className="w-full h-auto b-slate-100 relative flex justify-center items-start">
            <div className="w-[100%] h-full flex  b-slate-300 justify-center items-center">
                <div className='w-full h-[80%] b-black flex flex-col justify-start items-center'>
                    {/* <h1 className='font-[tommy2] text-[25px] pb-[50px]  '>ABOUT ME</h1> */}
                    <div className=' flex flex-col md:flex-row items-center w-full font-[tommy2] text-3xl text-center b-emerald-300 '>
                        <div className='flex flex-col items-center'>

                            <h1 className='text-4xl font-[tommy2] text-center pb-[50px]  '>
                                About me
                            </h1>
                            <div
                                className='relative w-[40vw] h-[40vw] max-h-[400px] max-w-[400px] mb-7 md:mb-0  aspect-square b-[#956060]'
                                >
                                <Image
                                    src="/me/gtx.jpg"
                                    alt=""
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="filter md:grayscale rounded-full hover:grayscale-0 transition-all duration-500"
                                    />
                            </div>
                        </div>
                        <div className='w-auto h-auto b-[#956060] mt-0 md:mt-[80px] text-[24px] flex items-center  '>
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
            </div>
        </motion.div>
    );
}


export { About }

// My name is Otmane Aboulghit borned and raised in Morocco, passionate about web development.
//                         I am a Full-Stack Developer with a background in Computer Science and a strong foundation in programming.
//                         I am skilled in developing responsive websites and web applications using modern technologies
//                         such as React, Next.js, Django, and Node.js. I am committed to creating user-friendly interfaces
//                         and implementing innovative solutions to improve the user experience. I am a quick learner
//                         and eager to explore new technologies to enhance my skills and contribute meaningfully to impactful projects.