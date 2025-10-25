import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
    ResponsiveContainer,
    PolarAngleAxis,
} from "recharts";
import "./RadialChartBase.css";

import CustomLegend from "./CustomLegend";
import CustomTooltip from "./CustomToolTip";

const RadialChartBase = ({
    data = [],
    colors = [],
    width = "100%",
    height = 350,
    innerRadius = "90%",
    outerRadius = "110%",
    startAngle = 90,
    endAngle = -270,
    showTooltip = true,
    showLegend = true,
    onChartClick,
}) => {
    const sanitized = data.map((item) => ({
        ...item,
        value: Math.max(0, Math.min(100, item.value)),
    }));

    const normalizedData = sanitized.map((item, index) => ({
        ...item,
        originalValue: item.value,
        fill: colors[index] || `hsl(${(index * 90) % 360}, 60%, 60%)`,
    }));

    return (
        <div className="radial-chart-container">
            <div style={{ width, height }}>
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        data={normalizedData}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        onClick={onChartClick}
                    >
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            tick={false}
                        />

                        <RadialBar
                            dataKey="value"
                            clockWise
                            cornerRadius={8}
                            minAngle={6}
                            barSize={14}
                        />

                        {showTooltip && <Tooltip content={<CustomTooltip />} />}
                        {showLegend && <Legend content={<CustomLegend />} />}
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RadialChartBase;
