import BarChartStacked from "../../../components/UI/Charts/BarChartStacked";

export default function StudyHoursChart() {
    const data = [
        { name: "Page A", uv: 4000, pv: 2400 },
        { name: "Page B", uv: 3000, pv: 1398 },
        { name: "Page C", uv: 2000, pv: 9800 },
        { name: "Page A", uv: 4000, pv: 2400 },
        { name: "Page B", uv: 3000, pv: 1398 },
        { name: "Page C", uv: 2000, pv: 9800 },
    ];

    return (
        <BarChartStacked
            data={data}
            xKey="name"
            height={250}
            series={[
                { key: "pv", fill: "#8884d8" },
                { key: "uv", fill: "#82ca9d" },
            ]}
        />
    );
}
