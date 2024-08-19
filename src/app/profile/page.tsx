"use client"
import Image from "next/image";

export default function Profile(){
    return(
        <div className="w-full h-full flex flex-col justify-start items-center gap-3 pt-16 pb-16">
            <Image src={localStorage.getItem("avatar")??""} alt="avatar" width={150} height={150} style={{borderRadius:"50%"}}/>
            <h2>{localStorage.getItem("firstName")??""}</h2>
            <h2>{localStorage.getItem("lastName")??""}</h2>
            <h2>{localStorage.getItem("email")??""}</h2>
        </div>
    )
}