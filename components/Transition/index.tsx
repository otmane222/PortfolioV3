

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
    
    if (!page) {
      return;
    }
    // if (pathname === "/") {
    //   // animatePageIn();
    // }
    // else if (pathname === "/about") {
    //   // animatePageIn();
    // }
    // else if (pathname === "/contact") {
    //   // animatePageIn();
    // }
    page.classList.add("page-transition");
    await sleep(500);
    router.push(href);
    
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className=''>
      {children}
    </Link>
  );
};

