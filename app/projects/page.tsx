
'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Project from "@/components/projects/Project";
import { ScrollCards } from "@/components/projects/Project";
import Modal from "@/components/modal.tsx/Modal";

// import { RevealBento } from "@/components/Footer";
// import { Navigation } from "@/components/Navigation";

import { useEffect } from "react";
// import { ApearanceContext } from "@/app/context/Themecontext";

import { CardType } from "@/types/indexTypes";


import Footer from "@/components/Footer";
import Curve from "@/components/Curve";

import useWindowSize from "@/components/utils";


export default function Prjects() {


    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // } , [])
    const [modal, setModal] = useState({ active: false, index: 0 });
    const projects : CardType[] = [
        {
            title: "minishell",
            src: "minishell.webp",
            color: "#5a803b",
            field: "Unix",
            description: "A lightweight Unix shell written in C and limited pre-defined functions",
            id: 0,
        },
        {
            title: "ft_transcendence",
            src: "ft_transcendence.png",
            color: "#8C8C8C",
            field: "Web",
            description: "ft_transcendence is an innovative web application designed to enhance social interaction through real-time",
            id: 1,
        },
        {
            title: "inception",
            src: "inception.png",
            color: "#66aec0",
            field: "DevOps",
            description: "Inception is a project focused on setting up a virtualized infrastructure using Docker and container orchestration.",
            id: 2,
        },
        {
            description: "It's a simple portfolio I made using pure html and css",
            title: "old-portfolio",
            src: "old-portfolio.png",
            color: "#706D63",
            field: "Web",
            id: 3,
        }
    ]

    
    // const { theme } = useContext(ApearanceContext) || {}
    
    const [widthh, setIsMobile] = useState<number>(-1);
    
    const { width } = useWindowSize();
    useEffect(() => {
        // Ensure window is available
        const checkScreenSize = () => {
        setIsMobile(window.innerWidth);
        };

        checkScreenSize(); // Run once on mount
        window.addEventListener('resize', checkScreenSize);

        return () => {
        window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    
    if (widthh === -1) {
        return <div className={` h-screen `}></div>;
    }
    
    // const initialPath = `M0 300  Q${width / 2} 0 ${width} 300 L${width} 300 L0 ${height + 301 }  M${width} ${height + 301} L${width} 300 L0 ${height + 301}  Q${width / 2} ${height + 301 + 200} ${width} ${height + 301} `
    
    // const middlePath = `M0 200  Q${width / 2} 200 ${width} 200 L${width} 200 L0 ${height + 301 }  M${width} ${height + 301} L${width} 200 L0 ${height + 301}  Q${width / 2} ${height + 301} ${width} ${height + 301} `
        
    // const curve = {
    //     initial: {
    //         d: initialPath
    //     },
    //     enter: {},
    //     exit: {
    //         d: [initialPath, middlePath],
    //         transition: {
    //         duration: 1.4,
    //         ease: [0.16, 1, 0.3, 1],
    //         }
    //     }
    // }
    if (width < 768) {
        return (
            <>
                <div className={`w-full h-auto relative dark:bg-dark-bg bg-light-bg z-10 flex justify-center `}  >
                    <motion.div
                        // initial={{ opacity:0 }}
                        // animate={{ opacity: 1 }}
                        // transition={{ duration: 3.9, ease: [0, 0.35, 0.7, 1] }}
                        id="page" className="w-full h-auto   mt-[100px]  b-slate-500"
                    >
                        <div className={`w-full h-auto flex flex-col  pb-[200px] pt-[100px]`}>
                            <div className="w-[100%]   b-slate-300 flex flex-col items-center">
                                
                                <h1 className="text-5xl p-[20px]">
                                    All Projects
                                </h1>

                            </div>
                            <div className="w-[100%] bg-[#] font-[tommy2] text-white self-center h-auto  b-[#daf2dc]">
                                <ScrollCards projects={projects} /> 
                            </div>
                        </div>
                        <div className={`w-[100%] h-[300px] relative z-10 dark:bg-dark-bg bg-light-bg`}>
                            <h1 className="text-4xl md:text-6xl font-[tommy2] text-center" >
                                More Projects are coming soon
                            </h1>
                        </div>
                        </motion.div>

                    </div>
                    <Footer />
                {/* <motion.svg
                initial={{ y: "200vh" }}
                exit={{ y: ["100vh", "0vh"]  }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-[-300px] z-50   w-full flex justify-center items-center text-white h-[1800px] fill-[#393939] stroke-0`} >
                    <motion.path
                        variants={curve}
                        initial="initial"
                        exit="exit"
                    />
                </motion.svg> */}
            </>
        );
    }
    return (
        <>
        <div className={`w-full h-auto dark:bg-dark-bg bg-light-bg z-10 relative  flex justify-center `}  >
        <motion.div
            // initial={{ opacity:0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 3.9, ease: [0, 0.35, 0.7, 1] }}
            id="page" className="w-full h-auto   mt-[100px]  b-slate-500"
        >
            <div className={`w-full h-auto flex flex-col  z-10 pb-[200px] pt-[100px]`}>
                <div className="w-[100%]   b-slate-300 flex flex-col items-center">
                    
                    <h1 className="text-5xl font-[tommy2] p-[20px]">
                        All Projects
                    </h1>

                </div>
                <div className="w-[80%] self-center h-auto  b-[#daf2dc]">
                    <div className="flex flex-col items-center justify-center ">
                        {
                            projects.map((project, index) => {
                                return (
                                    <Project key={index} index={index} title={project.title} field={project.field} setModal={setModal} num={8} />
                                )
                            })
                        }
                        
                    <Modal modal={modal} projects={projects} />
                    </div>
                </div>
            </div>
            <div className={`w-full h-[200px] relative z-10 dark:bg-dark-bg bg-light-bg`}>
                <h1 className="text-6xl font-[tommy2] text-center" >
                    More Projects are coming soon
                </h1>
            </div>
            </motion.div>
            {/* <motion.svg
            initial={{ y: "200vh" }}
            exit={{ y: ["100vh", "0vh"]  }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-[-300px] z-50   w-full flex justify-center items-center text-white h-[1800px] fill-[#393939] stroke-0`} >
                <motion.path
                    variants={curve}
                    initial="initial"
                    exit="exit"
                    />
            </motion.svg> */}
        </div>
        <Curve />
        <Footer />
        </>
    )
}