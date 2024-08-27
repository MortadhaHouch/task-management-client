import React from 'react'
import { TabsDemo } from '../main/Tabs';
export default function Tasks() {
    return (
        <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
            <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
                <TabsDemo/>
            </div>
        </div>
    )
}
