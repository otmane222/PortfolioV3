
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

import Footer  from '@/components/Footer';

import { ReactNode } from 'react';
import { Lenis } from "lenis/dist/lenis-react";
import { TransitionLink } from '@/components/Transition';
import { Navigation } from '@/components/Navigation';
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
    
    <Lenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.1,
          //   infinite: true,
          //   syncTouch: true,
        }}
        >

            
        <div className={`relative flex flex-col items-center bg-[url('/')]  ${theme == 'dark' ? "bg-dark-bg text-[#fff4f4]" : "bg-light-bg text-[#000000] "} w-full h-auto `}>
        {
            // theme == 'dark' ?
            // <div className="absolute z-[- bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:13px_24px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            // :
            // <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        }
        <Navigation />
        
        {children}
        {/* <Footer /> */}
        </div>
    </Lenis>
  );
}

//                         {/* <a className="text-[16px] relative gap-2 flex items-center" href="#">
//                         </a> */}
//                         {/* <FontAwesomeIcon icon={faFileSignature} /> */}
//                         {/* <a className="text-[16px] relative gap-2 flex items-center" href="#">
//                         </a> */}
//                             {/* <FontAwesomeIcon icon={faDiagramProject} /> */}
//                         {/* <a className="text-[16px] relative gap-2 flex items-center" href="#">
//                         </a> */}
//                             {/* <FontAwesomeIcon icon={faUser} /> */}
//                         {/* <a className="text-[16px] relative gap-2 flex items-center" href="#">
//                         </a> */}
//                         {/* <FontAwesomeIcon icon={faFileSignature} /> */}
// {/*                     
//                     <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
//                         <a className="text-[16px] relative gap-2 flex items-center" href="#">
//                             <FontAwesomeIcon icon={faMicrochip} />
//                             Skills
//                         </a>
//                     </li>
                    
//                     <li className='flex w-[110%] items-center ms:p-[5px] ms:pl-[20px] ms:pr-[20px] p-[20px] m-1'>
//                         <a className="text-[16px] relative gap-2 flex items-center" href="#">
//                             <FontAwesomeIcon icon={faCertificate} />
//                             Certaficates
//                         </a>
//                     </li> */}