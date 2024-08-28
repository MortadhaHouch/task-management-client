"use client";
import { SetStateAction, useState } from "react";
import { Calendar, momentLocalizer, Event, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"; // CSS for drag-and-drop
import withDragAndDrop, { withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop";
import { Task } from "../../../utils/types";
interface MyEvent extends Event {
    id: string;
    title: string;
    start: Date;
    end: Date;
    description?: string;
}

const DnDCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
const CustomEvent: React.FC<{ event: MyEvent }> = ({ event }) => {
    return (
        <div style={{ padding: '5px', border: '1px solid #000', borderRadius: '4px', backgroundColor: '#f0f0f0',color:"black" }}>
            <strong>{event.title}</strong>
            <p>{event.description || "No description provided."}</p>
        </div>
    );
};

export function CalendarForm({
    events,
    setEvents
}:{
    events:Task[]|[]
    setEvents:React.Dispatch<SetStateAction<Task[]|[]>>
}) {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());  // Track the current date
    const [view, setView] = useState<View>('month');  // Track the current view (month, week, day)

    const onEventResize: withDragAndDropProps["onEventResize"] = (data:MyEvent) => {
        const { start, end } = data;
        console.log(data);
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === data.id
                ? { ...event, start, end }
                : event
            )
        );
    };

    const onEventDrop: withDragAndDropProps["onEventDrop"] = (data:MyEvent) => {
        const { start, end } = data;
        console.log(data);
        setEvents((prevEvents) =>
        prevEvents.map((event) =>
                event.id === data.id
                ? { ...event, start, end }
                : event
            )
        );
    };

    // Handle navigation between dates
    const handleNavigate = (newDate: Date) => {
        console.log("newDate",newDate);
        setCurrentDate(newDate);
    };

    // Handle view changes (month, week, day)
    const handleViewChange = (newView: View) => {
        console.log("newView",newView);
        setView(newView);
    };
    return (
        <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-2">
            <DnDCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500,width:800 }}
                onEventDrop={onEventDrop}
                resizable
                onEventResize={onEventResize}
                date={currentDate}
                onNavigate={handleNavigate}
                view={view}
                onView={handleViewChange}
                tooltipAccessor={{}}
                components={{
                    event: CustomEvent,
                }}
            />
        </div>
    );
}