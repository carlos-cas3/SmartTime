import React from "react";
import "./Table.css";

const TYPE_COLORS: Record<string, string> = {
    Tarea: "#f6c23e",
    Examen: "#e74a3b",
    Proyecto: "#858796",
    Extra: "#1cc88a",
};

const STATUS_COLORS: Record<string, string> = {
    Completada: "#28a745",
    Pendiente: "#e0a800",
    "No Completada": "#dc3545",
};

interface Column {
    label: string;
    field: string;
    type?: "tag" | "status" | "text";
}

interface TableProps {
    columns: Column[];
    data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.label}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {columns.map((col, j) => {
                                const value = row[col.field];

                                if (col.type === "tag") {
                                    return (
                                        <td key={j}>
                                            <span
                                                className="tag-badge"
                                                style={{
                                                    background:
                                                        TYPE_COLORS[value] ||
                                                        "#ccc",
                                                }}
                                            >
                                                {value}
                                            </span>
                                        </td>
                                    );
                                }

                                if (col.type === "status") {
                                    return (
                                        <td key={j}>
                                            <span
                                                className="status-badge"
                                                style={{
                                                    color: STATUS_COLORS[value],
                                                }}
                                            >
                                                ● {value}
                                            </span>
                                        </td>
                                    );
                                }

                                return <td key={j}>{value}</td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
