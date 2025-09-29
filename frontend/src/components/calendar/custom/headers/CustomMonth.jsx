import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import "./CustomMonth.css";

function capitalizeFirstLetter(str = "") {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const CustomMonthHeader = ({ date }) => {
    const dayName = format(date, "EEE", { locale: es });
    return (
        <div className="rbc-custom-month-header">
            {capitalizeFirstLetter(dayName)}
        </div>
    );
};

export default CustomMonthHeader;
