
'use client'
import React from "react";
import { ApearanceContext } from "@/app/context/Themecontext";
import { useContext } from "react";

export default function Project({index, title, field, setModal} : {index: number, title: string, field: string, setModal: any}) {

    const { theme } = useContext(ApearanceContext) || {};

    return (
        <div className={` w-[100%] h-[150px] border-t-[1px] ${index == 3 ? "border-b-[1px]" : ""} ${index == 0 ? "mt-[50px]" : ""}  ${theme == 'light' ? "border-[#000]" : "border-[#f3f3f3]"} b-slate-200 flex justify-between items-center`}>
            <div className="group hover:opacity-[0.4] w-full h-full flex justify-between items-center">
                <div className="w-[50%] b-slate-300 group-hover:translate-[-10px] flex justify-center items-center">
                    <h1 className="text-4xl" >{title}</h1>
                </div>
                <div className="w-[50%] b-slate-300 group-hover:transform group-hover:translate-[10px] flex justify-center items-center">
                    <h1>{field}</h1>
                </div>
            </div>
        </div>
    );
}