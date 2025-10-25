import React from "react";
import InfoCardBase from "./InfoCardBase";
import Table from "./Table.tsx";
import "./InfoCardTable.css";

interface Column {
    label: string;
    field: string;
    type?: "tag" | "status" | "text";
}

interface InfoCardTableProps {
    title?: string;
    icon?: React.ReactNode;
    description?: string;
    columns: Column[];
    data: Record<string, any>[];
}

const InfoCardTable: React.FC<InfoCardTableProps> = ({
    title,
    icon,
    description,
    columns,
    data,
}) => {
    return (
        <InfoCardBase title={title} icon={icon} variant="table">
            <div className="info-card-table-wrapper">
                {description && <p className="info-card-desc">{description}</p>}
                <Table columns={columns} data={data} />
            </div>
        </InfoCardBase>
    );
};

export default InfoCardTable;
