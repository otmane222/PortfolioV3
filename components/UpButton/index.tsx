import { motion } from "framer-motion";
import React from "react";

export default function UpButton({ text }: { text: string }) {

    return (
        <div className="relative h-auto w-auto overflow-hidden cursor-pointer">
            {/* Invisible div to define width */}
            <div className="w-auto h-auto opacity-0 z-10 p-">
                {text}
            </div>

            {/* Motion div to animate movement on hover */}
            <motion.div
                className="absolute top-0 flex flex-col"
                initial={{ y: 0 , rotate: 0 }}
                whileHover={{ y: "-50%", rotate: 3 }}
                transition={{ duration: 0.3, ease: [0.5, 1, 0.89, 1] }}
            >
                <p className="b-red-500 p-">{text}</p>
                <p className="b-green-600 p-">{text}</p>
            </motion.div>
        </div>
    );
}
