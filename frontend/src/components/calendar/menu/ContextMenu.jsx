import React, { useState } from "react";

export default function ContextMenu({ position, date, onClose, onCreate }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [start, setStart] = useState(
        new Date(date).toISOString().slice(0, 16) // formato "YYYY-MM-DDTHH:mm"
    );
    const [end, setEnd] = useState(
        new Date(date.getTime() + 60 * 60 * 1000).toISOString().slice(0, 16) // +1h
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onCreate({
            title,
            desc,
            start: new Date(start),
            end: new Date(end),
        });

        onClose();
    };

    return (
        <div
            className="context-menu"
            style={{
                top: position.y,
                left: position.x,
                position: "absolute",
                background: "white",
                border: "1px solid #ccc",
                padding: "12px",
                borderRadius: "8px",
                zIndex: 10000,
                width: "220px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
        >
            <form onSubmit={handleSubmit}>
                <h4 style={{ margin: "0 0 8px 0" }}>Nuevo evento</h4>

                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", marginBottom: "6px" }}
                    autoFocus
                />

                <textarea
                    placeholder="Descripción"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    style={{
                        width: "100%",
                        marginBottom: "6px",
                        resize: "none",
                    }}
                    rows={2}
                />

                <label style={{ fontSize: "12px" }}>Inicio</label>
                <input
                    type="datetime-local"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    style={{ width: "100%", marginBottom: "6px" }}
                />

                <label style={{ fontSize: "12px" }}>Fin</label>
                <input
                    type="datetime-local"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px" }}
                />

                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <button type="button" onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}
