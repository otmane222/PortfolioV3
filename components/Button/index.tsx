import React from 'react';
import { motion } from 'framer-motion';


const ButtonLight = ({ link, text, classname }: { link:string, text: string, classname?: string }) => {
  return (
      <motion.a
      initial={{scale: 1}}
      whileHover={{scale: 1.4}}
      href={link} target="_blank" rel="noopener noreferrer"
        className={`${classname}  flex justify-center items-center`}
      >
        <button>
          {text  }
        </button>
      </motion.a>
  );
};

export default ButtonLight;
