import { FiChevronDown, FiCheck } from "react-icons/fi";
import "./DropdownSelect.css";

export default function DropdownSelect({
    options = [],
    value,
    onChange,
    placeholder = "Seleccionar...",
    icon,
    open, // <- controlado desde el padre
    onToggle, // <- abrir/cerrar
    onClose, // <- cerrar cuando elegimos opción
}) {
    const selected = options.find((o) => o.value === value);

    return (
        <div className="dropdown-select" onClick={(e) => e.stopPropagation()}>
            <button className="dropdown-trigger" onClick={onToggle}>
                {icon && <span className="dropdown-icon">{icon}</span>}

                <span
                    className={`dropdown-label ${
                        !selected ? "placeholder" : ""
                    }`}
                >
                    {selected ? selected.label : placeholder}
                </span>

                <FiChevronDown
                    className={`dropdown-chevron ${open ? "open" : ""}`}
                />
            </button>

            {open && (
                <div className="dropdown-menu">
                    {options.map((item) => (
                        <div
                            key={item.value}
                            className={`dropdown-item ${
                                item.value === value ? "selected" : ""
                            }`}
                            onClick={() => {
                                onChange(item.value);
                                onClose();
                            }}
                        >
                            <span>{item.label}</span>
                            {item.value === value && (
                                <FiCheck className="check-icon" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
