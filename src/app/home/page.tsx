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
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import SkeletonComponent from "@/components/main/SkeletonComponent";
import { Button } from "@/components/ui/button";
import { services } from "../../../utils/constants";
import Link from "next/link";
import fetchData from "../../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
import { useTheme } from "next-themes";
import { DataType, Feedback } from "../../../utils/types";
import { LinkPreviewDemo } from "@/components/main/LinkPreviewDemo";
const Robot = dynamic(()=>import("../../../public/models/dom/Robot"),{ssr:false})
export default function Home() {
    let [isLoading,setIsLoading] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },4000)
    },[])
    let [feedbacks,setFeedbacks] = useState<Feedback[]|[]>([])
    let {theme} = useTheme();
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
    useEffect(()=>{
        handleDataLoad()
    },[])
    return (
        <main 
            className="w-[100vw] h-full flex-col justify-start align-top pt-14">
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
                        <p 
                            className="w-[80%] h-[100%] p-3">
                            Stay Organized, Achieve More
                            Welcome to Taskia, the ultimate task management solution designed to help you stay on top of your work. Whether you&apos;re managing personal to-dos or collaborating with a team, our intuitive interface and powerful features make it easy to organize, prioritize, and track your tasks. Say goodbye to missed deadlines and hello to increased productivity!
                        </p>
                        <Button><LinkPreviewDemo href={"/dashboard"} title="Get started"/></Button>
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
