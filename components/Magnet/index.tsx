"use client";

import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import motion from "framer-motion";

function Magnet ({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);

  // const xO = gsap.quickTo(ref.current, "x")

  useEffect(() => {
    const xT = gsap.quickTo(ref.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
    const yT = gsap.quickTo(ref.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})
    
    const mouseMove = (e: any) => {
      
      const { clientX, clientY } = e;
      const { top, left, width, height } = ref.current?.getBoundingClientRect() || { top: 0, left: 0, width: 0, height: 0 };
      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;
      xT(x * 0.5)
      yT(y * 0.5)
    }
    
    const mouseLeave = (e: any) => {
      xT(0)
      yT(0)
    }

    ref.current?.addEventListener('mousemove', mouseMove)
    ref.current?.addEventListener('mouseleave', mouseLeave)

    return () => {
      ref.current?.removeEventListener('mousemove', mouseMove)
      ref.current?.removeEventListener('mouseleave', mouseLeave)
    }

    
  }, []);

  return (
    <span className="b-emerald-300 w-fit" ref={ref}>
      {children}
    </span>
  );
};

export default Magnet;
