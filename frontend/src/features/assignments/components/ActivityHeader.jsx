import DropdownSelect from "../../../components/UI/Dropdown/DropdownSelect";
import { Grid, List, XCircle } from "lucide-react";
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
    openDropdownId, // ← viene del padre (ActivityPage)
    onToggleDropdown, // ← función para alternar dropdowns
    onCloseDropdown, // ← función para cerrarlos
}) {
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

    const handleClearFilters = () => {
        onSearchChange("");
        onStatusChange("all");
        onPriorityChange("all");
        onCloseDropdown(); // cerrar dropdowns al limpiar
    };

    return (
        <div className="activity-header" onClick={onCloseDropdown}>
            <div className="activity-header-left">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Buscar títulos de las actividades..."
                    value={search}
                    data-close-dropdown 
                    onChange={(e) => {
                        onSearchChange(e.target.value);
                    }}
                />

                <div className="filters" onClick={(e) => e.stopPropagation()}>
                    {/* Dropdown de Estado */}
                    <DropdownSelect
                        dropdownId="header-status"
                        options={statusOptions}
                        value={status}
                        onChange={onStatusChange}
                        placeholder="Estado"
                        open={openDropdownId === "header-status"}
                        onToggle={() => onToggleDropdown("header-status")}
                        onClose={onCloseDropdown}
                        size="sm"
                    />

                    {/* Dropdown de Prioridad */}
                    <DropdownSelect
                        dropdownId="header-priority"
                        options={priorityOptions}
                        value={priority}
                        onChange={onPriorityChange}
                        placeholder="Prioridad"
                        open={openDropdownId === "header-priority"}
                        onToggle={() => onToggleDropdown("header-priority")}
                        onClose={onCloseDropdown}
                        size="sm"
                    />

                    <button
                        className="clear-filters-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClearFilters();
                        }}
                    >
                        <XCircle size={16} /> Limpiar
                    </button>
                </div>
            </div>

            <div
                className="activity-header-right"
                onClick={(e) => e.stopPropagation()}
            >
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
