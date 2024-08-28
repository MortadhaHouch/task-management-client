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
export default function Feedbacks(){
    let [isLoading,setIsLoading] = useState<boolean>(true);
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
        <main className="w-[100vw] h-full flex-row justify-center items-center">
            {
                feedbacks.length > 0 ? (
                    feedbacks.map((item,index)=>{
                        return (
                            <CardDemo feedback={item} key={index}/>
                        )
                    })
                ):(
                    <Image width={300} height={300} alt='' src={theme == "dark"?Error404Dark:Error404Light}/>
                )
            }
        </main>
    )
}