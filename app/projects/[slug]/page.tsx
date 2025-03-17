'use client'

import { redirect } from "next/dist/server/api-utils";
// import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation';
import { useState, useEffect, useContext } from "react";

import ButtonLight  from "@/components/Button";
import { TerminalMinishell } from "@/components/Terminal";

import { ApearanceContext } from "@/app/context/Themecontext";

import Footer from "@/components/Footer";
// import Curve from "@/components/Curve";



// import { Projecto } from "@/types/indexTypes";

type Project = {
  title: string;
  description: string;
  field: string;
  livedemo: string;
  github: string;
  src: string;
  color: string;
  usage: string[];
  skills: string[];
  date: string;
  languages: string[];
  technologies: string[];
  features: string[];
  video: string;
  frameworks: string[];
  pics: string[];
  pdf: string;
};

const projects : Record<string, Project> = {
  "minishell": {
    title: "Minishell",
    description:
      "A lightweight Unix shell written in C, replicating fundamental shell functionalities. Features include command execution using PATH resolution, built-in commands, input/output redirections, pipes, and interactive mode handling.",
    field: "Unix",
    livedemo: "none",
    github: "https://github.com/otmane222/MiniShell",
    src: "c2montreal.png",
    color: "#000000",
    usage: [
      "./Minishell",
      "echo 'hello I'm inside my shell'",
      "hello I'm inside my shell",
      "export VAR=otmane && echo hey $VAR",
      "hey otmane",
    ],
    skills: [
      "Problem Solving",
      "Memory Management",
      "Tree and Linked Lists",
      "Team Work",
    ],
    technologies: [
      "C",
      "System Calls",
      "Signals",
      "Process Management",
      "Pipes",
      "File Descriptors",
    ],
    features: [
      "Custom shell prompt with command-line input handling.",
      "Built-in commands: echo, cd, pwd, export, unset, env, exit.",
      "Redirections: input (<), output (>), append (>>), and heredoc (<<).",
      "Piping (|) for chaining commands.",
      "Environment variable expansion ($VAR and $?).",
      "Interactive mode: handles Ctrl-C, Ctrl-D, and Ctrl-\\ like Bash.",
      "Command history using readline.",
      "Logical operators (&& and ||) with parenthesis support.",
      "Wildcard (*) expansion for matching files in the current directory.",
    ],
    date: "11-04-2023",
    languages: ["C"],
    video: "",
    frameworks: [],
    pics: [],
    pdf: "minishell.pdf",
  },

  "pong-site": {
    title: "Pong Site",
    description:
      "A social web application with real-time communication, featuring a Django backend and a React frontend for chatting, playing, and connecting with others.",
    field: "Web",
    livedemo: "none",
    github: "https://github.com/1337Projects/ft-trancendence",
    src: "c2montreal.png",
    color: "#000000",
    usage: [],
    skills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Time Management",
      "Responsive Design",
      "Authentication",
      "Containerization",
      "Scalability",
      "Performance Optimization",
    ],
    technologies: [
      "Django",
      "React",
      "Vite",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Nginx",
      "WebSockets",
    ],
    features: [
      "Real-time Chat",
      "Secure User Authentication",
      "Responsive Design for Desktop and Mobile",
      "Dockerized Setup",
      "Scalable and Performant Architecture",
    ],
    date: "11-04-2023",
    languages: ["Python", "JavaScript"],
    video: "https://www.youtube-nocookie.com/embed/JH4vipKTbzo",
    frameworks: ["Django", "React"],
    pics: [],
    pdf: "pong-site.pdf",
  },

  "inception": {
    title: "Inception",
    description:
      "A DevOps project setting up a virtualized infrastructure using Docker and container orchestration, ensuring security, efficiency, and scalability.",
    field: "DevOps",
    livedemo: "none",
    github: "https://github.com/otmane222/inception",
    src: "none",
    color: "#3498db",
    usage: [],
    skills: [
      "Docker",
      "Nginx",
      "WordPress",
      "MariaDB",
      "Ftp",
      "Redis Cache",
      "System Administration",
    ],
    date: "2024-03-10",
    languages: ["Bash"],
    technologies: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "MariaDB",
      "WordPress",
      "Ftp",
      "Redis Cache",
    ],
    features: [
      "Multi-container setup with Docker Compose",
      "Secure Nginx reverse proxy",
      "Database containerization with MariaDB",
      "WordPress deployment inside a container",
      "Volume management for data persistence",
      "Networking between isolated services",
    ],
    video: "https://www.youtube-nocookie.com/embed/juKF0WvR0RQ",
    frameworks: [],
    pics: [],
    pdf: "inception.pdf",
  },

  "old-portfolio": {
    title: "Old Portfolio",
    description:
      "A simple portfolio website made using pure HTML and CSS with a responsive design.",
    field: "Web Development",
    livedemo: "https://my-website-template-mu.vercel.app/",
    github: "https://github.com/otmane222/my_website_template",
    src: "none",
    color: "#3498db",
    usage: [],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    date: "",
    languages: [],
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive design"],
    video: "",
    frameworks: [],
    pics: ["old-portfolio.png"],
    pdf: "",
  },
};


import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { useParams, useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';

// const arr:string[] = ['home', 'projects', 'about', 'contact']

// import useWindowSize from "@/components/utils";
export default function Project()
{
  const params = useParams();
  const project = projects[params.slug as string];
  // const { width, height} = useWindowSize();

  if (!project)
    return <></>;

  // const initialPath = `M0 300  Q${width / 2} 0 ${width} 300 L${width} 300 L0 ${height + 301 }  M${width} ${height + 301} L${width} 300 L0 ${height + 301}  Q${width / 2} ${height + 301 + 200} ${width} ${height + 301} `
  
  // const middlePath = `M0 200  Q${width / 2} 200 ${width} 200 L${width} 200 L0 ${height + 301 }  M${width} ${height + 301} L${width} 200 L0 ${height + 301}  Q${width / 2} ${height + 301} ${width} ${height + 301} `
    
  // const curve = {
  //   initial: {
  //       d: initialPath
  //   },
  //   enter: {},
  //   exit: {
  //       d: [initialPath, middlePath],
  //       transition: {
  //         duration: 1.4,
  //         ease: [0.16, 1, 0.3, 1],
  //       }
  //   }
  // }


  return (
    <>
      <div
        // style={{ backgroundColor: project.color }}
        className="   w-full h-auto  b-red-500"
      >
        <div className="w-full h-auto pt-[80px] flex flex-col b-red-500">
          <WebProjectComponent project={project} />
          
        </div>
      </div>
      {/* <Curve /> */}
      <Footer />
      {/* <motion.svg
        initial={{ y: "200vh" }}
        exit={{ y: ["100vh", "0vh"]  }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-[-300px] z-50   w-full flex justify-center items-center text-white h-[1800px] fill-[#393939] stroke-0`}
        >
        <motion.path
          variants={curve}
          initial="initial"
          exit="exit"
          />
      </motion.svg> */}
    </>
  );
};



const WebProjectComponent = ({ project } : {project: Project}) => {
  
  const { theme } = useContext(ApearanceContext) || {'light': true};

  return (
    <div className={`w-full h-auto relative z-40 ${theme == 'dark' ? "bg-dark-bg" : "bg-light-bg"} flex justify-center b-slate-400 font-[tommy2]`}>
        <div className="w-[1000px] h-auto b-[#a84848] flex flex-col justify- items-center" >

          <div className="h-[200px] w-[95%] b-slate-600  ">
            <h1 className="text-5xl  pt-[100px] uppercase  " >
              {project.title} ({project.field})
            </h1>
          </div>

          <div className=" w-[95%]" >
            <h1 className="text-3xl  pb-[30px] pt-[50px] ">
              Description
            </h1>
            <p className="text-[20px] ">
              {project.description}
            </p>
          </div>
          {
            project.usage.length > 0 && (
              <div className="w-[95%]" >
                <h1 className="text-3xl pt-[50px] pb-[30px] ">
                  Usage
                </h1>
                <div className="b-[#000] w-[100%] h-[400px] rounded-[20px] ">
                  <TerminalMinishell />
                </div>
              </div>
            )             
          }

          {
            project.video && (
              <>
                <h1 className="text-3xl pt-[80px] pb-[30px] b-emerald-300 w-[95%] ">
                  Video Demosntrate the project
                </h1>
                <div className="relative w-[95%] flex flex-col pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`${project.video}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </div>
              </>
            )
          }
          {
            project.pdf &&
            <>
              <h1 className="text-3xl pt-[80px] pb-[30px] b-emerald-300 w-[95%] ">
                Read more details about the project
              </h1>
              <div className="w-[95%] h-screen b-emerald-300 flex justify- ">
                <iframe
                  id="pdfViewer"
                  src={`/pdfs/${project.pdf}`} // Load PDF from the API
                  className="border-none w-[90%] h-[400px] md:h-[600px]"
                  />
              </div>
            </>
          }

          {
            project.pics.length > 0 &&
            <>
              <h1 className="text-3xl pt-[80px] pb-[30px] b-emerald-300 w-[95%] ">
                Shoots
              </h1>
              <div className=" w-[95%] h-auto bg-emerald-300 flex justify-center items-center">
                <div className="flex gap-4">
                  {
                    project.pics.map((pic, index) => {
                      return <img key={index} src={`/projects/${pic}`} className="w-full" />
                    })
                  }
                </div>
              </div>
            </>
          }


          <div className="w-[95%]" >
            <h1 className="text-3xl pt-[30px] pb-[30px] ">
                Features
            </h1>
            <div className="b-[#3eabc4] w-[100%]">
                <ul>
                  {
                    project.features.map( (skill, index) =>{
                      return <li className="pb-4 text-[20px]" key={index}>{skill}</li>
                    })
                  }
                </ul>
            </div>
          </div>
          


          <div className="w-[95%]  md:flex md:flex-row flex flex-col h-auto b-orange-400" >
            <div className="md:w-[50%] w-[100%] b-fuchsia-400">
              <h1 className="text-3xl pt-[50px] pb-[30px] ">
                Technologies
              </h1>
              <div className="b-[#3eabc4] w-[100%]">
                  <ul>
                    {
                      project.technologies.map( (skill, index) =>{
                        return <li className="pb-4 text-[20px]" key={index}>{skill}</li>
                      })
                    }
                  </ul>
              </div>
            </div>

            <div className="md:w-[50%] w-[100%] b-lime-400 " >
              <h1 className="text-3xl pt-[50px] pb-[30px] ">
                Skills Gained
              </h1>
              <div className="b-[#3eabc4] w-[100%]">
                  <ul>
                    {
                      project.skills.map( (skill, index) =>{
                        return <li className="pb-4 text-[20px]" key={index}>{skill}</li>
                      })
                    }
                  </ul>
              </div>
            </div>
          </div>


          <div className="w-[95%] pt-[100px] b-emerald-300" >
            <div className="flex justify-around  w-[100%] h-[50px] b-[#000] gap-2  items-center">
                <ButtonLight link={`${project.livedemo}`} text="Live Demo" classname={`w-full max-w-[200px] ${project.livedemo == 'none' ? "pointer-events-none opacity-50" : ""} rounded- h-[30px] bg-black text-white`} />

                <ButtonLight link={`${project.github}`} text="Github" classname="w-full max-w-[200px] cursor-pointer h-[30px] bg-black text-white"/>
                  
                
            </div>
          </div>
        </div>
    </div>
  );
};
