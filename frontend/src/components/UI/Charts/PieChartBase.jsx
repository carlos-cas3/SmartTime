import {
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
    Sector,
} from "recharts";
import "./PieChartBase.css";

const renderActiveShape = (props) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;

    return (
        <g>
            {/* Nombre */}
            <text
                fontSize={20}
                x={cx}
                y={cy - 25}
                textAnchor="middle"
                fill={fill}
                fontWeight="bold"
            >
                {payload.name}
            </text>

            {/* Valor */}
            <text
                x={cx}
                y={cy + 5}
                textAnchor="middle"
                fill={fill}
                fontSize={22}
                fontWeight="bold"
            >
                {`${value}`}
            </text>

            {/* Porcentaje */}
            <text
                x={cx}
                y={cy + 30}
                textAnchor="middle"
                fill={fill}
                fontSize={16}
                fontWeight="500"
            >
                {`(${(percent * 100).toFixed(1)}%)`}
            </text>

            {/* Sector principal */}
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />

            {/* Borde resaltado */}
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

export default function PieChartBase({
    data = [],
    dataKey = "value",
    nameKey = "name",
    colors = ["#8B0000", "#FF9800", "#2196F3", "#4CAF50"],
    title,
    subtitle,
    height = 350,
    innerRadius = 100,
    outerRadius = 140,
}) {
    return (
        <div className="piechart-container" style={{ height }}>
            {title && <h4 className="piechart-title">{title}</h4>}
            {subtitle && <p className="piechart-subtitle">{subtitle}</p>}

            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        activeShape={renderActiveShape}
                        data={data}
                        cx="45%"
                        cy="50%"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        dataKey={dataKey}
                        nameKey={nameKey}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Pie>

                    <Legend
                        iconType="circle"
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        wrapperStyle={{
                            fontSize: 18,
                        }}
                        
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
