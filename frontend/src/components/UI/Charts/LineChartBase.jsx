import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import "./LineChartBase.css";

export default function LineChartBase({
    data = [],
    xKey = "x",
    yKey = "y",
    color = "#8B0000",
    height = 250,
    title,
    yDomainOffset = 2,
}) {
    // Si no hay datos, mostrar placeholder
    if (!data || data.length === 0) {
        return (
            <div className="linechart-base empty">
                <p>No hay datos disponibles</p>
            </div>
        );
    }

    const maxValue = Math.max(...data.map((d) => d[yKey])) + yDomainOffset;

    return (
        <div className="linechart-base">
            {title && <h4 className="linechart-title">{title}</h4>}

            <div className="linechart-wrapper" style={{ height }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            className="linechart-grid"
                        />
                        <XAxis dataKey={xKey} tick={{ fill: "#333" }} />
                        <YAxis domain={[0, maxValue]} tick={{ fill: "#333" }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#fff",
                                borderColor: color,
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey={yKey}
                            stroke={color}
                            strokeWidth={3}
                            dot={{ r: 5, fill: color }}
                            activeDot={{ r: 8, fill: color }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
