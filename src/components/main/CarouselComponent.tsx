"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
export default function CarouselComponent() {
    return (
        <Carousel>
            <CarouselContent></CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}
