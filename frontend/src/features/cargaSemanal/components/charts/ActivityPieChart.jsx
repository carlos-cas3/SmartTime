import PieChartBase from "../../../../components/UI/Charts/PieChartBase";

export default function ActivityPieChart() {
    const data = [
        { name: "Tareas", value: 12 },
        { name: "Exámenes", value: 4 },
        { name: "Proyectos", value: 6 },
        { name: "Extras", value: 3 },
    ];

    const COLORS = ["#FFB300", "#F44336", "#7E57C2", "#4CAF50"];

    return (
        <PieChartBase
            data={data}
            dataKey="value"
            nameKey="name"
            colors={COLORS}
            innerRadius={100}
            outerRadius={140}
            showLegend={true}
        />
    );
}
