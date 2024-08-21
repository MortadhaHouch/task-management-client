"use client"
import React, { ChangeEvent, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import NavigationMenu from '../main/Pagination';
import CarouselComponent from '../main/CarouselComponent';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Calendar from './Calendar';
import Editor from './Editor';
import fetchData from '../../../utils/fetchData';
import { jwtDecode } from 'jwt-decode';
import { Button } from '../ui/button';
import { AlertDialogDemo } from '../main/AlertDialog';
import { Status, Task, User } from '../../../utils/types';
import { tasks, users } from '../../../utils/constants';
import TaskTemplates from './TaskTemplates';
export default function CreateTask() {
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [taskName,setTaskName] = useState<string>("");
    let [taskDescription,setTaskDescription] = useState<string>("");
    let [isShown,setIsShown] = useState<boolean>(false);
    let [message,setMessage] = useState<string>("");
    let [error,setError] = useState<string>("");
    let [description,setDescription] = useState<string>("");
    let [events,setEvents] = useState<Task[]>([]);
    let [event,setEvent] = useState<Task>();
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
                let eventObject:Task = {
                    start:new Date(Date.now()),
                    end:new Date(Date.now() + 60 * 60 *24 *1000),
                    status:Status.PENDING,
                    title:taskName,
                    description:taskDescription,
                    content:"",
                    createdAt:new Date(Date.now()).toString(),
                    isCancelled:false,
                    isCompleted:false,
                    isDeleted:false,
                    modifiedAt:"",
                }
                setEvent(eventObject)
                setEvents((prev)=>[...prev,eventObject])
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
        <main className="w-full h-[150vh] flex flex-col justify-center items-center p-28">
            <Carousel style={{position:"relative",scrollSnapType:"x mandatory"}} className='w-full h-full flex flex-col justify-center items-center gap-4'>
                <CarouselContent className='w-full h-full flex flex-row justify-evenly items-start gap-4'>
                    <CarouselItem style={{scrollSnapAlign:"center"}} className='w-[100vw] min-h-[100vh] flex flex-col justify-center items-center'>
                        <form action="" onSubmit={handleSubmit} method="post" className='w-[60vw] h-full flex flex-col justify-center items-center gap-4'>
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
                    </CarouselItem>
                    <CarouselItem style={{scrollSnapAlign:"center"}} className='w-[100vw] min-h-[100vh] flex flex-col justify-center items-center p-5'>
                        <Calendar events={events} setEvents={setEvents}/>
                    </CarouselItem>
                    <CarouselItem style={{scrollSnapAlign:"center"}} className='w-[100vw] min-h-[100vh] flex flex-col justify-center items-center p-5 overflow-y-visible'>
                        <TaskTemplates/>
                    </CarouselItem>
                    <CarouselItem style={{scrollSnapAlign:"center"}} className='w-[100vw] min-h-[100vh] flex flex-col justify-center items-center p-5'>
                        <Editor/>
                    </CarouselItem>
                </CarouselContent>
                <div className='w-[300px] h-[35px] absolute bottom-[-20px] flex flex-row justify-around items-center z-50'>
                    <CarouselNext/>
                    <CarouselPrevious/>
                </div>
            </Carousel>
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
