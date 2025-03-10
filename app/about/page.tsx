'use client';


import { motion } from "framer-motion";


export default function About() {

    console.log('About page');
    return (
        <motion.div
        // exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

        id="page" className="pt-[80px] w-full h-[1000px] b-[#b16ec7] ">
            About page
        </motion.div>
    )
}