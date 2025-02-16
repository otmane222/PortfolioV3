
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { ApearanceContext } from '@/app/context/Themecontext';

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

import { ReactNode } from 'react';


export default function NavigationLayout({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { theme, themeHandler } = useContext(ApearanceContext) || {}

    function ThemeHandler() {
        themeHandler!(theme == 'light' ? 'dark' : 'light')
    }

    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className={`relative flex flex-col bg-[url('/')]  ${theme == 'dark' ? "bg-[#1a1919] text-[#fff4f4]" : "bg-[#ececec] "} w-full h-[10000px] `}>
    {
        // theme == 'dark' ?
        // <div className="absolute z-[- bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:13px_24px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        // :
        // <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    }
      <nav className={`flex justify-between items-center w-[95%] max-w-[1000px] mx-auto h-[80px]`}>
            <div className='flex items-center justify-center  h-[100px]'>
                    <div 
                        onClick={ThemeHandler}
                        className={`absolute cursor-pointer mr-[40px] w-[30px] h-[30px] z-10  position-x-2 dark:bg-gray-600 
                        rounded-full shadow-md transition-all duration-500 ease-in-out 
                        ${theme == 'dark' ? 'translate-x-[35px] bg-[#222222]' : 'translate-x-[5px] bg-[#e4e4e4]'}`}
                    >
                        <div className=" w-[29px] h-[29px] flex items-center  justify-center ">
                            <Sun
                            className={`absolute w-[25px] h-[25px]  text-[#000] transition-all duration-500
                            ${theme == 'dark' ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
                            />
                            <Moon 
                            className={`absolute w-[25px] h-[25px] text-[#fff] transition-all duration-500
                            ${theme == 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
                            />
                        </div>
                    </div>
                <button
                    onClick={ThemeHandler}
                    className={`w-[50px] h-[10px] z-0 ${theme == 'dark' ? "bg-gray-200" : "bg-white"} 
                        rounded-full shadow-inner overflow-hidden transition-opacity duration-500 ease-in-out 
                        ${isMenuOpen ? 'md:opacity-100 opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                </button>
            </div>
            <div
                // ref={navLinksRef}
                className={`nav-links z-30 duration-500 ms:static absolute ms:min-h-fit min-h-[60vh] left-0 top-[-100%] ms:w-auto  w-full flex items-center  ${isMenuOpen ? 'top-[0] bg-[#212a35] ms:bg-[#ffffff00] ms:top-[-100%]' : ''}`}
            >
                <ul className="flex  ms:flex-row flex-col ms:items-center ms:justify-start ms:gap[4vw] w-[90%]">
                    <div className="flex justify-end w-[109%]  h-[82px] items-center
                     ms:hidden">
                        <FontAwesomeIcon onClick={onToggleMenu} name="menu" className="text-3xl cursor-pointer ms:hidden" icon={faTimes} style={{height: "46px"}}/>
                    </div>
                    <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
                        <a className="text-[16px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faDiagramProject} />
                            Projects
                        </a>
                    </li>

                    <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
                        <a className="text-[16px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faUser} />
                            About
                        </a>
                    </li>

                    <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
                        <a className="text-[16px] relative gap-2 flex items-center" href="#">
                        <FontAwesomeIcon icon={faFileSignature} />
                            Contact
                        </a>
                    </li>
                    
                    <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
                        <a className="text-[16px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faMicrochip} />
                            Skills
                        </a>
                    </li>
                    
                    <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
                        <a className="text-[16px] relative gap-2 flex items-center" href="#">
                            <FontAwesomeIcon icon={faCertificate} />
                            Certaficates
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6 ms:hidden">
                <FontAwesomeIcon onClick={onToggleMenu} name="menu" className={`text-3xl z-30 cursor-pointer ms:hidden ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} icon={faBars} style={{height: "40px"}}/>
            </div>
        </nav>
      {children}
    </div>
  );
}
