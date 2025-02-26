'use client';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

interface TransitionProps {
  children: React.ReactNode;
}

function Transition({ children }: TransitionProps) {
  const [currentChildren, setCurrentChildren] = useState<React.ReactNode>(null);
  const transitionRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    gsap.to(transitionRef.current, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        setCurrentChildren(children);
        gsap.to(transitionRef.current, {
          duration: 0.5,
          opacity: 1,
        });
      },
    });
  }, [pathname]);

  return (
    <div>
        {currentChildren}
    </div>
  );
}

export  {Transition};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ApearanceContext } from '@/app/context/Themecontext';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const { theme } = useContext(ApearanceContext) || {};

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    if (!body) return;

    // Determine the background color based on the theme
    const backgroundColor = theme === "light" ? "#d7d7d7" : "#000";

    // Apply the transition styles dynamically
    body.style.backgroundColor = backgroundColor;
    body.style.opacity = "0";
    body.style.transform = "translateY(-40px)";
    body.style.filter = "blur(10px)";
    body.classList.add("page-transition");

    // Wait for the fade-out animation
    await sleep(500);

    // Navigate to the new route
    router.push(href);

    // Wait for the fade-in animation
    await sleep(500);

    // Reset the styles and remove the class
    body.style.backgroundColor = "";
    body.style.opacity = "";
    body.style.transform = "";
    body.style.filter = "";
    body.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};