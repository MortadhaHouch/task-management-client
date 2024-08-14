"user client";
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'

export default function PopOverComponent() {
    return (
        <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
    )
}
