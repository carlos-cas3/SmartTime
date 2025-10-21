import React from "react";

const InfoCardSummary = ({ value, description, progress }) => {
    return (
        <div className="info-card-summary">
            <div className="info-card-summary-header">
                <span className="info-card-summary-desc">{description}</span>
            </div>

            <div className="info-card-summary-value">{value}</div>

            {typeof progress === "number" && (
                <div className="info-card-progress">
                    <div
                        className="info-card-progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
        </div>
    );
};

export default InfoCardSummary;
