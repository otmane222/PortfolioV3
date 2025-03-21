'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

// import { ApearanceContext } from './context/Themecontext'

// import { usePathname } from 'next/navigation'

// const variants = {
//   hidden: { opacity: 0, x: 0, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
// }
// import PageWrapper from "@/components/wrapper/PageWrapper";
// import useWindowSize from '@/components/utils'
import { useEffect } from 'react'

export default function Template({ children } : { children: React.ReactNode } ) {
  // window.scrollTo(0, 0)

  // const { theme } = useContext(ApearanceContext) || {}
  const [width, setWindowSize] = useState<number>(10000);
    const [height, setWindowHeight] = useState<number>(10000);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };
  
      // Set initial window size
      handleResize();
      
  
      // Listen to resize events
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  const initialPath = `M0 300  Q${width / 2} 0 ${width} 300 L${width} 300 L0 ${height + 301 }  M${width} ${height + 301} L${width} 300 L0 ${height + 301}  Q${width / 2} ${height + 301 + 200} ${width} ${height + 301} `
  
  const middlePath = `M0 200  Q${width / 2} 200 ${width} 200 L${width} 200 L0 ${height + 301 }  M${width} ${height + 301} L${width} 200 L0 ${height + 301}  Q${width / 2} ${height + 301} ${width} ${height + 301} `

  const targetPath = `M0 300  Q${width / 2} 300 ${width} 300 L${width} 300 L0 ${height + 301 }  M${width} ${height + 301} L${width} 300 L0 ${height + 301}  Q${width / 2} ${height + 301 + 150} ${width} ${height + 301} `
  
  
  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: [targetPath, middlePath],  // Hold at middlePath
        transition: {
          duration: 1.5,
        ease: [0.61, 1, 0.88, 1],
        }
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.8, ease: [0.16, 1, 0.3, 1]}
    }
  }
  const [zIndex, setZIndex] = useState('z-[100]');

  // const pathname = usePathname()
  // let path;
  // if (pathname == '/') {
  //   path = 'home'
  // }
  // else {
  //   const split = pathname.split('/')
  //   path = split[split.length - 1]
  // }

  // if (width === -1 || height === -1) {
  //   return <div className={` h-screen bg-[#393939]`}></div>;
  // }

  return (
      <>
        <main className='w-full h-auto overflow-'>
          <motion.svg
            initial={{ y: "0vh" }}
            animate={{ y: ["0vh", "-112vh"] }}
            // exit={{ y: "200vh" }}
            transition={{ duration: 1.5, ease: [0.61, 1, 0.88, 1]}}
            // viewBox={`0 0 ${width} ${height}`}
            // xmlns="http://www.w3.org/2000/svg"
            onAnimationComplete={() => setZIndex('z-[-1]')}
            className={`fixed top-[-300px] ${zIndex}   w-full flex justify-center items-center text-white h-[10000px] fill-[#393939] stroke-0`} >
            <motion.path
              variants={curve}
              initial="initial"
              animate="enter"
              // exit="exit"
            />
            {/* <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .2}}
            
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
          </motion.text> */}
          </motion.svg>
          <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: [0 , 0 , 0.5 ,1], y: 0 }}
              // exit={{ opacity: 0 }}
              transition={{ duration: 1.7, ease: [0, 0.35, 0.7, 1]}}
              className='w-full h-auto'
            >
            {children}
          </motion.div>
        </main>
      </>
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