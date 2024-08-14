import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import React from "react"
type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderComponent({ className, ...props }: SliderProps) {
    return (
        <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
        />
    )
}
