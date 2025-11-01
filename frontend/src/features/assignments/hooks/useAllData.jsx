import ExamSidebarIcon from "../../../assets/examIcon-SidebarMenu.svg?react";
import ExtraSidebarIcon from "../../../assets/extraIcon-SidebarMenu.svg?react";
import ProjectSidebarIcon from "../../../assets/projectIcon-SidebarMenu.svg?react";
import TaskSidebarIcon from "../../../assets/taskIcon-SidebarMenu.svg?react";

import useExamsData from "./useExamsData";
import useTasksData from "./useTasksData";
import useProjectsData from "./useProjectsData";
import useExtrasData from "./useExtrasData";

export default function useAllData({ status = null, type = null } = {}) {
    const exams = useExamsData();
    const tasks = useTasksData();
    const projects = useProjectsData();
    const extras = useExtrasData();

    let combined = [...exams, ...tasks, ...projects, ...extras];

    // 🔹 Asignar ícono SVG según el type
    combined = combined.map((item) => ({
        ...item,
        icon: getIconByType(item.type),
    }));

    // 🔹 Filtros dinámicos
    if (status) {
        combined = combined.filter((item) => item.status === status);
    }

    if (type) {
        combined = combined.filter((item) => item.type === type);
    }

    return combined;
}

// 🔸 Función auxiliar para asignar íconos SVG según el tipo
function getIconByType(type) {
    switch (type) {
        case "exam":
            return <ExamSidebarIcon width={22} height={22} />;
        case "extra":
            return <ExtraSidebarIcon width={22} height={22} />;
        case "project":
            return <ProjectSidebarIcon width={22} height={22} />;
        default:
            return <TaskSidebarIcon width={22} height={22} />;
    }
}
