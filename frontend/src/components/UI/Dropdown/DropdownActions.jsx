import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import "./DropdownActions.css";

export default function DropdownActions({
    actions = [], // <= [{ id, label, icon, type }]
    onActionClick, // <= callback con el id de la acción
    open: controlledOpen, // <= opcional (modo controlado)
    onToggle, // <= opcional (si el padre lo controla)
    onClose, // <= opcional
}) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const ref = useRef(null);

    const toggle = () => {
        if (isControlled) onToggle?.(!open);
        else setInternalOpen(!open);
    };

    const close = () => {
        if (isControlled) onClose?.();
        else setInternalOpen(false);
    };

    // Detectar click fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                close();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [close]);

    return (
        <div
            className="actions-wrapper"
            ref={ref}
            onClick={(e) => e.stopPropagation()}
        >
            <button className="actions-trigger" onClick={toggle}>
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
                                close();
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
