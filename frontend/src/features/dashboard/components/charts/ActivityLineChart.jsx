// components/ActivityLineChart.jsx
import LineChartBase from "../../../../components/UI/Charts/LineChartBase";

export default function ActivityLineChart() {
    // Datos específicos del dashboard
    const data = [
        { week: "Sem 1", activities: 8 },
        { week: "Sem 2", activities: 12 },
        { week: "Sem 3", activities: 15 },
        { week: "Sem 4", activities: 20 },
    ];

    return (
        <LineChartBase
            data={data}
            xKey="week"
            yKey="activities"
            color="#8B0000"
            title="Actividades Semanales"
            height={250}
        />
    );
}
