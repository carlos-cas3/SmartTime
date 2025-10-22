import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import "./InfoCardSettings.css";

interface SelectOption {
    value: any;
    label: string;
}

interface SettingsItem {
    key: string;
    icon?: React.ReactNode;
    title: string;
    description?: string;
    type: "toggle" | "select" | "button" | "custom";
    value?: any;
    actionLabel?: string;
    options?: SelectOption[];
}

interface InfoCardSettingsProps {
    description?: string;
    settingsItems?: SettingsItem[];
    onChange?: (key: string, newValue: any) => void;
}

export default function InfoCardSettings({
    description,
    settingsItems = [],
    onChange,
}: InfoCardSettingsProps) {
    const [localValues, setLocalValues] = useState<Record<string, any>>(() =>
        settingsItems.reduce((acc, it) => ({ ...acc, [it.key]: it.value }), {})
    );

    useEffect(() => {
        setLocalValues(
            settingsItems.reduce(
                (acc, it) => ({ ...acc, [it.key]: it.value }),
                {}
            )
        );
    }, [settingsItems]);

    const [editingKey, setEditingKey] = useState<string | null>(null);
    const inlineRefs = useRef<Record<string, HTMLDivElement | null>>(
        {} as Record<string, HTMLDivElement | null>
    );

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (editingKey) {
                const el = inlineRefs.current[editingKey];
                if (el && !el.contains(e.target as Node)) {
                    setEditingKey(null);
                }
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [editingKey]);

    const handleValueChange = (key: string, newVal: any) => {
        setLocalValues((prev) => ({ ...prev, [key]: newVal }));
        if (onChange) onChange(key, newVal);
    };

    const handleToggle = (key: string, current: any) => {
        handleValueChange(key, !current);
    };

    const handleSelectChoose = (key: string, val: any) => {
        handleValueChange(key, val);
        setEditingKey(null);
    };

    const renderControl = (item: SettingsItem) => {
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
                    ref={(el) => {
                        inlineRefs.current[item.key] = el;
                    }}
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
                                    {val === opt.value && (
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
