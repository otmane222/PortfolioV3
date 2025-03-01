import React from 'react';
import { motion } from 'framer-motion';


const ButtonLight = ({ link, children, classname }: { link:string, children?: React.ReactNode, classname?: string }) => {
  return (
    <motion.div 
      initial={{scale: 1}}
      whileHover={{scale: 1.4 }}
      
      className={`${classname}  flex justify-center items-center`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer"
        
      >
        <button>
          {children || 'Go'}
        </button>
      </a>
    </motion.div>
  );
};

export default ButtonLight;
