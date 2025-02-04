'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPiedPiperAlt } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinksRef = useRef<HTMLDivElement>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onToggleMenu = () => {
        if (navLinksRef.current) {
            navLinksRef.current.classList.toggle('top-[9%]');
        }
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        localStorage.setItem('theme', newTheme ? 'dark' : 'light');

        if (newTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <nav className="flex justify-between items-center w-[95%] mx-auto h-[80px] ">
            <div className='flex items-center'>
                {/* <img className="w-8 cursor-pointer" src="logo1.png" alt="Logo" /> */}
                <button
                    onClick={toggleTheme}
                    className={`relative w-[70px] h-[30px] bg-gray-200 dark:bg-gray-800 
                        rounded-full shadow-inner overflow-hidden transition-opacity duration-500 ease-in-out 
                        ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <div 
                            className={`absolute w-[30px] h-[30px]  top-[0%] left-[0%] dark:bg-gray-600 
                            rounded-full shadow-md transition-all duration-500 ease-in-out 
                            ${isDarkMode ? 'translate-x-[37px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Sun 
                                className={`absolute w-3 h-3 text-[#000] transition-all duration-500
                                ${isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
                                />
                                <Moon 
                                className={`absolute w-3 h-3 text-[#fff] transition-all duration-500
                                ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
                                />
                            </div>
                        </div>
                    </button>
            </div>
            <div
                ref={navLinksRef}
                className={`nav-links duration-500 md:static absolute   md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isMenuOpen ? 'top-[0] bg-[#fff]' : ''}`}
            >
                <ul className="flex md:flex-row flex-col md:items-center md-justify-start md:gap[4vw] gap-[35px] w-[90%]">
                    <li>
                        <a className="hover:text-gray-500 text-[18px]" href="#">Projects</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 text-[18px]" href="#">About</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 text-[18px]" href="#">Contact</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 text-[18px]" href="#">Skills</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 text-[18px]" href="#">Certifacates</a>
                    </li>
                </ul>
                    <div className="flex h-[325px] w-[5%] md:hidden">
                        <FontAwesomeIcon onClick={onToggleMenu} name="menu" className="text-3xl cursor-pointer md:hidden" icon={faTimes} style={{height: "46px"}}/>
                    </div>
            </div>
            <div className="flex items-center gap-6 md:hidden">
                <FontAwesomeIcon onClick={onToggleMenu} name="menu" className={`text-3xl cursor-pointer md:hidden ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} icon={faBars} style={{height: "40px"}}/>
            </div>
        </nav>
    );
}

function Navigation1 () {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isClose, setIsClose] = useState(true);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        localStorage.setItem('theme', newTheme ? 'dark' : 'light');

        if (newTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    function openSlideMenu(): void {
        console.log('open');
        setIsClose(false);
    }
    
    function closeSlideMenu(): void {
        console.log('close');
        setIsClose(true);
    }

    return (

        <header className='w-full flex justify-center bg-[#6ea6f0]'>
            <nav className="md:w-[95%] w-[90%]">
                <div className="flex w-full justify-center h-[80px]  items-center">
                    <div className='flex items-center'>
                        <h1 className='text-[20px] pl-[20px] pr-[20px] pb-[5px] pt-[5px] '>LOGO</h1>
                    </div>
                    <div className='flex justify-center w-full h-full'>
                        <div className='text-[20px] w-[340px]  items-center  justify-between md:flex hidden'>
                            <Link href="/project" legacyBehavior>
                            <a className="text-[#000] hover:border-black hover:border-b-2  pl-[20px] pr-[20px] pb-[5px] pt-[5px] flex justify-center items-center transition-all duration-500 ease-in-out ">Projects</a>
                            </Link>
                            <Link href="/about" legacyBehavior>
                            <a className="text-[#000] hover:border-black hover:border-b-2  pl-[20px] pr-[20px] pb-[5px] pt-[5px] flex justify-center items-center transition-all duration-500 ease-in-out ">About</a>
                            </Link>
                            <Link href="/skills" legacyBehavior>
                            <a className="text-[#000] hover:border-black hover:border-b-2  pl-[20px] pr-[20px] pb-[5px] pt-[5px] flex justify-center items-center transition-all duration-500 ease-in-out ">Contact</a>
                            </Link>
                        </div>
                        {
                            isClose === true ?
                            <button className='md:hidden block ml-4 hover:text-red-500 transition-all duration-500 ease-in-out' onClick={openSlideMenu}>
                                <FontAwesomeIcon icon={faBars} style={{height: "40px"}}/>
                            </button>
                            :
                            <div className='w-full h-[400px] flex flex-col z-40 md:hidden '>
                                <div className='w-full h-[100px] flex justify-center'>
                                    <button className='md:hidden block ml-4 hover:text-red-500 transition-all duration-500 ease-in-out' onClick={closeSlideMenu}>
                                        <FontAwesomeIcon icon={faTimes} style={{height: "40px"}}/>
                                    </button>

                                </div>
                                <div className='w-full h-[250px] backdrop-blur-lg bg-[#E57979]'>
                                    <div className='text-[20px] w-full h-full  justify-around flex flex-col items-center'>
                                        <Link href="/project" legacyBehavior>
                                        <a className="text-[#000] hover:bg-[#f29e9e] w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out ">Projects</a>
                                        </Link>
                                        <Link href="/about" legacyBehavior>
                                        <a className="text-[#000] hover:bg-[#f29e9e] w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out  ">About</a>
                                        </Link>
                                        <Link href="/skills" legacyBehavior>
                                        <a className="text-[#000] hover:bg-[#f29e9e] w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out ">Contact</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={toggleTheme}
                            className="relative w-[70px] h-[30px] bg-gray-200 dark:bg-gray-800 
                            rounded-full shadow-inner overflow-hidden"
                        >
                            <div 
                                className={`absolute w-[30px] h-[30px]  top-[0%] left-[0%] dark:bg-gray-600 
                                rounded-full shadow-md transition-all duration-500 ease-in-out 
                                ${isDarkMode ? 'translate-x-[37px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Sun 
                                    className={`absolute w-3 h-3 text-[#000] transition-all duration-500
                                    ${isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
                                    />
                                    <Moon 
                                    className={`absolute w-3 h-3 text-[#fff] transition-all duration-500
                                    ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
                                    />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export { Navigation };