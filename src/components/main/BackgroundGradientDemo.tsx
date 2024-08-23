"use client";
import React, { useEffect, useRef } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import DropDown from "./DropDown";
import {motion, useInView} from "framer-motion"
export function BackgroundGradientDemo({
    item
}:{
    item:string
}) {
    let itemRef = useRef<HTMLDivElement|null>(null)
    let isInView = useInView(itemRef);
    useEffect(()=>{

    },[isInView])
    return (
        <motion.div 
            variants={{
                initial:{
                    opacity:0,
                    x:-10
                },
                final:{
                    opacity:1,
                    x:0
                }
            }}
            transition={{
                duration:0.5,
                ease:"easeInOut",
                type:"tween"
            }}
            style={{width:"300px",height:"500px"}} 
            ref={itemRef}>
            <BackgroundGradient className="relative rounded-[22px] max-w-sm p-1 sm:p-1 bg-slate-500 dark:bg-zinc-900 flex flex-col justify-center items-center overflow-hidden">
                <DropDown path="" className="absolute top-1 right-1 w-[320px] h-[60px] bg-slate-500 dark:bg-zinc-900 flex flex-row justify-end items-center"/>
                <iframe src={item} seamless frameBorder="0" style={{width:"300px",height:"600px",borderRadius:10,overflow:"hidden"}}></iframe>
            </BackgroundGradient>
        </motion.div>
    );
}
