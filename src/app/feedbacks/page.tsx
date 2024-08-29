"use client"
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import fetchData from "../../../utils/fetchData";
import { useTheme } from "next-themes";
import { Feedback } from "../../../utils/types";
import { Card } from "@/components/ui/card";
import { CardDemo } from "@/components/main/Card";
import Error404Light from "../../app/assets/icons/error-404-light.svg"
import Error404Dark from "../../app/assets/icons/error-404-dark.svg"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdPageview } from "react-icons/md";
import { Value } from "@radix-ui/react-select";
export default function Feedbacks(){
    let [isLoading,setIsLoading] = useState<boolean>(true);
    let [feedbacks,setFeedbacks] = useState<Feedback[]|[]>([]);
    let [componentName,setComponentName] = useState<string>("preview");
    let [text,setText] = useState<string>("");
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
        <main className="w-[100vw] h-full flex flex-col justify-start items-center mt-[100px]">
            <div className="flex gap-2 flex-row justify-center items-center">
                <Button className={`${componentName == "create"?"bg-primary":"bg-secondary"}`} onClick={()=>{
                    setComponentName("create")
                }}><IoAddCircleOutline size={20}/><span> create feedback</span></Button>
                <Button className={`${componentName == "preview"?"bg-primary":"bg-secondary"}`} onClick={()=>{
                    setComponentName("preview");
                    handleDataLoad();
                }}><MdPageview size={20}/><span> see feedbacks</span></Button>
            </div>
            {
                componentName == "create" && (
                    <div>
                        <div>
                            <label></label>
                            <textarea value={text} onChange={(e)=>setText(e.target.value)} style={{
                                width:"clamp(300px,40vw,500px)",
                                height:"clamp(300px,40vw,500px)",
                                resize:"none",
                            }}>
                            </textarea>
                            <Button onClick={async()=>{
                                try {
                                    let request = await fetchData("/feedback","GET",{
                                        content:Value
                                    },setIsLoading);
                                    let response = jwtDecode<any>(request.token);
                                } catch (error) {
                                    console.log(error);
                                }
                            }}>post</Button>
                        </div>
                    </div>
                )
            }
            {
                componentName == "preview" && (
                    feedbacks.length > 0 ? (
                        feedbacks.map((item,index)=>{
                            return (
                                <CardDemo feedback={item} key={index}/>
                            )
                        })
                    ):(
                        <Image style={{
                            width:"clamp(300px,40vw,500px)",
                            aspectRatio:1
                        }} alt='' src={theme == "dark"?Error404Dark:Error404Light}/>
                    )
                )
            }
        </main>
    )
}