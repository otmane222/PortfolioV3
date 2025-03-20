"use client";

import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
// import motion from "framer-motion";

function Magnet ({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current; // Store the ref in a variable
    
    if (element) {
      const xT = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const yT = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
      
      const mouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { top, left, width, height } = element.getBoundingClientRect() || { top: 0, left: 0, width: 0, height: 0 };
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;
        xT(x * 0.5);
        yT(y * 0.5);
      };

      const mouseLeave = () => {
        xT(0);
        yT(0);
      };

      // Add event listeners
      element.addEventListener('mousemove', mouseMove);
      element.addEventListener('mouseleave', mouseLeave);

      // Cleanup function: Remove event listeners
      return () => {
        element.removeEventListener('mousemove', mouseMove);
        element.removeEventListener('mouseleave', mouseLeave);
      };
    }
  }, []);

  return (
    <span className="b-emerald-300 w-fit" ref={ref}>
      {children}
    </span>
  );
};

export default Magnet;
