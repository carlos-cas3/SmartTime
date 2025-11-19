import { useState } from "react";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import InfoCardSingleSelect from "../../components/UI/InfoCard/InfoCardSingleSelect";
import InfoCardMultiSelect from "../../components/UI/InfoCard/InfoCardMultiSelect";
import InfoCardSettings from "../../components/UI/InfoCard/InfoCardSettings";
import { defaultSettings } from "../layout/topbar/notificationPanel/notificationSettings";

import ExamsIcon from "../../assets/examIcon-SidebarMenu.svg?react";
import ExtrasIcon from "../../assets/extraIcon-SidebarMenu.svg?react";
import ProjectsIcon from "../../assets/projectIcon-SidebarMenu.svg?react";
import TasksIcon from "../../assets/taskIcon-SidebarMenu.svg?react";

import "./Notifications.css";

function Notifications() {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("notif-settings");
        return saved ? JSON.parse(saved) : defaultSettings;
    });

    const [isDirty, setIsDirty] = useState(false);

    const updateSettings = (newValues) => {
        setSettings((prev) => {
            const updated = { ...prev, ...newValues };

            console.log("🟦 Nuevo cambio detectado:", newValues);
            console.log("🟩 Settings actualizados:", updated);

            return updated;
        });

        setIsDirty(true);
    };

    const saveSettings = () => {
        localStorage.setItem("notif-settings", JSON.stringify(settings));
        setIsDirty(false);
    };

    return (
        <div className="notifications-container">
            <div className="notif-left">
                <InfoCardBase title="Prioridad de notificación">
                    <InfoCardSingleSelect
                        value={settings.priorityFilter[0]}
                        options={[
                            { label: "Alta", value: "high" },
                            { label: "Media", value: "medium" },
                            { label: "Baja", value: "low" },
                        ]}
                        onChange={(newValue) => {
                            updateSettings({ priorityFilter: [newValue] });
                        }}
                    />
                </InfoCardBase>

                <InfoCardBase title="Actividades Notificadas">
                    <InfoCardMultiSelect
                        values={Object.keys(settings.sections).filter(
                            (sec) => settings.sections[sec]
                        )}
                        options={[
                            {
                                label: "Exámenes",
                                value: "exams",
                                icon: <ExamsIcon />,
                                description: "Notificaciones de exámenes",
                            },
                            {
                                label: "Tareas",
                                value: "tasks",
                                icon: <TasksIcon />,
                                description: "Notificaciones de tareas",
                            },
                            {
                                label: "Proyectos",
                                value: "projects",
                                icon: <ProjectsIcon />,
                                description: "Notificaciones de proyectos",
                            },
                            {
                                label: "Extras",
                                value: "extras",
                                icon: <ExtrasIcon />,
                                description: "Extras académicos",
                            },
                        ]}
                        onChange={(newValues) => {
                            const updatedSections = {};
                            for (const key of Object.keys(settings.sections)) {
                                updatedSections[key] = newValues.includes(key);
                            }
                            updateSettings({ sections: updatedSections });
                        }}
                    />
                </InfoCardBase>
            </div>

            <div className="notif-right">
                <InfoCardBase title="Anticipación de recordatorios">
                    <InfoCardSettings
                        settingsItems={[
                            {
                                key: "advanceTime",
                                title: "Tiempo de anticipación",
                                type: "select",
                                description:
                                    "Recibirás recordatorios según el tiempo seleccionado antes de la fecha límite",
                                value: settings.advanceTime,
                                options: [
                                    { value: "1d", label: "1 día antes" },
                                    { value: "2d", label: "2 días antes" },
                                    { value: "3d", label: "3 días antes" },
                                    { value: "1w", label: "1 semana antes" },
                                    { value: "2w", label: "2 semanas antes" },
                                ],
                            },
                        ]}
                        onChange={(key, newValue) => {
                            updateSettings({ [key]: newValue });
                        }}
                    />
                </InfoCardBase>
            </div>

            {isDirty && (
                <div className="notifications-save-container">
                    <button className="save-all-button" onClick={saveSettings}>
                        Guardar cambios
                    </button>
                </div>
            )}
        </div>
    );
}

export default Notifications;
