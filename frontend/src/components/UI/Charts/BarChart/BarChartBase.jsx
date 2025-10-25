import {
    ResponsiveContainer,
    BarChart,
} from "recharts";

import "./BarChartBase.css";

export default function BarChartBase({ children, data, height = 300 }) {
    return (
        <div className="bar-chart-base">
            <ResponsiveContainer width="100%" height={height}>
                <BarChart data={data}>
                    {children}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
