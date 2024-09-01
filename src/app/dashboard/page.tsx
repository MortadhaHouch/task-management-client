"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { FaHome } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { FaSearch,FaTrash,FaCalendarDay } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAdd, MdGroups } from "react-icons/md";
import { useEffect, useState } from "react";
import Home from "../../components/dashboardComponents/Home"
import Notifications from "../../components/dashboardComponents/Notifications"
import Tasks from "../../components/dashboardComponents/Tasks"
import Search from "../../components/dashboardComponents/Search"
import Trash from "../../components/dashboardComponents/Trash"
import CreateTask from "@/components/dashboardComponents/CreateTask";
import Image from "next/image";
import { DataType, TabName, Task } from "../../../utils/types";
import { MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft } from "react-icons/md";
import fetchData from "../../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
import { useTheme } from "next-themes";
import { MdCancel } from "react-icons/md";
import Cancelled from "@/components/dashboardComponents/Cancelled";
import { MdPendingActions } from "react-icons/md";
import Pending from "@/components/dashboardComponents/Pending";
import {tasks as events} from "../../../utils/constants"
import MyCalendar from "@/components/dashboardComponents/Calendar";
export default function Dashboard() {
    let [dashboardItem,setDashboardItem] = useState<TabName>(TabName.HOME);
    let [tasks,setTasks] = useState<Task[]|[]>([]);
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [pagesCount,setPagesCount] = useState<number>(0);
    let [dataType,setDataType] = useState<DataType>(DataType.DAY);
    let {theme} = useTheme();
    // async function handleDataLoad(){
    //     try {
    //         let request = await fetchData("/task","GET",null,setIsLoading);
    //         let response = jwtDecode<any>(request.token);
    //         console.log(response);
    //         setTasks(response.tasks);
    //         setPagesCount(response.pagesCount);
    //     } catch (error) {
    //         console.log(error); 
    //     }
    //     }
    // useEffect(()=>{
    //     handleDataLoad()
    // },[])
    let [isShown,setIsShown] = useState<boolean>(false);
    return (
        <div className="w-full min-h-[150vh] flex flex-col justify-center items-center">
            <Sheet open={isShown} onOpenChange={setIsShown}>
                <SheetTrigger asChild>
                    <Button className="fixed top-[100px] left-[15px] backdrop-blur-xl z-50" onClick={()=>setIsShown(val=>!val)}>
                        {
                            isShown?(
                                <MdKeyboardDoubleArrowRight size={20}/>
                            ):(
                                <MdKeyboardDoubleArrowLeft size={20}/>
                            )
                        }
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                    <SheetTitle>Dashboard</SheetTitle>
                    {
                        JSON.parse(localStorage.getItem("isLoggedIn")??"false") &&
                        (
                            <div className="w-full h-full flex flex-col justify-start items-center gap-3 pt-4 pb-4">
                                <Image src={localStorage.getItem("avatar")??""} width={150} height={150} loading="lazy" alt="avatar" style={{borderRadius:"50%",width:150,height:150}}/>
                                <h2>{localStorage.getItem("firstName")??""} {localStorage.getItem("lastName")??""}</h2>
                                <h2>{localStorage.getItem("email")??""}</h2>
                            </div>
                        )
                    }
                    </SheetHeader>
                    <div className="flex flex-col justify-start items-center gap-2">
                        <div 
                            onClick={()=>setDashboardItem(TabName.HOME)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="home" && "bg-slate-400"}`}>
                            <FaHome size={20}/> Home
                        </div>
                        <div 
                            onClick={()=>setDashboardItem(TabName.TASKS)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="tasks" && "bg-slate-400"}`}>
                            <FcTodoList size={20}/> Tasks
                        </div>
                        <div 
                            onClick={()=>setDashboardItem(TabName.CREATE)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="create" && "bg-slate-400"}`}>
                            <MdAdd size={20}/> Create
                        </div>
                        <div 
                            onClick={()=>setDashboardItem(TabName.SEARCH)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="search" && "bg-slate-400"}`}>
                            <FaSearch size={20}/> Search
                        </div>
                        <div 
                            onClick={()=>setDashboardItem(TabName.CANCELLED)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="cancelled" && "bg-slate-400"}`}>
                            <MdCancel size={20}/> cancelled
                        </div>
                        <div 
                            onClick={()=>setDashboardItem(TabName.PENDING)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="pending" && "bg-slate-400"}`}>
                            <MdPendingActions size={20}/> pending
                        </div>
                        <div 
                            onClick={()=>setDashboardItem(TabName.NOTIFICATIONS)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="notifications" && "bg-slate-400"}`}>
                            <IoIosNotifications size={20}/> Notifications
                        </div>
                        <div 
                            onClick={()=>setDashboardItem(TabName.CALENDAR)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="calendar" && "bg-slate-400"}`}>
                            <FaCalendarDay size={20}/> Calendar
                        </div>
                        <div
                            onClick={()=>setDashboardItem(TabName.TRASH)}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="trash" && "bg-slate-400"}`}>
                            <FaTrash size={20}/> Trash
                        </div>
                    </div>
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
                dashboardItem.toLowerCase() == "calendar" && (
                    <MyCalendar setTasks={setTasks} tasks={events}/>
                )
            }
            {
                dashboardItem.toLowerCase() == "trash" && (
                    <Trash/>
                )
            }
            {
                dashboardItem.toLowerCase() == "cancelled" && (
                    <Cancelled/>
                )
            }
            {
                dashboardItem.toLowerCase() == "pending" && (
                    <Pending/>
                )
            }
    </div>
    )
}