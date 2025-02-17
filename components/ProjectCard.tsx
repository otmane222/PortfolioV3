'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Project from "./Project";

export default function ProjectCards() {

    const projects = [
        {
          title: "C2 Montreal",
          src: "c2montreal.png",
          color: "#000000"
        },
        {
          title: "Office Studio",
          src: "officestudio.png",
          color: "#8C8C8C"
        },
        {
          title: "Locomotive",
          src: "locomotive.png",
          color: "#EFE8D3"
        },
        {
          title: "Silencio",
          src: "silencio.png",
          color: "#706D63"
        }
      ]

    const [modal, setModal] = useState({ active: false, index: 0 });
    
    return (
        <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col items-center">
                        {
                            projects.map((project, index) => {
                                return (
                                    <Project key={index} index={index} title={project.title} setModal={setModal} />
                                )
                            })
                        }
            </div>
        </div>
    );
}
