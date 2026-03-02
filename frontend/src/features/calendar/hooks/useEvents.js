import { useState, useEffect } from "react";
import { eventsApi } from "../../../utils/api";

export function useEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const data = await eventsApi.getAll();
            const formattedEvents = data.map((event) => ({
                ...event,
                start: new Date(event.start),
                end: new Date(event.end),
            }));
            setEvents(formattedEvents);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const addEvent = async (event) => {
        const eventData = {
            title: event.title,
            type: event.type || "clase",
            start: event.start.toISOString(),
            end: event.end.toISOString(),
        };
        const newEvent = await eventsApi.create(eventData);
        const formattedEvent = {
            ...newEvent,
            start: new Date(newEvent.start),
            end: new Date(newEvent.end),
        };
        setEvents((prev) => [...prev, formattedEvent]);
        return formattedEvent;
    };

    const removeEvent = async (id) => {
        await eventsApi.delete(id);
        setEvents((prev) => prev.filter((e) => e.id !== id));
    };

    const updateEvent = async (id, newData) => {
        const eventData = {
            title: newData.title,
            type: newData.type,
            start: newData.start.toISOString(),
            end: newData.end.toISOString(),
        };
        const updated = await eventsApi.update(id, eventData);
        const formattedEvent = {
            ...updated,
            start: new Date(updated.start),
            end: new Date(updated.end),
        };
        setEvents((prev) =>
            prev.map((e) => (e.id === id ? formattedEvent : e))
        );
        return formattedEvent;
    };

    return {
        events,
        loading,
        error,
        addEvent,
        removeEvent,
        updateEvent,
        refreshEvents: fetchEvents,
    };
}
