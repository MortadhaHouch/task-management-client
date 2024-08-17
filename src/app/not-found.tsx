"use client"
import React, { useEffect, useRef } from 'react';
import ImageURL1 from "../app/assets/icons/2020759_270055-P5KT2E-97-cropped.svg"
import ImageURL2 from "../app/assets/6333074.jpg"
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
