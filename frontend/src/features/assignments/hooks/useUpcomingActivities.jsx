import useExamsData from "./useExamsData";
import useTasksData from "./useTasksData";
import useProjectsData from "./useProjectsData";
import useExtrasData from "./useExtrasData";

export default function useUpcomingActivities(daysAhead = 7) {
    const examsHook = useExamsData();
    const tasksHook = useTasksData();
    const projectsHook = useProjectsData();
    const extrasHook = useExtrasData();

    const exams = examsHook.exams || [];
    const tasks = tasksHook.tasks || [];
    const projects = projectsHook.projects || [];
    const extras = extrasHook.extras || [];

    const today = new Date();
    const limitDate = new Date();
    limitDate.setDate(today.getDate() + daysAhead);

    const normalize = (item, type) => ({
        id: item.id,
        type,
        title: item.name || item.title,
        course: item.course || "",
        date: item.date,
        priority: item.priority,
        status: item.status,
    });

    const all = [
        ...exams.map((e) => normalize(e, "exam")),
        ...tasks.map((t) => normalize(t, "task")),
        ...projects.map((p) => normalize(p, "project")),
        ...extras.map((x) => normalize(x, "extra")),
    ];

    return all.filter((item) => {
        if (item.status?.toLowerCase() !== "pendiente") return false;
        if (!item.date) return false;

        const d = new Date(item.date);
        return d >= today && d <= limitDate;
    });
}
