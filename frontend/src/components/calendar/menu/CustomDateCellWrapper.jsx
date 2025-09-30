import React from "react";

export default function CustomDateCellWrapper({ value, children, onClick }) {
    const handleClick = (e) => {
        // Detener propagación para que react-big-calendar no procese doble
        e.stopPropagation();

        if (onClick) onClick(e);

        // Abrir el menú contextual
        window.dispatchEvent(
            new CustomEvent("openContextMenu", {
                detail: { date: value, x: e.clientX, y: e.clientY },
            })
        );
    };

    return React.cloneElement(children, {
        onClick: handleClick,
        style: { ...children.props.style, cursor: "pointer" },
    });
}
