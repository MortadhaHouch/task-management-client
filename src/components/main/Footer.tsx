"use client"
import Link from "next/link";
import { ThemeContext } from "../../../providers/ThemeContextProvider";
import { useContext } from "react";

export default function Footer() {
    let theme = useContext(ThemeContext)
    return (
        <footer 
            className={`w-full h-auto flex flex-row justify-evenly items-center fixed bottom-0 left-0 shadow-slate-600 backdrop-blur-2xl z-50 p-2 g-2`}
            style={{backgroundColor:theme.isDark?"rgba(32, 30, 67, 0.75)":"rgba(235, 244, 246, 0.75)"}}
        >
            <Link href={"/"}>Link</Link>
        </footer>
    )
}
