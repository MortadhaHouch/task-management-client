"use client"
import { NavigationMenuDemo } from "./NavigationMenu";
import Avatar from "./Avatar";
import { Titillium_Web } from "next/font/google";
import Link from "next/link";
import { useContext, useState } from "react";
import { LoginContext } from "../../../providers/LoginContextProvider";
import { Button } from "../ui/button";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { motion} from "framer-motion"
import { IconDashboard, IconDoorExit } from "@tabler/icons-react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import fetchData from "../../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
import { toast } from "../ui/use-toast";
import { redirect } from "next/navigation";
import Loader from "./Loader";
const titillium_Web = Titillium_Web({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
})
export default function Header() {
    const loginState = useContext(LoginContext)
    let [isLoading,setIsLoading] = useState<boolean>(false);
    return (
        <header 
            className={`w-full h-auto backdrop-blur-2xl flex flex-row justify-evenly items-center fixed top-0 left-0 shadow-slate-600 z-50 p-2 g-2`}
            >
            <div className="flex flex-row justify-center items-center">
                <Logo/>
                <motion.h1 
                    initial="initial"
                    animate="final"
                    variants={{
                        initial:{
                            opacity: 0,
                            y:50
                        },
                        final:{
                            opacity: 1,
                            y:0
                        },
                    }}
                    className={`${titillium_Web.className} sm:text-md md:text-lg lg:text-xl`} 
                    style={{
                }}>
                    <Link href={"/home"} className="flex flex-row justify-center items-center gap-1">Taskia</Link></motion.h1>
            </div>
            <NavigationMenuDemo/>
            <div 
                className="flex flex-row justify-center items-center gap-2">
                    {
                        (loginState.isLoggedIn||(localStorage.getItem("isLoggedIn")!=null && JSON.parse(localStorage.getItem("isLoggedIn")??"false"))) ? (
                            <>
                            <Avatar/>
                            <Link href={"/dashboard"} className="flex flex-row justify-center items-center gap-1"><IconDashboard/> dashboard</Link>
                            <Link href={"/profile"} className="flex flex-row justify-center items-center gap-1"><FaUser/> profile</Link>
                            <Button className="flex flex-row justify-center items-center gap-1" onClick={async()=>{
                                try {
                                    let request = await fetchData("/user/logout","PUT",{
                                        email:localStorage.getItem("email")??"",
                                    },setIsLoading)
                                    if(jwtDecode<any>(request.token).message){
                                        toast({
                                            title: jwtDecode<any>(request.token).message,
                                            description: jwtDecode<any>(request.token).description,
                                        })
                                        localStorage.clear();
                                        redirect("/home")
                                    }
                                    if(jwtDecode<any>(request.token).error){
                                        toast({
                                            title: jwtDecode<any>(request.token).error,
                                            description: jwtDecode<any>(request.token).description,
                                        })
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                            }}><IconDoorExit/> logout</Button>
                        </>
                    ) : 
                    (
                        <>
                            <div>
                                <Link href={"/login"} className="flex flex-row justify-center items-center gap-1"><IoMdLogIn size={20}/><span>Register</span></Link>
                            </div>
                        </>
                    )
                }
                <ModeToggle/>
                {
                    isLoading && (
                        <Loader type="loading"/>
                    )
                }
            </div>
        </header>
    )
}
