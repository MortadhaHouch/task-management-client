"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { FaSearch,FaTrash,FaCalendarDay } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Home from "../../components/dashboardComponents/Home"
import Calendar from "../../components/dashboardComponents/Calendar"
import Notifications from "../../components/dashboardComponents/Notifications"
import Teams from "../../components/dashboardComponents/Teams"
import Tasks from "../../components/dashboardComponents/Tasks"
import Search from "../../components/dashboardComponents/Search"
import Trash from "../../components/dashboardComponents/Trash"
import CreateTask from "@/components/main/CreateTask";
import { ArrowRight } from "lucide-react";
import {motion} from "framer-motion"
export default function Dashboard() {
    let [dashboardItem,setDashboardItem] = useState<string>("create")
    return (
        <div className="w-full min-h-[150vh] flex flex-col justify-center items-center relative">
            <Sheet>
                <SheetTrigger asChild style={{position:"absolute",top:100,left:"10px"}}>
                    <Button><ArrowRight/></Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                    <SheetTitle>dashboard</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save
                    </SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col justify-start items-center gap-2">
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:0,
                            }}
                            onClick={()=>setDashboardItem("home")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="home" && "bg-slate-400"} dashboard-item`}>
                            <FaHome size={20}/> Home
                        </motion.div>
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:0.25,
                                staggerChildren:.25
                            }}
                            onClick={()=>setDashboardItem("tasks")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="tasks" && "bg-slate-400"} dashboard-item`}>
                            <FcTodoList size={20}/> Tasks
                        </motion.div>
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:.5,
                                staggerChildren:.25
                            }}
                            onClick={()=>setDashboardItem("Create")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="tasks" && "bg-slate-400"} dashboard-item`}>
                            <IoIosAddCircle size={20}/> Create
                        </motion.div>
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:.75,
                                staggerChildren:.25
                            }}
                            onClick={()=>setDashboardItem("search")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="search" && "bg-slate-400"} dashboard-item`}>
                            <FaSearch size={20}/> Search
                        </motion.div>
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:1,
                                staggerChildren:.25
                            }}
                            onClick={()=>setDashboardItem("notifications")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="notifications" && "bg-slate-400"} dashboard-item`}>
                            <IoIosNotifications size={20}/> Notifications
                        </motion.div>
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:1.25,
                                staggerChildren:.25
                            }}
                            onClick={()=>setDashboardItem("teams")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="teams" && "bg-slate-400"} dashboard-item`}>
                            <MdGroups size={20}/> Teams
                        </motion.div>
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:1.5,
                                staggerChildren:.25
                            }}
                            onClick={()=>setDashboardItem("calendar")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="calendar" && "bg-slate-400"} dashboard-item`}>
                            <FaCalendarDay size={20}/> Calendar
                        </motion.div>
                        <motion.div
                            variants={{
                                initial:{
                                    opacity:0,
                                    x:"-100%"
                                },
                                final:{
                                    opacity:1,
                                    x:0
                                }
                            }}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration:0.75,
                                ease:"easeInOut",
                                delay:1.75,
                                staggerChildren:.25
                            }}
                            onClick={()=>setDashboardItem("trash")}
                            className={`flex flex-row justify-start items-center w-[100%] gap-2 cursor-pointer active:bg-slate-400 p-1 rounded-md ${dashboardItem.toLowerCase() =="trash" && "bg-slate-400"} dashboard-item`}>
                            <FaTrash size={20}/> Trash
                        </motion.div>
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