import React from "react";
import { startOfMonth, endOfMonth, format, isSameDay } from "date-fns";
import { es } from "date-fns/locale";

const CustomDateCell = ({ label, date }) => {

    const currentMonthStart = startOfMonth(date);
    const currentMonthEnd = endOfMonth(date);

    const previousMonthStart = startOfMonth(
        new Date(
            currentMonthStart.getFullYear(),
            currentMonthStart.getMonth() - 1,
            1
        )
    );
    const nextMonthStart = startOfMonth(
        new Date(
            currentMonthStart.getFullYear(),
            currentMonthStart.getMonth() + 1,
            1
        )
    );

    // Condiciones
    const isFirstOfMonth = isSameDay(date, currentMonthStart);
    const isFirstOffRangeBefore =
        date < currentMonthStart && date.getDate() === 1;
    const isFirstOffRangeAfter = date > currentMonthEnd && date.getDate() === 1;

    // Texto dinámico
    let content = label;
    if (isFirstOfMonth) {
        content = `1 de ${format(currentMonthStart, "MMM", { locale: es })}`;
    } else if (isFirstOffRangeBefore) {
        content = `1 de ${format(previousMonthStart, "MMM", { locale: es })}`;
    } else if (isFirstOffRangeAfter) {
        content = `1 de ${format(nextMonthStart, "MMM", { locale: es })}`;
    }

    return (
        <div
            style={{
                fontStyle: isFirstOfMonth ? "italic" : "normal",
            }}
        >
            {content}
        </div>
    );
};

export default CustomDateCell;
