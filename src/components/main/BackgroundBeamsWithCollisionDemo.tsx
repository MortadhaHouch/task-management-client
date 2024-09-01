import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import { Button } from "../ui/button";

export function BackgroundBeamsWithCollisionDemo() {
    return (
        <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            What are you waiting for ?
            <div className="w-max h-auto relative mx-auto flex flex-ro< justify-center items-center [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <Link className="text-3xl bg-purple-800 px-4 py-1 rounded-md m-2" href={"/login"}>login</Link>
                <Link className="text-3xl bg-purple-500 px-4 py-1 rounded-md m-2" href={"/get-started"}>get start</Link>
            </div>
        </h2>
        </BackgroundBeamsWithCollision>
    );
}