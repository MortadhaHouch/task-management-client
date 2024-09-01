"use client"
import React, {useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import Calendar from './Calendar';
import fetchData from '../../../utils/fetchData';
import { jwtDecode } from 'jwt-decode';
import { Button } from '../ui/button';
import { AlertDialogDemo } from '../main/AlertDialog';
import { Status, TabName, Task } from '../../../utils/types';
import {Swiper,SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Details from './Details';
import { tasks } from '../../../utils/constants';
export default function CreateTask() {
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [taskName,setTaskName] = useState<string>("");
    let [taskDescription,setTaskDescription] = useState<string>("");
    let [isShown,setIsShown] = useState<boolean>(false);
    let [message,setMessage] = useState<string>("");
    let [error,setError] = useState<string>("");
    let [description,setDescription] = useState<string>("");
    let [events,setEvents] = useState<Task[]>([]);
    let [pagesCount,setPagesCount] = useState<number>(0);
    let [selectedTemplate,setSelectedTemplate] = useState<string>("");
    let [componentName,setComponentName] = useState<TabName>(TabName.CREATE);
    let [isVerified,setIsVerified] = useState<boolean>(false);
    let [isConfirmed,setIsConfirmed] = useState<boolean>(false);
    let [isValidated,setIsValidated] = useState<boolean>(false);
    let [task,setTask] = useState<Task>({
        title:"",
        description:"",
        createdAt:new Date(),
        status:Status.PENDING,
        isCancelled:false,
        isDeleted:false,
        startingDate:new Date(Date.now() + 1),
        dueDate:new Date(Date.now() + 2),
    });
    let [tasksToUpdate,setTasksToUpdate] = useState<Task[]>([]);
    useEffect(()=>{
        console.log(selectedTemplate);
    },[selectedTemplate])
    async function handleDataLoad(){
        try {
            let request = await fetchData("/task","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            console.log(response);
            setEvents(response.tasks);
            if(response.pagesCount){
                setPagesCount(response.pagesCount);
            }
            if(response.error){
                setError(response.error);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleDataLoad()
    },[])
    async function handleSubmit(e:any){
        e.preventDefault();
        try {
            let request = await fetchData("/task/validate","POST",{
                name:taskName,
                description:taskDescription
            },setIsLoading)
            if(jwtDecode<any>(request.token).message){
                setIsShown(true)
                setMessage(jwtDecode<any>(request.token).message);
                setDescription(jwtDecode<any>(request.token).description);
                setTask({
                    title:taskName,
                    description:taskDescription,
                    createdAt:new Date(),
                    status:Status.PENDING,
                    isCancelled:false,
                    isDeleted:false,
                    startingDate:new Date(Date.now() + 1),
                    dueDate:new Date(Date.now() + 2),
                })
                setEvents((prev) => [...prev,task]);
                setIsVerified(true);
            }
            if(jwtDecode<any>(request.token).task_exists){
                setIsShown(true)
                setError(jwtDecode<any>(request.token).task_exists);
                setDescription(jwtDecode<any>(request.token).description);
            }
            if(jwtDecode<any>(request.token).error){
                setIsShown(true)
                setError(jwtDecode<any>(request.token).error);
                setDescription(jwtDecode<any>(request.token).description);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="relative w-full h-[150vh] flex flex-col justify-center items-center p-28">
            <div className='w-[200px] backdrop-blur-xl fixed top-[80px] h-auto flex flex-row justify-between items-center z-20' style={{width:"200px"}}>
                <div className="absolute w-full h-[10px] bg-slate-500 -z-10 flex flex-rol justify-center items-center" style={{
                    boxShadow:"rgba(0,0,0,)"
                }}>
                    <span className={`${isVerified && "w-[50%]"} ${isVerified && (isConfirmed && "w-full")} h-[6px]`}></span>
                </div>
                <Button
                    className={`bg-blue-500`}
                    onClick={()=>{
                        setComponentName(TabName.CREATE)
                    }}
                >1</Button>
                <Button
                    style={{
                        backgroundColor:`${isVerified && isConfirmed?"rgba(0,255,0,1)":"rgba(255,0,0,1)"}`,
                    }}
                    disabled={!isVerified}
                    onClick={()=>{
                        setComponentName(TabName.CALENDAR)
                    }}
                >2</Button>
                <Button 
                    style={{
                        backgroundColor:`${isVerified && isConfirmed && isValidated?"rgba(0,255,0,1)":"rgba(255,0,0,1)"}`,
                    }}
                    disabled={!(isVerified && isConfirmed)}
                    onClick={()=>{
                        setComponentName(TabName.DETAILS)
                    }}
                >3</Button>
            </div>
            {
                componentName == TabName.CREATE && (
                    <form action="" method="post" onSubmit={handleSubmit} className='w-[60vw] h-full flex flex-col justify-center items-center gap-4'>
                        <div className='lg:w-[60%] md:w-[70%] sm:w-[80%] flex flex-col justify-center items-center gap-3'>
                            <Label htmlFor='title' className='text-xl w-full text-start'>Enter a Task Title</Label>
                            <Input value={taskName} id='title' type='text' placeholder='Task Title' style={{width:"100%"}} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTaskName(e.target.value)}/>
                        </div>
                        <div className='lg:w-[60%] md:w-[70%] sm:w-[80%] flex flex-col justify-center items-center gap-3'>
                            <Label htmlFor='description' className='text-xl w-full text-start'>Give it a description task description</Label>
                            <textarea value={taskDescription} id='description' style={{width:"100%"}} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setTaskDescription(e.target.value)}></textarea>
                        </div>
                        <Button>validate task</Button>
                    </form>
                )
            }
            {
                componentName == TabName.CALENDAR && (
                    <Calendar 
                        tasks={events} 
                        setTasks={setEvents} 
                        tasksToUpdate={tasksToUpdate} 
                        setTasksToUpdate={setTasksToUpdate}
                        isConfirmed={isConfirmed}
                        setIsConfirmed={setIsConfirmed}
                        setComponentName={setComponentName}
                    />
                )
            }
            {
                componentName == TabName.DETAILS && (
                    <Details task={task}/>
                )
            }
            {
                isShown && (
                    <AlertDialogDemo 
                        isShown={isShown} setIsShown={setIsShown}
                        title={message||error}
                        setTitle={setMessage}
                        description={description}
                        setDescription={setDescription}
                    />
                )
            }
        </main>
    );
}
