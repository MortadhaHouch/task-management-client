"user client";
import { Terminal } from "lucide-react"

import {
Alert,
AlertDescription,
AlertTitle,
} from "@/components/ui/alert"
import React from 'react'

export default function AlertComponent({
    title,
    description
}:{
    title:string
    description:string
}) {
    return (
        <Alert>
            <Terminal className="h-4 w-4" onClick={()=>console.log("clicked")}/>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}
