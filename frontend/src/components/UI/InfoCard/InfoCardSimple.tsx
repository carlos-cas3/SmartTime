import React from "react";
import InfoCardBase from "./InfoCardBase";
import "./InfoCardSimple.css";

interface InfoCardSimpleProps {
    title?: string;
    icon?: React.ReactNode;
    value?: string | number;
    description?: string;
    progress?: number;
    chart?: React.ReactNode;
}

const InfoCardSimple: React.FC<InfoCardSimpleProps> = ({
    title,
    icon,
    value,
    description,
    progress,
    chart,
}) => {
    return (
        <InfoCardBase title={title} icon={icon} variant="simple">
            {value !== undefined && <p className="info-card-value">{value}</p>}
            {description && <p className="info-card-desc">{description}</p>}

            {typeof progress === "number" &&
                (chart ? (
                    <div style={{ width: "50%", height: "120px" }}>{chart}</div>
                ) : (
                    <div className="info-card-progress">
                        <div
                            className="info-card-progress-bar"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                ))}
        </InfoCardBase>
    );
};

export default InfoCardSimple;
