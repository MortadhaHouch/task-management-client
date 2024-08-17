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
    let coverRef = useRef<HTMLDivElement|null>(null)
    let isInView = useInView(coverRef);
    let animationControls = useAnimation();
    useEffect(()=>{
        animationControls.start("initial")
        if(!isInView){
            animationControls.start("final")
        }
    },[animationControls, isInView,theme])
    return (
        <main
            className='w-full h-full flex flex-col justify-center items-center gap-2'>
                <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 relative'>
                    <motion.div 
                        variants={{
                            initial:{
                                width:"100%"
                            },
                            final:{
                                width:"0%",
                                transformOrigin:"left"
                            }
                        }}
                        initial="initial"
                        animate="final"
                        exit="initial"
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        ref={coverRef}  
                        style={{position:"absolute",inset:"auto",width:"120%",height:"120%",backgroundColor:"rgb(59,130,246)"}}
                    />
                <Image src={theme=="light"?ImageURL2:ImageURL1} alt='image' height={400}/>
                <Button><Link href={"/"} className='flex flex-row justify-center items-center'><IconHome/><span> Go home</span></Link></Button>
                </div>
        </main>
    )
}
