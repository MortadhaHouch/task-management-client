"user client";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
export default function AvatarComponent() {
    return (
        <Avatar>
            <AvatarImage src={"/src/app/assets/wallpaperflare.com_wallpaper (7).jpg"} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
