import { useState, useEffect } from "react";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import DropdownSelect from "../../components/UI/Dropdown/DropdownSelect";
import "./AcademicInfoCard.css";

// ---------- Tipos ----------
interface AcademicInfo {
    faculty: string;
    cycle: string;
}

interface AcademicInfoCardProps {
    initialData: AcademicInfo;
    onChange: (data: AcademicInfo) => void;
}

interface SelectOption {
    value: string;
    label: string;
}

interface AcademicFieldConfig {
    label: string;
    type: "select";
    options: SelectOption[];
    placeholder: string;
}

// Config centralizado tipado correctamente
const academicFields: Record<string, AcademicFieldConfig> = {
    faculty: {
        label: "Facultad",
        type: "select",
        options: [
            {
                value: "Ingeniería de Sistemas e Informática",
                label: "Ingeniería de Sistemas e Informática",
            },
        ],
        placeholder: "Seleccionar facultad",
    },
    cycle: {
        label: "Ciclo actual",
        type: "select",
        options: [
            { value: "1er Ciclo", label: "1er Ciclo" },
            { value: "2do Ciclo", label: "2do Ciclo" },
            { value: "3er Ciclo", label: "3er Ciclo" },
            { value: "4to Ciclo", label: "4to Ciclo" },
            { value: "5to Ciclo", label: "5to Ciclo" },
            { value: "6to Ciclo", label: "6to Ciclo" },
            { value: "7mo Ciclo", label: "7mo Ciclo" },
            { value: "8vo Ciclo", label: "8vo Ciclo" },
            { value: "9no Ciclo", label: "9no Ciclo" },
            { value: "10mo Ciclo", label: "10mo Ciclo" },
        ],
        placeholder: "Seleccionar ciclo",
    },
};

export default function AcademicInfoCard({ initialData, onChange }: AcademicInfoCardProps) {
    const [formData, setFormData] = useState<AcademicInfo>({
        faculty: initialData.faculty,
        cycle: initialData.cycle,
    });

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        onChange(formData);
    }, [formData]);

    const handleChange = (field: keyof AcademicInfo, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <InfoCardBase title="Información Académica" variant="default" isDirty={false}>
            <div className="academic-grid">
                {Object.entries(academicFields).map(([key, field]) => (
                    <div key={key} className="academic-field">
                        <label>{field.label}</label>

                        <DropdownSelect
                            dropdownId={key}
                            value={(formData as any)[key]}
                            options={field.options}
                            placeholder={field.placeholder}
                            open={openDropdown === key}
                            onToggle={(id: string) =>
                                setOpenDropdown(openDropdown === id ? null : id)
                            }
                            onChange={(value: string) =>
                                handleChange(key as keyof AcademicInfo, value)
                            }
                            onClose={() => setOpenDropdown(null)}
                        />
                    </div>
                ))}
            </div>
        </InfoCardBase>
    );
}
