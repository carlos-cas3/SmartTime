import React from "react";
import { FaBookOpen, FaBriefcase, FaCode, FaCalendarAlt } from "react-icons/fa";
import "./InfoCardList.css";

export interface InfoCardListItem {
    icon?: "book" | "work" | "code";
    title: string;
    course?: string;
    date?: string;
    priority?: "Alta" | "Media" | "Baja" | string;
}

interface InfoCardListProps {
    description?: string;
    listItems: InfoCardListItem[];
}

const InfoCardList: React.FC<InfoCardListProps> = ({
    description,
    listItems,
}) => {
    const getIcon = (type?: string) => {
        switch (type) {
            case "book":
                return <FaBookOpen size={22} />;
            case "work":
                return <FaBriefcase size={22} />;
            case "code":
                return <FaCode size={22} />;
            default:
                return null;
        }
    };

    return (
        <div className="info-card-list">
            {description && (
                <div className="info-card-list-header">
                    <p>{description}</p>
                </div>
            )}

            <div className="info-card-list-container">
                {listItems.length === 0 ? (
                    <p className="info-card-list-empty">
                        No hay elementos disponibles
                    </p>
                ) : (
                    listItems.map((item, index) => (
                        <div key={index} className="info-card-list-item">
                            <div className="info-card-list-left">
                                <div className="info-card-list-icon">
                                    {getIcon(item.icon)}
                                </div>

                                <div className="info-card-list-text">
                                    <h4>{item.title}</h4>
                                    {item.course && <span>{item.course}</span>}
                                </div>
                            </div>

                            <div className="info-card-list-right">
                                {item.date && (
                                    <div className="date">
                                        <FaCalendarAlt size={15} />
                                        <span>{item.date}</span>
                                    </div>
                                )}
                                {item.priority && (
                                    <span
                                        className={`priority ${item.priority
                                            .toLowerCase()
                                            .trim()}`}
                                    >
                                        {item.priority}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default InfoCardList;
