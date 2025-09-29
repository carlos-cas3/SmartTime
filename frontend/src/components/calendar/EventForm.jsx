// src/components/calendar/EventForm.jsx
import React, { useState, useEffect } from "react";

export default function EventForm({ onSave, defaultStart, defaultEnd }) {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("clase");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    // Inicializar valores cuando cambien las props
    useEffect(() => {
        if (defaultStart) {
            setStart(defaultStart.toISOString().slice(0, 16));
        }
        if (defaultEnd) {
            setEnd(defaultEnd.toISOString().slice(0, 16));
        }
    }, [defaultStart, defaultEnd]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !start || !end) return;

        onSave({
            title,
            type,
            start: new Date(start),
            end: new Date(end),
        });

        // Resetear formulario
        setTitle("");
        setType("clase");
        setStart("");
        setEnd("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
            <input
                type="text"
                placeholder="Título del evento"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="clase">Clase</option>
                <option value="examen">Examen</option>
                <option value="tarea">Tarea</option>
            </select>

            <input
                type="datetime-local"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                required
            />

            <input
                type="datetime-local"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                required
            />

            <button type="submit">Guardar</button>
        </form>
    );
}
