import React from "react";
import { IconType } from "react-icons";
import "./InfoCard.css";
import InfoCardSimple from "./InfoCardSimple";
import InfoCardStats from "./InfoCardStats";
import InfoCardList from "./InfoCardList";

interface ListItem {
    title: string;
    subtitle?: string;
    date?: string;
    priority?: "Alta" | "Normal" | string;
}

interface InfoCardProps {
    title: string;
    icon?: IconType;
    value?: string | number;
    description?: string;
    progress?: number;
    chart?: React.ReactNode;
    listItems?: ListItem[];
    variant?: "simple" | "stats" | "list";
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    icon: Icon,
    value,
    description,
    progress,
    chart,
    listItems,
    variant = "simple",
}) => {
    return (
        <div
            className={`info-card ${
                variant === "stats" ? "info-card--stats" : ""
            }`}
        >
            <div className="info-card-header info-card-header--space">
                <h3 className="info-card-title">{title}</h3>
                {Icon && <Icon size={28} className="info-card-icon" />}
            </div>

            {variant === "simple" && (
                <InfoCardSimple
                    value={value}
                    description={description}
                    progress={progress}
                    chart={chart}
                />
            )}

            {variant === "stats" && (
                <InfoCardStats description={description} chart={chart} />
            )}

            {variant === "list" && listItems && (
                <InfoCardList listItems={listItems} />
            )}
        </div>
    );
};

export default InfoCard;
