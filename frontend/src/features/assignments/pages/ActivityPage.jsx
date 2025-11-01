import { useState } from "react";
import ActivityHeader from "../components/ActivityHeader";
import ActivityContent from "../components/ActivityContent";
import EditActivity from "../components/Modal/EditActivity";
import CreateActivity from "../components/Modal/CreateActivity";
import "../components/ActivityContainer.css";

export default function ActivityPage({ title, useDataHook }) {
    const [data, setData] = useState(useDataHook());

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [priority, setPriority] = useState("all");
    const [matrixView, setMatrixView] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // 🔹 Manejo de acciones del dropdown
    const handleAction = (action, item) => {
        if (action === "edit") {
            setSelectedItem(item);
            setIsModalOpen(true);
        } else if (action === "view") {
            setSelectedItem(item);
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
        }
    };

    // 🔹 Filtros
    const filteredData = data
        .filter(
            (item) =>
                search === "" ||
                item.title.toLowerCase().includes(search.toLowerCase())
        )
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
                        setSelectedItem(null);
                        setIsModalOpen(true);
                    }}
                />
            </div>

            <div className="activity-container-content">
                <ActivityContent
                    data={filteredData}
                    matrixView={matrixView}
                    onAction={handleAction}
                />
            </div>

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
