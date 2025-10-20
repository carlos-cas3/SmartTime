import React from "react";

interface InfoCardSimpleProps {
    value?: string | number;
    description?: string;
    progress?: number;
    chart?: React.ReactNode;
}

const InfoCardSimple: React.FC<InfoCardSimpleProps> = ({
    value,
    description,
    progress,
    chart,
}) => {
    return (
        <div className="info-card-simple">
            {value !== undefined && <p className="info-card-value">{value}</p>}
            {description && <p className="info-card-desc">{description}</p>}

            {typeof progress === "number" &&
                (chart ? (
                    <div style={{ width: "50%", height: "120px" }}>
                        {chart}
                    </div>
                ) : (
                    <div className="info-card-progress">
                        <div
                            className="info-card-progress-bar"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                ))}
        </div>
    );
};

export default InfoCardSimple;
