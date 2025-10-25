export default function CustomLegend({ payload }) {
    if (!payload) return null;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center", // ✅ centrado
                gap: "1.5rem",
                marginTop: "0.5rem",
            }}
        >
            {payload.map((entry) => (
                <div
                    key={entry.value}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    <div
                        style={{
                            width: "1rem",
                            height: "1rem",
                            borderRadius: "1rem", // ✅ círculo
                            background: entry.color, // ✅ color sincronizado
                        }}
                    />
                    <span
                        style={{
                            fontSize: "0.9rem",
                            //color: entry.color, // ✅ texto también con su color
                            fontWeight: 500,
                        }}
                    >
                        {entry.value}
                    </span>
                </div>
            ))}
        </div>
    );
}
