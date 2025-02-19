
'use client'
import React from "react";
import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext } from "react";
import styles from "./style.module.css";
import { SP } from "next/dist/shared/lib/utils";
import Image from "next/image";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollCards = () => {
  return (
    <div className="bg-">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[3000px] bg-">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {

    const { theme } = useContext(ApearanceContext) || {};
    return (
    <div
    key={card.id}
    className={`group flex flex-col items-center rounded-[10px] relative h-[520px] w-[310px] 400:w-[390px] 500:w-[400px] bg-[#333333]  overflow- `}
    >
        <div>
            <h1 className="w-full text-center text-4xl pt-[50px] pb-[20px]">
                {card.title}
            </h1>
        </div>
        <div className={` w-[90%]  h-[250px] rounded-[10px] transition-transform duration-300 hover:scale-110`}
            style={{
                backgroundImage: `url(/projects/${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
             >
            {/* <Image src={`/projects/${card.url}`} width={400} height={0} alt={`${card.title}`} /> */}
        </div>
        <div>
            <p className="w-full text-center text-[20px] pt-[20px] pb-[10px]">
                {card.description}
            </p>
        </div>
        <div className="w-[90%] h-[50px] flex justify-center items-center">
            <button className="w-[90%] h-[50px] bg-[#000000] text-white rounded-[10px]">
                <a href={`/projects/${card.url}`} target="_blank" rel="noreferrer">
                    Read More
                </a>
            </button>
        </div>
    {/* <div
        style={{
        backgroundImage: `url(/projects/${card.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    ></div>
    <div className="absolute inset-0 z-10 grid place-content-center">
    <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
    {card.title}
    </p>
    </div> */}

        <div className={`absolute uppercase rounded-[10px] top-[-10px] left-[-10px] flex justify-center items-center inset-0 z-50 p-[20px] ${theme == 'dark' ? "bg-white text-black" : "bg-black text-white"} w-[150px] h-[30px]`}>
            {card.field}
        </div>
    </div>
  );
};

export  { ScrollCards };

type CardType = {
    url: string;
    title: string;
    field: string;
    description: string;
    id: number;
};

const cards: CardType[] = [
  {
    url: "c2montreal.png",
    field: "unix",
    title: "MINI-SHELL",
    description: "A simple shell but not that simple taking Bash as a reference",
    id: 1,
  },
  {
    url: "officestudio.png",
    field: "web",
    title: "PONG SITE",
    description: "A simple shell",
    id: 2,
  },
  {
    url: "silencio.png",
    field: "Devops",
    title: "Inception",
    description: "A simple shell",
    id: 3,
  },
  {
    url: "locomotive.png",
    field: "",
    title: "Agency",
    description: "A simple shell",
    id: 4,
  },
  {
    url: "officestudio.png",
    field: "",
    title: "Title 5",
    description: "A simple shell",
    id: 5,
  },
  {
    url: "locomotive.png",
    field: "",
    title: "Title 6",
    description: "A simple shell",
    id: 6,
  },
  {
    url: "silencio.png",
    field: "",
    title: "Title 7",
    description: "A simple shell",
    id: 7,
  },
];




export function SProject({project}: {project: any}) {

    return (
        <div className="bg-slate-400 m-1 w-[95%] flex justify-center h-[500px] md:w-[49%] md:min-w-[420px] min-w-[320px]" >
            <div className="w-[90%] h-[90%] bg-slate-300 flex flex-col justify-center items-center">

            </div>
        </div>
    )
}



export default function Project({index, title, field, setModal} : {index: number, title: string, field: string, setModal: any}) {

    const { theme } = useContext(ApearanceContext) || {};

    return (
        <>
            <div onMouseLeave={() => {setModal({active:false, index: index})}}
            onMouseEnter={() => {setModal({active: true, index: index})}}
            className={`${styles.project} w-[100%] h-[150px] border-t-[1px]
            ${index == 3 ? "border-b-[1px]" : ""} ${index == 0 ? "mt-[50px]" : ""}
            ${theme == 'light' ? "border-[#000]" : "border-[#f3f3f3]"}
                b-slate-200 flex justify-between items-center`}>


                <div className=" hover:opacity-[0.4] transition-all duration-500 ease-in-out w-full h-full flex justify-center items-center">
                    <div className="w-[40%] b-slate-300 transition-all duration-500 ease-in-out  flex justify-start items-center">
                        <h1 className="text-4xl" >{title}</h1>
                    </div>
                    <div className="w-[40%] b-slate-300 transition-all duration-500 ease-in-out flex justify-end items-center">
                        <p>{field}</p>
                    </div>
                </div>
            </div>
        </>
    );
}