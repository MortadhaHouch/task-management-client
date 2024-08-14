"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Lottie from "lottie-react"
import AnimationData from "../../app/assets/market-research.json"
import Image from "next/image"
const components: { title: string; href: string; description: string }[] = [
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
export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                            <NavigationMenuLink asChild>
                            <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                            >
                                <Lottie animationData={AnimationData} loop/>
                                <div className="mb-2 mt-4 text-lg font-medium">
                                Taskia
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                    Efficiently manage your tasks with confidence for productivity improvement
                                </p>
                            </Link>
                            </NavigationMenuLink>
                        </li>
                        <ListItem href="/">
                            <p>
                                Excellent task management process
                            </p>
                        </ListItem>
                        <ListItem href="/">
                            <p>
                                Collaborate and interact with others and make your own legacy
                            </p>
                        </ListItem>
                        <ListItem href="/">
                            <p>
                                Synchronously manage tasks with infinite ease
                            </p>
                        </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger><Link href={"/services"}>services</Link></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                            >
                                {component.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/login">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Login
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
    return (
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
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
            </p>
            </a>
        </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"