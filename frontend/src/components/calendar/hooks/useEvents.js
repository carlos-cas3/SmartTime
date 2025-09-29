// src/components/calendar/hooks/useEvents.js
import { useState } from "react";

export function useEvents() {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Clase de Matemáticas",
            type: "clase",
            start: new Date(),
            end: new Date(new Date().getTime() + 60 * 60 * 1000),
        },
    ]);

    const addEvent = (event) =>
        setEvents([...events, { ...event, id: Date.now() }]);

    const removeEvent = (id) => setEvents(events.filter((e) => e.id !== id));

    const updateEvent = (id, newData) =>
        setEvents(events.map((e) => (e.id === id ? { ...e, ...newData } : e)));

    return { events, addEvent, removeEvent, updateEvent };
}
