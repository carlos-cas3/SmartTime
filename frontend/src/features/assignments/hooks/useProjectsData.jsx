export default function useProjectsData() {
    return [
        {
            id: 1,
            title: "Proyecto de Investigación en IA",
            category: "Inteligencia Artificial",
            status: "pending",
            date: "2025-03-10",
            priority: "high",
            type: "project",
            matriz: "Urgente e Importante",
        },
        {
            id: 2,
            title: "Desarrollo de App Móvil",
            category: "Ingeniería de Software",
            status: "completed",
            date: "2025-01-30",
            priority: "medium",
            type: "project",
            matriz: "Importante pero No Urgente",
        },
        {
            id: 3,
            title: "Diseño de Página Web",
            category: "Diseño Web",
            status: "not-completed",
            date: "2025-02-25",
            priority: "low",
            type: "project",
            matriz: "Urgente pero No Importante",
        },
    ];
}
