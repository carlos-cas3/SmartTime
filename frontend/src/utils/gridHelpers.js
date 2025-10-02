export default function getRowCol(date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

    // Convertir domingo (0) a 7, y ajustar para que lunes sea 0
    let startDay = startOfMonth.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1; // Lunes = 0, Domingo = 6

    // Días desde el inicio del mes
    const dayOfMonth = date.getDate();

    // Posición absoluta en la cuadrícula (0-indexed)
    const absolutePosition = startDay + dayOfMonth - 1;

    // Calcular fila y columna
    const row = Math.floor(absolutePosition / 7);
    const col = absolutePosition % 7;

    return { row, col };
}
