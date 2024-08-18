"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { IconCashRegister, IconLogin, IconLogin2, IconRegistered } from "@tabler/icons-react"
import { useState } from "react"
import { FileUploadDemo } from "./FileUploadDemo"

export default function Tab() {
    return (
        <Tabs defaultValue="login" className="w-[400px]">
        <TabsList 
            className="grid w-full grid-cols-2"
            >
            <TabsTrigger 
                value="login">login</TabsTrigger>
            <TabsTrigger 
                value="signup">signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
            <Card>
            <CardHeader>
                <CardTitle>login</CardTitle>
                <CardDescription>
                    Login to your account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="email">email</Label>
                    <Input id="email" type="email" placeholder="name"/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">password</Label>
                    <Input id="password" type="password" placeholder="password" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-row justify-center items-center">
                <Button><IconLogin/> <span>Login</span></Button>
            </CardFooter>
            </Card>
        </TabsContent>
        <TabsContent value="signup">
            <Card>
            <CardHeader>
                <CardTitle>signup</CardTitle>
                <CardDescription>
                    Create account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="current">first name</Label>
                    <Input id="current" type="text" placeholder="first name"/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="current">last name</Label>
                    <Input id="current" type="text" placeholder="last name"/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="email">email</Label>
                    <Input id="email" type="email" placeholder="user@gmail.com"/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="file">Choose avatar</Label>
                    <FileUploadDemo/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" placeholder="password"/>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Signup</Button>
            </CardFooter>
            </Card>
        </TabsContent>
        </Tabs>
    )
}