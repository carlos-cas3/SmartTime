import ExamSidebarIcon from "../../../assets/examIcon-SidebarMenu.svg?react";
import ExtraSidebarIcon from "../../../assets/extraIcon-SidebarMenu.svg?react";
import ProjectSidebarIcon from "../../../assets/projectIcon-SidebarMenu.svg?react";
import TaskSidebarIcon from "../../../assets/taskIcon-SidebarMenu.svg?react";

import useExamsData from "./useExamsData";
import useTasksData from "./useTasksData";
import useProjectsData from "./useProjectsData";
import useExtrasData from "./useExtrasData";

export default function useAllData({ status = null, type = null } = {}) {
    const examsHook = useExamsData();
    const tasksHook = useTasksData();
    const projectsHook = useProjectsData();
    const extrasHook = useExtrasData();

    const exams = examsHook.exams || [];
    const tasks = tasksHook.tasks || [];
    const projects = projectsHook.projects || [];
    const extras = extrasHook.extras || [];

    let combined = [...exams, ...tasks, ...projects, ...extras];

    combined = combined.map((item) => ({
        ...item,
        icon: getIconByType(item.type),
    }));

    if (status) {
        combined = combined.filter((item) => item.status === status);
    }

    if (type) {
        combined = combined.filter((item) => item.type === type);
    }

    return combined;
}

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
