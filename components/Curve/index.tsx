

'use client'

import { motion } from 'framer-motion'
import { useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ApearanceContext } from '@/app/context/Themecontext'
import { useContext } from 'react'
import useWindowSize from '../utils'

export default function Curve() {
    const { width } = useWindowSize()

    const { theme } = useContext(ApearanceContext) || {}
    const initialPath = `M0 0 L${width} 0 L0 100 M${width} 100 L${width} 0 L0 100 Q${width / 2} 2000 ${width} 100`
    const endPath = `M0 0 L${width} 0 L0 100 M${width} 100 L${width} 0 L0 100 Q${width / 2} 100 ${width} 100`

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    
    const curvo = useTransform(scrollYProgress, [0, 1], [initialPath, endPath]);


    return (
        <>
            <div  className={`relative z-10 h-[100px] md:flex hidden b-emerald-300 w-full `}>
                <svg className={` absolute bottom-[0px] w-full   h-[201px] b-emerald-600 fil-red-300 ${theme == 'dark' ? "fill-dark-bg" : "fill-light-bg"} `} xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                    d={curvo}
                    transition={{
                        type: "spring",
                        stiffness: 50,  // Lower stiffness for smoother movement
                        damping: 20,     // Higher damping to reduce bounciness
                    }}
                    />
                </svg>
            </div>
        </>
    )
}
{/* <path d="" /> */}