"use client"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import fetchData from "../../../utils/fetchData";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Task } from "../../../utils/types";
import { useCookies } from "react-cookie";

export function SwitchDemo({
    text,
    isChecked,
    setIsChecked,
    setTasks,
    id
}:{
    text:string,
    isChecked:boolean,
    setIsChecked:React.Dispatch<React.SetStateAction<boolean>>,
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>,
    id:string
}) {
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [cookie,,] = useCookies(["jwt_token"])
    return (
        <div className="flex items-center space-x-2">
            <Switch
                id="airplane-mode"
                checked={isChecked}
                onCheckedChange={async(val)=>{
                    setIsChecked(!val);
                    try {
                        let {task,message} = await fetchData("/task/cancel","PUT",{
                            isCancelled:val,
                            id
                        },cookie.jwt_token,setIsLoading);;
                        setIsChecked(task.isCancelled);
                        if(message.message && setTasks){
                            setTasks((tasks)=>tasks.filter((task)=>task.id !== id));
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}/>
            <Label htmlFor="airplane-mode">{text}</Label>
        </div>
    )
}