import React from "react";

function getRowCol(date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const startDay = startOfMonth.getDay() === 0 ? 7 : startOfMonth.getDay();
    const diff = Math.floor((date - startOfMonth) / (1000 * 60 * 60 * 24));
    const row = Math.floor((diff + startDay - 1) / 7);
    const col = (startDay - 1 + diff) % 7;
    return { row, col };
}

export default function CustomDateCellWrapper({ value, children }) {
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const rect = e.currentTarget.getBoundingClientRect();
        const { row, col } = getRowCol(value);

        window.dispatchEvent(
            new CustomEvent("openContextMenu", {
                detail: { date: value, rect, row, col },
            })
        );
    };

    return React.cloneElement(children, {
        onClick: handleClick,
        style: { ...children.props.style, cursor: "pointer" },
    });
}
