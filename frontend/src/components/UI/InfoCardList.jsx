import React from "react";
import { FaBookOpen, FaBriefcase, FaCode, FaCalendarAlt } from "react-icons/fa";
import "./InfoCardList.css";

export default function InfoCardList({ description, listItems }) {
    return (
        <div className="info-card-list">
            <div className="info-card-list-header">
                {description && <p>{description}</p>}
            </div>

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
                                <h4>{item.title}</h4>
                                <span>{item.course}</span>
                            </div>
                        </div>

                        <div className="info-card-list-right">
                            <div className="date">
                                <FaCalendarAlt size={15} />
                                <span>{item.date}</span>
                            </div>
                            <span
                                className={`priority ${item.priority.toLowerCase()}`}
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
