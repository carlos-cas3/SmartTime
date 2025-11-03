export default function useTasksData() {
    return [
        {
            id: 1,
            title: "Leer capítulo 3 de Álgebra",
            category: "Matemáticas",
            status: "pending",
            date: "2025-11-04",
            priority: "high",
            type: "task",
            matriz: "Urgente e Importante",
        },
        {
            id: 2,
            title: "Hacer resumen de Historia",
            category: "Historia Universal",
            status: "completed",
            date: "2025-10-20",
            priority: "medium",
            type: "task",
            matriz: "No Urgente e Importante",
        },
        {
            id: 3,
            title: "Practicar ejercicios de Programación",
            category: "Computación",
            status: "not-completed",
            date: "2025-10-29",
            priority: "low",
            type: "task",
            matriz: "Urgente y No Importante",
        },
    ];
}
