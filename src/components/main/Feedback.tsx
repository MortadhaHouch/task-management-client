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
import { useState,useRef } from "react";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
export function Feedback({
    className,
    feedback
}:{
    className?:string
    feedback:FeedbackType
}) {
    let [isLoading,setIsLoading] = useState<boolean>(true);
    let likesContainerRef = useRef<HTMLSpanElement|null>(null);
    let dislikesContainerRef = useRef<HTMLSpanElement|null>(null);
    return (
        <Card className={cn("w-[380px]", className)}>
            <CardHeader className="flex flex-col justify-center items-center gap-2">
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
                <CardTitle className="text-lg">{feedback.author.firstName} {feedback.author.lastName}</CardTitle>
                <CardTitle className="text-base">{feedback.author.email}</CardTitle>
                <CardDescription>{feedback.content}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
            </CardContent>
            <CardFooter className="flex flex-row justify-center items-center gap-2">
                <Button className="w-full" disabled={!JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")} onClick={async()=>{
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
                    <AiFillLike size={15} color="white"/><span ref={likesContainerRef}>{feedback.likes}</span>
                </Button>
                <Button className="w-full" disabled={!JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")} onClick={async()=>{
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
                    <AiFillDislike size={15} color="white"/><span ref={dislikesContainerRef}>{feedback.dislikes}</span>
                </Button>
            </CardFooter>
        </Card>
    )
}
