"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { FaHome } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { FaSearch,FaTrash,FaCalendarDay } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAdd, MdGroups } from "react-icons/md";
import { useState } from "react";
import Home from "../../components/dashboardComponents/Home"
import Calendar from "../../components/dashboardComponents/Calendar"
import Notifications from "../../components/dashboardComponents/Notifications"
import Teams from "../../components/dashboardComponents/Teams"
import Tasks from "../../components/dashboardComponents/Tasks"
import Search from "../../components/dashboardComponents/Search"
import Trash from "../../components/dashboardComponents/Trash"
import CreateTask from "@/components/dashboardComponents/CreateTask";
import Image from "next/image";
import { Task } from "../../../utils/types";
export default function Dashboard() {
    let [dashboardItem,setDashboardItem] = useState<string>("create");
    let [tasks,setTasks] = useState<Task[]|[]>([]);
    return (
        <div className="w-full min-h-[150vh] flex flex-col justify-center items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button>open sheet</Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                    <SheetTitle>Dashboard</SheetTitle>
                    {
                        JSON.parse(localStorage.getItem("isLoggedIn")??"false") &&
                        (
                            <div className="w-full h-full flex flex-col justify-start items-center gap-3 pt-4 pb-4">
                                <Image src={localStorage.getItem("avatar")??""} alt="avatar" width={150} height={150} style={{borderRadius:"50%"}}/>
                                <h2>{localStorage.getItem("firstName")??""}</h2>
                                <h2>{localStorage.getItem("lastName")??""}</h2>
                                <h2>{localStorage.getItem("email")??""}</h2>
                            </div>
                        )
                    }
                    </SheetHeader>
                    <div className="flex flex-col justify-start items-center gap-2">
                        <div 
                            onClick={()=>setDashboardItem("home")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="home" && "bg-slate-400"}`}>
                            <FaHome size={20}/> Home
                        </div>
                        <div 
                            onClick={()=>setDashboardItem("tasks")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="tasks" && "bg-slate-400"}`}>
                            <FcTodoList size={20}/> Tasks
                        </div>
                        <div 
                            onClick={()=>setDashboardItem("Create")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="search" && "bg-slate-400"}`}>
                            <MdAdd size={20}/> Create
                        </div>
                        <div 
                            onClick={()=>setDashboardItem("search")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="search" && "bg-slate-400"}`}>
                            <FaSearch size={20}/> Search
                        </div>
                        <div 
                            onClick={()=>setDashboardItem("notifications")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="notifications" && "bg-slate-400"}`}>
                            <IoIosNotifications size={20}/> Notifications
                        </div>
                        <div 
                            onClick={()=>setDashboardItem("teams")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="teams" && "bg-slate-400"}`}>
                            <MdGroups size={20}/> Teams
                        </div>
                        <div 
                            onClick={()=>setDashboardItem("calendar")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="calendar" && "bg-slate-400"}`}>
                            <FaCalendarDay size={20}/> Calendar
                        </div>
                        <div 
                            onClick={()=>setDashboardItem("trash")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="trash" && "bg-slate-400"}`}>
                            <FaTrash size={20}/> Trash
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            {
                dashboardItem.toLowerCase() == "home" && (
                    <Home/>
                )
            }
            {
                dashboardItem.toLowerCase() == "tasks" && (
                    <Tasks/>
                )
            }
            {
                dashboardItem.toLowerCase() == "create" && (
                    <CreateTask/>
                )
            }
            {
                dashboardItem.toLowerCase() == "search" && (
                    <Search/>
                )
            }
            {
                dashboardItem.toLowerCase() == "notifications" && (
                    <Notifications/>
                )
            }
            {
                dashboardItem.toLowerCase() == "teams" && (
                    <Teams/>
                )
            }
            {
                dashboardItem.toLowerCase() == "calendar" && (
                    <Calendar events={tasks} setEvents={setTasks}/>
                )
            }
            {
                dashboardItem.toLowerCase() == "trash" && (
                    <Trash/>
                )
            }
    </div>
    )
}