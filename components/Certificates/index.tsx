

'use client';
import React, { useEffect } from 'react';
import Image from 'next/image.js';



import { animate, motion, useMotionValue, useInView } from "framer-motion";
import { useState, useRef } from "react";
import useMeasure from "react-use-measure";

interface CardProps {
  image: string[];
}

const Card2: React.FC<CardProps> = ({ image }) => {
  

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


import { LightText } from '../LightText';

function Certificates() {

  const certificates = [
    ["javascript.png", "https://www.coursera.org/account/accomplishments/certificate/3CODBSQ6YBVL"],
    ["postgresql.png", "https://www.coursera.org/account/accomplishments/certificate/ZQ6FB9KLPJ91"],
    ["django.png", "https://www.coursera.org/account/accomplishments/certificate/8SMD49CIL4B2"],
  ];
  // const { width: widthh } = useWindowSize();
  const FAST_DURATION = 50;
  // const SLOW_DURATION = widthh < 1024 ? 70 : 80;

  const duration = FAST_DURATION;
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);


  

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

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
  }, [rerender, xTranslation, duration, width, mustFinish]);
  
  // if (widthh ) {
    // const refs = useRef<(HTMLDivElement | null)[]>([]);
    // const inViews = useRef<(ReturnType<typeof useInView>)[]>([]);
    // const items = certificates.map((_, idx) => {
    //   refs.current[idx] = refs.current[idx] || null;
    //   inViews.current[idx] = inViews.current[idx] || useInView(refs.current[idx]);
    //   return (
    //     <motion.div
    //       key={idx}
    //       ref={(el) => (refs.current[idx] = el)}
    //       initial={{ x: -100, opacity: 0.5 }}
    //       animate={inViews.current[idx].inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0.4 }}
    //       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    //     >
    //       <Card2 image={certificates[idx]} />
    //     </motion.div>
    //   );
    // });
    const itemRef = useRef<HTMLDivElement>(null);
    const itemRef2 = useRef<HTMLDivElement>(null);
    const itemRef3 = useRef<HTMLDivElement>(null);

    const inView = useInView(itemRef);
    const inView2 = useInView(itemRef2);
    const inView3 = useInView(itemRef3);

    const refs = [itemRef, itemRef2, itemRef3];
    const inViews = [inView, inView2, inView3];

    return (
      <div ref={ref} className=' flex flex-col pt-[100px] w-full h-auto'>
        <div className='text-center w-full h-[100px] justify-center b-red-300' >

          <h1 className='text-4xl ' >
            <LightText text='Certificates' />
            {/* Certificates */}
          </h1>
          <span className='text-sm text-gray-500 block'>
            (click to see credentials)
          </span>
        </div>
        <div className='w-full h-full flex flex-col items-center gap-4' >
          {certificates.map((item, idx) => {
            
            

            return (
              <motion.div
                className='w-full h-auto b-emerald-400 flex flex-col items-center '
                key={idx}
                ref={refs[idx]}
                initial={{ x: -100, opacity: 0.5 }}
                animate={inViews[idx] ? { x: 0, opacity: 1 } : { x: -100, opacity: 0.4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card2 image={item} />
              </motion.div>
            );
          })}

        </div>
        <div className='w-full h-auto flex justify-center items-center'>
          <a className=' w-fit border-b-[2px] border-[#000] dark:border-[#fff] text-2xl pt-[80px] md:pb-[0] mb-[50px]' href='https://www.linkedin.com/in/otmane-aboulghit-46493a1b4/details/certifications/' target='_blank' rel='noreferrer'>
            See More on Linkedin
          </a>
        </div>
      </div>
    )
  
  
  }

export { Certificates };

