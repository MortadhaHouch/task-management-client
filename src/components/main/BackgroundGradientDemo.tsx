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
    return (
        <motion.div
            className="relative w-[350px] h-[650px] bg-slate-500 dark:bg-zinc-900 rounded-2xl"
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
            style={{width:"350px",height:"650px"}}>
                <DropDown path={item} className="absolute top-0 right-0 w-full h-[60px] bg-slate-500 dark:bg-zinc-900 flex flex-row justify-end items-center"/>
                <iframe src={item} frameBorder="0" style={{width:"350px",height:"650px",borderRadius:10,overflow:"hidden"}}></iframe>
        </motion.div>
    );
}
