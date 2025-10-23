import React, { useState, useEffect } from "react";
import "./InfoCardBase.css";

interface InfoCardBaseProps {
    title?: string;
    icon?: React.ReactNode;
    variant?: string;
    headerContent?: React.ReactNode;
    children: React.ReactNode;
    onSave?: () => Promise<void> | void; // <- callback para guardar
    isDirty?: boolean; // <- indica si hay cambios pendientes
}

const InfoCardBase: React.FC<InfoCardBaseProps> = ({
    title,
    icon,
    variant,
    headerContent,
    children,
    onSave,
    isDirty = false,
}) => {
    const [showSaved, setShowSaved] = useState(false);
    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        if (!onSave) return;
        setSaving(true);
        await onSave();
        setSaving(false);
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 2000); // feedback visual
    };

    return (
        <div className={`info-card ${variant ? `info-card--${variant}` : ""}`}>
            {(title || icon || headerContent) && (
                <div
                    className={`info-card-header ${
                        variant ? `info-card-header--${variant}` : ""
                    }`}
                >
                    <div className="info-card-header-main">
                        {icon && <div className="info-card-icon">{icon}</div>}
                        {title && <h3 className="info-card-title">{title}</h3>}
                    </div>
                    {headerContent && (
                        <div className="info-card-header-extra">
                            {headerContent}
                        </div>
                    )}
                </div>
            )}

            <div className="info-card-content">{children}</div>

            {(isDirty || showSaved) && (
                <div className="info-card-footer">
                    {showSaved ? (
                        <span className="saved-feedback">
                            ✅ Cambios guardados
                        </span>
                    ) : (
                        <button
                            className="save-button"
                            onClick={handleSave}
                            disabled={saving}
                        >
                            {saving ? "Guardando..." : "Guardar cambios"}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default InfoCardBase;
