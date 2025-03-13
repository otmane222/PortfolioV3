

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
    const initialPath = `M0 0 L${width} 0 L0 200 M${width} 200 L${width} 0 L0 200 Q${width / 2} 2000 ${width} 200`
    const endPath = `M0 0 L${width} 0 L0 200 M${width} 200 L${width} 0 L0 200 Q${width / 2} 200 ${width} 200`

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    
    const curvo = useTransform(scrollYProgress, [0, 1], [initialPath, endPath]);

    // ${theme == 'dark' ? "fill-dark-bg" : "fill-light-bg"}
    return (
        <>
            <div  className={`relative z-10 b-emerald-200 h-[250px] md:flex hidden  w-full `}>
                <svg className={` absolute top-[0px] w-full h-[400px] ${theme == 'dark' ? "fill-dark-bg" : "fill-light-bg"} b-emerald-600 fil-red-300  `} xmlns="http://www.w3.org/2000/svg">
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