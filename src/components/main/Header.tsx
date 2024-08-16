"use client"
import { NavigationMenuDemo } from "./NavigationMenu";
import Avatar from "./Avatar";
import { Titillium_Web } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";
import { LoginContext } from "../../../providers/LoginContextProvider";
import { Button } from "../ui/button";
import { IoMdLogIn } from "react-icons/io";
import { ThemeContext } from "../../../providers/ThemeContextProvider";
import { FaInfo, FaRegMoon, FaUser } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { motion} from "framer-motion"
import { IconDashboard, IconDoorExit } from "@tabler/icons-react";
import Logo from "./Logo";
const titillium_Web = Titillium_Web({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
})
export default function Header() {
    const loginState = useContext(LoginContext)
    const themeContext = useContext(ThemeContext);
    return (
        <header 
            className={`w-full h-auto backdrop-blur-2xl flex flex-row justify-evenly items-center fixed top-0 left-0 shadow-slate-600 z-50 p-2 g-2`}
            style={{backgroundColor:(themeContext.isDark && localStorage.getItem("isDark")!==null || JSON.parse(localStorage.getItem("isLoggedIn")??"false"))?"rgba(32, 30, 67, 0.75)":"rgba(235, 244, 246, 0.75)"}}
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
                    color: (themeContext.isDark && localStorage.getItem("isDark")!==null || JSON.parse(localStorage.getItem("isLoggedIn")??"false"))?"#EBF4F6":"#201E43",
                }}>
                    <Link href={"/home"}>Taskia</Link></motion.h1>
            </div>
            <NavigationMenuDemo theme={(themeContext.isDark && localStorage.getItem("isDark")!==null || JSON.parse(localStorage.getItem("isLoggedIn")??"false"))}/>
            <div 
                className="flex flex-row justify-center items-center gap-2">
                    {
                    (loginState.isLoggedIn||(localStorage.getItem("isLoggedIn")!=null && JSON.parse(localStorage.getItem("isLoggedIn")??"false"))) ? (
                        <>
                            <Avatar/>
                            <Link href={"/dashboard"} style={{color:themeContext.isDark?"#EEEEEE":"#222831"}}><IconDashboard/> dashboard</Link>
                            <Link href={"/profile"} style={{color:themeContext.isDark?"#EEEEEE":"#222831"}}><FaUser/> profile</Link>
                            <Button className="text-red-600"><IconDoorExit/> logout</Button>
                        </>
                ) : 
                    (
                        <>
                            <div>
                                <Link href={"/login"} style={{color:themeContext.isDark?"#EEEEEE":"#222831"}} className="flex flex-row justify-center items-center gap-1"><IoMdLogIn size={20}/><span>Register</span></Link>
                            </div>
                        </>
                    )
                }
                <Button onClick={()=>{
                    themeContext.setIsDark((val)=>{
                        localStorage.setItem("isDark",JSON.stringify(!val));
                        return !val;
                    });
                }}
                    className={"flex flex-row bg-slate-600"}
                    style={{color:themeContext.isDark?"#EEEEEE":"#222831"}}
                >
                    {
                        themeContext.isDark? <FaRegMoon size={20} color={(themeContext.isDark && localStorage.getItem("isDark")!==null || JSON.parse(localStorage.getItem("isLoggedIn")??"false"))?"text-light":"text-dark"}/> : <LuSunMedium size={20} color={(themeContext.isDark && localStorage.getItem("isDark")!==null || JSON.parse(localStorage.getItem("isLoggedIn")??"false"))?"text-light":"text-dark"}/>
                    }
                </Button>
            </div>
        </header>
    )
}
