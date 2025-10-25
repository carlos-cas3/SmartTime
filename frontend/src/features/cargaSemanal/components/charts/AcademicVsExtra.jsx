import PieChartBase from "../../../../components/UI/Charts/PieChartBase";

export default function AcademicVsExtra() {
    const data = [
        { name: "Académicas", value: 20 },
        { name: "Extras", value: 5 },
    ];
    const COLORS = ["#42A5F5", "#66BB6A"];
    return (
        <PieChartBase
            data={data}
            dataKey="value"
            nameKey="name"
            colors={COLORS}
            outerRadius={140}
            showLegend={true}
        />
    );
}
