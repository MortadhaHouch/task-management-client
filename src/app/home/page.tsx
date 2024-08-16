"use client"
import { CardSpotlightDemo } from "../../components/main/HoverCard";
import { InfiniteMovingCardsDemo } from "../../components/main/InfiniteMovingCardsDemo";
import GoogleGeminiEffectDemo from "../../components/main/PathAnimation";
import { TypewriterEffectSmoothDemo } from "../../components/main/TypewriterEffectSmoothDemo";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { GlobeDemo } from "@/components/main/Globe";
import { useAnimation, useInView,motion } from "framer-motion";
import Loader from "@/components/main/Loader";
import ThreeDCardDemo from "@/components/main/ThreeDCard";
import SVG1 from "../assets/icons/undraw_task_list_6x9d.svg"
import SVG2 from "../assets/icons/undraw_push_notifications_re_t84m.svg"
import SVG3 from "../assets/icons/task-management.svg"
import SVG4 from "../assets/icons/undraw_accept_tasks_re_09mv.svg"
import SVG5 from "../assets/icons/undraw_throw_away_re_x60k.svg"
import SVG6 from "../assets/icons/Inbox cleanup-rafiki.svg"
export default function Home() {
    let itemRef = useRef<HTMLDivElement|null>(null)
    let [isLoading,setIsLoading] = useState<boolean>(true);
    let isInView = useInView(itemRef,{
        once: true,
    });
    let animationControls = useAnimation();
    useEffect(()=>{
        if(isInView) {
            animationControls.start("final")
        }else{
            animationControls.start("initial")
        }
    },[animationControls, isInView])
    const services: { title: string; href: string; description: string;imageURL:string }[] = [
        {
            title: "Creating and editing tasks",
            href: "/features",
            description:"A user can create and edit daily tasks whenever they want to",
            imageURL:SVG1
        },
        {
            title: "Notifications",
            href: "/features",
            description:"Never worry about forgetting or omitting task processing and be up-to-date with the latest information about daily chores",
            imageURL:SVG2
        },
        {
            title: "Unlimited tasks management features",
            href: "/features",
            description:"Forget about the complexity and the diversity of your tasks and fall in love with the incredibly powerful and easy workflow of tasks management",
            imageURL:SVG3
        },
        {
            title: "Unlimited number of tasks",
            href: "/features",
            description: "Never worry about limitations of tasks management and create as many tasks as you need",
            imageURL:SVG4
        },
        {
            title: "Deleting and canceling tasks",
            href: "/features",
            description:"You can also cancel or delete tasks whenever you want",
            imageURL:SVG5
        },
        {
            title: "Easy task recovery and deletion",
            href: "/features",
            description:"You can also recover deleted tasks whenever you want",
            imageURL:SVG6
        },
    ]
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },4000)
    },[])
    return (
        <main 
            className="w-full h-full flex-col justify-start align-top">
            <GlobeDemo/>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:15}}>
                <Suspense>
                    {
                        services.map((item,index)=>(
                            <motion.div
                                initial="initial"
                                animate="final"
                                variants={{
                                    initial:{
                                        opacity: 0,
                                        filter:"blur(10px)",
                                        x:50
                                    },
                                    final:{
                                        opacity: 1,
                                        filter:"blur(0px)",
                                        x:0
                                    },
                                }}
                                transition={{
                                    duration:.5,
                                    delay:.25,
                                    staggerChildren:.25,
                                    ease:"easeInOut"
                                }}
                                key={index} 
                                ref={itemRef}>
                                <ThreeDCardDemo title={item.title} description={item.description} href={item.href} imageURL={item.imageURL}/>
                            </motion.div>
                        ))
                    }
                </Suspense>
            </div>
            <InfiniteMovingCardsDemo/>
            <TypewriterEffectSmoothDemo/>
            {
                isLoading && (
                    <Loader type="loading"/>
                )
            }
        </main>
    )
}
