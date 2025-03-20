'use client'

import { useState } from "react";
// import { motion } from "framer-motion";
import Project from "./projects/Project";
// import { SProject } from "./projects/Project";
import { ScrollCards } from "./projects/Project";
import Link from "next/link";
import Modal from "./modal.tsx/Modal";
// import styles from "./Projects.module.css";
// import useWindowSize from "./utils";

import { useEffect } from "react";  

import { CardType } from "@/types/indexTypes";

function Projects() {

  const projects : CardType[] = [
    {
        title: "minishell",
        src: "minishell.webp",
        color: "#5a803b",
        field: "Unix",
        description: "A lightweight Unix shell written in C and limited pre-defined functions",
        id: 0,
    },
    {
        title: "ft_transcendence",
        src: "ft_transcendence.png",
        color: "#8C8C8C",
        field: "Web",
        description: "ft_transcendence is an innovative web application designed to enhance social interaction through real-time",
        id: 1,
    },
    {
        title: "inception",
        src: "inception.png",
        color: "#66aec0",
        field: "DevOps",
        description: "Inception is a project focused on setting up a virtualized infrastructure using Docker and container orchestration.",
        id: 2,
    },
    {
        description: "It's a simple portfolio I made using pure html and css",
        title: "old-portfolio",
        src: "old-portfolio.png",
        color: "#706D63",
        field: "Web",
        id: 3,
    },
    {
      description: "",
      title: "",
      src: "",
      color: "#706D63",
      field: "",
      id: -1,
  }

]

  const [modal, setModal] = useState({ active: false, index: 0 });
  // const { width } = useWindowSize();
  const [width, setIsMobile] = useState<number>(-1);
  
      useEffect(() => {
          // Ensure window is available
          const checkScreenSize = () => {
          setIsMobile(window.innerWidth);
          };
  
          checkScreenSize(); // Run once on mount
          window.addEventListener('resize', checkScreenSize);
  
          return () => {
          window.removeEventListener('resize', checkScreenSize);
          };
      }, []);

  if (width === -1) {
    return <div className="h-[600px] b-emerald-700"></div>;
  }
  if (width < 768) {
    return (
      <>
        <div className="w-full h-auto flex flex-col   b-[#e56ef0] ">
          <div className="w-full b-slate-300 flex flex-col">
            <h1 className="pl-[20px]">
              My Work
            </h1>
            
            <h1 className="text-5xl p-[20px]">
              Selected Projects
            </h1>
            
          </div>
          <ScrollCards projects={projects} />
        </div>
      </>
    );
  }
  return (
    <div className="w-full h-auto flex flex-col  z-50">
      <div className="w-full b-slate-300 flex flex-col">
        <h1 className="pl-[20px]">
          My Work
        </h1>
        
        <h1 className="text-5xl p-[20px]">
          Selected Projectss
        </h1>
        
      </div>
      <div className="w-full h-auto  b-[#297e30]">
          <div className="flex flex-col items-center justify-center ">
            {
                projects.map((project, index) => {
                    if (index === 4) {
                      return null;
                    }
                    return (
                        <Project key={index} index={index} title={project.title} field={project.field} setModal={setModal} num={3} />
                    )
                })
            }
            
          <Modal modal={modal} projects={projects} />
          </div>
      </div>
      <div className="w-full z-40 pt-[100px] flex justify-center items-center">
        <Link href="/projects" className="text-2xl p-[30px]  rounded-[20px] flex items-center justify-center  ">
          More Projects
        </Link>
      </div>
    </div>
  );
}

export { Projects };