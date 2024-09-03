"use client"
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import fetchData from "../../../utils/fetchData";
import { useTheme } from "next-themes";
import { Feedback as FeedbackType } from "../../../utils/types";
import { Card } from "@/components/ui/card";
import { Feedback } from "@/components/main/Feedback";
import Error404Light from "../../app/assets/icons/error-404-light.svg"
import Error404Dark from "../../app/assets/icons/error-404-dark.svg"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdPageview } from "react-icons/md";
import { useToast } from "@/components/ui/use-toast";
export default function Feedbacks(){
    let [isLoading,setIsLoading] = useState<boolean>(true);
    let [feedbacks,setFeedbacks] = useState<FeedbackType[]|[]>([]);
    let [componentName,setComponentName] = useState<string>("preview");
    let [error,setError] = useState<string>("");
    let [text,setText] = useState<string>("");
    let {theme} = useTheme();
    let {toast} = useToast();
    async function handleDataLoad(){
        try {
            let request = await fetchData("/feedback","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            setFeedbacks(response.feedbacks);
        } catch (error) {
            console.log(error); 
        }
    }
    useEffect(()=>{
        handleDataLoad();
    },[])
    useEffect(()=>{
        setFeedbacks(feedbacks);
        console.log(feedbacks);
    },[feedbacks])
    return (
        <main className="w-[100vw] h-full flex flex-col justify-start items-center mt-[100px]">
            <div className="flex flex-row justify-center items-center flex-wrap gap-2">
                <Button className={`${componentName == "create"?"bg-primary":"bg-blue-700"}`} onClick={()=>{
                    setComponentName("create")
                }}><IoAddCircleOutline size={20}/><span> create feedback</span></Button>
                <Button className={`${componentName == "preview"?"bg-primary":"bg-blue-700"}`} onClick={()=>{
                    setComponentName("preview");
                    handleDataLoad();
                }}><MdPageview size={20}/><span> see feedbacks</span></Button>
            </div>
            {
                componentName == "create" && (
                    <section className="w-full h-screen flex flex-row justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <label htmlFor="content" className="text-base">Tell us about your experience</label>
                                <textarea id="content" value={text} onChange={(e)=>setText(e.target.value)} style={{
                                    width:"clamp(300px,40vw,400px)",
                                    height:"clamp(300px,40vh,400px)",
                                    resize:"none",
                                }}>
                                </textarea>
                                <Button onClick={async()=>{
                                    try {
                                        let request = await fetchData("/feedback/create","POST",{
                                            content:text
                                        },setIsLoading);
                                        let response = jwtDecode<any>(request.token);
                                        if(response.feedback){
                                            setFeedbacks([...feedbacks,response.feedback]);
                                            setText("");
                                            toast({
                                                title:"feedback created",
                                                description:"feedback has been created successfully",
                                            })
                                        }else if(response.error){
                                            setError(response.error);
                                            toast({
                                                title:"Error",
                                                description:response.error,
                                            })
                                        }
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}>post</Button>
                        </div>
                    </section>
                )
            }
            {
                componentName == "preview" && (
                    <section className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-2">
                        {
                            feedbacks.length > 0 ? (
                                feedbacks.map((item,index)=>{
                                    return (
                                        <Feedback feedback={item} key={index}/>
                                    )
                                })
                            ):(
                                <Image style={{
                                    width:"clamp(300px,40vw,500px)",
                                    aspectRatio:1
                                }} alt='' src={theme == "dark"?Error404Dark:Error404Light}/>
                            )
                        }
                    </section>
                )
            }
        </main>
    )
}