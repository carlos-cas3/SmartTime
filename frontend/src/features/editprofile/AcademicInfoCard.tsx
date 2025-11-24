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
    onSave?: (data: AcademicInfo) => void;
}

// Configuración centralizada de campos
const academicFields = {
    faculty: {
        label: "Facultad",
        type: "select",
        options: [
            {
                value: "fisi",
                label: "Ingeniería de Sistemas e Informática",
            },
        ],
        placeholder: "Seleccionar facultad",
    },
    cycle: {
        label: "Ciclo actual",
        type: "select",
        options: [
            { value: "1", label: "1er Ciclo" },
            { value: "2", label: "2do Ciclo" },
            { value: "3", label: "3er Ciclo" },
            { value: "4", label: "4to Ciclo" },
            { value: "5", label: "5to Ciclo" },
            { value: "6", label: "6to Ciclo" },
            { value: "7", label: "7mo Ciclo" },
            { value: "8", label: "8vo Ciclo" },
            { value: "9", label: "9no Ciclo" },
            { value: "10", label: "10mo Ciclo" },
        ],
        placeholder: "Seleccionar ciclo",
    },
};

// ---------- Componente ----------
export default function AcademicInfoCard({
    initialData,
    onSave,
}: AcademicInfoCardProps) {
    const [formData, setFormData] = useState(initialData);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isDirty, setIsDirty] = useState(false);

    // Detecta cambios
    useEffect(() => {
        setIsDirty(JSON.stringify(formData) !== JSON.stringify(initialData));
    }, [formData, initialData]);

    // Actualiza valores
    const handleChange = (field: keyof AcademicInfo, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (onSave) onSave(formData);
    };

    return (
        <InfoCardBase
            title="Información Académica"
            variant="default"
            isDirty={isDirty}
            onSave={handleSave}
            
        >
            <div className="academic-grid">
                {Object.entries(academicFields).map(([key, field]) => (
                    <div key={key} className="academic-field">
                        <label>{field.label}</label>

                        {field.type === "select" && (
                            <DropdownSelect
                                dropdownId={key}
                                value={(formData as any)[key]}
                                options={field.options}
                                placeholder={field.placeholder}
                                open={openDropdown === key}
                                onToggle={(id) =>
                                    setOpenDropdown(
                                        openDropdown === id ? null : id
                                    )
                                }
                                onChange={(value) =>
                                    handleChange(
                                        key as keyof AcademicInfo,
                                        value
                                    )
                                }
                                onClose={() => setOpenDropdown(null)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </InfoCardBase>
    );
}
