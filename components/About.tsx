'use client';

import React, { useEffect, useRef } from 'react';  
import Lottie  from 'lottie-web';

function About () {
    
    const container = useRef<HTMLDivElement | null>(null);  // Explicitly set the type to HTMLDivElement

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../public/lottie/Animation2.json')
        })
    }
    ,[])
    
    return (
        <div className="w-full h-full relative flex  md:justify-start justify-center items-center ">
            <div className="w-[80%] md:w-[60%] h-full   flex justify-center items-center">
                <div className='w-full md:h-[70%] h-[80%]  flex flex-col items-center '>
                    <h1 className='text-[35px]' >About Me</h1>
                    <p className='font-[tommy2] pt-[10px] text-center'>
                        My name is Otmane Aboulghit borned and raised in Morocco, passionate about web development.
                        I am a Full-Stack Developer with a background in Computer Science and a strong foundation in programming.
                        I am skilled in developing responsive websites and web applications using modern technologies
                        such as React, Next.js, Django, and Node.js. I am committed to creating user-friendly interfaces
                        and implementing innovative solutions to improve the user experience. I am a quick learner
                        and eager to explore new technologies to enhance my skills and contribute meaningfully to impactful projects.
                    </p>
                </div>
            </div>
            <div ref={container}
                className="w-[40%] h-[300px]  absolute  md:flex hidden  "
                style={{  // Apply scale here
                    transformOrigin: 'center', // Adjust origin for scaling
                    top: '15%',  // Move the div 20% from the top of the container
                    left: '50%', // Position it in the center horizontally
                    transform: 'scale(1.4) translate(0%, 0%)' // Translate to center the scaled element
                }}
                >
            </div>
        </div>
        )
}

export { About }