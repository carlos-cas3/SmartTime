import RadialChartBase from "../../../components/UI/Charts/RadialChartBase";

export default function ProductivityRadialChart() {
    const data = [
        { name: "Tareas", value: 50 },
        { name: "Exámenes", value: 30 },
        { name: "Proyectos", value: 70 },
        { name: "Extras", value: 40 },
    ];

    const colors = ["#7f5af0", "#ef476f", "#06d6a0", "#ffd166"];

    return (
        <RadialChartBase
            data={data}
            colors={colors}
            height={300}
            innerRadius="15%"
            outerRadius="100%"
        />
    );
}
