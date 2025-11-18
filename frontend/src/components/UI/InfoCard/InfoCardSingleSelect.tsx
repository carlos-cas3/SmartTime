import React, { useEffect, useState } from "react";
import "./InfoCardSingleSelect.css"

export interface SingleSelectOption {
    label: string;
    value: string;
}

interface InfoCardSingleSelectProps {
    options: SingleSelectOption[];
    value: string;            
    onChange: (newValue: string) => void;
}

const InfoCardSingleSelect: React.FC<InfoCardSingleSelectProps> = ({
    options,
    value,
    onChange,
}) => {
    const [selected, setSelected] = useState<string>(value);

    useEffect(() => {
        setSelected(value);
    }, [value]);

    const handleSelect = (val: string) => {
        setSelected(val);
        onChange(val);
    };

    return (
        <div className="list-container-single">
            {options.map((opt) => (
                <div
                    key={opt.value}
                    className={`list-item-single ${
                        selected === opt.value ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(opt.value)}
                >
                    <span>{opt.label}</span>
                    {selected === opt.value && <span>✔</span>}
                </div>
            ))}
        </div>
    );
};

export default InfoCardSingleSelect;
