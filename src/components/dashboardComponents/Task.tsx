import React, { Suspense } from 'react'
import { CardSpotlightDemo } from '../main/HoverCard'
import { Skeleton } from '../ui/skeleton'
import { Task } from '../../../utils/types'
export default function TaskComponent({
    item
}:{
    item:Task
}) {
    return (
        <Suspense fallback={<Skeleton/>}>
            <CardSpotlightDemo theme={true} item={item}/>
        </Suspense>
    )
}