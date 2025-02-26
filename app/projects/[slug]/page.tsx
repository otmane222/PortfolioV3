'use client'

import { redirect } from "next/dist/server/api-utils";
// import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";

import { TerminalMinishell } from "@/components/Terminal";

interface Project {
  title: string;
  src: string;
  color: string;
  field: string;
  usage: string[];
  description: string;
  skills: string[];
  date: string;
  languages: string;
  video: string;
  frameworks: string;
  pics: string[];
  id: number;
}

const projects: Project[] = [
    {
      title: "minishell",
      src: "c2montreal.png",
      color: "#000000",
      field: "unix",
      usage: [
        "./Minishell", "echo 'hello I'm insde my shell'", "hello I'm insde my shell",
        "export VAR=otmane && echo hey $VAR", "hey otmane"
      ],

      description: "Recreating Bash like, using limited pre-defined functions in C language.",
      skills: ['Problem Solving', 'Memory Managment', 'Tree and Linked Lists', 'Team Work', 'Paitent'],

      date: "11-04-2023",
      languages: "C",
      video: "Gif video",
      frameworks: "",
      pics: ["", "", ""],
      id: 0,
    },
    {
      title: "ft_transcendence",
      src: "officestudio.png",
      color: "#000000",
      field: "web",
      usage: [
        "./Minishell", "echo 'hello I'm insde my shell'", "hello I'm insde my shell",
        "export VAR=otmane && echo hey $VAR", "hey otmane"
      ],

      description: "Recreating Bash like, using limited pre-defined functions in C language.",
      skills: ['Problem Solving', 'Memory Managment', 'Tree and Linked Lists', 'Team Work', 'Paitent'],

      date: "11-04-2023",
      languages: "C",
      video: "Gif video",
      frameworks: "",
      pics: ["", "", ""],
      id: 0,
    },
    // {
    //   title: "ft_transcendence",
    //   src: "officestudio.png",
    //   color: "#8C8C8C",
    //   field: "web",
    //   id: 1,
    // },
    // {
    //   title: "portfolio",
    //   src: "locomotive.png",
    //   color: "#EFE8D3",
    //   field: "web",
    //   id: 2,
    // },
    // {
    //   title: "inception",
    //   src: "silencio.png",
    //   color: "#706D63",
    //   field: "devops",
    //   id: 3,
    // },
    // {
    //   title: "fdf",
    //   src: "c2montreal.png",
    //   color: "#000000",
    //   field: "unix graphic",
    //   id: 4,
    // },
    // {
    //   title: "cub3D",
    //   src: "c2montreal.png",
    //   color: "#000000",
    //   field: "unix graphic",
    //   id: 5,
    // },
    // {
    //   title: "push_swap",
    //   src: "c2montreal.png",
    //   color: "#000000",
    //   field: "unix",
    //   id: 5,
    // },
    
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
    return <div>Project not found</div>;
  }

  // Render based on the project field type
  const renderComponentForField = () => {
    switch (project.field) {
      case 'unix':
        return <UnixProjectComponent project={project} />;
      case 'web':
        return <WebProjectComponent project={project} />;
      case 'devops':
        return <DevOpsProjectComponent project={project} />;
      // Add more cases for other fields if needed
      default:
        return <div>Field type not supported</div>;
    }
  };

  return (
    <div style={{ backgroundColor: project.color }}>
      <h1>{project.title}</h1>
      {renderComponentForField()}
    </div>
  );
};

const UnixProjectComponent = ({ project } : {project: Project} ) => {
  return (
    <div>
      <h2>Unix Project: {project.title}</h2>
      <p>{project.description}</p>
      {/* Add more details or components for Unix project */}
    </div>
  );
};

const WebProjectComponent = ({ project } : {project: Project}) => {
  return (
    <div>
      <h2>Web Project: {project.title}</h2>
      <p>{project.description}</p>
      {/* Add more details or components for Web project */}
    </div>
  );
};

const DevOpsProjectComponent = ({ project } : {project: Project}) => {
  return (
    <div>
      <h2>DevOps Project: {project.title}</h2>
      <p>{project.description}</p>
      {/* Add more details or components for DevOps project */}
    </div>
  );
};




// }

// export default function Project() {



//       const minishell = {
//         title: "minishell",
//         src: "c2montreal.png",
//         color: "#000000",
//         field: "unix",
//         usage: [
//           "./Minishell", "echo 'hello I'm insde my shell'", "hello I'm insde my shell",
//           "export VAR=otmane && echo hey $VAR", "hey otmane"
//         ],

//         description: "Recreating Bash like, using limited pre-defined functions in C language. Recreating Bash like, using limited pre-defined functions in C language. Recreating Bash like, using limited pre-defined functions in C language.",
//         skills: ['Problem Solving', 'Memory Managment', 'Tree and Linked Lists', 'Team Work', 'Paitent'],

//         date: "11-04-2023",
//         languages: ["C"],
//         video: "Gif video",
//         frameworks: [""],
//         pics: ["", "", ""],
//         id: 0,
//       }

//     const pathname = usePathname()
  

//     console.log( "pathname:",pathname)

//     return (
//         <div className="w-full h-[5000px] flex justify-center b-slate-400">
//             <div className="w-[1000px] h-[1900px] b-[#a84848] flex flex-col justify- items-center" >

//                 <div className="h-[200px] w-[95%] b-slate-600  ">
//                   <h1 className="text-5xl  pt-[100px] uppercase font-[tommy2] " >
//                     {minishell.title} ({minishell.field})
//                   </h1>
//                 </div>

//                 <div className=" w-[95%]" >
//                   <h1 className="text-3xl  pb-[30px] font-[tommy2]">
//                     Description
//                   </h1>
//                   <p className="text-[20px] ">
//                     {minishell.description}
//                   </p>
//                 </div>

//                 <div className="w-[95%]" >
//                   <h1 className="text-3xl pt-[50px] pb-[30px] font-[tommy2]">
//                     Usage
//                   </h1>
//                   <div className="b-[#000] w-[100%] h-[400px] rounded-[20px] ">
//                     <TerminalMinishell />
//                   </div>
//                 </div>

//                 <div className="w-[95%]" >
//                   <h1 className="text-3xl pt-[50px] pb-[30px] font-[tommy2]">
//                     Skills Gained
//                   </h1>
//                   <div className="b-[#3eabc4] w-[100%]">
//                       <ul>
//                         {
//                           minishell.skills.map( (skill, index) =>{
//                             return <li className="pb-4 text-2xl" key={index}>{skill}</li>
//                           })
//                         }
//                       </ul>
//                   </div>
//                 </div>

//                 <div className="w-[95%]" >
//                   <h1 className="text-3xl pt-[30px] pb-[30px] font-[tommy2]">
//                       Languages Used
//                   </h1>
//                   <div className="b-[#3eabc4] w-[100%]">
//                       <ul>
//                         {
//                           minishell.languages.map( (skill, index) =>{
//                             return <li className="pb-4 text-2xl" key={index}>{skill}</li>
//                           })
//                         }
//                       </ul>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     )