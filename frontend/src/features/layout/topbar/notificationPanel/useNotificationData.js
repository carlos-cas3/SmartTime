import useExamsData from "../../../assignments/hooks/useExamsData";
import useTasksData from "../../../assignments/hooks/useTasksData";
import useProjectsData from "../../../assignments/hooks/useProjectsData";
import useExtrasData from "../../../assignments/hooks/useExtrasData";

import { filterByPriority, normalizeItem } from "./helpers";

export default function useNotificationData(settings) {
    const examsRaw = useExamsData();
    const tasksRaw = useTasksData();
    const projectsRaw = useProjectsData();
    const extrasRaw = useExtrasData();

    const exams = filterByPriority(examsRaw, settings.priorityFilter)
        .filter((x) => x.type === "exam")
        .map((e) => normalizeItem(e, "exam"));

    const tasks = filterByPriority(tasksRaw, settings.priorityFilter).map((t) =>
        normalizeItem(t, "task")
    );

    const projects = filterByPriority(projectsRaw, settings.priorityFilter).map(
        (p) => normalizeItem(p, "project")
    );

    const extras = filterByPriority(extrasRaw, settings.priorityFilter).map(
        (ex) => normalizeItem(ex, "extra")
    );

    const total = exams.length + tasks.length + projects.length + extras.length;

    return { exams, tasks, projects, extras, total };
}