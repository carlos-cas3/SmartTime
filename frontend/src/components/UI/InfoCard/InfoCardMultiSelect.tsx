import React, { useEffect, useState } from "react";
import "./InfoCardMultiSelect.css"


export interface MultiSelectOption {
    label: string;
    value: string;
    description?: string;
    icon?: React.ReactNode;
}

interface InfoCardMultiSelectProps {
    options: MultiSelectOption[];
    values: string[];
    onChange: (newValues: string[]) => void;
}

const InfoCardMultiSelect: React.FC<InfoCardMultiSelectProps> = ({
    options,
    values,
    onChange,
}) => {
    const [selected, setSelected] = useState<string[]>(values);

    useEffect(() => {
        setSelected(values);
    }, [values]);

    const toggle = (val: string) => {
        const updated = selected.includes(val)
            ? selected.filter((v) => v !== val)
            : [...selected, val];

        setSelected(updated);
        onChange(updated);
    };

    return (
        <div className="multi-wrapper">
            {options.map((opt) => {
                const isSelected = selected.includes(opt.value);

                return (
                    <div
                        key={opt.value}
                        className={`multi-item ${isSelected ? "active" : ""}`}
                        onClick={() => toggle(opt.value)}
                    >
                        {/*  Checkbox */}
                        <div className="multi-checkbox">
                            <input
                                type="checkbox"
                                checked={isSelected}
                                readOnly
                            />
                        </div>

                        {/*  Icono */}
                        {opt.icon && (
                            <div className="multi-icon">{opt.icon}</div>
                        )}

                        {/* Textos */}
                        <div className="multi-texts">
                            <div className="multi-title">{opt.label}</div>
                            {opt.description && (
                                <div className="multi-desc">
                                    {opt.description}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default InfoCardMultiSelect;
