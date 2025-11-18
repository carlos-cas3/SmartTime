// Filtrar por prioridad
export function filterByPriority(items, allowed) {
    return items.filter((i) => allowed.includes(i.priority));
}

// Normalizar ítem
export function normalizeItem(item, type) {
    return {
        title: item.title,
        date: item.date,
        type,
    };
}

// Convertir "1d", "3d", "1w", etc en milisegundos
export function parseAdvanceTime(value) {
    const num = parseInt(value);

    if (value.endsWith("d")) {
        return num * 24 * 60 * 60 * 1000; // días
    }
    if (value.endsWith("w")) {
        return num * 7 * 24 * 60 * 60 * 1000; // semanas
    }

    // fallback: 1 semana
    return 7 * 24 * 60 * 60 * 1000;
}

// Filtrar por rango de tiempo desde ahora
export function filterByTime(items, advanceTime) {
    const limit = parseAdvanceTime(advanceTime);
    const now = new Date();

    return items.filter((item) => {
        if (!item.date) return false;

        const target = new Date(item.date);
        const diff = target - now;

        // > 0 → no está vencido
        // <= limit → dentro del rango configurado
        return diff > 0 && diff <= limit;
    });
}
