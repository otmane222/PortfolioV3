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
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

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
        <nav className="flex justify-between items-center w-[95%] mx-auto h-[80px]  ">
            <div className='flex items-center justify-center  h-[100px]'>
                    <div 
                        onClick={toggleTheme}
                        className={`absolute cursor-pointer mr-[40px] w-[30px] h-[30px] z-10  position-x-2 dark:bg-gray-600 
                        rounded-full shadow-md transition-all duration-500 ease-in-out 
                        ${isDarkMode ? 'translate-x-[35px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
                    >
                        <div className=" w-[29px] h-[29px] flex items-center  justify-center ">
                            <Sun
                            className={`absolute w-[25px] h-[25px]  text-[#000] transition-all duration-500
                            ${isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
                            />
                            <Moon 
                            className={`absolute w-[25px] h-[25px] text-[#fff] transition-all duration-500
                            ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
                            />
                        </div>
                    </div>
                <button
                    onClick={toggleTheme}
                    className={`w-[50px] h-[15px] z-0 bg-gray-200 dark:bg-gray-800 
                        rounded-full shadow-inner overflow-hidden transition-opacity duration-500 ease-in-out 
                        ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                </button>
            </div>
            <div
                ref={navLinksRef}
                className={`nav-links z-10 duration-500 md:static absolute z md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center  ${isMenuOpen ? 'top-[0] bg-[#fff]' : ''}`}
            >
                <ul className="flex md:flex-row flex-col md:items-center md:justify-start md:gap[4vw] w-[90%]">
                    <div className="flex justify-end w-[112%]  h-[80px] items-center
                     md:hidden">
                        <FontAwesomeIcon onClick={onToggleMenu} name="menu" className="text-3xl cursor-pointer md:hidden" icon={faTimes} style={{height: "46px"}}/>
                    </div>
                    <li className='flex w-[112%] items-center md:p-[5px] md:pl-[20px] md:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                        <a className="text-[18px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faDiagramProject} />
                            Projects
                        </a>
                    </li>


                    <li className='flex w-[112%] items-center md:p-[5px] md:pl-[20px] md:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                        <a className="text-[18px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faUser} />
                            About
                        </a>
                    </li>

                    <li className='flex w-[112%] items-center md:p-[5px] md:pl-[20px] md:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                        <a className="text-[18px] relative gap-2 flex items-center" href="#">
                        <FontAwesomeIcon icon={faFileSignature} />
                            Contact
                        </a>
                    </li>
                    
                    <li className='flex w-[112%] items-center md:p-[5px] md:pl-[20px] md:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                        <a className="text-[18px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faMicrochip} />
                            Skills
                        </a>
                    </li>
                    
                    <li className='flex w-[112%] items-center md:p-[5px] md:pl-[20px] md:pr-[20px] p-[20px] transition-all duration-700 m-1'>
                        <a className="text-[18px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faCertificate} />
                            Certaficates
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6 md:hidden">
                <FontAwesomeIcon onClick={onToggleMenu} name="menu" className={`text-3xl cursor-pointer md:hidden ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} icon={faBars} style={{height: "40px"}}/>
            </div>
        </nav>
    );
}

// function Navigation1 () {
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const [isClose, setIsClose] = useState(true);

//     const toggleTheme = () => {
//         const newTheme = !isDarkMode;
//         setIsDarkMode(newTheme);

//         localStorage.setItem('theme', newTheme ? 'dark' : 'light');

//         if (newTheme) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     };

//     function openSlideMenu(): void {
//         console.log('open');
//         setIsClose(false);
//     }
    
//     function closeSlideMenu(): void {
//         console.log('close');
//         setIsClose(true);
//     }

//     return (

//         <header className='w-full flex justify-center bg-[#6ea6f0]'>
//             <nav className="md:w-[95%] w-[90%]">
//                 <div className="flex w-full justify-center h-[80px]  items-center">
//                     <div className='flex items-center'>
//                         <h1 className='text-[20px] pl-[20px] pr-[20px] pb-[5px] pt-[5px] '>LOGO</h1>
//                     </div>
//                     <div className='flex justify-center w-full h-full'>
//                         <div className='text-[20px] w-[340px]  items-center  justify-between md:flex hidden'>
//                             <Link href="/project" legacyBehavior>
//                             <a className="text-[#000] hover:border-black hover:border-b-2  pl-[20px] pr-[20px] pb-[5px] pt-[5px] flex justify-center items-center transition-all duration-500 ease-in-out ">Projects</a>
//                             </Link>
//                             <Link href="/about" legacyBehavior>
//                             <a className="text-[#000] hover:border-black hover:border-b-2  pl-[20px] pr-[20px] pb-[5px] pt-[5px] flex justify-center items-center transition-all duration-500 ease-in-out ">About</a>
//                             </Link>
//                             <Link href="/skills" legacyBehavior>
//                             <a className="text-[#000] hover:border-black hover:border-b-2  pl-[20px] pr-[20px] pb-[5px] pt-[5px] flex justify-center items-center transition-all duration-500 ease-in-out ">Contact</a>
//                             </Link>
//                         </div>
//                         {
//                             isClose === true ?
//                             <button className='md:hidden block ml-4 hover:text-red-500 transition-all duration-500 ease-in-out' onClick={openSlideMenu}>
//                                 <FontAwesomeIcon icon={faBars} style={{height: "40px"}}/>
//                             </button>
//                             :
//                             <div className='w-full h-[400px] flex flex-col z-40 md:hidden '>
//                                 <div className='w-full h-[250px] backdrop-blur-lg bg-[#E57979]'>
//                                     <div className='text-[20px] w-full h-full  justify-around flex flex-col items-center'>
//                                         <div className='w-full h-[100px] bg-black flex justify-center'>
//                                             <button className='md:hidden block ml-4 hover:text-red-500 transition-all duration-500 ease-in-out' onClick={closeSlideMenu}>
//                                                 <FontAwesomeIcon icon={faTimes} style={{height: "40px"}}/>
//                                             </button>

//                                         </div>
//                                         <Link href="/project" legacyBehavior>
//                                         <a className="text-[#000] hover:bg-[#f29e9e] w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out ">Projects</a>
//                                         </Link>
//                                         <Link href="/about" legacyBehavior>
//                                         <a className="text-[#000] hover:bg-[#f29e9e] w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out  ">About</a>
//                                         </Link>
//                                         <Link href="/skills" legacyBehavior>
//                                         <a className="text-[#000] hover:bg-[#f29e9e] w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out ">Contact</a>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         }
//                     </div>
//                     <div className='flex justify-center items-center'>
//                         <button
//                             onClick={toggleTheme}
//                             className="relative w-[70px] h-[30px] bg-gray-200 dark:bg-gray-800 
//                             rounded-full shadow-inner overflow-hidden"
//                         >
//                             <div 
//                                 className={`absolute w-[30px] h-[30px]  top-[0%] left-[0%] dark:bg-gray-600 
//                                 rounded-full shadow-md transition-all duration-500 ease-in-out 
//                                 ${isDarkMode ? 'translate-x-[37px] bg-[#000]' : 'translate-x-[5px] bg-[#fff]'}`}
//                             >
//                                 <div className="relative w-full h-full flex items-center justify-center">
//                                     <Sun 
//                                     className={`absolute w-3 h-3 text-[#000] transition-all duration-500
//                                     ${isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
//                                     />
//                                     <Moon 
//                                     className={`absolute w-3 h-3 text-[#fff] transition-all duration-500
//                                     ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
//                                     />
//                                 </div>
//                             </div>
//                         </button>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// };

export { Navigation };