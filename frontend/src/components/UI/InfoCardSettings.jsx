import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

import "./InfoCardSettings.css";

/**
 * settingsItems: Array de objetos:
 * {
 *   key: string,
 *   icon?: ReactNode,
 *   title: string,
 *   description?: string,
 *   type: "toggle" | "select" | "button" | "custom",
 *   value?: any,
 *   options?: Array<{ value: any, label: string }>
 * }
 *
 * onChange(key, newValue) => función para actualizar valores temporalmente
 *
 * NOTA: No guarda automáticamente. Solo cambia localmente.
 */
export default function InfoCardSettings({
    description,
    settingsItems = [],
    onChange,
}) {
    // Estado local (sin autosave)
    const [localValues, setLocalValues] = useState(() =>
        settingsItems.reduce((acc, it) => ({ ...acc, [it.key]: it.value }), {})
    );

    useEffect(() => {
        // sincronizar cuando cambien los props
        setLocalValues(
            settingsItems.reduce(
                (acc, it) => ({ ...acc, [it.key]: it.value }),
                {}
            )
        );
    }, [settingsItems]);

    const [editingKey, setEditingKey] = useState(null);
    const inlineRefs = useRef({});

    useEffect(() => {
        function handleClick(e) {
            if (editingKey) {
                const el = inlineRefs.current[editingKey];
                if (el && !el.contains(e.target)) setEditingKey(null);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [editingKey]);

    const handleValueChange = (key, newVal) => {
        setLocalValues((prev) => ({ ...prev, [key]: newVal }));
        if (typeof onChange === "function") onChange(key, newVal);
    };

    const handleToggle = (key, current) => {
        handleValueChange(key, !current);
    };

    const handleSelectChoose = (key, val) => {
        handleValueChange(key, val);
        setEditingKey(null);
    };

    const renderControl = (item) => {
        const val = localValues[item.key];

        if (item.type === "toggle") {
            return (
                <button
                    aria-pressed={!!val}
                    className={`switch ${val ? "on" : "off"}`}
                    onClick={() => handleToggle(item.key, val)}
                >
                    <span className="switch-knob" />
                </button>
            );
        }

        if (item.type === "select") {
            return (
                <div
                    className="inline-select"
                    ref={(el) => (inlineRefs.current[item.key] = el)}
                >
                    {editingKey === item.key ? (
                        <div className="inline-options" role="listbox">
                            {item.options?.map((opt) => (
                                <button
                                    key={String(opt.value)}
                                    className="inline-option"
                                    onClick={() =>
                                        handleSelectChoose(item.key, opt.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter")
                                            handleSelectChoose(
                                                item.key,
                                                opt.value
                                            );
                                        if (e.key === "Escape")
                                            setEditingKey(null);
                                    }}
                                >
                                    <span className="inline-option-label">
                                        {opt.label}
                                    </span>
                                    {localValues[item.key] === opt.value && (
                                        <FaCheck className="inline-check" />
                                    )}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <button
                            className="inline-value"
                            onClick={() => setEditingKey(item.key)}
                            aria-haspopup="listbox"
                        >
                            <span>
                                {item.options?.find((o) => o.value === val)
                                    ?.label ?? String(val ?? "")}
                            </span>
                            <FaChevronDown className="chev" />
                        </button>
                    )}
                </div>
            );
        }

        if (item.type === "button") {
            return (
                <button
                    className="settings-action-btn"
                    onClick={() => handleValueChange(item.key, true)}
                >
                    {item.actionLabel ?? "Acción"}
                </button>
            );
        }

        return <div className="plain-value">{String(val ?? "")}</div>;
    };

    return (
        <div className="info-card-settings">
            <div className="settings-header">
                {description && <p className="settings-desc">{description}</p>}
            </div>

            <div className="settings-list">
                {settingsItems.map((item) => (
                    <div className="settings-item" key={item.key}>
                        <div className="settings-left">
                            {item.icon && (
                                <div className="settings-icon">{item.icon}</div>
                            )}
                            <div className="settings-text">
                                <div className="settings-item-title">
                                    {item.title}
                                </div>
                                {item.description && (
                                    <div className="settings-item-desc">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="settings-right">
                            <div className="settings-control-wrap">
                                {renderControl(item)}
                                {/* ❌ Eliminado el mensaje "Guardado" */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
