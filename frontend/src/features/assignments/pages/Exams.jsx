import { useState } from "react";
import ActivityHeader from "../components/ActivityHeader";
import ActivityContent from "../components/ActivityContent";
import useExamsData from "../hooks/useExamsData";

import "../components/ActivityContainer.css"

export default function Exams() {
    const data = useExamsData();

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [priority, setPriority] = useState("all");
    const [matrixView, setMatrixView] = useState(false);

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
                    onAddActivity={() => console.log("Abrir modal")}
                />
            </div>
            <div className="activity-container-content">
                <ActivityContent data={filteredData} matrixView={matrixView} />
            </div>
        </div>
    );
}
