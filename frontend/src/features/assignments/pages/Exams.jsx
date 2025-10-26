import { useState } from "react";
import ActivityHeader from "../components/ActivityHeader";
import ActivityContent from "../components/ActivityContent";
import useExamsData from "../hooks/useExamsData";
import ActivityModal from "../components/ActivityModal";

import "../components/ActivityContainer.css";

export default function Exams() {
    const data = useExamsData();

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [priority, setPriority] = useState("all");
    const [matrixView, setMatrixView] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAction = (action, item) => {
        if (action === "view") {
            setSelectedItem(item); // IMPORTANTE
            setIsModalOpen(true);
        } else if (action === "edit") {
            setSelectedItem(item);
            setIsModalOpen(true);
            // podrías abrir en "modo edición" si deseas
        } else if (action === "delete") {
            console.log("Confirmar y eliminar", item);
        }
    };

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
                        setSelectedItem(null); // nuevo → modo CREACIÓN
                        setIsModalOpen(true); // abre modal
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
            <ActivityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedItem ? "Editar actividad" : "Nueva actividad"}
                description={
                    selectedItem
                        ? "Modifica los datos de esta actividad"
                        : "Agrega una nueva tarea a tu lista"
                }
            />
        </div>
    );
}
