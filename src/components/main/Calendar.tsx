"use client"
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'; // CSS for drag-and-drop

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

export function CalendarForm() {
    const [events, setEvents] = useState([
        {
            id: 0,
            title: "Sample Event",
            start: new Date(),
            end: new Date(new Date().getTime() + 60 * 60 * 1000), // 1-hour event
        },
    ]);

    const [currentDate, setCurrentDate] = useState(new Date());  // Track the current date
    const [view, setView] = useState('month');  // Track the current view (month, week, day)

    const onEventResize = (data:any) => {
        const { start, end } = data;
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === data.event.id
                    ? { ...event, start, end }
                    : event
            )
        );
    };

    const onEventDrop = (data:any) => {
        const { start, end } = data;
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === data.event.id
                    ? { ...event, start, end }
                    : event
            )
        );
    };

    // Handle navigation between dates
    const handleNavigate = (newDate:any) => {
        setCurrentDate(newDate);
    };

    // Handle view changes (month, week, day)
    const handleViewChange = (newView:any) => {
        setView(newView);
    };

    return (
        <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-2'>
            <DnDCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onEventDrop={onEventDrop}
                resizable
                onEventResize={onEventResize}
                date={currentDate}         // Control the current date
                onNavigate={handleNavigate}  // Update date when navigation buttons are clicked
                view={view}                 // Control the current view (month, week, day)
                onView={handleViewChange}    // Update the view when toggles are clicked
            />
        </div>
    );
}
