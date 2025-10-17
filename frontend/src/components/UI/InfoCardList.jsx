import React from "react";
import { FaBookOpen, FaBriefcase, FaCode, FaCalendarAlt } from "react-icons/fa";
import "./InfoCardList.css";

export default function InfoCardList({ title, description, listItems }) {
    return (
        <div className="info-card-list">
            {/* Header */}
            <div className="info-card-list-header">
                <h3 className="info-card-list-title">{title}</h3>
            </div>

            {/* Descripción */}
            <div className="info-card-list-desc">
                <p>{description}</p>
            </div>

            {/* Lista de actividades */}
            <div className="info-card-list-container">
                {listItems.map((item, index) => (
                    <div key={index} className="info-card-list-item">
                        <div className="info-card-list-left">
                            <div className="info-card-list-icon">
                                {item.icon === "book" && (
                                    <FaBookOpen size={22} />
                                )}
                                {item.icon === "work" && (
                                    <FaBriefcase size={22} />
                                )}
                                {item.icon === "code" && <FaCode size={22} />}
                            </div>
                            <div className="info-card-list-text">
                                <h4 className="activity-title">{item.title}</h4>
                                <span className="activity-course">
                                    {item.course}
                                </span>
                            </div>
                        </div>

                        <div className="info-card-list-right">
                            <div className="activity-date">
                                <FaCalendarAlt
                                    size={16}
                                    className="calendar-icon"
                                />
                                <span>{item.date}</span>
                            </div>
                            <span
                                className={`activity-priority priority-${item.priority.toLowerCase()}`}
                            >
                                {item.priority}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
