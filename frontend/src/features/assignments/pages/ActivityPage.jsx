import { useState, useEffect } from "react";
import ActivityHeader from "../components/ActivityHeader";
import ActivityContent from "../components/ActivityContent";
import EditActivity from "../components/Actions/EditActivity";
import CreateActivity from "../components/Actions/CreateActivity";
import ActivityDrawer from "../components/Actions/ActivityDrawer";
import "../components/ActivityContainer.css";

export default function ActivityPage({ useDataHook }) {
    const [data, setData] = useState(useDataHook());

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [priority, setPriority] = useState("all");
    const [matrixView, setMatrixView] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);

    const [openDropdownId, setOpenDropdownId] = useState(null);

    // 🔹 Manejo de acciones del dropdown
    const handleAction = (action, item) => {
        if (action === "edit") {
            setSelectedItem(item);
            setIsModalOpen(true);
        } else if (action === "view") {
            setSelectedItem(item);
            setIsViewOpen(true);
        } else if (action === "delete") {
            handleDelete(item);
        }
    };

    const handleCreate = (newActivity) => {
        const newId =
            data.length > 0 ? Math.max(...data.map((d) => d.id)) + 1 : 1;
        setData((prev) => [...prev, { ...newActivity, id: newId }]);
        console.log("Nueva actividad creada:", newActivity);
        setIsModalOpen(false);
    };

    const handleUpdate = (updatedActivity) => {
        setData((prev) =>
            prev.map((item) =>
                item.id === updatedActivity.id
                    ? { ...item, ...updatedActivity }
                    : item
            )
        );
        console.log("Actividad actualizada:", updatedActivity);
        setIsModalOpen(false);
    };

    const handleDelete = (activityToDelete) => {
        if (window.confirm(`¿Eliminar "${activityToDelete.title}"?`)) {
            setData((prev) =>
                prev.filter((item) => item.id !== activityToDelete.id)
            );
            console.log("Eliminado:", activityToDelete);

            // 👇 Cierra el drawer automáticamente si estaba abierto
            setIsViewOpen(false);
            setSelectedItem(null);
        }
    };

    const handleEditFromView = (item) => {
        setIsViewOpen(false);
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleToggleDropdown = (id) => {
        setOpenDropdownId((prev) => (prev === id ? null : id));
    };
    const handleCloseDropdown = () => setOpenDropdownId(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            const clickedDropdown = e.target.closest(".dropdown-root");
            const clickedInput = e.target.closest("input, select, textarea");
            const clickedFilter = e.target.closest("[data-close-dropdown]");

            if (clickedDropdown) return;

            if (clickedInput || clickedFilter) {
                handleCloseDropdown();
                return;
            }

            // 👇 Si fue fuera de todo → también cierra
            handleCloseDropdown();
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        console.log(
            "%c[Dropdown Debug]%c openDropdownId →",
            "color: white; background: #007acc; padding: 2px 4px; border-radius: 4px;",
            "color: #222;",
            openDropdownId
        );
    }, [openDropdownId]);

    // 🔹 Filtros
    const filteredData = data
        .filter((item) => {
            const normalize = (str) =>
                str
                    ?.normalize("NFD") // separa letras de sus tildes
                    .replace(/[\u0300-\u036f]/g, "") // elimina los diacríticos (tildes)
                    .toLowerCase(); // ignora mayúsculas

            return (
                search === "" ||
                normalize(item.title).includes(normalize(search))
            );
        })
        .filter((item) => status === "all" || item.status === status)
        .filter((item) => priority === "all" || item.priority === priority);

    return (
        <div className="activity-container">
            <div className="activity-container-header">
                <ActivityHeader
                    search={search}
                    onSearchChange={setSearch}
                    status={status}
                    onStatusChange={setStatus}
                    priority={priority}
                    onPriorityChange={setPriority}
                    onToggleMatrixView={() => setMatrixView(!matrixView)}
                    onAddActivity={() => {
                        handleCloseDropdown();
                        setSelectedItem(null);
                        setIsModalOpen(true);
                    }}
                    openDropdownId={openDropdownId}
                    onToggleDropdown={handleToggleDropdown}
                    onCloseDropdown={handleCloseDropdown}
                />
            </div>

            <div className="activity-container-content">
                <ActivityContent
                    data={filteredData}
                    matrixView={matrixView}
                    onAction={handleAction}
                    openDropdownId={openDropdownId}
                    onToggleDropdown={handleToggleDropdown}
                    onCloseDropdown={handleCloseDropdown}
                />
            </div>

            <ActivityDrawer
                isOpen={isViewOpen}
                activity={selectedItem}
                onClose={() => setIsViewOpen(false)}
                onEdit={handleEditFromView}
                onDelete={handleDelete}
            />

            {isModalOpen &&
                (selectedItem ? (
                    <EditActivity
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        activity={selectedItem}
                        onUpdate={handleUpdate}
                    />
                ) : (
                    <CreateActivity
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onCreate={handleCreate}
                    />
                ))}
        </div>
    );
}
