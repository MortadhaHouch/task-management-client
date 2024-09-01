"use client";
import { Tabs } from "../ui/tabs-component";
import { useEffect, useState } from "react";
import { DataType, Task } from "../../../utils/types";
import { useTheme } from "next-themes";
import fetchData from "../../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
import TasksContainer from "./TasksContainer";
export function TabsDemo() {
    let [tasks,setTasks] = useState<Task[]|[]>([]);
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [pagesCount,setPagesCount] = useState<number>(0);
    let [dataType,setDataType] = useState<DataType>(DataType.DAY);
    let {theme} = useTheme();
    async function handleDataLoad(){
        try {
            let request = await fetchData("/task","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            console.log(response);
            setTasks(response.tasks);
            setPagesCount(response.pagesCount);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleDataLoad()
    },[])
    const tabs = [
        {
            title: "by day",
            value: "by day",
            content: (
                <TasksContainer dataType={DataType.DAY} tasks={tasks}/>
            ),
        },
        {
            title: "by month",
            value: "by month",
            content: (
                <TasksContainer dataType={DataType.MONTH} tasks={tasks}/>
            ),
        },
        {
            title: "by year",
            value: "by year",
            content: (
                <TasksContainer dataType={DataType.YEAR} tasks={tasks}/>
            ),
        },
        {
            title: "Overdue",
            value: "Overdue tasks",
            content: (
                <TasksContainer dataType={DataType.OVERDUE} tasks={tasks}/>
            ),
        },
        {
            title: "cancelled",
            value: "cancelled tasks",
            content: (
                <TasksContainer dataType={DataType.CANCELLED} tasks={tasks}/>
            ),
        },
    ];

    return (
        <div
            style={{
                backgroundColor: theme === "dark"? "#19202C" : "#ffffff",
                fontFamily: "Poppins, sans-serif",
                display: "flex",
                flexDirection:"row",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "10px",
                padding: "10px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                transition: "box-shadow 0.3s ease",
                cursor: "pointer",
                position: "relative",
                transformStyle: "preserve-3d",
                transform: "rotateY(0deg)",
            }}
            className="h-full md:h-[40rem] w-full [perspective:1000px] relative flex flex-col max-w-5xl mx-auto items-start justify-start my-40">
            <Tabs tabs={tabs} setDataType={setDataType} dataType={dataType}/>
        </div>
    );
}