"user client";
import { BellRing, Check } from "lucide-react"

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
import { Switch } from "@/components/ui/switch"
import { Feedback } from "../../../utils/types";
import { FcDislike, FcLike } from "react-icons/fc";
import fetchData from "../../../utils/fetchData";
import { Item } from "@radix-ui/react-navigation-menu";
import { useState } from "react";
export function CardDemo({
    className,
    feedback
}:{
    className?:string
    feedback:Feedback
}) {
    let [isLoading,setIsLoading] = useState<boolean>(true);
    return (
        <Card className={cn("w-[380px]", className)}>
        <CardHeader>
            <CardTitle>{feedback.authorName}</CardTitle>
            <CardTitle>{feedback.authorEmail}</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
        </CardContent>
        <CardFooter>
            <Button className="w-full" onClick={async()=>{
                try {
                    let request = await fetchData("/feedback/like","POST",{id:feedback.id},setIsLoading)
                } catch (error) {
                    console.log(error);
                }
            }}>
                <FcLike size={15}/>
            </Button>
            <Button className="w-full" onClick={async()=>{
                try {
                    let request = await fetchData("/feedback/dislike","POST",{id:feedback.id},setIsLoading)
                } catch (error) {
                    console.log(error);
                }
            }}>
                <FcDislike size={15}/>
            </Button>
        </CardFooter>
        </Card>
    )
}
