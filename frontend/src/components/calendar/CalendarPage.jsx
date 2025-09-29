// src/components/calendar/CalendarPage.jsx
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek as dfStartOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarPage.css";
import { useEvents } from "./hooks/useEvents";

const locales = { es };
const localizer = dateFnsLocalizer({
    format,
    // parse: (str, fmt) => parse(str, fmt, new Date())  // date-fns parse requiere 3 args
    parse: (value, formatString) => parse(value, formatString, new Date()),
    // CORRECCIÓN: startOfWeek debe recibir la fecha y devolver el inicio de semana correcto
    startOfWeek: (date) => dfStartOfWeek(date, { weekStartsOn: 1 }),
    getDay,
    locales,
});

export default function CalendarPage() {
    const { events } = useEvents();

    // Hacemos el view/date controlados localmente para evitar inconsistencias
    const [view, setView] = useState("month");
    const [date, setDate] = useState(new Date());

    const handleView = (newView) => {
        console.log("onView ->", newView);
        setView(newView);
    };

    const handleNavigate = (newDate, action) => {
        console.log("onNavigate ->", action, newDate);
        setDate(newDate);
    };

    return (
        <div className="calendar-container">
            <h2>📅 Calendario Académico</h2>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                views={["month", "week", "day", "agenda"]}
                // CONTROLADO: pasamos view/date + handlers para que la toolbar "mueva" el estado
                view={view}
                onView={handleView}
                date={date}
                onNavigate={handleNavigate}
                // defaultView sigue siendo útil como fallback
                defaultView="month"
                toolbar={true}
                messages={{
                    next: "Siguiente",
                    previous: "Anterior",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día",
                    agenda: "Agenda",
                }}
                eventPropGetter={(event) => {
                    let bg = "#3174ad";
                    if (event.type === "clase") bg = "#2ecc71";
                    if (event.type === "examen") bg = "#e74c3c";
                    if (event.type === "tarea") bg = "#f39c12";
                    return { style: { backgroundColor: bg, color: "white" } };
                }}
            />
        </div>
    );
}
