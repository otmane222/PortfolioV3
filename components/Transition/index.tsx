

'use client';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // handle same route
    if (href === pathname) {
      return;
    }

    
    
    const body = document.querySelector("body");
    const page = document.getElementById("page");
    
    // if (!page) {
    //   return;
    // }

    router.push(href);
    window.scrollTo(0, 0)
    // page.classList.add("page-transition");
    // await sleep(500);
    
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className=''>
      {children}
    </Link>
  );
};

