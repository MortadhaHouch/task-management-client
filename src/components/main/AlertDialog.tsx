"user client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import React, { Dispatch } from "react";
export function AlertDialogDemo({
    isShown,
    setIsShown,
    title,
    description,
    setTitle,
    setDescription
}:{
    isShown:boolean,
    setIsShown:Dispatch<React.SetStateAction<boolean>>,
    title:string,
    description:string,
    setTitle:Dispatch<React.SetStateAction<string>>
    setDescription:Dispatch<React.SetStateAction<string>>
}) {
    return (
        <AlertDialog open={isShown}>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>
                {description}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogAction onClick={()=>{
                    setIsShown(false);
                    setTitle("");
                    setDescription("");
                }}>Continue</AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}