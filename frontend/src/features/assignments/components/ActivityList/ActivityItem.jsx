import { FiEye, FiTrash2, FiEdit } from "react-icons/fi";
import DropdownActions from "../../../../components/UI/Dropdown/DropdownActions";

import ExamSidebarIcon from "../../../../assets/examIcon-SidebarMenu.svg?react";
import ExtraSidebarIcon from "../../../../assets/extraIcon-SidebarMenu.svg?react";
import ProjectSidebarIcon from "../../../../assets/projectIcon-SidebarMenu.svg?react";
import TaskSidebarIcon from "../../../../assets/taskIcon-SidebarMenu.svg?react";

import "./ActivityItem.css";

export default function ActivityItem({
    item,
    onAction,
    openDropdownId,
    onToggleDropdown,
    onCloseDropdown,
}) {
    const getIconByType = (type) => {
        switch (type) {
            case "exam":
                return <ExamSidebarIcon size={24} />;
            case "extra":
                return <ExtraSidebarIcon size={24} />;
            case "project":
                return <ProjectSidebarIcon size={24} />;
            default:
                return <TaskSidebarIcon size={24} />;
        }
    };

    return (
        <div
            className={`activity-item status-${item.status} priority-${item.priority}`}
        >
            <div className="activity-icon">{getIconByType(item.type)}</div>

            <div className="activity-info">
                <div className="activity-title-row">
                    <h3 className="activity-title">{item.title}</h3>

                    <DropdownActions
                        dropdownId={`actions-${item.id}`} // ✅ id único
                        open={openDropdownId === `actions-${item.id}`} // ✅ se controla desde arriba
                        onToggle={onToggleDropdown}
                        onClose={onCloseDropdown}
                        actions={[
                            {
                                id: "view",
                                label: "Ver detalles",
                                icon: <FiEye />,
                            },
                            { id: "edit", label: "Editar", icon: <FiEdit /> },
                            {
                                id: "delete",
                                label: "Eliminar",
                                icon: <FiTrash2 />,
                                type: "delete",
                            },
                        ]}
                        onActionClick={(actionId) => onAction(actionId, item)}
                    />
                </div>

                <span className="activity-category">{item.category}</span>

                <div className="activity-meta">
                    <span className={`chip status ${item.status}`}>
                        {item.status === "pending" && "Pendiente"}
                        {item.status === "completed" && "Completado"}
                        {item.status === "not-completed" && "No Completado"}
                    </span>

                    <span className="date">{item.date}</span>

                    <span className={`chip priority ${item.priority}`}>
                        {item.priority === "high" && "Alta"}
                        {item.priority === "medium" && "Media"}
                        {item.priority === "low" && "Baja"}
                    </span>
                </div>
            </div>
        </div>
    );
}
