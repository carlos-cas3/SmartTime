import { FiEye, FiTrash2, FiEdit } from "react-icons/fi";
import DropdownActions from "../../../components/UI/Dropdown/DropdownActions";
import { BookOpen, ClipboardList, PenTool } from "lucide-react";
import "./ActivityItem.css";


export default function ActivityItem({ item , onAction}) {
    const getIconByType = (type) => {
        switch (type) {
            case "exam":
                return <ClipboardList size={24} />;
            case "assignment":
                return <PenTool size={24} />;
            case "quiz":
                return <BookOpen size={24} />;
            default:
                return <ClipboardList size={24} />;
        }
    };

    return (
        <div className={`activity-item status-${item.status} priority-${item.priority}`}>
            {/* ICONO */}
            <div className="activity-icon">{getIconByType(item.type)}</div>

            {/* CONTENIDO */}
            <div className="activity-info">
                <div className="activity-title-row">
                    <h3 className="activity-title">{item.title}</h3>
                    
                    <DropdownActions
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
                        onActionClick={(id) => onAction(id, item)} 
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
