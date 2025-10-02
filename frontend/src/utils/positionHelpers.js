// src/utils/positionHelpers.js
export function calculatePositionFromRect(
    rect,
    menuWidth,
    menuHeight,
    margin = 8,
    preferredSide = null // 'left' | 'right' | null (hint)
) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Si hay preferredSide intentamos usarla primero
    const tryRight = preferredSide === "right" || preferredSide === null;
    const tryLeft = preferredSide === "left" || preferredSide === null;

    let x = Math.round(rect.right + margin);
    let y = Math.round(rect.top);
    let side = "right";

    // Si preferimos left, calculamos left primero
    if (preferredSide === "left") {
        x = Math.round(rect.left - menuWidth - margin);
        side = "left";
        // si no cabe -> fallback a right
        if (x < margin) {
            x = Math.round(rect.right + margin);
            side = "right";
        }
    } else if (preferredSide === "right") {
        x = Math.round(rect.right + margin);
        side = "right";
        // si no cabe -> fallback a left
        if (x + menuWidth > vw - margin) {
            x = Math.round(rect.left - menuWidth - margin);
            side = "left";
        }
    } else {
        // sin preferencia: tratar right y si no, left
        x = Math.round(rect.right + margin);
        side = "right";
        if (x + menuWidth > vw - margin) {
            x = Math.round(rect.left - menuWidth - margin);
            side = "left";
        }
    }

    // ajustar vertical si se sale por abajo
    if (y + menuHeight > vh - margin) {
        y = Math.round(Math.max(margin, rect.bottom - menuHeight));
    }

    // asegurar que no quede fuera por arriba/izq/der
    if (y < margin) y = margin;
    if (x < margin) x = margin;
    if (x + menuWidth > vw - margin) x = vw - menuWidth - margin;

    return { x, y, side };
}



