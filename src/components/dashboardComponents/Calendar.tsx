import React, { useEffect, useState } from 'react';
import { Calendar, Event, EventProps, momentLocalizer, ToolbarProps, View, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop, { EventInteractionArgs } from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { Status, TabName, Task } from '../../../utils/types'; // Assuming Task and Status are exported from this file
import { Button } from '../ui/button';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

interface CalendarEvent extends Event {
  id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  status: Status;
}

const MyCalendar = ({
  tasks,
  setTasks,
  tasksToUpdate,
  setTasksToUpdate,
  isConfirmed,
  setIsConfirmed,
  setComponentName
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasksToUpdate?:Task[],
  setTasksToUpdate?:React.Dispatch<React.SetStateAction<Task[]>>
  isConfirmed?:boolean
  setIsConfirmed?:React.Dispatch<React.SetStateAction<boolean>>
  setComponentName?:React.Dispatch<React.SetStateAction<TabName>>
}) => {
  const [currentView, setCurrentView] = useState<View>(Views.MONTH);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [mappedEvents, setMappedEvents] = useState<CalendarEvent[]>([]);
  let [isDragging,setIsDragging] = useState<boolean>(false);
  useEffect(() => {
    setMappedEvents(
      tasks.map((task: Task) => ({
        id: task.id!,
        title: task.title,
        description: task.description,
        start: new Date(task.startingDate),
        end: new Date(task.dueDate),
        status: task.status,
      }))
    );
  }, [tasks]);

  const handleEventResize = ({ event, start, end }: EventInteractionArgs<object>) => {
    const calendarEvent = event as CalendarEvent;
    const nextEvents = mappedEvents.map((existingEvent) =>
      existingEvent.id === calendarEvent.id ? { ...existingEvent, start: new Date(start), end: new Date(end) } : existingEvent
    );
    setMappedEvents(nextEvents);
    updateTasksFromEvents(nextEvents);
  };

  const handleEventDrop = ({ event, start, end }: EventInteractionArgs<object>) => {
    setIsDragging(true);
    const calendarEvent = event as CalendarEvent;
    const nextEvents = mappedEvents.map((existingEvent) =>
      existingEvent.id === calendarEvent.id ? { ...existingEvent, start: new Date(start), end: new Date(end) } : existingEvent
    );
    setMappedEvents(nextEvents);
    updateTasksFromEvents(nextEvents);
    setIsDragging(false);
  };

  const updateTasksFromEvents = (events: CalendarEvent[]) => {
    const updatedTasks = tasks.map((task) => {
      const event = events.find((ev) => ev.id === task.id);
      return event
        ? {
            ...task,
            startingDate: event.start,
            dueDate: event.end,
          }
        : task;
    });
    setTasks(updatedTasks);
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#d4edda';
      case 'In Progress':
        return '#fff3cd';
      case 'Pending':
        return '#f8d7da';
      default:
        return '#e2e3e5';
    }
  };
  const handleViewChange = (view: View) => {
    setCurrentView(view);
  };
  const CustomEvent = ({ event }: EventProps<object>) => {
    const calendarEvent = event as CalendarEvent;
    return (
      <div style={{ padding: '4px', borderRadius: '4px', backgroundColor: getStatusColor(calendarEvent.status) }}>
        <strong>{calendarEvent.title}</strong>
        <p style={{ margin: '0', fontSize: '12px', color: '#555' }}>
          {calendarEvent.description || "No description available"}
        </p>
        <small>Status: {calendarEvent.status}</small>
      </div>
    );
  };
  const handleNavigate = (date: Date, view?: View) => {
    setCurrentDate(date);
    setCurrentView(view || currentView);
  };
  const handleSwiperTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleSwiperTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
  };
  return (
    <div 
      className='w-full h-full flex flex-col justify-center items-center'
      onTouchStart={handleSwiperTouchStart}
      onTouchMove={handleSwiperTouchMove}>
      <DnDCalendar
        localizer={localizer}
        events={mappedEvents}
        view={currentView}
        date={currentDate}
        resizable={true}
        popup
        selectable={true}
        popupOffset={10}
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
        onNavigate={handleNavigate}
        onView={handleViewChange}
        style={{ height: 500,width:"80%",cursor:isDragging ? "grabbing" : "grab" }}
        components={{
          event:CustomEvent
        }}
      />
      <Button 
        onClick={()=>{
          if(isConfirmed!=undefined && setIsConfirmed !=undefined && setComponentName!=undefined){
            setIsConfirmed(true);
            setComponentName(TabName.DETAILS);
          }
        }}
      >move on</Button>
    </div>
  );
};

export default MyCalendar;
