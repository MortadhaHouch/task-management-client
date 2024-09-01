import { jwtDecode } from "jwt-decode";
import fetchData from "../../../utils/fetchData";
import { Notification } from "../../../utils/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Error404Light from "../../app/assets/icons/error-404-light.svg"
import Error404Dark from "../../app/assets/icons/error-404-dark.svg"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Notifications() {
    let [notifications,setNotifications] = useState<Notification[]|[]>([])
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [pagesCount,setPagesCount] = useState<number>(0);
    async function handleDataLoad(){
        try {
            let request = await fetchData("/notifications","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            console.log(response);
            setNotifications(response.notifications);
            setPagesCount(response.pagesCount);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleDataLoad()
    },[])
    let {theme} = useTheme();
    return (
        <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
            {
                notifications && notifications.length > 0 ?(
                    notifications.map((notification) => (
                        <Card key={notification.id} className="w-[380px] h-[200px]">
                            <CardHeader>
                                <CardTitle>{notification.title}</CardTitle>
                                <small>{new Date(notification.createdAt).toDateString()}</small>
                            </CardHeader>
                            <CardContent>
                                <p>{notification.content}</p>
                            </CardContent>
                        </Card>
                    ))
                ):(
                    <Image alt='' src={theme == "dark"?Error404Dark:Error404Light}/>
                )
            }
        </div>
    )
}
