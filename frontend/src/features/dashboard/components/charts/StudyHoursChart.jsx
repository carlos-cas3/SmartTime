import BarChartSimple from "../../../../components/UI/Charts/BarChart/BarChartSimple";

export default function StudyHoursChart() {
    const data = [
        { day: "Lun", hours: 4 },
        { day: "Mar", hours: 3 },
        { day: "Mie", hours: 6 },
        { day: "Jue", hours: 2 },
        { day: "Vie", hours: 5 },
        { day: "Sab", hours: 7 },
        { day: "Dom", hours: 4 },
    ];

    return (
        <BarChartSimple
            data={data}
            xKey="day"
            yKey="hours"
            color="#8B0000"
            showGrid={true}
            showTooltip={true}
        />
    );
}
