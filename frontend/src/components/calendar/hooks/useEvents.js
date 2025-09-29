import { useState } from "react";

export function useEvents() {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Clase de Matemáticas",
            start: new Date(2025, 8, 28, 10, 0), // (Año, MesIndexado0, Día, Hora, Minuto)
            end: new Date(2025, 8, 28, 12, 0),
            type: "clase",
        },
        {
            id: 2,
            title: "Examen de Historia",
            start: new Date(2025, 8, 29, 9, 0),
            end: new Date(2025, 8, 29, 11, 0),
            type: "examen",
        },
    ]);

    // Crear evento
    const addEvent = (event) => {
        setEvents((prev) => [...prev, { id: Date.now(), ...event }]);
    };

    // Editar evento
    const updateEvent = (id, updatedEvent) => {
        setEvents((prev) =>
            prev.map((event) =>
                event.id === id ? { ...event, ...updatedEvent } : event
            )
        );
    };

    // Eliminar evento
    const deleteEvent = (id) => {
        setEvents((prev) => prev.filter((event) => event.id !== id));
    };

    return { events, addEvent, updateEvent, deleteEvent };
}
