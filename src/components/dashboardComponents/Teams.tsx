import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {users,feedbacks,tasks,events} from "../../../utils/constants"
import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
export default function Teams() {
    return (
        <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
            {
                users.map((item,index)=>{
                    return (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>
                                <CardDescription>{item.email}</CardDescription>
                                <Avatar>
                                    <AvatarImage src={item.avatar}></AvatarImage>
                                    <AvatarFallback>{item.name.split(" ")[0][0].toUpperCase()}{item.name.split(" ")[1][1].toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </CardHeader>
                            <CardContent>
                                <p>{item.tasks.length}</p>
                                <p>{item.deletedTask.length}</p>
                                <p>{item.cancelledTask.length}</p>
                            </CardContent>
                            <CardFooter>
                                <p>Footer</p>
                            </CardFooter>
                        </Card>
                    )
                })
            }
        </div>
    )
}
