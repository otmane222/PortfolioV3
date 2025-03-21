'use client'

import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import { ApearanceContext } from '@/app/context/Themecontext';
import { Moon, Sun } from 'lucide-react';
import useWindowSize from '../utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDiagramProject, faAddressBook, faUser } from '@fortawesome/free-solid-svg-icons';

import { motion, useScroll, useTransform } from 'framer-motion';

import Magnet from '../Magnet';
import UpButton from '../UpButton';
import { useTheme } from 'next-themes';

function Mode() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    // Ensure component is mounted before rendering UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className='flex items-center justify-center b-cyan-300 '>
            <div
                onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                className={`absolute cursor-pointer mr-[40px] w-[22px] h-[22px] z-10 position-x-2 b-gray-600 
                rounded-full shadow-md transition-all duration-500 ease-in-out
                
                ${theme == 'dark' ? 'translate-x-[35px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
            >
                <div className="w-[22px] h-[22px] flex items-center justify-center">
                    <Sun
                        className={`absolute w-[20px] h-[20px] text-[#000] transition-all duration-500
                        ${theme == 'dark' ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                    />
                    <Moon
                        className={`absolute w-[20px] h-[20px] text-[#fff] transition-all duration-500
                        ${theme == 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
                    />
                </div>
            </div>
            <button
                onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                className={`w-[40px] h-[6px] z-0 bg-gray-200 
                    rounded-full shadow-inner overflow-hidden transition-opacity duration-500 ease-in-out 
                     pointer-events-none `}
            >
            </button>
        </div>
    );
}

function Links() {
    return (
        <ul className="flex text-[14px] flex-row items-center justify-start gap[5px]">
            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <Link scroll={false} href="/">
                    <UpButton text='Home' />
                </Link>
            </li>
            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <Link scroll={false} href="/about">
                    <UpButton text='About' />
                </Link>
            </li>
            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <Link scroll={false} href="/projects">
                    <UpButton text='Projects' />
                </Link>
            </li>
            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <a href='#contact' onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: document.body.scrollHeight - 750, behavior: "smooth" });
                }}>
                    <UpButton text='Contact' />
                </a>
            </li>
        </ul>
    );
}

function Logo() {
    return (
        <Magnet>
            <div className='flex items-center justify-center h-full b-emerald-300'>
                <h1 className='text-[20px] cursor-pointer'>OA</h1>
            </div>
        </Magnet>
    );
}

function NavigationMobile() {

    return (
        <div
            className={`w-full h-[80px] bottom-0 z-50 rounded-t-3xl border-t-[1px] font-[tommy]
            dark:backdrop-blur dark:bg-[#161616]/60 dark:border-[#badbc270] backdrop-blur bg-[#badbc2]/40 border-[#16161698]
            fixed flex justify-around items-center`}
        >
            <div className=''>
                <Link className='flex flex-col justify-center items-center' scroll={false} href="/">
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                </Link>
            </div>
            <div>
                <Link className='flex flex-col justify-center items-center' scroll={false} href="/about">
                <FontAwesomeIcon icon={faUser} />
                    About
                </Link>
            </div>
            <div>
                <Link className='flex flex-col justify-center items-center' scroll={false} href="/projects">
                <FontAwesomeIcon icon={faDiagramProject} />
                    Projects
                </Link>
            </div>
            <div>
                <Link className='flex flex-col justify-center items-center' scroll={false} href="/contact">
                <FontAwesomeIcon icon={faAddressBook} />
                    Contact
                </Link>
            </div>
        </div>
    );
}

import { useEffect } from 'react';
// import { useTheme } from 'next-themes';

function Navigation() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const navLinksRef = useRef<HTMLDivElement>(null);
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();
    
    useEffect(() => {
        setMounted(true);
    }, []);
    // Ensure component is mounted before rendering UI
    // const { theme, themeHandler } = useContext(ApearanceContext) || {}
    
    const [isMobile, setIsMobile] = useState<number>(-1);
    
    useEffect(() => {
        // Ensure window is available
        const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 708 ? 1 : 0);
        };

        checkScreenSize(); // Run once on mount
        window.addEventListener('resize', checkScreenSize);

        return () => {
        window.removeEventListener('resize', checkScreenSize);
        };
    }, []);


    // function ThemeHandler() {
    //     themeHandler!(theme == 'light' ? 'dark' : 'light')
    //     setIsDarkMode(!isDarkMode);
    // }

    // const onToggleMenu = () => {
    //     if (navLinksRef.current) {
    //         navLinksRef.current.classList.toggle('top-[9%]');
    //     }
    //     setIsMenuOpen(!isMenuOpen);
    // };

    const { scrollY } = useScroll();
    const { width } = useWindowSize();
    const navWidth = useTransform(scrollY, [0, 200], ['95%', '100%']);
    const navMaxWidth = useTransform(scrollY, [0, 200], ['1400px', '630px']);
    const navBlur = useTransform(scrollY, [0, 200], ['blur(0px)', 'blur(10px)']);
    // const hideNav = useTransform(scrollY, [0, 200], ['0', '1']);
    const navShadow = useTransform(scrollY, [150, 200], ['0px 0px 0px 0px', '0px 0px 2px 0px']);

    if (isMobile == 1) {
        navWidth.set('100%');
        navMaxWidth.set('1400px');
        navBlur.set('blur(0px)');
        navShadow.set('0px 0px 0px 0px');
    }
    if (!mounted) return null;

    return (
        <>
            <motion.nav
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                exit={{ y: -200 }}
                className={`fixed flex justify-center items-center z-50 b-sky-200 h-[80px]`}
                style={{
                    width: width > 705 ? navWidth : '100%',
                    maxWidth: width > 705 ? navMaxWidth : '1400px',
                }}
            >
                <motion.div
                    className={`flex font-[tommy] w-full justify-between rounded-[30px] pl-[30px] pr-[30px]
                    backdrop-blur items-center mx-auto h-[45px]
                    ${theme == 'dark' ? "bg-dark-bg/60 border-light-bg" : "bg-light-bg/40 border-dark-bg"}`}
                    style={{
                        backdropFilter: width > 705 ? navBlur : 'blur(0px)',
                        WebkitBackdropFilter: width > 705 ? navBlur : 'blur(0px)',
                        boxShadow: width > 705 ? navShadow : '0px 0px 0px 0px',
                    }}
                >
                    <Logo />
                    {isMobile == 0  && <Links />}
                    <Mode />
                </motion.div>
            </motion.nav>
            {isMobile == 1 && <NavigationMobile />}
        </>
    );
}

export { Navigation };
