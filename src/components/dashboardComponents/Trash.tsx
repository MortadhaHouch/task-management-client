import React, { Suspense, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { CardSpotlightDemo } from '../main/HoverCard'
import { motion } from 'framer-motion'
import { Skeleton } from '../ui/skeleton'
import fetchData from '../../../utils/fetchData'
import { jwtDecode } from 'jwt-decode'
import { Task } from '../../../utils/types'
import Image from 'next/image'
import Error404Light from "../../app/assets/icons/error-404-light.svg"
import Error404Dark from "../../app/assets/icons/error-404-dark.svg"
import { useTheme } from 'next-themes'
import { TbRestore } from "react-icons/tb";
export default function Trash() {
    let [searchTerms,setSearchTerms] = useState<string>("");
    let [tasks,setTasks] = useState<Task[]>();
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [pagesCount,setPagesCount] = useState<number>(0);
    let {theme} = useTheme();
    async function handleDataLoad(){
        try {
            let request = await fetchData("/task/deleted","GET",null,setIsLoading);
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
    return (
        <main className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
            {
                tasks && tasks.length > 0?(
                    <section className='w-full h-full flex flex-col justify-center items-center g-10'>
                        <div>
                            <Input type="search" id='search' placeholder='search task' onChange={(e)=>setSearchTerms(e.target.value)}/>
                        </div>
                        <div className='w-[75%] h-full flex flex-row justify-center items-center flex-wrap gap-2'>
                            {
                                tasks.map((item,index)=>{
                                    return(
                                        <motion.div
                                            className='relative'
                                            initial="initial"
                                            animate="animate"
                                            transition={{
                                                duration:.25,
                                                ease:"easeInOut",
                                                staggerChildren:.1,
                                                delay:0.2 * index
                                            }}
                                            variants={{
                                                initial:{
                                                    opacity:1,
                                                    transform:"translateY(30px)"
                                                },
                                                animate:{
                                                    opacity:item.title.includes(searchTerms)?1:0,
                                                    transform:`${item.title.includes(searchTerms)?"translateY(0)":"translateY(30px)"}`,
                                                    scale:`${item.title.includes(searchTerms)?"1":"0"}`,
                                                    display:`${item.title.includes(searchTerms)?"flex":"none"}`
                                                },
                                            }}
                                            key={index}>
                                                <TbRestore className='absolute right-[10px] top-[10px]' size={30}/>
                                                <Suspense fallback={<Skeleton/>}>
                                                    <CardSpotlightDemo theme={true} item={item}/>
                                                </Suspense>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                    </section>
                ):(
                    <Image alt='' src={theme == "dark"?Error404Dark:Error404Light}/>
                )
            }
        </main>
    )
}
