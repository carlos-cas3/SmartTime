import { useEffect } from "react";
import React, { useState } from "react";

import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek as dfStartOfWeek, getDay } from "date-fns";

import CustomToolbar from "../custom/CustomToolbar";
import CustomDateCell from "../custom/headers/CustomDateCell";
import CustomMonthHeader from "../custom/headers/CustomMonthHeader";
import useHighlightMonthCell from "../custom/headers/hooks/useHighlightMonthCell";

import ContextMenu from "../menu/ContextMenu";
import CustomDateCellWrapper from "../menu/CustomDateCellWrapper";

import "./CalendarPage.css";

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
    const [menu, setMenu] = useState(null);
    const [events, setEvents] = useState([]);

    const { dayPropGetter, handleSelectSlot } = useHighlightMonthCell();

    useEffect(() => {
        const handler = (e) => {
            const { date, rect } = e.detail;
            setMenu({ date: new Date(date), rect });
        };
        window.addEventListener("openContextMenu", handler);
        return () => window.removeEventListener("openContextMenu", handler);
    }, []);

    const closeMenu = () => setMenu(null);

    const onCreate = (ev) => {
        console.log("Crear evento", ev);
        closeMenu();
    };

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                style={{ height: "90vh" }}
                events={events}
                startAccessor="start"
                endAccessor="end"
                titleAccessor="title"
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
                    month: {
                        header: CustomMonthHeader,
                        dateHeader: CustomDateCell,
                    },
                    dateCellWrapper: CustomDateCellWrapper,
                }}
                dayPropGetter={dayPropGetter}
            />

            {menu && (
                <ContextMenu
                
                    rect={menu.rect}
                    date={menu.date}
                    onClose={closeMenu}
                    onCreate={onCreate}
                />
            )}
        </div>
    );
}
