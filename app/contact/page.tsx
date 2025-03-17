'use client';


import { motion } from "framer-motion";
// import { Navigation } from "@/components/Navigation";
import { useContext } from "react";
import { ApearanceContext } from "@/app/context/Themecontext";
// import useWindowSize from "@/components/utils";

export default function Contact() {

    const { theme } = useContext(ApearanceContext) || {}
    // console.log('Contact page');

    // const { width, height} = useWindowSize();

        
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
    return (
        <div className={`w-full relative flex justify-center ${theme == 'dark' ? "bg-dark-bg text-[#fff4f4]" : "bg-light-bg text-[#000000] "}`} >
        <motion.div
        // exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        
        id="page" className="pt-[80px] w-full h-[1000px] b-[#b16ec7] ">
            Contact page
        </motion.div>
        {/* <motion.svg
            initial={{ y: "200vh" }}
            exit={{ y: ["100vh", "0vh"]  }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-[-300px] z-50   w-full flex justify-center items-center text-white h-[1800px] fill-[#393939] stroke-0`}
        >
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            />
        </motion.svg> */}
        </div>
    )
}