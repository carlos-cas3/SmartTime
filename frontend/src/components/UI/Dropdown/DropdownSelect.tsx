import { FiChevronDown, FiCheck } from "react-icons/fi";
import "./DropdownSelect.css";

// -------------------- Tipos --------------------
export interface SelectOption {
    value: string;
    label: string;
}

interface DropdownSelectProps {
    dropdownId: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    icon?: React.ReactNode;
    open: boolean;
    onToggle: (id: string) => void;
    onClose: () => void;
    size?: "sm" | "md" | "lg";
}

// -------------------- Componente --------------------
export default function DropdownSelect({
    dropdownId,
    options = [],
    value,
    onChange,
    placeholder = "Seleccionar...",
    icon,
    open,
    onToggle,
    onClose,
    size = "md",
}: DropdownSelectProps) {
    const selected = options.find((o) => o.value === value);

    return (
        <div
            className={`dropdown-select dropdown-root ${size}`}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                type="button"
                className="dropdown-trigger"
                onClick={() => onToggle(dropdownId)}
            >
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
