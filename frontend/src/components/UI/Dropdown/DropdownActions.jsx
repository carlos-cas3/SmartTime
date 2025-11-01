import { FiMoreVertical } from "react-icons/fi";
import "./DropdownActions.css";

export default function DropdownActions({
    dropdownId,
    actions = [],
    onActionClick,
    open = false,
    onToggle, 
    onClose, 
}) {
    return (
        <div
            className="dropdown-actions dropdown-root actions-wrapper"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className="actions-trigger"
                onClick={() => onToggle?.(dropdownId)}
            >
                <FiMoreVertical size={18} />
            </button>

            {open && (
                <div className="actions-menu">
                    {actions.map((action) => (
                        <div
                            key={action.id}
                            className={`action-item ${action.type || ""}`}
                            onClick={() => {
                                onActionClick?.(action.id);
                                onClose?.(); // ✅ cerrar globalmente
                            }}
                        >
                            {action.icon && (
                                <span className="action-icon">
                                    {action.icon}
                                </span>
                            )}
                            <span>{action.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
