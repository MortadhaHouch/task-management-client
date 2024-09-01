import React from 'react'
import { TabsDemo } from '../main/Tabs';
export default function Tasks() {
    return (
        <div 
            className='w-full h-full flex flex-row justify-center items-start flex-wrap'
            style={{padding:"10px"}}
        >
            <TabsDemo/>
        </div>
    )
}
