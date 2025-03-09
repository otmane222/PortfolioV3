

'use client';
import React, { useEffect } from 'react';
import Image from 'next/image.js';
import useWindowSize from '../utils';

// import '../styles/base.css';
// import '../styles/slide.css';

// https://preline.co/templates.html

import { animate, motion, useMotionValue, useInView } from "framer-motion";
import { useState, useRef } from "react";
import useMeasure from "react-use-measure";

import { AnimatePresence } from "framer-motion";

// import Arrow from "../../public/arrow.svg";

interface CardProps {
  image: string[];
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { width } = useWindowSize();

  return (
    <motion.div
      className="relative overflow-hidden w-[300px] h-[200px] 800:w-[400] 800:h-[300] 1024:w-[546px] 1024:h-[400px] bg-slate-400 rounded-xl flex justify-center items-center"
      key={image[0]}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <a href={image[1]} target="_blank" rel="noreferrer">
                <span>See Credentials</span>
              </a>
              {/* <Arrow className="h-4 w-4" /> */}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    
      <Image
        src={`/certifacates/${image[0]}`} alt={image[0]} fill style={{ objectFit: "cover" }} />

      
      
    </motion.div>
  );
};


const Card2: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { width } = useWindowSize();

  return (
    <motion.div
      className="relative overflow-hidden w-[90%] max-w-[700px] shadow-xl mt-[30px] mb-[30px] aspect-[4/3] bg-emerald-500 rounded-[30px]"
      key={image[0]}
    >
      <a className='rounded-xl'  href={image[1]} target="_blank" rel="noreferrer" >
        <Image
          src={`/certifacates/${image[0]}`} alt={image[0]} fill style={{ objectFit: "cover" }} />
      </a>
      
    </motion.div>
  );
};




function Certificates() {

  const certificates = [
    ["javascript.png", "https://www.coursera.org/account/accomplishments/certificate/3CODBSQ6YBVL"],
    ["postgresql.png", "https://www.coursera.org/account/accomplishments/certificate/ZQ6FB9KLPJ91"],
    ["typescript2.png", "https://www.coursera.org/account/accomplishments/certificate/RC8B7X2P3DKF"],
    ["django.png", "https://www.coursera.org/account/accomplishments/certificate/8SMD49CIL4B2"],
    ["next.png", "https://static.frontendmasters.com/ud/c/ea52a0b8d5/IUcTZCIWvj/next-js-v3.pdf"],
    ["typescript.png", "https://static.frontendmasters.com/ud/c/ea52a0b8d5/GwqZrXHypL/typescript-v4.pdf"],
  ];
  const { width: widthh } = useWindowSize();
  const FAST_DURATION = widthh < 1024 ? 20 : 50;
  const SLOW_DURATION = widthh < 1024 ? 70 : 80;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);
  
  // if (widthh ) {
    return (
      <div className=' flex flex-col pt-[100px]  w-full h-auto'>
        <div className='text-center w-full h-[100px] justify-center b-red-300' >

          <h1 className='text-4xl ' >
            Certificates
          </h1>
          <span className='text-sm text-gray-500 block'>
            (click to see credentials)
          </span>
        </div>
        <div className='w-full h-full flex flex-col items-center gap-4' >
          {certificates.map((item, idx) => {
            const itemRef = useRef<HTMLDivElement>(null); // Typed itemRef
            const inView = useInView(itemRef);

            return (
              <motion.div
                className='w-full h-auto b-emerald-400 flex flex-col items-center '
                key={idx}
                ref={itemRef}
                initial={{ x: -100, opacity: 0.5 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0.4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card2 image={item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    )
  
  
  // return (
  //   <div className=' mask-gradient  w-full h-[800px] pt-[150px]'>
  //     <div className='text-center w-full h-[100px] justify-center b-red-300' >

  //       <h1 className='text-4xl ' >
  //         Certificates
  //       </h1>
          
  //     </div>
  //     <motion.div
  //         className="absolute left-0 flex gap-4 b-slate-500"
  //         style={{ x: xTranslation }}
  //         ref={ref}
  //         onHoverStart={() => {
  //           setMustFinish(true);
  //           setDuration(SLOW_DURATION);
  //         }}
  //         onHoverEnd={() => {
  //           setMustFinish(true);
  //           setDuration(FAST_DURATION);
  //         }}
  //       >
  //         {certificates.map((item, idx) => {
  //           const itemRef = useRef<HTMLDivElement>(null); // Typed itemRef
  //           const inView = useInView(itemRef);

  //           return (
  //               <Card image={item} key={idx} />
  //           );
  //         })}
  //       </motion.div>
  //   </ div>
  // );
}

export { Certificates };