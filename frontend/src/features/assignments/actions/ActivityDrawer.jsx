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
                    <span className="activity-badge">{activity.type}</span>
                    <h2 className="drawer-title">{activity.title}</h2>
                    <p className="drawer-subtitle">{activity.category}</p>
                </div>

                {/* INFO CARDS */}
                <div className="drawer-info-grid">
                    <div className="info-card">
                        <p className="info-label">
                            <Layers size={14} /> Estado
                        </p>
                        <p className="info-value state">{activity.status}</p>
                    </div>

                    <div className="info-card">
                        <p className="info-label">
                            <Flag size={14} /> Prioridad
                        </p>
                        <p className="info-value priority">
                            {activity.priority}
                        </p>
                    </div>

                    <div className="info-card">
                        <p className="info-label">
                            <Calendar size={14} /> Fecha límite
                        </p>
                        <p className="info-value">{activity.date}</p>
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
