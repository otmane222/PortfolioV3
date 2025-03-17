'use client'

import { useEffect, useRef } from 'react';
import styles from './style.module.css';  
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.25, 1, 0.5, 1]}}
}

interface ModalProps {
    modal: {
        active: boolean;
        index: number;
    };
    projects: {
        src: string;
        color: string;
    }[];
}

export default function Modal({modal, projects}: ModalProps) {
    const {active, index} = modal;
    const modalRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorLabelRef = useRef<HTMLDivElement>(null);

    let lastScrollY = 0;
    const lastScrollX = 0;
    let cursorY = 0;
    let cursorLabelY = 0;
    let containerY = 0;

    useEffect(() => {
        const moveContainerX = gsap.quickTo(modalRef.current, "left", {duration: 0.8, ease: "power3"});
        const moveContainerY = gsap.quickTo(modalRef.current, "top", {duration: 0.8, ease: "power3"});
        
        const moveCursorX = gsap.quickTo(cursorRef.current, "left", {duration: 0.5, ease: "power3"});
        const moveCursorY = gsap.quickTo(cursorRef.current, "top", {duration: 0.5, ease: "power3"});
        
        const moveCursorLabelX = gsap.quickTo(cursorLabelRef.current, "left", {duration: 0.44, ease: "power3"});
        const moveCursorLabelY = gsap.quickTo(cursorLabelRef.current, "top", {duration: 0.44, ease: "power3"});
        
        window.addEventListener('mousemove', (e) => {
            const {pageX, pageY} = e;
            if (window.innerWidth - pageX <= 205 ) {
                moveContainerY(pageY);
                moveCursorY(pageY);
                moveCursorLabelY(pageY);
                moveContainerX(window.innerWidth - 220);
                moveCursorX(window.innerWidth - 220);
                moveCursorLabelX(window.innerWidth - 220);
                containerY = pageY;
                cursorY = pageY;
                cursorLabelY = pageY;
                return;
            }
            if (pageX <= 205) {
                moveContainerY(pageY);
                moveCursorY(pageY);
                moveCursorLabelY(pageY);
                moveContainerX(200);
                moveCursorX(200);
                moveCursorLabelX(200);
                containerY = pageY;
                cursorY = pageY;
                cursorLabelY = pageY;
                return;
            }
            moveContainerY(pageY);
            moveCursorY(pageY);
            moveCursorLabelY(pageY);
            moveContainerX(pageX);
            moveCursorX(pageX);
            moveCursorLabelX(pageX);

            containerY = pageY;
            cursorY = pageY;
            cursorLabelY = pageY;
        });

        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            const scrollDifference = currentScrollY - lastScrollY;
            
            containerY += scrollDifference;
            cursorY += scrollDifference;
            cursorLabelY += scrollDifference;

            moveContainerY(containerY);
            moveCursorY(cursorY);
            moveCursorLabelY(cursorLabelY);

            lastScrollY = currentScrollY;
        });
    }, []);

    return (
        <>
            <motion.div ref={modalRef} variants={scaleAnimation} initial={"initial"} animate={active ? "enter" : "closed"} className={`${styles.modalContainer}`}>
                <div style={{top: index * -100 + "%"}} className={`${styles.modalSlider}`}>
                    {projects.map((project, index) => {
                        const {src, color} = project;
                        return (
                            <div key={index} className={`${styles.modal}`} style={{backgroundColor: color}}>
                                <Image src={`/projects/${src}`} width={300} height={0} alt={src} />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div variants={scaleAnimation} initial={"initial"} animate={active ? "enter" : "closed"} ref={cursorRef} className={`${styles.cursor} flex justify-center items-center w-[80px] h-[80px] bg-[#1e57c2] absolute rounded-full pointer-events-none`}>
            </motion.div>
            <motion.div variants={scaleAnimation} initial={"initial"} animate={active ? "enter" : "closed"} ref={cursorLabelRef} className={`${styles.cursorLabel} text-white flex justify-center items-center w-[80px] h-[80px] bg-transparent absolute rounded-full pointer-events-none`}>
                View
            </motion.div>
        </>
    );
}