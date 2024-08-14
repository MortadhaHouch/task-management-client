"use client"
import React from 'react';
import ImageURL1 from "../app/assets/404-error-with-landscape-concept-illustration_114360-7898.jpg"
import ImageURL2 from "../app/assets/6333074.jpg"
import CarouselComponent from '@/components/main/CarouselComponent';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconHome } from '@tabler/icons-react';
export default function notFound() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
            <Image src={ImageURL1} alt='image'/>
            <Button><Link href={"/"} className='flex flex-row justify-center items-center'><IconHome/><span> Go home</span></Link></Button>
        </div>
    )
}
