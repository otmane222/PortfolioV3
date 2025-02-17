'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Project from "./Project";

function ProjectCard() {
    return (
        <div>
            <h1>ProjectCard</h1>
        </div>
    );
}
  
        

function Projects() {

  const projects = [
      {
        title: "C2 Montreal",
        src: "c2montreal.png",
        color: "#000000",
        field: "Web Development"
      },
      {
        title: "Office Studio",
        src: "officestudio.png",
        color: "#8C8C8C",
        field: "Web Development",
      },
      {
        title: "Locomotive",
        src: "locomotive.png",
        color: "#EFE8D3",
        field: "Web Development"
      },
      {
        title: "Silencio",
        src: "silencio.png",
        color: "#706D63",
        field: "Web Development"
      }
    ]

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="w-full h-auto flex flex-col  b-[#e56ef0]">
      <div className="w-full b-slate-300 flex flex-col">
        <h1 className="pl-[20px]">
          My Work
        </h1>
        
        <h1 className="text-5xl p-[20px]">
          Selected Projects
        </h1>
        
      </div>
      <div className="w-full h-[600px] b-[#297e30]">
          <div className="flex flex-col items-center">
            {
                projects.map((project, index) => {
                    return (
                        <Project key={index} index={index} title={project.title} field={project.field} setModal={setModal} />
                    )
                })
            }
          </div>
      </div>
      {/* <Card /> */}
    </div>
  );
}

export { Projects };