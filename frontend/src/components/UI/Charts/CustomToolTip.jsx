export default function CustomTooltip({ active, payload }) {
    if (!active || !payload || payload.length === 0) return null;

    return (
        <div
            style={{
                padding: "1rem",
                borderRadius: "1rem",
                background: "white",
                boxShadow: "0 0.2rem 0.8rem rgba(0,0,0,0.15)",
                fontSize: "0.9rem",
                minWidth: "120px",
            }}
        >
            {payload.map((entry, index) => {
                const item = entry.payload; // ✅ datos originales completos
                return (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.3rem",
                        }}
                    >
                        {/* círculo del color de la barra */}
                        <span
                            style={{
                                width: "1rem",
                                height: "1rem",
                                borderRadius: "1rem",
                                background: item.fill, // ✅ color real definido
                            }}
                        ></span>

                        {/* texto */}
                        <span style={{ fontWeight: 500 }}>
                            {item.name}: {item.originalValue ?? item.value}%
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
