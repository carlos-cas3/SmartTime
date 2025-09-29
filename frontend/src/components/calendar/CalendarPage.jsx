import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek as dfStartOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarPage.css";

import CustomToolbar from "./custom/CustomToolbar";

// 👉 Custom hooks y componentes
import { useEvents } from "./hooks/useEvents"; // hook para manejar eventos (CRUD en memoria)
import EventForm from "./EventForm"; // formulario de creación/edición de eventos
import EventItem from "./EventItem"; // render personalizado de eventos
import Modal from "../UI/Modal"; // modal genérico reutilizable

// Configuración de localización (idioma español con date-fns)
const locales = {
    es: es,
};

const localizer = dateFnsLocalizer({
    format,
    parse: (value, formatString) => parse(value, formatString, new Date()),
    startOfWeek: (date) => dfStartOfWeek(date, { weekStartsOn: 1 }), // lunes inicio
    getDay,
    locales,
});

export default function CalendarPage() {
    // Estado de eventos desde el hook
    const { events, addEvent } = useEvents();

    // Estado de control de la vista del calendario
    const [view, setView] = useState("month");
    const [date, setDate] = useState(new Date());

    // Estado para el modal
    const [openModal, setOpenModal] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);

    // 🔹 Evento al hacer click en un slot vacío del calendario
    const handleSelectSlot = (slotInfo) => {
        setSelectedSlot({
            start: slotInfo.start,
            end: slotInfo.end,
        });
        setOpenModal(true);
    };

    // 🔹 Guardar un nuevo evento
    const handleSaveEvent = (event) => {
        addEvent(event); // lo agrega al estado (useEvents)
        setOpenModal(false); // cerramos el modal
    };

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                selectable
                views={["month", "week", "day", "agenda"]}
                view={view}
                onView={setView}
                date={date}
                onNavigate={setDate}
                defaultView="month"
                step={30} // intervalo en minutos
                timeslots={2} // número de divisiones por hora (ej: 30 min = 2 slots)
                min={new Date(1970, 1, 1, 0, 0)} // empieza a las 00:00
                max={new Date(1970, 1, 1, 23, 59)} // termina a las 23:59
                messages={{
                    next: "Siguiente",
                    previous: "Anterior",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día",
                    agenda: "Agenda",
                }}
                components={{
                    event: EventItem,
                    toolbar: CustomToolbar,
                }}
                onSelectSlot={handleSelectSlot} // 👈 usamos single click aquí
                onDoubleClickEvent={(event) => alert(`Evento: ${event.title}`)}
                eventPropGetter={(event) => {
                    let bg = "#3174ad";
                    if (event.type === "clase") bg = "#2ecc71";
                    if (event.type === "examen") bg = "#e74c3c";
                    if (event.type === "tarea") bg = "#f39c12";
                    return { style: { backgroundColor: bg, color: "white" } };
                }}
            />

            {/* Modal con el formulario */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <h3>➕ Nuevo evento</h3>
                <EventForm
                    onSave={handleSaveEvent}
                    defaultStart={selectedSlot?.start}
                    defaultEnd={selectedSlot?.end}
                />
            </Modal>
        </div>
    );
}
