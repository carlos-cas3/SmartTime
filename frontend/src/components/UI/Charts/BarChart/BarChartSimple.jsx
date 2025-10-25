import { Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import BarChartBase from "./BarChartBase";

export default function BarChartSimple({
    data,
    xKey,
    yKey,
    color,
    height,
    showGrid = true,
    showTooltip = true,
}) {
    return (
        <BarChartBase data={data} height={height}>
            <XAxis dataKey={xKey} />    
            <YAxis />
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            {showTooltip && <Tooltip />}
            <Bar dataKey={yKey} fill={color} />
        </BarChartBase>
    );
}
