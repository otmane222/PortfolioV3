'use client'

import { redirect } from "next/dist/server/api-utils";
// import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation';
import { useState, useEffect, useContext } from "react";

import ButtonLight  from "@/components/Button";
import { TerminalMinishell } from "@/components/Terminal";

import { ApearanceContext } from "@/app/context/Themecontext";

import Footer from "@/components/Footer";
import Curve from "@/components/Curve";



interface Project {
  title: string;
  field: string;
  livedemo: string;
  github: string;
  src: string;
  color: string;
  usage: string[];
  description: string;
  skills: string[];
  date: string;
  languages: string[];
  technologies: string[];
  features: string[];
  video: string;
  frameworks: string[];
  pics: string[];
  pdf: string;
  id: number;
}

const projects: Project[] = [
    {
      title: "minishell",
      field: "unix",
      livedemo: "none",
      github: "https://github.com/otmane222/MiniShell",
      src: "c2montreal.png",
      color: "#000000",
      usage: [
        "./Minishell", "echo 'hello I'm insde my shell'", "hello I'm insde my shell",
        "export VAR=otmane && echo hey $VAR", "hey otmane"
      ],

      description: "A lightweight Unix shell written in C, replicating fundamental shell functionalities. Features include command execution using PATH resolution, built-in commands (echo, cd, pwd, export, unset, env, exit), input/output redirections, pipes, environment variable expansion, and interactive mode handling. Implements process control, signal handling, and memory management with POSIX compliance.",
      skills: ['Problem Solving', 'Memory Managment', 'Tree and Linked Lists', 'Team Work'],
      technologies: ["C", "System Calls", "Signals", "Process Management", "Pipes", "File Descriptors"],
      features: [
        "Custom shell prompt with command-line input handling.",
        "Built-in commands: echo, cd, pwd, export, unset, env, exit.",
        "Redirections: input (<), output (>), append (>>), and heredoc (<<).",
        "Piping (|) for chaining commands.",
        "Environment variable expansion ($VAR and $?).",
        "Interactive mode: handles Ctrl-C, Ctrl-D, and Ctrl-\\ like Bash.",
        "Command history using readline.",
        "Logical operators (&& and ||) with parenthesis support.",
        "Wildcard (*) expansion for matching files in the current directory."
      ],
      
      date: "11-04-2023",
      languages: ["C"],
      video: "",
      frameworks: [""],
      pics: ["", "", ""],
      pdf: "minishell.pdf",
      id: 0,
    },
    {
      title: "pong-site",
      field: "web",
      livedemo: "none",
      github: "none",
      src: "c2montreal.png",
      color: "#000000",
      usage: [],

      description: "pong-site is an innovative web application designed to enhance social interaction through real-time communication. Built with a robust Django backend and a dynamic React frontend, this project aims to provide users with a seamless experience for chatting, sharing, playing, and connecting with others.",

      skills: [
          "Problem Solving",
          "Teamwork",
          "Communication",
          "Time Management",
          "Responsive Design",
          "Authentication",
          "Containerization",
          "Scalability",
          "Performance Optimization"
      ],
      
      technologies: ["Django", "React", "Vite", "PostgreSQL", "Docker", "Docker Compose", "Nginx", "WebSockets"],
      
      features: [
          "Real-time Chat",
          "Secure User Authentication",
          "Responsive Design for Desktop and Mobile",
          "Dockerized Setup",
          "Scalable and Performant Architecture"
      ],
      
      date: "11-04-2023",
      languages: ["Python", "JavaScript"],
      video: "https://www.youtube-nocookie.com/embed/JH4vipKTbzo",
      frameworks: ["Django", "React"],
      pics: ["", "", ""],
      pdf: "pong-site.pdf",
      id: 2
    },
    {
      title: "inception",
      field: "DevOps",
      livedemo: "none",
      github: "https://github.com/otmane222/inception",
      src: "none",
      color: "#3498db",
      usage: [],
      description: "Inception is a project focused on setting up a virtualized infrastructure using Docker and container orchestration. The goal is to create multiple services inside isolated containers while ensuring security, efficiency, and scalability.",
      skills: ["Docker", "Nginx", "WordPress", "MariaDB", "Ftp", "redis-cach", "System Administration"],
      date: "2024-03-10",
      languages: ["Bash"],
      technologies: ["Docker", "Docker Compose", "Nginx", "MariaDB", "WordPress", "Ftp", "redis-cach"],
      features: [
        "Multi-container setup with Docker Compose",
        "Secure Nginx reverse proxy",
        "Database containerization with MariaDB",
        "WordPress deployment inside a container",
        "Volume management for data persistence",
        "Networking between isolated services"
      ],
      video: "https://www.youtube-nocookie.com/embed/juKF0WvR0RQ",
      frameworks: [],
      pics: [],
      pdf: "inception.pdf",
      id: 3,
    },
    
  ]

 
export default function Project()
{
  const pathname = usePathname(); // Get the full path
  const [project, setProject] = useState<Project | null>(null);

  // Extract the project slug (i.e., minishell, ft_transcendence, etc.)
  const slug = pathname?.split('/').pop(); // Extract last part of URL after `/projects/`

  useEffect(() => {
    // Find the project with the corresponding slug
    const foundProject = projects.find((project) => project.title === slug);
    setProject(foundProject || null);
  }, [slug]);

  // If the project is not found, show a "Page Not Found" message
  if (!project) {
    return (
      <div className=" h-[100vh] flex justify-center items-center text-4xl font-[tommy2] bg-emerald-200">
        Project Not Found
      </div>
    );
  }

  // Render based on the project field type
  const renderComponentForField = () => {
    return (
      <div className="w-full h-auto flex flex-col b-red-500">
        <WebProjectComponent project={project} />
        
        <Curve />
        <Footer />
      </div>
    );
    // switch (project.field) {
    //   case 'web':
    //   // case 'devops':
    //   //   return <DevOpsProjectComponent project={project} />;
    //   // Add more cases for other fields if needed
    //   default:
    //     return <div>Field type not supported</div>;
    // }
  };

  return (
    <div
      // style={{ backgroundColor: project.color }}
      className=" pt-[80px]  w-full h-auto  b-red-500"
    >
      {renderComponentForField()}
    </div>
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
                <ButtonLight link="http://example.com" classname={`w-full max-w-[200px] ${project.livedemo == 'none' ? "pointer-events-none opacity-50" : ""} rounded- h-[30px] bg-black text-white`}>
                  Live Demo
                </ButtonLight>
                <ButtonLight link={`${project.github}`} classname="w-full max-w-[200px] cursor-pointer h-[30px] bg-black text-white">
                  Github
                </ButtonLight>
            </div>
          </div>
        </div>
    </div>
  );
};

const UnixProjectComponent = ({ project } : {project: Project}) => {
  return (
      <div className="w-full h-[5000px] flex justify-center b-slate-400 font-[unix]">
        <div className="w-[1000px] h-[1900px] b-[#a84848] flex flex-col justify- items-center" >

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

          <div className="w-[95%]" >
            <h1 className="text-3xl pt-[50px] pb-[30px] ">
              Usage
            </h1>
            <div className="b-[#000] w-[100%] h-[400px] rounded-[20px] ">
              <TerminalMinishell />
            </div>
          </div>

          <h1 className="text-3xl pt-[80px] pb-[30px] b-emerald-300 w-[95%] ">
            Read more details about the project
          </h1>
          <div className="w-[95%] h-screen b-emerald-300 flex justify- ">
            <iframe
              src={`/pdfs/${project.pdf}`} // Load PDF from the API
              className="border-none w-[90%] h-[400px] md:h-[600px]"
            />
          </div>

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
                <ButtonLight link="http://example.com" classname={`w-full max-w-[200px] ${project.livedemo == 'none' ? "pointer-events-none opacity-50" : ""} rounded- h-[30px] bg-black text-white`}>
                  Live Demo
                </ButtonLight>
                <ButtonLight link="https://github.com/otmane222/MiniShell" classname="w-full max-w-[200px] cursor-pointer h-[30px] bg-black text-white">
                  Github
                </ButtonLight>
            </div>
          </div>
        </div>
    </div>
  );
};
