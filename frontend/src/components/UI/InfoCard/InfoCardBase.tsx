// InfoCardBase.jsx
import React from "react";
import "./InfoCardBase.css";

export default function InfoCardBase({ title, children, variant }) {
    return (
        <div className={`info-card ${variant ? `info-card--${variant}` : ""}`}>
            <div className="info-card-header">
                <h3>{title}</h3>
            </div>
            <div className="info-card-content">{children}</div>
        </div>
    );
}
