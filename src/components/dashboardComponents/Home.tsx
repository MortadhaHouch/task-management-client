import { useEffect, useRef } from "react";
import { Event, Status } from "../../../utils/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/all"
import { Button } from "../ui/button";
import { MdArrowRight } from "react-icons/md";
import { ArrowRightCircle } from "lucide-react";
import { useTheme } from "next-themes";
import {motion, useAnimation, useInView} from "framer-motion"
gsap.registerPlugin(ScrollTrigger)
let upcomingEvents:Event[] = [{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},{
    createdAt:"2024-12-14",
    description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    dueDate:"2024-12-15",
    id:"72574",
    isCancelled:false,
    isCompleted:true,
    isDeleted:false,
    modifiedAt:"2024-12-15",
    status:Status.DONE,
    title:"Lorem ipsum dolor"
},]
export default function Home() {
    let cardRefs = useRef<any[]>([]);
    let {theme} = useTheme();
    // useEffect(()=>{
    //     cardRefs.current?.forEach((item)=>{
    //         let timeLine = gsap.timeline()
    //         timeLine.from(item,{
    //             opacity:0,
    //             x:"-20px",
    //             stagger:.25,
    //             duration:.75,
    //             ease:"elastic.inOut",
    //             scrollTrigger:{
    //                 trigger:item,
    //                 scrub:true,
    //                 markers:true
    //             }
    //         },"-=.25").to(item,{
    //             opacity:1,
    //             x:"0",
    //             stagger:.25,
    //             duration:.75,
    //             ease:"elastic.inOut",
    //             scrollTrigger:{
    //                 trigger:item,
    //                 scrub:true,
    //                 markers:true
    //             }
    //         },"-=.25")
    //     })
    // },[])
    let divRef = useRef<HTMLDivElement|null>(null);
    let isInView = useInView(divRef);
    let animationControls = useAnimation();
    useEffect(()=>{
        if(isInView){
            animationControls.start("final")
        }else{
            animationControls.start("initial")

        }
    },[animationControls, isInView,theme])
    return (
        <section className='w-full h-full flex flex-col justify-start items-center gap-1 p-28'>
            <motion.h1 
                whileInView={{
                    left:10,
                    offset:100
                }}
                viewport={{
                    once:true
                }}
                style={{zIndex:100,}}
                className={`${theme=="light"?"text-blue-800":"text-blue-400"} sm:text-xl md:text-2xl lg:text-3xl backdrop-blur-lg w-full flex flex-row justify-center items-center`}
                >
                    <span
                        className={"absolute top-0 left-auto right-auto"}
                    >Recently Seen
                        <motion.div
                            ref={divRef}
                            initial="initial"
                            animate="final"
                            variants={{
                                initial:{
                                    width:"120%"
                                },final:{
                                    width:"0%"
                                }
                            }}
                            transition={{
                                duration:.75,
                                delay:.25,
                                ease:"easeInOut"
                            }}
                            style={{
                                position:"absolute",
                                height:"120%",
                                left:0,
                                top:0,
                                backgroundColor:theme == "light"?"rgb(134,239,172)":"rgb(59,130,246)"
                            }}
                        />
                    </span>
            </motion.h1>
            <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2 p-28'>
                {
                    upcomingEvents.map((item,index)=>(
                        <motion.div
                            whileInView={{
                                opacity:1,
                                x:"0px"
                            }}
                            viewport={{
                                margin:"100px"
                            }}
                            initial={{
                                opacity:0,
                                x:"-100px"
                            }}
                            transition={{
                                duration:.75,
                                ease:"easeInOut",
                                staggerChildren:.25,
                                staggerDirection:10,
                                stiffness:10,
                                delay:index*0.1
                            }}
                            key={index} 
                            style={{width:"clamp(250px,30%,400px)"}} 
                            id={item.id}
                            >
                            <Card ref={(el)=>{
                                if(el){
                                    cardRefs.current?.push(el)
                                }
                            }}>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardContent>
                                <CardFooter className="w-full flex flex-row justify-between items-center">
                                    <Button className="flex flex-row justify-between items-center gap-1 read-more-btn">
                                        <p>read about</p>
                                        <ArrowRightCircle size={20}/>
                                    </Button>
                                    <p className={`${item.isCompleted?"bg-green-300":"bg-red-300"} ${item.isCompleted?"text-green-500":"text-red-500"} pt-1 pb-1 pl-3 pr-3 rounded-md`}>{item.isCompleted?"accomplished":"pending"}</p>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}
