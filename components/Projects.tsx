'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Project from "./projects/Project";
import { SProject } from "./projects/Project";
import { ScrollCards } from "./projects/Project";
import Link from "next/link";
import Modal from "./modal.tsx/Modal";
import styles from "./Projects.module.css";
import useWindowSize from "./utils";

  
        

function Projects() {

  const projects = [
      {
        title: "C2 Montreal",
        src: "c2montreal.png",
        color: "#000000",
        field: "Web Development",
        id: 0,
      },
      {
        title: "Office Studio",
        src: "officestudio.png",
        color: "#8C8C8C",
        field: "Web Development",
        id: 1,
      },
      {
        title: "Locomotive",
        src: "locomotive.png",
        color: "#EFE8D3",
        field: "Web Development",
        id: 2,
      },
      {
        title: "Silencio",
        src: "silencio.png",
        color: "#706D63",
        field: "Web Development",
        id: 3,
      }
    ]

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { width } = useWindowSize();

  if (window.innerWidth < 920) {
    return (
      <>
        <div className="w-full h-auto flex flex-col  b-[#e56ef0] z-50 ">
      <div className="w-full b-slate-300 flex flex-col">
        <h1 className="pl-[20px]">
          My Work
        </h1>
        
        <h1 className="text-5xl p-[20px]">
          Selected Projects
        </h1>
        
      </div>
      <div className="w-full h-auto justify-normal bg-slate- flex flex-nowrap">
        {
            projects.map((project, index) => {
                return (
                    <ScrollCards key={index} />
                )
            })
        }
      </div>
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
                    return (
                        <Project key={index} index={index} title={project.title} field={project.field} setModal={setModal} num={3} />
                    )
                })
            }
            
          <Modal modal={modal} setModal={setModal} projects={projects} />
          </div>
      </div>
      <div className="w-full z-40 pt-[100px] pb-[100px] flex justify-center items-center">
        <Link href="/projects" className="text-1xl p-[30px]  rounded-[20px] bg-[#333333]   text-white hover:text-white flex items-center justify-center  ">
          More Projects
        </Link>
      </div>
    </div>
  );
}

export { Projects };