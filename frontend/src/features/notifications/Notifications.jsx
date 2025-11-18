import { useState } from "react";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import InfoCardSingleSelect from "../../components/UI/InfoCard/InfoCardSingleSelect";
import InfoCardMultiSelect from "../../components/UI/InfoCard/InfoCardMultiSelect";
import { defaultSettings } from "../layout/topbar/notificationPanel/notificationSettings";

import ExamsIcon from "../../assets/examIcon-SidebarMenu.svg?react";
import ExtrasIcon from "../../assets/extraIcon-SidebarMenu.svg?react";
import ProjectsIcon from "../../assets/projectIcon-SidebarMenu.svg?react";
import TasksIcon from "../../assets/taskIcon-SidebarMenu.svg?react";

import "./Notifications.css"

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
                        },
                        {
                            label: "Tareas",
                            value: "tasks",
                            icon: <TasksIcon />,
                        },
                        {
                            label: "Proyectos",
                            value: "projects",
                            icon: <ProjectsIcon />,
                        },
                        {
                            label: "Extras",
                            value: "extras",
                            icon: <ExtrasIcon />,
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
