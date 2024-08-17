"use client"
import React, { useEffect, useRef } from 'react';
import ImageURL1 from "../app/assets/icons/2020759_270055-P5KT2E-97-cropped.svg"
import ImageURL2 from "../app/assets/6333074.jpg"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconHome } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { motion, useAnimation, useInView } from 'framer-motion';
export default function NotFound() {
    const { setTheme,theme } = useTheme();
    return (
        <main
            className='w-full h-full flex flex-col justify-center items-center gap-2'>
            <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 relative'>
                <Image src={theme=="light"?ImageURL2:ImageURL1} alt='image' height={400}/>
                <Button>
                <Link href={"/home"} className='flex flex-row justify-center items-center'><IconHome/><span> Go home</span></Link></Button>
            </div>
        </main>
    )
}
