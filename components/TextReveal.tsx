"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ApearanceContext } from "@/app/context/Themecontext";

export default function TextReveal ({value}: {value: string}) {

    const { theme } = useContext(ApearanceContext) || {};

    const element = useRef<HTMLParagraphElement>(null);
    const [offset, setOffset] = useState<(string | number)[]>(['start 0.9', 'start -0.5']);
  
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 500px)');
        
        const handleResize = () => {
        if (mediaQuery.matches) {
            setOffset(['start 0.9', 'start 0']);
        } else {
            setOffset(['start 0.9', 'start -0.5']);
        }
        };

        handleResize(); // Check on mount

        mediaQuery.addListener(handleResize); // Listen for changes

        return () => {
        mediaQuery.removeListener(handleResize); // Cleanup on unmount
        };
    }, []);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: offset as [number, number],
    })

    const words = value.split(" ");

    // useEffect(() => {
    //     scrollYProgress.on("change", e => console.log(e))
    // }, [scrollYProgress])

    return (
        <p 
            ref={element}
            className={`flex flex-wrap justify-center ${ theme == 'dark' ? "text-white" : "text-black" } `}
        >
            {
                words.map((word, index) => {
                    const start = index / words.length;
                    const end = start + (1 / words.length);
                    // console.log(start, end)
                    return (
                        <Word key={index} range={[start, end]} progress={scrollYProgress}>
                            {word}
                        </Word>
                    )
                })
            }
        </p>
    )
}

const Word = ({children, range, progress}: {children: string, range: number[],progress:MotionValue<number>},) => {
    return (
        <span className="pl-1 pr-1">
            {
                children.split("").map((char, index) => {
                    const start = index / children.length;
                    const end = start + (1 / children.length);
                    const rangee = [range[0] + start * (range[1] - range[0]), range[0] + end * (range[1] - range[0])];
                    return (
                        <Charachter key={index} range={rangee} progress={progress}>
                            {char}
                        </Charachter>
                    )
                })
            }
        </span>
    )
}

const Charachter = ({children, range, progress}: {children: string, range: number[],progress:MotionValue<number>},) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative ">
            <span className=" absolute opacity-[0.3] " >{children}</span>
            <motion.span
                style={{opacity: opacity}}
                >
                {children}
            </motion.span>
        </span>
    )
}