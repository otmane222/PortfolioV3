
'use client'
import React from "react";
import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext } from "react";
import styles from "./style.module.css";
// import { SP } from "next/dist/shared/lib/utils";
// import Image from "next/image";

import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { CardType } from "@/types/indexTypes";

const ScrollCards = ({projects}: {projects: CardType[]}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-80%"]);
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section ref={targetRef} className="  h-[2000px] w-full bg-[#] b-emerald-300">
      <div className=" sticky top-[0px] flex items-center b-purple-500 h-[100dvh]  overflow-hidden">
        <motion.div style={{ x}} className="flex gap-4 bg-">
          {projects.map((project) => {
            return <Card card={project} key={project.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {

    const { theme } = useContext(ApearanceContext) || {};
    if (card.id == -1){
      return (
        <div className="w-[350px] h-[520px] pl-[50px] flex justify-center items-center">
          <Link href="/projects" className="text-4xl p-[20px] w-[300px] h-[300px] bg-[#333333] rounded-full  text-white hover:text-white flex items-center justify-center  ">
            More Projects
          </Link>
        </div>
      )
    }
    return (
    <div
    key={card.id}
    style={{backgroundColor:card.color}}
    className={`group flex flex-col items-center rounded-[10px] relative h-[520px] w-[310px] 400:w-[390px] 500:w-[400px]   overflow- `}
    >
        <div>
            <h1 className="w-full text-center text-4xl pt-[50px] pb-[20px]">
                {card.title}
            </h1>
        </div>
        <div className={` w-[90%]  h-[250px] rounded-[10px] transition-transform duration-300 `}
            style={{
                backgroundImage: `url(/projects/${card.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
             >
            {/* <Image src={`/projects/${card.title}`} width={400} height={0} alt={`${card.title}`} /> */}
        </div>
        <div className="w-[95%]">
            <p className="w-full text-center text-[20px] pt-[20px] mb-[10px] line-clamp-2 overflow-hidden">
                {card.description}
            </p>
        </div>
        <div className="w-[90%] h-[50px] flex justify-center items-center">
            <button className="w-[90%] h-[50px] bg-[#000000] text-white rounded-[10px]">
                <Link href={`/projects/${card.title}`} >
                    Read More
                </Link>
            </button>
        </div>

        <div className={`absolute uppercase rounded-[10px] top-[-10px] left-[-10px] flex justify-center items-center inset-0 z-50 p-[20px] ${theme == 'dark' ? "bg-white text-black" : "bg-black text-white"} w-[150px] h-[30px]`}>
            {card.field}
        </div>
    </div>
  );
};

export  { ScrollCards };







export function SProject() {

    return (
        <div className="bg-slate-400 m-1 w-[95%] flex justify-center h-[500px] md:w-[49%] md:min-w-[420px] min-w-[320px]" >
            <div className="w-[90%] h-[90%] bg-slate-300 flex flex-col justify-center items-center">

            </div>
        </div>
    )
}


type ModalState = { active: boolean; index: number };

export default function Project({index, title, field, setModal, num} :
    {
      index: number,
      title: string,
      field: string,
      setModal: React.Dispatch<React.SetStateAction<ModalState>>,
      num:number
    }
  )
  {

    const { theme } = useContext(ApearanceContext) || {};

    return (
        <>
          <Link href={`/projects/${title}`} key={title} className="w-full font-[tommy2] ">
              <div onMouseLeave={() => {setModal({active:false, index: index})}}
              onMouseEnter={() => {setModal({active: true, index: index})}}
              className={`${styles.project} w-[100%] h-[150px] border-t-[1px]
              ${index == num ? "border-b-[1px]" : ""} ${index == 0 ? "mt-[50px]" : ""}
              ${theme == 'light' ? "border-[#000]" : "border-[#f3f3f3]"}
                  b-slate-200 flex justify-between items-center`}>


                  <div className=" hover:opacity-[0.4]  ease-in-out w-full h-full flex justify-center items-center">
                      <div className="w-[40%] b-slate-300  ease-in-out  flex justify-start items-center">
                          <h1 className="text-4xl" >{title}</h1>
                      </div>
                      <div className="w-[40%] b-slate-300  ease-in-out flex justify-end items-center">
                          <p>{field}</p>
                      </div>
                  </div>
              </div>
            </Link>
        </>
    );
}