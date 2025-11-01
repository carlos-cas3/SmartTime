export default function useExtrasData() {
    return [
        {
            id: 1,
            title: "Charla de Orientación Vocacional",
            category: "Desarrollo Personal",
            status: "completed",
            date: "2025-10-10", 
            priority: "low",
            type: "extra",
            matriz: "No Urgente pero Importante",
        },
        {
            id: 2,
            title: "Taller de Programación",
            category: "Tecnología",
            status: "pending",
            date: "2025-11-20",
            priority: "medium",
            type: "extra",
            matriz: "Importante pero No Urgente",
        },
        {
            id: 3,
            title: "Actividad Cultural",
            category: "Arte y Cultura",
            status: "not-completed",
            date: "2025-10-25",
            priority: "low",
            type: "extra",
            matriz: "No Urgente y No Importante",
        },
        {
            id: 4,
            title: "Feria de Arte Local",
            category: "Arte y Cultura",
            status: "not-completed",
            date: "2025-11-05",
            priority: "low",
            type: "extra",
            matriz: "No Urgente y No Importante",
        },
    ];
}
