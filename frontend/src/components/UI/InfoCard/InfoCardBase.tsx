import React from "react";
import "./InfoCardBase.css";

interface InfoCardBaseProps {
    title?: string;
    icon?: React.ReactNode;
    variant?: string;
    headerContent?: React.ReactNode;
    children: React.ReactNode;
}

const InfoCardBase: React.FC<InfoCardBaseProps> = ({
    title,
    icon,
    variant,
    headerContent,
    children,
}) => {
    return (
        <div className={`info-card ${variant ? `info-card--${variant}` : ""}`}>
            {(title || icon || headerContent) && (
                <div
                    className={`info-card-header ${
                        variant ? `info-card-header--${variant}` : ""
                    }`}
                >
                    {icon && <div className="info-card-icon">{icon}</div>}
                    {title && <h3 className="info-card-title">{title}</h3>}
                    {headerContent && (
                        <div className="info-card-header-extra">
                            {headerContent}
                        </div>
                    )}
                </div>
            )}
            <div className="info-card-content">{children}</div>
        </div>
    );
};

export default InfoCardBase;
