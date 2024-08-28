import React, { Dispatch, useEffect, useState } from 'react'
import { CalendarForm } from '../main/Calendar'
import { DataType, Task } from '../../../utils/types'
import { jwtDecode } from 'jwt-decode';
import fetchData from '../../../utils/fetchData';
import { useTheme } from 'next-themes';

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
