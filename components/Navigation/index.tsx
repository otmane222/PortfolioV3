'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useContext } from 'react';
import { ApearanceContext } from '@/app/context/Themecontext';
import { Moon, Sun } from 'lucide-react';
import useWindowSize from '../utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPiedPiperAlt } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

import { motion, useScroll, useTransform } from 'framer-motion';


function Mode ( {ThemeHandler, isDarkMode, isMenuOpen } : {ThemeHandler: () => void, isDarkMode: boolean, isMenuOpen: boolean } ) {
    return (
        <div className='flex items-center justify-center b-cyan-300 '>
            <div 
                onClick={ThemeHandler}
                className={`absolute cursor-pointer mr-[40px] w-[22px] h-[22px] z-10  position-x-2 dark:bg-gray-600 
                rounded-full shadow-md transition-all duration-500 ease-in-out 
                ${isDarkMode ? 'translate-x-[35px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
                >
                <div className=" w-[22px] h-[22px] flex items-center  justify-center ">
                    <Sun
                    className={`absolute w-[20px] h-[20px]  text-[#000] transition-all duration-500
                    ${isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
                    />
                    <Moon 
                    className={`absolute w-[20px] h-[20px] text-[#fff] transition-all duration-500
                    ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
                    />
                </div>
            </div>
            <button
                onClick={ThemeHandler}
                className={`w-[40px] h-[6px] z-0 bg-gray-200 dark:bg-gray-800 
                    rounded-full shadow-inner overflow-hidden transition-opacity duration-500 ease-in-out 
                    ${isMenuOpen ? 'md:opacity-100 opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
            </button>    
        </div>
    );
}

function Links () {
    return (
        <ul className="flex text-[14px]   flex-row  items-center justify-start gap[5px] ">
            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <a className="relative gap-2 flex items-center" href="#">
                    Home
                </a>
            </li>


            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <a className="relative gap-2 flex items-center" href="#">
                    About
                </a>
            </li>

            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <a className="relative gap-2 flex items-center" href="#">
                    Projects
                </a>
            </li>
            
            <li className='flex w-[100%] items-center p-[5px] pl-[10px] pr-[10px] m-1'>
                <a className="relative gap-2 flex items-center" href="#">
                    Contact
                </a>
            </li>
            
        </ul>
    );
}

function Logo() {
    return (
        <div className='flex items-center justify-center  h-full b-emerald-300'>
            <h1 className='text-[20px]  ' >OA</h1>
        </div>
    );
}

function NavigationMobile() {

    const { theme } = useContext(ApearanceContext) || {}
    
    return (
        <div
                className={`w-full h-[100px]
                            bottom-0 z-50 rounded-t-3xl
                            border-t-[1px]
                            font-[tommy]
                            ${theme == 'dark' 
                            ? "backdrop-blur bg-[#161616]/60 border-[#badbc270]" 
                            : "backdrop-blur bg-[#badbc2]/40 border-[#16161698]"}                      
                            fixed flex justify-around items-center `}
                    >
                    <div className='flex flex-col justify-center items-center' >
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>home_3_line</title><g id="home_3_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill={`${theme === 'dark' ? '#daf2dc' : '#0b0b0d'}`} d='M10.772 2.688a2 2 0 0 1 2.317-.099l.139.1 8.384 6.52c.721.561.37 1.692-.499 1.785l-.116.006H20v8a2 2 0 0 1-1.85 1.995L18 21H6a2 2 0 0 1-1.994-1.85L4 19v-8h-.997C2.09 11 1.671 9.892 2.3 9.285l.088-.076zM12 4.267 5.625 9.225c.229.185.375.468.375.785V19h3v-5a3 3 0 1 1 6 0v5h3v-8.99c0-.317.146-.6.375-.785zM12 13a1 1 0 0 0-1 1v5h2v-5a1 1 0 0 0-1-1'/></g></svg>
                        <h1 className='text-[12px]'>
                            Home
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <FontAwesomeIcon icon={faUser} />
                        <h1 className='text-[12px]'>
                            About
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <FontAwesomeIcon icon={faDiagramProject} />
                        <h1 className='text-[12px]'>
                            Projects
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <FontAwesomeIcon icon={faAddressBook} />
                        <h1 className='text-[12px]'>
                            Contact
                        </h1>
                    </div>
                </div>
    );
}

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinksRef = useRef<HTMLDivElement>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const { theme, themeHandler } = useContext(ApearanceContext) || {}

    function ThemeHandler() {
        themeHandler!(theme == 'light' ? 'dark' : 'light')
        setIsDarkMode(!isDarkMode);
	}
     
    const onToggleMenu = () => {
        if (navLinksRef.current) {
            navLinksRef.current.classList.toggle('top-[9%]');
        }
        setIsMenuOpen(!isMenuOpen);
    };
    const { scrollY } = useScroll();
    const { width } = useWindowSize();
    // Transform width based on scroll position
    const navWidth = useTransform(scrollY, [0, 200], ['95%', '100%']);
    const navMaxWidth = useTransform(scrollY, [0, 200], ['1400px', '630px']);
    const navBlur = useTransform(scrollY, [0, 200], ['blur(0px)', 'blur(10px)']);
    // const navBorder = useTransform(scrollY, [150, 200], ['0px', '0.2px']);
    let navShadow = useTransform(scrollY, [150, 200], ['0px 0px 0px 0px', '0px 0px 2px 0px']);

    if (width < 708) {
        navWidth.set('100%');
        navMaxWidth.set('1400px');
        navBlur.set('blur(0px)');
        // navBorder.set('0px');
        navShadow.set('0px 0px 0px 0px');
    }
    return (
        <>
            <motion.nav
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}

                className={` fixed flex justify-center items-center z-50 b-sky-200 h-[80px]  `}
                style={{
                    width: width > 705 ?  navWidth : '100%',
                    maxWidth: width > 705 ?  navMaxWidth : '1400px',
                    }}
                >
                <motion.div
                    className={`flex font-[tommy] w-full justify-between rounded-[30px] pl-[30px] pr-[30px]
                    backdrop-blur items-center mx-auto h-[45px]
                    ${theme == 'dark' 
                        ? "bg-dark-bg/60 border-light-bg " 
                        : "bg-light-bg/40 border-dark-bg"} "} 
                    `}
                    style={{
                        backdropFilter: width > 705 ?  navBlur : 'blur(0px)',
                        // borderWidth: navBorder,
                        WebkitBackdropFilter: width > 705 ?  navBlur : 'blur(0px)',
                        boxShadow: width > 705 ?  navShadow : '0px 0px 0px 0px',
                    }}
                    
                >
                    
                    <Logo/>
                    {
                        width > 708 &&
                        <Links />
                    }
                    <Mode ThemeHandler={ThemeHandler} isDarkMode={isDarkMode} isMenuOpen={isMenuOpen} />
                </motion.div>
            </motion.nav>
            {
                width < 708 &&
                <NavigationMobile  />
            }
        </>
    );
}

// <div className='flex items-center justify-center  h-[100px]'>
            //         <div 
            //             onClick={ThemeHandler}
            //             className={`absolute cursor-pointer mr-[40px] w-[30px] h-[30px] z-10  position-x-2 dark:bg-gray-600 
            //             rounded-full shadow-md transition-all duration-500 ease-in-out 
            //             ${isDarkMode ? 'translate-x-[35px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
            //         >
            //             <div className=" w-[29px] h-[29px] flex items-center  justify-center ">
            //                 <Sun
            //                 className={`absolute w-[25px] h-[25px]  text-[#000] transition-all duration-500
            //                 ${isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
            //                 />
            //                 <Moon 
            //                 className={`absolute w-[25px] h-[25px] text-[#fff] transition-all duration-500
            //                 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
            //                 />
            //             </div>
            //         </div>
            //     <button
            //         onClick={ThemeHandler}
            //         className={`w-[50px] h-[15px] z-0 bg-gray-200 dark:bg-gray-800 
            //             rounded-full shadow-inner overflow-hidden transition-opacity duration-500 ease-in-out 
            //             ${isMenuOpen ? 'md:opacity-100 opacity-0 pointer-events-none' : 'opacity-100'}`}
            //         >
            //     </button>
            // </div>
//             <div
//                 ref={navLinksRef}
//                 className={`nav-links z-30 duration-500 ms:static absolute ms:min-h-fit min-h-[60vh] left-0 top-[-100%] ms:w-auto  w-full flex items-center  ${isMenuOpen ? 'top-[0] bg-[#212a35] ms:bg-[#ffffff00] ms:top-[-100%]' : ''}`}
//             >
                // <ul className="flex text-[#fff4f4] ms:flex-row flex-col ms:items-center ms:justify-start ms:gap[4vw] w-[90%]">
                //     <div className="flex justify-end w-[109%]  h-[82px] items-center
                //      ms:hidden">
                //         <FontAwesomeIcon onClick={onToggleMenu} name="menu" className="text-3xl cursor-pointer ms:hidden" icon={faTimes} style={{height: "46px"}}/>
                //     </div>
                //     <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                //         <a className="text-[10px] relative gap-2 flex items-center" href="#">
                //             {/* <FontAwesomeIcon icon={faDiagramProject} /> */}
                //             Projects
                //         </a>
                //     </li>


                //     <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                //         <a className="text-[10px] relative gap-2 flex items-center" href="#">
                //             {/* <FontAwesomeIcon icon={faUser} /> */}
                //             About
                //         </a>
                //     </li>

                //     <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                //         <a className="text-[10px] relative gap-2 flex items-center" href="#">
                //         {/* <FontAwesomeIcon icon={faFileSignature} /> */}
                //             Contact
                //         </a>
                //     </li>
                    
                //     <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                //         <a className="text-[10px] relative gap-2 flex items-center" href="#">
                //             {/* <FontAwesomeIcon icon={faMicrochip} /> */}
                //             Skills
                //         </a>
                //     </li>
                    
                //     <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                //         <a className="text-[10px] relative gap-2 flex items-center" href="#">
                //             {/* <FontAwesomeIcon icon={faCertificate} /> */}
                //             Certaficates
                //         </a>
                //     </li>
                // </ul>
//             </div>
//             <div className="flex items-center gap-6 ms:hidden">
//                 <FontAwesomeIcon onClick={onToggleMenu} name="menu" className={`text-3xl z-30 cursor-pointer ms:hidden ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} icon={faBars} style={{height: "40px"}}/>
//             </div>
export { Navigation };


//  <nav className={`fixed z-50  flex font-[tommy2] justify-center z- items-center w-[100%] bg-slate-400  mx-auto h-[80px]`}>
//                 <div className='flex items-center justify-between w-[1220px] h-[80px] b-blue-500'>
//                 {/* <nav className="fixed top-0 left-0 flex justify-center items-center w-full bg-slate-400 h-[80px]">
//                 <div className="flex items-center justify-between w-[1220px] h-[80px] bg-blue-500"> */}
//                     <div className='flex items-center justify-center  h-[100px]'>
//                             <div 
//                                 onClick={ThemeHandler}
//                                 className={`absolute cursor-pointer mr-[40px] w-[30px] h-[30px] z-10  position-x-2 dark:bg-gray-600 
//                                 rounded-full shadow-md transition-all duration-500 ease-in-out 
//                                 ${theme == 'dark' ? 'translate-x-[35px] bg-[#222222]' : 'translate-x-[5px] bg-[#e4e4e4]'}`}
//                             >
//                                 <div className=" w-[29px] h-[29px] flex items-center  justify-center ">
//                                     <Sun
//                                     className={`absolute w-[25px] h-[25px]  text-[#000] transition-all duration-500
//                                     ${theme == 'dark' ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
//                                     />
//                                     <Moon 
//                                     className={`absolute w-[25px] h-[25px] text-[#fff] transition-all duration-500
//                                     ${theme == 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
//                                     />
//                                 </div>
//                             </div>
//                         <button
//                             onClick={ThemeHandler}
//                             className={`w-[50px] h-[10px] z-0 ${theme == 'dark' ? "bg-gray-200" : "bg-white"} 
//                                 rounded-full shadow-inner overflow-hidden transition-opacity duration-500 ease-in-out 
//                                 ${isMenuOpen ? 'md:opacity-100 opacity-0 pointer-events-none' : 'opacity-100'}`}
//                             >
//                         </button>
//                     </div>
//                     <div
//                         // ref={navLinksRef}
//                         className={`nav-links z-30 duration-500 ms:static absolute ms:min-h-fit min-h-[60vh] left-0 top-[0%] ms:w-auto  w-full  flex items-center  ${isMenuOpen ? 'top-[0] bg-[#212a35] ms:bg-[#ffffff00] ms:top-[-100%]' : ''}`}
//                     >
//                         <ul className="flex  ms:flex-row flex-col ms:items-center ms:justify-start ms:gap[4vw] w-[98%]  ">
//                             <div className="flex justify-end w-[100%] self-end  h-[182px] items-center bg-red-500
//                             ms:hidden">
//                                 <FontAwesomeIcon onClick={onToggleMenu} name="menu" className="text-3xl cursor-pointer ms:hidden" icon={faTimes} style={{height: "46px"}}/>
//                             </div>
//                             <li className='flex w-[100%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
//                                 <Link scroll={false} href="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className='flex w-[100%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
//                                 <Link scroll={false} href="/projects">
//                                     Projects
//                                 </Link>
//                             </li>

//                             <li className='flex w-[100%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
//                                 <Link scroll={false} href="/about">
//                                     About
//                                 </Link>
//                             </li>

//                             <li className='flex w-[100%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
//                                 <Link scroll={false} href="/contact">
//                                     Contact
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="flex items-center gap-6 ms:hidden">
//                         <FontAwesomeIcon onClick={onToggleMenu} name="menu" className={`text-3xl z-30 cursor-pointer ms:hidden ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} icon={faBars} style={{height: "40px"}}/>
//                     </div>
//                 </div>
            // </nav> 