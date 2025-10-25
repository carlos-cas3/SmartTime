import { Bar, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from "recharts";
import BarChartBase from "./BarChartBase";
import CustomTooltipComparative from "./CustomToolTipComparative";
import CustomLegend from "./CustomLegend";

export default function BarChartComparative({ data, keys, colors }) {
    // Defaults — SOLO si el usuario NO manda `colors`
    const defaultColors = ["#2563eb", "#dc2626", "#16a34a", "#f59e0b"];

    // Elegimos color final usando `colors` si existe, si no usa default
    const getColor = (k, i) =>
        colors?.[k] || defaultColors[i % defaultColors.length];

    const maxValue = Math.max(
        ...data.flatMap((item) => keys.map((k) => item[k]))
    );
    const maxY = Math.ceil(maxValue / 5) * 5;

    return (
        <BarChartBase data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, maxY]} tickCount={maxY / 5 + 1}/>
            <Tooltip content={<CustomTooltipComparative />} />
            <Legend content={<CustomLegend/>}/>
            {keys.map((k, i) => (
                <Bar key={k} dataKey={k} fill={getColor(k, i)} />
            ))}
        </BarChartBase>
    );
}
