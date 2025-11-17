import useExamsData from "./useExamsData";
import useTasksData from "./useTasksData";
import useProjectsData from "./useProjectsData";
import useExtrasData from "./useExtrasData";

export default function useUpcomingActivities(daysAhead = 7) {
    const exams = useExamsData();
    const tasks = useTasksData();
    const projects = useProjectsData();
    const extras = useExtrasData();

    const today = new Date();
    const limitDate = new Date();
    limitDate.setDate(today.getDate() + daysAhead);

    // Normalizar formato para InfoCardList
    const normalize = (item, type) => ({
        id: item.id,
        type, // task | project | exam | extra
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

    // Filtrar actividades pendientes y dentro del rango
    return all.filter((item) => {
        if (item.status?.toLowerCase() !== "pendiente") return false;
        if (!item.date) return false;

        const d = new Date(item.date);
        return d >= today && d <= limitDate;
    });
}
