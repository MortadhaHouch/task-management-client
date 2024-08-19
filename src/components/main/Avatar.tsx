"user client";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
export default function AvatarComponent() {
    return (
        <Avatar>
            <AvatarImage src={localStorage.getItem("avatar")??""} alt='logo' width={50} height={50} style={{borderRadius:"50%",aspectRatio:1}}/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
