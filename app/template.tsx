'use client'
import { motion } from 'framer-motion'
import { useContext, useState } from 'react'

import { ApearanceContext } from './context/Themecontext'

import { usePathname } from 'next/navigation'

// const variants = {
//   hidden: { opacity: 0, x: 0, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
// }

export default function Template({ children } : { children: React.ReactNode } ) {
  // window.scrollTo(0, 0)

  const { theme } = useContext(ApearanceContext) || {}
  
  const initialPath = `M0 300  Q${window.innerWidth / 2} 0 ${window.innerWidth} 300 L${window.innerWidth} 300 L0 ${window.innerHeight + 301 }  M${window.innerWidth} ${window.innerHeight + 301} L${window.innerWidth} 300 L0 ${window.innerHeight + 301}  Q${window.innerWidth / 2} ${window.innerHeight + 301 + 200} ${window.innerWidth} ${window.innerHeight + 301} `
  
  const middlePath = `M0 200  Q${window.innerWidth / 2} 200 ${window.innerWidth} 200 L${window.innerWidth} 200 L0 ${window.innerHeight + 301 }  M${window.innerWidth} ${window.innerHeight + 301} L${window.innerWidth} 200 L0 ${window.innerHeight + 301}  Q${window.innerWidth / 2} ${window.innerHeight + 301} ${window.innerWidth} ${window.innerHeight + 301} `

  const targetPath = `M0 300  Q${window.innerWidth / 2} 300 ${window.innerWidth} 300 L${window.innerWidth} 300 L0 ${window.innerHeight + 301 }  M${window.innerWidth} ${window.innerHeight + 301} L${window.innerWidth} 300 L0 ${window.innerHeight + 301}  Q${window.innerWidth / 2} ${window.innerHeight + 301 + 150} ${window.innerWidth} ${window.innerHeight + 301} `
  
  
  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: [initialPath, middlePath, middlePath, targetPath, middlePath],  // Hold at middlePath
        transition: {
          duration: 3,
          times: [0, 0.35, 0.6, 0.8, 1],  // Control timing: 40% to reach middle, hold for 20%, then continue
          ease: [
            [0.16, 1, 0.3, 1],    // First segment: initialPath -> middlePath
            "easeInOut",            // Second segment: hold at middlePath
            [0.61, 1, 0.88, 1],              // Third segment: middlePath -> targetPath
          ],
        }
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.8, ease: [0.16, 1, 0.3, 1]}
    }
  }
  const [zIndex, setZIndex] = useState('z-50');

  const pathname = usePathname()
  let path;
  if (pathname == '/') {
    path = 'home'
  }
  else {
    let split = pathname.split('/')
    path = split[split.length - 1]
  }

  return (
    <main className='w-full h-auto overflow-'>
      <motion.svg
        initial={{ y: "200vh" }}
        animate={{ y: ["200vh", "0vh", "0vh", "-102vh"] }}
        // exit={{ y: "200vh" }}
        transition={{ duration: 3, times: [0, 0.35, 0.7, 1], ease: [
          [0.16, 1, 0.3, 1],    // First segment: initialPath -> middlePath
          "easeInOut",            // Second segment: hold at middlePath
          [0.61, 1, 0.88, 1],              // Third segment: middlePath -> targetPath
        ] }}
        // viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        // xmlns="http://www.w3.org/2000/svg"
        onAnimationComplete={() => setZIndex('z-[-1]')}
        className={`fixed top-[-300px] ${zIndex}   w-full flex justify-center items-center text-white h-[1800px] fill-[#393939] stroke-0`} >
        <motion.path
          variants={curve}
          initial="initial"
          animate="enter"
          // exit="exit"
        />
        <motion.text
        initial={{ opacity: 0 }}
        animate={{ opacity: [0 , 1 , 1, 0] }}
        transition={{ duration: 3, times: [0.1, 0.35, 0.65, 0.85] }}
        
        z={100}
        x="50%"
        y="35%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="48"
        fontWeight="bold"
      >
        {path}
      </motion.text>
      </motion.svg>
      {children}
    </main>
  )
}
  // <motion.div 
  //   // initial={{y: 0}}
  //   // animate={{y: '100vh'}}
  //   // exit={{y: 0}}
  //   // transition={{duration: 1}}
  //   className={`fixed top-0 left-0 opacity-70 flex justify-center items-center w-full h-full text-white  z-50 opacity- ${theme === 'dark' ? "bg-[#ff0000]" : "bg-dark-bg"}  `}
  // >
  // </motion.div>