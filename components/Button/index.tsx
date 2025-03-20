'use client';
import React from 'react';
import { motion } from 'framer-motion';


const ButtonLight = ({ link, text, classname }: { link:string, text: string, classname?: string }) => {
  return (
    <motion.span
      initial={{scale: 1}}
      whileHover={{scale: 1.4}}
      className={`${classname}  flex justify-center text-white items-center`}
      >
      <a
        className='w-full h-full cursor-pointer flex justify-center items-center'
        href={link} target="_blank" rel="noopener noreferre"
      >
        {text  }
      </a>
    </motion.span>
  );
};

export default ButtonLight;
