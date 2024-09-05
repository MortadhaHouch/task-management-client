"user client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Feedback as FeedbackType } from "../../../utils/types";
import { AiFillLike,AiFillDislike } from "react-icons/ai";
import fetchData from "../../../utils/fetchData";
import { useState,useRef, Suspense, useEffect } from "react";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { Skeleton } from "../ui/skeleton";
import {motion, useAnimationControls, useInView} from "framer-motion"
export function Feedback({
    className,
    feedback,
    index
}:{
    className?:string
    feedback:FeedbackType
    index:number
}) {
    let [isLoading,setIsLoading] = useState<boolean>(true);
    let likesContainerRef = useRef<HTMLSpanElement|null>(null);
    let dislikesContainerRef = useRef<HTMLSpanElement|null>(null);
    let containerRef = useRef<HTMLDivElement|null>(null);
    let animationControls = useAnimationControls();
    let isInView = useInView(likesContainerRef, {once:true});
    useEffect(()=>{
        if(isInView) {
            animationControls.start("")
        }else {
            animationControls.stop();
        }
    },[isInView,animationControls])
    return (
        <Suspense fallback={<Skeleton/>}>
            <motion.div
                initial="initial"
                animate="animate"
                variants={{
                    initial:{
                        opacity:0,
                        y:50,
                    },
                    animate:{
                        opacity:1,
                        y:0,
                    },
                }}
                transition={{
                    duration:0.3,
                    ease:"easeInOut",
                    type:"spring",
                    delay:index*0.3
                }}
                ref={containerRef}
            >
                <Card className={cn("w-[380px]", className)} key={index}>
                    <CardHeader className="flex flex-row justify-start items-center gap-2">
                        <Image 
                            src={feedback.author?.avatar} 
                            alt={feedback.author.firstName} 
                            width={50} 
                            height={50}
                            style={{
                                border:`2px solid ${feedback.author.isLoggedIn ? "green":"red"}`,
                                width:50,
                                height:50,
                                borderRadius:"50%",
                                objectFit:"cover",
                            }}
                        />
                        <div className="flex flex-col justify-start items-center">
                            <CardTitle className="text-lg w-full text-start">{feedback.author.firstName} {feedback.author.lastName}</CardTitle>
                            <CardTitle className="text-base w-full text-start opacity-75">{feedback.author.email}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <CardDescription>{feedback.content}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-row justify-center items-center gap-2">
                        <Button className="w-full bg-gray-500" disabled={!JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")} onClick={async()=>{
                            try {
                                let request = await fetchData("/feedback/like","PUT",{id:feedback.id},setIsLoading);
                                let response = jwtDecode<any>(request.token);
                                console.log(request,request.token);
                                if(dislikesContainerRef.current && likesContainerRef.current){
                                    likesContainerRef.current.textContent = response.data.likes;
                                    dislikesContainerRef.current.textContent = response.data.dislikes;
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}>
                            <AiFillLike size={15} color="white"/>
                            <span ref={likesContainerRef} className="text-white">{feedback.likes}</span>
                        </Button>
                        <Button className="w-full bg-gray-500" disabled={!JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")} onClick={async()=>{
                            try {
                                let request = await fetchData("/feedback/dislike","PUT",{id:feedback.id},setIsLoading);
                                let response = jwtDecode<any>(request.token);
                                console.log(request,request.token);
                                if(dislikesContainerRef.current && likesContainerRef.current){
                                    likesContainerRef.current.textContent = response.data.likes;
                                    dislikesContainerRef.current.textContent = response.data.dislikes;
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}>
                            <AiFillDislike size={15} color="white"/>
                            <span ref={dislikesContainerRef} className="text-white">{feedback.dislikes}</span>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </Suspense>
    )
}
