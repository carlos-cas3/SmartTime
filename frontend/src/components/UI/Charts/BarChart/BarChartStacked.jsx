import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import BarChartBase from "./BarChartBase";

export default function BarChartStacked({
    data,
    xKey,
    series, // [{ key: "uv", fill: "#xxx" }, ...]
    height = 250,
    showGrid = true,
    showTooltip = true,
    showLegend = true,
}) {
    return (
        <BarChartBase data={data} height={height}>
            <XAxis dataKey={xKey} />
            <YAxis />
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}

            {series.map((s, index) => (
                <Bar key={index} dataKey={s.key} stackId="a" fill={s.fill} />
            ))}
        </BarChartBase>
    );
}
