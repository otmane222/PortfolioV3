
'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Project from "@/components/projects/Project";
import { SProject } from "@/components/projects/Project";
import { ScrollCards } from "@/components/projects/Project";
import Link from "next/link";
import Modal from "@/components/modal.tsx/Modal";
import styles from "./Projects.module.css";

import { RevealBento } from "@/components/Footer";

export default function Prjects() {

    const [modal, setModal] = useState({ active: false, index: 0 });
    const projects = [
        {
            title: "minishell",
            src: "c2montreal.png",
            color: "#000000",
            field: "Web Development",
            id: 0,
        },
        {
            title: "ft_transcendence",
            src: "officestudio.png",
            color: "#8C8C8C",
            field: "Web Development",
            id: 1,
        },
        {
            title: "portfolio",
            src: "locomotive.png",
            color: "#EFE8D3",
            field: "Web Development",
            id: 2,
        },
        {
            title: "inception",
            src: "silencio.png",
            color: "#706D63",
            field: "Web Development",
            id: 3,
        },
        {
            title: "inception1",
            src: "silencio.png",
            color: "#706D63",
            field: "Web Development",
            id: 4,
        },
        {
            title: "inception2",
            src: "silencio.png",
            color: "#706D63",
            field: "Web Development",
            id: 5,
        },
        {
            title: "inception3",
            src: "silencio.png",
            color: "#706D63",
            field: "Web Development",
            id: 6,
        },
        {
            title: "inception4",
            src: "silencio.png",
            color: "#706D63",
            field: "Web Development",
            id: 7,
        },
        {
            title: "inception5",
            src: "silencio.png",
            color: "#706D63",
            field: "Web Development",
            id: 8,
        },
        ]

    
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: [0 , 0 , 0.5 ,1], y: 0 }}
            transition={{ duration: 3, ease: [0, 0.35, 0.7, 1] }}
        id="page" className="w-full h-auto z-40 mt-[100px] relative b-slate-500">
            <div className="w-full h-auto flex flex-col  b-[#e56ef0] pb-[200px] pt-[100px]">
                <div className="w-[100%]   b-slate-300 flex flex-col items-center">
                    
                    <h1 className="text-5xl p-[20px]">
                        All Projects
                    </h1>

                </div>
                <div className="w-[80%] self-center h-auto  b-[#daf2dc]">
                    <div className="flex flex-col items-center justify-center ">
                        {
                            projects.map((project, index) => {
                                return (
                                    <Project key={index} index={index} title={project.title} field={project.field} setModal={setModal} num={8} />
                                )
                            })
                        }
                        
                    <Modal modal={modal} setModal={setModal} projects={projects} />
                    </div>
                </div>
            </div>
            {/* <RevealBento /> */}
        </motion.div>
    )
}