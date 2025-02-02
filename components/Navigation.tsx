'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPiedPiperAlt } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navigation () {
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
                            <a className="text-[#000] hover:bg-[#f29e9e] pl-[20px] pr-[20px] pb-[5px] pt-[5px] rounded-[20px] flex justify-center items-center transition-all duration-500 ease-in-out ">Projects</a>
                            </Link>
                            <Link href="/about" legacyBehavior>
                            <a className="text-[#000] hover:bg-[#f29e9e] pl-[20px] pr-[20px] pb-[5px] pt-[5px] rounded-[20px] flex justify-center items-center transition-all duration-500 ease-in-out ">About</a>
                            </Link>
                            <Link href="/skills" legacyBehavior>
                            <a className="text-[#000] hover:bg-[#f29e9e] pl-[20px] pr-[20px] pb-[5px] pt-[5px] rounded-[20px] flex justify-center items-center transition-all duration-500 ease-in-out ">Contact</a>
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
                    <div className=''>
                        <button
                            onClick={toggleTheme}
                            className="relative w-[80px] h-[35px] bg-gray-200 dark:bg-gray-800 
                            rounded-full shadow-inner overflow-hidden"
                        >
                            <div 
                                className={`absolute w-[35px] h-[35px]  top-[0%] left-[0%] dark:bg-gray-600 
                                rounded-full shadow-md transition-all duration-500 ease-in-out 
                                ${isDarkMode ? 'translate-x-[43px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Sun 
                                    className={`absolute w-4 h-4 text-[#000] transition-all duration-500
                                    ${isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
                                    />
                                    <Moon 
                                    className={`absolute w-4 h-4 text-[#fff] transition-all duration-500
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