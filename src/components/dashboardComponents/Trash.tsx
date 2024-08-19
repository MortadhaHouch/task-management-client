import React, { Suspense, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { tasks } from '../../../utils/constants';
import { CardSpotlightDemo } from '../main/HoverCard';
import { Skeleton } from '../ui/skeleton';
import { Input } from '../ui/input';
import { motion } from 'framer-motion'

export default function Trash() {
    let [searchTerms,setSearchTerms] = useState<string>("");
    return (
        <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
            <div>
                <Input type="search" id='search' placeholder='search task' onChange={(e)=>setSearchTerms(e.target.value)}/>
            </div>
            <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
                {
                    tasks.map((item,index)=>{
                        return(
                            <motion.div
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
                                    <Suspense fallback={<Skeleton/>}>
                                        <CardSpotlightDemo theme={true} data={item}/>
                                    </Suspense>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
