

'use client'

import { motion } from 'framer-motion'
import { useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ApearanceContext } from '@/app/context/Themecontext'
import { useContext } from 'react'

export default function Curve() {

    const { theme } = useContext(ApearanceContext) || {}
    const initialPath = `M0 0 L${window.innerWidth} 0 L0 100 M${window.innerWidth} 100 L${window.innerWidth} 0 L0 100 Q${window.innerWidth / 2} 1000 ${window.innerWidth} 100`
    const endPath = `M0 0 L${window.innerWidth} 0 L0 100 M${window.innerWidth} 100 L${window.innerWidth} 0 L0 100 Q${window.innerWidth / 2} 100 ${window.innerWidth} 100`

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    
    const curvo = useTransform(scrollYProgress, [0, 1], [initialPath, endPath]);


    return (
        <>
            <div className={`relative z-40 h-[200px] w-full ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} `}>
                <svg className={` absolute bottom-[-300px] w-full   h-[400px] fil-red-300 ${theme == 'dark' ? "fill-dark-bg" : "fill-light-bg"} `} xmlns="http://www.w3.org/2000/svg">
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