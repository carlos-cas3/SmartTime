export function filterByPriority(items, allowed) {
    return items.filter((i) => allowed.includes(i.priority));
}

export function normalizeItem(item, type) {
    return {
        title: item.title,
        date: item.date,
        type,
    };
}