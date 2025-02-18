'use client'


import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';  
import Image from 'next/image';
import { motion } from 'framer-motion';
import { init } from 'next/dist/compiled/webpack/webpack';
import gsap from 'gsap';
import useWindowSize from '../utils';
const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.25, 1, 0.5, 1]}}
}

export default function Modal({modal, projects} : {modal: any, projects: any}) {

    const {active, index} = modal;
    const modalRef = useRef(null);
    const cursorRef = useRef(null);
    const cursorLabelRef = useRef(null);

    
    let lastScrollY = 0;
    let lastScrollX = 0;
    let cursorY = 0;
    let cursorLabelY = 0;
    let containerY = 0;
    let cursorX = 0;
    let cursorLabelX = 0;
    let containerX = 0;
    
    const { width } = useWindowSize();
    useEffect(() => {

        
        let moveConatinerX = gsap.quickTo(modalRef.current, "left", {duration: 0.8, ease: "power3"})
        let moveConatinerY = gsap.quickTo(modalRef.current, "top", {duration: 0.8, ease: "power3"})
        
        let moveCursorX = gsap.quickTo(cursorRef.current, "left", {duration: 0.5, ease: "power3"})
        let moveCursorY = gsap.quickTo(cursorRef.current, "top", {duration: 0.5, ease: "power3"})
        
        let moveCursorLabelX = gsap.quickTo(cursorLabelRef.current, "left", {duration: 0.44, ease: "power3"})
        let moveCursorLabelY = gsap.quickTo(cursorLabelRef.current, "top", {duration: 0.44, ease: "power3"})
        

        window.addEventListener('mousemove', (e) => {
            const {pageX, pageY} = e;
            if (window.innerWidth - pageX <= 205 ) {
                moveConatinerY(pageY)
                moveCursorY(pageY)
                moveCursorLabelY(pageY)
                moveConatinerX(window.innerWidth - 220)
                moveCursorX(window.innerWidth - 220)
                moveCursorLabelX(window.innerWidth - 220)
                return;
            }
            moveConatinerY(pageY)
            moveCursorY(pageY)
            moveCursorLabelY(pageY)
            moveConatinerX(pageX)
            moveCursorX(pageX)
            moveCursorLabelX(pageX)

            containerY = pageY;
            cursorY = pageY;
            cursorLabelY = pageY;
            
        })


        window.addEventListener('scroll', function(e){


            const currentScrollY = window.scrollY;
            const currentScrollX = window.scrollX;

            const scrollDifferenceX = currentScrollX - lastScrollX;
            const scrollDifference = currentScrollY - lastScrollY;
            
            containerY += scrollDifference;
            cursorY += scrollDifference;
            cursorLabelY += scrollDifference;
            

            
            moveConatinerY(containerY)
            moveCursorY(cursorY)
            moveCursorLabelY(cursorLabelY)


            

            lastScrollY = currentScrollY;
        });

    }
    , [])

    return (
        <>
            <motion.div ref={modalRef} variants={scaleAnimation} initial={"initial"} animate={active ? "enter" : "closed"} className={`${styles.modalContainer}`}>
                <div  style={{top: index * -100 + "%"}} className={`${styles.modalSlider}`}>
                    {
                        projects.map((project: any, index: number) => {
                            const {src, color } = project;
                            return (
                                <div key={index} className={`${styles.modal}`}
                                
                                    style={{backgroundColor: color}}
                                    >
                                    <Image
                                        
                                        src={`/projects/${src}`}
                                        width={300}
                                        height={0}
                                        alt={src}
                                        />
                                </div>
                            )})
                    }
                </div>
            </motion.div>
            <motion.div variants={scaleAnimation} initial={"initial"}  animate={active ? "enter" : "closed"} ref={cursorRef} className={`${styles.cursor} flex justify-center items-center w-[80px] h-[80px] bg-[#1e57c2] absolute rounded-full pointer-events-none `} >
            </motion.div>
            <motion.div variants={scaleAnimation} initial={"initial"}  animate={active ? "enter" : "closed"} ref={cursorLabelRef} className={`${styles.cursorLabel} text-white flex justify-center items-center w-[80px] h-[80px] bg-transparent absolute rounded-full pointer-events-none`} >
                View
            </motion.div>

        </>
    );
}