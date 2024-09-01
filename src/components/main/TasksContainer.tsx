import React, { useEffect, useState } from 'react'
import { DataType, Task } from '../../../utils/types'
import TaskComponent from '../dashboardComponents/Task';
import Image from 'next/image';
import ErrorImageDark from "../../app/assets/icons/error-404-dark.svg"
import ErrorImageLight from "../../app/assets/icons/error-404-light.svg"
import { useTheme } from 'next-themes';
export default function TasksContainer({
    dataType,
    tasks,
    setTasks
}:{
    dataType:DataType
    tasks:Task[]
    setTasks?:React.Dispatch<React.SetStateAction<Task[]>>
}) {
    let {theme} = useTheme();
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
