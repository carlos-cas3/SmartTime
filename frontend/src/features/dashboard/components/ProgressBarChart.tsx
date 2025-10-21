// src/components/charts/ProgressBarChart.tsx
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface ProgressBarChartProps {
    value: number;
}

const ProgressBarChart: React.FC<ProgressBarChartProps> = ({ value }) => {
    const data = [
        {
            name: "Progreso",
            value,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height={"120px"}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="value" fill="#8b0000" radius={[5, 5, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ProgressBarChart;
