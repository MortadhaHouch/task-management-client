"use client"
import moment from "moment";
import { Event, Task } from "../../../utils/types";
import { CardSpotlight } from "../ui/card-spotlight";
import { Button } from "../ui/button";
import { TbEyeEdit } from "react-icons/tb";
import { MdCheck, MdClose, MdEdit, MdTimer } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from "../ui/drawer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {motion, useMotionValue} from "framer-motion";
import { useSpring } from "framer-motion";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SwitchDemo } from "./SwitchDemo";
import { RiDeviceRecoverLine } from "react-icons/ri";
import fetchData from "../../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
export function CardSpotlightDemo({
  theme,
  setTasks,
  item
}:{
  theme:boolean,
  setTasks?:React.Dispatch<React.SetStateAction<Task[]>>,
  item:Task,
}) {
  let formattedDate = moment(item.createdAt).format("YYYY-MM-DD")
  let formattedDueDate = moment(item.dueDate).format("YYYY-MM-DD")
  let formattedModifiedAtDate = moment(item.modifiedAt).format("YYYY-MM-DD");
  let [isChecked,setIsChecked] = useState<boolean>(false);
  let [isLoading,setIsLoading] = useState<boolean>(false);
  let headerRef = useRef<HTMLElement|null>(null);
  let [isOpen,setIsOpen] = useState<boolean>(false);
  let [isContentEditable,setIsContentEditable] = useState<boolean>(false);
  let [updatedTitle,setUpdatedTitle] = useState<string>("");
  let [updatedDescription,setUpdatedDescription] = useState<string>("");
  let titleRef = useRef<HTMLHeadingElement|null>(null);
  let descriptionRef = useRef<HTMLHeadingElement|null>(null);
  return (
    <CardSpotlight className="relative h-[310px] w-[310px] border-r-2 flex-col justify-center align-middle p-2 overflow-hidden"
      style={{
        backgroundColor:theme?"rgba(32, 30, 67, 0.75)":"rgba(235, 244, 246, 0.75)"
      }}
    >
      <Drawer open={isOpen}>
        <DrawerTrigger>
          <Button className="absolute top-2 right-2" onClick={()=>setIsOpen(true)}><TbEyeEdit size={20}/></Button>
        </DrawerTrigger>
        <DrawerContent className="w-full h-full max-h-[80vh] flex flex-col justify-center items-center flex-wrap">
          <DrawerHeader>
            <motion.header 
              ref={headerRef} 
              className="relative mx-auto w-full max-w-sm flex flex-col justify-center items-center"
              initial="initial"
              animate="animate"
              transition={{
                duration:1.5,
                ease:"easeInOut"
              }}
              variants={{
                initial:{
                  clipPath:"polygon(0 0, 100% 0%, 100% 0, 0 0)"
                },
                animate:{
                  clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0 100%)"
                }
              }}
            >
              {
                item.coverImage && item.coverImage.length > 0 && (
                  <Image 
                    src={item.coverImage} 
                    alt=""
                    width={headerRef.current?.getBoundingClientRect().width||400} 
                    height={100} 
                    className="rounded" 
                    style={{
                      objectFit:"cover",
                      objectPosition:"center",
                      width:headerRef.current?.getBoundingClientRect().width,
                      height:100
                    }}
                  />
                )
              }
              {
                item.thumbnail && item.thumbnail.length > 0 && (
                  <Image 
                    src={item.thumbnail} 
                    alt="" 
                    width={60} 
                    height={60} 
                    className="rounded" 
                    style={{
                      objectFit:"cover",
                      objectPosition:"center",
                      width:60,
                      height:60,
                      borderRadius:"50%",
                      position: "absolute",
                      top:"50%",
                      left:"10%"
                    }}
                  />
                )
              }
              <h2 
                className="text-xl pl-20" 
                contentEditable={isContentEditable}
                ref={titleRef}
                onKeyDown={()=>setUpdatedTitle(titleRef.current?.textContent||"")}
              >{item.title}</h2>
            </motion.header>
          </DrawerHeader>
          <DrawerDescription 
            ref={descriptionRef} 
            contentEditable={isContentEditable}
            onKeyDown={()=>setUpdatedDescription(descriptionRef.current?.textContent||"")}
          >
            {
              item.description.split(" ").map((el,id)=>{
                return (
                  <>
                    <motion.span 
                      key={id}
                      initial="initialState"
                      animate="finalState"
                      transition={{
                        duration:.5,
                        ease:"easeInOut",
                        delay:id*.5
                      }}
                      variants={{
                        initialState:{
                          clipPath:"polygon(0 0, 100% 0%, 100% 0, 0 0)"
                        },
                        finalState:{
                          clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0 100%)"
                        }
                      }}
                    >{el}</motion.span>{" "}
                  </>
                )
              })
            }
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                duration:1.5,
                ease:"easeInOut"
              }}
              variants={{
                initial:{
                  clipPath:"polygon(0 0, 100% 0%, 100% 0, 0 0)"
                },
                animate:{
                  clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0 100%)"
                }
              }}
              className="w-full h-full flex flex-col justify-center items-center z-50">
                <motion.ul
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration:1.5,
                    ease:"easeInOut"
                  }}
                  variants={{
                    initial:{
                      clipPath:"polygon(0 0, 100% 0%, 100% 0, 0 0)"
                    },
                    animate:{
                      clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0 100%)"
                    }
                  }}
                  className="list-none  mt-2">
                  <Step index={0} theme={theme} title={item.isCancelled?"task cancelled":"task still active"} component={item.isCancelled?<MdClose color="yellow"/>:<MdTimer color="green" size={20}/>}/>
                  <Step index={1} theme={theme} title={`created at ${formattedDate}`} component={<MdTimer size={20} color="rgba(0,100,255,.5)"/>}/>
                  <Step index={2} theme={theme} title={`due date ${formattedDueDate}`} component={<MdTimer color={item.dueDate.toString()<Date.now().toString()?"red":"green"} size={20}/>}/>
                  <Step index={3} theme={theme} title={`modified at ${formattedModifiedAtDate}`} component={<MdEdit size={20}/>}/>
                </motion.ul>
                {
                  item.isDeleted?(
                    <Button 
                      className="w-100 bg-green-600"
                      onClick={async()=>{
                        try {
                          let request = await fetchData("/task/recover","PUT",{id:item.id},setIsLoading);
                          let response = jwtDecode<any>(request.token);
                          if(response.message && setTasks){
                            setIsOpen(false);
                            setTasks((tasks)=>tasks.filter((task)=>task.id !== item.id));
                          }
                          console.log(response);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    ><RiDeviceRecoverLine size={20} color="green"/>click to recover</Button>
                  ):(
                    <div className="w-100 flex flex-col justify-center items-center z-50">
                      <div className="w-full h-auto flex flex-row justify-center items-center">
                        <SwitchDemo text="" 
                          isChecked={item.isCancelled||isChecked} 
                          setIsChecked={setIsChecked}
                          setTasks={setTasks}
                          id={item.id}
                        />
                        <p className="text-primary text-start">{item.isCancelled?"click to undo cancel":"click to cancel"}</p>
                      </div>
                      <div className="w-full h-auto flex flex-row justify-center items-center">
                        <RiDeleteBin5Line 
                          size={20} 
                          color="red"
                          className="cursor-pointer"
                          onClick={async()=>{
                            try {
                              let request = await fetchData("/task/delete/"+item.id,"DELETE",null,setIsLoading);
                              let response = jwtDecode<any>(request.token);
                              if(response.message && setTasks){
                                setIsOpen(false);
                                setTasks((tasks)=>tasks.filter((task)=>task.id !== item.id));
                              }
                              console.log(response);
                            } catch (error) {
                              console.log(error);
                            }
                        }}/>
                        <p className="text-primary text-start">{item.isDeleted?"click to recover":"click to delete"}</p>
                      </div>
                    </div>
                  )
                }
            </motion.div>
            {
              (updatedTitle.trim() !== item.title && updatedDescription.trim() !== item.description) && (
                <Button onClick={async()=>{
                  try {
                    let request = await fetchData("/task/update","PUT",[{title:updatedTitle,description:updatedDescription}],setIsLoading);
                    let response = jwtDecode<any>(request.token);
                    if(response.message && setTasks){
                      setTasks((tasks)=>[...tasks,{...item,title:updatedTitle,description:updatedDescription}]);
                      setIsContentEditable(false);
                      setIsOpen(false);
                      setUpdatedTitle("");
                      setUpdatedDescription("");
                    }
                  }catch (error) {
                    console.log(error);
                  }
                }}>update changes</Button>
              )
            }
            <Button></Button>
          </DrawerDescription>
          <DrawerFooter className="w-[40%] h-[60px]">
            <DrawerClose><Button className="w-full bg-primary"><MdOutlineClose size={20}/>{" "}close</Button></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <motion.div 
        className="w-full h-full flex flex-col justify-center items-center z-50">
        <motion.p
          initial="initial"
          animate="animate"
          transition={{
            duration:1.5,
            ease:"easeInOut"
          }}
          variants={{
            initial:{
              clipPath:"polygon(0 0, 100% 0%, 100% 0, 0 0)"
            },
            animate:{
              clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0 100%)"
            }
          }}
          className="text-xl font-bold relative z-20 mt-2" 
          style={{color:theme?"#77E4C8":"#17153B"}}>
          {item.title.slice(0,20)}{item.title.length > 20 && "..."}
        </motion.p>
        <div className="mt-4 relative z-20">
          <motion.p className={`${theme?"text-slate-200":"text-slate-800"}`}>{item.description.slice(0,20)}{item.description.length > 20 && "..."}</motion.p>
          <motion.ul className="list-none mt-2">
            <Step theme={theme} index={0} title={item.isCancelled?"task cancelled":"task still active"} component={item.isCancelled?<MdClose color="yellow"/>:<MdTimer color="green" size={20}/>}/>
            <Step theme={theme} index={1} title={`created at ${formattedDate}`} component={<MdTimer size={20} color="rgba(0,100,255,.5)"/>}/>
            <Step theme={theme} index={2} title={`due date ${formattedDueDate}`} component={<MdTimer color={item.dueDate.toString()<Date.now().toString()?"red":"green"} size={20}/>}/>
            <Step theme={theme} index={3} title={`modified at ${formattedModifiedAtDate}`} component={<MdEdit size={20}/>}/>
          </motion.ul>
        </div>
        <motion.div className="w-100 flex flex-row justify-between items-center z-50">
          <Button className={`${item.isCancelled?"text-red-600":"text-green-600"} ${item.isCancelled?"bg-red-300":"bg-green-300"} hover:${item.isCancelled?"bg-red-300 text-red-600":"bg-green-300 text-green-600"}`}>{item.isCancelled?"task cancelled":"task still active"}</Button>
        </motion.div>
      </motion.div>
    </CardSpotlight>
  );
}

const Step = ({ title,theme,component,index }: {index:number, title: string,theme:boolean,component:React.ReactNode }) => {
  let motionX = useMotionValue(45);
  const string = useSpring(motionX, { stiffness: 100, damping: 10 });
  useEffect(()=>{
    string.set(0)
  },[string])
  return (
    <motion.li 
      initial="initial"
      animate="animate"
      transition={{
        duration:1.5,
        ease:"easeInOut",
        delay:index*0.2
      }}
      variants={{
        initial:{
          clipPath:"polygon(0 0, 100% 0%, 100% 0, 0 0)",
          x:"-100%",
          opacity:0,
          skewX:45
        },
        animate:{
          clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
          x:0,
          opacity:1,
          skewX:0
        }
      }}
      className="flex flex-row justify-start items-center gap-2 my-2">
      {component}
      <p style={{color:theme ? "#FEFEFE" : "rgba(164, 159, 255, 0.75)"}} className="text-base">{title}</p>
    </motion.li>
  );
};