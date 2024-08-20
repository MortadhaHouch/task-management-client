import React, { Dispatch } from 'react'
import { CalendarForm } from '../main/Calendar'
import { Task } from '../../../utils/types'

export default function Calendar({
  events,
  setEvents
}:{
  events:Task[]|[],
  setEvents:Dispatch<React.SetStateAction<Task[]|[]>>
}) {
  return (
    <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
      <CalendarForm events={events} setEvents={setEvents}/>
    </div>
  )
}
