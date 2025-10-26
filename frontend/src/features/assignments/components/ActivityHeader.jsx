import { useState, useEffect } from "react";
import DropdownSelect from "../../../components/UI/Dropdown/DropdownSelect";
import { Grid, List } from "lucide-react";
import "./ActivityHeader.css";

export default function ActivityHeader({
    search,
    onSearchChange,
    status,
    onStatusChange,
    priority,
    onPriorityChange,
    matrixView,
    onToggleMatrixView,
    onAddActivity,
}) {
    const [openDropdown, setOpenDropdown] = useState(null); // "status" | "priority" | null

    // Cerrar al hacer click afuera:
    useEffect(() => {
        const handleClickOutside = () => setOpenDropdown(null);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const statusOptions = [
        { label: "Estado: Todos", value: "all" },
        { label: "Completado", value: "completed" },
        { label: "Pendiente", value: "pending" },
        { label: "No Completado", value: "not-completed" },
    ];

    const priorityOptions = [
        { label: "Prioridad: Todas", value: "all" },
        { label: "Alta", value: "high" },
        { label: "Media", value: "medium" },
        { label: "Baja", value: "low" },
    ];

    return (
        <div className="activity-header" onClick={() => setOpenDropdown(null)}>
            <div className="activity-header-left">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Buscar actividades..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />

                <div className="filters">
                    <DropdownSelect
                        options={statusOptions}
                        value={status}
                        onChange={onStatusChange}
                        placeholder="Estado"
                        open={openDropdown === "status"}
                        onToggle={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(
                                openDropdown === "status" ? null : "status"
                            );
                        }}
                        onClose={() => setOpenDropdown(null)}
                        size="sm"
                    />

                    <DropdownSelect
                        options={priorityOptions}
                        value={priority}
                        onChange={onPriorityChange}
                        placeholder="Prioridad"
                        open={openDropdown === "priority"}
                        onToggle={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(
                                openDropdown === "priority" ? null : "priority"
                            );
                        }}
                        onClose={() => setOpenDropdown(null)}
                        size="sm"
                    />
                </div>
            </div>

            <div className="activity-header-right">
                <button className="view-toggle" onClick={onToggleMatrixView}>
                    {matrixView ? <List size={18} /> : <Grid size={18} />}
                </button>

                <button className="add-btn" onClick={onAddActivity}>
                    + Nueva Actividad
                </button>
            </div>
        </div>
    );
}
