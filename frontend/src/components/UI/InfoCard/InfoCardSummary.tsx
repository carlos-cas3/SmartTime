import React from "react";
import "./InfoCardSummary.css";

interface InfoCardSummaryProps {
    icon?: React.ReactNode;
    tag?: string; // Ej: "Esta semana", "Hoy", etc.
    description: string;
    value: string | number;
    progress?: number; // opcional, 0–100
}

const InfoCardSummary: React.FC<InfoCardSummaryProps> = ({
    icon,
    tag,
    description,
    value,
    progress,
}) => {
    return (
        <div className="info-card-summary">
            <div className="summary-header">
                <div className="summary-icon">{icon}</div>
                {tag && <span className="summary-tag">{tag}</span>}
            </div>

            <p className="summary-description">{description}</p>

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
