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
import React, { Dispatch, useRef, useState } from "react";
import { Comment as CommentType, Feedback } from "../../../utils/types";
import Image from 'next/image'
import Error404Light from "../../app/assets/icons/error-404-light.svg"
import Error404Dark from "../../app/assets/icons/error-404-dark.svg"
import { useTheme } from "next-themes";
import Comment from "./Comment";
import { MdComment } from "react-icons/md";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { IoIosSend } from "react-icons/io";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";
import fetchData from "../../../utils/fetchData";
import { IoCloseSharp } from "react-icons/io5";
export function AlertDialogDemo({
    isShown,
    setIsShown,
    title,
    description,
    setTitle,
    setDescription,
    setComments,
    comments,
    feedback
}:{
    isShown:boolean,
    setIsShown:Dispatch<React.SetStateAction<boolean>>,
    title?:string,
    description?:string,
    setTitle?:Dispatch<React.SetStateAction<string>>
    setDescription?:Dispatch<React.SetStateAction<string>>
    comments?:CommentType[],
    setComments?:Dispatch<React.SetStateAction<CommentType[]>>,
    feedback?:Feedback
}) {
    let {theme} = useTheme();
    let likesContainerRef = useRef<HTMLSpanElement|null>(null);
    let dislikesContainerRef = useRef<HTMLSpanElement|null>(null);
    let [isLoading,setIsLoading] = useState<boolean>(true);
    let [isTextareaShown,setIsTextareaShown] = useState<boolean>(false);
    let [feedbackComment,setFeedbackComment] = useState<string>("");
    return (
        <AlertDialog open={isShown}>
            <AlertDialogContent>
                {
                    title && description && (
                        <>
                            <AlertDialogHeader>
                                <AlertDialogTitle>{title}</AlertDialogTitle>
                                <AlertDialogDescription>
                                {description}
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction onClick={()=>{
                                    setIsShown(false);
                                    if(setTitle && setDescription){
                                        setTitle("");
                                        setDescription("");
                                    }
                                }}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </>
                    )
                }
                {
                    feedback && comments && (
                        <section className="flex flex-col justify-start items-center gap-4">
                            <Button 
                                className="bg-red-500 absolute top-2 right-2"
                                onClick={()=>setIsShown(false)}
                            ><IoCloseSharp size={20} color="white" strokeLinecap="round"/></Button>
                            <Card className={"w-[400px]"}>
                                    <CardHeader className="flex flex-row justify-start items-center gap-2">
                                        <Image 
                                            src={feedback.author?.avatar} 
                                            alt={feedback.author?.firstName} 
                                            width={50} 
                                            height={50}
                                            style={{
                                                border:`2px solid ${feedback.author?.isLoggedIn ? "green":"red"}`,
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
                                <CardFooter className="flex flex-col justify-center items-center gap-2">
                                    <div className="w-full flex flex-row justify-center items-center gap-1">
                                        <Button 
                                            className="w-full bg-gray-500" 
                                            disabled={!JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")}
                                            onClick={async()=>{
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
                                            }}
                                            >
                                            <AiFillLike size={15} color="white"/>
                                            <span ref={likesContainerRef} className="text-white">{feedback.likes}</span>
                                        </Button>
                                        <Button className="w-full bg-gray-500" disabled={!JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")} onClick={async()=>{
                                            try {
                                                let request = await fetchData("/feedback/dislike","PUT",{id:feedback.id},setIsLoading);
                                                let response = jwtDecode<any>(request.token);
                                                if(dislikesContainerRef.current && likesContainerRef.current){
                                                    likesContainerRef.current.textContent = response.data.likes;
                                                    dislikesContainerRef.current.textContent = response.data.dislikes;
                                                }
                                            } catch (error) {
                                                console.log(error);
                                            }
                                        }}>
                                            <AiFillDislike size={15} color="white"/>
                                            <span className="text-white" ref={dislikesContainerRef}>{feedback.dislikes}</span>
                                        </Button>
                                        <Button className="w-full bg-gray-500" onClick={()=>{setIsTextareaShown((val)=>!val)}}>
                                            <MdComment size={20} color="white"/> <span className="text-white">{feedback.commentsCount}</span>
                                        </Button>
                                    </div>
                                    <div className={`w-full flex flex-row ${isTextareaShown ? "block":"hidden"} min-h-[100px]`}>
                                        <textarea 
                                            className="w-[90%] h-full"
                                            value={feedbackComment} 
                                            name="" 
                                            id="" 
                                            onChange={(e)=>{setFeedbackComment(e.target.value)}}
                                        ></textarea>
                                        <Button 
                                            disabled={feedbackComment.length == 0}
                                            onClick={async()=>{
                                                try {
                                                    let request = await fetchData("/comment/create","POST",{feedbackId:feedback.id,content:feedbackComment},setIsLoading);
                                                    let response = jwtDecode<any>(request.token);
                                                    if(response.comment && setComments){
                                                        setComments([...comments,response.comment]);
                                                    }
                                                } catch (error) {
                                                    console.log(error);
                                                }
                                            }}
                                        ><IoIosSend size={20} color="white"/></Button>
                                    </div>
                                </CardFooter>
                            </Card>
                            {
                                comments.length > 0 ?(
                                    comments.map((comment)=>{
                                        return (
                                            <Comment key={comment.id} comment={comment}/>
                                        )
                                    })
                                ):(
                                    <>
                                        <h1 className="text-center">No comments yet !! be the first to comment</h1>
                                        <Image alt='' src={theme == "dark"?Error404Dark:Error404Light}/>
                                    </>
                                )
                            }
                        </section>
                    )
                }
            </AlertDialogContent>
        </AlertDialog>
    )
}