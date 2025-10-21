import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

export default function ActivityLineChart() {
    const data = [
        { week: "Sem 1", activities: 8 },
        { week: "Sem 2", activities: 12 },
        { week: "Sem 3", activities: 15 },
        { week: "Sem 4", activities: 20 },
    ];

    // Valor máximo dinámico del eje Y
    const maxValue = Math.max(...data.map((d) => d.activities)) + 2;

    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="week" tick={{ fill: "#333" }} />
                    <YAxis domain={[0, maxValue]} tick={{ fill: "#333" }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#fff",
                            borderColor: "#8B0000",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="activities"
                        stroke="#8B0000"
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#8B0000" }}
                        activeDot={{ r: 8, fill: "#8B0000" }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
