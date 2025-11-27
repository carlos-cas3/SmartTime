import { X, Calendar, Flag, Layers } from "lucide-react";
import "./ActivityDrawer.css";
import { createPortal } from "react-dom";

export default function ActivityDrawer({
    isOpen,
    activity,
    onClose,
    onEdit,
    onDelete,
    labels = { edit: "Editar", delete: "Eliminar" },
}) {
    if (!activity) return null;

    const TRANSLATIONS = {
        type: {
            task: "Tarea",
            exam: "Examen",
            project: "Proyecto",
            extra: "Extra",
        },
        status: {
            pending: "Pendiente",
            "not-completed": "No completado",
            completed: "Completado",
        },
        priority: {
            high: "Alta",
            medium: "Media",
            low: "Baja",
        },
    };

    function t(category, key) {
        return TRANSLATIONS[category]?.[key] || key;
    }

    return createPortal(
        <div
            className={`drawer-overlay ${isOpen ? "open" : ""}`}
            onClick={onClose}
        >
            <div
                className={`drawer-content ${isOpen ? "open" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* HEADER */}
                <div className="drawer-top">
                    <span className="activity-badge">
                        {t("type", activity.type)}
                    </span>
                    <h2 className="drawer-title">{activity.title}</h2>
                    <p className="drawer-subtitle">{activity.category}</p>
                </div>

                {/* INFO CARDS */}
                <div className="drawer-info-grid">
                    <div className="info-cardDrawer">
                        <p className="info-labelDrawer">
                            <Layers size={14} /> Estado
                        </p>
                        <span
                            className={`info-valueDrawer state state-${activity.status}`}
                        >
                            {t("status", activity.status)}
                        </span>
                    </div>

                    <div className="info-cardDrawer">
                        <p className="info-labelDrawer">
                            <Flag size={14} /> Prioridad
                        </p>
                        <span
                            className={`info-valueDrawer priority priority-${activity.priority}`}
                        >
                            {t("priority", activity.priority)}
                        </span>
                    </div>

                    <div className="info-cardDrawer">
                        <p className="info-labelDrawer">
                            <Calendar size={14} /> Fecha límite
                        </p>
                        <p className="info-valueDrawer">{activity.date}</p>
                    </div>
                </div>

                {/* MATRIZ */}
                {activity.matriz && (
                    <div className="drawer-section">
                        <h4>Matriz de Eisenhower</h4>
                        <div className="matriz-box">
                            <strong>{activity.matriz}</strong>
                            <p>No urgente pero importante</p>
                        </div>
                    </div>
                )}

                {/* FOOTER BUTTONS */}
                <div className="drawer-footer">
                    <button
                        className="btn-edit"
                        onClick={() => onEdit(activity)}
                    >
                        {labels.edit}
                    </button>

                    <button
                        className="btn-delete"
                        onClick={() => onDelete(activity)}
                    >
                        {labels.delete}
                    </button>
                </div>

                <button className="close-icon" onClick={onClose}>
                    <X size={20} />
                </button>
            </div>
        </div>,
        document.body
    );
}
