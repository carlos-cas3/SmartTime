export default function CustomTooltipComparative({ active, payload }) {
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
            {/* Título: Día (name) */}
            <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                {payload[0].payload.name}
            </div>

            {payload.map((entry, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.3rem",
                    }}
                >
                    <span
                        style={{
                            width: "1rem",
                            height: "1rem",
                            borderRadius: "1rem",
                            background: entry.color, // ✅ Color real de la barra
                        }}
                    ></span>

                    <span style={{ fontWeight: 500 }}>
                        {entry.dataKey}: {entry.value}
                    </span>
                </div>
            ))}
        </div>
    );
}
