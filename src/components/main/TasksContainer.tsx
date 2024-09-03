import React, { useEffect, useState } from 'react'
import { DataType, Status, Task } from '../../../utils/types'
import TaskComponent from '../dashboardComponents/Task';
import Image from 'next/image';
import ErrorImageDark from "../../app/assets/icons/error-404-dark.svg"
import ErrorImageLight from "../../app/assets/icons/error-404-light.svg"
import { useTheme } from 'next-themes';
import fetchData from '../../../utils/fetchData';
import { jwtDecode } from 'jwt-decode';
export default function TasksContainer({
    dataType,
}:{
    dataType:DataType
}) {
    let [tasks,setTasks] = useState<Task[]|[]>([]);
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [pagesCount,setPagesCount] = useState<number>(0);
    let {theme} = useTheme();
    async function handleDataLoad(){
        try {
            let request = await fetchData("/task","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            setTasks(response.tasks.filter((item:Task)=>{
                switch (dataType) {
                    case DataType.DAY:
                        return new Date(item.startingDate).getDate() === new Date().getDate();
                    case DataType.MONTH:
                        return new Date(item.startingDate).getMonth() === new Date().getMonth();
                    case DataType.YEAR:
                        return new Date(item.startingDate).getFullYear() === new Date().getFullYear();
                    case DataType.CANCELLED:
                        return item.status === Status.CANCELLED;
                    case DataType.OVERDUE:
                        return item.status === Status.OVERDUE;
                    default:
                        return item;
                }
            }));
            setPagesCount(response.pagesCount);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleDataLoad()
    },[])
    return (
        <div
            className='w-full h-full flex flex-row justify-center items-center flex-wrap overflow-y-scroll gap-2'
            style={{
                backgroundColor:theme == "light"?"#B3C8CF":"#021526",
                borderRadius:15
            }}
        >
            {
                tasks.length == 0 ?(
                    <Image 
                        src={theme == "dark"?ErrorImageDark:ErrorImageLight} 
                        alt="Error no items found"
                        style={{
                            width:"clamp(300px,40vw,500px)",
                            aspectRatio:1
                        }}
                    />
                ):(
                    tasks.map((item,index)=>{
                        return (
                            <TaskComponent key={index} item={item}/>
                        )
                    })
                )
            }
        </div>
    )
}
