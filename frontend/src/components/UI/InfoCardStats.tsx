import React from "react";

interface InfoCardStatsProps {
    description?: string;
    chart?: React.ReactNode;
}

const InfoCardStats: React.FC<InfoCardStatsProps> = ({
    description,
    chart,
}) => {
    return (
        <div className="info-card-stats">
            {description && <p className="info-card-desc">{description}</p>}
            <div className="info-card-chart">{chart}</div>
        </div>
    );
};

export default InfoCardStats;
