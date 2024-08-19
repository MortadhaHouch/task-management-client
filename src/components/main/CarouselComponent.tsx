"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
export default function CarouselComponent(props:any) {
    return (
        <Carousel>
            <CarouselContent style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                padding:15,
                gap:10,
            }}>
                {
                    props.items.map((item:string,index:number)=>(
                        <CarouselItem key={index}><Image src={item} alt="" key={index} style={{
                            width:"clamp(300px,40%,600px)",
                            height:"auto",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center",
                            gap:10,
                            padding:15,
                            borderRadius:10,
                            borderWidth:"2px 2px 0px 0px",
                            borderColor:"#fff",
                            borderStyle:"solid",
                            backgroundColor:"rgba(255,255,255,0.2)",
                            backdropFilter:"blur(10px)"
                        }}/></CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
