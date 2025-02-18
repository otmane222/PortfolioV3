
'use client'
import React from "react";
import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext } from "react";
import styles from "./style.module.css";


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