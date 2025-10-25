import React from "react";
import "./InfoCardSummary.css";

interface InfoCardSummaryProps {
    icon?: React.ReactNode;
    tag?: string; // Ej: "Esta semana", "Hoy", etc.
    description?: string;
    value: string | number;
    progress?: number; // opcional, 0–100
    titleBesideIcon?: boolean; //
}

const InfoCardSummary: React.FC<InfoCardSummaryProps> = ({
    icon,
    tag,
    description,
    value,
    progress,
    titleBesideIcon,
}) => {
    return (
        <div className="info-card info-card-summary">
            <div className="summary-header">
                {/* IZQUIERDA: icono + posible título */}
                <div className="summary-left">
                    {icon && <div className="summary-icon">{icon}</div>}
                    {titleBesideIcon && (
                        <span className="summary-title">{titleBesideIcon}</span>
                    )}
                </div>

                {/* DERECHA: tag tal como ya lo tienes */}
                {tag && <span className="summary-tag">{tag}</span>}
            </div>

            {description && (
                <p className="summary-description">{description}</p>
            )}

            <div className="summary-value">{value}</div>

            {progress !== undefined && (
                <div className="summary-progress">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
        </div>
    );
};

export default InfoCardSummary;
