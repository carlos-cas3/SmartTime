import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek as dfStartOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarPage.css";

import CustomToolbar from "./custom/CustomToolbar";
import CustomMonthHeader from "./custom/headers/CustomMonthHeader";
import useHighlightMonthCell from "./custom/headers/hooks/useHighlightMonthCell";

const locales = { es };

const localizer = dateFnsLocalizer({
    format,
    parse: (value, formatString) => parse(value, formatString, new Date()),
    startOfWeek: (date) => dfStartOfWeek(date, { weekStartsOn: 1 }),
    getDay,
    locales,
});

export default function CalendarPage() {
    const [view, setView] = useState("month");
    const [date, setDate] = useState(new Date());

    const { dayPropGetter, handleSelectSlot } = useHighlightMonthCell();

    

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                style={{ height: "90vh" }}
                selectable
                views={["month", "week", "day", "agenda"]}
                view={view}
                onView={setView}
                date={date}
                onNavigate={setDate}
                defaultView="month"
                step={30}
                timeslots={2}
                min={new Date(1970, 1, 1, 0, 0)}
                max={new Date(1970, 1, 1, 23, 59)}
                components={{
                    toolbar: CustomToolbar,
                    month: { header: CustomMonthHeader},
                }}
                dayPropGetter={dayPropGetter}
                onSelectSlot={handleSelectSlot} 
            />
        </div>
    );
}
