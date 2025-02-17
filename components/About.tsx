
// 'use client'

import React from 'react';  
import Lottie  from 'lottie-web';
import TextReveal from './TextReveal';

import { useScroll } from 'framer-motion';



function About () {
    return (
        <div className="w-full h-full b-slate-100 relative flex justify-center items-start">
            <div className="w-[100%] h-full flex b-slate-300 justify-center items-center">
                <div className='w-full h-[80%] b-black flex flex-col justify-start items-center'>
                    <h1 className='font-[tommy2] text-[25px]'>ABOUT ME</h1>
                    <div className='font-[tommy2] text-3xl text-center'>

                        <TextReveal value="My name is Otmane Aboulghit borned and raised in Morocco, passionate about web development.
                        I am a Full-Stack Developer with a background in Computer Science and a strong foundation in programming.
                        I am skilled in developing responsive websites and web applications using modern technologies
                        such as React, Next.js, Django, and Framer motion."
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}


export { About }

// My name is Otmane Aboulghit borned and raised in Morocco, passionate about web development.
//                         I am a Full-Stack Developer with a background in Computer Science and a strong foundation in programming.
//                         I am skilled in developing responsive websites and web applications using modern technologies
//                         such as React, Next.js, Django, and Node.js. I am committed to creating user-friendly interfaces
//                         and implementing innovative solutions to improve the user experience. I am a quick learner
//                         and eager to explore new technologies to enhance my skills and contribute meaningfully to impactful projects.