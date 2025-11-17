import "./NotificationPanel.css";

import NotificationHeader from "./NotificationHeader";
import NotificationSection from "./NotificationSection";
import NotificationFooter from "./NotificationFooter";

import { defaultSettings } from "./notificationSettings";
import useNotificationData from "./useNotificationData";

export default function NotificationPanel({ total, settings = defaultSettings }) {
    const { exams, tasks, projects, extras } =
        useNotificationData(settings);

    return (
        <div className="notification-panel">
            {/* Header */}
            <NotificationHeader total={total} />

            {/* Body */}
            <div className="np-body">
                {settings.sections.exams && (
                    <NotificationSection
                        title="Exámenes"
                        items={exams}
                        sectionType="exam"
                    />
                )}

                {settings.sections.tasks && (
                    <NotificationSection
                        title="Tareas"
                        items={tasks}
                        sectionType="task"
                    />
                )}

                {settings.sections.projects && (
                    <NotificationSection
                        title="Proyectos"
                        items={projects}
                        sectionType="project"
                    />
                )}

                {settings.sections.extras && (
                    <NotificationSection
                        title="Extras"
                        items={extras}
                        sectionType="extra"
                    />
                )}

                {total === 0 && (
                    <p className="np-empty">No tienes notificaciones.</p>
                )}
            </div>

            {/* Footer */}
            <NotificationFooter />
        </div>
    );
}
