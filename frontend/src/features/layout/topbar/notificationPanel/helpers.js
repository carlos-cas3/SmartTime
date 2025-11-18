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

    // Normalizar "hoy"
    const now = new Date();
    now.setHours(0, 0, 0, 0); // inicio del día

    return items.filter((item) => {
        if (!item.date) return false;

        const target = new Date(item.date);

        target.setHours(23, 59, 59, 999);

        const diff = target - now;

        return diff > 0 && diff <= limit;
    });
}
