export default function useTasksData() {
    return [
        {
            id: 1,
            title: "Leer capítulo 3 de Álgebra",
            category: "Matemáticas",
            status: "pending",
            date: "2025-02-02",
            priority: "high",
            type: "task",
            matriz: "Urgente e Importante",
        },
        {
            id: 2,
            title: "Hacer resumen de Historia",
            category: "Historia Universal",
            status: "completed",
            date: "2025-01-25",
            priority: "medium",
            type: "task",
            matriz: "Importante pero No Urgente",
        },
        {
            id: 3,
            title: "Practicar ejercicios de Programación",
            category: "Computación",
            status: "not-completed",
            date: "2025-02-10",
            priority: "low",
            type: "task",
            matriz: "Urgente pero No Importante",
        },
    ];
}
