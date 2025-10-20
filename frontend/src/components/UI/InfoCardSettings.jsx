import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import "./InfoCardSettings.css";

/**
 * settingsItems: Array de objetos:
 * {
 *   key: string (único),
 *   icon?: ReactNode (o string para mapear si quieres),
 *   title: string,
 *   description?: string,
 *   type: "toggle" | "select" | "button" | "custom",
 *   value?: any,
 *   options?: Array<{ value: any, label: string }>
 * }
 *
 * onChange(key, newValue) => función que actualiza y persiste (autosave)
 *
 * NOTE: el componente hace *autosave* — llama onChange tan pronto cambia.
 */
export default function InfoCardSettings({
    title,
    description,
    settingsItems = [],
    onChange,
}) {
    // local snapshot para manejar ediciones instantáneas y cancelar si ESC
    const [localValues, setLocalValues] = useState(() =>
        settingsItems.reduce((acc, it) => ({ ...acc, [it.key]: it.value }), {})
    );

    // feedback de guardado por item (map key -> boolean)
    const [savedMap, setSavedMap] = useState({});

    useEffect(() => {
        // si settingsItems cambian desde el padre, sincronizamos valores
        setLocalValues(
            settingsItems.reduce(
                (acc, it) => ({ ...acc, [it.key]: it.value }),
                {}
            )
        );
    }, [settingsItems]);

    // helper autosave: actualiza local + llama onChange + micro feedback
    const handleSave = (key, newVal) => {
        setLocalValues((prev) => ({ ...prev, [key]: newVal }));
        if (typeof onChange === "function") onChange(key, newVal);
        // show saved state temporarily
        setSavedMap((prev) => ({ ...prev, [key]: true }));
        setTimeout(
            () => setSavedMap((prev) => ({ ...prev, [key]: false })),
            1200
        );
    };

    // toggle for select inline editing: store which item is open for editing
    const [editingKey, setEditingKey] = useState(null);

    // keyboard and click outside for inline editor
    const inlineRefs = useRef({});

    useEffect(() => {
        function handleClick(e) {
            // close any editing if clicked outside its area
            if (editingKey) {
                const el = inlineRefs.current[editingKey];
                if (el && !el.contains(e.target)) setEditingKey(null);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [editingKey]);

    const handleToggle = (key, current) => {
        handleSave(key, !current);
    };

    const handleSelectChoose = (key, val) => {
        handleSave(key, val);
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
            // button type triggers onChange with a true/triggered flag
            return (
                <button
                    className="settings-action-btn"
                    onClick={() => {
                        if (typeof onChange === "function")
                            onChange(item.key, true);
                        setSavedMap((prev) => ({ ...prev, [item.key]: true }));
                        setTimeout(
                            () =>
                                setSavedMap((prev) => ({
                                    ...prev,
                                    [item.key]: false,
                                })),
                            1200
                        );
                    }}
                >
                    {item.actionLabel ?? "Acción"}
                </button>
            );
        }

        // default / custom: show value text (click to edit if has options)
        return <div className="plain-value">{String(val ?? "")}</div>;
    };

    return (
        <div className="info-card-settings">
            <div className="settings-header">
                <div>
                    {description && (
                        <p className="settings-desc">{description}</p>
                    )}
                </div>
            </div>

            <div className="settings-list">
                {settingsItems.map((item) => (
                    <div className="settings-item" key={item.key}>
                        <div className="settings-left">
                            <div className="settings-icon">
                                {/* allow passing ReactNode icon or fallback mapping */}
                                {item.icon ? item.icon : null}
                            </div>
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
                                {savedMap[item.key] && (
                                    <span className="saved-pill">Guardado</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
