

'use client'

import { motion } from 'framer-motion'
import { useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ApearanceContext } from '@/app/context/Themecontext'
import { useContext } from 'react'

export default function Certificates() {

    const { theme } = useContext(ApearanceContext) || {}
    const initialPath = `M0 0 L${window.innerWidth} 0 L0 100 M${window.innerWidth} 100 L${window.innerWidth} 0 L0 100 Q${window.innerWidth / 2} 600 ${window.innerWidth} 100`
    const endPath = `M0 0 L${window.innerWidth} 0 L0 100 M${window.innerWidth} 100 L${window.innerWidth} 0 L0 100 Q${window.innerWidth / 2} 100 ${window.innerWidth} 100`

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    
    const curvo = useTransform(scrollYProgress, [0, 1], [initialPath, endPath]);


    return (
        <>
        <div ref={container} className={`b-[#d28989] h-[1000px] overflow-visible  w-full ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} `}>

            <div className='flex justify-center items-center h-[400px] b-fuchsia-400 w-full'>

            </div>
            {/* <div className='relative h-[400px] bg-emerald-200 w-full'>
                <svg className={` absolute bottom-[0] w-full z-50  h-[400px] ${theme == 'dark' ? "fill-dark-bg" : "fill-light-bg"} `} xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                    d={curvo}
                    />
                </svg>
            </div> */}
        </div>
        </>
    )
}
{/* <path d="" /> */}