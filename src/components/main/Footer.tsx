"use client"
import Link from "next/link";
import { useContext } from "react";

export default function Footer() {
    return (
        <footer 
            className={`w-full h-auto flex flex-row justify-evenly items-center fixed bottom-0 left-0 shadow-slate-600 backdrop-blur-2xl z-50 p-2 g-2`}
        >
            <Link href={"/"}>Link</Link>
        </footer>
    )
}
