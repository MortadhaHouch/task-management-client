/* eslint-disable react-hooks/exhaustive-deps */
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
} from "@/components/ui/tabs";
import { IconCashRegister, IconLogin, IconLogin2, IconRegistered } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { FileUploadDemo } from "./FileUploadDemo"
import Image from "next/image"
import fetchData from "../../../utils/fetchData"
import {jwtDecode} from "jwt-decode"
import { DatePickerDemo } from "./DatePicker"
import { useToast } from "../ui/use-toast"
import Loader from "./Loader"
import {useCookies} from "react-cookie"
import sign from "jwt-encode"
import { redirect } from "next/navigation"
export default function Tab() {
    let [avatar,setAvatar] = useState<string>("")
    let [files,setFiles] = useState<File[]|[]>([])
    let [birthday,setBirthDay] = useState<Date>(new Date())
    let [firstName,setFirstName] = useState<string>("")
    let [lastName,setLastName] = useState<string>("")
    let [email,setEmail] = useState<string>("")
    let [loginPassword,setLoginPassword] = useState<string>("")
    let [loginEmail,setLoginEmail] = useState<string>("")
    let [password,setPassword] = useState<string>("")
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [cookies,setCookie,removeCookie] = useCookies(["jwt_token"])
    async function handleLogin(url:string,body:{email:string,password:string}){
        try {
            let request = await fetchData(url,"POST",body,setIsLoading)
            console.log(jwtDecode<any>(request.token))
            if(jwtDecode<any>(request.token).isVerified){
                localStorage.setItem("isLoggedIn",JSON.stringify(true));
                localStorage.setItem("email",jwtDecode<any>(request.token).email);
                localStorage.setItem("firstName",jwtDecode<any>(request.token).firstName);
                localStorage.setItem("lastName",jwtDecode<any>(request.token).lastName);
                localStorage.setItem("birthday",jwtDecode<any>(request.token).birthday);
                localStorage.setItem("avatar",jwtDecode<any>(request.token).avatar);
                setCookie("jwt_token",sign({
                    email:localStorage.getItem("email"),
                    password:localStorage.getItem("password"),
                    firstName:localStorage.getItem("firstName"),
                    lastName:localStorage.getItem("lastName"),
                },process.env.NEXT_PUBLIC_SECRET_KEY??""),{
                    path:"/",
                    maxAge:60 * 60 * 24 * 3,
                }
            )
                redirect("/home")
            }else{
                toast({
                    title: "Error",
                    description: "Please try again",
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    const { toast } = useToast()
    async function handleSignup(url:string,body:{email:string,password:string,firstName:string,lastName:string,avatar:string,birthday:string}){
        try {
            let request = await fetchData(url,"POST",body,setIsLoading);
            if(jwtDecode<any>(request.token).isVerified){
                localStorage.setItem("isLoggedIn",JSON.stringify(true));
                localStorage.setItem("email",jwtDecode<any>(request.token).email);
                localStorage.setItem("firstName",jwtDecode<any>(request.token).firstName);
                localStorage.setItem("lastName",jwtDecode<any>(request.token).lastName);
                localStorage.setItem("birthday",jwtDecode<any>(request.token).birthday);
                localStorage.setItem("avatar",jwtDecode<any>(request.token).avatar);
                localStorage.setItem("password",jwtDecode<any>(request.token).password);
                setCookie("jwt_token",sign({
                        email:localStorage.getItem("email"),
                        password:localStorage.getItem("password"),
                        firstName:localStorage.getItem("firstName"),
                        lastName:localStorage.getItem("lastName"),
                    },process.env.NEXT_PUBLIC_SECRET_KEY??""),{
                        path:"/",
                        maxAge:60 * 60 * 24 * 3,
                    }
                )
                redirect("/home")
            }else{
                toast({
                    title: "Error",
                    description: "Please try again",
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
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
                        <Input id="email" type="email" placeholder="name" onChange={(e)=>setLoginEmail(e.target.value)} required/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">password</Label>
                        <Input id="password" type="password" placeholder="password" onChange={(e)=>setLoginPassword(e.target.value)} required/>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row justify-center items-center">
                    <Button
                        onClick={async()=>{
                            handleLogin("/user/login",{email:loginEmail,password:loginPassword});
                        }}
                        disabled={loginEmail.length == 0 && loginPassword.length == 0}
                        ><IconLogin/> <span>Login</span></Button>
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
                        <Label htmlFor="firstName">first name</Label>
                        <Input id="firstName" type="text" placeholder="first name" onChange={(e)=>setFirstName(e.target.value)} required/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="lastName">last name</Label>
                        <Input id="lastName" type="text" placeholder="last name" onChange={(e)=>setLastName(e.target.value)} required/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">email</Label>
                        <Input id="email" type="email" placeholder="user@gmail.com" onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div className="space-y-1 flex flex-col justify-center items-center">
                        <Label htmlFor="birthDay">birth day</Label>
                        <DatePickerDemo setDateValue={setBirthDay} value={birthday}/>
                    </div>
                    <div className="space-y-1 flex flex-col justify-center items-start">
                        <Label htmlFor="file">Choose avatar</Label>
                        <FileUploadDemo multiple={false} setFiles={setFiles} setAvatar={setAvatar}/>
                        {
                            avatar && (
                                <Image src={avatar} alt="" width={200} height={200} style={{objectFit:"contain",borderRadius:10}}/>
                            )
                        }
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button 
                        onClick={async()=>{
                            handleSignup("/user/signup",{email,password,firstName,lastName,avatar,birthday:birthday.toString()});
                        }} 
                        disabled={firstName.length==0 && lastName.length==0 && email.length==0 && password.length==0 && avatar.length==0 && birthday.toString().length==0}>Signup</Button>
                </CardFooter>
                </Card>
            </TabsContent>
            {
                isLoading && (
                    <Loader type="login"/>
                )
            }
        </Tabs>
    )
}