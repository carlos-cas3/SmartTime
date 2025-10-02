// src/menu/ContextMenu.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ContextMenu.css";
import { calculatePositionFromRect } from "../../../utils/positionHelpers";

export default function ContextMenu({
    rect,
    date,
    row,
    col,
    onClose,
    onCreate,
}) {
    const [style, setStyle] = useState({});

    function getPlacementFromRowCol(row, col) {
        if (row <= 1) {
            // primeras filas → top
            if (col <= 4) return { side: "right", vertical: "top" };
            return { side: "left", vertical: "top" };
        } else if (row === 2) {
            if (col <= 4) return { side: "right", vertical: "middle" };
            return { side: "left", vertical: "middle" };
        } else {
            if (col <= 4) return { side: "right", vertical: "bottom" };
            return { side: "left", vertical: "bottom" };
        }
    }

    useEffect(() => {
        const cellWidth = rect.width;
        const cellHeight = rect.height;
        const menuWidth = cellWidth * 2; // ocupa 2 columnas
        const menuHeight = cellHeight * 3; // ocupa 3 filas

        const { side, vertical } = getPlacementFromRowCol(row, col);

        // calcular posición usando el helper
        const { x, y } = calculatePositionFromRect(
            rect,
            menuWidth,
            menuHeight,
            4,
            side
        );

        setStyle({
            position: "absolute",
            top: `${y}px`,
            left: `${x}px`,
            width: `${menuWidth}px`,
            height: `${menuHeight}px`,
            zIndex: 9999, // asegura que quede encima del calendario
        });
    }, [rect, row, col]);

    return createPortal(
        <div className="context-menu" style={style}>
            <h4>Acciones para {date.toLocaleDateString()}</h4>
            <div className="actions">
                <button onClick={onClose}>Cancelar</button>
                <button onClick={() => onCreate({ date })}>Crear evento</button>
            </div>
        </div>,
        document.body
    );
}
