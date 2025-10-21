// src/components/calendar/EventItem.jsx
import React from "react";

export default function EventItem({ event }) {
    return (
        <span>
            📌 <strong>{event.title}</strong> ({event.type})
        </span>
    );
}
