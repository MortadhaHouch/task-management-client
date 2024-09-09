import React, { useEffect, useState } from 'react';
import { Calendar, Event, EventProps, momentLocalizer, ToolbarProps, View, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop, { EventInteractionArgs } from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { Status, TabName, Task } from '../../../utils/types'; // Assuming Task and Status are exported from this file
import { Button } from '../ui/button';
import fetchData from '../../../utils/fetchData';
import { jwtDecode } from 'jwt-decode';
import { useToast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';
import { IoCloseOutline } from "react-icons/io5";
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
  let [isLoading,setIsLoading] = useState<boolean>(false);
  let [message,setMessage] = useState<string>("");
  let [error,setError] = useState<string>("");
  let [description,setDescription] = useState<string>("");
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
    console.log(tasks);
  }, [tasks]);
  useEffect(()=>{
    console.log(tasksToUpdate);
  },[tasksToUpdate])
  const handleEventResize = ({ event, start, end }: EventInteractionArgs<object>) => {
    const calendarEvent = event as CalendarEvent;
    const nextEvents = mappedEvents.map((existingEvent) =>
      existingEvent.id === calendarEvent.id ? { ...existingEvent, start: new Date(start), end: new Date(end) } : existingEvent
    );
    setMappedEvents(nextEvents);
    updateTasksFromEvents(nextEvents);
  };

  const handleEventDrop = ({ event, start, end }: EventInteractionArgs<object>) => {
    const calendarEvent = event as CalendarEvent;
    const nextEvents = mappedEvents.map((existingEvent) =>
      existingEvent.id === calendarEvent.id ? { ...existingEvent, start: new Date(start), end: new Date(end) } : existingEvent
    );
    setMappedEvents(nextEvents);
    updateTasksFromEvents(nextEvents);
  };
  const { toast } = useToast()
  const updateTasksFromEvents = (events: CalendarEvent[]) => {
    const updatedTasks = tasks.map((task) => {
      const event = events.find((ev) => ev.id === task.id);
      if(event && setTasksToUpdate && tasksToUpdate){
        let taskObject = {
          createdAt:new Date(),
          title:event.title,
          description: event.description,
          startingDate: event.start,
          dueDate: event.end,
          status: event.status,
          isCancelled:false,
          isDeleted:false
        }
        let similarTasks = tasksToUpdate.filter((task) => task.title === taskObject.title);
        if(similarTasks.length == 0){
          setTasksToUpdate([...tasksToUpdate,taskObject]);
        }
      }
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
  const getStatusColor = (status: Status) => {
    switch (status) {
      case "OVERDUE":
        return '#FF0000';
      case "COMPLETED":
        return '#399918';
      case 'PENDING':
        return '#9ADE7B';
      case "CANCELLED":
        return "#FFD23F"
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
        <p style={{ margin: '0', fontSize: '12px', color: '#000' }}>
          {calendarEvent.description}
        </p>
        <small>Status: {calendarEvent.status}</small>
      </div>
    );
  };
  const handleNavigate = (date: Date, view?: View) => {
    setCurrentDate(date);
    setCurrentView(view || currentView);
  };
  return (
    <div 
      className='w-full h-full flex flex-col justify-center items-center'>
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
        style={{ height: 500,width:"80%",cursor:"grab" }}
        components={{
          event:CustomEvent
        }}
      />
      <div>
        {
          isConfirmed &&(
            <Button 
              onClick={()=>{
                if(setIsConfirmed !=undefined && setComponentName!=undefined){
                  setIsConfirmed(true);
                  setComponentName(TabName.DETAILS);
                }
              }}
              >move on</Button>
          )
        }
      {
        tasksToUpdate && tasksToUpdate.length > 0 && (
          <>
            <Button disabled={tasksToUpdate.length == 0 && isLoading} onClick={async()=>{
              try {
                let request = await fetchData("/task/update","PUT",{
                  tasks:tasksToUpdate
                },setIsLoading);
                let response = jwtDecode<any>(request.token);
                if(response.message){
                  setMessage(response.message);
                  setDescription(response.description);
                  toast({
                    title: message,
                    description: description,
                    variant:"default",
                    action: (
                      <ToastAction altText=""><IoCloseOutline size={20} color='red'/></ToastAction>
                    ),
                  })
                }else{
                  setError(response.error);
                  setDescription(response.description);
                  toast({
                    title: error,
                    description: description,
                    variant:"destructive",
                    action: (
                      <ToastAction altText=""><IoCloseOutline size={20} color='red'/></ToastAction>
                    ),
                  })
                }
              } catch (error) {
                console.log(error);
              }
            }}>update changes</Button>
            <Button className='bg-red-500' onClick={()=>{
              if(tasksToUpdate.length > 0 && setTasksToUpdate){
                setTasksToUpdate([]);
              }
            }}>discard changes</Button>
          </>
        )
      }
      </div>
    </div>
  );
};

export default MyCalendar;
