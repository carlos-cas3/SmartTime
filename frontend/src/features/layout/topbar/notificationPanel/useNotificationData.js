import useExamsData from "../../../assignments/hooks/useExamsData";
import useTasksData from "../../../assignments/hooks/useTasksData";
import useProjectsData from "../../../assignments/hooks/useProjectsData";
import useExtrasData from "../../../assignments/hooks/useExtrasData";

import { filterByPriority, normalizeItem , filterByTime} from "./helpers";

export default function useNotificationData(settings) {
    const examsRaw = useExamsData();
    const tasksRaw = useTasksData();
    const projectsRaw = useProjectsData();
    const extrasRaw = useExtrasData();

    const advance = settings.advanceTime;

    const exams = filterByTime(
        filterByPriority(examsRaw, settings.priorityFilter),
        advance
    )
        .filter(x => settings.sections.exams)
        .map(e => normalizeItem(e, "exam"));

    const tasks = filterByTime(
        filterByPriority(tasksRaw, settings.priorityFilter),
        advance
    )
        .filter(x => settings.sections.tasks)
        .map(t => normalizeItem(t, "task"));

    const projects = filterByTime(
        filterByPriority(projectsRaw, settings.priorityFilter),
        advance
    )
        .filter(x => settings.sections.projects)
        .map(p => normalizeItem(p, "project"));

    const extras = filterByTime(
        filterByPriority(extrasRaw, settings.priorityFilter),
        advance
    )
        .filter(x => settings.sections.extras)
        .map(ex => normalizeItem(ex, "extra"));

    const total = exams.length + tasks.length + projects.length + extras.length;

    return { exams, tasks, projects, extras, total };
}