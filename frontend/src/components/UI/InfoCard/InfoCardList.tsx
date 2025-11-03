import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 👈 import
import InfoCardBase from "./InfoCardBase";
import "./InfoCardList.css";

export interface InfoCardListItem {
    id?: string | number;
    type?: "task" | "project" | "exam" | "extra";
    icon?: "book" | "work" | "code";
    title: string;
    course?: string;
    date?: string;
    priority?: "Alta" | "Media" | "Baja" | string;
    status?: "Pendiente" | "No Completado" | "Completado" | string;
}

interface InfoCardListProps {
    title?: string;
    icon?: React.ReactNode;
    description?: string;
    listItems: InfoCardListItem[];
    showViewMore?: boolean;
    onAction?: (action: string, item: InfoCardListItem) => void;
    actionLabel?: string;
}

const InfoCardList: React.FC<InfoCardListProps> = ({
    title,
    icon,
    description,
    listItems = [],
    showViewMore = false,
    onAction,
    actionLabel = "Ver más",
}) => {
    const navigate = useNavigate();

    const getRemainingTime = (dateString?: string): string => {
        if (!dateString) return "";

        let targetDate;
        if (dateString.includes("-")) {
            targetDate = new Date(dateString);
        } else if (dateString.includes("/")) {
            const [day, month] = dateString.split("/").map(Number);
            const year = new Date().getFullYear();
            targetDate = new Date(year, month - 1, day);
        } else return "";

        const today = new Date();
        const diffTime = targetDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 1) return `Faltan ${diffDays} días`;
        if (diffDays === 1) return "Mañana";
        if (diffDays === 0) return "Hoy";
        if (diffDays === -1) return "Ayer";
        return `Venció hace ${Math.abs(diffDays)} días`;
    };

    const handleViewMore = (item: InfoCardListItem) => {
        //Si el padre envió una función personalizada → úsala
        if (onAction) {
            onAction( "view" , item);
            return;
        }

        // Caso por defecto → navegar según el tipo
        if (!item.type) return;

        const typeRoutes: Record<string, string> = {
            task: "/actividades/tareas",
            project: "/actividades/proyectos",
            exam: "/actividades/examenes",
            extra: "/actividades/extras",
        };

        const targetRoute = typeRoutes[item.type];

        if (targetRoute) navigate(targetRoute);
    };

    return (
        <InfoCardBase title={title} icon={icon} variant="list">
            {description && (
                <p className="info-card-list-description">{description}</p>
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
                                {item.icon && (
                                    <div className="info-card-list-icon">
                                        {item.icon}
                                    </div>
                                )}
                                <div className="info-card-list-text">
                                    <h4>{item.title}</h4>
                                    {item.course && <span>{item.course}</span>}
                                </div>
                            </div>

                            <div className="info-card-list-right">
                                {item.date && (
                                    <div className="date">
                                        <FaCalendarAlt size={14} />
                                        <span>
                                            {getRemainingTime(item.date)}
                                        </span>
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
                                {item.status && (
                                    <span
                                        className={`status ${item.status
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")
                                            .trim()}`}
                                    >
                                        {item.status}
                                    </span>
                                )}

                                {showViewMore && (
                                    <button
                                        className="view-more-btn"
                                        onClick={() => handleViewMore(item)}
                                    >
                                        {actionLabel}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </InfoCardBase>
    );
};

export default InfoCardList;
