"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname(); // Get current route
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  
  return (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
    style={{ willChange: "opacity, transform" }}
    id="page"
    onAnimationComplete={() => {
      // window.scrollTo(0, 0);
      console.log("Page transition complete");
    }}
    onAnimationStart={() => {
      console.log("Page transition started");
    }
    }
      className="pt-[80px] w-full h-[1000px] bg-slate-400"
    >
      About page
    </motion.div>
  );
}
