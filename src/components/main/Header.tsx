"use client";
import { NavigationMenuDemo } from "./NavigationMenu";
import Avatar from "./Avatar";
import { Titillium_Web } from "next/font/google";
import Link from "next/link";
import { useContext, useState } from "react";
import { LoginContext } from "../../../providers/LoginContextProvider";
import { Button } from "../ui/button";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import fetchData from "../../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
import { toast } from "../ui/use-toast";
import { redirect } from "next/navigation";
import Loader from "./Loader";
import { useCookies } from "react-cookie";

const titillium_Web = Titillium_Web({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function Header() {
    const loginState = useContext(LoginContext);
    const [isLoading, setIsLoading] = useState(false);
    const [cookie, setCookie, removeCookie] = useCookies(["jwt_token"]);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header
            className={`w-full h-auto backdrop-blur-2xl flex flex-row justify-between items-center fixed top-0 left-0 shadow-slate-600 z-50 p-2`}
        >
        <div className="flex flex-row justify-center items-center">
            <Logo />
            <motion.h1
            initial="initial"
            animate="final"
            variants={{
                initial: {
                    opacity: 0,
                    y: 50,
                },
                final: {
                    opacity: 1,
                    y: 0,
                },
            }}
                className={`${titillium_Web.className} sm:text-md sm:text-lg lg:text-xl`}
            >
            <Link
                href={"/home"}
                className="flex flex-row justify-center items-center gap-1"
            >
                Taskia
            </Link>
            </motion.h1>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:gap-4">
            <NavigationMenuDemo />
            {loginState.isLoggedIn ||
            (localStorage.getItem("isLoggedIn") !== null &&
            JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")) ? (
            <>
                <Avatar />
                <Link
                    href={"/dashboard"}
                    className="flex flex-row justify-center items-center gap-1"
                >
                <BiSolidDashboard /> Dashboard
                </Link>
                <Link
                    href={"/profile"}
                    className="flex flex-row justify-center items-center gap-1"
                >
                <FaUser /> Profile
                </Link>
                <Button
                    className="flex flex-row justify-center items-center gap-1 bg-red-600 text-white"
                    onClick={async () => {
                        try {
                            const request = await fetchData(
                                "/user/logout",
                                "PUT",
                            {
                                email: localStorage.getItem("email") ?? "",
                            },
                                setIsLoading
                            );
                            if (jwtDecode<any>(request.token).message) {
                                toast({
                                    title: jwtDecode<any>(request.token).message,
                                    description: jwtDecode<any>(request.token).description,
                                });
                                localStorage.clear();
                                removeCookie("jwt_token", {
                                    path: "/",
                                });
                                redirect("/home");
                            }
                            if (jwtDecode<any>(request.token).error) {
                                toast({
                                    title: jwtDecode<any>(request.token).error,
                                    description: jwtDecode<any>(request.token).description,
                                });
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                    >
                    <IoMdLogOut size={20} /> Logout
                    </Button>
                </>
            ) : (
                <Link
                    href={"/login"}
                    className="flex flex-row justify-center items-center gap-1"
                >
                    <IoMdLogIn size={20} /> Register
                </Link>
            )}
            <ModeToggle />
        </div>
        <Button
            className="sm:hidden w-[50px] h-[50px] flex flex-col justify-between items-center border-slate-400 bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span
                className={`w-[45px] h-[5px] bg-slate-400 rounded transition-transform ${
                    isOpen ? "rotate-45 translate-y-[10px]" : ""
                }`}
            />
            <span
                className={`w-[45px] h-[5px] bg-slate-400 rounded transition-transform ${
                    isOpen ? "opacity-0" : ""
                }`}
            />
            <span
                className={`w-[45px] h-[5px] bg-slate-400 rounded transition-transform ${
                    isOpen ? "-rotate-45 -translate-y-[10px]" : ""
                }`}
            />
        </Button>
        {isOpen && (
            <motion.div
                variants={{
                    initialState: {
                        opacity: 0,
                        x: 50,
                    },
                    finalState: {
                        opacity: 1,
                        x: 0,
                    },
                }}
                animate="finalState"
                initial="initialState"
                transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    type: "spring",
                }}
                className="absolute top-[60px] right-0 sm:hidden w-full bg-slate-600 p-4 flex flex-col items-center gap-4"
            >
            <NavigationMenuDemo />
            {loginState.isLoggedIn ||
            (localStorage.getItem("isLoggedIn") !== null &&
                JSON.parse(localStorage.getItem("isLoggedIn") ?? "false")) ? (
                <>
                    <Avatar />
                    <Link
                        href={"/dashboard"}
                        className="flex flex-row justify-center items-center gap-1"
                    >
                        <BiSolidDashboard /> Dashboard
                    </Link>
                    <Link
                        href={"/profile"}
                        className="flex flex-row justify-center items-center gap-1"
                    >
                        <FaUser /> Profile
                    </Link>
                    <Button
                        className="flex flex-row justify-center items-center gap-1 bg-red-600 text-white"
                        onClick={async () => {
                        try {
                            const request = await fetchData(
                            "/user/logout",
                            "PUT",
                        {
                            email: localStorage.getItem("email") ?? "",
                        },
                            setIsLoading
                        );
                            if (jwtDecode<any>(request.token).message) {
                                toast({
                                    title: jwtDecode<any>(request.token).message,
                                    description: jwtDecode<any>(request.token)
                                    .description,
                                });
                                localStorage.clear();
                                removeCookie("jwt_token", {
                                    path: "/",
                                });
                                redirect("/home");
                            }
                            if (jwtDecode<any>(request.token).error) {
                                toast({
                                    title: jwtDecode<any>(request.token).error,
                                    description: jwtDecode<any>(request.token)
                                    .description,
                                });
                            }
                        } catch (error) {
                            console.log(error);
                        }
                        }}
                    >
                        <IoMdLogOut size={20} /> Logout
                    </Button>
                </>
            ) : (
                <Link
                    href={"/login"}
                    className="flex flex-row justify-center items-center gap-1"
                >
                <IoMdLogIn size={20} /> Register
                </Link>
            )}
            <ModeToggle />
            </motion.div>
        )}
        {isLoading && <Loader type="loading" />}
    </header>
    );
}