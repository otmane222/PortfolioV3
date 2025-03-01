
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
        <div id="page" className="w-full h-auto bg-slate-500">
            <div className="w-full h-auto flex flex-col  bg-[#e56ef0] pb-[200px] pt-[200px]">
                <div className="w-[100%]  b-slate-300 flex flex-col items-center">
                    
                    <h1 className="text-5xl p-[20px]">
                        All Projects
                    </h1>

                </div>
                <div className="w-[80%] self-center h-auto  b-[#297e30]">
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
        </div>
    )
}