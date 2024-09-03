"use client";
import { Tabs } from "../ui/tabs-component";
import { useState } from "react";
import { DataType } from "../../../utils/types";
import { useTheme } from "next-themes";
import TasksContainer from "./TasksContainer";
export function TabsDemo() {
    let [dataType,setDataType] = useState<DataType>(DataType.DAY);
    let {theme} = useTheme();
    const tabs = [
        {
            title: "by day",
            value: "by day",
            content: (
                <TasksContainer dataType={dataType}/>
            ),
        },
        {
            title: "by month",
            value: "by month",
            content: (
                <TasksContainer dataType={DataType.MONTH}/>
            ),
        },
        {
            title: "by year",
            value: "by year",
            content: (
                <TasksContainer dataType={DataType.YEAR}/>
            ),
        },
        {
            title: "Overdue",
            value: "Overdue tasks",
            content: (
                <TasksContainer dataType={DataType.OVERDUE}/>
            ),
        },
        {
            title: "cancelled",
            value: "cancelled tasks",
            content: (
                <TasksContainer dataType={DataType.OVERDUE}/>
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