"use client";

import React,{useEffect, useRef} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Lottie from "lottie-react";
import AnimationData from "../../app/assets/animations/market-research.json";
import {motion,useInView,useAnimate, useAnimation} from "framer-motion"
import { FaComment } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Button } from "../ui/button";
const services: { title: string; href: string; description: string }[] = [
    {
        title: "Creating and editing tasks",
        href: "/features",
        description:"A user can create and edit daily tasks whenever they want to",
    },
    {
        title: "Notifications",
        href: "/features",
        description:"Never worry about forgetting or omitting task processing and be up-to-date with the latest information about daily chores",
    },
    {
        title: "Unlimited tasks management features",
        href: "/features",
        description:"Forget about the complexity and the diversity of your tasks and fall in love with the incredibly powerful and easy workflow of tasks management",
    },
    {
        title: "Unlimited number of tasks",
        href: "/features",
        description: "Never worry about limitations of tasks management and create as many tasks as you need",
    },
    {
        title: "Deleting and canceling tasks",
        href: "/features",
        description:"You can also cancel or delete tasks whenever you want",
    },
    {
        title: "Easy task recovery and deletion",
        href: "/features",
        description:"You can also recover deleted tasks whenever you want",
    },
]
let gettingStartedSteps:{title:string,href:string,description:string}[] = [
    {
        title:"Advanced Technology",
        href:"/get-started",
        description:" Our application is designed for efficiency, able to handle a large number of tasks and user interactions smoothly.   It ensures quick and reliable performance, even during peak usage.",
    },
    {
        title:"Robust Security",
        href:"/get-started",
        description:"Our application prioritizes data security through advanced measures like secure authentication and encrypted transmission, ensuring unauthorized access and protection of personal details and tasks.",
    },
    {
        title:"Seamless Performance",
        href:"/get-started",
        description:"Our application is optimized for efficient task handling and user interactions, ensuring swift and reliable performance, even during peak usage, ensuring a seamless experience.",
    }
] 
export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger><h5>Getting started</h5></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/home"
                                >
                                    <Lottie animationData={AnimationData} loop />
                                    <div className="mb-2 mt-4 text-lg font-medium">Taskia</div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Efficiently manage your tasks with confidence for productivity improvement
                                    </p>
                                </Link>
                                </NavigationMenuLink>
                            </li>
                            {gettingStartedSteps.map((item) => (
                                <ListItem
                                    key={item.title}
                                    href={item.href}
                                    title={item.title}
                                    description={item.description}
                                >
                                {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>
                    <Link href="/features">features</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((item) => (
                        <ListItem
                            key={item.title}
                            href={item.href}
                            title={item.title}
                            description={item.description}
                        >
                        {item.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/login">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <IoMdLogIn size={20}/> Login
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/feedbacks">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaComment size={20}/> feedbacks
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

type ListItemProps = {
    className?: string;
    title: string;
    description:string
    children: React.ReactNode;
    } & React.ComponentPropsWithoutRef<"a">;

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, title,description, children, color, ...props }: ListItemProps, ref) => {
        return(
            <li>
                <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                        {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <path
                        className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                        {description}
                        {children}
                    </path>
                </a>
                </NavigationMenuLink>
            </li>
        )
    }
);
ListItem.displayName = "ListItem";