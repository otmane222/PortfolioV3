'use client';


import { motion } from "framer-motion";


export default function Contact() {

    console.log('Contact page');
    return (
        <motion.div
        // exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

        id="page" className="pt-[80px] w-full h-[1000px] b-[#b16ec7] ">
            Contact page
        </motion.div>
    )
}