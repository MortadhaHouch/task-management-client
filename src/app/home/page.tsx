"use client"
import { InfiniteMovingCardsDemo } from "../../components/main/InfiniteMovingCardsDemo";
import { TypewriterEffectSmoothDemo } from "../../components/main/TypewriterEffectSmoothDemo";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Loader from "@/components/main/Loader";
import ThreeDCardDemo from "@/components/main/ThreeDCard";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import SkeletonComponent from "@/components/main/SkeletonComponent";
import { services } from "../../../utils/constants";
import Link from "next/link";
import fetchData from "../../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
import { useTheme } from "next-themes";
import { DataType, Feedback } from "../../../utils/types";
import { MovingBorderDemo } from "@/components/main/MovingBorderDemo";
const text = "Welcome to Taskia, the ultimate task management solution designed to help you stay on top of your work. Whether you are managing personal to-dos or collaborating with a team, our intuitive interface and powerful features make it easy to organize, prioritize, and track your tasks. Say goodbye to missed deadlines and hello to increased productivity!"
const Robot = dynamic(()=>import("../../../public/models/dom/Robot"),{ssr:false})
export default function Home() {
    let [isLoading,setIsLoading] = useState<boolean>(true);
    let animationControls = useAnimationControls();
    useEffect(()=>{
        handleDataLoad();
        setTimeout(()=>{
            setIsLoading(false);
            headingRef.current?.classList.add("animate");
        },4000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            animationControls.start("animateState")
        },4000)
    },[])
    let [feedbacks,setFeedbacks] = useState<Feedback[]|[]>([])
    let {theme} = useTheme();
    const headingRef = useRef<HTMLHeadingElement>(null);
    async function handleDataLoad(){
        try {
            let request = await fetchData("/feedback","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            console.log(response);
            setFeedbacks(response.feedbacks);
        } catch (error) {
            console.log(error); 
        }
    }
    return (
        <main 
            className="relative w-[100vw] h-full flex-col justify-start align-top pt-14">
                <section className="w-[100vw] min-h-[100vh] flex flex-row justify-center items-center flex-wrap">
                    <div 
                        className="flex flex-col justify-center items-center p-3" 
                        style={{
                            borderRadius:"10px",
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            backdropFilter: "blur(7.7px)",
                            border: "1px solid rgba(255, 255, 255, 0.48)",
                            width:"clamp(300px, 60%, 500px)",
                        }}>
                            <h2 ref={headingRef} className="text-2xl text-primary heading">Stay organized , achieve more</h2>
                        <motion.p 
                            initial="initialState"
                            animate="animateState"
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                type:"spring"
                            }}
                            variants={{
                                initialState:{
                                    x:-100,
                                    opacity:0,
                                    skewX:20
                                },
                                animateState:{
                                    x:0,
                                    opacity:1,
                                    skewX:0
                                }
                            }}
                            className="w-[80%] h-[100%] p-3 text-lg flex flex-row justify-start items-center flex-wrap gap-1">
                            {text}
                        </motion.p>
                        <MovingBorderDemo><Link href={"/get-started"} className="text-xl">Get started</Link></MovingBorderDemo>
                    </div>
                    <Canvas 
                        style={{
                            width:"400px",
                            height:"400px",
                            borderRadius:"10px",
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        }}
                        frameloop="always"
                        shadows>
                        <Suspense fallback={<SkeletonComponent/>}>
                            <Robot/>
                        </Suspense>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 10, 5]} intensity={1} />
                        <OrbitControls enableZoom={false} enableDamping={true}/>
                    </Canvas>
                </section>
            <section style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:15}}>
                <Suspense fallback={<SkeletonComponent/>}>
                    {
                        services.map((item,index)=>(
                            <div key={index}>
                                <ThreeDCardDemo title={item.title} description={item.description} href={item.href} imageURL={item.imageURL}/>
                            </div>
                        ))
                    }
                </Suspense>
            </section>
            {
                feedbacks.length > 0 && (
                    <InfiniteMovingCardsDemo feedbacks={feedbacks}/>
                )
            }
            <TypewriterEffectSmoothDemo/>
            {
                isLoading && (
                    <Loader type="loading"/>
                )
            }
        </main>
    )
}
