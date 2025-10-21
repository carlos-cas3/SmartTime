// calendar/custom/CustomToolbar.jsx
import React, { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import "./CustomToolbar.css";

import LessThanIcon from "../../../assets/less-than.svg?react";
import GreaterThanIcon from "../../../assets/greater-than.svg?react";

function capitalizeFirstLetter(str = "") {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function CustomToolbar({ date, view, localizer, onNavigate, onView }) {
    const [isAnimating, setIsAnimating] = useState(false);

    const rawLabel = format(date, "dd MMM, EEEE, yyyy", { locale: es });
    const currentLabel = capitalizeFirstLetter(rawLabel);

    const handleNavigate = (action) => {
        // activa animación
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 400); // 0.4s

        onNavigate(action);
    };

    return (
        <div className="custom-toolbar">
            {/* Izquierda */}
            <div className={`toolbar-left ${isAnimating ? "animating" : ""}`}>
                <button
                    onClick={() => handleNavigate("PREV")}
                    className="nav-btn"
                >
                    <LessThanIcon className="nav-icon" />
                </button>

                <span className="toolbar-label">{currentLabel}</span>

                <button
                    onClick={() => handleNavigate("NEXT")}
                    className="nav-btn"
                >
                    <GreaterThanIcon className="nav-icon" />
                </button>
            </div>

            {/* Derecha */}
            <div className="toolbar-right">
                <div className="views-box">
                    <button
                        onClick={() => onView("day")}
                        className={`view-btn ${view === "day" ? "active" : ""}`}
                    >
                        Día
                    </button>

                    <button
                        onClick={() => onView("week")}
                        className={`view-btn ${
                            view === "week" ? "active" : ""
                        }`}
                    >
                        Semana
                    </button>

                    <button
                        onClick={() => onView("month")}
                        className={`view-btn ${
                            view === "month" ? "active" : ""
                        }`}
                    >
                        Mes
                    </button>
                </div>
                <button
                    onClick={() => handleNavigate("TODAY")}
                    className="today-btn"
                >
                    Hoy
                </button>
            </div>
        </div>
    );
}

export default CustomToolbar;
