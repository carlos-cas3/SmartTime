import { useEffect } from "react";

export default function useHighlightMonthCols(view) {
    useEffect(() => {
        if (view !== "month") return; // solo aplica en vista mes

        const rows = document.querySelectorAll(".rbc-month-row");

        rows.forEach((row, rowIndex) => {
            const cells = row.querySelectorAll(".rbc-day-bg, .rbc-date-cell");

            cells.forEach((cell, colIndex) => {
                const mouseEnter = () => {
                    console.log(
                        `👉 Hover en fila ${rowIndex}, columna ${colIndex}, texto: ${cell.innerText}`
                    );

                    rows.forEach((r) => {
                        r.querySelectorAll(".rbc-day-bg, .rbc-date-cell")[
                            colIndex
                        ]?.classList.add("hover-col");
                    });
                };

                const mouseLeave = () => {
                    rows.forEach((r) => {
                        r.querySelectorAll(".rbc-day-bg, .rbc-date-cell")[
                            colIndex
                        ]?.classList.remove("hover-col");
                    });
                };

                const handleClick = () => {
                    console.log(
                        `✅ CLICK en fila ${rowIndex}, columna ${colIndex}, día: ${cell.innerText}`
                    );
                };

                cell.addEventListener("mouseenter", mouseEnter);
                cell.addEventListener("mouseleave", mouseLeave);
                cell.addEventListener("click", handleClick);

                // Guardamos referencias para limpiar
                cell._mouseenter = mouseEnter;
                cell._mouseleave = mouseLeave;
                cell._click = handleClick;
            });
        });

        return () => {
            rows.forEach((row) => {
                const cells = row.querySelectorAll(
                    ".rbc-day-bg, .rbc-date-cell"
                );
                cells.forEach((cell) => {
                    if (cell._mouseenter)
                        cell.removeEventListener(
                            "mouseenter",
                            cell._mouseenter
                        );
                    if (cell._mouseleave)
                        cell.removeEventListener(
                            "mouseleave",
                            cell._mouseleave
                        );
                    if (cell._click)
                        cell.removeEventListener("click", cell._click);
                });
            });
        };
    }, [view]);
}
