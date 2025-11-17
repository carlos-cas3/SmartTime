export default function useProjectsData() {
    return [
        {
            id: 1,
            title: "Proyecto de Investigación en IA",
            category: "Inteligencia Artificial",
            status: "pending",
            date: "2025-11-19", 
            priority: "high",
            type: "project",
            matriz: "Urgente e Importante",
        },
        {
            id: 2,
            title: "Desarrollo de App Móvil",
            category: "Ingeniería de Software",
            status: "completed",
            date: "2025-11-20", 
            priority: "high",
            type: "project",
            matriz: "Urgente y No Importante",
        },
        {
            id: 3,
            title: "Diseño de Página Web",
            category: "Diseño Web",
            status: "not-completed",
            date: "2025-11-28", 
            priority: "high",
            type: "project",
            matriz: "No Urgente y No Importante",
        },
    ];
}
