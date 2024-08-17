"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { FaHome } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { FaSearch,FaTrash,FaCalendarDay } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { useState } from "react";
import Home from "../../components/dashboardComponents/Home"
import Calendar from "../../components/dashboardComponents/Calendar"
import Notifications from "../../components/dashboardComponents/Notifications"
import Teams from "../../components/dashboardComponents/Teams"
import Tasks from "../../components/dashboardComponents/Tasks"
import Search from "../../components/dashboardComponents/Search"
import Trash from "../../components/dashboardComponents/Trash"
export default function Dashboard() {
    let [dashboardItem,setDashboardItem] = useState<string>("home")
    return (
        <div className="w-full min-h-[150vh] flex flex-col justify-center items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button>open sheet</Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                    <SheetTitle>dashboard</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save
                    </SheetDescription>
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
                    <Calendar/>
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