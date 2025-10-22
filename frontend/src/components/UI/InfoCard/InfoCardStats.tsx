import React from "react";
import InfoCardBase from "./InfoCardBase";
import "./InfoCardStats.css";

interface InfoCardStatsProps {
    title?: string;
    icon?: React.ReactNode;
    description?: string;
    chart?: React.ReactNode;
}

const InfoCardStats: React.FC<InfoCardStatsProps> = ({
    title,
    icon,
    description,
    chart,
}) => {
    return (
        <InfoCardBase title={title} icon={icon} variant="stats">
            <div className="info-card-stats">
                {description && <p className="info-card-desc">{description}</p>}
                {chart && <div className="info-card-chart">{chart}</div>}
            </div>
        </InfoCardBase>
    );
};

export default InfoCardStats;
