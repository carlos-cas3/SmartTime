import { useState } from "react";

function getRowCol(date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

    // Convertir domingo (0) a 7, y ajustar para que lunes sea 0
    let startDay = startOfMonth.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1; // Lunes = 0, Domingo = 6

    // Días desde el inicio del mes
    const dayOfMonth = date.getDate();

    // Posición absoluta en la cuadrícula (0-indexed)
    const absolutePosition = startDay + dayOfMonth - 1;

    // Calcular fila y columna
    const row = Math.floor(absolutePosition / 7);
    const col = absolutePosition % 7;

    return { row, col };
}

export default function useHighlightMonthCell() {
    const [highlightedCell, setHighlightedCell] = useState(null);

    const handleSelectSlot = (slotInfo) => {
        const { row, col } = getRowCol(slotInfo.start);

        console.log("✅ Celda clickeada:", {
            date: slotInfo.start.toDateString(),
            dayOfMonth: slotInfo.start.getDate(),
            row,
            col,
        });

        setHighlightedCell({ row, col, date: slotInfo.start });
    };

    const dayPropGetter = (date) => {
        if (!highlightedCell) return {};

        const { row, col } = getRowCol(date);

        // Verificar si esta celda debe ser destacada
        if (highlightedCell.row === row && highlightedCell.col === col) {
            console.log("🎯 Highlight aplicado:", {
                date: date.toDateString(),
                dayOfMonth: date.getDate(),
                row,
                col,
            });
            return { className: "rbc-day-selected" };
        }

        return {};
    };

    return { highlightedCell, handleSelectSlot, dayPropGetter };
}
