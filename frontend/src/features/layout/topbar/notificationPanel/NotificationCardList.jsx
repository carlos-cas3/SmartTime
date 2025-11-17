import { useNavigate } from "react-router-dom";
import "./NotificationCardList.css";
import CalendarIcon from "../../../../assets/calendar-Sidebar-icon.svg?react"

export default function NotificationCardList({
    listItems = [],
    showViewMore = true,
}) {
    const navigate = useNavigate();

    const parseFullDayDate = (dateString) => {
        const [y, m, d] = dateString.split("-").map(Number);
        return new Date(y, m - 1, d, 23, 59, 59);
    };

    const getRemainingTime = (dateString) => {
        if (!dateString) return "";

        const now = new Date();
        const target = parseFullDayDate(dateString);

        const diff = target - now;
        if (diff <= 0) return "Finalizado";

        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days >= 2) return `Faltan ${days} días`;
        if (days === 1) return "Mañana";
        if (days === 0 && hours >= 2) return `En ${hours} horas`;
        if (days === 0 && hours === 1) return "En 1 hora";
        if (minutes >= 1) return `En ${minutes} minutos`;

        return "En instantes";
    };

    const routes = {
        exam: "/actividades/examenes",
        task: "/actividades/tareas",
        project: "/actividades/proyectos",
        extra: "/actividades/extras",
    };

    const goToSection = (type) => {
        navigate(routes[type] || "/actividades");
    };

    const visibleItems = listItems.slice(0, 2);
    const extraCount = Math.max(listItems.length - 2, 0);

    return (
        <div className="notif-card-list">
            {listItems.length === 0 ? (
                <p className="notif-empty">No hay actividades cercanas</p>
            ) : (
                <>
                    {visibleItems.map((item, idx) => (
                        <div key={item.id ?? idx} className="notif-item">
                            <div className="notif-text">
                                <h4>{item.title}</h4>

                                {item.date && (
                                    <div className="notif-date">
                                        <CalendarIcon size={12} />
                                        <span>
                                            {getRemainingTime(item.date)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {showViewMore && (
                                <button
                                    className="notif-btn"
                                    onClick={() => goToSection(item.type)}
                                >
                                    Ver más
                                </button>
                            )}
                        </div>
                    ))}

                    {extraCount > 0 && (
                        <div
                            className="notif-more"
                            onClick={() => goToSection(visibleItems[0].type)}
                        >
                            ... y {extraCount} más
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
