export function generateInitialsAvatar(name: string, size = 200): string {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) return "";

    // --- Iniciales ---
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    // --- Color aleatorio pero estable ---
    const colors = ["#4A90E2", "#50E3C2", "#F5A623", "#D0021B", "#9013FE"];
    const hash = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
    const bgColor = colors[hash % colors.length];

    // --- Fondo ---
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    // --- Texto ---
    ctx.fillStyle = "white";
    ctx.font = `${size * 0.45}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(initials, size / 2, size / 2);

    // Convertimos a Base64
    return canvas.toDataURL("image/png");
}
